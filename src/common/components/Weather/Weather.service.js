import crypto from 'crypto';
import querystring from 'querystring';

import Http from '../../utils/http.util';
import API from './Weather.api';

const KEY = 'ehlsifbvpkcmvmck'; // API key

const defaultParams = {
  // ts: null, // 当前时间戳（秒）
  uid: 'U62F4FA333',
  // ttl: 300, // 过期时间（秒）

  location: 'ip', // 根据 IP 指定城市
  language: 'zh-Hans', // 语言：简体中文
  unit: 'c', // 温度单位：摄氏度
};


const service = {};

service.getCurrentWeather = () => {
  const {
    ts = Math.floor(Date.now() / 1000), uid,
    location, language, unit,
  } = defaultParams;

  const params = {
    ts, uid, sig: null, location, language, unit,
  };

  const sig = { ts, uid };


  const sigQueryString = querystring.encode(sig); // 构造请求字符串

  // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串进行加密
  params.sig = crypto.createHmac('sha1', KEY)
    .update(sigQueryString)
    .digest('base64'); // 将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig

  const paramsQueryString = querystring.encode(params);

  return Http.jsonp(`${API.NOW}?${paramsQueryString}`).then((data) => {
    const {
      results: [
        {
          /*
           *  {
           *    id: "WX4FBXXFKE4F",
           *    name: "北京",
           *    country: "CN",
           *    path: "北京,北京,中国",
           *    timezone: "Asia/Shanghai",
           *    timezone_offset: "+08:00"
           *  }
           */
          location: loc,

          /*
           *  {
           *    text: "多云",
           *    code: "4",
           *    temperature: "1"
           *  }
           */
          now,
        },
      ],
    } = data;

    return { now, location: loc };
  });
};


export default service;
