const API = require('xyzweather');
const querystring = require('querystring');

const UID = 'U62F4FA333'; // 测试用 用户ID，请更换成您自己的用户ID
const KEY = 'ehlsifbvpkcmvmck'; // 测试用 key，请更换成您自己的 Key
const api = new API(UID, KEY);

// 实时天气
// api.getWeatherNow('ip').then(res => console.log(res));

function getSignatureParams() {
  const params = {};
  params.ts = Math.floor((new Date()).getTime() / 1000); // 当前时间戳（秒）
  // params.ttl = 300; // 过期时间
  params.uid = UID; // 用户ID

  const str = querystring.encode(params); // 构造请求字符串

  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串进行加密
  params.sig = crypto.createHmac('sha1', KEY)
    .update(str)
    .digest('base64'); // 将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig

  return params;
}
