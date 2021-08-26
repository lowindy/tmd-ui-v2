
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
  }
};
