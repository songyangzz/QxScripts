

var body = $response.body;
var url = $request.url;
var huangyoukey="hykeyproduct"
let obj = JSON.parse(body);
obj.enable=true;
obj.style="none";
obj.priceRemark="";
for(var i=0;i<obj.price.length;i++){
	
	obj.price[i].enable=true;
	obj.price[i].style="none";
	obj.price[i].localizedOriginalPrice="0.00";
	obj.price[i].localizedPrice="0.00";
	obj.price[i].price=0;
	obj.price[i].originalPrice=0;
	obj.price[i].ownershipType="free";
}

$prefs.setValueForKey(huangyoukey, obj.items);
body = JSON.stringify(obj);  
$done({body});