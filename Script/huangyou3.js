var huangyoukey="hykeyproduct";
var items=$prefs.valueForKey(huangyoukey);
console.log("id" + items);

var body=$response.body;
obj = JSON.parse(body);
obj.items[0].items[0].id=items;
body = JSON.stringify(obj);  
$done({body});