import cookie from 'vue-cookie';
import {
  orderType
} from './dict';
export default {
  install: function (Vue) {
    Vue.prototype.objContrast = function (newObj, oldObj) {
      var result = {};
      if (JSON.stringify(newObj) === JSON.stringify(oldObj)) {
        return result;
      }
      for (var o in newObj) {
        if (newObj[o] && newObj[o].constructor === Object) {
          if (JSON.stringify(newObj[o]) !== JSON.stringify(oldObj[o])) {
            result[o] = newObj[o];
          }
        } else {
          if (o.substr(o.length - 1, 1) !== '_') {
            result[o] = newObj[o];
          } else {
            if (newObj[o] !== oldObj[o]) {
              result[o] = newObj[o];
            }
          }
        }
      }
      return result;
    };
    Vue.prototype.jsonGroup = function (list, _key) {
      var data = {};
      for (var i = 0; i < list.length; i++) {
        if (!data[list[i][_key]]) {
          var arr = [];
          arr.push(list[i]);
          data[list[i][_key]] = arr;
        } else {
          data[list[i][_key]].push(list[i]);
        }
      }
      return data;
    };
    Vue.prototype.setParams = function (keyName, value) {
      var val = '';
      if (value.constructor === Object) {
        val = JSON.stringify(value);
      }
      cookie.set(keyName, val);
    };
    Vue.prototype.getParams = function (keyName) {
      var val = '';
      var value = '';
      if (cookie.isKey(keyName)) {
        val = cookie.get(keyName);
        if (val.constructor === Object) {
          value = JSON.stringify(val);
        }
        return value;
      }
      return '';
    };
    Vue.prototype.getOrder = function (order) {
      var result = '';
      var orders = orderType();
      let o = orders.find(e => e.value === order);
      if (o) {
        return o.label;
      }
      return result;
    };
  }
};
