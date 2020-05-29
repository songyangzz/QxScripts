/*
语音翻译器解锁Pro
https://app.xunjiepdf.com/api/v4/memprofile
*/

let obj = JSON.parse($response.body);

obj.userinfo.vip = [{"id":10737588,"auth_type":1,"auth_value":3586487547}]
$done({body: JSON.stringify(obj)});
