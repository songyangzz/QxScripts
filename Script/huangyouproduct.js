

var body = $response.body;
var url = $request.url;
const sy = init();
const huangyoukey='hykeyproduct';
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
console.log(obj.items[0].id);
console.log(sy.setdata(obj.items[0].id,huangyoukey));
body = JSON.stringify(obj);


function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
$done({body});