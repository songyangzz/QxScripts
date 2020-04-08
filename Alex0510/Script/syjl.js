
var obj = JSON.parse($response.body);

  obj. data= {
    "user_id": 叫爸爸,
    "nick_name": "我是你爸爸",
    "head_img":"https://img2.woyaogexing.com/2017/12/28/2faa32ef81d9d6dc!400x400_big.jpg",
    "is_vip": 1,
    "vip_end_time": "2099-12-15 12:15:12"
  }


$done({body: JSON.stringify(obj)});
