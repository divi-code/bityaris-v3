import {
  U as q,
  a6 as nn,
  S as Ye,
  L as Ne,
  a as rl,
  j as ye,
  a7 as ga,
  X as el,
  a8 as va,
  a9 as Ba,
  a0 as Ui,
  A as ln,
  D as sl,
  o as al,
  R as Fa,
  aa as Ga,
  t as Dr,
  ab as Wa,
  Y as mt,
  ac as Wl,
  ad as ba,
  W as $a,
  V as Ea,
  ae as ja,
  af as qa,
  i as Jt,
  ag as yi,
  ah as wa,
  ai as za,
  a1 as Ya,
  a2 as Ka,
  F as Qa,
  aj as Xa,
  ak as Ue,
  al as Ja,
  am as Ri,
  Z as ol,
  an as jl,
  ao as Za,
  p as tl,
  ap as Hr,
  aq as Zn,
  ar as xa,
  as as ka,
  at as eo,
  au as to,
  av as Ta,
  aw as no,
  u as lo,
  ax as io,
  ay as Ia,
  T as Bi,
  az as Aa,
  aA as xn,
  aB as Pr,
  $ as Or,
  aC as ro,
  aD as so,
  aE as ao,
  aF as Oi,
  aG as oo,
  aH as co,
  aI as Vr,
  aJ as Rn,
  aK as Rr,
  aL as fo,
  aM as uo,
  aN as ho,
  aO as mo,
  M as po,
  aP as _o,
  aQ as go,
  aR as vo,
  aS as Nr,
  a4 as bo,
  a5 as $o,
  _ as Lr,
} from "/trade/js/chunk-10576bff.js";
import {
  A as ve,
  C as be,
  D as _e,
  a2 as Je,
  E as rn,
  F as v,
  G as A,
  H as b,
  I as E,
  J as C,
  K as d,
  L as u,
  ac as we,
  ar as ze,
  P as M,
  Q as f,
  T as me,
  U as sn,
  V as an,
  W as on,
  X as P,
  a9 as De,
  _ as R,
  aa as He,
  a0 as pt,
  a1 as cl,
  ai as N,
  aj as L,
  Y as Un,
  Z as fl,
  aq as nl,
  $ as Ca,
  av as Oe,
  aD as Eo,
  ak as J,
  at as ke,
  ab as tn,
  a7 as Te,
  ad as K,
  ae as Z,
  af as Q,
  ag as X,
  ah as Y,
  as as yn,
  au as at,
  aE as Bn,
  aF as ul,
  M as Mr,
  aG as Ur,
  aH as Sa,
  a8 as it,
  B as cn,
  f as Da,
  e as Ha,
  aI as wo,
  aJ as Pa,
  a5 as Ge,
  a6 as We,
  aw as tt,
  ax as nt,
  ao as ko,
  S as Oa,
  b as Ni,
  aK as To,
  m as Li,
  c as Io,
  a3 as Ao,
  q as Co,
  aB as So,
  aC as Do,
  u as Ho,
  al as yr,
} from "/trade/js/chunk-fe777520.js";
import {
  g as Br,
  l as j,
  p as Po,
  s as Oo,
  j as Vo,
  k as Ro,
  m as No,
  n as Lo,
  u as Xt,
  a as ll,
  C as Mo,
  i as Uo,
  c as yo,
  d as Fr,
  e as Bo,
  f as Fo,
  h as Go,
} from "/trade/js/chunk-03b4702d.js";
import {
  c as Le,
  s as Wo,
  C as ut,
  a as dl,
  b as jo,
} from "/trade/js/app-3b2e47c2.js";
import {
  l as Gr,
  C as qo,
  a as zt,
  b as zo,
} from "/trade/js/chunk-25e951b0.js";
import { l as Yo, C as Ko } from "/trade/js/chunk-846730ff.js";
import { C as Wr } from "/trade/js/chunk-7089fff5.js";
function Qo(l, e, t) {
  let { component: n } = e,
    { props: i = {} } = e,
    r = !1;
  return (
    Je(() => {
      if (r) return;
      r = !0;
      const o = new n({ target: document.getElementById("popup"), props: i });
      return function () {
        o.$destroy();
      };
    }),
    (l.$$set = (o) => {
      "component" in o && t(0, (n = o.component)),
        "props" in o && t(1, (i = o.props));
    }),
    [n, i]
  );
}
let Va = class extends ve {
  constructor(e) {
    super(), be(this, e, Qo, null, _e, { component: 0, props: 1 });
  }
};
const Xo = (l) => ({}),
  jr = (l) => ({});
function qr(l) {
  let e, t;
  return {
    c() {
      (e = v("i")), (t = N("")), this.h();
    },
    l(n) {
      e = b(n, "I", { class: !0 });
      var i = E(e);
      (t = L(i, "")), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont drop-arrow dib ml4 f12 H-cr9fgp");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function zr(l) {
  let e, t, n, i;
  const r = l[15].default,
    o = rn(r, l, l[14], null);
  return {
    c() {
      (e = v("div")), o && o.c(), this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = E(e);
      o && o.l(a), a.forEach(d), this.h();
    },
    h() {
      u(e, "class", "auto-scroll H-cr9fgp");
    },
    m(s, a) {
      M(s, e, a), o && o.m(e, null), (i = !0);
    },
    p(s, a) {
      (l = s),
        o &&
          o.p &&
          (!i || a & 16384) &&
          sn(o, r, l, l[14], i ? on(r, l[14], a, null) : an(l[14]), null);
    },
    i(s) {
      i ||
        (P(o, s),
        Un(() => {
          i &&
            (n && n.end(1),
            (t = fl(e, nl, { duration: Yr, y: 30 })),
            t.start());
        }),
        (i = !0));
    },
    o(s) {
      R(o, s),
        t && t.invalidate(),
        (n = Ca(e, nl, { duration: Yr, y: 30 })),
        (i = !1);
    },
    d(s) {
      s && d(e), o && o.d(s), s && n && n.end();
    },
  };
}
function Jo(l) {
  let e, t, n, i, r, o, s, a, c, h, m;
  const p = l[15].trigger,
    g = rn(p, l, l[14], jr);
  let _ = !l[3] && qr(),
    $ = (l[6] || l[1]) && zr(l);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        g && g.c(),
        (n = A()),
        _ && _.c(),
        (r = A()),
        (o = v("div")),
        $ && $.c(),
        this.h();
    },
    l(w) {
      e = b(w, "DIV", { class: !0 });
      var k = E(e);
      t = b(k, "DIV", { class: !0 });
      var S = E(t);
      g && g.l(S),
        (n = C(S)),
        _ && _.l(S),
        S.forEach(d),
        (r = C(k)),
        (o = b(k, "DIV", { class: !0, style: !0, role: !0 }));
      var T = E(o);
      $ && $.l(T), T.forEach(d), k.forEach(d), this.h();
    },
    h() {
      u(
        t,
        "class",
        (i = "tooltip-trigger df aic jcsb cp " + l[2] + " H-cr9fgp")
      ),
        we(t, "noHoverColor", l[4]),
        u(o, "class", (s = "tooltip-container pa " + l[0] + " H-cr9fgp")),
        ze(o, "width", l[5]),
        u(o, "role", "tooltip"),
        u(
          e,
          "class",
          (a = "tooltip-wrap dib df aic jcsb " + l[0] + " H-cr9fgp")
        );
    },
    m(w, k) {
      M(w, e, k),
        f(e, t),
        g && g.m(t, null),
        f(t, n),
        _ && _.m(t, null),
        l[16](t),
        f(e, r),
        f(e, o),
        $ && $.m(o, null),
        l[17](o),
        (c = !0),
        h ||
          ((m = [me(t, "mouseenter", l[9]), me(e, "mouseleave", l[10])]),
          (h = !0));
    },
    p(w, [k]) {
      g &&
        g.p &&
        (!c || k & 16384) &&
        sn(g, p, w, w[14], c ? on(p, w[14], k, Xo) : an(w[14]), jr),
        w[3]
          ? _ && (_.d(1), (_ = null))
          : _ || ((_ = qr()), _.c(), _.m(t, null)),
        (!c ||
          (k & 4 &&
            i !==
              (i = "tooltip-trigger df aic jcsb cp " + w[2] + " H-cr9fgp"))) &&
          u(t, "class", i),
        (!c || k & 20) && we(t, "noHoverColor", w[4]),
        w[6] || w[1]
          ? $
            ? ($.p(w, k), k & 66 && P($, 1))
            : (($ = zr(w)), $.c(), P($, 1), $.m(o, null))
          : $ &&
            (De(),
            R($, 1, 1, () => {
              $ = null;
            }),
            He()),
        (!c ||
          (k & 1 &&
            s !== (s = "tooltip-container pa " + w[0] + " H-cr9fgp"))) &&
          u(o, "class", s),
        (!c || k & 32) && ze(o, "width", w[5]),
        (!c ||
          (k & 1 &&
            a !==
              (a = "tooltip-wrap dib df aic jcsb " + w[0] + " H-cr9fgp"))) &&
          u(e, "class", a);
    },
    i(w) {
      c || (P(g, w), P($), (c = !0));
    },
    o(w) {
      R(g, w), R($), (c = !1);
    },
    d(w) {
      w && d(e),
        g && g.d(w),
        _ && _.d(),
        l[16](null),
        $ && $.d(),
        l[17](null),
        (h = !1),
        pt(m);
    },
  };
}
const Yr = 250;
function Zo(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { class: r = "" } = e,
    { debug: o = !1 } = e,
    { triggerClass: s = "" } = e,
    { placement: a = "bottom" } = e,
    { noIcon: c = !1 } = e,
    { noHoverColor: h = !1 } = e,
    { width: m = "unset" } = e,
    { trigger: p = "hover" } = e,
    { modifiers: g = [] } = e;
  const _ = cl();
  let $ = !1,
    w,
    k;
  function S() {
    Eo(k, w, { placement: a, modifiers: g });
  }
  function T() {
    t(6, ($ = !0)), S(), _("mouseenter");
  }
  function I() {
    t(6, ($ = !1)), _("mouseleave");
  }
  function D(V) {
    Oe[V ? "unshift" : "push"](() => {
      (k = V), t(8, k);
    });
  }
  function O(V) {
    Oe[V ? "unshift" : "push"](() => {
      (w = V), t(7, w);
    });
  }
  return (
    (l.$$set = (V) => {
      "class" in V && t(0, (r = V.class)),
        "debug" in V && t(1, (o = V.debug)),
        "triggerClass" in V && t(2, (s = V.triggerClass)),
        "placement" in V && t(11, (a = V.placement)),
        "noIcon" in V && t(3, (c = V.noIcon)),
        "noHoverColor" in V && t(4, (h = V.noHoverColor)),
        "width" in V && t(5, (m = V.width)),
        "trigger" in V && t(12, (p = V.trigger)),
        "modifiers" in V && t(13, (g = V.modifiers)),
        "$$scope" in V && t(14, (i = V.$$scope));
    }),
    [r, o, s, c, h, m, $, w, k, T, I, a, p, g, i, n, D, O]
  );
}
let et = class extends ve {
  constructor(e) {
    super(),
      be(this, e, Zo, Jo, _e, {
        class: 0,
        debug: 1,
        triggerClass: 2,
        placement: 11,
        noIcon: 3,
        noHoverColor: 4,
        width: 5,
        trigger: 12,
        modifiers: 13,
      });
  }
};
const xo = (l) => ({}),
  Kr = (l) => ({}),
  ec = (l) => ({}),
  Qr = (l) => ({});
function tc(l) {
  let e;
  const t = l[9]["circle-suffix"],
    n = rn(t, l, l[8], Qr);
  return {
    c() {
      n && n.c();
    },
    l(i) {
      n && n.l(i);
    },
    m(i, r) {
      n && n.m(i, r), (e = !0);
    },
    p(i, r) {
      n &&
        n.p &&
        (!e || r & 256) &&
        sn(n, t, i, i[8], e ? on(t, i[8], r, ec) : an(i[8]), Qr);
    },
    i(i) {
      e || (P(n, i), (e = !0));
    },
    o(i) {
      R(n, i), (e = !1);
    },
    d(i) {
      n && n.d(i);
    },
  };
}
function nc(l) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(n) {
      (e = b(n, "IMG", { class: !0, alt: !0, src: !0 })), this.h();
    },
    h() {
      u(e, "class", "icon H-m9cglq"),
        u(e, "alt", l[3]),
        ke(e.src, (t = l[2])) || u(e, "src", t);
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, i) {
      i & 8 && u(e, "alt", n[3]),
        i & 4 && !ke(e.src, (t = n[2])) && u(e, "src", t);
    },
    i: Te,
    o: Te,
    d(n) {
      n && d(e);
    },
  };
}
function Xr(l) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(n) {
      (e = b(n, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "ml4"),
        u(e, "height", "14"),
        ke(e.src, (t = l[6])) || u(e, "src", t),
        u(e, "alt", l[7]);
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, i) {
      i & 64 && !ke(e.src, (t = n[6])) && u(e, "src", t),
        i & 128 && u(e, "alt", n[7]);
    },
    d(n) {
      n && d(e);
    },
  };
}
function Jr(l) {
  let e, t;
  return {
    c() {
      (e = v("div")), (t = N(l[5])), this.h();
    },
    l(n) {
      e = b(n, "DIV", { class: !0 });
      var i = E(e);
      (t = L(i, l[5])), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "sub-title lh18 f12 fw1 T2 H-m9cglq");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 32 && J(t, n[5]);
    },
    d(n) {
      n && d(e);
    },
  };
}
function lc(l) {
  let e, t, n, i, r, o, s, a, c, h, m, p, g, _, $, w, k, S, T;
  const I = [nc, tc],
    D = [];
  function O(H, B) {
    return H[2] ? 0 : 1;
  }
  (n = O(l)), (i = D[n] = I[n](l));
  const V = l[9]["title-suffix"],
    U = rn(V, l, l[8], Kr);
  let y = l[6] && Xr(l),
    G = l[5] && Jr(l);
  return {
    c() {
      (e = v("a")),
        (t = v("div")),
        i.c(),
        (r = A()),
        (o = v("div")),
        (s = v("div")),
        (a = v("div")),
        (c = N(l[4])),
        (h = A()),
        U && U.c(),
        (m = A()),
        y && y.c(),
        (p = A()),
        G && G.c(),
        (g = A()),
        (_ = v("div")),
        ($ = v("i")),
        (w = N("")),
        this.h();
    },
    l(H) {
      e = b(H, "A", { class: !0, href: !0, target: !0 });
      var B = E(e);
      t = b(B, "DIV", {});
      var x = E(t);
      i.l(x), x.forEach(d), (r = C(B)), (o = b(B, "DIV", { class: !0 }));
      var ne = E(o);
      s = b(ne, "DIV", { class: !0 });
      var F = E(s);
      a = b(F, "DIV", { class: !0 });
      var z = E(a);
      (c = L(z, l[4])),
        (h = C(z)),
        U && U.l(z),
        (m = C(z)),
        y && y.l(z),
        z.forEach(d),
        (p = C(F)),
        G && G.l(F),
        F.forEach(d),
        (g = C(ne)),
        (_ = b(ne, "DIV", { class: !0 }));
      var se = E(_);
      $ = b(se, "I", { class: !0 });
      var oe = E($);
      (w = L(oe, "")),
        oe.forEach(d),
        se.forEach(d),
        ne.forEach(d),
        B.forEach(d),
        this.h();
    },
    h() {
      u(a, "class", "title df lh16 f14 fw2 T1 H-m9cglq"),
        u(s, "class", "ml12"),
        u($, "class", "arrow iconfont dib f16 fw1 H-m9cglq"),
        u(_, "class", "arrow-con df ml12 lh20 H-m9cglq"),
        u(o, "class", "df aic"),
        u(e, "class", "menu-item noa df fdr br8 cp H-m9cglq"),
        u(e, "href", l[0]),
        u(e, "target", l[1]);
    },
    m(H, B) {
      M(H, e, B),
        f(e, t),
        D[n].m(t, null),
        f(e, r),
        f(e, o),
        f(o, s),
        f(s, a),
        f(a, c),
        f(a, h),
        U && U.m(a, null),
        f(a, m),
        y && y.m(a, null),
        f(s, p),
        G && G.m(s, null),
        f(o, g),
        f(o, _),
        f(_, $),
        f($, w),
        (k = !0),
        S || ((T = me(e, "click", l[10])), (S = !0));
    },
    p(H, [B]) {
      let x = n;
      (n = O(H)),
        n === x
          ? D[n].p(H, B)
          : (De(),
            R(D[x], 1, 1, () => {
              D[x] = null;
            }),
            He(),
            (i = D[n]),
            i ? i.p(H, B) : ((i = D[n] = I[n](H)), i.c()),
            P(i, 1),
            i.m(t, null)),
        (!k || B & 16) && J(c, H[4]),
        U &&
          U.p &&
          (!k || B & 256) &&
          sn(U, V, H, H[8], k ? on(V, H[8], B, xo) : an(H[8]), Kr),
        H[6]
          ? y
            ? y.p(H, B)
            : ((y = Xr(H)), y.c(), y.m(a, null))
          : y && (y.d(1), (y = null)),
        H[5]
          ? G
            ? G.p(H, B)
            : ((G = Jr(H)), G.c(), G.m(s, null))
          : G && (G.d(1), (G = null)),
        (!k || B & 1) && u(e, "href", H[0]),
        (!k || B & 2) && u(e, "target", H[1]);
    },
    i(H) {
      k || (P(i), P(U, H), (k = !0));
    },
    o(H) {
      R(i), R(U, H), (k = !1);
    },
    d(H) {
      H && d(e), D[n].d(), U && U.d(H), y && y.d(), G && G.d(), (S = !1), T();
    },
  };
}
function ic(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { link: r = "javascript:void(0)" } = e,
    { target: o = void 0 } = e,
    { iconUrl: s = "" } = e,
    { iconAlt: a = "" } = e,
    { title: c = "" } = e,
    { subTitle: h = "" } = e,
    { titleIcon: m = "" } = e,
    { titleIconAlt: p = "" } = e;
  function g(_) {
    tn.call(this, l, _);
  }
  return (
    (l.$$set = (_) => {
      "link" in _ && t(0, (r = _.link)),
        "target" in _ && t(1, (o = _.target)),
        "iconUrl" in _ && t(2, (s = _.iconUrl)),
        "iconAlt" in _ && t(3, (a = _.iconAlt)),
        "title" in _ && t(4, (c = _.title)),
        "subTitle" in _ && t(5, (h = _.subTitle)),
        "titleIcon" in _ && t(6, (m = _.titleIcon)),
        "titleIconAlt" in _ && t(7, (p = _.titleIconAlt)),
        "$$scope" in _ && t(8, (i = _.$$scope));
    }),
    [r, o, s, a, c, h, m, p, i, n, g]
  );
}
let Re = class extends ve {
  constructor(e) {
    super(),
      be(this, e, ic, lc, _e, {
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
};
const Xe = {
  WaysToBuy: "893efc",
  BankTransfer: "3cfd64",
  BankTransferSubTitle: "7bb2e1",
  BuyCryptoWithBank: "77d3df",
  WireTransfer: "306f7b",
  ThirdPartyPayment: "962dd8",
  BuyCryptoWith: "1af075",
  ThirdPartyPaymentSubTitle: "643736",
  SimplexMoonpay: "fede94",
  DepositCryptoAndEarn: "89ee9b",
  DepositNow: "36ea01",
  P2PTrading: "178dbe",
  P2PTradingSubtitle: "066cc0",
  BuyP2PMarketplace: "212193",
  BuyP2PSubtitle: "661b9a",
  OneClickBuyAndSell: "5645d0",
  CreditDebitCards: "b385e3",
  OneClickBuyAndSellSubTitle: "c70240",
  CreditDebitCardsSubTitle: "19928d",
  CreditDebitCardsSubTitleAll: "c7ad08",
  FiatDeposit: "51fe3b",
  FiatDepositSubTitle: "e15e53",
};
function rc(l) {
  let e, t, n, i, r, o, s, a, c, h;
  return (
    (n = new Re({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl: l[3],
        link: l[4](q.FIAT_BUY_CRYPTO_PLACE_ORDER),
        title: l[5](Xe.OneClickBuyAndSell),
        subTitle: l[5](Xe.OneClickBuyAndSellSubTitle),
      },
    })),
    n.$on("click", l[7]("One_Click_Buy_Sell")),
    (r = new Re({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl: l[2],
        link: l[4](q.FIAT_DEPOSIT),
        title: l[5](Xe.FiatDeposit),
        subTitle: l[5](Xe.FiatDepositSubTitle),
        titleIcon:
          "//img.phemex.com/v1/fbdda9d0-68f3-4d1e-b834-248ce5cd50db/frame-14zero-fee.png",
        titleIconAlt: "zero-fee",
      },
    })),
    r.$on("click", l[7]("Fiat_Deposit")),
    (s = new Re({
      props: {
        iconAlt: "credit debit card",
        iconUrl: l[1],
        link: l[4](q.BUY_CRYPTO_CARD_PLACE_ORDER),
        title: l[5](Xe.CreditDebitCards),
        subTitle: l[5](Xe.CreditDebitCardsSubTitleAll),
        titleIcon:
          "//img.phemex.com/v1/9bc32cd3-0663-47fb-bf3b-8c114590eef1/credit-debit-card-fee.png",
        titleIconAlt: "lowest-fee",
      },
    })),
    s.$on("click", l[7]("Credit_Debit_Cards")),
    (c = new Re({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl: l[0],
        link: Br(l[6] === "Login", l[4]),
        title: l[5](Xe.P2PTrading),
        subTitle: l[5](Xe.P2PTradingSubtitle),
      },
    })),
    c.$on("click", l[7]("P2PTrading")),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          K(n.$$.fragment),
          (i = A()),
          K(r.$$.fragment),
          (o = A()),
          K(s.$$.fragment),
          (a = A()),
          K(c.$$.fragment),
          this.h();
      },
      l(m) {
        e = b(m, "DIV", { class: !0 });
        var p = E(e);
        t = b(p, "DIV", { class: !0 });
        var g = E(t);
        Z(n.$$.fragment, g),
          (i = C(g)),
          Z(r.$$.fragment, g),
          (o = C(g)),
          Z(s.$$.fragment, g),
          (a = C(g)),
          Z(c.$$.fragment, g),
          g.forEach(d),
          p.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "df fdc ph24 pv16"),
          u(e, "class", "wrap df br12 T2 H-1se8xi1");
      },
      m(m, p) {
        M(m, e, p),
          f(e, t),
          Q(n, t, null),
          f(t, i),
          Q(r, t, null),
          f(t, o),
          Q(s, t, null),
          f(t, a),
          Q(c, t, null),
          (h = !0);
      },
      p(m, [p]) {
        const g = {};
        p & 8 && (g.iconUrl = m[3]),
          p & 16 && (g.link = m[4](q.FIAT_BUY_CRYPTO_PLACE_ORDER)),
          p & 32 && (g.title = m[5](Xe.OneClickBuyAndSell)),
          p & 32 && (g.subTitle = m[5](Xe.OneClickBuyAndSellSubTitle)),
          n.$set(g);
        const _ = {};
        p & 4 && (_.iconUrl = m[2]),
          p & 16 && (_.link = m[4](q.FIAT_DEPOSIT)),
          p & 32 && (_.title = m[5](Xe.FiatDeposit)),
          p & 32 && (_.subTitle = m[5](Xe.FiatDepositSubTitle)),
          r.$set(_);
        const $ = {};
        p & 2 && ($.iconUrl = m[1]),
          p & 16 && ($.link = m[4](q.BUY_CRYPTO_CARD_PLACE_ORDER)),
          p & 32 && ($.title = m[5](Xe.CreditDebitCards)),
          p & 32 && ($.subTitle = m[5](Xe.CreditDebitCardsSubTitleAll)),
          s.$set($);
        const w = {};
        p & 1 && (w.iconUrl = m[0]),
          p & 80 && (w.link = Br(m[6] === "Login", m[4])),
          p & 32 && (w.title = m[5](Xe.P2PTrading)),
          p & 32 && (w.subTitle = m[5](Xe.P2PTradingSubtitle)),
          c.$set(w);
      },
      i(m) {
        h ||
          (P(n.$$.fragment, m),
          P(r.$$.fragment, m),
          P(s.$$.fragment, m),
          P(c.$$.fragment, m),
          (h = !0));
      },
      o(m) {
        R(n.$$.fragment, m),
          R(r.$$.fragment, m),
          R(s.$$.fragment, m),
          R(c.$$.fragment, m),
          (h = !1);
      },
      d(m) {
        m && d(e), X(n), X(r), X(s), X(c);
      },
    }
  );
}
function sc(l, e, t) {
  let n, i, r, o, s, a, c, h;
  Y(l, nn, (p) => t(8, (s = p))),
    Y(l, Ye, (p) => t(4, (a = p))),
    Y(l, Ne, (p) => t(5, (c = p))),
    Y(l, rl, (p) => t(6, (h = p)));
  function m(p) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: p,
      });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 256 &&
        t(
          3,
          (n = s
            ? "https://img.phemex.com/v1/c34d728b-11a1-4f5a-8d1b-a899ec40d310/0-dark.svg"
            : "https://img.phemex.com/v1/8e35a1f4-1542-4c38-9087-05707e81fa09/0.svg")
        ),
        l.$$.dirty & 256 &&
          t(
            2,
            (i = s
              ? "https://img.phemex.com/v1/0ad7ab58-d8c1-4bb9-a379-6f1e1e8c1fa3/1-dark.svg"
              : "https://img.phemex.com/v1/fe01f95b-acde-4058-b0eb-ea9bd33c297e/1.svg")
          ),
        l.$$.dirty & 256 &&
          t(
            1,
            (r = s
              ? "https://img.phemex.com/v1/3a38305a-727a-47be-a846-ff00b81a59e2/2-dark.svg"
              : "https://img.phemex.com/v1/22e1ded4-66a1-4f4b-bc0c-e97ea28ef1d6/2.svg")
          ),
        l.$$.dirty & 256 &&
          t(
            0,
            (o = s
              ? "https://img.phemex.com/v1/a8ea9912-ce8a-4854-9bae-370dfa7c3759/3-dark.svg"
              : "https://img.phemex.com/v1/18fd6900-0d2d-4ff7-abf3-937099cc7b7e/3.svg")
          );
    }),
    [o, r, i, n, a, c, h, m, s]
  );
}
let ac = class extends ve {
  constructor(e) {
    super(), be(this, e, sc, rc, _e, {});
  }
};
function Zr(l) {
  let e, t;
  return (
    (e = new Re({
      props: {
        iconUrl: l[1],
        iconAlt: "trading bots",
        title: l[5](j.TradingBot),
        subTitle: l[5](j.IntelligentTrading),
        target: "_self",
        link: l[6](q.STRATEGY_SQUARE),
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
      },
    })),
    e.$on("click", l[8]("Trading_Bot")),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 2 && (r.iconUrl = n[1]),
          i & 32 && (r.title = n[5](j.TradingBot)),
          i & 32 && (r.subTitle = n[5](j.IntelligentTrading)),
          i & 64 && (r.link = n[6](q.STRATEGY_SQUARE)),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function oc(l) {
  let e, t, n, i, r, o, s, a, c, h, m;
  (n = new Re({
    props: {
      iconUrl: l[4],
      iconAlt: "USDT-M Perpetual",
      title: "USDT-M " + l[5](Le.PerpetualComplete),
      subTitle: l[5](j.PerpetualContractUSDC),
      link: q.TRADE + "/BTCUSDT",
      target: "_self",
    },
  })),
    n.$on("click", l[8]("USDⓈ-M Perpetual")),
    (r = new Re({
      props: {
        iconUrl: l[3],
        iconAlt: "COIN-M Perpetual",
        title: "COIN-M " + l[5](Le.PerpetualComplete),
        subTitle: l[5](j.PerpetualContractCoin),
        link: q.TRADE_INVERSE,
        target: "_self",
      },
    })),
    r.$on("click", l[8]("COIN-M Perpetual")),
    (s = new Re({
      props: {
        iconUrl: l[2],
        iconAlt: "copy trade",
        title: l[5](j.CopyTrade),
        subTitle: l[5](j.CopyTradeDescription),
        link: l[6](q.COPY_TRADE),
        target: "_self",
      },
    })),
    s.$on("click", l[8]("Copy_Trade"));
  let p = l[7] && Zr(l);
  return (
    (h = new Re({
      props: {
        iconUrl: l[0],
        iconAlt: "mock_trading",
        link: q.MOCK_TRADE,
        target: "_self",
        title: l[5](j.MockTrading),
        subTitle: l[5](j.LearnHowToTradeWithZeroRisk),
      },
    })),
    h.$on("click", l[8]("mock_trade")),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          K(n.$$.fragment),
          (i = A()),
          K(r.$$.fragment),
          (o = A()),
          K(s.$$.fragment),
          (a = A()),
          p && p.c(),
          (c = A()),
          K(h.$$.fragment),
          this.h();
      },
      l(g) {
        e = b(g, "DIV", { class: !0 });
        var _ = E(e);
        t = b(_, "DIV", { class: !0 });
        var $ = E(t);
        Z(n.$$.fragment, $),
          (i = C($)),
          Z(r.$$.fragment, $),
          (o = C($)),
          Z(s.$$.fragment, $),
          (a = C($)),
          p && p.l($),
          (c = C($)),
          Z(h.$$.fragment, $),
          $.forEach(d),
          _.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "group df fdc ph24 pv16"),
          u(e, "class", "wrap df T2 br12 ovh H-1n91msc");
      },
      m(g, _) {
        M(g, e, _),
          f(e, t),
          Q(n, t, null),
          f(t, i),
          Q(r, t, null),
          f(t, o),
          Q(s, t, null),
          f(t, a),
          p && p.m(t, null),
          f(t, c),
          Q(h, t, null),
          (m = !0);
      },
      p(g, [_]) {
        const $ = {};
        _ & 16 && ($.iconUrl = g[4]),
          _ & 32 && ($.title = "USDT-M " + g[5](Le.PerpetualComplete)),
          _ & 32 && ($.subTitle = g[5](j.PerpetualContractUSDC)),
          n.$set($);
        const w = {};
        _ & 8 && (w.iconUrl = g[3]),
          _ & 32 && (w.title = "COIN-M " + g[5](Le.PerpetualComplete)),
          _ & 32 && (w.subTitle = g[5](j.PerpetualContractCoin)),
          r.$set(w);
        const k = {};
        _ & 4 && (k.iconUrl = g[2]),
          _ & 32 && (k.title = g[5](j.CopyTrade)),
          _ & 32 && (k.subTitle = g[5](j.CopyTradeDescription)),
          _ & 64 && (k.link = g[6](q.COPY_TRADE)),
          s.$set(k),
          g[7]
            ? p
              ? (p.p(g, _), _ & 128 && P(p, 1))
              : ((p = Zr(g)), p.c(), P(p, 1), p.m(t, c))
            : p &&
              (De(),
              R(p, 1, 1, () => {
                p = null;
              }),
              He());
        const S = {};
        _ & 1 && (S.iconUrl = g[0]),
          _ & 32 && (S.title = g[5](j.MockTrading)),
          _ & 32 && (S.subTitle = g[5](j.LearnHowToTradeWithZeroRisk)),
          h.$set(S);
      },
      i(g) {
        m ||
          (P(n.$$.fragment, g),
          P(r.$$.fragment, g),
          P(s.$$.fragment, g),
          P(p),
          P(h.$$.fragment, g),
          (m = !0));
      },
      o(g) {
        R(n.$$.fragment, g),
          R(r.$$.fragment, g),
          R(s.$$.fragment, g),
          R(p),
          R(h.$$.fragment, g),
          (m = !1);
      },
      d(g) {
        g && d(e), X(n), X(r), X(s), p && p.d(), X(h);
      },
    }
  );
}
function cc(l, e, t) {
  let n, i, r, o, s, a, c, h, m;
  Y(l, nn, (g) => t(9, (a = g))),
    Y(l, Ne, (g) => t(5, (c = g))),
    Y(l, Ye, (g) => t(6, (h = g))),
    Y(l, ga, (g) => t(7, (m = g)));
  function p(g) {
    return function () {
      g === "Mock_Trading" && el.gotoMock(),
        ye.track("web_click", {
          $screen_name: "Trade/Contract",
          $element_content: g,
        });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 512 &&
        t(
          4,
          (n = a
            ? "https://img.phemex.com/v1/ea8dcad1-5436-481d-8c67-1896f8840e28/1-0-dark.svg"
            : "https://img.phemex.com/v1/cbae9850-5ee4-4957-9098-e0766e851ffe/1-0.svg")
        ),
        l.$$.dirty & 512 &&
          t(
            3,
            (i = a
              ? "https://img.phemex.com/v1/bedb7414-0d73-46cf-948a-d5cf96de659f/1-1-dark.svg"
              : "https://img.phemex.com/v1/e3d672d6-0331-45c3-8625-a06dbc843a4b/1-1.svg")
          ),
        l.$$.dirty & 512 &&
          t(
            2,
            (r = a
              ? "https://img.phemex.com/v1/ea512bb0-52f4-476e-bb9b-11b91aa7c547/1-3-dark.svg"
              : "https://img.phemex.com/v1/9ad247da-f8ad-4418-860c-ae74aa81be9b/1-3.svg")
          ),
        l.$$.dirty & 512 &&
          t(
            1,
            (o = a
              ? "https://img.phemex.com/v1/1e5396f4-ab2e-4707-8146-5f780bf95ea6/1-4-dark.svg"
              : "https://img.phemex.com/v1/41747ea5-579c-43ba-81ae-ef8ed881a374/1-4.svg")
          ),
        l.$$.dirty & 512 &&
          t(
            0,
            (s = a
              ? "https://img.phemex.com/v1/77ab5fc4-df5e-448c-9df3-64768066de03/5-5-dark.svg"
              : "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg")
          );
    }),
    [s, o, r, i, n, c, h, m, p, a]
  );
}
let fc = class extends ve {
  constructor(e) {
    super(), be(this, e, cc, oc, _e, {});
  }
};
function xr(l) {
  let e, t;
  return (
    (e = new Re({
      props: {
        iconUrl: l[4],
        iconAlt: "margin-trade",
        link: q.PHEMEX_MARGIN_TRADE + "/BTCUSDT",
        target: "_self",
        title: l[6](j.MarginTrading) + " " + l[8] + "X",
        subTitle: l[6](j.BoostProfitsleverage),
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
      },
    })),
    e.$on("click", l[12]("MarginTrading")),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 16 && (r.iconUrl = n[4]),
          i & 320 && (r.title = n[6](j.MarginTrading) + " " + n[8] + "X"),
          i & 64 && (r.subTitle = n[6](j.BoostProfitsleverage)),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function es(l) {
  let e, t;
  return (
    (e = new Re({
      props: {
        iconUrl: l[1],
        iconAlt: "trading bots",
        title: l[6](j.TradingBot),
        subTitle: l[6](j.IntelligentTrading),
        target: "_self",
        link: l[9](q.STRATEGY_SQUARE) + "?type=SPOT_GRID",
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
      },
    })),
    e.$on("click", l[12]("Trading_Bot")),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 2 && (r.iconUrl = n[1]),
          i & 64 && (r.title = n[6](j.TradingBot)),
          i & 64 && (r.subTitle = n[6](j.IntelligentTrading)),
          i & 512 && (r.link = n[9](q.STRATEGY_SQUARE) + "?type=SPOT_GRID"),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function uc(l) {
  let e, t, n, i, r, o, s, a, c, h;
  (n = new Re({
    props: {
      iconUrl: l[5],
      iconAlt: "spot",
      link: q.SPOT_TRADE + "/BTCUSDT",
      target: "_self",
      title: l[6](j.SpotTrading),
      subTitle: l[6](j.OnlyOpenTo, { tradePairNumber: l[0] }),
    },
  })),
    n.$on("click", l[12]("SpotTrading"));
  let m = l[7] && xr(l);
  (o = new Re({
    props: {
      iconUrl: l[3],
      iconAlt: "contract",
      link: l[9](q.CRYPTO_CONVERTER),
      target: "_self",
      title: l[6](j.Convert),
      subTitle: l[6](j.TheEasiestWayToTrade),
    },
  })),
    o.$on("click", l[11]),
    (a = new Re({
      props: {
        iconUrl: l[2],
        iconAlt: "launchpad",
        link: l[9](q.CRYPTO_LAUNCHPAD),
        target: "_self",
        title: l[6](j.Launchpad),
        subTitle: l[6](j.LaunchpadDesc),
      },
    })),
    a.$on("click", l[12]("Launchpad"));
  let p = l[10] && es(l);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        K(n.$$.fragment),
        (i = A()),
        m && m.c(),
        (r = A()),
        K(o.$$.fragment),
        (s = A()),
        K(a.$$.fragment),
        (c = A()),
        p && p.c(),
        this.h();
    },
    l(g) {
      e = b(g, "DIV", { class: !0 });
      var _ = E(e);
      t = b(_, "DIV", { class: !0 });
      var $ = E(t);
      Z(n.$$.fragment, $),
        (i = C($)),
        m && m.l($),
        (r = C($)),
        Z(o.$$.fragment, $),
        (s = C($)),
        Z(a.$$.fragment, $),
        (c = C($)),
        p && p.l($),
        $.forEach(d),
        _.forEach(d),
        this.h();
    },
    h() {
      u(t, "class", "group df fdc ph24 pv16"),
        u(e, "class", "wrap df T2 br12 ovh H-1n91msc");
    },
    m(g, _) {
      M(g, e, _),
        f(e, t),
        Q(n, t, null),
        f(t, i),
        m && m.m(t, null),
        f(t, r),
        Q(o, t, null),
        f(t, s),
        Q(a, t, null),
        f(t, c),
        p && p.m(t, null),
        (h = !0);
    },
    p(g, [_]) {
      const $ = {};
      _ & 32 && ($.iconUrl = g[5]),
        _ & 64 && ($.title = g[6](j.SpotTrading)),
        _ & 65 && ($.subTitle = g[6](j.OnlyOpenTo, { tradePairNumber: g[0] })),
        n.$set($),
        g[7]
          ? m
            ? (m.p(g, _), _ & 128 && P(m, 1))
            : ((m = xr(g)), m.c(), P(m, 1), m.m(t, r))
          : m &&
            (De(),
            R(m, 1, 1, () => {
              m = null;
            }),
            He());
      const w = {};
      _ & 8 && (w.iconUrl = g[3]),
        _ & 512 && (w.link = g[9](q.CRYPTO_CONVERTER)),
        _ & 64 && (w.title = g[6](j.Convert)),
        _ & 64 && (w.subTitle = g[6](j.TheEasiestWayToTrade)),
        o.$set(w);
      const k = {};
      _ & 4 && (k.iconUrl = g[2]),
        _ & 512 && (k.link = g[9](q.CRYPTO_LAUNCHPAD)),
        _ & 64 && (k.title = g[6](j.Launchpad)),
        _ & 64 && (k.subTitle = g[6](j.LaunchpadDesc)),
        a.$set(k),
        g[10]
          ? p
            ? (p.p(g, _), _ & 1024 && P(p, 1))
            : ((p = es(g)), p.c(), P(p, 1), p.m(t, null))
          : p &&
            (De(),
            R(p, 1, 1, () => {
              p = null;
            }),
            He());
    },
    i(g) {
      h ||
        (P(n.$$.fragment, g),
        P(m),
        P(o.$$.fragment, g),
        P(a.$$.fragment, g),
        P(p),
        (h = !0));
    },
    o(g) {
      R(n.$$.fragment, g),
        R(m),
        R(o.$$.fragment, g),
        R(a.$$.fragment, g),
        R(p),
        (h = !1);
    },
    d(g) {
      g && d(e), X(n), m && m.d(), X(o), X(a), p && p.d();
    },
  };
}
function dc(l, e, t) {
  let n, i, r, o, s, a, c, h, m, p, g, _;
  Y(l, Wo, (T) => t(13, (a = T))),
    Y(l, nn, (T) => t(14, (c = T))),
    Y(l, Ne, (T) => t(6, (h = T))),
    Y(l, va, (T) => t(7, (m = T))),
    Y(l, Ba, (T) => t(8, (p = T))),
    Y(l, Ye, (T) => t(9, (g = T))),
    Y(l, ga, (T) => t(10, (_ = T)));
  let $ = 0;
  function w() {
    ye.track("web_click", {
      $screen_name: "Trade/Contract",
      $element_content: "Convert",
    }),
      ye.track("convert_transfer_button_click", {
        ui_position: "exchange",
        $element_content: "convert",
      });
  }
  function k(T) {
    T &&
      t(
        0,
        ($ = T.filter(({ status: I }) =>
          ["Listed", "PreList", "Suspend", "Delisted"].includes(I)
        ).length)
      );
  }
  function S(T) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: T,
      });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 16384 &&
        t(
          5,
          (n = c
            ? "https://img.phemex.com/v1/7a22c779-c190-4ae8-ac3c-0519ee392184/2-0-dark.svg"
            : "https://img.phemex.com/v1/8dc1f1fb-91fd-4da0-a79a-ebe579e99248/2-0.svg")
        ),
        l.$$.dirty & 16384 &&
          t(
            4,
            (i = c
              ? "https://img.phemex.com/v1/6dd963b5-88a7-465f-b026-c5d6089eb8ab/2-1-dark.svg"
              : "https://img.phemex.com/v1/1677813b-36d0-46d5-97b9-eb5980d11c2d/2-1.svg")
          ),
        l.$$.dirty & 16384 &&
          t(
            3,
            (r = c
              ? "https://img.phemex.com/v1/ae2ec665-42e5-4476-a5b9-4a32c4a8d740/2-2-dark.svg"
              : "https://img.phemex.com/v1/58f2aa00-676d-4302-9d8e-b277a3660920/2-2.svg")
          ),
        l.$$.dirty & 16384 &&
          t(
            2,
            (o = c
              ? "https://img.phemex.com/v1/02b512ac-1cbc-4f14-8716-5c827f61f901/2-3-dark.svg"
              : "https://img.phemex.com/v1/59cfdf7c-35fb-4bfb-aa45-ec746703d606/2-3.svg")
          ),
        l.$$.dirty & 16384 &&
          t(
            1,
            (s = c
              ? "https://img.phemex.com/v1/bbc12582-a7cb-494f-8914-bc34e399272f/2-4-dark.svg"
              : "https://img.phemex.com/v1/44d13946-aa67-4c88-8858-3d0e6bd31a34/2-4.svg")
          ),
        l.$$.dirty & 8192 && k(a);
    }),
    [$, s, o, r, i, n, h, m, p, g, _, w, S, a, c]
  );
}
let hc = class extends ve {
  constructor(e) {
    super(), be(this, e, dc, uc, _e, {});
  }
};
function mc(l) {
  let e, t, n, i, r, o, s, a, c, h, m, p, g, _;
  return (
    (n = new Re({
      props: {
        iconUrl: l[5],
        link: l[6](q.PHEMEX_ACADEMY),
        target: "_self",
        title: l[7](j.Academy),
        subTitle: l[7](j.LearnEverythingAboutCrypto),
      },
    })),
    n.$on("click", l[9]("Academy")),
    (r = new Re({
      props: {
        iconUrl: l[4],
        link: l[8](q.LEARN_CRYPTO),
        target: "_self",
        title: l[7](j.LearnAndEarn),
        subTitle: l[7](j.GetPaidToLearnCrypto),
      },
    })),
    r.$on("click", l[9]("Learn_And_Earn")),
    (s = new Re({
      props: {
        iconUrl: l[3],
        link: l[6](q.PHEMEX_HELP_CENTER),
        target: "_self",
        title: l[7](j.HelpCenter),
        subTitle: l[7](j.FAQHelp),
      },
    })),
    s.$on("click", l[9]("Help_Center")),
    (c = new Re({
      props: {
        iconUrl: l[2],
        link: l[6](q.PHEMEX_BLOG),
        target: "_self",
        title: l[7](j.Blog),
        subTitle: l[7](j.CryptoTipsAndTrick),
      },
    })),
    c.$on("click", l[9]("Blog")),
    (m = new Re({
      props: {
        iconUrl: l[1],
        link: l[6](q.PHEMEX_STUDENT_FOUNDATION),
        target: "_self",
        title: l[7](j.StudentFoundation),
        subTitle: l[7](j.EmpowerStudent),
      },
    })),
    m.$on("click", l[9]("Student_Foundation")),
    (g = new Re({
      props: {
        iconUrl: l[0],
        link: q.PHEMEX_TESTNET,
        target: "_self",
        title: l[7](j.SimulatedTrading),
        subTitle: l[7](j.LearnHowToTradeWithZeroRisk),
      },
    })),
    g.$on("click", l[9]("Simulated_Trading")),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          K(n.$$.fragment),
          (i = A()),
          K(r.$$.fragment),
          (o = A()),
          K(s.$$.fragment),
          (a = A()),
          K(c.$$.fragment),
          (h = A()),
          K(m.$$.fragment),
          (p = A()),
          K(g.$$.fragment),
          this.h();
      },
      l($) {
        e = b($, "DIV", { class: !0 });
        var w = E(e);
        t = b(w, "DIV", { class: !0 });
        var k = E(t);
        Z(n.$$.fragment, k),
          (i = C(k)),
          Z(r.$$.fragment, k),
          (o = C(k)),
          Z(s.$$.fragment, k),
          (a = C(k)),
          Z(c.$$.fragment, k),
          (h = C(k)),
          Z(m.$$.fragment, k),
          (p = C(k)),
          Z(g.$$.fragment, k),
          k.forEach(d),
          w.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "group df fdc ph24 pv16"),
          u(e, "class", "wrap df T2 br12 ovh H-1n91msc");
      },
      m($, w) {
        M($, e, w),
          f(e, t),
          Q(n, t, null),
          f(t, i),
          Q(r, t, null),
          f(t, o),
          Q(s, t, null),
          f(t, a),
          Q(c, t, null),
          f(t, h),
          Q(m, t, null),
          f(t, p),
          Q(g, t, null),
          (_ = !0);
      },
      p($, [w]) {
        const k = {};
        w & 32 && (k.iconUrl = $[5]),
          w & 64 && (k.link = $[6](q.PHEMEX_ACADEMY)),
          w & 128 && (k.title = $[7](j.Academy)),
          w & 128 && (k.subTitle = $[7](j.LearnEverythingAboutCrypto)),
          n.$set(k);
        const S = {};
        w & 16 && (S.iconUrl = $[4]),
          w & 256 && (S.link = $[8](q.LEARN_CRYPTO)),
          w & 128 && (S.title = $[7](j.LearnAndEarn)),
          w & 128 && (S.subTitle = $[7](j.GetPaidToLearnCrypto)),
          r.$set(S);
        const T = {};
        w & 8 && (T.iconUrl = $[3]),
          w & 64 && (T.link = $[6](q.PHEMEX_HELP_CENTER)),
          w & 128 && (T.title = $[7](j.HelpCenter)),
          w & 128 && (T.subTitle = $[7](j.FAQHelp)),
          s.$set(T);
        const I = {};
        w & 4 && (I.iconUrl = $[2]),
          w & 64 && (I.link = $[6](q.PHEMEX_BLOG)),
          w & 128 && (I.title = $[7](j.Blog)),
          w & 128 && (I.subTitle = $[7](j.CryptoTipsAndTrick)),
          c.$set(I);
        const D = {};
        w & 2 && (D.iconUrl = $[1]),
          w & 64 && (D.link = $[6](q.PHEMEX_STUDENT_FOUNDATION)),
          w & 128 && (D.title = $[7](j.StudentFoundation)),
          w & 128 && (D.subTitle = $[7](j.EmpowerStudent)),
          m.$set(D);
        const O = {};
        w & 1 && (O.iconUrl = $[0]),
          w & 128 && (O.title = $[7](j.SimulatedTrading)),
          w & 128 && (O.subTitle = $[7](j.LearnHowToTradeWithZeroRisk)),
          g.$set(O);
      },
      i($) {
        _ ||
          (P(n.$$.fragment, $),
          P(r.$$.fragment, $),
          P(s.$$.fragment, $),
          P(c.$$.fragment, $),
          P(m.$$.fragment, $),
          P(g.$$.fragment, $),
          (_ = !0));
      },
      o($) {
        R(n.$$.fragment, $),
          R(r.$$.fragment, $),
          R(s.$$.fragment, $),
          R(c.$$.fragment, $),
          R(m.$$.fragment, $),
          R(g.$$.fragment, $),
          (_ = !1);
      },
      d($) {
        $ && d(e), X(n), X(r), X(s), X(c), X(m), X(g);
      },
    }
  );
}
function pc(l, e, t) {
  let n, i, r, o, s, a, c, h, m, p;
  Y(l, nn, (_) => t(10, (c = _))),
    Y(l, Ui, (_) => t(6, (h = _))),
    Y(l, Ne, (_) => t(7, (m = _))),
    Y(l, Ye, (_) => t(8, (p = _)));
  function g(_) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: _,
      });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 1024 &&
        t(
          5,
          (n = c
            ? "https://img.phemex.com/v1/494cec68-6bce-4f63-ad42-3aa4743d5a3c/5-0-dark.svg"
            : "https://img.phemex.com/v1/9b4da28d-68e6-435e-a12f-4370be1f3716/5-0.svg")
        ),
        l.$$.dirty & 1024 &&
          t(
            4,
            (i = c
              ? "https://img.phemex.com/v1/8398d844-6b7d-49ba-b042-e864fbaf7d5d/5-1-dark.svg"
              : "https://img.phemex.com/v1/82baecdc-c32e-4ff5-a8ae-d0967d9549dc/5-1.svg")
          ),
        l.$$.dirty & 1024 &&
          t(
            3,
            (r = c
              ? "https://img.phemex.com/v1/64abba2c-2864-436b-974f-8ee56f5f2df6/5-2-dark.svg"
              : "https://img.phemex.com/v1/658ad87c-765f-4767-80d0-0c2630541192/5-2.svg")
          ),
        l.$$.dirty & 1024 &&
          t(
            2,
            (o = c
              ? "https://img.phemex.com/v1/caba1ab7-eb7f-4bea-b63b-68881bdf9982/5-3-dark.svg"
              : "https://img.phemex.com/v1/9f69dbbe-9cfa-4a68-aae2-fea38d11e5b2/5-3.svg")
          ),
        l.$$.dirty & 1024 &&
          t(
            1,
            (s = c
              ? "https://img.phemex.com/v1/d9659ebc-370a-4d86-84e4-b41253ed1bc3/5-4-dark.svg"
              : "https://img.phemex.com/v1/1a90b421-e76f-4c52-a342-68142b3d16b5/5-4.svg")
          ),
        l.$$.dirty & 1024 &&
          t(
            0,
            (a = c
              ? "https://img.phemex.com/v1/77ab5fc4-df5e-448c-9df3-64768066de03/5-5-dark.svg"
              : "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg")
          );
    }),
    [a, s, o, r, i, n, h, m, p, g, c]
  );
}
let _c = class extends ve {
  constructor(e) {
    super(), be(this, e, pc, mc, _e, {});
  }
};
function gc(l) {
  let e, t, n, i, r, o, s, a;
  return (
    (n = new Re({
      props: {
        iconUrl: l[2],
        iconAlt: "earn crypto",
        link: l[3](q.EARN_CRYPTO),
        target: "_self",
        title: l[4](j.EarnCrypto),
        subTitle: l[4](j.EarnCryptoEarnUpTo),
      },
    })),
    n.$on("click", l[5]("Earn_Crypto")),
    (r = new Re({
      props: {
        iconUrl: l[1],
        iconAlt: "savings",
        link: l[3](q.EARN_SAVINGS),
        target: "_self",
        title: l[4](j.Savings),
        subTitle: l[4](j.EarnUpTo),
      },
    })),
    r.$on("click", l[5]("Savings")),
    (s = new Re({
      props: {
        iconUrl: l[0],
        iconAlt: "launchpool",
        link: l[3](q.EARN_LAUNCH_POOL),
        target: "_self",
        title: l[4](j.Launchpool),
        subTitle: l[4](j.StakeAndEarn),
      },
    })),
    s.$on("click", l[5]("Launchpool")),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          K(n.$$.fragment),
          (i = A()),
          K(r.$$.fragment),
          (o = A()),
          K(s.$$.fragment),
          this.h();
      },
      l(c) {
        e = b(c, "DIV", { class: !0 });
        var h = E(e);
        t = b(h, "DIV", { class: !0 });
        var m = E(t);
        Z(n.$$.fragment, m),
          (i = C(m)),
          Z(r.$$.fragment, m),
          (o = C(m)),
          Z(s.$$.fragment, m),
          m.forEach(d),
          h.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "group df fdc ph24 pv16"),
          u(e, "class", "wrap df T2 br12 ovh H-1n91msc");
      },
      m(c, h) {
        M(c, e, h),
          f(e, t),
          Q(n, t, null),
          f(t, i),
          Q(r, t, null),
          f(t, o),
          Q(s, t, null),
          (a = !0);
      },
      p(c, [h]) {
        const m = {};
        h & 4 && (m.iconUrl = c[2]),
          h & 8 && (m.link = c[3](q.EARN_CRYPTO)),
          h & 16 && (m.title = c[4](j.EarnCrypto)),
          h & 16 && (m.subTitle = c[4](j.EarnCryptoEarnUpTo)),
          n.$set(m);
        const p = {};
        h & 2 && (p.iconUrl = c[1]),
          h & 8 && (p.link = c[3](q.EARN_SAVINGS)),
          h & 16 && (p.title = c[4](j.Savings)),
          h & 16 && (p.subTitle = c[4](j.EarnUpTo)),
          r.$set(p);
        const g = {};
        h & 1 && (g.iconUrl = c[0]),
          h & 8 && (g.link = c[3](q.EARN_LAUNCH_POOL)),
          h & 16 && (g.title = c[4](j.Launchpool)),
          h & 16 && (g.subTitle = c[4](j.StakeAndEarn)),
          s.$set(g);
      },
      i(c) {
        a ||
          (P(n.$$.fragment, c),
          P(r.$$.fragment, c),
          P(s.$$.fragment, c),
          (a = !0));
      },
      o(c) {
        R(n.$$.fragment, c), R(r.$$.fragment, c), R(s.$$.fragment, c), (a = !1);
      },
      d(c) {
        c && d(e), X(n), X(r), X(s);
      },
    }
  );
}
function vc(l, e, t) {
  let n, i, r, o, s, a;
  Y(l, nn, (h) => t(6, (o = h))),
    Y(l, Ye, (h) => t(3, (s = h))),
    Y(l, Ne, (h) => t(4, (a = h)));
  function c(h) {
    return function () {
      h === "Launchpool" &&
        ye.track("launchpool_button_click", { button_name: "launchpool" }),
        ye.track("web_click", {
          $screen_name: "Trade/Contract",
          $element_content: h,
        });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 64 &&
        t(
          2,
          (n = o
            ? "https://img.phemex.com/v1/2d89dde7-3b1c-4ad5-8921-68a20155f555/3-0-dark.svg"
            : "https://img.phemex.com/v1/5b86523a-4eee-4b99-85ae-0c64e283b17d/3-0.svg")
        ),
        l.$$.dirty & 64 &&
          t(
            1,
            (i = o
              ? "https://img.phemex.com/v1/41f119ac-bdbf-473b-bcf6-d0ae1d659565/3-1-dark.svg"
              : "https://img.phemex.com/v1/4ea02381-0b21-4292-a5d4-4a83d7f776de/3-1.svg")
          ),
        l.$$.dirty & 64,
        l.$$.dirty & 64 &&
          t(
            0,
            (r = o
              ? "https://img.phemex.com/v1/20c5ef12-2714-4d61-891a-5ede48cbfd73/3-3-dark.svg"
              : "https://img.phemex.com/v1/9959d8d2-f3e7-42e7-93a5-9144a9748d56/3-3.svg")
          );
    }),
    [r, i, n, s, a, c, o]
  );
}
let bc = class extends ve {
  constructor(e) {
    super(), be(this, e, vc, gc, _e, {});
  }
};
function ts(l, e, t) {
  const n = l.slice();
  return (n[2] = e[t]), n;
}
function $c(l) {
  let e;
  return {
    c() {
      (e = v("div")), this.h();
    },
    l(t) {
      (e = b(t, "DIV", { slot: !0, class: !0 })), E(e).forEach(d), this.h();
    },
    h() {
      u(e, "slot", "circle-suffix"), u(e, "class", "circle H-9uzjdj");
    },
    m(t, n) {
      M(t, e, n);
    },
    p: Te,
    d(t) {
      t && d(e);
    },
  };
}
function ns(l) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(n) {
      (e = b(n, "IMG", { height: !0, alt: !0, src: !0 })), this.h();
    },
    h() {
      u(e, "height", "18"),
        u(e, "alt", "promotion"),
        ke(e.src, (t = l[2].fullCornerIcon)) || u(e, "src", t);
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, i) {
      i & 1 && !ke(e.src, (t = n[2].fullCornerIcon)) && u(e, "src", t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function Ec(l) {
  let e,
    t,
    n = l[2].cornerIcon && ns(l);
  return {
    c() {
      (e = v("div")), n && n.c(), (t = A()), this.h();
    },
    l(i) {
      e = b(i, "DIV", { slot: !0, class: !0, style: !0 });
      var r = E(e);
      n && n.l(r), (t = C(r)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "title-suffix"),
        u(e, "class", "ml10"),
        ze(e, "width", "54px");
    },
    m(i, r) {
      M(i, e, r), n && n.m(e, null), f(e, t);
    },
    p(i, r) {
      i[2].cornerIcon
        ? n
          ? n.p(i, r)
          : ((n = ns(i)), n.c(), n.m(e, t))
        : n && (n.d(1), (n = null));
    },
    d(i) {
      i && d(e), n && n.d();
    },
  };
}
function ls(l) {
  let e, t;
  return (
    (e = new Re({
      props: {
        link: l[2].link,
        target: "_self",
        title: l[2].title,
        subTitle: l[2].subTitle,
        $$slots: { "title-suffix": [Ec], "circle-suffix": [$c] },
        $$scope: { ctx: l },
      },
    })),
    e.$on("click", function () {
      at(l[1](l[2].title)) && l[1](l[2].title).apply(this, arguments);
    }),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        l = n;
        const r = {};
        i & 1 && (r.link = l[2].link),
          i & 1 && (r.title = l[2].title),
          i & 1 && (r.subTitle = l[2].subTitle),
          i & 33 && (r.$$scope = { dirty: i, ctx: l }),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function wc(l) {
  let e,
    t,
    n,
    i = l[0],
    r = [];
  for (let s = 0; s < i.length; s += 1) r[s] = ls(ts(l, i, s));
  const o = (s) =>
    R(r[s], 1, 1, () => {
      r[s] = null;
    });
  return {
    c() {
      (e = v("div")), (t = v("div"));
      for (let s = 0; s < r.length; s += 1) r[s].c();
      this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = E(e);
      t = b(a, "DIV", { class: !0 });
      var c = E(t);
      for (let h = 0; h < r.length; h += 1) r[h].l(c);
      c.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(t, "class", "group df fdc ph24 pv16"),
        u(e, "class", "wrap df T2 br12 ovh H-9uzjdj");
    },
    m(s, a) {
      M(s, e, a), f(e, t);
      for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
      n = !0;
    },
    p(s, [a]) {
      if (a & 3) {
        i = s[0];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const h = ts(s, i, c);
          r[c]
            ? (r[c].p(h, a), P(r[c], 1))
            : ((r[c] = ls(h)), r[c].c(), P(r[c], 1), r[c].m(t, null));
        }
        for (De(), c = i.length; c < r.length; c += 1) o(c);
        He();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1) P(r[a]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1) R(r[a]);
      n = !1;
    },
    d(s) {
      s && d(e), yn(r, s);
    },
  };
}
function kc(l, e, t) {
  let n;
  Y(l, Po, (r) => t(0, (n = r)));
  function i(r) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: r,
      });
    };
  }
  return [n, i];
}
let Tc = class extends ve {
  constructor(e) {
    super(), be(this, e, kc, wc, _e, {});
  }
};
function is(l, e, t) {
  const n = l.slice();
  return (n[9] = e[t]), n;
}
function rs(l) {
  let e, t;
  return (
    (e = new Re({
      props: {
        iconUrl: l[9].iconUrl,
        iconAlt: "web3",
        link: l[9].link,
        target: "_self",
        title: l[9].title,
        titleIcon: l[9].titleIcon,
        subTitle: l[9].subTitle,
      },
    })),
    e.$on("click", function () {
      at(l[1](l[9].eventType)) && l[1](l[9].eventType).apply(this, arguments);
    }),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        l = n;
        const r = {};
        i & 1 && (r.iconUrl = l[9].iconUrl),
          i & 1 && (r.link = l[9].link),
          i & 1 && (r.title = l[9].title),
          i & 1 && (r.titleIcon = l[9].titleIcon),
          i & 1 && (r.subTitle = l[9].subTitle),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Ic(l) {
  let e,
    t,
    n,
    i = l[0],
    r = [];
  for (let s = 0; s < i.length; s += 1) r[s] = rs(is(l, i, s));
  const o = (s) =>
    R(r[s], 1, 1, () => {
      r[s] = null;
    });
  return {
    c() {
      (e = v("div")), (t = v("div"));
      for (let s = 0; s < r.length; s += 1) r[s].c();
      this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = E(e);
      t = b(a, "DIV", { class: !0 });
      var c = E(t);
      for (let h = 0; h < r.length; h += 1) r[h].l(c);
      c.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(t, "class", "group df fdc ph24 pv16"),
        u(e, "class", "wrap df T2 br12 ovh H-1n91msc");
    },
    m(s, a) {
      M(s, e, a), f(e, t);
      for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
      n = !0;
    },
    p(s, [a]) {
      if (a & 3) {
        i = s[0];
        let c;
        for (c = 0; c < i.length; c += 1) {
          const h = is(s, i, c);
          r[c]
            ? (r[c].p(h, a), P(r[c], 1))
            : ((r[c] = rs(h)), r[c].c(), P(r[c], 1), r[c].m(t, null));
        }
        for (De(), c = i.length; c < r.length; c += 1) o(c);
        He();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1) P(r[a]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1) R(r[a]);
      n = !1;
    },
    d(s) {
      s && d(e), yn(r, s);
    },
  };
}
function Ac(l, e, t) {
  let n, i, r, o;
  Y(l, ln, (p) => t(2, (n = p))),
    Y(l, nn, (p) => t(3, (i = p))),
    Y(l, Ye, (p) => t(4, (r = p))),
    Y(l, Ne, (p) => t(5, (o = p)));
  const s = {
    white: {
      img1: "https://img.phemex.com/v1/e634e18e-da2d-4b36-8e50-5ac3a8a6abc6/4-0.svg",
      img2: "https://img.phemex.com/v1/9e22031d-4e49-4edb-a3b7-b72957fd0d09/4-1.svg",
      img3: "https://img.phemex.com/v1/ea2fcbb2-4061-4402-ac53-d64ea558627a/4-2.svg",
      img4: "https://img.phemex.com/v1/dcd4eadd-f81d-40db-a2d5-e89c33dc0357/4-4.svg",
      img5: "https://img.phemex.com/v1/a78c5487-608d-4dd8-b1b4-8f095dd9e940/4-4.svg",
      img6: "https://img.phemex.com/v1/b55871b0-085b-4441-a557-46de5e21eb50/light.svg",
      img7: "https://img.phemex.com/v1/1f775f84-32a1-4638-b1ce-0814da91459f/lending-protocol.png",
    },
    dark: {
      img1: "https://img.phemex.com/v1/b8264a81-3b7d-4669-9db0-8dec3fcb5fa9/web3-1.svg",
      img2: "https://img.phemex.com/v1/7c23022a-2601-4a4a-b11e-e74136736e95/web3-2.svg",
      img3: "https://img.phemex.com/v1/c1db070d-56d8-4a01-ae25-52f27ef3373c/web3-3.svg",
      img4: "https://img.phemex.com/v1/8ed61592-aefe-4463-a4bc-76802d2b454c/web3-4.svg",
      img5: "https://img.phemex.com/v1/cb7de9b5-36ee-487f-b0d9-cc6372535324/web3-5.svg",
      img6: "https://img.phemex.com/v1/9275985b-6dce-4caf-a648-a6490156e9b0/web3-6-dark.svg",
      img7: "https://img.phemex.com/v1/a5b6e2e9-5713-4217-ae42-fb1ec70f0a6a/lending-protocol-dark.png",
    },
  };
  let a = [];
  function c(p, g, _, $) {
    return [
      {
        iconUrl: h(_, "img6"),
        link: g(q.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS),
        title: p(j.SocialTrade),
        titleIcon:
          "https://static.phemex.com/pubimg/data/436b16d5-676a-4144-9d67-a4c5ca230724.png",
        subTitle: p(j.PhemexAllInOne),
        eventType: "web3_social_trade_explore_group",
        hidden: !1,
      },
      {
        iconUrl: h(_, "img5"),
        link: g(q.WEB3_STAKE),
        title: p(j.Web3PTStaking),
        titleIcon: null,
        subTitle: p(j.Web3PTStakingDesc),
        eventType: "web3_stake",
        hidden: !$.isMain,
      },
      {
        iconUrl: h(_, "img1"),
        link: g(q.PHEMEXIA),
        title: p(j.Phemexia),
        titleIcon: null,
        subTitle: p(j.PhemexiaDesc),
        eventType: "phemexia",
        hidden: !1,
      },
      {
        iconUrl: h(_, "img2"),
        link: g(q.WEB3_SOUL_PASS),
        title: p(j.Web3SoulPass),
        titleIcon: null,
        subTitle: p(j.Web3SoulPassDesc),
        eventType: "soul_pass",
        hidden: !$.isMain,
      },
      {
        iconUrl: h(_, "img3"),
        link: g(q.WEB3_EQUITY_BENEFITS),
        title: p(j.Web3Token),
        titleIcon: null,
        subTitle: p(j.Web3TokenDesc),
        eventType: "token",
        hidden: !$.isMain,
      },
      {
        iconUrl: h(_, "img7"),
        link: g(q.WEB3_LENDING_MARKET),
        title: p(j.Web3LendingProtocol),
        titleIcon:
          "https://img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
        subTitle: p(j.Web3LendingProtocolDesc),
        eventType: "web3_stake",
        hidden: !$.isMain,
      },
    ].filter((w) => !w.hidden);
  }
  function h(p, g) {
    return s[p ? "dark" : "white"][g];
  }
  function m(p) {
    return function () {
      p === "Launchpool" &&
        ye.track("launchpool_button_click", { button_name: "launchpool" }),
        ye.track("web_click", {
          $screen_name: "Trade/Contract",
          $element_content: p,
        });
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 60 && t(0, (a = c(o, r, i, n)));
    }),
    [a, m, n, i, r, o]
  );
}
let Cc = class extends ve {
  constructor(e) {
    super(), be(this, e, Ac, Ic, _e, {});
  }
};
function Sc(l) {
  let e, t;
  return (
    (e = new ac({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Dc(l) {
  let e,
    t = l[3](j.BuyCrypto) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.BuyCrypto) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Hc(l) {
  let e, t;
  return (
    (e = new fc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Pc(l) {
  let e,
    t = l[3](j.Contract) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.Contract) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Oc(l) {
  let e, t;
  return (
    (e = new hc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Vc(l) {
  let e,
    t = l[3](j.Spot) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.Spot) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Rc(l) {
  let e, t;
  return (
    (e = new bc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Nc(l) {
  let e,
    t = l[3](j.EarnMain) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.EarnMain) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Lc(l) {
  let e, t;
  return (
    (e = new Cc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Mc(l) {
  let e,
    t,
    n = l[3](j.Web3) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("span")),
        (t = v("span")),
        (i = N(n)),
        (r = A()),
        (o = v("img")),
        this.h();
    },
    l(a) {
      e = b(a, "SPAN", { slot: !0, class: !0 });
      var c = E(e);
      t = b(c, "SPAN", { class: !0 });
      var h = E(t);
      (i = L(h, n)),
        h.forEach(d),
        (r = C(c)),
        (o = b(c, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
        c.forEach(d),
        this.h();
    },
    h() {
      u(t, "class", "trigger H-agg93g"),
        u(o, "class", "title-icon ml4"),
        u(o, "height", "14"),
        ke(
          o.src,
          (s =
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png")
        ) || u(o, "src", s),
        u(o, "alt", "new"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger df aic H-agg93g");
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, i), f(e, r), f(e, o);
    },
    p(a, c) {
      c & 8 && n !== (n = a[3](j.Web3) + "") && J(i, n);
    },
    d(a) {
      a && d(e);
    },
  };
}
function Uc(l) {
  let e, t;
  return (
    (e = new _c({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function yc(l) {
  let e,
    t = l[3](j.Learn) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.Learn) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function Bc(l) {
  let e, t;
  return (
    (e = new Tc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Fc(l) {
  let e,
    t = l[3](j.Promotions) + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger H-agg93g");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 8 && t !== (t = i[3](j.Promotions) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function ss(l) {
  let e,
    t,
    n = l[5].title + "",
    i,
    r,
    o,
    s = l[5].cornerIcon && as(l);
  return {
    c() {
      (e = v("a")),
        (t = v("span")),
        (i = N(n)),
        (r = A()),
        s && s.c(),
        this.h();
    },
    l(a) {
      e = b(a, "A", { class: !0, href: !0 });
      var c = E(e);
      t = b(c, "SPAN", {});
      var h = E(t);
      (i = L(h, n)),
        h.forEach(d),
        (r = C(c)),
        s && s.l(c),
        c.forEach(d),
        this.h();
    },
    h() {
      u(e, "class", "df aic ml24 T2 cp menu H-agg93g"),
        u(e, "href", (o = l[5].link)),
        we(e, "active", q.ONE_CRYPTO_TRADING_COMPETITION);
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, i), f(e, r), s && s.m(e, null);
    },
    p(a, c) {
      c & 32 && n !== (n = a[5].title + "") && J(i, n),
        a[5].cornerIcon
          ? s
            ? s.p(a, c)
            : ((s = as(a)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null)),
        c & 32 && o !== (o = a[5].link) && u(e, "href", o);
    },
    d(a) {
      a && d(e), s && s.d();
    },
  };
}
function as(l) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(n) {
      (e = b(n, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "hot-img ml4"),
        u(e, "height", "16"),
        ke(e.src, (t = l[5].fullCornerIcon)) || u(e, "src", t),
        u(e, "alt", "new");
    },
    m(n, i) {
      M(n, e, i);
    },
    p(n, i) {
      i & 32 && !ke(e.src, (t = n[5].fullCornerIcon)) && u(e, "src", t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function os(l) {
  let e, t, n;
  return {
    c() {
      (e = v("a")), (t = v("span")), (n = N("PhemexTR")), this.h();
    },
    l(i) {
      e = b(i, "A", { class: !0, href: !0, target: !0 });
      var r = E(e);
      t = b(r, "SPAN", {});
      var o = E(t);
      (n = L(o, "PhemexTR")), o.forEach(d), r.forEach(d), this.h();
    },
    h() {
      u(e, "class", "T2 cp menu H-agg93g"),
        u(e, "href", q.PHEMEX_TR),
        u(e, "target", "_blank"),
        we(e, "ml36", innerWidth >= 1600),
        we(e, "ml12", innerWidth < 1600);
    },
    m(i, r) {
      M(i, e, r), f(e, t), f(t, n);
    },
    p(i, r) {
      r & 0 && we(e, "ml36", innerWidth >= 1600),
        r & 0 && we(e, "ml12", innerWidth < 1600);
    },
    d(i) {
      i && d(e);
    },
  };
}
function cs(l) {
  let e,
    t,
    n,
    i,
    r = l[3](j.Markets) + "",
    o,
    s,
    a,
    c,
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U;
  (t = new et({
    props: {
      class: "trigger-con",
      placement: en,
      modifiers: l[7],
      triggerClass: "ph12",
      $$slots: { trigger: [Dc], default: [Sc] },
      $$scope: { ctx: l },
    },
  })),
    (c = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [Pc], default: [Hc] },
        $$scope: { ctx: l },
      },
    })),
    (m = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [Vc], default: [Oc] },
        $$scope: { ctx: l },
      },
    })),
    (g = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [Nc], default: [Rc] },
        $$scope: { ctx: l },
      },
    })),
    ($ = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [Mc], default: [Lc] },
        $$scope: { ctx: l },
      },
    })),
    (k = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [yc], default: [Uc] },
        $$scope: { ctx: l },
      },
    })),
    (T = new et({
      props: {
        placement: en,
        modifiers: l[7],
        class: "trigger-con",
        triggerClass: "ph12",
        $$slots: { trigger: [Fc], default: [Bc] },
        $$scope: { ctx: l },
      },
    }));
  let y = l[5].title && ss(l),
    G = l[6] === "tr" && os();
  return {
    c() {
      (e = v("div")),
        K(t.$$.fragment),
        (n = A()),
        (i = v("a")),
        (o = N(r)),
        (a = A()),
        K(c.$$.fragment),
        (h = A()),
        K(m.$$.fragment),
        (p = A()),
        K(g.$$.fragment),
        (_ = A()),
        K($.$$.fragment),
        (w = A()),
        K(k.$$.fragment),
        (S = A()),
        K(T.$$.fragment),
        (I = A()),
        y && y.c(),
        (D = A()),
        G && G.c(),
        this.h();
    },
    l(H) {
      e = b(H, "DIV", { class: !0 });
      var B = E(e);
      Z(t.$$.fragment, B), (n = C(B)), (i = b(B, "A", { href: !0, class: !0 }));
      var x = E(i);
      (o = L(x, r)),
        x.forEach(d),
        (a = C(B)),
        Z(c.$$.fragment, B),
        (h = C(B)),
        Z(m.$$.fragment, B),
        (p = C(B)),
        Z(g.$$.fragment, B),
        (_ = C(B)),
        Z($.$$.fragment, B),
        (w = C(B)),
        Z(k.$$.fragment, B),
        (S = C(B)),
        Z(T.$$.fragment, B),
        (I = C(B)),
        y && y.l(B),
        (D = C(B)),
        G && G.l(B),
        B.forEach(d),
        this.h();
    },
    h() {
      u(i, "href", (s = l[4](q.MARKETS))),
        u(i, "class", "H-agg93g"),
        u(e, "class", "content df ml24 H-agg93g");
    },
    m(H, B) {
      M(H, e, B),
        Q(t, e, null),
        f(e, n),
        f(e, i),
        f(i, o),
        f(e, a),
        Q(c, e, null),
        f(e, h),
        Q(m, e, null),
        f(e, p),
        Q(g, e, null),
        f(e, _),
        Q($, e, null),
        f(e, w),
        Q(k, e, null),
        f(e, S),
        Q(T, e, null),
        f(e, I),
        y && y.m(e, null),
        f(e, D),
        G && G.m(e, null),
        l[9](e),
        (O = !0),
        V || ((U = me(i, "click", l[8])), (V = !0));
    },
    p(H, B) {
      const x = {};
      B & 2056 && (x.$$scope = { dirty: B, ctx: H }),
        t.$set(x),
        (!O || B & 8) && r !== (r = H[3](j.Markets) + "") && J(o, r),
        (!O || (B & 16 && s !== (s = H[4](q.MARKETS)))) && u(i, "href", s);
      const ne = {};
      B & 2056 && (ne.$$scope = { dirty: B, ctx: H }), c.$set(ne);
      const F = {};
      B & 2056 && (F.$$scope = { dirty: B, ctx: H }), m.$set(F);
      const z = {};
      B & 2056 && (z.$$scope = { dirty: B, ctx: H }), g.$set(z);
      const se = {};
      B & 2056 && (se.$$scope = { dirty: B, ctx: H }), $.$set(se);
      const oe = {};
      B & 2056 && (oe.$$scope = { dirty: B, ctx: H }), k.$set(oe);
      const le = {};
      B & 2056 && (le.$$scope = { dirty: B, ctx: H }),
        T.$set(le),
        H[5].title
          ? y
            ? y.p(H, B)
            : ((y = ss(H)), y.c(), y.m(e, D))
          : y && (y.d(1), (y = null)),
        H[6] === "tr"
          ? G
            ? G.p(H, B)
            : ((G = os()), G.c(), G.m(e, null))
          : G && (G.d(1), (G = null));
    },
    i(H) {
      O ||
        (P(t.$$.fragment, H),
        P(c.$$.fragment, H),
        P(m.$$.fragment, H),
        P(g.$$.fragment, H),
        P($.$$.fragment, H),
        P(k.$$.fragment, H),
        P(T.$$.fragment, H),
        (O = !0));
    },
    o(H) {
      R(t.$$.fragment, H),
        R(c.$$.fragment, H),
        R(m.$$.fragment, H),
        R(g.$$.fragment, H),
        R($.$$.fragment, H),
        R(k.$$.fragment, H),
        R(T.$$.fragment, H),
        (O = !1);
    },
    d(H) {
      H && d(e),
        X(t),
        X(c),
        X(m),
        X(g),
        X($),
        X(k),
        X(T),
        y && y.d(),
        G && G.d(),
        l[9](null),
        (V = !1),
        U();
    },
  };
}
function Gc(l) {
  let e,
    t = l[2],
    n,
    i = cs(l);
  return {
    c() {
      (e = v("nav")), i.c(), this.h();
    },
    l(r) {
      e = b(r, "NAV", { class: !0 });
      var o = E(e);
      i.l(o), o.forEach(d), this.h();
    },
    h() {
      u(e, "class", "wrap f1 first H-agg93g");
    },
    m(r, o) {
      M(r, e, o), i.m(e, null), l[10](e), (n = !0);
    },
    p(r, [o]) {
      o & 4 && _e(t, (t = r[2]))
        ? (De(),
          R(i, 1, 1, Te),
          He(),
          (i = cs(r)),
          i.c(),
          P(i, 1),
          i.m(e, null))
        : i.p(r, o);
    },
    i(r) {
      n || (P(i), (n = !0));
    },
    o(r) {
      R(i), (n = !1);
    },
    d(r) {
      r && d(e), i.d(r), l[10](null);
    },
  };
}
const en = "bottom-start";
function Wc(l, e, t) {
  let n, i, r, o, s;
  Y(l, sl, (_) => t(2, (n = _))),
    Y(l, Ne, (_) => t(3, (i = _))),
    Y(l, Ye, (_) => t(4, (r = _))),
    Y(l, Oo, (_) => t(5, (o = _))),
    Y(l, al, (_) => t(6, (s = _)));
  const a = [
    { name: "offset", options: { offset: [-36, 0] } },
    { name: "preventOverflow", options: { padding: 40 } },
  ];
  let c, h;
  Je(() => {});
  function m() {
    ye.track("web_click", {
      $screen_name: "Trade/Contract",
      $element_content: "Markets",
    });
  }
  function p(_) {
    Oe[_ ? "unshift" : "push"](() => {
      (h = _), t(1, h);
    });
  }
  function g(_) {
    Oe[_ ? "unshift" : "push"](() => {
      (c = _), t(0, c);
    });
  }
  return [c, h, n, i, r, o, s, a, m, p, g];
}
let jc = class extends ve {
  constructor(e) {
    super(), be(this, e, Wc, Gc, _e, {});
  }
};
const fs = { ScanToDownload: "5b57ca", ScanTo: "484833" };
function qc(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a = l[0](fs.ScanTo) + "",
    c,
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (i = v("img")),
        (o = A()),
        (s = v("div")),
        (c = N(a)),
        (h = A()),
        (m = v("div")),
        (p = v("a")),
        (g = v("img")),
        (w = A()),
        (k = v("a")),
        (S = v("img")),
        this.h();
    },
    l(D) {
      e = b(D, "DIV", { class: !0 });
      var O = E(e);
      t = b(O, "DIV", { class: !0 });
      var V = E(t);
      n = b(V, "DIV", { class: !0 });
      var U = E(n);
      (i = b(U, "IMG", { class: !0, alt: !0, src: !0 })),
        (o = C(U)),
        (s = b(U, "DIV", { class: !0 }));
      var y = E(s);
      (c = L(y, a)),
        y.forEach(d),
        U.forEach(d),
        (h = C(V)),
        (m = b(V, "DIV", { class: !0 }));
      var G = E(m);
      p = b(G, "A", { target: !0, class: !0, href: !0 });
      var H = E(p);
      (g = b(H, "IMG", { class: !0, alt: !0, src: !0 })),
        H.forEach(d),
        (w = C(G)),
        (k = b(G, "A", { target: !0, class: !0, href: !0 }));
      var B = E(k);
      (S = b(B, "IMG", { class: !0, alt: !0, src: !0 })),
        B.forEach(d),
        G.forEach(d),
        V.forEach(d),
        O.forEach(d),
        this.h();
    },
    h() {
      u(i, "class", "qrcode H-1pba6wx"),
        u(i, "alt", "qr-code"),
        ke(i.src, (r = Fa.APP_DOWNLOAD_QR_CODE)) || u(i, "src", r),
        u(s, "class", "title mt8 f14 H-1pba6wx"),
        u(n, "class", "tc df aic fdc"),
        u(g, "class", "download H-1pba6wx"),
        u(g, "alt", "app store"),
        ke(
          g.src,
          (_ =
            "https://static.phemex.com/pubimg/9daf0c9a1965375cda5bbabe4b89cc19f6ce8176b265539c288a6dd679f9c0ac.png")
        ) || u(g, "src", _),
        u(p, "target", "_blank"),
        u(p, "class", "df H-1pba6wx"),
        u(p, "href", ($ = l[2](l[1]))),
        u(S, "class", "download H-1pba6wx"),
        u(S, "alt", "google play"),
        ke(
          S.src,
          (T =
            "https://static.phemex.com/pubimg/93907b0d27f50e25a01e44588edcc658abca262fb8f96bf33e7bc6bb5c91d9d0.png")
        ) || u(S, "src", T),
        u(k, "target", "_blank"),
        u(k, "class", "df H-1pba6wx"),
        u(k, "href", (I = us(l[1]))),
        u(m, "class", "download-con df fdc jcsb ml24 H-1pba6wx"),
        u(t, "class", "df aic ais"),
        u(e, "class", "wrap br12 T2 H-1pba6wx");
    },
    m(D, O) {
      M(D, e, O),
        f(e, t),
        f(t, n),
        f(n, i),
        f(n, o),
        f(n, s),
        f(s, c),
        f(t, h),
        f(t, m),
        f(m, p),
        f(p, g),
        f(m, w),
        f(m, k),
        f(k, S);
    },
    p(D, [O]) {
      O & 1 && a !== (a = D[0](fs.ScanTo) + "") && J(c, a),
        O & 2 && $ !== ($ = D[2](D[1])) && u(p, "href", $),
        O & 2 && I !== (I = us(D[1])) && u(k, "href", I);
    },
    i: Te,
    o: Te,
    d(D) {
      D && d(e);
    },
  };
}
function us(l) {
  return "https://play.google.com/store/apps/details?id=com.phemex.app&hl=" + l;
}
function zc(l, e, t) {
  let n, i;
  Y(l, Ne, (o) => t(0, (n = o))), Y(l, al, (o) => t(1, (i = o)));
  function r(o) {
    const s = Ga[o];
    return (
      "https://apps.apple.com/" +
      (s ? s.appStore : "us") +
      "/app/phemex/id1499601684"
    );
  }
  return [n, i, r];
}
let Yc = class extends ve {
  constructor(e) {
    super(), be(this, e, zc, qc, _e, {});
  }
};
function Kc(l) {
  let e, t;
  return (
    (e = new Yc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Qc(l) {
  let e, t, n, i;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(r) {
      e = b(r, "DIV", { slot: !0, class: !0 });
      var o = E(e);
      t = b(o, "DIV", { class: !0 });
      var s = E(t);
      n = b(s, "I", { class: !0 });
      var a = E(n);
      (i = L(a, "")), a.forEach(d), s.forEach(d), o.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-7ec68q"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-7ec68q");
    },
    m(r, o) {
      M(r, e, o), f(e, t), f(t, n), f(n, i);
    },
    p: Te,
    d(r) {
      r && d(e);
    },
  };
}
function Xc(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        noIcon: !0,
        noHoverColor: !0,
        triggerClass: "ml10",
        placement: Jc,
        modifiers: l[0],
        $$slots: { trigger: [Qc], default: [Kc] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 2 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
const Jc = "bottom";
function Zc(l) {
  return [[{ name: "preventOverflow", options: { padding: 40 } }]];
}
let xc = class extends ve {
  constructor(e) {
    super(), be(this, e, Zc, Xc, _e, {});
  }
};
const Nl = { RecentTrade: "6e2eb2", All: "1f7b47" };
function ds(l, e, t) {
  const n = l.slice();
  return (n[4] = e[t]), n;
}
function hs(l) {
  let e,
    t = l[4].detail.content + "";
  return {
    c() {
      (e = v("div")), this.h();
    },
    l(n) {
      e = b(n, "DIV", { class: !0 });
      var i = E(e);
      i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "announce content T3 lh18 fw2 H-spc9h0");
    },
    m(n, i) {
      M(n, e, i), (e.innerHTML = t);
    },
    p(n, i) {
      i & 4 && t !== (t = n[4].detail.content + "") && (e.innerHTML = t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function ms(l, e) {
  let t,
    n,
    i,
    r,
    o,
    s = e[4].detail.title + "",
    a,
    c = e[4].detail.title + "",
    h,
    m,
    p,
    g,
    _,
    $ = Dr.formatDate(e[4].releaseTime) + "",
    w,
    k,
    S,
    T,
    I = e[4].detail.content && hs(e);
  return {
    key: l,
    first: null,
    c() {
      (t = v("div")),
        (n = v("span")),
        (i = A()),
        (r = v("a")),
        (o = v("div")),
        (a = N(s)),
        (h = N(c)),
        (m = A()),
        I && I.c(),
        (g = A()),
        (_ = v("div")),
        (w = N($)),
        (k = A()),
        this.h();
    },
    l(D) {
      t = b(D, "DIV", { class: !0 });
      var O = E(t);
      (n = b(O, "SPAN", { class: !0 })),
        E(n).forEach(d),
        (i = C(O)),
        (r = b(O, "A", { class: !0, href: !0 }));
      var V = E(r);
      o = b(V, "DIV", { class: !0 });
      var U = E(o);
      (a = L(U, s)),
        (h = L(U, c)),
        U.forEach(d),
        (m = C(V)),
        I && I.l(V),
        V.forEach(d),
        (g = C(O)),
        (_ = b(O, "DIV", { class: !0, style: !0 }));
      var y = E(_);
      (w = L(y, $)), y.forEach(d), (k = C(O)), O.forEach(d), this.h();
    },
    h() {
      u(n, "class", "circle mr12 H-spc9h0"),
        u(o, "class", "announce f14 lh24 fw2 T2 H-spc9h0"),
        u(r, "class", "announce-con H-spc9h0"),
        u(r, "href", (p = e[4].detail.webLink)),
        u(_, "class", "f12 fw1 lh18 T4 ml8"),
        ze(_, "margin-left", "auto"),
        u(t, "class", "item df aic H-spc9h0"),
        (this.first = t);
    },
    m(D, O) {
      M(D, t, O),
        f(t, n),
        f(t, i),
        f(t, r),
        f(r, o),
        f(o, a),
        f(o, h),
        f(r, m),
        I && I.m(r, null),
        f(t, g),
        f(t, _),
        f(_, w),
        f(t, k),
        S ||
          ((T = me(r, "click", function () {
            at(e[3](e[4].detail.title)) &&
              e[3](e[4].detail.title).apply(this, arguments);
          })),
          (S = !0));
    },
    p(D, O) {
      (e = D),
        O & 4 && s !== (s = e[4].detail.title + "") && J(a, s),
        O & 4 && c !== (c = e[4].detail.title + "") && J(h, c),
        e[4].detail.content
          ? I
            ? I.p(e, O)
            : ((I = hs(e)), I.c(), I.m(r, null))
          : I && (I.d(1), (I = null)),
        O & 4 && p !== (p = e[4].detail.webLink) && u(r, "href", p),
        O & 4 && $ !== ($ = Dr.formatDate(e[4].releaseTime) + "") && J(w, $);
    },
    d(D) {
      D && d(t), I && I.d(), (S = !1), T();
    },
  };
}
function ef(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a = l[0](Nl.RecentTrade) + "",
    c,
    h,
    m,
    p,
    g = l[0](Nl.All) + "",
    _,
    $,
    w,
    k,
    S,
    T,
    I = [],
    D = new Map(),
    O = l[2] || [];
  const V = (U) => U[4].id;
  for (let U = 0; U < O.length; U += 1) {
    let y = ds(l, O, U),
      G = V(y);
    D.set(G, (I[U] = ms(G, y)));
  }
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (i = v("i")),
        (r = N("")),
        (o = A()),
        (s = v("span")),
        (c = N(a)),
        (h = A()),
        (m = v("div")),
        (p = v("a")),
        (_ = N(g)),
        ($ = v("i")),
        (w = N("")),
        (S = A()),
        (T = v("div"));
      for (let U = 0; U < I.length; U += 1) I[U].c();
      this.h();
    },
    l(U) {
      e = b(U, "DIV", { class: !0 });
      var y = E(e);
      t = b(y, "DIV", { class: !0 });
      var G = E(t);
      n = b(G, "DIV", { class: !0 });
      var H = E(n);
      i = b(H, "I", { class: !0 });
      var B = E(i);
      (r = L(B, "")),
        B.forEach(d),
        (o = C(H)),
        (s = b(H, "SPAN", { class: !0 }));
      var x = E(s);
      (c = L(x, a)),
        x.forEach(d),
        H.forEach(d),
        (h = C(G)),
        (m = b(G, "DIV", { class: !0 }));
      var ne = E(m);
      p = b(ne, "A", { class: !0, href: !0, target: !0 });
      var F = E(p);
      (_ = L(F, g)), ($ = b(F, "I", { class: !0 }));
      var z = E($);
      (w = L(z, "")),
        z.forEach(d),
        F.forEach(d),
        ne.forEach(d),
        G.forEach(d),
        (S = C(y)),
        (T = b(y, "DIV", { class: !0 }));
      var se = E(T);
      for (let oe = 0; oe < I.length; oe += 1) I[oe].l(se);
      se.forEach(d), y.forEach(d), this.h();
    },
    h() {
      u(i, "class", "iconfont f24"),
        u(s, "class", "ooo ml8"),
        u(n, "class", "notice-title df aic fw2 ooo"),
        u($, "class", "iconfont ml4 f16"),
        u(p, "class", "f14"),
        u(p, "href", (k = l[1](q.PHEMEX_ANNOUNCEMENT))),
        u(p, "target", "_blank"),
        u(m, "class", "df aic BLUE cp"),
        u(t, "class", "all df fdr jcsb lh24 T2 f14 fw1 H-spc9h0"),
        u(T, "class", "body mt8 sv H-spc9h0"),
        u(e, "class", "wrap br12 B2 T2 H-spc9h0");
    },
    m(U, y) {
      M(U, e, y),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, r),
        f(n, o),
        f(n, s),
        f(s, c),
        f(t, h),
        f(t, m),
        f(m, p),
        f(p, _),
        f(p, $),
        f($, w),
        f(e, S),
        f(e, T);
      for (let G = 0; G < I.length; G += 1) I[G] && I[G].m(T, null);
    },
    p(U, [y]) {
      y & 1 && a !== (a = U[0](Nl.RecentTrade) + "") && J(c, a),
        y & 1 && g !== (g = U[0](Nl.All) + "") && J(_, g),
        y & 2 && k !== (k = U[1](q.PHEMEX_ANNOUNCEMENT)) && u(p, "href", k),
        y & 12 &&
          ((O = U[2] || []),
          (I = Bn(I, y, V, 1, U, O, D, T, ul, ms, null, ds)));
    },
    i: Te,
    o: Te,
    d(U) {
      U && d(e);
      for (let y = 0; y < I.length; y += 1) I[y].d();
    },
  };
}
function tf(l, e, t) {
  let n, i, r;
  Y(l, Ne, (s) => t(0, (n = s))),
    Y(l, Ui, (s) => t(1, (i = s))),
    Y(l, Vo, (s) => t(2, (r = s)));
  function o(s) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: "announcement_" + s,
      });
    };
  }
  return [n, i, r, o];
}
let nf = class extends ve {
  constructor(e) {
    super(), be(this, e, tf, ef, _e, {});
  }
};
function lf(l) {
  let e, t;
  return (
    (e = new nf({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function ps(l) {
  let e, t;
  return {
    c() {
      (e = v("i")), (t = N(l[1])), this.h();
    },
    l(n) {
      e = b(n, "I", { class: !0 });
      var i = E(e);
      (t = L(i, l[1])), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "circle pa f10 H-1miejyp");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 2 && J(t, n[1]);
    },
    d(n) {
      n && d(e);
    },
  };
}
function rf(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c = l[0] === "Login" && l[1] > 0 && ps(l);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("i")),
        (i = N("")),
        (r = A()),
        (o = v("span")),
        c && c.c(),
        this.h();
    },
    l(h) {
      e = b(h, "DIV", { slot: !0, class: !0 });
      var m = E(e);
      t = b(m, "DIV", { class: !0 });
      var p = E(t);
      n = b(p, "I", { class: !0 });
      var g = E(n);
      (i = L(g, "")),
        g.forEach(d),
        p.forEach(d),
        (r = C(m)),
        (o = b(m, "SPAN", { class: !0 }));
      var _ = E(o);
      c && c.l(_), _.forEach(d), m.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-1miejyp"),
        u(o, "class", "icon df pr"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-1miejyp");
    },
    m(h, m) {
      M(h, e, m),
        f(e, t),
        f(t, n),
        f(n, i),
        f(e, r),
        f(e, o),
        c && c.m(o, null),
        s || ((a = me(e, "mouseenter", l[3])), (s = !0));
    },
    p(h, m) {
      h[0] === "Login" && h[1] > 0
        ? c
          ? c.p(h, m)
          : ((c = ps(h)), c.c(), c.m(o, null))
        : c && (c.d(1), (c = null));
    },
    d(h) {
      h && d(e), c && c.d(), (s = !1), a();
    },
  };
}
function sf(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        noIcon: !0,
        noHoverColor: !0,
        placement: af,
        modifiers: l[2],
        triggerClass: "ml10",
        $$slots: { trigger: [rf], default: [lf] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 67 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
const af = "bottom";
function of(l, e, t) {
  let n, i, r;
  Y(l, rl, (c) => t(0, (n = c))),
    Y(l, al, (c) => t(4, (i = c))),
    Y(l, Ro, (c) => t(1, (r = c)));
  const o = [{ name: "preventOverflow", options: { padding: 40 } }];
  function s() {
    r > 0 && n === "Login" && a();
  }
  async function a() {
    const c = { itemKey: "announcement" },
      { data: h, error: m } = await No.browseTime(c);
    h && Lo(Wa.getLanguageKey(i), n), m && mt.send("toast", "error", m);
  }
  return [n, r, o, s];
}
let cf = class extends ve {
  constructor(e) {
    super(), be(this, e, of, sf, _e, {});
  }
};
const ff = (l) => ({}),
  _s = (l) => ({});
function gs(l) {
  let e, t, n, i;
  const r = l[6].default,
    o = rn(r, l, l[5], null);
  return {
    c() {
      (e = v("div")), o && o.c(), this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = E(e);
      o && o.l(a), a.forEach(d), this.h();
    },
    h() {
      u(e, "class", "children mt4 H-hcprya");
    },
    m(s, a) {
      M(s, e, a), o && o.m(e, null), (i = !0);
    },
    p(s, a) {
      (l = s),
        o &&
          o.p &&
          (!i || a & 32) &&
          sn(o, r, l, l[5], i ? on(r, l[5], a, null) : an(l[5]), null);
    },
    i(s) {
      i ||
        (P(o, s),
        Un(() => {
          i && (n && n.end(1), (t = fl(e, Ur, l[2])), t.start());
        }),
        (i = !0));
    },
    o(s) {
      R(o, s), t && t.invalidate(), (n = Ca(e, Ur, l[2])), (i = !1);
    },
    d(s) {
      s && d(e), o && o.d(s), s && n && n.end();
    },
  };
}
function uf(l) {
  let e, t, n, i, r, o, s, a, c, h;
  const m = l[6].trigger,
    p = rn(m, l, l[5], _s);
  let g = l[0] && gs(l);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        p && p.c(),
        (n = A()),
        (i = v("i")),
        (r = N("")),
        (o = A()),
        g && g.c(),
        this.h();
    },
    l(_) {
      e = b(_, "DIV", { class: !0 });
      var $ = E(e);
      t = b($, "DIV", { class: !0 });
      var w = E(t);
      p && p.l(w), (n = C(w)), (i = b(w, "I", { class: !0 }));
      var k = E(i);
      (r = L(k, "")),
        k.forEach(d),
        w.forEach(d),
        (o = C($)),
        g && g.l($),
        $.forEach(d),
        this.h();
    },
    h() {
      u(i, "class", "iconfont db f16 H-hcprya"),
        u(t, "class", "trigger df aic jcsb H-hcprya"),
        u(e, "class", (s = Mr(l[1]) + " H-hcprya")),
        we(e, "active", l[0]);
    },
    m(_, $) {
      M(_, e, $),
        f(e, t),
        p && p.m(t, null),
        f(t, n),
        f(t, i),
        f(i, r),
        f(e, o),
        g && g.m(e, null),
        (a = !0),
        c || ((h = me(t, "click", l[3])), (c = !0));
    },
    p(_, [$]) {
      p &&
        p.p &&
        (!a || $ & 32) &&
        sn(p, m, _, _[5], a ? on(m, _[5], $, ff) : an(_[5]), _s),
        _[0]
          ? g
            ? (g.p(_, $), $ & 1 && P(g, 1))
            : ((g = gs(_)), g.c(), P(g, 1), g.m(e, null))
          : g &&
            (De(),
            R(g, 1, 1, () => {
              g = null;
            }),
            He()),
        (!a || ($ & 2 && s !== (s = Mr(_[1]) + " H-hcprya"))) &&
          u(e, "class", s),
        (!a || $ & 3) && we(e, "active", _[0]);
    },
    i(_) {
      a || (P(p, _), P(g), (a = !0));
    },
    o(_) {
      R(p, _), R(g), (a = !1);
    },
    d(_) {
      _ && d(e), p && p.d(_), g && g.d(), (c = !1), h();
    },
  };
}
function df(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  cl();
  const r = { duration: 200 };
  let { class: o = "" } = e,
    { value: s = "" } = e,
    { active: a = !1 } = e;
  function c() {
    t(0, (a = !a));
  }
  return (
    (l.$$set = (h) => {
      "class" in h && t(1, (o = h.class)),
        "value" in h && t(4, (s = h.value)),
        "active" in h && t(0, (a = h.active)),
        "$$scope" in h && t(5, (i = h.$$scope));
    }),
    [a, o, r, c, s, i, n]
  );
}
let vs = class extends ve {
  constructor(e) {
    super(), be(this, e, df, uf, _e, { class: 1, value: 4, active: 0 });
  }
};
const $e = {
  TotalAssets: "856fe9",
  Account: "3894f1",
  Deposit: "c66334",
  Withdraw: "bdcebd",
  SpotWallet: "241f20",
  ContractAccount: "e38858",
  InvestmentAccount: "624ad2",
  FundDetails: "cabae7",
  PnlDetails: "c0d65e",
  Spot: "6e2847",
  PNLHistory: "422572",
  OrderHistory: "a53805",
  TradeHistory: "6d3c53",
  Contract: "ccefc7",
  ConversionHistory: "d5b466",
  MarginAccount: "d3c1c1",
  MarginHistory: "acf7c5",
  BorrowHistory: "70b380",
  RepayHistory: "abbb73",
  InterestHistory: "fbb96f",
  FiatAccount: "c863f8",
  BuyCryptoHistory: "dd8bde",
  ProofOfReserves: "9f15c5",
  HistoryCenter: "c8aaeb",
  FundsHistory: "b91384",
  Funds: "68a0a4",
  LendingAccount: "846357",
  LoanHistory: "b2c951",
  DepositWithdrawHistory: "066504",
  TransferConvertHistory: "2c6fe3",
};
function hf(l) {
  let e,
    t,
    n,
    i,
    r = l[5]($e.Deposit) + "",
    o;
  return {
    c() {
      (e = v("i")),
        (t = N("")),
        (n = A()),
        (i = v("span")),
        (o = N(r)),
        this.h();
    },
    l(s) {
      e = b(s, "I", { class: !0 });
      var a = E(e);
      (t = L(a, "")),
        a.forEach(d),
        (n = C(s)),
        (i = b(s, "SPAN", { class: !0 }));
      var c = E(i);
      (o = L(c, r)), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont mr4 T1"), u(i, "class", "T1");
    },
    m(s, a) {
      M(s, e, a), f(e, t), M(s, n, a), M(s, i, a), f(i, o);
    },
    p(s, a) {
      a & 32 && r !== (r = s[5]($e.Deposit) + "") && J(o, r);
    },
    d(s) {
      s && d(e), s && d(n), s && d(i);
    },
  };
}
function mf(l) {
  let e,
    t,
    n,
    i,
    r = l[5]($e.Withdraw) + "",
    o;
  return {
    c() {
      (e = v("i")),
        (t = N("")),
        (n = A()),
        (i = v("span")),
        (o = N(r)),
        this.h();
    },
    l(s) {
      e = b(s, "I", { class: !0 });
      var a = E(e);
      (t = L(a, "")),
        a.forEach(d),
        (n = C(s)),
        (i = b(s, "SPAN", { class: !0 }));
      var c = E(i);
      (o = L(c, r)), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont mr4 T1"), u(i, "class", "T1");
    },
    m(s, a) {
      M(s, e, a), f(e, t), M(s, n, a), M(s, i, a), f(i, o);
    },
    p(s, a) {
      a & 32 && r !== (r = s[5]($e.Withdraw) + "") && J(o, r);
    },
    d(s) {
      s && d(e), s && d(n), s && d(i);
    },
  };
}
function pf(l) {
  let e,
    t,
    n = l[5]($e.SpotWallet) + "",
    i,
    r,
    o,
    s,
    a,
    c = l[5]($e.ContractAccount) + "",
    h,
    m,
    p,
    g,
    _,
    $,
    w = l[5]($e.InvestmentAccount) + "",
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U = l[8] && bs(l),
    y = l[7].isMain && $s(l),
    G = l[9] && Es(l);
  return {
    c() {
      (e = v("li")),
        (t = v("a")),
        (i = N(n)),
        (o = A()),
        (s = v("li")),
        (a = v("a")),
        (h = N(c)),
        (p = A()),
        U && U.c(),
        (g = A()),
        (_ = v("li")),
        ($ = v("a")),
        (k = N(w)),
        (T = A()),
        y && y.c(),
        (I = A()),
        G && G.c(),
        (D = it()),
        this.h();
    },
    l(H) {
      e = b(H, "LI", { class: !0 });
      var B = E(e);
      t = b(B, "A", { href: !0, class: !0 });
      var x = E(t);
      (i = L(x, n)),
        x.forEach(d),
        B.forEach(d),
        (o = C(H)),
        (s = b(H, "LI", { class: !0 }));
      var ne = E(s);
      a = b(ne, "A", { href: !0, class: !0 });
      var F = E(a);
      (h = L(F, c)),
        F.forEach(d),
        ne.forEach(d),
        (p = C(H)),
        U && U.l(H),
        (g = C(H)),
        (_ = b(H, "LI", { class: !0 }));
      var z = E(_);
      $ = b(z, "A", { href: !0, class: !0 });
      var se = E($);
      (k = L(se, w)),
        se.forEach(d),
        z.forEach(d),
        (T = C(H)),
        y && y.l(H),
        (I = C(H)),
        G && G.l(H),
        (D = it()),
        this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_SPOT_ACCOUNT))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t"),
        u(a, "href", (m = l[4](q.ASSETS_CONTRACT_ACCOUNT))),
        u(a, "class", "H-cunx3t"),
        u(s, "class", "H-cunx3t"),
        u($, "href", (S = l[4](q.ASSETS_INVESTMENT_ACCOUNT))),
        u($, "class", "H-cunx3t"),
        u(_, "class", "H-cunx3t");
    },
    m(H, B) {
      M(H, e, B),
        f(e, t),
        f(t, i),
        M(H, o, B),
        M(H, s, B),
        f(s, a),
        f(a, h),
        M(H, p, B),
        U && U.m(H, B),
        M(H, g, B),
        M(H, _, B),
        f(_, $),
        f($, k),
        M(H, T, B),
        y && y.m(H, B),
        M(H, I, B),
        G && G.m(H, B),
        M(H, D, B),
        O ||
          ((V = [
            me(t, "click", l[12]("Spot_Wallet")),
            me(a, "click", l[12]("Contract_Account")),
            me($, "click", l[12]("Investment_Account")),
          ]),
          (O = !0));
    },
    p(H, B) {
      B & 32 && n !== (n = H[5]($e.SpotWallet) + "") && J(i, n),
        B & 16 && r !== (r = H[4](q.ASSETS_SPOT_ACCOUNT)) && u(t, "href", r),
        B & 32 && c !== (c = H[5]($e.ContractAccount) + "") && J(h, c),
        B & 16 &&
          m !== (m = H[4](q.ASSETS_CONTRACT_ACCOUNT)) &&
          u(a, "href", m),
        H[8]
          ? U
            ? U.p(H, B)
            : ((U = bs(H)), U.c(), U.m(g.parentNode, g))
          : U && (U.d(1), (U = null)),
        B & 32 && w !== (w = H[5]($e.InvestmentAccount) + "") && J(k, w),
        B & 16 &&
          S !== (S = H[4](q.ASSETS_INVESTMENT_ACCOUNT)) &&
          u($, "href", S),
        H[7].isMain
          ? y
            ? y.p(H, B)
            : ((y = $s(H)), y.c(), y.m(I.parentNode, I))
          : y && (y.d(1), (y = null)),
        H[9]
          ? G
            ? G.p(H, B)
            : ((G = Es(H)), G.c(), G.m(D.parentNode, D))
          : G && (G.d(1), (G = null));
    },
    d(H) {
      H && d(e),
        H && d(o),
        H && d(s),
        H && d(p),
        U && U.d(H),
        H && d(g),
        H && d(_),
        H && d(T),
        y && y.d(H),
        H && d(I),
        G && G.d(H),
        H && d(D),
        (O = !1),
        pt(V);
    },
  };
}
function bs(l) {
  let e,
    t,
    n = l[5]($e.MarginAccount) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_MARGIN_ACCOUNT))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("Margin_Account"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.MarginAccount) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_MARGIN_ACCOUNT)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function $s(l) {
  let e,
    t,
    n = l[5]($e.FiatAccount) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_FIAT_ACCOUNT))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("Fiat_Account"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.FiatAccount) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_FIAT_ACCOUNT)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function Es(l) {
  let e,
    t,
    n = l[5]($e.LendingAccount) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_LENDING_ACCOUNT))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("Lending_Account"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.LendingAccount) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_LENDING_ACCOUNT)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function _f(l) {
  let e,
    t = !Jt.isTestNet && pf(l);
  return {
    c() {
      (e = v("ul")), t && t.c(), this.h();
    },
    l(n) {
      e = b(n, "UL", { class: !0 });
      var i = E(e);
      t && t.l(i), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "children H-cunx3t");
    },
    m(n, i) {
      M(n, e, i), t && t.m(e, null);
    },
    p(n, i) {
      Jt.isTestNet || t.p(n, i);
    },
    d(n) {
      n && d(e), t && t.d();
    },
  };
}
function gf(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[5]($e.Account) + "",
    s;
  return {
    c() {
      (e = v("div")),
        (t = v("span")),
        (n = v("i")),
        (i = N("")),
        (r = A()),
        (s = N(o)),
        this.h();
    },
    l(a) {
      e = b(a, "DIV", { slot: !0, class: !0 });
      var c = E(e);
      t = b(c, "SPAN", { class: !0 });
      var h = E(t);
      n = b(h, "I", { class: !0 });
      var m = E(n);
      (i = L(m, "")),
        m.forEach(d),
        (r = C(h)),
        (s = L(h, o)),
        h.forEach(d),
        c.forEach(d),
        this.h();
    },
    h() {
      u(n, "class", "iconfont f24 mr8 T1"),
        u(t, "class", "df aic T1"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger no-padding df aic jcsb H-cunx3t");
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, n), f(n, i), f(t, r), f(t, s);
    },
    p(a, c) {
      c & 32 && o !== (o = a[5]($e.Account) + "") && J(s, o);
    },
    d(a) {
      a && d(e);
    },
  };
}
function ws(l) {
  let e,
    t,
    n = l[5]($e.Spot) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_SPOT_HISTORY))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("SpotHistory"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.Spot) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_SPOT_HISTORY)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function ks(l) {
  let e,
    t,
    n = l[5]($e.MarginHistory) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_MARGIN_HISTORY))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("MarginHistory"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.MarginHistory) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_MARGIN_HISTORY)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function Ts(l) {
  let e,
    t,
    n = l[5]($e.LoanHistory) + "",
    i,
    r,
    o,
    s;
  return {
    c() {
      (e = v("li")), (t = v("a")), (i = N(n)), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0 });
      var c = E(e);
      t = b(c, "A", { href: !0, class: !0 });
      var h = E(t);
      (i = L(h, n)), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "href", (r = l[4](q.ASSETS_LENDING_HISTORY))),
        u(t, "class", "H-cunx3t"),
        u(e, "class", "H-cunx3t");
    },
    m(a, c) {
      M(a, e, c),
        f(e, t),
        f(t, i),
        o || ((s = me(t, "click", l[12]("LoanHistory"))), (o = !0));
    },
    p(a, c) {
      c & 32 && n !== (n = a[5]($e.LoanHistory) + "") && J(i, n),
        c & 16 && r !== (r = a[4](q.ASSETS_LENDING_HISTORY)) && u(t, "href", r);
    },
    d(a) {
      a && d(e), (o = !1), s();
    },
  };
}
function vf(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[5]($e.Contract) + "",
    s,
    a,
    c,
    h,
    m,
    p = l[5]($e.BuyCryptoHistory) + "",
    g,
    _,
    $,
    w,
    k,
    S = l[5]($e.FundsHistory) + "",
    T,
    I,
    D,
    O,
    V,
    U = l[5]($e.DepositWithdrawHistory) + "",
    y,
    G,
    H,
    B,
    x,
    ne = l[5]($e.TransferConvertHistory) + "",
    F,
    z,
    se,
    oe,
    le,
    re = l[10] && ws(l),
    te = l[8] && ks(l),
    ce = l[9] && Ts(l);
  return {
    c() {
      (e = v("ul")),
        re && re.c(),
        (t = A()),
        te && te.c(),
        (n = A()),
        (i = v("li")),
        (r = v("a")),
        (s = N(o)),
        (c = A()),
        (h = v("li")),
        (m = v("a")),
        (g = N(p)),
        ($ = A()),
        (w = v("li")),
        (k = v("a")),
        (T = N(S)),
        (D = A()),
        (O = v("li")),
        (V = v("a")),
        (y = N(U)),
        (H = A()),
        (B = v("li")),
        (x = v("a")),
        (F = N(ne)),
        (se = A()),
        ce && ce.c(),
        this.h();
    },
    l(ie) {
      e = b(ie, "UL", { class: !0 });
      var he = E(e);
      re && re.l(he),
        (t = C(he)),
        te && te.l(he),
        (n = C(he)),
        (i = b(he, "LI", { class: !0 }));
      var Ae = E(i);
      r = b(Ae, "A", { href: !0, class: !0 });
      var Ee = E(r);
      (s = L(Ee, o)),
        Ee.forEach(d),
        Ae.forEach(d),
        (c = C(he)),
        (h = b(he, "LI", { class: !0 }));
      var Ce = E(h);
      m = b(Ce, "A", { href: !0, class: !0 });
      var ue = E(m);
      (g = L(ue, p)),
        ue.forEach(d),
        Ce.forEach(d),
        ($ = C(he)),
        (w = b(he, "LI", { class: !0 }));
      var W = E(w);
      k = b(W, "A", { href: !0, class: !0 });
      var de = E(k);
      (T = L(de, S)),
        de.forEach(d),
        W.forEach(d),
        (D = C(he)),
        (O = b(he, "LI", { class: !0 }));
      var ae = E(O);
      V = b(ae, "A", { href: !0, class: !0 });
      var pe = E(V);
      (y = L(pe, U)),
        pe.forEach(d),
        ae.forEach(d),
        (H = C(he)),
        (B = b(he, "LI", { class: !0 }));
      var ee = E(B);
      x = b(ee, "A", { href: !0, class: !0 });
      var fe = E(x);
      (F = L(fe, ne)),
        fe.forEach(d),
        ee.forEach(d),
        (se = C(he)),
        ce && ce.l(he),
        he.forEach(d),
        this.h();
    },
    h() {
      u(r, "href", (a = l[4](q.ASSETS_CONTRACT_HISTORY))),
        u(r, "class", "H-cunx3t"),
        u(i, "class", "H-cunx3t"),
        u(m, "href", (_ = l[4](q.ASSETS_BUY_CRYPTO_HISTORY))),
        u(m, "class", "H-cunx3t"),
        u(h, "class", "H-cunx3t"),
        u(k, "href", (I = l[4](q.ASSETS_FUNDS))),
        u(k, "class", "H-cunx3t"),
        u(w, "class", "H-cunx3t"),
        u(V, "href", (G = l[4](q.ASSETS_DEPOSIT_WITHDRAW_HISTORY))),
        u(V, "class", "H-cunx3t"),
        u(O, "class", "H-cunx3t"),
        u(x, "href", (z = l[4](q.ASSETS_TRANSFER_CONVERT_HISTORY))),
        u(x, "class", "H-cunx3t"),
        u(B, "class", "H-cunx3t"),
        u(e, "class", "children H-cunx3t");
    },
    m(ie, he) {
      M(ie, e, he),
        re && re.m(e, null),
        f(e, t),
        te && te.m(e, null),
        f(e, n),
        f(e, i),
        f(i, r),
        f(r, s),
        f(e, c),
        f(e, h),
        f(h, m),
        f(m, g),
        f(e, $),
        f(e, w),
        f(w, k),
        f(k, T),
        f(e, D),
        f(e, O),
        f(O, V),
        f(V, y),
        f(e, H),
        f(e, B),
        f(B, x),
        f(x, F),
        f(e, se),
        ce && ce.m(e, null),
        oe ||
          ((le = [
            me(r, "click", l[12]("ContractHistory")),
            me(m, "click", l[12]("BuyCryptoHistory")),
            me(k, "click", l[12]("FundsHistory")),
            me(V, "click", l[12]("DepositWithdrawHistory")),
            me(x, "click", l[12]("TransferConvertHistory")),
          ]),
          (oe = !0));
    },
    p(ie, he) {
      ie[10]
        ? re
          ? re.p(ie, he)
          : ((re = ws(ie)), re.c(), re.m(e, t))
        : re && (re.d(1), (re = null)),
        ie[8]
          ? te
            ? te.p(ie, he)
            : ((te = ks(ie)), te.c(), te.m(e, n))
          : te && (te.d(1), (te = null)),
        he & 32 && o !== (o = ie[5]($e.Contract) + "") && J(s, o),
        he & 16 &&
          a !== (a = ie[4](q.ASSETS_CONTRACT_HISTORY)) &&
          u(r, "href", a),
        he & 32 && p !== (p = ie[5]($e.BuyCryptoHistory) + "") && J(g, p),
        he & 16 &&
          _ !== (_ = ie[4](q.ASSETS_BUY_CRYPTO_HISTORY)) &&
          u(m, "href", _),
        he & 32 && S !== (S = ie[5]($e.FundsHistory) + "") && J(T, S),
        he & 16 && I !== (I = ie[4](q.ASSETS_FUNDS)) && u(k, "href", I),
        he & 32 && U !== (U = ie[5]($e.DepositWithdrawHistory) + "") && J(y, U),
        he & 16 &&
          G !== (G = ie[4](q.ASSETS_DEPOSIT_WITHDRAW_HISTORY)) &&
          u(V, "href", G),
        he & 32 &&
          ne !== (ne = ie[5]($e.TransferConvertHistory) + "") &&
          J(F, ne),
        he & 16 &&
          z !== (z = ie[4](q.ASSETS_TRANSFER_CONVERT_HISTORY)) &&
          u(x, "href", z),
        ie[9]
          ? ce
            ? ce.p(ie, he)
            : ((ce = Ts(ie)), ce.c(), ce.m(e, null))
          : ce && (ce.d(1), (ce = null));
    },
    d(ie) {
      ie && d(e), re && re.d(), te && te.d(), ce && ce.d(), (oe = !1), pt(le);
    },
  };
}
function bf(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[5]($e.HistoryCenter) + "",
    s;
  return {
    c() {
      (e = v("div")),
        (t = v("span")),
        (n = v("i")),
        (i = N("")),
        (r = A()),
        (s = N(o)),
        this.h();
    },
    l(a) {
      e = b(a, "DIV", { slot: !0, class: !0 });
      var c = E(e);
      t = b(c, "SPAN", { class: !0 });
      var h = E(t);
      n = b(h, "I", { class: !0 });
      var m = E(n);
      (i = L(m, "")),
        m.forEach(d),
        (r = C(h)),
        (s = L(h, o)),
        h.forEach(d),
        c.forEach(d),
        this.h();
    },
    h() {
      u(n, "class", "iconfont f24 mr8 T1"),
        u(t, "class", "df aic T1"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger no-padding df aic jcsb H-cunx3t");
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, n), f(n, i), f(t, r), f(t, s);
    },
    p(a, c) {
      c & 32 && o !== (o = a[5]($e.HistoryCenter) + "") && J(s, o);
    },
    d(a) {
      a && d(e);
    },
  };
}
function $f(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[5]($e.TotalAssets) + "",
    s,
    a,
    c,
    h,
    m,
    p = (l[6] ? l[5](Xt.AccountUpgrading) : l[1]) + "",
    g,
    _,
    $,
    w = (l[6] ? l[5](Xt.AccountUpgrading) : `≈ ${l[2]}`) + "",
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U,
    y,
    G,
    H,
    B,
    x,
    ne,
    F,
    z,
    se,
    oe,
    le,
    re = l[5]($e.ProofOfReserves) + "",
    te,
    ce,
    ie,
    he,
    Ae,
    Ee,
    Ce,
    ue,
    W;
  return (
    (I = new ut({
      props: {
        class: "asset-btn",
        size: "small",
        type: "ghost",
        href: l[13](),
        $$slots: { default: [hf] },
        $$scope: { ctx: l },
      },
    })),
    I.$on("click", l[12]("Deposit")),
    (O = new ut({
      props: {
        class: "asset-btn",
        size: "small",
        type: "ghost",
        href: l[4](q.ASSETS_WITHDRAWAL),
        disabled: l[7].isSub,
        $$slots: { default: [mf] },
        $$scope: { ctx: l },
      },
    })),
    O.$on("click", l[12]("Withdraw")),
    (G = new vs({
      props: { $$slots: { trigger: [gf], default: [_f] }, $$scope: { ctx: l } },
    })),
    (B = new vs({
      props: {
        class: "mt8",
        $$slots: { trigger: [bf], default: [vf] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (i = v("div")),
          (r = v("div")),
          (s = N(o)),
          (a = A()),
          (c = v("i")),
          (h = A()),
          (m = v("div")),
          (g = N(p)),
          (_ = A()),
          ($ = v("div")),
          (k = N(w)),
          (S = A()),
          (T = v("div")),
          K(I.$$.fragment),
          (D = A()),
          K(O.$$.fragment),
          (V = A()),
          (U = v("div")),
          (y = v("ul")),
          K(G.$$.fragment),
          (H = A()),
          K(B.$$.fragment),
          (x = A()),
          (ne = v("li")),
          (F = v("a")),
          (z = v("span")),
          (se = v("i")),
          (oe = N("")),
          (le = A()),
          (te = N(re)),
          (ce = A()),
          (ie = v("i")),
          (he = N("")),
          this.h();
      },
      l(de) {
        e = b(de, "DIV", { class: !0 });
        var ae = E(e);
        t = b(ae, "DIV", { class: !0 });
        var pe = E(t);
        n = b(pe, "DIV", { class: !0 });
        var ee = E(n);
        i = b(ee, "DIV", { class: !0 });
        var fe = E(i);
        r = b(fe, "DIV", { class: !0 });
        var Ie = E(r);
        (s = L(Ie, o)),
          Ie.forEach(d),
          (a = C(fe)),
          (c = b(fe, "I", { class: !0 }));
        var Me = E(c);
        Me.forEach(d),
          fe.forEach(d),
          (h = C(ee)),
          (m = b(ee, "DIV", { class: !0 }));
        var je = E(m);
        (g = L(je, p)),
          je.forEach(d),
          (_ = C(ee)),
          ($ = b(ee, "DIV", { class: !0 }));
        var Ve = E($);
        (k = L(Ve, w)),
          Ve.forEach(d),
          ee.forEach(d),
          (S = C(pe)),
          (T = b(pe, "DIV", { class: !0 }));
        var rt = E(T);
        Z(I.$$.fragment, rt),
          (D = C(rt)),
          Z(O.$$.fragment, rt),
          rt.forEach(d),
          pe.forEach(d),
          (V = C(ae)),
          (U = b(ae, "DIV", { class: !0 }));
        var Ke = E(U);
        y = b(Ke, "UL", {});
        var Be = E(y);
        Z(G.$$.fragment, Be),
          (H = C(Be)),
          Z(B.$$.fragment, Be),
          (x = C(Be)),
          (ne = b(Be, "LI", { class: !0 }));
        var Ze = E(ne);
        F = b(Ze, "A", { class: !0, href: !0, target: !0 });
        var Qe = E(F);
        z = b(Qe, "SPAN", { class: !0 });
        var lt = E(z);
        se = b(lt, "I", { class: !0 });
        var dt = E(se);
        (oe = L(dt, "")),
          dt.forEach(d),
          (le = C(lt)),
          (te = L(lt, re)),
          lt.forEach(d),
          (ce = C(Qe)),
          (ie = b(Qe, "I", { class: !0 }));
        var Dt = E(ie);
        (he = L(Dt, "")),
          Dt.forEach(d),
          Qe.forEach(d),
          Ze.forEach(d),
          Be.forEach(d),
          Ke.forEach(d),
          ae.forEach(d),
          this.h();
      },
      h() {
        u(r, "class", "total f16 H-cunx3t"),
          u(c, "class", "eyes iconfont ml4 f20 T2 usn H-cunx3t"),
          u(i, "class", "df aic lh20"),
          u(m, "class", "asset-btc mt16 f18 lh20 fw4 H-cunx3t"),
          u($, "class", "asset-local mt8 f14 T3 H-cunx3t"),
          u(n, "class", "ph24 pv16 cp"),
          u(T, "class", "btn-con df aic jcsb f16 ph24 mb16 H-cunx3t"),
          u(t, "class", "header db fw2 H-cunx3t"),
          u(se, "class", "iconfont f24 mr10 T1"),
          u(z, "class", "df aic T1"),
          u(ie, "class", "iconfont arrow db f16 H-cunx3t"),
          u(F, "class", "df jcsb aic noa H-cunx3t"),
          u(F, "href", (Ae = l[4](q.ASSETS_PROOF_OF_RESERVES))),
          u(F, "target", "_self"),
          u(ne, "class", "trigger single-trigger mt8 H-cunx3t"),
          u(U, "class", "p16 lh32 wsn f14"),
          u(e, "class", "wrap T2 H-cunx3t");
      },
      m(de, ae) {
        M(de, e, ae),
          f(e, t),
          f(t, n),
          f(n, i),
          f(i, r),
          f(r, s),
          f(i, a),
          f(i, c),
          (c.innerHTML = l[3]),
          f(n, h),
          f(n, m),
          f(m, g),
          f(n, _),
          f(n, $),
          f($, k),
          f(t, S),
          f(t, T),
          Q(I, T, null),
          f(T, D),
          Q(O, T, null),
          f(e, V),
          f(e, U),
          f(U, y),
          Q(G, y, null),
          f(y, H),
          Q(B, y, null),
          f(y, x),
          f(y, ne),
          f(ne, F),
          f(F, z),
          f(z, se),
          f(se, oe),
          f(z, le),
          f(z, te),
          f(F, ce),
          f(F, ie),
          f(ie, he),
          (Ce = !0),
          ue ||
            ((W = [
              me(c, "click", Sa(l[11])),
              me(n, "click", l[18]),
              me(F, "click", l[12]("Proof_Of_Reserves")),
            ]),
            (ue = !0));
      },
      p(de, [ae]) {
        (l = de),
          (!Ce || ae & 32) && o !== (o = l[5]($e.TotalAssets) + "") && J(s, o),
          (!Ce || ae & 8) && (c.innerHTML = l[3]),
          (!Ce || ae & 98) &&
            p !== (p = (l[6] ? l[5](Xt.AccountUpgrading) : l[1]) + "") &&
            J(g, p),
          (!Ce || ae & 100) &&
            w !== (w = (l[6] ? l[5](Xt.AccountUpgrading) : `≈ ${l[2]}`) + "") &&
            J(k, w);
        const pe = {};
        ae & 524320 && (pe.$$scope = { dirty: ae, ctx: l }), I.$set(pe);
        const ee = {};
        ae & 16 && (ee.href = l[4](q.ASSETS_WITHDRAWAL)),
          ae & 128 && (ee.disabled = l[7].isSub),
          ae & 524320 && (ee.$$scope = { dirty: ae, ctx: l }),
          O.$set(ee);
        const fe = {};
        ae & 525232 && (fe.$$scope = { dirty: ae, ctx: l }), G.$set(fe);
        const Ie = {};
        ae & 526128 && (Ie.$$scope = { dirty: ae, ctx: l }),
          B.$set(Ie),
          (!Ce || ae & 32) &&
            re !== (re = l[5]($e.ProofOfReserves) + "") &&
            J(te, re),
          (!Ce ||
            (ae & 16 && Ae !== (Ae = l[4](q.ASSETS_PROOF_OF_RESERVES)))) &&
            u(F, "href", Ae);
      },
      i(de) {
        Ce ||
          (P(I.$$.fragment, de),
          P(O.$$.fragment, de),
          P(G.$$.fragment, de),
          P(B.$$.fragment, de),
          Ee ||
            Un(() => {
              (Ee = fl(e, nl, l[0] ? { x: -220, duration: 200 } : {})),
                Ee.start();
            }),
          (Ce = !0));
      },
      o(de) {
        R(I.$$.fragment, de),
          R(O.$$.fragment, de),
          R(G.$$.fragment, de),
          R(B.$$.fragment, de),
          (Ce = !1);
      },
      d(de) {
        de && d(e), X(I), X(O), X(G), X(B), (ue = !1), pt(W);
      },
    }
  );
}
function Is(l, e, t) {
  return e ? "****** " + t : l + " " + t;
}
function Ef(l, e, t) {
  let n, i, r, o, s, a, c, h, m, p, g, _, $, w;
  Y(l, Ye, (O) => t(4, (s = O))),
    Y(l, Wl, (O) => t(15, (a = O))),
    Y(l, ba, (O) => t(16, (c = O))),
    Y(l, $a, (O) => t(17, (h = O))),
    Y(l, Ne, (O) => t(5, (m = O))),
    Y(l, Ea, (O) => t(6, (p = O))),
    Y(l, ln, (O) => t(7, (g = O))),
    Y(l, va, (O) => t(8, (_ = O))),
    Y(l, ja, (O) => t(9, ($ = O))),
    Y(l, qa, (O) => t(10, (w = O)));
  let { useTransition: k } = e;
  function S(O) {
    O.preventDefault(), yi("hideAsset", !a.hideAsset).then();
  }
  function T(O) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: "Assets_" + O,
      });
    };
  }
  function I() {
    return wa(s);
  }
  const D = () => location.assign(s(q.ASSETS_OVERVIEW));
  return (
    (l.$$set = (O) => {
      "useTransition" in O && t(0, (k = O.useTransition));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 32768 && t(14, (n = a.hideAsset)),
        l.$$.dirty & 16384 && t(3, (i = n ? "&#xe61a;" : "&#xe61b;")),
        l.$$.dirty & 147456 && t(2, (r = Is(h.btc, n, "BTC"))),
        l.$$.dirty & 212992 && t(1, (o = Is(h.money, n, c)));
    }),
    [k, o, r, i, s, m, p, g, _, $, w, S, T, I, n, a, c, h, D]
  );
}
let wf = class extends ve {
  constructor(e) {
    super(), be(this, e, Ef, $f, _e, { useTransition: 0 });
  }
};
function As(l, e, t) {
  const n = l.slice();
  return (n[17] = e[t]), n;
}
function kf(l) {
  let e,
    t,
    n,
    i,
    r = l[1]($e.Deposit) + "",
    o;
  return {
    c() {
      (e = v("i")),
        (t = N("")),
        (n = A()),
        (i = v("span")),
        (o = N(r)),
        this.h();
    },
    l(s) {
      e = b(s, "I", { class: !0 });
      var a = E(e);
      (t = L(a, "")), a.forEach(d), (n = C(s)), (i = b(s, "SPAN", {}));
      var c = E(i);
      (o = L(c, r)), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont mr4");
    },
    m(s, a) {
      M(s, e, a), f(e, t), M(s, n, a), M(s, i, a), f(i, o);
    },
    p(s, a) {
      a & 2 && r !== (r = s[1]($e.Deposit) + "") && J(o, r);
    },
    d(s) {
      s && d(e), s && d(n), s && d(i);
    },
  };
}
function Tf(l) {
  let e,
    t,
    n,
    i,
    r = l[1]($e.Withdraw) + "",
    o;
  return {
    c() {
      (e = v("i")),
        (t = N("")),
        (n = A()),
        (i = v("span")),
        (o = N(r)),
        this.h();
    },
    l(s) {
      e = b(s, "I", { class: !0 });
      var a = E(e);
      (t = L(a, "")), a.forEach(d), (n = C(s)), (i = b(s, "SPAN", {}));
      var c = E(i);
      (o = L(c, r)), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont mr4");
    },
    m(s, a) {
      M(s, e, a), f(e, t), M(s, n, a), M(s, i, a), f(i, o);
    },
    p(s, a) {
      a & 2 && r !== (r = s[1]($e.Withdraw) + "") && J(o, r);
    },
    d(s) {
      s && d(e), s && d(n), s && d(i);
    },
  };
}
function Cs(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p = l[17].label + "",
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I;
  return {
    c() {
      (e = v("li")),
        (t = v("a")),
        (n = v("span")),
        (i = v("img")),
        (s = A()),
        (a = v("img")),
        (m = A()),
        (g = N(p)),
        (_ = A()),
        ($ = v("i")),
        (w = N("")),
        (S = A()),
        this.h();
    },
    l(D) {
      e = b(D, "LI", { class: !0 });
      var O = E(e);
      t = b(O, "A", { class: !0, href: !0 });
      var V = E(t);
      n = b(V, "SPAN", { class: !0 });
      var U = E(n);
      (i = b(U, "IMG", { class: !0, width: !0, src: !0, alt: !0 })),
        (s = C(U)),
        (a = b(U, "IMG", { class: !0, width: !0, src: !0, alt: !0 })),
        (m = C(U)),
        (g = L(U, p)),
        U.forEach(d),
        (_ = C(V)),
        ($ = b(V, "I", { class: !0 }));
      var y = E($);
      (w = L(y, "")),
        y.forEach(d),
        V.forEach(d),
        (S = C(O)),
        O.forEach(d),
        this.h();
    },
    h() {
      u(i, "class", "light-icon default dib mr8 H-1xwaw0j"),
        u(i, "width", "24"),
        ke(i.src, (r = l[17].icon)) || u(i, "src", r),
        u(i, "alt", (o = l[17].label)),
        u(a, "class", "dark-icon default dib mr8 H-1xwaw0j"),
        u(a, "width", "24"),
        ke(a.src, (c = l[17].iconDark)) || u(a, "src", c),
        u(a, "alt", (h = l[17].label)),
        u(n, "class", "df aic"),
        u($, "class", "iconfont arrow db f16 H-1xwaw0j"),
        u(t, "class", "df jcsb aic noa H-1xwaw0j"),
        u(t, "href", (k = l[17].link)),
        u(e, "class", "trigger H-1xwaw0j");
    },
    m(D, O) {
      M(D, e, O),
        f(e, t),
        f(t, n),
        f(n, i),
        f(n, s),
        f(n, a),
        f(n, m),
        f(n, g),
        f(t, _),
        f(t, $),
        f($, w),
        f(e, S),
        T ||
          ((I = me(t, "click", function () {
            at(l[9](l[17].sdType)) && l[9](l[17].sdType).apply(this, arguments);
          })),
          (T = !0));
    },
    p(D, O) {
      (l = D),
        O & 32 && !ke(i.src, (r = l[17].icon)) && u(i, "src", r),
        O & 32 && o !== (o = l[17].label) && u(i, "alt", o),
        O & 32 && !ke(a.src, (c = l[17].iconDark)) && u(a, "src", c),
        O & 32 && h !== (h = l[17].label) && u(a, "alt", h),
        O & 32 && p !== (p = l[17].label + "") && J(g, p),
        O & 32 && k !== (k = l[17].link) && u(t, "href", k);
    },
    d(D) {
      D && d(e), (T = !1), I();
    },
  };
}
function If(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[1]($e.TotalAssets) + "",
    s,
    a,
    c,
    h,
    m,
    p = (l[6] ? l[1](Xt.AccountUpgrading) : l[2]) + "",
    g,
    _,
    $,
    w = (l[6] ? l[1](Xt.AccountUpgrading) : `≈ ${l[3]}`) + "",
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U,
    y,
    G,
    H,
    B,
    x;
  (I = new ut({
    props: {
      class: "asset-btn",
      size: "small",
      type: "ghost",
      href: l[0](q.ASSETS_DEPOSIT),
      $$slots: { default: [kf] },
      $$scope: { ctx: l },
    },
  })),
    I.$on("click", l[9]("Deposit")),
    (O = new ut({
      props: {
        class: "asset-btn",
        size: "small",
        type: "ghost",
        href: l[0](q.ASSETS_WITHDRAWAL),
        disabled: l[7].isSub,
        $$slots: { default: [Tf] },
        $$scope: { ctx: l },
      },
    })),
    O.$on("click", l[9]("Withdraw"));
  let ne = l[5],
    F = [];
  for (let z = 0; z < ne.length; z += 1) F[z] = Cs(As(l, ne, z));
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (i = v("div")),
        (r = v("div")),
        (s = N(o)),
        (a = A()),
        (c = v("i")),
        (h = A()),
        (m = v("div")),
        (g = N(p)),
        (_ = A()),
        ($ = v("div")),
        (k = N(w)),
        (S = A()),
        (T = v("div")),
        K(I.$$.fragment),
        (D = A()),
        K(O.$$.fragment),
        (V = A()),
        (U = v("div")),
        (y = v("ul"));
      for (let z = 0; z < F.length; z += 1) F[z].c();
      this.h();
    },
    l(z) {
      e = b(z, "DIV", { class: !0 });
      var se = E(e);
      t = b(se, "DIV", { class: !0 });
      var oe = E(t);
      n = b(oe, "DIV", { class: !0 });
      var le = E(n);
      i = b(le, "DIV", { class: !0 });
      var re = E(i);
      r = b(re, "DIV", { class: !0 });
      var te = E(r);
      (s = L(te, o)),
        te.forEach(d),
        (a = C(re)),
        (c = b(re, "I", { class: !0 }));
      var ce = E(c);
      ce.forEach(d),
        re.forEach(d),
        (h = C(le)),
        (m = b(le, "DIV", { class: !0 }));
      var ie = E(m);
      (g = L(ie, p)),
        ie.forEach(d),
        (_ = C(le)),
        ($ = b(le, "DIV", { class: !0 }));
      var he = E($);
      (k = L(he, w)),
        he.forEach(d),
        le.forEach(d),
        (S = C(oe)),
        (T = b(oe, "DIV", { class: !0 }));
      var Ae = E(T);
      Z(I.$$.fragment, Ae),
        (D = C(Ae)),
        Z(O.$$.fragment, Ae),
        Ae.forEach(d),
        oe.forEach(d),
        (V = C(se)),
        (U = b(se, "DIV", { class: !0 }));
      var Ee = E(U);
      y = b(Ee, "UL", {});
      var Ce = E(y);
      for (let ue = 0; ue < F.length; ue += 1) F[ue].l(Ce);
      Ce.forEach(d), Ee.forEach(d), se.forEach(d), this.h();
    },
    h() {
      u(r, "class", "total f14 H-1xwaw0j"),
        u(c, "class", "eyes iconfont ml4 f20 T2 usn H-1xwaw0j"),
        u(i, "class", "df aic lh20"),
        u(m, "class", "asset-btc mt16 f18 lh20 fw4 H-1xwaw0j"),
        u($, "class", "asset-local mt8 f14 T3 H-1xwaw0j"),
        u(n, "class", "ph24 pv16 cp"),
        u(T, "class", "btn-con df aic jcsb f16 ph24 mb16 H-1xwaw0j"),
        u(t, "class", "header db fw2 H-1xwaw0j"),
        u(U, "class", "p16 lh32 wsn f14"),
        u(e, "class", "wrap T2 H-1xwaw0j");
    },
    m(z, se) {
      M(z, e, se),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, r),
        f(r, s),
        f(i, a),
        f(i, c),
        (c.innerHTML = l[4]),
        f(n, h),
        f(n, m),
        f(m, g),
        f(n, _),
        f(n, $),
        f($, k),
        f(t, S),
        f(t, T),
        Q(I, T, null),
        f(T, D),
        Q(O, T, null),
        f(e, V),
        f(e, U),
        f(U, y);
      for (let oe = 0; oe < F.length; oe += 1) F[oe] && F[oe].m(y, null);
      (H = !0),
        B ||
          ((x = [me(c, "click", Sa(l[8])), me(n, "click", l[14])]), (B = !0));
    },
    p(z, [se]) {
      (!H || se & 2) && o !== (o = z[1]($e.TotalAssets) + "") && J(s, o),
        (!H || se & 16) && (c.innerHTML = z[4]),
        (!H || se & 70) &&
          p !== (p = (z[6] ? z[1](Xt.AccountUpgrading) : z[2]) + "") &&
          J(g, p),
        (!H || se & 74) &&
          w !== (w = (z[6] ? z[1](Xt.AccountUpgrading) : `≈ ${z[3]}`) + "") &&
          J(k, w);
      const oe = {};
      se & 1 && (oe.href = z[0](q.ASSETS_DEPOSIT)),
        se & 1048578 && (oe.$$scope = { dirty: se, ctx: z }),
        I.$set(oe);
      const le = {};
      if (
        (se & 1 && (le.href = z[0](q.ASSETS_WITHDRAWAL)),
        se & 128 && (le.disabled = z[7].isSub),
        se & 1048578 && (le.$$scope = { dirty: se, ctx: z }),
        O.$set(le),
        se & 544)
      ) {
        ne = z[5];
        let re;
        for (re = 0; re < ne.length; re += 1) {
          const te = As(z, ne, re);
          F[re]
            ? F[re].p(te, se)
            : ((F[re] = Cs(te)), F[re].c(), F[re].m(y, null));
        }
        for (; re < F.length; re += 1) F[re].d(1);
        F.length = ne.length;
      }
    },
    i(z) {
      H ||
        (P(I.$$.fragment, z),
        P(O.$$.fragment, z),
        G ||
          Un(() => {
            (G = fl(e, nl, { x: -220, duration: 200 })), G.start();
          }),
        (H = !0));
    },
    o(z) {
      R(I.$$.fragment, z), R(O.$$.fragment, z), (H = !1);
    },
    d(z) {
      z && d(e), X(I), X(O), yn(F, z), (B = !1), pt(x);
    },
  };
}
function Ss(l, e, t) {
  return e ? "****** " + t : l + " " + t;
}
function Af(l, e, t) {
  let n, i, r, o, s, a, c, h, m, p, g, _;
  Y(l, Wl, (I) => t(11, (a = I))),
    Y(l, ba, (I) => t(12, (c = I))),
    Y(l, $a, (I) => t(13, (h = I))),
    Y(l, Ye, (I) => t(0, (m = I))),
    Y(l, Ne, (I) => t(1, (p = I))),
    Y(l, Ea, (I) => t(6, (g = I))),
    Y(l, ln, (I) => t(7, (_ = I)));
  const $ = {
    fundsIcon:
      "https://img.phemex.com/v1/6349a723-0651-4ab5-89ce-38b5e21a9621/funds-icon.png",
    fundsIconActive:
      "https://img.phemex.com/v1/a967fe39-176f-40bd-aad2-b3e7aad98168/funds-icon-active.png",
    fundsIconDark:
      "https://img.phemex.com/v1/77339162-4ee5-431f-93f9-24e0770489e8/funds-icon-dark.png",
    fundsIconActiveDark:
      "https://img.phemex.com/v1/816b0520-7020-49c0-9fa9-59ac9d9acb51/funds-icon-active-dark.png",
    orderHistoryIcon:
      "https://img.phemex.com/v1/a4f7bbd9-bc1e-4071-9c9e-19a3af5c6c29/order-history-icon.png",
    orderHistoryIconActive:
      "https://img.phemex.com/v1/7b991a53-f120-41ed-971d-a60ca2e9a806/order-history-icon-active.png",
    orderHistoryIconDark:
      "https://img.phemex.com/v1/b2319d3d-0583-4e8a-b1db-65a4458abd69/order-history-icon-dark.png",
    orderHistoryIconActiveDark:
      "https://img.phemex.com/v1/8e373171-643a-4c5a-9afd-827d68a8696f/order-history-icon-active-dark.png",
    borrowDetailsIcon:
      "https://img.phemex.com/v1/41887cc6-db84-46fc-a75a-d35e6c7e90bf/borrow-details-icon.png",
    borrowDetailsIconActive:
      "https://img.phemex.com/v1/82c3af36-83f7-4430-946b-49a7871592b8/borrow-details-icon-active.png",
    borrowDetailsIconDark:
      "https://img.phemex.com/v1/7c44e7ff-f311-41fb-b087-5e614b8ba42d/borrow-details-icon-dark.png",
    borrowDetailsIconActiveDark:
      "https://img.phemex.com/v1/1827007c-dfec-4853-951a-fcc32f05cb76/borrow-details-icon-active-dark.png",
    fundAccountIcon:
      "https://img.phemex.com/v1/5b32bc79-a5a5-482d-a21f-1e0df7456d13/fund-account-icon.png",
    fundAccountIconActive:
      "https://img.phemex.com/v1/7e107069-1f5b-45d1-a713-f1ed2221cf15/fund-account-icon-active.png",
    fundAccountIconDark:
      "https://img.phemex.com/v1/b5e5b173-8374-4bac-8f79-69e521e00e15/fund-account-icon-dark.png",
    fundAccountIconActiveDark:
      "https://img.phemex.com/v1/315f10a3-ec2a-4b25-835f-89e6f079d69a/fund-account-icon-active-dark.png",
    contractAccountIcon:
      "https://img.phemex.com/v1/a7590609-2cc1-4875-b9c9-5e5d0bbad549/contract-account-icon.png",
    contractAccountIconActive:
      "https://img.phemex.com/v1/49e4fed5-0224-441e-8ebe-fb0a9a680289/contract-account-icon-active.png",
    contractAccountIconDark:
      "https://img.phemex.com/v1/5d29820b-3e2f-4c6b-b8a1-3428c627204e/contract-account-icon-dark.png",
    contractAccountIconActiveDark:
      "https://img.phemex.com/v1/0cabd214-48cb-441a-8aad-2e74ce0fb905/contract-account-icon-active-dark.png",
    tradingAccountIcon:
      "https://img.phemex.com/v1/5bc7f549-fcff-49d4-85bd-1741c006db51/trading-account-icon.png",
    tradingAccountIconActive:
      "https://img.phemex.com/v1/377b6512-d8a3-4b7d-9df5-0b7b4d311968/trading-account-icon-active.png",
    tradingAccountIconActiveDark:
      "https://img.phemex.com/v1/de0e883d-ac1d-4a06-adca-e3338a14847f/trading-account-icon-active-dark.png",
    tradingAccountIconDark:
      "https://img.phemex.com/v1/666b6fdf-9d54-4cf1-9af4-a552a4eec68c/trading-account-icon-dark.png",
  };
  function w(I) {
    I.preventDefault(), yi("hideAsset", !a.hideAsset).then();
  }
  function k(I) {
    return function () {
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: "Assets_" + I,
      });
    };
  }
  function S(I, D) {
    return [
      {
        link: D(q.ASSETS_TRADING_ACCOUNT),
        sdType: "Trading_Account",
        icon: $.tradingAccountIcon,
        iconActive: $.tradingAccountIconActive,
        iconDark: $.tradingAccountIconDark,
        iconActiveDark: $.tradingAccountIconActiveDark,
        label: I(Gr.TradingAccount),
      },
      {
        link: D(q.ASSETS_FUND_ACCOUNT),
        sdType: "Fund_Account",
        icon: $.fundAccountIcon,
        iconActive: $.fundAccountIconActive,
        iconDark: $.fundAccountIconDark,
        iconActiveDark: $.fundAccountIconActiveDark,
        label: I(Gr.FundingAccount),
      },
      {
        link: D(q.ASSETS_CONTRACT_ACCOUNT),
        sdType: "Contract_Account",
        icon: $.contractAccountIcon,
        iconActive: $.contractAccountIconActive,
        iconDark: $.contractAccountIconDark,
        iconActiveDark: $.contractAccountIconActiveDark,
        label: I($e.ContractAccount),
      },
      {
        link: D(q.ASSETS_FUNDS),
        sdType: "Funds",
        icon: $.fundsIcon,
        iconActive: $.fundsIconActive,
        iconDark: $.fundsIconDark,
        iconActiveDark: $.fundsIconActiveDark,
        label: I($e.FundDetails),
      },
      {
        link: D(q.ASSETS_ORDER_HISTORY_GROUP),
        sdType: "Order_History",
        icon: $.orderHistoryIcon,
        iconActive: $.orderHistoryIconActive,
        iconDark: $.orderHistoryIconDark,
        iconActiveDark: $.orderHistoryIconActiveDark,
        label: I($e.OrderHistory),
      },
    ];
  }
  const T = () => location.assign(m(q.ASSETS_OVERVIEW));
  return (
    (l.$$.update = () => {
      l.$$.dirty & 3 && t(5, (n = S(p, m))),
        l.$$.dirty & 2048 && t(10, (i = a.hideAsset)),
        l.$$.dirty & 1024 && t(4, (r = i ? "&#xe61a;" : "&#xe61b;")),
        l.$$.dirty & 9216 && t(3, (o = Ss(h.btc, i, "BTC"))),
        l.$$.dirty & 13312 && t(2, (s = Ss(h.money, i, c)));
    }),
    [m, p, s, o, r, n, g, _, w, k, i, a, c, h, T]
  );
}
let Cf = class extends ve {
  constructor(e) {
    super(), be(this, e, Af, If, _e, {});
  }
};
function Sf(l) {
  let e, t;
  return (
    (e = new wf({ props: { useTransition: l[0] } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 1 && (r.useTransition = n[0]), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Df(l) {
  let e, t;
  return (
    (e = new Cf({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Hf(l) {
  let e, t, n, i;
  const r = [Df, Sf],
    o = [];
  function s(a, c) {
    return a[1] ? 0 : 1;
  }
  return (
    (t = s(l)),
    (n = o[t] = r[t](l)),
    {
      c() {
        (e = v("div")), n.c(), this.h();
      },
      l(a) {
        e = b(a, "DIV", { class: !0 });
        var c = E(e);
        n.l(c), c.forEach(d), this.h();
      },
      h() {
        u(e, "class", "wrap br12 B2 ovh H-whuxj");
      },
      m(a, c) {
        M(a, e, c), o[t].m(e, null), (i = !0);
      },
      p(a, [c]) {
        let h = t;
        (t = s(a)),
          t === h
            ? o[t].p(a, c)
            : (De(),
              R(o[h], 1, 1, () => {
                o[h] = null;
              }),
              He(),
              (n = o[t]),
              n ? n.p(a, c) : ((n = o[t] = r[t](a)), n.c()),
              P(n, 1),
              n.m(e, null));
      },
      i(a) {
        i || (P(n), (i = !0));
      },
      o(a) {
        R(n), (i = !1);
      },
      d(a) {
        a && d(e), o[t].d();
      },
    }
  );
}
function Pf(l, e, t) {
  let n;
  Y(l, za, (r) => t(1, (n = r)));
  let i = !1;
  return (
    Je(() =>
      setTimeout(() => {
        t(0, (i = !0));
      })
    ),
    [i, n]
  );
}
let Of = class extends ve {
  constructor(e) {
    super(), be(this, e, Pf, Hf, _e, {});
  }
};
function Vf(l) {
  let e, t;
  return (
    (e = new Of({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Rf(l) {
  let e, t, n, i, r, o;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(s) {
      e = b(s, "DIV", { slot: !0, class: !0 });
      var a = E(e);
      t = b(a, "DIV", { class: !0 });
      var c = E(t);
      n = b(c, "I", { class: !0 });
      var h = E(n);
      (i = L(h, "")), h.forEach(d), c.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-7ec68q"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-7ec68q");
    },
    m(s, a) {
      M(s, e, a),
        f(e, t),
        f(t, n),
        f(n, i),
        r || ((o = me(e, "click", l[2])), (r = !0));
    },
    p: Te,
    d(s) {
      s && d(e), (r = !1), o();
    },
  };
}
function Nf(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        placement: Lf,
        modifiers: l[1],
        noIcon: !0,
        noHoverColor: !0,
        triggerClass: "ml20",
        $$slots: { trigger: [Rf], default: [Vf] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 9 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
const Lf = "bottom";
function Mf(l, e, t) {
  let n;
  return (
    Y(l, Ye, (o) => t(0, (n = o))),
    [
      n,
      [{ name: "preventOverflow", options: { padding: 40 } }],
      () => location.assign(n(q.ASSETS_OVERVIEW)),
    ]
  );
}
let Uf = class extends ve {
  constructor(e) {
    super(), be(this, e, Mf, Nf, _e, {});
  }
};
function Ds(l, e, t) {
  const n = l.slice();
  return (n[5] = e[t]), n;
}
function Hs(l) {
  let e, t;
  return {
    c() {
      (e = v("i")), (t = N("")), this.h();
    },
    l(n) {
      e = b(n, "I", { class: !0 });
      var i = E(e);
      (t = L(i, "")), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont f24");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function Ps(l, e) {
  let t,
    n = e[5].title + "",
    i,
    r,
    o,
    s,
    a,
    c = e[1] === e[5].value && Hs();
  return {
    key: l,
    first: null,
    c() {
      (t = v("li")), (i = N(n)), (r = A()), c && c.c(), (o = A()), this.h();
    },
    l(h) {
      t = b(h, "LI", { class: !0 });
      var m = E(t);
      (i = L(m, n)),
        (r = C(m)),
        c && c.l(m),
        (o = C(m)),
        m.forEach(d),
        this.h();
    },
    h() {
      u(t, "class", "item cp df aic jcsb H-1b8vwbk"),
        we(t, "active", e[1] === e[5].value),
        (this.first = t);
    },
    m(h, m) {
      M(h, t, m),
        f(t, i),
        f(t, r),
        c && c.m(t, null),
        f(t, o),
        s ||
          ((a = me(t, "click", function () {
            at(e[2](e[5].value)) && e[2](e[5].value).apply(this, arguments);
          })),
          (s = !0));
    },
    p(h, m) {
      (e = h),
        m & 1 && n !== (n = e[5].title + "") && J(i, n),
        e[1] === e[5].value
          ? c || ((c = Hs()), c.c(), c.m(t, o))
          : c && (c.d(1), (c = null)),
        m & 3 && we(t, "active", e[1] === e[5].value);
    },
    d(h) {
      h && d(t), c && c.d(), (s = !1), a();
    },
  };
}
function yf(l) {
  let e,
    t,
    n,
    i = [],
    r = new Map(),
    o = l[0];
  const s = (a) => a[5].value;
  for (let a = 0; a < o.length; a += 1) {
    let c = Ds(l, o, a),
      h = s(c);
    r.set(h, (i[a] = Ps(h, c)));
  }
  return {
    c() {
      (e = v("div")), (t = v("section")), (n = v("ul"));
      for (let a = 0; a < i.length; a += 1) i[a].c();
      this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var c = E(e);
      t = b(c, "SECTION", {});
      var h = E(t);
      n = b(h, "UL", { class: !0 });
      var m = E(n);
      for (let p = 0; p < i.length; p += 1) i[p].l(m);
      m.forEach(d), h.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(n, "class", "wrap-ul df fww lh32 T2 H-1b8vwbk"),
        u(e, "class", "wrap dib br12 fw1 f14 H-1b8vwbk");
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, n);
      for (let h = 0; h < i.length; h += 1) i[h] && i[h].m(n, null);
    },
    p(a, [c]) {
      c & 7 && ((o = a[0]), (i = Bn(i, c, s, 1, a, o, r, n, ul, Ps, null, Ds)));
    },
    i: Te,
    o: Te,
    d(a) {
      a && d(e);
      for (let c = 0; c < i.length; c += 1) i[c].d();
    },
  };
}
function Bf(l, e, t) {
  let n, i;
  Y(l, Ya, (a) => t(3, (n = a))), Y(l, al, (a) => t(1, (i = a)));
  let r;
  function o(a) {
    t(0, (r = Object.keys(a).map((c) => ({ value: c, title: a[c].name }))));
  }
  function s(a) {
    return function () {
      Ka(a);
    };
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 8 && o(n);
    }),
    [r, i, s, n]
  );
}
let Ra = class extends ve {
  constructor(e) {
    super(), be(this, e, Bf, yf, _e, {});
  }
};
const Ff = {
    getSummary() {
      return Qa.get(Xa.KYC_SUMMARY, {
        formatter(l) {
          (l.country = l.country || "-"),
            (l.idNumber = l.idNumber || "-"),
            (l.idType = l.idType || "-");
          const { firstName: e, lastName: t } = l;
          return (
            (l.fullName = e && t ? e + " " + t : "-"),
            (l.firstName = e || "-"),
            (l.lastName = t || "-"),
            l
          );
        },
      });
    },
  },
  Mi = new cn(Na());
rl.pipe(
  Da((l) => l === "Login"),
  Ha(() => Ff.getSummary())
).subscribe(({ data: l, error: e }) => {
  l && Mi.next(l), e && (Mi.next(Na()), mt.send("toast", "error", e));
});
function Na() {
  return { kycStatus: "Init", country: "-", fullName: "-", idNumber: "-" };
}
const Ll = {
  Verifying: "9a7c86",
  Verified: "c3ba4e",
  Unverified: "5acf1f",
  VerificationFailed: "87a67e",
};
function Os(l) {
  let e, t;
  return {
    c() {
      (e = v("span")), (t = N(l[1])), this.h();
    },
    l(n) {
      e = b(n, "SPAN", { class: !0 });
      var i = E(e);
      (t = L(i, l[1])), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "ph10 f14 H-l91r0c"),
        we(e, "init", l[0] === "Init"),
        we(e, "processing", l[0] === "Processing"),
        we(e, "unverified", l[0] === "Unverified"),
        we(e, "verified", l[0] === "Verified");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    p(n, i) {
      i & 2 && J(t, n[1]),
        i & 1 && we(e, "init", n[0] === "Init"),
        i & 1 && we(e, "processing", n[0] === "Processing"),
        i & 1 && we(e, "unverified", n[0] === "Unverified"),
        i & 1 && we(e, "verified", n[0] === "Verified");
    },
    d(n) {
      n && d(e);
    },
  };
}
function Gf(l) {
  let e,
    t = l[2].isMain && l[1] && Os(l);
  return {
    c() {
      t && t.c(), (e = it());
    },
    l(n) {
      t && t.l(n), (e = it());
    },
    m(n, i) {
      t && t.m(n, i), M(n, e, i);
    },
    p(n, [i]) {
      n[2].isMain && n[1]
        ? t
          ? t.p(n, i)
          : ((t = Os(n)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Te,
    o: Te,
    d(n) {
      t && t.d(n), n && d(e);
    },
  };
}
function Wf(l, e, t) {
  let n, i, r;
  Y(l, Mi, (c) => t(3, (n = c))),
    Y(l, Ne, (c) => t(4, (i = c))),
    Y(l, ln, (c) => t(2, (r = c)));
  let o = "",
    s = "";
  function a(c, h) {
    const m = {
      Init: c(Ll.Unverified),
      Processing: c(Ll.Verifying),
      Unverified: c(Ll.VerificationFailed),
      Verified: c(Ll.Verified),
    };
    t(0, (o = h && m.hasOwnProperty(h.kycStatus) ? h.kycStatus : "Init")),
      t(1, (s = m[o]));
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 24 && a(i, n);
    }),
    [o, s, r, n, i]
  );
}
let jf = class extends ve {
  constructor(e) {
    super(), be(this, e, Wf, Gf, _e, {});
  }
};
const Se = {
  AccountSecurity: "edff12",
  Overview: "df3a58",
  ApiManagement: "3c4b57",
  Privileges: "584f32",
  MyRewards: "4579c8",
  SwitchAccount: "b3756f",
  MainAccount: "2796f2",
  SubAccounts: "3b3423",
  AddSubAccount: "150afc",
  InviteFriends: "d4ee46",
  EarnRewards: "1c0bd6",
  SharePremium: "52eec3",
  Settings: "0a1fb2",
  Language: "7bef46",
  Feedback: "a8346f",
  Logout: "db95b9",
  TaxReporting: "b76cc1",
  Security: "01d622",
  Verification: "792f54",
  Rewards: "feacf0",
};
function qf(l) {
  let e,
    t,
    n,
    i,
    r = l[2].nickName + "",
    o,
    s,
    a,
    c,
    h,
    m = l[2].userId + "",
    p,
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I,
    D,
    O = (l[2].isMain ? l[1](j.Main) : l[1](j.Sub)) + "",
    V,
    U,
    y,
    G,
    H,
    B,
    x,
    ne,
    F,
    z,
    se,
    oe,
    le,
    re,
    te,
    ce = l[1](Se.SwitchAccount) + "",
    ie,
    he,
    Ae,
    Ee,
    Ce,
    ue,
    W,
    de,
    ae,
    pe,
    ee,
    fe,
    Ie,
    Me,
    je,
    Ve,
    rt,
    Ke,
    Be = l[1](Se.Overview) + "",
    Ze,
    Qe,
    lt,
    dt,
    Dt,
    Ht,
    st,
    xe,
    ot,
    Fn,
    Zt,
    Pt,
    Gi,
    ql,
    Gn = l[1](Se.Verification) + "",
    hl,
    zl,
    fn,
    Yl,
    Kl,
    un,
    _t,
    gt,
    Ot,
    Wi,
    Ql,
    Vt,
    ji,
    Xl,
    Wn = l[1](Se.Security) + "",
    ml,
    Jl,
    dn,
    Zl,
    xl,
    hn,
    vt,
    bt,
    Rt,
    qi,
    ei,
    Nt,
    zi,
    ti,
    jn = l[1](Se.SubAccounts) + "",
    pl,
    ni,
    mn,
    li,
    ii,
    pn,
    $t,
    Et,
    Lt,
    Yi,
    ri,
    Mt,
    Ki,
    si,
    qn = l[1](Se.ApiManagement) + "",
    _l,
    ai,
    _n,
    oi,
    ci,
    gn,
    wt,
    kt,
    Ut,
    Qi,
    fi,
    yt,
    Xi,
    ui,
    zn = l[1](Se.TaxReporting) + "",
    gl,
    di,
    vn,
    hi,
    mi,
    Kt,
    Tt,
    ct,
    Bt,
    Ji,
    pi,
    Ft,
    Zi,
    _i,
    Yn = l[1](Se.InviteFriends) + "",
    vl,
    gi,
    bn,
    Kn = l[1](Se.Rewards) + "",
    bl,
    vi,
    $n,
    bi,
    $i,
    En,
    It,
    At,
    Gt,
    xi,
    Ei,
    Wt,
    er,
    wi,
    Qn = l[1](Se.Settings) + "",
    $l,
    ki,
    wn,
    Ti,
    Ii,
    Xn,
    Ai,
    kn,
    Ct,
    St,
    jt,
    tr,
    Ci,
    qt,
    nr,
    Si,
    Jn = l[1](Se.Logout) + "",
    El,
    Di,
    Tn,
    Hi,
    qe,
    Pi,
    lr;
  return (
    (y = new jf({})),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (i = v("span")),
          (o = N(r)),
          (s = A()),
          (a = v("div")),
          (c = v("div")),
          (h = N("UID: ")),
          (p = N(m)),
          (g = A()),
          (_ = v("img")),
          (w = A()),
          (k = v("img")),
          (T = A()),
          (I = v("div")),
          (D = v("span")),
          (V = N(O)),
          (U = A()),
          K(y.$$.fragment),
          (G = A()),
          (H = v("div")),
          (B = A()),
          (x = v("div")),
          (ne = v("div")),
          (F = v("span")),
          (z = v("img")),
          (oe = A()),
          (le = v("img")),
          (te = A()),
          (ie = N(ce)),
          (he = A()),
          (Ae = v("i")),
          (Ee = N("")),
          (Ce = A()),
          (ue = v("div")),
          (W = A()),
          (de = v("div")),
          (ae = v("ul")),
          (pe = v("li")),
          (ee = v("a")),
          (fe = v("span")),
          (Ie = v("img")),
          (je = A()),
          (Ve = v("img")),
          (Ke = A()),
          (Ze = N(Be)),
          (Qe = A()),
          (lt = v("i")),
          (dt = N("")),
          (Dt = A()),
          (Ht = v("li")),
          (st = v("a")),
          (xe = v("span")),
          (ot = v("img")),
          (Zt = A()),
          (Pt = v("img")),
          (ql = A()),
          (hl = N(Gn)),
          (zl = A()),
          (fn = v("i")),
          (Yl = N("")),
          (Kl = A()),
          (un = v("li")),
          (_t = v("a")),
          (gt = v("span")),
          (Ot = v("img")),
          (Ql = A()),
          (Vt = v("img")),
          (Xl = A()),
          (ml = N(Wn)),
          (Jl = A()),
          (dn = v("i")),
          (Zl = N("")),
          (xl = A()),
          (hn = v("li")),
          (vt = v("a")),
          (bt = v("span")),
          (Rt = v("img")),
          (ei = A()),
          (Nt = v("img")),
          (ti = A()),
          (pl = N(jn)),
          (ni = A()),
          (mn = v("i")),
          (li = N("")),
          (ii = A()),
          (pn = v("li")),
          ($t = v("a")),
          (Et = v("span")),
          (Lt = v("img")),
          (ri = A()),
          (Mt = v("img")),
          (si = A()),
          (_l = N(qn)),
          (ai = A()),
          (_n = v("i")),
          (oi = N("")),
          (ci = A()),
          (gn = v("li")),
          (wt = v("a")),
          (kt = v("span")),
          (Ut = v("img")),
          (fi = A()),
          (yt = v("img")),
          (ui = A()),
          (gl = N(zn)),
          (di = A()),
          (vn = v("i")),
          (hi = N("")),
          (mi = A()),
          (Kt = v("li")),
          (Tt = v("a")),
          (ct = v("span")),
          (Bt = v("img")),
          (pi = A()),
          (Ft = v("img")),
          (_i = A()),
          (vl = N(Yn)),
          (gi = A()),
          (bn = v("span")),
          (bl = N(Kn)),
          (vi = A()),
          ($n = v("i")),
          (bi = N("")),
          ($i = A()),
          (En = v("li")),
          (It = v("a")),
          (At = v("span")),
          (Gt = v("img")),
          (Ei = A()),
          (Wt = v("img")),
          (wi = A()),
          ($l = N(Qn)),
          (ki = A()),
          (wn = v("i")),
          (Ti = N("")),
          (Ii = A()),
          (Xn = v("div")),
          (Ai = A()),
          (kn = v("li")),
          (Ct = v("a")),
          (St = v("span")),
          (jt = v("img")),
          (Ci = A()),
          (qt = v("img")),
          (Si = A()),
          (El = N(Jn)),
          (Di = A()),
          (Tn = v("i")),
          (Hi = N("")),
          this.h();
      },
      l(ht) {
        e = b(ht, "DIV", { class: !0 });
        var Pe = E(e);
        t = b(Pe, "DIV", { class: !0 });
        var wl = E(t);
        n = b(wl, "DIV", { class: !0 });
        var ir = E(n);
        i = b(ir, "SPAN", { class: !0 });
        var rr = E(i);
        (o = L(rr, r)),
          rr.forEach(d),
          ir.forEach(d),
          (s = C(wl)),
          (a = b(wl, "DIV", { class: !0 }));
        var kl = E(a);
        c = b(kl, "DIV", { class: !0 });
        var xt = E(c);
        (h = L(xt, "UID: ")),
          (p = L(xt, m)),
          (g = C(xt)),
          (_ = b(xt, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (w = C(xt)),
          (k = b(xt, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          xt.forEach(d),
          (T = C(kl)),
          (I = b(kl, "DIV", { class: !0 }));
        var Tl = E(I);
        D = b(Tl, "SPAN", { class: !0 });
        var sr = E(D);
        (V = L(sr, O)),
          sr.forEach(d),
          (U = C(Tl)),
          Z(y.$$.fragment, Tl),
          Tl.forEach(d),
          kl.forEach(d),
          wl.forEach(d),
          (G = C(Pe)),
          (H = b(Pe, "DIV", { class: !0 })),
          E(H).forEach(d),
          (B = C(Pe)),
          (x = b(Pe, "DIV", { class: !0 }));
        var ar = E(x);
        ne = b(ar, "DIV", { class: !0 });
        var Il = E(ne);
        F = b(Il, "SPAN", { class: !0 });
        var In = E(F);
        (z = b(In, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (oe = C(In)),
          (le = b(In, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (te = C(In)),
          (ie = L(In, ce)),
          In.forEach(d),
          (he = C(Il)),
          (Ae = b(Il, "I", { class: !0 }));
        var or = E(Ae);
        (Ee = L(or, "")),
          or.forEach(d),
          Il.forEach(d),
          ar.forEach(d),
          (Ce = C(Pe)),
          (ue = b(Pe, "DIV", { class: !0 })),
          E(ue).forEach(d),
          (W = C(Pe)),
          (de = b(Pe, "DIV", { class: !0 }));
        var cr = E(de);
        ae = b(cr, "UL", { class: !0 });
        var Fe = E(ae);
        pe = b(Fe, "LI", { class: !0 });
        var fr = E(pe);
        ee = b(fr, "A", { class: !0, href: !0, target: !0 });
        var Al = E(ee);
        fe = b(Al, "SPAN", { class: !0 });
        var An = E(fe);
        (Ie = b(An, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (je = C(An)),
          (Ve = b(An, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (Ke = C(An)),
          (Ze = L(An, Be)),
          An.forEach(d),
          (Qe = C(Al)),
          (lt = b(Al, "I", { class: !0 }));
        var ur = E(lt);
        (dt = L(ur, "")),
          ur.forEach(d),
          Al.forEach(d),
          fr.forEach(d),
          (Dt = C(Fe)),
          (Ht = b(Fe, "LI", { class: !0 }));
        var dr = E(Ht);
        st = b(dr, "A", { class: !0, href: !0, target: !0 });
        var Cl = E(st);
        xe = b(Cl, "SPAN", { class: !0 });
        var Cn = E(xe);
        (ot = b(Cn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (Zt = C(Cn)),
          (Pt = b(Cn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (ql = C(Cn)),
          (hl = L(Cn, Gn)),
          Cn.forEach(d),
          (zl = C(Cl)),
          (fn = b(Cl, "I", { class: !0 }));
        var hr = E(fn);
        (Yl = L(hr, "")),
          hr.forEach(d),
          Cl.forEach(d),
          dr.forEach(d),
          (Kl = C(Fe)),
          (un = b(Fe, "LI", { class: !0 }));
        var mr = E(un);
        _t = b(mr, "A", { class: !0, href: !0, target: !0 });
        var Sl = E(_t);
        gt = b(Sl, "SPAN", { class: !0 });
        var Sn = E(gt);
        (Ot = b(Sn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (Ql = C(Sn)),
          (Vt = b(Sn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (Xl = C(Sn)),
          (ml = L(Sn, Wn)),
          Sn.forEach(d),
          (Jl = C(Sl)),
          (dn = b(Sl, "I", { class: !0 }));
        var pr = E(dn);
        (Zl = L(pr, "")),
          pr.forEach(d),
          Sl.forEach(d),
          mr.forEach(d),
          (xl = C(Fe)),
          (hn = b(Fe, "LI", { class: !0 }));
        var _r = E(hn);
        vt = b(_r, "A", { class: !0, href: !0, target: !0 });
        var Dl = E(vt);
        bt = b(Dl, "SPAN", { class: !0 });
        var Dn = E(bt);
        (Rt = b(Dn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (ei = C(Dn)),
          (Nt = b(Dn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (ti = C(Dn)),
          (pl = L(Dn, jn)),
          Dn.forEach(d),
          (ni = C(Dl)),
          (mn = b(Dl, "I", { class: !0 }));
        var gr = E(mn);
        (li = L(gr, "")),
          gr.forEach(d),
          Dl.forEach(d),
          _r.forEach(d),
          (ii = C(Fe)),
          (pn = b(Fe, "LI", { class: !0 }));
        var vr = E(pn);
        $t = b(vr, "A", { class: !0, href: !0, target: !0 });
        var Hl = E($t);
        Et = b(Hl, "SPAN", { class: !0 });
        var Hn = E(Et);
        (Lt = b(Hn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (ri = C(Hn)),
          (Mt = b(Hn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (si = C(Hn)),
          (_l = L(Hn, qn)),
          Hn.forEach(d),
          (ai = C(Hl)),
          (_n = b(Hl, "I", { class: !0 }));
        var br = E(_n);
        (oi = L(br, "")),
          br.forEach(d),
          Hl.forEach(d),
          vr.forEach(d),
          (ci = C(Fe)),
          (gn = b(Fe, "LI", { class: !0 }));
        var $r = E(gn);
        wt = b($r, "A", { class: !0, href: !0, target: !0 });
        var Pl = E(wt);
        kt = b(Pl, "SPAN", { class: !0 });
        var Pn = E(kt);
        (Ut = b(Pn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (fi = C(Pn)),
          (yt = b(Pn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (ui = C(Pn)),
          (gl = L(Pn, zn)),
          Pn.forEach(d),
          (di = C(Pl)),
          (vn = b(Pl, "I", { class: !0 }));
        var Er = E(vn);
        (hi = L(Er, "")),
          Er.forEach(d),
          Pl.forEach(d),
          $r.forEach(d),
          (mi = C(Fe)),
          (Kt = b(Fe, "LI", { class: !0 }));
        var wr = E(Kt);
        Tt = b(wr, "A", { class: !0, target: !0 });
        var Ol = E(Tt);
        ct = b(Ol, "SPAN", { class: !0 });
        var Qt = E(ct);
        (Bt = b(Qt, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (pi = C(Qt)),
          (Ft = b(Qt, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (_i = C(Qt)),
          (vl = L(Qt, Yn)),
          (gi = C(Qt)),
          (bn = b(Qt, "SPAN", { class: !0 }));
        var kr = E(bn);
        (bl = L(kr, Kn)),
          kr.forEach(d),
          Qt.forEach(d),
          (vi = C(Ol)),
          ($n = b(Ol, "I", { class: !0 }));
        var Tr = E($n);
        (bi = L(Tr, "")),
          Tr.forEach(d),
          Ol.forEach(d),
          wr.forEach(d),
          ($i = C(Fe)),
          (En = b(Fe, "LI", { class: !0 }));
        var Ir = E(En);
        It = b(Ir, "A", { class: !0, href: !0, target: !0 });
        var Vl = E(It);
        At = b(Vl, "SPAN", { class: !0 });
        var On = E(At);
        (Gt = b(On, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (Ei = C(On)),
          (Wt = b(On, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (wi = C(On)),
          ($l = L(On, Qn)),
          On.forEach(d),
          (ki = C(Vl)),
          (wn = b(Vl, "I", { class: !0 }));
        var Ar = E(wn);
        (Ti = L(Ar, "")),
          Ar.forEach(d),
          Vl.forEach(d),
          Ir.forEach(d),
          (Ii = C(Fe)),
          (Xn = b(Fe, "DIV", { class: !0 })),
          E(Xn).forEach(d),
          (Ai = C(Fe)),
          (kn = b(Fe, "LI", { class: !0 }));
        var Cr = E(kn);
        Ct = b(Cr, "A", { class: !0, href: !0 });
        var Rl = E(Ct);
        St = b(Rl, "SPAN", { class: !0 });
        var Vn = E(St);
        (jt = b(Vn, "IMG", {
          class: !0,
          src: !0,
          alt: !0,
          width: !0,
          height: !0,
        })),
          (Ci = C(Vn)),
          (qt = b(Vn, "IMG", {
            class: !0,
            src: !0,
            alt: !0,
            width: !0,
            height: !0,
          })),
          (Si = C(Vn)),
          (El = L(Vn, Jn)),
          Vn.forEach(d),
          (Di = C(Rl)),
          (Tn = b(Rl, "I", { class: !0 }));
        var Sr = E(Tn);
        (Hi = L(Sr, "")),
          Sr.forEach(d),
          Rl.forEach(d),
          Cr.forEach(d),
          Fe.forEach(d),
          cr.forEach(d),
          Pe.forEach(d),
          this.h();
      },
      h() {
        u(i, "class", "f18 lh24 f1 ooo T1 fw3"),
          u(n, "class", "df"),
          u(_, "class", "light-img ml4 cp H-1u2i1ln"),
          ke(_.src, ($ = Ue.COPY)) || u(_, "src", $),
          u(_, "alt", "copy"),
          u(_, "width", "16"),
          u(_, "height", "16"),
          u(k, "class", "dark-img ml4 cp H-1u2i1ln"),
          ke(k.src, (S = Ue.COPY_DARK)) || u(k, "src", S),
          u(k, "alt", "copy"),
          u(k, "width", "16"),
          u(k, "height", "16"),
          u(c, "class", "uid df aic lh24 T1"),
          u(D, "class", "sub mr8 br4 f14 H-1u2i1ln"),
          u(I, "class", "kyc-status df aic mt12 lh24 fw1 H-1u2i1ln"),
          u(a, "class", "df fdc mt12 lh24"),
          u(t, "class", "f1 ovh p16"),
          u(H, "class", "split ml16 mr16 H-1u2i1ln"),
          u(z, "class", "light-img mr12 H-1u2i1ln"),
          ke(z.src, (se = Ue.SWITCH_ACCOUNT)) || u(z, "src", se),
          u(z, "alt", "switch_account"),
          u(z, "width", "24"),
          u(z, "height", "24"),
          u(le, "class", "dark-img mr12 H-1u2i1ln"),
          ke(le.src, (re = Ue.SWITCH_ACCOUNT_DARK)) || u(le, "src", re),
          u(le, "alt", "switch_account"),
          u(le, "width", "24"),
          u(le, "height", "24"),
          u(F, "class", "df aic T1"),
          u(Ae, "class", "iconfont switch-arrow db f16 H-1u2i1ln"),
          u(ne, "class", "switch df jcsb aic cp H-1u2i1ln"),
          u(x, "class", "switch-div H-1u2i1ln"),
          u(ue, "class", "split ml16 mr16 H-1u2i1ln"),
          u(Ie, "class", "light-img mr12 H-1u2i1ln"),
          ke(Ie.src, (Me = Ue.OVERVIEW)) || u(Ie, "src", Me),
          u(Ie, "alt", "overview"),
          u(Ie, "width", "24"),
          u(Ie, "height", "24"),
          u(Ve, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Ve.src, (rt = Ue.OVERVIEW_DARK)) || u(Ve, "src", rt),
          u(Ve, "alt", "overview"),
          u(Ve, "width", "24"),
          u(Ve, "height", "24"),
          u(fe, "class", "df aic T1"),
          u(lt, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(ee, "class", "df jcsb aic H-1u2i1ln"),
          u(ee, "href", q.ACCOUNT_OVERVIEW),
          u(ee, "target", "_self"),
          u(pe, "class", "H-1u2i1ln"),
          u(ot, "class", "light-img mr12 H-1u2i1ln"),
          ke(ot.src, (Fn = Ue.VERIFICATION)) || u(ot, "src", Fn),
          u(ot, "alt", "verification"),
          u(ot, "width", "24"),
          u(ot, "height", "24"),
          u(Pt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Pt.src, (Gi = Ue.VERIFICATION_DARK)) || u(Pt, "src", Gi),
          u(Pt, "alt", "verification"),
          u(Pt, "width", "24"),
          u(Pt, "height", "24"),
          u(xe, "class", "df aic T1"),
          u(fn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(st, "class", "df jcsb aic H-1u2i1ln"),
          u(st, "href", q.ACCOUNT_VERIFICATION),
          u(st, "target", "_self"),
          u(Ht, "class", "H-1u2i1ln"),
          u(Ot, "class", "light-img mr12 H-1u2i1ln"),
          ke(Ot.src, (Wi = Ue.SECURITY)) || u(Ot, "src", Wi),
          u(Ot, "alt", "security"),
          u(Ot, "width", "24"),
          u(Ot, "height", "24"),
          u(Vt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Vt.src, (ji = Ue.SECURITY_DARK)) || u(Vt, "src", ji),
          u(Vt, "alt", "security"),
          u(Vt, "width", "24"),
          u(Vt, "height", "24"),
          u(gt, "class", "df aic T1"),
          u(dn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(_t, "class", "df jcsb aic H-1u2i1ln"),
          u(_t, "href", q.ACCOUNT_SECURITY),
          u(_t, "target", "_self"),
          u(un, "class", "H-1u2i1ln"),
          u(Rt, "class", "light-img mr12 H-1u2i1ln"),
          ke(Rt.src, (qi = Ue.SUB_ACCOUNT)) || u(Rt, "src", qi),
          u(Rt, "alt", "sub_account"),
          u(Rt, "width", "24"),
          u(Rt, "height", "24"),
          u(Nt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Nt.src, (zi = Ue.SUB_ACCOUNT_DARK)) || u(Nt, "src", zi),
          u(Nt, "alt", "sub_account"),
          u(Nt, "width", "24"),
          u(Nt, "height", "24"),
          u(bt, "class", "df aic T1"),
          u(mn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(vt, "class", "df jcsb aic H-1u2i1ln"),
          u(vt, "href", q.ACCOUNT_SUB_ACCOUNTS),
          u(vt, "target", "_self"),
          u(hn, "class", "H-1u2i1ln"),
          u(Lt, "class", "light-img mr12 H-1u2i1ln"),
          ke(Lt.src, (Yi = Ue.API)) || u(Lt, "src", Yi),
          u(Lt, "alt", "api"),
          u(Lt, "width", "24"),
          u(Lt, "height", "24"),
          u(Mt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Mt.src, (Ki = Ue.API_DARK)) || u(Mt, "src", Ki),
          u(Mt, "alt", "api"),
          u(Mt, "width", "24"),
          u(Mt, "height", "24"),
          u(Et, "class", "df aic T1"),
          u(_n, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u($t, "class", "df jcsb aic H-1u2i1ln"),
          u($t, "href", q.ACCOUNT_API_MANAGEMENT),
          u($t, "target", "_self"),
          u(pn, "class", "H-1u2i1ln"),
          u(Ut, "class", "light-img mr12 H-1u2i1ln"),
          ke(Ut.src, (Qi = Ue.TAX_REPORTING)) || u(Ut, "src", Qi),
          u(Ut, "alt", "tax_reporting"),
          u(Ut, "width", "24"),
          u(Ut, "height", "24"),
          u(yt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(yt.src, (Xi = Ue.TAX_REPORTING_DARK)) || u(yt, "src", Xi),
          u(yt, "alt", "tax_reporting"),
          u(yt, "width", "24"),
          u(yt, "height", "24"),
          u(kt, "class", "df aic T1"),
          u(vn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(wt, "class", "df jcsb aic H-1u2i1ln"),
          u(wt, "href", q.ACCOUNT_TAX_REPORTING),
          u(wt, "target", "_self"),
          u(gn, "class", "H-1u2i1ln"),
          u(Bt, "class", "light-img mr12 H-1u2i1ln"),
          ke(Bt.src, (Ji = Ue.INVITE_FRIENDS)) || u(Bt, "src", Ji),
          u(Bt, "alt", "invite_friends"),
          u(Bt, "width", "24"),
          u(Bt, "height", "24"),
          u(Ft, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Ft.src, (Zi = Ue.INVITE_FRIENDS_DARK)) || u(Ft, "src", Zi),
          u(Ft, "alt", "invite_friends"),
          u(Ft, "width", "24"),
          u(Ft, "height", "24"),
          u(bn, "class", "f12 fw3 mt2 earn H-1u2i1ln"),
          u(ct, "class", "df aic T1"),
          u($n, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(Tt, "class", "df jcsb aic H-1u2i1ln"),
          u(Tt, "target", "_self"),
          u(Kt, "class", "H-1u2i1ln"),
          we(Kt, "disabled", l[2].isSub),
          u(Gt, "class", "light-img mr12 H-1u2i1ln"),
          ke(Gt.src, (xi = Ue.SETTING)) || u(Gt, "src", xi),
          u(Gt, "alt", "setting"),
          u(Gt, "width", "24"),
          u(Gt, "height", "24"),
          u(Wt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(Wt.src, (er = Ue.SETTING_DARK)) || u(Wt, "src", er),
          u(Wt, "alt", "setting"),
          u(Wt, "width", "24"),
          u(Wt, "height", "24"),
          u(At, "class", "df aic T1"),
          u(wn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(It, "class", "df jcsb aic H-1u2i1ln"),
          u(It, "href", q.ACCOUNT_SETTING),
          u(It, "target", "_self"),
          u(En, "class", "H-1u2i1ln"),
          u(Xn, "class", "split mt8 H-1u2i1ln"),
          u(jt, "class", "light-img mr12 H-1u2i1ln"),
          ke(jt.src, (tr = Ue.LOG_OUT)) || u(jt, "src", tr),
          u(jt, "alt", "setting"),
          u(jt, "width", "24"),
          u(jt, "height", "24"),
          u(qt, "class", "dark-img mr12 H-1u2i1ln"),
          ke(qt.src, (nr = Ue.LOG_OUT_DARK)) || u(qt, "src", nr),
          u(qt, "alt", "setting"),
          u(qt, "width", "24"),
          u(qt, "height", "24"),
          u(St, "class", "df aic T1"),
          u(Tn, "class", "iconfont switch-arrow arrow db f16 H-1u2i1ln"),
          u(Ct, "class", "home-logout df jcsb aic H-1u2i1ln"),
          u(Ct, "href", "./#"),
          u(kn, "class", "cp H-1u2i1ln"),
          u(ae, "class", "H-1u2i1ln"),
          u(de, "class", "lh32 wsn f14"),
          u(e, "class", "wrap dib H-1u2i1ln");
      },
      m(ht, Pe) {
        M(ht, e, Pe),
          f(e, t),
          f(t, n),
          f(n, i),
          f(i, o),
          f(t, s),
          f(t, a),
          f(a, c),
          f(c, h),
          f(c, p),
          f(c, g),
          f(c, _),
          f(c, w),
          f(c, k),
          f(a, T),
          f(a, I),
          f(I, D),
          f(D, V),
          f(I, U),
          Q(y, I, null),
          f(e, G),
          f(e, H),
          f(e, B),
          f(e, x),
          f(x, ne),
          f(ne, F),
          f(F, z),
          f(F, oe),
          f(F, le),
          f(F, te),
          f(F, ie),
          f(ne, he),
          f(ne, Ae),
          f(Ae, Ee),
          f(e, Ce),
          f(e, ue),
          f(e, W),
          f(e, de),
          f(de, ae),
          f(ae, pe),
          f(pe, ee),
          f(ee, fe),
          f(fe, Ie),
          f(fe, je),
          f(fe, Ve),
          f(fe, Ke),
          f(fe, Ze),
          f(ee, Qe),
          f(ee, lt),
          f(lt, dt),
          f(ae, Dt),
          f(ae, Ht),
          f(Ht, st),
          f(st, xe),
          f(xe, ot),
          f(xe, Zt),
          f(xe, Pt),
          f(xe, ql),
          f(xe, hl),
          f(st, zl),
          f(st, fn),
          f(fn, Yl),
          f(ae, Kl),
          f(ae, un),
          f(un, _t),
          f(_t, gt),
          f(gt, Ot),
          f(gt, Ql),
          f(gt, Vt),
          f(gt, Xl),
          f(gt, ml),
          f(_t, Jl),
          f(_t, dn),
          f(dn, Zl),
          f(ae, xl),
          f(ae, hn),
          f(hn, vt),
          f(vt, bt),
          f(bt, Rt),
          f(bt, ei),
          f(bt, Nt),
          f(bt, ti),
          f(bt, pl),
          f(vt, ni),
          f(vt, mn),
          f(mn, li),
          f(ae, ii),
          f(ae, pn),
          f(pn, $t),
          f($t, Et),
          f(Et, Lt),
          f(Et, ri),
          f(Et, Mt),
          f(Et, si),
          f(Et, _l),
          f($t, ai),
          f($t, _n),
          f(_n, oi),
          f(ae, ci),
          f(ae, gn),
          f(gn, wt),
          f(wt, kt),
          f(kt, Ut),
          f(kt, fi),
          f(kt, yt),
          f(kt, ui),
          f(kt, gl),
          f(wt, di),
          f(wt, vn),
          f(vn, hi),
          f(ae, mi),
          f(ae, Kt),
          f(Kt, Tt),
          f(Tt, ct),
          f(ct, Bt),
          f(ct, pi),
          f(ct, Ft),
          f(ct, _i),
          f(ct, vl),
          f(ct, gi),
          f(ct, bn),
          f(bn, bl),
          f(Tt, vi),
          f(Tt, $n),
          f($n, bi),
          f(ae, $i),
          f(ae, En),
          f(En, It),
          f(It, At),
          f(At, Gt),
          f(At, Ei),
          f(At, Wt),
          f(At, wi),
          f(At, $l),
          f(It, ki),
          f(It, wn),
          f(wn, Ti),
          f(ae, Ii),
          f(ae, Xn),
          f(ae, Ai),
          f(ae, kn),
          f(kn, Ct),
          f(Ct, St),
          f(St, jt),
          f(St, Ci),
          f(St, qt),
          f(St, Si),
          f(St, El),
          f(Ct, Di),
          f(Ct, Tn),
          f(Tn, Hi),
          (qe = !0),
          Pi ||
            ((lr = [
              me(_, "click", function () {
                at(l[5](l[2].userId)) &&
                  l[5](l[2].userId).apply(this, arguments);
              }),
              me(k, "click", function () {
                at(l[5](l[2].userId)) &&
                  l[5](l[2].userId).apply(this, arguments);
              }),
              me(ne, "click", l[6]),
              me(Tt, "click", l[3]),
              me(Ct, "click", l[4]),
            ]),
            (Pi = !0));
      },
      p(ht, [Pe]) {
        (l = ht),
          (!qe || Pe & 4) && r !== (r = l[2].nickName + "") && J(o, r),
          (!qe || Pe & 4) && m !== (m = l[2].userId + "") && J(p, m),
          (!qe || Pe & 6) &&
            O !== (O = (l[2].isMain ? l[1](j.Main) : l[1](j.Sub)) + "") &&
            J(V, O),
          (!qe || Pe & 2) &&
            ce !== (ce = l[1](Se.SwitchAccount) + "") &&
            J(ie, ce),
          (!qe || Pe & 2) && Be !== (Be = l[1](Se.Overview) + "") && J(Ze, Be),
          (!qe || Pe & 2) &&
            Gn !== (Gn = l[1](Se.Verification) + "") &&
            J(hl, Gn),
          (!qe || Pe & 2) && Wn !== (Wn = l[1](Se.Security) + "") && J(ml, Wn),
          (!qe || Pe & 2) &&
            jn !== (jn = l[1](Se.SubAccounts) + "") &&
            J(pl, jn),
          (!qe || Pe & 2) &&
            qn !== (qn = l[1](Se.ApiManagement) + "") &&
            J(_l, qn),
          (!qe || Pe & 2) &&
            zn !== (zn = l[1](Se.TaxReporting) + "") &&
            J(gl, zn),
          (!qe || Pe & 2) &&
            Yn !== (Yn = l[1](Se.InviteFriends) + "") &&
            J(vl, Yn),
          (!qe || Pe & 2) && Kn !== (Kn = l[1](Se.Rewards) + "") && J(bl, Kn),
          (!qe || Pe & 4) && we(Kt, "disabled", l[2].isSub),
          (!qe || Pe & 2) && Qn !== (Qn = l[1](Se.Settings) + "") && J($l, Qn),
          (!qe || Pe & 2) && Jn !== (Jn = l[1](Se.Logout) + "") && J(El, Jn);
      },
      i(ht) {
        qe || (P(y.$$.fragment, ht), (qe = !0));
      },
      o(ht) {
        R(y.$$.fragment, ht), (qe = !1);
      },
      d(ht) {
        ht && d(e), X(y), (Pi = !1), pt(lr);
      },
    }
  );
}
function zf(l, e, t) {
  let n, i, r;
  Y(l, Ne, (m) => t(1, (n = m))),
    Y(l, Ye, (m) => t(7, (i = m))),
    Y(l, ln, (m) => t(2, (r = m)));
  let { viewType$: o } = e;
  function s() {
    (window.location.href = i(q.ACCOUNT_INVITE_FRIENDS)),
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: "Account_Invite_Friends",
      });
  }
  function a(m) {
    m.preventDefault(),
      mt.send("user", "logout"),
      ye.track("web_click", {
        $screen_name: "Trade/Contract",
        $element_content: "Account_Logout",
      });
  }
  function c(m) {
    if (wo(m)) {
      mt.send("toast", "info", { message: n(ll.SuccessfullyCopied) });
      return;
    }
    mt.send("toast", "error", { message: n(Yo.Failed) });
  }
  const h = () => o.set("AccountSelect");
  return (
    (l.$$set = (m) => {
      "viewType$" in m && t(0, (o = m.viewType$));
    }),
    [o, n, r, s, a, c, h]
  );
}
let Yf = class extends ve {
  constructor(e) {
    super(), be(this, e, zf, qf, _e, { viewType$: 0 });
  }
};
function Vs(l, e, t) {
  const n = l.slice();
  return (n[11] = e[t]), n;
}
function Rs(l) {
  let e, t;
  return {
    c() {
      (e = v("i")), (t = N("")), this.h();
    },
    l(n) {
      e = b(n, "I", { class: !0 });
      var i = E(e);
      (t = L(i, "")), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont f24");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function Ns(l) {
  let e, t;
  return {
    c() {
      (e = v("i")), (t = N("")), this.h();
    },
    l(n) {
      e = b(n, "I", { class: !0 });
      var i = E(e);
      (t = L(i, "")), i.forEach(d), this.h();
    },
    h() {
      u(e, "class", "iconfont f24");
    },
    m(n, i) {
      M(n, e, i), f(e, t);
    },
    d(n) {
      n && d(e);
    },
  };
}
function Ls(l, e) {
  let t,
    n,
    i = e[11].nickName + "",
    r,
    o,
    s,
    a,
    c,
    h = e[4].userId === e[11].userId && Ns();
  return {
    key: l,
    first: null,
    c() {
      (t = v("li")),
        (n = v("div")),
        (r = N(i)),
        (o = A()),
        h && h.c(),
        (s = A()),
        this.h();
    },
    l(m) {
      t = b(m, "LI", { class: !0 });
      var p = E(t);
      n = b(p, "DIV", { class: !0 });
      var g = E(n);
      (r = L(g, i)),
        g.forEach(d),
        (o = C(p)),
        h && h.l(p),
        (s = C(p)),
        p.forEach(d),
        this.h();
    },
    h() {
      u(n, "class", "f1 ooo cp f14 H-1k6tb88"),
        u(t, "class", "row ooo cp H-1k6tb88"),
        we(t, "active", e[4].userId === e[11].userId),
        (this.first = t);
    },
    m(m, p) {
      M(m, t, p),
        f(t, n),
        f(n, r),
        f(t, o),
        h && h.m(t, null),
        f(t, s),
        a ||
          ((c = me(t, "click", function () {
            at(e[7](e[11])) && e[7](e[11]).apply(this, arguments);
          })),
          (a = !0));
    },
    p(m, p) {
      (e = m),
        p & 2 && i !== (i = e[11].nickName + "") && J(r, i),
        e[4].userId === e[11].userId
          ? h || ((h = Ns()), h.c(), h.m(t, s))
          : h && (h.d(1), (h = null)),
        p & 18 && we(t, "active", e[4].userId === e[11].userId);
    },
    d(m) {
      m && d(t), h && h.d(), (a = !1), c();
    },
  };
}
function Kf(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c = l[3](Se.SwitchAccount) + "",
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k = l[3](Se.MainAccount) + "",
    S,
    T,
    I,
    D,
    O = ((l[2] && l[2].nickName) || "") + "",
    V,
    U,
    y,
    G,
    H,
    B = l[3](Se.SubAccounts) + "",
    x,
    ne,
    F,
    z,
    se = [],
    oe = new Map(),
    le,
    re,
    te,
    ce,
    ie,
    he,
    Ae = l[3](Se.AddSubAccount) + "",
    Ee,
    Ce,
    ue,
    W,
    de = !l[4].isSub && Rs(),
    ae = l[1];
  const pe = (ee) => ee[11].userId;
  for (let ee = 0; ee < ae.length; ee += 1) {
    let fe = Vs(l, ae, ee),
      Ie = pe(fe);
    oe.set(Ie, (se[ee] = Ls(Ie, fe)));
  }
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("header")),
        (i = v("div")),
        (r = v("i")),
        (o = N("")),
        (s = A()),
        (a = v("span")),
        (h = N(c)),
        (m = A()),
        (p = v("div")),
        (g = A()),
        (_ = v("div")),
        ($ = v("section")),
        (w = v("div")),
        (S = N(k)),
        (T = A()),
        (I = v("div")),
        (D = v("div")),
        (V = N(O)),
        (U = A()),
        de && de.c(),
        (y = A()),
        (G = v("section")),
        (H = v("div")),
        (x = N(B)),
        (ne = A()),
        (F = v("div")),
        (z = v("ul"));
      for (let ee = 0; ee < se.length; ee += 1) se[ee].c();
      (le = A()),
        (re = v("div")),
        (te = v("i")),
        (ce = N("")),
        (ie = A()),
        (he = v("span")),
        (Ee = N(Ae)),
        this.h();
    },
    l(ee) {
      e = b(ee, "DIV", { class: !0 });
      var fe = E(e);
      t = b(fe, "DIV", { class: !0 });
      var Ie = E(t);
      n = b(Ie, "HEADER", { class: !0 });
      var Me = E(n);
      i = b(Me, "DIV", { class: !0 });
      var je = E(i);
      r = b(je, "I", { class: !0 });
      var Ve = E(r);
      (o = L(Ve, "")),
        Ve.forEach(d),
        je.forEach(d),
        (s = C(Me)),
        (a = b(Me, "SPAN", { class: !0 }));
      var rt = E(a);
      (h = L(rt, c)),
        rt.forEach(d),
        Me.forEach(d),
        (m = C(Ie)),
        (p = b(Ie, "DIV", { class: !0 })),
        E(p).forEach(d),
        (g = C(Ie)),
        (_ = b(Ie, "DIV", { class: !0 }));
      var Ke = E(_);
      $ = b(Ke, "SECTION", { class: !0 });
      var Be = E($);
      w = b(Be, "DIV", { class: !0 });
      var Ze = E(w);
      (S = L(Ze, k)),
        Ze.forEach(d),
        (T = C(Be)),
        (I = b(Be, "DIV", { class: !0 }));
      var Qe = E(I);
      D = b(Qe, "DIV", { class: !0 });
      var lt = E(D);
      (V = L(lt, O)),
        lt.forEach(d),
        (U = C(Qe)),
        de && de.l(Qe),
        Qe.forEach(d),
        Be.forEach(d),
        (y = C(Ke)),
        (G = b(Ke, "SECTION", { class: !0 }));
      var dt = E(G);
      H = b(dt, "DIV", { class: !0 });
      var Dt = E(H);
      (x = L(Dt, B)),
        Dt.forEach(d),
        (ne = C(dt)),
        (F = b(dt, "DIV", { class: !0 }));
      var Ht = E(F);
      z = b(Ht, "UL", { class: !0 });
      var st = E(z);
      for (let Zt = 0; Zt < se.length; Zt += 1) se[Zt].l(st);
      st.forEach(d),
        Ht.forEach(d),
        dt.forEach(d),
        Ke.forEach(d),
        Ie.forEach(d),
        (le = C(fe)),
        (re = b(fe, "DIV", { class: !0 }));
      var xe = E(re);
      te = b(xe, "I", { class: !0 });
      var ot = E(te);
      (ce = L(ot, "")),
        ot.forEach(d),
        (ie = C(xe)),
        (he = b(xe, "SPAN", { class: !0 }));
      var Fn = E(he);
      (Ee = L(Fn, Ae)), Fn.forEach(d), xe.forEach(d), fe.forEach(d), this.h();
    },
    h() {
      u(r, "class", "iconfont"),
        u(i, "class", "cp"),
        u(a, "class", "ml4 fw3 T1"),
        u(n, "class", "df aic T1 H-1k6tb88"),
        u(p, "class", "split mt16 H-1k6tb88"),
        u(w, "class", "title T1 fw3 H-1k6tb88"),
        u(D, "class", "f1 ooo f14"),
        u(I, "class", "row ooo cp H-1k6tb88"),
        we(I, "active", !l[4].isSub),
        u($, "class", "bd B2 H-1k6tb88"),
        u(H, "class", "title p12 T1 fw3 H-1k6tb88"),
        u(z, "class", "db H-1k6tb88"),
        u(F, "class", "f1 sv subDiv H-1k6tb88"),
        u(G, "class", "bd df fdc ovh B2 mt20 H-1k6tb88"),
        u(_, "class", "df fdc jcsb mt8 ovh"),
        u(t, "class", "wrap H-1k6tb88"),
        u(te, "class", "iconfont mr8 f16"),
        u(he, "class", "f14"),
        u(re, "class", "add-sub fw2 cp H-1k6tb88"),
        u(e, "class", "df fdc jcsb f16 T2");
    },
    m(ee, fe) {
      M(ee, e, fe),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, r),
        f(r, o),
        f(n, s),
        f(n, a),
        f(a, h),
        f(t, m),
        f(t, p),
        f(t, g),
        f(t, _),
        f(_, $),
        f($, w),
        f(w, S),
        f($, T),
        f($, I),
        f(I, D),
        f(D, V),
        f(I, U),
        de && de.m(I, null),
        f(_, y),
        f(_, G),
        f(G, H),
        f(H, x),
        f(G, ne),
        f(G, F),
        f(F, z);
      for (let Ie = 0; Ie < se.length; Ie += 1) se[Ie] && se[Ie].m(z, null);
      f(e, le),
        f(e, re),
        f(re, te),
        f(te, ce),
        f(re, ie),
        f(re, he),
        f(he, Ee),
        ue ||
          ((W = [
            me(i, "click", l[9]),
            me(I, "click", l[6]),
            me(re, "click", l[10]),
          ]),
          (ue = !0));
    },
    p(ee, [fe]) {
      fe & 8 && c !== (c = ee[3](Se.SwitchAccount) + "") && J(h, c),
        fe & 8 && k !== (k = ee[3](Se.MainAccount) + "") && J(S, k),
        fe & 4 && O !== (O = ((ee[2] && ee[2].nickName) || "") + "") && J(V, O),
        ee[4].isSub
          ? de && (de.d(1), (de = null))
          : de || ((de = Rs()), de.c(), de.m(I, null)),
        fe & 16 && we(I, "active", !ee[4].isSub),
        fe & 8 && B !== (B = ee[3](Se.SubAccounts) + "") && J(x, B),
        fe & 146 &&
          ((ae = ee[1]),
          (se = Bn(se, fe, pe, 1, ee, ae, oe, z, ul, Ls, null, Vs))),
        fe & 8 && Ae !== (Ae = ee[3](Se.AddSubAccount) + "") && J(Ee, Ae);
    },
    i(ee) {
      Ce ||
        Un(() => {
          (Ce = fl(e, nl, { x: 220, duration: 200 })), Ce.start();
        });
    },
    o: Te,
    d(ee) {
      ee && d(e), de && de.d();
      for (let fe = 0; fe < se.length; fe += 1) se[fe].d();
      (ue = !1), pt(W);
    },
  };
}
function Qf(l, e, t) {
  let n, i, r, o, s, a;
  Y(l, Ja, (_) => t(8, (r = _))),
    Y(l, Ne, (_) => t(3, (o = _))),
    Y(l, ln, (_) => t(4, (s = _))),
    Y(l, Ye, (_) => t(5, (a = _)));
  let { viewType$: c } = e;
  async function h() {
    await Ri.switchToMasterAccount(), window.location.reload();
  }
  function m(_) {
    return async function () {
      await Ri.switchToSubAccount(_.clientCnt), window.location.reload();
    };
  }
  const p = () => c.set("Main"),
    g = () => location.assign(a(q.SUB_ACCOUNT_HOME));
  return (
    (l.$$set = (_) => {
      "viewType$" in _ && t(0, (c = _.viewType$));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 256 && t(2, (n = r.find((_) => !_.isSub))),
        l.$$.dirty & 256 &&
          t(1, (i = r.filter((_) => _.isSub && _.status !== 12)));
    }),
    [c, i, n, o, s, a, h, m, r, p, g]
  );
}
let Xf = class extends ve {
  constructor(e) {
    super(), be(this, e, Qf, Kf, _e, { viewType$: 0 });
  }
};
function Jf(l) {
  let e, t;
  return (
    (e = new Ra({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Zf(l) {
  let e, t;
  return (
    (e = new Xf({ props: { viewType$: l[2] } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function xf(l) {
  let e, t;
  return (
    (e = new Yf({ props: { viewType$: l[2], useTransition: l[0] } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 1 && (r.useTransition = n[0]), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function eu(l) {
  let e, t, n, i;
  const r = [xf, Zf, Jf],
    o = [];
  function s(a, c) {
    return a[1] === "Main"
      ? 0
      : a[1] === "AccountSelect"
      ? 1
      : a[1] === "LanguageSelect"
      ? 2
      : -1;
  }
  return (
    ~(t = s(l)) && (n = o[t] = r[t](l)),
    {
      c() {
        (e = v("div")), n && n.c(), this.h();
      },
      l(a) {
        e = b(a, "DIV", { class: !0 });
        var c = E(e);
        n && n.l(c), c.forEach(d), this.h();
      },
      h() {
        u(e, "class", "menu-wrap br12 B2 ovh H-1teu91i");
      },
      m(a, c) {
        M(a, e, c), ~t && o[t].m(e, null), (i = !0);
      },
      p(a, [c]) {
        let h = t;
        (t = s(a)),
          t === h
            ? ~t && o[t].p(a, c)
            : (n &&
                (De(),
                R(o[h], 1, 1, () => {
                  o[h] = null;
                }),
                He()),
              ~t
                ? ((n = o[t]),
                  n ? n.p(a, c) : ((n = o[t] = r[t](a)), n.c()),
                  P(n, 1),
                  n.m(e, null))
                : (n = null));
      },
      i(a) {
        i || (P(n), (i = !0));
      },
      o(a) {
        R(n), (i = !1);
      },
      d(a) {
        a && d(e), ~t && o[t].d();
      },
    }
  );
}
function tu(l, e, t) {
  let n;
  const i = Pa("Main");
  Y(l, i, (o) => t(1, (n = o)));
  let r = !1;
  return (
    Je(() =>
      setTimeout(() => {
        t(0, (r = !0));
      })
    ),
    [r, n, i]
  );
}
let nu = class extends ve {
  constructor(e) {
    super(), be(this, e, tu, eu, _e, {});
  }
};
function lu(l) {
  let e, t;
  return (
    (e = new nu({ props: { viewType$: l[1] } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function iu(l) {
  let e, t, n, i, r, o;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(s) {
      e = b(s, "DIV", { slot: !0, class: !0 });
      var a = E(e);
      t = b(a, "DIV", { class: !0 });
      var c = E(t);
      n = b(c, "I", { class: !0 });
      var h = E(n);
      (i = L(h, "")), h.forEach(d), c.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-7ec68q"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-7ec68q");
    },
    m(s, a) {
      M(s, e, a),
        f(e, t),
        f(t, n),
        f(n, i),
        r || ((o = me(e, "click", l[2])), (r = !0));
    },
    p: Te,
    d(s) {
      s && d(e), (r = !1), o();
    },
  };
}
function ru(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        noIcon: !0,
        noHoverColor: !0,
        triggerClass: "ml10",
        $$slots: { trigger: [iu], default: [lu] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 9 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function su(l, e, t) {
  let n;
  Y(l, Ye, (o) => t(0, (n = o)));
  const i = Pa("Main");
  return [n, i, () => location.assign(n(q.ACCOUNT_OVERVIEW))];
}
let au = class extends ve {
  constructor(e) {
    super(), be(this, e, su, ru, _e, {});
  }
};
function ou(l) {
  let e = l[1](ll.BackToLive) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 2 && e !== (e = n[1](ll.BackToLive) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function cu(l) {
  let e,
    t,
    n,
    i = l[1](ll.MockTrading) + "",
    r,
    o,
    s,
    a,
    c = l[1](j.TradingBot) + "",
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k,
    S;
  return (
    (w = new ut({
      props: {
        type: "primary",
        class: "live-btn fw3 ml12",
        $$slots: { default: [ou] },
        $$scope: { ctx: l },
      },
    })),
    w.$on("click", l[3]),
    {
      c() {
        (e = v("nav")),
          (t = v("div")),
          (n = v("div")),
          (r = N(i)),
          (o = A()),
          (s = v("a")),
          (a = v("div")),
          (h = N(c)),
          (m = A()),
          (p = v("img")),
          ($ = A()),
          K(w.$$.fragment),
          this.h();
      },
      l(T) {
        e = b(T, "NAV", { class: !0 });
        var I = E(e);
        t = b(I, "DIV", { class: !0 });
        var D = E(t);
        n = b(D, "DIV", { class: !0 });
        var O = E(n);
        (r = L(O, i)),
          O.forEach(d),
          (o = C(D)),
          (s = b(D, "A", { class: !0, href: !0 }));
        var V = E(s);
        a = b(V, "DIV", {});
        var U = E(a);
        (h = L(U, c)),
          U.forEach(d),
          (m = C(V)),
          (p = b(V, "IMG", { class: !0, src: !0, height: !0, alt: !0 })),
          V.forEach(d),
          D.forEach(d),
          ($ = C(I)),
          Z(w.$$.fragment, I),
          I.forEach(d),
          this.h();
      },
      h() {
        u(n, "class", "BLUE"),
          u(p, "class", "ml4"),
          ke(p.src, (g = ol.IMG_URL + "/v1/d4f84019/new.png")) ||
            u(p, "src", g),
          u(p, "height", "18"),
          u(p, "alt", "suffix"),
          u(s, "class", "menu-top df aic jcc ml16 T1"),
          u(s, "href", (_ = l[2](el.getMockPrefix() + q.STRATEGY_SQUARE))),
          u(t, "class", "df"),
          u(
            e,
            "class",
            (k = "mock-menu f1 df jcsb aic " + l[0] + " H-1y843wx")
          );
      },
      m(T, I) {
        M(T, e, I),
          f(e, t),
          f(t, n),
          f(n, r),
          f(t, o),
          f(t, s),
          f(s, a),
          f(a, h),
          f(s, m),
          f(s, p),
          f(e, $),
          Q(w, e, null),
          (S = !0);
      },
      p(T, [I]) {
        (!S || I & 2) && i !== (i = T[1](ll.MockTrading) + "") && J(r, i),
          (!S || I & 2) && c !== (c = T[1](j.TradingBot) + "") && J(h, c),
          (!S ||
            (I & 4 &&
              _ !== (_ = T[2](el.getMockPrefix() + q.STRATEGY_SQUARE)))) &&
            u(s, "href", _);
        const D = {};
        I & 18 && (D.$$scope = { dirty: I, ctx: T }),
          w.$set(D),
          (!S ||
            (I & 1 &&
              k !== (k = "mock-menu f1 df jcsb aic " + T[0] + " H-1y843wx"))) &&
            u(e, "class", k);
      },
      i(T) {
        S || (P(w.$$.fragment, T), (S = !0));
      },
      o(T) {
        R(w.$$.fragment, T), (S = !1);
      },
      d(T) {
        T && d(e), X(w);
      },
    }
  );
}
function fu(l, e, t) {
  let n, i;
  Y(l, Ne, (s) => t(1, (n = s))), Y(l, Ye, (s) => t(2, (i = s)));
  let { class: r = "" } = e;
  const o = () => el.gotoLive();
  return (
    (l.$$set = (s) => {
      "class" in s && t(0, (r = s.class));
    }),
    [r, n, i, o]
  );
}
let uu = class extends ve {
  constructor(e) {
    super(), be(this, e, fu, cu, _e, { class: 0 });
  }
};
function du(l) {
  let e, t, n, i, r, o, s, a, c, h, m, p, g, _, $, w, k;
  return {
    c() {
      (e = Ge("svg")),
        (t = Ge("g")),
        (n = Ge("path")),
        (i = Ge("path")),
        (r = Ge("path")),
        (o = Ge("path")),
        (s = Ge("path")),
        (a = Ge("path")),
        (c = Ge("path")),
        (h = Ge("path")),
        (m = Ge("path")),
        (p = Ge("path")),
        (g = Ge("path")),
        (_ = Ge("path")),
        ($ = Ge("path")),
        (w = Ge("path")),
        (k = Ge("path")),
        this.h();
    },
    l(S) {
      e = We(S, "svg", { style: !0, width: !0, height: !0, viewBox: !0 });
      var T = E(e);
      t = We(T, "g", { "fill-rule": !0, fill: !0 });
      var I = E(t);
      (n = We(I, "path", { d: !0, fill: !0 })),
        E(n).forEach(d),
        (i = We(I, "path", { d: !0, fill: !0 })),
        E(i).forEach(d),
        (r = We(I, "path", { d: !0, fill: !0 })),
        E(r).forEach(d),
        (o = We(I, "path", { d: !0, fill: !0 })),
        E(o).forEach(d),
        (s = We(I, "path", { d: !0, fill: !0 })),
        E(s).forEach(d),
        (a = We(I, "path", { d: !0, fill: !0 })),
        E(a).forEach(d),
        (c = We(I, "path", { d: !0, fill: !0 })),
        E(c).forEach(d),
        (h = We(I, "path", { d: !0, fill: !0 })),
        E(h).forEach(d),
        (m = We(I, "path", { d: !0, fill: !0 })),
        E(m).forEach(d),
        (p = We(I, "path", { d: !0, fill: !0 })),
        E(p).forEach(d),
        (g = We(I, "path", { d: !0, fill: !0 })),
        E(g).forEach(d),
        (_ = We(I, "path", { d: !0, fill: !0 })),
        E(_).forEach(d),
        ($ = We(I, "path", { d: !0, fill: !0 })),
        E($).forEach(d),
        (w = We(I, "path", { fill: !0, d: !0 })),
        E(w).forEach(d),
        (k = We(I, "path", { d: !0, fill: !0 })),
        E(k).forEach(d),
        I.forEach(d),
        T.forEach(d),
        this.h();
    },
    h() {
      u(
        n,
        "d",
        "M7.406 16.85c0-2.28 3.658-4.125 8.594-4.125s8.594 1.846 8.594 4.125v8.02c0 .76-.616 1.375-1.375 1.375H8.78c-.76 0-1.375-.616-1.375-1.375v-8.02z"
      ),
        u(n, "fill", "#FFF"),
        u(
          i,
          "d",
          "M23.219 24.87H8.78c-.76 0-1.375-.616-1.375-1.375v1.375c0 .76.616 1.375 1.375 1.375H23.22c.76 0 1.375-.616 1.375-1.375v-1.375c0 .76-.616 1.375-1.375 1.375z"
        ),
        u(i, "fill", "#EAEAF4"),
        u(
          r,
          "d",
          "M11.531 17.458h8.938c.916 0 1.375.459 1.375 1.375 0 .917-.459 1.375-1.375 1.375H11.53c-.916 0-1.375-.458-1.375-1.375 0-.916.459-1.375 1.375-1.375z"
        ),
        u(r, "fill", "#1B5EE4"),
        u(
          o,
          "d",
          "M20.469 17.469H11.53c-.76 0-1.375.615-1.375 1.375.002.116.018.231.048.343a1.375 1.375 0 0 1 1.327-1.03h8.938c.625.001 1.17.425 1.327 1.03.03-.112.046-.227.048-.343 0-.76-.616-1.375-1.375-1.375z"
        ),
        u(o, "fill", "#FFF"),
        u(
          s,
          "d",
          "M20.469 19.531H11.53a1.375 1.375 0 0 1-1.327-1.031c-.03.112-.046.228-.048.344 0 .76.616 1.375 1.375 1.375h8.938c.76 0 1.375-.616 1.375-1.375a1.375 1.375 0 0 0-.048-.344 1.375 1.375 0 0 1-1.327 1.031z"
        ),
        u(s, "fill", "#003398"),
        u(
          a,
          "d",
          "M7.097 22.237h-.963a.687.687 0 0 1-.687-.688v-2.062c0-.38.308-.688.687-.688h.963v3.438z"
        ),
        u(a, "fill", "#1B5EE4"),
        u(
          c,
          "d",
          "M5.447 20.862v.687c0 .38.308.688.687.688h.963v-.688h-.963a.687.687 0 0 1-.687-.687z"
        ),
        u(c, "fill", "#003398"),
        u(
          h,
          "d",
          "M6.134 18.8a.687.687 0 0 0-.687.687v.584c0-.38.308-.688.687-.688h.963V18.8h-.963z"
        ),
        u(h, "fill", "#FFF"),
        u(
          m,
          "d",
          "M24.869 22.237h.962c.38 0 .688-.308.688-.688v-2.062a.687.687 0 0 0-.688-.688h-.962v3.438z"
        ),
        u(m, "fill", "#1B5EE4"),
        u(
          p,
          "d",
          "M26.519 20.862v.687c0 .38-.308.688-.688.688h-.962v-.688h.962c.38 0 .688-.308.688-.687z"
        ),
        u(p, "fill", "#003398"),
        u(
          g,
          "d",
          "M25.831 18.8c.38 0 .688.307.688.687v.584a.687.687 0 0 0-.688-.688h-.962V18.8h.962z"
        ),
        u(g, "fill", "#FFF"),
        u(
          _,
          "d",
          "M25.969 18.455h-.86V16.85c0-1.55-1.347-2.88-3.51-3.713l1.276-2.2a.688.688 0 1 0-.595-.343l-1.344 2.327A16.552 16.552 0 0 0 16 12.209c-1.67-.02-3.335.21-4.936.688L9.72 10.594a.687.687 0 1 0-.595.344l1.279 2.213c-2.166.818-3.513 2.145-3.513 3.699v1.605h-.86c-.57 0-1.031.462-1.031 1.032v2.062c0 .57.462 1.031 1.031 1.031h.86v2.293a1.894 1.894 0 0 0 1.89 1.877H23.22a1.894 1.894 0 0 0 1.89-1.89v-2.28h.86c.57 0 1.031-.461 1.031-1.03v-2.063c0-.57-.462-1.032-1.031-1.032zM6.03 21.893a.344.344 0 0 1-.343-.344v-2.062c0-.19.153-.344.343-.344h.86v2.75h-.86zm18.047 2.98a.86.86 0 0 1-.86.846H8.782a.86.86 0 0 1-.86-.86V16.85c0-1.719 3.095-3.61 8.079-3.61s8.078 1.874 8.078 3.61v8.023zm2.235-3.324c0 .19-.154.344-.344.344h-.86v-2.75h.86c.19 0 .343.154.343.344v2.062z"
        ),
        u(_, "fill", "#3A394B"),
        u(
          $,
          "d",
          "M20.469 17.125H11.53a1.719 1.719 0 0 0 0 3.438h8.938a1.719 1.719 0 0 0 0-3.438zm0 2.75H11.53a1.031 1.031 0 0 1 0-2.063h8.938a1.031 1.031 0 0 1 0 2.063z"
        ),
        u($, "fill", "#3A394B"),
        u(w, "fill", "#1B5EE4"),
        u(
          w,
          "d",
          "M17.787 7.101l-3.358 4.524 1.06-3.46-1.414-.133 3.182-4.657-1.061 3.593z"
        ),
        u(
          k,
          "d",
          "M14.568 11.625c-.016 0-.032 0-.065-.013-.08-.026-.113-.09-.097-.155l.938-3.198-1.115-.116a.174.174 0 0 1-.13-.065c-.032-.039-.032-.077 0-.116l2.91-4.514c.032-.052.13-.09.194-.065.08.026.113.09.097.155l-.938 3.34 1.278.117c.048 0 .097.025.129.064s.016.09 0 .116l-3.072 4.386c-.016.038-.064.064-.129.064zm-.08-3.715l1.066.104c.049 0 .081.025.113.051.033.026.033.065.033.103l-.712 2.477 2.393-3.431-1.213-.103c-.048 0-.08-.026-.113-.052-.032-.026-.032-.064-.032-.103l.695-2.502-2.23 3.456z"
        ),
        u(k, "fill", "#003398"),
        u(t, "fill-rule", "nonzero"),
        u(t, "fill", "none"),
        ze(e, "display", "inline-block"),
        ze(e, "vertical-align", "middle"),
        ze(e, "margin-bottom", "10px"),
        u(e, "width", "32"),
        u(e, "height", "32"),
        u(e, "viewBox", "0 0 32 32");
    },
    m(S, T) {
      M(S, e, T),
        f(e, t),
        f(t, n),
        f(t, i),
        f(t, r),
        f(t, o),
        f(t, s),
        f(t, a),
        f(t, c),
        f(t, h),
        f(t, m),
        f(t, p),
        f(t, g),
        f(t, _),
        f(t, $),
        f(t, w),
        f(t, k);
    },
    p: Te,
    i: Te,
    o: Te,
    d(S) {
      S && d(e);
    },
  };
}
let hu = class extends ve {
  constructor(e) {
    super(), be(this, e, null, du, _e, {});
  }
};
function mu(l) {
  let e, t, n, i, r;
  function o(h) {
    l[20](h);
  }
  function s(h) {
    l[21](h);
  }
  function a(h) {
    l[22](h);
  }
  let c = {
    class: l[19],
    isInline: l[13],
    label: l[9],
    placeholder: l[10],
    unit: l[11],
    factor: l[6],
    scale: l[7],
    precision: l[8],
    disabled: l[12],
    height: l[14],
    operation: l[15],
    isDropdown: l[17],
    options: l[16],
    useBlur: l[18],
    minEx: l[3],
    maxEx: l[4],
    tickSizeEx: l[5],
  };
  return (
    l[1] !== void 0 && (c.valueEx = l[1]),
    l[0] !== void 0 && (c.input = l[0]),
    l[2] !== void 0 && (c.qtyType = l[2]),
    (e = new qo({ props: c })),
    Oe.push(() => tt(e, "valueEx", o)),
    Oe.push(() => tt(e, "input", s)),
    Oe.push(() => tt(e, "qtyType", a)),
    e.$on("change", l[23]),
    e.$on("focus", l[24]),
    e.$on("click", l[25]),
    e.$on("input", l[26]),
    e.$on("blur", l[27]),
    {
      c() {
        K(e.$$.fragment);
      },
      l(h) {
        Z(e.$$.fragment, h);
      },
      m(h, m) {
        Q(e, h, m), (r = !0);
      },
      p(h, [m]) {
        const p = {};
        m & 524288 && (p.class = h[19]),
          m & 8192 && (p.isInline = h[13]),
          m & 512 && (p.label = h[9]),
          m & 1024 && (p.placeholder = h[10]),
          m & 2048 && (p.unit = h[11]),
          m & 64 && (p.factor = h[6]),
          m & 128 && (p.scale = h[7]),
          m & 256 && (p.precision = h[8]),
          m & 4096 && (p.disabled = h[12]),
          m & 16384 && (p.height = h[14]),
          m & 32768 && (p.operation = h[15]),
          m & 131072 && (p.isDropdown = h[17]),
          m & 65536 && (p.options = h[16]),
          m & 262144 && (p.useBlur = h[18]),
          m & 8 && (p.minEx = h[3]),
          m & 16 && (p.maxEx = h[4]),
          m & 32 && (p.tickSizeEx = h[5]),
          !t && m & 2 && ((t = !0), (p.valueEx = h[1]), nt(() => (t = !1))),
          !n && m & 1 && ((n = !0), (p.input = h[0]), nt(() => (n = !1))),
          !i && m & 4 && ((i = !0), (p.qtyType = h[2]), nt(() => (i = !1))),
          e.$set(p);
      },
      i(h) {
        r || (P(e.$$.fragment, h), (r = !0));
      },
      o(h) {
        R(e.$$.fragment, h), (r = !1);
      },
      d(h) {
        X(e, h);
      },
    }
  );
}
function pu(l, e, t) {
  let { input: n = null } = e,
    { quantity: i = 0 } = e,
    { minQuantity: r = 0 } = e,
    { maxQuantity: o = 0 } = e,
    { tickSizeEx: s = 1 } = e,
    { factor: a = 1 } = e,
    { scale: c = 0 } = e,
    { precision: h = 0 } = e,
    { label: m = "" } = e,
    { placeholder: p = "" } = e,
    { unit: g = "" } = e,
    { disabled: _ = !1 } = e,
    { isInline: $ = !0 } = e,
    { height: w = 42 } = e,
    { operation: k = !0 } = e,
    { options: S = [] } = e,
    { qtyType: T = "" } = e,
    { isDropdown: I = !1 } = e,
    { useBlur: D = !1 } = e,
    { class: O = "" } = e;
  function V(F) {
    (i = F), t(1, i);
  }
  function U(F) {
    (n = F), t(0, n);
  }
  function y(F) {
    (T = F), t(2, T);
  }
  function G(F) {
    tn.call(this, l, F);
  }
  function H(F) {
    tn.call(this, l, F);
  }
  function B(F) {
    tn.call(this, l, F);
  }
  function x(F) {
    tn.call(this, l, F);
  }
  function ne(F) {
    tn.call(this, l, F);
  }
  return (
    (l.$$set = (F) => {
      "input" in F && t(0, (n = F.input)),
        "quantity" in F && t(1, (i = F.quantity)),
        "minQuantity" in F && t(3, (r = F.minQuantity)),
        "maxQuantity" in F && t(4, (o = F.maxQuantity)),
        "tickSizeEx" in F && t(5, (s = F.tickSizeEx)),
        "factor" in F && t(6, (a = F.factor)),
        "scale" in F && t(7, (c = F.scale)),
        "precision" in F && t(8, (h = F.precision)),
        "label" in F && t(9, (m = F.label)),
        "placeholder" in F && t(10, (p = F.placeholder)),
        "unit" in F && t(11, (g = F.unit)),
        "disabled" in F && t(12, (_ = F.disabled)),
        "isInline" in F && t(13, ($ = F.isInline)),
        "height" in F && t(14, (w = F.height)),
        "operation" in F && t(15, (k = F.operation)),
        "options" in F && t(16, (S = F.options)),
        "qtyType" in F && t(2, (T = F.qtyType)),
        "isDropdown" in F && t(17, (I = F.isDropdown)),
        "useBlur" in F && t(18, (D = F.useBlur)),
        "class" in F && t(19, (O = F.class));
    }),
    [
      n,
      i,
      T,
      r,
      o,
      s,
      a,
      c,
      h,
      m,
      p,
      g,
      _,
      $,
      w,
      k,
      S,
      I,
      D,
      O,
      V,
      U,
      y,
      G,
      H,
      B,
      x,
      ne,
    ]
  );
}
let Ms = class extends ve {
  constructor(e) {
    super(),
      be(this, e, pu, mu, _e, {
        input: 0,
        quantity: 1,
        minQuantity: 3,
        maxQuantity: 4,
        tickSizeEx: 5,
        factor: 6,
        scale: 7,
        precision: 8,
        label: 9,
        placeholder: 10,
        unit: 11,
        disabled: 12,
        isInline: 13,
        height: 14,
        operation: 15,
        options: 16,
        qtyType: 2,
        isDropdown: 17,
        useBlur: 18,
        class: 19,
      });
  }
};
function Us(l, e, t) {
  const n = l.slice();
  return (n[11] = e[t]), (n[13] = t), n;
}
function ys(l, e) {
  let t,
    n,
    i,
    r,
    o = e[11] + "",
    s,
    a,
    c,
    h;
  return {
    key: l,
    first: null,
    c() {
      (t = v("div")),
        (n = v("i")),
        (i = A()),
        (r = v("div")),
        (s = N(o)),
        (a = A()),
        this.h();
    },
    l(m) {
      t = b(m, "DIV", { class: !0 });
      var p = E(t);
      (n = b(p, "I", { class: !0 })),
        E(n).forEach(d),
        (i = C(p)),
        (r = b(p, "DIV", { class: !0 }));
      var g = E(r);
      (s = L(g, o)), g.forEach(d), (a = C(p)), p.forEach(d), this.h();
    },
    h() {
      u(n, "class", "dot cp H-1y4naqs"),
        u(r, "class", "mt5 f12 cp H-1y4naqs"),
        we(r, "active", e[0] === e[11]),
        u(t, "class", "df fdc aic w32 H-1y4naqs"),
        (this.first = t);
    },
    m(m, p) {
      M(m, t, p),
        f(t, n),
        f(t, i),
        f(t, r),
        f(r, s),
        f(t, a),
        c ||
          ((h = me(t, "click", function () {
            at(e[7](e[13], e[11])) && e[7](e[13], e[11]).apply(this, arguments);
          })),
          (c = !0));
    },
    p(m, p) {
      (e = m),
        p & 2 && o !== (o = e[11] + "") && J(s, o),
        p & 3 && we(r, "active", e[0] === e[11]);
    },
    d(m) {
      m && d(t), (c = !1), h();
    },
  };
}
function _u(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    h = [],
    m = new Map(),
    p = l[1];
  const g = (_) => _[13];
  for (let _ = 0; _ < p.length; _ += 1) {
    let $ = Us(l, p, _),
      w = g($);
    m.set(w, (h[_] = ys(w, $)));
  }
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("div")),
        (i = Ge("svg")),
        (r = Ge("g")),
        (o = Ge("path")),
        (a = A()),
        (c = v("div"));
      for (let _ = 0; _ < h.length; _ += 1) h[_].c();
      this.h();
    },
    l(_) {
      e = b(_, "DIV", { class: !0 });
      var $ = E(e);
      t = b($, "DIV", { class: !0 });
      var w = E(t);
      n = b(w, "DIV", { class: !0, style: !0 });
      var k = E(n);
      i = We(k, "svg", { class: !0, width: !0, height: !0 });
      var S = E(i);
      r = We(S, "g", { fill: !0, "fill-rule": !0 });
      var T = E(r);
      (o = We(T, "path", { d: !0 })),
        E(o).forEach(d),
        T.forEach(d),
        S.forEach(d),
        k.forEach(d),
        w.forEach(d),
        (a = C($)),
        (c = b($, "DIV", { class: !0 }));
      var I = E(c);
      for (let D = 0; D < h.length; D += 1) h[D].l(I);
      I.forEach(d), $.forEach(d), this.h();
    },
    h() {
      u(
        o,
        "d",
        "M16.2 7l4.8 5-4.8 5-1.2-1.25L18.599 12 15 8.25zM7.8 7L3 12l4.8 5L9 15.75 5.401 12 9 8.25z"
      ),
        u(r, "fill", "#FFF"),
        u(r, "fill-rule", "evenodd"),
        u(i, "class", "icon pa H-1y4naqs"),
        u(i, "width", "24"),
        u(i, "height", "24"),
        u(n, "class", "slider cp df aic pa H-1y4naqs"),
        ze(n, "left", l[5] + "px"),
        we(n, "grabbing", l[6]),
        u(t, "class", "line pr H-1y4naqs"),
        Un(() => l[10].call(t)),
        u(c, "class", "df jcsb usn sliderLine"),
        u(e, "class", "T3");
    },
    m(_, $) {
      M(_, e, $),
        f(e, t),
        f(t, n),
        f(n, i),
        f(i, r),
        f(r, o),
        l[8](n),
        l[9](t),
        (s = ko(t, l[10].bind(t))),
        f(e, a),
        f(e, c);
      for (let w = 0; w < h.length; w += 1) h[w] && h[w].m(c, null);
    },
    p(_, [$]) {
      $ & 32 && ze(n, "left", _[5] + "px"),
        $ & 64 && we(n, "grabbing", _[6]),
        $ & 131 &&
          ((p = _[1]), (h = Bn(h, $, g, 1, _, p, m, c, ul, ys, null, Us)));
    },
    i: Te,
    o: Te,
    d(_) {
      _ && d(e), l[8](null), l[9](null), s();
      for (let $ = 0; $ < h.length; $ += 1) h[$].d();
    },
  };
}
function gu(l) {
  let e = l.offsetLeft,
    t = l.offsetParent;
  for (; t != null; ) (e += t.offsetLeft), (t = t.offsetParent);
  return e;
}
function Vi(l, e, t) {
  const n = l / (e.length - 1);
  return t * (n - (8 + t));
}
function vu(l, e, t) {
  if (l >= e) return t.length - 1;
  if (l <= 0) return 0;
  const n = e / t.length,
    i = Math.floor(l / n);
  return i < t.length ? i : t.length - 1;
}
const Ml = 0;
function bu(l, e, t) {
  let { items: n = [] } = e,
    { selected: i = null } = e,
    r,
    o,
    s = 0,
    a = Ml,
    c = !1;
  Je(() => {
    t(
      4,
      (o.onmousedown = (_) => {
        _.stopPropagation(),
          t(6, (c = !0)),
          (document.onmousemove = ($) => {
            $.stopPropagation();
            const w = $.clientX,
              k = gu(r),
              S = vu(w - k, s, n);
            t(5, (a = Vi(s, n, S) - Ml)), t(0, (i = n[S]));
          }),
          (document.onmouseup = function () {
            _.stopPropagation(),
              (this.onmousemove = null),
              (this.onmouseup = null),
              t(6, (c = !1));
          });
      }),
      o
    );
  });
  function h(_, $) {
    return () => {
      t(0, (i = $)), t(5, (a = Vi(s, n, _) - Ml));
    };
  }
  function m(_) {
    Oe[_ ? "unshift" : "push"](() => {
      (o = _), t(4, o);
    });
  }
  function p(_) {
    Oe[_ ? "unshift" : "push"](() => {
      (r = _), t(3, r);
    });
  }
  function g() {
    (s = this.offsetWidth), t(2, s);
  }
  return (
    (l.$$set = (_) => {
      "items" in _ && t(1, (n = _.items)),
        "selected" in _ && t(0, (i = _.selected));
    }),
    (l.$$.update = () => {
      if (l.$$.dirty & 7) {
        const _ = n.findIndex(($) => i === $);
        t(5, (a = Vi(s, n, _) - Ml));
      }
    }),
    [i, n, s, r, o, a, c, h, m, p, g]
  );
}
let Bs = class extends ve {
  constructor(e) {
    super(), be(this, e, bu, _u, _e, { items: 1, selected: 0 });
  }
};
const Nn = { SpeedRobotSettings: "980063", Tps: "5e8a77" };
function $u(l) {
  let e,
    t,
    n = l[6](Le.Buy) + "",
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p = l[6](Nn.Tps) + "",
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I = l[6](Le.Sell) + "",
    D,
    O,
    V,
    U,
    y,
    G,
    H,
    B = l[6](Nn.Tps) + "",
    x,
    ne,
    F,
    z,
    se,
    oe;
  function le(ue) {
    l[10](ue);
  }
  function re(ue) {
    l[11](ue);
  }
  let te = { isInline: !1, maxQuantity: l[5].maxOrderQty };
  l[0] !== void 0 && (te.input = l[0]),
    l[3] !== void 0 && (te.quantity = l[3]),
    (s = new Ms({ props: te })),
    Oe.push(() => tt(s, "input", le)),
    Oe.push(() => tt(s, "quantity", re));
  function ce(ue) {
    l[12](ue);
  }
  let ie = { items: l[7] };
  l[1] !== void 0 && (ie.selected = l[1]),
    (w = new Bs({ props: ie })),
    Oe.push(() => tt(w, "selected", ce));
  function he(ue) {
    l[13](ue);
  }
  let Ae = { isInline: !1, maxQuantity: l[5].maxOrderQty };
  l[4] !== void 0 && (Ae.quantity = l[4]),
    (U = new Ms({ props: Ae })),
    Oe.push(() => tt(U, "quantity", he));
  function Ee(ue) {
    l[14](ue);
  }
  let Ce = { items: l[7] };
  return (
    l[2] !== void 0 && (Ce.selected = l[2]),
    (z = new Bs({ props: Ce })),
    Oe.push(() => tt(z, "selected", Ee)),
    {
      c() {
        (e = v("div")),
          (t = v("p")),
          (i = N(n)),
          (r = A()),
          (o = v("div")),
          K(s.$$.fragment),
          (h = A()),
          (m = v("p")),
          (g = N(p)),
          (_ = A()),
          ($ = v("div")),
          K(w.$$.fragment),
          (S = A()),
          (T = v("p")),
          (D = N(I)),
          (O = A()),
          (V = v("div")),
          K(U.$$.fragment),
          (G = A()),
          (H = v("p")),
          (x = N(B)),
          (ne = A()),
          (F = v("div")),
          K(z.$$.fragment),
          this.h();
      },
      l(ue) {
        e = b(ue, "DIV", { class: !0 });
        var W = E(e);
        t = b(W, "P", { class: !0 });
        var de = E(t);
        (i = L(de, n)),
          de.forEach(d),
          (r = C(W)),
          (o = b(W, "DIV", { class: !0 }));
        var ae = E(o);
        Z(s.$$.fragment, ae),
          ae.forEach(d),
          (h = C(W)),
          (m = b(W, "P", { class: !0 }));
        var pe = E(m);
        (g = L(pe, p)),
          pe.forEach(d),
          (_ = C(W)),
          ($ = b(W, "DIV", { class: !0 }));
        var ee = E($);
        Z(w.$$.fragment, ee),
          ee.forEach(d),
          (S = C(W)),
          (T = b(W, "P", { class: !0 }));
        var fe = E(T);
        (D = L(fe, I)),
          fe.forEach(d),
          (O = C(W)),
          (V = b(W, "DIV", { class: !0 }));
        var Ie = E(V);
        Z(U.$$.fragment, Ie),
          Ie.forEach(d),
          (G = C(W)),
          (H = b(W, "P", { class: !0 }));
        var Me = E(H);
        (x = L(Me, B)),
          Me.forEach(d),
          (ne = C(W)),
          (F = b(W, "DIV", { class: !0 }));
        var je = E(F);
        Z(z.$$.fragment, je), je.forEach(d), W.forEach(d), this.h();
      },
      h() {
        u(t, "class", "buy p0 H-4d5zpy"),
          u(o, "class", "mt16"),
          u(m, "class", "title H-4d5zpy"),
          u($, "class", "mt24"),
          u(T, "class", "sell mt24 H-4d5zpy"),
          u(V, "class", "mt16"),
          u(H, "class", "title H-4d5zpy"),
          u(F, "class", "mt24"),
          u(e, "class", "body pl24 pr24 H-4d5zpy");
      },
      m(ue, W) {
        M(ue, e, W),
          f(e, t),
          f(t, i),
          f(e, r),
          f(e, o),
          Q(s, o, null),
          f(e, h),
          f(e, m),
          f(m, g),
          f(e, _),
          f(e, $),
          Q(w, $, null),
          f(e, S),
          f(e, T),
          f(T, D),
          f(e, O),
          f(e, V),
          Q(U, V, null),
          f(e, G),
          f(e, H),
          f(H, x),
          f(e, ne),
          f(e, F),
          Q(z, F, null),
          (oe = !0);
      },
      p(ue, W) {
        (!oe || W & 64) && n !== (n = ue[6](Le.Buy) + "") && J(i, n);
        const de = {};
        W & 32 && (de.maxQuantity = ue[5].maxOrderQty),
          !a && W & 1 && ((a = !0), (de.input = ue[0]), nt(() => (a = !1))),
          !c && W & 8 && ((c = !0), (de.quantity = ue[3]), nt(() => (c = !1))),
          s.$set(de),
          (!oe || W & 64) && p !== (p = ue[6](Nn.Tps) + "") && J(g, p);
        const ae = {};
        !k && W & 2 && ((k = !0), (ae.selected = ue[1]), nt(() => (k = !1))),
          w.$set(ae),
          (!oe || W & 64) && I !== (I = ue[6](Le.Sell) + "") && J(D, I);
        const pe = {};
        W & 32 && (pe.maxQuantity = ue[5].maxOrderQty),
          !y && W & 16 && ((y = !0), (pe.quantity = ue[4]), nt(() => (y = !1))),
          U.$set(pe),
          (!oe || W & 64) && B !== (B = ue[6](Nn.Tps) + "") && J(x, B);
        const ee = {};
        !se && W & 4 && ((se = !0), (ee.selected = ue[2]), nt(() => (se = !1))),
          z.$set(ee);
      },
      i(ue) {
        oe ||
          (P(s.$$.fragment, ue),
          P(w.$$.fragment, ue),
          P(U.$$.fragment, ue),
          P(z.$$.fragment, ue),
          (oe = !0));
      },
      o(ue) {
        R(s.$$.fragment, ue),
          R(w.$$.fragment, ue),
          R(U.$$.fragment, ue),
          R(z.$$.fragment, ue),
          (oe = !1);
      },
      d(ue) {
        ue && d(e), X(s), X(w), X(U), X(z);
      },
    }
  );
}
function Eu(l) {
  let e,
    t = l[6](Nn.SpeedRobotSettings) + "",
    n;
  return {
    c() {
      (e = v("div")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "DIV", { class: !0, slot: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "class", "header df ph24 b f16 T2 H-4d5zpy"), u(e, "slot", "header");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 64 && t !== (t = i[6](Nn.SpeedRobotSettings) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function wu(l) {
  let e = l[6](Le.Cancel) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 64 && e !== (e = n[6](Le.Cancel) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function ku(l) {
  let e = l[6](Le.Confirm) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 64 && e !== (e = n[6](Le.Confirm) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function Tu(l) {
  let e, t, n, i, r;
  return (
    (t = new ut({
      props: { $$slots: { default: [wu] }, $$scope: { ctx: l } },
    })),
    t.$on("click", l[8]),
    (i = new ut({
      props: {
        type: "primary",
        $$slots: { default: [ku] },
        $$scope: { ctx: l },
      },
    })),
    i.$on("click", l[9]),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), (n = A()), K(i.$$.fragment), this.h();
      },
      l(o) {
        e = b(o, "DIV", { class: !0, slot: !0 });
        var s = E(e);
        Z(t.$$.fragment, s),
          (n = C(s)),
          Z(i.$$.fragment, s),
          s.forEach(d),
          this.h();
      },
      h() {
        u(e, "class", "p24 tr"), u(e, "slot", "footer");
      },
      m(o, s) {
        M(o, e, s), Q(t, e, null), f(e, n), Q(i, e, null), (r = !0);
      },
      p(o, s) {
        const a = {};
        s & 65600 && (a.$$scope = { dirty: s, ctx: o }), t.$set(a);
        const c = {};
        s & 65600 && (c.$$scope = { dirty: s, ctx: o }), i.$set(c);
      },
      i(o) {
        r || (P(t.$$.fragment, o), P(i.$$.fragment, o), (r = !0));
      },
      o(o) {
        R(t.$$.fragment, o), R(i.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && d(e), X(t), X(i);
      },
    }
  );
}
function Iu(l) {
  let e, t;
  return (
    (e = new dl({
      props: {
        style: "max-width:498px;",
        $$slots: { footer: [Tu], header: [Eu], default: [$u] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 65663 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Au(l, e, t) {
  let n, i;
  Y(l, jl, (T) => t(5, (n = T))), Y(l, Ne, (T) => t(6, (i = T)));
  const r = cl(),
    o = [0, 2e3, 5e3, 1e4];
  let s = null,
    a = 0,
    c = 0,
    h = 1,
    m = 1;
  Je(() => {
    s && s.focus();
  });
  function p() {
    r("close");
  }
  async function g() {
    if (h > 5 || m > 5) {
      alert("Quantity must be between 1-5");
      return;
    }
    const T = {
        symbol: n.symbol,
        buyQtyPerOrder: h,
        buyOrderNumberPerSec: a,
        sellQtyPerOrder: m,
        sellOrderNumberPerSec: c,
      },
      { data: I, error: D } = await Za.orderBookAdjust(T);
    I && r("close"), D && mt.send("toast", "error", D);
  }
  function _(T) {
    (s = T), t(0, s);
  }
  function $(T) {
    (h = T), t(3, h);
  }
  function w(T) {
    (a = T), t(1, a);
  }
  function k(T) {
    (m = T), t(4, m);
  }
  function S(T) {
    (c = T), t(2, c);
  }
  return [s, a, c, h, m, n, i, o, p, g, _, $, w, k, S];
}
let Cu = class extends ve {
  constructor(e) {
    super(), be(this, e, Au, Iu, _e, {});
  }
};
function Su(l) {
  let e, t, n, i, r;
  return (
    (t = new hu({})),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(o) {
        e = b(o, "DIV", { class: !0 });
        var s = E(e);
        Z(t.$$.fragment, s), s.forEach(d), this.h();
      },
      h() {
        u(e, "class", "robot mr16 cp");
      },
      m(o, s) {
        M(o, e, s),
          Q(t, e, null),
          (n = !0),
          i || ((r = me(e, "click", l[0])), (i = !0));
      },
      p: Te,
      i(o) {
        n || (P(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        R(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && d(e), X(t), (i = !1), r();
      },
    }
  );
}
function Du(l) {
  function e() {
    tl.create(Cu, {});
  }
  return [e];
}
let Hu = class extends ve {
  constructor(e) {
    super(), be(this, e, Du, Su, _e, {});
  }
};
function Pu(l) {
  let e, t, n, i, r;
  const o = l[4].default,
    s = rn(o, l, l[3], null);
  return {
    c() {
      (e = v("div")), s && s.c(), this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var c = E(e);
      s && s.l(c), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", (t = "wrap f1 pr cp T2 " + l[0] + " H-1qh3ce4")),
        we(e, "disabled", l[2]),
        we(e, "active", l[1]);
    },
    m(a, c) {
      M(a, e, c),
        s && s.m(e, null),
        (n = !0),
        i || ((r = [me(e, "click", l[5]), me(e, "mousedown", Ou)]), (i = !0));
    },
    p(a, [c]) {
      s &&
        s.p &&
        (!n || c & 8) &&
        sn(s, o, a, a[3], n ? on(o, a[3], c, null) : an(a[3]), null),
        (!n ||
          (c & 1 && t !== (t = "wrap f1 pr cp T2 " + a[0] + " H-1qh3ce4"))) &&
          u(e, "class", t),
        (!n || c & 5) && we(e, "disabled", a[2]),
        (!n || c & 3) && we(e, "active", a[1]);
    },
    i(a) {
      n || (P(s, a), (n = !0));
    },
    o(a) {
      R(s, a), (n = !1);
    },
    d(a) {
      a && d(e), s && s.d(a), (i = !1), pt(r);
    },
  };
}
function Ou(l) {
  l.stopPropagation();
}
function Vu(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e,
    { class: r = "" } = e,
    { active: o = !1 } = e,
    { disabled: s = !1 } = e;
  function a(c) {
    tn.call(this, l, c);
  }
  return (
    (l.$$set = (c) => {
      "class" in c && t(0, (r = c.class)),
        "active" in c && t(1, (o = c.active)),
        "disabled" in c && t(2, (s = c.disabled)),
        "$$scope" in c && t(3, (i = c.$$scope));
    }),
    [r, o, s, i, n, a]
  );
}
let Fs = class extends ve {
  constructor(e) {
    super(), be(this, e, Vu, Pu, _e, { class: 0, active: 1, disabled: 2 });
  }
};
const Ln = {
  DisplayEdLeverage: "4c827e",
  PositionLeverage: "15703d",
  YourChosen: "82e3e7",
  ActualLeverage: "4d5986",
  CalculatorByDividing: "6cd085",
};
function Gs(l, e, t) {
  const n = l.slice();
  return (n[10] = e[t]), n;
}
function Ws(l, e) {
  let t,
    n,
    i = e[10].title + "",
    r,
    o,
    s,
    a = e[10].content + "",
    c,
    h,
    m,
    p;
  return {
    key: l,
    first: null,
    c() {
      (t = v("div")),
        (n = v("div")),
        (r = N(i)),
        (o = A()),
        (s = v("div")),
        (c = N(a)),
        (h = A()),
        this.h();
    },
    l(g) {
      t = b(g, "DIV", { class: !0 });
      var _ = E(t);
      n = b(_, "DIV", { class: !0 });
      var $ = E(n);
      (r = L($, i)), $.forEach(d), (o = C(_)), (s = b(_, "DIV", { class: !0 }));
      var w = E(s);
      (c = L(w, a)), w.forEach(d), (h = C(_)), _.forEach(d), this.h();
    },
    h() {
      u(n, "class", "T1"),
        u(s, "class", "mt8 lh18 T3"),
        u(t, "class", "row p16 cp pr H-1hcniq1"),
        we(t, "active", e[10].value === e[1]),
        (this.first = t);
    },
    m(g, _) {
      M(g, t, _),
        f(t, n),
        f(n, r),
        f(t, o),
        f(t, s),
        f(s, c),
        f(t, h),
        m ||
          ((p = me(t, "click", function () {
            at(e[5](e[10])) && e[5](e[10]).apply(this, arguments);
          })),
          (m = !0));
    },
    p(g, _) {
      (e = g),
        _ & 4 && i !== (i = e[10].title + "") && J(r, i),
        _ & 4 && a !== (a = e[10].content + "") && J(c, a),
        _ & 6 && we(t, "active", e[10].value === e[1]);
    },
    d(g) {
      g && d(t), (m = !1), p();
    },
  };
}
function Ru(l) {
  let e,
    t = [],
    n = new Map(),
    i = l[2];
  const r = (o) => o[10].title;
  for (let o = 0; o < i.length; o += 1) {
    let s = Gs(l, i, o),
      a = r(s);
    n.set(a, (t[o] = Ws(a, s)));
  }
  return {
    c() {
      e = v("div");
      for (let o = 0; o < t.length; o += 1) t[o].c();
      this.h();
    },
    l(o) {
      e = b(o, "DIV", { class: !0 });
      var s = E(e);
      for (let a = 0; a < t.length; a += 1) t[a].l(s);
      s.forEach(d), this.h();
    },
    h() {
      u(e, "class", "body H-1hcniq1");
    },
    m(o, s) {
      M(o, e, s);
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(e, null);
    },
    p(o, s) {
      s & 38 &&
        ((i = o[2]), (t = Bn(t, s, r, 1, o, i, n, e, ul, Ws, null, Gs)));
    },
    d(o) {
      o && d(e);
      for (let s = 0; s < t.length; s += 1) t[s].d();
    },
  };
}
function Nu(l) {
  let e,
    t,
    n = l[0](Ln.DisplayEdLeverage) + "",
    i,
    r,
    o,
    s,
    a,
    c;
  return {
    c() {
      (e = v("div")),
        (t = v("span")),
        (i = N(n)),
        (r = A()),
        (o = v("i")),
        (s = N("")),
        this.h();
    },
    l(h) {
      e = b(h, "DIV", { class: !0, slot: !0 });
      var m = E(e);
      t = b(m, "SPAN", {});
      var p = E(t);
      (i = L(p, n)), p.forEach(d), (r = C(m)), (o = b(m, "I", { class: !0 }));
      var g = E(o);
      (s = L(g, "")), g.forEach(d), m.forEach(d), this.h();
    },
    h() {
      u(o, "class", "iconfont cp f20 fw3 T3"),
        u(e, "class", "df jcsb aic f18 T2"),
        u(e, "slot", "header");
    },
    m(h, m) {
      M(h, e, m),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        a || ((c = me(o, "click", l[3])), (a = !0));
    },
    p(h, m) {
      m & 1 && n !== (n = h[0](Ln.DisplayEdLeverage) + "") && J(i, n);
    },
    d(h) {
      h && d(e), (a = !1), c();
    },
  };
}
function Lu(l) {
  let e = l[0](Le.Confirm) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 1 && e !== (e = n[0](Le.Confirm) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function Mu(l) {
  let e, t, n;
  return (
    (t = new ut({
      props: {
        class: "wp100",
        type: "primary",
        loading: yu,
        $$slots: { default: [Lu] },
        $$scope: { ctx: l },
      },
    })),
    t.$on("click", l[4]),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "DIV", { class: !0, slot: !0 });
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        u(e, "class", "footer"), u(e, "slot", "footer");
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 8193 && (o.$$scope = { dirty: r, ctx: i }), t.$set(o);
      },
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
function Uu(l) {
  let e, t;
  return (
    (e = new dl({
      props: {
        style: "padding:24px; max-width: 480px; background: var(--B2);",
        $$slots: { footer: [Mu], header: [Nu], default: [Ru] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 8199 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
let yu = !1;
function Bu(l, e, t) {
  let n, i;
  Y(l, Hr, (g) => t(6, (n = g))), Y(l, Ne, (g) => t(0, (i = g)));
  const r = cl();
  let o = Zn.Position,
    s = [];
  function a() {
    r("close");
  }
  async function c() {
    Hr.next(Object.assign(Object.assign({}, n), { leverageDisplayMode: o })),
      xa.next(),
      ka.next(o),
      r("close");
  }
  function h(g) {
    t(
      2,
      (s = [
        {
          title: g(Ln.PositionLeverage),
          content: g(Ln.YourChosen),
          value: Zn.Position,
        },
        {
          title: g(Ln.ActualLeverage),
          content: g(Ln.CalculatorByDividing),
          value: Zn.Actual,
        },
      ])
    );
  }
  function m(g) {
    return function () {
      t(1, (o = g.value));
    };
  }
  function p(g) {
    t(1, (o = g.leverageDisplayMode));
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 1 && h(i), l.$$.dirty & 64 && p(n);
    }),
    [i, o, s, a, c, m, n]
  );
}
let Fu = class extends ve {
  constructor(e) {
    super(), be(this, e, Bu, Uu, _e, {});
  }
};
const La = new Oa(),
  Fi = new cn(!1),
  js = new cn([]),
  Gu = new cn(new Map()),
  Ma = new cn({
    clientCnt: null,
    email: "",
    isSub: !1,
    nickName: "",
    parentId: 0,
    userId: 0,
  }),
  Wu = new cn([]),
  Ua = new cn([]);
La.pipe(Ha(() => Ri.getSwitchAccount())).subscribe(({ data: l, error: e }) => {
  if (l) {
    js.next(l.rows);
    const t = l.rows.find((o) => o.parentId === 0);
    t && (Ma.next(t), Fi.next(il.readVisible()));
    const n = l.rows.filter((o) => o.parentId !== 0 && o.status !== 12);
    Wu.next(n);
    const i = l.rows.reduce((o, s) => o.set(s.clientCnt, s), new Map());
    Gu.next(i);
    const r = ju(n);
    Ua.next(r), il.setOptions(r);
  }
  e && js.next([]);
});
eo.subscribe(() => {
  La.next();
});
const il = {
  readVisible() {
    return Ul().visible;
  },
  setVisible(l) {
    const e = Ul();
    Fi.next(l), qs(l, e.options);
  },
  readOptions() {
    const l = Ul();
    return l ? l.options : null;
  },
  setOptions(l) {
    const e = Ul();
    qs(e.visible, l);
  },
};
function uh(l) {
  Ua.next(l), il.setOptions(l);
}
function ya() {
  return "layout_sub_accounts_" + Ma.getValue().userId;
}
function Ul() {
  const l = ya(),
    e = localStorage.getItem(l);
  return e ? JSON.parse(e) : { visible: !0, options: null };
}
function qs(l, e) {
  const t = ya();
  return localStorage.setItem(t, JSON.stringify({ visible: l, options: e }));
}
function zs(l) {
  return {
    label: l.nickName,
    value: l.clientCnt,
    userId: l.userId,
    inActive: !1,
  };
}
function ju(l) {
  const t = (il.readOptions() || []).reduce(
    (n, i) => n.set(i.value, i),
    new Map()
  );
  return l.map((n) => {
    const i = zs(n),
      r = t.has(i.value) ? t.get(i.value) : null;
    return { ...zs(n), inActive: r ? r.inActive : !0 };
  });
}
const Mn = { Title: "9a26f6", Note: "ffe600", LearnMore: "db0b76" };
function Ys(l, e, t) {
  const n = l.slice();
  return (n[20] = e[t]), n;
}
function Ks(l) {
  let e,
    t = l[20] + "",
    n,
    i,
    r,
    o;
  function s() {
    return l[14](l[20]);
  }
  return {
    c() {
      (e = v("div")), (n = N(t)), (i = N("%")), this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var c = E(e);
      (n = L(c, t)), (i = L(c, "%")), c.forEach(d), this.h();
    },
    h() {
      u(e, "class", "item f1 T3 f12 fw2 tc cp H-1fst5v5");
    },
    m(a, c) {
      M(a, e, c), f(e, n), f(e, i), r || ((o = me(e, "click", s)), (r = !0));
    },
    p(a, c) {
      l = a;
    },
    d(a) {
      a && d(e), (r = !1), o();
    },
  };
}
function qu(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c =
      l[3](Mn.Note, {
        LearnMore: `<a href='https://phemex.com/help-center/what-is-slippage' target='_blank' style='white-space: nowrap'>${
          l[3](Mn.LearnMore) + ">"
        }</a>`,
      }) + "",
    h = l[4],
    m = [];
  for (let p = 0; p < h.length; p += 1) m[p] = Ks(Ys(l, h, p));
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("input")),
        (i = A()),
        (r = v("div")),
        (o = v("div"));
      for (let p = 0; p < m.length; p += 1) m[p].c();
      (s = A()), (a = v("p")), this.h();
    },
    l(p) {
      e = b(p, "DIV", { class: !0 });
      var g = E(e);
      t = b(g, "DIV", { class: !0 });
      var _ = E(t);
      (n = b(_, "INPUT", {
        class: !0,
        placeholder: !0,
        type: !0,
        step: !0,
        min: !0,
        max: !0,
      })),
        _.forEach(d),
        (i = C(g)),
        (r = b(g, "DIV", { class: !0 }));
      var $ = E(r);
      o = b($, "DIV", { class: !0 });
      var w = E(o);
      for (let S = 0; S < m.length; S += 1) m[S].l(w);
      w.forEach(d), $.forEach(d), (s = C(g)), (a = b(g, "P", { class: !0 }));
      var k = E(a);
      k.forEach(d), g.forEach(d), this.h();
    },
    h() {
      u(n, "class", "input f16 fw2 wp100 mt24 H-1fst5v5"),
        u(n, "placeholder", "0.5~5"),
        u(n, "type", "number"),
        u(n, "step", "0.1"),
        u(n, "min", "0.5"),
        u(n, "max", "5"),
        (n.value = l[0]),
        u(t, "class", "input-wrap wp100 pr H-1fst5v5"),
        u(o, "class", "select df fdr mt12 H-1fst5v5"),
        u(r, "class", "select-wrap pr H-1fst5v5"),
        u(a, "class", "T4 f14 lh18 mt24"),
        u(e, "class", "body df fdc wp100");
    },
    m(p, g) {
      M(p, e, g),
        f(e, t),
        f(t, n),
        l[12](n),
        l[13](t),
        f(e, i),
        f(e, r),
        f(r, o);
      for (let _ = 0; _ < m.length; _ += 1) m[_] && m[_].m(o, null);
      f(e, s), f(e, a), (a.innerHTML = c);
    },
    p(p, g) {
      if ((g & 1 && n.value !== p[0] && (n.value = p[0]), g & 80)) {
        h = p[4];
        let _;
        for (_ = 0; _ < h.length; _ += 1) {
          const $ = Ys(p, h, _);
          m[_] ? m[_].p($, g) : ((m[_] = Ks($)), m[_].c(), m[_].m(o, null));
        }
        for (; _ < m.length; _ += 1) m[_].d(1);
        m.length = h.length;
      }
      g & 8 &&
        c !==
          (c =
            p[3](Mn.Note, {
              LearnMore: `<a href='https://phemex.com/help-center/what-is-slippage' target='_blank' style='white-space: nowrap'>${
                p[3](Mn.LearnMore) + ">"
              }</a>`,
            }) + "") &&
        (a.innerHTML = c);
    },
    d(p) {
      p && d(e), l[12](null), l[13](null), yn(m, p);
    },
  };
}
function zu(l) {
  let e,
    t,
    n = l[3](Mn.Title) + "",
    i,
    r,
    o,
    s,
    a,
    c;
  return {
    c() {
      (e = v("div")),
        (t = v("span")),
        (i = N(n)),
        (r = A()),
        (o = v("i")),
        (s = N("")),
        this.h();
    },
    l(h) {
      e = b(h, "DIV", { class: !0, slot: !0 });
      var m = E(e);
      t = b(m, "SPAN", { class: !0 });
      var p = E(t);
      (i = L(p, n)), p.forEach(d), (r = C(m)), (o = b(m, "I", { class: !0 }));
      var g = E(o);
      (s = L(g, "")), g.forEach(d), m.forEach(d), this.h();
    },
    h() {
      u(t, "class", "f20 lh24 fw3"),
        u(o, "class", "iconfont cp f20 fw3 T1"),
        u(e, "class", "df jcsb aic f18 T1"),
        u(e, "slot", "header");
    },
    m(h, m) {
      M(h, e, m),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        a || ((c = me(o, "click", l[5])), (a = !0));
    },
    p(h, m) {
      m & 8 && n !== (n = h[3](Mn.Title) + "") && J(i, n);
    },
    d(h) {
      h && d(e), (a = !1), c();
    },
  };
}
function Yu(l) {
  let e = l[3](Le.Confirm) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 8 && e !== (e = n[3](Le.Confirm) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function Ku(l) {
  let e, t, n;
  return (
    (t = new ut({
      props: {
        class: "wp100 fw3",
        type: "primary",
        loading: !1,
        $$slots: { default: [Yu] },
        $$scope: { ctx: l },
      },
    })),
    t.$on("click", l[7]),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "DIV", { class: !0, slot: !0 });
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        u(e, "class", "footer mt24"), u(e, "slot", "footer");
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 8388616 && (o.$$scope = { dirty: r, ctx: i }), t.$set(o);
      },
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
function Qu(l) {
  let e, t;
  return (
    (e = new dl({
      props: {
        style: "padding:24px; max-width: 304px; background: var(--B2);",
        $$slots: { footer: [Ku], header: [zu], default: [qu] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 8388623 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Xu(l, e, t) {
  let n, i, r, o, s, a;
  Y(l, to, (V) => t(16, (r = V))),
    Y(l, Ta, (V) => t(10, (o = V))),
    Y(l, jl, (V) => t(11, (s = V))),
    Y(l, Ne, (V) => t(3, (a = V)));
  const c = cl(),
    h = ["0.5", "1.0", "2.0", "3.0", "5.0"];
  let m = "3.0",
    p,
    g;
  Je(() => {
    p.addEventListener("input", function (V) {
      let U = this.value;
      (U == null ? void 0 : U.indexOf("-")) > -1 &&
        ((U = U.replace("-", "")), (this.value = U)),
        U.indexOf(".") !== -1 &&
          U.split(".")[1].length > 1 &&
          ((U = parseFloat(U).toFixed(1)), (this.value = U)),
        U > 5 && (this.value = "5.0"),
        t(0, (m = this.value)),
        $();
    }),
      p.addEventListener("blur", function (V) {
        this.value < 0.5 && (this.value = "0.5"), t(0, (m = this.value)), $();
      }),
      $();
  });
  function _(V, U) {
    const y = V == null ? void 0 : V.find((G) => G[U]);
    y && t(0, (m = Ni(y[U]).times(100).toFixed(1)));
  }
  function $() {
    const V = p.offsetWidth,
      U = w(p.value || "0.5~5", getComputedStyle(p).font),
      y = Math.ceil(V / 2 + U / 2);
    g.style.setProperty("--left", `${y + 2}px`);
  }
  function w(V, U) {
    const G = (
      w.canvas || (w.canvas = document.createElement("canvas"))
    ).getContext("2d");
    return (G.font = U), G.measureText(V).width;
  }
  function k() {
    c("close");
  }
  function S(V) {
    t(1, (p.value = V), p), t(0, (m = p.value)), $();
  }
  async function T() {
    if (!m) return;
    const V = Ni(m).div(100).round(3).toNumber(),
      U =
        o == null
          ? void 0
          : o.filter((x) => !Object.prototype.hasOwnProperty.call(x, i)),
      y = r;
    U.push({ [i]: V });
    const G = { bizVal: JSON.stringify(U), bizKey: no, version: y + 1 },
      { data: H, error: B } = await lo.customizeBiz(G);
    if (H)
      return (
        mt.send("toast", "info", { message: "Success" }), await io(), k(), !0
      );
    B && mt.send("toast", "error", B);
  }
  function I(V) {
    Oe[V ? "unshift" : "push"](() => {
      (p = V), t(1, p);
    });
  }
  function D(V) {
    Oe[V ? "unshift" : "push"](() => {
      (g = V), t(2, g);
    });
  }
  const O = (V) => S(V);
  return (
    (l.$$.update = () => {
      l.$$.dirty & 2048 && t(9, (n = s)),
        l.$$.dirty & 512 && t(8, (i = n == null ? void 0 : n.symbol)),
        l.$$.dirty & 1280 && _(o, i);
    }),
    [m, p, g, a, h, k, S, T, i, n, o, s, I, D, O]
  );
}
let Ju = class extends ve {
  constructor(e) {
    super(), be(this, e, Xu, Qu, _e, {});
  }
};
const ge = {
  Theme: "81e9ee",
  TransactionNotification: "ec4156",
  SubmitOrderDialogs: "0a3a52",
  OrderBook: "f10d28",
  Chart: "196a0d",
  RecentTrades: "4aa820",
  PositionsOrders: "a2633b",
  OrdersBalance: "fde1f0",
  ChartTradingLayout: "4ddb98",
  ResetLayout: "d80fae",
  Favorites: "95fa23",
  CloseAllPosition: "fa46b7",
  PositionMode: "d986a7",
  Trade: "f00532",
  Layout: "c08d6d",
  ApplyTo: "51fe20",
  ApplyToAll: "590c6d",
  Confirmations: "a1dcb8",
  CustomLayout: "9b5030",
  CancelAllOrders: "3a138b",
  AdjustLeverage: "6952e0",
  ChartReversePosition: "d82a71",
  ChartClosePosition: "710201",
  DisplayEdLeverage: "33ee10",
  PositionLeverage: "28be5b",
  ActualLeverage: "6759a4",
  CreateBot: "6db80e",
  SlippageTolerance: "07527a",
  subAccount: "548cb7",
};
function Qs(l) {
  let e,
    t,
    n = l[2](ge.SlippageTolerance) + "",
    i,
    r,
    o,
    s,
    a = l[1] + "%",
    c,
    h,
    m,
    p,
    g,
    _;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (i = N(n)),
        (r = A()),
        (o = v("div")),
        (s = v("span")),
        (c = N(a)),
        (h = A()),
        (m = v("i")),
        (p = N("")),
        this.h();
    },
    l($) {
      e = b($, "DIV", { class: !0 });
      var w = E(e);
      t = b(w, "DIV", {});
      var k = E(t);
      (i = L(k, n)), k.forEach(d), (r = C(w)), (o = b(w, "DIV", { class: !0 }));
      var S = E(o);
      s = b(S, "SPAN", {});
      var T = E(s);
      (c = L(T, a)), T.forEach(d), (h = C(S)), (m = b(S, "I", { class: !0 }));
      var I = E(m);
      (p = L(I, "")), I.forEach(d), S.forEach(d), w.forEach(d), this.h();
    },
    h() {
      u(m, "class", "iconfont arrow dib H-oy0067"),
        u(o, "class", "df aic T1 cp"),
        u(e, "class", "df aic jcsb lh40 T3 fw1");
    },
    m($, w) {
      M($, e, w),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        f(s, c),
        f(o, h),
        f(o, m),
        f(m, p),
        g || ((_ = me(e, "click", l[3])), (g = !0));
    },
    p($, w) {
      w & 4 && n !== (n = $[2](ge.SlippageTolerance) + "") && J(i, n),
        w & 2 && a !== (a = $[1] + "%") && J(c, a);
    },
    d($) {
      $ && d(e), (g = !1), _();
    },
  };
}
function Zu(l) {
  let e,
    t =
      (l[0].type === "PerpetualV2" ||
        (l[0].contractSide < 0 && l[0].type === "Perpetual")) &&
      Qs(l);
  return {
    c() {
      t && t.c(), (e = it());
    },
    l(n) {
      t && t.l(n), (e = it());
    },
    m(n, i) {
      t && t.m(n, i), M(n, e, i);
    },
    p(n, [i]) {
      n[0].type === "PerpetualV2" ||
      (n[0].contractSide < 0 && n[0].type === "Perpetual")
        ? t
          ? t.p(n, i)
          : ((t = Qs(n)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Te,
    o: Te,
    d(n) {
      t && t.d(n), n && d(e);
    },
  };
}
function xu(l, e, t) {
  let n, i, r, o, s, a, c;
  Y(l, Ye, (g) => t(7, (r = g))),
    Y(l, Ia, (g) => t(8, (o = g))),
    Y(l, Ta, (g) => t(5, (s = g))),
    Y(l, jl, (g) => t(6, (a = g))),
    Y(l, Ne, (g) => t(2, (c = g)));
  let h = "3.0";
  function m(g, _) {
    const $ = g == null ? void 0 : g.find((w) => w[_]);
    $ && t(1, (h = Ni($[_]).times(100).toFixed(1)));
  }
  function p() {
    if (!o) {
      Bi.gotoLogin(r(Aa() ? q.LOGIN : q.REGISTER));
      return;
    }
    tl.create(Ju);
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 64 && t(0, (n = a)),
        l.$$.dirty & 1 && t(4, (i = n == null ? void 0 : n.symbol)),
        l.$$.dirty & 48 && m(s, i);
    }),
    [n, h, c, p, i, s, a]
  );
}
let ed = class extends ve {
  constructor(e) {
    super(), be(this, e, xu, Zu, _e, {});
  }
};
const ft = `${ol.STATIC_URL}/s/web/account/`,
  yl = `${ol.STATIC_URL}/s/trade/common/`,
  td = {
    ALL_STAR: ft + "all_star.svg",
    CONTRACT: ft + "contract.svg",
    PREMIUM: ft + "premium.svg",
    SIMULATED: ft + "simulated.svg",
    SPOT: ft + "spot.svg",
    WELCOME: ft + "welcome.svg",
    REFERRAL: ft + "referral.svg",
    ZERO_FEES: ft + "zerofees.svg",
    NEW: ft + "new.svg",
    DARK_LEFT: yl + "dark-left.svg",
    DARK_RIGHT: yl + "dark-right.svg",
    LIGHT_LEFT: yl + "light-left.svg",
    LIGHT_RIGHT: yl + "light-right.svg",
    CREDIT_CARD: ft + "credit-card.svg",
    OTC: ft + "otc.svg",
    CONVERSION: ft + "conver.svg",
    EARN_NEW: ol.STATIC_URL + "/s/home/earn/earn-new.svg",
  };
function Xs(l, e, t) {
  const n = l.slice();
  return (n[42] = e[t]), (n[43] = e), (n[44] = t), n;
}
function nd(l) {
  let e,
    t = l[1](ge.Trade) + "",
    n,
    i;
  return {
    c() {
      (e = v("div")), (n = N(t)), this.h();
    },
    l(r) {
      e = b(r, "DIV", { class: !0 });
      var o = E(e);
      (n = L(o, t)), o.forEach(d), this.h();
    },
    h() {
      u(
        e,
        "class",
        (i = "mb8 lh18 " + (l[7] === "trade" ? "active" : "") + " H-9tgk7l")
      );
    },
    m(r, o) {
      M(r, e, o), f(e, n);
    },
    p(r, o) {
      o[0] & 2 && t !== (t = r[1](ge.Trade) + "") && J(n, t),
        o[0] & 128 &&
          i !==
            (i =
              "mb8 lh18 " + (r[7] === "trade" ? "active" : "") + " H-9tgk7l") &&
          u(e, "class", i);
    },
    d(r) {
      r && d(e);
    },
  };
}
function ld(l) {
  let e,
    t = l[1](ge.Layout) + "",
    n,
    i;
  return {
    c() {
      (e = v("div")), (n = N(t)), this.h();
    },
    l(r) {
      e = b(r, "DIV", { class: !0 });
      var o = E(e);
      (n = L(o, t)), o.forEach(d), this.h();
    },
    h() {
      u(
        e,
        "class",
        (i = "mb8 lh18 " + (l[7] === "layout" ? "active" : "") + " H-9tgk7l")
      );
    },
    m(r, o) {
      M(r, e, o), f(e, n);
    },
    p(r, o) {
      o[0] & 2 && t !== (t = r[1](ge.Layout) + "") && J(n, t),
        o[0] & 128 &&
          i !==
            (i =
              "mb8 lh18 " +
              (r[7] === "layout" ? "active" : "") +
              " H-9tgk7l") &&
          u(e, "class", i);
    },
    d(r) {
      r && d(e);
    },
  };
}
function Js(l) {
  let e,
    t,
    n = l[1](ge.ApplyTo, { Symbol: l[5].pairName }) + "",
    i,
    r,
    o,
    s,
    a,
    c = l[2] && l[2].tradeType === "PerpetualV2" && Zs(l);
  return (
    (s = new ed({})),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (i = N(n)),
          (r = A()),
          c && c.c(),
          (o = A()),
          K(s.$$.fragment),
          this.h();
      },
      l(h) {
        e = b(h, "DIV", { class: !0 });
        var m = E(e);
        t = b(m, "DIV", { class: !0 });
        var p = E(t);
        (i = L(p, n)),
          p.forEach(d),
          (r = C(m)),
          c && c.l(m),
          (o = C(m)),
          Z(s.$$.fragment, m),
          m.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "title lh18 pt12 pb6 f14 b T1"),
          u(e, "class", "section H-9tgk7l");
      },
      m(h, m) {
        M(h, e, m),
          f(e, t),
          f(t, i),
          f(e, r),
          c && c.m(e, null),
          f(e, o),
          Q(s, e, null),
          (a = !0);
      },
      p(h, m) {
        (!a || m[0] & 34) &&
          n !== (n = h[1](ge.ApplyTo, { Symbol: h[5].pairName }) + "") &&
          J(i, n),
          h[2] && h[2].tradeType === "PerpetualV2"
            ? c
              ? c.p(h, m)
              : ((c = Zs(h)), c.c(), c.m(e, o))
            : c && (c.d(1), (c = null));
      },
      i(h) {
        a || (P(s.$$.fragment, h), (a = !0));
      },
      o(h) {
        R(s.$$.fragment, h), (a = !1);
      },
      d(h) {
        h && d(e), c && c.d(), X(s);
      },
    }
  );
}
function Zs(l) {
  let e,
    t,
    n = l[1](ge.PositionMode) + "",
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p,
    g;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (i = N(n)),
        (r = A()),
        (o = v("div")),
        (s = v("span")),
        (a = N(l[12])),
        (c = A()),
        (h = v("i")),
        (m = N("")),
        this.h();
    },
    l(_) {
      e = b(_, "DIV", { class: !0 });
      var $ = E(e);
      t = b($, "DIV", {});
      var w = E(t);
      (i = L(w, n)), w.forEach(d), (r = C($)), (o = b($, "DIV", { class: !0 }));
      var k = E(o);
      s = b(k, "SPAN", {});
      var S = E(s);
      (a = L(S, l[12])),
        S.forEach(d),
        (c = C(k)),
        (h = b(k, "I", { class: !0 }));
      var T = E(h);
      (m = L(T, "")), T.forEach(d), k.forEach(d), $.forEach(d), this.h();
    },
    h() {
      u(h, "class", "iconfont arrow dib H-9tgk7l"),
        u(o, "class", "df aic T1 cp"),
        u(e, "class", "df aic jcsb lh40 T3 fw1");
    },
    m(_, $) {
      M(_, e, $),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        f(s, a),
        f(o, c),
        f(o, h),
        f(h, m),
        p || ((g = me(e, "click", l[21])), (p = !0));
    },
    p(_, $) {
      $[0] & 2 && n !== (n = _[1](ge.PositionMode) + "") && J(i, n),
        $[0] & 4096 && J(a, _[12]);
    },
    d(_) {
      _ && d(e), (p = !1), g();
    },
  };
}
function xs(l) {
  let e,
    t,
    n = l[1](ge.DisplayEdLeverage) + "",
    i,
    r,
    o,
    s,
    a =
      (l[13] === Zn.Position
        ? l[1](ge.PositionLeverage)
        : l[1](ge.ActualLeverage)) + "",
    c,
    h,
    m,
    p,
    g,
    _;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (i = N(n)),
        (r = A()),
        (o = v("div")),
        (s = v("span")),
        (c = N(a)),
        (h = A()),
        (m = v("i")),
        (p = N("")),
        this.h();
    },
    l($) {
      e = b($, "DIV", { class: !0 });
      var w = E(e);
      t = b(w, "DIV", { class: !0 });
      var k = E(t);
      (i = L(k, n)), k.forEach(d), (r = C(w)), (o = b(w, "DIV", { class: !0 }));
      var S = E(o);
      s = b(S, "SPAN", {});
      var T = E(s);
      (c = L(T, a)), T.forEach(d), (h = C(S)), (m = b(S, "I", { class: !0 }));
      var I = E(m);
      (p = L(I, "")), I.forEach(d), S.forEach(d), w.forEach(d), this.h();
    },
    h() {
      u(t, "class", "display-leverage lh20 f1 H-9tgk7l"),
        u(m, "class", "iconfont arrow dib H-9tgk7l"),
        u(o, "class", "display-leverage df aic lh20 T1 cp H-9tgk7l"),
        u(e, "class", "df aic jcsb lh40 usn");
    },
    m($, w) {
      M($, e, w),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        f(s, c),
        f(o, h),
        f(o, m),
        f(m, p),
        g || ((_ = me(e, "click", l[23])), (g = !0));
    },
    p($, w) {
      w[0] & 2 && n !== (n = $[1](ge.DisplayEdLeverage) + "") && J(i, n),
        w[0] & 8194 &&
          a !==
            (a =
              ($[13] === Zn.Position
                ? $[1](ge.PositionLeverage)
                : $[1](ge.ActualLeverage)) + "") &&
          J(c, a);
    },
    d($) {
      $ && d(e), (g = !1), _();
    },
  };
}
function ea(l) {
  var le, re;
  let e,
    t,
    n = l[1](ge.ChartClosePosition) + "",
    i,
    r,
    o,
    s,
    a,
    c,
    h = l[1](ge.ChartReversePosition) + "",
    m,
    p,
    g,
    _,
    $,
    w,
    k = l[1](ge.AdjustLeverage) + "",
    S,
    T,
    I,
    D,
    O,
    V,
    U,
    y = l[1](ge.CreateBot) + "",
    G,
    H,
    B,
    x,
    ne;
  (o = new zt({
    props: {
      checked:
        l[9] && ((le = l[10]) == null ? void 0 : le.closePositionConfirm),
      disabled: !l[9],
    },
  })),
    o.$on("changeCheck", function () {
      at(l[22]("closePositionConfirm", l[10])) &&
        l[22]("closePositionConfirm", l[10]).apply(this, arguments);
    }),
    (g = new zt({
      props: {
        checked:
          l[9] && ((re = l[10]) == null ? void 0 : re.reversePositionConfirm),
        disabled: !l[9],
      },
    })),
    g.$on("changeCheck", function () {
      at(l[22]("reversePositionConfirm", l[10])) &&
        l[22]("reversePositionConfirm", l[10]).apply(this, arguments);
    });
  function F(te) {
    l[34](te);
  }
  let z = { disabled: !l[9] };
  l[3].adjustLeverageConfirmation !== void 0 &&
    (z.checked = l[3].adjustLeverageConfirmation),
    (I = new zt({ props: z })),
    Oe.push(() => tt(I, "checked", F)),
    I.$on("changeCheck", l[20]("adjustLeverageConfirmation"));
  function se(te) {
    l[35](te);
  }
  let oe = { disabled: !l[9] };
  return (
    l[3].createBot !== void 0 && (oe.checked = l[3].createBot),
    (B = new zt({ props: oe })),
    Oe.push(() => tt(B, "checked", se)),
    B.$on("changeCheck", l[20]("createBot")),
    {
      c() {
        (e = v("div")),
          (t = v("span")),
          (i = N(n)),
          (r = A()),
          K(o.$$.fragment),
          (s = A()),
          (a = v("div")),
          (c = v("span")),
          (m = N(h)),
          (p = A()),
          K(g.$$.fragment),
          (_ = A()),
          ($ = v("div")),
          (w = v("span")),
          (S = N(k)),
          (T = A()),
          K(I.$$.fragment),
          (O = A()),
          (V = v("div")),
          (U = v("span")),
          (G = N(y)),
          (H = A()),
          K(B.$$.fragment),
          this.h();
      },
      l(te) {
        e = b(te, "DIV", { class: !0 });
        var ce = E(e);
        t = b(ce, "SPAN", {});
        var ie = E(t);
        (i = L(ie, n)),
          ie.forEach(d),
          (r = C(ce)),
          Z(o.$$.fragment, ce),
          ce.forEach(d),
          (s = C(te)),
          (a = b(te, "DIV", { class: !0 }));
        var he = E(a);
        c = b(he, "SPAN", {});
        var Ae = E(c);
        (m = L(Ae, h)),
          Ae.forEach(d),
          (p = C(he)),
          Z(g.$$.fragment, he),
          he.forEach(d),
          (_ = C(te)),
          ($ = b(te, "DIV", { class: !0 }));
        var Ee = E($);
        w = b(Ee, "SPAN", {});
        var Ce = E(w);
        (S = L(Ce, k)),
          Ce.forEach(d),
          (T = C(Ee)),
          Z(I.$$.fragment, Ee),
          Ee.forEach(d),
          (O = C(te)),
          (V = b(te, "DIV", { class: !0 }));
        var ue = E(V);
        U = b(ue, "SPAN", {});
        var W = E(U);
        (G = L(W, y)),
          W.forEach(d),
          (H = C(ue)),
          Z(B.$$.fragment, ue),
          ue.forEach(d),
          this.h();
      },
      h() {
        u(e, "class", "row df aic jcsb H-9tgk7l"),
          u(a, "class", "row df aic jcsb H-9tgk7l"),
          u($, "class", "row df aic jcsb H-9tgk7l"),
          u(V, "class", "row df aic jcsb H-9tgk7l");
      },
      m(te, ce) {
        M(te, e, ce),
          f(e, t),
          f(t, i),
          f(e, r),
          Q(o, e, null),
          M(te, s, ce),
          M(te, a, ce),
          f(a, c),
          f(c, m),
          f(a, p),
          Q(g, a, null),
          M(te, _, ce),
          M(te, $, ce),
          f($, w),
          f(w, S),
          f($, T),
          Q(I, $, null),
          M(te, O, ce),
          M(te, V, ce),
          f(V, U),
          f(U, G),
          f(V, H),
          Q(B, V, null),
          (ne = !0);
      },
      p(te, ce) {
        var Ce, ue;
        (l = te),
          (!ne || ce[0] & 2) &&
            n !== (n = l[1](ge.ChartClosePosition) + "") &&
            J(i, n);
        const ie = {};
        ce[0] & 1536 &&
          (ie.checked =
            l[9] && ((Ce = l[10]) == null ? void 0 : Ce.closePositionConfirm)),
          ce[0] & 512 && (ie.disabled = !l[9]),
          o.$set(ie),
          (!ne || ce[0] & 2) &&
            h !== (h = l[1](ge.ChartReversePosition) + "") &&
            J(m, h);
        const he = {};
        ce[0] & 1536 &&
          (he.checked =
            l[9] &&
            ((ue = l[10]) == null ? void 0 : ue.reversePositionConfirm)),
          ce[0] & 512 && (he.disabled = !l[9]),
          g.$set(he),
          (!ne || ce[0] & 2) &&
            k !== (k = l[1](ge.AdjustLeverage) + "") &&
            J(S, k);
        const Ae = {};
        ce[0] & 512 && (Ae.disabled = !l[9]),
          !D &&
            ce[0] & 8 &&
            ((D = !0),
            (Ae.checked = l[3].adjustLeverageConfirmation),
            nt(() => (D = !1))),
          I.$set(Ae),
          (!ne || ce[0] & 2) && y !== (y = l[1](ge.CreateBot) + "") && J(G, y);
        const Ee = {};
        ce[0] & 512 && (Ee.disabled = !l[9]),
          !x &&
            ce[0] & 8 &&
            ((x = !0), (Ee.checked = l[3].createBot), nt(() => (x = !1))),
          B.$set(Ee);
      },
      i(te) {
        ne ||
          (P(o.$$.fragment, te),
          P(g.$$.fragment, te),
          P(I.$$.fragment, te),
          P(B.$$.fragment, te),
          (ne = !0));
      },
      o(te) {
        R(o.$$.fragment, te),
          R(g.$$.fragment, te),
          R(I.$$.fragment, te),
          R(B.$$.fragment, te),
          (ne = !1);
      },
      d(te) {
        te && d(e),
          X(o),
          te && d(s),
          te && d(a),
          X(g),
          te && d(_),
          te && d($),
          X(I),
          te && d(O),
          te && d(V),
          X(B);
      },
    }
  );
}
function ta(l) {
  let e,
    t,
    n = l[1](ge.CreateBot) + "",
    i,
    r,
    o,
    s,
    a;
  function c(m) {
    l[36](m);
  }
  let h = { disabled: !l[9] };
  return (
    l[3].createSpotBot !== void 0 && (h.checked = l[3].createSpotBot),
    (o = new zt({ props: h })),
    Oe.push(() => tt(o, "checked", c)),
    o.$on("changeCheck", l[20]("createSpotBot")),
    {
      c() {
        (e = v("div")),
          (t = v("span")),
          (i = N(n)),
          (r = A()),
          K(o.$$.fragment),
          this.h();
      },
      l(m) {
        e = b(m, "DIV", { class: !0 });
        var p = E(e);
        t = b(p, "SPAN", {});
        var g = E(t);
        (i = L(g, n)),
          g.forEach(d),
          (r = C(p)),
          Z(o.$$.fragment, p),
          p.forEach(d),
          this.h();
      },
      h() {
        u(e, "class", "row df aic jcsb H-9tgk7l");
      },
      m(m, p) {
        M(m, e, p), f(e, t), f(t, i), f(e, r), Q(o, e, null), (a = !0);
      },
      p(m, p) {
        (!a || p[0] & 2) && n !== (n = m[1](ge.CreateBot) + "") && J(i, n);
        const g = {};
        p[0] & 512 && (g.disabled = !m[9]),
          !s &&
            p[0] & 8 &&
            ((s = !0), (g.checked = m[3].createSpotBot), nt(() => (s = !1))),
          o.$set(g);
      },
      i(m) {
        a || (P(o.$$.fragment, m), (a = !0));
      },
      o(m) {
        R(o.$$.fragment, m), (a = !1);
      },
      d(m) {
        m && d(e), X(o);
      },
    }
  );
}
function id(l) {
  let e,
    t,
    n,
    i = l[1](ge.ApplyToAll) + "",
    r,
    o,
    s,
    a,
    c = l[1](ge.TransactionNotification) + "",
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k,
    S = l[1](ge.Confirmations) + "",
    T,
    I,
    D,
    O,
    V = l[1](ge.SubmitOrderDialogs) + "",
    U,
    y,
    G,
    H,
    B,
    x,
    ne,
    F = l[1](ge.CancelAllOrders) + "",
    z,
    se,
    oe,
    le,
    re,
    te,
    ce,
    ie = l[0] && Js(l);
  function he(ee) {
    l[31](ee);
  }
  let Ae = { disabled: !l[9] };
  l[3].orderNotify !== void 0 && (Ae.checked = l[3].orderNotify),
    (p = new zt({ props: Ae })),
    Oe.push(() => tt(p, "checked", he)),
    p.$on("changeCheck", l[20]("orderNotify"));
  let Ee = l[0] && xs(l);
  function Ce(ee) {
    l[32](ee);
  }
  let ue = { disabled: !l[9] };
  l[3].orderSubmitConfirmation !== void 0 &&
    (ue.checked = l[3].orderSubmitConfirmation),
    (G = new zt({ props: ue })),
    Oe.push(() => tt(G, "checked", Ce)),
    G.$on("changeCheck", l[20]("orderSubmitConfirmation"));
  function W(ee) {
    l[33](ee);
  }
  let de = { disabled: !l[9] };
  l[3].cancelAllOrdersConfirm !== void 0 &&
    (de.checked = l[3].cancelAllOrdersConfirm),
    (oe = new zt({ props: de })),
    Oe.push(() => tt(oe, "checked", W)),
    oe.$on("changeCheck", l[20]("cancelAllOrdersConfirm"));
  let ae = l[0] && ea(l),
    pe = !l[0] && ta(l);
  return {
    c() {
      ie && ie.c(),
        (e = A()),
        (t = v("div")),
        (n = v("div")),
        (r = N(i)),
        (o = A()),
        (s = v("div")),
        (a = v("span")),
        (h = N(c)),
        (m = A()),
        K(p.$$.fragment),
        (_ = A()),
        Ee && Ee.c(),
        ($ = A()),
        (w = v("div")),
        (k = v("div")),
        (T = N(S)),
        (I = A()),
        (D = v("div")),
        (O = v("span")),
        (U = N(V)),
        (y = A()),
        K(G.$$.fragment),
        (B = A()),
        (x = v("div")),
        (ne = v("span")),
        (z = N(F)),
        (se = A()),
        K(oe.$$.fragment),
        (re = A()),
        ae && ae.c(),
        (te = A()),
        pe && pe.c(),
        this.h();
    },
    l(ee) {
      ie && ie.l(ee), (e = C(ee)), (t = b(ee, "DIV", { class: !0 }));
      var fe = E(t);
      n = b(fe, "DIV", { class: !0 });
      var Ie = E(n);
      (r = L(Ie, i)),
        Ie.forEach(d),
        (o = C(fe)),
        (s = b(fe, "DIV", { class: !0 }));
      var Me = E(s);
      a = b(Me, "SPAN", {});
      var je = E(a);
      (h = L(je, c)),
        je.forEach(d),
        (m = C(Me)),
        Z(p.$$.fragment, Me),
        Me.forEach(d),
        (_ = C(fe)),
        Ee && Ee.l(fe),
        ($ = C(fe)),
        (w = b(fe, "DIV", { class: !0 }));
      var Ve = E(w);
      k = b(Ve, "DIV", { class: !0 });
      var rt = E(k);
      (T = L(rt, S)),
        rt.forEach(d),
        (I = C(Ve)),
        (D = b(Ve, "DIV", { class: !0 }));
      var Ke = E(D);
      O = b(Ke, "SPAN", {});
      var Be = E(O);
      (U = L(Be, V)),
        Be.forEach(d),
        (y = C(Ke)),
        Z(G.$$.fragment, Ke),
        Ke.forEach(d),
        (B = C(Ve)),
        (x = b(Ve, "DIV", { class: !0 }));
      var Ze = E(x);
      ne = b(Ze, "SPAN", {});
      var Qe = E(ne);
      (z = L(Qe, F)),
        Qe.forEach(d),
        (se = C(Ze)),
        Z(oe.$$.fragment, Ze),
        Ze.forEach(d),
        (re = C(Ve)),
        ae && ae.l(Ve),
        (te = C(Ve)),
        pe && pe.l(Ve),
        Ve.forEach(d),
        fe.forEach(d),
        this.h();
    },
    h() {
      u(n, "class", "title lh18 pt12 pb6 f14 T1 fw3"),
        u(s, "class", "row df aic jcsb H-9tgk7l"),
        u(k, "class", "sub-title lh40 T1 fw3"),
        u(D, "class", "row df aic jcsb H-9tgk7l"),
        u(x, "class", "row df aic jcsb H-9tgk7l"),
        u(w, "class", "sub-section H-9tgk7l"),
        u(t, "class", "section fw1 H-9tgk7l");
    },
    m(ee, fe) {
      ie && ie.m(ee, fe),
        M(ee, e, fe),
        M(ee, t, fe),
        f(t, n),
        f(n, r),
        f(t, o),
        f(t, s),
        f(s, a),
        f(a, h),
        f(s, m),
        Q(p, s, null),
        f(t, _),
        Ee && Ee.m(t, null),
        f(t, $),
        f(t, w),
        f(w, k),
        f(k, T),
        f(w, I),
        f(w, D),
        f(D, O),
        f(O, U),
        f(D, y),
        Q(G, D, null),
        f(w, B),
        f(w, x),
        f(x, ne),
        f(ne, z),
        f(x, se),
        Q(oe, x, null),
        f(w, re),
        ae && ae.m(w, null),
        f(w, te),
        pe && pe.m(w, null),
        (ce = !0);
    },
    p(ee, fe) {
      ee[0]
        ? ie
          ? (ie.p(ee, fe), fe[0] & 1 && P(ie, 1))
          : ((ie = Js(ee)), ie.c(), P(ie, 1), ie.m(e.parentNode, e))
        : ie &&
          (De(),
          R(ie, 1, 1, () => {
            ie = null;
          }),
          He()),
        (!ce || fe[0] & 2) && i !== (i = ee[1](ge.ApplyToAll) + "") && J(r, i),
        (!ce || fe[0] & 2) &&
          c !== (c = ee[1](ge.TransactionNotification) + "") &&
          J(h, c);
      const Ie = {};
      fe[0] & 512 && (Ie.disabled = !ee[9]),
        !g &&
          fe[0] & 8 &&
          ((g = !0), (Ie.checked = ee[3].orderNotify), nt(() => (g = !1))),
        p.$set(Ie),
        ee[0]
          ? Ee
            ? Ee.p(ee, fe)
            : ((Ee = xs(ee)), Ee.c(), Ee.m(t, $))
          : Ee && (Ee.d(1), (Ee = null)),
        (!ce || fe[0] & 2) &&
          S !== (S = ee[1](ge.Confirmations) + "") &&
          J(T, S),
        (!ce || fe[0] & 2) &&
          V !== (V = ee[1](ge.SubmitOrderDialogs) + "") &&
          J(U, V);
      const Me = {};
      fe[0] & 512 && (Me.disabled = !ee[9]),
        !H &&
          fe[0] & 8 &&
          ((H = !0),
          (Me.checked = ee[3].orderSubmitConfirmation),
          nt(() => (H = !1))),
        G.$set(Me),
        (!ce || fe[0] & 2) &&
          F !== (F = ee[1](ge.CancelAllOrders) + "") &&
          J(z, F);
      const je = {};
      fe[0] & 512 && (je.disabled = !ee[9]),
        !le &&
          fe[0] & 8 &&
          ((le = !0),
          (je.checked = ee[3].cancelAllOrdersConfirm),
          nt(() => (le = !1))),
        oe.$set(je),
        ee[0]
          ? ae
            ? (ae.p(ee, fe), fe[0] & 1 && P(ae, 1))
            : ((ae = ea(ee)), ae.c(), P(ae, 1), ae.m(w, te))
          : ae &&
            (De(),
            R(ae, 1, 1, () => {
              ae = null;
            }),
            He()),
        ee[0]
          ? pe &&
            (De(),
            R(pe, 1, 1, () => {
              pe = null;
            }),
            He())
          : pe
          ? (pe.p(ee, fe), fe[0] & 1 && P(pe, 1))
          : ((pe = ta(ee)), pe.c(), P(pe, 1), pe.m(w, null));
    },
    i(ee) {
      ce ||
        (P(ie),
        P(p.$$.fragment, ee),
        P(G.$$.fragment, ee),
        P(oe.$$.fragment, ee),
        P(ae),
        P(pe),
        (ce = !0));
    },
    o(ee) {
      R(ie),
        R(p.$$.fragment, ee),
        R(G.$$.fragment, ee),
        R(oe.$$.fragment, ee),
        R(ae),
        R(pe),
        (ce = !1);
    },
    d(ee) {
      ie && ie.d(ee),
        ee && d(e),
        ee && d(t),
        X(p),
        Ee && Ee.d(),
        X(G),
        X(oe),
        ae && ae.d(),
        pe && pe.d();
    },
  };
}
function na(l) {
  let e = [],
    t = new Map(),
    n,
    i,
    r = [...l[4], ...l[6], l[8]];
  const o = (s) => s[42].id;
  for (let s = 0; s < r.length; s += 1) {
    let a = Xs(l, r, s),
      c = o(a);
    t.set(c, (e[s] = la(c, a)));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1) e[s].c();
      n = it();
    },
    l(s) {
      for (let a = 0; a < e.length; a += 1) e[a].l(s);
      n = it();
    },
    m(s, a) {
      for (let c = 0; c < e.length; c += 1) e[c] && e[c].m(s, a);
      M(s, n, a), (i = !0);
    },
    p(s, a) {
      a[0] & 524624 &&
        ((r = [...s[4], ...s[6], s[8]]),
        De(),
        (e = Bn(e, a, o, 1, s, r, t, n.parentNode, To, la, n, Xs)),
        He());
    },
    i(s) {
      if (!i) {
        for (let a = 0; a < r.length; a += 1) P(e[a]);
        i = !0;
      }
    },
    o(s) {
      for (let a = 0; a < e.length; a += 1) R(e[a]);
      i = !1;
    },
    d(s) {
      for (let a = 0; a < e.length; a += 1) e[a].d(s);
      s && d(n);
    },
  };
}
function la(l, e) {
  let t,
    n,
    i = e[42].title + "",
    r,
    o,
    s,
    a,
    c,
    h;
  function m(g) {
    e[37](g, e[42]);
  }
  let p = {};
  return (
    e[42].visible !== void 0 && (p.checked = e[42].visible),
    (s = new zt({ props: p })),
    Oe.push(() => tt(s, "checked", m)),
    s.$on("changeCheck", function () {
      at(e[19](e[42])) && e[19](e[42]).apply(this, arguments);
    }),
    {
      key: l,
      first: null,
      c() {
        (t = v("div")),
          (n = v("span")),
          (r = N(i)),
          (o = A()),
          K(s.$$.fragment),
          (c = A()),
          this.h();
      },
      l(g) {
        t = b(g, "DIV", { class: !0 });
        var _ = E(t);
        n = b(_, "SPAN", {});
        var $ = E(n);
        (r = L($, i)),
          $.forEach(d),
          (o = C(_)),
          Z(s.$$.fragment, _),
          (c = C(_)),
          _.forEach(d),
          this.h();
      },
      h() {
        u(t, "class", "row df aic jcsb fw1 H-9tgk7l"), (this.first = t);
      },
      m(g, _) {
        M(g, t, _), f(t, n), f(n, r), f(t, o), Q(s, t, null), f(t, c), (h = !0);
      },
      p(g, _) {
        (e = g), (!h || _[0] & 336) && i !== (i = e[42].title + "") && J(r, i);
        const $ = {};
        !a &&
          _[0] & 336 &&
          ((a = !0), ($.checked = e[42].visible), nt(() => (a = !1))),
          s.$set($);
      },
      i(g) {
        h || (P(s.$$.fragment, g), (h = !0));
      },
      o(g) {
        R(s.$$.fragment, g), (h = !1);
      },
      d(g) {
        g && d(t), X(s);
      },
    }
  );
}
function rd(l) {
  let e,
    t,
    n = l[1](ge.ChartTradingLayout) + "",
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p,
    g,
    _,
    $ = l[1](ge.CustomLayout) + "",
    w,
    k,
    S,
    T,
    I,
    D = l[4] && l[4].length > 0 && na(l);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (i = N(n)),
        (r = A()),
        (o = v("div")),
        (s = v("img")),
        (c = A()),
        (h = v("img")),
        (p = A()),
        (g = v("div")),
        (_ = v("div")),
        (w = N($)),
        (k = A()),
        D && D.c(),
        this.h();
    },
    l(O) {
      e = b(O, "DIV", { class: !0 });
      var V = E(e);
      t = b(V, "DIV", { class: !0 });
      var U = E(t);
      (i = L(U, n)), U.forEach(d), (r = C(V)), (o = b(V, "DIV", {}));
      var y = E(o);
      (s = b(y, "IMG", { alt: !0, class: !0, src: !0 })),
        (c = C(y)),
        (h = b(y, "IMG", { alt: !0, class: !0, src: !0 })),
        y.forEach(d),
        (p = C(V)),
        (g = b(V, "DIV", { class: !0 }));
      var G = E(g);
      _ = b(G, "DIV", { class: !0 });
      var H = E(_);
      (w = L(H, $)),
        H.forEach(d),
        (k = C(G)),
        D && D.l(G),
        G.forEach(d),
        V.forEach(d),
        this.h();
    },
    h() {
      u(t, "class", "sub-title lh40 f14 T1"),
        u(s, "alt", ""),
        u(s, "class", "cp H-9tgk7l"),
        ke(s.src, (a = l[15](l[11], "LEFT"))) || u(s, "src", a),
        we(s, "active-screen", l[14] === Rn.Left),
        u(h, "alt", ""),
        u(h, "class", "ml16 cp H-9tgk7l"),
        ke(h.src, (m = l[15](l[11], "RIGHT"))) || u(h, "src", m),
        we(h, "active-screen", l[14] === Rn.Right),
        u(_, "class", "sub-title lh40 f14 T1"),
        u(g, "class", "sub-section H-9tgk7l"),
        u(e, "class", "section H-9tgk7l");
    },
    m(O, V) {
      M(O, e, V),
        f(e, t),
        f(t, i),
        f(e, r),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, h),
        f(e, p),
        f(e, g),
        f(g, _),
        f(_, w),
        f(g, k),
        D && D.m(g, null),
        (S = !0),
        T ||
          ((I = [
            me(s, "click", l[16](Rn.Left)),
            me(h, "click", l[16](Rn.Right)),
          ]),
          (T = !0));
    },
    p(O, V) {
      (!S || V[0] & 2) &&
        n !== (n = O[1](ge.ChartTradingLayout) + "") &&
        J(i, n),
        (!S || (V[0] & 2048 && !ke(s.src, (a = O[15](O[11], "LEFT"))))) &&
          u(s, "src", a),
        (!S || V[0] & 16384) && we(s, "active-screen", O[14] === Rn.Left),
        (!S || (V[0] & 2048 && !ke(h.src, (m = O[15](O[11], "RIGHT"))))) &&
          u(h, "src", m),
        (!S || V[0] & 16384) && we(h, "active-screen", O[14] === Rn.Right),
        (!S || V[0] & 2) && $ !== ($ = O[1](ge.CustomLayout) + "") && J(w, $),
        O[4] && O[4].length > 0
          ? D
            ? (D.p(O, V), V[0] & 16 && P(D, 1))
            : ((D = na(O)), D.c(), P(D, 1), D.m(g, null))
          : D &&
            (De(),
            R(D, 1, 1, () => {
              D = null;
            }),
            He());
    },
    i(O) {
      S || (P(D), (S = !0));
    },
    o(O) {
      R(D), (S = !1);
    },
    d(O) {
      O && d(e), D && D.d(), (T = !1), pt(I);
    },
  };
}
function sd(l) {
  let e,
    t,
    n,
    i,
    r = l[1](ge.ResetLayout) + "",
    o,
    s,
    a,
    c,
    h,
    m,
    p = l[1](ge.Theme) + "",
    g,
    _,
    $,
    w = l[11] === xn.Light ? "&#xe766" : "&#xe767",
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U,
    y,
    G,
    H,
    B;
  return (
    (T = new Fs({
      props: {
        active: l[7] === "trade",
        $$slots: { default: [nd] },
        $$scope: { ctx: l },
      },
    })),
    T.$on("click", l[29]),
    (D = new Fs({
      props: {
        active: l[7] === "layout",
        $$slots: { default: [ld] },
        $$scope: { ctx: l },
      },
    })),
    D.$on("click", l[30]),
    (V = new Wr({
      props: {
        active: l[7] === "trade",
        $$slots: { default: [id] },
        $$scope: { ctx: l },
      },
    })),
    (y = new Wr({
      props: {
        active: l[7] === "layout",
        $$slots: { default: [rd] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = v("div")),
          (i = v("span")),
          (o = N(r)),
          (s = A()),
          (a = v("i")),
          (c = N("")),
          (h = A()),
          (m = v("span")),
          (g = N(p)),
          (_ = A()),
          ($ = v("i")),
          (k = A()),
          (S = v("div")),
          K(T.$$.fragment),
          (I = A()),
          K(D.$$.fragment),
          (O = A()),
          K(V.$$.fragment),
          (U = A()),
          K(y.$$.fragment),
          this.h();
      },
      l(x) {
        e = b(x, "DIV", { class: !0 });
        var ne = E(e);
        t = b(ne, "DIV", { class: !0 });
        var F = E(t);
        n = b(F, "DIV", { class: !0 });
        var z = E(n);
        i = b(z, "SPAN", { class: !0 });
        var se = E(i);
        (o = L(se, r)), (s = C(se)), (a = b(se, "I", { class: !0 }));
        var oe = E(a);
        (c = L(oe, "")),
          oe.forEach(d),
          se.forEach(d),
          (h = C(z)),
          (m = b(z, "SPAN", { class: !0 }));
        var le = E(m);
        (g = L(le, p)), (_ = C(le)), ($ = b(le, "I", { class: !0 }));
        var re = E($);
        re.forEach(d),
          le.forEach(d),
          z.forEach(d),
          (k = C(F)),
          (S = b(F, "DIV", { class: !0 }));
        var te = E(S);
        Z(T.$$.fragment, te),
          (I = C(te)),
          Z(D.$$.fragment, te),
          te.forEach(d),
          (O = C(F)),
          Z(V.$$.fragment, F),
          (U = C(F)),
          Z(y.$$.fragment, F),
          F.forEach(d),
          ne.forEach(d),
          this.h();
      },
      h() {
        u(a, "class", "iconfont f24 ml8 fw1"),
          u(i, "class", "df aic cp"),
          u($, "class", "iconfont f24 T3 usn ml8"),
          u(m, "class", "df aic cp ml20"),
          u(n, "class", "theme df aic fw1 H-9tgk7l"),
          u(S, "class", "tab df ph24 mt16 f14 fw3 H-9tgk7l"),
          u(t, "class", "body H-9tgk7l"),
          u(e, "class", "wrap B2 T2 H-9tgk7l");
      },
      m(x, ne) {
        M(x, e, ne),
          f(e, t),
          f(t, n),
          f(n, i),
          f(i, o),
          f(i, s),
          f(i, a),
          f(a, c),
          f(n, h),
          f(n, m),
          f(m, g),
          f(m, _),
          f(m, $),
          ($.innerHTML = w),
          f(t, k),
          f(t, S),
          Q(T, S, null),
          f(S, I),
          Q(D, S, null),
          f(t, O),
          Q(V, t, null),
          f(t, U),
          Q(y, t, null),
          (G = !0),
          H || ((B = [me(i, "click", l[18]), me(m, "click", l[17])]), (H = !0));
      },
      p(x, ne) {
        (!G || ne[0] & 2) && r !== (r = x[1](ge.ResetLayout) + "") && J(o, r),
          (!G || ne[0] & 2) && p !== (p = x[1](ge.Theme) + "") && J(g, p),
          (!G || ne[0] & 2048) &&
            w !== (w = x[11] === xn.Light ? "&#xe766" : "&#xe767") &&
            ($.innerHTML = w);
        const F = {};
        ne[0] & 128 && (F.active = x[7] === "trade"),
          (ne[0] & 130) | (ne[1] & 16384) &&
            (F.$$scope = { dirty: ne, ctx: x }),
          T.$set(F);
        const z = {};
        ne[0] & 128 && (z.active = x[7] === "layout"),
          (ne[0] & 130) | (ne[1] & 16384) &&
            (z.$$scope = { dirty: ne, ctx: x }),
          D.$set(z);
        const se = {};
        ne[0] & 128 && (se.active = x[7] === "trade"),
          (ne[0] & 13871) | (ne[1] & 16384) &&
            (se.$$scope = { dirty: ne, ctx: x }),
          V.$set(se);
        const oe = {};
        ne[0] & 128 && (oe.active = x[7] === "layout"),
          (ne[0] & 18770) | (ne[1] & 16384) &&
            (oe.$$scope = { dirty: ne, ctx: x }),
          y.$set(oe);
      },
      i(x) {
        G ||
          (P(T.$$.fragment, x),
          P(D.$$.fragment, x),
          P(V.$$.fragment, x),
          P(y.$$.fragment, x),
          (G = !0));
      },
      o(x) {
        R(T.$$.fragment, x),
          R(D.$$.fragment, x),
          R(V.$$.fragment, x),
          R(y.$$.fragment, x),
          (G = !1);
      },
      d(x) {
        x && d(e), X(T), X(D), X(V), X(y), (H = !1), pt(B);
      },
    }
  );
}
function ad(l, e, t) {
  let n, i, r, o, s, a, c, h, m, p, g, _, $, w, k;
  Y(l, Ia, (W) => t(9, (i = W))),
    Y(l, Pr, (W) => t(10, (r = W))),
    Y(l, Ye, (W) => t(38, (o = W))),
    Y(l, Or, (W) => t(11, (s = W))),
    Y(l, Fi, (W) => t(24, (a = W))),
    Y(l, Ne, (W) => t(1, (c = W))),
    Y(l, ro, (W) => t(25, (h = W))),
    Y(l, sl, (W) => t(2, (m = W))),
    Y(l, so, (W) => t(26, (p = W))),
    Y(l, Wl, (W) => t(27, (g = W))),
    Y(l, jl, (W) => t(28, (_ = W))),
    Y(l, ao, (W) => t(12, ($ = W))),
    Y(l, ka, (W) => t(13, (w = W))),
    Y(l, Oi, (W) => t(14, (k = W)));
  let S = {
      createBot: !1,
      createSpotBot: !1,
      orderNotify: !1,
      orderSubmitConfirmation: !1,
      cancelAllOrdersConfirm: !1,
      adjustLeverageConfirmation: !1,
    },
    T,
    I,
    D,
    O = "trade",
    V;
  function U(W) {
    W &&
      (t(3, (S.createBot = W.createBot), S),
      t(3, (S.createSpotBot = W.createSpotBot), S),
      t(3, (S.orderNotify = W.orderNotify), S),
      t(3, (S.orderSubmitConfirmation = W.orderSubmitConfirmation), S),
      t(3, (S.cancelAllOrdersConfirm = W.cancelAllOrdersConfirm), S),
      t(3, (S.adjustLeverageConfirmation = W.adjustLeverageConfirmation), S));
  }
  function y(W, de) {
    if (!W) {
      t(6, (D = []));
      return;
    }
    t(6, (D = de));
  }
  function G(W, de, ae) {
    if (!ae) return;
    const pe = [
      {
        title: W(ge.OrderBook) + " & " + W(ge.RecentTrades),
        id: "BookTradesView",
      },
      { title: W(ge.Chart), id: "ChartView" },
      {
        title: W(ae.isPerpetual ? ge.PositionsOrders : ge.OrdersBalance),
        id: "PositionOrderTabView",
      },
    ];
    t(
      4,
      (T = pe.map(({ id: ee, title: fe }) => {
        const Ie = de.find((Me) => Me.id === ee);
        return { id: ee, title: fe, visible: Ie && Ie.visible };
      }))
    );
  }
  function H(W, de) {
    return td[[W, de].join("_").toUpperCase()];
  }
  function B(W) {
    return function () {
      Oi.next(W),
        Rr.next(W),
        ye.track("web_click", {
          $screen_name: "contract/spot",
          $element_content: "chart_layout",
          detail: JSON.stringify({ trade_direction: W.toLowerCase() }),
        });
    };
  }
  function x() {
    Or.next(s === xn.Light ? xn.Dark : xn.Light);
  }
  function ne() {
    Rr.next(Oi.getValue());
  }
  function F(W) {
    return function () {
      const { updateHandler: de, visible: ae } = W,
        pe = !ae;
      if (de) return de(pe);
      fo.next({ id: W.id, visible: !W.visible });
    };
  }
  function z(W) {
    return function () {
      t(3, (S[W] = !S[W]), S), yi(W, S[W]).then();
    };
  }
  function se() {
    if (!i) {
      Bi.gotoLogin(o(Aa() ? q.LOGIN : q.REGISTER));
      return;
    }
    tl.create(Ko);
  }
  function oe(W, de) {
    return function () {
      Pr.next(Object.assign(Object.assign({}, r), { [W]: !de[W] })), uo.next();
    };
  }
  function le() {
    i && tl.create(Fu);
  }
  const re = () => t(7, (O = "trade")),
    te = () => t(7, (O = "layout"));
  function ce(W) {
    l.$$.not_equal(S.orderNotify, W) && ((S.orderNotify = W), t(3, S));
  }
  function ie(W) {
    l.$$.not_equal(S.orderSubmitConfirmation, W) &&
      ((S.orderSubmitConfirmation = W), t(3, S));
  }
  function he(W) {
    l.$$.not_equal(S.cancelAllOrdersConfirm, W) &&
      ((S.cancelAllOrdersConfirm = W), t(3, S));
  }
  function Ae(W) {
    l.$$.not_equal(S.adjustLeverageConfirmation, W) &&
      ((S.adjustLeverageConfirmation = W), t(3, S));
  }
  function Ee(W) {
    l.$$.not_equal(S.createBot, W) && ((S.createBot = W), t(3, S));
  }
  function Ce(W) {
    l.$$.not_equal(S.createSpotBot, W) && ((S.createSpotBot = W), t(3, S));
  }
  function ue(W, de) {
    l.$$.not_equal(de.visible, W) && ((de.visible = W), t(4, T));
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty[0] & 268435456 && t(5, (I = _)),
        l.$$.dirty[0] & 4 &&
          t(0, (V = (m == null ? void 0 : m.isPerpetual) || !1)),
        l.$$.dirty[0] & 134217728 && U(g),
        l.$$.dirty[0] & 67108870 && G(c, p.items, m),
        l.$$.dirty[0] & 33554435 &&
          y(V, [
            {
              id: "favorite",
              title: c(ge.Favorites),
              visible: oo(h),
              updateHandler: (W) => {
                co(W ? Vr.Visible : Vr.Hidden);
              },
            },
          ]),
        l.$$.dirty[0] & 16777218 &&
          t(
            8,
            (n = {
              id: "subAccount",
              title: c(ge.subAccount),
              visible: a,
              updateHandler: (W) => {
                il.setVisible(W);
              },
            })
          );
    }),
    [
      V,
      c,
      m,
      S,
      T,
      I,
      D,
      O,
      n,
      i,
      r,
      s,
      $,
      w,
      k,
      H,
      B,
      x,
      ne,
      F,
      z,
      se,
      oe,
      le,
      a,
      h,
      p,
      g,
      _,
      re,
      te,
      ce,
      ie,
      he,
      Ae,
      Ee,
      Ce,
      ue,
    ]
  );
}
let od = class extends ve {
  constructor(e) {
    super(), be(this, e, ad, sd, _e, {}, null, [-1, -1]);
  }
};
function cd(l) {
  let e, t;
  return (
    (e = new od({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function fd(l) {
  let e, t, n, i;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(r) {
      e = b(r, "DIV", { slot: !0, class: !0 });
      var o = E(e);
      t = b(o, "DIV", { class: !0 });
      var s = E(t);
      n = b(s, "I", { class: !0 });
      var a = E(n);
      (i = L(a, "")), a.forEach(d), s.forEach(d), o.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-1n5cpl1"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-1n5cpl1");
    },
    m(r, o) {
      M(r, e, o), f(e, t), f(t, n), f(n, i);
    },
    p: Te,
    d(r) {
      r && d(e);
    },
  };
}
function ud(l) {
  let e, t, n;
  return (
    (t = new et({
      props: {
        placement: dd,
        modifiers: l[0],
        noIcon: !0,
        noHoverColor: !0,
        triggerClass: "ml10",
        $$slots: { trigger: [fd], default: [cd] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "DIV", { class: !0 });
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        u(e, "class", "df aic jcsb pr");
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p(i, [r]) {
        const o = {};
        r & 2 && (o.$$scope = { dirty: r, ctx: i }), t.$set(o);
      },
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
const dd = "bottom";
function hd(l) {
  return [[{ name: "preventOverflow", options: { padding: 40 } }]];
}
let md = class extends ve {
  constructor(e) {
    super(), be(this, e, hd, ud, _e, {});
  }
};
function pd(l) {
  let e, t, n;
  return (
    (t = new Ra({})),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "DIV", { class: !0 });
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        u(e, "class", "wrap p12 T2 B2 ovh H-1nvw85a");
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p: Te,
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
let _d = class extends ve {
  constructor(e) {
    super(), be(this, e, null, pd, _e, {});
  }
};
function gd(l) {
  let e, t;
  return (
    (e = new _d({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function vd(l) {
  let e, t, n, i;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(r) {
      e = b(r, "DIV", { slot: !0, class: !0 });
      var o = E(e);
      t = b(o, "DIV", { class: !0 });
      var s = E(t);
      n = b(s, "I", { class: !0 });
      var a = E(n);
      (i = L(a, "")), a.forEach(d), s.forEach(d), o.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f24"),
        u(t, "class", "circle-icon brp50 H-d2j2sd"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-d2j2sd");
    },
    m(r, o) {
      M(r, e, o), f(e, t), f(t, n), f(n, i);
    },
    p: Te,
    d(r) {
      r && d(e);
    },
  };
}
function bd(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        noIcon: !0,
        noHoverColor: !0,
        placement: $d,
        modifiers: l[0],
        triggerClass: "ml10",
        $$slots: { trigger: [vd], default: [gd] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 2 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
const $d = "bottom";
function Ed(l) {
  return [[{ name: "preventOverflow", options: { padding: 40 } }]];
}
let wd = class extends ve {
  constructor(e) {
    super(), be(this, e, Ed, bd, _e, {});
  }
};
function kd(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s = l[1](j.Support) + "",
    a,
    c,
    h,
    m,
    p,
    g,
    _,
    $ = l[1](j.HelpCenter) + "",
    w,
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U = l[1](j.Tutorials) + "",
    y,
    G,
    H;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = v("i")),
        (i = N("")),
        (r = A()),
        (o = v("span")),
        (a = N(s)),
        (c = A()),
        (h = v("div")),
        (m = v("i")),
        (p = N("")),
        (g = A()),
        (_ = v("a")),
        (w = N($)),
        (S = A()),
        (T = v("div")),
        (I = v("i")),
        (D = N("")),
        (O = A()),
        (V = v("span")),
        (y = N(U)),
        this.h();
    },
    l(B) {
      e = b(B, "DIV", { class: !0 });
      var x = E(e);
      t = b(x, "DIV", { class: !0 });
      var ne = E(t);
      n = b(ne, "I", { class: !0 });
      var F = E(n);
      (i = L(F, "")),
        F.forEach(d),
        (r = C(ne)),
        (o = b(ne, "SPAN", { class: !0 }));
      var z = E(o);
      (a = L(z, s)),
        z.forEach(d),
        ne.forEach(d),
        (c = C(x)),
        (h = b(x, "DIV", { class: !0 }));
      var se = E(h);
      m = b(se, "I", { class: !0 });
      var oe = E(m);
      (p = L(oe, "")),
        oe.forEach(d),
        (g = C(se)),
        (_ = b(se, "A", { class: !0, href: !0, target: !0, rel: !0 }));
      var le = E(_);
      (w = L(le, $)),
        le.forEach(d),
        se.forEach(d),
        (S = C(x)),
        (T = b(x, "DIV", { class: !0 }));
      var re = E(T);
      I = b(re, "I", { class: !0 });
      var te = E(I);
      (D = L(te, "")),
        te.forEach(d),
        (O = C(re)),
        (V = b(re, "SPAN", { class: !0 }));
      var ce = E(V);
      (y = L(ce, U)), ce.forEach(d), re.forEach(d), x.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f24"),
        u(o, "class", "ml10"),
        u(t, "class", "row df aic H-113asnp"),
        u(m, "class", "iconfont f24"),
        u(_, "class", "ml10 T1 H-113asnp"),
        u(_, "href", (k = l[0](q.PHEMEX_HELP_CENTER))),
        u(_, "target", "_blank"),
        u(_, "rel", "nofollow noopener"),
        u(h, "class", "row df aic H-113asnp"),
        u(I, "class", "iconfont f24"),
        u(V, "class", "ml10"),
        u(T, "class", "row df aic H-113asnp"),
        u(e, "class", "dropdown-wrap T1 H-113asnp");
    },
    m(B, x) {
      M(B, e, x),
        f(e, t),
        f(t, n),
        f(n, i),
        f(t, r),
        f(t, o),
        f(o, a),
        f(e, c),
        f(e, h),
        f(h, m),
        f(m, p),
        f(h, g),
        f(h, _),
        f(_, w),
        f(e, S),
        f(e, T),
        f(T, I),
        f(I, D),
        f(T, O),
        f(T, V),
        f(V, y),
        G || ((H = [me(t, "click", l[7]), me(T, "click", l[3])]), (G = !0));
    },
    p(B, x) {
      x & 2 && s !== (s = B[1](j.Support) + "") && J(a, s),
        x & 2 && $ !== ($ = B[1](j.HelpCenter) + "") && J(w, $),
        x & 1 && k !== (k = B[0](q.PHEMEX_HELP_CENTER)) && u(_, "href", k),
        x & 2 && U !== (U = B[1](j.Tutorials) + "") && J(y, U);
    },
    d(B) {
      B && d(e), (G = !1), pt(H);
    },
  };
}
function Td(l) {
  let e, t, n, i;
  return {
    c() {
      (e = v("div")), (t = v("div")), (n = v("i")), (i = N("")), this.h();
    },
    l(r) {
      e = b(r, "DIV", { slot: !0, class: !0 });
      var o = E(e);
      t = b(o, "DIV", { class: !0 });
      var s = E(t);
      n = b(s, "I", { class: !0 });
      var a = E(n);
      (i = L(a, "")), a.forEach(d), s.forEach(d), o.forEach(d), this.h();
    },
    h() {
      u(n, "class", "iconfont f1 f20"),
        u(t, "class", "circle-icon brp50 H-113asnp"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 H-113asnp");
    },
    m(r, o) {
      M(r, e, o), f(e, t), f(t, n), f(n, i);
    },
    p: Te,
    d(r) {
      r && d(e);
    },
  };
}
function Id(l) {
  let e, t;
  return (
    (e = new et({
      props: {
        placement: "bottom",
        modifiers: l[2],
        noIcon: !0,
        noHoverColor: !0,
        triggerClass: "ml5",
        $$slots: { trigger: [Td], default: [kd] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, [i]) {
        const r = {};
        i & 8195 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Ad(l, e, t) {
  let n, i, r, o;
  Y(l, Ui, (w) => t(0, (n = w))),
    Y(l, sl, (w) => t(5, (i = w))),
    Y(l, Ne, (w) => t(1, (r = w))),
    Y(l, al, (w) => t(6, (o = w)));
  const s = [{ name: "preventOverflow", options: { padding: 10 } }],
    a = {
      en: "https://www.youtube.com/embed/Ki86Q81V0ZA",
      ru: "https://www.youtube.com/embed/bz-KLWUoM78",
      ko: "https://www.youtube.com/embed/4fRHld2feJg",
      ja: "https://www.youtube.com/embed/kzZgqvBVaPY",
      es: "https://www.youtube.com/embed/udhHOEchQzA",
      de: "https://www.youtube.com/embed/4Ngid1wRsHo",
      fr: "https://www.youtube.com/embed/Xmvx6WeuFns",
      cn: "",
      tr: "https://www.youtube.com/embed/wnkjBmAFvlw",
      pt: "https://www.youtube.com/embed/vhuDv8OokNw",
    },
    c = {
      en: "https://www.youtube.com/embed/Zjzrkj_4YmI",
      ru: "https://www.youtube.com/embed/B5DGT9BIUCs",
      ko: "https://www.youtube.com/embed/JhnaJT9MMw0",
      ja: "https://www.youtube.com/embed/wLDYen3e9rs",
      es: "https://www.youtube.com/embed/gOWkfxYxkbQ",
      de: "https://www.youtube.com/embed/4qGBsWqN6L4",
      fr: "https://www.youtube.com/embed/8PMzEZGmi48",
      cn: "",
      tr: "https://www.youtube.com/embed/St_kM40YRck",
      pt: "https://www.youtube.com/embed/dko4VjM02lg",
    };
  let h = {},
    m = "";
  function p(w, k) {
    if (k) return k.tradeType === "Spot" ? a[w] || a.en : c[w] || c.en;
  }
  function g(w, k, S, T) {
    if (k) {
      if (k.tradeType === "Spot") {
        h = {
          title: w(j.WelcomeToPhemexSpot),
          videoUrl: T,
          otherTitle: w(j.BasicTradingConcepts),
          articles: [
            {
              title: w(j.WhatAreConditionalOrders),
              link: S(q.WHAT_ARE_CONDITIONAL_ORDERS),
            },
            {
              title: w(j.HowDoIBuy),
              link: S(q.HOW_DO_BUY_OR_SELL_A_COIN_SPOT_TRADING),
            },
            {
              title: w(j.HowDoIChange),
              link: S(q.HOW_DO_CHANGE_TRADING_PAIRS_SYMBOLS),
            },
          ],
          viewMoreLink: S(q.PHEMEX_HELP_CENTER),
        };
        return;
      }
      h = {
        title: w(j.WelcomeToPhemexContractTrade),
        videoUrl: T,
        otherTitle: w(j.BasicTradingConcepts),
        articles: [
          {
            title: w(j.WhatIsStopLossOrder),
            link: S(q.WHAT_IS_A_STOP_LOSS_ORDER),
          },
          {
            title: w(j.HowDoMarketOrdersFill),
            link: S(q.HOW_DO_MARKET_ORDERS_FILL),
          },
          {
            title: w(j.WhatIsCloseOnTriggerOrder),
            link: S(q.WHAT_IS_A_CLOSE_ON_TRIGGER_ORDER),
          },
          {
            title: w(j.HowDoIUseHedgeMode),
            link: S(q.HOW_DO_I_USE_HEDGE_MODE),
          },
        ],
        viewMoreLink: S(q.PHEMEX_HELP_CENTER),
      };
    }
  }
  function _() {
    tl.create(zo, h);
  }
  const $ = () => jo.openChat();
  return (
    (l.$$.update = () => {
      l.$$.dirty & 96 && t(4, (m = p(o, i))), l.$$.dirty & 51 && g(r, i, n, m);
    }),
    [n, r, s, _, m, i, o, $]
  );
}
let Cd = class extends ve {
  constructor(e) {
    super(), be(this, e, Ad, Id, _e, {});
  }
};
function ia(l, e, t) {
  const n = l.slice();
  return (n[5] = e[t]), n;
}
function ra(l, e, t) {
  const n = l.slice();
  return (n[8] = e[t]), n;
}
function Sd(l) {
  let e,
    t = l[5].title + "",
    n,
    i;
  return {
    c() {
      (e = v("a")), (n = N(t)), this.h();
    },
    l(r) {
      e = b(r, "A", { class: !0, href: !0 });
      var o = E(e);
      (n = L(o, t)), o.forEach(d), this.h();
    },
    h() {
      u(e, "class", "header-menu trigger H-1ephcsr"),
        u(e, "href", (i = l[5].url)),
        we(e, "current", Yt(l[5]));
    },
    m(r, o) {
      M(r, e, o), f(e, n);
    },
    p(r, o) {
      o & 2 && t !== (t = r[5].title + "") && J(n, t),
        o & 2 && i !== (i = r[5].url) && u(e, "href", i),
        o & 2 && we(e, "current", Yt(r[5]));
    },
    i: Te,
    o: Te,
    d(r) {
      r && d(e);
    },
  };
}
function Dd(l) {
  let e, t;
  return (
    (e = new et({
      props: { $$slots: { trigger: [Pd], default: [Hd] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 2050 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function sa(l) {
  let e, t;
  return (
    (e = new Re({
      props: { link: l[8].url, target: "_self", title: l[8].title },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 2 && (r.link = n[8].url),
          i & 2 && (r.title = n[8].title),
          e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Hd(l) {
  let e,
    t,
    n = l[5].children,
    i = [];
  for (let o = 0; o < n.length; o += 1) i[o] = sa(ra(l, n, o));
  const r = (o) =>
    R(i[o], 1, 1, () => {
      i[o] = null;
    });
  return {
    c() {
      e = v("div");
      for (let o = 0; o < i.length; o += 1) i[o].c();
      this.h();
    },
    l(o) {
      e = b(o, "DIV", { class: !0 });
      var s = E(e);
      for (let a = 0; a < i.length; a += 1) i[a].l(s);
      s.forEach(d), this.h();
    },
    h() {
      u(e, "class", "menu-items H-1ephcsr");
    },
    m(o, s) {
      M(o, e, s);
      for (let a = 0; a < i.length; a += 1) i[a] && i[a].m(e, null);
      t = !0;
    },
    p(o, s) {
      if (s & 2) {
        n = o[5].children;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const c = ra(o, n, a);
          i[a]
            ? (i[a].p(c, s), P(i[a], 1))
            : ((i[a] = sa(c)), i[a].c(), P(i[a], 1), i[a].m(e, null));
        }
        for (De(), a = n.length; a < i.length; a += 1) r(a);
        He();
      }
    },
    i(o) {
      if (!t) {
        for (let s = 0; s < n.length; s += 1) P(i[s]);
        t = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1) R(i[s]);
      t = !1;
    },
    d(o) {
      o && d(e), yn(i, o);
    },
  };
}
function Pd(l) {
  let e,
    t = l[5].title + "",
    n;
  return {
    c() {
      (e = v("span")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "SPAN", { slot: !0, class: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "slot", "trigger"),
        u(e, "class", "header-menu trigger H-1ephcsr"),
        we(e, "current", Yt(l[5]));
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 2 && t !== (t = i[5].title + "") && J(n, t),
        r & 2 && we(e, "current", Yt(i[5]));
    },
    d(i) {
      i && d(e);
    },
  };
}
function aa(l) {
  let e, t, n, i;
  const r = [Dd, Sd],
    o = [];
  function s(a, c) {
    return a[5].children ? 0 : 1;
  }
  return (
    (t = s(l)),
    (n = o[t] = r[t](l)),
    {
      c() {
        (e = v("div")), n.c(), this.h();
      },
      l(a) {
        e = b(a, "DIV", { style: !0 });
        var c = E(e);
        n.l(c), c.forEach(d), this.h();
      },
      h() {
        ze(
          e,
          "--menu-hover-color",
          Yt(l[5]) ? l[2][l[0]].activeColor : l[2][l[0]].bannerColor
        ),
          ze(
            e,
            "--menu-color",
            Yt(l[5]) ? l[2][l[0]].activeColor : l[2][l[0]].bannerColor
          );
      },
      m(a, c) {
        M(a, e, c), o[t].m(e, null), (i = !0);
      },
      p(a, c) {
        let h = t;
        (t = s(a)),
          t === h
            ? o[t].p(a, c)
            : (De(),
              R(o[h], 1, 1, () => {
                o[h] = null;
              }),
              He(),
              (n = o[t]),
              n ? n.p(a, c) : ((n = o[t] = r[t](a)), n.c()),
              P(n, 1),
              n.m(e, null)),
          (!i || c & 3) &&
            ze(
              e,
              "--menu-hover-color",
              Yt(a[5]) ? a[2][a[0]].activeColor : a[2][a[0]].bannerColor
            ),
          (!i || c & 3) &&
            ze(
              e,
              "--menu-color",
              Yt(a[5]) ? a[2][a[0]].activeColor : a[2][a[0]].bannerColor
            );
      },
      i(a) {
        i || (P(n), (i = !0));
      },
      o(a) {
        R(n), (i = !1);
      },
      d(a) {
        a && d(e), o[t].d();
      },
    }
  );
}
function Od(l) {
  var p, g;
  let e,
    t,
    n,
    i,
    r = ((p = l[1]) == null ? void 0 : p.launchApp.title) + "",
    o,
    s,
    a,
    c = (g = l[1]) == null ? void 0 : g.navs,
    h = [];
  for (let _ = 0; _ < c.length; _ += 1) h[_] = aa(ia(l, c, _));
  const m = (_) =>
    R(h[_], 1, 1, () => {
      h[_] = null;
    });
  return {
    c() {
      e = v("div");
      for (let _ = 0; _ < h.length; _ += 1) h[_].c();
      (t = A()), (n = v("a")), (i = v("div")), (o = N(r)), this.h();
    },
    l(_) {
      e = b(_, "DIV", { class: !0, style: !0 });
      var $ = E(e);
      for (let S = 0; S < h.length; S += 1) h[S].l($);
      (t = C($)), (n = b($, "A", { class: !0, href: !0 }));
      var w = E(n);
      i = b(w, "DIV", { class: !0 });
      var k = E(i);
      (o = L(k, r)), k.forEach(d), w.forEach(d), $.forEach(d), this.h();
    },
    h() {
      var _;
      u(i, "class", "inner"),
        u(n, "class", "launch-app H-1ephcsr"),
        u(n, "href", (s = (_ = l[1]) == null ? void 0 : _.launchApp.url)),
        u(e, "class", "navs f1 df jcc aic H-1ephcsr"),
        ze(e, "--bannerBg", l[2][l[0]].bannerBg),
        ze(e, "--bannerColor", l[2][l[0]].bannerColor),
        ze(e, "--activeColor", l[2][l[0]].activeColor);
    },
    m(_, $) {
      M(_, e, $);
      for (let w = 0; w < h.length; w += 1) h[w] && h[w].m(e, null);
      f(e, t), f(e, n), f(n, i), f(i, o), (a = !0);
    },
    p(_, [$]) {
      var w, k, S;
      if ($ & 7) {
        c = (w = _[1]) == null ? void 0 : w.navs;
        let T;
        for (T = 0; T < c.length; T += 1) {
          const I = ia(_, c, T);
          h[T]
            ? (h[T].p(I, $), P(h[T], 1))
            : ((h[T] = aa(I)), h[T].c(), P(h[T], 1), h[T].m(e, t));
        }
        for (De(), T = c.length; T < h.length; T += 1) m(T);
        He();
      }
      (!a || $ & 2) &&
        r !== (r = ((k = _[1]) == null ? void 0 : k.launchApp.title) + "") &&
        J(o, r),
        (!a ||
          ($ & 2 &&
            s !== (s = (S = _[1]) == null ? void 0 : S.launchApp.url))) &&
          u(n, "href", s),
        (!a || $ & 1) && ze(e, "--bannerBg", _[2][_[0]].bannerBg),
        (!a || $ & 1) && ze(e, "--bannerColor", _[2][_[0]].bannerColor),
        (!a || $ & 1) && ze(e, "--activeColor", _[2][_[0]].activeColor);
    },
    i(_) {
      if (!a) {
        for (let $ = 0; $ < c.length; $ += 1) P(h[$]);
        a = !0;
      }
    },
    o(_) {
      h = h.filter(Boolean);
      for (let $ = 0; $ < h.length; $ += 1) R(h[$]);
      a = !1;
    },
    d(_) {
      _ && d(e), yn(h, _);
    },
  };
}
function Yt(l) {
  const { url: e, children: t } = l;
  if (window && window.location.pathname === e) return !0;
  if (t) {
    for (let n = 0; n < t.length; n++) if (Yt(t[n])) return !0;
  }
  return !1;
}
function Vd(l, e, t) {
  let n, i;
  const r = {
      default: {
        bannerBg: "#fff",
        bannerColor: "#000",
        activeColor: "#45e555",
      },
      dark: {
        bannerBg: "transparent",
        bannerColor: "#fff",
        activeColor: "#45e555",
      },
    },
    o = nn.pipe(Li((a) => (a ? "dark" : "default")));
  Y(l, o, (a) => t(0, (n = a)));
  const s = Io([Ye, Ne]).pipe(
    Li(([a, c]) => {
      const h = [
          { title: c(j.Home), url: a(q.PHEMEX_HOME) },
          { title: c(j.Chat2Earn), url: a(q.WEB3_SOCIAL_TRADE_PT_REWARDS) },
          {
            title: c(j.Trade),
            children: [
              { title: c(j.BuyCrypto), url: a(q.FIAT_BUY_CRYPTO_PLACE_ORDER) },
              { title: c(j.Spot), url: q.PHEMEX_SPOT_TRADE + "/PTUSDT" },
              { title: c(j.Contract), url: q.PHEMEX_CONTRACT_TRADE_USDS },
            ],
          },
          {
            title: c(j.PhemexToken),
            children: [
              {
                title: c(j.PhemexTokenBenefits),
                url: a(q.WEB3_EQUITY_BENEFITS),
              },
              { title: c(j.Web3Whitepaper), url: q.Web3_Whitepaper },
            ],
          },
        ],
        m = {
          title: c(j.LaunchPulseApp),
          url: a(q.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS),
        };
      return { navs: h, launchApp: m };
    })
  );
  return Y(l, s, (a) => t(1, (i = a))), [n, i, r, o, s];
}
let Rd = class extends ve {
  constructor(e) {
    super(), be(this, e, Vd, Od, _e, {});
  }
};
function oa(l) {
  let e, t, n, i, r;
  return {
    c() {
      (e = v("div")), (t = v("i")), (n = N("")), this.h();
    },
    l(o) {
      e = b(o, "DIV", { class: !0 });
      var s = E(e);
      t = b(s, "I", { class: !0 });
      var a = E(t);
      (n = L(a, "")), a.forEach(d), s.forEach(d), this.h();
    },
    h() {
      u(t, "class", "iconfont f16"),
        u(e, "class", "overflow-icon df jcc cp H-1poignn");
    },
    m(o, s) {
      M(o, e, s), f(e, t), f(t, n), i || ((r = me(e, "click", l[1])), (i = !0));
    },
    p: Te,
    d(o) {
      o && d(e), (i = !1), r();
    },
  };
}
function Nd(l) {
  let e,
    t = l[0] && oa(l);
  return {
    c() {
      t && t.c(), (e = it());
    },
    l(n) {
      t && t.l(n), (e = it());
    },
    m(n, i) {
      t && t.m(n, i), M(n, e, i);
    },
    p(n, [i]) {
      n[0]
        ? t
          ? t.p(n, i)
          : ((t = oa(n)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Te,
    o: Te,
    d(n) {
      t && t.d(n), n && d(e);
    },
  };
}
function Ld(l, e, t) {
  let { leftCon: n } = e,
    i = !1;
  Je(function () {
    let a = 0;
    const c = 10,
      m = setInterval(() => {
        if (a > c || i) {
          clearInterval(m);
          return;
        }
        t(0, (i = n && n.scrollWidth > n.clientWidth)), a++;
      }, 500);
  });
  function r(s) {
    const a = new ResizeObserver((c) => {
      for (let h of c) t(0, (i = h.target.scrollWidth > h.target.clientWidth));
    });
    a.observe(s), Ao(() => s && a.unobserve(s));
  }
  function o() {
    n.scrollBy({ left: 100, behavior: "smooth" });
  }
  return (
    (l.$$set = (s) => {
      "leftCon" in s && t(2, (n = s.leftCon));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 4 && n && r(n);
    }),
    [i, o, n]
  );
}
let Md = class extends ve {
  constructor(e) {
    super(), be(this, e, Ld, Nd, _e, { leftCon: 2 });
  }
};
function ca(l) {
  let e, t;
  return (
    (e = new yo({})),
    e.$on("close", l[11]),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Ud(l) {
  let e, t, n;
  return (
    (t = new Rd({})),
    {
      c() {
        (e = v("div")), K(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "DIV", { class: !0 });
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d), this.h();
      },
      h() {
        u(e, "class", "f1");
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p: Te,
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
function yd(l) {
  var h;
  let e, t, n, i, r;
  const o = [Fd, Bd],
    s = [];
  function a(m, p) {
    return m[0] && m[8] ? 0 : 1;
  }
  (t = a(l)), (n = s[t] = o[t](l));
  let c = l[4] && ((h = l[5]) == null ? void 0 : h.isPerpetual) && fa();
  return {
    c() {
      (e = v("div")), n.c(), (i = A()), c && c.c(), this.h();
    },
    l(m) {
      e = b(m, "DIV", { class: !0 });
      var p = E(e);
      n.l(p), (i = C(p)), c && c.l(p), p.forEach(d), this.h();
    },
    h() {
      u(e, "class", "left-con H-1a2v4kl");
    },
    m(m, p) {
      M(m, e, p),
        s[t].m(e, null),
        f(e, i),
        c && c.m(e, null),
        l[13](e),
        (r = !0);
    },
    p(m, p) {
      var _;
      let g = t;
      (t = a(m)),
        t !== g &&
          (De(),
          R(s[g], 1, 1, () => {
            s[g] = null;
          }),
          He(),
          (n = s[t]),
          n || ((n = s[t] = o[t](m)), n.c()),
          P(n, 1),
          n.m(e, i)),
        m[4] && (_ = m[5]) != null && _.isPerpetual
          ? c
            ? p & 48 && P(c, 1)
            : ((c = fa()), c.c(), P(c, 1), c.m(e, null))
          : c &&
            (De(),
            R(c, 1, 1, () => {
              c = null;
            }),
            He());
    },
    i(m) {
      r || (P(n), P(c), (r = !0));
    },
    o(m) {
      R(n), R(c), (r = !1);
    },
    d(m) {
      m && d(e), s[t].d(), c && c.d(), l[13](null);
    },
  };
}
function Bd(l) {
  let e, t;
  return (
    (e = new jc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Fd(l) {
  let e, t;
  return (
    (e = new uu({ props: { class: "mh20" } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function fa(l) {
  let e, t;
  return (
    (e = new Hu({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Gd(l) {
  let e,
    t,
    n,
    i = l[7](Le.LogIn) + "",
    r,
    o,
    s,
    a,
    c,
    h,
    m;
  return (
    (a = new ut({
      props: {
        class: "register tc noa",
        type: "primary",
        size: "small",
        $$slots: { default: [jd] },
        $$scope: { ctx: l },
      },
    })),
    a.$on("click", l[10]),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = v("span")),
          (r = N(i)),
          (o = A()),
          (s = v("div")),
          K(a.$$.fragment),
          this.h();
      },
      l(p) {
        e = b(p, "DIV", { class: !0 });
        var g = E(e);
        t = b(g, "DIV", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
        });
        var _ = E(t);
        n = b(_, "SPAN", { class: !0 });
        var $ = E(n);
        (r = L($, i)),
          $.forEach(d),
          _.forEach(d),
          (o = C(g)),
          (s = b(g, "DIV", {
            class: !0,
            "data-gac": !0,
            "data-gaa": !0,
            "data-gal": !0,
          }));
        var w = E(s);
        Z(a.$$.fragment, w), w.forEach(d), g.forEach(d), this.h();
      },
      h() {
        u(n, "class", "tc T1 cp"),
          u(t, "class", "login ga H-1a2v4kl"),
          u(t, "data-gac", "user.login"),
          u(t, "data-gaa", "link_click"),
          u(t, "data-gal", "header.login"),
          u(s, "class", "ga"),
          u(s, "data-gac", "user.register"),
          u(s, "data-gaa", "link_click"),
          u(s, "data-gal", "header.register"),
          u(e, "class", "df aic ph10");
      },
      m(p, g) {
        M(p, e, g),
          f(e, t),
          f(t, n),
          f(n, r),
          f(e, o),
          f(e, s),
          Q(a, s, null),
          (c = !0),
          h || ((m = me(n, "click", l[9])), (h = !0));
      },
      p(p, g) {
        (!c || g & 128) && i !== (i = p[7](Le.LogIn) + "") && J(r, i);
        const _ = {};
        g & 65664 && (_.$$scope = { dirty: g, ctx: p }), a.$set(_);
      },
      i(p) {
        c || (P(a.$$.fragment, p), (c = !0));
      },
      o(p) {
        R(a.$$.fragment, p), (c = !1);
      },
      d(p) {
        p && d(e), X(a), (h = !1), m();
      },
    }
  );
}
function Wd(l) {
  let e,
    t,
    n,
    i,
    r = !Jt.isJapanSite && qd(l),
    o = !l[8] && Yd();
  return (
    (n = new au({})),
    {
      c() {
        r && r.c(), (e = A()), o && o.c(), (t = A()), K(n.$$.fragment);
      },
      l(s) {
        r && r.l(s), (e = C(s)), o && o.l(s), (t = C(s)), Z(n.$$.fragment, s);
      },
      m(s, a) {
        r && r.m(s, a),
          M(s, e, a),
          o && o.m(s, a),
          M(s, t, a),
          Q(n, s, a),
          (i = !0);
      },
      p(s, a) {
        Jt.isJapanSite || r.p(s, a);
      },
      i(s) {
        i || (P(r), P(o), P(n.$$.fragment, s), (i = !0));
      },
      o(s) {
        R(r), R(o), R(n.$$.fragment, s), (i = !1);
      },
      d(s) {
        r && r.d(s), s && d(e), o && o.d(s), s && d(t), X(n, s);
      },
    }
  );
}
function jd(l) {
  let e = l[7](Le.Register) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 128 && e !== (e = n[7](Le.Register) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function qd(l) {
  let e, t, n;
  return (
    (t = new ut({
      props: {
        class: "tc deposit-btn",
        type: "primary",
        size: "small",
        $$slots: { default: [zd] },
        $$scope: { ctx: l },
      },
    })),
    t.$on("click", l[12]),
    {
      c() {
        (e = v("div")), K(t.$$.fragment);
      },
      l(i) {
        e = b(i, "DIV", {});
        var r = E(e);
        Z(t.$$.fragment, r), r.forEach(d);
      },
      m(i, r) {
        M(i, e, r), Q(t, e, null), (n = !0);
      },
      p(i, r) {
        const o = {};
        r & 65664 && (o.$$scope = { dirty: r, ctx: i }), t.$set(o);
      },
      i(i) {
        n || (P(t.$$.fragment, i), (n = !0));
      },
      o(i) {
        R(t.$$.fragment, i), (n = !1);
      },
      d(i) {
        i && d(e), X(t);
      },
    }
  );
}
function zd(l) {
  let e,
    t,
    n,
    i,
    r,
    o = l[7](Le.Deposit) + "",
    s;
  return {
    c() {
      (e = v("div")),
        (t = v("i")),
        (n = N("")),
        (i = A()),
        (r = v("div")),
        (s = N(o)),
        this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var c = E(e);
      t = b(c, "I", { class: !0 });
      var h = E(t);
      (n = L(h, "")),
        h.forEach(d),
        (i = C(c)),
        (r = b(c, "DIV", { class: !0 }));
      var m = E(r);
      (s = L(m, o)), m.forEach(d), c.forEach(d), this.h();
    },
    h() {
      u(t, "class", "iconfont fw1"),
        u(r, "class", "ml8 fw2"),
        u(e, "class", "df aic jcc");
    },
    m(a, c) {
      M(a, e, c), f(e, t), f(t, n), f(e, i), f(e, r), f(r, s);
    },
    p(a, c) {
      c & 128 && o !== (o = a[7](Le.Deposit) + "") && J(s, o);
    },
    d(a) {
      a && d(e);
    },
  };
}
function Yd(l) {
  let e, t;
  return (
    (e = new Uf({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Kd(l) {
  let e, t;
  return (
    (e = new xc({})),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function Qd(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k,
    S,
    T,
    I,
    D,
    O,
    V,
    U,
    y,
    G,
    H = l[3] && l[1] && ca(l);
  i = new Mo({});
  const B = [yd, Ud],
    x = [];
  function ne(le, re) {
    return Jt.isJapanSite ? 1 : 0;
  }
  (s = ne()), (a = x[s] = B[s](l)), (h = new Md({ props: { leftCon: l[2] } }));
  const F = [Wd, Gd],
    z = [];
  function se(le, re) {
    return le[6] === "Login" ? 0 : 1;
  }
  (g = se(l)), (_ = z[g] = F[g](l));
  let oe = !Jt.isJapanSite && Kd();
  return (
    (T = new cf({})),
    (D = new wd({})),
    (V = new md({})),
    (y = new Cd({})),
    {
      c() {
        H && H.c(),
          (e = A()),
          (t = v("header")),
          (n = v("div")),
          K(i.$$.fragment),
          (r = A()),
          (o = v("div")),
          a.c(),
          (c = A()),
          K(h.$$.fragment),
          (m = A()),
          (p = v("div")),
          _.c(),
          ($ = A()),
          (w = v("div")),
          (k = A()),
          oe && oe.c(),
          (S = A()),
          K(T.$$.fragment),
          (I = A()),
          K(D.$$.fragment),
          (O = A()),
          K(V.$$.fragment),
          (U = A()),
          K(y.$$.fragment),
          this.h();
      },
      l(le) {
        H && H.l(le), (e = C(le)), (t = b(le, "HEADER", { class: !0 }));
        var re = E(t);
        n = b(re, "DIV", { class: !0 });
        var te = E(n);
        Z(i.$$.fragment, te), (r = C(te)), (o = b(te, "DIV", { class: !0 }));
        var ce = E(o);
        a.l(ce),
          ce.forEach(d),
          (c = C(te)),
          Z(h.$$.fragment, te),
          te.forEach(d),
          (m = C(re)),
          (p = b(re, "DIV", { class: !0 }));
        var ie = E(p);
        _.l(ie),
          ($ = C(ie)),
          (w = b(ie, "DIV", { class: !0 })),
          E(w).forEach(d),
          (k = C(ie)),
          oe && oe.l(ie),
          (S = C(ie)),
          Z(T.$$.fragment, ie),
          (I = C(ie)),
          Z(D.$$.fragment, ie),
          (O = C(ie)),
          Z(V.$$.fragment, ie),
          (U = C(ie)),
          Z(y.$$.fragment, ie),
          ie.forEach(d),
          re.forEach(d),
          this.h();
      },
      h() {
        u(o, "class", "ml24 df aic jscb"),
          u(n, "class", "hd-left df aic jcsb"),
          u(w, "class", "split ml10 H-1a2v4kl"),
          u(p, "class", "hd-right df aic jcsb"),
          u(t, "class", "wrap ps df ph12 aic jcsb wsn B1 fw2 H-1a2v4kl"),
          we(t, "jp", Jt.isJapanSite);
      },
      m(le, re) {
        H && H.m(le, re),
          M(le, e, re),
          M(le, t, re),
          f(t, n),
          Q(i, n, null),
          f(n, r),
          f(n, o),
          x[s].m(o, null),
          f(n, c),
          Q(h, n, null),
          f(t, m),
          f(t, p),
          z[g].m(p, null),
          f(p, $),
          f(p, w),
          f(p, k),
          oe && oe.m(p, null),
          f(p, S),
          Q(T, p, null),
          f(p, I),
          Q(D, p, null),
          f(p, O),
          Q(V, p, null),
          f(p, U),
          Q(y, p, null),
          (G = !0);
      },
      p(le, [re]) {
        le[3] && le[1]
          ? H
            ? (H.p(le, re), re & 10 && P(H, 1))
            : ((H = ca(le)), H.c(), P(H, 1), H.m(e.parentNode, e))
          : H &&
            (De(),
            R(H, 1, 1, () => {
              H = null;
            }),
            He()),
          a.p(le, re);
        const te = {};
        re & 4 && (te.leftCon = le[2]), h.$set(te);
        let ce = g;
        (g = se(le)),
          g === ce
            ? z[g].p(le, re)
            : (De(),
              R(z[ce], 1, 1, () => {
                z[ce] = null;
              }),
              He(),
              (_ = z[g]),
              _ ? _.p(le, re) : ((_ = z[g] = F[g](le)), _.c()),
              P(_, 1),
              _.m(p, $));
      },
      i(le) {
        G ||
          (P(H),
          P(i.$$.fragment, le),
          P(a),
          P(h.$$.fragment, le),
          P(_),
          P(oe),
          P(T.$$.fragment, le),
          P(D.$$.fragment, le),
          P(V.$$.fragment, le),
          P(y.$$.fragment, le),
          (G = !0));
      },
      o(le) {
        R(H),
          R(i.$$.fragment, le),
          R(a),
          R(h.$$.fragment, le),
          R(_),
          R(oe),
          R(T.$$.fragment, le),
          R(D.$$.fragment, le),
          R(V.$$.fragment, le),
          R(y.$$.fragment, le),
          (G = !1);
      },
      d(le) {
        H && H.d(le),
          le && d(e),
          le && d(t),
          X(i),
          x[s].d(),
          X(h),
          z[g].d(),
          oe && oe.d(),
          X(T),
          X(D),
          X(V),
          X(y);
      },
    }
  );
}
function Xd(l, e, t) {
  let n, i, r, o, s, a;
  Y(l, Ye, (T) => t(14, (n = T))),
    Y(l, Uo, (T) => t(3, (i = T))),
    Y(l, ho, (T) => t(4, (r = T))),
    Y(l, sl, (T) => t(5, (o = T))),
    Y(l, rl, (T) => t(6, (s = T))),
    Y(l, Ne, (T) => t(7, (a = T)));
  let { isContract: c } = e;
  const h = el.isMock();
  let m = !1,
    p;
  function g(T) {
    T.preventDefault(),
      ye.track("web_click", {
        $screen_name: c ? "contract_trade" : "spot_trade",
        $element_content: "Navigation_Login",
      }),
      Bi.gotoLogin(n(q.LOGIN));
  }
  function _(T) {
    T.preventDefault(),
      ye.track("web_click", {
        $screen_name: c ? "contract_trade" : "spot_trade",
        $element_content: "Navigation_Register",
      }),
      window.location.assign(
        n(q.REGISTER) +
          "?" +
          Co.stringify({ target: location.href, action: "Target" })
      );
  }
  function $() {
    const T = localStorage.getItem("home-announcement") || "0",
      I = Date.now();
    if (Math.floor((Number(T) - I) / 1e3) < 0) {
      t(1, (m = !0));
      return;
    }
    t(1, (m = !1));
  }
  function w() {
    t(1, (m = !1));
  }
  function k() {
    ye.track("web_click", {
      $screen_name: c ? "contract_trade" : "spot_trade",
      $element_content: "navigation_deposit",
    }),
      window.location.assign(wa(n));
  }
  function S(T) {
    Oe[T ? "unshift" : "push"](() => {
      (p = T), t(2, p);
    });
  }
  return (
    (l.$$set = (T) => {
      "isContract" in T && t(0, (c = T.isContract));
    }),
    $(),
    [c, m, p, i, r, o, s, a, h, g, _, w, k, S]
  );
}
let Jd = class extends ve {
  constructor(e) {
    super(), be(this, e, Xd, Qd, _e, { isContract: 0 });
  }
};
function Zd(l) {
  let e,
    t,
    n,
    i,
    r,
    o = Math.floor(l[0].delay / 2) + "",
    s,
    a;
  return {
    c() {
      (e = v("div")),
        (t = v("i")),
        (n = N("")),
        (i = A()),
        (r = v("span")),
        (s = N(o)),
        (a = N("ms")),
        this.h();
    },
    l(c) {
      e = b(c, "DIV", { class: !0 });
      var h = E(e);
      t = b(h, "I", { class: !0 });
      var m = E(t);
      (n = L(m, "")),
        m.forEach(d),
        (i = C(h)),
        (r = b(h, "SPAN", { class: !0 }));
      var p = E(r);
      (s = L(p, o)), (a = L(p, "ms")), p.forEach(d), h.forEach(d), this.h();
    },
    h() {
      u(t, "class", "iconfont"),
        u(r, "class", "ml4 f12 delay H-8e172v"),
        u(e, "class", "iconBox df aic w100 BLUE H-8e172v"),
        we(e, "warning", 200 <= l[0].delay && l[0].delay <= 800),
        we(e, "danger", l[0].delay > 800);
    },
    m(c, h) {
      M(c, e, h), f(e, t), f(t, n), f(e, i), f(e, r), f(r, s), f(r, a);
    },
    p(c, [h]) {
      h & 1 && o !== (o = Math.floor(c[0].delay / 2) + "") && J(s, o),
        h & 1 && we(e, "warning", 200 <= c[0].delay && c[0].delay <= 800),
        h & 1 && we(e, "danger", c[0].delay > 800);
    },
    i: Te,
    o: Te,
    d(c) {
      c && d(e);
    },
  };
}
function xd(l, e, t) {
  let n;
  return Y(l, mo, (i) => t(0, (n = i))), [n];
}
let e1 = class extends ve {
  constructor(e) {
    super(), be(this, e, xd, Zd, _e, {});
  }
};
function t1(l) {
  let e, t, n, i, r, o;
  return (
    (r = new e1({})),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = A()),
          (i = v("div")),
          K(r.$$.fragment),
          this.h();
      },
      l(s) {
        e = b(s, "DIV", { class: !0 });
        var a = E(e);
        (t = b(a, "DIV", { class: !0 })),
          E(t).forEach(d),
          (n = C(a)),
          (i = b(a, "DIV", { class: !0 }));
        var c = E(i);
        Z(r.$$.fragment, c), c.forEach(d), a.forEach(d), this.h();
      },
      h() {
        u(t, "class", "line H-f7g53b"),
          u(i, "class", "main tl ph16"),
          u(e, "class", "wrap ps lh28 f14 B1 T2 H-f7g53b");
      },
      m(s, a) {
        M(s, e, a), f(e, t), f(e, n), f(e, i), Q(r, i, null), (o = !0);
      },
      p: Te,
      i(s) {
        o || (P(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        R(r.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && d(e), X(r);
      },
    }
  );
}
let n1 = class extends ve {
  constructor(e) {
    super(), be(this, e, null, t1, _e, {});
  }
};
function l1(l) {
  let e, t, n, i, r, o, s, a, c, h, m, p, g, _, $;
  return {
    c() {
      (e = v("audio")),
        (t = v("track")),
        (i = A()),
        (r = v("audio")),
        (o = v("track")),
        (a = A()),
        (c = v("audio")),
        (h = v("track")),
        (p = A()),
        (g = v("audio")),
        (_ = v("track")),
        this.h();
    },
    l(w) {
      e = b(w, "AUDIO", { src: !0 });
      var k = E(e);
      (t = b(k, "TRACK", { kind: !0 })),
        k.forEach(d),
        (i = C(w)),
        (r = b(w, "AUDIO", { src: !0 }));
      var S = E(r);
      (o = b(S, "TRACK", { kind: !0 })),
        S.forEach(d),
        (a = C(w)),
        (c = b(w, "AUDIO", { src: !0 }));
      var T = E(c);
      (h = b(T, "TRACK", { kind: !0 })),
        T.forEach(d),
        (p = C(w)),
        (g = b(w, "AUDIO", { src: !0 }));
      var I = E(g);
      (_ = b(I, "TRACK", { kind: !0 })), I.forEach(d), this.h();
    },
    h() {
      u(t, "kind", "captions"),
        ke(e.src, (n = Fl.ORDER_CANCELED)) || u(e, "src", n),
        u(o, "kind", "captions"),
        ke(r.src, (s = Fl.ORDER_FILLED)) || u(r, "src", s),
        u(h, "kind", "captions"),
        ke(c.src, (m = Fl.ORDER_TRIGGERED)) || u(c, "src", m),
        u(_, "kind", "captions"),
        ke(g.src, ($ = Fl.ORDER_SUBMITTED)) || u(g, "src", $);
    },
    m(w, k) {
      M(w, e, k),
        f(e, t),
        l[4](e),
        M(w, i, k),
        M(w, r, k),
        f(r, o),
        l[5](r),
        M(w, a, k),
        M(w, c, k),
        f(c, h),
        l[6](c),
        M(w, p, k),
        M(w, g, k),
        f(g, _),
        l[7](g);
    },
    p: Te,
    i: Te,
    o: Te,
    d(w) {
      w && d(e),
        l[4](null),
        w && d(i),
        w && d(r),
        l[5](null),
        w && d(a),
        w && d(c),
        l[6](null),
        w && d(p),
        w && d(g),
        l[7](null);
    },
  };
}
const Bl = `${ol.STATIC_URL}/s/audio/`,
  Fl = {
    ORDER_CANCELED: Bl + "cancel.wav",
    ORDER_FILLED: Bl + "filled.wav",
    ORDER_TRIGGERED: Bl + "stop.wav",
    ORDER_SUBMITTED: Bl + "submit.wav",
  };
function i1(l, e, t) {
  let n;
  Y(l, Wl, (p) => t(8, (n = p)));
  let i, r, o, s;
  Je(() => {
    const p = {
      orderCanceled: "soundOrderCanceled",
      orderFilled: "soundOrderFilled",
      orderTriggered: "soundConditionTrigger",
      orderSubmitted: "soundOrderSubmitted",
    };
    po.pipe(Da((_) => _.type === "audios"))
      .pipe(Li(({ data: { audios: _ } }) => g(_)))
      .subscribe((_) =>
        _.forEach(($) => {
          try {
            $.play();
          } catch {}
        })
      );
    function g(_) {
      const $ = {
        orderCanceled: i,
        orderFilled: r,
        orderTriggered: o,
        orderSubmitted: s,
      };
      return _.filter((w) => n[p[w]])
        .map((w) => $[w])
        .filter(Boolean);
    }
  });
  function a(p) {
    Oe[p ? "unshift" : "push"](() => {
      (i = p), t(0, i);
    });
  }
  function c(p) {
    Oe[p ? "unshift" : "push"](() => {
      (r = p), t(1, r);
    });
  }
  function h(p) {
    Oe[p ? "unshift" : "push"](() => {
      (o = p), t(2, o);
    });
  }
  function m(p) {
    Oe[p ? "unshift" : "push"](() => {
      (s = p), t(3, s);
    });
  }
  return [i, r, o, s, a, c, h, m];
}
let r1 = class extends ve {
  constructor(e) {
    super(), be(this, e, i1, l1, _e, {});
  }
};
const s1 = 1e3;
function a1(l, e, t) {
  let n;
  Y(l, Ne, (o) => t(0, (n = o)));
  const i = new Oa();
  Je(() =>
    mt.subscribe("toast", "info", ({ message: o }) => {
      r({ type: "info", message: o });
    })
  ),
    Je(() =>
      mt.subscribe("toast", "error", ({ message: o, code: s, params: a }) => {
        (s >= 10001 && s <= 19999) ||
          (s && Fr[s] && (o = n(Fr[s], a || null) || o), i.next(o));
      })
    ),
    Je(function () {
      i.pipe(
        So((s) => s),
        Do((s) => s.pipe(Ho(s1)))
      ).subscribe((s) => {
        r({ type: "danger", message: s });
      });
    });
  function r(o) {
    const s = new Bo({ target: document.body, props: o, intro: !0 });
    s.$on("destroyed", s.$destroy);
  }
  return [];
}
let o1 = class extends ve {
  constructor(e) {
    super(), be(this, e, a1, null, _e, {});
  }
};
const Gl = { ReconnectingToPhemex: "ea46e0", WeAreHaving: "bcc9e7" };
function ua(l) {
  let e, t;
  return (
    (e = new dl({
      props: {
        style: "max-width: 480px;",
        $$slots: { header: [f1], default: [c1] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 514 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function c1(l) {
  let e,
    t,
    n,
    i,
    r = l[1](Gl.WeAreHaving) + "",
    o;
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (n = A()),
        (i = v("div")),
        (o = N(r)),
        this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = E(e);
      (t = b(a, "DIV", { class: !0 })),
        E(t).forEach(d),
        (n = C(a)),
        (i = b(a, "DIV", { class: !0 }));
      var c = E(i);
      (o = L(c, r)), c.forEach(d), a.forEach(d), this.h();
    },
    h() {
      u(t, "class", "progress pr H-1o788xw"),
        u(i, "class", "comment T2 H-1o788xw"),
        u(e, "class", "body lh22 H-1o788xw");
    },
    m(s, a) {
      M(s, e, a), f(e, t), f(e, n), f(e, i), f(i, o);
    },
    p(s, a) {
      a & 2 && r !== (r = s[1](Gl.WeAreHaving) + "") && J(o, r);
    },
    d(s) {
      s && d(e);
    },
  };
}
function f1(l) {
  let e,
    t = l[1](Gl.ReconnectingToPhemex) + "",
    n;
  return {
    c() {
      (e = v("div")), (n = N(t)), this.h();
    },
    l(i) {
      e = b(i, "DIV", { class: !0, slot: !0 });
      var r = E(e);
      (n = L(r, t)), r.forEach(d), this.h();
    },
    h() {
      u(e, "class", "p24 lh24 b f16 T2"), u(e, "slot", "header");
    },
    m(i, r) {
      M(i, e, r), f(e, n);
    },
    p(i, r) {
      r & 2 && t !== (t = i[1](Gl.ReconnectingToPhemex) + "") && J(n, t);
    },
    d(i) {
      i && d(e);
    },
  };
}
function u1(l) {
  let e,
    t,
    n = l[0] && ua(l);
  return {
    c() {
      n && n.c(), (e = it());
    },
    l(i) {
      n && n.l(i), (e = it());
    },
    m(i, r) {
      n && n.m(i, r), M(i, e, r), (t = !0);
    },
    p(i, [r]) {
      i[0]
        ? n
          ? (n.p(i, r), r & 1 && P(n, 1))
          : ((n = ua(i)), n.c(), P(n, 1), n.m(e.parentNode, e))
        : n &&
          (De(),
          R(n, 1, 1, () => {
            n = null;
          }),
          He());
    },
    i(i) {
      t || (P(n), (t = !0));
    },
    o(i) {
      R(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && d(e);
    },
  };
}
function d1(l, e, t) {
  let n, i, r, o;
  Y(l, _o, (c) => t(2, (n = c))),
    Y(l, go, (c) => t(3, (i = c))),
    Y(l, vo, (c) => t(4, (r = c))),
    Y(l, Ne, (c) => t(1, (o = c)));
  let s = !1;
  Je(() =>
    mt.subscribe("global", "network-status-change", (c) => {
      c.online || setTimeout(() => {}, 1e3);
    })
  );
  function a(c, h, m) {
    t(0, (s = ((h === 0 && m > 1) || (h > 0 && m > 0)) && c !== "Opened"));
  }
  return (
    (l.$$.update = () => {
      l.$$.dirty & 28 && a(r, i, n);
    }),
    [s, o, n, i, r]
  );
}
let h1 = class extends ve {
  constructor(e) {
    super(), be(this, e, d1, u1, _e, {});
  }
};
const da = { AccountSwitchTips: "4dfe3b" };
function ha(l) {
  let e, t;
  return (
    (e = new dl({
      props: { $$slots: { default: [p1] }, $$scope: { ctx: l } },
    })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 18 && (r.$$scope = { dirty: i, ctx: n }), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function m1(l) {
  let e = l[1](Le.Confirm) + "",
    t;
  return {
    c() {
      t = N(e);
    },
    l(n) {
      t = L(n, e);
    },
    m(n, i) {
      M(n, t, i);
    },
    p(n, i) {
      i & 2 && e !== (e = n[1](Le.Confirm) + "") && J(t, e);
    },
    d(n) {
      n && d(t);
    },
  };
}
function p1(l) {
  let e,
    t,
    n = l[1](da.AccountSwitchTips) + "",
    i,
    r,
    o,
    s,
    a;
  return (
    (s = new ut({
      props: {
        type: "primary",
        size: "small",
        $$slots: { default: [m1] },
        $$scope: { ctx: l },
      },
    })),
    s.$on("click", g1),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          (i = N(n)),
          (r = A()),
          (o = v("div")),
          K(s.$$.fragment),
          this.h();
      },
      l(c) {
        e = b(c, "DIV", { class: !0 });
        var h = E(e);
        t = b(h, "DIV", { class: !0 });
        var m = E(t);
        (i = L(m, n)),
          m.forEach(d),
          (r = C(h)),
          (o = b(h, "DIV", { class: !0 }));
        var p = E(o);
        Z(s.$$.fragment, p), p.forEach(d), h.forEach(d), this.h();
      },
      h() {
        u(t, "class", "lh32 T1"),
          u(o, "class", "mt10 tr"),
          u(e, "class", "p24");
      },
      m(c, h) {
        M(c, e, h), f(e, t), f(t, i), f(e, r), f(e, o), Q(s, o, null), (a = !0);
      },
      p(c, h) {
        (!a || h & 2) && n !== (n = c[1](da.AccountSwitchTips) + "") && J(i, n);
        const m = {};
        h & 18 && (m.$$scope = { dirty: h, ctx: c }), s.$set(m);
      },
      i(c) {
        a || (P(s.$$.fragment, c), (a = !0));
      },
      o(c) {
        R(s.$$.fragment, c), (a = !1);
      },
      d(c) {
        c && d(e), X(s);
      },
    }
  );
}
function _1(l) {
  let e,
    t,
    n = l[0] && ha(l);
  return {
    c() {
      n && n.c(), (e = it());
    },
    l(i) {
      n && n.l(i), (e = it());
    },
    m(i, r) {
      n && n.m(i, r), M(i, e, r), (t = !0);
    },
    p(i, [r]) {
      i[0]
        ? n
          ? (n.p(i, r), r & 1 && P(n, 1))
          : ((n = ha(i)), n.c(), P(n, 1), n.m(e.parentNode, e))
        : n &&
          (De(),
          R(n, 1, 1, () => {
            n = null;
          }),
          He());
    },
    i(i) {
      t || (P(n), (t = !0));
    },
    o(i) {
      R(n), (t = !1);
    },
    d(i) {
      n && n.d(i), i && d(e);
    },
  };
}
function g1() {
  window.location.reload();
}
function v1(l, e, t) {
  let n, i;
  Y(l, ln, (s) => t(2, (n = s))), Y(l, Ne, (s) => t(1, (i = s)));
  let r = !1;
  Je(
    () => (
      window.addEventListener("storage", o),
      () => window.removeEventListener("storage", o)
    )
  );
  function o(s) {
    if (s.key !== "current-user-id") return;
    const a = n;
    a && a.userId !== s.newValue && t(0, (r = !0));
  }
  return [r, i];
}
let b1 = class extends ve {
  constructor(e) {
    super(), be(this, e, v1, _1, _e, {});
  }
};
function ma(l) {
  let e, t;
  return (
    (e = new Jd({ props: { isContract: l[0] } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p(n, i) {
        const r = {};
        i & 1 && (r.isContract = n[0]), e.$set(r);
      },
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function pa(l) {
  let e,
    t,
    n,
    i = l[4] === "Login" && _a();
  return (
    (t = new Va({ props: { component: h1 } })),
    {
      c() {
        i && i.c(), (e = A()), K(t.$$.fragment);
      },
      l(r) {
        i && i.l(r), (e = C(r)), Z(t.$$.fragment, r);
      },
      m(r, o) {
        i && i.m(r, o), M(r, e, o), Q(t, r, o), (n = !0);
      },
      p(r, o) {
        r[4] === "Login"
          ? i
            ? (i.p(r, o), o & 16 && P(i, 1))
            : ((i = _a()), i.c(), P(i, 1), i.m(e.parentNode, e))
          : i &&
            (De(),
            R(i, 1, 1, () => {
              i = null;
            }),
            He());
      },
      i(r) {
        n || (P(i), P(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        R(i), R(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        i && i.d(r), r && d(e), X(t, r);
      },
    }
  );
}
function _a(l) {
  let e, t;
  return (
    (e = new Va({ props: { component: b1 } })),
    {
      c() {
        K(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, i) {
        Q(e, n, i), (t = !0);
      },
      p: Te,
      i(n) {
        t || (P(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        X(e, n);
      },
    }
  );
}
function $1(l) {
  let e,
    t,
    n,
    i,
    r,
    o,
    s,
    a,
    c,
    h,
    m,
    p,
    g,
    _,
    $,
    w,
    k = !l[1] && ma(l);
  var S = l[3];
  function T(D) {
    return {};
  }
  S && (o = yr(S, T())), (a = new n1({})), (h = new r1({})), (p = new o1({}));
  let I = l[2] && pa(l);
  return (
    ($ = new Fo({})),
    {
      c() {
        (e = v("div")),
          (t = v("div")),
          k && k.c(),
          (n = A()),
          (i = v("main")),
          (r = v("div")),
          o && K(o.$$.fragment),
          (s = A()),
          K(a.$$.fragment),
          (c = A()),
          K(h.$$.fragment),
          (m = A()),
          K(p.$$.fragment),
          (g = A()),
          I && I.c(),
          (_ = A()),
          K($.$$.fragment),
          this.h();
      },
      l(D) {
        e = b(D, "DIV", { class: !0 });
        var O = E(e);
        t = b(O, "DIV", { class: !0 });
        var V = E(t);
        k && k.l(V), (n = C(V)), (i = b(V, "MAIN", { class: !0 }));
        var U = E(i);
        r = b(U, "DIV", { class: !0 });
        var y = E(r);
        o && Z(o.$$.fragment, y),
          y.forEach(d),
          U.forEach(d),
          (s = C(V)),
          Z(a.$$.fragment, V),
          V.forEach(d),
          O.forEach(d),
          (c = C(D)),
          Z(h.$$.fragment, D),
          (m = C(D)),
          Z(p.$$.fragment, D),
          (g = C(D)),
          I && I.l(D),
          (_ = C(D)),
          Z($.$$.fragment, D),
          this.h();
      },
      h() {
        u(r, "class", "box H-1t6ml1m"),
          u(i, "class", "main sv T2 H-1t6ml1m"),
          u(t, "class", "content df fdc ais H-1t6ml1m"),
          u(e, "class", "wrap H-1t6ml1m");
      },
      m(D, O) {
        M(D, e, O),
          f(e, t),
          k && k.m(t, null),
          f(t, n),
          f(t, i),
          f(i, r),
          o && Q(o, r, null),
          f(t, s),
          Q(a, t, null),
          M(D, c, O),
          Q(h, D, O),
          M(D, m, O),
          Q(p, D, O),
          M(D, g, O),
          I && I.m(D, O),
          M(D, _, O),
          Q($, D, O),
          (w = !0);
      },
      p(D, [O]) {
        if (
          (D[1]
            ? k &&
              (De(),
              R(k, 1, 1, () => {
                k = null;
              }),
              He())
            : k
            ? (k.p(D, O), O & 2 && P(k, 1))
            : ((k = ma(D)), k.c(), P(k, 1), k.m(t, n)),
          O & 8 && S !== (S = D[3]))
        ) {
          if (o) {
            De();
            const V = o;
            R(V.$$.fragment, 1, 0, () => {
              X(V, 1);
            }),
              He();
          }
          S
            ? ((o = yr(S, T())),
              K(o.$$.fragment),
              P(o.$$.fragment, 1),
              Q(o, r, null))
            : (o = null);
        }
        D[2]
          ? I
            ? (I.p(D, O), O & 4 && P(I, 1))
            : ((I = pa(D)), I.c(), P(I, 1), I.m(_.parentNode, _))
          : I &&
            (De(),
            R(I, 1, 1, () => {
              I = null;
            }),
            He());
      },
      i(D) {
        w ||
          (P(k),
          o && P(o.$$.fragment, D),
          P(a.$$.fragment, D),
          P(h.$$.fragment, D),
          P(p.$$.fragment, D),
          P(I),
          P($.$$.fragment, D),
          (w = !0));
      },
      o(D) {
        R(k),
          o && R(o.$$.fragment, D),
          R(a.$$.fragment, D),
          R(h.$$.fragment, D),
          R(p.$$.fragment, D),
          R(I),
          R($.$$.fragment, D),
          (w = !1);
      },
      d(D) {
        D && d(e),
          k && k.d(),
          o && X(o),
          X(a),
          D && d(c),
          X(h, D),
          D && d(m),
          X(p, D),
          D && d(g),
          I && I.d(D),
          D && d(_),
          X($, D);
      },
    }
  );
}
function E1(l, e) {
  return l
    ? Lr(() => import("/trade/js/chunk-1f8a0956.js"), [])
    : e
    ? Lr(() => import("/trade/js/chunk-e70aa050.js"), [])
    : Promise.resolve(null);
}
function w1(l, e, t) {
  let n, i, r;
  Y(l, Nr, (g) => t(1, (n = g))),
    Y(l, sl, (g) => t(6, (i = g))),
    Y(l, rl, (g) => t(4, (r = g)));
  let { isSpot: o = !1 } = e,
    { isContract: s = !0 } = e,
    a = !1,
    c;
  Je(() => {
    if ((t(2, (a = !0)), !Jt.isBot)) {
      const g = bo.subscribe(($) => (document.title = $)),
        _ = $o.subscribe(($) => Go($));
      return function () {
        g.unsubscribe(), _.unsubscribe();
      };
    }
  }),
    Je(
      () => (
        window.addEventListener("resize", p),
        function () {
          window.removeEventListener("resize", p);
        }
      )
    );
  async function h(g, _) {
    var $;
    const w = await E1(g, _);
    w &&
      (t(3, (c = w.view)),
      ($ = document.getElementById("splash")) === null ||
        $ === void 0 ||
        $.remove());
  }
  function m(g, _) {
    setTimeout(() => {
      const $ = document.querySelectorAll('iframe[id^="tradingview_"]');
      if ($.length > 0) {
        const w = $[0];
        w &&
          (_ &&
            _.tradePair &&
            w.setAttribute("title", _.tradePair.displaySymbol + " tradingView"),
          w.contentDocument &&
            (w.contentDocument.onkeydown = function ({ key: k }) {
              k === "Escape" && n && Nr.next(!n);
            }),
          g &&
            w.contentWindow &&
            (w.style.height =
              w.contentWindow.document.body.clientHeight - 60 + "px"));
      }
    }, 500);
  }
  function p() {
    setTimeout(() => {
      if (n) {
        const _ = document.querySelectorAll('iframe[id^="tradingview_"]')[0];
        _ &&
          _.contentWindow &&
          (_.style.height =
            _.contentWindow.document.body.clientHeight - 60 + "px");
      }
    }, 0);
  }
  return (
    (l.$$set = (g) => {
      "isSpot" in g && t(5, (o = g.isSpot)),
        "isContract" in g && t(0, (s = g.isContract));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 33 && h(o, s), l.$$.dirty & 66 && m(n, i);
    }),
    [s, n, a, c, r, o, i]
  );
}
class k1 extends ve {
  constructor(e) {
    super(), be(this, e, w1, $1, _e, { isSpot: 5, isContract: 0 });
  }
}
const Sh = Object.freeze(
  Object.defineProperty({ __proto__: null, default: k1 }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  Ms as C,
  Fs as a,
  Va as b,
  js as c,
  Fi as d,
  il as e,
  La as l,
  Ma as m,
  Sh as p,
  Ua as s,
  uh as u,
};
//# sourceMappingURL=chunk-41eedcde.js.map
