import {
  U as M,
  n as x,
  g as I,
  c as $,
  S as R,
  d as m,
} from "./_baseFor-3fee30d6.js";
import { M as q, e as K } from "./_MapCache-1fb5cc44.js";
import { S as G } from "./_baseGetTag-c2e287b9.js";
import { i as B, a as C } from "./isArray-79a0be9c.js";
var J = "__lodash_hash_undefined__";
function Q(n) {
  return this.__data__.set(n, J), this;
}
function X(n) {
  return this.__data__.has(n);
}
function E(n) {
  var e = -1,
    a = n == null ? 0 : n.length;
  for (this.__data__ = new q(); ++e < a; ) this.add(n[e]);
}
E.prototype.add = E.prototype.push = Q;
E.prototype.has = X;
function Y(n, e) {
  for (var a = -1, f = n == null ? 0 : n.length; ++a < f; )
    if (e(n[a], a, n)) return !0;
  return !1;
}
function Z(n, e) {
  return n.has(e);
}
var c = 1,
  W = 2;
function F(n, e, a, f, u, r) {
  var s = a & c,
    l = n.length,
    g = e.length;
  if (l != g && !(s && g > l)) return !1;
  var t = r.get(n),
    v = r.get(e);
  if (t && v) return t == e && v == n;
  var _ = -1,
    i = !0,
    p = a & W ? new E() : void 0;
  for (r.set(n, e), r.set(e, n); ++_ < l; ) {
    var d = n[_],
      A = e[_];
    if (f) var T = s ? f(A, d, _, e, n, r) : f(d, A, _, n, e, r);
    if (T !== void 0) {
      if (T) continue;
      i = !1;
      break;
    }
    if (p) {
      if (
        !Y(e, function (O, w) {
          if (!Z(p, w) && (d === O || u(d, O, a, f, r))) return p.push(w);
        })
      ) {
        i = !1;
        break;
      }
    } else if (!(d === A || u(d, A, a, f, r))) {
      i = !1;
      break;
    }
  }
  return r.delete(n), r.delete(e), i;
}
function h(n) {
  var e = -1,
    a = Array(n.size);
  return (
    n.forEach(function (f, u) {
      a[++e] = [u, f];
    }),
    a
  );
}
function z(n) {
  var e = -1,
    a = Array(n.size);
  return (
    n.forEach(function (f) {
      a[++e] = f;
    }),
    a
  );
}
var o = 1,
  j = 2,
  V = "[object Boolean]",
  k = "[object Date]",
  nn = "[object Error]",
  en = "[object Map]",
  rn = "[object Number]",
  an = "[object RegExp]",
  fn = "[object Set]",
  sn = "[object String]",
  un = "[object Symbol]",
  gn = "[object ArrayBuffer]",
  ln = "[object DataView]",
  N = G ? G.prototype : void 0,
  S = N ? N.valueOf : void 0;
function tn(n, e, a, f, u, r, s) {
  switch (a) {
    case ln:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      (n = n.buffer), (e = e.buffer);
    case gn:
      return !(n.byteLength != e.byteLength || !r(new M(n), new M(e)));
    case V:
    case k:
    case rn:
      return K(+n, +e);
    case nn:
      return n.name == e.name && n.message == e.message;
    case an:
    case sn:
      return n == e + "";
    case en:
      var l = h;
    case fn:
      var g = f & o;
      if ((l || (l = z), n.size != e.size && !g)) return !1;
      var t = s.get(n);
      if (t) return t == e;
      (f |= j), s.set(n, e);
      var v = F(l(n), l(e), f, u, r, s);
      return s.delete(n), v;
    case un:
      if (S) return S.call(n) == S.call(e);
  }
  return !1;
}
var _n = 1,
  dn = Object.prototype,
  An = dn.hasOwnProperty;
function vn(n, e, a, f, u, r) {
  var s = a & _n,
    l = x(n),
    g = l.length,
    t = x(e),
    v = t.length;
  if (g != v && !s) return !1;
  for (var _ = g; _--; ) {
    var i = l[_];
    if (!(s ? i in e : An.call(e, i))) return !1;
  }
  var p = r.get(n),
    d = r.get(e);
  if (p && d) return p == e && d == n;
  var A = !0;
  r.set(n, e), r.set(e, n);
  for (var T = s; ++_ < g; ) {
    i = l[_];
    var O = n[i],
      w = e[i];
    if (f) var D = s ? f(w, O, i, e, n, r) : f(O, w, i, n, e, r);
    if (!(D === void 0 ? O === w || u(O, w, a, f, r) : D)) {
      A = !1;
      break;
    }
    T || (T = i == "constructor");
  }
  if (A && !T) {
    var y = n.constructor,
      P = e.constructor;
    y != P &&
      "constructor" in n &&
      "constructor" in e &&
      !(
        typeof y == "function" &&
        y instanceof y &&
        typeof P == "function" &&
        P instanceof P
      ) &&
      (A = !1);
  }
  return r.delete(n), r.delete(e), A;
}
var pn = 1,
  U = "[object Arguments]",
  H = "[object Array]",
  L = "[object Object]",
  Tn = Object.prototype,
  b = Tn.hasOwnProperty;
function On(n, e, a, f, u, r) {
  var s = B(n),
    l = B(e),
    g = s ? H : I(n),
    t = l ? H : I(e);
  (g = g == U ? L : g), (t = t == U ? L : t);
  var v = g == L,
    _ = t == L,
    i = g == t;
  if (i && $(n)) {
    if (!$(e)) return !1;
    (s = !0), (v = !1);
  }
  if (i && !v)
    return (
      r || (r = new R()),
      s || m(n) ? F(n, e, a, f, u, r) : tn(n, e, g, a, f, u, r)
    );
  if (!(a & pn)) {
    var p = v && b.call(n, "__wrapped__"),
      d = _ && b.call(e, "__wrapped__");
    if (p || d) {
      var A = p ? n.value() : n,
        T = d ? e.value() : e;
      return r || (r = new R()), u(A, T, a, f, r);
    }
  }
  return i ? (r || (r = new R()), vn(n, e, a, f, u, r)) : !1;
}
function wn(n, e, a, f, u) {
  return n === e
    ? !0
    : n == null || e == null || (!C(n) && !C(e))
    ? n !== n && e !== e
    : On(n, e, a, f, wn, u);
}
export { wn as b };
