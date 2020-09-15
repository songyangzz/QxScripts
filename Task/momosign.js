/*=================================
关注微信公众号iosrule和微信群

#陌陌极速版App签到
https:\/\/mk\.immomo\.com\/activity\/fastsign\/index\/signIn? url script-request-body momosign.js

#定时
0 2,13,25,45,55 0-23 * * ? momosign.js, tag=陌陌极速版签到, enabled=false

mit=mk.immomo.com

//====================================

#loon 陌陌极速版App签到
http-request https:\/\/mk\.immomo\.com\/activity\/fastsign\/index\/signIn? script-path=momosign.js, requires-body=true, timeout=30, tag=陌陌极速版

mit=mk.immomo.com


*/




//====================================
const $iosrule = iosrule();

const log=1;//设置0关闭日志,1开启日志

//++++++++++++++++++++++++++++++++-


const momo="陌陌极速版APP";
const momourlname="momourlname";
const momobdname="momobdname";
const momohdname="momohdname";
const momourl=$iosrule.read(momourlname);
const momobd=$iosrule.read(momobdname);
const momohd=$iosrule.read(momohdname);
//++++++++++++++++++++++++++++++++

//3.需要执行的函数都写这里
function main()
{        momo_begin();
}

function momo_begin()
{
momo_sign();


}


//++++++++++++++++++++++++++++++++++++
//4.基础模板

if ($iosrule.isRequest) {
  momo_getck()
  $iosrule.end()
} else {
  main();
  $iosrule.end()
}

function momo_sign()
  {
   var result1="[签到😯]";
   var result2="";



  const llUrl1={
      url:momourl,
      headers:JSON.parse(momohd),
      body:momobd,
      timeout:600};
     console.log(momourl)
     
     console.log(momohd)
          console.log(momobd)
  $iosrule.post(llUrl1,function(error, response, data) {
if(log==1)console.log(JSON.stringify(data))


result2="签到成功";

papa(momo,result1,result2);

})}

  
 


function momo_getck() {

  if ($request.headers) {

 var urlval = $request.url;
var md_bd=$request.body;
var md_hd=$request.headers;
if(urlval.indexOf("activity/fastsign/index/signIn")>=0)
{

 var sk= $iosrule.write(urlval,momourlname);
 var sl= $iosrule.write(JSON.stringify(md_hd),momohdname);
 var sm= $iosrule.write(md_bd,momobdname);

if (sk==true&&sl==true&&sm==true) 
 papa(momo,"[获取签到数据]","✌🏻成功");}



  
}}









function papa(x,y,z){

$iosrule.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}




function iosrule() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};