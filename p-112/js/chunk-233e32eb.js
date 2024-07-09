import {
  aj as Rl,
  S as re,
  i as ie,
  s as se,
  a9 as ve,
  e as b,
  a as W,
  c as k,
  b as T,
  d as G,
  f as h,
  g as u,
  u as oe,
  h as V,
  j as d,
  l as ne,
  aa as be,
  ab as ke,
  ac as $e,
  H as O,
  Y as ce,
  I as M,
  Z as fe,
  r as Ye,
  k as ol,
  t as q,
  m as K,
  a5 as De,
  aE as Ll,
  aF as Je,
  bK as Ml,
  C as Ge,
  bd as Nl,
  Q as cl,
  E as y,
  F as X,
  o as Z,
  G as Y,
  J as j,
  x as Q,
  _ as pe,
  y as de,
  L as le,
  X as H,
  n as x,
  v as ge,
  cf as fl,
  b6 as Ul,
  T as je,
  W as Te,
  aI as te,
  cu as Bl,
  cs as Vl,
  cv as Hl,
  cw as Wl,
  w as Pe,
  ae as ze,
  N as Me,
  ag as ul,
  aA as hl,
  D as he,
  cx as ml,
  cy as dl,
  cz as _l,
  cA as Gl,
  a2 as Se,
  cB as gl,
  z as Be,
  aD as pl,
  a8 as Ie,
  aJ as zl,
  an as Oe,
  a1 as Re,
  ah as Ze,
  ai as Fl,
  ak as xe,
  cg as yl,
  aY as vl,
  aZ as bl,
  cC as Yl,
  aB as et,
  cp as Qe,
  cr as kl,
  bb as Fe,
  $ as Le,
  cD as jl,
  cl as Xl,
  cE as ql,
  cF as Kl,
  cG as $l,
  cH as Ql,
  cI as Jl,
  cJ as Zl,
  am as ye,
  cK as xl,
  a6 as tt,
  bG as lt,
  a7 as nt,
  b0 as en,
  bN as tn,
  aK as ln,
  ay as nn,
  cL as rn,
} from "./chunk-707a9f2f.js";
import {
  N as Ve,
  e as _e,
  a as El,
  q as He,
  U as rt,
  m as sn,
  l as Tl,
} from "./app-7aa7d139.js";
import { a as we, s as an } from "./chunk-04e1abfe.js";
import { a as wl } from "./chunk-d2488ba6.js";
const on = Rl(80),
  cn = (r) => ({}),
  it = (r) => ({ showChildMenu: r[12] }),
  fn = (r) => ({}),
  st = (r) => ({});
