import { r as S, i as y } from "./isObject-909534d5.js";
import { t as b } from "./toNumber-e58af95e.js";
var R = function () {
  return S.Date.now();
};
const h = R;
var A = "Expected a function",
  F = Math.max,
  N = Math.min;
function j(x, i, a) {
  var u,
    o,
    m,
    f,
    e,
    r,
    d = 0,
    E = !1,
    c = !1,
    g = !0;
  if (typeof x != "function") throw new TypeError(A);
  (i = b(i) || 0),
    y(a) &&
      ((E = !!a.leading),
      (c = "maxWait" in a),
      (m = c ? F(b(a.maxWait) || 0, i) : m),
      (g = "trailing" in a ? !!a.trailing : g));
  function v(n) {
    var t = u,
      l = o;
    return (u = o = void 0), (d = n), (f = x.apply(l, t)), f;
  }
  function p(n) {
    return (d = n), (e = setTimeout(s, i)), E ? v(n) : f;
  }
  function C(n) {
    var t = n - r,
      l = n - d,
      W = i - t;
    return c ? N(W, m - l) : W;
  }
  function k(n) {
    var t = n - r,
      l = n - d;
    return r === void 0 || t >= i || t < 0 || (c && l >= m);
  }
  function s() {
    var n = h();
    if (k(n)) return I(n);
    e = setTimeout(s, C(n));
  }
  function I(n) {
    return (e = void 0), g && u ? v(n) : ((u = o = void 0), f);
  }
  function L() {
    e !== void 0 && clearTimeout(e), (d = 0), (u = r = o = e = void 0);
  }
  function M() {
    return e === void 0 ? f : I(h());
  }
  function T() {
    var n = h(),
      t = k(n);
    if (((u = arguments), (o = this), (r = n), t)) {
      if (e === void 0) return p(r);
      if (c) return clearTimeout(e), (e = setTimeout(s, i)), v(r);
    }
    return e === void 0 && (e = setTimeout(s, i)), f;
  }
  return (T.cancel = L), (T.flush = M), T;
}
export { j as d };
