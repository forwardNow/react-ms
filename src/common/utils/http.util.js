import JsonP from 'jsonp';

/**
 * 封装 HTTP 相关
 */
export default class HttpUtil {
  /**
   * 发送 JSONP 请求
   * @param url {string}
   * @param opts {object}
   * @return {Promise<any>}
   */
  static jsonp(url, opts = {}) {
    return new Promise((resolve, reject) => {
      JsonP(url, opts, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  }
}
