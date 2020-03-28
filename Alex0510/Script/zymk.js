let obj = JSON.parse($response.body);

obj.data= {
    "Uviptime": 1603438021000,
    "Ulevel": 5,
    "isvip": 1,
    "vipdate": "2020-10-23 00:00:00"
  }


$done({body: JSON.stringify(obj)});
