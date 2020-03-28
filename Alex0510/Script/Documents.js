/*
https://license.pdfexpert.com/api/1.0/documents/subscription/refresh
hostname：license.pdfexpert.com
*/



var obj = JSON.parse($response.body);

obj ={
"isEligibleForIntroPeriod":true,
"originalTransactionId":"689300364339354",
"subscriptionExpirationDate":"12:25 12/12/2029",
"subscriptionState":"active",
"subscriptionReceiptId":"152304284583",
"isDocuments6User":true,
"subscriptionAutoRenewStatus":"autoRenewOff",
"isInGracePeriod":true
}
$done({body: JSON.stringify(obj)});
