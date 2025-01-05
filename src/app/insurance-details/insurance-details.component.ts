import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InsuranceDetails, PolicyType } from '../model/insurance-details';
import { CommonService } from '../services/common.service';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-insurance-details',
  imports: [CardModule, AccordionModule, ButtonModule, FormsModule, InputTextModule, TableModule],
  templateUrl: './insurance-details.component.html',
  styleUrl: './insurance-details.component.scss'
})
export class InsuranceDetailsComponent implements OnInit{

  activeIndex: number | undefined = 0;
  active: any;

  policyDetails: object | undefined;
  public insuranceDetails : InsuranceDetails | any;

  constructor(private commonService: CommonService){
    
  }

  activeIndexChange(index : number){
      this.activeIndex = index
  }

  ngOnInit(): void {
    this.active = "0";
    this.commonService.initializeSampleData();
    var insuranceDetailsData = this.commonService.getItem("insurance_health_U001_data");
    this.insuranceDetails = JSON.parse(insuranceDetailsData?insuranceDetailsData: "");
    console.log("getDetails: " + this.insuranceDetails);
  }

  getInsuranceDisplayName(type: PolicyType){
    switch (type) {
      case PolicyType.Health:
        return "Health Insurance";
      case PolicyType.Auto:
        return "Auto Insurance";
      case PolicyType.Life:
        return "Life Insurance";
      case PolicyType.Term:
        return "Term Insurance";
      default:
        return "Unknown Policy Type";
    }
  }
}
