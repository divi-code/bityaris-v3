import {
  S as N,
  i as $,
  s as k,
  e as o,
  D as I,
  c as h,
  a as f,
  F as T,
  d as v,
  b as e,
  G as w,
  g as q,
  H as s,
  I as D,
  C as P,
  E as V,
  J as F,
} from "./chunk-8f7551c4.js";
import { af as M, I as K } from "./chunk-772394bf.js";
function W(m) {
  let t, a, G, g, _, d, n, C, p, l, E, c, x;
  return {
    c() {
      (t = o("div")),
        (a = o("img")),
        (g = I()),
        (_ = o("div")),
        (d = I()),
        (n = o("img")),
        (p = I()),
        (l = o("div")),
        (E = I()),
        (c = o("img")),
        this.h();
    },
    l(r) {
      t = h(r, "DIV", { class: !0 });
      var i = f(t);
      (a = h(i, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (g = T(i)),
        (_ = h(i, "DIV", { class: !0 })),
        f(_).forEach(v),
        (d = T(i)),
        (n = h(i, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (p = T(i)),
        (l = h(i, "DIV", { class: !0 })),
        f(l).forEach(v),
        (E = T(i)),
        (c = h(i, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        i.forEach(v),
        this.h();
    },
    h() {
      e(a, "width", "92"),
        e(a, "height", "18"),
        w(a.src, (G = M.LOGO_DARK_TR)) || e(a, "src", G),
        e(a, "alt", "logo"),
        e(_, "class", "f1 dash-line svelte-1uko3ya"),
        e(n, "width", "38"),
        e(n, "height", "38"),
        w(n.src, (C = K.TRANSFER_ICON_ARROW)) || e(n, "src", C),
        e(n, "alt", "logo"),
        e(l, "class", "f1 dash-line svelte-1uko3ya"),
        e(c, "width", "80"),
        e(c, "height", "18"),
        w(c.src, (x = M.LOGO_DARK)) || e(c, "src", x),
        e(c, "alt", "logo"),
        e(t, "class", "df aic jcsb");
    },
    m(r, i) {
      q(r, t, i),
        s(t, a),
        s(t, g),
        s(t, _),
        s(t, d),
        s(t, n),
        s(t, p),
        s(t, l),
        s(t, E),
        s(t, c);
    },
    p: D,
    i: D,
    o: D,
    d(r) {
      r && v(t);
    },
  };
}
class B extends N {
  constructor(t) {
    super(), $(this, t, null, W, k, {});
  }
}
const b = {
  ConnectPhemexTipTitle: "f08702",
  ConnectPhemexTip1: "5b408d",
  ConnectPhemexTip2: "909464",
  ConnectPhemexTip3: "6b3c05",
};
function j(m) {
  let t,
    a,
    G = m[0](b.ConnectPhemexTipTitle) + "",
    g,
    _,
    d,
    n = m[0](b.ConnectPhemexTip1) + "",
    C,
    p,
    l,
    E = m[0](b.ConnectPhemexTip2) + "",
    c,
    x,
    r,
    i = m[0](b.ConnectPhemexTip3) + "",
    R;
  return {
    c() {
      (t = o("div")),
        (a = o("div")),
        (g = P(G)),
        (_ = I()),
        (d = o("div")),
        (C = P(n)),
        (p = I()),
        (l = o("div")),
        (c = P(E)),
        (x = I()),
        (r = o("div")),
        (R = P(i)),
        this.h();
    },
    l(A) {
      t = h(A, "DIV", { class: !0 });
      var u = f(t);
      a = h(u, "DIV", { class: !0 });
      var y = f(a);
      (g = V(y, G)), y.forEach(v), (_ = T(u)), (d = h(u, "DIV", { class: !0 }));
      var O = f(d);
      (C = V(O, n)), O.forEach(v), (p = T(u)), (l = h(u, "DIV", { class: !0 }));
      var S = f(l);
      (c = V(S, E)), S.forEach(v), (x = T(u)), (r = h(u, "DIV", { class: !0 }));
      var L = f(r);
      (R = V(L, i)), L.forEach(v), u.forEach(v), this.h();
    },
    h() {
      e(a, "class", "T4 mt16 mb12"),
        e(d, "class", "T3 mb12"),
        e(l, "class", "T3 mb12"),
        e(r, "class", "T3"),
        e(t, "class", "cross-site-connect-tip");
    },
    m(A, u) {
      q(A, t, u),
        s(t, a),
        s(a, g),
        s(t, _),
        s(t, d),
        s(d, C),
        s(t, p),
        s(t, l),
        s(l, c),
        s(t, x),
        s(t, r),
        s(r, R);
    },
    p: D,
    i: D,
    o: D,
    d(A) {
      A && v(t);
    },
  };
}
function H(m) {
  return [F("LG")];
}
class Q extends N {
  constructor(t) {
    super(), $(this, t, H, j, k, {});
  }
}
export { B as C, Q as a };
//# sourceMappingURL=chunk-7eed48ce.js.map
