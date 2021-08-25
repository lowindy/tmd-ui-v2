/* eslint-disable */
String.prototype.isCellphone = function () {
  let patt = /^1[345789]\d{9}$/
  return patt.test(this)
}
