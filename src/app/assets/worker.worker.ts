/// <reference lib="webworker" />

import { InsuranceDetails } from "../model/insurance-details";

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  const totalPaymentValue = calculateTotalPayment(data);
  const totalClaimValue = calculateTotalClaim(data);
  const reponseObj = {} as { totalPaymentValue: number, totalClaimValue: number };
  reponseObj["totalPaymentValue"] = totalPaymentValue;
  reponseObj["totalClaimValue"] = totalClaimValue;
  console.log("Sum Value: "+ reponseObj);
  postMessage(reponseObj);
});


function calculateTotalPayment(insuranceDetails: InsuranceDetails){
  if(insuranceDetails != null && insuranceDetails != undefined){
    return insuranceDetails.paymentHistory.map(paymentHistoryObj => paymentHistoryObj.amount).reduce((sum, current)=> sum + current, 0);
  }
  return 0;
}

function calculateTotalClaim(insuranceDetails: InsuranceDetails){
  if(insuranceDetails != null && insuranceDetails != undefined){
    return insuranceDetails.claimHistory.map(claimHistoryObj => claimHistoryObj.amount).reduce((sum, current)=> sum + current, 0);
  }
  return 0;
}