function at(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = q("")), this.h();
    },
    l(t) {
      e = k(t, "I", { class: !0 });
      var n = T(e);
      (l = K(n, "")), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "iconfont drop-arrow dib ml4 f12 svelte-1nd78pe");
    },
    m(t, n) {
      V(t, e, n), d(e, l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function ot(r) {
  let e, l, t, n, s;
  const i = r[17].dropdown,
    o = ve(i, r, r[16], it),
    a = r[17].default,
    c = ve(a, r, r[16], null);
  return {
    c() {
      (e = b("div")), o && o.c(), (l = W()), c && c.c(), this.h();
    },
    l(f) {
      e = k(f, "DIV", { class: !0 });
      var m = T(e);
      o && o.l(m), (l = G(m)), c && c.l(m), m.forEach(h), this.h();
    },
    h() {
      u(e, "class", "auto-scroll svelte-1nd78pe");
    },
    m(f, m) {
      V(f, e, m), o && o.m(e, null), d(e, l), c && c.m(e, null), (s = !0);
    },
    p(f, m) {
      (r = f),
        o &&
          o.p &&
          (!s || m & 65536) &&
          be(o, i, r, r[16], s ? $e(i, r[16], m, cn) : ke(r[16]), it),
        c &&
          c.p &&
          (!s || m & 65536) &&
          be(c, a, r, r[16], s ? $e(a, r[16], m, null) : ke(r[16]), null);
    },
    i(f) {
      s ||
        (O(o, f),
        O(c, f),
        De(() => {
          n && n.end(1), (t = Ll(e, Je, { duration: ct, y: 30 })), t.start();
        }),
        (s = !0));
    },
    o(f) {
      M(o, f),
        M(c, f),
        t && t.invalidate(),
        (n = Ml(e, Je, { duration: ct, y: 30 })),
        (s = !1);
    },
    d(f) {
      f && h(e), o && o.d(f), c && c.d(f), f && n && n.end();
    },
  };
}
function un(r) {
  let e, l, t, n, s, i, o, a, c, f, m;
  const g = r[17].trigger,
    $ = ve(g, r, r[16], st);
  let E = !r[3] && at(),
    _ = (r[7] || r[1]) && ot(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        $ && $.c(),
        (t = W()),
        E && E.c(),
        (s = W()),
        (i = b("div")),
        _ && _.c(),
        this.h();
    },
    l(S) {
      e = k(S, "DIV", { class: !0, style: !0 });
      var R = T(e);
      l = k(R, "DIV", { class: !0 });
      var P = T(l);
      $ && $.l(P),
        (t = G(P)),
        E && E.l(P),
        P.forEach(h),
        (s = G(R)),
        (i = k(R, "DIV", { class: !0, style: !0, role: !0 }));
      var w = T(i);
      _ && _.l(w), w.forEach(h), R.forEach(h), this.h();
    },
    h() {
      u(
        l,
        "class",
        (n = "tooltip-trigger df aic jcsb cp " + r[2] + " svelte-1nd78pe")
      ),
        u(i, "class", (o = "tooltip-container pa " + r[0] + " svelte-1nd78pe")),
        oe(i, "width", r[4]),
        u(i, "role", "tooltip"),
        u(
          e,
          "class",
          (a = "tooltip-wrap dib df aic jcsb " + r[0] + " svelte-1nd78pe")
        ),
        oe(e, "--hoverColor", r[6]),
        oe(e, "--color", r[5]);
    },
    m(S, R) {
      V(S, e, R),
        d(e, l),
        $ && $.m(l, null),
        d(l, t),
        E && E.m(l, null),
        r[18](l),
        d(e, s),
        d(e, i),
        _ && _.m(i, null),
        r[19](i),
        (c = !0),
        f ||
          ((m = [ne(l, "mouseenter", r[10]), ne(e, "mouseleave", r[11])]),
          (f = !0));
    },
    p(S, [R]) {
      $ &&
        $.p &&
        (!c || R & 65536) &&
        be($, g, S, S[16], c ? $e(g, S[16], R, fn) : ke(S[16]), st),
        S[3]
          ? E && (E.d(1), (E = null))
          : E || ((E = at()), E.c(), E.m(l, null)),
        (!c ||
          (R & 4 &&
            n !==
              (n =
                "tooltip-trigger df aic jcsb cp " +
                S[2] +
                " svelte-1nd78pe"))) &&
          u(l, "class", n),
        S[7] || S[1]
          ? _
            ? (_.p(S, R), R & 130 && O(_, 1))
            : ((_ = ot(S)), _.c(), O(_, 1), _.m(i, null))
          : _ &&
            (ce(),
            M(_, 1, 1, () => {
              _ = null;
            }),
            fe()),
        (!c ||
          (R & 1 &&
            o !== (o = "tooltip-container pa " + S[0] + " svelte-1nd78pe"))) &&
          u(i, "class", o),
        (!c || R & 16) && oe(i, "width", S[4]),
        (!c ||
          (R & 1 &&
            a !==
              (a =
                "tooltip-wrap dib df aic jcsb " + S[0] + " svelte-1nd78pe"))) &&
          u(e, "class", a),
        (!c || R & 64) && oe(e, "--hoverColor", S[6]),
        (!c || R & 32) && oe(e, "--color", S[5]);
    },
    i(S) {
      c || (O($, S), O(_), (c = !0));
    },
    o(S) {
      M($, S), M(_), (c = !1);
    },
    d(S) {
      S && h(e),
        $ && $.d(S),
        E && E.d(),
        r[18](null),
        _ && _.d(),
        r[19](null),
        (f = !1),
        Ye(m);
    },
  };
}
const ct = 250;
function hn(r, e, l) {
  let { $$slots: t = {}, $$scope: n } = e,
    { class: s = "" } = e,
    { debug: i = !1 } = e,
    { triggerClass: o = "" } = e,
    { placement: a = "bottom" } = e,
    { noIcon: c = !1 } = e,
    { width: f = "unset" } = e,
    { trigger: m = "hover" } = e,
    { modifiers: g = [] } = e,
    { color: $ = "#000" } = e,
    { hoverColor: E = "#3d7eff" } = e;
  const _ = ol();
  let S = !1,
    R,
    P,
    w = !1;
  function v() {
    Nl(P, R, { placement: a, modifiers: g });
  }
  function C() {
    l(7, (S = !0)), v(), _("mouseenter");
  }
  function p() {
    w || (l(7, (S = !1)), _("mouseleave"));
  }
  function I(A) {
    w = A;
  }
  function U(A) {
    Ge[A ? "unshift" : "push"](() => {
      (P = A), l(9, P);
    });
  }
  function B(A) {
    Ge[A ? "unshift" : "push"](() => {
      (R = A), l(8, R);
    });
  }
  return (
    (r.$$set = (A) => {
      "class" in A && l(0, (s = A.class)),
        "debug" in A && l(1, (i = A.debug)),
        "triggerClass" in A && l(2, (o = A.triggerClass)),
        "placement" in A && l(13, (a = A.placement)),
        "noIcon" in A && l(3, (c = A.noIcon)),
        "width" in A && l(4, (f = A.width)),
        "trigger" in A && l(14, (m = A.trigger)),
        "modifiers" in A && l(15, (g = A.modifiers)),
        "color" in A && l(5, ($ = A.color)),
        "hoverColor" in A && l(6, (E = A.hoverColor)),
        "$$scope" in A && l(16, (n = A.$$scope));
    }),
    [s, i, o, c, f, $, E, S, R, P, C, p, I, a, m, g, n, t, U, B]
  );
}
class ue extends re {
  constructor(e) {
    super(),
      ie(this, e, hn, un, se, {
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
const Il = { MockTrading: "e10c54", BackToLive: "847288", NoteThat: "595f79" },
  mn = {
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
function dn(r) {
  let e,
    l,
    t = r[5](mn.TradingBots) + "",
    n,
    s,
    i,
    o,
    a;
  return {
    c() {
      (e = b("a")),
        (l = b("span")),
        (n = q(t)),
        (s = W()),
        (i = b("img")),
        this.h();
    },
    l(c) {
      e = k(c, "A", { class: !0, slot: !0, href: !0 });
      var f = T(e);
      l = k(f, "SPAN", { class: !0 });
      var m = T(l);
      (n = K(m, t)),
        m.forEach(h),
        (s = G(f)),
        (i = k(f, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
        f.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "title"),
        u(i, "class", "title-icon svelte-mzd0as"),
        u(i, "height", "14"),
        le(
          i.src,
          (o =
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png")
        ) || u(i, "src", o),
        u(i, "alt", "new"),
        u(e, "class", "trigger svelte-mzd0as"),
        u(e, "slot", "trigger"),
        u(
          e,
          "href",
          (a = r[4](Ve.getMockPrefix() + H.STRATEGY_SQUARE.pathname))
        );
    },
    m(c, f) {
      V(c, e, f), d(e, l), d(l, n), d(e, s), d(e, i);
    },
    p(c, f) {
      f & 16 &&
        a !== (a = c[4](Ve.getMockPrefix() + H.STRATEGY_SQUARE.pathname)) &&
        u(e, "href", a);
    },
    d(c) {
      c && h(e);
    },
  };
}
function _n(r) {
  let e = r[5](Il.BackToLive) + "",
    l;
  return {
    c() {
      l = q(e);
    },
    l(t) {
      l = K(t, e);
    },
    m(t, n) {
      V(t, l, n);
    },
    p: x,
    d(t) {
      t && h(l);
    },
  };
}
function gn(r) {
  let e,
    l,
    t,
    n = r[5](Il.MockTrading) + "",
    s,
    i,
    o,
    a,
    c,
    f,
    m;
  return (
    (o = new ue({
      props: {
        class: "ml24 mr24",
        placement: pn,
        modifiers: r[6],
        color: r[3],
        hoverColor: r[2],
        noIcon: !0,
        $$slots: { trigger: [dn] },
        $$scope: { ctx: r },
      },
    })),
    (c = new cl({
      props: {
        type: "primary",
        class: "live-btn ml16",
        $$slots: { default: [_n] },
        $$scope: { ctx: r },
      },
    })),
    c.$on("click", r[7]),
    {
      c() {
        (e = b("nav")),
          (l = b("div")),
          (t = b("div")),
          (s = q(n)),
          (i = W()),
          y(o.$$.fragment),
          (a = W()),
          y(c.$$.fragment),
          this.h();
      },
      l(g) {
        e = k(g, "NAV", { class: !0 });
        var $ = T(e);
        l = k($, "DIV", { class: !0 });
        var E = T(l);
        t = k(E, "DIV", { class: !0 });
        var _ = T(t);
        (s = K(_, n)),
          _.forEach(h),
          (i = G(E)),
          X(o.$$.fragment, E),
          E.forEach(h),
          (a = G($)),
          X(c.$$.fragment, $),
          $.forEach(h),
          this.h();
      },
      h() {
        u(t, "class", "mock-menu BLUE svelte-mzd0as"),
          u(l, "class", "df"),
          u(
            e,
            "class",
            (f = "mock-menu f1 df jcsb aic " + r[1] + " svelte-mzd0as")
          ),
          Z(e, "top", r[0]);
      },
      m(g, $) {
        V(g, e, $),
          d(e, l),
          d(l, t),
          d(t, s),
          d(l, i),
          Y(o, l, null),
          d(e, a),
          Y(c, e, null),
          (m = !0);
      },
      p(g, [$]) {
        const E = {};
        $ & 8 && (E.color = g[3]),
          $ & 4 && (E.hoverColor = g[2]),
          $ & 272 && (E.$$scope = { dirty: $, ctx: g }),
          o.$set(E);
        const _ = {};
        $ & 256 && (_.$$scope = { dirty: $, ctx: g }),
          c.$set(_),
          (!m ||
            ($ & 2 &&
              f !==
                (f = "mock-menu f1 df jcsb aic " + g[1] + " svelte-mzd0as"))) &&
            u(e, "class", f),
          (!m || $ & 3) && Z(e, "top", g[0]);
      },
      i(g) {
        m || (O(o.$$.fragment, g), O(c.$$.fragment, g), (m = !0));
      },
      o(g) {
        M(o.$$.fragment, g), M(c.$$.fragment, g), (m = !1);
      },
      d(g) {
        g && h(e), j(o), j(c);
      },
    }
  );
}
const pn = "bottom-start";
function vn(r, e, l) {
  let t, n, s;
  Q(r, pe, (m) => l(4, (s = m)));
  let { isTop: i = !0 } = e;
  const o = de("LG"),
    a = [
      { name: "offset", options: { offset: [-24, 0] } },
      { name: "preventOverflow", options: { padding: 40 } },
    ];
  let { class: c = "" } = e;
  const f = () => Ve.gotoLive();
  return (
    (r.$$set = (m) => {
      "isTop" in m && l(0, (i = m.isTop)), "class" in m && l(1, (c = m.class));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1 &&
        l(3, (t = i ? "var(--menu-dark)" : "var(--menu-light)")),
        r.$$.dirty & 1 &&
          l(2, (n = i ? "var(--menu-dark-hover)" : "var(--menu-light-hover)"));
    }),
    [i, c, n, t, s, o, a, f]
  );
}
class bn extends re {
  constructor(e) {
    super(), ie(this, e, vn, gn, se, { isTop: 0, class: 1 });
  }
}
const kn = "P2P_TRADE_DEFAULT_URL_TYPE";
function Ke(r, e) {
  if (_e.isServer) return;
  const l = localStorage.getItem(kn);
  return e(
    !l || l === "express"
      ? r
        ? H.P2P_HOME_LOGIN.pathname
        : H.P2P_HOME.pathname
      : H.P2P_HOME_MARKET.pathname
  );
}
const $n = (r) => ({}),
  ft = (r) => ({}),
  En = (r) => ({}),
  ut = (r) => ({});
function Tn(r) {
  let e, l;
  const t = r[10]["circle-suffix"],
    n = ve(t, r, r[9], ut);
  return {
    c() {
      (e = b("div")), n && n.c(), this.h();
    },
    l(s) {
      e = k(s, "DIV", { class: !0 });
      var i = T(e);
      n && n.l(i), i.forEach(h), this.h();
    },
    h() {
      u(e, "class", "df mr16");
    },
    m(s, i) {
      V(s, e, i), n && n.m(e, null), (l = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!l || i & 512) &&
        be(n, t, s, s[9], l ? $e(t, s[9], i, En) : ke(s[9]), ut);
    },
    i(s) {
      l || (O(n, s), (l = !0));
    },
    o(s) {
      M(n, s), (l = !1);
    },
    d(s) {
      s && h(e), n && n.d(s);
    },
  };
}
function wn(r) {
  let e, l, t;
  return {
    c() {
      (e = b("div")), (l = b("img")), this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var s = T(e);
      (l = k(s, "IMG", { width: !0, alt: !0, src: !0 })),
        s.forEach(h),
        this.h();
    },
    h() {
      u(l, "width", "24"),
        u(l, "alt", r[3]),
        le(l.src, (t = r[2])) || u(l, "src", t),
        u(e, "class", "df mr16");
    },
    m(n, s) {
      V(n, e, s), d(e, l);
    },
    p(n, s) {
      s & 8 && u(l, "alt", n[3]),
        s & 4 && !le(l.src, (t = n[2])) && u(l, "src", t);
    },
    i: x,
    o: x,
    d(n) {
      n && h(e);
    },
  };
}
function ht(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "ml4"),
        u(e, "height", "14"),
        le(e.src, (l = r[6])) || u(e, "src", l),
        u(e, "alt", r[7]);
    },
    m(t, n) {
      V(t, e, n);
    },
    p(t, n) {
      n & 64 && !le(e.src, (l = t[6])) && u(e, "src", l),
        n & 128 && u(e, "alt", t[7]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function mt(r) {
  let e, l;
  return {
    c() {
      (e = b("div")), (l = q(r[5])), this.h();
    },
    l(t) {
      e = k(t, "DIV", { class: !0 });
      var n = T(e);
      (l = K(n, r[5])), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "sub-title f12 fw1 svelte-s9hf7x");
    },
    m(t, n) {
      V(t, e, n), d(e, l);
    },
    p(t, n) {
      n & 32 && ge(l, t[5]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function In(r) {
  let e, l, t, n, s, i, o, a, c, f, m, g, $, E, _, S, R, P;
  const w = [wn, Tn],
    v = [];
  function C(A, F) {
    return A[2] ? 0 : A[8]["circle-suffix"] ? 1 : -1;
  }
  ~(l = C(r)) && (t = v[l] = w[l](r));
  const p = r[10]["title-suffix"],
    I = ve(p, r, r[9], ft);
  let U = r[6] && ht(r),
    B = r[5] && mt(r);
  return {
    c() {
      (e = b("a")),
        t && t.c(),
        (n = W()),
        (s = b("div")),
        (i = b("div")),
        (o = b("div")),
        (a = q(r[4])),
        (c = W()),
        I && I.c(),
        (f = W()),
        U && U.c(),
        (m = W()),
        B && B.c(),
        (g = W()),
        ($ = b("div")),
        (E = b("i")),
        (_ = q("")),
        this.h();
    },
    l(A) {
      e = k(A, "A", { class: !0, href: !0, target: !0, rel: !0 });
      var F = T(e);
      t && t.l(F), (n = G(F)), (s = k(F, "DIV", { class: !0 }));
      var N = T(s);
      i = k(N, "DIV", {});
      var D = T(i);
      o = k(D, "DIV", { class: !0 });
      var z = T(o);
      (a = K(z, r[4])),
        (c = G(z)),
        I && I.l(z),
        (f = G(z)),
        U && U.l(z),
        z.forEach(h),
        (m = G(D)),
        B && B.l(D),
        D.forEach(h),
        (g = G(N)),
        ($ = k(N, "DIV", { class: !0 }));
      var J = T($);
      E = k(J, "I", { class: !0 });
      var ee = T(E);
      (_ = K(ee, "")),
        ee.forEach(h),
        J.forEach(h),
        N.forEach(h),
        F.forEach(h),
        this.h();
    },
    h() {
      u(o, "class", "title df fw2 svelte-s9hf7x"),
        u(E, "class", "arrow iconfont dib f16 fw1 svelte-s9hf7x"),
        u($, "class", "arrow-con df ml12 lh20 svelte-s9hf7x"),
        u(s, "class", "wp100 df aic jcsb f14"),
        u(e, "class", "menu-item noa df fdr aic br8 cp svelte-s9hf7x"),
        u(e, "href", r[0]),
        u(e, "target", r[1]),
        u(e, "rel", "noopener");
    },
    m(A, F) {
      V(A, e, F),
        ~l && v[l].m(e, null),
        d(e, n),
        d(e, s),
        d(s, i),
        d(i, o),
        d(o, a),
        d(o, c),
        I && I.m(o, null),
        d(o, f),
        U && U.m(o, null),
        d(i, m),
        B && B.m(i, null),
        d(s, g),
        d(s, $),
        d($, E),
        d(E, _),
        (S = !0),
        R || ((P = ne(e, "click", r[11])), (R = !0));
    },
    p(A, [F]) {
      let N = l;
      (l = C(A)),
        l === N
          ? ~l && v[l].p(A, F)
          : (t &&
              (ce(),
              M(v[N], 1, 1, () => {
                v[N] = null;
              }),
              fe()),
            ~l
              ? ((t = v[l]),
                t ? t.p(A, F) : ((t = v[l] = w[l](A)), t.c()),
                O(t, 1),
                t.m(e, n))
              : (t = null)),
        (!S || F & 16) && ge(a, A[4]),
        I &&
          I.p &&
          (!S || F & 512) &&
          be(I, p, A, A[9], S ? $e(p, A[9], F, $n) : ke(A[9]), ft),
        A[6]
          ? U
            ? U.p(A, F)
            : ((U = ht(A)), U.c(), U.m(o, null))
          : U && (U.d(1), (U = null)),
        A[5]
          ? B
            ? B.p(A, F)
            : ((B = mt(A)), B.c(), B.m(i, null))
          : B && (B.d(1), (B = null)),
        (!S || F & 1) && u(e, "href", A[0]),
        (!S || F & 2) && u(e, "target", A[1]);
    },
    i(A) {
      S || (O(t), O(I, A), (S = !0));
    },
    o(A) {
      M(t), M(I, A), (S = !1);
    },
    d(A) {
      A && h(e),
        ~l && v[l].d(),
        I && I.d(A),
        U && U.d(),
        B && B.d(),
        (R = !1),
        P();
    },
  };
}
function Cn(r, e, l) {
  let { $$slots: t = {}, $$scope: n } = e;
  const s = fl(t);
  let { link: i = "" } = e,
    { target: o = void 0 } = e,
    { iconUrl: a = "" } = e,
    { iconAlt: c = "" } = e,
    { title: f = "" } = e,
    { subTitle: m = "" } = e,
    { titleIcon: g = "" } = e,
    { titleIconAlt: $ = "" } = e;
  function E(_) {
    Ul.call(this, r, _);
  }
  return (
    (r.$$set = (_) => {
      "link" in _ && l(0, (i = _.link)),
        "target" in _ && l(1, (o = _.target)),
        "iconUrl" in _ && l(2, (a = _.iconUrl)),
        "iconAlt" in _ && l(3, (c = _.iconAlt)),
        "title" in _ && l(4, (f = _.title)),
        "subTitle" in _ && l(5, (m = _.subTitle)),
        "titleIcon" in _ && l(6, (g = _.titleIcon)),
        "titleIconAlt" in _ && l(7, ($ = _.titleIconAlt)),
        "$$scope" in _ && l(9, (n = _.$$scope));
    }),
    [i, o, a, c, f, m, g, $, s, n, t, E]
  );
}
class ae extends re {
  constructor(e) {
    super(),
      ie(this, e, Cn, In, se, {
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
const L = {
  StartTrading: "8af131",
  WelcomeBonus: "82432d",
  AllStarProgram: "01c850",
  Company: "d8c7aa",
  Announcement: "876fec",
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
function An(r) {
  let e, l, t, n, s, i, o, a, c;
  return (
    (l = new ae({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/8e35a1f4-1542-4c38-9087-05707e81fa09/0.svg",
        link: r[0](H.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname),
        title: r[2](L.OneClickBuyAndSell),
        subTitle: r[2](L.OneClickBuyAndSellSubTitle),
      },
    })),
    l.$on("click", r[3]("one_click_buy_sell")),
    (n = new ae({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/fe01f95b-acde-4058-b0eb-ea9bd33c297e/1.svg",
        link: r[0](H.FIAT_DEPOSIT.pathname),
        title: r[2](L.FiatDeposit),
        titleIcon:
          "//img.phemex.com/v1/fbdda9d0-68f3-4d1e-b834-248ce5cd50db/frame-14zero-fee.png",
        titleIconAlt: "zero-fee",
        subTitle: r[2](L.FiatDepositSubTitle),
      },
    })),
    n.$on("click", r[3]("fiat_deposit")),
    (i = new ae({
      props: {
        target: "_self",
        iconAlt: "credit debit card",
        iconUrl:
          "https://img.phemex.com/v1/22e1ded4-66a1-4f4b-bc0c-e97ea28ef1d6/2.svg",
        link: r[0](H.BUY_CRYPTO_CARD_PLACE_ORDER.pathname),
        title: r[2](L.CreditDebitCards),
        titleIcon:
          "//img.phemex.com/v1/9bc32cd3-0663-47fb-bf3b-8c114590eef1/credit-debit-card-fee.png",
        titleIconAlt: "lowest-fee",
        subTitle: r[2](L.CreditDebitCardsSubTitle),
      },
    })),
    i.$on("click", r[3]("credit_debit_card")),
    (a = new ae({
      props: {
        iconAlt: "p2p marketplace",
        iconUrl:
          "https://img.phemex.com/v1/18fd6900-0d2d-4ff7-abf3-937099cc7b7e/3.svg",
        link: Ke(r[1], r[0]),
        title: r[2](L.P2PTrading),
        subTitle: r[2](L.P2PTradingSubtitle),
      },
    })),
    a.$on("click", r[3]("p2p_trading")),
    {
      c() {
        (e = b("div")),
          y(l.$$.fragment),
          (t = W()),
          y(n.$$.fragment),
          (s = W()),
          y(i.$$.fragment),
          (o = W()),
          y(a.$$.fragment),
          this.h();
      },
      l(f) {
        e = k(f, "DIV", { class: !0 });
        var m = T(e);
        X(l.$$.fragment, m),
          (t = G(m)),
          X(n.$$.fragment, m),
          (s = G(m)),
          X(i.$$.fragment, m),
          (o = G(m)),
          X(a.$$.fragment, m),
          m.forEach(h),
          this.h();
      },
      h() {
        u(e, "class", "wrap df fdc B1 T2 br12 svelte-i1h11n");
      },
      m(f, m) {
        V(f, e, m),
          Y(l, e, null),
          d(e, t),
          Y(n, e, null),
          d(e, s),
          Y(i, e, null),
          d(e, o),
          Y(a, e, null),
          (c = !0);
      },
      p(f, [m]) {
        const g = {};
        m & 1 && (g.link = f[0](H.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname)),
          l.$set(g);
        const $ = {};
        m & 1 && ($.link = f[0](H.FIAT_DEPOSIT.pathname)), n.$set($);
        const E = {};
        m & 1 && (E.link = f[0](H.BUY_CRYPTO_CARD_PLACE_ORDER.pathname)),
          i.$set(E);
        const _ = {};
        m & 3 && (_.link = Ke(f[1], f[0])), a.$set(_);
      },
      i(f) {
        c ||
          (O(l.$$.fragment, f),
          O(n.$$.fragment, f),
          O(i.$$.fragment, f),
          O(a.$$.fragment, f),
          (c = !0));
      },
      o(f) {
        M(l.$$.fragment, f),
          M(n.$$.fragment, f),
          M(i.$$.fragment, f),
          M(a.$$.fragment, f),
          (c = !1);
      },
      d(f) {
        f && h(e), j(l), j(n), j(i), j(a);
      },
    }
  );
}
function Sn(r, e, l) {
  let t, n;
  Q(r, pe, (o) => l(0, (t = o))), Q(r, je, (o) => l(1, (n = o)));
  const s = de("LG");
  function i(o) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_buy_crypto_" + o,
      });
    };
  }
  return [t, n, s, i];
}
class Pn extends re {
  constructor(e) {
    super(), ie(this, e, Sn, An, se, {});
  }
}
function dt(r) {
  let e, l;
  return (
    (e = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/1677813b-36d0-46d5-97b9-eb5980d11c2d/2-1.svg",
        iconAlt: "spot",
        link: te.PHEMEX_SPOT_MARGIN_TRADE,
        target: "_self",
        title: r[5](L.MarginTradingMenuTitle) + " " + r[2] + "X",
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
        titleIconAlt: "new",
        subTitle: r[5](L.MarginTradingMenuDesc),
      },
    })),
    e.$on("click", r[6]("margin_trading")),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 4 && (s.title = t[5](L.MarginTradingMenuTitle) + " " + t[2] + "X"),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function _t(r) {
  let e, l;
  return (
    (e = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/44d13946-aa67-4c88-8858-3d0e6bd31a34/2-4.svg",
        iconAlt: "strategy square",
        link: r[3](H.STRATEGY_SQUARE.pathname) + "?type=SPOT_GRID",
        target: "_self",
        title: r[5](L.TradingBots),
        titleIcon:
          "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
        titleIconAlt: "new",
        subTitle: r[5](L.IntelligentTrading),
      },
    })),
    e.$on("click", r[6]("trading_bots")),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 8 &&
          (s.link = t[3](H.STRATEGY_SQUARE.pathname) + "?type=SPOT_GRID"),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Dn(r) {
  let e, l, t, n, s, i, o, a, c;
  (l = new ae({
    props: {
      iconUrl:
        "https://img.phemex.com/v1/8dc1f1fb-91fd-4da0-a79a-ebe579e99248/2-0.svg",
      iconAlt: "spot",
      link: te.PHEMEX_SPOT_TRADE,
      target: "_self",
      title: r[5](L.SpotTrading),
      subTitle: r[5](L.OnlyOpenTo, { TradePairNumber: r[0].length }),
    },
  })),
    l.$on("click", r[6]("spot_trading"));
  let f = r[1] && dt(r);
  (s = new ae({
    props: {
      iconUrl:
        "https://img.phemex.com/v1/58f2aa00-676d-4302-9d8e-b277a3660920/2-2.svg",
      iconAlt: "contract",
      link: r[3](H.CRYPTO_CONVERTER.pathname),
      target: "_self",
      title: r[5](L.Convert),
      subTitle: r[5](L.TheEasiestWayToTrade),
    },
  })),
    s.$on("click", r[6]("convert")),
    (o = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/59cfdf7c-35fb-4bfb-aa45-ec746703d606/2-3.svg",
        iconAlt: "launchpad",
        link: r[3](H.LAUNCHPAD.pathname),
        target: "_self",
        title: r[5](L.Launchpad),
        subTitle: r[5](L.LaunchpadDesc),
      },
    })),
    o.$on("click", r[6]("launchpad"));
  let m = r[4] && _t(r);
  return {
    c() {
      (e = b("div")),
        y(l.$$.fragment),
        (t = W()),
        f && f.c(),
        (n = W()),
        y(s.$$.fragment),
        (i = W()),
        y(o.$$.fragment),
        (a = W()),
        m && m.c(),
        this.h();
    },
    l(g) {
      e = k(g, "DIV", { class: !0 });
      var $ = T(e);
      X(l.$$.fragment, $),
        (t = G($)),
        f && f.l($),
        (n = G($)),
        X(s.$$.fragment, $),
        (i = G($)),
        X(o.$$.fragment, $),
        (a = G($)),
        m && m.l($),
        $.forEach(h),
        this.h();
    },
    h() {
      u(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1j13m8w");
    },
    m(g, $) {
      V(g, e, $),
        Y(l, e, null),
        d(e, t),
        f && f.m(e, null),
        d(e, n),
        Y(s, e, null),
        d(e, i),
        Y(o, e, null),
        d(e, a),
        m && m.m(e, null),
        (c = !0);
    },
    p(g, [$]) {
      const E = {};
      $ & 1 &&
        (E.subTitle = g[5](L.OnlyOpenTo, { TradePairNumber: g[0].length })),
        l.$set(E),
        g[1]
          ? f
            ? (f.p(g, $), $ & 2 && O(f, 1))
            : ((f = dt(g)), f.c(), O(f, 1), f.m(e, n))
          : f &&
            (ce(),
            M(f, 1, 1, () => {
              f = null;
            }),
            fe());
      const _ = {};
      $ & 8 && (_.link = g[3](H.CRYPTO_CONVERTER.pathname)), s.$set(_);
      const S = {};
      $ & 8 && (S.link = g[3](H.LAUNCHPAD.pathname)),
        o.$set(S),
        g[4]
          ? m
            ? (m.p(g, $), $ & 16 && O(m, 1))
            : ((m = _t(g)), m.c(), O(m, 1), m.m(e, null))
          : m &&
            (ce(),
            M(m, 1, 1, () => {
              m = null;
            }),
            fe());
    },
    i(g) {
      c ||
        (O(l.$$.fragment, g),
        O(f),
        O(s.$$.fragment, g),
        O(o.$$.fragment, g),
        O(m),
        (c = !0));
    },
    o(g) {
      M(l.$$.fragment, g),
        M(f),
        M(s.$$.fragment, g),
        M(o.$$.fragment, g),
        M(m),
        (c = !1);
    },
    d(g) {
      g && h(e), j(l), f && f.d(), j(s), j(o), m && m.d();
    },
  };
}
function On(r, e, l) {
  let t, n, s, i, o;
  Q(r, Bl, (f) => l(0, (t = f))),
    Q(r, Vl, (f) => l(1, (n = f))),
    Q(r, Hl, (f) => l(2, (s = f))),
    Q(r, pe, (f) => l(3, (i = f))),
    Q(r, Wl, (f) => l(4, (o = f)));
  const a = de("LG");
  function c(f) {
    return function () {
      f === "convert" &&
        Te.track("convert_transfer_button_click", {
          ui_position: "exchange",
          $element_content: "convert",
        }),
        Te.track("web_click", {
          $screen_name: "home",
          $element_content: "navigation_spot_" + f,
        });
    };
  }
  return [t, n, s, i, o, a, c];
}
class Rn extends re {
  constructor(e) {
    super(), ie(this, e, On, Dn, se, {});
  }
}
function gt(r, e, l) {
  const t = r.slice();
  return (t[5] = e[l]), t;
}
function pt(r) {
  let e, l;
  const t = [r[5]];
  let n = {};
  for (let s = 0; s < t.length; s += 1) n = ze(n, t[s]);
  return (
    (e = new ae({ props: n })),
    e.$on("click", function () {
      Me(r[1](r[5].name)) && r[1](r[5].name).apply(this, arguments);
    }),
    {
      c() {
        y(e.$$.fragment);
      },
      l(s) {
        X(e.$$.fragment, s);
      },
      m(s, i) {
        Y(e, s, i), (l = !0);
      },
      p(s, i) {
        r = s;
        const o = i & 1 ? ul(t, [hl(r[5])]) : {};
        e.$set(o);
      },
      i(s) {
        l || (O(e.$$.fragment, s), (l = !0));
      },
      o(s) {
        M(e.$$.fragment, s), (l = !1);
      },
      d(s) {
        j(e, s);
      },
    }
  );
}
function Ln(r) {
  let e,
    l,
    t = r[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = pt(gt(r, t, i));
  const s = (i) =>
    M(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0 });
      var o = T(e);
      for (let a = 0; a < n.length; a += 1) n[a].l(o);
      o.forEach(h), this.h();
    },
    h() {
      u(e, "class", "wrap df fdc br12 ovh B1 T2 svelte-17oeajk");
    },
    m(i, o) {
      V(i, e, o);
      for (let a = 0; a < n.length; a += 1) n[a].m(e, null);
      l = !0;
    },
    p(i, [o]) {
      if (o & 3) {
        t = i[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = gt(i, t, a);
          n[a]
            ? (n[a].p(c, o), O(n[a], 1))
            : ((n[a] = pt(c)), n[a].c(), O(n[a], 1), n[a].m(e, null));
        }
        for (ce(), a = t.length; a < n.length; a += 1) s(a);
        fe();
      }
    },
    i(i) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1) O(n[o]);
        l = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) M(n[o]);
      l = !1;
    },
    d(i) {
      i && h(e), Pe(n, i);
    },
  };
}
function Mn(r, e, l) {
  let t;
  Q(r, pe, (a) => l(2, (t = a)));
  const n = de("LG");
  let s = [];
  function i(a) {
    l(
      0,
      (s = [
        {
          iconUrl:
            "https://img.phemex.com/v1/cbae9850-5ee4-4957-9098-e0766e851ffe/1-0.svg",
          iconAlt: "USDT-M Perpetual",
          title: `USDT-M ${a(L.Perpetual)}`,
          subTitle: a(L.PerpetualContractUSDC),
          link: te.PHEMEX_CONTRACT_TRADE_USDS,
          target: "_self",
          name: "usdt_m_perpetual",
        },
        /*{
          iconUrl:
            "https://img.phemex.com/v1/e3d672d6-0331-45c3-8625-a06dbc843a4b/1-1.svg",
          iconAlt: "COIN-M Perpetual",
          title: `COIN-M ${a(L.Perpetual)}`,
          subTitle: a(L.PerpetualContractCoin),
          link: te.PHEMEX_CONTRACT_INVERSE_TRADE,
          target: "_self",
          name: "coin_m_perpetual",
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/9ad247da-f8ad-4418-860c-ae74aa81be9b/1-3.svg",
          iconAlt: "copy trade",
          title: a(L.CopyTrade),
          subTitle: a(L.FollowTop),
          link: t(H.COPY_TRADING_LIST.pathname),
          target: "_self",
          name: "copy_trade",
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/41747ea5-579c-43ba-81ae-ef8ed881a374/1-4.svg",
          iconAlt: "strategy square",
          title: a(L.TradingBots),
          subTitle: a(L.IntelligentTrading),
          link: t(H.STRATEGY_SQUARE.pathname) + "?type=CONTRACT_GRID",
          target: "_self",
          titleIcon:
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
          name: "trading_bots",
        },*/
        {
          iconUrl:
            "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg",
          iconAlt: "mock trading",
          title: a(L.MockTrading),
          subTitle: a(L.LearnHowToTradeWithZeroRisk),
          link: te.MOCK_TRADE,
          target: "_self",
          name: "mock_trading",
        },
      ])
    );
  }
  function o(a) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_contract_" + a,
      });
    };
  }
  return i(n), [s, o];
}
class Nn extends re {
  constructor(e) {
    super(), ie(this, e, Mn, Ln, se, {});
  }
}
function Un(r) {
  let e;
  return {
    c() {
      (e = b("span")), this.h();
    },
    l(l) {
      (e = k(l, "SPAN", { class: !0, slot: !0 })), T(e).forEach(h), this.h();
    },
    h() {
      u(e, "class", "ml4"), u(e, "slot", "title-suffix");
    },
    m(l, t) {
      V(l, e, t);
    },
    p: x,
    d(l) {
      l && h(e);
    },
  };
}
function Bn(r) {
  let e, l, t, n, s, i, o, a, c, f, m, g, $;
  return (
    (l = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/9b4da28d-68e6-435e-a12f-4370be1f3716/5-0.svg",
        iconAlt: "academy",
        link: r[0](te.PHEMEX_ACADEMY, "CMS"),
        target: "_self",
        title: r[1](L.Academy),
        subTitle: r[1](L.LearnEverythingAboutCrypto),
      },
    })),
    l.$on("click", r[2]("academy")),
    (n = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/82baecdc-c32e-4ff5-a8ae-d0967d9549dc/5-1.svg",
        iconAlt: "learn_and_earn",
        link: r[0](H.LEARN_CRYPTO.pathname),
        target: "_self",
        title: r[1](L.LearnAndEarn),
        subTitle: r[1](L.GetPaidToLearnCrypto),
        $$slots: { "title-suffix": [Un] },
        $$scope: { ctx: r },
      },
    })),
    n.$on("click", r[2]("learn_and_earn")),
    (i = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/658ad87c-765f-4767-80d0-0c2630541192/5-2.svg",
        iconAlt: "user_guides",
        link: r[0](te.PHEMEX_HELP_CENTER, "CMS"),
        target: "_self",
        title: r[1](L.HelpCenter),
        subTitle: r[1](L.FAQHelp),
      },
    })),
    i.$on("click", r[2]("user_guides")),
    (a = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/9f69dbbe-9cfa-4a68-aae2-fea38d11e5b2/5-3.svg",
        iconAlt: "blog",
        link: r[0](te.PHEMEX_BLOG, "CMS"),
        target: "_self",
        title: r[1](L.Blog),
        subTitle: r[1](L.CryptoTipsAndTrick),
      },
    })),
    a.$on("click", r[2]("blog")),
    (f = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/1a90b421-e76f-4c52-a342-68142b3d16b5/5-4.svg",
        iconAlt: "student_foundation",
        link: r[0](H.STUDENT_FOUNDATION.pathname),
        target: "_self",
        title: r[1](L.StudentFoundation),
        subTitle: r[1](L.EmpowerStudent),
      },
    })),
    f.$on("click", r[2]("student_foundation")),
    (g = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/b6255b49-30ff-40c1-a7dd-872f4b5c4bcf/5-5.svg",
        link: te.PHEMEX_TESTNET,
        target: "_self",
        title: r[1](L.SimulatedTrading),
        subTitle: r[1](L.LearnHowToTradeWithZeroRisk),
      },
    })),
    g.$on("click", r[2]("simulated_trading")),
    {
      c() {
        (e = b("div")),
          y(l.$$.fragment),
          (t = W()),
          y(n.$$.fragment),
          (s = W()),
          y(i.$$.fragment),
          (o = W()),
          y(a.$$.fragment),
          (c = W()),
          y(f.$$.fragment),
          (m = W()),
          y(g.$$.fragment),
          this.h();
      },
      l(E) {
        e = k(E, "DIV", { class: !0 });
        var _ = T(e);
        X(l.$$.fragment, _),
          (t = G(_)),
          X(n.$$.fragment, _),
          (s = G(_)),
          X(i.$$.fragment, _),
          (o = G(_)),
          X(a.$$.fragment, _),
          (c = G(_)),
          X(f.$$.fragment, _),
          (m = G(_)),
          X(g.$$.fragment, _),
          _.forEach(h),
          this.h();
      },
      h() {
        u(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1j13m8w");
      },
      m(E, _) {
        V(E, e, _),
          Y(l, e, null),
          d(e, t),
          Y(n, e, null),
          d(e, s),
          Y(i, e, null),
          d(e, o),
          Y(a, e, null),
          d(e, c),
          Y(f, e, null),
          d(e, m),
          Y(g, e, null),
          ($ = !0);
      },
      p(E, [_]) {
        const S = {};
        _ & 1 && (S.link = E[0](te.PHEMEX_ACADEMY, "CMS")), l.$set(S);
        const R = {};
        _ & 1 && (R.link = E[0](H.LEARN_CRYPTO.pathname)),
          _ & 8 && (R.$$scope = { dirty: _, ctx: E }),
          n.$set(R);
        const P = {};
        _ & 1 && (P.link = E[0](te.PHEMEX_HELP_CENTER, "CMS")), i.$set(P);
        const w = {};
        _ & 1 && (w.link = E[0](te.PHEMEX_BLOG, "CMS")), a.$set(w);
        const v = {};
        _ & 1 && (v.link = E[0](H.STUDENT_FOUNDATION.pathname)), f.$set(v);
      },
      i(E) {
        $ ||
          (O(l.$$.fragment, E),
          O(n.$$.fragment, E),
          O(i.$$.fragment, E),
          O(a.$$.fragment, E),
          O(f.$$.fragment, E),
          O(g.$$.fragment, E),
          ($ = !0));
      },
      o(E) {
        M(l.$$.fragment, E),
          M(n.$$.fragment, E),
          M(i.$$.fragment, E),
          M(a.$$.fragment, E),
          M(f.$$.fragment, E),
          M(g.$$.fragment, E),
          ($ = !1);
      },
      d(E) {
        E && h(e), j(l), j(n), j(i), j(a), j(f), j(g);
      },
    }
  );
}
function Vn(r, e, l) {
  let t;
  Q(r, pe, (i) => l(0, (t = i)));
  const n = de("LG");
  function s(i) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_learn_" + i,
      });
    };
  }
  return [t, n, s];
}
class Hn extends re {
  constructor(e) {
    super(), ie(this, e, Vn, Bn, se, {});
  }
}
function vt(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function bt(r) {
  let e,
    l,
    t = r[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = $t(vt(r, t, i));
  const s = (i) =>
    M(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0 });
      var o = T(e);
      for (let a = 0; a < n.length; a += 1) n[a].l(o);
      o.forEach(h), this.h();
    },
    h() {
      u(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-1fx5n9f");
    },
    m(i, o) {
      V(i, e, o);
      for (let a = 0; a < n.length; a += 1) n[a].m(e, null);
      l = !0;
    },
    p(i, o) {
      if (o & 3) {
        t = i[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = vt(i, t, a);
          n[a]
            ? (n[a].p(c, o), O(n[a], 1))
            : ((n[a] = $t(c)), n[a].c(), O(n[a], 1), n[a].m(e, null));
        }
        for (ce(), a = t.length; a < n.length; a += 1) s(a);
        fe();
      }
    },
    i(i) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1) O(n[o]);
        l = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) M(n[o]);
      l = !1;
    },
    d(i) {
      i && h(e), Pe(n, i);
    },
  };
}
function Wn(r) {
  let e;
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(l) {
      (e = k(l, "DIV", { slot: !0, class: !0 })), T(e).forEach(h), this.h();
    },
    h() {
      u(e, "slot", "circle-suffix"), u(e, "class", "circle svelte-1fx5n9f");
    },
    m(l, t) {
      V(l, e, t);
    },
    p: x,
    d(l) {
      l && h(e);
    },
  };
}
function kt(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { height: !0, alt: !0, src: !0 })), this.h();
    },
    h() {
      u(e, "height", "18"),
        u(e, "alt", "promotion"),
        le(e.src, (l = r[2].fullCornerIcon)) || u(e, "src", l);
    },
    m(t, n) {
      V(t, e, n);
    },
    p(t, n) {
      n & 1 && !le(e.src, (l = t[2].fullCornerIcon)) && u(e, "src", l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Gn(r) {
  let e,
    l,
    t = r[2].cornerIcon && kt(r);
  return {
    c() {
      (e = b("div")), t && t.c(), (l = W()), this.h();
    },
    l(n) {
      e = k(n, "DIV", { slot: !0, class: !0, style: !0 });
      var s = T(e);
      t && t.l(s), (l = G(s)), s.forEach(h), this.h();
    },
    h() {
      u(e, "slot", "title-suffix"),
        u(e, "class", "ml10"),
        oe(e, "width", "54px");
    },
    m(n, s) {
      V(n, e, s), t && t.m(e, null), d(e, l);
    },
    p(n, s) {
      n[2].cornerIcon
        ? t
          ? t.p(n, s)
          : ((t = kt(n)), t.c(), t.m(e, l))
        : t && (t.d(1), (t = null));
    },
    d(n) {
      n && h(e), t && t.d();
    },
  };
}
function $t(r) {
  let e, l;
  return (
    (e = new ae({
      props: {
        link: r[2].link,
        target: "_self",
        title: r[2].title,
        subTitle: r[2].subTitle,
        $$slots: { "title-suffix": [Gn], "circle-suffix": [Wn] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", function () {
      Me(r[1](r[2].title)) && r[1](r[2].title).apply(this, arguments);
    }),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        r = t;
        const s = {};
        n & 1 && (s.link = r[2].link),
          n & 1 && (s.title = r[2].title),
          n & 1 && (s.subTitle = r[2].subTitle),
          n & 33 && (s.$$scope = { dirty: n, ctx: r }),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function zn(r) {
  let e,
    l,
    t = r[0].length > 0 && bt(r);
  return {
    c() {
      t && t.c(), (e = he());
    },
    l(n) {
      t && t.l(n), (e = he());
    },
    m(n, s) {
      t && t.m(n, s), V(n, e, s), (l = !0);
    },
    p(n, [s]) {
      n[0].length > 0
        ? t
          ? (t.p(n, s), s & 1 && O(t, 1))
          : ((t = bt(n)), t.c(), O(t, 1), t.m(e.parentNode, e))
        : t &&
          (ce(),
          M(t, 1, 1, () => {
            t = null;
          }),
          fe());
    },
    i(n) {
      l || (O(t), (l = !0));
    },
    o(n) {
      M(t), (l = !1);
    },
    d(n) {
      t && t.d(n), n && h(e);
    },
  };
}
function Fn(r, e, l) {
  let t;
  Q(r, ml, (s) => l(0, (t = s)));
  function n(s) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_promotions_" + s,
      });
    };
  }
  return [t, n];
}
class yn extends re {
  constructor(e) {
    super(), ie(this, e, Fn, zn, se, {});
  }
}
function Yn(r) {
  let e, l, t, n, s, i, o;
  return (
    (l = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/ef726752-9966-47a3-8c0f-762180164415/earn.svg",
        iconAlt: "earn crypto",
        link: r[0](H.EARN_HOME.pathname),
        target: "_self",
        title: r[1](L.EarnCrypto),
        subTitle: r[1](L.EarnCryptoEarnUpTo),
      },
    })),
    l.$on("click", r[2]("phemex_earn")),
    (n = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/5b86523a-4eee-4b99-85ae-0c64e283b17d/3-0.svg",
        iconAlt: "savings",
        link: r[0](H.EARN.pathname),
        target: "_self",
        title: r[1](L.Savings),
        subTitle: r[1](L.EarnUpTo),
      },
    })),
    n.$on("click", r[2]("phemex_savings")),
    (i = new ae({
      props: {
        iconUrl:
          "https://img.phemex.com/v1/4ea02381-0b21-4292-a5d4-4a83d7f776de/3-1.svg",
        iconAlt: "launchpool",
        link: r[0](H.LAUNCHPOOL.pathname),
        target: "_self",
        title: r[1](L.Launchpool),
        subTitle: r[1](L.StakeAndEarn),
      },
    })),
    i.$on("click", r[2]("launchpool")),
    {
      c() {
        (e = b("div")),
          y(l.$$.fragment),
          (t = W()),
          y(n.$$.fragment),
          (s = W()),
          y(i.$$.fragment),
          this.h();
      },
      l(a) {
        e = k(a, "DIV", { class: !0 });
        var c = T(e);
        X(l.$$.fragment, c),
          (t = G(c)),
          X(n.$$.fragment, c),
          (s = G(c)),
          X(i.$$.fragment, c),
          c.forEach(h),
          this.h();
      },
      h() {
        u(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-mxaqyh");
      },
      m(a, c) {
        V(a, e, c),
          Y(l, e, null),
          d(e, t),
          Y(n, e, null),
          d(e, s),
          Y(i, e, null),
          (o = !0);
      },
      p(a, [c]) {
        const f = {};
        c & 1 && (f.link = a[0](H.EARN_HOME.pathname)), l.$set(f);
        const m = {};
        c & 1 && (m.link = a[0](H.EARN.pathname)), n.$set(m);
        const g = {};
        c & 1 && (g.link = a[0](H.LAUNCHPOOL.pathname)), i.$set(g);
      },
      i(a) {
        o ||
          (O(l.$$.fragment, a),
          O(n.$$.fragment, a),
          O(i.$$.fragment, a),
          (o = !0));
      },
      o(a) {
        M(l.$$.fragment, a), M(n.$$.fragment, a), M(i.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && h(e), j(l), j(n), j(i);
      },
    }
  );
}
function jn(r, e, l) {
  let t;
  Q(r, pe, (i) => l(0, (t = i)));
  const n = de("LG");
  function s(i) {
    return function () {
      i === "launchpool" &&
        Te.track("launchpool_button_click", { button_name: "launchpool" }),
        Te.track("web_click", {
          $screen_name: "home",
          $element_content: "navigation_earn_" + i,
        });
    };
  }
  return [t, n, s];
}
class Xn extends re {
  constructor(e) {
    super(), ie(this, e, jn, Yn, se, {});
  }
}
function Et(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function Tt(r) {
  let e, l;
  return (
    (e = new ae({
      props: {
        iconUrl: r[7].iconUrl,
        iconAlt: r[7].iconAlt,
        link: r[7].link,
        target: r[7].target,
        title: r[7].title,
        subTitle: r[7].subTitle,
        titleIcon: r[7].titleIcon,
      },
    })),
    e.$on("click", function () {
      Me(r[7].trackClick) && r[7].trackClick.apply(this, arguments);
    }),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        r = t;
        const s = {};
        n & 1 && (s.iconUrl = r[7].iconUrl),
          n & 1 && (s.iconAlt = r[7].iconAlt),
          n & 1 && (s.link = r[7].link),
          n & 1 && (s.target = r[7].target),
          n & 1 && (s.title = r[7].title),
          n & 1 && (s.subTitle = r[7].subTitle),
          n & 1 && (s.titleIcon = r[7].titleIcon),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function qn(r) {
  let e,
    l,
    t = r[0],
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = Tt(Et(r, t, i));
  const s = (i) =>
    M(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0 });
      var o = T(e);
      for (let a = 0; a < n.length; a += 1) n[a].l(o);
      o.forEach(h), this.h();
    },
    h() {
      u(e, "class", "wrap df fdc B1 T2 br12 ovh svelte-17fwetc");
    },
    m(i, o) {
      V(i, e, o);
      for (let a = 0; a < n.length; a += 1) n[a].m(e, null);
      l = !0;
    },
    p(i, [o]) {
      if (o & 1) {
        t = i[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Et(i, t, a);
          n[a]
            ? (n[a].p(c, o), O(n[a], 1))
            : ((n[a] = Tt(c)), n[a].c(), O(n[a], 1), n[a].m(e, null));
        }
        for (ce(), a = t.length; a < n.length; a += 1) s(a);
        fe();
      }
    },
    i(i) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1) O(n[o]);
        l = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) M(n[o]);
      l = !1;
    },
    d(i) {
      i && h(e), Pe(n, i);
    },
  };
}
function Kn(r, e, l) {
  let t, n, s;
  Q(r, pe, (f) => l(3, (t = f))),
    Q(r, dl, (f) => l(1, (n = f))),
    Q(r, _l, (f) => l(2, (s = f)));
  const i = de("LG");
  let o = [];
  function a(f, m) {
    l(
      0,
      (o = [
        {
          iconUrl:
            "https://img.phemex.com/v1/b55871b0-085b-4441-a557-46de5e21eb50/light.svg",
          iconAlt: "phemex_plus",
          link: t(H.WEB3_PULSE_HOME.pathname),
          titleIcon:
            "https://static.phemex.com/pubimg/data/436b16d5-676a-4144-9d67-a4c5ca230724.png",
          target: "_self",
          title: i(L.SocialTrade),
          subTitle: i(L.PhemexAllInOne),
          trackClick: c("phemex_plus"),
          hidden: !1,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/a78c5487-608d-4dd8-b1b4-8f095dd9e940/4-4.svg",
          iconAlt: "web3_stake",
          link: t(H.WEB3_STAKE.pathname),
          titleIcon: null,
          target: "_self",
          title: i(L.Web3PTStaking),
          subTitle: i(L.Web3PTStakingDesc),
          trackClick: c("web3_stake"),
          hidden: !f,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/e634e18e-da2d-4b36-8e50-5ac3a8a6abc6/4-0.svg",
          iconAlt: "phemexia",
          link: t(H.PHEMEXIA.pathname),
          titleIcon: null,
          target: "_self",
          title: i(L.Phemexia),
          subTitle: i(L.PhemexiaDesc),
          trackClick: c("phemexia"),
          hidden: !1,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/9e22031d-4e49-4edb-a3b7-b72957fd0d09/4-1.svg",
          iconAlt: "soul_pass",
          link: t(H.WEB3_SOUL_PASS.pathname),
          titleIcon: null,
          target: "_self",
          title: i(L.Web3SoulPass),
          subTitle: i(L.Web3SoulPassDesc),
          trackClick: c("soul_pass"),
          hidden: !f,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/ea2fcbb2-4061-4402-ac53-d64ea558627a/4-2.svg",
          iconAlt: "token",
          link: t(H.WEB3_EQUITY_BENEFITS.pathname),
          titleIcon: null,
          target: "_self",
          title: i(L.Web3Token),
          subTitle: i(L.Web3TokenDesc),
          trackClick: c("token"),
          hidden: !f,
        },
        {
          iconUrl:
            "https://img.phemex.com/v1/1f775f84-32a1-4638-b1ce-0814da91459f/lending-protocol.png",
          iconAlt: "web3_stake",
          link: t(H.WEB3_LENDING_MARKET.pathname),
          titleIcon:
            "https://img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png",
          target: "_self",
          title: i(L.Web3LendingProtocol),
          subTitle: i(L.Web3LendingProtocolDesc),
          trackClick: c("lending_protocol"),
          hidden: !m,
        },
      ].filter((g) => !g.hidden))
    );
  }
  function c(f) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "navigation_web3_" + f,
      });
    };
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 6 && a(s, n);
    }),
    [o, n, s]
  );
}
class Qn extends re {
  constructor(e) {
    super(), ie(this, e, Kn, qn, se, {});
  }
}
const { window: Cl } = pl;
function Jn(r) {
  let e, l, t, n, s, i, o, a, c, f, m, g, $, E, _, S, R, P, w;
  (e = new ue({
    props: {
      placement: Ae,
      modifiers: r[14],
      color: r[10],
      hoverColor: r[9],
      $$slots: { trigger: [er], default: [xn] },
      $$scope: { ctx: r },
    },
  })),
    (t = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        noIcon: !0,
        $$slots: { trigger: [tr] },
        $$scope: { ctx: r },
      },
    })),
    (s = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [nr], default: [lr] },
        $$scope: { ctx: r },
      },
    })),
    (o = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [ir], default: [rr] },
        $$scope: { ctx: r },
      },
    })),
    (c = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [ar], default: [sr] },
        $$scope: { ctx: r },
      },
    })),
    (m = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [cr], default: [or] },
        $$scope: { ctx: r },
      },
    })),
    ($ = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [ur], default: [fr] },
        $$scope: { ctx: r },
      },
    })),
    (_ = new ue({
      props: {
        class: "ml24",
        placement: Ae,
        modifiers: r[14],
        color: r[10],
        hoverColor: r[9],
        $$slots: { trigger: [mr], default: [hr] },
        $$scope: { ctx: r },
      },
    }));
  let v = r[12].title && It(r),
    C = r[2] === "tr" && At(r);
  return {
    c() {
      y(e.$$.fragment),
        (l = W()),
        y(t.$$.fragment),
        (n = W()),
        y(s.$$.fragment),
        (i = W()),
        y(o.$$.fragment),
        (a = W()),
        y(c.$$.fragment),
        (f = W()),
        y(m.$$.fragment),
        (g = W()),
        y($.$$.fragment),
        (E = W()),
        y(_.$$.fragment),
        (S = W()),
        v && v.c(),
        (R = W()),
        C && C.c(),
        (P = he());
    },
    l(p) {
      X(e.$$.fragment, p),
        (l = G(p)),
        X(t.$$.fragment, p),
        (n = G(p)),
        X(s.$$.fragment, p),
        (i = G(p)),
        X(o.$$.fragment, p),
        (a = G(p)),
        X(c.$$.fragment, p),
        (f = G(p)),
        X(m.$$.fragment, p),
        (g = G(p)),
        X($.$$.fragment, p),
        (E = G(p)),
        X(_.$$.fragment, p),
        (S = G(p)),
        v && v.l(p),
        (R = G(p)),
        C && C.l(p),
        (P = he());
    },
    m(p, I) {
      Y(e, p, I),
        V(p, l, I),
        Y(t, p, I),
        V(p, n, I),
        Y(s, p, I),
        V(p, i, I),
        Y(o, p, I),
        V(p, a, I),
        Y(c, p, I),
        V(p, f, I),
        Y(m, p, I),
        V(p, g, I),
        Y($, p, I),
        V(p, E, I),
        Y(_, p, I),
        V(p, S, I),
        v && v.m(p, I),
        V(p, R, I),
        C && C.m(p, I),
        V(p, P, I),
        (w = !0);
    },
    p(p, I) {
      const U = {};
      I & 1024 && (U.color = p[10]),
        I & 512 && (U.hoverColor = p[9]),
        I & 33554464 && (U.$$scope = { dirty: I, ctx: p }),
        e.$set(U);
      const B = {};
      I & 1024 && (B.color = p[10]),
        I & 512 && (B.hoverColor = p[9]),
        I & 33556480 && (B.$$scope = { dirty: I, ctx: p }),
        t.$set(B);
      const A = {};
      I & 1024 && (A.color = p[10]),
        I & 512 && (A.hoverColor = p[9]),
        I & 33554432 && (A.$$scope = { dirty: I, ctx: p }),
        s.$set(A);
      const F = {};
      I & 1024 && (F.color = p[10]),
        I & 512 && (F.hoverColor = p[9]),
        I & 33554432 && (F.$$scope = { dirty: I, ctx: p }),
        o.$set(F);
      const N = {};
      I & 1024 && (N.color = p[10]),
        I & 512 && (N.hoverColor = p[9]),
        I & 33554432 && (N.$$scope = { dirty: I, ctx: p }),
        c.$set(N);
      const D = {};
      I & 1024 && (D.color = p[10]),
        I & 512 && (D.hoverColor = p[9]),
        I & 33554432 && (D.$$scope = { dirty: I, ctx: p }),
        m.$set(D);
      const z = {};
      I & 1024 && (z.color = p[10]),
        I & 512 && (z.hoverColor = p[9]),
        I & 33554432 && (z.$$scope = { dirty: I, ctx: p }),
        $.$set(z);
      const J = {};
      I & 1024 && (J.color = p[10]),
        I & 512 && (J.hoverColor = p[9]),
        I & 33554432 && (J.$$scope = { dirty: I, ctx: p }),
        _.$set(J),
        p[12].title
          ? v
            ? v.p(p, I)
            : ((v = It(p)), v.c(), v.m(R.parentNode, R))
          : v && (v.d(1), (v = null)),
        p[2] === "tr"
          ? C
            ? C.p(p, I)
            : ((C = At(p)), C.c(), C.m(P.parentNode, P))
          : C && (C.d(1), (C = null));
    },
    i(p) {
      w ||
        (O(e.$$.fragment, p),
        O(t.$$.fragment, p),
        O(s.$$.fragment, p),
        O(o.$$.fragment, p),
        O(c.$$.fragment, p),
        O(m.$$.fragment, p),
        O($.$$.fragment, p),
        O(_.$$.fragment, p),
        (w = !0));
    },
    o(p) {
      M(e.$$.fragment, p),
        M(t.$$.fragment, p),
        M(s.$$.fragment, p),
        M(o.$$.fragment, p),
        M(c.$$.fragment, p),
        M(m.$$.fragment, p),
        M($.$$.fragment, p),
        M(_.$$.fragment, p),
        (w = !1);
    },
    d(p) {
      j(e, p),
        p && h(l),
        j(t, p),
        p && h(n),
        j(s, p),
        p && h(i),
        j(o, p),
        p && h(a),
        j(c, p),
        p && h(f),
        j(m, p),
        p && h(g),
        j($, p),
        p && h(E),
        j(_, p),
        p && h(S),
        v && v.d(p),
        p && h(R),
        C && C.d(p),
        p && h(P);
    },
  };
}
function Zn(r) {
  let e, l;
  return (
    (e = new bn({ props: { isTop: r[0] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 1 && (s.isTop = t[0]), e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function xn(r) {
  let e, l;
  return (
    (e = new Pn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function wt(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "title-icon svelte-bk4zcc"),
        u(e, "height", "14"),
        le(e.src, (l = Oe.BUY_CRYPTO_ZERO_FEE_HEADER)) || u(e, "src", l),
        u(e, "alt", "zero fee");
    },
    m(t, n) {
      V(t, e, n);
    },
    p: x,
    d(t) {
      t && h(e);
    },
  };
}
function er(r) {
  let e,
    l,
    t = r[13](L.BuyCrypto) + "",
    n,
    s,
    i = r[5] && wt();
  return {
    c() {
      (e = b("span")),
        (l = b("span")),
        (n = q(t)),
        (s = W()),
        i && i.c(),
        this.h();
    },
    l(o) {
      e = k(o, "SPAN", { slot: !0, class: !0 });
      var a = T(e);
      l = k(a, "SPAN", { class: !0 });
      var c = T(l);
      (n = K(c, t)),
        c.forEach(h),
        (s = G(a)),
        i && i.l(a),
        a.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger df aic svelte-bk4zcc");
    },
    m(o, a) {
      V(o, e, a), d(e, l), d(l, n), d(e, s), i && i.m(e, null);
    },
    p(o, a) {
      o[5]
        ? i
          ? i.p(o, a)
          : ((i = wt()), i.c(), i.m(e, null))
        : i && (i.d(1), (i = null));
    },
    d(o) {
      o && h(e), i && i.d();
    },
  };
}
function tr(r) {
  let e,
    l = r[13](L.Markets) + "",
    t,
    n,
    s;
  return {
    c() {
      (e = b("span")), (t = q(l)), this.h();
    },
    l(i) {
      e = k(i, "SPAN", { slot: !0, class: !0 });
      var o = T(e);
      (t = K(o, l)), o.forEach(h), this.h();
    },
    h() {
      u(e, "slot", "trigger"), u(e, "class", "trigger svelte-bk4zcc");
    },
    m(i, o) {
      V(i, e, o), d(e, t), n || ((s = ne(e, "click", r[20])), (n = !0));
    },
    p: x,
    d(i) {
      i && h(e), (n = !1), s();
    },
  };
}
function lr(r) {
  let e, l;
  return (
    (e = new Nn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function nr(r) {
  let e,
    l,
    t = r[13](L.Contract) + "",
    n;
  return {
    c() {
      (e = b("span")), (l = b("span")), (n = q(t)), this.h();
    },
    l(s) {
      e = k(s, "SPAN", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "SPAN", { class: !0 });
      var o = T(l);
      (n = K(o, t)), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger svelte-bk4zcc");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function rr(r) {
  let e, l;
  return (
    (e = new Rn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ir(r) {
  let e,
    l,
    t = r[13](L.Spot) + "",
    n;
  return {
    c() {
      (e = b("span")), (l = b("span")), (n = q(t)), this.h();
    },
    l(s) {
      e = k(s, "SPAN", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "SPAN", { class: !0 });
      var o = T(l);
      (n = K(o, t)), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger svelte-bk4zcc");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function sr(r) {
  let e, l;
  return (
    (e = new Xn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ar(r) {
  let e,
    l,
    t = r[13](L.EarnMain) + "",
    n;
  return {
    c() {
      (e = b("span")), (l = b("span")), (n = q(t)), this.h();
    },
    l(s) {
      e = k(s, "SPAN", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "SPAN", { class: !0 });
      var o = T(l);
      (n = K(o, t)), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger svelte-bk4zcc");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function or(r) {
  let e, l;
  return (
    (e = new Qn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function cr(r) {
  let e,
    l,
    t = r[13](L.Web3) + "",
    n,
    s,
    i,
    o;
  return {
    c() {
      (e = b("span")),
        (l = b("span")),
        (n = q(t)),
        (s = W()),
        (i = b("img")),
        this.h();
    },
    l(a) {
      e = k(a, "SPAN", { slot: !0, class: !0 });
      var c = T(e);
      l = k(c, "SPAN", { class: !0 });
      var f = T(l);
      (n = K(f, t)),
        f.forEach(h),
        (s = G(c)),
        (i = k(c, "IMG", { class: !0, height: !0, src: !0, alt: !0 })),
        c.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(i, "class", "title-icon svelte-bk4zcc"),
        u(i, "height", "14"),
        le(
          i.src,
          (o =
            "//img.phemex.com/v1/54fc3980-aadf-4ed8-9873-98e199994a95/frame-14.png")
        ) || u(i, "src", o),
        u(i, "alt", "new"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger df aic svelte-bk4zcc");
    },
    m(a, c) {
      V(a, e, c), d(e, l), d(l, n), d(e, s), d(e, i);
    },
    p: x,
    d(a) {
      a && h(e);
    },
  };
}
function fr(r) {
  let e, l;
  return (
    (e = new Hn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ur(r) {
  let e,
    l,
    t = r[13](L.Learn) + "",
    n;
  return {
    c() {
      (e = b("span")), (l = b("span")), (n = q(t)), this.h();
    },
    l(s) {
      e = k(s, "SPAN", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "SPAN", { class: !0 });
      var o = T(l);
      (n = K(o, t)), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger svelte-bk4zcc");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function hr(r) {
  let e, l;
  return (
    (e = new yn({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function mr(r) {
  let e,
    l,
    t = r[13](L.Promotions) + "",
    n;
  return {
    c() {
      (e = b("span")), (l = b("span")), (n = q(t)), this.h();
    },
    l(s) {
      e = k(s, "SPAN", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "SPAN", { class: !0 });
      var o = T(l);
      (n = K(o, t)), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(l, "class", "title svelte-bk4zcc"),
        u(e, "slot", "trigger"),
        u(e, "class", "trigger svelte-bk4zcc");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function It(r) {
  let e,
    l,
    t = r[12].title + "",
    n,
    s,
    i,
    o = r[12].cornerIcon && Ct(r);
  return {
    c() {
      (e = b("a")),
        (l = b("span")),
        (n = q(t)),
        (s = W()),
        o && o.c(),
        this.h();
    },
    l(a) {
      e = k(a, "A", { class: !0, href: !0 });
      var c = T(e);
      l = k(c, "SPAN", { class: !0 });
      var f = T(l);
      (n = K(f, t)),
        f.forEach(h),
        (s = G(c)),
        o && o.l(c),
        c.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "svelte-bk4zcc"),
        u(e, "class", "df aic ml24 T2 cp menu svelte-bk4zcc"),
        u(e, "href", (i = r[12].link)),
        Z(e, "active", H.CRYPTO_TRADING_COMPETITION_1_ON_1.pathname === r[7]);
    },
    m(a, c) {
      V(a, e, c), d(e, l), d(l, n), d(e, s), o && o.m(e, null);
    },
    p(a, c) {
      c & 4096 && t !== (t = a[12].title + "") && ge(n, t),
        a[12].cornerIcon
          ? o
            ? o.p(a, c)
            : ((o = Ct(a)), o.c(), o.m(e, null))
          : o && (o.d(1), (o = null)),
        c & 4096 && i !== (i = a[12].link) && u(e, "href", i),
        c & 128 &&
          Z(e, "active", H.CRYPTO_TRADING_COMPETITION_1_ON_1.pathname === a[7]);
    },
    d(a) {
      a && h(e), o && o.d();
    },
  };
}
function Ct(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { class: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "hot-img ml4 svelte-bk4zcc"),
        u(e, "height", "16"),
        le(e.src, (l = r[12].fullCornerIcon)) || u(e, "src", l),
        u(e, "alt", "new");
    },
    m(t, n) {
      V(t, e, n);
    },
    p(t, n) {
      n & 4096 && !le(e.src, (l = t[12].fullCornerIcon)) && u(e, "src", l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function At(r) {
  let e, l, t;
  return {
    c() {
      (e = b("a")), (l = b("span")), (t = q("PhemexTR")), this.h();
    },
    l(n) {
      e = k(n, "A", { class: !0, href: !0, target: !0 });
      var s = T(e);
      l = k(s, "SPAN", { class: !0 });
      var i = T(l);
      (t = K(i, "PhemexTR")), i.forEach(h), s.forEach(h), this.h();
    },
    h() {
      u(l, "class", "svelte-bk4zcc"),
        u(e, "class", "T2 cp menu svelte-bk4zcc"),
        u(e, "href", te.PHEMEX_TR),
        u(e, "target", "_blank"),
        Z(e, "ml36", r[4] >= 1600),
        Z(e, "ml12", r[4] < 1600);
    },
    m(n, s) {
      V(n, e, s), d(e, l), d(l, t);
    },
    p(n, s) {
      s & 16 && Z(e, "ml36", n[4] >= 1600), s & 16 && Z(e, "ml12", n[4] < 1600);
    },
    d(n) {
      n && h(e);
    },
  };
}
function St(r) {
  let e, l, t, n, s;
  return {
    c() {
      (e = b("div")), (l = b("i")), (t = q("")), this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0 });
      var o = T(e);
      l = k(o, "I", { class: !0 });
      var a = T(l);
      (t = K(a, "")), a.forEach(h), o.forEach(h), this.h();
    },
    h() {
      u(l, "class", "iconfont f16"),
        u(e, "class", "overflow-icon df jcc cp svelte-bk4zcc");
    },
    m(i, o) {
      V(i, e, o),
        d(e, l),
        d(l, t),
        n || ((s = ne(e, "click", r[16])), (n = !0));
    },
    p: x,
    d(i) {
      i && h(e), (n = !1), s();
    },
  };
}
function dr(r) {
  let e, l, t, n, s, i, o, a, c, f, m, g;
  De(r[19]);
  const $ = [Zn, Jn],
    E = [];
  function _(R, P) {
    return R[15] ? 0 : 1;
  }
  (o = _(r)), (a = E[o] = $[o](r));
  let S = r[8] && St(r);
  return {
    c() {
      (e = b("div")),
        (l = b("a")),
        (t = b("img")),
        (s = W()),
        (i = b("div")),
        a.c(),
        (c = W()),
        S && S.c(),
        this.h();
    },
    l(R) {
      e = k(R, "DIV", { class: !0 });
      var P = T(e);
      l = k(P, "A", { class: !0, href: !0, target: !0 });
      var w = T(l);
      (t = k(w, "IMG", { height: !0, alt: !0, src: !0 })),
        w.forEach(h),
        (s = G(P)),
        (i = k(P, "DIV", { class: !0 }));
      var v = T(i);
      a.l(v), v.forEach(h), (c = G(P)), S && S.l(P), P.forEach(h), this.h();
    },
    h() {
      u(t, "height", "24"),
        u(t, "alt", "Logo"),
        le(t.src, (n = r[6])) || u(t, "src", n),
        u(l, "class", "df mt2"),
        u(l, "href", r[3]),
        u(l, "target", "_self"),
        u(i, "class", "left-con ml24 df aic no-scroll-bar svelte-bk4zcc"),
        u(e, "class", "main df aic svelte-bk4zcc"),
        Z(e, "top", r[0]);
    },
    m(R, P) {
      V(R, e, P),
        d(e, l),
        d(l, t),
        d(e, s),
        d(e, i),
        E[o].m(i, null),
        r[21](i),
        d(e, c),
        S && S.m(e, null),
        (f = !0),
        m || ((g = ne(Cl, "resize", r[19])), (m = !0));
    },
    p(R, [P]) {
      (!f || (P & 64 && !le(t.src, (n = R[6])))) && u(t, "src", n),
        (!f || P & 8) && u(l, "href", R[3]),
        a.p(R, P),
        R[8]
          ? S
            ? S.p(R, P)
            : ((S = St(R)), S.c(), S.m(e, null))
          : S && (S.d(1), (S = null)),
        (!f || P & 1) && Z(e, "top", R[0]);
    },
    i(R) {
      f || (O(a), (f = !0));
    },
    o(R) {
      M(a), (f = !1);
    },
    d(R) {
      R && h(e), E[o].d(), r[21](null), S && S.d(), (m = !1), g();
    },
  };
}
const Ae = "bottom-start";
function _r(r, e, l) {
  let t, n, s, i, o, a;
  Q(r, Gl, (N) => l(18, (s = N))),
    Q(r, Se, (N) => l(2, (i = N))),
    Q(r, pe, (N) => l(11, (o = N))),
    Q(r, gl, (N) => l(12, (a = N)));
  let { isTop: c = !1 } = e,
    { useContractMenu: f = !1 } = e;
  const m = de("LG"),
    g = [
      { name: "offset", options: { offset: [-24, 0] } },
      { name: "preventOverflow", options: { padding: 40 } },
    ];
  let $ = Ve.isMock(),
    E = "",
    _ = 1600,
    S = !1,
    R,
    P,
    w,
    v = !1;
  Be(function () {
    let D = 0;
    const z = 10,
      ee = setInterval(() => {
        if (D > z || v) {
          clearInterval(ee);
          return;
        }
        l(8, (v = w && w.scrollWidth > w.clientWidth)), D++;
      }, 500);
  });
  function C(N) {
    const D = new ResizeObserver((z) => {
      for (let J of z) l(8, (v = J.target.scrollWidth > J.target.clientWidth));
    });
    D.observe(N), zl(() => N && D.unobserve(N));
  }
  function p() {
    w.scrollBy({ left: 100, behavior: "smooth" });
  }
  function I(N, D) {
    D.length > 0 && l(5, (S = D.some((z) => (z.weight & Math.pow(2, 20)) > 0))),
      l(3, (E = El.BASE_URL + (N === "en" ? "" : "/" + N)));
  }
  function U(N, D) {
    return N
      ? D
        ? Ie.LOGO_CONTRACT_LIGHT
        : Ie.LOGO_LIGHT
      : D
      ? Ie.LOGO_CONTRACT_DARK
      : Ie.LOGO_DARK;
  }
  function B() {
    l(4, (_ = Cl.innerWidth));
  }
  const A = () => location.assign(o(H.MARKETS.pathname));
  function F(N) {
    Ge[N ? "unshift" : "push"](() => {
      (w = N), l(1, w);
    });
  }
  return (
    (r.$$set = (N) => {
      "isTop" in N && l(0, (c = N.isTop)),
        "useContractMenu" in N && l(17, (f = N.useContractMenu));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 262148 && I(i, s),
        r.$$.dirty & 131073 && l(6, (R = U(c, f))),
        r.$$.dirty & 1 &&
          l(10, (t = c ? "var(--menu-dark)" : "var(--menu-light)")),
        r.$$.dirty & 1 &&
          l(9, (n = c ? "var(--menu-dark-hover)" : "var(--menu-light-hover)")),
        r.$$.dirty & 2 && w && C(w);
    }),
    l(7, (P = window.location.pathname)),
    [c, w, i, E, _, S, R, P, v, n, t, o, a, m, g, $, p, f, s, B, A, F]
  );
}
class gr extends re {
  constructor(e) {
    super(), ie(this, e, _r, dr, se, { isTop: 0, useContractMenu: 17 });
  }
}
const pr = [
  H.WEB3_SOUL_PASS.pathname,
  H.XPT_MINING.pathname,
  H.STRATEGY_SQUARE.pathname,
  H.XPT_AIRDROP.pathname,
  H.CEX_AIRDROP.pathname,
  H.DEX_AIRDROP.pathname,
  H.FTX_AIRDROP.pathname,
  H.ALL_STAR_PROGRAM.pathname,
  H.WEB3_SOUL_PASS.pathname,
  H.XPT_MINING.pathname,
  H.STRATEGY_SQUARE.pathname,
  H.ACCOUNT_INVITE_FRIENDS_ENTRY.pathname,
];
function vr(r, e) {
  if (!e) {
    Re(r(H.LOGIN.pathname));
    return;
  }
  Re(r(H.LOGIN.pathname) + "?" + He.stringify({ target: e, action: "Target" }));
}
function Pt(r, e) {
  if (!e) {
    Re(r(H.REGISTER.pathname));
    return;
  }
  Re(
    r(H.REGISTER.pathname) + "?" + He.stringify({ target: e, action: "Target" })
  );
}
function Al(r) {
  if (pr.map((e) => r(e)).includes(location.pathname)) {
    const e = location.origin + location.pathname + location.search;
    Pt(r, e);
    return;
  }
  Pt(r);
}
const qe = new Map(),
  Ee = Object.freeze({
    INITIALIZED: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
    TIMEOUT: 4,
  }),
  br = (r) => ({ component: r & 2 }),
  Dt = (r) => ({ component: r[1] }),
  kr = (r) => ({ component: r & 2 }),
  Ot = (r) => ({ component: r[1] }),
  $r = (r) => ({ component: r & 2 }),
  Rt = (r) => ({ component: r[1] }),
  Er = (r) => ({ component: r & 2 }),
  Lt = (r) => ({ component: r[1] }),
  Tr = (r) => ({ component: r & 2 }),
  Mt = (r) => ({ component: r[1] });
function wr(r) {
  let e, l, t, n;
  const s = [Dr, Pr, Sr],
    i = [];
  function o(a, c) {
    return a[2].success ? 0 : a[2].default ? 1 : 2;
  }
  return (
    (e = o(r)),
    (l = i[e] = s[e](r)),
    {
      c() {
        l.c(), (t = he());
      },
      l(a) {
        l.l(a), (t = he());
      },
      m(a, c) {
        i[e].m(a, c), V(a, t, c), (n = !0);
      },
      p(a, c) {
        let f = e;
        (e = o(a)),
          e === f
            ? i[e].p(a, c)
            : (ce(),
              M(i[f], 1, 1, () => {
                i[f] = null;
              }),
              fe(),
              (l = i[e]),
              l ? l.p(a, c) : ((l = i[e] = s[e](a)), l.c()),
              O(l, 1),
              l.m(t.parentNode, t));
      },
      i(a) {
        n || (O(l), (n = !0));
      },
      o(a) {
        M(l), (n = !1);
      },
      d(a) {
        i[e].d(a), a && h(t);
      },
    }
  );
}
function Ir(r) {
  let e;
  const l = r[8].loading,
    t = ve(l, r, r[7], Rt);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 130) &&
        be(t, l, n, n[7], e ? $e(l, n[7], s, $r) : ke(n[7]), Rt);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function Cr(r) {
  let e;
  const l = r[8].timeout,
    t = ve(l, r, r[7], Lt);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 130) &&
        be(t, l, n, n[7], e ? $e(l, n[7], s, Er) : ke(n[7]), Lt);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function Ar(r) {
  let e;
  const l = r[8].error,
    t = ve(l, r, r[7], Mt);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 130) &&
        be(t, l, n, n[7], e ? $e(l, n[7], s, Tr) : ke(n[7]), Mt);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function Sr(r) {
  let e, l, t;
  const n = [r[3]];
  var s = r[1];
  function i(o) {
    let a = {};
    for (let c = 0; c < n.length; c += 1) a = ze(a, n[c]);
    return { props: a };
  }
  return (
    s && (e = xe(s, i())),
    {
      c() {
        e && y(e.$$.fragment), (l = he());
      },
      l(o) {
        e && X(e.$$.fragment, o), (l = he());
      },
      m(o, a) {
        e && Y(e, o, a), V(o, l, a), (t = !0);
      },
      p(o, a) {
        const c = a & 8 ? ul(n, [hl(o[3])]) : {};
        if (s !== (s = o[1])) {
          if (e) {
            ce();
            const f = e;
            M(f.$$.fragment, 1, 0, () => {
              j(f, 1);
            }),
              fe();
          }
          s
            ? ((e = xe(s, i())),
              y(e.$$.fragment),
              O(e.$$.fragment, 1),
              Y(e, l.parentNode, l))
            : (e = null);
        } else s && e.$set(c);
      },
      i(o) {
        t || (e && O(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        e && M(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        o && h(l), e && j(e, o);
      },
    }
  );
}
function Pr(r) {
  let e;
  const l = r[8].default,
    t = ve(l, r, r[7], Dt);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 130) &&
        be(t, l, n, n[7], e ? $e(l, n[7], s, br) : ke(n[7]), Dt);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function Dr(r) {
  let e;
  const l = r[8].success,
    t = ve(l, r, r[7], Ot);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 130) &&
        be(t, l, n, n[7], e ? $e(l, n[7], s, kr) : ke(n[7]), Ot);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function Or(r) {
  let e, l, t, n;
  const s = [Ar, Cr, Ir, wr],
    i = [];
  function o(a, c) {
    return a[0] === Ee.ERROR
      ? 0
      : a[0] === Ee.TIMEOUT
      ? 1
      : a[0] === Ee.LOADING
      ? 2
      : a[0] === Ee.SUCCESS
      ? 3
      : -1;
  }
  return (
    ~(e = o(r)) && (l = i[e] = s[e](r)),
    {
      c() {
        l && l.c(), (t = he());
      },
      l(a) {
        l && l.l(a), (t = he());
      },
      m(a, c) {
        ~e && i[e].m(a, c), V(a, t, c), (n = !0);
      },
      p(a, [c]) {
        let f = e;
        (e = o(a)),
          e === f
            ? ~e && i[e].p(a, c)
            : (l &&
                (ce(),
                M(i[f], 1, 1, () => {
                  i[f] = null;
                }),
                fe()),
              ~e
                ? ((l = i[e]),
                  l ? l.p(a, c) : ((l = i[e] = s[e](a)), l.c()),
                  O(l, 1),
                  l.m(t.parentNode, t))
                : (l = null));
      },
      i(a) {
        n || (O(l), (n = !0));
      },
      o(a) {
        M(l), (n = !1);
      },
      d(a) {
        ~e && i[e].d(a), a && h(t);
      },
    }
  );
}
function Rr(r, e, l) {
  const t = ["loader", "timeout", "start"];
  let n = Ze(e, t),
    { $$slots: s = {}, $$scope: i } = e;
  const o = fl(s);
  let { loader: a } = e,
    { timeout: c = 3e3 } = e,
    { start: f = !1 } = e,
    m = Ee.INITIALIZED,
    g;
  function $(_) {
    if ((l(0, (m = Ee.INITIALIZED)), l(1, (g = void 0)), qe.has(_)))
      l(0, (m = Ee.SUCCESS)), l(1, (g = qe.get(_)));
    else
      try {
        E(_, c);
      } catch {
        l(0, (m = Ee.SUCCESS)), l(1, (g = _));
      }
  }
  async function E(_, S) {
    l(0, (m = Ee.LOADING));
    try {
      const R = await Promise.race([
        _(),
        new Promise((P, w) => {
          setTimeout(() => w("Timeout"), S);
        }),
      ]);
      l(1, (g = R.default || R)), l(0, (m = Ee.SUCCESS)), qe.set(_, g);
    } catch (R) {
      l(0, (m = R === "Timeout" ? Ee.TIMEOUT : Ee.ERROR));
    }
  }
  return (
    (r.$$set = (_) => {
      (e = ze(ze({}, e), Fl(_))),
        l(3, (n = Ze(e, t))),
        "loader" in _ && l(4, (a = _.loader)),
        "timeout" in _ && l(5, (c = _.timeout)),
        "start" in _ && l(6, (f = _.start)),
        "$$scope" in _ && l(7, (i = _.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 80 && f && $(a);
    }),
    [m, g, o, n, a, c, f, i, s]
  );
}
class Sl extends re {
  constructor(e) {
    super(), ie(this, e, Rr, Or, se, { loader: 4, timeout: 5, start: 6 });
  }
}
function Nt(r) {
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
    }[r] || "us") +
    "/app/phemex/id1499601684"
  );
}
function Ut(r) {
  return "https://play.google.com/store/apps/details?id=com.phemex.app&hl=" + r;
}
function Lr(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o = r[2](L.ScanTo) + "",
    a,
    c,
    f,
    m,
    g,
    $,
    E,
    _,
    S,
    R;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = b("img")),
        (s = W()),
        (i = b("div")),
        (a = q(o)),
        (c = W()),
        (f = b("div")),
        (m = b("a")),
        (g = b("img")),
        (E = W()),
        (_ = b("a")),
        (S = b("img")),
        this.h();
    },
    l(P) {
      e = k(P, "DIV", { class: !0, style: !0 });
      var w = T(e);
      l = k(w, "DIV", { class: !0 });
      var v = T(l);
      t = k(v, "DIV", { class: !0 });
      var C = T(t);
      (n = k(C, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        (s = G(C)),
        (i = k(C, "DIV", { class: !0 }));
      var p = T(i);
      (a = K(p, o)),
        p.forEach(h),
        C.forEach(h),
        (c = G(v)),
        (f = k(v, "DIV", { class: !0 }));
      var I = T(f);
      m = k(I, "A", { target: !0, class: !0, href: !0 });
      var U = T(m);
      (g = k(U, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        U.forEach(h),
        (E = G(I)),
        (_ = k(I, "A", { target: !0, class: !0, href: !0 }));
      var B = T(_);
      (S = k(B, "IMG", { class: !0, alt: !0, "data-src": !0 })),
        B.forEach(h),
        I.forEach(h),
        v.forEach(h),
        w.forEach(h),
        this.h();
    },
    h() {
      u(n, "class", "qrcode lazyload svelte-nkgkpg"),
        u(n, "alt", "qr code"),
        u(n, "data-src", r[0]),
        u(i, "class", "title mt8 f14 svelte-nkgkpg"),
        u(t, "class", "tc"),
        u(g, "class", "download lazyload svelte-nkgkpg"),
        u(g, "alt", "app store"),
        u(g, "data-src", Oe.APP_STORE_HOME),
        u(m, "target", "_blank"),
        u(m, "class", "df svelte-nkgkpg"),
        u(m, "href", ($ = Nt(r[1]))),
        u(S, "class", "download lazyload svelte-nkgkpg"),
        u(S, "alt", "google play"),
        u(S, "data-src", Oe.GOOGLE_PLAY_HOME),
        u(_, "target", "_blank"),
        u(_, "class", "df svelte-nkgkpg"),
        u(_, "href", (R = Ut(r[1]))),
        u(f, "class", "download-con df fdc jcsb svelte-nkgkpg"),
        u(l, "class", "df aic ais"),
        u(e, "class", "wrap br12 T2 svelte-nkgkpg"),
        oe(e, "--ratio-", r[3]);
    },
    m(P, w) {
      V(P, e, w),
        d(e, l),
        d(l, t),
        d(t, n),
        d(t, s),
        d(t, i),
        d(i, a),
        d(l, c),
        d(l, f),
        d(f, m),
        d(m, g),
        d(f, E),
        d(f, _),
        d(_, S);
    },
    p(P, [w]) {
      w & 1 && u(n, "data-src", P[0]),
        w & 2 && $ !== ($ = Nt(P[1])) && u(m, "href", $),
        w & 2 && R !== (R = Ut(P[1])) && u(_, "href", R);
    },
    i: x,
    o: x,
    d(P) {
      P && h(e);
    },
  };
}
function Mr(r, e, l) {
  let t;
  Q(r, Se, (c) => l(1, (t = c)));
  const n = de("LG");
  let { width: s = 398 } = e,
    i = s / 398,
    o = "";
  Be(() => a());
  async function a() {
    const c = window.location.origin + H.DOWNLOAD.pathname;
    l(0, (o = await yl.toDataURL(c, { width: 140 * i, margin: 0 })));
  }
  return (
    (r.$$set = (c) => {
      "width" in c && l(4, (s = c.width));
    }),
    [o, t, n, i, s]
  );
}
class Nr extends re {
  constructor(e) {
    super(), ie(this, e, Mr, Lr, se, { width: 4 });
  }
}
function Bt(r, e, l) {
  const t = r.slice();
  return (t[4] = e[l]), t;
}
function Vt(r) {
  let e,
    l = r[4].detail.content + "";
  return {
    c() {
      (e = b("div")), this.h();
    },
    l(t) {
      e = k(t, "DIV", { class: !0 });
      var n = T(e);
      n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "announce content T3 lh18 fw2 svelte-1a17egd");
    },
    m(t, n) {
      V(t, e, n), (e.innerHTML = l);
    },
    p(t, n) {
      n & 2 && l !== (l = t[4].detail.content + "") && (e.innerHTML = l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Ht(r, e) {
  let l,
    t,
    n,
    s,
    i,
    o = e[4].detail.title + "",
    a,
    c = e[4].detail.title + "",
    f,
    m,
    g,
    $,
    E,
    _ = et.formatDate(e[4].releaseTime) + "",
    S,
    R,
    P,
    w,
    v = e[4].detail.content && Vt(e);
  return {
    key: r,
    first: null,
    c() {
      (l = b("div")),
        (t = b("span")),
        (n = W()),
        (s = b("a")),
        (i = b("div")),
        (a = q(o)),
        (f = q(c)),
        (m = W()),
        v && v.c(),
        ($ = W()),
        (E = b("div")),
        (S = q(_)),
        (R = W()),
        this.h();
    },
    l(C) {
      l = k(C, "DIV", { class: !0 });
      var p = T(l);
      (t = k(p, "SPAN", { class: !0 })),
        T(t).forEach(h),
        (n = G(p)),
        (s = k(p, "A", { class: !0, href: !0 }));
      var I = T(s);
      i = k(I, "DIV", { class: !0 });
      var U = T(i);
      (a = K(U, o)),
        (f = K(U, c)),
        U.forEach(h),
        (m = G(I)),
        v && v.l(I),
        I.forEach(h),
        ($ = G(p)),
        (E = k(p, "DIV", { class: !0, style: !0 }));
      var B = T(E);
      (S = K(B, _)), B.forEach(h), (R = G(p)), p.forEach(h), this.h();
    },
    h() {
      u(t, "class", "circle mr12 svelte-1a17egd"),
        u(i, "class", "announce f14 lh24 fw2 T2 svelte-1a17egd"),
        u(s, "class", "announce-con svelte-1a17egd"),
        u(s, "href", (g = e[4].detail.webLink)),
        u(E, "class", "f12 fw1 lh18 T4 ml8"),
        oe(E, "margin-left", "auto"),
        u(l, "class", "item df aic svelte-1a17egd"),
        (this.first = l);
    },
    m(C, p) {
      V(C, l, p),
        d(l, t),
        d(l, n),
        d(l, s),
        d(s, i),
        d(i, a),
        d(i, f),
        d(s, m),
        v && v.m(s, null),
        d(l, $),
        d(l, E),
        d(E, S),
        d(l, R),
        P ||
          ((w = ne(s, "click", function () {
            Me(e[3](e[4])) && e[3](e[4]).apply(this, arguments);
          })),
          (P = !0));
    },
    p(C, p) {
      (e = C),
        p & 2 && o !== (o = e[4].detail.title + "") && ge(a, o),
        p & 2 && c !== (c = e[4].detail.title + "") && ge(f, c),
        e[4].detail.content
          ? v
            ? v.p(e, p)
            : ((v = Vt(e)), v.c(), v.m(s, null))
          : v && (v.d(1), (v = null)),
        p & 2 && g !== (g = e[4].detail.webLink) && u(s, "href", g),
        p & 2 && _ !== (_ = et.formatDate(e[4].releaseTime) + "") && ge(S, _);
    },
    d(C) {
      C && h(l), v && v.d(), (P = !1), w();
    },
  };
}
function Ur(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a = r[2](L.RecentTrading) + "",
    c,
    f,
    m,
    g,
    $ = r[2](L.All) + "",
    E,
    _,
    S,
    R,
    P,
    w,
    v = [],
    C = new Map(),
    p = r[1] || [];
  const I = (U) => U[4].id;
  for (let U = 0; U < p.length; U += 1) {
    let B = Bt(r, p, U),
      A = I(B);
    C.set(A, (v[U] = Ht(A, B)));
  }
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = b("i")),
        (s = q("")),
        (i = W()),
        (o = b("span")),
        (c = q(a)),
        (f = W()),
        (m = b("div")),
        (g = b("a")),
        (E = q($)),
        (_ = b("i")),
        (S = q("")),
        (P = W()),
        (w = b("div"));
      for (let U = 0; U < v.length; U += 1) v[U].c();
      this.h();
    },
    l(U) {
      e = k(U, "DIV", { class: !0 });
      var B = T(e);
      l = k(B, "DIV", { class: !0 });
      var A = T(l);
      t = k(A, "DIV", { class: !0 });
      var F = T(t);
      n = k(F, "I", { class: !0 });
      var N = T(n);
      (s = K(N, "")),
        N.forEach(h),
        (i = G(F)),
        (o = k(F, "SPAN", { class: !0 }));
      var D = T(o);
      (c = K(D, a)),
        D.forEach(h),
        F.forEach(h),
        (f = G(A)),
        (m = k(A, "DIV", { class: !0 }));
      var z = T(m);
      g = k(z, "A", { href: !0, target: !0 });
      var J = T(g);
      (E = K(J, $)), (_ = k(J, "I", { class: !0 }));
      var ee = T(_);
      (S = K(ee, "")),
        ee.forEach(h),
        J.forEach(h),
        z.forEach(h),
        A.forEach(h),
        (P = G(B)),
        (w = k(B, "DIV", { class: !0 }));
      var me = T(w);
      for (let Ce = 0; Ce < v.length; Ce += 1) v[Ce].l(me);
      me.forEach(h), B.forEach(h), this.h();
    },
    h() {
      u(n, "class", "iconfont f24"),
        u(o, "class", "ooo ml8 fw3"),
        u(t, "class", "notice-title df aic ooo"),
        u(_, "class", "iconfont ml4 f16"),
        u(g, "href", (R = r[0](te.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS"))),
        u(g, "target", "_blank"),
        u(m, "class", "df aic BLUE cp"),
        u(l, "class", "all df fdr jcsb lh24 T2 f14 fw1 svelte-1a17egd"),
        u(w, "class", "body mt8 svelte-1a17egd"),
        u(e, "class", "wrap br12 T2 svelte-1a17egd");
    },
    m(U, B) {
      V(U, e, B),
        d(e, l),
        d(l, t),
        d(t, n),
        d(n, s),
        d(t, i),
        d(t, o),
        d(o, c),
        d(l, f),
        d(l, m),
        d(m, g),
        d(g, E),
        d(g, _),
        d(_, S),
        d(e, P),
        d(e, w);
      for (let A = 0; A < v.length; A += 1) v[A].m(w, null);
    },
    p(U, [B]) {
      B & 1 &&
        R !== (R = U[0](te.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS")) &&
        u(g, "href", R),
        B & 10 &&
          ((p = U[1] || []),
          (v = vl(v, B, I, 1, U, p, C, w, bl, Ht, null, Bt)));
    },
    i: x,
    o: x,
    d(U) {
      U && h(e);
      for (let B = 0; B < v.length; B += 1) v[B].d();
    },
  };
}
function Br(r, e, l) {
  let t, n;
  Q(r, pe, (o) => l(0, (t = o))), Q(r, Yl, (o) => l(1, (n = o)));
  const s = de("LG");
  function i(o) {
    return function () {
      Te.track("web_click", {
        $screen_name: "home",
        $element_content: "announcement_" + o.detail.title,
      });
    };
  }
  return [t, n, s, i];
}
class Vr extends re {
  constructor(e) {
    super(), ie(this, e, Br, Ur, se, {});
  }
}
function Wt(r, e, l) {
  const t = r.slice();
  return (t[5] = e[l]), t;
}
function Gt(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = q("")), this.h();
    },
    l(t) {
      e = k(t, "I", { class: !0 });
      var n = T(e);
      (l = K(n, "")), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "iconfont f24");
    },
    m(t, n) {
      V(t, e, n), d(e, l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function zt(r, e) {
  let l,
    t = e[5].text + "",
    n,
    s,
    i,
    o,
    a,
    c = e[1] === e[5].value && Gt();
  return {
    key: r,
    first: null,
    c() {
      (l = b("li")), (n = q(t)), (s = W()), c && c.c(), (i = W()), this.h();
    },
    l(f) {
      l = k(f, "LI", { class: !0 });
      var m = T(l);
      (n = K(m, t)),
        (s = G(m)),
        c && c.l(m),
        (i = G(m)),
        m.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "item cp df aic jcsb svelte-1nc6bt"),
        Z(l, "active", e[1] === e[5].value),
        (this.first = l);
    },
    m(f, m) {
      V(f, l, m),
        d(l, n),
        d(l, s),
        c && c.m(l, null),
        d(l, i),
        o ||
          ((a = ne(l, "click", function () {
            Me(e[2](e[5].value)) && e[2](e[5].value).apply(this, arguments);
          })),
          (o = !0));
    },
    p(f, m) {
      (e = f),
        m & 1 && t !== (t = e[5].text + "") && ge(n, t),
        e[1] === e[5].value
          ? c || ((c = Gt()), c.c(), c.m(l, i))
          : c && (c.d(1), (c = null)),
        m & 3 && Z(l, "active", e[1] === e[5].value);
    },
    d(f) {
      f && h(l), c && c.d(), (o = !1), a();
    },
  };
}
function Hr(r) {
  let e,
    l,
    t,
    n = [],
    s = new Map(),
    i = r[0];
  const o = (a) => a[5].value;
  for (let a = 0; a < i.length; a += 1) {
    let c = Wt(r, i, a),
      f = o(c);
    s.set(f, (n[a] = zt(f, c)));
  }
  return {
    c() {
      (e = b("div")), (l = b("section")), (t = b("ul"));
      for (let a = 0; a < n.length; a += 1) n[a].c();
      this.h();
    },
    l(a) {
      e = k(a, "DIV", { class: !0 });
      var c = T(e);
      l = k(c, "SECTION", { class: !0 });
      var f = T(l);
      t = k(f, "UL", { class: !0 });
      var m = T(t);
      for (let g = 0; g < n.length; g += 1) n[g].l(m);
      m.forEach(h), f.forEach(h), c.forEach(h), this.h();
    },
    h() {
      u(t, "class", "wrap-ul df fww lh32 T2 svelte-1nc6bt"),
        u(l, "class", "B2 svelte-1nc6bt"),
        u(e, "class", "wrap dib br12 fw1 f14 svelte-1nc6bt");
    },
    m(a, c) {
      V(a, e, c), d(e, l), d(l, t);
      for (let f = 0; f < n.length; f += 1) n[f].m(t, null);
    },
    p(a, [c]) {
      c & 7 && ((i = a[0]), (n = vl(n, c, o, 1, a, i, s, t, bl, zt, null, Wt)));
    },
    i: x,
    o: x,
    d(a) {
      a && h(e);
      for (let c = 0; c < n.length; c += 1) n[c].d();
    },
  };
}
function Wr(r, e, l) {
  let t, n, s;
  Q(r, Qe, (a) => l(3, (t = a))),
    Q(r, kl, (a) => l(0, (n = a))),
    Q(r, Se, (a) => l(1, (s = a)));
  function i(a) {
    return function () {
      if (t === "Login") {
        o({ lang: a });
        return;
      }
      Se.set(a);
    };
  }
  async function o(a) {
    const { data: c, error: f } = await wl.updateProfile(a);
    if (c) {
      Fe.next(c);
      const { lang: m } = a;
      m && Se.set(m);
    }
    f && Le.send("toast", "error", f);
  }
  return [n, s, i];
}
class Gr extends re {
  constructor(e) {
    super(), ie(this, e, Wr, Hr, se, {});
  }
}
function zr(r) {
  let e, l, t;
  return (
    (l = new Gr({})),
    {
      c() {
        (e = b("div")), y(l.$$.fragment), this.h();
      },
      l(n) {
        e = k(n, "DIV", { class: !0 });
        var s = T(e);
        X(l.$$.fragment, s), s.forEach(h), this.h();
      },
      h() {
        u(e, "class", "wrap p12 T2 svelte-1rmh303");
      },
      m(n, s) {
        V(n, e, s), Y(l, e, null), (t = !0);
      },
      p: x,
      i(n) {
        t || (O(l.$$.fragment, n), (t = !0));
      },
      o(n) {
        M(l.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && h(e), j(l);
      },
    }
  );
}
class Fr extends re {
  constructor(e) {
    super(), ie(this, e, null, zr, se, {});
  }
}
function yr(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o = r[3] && Ft(r),
    a = !_e.isServer && jr(r);
  return (
    (s = new ue({
      props: {
        class: "ml10",
        placement: We,
        modifiers: r[11],
        color: r[4],
        hoverColor: r[4],
        noIcon: !0,
        $$slots: { trigger: [li], default: [ti] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        o && o.c(),
          (e = W()),
          a && a.c(),
          (l = W()),
          (t = b("div")),
          (n = W()),
          y(s.$$.fragment),
          this.h();
      },
      l(c) {
        o && o.l(c),
          (e = G(c)),
          a && a.l(c),
          (l = G(c)),
          (t = k(c, "DIV", { class: !0 })),
          T(t).forEach(h),
          (n = G(c)),
          X(s.$$.fragment, c),
          this.h();
      },
      h() {
        u(t, "class", "split ml10 svelte-u1nusg");
      },
      m(c, f) {
        o && o.m(c, f),
          V(c, e, f),
          a && a.m(c, f),
          V(c, l, f),
          V(c, t, f),
          V(c, n, f),
          Y(s, c, f),
          (i = !0);
      },
      p(c, f) {
        c[3]
          ? o
            ? (o.p(c, f), f & 8 && O(o, 1))
            : ((o = Ft(c)), o.c(), O(o, 1), o.m(e.parentNode, e))
          : o &&
            (ce(),
            M(o, 1, 1, () => {
              o = null;
            }),
            fe()),
          _e.isServer || a.p(c, f);
        const m = {};
        f & 16 && (m.color = c[4]),
          f & 16 && (m.hoverColor = c[4]),
          f & 134217728 && (m.$$scope = { dirty: f, ctx: c }),
          s.$set(m);
      },
      i(c) {
        i || (O(o), O(a), O(s.$$.fragment, c), (i = !0));
      },
      o(c) {
        M(o), M(a), M(s.$$.fragment, c), (i = !1);
      },
      d(c) {
        o && o.d(c),
          c && h(e),
          a && a.d(c),
          c && h(l),
          c && h(t),
          c && h(n),
          j(s, c);
      },
    }
  );
}
function Ft(r) {
  let e, l;
  return (
    (e = new ue({
      props: { noIcon: !0, $$slots: { trigger: [Yr] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 134217728 && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Yr(r) {
  let e, l, t, n, s;
  return {
    c() {
      (e = b("div")), (l = b("img")), this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0, slot: !0 });
      var o = T(e);
      (l = k(o, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        o.forEach(h),
        this.h();
    },
    h() {
      u(l, "width", "28"),
        u(l, "height", "42"),
        le(l.src, (t = Xl.BONUS_ICON)) || u(l, "src", t),
        u(l, "alt", "bonus"),
        u(e, "class", "ph12 mr10"),
        u(e, "slot", "trigger");
    },
    m(i, o) {
      V(i, e, o), d(e, l), n || ((s = ne(e, "click", r[17])), (n = !0));
    },
    p: x,
    d(i) {
      i && h(e), (n = !1), s();
    },
  };
}
function jr(r) {
  let e, l, t, n;
  const s = [qr, Xr],
    i = [];
  function o(a, c) {
    return a[6] ? 0 : a[1] ? -1 : 1;
  }
  return (
    ~(l = o(r)) && (t = i[l] = s[l](r)),
    {
      c() {
        (e = b("div")), t && t.c(), this.h();
      },
      l(a) {
        e = k(a, "DIV", { class: !0 });
        var c = T(e);
        t && t.l(c), c.forEach(h), this.h();
      },
      h() {
        u(e, "class", "df aic");
      },
      m(a, c) {
        V(a, e, c), ~l && i[l].m(e, null), (n = !0);
      },
      p(a, c) {
        let f = l;
        (l = o(a)),
          l === f
            ? ~l && i[l].p(a, c)
            : (t &&
                (ce(),
                M(i[f], 1, 1, () => {
                  i[f] = null;
                }),
                fe()),
              ~l
                ? ((t = i[l]),
                  t ? t.p(a, c) : ((t = i[l] = s[l](a)), t.c()),
                  O(t, 1),
                  t.m(e, null))
                : (t = null));
      },
      i(a) {
        n || (O(t), (n = !0));
      },
      o(a) {
        M(t), (n = !1);
      },
      d(a) {
        a && h(e), ~l && i[l].d();
      },
    }
  );
}
function Xr(r) {
  let e,
    l,
    t = r[8](L.LogIn) + "",
    n,
    s,
    i,
    o,
    a = r[8](L.RegisterNow) + "",
    c,
    f,
    m;
  return {
    c() {
      (e = b("div")),
        (l = b("span")),
        (n = q(t)),
        (s = W()),
        (i = b("div")),
        (o = b("span")),
        (c = q(a)),
        this.h();
    },
    l(g) {
      e = k(g, "DIV", {
        class: !0,
        "data-gac": !0,
        "data-gaa": !0,
        "data-gal": !0,
      });
      var $ = T(e);
      l = k($, "SPAN", {});
      var E = T(l);
      (n = K(E, t)),
        E.forEach(h),
        $.forEach(h),
        (s = G(g)),
        (i = k(g, "DIV", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
        }));
      var _ = T(i);
      o = k(_, "SPAN", {});
      var S = T(o);
      (c = K(S, a)), S.forEach(h), _.forEach(h), this.h();
    },
    h() {
      u(e, "class", "login mr12 T2 ga home-login svelte-u1nusg"),
        u(e, "data-gac", "user.login"),
        u(e, "data-gaa", "link_click"),
        u(e, "data-gal", "header.login"),
        u(i, "class", "btn ml8 ga home-register svelte-u1nusg"),
        u(i, "data-gac", "user.register"),
        u(i, "data-gaa", "link_click"),
        u(i, "data-gal", "header.register");
    },
    m(g, $) {
      V(g, e, $),
        d(e, l),
        d(l, n),
        V(g, s, $),
        V(g, i, $),
        d(i, o),
        d(o, c),
        f || ((m = [ne(e, "click", r[14]), ne(i, "click", r[13])]), (f = !0));
    },
    p: x,
    i: x,
    o: x,
    d(g) {
      g && h(e), g && h(s), g && h(i), (f = !1), Ye(m);
    },
  };
}
function qr(r) {
  let e, l, t, n, s;
  (e = new cl({
    props: { type: "primary", $$slots: { default: [Kr] }, $$scope: { ctx: r } },
  })),
    e.$on("click", r[16]);
  let i = !r[9] && Qr(r);
  return (
    (n = new ue({
      props: {
        width: "280px",
        class: "ml10",
        placement: We,
        modifiers: r[11],
        color: r[4],
        hoverColor: r[4],
        noIcon: !0,
        $$slots: { trigger: [ei], default: [xr] },
        $$scope: { ctx: r },
      },
    })),
    n.$on("mouseenter", r[15]("account")),
    {
      c() {
        y(e.$$.fragment), (l = W()), i && i.c(), (t = W()), y(n.$$.fragment);
      },
      l(o) {
        X(e.$$.fragment, o),
          (l = G(o)),
          i && i.l(o),
          (t = G(o)),
          X(n.$$.fragment, o);
      },
      m(o, a) {
        Y(e, o, a),
          V(o, l, a),
          i && i.m(o, a),
          V(o, t, a),
          Y(n, o, a),
          (s = !0);
      },
      p(o, a) {
        const c = {};
        a & 134217728 && (c.$$scope = { dirty: a, ctx: o }),
          e.$set(c),
          o[9] || i.p(o, a);
        const f = {};
        a & 16 && (f.color = o[4]),
          a & 16 && (f.hoverColor = o[4]),
          a & 134217764 && (f.$$scope = { dirty: a, ctx: o }),
          n.$set(f);
      },
      i(o) {
        s || (O(e.$$.fragment, o), O(i), O(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        M(e.$$.fragment, o), M(i), M(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        j(e, o), o && h(l), i && i.d(o), o && h(t), j(n, o);
      },
    }
  );
}
function Kr(r) {
  let e,
    l,
    t,
    n,
    s,
    i = r[8](L.Deposit) + "",
    o;
  return {
    c() {
      (e = b("div")),
        (l = b("i")),
        (t = q("")),
        (n = W()),
        (s = b("div")),
        (o = q(i)),
        this.h();
    },
    l(a) {
      e = k(a, "DIV", { class: !0 });
      var c = T(e);
      l = k(c, "I", { class: !0 });
      var f = T(l);
      (t = K(f, "")),
        f.forEach(h),
        (n = G(c)),
        (s = k(c, "DIV", { class: !0 }));
      var m = T(s);
      (o = K(m, i)), m.forEach(h), c.forEach(h), this.h();
    },
    h() {
      u(l, "class", "iconfont fw1"),
        u(s, "class", "ml8 fw2"),
        u(e, "class", "df aic jcc");
    },
    m(a, c) {
      V(a, e, c), d(e, l), d(l, t), d(e, n), d(e, s), d(s, o);
    },
    p: x,
    d(a) {
      a && h(e);
    },
  };
}
function Qr(r) {
  let e, l;
  return (
    (e = new ue({
      props: {
        width: "280px",
        class: "ml20",
        placement: We,
        modifiers: r[11],
        color: r[4],
        hoverColor: r[4],
        noIcon: !0,
        $$slots: { trigger: [Zr], default: [Jr] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("mouseenter", r[15]("assets")),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 16 && (s.color = t[4]),
          n & 16 && (s.hoverColor = t[4]),
          n & 134217764 && (s.$$scope = { dirty: n, ctx: t }),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Jr(r) {
  let e, l;
  return (
    (e = new Sl({
      props: { loader: r[10].assets.loader, start: r[2].assets },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 4 && (s.start = t[2].assets), e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Zr(r) {
  let e, l, t, n, s, i;
  return {
    c() {
      (e = b("div")), (l = b("div")), (t = b("i")), (n = q("")), this.h();
    },
    l(o) {
      e = k(o, "DIV", { slot: !0, class: !0 });
      var a = T(e);
      l = k(a, "DIV", { class: !0 });
      var c = T(l);
      t = k(c, "I", { class: !0 });
      var f = T(t);
      (n = K(f, "")), f.forEach(h), c.forEach(h), a.forEach(h), this.h();
    },
    h() {
      u(t, "class", "iconfont f1 f24"),
        u(l, "class", "circle-icon brp50 svelte-u1nusg"),
        u(e, "slot", "trigger"),
        u(e, "class", "assets icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(o, a) {
      V(o, e, a),
        d(e, l),
        d(l, t),
        d(t, n),
        s || ((i = ne(e, "click", r[21])), (s = !0));
    },
    p: x,
    d(o) {
      o && h(e), (s = !1), i();
    },
  };
}
function xr(r) {
  let e, l;
  return (
    (e = new Sl({
      props: { loader: r[10].account.loader, start: r[2].account },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 4 && (s.start = t[2].account), e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ei(r) {
  let e, l, t, n, s, i;
  return {
    c() {
      (e = b("div")), (l = b("div")), (t = b("i")), (n = q("")), this.h();
    },
    l(o) {
      e = k(o, "DIV", { slot: !0, class: !0 });
      var a = T(e);
      l = k(a, "DIV", { class: !0 });
      var c = T(l);
      t = k(c, "I", { class: !0 });
      var f = T(t);
      (n = K(f, "")), f.forEach(h), c.forEach(h), a.forEach(h), this.h();
    },
    h() {
      u(t, "class", "iconfont f1 f24"),
        u(l, "class", "circle-icon brp50 svelte-u1nusg"),
        u(e, "slot", "trigger"),
        u(e, "class", "account icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(o, a) {
      V(o, e, a),
        d(e, l),
        d(l, t),
        d(t, n),
        s || ((i = ne(e, "click", r[22])), (s = !0));
    },
    p: x,
    d(o) {
      o && h(e), (s = !1), i();
    },
  };
}
function ti(r) {
  let e, l;
  return (
    (e = new Nr({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function li(r) {
  let e, l, t, n;
  return {
    c() {
      (e = b("div")), (l = b("div")), (t = b("i")), (n = q("")), this.h();
    },
    l(s) {
      e = k(s, "DIV", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "DIV", { class: !0 });
      var o = T(l);
      t = k(o, "I", { class: !0 });
      var a = T(t);
      (n = K(a, "")), a.forEach(h), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(t, "class", "iconfont f1 f24"),
        u(l, "class", "circle-icon brp50 svelte-u1nusg"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, t), d(t, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function ni(r) {
  let e, l;
  return (
    (e = new Vr({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function yt(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = q(r[7])), this.h();
    },
    l(t) {
      e = k(t, "I", { class: !0 });
      var n = T(e);
      (l = K(n, r[7])), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "circle pa f10 svelte-u1nusg");
    },
    m(t, n) {
      V(t, e, n), d(e, l);
    },
    p(t, n) {
      n & 128 && ge(l, t[7]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function ri(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o = r[6] && r[7] > 0 && yt(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("i")),
        (n = q("")),
        (s = W()),
        (i = b("span")),
        o && o.c(),
        this.h();
    },
    l(a) {
      e = k(a, "DIV", { slot: !0, class: !0 });
      var c = T(e);
      l = k(c, "DIV", { class: !0 });
      var f = T(l);
      t = k(f, "I", { class: !0 });
      var m = T(t);
      (n = K(m, "")),
        m.forEach(h),
        f.forEach(h),
        (s = G(c)),
        (i = k(c, "SPAN", { class: !0 }));
      var g = T(i);
      o && o.l(g), g.forEach(h), c.forEach(h), this.h();
    },
    h() {
      u(t, "class", "iconfont f1 f24"),
        u(l, "class", "circle-icon brp50 svelte-u1nusg"),
        u(i, "class", "icon df pr svelte-u1nusg"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(a, c) {
      V(a, e, c),
        d(e, l),
        d(l, t),
        d(t, n),
        d(e, s),
        d(e, i),
        o && o.m(i, null);
    },
    p(a, c) {
      a[6] && a[7] > 0
        ? o
          ? o.p(a, c)
          : ((o = yt(a)), o.c(), o.m(i, null))
        : o && (o.d(1), (o = null));
    },
    d(a) {
      a && h(e), o && o.d();
    },
  };
}
function ii(r) {
  let e, l;
  return (
    (e = new Fr({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function si(r) {
  let e, l, t, n;
  return {
    c() {
      (e = b("div")), (l = b("div")), (t = b("i")), (n = q("")), this.h();
    },
    l(s) {
      e = k(s, "DIV", { slot: !0, class: !0 });
      var i = T(e);
      l = k(i, "DIV", { class: !0 });
      var o = T(l);
      t = k(o, "I", { class: !0 });
      var a = T(t);
      (n = K(a, "")), a.forEach(h), o.forEach(h), i.forEach(h), this.h();
    },
    h() {
      u(t, "class", "iconfont f1 f24"),
        u(l, "class", "circle-icon brp50 svelte-u1nusg"),
        u(e, "slot", "trigger"),
        u(e, "class", "icon-con df aic cp fw1 svelte-u1nusg");
    },
    m(s, i) {
      V(s, e, i), d(e, l), d(l, t), d(t, n);
    },
    p: x,
    d(s) {
      s && h(e);
    },
  };
}
function ai(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a = !_e.isJapanSite && yr(r);
  return (
    (n = new ue({
      props: {
        class: "ml10",
        placement: We,
        modifiers: r[11],
        color: r[4],
        hoverColor: r[4],
        noIcon: !0,
        $$slots: { trigger: [ri], default: [ni] },
        $$scope: { ctx: r },
      },
    })),
    n.$on("mouseenter", r[12]),
    (i = new ue({
      props: {
        class: "ml10",
        placement: We,
        modifiers: r[11],
        color: r[4],
        hoverColor: r[4],
        noIcon: !0,
        $$slots: { trigger: [si], default: [ii] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          a && a.c(),
          (t = W()),
          y(n.$$.fragment),
          (s = W()),
          y(i.$$.fragment),
          this.h();
      },
      l(c) {
        e = k(c, "DIV", { class: !0 });
        var f = T(e);
        l = k(f, "DIV", { class: !0 });
        var m = T(l);
        a && a.l(m),
          (t = G(m)),
          X(n.$$.fragment, m),
          (s = G(m)),
          X(i.$$.fragment, m),
          m.forEach(h),
          f.forEach(h),
          this.h();
      },
      h() {
        u(l, "class", "main df fdr aic svelte-u1nusg"),
          Z(l, "top", r[0]),
          u(e, "class", "df");
      },
      m(c, f) {
        V(c, e, f),
          d(e, l),
          a && a.m(l, null),
          d(l, t),
          Y(n, l, null),
          d(l, s),
          Y(i, l, null),
          (o = !0);
      },
      p(c, [f]) {
        _e.isJapanSite || a.p(c, f);
        const m = {};
        f & 16 && (m.color = c[4]),
          f & 16 && (m.hoverColor = c[4]),
          f & 134217920 && (m.$$scope = { dirty: f, ctx: c }),
          n.$set(m);
        const g = {};
        f & 16 && (g.color = c[4]),
          f & 16 && (g.hoverColor = c[4]),
          f & 134217728 && (g.$$scope = { dirty: f, ctx: c }),
          i.$set(g),
          (!o || f & 1) && Z(l, "top", c[0]);
      },
      i(c) {
        o || (O(a), O(n.$$.fragment, c), O(i.$$.fragment, c), (o = !0));
      },
      o(c) {
        M(a), M(n.$$.fragment, c), M(i.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && h(e), a && a.d(), j(n), j(i);
      },
    }
  );
}
const We = "bottom";
function oi(r, e, l) {
  let t, n, s, i, o, a;
  Q(r, pe, (N) => l(5, (n = N))),
    Q(r, je, (N) => l(6, (s = N))),
    Q(r, jl, (N) => l(7, (i = N))),
    Q(r, Qe, (N) => l(19, (o = N))),
    Q(r, Fe, (N) => l(20, (a = N)));
  let { isTop: c = !1 } = e,
    { modalUI: f = !1 } = e,
    { hiddenAccess: m = !1 } = e;
  const g = de("LG"),
    $ = Ve.isMock(),
    E = {
      assets: {
        loader: () =>
          rt(
            () => import("./chunk-db734661.js"),
            [
              "js/chunk-db734661.js",
              "js/chunk-707a9f2f.js",
              "js/app-7aa7d139.js",
              "css/Header-2306288d.css",
              "js/chunk-e2f3898b.js",
              "js/chunk-11658a4c.js",
              "js/chunk-dc44f90f.js",
              "js/chunk-d2488ba6.js",
              "js/chunk-e62d3684.js",
              "js/chunk-36bfb606.js",
              "js/chunk-04e1abfe.js",
              "css/AssetsDropDown-fb05b39d.css",
            ]
          ),
      },
      account: {
        loader: () =>
          rt(
            () => import("./chunk-8b9b539a.js"),
            [
              "js/chunk-8b9b539a.js",
              "js/chunk-707a9f2f.js",
              "js/app-7aa7d139.js",
              "css/Header-2306288d.css",
              "js/chunk-d2488ba6.js",
              "js/chunk-04e1abfe.js",
              "css/AccountDropDown-7e878509.css",
            ]
          ),
      },
    },
    _ = [{ name: "preventOverflow", options: { padding: 40 } }];
  let S = {},
    R = !1;
  function P() {
    i > 0 && s && w();
  }
  async function w() {
    const N = { itemKey: "announcement" },
      { data: D, error: z } = await ql.browseTime(N);
    D && Kl(s ? "Login" : "Logout"), z && Le.send("toast", "error", z);
  }
  function v() {
    f ? Le.send("modal-register", "startRegister") : Al(n);
  }
  function C() {
    const N = location.origin + location.pathname + location.search;
    vr(n, N);
  }
  function p(N) {
    return function () {
      l(2, (S = { ...S, [N]: !0 }));
      const { mouseenterHandler: D } = E[N] || {};
      D && D();
    };
  }
  function I() {
    Te.track("web_click", {
      $screen_name: "home",
      $element_content: "navigation_deposit",
    }),
      $l({ LG: g });
  }
  function U() {
    Te.track("web_click", {
      $screen_name: "home",
      $element_content: "navigation_rewards_hub",
    }),
      Re(n(H.BONUS.pathname));
  }
  function B(N, D) {
    if (D === "Logout") {
      l(3, (R = !0));
      return;
    }
    if (N && N.createTime) {
      const z = N.createTime,
        J = 1e3 * 60 * 60 * 24;
      if (Date.now() - (z + J * 30) < 0) {
        l(3, (R = !0));
        return;
      }
      l(3, (R = !1));
    }
  }
  const A = () => location.assign(n(H.ASSETS_OVERVIEW.pathname)),
    F = () => location.assign(n(H.ACCOUNT_OVERVIEW.pathname));
  return (
    (r.$$set = (N) => {
      "isTop" in N && l(0, (c = N.isTop)),
        "modalUI" in N && l(18, (f = N.modalUI)),
        "hiddenAccess" in N && l(1, (m = N.hiddenAccess));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1 &&
        l(4, (t = c ? "var(--menu-dark)" : "var(--menu-light)")),
        r.$$.dirty & 1,
        r.$$.dirty & 1572864 && B(a, o);
    }),
    [c, m, S, R, t, n, s, i, g, $, E, _, P, v, C, p, I, U, f, o, a, A, F]
  );
}
class Pl extends re {
  constructor(e) {
    super(),
      ie(this, e, oi, ai, se, { isTop: 0, modalUI: 18, hiddenAccess: 1 });
  }
}
function Yt(r, e, l) {
  const t = r.slice();
  return (t[11] = e[l]), t;
}
function jt(r, e, l) {
  const t = r.slice();
  return (t[14] = e[l]), t;
}
function ci(r) {
  let e,
    l = r[11].title + "",
    t;
  return {
    c() {
      (e = b("a")), (t = q(l)), this.h();
    },
    l(n) {
      e = k(n, "A", { class: !0, href: !0 });
      var s = T(e);
      (t = K(s, l)), s.forEach(h), this.h();
    },
    h() {
      u(e, "class", "header-menu svelte-l7bfp5"),
        u(e, "href", r[11].url),
        Z(e, "current", r[6](r[11]));
    },
    m(n, s) {
      V(n, e, s), d(e, t);
    },
    p: x,
    i: x,
    o: x,
    d(n) {
      n && h(e);
    },
  };
}
function fi(r) {
  let e, l;
  return (
    (e = new ue({
      props: {
        hoverColor: r[6](r[11])
          ? r[3][r[1]].activeColor
          : r[3][r[1]].bannerColor,
        color: r[6](r[11]) ? r[3][r[1]].activeColor : r[3][r[1]].bannerColor,
        $$slots: { trigger: [hi], default: [ui] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 2 &&
          (s.hoverColor = t[6](t[11])
            ? t[3][t[1]].activeColor
            : t[3][t[1]].bannerColor),
          n & 2 &&
            (s.color = t[6](t[11])
              ? t[3][t[1]].activeColor
              : t[3][t[1]].bannerColor),
          n & 512 && (s.$$scope = { dirty: n, ctx: t }),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Xt(r) {
  let e, l;
  return (
    (e = new ae({
      props: { link: r[14].url, target: "_self", title: r[14].title },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p: x,
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ui(r) {
  let e,
    l,
    t = r[11].children,
    n = [];
  for (let i = 0; i < t.length; i += 1) n[i] = Xt(jt(r, t, i));
  const s = (i) =>
    M(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0 });
      var o = T(e);
      for (let a = 0; a < n.length; a += 1) n[a].l(o);
      o.forEach(h), this.h();
    },
    h() {
      u(e, "class", "menu-items svelte-l7bfp5");
    },
    m(i, o) {
      V(i, e, o);
      for (let a = 0; a < n.length; a += 1) n[a].m(e, null);
      l = !0;
    },
    p(i, o) {
      if (o & 16) {
        t = i[11].children;
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = jt(i, t, a);
          n[a]
            ? (n[a].p(c, o), O(n[a], 1))
            : ((n[a] = Xt(c)), n[a].c(), O(n[a], 1), n[a].m(e, null));
        }
        for (ce(), a = t.length; a < n.length; a += 1) s(a);
        fe();
      }
    },
    i(i) {
      if (!l) {
        for (let o = 0; o < t.length; o += 1) O(n[o]);
        l = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1) M(n[o]);
      l = !1;
    },
    d(i) {
      i && h(e), Pe(n, i);
    },
  };
}
function hi(r) {
  let e,
    l = r[11].title + "",
    t;
  return {
    c() {
      (e = b("span")), (t = q(l)), this.h();
    },
    l(n) {
      e = k(n, "SPAN", { slot: !0, class: !0 });
      var s = T(e);
      (t = K(s, l)), s.forEach(h), this.h();
    },
    h() {
      u(e, "slot", "trigger"),
        u(e, "class", "header-menu svelte-l7bfp5"),
        Z(e, "current", r[6](r[11]));
    },
    m(n, s) {
      V(n, e, s), d(e, t);
    },
    p: x,
    d(n) {
      n && h(e);
    },
  };
}
function qt(r) {
  let e, l, t, n;
  const s = [fi, ci],
    i = [];
  function o(a, c) {
    return a[11].children ? 0 : 1;
  }
  return (
    (e = o(r)),
    (l = i[e] = s[e](r)),
    {
      c() {
        l.c(), (t = he());
      },
      l(a) {
        l.l(a), (t = he());
      },
      m(a, c) {
        i[e].m(a, c), V(a, t, c), (n = !0);
      },
      p(a, c) {
        l.p(a, c);
      },
      i(a) {
        n || (O(l), (n = !0));
      },
      o(a) {
        M(l), (n = !1);
      },
      d(a) {
        i[e].d(a), a && h(t);
      },
    }
  );
}
function mi(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a,
    c,
    f = r[5].title + "",
    m,
    g,
    $,
    E = r[4],
    _ = [];
  for (let w = 0; w < E.length; w += 1) _[w] = qt(Yt(r, E, w));
  const S = (w) =>
      M(_[w], 1, 1, () => {
        _[w] = null;
      }),
    R = r[8].default,
    P = ve(R, r, r[9], null);
  return {
    c() {
      (e = b("div")), (l = b("a")), (t = b("img")), (i = W()), (o = b("div"));
      for (let w = 0; w < _.length; w += 1) _[w].c();
      (a = W()), (c = b("a")), (m = q(f)), (g = W()), P && P.c(), this.h();
    },
    l(w) {
      e = k(w, "DIV", { class: !0, style: !0 });
      var v = T(e);
      l = k(v, "A", { class: !0, href: !0, target: !0 });
      var C = T(l);
      (t = k(C, "IMG", { alt: !0, src: !0, class: !0 })),
        C.forEach(h),
        (i = G(v)),
        (o = k(v, "DIV", { class: !0 }));
      var p = T(o);
      for (let U = 0; U < _.length; U += 1) _[U].l(p);
      (a = G(p)), (c = k(p, "A", { class: !0, href: !0 }));
      var I = T(c);
      (m = K(I, f)),
        I.forEach(h),
        p.forEach(h),
        (g = G(v)),
        P && P.l(v),
        v.forEach(h),
        this.h();
    },
    h() {
      u(t, "alt", "Logo"),
        le(t.src, (n = r[3][r[1]].logo)) || u(t, "src", n),
        u(t, "class", "svelte-l7bfp5"),
        u(l, "class", "df mt2 logo svelte-l7bfp5"),
        u(l, "href", (s = r[2](H.HOME.pathname))),
        u(l, "target", "_self"),
        u(c, "class", "header-menu svelte-l7bfp5"),
        u(c, "href", r[5].url),
        Z(c, "current", r[6](r[5])),
        u(o, "class", "navs f1 df jcc aic svelte-l7bfp5"),
        u(e, "class", "header-place df aic svelte-l7bfp5"),
        oe(e, "--bannerBg", r[3][r[1]].bannerBg),
        oe(e, "--bannerColor", r[3][r[1]].bannerColor),
        oe(e, "--activeColor", r[3][r[1]].activeColor),
        Z(e, "web3", r[0]);
    },
    m(w, v) {
      V(w, e, v), d(e, l), d(l, t), d(e, i), d(e, o);
      for (let C = 0; C < _.length; C += 1) _[C].m(o, null);
      d(o, a), d(o, c), d(c, m), d(e, g), P && P.m(e, null), ($ = !0);
    },
    p(w, [v]) {
      if (
        ((!$ || (v & 2 && !le(t.src, (n = w[3][w[1]].logo)))) && u(t, "src", n),
        (!$ || (v & 4 && s !== (s = w[2](H.HOME.pathname)))) && u(l, "href", s),
        v & 90)
      ) {
        E = w[4];
        let C;
        for (C = 0; C < E.length; C += 1) {
          const p = Yt(w, E, C);
          _[C]
            ? (_[C].p(p, v), O(_[C], 1))
            : ((_[C] = qt(p)), _[C].c(), O(_[C], 1), _[C].m(o, a));
        }
        for (ce(), C = E.length; C < _.length; C += 1) S(C);
        fe();
      }
      P &&
        P.p &&
        (!$ || v & 512) &&
        be(P, R, w, w[9], $ ? $e(R, w[9], v, null) : ke(w[9]), null),
        (!$ || v & 2) && oe(e, "--bannerBg", w[3][w[1]].bannerBg),
        (!$ || v & 2) && oe(e, "--bannerColor", w[3][w[1]].bannerColor),
        (!$ || v & 2) && oe(e, "--activeColor", w[3][w[1]].activeColor),
        (!$ || v & 1) && Z(e, "web3", w[0]);
    },
    i(w) {
      if (!$) {
        for (let v = 0; v < E.length; v += 1) O(_[v]);
        O(P, w), ($ = !0);
      }
    },
    o(w) {
      _ = _.filter(Boolean);
      for (let v = 0; v < _.length; v += 1) M(_[v]);
      M(P, w), ($ = !1);
    },
    d(w) {
      w && h(e), Pe(_, w), P && P.d(w);
    },
  };
}
function di(r, e, l) {
  let t;
  Q(r, pe, (E) => l(2, (t = E)));
  let { $$slots: n = {}, $$scope: s } = e,
    { web3: i = !1 } = e,
    { isTop: o = !1 } = e,
    { mode: a = "default" } = e;
  const c = de("LG"),
    f = {
      default: {
        logo: Oe.LOGO_PULSE_LIGHT,
        bannerBg: "#fff",
        bannerColor: "#000",
        activeColor: "#45e555",
      },
      dark: {
        logo: Oe.LOGO_PULSE_DARK,
        bannerBg: "transparent",
        bannerColor: "#fff",
        activeColor: "#45e555",
      },
    },
    m = [
      { title: c(L.Home), url: t(H.HOME.pathname) },
      {
        title: c(L.Chat2Earn),
        url: t(H.WEB3_SOCIAL_TRADE_PT_REWARDS.pathname),
      },
      {
        title: c(Ql.Trade),
        children: [
          {
            title: c(L.BuyCrypto),
            url: t(H.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname),
          },
          { title: c(L.Spot), url: te.PHEMEX_SPOT_TRADE + "/PTUSDT" },
          { title: c(L.Contract), url: te.PHEMEX_CONTRACT_TRADE_USDS },
        ],
      },
      {
        title: c(L.PhemexToken),
        children: [
          {
            title: c(L.PhemexTokenBenefits),
            url: t(H.WEB3_EQUITY_BENEFITS.pathname),
          },
          { title: c(L.Web3Whitepaper), url: te.Web3Whitepaper },
        ],
      },
    ],
    g = {
      title: c(L.LaunchPulseApp),
      url: t(H.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname),
    };
  function $(E) {
    if (_e.isBrowser) {
      const { url: _, children: S } = E;
      if (window.location.pathname === _) return !0;
      if (S) {
        for (let R = 0; R < S.length; R++) if ($(S[R])) return !0;
      }
    }
    return !1;
  }
  return (
    (r.$$set = (E) => {
      "web3" in E && l(0, (i = E.web3)),
        "isTop" in E && l(7, (o = E.isTop)),
        "mode" in E && l(1, (a = E.mode)),
        "$$scope" in E && l(9, (s = E.$$scope));
    }),
    [i, a, t, f, m, g, $, o, n, s]
  );
}
class _i extends re {
  constructor(e) {
    super(), ie(this, e, di, mi, se, { web3: 0, isTop: 7, mode: 1 });
  }
}
function gi(r) {
  let e, l, t;
  return {
    c() {
      (e = b("div")), (l = b("a")), this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var s = T(e);
      (l = k(s, "A", { class: !0, style: !0, href: !0 })),
        T(l).forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      u(l, "class", "db svelte-27uc3m"),
        u(l, "style", r[1]),
        u(l, "href", (t = r[0](H.DOWNLOAD.pathname))),
        u(e, "class", "wrap svelte-27uc3m");
    },
    m(n, s) {
      V(n, e, s), d(e, l);
    },
    p(n, [s]) {
      s & 1 && t !== (t = n[0](H.DOWNLOAD.pathname)) && u(l, "href", t);
    },
    i: x,
    o: x,
    d(n) {
      n && h(e);
    },
  };
}
function pi(r, e, l) {
  let t;
  Q(r, pe, (i) => l(0, (t = i)));
  const s = `background: url("${`${El.STATIC_URL}/pubimg/3d3bab7bcb9eeef5e6bb42fa6140a159a80d9cc794aa6db3bbdfebe440bc9b10.png`}") no-repeat top center/auto 60px`;
  return [t, s];
}
class vi extends re {
  constructor(e) {
    super(), ie(this, e, pi, gi, se, {});
  }
}
function Kt(r, e, l) {
  const t = r.slice();
  return (t[26] = e[l]), (t[28] = l), t;
}
function Qt(r, e, l) {
  const t = r.slice();
  return (t[29] = e[l]), t;
}
function bi(r) {
  let e, l, t, n, s;
  return (
    (l = new ye({
      props: {
        class: "btn f1",
        type: "common",
        size: "small",
        href: r[0](H.LOGIN.pathname) + "?" + He.stringify({ target: r[9] }),
        $$slots: { default: [$i] },
        $$scope: { ctx: r },
      },
    })),
    (n = new ye({
      props: {
        class: "btn ml16 f1",
        type: "primary",
        size: "small",
        href: "javascript:;",
        $$slots: { default: [Ei] },
        $$scope: { ctx: r },
      },
    })),
    n.$on("click", r[13]),
    {
      c() {
        (e = b("div")), y(l.$$.fragment), (t = W()), y(n.$$.fragment), this.h();
      },
      l(i) {
        e = k(i, "DIV", { class: !0, style: !0 });
        var o = T(e);
        X(l.$$.fragment, o),
          (t = G(o)),
          X(n.$$.fragment, o),
          o.forEach(h),
          this.h();
      },
      h() {
        u(e, "class", "login df aic svelte-1q96dh5"),
          oe(e, "background", "url(" + Ie.H5_MASK + ") no-repeat"),
          oe(e, "background-size", "100% 100%");
      },
      m(i, o) {
        V(i, e, o), Y(l, e, null), d(e, t), Y(n, e, null), (s = !0);
      },
      p(i, o) {
        const a = {};
        o[0] & 1 &&
          (a.href =
            i[0](H.LOGIN.pathname) + "?" + He.stringify({ target: i[9] })),
          o[1] & 2 && (a.$$scope = { dirty: o, ctx: i }),
          l.$set(a);
        const c = {};
        o[1] & 2 && (c.$$scope = { dirty: o, ctx: i }), n.$set(c);
      },
      i(i) {
        s || (O(l.$$.fragment, i), O(n.$$.fragment, i), (s = !0));
      },
      o(i) {
        M(l.$$.fragment, i), M(n.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && h(e), j(l), j(n);
      },
    }
  );
}
function ki(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a = r[5].nickName + "",
    c,
    f,
    m,
    g,
    $,
    E,
    _,
    S,
    R,
    P,
    w;
  return (
    (S = new ye({
      props: {
        class: "btn f1",
        type: "primary",
        size: "small",
        href: r[0](H.ASSETS_OVERVIEW.pathname),
        $$slots: { default: [Ti] },
        $$scope: { ctx: r },
      },
    })),
    (P = new ye({
      props: {
        class: "btn account ml16 f1",
        type: "common",
        size: "small",
        href: r[0](H.ACCOUNT_OVERVIEW.pathname),
        $$slots: { default: [wi] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("a")),
          (l = b("div")),
          (t = b("img")),
          (s = W()),
          (i = b("div")),
          (o = b("div")),
          (c = q(a)),
          (f = W()),
          (m = b("i")),
          (g = q("")),
          (E = W()),
          (_ = b("div")),
          y(S.$$.fragment),
          (R = W()),
          y(P.$$.fragment),
          this.h();
      },
      l(v) {
        e = k(v, "A", { class: !0, href: !0 });
        var C = T(e);
        l = k(C, "DIV", { class: !0 });
        var p = T(l);
        (t = k(p, "IMG", { class: !0, src: !0, alt: !0 })),
          p.forEach(h),
          (s = G(C)),
          (i = k(C, "DIV", { class: !0 }));
        var I = T(i);
        o = k(I, "DIV", { class: !0 });
        var U = T(o);
        (c = K(U, a)), U.forEach(h), (f = G(I)), (m = k(I, "I", { class: !0 }));
        var B = T(m);
        (g = K(B, "")),
          B.forEach(h),
          I.forEach(h),
          C.forEach(h),
          (E = G(v)),
          (_ = k(v, "DIV", { class: !0 }));
        var A = T(_);
        X(S.$$.fragment, A),
          (R = G(A)),
          X(P.$$.fragment, A),
          A.forEach(h),
          this.h();
      },
      h() {
        u(t, "class", "dib wp100 hp100"),
          le(t.src, (n = r[7](r[5].avatar))) || u(t, "src", n),
          u(t, "alt", "avatar"),
          u(l, "class", "avatar ovh svelte-1q96dh5"),
          u(o, "class", "w180 f18 fw3 T2 ooo svelte-1q96dh5"),
          u(m, "class", "iconfont arrow T3 svelte-1q96dh5"),
          u(i, "class", "df jcsb aic f1 ml10 ovh"),
          u(e, "class", "df aic ovh"),
          u(e, "href", ($ = r[0](H.ACCOUNT_OVERVIEW.pathname))),
          u(_, "class", "df jcsb mt10");
      },
      m(v, C) {
        V(v, e, C),
          d(e, l),
          d(l, t),
          d(e, s),
          d(e, i),
          d(i, o),
          d(o, c),
          d(i, f),
          d(i, m),
          d(m, g),
          V(v, E, C),
          V(v, _, C),
          Y(S, _, null),
          d(_, R),
          Y(P, _, null),
          (w = !0);
      },
      p(v, C) {
        (!w || (C[0] & 32 && !le(t.src, (n = v[7](v[5].avatar))))) &&
          u(t, "src", n),
          (!w || C[0] & 32) && a !== (a = v[5].nickName + "") && ge(c, a),
          (!w || (C[0] & 1 && $ !== ($ = v[0](H.ACCOUNT_OVERVIEW.pathname)))) &&
            u(e, "href", $);
        const p = {};
        C[0] & 1 && (p.href = v[0](H.ASSETS_OVERVIEW.pathname)),
          C[1] & 2 && (p.$$scope = { dirty: C, ctx: v }),
          S.$set(p);
        const I = {};
        C[0] & 1 && (I.href = v[0](H.ACCOUNT_OVERVIEW.pathname)),
          C[1] & 2 && (I.$$scope = { dirty: C, ctx: v }),
          P.$set(I);
      },
      i(v) {
        w || (O(S.$$.fragment, v), O(P.$$.fragment, v), (w = !0));
      },
      o(v) {
        M(S.$$.fragment, v), M(P.$$.fragment, v), (w = !1);
      },
      d(v) {
        v && h(e), v && h(E), v && h(_), j(S), j(P);
      },
    }
  );
}
function $i(r) {
  let e = r[6](L.LogIn) + "",
    l;
  return {
    c() {
      l = q(e);
    },
    l(t) {
      l = K(t, e);
    },
    m(t, n) {
      V(t, l, n);
    },
    p: x,
    d(t) {
      t && h(l);
    },
  };
}
function Ei(r) {
  let e = r[6](L.RegisterNow) + "",
    l;
  return {
    c() {
      l = q(e);
    },
    l(t) {
      l = K(t, e);
    },
    m(t, n) {
      V(t, l, n);
    },
    p: x,
    d(t) {
      t && h(l);
    },
  };
}
function Ti(r) {
  let e = r[6](L.Assets) + "",
    l;
  return {
    c() {
      l = q(e);
    },
    l(t) {
      l = K(t, e);
    },
    m(t, n) {
      V(t, l, n);
    },
    p: x,
    d(t) {
      t && h(l);
    },
  };
}
function wi(r) {
  let e = r[6](L.Account) + "",
    l;
  return {
    c() {
      l = q(e);
    },
    l(t) {
      l = K(t, e);
    },
    m(t, n) {
      V(t, l, n);
    },
    p: x,
    d(t) {
      t && h(l);
    },
  };
}
function Jt(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a = r[26].title + "",
    c,
    f,
    m,
    g,
    $,
    E,
    _;
  function S(p, I) {
    if (p[26].icon) return Ci;
    if (p[26].img) return Ii;
  }
  let R = S(r),
    P = R && R(r),
    w = r[26].tag && Zt(r),
    v = r[26].hasChildren && xt(r),
    C = r[2] === r[28] && r[3] && el(r);
  return {
    c() {
      (e = b("li")),
        (l = b("a")),
        (t = b("div")),
        (n = b("div")),
        P && P.c(),
        (s = W()),
        (i = b("div")),
        (o = b("span")),
        (c = q(a)),
        (f = W()),
        w && w.c(),
        (m = W()),
        v && v.c(),
        ($ = W()),
        C && C.c(),
        this.h();
    },
    l(p) {
      e = k(p, "LI", { class: !0 });
      var I = T(e);
      l = k(I, "A", { href: !0, class: !0 });
      var U = T(l);
      t = k(U, "DIV", { class: !0 });
      var B = T(t);
      n = k(B, "DIV", { class: !0 });
      var A = T(n);
      P && P.l(A), (s = G(A)), (i = k(A, "DIV", {}));
      var F = T(i);
      o = k(F, "SPAN", { class: !0 });
      var N = T(o);
      (c = K(N, a)),
        N.forEach(h),
        (f = G(F)),
        w && w.l(F),
        F.forEach(h),
        A.forEach(h),
        (m = G(B)),
        v && v.l(B),
        B.forEach(h),
        U.forEach(h),
        ($ = G(I)),
        C && C.l(I),
        I.forEach(h),
        this.h();
    },
    h() {
      u(o, "class", "title svelte-1q96dh5"),
        u(n, "class", "df aic"),
        u(t, "class", "df aic jcsb ph16"),
        u(
          l,
          "href",
          (g = r[26].hasChildren ? "javascript:void(0);" : r[26].link)
        ),
        u(l, "class", "svelte-1q96dh5"),
        u(e, "class", "svelte-1q96dh5"),
        Z(e, "b-b", r[26].hasBorder);
    },
    m(p, I) {
      V(p, e, I),
        d(e, l),
        d(l, t),
        d(t, n),
        P && P.m(n, null),
        d(n, s),
        d(n, i),
        d(i, o),
        d(o, c),
        d(i, f),
        w && w.m(i, null),
        d(t, m),
        v && v.m(t, null),
        d(e, $),
        C && C.m(e, null),
        E || ((_ = ne(t, "click", r[10](r[28]))), (E = !0));
    },
    p(p, I) {
      (r = p),
        R === (R = S(r)) && P
          ? P.p(r, I)
          : (P && P.d(1), (P = R && R(r)), P && (P.c(), P.m(n, s))),
        I[0] & 16 && a !== (a = r[26].title + "") && ge(c, a),
        r[26].tag
          ? w
            ? w.p(r, I)
            : ((w = Zt(r)), w.c(), w.m(i, null))
          : w && (w.d(1), (w = null)),
        r[26].hasChildren
          ? v
            ? v.p(r, I)
            : ((v = xt(r)), v.c(), v.m(t, null))
          : v && (v.d(1), (v = null)),
        I[0] & 16 &&
          g !== (g = r[26].hasChildren ? "javascript:void(0);" : r[26].link) &&
          u(l, "href", g),
        r[2] === r[28] && r[3]
          ? C
            ? C.p(r, I)
            : ((C = el(r)), C.c(), C.m(e, null))
          : C && (C.d(1), (C = null)),
        I[0] & 16 && Z(e, "b-b", r[26].hasBorder);
    },
    d(p) {
      p && h(e), P && P.d(), w && w.d(), v && v.d(), C && C.d(), (E = !1), _();
    },
  };
}
function Ii(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { width: !0, height: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "width", "20"),
        u(e, "height", "20"),
        le(e.src, (l = r[26].img)) || u(e, "src", l),
        u(e, "alt", "");
    },
    m(t, n) {
      V(t, e, n);
    },
    p(t, n) {
      n[0] & 16 && !le(e.src, (l = t[26].img)) && u(e, "src", l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Ci(r) {
  let e,
    l = r[26].icon + "";
  return {
    c() {
      (e = b("i")), this.h();
    },
    l(t) {
      e = k(t, "I", { class: !0 });
      var n = T(e);
      n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "iconfont T3");
    },
    m(t, n) {
      V(t, e, n), (e.innerHTML = l);
    },
    p(t, n) {
      n[0] & 16 && l !== (l = t[26].icon + "") && (e.innerHTML = l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Zt(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = k(t, "IMG", { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      u(e, "class", "ml4"),
        le(e.src, (l = r[26].tag)) || u(e, "src", l),
        u(e, "alt", "");
    },
    m(t, n) {
      V(t, e, n);
    },
    p(t, n) {
      n[0] & 16 && !le(e.src, (l = t[26].tag)) && u(e, "src", l);
    },
    d(t) {
      t && h(e);
    },
  };
}
function xt(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = q("")), this.h();
    },
    l(t) {
      e = k(t, "I", { class: !0 });
      var n = T(e);
      (l = K(n, "")), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "iconfont svelte-1q96dh5"),
        Z(e, "animation", r[2] === r[28] && r[3]);
    },
    m(t, n) {
      V(t, e, n), d(e, l);
    },
    p(t, n) {
      n[0] & 12 && Z(e, "animation", t[2] === t[28] && t[3]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function el(r) {
  let e,
    l = r[26].children,
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = tl(Qt(r, l, n));
  return {
    c() {
      e = b("ul");
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = k(n, "UL", { class: !0 });
      var s = T(e);
      for (let i = 0; i < t.length; i += 1) t[i].l(s);
      s.forEach(h), this.h();
    },
    h() {
      u(e, "class", "children B2 svelte-1q96dh5"),
        Z(e, "children-auto-height", r[2] === r[28] && r[3]);
    },
    m(n, s) {
      V(n, e, s);
      for (let i = 0; i < t.length; i += 1) t[i].m(e, null);
    },
    p(n, s) {
      if (s[0] & 16) {
        l = n[26].children;
        let i;
        for (i = 0; i < l.length; i += 1) {
          const o = Qt(n, l, i);
          t[i] ? t[i].p(o, s) : ((t[i] = tl(o)), t[i].c(), t[i].m(e, null));
        }
        for (; i < t.length; i += 1) t[i].d(1);
        t.length = l.length;
      }
      s[0] & 12 && Z(e, "children-auto-height", n[2] === n[28] && n[3]);
    },
    d(n) {
      n && h(e), Pe(t, n);
    },
  };
}
function Ai(r) {
  let e,
    l = r[29].title + "",
    t,
    n,
    s;
  return {
    c() {
      (e = b("span")), (t = q(l));
    },
    l(i) {
      e = k(i, "SPAN", {});
      var o = T(e);
      (t = K(o, l)), o.forEach(h);
    },
    m(i, o) {
      V(i, e, o),
        d(e, t),
        n ||
          ((s = ne(e, "click", function () {
            Me(r[29].action) && r[29].action.apply(this, arguments);
          })),
          (n = !0));
    },
    p(i, o) {
      (r = i), o[0] & 16 && l !== (l = r[29].title + "") && ge(t, l);
    },
    d(i) {
      i && h(e), (n = !1), s();
    },
  };
}
function Si(r) {
  let e,
    l = r[29].title + "",
    t,
    n;
  return {
    c() {
      (e = b("a")), (t = q(l)), this.h();
    },
    l(s) {
      e = k(s, "A", { href: !0, class: !0 });
      var i = T(e);
      (t = K(i, l)), i.forEach(h), this.h();
    },
    h() {
      u(e, "href", (n = r[29].link)), u(e, "class", "svelte-1q96dh5");
    },
    m(s, i) {
      V(s, e, i), d(e, t);
    },
    p(s, i) {
      i[0] & 16 && l !== (l = s[29].title + "") && ge(t, l),
        i[0] & 16 && n !== (n = s[29].link) && u(e, "href", n);
    },
    d(s) {
      s && h(e);
    },
  };
}
function tl(r) {
  let e;
  function l(s, i) {
    return s[29].link && s[29].type !== "Action" ? Si : Ai;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      (e = b("li")), n.c(), this.h();
    },
    l(s) {
      e = k(s, "LI", { class: !0 });
      var i = T(e);
      n.l(i), i.forEach(h), this.h();
    },
    h() {
      u(e, "class", "ph10 ooo svelte-1q96dh5");
    },
    m(s, i) {
      V(s, e, i), n.m(e, null);
    },
    p(s, i) {
      t === (t = l(s)) && n
        ? n.p(s, i)
        : (n.d(1), (n = t(s)), n && (n.c(), n.m(e, null)));
    },
    d(s) {
      s && h(e), n.d();
    },
  };
}
function ll(r) {
  let e,
    l = r[26].title && r[26].isShow && Jt(r);
  return {
    c() {
      l && l.c(), (e = he());
    },
    l(t) {
      l && l.l(t), (e = he());
    },
    m(t, n) {
      l && l.m(t, n), V(t, e, n);
    },
    p(t, n) {
      t[26].title && t[26].isShow
        ? l
          ? l.p(t, n)
          : ((l = Jt(t)), l.c(), l.m(e.parentNode, e))
        : l && (l.d(1), (l = null));
    },
    d(t) {
      l && l.d(t), t && h(e);
    },
  };
}
function nl(r) {
  let e,
    l,
    t,
    n,
    s,
    i = r[6](L.LogOut) + "",
    o,
    a,
    c;
  return {
    c() {
      (e = b("li")),
        (l = b("img")),
        (n = W()),
        (s = b("span")),
        (o = q(i)),
        this.h();
    },
    l(f) {
      e = k(f, "LI", { class: !0 });
      var m = T(e);
      (l = k(m, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (n = G(m)),
        (s = k(m, "SPAN", { class: !0 }));
      var g = T(s);
      (o = K(g, i)), g.forEach(h), m.forEach(h), this.h();
    },
    h() {
      u(l, "width", "20"),
        u(l, "height", "20"),
        le(l.src, (t = we.SIGNOUT)) || u(l, "src", t),
        u(l, "alt", ""),
        u(s, "class", "title svelte-1q96dh5"),
        u(e, "class", "df aic ph16 svelte-1q96dh5");
    },
    m(f, m) {
      V(f, e, m),
        d(e, l),
        d(e, n),
        d(e, s),
        d(s, o),
        a || ((c = ne(e, "click", r[11])), (a = !0));
    },
    p: x,
    d(f) {
      f && h(e), (a = !1), c();
    },
  };
}
function Pi(r) {
  let e, l, t, n, s, i, o, a, c, f, m, g, $, E, _, S, R, P, w;
  const v = [ki, bi],
    C = [];
  function p(A, F) {
    return A[1] ? 0 : 1;
  }
  (g = p(r)), ($ = C[g] = v[g](r));
  let I = r[4],
    U = [];
  for (let A = 0; A < I.length; A += 1) U[A] = ll(Kt(r, I, A));
  let B = r[1] && nl(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("a")),
        (n = b("img")),
        (o = W()),
        (a = b("i")),
        (c = q("")),
        (f = W()),
        (m = b("div")),
        $.c(),
        (E = W()),
        (_ = b("ul"));
      for (let A = 0; A < U.length; A += 1) U[A].c();
      (S = W()), B && B.c(), this.h();
    },
    l(A) {
      e = k(A, "DIV", { class: !0 });
      var F = T(e);
      l = k(F, "DIV", { class: !0 });
      var N = T(l);
      t = k(N, "A", { href: !0 });
      var D = T(t);
      (n = k(D, "IMG", { class: !0, alt: !0, src: !0 })),
        D.forEach(h),
        (o = G(N)),
        (a = k(N, "I", { class: !0 }));
      var z = T(a);
      (c = K(z, "")),
        z.forEach(h),
        N.forEach(h),
        (f = G(F)),
        (m = k(F, "DIV", { class: !0 }));
      var J = T(m);
      $.l(J), J.forEach(h), (E = G(F)), (_ = k(F, "UL", { class: !0 }));
      var ee = T(_);
      for (let me = 0; me < U.length; me += 1) U[me].l(ee);
      (S = G(ee)), B && B.l(ee), ee.forEach(h), F.forEach(h), this.h();
    },
    h() {
      u(n, "class", "logo svelte-1q96dh5"),
        u(n, "alt", "Logo"),
        le(n.src, (s = Ie.LOGO_DARK)) || u(n, "src", s),
        u(t, "href", (i = r[0](H.HOME.pathname))),
        u(a, "class", "iconfont close cp svelte-1q96dh5"),
        u(l, "class", "df jcsb aic mb16 ph16"),
        u(m, "class", "df fdc ph16"),
        u(_, "class", "menu_div svelte-1q96dh5"),
        u(e, "class", "wrap svelte-1q96dh5");
    },
    m(A, F) {
      V(A, e, F),
        d(e, l),
        d(l, t),
        d(t, n),
        d(l, o),
        d(l, a),
        d(a, c),
        d(e, f),
        d(e, m),
        C[g].m(m, null),
        d(e, E),
        d(e, _);
      for (let N = 0; N < U.length; N += 1) U[N].m(_, null);
      d(_, S),
        B && B.m(_, null),
        (R = !0),
        P || ((w = ne(a, "click", r[12])), (P = !0));
    },
    p(A, F) {
      (!R || (F[0] & 1 && i !== (i = A[0](H.HOME.pathname)))) &&
        u(t, "href", i);
      let N = g;
      if (
        ((g = p(A)),
        g === N
          ? C[g].p(A, F)
          : (ce(),
            M(C[N], 1, 1, () => {
              C[N] = null;
            }),
            fe(),
            ($ = C[g]),
            $ ? $.p(A, F) : (($ = C[g] = v[g](A)), $.c()),
            O($, 1),
            $.m(m, null)),
        F[0] & 1052)
      ) {
        I = A[4];
        let D;
        for (D = 0; D < I.length; D += 1) {
          const z = Kt(A, I, D);
          U[D] ? U[D].p(z, F) : ((U[D] = ll(z)), U[D].c(), U[D].m(_, S));
        }
        for (; D < U.length; D += 1) U[D].d(1);
        U.length = I.length;
      }
      A[1]
        ? B
          ? B.p(A, F)
          : ((B = nl(A)), B.c(), B.m(_, null))
        : B && (B.d(1), (B = null));
    },
    i(A) {
      R || (O($), (R = !0));
    },
    o(A) {
      M($), (R = !1);
    },
    d(A) {
      A && h(e), C[g].d(), Pe(U, A), B && B.d(), (P = !1), w();
    },
  };
}
function Di(r, e, l) {
  let t, n, s, i, o, a, c, f, m, g, $;
  Q(r, pe, (D) => l(0, (n = D))),
    Q(r, Qe, (D) => l(21, (s = D))),
    Q(r, dl, (D) => l(15, (i = D))),
    Q(r, _l, (D) => l(16, (o = D))),
    Q(r, ml, (D) => l(18, (c = D))),
    Q(r, gl, (D) => l(19, (f = D))),
    Q(r, je, (D) => l(1, (m = D))),
    Q(r, Se, (D) => l(20, (g = D))),
    Q(r, Fe, (D) => l(5, ($ = D)));
  let { modalUI: E = !1 } = e;
  const _ = de("LG"),
    S = Jl(),
    R = ol(),
    P = kl.pipe(sn((D) => D.reduce((z, J) => ((z[J.value] = J.text), z), {})));
  Q(r, P, (D) => l(17, (a = D)));
  let w = 2,
    v = !0,
    C = location.origin + location.pathname;
  function p(
    D,
    z,
    J,
    ee,
    me,
    Ce,
    Ne,
    { web3ModuleState: Xe, isSupportLending: Dl }
  ) {
    return [
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Buy Crypto",
        title: D(L.BuyCrypto),
        link: "",
        img: we.BUY_CRYPTO,
        tag: "",
        children: [
          {
            type: "Link",
            title: D(L.BuyCryptoP2PMarketplace),
            link: Ke(ee, z),
          },
          {
            type: "Link",
            title: D(L.BuyCryptoWith),
            link: z(
              ee ? H.BUY_CRYPTO_PLACE_ORDER.pathname : H.BUY_CRYPTO.pathname
            ),
          },
          {
            type: "Link",
            title: D(L.BuyCryptoWithBank),
            link: z(H.OTC_LEGEND_TRADING.pathname),
          },
          {
            type: "Link",
            title: D(L.CreditDebitCards),
            link: z(H.BUY_CRYPTO_CARD_PLACE_ORDER.pathname),
          },
        ],
      },
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: !0,
        tab: "Markets",
        title: D(L.Markets),
        link: z(H.MARKETS.pathname),
        img: we.MARKETS,
        tag: "",
        children: [],
      },
      {
        hasChildren: 2,
        hasBorder: 0,
        isShow: !0,
        tab: "Contract",
        title: D(L.Contract),
        link: "",
        img: we.CONTRACT,
        tag: "",
        children: [
          {
            type: "Link",
            title: `USDⓈ-M ${D(L.Perpetual)}`,
            link: te.PHEMEX_CONTRACT_TRADE_USDS,
          },
          /*{
            type: "Link",
            title: `COIN-M ${D(L.Perpetual)}`,
            link: te.PHEMEX_CONTRACT_INVERSE_TRADE,
          },
          {
            type: "Link",
            title: D(L.CopyTrade),
            link: n(H.COPY_TRADING_LIST.pathname),
          },
          {
            type: "Link",
            title: D(L.Leaderboard),
            link: n(H.COPY_LEADERBOARD.pathname),
          },
          {
            type: "Link",
            title: D(L.VipPortal),
            link: n(H.VIP_PORTAL.pathname),
          },*/
        ],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Spot",
        title: D(L.Spot),
        link: "",
        img: we.SPOT,
        tag: "",
        children: [
          { type: "Link", title: D(L.SpotTrading), link: te.PHEMEX_SPOT_TRADE },
          {
            type: "Link",
            title: D(L.Convert),
            link: z(H.CRYPTO_CONVERTER.pathname),
          },
          {
            type: "Link",
            title: D(L.Launchpad),
            link: z(H.LAUNCHPAD.pathname),
          },
        ],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Earn",
        title: D(L.EarnMain),
        link: "",
        img: we.EARN,
        tag: "",
        children: [
          {
            type: "Link",
            title: D(L.EarnCrypto),
            link: z(H.EARN_HOME.pathname),
          },
          { type: "Link", title: D(L.Savings), link: z(H.EARN.pathname) },
          {
            type: "Link",
            title: D(L.Launchpool),
            link: z(H.LAUNCHPOOL.pathname),
          },
        ],
      },
      /*{
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Web3",
        title: D(L.Web3),
        link: "",
        img: we.WEB3,
        tag: "",
        children: [
          {
            type: "Link",
            title: D(L.SocialTrade),
            link: z(H.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname),
          },
          {
            type: "Link",
            title: D(L.Web3PTStaking),
            link: z(H.WEB3_STAKE.pathname),
            hidden: !Xe,
          },
          { type: "Link", title: D(L.Phemexia), link: z(H.PHEMEXIA.pathname) },
          {
            type: "Link",
            title: D(L.Web3SoulPass),
            link: z(H.WEB3_SOUL_PASS.pathname),
            hidden: !Xe,
          },
          {
            type: "Link",
            title: D(L.Web3Token),
            link: z(H.WEB3_EQUITY_BENEFITS.pathname),
            hidden: !Xe,
          },
          {
            type: "Link",
            title: D(L.Web3LendingProtocol),
            link: z(H.WEB3_LENDING_MARKET.pathname),
            hidden: !Dl,
          },
        ].filter((Ol) => !Ol.hidden),
      },*/
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "Learn",
        title: D(L.Learn),
        link: "",
        img: we.LEARN,
        tag: "",
        children: [
          {
            type: "Link",
            title: D(L.Academy),
            link: z(te.PHEMEX_ACADEMY, "CMS"),
          },
          {
            type: "Link",
            title: D(L.LearnAndEarn),
            link: z(H.LEARN_CRYPTO.pathname),
          },
          {
            type: "Link",
            title: D(L.HelpCenter),
            link: z(te.PHEMEX_HELP_CENTER, "CMS"),
          },
          { type: "Link", title: D(L.Blog), link: z(te.PHEMEX_BLOG, "CMS") },
          {
            type: "Link",
            title: D(L.StudentFoundation),
            link: z(H.STUDENT_FOUNDATION.pathname),
          },
          { type: "Link", title: D(L.SimulatedTrading), link: te.MOCK_TRADE },
        ],
      },
      {
        hasChildren: 1,
        hasBorder: 1,
        isShow: !0,
        tab: "Promotions",
        title: D(L.Promotions),
        link: "",
        img: we.PROMOTION,
        tag: "",
        children: Ce,
      },
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: !0,
        tab: me.title,
        title: me.title,
        link: me.link,
        img: me.cornerIcon && me.fullCornerIcon,
        tag: "",
        children: [],
      },
      {
        hasChildren: 0,
        hasBorder: 0,
        isShow: J === "tr",
        tab: "PhemexTR",
        title: "PhemexTR",
        link: te.PHEMEX_TR,
        img: Oe.TR_GUIDE,
        tag: "",
        children: [],
      },
      {
        hasChildren: 1,
        hasBorder: 0,
        isShow: !0,
        tab: "lang",
        title: Ne[J],
        link: "",
        img: we.LANGUAGE,
        tag: "",
        children: U(Ne, J),
      },
    ];
  }
  function I(D) {
    return function () {
      if (w === D) {
        l(3, (v = !1)), l(2, (w = -1));
        return;
      }
      l(2, (w = D)), l(3, (v = !0));
    };
  }
  function U(D, z) {
    return Object.keys(D)
      .filter((J) => J !== z)
      .reduce(
        (J, ee) => [
          ...J,
          {
            type: "Action",
            link: ee,
            title: D[ee],
            action() {
              if (s === "Login") {
                F({ lang: ee });
                return;
              }
              Se.set(ee), R("switch-lang");
            },
          },
        ],
        []
      );
  }
  function B(D) {
    D.preventDefault(), Zl.next({ manual: !0 });
  }
  function A() {
    R("handleClickClose");
  }
  async function F(D) {
    const { data: z, error: J } = await wl.updateProfile(D);
    if (z) {
      Fe.next(z);
      const { lang: ee } = D;
      ee && (Se.set(ee), R("switch-lang"));
    }
    J && Le.send("toast", "error", J);
  }
  function N() {
    if (E) Le.send("modal-register", "startRegister");
    else {
      const D = location.origin + location.pathname + location.search;
      Re(
        n(H.REGISTER.pathname) +
          "?" +
          He.stringify({ target: D, action: "Target" })
      );
    }
  }
  return (
    (r.$$set = (D) => {
      "modalUI" in D && l(14, (E = D.modalUI));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 2064387 &&
        l(
          4,
          (t = p(_, n, g, m, f, c, a, {
            web3ModuleState: o,
            isSupportLending: i,
          }))
        );
    }),
    [n, m, w, v, t, $, _, S, P, C, I, B, A, N, E, i, o, a, c, f, g]
  );
}
class Oi extends re {
  constructor(e) {
    super(), ie(this, e, Di, Pi, se, { modalUI: 14 }, null, [-1, -1]);
  }
}
function rl(r) {
  let e, l;
  return (
    (e = new vi({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function il(r) {
  let e,
    l,
    t = r[9](L.Register) + "",
    n,
    s,
    i;
  return {
    c() {
      (e = b("a")), (l = b("span")), (n = q(t)), this.h();
    },
    l(o) {
      e = k(o, "A", { class: !0, href: !0 });
      var a = T(e);
      l = k(a, "SPAN", {});
      var c = T(l);
      (n = K(c, t)), c.forEach(h), a.forEach(h), this.h();
    },
    h() {
      u(e, "class", "btn T2 ph12 ga svelte-19c69gn"),
        u(e, "href", "javascript:;");
    },
    m(o, a) {
      V(o, e, a),
        d(e, l),
        d(l, n),
        s || ((i = ne(e, "click", r[11])), (s = !0));
    },
    p: x,
    d(o) {
      o && h(e), (s = !1), i();
    },
  };
}
function Ri(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a,
    c,
    f,
    m,
    g,
    $,
    E,
    _,
    S,
    R,
    P,
    w,
    v,
    C,
    p = r[3] && rl(),
    I = !r[8] && il(r);
  return (
    (P = new Oi({ props: { modalUI: r[2] } })),
    P.$on("handleClickClose", r[10]),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          (t = W()),
          (n = b("div")),
          p && p.c(),
          (s = W()),
          (i = b("div")),
          (o = b("a")),
          (a = b("img")),
          (m = W()),
          (g = b("div")),
          I && I.c(),
          ($ = W()),
          (E = b("i")),
          (_ = q("")),
          (S = W()),
          (R = b("div")),
          y(P.$$.fragment),
          this.h();
      },
      l(U) {
        e = k(U, "DIV", { class: !0 });
        var B = T(e);
        (l = k(B, "DIV", { class: !0 })),
          T(l).forEach(h),
          (t = G(B)),
          (n = k(B, "DIV", { class: !0 }));
        var A = T(n);
        p && p.l(A), (s = G(A)), (i = k(A, "DIV", { class: !0 }));
        var F = T(i);
        o = k(F, "A", { class: !0, href: !0 });
        var N = T(o);
        (a = k(N, "IMG", { class: !0, alt: !0, src: !0 })),
          N.forEach(h),
          (m = G(F)),
          (g = k(F, "DIV", { class: !0 }));
        var D = T(g);
        I && I.l(D), ($ = G(D)), (E = k(D, "I", { class: !0 }));
        var z = T(E);
        (_ = K(z, "")),
          z.forEach(h),
          D.forEach(h),
          F.forEach(h),
          A.forEach(h),
          (S = G(B)),
          (R = k(B, "DIV", { class: !0, style: !0 }));
        var J = T(R);
        X(P.$$.fragment, J), J.forEach(h), B.forEach(h), this.h();
      },
      h() {
        u(l, "class", "svelte-19c69gn"),
          Z(l, "mask", r[5]),
          u(a, "class", "logo svelte-19c69gn"),
          u(a, "alt", "Logo"),
          le(a.src, (c = r[0] || r[4] ? Ie.LOGO_LIGHT : Ie.LOGO_DARK)) ||
            u(a, "src", c),
          u(o, "class", "df aic"),
          u(o, "href", (f = r[7](H.HOME.pathname))),
          u(E, "class", "iconfont ml16 lh16 f16 BLUE svelte-19c69gn"),
          Z(E, "cf", r[0] || r[4]),
          Z(E, "dn", r[4]),
          u(g, "class", "df aic jcc"),
          u(i, "class", "df jcsb content svelte-19c69gn"),
          u(n, "class", "header B1 svelte-19c69gn"),
          Z(n, "top", r[0]),
          Z(n, "fixed", r[1]),
          Z(n, "log", r[4]),
          u(R, "class", "menu svelte-19c69gn"),
          oe(R, "right", r[6]),
          u(e, "class", "main");
      },
      m(U, B) {
        V(U, e, B),
          d(e, l),
          d(e, t),
          d(e, n),
          p && p.m(n, null),
          d(n, s),
          d(n, i),
          d(i, o),
          d(o, a),
          d(i, m),
          d(i, g),
          I && I.m(g, null),
          d(g, $),
          d(g, E),
          d(E, _),
          d(e, S),
          d(e, R),
          Y(P, R, null),
          (w = !0),
          v ||
            ((C = [
              ne(l, "click", r[10]),
              ne(E, "click", r[10]),
              ne(R, "click", Li),
            ]),
            (v = !0));
      },
      p(U, [B]) {
        (!w || B & 32) && Z(l, "mask", U[5]),
          U[3]
            ? p
              ? B & 8 && O(p, 1)
              : ((p = rl()), p.c(), O(p, 1), p.m(n, s))
            : p &&
              (ce(),
              M(p, 1, 1, () => {
                p = null;
              }),
              fe()),
          (!w ||
            (B & 17 &&
              !le(a.src, (c = U[0] || U[4] ? Ie.LOGO_LIGHT : Ie.LOGO_DARK)))) &&
            u(a, "src", c),
          (!w || (B & 128 && f !== (f = U[7](H.HOME.pathname)))) &&
            u(o, "href", f),
          U[8]
            ? I && (I.d(1), (I = null))
            : I
            ? I.p(U, B)
            : ((I = il(U)), I.c(), I.m(g, $)),
          (!w || B & 17) && Z(E, "cf", U[0] || U[4]),
          (!w || B & 16) && Z(E, "dn", U[4]),
          (!w || B & 1) && Z(n, "top", U[0]),
          (!w || B & 2) && Z(n, "fixed", U[1]),
          (!w || B & 16) && Z(n, "log", U[4]);
        const A = {};
        B & 4 && (A.modalUI = U[2]),
          P.$set(A),
          (!w || B & 64) && oe(R, "right", U[6]);
      },
      i(U) {
        w || (O(p), O(P.$$.fragment, U), (w = !0));
      },
      o(U) {
        M(p), M(P.$$.fragment, U), (w = !1);
      },
      d(U) {
        U && h(e), p && p.d(), I && I.d(), j(P), (v = !1), Ye(C);
      },
    }
  );
}
function Li(r) {
  r.stopPropagation();
}
function Mi(r, e, l) {
  let t, n;
  Q(r, pe, (_) => l(7, (t = _))), Q(r, je, (_) => l(8, (n = _)));
  const s = de("LG");
  let { isTop: i = !1 } = e,
    { isFixed: o = !0 } = e,
    { modalUI: a = !1 } = e,
    { isHome: c = !1 } = e,
    { isLogin: f = !1 } = e,
    m = !1,
    g = "-80%";
  Be(() => {
    const { pathname: _ } = window.location;
    Tl.parsePathname(_).pathname;
  });
  function $() {
    if ((l(5, (m = !m)), m)) {
      l(0, (i = !1)), l(6, (g = "0"));
      return;
    }
    l(6, (g = "-80%"));
  }
  function E() {
    a ? Le.send("modal-register", "startRegister") : Al(t);
  }
  return (
    (r.$$set = (_) => {
      "isTop" in _ && l(0, (i = _.isTop)),
        "isFixed" in _ && l(1, (o = _.isFixed)),
        "modalUI" in _ && l(2, (a = _.modalUI)),
        "isHome" in _ && l(3, (c = _.isHome)),
        "isLogin" in _ && l(4, (f = _.isLogin));
    }),
    [i, o, a, c, f, m, g, t, n, s, $, E]
  );
}
class Ni extends re {
  constructor(e) {
    super(),
      ie(this, e, Mi, Ri, se, {
        isTop: 0,
        isFixed: 1,
        modalUI: 2,
        isHome: 3,
        isLogin: 4,
      });
  }
}
function sl(r) {
  let e,
    l,
    t,
    n,
    s,
    i,
    o,
    a,
    c,
    f = r[1].detail.title + "",
    m,
    g,
    $,
    E = r[1].detail.content + "",
    _,
    S,
    R,
    P,
    w,
    v,
    C,
    p,
    I,
    U;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = b("i")),
        (s = q("")),
        (i = W()),
        (o = b("div")),
        (a = b("a")),
        (c = b("div")),
        (m = q(f)),
        (g = W()),
        ($ = b("div")),
        (_ = q(E)),
        (R = W()),
        (P = b("div")),
        (w = b("i")),
        (v = q("")),
        this.h();
    },
    l(B) {
      e = k(B, "DIV", { class: !0 });
      var A = T(e);
      l = k(A, "DIV", { class: !0 });
      var F = T(l);
      t = k(F, "DIV", {});
      var N = T(t);
      n = k(N, "I", { class: !0 });
      var D = T(n);
      (s = K(D, "")),
        D.forEach(h),
        N.forEach(h),
        (i = G(F)),
        (o = k(F, "DIV", { class: !0 }));
      var z = T(o);
      a = k(z, "A", { href: !0 });
      var J = T(a);
      c = k(J, "DIV", { class: !0 });
      var ee = T(c);
      (m = K(ee, f)),
        ee.forEach(h),
        (g = G(J)),
        ($ = k(J, "DIV", { class: !0 }));
      var me = T($);
      (_ = K(me, E)),
        me.forEach(h),
        J.forEach(h),
        z.forEach(h),
        (R = G(F)),
        (P = k(F, "DIV", { class: !0 }));
      var Ce = T(P);
      w = k(Ce, "I", { class: !0 });
      var Ne = T(w);
      (v = K(Ne, "")),
        Ne.forEach(h),
        Ce.forEach(h),
        F.forEach(h),
        A.forEach(h),
        this.h();
    },
    h() {
      u(n, "class", "iconfont f14 sell"),
        u(c, "class", "title fw2 f16 lh20 svelte-1a9ou07"),
        u($, "class", "content mt10 f14 lh16 svelte-1a9ou07"),
        u(a, "href", (S = r[1].detail.webLink)),
        u(o, "class", "ml16 mr24"),
        u(w, "class", "iconfont f18 cf cp"),
        u(P, "class", "pa ml44 close df jcc aic svelte-1a9ou07"),
        u(l, "class", "announcements df pr svelte-1a9ou07"),
        u(e, "class", "announcements-wrap svelte-1a9ou07");
    },
    m(B, A) {
      V(B, e, A),
        d(e, l),
        d(l, t),
        d(t, n),
        d(n, s),
        d(l, i),
        d(l, o),
        d(o, a),
        d(a, c),
        d(c, m),
        d(a, g),
        d(a, $),
        d($, _),
        d(l, R),
        d(l, P),
        d(P, w),
        d(w, v),
        (p = !0),
        I || ((U = ne(P, "click", r[2])), (I = !0));
    },
    p(B, A) {
      (r = B),
        (!p || A & 2) && f !== (f = r[1].detail.title + "") && ge(m, f),
        (!p || A & 2) && E !== (E = r[1].detail.content + "") && ge(_, E),
        (!p || (A & 2 && S !== (S = r[1].detail.webLink))) && u(a, "href", S);
    },
    i(B) {
      p ||
        (De(() => {
          C || (C = tt(e, nt, { delay: 250, duration: 300, easing: lt }, !0)),
            C.run(1);
        }),
        (p = !0));
    },
    o(B) {
      C || (C = tt(e, nt, { delay: 250, duration: 300, easing: lt }, !1)),
        C.run(0),
        (p = !1);
    },
    d(B) {
      B && h(e), B && C && C.end(), (I = !1), U();
    },
  };
}
function Ui(r) {
  let e,
    l,
    t = r[1] && r[0] && sl(r);
  return {
    c() {
      t && t.c(), (e = he());
    },
    l(n) {
      t && t.l(n), (e = he());
    },
    m(n, s) {
      t && t.m(n, s), V(n, e, s), (l = !0);
    },
    p(n, [s]) {
      n[1] && n[0]
        ? t
          ? (t.p(n, s), s & 3 && O(t, 1))
          : ((t = sl(n)), t.c(), O(t, 1), t.m(e.parentNode, e))
        : t &&
          (ce(),
          M(t, 1, 1, () => {
            t = null;
          }),
          fe());
    },
    i(n) {
      l || (O(t), (l = !0));
    },
    o(n) {
      M(t), (l = !1);
    },
    d(n) {
      t && t.d(n), n && h(e);
    },
  };
}
function Bi(r, e, l) {
  let t;
  Q(r, xl, (o) => l(1, (t = o)));
  let n = !1;
  function s() {
    const o = localStorage.getItem("home-announcement") || "0",
      a = Date.now();
    if (Math.floor((Number(o) - a) / 1e3) < 0) {
      l(0, (n = !0));
      return;
    }
    l(0, (n = !1));
  }
  function i() {
    l(0, (n = !1));
    const o = Date.now() + 6e4 * 60 * 12;
    localStorage.setItem("home-announcement", String(o));
  }
  return s(), [n, t, i];
}
class Vi extends re {
  constructor(e) {
    super(), ie(this, e, Bi, Ui, se, {});
  }
}
const { window: Ue } = pl,
  Hi = (r) => ({ isTop: r & 641, isOpacityHeader: r & 128 }),
  al = (r) => ({ isTop: (r[9] && r[7]) || r[0], isOpacityHeader: r[7] });
function Wi(r) {
  let e, l;
  return (
    (e = new _i({
      props: { $$slots: { default: [zi] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 1048576 && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Gi(r) {
  let e, l, t, n, s, i, o, a;
  t = new gr({ props: { isTop: (r[9] && r[7]) || r[0] } });
  const c = [yi, Fi],
    f = [];
  function m(g, $) {
    return g[1] !== "web3" ? 0 : 1;
  }
  return (
    (i = m(r)),
    (o = f[i] = c[i](r)),
    {
      c() {
        (e = b("div")),
          (l = b("nav")),
          y(t.$$.fragment),
          (n = W()),
          (s = b("div")),
          o.c(),
          this.h();
      },
      l(g) {
        e = k(g, "DIV", { class: !0 });
        var $ = T(e);
        l = k($, "NAV", { class: !0 });
        var E = T(l);
        X(t.$$.fragment, E), E.forEach(h), (n = G($)), (s = k($, "DIV", {}));
        var _ = T(s);
        o.l(_), _.forEach(h), $.forEach(h), this.h();
      },
      h() {
        u(l, "class", "df left-content svelte-1s52ps5"),
          u(e, "class", "wrap wsn df jcsb svelte-1s52ps5");
      },
      m(g, $) {
        V(g, e, $),
          d(e, l),
          Y(t, l, null),
          d(e, n),
          d(e, s),
          f[i].m(s, null),
          (a = !0);
      },
      p(g, $) {
        const E = {};
        $ & 641 && (E.isTop = (g[9] && g[7]) || g[0]), t.$set(E);
        let _ = i;
        (i = m(g)),
          i === _
            ? f[i].p(g, $)
            : (ce(),
              M(f[_], 1, 1, () => {
                f[_] = null;
              }),
              fe(),
              (o = f[i]),
              o ? o.p(g, $) : ((o = f[i] = c[i](g)), o.c()),
              O(o, 1),
              o.m(s, null));
      },
      i(g) {
        a || (O(t.$$.fragment, g), O(o), (a = !0));
      },
      o(g) {
        M(t.$$.fragment, g), M(o), (a = !1);
      },
      d(g) {
        g && h(e), j(t), f[i].d();
      },
    }
  );
}
function zi(r) {
  let e, l;
  return (
    (e = new Pl({})),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Fi(r) {
  let e;
  const l = r[15].web3Right,
    t = ve(l, r, r[20], al);
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, s) {
      t && t.m(n, s), (e = !0);
    },
    p(n, s) {
      t &&
        t.p &&
        (!e || s & 1049217) &&
        be(t, l, n, n[20], e ? $e(l, n[20], s, Hi) : ke(n[20]), al);
    },
    i(n) {
      e || (O(t, n), (e = !0));
    },
    o(n) {
      M(t, n), (e = !1);
    },
    d(n) {
      t && t.d(n);
    },
  };
}
function yi(r) {
  let e;
  const l = r[15].default,
    t = ve(l, r, r[20], null),
    n = t || Yi(r);
  return {
    c() {
      n && n.c();
    },
    l(s) {
      n && n.l(s);
    },
    m(s, i) {
      n && n.m(s, i), (e = !0);
    },
    p(s, i) {
      t
        ? t.p &&
          (!e || i & 1048576) &&
          be(t, l, s, s[20], e ? $e(l, s[20], i, null) : ke(s[20]), null)
        : n && n.p && (!e || i & 645) && n.p(s, e ? i : -1);
    },
    i(s) {
      e || (O(n, s), (e = !0));
    },
    o(s) {
      M(n, s), (e = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Yi(r) {
  let e, l;
  return (
    (e = new Pl({ props: { isTop: (r[9] && r[7]) || r[0], modalUI: r[2] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        Y(e, t, n), (l = !0);
      },
      p(t, n) {
        const s = {};
        n & 641 && (s.isTop = (t[9] && t[7]) || t[0]),
          n & 4 && (s.modalUI = t[2]),
          e.$set(s);
      },
      i(t) {
        l || (O(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        M(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function ji(r) {
  let e = !1,
    l = () => {
      e = !1;
    },
    t,
    n,
    s,
    i,
    o,
    a,
    c,
    f,
    m,
    g,
    $,
    E,
    _,
    S;
  De(r[16]), De(r[17]), (s = new Vi({}));
  const R = [Gi, Wi],
    P = [];
  function w(v, C) {
    return _e.isJapanSite ? 1 : 0;
  }
  return (
    (c = w()),
    (f = P[c] = R[c](r)),
    ($ = new Ni({
      props: {
        isTop: !_e.isJapanSite && r[9] && r[7],
        isLogin: r[0],
        modalUI: r[2],
        isHome: r[4],
      },
    })),
    {
      c() {
        (n = b("div")),
          y(s.$$.fragment),
          (o = W()),
          (a = b("header")),
          f.c(),
          (m = W()),
          (g = b("div")),
          y($.$$.fragment),
          this.h();
      },
      l(v) {
        n = k(v, "DIV", { style: !0 });
        var C = T(n);
        X(s.$$.fragment, C),
          C.forEach(h),
          (o = G(v)),
          (a = k(v, "HEADER", { class: !0 }));
        var p = T(a);
        f.l(p), (m = G(p)), (g = k(p, "DIV", { class: !0 }));
        var I = T(g);
        X($.$$.fragment, I), I.forEach(h), p.forEach(h), this.h();
      },
      h() {
        oe(n, "z-index", "999"),
          De(() => r[18].call(n)),
          u(g, "class", "mwrap wsn svelte-1s52ps5"),
          u(a, "class", "header svelte-1s52ps5"),
          Z(a, "new-layout", r[3]),
          Z(a, "top", r[9] && r[7]),
          Z(a, "log", !_e.isJapanSite && r[0]);
      },
      m(v, C) {
        V(v, n, C),
          Y(s, n, null),
          (i = en(n, r[18].bind(n))),
          V(v, o, C),
          V(v, a, C),
          P[c].m(a, null),
          d(a, m),
          d(a, g),
          Y($, g, null),
          r[19](a),
          (E = !0),
          _ ||
            ((S = [
              ne(Ue, "scroll", () => {
                (e = !0), clearTimeout(t), (t = setTimeout(l, 100)), r[16]();
              }),
              ne(Ue, "resize", r[17]),
            ]),
            (_ = !0));
      },
      p(v, [C]) {
        C & 32 &&
          !e &&
          ((e = !0),
          clearTimeout(t),
          scrollTo(Ue.pageXOffset, v[5]),
          (t = setTimeout(l, 100))),
          f.p(v, C);
        const p = {};
        C & 640 && (p.isTop = !_e.isJapanSite && v[9] && v[7]),
          C & 1 && (p.isLogin = v[0]),
          C & 4 && (p.modalUI = v[2]),
          C & 16 && (p.isHome = v[4]),
          $.$set(p),
          (!E || C & 8) && Z(a, "new-layout", v[3]),
          (!E || C & 640) && Z(a, "top", v[9] && v[7]),
          (!E || C & 1) && Z(a, "log", !_e.isJapanSite && v[0]);
      },
      i(v) {
        E || (O(s.$$.fragment, v), O(f), O($.$$.fragment, v), (E = !0));
      },
      o(v) {
        M(s.$$.fragment, v), M(f), M($.$$.fragment, v), (E = !1);
      },
      d(v) {
        v && h(n),
          j(s),
          i(),
          v && h(o),
          v && h(a),
          P[c].d(),
          j($),
          r[19](null),
          (_ = !1),
          Ye(S);
      },
    }
  );
}
function Xi() {
  try {
    const r = decodeURIComponent(window.location.search),
      e = new URLSearchParams(r);
    return Object.fromEntries(e) || {};
  } catch {
    return {};
  }
}
function qi(r, e, l) {
  let t,
    { $$slots: n = {}, $$scope: s } = e,
    { isLogin: i = !1 } = e,
    { type: o } = e,
    { showTop: a = !1 } = e,
    { modalUI: c = !1 } = e,
    { newLayout: f = !1 } = e,
    { isHome: m = !1 } = e,
    { useContractMenu: g = !1 } = e;
  const $ = [H.LAUNCHPOOL.pathname, H.PHEMEXIA.pathname],
    E = de("LG"),
    { page: _ } = nn();
  Q(r, _, (N) => l(14, (t = N)));
  let S = 0,
    R = 0,
    P = 0,
    w = !0,
    v = !0,
    C = null;
  Be(() => on.set(C && C.clientHeight)),
    Be(() => {
      tn("callChainDeposit") !== null &&
        ln().then(() => {
          const D = Xi();
          $l({ LG: E, ...D });
        });
    });
  function p(N, D) {
    const z = Tl.parsePathname(N.path).pathname,
      J = z === H.OTC_LEGEND_TRADING.pathname,
      ee = z === H.EARN_HOME.pathname;
    l(
      7,
      (v = !(J && _e.isMobile) && !(ee && _e.isMobile) && an.indexOf(z) >= 0)
    ),
      D && l(7, (v = !(J && _e.isMobile) && $.indexOf(z) >= 0));
  }
  function I(N, D, z) {
    rn.next(z), l(9, (w = N && D <= z));
  }
  function U() {
    l(5, (S = Ue.pageYOffset));
  }
  function B() {
    l(8, (R = Ue.innerWidth));
  }
  function A() {
    (P = this.offsetHeight), l(6, P);
  }
  function F(N) {
    Ge[N ? "unshift" : "push"](() => {
      (C = N), l(10, C);
    });
  }
  return (
    (r.$$set = (N) => {
      "isLogin" in N && l(0, (i = N.isLogin)),
        "type" in N && l(1, (o = N.type)),
        "showTop" in N && l(12, (a = N.showTop)),
        "modalUI" in N && l(2, (c = N.modalUI)),
        "newLayout" in N && l(3, (f = N.newLayout)),
        "isHome" in N && l(4, (m = N.isHome)),
        "useContractMenu" in N && l(13, (g = N.useContractMenu)),
        "$$scope" in N && l(20, (s = N.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 20480 && p(t, a), r.$$.dirty & 224 && I(v, S, P);
    }),
    [i, o, c, f, m, S, P, v, R, w, C, _, a, g, t, n, U, B, A, F, s]
  );
}
class Ki extends re {
  constructor(e) {
    super(),
      ie(this, e, qi, ji, se, {
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
const es = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ki }, Symbol.toStringTag, {
    value: "Module",
  })
);
export { Ki as H, Gr as L, Ni as M, es as a, L as l };
//# sourceMappingURL=chunk-233e32eb.js.map
