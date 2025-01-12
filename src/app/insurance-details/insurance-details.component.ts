import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InsuranceDetails, PolicyType } from '../model/insurance-details';
import { CommonService } from '../services/common.service';
import { TableModule } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurance-details',
  standalone: true,
  imports: [CardModule, AccordionModule, ButtonModule, FormsModule, InputTextModule, TableModule, CommonModule],
  templateUrl: './insurance-details.component.html',
  styleUrl: './insurance-details.component.scss'
})
export class InsuranceDetailsComponent implements OnInit {

  activeIndex: number | undefined = 0;
  active: any;

  policyDetails: { policyTypeName?: string, policyTypeDisplayName?: string } = {};
  public insuranceDetails : InsuranceDetails | any;

  totalPaymentValue: number | any;
  totalClaimValue: number | any;
 
  userProfileModule: any;

  constructor(private commonService: CommonService, private route: ActivatedRoute) {
    
  }

  activeIndexChange(index : number) {
      this.activeIndex = index
  }

   ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const type = params.get('type');
      var profileId = this.commonService.getItem("profileId");
      if (profileId) {
        profileId = profileId.replace("auth0|", '');
        profileId = profileId.replace(/"/g, "");
      }
      console.log("type: " + type + " uid: " + profileId);
      let policyType: PolicyType = PolicyType[type as keyof typeof PolicyType];
      const dataKey = "insurance_" + policyType.toString().toLowerCase() + "_" + profileId + "_data";
      this.active = "0";
      var insuranceDetailsData = this.commonService.getItem(dataKey);
      if(insuranceDetailsData !== null){
        this.insuranceDetails = JSON.parse(insuranceDetailsData?insuranceDetailsData: "");
        console.log("getDetails: " + this.insuranceDetails);
        this.getPolicyTypeInfo(this.insuranceDetails.policyDetails.type);
       // this.calculateTotalPayment(this.insuranceDetails);
      }
      else {
        console.log("No data found for the key: " + dataKey );
        return;
      }
    });

  }

  calculateTotalPayment(insuranceDetails: InsuranceDetails) {
      console.log("Total Payment calculate call to web-worker:");
      if (typeof Worker !== 'undefined' && insuranceDetails !== null) {
        const worker = new Worker(new URL('../insurance-web-worker.worker', import.meta.url));
        const worker1= new Worker(new URL('http://localhost:4201/worker.worker.js'));
        const worker2 = new Worker(
          new URL('/assets/worker/worker.worker.js', window.location.origin),
          { type: 'module' }
        );

        worker.onmessage = ({ data }) => {
          this.totalPaymentValue = data.totalPaymentValue;
          this.totalClaimValue = data.totalClaimValue;
          console.log("Results from worker: " + data);
          worker.terminate();
        };
        worker.postMessage(insuranceDetails);
      } else {
        console.error('Web Workers are not supported in this environment.');
      }
  }


  getPolicyTypeInfo(type: PolicyType){
    const toRet = this.policyDetails;
    switch (type) {
      case PolicyType.Health | 1:
        toRet.policyTypeDisplayName = "Health Insurance";
        toRet.policyTypeName = "HEALTH";
        return toRet;
      case PolicyType.Auto | 2:
        toRet.policyTypeDisplayName = "Auto Insurance";
        toRet.policyTypeName = "AUTO";
        return toRet;
      case PolicyType.Life | 3:
        toRet.policyTypeDisplayName = "Life Insurance";
        toRet.policyTypeName = "LIFE";
        return toRet;
      case PolicyType.Term | 4:
        toRet.policyTypeDisplayName = "Term Insurance";
        toRet.policyTypeName = "TERM";
        return toRet;
      default:
        return "Unknown Policy Type";
    }
  }
}
