/*
caml解锁免费听
https://api.calm.com/(me|device|ios/receipt)
*/


const path1 = "/me";
const path2 = "/device";
const path3 = "/ios/receipt";

let key = {
  "in_free_trial_window": true,
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_50",
  "began": "2019-04-22T12:12:54.000Z",
  "is_lifetime": true,
  "valid": true,
  "is_renewable": true,
  "is_in_billing_retry_period": false,
  "will_renew": true,
  "expires": "2099-04-29T12:12:54.000Z",
  "user_id": "KgagpU1URv",
  "type": "ios",
  "is_canceled": false,
  "free_trial_began": "2019-04-22T12:12:54.000Z",
  "coupon_used": false,
  "has_ever_done_free_trial": true,
  "is_free": false,
  "ios_details": {
    "product_id": "com.calm.yearly.trial.one_week.usd_50",
    "began": "2019-04-22T12:12:54.000Z",
    "is_free_trial": true,
    "id": "540000370675471",
    "is_canceled": false,
    "is_renewable": true,
    "free_trial_ended": "2099-04-29T12:12:54.000Z",
    "free_trial_began": "2019-04-22T12:12:54.000Z",
    "will_renew": true,
    "original_transaction_id": "540000370675471",
    "expires": "2099-04-29T12:12:54.000Z"
  },
  "free_trial_ended": "2099-04-29T12:12:54.000Z"
};

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj["subscription"]= key;
}
if ($request.url.indexOf(path2) != -1){
obj["subscription"]= key;
}
if ($request.url.indexOf(path3) != -1){
obj = {
  "ios_details": {
    "id": "160000700663112",
    "began": "2020-03-13T03:20:31.000Z",
    "purchaser_platform": "ios",
    "is_free_trial": true,
    "is_renewable": true,
    "is_in_billing_retry_period": false,
    "will_renew": false,
    "expires": "2099-04-29T03:20:31.000Z",
    "is_canceled": true,
    "payment_processor": "itunes",
    "free_trial_began": "2020-03-13T03:20:31.000Z",
    "original_transaction_id": "160000700663112",
    "plan_duration": "year",
    "product_id": "com.calm.yearly.trial.one_week.usd_60",
    "free_trial_length_in_days": 7,
    "free_trial_ended": "2099-04-29T03:20:31.000Z"
  },
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_60",
  "has_ever_done_free_trial": true,
  "user_id": "Y0i5UvYhRv",
  "plan_duration": "year",
  "free_trial_ended": "2099-04-29T03:20:31.000Z",
  "purchaser_platform": "ios",
  "is_in_billing_retry_period": false,
  "free_trial_began": "2020-03-13T03:20:31.000Z",
  "has_ever_had_ios_subscription": false,
  "is_canceled": true,
  "will_renew": false,
  "is_lifetime": false,
  "type": "ios",
  "free_trial_length_in_days": 7,
  "is_free": true,
  "expires": "2099-04-29T03:20:31.000Z",
  "valid": false,
  "payment_processor": "itunes",
  "began": "2020-03-13T03:20:31.000Z",
  "in_free_trial_window": true,
  "is_renewable": true
}
}
$done({body:JSON.stringify(obj)});
