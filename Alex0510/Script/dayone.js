/*
dayone日记高级版
https://dayone.me/api/v2/users/(receipt|account-status)
hostname：dayone.me

*/
const path1 = "/account-status";
const path2 = "/receipt";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
  "expirationDate": 1866888955000,
  "startDate": 1582805832000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1582805831000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
    }
}
if ($request.url.indexOf(path2) != -1){
obj={
  "bundle": {
    "bundleName": "premium",
    "features": [
      {
        "name": "imagesPerEntry",
        "limit": 30,
        "canUpgrade": false
      },
      {
        "name": "journalLimit",
        "limit": 100,
        "canUpgrade": false
      },
      {
        "name": "audioPerEntry",
        "limit": 10,
        "canUpgrade": false
      },
      {
        "name": "sync",
        "canUpgrade": false
      },
      {
        "name": "syncMac",
        "canUpgrade": false
      },
      {
        "name": "printingDiscount",
        "canUpgrade": false
      },
      {
        "name": "prioritySupport",
        "canUpgrade": false
      }
    ]
  },
  "reason": "purchase"
}
}
$done({body: JSON.stringify(obj)});
