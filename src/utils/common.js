export default {
  install: function (Vue) {
    Vue.prototype.notify = function () {
      this.$notify({
        title: '成功',
        message: arguments[0] || '操作成功',
        type: 'success',
      });
    };
    Vue.prototype.success = function () {
      this.$message({
        center: true,
        offset: 65,
        showClose: true,
        message: arguments[0] || '操作成功',
        type: 'success',
      });
    };
    Vue.prototype.fail = function () {
      this.$message({
        center: true,
        offset: 65,
        showClose: true,
        message: arguments[0] || '操作失败',
        type: 'error',
      });
    };
    Vue.prototype.alertok = function () {
      let msg = arguments[0] || '操作成功';
      let fn = arguments[1];
      this.$alert(msg, '成功', {
        type: 'success',
        confirmButtonText: '确定',
        center: true,
        showClose: false,
        callback: fn,
      });
    };
    Vue.prototype.alertfail = function () {
      let msg = arguments[0] || '操作失败';
      let fn = arguments[1];
      this.$alert(msg, '失败', {
        type: 'error',
        confirmButtonText: '确定',
        center: true,
        showClose: false,
        callback: fn,
      });
    };
  },
};
