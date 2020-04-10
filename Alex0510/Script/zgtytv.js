/*
中国体育tv观看VIP视频

http://rest.zhibo.tv/room/get-room-info-v430

*/


let obj = JSON.parse($response.body);


obj.data.anchor["userHas"] = 1,
obj.data.anchor["trialConst"] = 12000,
obj.data.anchor["trialToast"] = "",
obj.data.anchor["trialTime"] = 12000,
obj.data.anchor["canTrial"] = 1,
obj.data.anchor["countDownInfo"] = ""
$done({body: JSON.stringify(obj)});

