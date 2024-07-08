import {
  S as ol,
  i as il,
  s as Tl,
  l as Co,
  u as _o,
  m as ho,
  n as Lo,
  k as Gl,
  t as pl,
  y as Ma,
  e as s,
  c as o,
  a as E,
  d as t,
  b as e,
  g as W,
  a7 as vo,
  a8 as go,
  D as O,
  F as R,
  H as a,
  C as N,
  E as d,
  R as Fl,
  K as No,
  I as Tt,
  Y as Po,
  a9 as Do,
  p as Wr,
  q as Kr,
  G as Uo,
  r as yr,
  aa as Mo,
  x as Xr,
  J as Ho,
  L as mo,
  o as qr,
  _ as so,
  v as Yo,
  $ as oo,
  z as Go,
  ah as Ie,
  ai as Ae,
} from "./chunk-8f7551c4.js";
import {
  e as po,
  S as bo,
  l as Fo,
  q as ko,
  m as wr,
  f as Vo,
  s as Jr,
} from "./app-6c8af094.js";
import {
  A as bl,
  L as C,
  a4 as Bo,
  af as sl,
  P as L,
  u as Wo,
  f as Ko,
  am as yo,
  an as Xo,
  w as qo,
  aj as wo,
  ao as io,
  j as Jo,
  ac as zo,
  m as Qo,
  s as jo,
  ap as Zo,
  c as uo,
  M as zr,
  q as xo,
  ai as $o,
  aq as ei,
  t as ai,
} from "./chunk-772394bf.js";
import { S as ti, f as li } from "./chunk-2724ef1c.js";
/* empty css              */ function To(l, r, i) {
  const I = l.slice();
  return (I[8] = r[i]), (I[10] = i), I;
}
const ri = (l) => ({ items: l & 1 }),
  no = (l) => ({ items: l[0] });
