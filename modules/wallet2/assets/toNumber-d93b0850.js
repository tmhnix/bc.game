import { i as e } from "./memoize-ff109130.js";
import { a as s } from "./_baseIteratee-dc3e9bea.js";
var f = /\s/;
function o(r) {
  for (var t = r.length; t-- && f.test(r.charAt(t)); );
  return t;
}
var c = /^\s+/;
function m(r) {
  return r && r.slice(0, o(r) + 1).replace(c, "");
}
var n = 0 / 0,
  a = /^[-+]0x[0-9a-f]+$/i,
  p = /^0b[01]+$/i,
  b = /^0o[0-7]+$/i,
  y = parseInt;
function x(r) {
  if (typeof r == "number") return r;
  if (s(r)) return n;
  if (e(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = e(t) ? t + "" : t;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = m(r);
  var i = p.test(r);
  return i || b.test(r) ? y(r.slice(2), i ? 2 : 8) : a.test(r) ? n : +r;
}
export { x as t };
