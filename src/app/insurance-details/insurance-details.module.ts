import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details.component';

export const CLAIMS_ROUTES: Routes = [
  {
    path: 'insurance',
    component: InsuranceDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CLAIMS_ROUTES)
  ],
  exports:[RouterModule]
})
export class InsuranceDetailsModule {
  constructor(){
    console.log("InsuranceDetailsModule Class Called");
  }
    
 }
