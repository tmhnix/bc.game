var l =
  typeof global == "object" && global && global.Object === Object && global;
const f = l;
var g = typeof self == "object" && self && self.Object === Object && self,
  s = f || g || Function("return this")();
const j = s;
var S = j.Symbol;
const r = S;
var n = Object.prototype,
  d = n.hasOwnProperty,
  T = n.toString,
  e = r ? r.toStringTag : void 0;
function y(t) {
  var a = d.call(t, e),
    c = t[e];
  try {
    t[e] = void 0;
    var b = !0;
  } catch (m) {}
  var i = T.call(t);
  return b && (a ? (t[e] = c) : delete t[e]), i;
}
var O = Object.prototype,
  u = O.toString;
function p(t) {
  return u.call(t);
}
var v = "[object Null]",
  $ = "[object Undefined]",
  o = r ? r.toStringTag : void 0;
function h(t) {
  return t == null ? (t === void 0 ? $ : v) : o && o in Object(t) ? y(t) : p(t);
}
export { r as S, h as b, f, j as r };
