import { t as o } from "./toNumber-2a781ab2.js";
var i = 1 / 0,
  f = 17976931348623157e292;
function I(r) {
  if (!r) return r === 0 ? r : 0;
  if (((r = o(r)), r === i || r === -i)) {
    var t = r < 0 ? -1 : 1;
    return t * f;
  }
  return r === r ? r : 0;
}
function N(r) {
  var t = I(r),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
export { N as t };
