/*
幕布解锁Pro
https://mubu.com/api/app/user/info
*/

let obj = JSON.parse($response.body);

obj.data.vipEndDate = "20291231"
$done({body: JSON.stringify(obj)});
