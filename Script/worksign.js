


const title = '工作问卷'

const sy = init()

sign()

function sign() {


  console.log('工作问卷-开始签到');
  let url = { url: `https://www.91pxb.com/?mod=signup&do=signup&course_id=5453210&action=signup&type=inajax&signup%5Bemployee_id%5D=032402&signup%5Bchinese_name%5D=%E5%AE%8B%E6%89%AC&signup%5Bextend%5D%5B650822%5D%5Bdata_value%5D=2020%E5%B9%B4%E5%BB%BA%E4%BF%A1%E5%9F%BA%E9%87%91%E8%BF%90%E7%BB%B4%E6%9C%8D%E5%8A%A1%E9%A1%B9%E7%9B%AE&signup%5Bextend%5D%5B650822%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B651761%5D%5Bdata_value%5D=%E4%BA%BA%E5%91%98%E5%A4%96%E5%8C%85&signup%5Bextend%5D%5B651761%5D%5Bdata_type%5D=radio&signup%5Bextend%5D%5B650823%5D%5Bdata_value%5D=%E8%8B%8F%E8%BF%9E%E8%BF%AA&signup%5Bextend%5D%5B650823%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650878%5D%5Bdata_value%5D=%E5%BB%BA%E4%BF%A1%E5%9F%BA%E9%87%91&signup%5Bextend%5D%5B650878%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650816%5D%5Bdata_value%5D=%E5%B1%B1%E8%A5%BF%E7%9C%81%E6%99%8B%E4%B8%AD%E5%B8%82&signup%5Bextend%5D%5B650816%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650824%5D%5Bdata_value%5D=%E5%8C%97%E4%BA%AC%E5%B8%82&signup%5Bextend%5D%5B650824%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650825%5D%5Bdata_value%5D=2020-2-3&signup%5Bextend%5D%5B650825%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650817%5D%5Bdata_value%5D=%E5%B7%B2%E8%BF%94%E5%9B%9E&signup%5Bextend%5D%5B650817%5D%5Bdata_type%5D=radio&signup%5Bextend%5D%5B650818%5D%5Bdata_value%5D=%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC&signup%5Bextend%5D%5B650818%5D%5Bdata_type%5D=radio&signup%5Bextend%5D%5B650819%5D%5Bdata_value%5D=%E5%BE%85%E5%AE%9A&signup%5Bextend%5D%5B650819%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B650820%5D%5Bdata_value%5D=%E5%90%A6&signup%5Bextend%5D%5B650820%5D%5Bdata_type%5D=radio&signup%5Bextend%5D%5B650826%5D%5Bdata_value%5D=&signup%5Bextend%5D%5B650826%5D%5Bdata_type%5D=text&signup%5Bextend%5D%5B651772%5D%5Bdata_value%5D=%E6%9C%AC%E4%BA%BA%E6%89%BF%E8%AF%BA%E5%A1%AB%E5%86%99%E4%BF%A1%E6%81%AF%E5%9D%87%E4%B8%BA%E7%9C%9F%E5%AE%9E%E4%BF%A1%E6%81%AF&signup%5Bextend%5D%5B651772%5D%5Bdata_type%5D=radio&submited=true&signup_id=182816&root_company_id=1294829`, headers: {} };

  url.headers['Origin']='https://www.91pxb.com';
  url.headers['Referer']='https://www.91pxb.com/signup/1294829/5453210/182816';
  url.headers['Cookie']='Tk_d15b_saltkey=hzdPE2H6; Tk_d15b_lastvisit=1581671340; Tk_d15b_sid=ifw2ty; Tk_d15b__did_=EE96B291710E47C7840DCF271B1A0C1A; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1581674943; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1581674943; _ga=GA1.2.363822813.1581674943; _gid=GA1.2.2027031744.1581674943';
  url.headers['Host']='www.91pxb.com';
  url.headers['User-Agent']='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36';

  sy.post(url, (error, response, data) => {
    sy.log(response);
    sy.log(data);
    let result = JSON.parse(data)
    let detail='';
    if (response == 200) {
      if(result.isok){
     sy.msg(title, '签到成功', detail)
      }
    } else if(response == 400) {
      subTitle = '签到结果: 重复'
      sy.msg(title, subTitle, detail)
    }
	else{
      subTitle = '签到结果: 未知'
      sy.msg(title, subTitle, detail)
	}
  })
  sy.done()
}

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
      $task.fetch(url).then((resp) => cb(null, resp.statusCode, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}