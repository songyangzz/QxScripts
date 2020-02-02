

var huangyoukey="hykeyproduct";
var items=$prefs.valueForKey(huangyoukey);
var body={
	"charge": {
		"paymentChannel": "unknown"
	},
	"createdAt": 1580061169,
	"id": "qRzjyABq8s8ikmf",
	"items": "",
	"paymentChannels": ["butter:redemption", "pingxx:paypal", "pingxx:qq", "pingxx:wx", "butter:redemption", "pingxx:alipay", "apple:iap"],
	"price": 0,
	"status": "verified",
	"uid": "e62ef1f2fdca47a58467290ef5f8a78e",
	"updatedAt": 1580061169
};
body.items=items;
body = JSON.stringify(body);  
$done({body});