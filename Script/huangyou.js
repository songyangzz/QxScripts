

var body = $response.body;
var url = $request.url;

let obj = JSON.parse(body);
let vip={
		"endAt": 3742732800,
		"id": "1",
		"name": "普通会员",
		"ownership": "permanent",
		"startAt": 1580038534,
		"usageType": "unlimited"
};
obj.memberships[0]=vip;
obj.memberships[0].endAt = 3742732800;
obj.memberships[0].id="1";
obj.memberships[0].name="普通会员";
obj.memberships[0].ownership="permanent";
obj.memberships[0].startAt=1580038534;
obj.memberships[0].usageType="unlimited";
body = JSON.stringify(obj);  


$done({body});