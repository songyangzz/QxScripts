/*
  参考chavyleung和NobyDa的写法
  
  打开elem APP,进入签到页面，提示获取用户ID成功就可以把rewrite注释掉。只需要获取一次用户ID即可。
  理论上永不会过期。
*/

const cookieName = '饿了么'
const cookieKey = 'cookie_elem'
const sy = init()
const cookieVal = "";
GetCookie();

function GetCookie() {
  if ($response.body) {
    var CookieValue = $response.body;
    if (sy.getdata(CookieKey) != (undefined || null)) {
      if (sy.getdata(CookieKey) != CookieValue) {
        var cookie = sy.setdata(CookieValue, CookieKey);
        if (!cookie) {
          sy.msg("更新" + CookieName + "UserID失败‼️", "", "");
        } else {
          sy.msg("更新" + CookieName + "UserID成功 🎉", "", "");
        }
      }
    } else {
      var cookie = sy.setdata(CookieValue, CookieKey);
      if (!cookie) {
        sy.msg("首次写入" + CookieName + "UserID失败‼️", "", "");
      } else {
        sy.msg("首次写入" + CookieName + "UserID成功 🎉", "", "");
      }
    }
  } else {
    sy.msg("写入" + CookieName + "UserID失败‼️", "", "配置错误, 无法读取响应体, ");
  }
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
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
sy.done()