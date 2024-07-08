import {
  ax as Ve,
  b2 as el,
  aL as tl,
  F as Ra,
  f as We,
  g as _t,
  P as W,
  bD as Ul,
  aI as Ml,
  bE as zn,
  a3 as pl,
  br as Ut,
  k as ft,
  bF as ll,
  a9 as $t,
  bG as Oa,
  bH as Na,
  bB as jn,
  ab as Ht,
  e as qn,
  bI as Va,
  bJ as Ua,
  aw as kt,
  bK as Ma,
  bL as $a,
  aP as Ga,
  B as Ot,
  aH as vl,
  bM as sl,
  m as Re,
  A as vt,
  ap as bl,
  aC as Ft,
  bC as Ba,
  bN as ya,
  as as Xn,
  bO as Wa,
  s as Ke,
  ar as Oe,
  aD as El,
  aE as wl,
  av as Kn,
  bP as Ya,
  bQ as Ha,
  au as ml,
  a8 as ot,
  a as Qn,
  az as Jn,
  ao as Zn,
  at as Fa,
  ay as za,
  al as At,
  a4 as xn,
  L as Ge,
  ak as ja,
  Q as Mt,
  w as Kt,
  af as rt,
  c as qa,
  bR as $l,
  b7 as Xa,
  aX as Ka,
  q as Qa,
  an as Ja,
  bS as Za,
  bT as xa,
  bU as ea,
  bV as ta,
  bW as la,
  bX as ei,
  bY as sa,
  I as Gt,
  bZ as ti,
  E as Gl,
  u as kl,
  am as na,
  j as aa,
  ac as nl,
  b_ as li,
  i as si,
  b$ as ni,
  o as ia,
  l as ai,
  c0 as ii,
  aG as ri,
  c1 as oi,
  aJ as Bl,
  G as yl,
  aj as ci,
  a2 as fi,
  aA as Il,
} from "./chunk-772394bf.js";
import {
  S as Ie,
  i as Te,
  s as Ce,
  B as ye,
  g as B,
  k as $,
  h as Ue,
  t as y,
  j as Me,
  d as h,
  V as Qe,
  l as lt,
  e as b,
  D as U,
  c as E,
  a as w,
  F as M,
  b as f,
  H as d,
  K as ee,
  u as st,
  m as nt,
  n as at,
  a2 as ht,
  a3 as al,
  aj as Tl,
  ak as Cl,
  X as xe,
  C as H,
  E as F,
  I as me,
  R as Z,
  Q as te,
  O as St,
  L as Be,
  ab as ze,
  ao as ra,
  Y as gt,
  a1 as Dl,
  N as Dt,
  J as je,
  p as j,
  q as K,
  r as q,
  x as X,
  y as ge,
  G as Se,
  ap as ui,
  aq as di,
  A as Al,
  ad as oa,
  f as Je,
  a9 as il,
  aa as rl,
  o as ol,
  P as yt,
  v as ca,
  w as fa,
  T as Sl,
  $ as Wl,
  z as hi,
  Z as Yl,
  a7 as ua,
  a8 as da,
  ac as cl,
  af as mi,
} from "./chunk-8f7551c4.js";
import {
  e as tt,
  q as bt,
  m as Tt,
  a as _i,
  s as ha,
  S as ut,
  f as dl,
  n as qt,
  d as Hl,
  l as ma,
} from "./app-6c8af094.js";
const Nt = {
    EMAIL: /^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,8}$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
    SPECIAL_ATR: new RegExp("[`~@#$^&*=|{}\\[\\]<>/~@#￥……&*——|{}【】]"),
    CHARACTER_ASC: /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/,
    IP_ADDRESS:
      /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/,
    TWITTER: /(^|[^@\w])\b/,
    SPECIAL_CHARACTERS: /^[a-zA-Z0-9]{4,20}$/,
    UID: /^[0-9]*$/,
  },
  Bt = {
    event(s, e, t, l) {
      (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "ga.event",
          gac: s,
          gaa: e,
          gal: t,
          gav: l,
        });
    },
    bindGoogleClientId() {
      return new Promise((s) => {
        const { ga: e } = window;
        if (!e) {
          Ve.bindGoogleClientId({ googleClientId: 0 }).then(
            () => s(),
            () => s()
          );
          return;
        }
        e("create", "UA-PHEMEX-GA", "auto");
        const t = setTimeout(async () => {
          await Ve.bindGoogleClientId({ googleClientId: 1 }), s();
        }, 2e3);
        e(async (l) => {
          clearTimeout(t);
          const n = l ? l.get("clientId") : 2;
          await Ve.bindGoogleClientId({ googleClientId: n || 3 }), s();
        });
      });
    },
  },
  gi = (s) => ({}),
  Fl = (s) => ({});
function zl(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v;
  const p = s[8].header,
    g = lt(p, s, s[7], Fl);
  let k = s[2] && jl(s);
  const I = s[8].default,
    T = lt(I, s, s[7], null);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("div")),
        g && g.c(),
        (a = U()),
        k && k.c(),
        (i = U()),
        T && T.c(),
        this.h();
    },
    l(S) {
      e = E(S, "DIV", { class: !0, style: !0 });
      var C = w(e);
      t = E(C, "DIV", { class: !0, style: !0 });
      var A = w(t);
      l = E(A, "DIV", { class: !0 });
      var D = w(l);
      n = E(D, "DIV", { class: !0 });
      var L = w(n);
      g && g.l(L),
        L.forEach(h),
        (a = M(D)),
        k && k.l(D),
        D.forEach(h),
        (i = M(A)),
        T && T.l(A),
        A.forEach(h),
        C.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "f1"),
        f(l, "class", "df jcsb"),
        f(t, "class", "modal sv svelte-h6k2wh"),
        f(t, "style", (r = ql(s[3]))),
        f(e, "class", "modal-mask svelte-h6k2wh"),
        f(e, "style", s[1]);
    },
    m(S, C) {
      B(S, e, C),
        d(e, t),
        d(t, l),
        d(l, n),
        g && g.m(n, null),
        d(l, a),
        k && k.m(l, null),
        d(t, i),
        T && T.m(t, null),
        (m = !0),
        _ || ((v = [ee(t, "click", vi), ee(e, "click", s[5])]), (_ = !0));
    },
    p(S, C) {
      g &&
        g.p &&
        (!m || C & 128) &&
        st(g, p, S, S[7], m ? at(p, S[7], C, gi) : nt(S[7]), Fl),
        S[2]
          ? k
            ? k.p(S, C)
            : ((k = jl(S)), k.c(), k.m(l, null))
          : k && (k.d(1), (k = null)),
        T &&
          T.p &&
          (!m || C & 128) &&
          st(T, I, S, S[7], m ? at(I, S[7], C, null) : nt(S[7]), null),
        (!m || (C & 8 && r !== (r = ql(S[3])))) && f(t, "style", r),
        (!m || C & 2) && f(e, "style", S[1]);
    },
    i(S) {
      m ||
        ($(g, S),
        $(T, S),
        ht(() => {
          o || (o = al(t, el, { x: 500, duration: 500 }, !0)), o.run(1);
        }),
        ht(() => {
          u && u.end(1), (c = Tl(e, tl, { duration: 300 })), c.start();
        }),
        (m = !0));
    },
    o(S) {
      y(g, S),
        y(T, S),
        o || (o = al(t, el, { x: 500, duration: 500 }, !1)),
        o.run(0),
        c && c.invalidate(),
        (u = Cl(e, tl, { duration: 300 })),
        (m = !1);
    },
    d(S) {
      S && h(e),
        g && g.d(S),
        k && k.d(),
        T && T.d(S),
        S && o && o.end(),
        S && u && u.end(),
        (_ = !1),
        xe(v);
    },
  };
}
function jl(s) {
  let e, t, l, n, a;
  return {
    c() {
      (e = b("div")), (t = b("i")), (l = H("")), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      t = E(r, "I", { class: !0 });
      var o = w(t);
      (l = F(o, "")), o.forEach(h), r.forEach(h), this.h();
    },
    h() {
      f(t, "class", "iconfont db T4 svelte-h6k2wh"),
        f(e, "class", "close-btn df aic jcc cp svelte-h6k2wh");
    },
    m(i, r) {
      B(i, e, r), d(e, t), d(t, l), n || ((a = ee(e, "click", s[4])), (n = !0));
    },
    p: me,
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function pi(s) {
  let e,
    t,
    l = s[0] && zl(s);
  return {
    c() {
      l && l.c(), (e = ye());
    },
    l(n) {
      l && l.l(n), (e = ye());
    },
    m(n, a) {
      l && l.m(n, a), B(n, e, a), (t = !0);
    },
    p(n, [a]) {
      n[0]
        ? l
          ? (l.p(n, a), a & 1 && $(l, 1))
          : ((l = zl(n)), l.c(), $(l, 1), l.m(e.parentNode, e))
        : l &&
          (Ue(),
          y(l, 1, 1, () => {
            l = null;
          }),
          Me());
    },
    i(n) {
      t || ($(l), (t = !0));
    },
    o(n) {
      y(l), (t = !1);
    },
    d(n) {
      l && l.d(n), n && h(e);
    },
  };
}
function ql(s) {
  return Object.keys(s).reduce((e, t) => e + `${t}: ${s[t]};`, "");
}
const vi = (s) => s.stopPropagation();
function bi(s, e, t) {
  let { $$slots: l = {}, $$scope: n } = e,
    { visible: a = !1 } = e,
    { closeable: i = !1 } = e,
    { modalStyle: r = {} } = e,
    { maskStyle: o = "" } = e;
  const c = Qe();
  let u = {};
  function m(p) {
    if (p) {
      t(3, (u = { ...r, right: 0 })),
        t(1, (o = "background: rgba(0, 0, 0, 0.6)"));
      return;
    }
    t(3, (u = r)), t(1, (o = ""));
  }
  function _() {
    t(0, (a = !1)), c("close");
  }
  function v() {
    _();
  }
  return (
    (s.$$set = (p) => {
      "visible" in p && t(0, (a = p.visible)),
        "closeable" in p && t(2, (i = p.closeable)),
        "modalStyle" in p && t(6, (r = p.modalStyle)),
        "maskStyle" in p && t(1, (o = p.maskStyle)),
        "$$scope" in p && t(7, (n = p.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && m(a);
    }),
    [a, o, i, u, _, v, r, n, l]
  );
}
class Vt extends Ie {
  constructor(e) {
    super(),
      Te(this, e, bi, pi, Ce, {
        visible: 0,
        closeable: 2,
        modalStyle: 6,
        maskStyle: 1,
      });
  }
}
const Ei = Ra(80);
function Xl(s, e, t) {
  const l = s.slice();
  return (l[22] = e[t]), (l[23] = e), (l[24] = t), l;
}
function Kl(s) {
  let e,
    t,
    l = s[22] + "",
    n,
    a,
    i,
    r,
    o,
    c;
  function u() {
    s[18].call(i, s[24]);
  }
  return {
    c() {
      (e = b("div")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        (i = b("input")),
        (r = U()),
        this.h();
    },
    l(m) {
      e = E(m, "DIV", { class: !0 });
      var _ = w(e);
      t = E(_, "SPAN", { class: !0 });
      var v = w(t);
      (n = F(v, l)),
        v.forEach(h),
        (a = M(_)),
        (i = E(_, "INPUT", {
          type: !0,
          maxlength: !0,
          max: !0,
          "data-index": !0,
          class: !0,
        })),
        (r = M(_)),
        _.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "txt svelte-1r5adwf"),
        f(i, "type", "number"),
        f(i, "maxlength", "1"),
        f(i, "max", "9"),
        f(i, "data-index", s[24]),
        f(i, "class", "svelte-1r5adwf"),
        f(e, "class", "digit-box df aic jcc svelte-1r5adwf"),
        Z(e, "active", s[4] === s[24]),
        Z(e, "fail", s[2] === "fail");
    },
    m(m, _) {
      B(m, e, _),
        d(e, t),
        d(t, n),
        d(e, a),
        d(e, i),
        ze(i, s[6][s[24]]),
        d(e, r),
        o ||
          ((c = [
            ee(i, "input", u),
            ee(i, "click", s[8]),
            ee(i, "keydown", s[9](s[24])),
            ee(i, "input", s[10](s[24])),
            ee(i, "paste", s[11]),
            ee(i, "focus", s[12](s[24])),
          ]),
          (o = !0));
    },
    p(m, _) {
      (s = m),
        _ & 8 && l !== (l = s[22] + "") && te(n, l),
        _ & 64 && ra(i.value) !== s[6][s[24]] && ze(i, s[6][s[24]]),
        _ & 16 && Z(e, "active", s[4] === s[24]),
        _ & 4 && Z(e, "fail", s[2] === "fail");
    },
    d(m) {
      m && h(e), (o = !1), xe(c);
    },
  };
}
function wi(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c = s[3],
    u = [];
  for (let m = 0; m < c.length; m += 1) u[m] = Kl(Xl(s, c, m));
  return {
    c() {
      (e = b("div")), (t = b("div"));
      for (let m = 0; m < u.length; m += 1) u[m].c();
      (l = U()), (n = b("div")), (a = H(s[1])), this.h();
    },
    l(m) {
      e = E(m, "DIV", { class: !0 });
      var _ = w(e);
      t = E(_, "DIV", { class: !0 });
      var v = w(t);
      for (let g = 0; g < u.length; g += 1) u[g].l(v);
      v.forEach(h), (l = M(_)), (n = E(_, "DIV", { class: !0 }));
      var p = w(n);
      (a = F(p, s[1])), p.forEach(h), _.forEach(h), this.h();
    },
    h() {
      f(t, "class", "digits svelte-1r5adwf"),
        Z(t, "fail", s[2] === "fail"),
        Z(t, "disabled", s[7]),
        f(n, "class", "explain svelte-1r5adwf"),
        f(e, "class", (i = "wrap " + s[0] + " svelte-1r5adwf"));
    },
    m(m, _) {
      B(m, e, _), d(e, t);
      for (let v = 0; v < u.length; v += 1) u[v].m(t, null);
      s[19](t),
        d(e, l),
        d(e, n),
        d(n, a),
        r || ((o = ee(t, "click", s[8])), (r = !0));
    },
    p(m, [_]) {
      if (_ & 8028) {
        c = m[3];
        let v;
        for (v = 0; v < c.length; v += 1) {
          const p = Xl(m, c, v);
          u[v] ? u[v].p(p, _) : ((u[v] = Kl(p)), u[v].c(), u[v].m(t, null));
        }
        for (; v < u.length; v += 1) u[v].d(1);
        u.length = c.length;
      }
      _ & 4 && Z(t, "fail", m[2] === "fail"),
        _ & 128 && Z(t, "disabled", m[7]),
        _ & 2 && te(a, m[1]),
        _ & 1 &&
          i !== (i = "wrap " + m[0] + " svelte-1r5adwf") &&
          f(e, "class", i);
    },
    i: me,
    o: me,
    d(m) {
      m && h(e), St(u, m), s[19](null), (r = !1), o();
    },
  };
}
function Ql(s, e) {
  const t = {};
  for (let l = 0; l < e; l++) t[l] = s[l] || "";
  return t;
}
function Jl(s, e) {
  return s && s.length === e ? s.split("") : [...Array(e)].map(() => "");
}
function ki(s) {
  const e = window;
  return e.clipboardData && e.clipboardData.getData
    ? e.clipboardData.getData("Text") || ""
    : s.clipboardData.getData("Text") || "";
}
function Ii(s, e, t) {
  let l,
    n,
    { class: a = "" } = e,
    { size: i = 6 } = e,
    { explain: r = "" } = e,
    { value: o = "" } = e,
    { disabled: c = !1 } = e,
    { status: u = "" } = e,
    { focus: m = !0 } = e;
  const _ = Qe();
  let v = -1,
    p = null,
    g = Jl(o, i),
    k = Ql("", i);
  Be(() => {
    m && T(0);
  });
  function I(P) {
    P.preventDefault(), T(n);
  }
  function T(P) {
    if (!p) return;
    P < 0 && (P = 0),
      P >= i && (P = i - 1),
      p.querySelectorAll("input")[P].focus();
  }
  function S(P) {
    return function (R) {
      const { keyCode: G } = R;
      if (G === 9 && P < i - 1) {
        R.preventDefault();
        return;
      }
      if (G === 8) {
        if (g[P] === "" && P > 0) {
          t(3, (g[P - 1] = ""), g), t(3, (g = [...g])), T(P - 1);
          return;
        }
        if (g[P] !== "" && P === i - 1) {
          t(3, (g[P] = ""), g), t(3, (g = [...g]));
          return;
        }
        t(3, (g[P] = ""), g), t(3, (g = [...g])), T(P - 1);
      }
    };
  }
  function C(P) {
    return function (R) {
      _("input");
      const { value: G } = R.target;
      /^\d$/.test(G) && (t(3, (g[P] = G), g), t(3, (g = [...g])), T(P + 1)),
        t(6, (k[P] = ""), k);
    };
  }
  function A(P) {
    P.preventDefault();
    const R = ki(P);
    if (R.length < 1 || isNaN(R)) return;
    const G = R.substr(0, i).split("");
    t(3, (g = g.map((V, Y) => G[Y] || ""))),
      p
        .querySelectorAll("input")
        [G.length === i ? G.length - 1 : G.length].focus();
  }
  function D(P) {
    return function () {
      t(4, (v = P));
    };
  }
  function L(P) {
    (k[P] = ra(this.value)), t(6, k), t(2, u), t(13, i);
  }
  function O(P) {
    gt[P ? "unshift" : "push"](() => {
      (p = P), t(5, p);
    });
  }
  return (
    (s.$$set = (P) => {
      "class" in P && t(0, (a = P.class)),
        "size" in P && t(13, (i = P.size)),
        "explain" in P && t(1, (r = P.explain)),
        "value" in P && t(14, (o = P.value)),
        "disabled" in P && t(15, (c = P.disabled)),
        "status" in P && t(2, (u = P.status)),
        "focus" in P && t(16, (m = P.focus));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 32772 && t(7, (l = u === "loading" || c)),
        s.$$.dirty & 8196 &&
          (u === "success" && t(4, (v = -1)),
          u === "fail" && (t(3, (g = Jl("", i))), t(6, (k = Ql("", i))), T(0))),
        s.$$.dirty & 8 && t(17, (n = g.filter(Boolean).length)),
        s.$$.dirty & 139272 &&
          (n === i && _("change", { value: g.join("") }),
          n !== null && _("codeChange", { value: g.join("") }));
    }),
    [a, r, u, g, v, p, k, l, I, S, C, A, D, i, o, c, m, n, L, O]
  );
}
class Wt extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Ii, wi, Ce, {
        class: 0,
        size: 13,
        explain: 1,
        value: 14,
        disabled: 15,
        status: 2,
        focus: 16,
      });
  }
}
const Ud = {
  loginOrRegister(s, e, t, l) {
    if (tt.isApp) {
      if (Ul()) {
        Ml.postMessage("toLogin");
        return;
      }
      Ml.postMessage("toRegister");
      return;
    }
    const n = l || location.origin + e(W.HOME.pathname);
    if (Ul()) {
      if (s < 640) {
        _t(
          e(W.LOGIN.pathname) +
            "?" +
            bt.stringify({ target: n, action: "Target" })
        );
        return;
      }
      wt.launchLogin(t, n);
      return;
    }
    wt.launchRegister(t, n);
  },
};
function Ti() {
  const s = zn("target");
  if (s) return (window.location.href = s), !0;
}
function Ci(s = !1) {
  if (Ti()) return;
  if (s) {
    window.location.reload();
    return;
  }
  const e = Dl(We);
  _t(e(W.ACCOUNT_OVERVIEW.pathname));
}
function Rt(s) {
  if (s) {
    window.location.href = s;
    return;
  }
  const e = Dl(We);
  _t(e(W.ACCOUNT_OVERVIEW.pathname));
}
function Zl(s) {
  return !s || s.indexOf("@") > -1
    ? !1
    : /^https?:/.test(s)
    ? new URL(s).host === location.host
    : !0;
}
function xl(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "ml4 iconfont f18 light-gray svelte-3quqzf");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function es(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "ml4 iconfont f18 light-gray svelte-3quqzf");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Di(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = !s[1] && xl(),
    c = s[9] && es();
  return {
    c() {
      (e = b("div")),
        o && o.c(),
        (t = U()),
        c && c.c(),
        (l = U()),
        (n = b("input")),
        this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var m = w(e);
      o && o.l(m),
        (t = M(m)),
        c && c.l(m),
        (l = M(m)),
        (n = E(m, "INPUT", {
          class: !0,
          type: !0,
          name: !0,
          autocomplete: !0,
          placeholder: !0,
          maxlength: !0,
        })),
        m.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "autofill ml4 ipt f1 svelte-3quqzf"),
        f(n, "type", "text"),
        f(n, "name", "username"),
        f(n, "autocomplete", s[4]),
        f(n, "placeholder", s[3]),
        (n.disabled = s[5]),
        f(n, "maxlength", s[2]),
        (n.value = s[0]),
        Z(n, "placeholder-color", s[7]),
        f(e, "class", (a = "item df aic ph16 " + s[10] + " svelte-3quqzf")),
        Z(e, "error", s[6]),
        Z(e, "disabled", s[5]),
        Z(e, "modal-ui", s[8]);
    },
    m(u, m) {
      B(u, e, m),
        o && o.m(e, null),
        d(e, t),
        c && c.m(e, null),
        d(e, l),
        d(e, n),
        s[17](n),
        i ||
          ((r = [
            ee(n, "blur", s[14]),
            ee(n, "focus", s[15]),
            ee(n, "keypress", s[16]),
            ee(n, "input", s[12]),
          ]),
          (i = !0));
    },
    p(u, [m]) {
      u[1] ? o && (o.d(1), (o = null)) : o || ((o = xl()), o.c(), o.m(e, t)),
        u[9] ? c || ((c = es()), c.c(), c.m(e, l)) : c && (c.d(1), (c = null)),
        m & 16 && f(n, "autocomplete", u[4]),
        m & 8 && f(n, "placeholder", u[3]),
        m & 32 && (n.disabled = u[5]),
        m & 4 && f(n, "maxlength", u[2]),
        m & 1 && n.value !== u[0] && (n.value = u[0]),
        m & 128 && Z(n, "placeholder-color", u[7]),
        m & 1024 &&
          a !== (a = "item df aic ph16 " + u[10] + " svelte-3quqzf") &&
          f(e, "class", a),
        m & 1088 && Z(e, "error", u[6]),
        m & 1056 && Z(e, "disabled", u[5]),
        m & 1280 && Z(e, "modal-ui", u[8]);
    },
    i: me,
    o: me,
    d(u) {
      u && h(e), o && o.d(), c && c.d(), s[17](null), (i = !1), xe(r);
    },
  };
}
function Ai(s, e, t) {
  let { haveIcon: l } = e,
    { value: n = "" } = e,
    { maxLength: a = "" } = e,
    { placeholder: i = "" } = e,
    { autocomplete: r = "on" } = e,
    { disabled: o = !1 } = e,
    { isError: c = !1 } = e,
    { autofocus: u = !1 } = e,
    { placeholderColor: m = !1 } = e,
    { modalUI: _ = !1 } = e,
    { hasCodeIcon: v = !1 } = e,
    { class: p = "" } = e,
    g = null;
  Be(() => {
    u && setTimeout(() => g && g.focus(), 0);
  });
  function k(A) {
    t(0, (n = A.target.value.trim()));
  }
  function I(A) {
    Dt.call(this, s, A);
  }
  function T(A) {
    Dt.call(this, s, A);
  }
  function S(A) {
    Dt.call(this, s, A);
  }
  function C(A) {
    gt[A ? "unshift" : "push"](() => {
      (g = A), t(11, g);
    });
  }
  return (
    (s.$$set = (A) => {
      "haveIcon" in A && t(1, (l = A.haveIcon)),
        "value" in A && t(0, (n = A.value)),
        "maxLength" in A && t(2, (a = A.maxLength)),
        "placeholder" in A && t(3, (i = A.placeholder)),
        "autocomplete" in A && t(4, (r = A.autocomplete)),
        "disabled" in A && t(5, (o = A.disabled)),
        "isError" in A && t(6, (c = A.isError)),
        "autofocus" in A && t(13, (u = A.autofocus)),
        "placeholderColor" in A && t(7, (m = A.placeholderColor)),
        "modalUI" in A && t(8, (_ = A.modalUI)),
        "hasCodeIcon" in A && t(9, (v = A.hasCodeIcon)),
        "class" in A && t(10, (p = A.class));
    }),
    [n, l, a, i, r, o, c, m, _, v, p, g, k, u, I, T, S, C]
  );
}
class _a extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Ai, Di, Ce, {
        haveIcon: 1,
        value: 0,
        maxLength: 2,
        placeholder: 3,
        autocomplete: 4,
        disabled: 5,
        isError: 6,
        autofocus: 13,
        placeholderColor: 7,
        modalUI: 8,
        hasCodeIcon: 9,
        class: 10,
      });
  }
}
const He = {
  Title: "8c1e60",
  Description: "d88457",
  Keywords: "f5f6e6",
  Back: "297d84",
  Register: "b8659c",
  ConnectTrRegister: "9b4908",
  ConnectTrRegisterDesc: "5cc637",
  WelcomePhemex: "38b6af",
  Email: "040a38",
  Password: "9200ee",
  InvitationCode: "df2dd5",
  Initializing: "75fa94",
  Continue: "f29402",
  AlreadyHave: "76b0b9",
  LogIn: "d99d0d",
  EmailError: "64d651",
  NoEmailError: "8d1e04",
  NoPasswordError: "1502a4",
  PasswordError: "0d1477",
  Registered: "47034d",
  NetworkError: "2c9404",
  NetworkTimeout: "c9afc1",
  NoteOnRestricted: "482ac2",
  AtThisTime: "a9d2ca",
  TermsOfUse: "0c5be4",
  PleaseContactOur: "dfd2ad",
  LiveSupport: "1a1bfc",
  ContactSupport: "114313",
  ItOnlyTakes: "0c898a",
  YourPasswordShould: "70c5e5",
  OrMoreCharacters: "e1ae03",
  LowercaseLetter: "7ae5e9",
  UppercaseLetter: "47d0cf",
  ContainsNumber: "8ce17e",
  ContainsSpecialCharacters: "fd3fff",
  TheAccountHasBeen: "572aa8",
  RegistrationSuccessful: "f35075",
  YouHaveSuccessfully: "371a26",
  DoYouAlsoWant: "b8b12f",
  EnjoyMore: "699907",
  AdditionalFeatures: "314787",
  ContractTrading: "265bfc",
  UpToLeverage: "006ed8",
  SpotTrading: "eadc3a",
  ZeroFeesForPremiun: "83405d",
  AssetManagement: "888d8b",
  EstimatedAPY: "df8a18",
  WelcomeBonus: "4b82e1",
  UpTo: "45f9af",
  ConnectRegisterSuccess: "99d376",
  ConnectRegisterSuccessDesc: "c01069",
  ContinueBtn: "8b067b",
  Bonus100: "496f05",
  BuyCrypto: "dbe950",
  Fastest: "7c001e",
  UpTo100: "bb3ec0",
  InstantlyAndSafely: "569f5c",
  TheFastestPlatform: "c2cf57",
  UpToBonus: "2418a6",
  BonusWaiting: "777a10",
  BonusAmount: "45896c",
  BeginYourWealthBuilding: "6864c1",
  EventStartIn: "0daf93",
  EventEndsIn: "a2463a",
  JoinTelegramGroup: "07a133",
  TheMostEfficient: "05fa6c",
  RegisterThroughThisPage: "4b0dcc",
  ContractFeeDeductionCoupon: "32c521",
  ContractAdditionalReward: "2e548e",
  Or: "78740f",
  SignUpWithGoogle: "cd8325",
  ContinueWithGoogle: "aef5f7",
  LoginWith: "80fa21",
  SignUpWith: "0352f0",
};
function ts(s, e, t) {
  const l = s.slice();
  return (l[7] = e[t]), (l[9] = t), l;
}
function ls(s) {
  let e,
    t,
    l = s[7].text + "",
    n,
    a;
  function i(c, u) {
    return c[7].status ? Pi : Si;
  }
  let r = i(s),
    o = r(s);
  return {
    c() {
      (e = b("div")), o.c(), (t = U()), (n = H(l)), (a = U()), this.h();
    },
    l(c) {
      e = E(c, "DIV", { class: !0 });
      var u = w(e);
      o.l(u), (t = M(u)), (n = F(u, l)), (a = M(u)), u.forEach(h), this.h();
    },
    h() {
      f(e, "class", "df mt10"), Z(e, "sell", s[0] && !s[7].status);
    },
    m(c, u) {
      B(c, e, u), o.m(e, null), d(e, t), d(e, n), d(e, a);
    },
    p(c, u) {
      r !== (r = i(c)) && (o.d(1), (o = r(c)), o && (o.c(), o.m(e, t))),
        u & 8 && l !== (l = c[7].text + "") && te(n, l),
        u & 9 && Z(e, "sell", c[0] && !c[7].status);
    },
    d(c) {
      c && h(e), o.d();
    },
  };
}
function Si(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont mr10 T4");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Pi(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont mr10 BLUE");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function ss(s) {
  let e,
    t = s[9] < s[2] && ls(s);
  return {
    c() {
      t && t.c(), (e = ye());
    },
    l(l) {
      t && t.l(l), (e = ye());
    },
    m(l, n) {
      t && t.m(l, n), B(l, e, n);
    },
    p(l, n) {
      l[9] < l[2]
        ? t
          ? t.p(l, n)
          : ((t = ls(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(l) {
      t && t.d(l), l && h(e);
    },
  };
}
function Li(s) {
  let e,
    t,
    l,
    n,
    a = s[4](He.YourPasswordShould) + "",
    i,
    r,
    o = s[3],
    c = [];
  for (let u = 0; u < o.length; u += 1) c[u] = ss(ts(s, o, u));
  return {
    c() {
      (e = b("div")),
        (t = b("i")),
        (l = U()),
        (n = b("div")),
        (i = H(a)),
        (r = U());
      for (let u = 0; u < c.length; u += 1) c[u].c();
      this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var m = w(e);
      (t = E(m, "I", { class: !0 })),
        w(t).forEach(h),
        (l = M(m)),
        (n = E(m, "DIV", {}));
      var _ = w(n);
      (i = F(_, a)), _.forEach(h), (r = M(m));
      for (let v = 0; v < c.length; v += 1) c[v].l(m);
      m.forEach(h), this.h();
    },
    h() {
      f(t, "class", "before svelte-1ll9fju"),
        f(e, "class", "wrap pr df fdc T3 svelte-1ll9fju"),
        Z(e, "right", s[1] === "right");
    },
    m(u, m) {
      B(u, e, m), d(e, t), d(e, l), d(e, n), d(n, i), d(e, r);
      for (let _ = 0; _ < c.length; _ += 1) c[_].m(e, null);
    },
    p(u, [m]) {
      if (m & 13) {
        o = u[3];
        let _;
        for (_ = 0; _ < o.length; _ += 1) {
          const v = ts(u, o, _);
          c[_] ? c[_].p(v, m) : ((c[_] = ss(v)), c[_].c(), c[_].m(e, null));
        }
        for (; _ < c.length; _ += 1) c[_].d(1);
        c.length = o.length;
      }
      m & 2 && Z(e, "right", u[1] === "right");
    },
    i: me,
    o: me,
    d(u) {
      u && h(e), St(c, u);
    },
  };
}
function Ri(s, e, t) {
  let { password: l = null } = e,
    { isPasswordTips: n = !1 } = e,
    { placement: a = "left" } = e,
    { isShowSpecialCharacters: i = 5 } = e;
  const r = je("LG");
  let o = [
    { text: r(He.OrMoreCharacters), status: !1, rule: (u) => u.length >= 8 },
    { text: r(He.LowercaseLetter), status: !1, rule: (u) => /[a-z]/.test(u) },
    { text: r(He.UppercaseLetter), status: !1, rule: (u) => /[A-Z]/.test(u) },
    { text: r(He.ContainsNumber), status: !1, rule: (u) => /\d/.test(u) },
    {
      text: r(He.ContainsSpecialCharacters),
      status: !1,
      rule: (u) => Nt.CHARACTER_ASC.test(u),
    },
  ];
  function c(u) {
    if (u === null && !u) return null;
    o.forEach((m) => {
      m.status = m.rule(u);
    }),
      t(3, (o = [...o]));
  }
  return (
    (s.$$set = (u) => {
      "password" in u && t(5, (l = u.password)),
        "isPasswordTips" in u && t(0, (n = u.isPasswordTips)),
        "placement" in u && t(1, (a = u.placement)),
        "isShowSpecialCharacters" in u && t(2, (i = u.isShowSpecialCharacters));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 32 && c(l);
    }),
    [n, a, i, o, r, l]
  );
}
class ga extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Ri, Li, Ce, {
        password: 5,
        isPasswordTips: 0,
        placement: 1,
        isShowSpecialCharacters: 2,
      });
  }
}
function ns(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "ml4 iconfont f18 light-gray svelte-192bzuy");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function as(s) {
  let e, t, l, n;
  return (
    (l = new ga({
      props: {
        password: s[0],
        isPasswordTips: s[9],
        placement: s[4],
        isShowSpecialCharacters: s[11],
      },
    })),
    {
      c() {
        (e = b("div")), (t = b("div")), j(l.$$.fragment), this.h();
      },
      l(a) {
        e = E(a, "DIV", { class: !0 });
        var i = w(e);
        t = E(i, "DIV", { class: !0 });
        var r = w(t);
        K(l.$$.fragment, r), r.forEach(h), i.forEach(h), this.h();
      },
      h() {
        f(t, "class", "password pa svelte-192bzuy"),
          Z(t, "modal-hint", s[10]),
          Z(t, "left", s[4] === "left"),
          f(e, "class", "svelte-192bzuy"),
          Z(e, "modal-wrap", s[10]);
      },
      m(a, i) {
        B(a, e, i), d(e, t), q(l, t, null), (n = !0);
      },
      p(a, i) {
        const r = {};
        i & 1 && (r.password = a[0]),
          i & 512 && (r.isPasswordTips = a[9]),
          i & 16 && (r.placement = a[4]),
          i & 2048 && (r.isShowSpecialCharacters = a[11]),
          l.$set(r),
          (!n || i & 1024) && Z(t, "modal-hint", a[10]),
          (!n || i & 16) && Z(t, "left", a[4] === "left"),
          (!n || i & 1024) && Z(e, "modal-wrap", a[10]);
      },
      i(a) {
        n || ($(l.$$.fragment, a), (n = !0));
      },
      o(a) {
        y(l.$$.fragment, a), (n = !1);
      },
      d(a) {
        a && h(e), X(l);
      },
    }
  );
}
function is(s) {
  let e, t, l;
  return (
    (t = new ga({
      props: {
        password: s[0],
        isPasswordTips: s[9],
        placement: s[4],
        isShowSpecialCharacters: s[11],
      },
    })),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "password svelte-192bzuy");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, a) {
        const i = {};
        a & 1 && (i.password = n[0]),
          a & 512 && (i.isPasswordTips = n[9]),
          a & 16 && (i.placement = n[4]),
          a & 2048 && (i.isShowSpecialCharacters = n[11]),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function Oi(s) {
  let e,
    t,
    l,
    n,
    a,
    i = s[15] ? "&#xe73f;" : "&#xe750;",
    r,
    o,
    c,
    u,
    m,
    _,
    v,
    p = s[1] && ns(),
    g = s[8] && s[2] >= 640 && as(s),
    k = s[8] && s[2] < 640 && is(s);
  return {
    c() {
      (e = b("div")),
        p && p.c(),
        (t = U()),
        (l = b("input")),
        (n = U()),
        (a = b("i")),
        (r = U()),
        g && g.c(),
        (c = U()),
        k && k.c(),
        (u = ye()),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var T = w(e);
      p && p.l(T),
        (t = M(T)),
        (l = E(T, "INPUT", {
          class: !0,
          type: !0,
          autocomplete: !0,
          placeholder: !0,
        })),
        (n = M(T)),
        (a = E(T, "I", { class: !0 }));
      var S = w(a);
      S.forEach(h),
        (r = M(T)),
        g && g.l(T),
        T.forEach(h),
        (c = M(I)),
        k && k.l(I),
        (u = ye()),
        this.h();
    },
    h() {
      f(l, "class", "autofill ml4 ipt f1 svelte-192bzuy"),
        f(l, "type", "password"),
        (l.readOnly = s[12]),
        f(l, "autocomplete", s[5]),
        f(l, "placeholder", s[3]),
        (l.disabled = s[6]),
        f(a, "class", "iconfont f18 light-gray cp usn svelte-192bzuy"),
        f(e, "class", (o = "item pr df aic ph16 " + s[13] + " svelte-192bzuy")),
        Z(e, "modal-ui", s[10]),
        Z(e, "error", s[7]),
        Z(e, "disabled", s[6]);
    },
    m(I, T) {
      B(I, e, T),
        p && p.m(e, null),
        d(e, t),
        d(e, l),
        ze(l, s[0]),
        s[22](l),
        d(e, n),
        d(e, a),
        (a.innerHTML = i),
        d(e, r),
        g && g.m(e, null),
        B(I, c, T),
        k && k.m(I, T),
        B(I, u, T),
        (m = !0),
        _ ||
          ((v = [
            ee(l, "input", s[21]),
            ee(l, "keypress", s[18]),
            ee(l, "focus", s[19]),
            ee(l, "blur", s[20]),
            ee(a, "click", s[16]),
          ]),
          (_ = !0));
    },
    p(I, [T]) {
      I[1] ? p || ((p = ns()), p.c(), p.m(e, t)) : p && (p.d(1), (p = null)),
        (!m || T & 4096) && (l.readOnly = I[12]),
        (!m || T & 32) && f(l, "autocomplete", I[5]),
        (!m || T & 8) && f(l, "placeholder", I[3]),
        (!m || T & 64) && (l.disabled = I[6]),
        T & 1 && l.value !== I[0] && ze(l, I[0]),
        (!m || T & 32768) &&
          i !== (i = I[15] ? "&#xe73f;" : "&#xe750;") &&
          (a.innerHTML = i),
        I[8] && I[2] >= 640
          ? g
            ? (g.p(I, T), T & 260 && $(g, 1))
            : ((g = as(I)), g.c(), $(g, 1), g.m(e, null))
          : g &&
            (Ue(),
            y(g, 1, 1, () => {
              g = null;
            }),
            Me()),
        (!m ||
          (T & 8192 &&
            o !== (o = "item pr df aic ph16 " + I[13] + " svelte-192bzuy"))) &&
          f(e, "class", o),
        (!m || T & 9216) && Z(e, "modal-ui", I[10]),
        (!m || T & 8320) && Z(e, "error", I[7]),
        (!m || T & 8256) && Z(e, "disabled", I[6]),
        I[8] && I[2] < 640
          ? k
            ? (k.p(I, T), T & 260 && $(k, 1))
            : ((k = is(I)), k.c(), $(k, 1), k.m(u.parentNode, u))
          : k &&
            (Ue(),
            y(k, 1, 1, () => {
              k = null;
            }),
            Me());
    },
    i(I) {
      m || ($(g), $(k), (m = !0));
    },
    o(I) {
      y(g), y(k), (m = !1);
    },
    d(I) {
      I && h(e),
        p && p.d(),
        s[22](null),
        g && g.d(),
        I && h(c),
        k && k.d(I),
        I && h(u),
        (_ = !1),
        xe(v);
    },
  };
}
function Ni(s, e, t) {
  let { showIcon: l = !0 } = e,
    { innerWidth: n = 1200 } = e,
    { value: a = "" } = e,
    { placeholder: i = "" } = e,
    { placement: r = "left" } = e,
    { autocomplete: o = "on" } = e,
    { disabled: c = !1 } = e,
    { isError: u = !1 } = e,
    { autofocus: m = !1 } = e,
    { isShowPasswordTips: _ = !1 } = e,
    { isPasswordTips: v = !1 } = e,
    { modalUI: p = !1 } = e,
    { isShowSpecialCharacters: g = 5 } = e,
    { readonly: k = !1 } = e,
    { class: I = "" } = e,
    T = null,
    S = !0;
  Be(() => {
    m && setTimeout(() => T && T.focus(), 0);
  });
  function C() {
    T &&
      (t(14, (T.type = T.type === "password" ? "text" : "password"), T),
      t(15, (S = !S)));
  }
  function A(R) {
    Dt.call(this, s, R);
  }
  function D(R) {
    Dt.call(this, s, R);
  }
  function L(R) {
    Dt.call(this, s, R);
  }
  function O() {
    (a = this.value), t(0, a);
  }
  function P(R) {
    gt[R ? "unshift" : "push"](() => {
      (T = R), t(14, T);
    });
  }
  return (
    (s.$$set = (R) => {
      "showIcon" in R && t(1, (l = R.showIcon)),
        "innerWidth" in R && t(2, (n = R.innerWidth)),
        "value" in R && t(0, (a = R.value)),
        "placeholder" in R && t(3, (i = R.placeholder)),
        "placement" in R && t(4, (r = R.placement)),
        "autocomplete" in R && t(5, (o = R.autocomplete)),
        "disabled" in R && t(6, (c = R.disabled)),
        "isError" in R && t(7, (u = R.isError)),
        "autofocus" in R && t(17, (m = R.autofocus)),
        "isShowPasswordTips" in R && t(8, (_ = R.isShowPasswordTips)),
        "isPasswordTips" in R && t(9, (v = R.isPasswordTips)),
        "modalUI" in R && t(10, (p = R.modalUI)),
        "isShowSpecialCharacters" in R &&
          t(11, (g = R.isShowSpecialCharacters)),
        "readonly" in R && t(12, (k = R.readonly)),
        "class" in R && t(13, (I = R.class));
    }),
    [a, l, n, i, r, o, c, u, _, v, p, g, k, I, T, S, C, m, A, D, L, O, P]
  );
}
class pa extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Ni, Oi, Ce, {
        showIcon: 1,
        innerWidth: 2,
        value: 0,
        placeholder: 3,
        placement: 4,
        autocomplete: 5,
        disabled: 6,
        isError: 7,
        autofocus: 17,
        isShowPasswordTips: 8,
        isPasswordTips: 9,
        modalUI: 10,
        isShowSpecialCharacters: 11,
        readonly: 12,
        class: 13,
      });
  }
}
function Vi(s, e, t) {
  return s === null || Nt.EMAIL.test(s)
    ? null
    : e(s ? t.EmailError : t.NoEmailError);
}
function Md(s, e, t) {
  return s === null || Nt.PASSWORD.test(s)
    ? null
    : e(s ? t.PasswordError : t.NoPasswordError);
}
function Ui(s) {
  let e = s[0](Ut.OK) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](Ut.OK) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Mi(s) {
  let e,
    t = s[0](Ut.TheMainAccount) + "",
    l,
    n,
    a,
    i = s[0](Ut.PleaseLogIn) + "",
    r,
    o,
    c,
    u,
    m;
  return (
    (u = new ft({
      props: {
        type: "primary",
        size: "small",
        $$slots: { default: [Ui] },
        $$scope: { ctx: s },
      },
    })),
    u.$on("click", s[1]),
    {
      c() {
        (e = b("div")),
          (l = H(t)),
          (n = U()),
          (a = b("div")),
          (r = H(i)),
          (o = U()),
          (c = b("div")),
          j(u.$$.fragment),
          this.h();
      },
      l(_) {
        e = E(_, "DIV", { class: !0 });
        var v = w(e);
        (l = F(v, t)),
          v.forEach(h),
          (n = M(_)),
          (a = E(_, "DIV", { class: !0 }));
        var p = w(a);
        (r = F(p, i)),
          p.forEach(h),
          (o = M(_)),
          (c = E(_, "DIV", { class: !0 }));
        var g = w(c);
        K(u.$$.fragment, g), g.forEach(h), this.h();
      },
      h() {
        f(e, "class", "f16 fw3 tc"),
          f(a, "class", "mt12 tc"),
          f(c, "class", "mt20 tc");
      },
      m(_, v) {
        B(_, e, v),
          d(e, l),
          B(_, n, v),
          B(_, a, v),
          d(a, r),
          B(_, o, v),
          B(_, c, v),
          q(u, c, null),
          (m = !0);
      },
      p(_, v) {
        (!m || v & 1) && t !== (t = _[0](Ut.TheMainAccount) + "") && te(l, t),
          (!m || v & 1) && i !== (i = _[0](Ut.PleaseLogIn) + "") && te(r, i);
        const p = {};
        v & 9 && (p.$$scope = { dirty: v, ctx: _ }), u.$set(p);
      },
      i(_) {
        m || ($(u.$$.fragment, _), (m = !0));
      },
      o(_) {
        y(u.$$.fragment, _), (m = !1);
      },
      d(_) {
        _ && h(e), _ && h(n), _ && h(a), _ && h(o), _ && h(c), X(u);
      },
    }
  );
}
function $i(s) {
  let e, t;
  return (
    (e = new pl({
      props: {
        visible: !0,
        style: "max-width: 400px;",
        $$slots: { default: [Mi] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 9 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Gi(s, e, t) {
  let { LG: l } = e;
  const n = Qe();
  Be(() => {
    setTimeout(() => {
      n("close");
    }, 3e3);
  });
  function a() {
    n("close");
  }
  return (
    (s.$$set = (i) => {
      "LG" in i && t(0, (l = i.LG));
    }),
    [l, a]
  );
}
class Bi extends Ie {
  constructor(e) {
    super(), Te(this, e, Gi, $i, Ce, { LG: 0 });
  }
}
function yi(s) {
  if (s === ll.metaMask) return $t(Oa);
  if (s === ll.walletConnect) return $t(Na);
}
function Wi({ notificationType: s, address: e }) {
  return $t(() => jn.postWeb3Start({ notificationType: s, address: e })).pipe(
    Ht((t) => {
      const { error: l } = t;
      if (l) throw new Error(l.message);
    }),
    Tt(({ data: t }) => t),
    qn(({ code: t, msg: l }) =>
      $t(() => Va(l)).pipe(
        Tt((n) => ({
          signedMessage: n,
          generalStartCode: t,
          generalStartMessage: l,
        }))
      )
    )
  );
}
function Yi(s) {
  const { LG: e, connector: t, referralCode: l = "", group: n = "" } = s;
  let a, i, r;
  return Ua([
    {
      name: "walletConnect",
      generateObservable() {
        return yi(t).pipe(
          Ht((o) => {
            a = o;
          })
        );
      },
    },
    {
      name: "signMessage",
      generateObservable() {
        return Wi({
          notificationType: "WEB3_WALLET_LOGIN_SIGNATURE",
          address: a.address,
        }).pipe(
          Ht((c) => {
            i = c;
          })
        );
      },
    },
    {
      name: "googleCaptcha",
      generateObservable(o) {
        return $t(() => kt("walletLogin")).pipe(
          Ht((c) => {
            if (!c) throw new Error(e(Hi.NetworkError));
            r = c;
          })
        );
      },
    },
    {
      name: "walletLogin",
      generateObservable(o, c) {
        return $t(() =>
          jn.walletLogin({
            query: {
              recaptchaToken: r.recaptchaToken,
              recaptchaVersion: r.recaptchaVersion,
            },
            params: {
              generalStartCode: i.generalStartCode,
              signedMessage: i.signedMessage,
              address: a.address,
              walletName: a.walletType,
              walletSource: a.connectorType,
              referralCode: l,
              group: n,
            },
          })
        ).pipe(
          Ht((u) => {
            const m = u == null ? void 0 : u.error;
            if (m) throw new Error(m.message);
          }),
          Tt(() => ({ address: a.address }))
        );
      },
    },
  ]);
}
const Hi = {
  NetworkError: {
    en: "Network error",
    cn: "网络错误",
    ru: "Ошибка сети, пожалуйста",
    ko: "인터넷 오류",
    ja: "ネットワークエラーです",
    es: "Error de red",
    fr: "Erreur réseau",
    de: "Netzwerkfehler",
    tr: "Ağ hatası",
    pt: "Erro de rede",
    vi: "Lỗi mạng",
  },
};
function va(s, e = !1) {
  const t = new _i(),
    l = t.pipe(
      Tt((n) => ({ ...n, connector: s })),
      qn((n) => {
        const { LG: a, referralCode: i = "", group: r = "" } = n,
          o = Yi({ connector: s, LG: a, referralCode: i, group: r });
        return Ma(o, n).pipe(
          Tt(() => (Ci(e), { loading: !1 })),
          ha({ loading: !0 }),
          $a(() => Ga({ loading: !1 }))
        );
      })
    );
  return { submitConnect$: t, connectState$: l };
}
function Fi(s) {
  let e, t;
  return (
    (e = new vl({
      props: { style: "background: none;transform: scale(0.7);" },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p: me,
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function zi(s) {
  let e, t, l, n, a, i, r, o, c, u;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("img")),
        (a = U()),
        (i = b("img")),
        (o = U()),
        (c = b("div")),
        (u = H("WalletConnect")),
        this.h();
    },
    l(m) {
      e = E(m, "DIV", { class: !0 });
      var _ = w(e);
      t = E(_, "DIV", { class: !0 });
      var v = w(t);
      (l = E(v, "IMG", { class: !0, width: !0, height: !0, src: !0, alt: !0 })),
        (a = M(v)),
        (i = E(v, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
        v.forEach(h),
        (o = M(_)),
        (c = E(_, "DIV", { class: !0 }));
      var p = w(c);
      (u = F(p, "WalletConnect")), p.forEach(h), _.forEach(h), this.h();
    },
    h() {
      f(l, "class", "original"),
        f(l, "width", "24"),
        f(l, "height", "24"),
        Se(
          l.src,
          (n = "https://img.phemex.com/v1/b18891a8/wallet-connect.svg")
        ) || f(l, "src", n),
        f(l, "alt", "icon"),
        f(i, "class", "white"),
        f(i, "width", "24"),
        f(i, "height", "24"),
        Se(i.src, (r = sl.ACCESS_ICON)) || f(i, "src", r),
        f(i, "alt", "icon"),
        f(t, "class", "img df jcc aic"),
        f(c, "class", "con mt12 f12 lh18 T3 sm:hidden"),
        f(e, "class", "df fdc jcc aic");
    },
    m(m, _) {
      B(m, e, _), d(e, t), d(t, l), d(t, a), d(t, i), d(e, o), d(e, c), d(c, u);
    },
    p: me,
    i: me,
    o: me,
    d(m) {
      m && h(e);
    },
  };
}
function ji(s) {
  let e, t, l, n;
  const a = [zi, Fi],
    i = [];
  function r(o, c) {
    return o[0] ? 1 : 0;
  }
  return (
    (e = r(s)),
    (t = i[e] = a[e](s)),
    {
      c() {
        t.c(), (l = ye());
      },
      l(o) {
        t.l(o), (l = ye());
      },
      m(o, c) {
        i[e].m(o, c), B(o, l, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = r(o)),
          e === u
            ? i[e].p(o, c)
            : (Ue(),
              y(i[u], 1, 1, () => {
                i[u] = null;
              }),
              Me(),
              (t = i[e]),
              t ? t.p(o, c) : ((t = i[e] = a[e](o)), t.c()),
              $(t, 1),
              t.m(l.parentNode, l));
      },
      i(o) {
        n || ($(t), (n = !0));
      },
      o(o) {
        y(t), (n = !1);
      },
      d(o) {
        i[e].d(o), o && h(l);
      },
    }
  );
}
function qi(s) {
  let e, t, l;
  return (
    (t = new Ot({
      props: {
        class: "f16 " + s[1],
        newRadius: !0,
        type: "primary",
        style: "padding: 0",
        $$slots: { default: [ji] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[3]),
    {
      c() {
        (e = b("section")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "SECTION", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "wallet-connect-box svelte-lug3rv");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, [a]) {
        const i = {};
        a & 2 && (i.class = "f16 " + n[1]),
          a & 2049 && (i.$$scope = { dirty: a, ctx: n }),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function Xi(s, e, t) {
  let l,
    n,
    a,
    { scene: i } = e,
    { referralCode: r = "" } = e,
    { group: o = "" } = e,
    { fromType: c = null } = e;
  const u = je("LG"),
    { submitConnect$: m, connectState$: _ } = va(
      ll.walletConnect,
      c === "popLogin"
    );
  ge(s, _, (p) => t(8, (a = p)));
  function v() {
    m.next({ scene: i, LG: u, referralCode: r, group: o });
  }
  return (
    (s.$$set = (p) => {
      "scene" in p && t(4, (i = p.scene)),
        "referralCode" in p && t(5, (r = p.referralCode)),
        "group" in p && t(6, (o = p.group)),
        "fromType" in p && t(7, (c = p.fromType));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 256 && t(0, (l = a && a.loading)),
        s.$$.dirty & 1 && t(1, (n = l ? "custom-loading" : ""));
    }),
    [l, n, _, v, i, r, o, c, a]
  );
}
class Ki extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Xi, qi, Ce, {
        scene: 4,
        referralCode: 5,
        group: 6,
        fromType: 7,
      });
  }
}
function Qi(s) {
  let e, t;
  return (
    (e = new vl({
      props: { style: "background: none;transform: scale(0.7);" },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ji(s) {
  let e, t, l, n, a, i, r;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("img")),
        (a = U()),
        (i = b("div")),
        (r = H("MetaMask")),
        this.h();
    },
    l(o) {
      e = E(o, "DIV", { class: !0 });
      var c = w(e);
      t = E(c, "DIV", { class: !0 });
      var u = w(t);
      (l = E(u, "IMG", {
        width: !0,
        height: !0,
        "data-replace-icon": !0,
        src: !0,
        alt: !0,
      })),
        u.forEach(h),
        (a = M(c)),
        (i = E(c, "DIV", { class: !0 }));
      var m = w(i);
      (r = F(m, "MetaMask")), m.forEach(h), c.forEach(h), this.h();
    },
    h() {
      f(l, "width", "24"),
        f(l, "height", "24"),
        f(l, "data-replace-icon", "false"),
        Se(
          l.src,
          (n = "https://img.phemex.com/v1/cef5dd17/transparent-metamask.svg")
        ) || f(l, "src", n),
        f(l, "alt", "icon"),
        f(t, "class", "img df jcc aic"),
        f(i, "class", "con mt12 f12 lh18 T3 sm:hidden"),
        f(e, "class", "df fdc jcc aic");
    },
    m(o, c) {
      B(o, e, c), d(e, t), d(t, l), d(e, a), d(e, i), d(i, r);
    },
    i: me,
    o: me,
    d(o) {
      o && h(e);
    },
  };
}
function Zi(s) {
  let e, t, l, n;
  const a = [Ji, Qi],
    i = [];
  function r(o, c) {
    return o[0] ? 1 : 0;
  }
  return (
    (e = r(s)),
    (t = i[e] = a[e](s)),
    {
      c() {
        t.c(), (l = ye());
      },
      l(o) {
        t.l(o), (l = ye());
      },
      m(o, c) {
        i[e].m(o, c), B(o, l, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = r(o)),
          e !== u &&
            (Ue(),
            y(i[u], 1, 1, () => {
              i[u] = null;
            }),
            Me(),
            (t = i[e]),
            t || ((t = i[e] = a[e](o)), t.c()),
            $(t, 1),
            t.m(l.parentNode, l));
      },
      i(o) {
        n || ($(t), (n = !0));
      },
      o(o) {
        y(t), (n = !1);
      },
      d(o) {
        i[e].d(o), o && h(l);
      },
    }
  );
}
function xi(s) {
  let e, t, l;
  return (
    (t = new Ot({
      props: {
        class: "pr f16 df aic jcc cp " + s[1],
        style: "padding: 0",
        $$slots: { default: [Zi] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[3]),
    {
      c() {
        (e = b("section")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "SECTION", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "wallet-connect-box svelte-1wpaxnu");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, [a]) {
        const i = {};
        a & 2 && (i.class = "pr f16 df aic jcc cp " + n[1]),
          a & 2049 && (i.$$scope = { dirty: a, ctx: n }),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function er(s, e, t) {
  let l,
    n,
    a,
    { scene: i } = e,
    { referralCode: r = "" } = e,
    { fromType: o = "" } = e,
    { group: c = "" } = e;
  const u = je("LG"),
    { submitConnect$: m, connectState$: _ } = va(ll.metaMask, o === "popLogin");
  ge(s, _, (p) => t(8, (a = p)));
  function v() {
    m.next({ scene: i, LG: u, referralCode: r, group: c });
  }
  return (
    (s.$$set = (p) => {
      "scene" in p && t(4, (i = p.scene)),
        "referralCode" in p && t(5, (r = p.referralCode)),
        "fromType" in p && t(6, (o = p.fromType)),
        "group" in p && t(7, (c = p.group));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 256 && t(0, (l = a && a.loading)),
        s.$$.dirty & 1 && t(1, (n = l ? "custom-loading" : ""));
    }),
    [l, n, _, v, i, r, o, c, a]
  );
}
class tr extends Ie {
  constructor(e) {
    super(),
      Te(this, e, er, xi, Ce, {
        scene: 4,
        referralCode: 5,
        fromType: 6,
        group: 7,
      });
  }
}
async function rs(s) {
  const { data: e, error: t } = await s;
  return t ? (Re.send("toast", "error", t), { error: t }) : { data: e };
}
function lr(s) {
  let e, t;
  return (
    (e = new vl({
      props: { style: "background: none;transform: scale(0.7);" },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function sr(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", {
        width: !0,
        height: !0,
        "data-replace-icon": !0,
        src: !0,
        alt: !0,
      })),
        this.h();
    },
    h() {
      f(e, "width", "24"),
        f(e, "height", "24"),
        f(e, "data-replace-icon", "false"),
        Se(e.src, (t = "https://static.phemex.com/s/web/media/telegram.svg")) ||
          f(e, "src", t),
        f(e, "alt", "icon");
    },
    m(l, n) {
      B(l, e, n);
    },
    i: me,
    o: me,
    d(l) {
      l && h(e);
    },
  };
}
function nr(s) {
  let e, t, l, n, a, i, r, o;
  const c = [sr, lr],
    u = [];
  function m(_, v) {
    return _[0] && !_[1] ? 0 : 1;
  }
  return (
    (l = m(s)),
    (n = u[l] = c[l](s)),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          n.c(),
          (a = U()),
          (i = b("div")),
          (r = H("Telegram")),
          this.h();
      },
      l(_) {
        e = E(_, "DIV", { class: !0 });
        var v = w(e);
        t = E(v, "DIV", { class: !0 });
        var p = w(t);
        n.l(p), p.forEach(h), (a = M(v)), (i = E(v, "DIV", { class: !0 }));
        var g = w(i);
        (r = F(g, "Telegram")), g.forEach(h), v.forEach(h), this.h();
      },
      h() {
        f(t, "class", "img df jcc aic pr"),
          f(i, "class", "con mt12 f12 lh18 T3 sm:hidden"),
          f(e, "class", "df fdc jcc aic");
      },
      m(_, v) {
        B(_, e, v),
          d(e, t),
          u[l].m(t, null),
          d(e, a),
          d(e, i),
          d(i, r),
          (o = !0);
      },
      p(_, v) {
        let p = l;
        (l = m(_)),
          l !== p &&
            (Ue(),
            y(u[p], 1, 1, () => {
              u[p] = null;
            }),
            Me(),
            (n = u[l]),
            n || ((n = u[l] = c[l](_)), n.c()),
            $(n, 1),
            n.m(t, null));
      },
      i(_) {
        o || ($(n), (o = !0));
      },
      o(_) {
        y(n), (o = !1);
      },
      d(_) {
        _ && h(e), u[l].d();
      },
    }
  );
}
function ar(s) {
  let e, t, l;
  return (
    (t = new Ot({
      props: {
        class: "pr f16 df aic jcc cp",
        style: "padding: 0",
        $$slots: { default: [nr] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[2]),
    {
      c() {
        (e = b("section")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "SECTION", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "wallet-connect-box svelte-axgvo9");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, [a]) {
        const i = {};
        a & 2051 && (i.$$scope = { dirty: a, ctx: n }), t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function ir(s, e, t) {
  let l;
  ge(s, vt, (v) => t(8, (l = v)));
  let { scene: n } = e,
    { referralCode: a = "" } = e,
    { group: i = "" } = e,
    { target: r = "" } = e;
  je("LG");
  let o = !1,
    c = !1,
    u;
  Be(async () => {
    const { data: v } = await Ve.telegramBotInfo({ source: "telegram" });
    (u = v),
      ui().then(() => {
        t(0, (o = !0));
      });
  });
  function m() {
    !o ||
      c ||
      (t(1, (c = !0)),
      window.Telegram.Login.auth(
        {
          bot_id: u == null ? void 0 : u.id,
          request_access: "write",
          embed: 1,
        },
        (v) => {
          console.log(v), v ? _(v).then() : t(1, (c = !1));
        }
      ));
  }
  async function _(v) {
    (v.id = `${v.id}`), (v.auth_date = `${v.auth_date}`);
    const p = {
        authSource: "telegram",
        lang: bl[l] || l,
        referralCode: a,
        authParam: JSON.stringify(v),
      },
      g = await kt("register"),
      { data: k, error: I } = await rs(Ve.authLogin(g, p));
    if (
      (k == null ? void 0 : k.decision) === 1 ||
      (k == null ? void 0 : k.decision) === 3
    ) {
      const T = { email: k.email, code: k.code },
        { data: S } = await rs(Ve.confirmAuthLogin(T));
      S && Rt(r);
    }
    t(1, (c = !1));
  }
  return (
    (s.$$set = (v) => {
      "scene" in v && t(3, (n = v.scene)),
        "referralCode" in v && t(4, (a = v.referralCode)),
        "group" in v && t(5, (i = v.group)),
        "target" in v && t(6, (r = v.target));
    }),
    [o, c, m, n, a, i, r]
  );
}
class rr extends Ie {
  constructor(e) {
    super(),
      Te(this, e, ir, ar, Ce, {
        scene: 3,
        referralCode: 4,
        group: 5,
        target: 6,
      });
  }
}
function or(s) {
  let e, t, l, n, a;
  const i = s[6].default,
    r = lt(i, s, s[5], null);
  return {
    c() {
      (e = b("span")), r && r.c(), this.h();
    },
    l(o) {
      e = E(o, "SPAN", { class: !0 });
      var c = w(e);
      r && r.l(c), c.forEach(h), this.h();
    },
    h() {
      f(e, "class", (t = "login-with-twitter f1 " + s[0]));
    },
    m(o, c) {
      B(o, e, c),
        r && r.m(e, null),
        (l = !0),
        n || ((a = ee(e, "click", s[1])), (n = !0));
    },
    p(o, [c]) {
      r &&
        r.p &&
        (!l || c & 32) &&
        st(r, i, o, o[5], l ? at(i, o[5], c, null) : nt(o[5]), null),
        (!l || (c & 1 && t !== (t = "login-with-twitter f1 " + o[0]))) &&
          f(e, "class", t);
    },
    i(o) {
      l || ($(r, o), (l = !0));
    },
    o(o) {
      y(r, o), (l = !1);
    },
    d(o) {
      o && h(e), r && r.d(o), (n = !1), a();
    },
  };
}
function cr(s = 32) {
  const e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890",
    t = e.length,
    l = [];
  for (let n = 0; n < s; n++) l.push(e.charAt(Math.floor(Math.random() * t)));
  return l.join("");
}
function fr(s, e, t) {
  let l;
  ge(s, Ft, (m) => t(7, (l = m)));
  let { $$slots: n = {}, $$scope: a } = e,
    { class: i = "" } = e,
    { target: r = "" } = e,
    { next: o = "" } = e,
    { entrance: c = "" } = e;
  async function u() {
    const { code: m } = l,
      { data: _ } = await Ve.getTwitterClientId(),
      v = _.msg,
      p = cr(),
      g = Ba(),
      k = encodeURIComponent(`${p}#${o}#${r || ""}#${m}#${c}`),
      I = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${v}&redirect_uri=${g}&scope=users.read%20follows.read%20tweet.read&state=${k}&code_challenge=${p}&code_challenge_method=plain`;
    window.location.assign(I);
  }
  return (
    (s.$$set = (m) => {
      "class" in m && t(0, (i = m.class)),
        "target" in m && t(2, (r = m.target)),
        "next" in m && t(3, (o = m.next)),
        "entrance" in m && t(4, (c = m.entrance)),
        "$$scope" in m && t(5, (a = m.$$scope));
    }),
    [i, u, r, o, c, a, n]
  );
}
class ur extends Ie {
  constructor(e) {
    super(),
      Te(this, e, fr, or, Ce, { class: 0, target: 2, next: 3, entrance: 4 });
  }
}
const dr =
  "1049687047278-s35ef5r784fe3i5bkr3td1lsuumv8fi9.apps.googleusercontent.com";
function os(s) {
  let e,
    t,
    l,
    n,
    a =
      (s[7] === "Login"
        ? s[5](He.LoginWith)
        : s[5](He.Or) + " " + s[5](He.SignUpWith)) + "",
    i;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = U()),
        (n = b("div")),
        (i = H(a)),
        this.h();
    },
    l(r) {
      e = E(r, "DIV", { class: !0 });
      var o = w(e);
      (t = E(o, "DIV", { class: !0 })),
        w(t).forEach(h),
        (l = M(o)),
        (n = E(o, "DIV", { class: !0 }));
      var c = w(n);
      (i = F(c, a)), c.forEach(h), o.forEach(h), this.h();
    },
    h() {
      f(t, "class", "br pa svelte-yk3yz2"),
        f(n, "class", "or lh20 f14 svelte-yk3yz2"),
        f(e, "class", "pr df aic jcc");
    },
    m(r, o) {
      B(r, e, o), d(e, t), d(e, l), d(e, n), d(n, i);
    },
    p(r, o) {
      o & 160 &&
        a !==
          (a =
            (r[7] === "Login"
              ? r[5](He.LoginWith)
              : r[5](He.Or) + " " + r[5](He.SignUpWith)) + "") &&
        te(i, a);
    },
    d(r) {
      r && h(e);
    },
  };
}
function hr(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u = (s[2] ? "" : s[5](He.SignUpWith)) + "",
    m,
    _;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("img")),
        (a = U()),
        (i = b("img")),
        (o = U()),
        (c = b("div")),
        (m = H(u)),
        (_ = H(" Google")),
        this.h();
    },
    l(v) {
      e = E(v, "DIV", { class: !0 });
      var p = w(e);
      t = E(p, "DIV", { class: !0 });
      var g = w(t);
      (l = E(g, "IMG", { class: !0, width: !0, height: !0, src: !0, alt: !0 })),
        (a = M(g)),
        (i = E(g, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
        g.forEach(h),
        (o = M(p)),
        (c = E(p, "DIV", { class: !0 }));
      var k = w(c);
      (m = F(k, u)),
        (_ = F(k, " Google")),
        k.forEach(h),
        p.forEach(h),
        this.h();
    },
    h() {
      f(l, "class", "original"),
        f(l, "width", "24"),
        f(l, "height", "24"),
        Se(l.src, (n = Wa.GOOGLE_ICON)) || f(l, "src", n),
        f(l, "alt", "icon"),
        Z(l, "mr8", !s[2]),
        f(i, "class", "white svelte-yk3yz2"),
        f(i, "width", "24"),
        f(i, "height", "24"),
        Se(i.src, (r = sl.GOOGLE_ICON)) || f(i, "src", r),
        f(i, "alt", "icon"),
        f(t, "class", "df aic jcc"),
        Z(t, "img", s[2]),
        f(c, "class", "sm:hidden svelte-yk3yz2"),
        Z(c, "con", s[2]),
        f(e, "class", "df aic fw2"),
        Z(e, "fdc", s[2]);
    },
    m(v, p) {
      B(v, e, p),
        d(e, t),
        d(t, l),
        d(t, a),
        d(t, i),
        d(e, o),
        d(e, c),
        d(c, m),
        d(c, _);
    },
    p(v, p) {
      p & 4 && Z(l, "mr8", !v[2]),
        p & 4 && Z(t, "img", v[2]),
        p & 36 &&
          u !== (u = (v[2] ? "" : v[5](He.SignUpWith)) + "") &&
          te(m, u),
        p & 4 && Z(c, "con", v[2]),
        p & 4 && Z(e, "fdc", v[2]);
    },
    d(v) {
      v && h(e);
    },
  };
}
function cs(s) {
  let e;
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(t) {
      (e = E(t, "DIV", { class: !0, id: !0 })), w(e).forEach(h), this.h();
    },
    h() {
      f(e, "class", "buttonDiv pa svelte-yk3yz2"), f(e, "id", "buttonDiv");
    },
    m(t, l) {
      B(t, e, l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function fs(s) {
  let e, t;
  return (
    (e = new ur({
      props: {
        next: "login",
        target: s[6],
        entrance: s[1],
        $$slots: { default: [_r] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 64 && (a.target = l[6]),
          n & 2 && (a.entrance = l[1]),
          n & 524288 && (a.$$scope = { dirty: n, ctx: l }),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function mr(s) {
  let e, t, l, n, a, i, r, o, c, u;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("img")),
        (a = U()),
        (i = b("img")),
        (o = U()),
        (c = b("div")),
        (u = H("Twitter")),
        this.h();
    },
    l(m) {
      e = E(m, "DIV", { class: !0 });
      var _ = w(e);
      t = E(_, "DIV", { class: !0 });
      var v = w(t);
      (l = E(v, "IMG", { class: !0, width: !0, height: !0, src: !0, alt: !0 })),
        (a = M(v)),
        (i = E(v, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
        v.forEach(h),
        (o = M(_)),
        (c = E(_, "DIV", { class: !0 }));
      var p = w(c);
      (u = F(p, "Twitter")), p.forEach(h), _.forEach(h), this.h();
    },
    h() {
      f(l, "class", "original svelte-yk3yz2"),
        f(l, "width", "24"),
        f(l, "height", "24"),
        Se(l.src, (n = sl.TWITTER_ICON_BLACK)) || f(l, "src", n),
        f(l, "alt", "icon"),
        f(i, "class", "white svelte-yk3yz2"),
        f(i, "width", "24"),
        f(i, "height", "24"),
        Se(i.src, (r = sl.TWITTER_ICON)) || f(i, "src", r),
        f(i, "alt", "icon"),
        f(t, "class", "df aic jcc img svelte-yk3yz2"),
        f(c, "class", "tw mt12 f14 lh18 T3 sm:hidden svelte-yk3yz2"),
        f(e, "class", "inner df aic fdc svelte-yk3yz2");
    },
    m(m, _) {
      B(m, e, _), d(e, t), d(t, l), d(t, a), d(t, i), d(e, o), d(e, c), d(c, u);
    },
    p: me,
    d(m) {
      m && h(e);
    },
  };
}
function _r(s) {
  let e, t, l;
  return (
    (t = new Ot({
      props: {
        class: "f16",
        newRadius: !0,
        type: "primary",
        style: "padding: 0",
        $$slots: { default: [mr] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "twitter-btn btn svelte-yk3yz2");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, a) {
        const i = {};
        a & 524288 && (i.$$scope = { dirty: a, ctx: n }), t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function us(s) {
  let e, t, l, n, a, i;
  t = new Ki({
    props: {
      scene: s[7],
      referralCode: s[0],
      group: s[9] && s[9].group,
      fromType: s[4],
    },
  });
  let r = !tt.isMobile && gr(s),
    o = !tt.isJapanSite && pr(s);
  return {
    c() {
      (e = b("div")),
        j(t.$$.fragment),
        (l = U()),
        r && r.c(),
        (n = U()),
        o && o.c(),
        (a = ye()),
        this.h();
    },
    l(c) {
      e = E(c, "DIV", { class: !0 });
      var u = w(e);
      K(t.$$.fragment, u),
        u.forEach(h),
        (l = M(c)),
        r && r.l(c),
        (n = M(c)),
        o && o.l(c),
        (a = ye()),
        this.h();
    },
    h() {
      f(e, "class", "f1");
    },
    m(c, u) {
      B(c, e, u),
        q(t, e, null),
        B(c, l, u),
        r && r.m(c, u),
        B(c, n, u),
        o && o.m(c, u),
        B(c, a, u),
        (i = !0);
    },
    p(c, u) {
      const m = {};
      u & 128 && (m.scene = c[7]),
        u & 1 && (m.referralCode = c[0]),
        u & 512 && (m.group = c[9] && c[9].group),
        u & 16 && (m.fromType = c[4]),
        t.$set(m),
        tt.isMobile || r.p(c, u),
        tt.isJapanSite || o.p(c, u);
    },
    i(c) {
      i || ($(t.$$.fragment, c), $(r), $(o), (i = !0));
    },
    o(c) {
      y(t.$$.fragment, c), y(r), y(o), (i = !1);
    },
    d(c) {
      c && h(e),
        X(t),
        c && h(l),
        r && r.d(c),
        c && h(n),
        o && o.d(c),
        c && h(a);
    },
  };
}
function gr(s) {
  let e, t, l;
  return (
    (t = new tr({
      props: {
        scene: s[7],
        referralCode: s[0],
        group: s[9] && s[9].group,
        fromType: s[4],
      },
    })),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "f1");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, a) {
        const i = {};
        a & 128 && (i.scene = n[7]),
          a & 1 && (i.referralCode = n[0]),
          a & 512 && (i.group = n[9] && n[9].group),
          a & 16 && (i.fromType = n[4]),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function pr(s) {
  let e, t, l;
  return (
    (t = new rr({
      props: {
        scene: s[7],
        referralCode: s[0],
        group: s[9] && s[9].group,
        target: s[6],
      },
    })),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "f1");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, a) {
        const i = {};
        a & 128 && (i.scene = n[7]),
          a & 1 && (i.referralCode = n[0]),
          a & 512 && (i.group = n[9] && n[9].group),
          a & 64 && (i.target = n[6]),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function vr(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u = s[2] && os(s);
  (a = new Ot({
    props: {
      class: "f16 fw3",
      newRadius: !0,
      type: "primary",
      disabled: s[8],
      $$slots: { default: [hr] },
      $$scope: { ctx: s },
    },
  })),
    a.$on("click", s[10]);
  let m = !s[8] && cs(),
    _ = s[2] && fs(s),
    v = s[2] && !s[3] && us(s);
  return {
    c() {
      (e = b("div")),
        u && u.c(),
        (t = U()),
        (l = b("div")),
        (n = b("div")),
        j(a.$$.fragment),
        (i = U()),
        m && m.c(),
        (r = U()),
        _ && _.c(),
        (o = U()),
        v && v.c(),
        this.h();
    },
    l(p) {
      e = E(p, "DIV", { class: !0 });
      var g = w(e);
      u && u.l(g), (t = M(g)), (l = E(g, "DIV", { class: !0 }));
      var k = w(l);
      n = E(k, "DIV", { class: !0 });
      var I = w(n);
      K(a.$$.fragment, I),
        (i = M(I)),
        m && m.l(I),
        I.forEach(h),
        (r = M(k)),
        _ && _.l(k),
        (o = M(k)),
        v && v.l(k),
        k.forEach(h),
        g.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "btn google-btn pr f1 svelte-yk3yz2"),
        Z(n, "home-btn", !s[2]),
        f(l, "class", "df aic"),
        Z(l, "mt20", s[2]),
        f(e, "class", "google svelte-yk3yz2"),
        Z(e, "mt0", !s[2]);
    },
    m(p, g) {
      B(p, e, g),
        u && u.m(e, null),
        d(e, t),
        d(e, l),
        d(l, n),
        q(a, n, null),
        d(n, i),
        m && m.m(n, null),
        d(l, r),
        _ && _.m(l, null),
        d(l, o),
        v && v.m(l, null),
        (c = !0);
    },
    p(p, [g]) {
      p[2]
        ? u
          ? u.p(p, g)
          : ((u = os(p)), u.c(), u.m(e, t))
        : u && (u.d(1), (u = null));
      const k = {};
      g & 256 && (k.disabled = p[8]),
        g & 524324 && (k.$$scope = { dirty: g, ctx: p }),
        a.$set(k),
        p[8]
          ? m && (m.d(1), (m = null))
          : m || ((m = cs()), m.c(), m.m(n, null)),
        (!c || g & 4) && Z(n, "home-btn", !p[2]),
        p[2]
          ? _
            ? (_.p(p, g), g & 4 && $(_, 1))
            : ((_ = fs(p)), _.c(), $(_, 1), _.m(l, o))
          : _ &&
            (Ue(),
            y(_, 1, 1, () => {
              _ = null;
            }),
            Me()),
        p[2] && !p[3]
          ? v
            ? (v.p(p, g), g & 12 && $(v, 1))
            : ((v = us(p)), v.c(), $(v, 1), v.m(l, null))
          : v &&
            (Ue(),
            y(v, 1, 1, () => {
              v = null;
            }),
            Me()),
        (!c || g & 4) && Z(l, "mt20", p[2]),
        (!c || g & 4) && Z(e, "mt0", !p[2]);
    },
    i(p) {
      c || ($(a.$$.fragment, p), $(_), $(v), (c = !0));
    },
    o(p) {
      y(a.$$.fragment, p), y(_), y(v), (c = !1);
    },
    d(p) {
      p && h(e), u && u.d(), X(a), m && m.d(), _ && _.d(), v && v.d();
    },
  };
}
function br(s, e, t) {
  return s !== "login" ? e || t : e;
}
function Er(s) {
  const e = ["Login", "Register"];
  return e.includes(s) ? s : e[1];
}
function wr(s, e, t) {
  let l, n, a, i, r, o, c;
  ge(s, We, (A) => t(14, (a = A))),
    ge(s, vt, (A) => t(15, (i = A))),
    ge(s, Ft, (A) => t(9, (r = A))),
    ge(s, ya, (A) => t(11, (o = A))),
    ge(s, Xn, (A) => t(12, (c = A)));
  let { referralCode: u = null } = e,
    { entrance: m = "" } = e,
    { isShowOr: _ = !0 } = e,
    { isOauth: v = !1 } = e,
    { fromType: p = null } = e,
    { LG: g = je("LG") } = e;
  Qe();
  let k = "",
    I = "";
  Be(async () => {
    await di();
    const A = bt.parse(window.location.search);
    (I = window.location.search),
      t(6, (k = A.target)),
      window.google &&
        (google.accounts.id.initialize({ client_id: dr, callback: T }),
        google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
          theme: "outline",
          size: "large",
        }),
        google.accounts.id.prompt());
  });
  async function T(A) {
    const D = await kt("register");
    if (!D) {
      Re.send("toast", "error", { message: g(He.NetworkError) });
      return;
    }
    const L = {
        group: r.group,
        authToken: A.credential,
        authSource: "google",
        referralCode: u,
        nickName: "",
        lang: bl[i] || i,
      },
      { data: O, error: P } = await Ve.authLogin(D, L);
    O &&
      ((O.decision === 1 || O.decision === 3) && (await S(O)),
      O.decision === 2 &&
        wt.launchBindGoogleVerificationPage(g, O, { isOauth: v, search: I })),
      P && Re.send("toast", "error", P);
  }
  async function S(A) {
    const D = { email: A.email, code: A.code },
      { data: L, error: O } = await Ve.confirmAuthLogin(D);
    if (L) {
      if (v) {
        window.location.assign(
          a(PATHS.OAUTH_AUTHORIZE.pathname) + I + "&status=logged"
        );
        return;
      }
      if (A.decision === 1) {
        Rt(Zl(k) && k);
        return;
      }
      if (A.decision === 3) {
        Rt(Zl(k) && k);
        return;
      }
    }
    O && Re.send("toast", "error", O);
  }
  function C() {
    Ke.track("web_click", {
      $screen_name: "register",
      $element_content: "sign_up_with_google",
    }),
      Ke.track("web_view", {
        $screen_name: "register",
        $element_content: "sign_up_with_google",
      });
  }
  return (
    (s.$$set = (A) => {
      "referralCode" in A && t(0, (u = A.referralCode)),
        "entrance" in A && t(1, (m = A.entrance)),
        "isShowOr" in A && t(2, (_ = A.isShowOr)),
        "isOauth" in A && t(3, (v = A.isOauth)),
        "fromType" in A && t(4, (p = A.fromType)),
        "LG" in A && t(5, (g = A.LG));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 6146 && t(8, (l = br(m, c, o))),
        s.$$.dirty & 2 && t(7, (n = Er(m)));
    }),
    [u, m, _, v, p, g, k, n, l, r, C, o, c]
  );
}
class ba extends Ie {
  constructor(e) {
    super(),
      Te(this, e, wr, vr, Ce, {
        referralCode: 0,
        entrance: 1,
        isShowOr: 2,
        isOauth: 3,
        fromType: 4,
        LG: 5,
      });
  }
}
const kr = (s) => ({}),
  ds = (s) => ({});
function Ir(s) {
  let e,
    t = s[6](Oe.ReSend) + "",
    l,
    n,
    a;
  return {
    c() {
      (e = b("span")), (l = H(t)), this.h();
    },
    l(i) {
      e = E(i, "SPAN", { class: !0 });
      var r = w(e);
      (l = F(r, t)), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "BLUE cp");
    },
    m(i, r) {
      B(i, e, r), d(e, l), n || ((a = ee(e, "click", s[8])), (n = !0));
    },
    p: me,
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function Tr(s) {
  let e, t, l;
  return {
    c() {
      (e = b("span")), (t = H(s[5])), (l = H("s")), this.h();
    },
    l(n) {
      e = E(n, "SPAN", { class: !0 });
      var a = w(e);
      (t = F(a, s[5])), (l = F(a, "s")), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "default");
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(e, l);
    },
    p(n, a) {
      a & 32 && te(t, n[5]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function hs(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[6](Oe.SecurityVerificationUnavailable) + "",
    c,
    u,
    m;
  return {
    c() {
      (e = b("div")),
        (t = b("i")),
        (l = H("")),
        (n = U()),
        (a = b("input")),
        (i = U()),
        (r = b("div")),
        (c = H(o)),
        this.h();
    },
    l(_) {
      e = E(_, "DIV", { class: !0 });
      var v = w(e);
      t = E(v, "I", { class: !0 });
      var p = w(t);
      (l = F(p, "")),
        p.forEach(h),
        (n = M(v)),
        (a = E(v, "INPUT", { class: !0, type: !0, placeholder: !0 })),
        v.forEach(h),
        (i = M(_)),
        (r = E(_, "DIV", { class: !0 }));
      var g = w(r);
      (c = F(g, o)), g.forEach(h), this.h();
    },
    h() {
      f(t, "class", "iconfont f18 light-gray svelte-1wb91kv"),
        f(a, "class", "autofill ml12 ipt f1 svelte-1wb91kv"),
        f(a, "type", "text"),
        f(a, "placeholder", s[6](Oe.GoogleAuthenticatorCode)),
        f(e, "class", "input-wrap df aic mt24 ph16 svelte-1wb91kv"),
        f(r, "class", "mt24 cp BLUE");
    },
    m(_, v) {
      B(_, e, v),
        d(e, t),
        d(t, l),
        d(e, n),
        d(e, a),
        ze(a, s[3]),
        B(_, i, v),
        B(_, r, v),
        d(r, c),
        u ||
          ((m = [
            ee(a, "input", s[16]),
            ee(a, "keypress", s[13]),
            ee(r, "click", s[9]),
          ]),
          (u = !0));
    },
    p(_, v) {
      v & 8 && a.value !== _[3] && ze(a, _[3]);
    },
    d(_) {
      _ && h(e), _ && h(i), _ && h(r), (u = !1), xe(m);
    },
  };
}
function Cr(s) {
  let e = s[6](Oe.Confirm) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function Dr(s) {
  let e,
    t,
    l = s[6](Oe.NewDeviceLogin) + "",
    n,
    a,
    i,
    r =
      s[6](Oe.NewDeviceLoginDesc, {
        Email: `<span class="fw3 BLUE">${s[2]}</span>`,
      }) + "",
    o,
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A;
  const D = s[12].sourceSite,
    L = lt(D, s, s[17], ds);
  function O(N, V) {
    return N[5] > 0 ? Tr : Ir;
  }
  let P = O(s),
    R = P(s),
    G = s[1] === !0 && hs(s);
  return (
    (T = new ft({
      props: {
        loading: s[0],
        disabled: Ar,
        class: "mt32 wp100",
        type: "primary",
        newRadius: !0,
        $$slots: { default: [Cr] },
        $$scope: { ctx: s },
      },
    })),
    T.$on("click", s[7]),
    {
      c() {
        (e = b("div")),
          (t = b("h1")),
          (n = H(l)),
          (a = U()),
          (i = b("span")),
          (o = U()),
          L && L.c(),
          (c = U()),
          (u = b("div")),
          (m = b("i")),
          (_ = H("")),
          (v = U()),
          (p = b("input")),
          (g = U()),
          R.c(),
          (k = U()),
          G && G.c(),
          (I = U()),
          j(T.$$.fragment),
          this.h();
      },
      l(N) {
        e = E(N, "DIV", { class: !0 });
        var V = w(e);
        t = E(V, "H1", {});
        var Y = w(t);
        (n = F(Y, l)),
          Y.forEach(h),
          (a = M(V)),
          (i = E(V, "SPAN", { class: !0 }));
        var z = w(i);
        z.forEach(h),
          (o = M(V)),
          L && L.l(V),
          (c = M(V)),
          (u = E(V, "DIV", { class: !0 }));
        var x = w(u);
        m = E(x, "I", { class: !0 });
        var ne = w(m);
        (_ = F(ne, "")),
          ne.forEach(h),
          (v = M(x)),
          (p = E(x, "INPUT", { class: !0, type: !0, placeholder: !0 })),
          (g = M(x)),
          R.l(x),
          x.forEach(h),
          (k = M(V)),
          G && G.l(V),
          (I = M(V)),
          K(T.$$.fragment, V),
          V.forEach(h),
          this.h();
      },
      h() {
        f(i, "class", "T3"),
          f(m, "class", "iconfont f18 light-gray svelte-1wb91kv"),
          f(p, "class", "autofill ml12 ipt f1 svelte-1wb91kv"),
          f(p, "type", "text"),
          f(p, "placeholder", s[6](Oe.NewDeviceCode)),
          f(u, "class", "input-wrap df aic mt24 ph16 svelte-1wb91kv"),
          f(e, "class", "content");
      },
      m(N, V) {
        B(N, e, V),
          d(e, t),
          d(t, n),
          d(e, a),
          d(e, i),
          (i.innerHTML = r),
          d(e, o),
          L && L.m(e, null),
          d(e, c),
          d(e, u),
          d(u, m),
          d(m, _),
          d(u, v),
          d(u, p),
          ze(p, s[4]),
          d(u, g),
          R.m(u, null),
          d(e, k),
          G && G.m(e, null),
          d(e, I),
          q(T, e, null),
          (S = !0),
          C ||
            ((A = [ee(p, "input", s[15]), ee(p, "keypress", s[14])]), (C = !0));
      },
      p(N, [V]) {
        (!S || V & 4) &&
          r !==
            (r =
              N[6](Oe.NewDeviceLoginDesc, {
                Email: `<span class="fw3 BLUE">${N[2]}</span>`,
              }) + "") &&
          (i.innerHTML = r),
          L &&
            L.p &&
            (!S || V & 131072) &&
            st(L, D, N, N[17], S ? at(D, N[17], V, kr) : nt(N[17]), ds),
          V & 16 && p.value !== N[4] && ze(p, N[4]),
          P === (P = O(N)) && R
            ? R.p(N, V)
            : (R.d(1), (R = P(N)), R && (R.c(), R.m(u, null))),
          N[1] === !0
            ? G
              ? G.p(N, V)
              : ((G = hs(N)), G.c(), G.m(e, I))
            : G && (G.d(1), (G = null));
        const Y = {};
        V & 1 && (Y.loading = N[0]),
          V & 131072 && (Y.$$scope = { dirty: V, ctx: N }),
          T.$set(Y);
      },
      i(N) {
        S || ($(L, N), $(T.$$.fragment, N), (S = !0));
      },
      o(N) {
        y(L, N), y(T.$$.fragment, N), (S = !1);
      },
      d(N) {
        N && h(e), L && L.d(N), R.d(), G && G.d(), X(T), (C = !1), xe(A);
      },
    }
  );
}
let Ar = !1;
function Sr(s, e, t) {
  let l;
  ge(s, We, (O) => t(19, (l = O)));
  let { $$slots: n = {}, $$scope: a } = e,
    { onSubmit: i } = e,
    { loading: r = !1 } = e,
    { isNeed2FA: o = !1 } = e,
    { email: c = "" } = e,
    { dataCode: u = "" } = e;
  const m = je("LG");
  let _ = 0,
    v = "",
    p = "",
    g;
  Be(I);
  function k() {
    i(v.trim(), p.trim());
  }
  function I() {
    return (
      t(5, (_ = 60)),
      clearInterval(g),
      (g = setInterval(() => {
        t(5, _--, _), _ <= 0 && clearInterval(g);
      }, 1e3)),
      function () {
        clearInterval(g);
      }
    );
  }
  async function T() {
    I();
    const O = await kt("login"),
      P = { type: "new_device_login_verify", email: c, ...O },
      R = { email: c },
      { data: G, error: N } = await Ve.publicCodesMailPost(P, R);
    G && Re.send("toast", "info", { message: m(Oe.VerificationReSend) }),
      N && Re.send("toast", "error", N);
  }
  function S() {
    El.set({ email: c, code: u }),
      wl.next({
        balanceType: 0,
        resetRecordId: 0,
        resetRecordStatus: 0,
        remain_count: 0,
        code: 0,
        answerStatus: 0,
      }),
      _t(l(W.RESET_SECURITY.pathname));
  }
  function C(O) {
    Dt.call(this, s, O);
  }
  function A(O) {
    Dt.call(this, s, O);
  }
  function D() {
    (p = this.value), t(4, p);
  }
  function L() {
    (v = this.value), t(3, v);
  }
  return (
    (s.$$set = (O) => {
      "onSubmit" in O && t(10, (i = O.onSubmit)),
        "loading" in O && t(0, (r = O.loading)),
        "isNeed2FA" in O && t(1, (o = O.isNeed2FA)),
        "email" in O && t(2, (c = O.email)),
        "dataCode" in O && t(11, (u = O.dataCode)),
        "$$scope" in O && t(17, (a = O.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 27;
    }),
    [r, o, c, v, p, _, m, k, T, S, i, u, n, C, A, D, L, a]
  );
}
class Ea extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Sr, Dr, Ce, {
        onSubmit: 10,
        loading: 0,
        isNeed2FA: 1,
        email: 2,
        dataCode: 11,
      });
  }
}
function Pr(s) {
  let e = s[0](Oe.TryAgain) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](Oe.TryAgain) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Lr(s) {
  let e = s[0](Oe.LoginWithPwd) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](Oe.LoginWithPwd) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Rr(s) {
  let e,
    t,
    l = s[0](Oe.PasskeyFailed) + "",
    n,
    a,
    i,
    r,
    o,
    c,
    u,
    m,
    _ = s[0](Oe.PasskeyFailedDesc) + "",
    v,
    p,
    g,
    k,
    I,
    T,
    S,
    C;
  return (
    (k = new ft({
      props: {
        type: "primary",
        class: "ffy enable-btn mt12",
        newRadius: !0,
        $$slots: { default: [Pr] },
        $$scope: { ctx: s },
      },
    })),
    k.$on("click", s[2]),
    (S = new ft({
      props: {
        class: "ffy enable-btn T1 mt12",
        newRadius: !0,
        $$slots: { default: [Lr] },
        $$scope: { ctx: s },
      },
    })),
    S.$on("click", s[3]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (n = H(l)),
          (a = U()),
          (i = b("div")),
          (r = b("span")),
          (o = b("img")),
          (u = U()),
          (m = b("div")),
          (v = H(_)),
          (p = U()),
          (g = b("div")),
          j(k.$$.fragment),
          (I = U()),
          (T = b("div")),
          j(S.$$.fragment),
          this.h();
      },
      l(A) {
        e = E(A, "DIV", { class: !0 });
        var D = w(e);
        t = E(D, "DIV", { class: !0 });
        var L = w(t);
        (n = F(L, l)),
          L.forEach(h),
          (a = M(D)),
          (i = E(D, "DIV", { class: !0 }));
        var O = w(i);
        r = E(O, "SPAN", { class: !0 });
        var P = w(r);
        (o = E(P, "IMG", { src: !0, class: !0 })),
          P.forEach(h),
          O.forEach(h),
          (u = M(D)),
          (m = E(D, "DIV", { class: !0 }));
        var R = w(m);
        (v = F(R, _)), R.forEach(h), (p = M(D)), (g = E(D, "DIV", {}));
        var G = w(g);
        K(k.$$.fragment, G), G.forEach(h), (I = M(D)), (T = E(D, "DIV", {}));
        var N = w(T);
        K(S.$$.fragment, N), N.forEach(h), D.forEach(h), this.h();
      },
      h() {
        f(t, "class", "ffy T1 f24 fw3 svelte-1c80xct"),
          Se(o.src, (c = s[1].verifyIdentity)) || f(o, "src", c),
          f(o, "class", "svelte-1c80xct"),
          f(r, "class", "banner svelte-1c80xct"),
          f(i, "class", "tc mt24"),
          f(m, "class", "ffy T1 f14 fw1 pv24 svelte-1c80xct"),
          f(e, "class", "enable-wrap svelte-1c80xct");
      },
      m(A, D) {
        B(A, e, D),
          d(e, t),
          d(t, n),
          d(e, a),
          d(e, i),
          d(i, r),
          d(r, o),
          d(e, u),
          d(e, m),
          d(m, v),
          d(e, p),
          d(e, g),
          q(k, g, null),
          d(e, I),
          d(e, T),
          q(S, T, null),
          (C = !0);
      },
      p(A, D) {
        (!C || D & 1) && l !== (l = A[0](Oe.PasskeyFailed) + "") && te(n, l),
          (!C || D & 1) &&
            _ !== (_ = A[0](Oe.PasskeyFailedDesc) + "") &&
            te(v, _);
        const L = {};
        D & 257 && (L.$$scope = { dirty: D, ctx: A }), k.$set(L);
        const O = {};
        D & 257 && (O.$$scope = { dirty: D, ctx: A }), S.$set(O);
      },
      i(A) {
        C || ($(k.$$.fragment, A), $(S.$$.fragment, A), (C = !0));
      },
      o(A) {
        y(k.$$.fragment, A), y(S.$$.fragment, A), (C = !1);
      },
      d(A) {
        A && h(e), X(k), X(S);
      },
    }
  );
}
function Or(s) {
  let e, t, l;
  return (
    (t = new pl({
      props: {
        class: "enable-modal",
        showCloseIcon: !0,
        visible: !0,
        style: "width: 480px;",
        $$slots: { default: [Rr] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("close", s[4]),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "wrap-pk svelte-1c80xct");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, [a]) {
        const i = {};
        a & 257 && (i.$$scope = { dirty: a, ctx: n }), t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function Nr(s, e, t) {
  const l = `${ut.IMG_URL}/v1`;
  let { LG: n = null } = e;
  const a = Qe(),
    i = {
      verifyIdentity: `${l}/510c30a1-c6c4-4282-95dc-38a14dfba98f/passkey-failed.png`,
    };
  n || je("LG");
  function r() {
    a("success", { type: "once" });
  }
  function o() {
    a("success", { type: "pwd" });
  }
  function c() {
    a("close", null);
  }
  return (
    (s.$$set = (u) => {
      "LG" in u && t(0, (n = u.LG));
    }),
    [n, i, r, o, c]
  );
}
class Vr extends Ie {
  constructor(e) {
    super(), Te(this, e, Nr, Or, Ce, { LG: 0 });
  }
}
function ms(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[5](Oe.PasskeyTitle) + "",
    c,
    u,
    m,
    _ = s[5](Oe.PasskeyDesc) + "",
    v;
  return {
    c() {
      (e = b("div")),
        (t = b("span")),
        (l = b("img")),
        (a = U()),
        (i = b("div")),
        (r = b("div")),
        (c = H(o)),
        (u = U()),
        (m = b("div")),
        (v = H(_)),
        this.h();
    },
    l(p) {
      e = E(p, "DIV", { class: !0 });
      var g = w(e);
      t = E(g, "SPAN", { class: !0 });
      var k = w(t);
      (l = E(k, "IMG", { width: !0, height: !0, src: !0 })),
        k.forEach(h),
        (a = M(g)),
        (i = E(g, "DIV", {}));
      var I = w(i);
      r = E(I, "DIV", { class: !0 });
      var T = w(r);
      (c = F(T, o)), T.forEach(h), (u = M(I)), (m = E(I, "DIV", { class: !0 }));
      var S = w(m);
      (v = F(S, _)), S.forEach(h), I.forEach(h), g.forEach(h), this.h();
    },
    h() {
      f(l, "width", "36"),
        f(l, "height", "36"),
        Se(l.src, (n = s[6])) || f(l, "src", n),
        f(t, "class", "mr4"),
        f(r, "class", "f14 fw3 lh20 T1"),
        f(m, "class", "f12 fw1 lh18 mt4 T2"),
        f(e, "class", "df aic passkey br8 mt20 svelte-1w5e7k7");
    },
    m(p, g) {
      B(p, e, g),
        d(e, t),
        d(t, l),
        d(e, a),
        d(e, i),
        d(i, r),
        d(r, c),
        d(i, u),
        d(i, m),
        d(m, v);
    },
    p: me,
    d(p) {
      p && h(e);
    },
  };
}
function Ur(s) {
  let e = s[5](s[0] ? Oe.Initializing : Oe.PasskeyNext) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 &&
        e !== (e = l[5](l[0] ? Oe.Initializing : Oe.PasskeyNext) + "") &&
        te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Mr(s) {
  let e,
    t,
    l,
    n,
    a,
    i = s[3] && ms(s);
  return (
    (n = new ft({
      props: {
        class: "home-login-confirm f16 fw3",
        type: "primary",
        newRadius: !0,
        minWidth: "100%",
        loading: s[1],
        disabled: s[0] || s[2] || s[4],
        $$slots: { default: [Ur] },
        $$scope: { ctx: s },
      },
    })),
    n.$on("click", s[7]),
    {
      c() {
        (e = b("div")),
          i && i.c(),
          (t = U()),
          (l = b("div")),
          j(n.$$.fragment),
          this.h();
      },
      l(r) {
        e = E(r, "DIV", {});
        var o = w(e);
        i && i.l(o), (t = M(o)), (l = E(o, "DIV", { class: !0 }));
        var c = w(l);
        K(n.$$.fragment, c), c.forEach(h), o.forEach(h), this.h();
      },
      h() {
        f(l, "class", "btn svelte-1w5e7k7");
      },
      m(r, o) {
        B(r, e, o),
          i && i.m(e, null),
          d(e, t),
          d(e, l),
          q(n, l, null),
          (a = !0);
      },
      p(r, [o]) {
        r[3]
          ? i
            ? i.p(r, o)
            : ((i = ms(r)), i.c(), i.m(e, t))
          : i && (i.d(1), (i = null));
        const c = {};
        o & 2 && (c.loading = r[1]),
          o & 21 && (c.disabled = r[0] || r[2] || r[4]),
          o & 32769 && (c.$$scope = { dirty: o, ctx: r }),
          n.$set(c);
      },
      i(r) {
        a || ($(n.$$.fragment, r), (a = !0));
      },
      o(r) {
        y(n.$$.fragment, r), (a = !1);
      },
      d(r) {
        r && h(e), i && i.d(), X(n);
      },
    }
  );
}
function $r(s, e, t) {
  let l, n;
  ge(s, We, (T) => t(12, (l = T))), ge(s, Xn, (T) => t(4, (n = T)));
  let { email: a } = e,
    { isInitializing: i = !0 } = e,
    { isLoading: r = !1 } = e,
    { hasErrorMsg: o = !1 } = e,
    { target: c } = e,
    { onStatusChange: u } = e;
  const m = je("LG"),
    _ = `${ut.IMG_URL}/v1/081e54cb-8dd3-4a75-8a76-1d229f0ddb46/login-passkey.png`;
  let v = 0,
    p = !1;
  Be(() => {
    Kn.subscribe((T) => {
      T.event && k();
    });
  });
  function g(T) {
    const { isShowPasskeyDesc: S, ...C } = T;
    ml(S) || t(3, (p = S)), u == null || u(C);
  }
  async function k() {
    if (
      (Ke.track("launch_passkey_login", { ui_position: "login_page" }), a && !o)
    ) {
      g({ isLoading: !0 });
      const T = Ya(c) ? c : l(W.ACCOUNT_OVERVIEW.pathname);
      Ha({ email: a, pathName: T, LG: m, onStatusReset: g, onShowDialog: I });
    }
  }
  function I() {
    if (v >= 3) {
      g({ isLoading: !1, isShowPasskeyDesc: !1, isOpenPasskey: !1 });
      return;
    }
    const T = ot.create(Vr, { LG: m });
    return new Promise((S) => {
      T.$on("success", function (C) {
        T.$destroy(), S(C.detail);
        const { type: A } = C.detail;
        if (A === "once") {
          v++, k();
          return;
        }
        g({ isLoading: !1, isShowPasskeyDesc: !1, isOpenPasskey: !1 });
      }),
        T.$on("close", function () {
          g({ isLoading: !1, isShowPasskeyDesc: !1 }), S(null);
        });
    });
  }
  return (
    (s.$$set = (T) => {
      "email" in T && t(8, (a = T.email)),
        "isInitializing" in T && t(0, (i = T.isInitializing)),
        "isLoading" in T && t(1, (r = T.isLoading)),
        "hasErrorMsg" in T && t(2, (o = T.hasErrorMsg)),
        "target" in T && t(9, (c = T.target)),
        "onStatusChange" in T && t(10, (u = T.onStatusChange));
    }),
    [i, r, o, p, n, m, _, k, a, c, u]
  );
}
class Gr extends Ie {
  constructor(e) {
    super(),
      Te(this, e, $r, Mr, Ce, {
        email: 8,
        isInitializing: 0,
        isLoading: 1,
        hasErrorMsg: 2,
        target: 9,
        onStatusChange: 10,
      });
  }
}
const Br = (s) => ({}),
  _s = (s) => ({});
function yr(s) {
  let e;
  const t = s[3].rolling,
    l = lt(t, s, s[2], _s);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 4) &&
        st(l, t, n, n[2], e ? at(t, n[2], a, Br) : nt(n[2]), _s);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function Wr(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p: me,
    i: me,
    o: me,
    d(l) {
      l && h(e);
    },
  };
}
function Yr(s) {
  let e, t, l, n, a;
  const i = [Wr, yr],
    r = [];
  function o(c, u) {
    return c[1] ? 0 : 1;
  }
  return (
    (l = o(s)),
    (n = r[l] = i[l](s)),
    {
      c() {
        (e = b("div")), (t = b("div")), n.c(), this.h();
      },
      l(c) {
        e = E(c, "DIV", { class: !0, style: !0 });
        var u = w(e);
        t = E(u, "DIV", { class: !0 });
        var m = w(t);
        n.l(m), m.forEach(h), u.forEach(h), this.h();
      },
      h() {
        f(t, "class", "spin-dot df aic svelte-1xd48um"),
          Z(t, "ani", s[1]),
          f(e, "class", "loading-wrap pa df aic jcsb br12 svelte-1xd48um"),
          f(e, "style", s[0]);
      },
      m(c, u) {
        B(c, e, u), d(e, t), r[l].m(t, null), (a = !0);
      },
      p(c, [u]) {
        let m = l;
        (l = o(c)),
          l === m
            ? r[l].p(c, u)
            : (Ue(),
              y(r[m], 1, 1, () => {
                r[m] = null;
              }),
              Me(),
              (n = r[l]),
              n ? n.p(c, u) : ((n = r[l] = i[l](c)), n.c()),
              $(n, 1),
              n.m(t, null)),
          (!a || u & 2) && Z(t, "ani", c[1]),
          (!a || u & 1) && f(e, "style", c[0]);
      },
      i(c) {
        a || ($(n), (a = !0));
      },
      o(c) {
        y(n), (a = !1);
      },
      d(c) {
        c && h(e), r[l].d();
      },
    }
  );
}
function Hr(s, e, t) {
  let l,
    { $$slots: n = {}, $$scope: a } = e;
  const i = Al(n);
  let { style: r = "background: #fff; opacity: 0.5;" } = e;
  return (
    (s.$$set = (o) => {
      "style" in o && t(0, (r = o.style)),
        "$$scope" in o && t(2, (a = o.$$scope));
    }),
    t(1, (l = !!i.default)),
    [r, l, a, n]
  );
}
class Fr extends Ie {
  constructor(e) {
    super(), Te(this, e, Hr, Yr, Ce, { style: 0 });
  }
}
var dt = ((s) => (
  (s.NEW = "NEW"),
  (s.SCAN = "SCAN"),
  (s.CONFIRM = "CONFIRM"),
  (s.EXPIRED = "EXPIRED"),
  s
))(dt || {});
async function zr(s) {
  const e = await kt("login");
  if (!e) {
    Re.send("toast", "error", { message: s(Oe.NetworkError) });
    return;
  }
  const { data: t, error: l } = await Ve.getLoginQrcode(e);
  if (t) return t;
  l && Re.send("toast", "error", l);
}
async function jr(s) {
  const { data: e, error: t } = await Ve.checkLoginQrStatus(s);
  if (e) return e;
  t && Re.send("toast", "error", t);
}
async function qr(s, e) {
  const { data: t, error: l } = await Ve.confirmLoginQr(s, e);
  if (t) return t;
  l && Re.send("toast", "error", l);
}
function Xr(s, e) {
  s &&
    Qn.toDataURL(s).then((t) => {
      e == null || e(t);
    });
}
function gs(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A =
      s[7](Oe.QrTips, {
        phemexApp: `<a href=${s[5]}>${s[7](Oe.PhemexAPP)}</a>`,
      }) + "",
    D,
    L = s[6] && ps(s),
    O = s[1] === dt.EXPIRED && vs(s),
    P = (s[1] === dt.SCAN || s[1] === dt.CONFIRM) && bs(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("div")),
        (a = b("span")),
        (i = b("img")),
        (o = U()),
        (c = b("span")),
        (u = b("img")),
        (_ = U()),
        L && L.c(),
        (v = U()),
        O && O.c(),
        (p = U()),
        P && P.c(),
        (g = U()),
        (k = b("span")),
        (I = b("img")),
        (S = U()),
        (C = b("div")),
        this.h();
    },
    l(R) {
      e = E(R, "DIV", { class: !0 });
      var G = w(e);
      t = E(G, "DIV", { class: !0 });
      var N = w(t);
      l = E(N, "DIV", { class: !0 });
      var V = w(l);
      n = E(V, "DIV", { class: !0 });
      var Y = w(n);
      a = E(Y, "SPAN", { class: !0 });
      var z = w(a);
      (i = E(z, "IMG", { src: !0, alt: !0, class: !0 })),
        (o = M(z)),
        (c = E(z, "SPAN", { class: !0 }));
      var x = w(c);
      (u = E(x, "IMG", { src: !0, alt: !0, class: !0 })),
        x.forEach(h),
        (_ = M(z)),
        L && L.l(z),
        (v = M(z)),
        O && O.l(z),
        (p = M(z)),
        P && P.l(z),
        z.forEach(h),
        (g = M(Y)),
        (k = E(Y, "SPAN", { class: !0, style: !0 }));
      var ne = w(k);
      (I = E(ne, "IMG", { src: !0, alt: !0, class: !0 })),
        ne.forEach(h),
        Y.forEach(h),
        (S = M(V)),
        (C = E(V, "DIV", { class: !0 }));
      var ie = w(C);
      ie.forEach(h), V.forEach(h), N.forEach(h), G.forEach(h), this.h();
    },
    h() {
      Se(i.src, (r = s[0])) || f(i, "src", r),
        f(i, "alt", "qr"),
        f(i, "class", "svelte-dvtb17"),
        Se(u.src, (m = s[12])) || f(u, "src", m),
        f(u, "alt", "qr"),
        f(u, "class", "svelte-dvtb17"),
        f(c, "class", "logo-qr img-wrap pa svelte-dvtb17"),
        f(a, "class", "qr-img img-wrap pr svelte-dvtb17"),
        Se(I.src, (T = s[8])) || f(I, "src", T),
        f(I, "alt", "qr"),
        f(I, "class", "svelte-dvtb17"),
        f(k, "class", "qr-img img-wrap svelte-dvtb17"),
        Je(k, "width", "200px"),
        Je(k, "border-radius", "12px 12px 0 0"),
        f(n, "class", "df aic jcsb mb20"),
        f(C, "class", "f14 fw1 lh18 T1"),
        f(l, "class", "qr pr tc pv20 ph20 br12 mt8 svelte-dvtb17"),
        f(t, "class", "pa qr-layer svelte-dvtb17"),
        f(e, "class", "pr");
    },
    m(R, G) {
      B(R, e, G),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(a, i),
        d(a, o),
        d(a, c),
        d(c, u),
        d(a, _),
        L && L.m(a, null),
        d(a, v),
        O && O.m(a, null),
        d(a, p),
        P && P.m(a, null),
        d(n, g),
        d(n, k),
        d(k, I),
        d(l, S),
        d(l, C),
        (C.innerHTML = A),
        s[18](e),
        (D = !0);
    },
    p(R, G) {
      (!D || (G & 1 && !Se(i.src, (r = R[0])))) && f(i, "src", r),
        R[6]
          ? L
            ? (L.p(R, G), G & 64 && $(L, 1))
            : ((L = ps(R)), L.c(), $(L, 1), L.m(a, v))
          : L &&
            (Ue(),
            y(L, 1, 1, () => {
              L = null;
            }),
            Me()),
        R[1] === dt.EXPIRED
          ? O
            ? O.p(R, G)
            : ((O = vs(R)), O.c(), O.m(a, p))
          : O && (O.d(1), (O = null)),
        R[1] === dt.SCAN || R[1] === dt.CONFIRM
          ? P
            ? P.p(R, G)
            : ((P = bs(R)), P.c(), P.m(a, null))
          : P && (P.d(1), (P = null)),
        (!D || G & 32) &&
          A !==
            (A =
              R[7](Oe.QrTips, {
                phemexApp: `<a href=${R[5]}>${R[7](Oe.PhemexAPP)}</a>`,
              }) + "") &&
          (C.innerHTML = A);
    },
    i(R) {
      D || ($(L), (D = !0));
    },
    o(R) {
      y(L), (D = !1);
    },
    d(R) {
      R && h(e), L && L.d(), O && O.d(), P && P.d(), s[18](null);
    },
  };
}
function ps(s) {
  let e, t;
  return (
    (e = new Fr({
      props: {
        style: "background:#fff;opacity:0.9;",
        $$slots: { rolling: [Kr] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 33554432 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Kr(s) {
  let e, t, l;
  return {
    c() {
      (e = b("span")), (t = b("img")), this.h();
    },
    l(n) {
      e = E(n, "SPAN", { slot: !0, class: !0 });
      var a = w(e);
      (t = E(a, "IMG", { src: !0, alt: !0, class: !0 })),
        a.forEach(h),
        this.h();
    },
    h() {
      Se(t.src, (l = s[13])) || f(t, "src", l),
        f(t, "alt", "qr"),
        f(t, "class", "svelte-dvtb17"),
        f(e, "slot", "rolling"),
        f(e, "class", "loading svelte-dvtb17");
    },
    m(n, a) {
      B(n, e, a), d(e, t);
    },
    p: me,
    d(n) {
      n && h(e);
    },
  };
}
function vs(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[7](Oe.QrRefresh) + "",
    o,
    c,
    u,
    m = s[7](Oe.QrExpired) + "",
    _,
    v,
    p;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("span")),
        (n = b("span")),
        (a = b("img")),
        (o = H(r)),
        (c = U()),
        (u = b("span")),
        (_ = H(m)),
        this.h();
    },
    l(g) {
      e = E(g, "DIV", { class: !0 });
      var k = w(e);
      t = E(k, "DIV", { class: !0 });
      var I = w(t);
      l = E(I, "SPAN", { class: !0 });
      var T = w(l);
      n = E(T, "SPAN", { class: !0 });
      var S = w(n);
      (a = E(S, "IMG", { src: !0, alt: !0, class: !0 })),
        S.forEach(h),
        (o = F(T, r)),
        T.forEach(h),
        (c = M(I)),
        (u = E(I, "SPAN", { class: !0 }));
      var C = w(u);
      (_ = F(C, m)), C.forEach(h), I.forEach(h), k.forEach(h), this.h();
    },
    h() {
      Se(a.src, (i = s[9])) || f(a, "src", i),
        f(a, "alt", "qr"),
        f(a, "class", "svelte-dvtb17"),
        f(n, "class", "mr8 img-wrap svelte-dvtb17"),
        f(l, "class", "fresh-btn df aic jcc br8 cp f16 lh20 TW svelte-dvtb17"),
        f(u, "class", "mt12 f16 fw2 lh22 T1"),
        f(t, "class", "df fdc aic jcc wp100 svelte-dvtb17"),
        f(e, "class", "qr-fresh pa tc svelte-dvtb17");
    },
    m(g, k) {
      B(g, e, k),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(l, o),
        d(t, c),
        d(t, u),
        d(u, _),
        v || ((p = ee(l, "click", s[15])), (v = !0));
    },
    p: me,
    d(g) {
      g && h(e), (v = !1), p();
    },
  };
}
function bs(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = (s[1] === dt.SCAN ? s[7](Oe.QrConfirm) : s[7](Oe.QrLogin)) + "",
    c;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("span")),
        (n = b("img")),
        (i = U()),
        (r = b("span")),
        (c = H(o)),
        this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var m = w(e);
      t = E(m, "DIV", { class: !0 });
      var _ = w(t);
      l = E(_, "SPAN", { class: !0 });
      var v = w(l);
      (n = E(v, "IMG", { src: !0, alt: !0, class: !0 })),
        v.forEach(h),
        (i = M(_)),
        (r = E(_, "SPAN", { class: !0 }));
      var p = w(r);
      (c = F(p, o)), p.forEach(h), _.forEach(h), m.forEach(h), this.h();
    },
    h() {
      Se(n.src, (a = s[10])) || f(n, "src", a),
        f(n, "alt", "qr"),
        f(n, "class", "svelte-dvtb17"),
        f(l, "class", "complete img-wrap svelte-dvtb17"),
        f(r, "class", "mt12 f16 fw2 lh22 T1"),
        f(t, "class", "df fdc aic jcc wp100 svelte-dvtb17"),
        f(e, "class", "qr-fresh pa tc svelte-dvtb17");
    },
    m(u, m) {
      B(u, e, m), d(e, t), d(t, l), d(l, n), d(t, i), d(t, r), d(r, c);
    },
    p(u, m) {
      m & 2 &&
        o !==
          (o =
            (u[1] === dt.SCAN ? u[7](Oe.QrConfirm) : u[7](Oe.QrLogin)) + "") &&
        te(c, o);
    },
    d(u) {
      u && h(e);
    },
  };
}
function Qr(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c = s[4] && gs(s);
  return {
    c() {
      (e = b("div")),
        (t = b("span")),
        (l = b("img")),
        (a = U()),
        c && c.c(),
        this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var m = w(e);
      t = E(m, "SPAN", { class: !0 });
      var _ = w(t);
      (l = E(_, "IMG", { src: !0, alt: !0, class: !0 })),
        _.forEach(h),
        (a = M(m)),
        c && c.l(m),
        m.forEach(h),
        this.h();
    },
    h() {
      Se(l.src, (n = s[11])) || f(l, "src", n),
        f(l, "alt", "qr"),
        f(l, "class", "svelte-dvtb17"),
        f(t, "class", "qr-icon img-wrap br4 cp svelte-dvtb17"),
        f(e, "class", "qr-wrap svelte-dvtb17");
    },
    m(u, m) {
      B(u, e, m),
        d(e, t),
        d(t, l),
        s[17](t),
        d(e, a),
        c && c.m(e, null),
        (i = !0),
        r || ((o = ee(t, "click", s[14])), (r = !0));
    },
    p(u, [m]) {
      u[4]
        ? c
          ? (c.p(u, m), m & 16 && $(c, 1))
          : ((c = gs(u)), c.c(), $(c, 1), c.m(e, null))
        : c &&
          (Ue(),
          y(c, 1, 1, () => {
            c = null;
          }),
          Me());
    },
    i(u) {
      i || ($(c), (i = !0));
    },
    o(u) {
      y(c), (i = !1);
    },
    d(u) {
      u && h(e), s[17](null), c && c.d(), (r = !1), o();
    },
  };
}
let Jr = 4e3;
function Zr(s, e, t) {
  let { target: l } = e,
    n = `${ut.IMG_URL}/v1/79222719-648a-49c2-92aa-b97242819f61/mask-qr.png`,
    a = "",
    i,
    r,
    o,
    c = !1,
    u,
    m = !1;
  const _ = je("LG"),
    v = `${ut.IMG_URL}/v1/aa673150-1802-467a-8e0b-39d9dc64aa62/qr-right.png`,
    p = `${ut.IMG_URL}/v1/9e9b045a-4ac0-4baa-ad60-eb965c4bc7c8/refresh.png`,
    g = `${ut.IMG_URL}/v1/356c2021-3b52-4870-a555-80535db17530/complete.png`,
    k = `${ut.IMG_URL}/v1/120b4ae7-e90d-4b1c-b521-61dea61b1c50/qr.png`,
    I = `${ut.IMG_URL}/v1/e5a70d46-90a4-4ad5-b5de-dc3cc8aeb00e/logo-qr.svg`,
    T = `${ut.IMG_URL}/v1/2ef44f77-59f8-43fd-8ac8-535b2fb7a308/rolling.gif`;
  Be(async () => {
    t(5, (u = window.location.origin + W.DOWNLOAD.pathname));
  }),
    oa(() => {
      window.removeEventListener("click", D);
    });
  function S(N) {
    i = setTimeout(async () => {
      const V = await jr({ qrcode: N });
      (V == null ? void 0 : V.status) === dt.EXPIRED ||
      (V == null ? void 0 : V.status) === dt.CONFIRM
        ? (t(1, (a = V == null ? void 0 : V.status)),
          clearTimeout(i),
          await C(V == null ? void 0 : V.status, N))
        : ((V == null ? void 0 : V.status) === dt.SCAN && t(1, (a = dt.SCAN)),
          clearTimeout(i),
          S(N));
    }, Jr);
  }
  async function C(N, V) {
    if (N === dt.CONFIRM) {
      const Y = await qr({ qrcode: V }, _);
      if (Y) {
        const z = Y.lang;
        z && Jn(Zn[z] || z),
          Re.send("toast", "info", { message: _(Oe.LoggedIn) }),
          setTimeout(() => {
            window.removeEventListener("click", D), window.location.assign(l);
          }, 1e3);
      }
    }
  }
  function A() {
    window.removeEventListener("click", D, !0),
      window.addEventListener("click", D, !0);
  }
  function D(N) {
    (o && (o === N.target || o.contains(N.target))) ||
      (r &&
        !r.contains(N.target) &&
        c &&
        (i && clearTimeout(i), P == null || P()));
  }
  async function L() {
    if ((i && clearTimeout(i), c)) {
      P();
      return;
    }
    await O();
  }
  async function O() {
    t(4, (c = !0)), A(), t(1, (a = null)), t(6, (m = !0));
    const N = await zr(_);
    if (N) {
      const V = JSON.stringify(N);
      Xr(V, (Y) => {
        t(0, (n = Y)), t(6, (m = !1));
      }),
        S(N.qrcode);
    }
  }
  function P() {
    t(4, (c = !1)), t(1, (a = "")), window.removeEventListener("click", D, !0);
  }
  function R(N) {
    gt[N ? "unshift" : "push"](() => {
      (o = N), t(3, o);
    });
  }
  function G(N) {
    gt[N ? "unshift" : "push"](() => {
      (r = N), t(2, r);
    });
  }
  return (
    (s.$$set = (N) => {
      "target" in N && t(16, (l = N.target));
    }),
    [n, a, r, o, c, u, m, _, v, p, g, k, I, T, L, O, l, R, G]
  );
}
class xr extends Ie {
  constructor(e) {
    super(), Te(this, e, Zr, Qr, Ce, { target: 16 });
  }
}
function eo(s) {
  let e, t, l, n, a;
  return {
    c() {
      (e = b("div")), (t = b("div")), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      (t = E(r, "DIV", { class: !0 })), w(t).forEach(h), r.forEach(h), this.h();
    },
    h() {
      f(t, "class", "key-mask svelte-14ryahk"),
        f(e, "class", "wrap-mask svelte-14ryahk");
    },
    m(i, r) {
      B(i, e, r), d(e, t), (a = !0);
    },
    p: me,
    i(i) {
      a ||
        (ht(() => {
          n && n.end(1), (l = Tl(t, tl, { duration: 100 })), l.start();
        }),
        (a = !0));
    },
    o(i) {
      l && l.invalidate(), (n = Cl(t, tl, { duration: 100 })), (a = !1);
    },
    d(i) {
      i && h(e), i && n && n.end();
    },
  };
}
class to extends Ie {
  constructor(e) {
    super(), Te(this, e, null, eo, Ce, {});
  }
}
const se = {
  Title: "6ddc94",
  Description: "b2f353",
  AsFeaturedOn: "599dc9",
  TheFastestCrypto: "3d880b",
  AverageTradingVolume: "54a413",
  CreateAnAccount: "fb7a85",
  JoinPhemexNow: "475da7",
  ItOnlyTakes: "5531a0",
  Email: "fd1d5a",
  Password: "ce652d",
  IndividualCode: "1b670f",
  Continue: "0eacf6",
  AlreadyHaveAnAccount: "3e3667",
  LogIn: "5186aa",
  TradeNow: "38f3b0",
  YouAreCurrnetly: "b240b9",
  PhemexAndCompetitors: "a3338d",
  InOrderTo: "26094b",
  Leverage: "21ec1c",
  Margin: "3c9fab",
  CrossMargin: "493fcb",
  TpAndSlFunction: "e0260d",
  DepositOptions: "6633cb",
  TradingFees: "6ce68c",
  NativeMobileApp: "0463d2",
  CreateAnAccountNow: "43e5e9",
  PremiumTrial: "d970bf",
  ContractTakerFee: "ffac0f",
  WelcomeBonus: "d3f955",
  Create: "34cd03",
  Back: "0537e5",
  EmailVerification: "d7d252",
  MakeSure: "ef6efb",
  SendAgain: "02b11e",
  GoogleVerification: "ded8f0",
  PleaseEnterGoogle: "05a94f",
  ResetPassword: "4d02cf",
  DontHaveAnAccount: "290804",
  EnterYourDetailsBelow: "a26bf4",
  PlatformAdvantage: "0a74ff",
  SupportBuyingCrypto: "a0ff2c",
  BuyBitcoinWith: "324d1f",
  Bitcoin: "a4cb6d",
  OtherCoin: "a424f2",
  OtherCryptos: "1cf7e7",
  ZeroFees: "ca9d32",
  Leverage100X: "aa5119",
  TradeCryptoWith: "267508",
  WeAreThe: "e2f6a5",
  NoKYC: "a0e866",
  YouCanTrade: "b46a9c",
  SignUp: "81f3f2",
  WhyPhemex: "4a2a29",
  HighPerformance: "aedc07",
  Transactions: "1efca1",
  AdvancedFunctionalities: "398a44",
  FixApiFor: "0c51cc",
  StrongestSecurity: "0be811",
  ColdWalletStorage: "bab8bd",
  AccessAndSupport: "225d49",
  LiveMultilingualSupport: "9db8d7",
  Registered: "fd7347",
  NetworkError: "7c5964",
  NetworkTimeout: "742fff",
  LoggedIn: "c45230",
  GetStarted: "8b2132",
  TheAccountHasBeen: "80e8b2",
  PleaseEnterYourEmail: "4148cf",
  PleaseEnterThe: "1aa49b",
  WeJustEmailedLogin: "6d948c",
  EmailError: "dcfbd5",
  NoEmailError: "c03eb9",
  NewPassword: "2bedea",
  EnterYourNew: "7f9aa4",
  ConfirmNewPassword: "a7ffa2",
  NoPasswordError: "88e3c2",
  PasswordError: "8b3bea",
  RePasswordError: "8f3685",
  PasswordHasReset: "fa748a",
  Verification: "65815d",
  Reach: "0bb46d",
  InTradingVolume: "d06f01",
  AboutPhemexExchange: "1bd56d",
  WhyChooseUs: "412428",
  PhemexIsTheBest: "53c21a",
  SupportCryptoCurrencies: "8fb2bd",
  CurrentlySpot: "3857c4",
  CurrentlyPerpetual: "6bbe46",
  SecurityVerificationUnavailable: "86b695",
  UpToLeverage: "e0f934",
  UpToWelcomeBonus: "232ced",
  YouCanTradeCrypto: "e17698",
  UpToInBonuses: "c0f6ca",
};
function lo(s) {
  let e, t;
  return (
    (e = new Ea({
      props: { onSubmit: s[16], isNeed2FA: s[7].totp === 1, email: s[0] },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 128 && (a.isNeed2FA = l[7].totp === 1),
          n & 1 && (a.email = l[0]),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function so(s) {
  let e,
    t,
    l,
    n = s[1](se.LogIn) + "",
    a,
    i,
    r,
    o,
    c,
    u = s[1](Oe.AntiPhishingVerification) + "",
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S = (tt.isServer ? "phemex.com" : location.hostname) + "",
    C,
    A,
    D,
    L,
    O,
    P,
    R,
    G,
    N,
    V,
    Y,
    z,
    x,
    ne = s[1](se.DontHaveAnAccount) + "",
    ie,
    ue,
    re,
    Q = s[1](Oe.SignUp) + "",
    ae,
    le,
    oe,
    ce,
    ke,
    Pe,
    Ae;
  r = new xr({ props: { target: _l(s[2]) ? s[2] : s[9](W.HOME.pathname) } });
  function pe(be) {
    s[20](be);
  }
  let fe = {
    haveIcon: !0,
    class: "mt40 sidebar-email",
    isError: s[5],
    placeholder: s[1](se.Email),
    disabled: s[3],
  };
  s[0] !== void 0 && (fe.value = s[0]),
    (D = new _a({ props: fe })),
    gt.push(() => il(D, "value", pe)),
    D.$on("keypress", s[11]),
    D.$on("focus", s[14]("email_input_box")),
    D.$on("blur", s[15]("email_input_box"));
  let he = s[5] && Es(s),
    de = !s[8] && ws(s);
  const _e = [ao, no],
    De = [];
  function qe(be, we) {
    return be[8] ? 0 : 1;
  }
  (G = qe(s)), (N = De[G] = _e[G](s));
  let ve = !s[8] && ks(s);
  return (
    (ce = new ba({
      props: { entrance: "Login", LG: s[1], fromType: "popLogin" },
    })),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (a = H(n)),
          (i = U()),
          j(r.$$.fragment),
          (o = U()),
          (c = b("div")),
          (m = H(u)),
          (_ = U()),
          (v = b("div")),
          (p = b("span")),
          (g = b("img")),
          (I = H(`
            https://`)),
          (T = U()),
          (C = H(S)),
          (A = U()),
          j(D.$$.fragment),
          (O = U()),
          he && he.c(),
          (P = U()),
          de && de.c(),
          (R = U()),
          N.c(),
          (V = U()),
          (Y = b("div")),
          (z = b("div")),
          (x = b("span")),
          (ie = H(ne)),
          (ue = U()),
          (re = b("a")),
          (ae = H(Q)),
          (le = U()),
          ve && ve.c(),
          (oe = U()),
          j(ce.$$.fragment),
          this.h();
      },
      l(be) {
        e = E(be, "DIV", { class: !0 });
        var we = w(e);
        t = E(we, "DIV", { class: !0 });
        var Ye = w(t);
        l = E(Ye, "DIV", { class: !0 });
        var Ne = w(l);
        (a = F(Ne, n)),
          Ne.forEach(h),
          (i = M(Ye)),
          K(r.$$.fragment, Ye),
          Ye.forEach(h),
          (o = M(we)),
          (c = E(we, "DIV", { class: !0 }));
        var $e = w(c);
        (m = F($e, u)),
          $e.forEach(h),
          (_ = M(we)),
          (v = E(we, "DIV", { class: !0 }));
        var Ee = w(v);
        p = E(Ee, "SPAN", { class: !0 });
        var Le = w(p);
        (g = E(Le, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
          (I = F(
            Le,
            `
            https://`
          )),
          Le.forEach(h),
          (T = M(Ee)),
          (C = F(Ee, S)),
          Ee.forEach(h),
          (A = M(we)),
          K(D.$$.fragment, we),
          (O = M(we)),
          he && he.l(we),
          (P = M(we)),
          de && de.l(we),
          (R = M(we)),
          N.l(we),
          (V = M(we)),
          (Y = E(we, "DIV", { class: !0 }));
        var et = w(Y);
        z = E(et, "DIV", {});
        var it = w(z);
        x = E(it, "SPAN", { class: !0 });
        var Fe = w(x);
        (ie = F(Fe, ne)),
          Fe.forEach(h),
          (ue = M(it)),
          (re = E(it, "A", { class: !0, href: !0 }));
        var Yt = w(re);
        (ae = F(Yt, Q)),
          Yt.forEach(h),
          it.forEach(h),
          (le = M(et)),
          ve && ve.l(et),
          et.forEach(h),
          (oe = M(we)),
          K(ce.$$.fragment, we),
          we.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "f32 lh48 fw3 T1"),
          f(t, "class", "title df aic jcsb svelte-1ifnhn2"),
          f(c, "class", "modal-title mb8 lh20 f14 T1 wsn svelte-1ifnhn2"),
          f(g, "class", "lh18 mr4"),
          f(g, "width", "14"),
          f(g, "height", "14"),
          Se(g.src, (k = xn.LOCK_ICON)) || f(g, "src", k),
          f(g, "alt", "lock"),
          f(p, "class", "BLUE df aic "),
          f(v, "class", "link df aic jcc svelte-1ifnhn2"),
          f(x, "class", "c6 svelte-1ifnhn2"),
          f(re, "class", "BLUE cp"),
          f(re, "href", "javascript:void(0);"),
          f(Y, "class", "login-row df jcsb wp100 svelte-1ifnhn2"),
          f(e, "class", "form");
      },
      m(be, we) {
        B(be, e, we),
          d(e, t),
          d(t, l),
          d(l, a),
          d(t, i),
          q(r, t, null),
          d(e, o),
          d(e, c),
          d(c, m),
          d(e, _),
          d(e, v),
          d(v, p),
          d(p, g),
          d(p, I),
          d(v, T),
          d(v, C),
          d(e, A),
          q(D, e, null),
          d(e, O),
          he && he.m(e, null),
          d(e, P),
          de && de.m(e, null),
          d(e, R),
          De[G].m(e, null),
          d(e, V),
          d(e, Y),
          d(Y, z),
          d(z, x),
          d(x, ie),
          d(z, ue),
          d(z, re),
          d(re, ae),
          d(Y, le),
          ve && ve.m(Y, null),
          d(e, oe),
          q(ce, e, null),
          (ke = !0),
          Pe || ((Ae = ee(re, "click", s[17])), (Pe = !0));
      },
      p(be, we) {
        (!ke || we & 2) && n !== (n = be[1](se.LogIn) + "") && te(a, n);
        const Ye = {};
        we & 516 && (Ye.target = _l(be[2]) ? be[2] : be[9](W.HOME.pathname)),
          r.$set(Ye),
          (!ke || we & 2) &&
            u !== (u = be[1](Oe.AntiPhishingVerification) + "") &&
            te(m, u);
        const Ne = {};
        we & 32 && (Ne.isError = be[5]),
          we & 2 && (Ne.placeholder = be[1](se.Email)),
          we & 8 && (Ne.disabled = be[3]),
          !L && we & 1 && ((L = !0), (Ne.value = be[0]), rl(() => (L = !1))),
          D.$set(Ne),
          be[5]
            ? he
              ? he.p(be, we)
              : ((he = Es(be)), he.c(), he.m(e, P))
            : he && (he.d(1), (he = null)),
          be[8]
            ? de &&
              (Ue(),
              y(de, 1, 1, () => {
                de = null;
              }),
              Me())
            : de
            ? (de.p(be, we), we & 256 && $(de, 1))
            : ((de = ws(be)), de.c(), $(de, 1), de.m(e, R));
        let $e = G;
        (G = qe(be)),
          G === $e
            ? De[G].p(be, we)
            : (Ue(),
              y(De[$e], 1, 1, () => {
                De[$e] = null;
              }),
              Me(),
              (N = De[G]),
              N ? N.p(be, we) : ((N = De[G] = _e[G](be)), N.c()),
              $(N, 1),
              N.m(e, V)),
          (!ke || we & 2) &&
            ne !== (ne = be[1](se.DontHaveAnAccount) + "") &&
            te(ie, ne),
          (!ke || we & 2) && Q !== (Q = be[1](Oe.SignUp) + "") && te(ae, Q),
          be[8]
            ? ve && (ve.d(1), (ve = null))
            : ve
            ? ve.p(be, we)
            : ((ve = ks(be)), ve.c(), ve.m(Y, null));
        const Ee = {};
        we & 2 && (Ee.LG = be[1]), ce.$set(Ee);
      },
      i(be) {
        ke ||
          ($(r.$$.fragment, be),
          $(D.$$.fragment, be),
          $(de),
          $(N),
          $(ce.$$.fragment, be),
          (ke = !0));
      },
      o(be) {
        y(r.$$.fragment, be),
          y(D.$$.fragment, be),
          y(de),
          y(N),
          y(ce.$$.fragment, be),
          (ke = !1);
      },
      d(be) {
        be && h(e),
          X(r),
          X(D),
          he && he.d(),
          de && de.d(),
          De[G].d(),
          ve && ve.d(),
          X(ce),
          (Pe = !1),
          Ae();
      },
    }
  );
}
function Es(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[5])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[5])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "sell mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 32 && te(t, l[5]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function ws(s) {
  let e, t, l;
  function n(i) {
    s[21](i);
  }
  let a = {
    showIcon: !1,
    class: "mt20 sidebar-password",
    placeholder: s[1](se.Password),
    disabled: s[3],
  };
  return (
    s[4] !== void 0 && (a.value = s[4]),
    (e = new pa({ props: a })),
    gt.push(() => il(e, "value", n)),
    e.$on("keypress", s[11]),
    e.$on("focus", s[14]("password_input_box")),
    e.$on("blur", s[15]("password_input_box")),
    {
      c() {
        j(e.$$.fragment);
      },
      l(i) {
        K(e.$$.fragment, i);
      },
      m(i, r) {
        q(e, i, r), (l = !0);
      },
      p(i, r) {
        const o = {};
        r & 2 && (o.placeholder = i[1](se.Password)),
          r & 8 && (o.disabled = i[3]),
          !t && r & 16 && ((t = !0), (o.value = i[4]), rl(() => (t = !1))),
          e.$set(o);
      },
      i(i) {
        l || ($(e.$$.fragment, i), (l = !0));
      },
      o(i) {
        y(e.$$.fragment, i), (l = !1);
      },
      d(i) {
        X(e, i);
      },
    }
  );
}
function no(s) {
  let e, t, l;
  return (
    (t = new ft({
      props: {
        class: "sidebar-login",
        minWidth: "100%",
        type: "primary",
        loading: s[3],
        $$slots: { default: [io] },
        $$scope: { ctx: s },
      },
    })),
    t.$on("click", s[13]),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "sidebar-login-wrap svelte-1ifnhn2");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p(n, a) {
        const i = {};
        a & 8 && (i.loading = n[3]),
          a & 134217730 && (i.$$scope = { dirty: a, ctx: n }),
          t.$set(i);
      },
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function ao(s) {
  let e, t;
  return (
    (e = new Gr({
      props: {
        email: s[0],
        hasErrorMsg: s[5] !== null,
        target: s[2],
        isInitializing: !1,
        isLoading: s[3],
        onStatusChange: s[12],
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 1 && (a.email = l[0]),
          n & 32 && (a.hasErrorMsg = l[5] !== null),
          n & 4 && (a.target = l[2]),
          n & 8 && (a.isLoading = l[3]),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function io(s) {
  let e = s[1](se.LogIn) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 2 && e !== (e = l[1](se.LogIn) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function ks(s) {
  let e,
    t,
    l = s[1](Oe.ForgotPassword) + "",
    n,
    a;
  return {
    c() {
      (e = b("div")), (t = b("a")), (n = H(l)), this.h();
    },
    l(i) {
      e = E(i, "DIV", {});
      var r = w(e);
      t = E(r, "A", { class: !0, href: !0 });
      var o = w(t);
      (n = F(o, l)), o.forEach(h), r.forEach(h), this.h();
    },
    h() {
      f(t, "class", "reset-password c6 cp svelte-1ifnhn2"),
        f(
          t,
          "href",
          (a =
            s[9](W.RESET_PASSWORD.pathname) +
            (s[2] ? "?" + bt.stringify({ target: s[2] }) : ""))
        );
    },
    m(i, r) {
      B(i, e, r), d(e, t), d(t, n);
    },
    p(i, r) {
      r & 2 && l !== (l = i[1](Oe.ForgotPassword) + "") && te(n, l),
        r & 516 &&
          a !==
            (a =
              i[9](W.RESET_PASSWORD.pathname) +
              (i[2] ? "?" + bt.stringify({ target: i[2] }) : "")) &&
          f(t, "href", a);
    },
    d(i) {
      i && h(e);
    },
  };
}
function ro(s) {
  let e, t, l, n, a, i, r, o, c, u;
  const m = [so, lo],
    _ = [];
  function v(p, g) {
    return p[6] === "LOGIN" ? 0 : p[6] === "NEW_DEVICE_CODE_DIALOG" ? 1 : -1;
  }
  return (
    ~(i = v(s)) && (r = _[i] = m[i](s)),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          r && r.c(),
          this.h();
      },
      l(p) {
        e = E(p, "DIV", { class: !0 });
        var g = w(e);
        t = E(g, "DIV", { class: !0 });
        var k = w(t);
        l = E(k, "I", { class: !0 });
        var I = w(l);
        (n = F(I, "")),
          I.forEach(h),
          k.forEach(h),
          (a = M(g)),
          r && r.l(g),
          g.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont f30 T4 svelte-1ifnhn2"),
          f(t, "class", "close-btn df aic jcc cp svelte-1ifnhn2"),
          f(e, "class", "wrap pr svelte-1ifnhn2");
      },
      m(p, g) {
        B(p, e, g),
          d(e, t),
          d(t, l),
          d(l, n),
          d(e, a),
          ~i && _[i].m(e, null),
          (o = !0),
          c || ((u = ee(t, "click", s[10])), (c = !0));
      },
      p(p, g) {
        let k = i;
        (i = v(p)),
          i === k
            ? ~i && _[i].p(p, g)
            : (r &&
                (Ue(),
                y(_[k], 1, 1, () => {
                  _[k] = null;
                }),
                Me()),
              ~i
                ? ((r = _[i]),
                  r ? r.p(p, g) : ((r = _[i] = m[i](p)), r.c()),
                  $(r, 1),
                  r.m(e, null))
                : (r = null));
      },
      i(p) {
        o || ($(r), (o = !0));
      },
      o(p) {
        y(r), (o = !1);
      },
      d(p) {
        p && h(e), ~i && _[i].d(), (c = !1), u();
      },
    }
  );
}
function oo(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [ro] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 134218751 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function _l(s) {
  return !s || s.indexOf("@") > -1 ? !1 : new URL(s).host === location.host;
}
function co() {
  return { code: "", totp: -1 };
}
function fo(s, e, t) {
  let l, n;
  ge(s, We, (Y) => t(9, (n = Y)));
  let { LG: a = null } = e,
    { target: i = null } = e,
    { email: r = null } = e,
    { newRegisterPage: o = !1 } = e;
  const c = Qe();
  let u = !1,
    m = null,
    _ = null,
    v = "LOGIN",
    p = co(),
    g = !0,
    k = 0;
  Be(() => Ke.track("side_popup_open", { ui_position: "login_popup" })),
    Be(() => {
      Fa.subscribe((Y) => {
        Y.visible ? (k = ot.create(to)) : k && k.$destroy();
      });
    });
  function I() {
    Kn.next({ event: !0 });
  }
  function T() {
    c("close"), L();
  }
  function S(Y) {
    if (Y.keyCode === 13) {
      if (g) {
        I();
        return;
      }
      A();
    }
  }
  function C(Y) {
    ml(Y.isLoading) || t(3, (u = Y.isLoading)),
      ml(Y.isOpenPasskey) || t(8, (g = Y.isOpenPasskey));
  }
  async function A() {
    if (
      (Ke.track("launch_login", { ui_position: "login_popup" }),
      t(4, (m = m || "")),
      l && _ === null)
    ) {
      t(3, (u = !0));
      const Y = await kt("login");
      if (!Y) {
        Re.send("toast", "error", { message: a(se.NetworkError) }),
          t(3, (u = !1));
        return;
      }
      const z = { email: l, password: m },
        { data: x, error: ne, reply: ie } = await Ve.login(Y, z, a);
      if ((t(3, (u = !1)), x)) {
        if ((t(7, (p = x)), za.next(x.status), x.newDevice === !0)) {
          t(6, (v = "NEW_DEVICE_CODE_DIALOG"));
          return;
        }
        if ((c("close"), p.totp === 0)) {
          wt.launchEmailVerification(a, {
            type: "login-verify",
            context: x,
            async callback(ue, re, Q) {
              const ae = Q.code,
                le = await D(ae, ue, "");
              re(le);
            },
          });
          return;
        }
        if (p.totp === 1) {
          wt.launchGoogleVerification(a, {
            context: x,
            async callback(ue, re, Q) {
              const ae = Q.code,
                le = await D(ae, "", ue);
              re(le);
            },
          });
          return;
        }
      }
      if (ne) {
        if (ne.code === 80014) {
          ot.create(Bi, { LG: a });
          return;
        }
        if (ne.code === 34005) {
          Re.send("toast", "error", {
            message: a(At[34005], { Times: ie ? ie.data.remainTimes : 0 }),
          });
          return;
        }
        Re.send("toast", "error", ne);
      }
    }
  }
  async function D(Y, z, x) {
    const ne = { code: Y };
    x && (ne.otpCode = x), z && (ne.mailCode = z);
    const { data: ie, error: ue } = await Ve.confirmLogin(ne);
    if (ie) {
      Re.send("toast", "info", { message: a(se.LoggedIn) });
      const re = ie.lang;
      return (
        re && Jn(Zn[re] || re),
        localStorage.setItem("close-receive-member", "N"),
        localStorage.setItem("base-kyc-status", "1"),
        setTimeout(() => {
          Rt(_l(i) && i);
        }, 200),
        { code: 0, msg: "" }
      );
    }
    if (ue) return Re.send("toast", "error", ue), ue;
  }
  function L() {
    t(3, (u = !1)), t(0, (r = null)), t(4, (m = null)), t(5, (_ = null));
  }
  function O(Y) {
    return function () {
      Ke.track("input_box_focus", {
        input_box_type: Y,
        business_type: "login",
        ui_position: "login_popup",
      });
    };
  }
  function P(Y) {
    return function () {
      Ke.track("input_box_unfocus", {
        input_box_type: Y,
        business_type: "login",
        ui_position: "login_popup",
      });
    };
  }
  function R(Y, z) {
    D(p.code, z, Y);
  }
  function G() {
    wt.launchRegister(a, i), T();
  }
  function N(Y) {
    (r = Y), t(0, r);
  }
  function V(Y) {
    (m = Y), t(4, m);
  }
  return (
    (s.$$set = (Y) => {
      "LG" in Y && t(1, (a = Y.LG)),
        "target" in Y && t(2, (i = Y.target)),
        "email" in Y && t(0, (r = Y.email)),
        "newRegisterPage" in Y && t(18, (o = Y.newRegisterPage));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(19, (l = r && r.trim())),
        s.$$.dirty & 524290 && t(5, (_ = Vi(l, a, se)));
    }),
    [r, a, i, u, m, _, v, p, g, n, T, S, C, A, O, P, R, G, o, l, N, V]
  );
}
class uo extends Ie {
  constructor(e) {
    super(),
      Te(this, e, fo, oo, Ce, {
        LG: 1,
        target: 2,
        email: 0,
        newRegisterPage: 18,
      });
  }
}
const zt = {
  Email: "04c82c",
  Password: "ae73cc",
  IndividualCode: "0f4ba8",
  CreateAccount: "16bf14",
  Terms: "a5d6fe",
  PrivacyPolicy: "3a8c63",
  BySigningUp: "971cbb",
  EmailError: "04dcef",
  NoEmailError: "458945",
  NoPasswordError: "253a39",
  PasswordError: "17d420",
  Registered: "0a9bb6",
  AlreadyRegistered: "83d1aa",
  LogIn: "b07b69",
  CreateAFreeAccount: "1736fd",
  Continue: "dd9732",
  ResetPassword: "c20285",
  NetworkError: "5cc10e",
  NetworkTimeout: "000f5f",
  LoggedIn: "dc61ba",
  TheAccountHasBeen: "18a306",
};
function Is(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[6])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[6])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "correct mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n[0] & 64 && te(t, l[6]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function ho(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ipt f1 svelte-fw7r52"),
        f(e, "type", "password"),
        f(e, "placeholder", (t = s[1](se.Password))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[2]),
        l ||
          ((n = [
            ee(e, "input", s[23]),
            ee(e, "keypress", s[13]),
            ee(e, "focus", s[17]("password_input_box")),
            ee(e, "blur", s[18]("password_input_box")),
          ]),
          (l = !0));
    },
    p(a, i) {
      i[0] & 2 && t !== (t = a[1](se.Password)) && f(e, "placeholder", t),
        i[0] & 8 && (e.disabled = a[3]),
        i[0] & 4 && e.value !== a[2] && ze(e, a[2]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function mo(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ipt f1 svelte-fw7r52"),
        f(e, "type", "text"),
        f(e, "placeholder", (t = s[1](se.Password))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[2]),
        l ||
          ((n = [
            ee(e, "input", s[22]),
            ee(e, "keypress", s[13]),
            ee(e, "focus", s[17]("password_input_box")),
            ee(e, "blur", s[18]("password_input_box")),
          ]),
          (l = !0));
    },
    p(a, i) {
      i[0] & 2 && t !== (t = a[1](se.Password)) && f(e, "placeholder", t),
        i[0] & 8 && (e.disabled = a[3]),
        i[0] & 4 && e.value !== a[2] && ze(e, a[2]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function Ts(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[7])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[7])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "correct mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n[0] & 128 && te(t, l[7]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Cs(s) {
  let e, t, l, n, a;
  return {
    c() {
      (e = b("div")), (t = b("input")), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      (t = E(r, "INPUT", {
        class: !0,
        type: !0,
        placeholder: !0,
        maxlength: !0,
      })),
        r.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "ipt code-ipt f1 svelte-fw7r52"),
        f(t, "type", "text"),
        f(t, "placeholder", (l = s[1](se.IndividualCode))),
        f(t, "maxlength", "32"),
        (t.disabled = s[4]),
        f(e, "class", "ipt-box df aic mt20 svelte-fw7r52"),
        Z(e, "disabled", s[4]);
    },
    m(i, r) {
      B(i, e, r),
        d(e, t),
        ze(t, s[5]),
        n ||
          ((a = [ee(t, "input", s[25]), ee(t, "keypress", s[13])]), (n = !0));
    },
    p(i, r) {
      r[0] & 2 && l !== (l = i[1](se.IndividualCode)) && f(t, "placeholder", l),
        r[0] & 16 && (t.disabled = i[4]),
        r[0] & 32 && t.value !== i[5] && ze(t, i[5]),
        r[0] & 16 && Z(e, "disabled", i[4]);
    },
    d(i) {
      i && h(e), (n = !1), xe(a);
    },
  };
}
function _o(s) {
  let e = s[1](se.Continue) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n[0] & 2 && e !== (e = l[1](se.Continue) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function go(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[1](zt.CreateAccount) + "",
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S = s[8] ? "&#xe750;" : "&#xe73f;",
    C,
    A,
    D,
    L,
    O = s[1](se.IndividualCode) + "",
    P,
    R,
    G = s[10] ? "&#xe65a;" : "&#xe65b;",
    N,
    V,
    Y,
    z,
    x = s[9] ? "&#xe61f;" : "&#xe6d3;",
    ne,
    ie,
    ue,
    re,
    Q,
    ae,
    le,
    oe,
    ce = s[1](se.AlreadyHaveAnAccount) + "",
    ke,
    Pe,
    Ae,
    pe = s[1](se.LogIn) + "",
    fe,
    he,
    de,
    _e,
    De,
    qe,
    ve = s[6] && Is(s);
  function be(Ee, Le) {
    return Ee[8] ? mo : ho;
  }
  let we = be(s),
    Ye = we(s),
    Ne = s[7] && Ts(s),
    $e = s[10] && Cs(s);
  return (
    (Q = new ft({
      props: {
        minWidth: "100%",
        type: "primary",
        loading: s[3],
        disabled: !!s[6] || !!s[7] || !s[9],
        $$slots: { default: [_o] },
        $$scope: { ctx: s },
      },
    })),
    Q.$on("click", s[14]),
    (de = new ba({
      props: { referralCode: s[5], LG: s[1], entrance: "Register" },
    })),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          (i = b("div")),
          (r = b("div")),
          (c = H(o)),
          (u = U()),
          (m = b("div")),
          (_ = b("input")),
          (p = U()),
          ve && ve.c(),
          (g = U()),
          (k = b("div")),
          Ye.c(),
          (I = U()),
          (T = b("i")),
          (C = U()),
          Ne && Ne.c(),
          (A = U()),
          (D = b("div")),
          (L = b("div")),
          (P = H(O)),
          (R = b("i")),
          (N = U()),
          $e && $e.c(),
          (V = U()),
          (Y = b("div")),
          (z = b("i")),
          (ne = U()),
          (ie = b("div")),
          (ue = U()),
          (re = b("div")),
          j(Q.$$.fragment),
          (ae = U()),
          (le = b("div")),
          (oe = b("span")),
          (ke = H(ce)),
          (Pe = U()),
          (Ae = b("a")),
          (fe = H(pe)),
          (he = U()),
          j(de.$$.fragment),
          this.h();
      },
      l(Ee) {
        e = E(Ee, "DIV", { class: !0 });
        var Le = w(e);
        t = E(Le, "DIV", { class: !0 });
        var et = w(t);
        l = E(et, "I", { class: !0 });
        var it = w(l);
        (n = F(it, "")),
          it.forEach(h),
          et.forEach(h),
          (a = M(Le)),
          (i = E(Le, "DIV", { class: !0 }));
        var Fe = w(i);
        r = E(Fe, "DIV", { class: !0 });
        var Yt = w(r);
        (c = F(Yt, o)),
          Yt.forEach(h),
          (u = M(Fe)),
          (m = E(Fe, "DIV", { class: !0 }));
        var Rl = w(m);
        (_ = E(Rl, "INPUT", { class: !0, type: !0, placeholder: !0 })),
          Rl.forEach(h),
          (p = M(Fe)),
          ve && ve.l(Fe),
          (g = M(Fe)),
          (k = E(Fe, "DIV", { class: !0 }));
        var Qt = w(k);
        Ye.l(Qt), (I = M(Qt)), (T = E(Qt, "I", { class: !0 }));
        var Aa = w(T);
        Aa.forEach(h),
          Qt.forEach(h),
          (C = M(Fe)),
          Ne && Ne.l(Fe),
          (A = M(Fe)),
          (D = E(Fe, "DIV", { class: !0 }));
        var Jt = w(D);
        L = E(Jt, "DIV", { class: !0 });
        var ul = w(L);
        (P = F(ul, O)), (R = E(ul, "I", { class: !0 }));
        var Sa = w(R);
        Sa.forEach(h),
          ul.forEach(h),
          (N = M(Jt)),
          $e && $e.l(Jt),
          Jt.forEach(h),
          (V = M(Fe)),
          (Y = E(Fe, "DIV", { class: !0 }));
        var Zt = w(Y);
        z = E(Zt, "I", { class: !0 });
        var Pa = w(z);
        Pa.forEach(h), (ne = M(Zt)), (ie = E(Zt, "DIV", { class: !0 }));
        var La = w(ie);
        La.forEach(h),
          Zt.forEach(h),
          (ue = M(Fe)),
          (re = E(Fe, "DIV", {
            class: !0,
            "data-gac": !0,
            "data-gaa": !0,
            "data-gal": !0,
          }));
        var Ol = w(re);
        K(Q.$$.fragment, Ol),
          Ol.forEach(h),
          (ae = M(Fe)),
          (le = E(Fe, "DIV", { class: !0 }));
        var xt = w(le);
        oe = E(xt, "SPAN", { class: !0 });
        var Nl = w(oe);
        (ke = F(Nl, ce)),
          Nl.forEach(h),
          (Pe = M(xt)),
          (Ae = E(xt, "A", { class: !0, href: !0 }));
        var Vl = w(Ae);
        (fe = F(Vl, pe)),
          Vl.forEach(h),
          xt.forEach(h),
          (he = M(Fe)),
          K(de.$$.fragment, Fe),
          Fe.forEach(h),
          Le.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont f30 T4 svelte-fw7r52"),
          f(t, "class", "close-btn df aic jcc cp svelte-fw7r52"),
          f(r, "class", "title svelte-fw7r52"),
          f(_, "class", "autofill ipt f1 svelte-fw7r52"),
          f(_, "type", "text"),
          f(_, "placeholder", (v = s[1](se.Email))),
          (_.disabled = s[3]),
          f(m, "class", "ipt-box df aic mt40 svelte-fw7r52"),
          Z(m, "disabled", s[3]),
          Z(m, "error", s[6]),
          f(T, "class", "iconfont T4 cp svelte-fw7r52"),
          f(k, "class", "ipt-box df aic mt20 svelte-fw7r52"),
          Z(k, "disabled", s[3]),
          Z(k, "error", s[7]),
          f(R, "class", "iconfont ml10 svelte-fw7r52"),
          f(
            L,
            "class",
            "df aic lh18 f14 cp c6 home-register-invite-button svelte-fw7r52"
          ),
          f(D, "class", "code mt20"),
          f(z, "class", "iconfont mr4 f14 cp svelte-fw7r52"),
          Z(z, "BLUE", s[9]),
          f(ie, "class", "f14"),
          f(Y, "class", "term-link df mt20 c6 svelte-fw7r52"),
          f(re, "class", "btn mt20 ga svelte-fw7r52"),
          f(re, "data-gac", "user.landingpage"),
          f(re, "data-gaa", "link_click"),
          f(re, "data-gal", "landingpage.side_continue"),
          f(oe, "class", "c6 svelte-fw7r52"),
          f(Ae, "class", "BLUE cp"),
          f(Ae, "href", "javascript:void(0);"),
          f(le, "class", "login-row f14 svelte-fw7r52"),
          f(i, "class", "form"),
          f(e, "class", "wrap pr svelte-fw7r52");
      },
      m(Ee, Le) {
        B(Ee, e, Le),
          d(e, t),
          d(t, l),
          d(l, n),
          d(e, a),
          d(e, i),
          d(i, r),
          d(r, c),
          d(i, u),
          d(i, m),
          d(m, _),
          ze(_, s[0]),
          d(i, p),
          ve && ve.m(i, null),
          d(i, g),
          d(i, k),
          Ye.m(k, null),
          d(k, I),
          d(k, T),
          (T.innerHTML = S),
          d(i, C),
          Ne && Ne.m(i, null),
          d(i, A),
          d(i, D),
          d(D, L),
          d(L, P),
          d(L, R),
          (R.innerHTML = G),
          d(D, N),
          $e && $e.m(D, null),
          d(i, V),
          d(i, Y),
          d(Y, z),
          (z.innerHTML = x),
          d(Y, ne),
          d(Y, ie),
          (ie.innerHTML = s[11]),
          d(i, ue),
          d(i, re),
          q(Q, re, null),
          d(i, ae),
          d(i, le),
          d(le, oe),
          d(oe, ke),
          d(le, Pe),
          d(le, Ae),
          d(Ae, fe),
          d(i, he),
          q(de, i, null),
          (_e = !0),
          De ||
            ((qe = [
              ee(t, "click", s[12]),
              ee(_, "input", s[21]),
              ee(_, "keypress", s[13]),
              ee(_, "focus", s[17]("email_input_box")),
              ee(_, "blur", s[18]("email_input_box")),
              ee(T, "click", s[15]),
              ee(L, "click", s[24]),
              ee(z, "click", s[26]),
              ee(Ae, "click", s[16]),
            ]),
            (De = !0));
      },
      p(Ee, Le) {
        (!_e || Le[0] & 2) &&
          o !== (o = Ee[1](zt.CreateAccount) + "") &&
          te(c, o),
          (!_e || (Le[0] & 2 && v !== (v = Ee[1](se.Email)))) &&
            f(_, "placeholder", v),
          (!_e || Le[0] & 8) && (_.disabled = Ee[3]),
          Le[0] & 1 && _.value !== Ee[0] && ze(_, Ee[0]),
          (!_e || Le[0] & 8) && Z(m, "disabled", Ee[3]),
          (!_e || Le[0] & 64) && Z(m, "error", Ee[6]),
          Ee[6]
            ? ve
              ? ve.p(Ee, Le)
              : ((ve = Is(Ee)), ve.c(), ve.m(i, g))
            : ve && (ve.d(1), (ve = null)),
          we === (we = be(Ee)) && Ye
            ? Ye.p(Ee, Le)
            : (Ye.d(1), (Ye = we(Ee)), Ye && (Ye.c(), Ye.m(k, I))),
          (!_e || Le[0] & 256) &&
            S !== (S = Ee[8] ? "&#xe750;" : "&#xe73f;") &&
            (T.innerHTML = S),
          (!_e || Le[0] & 8) && Z(k, "disabled", Ee[3]),
          (!_e || Le[0] & 128) && Z(k, "error", Ee[7]),
          Ee[7]
            ? Ne
              ? Ne.p(Ee, Le)
              : ((Ne = Ts(Ee)), Ne.c(), Ne.m(i, A))
            : Ne && (Ne.d(1), (Ne = null)),
          (!_e || Le[0] & 2) &&
            O !== (O = Ee[1](se.IndividualCode) + "") &&
            te(P, O),
          (!_e || Le[0] & 1024) &&
            G !== (G = Ee[10] ? "&#xe65a;" : "&#xe65b;") &&
            (R.innerHTML = G),
          Ee[10]
            ? $e
              ? $e.p(Ee, Le)
              : (($e = Cs(Ee)), $e.c(), $e.m(D, null))
            : $e && ($e.d(1), ($e = null)),
          (!_e || Le[0] & 512) &&
            x !== (x = Ee[9] ? "&#xe61f;" : "&#xe6d3;") &&
            (z.innerHTML = x),
          (!_e || Le[0] & 512) && Z(z, "BLUE", Ee[9]);
        const et = {};
        Le[0] & 8 && (et.loading = Ee[3]),
          Le[0] & 704 && (et.disabled = !!Ee[6] || !!Ee[7] || !Ee[9]),
          (Le[0] & 2) | (Le[1] & 8) && (et.$$scope = { dirty: Le, ctx: Ee }),
          Q.$set(et),
          (!_e || Le[0] & 2) &&
            ce !== (ce = Ee[1](se.AlreadyHaveAnAccount) + "") &&
            te(ke, ce),
          (!_e || Le[0] & 2) &&
            pe !== (pe = Ee[1](se.LogIn) + "") &&
            te(fe, pe);
        const it = {};
        Le[0] & 32 && (it.referralCode = Ee[5]),
          Le[0] & 2 && (it.LG = Ee[1]),
          de.$set(it);
      },
      i(Ee) {
        _e || ($(Q.$$.fragment, Ee), $(de.$$.fragment, Ee), (_e = !0));
      },
      o(Ee) {
        y(Q.$$.fragment, Ee), y(de.$$.fragment, Ee), (_e = !1);
      },
      d(Ee) {
        Ee && h(e),
          ve && ve.d(),
          Ye.d(),
          Ne && Ne.d(),
          $e && $e.d(),
          X(Q),
          X(de),
          (De = !1),
          xe(qe);
      },
    }
  );
}
function po(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [go] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        (n[0] & 2047) | (n[1] & 8) && (a.$$scope = { dirty: n, ctx: l }),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ds(s, e, t) {
  return s === null || e === null || Nt.EMAIL.test(s)
    ? null
    : e(s ? t.EmailError : t.NoEmailError);
}
function vo(s, e, t) {
  return s === null || e === null || Nt.PASSWORD.test(s)
    ? null
    : e(s ? t.PasswordError : t.NoPasswordError);
}
function bo(s, e, t) {
  let l, n;
  ge(s, vt, (Q) => t(28, (l = Q))), ge(s, We, (Q) => t(29, (n = Q)));
  let { LG: a = null } = e,
    { target: i = null } = e,
    { email: r = null } = e,
    { record: o = null } = e;
  const c = Qe(),
    u = a(zt.BySigningUp, {
      Term: `<a href="${n(
        Ge.PHEMEX_REFERENCES_TERMS_OF_USE,
        "CMS"
      )}" target="_blank" style="color: #449AFF;">${a(zt.Terms)}</a>`,
      Privacy: `<a href="${n(
        Ge.PHEMEX_REFERENCES_PRIVACY_POLICY,
        "CMS"
      )}" target="_blank" style="color: #449AFF;">${a(zt.PrivacyPolicy)}</a>`,
    });
  let m = !1,
    _ = !1,
    v = null,
    p = "",
    g = "",
    k = "",
    I = "",
    T = !1,
    S = !0,
    C = !1;
  Be(() => Ke.track("side_popup_open", { ui_position: "register_popup" })),
    Be(() => {
      const { referralCode: Q, group: ae } = ja();
      Q && Ft.set({ code: Q, group: ae }),
        ae && Mt.isNumber(ae) && Ve.addGroupClickCnt(ae);
    }),
    Be(() =>
      Ft.subscribe(({ code: Q, group: ae }) => {
        t(4, (_ = !!Q)), t(5, (p = Q)), (g = ae);
      })
    );
  function A(Q) {
    if (Q) {
      const { referralCode: ae, group: le } = Q;
      ae && Ft.set({ code: ae, group: le }),
        le && Mt.isNumber(le) && Ve.addGroupClickCnt(le);
    }
  }
  function D() {
    c("close"), N();
  }
  function L(Q) {
    Q.keyCode === 13 && O();
  }
  async function O() {
    if (
      (Ke.track("launch_register", {
        referral_code: p,
        ui_position: "register_popup",
      }),
      t(0, (r = r || "")),
      t(2, (v = v || "")),
      t(6, (k = Ds(r, a, se))),
      r && v && k === null && I === null)
    ) {
      t(3, (m = !0));
      const Q = await kt("register");
      if (!Q) {
        Re.send("toast", "error", { message: a(se.NetworkError) }),
          t(3, (m = !1));
        return;
      }
      const ae = {
          email: r,
          password: v,
          referralCode: p,
          group: g ? Number(g) : 0,
          nickName: "",
          lang: bl[l] || l,
        },
        { data: le, error: oe } = await Ve.signUp(Q, ae);
      if ((t(3, (m = !1)), le)) {
        if (le.status === "1") {
          t(6, (k = a(se.TheAccountHasBeen)));
          return;
        }
        c("close"),
          wt.launchEmailVerification(a, {
            params: ae,
            type: "mail-registration-code",
            context: le,
            async callback(ce, ke, Pe) {
              const Ae = Pe.code,
                pe = Pe.email,
                fe = await P(Ae, ce, pe);
              ke(fe);
            },
          });
      }
      oe && Re.send("toast", "error", oe);
    }
  }
  async function P(Q, ae, le) {
    const oe = { code: Q, mailCode: ae, email: le },
      { data: ce, error: ke } = await Ve.confirmRegister(oe);
    if (ce)
      return (
        localStorage.setItem("close-receive-member", "N"),
        localStorage.setItem("base-kyc-status", "1"),
        Re.send("toast", "info", { message: a(se.Registered) }),
        await Bt.bindGoogleClientId(),
        Rt(i),
        { code: 0, msg: "" }
      );
    if (ke)
      return Re.send("toast", "error", ke), { code: ke.code, msg: ke.message };
  }
  function R() {
    t(8, (T = !T));
  }
  function G() {
    wt.launchLogin(a, i), D();
  }
  function N() {
    t(3, (m = !1)),
      t(4, (_ = !1)),
      t(0, (r = null)),
      t(2, (v = null)),
      t(5, (p = "")),
      (g = ""),
      t(6, (k = "")),
      t(7, (I = ""));
  }
  function V(Q) {
    return function () {
      Ke.track("input_box_focus", {
        input_box_type: Q,
        business_type: "register",
        ui_position: "register_popup",
      });
    };
  }
  function Y(Q) {
    return function () {
      t(6, (k = Ds(r, a, se))),
        Ke.track("input_box_unfocus", {
          input_box_type: Q,
          business_type: "register",
          ui_position: "register_popup",
        });
    };
  }
  function z() {
    (r = this.value), t(0, r);
  }
  function x() {
    (v = this.value), t(2, v);
  }
  function ne() {
    (v = this.value), t(2, v);
  }
  const ie = () => t(10, (C = !C));
  function ue() {
    (p = this.value), t(5, p);
  }
  const re = () => t(9, (S = !S));
  return (
    (s.$$set = (Q) => {
      "LG" in Q && t(1, (a = Q.LG)),
        "target" in Q && t(19, (i = Q.target)),
        "email" in Q && t(0, (r = Q.email)),
        "record" in Q && t(20, (o = Q.record));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 6 && t(7, (I = vo(v, a, se))),
        s.$$.dirty[0] & 1048576 && A(o);
    }),
    [
      r,
      a,
      v,
      m,
      _,
      p,
      k,
      I,
      T,
      S,
      C,
      u,
      D,
      L,
      O,
      R,
      G,
      V,
      Y,
      i,
      o,
      z,
      x,
      ne,
      ie,
      ue,
      re,
    ]
  );
}
class Eo extends Ie {
  constructor(e) {
    super(),
      Te(
        this,
        e,
        bo,
        po,
        Ce,
        { LG: 1, target: 19, email: 0, record: 20 },
        null,
        [-1, -1]
      );
  }
}
function As(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[2])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[2])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "correct mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 4 && te(t, l[2]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function wo(s) {
  let e = s[0](se.Continue) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](se.Continue) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function ko(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c = s[0](se.ResetPassword) + "",
    u,
    m,
    _,
    v = s[0](se.EnterYourDetailsBelow) + "",
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A,
    D,
    L,
    O,
    P,
    R,
    G,
    N,
    V = s[0](se.DontHaveAnAccount) + "",
    Y,
    z,
    x,
    ne = s[0](se.GetStarted) + "",
    ie,
    ue,
    re,
    Q,
    ae,
    le = s[2] && As(s);
  return (
    (P = new ft({
      props: {
        minWidth: "100%",
        type: "primary",
        loading: s[3],
        $$slots: { default: [wo] },
        $$scope: { ctx: s },
      },
    })),
    P.$on("click", s[7]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (n = b("i")),
          (a = H("")),
          (i = U()),
          (r = b("div")),
          (o = b("div")),
          (u = H(c)),
          (m = U()),
          (_ = b("div")),
          (p = H(v)),
          (g = U()),
          (k = b("div")),
          (I = b("i")),
          (T = H("")),
          (S = U()),
          (C = b("input")),
          (D = U()),
          le && le.c(),
          (L = U()),
          (O = b("div")),
          j(P.$$.fragment),
          (R = U()),
          (G = b("div")),
          (N = b("span")),
          (Y = H(V)),
          (z = U()),
          (x = b("a")),
          (ie = H(ne)),
          this.h();
      },
      l(oe) {
        e = E(oe, "DIV", { class: !0 });
        var ce = w(e);
        t = E(ce, "DIV", { class: !0 });
        var ke = w(t);
        l = E(ke, "DIV", { class: !0 });
        var Pe = w(l);
        n = E(Pe, "I", { class: !0 });
        var Ae = w(n);
        (a = F(Ae, "")),
          Ae.forEach(h),
          Pe.forEach(h),
          ke.forEach(h),
          (i = M(ce)),
          (r = E(ce, "DIV", { class: !0 }));
        var pe = w(r);
        o = E(pe, "DIV", { class: !0 });
        var fe = w(o);
        (u = F(fe, c)),
          fe.forEach(h),
          (m = M(pe)),
          (_ = E(pe, "DIV", { class: !0 }));
        var he = w(_);
        (p = F(he, v)),
          he.forEach(h),
          (g = M(pe)),
          (k = E(pe, "DIV", { class: !0 }));
        var de = w(k);
        I = E(de, "I", { class: !0 });
        var _e = w(I);
        (T = F(_e, "")),
          _e.forEach(h),
          (S = M(de)),
          (C = E(de, "INPUT", { class: !0, type: !0, placeholder: !0 })),
          de.forEach(h),
          (D = M(pe)),
          le && le.l(pe),
          (L = M(pe)),
          (O = E(pe, "DIV", { class: !0 }));
        var De = w(O);
        K(P.$$.fragment, De),
          De.forEach(h),
          (R = M(pe)),
          (G = E(pe, "DIV", { class: !0 }));
        var qe = w(G);
        N = E(qe, "SPAN", { class: !0 });
        var ve = w(N);
        (Y = F(ve, V)),
          ve.forEach(h),
          (z = M(qe)),
          (x = E(qe, "A", { class: !0, href: !0 }));
        var be = w(x);
        (ie = F(be, ne)),
          be.forEach(h),
          qe.forEach(h),
          pe.forEach(h),
          ce.forEach(h),
          this.h();
      },
      h() {
        f(n, "class", "iconfont f30 T4 svelte-bxpayf"),
          f(l, "class", "close-btn df aic jcc cp svelte-bxpayf"),
          f(t, "class", "tr"),
          f(o, "class", "title svelte-bxpayf"),
          f(_, "class", "sub-title T4 svelte-bxpayf"),
          f(I, "class", "iconfont T4"),
          f(C, "class", "autofill ml12 ipt f1 svelte-bxpayf"),
          f(C, "type", "text"),
          f(C, "placeholder", (A = s[0](se.Email))),
          (C.disabled = s[3]),
          f(k, "class", "ipt-box df aic mt20 svelte-bxpayf"),
          Z(k, "disabled", s[3]),
          Z(k, "error", s[2]),
          f(O, "class", "mt50 svelte-bxpayf"),
          f(N, "class", "T4"),
          f(x, "class", "BLUE cp"),
          f(x, "href", (ue = s[4](W.REGISTER.pathname))),
          f(G, "class", "login-row pa svelte-bxpayf"),
          f(r, "class", "form"),
          f(e, "class", "wrap pr svelte-bxpayf");
      },
      m(oe, ce) {
        B(oe, e, ce),
          d(e, t),
          d(t, l),
          d(l, n),
          d(n, a),
          d(e, i),
          d(e, r),
          d(r, o),
          d(o, u),
          d(r, m),
          d(r, _),
          d(_, p),
          d(r, g),
          d(r, k),
          d(k, I),
          d(I, T),
          d(k, S),
          d(k, C),
          ze(C, s[1]),
          d(r, D),
          le && le.m(r, null),
          d(r, L),
          d(r, O),
          q(P, O, null),
          d(r, R),
          d(r, G),
          d(G, N),
          d(N, Y),
          d(G, z),
          d(G, x),
          d(x, ie),
          (re = !0),
          Q ||
            ((ae = [
              ee(l, "click", s[5]),
              ee(C, "input", s[10]),
              ee(C, "keypress", s[6]),
            ]),
            (Q = !0));
      },
      p(oe, ce) {
        (!re || ce & 1) && c !== (c = oe[0](se.ResetPassword) + "") && te(u, c),
          (!re || ce & 1) &&
            v !== (v = oe[0](se.EnterYourDetailsBelow) + "") &&
            te(p, v),
          (!re || (ce & 1 && A !== (A = oe[0](se.Email)))) &&
            f(C, "placeholder", A),
          (!re || ce & 8) && (C.disabled = oe[3]),
          ce & 2 && C.value !== oe[1] && ze(C, oe[1]),
          (!re || ce & 8) && Z(k, "disabled", oe[3]),
          (!re || ce & 4) && Z(k, "error", oe[2]),
          oe[2]
            ? le
              ? le.p(oe, ce)
              : ((le = As(oe)), le.c(), le.m(r, L))
            : le && (le.d(1), (le = null));
        const ke = {};
        ce & 8 && (ke.loading = oe[3]),
          ce & 16385 && (ke.$$scope = { dirty: ce, ctx: oe }),
          P.$set(ke),
          (!re || ce & 1) &&
            V !== (V = oe[0](se.DontHaveAnAccount) + "") &&
            te(Y, V),
          (!re || ce & 1) &&
            ne !== (ne = oe[0](se.GetStarted) + "") &&
            te(ie, ne),
          (!re || (ce & 16 && ue !== (ue = oe[4](W.REGISTER.pathname)))) &&
            f(x, "href", ue);
      },
      i(oe) {
        re || ($(P.$$.fragment, oe), (re = !0));
      },
      o(oe) {
        y(P.$$.fragment, oe), (re = !1);
      },
      d(oe) {
        oe && h(e), le && le.d(), X(P), (Q = !1), xe(ae);
      },
    }
  );
}
function Io(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [ko] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 16415 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function To(s, e, t) {
  return s === null || e === null || Nt.EMAIL.test(s)
    ? null
    : e(s ? t.EmailError : t.NoEmailError);
}
function Co(s, e, t) {
  let l;
  ge(s, We, (I) => t(4, (l = I)));
  let { LG: n = null } = e,
    { target: a = null } = e;
  const i = Qe();
  let r = null,
    o = !1,
    c = null,
    u = !1;
  function m() {
    i("close");
  }
  function _(I) {
    I.keyCode === 13 && v();
  }
  async function v() {
    r && c === null && t(9, (o = !0));
  }
  async function p() {
    t(3, (u = !0));
    const I = await kt("reset_pwd");
    if (!I) {
      Re.send("toast", "error", { message: n(se.NetworkError) }),
        t(3, (u = !1));
      return;
    }
    const T = { type: "mail-reset-password-code", email: r, ...I },
      { data: S, error: C } = await Ve.publicCodesMail(T);
    S &&
      (wt.launchEmailVerification(n, {
        type: "mail-reset-password-code",
        context: { email: r },
        async callback(A, D, L) {
          const O = L.email,
            P = await g(O, A);
          D(P);
        },
      }),
      m()),
      C && Re.send("toast", "error", C),
      t(9, (o = !1)),
      t(3, (u = !1));
  }
  async function g(I, T) {
    const S = { mailCode: T, email: I },
      { data: C, error: A } = await Ve.preparePassword(S);
    if (C)
      return (
        m(),
        wt.launchInputNewPassword(n, { target: a, code: C.code }),
        { code: 0, msg: "" }
      );
    if (A)
      return Re.send("toast", "error", A), { code: A.code, msg: A.message };
  }
  function k() {
    (r = this.value), t(1, r);
  }
  return (
    (s.$$set = (I) => {
      "LG" in I && t(0, (n = I.LG)), "target" in I && t(8, (a = I.target));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 512 && o && p(), s.$$.dirty & 3 && t(2, (c = To(r, n, se)));
    }),
    [n, r, c, u, l, m, _, v, a, o, k]
  );
}
class Do extends Ie {
  constructor(e) {
    super(), Te(this, e, Co, Io, Ce, { LG: 0, target: 8 });
  }
}
function Ao(s) {
  let e,
    t = s[0](se.SendAgain) + "",
    l,
    n,
    a;
  return {
    c() {
      (e = b("span")), (l = H(t)), this.h();
    },
    l(i) {
      e = E(i, "SPAN", { class: !0 });
      var r = w(e);
      (l = F(r, t)), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "f14 lh22 cp ml4 BLUE ");
    },
    m(i, r) {
      B(i, e, r), d(e, l), n || ((a = ee(e, "click", s[7])), (n = !0));
    },
    p(i, r) {
      r & 1 && t !== (t = i[0](se.SendAgain) + "") && te(l, t);
    },
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function So(s) {
  let e, t, l;
  return {
    c() {
      (e = b("span")), (t = H(s[4])), (l = H("s")), this.h();
    },
    l(n) {
      e = E(n, "SPAN", { class: !0 });
      var a = w(e);
      (t = F(a, s[4])), (l = F(a, "s")), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "default");
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(e, l);
    },
    p(n, a) {
      a & 16 && te(t, n[4]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function Po(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[0](se.Back) + "",
    c,
    u,
    m,
    _,
    v = s[0](se.EmailVerification) + "",
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A =
      s[0](se.WeJustEmailedLogin, {
        Email: `<span class="T2">${s[3]}</span>`,
      }) + "",
    D,
    L,
    O,
    P,
    R,
    G = s[0](se.MakeSure) + "",
    N,
    V,
    Y,
    z,
    x,
    ne;
  (O = new Wt({
    props: { class: "sidebar-email-code", status: s[1], explain: s[2] },
  })),
    O.$on("change", s[5]),
    O.$on("input", s[6]);
  function ie(Q, ae) {
    return Q[4] > 0 ? So : Ao;
  }
  let ue = ie(s),
    re = ue(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("i")),
        (a = H("")),
        (i = U()),
        (r = b("span")),
        (c = H(o)),
        (u = U()),
        (m = b("div")),
        (_ = b("div")),
        (p = H(v)),
        (g = U()),
        (k = b("div")),
        (I = b("img")),
        (S = U()),
        (C = b("div")),
        (D = U()),
        (L = b("div")),
        j(O.$$.fragment),
        (P = U()),
        (R = b("div")),
        (N = H(G)),
        (V = U()),
        (Y = b("div")),
        re.c(),
        this.h();
    },
    l(Q) {
      e = E(Q, "DIV", { class: !0 });
      var ae = w(e);
      t = E(ae, "DIV", { class: !0 });
      var le = w(t);
      l = E(le, "DIV", { class: !0 });
      var oe = w(l);
      n = E(oe, "I", { class: !0 });
      var ce = w(n);
      (a = F(ce, "")),
        ce.forEach(h),
        oe.forEach(h),
        (i = M(le)),
        (r = E(le, "SPAN", { class: !0 }));
      var ke = w(r);
      (c = F(ke, o)),
        ke.forEach(h),
        le.forEach(h),
        (u = M(ae)),
        (m = E(ae, "DIV", { class: !0 }));
      var Pe = w(m);
      _ = E(Pe, "DIV", { class: !0 });
      var Ae = w(_);
      (p = F(Ae, v)),
        Ae.forEach(h),
        (g = M(Pe)),
        (k = E(Pe, "DIV", { class: !0 }));
      var pe = w(k);
      (I = E(pe, "IMG", { class: !0, src: !0, alt: !0 })),
        pe.forEach(h),
        (S = M(Pe)),
        (C = E(Pe, "DIV", { class: !0 }));
      var fe = w(C);
      fe.forEach(h), (D = M(Pe)), (L = E(Pe, "DIV", { class: !0 }));
      var he = w(L);
      K(O.$$.fragment, he),
        he.forEach(h),
        (P = M(Pe)),
        (R = E(Pe, "DIV", { class: !0 }));
      var de = w(R);
      (N = F(de, G)),
        de.forEach(h),
        (V = M(Pe)),
        (Y = E(Pe, "DIV", { class: !0 }));
      var _e = w(Y);
      re.l(_e), _e.forEach(h), Pe.forEach(h), ae.forEach(h), this.h();
    },
    h() {
      f(n, "class", "iconfont BLUE svelte-1s80wy2"),
        f(l, "class", "arrow svelte-1s80wy2"),
        f(r, "class", "BLUE ml10"),
        f(t, "class", "df aic cp"),
        f(_, "class", "title svelte-1s80wy2"),
        f(I, "class", "email-gif svelte-1s80wy2"),
        Se(I.src, (T = rt.REGISTER_LANDING_PAGE_EMAIL_GIF)) || f(I, "src", T),
        f(I, "alt", "email"),
        f(k, "class", "mt20 tc"),
        f(C, "class", "sub-title T4 svelte-1s80wy2"),
        f(L, "class", "code mt16 svelte-1s80wy2"),
        f(R, "class", "mt16 T3"),
        f(Y, "class", "send mt10 BLUE tc"),
        f(m, "class", "form"),
        f(e, "class", "wrap svelte-1s80wy2");
    },
    m(Q, ae) {
      B(Q, e, ae),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(t, i),
        d(t, r),
        d(r, c),
        d(e, u),
        d(e, m),
        d(m, _),
        d(_, p),
        d(m, g),
        d(m, k),
        d(k, I),
        d(m, S),
        d(m, C),
        (C.innerHTML = A),
        d(m, D),
        d(m, L),
        q(O, L, null),
        d(m, P),
        d(m, R),
        d(R, N),
        d(m, V),
        d(m, Y),
        re.m(Y, null),
        (z = !0),
        x || ((ne = ee(t, "click", s[8])), (x = !0));
    },
    p(Q, ae) {
      (!z || ae & 1) && o !== (o = Q[0](se.Back) + "") && te(c, o),
        (!z || ae & 1) &&
          v !== (v = Q[0](se.EmailVerification) + "") &&
          te(p, v),
        (!z || ae & 9) &&
          A !==
            (A =
              Q[0](se.WeJustEmailedLogin, {
                Email: `<span class="T2">${Q[3]}</span>`,
              }) + "") &&
          (C.innerHTML = A);
      const le = {};
      ae & 2 && (le.status = Q[1]),
        ae & 4 && (le.explain = Q[2]),
        O.$set(le),
        (!z || ae & 1) && G !== (G = Q[0](se.MakeSure) + "") && te(N, G),
        ue === (ue = ie(Q)) && re
          ? re.p(Q, ae)
          : (re.d(1), (re = ue(Q)), re && (re.c(), re.m(Y, null)));
    },
    i(Q) {
      z || ($(O.$$.fragment, Q), (z = !0));
    },
    o(Q) {
      y(O.$$.fragment, Q), (z = !1);
    },
    d(Q) {
      Q && h(e), X(O), re.d(), (x = !1), ne();
    },
  };
}
function Lo(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [Po] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 1048607 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ro(s, e, t) {
  let l;
  ge(s, Kt, (L) => t(15, (l = L)));
  let { LG: n = null } = e,
    { emailData: a = null } = e;
  const i = Qe();
  let r = "",
    o = "",
    c = null,
    u = 60,
    m = null,
    _ = null,
    v = null,
    p = null,
    g = null;
  Be(() => {
    (_ = a.type),
      (v = a.context),
      (g = a.params),
      (p = a.callback),
      t(3, (c = a.context.email)),
      t(1, (r = "")),
      t(2, (o = "")),
      S(),
      a.context.registerToken && k(a.context);
  });
  function k(L) {
    let O = 300;
    m = setInterval(async () => {
      const P = { token: L.registerToken },
        { data: R } = await Ve.loginWithToken(P);
      (O = O - 2),
        R &&
          (localStorage.setItem("base-kyc-status", "1"),
          clearInterval(m),
          await Bt.bindGoogleClientId(),
          setTimeout(() => {
            Rt();
          }, 200)),
        O < 0 && clearInterval(m);
    }, 2e3);
  }
  function I(L) {
    const O = L.detail.value;
    t(1, (r = "loading")),
      p &&
        p(
          O,
          ({ code: R, msg: G }) => {
            if (R === 0) {
              A(), t(1, (r = "success"));
              return;
            }
            t(1, (r = "fail"));
            const N = At[R];
            t(2, (o = N ? n(N) : G));
          },
          v
        );
  }
  function T() {
    t(1, (r = "")), t(2, (o = ""));
  }
  function S() {
    const L = Date.now() + 6e4;
    localStorage.setItem("count_down_mail", L), t(4, (u = 60));
    const O = setInterval(() => {
      const P = localStorage.getItem("count_down_mail") || "0",
        R = Date.now();
      t(4, (u = Math.floor((Number(P) - R) / 1e3))), u < 0 && clearInterval(O);
    }, 500);
  }
  async function C() {
    const L = await kt("email_verification");
    if (!L) {
      Re.send("toast", "error", { message: n(se.NetworkError) });
      return;
    }
    const O = { type: _, email: v.email, ...L },
      P = { ...L },
      { data: R, error: G } = await (_ === "otp-reset"
        ? l
          ? Ve.codesMail(O)
          : Ve.publicCodesMail(O)
        : g
        ? Ve.signUp(P, g)
        : Ve.publicCodesMail(O));
    R && (Re.send("toast", "info", { message: n(se.Verification) }), S()),
      G && Re.send("toast", "error", G);
  }
  function A() {
    m && clearInterval(m), D(), i("close");
  }
  function D() {
    t(1, (r = "")),
      t(2, (o = "")),
      (v = null),
      (p = null),
      (_ = null),
      t(3, (c = null)),
      t(4, (u = 60));
  }
  return (
    (s.$$set = (L) => {
      "LG" in L && t(0, (n = L.LG)),
        "emailData" in L && t(9, (a = L.emailData));
    }),
    [n, r, o, c, u, I, T, C, A, a]
  );
}
let Oo = class extends Ie {
  constructor(e) {
    super(), Te(this, e, Ro, Lo, Ce, { LG: 0, emailData: 9 });
  }
};
function No(s) {
  let e,
    t = s[0](se.SendAgain) + "",
    l,
    n,
    a;
  return {
    c() {
      (e = b("span")), (l = H(t)), this.h();
    },
    l(i) {
      e = E(i, "SPAN", { class: !0 });
      var r = w(e);
      (l = F(r, t)), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "f14 lh22 cp ml4 BLUE ");
    },
    m(i, r) {
      B(i, e, r), d(e, l), n || ((a = ee(e, "click", s[6])), (n = !0));
    },
    p(i, r) {
      r & 1 && t !== (t = i[0](se.SendAgain) + "") && te(l, t);
    },
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function Vo(s) {
  let e, t, l;
  return {
    c() {
      (e = b("span")), (t = H(s[3])), (l = H("s")), this.h();
    },
    l(n) {
      e = E(n, "SPAN", { class: !0 });
      var a = w(e);
      (t = F(a, s[3])), (l = F(a, "s")), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "default");
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(e, l);
    },
    p(n, a) {
      a & 8 && te(t, n[3]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function Uo(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[0](se.Back) + "",
    c,
    u,
    m,
    _,
    v = s[0](se.EmailVerification) + "",
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A = s[0](se.PleaseEnterYourEmail) + "",
    D,
    L,
    O,
    P,
    R,
    G,
    N = s[0](se.MakeSure) + "",
    V,
    Y,
    z,
    x,
    ne,
    ie;
  (P = new Wt({ props: { status: s[1], explain: s[2] } })),
    P.$on("change", s[4]),
    P.$on("input", s[5]);
  function ue(ae, le) {
    return ae[3] > 0 ? Vo : No;
  }
  let re = ue(s),
    Q = re(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("i")),
        (a = H("")),
        (i = U()),
        (r = b("span")),
        (c = H(o)),
        (u = U()),
        (m = b("div")),
        (_ = b("div")),
        (p = H(v)),
        (g = U()),
        (k = b("div")),
        (I = b("img")),
        (S = U()),
        (C = b("div")),
        (D = H(A)),
        (L = U()),
        (O = b("div")),
        j(P.$$.fragment),
        (R = U()),
        (G = b("div")),
        (V = H(N)),
        (Y = U()),
        (z = b("div")),
        Q.c(),
        this.h();
    },
    l(ae) {
      e = E(ae, "DIV", { class: !0 });
      var le = w(e);
      t = E(le, "DIV", { class: !0 });
      var oe = w(t);
      l = E(oe, "DIV", { class: !0 });
      var ce = w(l);
      n = E(ce, "I", { class: !0 });
      var ke = w(n);
      (a = F(ke, "")),
        ke.forEach(h),
        ce.forEach(h),
        (i = M(oe)),
        (r = E(oe, "SPAN", { class: !0 }));
      var Pe = w(r);
      (c = F(Pe, o)),
        Pe.forEach(h),
        oe.forEach(h),
        (u = M(le)),
        (m = E(le, "DIV", { class: !0 }));
      var Ae = w(m);
      _ = E(Ae, "DIV", { class: !0 });
      var pe = w(_);
      (p = F(pe, v)),
        pe.forEach(h),
        (g = M(Ae)),
        (k = E(Ae, "DIV", { class: !0 }));
      var fe = w(k);
      (I = E(fe, "IMG", { class: !0, src: !0, alt: !0 })),
        fe.forEach(h),
        (S = M(Ae)),
        (C = E(Ae, "DIV", { class: !0 }));
      var he = w(C);
      (D = F(he, A)),
        he.forEach(h),
        (L = M(Ae)),
        (O = E(Ae, "DIV", { class: !0 }));
      var de = w(O);
      K(P.$$.fragment, de),
        de.forEach(h),
        (R = M(Ae)),
        (G = E(Ae, "DIV", { class: !0 }));
      var _e = w(G);
      (V = F(_e, N)),
        _e.forEach(h),
        (Y = M(Ae)),
        (z = E(Ae, "DIV", { class: !0 }));
      var De = w(z);
      Q.l(De), De.forEach(h), Ae.forEach(h), le.forEach(h), this.h();
    },
    h() {
      f(n, "class", "iconfont BLUE svelte-itqe4i"),
        f(l, "class", "arrow svelte-itqe4i"),
        f(r, "class", "BLUE ml10"),
        f(t, "class", "df aic cp"),
        f(_, "class", "title svelte-itqe4i"),
        f(I, "class", "email-gif svelte-itqe4i"),
        Se(I.src, (T = rt.REGISTER_LANDING_PAGE_EMAIL_GIF)) || f(I, "src", T),
        f(I, "alt", "email"),
        f(k, "class", "mt20 tc"),
        f(C, "class", "sub-title T4 svelte-itqe4i"),
        f(O, "class", "code mt16 svelte-itqe4i"),
        f(G, "class", "mt16 T3"),
        f(z, "class", "send mt10 BLUE tc"),
        f(m, "class", "form"),
        f(e, "class", "wrap svelte-itqe4i");
    },
    m(ae, le) {
      B(ae, e, le),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(t, i),
        d(t, r),
        d(r, c),
        d(e, u),
        d(e, m),
        d(m, _),
        d(_, p),
        d(m, g),
        d(m, k),
        d(k, I),
        d(m, S),
        d(m, C),
        d(C, D),
        d(m, L),
        d(m, O),
        q(P, O, null),
        d(m, R),
        d(m, G),
        d(G, V),
        d(m, Y),
        d(m, z),
        Q.m(z, null),
        (x = !0),
        ne || ((ie = ee(t, "click", s[7])), (ne = !0));
    },
    p(ae, le) {
      (!x || le & 1) && o !== (o = ae[0](se.Back) + "") && te(c, o),
        (!x || le & 1) &&
          v !== (v = ae[0](se.EmailVerification) + "") &&
          te(p, v),
        (!x || le & 1) &&
          A !== (A = ae[0](se.PleaseEnterYourEmail) + "") &&
          te(D, A);
      const oe = {};
      le & 2 && (oe.status = ae[1]),
        le & 4 && (oe.explain = ae[2]),
        P.$set(oe),
        (!x || le & 1) && N !== (N = ae[0](se.MakeSure) + "") && te(V, N),
        re === (re = ue(ae)) && Q
          ? Q.p(ae, le)
          : (Q.d(1), (Q = re(ae)), Q && (Q.c(), Q.m(z, null)));
    },
    i(ae) {
      x || ($(P.$$.fragment, ae), (x = !0));
    },
    o(ae) {
      y(P.$$.fragment, ae), (x = !1);
    },
    d(ae) {
      ae && h(e), X(P), Q.d(), (ne = !1), ie();
    },
  };
}
function Mo(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [Uo] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 32783 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function $o(s, e, t) {
  let { LG: l = null } = e,
    { emailData: n = null } = e;
  const a = Qe();
  let i = "",
    r = "",
    o = 60,
    c = null,
    u = null,
    m = null;
  Be(() => {
    (c = n.type),
      (u = n.context),
      (m = n.callback),
      setTimeout(() => {
        g();
      }, 0);
  });
  function _(T) {
    const S = T.detail.value;
    t(1, (i = "loading")),
      m &&
        m(
          S,
          ({ code: A, message: D }) => {
            if (A === 0) {
              a("close"), k(), t(1, (i = "success"));
              return;
            }
            t(1, (i = "fail"));
            const L = At[A];
            t(2, (r = L ? l(L) : D));
          },
          u
        );
  }
  function v() {
    t(1, (i = "")), t(2, (r = ""));
  }
  function p() {
    const T = Date.now() + 6e4;
    localStorage.setItem("count_down_mail", String(T)), t(3, (o = 60));
    const S = setInterval(() => {
      const C = localStorage.getItem("count_down_mail") || "0",
        A = Date.now();
      t(3, (o = Math.floor((Number(C) - A) / 1e3))), o < 0 && clearInterval(S);
    }, 500);
  }
  async function g() {
    const T = { type: c },
      { data: S, error: C } = await Ve.codesMail(T);
    S && (Re.send("toast", "info", { message: l(se.Verification) }), p()),
      C && Re.send("toast", "error", C);
  }
  function k() {
    I(), a("close");
  }
  function I() {
    t(1, (i = "")),
      t(2, (r = "")),
      (u = null),
      (m = null),
      (c = null),
      t(3, (o = 60));
  }
  return (
    (s.$$set = (T) => {
      "LG" in T && t(0, (l = T.LG)),
        "emailData" in T && t(8, (n = T.emailData));
    }),
    [l, i, r, o, _, v, g, k, n]
  );
}
class Go extends Ie {
  constructor(e) {
    super(), Te(this, e, $o, Mo, Ce, { LG: 0, emailData: 8 });
  }
}
function Bo(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[0](se.Back) + "",
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I = s[0](se.GoogleVerification) + "",
    T,
    S,
    C,
    A = s[0](se.PleaseEnterGoogle) + "",
    D,
    L,
    O,
    P,
    R,
    G,
    N = s[0](se.SecurityVerificationUnavailable) + "",
    V,
    Y,
    z,
    x;
  return (
    (P = new Wt({
      props: {
        class: "sidebar-verification-code",
        status: s[1],
        explain: s[2],
      },
    })),
    P.$on("change", s[3]),
    P.$on("input", s[4]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (n = b("i")),
          (a = H("")),
          (i = U()),
          (r = b("span")),
          (c = H(o)),
          (u = U()),
          (m = b("div")),
          (_ = b("div")),
          (v = b("img")),
          (g = U()),
          (k = b("div")),
          (T = H(I)),
          (S = U()),
          (C = b("div")),
          (D = H(A)),
          (L = U()),
          (O = b("div")),
          j(P.$$.fragment),
          (R = U()),
          (G = b("div")),
          (V = H(N)),
          this.h();
      },
      l(ne) {
        e = E(ne, "DIV", { class: !0 });
        var ie = w(e);
        t = E(ie, "DIV", { class: !0 });
        var ue = w(t);
        l = E(ue, "DIV", { class: !0 });
        var re = w(l);
        n = E(re, "I", { class: !0 });
        var Q = w(n);
        (a = F(Q, "")),
          Q.forEach(h),
          re.forEach(h),
          (i = M(ue)),
          (r = E(ue, "SPAN", { class: !0 }));
        var ae = w(r);
        (c = F(ae, o)),
          ae.forEach(h),
          ue.forEach(h),
          (u = M(ie)),
          (m = E(ie, "DIV", { class: !0 }));
        var le = w(m);
        _ = E(le, "DIV", { class: !0 });
        var oe = w(_);
        (v = E(oe, "IMG", { src: !0, alt: !0, class: !0 })),
          oe.forEach(h),
          (g = M(le)),
          (k = E(le, "DIV", { class: !0 }));
        var ce = w(k);
        (T = F(ce, I)),
          ce.forEach(h),
          (S = M(le)),
          (C = E(le, "DIV", { class: !0 }));
        var ke = w(C);
        (D = F(ke, A)),
          ke.forEach(h),
          (L = M(le)),
          (O = E(le, "DIV", { class: !0 }));
        var Pe = w(O);
        K(P.$$.fragment, Pe),
          Pe.forEach(h),
          (R = M(le)),
          (G = E(le, "DIV", { class: !0 }));
        var Ae = w(G);
        (V = F(Ae, N)), Ae.forEach(h), le.forEach(h), ie.forEach(h), this.h();
      },
      h() {
        f(n, "class", "iconfont BLUE svelte-1oro2zw"),
          f(l, "class", "arrow svelte-1oro2zw"),
          f(r, "class", "BLUE ml10"),
          f(t, "class", "df aic cp"),
          Se(
            v.src,
            (p =
              "https://static.phemex.com/pubimg/60b8b5093c3731e9abc40e6bc4ba21b750a5325fca413793122a8e0ebbcdbd3d.png")
          ) || f(v, "src", p),
          f(v, "alt", "google-coin"),
          f(v, "class", "svelte-1oro2zw"),
          f(_, "class", "coin svelte-1oro2zw"),
          f(k, "class", "title svelte-1oro2zw"),
          f(C, "class", "sub-title T4 svelte-1oro2zw"),
          f(O, "class", "code mt16 svelte-1oro2zw"),
          f(G, "class", "mt40 tc cp BLUE"),
          f(m, "class", "form"),
          f(e, "class", "wrap svelte-1oro2zw");
      },
      m(ne, ie) {
        B(ne, e, ie),
          d(e, t),
          d(t, l),
          d(l, n),
          d(n, a),
          d(t, i),
          d(t, r),
          d(r, c),
          d(e, u),
          d(e, m),
          d(m, _),
          d(_, v),
          d(m, g),
          d(m, k),
          d(k, T),
          d(m, S),
          d(m, C),
          d(C, D),
          d(m, L),
          d(m, O),
          q(P, O, null),
          d(m, R),
          d(m, G),
          d(G, V),
          (Y = !0),
          z || ((x = [ee(t, "click", s[5]), ee(G, "click", s[6])]), (z = !0));
      },
      p(ne, ie) {
        (!Y || ie & 1) && o !== (o = ne[0](se.Back) + "") && te(c, o),
          (!Y || ie & 1) &&
            I !== (I = ne[0](se.GoogleVerification) + "") &&
            te(T, I),
          (!Y || ie & 1) &&
            A !== (A = ne[0](se.PleaseEnterGoogle) + "") &&
            te(D, A);
        const ue = {};
        ie & 2 && (ue.status = ne[1]),
          ie & 4 && (ue.explain = ne[2]),
          P.$set(ue),
          (!Y || ie & 1) &&
            N !== (N = ne[0](se.SecurityVerificationUnavailable) + "") &&
            te(V, N);
      },
      i(ne) {
        Y || ($(P.$$.fragment, ne), (Y = !0));
      },
      o(ne) {
        y(P.$$.fragment, ne), (Y = !1);
      },
      d(ne) {
        ne && h(e), X(P), (z = !1), xe(x);
      },
    }
  );
}
function yo(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [Bo] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 8199 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Wo(s, e, t) {
  let l;
  ge(s, We, (k) => t(10, (l = k)));
  let { LG: n = null } = e,
    { googleData: a = null } = e;
  const i = Qe();
  let r = "",
    o = "",
    c = null,
    u = null;
  Be(() => {
    t(1, (r = "")), t(2, (o = "")), (c = a.context), (u = a.callback);
  });
  function m(k) {
    const I = k.detail.value;
    t(1, (r = "loading")),
      u &&
        u(
          I,
          ({ code: S, message: C }) => {
            if (S === 0) {
              v(), t(1, (r = "success"));
              return;
            }
            t(1, (r = "fail"));
            const A = At[S];
            t(2, (o = A ? n(A) : C));
          },
          c
        );
  }
  function _() {
    t(1, (r = "")), t(2, (o = ""));
  }
  function v() {
    p(), i("close");
  }
  function p() {
    t(1, (r = "")), t(2, (o = "")), (c = null), (u = null);
  }
  function g() {
    El.set({ email: c.email, code: c.code }),
      wl.next({
        balanceType: 0,
        resetRecordId: 0,
        resetRecordStatus: 0,
        remain_count: 0,
        code: 0,
        answerStatus: 0,
      }),
      i("close"),
      _t(l(W.RESET_SECURITY.pathname));
  }
  return (
    (s.$$set = (k) => {
      "LG" in k && t(0, (n = k.LG)),
        "googleData" in k && t(7, (a = k.googleData));
    }),
    [n, r, o, m, _, v, g, a]
  );
}
let Yo = class extends Ie {
  constructor(e) {
    super(), Te(this, e, Wo, yo, Ce, { LG: 0, googleData: 7 });
  }
};
function Ho(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ml12 ipt f1 svelte-1bx6re5"),
        f(e, "type", "password"),
        f(e, "placeholder", (t = s[0](se.NewPassword))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[1]),
        l ||
          ((n = [
            ee(e, "input", s[16]),
            ee(e, "keypress", s[10]),
            ee(e, "blur", s[13]),
          ]),
          (l = !0));
    },
    p(a, i) {
      i & 1 && t !== (t = a[0](se.NewPassword)) && f(e, "placeholder", t),
        i & 8 && (e.disabled = a[3]),
        i & 2 && e.value !== a[1] && ze(e, a[1]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function Fo(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ml12 ipt f1 svelte-1bx6re5"),
        f(e, "type", "text"),
        f(e, "placeholder", (t = s[0](se.NewPassword))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[1]),
        l ||
          ((n = [
            ee(e, "input", s[15]),
            ee(e, "keypress", s[10]),
            ee(e, "blur", s[13]),
          ]),
          (l = !0));
    },
    p(a, i) {
      i & 1 && t !== (t = a[0](se.NewPassword)) && f(e, "placeholder", t),
        i & 8 && (e.disabled = a[3]),
        i & 2 && e.value !== a[1] && ze(e, a[1]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function Ss(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[4])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[4])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "correct mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 16 && te(t, l[4]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function zo(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ml12 ipt f1 svelte-1bx6re5"),
        f(e, "type", "password"),
        f(e, "placeholder", (t = s[0](se.ConfirmNewPassword))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[2]),
        l ||
          ((n = [ee(e, "input", s[18]), ee(e, "keypress", s[10])]), (l = !0));
    },
    p(a, i) {
      i & 1 &&
        t !== (t = a[0](se.ConfirmNewPassword)) &&
        f(e, "placeholder", t),
        i & 8 && (e.disabled = a[3]),
        i & 4 && e.value !== a[2] && ze(e, a[2]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function jo(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("input")), this.h();
    },
    l(a) {
      (e = E(a, "INPUT", { class: !0, type: !0, placeholder: !0 })), this.h();
    },
    h() {
      f(e, "class", "autofill ml12 ipt f1 svelte-1bx6re5"),
        f(e, "type", "text"),
        f(e, "placeholder", (t = s[0](se.ConfirmNewPassword))),
        (e.disabled = s[3]);
    },
    m(a, i) {
      B(a, e, i),
        ze(e, s[2]),
        l ||
          ((n = [ee(e, "input", s[17]), ee(e, "keypress", s[10])]), (l = !0));
    },
    p(a, i) {
      i & 1 &&
        t !== (t = a[0](se.ConfirmNewPassword)) &&
        f(e, "placeholder", t),
        i & 8 && (e.disabled = a[3]),
        i & 4 && e.value !== a[2] && ze(e, a[2]);
    },
    d(a) {
      a && h(e), (l = !1), xe(n);
    },
  };
}
function Ps(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[5])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[5])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "correct mt10");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 32 && te(t, l[5]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function qo(s) {
  let e = s[0](se.Continue) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](se.Continue) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Xo(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[0](se.NewPassword) + "",
    c,
    u,
    m,
    _ = s[0](se.EnterYourNew) + "",
    v,
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A = s[6] ? "&#xe66a;" : "&#xe669;",
    D,
    L,
    O,
    P,
    R,
    G,
    N,
    V,
    Y = s[7] ? "&#xe66a;" : "&#xe669;",
    z,
    x,
    ne,
    ie,
    ue,
    re,
    Q;
  function ae(fe, he) {
    return fe[6] ? Fo : Ho;
  }
  let le = ae(s),
    oe = le(s),
    ce = s[4] && Ss(s);
  function ke(fe, he) {
    return fe[7] ? jo : zo;
  }
  let Pe = ke(s),
    Ae = Pe(s),
    pe = s[5] && Ps(s);
  return (
    (ie = new ft({
      props: {
        minWidth: "100%",
        type: "primary",
        loading: s[3],
        $$slots: { default: [qo] },
        $$scope: { ctx: s },
      },
    })),
    ie.$on("click", s[9]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          (i = b("div")),
          (r = b("div")),
          (c = H(o)),
          (u = U()),
          (m = b("div")),
          (v = H(_)),
          (p = U()),
          (g = b("div")),
          (k = b("i")),
          (I = H("")),
          (T = U()),
          oe.c(),
          (S = U()),
          (C = b("i")),
          (D = U()),
          ce && ce.c(),
          (L = U()),
          (O = b("div")),
          (P = b("i")),
          (R = H("")),
          (G = U()),
          Ae.c(),
          (N = U()),
          (V = b("i")),
          (z = U()),
          pe && pe.c(),
          (x = U()),
          (ne = b("div")),
          j(ie.$$.fragment),
          this.h();
      },
      l(fe) {
        e = E(fe, "DIV", { class: !0 });
        var he = w(e);
        t = E(he, "DIV", { class: !0 });
        var de = w(t);
        l = E(de, "I", { class: !0 });
        var _e = w(l);
        (n = F(_e, "")),
          _e.forEach(h),
          de.forEach(h),
          (a = M(he)),
          (i = E(he, "DIV", { class: !0 }));
        var De = w(i);
        r = E(De, "DIV", { class: !0 });
        var qe = w(r);
        (c = F(qe, o)),
          qe.forEach(h),
          (u = M(De)),
          (m = E(De, "DIV", { class: !0 }));
        var ve = w(m);
        (v = F(ve, _)),
          ve.forEach(h),
          (p = M(De)),
          (g = E(De, "DIV", { class: !0 }));
        var be = w(g);
        k = E(be, "I", { class: !0 });
        var we = w(k);
        (I = F(we, "")),
          we.forEach(h),
          (T = M(be)),
          oe.l(be),
          (S = M(be)),
          (C = E(be, "I", { class: !0 }));
        var Ye = w(C);
        Ye.forEach(h),
          be.forEach(h),
          (D = M(De)),
          ce && ce.l(De),
          (L = M(De)),
          (O = E(De, "DIV", { class: !0 }));
        var Ne = w(O);
        P = E(Ne, "I", { class: !0 });
        var $e = w(P);
        (R = F($e, "")),
          $e.forEach(h),
          (G = M(Ne)),
          Ae.l(Ne),
          (N = M(Ne)),
          (V = E(Ne, "I", { class: !0 }));
        var Ee = w(V);
        Ee.forEach(h),
          Ne.forEach(h),
          (z = M(De)),
          pe && pe.l(De),
          (x = M(De)),
          (ne = E(De, "DIV", { class: !0 }));
        var Le = w(ne);
        K(ie.$$.fragment, Le),
          Le.forEach(h),
          De.forEach(h),
          he.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont f30 T4 svelte-1bx6re5"),
          f(t, "class", "close-btn df aic jcc cp svelte-1bx6re5"),
          f(r, "class", "title svelte-1bx6re5"),
          f(m, "class", "sub-title T4 svelte-1bx6re5"),
          f(k, "class", "iconfont T4"),
          f(C, "class", "iconfont T4 cp"),
          f(g, "class", "ipt-box df aic mt20 svelte-1bx6re5"),
          Z(g, "disabled", s[3]),
          Z(g, "error", s[4]),
          f(P, "class", "iconfont T4"),
          f(V, "class", "iconfont T4 cp"),
          f(O, "class", "ipt-box df aic mt16 svelte-1bx6re5"),
          Z(O, "disabled", s[3]),
          Z(O, "error", s[5]),
          f(ne, "class", "mt50 svelte-1bx6re5"),
          f(i, "class", "form"),
          f(e, "class", "wrap pr svelte-1bx6re5");
      },
      m(fe, he) {
        B(fe, e, he),
          d(e, t),
          d(t, l),
          d(l, n),
          d(e, a),
          d(e, i),
          d(i, r),
          d(r, c),
          d(i, u),
          d(i, m),
          d(m, v),
          d(i, p),
          d(i, g),
          d(g, k),
          d(k, I),
          d(g, T),
          oe.m(g, null),
          d(g, S),
          d(g, C),
          (C.innerHTML = A),
          d(i, D),
          ce && ce.m(i, null),
          d(i, L),
          d(i, O),
          d(O, P),
          d(P, R),
          d(O, G),
          Ae.m(O, null),
          d(O, N),
          d(O, V),
          (V.innerHTML = Y),
          d(i, z),
          pe && pe.m(i, null),
          d(i, x),
          d(i, ne),
          q(ie, ne, null),
          (ue = !0),
          re ||
            ((Q = [
              ee(t, "click", s[8]),
              ee(C, "click", s[11]),
              ee(V, "click", s[12]),
            ]),
            (re = !0));
      },
      p(fe, he) {
        (!ue || he & 1) && o !== (o = fe[0](se.NewPassword) + "") && te(c, o),
          (!ue || he & 1) &&
            _ !== (_ = fe[0](se.EnterYourNew) + "") &&
            te(v, _),
          le === (le = ae(fe)) && oe
            ? oe.p(fe, he)
            : (oe.d(1), (oe = le(fe)), oe && (oe.c(), oe.m(g, S))),
          (!ue || he & 64) &&
            A !== (A = fe[6] ? "&#xe66a;" : "&#xe669;") &&
            (C.innerHTML = A),
          (!ue || he & 8) && Z(g, "disabled", fe[3]),
          (!ue || he & 16) && Z(g, "error", fe[4]),
          fe[4]
            ? ce
              ? ce.p(fe, he)
              : ((ce = Ss(fe)), ce.c(), ce.m(i, L))
            : ce && (ce.d(1), (ce = null)),
          Pe === (Pe = ke(fe)) && Ae
            ? Ae.p(fe, he)
            : (Ae.d(1), (Ae = Pe(fe)), Ae && (Ae.c(), Ae.m(O, N))),
          (!ue || he & 128) &&
            Y !== (Y = fe[7] ? "&#xe66a;" : "&#xe669;") &&
            (V.innerHTML = Y),
          (!ue || he & 8) && Z(O, "disabled", fe[3]),
          (!ue || he & 32) && Z(O, "error", fe[5]),
          fe[5]
            ? pe
              ? pe.p(fe, he)
              : ((pe = Ps(fe)), pe.c(), pe.m(i, x))
            : pe && (pe.d(1), (pe = null));
        const de = {};
        he & 8 && (de.loading = fe[3]),
          he & 4194305 && (de.$$scope = { dirty: he, ctx: fe }),
          ie.$set(de);
      },
      i(fe) {
        ue || ($(ie.$$.fragment, fe), (ue = !0));
      },
      o(fe) {
        y(ie.$$.fragment, fe), (ue = !1);
      },
      d(fe) {
        fe && h(e),
          oe.d(),
          ce && ce.d(),
          Ae.d(),
          pe && pe.d(),
          X(ie),
          (re = !1),
          xe(Q);
      },
    }
  );
}
function Ko(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [Xo] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 4194559 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ls(s, e, t) {
  return s === null || Nt.PASSWORD.test(s)
    ? null
    : e(s ? t.PasswordError : t.NoPasswordError);
}
function Qo(s, e, t, l) {
  return s === null
    ? null
    : s
    ? s !== e
      ? t(l.RePasswordError)
      : null
    : t(l.NoPasswordError);
}
function Jo(s, e, t) {
  let { LG: l = null } = e,
    { newPasswordData: n = null } = e;
  const a = Qe();
  let i = !1,
    r = null,
    o = null,
    c = null,
    u = "",
    m = null,
    _ = !1,
    v = !1;
  Be(() => {
    u = n.code;
  });
  function p() {
    S(), a("close");
  }
  async function g() {
    if ((t(1, (r = r || "")), t(2, (o = o || "")), r && o && !c && !m)) {
      t(3, (i = !0));
      const P = { code: u },
        R = { password: r },
        { data: G, error: N } = await Ve.confirmResetPassword(P, R);
      G && (Re.send("toast", "info", { message: l(se.PasswordHasReset) }), p()),
        N && Re.send("toast", "error", N),
        t(3, (i = !1));
    }
  }
  function k(P) {
    P.keyCode === 13 && g();
  }
  function I() {
    t(6, (_ = !_));
  }
  function T() {
    t(7, (v = !v));
  }
  function S() {
    t(3, (i = !1)),
      t(1, (r = null)),
      t(2, (o = null)),
      t(4, (c = null)),
      (u = "");
  }
  function C() {
    t(4, (c = Ls(r, l, se)));
  }
  function A() {
    (r = this.value), t(1, r);
  }
  function D() {
    (r = this.value), t(1, r);
  }
  function L() {
    (o = this.value), t(2, o);
  }
  function O() {
    (o = this.value), t(2, o);
  }
  return (
    (s.$$set = (P) => {
      "LG" in P && t(0, (l = P.LG)),
        "newPasswordData" in P && t(14, (n = P.newPasswordData));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 3 && t(4, (c = Ls(r, l, se))),
        s.$$.dirty & 7 && t(5, (m = Qo(o, r, l, se)));
    }),
    [l, r, o, i, c, m, _, v, p, g, k, I, T, C, n, A, D, L, O]
  );
}
class Zo extends Ie {
  constructor(e) {
    super(), Te(this, e, Jo, Ko, Ce, { LG: 0, newPasswordData: 14 });
  }
}
function Rs(s) {
  let e,
    t,
    l = (s[2] || "") + "",
    n,
    a,
    i,
    r,
    o = s[1].day + "",
    c,
    u,
    m,
    _,
    v,
    p,
    g = s[1].hour + "",
    k,
    I,
    T,
    S,
    C,
    A,
    D = s[1].min + "",
    L,
    O,
    P,
    R,
    G,
    N,
    V = s[1].second + "",
    Y,
    z,
    x,
    ne;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (n = H(l)),
        (a = U()),
        (i = b("div")),
        (r = b("div")),
        (c = H(o)),
        (u = U()),
        (m = b("span")),
        (_ = H("D")),
        (v = U()),
        (p = b("div")),
        (k = H(g)),
        (I = U()),
        (T = b("span")),
        (S = H("H")),
        (C = U()),
        (A = b("div")),
        (L = H(D)),
        (O = U()),
        (P = b("span")),
        (R = H("M")),
        (G = U()),
        (N = b("div")),
        (Y = H(V)),
        (z = U()),
        (x = b("span")),
        (ne = H("S")),
        this.h();
    },
    l(ie) {
      e = E(ie, "DIV", { class: !0 });
      var ue = w(e);
      t = E(ue, "DIV", { class: !0 });
      var re = w(t);
      (n = F(re, l)),
        re.forEach(h),
        (a = M(ue)),
        (i = E(ue, "DIV", { class: !0 }));
      var Q = w(i);
      r = E(Q, "DIV", { class: !0 });
      var ae = w(r);
      (c = F(ae, o)),
        ae.forEach(h),
        (u = M(Q)),
        (m = E(Q, "SPAN", { class: !0 }));
      var le = w(m);
      (_ = F(le, "D")),
        le.forEach(h),
        (v = M(Q)),
        (p = E(Q, "DIV", { class: !0 }));
      var oe = w(p);
      (k = F(oe, g)),
        oe.forEach(h),
        (I = M(Q)),
        (T = E(Q, "SPAN", { class: !0 }));
      var ce = w(T);
      (S = F(ce, "H")),
        ce.forEach(h),
        (C = M(Q)),
        (A = E(Q, "DIV", { class: !0 }));
      var ke = w(A);
      (L = F(ke, D)),
        ke.forEach(h),
        (O = M(Q)),
        (P = E(Q, "SPAN", { class: !0 }));
      var Pe = w(P);
      (R = F(Pe, "M")),
        Pe.forEach(h),
        (G = M(Q)),
        (N = E(Q, "DIV", { class: !0 }));
      var Ae = w(N);
      (Y = F(Ae, V)),
        Ae.forEach(h),
        (z = M(Q)),
        (x = E(Q, "SPAN", { class: !0 }));
      var pe = w(x);
      (ne = F(pe, "S")), pe.forEach(h), Q.forEach(h), ue.forEach(h), this.h();
    },
    h() {
      f(t, "class", "label f16 cf svelte-1e2b2z2"),
        f(r, "class", "number lh40 tc f24 svelte-1e2b2z2"),
        f(m, "class", "ml4 mr12"),
        f(p, "class", "number lh40 tc f24 svelte-1e2b2z2"),
        f(T, "class", "ml4 mr12"),
        f(A, "class", "number lh40 tc f24 svelte-1e2b2z2"),
        f(P, "class", "ml4 mr12"),
        f(N, "class", "number lh40 tc f24 svelte-1e2b2z2"),
        f(x, "class", "ml4 mr12"),
        f(i, "class", "df aife"),
        f(e, "class", "count-down svelte-1e2b2z2");
    },
    m(ie, ue) {
      B(ie, e, ue),
        d(e, t),
        d(t, n),
        d(e, a),
        d(e, i),
        d(i, r),
        d(r, c),
        d(i, u),
        d(i, m),
        d(m, _),
        d(i, v),
        d(i, p),
        d(p, k),
        d(i, I),
        d(i, T),
        d(T, S),
        d(i, C),
        d(i, A),
        d(A, L),
        d(i, O),
        d(i, P),
        d(P, R),
        d(i, G),
        d(i, N),
        d(N, Y),
        d(i, z),
        d(i, x),
        d(x, ne);
    },
    p(ie, ue) {
      ue & 4 && l !== (l = (ie[2] || "") + "") && te(n, l),
        ue & 2 && o !== (o = ie[1].day + "") && te(c, o),
        ue & 2 && g !== (g = ie[1].hour + "") && te(k, g),
        ue & 2 && D !== (D = ie[1].min + "") && te(L, D),
        ue & 2 && V !== (V = ie[1].second + "") && te(Y, V);
    },
    d(ie) {
      ie && h(e);
    },
  };
}
function Os(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, alt: !0, width: !0, src: !0 })), this.h();
    },
    h() {
      f(e, "class", "mt40"),
        f(e, "alt", "activity"),
        f(e, "width", "100%"),
        Se(e.src, (t = ut.STATIC_URL + s[0].backgroundUrl)) || f(e, "src", t);
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n & 1 &&
        !Se(e.src, (t = ut.STATIC_URL + l[0].backgroundUrl)) &&
        f(e, "src", t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function xo(s) {
  let e,
    t,
    l = (s[0].title || "") + "",
    n,
    a,
    i,
    r = (s[0].desc || "") + "",
    o,
    c,
    u,
    m = s[1] && Rs(s),
    _ = s[0].backgroundUrl && Os(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (n = H(l)),
        (a = U()),
        (i = b("div")),
        (o = H(r)),
        (c = U()),
        m && m.c(),
        (u = U()),
        _ && _.c(),
        this.h();
    },
    l(v) {
      e = E(v, "DIV", { class: !0 });
      var p = w(e);
      t = E(p, "DIV", { class: !0 });
      var g = w(t);
      (n = F(g, l)), g.forEach(h), (a = M(p)), (i = E(p, "DIV", { class: !0 }));
      var k = w(i);
      (o = F(k, r)),
        k.forEach(h),
        (c = M(p)),
        m && m.l(p),
        (u = M(p)),
        _ && _.l(p),
        p.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "title f32 fw3 svelte-1e2b2z2"),
        f(i, "class", "sub-title f16 T4"),
        f(e, "class", "activity cf svelte-1e2b2z2");
    },
    m(v, p) {
      B(v, e, p),
        d(e, t),
        d(t, n),
        d(e, a),
        d(e, i),
        d(i, o),
        d(e, c),
        m && m.m(e, null),
        d(e, u),
        _ && _.m(e, null);
    },
    p(v, [p]) {
      p & 1 && l !== (l = (v[0].title || "") + "") && te(n, l),
        p & 1 && r !== (r = (v[0].desc || "") + "") && te(o, r),
        v[1]
          ? m
            ? m.p(v, p)
            : ((m = Rs(v)), m.c(), m.m(e, u))
          : m && (m.d(1), (m = null)),
        v[0].backgroundUrl
          ? _
            ? _.p(v, p)
            : ((_ = Os(v)), _.c(), _.m(e, null))
          : _ && (_.d(1), (_ = null));
    },
    i: me,
    o: me,
    d(v) {
      v && h(e), m && m.d(), _ && _.d();
    },
  };
}
function ec(s, e, t) {
  let l, n, a;
  const i = je("LG"),
    r = qa([$l, Xa(1e3)]).pipe(
      Tt(([{ campaignInfo: _ }]) => _),
      dl((_) => _ && _.endTime > Date.now())
    ),
    o = r.pipe(
      Tt(({ beginTime: _ }) => {
        const v = Date.now();
        return _ > v ? i(He.EventStartIn) : i(He.EventEndsIn);
      })
    );
  ge(s, o, (_) => t(2, (a = _)));
  const c = r.pipe(
    dl(({ endTime: _ }) => _ > Date.now()),
    Tt((_) => {
      const { endTime: v, beginTime: p } = _,
        g = Date.now();
      let k = (p > g ? p : v) - g;
      const I = ~~(k / (1e3 * 60 * 60 * 24));
      k = k - I * (1e3 * 60 * 60 * 24);
      const T = ~~(k / (1e3 * 60 * 60));
      k = k - T * (1e3 * 60 * 60);
      const S = ~~(k / (1e3 * 60));
      k = k - S * (1e3 * 60);
      const C = ~~(k / 1e3);
      return {
        day: Mt.pad(I),
        hour: Mt.pad(T),
        min: Mt.pad(S),
        second: Mt.pad(C),
      };
    })
  );
  ge(s, c, (_) => t(1, (n = _)));
  const u = $l.pipe(
    dl(({ pageInfo: _ }) => !!_),
    Tt(({ pageInfo: _ }) => m(_)),
    ha({})
  );
  ge(s, u, (_) => t(0, (l = _)));
  function m(_) {
    if (!_ || !Array.isArray(_)) return {};
    const v = Dl(vt),
      p = _.filter((g) => g.lan === v)[0] || {};
    return !p.content || !p.content[0] || !p.content[0].body
      ? {}
      : p.content[0].body;
  }
  return [l, n, a, o, c, u];
}
class Pl extends Ie {
  constructor(e) {
    super(), Te(this, e, ec, xo, Ce, {});
  }
}
const Ct = `${ut.STATIC_URL}/s/home/side-menu/`,
  It = {
    BUY_CRYPTO: Ct + "buy-crypto.png",
    CONTRACT: Ct + "contract.png",
    EARN: Ct + "earn.png",
    LANGUAGE: Ct + "language.png",
    LEARN: Ct + "learn.png",
    MARKETS: Ct + "markets.png",
    PROMOTION: Ct + "promotion.png",
    SIGNOUT: Ct + "signout.png",
    SPOT: Ct + "spot.png",
    WEB3: "https://img.phemex.com/v1/3e7ad4ba/header-web3-h5-icon.png",
  },
  tc = [
    W.HOME.pathname,
    W.ABOUT.pathname,
    W.ABOUT_BRAND_STYLE_GUIDE.pathname,
    W.ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE.pathname,
    W.ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE_AUDIT.pathname,
    W.BUY_CRYPTO.pathname,
    W.BUY_CRYPTO_PLACE_ORDER.pathname,
    W.BUY_CRYPTO_HOW_TO_BUY.pathname,
    W.DOWNLOAD.pathname,
    W.CONTRACT_WARS.pathname,
    W.EARN.pathname,
    W.EARN_HOME.pathname,
    W.BIG_CLIENT_DASHBOARD.pathname,
    W.TRADING_DEPOSIT_BONUS.pathname,
    W.DEPOSIT_DAZZLE_MDX.pathname,
    W.REGISTER_VERIFIED.pathname,
    W.OTC_LEGEND_TRADING.pathname,
    W.MO_TRADE_COMPETITION.pathname,
    W.BITSHIN_TRADE_COMPETITION.pathname,
    W.CRYPTO_CONVERTER.pathname,
    W.CRYPTO_TRADING_COMPETITION_1_ON_1.pathname,
    W.BONUS_CENTER.pathname,
    W.KYC_MYSTERY_BOX.pathname,
    W.STUDENT_FOUNDATION.pathname,
    W.CRYPTO_TRADING_REBATES.pathname,
    W.LAUNCHPAD.pathname,
    W.CRYPTO_COIN_FLIP.pathname,
    W.PREMIUM_ARCHIVED.pathname,
    W.REGISTER_VT1.pathname,
    W.BUY_CRYPTO_BUY_ETHEREUM.pathname,
    W.BUY_CRYPTO_BUY_XTZ.pathname,
    W.BUY_CRYPTO_BUY_ALGO.pathname,
    W.BUY_CRYPTO_BUY_AVAX.pathname,
    W.BUY_CRYPTO_BUY_LTC.pathname,
    W.BUY_CRYPTO_BUY_XLM.pathname,
    W.BUY_CRYPTO_BUY_USDC.pathname,
    W.BUY_CRYPTO_BUY_SAND.pathname,
    W.BUY_CRYPTO_BUY_ZEC.pathname,
    W.BUY_CRYPTO_BUY_MATIC.pathname,
    W.BUY_CRYPTO_BUY_TRX.pathname,
    W.BUY_CRYPTO_BUY_MANA.pathname,
    W.BUY_CRYPTO_BUY_LRC.pathname,
    W.BUY_CRYPTO_BUY_SOL.pathname,
    W.BUY_CRYPTO_BUY_DENT.pathname,
    W.BUY_CRYPTO_BUY_ADA.pathname,
    W.BUY_CRYPTO_BUY_DOT.pathname,
    W.BUY_CRYPTO_BUY_BCH.pathname,
    W.BUY_CRYPTO_BUY_BTC.pathname,
    W.BUY_CRYPTO_BUY_XRP.pathname,
    W.BUY_CRYPTO_BUY_SHIB.pathname,
    W.BUY_CRYPTO_BUY_DOGE.pathname,
    W.PREDICT_ETH_PRICE.pathname,
    W.COPY_TRADING_LIST.pathname,
    W.COPY_TRADING_DRAW.pathname,
    W.BECOME_A_TRADER.pathname,
    W.KOL_LANDING.pathname,
    W.KOL_LANDING_ACTIVITY.pathname,
    W.MARGIN_TRADING_COMPETITION.pathname,
    W.VIP_PROGRAM.pathname,
    W.SWAP_ETH.pathname,
    W.PT_ARENA_5.pathname,
    W.ACCOUNT_INVITE_FRIENDS.pathname,
    W.ACCOUNT_INVITE_FRIENDS_ENTRY.pathname,
    W.WORLD_CUP.pathname,
    W.DOWNLOAD_IOS_PRO.pathname,
    W.P2P_MERCHANT_APPLY.pathname,
    W.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname,
    W.FIAT_BUY_CRYPTO_BUY_PAYMENT_METHOD.pathname,
    W.FIAT_BUY_CRYPTO_BUY_CONFIRM.pathname,
    W.FIAT_BUY_CRYPTO_BUY_CARD.pathname,
    W.FIAT_BUY_CRYPTO_BUY_RESULT.pathname,
    W.FIAT_BUY_CRYPTO_SELL_CARD.pathname,
    W.FIAT_BUY_CRYPTO_SELL_PAYMENT_METHOD.pathname,
    W.FIAT_BUY_CRYPTO_SELL_CONFIRM.pathname,
    W.FIAT_BUY_CRYPTO_SELL_RESULT.pathname,
    W.FIAT_DEPOSIT.pathname,
    W.FIAT_DEPOSIT_TRANSFER_INFO.pathname,
    W.FIAT_WITHDRAW.pathname,
    W.FIAT_WITHDRAW_ORDER_CONFIRM.pathname,
    W.LEGEND_TRADING_SYNC_KYC.pathname,
    W.LEGEND_TRADING_BIND_CARD.pathname,
    W.FIAT_WITHDRAW_ORDER_RESULT.pathname,
    W.LEGEND_TRADING_MANAGE_CARD.pathname,
    W.XPT_MINING.pathname,
    W.BUY_CRYPTO_CARD_PLACE_ORDER.pathname,
    W.BUY_CRYPTO_CARD_PAY.pathname,
    W.BUY_CRYPTO_CARD_PAYMENT.pathname,
    W.BUY_CRYPTO_CARD_ORDER_SUCCESS.pathname,
    W.BUY_CRYPTO_CARD_ORDER_FAIL.pathname,
    W.BUY_CRYPTO_CARD_ORDER_CONFIRM.pathname,
    W.XPT_AIRDROP.pathname,
    W.BUY_CRYPTO_CARD_SELL_CONFIRM.pathname,
    W.BUY_CRYPTO_CARD_SELL_RESULT.pathname,
    W.STRATEGY_SQUARE.pathname,
    W.STRATEGY_DETAIL.pathname,
    W.XPT_AIRDROP.pathname,
    W.CEX_AIRDROP.pathname,
    W.DEX_AIRDROP.pathname,
    W.FTX_AIRDROP.pathname,
    W.FUTURE_GRIDS_TRADING_CONTEST.pathname,
  ],
  lc = (s) => ({}),
  Ns = (s) => ({ showChildMenu: s[12] }),
  sc = (s) => ({}),
  Vs = (s) => ({});
function Us(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont drop-arrow dib ml4 f12 svelte-1nd78pe");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Ms(s) {
  let e, t, l, n, a;
  const i = s[17].dropdown,
    r = lt(i, s, s[16], Ns),
    o = s[17].default,
    c = lt(o, s, s[16], null);
  return {
    c() {
      (e = b("div")), r && r.c(), (t = U()), c && c.c(), this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var m = w(e);
      r && r.l(m), (t = M(m)), c && c.l(m), m.forEach(h), this.h();
    },
    h() {
      f(e, "class", "auto-scroll svelte-1nd78pe");
    },
    m(u, m) {
      B(u, e, m), r && r.m(e, null), d(e, t), c && c.m(e, null), (a = !0);
    },
    p(u, m) {
      (s = u),
        r &&
          r.p &&
          (!a || m & 65536) &&
          st(r, i, s, s[16], a ? at(i, s[16], m, lc) : nt(s[16]), Ns),
        c &&
          c.p &&
          (!a || m & 65536) &&
          st(c, o, s, s[16], a ? at(o, s[16], m, null) : nt(s[16]), null);
    },
    i(u) {
      a ||
        ($(r, u),
        $(c, u),
        ht(() => {
          n && n.end(1), (l = Tl(e, el, { duration: $s, y: 30 })), l.start();
        }),
        (a = !0));
    },
    o(u) {
      y(r, u),
        y(c, u),
        l && l.invalidate(),
        (n = Cl(e, el, { duration: $s, y: 30 })),
        (a = !1);
    },
    d(u) {
      u && h(e), r && r.d(u), c && c.d(u), u && n && n.end();
    },
  };
}
function nc(s) {
  let e, t, l, n, a, i, r, o, c, u, m;
  const _ = s[17].trigger,
    v = lt(_, s, s[16], Vs);
  let p = !s[3] && Us(),
    g = (s[7] || s[1]) && Ms(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        v && v.c(),
        (l = U()),
        p && p.c(),
        (a = U()),
        (i = b("div")),
        g && g.c(),
        this.h();
    },
    l(k) {
      e = E(k, "DIV", { class: !0, style: !0 });
      var I = w(e);
      t = E(I, "DIV", { class: !0 });
      var T = w(t);
      v && v.l(T),
        (l = M(T)),
        p && p.l(T),
        T.forEach(h),
        (a = M(I)),
        (i = E(I, "DIV", { class: !0, style: !0, role: !0 }));
      var S = w(i);
      g && g.l(S), S.forEach(h), I.forEach(h), this.h();
    },
    h() {
      f(
        t,
        "class",
        (n = "tooltip-trigger df aic jcsb cp " + s[2] + " svelte-1nd78pe")
      ),
        f(i, "class", (r = "tooltip-container pa " + s[0] + " svelte-1nd78pe")),
        Je(i, "width", s[4]),
        f(i, "role", "tooltip"),
        f(
          e,
          "class",
          (o = "tooltip-wrap dib df aic jcsb " + s[0] + " svelte-1nd78pe")
        ),
        Je(e, "--hoverColor", s[6]),
        Je(e, "--color", s[5]);
    },
    m(k, I) {
      B(k, e, I),
        d(e, t),
        v && v.m(t, null),
        d(t, l),
        p && p.m(t, null),
        s[18](t),
        d(e, a),
        d(e, i),
        g && g.m(i, null),
        s[19](i),
        (c = !0),
        u ||
          ((m = [ee(t, "mouseenter", s[10]), ee(e, "mouseleave", s[11])]),
          (u = !0));
    },
    p(k, [I]) {
      v &&
        v.p &&
        (!c || I & 65536) &&
        st(v, _, k, k[16], c ? at(_, k[16], I, sc) : nt(k[16]), Vs),
        k[3]
          ? p && (p.d(1), (p = null))
          : p || ((p = Us()), p.c(), p.m(t, null)),
        (!c ||
          (I & 4 &&
            n !==
              (n =
                "tooltip-trigger df aic jcsb cp " +
                k[2] +
                " svelte-1nd78pe"))) &&
          f(t, "class", n),
        k[7] || k[1]
          ? g
            ? (g.p(k, I), I & 130 && $(g, 1))
            : ((g = Ms(k)), g.c(), $(g, 1), g.m(i, null))
          : g &&
            (Ue(),
            y(g, 1, 1, () => {
              g = null;
            }),
            Me()),
        (!c ||
          (I & 1 &&
            r !== (r = "tooltip-container pa " + k[0] + " svelte-1nd78pe"))) &&
          f(i, "class", r),
        (!c || I & 16) && Je(i, "width", k[4]),
        (!c ||
          (I & 1 &&
            o !==
              (o =
                "tooltip-wrap dib df aic jcsb " + k[0] + " svelte-1nd78pe"))) &&
          f(e, "class", o),
        (!c || I & 64) && Je(e, "--hoverColor", k[6]),
        (!c || I & 32) && Je(e, "--color", k[5]);
    },
    i(k) {
      c || ($(v, k), $(g), (c = !0));
    },
    o(k) {
      y(v, k), y(g), (c = !1);
    },
    d(k) {
      k && h(e),
        v && v.d(k),
        p && p.d(),
        s[18](null),
        g && g.d(),
        s[19](null),
        (u = !1),
        xe(m);
    },
  };
}
const $s = 250;
function ac(s, e, t) {
  let { $$slots: l = {}, $$scope: n } = e,
    { class: a = "" } = e,
    { debug: i = !1 } = e,
    { triggerClass: r = "" } = e,
    { placement: o = "bottom" } = e,
    { noIcon: c = !1 } = e,
    { width: u = "unset" } = e,
    { trigger: m = "hover" } = e,
    { modifiers: _ = [] } = e,
    { color: v = "#000" } = e,
    { hoverColor: p = "#3d7eff" } = e;
  const g = Qe();
  let k = !1,
    I,
    T,
    S = !1;
  function C() {
    Ka(T, I, { placement: o, modifiers: _ });
  }
  function A() {
    t(7, (k = !0)), C(), g("mouseenter");
  }
  function D() {
    S || (t(7, (k = !1)), g("mouseleave"));
  }
  function L(R) {
    S = R;
  }
  function O(R) {
    gt[R ? "unshift" : "push"](() => {
      (T = R), t(9, T);
    });
  }
  function P(R) {
    gt[R ? "unshift" : "push"](() => {
      (I = R), t(8, I);
    });
  }
  return (
    (s.$$set = (R) => {
      "class" in R && t(0, (a = R.class)),
        "debug" in R && t(1, (i = R.debug)),
        "triggerClass" in R && t(2, (r = R.triggerClass)),
        "placement" in R && t(13, (o = R.placement)),
        "noIcon" in R && t(3, (c = R.noIcon)),
        "width" in R && t(4, (u = R.width)),
        "trigger" in R && t(14, (m = R.trigger)),
        "modifiers" in R && t(15, (_ = R.modifiers)),
        "color" in R && t(5, (v = R.color)),
        "hoverColor" in R && t(6, (p = R.hoverColor)),
        "$$scope" in R && t(16, (n = R.$$scope));
    }),
    [a, i, r, c, u, v, p, k, I, T, A, D, L, o, m, _, n, l, O, P]
  );
}
class ct extends Ie {
  constructor(e) {
    super(),
      Te(this, e, ac, nc, Ce, {
        class: 0,
        debug: 1,
        triggerClass: 2,
        placement: 13,
        noIcon: 3,
        width: 4,
        trigger: 14,
        modifiers: 15,
        color: 5,
        hoverColor: 6,
      });
  }
}
const wa = { MockTrading: "e10c54", BackToLive: "847288", NoteThat: "595f79" },
  ic = {
    Title: "4402cc",
    Description: "3e43d2",
    TradingBots: "d54150",
    Details: "360a06",
    FuturesGrid: "debf6d",
    SpotGrid: "0196dd",
    Long: "4a7f85",
    Short: "297438",
    Neutral: "a6f2b8",
    Runtime: "45dd37",
    Created: "14a302",
    ShareTime: "4354b0",
    Share: "f53db2",
    GridOrder: "950e6d",
    History: "e7e792",
    TradingBotReturns: "f32a6a",
    TotalPnl: "72b33f",
    TotalRoi: "dbd68d",
    TotalAPR: "d75870",
    Investment: "14f1b8",
    PositionBalance: "799ed1",
    MarginForPendingOrders: "eb39ef",
    AvailableMargin: "a2cdaf",
    UnrealizedPnl: "123c25",
    RealizedPnl: "604bf1",
    GridProfit: "851208",
    GridAPR: "3336fd",
    LastPrice: "37c63d",
    Buy: "ab047d",
    Sell: "0f0572",
    NoData: "244f24",
    PendingOrders: "991757",
    Transactions: "96ed97",
    Arbitrages: "c0a58e",
    No: "717e69",
    OrderPrice: "4bbacc",
    FilledTime: "ce3b98",
    AveFilledPrice: "4477cf",
    FilledQty: "9acd7e",
    TradingFees: "e483ab",
    YourSellOrder: "632ccc",
    YourBuyOrder: "74fdcb",
    PriceRange: "91939f",
    GridQuantity: "ed2c7e",
    AmountPerGrid: "d140f5",
    StartingCondition: "a2d8b4",
    TPSL: "54a276",
    PositionDetails: "3a3888",
    EntryPrice: "61bc4e",
    PositionSize: "f32f09",
    ActualLeverage: "646f3d",
    LiqPrice: "738166",
    PositionRealizedPnl: "e225b2",
    InvestMore: "89d352",
    Amount: "981a21",
    AvailableBalance: "3d92ed",
    TheAdditionalInvestment: "8e2df3",
    Cancel: "6aec9e",
    Confirm: "a4c268",
    SaveImage: "0ec288",
    CopyLink: "a46555",
    ScanTheQr: "0f706c",
    TakeProfit: "0d14ea",
    StopLoss: "2b5cb9",
    MarkPrice: "df3363",
    TPTriggerPrice: "942484",
    SLTriggerPrice: "bfa068",
    Instant: "40d5c9",
    Price: "262420",
    Arithmetic: "5e4e1d",
    Geometric: "ab6810",
    JustMade: "b826f0",
    StopPrice: "a48755",
    StopTopPrice: "31bfcb",
    StopBottomPrice: "d66b70",
    NotTriggered: "0fae5b",
    Closed: "d40d10",
    TotalPNLExplain: "d3fd76",
    RealizedPNLExplain: "38ddb0",
    FloatingPNLExplain: "d22b01",
    TotalROIExplain: "d42f0b",
    GridHasExplain: "c14f7e",
    TotalAprExplain: "cb8b50",
    GridAprExplain: "3687bc",
    FilledAfter: "19b4e4",
    StopCondition: "d30425",
    SellAllOnceBotStops: "406e4e",
    TransactionOf: "140585",
    ArbitrageOf: "128f5d",
    ProfitPerGrid: "bcdd5b",
    InitialHolding: "517c22",
    CurrentHolding: "f03cea",
    TpPriceMust2: "0660d3",
    SlPriceMust2: "f63498",
    SlPriceMust3: "7ba819",
    SlPriceMust4: "edf3f5",
    TpPriceMust: "fa2a4f",
    TpslInfo: "eadc6b",
    GoesDown: "7ef573",
    GoesUp: "96dd07",
    SlPriceMust: "3f885b",
    BotID: "f70006",
  };
function rc(s) {
  let e,
    t,
    l = s[5](ic.TradingBots) + "",
    n,
    a,
    i,
    r,
    o;
  return {
    c() {
      (e = b("a")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        (i = b("img")),
        this.h();
    },
    l(c) {
      e = E(c, "A", { class: !0, slot: !0, href: !0 });
      var u = w(e);
      t = E(u, "SPAN", { class: !0 });
      var m = w(t);
      (n = F(m, l)),
        m.forEach(h),
        (a = M(u)),
        (i = E(u, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
        u.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "title"),
        f(i, "class", "title-icon svelte-mzd0as"),
        f(i, "height", "14"),
        Se(
          i.src,
          (r =
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png")
        ) || f(i, "src", r),
        f(i, "alt", "new"),
        f(e, "class", "trigger svelte-mzd0as"),
        f(e, "slot", "trigger"),
        f(
          e,
          "href",
          (o = s[4](qt.getMockPrefix() + W.STRATEGY_SQUARE.pathname))
        );
    },
    m(c, u) {
      B(c, e, u), d(e, t), d(t, n), d(e, a), d(e, i);
    },
    p(c, u) {
      u & 16 &&
        o !== (o = c[4](qt.getMockPrefix() + W.STRATEGY_SQUARE.pathname)) &&
        f(e, "href", o);
    },
    d(c) {
      c && h(e);
    },
  };
}
function oc(s) {
  let e = s[5](wa.BackToLive) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function cc(s) {
  let e,
    t,
    l,
    n = s[5](wa.MockTrading) + "",
    a,
    i,
    r,
    o,
    c,
    u,
    m;
  return (
    (r = new ct({
      props: {
        class: "ml24 mr24",
        placement: fc,
        modifiers: s[6],
        color: s[3],
        hoverColor: s[2],
        noIcon: !0,
        $$slots: { trigger: [rc] },
        $$scope: { ctx: s },
      },
    })),
    (c = new Ot({
      props: {
        type: "primary",
        class: "live-btn ml16",
        $$slots: { default: [oc] },
        $$scope: { ctx: s },
      },
    })),
    c.$on("click", s[7]),
    {
      c() {
        (e = b("nav")),
          (t = b("div")),
          (l = b("div")),
          (a = H(n)),
          (i = U()),
          j(r.$$.fragment),
          (o = U()),
          j(c.$$.fragment),
          this.h();
      },
      l(_) {
        e = E(_, "NAV", { class: !0 });
        var v = w(e);
        t = E(v, "DIV", { class: !0 });
        var p = w(t);
        l = E(p, "DIV", { class: !0 });
        var g = w(l);
        (a = F(g, n)),
          g.forEach(h),
          (i = M(p)),
          K(r.$$.fragment, p),
          p.forEach(h),
          (o = M(v)),
          K(c.$$.fragment, v),
          v.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "mock-menu BLUE svelte-mzd0as"),
          f(t, "class", "df"),
          f(
            e,
            "class",
            (u = "mock-menu f1 df jcsb aic " + s[1] + " svelte-mzd0as")
          ),
          Z(e, "top", s[0]);
      },
      m(_, v) {
        B(_, e, v),
          d(e, t),
          d(t, l),
          d(l, a),
          d(t, i),
          q(r, t, null),
          d(e, o),
          q(c, e, null),
          (m = !0);
      },
      p(_, [v]) {
        const p = {};
        v & 8 && (p.color = _[3]),
          v & 4 && (p.hoverColor = _[2]),
          v & 272 && (p.$$scope = { dirty: v, ctx: _ }),
          r.$set(p);
        const g = {};
        v & 256 && (g.$$scope = { dirty: v, ctx: _ }),
          c.$set(g),
          (!m ||
            (v & 2 &&
              u !==
                (u = "mock-menu f1 df jcsb aic " + _[1] + " svelte-mzd0as"))) &&
            f(e, "class", u),
          (!m || v & 3) && Z(e, "top", _[0]);
      },
      i(_) {
        m || ($(r.$$.fragment, _), $(c.$$.fragment, _), (m = !0));
      },
      o(_) {
        y(r.$$.fragment, _), y(c.$$.fragment, _), (m = !1);
      },
      d(_) {
        _ && h(e), X(r), X(c);
      },
    }
  );
}
const fc = "bottom-start";
function uc(s, e, t) {
  let l, n, a;
  ge(s, We, (m) => t(4, (a = m)));
  let { isTop: i = !0 } = e;
  const r = je("LG"),
    o = [
      { name: "offset", options: { offset: [-24, 0] } },
      { name: "preventOverflow", options: { padding: 40 } },
    ];
  let { class: c = "" } = e;
  const u = () => qt.gotoLive();
  return (
    (s.$$set = (m) => {
      "isTop" in m && t(0, (i = m.isTop)), "class" in m && t(1, (c = m.class));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 &&
        t(3, (l = i ? "var(--menu-dark)" : "var(--menu-light)")),
        s.$$.dirty & 1 &&
          t(2, (n = i ? "var(--menu-dark-hover)" : "var(--menu-light-hover)"));
    }),
    [i, c, n, l, a, r, o, u]
  );
}
class dc extends Ie {
  constructor(e) {
    super(), Te(this, e, uc, cc, Ce, { isTop: 0, class: 1 });
  }
}
const hc = "P2P_TRADE_DEFAULT_URL_TYPE";
function gl(s, e) {
  if (tt.isServer) return;
  const t = localStorage.getItem(hc);
  return e(
    !t || t === "express"
      ? s
        ? W.P2P_HOME_LOGIN.pathname
        : W.P2P_HOME.pathname
      : W.P2P_HOME_MARKET.pathname
  );
}
const mc = (s) => ({}),
  Gs = (s) => ({}),
  _c = (s) => ({}),
  Bs = (s) => ({});
function gc(s) {
  let e, t;
  const l = s[10]["circle-suffix"],
    n = lt(l, s, s[9], Bs);
  return {
    c() {
      (e = b("div")), n && n.c(), this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = w(e);
      n && n.l(i), i.forEach(h), this.h();
    },
    h() {
      f(e, "class", "df mr16");
    },
    m(a, i) {
      B(a, e, i), n && n.m(e, null), (t = !0);
    },
    p(a, i) {
      n &&
        n.p &&
        (!t || i & 512) &&
        st(n, l, a, a[9], t ? at(l, a[9], i, _c) : nt(a[9]), Bs);
    },
    i(a) {
      t || ($(n, a), (t = !0));
    },
    o(a) {
      y(n, a), (t = !1);
    },
    d(a) {
      a && h(e), n && n.d(a);
    },
  };
}
function pc(s) {
  let e, t, l;
  return {
    c() {
      (e = b("div")), (t = b("img")), this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = w(e);
      (t = E(a, "IMG", { width: !0, alt: !0, src: !0 })),
        a.forEach(h),
        this.h();
    },
    h() {
      f(t, "width", "24"),
        f(t, "alt", s[3]),
        Se(t.src, (l = s[2])) || f(t, "src", l),
        f(e, "class", "df mr16");
    },
    m(n, a) {
      B(n, e, a), d(e, t);
    },
    p(n, a) {
      a & 8 && f(t, "alt", n[3]),
        a & 4 && !Se(t.src, (l = n[2])) && f(t, "src", l);
    },
    i: me,
    o: me,
    d(n) {
      n && h(e);
    },
  };
}
function ys(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(e, "class", "ml4"),
        f(e, "height", "14"),
        Se(e.src, (t = s[6])) || f(e, "src", t),
        f(e, "alt", s[7]);
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n & 64 && !Se(e.src, (t = l[6])) && f(e, "src", t),
        n & 128 && f(e, "alt", l[7]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Ws(s) {
  let e, t;
  return {
    c() {
      (e = b("div")), (t = H(s[5])), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      (t = F(n, s[5])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "sub-title f12 fw1 svelte-s9hf7x");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 32 && te(t, l[5]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function vc(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v, p, g, k, I, T;
  const S = [pc, gc],
    C = [];
  function A(R, G) {
    return R[2] ? 0 : R[8]["circle-suffix"] ? 1 : -1;
  }
  ~(t = A(s)) && (l = C[t] = S[t](s));
  const D = s[10]["title-suffix"],
    L = lt(D, s, s[9], Gs);
  let O = s[6] && ys(s),
    P = s[5] && Ws(s);
  return {
    c() {
      (e = b("a")),
        l && l.c(),
        (n = U()),
        (a = b("div")),
        (i = b("div")),
        (r = b("div")),
        (o = H(s[4])),
        (c = U()),
        L && L.c(),
        (u = U()),
        O && O.c(),
        (m = U()),
        P && P.c(),
        (_ = U()),
        (v = b("div")),
        (p = b("i")),
        (g = H("")),
        this.h();
    },
    l(R) {
      e = E(R, "A", { class: !0, href: !0, target: !0, rel: !0 });
      var G = w(e);
      l && l.l(G), (n = M(G)), (a = E(G, "DIV", { class: !0 }));
      var N = w(a);
      i = E(N, "DIV", {});
      var V = w(i);
      r = E(V, "DIV", { class: !0 });
      var Y = w(r);
      (o = F(Y, s[4])),
        (c = M(Y)),
        L && L.l(Y),
        (u = M(Y)),
        O && O.l(Y),
        Y.forEach(h),
        (m = M(V)),
        P && P.l(V),
        V.forEach(h),
        (_ = M(N)),
        (v = E(N, "DIV", { class: !0 }));
      var z = w(v);
      p = E(z, "I", { class: !0 });
      var x = w(p);
      (g = F(x, "")),
        x.forEach(h),
        z.forEach(h),
        N.forEach(h),
        G.forEach(h),
        this.h();
    },
    h() {
      f(r, "class", "title df fw2 svelte-s9hf7x"),
        f(p, "class", "arrow iconfont dib f16 fw1 svelte-s9hf7x"),
        f(v, "class", "arrow-con df ml12 lh20 svelte-s9hf7x"),
        f(a, "class", "wp100 df aic jcsb f14"),
        f(e, "class", "menu-item noa df fdr aic br8 cp svelte-s9hf7x"),
        f(e, "href", s[0]),
        f(e, "target", s[1]),
        f(e, "rel", "noopener");
    },
    m(R, G) {
      B(R, e, G),
        ~t && C[t].m(e, null),
        d(e, n),
        d(e, a),
        d(a, i),
        d(i, r),
        d(r, o),
        d(r, c),
        L && L.m(r, null),
        d(r, u),
        O && O.m(r, null),
        d(i, m),
        P && P.m(i, null),
        d(a, _),
        d(a, v),
        d(v, p),
        d(p, g),
        (k = !0),
        I || ((T = ee(e, "click", s[11])), (I = !0));
    },
    p(R, [G]) {
      let N = t;
      (t = A(R)),
        t === N
          ? ~t && C[t].p(R, G)
          : (l &&
              (Ue(),
              y(C[N], 1, 1, () => {
                C[N] = null;
              }),
              Me()),
            ~t
              ? ((l = C[t]),
                l ? l.p(R, G) : ((l = C[t] = S[t](R)), l.c()),
                $(l, 1),
                l.m(e, n))
              : (l = null)),
        (!k || G & 16) && te(o, R[4]),
        L &&
          L.p &&
          (!k || G & 512) &&
          st(L, D, R, R[9], k ? at(D, R[9], G, mc) : nt(R[9]), Gs),
        R[6]
          ? O
            ? O.p(R, G)
            : ((O = ys(R)), O.c(), O.m(r, null))
          : O && (O.d(1), (O = null)),
        R[5]
          ? P
            ? P.p(R, G)
            : ((P = Ws(R)), P.c(), P.m(i, null))
          : P && (P.d(1), (P = null)),
        (!k || G & 1) && f(e, "href", R[0]),
        (!k || G & 2) && f(e, "target", R[1]);
    },
    i(R) {
      k || ($(l), $(L, R), (k = !0));
    },
    o(R) {
      y(l), y(L, R), (k = !1);
    },
    d(R) {
      R && h(e),
        ~t && C[t].d(),
        L && L.d(R),
        O && O.d(),
        P && P.d(),
        (I = !1),
        T();
    },
  };
}
function bc(s, e, t) {
  let { $$slots: l = {}, $$scope: n } = e;
  const a = Al(l);
  let { link: i = "" } = e,
    { target: r = void 0 } = e,
    { iconUrl: o = "" } = e,
    { iconAlt: c = "" } = e,
    { title: u = "" } = e,
    { subTitle: m = "" } = e,
    { titleIcon: _ = "" } = e,
    { titleIconAlt: v = "" } = e;
  function p(g) {
    Dt.call(this, s, g);
  }
  return (
    (s.$$set = (g) => {
      "link" in g && t(0, (i = g.link)),
        "target" in g && t(1, (r = g.target)),
        "iconUrl" in g && t(2, (o = g.iconUrl)),
        "iconAlt" in g && t(3, (c = g.iconAlt)),
        "title" in g && t(4, (u = g.title)),
        "subTitle" in g && t(5, (m = g.subTitle)),
        "titleIcon" in g && t(6, (_ = g.titleIcon)),
        "titleIconAlt" in g && t(7, (v = g.titleIconAlt)),
        "$$scope" in g && t(9, (n = g.$$scope));
    }),
    [i, r, o, c, u, m, _, v, a, n, l, p]
  );
}
class Ze extends Ie {
  constructor(e) {
    super(),
      Te(this, e, bc, vc, Ce, {
        link: 0,
        target: 1,
        iconUrl: 2,
        iconAlt: 3,
        title: 4,
        subTitle: 5,
        titleIcon: 6,
        titleIconAlt: 7,
      });
  }
}
const J = {
  StartTrading: "8af131",
  WelcomeBonus: "82432d",
  AllStarProgram: "01c850",
  Company: "d8c7aa",
  Announcements: "876fec",
  Assets: "8d5ce8",
  Account: "5e9763",
  LogIn: "e8b1f8",
  Register: "6d83d6",
  RegisterNow: "977428",
  AboutUs: "027aa7",
  Security: "1913fb",
  Overview: "effabb",
  Deposit: "288cab",
  Withdraw: "a37ef5",
  FundDetails: "d1e45d",
  PNLDetails: "86840e",
  PNLHistory: "2b9654",
  OrderHistory: "53d391",
  TradeHistory: "6b7e26",
  PhemexPlatform: "603503",
  FeesConditions: "809381",
  Blog: "8ba1be",
  MyAccount: "81331b",
  MainAccount: "947b0e",
  Main: "24fde8",
  Sub: "9eabaf",
  MoreSubAccount: "f63a34",
  AccountSecurity: "b9db8e",
  APIManagement: "484f1b",
  SubAccount: "2d67c0",
  InviteFriends: "6eb0dd",
  LogOut: "c636f7",
  Setting: "418793",
  TotalAssets: "2047e1",
  ScanTo: "a80809",
  Exchange: "dc63f9",
  SpoHistory: "375986",
  OnlyOpenTo: "59fe9e",
  ContractHistory: "a12169",
  SupportsBTC: "648e4d",
  MockTrading: "92b9f5",
  SimulatedTrading: "4c5cda",
  LearnHowToTradeWithZeroRisk: "db0c4a",
  ToolsToLearn: "1a8e52",
  Others: "aead4a",
  Premium: "288fa6",
  FastTrades: "277da1",
  ZeroRisk: "35a8d2",
  MaximizeInfluence: "e52ba4",
  RecentTrading: "1935db",
  All: "ef5fbd",
  Markets: "c67b8f",
  Contract: "8c2710",
  Spot: "eef5dc",
  Earn: "013e68",
  Products: "e9469d",
  Support: "d38d20",
  HelpCenter: "8fb9e3",
  APIDocumentation: "b98545",
  ContractReferences: "31643f",
  Academy: "a3182a",
  ChatWithUs: "e95408",
  BuyCrypto: "e9c1e7",
  Language: "9d741e",
  Download: "b81d91",
  LoginRegister: "93e555",
  PTArena: "dc5995",
  Investment: "c18acc",
  EarnCrypto: "3c8b05",
  Savings: "86f29b",
  Learn: "065038",
  LearnEverythingAboutCrypto: "650cad",
  TheEasiestWayToTrade: "e873b3",
  Promotions: "2e542c",
  FlexibleDeposit: "57b706",
  EarnNow: "61bd7b",
  SpotWallet: "e81cad",
  MarginAccount: "519851",
  ContractAccounnt: "0220ff",
  InvestmentAccount: "6abfe2",
  Referral: "bb36d9",
  GetOffTaker: "68d112",
  BuyCryptoWithBank: "dd078a",
  BankTransfer: "277da0",
  WireTransfer: "bad9bf",
  BankTransferSubTitle: "dd17a3",
  BuyCryptoWith: "c8205d",
  ThirdPartyPayment: "22420b",
  SimplexMoonpay: "bd24fc",
  ThirdPartyPaymentSubTitle: "de33a4",
  DepositCryptoAndEarn: "62d569",
  DepositNow: "85c71f",
  SpotTrading: "a90182",
  ContractTrading: "cdb2ce",
  TradeContracts: "7ddaf8",
  CopyTrade: "4a25c1",
  FollowTop: "be7cc6",
  Bonus: "b45400",
  Competition: "48b5b7",
  UserGuides: "a707e1",
  FAQHelp: "cf7153",
  CryptoTipsAndTrick: "169c3e",
  GetPaidToLearnCrypto: "c5fafc",
  LearnAndEarn: "5cf89c",
  Convert: "57e55c",
  Launchpad: "c44061",
  LaunchpadDesc: "43bff6",
  EaseToTrade: "1ec2b5",
  ConversionHistory: "15b1d5",
  Phemex2ndAnniv: "4f06b2",
  StudentFoundation: "cb0e1f",
  EmpowerStudent: "72f5b4",
  EarnCryptoEarnUpTo: "9c2aae",
  EarnUpTo: "02ce25",
  Launchpool: "583d34",
  EarnMain: "37758d",
  StakeAndEarn: "8c6408",
  P2PTrading: "5b6f60",
  OneClickBuyAndSell: "7cfe94",
  OneClickBuyAndSellSubTitle: "299ebd",
  FiatDeposit: "aa5a58",
  FiatDepositSubTitle: "a7d0a5",
  BuyCryptoP2PMarketplace: "92ea4e",
  P2PTradingSubtitle: "bb2738",
  PredictToEarn: "9a30df",
  PredictHotEvent: "1ae139",
  Leaderboard: "428a44",
  StartYourTrading: "73ffec",
  VipPortal: "8d9038",
  CustomTrading: "2fafa9",
  Perpetual: "5a4d63",
  PerpetualContractUSD: "eb25cc",
  PerpetualContractCoin: "911f9d",
  PerpetualContractUSDC: "7a26d8",
  Home: "188f97",
  EarnMenu: "935545",
  PerpetualComplete: "0403e1",
  CreditDebitCards: "100c0b",
  CreditDebitCardsBuySubTitle: "fc1a42",
  CreditDebitCardsSubTitle: "e45850",
  MarginTradingMenuTitle: "8990e8",
  MarginTradingMenuDesc: "aac602",
  MarginHistory: "282366",
  BorrowHistory: "9a7fe0",
  RepayHistory: "328b29",
  InterestHistory: "62c403",
  FiatAccount: "0ff746",
  Web3: "1f650a",
  Phemexia: "e55ce7",
  PhemexiaDesc: "9bbe51",
  SocialTrade: "5f2883",
  YourRoutine: "183a51",
  PhemexAllInOne: "a481b5",
  Web3SoulPass: "7f1bb0",
  Web3SoulPassDesc: "21852d",
  Web3Token: "ec77ec",
  Web3TokenDesc: "502c44",
  Web3PreMining: "074377",
  Web31000BTC: "5289bb",
  Web31000BTCDesc: "c8cf01",
  Web3PreMiningDesc: "0603cd",
  Web3100Eth: "e00fd5",
  Web3100EthDesc: "1b4846",
  Web3Whitepaper: "763815",
  Docs: "693391",
  Web3WhitepaperDesc: "f946fa",
  Web3PtPreheat: "1da676",
  Web3PtPreheatDesc: "c5382f",
  TradingBots: "8de874",
  TradingContest: "df315b",
  IntelligentTrading: "d56c77",
  ContractAccount: "a4b9e0",
  Funds: "04e7d4",
  Web3Dashboard: "c0a9f2",
  Web3PTStaking: "84bf96",
  Web3PTStakingDesc: "94b7bc",
  Web3DutchAuction: "3a7b90",
  Web3DutchAuctionDesc: "c7faee",
  WEB3AirdropChristmas: "ce8d1d",
  WEB3AirdropChristmasDesc: "fd449d",
  Chat2Earn: "0d68c2",
  PhemexToken: "265b60",
  LaunchPulseApp: "bed830",
  PhemexTokenBenefits: "d1c243",
  Web3LendingProtocol: "95ea1d",
  Web3LendingProtocolDesc: "8b581c",
  LendingAccount: "298f68",
};
function Ec(s) {
  let e, t, l, n, a, i, r, o, c;
  return (
    (t = new Ze({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/8e35a1f4-1542-4c38-9087-05707e81fa09/0.svg",
        link: s[0](W.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname),
        title: s[2](J.OneClickBuyAndSell),
        subTitle: s[2](J.OneClickBuyAndSellSubTitle),
      },
    })),
    t.$on("click", s[3]("one_click_buy_sell")),
    (n = new Ze({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/fe01f95b-acde-4058-b0eb-ea9bd33c297e/1.svg",
        link: s[0](W.FIAT_DEPOSIT.pathname),
        title: s[2](J.FiatDeposit),
        titleIcon:
          "//img.phemex.com/v1/fbdda9d0-68f3-4d1e-b834-248ce5cd50db/frame-14zero-fee.png",
        titleIconAlt: "zero-fee",
        subTitle: s[2](J.FiatDepositSubTitle),
      },
    })),
    n.$on("click", s[3]("fiat_deposit")),
    (i = new Ze({
      props: {
        target: "_self",
        iconAlt: "credit debit card",
        iconUrl:
          "https://img.phemex.com/v1/22e1ded4-66a1-4f4b-bc0c-e97ea28ef1d6/2.svg",
        link: s[0](W.BUY_CRYPTO_CARD_PLACE_ORDER.pathname),
        title: s[2](J.CreditDebitCards),
        titleIcon:
          "//img.phemex.com/v1/9bc32cd3-0663-47fb-bf3b-8c114590eef1/credit-debit-card-fee.png",
        titleIconAlt: "lowest-fee",
        subTitle: s[2](J.CreditDebitCardsSubTitle),
      },
    })),
    i.$on("click", s[3]("credit_debit_card")),
    (o = new Ze({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/18fd6900-0d2d-4ff7-abf3-937099cc7b7e/3.svg",
        link: gl(s[1], s[0]),
        title: s[2](J.P2PTrading),
        subTitle: s[2](J.P2PTradingSubtitle),
      },
    })),
    o.$on("click", s[3]("p2p_trading")),
    {
      c() {
        (e = b("div")),
          j(t.$$.fragment),
          (l = U()),
          j(n.$$.fragment),
          (a = U()),
          j(i.$$.fragment),
          (r = U()),
          j(o.$$.fragment),
          this.h();
      },
      l(u) {
        e = E(u, "DIV", { class: !0 });
        var m = w(e);
        K(t.$$.fragment, m),
          (l = M(m)),
          K(n.$$.fragment, m),
          (a = M(m)),
          K(i.$$.fragment, m),
          (r = M(m)),
          K(o.$$.fragment, m),
          m.forEach(h),
          this.h();
      },
      h() {
        f(e, "class", "wrap df fdc B1 T2 br12 svelte-i1h11n");
      },
      m(u, m) {
        B(u, e, m),
          q(t, e, null),
          d(e, l),
          q(n, e, null),
          d(e, a),
          q(i, e, null),
          d(e, r),
          q(o, e, null),
          (c = !0);
      },
      p(u, [m]) {
        const _ = {};
        m & 1 && (_.link = u[0](W.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname)),
          t.$set(_);
        const v = {};
        m & 1 && (v.link = u[0](W.FIAT_DEPOSIT.pathname)), n.$set(v);
        const p = {};
        m & 1 && (p.link = u[0](W.BUY_CRYPTO_CARD_PLACE_ORDER.pathname)),
          i.$set(p);
        const g = {};
        m & 3 && (g.link = gl(u[1], u[0])), o.$set(g);
      },
      i(u) {
        c ||
          ($(t.$$.fragment, u),
          $(n.$$.fragment, u),
          $(i.$$.fragment, u),
          $(o.$$.fragment, u),
          (c = !0));
      },
      o(u) {
        y(t.$$.fragment, u),
          y(n.$$.fragment, u),
          y(i.$$.fragment, u),
          y(o.$$.fragment, u),
          (c = !1);
      },
      d(u) {
        u && h(e), X(t), X(n), X(i), X(o);
      },
    }
  );
}
function wc(s, e, t) {
  let l, n;
  ge(s, We, (r) => t(0, (l = r))), ge(s, Kt, (r) => t(1, (n = r)));
  const a = je("LG");
  function i(r) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_buy_crypto_" + r,
      });
    };
  }
  return [l, n, a, i];
}
class kc extends Ie {
  constructor(e) {
    super(), Te(this, e, wc, Ec, Ce, {});
  }
}
function Ys(s) {
  let e, t;
  return (
    (e = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/1677813b-36d0-46d5-97b9-eb5980d11c2d/2-1.svg",
        iconAlt: "spot",
        link: Ge.PHEMEX_SPOT_MARGIN_TRADE,
        target: "_self",
        title: s[5](J.MarginTradingMenuTitle) + " " + s[2] + "X",
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
        titleIconAlt: "new",
        subTitle: s[5](J.MarginTradingMenuDesc),
      },
    })),
    e.$on("click", s[6]("margin_trading")),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 4 && (a.title = l[5](J.MarginTradingMenuTitle) + " " + l[2] + "X"),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Hs(s) {
  let e, t;
  return (
    (e = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/44d13946-aa67-4c88-8858-3d0e6bd31a34/2-4.svg",
        iconAlt: "strategy square",
        link: s[3](W.STRATEGY_SQUARE.pathname) + "?type=SPOT_GRID",
        target: "_self",
        title: s[5](J.TradingBots),
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
        titleIconAlt: "new",
        subTitle: s[5](J.IntelligentTrading),
      },
    })),
    e.$on("click", s[6]("trading_bots")),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 8 &&
          (a.link = l[3](W.STRATEGY_SQUARE.pathname) + "?type=SPOT_GRID"),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ic(s) {
  let e, t, l, n, a, i, r, o, c;
  (t = new Ze({
    props: {
      iconUrl:
        "https://img.phemex.com/v1/8dc1f1fb-91fd-4da0-a79a-ebe579e99248/2-0.svg",
      iconAlt: "spot",
      link: Ge.PHEMEX_SPOT_TRADE,
      target: "_self",
      title: s[5](J.SpotTrading),
      subTitle: s[5](J.OnlyOpenTo, { TradePairNumber: s[0].length }),
    },
  })),
    t.$on("click", s[6]("spot_trading"));
  let u = s[1] && Ys(s);
  (a = new Ze({
    props: {
      iconUrl:
        "https://img.phemex.com/v1/58f2aa00-676d-4302-9d8e-b277a3660920/2-2.svg",
      iconAlt: "contract",
      link: s[3](W.CRYPTO_CONVERTER.pathname),
      target: "_self",
      title: s[5](J.Convert),
      subTitle: s[5](J.TheEasiestWayToTrade),
    },
  })),
    a.$on("click", s[6]("convert")),
    (r = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/59cfdf7c-35fb-4bfb-aa45-ec746703d606/2-3.svg",
        iconAlt: "launchpad",
        link: s[3](W.LAUNCHPAD.pathname),
        target: "_self",
        title: s[5](J.Launchpad),
        subTitle: s[5](J.LaunchpadDesc),
      },
    })),
    r.$on("click", s[6]("launchpad"));
  let m = s[4] && Hs(s);
  return {
    c() {
      (e = b("div")),
        j(t.$$.fragment),
        (l = U()),
        u && u.c(),
        (n = U()),
        j(a.$$.fragment),
        (i = U()),
        j(r.$$.fragment),
        (o = U()),
        m && m.c(),
        this.h();
    },
    l(_) {
      e = E(_, "DIV", { class: !0 });
      var v = w(e);
      K(t.$$.fragment, v),
        (l = M(v)),
        u && u.l(v),
        (n = M(v)),
        K(a.$$.fragment, v),
        (i = M(v)),
        K(r.$$.fragment, v),
        (o = M(v)),
        m && m.l(v),
        v.forEach(h),
        this.h();
    },
    h() {
      f(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1j13m8w");
    },
    m(_, v) {
      B(_, e, v),
        q(t, e, null),
        d(e, l),
        u && u.m(e, null),
        d(e, n),
        q(a, e, null),
        d(e, i),
        q(r, e, null),
        d(e, o),
        m && m.m(e, null),
        (c = !0);
    },
    p(_, [v]) {
      const p = {};
      v & 1 &&
        (p.subTitle = _[5](J.OnlyOpenTo, { TradePairNumber: _[0].length })),
        t.$set(p),
        _[1]
          ? u
            ? (u.p(_, v), v & 2 && $(u, 1))
            : ((u = Ys(_)), u.c(), $(u, 1), u.m(e, n))
          : u &&
            (Ue(),
            y(u, 1, 1, () => {
              u = null;
            }),
            Me());
      const g = {};
      v & 8 && (g.link = _[3](W.CRYPTO_CONVERTER.pathname)), a.$set(g);
      const k = {};
      v & 8 && (k.link = _[3](W.LAUNCHPAD.pathname)),
        r.$set(k),
        _[4]
          ? m
            ? (m.p(_, v), v & 16 && $(m, 1))
            : ((m = Hs(_)), m.c(), $(m, 1), m.m(e, null))
          : m &&
            (Ue(),
            y(m, 1, 1, () => {
              m = null;
            }),
            Me());
    },
    i(_) {
      c ||
        ($(t.$$.fragment, _),
        $(u),
        $(a.$$.fragment, _),
        $(r.$$.fragment, _),
        $(m),
        (c = !0));
    },
    o(_) {
      y(t.$$.fragment, _),
        y(u),
        y(a.$$.fragment, _),
        y(r.$$.fragment, _),
        y(m),
        (c = !1);
    },
    d(_) {
      _ && h(e), X(t), u && u.d(), X(a), X(r), m && m.d();
    },
  };
}
function Tc(s, e, t) {
  let l, n, a, i, r;
  ge(s, Qa, (u) => t(0, (l = u))),
    ge(s, Ja, (u) => t(1, (n = u))),
    ge(s, Za, (u) => t(2, (a = u))),
    ge(s, We, (u) => t(3, (i = u))),
    ge(s, xa, (u) => t(4, (r = u)));
  const o = je("LG");
  function c(u) {
    return function () {
      u === "convert" &&
        Ke.track("convert_transfer_button_click", {
          ui_position: "exchange",
          $element_content: "convert",
        }),
        Ke.track("web_click", {
          $screen_name: "home",
          $element_content: "navigation_spot_" + u,
        });
    };
  }
  return [l, n, a, i, r, o, c];
}
class Cc extends Ie {
  constructor(e) {
    super(), Te(this, e, Tc, Ic, Ce, {});
  }
}
function Fs(s, e, t) {
  const l = s.slice();
  return (l[5] = e[t]), l;
}
function zs(s) {
  let e, t;
  const l = [s[5]];
  let n = {};
  for (let a = 0; a < l.length; a += 1) n = ol(n, l[a]);
  return (
    (e = new Ze({ props: n })),
    e.$on("click", function () {
      yt(s[1](s[5].name)) && s[1](s[5].name).apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(a) {
        K(e.$$.fragment, a);
      },
      m(a, i) {
        q(e, a, i), (t = !0);
      },
      p(a, i) {
        s = a;
        const r = i & 1 ? ca(l, [fa(s[5])]) : {};
        e.$set(r);
      },
      i(a) {
        t || ($(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        y(e.$$.fragment, a), (t = !1);
      },
      d(a) {
        X(e, a);
      },
    }
  );
}
function Dc(s) {
  let e,
    t,
    l = s[0],
    n = [];
  for (let i = 0; i < l.length; i += 1) n[i] = zs(Fs(s, l, i));
  const a = (i) =>
    y(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "wrap df fdc br12 ovh B1 T2 svelte-17oeajk");
    },
    m(i, r) {
      B(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      t = !0;
    },
    p(i, [r]) {
      if (r & 3) {
        l = i[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = Fs(i, l, o);
          n[o]
            ? (n[o].p(c, r), $(n[o], 1))
            : ((n[o] = zs(c)), n[o].c(), $(n[o], 1), n[o].m(e, null));
        }
        for (Ue(), o = l.length; o < n.length; o += 1) a(o);
        Me();
      }
    },
    i(i) {
      if (!t) {
        for (let r = 0; r < l.length; r += 1) $(n[r]);
        t = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1) y(n[r]);
      t = !1;
    },
    d(i) {
      i && h(e), St(n, i);
    },
  };
}
function Ac(s, e, t) {
  let l;
  ge(s, We, (o) => t(2, (l = o)));
  const n = je("LG");
  let a = [];
  function i(o) {
    t(
      0,
      (a = [
        {
          iconUrl:
            "https://img.phemex.com/v1/cbae9850-5ee4-4957-9098-e0766e851ffe/1-0.svg",
          iconAlt: "USDT-M Perpetual",
          title: `USDT-M ${o(J.Perpetual)}`,
          subTitle: o(J.PerpetualContractUSDC),
          link: Ge.PHEMEX_CONTRACT_TRADE_USDS,
          target: "_self",
          name: "usdt_m_perpetual",
        },
        /*{
          iconUrl:
            "https://img.phemex.com/v1/e3d672d6-0331-45c3-8625-a06dbc843a4b/1-1.svg",
          iconAlt: "COIN-M Perpetual",
          title: `COIN-M ${o(J.Perpetual)}`,
          subTitle: o(J.PerpetualContractCoin),
          link: Ge.PHEMEX_CONTRACT_INVERSE_TRADE,
          target: "_self",
          name: "coin_m_perpetual",
        },*/
        /*{
          iconUrl:
            "https://img.phemex.com/v1/9ad247da-f8ad-4418-860c-ae74aa81be9b/1-3.svg",
          iconAlt: "copy trade",
          title: o(J.CopyTrade),
          subTitle: o(J.FollowTop),
          link: l(W.COPY_TRADING_LIST.pathname),
          target: "_self",
          name: "copy_trade",
        },*/
        /*{
          iconUrl:
            "https://img.phemex.com/v1/41747ea5-579c-43ba-81ae-ef8ed881a374/1-4.svg",
          iconAlt: "strategy square",
          title: o(J.TradingBots),
          subTitle: o(J.IntelligentTrading),
          link: l(W.STRATEGY_SQUARE.pathname) + "?type=CONTRACT_GRID",
          target: "_self",
          titleIcon:
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
          name: "trading_bots",
        },*/
        {
          iconUrl:
            "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg",
          iconAlt: "mock trading",
          title: o(J.MockTrading),
          subTitle: o(J.LearnHowToTradeWithZeroRisk),
          link: Ge.MOCK_TRADE,
          target: "_self",
          name: "mock_trading",
        },
      ])
    );
  }
  function r(o) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_contract_" + o,
      });
    };
  }
  return i(n), [a, r];
}
class Sc extends Ie {
  constructor(e) {
    super(), Te(this, e, Ac, Dc, Ce, {});
  }
}
function Pc(s) {
  let e;
  return {
    c() {
      (e = b("span")), this.h();
    },
    l(t) {
      (e = E(t, "SPAN", { class: !0, slot: !0 })), w(e).forEach(h), this.h();
    },
    h() {
      f(e, "class", "ml4"), f(e, "slot", "title-suffix");
    },
    m(t, l) {
      B(t, e, l);
    },
    p: me,
    d(t) {
      t && h(e);
    },
  };
}
function Lc(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v;
  return (
    (t = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/9b4da28d-68e6-435e-a12f-4370be1f3716/5-0.svg",
        iconAlt: "academy",
        link: s[0](Ge.PHEMEX_ACADEMY, "CMS"),
        target: "_self",
        title: s[1](J.Academy),
        subTitle: s[1](J.LearnEverythingAboutCrypto),
      },
    })),
    t.$on("click", s[2]("academy")),
    (n = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/82baecdc-c32e-4ff5-a8ae-d0967d9549dc/5-1.svg",
        iconAlt: "learn_and_earn",
        link: s[0](W.LEARN_CRYPTO.pathname),
        target: "_self",
        title: s[1](J.LearnAndEarn),
        subTitle: s[1](J.GetPaidToLearnCrypto),
        $$slots: { "title-suffix": [Pc] },
        $$scope: { ctx: s },
      },
    })),
    n.$on("click", s[2]("learn_and_earn")),
    (i = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/658ad87c-765f-4767-80d0-0c2630541192/5-2.svg",
        iconAlt: "user_guides",
        link: s[0](Ge.PHEMEX_HELP_CENTER, "CMS"),
        target: "_self",
        title: s[1](J.HelpCenter),
        subTitle: s[1](J.FAQHelp),
      },
    })),
    i.$on("click", s[2]("user_guides")),
    (o = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/9f69dbbe-9cfa-4a68-aae2-fea38d11e5b2/5-3.svg",
        iconAlt: "blog",
        link: s[0](Ge.PHEMEX_BLOG, "CMS"),
        target: "_self",
        title: s[1](J.Blog),
        subTitle: s[1](J.CryptoTipsAndTrick),
      },
    })),
    o.$on("click", s[2]("blog")),
    (u = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/1a90b421-e76f-4c52-a342-68142b3d16b5/5-4.svg",
        iconAlt: "student_foundation",
        link: s[0](W.STUDENT_FOUNDATION.pathname),
        target: "_self",
        title: s[1](J.StudentFoundation),
        subTitle: s[1](J.EmpowerStudent),
      },
    })),
    u.$on("click", s[2]("student_foundation")),
    (_ = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg",
        link: Ge.PHEMEX_TESTNET,
        target: "_self",
        title: s[1](J.SimulatedTrading),
        subTitle: s[1](J.LearnHowToTradeWithZeroRisk),
      },
    })),
    _.$on("click", s[2]("simulated_trading")),
    {
      c() {
        (e = b("div")),
          j(t.$$.fragment),
          (l = U()),
          j(n.$$.fragment),
          (a = U()),
          j(i.$$.fragment),
          (r = U()),
          j(o.$$.fragment),
          (c = U()),
          j(u.$$.fragment),
          (m = U()),
          j(_.$$.fragment),
          this.h();
      },
      l(p) {
        e = E(p, "DIV", { class: !0 });
        var g = w(e);
        K(t.$$.fragment, g),
          (l = M(g)),
          K(n.$$.fragment, g),
          (a = M(g)),
          K(i.$$.fragment, g),
          (r = M(g)),
          K(o.$$.fragment, g),
          (c = M(g)),
          K(u.$$.fragment, g),
          (m = M(g)),
          K(_.$$.fragment, g),
          g.forEach(h),
          this.h();
      },
      h() {
        f(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1j13m8w");
      },
      m(p, g) {
        B(p, e, g),
          q(t, e, null),
          d(e, l),
          q(n, e, null),
          d(e, a),
          q(i, e, null),
          d(e, r),
          q(o, e, null),
          d(e, c),
          q(u, e, null),
          d(e, m),
          q(_, e, null),
          (v = !0);
      },
      p(p, [g]) {
        const k = {};
        g & 1 && (k.link = p[0](Ge.PHEMEX_ACADEMY, "CMS")), t.$set(k);
        const I = {};
        g & 1 && (I.link = p[0](W.LEARN_CRYPTO.pathname)),
          g & 8 && (I.$$scope = { dirty: g, ctx: p }),
          n.$set(I);
        const T = {};
        g & 1 && (T.link = p[0](Ge.PHEMEX_HELP_CENTER, "CMS")), i.$set(T);
        const S = {};
        g & 1 && (S.link = p[0](Ge.PHEMEX_BLOG, "CMS")), o.$set(S);
        const C = {};
        g & 1 && (C.link = p[0](W.STUDENT_FOUNDATION.pathname)), u.$set(C);
      },
      i(p) {
        v ||
          ($(t.$$.fragment, p),
          $(n.$$.fragment, p),
          $(i.$$.fragment, p),
          $(o.$$.fragment, p),
          $(u.$$.fragment, p),
          $(_.$$.fragment, p),
          (v = !0));
      },
      o(p) {
        y(t.$$.fragment, p),
          y(n.$$.fragment, p),
          y(i.$$.fragment, p),
          y(o.$$.fragment, p),
          y(u.$$.fragment, p),
          y(_.$$.fragment, p),
          (v = !1);
      },
      d(p) {
        p && h(e), X(t), X(n), X(i), X(o), X(u), X(_);
      },
    }
  );
}
function Rc(s, e, t) {
  let l;
  ge(s, We, (i) => t(0, (l = i)));
  const n = je("LG");
  function a(i) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_learn_" + i,
      });
    };
  }
  return [l, n, a];
}
class Oc extends Ie {
  constructor(e) {
    super(), Te(this, e, Rc, Lc, Ce, {});
  }
}
function js(s, e, t) {
  const l = s.slice();
  return (l[2] = e[t]), l;
}
function qs(s) {
  let e,
    t,
    l = s[0],
    n = [];
  for (let i = 0; i < l.length; i += 1) n[i] = Ks(js(s, l, i));
  const a = (i) =>
    y(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1fx5n9f");
    },
    m(i, r) {
      B(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      t = !0;
    },
    p(i, r) {
      if (r & 3) {
        l = i[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = js(i, l, o);
          n[o]
            ? (n[o].p(c, r), $(n[o], 1))
            : ((n[o] = Ks(c)), n[o].c(), $(n[o], 1), n[o].m(e, null));
        }
        for (Ue(), o = l.length; o < n.length; o += 1) a(o);
        Me();
      }
    },
    i(i) {
      if (!t) {
        for (let r = 0; r < l.length; r += 1) $(n[r]);
        t = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1) y(n[r]);
      t = !1;
    },
    d(i) {
      i && h(e), St(n, i);
    },
  };
}
function Nc(s) {
  let e;
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(t) {
      (e = E(t, "DIV", { slot: !0, class: !0 })), w(e).forEach(h), this.h();
    },
    h() {
      f(e, "slot", "circle-suffix"), f(e, "class", "circle svelte-1fx5n9f");
    },
    m(t, l) {
      B(t, e, l);
    },
    p: me,
    d(t) {
      t && h(e);
    },
  };
}
function Xs(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { height: !0, alt: !0, src: !0 })), this.h();
    },
    h() {
      f(e, "height", "18"),
        f(e, "alt", "promotion"),
        Se(e.src, (t = s[2].fullCornerIcon)) || f(e, "src", t);
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n & 1 && !Se(e.src, (t = l[2].fullCornerIcon)) && f(e, "src", t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Vc(s) {
  let e,
    t,
    l = s[2].cornerIcon && Xs(s);
  return {
    c() {
      (e = b("div")), l && l.c(), (t = U()), this.h();
    },
    l(n) {
      e = E(n, "DIV", { slot: !0, class: !0, style: !0 });
      var a = w(e);
      l && l.l(a), (t = M(a)), a.forEach(h), this.h();
    },
    h() {
      f(e, "slot", "title-suffix"),
        f(e, "class", "ml10"),
        Je(e, "width", "54px");
    },
    m(n, a) {
      B(n, e, a), l && l.m(e, null), d(e, t);
    },
    p(n, a) {
      n[2].cornerIcon
        ? l
          ? l.p(n, a)
          : ((l = Xs(n)), l.c(), l.m(e, t))
        : l && (l.d(1), (l = null));
    },
    d(n) {
      n && h(e), l && l.d();
    },
  };
}
function Ks(s) {
  let e, t;
  return (
    (e = new Ze({
      props: {
        link: s[2].link,
        target: "_self",
        title: s[2].title,
        subTitle: s[2].subTitle,
        $$slots: { "title-suffix": [Vc], "circle-suffix": [Nc] },
        $$scope: { ctx: s },
      },
    })),
    e.$on("click", function () {
      yt(s[1](s[2].title)) && s[1](s[2].title).apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        s = l;
        const a = {};
        n & 1 && (a.link = s[2].link),
          n & 1 && (a.title = s[2].title),
          n & 1 && (a.subTitle = s[2].subTitle),
          n & 33 && (a.$$scope = { dirty: n, ctx: s }),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Uc(s) {
  let e,
    t,
    l = s[0].length > 0 && qs(s);
  return {
    c() {
      l && l.c(), (e = ye());
    },
    l(n) {
      l && l.l(n), (e = ye());
    },
    m(n, a) {
      l && l.m(n, a), B(n, e, a), (t = !0);
    },
    p(n, [a]) {
      n[0].length > 0
        ? l
          ? (l.p(n, a), a & 1 && $(l, 1))
          : ((l = qs(n)), l.c(), $(l, 1), l.m(e.parentNode, e))
        : l &&
          (Ue(),
          y(l, 1, 1, () => {
            l = null;
          }),
          Me());
    },
    i(n) {
      t || ($(l), (t = !0));
    },
    o(n) {
      y(l), (t = !1);
    },
    d(n) {
      l && l.d(n), n && h(e);
    },
  };
}
function Mc(s, e, t) {
  let l;
  ge(s, ea, (a) => t(0, (l = a)));
  function n(a) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_promotions_" + a,
      });
    };
  }
  return [l, n];
}
class $c extends Ie {
  constructor(e) {
    super(), Te(this, e, Mc, Uc, Ce, {});
  }
}
function Gc(s) {
  let e, t, l, n, a, i, r;
  return (
    (t = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/ef726752-9966-47a3-8c0f-762180164415/earn.svg",
        iconAlt: "earn crypto",
        link: s[0](W.EARN_HOME.pathname),
        target: "_self",
        title: s[1](J.EarnCrypto),
        subTitle: s[1](J.EarnCryptoEarnUpTo),
      },
    })),
    t.$on("click", s[2]("phemex_earn")),
    (n = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/5b86523a-4eee-4b99-85ae-0c64e283b17d/3-0.svg",
        iconAlt: "savings",
        link: s[0](W.EARN.pathname),
        target: "_self",
        title: s[1](J.Savings),
        subTitle: s[1](J.EarnUpTo),
      },
    })),
    n.$on("click", s[2]("phemex_savings")),
    (i = new Ze({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/4ea02381-0b21-4292-a5d4-4a83d7f776de/3-1.svg",
        iconAlt: "launchpool",
        link: s[0](W.LAUNCHPOOL.pathname),
        target: "_self",
        title: s[1](J.Launchpool),
        subTitle: s[1](J.StakeAndEarn),
      },
    })),
    i.$on("click", s[2]("launchpool")),
    {
      c() {
        (e = b("div")),
          j(t.$$.fragment),
          (l = U()),
          j(n.$$.fragment),
          (a = U()),
          j(i.$$.fragment),
          this.h();
      },
      l(o) {
        e = E(o, "DIV", { class: !0 });
        var c = w(e);
        K(t.$$.fragment, c),
          (l = M(c)),
          K(n.$$.fragment, c),
          (a = M(c)),
          K(i.$$.fragment, c),
          c.forEach(h),
          this.h();
      },
      h() {
        f(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-mxaqyh");
      },
      m(o, c) {
        B(o, e, c),
          q(t, e, null),
          d(e, l),
          q(n, e, null),
          d(e, a),
          q(i, e, null),
          (r = !0);
      },
      p(o, [c]) {
        const u = {};
        c & 1 && (u.link = o[0](W.EARN_HOME.pathname)), t.$set(u);
        const m = {};
        c & 1 && (m.link = o[0](W.EARN.pathname)), n.$set(m);
        const _ = {};
        c & 1 && (_.link = o[0](W.LAUNCHPOOL.pathname)), i.$set(_);
      },
      i(o) {
        r ||
          ($(t.$$.fragment, o),
          $(n.$$.fragment, o),
          $(i.$$.fragment, o),
          (r = !0));
      },
      o(o) {
        y(t.$$.fragment, o), y(n.$$.fragment, o), y(i.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && h(e), X(t), X(n), X(i);
      },
    }
  );
}
function Bc(s, e, t) {
  let l;
  ge(s, We, (i) => t(0, (l = i)));
  const n = je("LG");
  function a(i) {
    return function () {
      i === "launchpool" &&
        Ke.track("launchpool_button_click", { button_name: "launchpool" }),
        Ke.track("web_click", {
          $screen_name: "home",
          $element_content: "navigation_earn_" + i,
        });
    };
  }
  return [l, n, a];
}
class yc extends Ie {
  constructor(e) {
    super(), Te(this, e, Bc, Gc, Ce, {});
  }
}
function Qs(s, e, t) {
  const l = s.slice();
  return (l[7] = e[t]), l;
}
function Js(s) {
  let e, t;
  return (
    (e = new Ze({
      props: {
        iconUrl: s[7].iconUrl,
        iconAlt: s[7].iconAlt,
        link: s[7].link,
        target: s[7].target,
        title: s[7].title,
        subTitle: s[7].subTitle,
        titleIcon: s[7].titleIcon,
      },
    })),
    e.$on("click", function () {
      yt(s[7].trackClick) && s[7].trackClick.apply(this, arguments);
    }),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        s = l;
        const a = {};
        n & 1 && (a.iconUrl = s[7].iconUrl),
          n & 1 && (a.iconAlt = s[7].iconAlt),
          n & 1 && (a.link = s[7].link),
          n & 1 && (a.target = s[7].target),
          n & 1 && (a.title = s[7].title),
          n & 1 && (a.subTitle = s[7].subTitle),
          n & 1 && (a.titleIcon = s[7].titleIcon),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Wc(s) {
  let e,
    t,
    l = s[0],
    n = [];
  for (let i = 0; i < l.length; i += 1) n[i] = Js(Qs(s, l, i));
  const a = (i) =>
    y(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-17fwetc");
    },
    m(i, r) {
      B(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      t = !0;
    },
    p(i, [r]) {
      if (r & 1) {
        l = i[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = Qs(i, l, o);
          n[o]
            ? (n[o].p(c, r), $(n[o], 1))
            : ((n[o] = Js(c)), n[o].c(), $(n[o], 1), n[o].m(e, null));
        }
        for (Ue(), o = l.length; o < n.length; o += 1) a(o);
        Me();
      }
    },
    i(i) {
      if (!t) {
        for (let r = 0; r < l.length; r += 1) $(n[r]);
        t = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1) y(n[r]);
      t = !1;
    },
    d(i) {
      i && h(e), St(n, i);
    },
  };
}
function Yc(s, e, t) {
  let l, n, a;
  ge(s, We, (u) => t(3, (l = u))),
    ge(s, ta, (u) => t(1, (n = u))),
    ge(s, la, (u) => t(2, (a = u)));
  const i = je("LG");
  let r = [];
  function o(u, m) {
    t(
      0,
      (r = [
        /*{
          iconUrl:
            "https://img.phemex.com/v1/b55871b0-085b-4441-a557-46de5e21eb50/light.svg",
          iconAlt: "phemex_plus",
          link: l(W.WEB3_PULSE_HOME.pathname),
          titleIcon:
            "https://static.phemex.com/pubimg/data/436b16d5-676a-4144-9d67-a4c5ca230724.png",
          target: "_self",
          title: i(J.SocialTrade),
          subTitle: i(J.PhemexAllInOne),
          trackClick: c("phemex_plus"),
          hidden: !1,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/a78c5487-608d-4dd8-b1b4-8f095dd9e940/4-4.svg",
          iconAlt: "web3_stake",
          link: l(W.WEB3_STAKE.pathname),
          titleIcon: null,
          target: "_self",
          title: i(J.Web3PTStaking),
          subTitle: i(J.Web3PTStakingDesc),
          trackClick: c("web3_stake"),
          hidden: !u,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/e634e18e-da2d-4b36-8e50-5ac3a8a6abc6/4-0.svg",
          iconAlt: "phemexia",
          link: l(W.PHEMEXIA.pathname),
          titleIcon: null,
          target: "_self",
          title: i(J.Phemexia),
          subTitle: i(J.PhemexiaDesc),
          trackClick: c("phemexia"),
          hidden: !1,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/9e22031d-4e49-4edb-a3b7-b72957fd0d09/4-1.svg",
          iconAlt: "soul_pass",
          link: l(W.WEB3_SOUL_PASS.pathname),
          titleIcon: null,
          target: "_self",
          title: i(J.Web3SoulPass),
          subTitle: i(J.Web3SoulPassDesc),
          trackClick: c("soul_pass"),
          hidden: !u,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/ea2fcbb2-4061-4402-ac53-d64ea558627a/4-2.svg",
          iconAlt: "token",
          link: l(W.WEB3_EQUITY_BENEFITS.pathname),
          titleIcon: null,
          target: "_self",
          title: i(J.Web3Token),
          subTitle: i(J.Web3TokenDesc),
          trackClick: c("token"),
          hidden: !u,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/1f775f84-32a1-4638-b1ce-0814da91459f/lending-protocol.png",
          iconAlt: "web3_stake",
          link: l(W.WEB3_LENDING_MARKET.pathname),
          titleIcon:
            "https://img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
          target: "_self",
          title: i(J.Web3LendingProtocol),
          subTitle: i(J.Web3LendingProtocolDesc),
          trackClick: c("lending_protocol"),
          hidden: !m,
        },*/
      ].filter((_) => !_.hidden))
    );
  }
  function c(u) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_web3_" + u,
      });
    };
  }
  return (
    (s.$$.update = () => {
      s.$$.dirty & 6 && o(a, n);
    }),
    [r, n, a]
  );
}
class Hc extends Ie {
  constructor(e) {
    super(), Te(this, e, Yc, Wc, Ce, {});
  }
}
const { window: ka } = Sl;
function Fc(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v, p, g, k, I, T, S;
  (e = new ct({
    props: {
      placement: Pt,
      modifiers: s[14],
      color: s[10],
      hoverColor: s[9],
      $$slots: { trigger: [qc], default: [jc] },
      $$scope: { ctx: s },
    },
  })),
    (l = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        noIcon: !0,
        $$slots: { trigger: [Xc] },
        $$scope: { ctx: s },
      },
    })),
    (a = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [Qc], default: [Kc] },
        $$scope: { ctx: s },
      },
    })),
    (r = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [Zc], default: [Jc] },
        $$scope: { ctx: s },
      },
    })),
    (c = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [ef], default: [xc] },
        $$scope: { ctx: s },
      },
    })),
    (m = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [lf], default: [tf] },
        $$scope: { ctx: s },
      },
    })),
    (v = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [nf], default: [sf] },
        $$scope: { ctx: s },
      },
    })),
    (g = new ct({
      props: {
        class: "ml24",
        placement: Pt,
        modifiers: s[14],
        color: s[10],
        hoverColor: s[9],
        $$slots: { trigger: [rf], default: [af] },
        $$scope: { ctx: s },
      },
    }));
  let C = s[12].title && xs(s),
    A = s[2] === "tr" && tn(s);
  return {
    c() {
      j(e.$$.fragment),
        (t = U()),
        j(l.$$.fragment),
        (n = U()),
        j(a.$$.fragment),
        (i = U()),
        j(r.$$.fragment),
        (o = U()),
        j(c.$$.fragment),
        (u = U()),
        j(m.$$.fragment),
        (_ = U()),
        j(v.$$.fragment),
        (p = U()),
        j(g.$$.fragment),
        (k = U()),
        C && C.c(),
        (I = U()),
        A && A.c(),
        (T = ye());
    },
    l(D) {
      K(e.$$.fragment, D),
        (t = M(D)),
        K(l.$$.fragment, D),
        (n = M(D)),
        K(a.$$.fragment, D),
        (i = M(D)),
        K(r.$$.fragment, D),
        (o = M(D)),
        K(c.$$.fragment, D),
        (u = M(D)),
        K(m.$$.fragment, D),
        (_ = M(D)),
        K(v.$$.fragment, D),
        (p = M(D)),
        K(g.$$.fragment, D),
        (k = M(D)),
        C && C.l(D),
        (I = M(D)),
        A && A.l(D),
        (T = ye());
    },
    m(D, L) {
      q(e, D, L),
        B(D, t, L),
        q(l, D, L),
        B(D, n, L),
        q(a, D, L),
        B(D, i, L),
        q(r, D, L),
        B(D, o, L),
        q(c, D, L),
        B(D, u, L),
        q(m, D, L),
        B(D, _, L),
        q(v, D, L),
        B(D, p, L),
        q(g, D, L),
        B(D, k, L),
        C && C.m(D, L),
        B(D, I, L),
        A && A.m(D, L),
        B(D, T, L),
        (S = !0);
    },
    p(D, L) {
      const O = {};
      L & 1024 && (O.color = D[10]),
        L & 512 && (O.hoverColor = D[9]),
        L & 33554464 && (O.$$scope = { dirty: L, ctx: D }),
        e.$set(O);
      const P = {};
      L & 1024 && (P.color = D[10]),
        L & 512 && (P.hoverColor = D[9]),
        L & 33556480 && (P.$$scope = { dirty: L, ctx: D }),
        l.$set(P);
      const R = {};
      L & 1024 && (R.color = D[10]),
        L & 512 && (R.hoverColor = D[9]),
        L & 33554432 && (R.$$scope = { dirty: L, ctx: D }),
        a.$set(R);
      const G = {};
      L & 1024 && (G.color = D[10]),
        L & 512 && (G.hoverColor = D[9]),
        L & 33554432 && (G.$$scope = { dirty: L, ctx: D }),
        r.$set(G);
      const N = {};
      L & 1024 && (N.color = D[10]),
        L & 512 && (N.hoverColor = D[9]),
        L & 33554432 && (N.$$scope = { dirty: L, ctx: D }),
        c.$set(N);
      const V = {};
      L & 1024 && (V.color = D[10]),
        L & 512 && (V.hoverColor = D[9]),
        L & 33554432 && (V.$$scope = { dirty: L, ctx: D }),
        m.$set(V);
      const Y = {};
      L & 1024 && (Y.color = D[10]),
        L & 512 && (Y.hoverColor = D[9]),
        L & 33554432 && (Y.$$scope = { dirty: L, ctx: D }),
        v.$set(Y);
      const z = {};
      L & 1024 && (z.color = D[10]),
        L & 512 && (z.hoverColor = D[9]),
        L & 33554432 && (z.$$scope = { dirty: L, ctx: D }),
        g.$set(z),
        D[12].title
          ? C
            ? C.p(D, L)
            : ((C = xs(D)), C.c(), C.m(I.parentNode, I))
          : C && (C.d(1), (C = null)),
        D[2] === "tr"
          ? A
            ? A.p(D, L)
            : ((A = tn(D)), A.c(), A.m(T.parentNode, T))
          : A && (A.d(1), (A = null));
    },
    i(D) {
      S ||
        ($(e.$$.fragment, D),
        $(l.$$.fragment, D),
        $(a.$$.fragment, D),
        $(r.$$.fragment, D),
        $(c.$$.fragment, D),
        $(m.$$.fragment, D),
        $(v.$$.fragment, D),
        $(g.$$.fragment, D),
        (S = !0));
    },
    o(D) {
      y(e.$$.fragment, D),
        y(l.$$.fragment, D),
        y(a.$$.fragment, D),
        y(r.$$.fragment, D),
        y(c.$$.fragment, D),
        y(m.$$.fragment, D),
        y(v.$$.fragment, D),
        y(g.$$.fragment, D),
        (S = !1);
    },
    d(D) {
      X(e, D),
        D && h(t),
        X(l, D),
        D && h(n),
        X(a, D),
        D && h(i),
        X(r, D),
        D && h(o),
        X(c, D),
        D && h(u),
        X(m, D),
        D && h(_),
        X(v, D),
        D && h(p),
        X(g, D),
        D && h(k),
        C && C.d(D),
        D && h(I),
        A && A.d(D),
        D && h(T);
    },
  };
}
function zc(s) {
  let e, t;
  return (
    (e = new dc({ props: { isTop: s[0] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 1 && (a.isTop = l[0]), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function jc(s) {
  let e, t;
  return (
    (e = new kc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Zs(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(e, "class", "title-icon svelte-bk4zcc"),
        f(e, "height", "14"),
        Se(e.src, (t = Gt.BUY_CRYPTO_ZERO_FEE_HEADER)) || f(e, "src", t),
        f(e, "alt", "zero fee");
    },
    m(l, n) {
      B(l, e, n);
    },
    p: me,
    d(l) {
      l && h(e);
    },
  };
}
function qc(s) {
  let e,
    t,
    l = s[13](J.BuyCrypto) + "",
    n,
    a,
    i = s[5] && Zs();
  return {
    c() {
      (e = b("span")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        i && i.c(),
        this.h();
    },
    l(r) {
      e = E(r, "SPAN", { slot: !0, class: !0 });
      var o = w(e);
      t = E(o, "SPAN", { class: !0 });
      var c = w(t);
      (n = F(c, l)),
        c.forEach(h),
        (a = M(o)),
        i && i.l(o),
        o.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger df aic svelte-bk4zcc");
    },
    m(r, o) {
      B(r, e, o), d(e, t), d(t, n), d(e, a), i && i.m(e, null);
    },
    p(r, o) {
      r[5]
        ? i
          ? i.p(r, o)
          : ((i = Zs()), i.c(), i.m(e, null))
        : i && (i.d(1), (i = null));
    },
    d(r) {
      r && h(e), i && i.d();
    },
  };
}
function Xc(s) {
  let e,
    t = s[13](J.Markets) + "",
    l,
    n,
    a;
  return {
    c() {
      (e = b("span")), (l = H(t)), this.h();
    },
    l(i) {
      e = E(i, "SPAN", { slot: !0, class: !0 });
      var r = w(e);
      (l = F(r, t)), r.forEach(h), this.h();
    },
    h() {
      f(e, "slot", "trigger"), f(e, "class", "trigger svelte-bk4zcc");
    },
    m(i, r) {
      B(i, e, r), d(e, l), n || ((a = ee(e, "click", s[20])), (n = !0));
    },
    p: me,
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function Kc(s) {
  let e, t;
  return (
    (e = new Sc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Qc(s) {
  let e,
    t,
    l = s[13](J.Contract) + "",
    n;
  return {
    c() {
      (e = b("span")), (t = b("span")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "SPAN", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "SPAN", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger svelte-bk4zcc");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function Jc(s) {
  let e, t;
  return (
    (e = new Cc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Zc(s) {
  let e,
    t,
    l = s[13](J.Spot) + "",
    n;
  return {
    c() {
      (e = b("span")), (t = b("span")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "SPAN", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "SPAN", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger svelte-bk4zcc");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function xc(s) {
  let e, t;
  return (
    (e = new yc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function ef(s) {
  let e,
    t,
    l = s[13](J.EarnMain) + "",
    n;
  return {
    c() {
      (e = b("span")), (t = b("span")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "SPAN", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "SPAN", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger svelte-bk4zcc");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function tf(s) {
  let e, t;
  return (
    (e = new Hc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function lf(s) {
  let e,
    t,
    l = s[13](J.Web3) + "",
    n,
    a,
    i,
    r;
  return {
    c() {
      (e = b("span")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        (i = b("img")),
        this.h();
    },
    l(o) {
      e = E(o, "SPAN", { slot: !0, class: !0 });
      var c = w(e);
      t = E(c, "SPAN", { class: !0 });
      var u = w(t);
      (n = F(u, l)),
        u.forEach(h),
        (a = M(c)),
        (i = E(c, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
        c.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(i, "class", "title-icon svelte-bk4zcc"),
        f(i, "height", "14"),
        Se(
          i.src,
          (r =
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png")
        ) || f(i, "src", r),
        f(i, "alt", "new"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger df aic svelte-bk4zcc");
    },
    m(o, c) {
      B(o, e, c), d(e, t), d(t, n), d(e, a), d(e, i);
    },
    p: me,
    d(o) {
      o && h(e);
    },
  };
}
function sf(s) {
  let e, t;
  return (
    (e = new Oc({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function nf(s) {
  let e,
    t,
    l = s[13](J.Learn) + "",
    n;
  return {
    c() {
      (e = b("span")), (t = b("span")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "SPAN", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "SPAN", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger svelte-bk4zcc");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function af(s) {
  let e, t;
  return (
    (e = new $c({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function rf(s) {
  let e,
    t,
    l = s[13](J.Promotions) + "",
    n;
  return {
    c() {
      (e = b("span")), (t = b("span")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "SPAN", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "SPAN", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "title svelte-bk4zcc"),
        f(e, "slot", "trigger"),
        f(e, "class", "trigger svelte-bk4zcc");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function xs(s) {
  let e,
    t,
    l = s[12].title + "",
    n,
    a,
    i,
    r = s[12].cornerIcon && en(s);
  return {
    c() {
      (e = b("a")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        r && r.c(),
        this.h();
    },
    l(o) {
      e = E(o, "A", { class: !0, href: !0 });
      var c = w(e);
      t = E(c, "SPAN", { class: !0 });
      var u = w(t);
      (n = F(u, l)),
        u.forEach(h),
        (a = M(c)),
        r && r.l(c),
        c.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "svelte-bk4zcc"),
        f(e, "class", "df aic ml24 T2 cp menu svelte-bk4zcc"),
        f(e, "href", (i = s[12].link)),
        Z(e, "active", W.CRYPTO_TRADING_COMPETITION_1_ON_1.pathname === s[7]);
    },
    m(o, c) {
      B(o, e, c), d(e, t), d(t, n), d(e, a), r && r.m(e, null);
    },
    p(o, c) {
      c & 4096 && l !== (l = o[12].title + "") && te(n, l),
        o[12].cornerIcon
          ? r
            ? r.p(o, c)
            : ((r = en(o)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        c & 4096 && i !== (i = o[12].link) && f(e, "href", i),
        c & 128 &&
          Z(e, "active", W.CRYPTO_TRADING_COMPETITION_1_ON_1.pathname === o[7]);
    },
    d(o) {
      o && h(e), r && r.d();
    },
  };
}
function en(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(e, "class", "hot-img ml4 svelte-bk4zcc"),
        f(e, "height", "16"),
        Se(e.src, (t = s[12].fullCornerIcon)) || f(e, "src", t),
        f(e, "alt", "new");
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n & 4096 && !Se(e.src, (t = l[12].fullCornerIcon)) && f(e, "src", t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function tn(s) {
  let e, t, l;
  return {
    c() {
      (e = b("a")), (t = b("span")), (l = H("BitYarisTR")), this.h();
    },
    l(n) {
      e = E(n, "A", { class: !0, href: !0, target: !0 });
      var a = w(e);
      t = E(a, "SPAN", { class: !0 });
      var i = w(t);
      (l = F(i, "BitYarisTR")), i.forEach(h), a.forEach(h), this.h();
    },
    h() {
      f(t, "class", "svelte-bk4zcc"),
        f(e, "class", "T2 cp menu svelte-bk4zcc"),
        f(e, "href", Ge.PHEMEX_TR),
        f(e, "target", "_blank"),
        Z(e, "ml36", s[4] >= 1600),
        Z(e, "ml12", s[4] < 1600);
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(t, l);
    },
    p(n, a) {
      a & 16 && Z(e, "ml36", n[4] >= 1600), a & 16 && Z(e, "ml12", n[4] < 1600);
    },
    d(n) {
      n && h(e);
    },
  };
}
function ln(s) {
  let e, t, l, n, a;
  return {
    c() {
      (e = b("div")), (t = b("i")), (l = H("")), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      t = E(r, "I", { class: !0 });
      var o = w(t);
      (l = F(o, "")), o.forEach(h), r.forEach(h), this.h();
    },
    h() {
      f(t, "class", "iconfont f16"),
        f(e, "class", "overflow-icon df jcc cp svelte-bk4zcc");
    },
    m(i, r) {
      B(i, e, r),
        d(e, t),
        d(t, l),
        n || ((a = ee(e, "click", s[16])), (n = !0));
    },
    p: me,
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function of(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _;
  ht(s[19]);
  const v = [zc, Fc],
    p = [];
  function g(I, T) {
    return I[15] ? 0 : 1;
  }
  (r = g(s)), (o = p[r] = v[r](s));
  let k = s[8] && ln(s);
  return {
    c() {
      (e = b("div")),
        (t = b("a")),
        (l = b("img")),
        (a = U()),
        (i = b("div")),
        o.c(),
        (c = U()),
        k && k.c(),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var T = w(e);
      t = E(T, "A", { class: !0, href: !0, target: !0 });
      var S = w(t);
      (l = E(S, "IMG", { height: !0, alt: !0, src: !0 })),
        S.forEach(h),
        (a = M(T)),
        (i = E(T, "DIV", { class: !0 }));
      var C = w(i);
      o.l(C), C.forEach(h), (c = M(T)), k && k.l(T), T.forEach(h), this.h();
    },
    h() {
      f(l, "height", "24"),
        f(l, "alt", "Logo"),
        Se(l.src, (n = s[6])) || f(l, "src", n),
        f(t, "class", "df mt2"),
        f(t, "href", s[3]),
        f(t, "target", "_self"),
        f(i, "class", "left-con ml24 df aic no-scroll-bar svelte-bk4zcc"),
        f(e, "class", "main df aic svelte-bk4zcc"),
        Z(e, "top", s[0]);
    },
    m(I, T) {
      B(I, e, T),
        d(e, t),
        d(t, l),
        d(e, a),
        d(e, i),
        p[r].m(i, null),
        s[21](i),
        d(e, c),
        k && k.m(e, null),
        (u = !0),
        m || ((_ = ee(ka, "resize", s[19])), (m = !0));
    },
    p(I, [T]) {
      (!u || (T & 64 && !Se(l.src, (n = I[6])))) && f(l, "src", n),
        (!u || T & 8) && f(t, "href", I[3]),
        o.p(I, T),
        I[8]
          ? k
            ? k.p(I, T)
            : ((k = ln(I)), k.c(), k.m(e, null))
          : k && (k.d(1), (k = null)),
        (!u || T & 1) && Z(e, "top", I[0]);
    },
    i(I) {
      u || ($(o), (u = !0));
    },
    o(I) {
      y(o), (u = !1);
    },
    d(I) {
      I && h(e), p[r].d(), s[21](null), k && k.d(), (m = !1), _();
    },
  };
}
const Pt = "bottom-start";
function cf(s, e, t) {
  let l, n, a, i, r, o;
  ge(s, ei, (N) => t(18, (a = N))),
    ge(s, vt, (N) => t(2, (i = N))),
    ge(s, We, (N) => t(11, (r = N))),
    ge(s, sa, (N) => t(12, (o = N)));
  let { isTop: c = !1 } = e,
    { useContractMenu: u = !1 } = e;
  const m = je("LG"),
    _ = [
      { name: "offset", options: { offset: [-24, 0] } },
      { name: "preventOverflow", options: { padding: 40 } },
    ];
  let v = qt.isMock(),
    p = "",
    g = 1600,
    k = !1,
    I,
    T,
    S,
    C = !1;
  Be(function () {
    let V = 0;
    const Y = 10,
      x = setInterval(() => {
        if (V > Y || C) {
          clearInterval(x);
          return;
        }
        t(8, (C = S && S.scrollWidth > S.clientWidth)), V++;
      }, 500);
  });
  function A(N) {
    const V = new ResizeObserver((Y) => {
      for (let z of Y) t(8, (C = z.target.scrollWidth > z.target.clientWidth));
    });
    V.observe(N), oa(() => N && V.unobserve(N));
  }
  function D() {
    S.scrollBy({ left: 100, behavior: "smooth" });
  }
  function L(N, V) {
    V.length > 0 && t(5, (k = V.some((Y) => (Y.weight & Math.pow(2, 20)) > 0))),
      t(3, (p = ut.BASE_URL + (N === "en" ? "" : "/" + N)));
  }
  function O(N, V) {
    return N
      ? V
        ? rt.LOGO_CONTRACT_LIGHT
        : rt.LOGO_LIGHT
      : V
      ? rt.LOGO_CONTRACT_DARK
      : rt.LOGO_DARK;
  }
  function P() {
    t(4, (g = ka.innerWidth));
  }
  const R = () => location.assign(r(W.MARKETS.pathname));
  function G(N) {
    gt[N ? "unshift" : "push"](() => {
      (S = N), t(1, S);
    });
  }
  return (
    (s.$$set = (N) => {
      "isTop" in N && t(0, (c = N.isTop)),
        "useContractMenu" in N && t(17, (u = N.useContractMenu));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 262148 && L(i, a),
        s.$$.dirty & 131073 && t(6, (I = O(c, u))),
        s.$$.dirty & 1 &&
          t(10, (l = c ? "var(--menu-dark)" : "var(--menu-light)")),
        s.$$.dirty & 1 &&
          t(9, (n = c ? "var(--menu-dark-hover)" : "var(--menu-light-hover)")),
        s.$$.dirty & 2 && S && A(S);
    }),
    t(7, (T = window.location.pathname)),
    [c, S, i, p, g, k, I, T, C, n, l, r, o, m, _, v, D, u, a, P, R, G]
  );
}
class ff extends Ie {
  constructor(e) {
    super(), Te(this, e, cf, of, Ce, { isTop: 0, useContractMenu: 17 });
  }
}
const uf = [
  W.WEB3_SOUL_PASS.pathname,
  W.XPT_MINING.pathname,
  W.STRATEGY_SQUARE.pathname,
  W.XPT_AIRDROP.pathname,
  W.CEX_AIRDROP.pathname,
  W.DEX_AIRDROP.pathname,
  W.FTX_AIRDROP.pathname,
  W.ALL_STAR_PROGRAM.pathname,
  W.WEB3_SOUL_PASS.pathname,
  W.XPT_MINING.pathname,
  W.STRATEGY_SQUARE.pathname,
  W.ACCOUNT_INVITE_FRIENDS_ENTRY.pathname,
];
function df(s, e) {
  if (!e) {
    _t(s(W.LOGIN.pathname));
    return;
  }
  _t(s(W.LOGIN.pathname) + "?" + bt.stringify({ target: e, action: "Target" }));
}
function sn(s, e) {
  if (!e) {
    _t(s(W.REGISTER.pathname));
    return;
  }
  _t(
    s(W.REGISTER.pathname) + "?" + bt.stringify({ target: e, action: "Target" })
  );
}
function Ia(s) {
  if (uf.map((e) => s(e)).includes(location.pathname)) {
    const e = location.origin + location.pathname + location.search;
    sn(s, e);
    return;
  }
  sn(s);
}
const hl = new Map(),
  pt = Object.freeze({
    INITIALIZED: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
    TIMEOUT: 4,
  }),
  hf = (s) => ({ component: s & 2 }),
  nn = (s) => ({ component: s[1] }),
  mf = (s) => ({ component: s & 2 }),
  an = (s) => ({ component: s[1] }),
  _f = (s) => ({ component: s & 2 }),
  rn = (s) => ({ component: s[1] }),
  gf = (s) => ({ component: s & 2 }),
  on = (s) => ({ component: s[1] }),
  pf = (s) => ({ component: s & 2 }),
  cn = (s) => ({ component: s[1] });
function vf(s) {
  let e, t, l, n;
  const a = [Tf, If, kf],
    i = [];
  function r(o, c) {
    return o[2].success ? 0 : o[2].default ? 1 : 2;
  }
  return (
    (e = r(s)),
    (t = i[e] = a[e](s)),
    {
      c() {
        t.c(), (l = ye());
      },
      l(o) {
        t.l(o), (l = ye());
      },
      m(o, c) {
        i[e].m(o, c), B(o, l, c), (n = !0);
      },
      p(o, c) {
        let u = e;
        (e = r(o)),
          e === u
            ? i[e].p(o, c)
            : (Ue(),
              y(i[u], 1, 1, () => {
                i[u] = null;
              }),
              Me(),
              (t = i[e]),
              t ? t.p(o, c) : ((t = i[e] = a[e](o)), t.c()),
              $(t, 1),
              t.m(l.parentNode, l));
      },
      i(o) {
        n || ($(t), (n = !0));
      },
      o(o) {
        y(t), (n = !1);
      },
      d(o) {
        i[e].d(o), o && h(l);
      },
    }
  );
}
function bf(s) {
  let e;
  const t = s[8].loading,
    l = lt(t, s, s[7], rn);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 130) &&
        st(l, t, n, n[7], e ? at(t, n[7], a, _f) : nt(n[7]), rn);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function Ef(s) {
  let e;
  const t = s[8].timeout,
    l = lt(t, s, s[7], on);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 130) &&
        st(l, t, n, n[7], e ? at(t, n[7], a, gf) : nt(n[7]), on);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function wf(s) {
  let e;
  const t = s[8].error,
    l = lt(t, s, s[7], cn);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 130) &&
        st(l, t, n, n[7], e ? at(t, n[7], a, pf) : nt(n[7]), cn);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function kf(s) {
  let e, t, l;
  const n = [s[3]];
  var a = s[1];
  function i(r) {
    let o = {};
    for (let c = 0; c < n.length; c += 1) o = ol(o, n[c]);
    return { props: o };
  }
  return (
    a && (e = Yl(a, i())),
    {
      c() {
        e && j(e.$$.fragment), (t = ye());
      },
      l(r) {
        e && K(e.$$.fragment, r), (t = ye());
      },
      m(r, o) {
        e && q(e, r, o), B(r, t, o), (l = !0);
      },
      p(r, o) {
        const c = o & 8 ? ca(n, [fa(r[3])]) : {};
        if (a !== (a = r[1])) {
          if (e) {
            Ue();
            const u = e;
            y(u.$$.fragment, 1, 0, () => {
              X(u, 1);
            }),
              Me();
          }
          a
            ? ((e = Yl(a, i())),
              j(e.$$.fragment),
              $(e.$$.fragment, 1),
              q(e, t.parentNode, t))
            : (e = null);
        } else a && e.$set(c);
      },
      i(r) {
        l || (e && $(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        e && y(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        r && h(t), e && X(e, r);
      },
    }
  );
}
function If(s) {
  let e;
  const t = s[8].default,
    l = lt(t, s, s[7], nn);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 130) &&
        st(l, t, n, n[7], e ? at(t, n[7], a, hf) : nt(n[7]), nn);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function Tf(s) {
  let e;
  const t = s[8].success,
    l = lt(t, s, s[7], an);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 130) &&
        st(l, t, n, n[7], e ? at(t, n[7], a, mf) : nt(n[7]), an);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function Cf(s) {
  let e, t, l, n;
  const a = [wf, Ef, bf, vf],
    i = [];
  function r(o, c) {
    return o[0] === pt.ERROR
      ? 0
      : o[0] === pt.TIMEOUT
      ? 1
      : o[0] === pt.LOADING
      ? 2
      : o[0] === pt.SUCCESS
      ? 3
      : -1;
  }
  return (
    ~(e = r(s)) && (t = i[e] = a[e](s)),
    {
      c() {
        t && t.c(), (l = ye());
      },
      l(o) {
        t && t.l(o), (l = ye());
      },
      m(o, c) {
        ~e && i[e].m(o, c), B(o, l, c), (n = !0);
      },
      p(o, [c]) {
        let u = e;
        (e = r(o)),
          e === u
            ? ~e && i[e].p(o, c)
            : (t &&
                (Ue(),
                y(i[u], 1, 1, () => {
                  i[u] = null;
                }),
                Me()),
              ~e
                ? ((t = i[e]),
                  t ? t.p(o, c) : ((t = i[e] = a[e](o)), t.c()),
                  $(t, 1),
                  t.m(l.parentNode, l))
                : (t = null));
      },
      i(o) {
        n || ($(t), (n = !0));
      },
      o(o) {
        y(t), (n = !1);
      },
      d(o) {
        ~e && i[e].d(o), o && h(l);
      },
    }
  );
}
function Df(s, e, t) {
  const l = ["loader", "timeout", "start"];
  let n = Wl(e, l),
    { $$slots: a = {}, $$scope: i } = e;
  const r = Al(a);
  let { loader: o } = e,
    { timeout: c = 3e3 } = e,
    { start: u = !1 } = e,
    m = pt.INITIALIZED,
    _;
  function v(g) {
    if ((t(0, (m = pt.INITIALIZED)), t(1, (_ = void 0)), hl.has(g)))
      t(0, (m = pt.SUCCESS)), t(1, (_ = hl.get(g)));
    else
      try {
        p(g, c);
      } catch {
        t(0, (m = pt.SUCCESS)), t(1, (_ = g));
      }
  }
  async function p(g, k) {
    t(0, (m = pt.LOADING));
    try {
      const I = await Promise.race([
        g(),
        new Promise((T, S) => {
          setTimeout(() => S("Timeout"), k);
        }),
      ]);
      t(1, (_ = I.default || I)), t(0, (m = pt.SUCCESS)), hl.set(g, _);
    } catch (I) {
      t(0, (m = I === "Timeout" ? pt.TIMEOUT : pt.ERROR));
    }
  }
  return (
    (s.$$set = (g) => {
      (e = ol(ol({}, e), hi(g))),
        t(3, (n = Wl(e, l))),
        "loader" in g && t(4, (o = g.loader)),
        "timeout" in g && t(5, (c = g.timeout)),
        "start" in g && t(6, (u = g.start)),
        "$$scope" in g && t(7, (i = g.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 80 && u && v(o);
    }),
    [m, _, r, n, o, c, u, i, a]
  );
}
class Ta extends Ie {
  constructor(e) {
    super(), Te(this, e, Df, Cf, Ce, { loader: 4, timeout: 5, start: 6 });
  }
}
function fn(s) {
  return (
    "https://apps.apple.com/" +
    ({
      en: "us",
      ru: "ru",
      ko: "kr",
      ja: "jp",
      es: "es",
      de: "de",
      fr: "fr",
      tr: "tr",
      pt: "pt",
      vi: "vi",
    }[s] || "us") +
    "/app"
  );
}
function un(s) {
  return "https://play.google.com/store/apps/" + s;
}
function Af(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[2](J.ScanTo) + "",
    o,
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("img")),
        (a = U()),
        (i = b("div")),
        (o = H(r)),
        (c = U()),
        (u = b("div")),
        (m = b("a")),
        (_ = b("img")),
        (p = U()),
        (g = b("a")),
        (k = b("img")),
        this.h();
    },
    l(T) {
      e = E(T, "DIV", { class: !0, style: !0 });
      var S = w(e);
      t = E(S, "DIV", { class: !0 });
      var C = w(t);
      l = E(C, "DIV", { class: !0 });
      var A = w(l);
      (n = E(A, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        (a = M(A)),
        (i = E(A, "DIV", { class: !0 }));
      var D = w(i);
      (o = F(D, r)),
        D.forEach(h),
        A.forEach(h),
        (c = M(C)),
        (u = E(C, "DIV", { class: !0 }));
      var L = w(u);
      m = E(L, "A", { target: !0, class: !0, href: !0 });
      var O = w(m);
      (_ = E(O, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        O.forEach(h),
        (p = M(L)),
        (g = E(L, "A", { target: !0, class: !0, href: !0 }));
      var P = w(g);
      (k = E(P, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        P.forEach(h),
        L.forEach(h),
        C.forEach(h),
        S.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "qrcode lazyload svelte-nkgkpg"),
        f(n, "alt", "qr code"),
        f(n, "data-src", s[0]),
        f(i, "class", "title mt8 f14 svelte-nkgkpg"),
        f(l, "class", "tc"),
        f(_, "class", "download lazyload svelte-nkgkpg"),
        f(_, "alt", "app store"),
        f(_, "data-src", Gt.APP_STORE_HOME),
        f(m, "target", "_blank"),
        f(m, "class", "df svelte-nkgkpg"),
        f(m, "href", (v = fn(s[1]))),
        f(k, "class", "download lazyload svelte-nkgkpg"),
        f(k, "alt", "google play"),
        f(k, "data-src", Gt.GOOGLE_PLAY_HOME),
        f(g, "target", "_blank"),
        f(g, "class", "df svelte-nkgkpg"),
        f(g, "href", (I = un(s[1]))),
        f(u, "class", "download-con df fdc jcsb svelte-nkgkpg"),
        f(t, "class", "df aic ais"),
        f(e, "class", "wrap br12 T2 svelte-nkgkpg"),
        Je(e, "--ratio-", s[3]);
    },
    m(T, S) {
      B(T, e, S),
        d(e, t),
        d(t, l),
        d(l, n),
        d(l, a),
        d(l, i),
        d(i, o),
        d(t, c),
        d(t, u),
        d(u, m),
        d(m, _),
        d(u, p),
        d(u, g),
        d(g, k);
    },
    p(T, [S]) {
      S & 1 && f(n, "data-src", T[0]),
        S & 2 && v !== (v = fn(T[1])) && f(m, "href", v),
        S & 2 && I !== (I = un(T[1])) && f(g, "href", I);
    },
    i: me,
    o: me,
    d(T) {
      T && h(e);
    },
  };
}
function Sf(s, e, t) {
  let l;
  ge(s, vt, (c) => t(1, (l = c)));
  const n = je("LG");
  let { width: a = 398 } = e,
    i = a / 398,
    r = "";
  Be(() => o());
  async function o() {
    const c = window.location.origin + W.DOWNLOAD.pathname;
    t(0, (r = await Qn.toDataURL(c, { width: 140 * i, margin: 0 })));
  }
  return (
    (s.$$set = (c) => {
      "width" in c && t(4, (a = c.width));
    }),
    [r, l, n, i, a]
  );
}
class Pf extends Ie {
  constructor(e) {
    super(), Te(this, e, Sf, Af, Ce, { width: 4 });
  }
}
function dn(s, e, t) {
  const l = s.slice();
  return (l[4] = e[t]), l;
}
function hn(s) {
  let e,
    t = s[4].detail.content + "";
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "announce content T3 lh18 fw2 svelte-1a17egd");
    },
    m(l, n) {
      B(l, e, n), (e.innerHTML = t);
    },
    p(l, n) {
      n & 2 && t !== (t = l[4].detail.content + "") && (e.innerHTML = t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function mn(s, e) {
  let t,
    l,
    n,
    a,
    i,
    r = e[4].detail.title + "",
    o,
    c = e[4].detail.title + "",
    u,
    m,
    _,
    v,
    p,
    g = Gl.formatDate(e[4].releaseTime) + "",
    k,
    I,
    T,
    S,
    C = e[4].detail.content && hn(e);
  return {
    key: s,
    first: null,
    c() {
      (t = b("div")),
        (l = b("span")),
        (n = U()),
        (a = b("a")),
        (i = b("div")),
        (o = H(r)),
        (u = H(c)),
        (m = U()),
        C && C.c(),
        (v = U()),
        (p = b("div")),
        (k = H(g)),
        (I = U()),
        this.h();
    },
    l(A) {
      t = E(A, "DIV", { class: !0 });
      var D = w(t);
      (l = E(D, "SPAN", { class: !0 })),
        w(l).forEach(h),
        (n = M(D)),
        (a = E(D, "A", { class: !0, href: !0 }));
      var L = w(a);
      i = E(L, "DIV", { class: !0 });
      var O = w(i);
      (o = F(O, r)),
        (u = F(O, c)),
        O.forEach(h),
        (m = M(L)),
        C && C.l(L),
        L.forEach(h),
        (v = M(D)),
        (p = E(D, "DIV", { class: !0, style: !0 }));
      var P = w(p);
      (k = F(P, g)), P.forEach(h), (I = M(D)), D.forEach(h), this.h();
    },
    h() {
      f(l, "class", "circle mr12 svelte-1a17egd"),
        f(i, "class", "announce f14 lh24 fw2 T2 svelte-1a17egd"),
        f(a, "class", "announce-con svelte-1a17egd"),
        f(a, "href", (_ = e[4].detail.webLink)),
        f(p, "class", "f12 fw1 lh18 T4 ml8"),
        Je(p, "margin-left", "auto"),
        f(t, "class", "item df aic svelte-1a17egd"),
        (this.first = t);
    },
    m(A, D) {
      B(A, t, D),
        d(t, l),
        d(t, n),
        d(t, a),
        d(a, i),
        d(i, o),
        d(i, u),
        d(a, m),
        C && C.m(a, null),
        d(t, v),
        d(t, p),
        d(p, k),
        d(t, I),
        T ||
          ((S = ee(a, "click", function () {
            yt(e[3](e[4])) && e[3](e[4]).apply(this, arguments);
          })),
          (T = !0));
    },
    p(A, D) {
      (e = A),
        D & 2 && r !== (r = e[4].detail.title + "") && te(o, r),
        D & 2 && c !== (c = e[4].detail.title + "") && te(u, c),
        e[4].detail.content
          ? C
            ? C.p(e, D)
            : ((C = hn(e)), C.c(), C.m(a, null))
          : C && (C.d(1), (C = null)),
        D & 2 && _ !== (_ = e[4].detail.webLink) && f(a, "href", _),
        D & 2 && g !== (g = Gl.formatDate(e[4].releaseTime) + "") && te(k, g);
    },
    d(A) {
      A && h(t), C && C.d(), (T = !1), S();
    },
  };
}
function Lf(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[2](J.RecentTrading) + "",
    c,
    u,
    m,
    _,
    v = s[2](J.All) + "",
    p,
    g,
    k,
    I,
    T,
    S,
    C = [],
    A = new Map(),
    D = s[1] || [];
  const L = (O) => O[4].id;
  for (let O = 0; O < D.length; O += 1) {
    let P = dn(s, D, O),
      R = L(P);
    A.set(R, (C[O] = mn(R, P)));
  }
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("i")),
        (a = H("")),
        (i = U()),
        (r = b("span")),
        (c = H(o)),
        (u = U()),
        (m = b("div")),
        (_ = b("a")),
        (p = H(v)),
        (g = b("i")),
        (k = H("")),
        (T = U()),
        (S = b("div"));
      for (let O = 0; O < C.length; O += 1) C[O].c();
      this.h();
    },
    l(O) {
      e = E(O, "DIV", { class: !0 });
      var P = w(e);
      t = E(P, "DIV", { class: !0 });
      var R = w(t);
      l = E(R, "DIV", { class: !0 });
      var G = w(l);
      n = E(G, "I", { class: !0 });
      var N = w(n);
      (a = F(N, "")),
        N.forEach(h),
        (i = M(G)),
        (r = E(G, "SPAN", { class: !0 }));
      var V = w(r);
      (c = F(V, o)),
        V.forEach(h),
        G.forEach(h),
        (u = M(R)),
        (m = E(R, "DIV", { class: !0 }));
      var Y = w(m);
      _ = E(Y, "A", { href: !0, target: !0 });
      var z = w(_);
      (p = F(z, v)), (g = E(z, "I", { class: !0 }));
      var x = w(g);
      (k = F(x, "")),
        x.forEach(h),
        z.forEach(h),
        Y.forEach(h),
        R.forEach(h),
        (T = M(P)),
        (S = E(P, "DIV", { class: !0 }));
      var ne = w(S);
      for (let ie = 0; ie < C.length; ie += 1) C[ie].l(ne);
      ne.forEach(h), P.forEach(h), this.h();
    },
    h() {
      f(n, "class", "iconfont f24"),
        f(r, "class", "ooo ml8 fw3"),
        f(l, "class", "notice-title df aic ooo"),
        f(g, "class", "iconfont ml4 f16"),
        f(_, "href", (I = s[0](Ge.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS"))),
        f(_, "target", "_blank"),
        f(m, "class", "df aic BLUE cp"),
        f(t, "class", "all df fdr jcsb lh24 T2 f14 fw1 svelte-1a17egd"),
        f(S, "class", "body mt8 svelte-1a17egd"),
        f(e, "class", "wrap br12 T2 svelte-1a17egd");
    },
    m(O, P) {
      B(O, e, P),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(l, i),
        d(l, r),
        d(r, c),
        d(t, u),
        d(t, m),
        d(m, _),
        d(_, p),
        d(_, g),
        d(g, k),
        d(e, T),
        d(e, S);
      for (let R = 0; R < C.length; R += 1) C[R].m(S, null);
    },
    p(O, [P]) {
      P & 1 &&
        I !== (I = O[0](Ge.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS")) &&
        f(_, "href", I),
        P & 10 &&
          ((D = O[1] || []),
          (C = ua(C, P, L, 1, O, D, A, S, da, mn, null, dn)));
    },
    i: me,
    o: me,
    d(O) {
      O && h(e);
      for (let P = 0; P < C.length; P += 1) C[P].d();
    },
  };
}
function Rf(s, e, t) {
  let l, n;
  ge(s, We, (r) => t(0, (l = r))), ge(s, ti, (r) => t(1, (n = r)));
  const a = je("LG");
  function i(r) {
    return function () {
      Ke.track("web_click", {
        $screen_name: "home",
        $element_content: "announcement_" + r.detail.title,
      });
    };
  }
  return [l, n, a, i];
}
class Of extends Ie {
  constructor(e) {
    super(), Te(this, e, Rf, Lf, Ce, {});
  }
}
function _n(s, e, t) {
  const l = s.slice();
  return (l[5] = e[t]), l;
}
function gn(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont f24");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function pn(s, e) {
  let t,
    l = e[5].text + "",
    n,
    a,
    i,
    r,
    o,
    c = e[1] === e[5].value && gn();
  return {
    key: s,
    first: null,
    c() {
      (t = b("li")), (n = H(l)), (a = U()), c && c.c(), (i = U()), this.h();
    },
    l(u) {
      t = E(u, "LI", { class: !0 });
      var m = w(t);
      (n = F(m, l)),
        (a = M(m)),
        c && c.l(m),
        (i = M(m)),
        m.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "item cp df aic jcsb svelte-1nc6bt"),
        Z(t, "active", e[1] === e[5].value),
        (this.first = t);
    },
    m(u, m) {
      B(u, t, m),
        d(t, n),
        d(t, a),
        c && c.m(t, null),
        d(t, i),
        r ||
          ((o = ee(t, "click", function () {
            yt(e[2](e[5].value)) && e[2](e[5].value).apply(this, arguments);
          })),
          (r = !0));
    },
    p(u, m) {
      (e = u),
        m & 1 && l !== (l = e[5].text + "") && te(n, l),
        e[1] === e[5].value
          ? c || ((c = gn()), c.c(), c.m(t, i))
          : c && (c.d(1), (c = null)),
        m & 3 && Z(t, "active", e[1] === e[5].value);
    },
    d(u) {
      u && h(t), c && c.d(), (r = !1), o();
    },
  };
}
function Nf(s) {
  let e,
    t,
    l,
    n = [],
    a = new Map(),
    i = s[0];
  const r = (o) => o[5].value;
  for (let o = 0; o < i.length; o += 1) {
    let c = _n(s, i, o),
      u = r(c);
    a.set(u, (n[o] = pn(u, c)));
  }
  return {
    c() {
      (e = b("div")), (t = b("section")), (l = b("ul"));
      for (let o = 0; o < n.length; o += 1) n[o].c();
      this.h();
    },
    l(o) {
      e = E(o, "DIV", { class: !0 });
      var c = w(e);
      t = E(c, "SECTION", { class: !0 });
      var u = w(t);
      l = E(u, "UL", { class: !0 });
      var m = w(l);
      for (let _ = 0; _ < n.length; _ += 1) n[_].l(m);
      m.forEach(h), u.forEach(h), c.forEach(h), this.h();
    },
    h() {
      f(l, "class", "wrap-ul df fww lh32 T2 svelte-1nc6bt"),
        f(t, "class", "B2 svelte-1nc6bt"),
        f(e, "class", "wrap dib br12 fw1 f14 svelte-1nc6bt");
    },
    m(o, c) {
      B(o, e, c), d(e, t), d(t, l);
      for (let u = 0; u < n.length; u += 1) n[u].m(l, null);
    },
    p(o, [c]) {
      c & 7 && ((i = o[0]), (n = ua(n, c, r, 1, o, i, a, l, da, pn, null, _n)));
    },
    i: me,
    o: me,
    d(o) {
      o && h(e);
      for (let c = 0; c < n.length; c += 1) n[c].d();
    },
  };
}
function Vf(s, e, t) {
  let l, n, a;
  ge(s, kl, (o) => t(3, (l = o))),
    ge(s, na, (o) => t(0, (n = o))),
    ge(s, vt, (o) => t(1, (a = o)));
  function i(o) {
    return function () {
      if (l === "Login") {
        r({ lang: o });
        return;
      }
      vt.set(o);
    };
  }
  async function r(o) {
    const { data: c, error: u } = await aa.updateProfile(o);
    if (c) {
      nl.next(c);
      const { lang: m } = o;
      m && vt.set(m);
    }
    u && Re.send("toast", "error", u);
  }
  return [n, a, i];
}
class Uf extends Ie {
  constructor(e) {
    super(), Te(this, e, Vf, Nf, Ce, {});
  }
}
function Mf(s) {
  let e, t, l;
  return (
    (t = new Uf({})),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "wrap p12 T2 svelte-1rmh303");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p: me,
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
class $f extends Ie {
  constructor(e) {
    super(), Te(this, e, null, Mf, Ce, {});
  }
}
function Gf(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[3] && vn(s),
    o = !tt.isServer && yf(s);
  return (
    (a = new ct({
      props: {
        class: "ml10",
        placement: Xt,
        modifiers: s[11],
        color: s[4],
        hoverColor: s[4],
        noIcon: !0,
        $$slots: { trigger: [Qf], default: [Kf] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        r && r.c(),
          (e = U()),
          o && o.c(),
          (t = U()),
          (l = b("div")),
          (n = U()),
          j(a.$$.fragment),
          this.h();
      },
      l(c) {
        r && r.l(c),
          (e = M(c)),
          o && o.l(c),
          (t = M(c)),
          (l = E(c, "DIV", { class: !0 })),
          w(l).forEach(h),
          (n = M(c)),
          K(a.$$.fragment, c),
          this.h();
      },
      h() {
        f(l, "class", "split ml10 svelte-u1nusg");
      },
      m(c, u) {
        r && r.m(c, u),
          B(c, e, u),
          o && o.m(c, u),
          B(c, t, u),
          B(c, l, u),
          B(c, n, u),
          q(a, c, u),
          (i = !0);
      },
      p(c, u) {
        c[3]
          ? r
            ? (r.p(c, u), u & 8 && $(r, 1))
            : ((r = vn(c)), r.c(), $(r, 1), r.m(e.parentNode, e))
          : r &&
            (Ue(),
            y(r, 1, 1, () => {
              r = null;
            }),
            Me()),
          tt.isServer || o.p(c, u);
        const m = {};
        u & 16 && (m.color = c[4]),
          u & 16 && (m.hoverColor = c[4]),
          u & 134217728 && (m.$$scope = { dirty: u, ctx: c }),
          a.$set(m);
      },
      i(c) {
        i || ($(r), $(o), $(a.$$.fragment, c), (i = !0));
      },
      o(c) {
        y(r), y(o), y(a.$$.fragment, c), (i = !1);
      },
      d(c) {
        r && r.d(c),
          c && h(e),
          o && o.d(c),
          c && h(t),
          c && h(l),
          c && h(n),
          X(a, c);
      },
    }
  );
}
function vn(s) {
  let e, t;
  return (
    (e = new ct({
      props: { noIcon: !0, $$slots: { trigger: [Bf] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 134217728 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Bf(s) {
  let e, t, l, n, a;
  return {
    c() {
      (e = b("div")), (t = b("img")), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0, slot: !0 });
      var r = w(e);
      (t = E(r, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        r.forEach(h),
        this.h();
    },
    h() {
      f(t, "width", "28"),
        f(t, "height", "42"),
        Se(t.src, (l = xn.BONUS_ICON)) || f(t, "src", l),
        f(t, "alt", "bonus"),
        f(e, "class", "ph12 mr10"),
        f(e, "slot", "trigger");
    },
    m(i, r) {
      B(i, e, r), d(e, t), n || ((a = ee(e, "click", s[17])), (n = !0));
    },
    p: me,
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function yf(s) {
  let e, t, l, n;
  const a = [Yf, Wf],
    i = [];
  function r(o, c) {
    return o[6] ? 0 : o[1] ? -1 : 1;
  }
  return (
    ~(t = r(s)) && (l = i[t] = a[t](s)),
    {
      c() {
        (e = b("div")), l && l.c(), this.h();
      },
      l(o) {
        e = E(o, "DIV", { class: !0 });
        var c = w(e);
        l && l.l(c), c.forEach(h), this.h();
      },
      h() {
        f(e, "class", "df aic");
      },
      m(o, c) {
        B(o, e, c), ~t && i[t].m(e, null), (n = !0);
      },
      p(o, c) {
        let u = t;
        (t = r(o)),
          t === u
            ? ~t && i[t].p(o, c)
            : (l &&
                (Ue(),
                y(i[u], 1, 1, () => {
                  i[u] = null;
                }),
                Me()),
              ~t
                ? ((l = i[t]),
                  l ? l.p(o, c) : ((l = i[t] = a[t](o)), l.c()),
                  $(l, 1),
                  l.m(e, null))
                : (l = null));
      },
      i(o) {
        n || ($(l), (n = !0));
      },
      o(o) {
        y(l), (n = !1);
      },
      d(o) {
        o && h(e), ~t && i[t].d();
      },
    }
  );
}
function Wf(s) {
  let e,
    t,
    l = s[8](J.LogIn) + "",
    n,
    a,
    i,
    r,
    o = s[8](J.RegisterNow) + "",
    c,
    u,
    m;
  return {
    c() {
      (e = b("div")),
        (t = b("span")),
        (n = H(l)),
        (a = U()),
        (i = b("div")),
        (r = b("span")),
        (c = H(o)),
        this.h();
    },
    l(_) {
      e = E(_, "DIV", {
        class: !0,
        "data-gac": !0,
        "data-gaa": !0,
        "data-gal": !0,
      });
      var v = w(e);
      t = E(v, "SPAN", {});
      var p = w(t);
      (n = F(p, l)),
        p.forEach(h),
        v.forEach(h),
        (a = M(_)),
        (i = E(_, "DIV", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
        }));
      var g = w(i);
      r = E(g, "SPAN", {});
      var k = w(r);
      (c = F(k, o)), k.forEach(h), g.forEach(h), this.h();
    },
    h() {
      f(e, "class", "login mr12 T2 ga home-login svelte-u1nusg"),
        f(e, "data-gac", "user.login"),
        f(e, "data-gaa", "link_click"),
        f(e, "data-gal", "header.login"),
        f(i, "class", "btn ml8 ga home-register svelte-u1nusg"),
        f(i, "data-gac", "user.register"),
        f(i, "data-gaa", "link_click"),
        f(i, "data-gal", "header.register");
    },
    m(_, v) {
      B(_, e, v),
        d(e, t),
        d(t, n),
        B(_, a, v),
        B(_, i, v),
        d(i, r),
        d(r, c),
        u || ((m = [ee(e, "click", s[14]), ee(i, "click", s[13])]), (u = !0));
    },
    p: me,
    i: me,
    o: me,
    d(_) {
      _ && h(e), _ && h(a), _ && h(i), (u = !1), xe(m);
    },
  };
}
function Yf(s) {
  let e, t, l, n, a;
  (e = new Ot({
    props: { type: "primary", $$slots: { default: [Hf] }, $$scope: { ctx: s } },
  })),
    e.$on("click", s[16]);
  let i = !s[9] && Ff(s);
  return (
    (n = new ct({
      props: {
        width: "280px",
        class: "ml10",
        placement: Xt,
        modifiers: s[11],
        color: s[4],
        hoverColor: s[4],
        noIcon: !0,
        $$slots: { trigger: [Xf], default: [qf] },
        $$scope: { ctx: s },
      },
    })),
    n.$on("mouseenter", s[15]("account")),
    {
      c() {
        j(e.$$.fragment), (t = U()), i && i.c(), (l = U()), j(n.$$.fragment);
      },
      l(r) {
        K(e.$$.fragment, r),
          (t = M(r)),
          i && i.l(r),
          (l = M(r)),
          K(n.$$.fragment, r);
      },
      m(r, o) {
        q(e, r, o),
          B(r, t, o),
          i && i.m(r, o),
          B(r, l, o),
          q(n, r, o),
          (a = !0);
      },
      p(r, o) {
        const c = {};
        o & 134217728 && (c.$$scope = { dirty: o, ctx: r }),
          e.$set(c),
          r[9] || i.p(r, o);
        const u = {};
        o & 16 && (u.color = r[4]),
          o & 16 && (u.hoverColor = r[4]),
          o & 134217764 && (u.$$scope = { dirty: o, ctx: r }),
          n.$set(u);
      },
      i(r) {
        a || ($(e.$$.fragment, r), $(i), $(n.$$.fragment, r), (a = !0));
      },
      o(r) {
        y(e.$$.fragment, r), y(i), y(n.$$.fragment, r), (a = !1);
      },
      d(r) {
        X(e, r), r && h(t), i && i.d(r), r && h(l), X(n, r);
      },
    }
  );
}
function Hf(s) {
  let e,
    t,
    l,
    n,
    a,
    i = s[8](J.Deposit) + "",
    r;
  return {
    c() {
      (e = b("div")),
        (t = b("i")),
        (l = H("")),
        (n = U()),
        (a = b("div")),
        (r = H(i)),
        this.h();
    },
    l(o) {
      e = E(o, "DIV", { class: !0 });
      var c = w(e);
      t = E(c, "I", { class: !0 });
      var u = w(t);
      (l = F(u, "")),
        u.forEach(h),
        (n = M(c)),
        (a = E(c, "DIV", { class: !0 }));
      var m = w(a);
      (r = F(m, i)), m.forEach(h), c.forEach(h), this.h();
    },
    h() {
      f(t, "class", "iconfont fw1"),
        f(a, "class", "ml8 fw2"),
        f(e, "class", "df aic jcc");
    },
    m(o, c) {
      B(o, e, c), d(e, t), d(t, l), d(e, n), d(e, a), d(a, r);
    },
    p: me,
    d(o) {
      o && h(e);
    },
  };
}
function Ff(s) {
  let e, t;
  return (
    (e = new ct({
      props: {
        width: "280px",
        class: "ml20",
        placement: Xt,
        modifiers: s[11],
        color: s[4],
        hoverColor: s[4],
        noIcon: !0,
        $$slots: { trigger: [jf], default: [zf] },
        $$scope: { ctx: s },
      },
    })),
    e.$on("mouseenter", s[15]("assets")),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 16 && (a.color = l[4]),
          n & 16 && (a.hoverColor = l[4]),
          n & 134217764 && (a.$$scope = { dirty: n, ctx: l }),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function zf(s) {
  let e, t;
  return (
    (e = new Ta({
      props: { loader: s[10].assets.loader, start: s[2].assets },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 4 && (a.start = l[2].assets), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function jf(s) {
  let e, t, l, n, a, i;
  return {
    c() {
      (e = b("div")), (t = b("div")), (l = b("i")), (n = H("")), this.h();
    },
    l(r) {
      e = E(r, "DIV", { slot: !0, class: !0 });
      var o = w(e);
      t = E(o, "DIV", { class: !0 });
      var c = w(t);
      l = E(c, "I", { class: !0 });
      var u = w(l);
      (n = F(u, "")), u.forEach(h), c.forEach(h), o.forEach(h), this.h();
    },
    h() {
      f(l, "class", "iconfont f1 f24"),
        f(t, "class", "circle-icon brp50 svelte-u1nusg"),
        f(e, "slot", "trigger"),
        f(e, "class", "assets icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(r, o) {
      B(r, e, o),
        d(e, t),
        d(t, l),
        d(l, n),
        a || ((i = ee(e, "click", s[21])), (a = !0));
    },
    p: me,
    d(r) {
      r && h(e), (a = !1), i();
    },
  };
}
function qf(s) {
  let e, t;
  return (
    (e = new Ta({
      props: { loader: s[10].account.loader, start: s[2].account },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 4 && (a.start = l[2].account), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Xf(s) {
  let e, t, l, n, a, i;
  return {
    c() {
      (e = b("div")), (t = b("div")), (l = b("i")), (n = H("")), this.h();
    },
    l(r) {
      e = E(r, "DIV", { slot: !0, class: !0 });
      var o = w(e);
      t = E(o, "DIV", { class: !0 });
      var c = w(t);
      l = E(c, "I", { class: !0 });
      var u = w(l);
      (n = F(u, "")), u.forEach(h), c.forEach(h), o.forEach(h), this.h();
    },
    h() {
      f(l, "class", "iconfont f1 f24"),
        f(t, "class", "circle-icon brp50 svelte-u1nusg"),
        f(e, "slot", "trigger"),
        f(e, "class", "account icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(r, o) {
      B(r, e, o),
        d(e, t),
        d(t, l),
        d(l, n),
        a || ((i = ee(e, "click", s[22])), (a = !0));
    },
    p: me,
    d(r) {
      r && h(e), (a = !1), i();
    },
  };
}
function Kf(s) {
  let e, t;
  return (
    (e = new Pf({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Qf(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("div")), (t = b("div")), (l = b("i")), (n = H("")), this.h();
    },
    l(a) {
      e = E(a, "DIV", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "DIV", { class: !0 });
      var r = w(t);
      l = E(r, "I", { class: !0 });
      var o = w(l);
      (n = F(o, "")), o.forEach(h), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(l, "class", "iconfont f1 f24"),
        f(t, "class", "circle-icon brp50 svelte-u1nusg"),
        f(e, "slot", "trigger"),
        f(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, l), d(l, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function Jf(s) {
  let e, t;
  return (
    (e = new Of({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function bn(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H(s[7])), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, s[7])), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "circle pa f10 svelte-u1nusg");
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n & 128 && te(t, l[7]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Zf(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[6] && s[7] > 0 && bn(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("i")),
        (n = H("")),
        (a = U()),
        (i = b("span")),
        r && r.c(),
        this.h();
    },
    l(o) {
      e = E(o, "DIV", { slot: !0, class: !0 });
      var c = w(e);
      t = E(c, "DIV", { class: !0 });
      var u = w(t);
      l = E(u, "I", { class: !0 });
      var m = w(l);
      (n = F(m, "")),
        m.forEach(h),
        u.forEach(h),
        (a = M(c)),
        (i = E(c, "SPAN", { class: !0 }));
      var _ = w(i);
      r && r.l(_), _.forEach(h), c.forEach(h), this.h();
    },
    h() {
      f(l, "class", "iconfont f1 f24"),
        f(t, "class", "circle-icon brp50 svelte-u1nusg"),
        f(i, "class", "icon df pr svelte-u1nusg"),
        f(e, "slot", "trigger"),
        f(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(o, c) {
      B(o, e, c),
        d(e, t),
        d(t, l),
        d(l, n),
        d(e, a),
        d(e, i),
        r && r.m(i, null);
    },
    p(o, c) {
      o[6] && o[7] > 0
        ? r
          ? r.p(o, c)
          : ((r = bn(o)), r.c(), r.m(i, null))
        : r && (r.d(1), (r = null));
    },
    d(o) {
      o && h(e), r && r.d();
    },
  };
}
function xf(s) {
  let e, t;
  return (
    (e = new $f({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function eu(s) {
  let e, t, l, n;
  return {
    c() {
      (e = b("div")), (t = b("div")), (l = b("i")), (n = H("")), this.h();
    },
    l(a) {
      e = E(a, "DIV", { slot: !0, class: !0 });
      var i = w(e);
      t = E(i, "DIV", { class: !0 });
      var r = w(t);
      l = E(r, "I", { class: !0 });
      var o = w(l);
      (n = F(o, "")), o.forEach(h), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(l, "class", "iconfont f1 f24"),
        f(t, "class", "circle-icon brp50 svelte-u1nusg"),
        f(e, "slot", "trigger"),
        f(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, l), d(l, n);
    },
    p: me,
    d(a) {
      a && h(e);
    },
  };
}
function tu(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = !tt.isJapanSite && Gf(s);
  return (
    (n = new ct({
      props: {
        class: "ml10",
        placement: Xt,
        modifiers: s[11],
        color: s[4],
        hoverColor: s[4],
        noIcon: !0,
        $$slots: { trigger: [Zf], default: [Jf] },
        $$scope: { ctx: s },
      },
    })),
    n.$on("mouseenter", s[12]),
    (i = new ct({
      props: {
        class: "ml10",
        placement: Xt,
        modifiers: s[11],
        color: s[4],
        hoverColor: s[4],
        noIcon: !0,
        $$slots: { trigger: [eu], default: [xf] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          o && o.c(),
          (l = U()),
          j(n.$$.fragment),
          (a = U()),
          j(i.$$.fragment),
          this.h();
      },
      l(c) {
        e = E(c, "DIV", { class: !0 });
        var u = w(e);
        t = E(u, "DIV", { class: !0 });
        var m = w(t);
        o && o.l(m),
          (l = M(m)),
          K(n.$$.fragment, m),
          (a = M(m)),
          K(i.$$.fragment, m),
          m.forEach(h),
          u.forEach(h),
          this.h();
      },
      h() {
        f(t, "class", "main df fdr aic svelte-u1nusg"),
          Z(t, "top", s[0]),
          f(e, "class", "df");
      },
      m(c, u) {
        B(c, e, u),
          d(e, t),
          o && o.m(t, null),
          d(t, l),
          q(n, t, null),
          d(t, a),
          q(i, t, null),
          (r = !0);
      },
      p(c, [u]) {
        tt.isJapanSite || o.p(c, u);
        const m = {};
        u & 16 && (m.color = c[4]),
          u & 16 && (m.hoverColor = c[4]),
          u & 134217920 && (m.$$scope = { dirty: u, ctx: c }),
          n.$set(m);
        const _ = {};
        u & 16 && (_.color = c[4]),
          u & 16 && (_.hoverColor = c[4]),
          u & 134217728 && (_.$$scope = { dirty: u, ctx: c }),
          i.$set(_),
          (!r || u & 1) && Z(t, "top", c[0]);
      },
      i(c) {
        r || ($(o), $(n.$$.fragment, c), $(i.$$.fragment, c), (r = !0));
      },
      o(c) {
        y(o), y(n.$$.fragment, c), y(i.$$.fragment, c), (r = !1);
      },
      d(c) {
        c && h(e), o && o.d(), X(n), X(i);
      },
    }
  );
}
const Xt = "bottom";
function lu(s, e, t) {
  let l, n, a, i, r, o;
  ge(s, We, (N) => t(5, (n = N))),
    ge(s, Kt, (N) => t(6, (a = N))),
    ge(s, li, (N) => t(7, (i = N))),
    ge(s, kl, (N) => t(19, (r = N))),
    ge(s, nl, (N) => t(20, (o = N)));
  let { isTop: c = !1 } = e,
    { modalUI: u = !1 } = e,
    { hiddenAccess: m = !1 } = e;
  const _ = je("LG"),
    v = qt.isMock(),
    p = {
      assets: {
        loader: () =>
          Hl(
            () => import("./chunk-766f2956.js"),
            [
              "js/chunk-766f2956.js",
              "js/chunk-8f7551c4.js",
              "js/chunk-772394bf.js",
              "js/app-6c8af094.js",
              "css/ToastView-44ce39d2.css",
              "js/chunk-f928d363.js",
              "css/AssetsDropDown-fb05b39d.css",
            ]
          ),
      },
      account: {
        loader: () =>
          Hl(
            () => import("./chunk-81db7c0f.js"),
            [
              "js/chunk-81db7c0f.js",
              "js/chunk-8f7551c4.js",
              "js/chunk-772394bf.js",
              "js/app-6c8af094.js",
              "css/ToastView-44ce39d2.css",
              "js/chunk-a50a1c93.js",
              "js/chunk-bbc88117.js",
              "css/AccountDropDown-7e878509.css",
            ]
          ),
      },
    },
    g = [{ name: "preventOverflow", options: { padding: 40 } }];
  let k = {},
    I = !1;
  function T() {
    i > 0 && a && S();
  }
  async function S() {
    const N = { itemKey: "announcement" },
      { data: V, error: Y } = await si.browseTime(N);
    V && ni(a ? "Login" : "Logout"), Y && Re.send("toast", "error", Y);
  }
  function C() {
    u ? Re.send("modal-register", "startRegister") : Ia(n);
  }
  function A() {
    const N = location.origin + location.pathname + location.search;
    df(n, N);
  }
  function D(N) {
    return function () {
      t(2, (k = { ...k, [N]: !0 }));
      const { mouseenterHandler: V } = p[N] || {};
      V && V();
    };
  }
  function L() {
    Ke.track("web_click", {
      $screen_name: "home",
      $element_content: "navigation_deposit",
    }),
      ia({ LG: _ });
  }
  function O() {
    Ke.track("web_click", {
      $screen_name: "home",
      $element_content: "navigation_rewards_hub",
    }),
      _t(n(W.BONUS.pathname));
  }
  function P(N, V) {
    if (V === "Logout") {
      t(3, (I = !0));
      return;
    }
    if (N && N.createTime) {
      const Y = N.createTime,
        z = 1e3 * 60 * 60 * 24;
      if (Date.now() - (Y + z * 30) < 0) {
        t(3, (I = !0));
        return;
      }
      t(3, (I = !1));
    }
  }
  const R = () => location.assign(n(W.ASSETS_OVERVIEW.pathname)),
    G = () => location.assign(n(W.ACCOUNT_OVERVIEW.pathname));
  return (
    (s.$$set = (N) => {
      "isTop" in N && t(0, (c = N.isTop)),
        "modalUI" in N && t(18, (u = N.modalUI)),
        "hiddenAccess" in N && t(1, (m = N.hiddenAccess));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 &&
        t(4, (l = c ? "var(--menu-dark)" : "var(--menu-light)")),
        s.$$.dirty & 1,
        s.$$.dirty & 1572864 && P(o, r);
    }),
    [c, m, k, I, l, n, a, i, _, v, p, g, T, C, A, D, L, O, u, r, o, R, G]
  );
}
class Ca extends Ie {
  constructor(e) {
    super(),
      Te(this, e, lu, tu, Ce, { isTop: 0, modalUI: 18, hiddenAccess: 1 });
  }
}
function En(s, e, t) {
  const l = s.slice();
  return (l[11] = e[t]), l;
}
function wn(s, e, t) {
  const l = s.slice();
  return (l[14] = e[t]), l;
}
function su(s) {
  let e,
    t = s[11].title + "",
    l;
  return {
    c() {
      (e = b("a")), (l = H(t)), this.h();
    },
    l(n) {
      e = E(n, "A", { class: !0, href: !0 });
      var a = w(e);
      (l = F(a, t)), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "header-menu svelte-l7bfp5"),
        f(e, "href", s[11].url),
        Z(e, "current", s[6](s[11]));
    },
    m(n, a) {
      B(n, e, a), d(e, l);
    },
    p: me,
    i: me,
    o: me,
    d(n) {
      n && h(e);
    },
  };
}
function nu(s) {
  let e, t;
  return (
    (e = new ct({
      props: {
        hoverColor: s[6](s[11])
          ? s[3][s[1]].activeColor
          : s[3][s[1]].bannerColor,
        color: s[6](s[11]) ? s[3][s[1]].activeColor : s[3][s[1]].bannerColor,
        $$slots: { trigger: [iu], default: [au] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 2 &&
          (a.hoverColor = l[6](l[11])
            ? l[3][l[1]].activeColor
            : l[3][l[1]].bannerColor),
          n & 2 &&
            (a.color = l[6](l[11])
              ? l[3][l[1]].activeColor
              : l[3][l[1]].bannerColor),
          n & 512 && (a.$$scope = { dirty: n, ctx: l }),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function kn(s) {
  let e, t;
  return (
    (e = new Ze({
      props: { link: s[14].url, target: "_self", title: s[14].title },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p: me,
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function au(s) {
  let e,
    t,
    l = s[11].children,
    n = [];
  for (let i = 0; i < l.length; i += 1) n[i] = kn(wn(s, l, i));
  const a = (i) =>
    y(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(r);
      r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "menu-items svelte-l7bfp5");
    },
    m(i, r) {
      B(i, e, r);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      t = !0;
    },
    p(i, r) {
      if (r & 16) {
        l = i[11].children;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = wn(i, l, o);
          n[o]
            ? (n[o].p(c, r), $(n[o], 1))
            : ((n[o] = kn(c)), n[o].c(), $(n[o], 1), n[o].m(e, null));
        }
        for (Ue(), o = l.length; o < n.length; o += 1) a(o);
        Me();
      }
    },
    i(i) {
      if (!t) {
        for (let r = 0; r < l.length; r += 1) $(n[r]);
        t = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1) y(n[r]);
      t = !1;
    },
    d(i) {
      i && h(e), St(n, i);
    },
  };
}
function iu(s) {
  let e,
    t = s[11].title + "",
    l;
  return {
    c() {
      (e = b("span")), (l = H(t)), this.h();
    },
    l(n) {
      e = E(n, "SPAN", { slot: !0, class: !0 });
      var a = w(e);
      (l = F(a, t)), a.forEach(h), this.h();
    },
    h() {
      f(e, "slot", "trigger"),
        f(e, "class", "header-menu svelte-l7bfp5"),
        Z(e, "current", s[6](s[11]));
    },
    m(n, a) {
      B(n, e, a), d(e, l);
    },
    p: me,
    d(n) {
      n && h(e);
    },
  };
}
function In(s) {
  let e, t, l, n;
  const a = [nu, su],
    i = [];
  function r(o, c) {
    return o[11].children ? 0 : 1;
  }
  return (
    (e = r(s)),
    (t = i[e] = a[e](s)),
    {
      c() {
        t.c(), (l = ye());
      },
      l(o) {
        t.l(o), (l = ye());
      },
      m(o, c) {
        i[e].m(o, c), B(o, l, c), (n = !0);
      },
      p(o, c) {
        t.p(o, c);
      },
      i(o) {
        n || ($(t), (n = !0));
      },
      o(o) {
        y(t), (n = !1);
      },
      d(o) {
        i[e].d(o), o && h(l);
      },
    }
  );
}
function ru(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u = s[5].title + "",
    m,
    _,
    v,
    p = s[4],
    g = [];
  for (let S = 0; S < p.length; S += 1) g[S] = In(En(s, p, S));
  const k = (S) =>
      y(g[S], 1, 1, () => {
        g[S] = null;
      }),
    I = s[8].default,
    T = lt(I, s, s[9], null);
  return {
    c() {
      (e = b("div")), (t = b("a")), (l = b("img")), (i = U()), (r = b("div"));
      for (let S = 0; S < g.length; S += 1) g[S].c();
      (o = U()), (c = b("a")), (m = H(u)), (_ = U()), T && T.c(), this.h();
    },
    l(S) {
      e = E(S, "DIV", { class: !0, style: !0 });
      var C = w(e);
      t = E(C, "A", { class: !0, href: !0, target: !0 });
      var A = w(t);
      (l = E(A, "IMG", { alt: !0, src: !0, class: !0 })),
        A.forEach(h),
        (i = M(C)),
        (r = E(C, "DIV", { class: !0 }));
      var D = w(r);
      for (let O = 0; O < g.length; O += 1) g[O].l(D);
      (o = M(D)), (c = E(D, "A", { class: !0, href: !0 }));
      var L = w(c);
      (m = F(L, u)),
        L.forEach(h),
        D.forEach(h),
        (_ = M(C)),
        T && T.l(C),
        C.forEach(h),
        this.h();
    },
    h() {
      f(l, "alt", "Logo"),
        Se(l.src, (n = s[3][s[1]].logo)) || f(l, "src", n),
        f(l, "class", "svelte-l7bfp5"),
        f(t, "class", "df mt2 logo svelte-l7bfp5"),
        f(t, "href", (a = s[2](W.HOME.pathname))),
        f(t, "target", "_self"),
        f(c, "class", "header-menu svelte-l7bfp5"),
        f(c, "href", s[5].url),
        Z(c, "current", s[6](s[5])),
        f(r, "class", "navs f1 df jcc aic svelte-l7bfp5"),
        f(e, "class", "header-place df aic svelte-l7bfp5"),
        Je(e, "--bannerBg", s[3][s[1]].bannerBg),
        Je(e, "--bannerColor", s[3][s[1]].bannerColor),
        Je(e, "--activeColor", s[3][s[1]].activeColor),
        Z(e, "web3", s[0]);
    },
    m(S, C) {
      B(S, e, C), d(e, t), d(t, l), d(e, i), d(e, r);
      for (let A = 0; A < g.length; A += 1) g[A].m(r, null);
      d(r, o), d(r, c), d(c, m), d(e, _), T && T.m(e, null), (v = !0);
    },
    p(S, [C]) {
      if (
        ((!v || (C & 2 && !Se(l.src, (n = S[3][S[1]].logo)))) && f(l, "src", n),
        (!v || (C & 4 && a !== (a = S[2](W.HOME.pathname)))) && f(t, "href", a),
        C & 90)
      ) {
        p = S[4];
        let A;
        for (A = 0; A < p.length; A += 1) {
          const D = En(S, p, A);
          g[A]
            ? (g[A].p(D, C), $(g[A], 1))
            : ((g[A] = In(D)), g[A].c(), $(g[A], 1), g[A].m(r, o));
        }
        for (Ue(), A = p.length; A < g.length; A += 1) k(A);
        Me();
      }
      T &&
        T.p &&
        (!v || C & 512) &&
        st(T, I, S, S[9], v ? at(I, S[9], C, null) : nt(S[9]), null),
        (!v || C & 2) && Je(e, "--bannerBg", S[3][S[1]].bannerBg),
        (!v || C & 2) && Je(e, "--bannerColor", S[3][S[1]].bannerColor),
        (!v || C & 2) && Je(e, "--activeColor", S[3][S[1]].activeColor),
        (!v || C & 1) && Z(e, "web3", S[0]);
    },
    i(S) {
      if (!v) {
        for (let C = 0; C < p.length; C += 1) $(g[C]);
        $(T, S), (v = !0);
      }
    },
    o(S) {
      g = g.filter(Boolean);
      for (let C = 0; C < g.length; C += 1) y(g[C]);
      y(T, S), (v = !1);
    },
    d(S) {
      S && h(e), St(g, S), T && T.d(S);
    },
  };
}
function ou(s, e, t) {
  let l;
  ge(s, We, (p) => t(2, (l = p)));
  let { $$slots: n = {}, $$scope: a } = e,
    { web3: i = !1 } = e,
    { isTop: r = !1 } = e,
    { mode: o = "default" } = e;
  const c = je("LG"),
    u = {
      default: {
        logo: Gt.LOGO_PULSE_LIGHT,
        bannerBg: "#fff",
        bannerColor: "#000",
        activeColor: "#45e555",
      },
      dark: {
        logo: Gt.LOGO_PULSE_DARK,
        bannerBg: "transparent",
        bannerColor: "#fff",
        activeColor: "#45e555",
      },
    },
    m = [
      { title: c(J.Home), url: l(W.HOME.pathname) },
      {
        title: c(J.Chat2Earn),
        url: l(W.WEB3_SOCIAL_TRADE_PT_REWARDS.pathname),
      },
      {
        title: c(ai.Trade),
        children: [
          {
            title: c(J.BuyCrypto),
            url: l(W.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname),
          },
          { title: c(J.Spot), url: Ge.PHEMEX_SPOT_TRADE + "/PTUSDT" },
          { title: c(J.Contract), url: Ge.PHEMEX_CONTRACT_TRADE_USDS },
        ],
      },
      {
        title: c(J.PhemexToken),
        children: [
          {
            title: c(J.PhemexTokenBenefits),
            url: l(W.WEB3_EQUITY_BENEFITS.pathname),
          },
          { title: c(J.Web3Whitepaper), url: Ge.Web3Whitepaper },
        ],
      },
    ],
    _ = {
      title: c(J.LaunchPulseApp),
      url: l(W.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname),
    };
  function v(p) {
    if (tt.isBrowser) {
      const { url: g, children: k } = p;
      if (window.location.pathname === g) return !0;
      if (k) {
        for (let I = 0; I < k.length; I++) if (v(k[I])) return !0;
      }
    }
    return !1;
  }
  return (
    (s.$$set = (p) => {
      "web3" in p && t(0, (i = p.web3)),
        "isTop" in p && t(7, (r = p.isTop)),
        "mode" in p && t(1, (o = p.mode)),
        "$$scope" in p && t(9, (a = p.$$scope));
    }),
    [i, o, l, u, m, _, v, r, n, a]
  );
}
class cu extends Ie {
  constructor(e) {
    super(), Te(this, e, ou, ru, Ce, { web3: 0, isTop: 7, mode: 1 });
  }
}
function fu(s) {
  let e, t, l;
  return {
    c() {
      (e = b("div")), (t = b("a")), this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = w(e);
      (t = E(a, "A", { class: !0, style: !0, href: !0 })),
        w(t).forEach(h),
        a.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "db svelte-27uc3m"),
        f(t, "style", s[1]),
        f(t, "href", (l = s[0](W.DOWNLOAD.pathname))),
        f(e, "class", "wrap svelte-27uc3m");
    },
    m(n, a) {
      B(n, e, a), d(e, t);
    },
    p(n, [a]) {
      a & 1 && l !== (l = n[0](W.DOWNLOAD.pathname)) && f(t, "href", l);
    },
    i: me,
    o: me,
    d(n) {
      n && h(e);
    },
  };
}
function uu(s, e, t) {
  let l;
  ge(s, We, (i) => t(0, (l = i)));
  const a = `background: url("${`${ut.STATIC_URL}/pubimg/3d3bab7bcb9eeef5e6bb42fa6140a159a80d9cc794aa6db3bbdfebe440bc9b10.png`}") no-repeat top center/auto 60px`;
  return [l, a];
}
class du extends Ie {
  constructor(e) {
    super(), Te(this, e, uu, fu, Ce, {});
  }
}
function Tn(s, e, t) {
  const l = s.slice();
  return (l[26] = e[t]), (l[28] = t), l;
}
function Cn(s, e, t) {
  const l = s.slice();
  return (l[29] = e[t]), l;
}
function hu(s) {
  let e, t, l, n, a;
  return (
    (t = new ft({
      props: {
        class: "btn f1",
        type: "common",
        size: "small",
        href: s[0](W.LOGIN.pathname) + "?" + bt.stringify({ target: s[9] }),
        $$slots: { default: [_u] },
        $$scope: { ctx: s },
      },
    })),
    (n = new ft({
      props: {
        class: "btn ml16 f1",
        type: "primary",
        size: "small",
        href: "javascript:;",
        $$slots: { default: [gu] },
        $$scope: { ctx: s },
      },
    })),
    n.$on("click", s[13]),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), (l = U()), j(n.$$.fragment), this.h();
      },
      l(i) {
        e = E(i, "DIV", { class: !0, style: !0 });
        var r = w(e);
        K(t.$$.fragment, r),
          (l = M(r)),
          K(n.$$.fragment, r),
          r.forEach(h),
          this.h();
      },
      h() {
        f(e, "class", "login df aic svelte-1q96dh5"),
          Je(e, "background", "url(" + rt.H5_MASK + ") no-repeat"),
          Je(e, "background-size", "100% 100%");
      },
      m(i, r) {
        B(i, e, r), q(t, e, null), d(e, l), q(n, e, null), (a = !0);
      },
      p(i, r) {
        const o = {};
        r[0] & 1 &&
          (o.href =
            i[0](W.LOGIN.pathname) + "?" + bt.stringify({ target: i[9] })),
          r[1] & 2 && (o.$$scope = { dirty: r, ctx: i }),
          t.$set(o);
        const c = {};
        r[1] & 2 && (c.$$scope = { dirty: r, ctx: i }), n.$set(c);
      },
      i(i) {
        a || ($(t.$$.fragment, i), $(n.$$.fragment, i), (a = !0));
      },
      o(i) {
        y(t.$$.fragment, i), y(n.$$.fragment, i), (a = !1);
      },
      d(i) {
        i && h(e), X(t), X(n);
      },
    }
  );
}
function mu(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[5].nickName + "",
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S;
  return (
    (k = new ft({
      props: {
        class: "btn f1",
        type: "primary",
        size: "small",
        href: s[0](W.ASSETS_OVERVIEW.pathname),
        $$slots: { default: [pu] },
        $$scope: { ctx: s },
      },
    })),
    (T = new ft({
      props: {
        class: "btn account ml16 f1",
        type: "common",
        size: "small",
        href: s[0](W.ACCOUNT_OVERVIEW.pathname),
        $$slots: { default: [vu] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = b("a")),
          (t = b("div")),
          (l = b("img")),
          (a = U()),
          (i = b("div")),
          (r = b("div")),
          (c = H(o)),
          (u = U()),
          (m = b("i")),
          (_ = H("")),
          (p = U()),
          (g = b("div")),
          j(k.$$.fragment),
          (I = U()),
          j(T.$$.fragment),
          this.h();
      },
      l(C) {
        e = E(C, "A", { class: !0, href: !0 });
        var A = w(e);
        t = E(A, "DIV", { class: !0 });
        var D = w(t);
        (l = E(D, "IMG", { class: !0, src: !0, alt: !0 })),
          D.forEach(h),
          (a = M(A)),
          (i = E(A, "DIV", { class: !0 }));
        var L = w(i);
        r = E(L, "DIV", { class: !0 });
        var O = w(r);
        (c = F(O, o)), O.forEach(h), (u = M(L)), (m = E(L, "I", { class: !0 }));
        var P = w(m);
        (_ = F(P, "")),
          P.forEach(h),
          L.forEach(h),
          A.forEach(h),
          (p = M(C)),
          (g = E(C, "DIV", { class: !0 }));
        var R = w(g);
        K(k.$$.fragment, R),
          (I = M(R)),
          K(T.$$.fragment, R),
          R.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "dib wp100 hp100"),
          Se(l.src, (n = s[7](s[5].avatar))) || f(l, "src", n),
          f(l, "alt", "avatar"),
          f(t, "class", "avatar ovh svelte-1q96dh5"),
          f(r, "class", "w180 f18 fw3 T2 ooo svelte-1q96dh5"),
          f(m, "class", "iconfont arrow T3 svelte-1q96dh5"),
          f(i, "class", "df jcsb aic f1 ml10 ovh"),
          f(e, "class", "df aic ovh"),
          f(e, "href", (v = s[0](W.ACCOUNT_OVERVIEW.pathname))),
          f(g, "class", "df jcsb mt10");
      },
      m(C, A) {
        B(C, e, A),
          d(e, t),
          d(t, l),
          d(e, a),
          d(e, i),
          d(i, r),
          d(r, c),
          d(i, u),
          d(i, m),
          d(m, _),
          B(C, p, A),
          B(C, g, A),
          q(k, g, null),
          d(g, I),
          q(T, g, null),
          (S = !0);
      },
      p(C, A) {
        (!S || (A[0] & 32 && !Se(l.src, (n = C[7](C[5].avatar))))) &&
          f(l, "src", n),
          (!S || A[0] & 32) && o !== (o = C[5].nickName + "") && te(c, o),
          (!S || (A[0] & 1 && v !== (v = C[0](W.ACCOUNT_OVERVIEW.pathname)))) &&
            f(e, "href", v);
        const D = {};
        A[0] & 1 && (D.href = C[0](W.ASSETS_OVERVIEW.pathname)),
          A[1] & 2 && (D.$$scope = { dirty: A, ctx: C }),
          k.$set(D);
        const L = {};
        A[0] & 1 && (L.href = C[0](W.ACCOUNT_OVERVIEW.pathname)),
          A[1] & 2 && (L.$$scope = { dirty: A, ctx: C }),
          T.$set(L);
      },
      i(C) {
        S || ($(k.$$.fragment, C), $(T.$$.fragment, C), (S = !0));
      },
      o(C) {
        y(k.$$.fragment, C), y(T.$$.fragment, C), (S = !1);
      },
      d(C) {
        C && h(e), C && h(p), C && h(g), X(k), X(T);
      },
    }
  );
}
function _u(s) {
  let e = s[6](J.LogIn) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function gu(s) {
  let e = s[6](J.RegisterNow) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function pu(s) {
  let e = s[6](J.Assets) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function vu(s) {
  let e = s[6](J.Account) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p: me,
    d(l) {
      l && h(t);
    },
  };
}
function Dn(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[26].title + "",
    c,
    u,
    m,
    _,
    v,
    p,
    g;
  function k(D, L) {
    if (D[26].icon) return Eu;
    if (D[26].img) return bu;
  }
  let I = k(s),
    T = I && I(s),
    S = s[26].tag && An(s),
    C = s[26].hasChildren && Sn(s),
    A = s[2] === s[28] && s[3] && Pn(s);
  return {
    c() {
      (e = b("li")),
        (t = b("a")),
        (l = b("div")),
        (n = b("div")),
        T && T.c(),
        (a = U()),
        (i = b("div")),
        (r = b("span")),
        (c = H(o)),
        (u = U()),
        S && S.c(),
        (m = U()),
        C && C.c(),
        (v = U()),
        A && A.c(),
        this.h();
    },
    l(D) {
      e = E(D, "LI", { class: !0 });
      var L = w(e);
      t = E(L, "A", { href: !0, class: !0 });
      var O = w(t);
      l = E(O, "DIV", { class: !0 });
      var P = w(l);
      n = E(P, "DIV", { class: !0 });
      var R = w(n);
      T && T.l(R), (a = M(R)), (i = E(R, "DIV", {}));
      var G = w(i);
      r = E(G, "SPAN", { class: !0 });
      var N = w(r);
      (c = F(N, o)),
        N.forEach(h),
        (u = M(G)),
        S && S.l(G),
        G.forEach(h),
        R.forEach(h),
        (m = M(P)),
        C && C.l(P),
        P.forEach(h),
        O.forEach(h),
        (v = M(L)),
        A && A.l(L),
        L.forEach(h),
        this.h();
    },
    h() {
      f(r, "class", "title svelte-1q96dh5"),
        f(n, "class", "df aic"),
        f(l, "class", "df aic jcsb ph16"),
        f(
          t,
          "href",
          (_ = s[26].hasChildren ? "javascript:void(0);" : s[26].link)
        ),
        f(t, "class", "svelte-1q96dh5"),
        f(e, "class", "svelte-1q96dh5"),
        Z(e, "b-b", s[26].hasBorder);
    },
    m(D, L) {
      B(D, e, L),
        d(e, t),
        d(t, l),
        d(l, n),
        T && T.m(n, null),
        d(n, a),
        d(n, i),
        d(i, r),
        d(r, c),
        d(i, u),
        S && S.m(i, null),
        d(l, m),
        C && C.m(l, null),
        d(e, v),
        A && A.m(e, null),
        p || ((g = ee(l, "click", s[10](s[28]))), (p = !0));
    },
    p(D, L) {
      (s = D),
        I === (I = k(s)) && T
          ? T.p(s, L)
          : (T && T.d(1), (T = I && I(s)), T && (T.c(), T.m(n, a))),
        L[0] & 16 && o !== (o = s[26].title + "") && te(c, o),
        s[26].tag
          ? S
            ? S.p(s, L)
            : ((S = An(s)), S.c(), S.m(i, null))
          : S && (S.d(1), (S = null)),
        s[26].hasChildren
          ? C
            ? C.p(s, L)
            : ((C = Sn(s)), C.c(), C.m(l, null))
          : C && (C.d(1), (C = null)),
        L[0] & 16 &&
          _ !== (_ = s[26].hasChildren ? "javascript:void(0);" : s[26].link) &&
          f(t, "href", _),
        s[2] === s[28] && s[3]
          ? A
            ? A.p(s, L)
            : ((A = Pn(s)), A.c(), A.m(e, null))
          : A && (A.d(1), (A = null)),
        L[0] & 16 && Z(e, "b-b", s[26].hasBorder);
    },
    d(D) {
      D && h(e), T && T.d(), S && S.d(), C && C.d(), A && A.d(), (p = !1), g();
    },
  };
}
function bu(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { width: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(e, "width", "20"),
        f(e, "height", "20"),
        Se(e.src, (t = s[26].img)) || f(e, "src", t),
        f(e, "alt", "");
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n[0] & 16 && !Se(e.src, (t = l[26].img)) && f(e, "src", t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Eu(s) {
  let e,
    t = s[26].icon + "";
  return {
    c() {
      (e = b("i")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont T3");
    },
    m(l, n) {
      B(l, e, n), (e.innerHTML = t);
    },
    p(l, n) {
      n[0] & 16 && t !== (t = l[26].icon + "") && (e.innerHTML = t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function An(s) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      f(e, "class", "ml4"),
        Se(e.src, (t = s[26].tag)) || f(e, "src", t),
        f(e, "alt", "");
    },
    m(l, n) {
      B(l, e, n);
    },
    p(l, n) {
      n[0] & 16 && !Se(e.src, (t = l[26].tag)) && f(e, "src", t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Sn(s) {
  let e, t;
  return {
    c() {
      (e = b("i")), (t = H("")), this.h();
    },
    l(l) {
      e = E(l, "I", { class: !0 });
      var n = w(e);
      (t = F(n, "")), n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "iconfont svelte-1q96dh5"),
        Z(e, "animation", s[2] === s[28] && s[3]);
    },
    m(l, n) {
      B(l, e, n), d(e, t);
    },
    p(l, n) {
      n[0] & 12 && Z(e, "animation", l[2] === l[28] && l[3]);
    },
    d(l) {
      l && h(e);
    },
  };
}
function Pn(s) {
  let e,
    t = s[26].children,
    l = [];
  for (let n = 0; n < t.length; n += 1) l[n] = Ln(Cn(s, t, n));
  return {
    c() {
      e = b("ul");
      for (let n = 0; n < l.length; n += 1) l[n].c();
      this.h();
    },
    l(n) {
      e = E(n, "UL", { class: !0 });
      var a = w(e);
      for (let i = 0; i < l.length; i += 1) l[i].l(a);
      a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "children B2 svelte-1q96dh5"),
        Z(e, "children-auto-height", s[2] === s[28] && s[3]);
    },
    m(n, a) {
      B(n, e, a);
      for (let i = 0; i < l.length; i += 1) l[i].m(e, null);
    },
    p(n, a) {
      if (a[0] & 16) {
        t = n[26].children;
        let i;
        for (i = 0; i < t.length; i += 1) {
          const r = Cn(n, t, i);
          l[i] ? l[i].p(r, a) : ((l[i] = Ln(r)), l[i].c(), l[i].m(e, null));
        }
        for (; i < l.length; i += 1) l[i].d(1);
        l.length = t.length;
      }
      a[0] & 12 && Z(e, "children-auto-height", n[2] === n[28] && n[3]);
    },
    d(n) {
      n && h(e), St(l, n);
    },
  };
}
function wu(s) {
  let e,
    t = s[29].title + "",
    l,
    n,
    a;
  return {
    c() {
      (e = b("span")), (l = H(t));
    },
    l(i) {
      e = E(i, "SPAN", {});
      var r = w(e);
      (l = F(r, t)), r.forEach(h);
    },
    m(i, r) {
      B(i, e, r),
        d(e, l),
        n ||
          ((a = ee(e, "click", function () {
            yt(s[29].action) && s[29].action.apply(this, arguments);
          })),
          (n = !0));
    },
    p(i, r) {
      (s = i), r[0] & 16 && t !== (t = s[29].title + "") && te(l, t);
    },
    d(i) {
      i && h(e), (n = !1), a();
    },
  };
}
function ku(s) {
  let e,
    t = s[29].title + "",
    l,
    n;
  return {
    c() {
      (e = b("a")), (l = H(t)), this.h();
    },
    l(a) {
      e = E(a, "A", { href: !0, class: !0 });
      var i = w(e);
      (l = F(i, t)), i.forEach(h), this.h();
    },
    h() {
      f(e, "href", (n = s[29].link)), f(e, "class", "svelte-1q96dh5");
    },
    m(a, i) {
      B(a, e, i), d(e, l);
    },
    p(a, i) {
      i[0] & 16 && t !== (t = a[29].title + "") && te(l, t),
        i[0] & 16 && n !== (n = a[29].link) && f(e, "href", n);
    },
    d(a) {
      a && h(e);
    },
  };
}
function Ln(s) {
  let e;
  function t(a, i) {
    return a[29].link && a[29].type !== "Action" ? ku : wu;
  }
  let l = t(s),
    n = l(s);
  return {
    c() {
      (e = b("li")), n.c(), this.h();
    },
    l(a) {
      e = E(a, "LI", { class: !0 });
      var i = w(e);
      n.l(i), i.forEach(h), this.h();
    },
    h() {
      f(e, "class", "ph10 ooo svelte-1q96dh5");
    },
    m(a, i) {
      B(a, e, i), n.m(e, null);
    },
    p(a, i) {
      l === (l = t(a)) && n
        ? n.p(a, i)
        : (n.d(1), (n = l(a)), n && (n.c(), n.m(e, null)));
    },
    d(a) {
      a && h(e), n.d();
    },
  };
}
function Rn(s) {
  let e,
    t = s[26].title && s[26].isShow && Dn(s);
  return {
    c() {
      t && t.c(), (e = ye());
    },
    l(l) {
      t && t.l(l), (e = ye());
    },
    m(l, n) {
      t && t.m(l, n), B(l, e, n);
    },
    p(l, n) {
      l[26].title && l[26].isShow
        ? t
          ? t.p(l, n)
          : ((t = Dn(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(l) {
      t && t.d(l), l && h(e);
    },
  };
}
function On(s) {
  let e,
    t,
    l,
    n,
    a,
    i = s[6](J.LogOut) + "",
    r,
    o,
    c;
  return {
    c() {
      (e = b("li")),
        (t = b("img")),
        (n = U()),
        (a = b("span")),
        (r = H(i)),
        this.h();
    },
    l(u) {
      e = E(u, "LI", { class: !0 });
      var m = w(e);
      (t = E(m, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (n = M(m)),
        (a = E(m, "SPAN", { class: !0 }));
      var _ = w(a);
      (r = F(_, i)), _.forEach(h), m.forEach(h), this.h();
    },
    h() {
      f(t, "width", "20"),
        f(t, "height", "20"),
        Se(t.src, (l = It.SIGNOUT)) || f(t, "src", l),
        f(t, "alt", ""),
        f(a, "class", "title svelte-1q96dh5"),
        f(e, "class", "df aic ph16 svelte-1q96dh5");
    },
    m(u, m) {
      B(u, e, m),
        d(e, t),
        d(e, n),
        d(e, a),
        d(a, r),
        o || ((c = ee(e, "click", s[11])), (o = !0));
    },
    p: me,
    d(u) {
      u && h(e), (o = !1), c();
    },
  };
}
function Iu(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v, p, g, k, I, T, S;
  const C = [mu, hu],
    A = [];
  function D(R, G) {
    return R[1] ? 0 : 1;
  }
  (_ = D(s)), (v = A[_] = C[_](s));
  let L = s[4],
    O = [];
  for (let R = 0; R < L.length; R += 1) O[R] = Rn(Tn(s, L, R));
  let P = s[1] && On(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("a")),
        (n = b("img")),
        (r = U()),
        (o = b("i")),
        (c = H("")),
        (u = U()),
        (m = b("div")),
        v.c(),
        (p = U()),
        (g = b("ul"));
      for (let R = 0; R < O.length; R += 1) O[R].c();
      (k = U()), P && P.c(), this.h();
    },
    l(R) {
      e = E(R, "DIV", { class: !0 });
      var G = w(e);
      t = E(G, "DIV", { class: !0 });
      var N = w(t);
      l = E(N, "A", { href: !0 });
      var V = w(l);
      (n = E(V, "IMG", { class: !0, alt: !0, src: !0 })),
        V.forEach(h),
        (r = M(N)),
        (o = E(N, "I", { class: !0 }));
      var Y = w(o);
      (c = F(Y, "")),
        Y.forEach(h),
        N.forEach(h),
        (u = M(G)),
        (m = E(G, "DIV", { class: !0 }));
      var z = w(m);
      v.l(z), z.forEach(h), (p = M(G)), (g = E(G, "UL", { class: !0 }));
      var x = w(g);
      for (let ne = 0; ne < O.length; ne += 1) O[ne].l(x);
      (k = M(x)), P && P.l(x), x.forEach(h), G.forEach(h), this.h();
    },
    h() {
      f(n, "class", "logo svelte-1q96dh5"),
        f(n, "alt", "Logo"),
        Se(n.src, (a = rt.LOGO_DARK)) || f(n, "src", a),
        f(l, "href", (i = s[0](W.HOME.pathname))),
        f(o, "class", "iconfont close cp svelte-1q96dh5"),
        f(t, "class", "df jcsb aic mb16 ph16"),
        f(m, "class", "df fdc ph16"),
        f(g, "class", "menu_div svelte-1q96dh5"),
        f(e, "class", "wrap svelte-1q96dh5");
    },
    m(R, G) {
      B(R, e, G),
        d(e, t),
        d(t, l),
        d(l, n),
        d(t, r),
        d(t, o),
        d(o, c),
        d(e, u),
        d(e, m),
        A[_].m(m, null),
        d(e, p),
        d(e, g);
      for (let N = 0; N < O.length; N += 1) O[N].m(g, null);
      d(g, k),
        P && P.m(g, null),
        (I = !0),
        T || ((S = ee(o, "click", s[12])), (T = !0));
    },
    p(R, G) {
      (!I || (G[0] & 1 && i !== (i = R[0](W.HOME.pathname)))) &&
        f(l, "href", i);
      let N = _;
      if (
        ((_ = D(R)),
        _ === N
          ? A[_].p(R, G)
          : (Ue(),
            y(A[N], 1, 1, () => {
              A[N] = null;
            }),
            Me(),
            (v = A[_]),
            v ? v.p(R, G) : ((v = A[_] = C[_](R)), v.c()),
            $(v, 1),
            v.m(m, null)),
        G[0] & 1052)
      ) {
        L = R[4];
        let V;
        for (V = 0; V < L.length; V += 1) {
          const Y = Tn(R, L, V);
          O[V] ? O[V].p(Y, G) : ((O[V] = Rn(Y)), O[V].c(), O[V].m(g, k));
        }
        for (; V < O.length; V += 1) O[V].d(1);
        O.length = L.length;
      }
      R[1]
        ? P
          ? P.p(R, G)
          : ((P = On(R)), P.c(), P.m(g, null))
        : P && (P.d(1), (P = null));
    },
    i(R) {
      I || ($(v), (I = !0));
    },
    o(R) {
      y(v), (I = !1);
    },
    d(R) {
      R && h(e), A[_].d(), St(O, R), P && P.d(), (T = !1), S();
    },
  };
}
function Tu(s, e, t) {
  let l, n, a, i, r, o, c, u, m, _, v;
  ge(s, We, (V) => t(0, (n = V))),
    ge(s, kl, (V) => t(21, (a = V))),
    ge(s, ta, (V) => t(15, (i = V))),
    ge(s, la, (V) => t(16, (r = V))),
    ge(s, ea, (V) => t(18, (c = V))),
    ge(s, sa, (V) => t(19, (u = V))),
    ge(s, Kt, (V) => t(1, (m = V))),
    ge(s, vt, (V) => t(20, (_ = V))),
    ge(s, nl, (V) => t(5, (v = V)));
  let { modalUI: p = !1 } = e;
  const g = je("LG"),
    k = ii(),
    I = Qe(),
    T = na.pipe(Tt((V) => V.reduce((Y, z) => ((Y[z.value] = z.text), Y), {})));
  ge(s, T, (V) => t(17, (o = V)));
  let S = 2,
    C = !0,
    A = location.origin + location.pathname;
  function D(
    V,
    Y,
    z,
    x,
    ne,
    ie,
    ue,
    { web3ModuleState: re, isSupportLending: Q }
  ) {
    return [
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Buy Crypto",
        title: V(J.BuyCrypto),
        link: "",
        img: It.BUY_CRYPTO,
        tag: "",
        children: [
          { type: "Link", title: V(J.BuyCryptoP2PMarketplace), link: gl(x, Y) },
          {
            type: "Link",
            title: V(J.BuyCryptoWith),
            link: Y(
              x ? W.BUY_CRYPTO_PLACE_ORDER.pathname : W.BUY_CRYPTO.pathname
            ),
          },
          {
            type: "Link",
            title: V(J.BuyCryptoWithBank),
            link: Y(W.OTC_LEGEND_TRADING.pathname),
          },
          {
            type: "Link",
            title: V(J.CreditDebitCards),
            link: Y(W.BUY_CRYPTO_CARD_PLACE_ORDER.pathname),
          },
        ],
      },
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: !0,
        tab: "Markets",
        title: V(J.Markets),
        link: Y(W.MARKETS.pathname),
        img: It.MARKETS,
        tag: "",
        children: [],
      },
      {
        hasChildren: 2,
        hasBorder: 0,
        isShow: !0,
        tab: "Contract",
        title: V(J.Contract),
        link: "",
        img: It.CONTRACT,
        tag: "",
        children: [
          {
            type: "Link",
            title: `USDⓈ-M ${V(J.Perpetual)}`,
            link: Ge.PHEMEX_CONTRACT_TRADE_USDS,
          },
          /*{
            type: "Link",
            title: `COIN-M ${V(J.Perpetual)}`,
            link: Ge.PHEMEX_CONTRACT_INVERSE_TRADE,
          },
          {
            type: "Link",
            title: V(J.CopyTrade),
            link: n(W.COPY_TRADING_LIST.pathname),
          },
          {
            type: "Link",
            title: V(J.Leaderboard),
            link: n(W.COPY_LEADERBOARD.pathname),
          },
          {
            type: "Link",
            title: V(J.VipPortal),
            link: n(W.VIP_PORTAL.pathname),
          },*/
        ],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Spot",
        title: V(J.Spot),
        link: "",
        img: It.SPOT,
        tag: "",
        children: [
          { type: "Link", title: V(J.SpotTrading), link: Ge.PHEMEX_SPOT_TRADE },
          {
            type: "Link",
            title: V(J.Convert),
            link: Y(W.CRYPTO_CONVERTER.pathname),
          },
          {
            type: "Link",
            title: V(J.Launchpad),
            link: Y(W.LAUNCHPAD.pathname),
          },
        ],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Earn",
        title: V(J.EarnMain),
        link: "",
        img: It.EARN,
        tag: "",
        children: [
          {
            type: "Link",
            title: V(J.EarnCrypto),
            link: Y(W.EARN_HOME.pathname),
          },
          { type: "Link", title: V(J.Savings), link: Y(W.EARN.pathname) },
          {
            type: "Link",
            title: V(J.Launchpool),
            link: Y(W.LAUNCHPOOL.pathname),
          },
        ],
      },
     /* {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Web3",
        title: V(J.Web3),
        link: "",
        img: It.WEB3,
        tag: "",
        children: [
          {
            type: "Link",
            title: V(J.SocialTrade),
            link: Y(W.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname),
          },
          {
            type: "Link",
            title: V(J.Web3PTStaking),
            link: Y(W.WEB3_STAKE.pathname),
            hidden: !re,
          },
          { type: "Link", title: V(J.Phemexia), link: Y(W.PHEMEXIA.pathname) },
          {
            type: "Link",
            title: V(J.Web3SoulPass),
            link: Y(W.WEB3_SOUL_PASS.pathname),
            hidden: !re,
          },
          {
            type: "Link",
            title: V(J.Web3Token),
            link: Y(W.WEB3_EQUITY_BENEFITS.pathname),
            hidden: !re,
          },
          {
            type: "Link",
            title: V(J.Web3LendingProtocol),
            link: Y(W.WEB3_LENDING_MARKET.pathname),
            hidden: !Q,
          },
        ].filter((ae) => !ae.hidden),
      },*/
      /*{
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Learn",
        title: V(J.Learn),
        link: "",
        img: It.LEARN,
        tag: "",
        children: [
          {
            type: "Link",
            title: V(J.Academy),
            link: Y(Ge.PHEMEX_ACADEMY, "CMS"),
          },
          {
            type: "Link",
            title: V(J.LearnAndEarn),
            link: Y(W.LEARN_CRYPTO.pathname),
          },
          {
            type: "Link",
            title: V(J.HelpCenter),
            link: Y(Ge.PHEMEX_HELP_CENTER, "CMS"),
          },
          { type: "Link", title: V(J.Blog), link: Y(Ge.PHEMEX_BLOG, "CMS") },
          {
            type: "Link",
            title: V(J.StudentFoundation),
            link: Y(W.STUDENT_FOUNDATION.pathname),
          },
          { type: "Link", title: V(J.SimulatedTrading), link: Ge.MOCK_TRADE },
        ],
      },*/
      /*{
        hasChildren: 1,
        hasBorder: 1,
        isShow: !0,
        tab: "Promotions",
        title: V(J.Promotions),
        link: "",
        img: It.PROMOTION,
        tag: "",
        children: ie,
      },*/
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: !0,
        tab: ne.title,
        title: ne.title,
        link: ne.link,
        img: ne.cornerIcon && ne.fullCornerIcon,
        tag: "",
        children: [],
      },
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: z === "tr",
        tab: "PhemexTR",
        title: "PhemexTR",
        link: Ge.PHEMEX_TR,
        img: Gt.TR_GUIDE,
        tag: "",
        children: [],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "lang",
        title: ue[z],
        link: "",
        img: It.LANGUAGE,
        tag: "",
        children: O(ue, z),
      },
    ];
  }
  function L(V) {
    return function () {
      if (S === V) {
        t(3, (C = !1)), t(2, (S = -1));
        return;
      }
      t(2, (S = V)), t(3, (C = !0));
    };
  }
  function O(V, Y) {
    return Object.keys(V)
      .filter((z) => z !== Y)
      .reduce(
        (z, x) => [
          ...z,
          {
            type: "Action",
            link: x,
            title: V[x],
            action() {
              if (a === "Login") {
                G({ lang: x });
                return;
              }
              vt.set(x), I("switch-lang");
            },
          },
        ],
        []
      );
  }
  function P(V) {
    V.preventDefault(), ri.next({ manual: !0 });
  }
  function R() {
    I("handleClickClose");
  }
  async function G(V) {
    const { data: Y, error: z } = await aa.updateProfile(V);
    if (Y) {
      nl.next(Y);
      const { lang: x } = V;
      x && (vt.set(x), I("switch-lang"));
    }
    z && Re.send("toast", "error", z);
  }
  function N() {
    if (p) Re.send("modal-register", "startRegister");
    else {
      const V = location.origin + location.pathname + location.search;
      _t(
        n(W.REGISTER.pathname) +
          "?" +
          bt.stringify({ target: V, action: "Target" })
      );
    }
  }
  return (
    (s.$$set = (V) => {
      "modalUI" in V && t(14, (p = V.modalUI));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 2064387 &&
        t(
          4,
          (l = D(g, n, _, m, u, c, o, {
            web3ModuleState: r,
            isSupportLending: i,
          }))
        );
    }),
    [n, m, S, C, l, v, g, k, T, A, L, P, R, N, p, i, r, o, c, u, _]
  );
}
class Cu extends Ie {
  constructor(e) {
    super(), Te(this, e, Tu, Iu, Ce, { modalUI: 14 }, null, [-1, -1]);
  }
}
function Nn(s) {
  let e, t;
  return (
    (e = new du({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Vn(s) {
  let e,
    t,
    l = s[9](J.Register) + "",
    n,
    a,
    i;
  return {
    c() {
      (e = b("a")), (t = b("span")), (n = H(l)), this.h();
    },
    l(r) {
      e = E(r, "A", { class: !0, href: !0 });
      var o = w(e);
      t = E(o, "SPAN", {});
      var c = w(t);
      (n = F(c, l)), c.forEach(h), o.forEach(h), this.h();
    },
    h() {
      f(e, "class", "btn T2 ph12 ga svelte-19c69gn"),
        f(e, "href", "javascript:;");
    },
    m(r, o) {
      B(r, e, o),
        d(e, t),
        d(t, n),
        a || ((i = ee(e, "click", s[11])), (a = !0));
    },
    p: me,
    d(r) {
      r && h(e), (a = !1), i();
    },
  };
}
function Du(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A,
    D = s[3] && Nn(),
    L = !s[8] && Vn(s);
  return (
    (T = new Cu({ props: { modalUI: s[2] } })),
    T.$on("handleClickClose", s[10]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = U()),
          (n = b("div")),
          D && D.c(),
          (a = U()),
          (i = b("div")),
          (r = b("a")),
          (o = b("img")),
          (m = U()),
          (_ = b("div")),
          L && L.c(),
          (v = U()),
          (p = b("i")),
          (g = H("")),
          (k = U()),
          (I = b("div")),
          j(T.$$.fragment),
          this.h();
      },
      l(O) {
        e = E(O, "DIV", { class: !0 });
        var P = w(e);
        (t = E(P, "DIV", { class: !0 })),
          w(t).forEach(h),
          (l = M(P)),
          (n = E(P, "DIV", { class: !0 }));
        var R = w(n);
        D && D.l(R), (a = M(R)), (i = E(R, "DIV", { class: !0 }));
        var G = w(i);
        r = E(G, "A", { class: !0, href: !0 });
        var N = w(r);
        (o = E(N, "IMG", { class: !0, alt: !0, src: !0 })),
          N.forEach(h),
          (m = M(G)),
          (_ = E(G, "DIV", { class: !0 }));
        var V = w(_);
        L && L.l(V), (v = M(V)), (p = E(V, "I", { class: !0 }));
        var Y = w(p);
        (g = F(Y, "")),
          Y.forEach(h),
          V.forEach(h),
          G.forEach(h),
          R.forEach(h),
          (k = M(P)),
          (I = E(P, "DIV", { class: !0, style: !0 }));
        var z = w(I);
        K(T.$$.fragment, z), z.forEach(h), P.forEach(h), this.h();
      },
      h() {
        f(t, "class", "svelte-19c69gn"),
          Z(t, "mask", s[5]),
          f(o, "class", "logo svelte-19c69gn"),
          f(o, "alt", "Logo"),
          Se(o.src, (c = s[0] || s[4] ? rt.LOGO_LIGHT : rt.LOGO_DARK)) ||
            f(o, "src", c),
          f(r, "class", "df aic"),
          f(r, "href", (u = s[7](W.HOME.pathname))),
          f(p, "class", "iconfont ml16 lh16 f16 BLUE svelte-19c69gn"),
          Z(p, "cf", s[0] || s[4]),
          Z(p, "dn", s[4]),
          f(_, "class", "df aic jcc"),
          f(i, "class", "df jcsb content svelte-19c69gn"),
          f(n, "class", "header B1 svelte-19c69gn"),
          Z(n, "top", s[0]),
          Z(n, "fixed", s[1]),
          Z(n, "log", s[4]),
          f(I, "class", "menu svelte-19c69gn"),
          Je(I, "right", s[6]),
          f(e, "class", "main");
      },
      m(O, P) {
        B(O, e, P),
          d(e, t),
          d(e, l),
          d(e, n),
          D && D.m(n, null),
          d(n, a),
          d(n, i),
          d(i, r),
          d(r, o),
          d(i, m),
          d(i, _),
          L && L.m(_, null),
          d(_, v),
          d(_, p),
          d(p, g),
          d(e, k),
          d(e, I),
          q(T, I, null),
          (S = !0),
          C ||
            ((A = [
              ee(t, "click", s[10]),
              ee(p, "click", s[10]),
              ee(I, "click", Au),
            ]),
            (C = !0));
      },
      p(O, [P]) {
        (!S || P & 32) && Z(t, "mask", O[5]),
          O[3]
            ? D
              ? P & 8 && $(D, 1)
              : ((D = Nn()), D.c(), $(D, 1), D.m(n, a))
            : D &&
              (Ue(),
              y(D, 1, 1, () => {
                D = null;
              }),
              Me()),
          (!S ||
            (P & 17 &&
              !Se(o.src, (c = O[0] || O[4] ? rt.LOGO_LIGHT : rt.LOGO_DARK)))) &&
            f(o, "src", c),
          (!S || (P & 128 && u !== (u = O[7](W.HOME.pathname)))) &&
            f(r, "href", u),
          O[8]
            ? L && (L.d(1), (L = null))
            : L
            ? L.p(O, P)
            : ((L = Vn(O)), L.c(), L.m(_, v)),
          (!S || P & 17) && Z(p, "cf", O[0] || O[4]),
          (!S || P & 16) && Z(p, "dn", O[4]),
          (!S || P & 1) && Z(n, "top", O[0]),
          (!S || P & 2) && Z(n, "fixed", O[1]),
          (!S || P & 16) && Z(n, "log", O[4]);
        const R = {};
        P & 4 && (R.modalUI = O[2]),
          T.$set(R),
          (!S || P & 64) && Je(I, "right", O[6]);
      },
      i(O) {
        S || ($(D), $(T.$$.fragment, O), (S = !0));
      },
      o(O) {
        y(D), y(T.$$.fragment, O), (S = !1);
      },
      d(O) {
        O && h(e), D && D.d(), L && L.d(), X(T), (C = !1), xe(A);
      },
    }
  );
}
function Au(s) {
  s.stopPropagation();
}
function Su(s, e, t) {
  let l, n;
  ge(s, We, (g) => t(7, (l = g))), ge(s, Kt, (g) => t(8, (n = g)));
  const a = je("LG");
  let { isTop: i = !1 } = e,
    { isFixed: r = !0 } = e,
    { modalUI: o = !1 } = e,
    { isHome: c = !1 } = e,
    { isLogin: u = !1 } = e,
    m = !1,
    _ = "-80%";
  Be(() => {
    const { pathname: g } = window.location;
    ma.parsePathname(g).pathname;
  });
  function v() {
    if ((t(5, (m = !m)), m)) {
      t(0, (i = !1)), t(6, (_ = "0"));
      return;
    }
    t(6, (_ = "-80%"));
  }
  function p() {
    o ? Re.send("modal-register", "startRegister") : Ia(l);
  }
  return (
    (s.$$set = (g) => {
      "isTop" in g && t(0, (i = g.isTop)),
        "isFixed" in g && t(1, (r = g.isFixed)),
        "modalUI" in g && t(2, (o = g.modalUI)),
        "isHome" in g && t(3, (c = g.isHome)),
        "isLogin" in g && t(4, (u = g.isLogin));
    }),
    [i, r, o, c, u, m, _, l, n, a, v, p]
  );
}
class Pu extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Su, Du, Ce, {
        isTop: 0,
        isFixed: 1,
        modalUI: 2,
        isHome: 3,
        isLogin: 4,
      });
  }
}
function Un(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u = s[1].detail.title + "",
    m,
    _,
    v,
    p = s[1].detail.content + "",
    g,
    k,
    I,
    T,
    S,
    C,
    A,
    D,
    L,
    O;
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("i")),
        (a = H("")),
        (i = U()),
        (r = b("div")),
        (o = b("a")),
        (c = b("div")),
        (m = H(u)),
        (_ = U()),
        (v = b("div")),
        (g = H(p)),
        (I = U()),
        (T = b("div")),
        (S = b("i")),
        (C = H("")),
        this.h();
    },
    l(P) {
      e = E(P, "DIV", { class: !0 });
      var R = w(e);
      t = E(R, "DIV", { class: !0 });
      var G = w(t);
      l = E(G, "DIV", {});
      var N = w(l);
      n = E(N, "I", { class: !0 });
      var V = w(n);
      (a = F(V, "")),
        V.forEach(h),
        N.forEach(h),
        (i = M(G)),
        (r = E(G, "DIV", { class: !0 }));
      var Y = w(r);
      o = E(Y, "A", { href: !0 });
      var z = w(o);
      c = E(z, "DIV", { class: !0 });
      var x = w(c);
      (m = F(x, u)), x.forEach(h), (_ = M(z)), (v = E(z, "DIV", { class: !0 }));
      var ne = w(v);
      (g = F(ne, p)),
        ne.forEach(h),
        z.forEach(h),
        Y.forEach(h),
        (I = M(G)),
        (T = E(G, "DIV", { class: !0 }));
      var ie = w(T);
      S = E(ie, "I", { class: !0 });
      var ue = w(S);
      (C = F(ue, "")),
        ue.forEach(h),
        ie.forEach(h),
        G.forEach(h),
        R.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "iconfont f14 sell"),
        f(c, "class", "title fw2 f16 lh20 svelte-1a9ou07"),
        f(v, "class", "content mt10 f14 lh16 svelte-1a9ou07"),
        f(o, "href", (k = s[1].detail.webLink)),
        f(r, "class", "ml16 mr24"),
        f(S, "class", "iconfont f18 cf cp"),
        f(T, "class", "pa ml44 close df jcc aic svelte-1a9ou07"),
        f(t, "class", "announcements df pr svelte-1a9ou07"),
        f(e, "class", "announcements-wrap svelte-1a9ou07");
    },
    m(P, R) {
      B(P, e, R),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(t, i),
        d(t, r),
        d(r, o),
        d(o, c),
        d(c, m),
        d(o, _),
        d(o, v),
        d(v, g),
        d(t, I),
        d(t, T),
        d(T, S),
        d(S, C),
        (D = !0),
        L || ((O = ee(T, "click", s[2])), (L = !0));
    },
    p(P, R) {
      (s = P),
        (!D || R & 2) && u !== (u = s[1].detail.title + "") && te(m, u),
        (!D || R & 2) && p !== (p = s[1].detail.content + "") && te(g, p),
        (!D || (R & 2 && k !== (k = s[1].detail.webLink))) && f(o, "href", k);
    },
    i(P) {
      D ||
        (ht(() => {
          A || (A = al(e, yl, { delay: 250, duration: 300, easing: Bl }, !0)),
            A.run(1);
        }),
        (D = !0));
    },
    o(P) {
      A || (A = al(e, yl, { delay: 250, duration: 300, easing: Bl }, !1)),
        A.run(0),
        (D = !1);
    },
    d(P) {
      P && h(e), P && A && A.end(), (L = !1), O();
    },
  };
}
function Lu(s) {
  let e,
    t,
    l = s[1] && s[0] && Un(s);
  return {
    c() {
      l && l.c(), (e = ye());
    },
    l(n) {
      l && l.l(n), (e = ye());
    },
    m(n, a) {
      l && l.m(n, a), B(n, e, a), (t = !0);
    },
    p(n, [a]) {
      n[1] && n[0]
        ? l
          ? (l.p(n, a), a & 3 && $(l, 1))
          : ((l = Un(n)), l.c(), $(l, 1), l.m(e.parentNode, e))
        : l &&
          (Ue(),
          y(l, 1, 1, () => {
            l = null;
          }),
          Me());
    },
    i(n) {
      t || ($(l), (t = !0));
    },
    o(n) {
      y(l), (t = !1);
    },
    d(n) {
      l && l.d(n), n && h(e);
    },
  };
}
function Ru(s, e, t) {
  let l;
  ge(s, oi, (r) => t(1, (l = r)));
  let n = !1;
  function a() {
    const r = localStorage.getItem("home-announcement") || "0",
      o = Date.now();
    if (Math.floor((Number(r) - o) / 1e3) < 0) {
      t(0, (n = !0));
      return;
    }
    t(0, (n = !1));
  }
  function i() {
    t(0, (n = !1));
    const r = Date.now() + 6e4 * 60 * 12;
    localStorage.setItem("home-announcement", String(r));
  }
  return a(), [n, l, i];
}
class Ou extends Ie {
  constructor(e) {
    super(), Te(this, e, Ru, Lu, Ce, {});
  }
}
const { window: jt } = Sl,
  Nu = (s) => ({ isTop: s & 641, isOpacityHeader: s & 128 }),
  Mn = (s) => ({ isTop: (s[9] && s[7]) || s[0], isOpacityHeader: s[7] });
function Vu(s) {
  let e, t;
  return (
    (e = new cu({
      props: { $$slots: { default: [Mu] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 1048576 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Uu(s) {
  let e, t, l, n, a, i, r, o;
  l = new ff({ props: { isTop: (s[9] && s[7]) || s[0] } });
  const c = [Gu, $u],
    u = [];
  function m(_, v) {
    return _[1] !== "web3" ? 0 : 1;
  }
  return (
    (i = m(s)),
    (r = u[i] = c[i](s)),
    {
      c() {
        (e = b("div")),
          (t = b("nav")),
          j(l.$$.fragment),
          (n = U()),
          (a = b("div")),
          r.c(),
          this.h();
      },
      l(_) {
        e = E(_, "DIV", { class: !0 });
        var v = w(e);
        t = E(v, "NAV", { class: !0 });
        var p = w(t);
        K(l.$$.fragment, p), p.forEach(h), (n = M(v)), (a = E(v, "DIV", {}));
        var g = w(a);
        r.l(g), g.forEach(h), v.forEach(h), this.h();
      },
      h() {
        f(t, "class", "df left-content svelte-1s52ps5"),
          f(e, "class", "wrap wsn df jcsb svelte-1s52ps5");
      },
      m(_, v) {
        B(_, e, v),
          d(e, t),
          q(l, t, null),
          d(e, n),
          d(e, a),
          u[i].m(a, null),
          (o = !0);
      },
      p(_, v) {
        const p = {};
        v & 641 && (p.isTop = (_[9] && _[7]) || _[0]), l.$set(p);
        let g = i;
        (i = m(_)),
          i === g
            ? u[i].p(_, v)
            : (Ue(),
              y(u[g], 1, 1, () => {
                u[g] = null;
              }),
              Me(),
              (r = u[i]),
              r ? r.p(_, v) : ((r = u[i] = c[i](_)), r.c()),
              $(r, 1),
              r.m(a, null));
      },
      i(_) {
        o || ($(l.$$.fragment, _), $(r), (o = !0));
      },
      o(_) {
        y(l.$$.fragment, _), y(r), (o = !1);
      },
      d(_) {
        _ && h(e), X(l), u[i].d();
      },
    }
  );
}
function Mu(s) {
  let e, t;
  return (
    (e = new Ca({})),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function $u(s) {
  let e;
  const t = s[15].web3Right,
    l = lt(t, s, s[20], Mn);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, a) {
      l && l.m(n, a), (e = !0);
    },
    p(n, a) {
      l &&
        l.p &&
        (!e || a & 1049217) &&
        st(l, t, n, n[20], e ? at(t, n[20], a, Nu) : nt(n[20]), Mn);
    },
    i(n) {
      e || ($(l, n), (e = !0));
    },
    o(n) {
      y(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function Gu(s) {
  let e;
  const t = s[15].default,
    l = lt(t, s, s[20], null),
    n = l || Bu(s);
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, i) {
      n && n.m(a, i), (e = !0);
    },
    p(a, i) {
      l
        ? l.p &&
          (!e || i & 1048576) &&
          st(l, t, a, a[20], e ? at(t, a[20], i, null) : nt(a[20]), null)
        : n && n.p && (!e || i & 645) && n.p(a, e ? i : -1);
    },
    i(a) {
      e || ($(n, a), (e = !0));
    },
    o(a) {
      y(n, a), (e = !1);
    },
    d(a) {
      n && n.d(a);
    },
  };
}
function Bu(s) {
  let e, t;
  return (
    (e = new Ca({ props: { isTop: (s[9] && s[7]) || s[0], modalUI: s[2] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 641 && (a.isTop = (l[9] && l[7]) || l[0]),
          n & 4 && (a.modalUI = l[2]),
          e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function yu(s) {
  let e = !1,
    t = () => {
      e = !1;
    },
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u,
    m,
    _,
    v,
    p,
    g,
    k;
  ht(s[16]), ht(s[17]), (a = new Ou({}));
  const I = [Uu, Vu],
    T = [];
  function S(C, A) {
    return tt.isJapanSite ? 1 : 0;
  }
  return (
    (c = S()),
    (u = T[c] = I[c](s)),
    (v = new Pu({
      props: {
        isTop: !tt.isJapanSite && s[9] && s[7],
        isLogin: s[0],
        modalUI: s[2],
        isHome: s[4],
      },
    })),
    {
      c() {
        (n = b("div")),
          j(a.$$.fragment),
          (r = U()),
          (o = b("header")),
          u.c(),
          (m = U()),
          (_ = b("div")),
          j(v.$$.fragment),
          this.h();
      },
      l(C) {
        n = E(C, "DIV", { style: !0 });
        var A = w(n);
        K(a.$$.fragment, A),
          A.forEach(h),
          (r = M(C)),
          (o = E(C, "HEADER", { class: !0 }));
        var D = w(o);
        u.l(D), (m = M(D)), (_ = E(D, "DIV", { class: !0 }));
        var L = w(_);
        K(v.$$.fragment, L), L.forEach(h), D.forEach(h), this.h();
      },
      h() {
        Je(n, "z-index", "999"),
          ht(() => s[18].call(n)),
          f(_, "class", "mwrap wsn svelte-1s52ps5"),
          f(o, "class", "header svelte-1s52ps5"),
          Z(o, "new-layout", s[3]),
          Z(o, "top", s[9] && s[7]),
          Z(o, "log", !tt.isJapanSite && s[0]);
      },
      m(C, A) {
        B(C, n, A),
          q(a, n, null),
          (i = cl(n, s[18].bind(n))),
          B(C, r, A),
          B(C, o, A),
          T[c].m(o, null),
          d(o, m),
          d(o, _),
          q(v, _, null),
          s[19](o),
          (p = !0),
          g ||
            ((k = [
              ee(jt, "scroll", () => {
                (e = !0), clearTimeout(l), (l = setTimeout(t, 100)), s[16]();
              }),
              ee(jt, "resize", s[17]),
            ]),
            (g = !0));
      },
      p(C, [A]) {
        A & 32 &&
          !e &&
          ((e = !0),
          clearTimeout(l),
          scrollTo(jt.pageXOffset, C[5]),
          (l = setTimeout(t, 100))),
          u.p(C, A);
        const D = {};
        A & 640 && (D.isTop = !tt.isJapanSite && C[9] && C[7]),
          A & 1 && (D.isLogin = C[0]),
          A & 4 && (D.modalUI = C[2]),
          A & 16 && (D.isHome = C[4]),
          v.$set(D),
          (!p || A & 8) && Z(o, "new-layout", C[3]),
          (!p || A & 640) && Z(o, "top", C[9] && C[7]),
          (!p || A & 1) && Z(o, "log", !tt.isJapanSite && C[0]);
      },
      i(C) {
        p || ($(a.$$.fragment, C), $(u), $(v.$$.fragment, C), (p = !0));
      },
      o(C) {
        y(a.$$.fragment, C), y(u), y(v.$$.fragment, C), (p = !1);
      },
      d(C) {
        C && h(n),
          X(a),
          i(),
          C && h(r),
          C && h(o),
          T[c].d(),
          X(v),
          s[19](null),
          (g = !1),
          xe(k);
      },
    }
  );
}
function Wu() {
  try {
    const s = decodeURIComponent(window.location.search),
      e = new URLSearchParams(s);
    return Object.fromEntries(e) || {};
  } catch {
    return {};
  }
}
function Yu(s, e, t) {
  let l,
    { $$slots: n = {}, $$scope: a } = e,
    { isLogin: i = !1 } = e,
    { type: r } = e,
    { showTop: o = !1 } = e,
    { modalUI: c = !1 } = e,
    { newLayout: u = !1 } = e,
    { isHome: m = !1 } = e,
    { useContractMenu: _ = !1 } = e;
  const v = [W.LAUNCHPOOL.pathname, W.PHEMEXIA.pathname],
    p = je("LG"),
    { page: g } = ci();
  ge(s, g, (N) => t(14, (l = N)));
  let k = 0,
    I = 0,
    T = 0,
    S = !0,
    C = !0,
    A = null;
  Be(() => Ei.set(A && A.clientHeight)),
    Be(() => {
      zn("callChainDeposit") !== null &&
        mi().then(() => {
          const V = Wu();
          ia({ LG: p, ...V });
        });
    });
  function D(N, V) {
    const Y = ma.parsePathname(N.path).pathname,
      z = Y === W.OTC_LEGEND_TRADING.pathname,
      x = Y === W.EARN_HOME.pathname;
    t(
      7,
      (C = !(z && tt.isMobile) && !(x && tt.isMobile) && tc.indexOf(Y) >= 0)
    ),
      V && t(7, (C = !(z && tt.isMobile) && v.indexOf(Y) >= 0));
  }
  function L(N, V, Y) {
    fi.next(Y), t(9, (S = N && V <= Y));
  }
  function O() {
    t(5, (k = jt.pageYOffset));
  }
  function P() {
    t(8, (I = jt.innerWidth));
  }
  function R() {
    (T = this.offsetHeight), t(6, T);
  }
  function G(N) {
    gt[N ? "unshift" : "push"](() => {
      (A = N), t(10, A);
    });
  }
  return (
    (s.$$set = (N) => {
      "isLogin" in N && t(0, (i = N.isLogin)),
        "type" in N && t(1, (r = N.type)),
        "showTop" in N && t(12, (o = N.showTop)),
        "modalUI" in N && t(2, (c = N.modalUI)),
        "newLayout" in N && t(3, (u = N.newLayout)),
        "isHome" in N && t(4, (m = N.isHome)),
        "useContractMenu" in N && t(13, (_ = N.useContractMenu)),
        "$$scope" in N && t(20, (a = N.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 20480 && D(l, o), s.$$.dirty & 224 && L(C, k, T);
    }),
    [i, r, c, u, m, k, T, C, I, S, A, g, o, _, l, n, O, P, R, G, a]
  );
}
class fl extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Yu, yu, Ce, {
        isLogin: 0,
        type: 1,
        showTop: 12,
        modalUI: 2,
        newLayout: 3,
        isHome: 4,
        useContractMenu: 13,
      });
  }
}
const Bd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Et = {
    Back: "c336fd",
    Verify: "7aab29",
    EnterTheCode: "7113f0",
    KeepThisWindow: "0d3ffe",
    SendAgain: "740d7f",
    IncorrectCode: "c0819b",
    Verification: "7a2804",
    WeJustEmailed: "ce407e",
    WeJustEmailedLogin: "7b9d9e",
    EnterTheCodeBelow: "7ff5c3",
    EmailDidNotArrive: "cabd53",
  };
function $n(s) {
  let e, t, l;
  return {
    c() {
      (e = b("div")), (t = H(s[5])), (l = H("s")), this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = w(e);
      (t = F(a, s[5])), (l = F(a, "s")), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "ml8 fw3");
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(e, l);
    },
    p(n, a) {
      a & 32 && te(t, n[5]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function Hu(s) {
  let e,
    t,
    l,
    n,
    a = s[0](Et.Verify) + "",
    i,
    r,
    o,
    c =
      (s[7] === "login-verify"
        ? s[0](Et.WeJustEmailedLogin, {
            Email: `<span class="fw3 T1">${s[6]}</span>`,
          })
        : s[0](Et.WeJustEmailed, {
            Email: `<span class="fw3 T1">${s[6]}</span>`,
          })) + "",
    u,
    m,
    _,
    v,
    p,
    g,
    k = s[0](Et.SendAgain) + "",
    I,
    T,
    S,
    C,
    A,
    D;
  (_ = new Wt({
    props: { class: "home-email-code", status: s[3], explain: s[4] },
  })),
    _.$on("change", s[9]),
    _.$on("input", s[10]);
  let L = s[5] > 0 && $n(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("div")),
        (n = b("div")),
        (i = H(a)),
        (r = U()),
        (o = b("div")),
        (u = U()),
        (m = b("div")),
        j(_.$$.fragment),
        (v = U()),
        (p = b("div")),
        (g = b("div")),
        (I = H(k)),
        (T = U()),
        L && L.c(),
        this.h();
    },
    l(O) {
      e = E(O, "DIV", { class: !0 });
      var P = w(e);
      t = E(P, "DIV", { class: !0 });
      var R = w(t);
      l = E(R, "DIV", { class: !0 });
      var G = w(l);
      n = E(G, "DIV", { class: !0 });
      var N = w(n);
      (i = F(N, a)), N.forEach(h), (r = M(G)), (o = E(G, "DIV", { class: !0 }));
      var V = w(o);
      V.forEach(h), (u = M(G)), (m = E(G, "DIV", { class: !0 }));
      var Y = w(m);
      K(_.$$.fragment, Y),
        Y.forEach(h),
        (v = M(G)),
        (p = E(G, "DIV", { class: !0 }));
      var z = w(p);
      g = E(z, "DIV", { class: !0 });
      var x = w(g);
      (I = F(x, k)),
        x.forEach(h),
        (T = M(z)),
        L && L.l(z),
        z.forEach(h),
        G.forEach(h),
        R.forEach(h),
        P.forEach(h),
        this.h();
    },
    h() {
      f(n, "class", "title f36 lh46 fw3 T1 svelte-1cblzto"),
        f(o, "class", "title2 mt24 mb24 lh20 T3 f16 svelte-1cblzto"),
        f(m, "class", "code svelte-1cblzto"),
        f(g, "class", "cp T3 svelte-1cblzto"),
        Z(g, "disable", s[5] > 0),
        f(p, "class", "df aic mt12 f16 lh20 BLUE"),
        f(l, "class", "main svelte-1cblzto"),
        f(t, "class", "content df fdc svelte-1cblzto"),
        f(e, "class", "warp svelte-1cblzto"),
        ht(() => s[13].call(e)),
        Z(e, "modal-wrap", s[1]);
    },
    m(O, P) {
      B(O, e, P),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, i),
        d(l, r),
        d(l, o),
        (o.innerHTML = c),
        d(l, u),
        d(l, m),
        q(_, m, null),
        d(l, v),
        d(l, p),
        d(p, g),
        d(g, I),
        d(p, T),
        L && L.m(p, null),
        (S = cl(e, s[13].bind(e))),
        (C = !0),
        A || ((D = ee(g, "click", s[8])), (A = !0));
    },
    p(O, [P]) {
      (!C || P & 1) && a !== (a = O[0](Et.Verify) + "") && te(i, a),
        (!C || P & 193) &&
          c !==
            (c =
              (O[7] === "login-verify"
                ? O[0](Et.WeJustEmailedLogin, {
                    Email: `<span class="fw3 T1">${O[6]}</span>`,
                  })
                : O[0](Et.WeJustEmailed, {
                    Email: `<span class="fw3 T1">${O[6]}</span>`,
                  })) + "") &&
          (o.innerHTML = c);
      const R = {};
      P & 8 && (R.status = O[3]),
        P & 16 && (R.explain = O[4]),
        _.$set(R),
        (!C || P & 1) && k !== (k = O[0](Et.SendAgain) + "") && te(I, k),
        (!C || P & 32) && Z(g, "disable", O[5] > 0),
        O[5] > 0
          ? L
            ? L.p(O, P)
            : ((L = $n(O)), L.c(), L.m(p, null))
          : L && (L.d(1), (L = null)),
        (!C || P & 2) && Z(e, "modal-wrap", O[1]);
    },
    i(O) {
      C || ($(_.$$.fragment, O), (C = !0));
    },
    o(O) {
      y(_.$$.fragment, O), (C = !1);
    },
    d(O) {
      O && h(e), X(_), L && L.d(), S(), (A = !1), D();
    },
  };
}
function Fu(s, e, t) {
  let { LG: l = null } = e,
    { verificationData: n = null } = e,
    { modalUI: a = !1 } = e;
  const i = Qe();
  let r = 1200,
    o = "",
    c = "",
    u = 60,
    m = "",
    _ = null,
    v = null,
    p = null,
    g = null,
    k = !1,
    I = null,
    T = null;
  Be(() => {
    t(3, (o = "")),
      t(4, (c = "")),
      t(12, (k = !1)),
      t(7, (_ = n.type)),
      (v = n.context),
      (p = n.callback),
      t(6, (m = n.context.email)),
      A(),
      n.params && (g = n.params),
      n.context.registerToken && S(n.context);
  });
  function S(G) {
    let N = 300;
    I = setInterval(async () => {
      const V = { token: G.registerToken },
        { data: Y } = await Ve.loginWithToken(V);
      (N = N - 2),
        Y &&
          (clearInterval(I),
          await Bt.bindGoogleClientId(),
          localStorage.setItem("base-kyc-status", "1"),
          Bt.event("user.welcome", "open_welcome_page", "after_register"),
          setTimeout(() => {
            Rt();
          }, 200)),
        N < 0 && clearInterval(I);
    }, 2e3);
  }
  async function C() {
    const G = await kt("safety_verification"),
      N = { type: _, email: v.email, ...G },
      V = { ...G },
      { data: Y, error: z } = await (g
        ? Ve.signUp(V, g)
        : Ve.publicCodesMail(N));
    Y && (Re.send("toast", "info", { message: l(Et.Verification) }), A()),
      z && Re.send("toast", "error", z),
      t(12, (k = !1));
  }
  function A() {
    const G = Date.now() + 6e4;
    localStorage.setItem("count_down_mail", G), t(5, (u = 60));
    const N = setInterval(() => {
      const V = localStorage.getItem("count_down_mail") || "0",
        Y = Date.now();
      t(5, (u = Math.floor((Number(V) - Y) / 1e3))), u < 0 && clearInterval(N);
    }, 500);
  }
  function D() {
    t(12, (k = !0));
  }
  function L(G) {
    (T = G.detail.value),
      p &&
        p(
          T,
          ({ code: V, msg: Y }) => {
            if (V === 0) {
              _ === "mail-reset-password-code" && P();
              return;
            }
            t(3, (o = "fail"));
            const z = At[V];
            t(4, (c = z ? l(z) : Y));
          },
          v
        );
  }
  function O() {
    t(3, (o = "")), t(4, (c = ""));
  }
  function P() {
    I && clearInterval(I),
      a ? Re.send("modal-register", "startRegister") : i("close");
  }
  function R() {
    (r = this.offsetWidth), t(2, r);
  }
  return (
    (s.$$set = (G) => {
      "LG" in G && t(0, (l = G.LG)),
        "verificationData" in G && t(11, (n = G.verificationData)),
        "modalUI" in G && t(1, (a = G.modalUI));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 4096 && k && C();
    }),
    [l, a, r, o, c, u, m, _, D, L, O, n, k, R]
  );
}
let zu = class extends Ie {
  constructor(e) {
    super(),
      Te(this, e, Fu, Hu, Ce, { LG: 0, verificationData: 11, modalUI: 1 });
  }
};
const ju = (s) => ({}),
  Gn = (s) => ({}),
  qu = (s) => ({}),
  Bn = (s) => ({});
function Xu(s) {
  let e, t, l, n, a, i, r, o, c, u, m, _, v;
  ht(s[4]);
  const p = s[3].left,
    g = lt(p, s, s[2], Bn),
    k = s[3].right,
    I = lt(k, s, s[2], Gn);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        g && g.c(),
        (l = U()),
        (n = b("div")),
        I && I.c(),
        (a = U()),
        (i = b("div")),
        (r = b("div")),
        (o = H("BitYaris, Trade Simple ")),
        (c = b("br")),
        (u = H(" © Copyright 2024 BitYaris All rights reserved")),
        this.h();
    },
    l(T) {
      e = E(T, "DIV", { class: !0 });
      var S = w(e);
      t = E(S, "DIV", { class: !0 });
      var C = w(t);
      g && g.l(C), C.forEach(h), (l = M(S)), (n = E(S, "DIV", { class: !0 }));
      var A = w(n);
      I && I.l(A), (a = M(A)), (i = E(A, "DIV", { class: !0 }));
      var D = w(i);
      r = E(D, "DIV", { class: !0 });
      var L = w(r);
      (o = F(L, "BitYaris, Trade Simple ")),
        (c = E(L, "BR", {})),
        (u = F(L, " © Copyright 2024 BitYaris All rights reserved")),
        L.forEach(h),
        D.forEach(h),
        A.forEach(h),
        S.forEach(h),
        this.h();
    },
    h() {
      f(t, "class", "user-view-left pr B1 svelte-17peg7g"),
        f(r, "class", "f14 lh20 tc T3"),
        f(i, "class", "copy-right df aic jcc svelte-17peg7g"),
        f(n, "class", "user-view-right f1 df fdc jcsb B1 svelte-17peg7g"),
        f(e, "class", "user-view-content df svelte-17peg7g");
    },
    m(T, S) {
      B(T, e, S),
        d(e, t),
        g && g.m(t, null),
        d(e, l),
        d(e, n),
        I && I.m(n, null),
        d(n, a),
        d(n, i),
        d(i, r),
        d(r, o),
        d(r, c),
        d(r, u),
        (m = !0),
        _ || ((v = ee(window, "resize", s[4])), (_ = !0));
    },
    p(T, [S]) {
      g &&
        g.p &&
        (!m || S & 4) &&
        st(g, p, T, T[2], m ? at(p, T[2], S, qu) : nt(T[2]), Bn),
        I &&
          I.p &&
          (!m || S & 4) &&
          st(I, k, T, T[2], m ? at(k, T[2], S, ju) : nt(T[2]), Gn);
    },
    i(T) {
      m || ($(g, T), $(I, T), (m = !0));
    },
    o(T) {
      y(g, T), y(I, T), (m = !1);
    },
    d(T) {
      T && h(e), g && g.d(T), I && I.d(T), (_ = !1), v();
    },
  };
}
function Ku(s, e, t) {
  let l;
  ge(s, We, (o) => t(1, (l = o)));
  let { $$slots: n = {}, $$scope: a } = e,
    i = 0;
  Be(() => (document.body.style.height = "100%"));
  function r() {
    t(0, (i = window.innerHeight));
  }
  return (
    (s.$$set = (o) => {
      "$$scope" in o && t(2, (a = o.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 2 && l(W.HOME.pathname);
    }),
    [i, l, a, n, r]
  );
}
class Ll extends Ie {
  constructor(e) {
    super(), Te(this, e, Ku, Xu, Ce, {});
  }
}
function yn(s) {
  let e, t;
  return (
    (e = new Ll({
      props: { $$slots: { right: [Ju], left: [Qu] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 71 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Qu(s) {
  let e, t, l;
  return (
    (t = new Pl({})),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0, slot: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "activity-container df aic jcc xs:dn svelte-bhvczj"),
          f(e, "slot", "left");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p: me,
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function Ju(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[0](Et.Back) + "",
    o,
    c,
    u,
    m,
    _,
    v;
  return (
    (u = new zu({
      props: { LG: s[0], verificationData: s[1], modalUI: s[2] },
    })),
    u.$on("close", s[4]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          (i = b("span")),
          (o = H(r)),
          (c = U()),
          j(u.$$.fragment),
          this.h();
      },
      l(p) {
        e = E(p, "DIV", { class: !0, slot: !0 });
        var g = w(e);
        t = E(g, "DIV", { class: !0 });
        var k = w(t);
        l = E(k, "I", { class: !0 });
        var I = w(l);
        (n = F(I, "")),
          I.forEach(h),
          (a = M(k)),
          (i = E(k, "SPAN", { class: !0 }));
        var T = w(i);
        (o = F(T, r)),
          T.forEach(h),
          k.forEach(h),
          (c = M(g)),
          K(u.$$.fragment, g),
          g.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont arrow pa backLeft"),
          f(i, "class", "backSpan"),
          f(t, "class", "back f14 lh18 cp mb10 T3 svelte-bhvczj"),
          f(e, "class", "right df fdc aic svelte-bhvczj"),
          f(e, "slot", "right");
      },
      m(p, g) {
        B(p, e, g),
          d(e, t),
          d(t, l),
          d(l, n),
          d(t, a),
          d(t, i),
          d(i, o),
          d(e, c),
          q(u, e, null),
          (m = !0),
          _ || ((v = ee(t, "click", s[4])), (_ = !0));
      },
      p(p, g) {
        (!m || g & 1) && r !== (r = p[0](Et.Back) + "") && te(o, r);
        const k = {};
        g & 1 && (k.LG = p[0]),
          g & 2 && (k.verificationData = p[1]),
          g & 4 && (k.modalUI = p[2]),
          u.$set(k);
      },
      i(p) {
        m || ($(u.$$.fragment, p), (m = !0));
      },
      o(p) {
        y(u.$$.fragment, p), (m = !1);
      },
      d(p) {
        p && h(e), X(u), (_ = !1), v();
      },
    }
  );
}
function Zu(s) {
  let e, t, l, n;
  t = new fl({ props: { isLogin: !0 } });
  let a = s[3] === 1 && yn(s);
  return {
    c() {
      (e = b("div")), j(t.$$.fragment), (l = U()), a && a.c(), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      K(t.$$.fragment, r), (l = M(r)), a && a.l(r), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "warp svelte-bhvczj");
    },
    m(i, r) {
      B(i, e, r), q(t, e, null), d(e, l), a && a.m(e, null), (n = !0);
    },
    p(i, [r]) {
      i[3] === 1
        ? a
          ? (a.p(i, r), r & 8 && $(a, 1))
          : ((a = yn(i)), a.c(), $(a, 1), a.m(e, null))
        : a &&
          (Ue(),
          y(a, 1, 1, () => {
            a = null;
          }),
          Me());
    },
    i(i) {
      n || ($(t.$$.fragment, i), $(a), (n = !0));
    },
    o(i) {
      y(t.$$.fragment, i), y(a), (n = !1);
    },
    d(i) {
      i && h(e), X(t), a && a.d();
    },
  };
}
function xu(s, e, t) {
  let { LG: l = null } = e,
    { verificationData: n = null } = e,
    { modalUI: a = !1 } = e;
  const i = Qe();
  let r = 0;
  Be(() => {
    t(3, (r = 1)), Il();
  });
  function o() {
    i("close");
  }
  return (
    (s.$$set = (c) => {
      "LG" in c && t(0, (l = c.LG)),
        "verificationData" in c && t(1, (n = c.verificationData)),
        "modalUI" in c && t(2, (a = c.modalUI));
    }),
    [l, n, a, r, o]
  );
}
class ed extends Ie {
  constructor(e) {
    super(),
      Te(this, e, xu, Zu, Ce, { LG: 0, verificationData: 1, modalUI: 2 });
  }
}
const mt = {
  Back: "4231e6",
  Verify: "d1c2bd",
  EnterTheCode: "f393a0",
  KeepThisWindow: "266e2b",
  SendAgain: "bf180e",
  IncorrectCode: "57e777",
  Verification: "97c582",
  WeJustEmailed: "2d16d9",
  WeJustEmailedLogin: "f6ff6c",
  EnterTheCodeBelow: "2ca6c7",
};
function Wn(s) {
  let e, t, l;
  return {
    c() {
      (e = b("div")), (t = H(s[4])), (l = H("s")), this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = w(e);
      (t = F(a, s[4])), (l = F(a, "s")), a.forEach(h), this.h();
    },
    h() {
      f(e, "class", "fw3");
    },
    m(n, a) {
      B(n, e, a), d(e, t), d(e, l);
    },
    p(n, a) {
      a & 16 && te(t, n[4]);
    },
    d(n) {
      n && h(e);
    },
  };
}
function td(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o,
    c,
    u,
    m,
    _,
    v,
    p = s[0](mt.Back) + "",
    g,
    k,
    I,
    T,
    S = s[0](mt.Verify) + "",
    C,
    A,
    D,
    L,
    O,
    P,
    R,
    G =
      (s[6] === "login-verify"
        ? s[0](mt.WeJustEmailedLogin, {
            Email: `<span class='fw3 T1'>${s[5]}</span>`,
          })
        : s[0](mt.WeJustEmailed, {
            Email: `<span class='fw3 T1'>${s[5]}</span>`,
          })) + "",
    N,
    V,
    Y,
    z,
    x,
    ne = s[0](mt.KeepThisWindow) + "",
    ie,
    ue,
    re,
    Q,
    ae,
    le = s[0](mt.SendAgain) + "",
    oe,
    ce,
    ke,
    Pe,
    Ae;
  (Y = new Wt({
    props: { class: "home-email-code", status: s[2], explain: s[3] },
  })),
    Y.$on("change", s[10]),
    Y.$on("input", s[11]);
  let pe = s[4] > 0 && Wn(s);
  return {
    c() {
      (e = b("div")),
        (t = b("div")),
        (l = b("a")),
        (n = b("div")),
        (a = b("img")),
        (o = U()),
        (c = b("div")),
        (u = b("i")),
        (m = H("")),
        (_ = U()),
        (v = b("span")),
        (g = H(p)),
        (k = U()),
        (I = b("div")),
        (T = b("div")),
        (C = H(S)),
        (A = U()),
        (D = b("div")),
        (L = b("img")),
        (P = U()),
        (R = b("div")),
        (N = U()),
        (V = b("div")),
        j(Y.$$.fragment),
        (z = U()),
        (x = b("div")),
        (ie = H(ne)),
        (ue = U()),
        (re = b("div")),
        pe && pe.c(),
        (Q = U()),
        (ae = b("div")),
        (oe = H(le)),
        this.h();
    },
    l(fe) {
      e = E(fe, "DIV", { class: !0 });
      var he = w(e);
      t = E(he, "DIV", { class: !0 });
      var de = w(t);
      l = E(de, "A", { href: !0, class: !0 });
      var _e = w(l);
      n = E(_e, "DIV", { class: !0 });
      var De = w(n);
      (a = E(De, "IMG", { alt: !0, src: !0, class: !0 })),
        De.forEach(h),
        _e.forEach(h),
        (o = M(de)),
        (c = E(de, "DIV", { class: !0 }));
      var qe = w(c);
      u = E(qe, "I", { class: !0 });
      var ve = w(u);
      (m = F(ve, "")),
        ve.forEach(h),
        (_ = M(qe)),
        (v = E(qe, "SPAN", { class: !0 }));
      var be = w(v);
      (g = F(be, p)),
        be.forEach(h),
        qe.forEach(h),
        (k = M(de)),
        (I = E(de, "DIV", { class: !0 }));
      var we = w(I);
      T = E(we, "DIV", { class: !0 });
      var Ye = w(T);
      (C = F(Ye, S)),
        Ye.forEach(h),
        (A = M(we)),
        (D = E(we, "DIV", { class: !0 }));
      var Ne = w(D);
      (L = E(Ne, "IMG", { class: !0, src: !0, alt: !0 })),
        Ne.forEach(h),
        (P = M(we)),
        (R = E(we, "DIV", { class: !0 }));
      var $e = w(R);
      $e.forEach(h), (N = M(we)), (V = E(we, "DIV", { class: !0 }));
      var Ee = w(V);
      K(Y.$$.fragment, Ee),
        Ee.forEach(h),
        (z = M(we)),
        (x = E(we, "DIV", { class: !0 }));
      var Le = w(x);
      (ie = F(Le, ne)),
        Le.forEach(h),
        (ue = M(we)),
        (re = E(we, "DIV", { class: !0 }));
      var et = w(re);
      pe && pe.l(et), (Q = M(et)), (ae = E(et, "DIV", { class: !0 }));
      var it = w(ae);
      (oe = F(it, le)),
        it.forEach(h),
        et.forEach(h),
        we.forEach(h),
        de.forEach(h),
        he.forEach(h),
        this.h();
    },
    h() {
      f(a, "alt", "Logo"),
        Se(a.src, (i = s[1] < 640 ? rt.LOGO_DARK : rt.LOGO_LIGHT)) ||
          f(a, "src", i),
        f(a, "class", "svelte-7kujrv"),
        f(n, "class", "logo svelte-7kujrv"),
        f(l, "href", (r = s[7](W.HOME.pathname))),
        f(l, "class", "logo-a svelte-7kujrv"),
        f(u, "class", "iconfont arrow pa backLeft"),
        f(v, "class", "backSpan"),
        f(c, "class", "back f12 lh18 cp mb10 cf svelte-7kujrv"),
        f(T, "class", "title f36 lh46 fw3 T1 tc svelte-7kujrv"),
        f(L, "class", "email-gif svelte-7kujrv"),
        Se(L.src, (O = rt.REGISTER_LANDING_PAGE_EMAIL_GIF)) || f(L, "src", O),
        f(L, "alt", "email"),
        f(D, "class", "mt20 tc"),
        f(R, "class", "title2 mt32 T4 mb24 f14 l22 svelte-7kujrv"),
        f(V, "class", "code svelte-7kujrv"),
        f(x, "class", "mt16 T4"),
        f(ae, "class", "ml10 cp svelte-7kujrv"),
        Z(ae, "disable", s[4] > 0),
        f(re, "class", "df aic jcc mt32 f14 lh18 BLUE"),
        f(I, "class", "main svelte-7kujrv"),
        f(t, "class", "content df fdc svelte-7kujrv"),
        f(e, "class", "warp svelte-7kujrv"),
        ht(() => s[16].call(e));
    },
    m(fe, he) {
      B(fe, e, he),
        d(e, t),
        d(t, l),
        d(l, n),
        d(n, a),
        d(t, o),
        d(t, c),
        d(c, u),
        d(u, m),
        d(c, _),
        d(c, v),
        d(v, g),
        d(t, k),
        d(t, I),
        d(I, T),
        d(T, C),
        d(I, A),
        d(I, D),
        d(D, L),
        d(I, P),
        d(I, R),
        (R.innerHTML = G),
        d(I, N),
        d(I, V),
        q(Y, V, null),
        d(I, z),
        d(I, x),
        d(x, ie),
        d(I, ue),
        d(I, re),
        pe && pe.m(re, null),
        d(re, Q),
        d(re, ae),
        d(ae, oe),
        (ce = cl(e, s[16].bind(e))),
        (ke = !0),
        Pe ||
          ((Ae = [
            ee(l, "click", s[15]),
            ee(c, "click", s[12]),
            ee(ae, "click", s[9]),
          ]),
          (Pe = !0));
    },
    p(fe, [he]) {
      (!ke ||
        (he & 2 &&
          !Se(a.src, (i = fe[1] < 640 ? rt.LOGO_DARK : rt.LOGO_LIGHT)))) &&
        f(a, "src", i),
        (!ke || (he & 128 && r !== (r = fe[7](W.HOME.pathname)))) &&
          f(l, "href", r),
        (!ke || he & 1) && p !== (p = fe[0](mt.Back) + "") && te(g, p),
        (!ke || he & 1) && S !== (S = fe[0](mt.Verify) + "") && te(C, S),
        (!ke || he & 97) &&
          G !==
            (G =
              (fe[6] === "login-verify"
                ? fe[0](mt.WeJustEmailedLogin, {
                    Email: `<span class='fw3 T1'>${fe[5]}</span>`,
                  })
                : fe[0](mt.WeJustEmailed, {
                    Email: `<span class='fw3 T1'>${fe[5]}</span>`,
                  })) + "") &&
          (R.innerHTML = G);
      const de = {};
      he & 4 && (de.status = fe[2]),
        he & 8 && (de.explain = fe[3]),
        Y.$set(de),
        (!ke || he & 1) &&
          ne !== (ne = fe[0](mt.KeepThisWindow) + "") &&
          te(ie, ne),
        fe[4] > 0
          ? pe
            ? pe.p(fe, he)
            : ((pe = Wn(fe)), pe.c(), pe.m(re, Q))
          : pe && (pe.d(1), (pe = null)),
        (!ke || he & 1) && le !== (le = fe[0](mt.SendAgain) + "") && te(oe, le),
        (!ke || he & 16) && Z(ae, "disable", fe[4] > 0);
    },
    i(fe) {
      ke || ($(Y.$$.fragment, fe), (ke = !0));
    },
    o(fe) {
      y(Y.$$.fragment, fe), (ke = !1);
    },
    d(fe) {
      fe && h(e), X(Y), pe && pe.d(), ce(), (Pe = !1), xe(Ae);
    },
  };
}
function ld(s, e, t) {
  let l;
  ge(s, We, (G) => t(7, (l = G)));
  let { LG: n = null } = e,
    { verificationData: a = null } = e;
  const i = Qe();
  let r = 1200,
    o = "",
    c = "",
    u = 60,
    m = "",
    _ = null,
    v = null,
    p = null,
    g = null,
    k = !1,
    I = null;
  Be(() => {
    t(2, (o = "")),
      t(3, (c = "")),
      t(14, (k = !1)),
      t(6, (_ = a.type)),
      (v = a.context),
      (p = a.callback),
      t(5, (m = a.context.email)),
      C(),
      a.params && (g = a.params),
      a.context.registerToken && T(a.context);
  });
  function T(G) {
    let N = 300;
    I = setInterval(async () => {
      const V = { token: G.registerToken },
        { data: Y } = await Ve.loginWithToken(V);
      (N = N - 2),
        Y &&
          (clearInterval(I),
          await Bt.bindGoogleClientId(),
          localStorage.setItem("base-kyc-status", "1"),
          Bt.event("user.welcome", "open_welcome_page", "after_register"),
          setTimeout(() => {
            Rt();
          }, 200)),
        N < 0 && clearInterval(I);
    }, 2e3);
  }
  async function S() {
    const G = await kt("safety_verification"),
      N = { type: _, email: v.email, ...G },
      V = { ...G },
      { data: Y, error: z } = await (g
        ? Ve.signUp(V, g)
        : Ve.publicCodesMail(N));
    Y && (Re.send("toast", "info", { message: n(mt.Verification) }), C()),
      z && Re.send("toast", "error", z),
      t(14, (k = !1));
  }
  function C() {
    const G = Date.now() + 6e4;
    localStorage.setItem("count_down_mail", G), t(4, (u = 60));
    const N = setInterval(() => {
      const V = localStorage.getItem("count_down_mail") || "0",
        Y = Date.now();
      t(4, (u = Math.floor((Number(V) - Y) / 1e3))), u < 0 && clearInterval(N);
    }, 500);
  }
  function A() {
    t(14, (k = !0));
  }
  function D(G) {
    const N = G.detail.value;
    p &&
      p(
        N,
        ({ code: Y, msg: z }) => {
          if (Y === 0) {
            _ === "mail-reset-password-code" && O();
            return;
          }
          t(2, (o = "fail"));
          const x = At[Y];
          t(3, (c = x ? n(x) : z));
        },
        v
      );
  }
  function L() {
    t(2, (o = "")), t(3, (c = ""));
  }
  function O() {
    I && clearInterval(I), i("close");
  }
  const P = () => i("close");
  function R() {
    (r = this.offsetWidth), t(1, r);
  }
  return (
    (s.$$set = (G) => {
      "LG" in G && t(0, (n = G.LG)),
        "verificationData" in G && t(13, (a = G.verificationData));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 16384 && k && S();
    }),
    [n, r, o, c, u, m, _, l, i, A, D, L, O, a, k, P, R]
  );
}
let sd = class extends Ie {
  constructor(e) {
    super(), Te(this, e, ld, td, Ce, { LG: 0, verificationData: 13 });
  }
};
const Lt = {
  Back: "27e7ae",
  GoogleVerification: "ac52e5",
  GoogleAuthenticator: "c4bdd6",
  IncorrectCode: "e1a398",
  SecurityVerificationUnavailable: "13f05a",
};
function nd(s) {
  let e,
    t,
    l,
    n,
    a = s[0](Lt.GoogleVerification) + "",
    i,
    r,
    o,
    c = s[0](Lt.GoogleAuthenticator) + "",
    u,
    m,
    _,
    v,
    p,
    g,
    k = s[0](Lt.SecurityVerificationUnavailable) + "",
    I,
    T,
    S,
    C,
    A;
  return (
    (v = new Wt({
      props: { class: "home-verification-code", status: s[2], explain: s[3] },
    })),
    v.$on("change", s[4]),
    v.$on("input", s[5]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (n = b("div")),
          (i = H(a)),
          (r = U()),
          (o = b("div")),
          (u = H(c)),
          (m = U()),
          (_ = b("div")),
          j(v.$$.fragment),
          (p = U()),
          (g = b("div")),
          (I = H(k)),
          this.h();
      },
      l(D) {
        e = E(D, "DIV", { class: !0 });
        var L = w(e);
        t = E(L, "DIV", { class: !0 });
        var O = w(t);
        l = E(O, "DIV", { class: !0 });
        var P = w(l);
        n = E(P, "DIV", { class: !0 });
        var R = w(n);
        (i = F(R, a)),
          R.forEach(h),
          (r = M(P)),
          (o = E(P, "DIV", { class: !0 }));
        var G = w(o);
        (u = F(G, c)),
          G.forEach(h),
          (m = M(P)),
          (_ = E(P, "DIV", { class: !0 }));
        var N = w(_);
        K(v.$$.fragment, N),
          N.forEach(h),
          (p = M(P)),
          (g = E(P, "DIV", { class: !0 }));
        var V = w(g);
        (I = F(V, k)),
          V.forEach(h),
          P.forEach(h),
          O.forEach(h),
          L.forEach(h),
          this.h();
      },
      h() {
        f(n, "class", "title lh42 f36 fw3 T1 svelte-1qrf3xv"),
          f(o, "class", "title mt24 lh18 f14 fw2 T4 svelte-1qrf3xv"),
          f(_, "class", "code mt36 svelte-1qrf3xv"),
          f(g, "class", "mt20 cp BLUE"),
          f(l, "class", "main svelte-1qrf3xv"),
          f(t, "class", "content df fdc svelte-1qrf3xv"),
          f(e, "class", "warp svelte-1qrf3xv"),
          ht(() => s[8].call(e));
      },
      m(D, L) {
        B(D, e, L),
          d(e, t),
          d(t, l),
          d(l, n),
          d(n, i),
          d(l, r),
          d(l, o),
          d(o, u),
          d(l, m),
          d(l, _),
          q(v, _, null),
          d(l, p),
          d(l, g),
          d(g, I),
          (T = cl(e, s[8].bind(e))),
          (S = !0),
          C || ((A = ee(g, "click", s[6])), (C = !0));
      },
      p(D, [L]) {
        (!S || L & 1) &&
          a !== (a = D[0](Lt.GoogleVerification) + "") &&
          te(i, a),
          (!S || L & 1) &&
            c !== (c = D[0](Lt.GoogleAuthenticator) + "") &&
            te(u, c);
        const O = {};
        L & 4 && (O.status = D[2]),
          L & 8 && (O.explain = D[3]),
          v.$set(O),
          (!S || L & 1) &&
            k !== (k = D[0](Lt.SecurityVerificationUnavailable) + "") &&
            te(I, k);
      },
      i(D) {
        S || ($(v.$$.fragment, D), (S = !0));
      },
      o(D) {
        y(v.$$.fragment, D), (S = !1);
      },
      d(D) {
        D && h(e), X(v), T(), (C = !1), A();
      },
    }
  );
}
function ad(s, e, t) {
  let l;
  ge(s, We, (I) => t(12, (l = I)));
  let { LG: n = null } = e,
    { verificationData: a = null } = e;
  const i = Qe();
  let r = 1200,
    o = "",
    c = "",
    u = null,
    m = null,
    _ = null;
  Be(() => {
    t(2, (o = "")), t(3, (c = "")), (u = a.context), (m = a.callback);
  });
  function v(I) {
    (_ = I.detail.value),
      t(2, (o = "loading")),
      m &&
        m(
          _,
          ({ code: S, msg: C }) => {
            if (S === 34005 || S === 31005) {
              i("close");
              return;
            }
            if (S === 0) {
              t(2, (o = "success")), i("close");
              return;
            }
            t(2, (o = "fail"));
            const A = At[S];
            t(3, (c = A ? n(A) : C));
          },
          u
        );
  }
  function p() {
    t(2, (o = "")), t(3, (c = ""));
  }
  function g() {
    El.set({ email: u.email, code: u.code }),
      wl.next({
        balanceType: 0,
        resetRecordId: 0,
        resetRecordStatus: 0,
        remain_count: 0,
        code: 0,
        answerStatus: 0,
      }),
      i("close"),
      _t(l(W.RESET_SECURITY.pathname));
  }
  function k() {
    (r = this.offsetWidth), t(1, r);
  }
  return (
    (s.$$set = (I) => {
      "LG" in I && t(0, (n = I.LG)),
        "verificationData" in I && t(7, (a = I.verificationData));
    }),
    [n, r, o, c, v, p, g, a, k]
  );
}
class id extends Ie {
  constructor(e) {
    super(), Te(this, e, ad, nd, Ce, { LG: 0, verificationData: 7 });
  }
}
function Yn(s) {
  let e, t;
  return (
    (e = new Ll({
      props: { $$slots: { right: [od], left: [rd] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 71 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function rd(s) {
  let e, t, l;
  return (
    (t = new Pl({})),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0, slot: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "activity-container df aic jcc xs:dn svelte-hs7kbx"),
          f(e, "slot", "left");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p: me,
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function od(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[0](Lt.Back) + "",
    o,
    c,
    u,
    m,
    _,
    v;
  return (
    (u = new id({
      props: { LG: s[0], verificationData: s[1], modalUI: s[2] },
    })),
    u.$on("close", s[4]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          (i = b("span")),
          (o = H(r)),
          (c = U()),
          j(u.$$.fragment),
          this.h();
      },
      l(p) {
        e = E(p, "DIV", { class: !0, slot: !0 });
        var g = w(e);
        t = E(g, "DIV", { class: !0 });
        var k = w(t);
        l = E(k, "I", { class: !0 });
        var I = w(l);
        (n = F(I, "")),
          I.forEach(h),
          (a = M(k)),
          (i = E(k, "SPAN", { class: !0 }));
        var T = w(i);
        (o = F(T, r)),
          T.forEach(h),
          k.forEach(h),
          (c = M(g)),
          K(u.$$.fragment, g),
          g.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont arrow pa backLeft"),
          f(i, "class", "backSpan"),
          f(t, "class", "back f14 lh18 cp mb10 T3 svelte-hs7kbx"),
          f(e, "class", "right df fdc aic jcc svelte-hs7kbx"),
          f(e, "slot", "right");
      },
      m(p, g) {
        B(p, e, g),
          d(e, t),
          d(t, l),
          d(l, n),
          d(t, a),
          d(t, i),
          d(i, o),
          d(e, c),
          q(u, e, null),
          (m = !0),
          _ || ((v = ee(t, "click", s[4])), (_ = !0));
      },
      p(p, g) {
        (!m || g & 1) && r !== (r = p[0](Lt.Back) + "") && te(o, r);
        const k = {};
        g & 1 && (k.LG = p[0]),
          g & 2 && (k.verificationData = p[1]),
          g & 4 && (k.modalUI = p[2]),
          u.$set(k);
      },
      i(p) {
        m || ($(u.$$.fragment, p), (m = !0));
      },
      o(p) {
        y(u.$$.fragment, p), (m = !1);
      },
      d(p) {
        p && h(e), X(u), (_ = !1), v();
      },
    }
  );
}
function cd(s) {
  let e, t, l, n;
  t = new fl({ props: { isLogin: !0 } });
  let a = s[3] === 1 && Yn(s);
  return {
    c() {
      (e = b("div")), j(t.$$.fragment), (l = U()), a && a.c(), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      K(t.$$.fragment, r), (l = M(r)), a && a.l(r), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "warp svelte-hs7kbx");
    },
    m(i, r) {
      B(i, e, r), q(t, e, null), d(e, l), a && a.m(e, null), (n = !0);
    },
    p(i, [r]) {
      i[3] === 1
        ? a
          ? (a.p(i, r), r & 8 && $(a, 1))
          : ((a = Yn(i)), a.c(), $(a, 1), a.m(e, null))
        : a &&
          (Ue(),
          y(a, 1, 1, () => {
            a = null;
          }),
          Me());
    },
    i(i) {
      n || ($(t.$$.fragment, i), $(a), (n = !0));
    },
    o(i) {
      y(t.$$.fragment, i), y(a), (n = !1);
    },
    d(i) {
      i && h(e), X(t), a && a.d();
    },
  };
}
function fd(s, e, t) {
  let { LG: l = null } = e,
    { verificationData: n = null } = e,
    { modalUI: a = !1 } = e;
  const i = Qe();
  let r = 0;
  Be(() => {
    t(3, (r = 1)), Il();
  });
  function o() {
    i("close");
  }
  return (
    (s.$$set = (c) => {
      "LG" in c && t(0, (l = c.LG)),
        "verificationData" in c && t(1, (n = c.verificationData)),
        "modalUI" in c && t(2, (a = c.modalUI));
    }),
    [l, n, a, r, o]
  );
}
class ud extends Ie {
  constructor(e) {
    super(),
      Te(this, e, fd, cd, Ce, { LG: 0, verificationData: 1, modalUI: 2 });
  }
}
const Xe = {
    Back: "8c80ad",
    NoPasswordError: "42548f",
    PasswordError: "ea869d",
    BindGoogleAccount: "d25a00",
    AfterBindYour: "421b2f",
    Email: "013a8b",
    Password: "8ad20a",
    Bind: "5b4e65",
    PleaseInputYour: "9c267f",
    ForgotPassword: "bb01ca",
    InvalidPasswordOrGoogle: "4b5e8a",
  },
  { window: Da } = Sl;
function Hn(s) {
  let e,
    t = s[0](At[34005], { Times: s[6] ? s[6].data.remainTimes : 0 }) + "";
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(l) {
      e = E(l, "DIV", { class: !0 });
      var n = w(e);
      n.forEach(h), this.h();
    },
    h() {
      f(e, "class", "mt12 f12 sell");
    },
    m(l, n) {
      B(l, e, n), (e.innerHTML = t);
    },
    p(l, n) {
      n & 65 &&
        t !==
          (t =
            l[0](At[34005], { Times: l[6] ? l[6].data.remainTimes : 0 }) +
            "") &&
        (e.innerHTML = t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function dd(s) {
  let e = s[0](Xe.Bind) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](Xe.Bind) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function hd(s) {
  let e,
    t,
    l,
    n,
    a = s[0](Xe.BindGoogleAccount) + "",
    i,
    r,
    o,
    c = s[0](Xe.AfterBindYour) + "",
    u,
    m,
    _,
    v = s[0](Xe.Email) + "",
    p,
    g,
    k,
    I,
    T,
    S,
    C,
    A = s[0](Xe.Password) + "",
    D,
    L,
    O,
    P,
    R,
    G,
    N,
    V,
    Y = s[0](Xe.PleaseInputYour) + "",
    z,
    x,
    ne,
    ie,
    ue = s[0](Xe.ForgotPassword) + "",
    re,
    Q,
    ae,
    le,
    oe,
    ce,
    ke,
    Pe;
  ht(s[13]);
  function Ae(_e) {
    s[14](_e);
  }
  let pe = { disabled: !0 };
  s[4] !== void 0 && (pe.value = s[4]),
    (I = new _a({ props: pe })),
    gt.push(() => il(I, "value", Ae));
  function fe(_e) {
    s[15](_e);
  }
  let he = {
    showIcon: !1,
    autocomplete: "new-password",
    placeholder: s[0](Xe.Password),
  };
  s[1] !== void 0 && (he.value = s[1]),
    (P = new pa({ props: he })),
    gt.push(() => il(P, "value", fe)),
    P.$on("keypress", s[9]);
  let de = s[5] && Hn(s);
  return (
    (oe = new Ot({
      props: {
        class: "wp100",
        type: "primary",
        newRadius: !0,
        disabled: s[7],
        $$slots: { default: [dd] },
        $$scope: { ctx: s },
      },
    })),
    oe.$on("click", s[10]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (n = b("div")),
          (i = H(a)),
          (r = U()),
          (o = b("div")),
          (u = H(c)),
          (m = U()),
          (_ = b("div")),
          (p = H(v)),
          (g = U()),
          (k = b("div")),
          j(I.$$.fragment),
          (S = U()),
          (C = b("div")),
          (D = H(A)),
          (L = U()),
          (O = b("div")),
          j(P.$$.fragment),
          (G = U()),
          de && de.c(),
          (N = U()),
          (V = b("div")),
          (z = H(Y)),
          (x = U()),
          (ne = b("div")),
          (ie = b("a")),
          (re = H(ue)),
          (ae = U()),
          (le = b("div")),
          j(oe.$$.fragment),
          this.h();
      },
      l(_e) {
        e = E(_e, "DIV", { class: !0 });
        var De = w(e);
        t = E(De, "DIV", { class: !0 });
        var qe = w(t);
        l = E(qe, "DIV", { class: !0 });
        var ve = w(l);
        n = E(ve, "DIV", { class: !0 });
        var be = w(n);
        (i = F(be, a)),
          be.forEach(h),
          (r = M(ve)),
          (o = E(ve, "DIV", { class: !0 }));
        var we = w(o);
        (u = F(we, c)),
          we.forEach(h),
          (m = M(ve)),
          (_ = E(ve, "DIV", { class: !0 }));
        var Ye = w(_);
        (p = F(Ye, v)),
          Ye.forEach(h),
          (g = M(ve)),
          (k = E(ve, "DIV", { class: !0 }));
        var Ne = w(k);
        K(I.$$.fragment, Ne),
          Ne.forEach(h),
          (S = M(ve)),
          (C = E(ve, "DIV", { class: !0 }));
        var $e = w(C);
        (D = F($e, A)),
          $e.forEach(h),
          (L = M(ve)),
          (O = E(ve, "DIV", { class: !0 }));
        var Ee = w(O);
        K(P.$$.fragment, Ee),
          Ee.forEach(h),
          (G = M(ve)),
          de && de.l(ve),
          (N = M(ve)),
          (V = E(ve, "DIV", { class: !0 }));
        var Le = w(V);
        (z = F(Le, Y)),
          Le.forEach(h),
          (x = M(ve)),
          (ne = E(ve, "DIV", { class: !0 }));
        var et = w(ne);
        ie = E(et, "A", { class: !0, href: !0, target: !0 });
        var it = w(ie);
        (re = F(it, ue)),
          it.forEach(h),
          et.forEach(h),
          (ae = M(ve)),
          (le = E(ve, "DIV", { class: !0 }));
        var Fe = w(le);
        K(oe.$$.fragment, Fe),
          Fe.forEach(h),
          ve.forEach(h),
          qe.forEach(h),
          De.forEach(h),
          this.h();
      },
      h() {
        f(n, "class", "title f36 lh46 fw3 T1 svelte-1j3uvrh"),
          f(o, "class", "title2 mt24 mb24 lh20 T4 f16 svelte-1j3uvrh"),
          f(_, "class", "mt24 lh20 f14 T3"),
          f(k, "class", "home-login-email mt8 svelte-1j3uvrh"),
          f(C, "class", "mt24 lh20 f14 T3"),
          f(O, "class", "home-login-password mt8"),
          f(V, "class", "mt12 lh20 f16 T3"),
          f(ie, "class", "forgot"),
          f(
            ie,
            "href",
            (Q =
              s[8](W.RESET_PASSWORD.pathname) +
              (s[3] ? "?" + bt.stringify({ target: s[3] }) : ""))
          ),
          f(ie, "target", "_self"),
          f(ne, "class", "df aic jcsb mt20 lh18 f14 fw2 cp"),
          f(le, "class", "btn svelte-1j3uvrh"),
          f(l, "class", "main svelte-1j3uvrh"),
          f(t, "class", "content df fdc svelte-1j3uvrh"),
          f(e, "class", "warp svelte-1j3uvrh");
      },
      m(_e, De) {
        B(_e, e, De),
          d(e, t),
          d(t, l),
          d(l, n),
          d(n, i),
          d(l, r),
          d(l, o),
          d(o, u),
          d(l, m),
          d(l, _),
          d(_, p),
          d(l, g),
          d(l, k),
          q(I, k, null),
          d(l, S),
          d(l, C),
          d(C, D),
          d(l, L),
          d(l, O),
          q(P, O, null),
          d(l, G),
          de && de.m(l, null),
          d(l, N),
          d(l, V),
          d(V, z),
          d(l, x),
          d(l, ne),
          d(ne, ie),
          d(ie, re),
          d(l, ae),
          d(l, le),
          q(oe, le, null),
          (ce = !0),
          ke || ((Pe = ee(Da, "resize", s[13])), (ke = !0));
      },
      p(_e, [De]) {
        (!ce || De & 1) &&
          a !== (a = _e[0](Xe.BindGoogleAccount) + "") &&
          te(i, a),
          (!ce || De & 1) &&
            c !== (c = _e[0](Xe.AfterBindYour) + "") &&
            te(u, c),
          (!ce || De & 1) && v !== (v = _e[0](Xe.Email) + "") && te(p, v);
        const qe = {};
        !T && De & 16 && ((T = !0), (qe.value = _e[4]), rl(() => (T = !1))),
          I.$set(qe),
          (!ce || De & 1) && A !== (A = _e[0](Xe.Password) + "") && te(D, A);
        const ve = {};
        De & 1 && (ve.placeholder = _e[0](Xe.Password)),
          !R && De & 2 && ((R = !0), (ve.value = _e[1]), rl(() => (R = !1))),
          P.$set(ve),
          _e[5]
            ? de
              ? de.p(_e, De)
              : ((de = Hn(_e)), de.c(), de.m(l, N))
            : de && (de.d(1), (de = null)),
          (!ce || De & 1) &&
            Y !== (Y = _e[0](Xe.PleaseInputYour) + "") &&
            te(z, Y),
          (!ce || De & 1) &&
            ue !== (ue = _e[0](Xe.ForgotPassword) + "") &&
            te(re, ue),
          (!ce ||
            (De & 264 &&
              Q !==
                (Q =
                  _e[8](W.RESET_PASSWORD.pathname) +
                  (_e[3] ? "?" + bt.stringify({ target: _e[3] }) : "")))) &&
            f(ie, "href", Q);
        const be = {};
        De & 128 && (be.disabled = _e[7]),
          De & 8388609 && (be.$$scope = { dirty: De, ctx: _e }),
          oe.$set(be);
      },
      i(_e) {
        ce ||
          ($(I.$$.fragment, _e),
          $(P.$$.fragment, _e),
          $(oe.$$.fragment, _e),
          (ce = !0));
      },
      o(_e) {
        y(I.$$.fragment, _e),
          y(P.$$.fragment, _e),
          y(oe.$$.fragment, _e),
          (ce = !1);
      },
      d(_e) {
        _e && h(e), X(I), X(P), de && de.d(), X(oe), (ke = !1), Pe();
      },
    }
  );
}
function md(s, e, t) {
  let l, n;
  ge(s, We, (P) => t(8, (n = P)));
  let { LG: a = null } = e,
    { verificationData: i = null } = e,
    { oauthData: r = null } = e;
  Qe();
  let o = 1200,
    c = "",
    u = "",
    m = "",
    _ = "",
    v = "",
    p = !1,
    g = {},
    k = !1,
    I = null;
  Be(() => {
    const P = bt.parse(window.location.search);
    t(3, (c = P.target)),
      t(4, (u = i.email)),
      (v = i.code),
      (_ = i.totpRequired),
      (k = r.isOauth),
      (I = r.search);
  });
  function T(P) {
    return P === ""
      ? a(Xe.NoPasswordError)
      : P && !Nt.PASSWORD.test(P)
      ? a(Xe.PasswordError)
      : null;
  }
  function S(P) {
    P.keyCode === 13 && C();
  }
  async function C() {
    if ((t(5, (p = !1)), _)) {
      wt.launchGoogleVerificationPage(a, {
        context: { email: u, code: v, password: m },
        async callback(V, Y, z) {
          const x = await A(V);
          Y(x);
        },
      });
      return;
    }
    const P = { email: u, code: v, password: m },
      { data: R, error: G, reply: N } = await Ve.confirmAuthLogin(P);
    if (R) {
      if (k) {
        window.location.assign(
          n(W.OAUTH_AUTHORIZE.pathname) + I + "&status=logged"
        );
        return;
      }
      setTimeout(() => {
        window.location.assign(W.HOME.pathname);
      }, 200);
    }
    G &&
      (t(6, (g = N)),
      G.code === 34005 && t(5, (p = !0)),
      Re.send("toast", "error", { message: a(Xe.InvalidPasswordOrGoogle) }));
  }
  async function A(P) {
    t(5, (p = !1));
    const R = { email: u, code: v, password: m, totpCode: P },
      { data: G, error: N, reply: V } = await Ve.confirmAuthLogin(R);
    if (G)
      return k
        ? (window.location.assign(
            n(W.OAUTH_AUTHORIZE.pathname) + I + "&status=logged"
          ),
          { code: 0, msg: "" })
        : (setTimeout(() => {
            window.location.assign(W.HOME.pathname);
          }, 200),
          { code: 0, msg: "" });
    if (N)
      return (
        t(6, (g = V)),
        N.code === 34005 && t(5, (p = !0)),
        Re.send("toast", "error", { message: a(Xe.InvalidPasswordOrGoogle) }),
        { code: N.code, msg: a(Xe.InvalidPasswordOrGoogle) }
      );
  }
  function D() {
    t(2, (o = Da.innerWidth));
  }
  function L(P) {
    (u = P), t(4, u);
  }
  function O(P) {
    (m = P), t(1, m);
  }
  return (
    (s.$$set = (P) => {
      "LG" in P && t(0, (a = P.LG)),
        "verificationData" in P && t(11, (i = P.verificationData)),
        "oauthData" in P && t(12, (r = P.oauthData));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 2 && t(7, (l = T(m)));
    }),
    [a, m, o, c, u, p, g, l, n, S, C, i, r, D, L, O]
  );
}
class _d extends Ie {
  constructor(e) {
    super(),
      Te(this, e, md, hd, Ce, { LG: 0, verificationData: 11, oauthData: 12 });
  }
}
function Fn(s) {
  let e, t;
  return (
    (e = new Ll({
      props: { $$slots: { right: [pd], left: [gd] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, n) {
        const a = {};
        n & 71 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function gd(s) {
  let e, t, l;
  return (
    (t = new Pl({})),
    {
      c() {
        (e = b("div")), j(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0, slot: !0 });
        var a = w(e);
        K(t.$$.fragment, a), a.forEach(h), this.h();
      },
      h() {
        f(e, "class", "activity-container df aic jcc xs:dn svelte-hs7kbx"),
          f(e, "slot", "left");
      },
      m(n, a) {
        B(n, e, a), q(t, e, null), (l = !0);
      },
      p: me,
      i(n) {
        l || ($(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        y(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && h(e), X(t);
      },
    }
  );
}
function pd(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r = s[0](Xe.Back) + "",
    o,
    c,
    u,
    m,
    _,
    v;
  return (
    (u = new _d({
      props: { LG: s[0], verificationData: s[1], oauthData: s[2] },
    })),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("i")),
          (n = H("")),
          (a = U()),
          (i = b("span")),
          (o = H(r)),
          (c = U()),
          j(u.$$.fragment),
          this.h();
      },
      l(p) {
        e = E(p, "DIV", { class: !0, slot: !0 });
        var g = w(e);
        t = E(g, "DIV", { class: !0 });
        var k = w(t);
        l = E(k, "I", { class: !0 });
        var I = w(l);
        (n = F(I, "")),
          I.forEach(h),
          (a = M(k)),
          (i = E(k, "SPAN", { class: !0 }));
        var T = w(i);
        (o = F(T, r)),
          T.forEach(h),
          k.forEach(h),
          (c = M(g)),
          K(u.$$.fragment, g),
          g.forEach(h),
          this.h();
      },
      h() {
        f(l, "class", "iconfont arrow pa backLeft"),
          f(i, "class", "backSpan"),
          f(t, "class", "back f14 lh18 cp mb10 T3 svelte-hs7kbx"),
          f(e, "class", "right df fdc aic jcc svelte-hs7kbx"),
          f(e, "slot", "right");
      },
      m(p, g) {
        B(p, e, g),
          d(e, t),
          d(t, l),
          d(l, n),
          d(t, a),
          d(t, i),
          d(i, o),
          d(e, c),
          q(u, e, null),
          (m = !0),
          _ || ((v = ee(t, "click", s[4])), (_ = !0));
      },
      p(p, g) {
        (!m || g & 1) && r !== (r = p[0](Xe.Back) + "") && te(o, r);
        const k = {};
        g & 1 && (k.LG = p[0]),
          g & 2 && (k.verificationData = p[1]),
          g & 4 && (k.oauthData = p[2]),
          u.$set(k);
      },
      i(p) {
        m || ($(u.$$.fragment, p), (m = !0));
      },
      o(p) {
        y(u.$$.fragment, p), (m = !1);
      },
      d(p) {
        p && h(e), X(u), (_ = !1), v();
      },
    }
  );
}
function vd(s) {
  let e, t, l, n;
  t = new fl({ props: { isLogin: !0 } });
  let a = s[3] === 1 && Fn(s);
  return {
    c() {
      (e = b("div")), j(t.$$.fragment), (l = U()), a && a.c(), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var r = w(e);
      K(t.$$.fragment, r), (l = M(r)), a && a.l(r), r.forEach(h), this.h();
    },
    h() {
      f(e, "class", "warp svelte-hs7kbx");
    },
    m(i, r) {
      B(i, e, r), q(t, e, null), d(e, l), a && a.m(e, null), (n = !0);
    },
    p(i, [r]) {
      i[3] === 1
        ? a
          ? (a.p(i, r), r & 8 && $(a, 1))
          : ((a = Fn(i)), a.c(), $(a, 1), a.m(e, null))
        : a &&
          (Ue(),
          y(a, 1, 1, () => {
            a = null;
          }),
          Me());
    },
    i(i) {
      n || ($(t.$$.fragment, i), $(a), (n = !0));
    },
    o(i) {
      y(t.$$.fragment, i), y(a), (n = !1);
    },
    d(i) {
      i && h(e), X(t), a && a.d();
    },
  };
}
function bd(s, e, t) {
  let { LG: l = null } = e,
    { verificationData: n = null } = e,
    { oauthData: a = null } = e;
  const i = Qe();
  let r = 0;
  Be(() => {
    t(3, (r = 1)), Il();
  });
  function o() {
    i("close");
  }
  return (
    (s.$$set = (c) => {
      "LG" in c && t(0, (l = c.LG)),
        "verificationData" in c && t(1, (n = c.verificationData)),
        "oauthData" in c && t(2, (a = c.oauthData));
    }),
    [l, n, a, r, o]
  );
}
class Ed extends Ie {
  constructor(e) {
    super(),
      Te(this, e, bd, vd, Ce, { LG: 0, verificationData: 1, oauthData: 2 });
  }
}
function wd(s) {
  let e,
    t,
    l = s[0](He.NoteOnRestricted) + "",
    n;
  return {
    c() {
      (e = b("div")), (t = b("div")), (n = H(l)), this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0, slot: !0 });
      var i = w(e);
      t = E(i, "DIV", { class: !0 });
      var r = w(t);
      (n = F(r, l)), r.forEach(h), i.forEach(h), this.h();
    },
    h() {
      f(t, "class", "lh24 fw2 f18 T1"),
        f(e, "class", "lh24 b f16 T2 df jcsb"),
        f(e, "slot", "header");
    },
    m(a, i) {
      B(a, e, i), d(e, t), d(t, n);
    },
    p(a, i) {
      i & 1 && l !== (l = a[0](He.NoteOnRestricted) + "") && te(n, l);
    },
    d(a) {
      a && h(e);
    },
  };
}
function kd(s) {
  let e = s[0](He.ContactSupport) + "",
    t;
  return {
    c() {
      t = H(e);
    },
    l(l) {
      t = F(l, e);
    },
    m(l, n) {
      B(l, t, n);
    },
    p(l, n) {
      n & 1 && e !== (e = l[0](He.ContactSupport) + "") && te(t, e);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Id(s) {
  let e;
  return {
    c() {
      e = H("Ok");
    },
    l(t) {
      e = F(t, "Ok");
    },
    m(t, l) {
      B(t, e, l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Td(s) {
  let e,
    t,
    l,
    n = s[0](He.AtThisTime) + "",
    a,
    i,
    r,
    o = s[0](He.TermsOfUse) + "",
    c,
    u,
    m,
    _ = s[0](He.PleaseContactOur) + "",
    v,
    p,
    g,
    k,
    I,
    T,
    S;
  return (
    (k = new ft({
      props: {
        type: "primary",
        href: Ge.PHEMEX_CUSTOMER_SERVICE,
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        $$slots: { default: [kd] },
        $$scope: { ctx: s },
      },
    })),
    (T = new ft({
      props: {
        class: "ml24",
        type: "default",
        $$slots: { default: [Id] },
        $$scope: { ctx: s },
      },
    })),
    T.$on("click", s[2]),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (a = H(n)),
          (i = U()),
          (r = b("a")),
          (c = H(o)),
          (m = U()),
          (v = H(_)),
          (p = U()),
          (g = b("div")),
          j(k.$$.fragment),
          (I = U()),
          j(T.$$.fragment),
          this.h();
      },
      l(C) {
        e = E(C, "DIV", { class: !0, slot: !0 });
        var A = w(e);
        t = E(A, "DIV", {});
        var D = w(t);
        l = E(D, "DIV", { class: !0 });
        var L = w(l);
        (a = F(L, n)), (i = M(L)), (r = E(L, "A", { href: !0, target: !0 }));
        var O = w(r);
        (c = F(O, o)),
          O.forEach(h),
          (m = M(L)),
          (v = F(L, _)),
          L.forEach(h),
          (p = M(D)),
          (g = E(D, "DIV", { class: !0 }));
        var P = w(g);
        K(k.$$.fragment, P),
          (I = M(P)),
          K(T.$$.fragment, P),
          P.forEach(h),
          D.forEach(h),
          A.forEach(h),
          this.h();
      },
      h() {
        f(r, "href", (u = s[1](Ge.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS"))),
          f(r, "target", "_blank"),
          f(l, "class", "f14 t2 fw2 lh22"),
          f(g, "class", "df button mt42 svelte-fdregh"),
          f(e, "class", "footer df fdc svelte-fdregh"),
          f(e, "slot", "footer");
      },
      m(C, A) {
        B(C, e, A),
          d(e, t),
          d(t, l),
          d(l, a),
          d(l, i),
          d(l, r),
          d(r, c),
          d(l, m),
          d(l, v),
          d(t, p),
          d(t, g),
          q(k, g, null),
          d(g, I),
          q(T, g, null),
          (S = !0);
      },
      p(C, A) {
        (!S || A & 1) && n !== (n = C[0](He.AtThisTime) + "") && te(a, n),
          (!S || A & 1) && o !== (o = C[0](He.TermsOfUse) + "") && te(c, o),
          (!S ||
            (A & 2 &&
              u !== (u = C[1](Ge.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS")))) &&
            f(r, "href", u),
          (!S || A & 1) &&
            _ !== (_ = C[0](He.PleaseContactOur) + "") &&
            te(v, _);
        const D = {};
        A & 33 && (D.$$scope = { dirty: A, ctx: C }), k.$set(D);
        const L = {};
        A & 32 && (L.$$scope = { dirty: A, ctx: C }), T.$set(L);
      },
      i(C) {
        S || ($(k.$$.fragment, C), $(T.$$.fragment, C), (S = !0));
      },
      o(C) {
        y(k.$$.fragment, C), y(T.$$.fragment, C), (S = !1);
      },
      d(C) {
        C && h(e), X(k), X(T);
      },
    }
  );
}
function Cd(s) {
  let e, t;
  return (
    (e = new pl({
      props: {
        visible: !0,
        $$slots: { footer: [Td], header: [wd] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 35 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Dd(s, e, t) {
  let l;
  ge(s, We, (o) => t(1, (l = o)));
  let { LG: n = null } = e,
    { type: a = null } = e;
  const i = Qe();
  function r() {
    if (a === "close") {
      i("close");
      return;
    }
    i("close"), _t(l(W.HOME.pathname));
  }
  return (
    (s.$$set = (o) => {
      "LG" in o && t(0, (n = o.LG)), "type" in o && t(3, (a = o.type));
    }),
    [n, l, r, a]
  );
}
class Ad extends Ie {
  constructor(e) {
    super(), Te(this, e, Dd, Cd, Ce, { LG: 0, type: 3 });
  }
}
function Sd(s) {
  let e,
    t,
    l,
    n,
    a,
    i,
    r,
    o = s[3](Oe.Back) + "",
    c,
    u,
    m,
    _,
    v,
    p;
  return (
    (m = new Ea({ props: { onSubmit: s[0], email: s[2], isNeed2FA: s[1] } })),
    {
      c() {
        (e = b("div")),
          (t = b("div")),
          (l = b("div")),
          (n = b("i")),
          (a = H("")),
          (i = U()),
          (r = b("span")),
          (c = H(o)),
          (u = U()),
          j(m.$$.fragment),
          this.h();
      },
      l(g) {
        e = E(g, "DIV", { class: !0 });
        var k = w(e);
        t = E(k, "DIV", { class: !0 });
        var I = w(t);
        l = E(I, "DIV", { class: !0 });
        var T = w(l);
        n = E(T, "I", { class: !0 });
        var S = w(n);
        (a = F(S, "")),
          S.forEach(h),
          T.forEach(h),
          (i = M(I)),
          (r = E(I, "SPAN", { class: !0 }));
        var C = w(r);
        (c = F(C, o)),
          C.forEach(h),
          I.forEach(h),
          (u = M(k)),
          K(m.$$.fragment, k),
          k.forEach(h),
          this.h();
      },
      h() {
        f(n, "class", "iconfont BLUE"),
          f(l, "class", "arrow svelte-1wtrzty"),
          f(r, "class", "BLUE ml10"),
          f(t, "class", "df aic cp"),
          f(e, "class", "wrap svelte-1wtrzty");
      },
      m(g, k) {
        B(g, e, k),
          d(e, t),
          d(t, l),
          d(l, n),
          d(n, a),
          d(t, i),
          d(t, r),
          d(r, c),
          d(e, u),
          q(m, e, null),
          (_ = !0),
          v || ((p = ee(t, "click", s[4])), (v = !0));
      },
      p(g, k) {
        const I = {};
        k & 1 && (I.onSubmit = g[0]),
          k & 4 && (I.email = g[2]),
          k & 2 && (I.isNeed2FA = g[1]),
          m.$set(I);
      },
      i(g) {
        _ || ($(m.$$.fragment, g), (_ = !0));
      },
      o(g) {
        y(m.$$.fragment, g), (_ = !1);
      },
      d(g) {
        g && h(e), X(m), (v = !1), p();
      },
    }
  );
}
function Pd(s) {
  let e, t;
  return (
    (e = new Vt({
      props: { visible: !0, $$slots: { default: [Sd] }, $$scope: { ctx: s } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      l(l) {
        K(e.$$.fragment, l);
      },
      m(l, n) {
        q(e, l, n), (t = !0);
      },
      p(l, [n]) {
        const a = {};
        n & 71 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
      },
      i(l) {
        t || ($(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        y(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        X(e, l);
      },
    }
  );
}
function Ld(s, e, t) {
  let { onSubmit: l } = e,
    { isNeed2FA: n = !1 } = e,
    { email: a = "" } = e;
  const i = Qe(),
    r = je("LG");
  function o() {
    i("close");
  }
  return (
    (s.$$set = (c) => {
      "onSubmit" in c && t(0, (l = c.onSubmit)),
        "isNeed2FA" in c && t(1, (n = c.isNeed2FA)),
        "email" in c && t(2, (a = c.email));
    }),
    [l, n, a, r, o]
  );
}
class Rd extends Ie {
  constructor(e) {
    super(), Te(this, e, Ld, Pd, Ce, { onSubmit: 0, isNeed2FA: 1, email: 2 });
  }
}
const wt = {
  launchLogin(s, e, t, l) {
    ot.create(uo, { LG: s, target: e, email: t, newRegisterPage: l });
  },
  launchRegister(s, e, t, l) {
    ot.create(Eo, { LG: s, target: e, record: t, email: l });
  },
  launchResetPassword(s, e) {
    ot.create(Do, { LG: s, target: e });
  },
  launchEmailVerification(s, e) {
    ot.create(Oo, { LG: s, emailData: e });
  },
  launchCommonEmailVerification(s, e) {
    ot.create(Go, { LG: s, emailData: e });
  },
  launchGoogleVerification(s, e) {
    ot.create(Yo, { LG: s, googleData: e });
  },
  launchInputNewPassword(s, e) {
    ot.create(Zo, { LG: s, newPasswordData: e });
  },
  launchSafetyVerificationPage(s, e) {
    ot.create(ed, { LG: s, verificationData: e });
  },
  launchSafetyEmailVerificationPage(s, e) {
    ot.create(sd, { LG: s, verificationData: e });
  },
  launchGoogleVerificationPage(s, e) {
    ot.create(ud, { LG: s, verificationData: e });
  },
  launchBindGoogleVerificationPage(s, e, t) {
    ot.create(Ed, { LG: s, verificationData: e, oauthData: t });
  },
  launchRegisterTips(s, e) {
    ot.create(Ad, { LG: s, type: e });
  },
  launchNewDeviceVerification(s) {
    ot.create(Rd, s);
  },
};
export {
  Pl as A,
  ba as C,
  _a as E,
  fl as H,
  Uf as L,
  ct as M,
  Ea as N,
  pa as P,
  xr as Q,
  Bi as S,
  Ll as U,
  zu as V,
  un as a,
  Ud as b,
  to as c,
  wt as d,
  Md as e,
  Gr as f,
  fn as g,
  He as h,
  Bt as i,
  Nt as j,
  id as k,
  J as l,
  Bd as m,
  Rt as n,
  zt as r,
  rs as s,
  Vi as v,
};
//# sourceMappingURL=chunk-8f905c50.js.map