function Io(l, r) {
  let i, I, c, n, T, A, f;
  return {
    key: l,
    first: null,
    c() {
      (i = s("a")), (I = s("img")), (T = O()), this.h();
    },
    l(u) {
      i = o(u, "A", {
        class: !0,
        "data-action": !0,
        "data-label": !0,
        target: !0,
        rel: !0,
        href: !0,
      });
      var v = E(i);
      (I = o(v, "IMG", {
        width: !0,
        height: !0,
        class: !0,
        "data-src": !0,
        alt: !0,
      })),
        (T = R(v)),
        v.forEach(t),
        this.h();
    },
    h() {
      e(I, "width", "36"),
        e(I, "height", "36"),
        e(I, "class", "lazyload svelte-1nagd9c"),
        e(I, "data-src", (c = r[8].img)),
        e(I, "alt", (n = r[8].alt)),
        e(i, "class", "ga svelte-1nagd9c"),
        e(i, "data-action", "footerlink"),
        e(i, "data-label", (A = "footerlink." + r[8].alt)),
        e(i, "target", "_blank"),
        e(i, "rel", "noopener noreferrer nofollow"),
        e(i, "href", (f = r[8].url)),
        (this.first = i);
    },
    m(u, v) {
      W(u, i, v), a(i, I), a(i, T);
    },
    p(u, v) {
      (r = u),
        v & 1 && c !== (c = r[8].img) && e(I, "data-src", c),
        v & 1 && n !== (n = r[8].alt) && e(I, "alt", n),
        v & 1 && A !== (A = "footerlink." + r[8].alt) && e(i, "data-label", A),
        v & 1 && f !== (f = r[8].url) && e(i, "href", f);
    },
    d(u) {
      u && t(i);
    },
  };
}
function Ei(l) {
  let r,
    i = [],
    I = new Map(),
    c = l[0];
  const n = (T) => T[8].alt;
  for (let T = 0; T < c.length; T += 1) {
    let A = To(l, c, T),
      f = n(A);
    I.set(f, (i[T] = Io(f, A)));
  }
  return {
    c() {
      r = s("div");
      for (let T = 0; T < i.length; T += 1) i[T].c();
      this.h();
    },
    l(T) {
      r = o(T, "DIV", { class: !0 });
      var A = E(r);
      for (let f = 0; f < i.length; f += 1) i[f].l(A);
      A.forEach(t), this.h();
    },
    h() {
      e(r, "class", "media df fww svelte-1nagd9c");
    },
    m(T, A) {
      W(T, r, A);
      for (let f = 0; f < i.length; f += 1) i[f].m(r, null);
    },
    p(T, A) {
      A & 1 && ((c = T[0]), (i = vo(i, A, n, 1, T, c, I, r, go, Io, null, To)));
    },
    d(T) {
      T && t(r);
      for (let A = 0; A < i.length; A += 1) i[A].d();
    },
  };
}
function si(l) {
  let r;
  const i = l[3].default,
    I = Co(i, l, l[2], no),
    c = I || Ei(l);
  return {
    c() {
      c && c.c();
    },
    l(n) {
      c && c.l(n);
    },
    m(n, T) {
      c && c.m(n, T), (r = !0);
    },
    p(n, [T]) {
      I
        ? I.p &&
          (!r || T & 5) &&
          _o(I, i, n, n[2], r ? Lo(i, n[2], T, ri) : ho(n[2]), no)
        : c && c.p && (!r || T & 1) && c.p(n, r ? T : -1);
    },
    i(n) {
      r || (Gl(c, n), (r = !0));
    },
    o(n) {
      pl(c, n), (r = !1);
    },
    d(n) {
      c && c.d(n);
    },
  };
}
function oi(l, r, i) {
  let I, c;
  Ma(l, bl, (m) => i(1, (c = m)));
  let { $$slots: n = {}, $$scope: T } = r;
  const A = `${bo.STATIC_URL}/s/web/media/`,
    f = {
      FACEBOOK: A + "facebook.svg",
      TWITTER:
        "https://img.phemex.com/v1/c80f707e-e491-410c-b9ed-e28fdf5e3d6c/twitter.svg",
      TELEGRAM: A + "telegram.svg",
      YOUTUBE: A + "youtube.svg",
      MEDIUM: A + "medium.svg",
      VK: A + "vk.svg",
      KAKAO: A + "kakao.svg",
      NAVER: A + "naver.svg",
      WECHAT: A + "wechat.svg",
      MICROBLOG: A + "microblog.svg",
      LINKIN: A + "linkin.svg",
      SNAPCHAT: A + "snapchat.svg",
      INSTAGRAM: A + "instagram.svg",
      DISCORD: A + "discord.svg",
      TIKTOK: A + "tiktok.svg",
    },
    u = {
      FACEBOOK: { url: C.PHEMEX_FACEBOOK, img: f.FACEBOOK, alt: "Facebook" },
      TWITTER: { url: C.PHEMEX_TWITTER, img: f.TWITTER, alt: "Twitter" },
      TELEGRAM: { url: C.PHEMEX_TELEGRAM, img: f.TELEGRAM, alt: "Telegram" },
      LINKIN: { url: C.PHEMEX_LINKEDIN, img: f.LINKIN, alt: "linkedin" },
      YOUTUBE: { url: C.PHEMEX_YOUTUBE, img: f.YOUTUBE, alt: "Youtube" },
      INSTAGRAM: {
        url: C.PHEMEX_INSTAGRAM_EN,
        img: f.INSTAGRAM,
        alt: "Instagram",
      },
      DISCORD: { url: C.PHEMEX_DISCORD, img: f.DISCORD, alt: "Discord" },
      TV: { url: C.PHEMEX_TV, img: Bo.TV, alt: "tradeView" },
    },
    v = {
      en: Object.values(u),
      ru: [
        { url: C.PHEMEX_TWITTER_RU, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_RU, img: f.TELEGRAM, alt: "Telegram" },
        u.YOUTUBE,
        { url: C.PHEMEX_VK_RU, img: f.VK, alt: "Vk" },
        { url: C.PHEMEX_INSTAGRAM_RU, img: f.INSTAGRAM, alt: "Instagram" },
        u.TV,
      ],
      ko: [
        { url: C.PHEMEX_FACEBOOK_KO, img: f.FACEBOOK, alt: "Facebook" },
        { url: C.PHEMEX_TWITTER, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_KO, img: f.TELEGRAM, alt: "Telegram" },
        u.YOUTUBE,
        { url: C.PHEMEX_KAKAO_KO, img: f.KAKAO, alt: "Kakao" },
        { url: C.PHEMEX_NAVER_KO, img: f.NAVER, alt: "Naver" },
        u.TV,
      ],
      ja: [{ url: C.PHEMEX_TWITTER_PULSE, img: f.TWITTER, alt: "Twitter" }],
      es: [
        { url: C.PHEMEX_FACEBOOK_ES, img: f.FACEBOOK, alt: "Facebook" },
        { url: C.PHEMEX_TWITTER_ES, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_ES, img: f.TELEGRAM, alt: "Telegram" },
        { url: C.PHEMEX_LINKEDIN, img: f.LINKIN, alt: "linkedin" },
        { url: C.PHEMEX_MEDIUM, img: f.MEDIUM, alt: "Medium" },
        { url: C.PHEMEX_INSTAGRAM_ES, img: f.INSTAGRAM, alt: "Instagram" },
        u.TV,
      ],
      de: [
        { url: C.PHEMEX_FACEBOOK_DE, img: f.FACEBOOK, alt: "Facebook" },
        { url: C.PHEMEX_TWITTER_DE, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_DE, img: f.TELEGRAM, alt: "Telegram" },
        u.YOUTUBE,
        { url: C.PHEMEX_MEDIUM, img: f.MEDIUM, alt: "Medium" },
        { url: C.PHEMEX_INSTAGRAM_DE, img: f.INSTAGRAM, alt: "Instagram" },
        u.TV,
      ],
      fr: [
        u.FACEBOOK,
        { url: C.PHEMEX_TWITTER_FR, img: f.TWITTER, alt: "Twitter" },
        u.TELEGRAM,
        u.YOUTUBE,
        u.LINKIN,
        u.DISCORD,
        u.INSTAGRAM,
        u.TV,
      ],
      tr: [
        u.FACEBOOK,
        { url: C.PHEMEX_TWITTER_TR, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_TR, img: f.TELEGRAM, alt: "Telegram" },
        { url: C.PHEMEX_INSTAGRAM_TR, img: f.INSTAGRAM, alt: "Instagram" },
        u.TV,
      ],
      pt: [
        u.FACEBOOK,
        { url: C.PHEMEX_TWITTER_PT, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_PT, img: f.TELEGRAM, alt: "Telegram" },
        u.LINKIN,
        u.YOUTUBE,
        u.INSTAGRAM,
        u.DISCORD,
        u.TV,
      ],
      vi: [
        { url: C.PHEMEX_FACEBOOK_VI, img: f.FACEBOOK, alt: "Facebook" },
        { url: C.PHEMEX_TWITTER_VI, img: f.TWITTER, alt: "Twitter" },
        { url: C.PHEMEX_TELEGRAM_VI, img: f.TELEGRAM, alt: "Telegram" },
        { url: C.PHEMEX_INSTAGRAM_VI, img: f.INSTAGRAM, alt: "Instagram" },
        u.TV,
      ],
    };
  return (
    (l.$$set = (m) => {
      "$$scope" in m && i(2, (T = m.$$scope));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 2 && i(0, (I = po.isJapanSite ? v.ja : v[c] || []));
    }),
    [I, c, T, n]
  );
}
class ii extends ol {
  constructor(r) {
    super(), il(this, r, oi, si, Tl, {});
  }
}
function Ao(l) {
  let r,
    i,
    I,
    c,
    n,
    T,
    A,
    f,
    u,
    v,
    m,
    g,
    b,
    V,
    P,
    p,
    Y,
    X,
    q,
    F,
    S,
    H,
    M,
    k,
    ae,
    Ee,
    Ta,
    K,
    ce,
    j,
    nt,
    na,
    ye,
    ge,
    fe,
    It,
    Ca,
    qa,
    Ha,
    _e,
    z,
    ma,
    wa,
    Ya,
    _a,
    Ia,
    Pe,
    ha,
    Xe,
    Aa,
    Ja,
    ca,
    te,
    At,
    Ga,
    De,
    za,
    qe,
    Q,
    ct,
    pa,
    Z,
    fa,
    Ue,
    Oe,
    ft,
    Oa,
    Ra,
    Qa,
    Me,
    he,
    ba,
    ja,
    Za,
    B,
    He,
    le,
    xa,
    we,
    Fa,
    ka,
    ue,
    re,
    $a,
    Je,
    Va;
  return {
    c() {
      (r = s("div")),
        (i =
          N(`BY CONTINUING TO USE PHEMEX.COM YOU HEREBY ACKNOWLEDGE THAT YOU HAVE ACCEPTED THE RISKS DISCLOSED UNDER THIS PHEMEX RISK WARNING. PHEMEX RESERVES THE RIGHT TO MODIFY ANY OF THE TERMS OF THIS
      PHEMEX RISK WARNING WITHOUT PRIOR NOTICE. IF ANY OF THE TERMS HEREUNDER ARE UNACCEPTABLE TO YOU, YOU SHOULD NOT USE PHEMEX.COM. CRYPTOCURRENCY TRADING IS HIGH-RISK AND SPECULATIVE, IT IS
      IMPORTANT THAT YOU UNDERSTAND THE RISKS BEFORE YOU START TRADING.`)),
        (I = O()),
        (c = s("div")),
        (n = N(
          "THE RISKS OF INVESTING WITH PHEMEX.COM INCLUDE, BUT ARE NOT LIMITED TO, THE FOLLOWING:"
        )),
        (T = O()),
        (A = s("div")),
        (f = s("div")),
        (u = s("div")),
        (v = s("div")),
        (m = N("1. PRICE RISKS:")),
        (g = O()),
        (b = s("div")),
        (V =
          N(`PRICES CAN AND DO FLUCTUATE ON ANY GIVEN DAY. THIS IS ESPECIALLY TRUE FOR CRYPTOCURRENCY TRADING – UNEXPECTED CHANGES IN MARKET SENTIMENT CAN LEAD TO SHARP AND SUDDEN MOVEMENT IN PRICE. IT
            IS NOT UNCOMMON FOR THE VALUE OF CRYPTOCURRENCIES TO QUICKLY DROP BY HUNDREDS, IF NOT THOUSANDS OF DOLLARS.`)),
        (P = O()),
        (p = s("div")),
        (Y = s("div")),
        (X = s("div")),
        (q = N("2. REGULATORY RISKS:")),
        (F = O()),
        (S = s("div")),
        (H =
          N(`CRYPTOCURRENCY TRANSACTIONS MAY FACE POLICY REGULATORY RISKS IN CERTAIN JURISDICTIONS AND MAY BE SUSPENDED OR PROHIBITED AT ANY TIME. THEREFORE, WE ADVISE YOU MAKE A CAREFUL JUDGMENT
            BEFORE TRADING AND TAKE THE TIME TO UNDERSTAND THE POLICY REGULATIONS OF YOUR TRADING REGION AND EVALUATE THE ECONOMIC RISK OF LOSING THE ENTIRE INVESTMENT.`)),
        (M = O()),
        (k = s("div")),
        (ae = s("div")),
        (Ee = s("div")),
        (Ta = N("3. TAX RISKS:")),
        (K = O()),
        (ce = s("div")),
        (j =
          N(`CRYPTOCURRENCY TRADING MAY BE SUBJECT TO TAXATION. YOU ARE SOLELY RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING ANY AND ALL TAXES TO THE APPROPRIATE
            TAX AUTHORITIES IN ANY SUCH JURISDICTION(S) IN WHICH YOU MAY BE LIABLE TO PAY TAX. PHEMEX SHALL NOT BE RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING
            ANY TAXES (INCLUDING, BUT NOT LIMITED TO, INCOME, CAPITAL GAINS, SALES, VALUE ADDED OR SIMILAR TAX) WHICH MAY ARISE FROM YOUR PARTICIPATION IN THE CRYPTOCURRENCY TRADING.`)),
        (nt = O()),
        (na = s("div")),
        (ye = s("div")),
        (ge = s("div")),
        (fe = N("4. REGION LIMITATION RISKS:")),
        (It = O()),
        (Ca = s("div")),
        (qa =
          N(`PHEMEX CANNOT AND DOES NOT PROVIDE SERVICES TO COUNTRIES OR TERRITORIES WHERE CRYPTOCURRENCY TRADING ACTIVITIES ARE SPECIALLY LICENSED, ACCREDITED, OR REGULATED IN OTHER WAYS. YOU SHALL
            CHECK THE APPLICABLE LAWS IN YOUR REGION AND BE FULLY RESPONSIBLE FOR ANY NEGATIVE IMPACT THAT MAY ARISE FROM YOUR RESIDENT COUNTRY’S REGULATIONS. IF YOU ARE TRAVELLING TO ANY SUCH
            COUNTRIES, YOU ACKNOWLEDGE THAT OUR SERVICES MAY BE UNAVAILABLE AND/OR BLOCKED.`)),
        (Ha = O()),
        (_e = s("div")),
        (z = s("div")),
        (ma = s("div")),
        (wa = N("5. RISKS OF CHANGE OR TERMINATION OF SERVICE:")),
        (Ya = O()),
        (_a = s("div")),
        (Ia =
          N(`PLEASE NOTE THAT PHEMEX IS IN THE PROCESS OF UNDERTAKING A LEGAL AND REGULATORY ANALYSIS OF BITCOIN TRADING WITH MARGIN. FOLLOWING THE CONCLUSION OF THIS ANALYSIS, PHEMEX MAY DECIDE TO
            AMEND THE INTENDED FUNCTIONALITY IN ORDER TO ENSURE COMPLIANCE WITH ANY LEGAL OR REGULATORY REQUIREMENTS TO WHICH PHEMEX IS SUBJECT. WE SHALL PUBLISH A NOTICE ON OUR WEBSITE OF ANY CHANGES
            OR MODIFICATIONS TO THE FUNCTIONALITY AND IT IS YOUR RESPONSIBILITY TO REGULARLY CHECK OUR WEBSITE FOR ANY SUCH NOTICES. ON THE CONCLUSION OF THIS ANALYSIS, WE WILL DECIDE WHETHER OR NOT
            TO CHANGE THE FUNCTIONALITY OF THE WEBSITE.`)),
        (Pe = O()),
        (ha = s("div")),
        (Xe = s("div")),
        (Aa = s("div")),
        (Ja = N("6. RISKS OF CRYPTOCURRENCY CONTRACT TRADING:")),
        (ca = O()),
        (te = s("div")),
        (At =
          N(`RISKS OF CRYPTOCURRENCY DERIVATIVE CONTRACT TRADING: TRADING DERIVATIVE CONTRACTS POSES ADDITIONAL RISKS NOT FOUND WITH TRADITIONAL CURRENCIES. CRYPTOCURRENCIES ARE ASSOCIATED WITH
            SUBSTANTIAL PRICE MOVEMENTS, HIGHER MARKET VOLATILITY, AND MORE CHARGES OR FEES. THESE FACTORS CAN LEAD TO INCREASED GAPPING OR SLIPPAGE COSTS.`)),
        (Ga = O()),
        (De = s("div")),
        (za =
          N(`CONTRACT TRADING OFTEN EMPLOYS LEVERAGE, WHICH INCREASES EXPOSURE TO BOTH PROFITS AND LOSSES. IF THE MARKET MOVES IN A DIRECTION THAT OPPOSES YOUR POSITION, YOU WILL EXPERIENCE A RAPID AND
      SIGNIFICANT LOSS. IT IS YOUR RESPONSIBILITY TO SET A STOP LOSS INSTRUCTION TO MITIGATE YOUR EXPOSURE AND TO AVOID FORCED LIQUIDATIONS. IN THE CASE OF A LIQUIDATION YOU WILL BEAR ALL THE LOSSES.
      PLEASE NOTE THAT ONCE AN ORDER IS SUBMITTED AND FILED BY OUR TRADING PLATFORM, IT IS FINAL AND IRREVOCABLE. YOU MUST ACCEPT ALL RISKS AND CONSEQUENCES OF YOUR TRADES.`)),
        (qe = O()),
        (Q = s("div")),
        (ct = N(
          "THE ABOVE IS A NON-EXHAUSTIVE LIST. TAKING ALL OF THE ABOVE INTO CONSIDERATION, PRIOR TO USING PHEMEX.COM FOR CRYPTOCURRENCY TRADING, YOU PROMISE THAT YOU:"
        )),
        (pa = O()),
        (Z = s("div")),
        (fa = s("div")),
        (Ue = s("div")),
        (Oe =
          N(`1. ARE OF AN AGE OF MAJORITY (AT LEAST 18 YEARS OF AGE), MEET ALL ELIGIBILITY AND RESIDENCY REQUIREMENTS, ARE FULLY ABLE AND LEGALLY COMPETENT TO USE PHEMEX.COM AND THUS ENTER INTO AN
          AGREEMENT WITH PHEMEX - ENSURING THAT IN DOING SO YOU WILL NOT VIOLATE ANY OTHER AGREEMENT TO WHICH YOU ARE A PARTY;`)),
        (ft = O()),
        (Oa = s("div")),
        (Ra = s("div")),
        (Qa =
          N(`2. HAVE THE NECESSARY AND RELEVANT EXPERIENCE AND KNOWLEDGE TO DEAL WITH AND MANAGE CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, WITH A FULL UNDERSTANDING OF THEIR FRAMEWORKS AND ARE AWARE
          OF ALL THE MERITS, RISKS AND ANY RESTRICTIONS ASSOCIATED WITH CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, BEING SOLELY RESPONSIBLE FOR ANY EVALUATIONS BASED ON SUCH KNOWLEDGE;`)),
        (Me = O()),
        (he = s("div")),
        (ba = s("div")),
        (ja = N(
          "3. ARE NOT A FOREIGN OR DOMESTIC POLITICALLY EXPOSED PERSON (PEP);"
        )),
        (Za = O()),
        (B = s("div")),
        (He = s("div")),
        (le = N(
          "4. WILL NOT BE USING PHEMEX.COM FOR ANY ILLEGAL ACTIVITY, INCLUDING BUT NOT LIMITED TO, MONEY LAUNDERING AND THE FINANCING OF TERRORISM."
        )),
        (xa = O()),
        (we = s("div")),
        (Fa =
          N(`PLEASE NOTE THAT ALL DATA ANALYSIS, PROJECTIONS, CONTENT, RESEARCH, TOOLS, AND COIN SYMBOLS ARE FOR EDUCATIONAL AND ILLUSTRATIVE PURPOSES ONLY. THEY DO NOT IMPLY OUR RECOMMENDATION OR
      SOLICITATION TO BUY OR SELL A PARTICULAR ASSET OR TO ENGAGE IN ANY PARTICULAR INVESTMENT STRATEGY. PROJECTIONS OR OTHER INFORMATION REGARDING THE LIKELIHOOD OF VARIOUS INVESTMENT OUTCOMES ARE
      HYPOTHETICAL IN NATURE AND DO NOT REFLECT ACTUAL INVESTMENT RESULTS OR A GUARANTEE OF FUTURE RESULTS. YOU ALONE ARE RESPONSIBLE FOR EVALUATING THE MERITS AND RISKS ASSOCIATED WITH THE USE OF
      CRYPTOCURRENCY TRADING ON PHEMEX.COM. WE ADVISE YOU, TO THE EXTENT NECESSARY, TO CONSULT AN APPROPRIATE FINANCIAL ADVISER, ACCOUNTANT, LAWYER, OR TAX PROFESSIONAL PRIOR TO ENGAGING IN
      CRYPTOCURRENCY TRADING.`)),
        (ka = O()),
        (ue = s("div")),
        (re =
          N(`WE STRONGLY SUGGEST THAT YOU TAKE THE TIME TO MAKE AN INFORMED DECISION WHETHER TO ENGAGE IN CRYPTOCURRENCY TRANSACTIONS AND REASONABLY ALLOCATE DIGITAL ASSETS ACCORDING TO YOUR OWN FINANCIAL
      SITUATION.`)),
        ($a = O()),
        (Je = s("div")),
        (Va = N(
          "THE TERMS USED IN THIS PHEMEX RISK WARNING SHALL HAVE THE SAME MEANINGS AS IN THE PHEMEX TERMS OF USE EXCEPT WHERE STATED OTHERWISE."
        )),
        this.h();
    },
    l(h) {
      r = o(h, "DIV", { class: !0 });
      var y = E(r);
      (i = d(
        y,
        `BY CONTINUING TO USE PHEMEX.COM YOU HEREBY ACKNOWLEDGE THAT YOU HAVE ACCEPTED THE RISKS DISCLOSED UNDER THIS PHEMEX RISK WARNING. PHEMEX RESERVES THE RIGHT TO MODIFY ANY OF THE TERMS OF THIS
      PHEMEX RISK WARNING WITHOUT PRIOR NOTICE. IF ANY OF THE TERMS HEREUNDER ARE UNACCEPTABLE TO YOU, YOU SHOULD NOT USE PHEMEX.COM. CRYPTOCURRENCY TRADING IS HIGH-RISK AND SPECULATIVE, IT IS
      IMPORTANT THAT YOU UNDERSTAND THE RISKS BEFORE YOU START TRADING.`
      )),
        y.forEach(t),
        (I = R(h)),
        (c = o(h, "DIV", { class: !0 }));
      var se = E(c);
      (n = d(
        se,
        "THE RISKS OF INVESTING WITH PHEMEX.COM INCLUDE, BUT ARE NOT LIMITED TO, THE FOLLOWING:"
      )),
        se.forEach(t),
        (T = R(h)),
        (A = o(h, "DIV", { class: !0 }));
      var Re = E(A);
      f = o(Re, "DIV", { class: !0 });
      var Ot = E(f);
      u = o(Ot, "DIV", {});
      var La = E(u);
      v = o(La, "DIV", {});
      var Rt = E(v);
      (m = d(Rt, "1. PRICE RISKS:")),
        Rt.forEach(t),
        (g = R(La)),
        (b = o(La, "DIV", {}));
      var va = E(b);
      (V = d(
        va,
        `PRICES CAN AND DO FLUCTUATE ON ANY GIVEN DAY. THIS IS ESPECIALLY TRUE FOR CRYPTOCURRENCY TRADING – UNEXPECTED CHANGES IN MARKET SENTIMENT CAN LEAD TO SHARP AND SUDDEN MOVEMENT IN PRICE. IT
            IS NOT UNCOMMON FOR THE VALUE OF CRYPTOCURRENCIES TO QUICKLY DROP BY HUNDREDS, IF NOT THOUSANDS OF DOLLARS.`
      )),
        va.forEach(t),
        La.forEach(t),
        Ot.forEach(t),
        (P = R(Re)),
        (p = o(Re, "DIV", { class: !0 }));
      var Le = E(p);
      Y = o(Le, "DIV", {});
      var et = E(Y);
      X = o(et, "DIV", {});
      var Nt = E(X);
      (q = d(Nt, "2. REGULATORY RISKS:")),
        Nt.forEach(t),
        (F = R(et)),
        (S = o(et, "DIV", {}));
      var at = E(S);
      (H = d(
        at,
        `CRYPTOCURRENCY TRANSACTIONS MAY FACE POLICY REGULATORY RISKS IN CERTAIN JURISDICTIONS AND MAY BE SUSPENDED OR PROHIBITED AT ANY TIME. THEREFORE, WE ADVISE YOU MAKE A CAREFUL JUDGMENT
            BEFORE TRADING AND TAKE THE TIME TO UNDERSTAND THE POLICY REGULATIONS OF YOUR TRADING REGION AND EVALUATE THE ECONOMIC RISK OF LOSING THE ENTIRE INVESTMENT.`
      )),
        at.forEach(t),
        et.forEach(t),
        Le.forEach(t),
        (M = R(Re)),
        (k = o(Re, "DIV", { class: !0 }));
      var dt = E(k);
      ae = o(dt, "DIV", {});
      var ze = E(ae);
      Ee = o(ze, "DIV", {});
      var Se = E(Ee);
      (Ta = d(Se, "3. TAX RISKS:")),
        Se.forEach(t),
        (K = R(ze)),
        (ce = o(ze, "DIV", {}));
      var tl = E(ce);
      (j = d(
        tl,
        `CRYPTOCURRENCY TRADING MAY BE SUBJECT TO TAXATION. YOU ARE SOLELY RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING ANY AND ALL TAXES TO THE APPROPRIATE
            TAX AUTHORITIES IN ANY SUCH JURISDICTION(S) IN WHICH YOU MAY BE LIABLE TO PAY TAX. PHEMEX SHALL NOT BE RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING
            ANY TAXES (INCLUDING, BUT NOT LIMITED TO, INCOME, CAPITAL GAINS, SALES, VALUE ADDED OR SIMILAR TAX) WHICH MAY ARISE FROM YOUR PARTICIPATION IN THE CRYPTOCURRENCY TRADING.`
      )),
        tl.forEach(t),
        ze.forEach(t),
        dt.forEach(t),
        (nt = R(Re)),
        (na = o(Re, "DIV", { class: !0 }));
      var ut = E(na);
      ye = o(ut, "DIV", {});
      var ga = E(ye);
      ge = o(ga, "DIV", {});
      var St = E(ge);
      (fe = d(St, "4. REGION LIMITATION RISKS:")),
        St.forEach(t),
        (It = R(ga)),
        (Ca = o(ga, "DIV", {}));
      var Pa = E(Ca);
      (qa = d(
        Pa,
        `PHEMEX CANNOT AND DOES NOT PROVIDE SERVICES TO COUNTRIES OR TERRITORIES WHERE CRYPTOCURRENCY TRADING ACTIVITIES ARE SPECIALLY LICENSED, ACCREDITED, OR REGULATED IN OTHER WAYS. YOU SHALL
            CHECK THE APPLICABLE LAWS IN YOUR REGION AND BE FULLY RESPONSIBLE FOR ANY NEGATIVE IMPACT THAT MAY ARISE FROM YOUR RESIDENT COUNTRY’S REGULATIONS. IF YOU ARE TRAVELLING TO ANY SUCH
            COUNTRIES, YOU ACKNOWLEDGE THAT OUR SERVICES MAY BE UNAVAILABLE AND/OR BLOCKED.`
      )),
        Pa.forEach(t),
        ga.forEach(t),
        ut.forEach(t),
        (Ha = R(Re)),
        (_e = o(Re, "DIV", { class: !0 }));
      var oe = E(_e);
      z = o(oe, "DIV", {});
      var Ba = E(z);
      ma = o(Ba, "DIV", {});
      var tt = E(ma);
      (wa = d(tt, "5. RISKS OF CHANGE OR TERMINATION OF SERVICE:")),
        tt.forEach(t),
        (Ya = R(Ba)),
        (_a = o(Ba, "DIV", {}));
      var Ct = E(_a);
      (Ia = d(
        Ct,
        `PLEASE NOTE THAT PHEMEX IS IN THE PROCESS OF UNDERTAKING A LEGAL AND REGULATORY ANALYSIS OF BITCOIN TRADING WITH MARGIN. FOLLOWING THE CONCLUSION OF THIS ANALYSIS, PHEMEX MAY DECIDE TO
            AMEND THE INTENDED FUNCTIONALITY IN ORDER TO ENSURE COMPLIANCE WITH ANY LEGAL OR REGULATORY REQUIREMENTS TO WHICH PHEMEX IS SUBJECT. WE SHALL PUBLISH A NOTICE ON OUR WEBSITE OF ANY CHANGES
            OR MODIFICATIONS TO THE FUNCTIONALITY AND IT IS YOUR RESPONSIBILITY TO REGULARLY CHECK OUR WEBSITE FOR ANY SUCH NOTICES. ON THE CONCLUSION OF THIS ANALYSIS, WE WILL DECIDE WHETHER OR NOT
            TO CHANGE THE FUNCTIONALITY OF THE WEBSITE.`
      )),
        Ct.forEach(t),
        Ba.forEach(t),
        oe.forEach(t),
        (Pe = R(Re)),
        (ha = o(Re, "DIV", { class: !0 }));
      var Da = E(ha);
      Xe = o(Da, "DIV", {});
      var ie = E(Xe);
      Aa = o(ie, "DIV", {});
      var ll = E(Aa);
      (Ja = d(ll, "6. RISKS OF CRYPTOCURRENCY CONTRACT TRADING:")),
        ll.forEach(t),
        (ca = R(ie)),
        (te = o(ie, "DIV", {}));
      var _t = E(te);
      (At = d(
        _t,
        `RISKS OF CRYPTOCURRENCY DERIVATIVE CONTRACT TRADING: TRADING DERIVATIVE CONTRACTS POSES ADDITIONAL RISKS NOT FOUND WITH TRADITIONAL CURRENCIES. CRYPTOCURRENCIES ARE ASSOCIATED WITH
            SUBSTANTIAL PRICE MOVEMENTS, HIGHER MARKET VOLATILITY, AND MORE CHARGES OR FEES. THESE FACTORS CAN LEAD TO INCREASED GAPPING OR SLIPPAGE COSTS.`
      )),
        _t.forEach(t),
        ie.forEach(t),
        Da.forEach(t),
        Re.forEach(t),
        (Ga = R(h)),
        (De = o(h, "DIV", { class: !0 }));
      var lt = E(De);
      (za = d(
        lt,
        `CONTRACT TRADING OFTEN EMPLOYS LEVERAGE, WHICH INCREASES EXPOSURE TO BOTH PROFITS AND LOSSES. IF THE MARKET MOVES IN A DIRECTION THAT OPPOSES YOUR POSITION, YOU WILL EXPERIENCE A RAPID AND
      SIGNIFICANT LOSS. IT IS YOUR RESPONSIBILITY TO SET A STOP LOSS INSTRUCTION TO MITIGATE YOUR EXPOSURE AND TO AVOID FORCED LIQUIDATIONS. IN THE CASE OF A LIQUIDATION YOU WILL BEAR ALL THE LOSSES.
      PLEASE NOTE THAT ONCE AN ORDER IS SUBMITTED AND FILED BY OUR TRADING PLATFORM, IT IS FINAL AND IRREVOCABLE. YOU MUST ACCEPT ALL RISKS AND CONSEQUENCES OF YOUR TRADES.`
      )),
        lt.forEach(t),
        (qe = R(h)),
        (Q = o(h, "DIV", { class: !0 }));
      var ht = E(Q);
      (ct = d(
        ht,
        "THE ABOVE IS A NON-EXHAUSTIVE LIST. TAKING ALL OF THE ABOVE INTO CONSIDERATION, PRIOR TO USING PHEMEX.COM FOR CRYPTOCURRENCY TRADING, YOU PROMISE THAT YOU:"
      )),
        ht.forEach(t),
        (pa = R(h)),
        (Z = o(h, "DIV", { class: !0 }));
      var Ne = E(Z);
      fa = o(Ne, "DIV", { class: !0 });
      var Ce = E(fa);
      Ue = o(Ce, "DIV", {});
      var rl = E(Ue);
      (Oe = d(
        rl,
        `1. ARE OF AN AGE OF MAJORITY (AT LEAST 18 YEARS OF AGE), MEET ALL ELIGIBILITY AND RESIDENCY REQUIREMENTS, ARE FULLY ABLE AND LEGALLY COMPETENT TO USE PHEMEX.COM AND THUS ENTER INTO AN
          AGREEMENT WITH PHEMEX - ENSURING THAT IN DOING SO YOU WILL NOT VIOLATE ANY OTHER AGREEMENT TO WHICH YOU ARE A PARTY;`
      )),
        rl.forEach(t),
        Ce.forEach(t),
        (ft = R(Ne)),
        (Oa = o(Ne, "DIV", { class: !0 }));
      var Lt = E(Oa);
      Ra = o(Lt, "DIV", {});
      var rt = E(Ra);
      (Qa = d(
        rt,
        `2. HAVE THE NECESSARY AND RELEVANT EXPERIENCE AND KNOWLEDGE TO DEAL WITH AND MANAGE CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, WITH A FULL UNDERSTANDING OF THEIR FRAMEWORKS AND ARE AWARE
          OF ALL THE MERITS, RISKS AND ANY RESTRICTIONS ASSOCIATED WITH CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, BEING SOLELY RESPONSIBLE FOR ANY EVALUATIONS BASED ON SUCH KNOWLEDGE;`
      )),
        rt.forEach(t),
        Lt.forEach(t),
        (Me = R(Ne)),
        (he = o(Ne, "DIV", { class: !0 }));
      var vt = E(he);
      ba = o(vt, "DIV", {});
      var Ua = E(ba);
      (ja = d(
        Ua,
        "3. ARE NOT A FOREIGN OR DOMESTIC POLITICALLY EXPOSED PERSON (PEP);"
      )),
        Ua.forEach(t),
        vt.forEach(t),
        (Za = R(Ne)),
        (B = o(Ne, "DIV", { class: !0 }));
      var de = E(B);
      He = o(de, "DIV", {});
      var El = E(He);
      (le = d(
        El,
        "4. WILL NOT BE USING PHEMEX.COM FOR ANY ILLEGAL ACTIVITY, INCLUDING BUT NOT LIMITED TO, MONEY LAUNDERING AND THE FINANCING OF TERRORISM."
      )),
        El.forEach(t),
        de.forEach(t),
        Ne.forEach(t),
        (xa = R(h)),
        (we = o(h, "DIV", { class: !0 }));
      var gt = E(we);
      (Fa = d(
        gt,
        `PLEASE NOTE THAT ALL DATA ANALYSIS, PROJECTIONS, CONTENT, RESEARCH, TOOLS, AND COIN SYMBOLS ARE FOR EDUCATIONAL AND ILLUSTRATIVE PURPOSES ONLY. THEY DO NOT IMPLY OUR RECOMMENDATION OR
      SOLICITATION TO BUY OR SELL A PARTICULAR ASSET OR TO ENGAGE IN ANY PARTICULAR INVESTMENT STRATEGY. PROJECTIONS OR OTHER INFORMATION REGARDING THE LIKELIHOOD OF VARIOUS INVESTMENT OUTCOMES ARE
      HYPOTHETICAL IN NATURE AND DO NOT REFLECT ACTUAL INVESTMENT RESULTS OR A GUARANTEE OF FUTURE RESULTS. YOU ALONE ARE RESPONSIBLE FOR EVALUATING THE MERITS AND RISKS ASSOCIATED WITH THE USE OF
      CRYPTOCURRENCY TRADING ON PHEMEX.COM. WE ADVISE YOU, TO THE EXTENT NECESSARY, TO CONSULT AN APPROPRIATE FINANCIAL ADVISER, ACCOUNTANT, LAWYER, OR TAX PROFESSIONAL PRIOR TO ENGAGING IN
      CRYPTOCURRENCY TRADING.`
      )),
        gt.forEach(t),
        (ka = R(h)),
        (ue = o(h, "DIV", { class: !0 }));
      var Pt = E(ue);
      (re = d(
        Pt,
        `WE STRONGLY SUGGEST THAT YOU TAKE THE TIME TO MAKE AN INFORMED DECISION WHETHER TO ENGAGE IN CRYPTOCURRENCY TRANSACTIONS AND REASONABLY ALLOCATE DIGITAL ASSETS ACCORDING TO YOUR OWN FINANCIAL
      SITUATION.`
      )),
        Pt.forEach(t),
        ($a = R(h)),
        (Je = o(h, "DIV", { class: !0 }));
      var Qe = E(Je);
      (Va = d(
        Qe,
        "THE TERMS USED IN THIS PHEMEX RISK WARNING SHALL HAVE THE SAME MEANINGS AS IN THE PHEMEX TERMS OF USE EXCEPT WHERE STATED OTHERWISE."
      )),
        Qe.forEach(t),
        this.h();
    },
    h() {
      e(r, "class", "mt12 f14"),
        e(c, "class", "mt12 f14"),
        e(f, "class", "mt12 f14 df"),
        e(p, "class", "mt12 f14 df"),
        e(k, "class", "mt12 f14 df"),
        e(na, "class", "mt12 f14 df"),
        e(_e, "class", "mt12 f14 df"),
        e(ha, "class", "mt12 f14 df"),
        e(A, "class", "ol"),
        e(De, "class", "mt12 f14"),
        e(Q, "class", "mt12 f14"),
        e(fa, "class", "mt12 f14 df"),
        e(Oa, "class", "mt12 f14 df"),
        e(he, "class", "mt12 f14 df"),
        e(B, "class", "mt12 f14 df"),
        e(Z, "class", "ol"),
        e(we, "class", "mt12 f14"),
        e(ue, "class", "mt12 f14"),
        e(Je, "class", "mt12 f14");
    },
    m(h, y) {
      W(h, r, y),
        a(r, i),
        W(h, I, y),
        W(h, c, y),
        a(c, n),
        W(h, T, y),
        W(h, A, y),
        a(A, f),
        a(f, u),
        a(u, v),
        a(v, m),
        a(u, g),
        a(u, b),
        a(b, V),
        a(A, P),
        a(A, p),
        a(p, Y),
        a(Y, X),
        a(X, q),
        a(Y, F),
        a(Y, S),
        a(S, H),
        a(A, M),
        a(A, k),
        a(k, ae),
        a(ae, Ee),
        a(Ee, Ta),
        a(ae, K),
        a(ae, ce),
        a(ce, j),
        a(A, nt),
        a(A, na),
        a(na, ye),
        a(ye, ge),
        a(ge, fe),
        a(ye, It),
        a(ye, Ca),
        a(Ca, qa),
        a(A, Ha),
        a(A, _e),
        a(_e, z),
        a(z, ma),
        a(ma, wa),
        a(z, Ya),
        a(z, _a),
        a(_a, Ia),
        a(A, Pe),
        a(A, ha),
        a(ha, Xe),
        a(Xe, Aa),
        a(Aa, Ja),
        a(Xe, ca),
        a(Xe, te),
        a(te, At),
        W(h, Ga, y),
        W(h, De, y),
        a(De, za),
        W(h, qe, y),
        W(h, Q, y),
        a(Q, ct),
        W(h, pa, y),
        W(h, Z, y),
        a(Z, fa),
        a(fa, Ue),
        a(Ue, Oe),
        a(Z, ft),
        a(Z, Oa),
        a(Oa, Ra),
        a(Ra, Qa),
        a(Z, Me),
        a(Z, he),
        a(he, ba),
        a(ba, ja),
        a(Z, Za),
        a(Z, B),
        a(B, He),
        a(He, le),
        W(h, xa, y),
        W(h, we, y),
        a(we, Fa),
        W(h, ka, y),
        W(h, ue, y),
        a(ue, re),
        W(h, $a, y),
        W(h, Je, y),
        a(Je, Va);
    },
    d(h) {
      h && t(r),
        h && t(I),
        h && t(c),
        h && t(T),
        h && t(A),
        h && t(Ga),
        h && t(De),
        h && t(qe),
        h && t(Q),
        h && t(pa),
        h && t(Z),
        h && t(xa),
        h && t(we),
        h && t(ka),
        h && t(ue),
        h && t($a),
        h && t(Je);
    },
  };
}
function Ti(l) {
  let r,
    i,
    I,
    c,
    n,
    T,
    A,
    f,
    u,
    v,
    m,
    g,
    b,
    V,
    P,
    p,
    Y,
    X,
    q,
    F,
    S = l[0] && Ao();
  return {
    c() {
      (r = s("div")),
        (i = s("div")),
        (I = s("span")),
        (c = N("PHEMEX RISK WARNING")),
        (n = s("span")),
        (T = s("span")),
        (A = N("© 2018-2024 phemex.com. All rights reserved")),
        (f = O()),
        (u = s("div")),
        (v = N("INVESTING INHERENTLY INVOLVES RISKS, DO SO AT YOUR OWN RISK.")),
        (m = O()),
        (g = s("div")),
        (b =
          N(`THIS PHEMEX RISK WARNING ILLUSTRATES POTENTIAL RISKS THAT YOU MAY FACE WHILE USING PHEMEX.COM AND ALL OF ITS ASSOCIATED SERVICES, AND AIMS TO HELP YOU EVALUATE AND DETERMINE YOUR OWN CAPABILITIES.
    PLEASE MAKE SURE THAT YOU CAREFULLY READ AND FULLY UNDERSTAND THE TERMS, ARTICLES AND/OR CONDITIONS OF THIS PHEMEX RISK WARNING.`)),
        (V = O()),
        S && S.c(),
        (P = O()),
        (p = s("div")),
        (Y = s("i")),
        (X = N("")),
        this.h();
    },
    l(H) {
      r = o(H, "DIV", { class: !0 });
      var M = E(r);
      i = o(M, "DIV", { class: !0 });
      var k = E(i);
      I = o(k, "SPAN", { class: !0 });
      var ae = E(I);
      (c = d(ae, "PHEMEX RISK WARNING")),
        ae.forEach(t),
        (n = o(k, "SPAN", { class: !0 })),
        E(n).forEach(t),
        (T = o(k, "SPAN", { class: !0 }));
      var Ee = E(T);
      (A = d(Ee, "© 2018-2024 phemex.com. All rights reserved")),
        Ee.forEach(t),
        k.forEach(t),
        (f = R(M)),
        (u = o(M, "DIV", { class: !0 }));
      var Ta = E(u);
      (v = d(
        Ta,
        "INVESTING INHERENTLY INVOLVES RISKS, DO SO AT YOUR OWN RISK."
      )),
        Ta.forEach(t),
        (m = R(M)),
        (g = o(M, "DIV", { class: !0 }));
      var K = E(g);
      (b = d(
        K,
        `THIS PHEMEX RISK WARNING ILLUSTRATES POTENTIAL RISKS THAT YOU MAY FACE WHILE USING PHEMEX.COM AND ALL OF ITS ASSOCIATED SERVICES, AND AIMS TO HELP YOU EVALUATE AND DETERMINE YOUR OWN CAPABILITIES.
    PLEASE MAKE SURE THAT YOU CAREFULLY READ AND FULLY UNDERSTAND THE TERMS, ARTICLES AND/OR CONDITIONS OF THIS PHEMEX RISK WARNING.`
      )),
        K.forEach(t),
        (V = R(M)),
        S && S.l(M),
        (P = R(M)),
        (p = o(M, "DIV", { class: !0 }));
      var ce = E(p);
      Y = o(ce, "I", { class: !0 });
      var j = E(Y);
      (X = d(j, "")), j.forEach(t), ce.forEach(t), M.forEach(t), this.h();
    },
    h() {
      e(I, "class", "f18"),
        e(n, "class", "xs:dn line f1 svelte-g5kiyy"),
        e(T, "class", "xs:dn"),
        e(i, "class", "df aic"),
        e(u, "class", "mt20 f14"),
        e(g, "class", "mt12 f14"),
        e(Y, "class", "iconfont svelte-g5kiyy"),
        Fl(Y, "animation", l[0]),
        e(p, "class", "df aic jcc cp lh30 arrow svelte-g5kiyy"),
        e(r, "class", "wrap lh24 T4 svelte-g5kiyy");
    },
    m(H, M) {
      W(H, r, M),
        a(r, i),
        a(i, I),
        a(I, c),
        a(i, n),
        a(i, T),
        a(T, A),
        a(r, f),
        a(r, u),
        a(u, v),
        a(r, m),
        a(r, g),
        a(g, b),
        a(r, V),
        S && S.m(r, null),
        a(r, P),
        a(r, p),
        a(p, Y),
        a(Y, X),
        q || ((F = No(p, "click", l[1])), (q = !0));
    },
    p(H, [M]) {
      H[0] ? S || ((S = Ao()), S.c(), S.m(r, P)) : S && (S.d(1), (S = null)),
        M & 1 && Fl(Y, "animation", H[0]);
    },
    i: Tt,
    o: Tt,
    d(H) {
      H && t(r), S && S.d(), (q = !1), F();
    },
  };
}
function ni(l, r, i) {
  let I = !1;
  function c() {
    i(0, (I = !I));
  }
  return [I, c];
}
class Ii extends ol {
  constructor(r) {
    super(), il(this, r, ni, Ti, Tl, {});
  }
}
const nl = {
    Title: "ff30a4",
    Description: "ddb066",
    PhemexKey: "46f85a",
    WeUsePhemex: "50abfe",
    PerpetualVIPProgram: "11bfed",
    TheMoreYouTrade: "442efe",
    Levels: "5b0c9f",
    TotalVolume: "06cae6",
    Maker: "487713",
    Taker: "29dce1",
    BalancedMenus: "941de4",
    Rules: "183ff1",
    Rules1: "4f9c27",
    Rules2: "f4ec6c",
    Rules3: "fb0c9b",
    Rules4: "395f29",
    VipLeverIs: "2fbcd4",
    PerpetualMarketMakingProgram: "c514cb",
    RateLimit: "86175f",
    CurrentVIPDiscounts: "5453dd",
    Discounts: "777dea",
    Standard: "8a0582",
    InstitutionalAccounts: "e85584",
    Privileges: "105cdb",
    HigherRate: "929e2c",
    DesignatedSupport: "4f8b97",
    BetterFee: "b5e33c",
    EnjoyPeriodic: "908a93",
    Obligations: "73fff4",
    ContractTrading: "1821e6",
    AtLeast: "e8aa0a",
    BothSides: "4cebaf",
    SatisfyMinimal: "2c3cce",
    SatisfyMinimalDmm: "bb93f5",
    PhemexTakesOrder: "ca7553",
    ApplyNow: "6b62c3",
    PhemexUid: "4b27f0",
    Email: "91a09e",
    Name: "547845",
    CountryOrRegion: "8e9176",
    Telegram: "00c93a",
    Wechat: "9ba7b4",
    Phone: "418b19",
    CompanyName: "5ee96b",
    HowDoYouKnow: "c51aa3",
    SelfIntroduction: "1178bb",
    Tips: "577b89",
    Apply: "6bc380",
    Note: "6ca254",
    ApplicationFailed: "6e42a3",
    YouCannotApply: "ba8c12",
    ApplicationAubmitted: "8531e9",
    PleaseWaitFor: "f4a1ca",
    YouHaveApplied: "878063",
    YouHaveSubmitted: "2de1f3",
    Sorry: "bc9ec6",
    OK: "74aee0",
    YouAccountIsAnInstitutional: "1788b7",
    ViewInstitutionalAccountDashboard: "442622",
    InstitutionalAccountProgram: "f60099",
    ListingApplication: "10142a",
    ListingSuggestions: "6e9d75",
    MakeListingSuggestion: "bbd4d3",
    PhemexInstitution: "1d72c3",
    InstitutionClientProgram: "c9728b",
    InstitutionalContract: "5a7df8",
    ComingSoon: "07de07",
    TheVIPPlan: "b999f2",
    ToInstitutionClient: "e0f76a",
    MarketMakerProgram: "ec75df",
    InstitutionalSpot: "42129c",
    TheMarketMaker: "903f0d",
    ToMarketMaker: "219655",
    ApplyPhemex: "dfdf48",
    ThePhemexAdvantage: "6bc288",
    ThePhemexProgram: "2fcf0a",
    HighlyCompetitiveFees: "90e86c",
    TakeAdvantageOf: "cfb9d7",
    TopTierLiquidity: "06ae96",
    AccessDeepLiquidity: "a7dced",
    LimitlessSubAccounts: "ffcde3",
    EnjoyUltimateFlexibility: "92870f",
    TopNotchOTCServices: "73532e",
    MakeSmoothOTC: "f62829",
    ViewMore: "8c080f",
    ThePhemexSolution: "b2f3bc",
    HigherRateAPI: "97392c",
    HarnessTopTier: "dd8292",
    UnifiedTradingAccount: "ce8a60",
    TradeEverythingFrom: "57eed1",
    OptimizedAssetManagement: "fad874",
    GetInstantFrictionless: "3c607a",
    EnterpriseLevelSecurity: "4822ad",
    HierarchicalDeterministicCold: "34de49",
    ToService: "c588e9",
    ReceiveFirstPriority: "c54830",
    Uptime: "cff6df",
    OurTradingEngines: "24a28c",
    EnjoyHighlyDiscounted: "fb35c0",
    BrokerProgram: "adf962",
    GoToMarket: "45f3b7",
    GoToBroker: "55b4e2",
    ToBeBroker: "fdfdbe",
    GetUpTo: "e4856a",
    TradeMorePayLess: "a7dc34",
    Contract: "a6e952",
    Spot: "7d9a55",
    UserLevel: "c9e471",
    Last30DSpotVol: "29655a",
    MyLast30dayVolume: "857283",
    MarketMarkerFeeRate: "6b6218",
    IinstitutionFeeRate: "d6263d",
    JoinPhemexInstitutional: "066195",
    TakeAMinute: "6ebd8d",
    ContactEmail: "62167e",
    ApplyToBecome: "4f666d",
    Submit: "ebb05c",
    ElevateYourBusiness: "2ac283",
    TheTurnkeyCryptocurrency: "f47fd4",
    INSTITUTION: "a43205",
    ApplyNow1: "f21d58",
    Api: "a4a5e8",
    BuildWithPhemex: "b45c14",
    ManualReview: "b3cb59",
    YourApplicationHas: "d0ac14",
    InputUID: "289e4d",
    InputEmail: "c66607",
    ErrorEmail: "0fa056",
    InputName: "987298",
    SelectYourCountry: "c36073",
    InputSocialMedia: "e67acd",
    InputValidContent: "9b62e6",
    InputSelfIntroduction: "9e2143",
    InputNoLessThanTenWords: "21874c",
    LevelsTips: "d4e90a",
    VIPProgram: "cb23fa",
  },
  U = {
    PhemexProfessional: "2572d3",
    Copyright: "06e4cd",
    Products: "eac45b",
    PhemexBlog: "18a2c9",
    About: "ee3e17",
    PhemexPlatform: "323e63",
    Company: "b65e70",
    AboutUs: "2eed49",
    Brandsite: "028191",
    Careers: "2130cd",
    CryptoBlog: "cfea9a",
    FeesConditions: "c5207b",
    Security: "a0e52b",
    Support: "844540",
    APIDocumentation: "ca555f",
    CustomerService: "7fab4b",
    Blog: "0289fa",
    Spot: "36f10e",
    MarginTrading: "b34d5e",
    Contract: "0ec173",
    Premium: "3a36a1",
    WelcomeBonus: "73bf7c",
    AllStarProgram: "bbb3df",
    BuyCrypto: "5b3cd7",
    HelpCenter: "ab8d8f",
    ContractReferences: "7ae412",
    OfficialVerification: "f55575",
    LearnAndEarn: "97ed71",
    Academy: "fa2a16",
    Community: "c789b4",
    Links: "4fd592",
    PrivacyPolicy: "ff2430",
    TermsUse: "5d0c47",
    SiteMap: "951139",
    EarnCrypto: "e2710f",
    Referral: "c96fb4",
    Announcements: "fa934b",
    Partners: "d2b995",
    Services: "a96e6a",
    OTCTrading: "36fba2",
    CryptoConverter: "635e9c",
    TradingCompetition: "9032a5",
    BuyEthereumBtn: "6ba8e0",
    BuyBitcoinBtn: "4a283b",
    BuyDogecoin: "143b0f",
    BuyLitecoin: "64c3aa",
    HowTo: "2c37b9",
    Launchpool: "0c6cd9",
    TradingBots: "640ecc",
    DepositBonus: "03bc44",
    YourEaseOf: "e56fbc",
    TradeOnAPlatform: "76b58a",
    WeValueAnd: "9cf60d",
    ToEmpowerEveryone: "902f75",
    WelcomeBonus100$: "05dbbd",
    NewUsersCan: "91dee7",
    StudentFoundation: "ca77b7",
    AllRightsReserved: "821a68",
    BuyMoreCryptos: "eae48e",
    Portal: "e268e7",
    VIPProgram: "36f555",
    AvailableProof: "fb9f8e",
    XPTPreMining: "673380",
    SimulatedTrading: "91126c",
    TransferTR: "717378",
    Feedback: "b36294",
  };
