import axios from 'axios';
import { Loading } from 'element-ui';
import router from '../router';
let loadingInstance = null;
let loadingCount = 0;
let loadingSetTimeout = null;
var showLoading = () => {
  loadingCount++;
  if (loadingInstance) {
    return;
  }
  loadingSetTimeout = setTimeout(() => {
    if (loadingCount === 0) {
      return;
    }
    loadingInstance = Loading.service({
      lock: true,
      text: '努力加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
    });
  }, 500);
};
var hiddenLoading = () => {
  if (loadingSetTimeout) {
    clearTimeout(loadingSetTimeout);
    loadingSetTimeout = null;
  }
  loadingCount--;
  if (loadingInstance && loadingCount === 0) {
    loadingInstance.close();
    loadingInstance = null;
    if (loadingSetTimeout) {
      clearTimeout(loadingSetTimeout);
      loadingSetTimeout = null;
    }
  }
};
/* axios请求拦截 */
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    showLoading();
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
    return config;
  },
  (error) => {
    hiddenLoading();
    return Promise.reject(error);
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    hiddenLoading();
    return response;
  },
  (error) => {
    hiddenLoading();
    return Promise.reject(error);
  },
);

var clientGet = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        let clientRes = {
          status: err.response.status || '',
          msg: err.response.data || '异常错误',
        };
        if (err.response.status === 401) {
          if (document.location.hash === '#/login') {
            return;
          }
          router.push({
            path: '/login',
          });
          clientRes.msg = '未授权';
        }
        reject(clientRes);
      });
  });
};
var clientPostJson = function (url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        let clientRes = {
          status: err.response.status,
          msg: err.response.data || '异常错误',
        };
        reject(clientRes);
      });
  });
};
var clientLocalPost = function (url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL: '',
        timeout: 60000 * 10,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        let clientRes = {};
        if (err && err.response) {
          clientRes = {
            status: err.response.status,
            msg: err.response.data || '异常错误',
          };
        } else {
          clientRes = {
            status: '',
            msg: err || '异常错误',
          };
        }
        reject(clientRes);
      });
  });
};

var httpClient = {
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $client: {
        get: function () {
          var self = this;
          return {
            get: clientGet.bind(self),
            post: clientPostJson.bind(self),
            localPost: clientLocalPost.bind(self),
          };
        },
      },
    });
  },
};

if (window.Vue) {
  window.Vue.use(httpClient);
}

export default httpClient;

export const AjaxUtil = {
  localPost: clientLocalPost,
  get: clientGet,
  post: clientPostJson,
};