function co(l) {
  let r,
    i,
    I = l[8](U.MarginTrading) + "",
    c;
  return {
    c() {
      (r = s("li")), (i = s("a")), (c = N(I)), this.h();
    },
    l(n) {
      r = o(n, "LI", { class: !0 });
      var T = E(r);
      i = o(T, "A", {
        class: !0,
        "data-gac": !0,
        "data-gaa": !0,
        "data-gal": !0,
        href: !0,
        target: !0,
      });
      var A = E(i);
      (c = d(A, I)), A.forEach(t), T.forEach(t), this.h();
    },
    h() {
      e(i, "class", "ga svelte-10fxq71"),
        e(i, "data-gac", "footer.link"),
        e(i, "data-gaa", "link_click"),
        e(i, "data-gal", "margin trading"),
        e(i, "href", C.PHEMEX_SPOT_MARGIN_TRADE),
        e(i, "target", "_self"),
        e(r, "class", "svelte-10fxq71");
    },
    m(n, T) {
      W(n, r, T), a(r, i), a(i, c);
    },
    p: Tt,
    d(n) {
      n && t(r);
    },
  };
}
function Ai(l) {
  let r,
    i = l[8](nl.ListingApplication) + "",
    I,
    c;
  return {
    c() {
      (r = s("a")), (I = N(i)), this.h();
    },
    l(n) {
      r = o(n, "A", { class: !0, href: !0 });
      var T = E(r);
      (I = d(T, i)), T.forEach(t), this.h();
    },
    h() {
      e(r, "class", "ga svelte-10fxq71"),
        e(r, "href", (c = l[3](C.LISTING_APPLICATION, "CMS")));
    },
    m(n, T) {
      W(n, r, T), a(r, I);
    },
    p(n, T) {
      T & 8 &&
        c !== (c = n[3](C.LISTING_APPLICATION, "CMS")) &&
        e(r, "href", c);
    },
    d(n) {
      n && t(r);
    },
  };
}
function ci(l) {
  let r,
    i = l[8](nl.ListingApplication) + "",
    I,
    c;
  return {
    c() {
      (r = s("a")), (I = N(i)), this.h();
    },
    l(n) {
      r = o(n, "A", { class: !0, href: !0 });
      var T = E(r);
      (I = d(T, i)), T.forEach(t), this.h();
    },
    h() {
      e(r, "class", "ga svelte-10fxq71"),
        e(r, "href", (c = l[3](C.LISTING_APPLICATION_DE, "CMS")));
    },
    m(n, T) {
      W(n, r, T), a(r, I);
    },
    p(n, T) {
      T & 8 &&
        c !== (c = n[3](C.LISTING_APPLICATION_DE, "CMS")) &&
        e(r, "href", c);
    },
    d(n) {
      n && t(r);
    },
  };
}
function fi(l) {
  let r,
    i = l[8](nl.ListingSuggestions) + "",
    I,
    c;
  return {
    c() {
      (r = s("a")), (I = N(i)), this.h();
    },
    l(n) {
      r = o(n, "A", { class: !0, href: !0 });
      var T = E(r);
      (I = d(T, i)), T.forEach(t), this.h();
    },
    h() {
      e(r, "class", "ga svelte-10fxq71"),
        e(r, "href", (c = l[3](C.LISTING_SUGGESTIONS, "CMS")));
    },
    m(n, T) {
      W(n, r, T), a(r, I);
    },
    p(n, T) {
      T & 8 &&
        c !== (c = n[3](C.LISTING_SUGGESTIONS, "CMS")) &&
        e(r, "href", c);
    },
    d(n) {
      n && t(r);
    },
  };
}
function Oi(l) {
  let r,
    i = l[8](nl.ListingSuggestions) + "",
    I,
    c;
  return {
    c() {
      (r = s("a")), (I = N(i)), this.h();
    },
    l(n) {
      r = o(n, "A", { class: !0, href: !0 });
      var T = E(r);
      (I = d(T, i)), T.forEach(t), this.h();
    },
    h() {
      e(r, "class", "ga svelte-10fxq71"),
        e(r, "href", (c = l[3](C.LISTING_SUGGESTIONS_DE, "CMS")));
    },
    m(n, T) {
      W(n, r, T), a(r, I);
    },
    p(n, T) {
      T & 8 &&
        c !== (c = n[3](C.LISTING_SUGGESTIONS_DE, "CMS")) &&
        e(r, "href", c);
    },
    d(n) {
      n && t(r);
    },
  };
}
function Ri(l) {
  let r,
    i,
    I,
    c,
    n,
    T,
    A,
    f,
    u = l[8](U.PhemexProfessional) + "",
    v,
    m,
    g,
    b,
    V,
    P,
    p,
    Y,
    X,
    q,
    F,
    S,
    H,
    M,
    k,
    ae = l[8](U.Products) + "",
    Ee,
    Ta,
    K,
    ce,
    j,
    nt = l[8](U.Contract) + "",
    na,
    ye,
    ge,
    fe,
    It = l[8](U.Spot) + "",
    Ca,
    qa,
    Ha,
    _e,
    z,
    ma = l[8](U.BuyCrypto) + "",
    wa,
    Ya,
    _a,
    Ia,
    Pe,
    ha = l[8](U.CryptoConverter) + "",
    Xe,
    Aa,
    Ja,
    ca,
    te,
    At = l[8](U.EarnCrypto) + "",
    Ga,
    De,
    za,
    qe,
    Q,
    ct = l[8](U.Launchpool) + "",
    pa,
    Z,
    fa,
    Ue,
    Oe,
    ft = l[8](U.TradingBots) + "",
    Oa,
    Ra,
    Qa,
    Me,
    he,
    ba = l[8](U.Support) + "",
    ja,
    Za,
    B,
    He,
    le,
    xa = l[8](U.HelpCenter) + "",
    we,
    Fa,
    ka,
    ue,
    re,
    $a = l[8](U.Academy) + "",
    Je,
    Va,
    h,
    y,
    se,
    Re = l[8](U.LearnAndEarn) + "",
    Ot,
    La,
    Rt,
    va,
    Le,
    et = l[8](U.CryptoBlog) + "",
    Nt,
    at,
    dt,
    ze,
    Se,
    tl = l[8](U.FeesConditions) + "",
    ut,
    ga,
    St,
    Pa,
    oe,
    Ba,
    tt,
    Ct,
    Da,
    ie,
    ll = l[8](U.ContractReferences) + "",
    _t,
    lt,
    ht,
    Ne,
    Ce,
    rl = l[8](U.OfficialVerification) + "",
    Lt,
    rt,
    vt,
    Ua,
    de,
    El = l[8](U.Feedback) + "",
    gt,
    Pt,
    Qe,
    Dt,
    Qr = l[8](U.Services) + "",
    kl,
    Vl,
    w,
    Ut,
    me,
    jr = l[8](U.WelcomeBonus) + "",
    Bl,
    Il,
    Wl,
    Mt,
    je,
    Zr = l[8](U.Referral) + "",
    Kl,
    Al,
    yl,
    Ht,
    Ze,
    xr = l[8](U.Portal) + "",
    Xl,
    cl,
    ql,
    mt,
    xe,
    $r = l[8](U.VIPProgram) + "",
    wl,
    Jl,
    Yt,
    $e,
    eE = l[8](U.AllStarProgram) + "",
    zl,
    fl,
    Ql,
    Gt,
    ea,
    aE = l[8](nl.InstitutionClientProgram) + "",
    jl,
    Ol,
    Zl,
    Et,
    xl,
    st,
    $l,
    pt,
    ot,
    tE = l[8](U.SimulatedTrading) + "",
    er,
    ar,
    Wa,
    bt,
    lE = l[8](U.Company) + "",
    tr,
    lr,
    J,
    Ft,
    aa,
    rE = l[8](U.AboutUs) + "",
    rr,
    Rl,
    Er,
    kt,
    ta,
    EE = l[8](U.Brandsite) + "",
    sr,
    Nl,
    or,
    Vt,
    Ye,
    sE = l[8](U.Careers) + "",
    ir,
    Tr,
    Bt,
    la,
    oE = l[8](U.StudentFoundation) + "",
    nr,
    dl,
    Ir,
    Wt,
    Ge,
    iE = l[8](U.Announcements) + "",
    Ar,
    ul,
    cr,
    Kt,
    ra,
    TE = l[8](U.Security) + "",
    fr,
    Sl,
    Or,
    yt,
    Na,
    nE = l[8](U.PrivacyPolicy) + "",
    Rr,
    Cl,
    Nr,
    Xt,
    ve,
    IE = l[8](U.TermsUse) + "",
    dr,
    _l,
    ur,
    qt,
    Ea,
    AE = l[8](U.SiteMap) + "",
    Sr,
    hl,
    Cr,
    pe,
    wt,
    cE = l[8](U.BuyMoreCryptos) + "",
    _r,
    hr,
    sa,
    Jt,
    be,
    fE = l[8](U.BuyBitcoinBtn) + "",
    Lr,
    Ll,
    vr,
    zt,
    Fe,
    OE = l[8](U.BuyDogecoin) + "",
    gr,
    vl,
    Pr,
    Qt,
    ke,
    RE = l[8](U.BuyLitecoin) + "",
    Dr,
    gl,
    Ur,
    jt,
    Ve,
    NE = l[8](U.BuyEthereumBtn) + "",
    Mr,
    Pl,
    Hr,
    Zt,
    dE = l[8](U.Partners) + "",
    mr,
    Yr,
    da,
    xt,
    Be,
    Gr,
    pr,
    $t,
    We,
    br,
    Fr,
    el,
    Ke,
    kr,
    Vr,
    it,
    G,
    Br,
    uE;
  b = new ii({});
  function So(_) {
    l[13](_);
  }
  let SE = { type: "border", white: !0, options: l[4] };
  l[2] !== void 0 && (SE.value = l[2]),
    (p = new ti({ props: SE })),
    Po.push(() => Do(p, "value", So)),
    p.$on("change", l[10]);
  let Te = l[5] && co(l);
  function CE(_, D) {
    return _[0] === "de" ? ci : Ai;
  }
  let Dl = CE(l),
    oa = Dl(l);
  function _E(_, D) {
    return _[0] === "de" ? Oi : fi;
  }
  let Ul = _E(l),
    ia = Ul(l);
  return (
    (it = new Ii({})),
    {
      c() {
        (r = s("footer")),
          (i = s("div")),
          (I = s("div")),
          (c = s("div")),
          (n = s("img")),
          (A = O()),
          (f = s("div")),
          (v = N(u)),
          (m = O()),
          (g = s("div")),
          Wr(b.$$.fragment),
          (V = O()),
          (P = s("div")),
          Wr(p.$$.fragment),
          (X = O()),
          (q = s("div")),
          (F = N("© Copyright 2024 BitYaris All rights reserved")),
          (S = O()),
          (H = s("div")),
          (M = s("div")),
          (k = s("div")),
          (Ee = N(ae)),
          (Ta = O()),
          (K = s("ul")),
          (ce = s("li")),
          (j = s("a")),
          (na = N(nt)),
          (ye = O()),
          (ge = s("li")),
          (fe = s("a")),
          (Ca = N(It)),
          (qa = O()),
          Te && Te.c(),
          (Ha = O()),
          (_e = s("li")),
          (z = s("a")),
          (wa = N(ma)),
          (_a = O()),
          (Ia = s("li")),
          (Pe = s("a")),
          (Xe = N(ha)),
          (Ja = O()),
          (ca = s("li")),
          (te = s("a")),
          (Ga = N(At)),
          (za = O()),
          (qe = s("li")),
          (Q = s("a")),
          (pa = N(ct)),
          (fa = O()),
          (Ue = s("li")),
          (Oe = s("a")),
          (Oa = N(ft)),
          (Qa = O()),
          (Me = s("div")),
          (he = s("div")),
          (ja = N(ba)),
          (Za = O()),
          (B = s("ul")),
          (He = s("li")),
          (le = s("a")),
          (we = N(xa)),
          (ka = O()),
          (ue = s("li")),
          (re = s("a")),
          (Je = N($a)),
          (h = O()),
          (y = s("li")),
          (se = s("a")),
          (Ot = N(Re)),
          (Rt = O()),
          (va = s("li")),
          (Le = s("a")),
          (Nt = N(et)),
          (dt = O()),
          (ze = s("li")),
          (Se = s("a")),
          (ut = N(tl)),
          (St = O()),
          (Pa = s("li")),
          (oe = s("a")),
          (Ba = N("BitYaris API")),
          (Ct = O()),
          (Da = s("li")),
          (ie = s("a")),
          (_t = N(ll)),
          (ht = O()),
          (Ne = s("li")),
          (Ce = s("a")),
          (Lt = N(rl)),
          (vt = O()),
          (Ua = s("li")),
          (de = s("a")),
          (gt = N(El)),
          (Pt = O()),
          (Qe = s("div")),
          (Dt = s("div")),
          (kl = N(Qr)),
          (Vl = O()),
          (w = s("ul")),
          (Ut = s("li")),
          (me = s("a")),
          (Bl = N(jr)),
          (Wl = O()),
          (Mt = s("li")),
          (je = s("a")),
          (Kl = N(Zr)),
          (yl = O()),
          (Ht = s("li")),
          (Ze = s("a")),
          (Xl = N(xr)),
          (ql = O()),
          (mt = s("li")),
          (xe = s("a")),
          (wl = N($r)),
          (Jl = O()),
          (Yt = s("li")),
          ($e = s("a")),
          (zl = N(eE)),
          (Ql = O()),
          (Gt = s("li")),
          (ea = s("a")),
          (jl = N(aE)),
          (Zl = O()),
          (Et = s("li")),
          oa.c(),
          (xl = O()),
          (st = s("li")),
          ia.c(),
          ($l = O()),
          (pt = s("li")),
          (ot = s("a")),
          (er = N(tE)),
          (ar = O()),
          (Wa = s("div")),
          (bt = s("div")),
          (tr = N(lE)),
          (lr = O()),
          (J = s("ul")),
          (Ft = s("li")),
          (aa = s("a")),
          (rr = N(rE)),
          (Er = O()),
          (kt = s("li")),
          (ta = s("a")),
          (sr = N(EE)),
          (or = O()),
          (Vt = s("li")),
          (Ye = s("a")),
          (ir = N(sE)),
          (Tr = O()),
          (Bt = s("li")),
          (la = s("a")),
          (nr = N(oE)),
          (Ir = O()),
          (Wt = s("li")),
          (Ge = s("a")),
          (Ar = N(iE)),
          (cr = O()),
          (Kt = s("li")),
          (ra = s("a")),
          (fr = N(TE)),
          (Or = O()),
          (yt = s("li")),
          (Na = s("a")),
          (Rr = N(nE)),
          (Nr = O()),
          (Xt = s("li")),
          (ve = s("a")),
          (dr = N(IE)),
          (ur = O()),
          (qt = s("li")),
          (Ea = s("a")),
          (Sr = N(AE)),
          (Cr = O()),
          (pe = s("div")),
          (wt = s("div")),
          (_r = N(cE)),
          (hr = O()),
          (sa = s("ul")),
          (Jt = s("li")),
          (be = s("a")),
          (Lr = N(fE)),
          (vr = O()),
          (zt = s("li")),
          (Fe = s("a")),
          (gr = N(OE)),
          (Pr = O()),
          (Qt = s("li")),
          (ke = s("a")),
          (Dr = N(RE)),
          (Ur = O()),
          (jt = s("li")),
          (Ve = s("a")),
          (Mr = N(NE)),
          (Hr = O()),
          (Zt = s("div")),
          (mr = N(dE)),
          (Yr = O()),
          (da = s("ul")),
          (xt = s("li")),
          (Be = s("a")),
          (Gr = N("CoinMarketCap")),
          (pr = O()),
          ($t = s("li")),
          (We = s("a")),
          (br = N("CoinGecko")),
          (Fr = O()),
          (el = s("li")),
          (Ke = s("a")),
          (kr = N("Coincodex")),
          (Vr = O()),
          Wr(it.$$.fragment),
          this.h();
      },
      l(_) {
        r = o(_, "FOOTER", { class: !0 });
        var D = E(r);
        i = o(D, "DIV", { class: !0 });
        var Ka = E(i);
        I = o(Ka, "DIV", { class: !0 });
        var ua = E(I);
        c = o(ua, "DIV", {});
        var hE = E(c);
        (n = o(hE, "IMG", { width: !0, "data-src": !0, src: !0, alt: !0 })),
          hE.forEach(t),
          (A = R(ua)),
          (f = o(ua, "DIV", { class: !0 }));
        var LE = E(f);
        (v = d(LE, u)),
          LE.forEach(t),
          (m = R(ua)),
          (g = o(ua, "DIV", { class: !0 }));
        var vE = E(g);
        Kr(b.$$.fragment, vE),
          vE.forEach(t),
          (V = R(ua)),
          (P = o(ua, "DIV", { class: !0 }));
        var gE = E(P);
        Kr(p.$$.fragment, gE),
          gE.forEach(t),
          (X = R(ua)),
          (q = o(ua, "DIV", { class: !0 }));
        var PE = E(q);
        (F = d(PE, "© Copyright 2024 BitYaris All rights reserved")),
          PE.forEach(t),
          ua.forEach(t),
          (S = R(Ka)),
          (H = o(Ka, "DIV", { class: !0 }));
        var Sa = E(H);
        M = o(Sa, "DIV", { class: !0 });
        var Ml = E(M);
        k = o(Ml, "DIV", { class: !0 });
        var DE = E(k);
        (Ee = d(DE, ae)), DE.forEach(t), (Ta = R(Ml)), (K = o(Ml, "UL", {}));
        var ne = E(K);
        ce = o(ne, "LI", { class: !0 });
        var UE = E(ce);
        j = o(UE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var ME = E(j);
        (na = d(ME, nt)),
          ME.forEach(t),
          UE.forEach(t),
          (ye = R(ne)),
          (ge = o(ne, "LI", { class: !0 }));
        var HE = E(ge);
        fe = o(HE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var mE = E(fe);
        (Ca = d(mE, It)),
          mE.forEach(t),
          HE.forEach(t),
          (qa = R(ne)),
          Te && Te.l(ne),
          (Ha = R(ne)),
          (_e = o(ne, "LI", { class: !0 }));
        var YE = E(_e);
        z = o(YE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var GE = E(z);
        (wa = d(GE, ma)),
          GE.forEach(t),
          YE.forEach(t),
          (_a = R(ne)),
          (Ia = o(ne, "LI", { class: !0 }));
        var pE = E(Ia);
        Pe = o(pE, "A", { class: !0, href: !0 });
        var bE = E(Pe);
        (Xe = d(bE, ha)),
          bE.forEach(t),
          pE.forEach(t),
          (Ja = R(ne)),
          (ca = o(ne, "LI", { class: !0 }));
        var FE = E(ca);
        te = o(FE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var kE = E(te);
        (Ga = d(kE, At)),
          kE.forEach(t),
          FE.forEach(t),
          (za = R(ne)),
          (qe = o(ne, "LI", { class: !0 }));
        var VE = E(qe);
        Q = o(VE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var BE = E(Q);
        (pa = d(BE, ct)),
          BE.forEach(t),
          VE.forEach(t),
          (fa = R(ne)),
          (Ue = o(ne, "LI", { class: !0 }));
        var WE = E(Ue);
        Oe = o(WE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var KE = E(Oe);
        (Oa = d(KE, ft)),
          KE.forEach(t),
          WE.forEach(t),
          ne.forEach(t),
          Ml.forEach(t),
          (Qa = R(Sa)),
          (Me = o(Sa, "DIV", { class: !0 }));
        var Hl = E(Me);
        he = o(Hl, "DIV", { class: !0 });
        var yE = E(he);
        (ja = d(yE, ba)), yE.forEach(t), (Za = R(Hl)), (B = o(Hl, "UL", {}));
        var x = E(B);
        He = o(x, "LI", { class: !0 });
        var XE = E(He);
        le = o(XE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var qE = E(le);
        (we = d(qE, xa)),
          qE.forEach(t),
          XE.forEach(t),
          (ka = R(x)),
          (ue = o(x, "LI", { class: !0 }));
        var wE = E(ue);
        re = o(wE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var JE = E(re);
        (Je = d(JE, $a)),
          JE.forEach(t),
          wE.forEach(t),
          (h = R(x)),
          (y = o(x, "LI", { class: !0 }));
        var zE = E(y);
        se = o(zE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var QE = E(se);
        (Ot = d(QE, Re)),
          QE.forEach(t),
          zE.forEach(t),
          (Rt = R(x)),
          (va = o(x, "LI", { class: !0 }));
        var jE = E(va);
        Le = o(jE, "A", { class: !0, href: !0, target: !0, rel: !0 });
        var ZE = E(Le);
        (Nt = d(ZE, et)),
          ZE.forEach(t),
          jE.forEach(t),
          (dt = R(x)),
          (ze = o(x, "LI", { class: !0 }));
        var xE = E(ze);
        Se = o(xE, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var $E = E(Se);
        (ut = d($E, tl)),
          $E.forEach(t),
          xE.forEach(t),
          (St = R(x)),
          (Pa = o(x, "LI", { class: !0 }));
        var es = E(Pa);
        oe = o(es, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var as = E(oe);
        (Ba = d(as, "BitYaris API")),
          as.forEach(t),
          es.forEach(t),
          (Ct = R(x)),
          (Da = o(x, "LI", { class: !0 }));
        var ts = E(Da);
        ie = o(ts, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ls = E(ie);
        (_t = d(ls, ll)),
          ls.forEach(t),
          ts.forEach(t),
          (ht = R(x)),
          (Ne = o(x, "LI", { class: !0 }));
        var rs = E(Ne);
        Ce = o(rs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Es = E(Ce);
        (Lt = d(Es, rl)),
          Es.forEach(t),
          rs.forEach(t),
          (vt = R(x)),
          (Ua = o(x, "LI", { class: !0 }));
        var ss = E(Ua);
        de = o(ss, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          rel: !0,
          href: !0,
        });
        var os = E(de);
        (gt = d(os, El)),
          os.forEach(t),
          ss.forEach(t),
          x.forEach(t),
          Hl.forEach(t),
          (Pt = R(Sa)),
          (Qe = o(Sa, "DIV", { class: !0 }));
        var ml = E(Qe);
        Dt = o(ml, "DIV", { class: !0 });
        var is = E(Dt);
        (kl = d(is, Qr)), is.forEach(t), (Vl = R(ml)), (w = o(ml, "UL", {}));
        var $ = E(w);
        Ut = o($, "LI", { class: !0 });
        var Ts = E(Ut);
        me = o(Ts, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ns = E(me);
        (Bl = d(ns, jr)),
          ns.forEach(t),
          Ts.forEach(t),
          (Wl = R($)),
          (Mt = o($, "LI", { class: !0 }));
        var Is = E(Mt);
        je = o(Is, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var As = E(je);
        (Kl = d(As, Zr)),
          As.forEach(t),
          Is.forEach(t),
          (yl = R($)),
          (Ht = o($, "LI", { class: !0 }));
        var cs = E(Ht);
        Ze = o(cs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var fs = E(Ze);
        (Xl = d(fs, xr)),
          fs.forEach(t),
          cs.forEach(t),
          (ql = R($)),
          (mt = o($, "LI", { class: !0 }));
        var Os = E(mt);
        xe = o(Os, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Rs = E(xe);
        (wl = d(Rs, $r)),
          Rs.forEach(t),
          Os.forEach(t),
          (Jl = R($)),
          (Yt = o($, "LI", { class: !0 }));
        var Ns = E(Yt);
        $e = o(Ns, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ds = E($e);
        (zl = d(ds, eE)),
          ds.forEach(t),
          Ns.forEach(t),
          (Ql = R($)),
          (Gt = o($, "LI", { class: !0 }));
        var us = E(Gt);
        ea = o(us, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Ss = E(ea);
        (jl = d(Ss, aE)),
          Ss.forEach(t),
          us.forEach(t),
          (Zl = R($)),
          (Et = o($, "LI", { class: !0 }));
        var Cs = E(Et);
        oa.l(Cs), Cs.forEach(t), (xl = R($)), (st = o($, "LI", { class: !0 }));
        var _s = E(st);
        ia.l(_s), _s.forEach(t), ($l = R($)), (pt = o($, "LI", { class: !0 }));
        var hs = E(pt);
        ot = o(hs, "A", { class: !0, href: !0 });
        var Ls = E(ot);
        (er = d(Ls, tE)),
          Ls.forEach(t),
          hs.forEach(t),
          $.forEach(t),
          ml.forEach(t),
          (ar = R(Sa)),
          (Wa = o(Sa, "DIV", { class: !0 }));
        var Yl = E(Wa);
        bt = o(Yl, "DIV", { class: !0 });
        var vs = E(bt);
        (tr = d(vs, lE)), vs.forEach(t), (lr = R(Yl)), (J = o(Yl, "UL", {}));
        var ee = E(J);
        Ft = o(ee, "LI", { class: !0 });
        var gs = E(Ft);
        aa = o(gs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Ps = E(aa);
        (rr = d(Ps, rE)),
          Ps.forEach(t),
          gs.forEach(t),
          (Er = R(ee)),
          (kt = o(ee, "LI", { class: !0 }));
        var Ds = E(kt);
        ta = o(Ds, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Us = E(ta);
        (sr = d(Us, EE)),
          Us.forEach(t),
          Ds.forEach(t),
          (or = R(ee)),
          (Vt = o(ee, "LI", { class: !0 }));
        var Ms = E(Vt);
        Ye = o(Ms, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var Hs = E(Ye);
        (ir = d(Hs, sE)),
          Hs.forEach(t),
          Ms.forEach(t),
          (Tr = R(ee)),
          (Bt = o(ee, "LI", { class: !0 }));
        var ms = E(Bt);
        la = o(ms, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Ys = E(la);
        (nr = d(Ys, oE)),
          Ys.forEach(t),
          ms.forEach(t),
          (Ir = R(ee)),
          (Wt = o(ee, "LI", { class: !0 }));
        var Gs = E(Wt);
        Ge = o(Gs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
        });
        var ps = E(Ge);
        (Ar = d(ps, iE)),
          ps.forEach(t),
          Gs.forEach(t),
          (cr = R(ee)),
          (Kt = o(ee, "LI", { class: !0 }));
        var bs = E(Kt);
        ra = o(bs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Fs = E(ra);
        (fr = d(Fs, TE)),
          Fs.forEach(t),
          bs.forEach(t),
          (Or = R(ee)),
          (yt = o(ee, "LI", { class: !0 }));
        var ks = E(yt);
        Na = o(ks, "A", { class: !0, target: !0, href: !0, rel: !0 });
        var Vs = E(Na);
        (Rr = d(Vs, nE)),
          Vs.forEach(t),
          ks.forEach(t),
          (Nr = R(ee)),
          (Xt = o(ee, "LI", { class: !0 }));
        var Bs = E(Xt);
        ve = o(Bs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var Ws = E(ve);
        (dr = d(Ws, IE)),
          Ws.forEach(t),
          Bs.forEach(t),
          (ur = R(ee)),
          (qt = o(ee, "LI", { class: !0 }));
        var Ks = E(qt);
        Ea = o(Ks, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ys = E(Ea);
        (Sr = d(ys, AE)),
          ys.forEach(t),
          Ks.forEach(t),
          ee.forEach(t),
          Yl.forEach(t),
          (Cr = R(Sa)),
          (pe = o(Sa, "DIV", { class: !0 }));
        var ya = E(pe);
        wt = o(ya, "DIV", { class: !0 });
        var Xs = E(wt);
        (_r = d(Xs, cE)), Xs.forEach(t), (hr = R(ya)), (sa = o(ya, "UL", {}));
        var Xa = E(sa);
        Jt = o(Xa, "LI", { class: !0 });
        var qs = E(Jt);
        be = o(qs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var ws = E(be);
        (Lr = d(ws, fE)),
          ws.forEach(t),
          qs.forEach(t),
          (vr = R(Xa)),
          (zt = o(Xa, "LI", { class: !0 }));
        var Js = E(zt);
        Fe = o(Js, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var zs = E(Fe);
        (gr = d(zs, OE)),
          zs.forEach(t),
          Js.forEach(t),
          (Pr = R(Xa)),
          (Qt = o(Xa, "LI", { class: !0 }));
        var Qs = E(Qt);
        ke = o(Qs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var js = E(ke);
        (Dr = d(js, RE)),
          js.forEach(t),
          Qs.forEach(t),
          (Ur = R(Xa)),
          (jt = o(Xa, "LI", { class: !0 }));
        var Zs = E(jt);
        Ve = o(Zs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var xs = E(Ve);
        (Mr = d(xs, NE)),
          xs.forEach(t),
          Zs.forEach(t),
          Xa.forEach(t),
          (Hr = R(ya)),
          (Zt = o(ya, "DIV", { class: !0 }));
        var $s = E(Zt);
        (mr = d($s, dE)),
          $s.forEach(t),
          (Yr = R(ya)),
          (da = o(ya, "UL", { class: !0 }));
        var al = E(da);
        xt = o(al, "LI", { class: !0 });
        var eo = E(xt);
        Be = o(eo, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var ao = E(Be);
        (Gr = d(ao, "CoinMarketCap")),
          ao.forEach(t),
          eo.forEach(t),
          (pr = R(al)),
          ($t = o(al, "LI", { class: !0 }));
        var to = E($t);
        We = o(to, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var lo = E(We);
        (br = d(lo, "CoinGecko")),
          lo.forEach(t),
          to.forEach(t),
          (Fr = R(al)),
          (el = o(al, "LI", { class: !0 }));
        var ro = E(el);
        Ke = o(ro, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var Eo = E(Ke);
        (kr = d(Eo, "Coincodex")),
          Eo.forEach(t),
          ro.forEach(t),
          al.forEach(t),
          ya.forEach(t),
          Sa.forEach(t),
          Ka.forEach(t),
          (Vr = R(D)),
          Kr(it.$$.fragment, D),
          D.forEach(t),
          this.h();
      },
      h() {
        e(n, "width", "160"),
          e(n, "data-src", sl.LOGO_LIGHT),
          Uo(n.src, (T = sl.LOGO_LIGHT)) || e(n, "src", T),
          e(n, "alt", "Logo"),
          e(f, "class", "dn xs:db mt12 f14 lh18 tc T4 "),
          e(g, "class", "mt32"),
          e(P, "class", "select mt32 xs:dn svelte-10fxq71"),
          e(q, "class", "dn xs:db mt24 f12 tc T4"),
          e(I, "class", "logo svelte-10fxq71"),
          e(k, "class", "lh36 f16 fw3 TW"),
          e(j, "class", "ga svelte-10fxq71"),
          e(j, "data-gac", "footer.link"),
          e(j, "data-gaa", "link_click"),
          e(j, "data-gal", "contract"),
          e(j, "href", C.PHEMEX_CONTRACT_INVERSE_TRADE),
          e(j, "target", "_self"),
          e(ce, "class", "svelte-10fxq71"),
          e(fe, "class", "ga svelte-10fxq71"),
          e(fe, "data-gac", "footer.link"),
          e(fe, "data-gaa", "link_click"),
          e(fe, "data-gal", "spot"),
          e(fe, "href", C.PHEMEX_SPOT_TRADE),
          e(fe, "target", "_self"),
          e(ge, "class", "svelte-10fxq71"),
          e(z, "class", "ga svelte-10fxq71"),
          e(z, "data-gac", "footer.link"),
          e(z, "data-gaa", "link_click"),
          e(z, "data-gal", "buy_crypto"),
          e(
            z,
            "href",
            (Ya = l[3](
              l[6]
                ? l[7]
                  ? L.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
                  : L.BUY_CRYPTO_PLACE_ORDER.pathname
                : L.BUY_CRYPTO.pathname
            ))
          ),
          e(_e, "class", "svelte-10fxq71"),
          e(Pe, "class", "ga svelte-10fxq71"),
          e(Pe, "href", (Aa = l[3](L.CRYPTO_CONVERTER.pathname))),
          e(Ia, "class", "svelte-10fxq71"),
          e(te, "class", "ga svelte-10fxq71"),
          e(te, "data-gac", "footer.link"),
          e(te, "data-gaa", "link_click"),
          e(te, "data-gal", "earn_crypto"),
          e(te, "href", (De = l[3](L.EARN_HOME.pathname))),
          e(ca, "class", "svelte-10fxq71"),
          e(Q, "class", "ga svelte-10fxq71"),
          e(Q, "data-gac", "footer.link"),
          e(Q, "data-gaa", "link_click"),
          e(Q, "data-gal", "Launchpool"),
          e(Q, "href", (Z = l[3](L.LAUNCHPOOL.pathname))),
          e(qe, "class", "svelte-10fxq71"),
          e(Oe, "class", "ga svelte-10fxq71"),
          e(Oe, "data-gac", "footer.link"),
          e(Oe, "data-gaa", "link_click"),
          e(Oe, "data-gal", "trading_bots"),
          e(Oe, "href", (Ra = l[3](L.STRATEGY_SQUARE.pathname))),
          e(Ue, "class", "svelte-10fxq71"),
          e(M, "class", "f1 box svelte-10fxq71"),
          e(he, "class", "lh36 f16 fw3 TW"),
          e(le, "class", "ga svelte-10fxq71"),
          e(le, "data-gac", "footer.link"),
          e(le, "data-gaa", "link_click"),
          e(le, "data-gal", "help_center"),
          e(le, "href", (Fa = l[3](C.PHEMEX_HELP_CENTER, "CMS"))),
          e(le, "target", "_blank"),
          e(le, "rel", "noopener noreferrer nofollow"),
          e(He, "class", "svelte-10fxq71"),
          e(re, "class", "ga svelte-10fxq71"),
          e(re, "data-gac", "footer.link"),
          e(re, "data-gaa", "link_click"),
          e(re, "data-gal", "spot_guides"),
          e(re, "target", "_blank"),
          e(re, "href", (Va = l[3](C.PHEMEX_ACADEMY, "CMS"))),
          e(re, "rel", "noopener noreferrer nofollow"),
          e(ue, "class", "svelte-10fxq71"),
          e(se, "class", "ga svelte-10fxq71"),
          e(se, "data-gac", "footer.link"),
          e(se, "data-gaa", "link_click"),
          e(se, "data-gal", "spot_guides"),
          e(se, "target", "_blank"),
          e(se, "href", (La = l[3](L.LEARN_CRYPTO.pathname))),
          e(se, "rel", "noopener noreferrer nofollow"),
          e(y, "class", "svelte-10fxq71"),
          e(Le, "class", "ga svelte-10fxq71"),
          e(Le, "href", (at = l[3](C.PHEMEX_BLOG, "CMS"))),
          e(Le, "target", "_blank"),
          e(Le, "rel", "noopener noreferrer nofollow"),
          e(va, "class", "svelte-10fxq71"),
          e(Se, "class", "ga svelte-10fxq71"),
          e(Se, "data-gac", "footer.link"),
          e(Se, "data-gaa", "link_click"),
          e(Se, "data-gal", "fee_conditions"),
          e(Se, "href", (ga = l[3](L.FEES_CONDITIONS.pathname))),
          e(ze, "class", "svelte-10fxq71"),
          e(oe, "class", "ga svelte-10fxq71"),
          e(oe, "data-gac", "footer.link"),
          e(oe, "data-gaa", "link_click"),
          e(oe, "data-gal", "api_doc"),
          e(oe, "href", (tt = l[3](L.APIS.pathname))),
          e(oe, "target", "_blank"),
          e(oe, "rel", "noopener noreferrer nofollow"),
          e(Pa, "class", "svelte-10fxq71"),
          e(ie, "class", "ga svelte-10fxq71"),
          e(ie, "data-gac", "footer.link"),
          e(ie, "data-gaa", "link_click"),
          e(ie, "data-gal", "contract_references"),
          e(ie, "href", (lt = l[3](L.CONTRACT_INTRODUCTION.pathname))),
          e(Da, "class", "svelte-10fxq71"),
          e(Ce, "class", "ga svelte-10fxq71"),
          e(Ce, "data-gac", "footer.link"),
          e(Ce, "data-gaa", "link_click"),
          e(Ce, "data-gal", "contract_references"),
          e(Ce, "href", (rt = l[3](L.OFFICIAL_VERIFICATION.pathname))),
          e(Ne, "class", "svelte-10fxq71"),
          e(de, "class", "ga svelte-10fxq71"),
          e(de, "data-gac", "footer.link"),
          e(de, "data-gaa", "link_click"),
          e(de, "data-gal", "feedback"),
          e(de, "target", "_blank"),
          e(de, "rel", "noopener noreferrer nofollow"),
          e(de, "href", C.FEEDBACK),
          e(Ua, "class", "svelte-10fxq71"),
          e(Me, "class", "f1 box svelte-10fxq71"),
          e(Dt, "class", "lh36 f16 fw3 TW"),
          e(me, "class", "ga svelte-10fxq71"),
          e(me, "data-gac", "footer.link"),
          e(me, "data-gaa", "link_click"),
          e(me, "data-gal", "welcome_bonus"),
          e(me, "href", (Il = l[3](L.BONUS.pathname))),
          e(Ut, "class", "svelte-10fxq71"),
          e(je, "class", "ga svelte-10fxq71"),
          e(je, "data-gac", "footer.link"),
          e(je, "data-gaa", "link_click"),
          e(je, "data-gal", "referral_invite_friends"),
          e(je, "href", (Al = l[3](L.ACCOUNT_INVITE_FRIENDS.pathname))),
          e(Mt, "class", "svelte-10fxq71"),
          e(Ze, "class", "ga svelte-10fxq71"),
          e(Ze, "data-gac", "footer.link"),
          e(Ze, "data-gaa", "link_click"),
          e(Ze, "data-gal", "vip_portal"),
          e(Ze, "href", (cl = l[3](L.VIP_PORTAL.pathname))),
          e(Ht, "class", "svelte-10fxq71"),
          e(xe, "class", "ga svelte-10fxq71"),
          e(xe, "data-gac", "footer.link"),
          e(xe, "data-gaa", "link_click"),
          e(xe, "data-gal", "vip_program"),
          e(xe, "href", l[1]),
          e(mt, "class", "svelte-10fxq71"),
          e($e, "class", "ga svelte-10fxq71"),
          e($e, "data-gac", "footer.link"),
          e($e, "data-gaa", "link_click"),
          e($e, "data-gal", "all_star_program"),
          e($e, "href", (fl = l[3](L.ALL_STAR_PROGRAM.pathname))),
          e(Yt, "class", "svelte-10fxq71"),
          e(ea, "class", "ga svelte-10fxq71"),
          e(ea, "data-gac", "footer.link"),
          e(ea, "data-gaa", "link_click"),
          e(ea, "data-gal", "institutional_clients"),
          e(ea, "href", (Ol = l[3](L.INSTITUTIONAL_CLIENT.pathname))),
          e(Gt, "class", "svelte-10fxq71"),
          e(Et, "class", "svelte-10fxq71"),
          e(st, "class", "svelte-10fxq71"),
          e(ot, "class", "ga svelte-10fxq71"),
          e(ot, "href", C.PHEMEX_TESTNET),
          e(pt, "class", "svelte-10fxq71"),
          e(Qe, "class", "f1 box svelte-10fxq71"),
          e(bt, "class", "lh36 f16 fw3 TW"),
          e(aa, "class", "ga svelte-10fxq71"),
          e(aa, "data-gac", "footer.link"),
          e(aa, "data-gaa", "link_click"),
          e(aa, "data-gal", "about_us"),
          e(aa, "href", (Rl = l[3](L.ABOUT.pathname))),
          e(Ft, "class", "svelte-10fxq71"),
          e(ta, "class", "ga svelte-10fxq71"),
          e(ta, "data-gac", "footer.link"),
          e(ta, "data-gaa", "link_click"),
          e(ta, "data-gal", "brandsite"),
          e(ta, "href", (Nl = l[3](L.ABOUT_BRAND_STYLE_GUIDE.pathname))),
          e(kt, "class", "svelte-10fxq71"),
          e(Ye, "class", "ga svelte-10fxq71"),
          e(Ye, "data-gac", "footer.link"),
          e(Ye, "data-gaa", "link_click"),
          e(Ye, "data-gal", "careers"),
          e(Ye, "href", C.PHEMEX_JOBS),
          e(Ye, "target", "_blank"),
          e(Ye, "rel", "noopener noreferrer nofollow"),
          e(Vt, "class", "svelte-10fxq71"),
          e(la, "class", "ga svelte-10fxq71"),
          e(la, "data-gac", "footer.link"),
          e(la, "data-gaa", "link_click"),
          e(la, "data-gal", "student"),
          e(la, "href", (dl = l[3](L.STUDENT_FOUNDATION.pathname))),
          e(Bt, "class", "svelte-10fxq71"),
          e(Ge, "class", "ga svelte-10fxq71"),
          e(Ge, "data-gac", "footer.link"),
          e(Ge, "data-gaa", "link_click"),
          e(Ge, "data-gal", "announcements"),
          e(Ge, "target", "_blank"),
          e(Ge, "href", (ul = l[3](C.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS"))),
          e(Wt, "class", "svelte-10fxq71"),
          e(ra, "class", "ga svelte-10fxq71"),
          e(ra, "data-gac", "footer.link"),
          e(ra, "data-gaa", "link_click"),
          e(ra, "data-gal", "security"),
          e(ra, "href", (Sl = l[3](L.SECURITY.pathname))),
          e(Kt, "class", "svelte-10fxq71"),
          e(Na, "class", "ga svelte-10fxq71"),
          e(Na, "target", "_blank"),
          e(Na, "href", (Cl = l[3](C.PHEMEX_REFERENCES_PRIVACY_POLICY, "CMS"))),
          e(Na, "rel", "noopener noreferrer nofollow"),
          e(yt, "class", "svelte-10fxq71"),
          e(ve, "class", "ga svelte-10fxq71"),
          e(ve, "data-gac", "footer.link"),
          e(ve, "data-gaa", "link_click"),
          e(ve, "data-gal", "terms"),
          e(ve, "target", "_blank"),
          e(ve, "href", (_l = l[3](C.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS"))),
          e(ve, "rel", "noopener noreferrer nofollow"),
          e(Xt, "class", "svelte-10fxq71"),
          e(Ea, "class", "ga svelte-10fxq71"),
          e(Ea, "data-gac", "footer.link"),
          e(Ea, "data-gaa", "link_click"),
          e(Ea, "data-gal", "sitemap"),
          e(Ea, "href", (hl = l[3](L.SITEMAP.pathname))),
          e(qt, "class", "svelte-10fxq71"),
          e(Wa, "class", "f1 box svelte-10fxq71"),
          e(wt, "class", "lh36 f16 fw3 TW"),
          e(be, "class", "ga svelte-10fxq71"),
          e(be, "data-gac", "footer.link"),
          e(be, "data-gaa", "link_click"),
          e(be, "data-gal", "coincodex"),
          e(be, "href", (Ll = l[3](L.BUY_CRYPTO_BUY_BTC.pathname))),
          e(be, "target", "_blank"),
          e(Jt, "class", "svelte-10fxq71"),
          e(Fe, "class", "ga svelte-10fxq71"),
          e(Fe, "data-gac", "footer.link"),
          e(Fe, "data-gaa", "link_click"),
          e(Fe, "data-gal", "coincodex"),
          e(Fe, "href", (vl = l[3](L.BUY_CRYPTO_BUY_DOGE.pathname))),
          e(Fe, "target", "_blank"),
          e(zt, "class", "svelte-10fxq71"),
          e(ke, "class", "ga svelte-10fxq71"),
          e(ke, "data-gac", "footer.link"),
          e(ke, "data-gaa", "link_click"),
          e(ke, "data-gal", "coincodex"),
          e(ke, "href", (gl = l[3](L.BUY_CRYPTO_BUY_LTC.pathname))),
          e(ke, "target", "_blank"),
          e(Qt, "class", "svelte-10fxq71"),
          e(Ve, "class", "ga svelte-10fxq71"),
          e(Ve, "data-gac", "footer.link"),
          e(Ve, "data-gaa", "link_click"),
          e(Ve, "data-gal", "coincodex"),
          e(Ve, "href", (Pl = l[3](L.BUY_CRYPTO_BUY_ETHEREUM.pathname))),
          e(Ve, "target", "_blank"),
          e(jt, "class", "svelte-10fxq71"),
          e(Zt, "class", "xs:dn lh36 f16 fw3 TW"),
          e(Be, "class", "ga svelte-10fxq71"),
          e(Be, "data-gac", "footer.link"),
          e(Be, "data-gaa", "link_click"),
          e(Be, "data-gal", "coinmarketcap"),
          e(Be, "href", C.COINMARKETCAP_LINK),
          e(Be, "target", "_blank"),
          e(Be, "rel", "noopener noreferrer nofollow"),
          e(xt, "class", "svelte-10fxq71"),
          e(We, "class", "ga svelte-10fxq71"),
          e(We, "data-gac", "footer.link"),
          e(We, "data-gaa", "link_click"),
          e(We, "data-gal", "coingecko"),
          e(We, "href", C.COINGECKO_LINK),
          e(We, "target", "_blank"),
          e(We, "rel", "noopener noreferrer nofollow"),
          e($t, "class", "svelte-10fxq71"),
          e(Ke, "class", "ga svelte-10fxq71"),
          e(Ke, "data-gac", "footer.link"),
          e(Ke, "data-gaa", "link_click"),
          e(Ke, "data-gal", "coincodex"),
          e(Ke, "href", C.COINCODEX_LINK),
          e(Ke, "target", "_blank"),
          e(Ke, "rel", "noopener noreferrer nofollow"),
          e(el, "class", "svelte-10fxq71"),
          e(da, "class", "xs:dn"),
          e(pe, "class", "f1 box svelte-10fxq71"),
          e(H, "class", "f1 df fww"),
          e(i, "class", "main df svelte-10fxq71"),
          e(r, "class", "wrap pr svelte-10fxq71");
      },
      m(_, D) {
        W(_, r, D),
          a(r, i),
          a(i, I),
          a(I, c),
          a(c, n),
          a(I, A),
          a(I, f),
          a(f, v),
          a(I, m),
          a(I, g),
          yr(b, g, null),
          a(I, V),
          a(I, P),
          yr(p, P, null),
          a(I, X),
          a(I, q),
          a(q, F),
          a(i, S),
          a(i, H),
          a(H, M),
          a(M, k),
          a(k, Ee),
          a(M, Ta),
          a(M, K),
          a(K, ce),
          a(ce, j),
          a(j, na),
          a(K, ye),
          a(K, ge),
          a(ge, fe),
          a(fe, Ca),
          a(K, qa),
          Te && Te.m(K, null),
          a(K, Ha),
          a(K, _e),
          a(_e, z),
          a(z, wa),
          a(K, _a),
          a(K, Ia),
          a(Ia, Pe),
          a(Pe, Xe),
          a(K, Ja),
          a(K, ca),
          a(ca, te),
          a(te, Ga),
          a(K, za),
          a(K, qe),
          a(qe, Q),
          a(Q, pa),
          a(K, fa),
          a(K, Ue),
          a(Ue, Oe),
          a(Oe, Oa),
          a(H, Qa),
          a(H, Me),
          a(Me, he),
          a(he, ja),
          a(Me, Za),
          a(Me, B),
          a(B, He),
          a(He, le),
          a(le, we),
          a(B, ka),
          a(B, ue),
          a(ue, re),
          a(re, Je),
          a(B, h),
          a(B, y),
          a(y, se),
          a(se, Ot),
          a(B, Rt),
          a(B, va),
          a(va, Le),
          a(Le, Nt),
          a(B, dt),
          a(B, ze),
          a(ze, Se),
          a(Se, ut),
          a(B, St),
          a(B, Pa),
          a(Pa, oe),
          a(oe, Ba),
          a(B, Ct),
          a(B, Da),
          a(Da, ie),
          a(ie, _t),
          a(B, ht),
          a(B, Ne),
          a(Ne, Ce),
          a(Ce, Lt),
          a(B, vt),
          a(B, Ua),
          a(Ua, de),
          a(de, gt),
          a(H, Pt),
          a(H, Qe),
          a(Qe, Dt),
          a(Dt, kl),
          a(Qe, Vl),
          a(Qe, w),
          a(w, Ut),
          a(Ut, me),
          a(me, Bl),
          a(w, Wl),
          a(w, Mt),
          a(Mt, je),
          a(je, Kl),
          a(w, yl),
          a(w, Ht),
          a(Ht, Ze),
          a(Ze, Xl),
          a(w, ql),
          a(w, mt),
          a(mt, xe),
          a(xe, wl),
          a(w, Jl),
          a(w, Yt),
          a(Yt, $e),
          a($e, zl),
          a(w, Ql),
          a(w, Gt),
          a(Gt, ea),
          a(ea, jl),
          a(w, Zl),
          a(w, Et),
          oa.m(Et, null),
          a(w, xl),
          a(w, st),
          ia.m(st, null),
          a(w, $l),
          a(w, pt),
          a(pt, ot),
          a(ot, er),
          a(H, ar),
          a(H, Wa),
          a(Wa, bt),
          a(bt, tr),
          a(Wa, lr),
          a(Wa, J),
          a(J, Ft),
          a(Ft, aa),
          a(aa, rr),
          a(J, Er),
          a(J, kt),
          a(kt, ta),
          a(ta, sr),
          a(J, or),
          a(J, Vt),
          a(Vt, Ye),
          a(Ye, ir),
          a(J, Tr),
          a(J, Bt),
          a(Bt, la),
          a(la, nr),
          a(J, Ir),
          a(J, Wt),
          a(Wt, Ge),
          a(Ge, Ar),
          a(J, cr),
          a(J, Kt),
          a(Kt, ra),
          a(ra, fr),
          a(J, Or),
          a(J, yt),
          a(yt, Na),
          a(Na, Rr),
          a(J, Nr),
          a(J, Xt),
          a(Xt, ve),
          a(ve, dr),
          a(J, ur),
          a(J, qt),
          a(qt, Ea),
          a(Ea, Sr),
          a(H, Cr),
          a(H, pe),
          a(pe, wt),
          a(wt, _r),
          a(pe, hr),
          a(pe, sa),
          a(sa, Jt),
          a(Jt, be),
          a(be, Lr),
          a(sa, vr),
          a(sa, zt),
          a(zt, Fe),
          a(Fe, gr),
          a(sa, Pr),
          a(sa, Qt),
          a(Qt, ke),
          a(ke, Dr),
          a(sa, Ur),
          a(sa, jt),
          a(jt, Ve),
          a(Ve, Mr),
          a(pe, Hr),
          a(pe, Zt),
          a(Zt, mr),
          a(pe, Yr),
          a(pe, da),
          a(da, xt),
          a(xt, Be),
          a(Be, Gr),
          a(da, pr),
          a(da, $t),
          a($t, We),
          a(We, br),
          a(da, Fr),
          a(da, el),
          a(el, Ke),
          a(Ke, kr),
          a(r, Vr),
          yr(it, r, null),
          (G = !0),
          Br || ((uE = No(me, "click", l[11])), (Br = !0));
      },
      p(_, [D]) {
        const Ka = {};
        D & 16 && (Ka.options = _[4]),
          !Y && D & 4 && ((Y = !0), (Ka.value = _[2]), Mo(() => (Y = !1))),
          p.$set(Ka),
          _[5]
            ? Te
              ? Te.p(_, D)
              : ((Te = co(_)), Te.c(), Te.m(K, Ha))
            : Te && (Te.d(1), (Te = null)),
          (!G ||
            (D & 200 &&
              Ya !==
                (Ya = _[3](
                  _[6]
                    ? _[7]
                      ? L.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
                      : L.BUY_CRYPTO_PLACE_ORDER.pathname
                    : L.BUY_CRYPTO.pathname
                )))) &&
            e(z, "href", Ya),
          (!G || (D & 8 && Aa !== (Aa = _[3](L.CRYPTO_CONVERTER.pathname)))) &&
            e(Pe, "href", Aa),
          (!G || (D & 8 && De !== (De = _[3](L.EARN_HOME.pathname)))) &&
            e(te, "href", De),
          (!G || (D & 8 && Z !== (Z = _[3](L.LAUNCHPOOL.pathname)))) &&
            e(Q, "href", Z),
          (!G || (D & 8 && Ra !== (Ra = _[3](L.STRATEGY_SQUARE.pathname)))) &&
            e(Oe, "href", Ra),
          (!G || (D & 8 && Fa !== (Fa = _[3](C.PHEMEX_HELP_CENTER, "CMS")))) &&
            e(le, "href", Fa),
          (!G || (D & 8 && Va !== (Va = _[3](C.PHEMEX_ACADEMY, "CMS")))) &&
            e(re, "href", Va),
          (!G || (D & 8 && La !== (La = _[3](L.LEARN_CRYPTO.pathname)))) &&
            e(se, "href", La),
          (!G || (D & 8 && at !== (at = _[3](C.PHEMEX_BLOG, "CMS")))) &&
            e(Le, "href", at),
          (!G || (D & 8 && ga !== (ga = _[3](L.FEES_CONDITIONS.pathname)))) &&
            e(Se, "href", ga),
          (!G || (D & 8 && tt !== (tt = _[3](L.APIS.pathname)))) &&
            e(oe, "href", tt),
          (!G ||
            (D & 8 && lt !== (lt = _[3](L.CONTRACT_INTRODUCTION.pathname)))) &&
            e(ie, "href", lt),
          (!G ||
            (D & 8 && rt !== (rt = _[3](L.OFFICIAL_VERIFICATION.pathname)))) &&
            e(Ce, "href", rt),
          (!G || (D & 8 && Il !== (Il = _[3](L.BONUS.pathname)))) &&
            e(me, "href", Il),
          (!G ||
            (D & 8 && Al !== (Al = _[3](L.ACCOUNT_INVITE_FRIENDS.pathname)))) &&
            e(je, "href", Al),
          (!G || (D & 8 && cl !== (cl = _[3](L.VIP_PORTAL.pathname)))) &&
            e(Ze, "href", cl),
          (!G || D & 2) && e(xe, "href", _[1]),
          (!G || (D & 8 && fl !== (fl = _[3](L.ALL_STAR_PROGRAM.pathname)))) &&
            e($e, "href", fl),
          (!G ||
            (D & 8 && Ol !== (Ol = _[3](L.INSTITUTIONAL_CLIENT.pathname)))) &&
            e(ea, "href", Ol),
          Dl === (Dl = CE(_)) && oa
            ? oa.p(_, D)
            : (oa.d(1), (oa = Dl(_)), oa && (oa.c(), oa.m(Et, null))),
          Ul === (Ul = _E(_)) && ia
            ? ia.p(_, D)
            : (ia.d(1), (ia = Ul(_)), ia && (ia.c(), ia.m(st, null))),
          (!G || (D & 8 && Rl !== (Rl = _[3](L.ABOUT.pathname)))) &&
            e(aa, "href", Rl),
          (!G ||
            (D & 8 &&
              Nl !== (Nl = _[3](L.ABOUT_BRAND_STYLE_GUIDE.pathname)))) &&
            e(ta, "href", Nl),
          (!G ||
            (D & 8 && dl !== (dl = _[3](L.STUDENT_FOUNDATION.pathname)))) &&
            e(la, "href", dl),
          (!G ||
            (D & 8 &&
              ul !== (ul = _[3](C.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS")))) &&
            e(Ge, "href", ul),
          (!G || (D & 8 && Sl !== (Sl = _[3](L.SECURITY.pathname)))) &&
            e(ra, "href", Sl),
          (!G ||
            (D & 8 &&
              Cl !== (Cl = _[3](C.PHEMEX_REFERENCES_PRIVACY_POLICY, "CMS")))) &&
            e(Na, "href", Cl),
          (!G ||
            (D & 8 &&
              _l !== (_l = _[3](C.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS")))) &&
            e(ve, "href", _l),
          (!G || (D & 8 && hl !== (hl = _[3](L.SITEMAP.pathname)))) &&
            e(Ea, "href", hl),
          (!G ||
            (D & 8 && Ll !== (Ll = _[3](L.BUY_CRYPTO_BUY_BTC.pathname)))) &&
            e(be, "href", Ll),
          (!G ||
            (D & 8 && vl !== (vl = _[3](L.BUY_CRYPTO_BUY_DOGE.pathname)))) &&
            e(Fe, "href", vl),
          (!G ||
            (D & 8 && gl !== (gl = _[3](L.BUY_CRYPTO_BUY_LTC.pathname)))) &&
            e(ke, "href", gl),
          (!G ||
            (D & 8 &&
              Pl !== (Pl = _[3](L.BUY_CRYPTO_BUY_ETHEREUM.pathname)))) &&
            e(Ve, "href", Pl);
      },
      i(_) {
        G ||
          (Gl(b.$$.fragment, _),
          Gl(p.$$.fragment, _),
          Gl(it.$$.fragment, _),
          (G = !0));
      },
      o(_) {
        pl(b.$$.fragment, _),
          pl(p.$$.fragment, _),
          pl(it.$$.fragment, _),
          (G = !1);
      },
      d(_) {
        _ && t(r),
          Xr(b),
          Xr(p),
          Te && Te.d(),
          oa.d(),
          ia.d(),
          Xr(it),
          (Br = !1),
          uE();
      },
    }
  );
}
function Ni(l, r, i) {
  let I, c, n, T, A, f, u, v, m;
  Ma(l, Wo, (S) => i(15, (c = S))),
    Ma(l, Ko, (S) => i(3, (n = S))),
    Ma(l, bl, (S) => i(0, (A = S))),
    Ma(l, yo, (S) => i(4, (f = S))),
    Ma(l, Xo, (S) => i(5, (u = S))),
    Ma(l, qo, (S) => i(6, (v = S))),
    Ma(l, li, (S) => i(7, (m = S)));
  let { noShowBanner: g = !1 } = r;
  const b = Ho("LG"),
    { page: V } = wo();
  Ma(l, V, (S) => i(16, (T = S)));
  let P = "";
  mo(() => {
    Fo.parsePathname(T.path), p();
  });
  function p() {
    const S = location.origin + n(L.VIP_PROGRAM.pathname);
    i(1, (P = S + "?" + ko.stringify({ target: S, action: "Target" })));
  }
  function Y(S) {
    const H = S.detail.value,
      M = Zo[H] || H;
    c === "Login" ? X({ lang: M }) : bl.set(io[M] || M);
  }
  async function X(S) {
    const { data: H, error: M } = await Jo.updateProfile(S);
    if (H) {
      zo.next(H);
      const { lang: k } = S;
      k && bl.set(io[k] || k);
    }
    M && Qo.send("toast", "error", M);
  }
  function q() {
    jo.track("web_click", {
      $screen_name: "home",
      $element_content: "footer_services_rewards_hub",
    });
  }
  function F(S) {
    (I = S), i(2, I), i(0, A);
  }
  return (
    (l.$$set = (S) => {
      "noShowBanner" in S && i(12, (g = S.noShowBanner));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 1 && i(2, (I = A));
    }),
    [A, P, I, n, f, u, v, m, b, V, Y, q, g, F]
  );
}
class mi extends ol {
  constructor(r) {
    super(), il(this, r, Ni, Ri, Tl, { noShowBanner: 12 });
  }
}
function di(l) {
  let r,
    i,
    I,
    c = [
      { class: (i = "skeleton " + l[7]) },
      l[8],
      {
        style: (I =
          "height: " +
          l[3] +
          "; width: " +
          l[2] +
          "; border-radius: " +
          l[4] +
          "; --baseColor: " +
          l[0] +
          "; --highlightColor: " +
          l[1] +
          "; --animationLength: " +
          l[5] +
          "; " +
          l[6]),
      },
    ],
    n = {};
  for (let T = 0; T < c.length; T += 1) n = qr(n, c[T]);
  return {
    c() {
      (r = s("div")), this.h();
    },
    l(T) {
      (r = o(T, "DIV", { class: !0, style: !0 })), E(r).forEach(t), this.h();
    },
    h() {
      so(r, n), Fl(r, "svelte-p0i4ps", !0);
    },
    m(T, A) {
      W(T, r, A);
    },
    p(T, [A]) {
      so(
        r,
        (n = Yo(c, [
          A & 128 && i !== (i = "skeleton " + T[7]) && { class: i },
          A & 256 && T[8],
          A & 127 &&
            I !==
              (I =
                "height: " +
                T[3] +
                "; width: " +
                T[2] +
                "; border-radius: " +
                T[4] +
                "; --baseColor: " +
                T[0] +
                "; --highlightColor: " +
                T[1] +
                "; --animationLength: " +
                T[5] +
                "; " +
                T[6]) && { style: I },
        ]))
      ),
        Fl(r, "svelte-p0i4ps", !0);
    },
    i: Tt,
    o: Tt,
    d(T) {
      T && t(r);
    },
  };
}
function ui(l, r, i) {
  let I;
  const c = [
    "width",
    "height",
    "baseColor",
    "highlightColor",
    "borderRadius",
    "animationLength",
    "colorMode",
    "style",
    "class",
  ];
  let n = oo(r, c),
    { width: T = "100%" } = r,
    { height: A = "25px" } = r,
    { baseColor: f = "rgb(246, 246, 246)" } = r,
    { highlightColor: u = "rgb(252, 252, 252)" } = r,
    { borderRadius: v = "4px" } = r,
    { animationLength: m = "1.4s" } = r,
    { colorMode: g = "" } = r,
    { style: b = "" } = r,
    { class: V = "" } = r;
  return (
    (l.$$set = (P) => {
      (r = qr(qr({}, r), Go(P))),
        i(10, (n = oo(r, c))),
        "width" in P && i(2, (T = P.width)),
        "height" in P && i(3, (A = P.height)),
        "baseColor" in P && i(0, (f = P.baseColor)),
        "highlightColor" in P && i(1, (u = P.highlightColor)),
        "borderRadius" in P && i(4, (v = P.borderRadius)),
        "animationLength" in P && i(5, (m = P.animationLength)),
        "colorMode" in P && i(9, (g = P.colorMode)),
        "style" in P && i(6, (b = P.style)),
        "class" in P && i(7, (V = P.class));
    }),
    (l.$$.update = () => {
      i(8, (I = { ...(n || {}) })),
        l.$$.dirty & 512 &&
          g === "black" &&
          (i(0, (f = "#1a1a1a")), i(1, (u = "#343434")));
    }),
    [f, u, T, A, v, m, b, V, I, g]
  );
}
class Yi extends ol {
  constructor(r) {
    super(),
      il(this, r, ui, di, Tl, {
        width: 2,
        height: 3,
        baseColor: 0,
        highlightColor: 1,
        borderRadius: 4,
        animationLength: 5,
        colorMode: 9,
        style: 6,
        class: 7,
      });
  }
}
const Si = {
    FAVORITES: "Favorites",
    ALL: "All",
    CONTRACT: "Contract",
    SPOT: "Spot",
    MARGIN: "Margin",
    NEW_LISTINGS: "NewListings",
    COMING_SOON: "ComingSoon",
  },
  Ci = uo([$o, ei]).pipe(
    wr(_i),
    Vo(Boolean),
    Jr({ text: "-", categories: [] }),
    zr(1)
  );
function _i([l, r]) {
  if (r.size <= 0) return null;
  const i = l
    .map(({ symbols: n, text: T }) => {
      const A = n
          .filter((u) => u.startsWith("s") && u.endsWith("USDT"))
          .map((u) => {
            const v = r.get(u);
            if (v && v.status === "Listed")
              return {
                ...v,
                tradeLink: C.PHEMEX_SPOT_TRADE + "/" + u.slice(1),
              };
          })
          .filter(Boolean)
          .sort((u, v) => v.changePercent - u.changePercent)
          .slice(0, 3),
        f = A.length > 0 ? A.reduce((u, v) => u + v.changePercent, 0) : -1 / 0;
      return { categories: A, totalChangePercent: f, text: T };
    })
    .sort((n, T) => T.totalChangePercent - n.totalChangePercent);
  if (i.length === 0) return null;
  const { categories: I, text: c } = i[0];
  return { text: c, categories: I };
}
const hi = xo.pipe(
    wr((l) =>
      l
        .filter(({ quoteCurrency: r }) => r === "USDT")
        .sort((r, i) => i.changePercent - r.changePercent)
        .slice(0, 3)
    ),
    Jr([]),
    zr(1)
  ),
  Gi = uo([Ci, hi, ai]).pipe(
    wr(([{ text: l, categories: r }, i, I]) => [
      { title: l, plate: l, markets: r, icon: sl.MARKET_HOT },
      {
        title: "TopGainers",
        plate: "TOP_GAINERS",
        markets: i,
        icon: sl.TOP_GAINERS,
      },
      {
        title: "NewListings",
        plate: Si.NEW_LISTINGS,
        markets: I.slice(0, 3),
        icon: sl.NEW_LISTING,
      },
    ]),
    Jr([]),
    zr(1)
  );
function Li(l) {
  let r, i, I, c, n, T, A, f, u, v, m, g, b, V, P, p, Y, X, q;
  return {
    c() {
      (r = Ie("svg")),
        (i = Ie("defs")),
        (I = Ie("linearGradient")),
        (c = Ie("stop")),
        (n = Ie("stop")),
        (T = Ie("stop")),
        (A = Ie("linearGradient")),
        (f = Ie("stop")),
        (u = Ie("stop")),
        (v = Ie("stop")),
        (m = Ie("linearGradient")),
        (g = Ie("stop")),
        (b = Ie("stop")),
        (V = Ie("g")),
        (P = Ie("path")),
        (Y = Ie("path")),
        this.h();
    },
    l(F) {
      r = Ae(F, "svg", { width: !0, height: !0, viewBox: !0 });
      var S = E(r);
      i = Ae(S, "defs", {});
      var H = E(i);
      I = Ae(H, "linearGradient", { id: !0, x1: !0, x2: !0, y1: !0, y2: !0 });
      var M = E(I);
      (c = Ae(M, "stop", { offset: !0, "stop-color": !0, "stop-opacity": !0 })),
        E(c).forEach(t),
        (n = Ae(M, "stop", {
          offset: !0,
          "stop-color": !0,
          "stop-opacity": !0,
        })),
        E(n).forEach(t),
        (T = Ae(M, "stop", {
          offset: !0,
          "stop-color": !0,
          "stop-opacity": !0,
        })),
        E(T).forEach(t),
        M.forEach(t),
        (A = Ae(H, "linearGradient", {
          id: !0,
          x1: !0,
          x2: !0,
          y1: !0,
          y2: !0,
        }));
      var k = E(A);
      (f = Ae(k, "stop", { offset: !0, "stop-color": !0, "stop-opacity": !0 })),
        E(f).forEach(t),
        (u = Ae(k, "stop", {
          offset: !0,
          "stop-color": !0,
          "stop-opacity": !0,
        })),
        E(u).forEach(t),
        (v = Ae(k, "stop", {
          offset: !0,
          "stop-color": !0,
          "stop-opacity": !0,
        })),
        E(v).forEach(t),
        k.forEach(t),
        (m = Ae(H, "linearGradient", {
          id: !0,
          x1: !0,
          x2: !0,
          y1: !0,
          y2: !0,
        }));
      var ae = E(m);
      (g = Ae(ae, "stop", { "stop-color": !0, "stop-opacity": !0 })),
        E(g).forEach(t),
        (b = Ae(ae, "stop", {
          offset: !0,
          "stop-color": !0,
          "stop-opacity": !0,
        })),
        E(b).forEach(t),
        ae.forEach(t),
        H.forEach(t),
        (V = Ae(S, "g", { fill: !0 }));
      var Ee = E(V);
      (P = Ae(Ee, "path", { class: !0, d: !0, fill: !0 })),
        E(P).forEach(t),
        (Y = Ae(Ee, "path", {
          class: !0,
          d: !0,
          "stroke-width": !0,
          stroke: !0,
        })),
        E(Y).forEach(t),
        Ee.forEach(t),
        S.forEach(t),
        this.h();
    },
    h() {
      e(c, "offset", "0%"),
        e(c, "stop-color", "#a7ffe9"),
        e(c, "stop-opacity", "0.62"),
        e(n, "offset", "90%"),
        e(n, "stop-color", "#a7ffe9"),
        e(n, "stop-opacity", "0.2"),
        e(T, "offset", "100%"),
        e(T, "stop-color", "#fff"),
        e(T, "stop-opacity", "0.1"),
        e(I, "id", "trend-up-fill"),
        e(I, "x1", "0"),
        e(I, "x2", "0"),
        e(I, "y1", "0"),
        e(I, "y2", "1"),
        e(f, "offset", "0%"),
        e(f, "stop-color", "#fd9491"),
        e(f, "stop-opacity", "0.47"),
        e(u, "offset", "90%"),
        e(u, "stop-color", "#fd9491"),
        e(u, "stop-opacity", "0.1"),
        e(v, "offset", "100%"),
        e(v, "stop-color", "#fff"),
        e(v, "stop-opacity", "0.05"),
        e(A, "id", "trend-down-fill"),
        e(A, "x1", "0"),
        e(A, "x2", "0"),
        e(A, "y1", "0"),
        e(A, "y2", "1"),
        e(g, "stop-color", "rgba(0, 85, 255, 0.59)"),
        e(g, "stop-opacity", "0.26"),
        e(b, "offset", "1"),
        e(b, "stop-color", "rgba(0, 85, 255, 0.00)"),
        e(b, "stop-opacity", "0"),
        e(m, "id", "trend-blue-fill"),
        e(m, "x1", "0"),
        e(m, "x2", "0"),
        e(m, "y1", "0"),
        e(m, "y2", "1"),
        e(P, "class", "area"),
        e(P, "d", l[6]),
        e(P, "fill", (p = "url(#" + Ro(l[3], l[0]) + ")")),
        e(Y, "class", "line svelte-1qs2d69"),
        e(Y, "d", l[5]),
        e(Y, "stroke-width", "2"),
        e(Y, "stroke", (X = Oo(l[4], l[0]))),
        e(V, "fill", "transparent"),
        e(r, "width", l[1]),
        e(r, "height", l[2]),
        e(r, "viewBox", (q = "0 0 " + l[1] * 2 + " " + l[2] * 2));
    },
    m(F, S) {
      W(F, r, S),
        a(r, i),
        a(i, I),
        a(I, c),
        a(I, n),
        a(I, T),
        a(i, A),
        a(A, f),
        a(A, u),
        a(A, v),
        a(i, m),
        a(m, g),
        a(m, b),
        a(r, V),
        a(V, P),
        a(V, Y);
    },
    p(F, [S]) {
      S & 64 && e(P, "d", F[6]),
        S & 9 && p !== (p = "url(#" + Ro(F[3], F[0]) + ")") && e(P, "fill", p),
        S & 32 && e(Y, "d", F[5]),
        S & 17 && X !== (X = Oo(F[4], F[0])) && e(Y, "stroke", X),
        S & 2 && e(r, "width", F[1]),
        S & 4 && e(r, "height", F[2]),
        S & 6 &&
          q !== (q = "0 0 " + F[1] * 2 + " " + F[2] * 2) &&
          e(r, "viewBox", q);
    },
    i: Tt,
    o: Tt,
    d(F) {
      F && t(r);
    },
  };
}
const fo = 2,
  vi = 0.15;
function Oo(l, r) {
  return l !== "" ? l : r > 0 ? "#3cc7a4" : "rgba(253, 148, 145, 0.8)";
}
function Ro(l, r) {
  return l !== "" ? l : `trend-${r > 0 ? "up" : "down"}-fill`;
}
function gi(l, r, i) {
  let { change: I = 0 } = r,
    { data: c = [] } = r,
    { width: n = 110 } = r,
    { height: T = 30 } = r,
    { chartFill: A = "" } = r,
    { chartLineColor: f = "" } = r,
    u = "",
    v = "";
  function m(g) {
    const b = g.length;
    if (b < 1) return { path: "", area: "" };
    const V = n * fo,
      P = T * fo,
      p = V / b,
      Y = Math.max.apply(null, g),
      X = Math.min.apply(null, g),
      q = g
        .map((S, H) => {
          const M = H * p,
            k = Y === X ? 0 : P * (1 - vi) * (1 - (S - X) / (Y - X));
          return `${M.toFixed(3)},${k.toFixed(3)}`;
        })
        .join("L"),
      F = q ? `M${q}` : "";
    return { path: F, area: `${F}L${V},${P}L0,${P}Z` };
  }
  return (
    (l.$$set = (g) => {
      "change" in g && i(0, (I = g.change)),
        "data" in g && i(7, (c = g.data)),
        "width" in g && i(1, (n = g.width)),
        "height" in g && i(2, (T = g.height)),
        "chartFill" in g && i(3, (A = g.chartFill)),
        "chartLineColor" in g && i(4, (f = g.chartLineColor));
    }),
    (l.$$.update = () => {
      if (l.$$.dirty & 128) {
        const g = m(c);
        i(5, (u = g.path)), i(6, (v = g.area));
      }
    }),
    [I, n, T, A, f, u, v, c]
  );
}
class pi extends ol {
  constructor(r) {
    super(),
      il(this, r, gi, Li, Tl, {
        change: 0,
        data: 7,
        width: 1,
        height: 2,
        chartFill: 3,
        chartLineColor: 4,
      });
  }
}
const bi = {
  Followers: "9730e2",
  OneClick: "b22ddb",
  Follow: "e6bc32",
  Following: "943f8f",
  DataDashboard: "706850",
  TotalBalance: "79fb2d",
  TotalPNL: "12ae1c",
  TotalROI: "9ff314",
  MonthlyPNL: "ff7f9d",
  MonthlyROI: "640574",
  MonthlyPositions: "e1fcd4",
  CurrentPositions: "b47864",
  HistoricalPositions: "1a602c",
  DisclaimerPositions: "b7ed67",
  Positions: "45a33d",
  OpenPrice: "38226d",
  PositionValue: "6b45e1",
  CurrentReturn: "cc4f60",
  CurrentReturnsUnrealized: "f5b724",
  CurrentReturns: "a9f444",
  LiqPrice: "e8c953",
  Margin: "4b00a0",
  Operate: "ed9015",
  Short: "18765f",
  Long: "790393",
  Details: "0d4858",
  LogInfo: "75887d",
  Your: "84e1ef",
  Sell: "cb90f3",
  Buy: "447811",
  Settings: "ef34d4",
  HidePositions: "e4211e",
  HideAccount: "f50ea9",
  CopyTrade: "0b84b4",
  ComingSoon: "ebf32a",
  SelectAvatar: "08553d",
  PleaseChoose: "1cd83f",
  Cancel: "542514",
  Save: "307e4a",
  Profile: "f685be",
  TransactionAnalysis: "ba5bc1",
  PositionNum: "3c2e55",
  ProfitableTrades: "42d23e",
  AccumulatedWinningRate: "c55555",
  AccumulatedProfit: "39e512",
  PositionsOpened: "c62d9c",
  ProfitsMadeIn: "14821c",
  ProfitableTradesInLast: "9790d3",
  WinningRateInLast: "323897",
  TotalTransactionVolume: "0fcb61",
  AveragePositionHoldTime: "7678c7",
  TradingPair: "04e286",
  TheUser: "206855",
  CheckThe: "85505a",
  NameRule: "0f80a9",
  CalculatingProfit: "a1eb09",
  YourActual: "37f274",
  CheckTheStandards: "f43b99",
  AfterOur: "e280c6",
  LastNumDays: "ddc787",
  All: "bc8fa5",
  SEOTitle: "f536b3",
  Perpetual: "f33693",
  MarkPrice: "65c517",
  StarTrader: "ec5baa",
  UnrealizedPnlRoi: "dd3b7f",
  RealizedPnlRoi: "b8a5f5",
  ClosingPrice: "a2f722",
  Size: "6dfdbc",
  Cont: "127de8",
  GoTrade: "e51a28",
  NumberOfCopies: "e3ebca",
  CopyTradeData: "7e7d2d",
  MonthlyCopierPNL: "1d98f4",
  ProfitShareRatio: "f5f44d",
  MiniCopyAmount: "2bcece",
  CumulativeCopierPNL: "723746",
  CopyTradePairs: "fb871a",
  Copiers: "1e50b9",
  CopyTradingVolume: "415c88",
  EstProfitShare: "16cb8f",
  ProfitsWillOnly: "3376d6",
  ProfitSharingRules: "6625e1",
  RealizedProfitSharing: "e4042c",
  TotalRealizedProfitSharing: "97f873",
  LastCycleProfitSharing: "bf795e",
  CurrentCycleProfitSharing: "911bb0",
  Overview: "823e4a",
  CopyTradeDetails: "0795c9",
  ProfitSharing: "ab3f78",
  TopTrader: "93ba7d",
  AmountInvested: "e616a2",
  MaxInvestment: "89cbfd",
  TotalRealizedPNL: "d5bb30",
  Action: "531fbf",
  Edit: "c541a8",
  Close: "785e66",
  Confirm: "0a839d",
  ConfirmToClose: "ef5751",
  CancelCopy: "332d72",
  AreYouSure: "684529",
  Share: "a150a2",
  Copy: "51b7df",
  OnlyShowCopy: "c4132e",
  CopyTradeSettings: "29f2cf",
  YouMustConfigure: "0ddd9d",
  GoToSettings: "c939a6",
  SubAccountsCannot: "49c797",
  TraderCannotCopy: "39680e",
  CopyCountCannotCopy: "8f74da",
  TraderNoReadyCannotCopy: "7a42db",
  Full: "2f3526",
  Copying: "3c55d6",
  ActiveCopiers: "bffde4",
  Transfer: "c9cb41",
  OK: "f5f418",
  DiscoverExpertTrader: "e0dcca",
  Back: "1d53d4",
  Commentary: "d61970",
  ShareYourOpinions: "153f1e",
  Translate: "0243a2",
  Delete: "87a6e5",
  Publish: "72aec4",
  MyThoughts: "b80a81",
  ImgLimit: "0e848f",
  DeleteConfirm: "39dcbe",
  CurrentRealizedPnL: "13bbf6",
  CurrentAccountNet: "eb1592",
  MonthlyCumulative: "bcba69",
  CurrentAccountMonthlyPnl: "b98344",
  CurrentAccountNumber: "84400d",
  MonthlyCumulativeReturn: "dfc75d",
  CumulativeHistoricalReturns: "ddd80a",
  CurrentAccountCumulativeOpened: "4d0f84",
  CurrentAccountCumulativeNumberRealized: "4c6c9b",
  CurrentAccountCumulativeNumberRealizedPositions: "de05b3",
  CurrentAccountNumber90Days: "45f87a",
  CurrentAccount90DayCumulativePnl: "4f0c00",
  CurrentAccount90DayCumulativeRealized: "87a28b",
  CurrentAccount90DayCumulativeNumber: "a2eab9",
  CurrentAccount90DayCumulativeContract: "d55806",
  HistoricalAveragePosition: "fa3df3",
};
export { mi as F, Yi as S, pi as T, Si as a, bi as c, Gi as m, hi as t };
//# sourceMappingURL=chunk-0e213858.js.map
