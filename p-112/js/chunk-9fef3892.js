import {
  S as VE,
  i as BE,
  s as bE,
  a9 as IT,
  aa as AT,
  ab as iT,
  ac as OT,
  H as Dl,
  I as Pl,
  x as Pa,
  a2 as Ul,
  aI as d,
  cl as oT,
  e as l,
  c as E,
  b as r,
  f as t,
  g as e,
  h as p,
  aY as RT,
  aZ as NT,
  a as o,
  d as R,
  j as a,
  t as N,
  m as n,
  o as Zs,
  l as sT,
  n as kE,
  O as nT,
  C as ST,
  P as fT,
  E as mE,
  F as GE,
  a8 as xs,
  L as cT,
  X as v,
  G as pE,
  R as dT,
  J as FE,
  cp as uT,
  _ as _T,
  cr as CT,
  cs as LT,
  T as vT,
  ct as gT,
  y as hT,
  z as DT,
  ay as PT,
  ci as eT,
  bb as UT,
  $ as MT,
  W as HT,
  c1 as YT,
} from "./chunk-707a9f2f.js";
import { e as mT, a as GT, l as pT, q as FT } from "./app-7aa7d139.js";
import { a as kT } from "./chunk-d2488ba6.js";
function aT(s, T, I) {
  const O = s.slice();
  return (O[8] = T[I]), (O[10] = I), O;
}
const VT = (s) => ({ items: s & 1 }),
  tT = (s) => ({ items: s[0] });
function lT(s, T) {
  let I, O, f, A, i, c, S;
  return {
    key: s,
    first: null,
    c() {
      (I = l("a")), (O = l("img")), (i = o()), this.h();
    },
    l(L) {
      I = E(L, "A", {
        class: !0,
        "data-action": !0,
        "data-label": !0,
        target: !0,
        rel: !0,
        href: !0,
      });
      var M = r(I);
      (O = E(M, "IMG", {
        width: !0,
        height: !0,
        class: !0,
        "data-src": !0,
        alt: !0,
      })),
        (i = R(M)),
        M.forEach(t),
        this.h();
    },
    h() {
      e(O, "width", "36"),
        e(O, "height", "36"),
        e(O, "class", "lazyload svelte-1nagd9c"),
        e(O, "data-src", (f = T[8].img)),
        e(O, "alt", (A = T[8].alt)),
        e(I, "class", "ga svelte-1nagd9c"),
        e(I, "data-action", "footerlink"),
        e(I, "data-label", (c = "footerlink." + T[8].alt)),
        e(I, "target", "_blank"),
        e(I, "rel", "noopener noreferrer nofollow"),
        e(I, "href", (S = T[8].url)),
        (this.first = I);
    },
    m(L, M) {
      p(L, I, M), a(I, O), a(I, i);
    },
    p(L, M) {
      (T = L),
        M & 1 && f !== (f = T[8].img) && e(O, "data-src", f),
        M & 1 && A !== (A = T[8].alt) && e(O, "alt", A),
        M & 1 && c !== (c = "footerlink." + T[8].alt) && e(I, "data-label", c),
        M & 1 && S !== (S = T[8].url) && e(I, "href", S);
    },
    d(L) {
      L && t(I);
    },
  };
}
function BT(s) {
  let T,
    I = [],
    O = new Map(),
    f = s[0];
  const A = (i) => i[8].alt;
  for (let i = 0; i < f.length; i += 1) {
    let c = aT(s, f, i),
      S = A(c);
    O.set(S, (I[i] = lT(S, c)));
  }
  return {
    c() {
      T = l("div");
      for (let i = 0; i < I.length; i += 1) I[i].c();
      this.h();
    },
    l(i) {
      T = E(i, "DIV", { class: !0 });
      var c = r(T);
      for (let S = 0; S < I.length; S += 1) I[S].l(c);
      c.forEach(t), this.h();
    },
    h() {
      e(T, "class", "media df fww svelte-1nagd9c");
    },
    m(i, c) {
      p(i, T, c);
      for (let S = 0; S < I.length; S += 1) I[S].m(T, null);
    },
    p(i, c) {
      c & 1 && ((f = i[0]), (I = RT(I, c, A, 1, i, f, O, T, NT, lT, null, aT)));
    },
    d(i) {
      i && t(T);
      for (let c = 0; c < I.length; c += 1) I[c].d();
    },
  };
}
function bT(s) {
  let T;
  const I = s[3].default,
    O = IT(I, s, s[2], tT),
    f = O || BT(s);
  return {
    c() {
      f && f.c();
    },
    l(A) {
      f && f.l(A);
    },
    m(A, i) {
      f && f.m(A, i), (T = !0);
    },
    p(A, [i]) {
      O
        ? O.p &&
          (!T || i & 5) &&
          AT(O, I, A, A[2], T ? OT(I, A[2], i, VT) : iT(A[2]), tT)
        : f && f.p && (!T || i & 1) && f.p(A, T ? i : -1);
    },
    i(A) {
      T || (Dl(f, A), (T = !0));
    },
    o(A) {
      Pl(f, A), (T = !1);
    },
    d(A) {
      f && f.d(A);
    },
  };
}
function WT(s, T, I) {
  let O, f;
  Pa(s, Ul, (W) => I(1, (f = W)));
  let { $$slots: A = {}, $$scope: i } = T;
  const c = `${GT.STATIC_URL}/s/web/media/`,
    S = {
      FACEBOOK: c + "facebook.svg",
      TWITTER:
        "https://img.phemex.com/v1/c80f707e-e491-410c-b9ed-e28fdf5e3d6c/twitter.svg",
      TELEGRAM: c + "telegram.svg",
      YOUTUBE: c + "youtube.svg",
      MEDIUM: c + "medium.svg",
      VK: c + "vk.svg",
      KAKAO: c + "kakao.svg",
      NAVER: c + "naver.svg",
      WECHAT: c + "wechat.svg",
      MICROBLOG: c + "microblog.svg",
      LINKIN: c + "linkin.svg",
      SNAPCHAT: c + "snapchat.svg",
      INSTAGRAM: c + "instagram.svg",
      DISCORD: c + "discord.svg",
      TIKTOK: c + "tiktok.svg",
    },
    L = {
      FACEBOOK: { url: d.PHEMEX_FACEBOOK, img: S.FACEBOOK, alt: "Facebook" },
      TWITTER: { url: d.PHEMEX_TWITTER, img: S.TWITTER, alt: "Twitter" },
      TELEGRAM: { url: d.PHEMEX_TELEGRAM, img: S.TELEGRAM, alt: "Telegram" },
      LINKIN: { url: d.PHEMEX_LINKEDIN, img: S.LINKIN, alt: "linkedin" },
      YOUTUBE: { url: d.PHEMEX_YOUTUBE, img: S.YOUTUBE, alt: "Youtube" },
      INSTAGRAM: {
        url: d.PHEMEX_INSTAGRAM_EN,
        img: S.INSTAGRAM,
        alt: "Instagram",
      },
      DISCORD: { url: d.PHEMEX_DISCORD, img: S.DISCORD, alt: "Discord" },
      TV: { url: d.PHEMEX_TV, img: oT.TV, alt: "tradeView" },
    },
    M = {
      en: Object.values(L),
      ru: [
        { url: d.PHEMEX_TWITTER_RU, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_RU, img: S.TELEGRAM, alt: "Telegram" },
        L.YOUTUBE,
        { url: d.PHEMEX_VK_RU, img: S.VK, alt: "Vk" },
        { url: d.PHEMEX_INSTAGRAM_RU, img: S.INSTAGRAM, alt: "Instagram" },
        L.TV,
      ],
      ko: [
        { url: d.PHEMEX_FACEBOOK_KO, img: S.FACEBOOK, alt: "Facebook" },
        { url: d.PHEMEX_TWITTER, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_KO, img: S.TELEGRAM, alt: "Telegram" },
        L.YOUTUBE,
        { url: d.PHEMEX_KAKAO_KO, img: S.KAKAO, alt: "Kakao" },
        { url: d.PHEMEX_NAVER_KO, img: S.NAVER, alt: "Naver" },
        L.TV,
      ],
      ja: [{ url: d.PHEMEX_TWITTER_PULSE, img: S.TWITTER, alt: "Twitter" }],
      es: [
        { url: d.PHEMEX_FACEBOOK_ES, img: S.FACEBOOK, alt: "Facebook" },
        { url: d.PHEMEX_TWITTER_ES, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_ES, img: S.TELEGRAM, alt: "Telegram" },
        { url: d.PHEMEX_LINKEDIN, img: S.LINKIN, alt: "linkedin" },
        { url: d.PHEMEX_MEDIUM, img: S.MEDIUM, alt: "Medium" },
        { url: d.PHEMEX_INSTAGRAM_ES, img: S.INSTAGRAM, alt: "Instagram" },
        L.TV,
      ],
      de: [
        { url: d.PHEMEX_FACEBOOK_DE, img: S.FACEBOOK, alt: "Facebook" },
        { url: d.PHEMEX_TWITTER_DE, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_DE, img: S.TELEGRAM, alt: "Telegram" },
        L.YOUTUBE,
        { url: d.PHEMEX_MEDIUM, img: S.MEDIUM, alt: "Medium" },
        { url: d.PHEMEX_INSTAGRAM_DE, img: S.INSTAGRAM, alt: "Instagram" },
        L.TV,
      ],
      fr: [
        L.FACEBOOK,
        { url: d.PHEMEX_TWITTER_FR, img: S.TWITTER, alt: "Twitter" },
        L.TELEGRAM,
        L.YOUTUBE,
        L.LINKIN,
        L.DISCORD,
        L.INSTAGRAM,
        L.TV,
      ],
      tr: [
        L.FACEBOOK,
        { url: d.PHEMEX_TWITTER_TR, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_TR, img: S.TELEGRAM, alt: "Telegram" },
        { url: d.PHEMEX_INSTAGRAM_TR, img: S.INSTAGRAM, alt: "Instagram" },
        L.TV,
      ],
      pt: [
        L.FACEBOOK,
        { url: d.PHEMEX_TWITTER_PT, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_PT, img: S.TELEGRAM, alt: "Telegram" },
        L.LINKIN,
        L.YOUTUBE,
        L.INSTAGRAM,
        L.DISCORD,
        L.TV,
      ],
      vi: [
        { url: d.PHEMEX_FACEBOOK_VI, img: S.FACEBOOK, alt: "Facebook" },
        { url: d.PHEMEX_TWITTER_VI, img: S.TWITTER, alt: "Twitter" },
        { url: d.PHEMEX_TELEGRAM_VI, img: S.TELEGRAM, alt: "Telegram" },
        { url: d.PHEMEX_INSTAGRAM_VI, img: S.INSTAGRAM, alt: "Instagram" },
        L.TV,
      ],
    };
  return (
    (s.$$set = (W) => {
      "$$scope" in W && I(2, (i = W.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 2 && I(0, (O = mT.isJapanSite ? M.ja : M[f] || []));
    }),
    [O, f, i, A]
  );
}
class KT extends VE {
  constructor(T) {
    super(), BE(this, T, WT, bT, bE, {});
  }
}
function ET(s) {
  let T,
    I,
    O,
    f,
    A,
    i,
    c,
    S,
    L,
    M,
    W,
    b,
    K,
    Re,
    w,
    Y,
    k,
    se,
    ee,
    Ce,
    C,
    U,
    P,
    F,
    fe,
    Le,
    Ta,
    m,
    Te,
    y,
    Tt,
    Ia,
    We,
    ve,
    Ie,
    It,
    da,
    Xa,
    Ua,
    ce,
    X,
    Ma,
    qa,
    Ha,
    ua,
    Aa,
    ge,
    _a,
    Ke,
    ia,
    wa,
    Oa,
    z,
    At,
    Ya,
    he,
    ya,
    Xe,
    q,
    it,
    ma,
    $,
    oa,
    De,
    Ae,
    Ot,
    Ra,
    Na,
    $a,
    Pe,
    de,
    Ga,
    Ja,
    Qa,
    H,
    Ue,
    Z,
    ja,
    qe,
    pa,
    Fa,
    Ne,
    x,
    za,
    we,
    ka;
  return {
    c() {
      (T = l("div")),
        (I =
          N(`BY CONTINUING TO USE PHEMEX.COM YOU HEREBY ACKNOWLEDGE THAT YOU HAVE ACCEPTED THE RISKS DISCLOSED UNDER THIS PHEMEX RISK WARNING. PHEMEX RESERVES THE RIGHT TO MODIFY ANY OF THE TERMS OF THIS
      PHEMEX RISK WARNING WITHOUT PRIOR NOTICE. IF ANY OF THE TERMS HEREUNDER ARE UNACCEPTABLE TO YOU, YOU SHOULD NOT USE PHEMEX.COM. CRYPTOCURRENCY TRADING IS HIGH-RISK AND SPECULATIVE, IT IS
      IMPORTANT THAT YOU UNDERSTAND THE RISKS BEFORE YOU START TRADING.`)),
        (O = o()),
        (f = l("div")),
        (A = N(
          "THE RISKS OF INVESTING WITH PHEMEX.COM INCLUDE, BUT ARE NOT LIMITED TO, THE FOLLOWING:"
        )),
        (i = o()),
        (c = l("div")),
        (S = l("div")),
        (L = l("div")),
        (M = l("div")),
        (W = N("1. PRICE RISKS:")),
        (b = o()),
        (K = l("div")),
        (Re =
          N(`PRICES CAN AND DO FLUCTUATE ON ANY GIVEN DAY. THIS IS ESPECIALLY TRUE FOR CRYPTOCURRENCY TRADING – UNEXPECTED CHANGES IN MARKET SENTIMENT CAN LEAD TO SHARP AND SUDDEN MOVEMENT IN PRICE. IT
            IS NOT UNCOMMON FOR THE VALUE OF CRYPTOCURRENCIES TO QUICKLY DROP BY HUNDREDS, IF NOT THOUSANDS OF DOLLARS.`)),
        (w = o()),
        (Y = l("div")),
        (k = l("div")),
        (se = l("div")),
        (ee = N("2. REGULATORY RISKS:")),
        (Ce = o()),
        (C = l("div")),
        (U =
          N(`CRYPTOCURRENCY TRANSACTIONS MAY FACE POLICY REGULATORY RISKS IN CERTAIN JURISDICTIONS AND MAY BE SUSPENDED OR PROHIBITED AT ANY TIME. THEREFORE, WE ADVISE YOU MAKE A CAREFUL JUDGMENT
            BEFORE TRADING AND TAKE THE TIME TO UNDERSTAND THE POLICY REGULATIONS OF YOUR TRADING REGION AND EVALUATE THE ECONOMIC RISK OF LOSING THE ENTIRE INVESTMENT.`)),
        (P = o()),
        (F = l("div")),
        (fe = l("div")),
        (Le = l("div")),
        (Ta = N("3. TAX RISKS:")),
        (m = o()),
        (Te = l("div")),
        (y =
          N(`CRYPTOCURRENCY TRADING MAY BE SUBJECT TO TAXATION. YOU ARE SOLELY RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING ANY AND ALL TAXES TO THE APPROPRIATE
            TAX AUTHORITIES IN ANY SUCH JURISDICTION(S) IN WHICH YOU MAY BE LIABLE TO PAY TAX. PHEMEX SHALL NOT BE RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING
            ANY TAXES (INCLUDING, BUT NOT LIMITED TO, INCOME, CAPITAL GAINS, SALES, VALUE ADDED OR SIMILAR TAX) WHICH MAY ARISE FROM YOUR PARTICIPATION IN THE CRYPTOCURRENCY TRADING.`)),
        (Tt = o()),
        (Ia = l("div")),
        (We = l("div")),
        (ve = l("div")),
        (Ie = N("4. REGION LIMITATION RISKS:")),
        (It = o()),
        (da = l("div")),
        (Xa =
          N(`PHEMEX CANNOT AND DOES NOT PROVIDE SERVICES TO COUNTRIES OR TERRITORIES WHERE CRYPTOCURRENCY TRADING ACTIVITIES ARE SPECIALLY LICENSED, ACCREDITED, OR REGULATED IN OTHER WAYS. YOU SHALL
            CHECK THE APPLICABLE LAWS IN YOUR REGION AND BE FULLY RESPONSIBLE FOR ANY NEGATIVE IMPACT THAT MAY ARISE FROM YOUR RESIDENT COUNTRY’S REGULATIONS. IF YOU ARE TRAVELLING TO ANY SUCH
            COUNTRIES, YOU ACKNOWLEDGE THAT OUR SERVICES MAY BE UNAVAILABLE AND/OR BLOCKED.`)),
        (Ua = o()),
        (ce = l("div")),
        (X = l("div")),
        (Ma = l("div")),
        (qa = N("5. RISKS OF CHANGE OR TERMINATION OF SERVICE:")),
        (Ha = o()),
        (ua = l("div")),
        (Aa =
          N(`PLEASE NOTE THAT PHEMEX IS IN THE PROCESS OF UNDERTAKING A LEGAL AND REGULATORY ANALYSIS OF BITCOIN TRADING WITH MARGIN. FOLLOWING THE CONCLUSION OF THIS ANALYSIS, PHEMEX MAY DECIDE TO
            AMEND THE INTENDED FUNCTIONALITY IN ORDER TO ENSURE COMPLIANCE WITH ANY LEGAL OR REGULATORY REQUIREMENTS TO WHICH PHEMEX IS SUBJECT. WE SHALL PUBLISH A NOTICE ON OUR WEBSITE OF ANY CHANGES
            OR MODIFICATIONS TO THE FUNCTIONALITY AND IT IS YOUR RESPONSIBILITY TO REGULARLY CHECK OUR WEBSITE FOR ANY SUCH NOTICES. ON THE CONCLUSION OF THIS ANALYSIS, WE WILL DECIDE WHETHER OR NOT
            TO CHANGE THE FUNCTIONALITY OF THE WEBSITE.`)),
        (ge = o()),
        (_a = l("div")),
        (Ke = l("div")),
        (ia = l("div")),
        (wa = N("6. RISKS OF CRYPTOCURRENCY CONTRACT TRADING:")),
        (Oa = o()),
        (z = l("div")),
        (At =
          N(`RISKS OF CRYPTOCURRENCY DERIVATIVE CONTRACT TRADING: TRADING DERIVATIVE CONTRACTS POSES ADDITIONAL RISKS NOT FOUND WITH TRADITIONAL CURRENCIES. CRYPTOCURRENCIES ARE ASSOCIATED WITH
            SUBSTANTIAL PRICE MOVEMENTS, HIGHER MARKET VOLATILITY, AND MORE CHARGES OR FEES. THESE FACTORS CAN LEAD TO INCREASED GAPPING OR SLIPPAGE COSTS.`)),
        (Ya = o()),
        (he = l("div")),
        (ya =
          N(`CONTRACT TRADING OFTEN EMPLOYS LEVERAGE, WHICH INCREASES EXPOSURE TO BOTH PROFITS AND LOSSES. IF THE MARKET MOVES IN A DIRECTION THAT OPPOSES YOUR POSITION, YOU WILL EXPERIENCE A RAPID AND
      SIGNIFICANT LOSS. IT IS YOUR RESPONSIBILITY TO SET A STOP LOSS INSTRUCTION TO MITIGATE YOUR EXPOSURE AND TO AVOID FORCED LIQUIDATIONS. IN THE CASE OF A LIQUIDATION YOU WILL BEAR ALL THE LOSSES.
      PLEASE NOTE THAT ONCE AN ORDER IS SUBMITTED AND FILED BY OUR TRADING PLATFORM, IT IS FINAL AND IRREVOCABLE. YOU MUST ACCEPT ALL RISKS AND CONSEQUENCES OF YOUR TRADES.`)),
        (Xe = o()),
        (q = l("div")),
        (it = N(
          "THE ABOVE IS A NON-EXHAUSTIVE LIST. TAKING ALL OF THE ABOVE INTO CONSIDERATION, PRIOR TO USING PHEMEX.COM FOR CRYPTOCURRENCY TRADING, YOU PROMISE THAT YOU:"
        )),
        (ma = o()),
        ($ = l("div")),
        (oa = l("div")),
        (De = l("div")),
        (Ae =
          N(`1. ARE OF AN AGE OF MAJORITY (AT LEAST 18 YEARS OF AGE), MEET ALL ELIGIBILITY AND RESIDENCY REQUIREMENTS, ARE FULLY ABLE AND LEGALLY COMPETENT TO USE PHEMEX.COM AND THUS ENTER INTO AN
          AGREEMENT WITH PHEMEX - ENSURING THAT IN DOING SO YOU WILL NOT VIOLATE ANY OTHER AGREEMENT TO WHICH YOU ARE A PARTY;`)),
        (Ot = o()),
        (Ra = l("div")),
        (Na = l("div")),
        ($a =
          N(`2. HAVE THE NECESSARY AND RELEVANT EXPERIENCE AND KNOWLEDGE TO DEAL WITH AND MANAGE CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, WITH A FULL UNDERSTANDING OF THEIR FRAMEWORKS AND ARE AWARE
          OF ALL THE MERITS, RISKS AND ANY RESTRICTIONS ASSOCIATED WITH CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, BEING SOLELY RESPONSIBLE FOR ANY EVALUATIONS BASED ON SUCH KNOWLEDGE;`)),
        (Pe = o()),
        (de = l("div")),
        (Ga = l("div")),
        (Ja = N(
          "3. ARE NOT A FOREIGN OR DOMESTIC POLITICALLY EXPOSED PERSON (PEP);"
        )),
        (Qa = o()),
        (H = l("div")),
        (Ue = l("div")),
        (Z = N(
          "4. WILL NOT BE USING PHEMEX.COM FOR ANY ILLEGAL ACTIVITY, INCLUDING BUT NOT LIMITED TO, MONEY LAUNDERING AND THE FINANCING OF TERRORISM."
        )),
        (ja = o()),
        (qe = l("div")),
        (pa =
          N(`PLEASE NOTE THAT ALL DATA ANALYSIS, PROJECTIONS, CONTENT, RESEARCH, TOOLS, AND COIN SYMBOLS ARE FOR EDUCATIONAL AND ILLUSTRATIVE PURPOSES ONLY. THEY DO NOT IMPLY OUR RECOMMENDATION OR
      SOLICITATION TO BUY OR SELL A PARTICULAR ASSET OR TO ENGAGE IN ANY PARTICULAR INVESTMENT STRATEGY. PROJECTIONS OR OTHER INFORMATION REGARDING THE LIKELIHOOD OF VARIOUS INVESTMENT OUTCOMES ARE
      HYPOTHETICAL IN NATURE AND DO NOT REFLECT ACTUAL INVESTMENT RESULTS OR A GUARANTEE OF FUTURE RESULTS. YOU ALONE ARE RESPONSIBLE FOR EVALUATING THE MERITS AND RISKS ASSOCIATED WITH THE USE OF
      CRYPTOCURRENCY TRADING ON PHEMEX.COM. WE ADVISE YOU, TO THE EXTENT NECESSARY, TO CONSULT AN APPROPRIATE FINANCIAL ADVISER, ACCOUNTANT, LAWYER, OR TAX PROFESSIONAL PRIOR TO ENGAGING IN
      CRYPTOCURRENCY TRADING.`)),
        (Fa = o()),
        (Ne = l("div")),
        (x =
          N(`WE STRONGLY SUGGEST THAT YOU TAKE THE TIME TO MAKE AN INFORMED DECISION WHETHER TO ENGAGE IN CRYPTOCURRENCY TRANSACTIONS AND REASONABLY ALLOCATE DIGITAL ASSETS ACCORDING TO YOUR OWN FINANCIAL
      SITUATION.`)),
        (za = o()),
        (we = l("div")),
        (ka = N(
          "THE TERMS USED IN THIS PHEMEX RISK WARNING SHALL HAVE THE SAME MEANINGS AS IN THE PHEMEX TERMS OF USE EXCEPT WHERE STATED OTHERWISE."
        )),
        this.h();
    },
    l(_) {
      T = E(_, "DIV", { class: !0 });
      var G = r(T);
      (I = n(
        G,
        `BY CONTINUING TO USE PHEMEX.COM YOU HEREBY ACKNOWLEDGE THAT YOU HAVE ACCEPTED THE RISKS DISCLOSED UNDER THIS PHEMEX RISK WARNING. PHEMEX RESERVES THE RIGHT TO MODIFY ANY OF THE TERMS OF THIS
      PHEMEX RISK WARNING WITHOUT PRIOR NOTICE. IF ANY OF THE TERMS HEREUNDER ARE UNACCEPTABLE TO YOU, YOU SHOULD NOT USE PHEMEX.COM. CRYPTOCURRENCY TRADING IS HIGH-RISK AND SPECULATIVE, IT IS
      IMPORTANT THAT YOU UNDERSTAND THE RISKS BEFORE YOU START TRADING.`
      )),
        G.forEach(t),
        (O = R(_)),
        (f = E(_, "DIV", { class: !0 }));
      var ae = r(f);
      (A = n(
        ae,
        "THE RISKS OF INVESTING WITH PHEMEX.COM INCLUDE, BUT ARE NOT LIMITED TO, THE FOLLOWING:"
      )),
        ae.forEach(t),
        (i = R(_)),
        (c = E(_, "DIV", { class: !0 }));
      var ie = r(c);
      S = E(ie, "DIV", { class: !0 });
      var ot = r(S);
      L = E(ot, "DIV", {});
      var Ca = r(L);
      M = E(Ca, "DIV", {});
      var Rt = r(M);
      (W = n(Rt, "1. PRICE RISKS:")),
        Rt.forEach(t),
        (b = R(Ca)),
        (K = E(Ca, "DIV", {}));
      var La = r(K);
      (Re = n(
        La,
        `PRICES CAN AND DO FLUCTUATE ON ANY GIVEN DAY. THIS IS ESPECIALLY TRUE FOR CRYPTOCURRENCY TRADING – UNEXPECTED CHANGES IN MARKET SENTIMENT CAN LEAD TO SHARP AND SUDDEN MOVEMENT IN PRICE. IT
            IS NOT UNCOMMON FOR THE VALUE OF CRYPTOCURRENCIES TO QUICKLY DROP BY HUNDREDS, IF NOT THOUSANDS OF DOLLARS.`
      )),
        La.forEach(t),
        Ca.forEach(t),
        ot.forEach(t),
        (w = R(ie)),
        (Y = E(ie, "DIV", { class: !0 }));
      var ue = r(Y);
      k = E(ue, "DIV", {});
      var Za = r(k);
      se = E(Za, "DIV", {});
      var Nt = r(se);
      (ee = n(Nt, "2. REGULATORY RISKS:")),
        Nt.forEach(t),
        (Ce = R(Za)),
        (C = E(Za, "DIV", {}));
      var xa = r(C);
      (U = n(
        xa,
        `CRYPTOCURRENCY TRANSACTIONS MAY FACE POLICY REGULATORY RISKS IN CERTAIN JURISDICTIONS AND MAY BE SUSPENDED OR PROHIBITED AT ANY TIME. THEREFORE, WE ADVISE YOU MAKE A CAREFUL JUDGMENT
            BEFORE TRADING AND TAKE THE TIME TO UNDERSTAND THE POLICY REGULATIONS OF YOUR TRADING REGION AND EVALUATE THE ECONOMIC RISK OF LOSING THE ENTIRE INVESTMENT.`
      )),
        xa.forEach(t),
        Za.forEach(t),
        ue.forEach(t),
        (P = R(ie)),
        (F = E(ie, "DIV", { class: !0 }));
      var nt = r(F);
      fe = E(nt, "DIV", {});
      var ye = r(fe);
      Le = E(ye, "DIV", {});
      var ne = r(Le);
      (Ta = n(ne, "3. TAX RISKS:")),
        ne.forEach(t),
        (m = R(ye)),
        (Te = E(ye, "DIV", {}));
      var xt = r(Te);
      (y = n(
        xt,
        `CRYPTOCURRENCY TRADING MAY BE SUBJECT TO TAXATION. YOU ARE SOLELY RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING ANY AND ALL TAXES TO THE APPROPRIATE
            TAX AUTHORITIES IN ANY SUCH JURISDICTION(S) IN WHICH YOU MAY BE LIABLE TO PAY TAX. PHEMEX SHALL NOT BE RESPONSIBLE FOR WITHHOLDING, COLLECTING, REPORTING, PAYING, SETTLING AND/OR REMITTING
            ANY TAXES (INCLUDING, BUT NOT LIMITED TO, INCOME, CAPITAL GAINS, SALES, VALUE ADDED OR SIMILAR TAX) WHICH MAY ARISE FROM YOUR PARTICIPATION IN THE CRYPTOCURRENCY TRADING.`
      )),
        xt.forEach(t),
        ye.forEach(t),
        nt.forEach(t),
        (Tt = R(ie)),
        (Ia = E(ie, "DIV", { class: !0 }));
      var St = r(Ia);
      We = E(St, "DIV", {});
      var va = r(We);
      ve = E(va, "DIV", {});
      var ft = r(ve);
      (Ie = n(ft, "4. REGION LIMITATION RISKS:")),
        ft.forEach(t),
        (It = R(va)),
        (da = E(va, "DIV", {}));
      var ga = r(da);
      (Xa = n(
        ga,
        `PHEMEX CANNOT AND DOES NOT PROVIDE SERVICES TO COUNTRIES OR TERRITORIES WHERE CRYPTOCURRENCY TRADING ACTIVITIES ARE SPECIALLY LICENSED, ACCREDITED, OR REGULATED IN OTHER WAYS. YOU SHALL
            CHECK THE APPLICABLE LAWS IN YOUR REGION AND BE FULLY RESPONSIBLE FOR ANY NEGATIVE IMPACT THAT MAY ARISE FROM YOUR RESIDENT COUNTRY’S REGULATIONS. IF YOU ARE TRAVELLING TO ANY SUCH
            COUNTRIES, YOU ACKNOWLEDGE THAT OUR SERVICES MAY BE UNAVAILABLE AND/OR BLOCKED.`
      )),
        ga.forEach(t),
        va.forEach(t),
        St.forEach(t),
        (Ua = R(ie)),
        (ce = E(ie, "DIV", { class: !0 }));
      var te = r(ce);
      X = E(te, "DIV", {});
      var Va = r(X);
      Ma = E(Va, "DIV", {});
      var et = r(Ma);
      (qa = n(et, "5. RISKS OF CHANGE OR TERMINATION OF SERVICE:")),
        et.forEach(t),
        (Ha = R(Va)),
        (ua = E(Va, "DIV", {}));
      var ct = r(ua);
      (Aa = n(
        ct,
        `PLEASE NOTE THAT PHEMEX IS IN THE PROCESS OF UNDERTAKING A LEGAL AND REGULATORY ANALYSIS OF BITCOIN TRADING WITH MARGIN. FOLLOWING THE CONCLUSION OF THIS ANALYSIS, PHEMEX MAY DECIDE TO
            AMEND THE INTENDED FUNCTIONALITY IN ORDER TO ENSURE COMPLIANCE WITH ANY LEGAL OR REGULATORY REQUIREMENTS TO WHICH PHEMEX IS SUBJECT. WE SHALL PUBLISH A NOTICE ON OUR WEBSITE OF ANY CHANGES
            OR MODIFICATIONS TO THE FUNCTIONALITY AND IT IS YOUR RESPONSIBILITY TO REGULARLY CHECK OUR WEBSITE FOR ANY SUCH NOTICES. ON THE CONCLUSION OF THIS ANALYSIS, WE WILL DECIDE WHETHER OR NOT
            TO CHANGE THE FUNCTIONALITY OF THE WEBSITE.`
      )),
        ct.forEach(t),
        Va.forEach(t),
        te.forEach(t),
        (ge = R(ie)),
        (_a = E(ie, "DIV", { class: !0 }));
      var ha = r(_a);
      Ke = E(ha, "DIV", {});
      var le = r(Ke);
      ia = E(le, "DIV", {});
      var el = r(ia);
      (wa = n(el, "6. RISKS OF CRYPTOCURRENCY CONTRACT TRADING:")),
        el.forEach(t),
        (Oa = R(le)),
        (z = E(le, "DIV", {}));
      var dt = r(z);
      (At = n(
        dt,
        `RISKS OF CRYPTOCURRENCY DERIVATIVE CONTRACT TRADING: TRADING DERIVATIVE CONTRACTS POSES ADDITIONAL RISKS NOT FOUND WITH TRADITIONAL CURRENCIES. CRYPTOCURRENCIES ARE ASSOCIATED WITH
            SUBSTANTIAL PRICE MOVEMENTS, HIGHER MARKET VOLATILITY, AND MORE CHARGES OR FEES. THESE FACTORS CAN LEAD TO INCREASED GAPPING OR SLIPPAGE COSTS.`
      )),
        dt.forEach(t),
        le.forEach(t),
        ha.forEach(t),
        ie.forEach(t),
        (Ya = R(_)),
        (he = E(_, "DIV", { class: !0 }));
      var at = r(he);
      (ya = n(
        at,
        `CONTRACT TRADING OFTEN EMPLOYS LEVERAGE, WHICH INCREASES EXPOSURE TO BOTH PROFITS AND LOSSES. IF THE MARKET MOVES IN A DIRECTION THAT OPPOSES YOUR POSITION, YOU WILL EXPERIENCE A RAPID AND
      SIGNIFICANT LOSS. IT IS YOUR RESPONSIBILITY TO SET A STOP LOSS INSTRUCTION TO MITIGATE YOUR EXPOSURE AND TO AVOID FORCED LIQUIDATIONS. IN THE CASE OF A LIQUIDATION YOU WILL BEAR ALL THE LOSSES.
      PLEASE NOTE THAT ONCE AN ORDER IS SUBMITTED AND FILED BY OUR TRADING PLATFORM, IT IS FINAL AND IRREVOCABLE. YOU MUST ACCEPT ALL RISKS AND CONSEQUENCES OF YOUR TRADES.`
      )),
        at.forEach(t),
        (Xe = R(_)),
        (q = E(_, "DIV", { class: !0 }));
      var ut = r(q);
      (it = n(
        ut,
        "THE ABOVE IS A NON-EXHAUSTIVE LIST. TAKING ALL OF THE ABOVE INTO CONSIDERATION, PRIOR TO USING PHEMEX.COM FOR CRYPTOCURRENCY TRADING, YOU PROMISE THAT YOU:"
      )),
        ut.forEach(t),
        (ma = R(_)),
        ($ = E(_, "DIV", { class: !0 }));
      var Oe = r($);
      oa = E(Oe, "DIV", { class: !0 });
      var Se = r(oa);
      De = E(Se, "DIV", {});
      var al = r(De);
      (Ae = n(
        al,
        `1. ARE OF AN AGE OF MAJORITY (AT LEAST 18 YEARS OF AGE), MEET ALL ELIGIBILITY AND RESIDENCY REQUIREMENTS, ARE FULLY ABLE AND LEGALLY COMPETENT TO USE PHEMEX.COM AND THUS ENTER INTO AN
          AGREEMENT WITH PHEMEX - ENSURING THAT IN DOING SO YOU WILL NOT VIOLATE ANY OTHER AGREEMENT TO WHICH YOU ARE A PARTY;`
      )),
        al.forEach(t),
        Se.forEach(t),
        (Ot = R(Oe)),
        (Ra = E(Oe, "DIV", { class: !0 }));
      var _t = r(Ra);
      Na = E(_t, "DIV", {});
      var tt = r(Na);
      ($a = n(
        tt,
        `2. HAVE THE NECESSARY AND RELEVANT EXPERIENCE AND KNOWLEDGE TO DEAL WITH AND MANAGE CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, WITH A FULL UNDERSTANDING OF THEIR FRAMEWORKS AND ARE AWARE
          OF ALL THE MERITS, RISKS AND ANY RESTRICTIONS ASSOCIATED WITH CRYPTOCURRENCIES AND BLOCKCHAIN-BASED SYSTEMS, BEING SOLELY RESPONSIBLE FOR ANY EVALUATIONS BASED ON SUCH KNOWLEDGE;`
      )),
        tt.forEach(t),
        _t.forEach(t),
        (Pe = R(Oe)),
        (de = E(Oe, "DIV", { class: !0 }));
      var Ct = r(de);
      Ga = E(Ct, "DIV", {});
      var Da = r(Ga);
      (Ja = n(
        Da,
        "3. ARE NOT A FOREIGN OR DOMESTIC POLITICALLY EXPOSED PERSON (PEP);"
      )),
        Da.forEach(t),
        Ct.forEach(t),
        (Qa = R(Oe)),
        (H = E(Oe, "DIV", { class: !0 }));
      var oe = r(H);
      Ue = E(oe, "DIV", {});
      var tl = r(Ue);
      (Z = n(
        tl,
        "4. WILL NOT BE USING PHEMEX.COM FOR ANY ILLEGAL ACTIVITY, INCLUDING BUT NOT LIMITED TO, MONEY LAUNDERING AND THE FINANCING OF TERRORISM."
      )),
        tl.forEach(t),
        oe.forEach(t),
        Oe.forEach(t),
        (ja = R(_)),
        (qe = E(_, "DIV", { class: !0 }));
      var Lt = r(qe);
      (pa = n(
        Lt,
        `PLEASE NOTE THAT ALL DATA ANALYSIS, PROJECTIONS, CONTENT, RESEARCH, TOOLS, AND COIN SYMBOLS ARE FOR EDUCATIONAL AND ILLUSTRATIVE PURPOSES ONLY. THEY DO NOT IMPLY OUR RECOMMENDATION OR
      SOLICITATION TO BUY OR SELL A PARTICULAR ASSET OR TO ENGAGE IN ANY PARTICULAR INVESTMENT STRATEGY. PROJECTIONS OR OTHER INFORMATION REGARDING THE LIKELIHOOD OF VARIOUS INVESTMENT OUTCOMES ARE
      HYPOTHETICAL IN NATURE AND DO NOT REFLECT ACTUAL INVESTMENT RESULTS OR A GUARANTEE OF FUTURE RESULTS. YOU ALONE ARE RESPONSIBLE FOR EVALUATING THE MERITS AND RISKS ASSOCIATED WITH THE USE OF
      CRYPTOCURRENCY TRADING ON PHEMEX.COM. WE ADVISE YOU, TO THE EXTENT NECESSARY, TO CONSULT AN APPROPRIATE FINANCIAL ADVISER, ACCOUNTANT, LAWYER, OR TAX PROFESSIONAL PRIOR TO ENGAGING IN
      CRYPTOCURRENCY TRADING.`
      )),
        Lt.forEach(t),
        (Fa = R(_)),
        (Ne = E(_, "DIV", { class: !0 }));
      var vt = r(Ne);
      (x = n(
        vt,
        `WE STRONGLY SUGGEST THAT YOU TAKE THE TIME TO MAKE AN INFORMED DECISION WHETHER TO ENGAGE IN CRYPTOCURRENCY TRANSACTIONS AND REASONABLY ALLOCATE DIGITAL ASSETS ACCORDING TO YOUR OWN FINANCIAL
      SITUATION.`
      )),
        vt.forEach(t),
        (za = R(_)),
        (we = E(_, "DIV", { class: !0 }));
      var $e = r(we);
      (ka = n(
        $e,
        "THE TERMS USED IN THIS PHEMEX RISK WARNING SHALL HAVE THE SAME MEANINGS AS IN THE PHEMEX TERMS OF USE EXCEPT WHERE STATED OTHERWISE."
      )),
        $e.forEach(t),
        this.h();
    },
    h() {
      e(T, "class", "mt12 f14"),
        e(f, "class", "mt12 f14"),
        e(S, "class", "mt12 f14 df"),
        e(Y, "class", "mt12 f14 df"),
        e(F, "class", "mt12 f14 df"),
        e(Ia, "class", "mt12 f14 df"),
        e(ce, "class", "mt12 f14 df"),
        e(_a, "class", "mt12 f14 df"),
        e(c, "class", "ol"),
        e(he, "class", "mt12 f14"),
        e(q, "class", "mt12 f14"),
        e(oa, "class", "mt12 f14 df"),
        e(Ra, "class", "mt12 f14 df"),
        e(de, "class", "mt12 f14 df"),
        e(H, "class", "mt12 f14 df"),
        e($, "class", "ol"),
        e(qe, "class", "mt12 f14"),
        e(Ne, "class", "mt12 f14"),
        e(we, "class", "mt12 f14");
    },
    m(_, G) {
      p(_, T, G),
        a(T, I),
        p(_, O, G),
        p(_, f, G),
        a(f, A),
        p(_, i, G),
        p(_, c, G),
        a(c, S),
        a(S, L),
        a(L, M),
        a(M, W),
        a(L, b),
        a(L, K),
        a(K, Re),
        a(c, w),
        a(c, Y),
        a(Y, k),
        a(k, se),
        a(se, ee),
        a(k, Ce),
        a(k, C),
        a(C, U),
        a(c, P),
        a(c, F),
        a(F, fe),
        a(fe, Le),
        a(Le, Ta),
        a(fe, m),
        a(fe, Te),
        a(Te, y),
        a(c, Tt),
        a(c, Ia),
        a(Ia, We),
        a(We, ve),
        a(ve, Ie),
        a(We, It),
        a(We, da),
        a(da, Xa),
        a(c, Ua),
        a(c, ce),
        a(ce, X),
        a(X, Ma),
        a(Ma, qa),
        a(X, Ha),
        a(X, ua),
        a(ua, Aa),
        a(c, ge),
        a(c, _a),
        a(_a, Ke),
        a(Ke, ia),
        a(ia, wa),
        a(Ke, Oa),
        a(Ke, z),
        a(z, At),
        p(_, Ya, G),
        p(_, he, G),
        a(he, ya),
        p(_, Xe, G),
        p(_, q, G),
        a(q, it),
        p(_, ma, G),
        p(_, $, G),
        a($, oa),
        a(oa, De),
        a(De, Ae),
        a($, Ot),
        a($, Ra),
        a(Ra, Na),
        a(Na, $a),
        a($, Pe),
        a($, de),
        a(de, Ga),
        a(Ga, Ja),
        a($, Qa),
        a($, H),
        a(H, Ue),
        a(Ue, Z),
        p(_, ja, G),
        p(_, qe, G),
        a(qe, pa),
        p(_, Fa, G),
        p(_, Ne, G),
        a(Ne, x),
        p(_, za, G),
        p(_, we, G),
        a(we, ka);
    },
    d(_) {
      _ && t(T),
        _ && t(O),
        _ && t(f),
        _ && t(i),
        _ && t(c),
        _ && t(Ya),
        _ && t(he),
        _ && t(Xe),
        _ && t(q),
        _ && t(ma),
        _ && t($),
        _ && t(ja),
        _ && t(qe),
        _ && t(Fa),
        _ && t(Ne),
        _ && t(za),
        _ && t(we);
    },
  };
}
function XT(s) {
  let T,
    I,
    O,
    f,
    A,
    i,
    c,
    S,
    L,
    M,
    W,
    b,
    K,
    Re,
    w,
    Y,
    k,
    se,
    ee,
    Ce,
    C = s[0] && ET();
  return {
    c() {
      (T = l("div")),
        (I = l("div")),
        (O = l("span")),
        (f = N("PHEMEX RISK WARNING")),
        (A = l("span")),
        (i = l("span")),
        (c = N("© 2018-2024 phemex.com. All rights reserved")),
        (S = o()),
        (L = l("div")),
        (M = N("INVESTING INHERENTLY INVOLVES RISKS, DO SO AT YOUR OWN RISK.")),
        (W = o()),
        (b = l("div")),
        (K =
          N(`THIS PHEMEX RISK WARNING ILLUSTRATES POTENTIAL RISKS THAT YOU MAY FACE WHILE USING PHEMEX.COM AND ALL OF ITS ASSOCIATED SERVICES, AND AIMS TO HELP YOU EVALUATE AND DETERMINE YOUR OWN CAPABILITIES.
    PLEASE MAKE SURE THAT YOU CAREFULLY READ AND FULLY UNDERSTAND THE TERMS, ARTICLES AND/OR CONDITIONS OF THIS PHEMEX RISK WARNING.`)),
        (Re = o()),
        C && C.c(),
        (w = o()),
        (Y = l("div")),
        (k = l("i")),
        (se = N("")),
        this.h();
    },
    l(U) {
      T = E(U, "DIV", { class: !0 });
      var P = r(T);
      I = E(P, "DIV", { class: !0 });
      var F = r(I);
      O = E(F, "SPAN", { class: !0 });
      var fe = r(O);
      (f = n(fe, "PHEMEX RISK WARNING")),
        fe.forEach(t),
        (A = E(F, "SPAN", { class: !0 })),
        r(A).forEach(t),
        (i = E(F, "SPAN", { class: !0 }));
      var Le = r(i);
      (c = n(Le, "© 2018-2024 phemex.com. All rights reserved")),
        Le.forEach(t),
        F.forEach(t),
        (S = R(P)),
        (L = E(P, "DIV", { class: !0 }));
      var Ta = r(L);
      (M = n(
        Ta,
        "INVESTING INHERENTLY INVOLVES RISKS, DO SO AT YOUR OWN RISK."
      )),
        Ta.forEach(t),
        (W = R(P)),
        (b = E(P, "DIV", { class: !0 }));
      var m = r(b);
      (K = n(
        m,
        `THIS PHEMEX RISK WARNING ILLUSTRATES POTENTIAL RISKS THAT YOU MAY FACE WHILE USING PHEMEX.COM AND ALL OF ITS ASSOCIATED SERVICES, AND AIMS TO HELP YOU EVALUATE AND DETERMINE YOUR OWN CAPABILITIES.
    PLEASE MAKE SURE THAT YOU CAREFULLY READ AND FULLY UNDERSTAND THE TERMS, ARTICLES AND/OR CONDITIONS OF THIS PHEMEX RISK WARNING.`
      )),
        m.forEach(t),
        (Re = R(P)),
        C && C.l(P),
        (w = R(P)),
        (Y = E(P, "DIV", { class: !0 }));
      var Te = r(Y);
      k = E(Te, "I", { class: !0 });
      var y = r(k);
      (se = n(y, "")), y.forEach(t), Te.forEach(t), P.forEach(t), this.h();
    },
    h() {
      e(O, "class", "f18"),
        e(A, "class", "xs:dn line f1 svelte-g5kiyy"),
        e(i, "class", "xs:dn"),
        e(I, "class", "df aic"),
        e(L, "class", "mt20 f14"),
        e(b, "class", "mt12 f14"),
        e(k, "class", "iconfont svelte-g5kiyy"),
        Zs(k, "animation", s[0]),
        e(Y, "class", "df aic jcc cp lh30 arrow svelte-g5kiyy"),
        e(T, "class", "wrap lh24 T4 svelte-g5kiyy");
    },
    m(U, P) {
      p(U, T, P),
        a(T, I),
        a(I, O),
        a(O, f),
        a(I, A),
        a(I, i),
        a(i, c),
        a(T, S),
        a(T, L),
        a(L, M),
        a(T, W),
        a(T, b),
        a(b, K),
        a(T, Re),
        C && C.m(T, null),
        a(T, w),
        a(T, Y),
        a(Y, k),
        a(k, se),
        ee || ((Ce = sT(Y, "click", s[1])), (ee = !0));
    },
    p(U, [P]) {
      U[0] ? C || ((C = ET()), C.c(), C.m(T, w)) : C && (C.d(1), (C = null)),
        P & 1 && Zs(k, "animation", U[0]);
    },
    i: kE,
    o: kE,
    d(U) {
      U && t(T), C && C.d(), (ee = !1), Ce();
    },
  };
}
function qT(s, T, I) {
  let O = !1;
  function f() {
    I(0, (O = !O));
  }
  return [O, f];
}
class wT extends VE {
  constructor(T) {
    super(), BE(this, T, qT, XT, bE, {});
  }
}
const ll = {
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
  h = {
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
function rT(s) {
  let T,
    I,
    O = s[8](h.MarginTrading) + "",
    f;
  return {
    c() {
      (T = l("li")), (I = l("a")), (f = N(O)), this.h();
    },
    l(A) {
      T = E(A, "LI", { class: !0 });
      var i = r(T);
      I = E(i, "A", {
        class: !0,
        "data-gac": !0,
        "data-gaa": !0,
        "data-gal": !0,
        href: !0,
        target: !0,
      });
      var c = r(I);
      (f = n(c, O)), c.forEach(t), i.forEach(t), this.h();
    },
    h() {
      e(I, "class", "ga svelte-10fxq71"),
        e(I, "data-gac", "footer.link"),
        e(I, "data-gaa", "link_click"),
        e(I, "data-gal", "margin trading"),
        e(I, "href", d.PHEMEX_SPOT_MARGIN_TRADE),
        e(I, "target", "_self"),
        e(T, "class", "svelte-10fxq71");
    },
    m(A, i) {
      p(A, T, i), a(T, I), a(I, f);
    },
    p: kE,
    d(A) {
      A && t(T);
    },
  };
}
function yT(s) {
  let T,
    I = s[8](ll.ListingApplication) + "",
    O,
    f;
  return {
    c() {
      (T = l("a")), (O = N(I)), this.h();
    },
    l(A) {
      T = E(A, "A", { class: !0, href: !0 });
      var i = r(T);
      (O = n(i, I)), i.forEach(t), this.h();
    },
    h() {
      e(T, "class", "ga svelte-10fxq71"),
        e(T, "href", (f = s[3](d.LISTING_APPLICATION, "CMS")));
    },
    m(A, i) {
      p(A, T, i), a(T, O);
    },
    p(A, i) {
      i & 8 &&
        f !== (f = A[3](d.LISTING_APPLICATION, "CMS")) &&
        e(T, "href", f);
    },
    d(A) {
      A && t(T);
    },
  };
}
function $T(s) {
  let T,
    I = s[8](ll.ListingApplication) + "",
    O,
    f;
  return {
    c() {
      (T = l("a")), (O = N(I)), this.h();
    },
    l(A) {
      T = E(A, "A", { class: !0, href: !0 });
      var i = r(T);
      (O = n(i, I)), i.forEach(t), this.h();
    },
    h() {
      e(T, "class", "ga svelte-10fxq71"),
        e(T, "href", (f = s[3](d.LISTING_APPLICATION_DE, "CMS")));
    },
    m(A, i) {
      p(A, T, i), a(T, O);
    },
    p(A, i) {
      i & 8 &&
        f !== (f = A[3](d.LISTING_APPLICATION_DE, "CMS")) &&
        e(T, "href", f);
    },
    d(A) {
      A && t(T);
    },
  };
}
function JT(s) {
  let T,
    I = s[8](ll.ListingSuggestions) + "",
    O,
    f;
  return {
    c() {
      (T = l("a")), (O = N(I)), this.h();
    },
    l(A) {
      T = E(A, "A", { class: !0, href: !0 });
      var i = r(T);
      (O = n(i, I)), i.forEach(t), this.h();
    },
    h() {
      e(T, "class", "ga svelte-10fxq71"),
        e(T, "href", (f = s[3](d.LISTING_SUGGESTIONS, "CMS")));
    },
    m(A, i) {
      p(A, T, i), a(T, O);
    },
    p(A, i) {
      i & 8 &&
        f !== (f = A[3](d.LISTING_SUGGESTIONS, "CMS")) &&
        e(T, "href", f);
    },
    d(A) {
      A && t(T);
    },
  };
}
function QT(s) {
  let T,
    I = s[8](ll.ListingSuggestions) + "",
    O,
    f;
  return {
    c() {
      (T = l("a")), (O = N(I)), this.h();
    },
    l(A) {
      T = E(A, "A", { class: !0, href: !0 });
      var i = r(T);
      (O = n(i, I)), i.forEach(t), this.h();
    },
    h() {
      e(T, "class", "ga svelte-10fxq71"),
        e(T, "href", (f = s[3](d.LISTING_SUGGESTIONS_DE, "CMS")));
    },
    m(A, i) {
      p(A, T, i), a(T, O);
    },
    p(A, i) {
      i & 8 &&
        f !== (f = A[3](d.LISTING_SUGGESTIONS_DE, "CMS")) &&
        e(T, "href", f);
    },
    d(A) {
      A && t(T);
    },
  };
}
function jT(s) {
  let T,
    I,
    O,
    f,
    A,
    i,
    c,
    S,
    L = s[8](h.PhemexProfessional) + "",
    M,
    W,
    b,
    K,
    Re,
    w,
    Y,
    k,
    se,
    ee,
    Ce,
    C,
    U,
    P,
    F,
    fe = s[8](h.Products) + "",
    Le,
    Ta,
    m,
    Te,
    y,
    Tt = s[8](h.Contract) + "",
    Ia,
    We,
    ve,
    Ie,
    It = s[8](h.Spot) + "",
    da,
    Xa,
    Ua,
    ce,
    X,
    Ma = s[8](h.BuyCrypto) + "",
    qa,
    Ha,
    ua,
    Aa,
    ge,
    _a = s[8](h.CryptoConverter) + "",
    Ke,
    ia,
    wa,
    Oa,
    z,
    At = s[8](h.EarnCrypto) + "",
    Ya,
    he,
    ya,
    Xe,
    q,
    it = s[8](h.Launchpool) + "",
    ma,
    $,
    oa,
    De,
    Ae,
    Ot = s[8](h.TradingBots) + "",
    Ra,
    Na,
    $a,
    Pe,
    de,
    Ga = s[8](h.Support) + "",
    Ja,
    Qa,
    H,
    Ue,
    Z,
    ja = s[8](h.HelpCenter) + "",
    qe,
    pa,
    Fa,
    Ne,
    x,
    za = s[8](h.Academy) + "",
    we,
    ka,
    _,
    G,
    ae,
    ie = s[8](h.LearnAndEarn) + "",
    ot,
    Ca,
    Rt,
    La,
    ue,
    Za = s[8](h.CryptoBlog) + "",
    Nt,
    xa,
    nt,
    ye,
    ne,
    xt = s[8](h.FeesConditions) + "",
    St,
    va,
    ft,
    ga,
    te,
    Va,
    et,
    ct,
    ha,
    le,
    el = s[8](h.ContractReferences) + "",
    dt,
    at,
    ut,
    Oe,
    Se,
    al = s[8](h.OfficialVerification) + "",
    _t,
    tt,
    Ct,
    Da,
    oe,
    tl = s[8](h.Feedback) + "",
    Lt,
    vt,
    $e,
    gt,
    WE = s[8](h.Services) + "",
    Ml,
    Hl,
    V,
    ht,
    Me,
    KE = s[8](h.WelcomeBonus) + "",
    Yl,
    El,
    ml,
    Dt,
    Je,
    XE = s[8](h.Referral) + "",
    Gl,
    rl,
    pl,
    Pt,
    Qe,
    qE = s[8](h.Portal) + "",
    Fl,
    sl,
    kl,
    Ut,
    je,
    wE = s[8](h.VIPProgram) + "",
    Vl,
    Bl,
    Mt,
    ze,
    yE = s[8](h.AllStarProgram) + "",
    bl,
    Tl,
    Wl,
    Ht,
    Ze,
    $E = s[8](ll.InstitutionClientProgram) + "",
    Kl,
    Il,
    Xl,
    lt,
    ql,
    Et,
    wl,
    Yt,
    rt,
    JE = s[8](h.SimulatedTrading) + "",
    yl,
    $l,
    Ba,
    mt,
    QE = s[8](h.Company) + "",
    Jl,
    Ql,
    B,
    Gt,
    xe,
    jE = s[8](h.AboutUs) + "",
    jl,
    Al,
    zl,
    pt,
    ea,
    zE = s[8](h.Brandsite) + "",
    Zl,
    il,
    xl,
    Ft,
    He,
    ZE = s[8](h.Careers) + "",
    eE,
    aE,
    kt,
    aa,
    xE = s[8](h.StudentFoundation) + "",
    tE,
    Ol,
    lE,
    Vt,
    Ye,
    er = s[8](h.Announcements) + "",
    EE,
    ol,
    rE,
    Bt,
    ta,
    ar = s[8](h.Security) + "",
    sE,
    Rl,
    TE,
    bt,
    na,
    tr = s[8](h.PrivacyPolicy) + "",
    IE,
    Nl,
    AE,
    Wt,
    _e,
    lr = s[8](h.TermsUse) + "",
    iE,
    nl,
    OE,
    Kt,
    la,
    Er = s[8](h.SiteMap) + "",
    oE,
    Sl,
    RE,
    me,
    Xt,
    rr = s[8](h.BuyMoreCryptos) + "",
    NE,
    nE,
    Ea,
    qt,
    Ge,
    sr = s[8](h.BuyBitcoinBtn) + "",
    SE,
    fl,
    fE,
    wt,
    pe,
    Tr = s[8](h.BuyDogecoin) + "",
    cE,
    cl,
    dE,
    yt,
    Fe,
    Ir = s[8](h.BuyLitecoin) + "",
    uE,
    dl,
    _E,
    $t,
    ke,
    Ar = s[8](h.BuyEthereumBtn) + "",
    CE,
    ul,
    LE,
    Jt,
    ir = s[8](h.Partners) + "",
    vE,
    gE,
    Sa,
    Qt,
    Ve,
    hE,
    DE,
    jt,
    Be,
    PE,
    UE,
    zt,
    be,
    ME,
    HE,
    st,
    D,
    YE,
    Or;
  K = new KT({});
  function TT(u) {
    s[13](u);
  }
  let or = { type: "border", white: !0, options: s[4] };
  s[2] !== void 0 && (or.value = s[2]),
    (Y = new nT({ props: or })),
    ST.push(() => fT(Y, "value", TT)),
    Y.$on("change", s[10]);
  let Ee = s[5] && rT(s);
  function Rr(u, g) {
    return u[0] === "de" ? $T : yT;
  }
  let _l = Rr(s),
    ra = _l(s);
  function Nr(u, g) {
    return u[0] === "de" ? QT : JT;
  }
  let Cl = Nr(s),
    sa = Cl(s);
  return (
    (st = new wT({})),
    {
      c() {
        (T = l("footer")),
          (I = l("div")),
          (O = l("div")),
          (f = l("div")),
          (A = l("img")),
          (c = o()),
          (S = l("div")),
          (M = N(L)),
          (W = o()),
          (b = l("div")),
          mE(K.$$.fragment),
          (Re = o()),
          (w = l("div")),
          mE(Y.$$.fragment),
          (se = o()),
          (ee = l("div")),
          (Ce = N("© Copyright 2019 Phemex All rights reserved")),
          (C = o()),
          (U = l("div")),
          (P = l("div")),
          (F = l("div")),
          (Le = N(fe)),
          (Ta = o()),
          (m = l("ul")),
          (Te = l("li")),
          (y = l("a")),
          (Ia = N(Tt)),
          (We = o()),
          (ve = l("li")),
          (Ie = l("a")),
          (da = N(It)),
          (Xa = o()),
          Ee && Ee.c(),
          (Ua = o()),
          (ce = l("li")),
          (X = l("a")),
          (qa = N(Ma)),
          (ua = o()),
          (Aa = l("li")),
          (ge = l("a")),
          (Ke = N(_a)),
          (wa = o()),
          (Oa = l("li")),
          (z = l("a")),
          (Ya = N(At)),
          (ya = o()),
          (Xe = l("li")),
          (q = l("a")),
          (ma = N(it)),
          (oa = o()),
          (De = l("li")),
          (Ae = l("a")),
          (Ra = N(Ot)),
          ($a = o()),
          (Pe = l("div")),
          (de = l("div")),
          (Ja = N(Ga)),
          (Qa = o()),
          (H = l("ul")),
          (Ue = l("li")),
          (Z = l("a")),
          (qe = N(ja)),
          (Fa = o()),
          (Ne = l("li")),
          (x = l("a")),
          (we = N(za)),
          (_ = o()),
          (G = l("li")),
          (ae = l("a")),
          (ot = N(ie)),
          (Rt = o()),
          (La = l("li")),
          (ue = l("a")),
          (Nt = N(Za)),
          (nt = o()),
          (ye = l("li")),
          (ne = l("a")),
          (St = N(xt)),
          (ft = o()),
          (ga = l("li")),
          (te = l("a")),
          (Va = N("BitYaris API")),
          (ct = o()),
          (ha = l("li")),
          (le = l("a")),
          (dt = N(el)),
          (ut = o()),
          (Oe = l("li")),
          (Se = l("a")),
          (_t = N(al)),
          (Ct = o()),
          (Da = l("li")),
          (oe = l("a")),
          (Lt = N(tl)),
          (vt = o()),
          ($e = l("div")),
          (gt = l("div")),
          (Ml = N(WE)),
          (Hl = o()),
          (V = l("ul")),
          (ht = l("li")),
          (Me = l("a")),
          (Yl = N(KE)),
          (ml = o()),
          (Dt = l("li")),
          (Je = l("a")),
          (Gl = N(XE)),
          (pl = o()),
          (Pt = l("li")),
          (Qe = l("a")),
          (Fl = N(qE)),
          (kl = o()),
          (Ut = l("li")),
          (je = l("a")),
          (Vl = N(wE)),
          (Bl = o()),
          (Mt = l("li")),
          (ze = l("a")),
          (bl = N(yE)),
          (Wl = o()),
          (Ht = l("li")),
          (Ze = l("a")),
          (Kl = N($E)),
          (Xl = o()),
          (lt = l("li")),
          ra.c(),
          (ql = o()),
          (Et = l("li")),
          sa.c(),
          (wl = o()),
          (Yt = l("li")),
          (rt = l("a")),
          (yl = N(JE)),
          ($l = o()),
          (Ba = l("div")),
          (mt = l("div")),
          (Jl = N(QE)),
          (Ql = o()),
          (B = l("ul")),
          (Gt = l("li")),
          (xe = l("a")),
          (jl = N(jE)),
          (zl = o()),
          (pt = l("li")),
          (ea = l("a")),
          (Zl = N(zE)),
          (xl = o()),
          (Ft = l("li")),
          (He = l("a")),
          (eE = N(ZE)),
          (aE = o()),
          (kt = l("li")),
          (aa = l("a")),
          (tE = N(xE)),
          (lE = o()),
          (Vt = l("li")),
          (Ye = l("a")),
          (EE = N(er)),
          (rE = o()),
          (Bt = l("li")),
          (ta = l("a")),
          (sE = N(ar)),
          (TE = o()),
          (bt = l("li")),
          (na = l("a")),
          (IE = N(tr)),
          (AE = o()),
          (Wt = l("li")),
          (_e = l("a")),
          (iE = N(lr)),
          (OE = o()),
          (Kt = l("li")),
          (la = l("a")),
          (oE = N(Er)),
          (RE = o()),
          (me = l("div")),
          (Xt = l("div")),
          (NE = N(rr)),
          (nE = o()),
          (Ea = l("ul")),
          (qt = l("li")),
          (Ge = l("a")),
          (SE = N(sr)),
          (fE = o()),
          (wt = l("li")),
          (pe = l("a")),
          (cE = N(Tr)),
          (dE = o()),
          (yt = l("li")),
          (Fe = l("a")),
          (uE = N(Ir)),
          (_E = o()),
          ($t = l("li")),
          (ke = l("a")),
          (CE = N(Ar)),
          (LE = o()),
          (Jt = l("div")),
          (vE = N(ir)),
          (gE = o()),
          (Sa = l("ul")),
          (Qt = l("li")),
          (Ve = l("a")),
          (hE = N("CoinMarketCap")),
          (DE = o()),
          (jt = l("li")),
          (Be = l("a")),
          (PE = N("CoinGecko")),
          (UE = o()),
          (zt = l("li")),
          (be = l("a")),
          (ME = N("Coincodex")),
          (HE = o()),
          mE(st.$$.fragment),
          this.h();
      },
      l(u) {
        T = E(u, "FOOTER", { class: !0 });
        var g = r(T);
        I = E(g, "DIV", { class: !0 });
        var ba = r(I);
        O = E(ba, "DIV", { class: !0 });
        var fa = r(O);
        f = E(fa, "DIV", {});
        var nr = r(f);
        (A = E(nr, "IMG", { width: !0, "data-src": !0, src: !0, alt: !0 })),
          nr.forEach(t),
          (c = R(fa)),
          (S = E(fa, "DIV", { class: !0 }));
        var Sr = r(S);
        (M = n(Sr, L)),
          Sr.forEach(t),
          (W = R(fa)),
          (b = E(fa, "DIV", { class: !0 }));
        var fr = r(b);
        GE(K.$$.fragment, fr),
          fr.forEach(t),
          (Re = R(fa)),
          (w = E(fa, "DIV", { class: !0 }));
        var cr = r(w);
        GE(Y.$$.fragment, cr),
          cr.forEach(t),
          (se = R(fa)),
          (ee = E(fa, "DIV", { class: !0 }));
        var dr = r(ee);
        (Ce = n(dr, "© Copyright 2019 Phemex All rights reserved")),
          dr.forEach(t),
          fa.forEach(t),
          (C = R(ba)),
          (U = E(ba, "DIV", { class: !0 }));
        var ca = r(U);
        P = E(ca, "DIV", { class: !0 });
        var Ll = r(P);
        F = E(Ll, "DIV", { class: !0 });
        var ur = r(F);
        (Le = n(ur, fe)), ur.forEach(t), (Ta = R(Ll)), (m = E(Ll, "UL", {}));
        var re = r(m);
        Te = E(re, "LI", { class: !0 });
        var _r = r(Te);
        y = E(_r, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var Cr = r(y);
        (Ia = n(Cr, Tt)),
          Cr.forEach(t),
          _r.forEach(t),
          (We = R(re)),
          (ve = E(re, "LI", { class: !0 }));
        var Lr = r(ve);
        Ie = E(Lr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var vr = r(Ie);
        (da = n(vr, It)),
          vr.forEach(t),
          Lr.forEach(t),
          (Xa = R(re)),
          Ee && Ee.l(re),
          (Ua = R(re)),
          (ce = E(re, "LI", { class: !0 }));
        var gr = r(ce);
        X = E(gr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var hr = r(X);
        (qa = n(hr, Ma)),
          hr.forEach(t),
          gr.forEach(t),
          (ua = R(re)),
          (Aa = E(re, "LI", { class: !0 }));
        var Dr = r(Aa);
        ge = E(Dr, "A", { class: !0, href: !0 });
        var Pr = r(ge);
        (Ke = n(Pr, _a)),
          Pr.forEach(t),
          Dr.forEach(t),
          (wa = R(re)),
          (Oa = E(re, "LI", { class: !0 }));
        var Ur = r(Oa);
        z = E(Ur, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Mr = r(z);
        (Ya = n(Mr, At)),
          Mr.forEach(t),
          Ur.forEach(t),
          (ya = R(re)),
          (Xe = E(re, "LI", { class: !0 }));
        var Hr = r(Xe);
        q = E(Hr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Yr = r(q);
        (ma = n(Yr, it)),
          Yr.forEach(t),
          Hr.forEach(t),
          (oa = R(re)),
          (De = E(re, "LI", { class: !0 }));
        var mr = r(De);
        Ae = E(mr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Gr = r(Ae);
        (Ra = n(Gr, Ot)),
          Gr.forEach(t),
          mr.forEach(t),
          re.forEach(t),
          Ll.forEach(t),
          ($a = R(ca)),
          (Pe = E(ca, "DIV", { class: !0 }));
        var vl = r(Pe);
        de = E(vl, "DIV", { class: !0 });
        var pr = r(de);
        (Ja = n(pr, Ga)), pr.forEach(t), (Qa = R(vl)), (H = E(vl, "UL", {}));
        var J = r(H);
        Ue = E(J, "LI", { class: !0 });
        var Fr = r(Ue);
        Z = E(Fr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var kr = r(Z);
        (qe = n(kr, ja)),
          kr.forEach(t),
          Fr.forEach(t),
          (Fa = R(J)),
          (Ne = E(J, "LI", { class: !0 }));
        var Vr = r(Ne);
        x = E(Vr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var Br = r(x);
        (we = n(Br, za)),
          Br.forEach(t),
          Vr.forEach(t),
          (_ = R(J)),
          (G = E(J, "LI", { class: !0 }));
        var br = r(G);
        ae = E(br, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var Wr = r(ae);
        (ot = n(Wr, ie)),
          Wr.forEach(t),
          br.forEach(t),
          (Rt = R(J)),
          (La = E(J, "LI", { class: !0 }));
        var Kr = r(La);
        ue = E(Kr, "A", { class: !0, href: !0, target: !0, rel: !0 });
        var Xr = r(ue);
        (Nt = n(Xr, Za)),
          Xr.forEach(t),
          Kr.forEach(t),
          (nt = R(J)),
          (ye = E(J, "LI", { class: !0 }));
        var qr = r(ye);
        ne = E(qr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var wr = r(ne);
        (St = n(wr, xt)),
          wr.forEach(t),
          qr.forEach(t),
          (ft = R(J)),
          (ga = E(J, "LI", { class: !0 }));
        var yr = r(ga);
        te = E(yr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var $r = r(te);
        (Va = n($r, "BitYaris API")),
          $r.forEach(t),
          yr.forEach(t),
          (ct = R(J)),
          (ha = E(J, "LI", { class: !0 }));
        var Jr = r(ha);
        le = E(Jr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Qr = r(le);
        (dt = n(Qr, el)),
          Qr.forEach(t),
          Jr.forEach(t),
          (ut = R(J)),
          (Oe = E(J, "LI", { class: !0 }));
        var jr = r(Oe);
        Se = E(jr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var zr = r(Se);
        (_t = n(zr, al)),
          zr.forEach(t),
          jr.forEach(t),
          (Ct = R(J)),
          (Da = E(J, "LI", { class: !0 }));
        var Zr = r(Da);
        oe = E(Zr, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          rel: !0,
          href: !0,
        });
        var xr = r(oe);
        (Lt = n(xr, tl)),
          xr.forEach(t),
          Zr.forEach(t),
          J.forEach(t),
          vl.forEach(t),
          (vt = R(ca)),
          ($e = E(ca, "DIV", { class: !0 }));
        var gl = r($e);
        gt = E(gl, "DIV", { class: !0 });
        var es = r(gt);
        (Ml = n(es, WE)), es.forEach(t), (Hl = R(gl)), (V = E(gl, "UL", {}));
        var Q = r(V);
        ht = E(Q, "LI", { class: !0 });
        var as = r(ht);
        Me = E(as, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ts = r(Me);
        (Yl = n(ts, KE)),
          ts.forEach(t),
          as.forEach(t),
          (ml = R(Q)),
          (Dt = E(Q, "LI", { class: !0 }));
        var ls = r(Dt);
        Je = E(ls, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Es = r(Je);
        (Gl = n(Es, XE)),
          Es.forEach(t),
          ls.forEach(t),
          (pl = R(Q)),
          (Pt = E(Q, "LI", { class: !0 }));
        var rs = r(Pt);
        Qe = E(rs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ss = r(Qe);
        (Fl = n(ss, qE)),
          ss.forEach(t),
          rs.forEach(t),
          (kl = R(Q)),
          (Ut = E(Q, "LI", { class: !0 }));
        var Ts = r(Ut);
        je = E(Ts, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Is = r(je);
        (Vl = n(Is, wE)),
          Is.forEach(t),
          Ts.forEach(t),
          (Bl = R(Q)),
          (Mt = E(Q, "LI", { class: !0 }));
        var As = r(Mt);
        ze = E(As, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var is = r(ze);
        (bl = n(is, yE)),
          is.forEach(t),
          As.forEach(t),
          (Wl = R(Q)),
          (Ht = E(Q, "LI", { class: !0 }));
        var Os = r(Ht);
        Ze = E(Os, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var os = r(Ze);
        (Kl = n(os, $E)),
          os.forEach(t),
          Os.forEach(t),
          (Xl = R(Q)),
          (lt = E(Q, "LI", { class: !0 }));
        var Rs = r(lt);
        ra.l(Rs), Rs.forEach(t), (ql = R(Q)), (Et = E(Q, "LI", { class: !0 }));
        var Ns = r(Et);
        sa.l(Ns), Ns.forEach(t), (wl = R(Q)), (Yt = E(Q, "LI", { class: !0 }));
        var ns = r(Yt);
        rt = E(ns, "A", { class: !0, href: !0 });
        var Ss = r(rt);
        (yl = n(Ss, JE)),
          Ss.forEach(t),
          ns.forEach(t),
          Q.forEach(t),
          gl.forEach(t),
          ($l = R(ca)),
          (Ba = E(ca, "DIV", { class: !0 }));
        var hl = r(Ba);
        mt = E(hl, "DIV", { class: !0 });
        var fs = r(mt);
        (Jl = n(fs, QE)), fs.forEach(t), (Ql = R(hl)), (B = E(hl, "UL", {}));
        var j = r(B);
        Gt = E(j, "LI", { class: !0 });
        var cs = r(Gt);
        xe = E(cs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ds = r(xe);
        (jl = n(ds, jE)),
          ds.forEach(t),
          cs.forEach(t),
          (zl = R(j)),
          (pt = E(j, "LI", { class: !0 }));
        var us = r(pt);
        ea = E(us, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var _s = r(ea);
        (Zl = n(_s, zE)),
          _s.forEach(t),
          us.forEach(t),
          (xl = R(j)),
          (Ft = E(j, "LI", { class: !0 }));
        var Cs = r(Ft);
        He = E(Cs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var Ls = r(He);
        (eE = n(Ls, ZE)),
          Ls.forEach(t),
          Cs.forEach(t),
          (aE = R(j)),
          (kt = E(j, "LI", { class: !0 }));
        var vs = r(kt);
        aa = E(vs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var gs = r(aa);
        (tE = n(gs, xE)),
          gs.forEach(t),
          vs.forEach(t),
          (lE = R(j)),
          (Vt = E(j, "LI", { class: !0 }));
        var hs = r(Vt);
        Ye = E(hs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
        });
        var Ds = r(Ye);
        (EE = n(Ds, er)),
          Ds.forEach(t),
          hs.forEach(t),
          (rE = R(j)),
          (Bt = E(j, "LI", { class: !0 }));
        var Ps = r(Bt);
        ta = E(Ps, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var Us = r(ta);
        (sE = n(Us, ar)),
          Us.forEach(t),
          Ps.forEach(t),
          (TE = R(j)),
          (bt = E(j, "LI", { class: !0 }));
        var Ms = r(bt);
        na = E(Ms, "A", { class: !0, target: !0, href: !0, rel: !0 });
        var Hs = r(na);
        (IE = n(Hs, tr)),
          Hs.forEach(t),
          Ms.forEach(t),
          (AE = R(j)),
          (Wt = E(j, "LI", { class: !0 }));
        var Ys = r(Wt);
        _e = E(Ys, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          target: !0,
          href: !0,
          rel: !0,
        });
        var ms = r(_e);
        (iE = n(ms, lr)),
          ms.forEach(t),
          Ys.forEach(t),
          (OE = R(j)),
          (Kt = E(j, "LI", { class: !0 }));
        var Gs = r(Kt);
        la = E(Gs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
        });
        var ps = r(la);
        (oE = n(ps, Er)),
          ps.forEach(t),
          Gs.forEach(t),
          j.forEach(t),
          hl.forEach(t),
          (RE = R(ca)),
          (me = E(ca, "DIV", { class: !0 }));
        var Wa = r(me);
        Xt = E(Wa, "DIV", { class: !0 });
        var Fs = r(Xt);
        (NE = n(Fs, rr)), Fs.forEach(t), (nE = R(Wa)), (Ea = E(Wa, "UL", {}));
        var Ka = r(Ea);
        qt = E(Ka, "LI", { class: !0 });
        var ks = r(qt);
        Ge = E(ks, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var Vs = r(Ge);
        (SE = n(Vs, sr)),
          Vs.forEach(t),
          ks.forEach(t),
          (fE = R(Ka)),
          (wt = E(Ka, "LI", { class: !0 }));
        var Bs = r(wt);
        pe = E(Bs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var bs = r(pe);
        (cE = n(bs, Tr)),
          bs.forEach(t),
          Bs.forEach(t),
          (dE = R(Ka)),
          (yt = E(Ka, "LI", { class: !0 }));
        var Ws = r(yt);
        Fe = E(Ws, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var Ks = r(Fe);
        (uE = n(Ks, Ir)),
          Ks.forEach(t),
          Ws.forEach(t),
          (_E = R(Ka)),
          ($t = E(Ka, "LI", { class: !0 }));
        var Xs = r($t);
        ke = E(Xs, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
        });
        var qs = r(ke);
        (CE = n(qs, Ar)),
          qs.forEach(t),
          Xs.forEach(t),
          Ka.forEach(t),
          (LE = R(Wa)),
          (Jt = E(Wa, "DIV", { class: !0 }));
        var ws = r(Jt);
        (vE = n(ws, ir)),
          ws.forEach(t),
          (gE = R(Wa)),
          (Sa = E(Wa, "UL", { class: !0 }));
        var Zt = r(Sa);
        Qt = E(Zt, "LI", { class: !0 });
        var ys = r(Qt);
        Ve = E(ys, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var $s = r(Ve);
        (hE = n($s, "CoinMarketCap")),
          $s.forEach(t),
          ys.forEach(t),
          (DE = R(Zt)),
          (jt = E(Zt, "LI", { class: !0 }));
        var Js = r(jt);
        Be = E(Js, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var Qs = r(Be);
        (PE = n(Qs, "CoinGecko")),
          Qs.forEach(t),
          Js.forEach(t),
          (UE = R(Zt)),
          (zt = E(Zt, "LI", { class: !0 }));
        var js = r(zt);
        be = E(js, "A", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
          href: !0,
          target: !0,
          rel: !0,
        });
        var zs = r(be);
        (ME = n(zs, "Coincodex")),
          zs.forEach(t),
          js.forEach(t),
          Zt.forEach(t),
          Wa.forEach(t),
          ca.forEach(t),
          ba.forEach(t),
          (HE = R(g)),
          GE(st.$$.fragment, g),
          g.forEach(t),
          this.h();
      },
      h() {
        e(A, "width", "160"),
          e(A, "data-src", xs.LOGO_LIGHT),
          cT(A.src, (i = xs.LOGO_LIGHT)) || e(A, "src", i),
          e(A, "alt", "Logo"),
          e(S, "class", "dn xs:db mt12 f14 lh18 tc T4 "),
          e(b, "class", "mt32"),
          e(w, "class", "select mt32 xs:dn svelte-10fxq71"),
          e(ee, "class", "dn xs:db mt24 f12 tc T4"),
          e(O, "class", "logo svelte-10fxq71"),
          e(F, "class", "lh36 f16 fw3 TW"),
          e(y, "class", "ga svelte-10fxq71"),
          e(y, "data-gac", "footer.link"),
          e(y, "data-gaa", "link_click"),
          e(y, "data-gal", "contract"),
          e(y, "href", d.PHEMEX_CONTRACT_INVERSE_TRADE),
          e(y, "target", "_self"),
          e(Te, "class", "svelte-10fxq71"),
          e(Ie, "class", "ga svelte-10fxq71"),
          e(Ie, "data-gac", "footer.link"),
          e(Ie, "data-gaa", "link_click"),
          e(Ie, "data-gal", "spot"),
          e(Ie, "href", d.PHEMEX_SPOT_TRADE),
          e(Ie, "target", "_self"),
          e(ve, "class", "svelte-10fxq71"),
          e(X, "class", "ga svelte-10fxq71"),
          e(X, "data-gac", "footer.link"),
          e(X, "data-gaa", "link_click"),
          e(X, "data-gal", "buy_crypto"),
          e(
            X,
            "href",
            (Ha = s[3](
              s[6]
                ? s[7]
                  ? v.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
                  : v.BUY_CRYPTO_PLACE_ORDER.pathname
                : v.BUY_CRYPTO.pathname
            ))
          ),
          e(ce, "class", "svelte-10fxq71"),
          e(ge, "class", "ga svelte-10fxq71"),
          e(ge, "href", (ia = s[3](v.CRYPTO_CONVERTER.pathname))),
          e(Aa, "class", "svelte-10fxq71"),
          e(z, "class", "ga svelte-10fxq71"),
          e(z, "data-gac", "footer.link"),
          e(z, "data-gaa", "link_click"),
          e(z, "data-gal", "earn_crypto"),
          e(z, "href", (he = s[3](v.EARN_HOME.pathname))),
          e(Oa, "class", "svelte-10fxq71"),
          e(q, "class", "ga svelte-10fxq71"),
          e(q, "data-gac", "footer.link"),
          e(q, "data-gaa", "link_click"),
          e(q, "data-gal", "Launchpool"),
          e(q, "href", ($ = s[3](v.LAUNCHPOOL.pathname))),
          e(Xe, "class", "svelte-10fxq71"),
          e(Ae, "class", "ga svelte-10fxq71"),
          e(Ae, "data-gac", "footer.link"),
          e(Ae, "data-gaa", "link_click"),
          e(Ae, "data-gal", "trading_bots"),
          e(Ae, "href", (Na = s[3](v.STRATEGY_SQUARE.pathname))),
          e(De, "class", "svelte-10fxq71"),
          e(P, "class", "f1 box svelte-10fxq71"),
          e(de, "class", "lh36 f16 fw3 TW"),
          e(Z, "class", "ga svelte-10fxq71"),
          e(Z, "data-gac", "footer.link"),
          e(Z, "data-gaa", "link_click"),
          e(Z, "data-gal", "help_center"),
          e(Z, "href", (pa = s[3](d.PHEMEX_HELP_CENTER, "CMS"))),
          e(Z, "target", "_blank"),
          e(Z, "rel", "noopener noreferrer nofollow"),
          e(Ue, "class", "svelte-10fxq71"),
          e(x, "class", "ga svelte-10fxq71"),
          e(x, "data-gac", "footer.link"),
          e(x, "data-gaa", "link_click"),
          e(x, "data-gal", "spot_guides"),
          e(x, "target", "_blank"),
          e(x, "href", (ka = s[3](d.PHEMEX_ACADEMY, "CMS"))),
          e(x, "rel", "noopener noreferrer nofollow"),
          e(Ne, "class", "svelte-10fxq71"),
          e(ae, "class", "ga svelte-10fxq71"),
          e(ae, "data-gac", "footer.link"),
          e(ae, "data-gaa", "link_click"),
          e(ae, "data-gal", "spot_guides"),
          e(ae, "target", "_blank"),
          e(ae, "href", (Ca = s[3](v.LEARN_CRYPTO.pathname))),
          e(ae, "rel", "noopener noreferrer nofollow"),
          e(G, "class", "svelte-10fxq71"),
          e(ue, "class", "ga svelte-10fxq71"),
          e(ue, "href", (xa = s[3](d.PHEMEX_BLOG, "CMS"))),
          e(ue, "target", "_blank"),
          e(ue, "rel", "noopener noreferrer nofollow"),
          e(La, "class", "svelte-10fxq71"),
          e(ne, "class", "ga svelte-10fxq71"),
          e(ne, "data-gac", "footer.link"),
          e(ne, "data-gaa", "link_click"),
          e(ne, "data-gal", "fee_conditions"),
          e(ne, "href", (va = s[3](v.FEES_CONDITIONS.pathname))),
          e(ye, "class", "svelte-10fxq71"),
          e(te, "class", "ga svelte-10fxq71"),
          e(te, "data-gac", "footer.link"),
          e(te, "data-gaa", "link_click"),
          e(te, "data-gal", "api_doc"),
          e(te, "href", (et = s[3](v.APIS.pathname))),
          e(te, "target", "_blank"),
          e(te, "rel", "noopener noreferrer nofollow"),
          e(ga, "class", "svelte-10fxq71"),
          e(le, "class", "ga svelte-10fxq71"),
          e(le, "data-gac", "footer.link"),
          e(le, "data-gaa", "link_click"),
          e(le, "data-gal", "contract_references"),
          e(le, "href", (at = s[3](v.CONTRACT_INTRODUCTION.pathname))),
          e(ha, "class", "svelte-10fxq71"),
          e(Se, "class", "ga svelte-10fxq71"),
          e(Se, "data-gac", "footer.link"),
          e(Se, "data-gaa", "link_click"),
          e(Se, "data-gal", "contract_references"),
          e(Se, "href", (tt = s[3](v.OFFICIAL_VERIFICATION.pathname))),
          e(Oe, "class", "svelte-10fxq71"),
          e(oe, "class", "ga svelte-10fxq71"),
          e(oe, "data-gac", "footer.link"),
          e(oe, "data-gaa", "link_click"),
          e(oe, "data-gal", "feedback"),
          e(oe, "target", "_blank"),
          e(oe, "rel", "noopener noreferrer nofollow"),
          e(oe, "href", d.FEEDBACK),
          e(Da, "class", "svelte-10fxq71"),
          e(Pe, "class", "f1 box svelte-10fxq71"),
          e(gt, "class", "lh36 f16 fw3 TW"),
          e(Me, "class", "ga svelte-10fxq71"),
          e(Me, "data-gac", "footer.link"),
          e(Me, "data-gaa", "link_click"),
          e(Me, "data-gal", "welcome_bonus"),
          e(Me, "href", (El = s[3](v.BONUS.pathname))),
          e(ht, "class", "svelte-10fxq71"),
          e(Je, "class", "ga svelte-10fxq71"),
          e(Je, "data-gac", "footer.link"),
          e(Je, "data-gaa", "link_click"),
          e(Je, "data-gal", "referral_invite_friends"),
          e(Je, "href", (rl = s[3](v.ACCOUNT_INVITE_FRIENDS.pathname))),
          e(Dt, "class", "svelte-10fxq71"),
          e(Qe, "class", "ga svelte-10fxq71"),
          e(Qe, "data-gac", "footer.link"),
          e(Qe, "data-gaa", "link_click"),
          e(Qe, "data-gal", "vip_portal"),
          e(Qe, "href", (sl = s[3](v.VIP_PORTAL.pathname))),
          e(Pt, "class", "svelte-10fxq71"),
          e(je, "class", "ga svelte-10fxq71"),
          e(je, "data-gac", "footer.link"),
          e(je, "data-gaa", "link_click"),
          e(je, "data-gal", "vip_program"),
          e(je, "href", s[1]),
          e(Ut, "class", "svelte-10fxq71"),
          e(ze, "class", "ga svelte-10fxq71"),
          e(ze, "data-gac", "footer.link"),
          e(ze, "data-gaa", "link_click"),
          e(ze, "data-gal", "all_star_program"),
          e(ze, "href", (Tl = s[3](v.ALL_STAR_PROGRAM.pathname))),
          e(Mt, "class", "svelte-10fxq71"),
          e(Ze, "class", "ga svelte-10fxq71"),
          e(Ze, "data-gac", "footer.link"),
          e(Ze, "data-gaa", "link_click"),
          e(Ze, "data-gal", "institutional_clients"),
          e(Ze, "href", (Il = s[3](v.INSTITUTIONAL_CLIENT.pathname))),
          e(Ht, "class", "svelte-10fxq71"),
          e(lt, "class", "svelte-10fxq71"),
          e(Et, "class", "svelte-10fxq71"),
          e(rt, "class", "ga svelte-10fxq71"),
          e(rt, "href", d.PHEMEX_TESTNET),
          e(Yt, "class", "svelte-10fxq71"),
          e($e, "class", "f1 box svelte-10fxq71"),
          e(mt, "class", "lh36 f16 fw3 TW"),
          e(xe, "class", "ga svelte-10fxq71"),
          e(xe, "data-gac", "footer.link"),
          e(xe, "data-gaa", "link_click"),
          e(xe, "data-gal", "about_us"),
          e(xe, "href", (Al = s[3](v.ABOUT.pathname))),
          e(Gt, "class", "svelte-10fxq71"),
          e(ea, "class", "ga svelte-10fxq71"),
          e(ea, "data-gac", "footer.link"),
          e(ea, "data-gaa", "link_click"),
          e(ea, "data-gal", "brandsite"),
          e(ea, "href", (il = s[3](v.ABOUT_BRAND_STYLE_GUIDE.pathname))),
          e(pt, "class", "svelte-10fxq71"),
          e(He, "class", "ga svelte-10fxq71"),
          e(He, "data-gac", "footer.link"),
          e(He, "data-gaa", "link_click"),
          e(He, "data-gal", "careers"),
          e(He, "href", d.PHEMEX_JOBS),
          e(He, "target", "_blank"),
          e(He, "rel", "noopener noreferrer nofollow"),
          e(Ft, "class", "svelte-10fxq71"),
          e(aa, "class", "ga svelte-10fxq71"),
          e(aa, "data-gac", "footer.link"),
          e(aa, "data-gaa", "link_click"),
          e(aa, "data-gal", "student"),
          e(aa, "href", (Ol = s[3](v.STUDENT_FOUNDATION.pathname))),
          e(kt, "class", "svelte-10fxq71"),
          e(Ye, "class", "ga svelte-10fxq71"),
          e(Ye, "data-gac", "footer.link"),
          e(Ye, "data-gaa", "link_click"),
          e(Ye, "data-gal", "announcements"),
          e(Ye, "target", "_blank"),
          e(Ye, "href", (ol = s[3](d.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS"))),
          e(Vt, "class", "svelte-10fxq71"),
          e(ta, "class", "ga svelte-10fxq71"),
          e(ta, "data-gac", "footer.link"),
          e(ta, "data-gaa", "link_click"),
          e(ta, "data-gal", "security"),
          e(ta, "href", (Rl = s[3](v.SECURITY.pathname))),
          e(Bt, "class", "svelte-10fxq71"),
          e(na, "class", "ga svelte-10fxq71"),
          e(na, "target", "_blank"),
          e(na, "href", (Nl = s[3](d.PHEMEX_REFERENCES_PRIVACY_POLICY, "CMS"))),
          e(na, "rel", "noopener noreferrer nofollow"),
          e(bt, "class", "svelte-10fxq71"),
          e(_e, "class", "ga svelte-10fxq71"),
          e(_e, "data-gac", "footer.link"),
          e(_e, "data-gaa", "link_click"),
          e(_e, "data-gal", "terms"),
          e(_e, "target", "_blank"),
          e(_e, "href", (nl = s[3](d.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS"))),
          e(_e, "rel", "noopener noreferrer nofollow"),
          e(Wt, "class", "svelte-10fxq71"),
          e(la, "class", "ga svelte-10fxq71"),
          e(la, "data-gac", "footer.link"),
          e(la, "data-gaa", "link_click"),
          e(la, "data-gal", "sitemap"),
          e(la, "href", (Sl = s[3](v.SITEMAP.pathname))),
          e(Kt, "class", "svelte-10fxq71"),
          e(Ba, "class", "f1 box svelte-10fxq71"),
          e(Xt, "class", "lh36 f16 fw3 TW"),
          e(Ge, "class", "ga svelte-10fxq71"),
          e(Ge, "data-gac", "footer.link"),
          e(Ge, "data-gaa", "link_click"),
          e(Ge, "data-gal", "coincodex"),
          e(Ge, "href", (fl = s[3](v.BUY_CRYPTO_BUY_BTC.pathname))),
          e(Ge, "target", "_blank"),
          e(qt, "class", "svelte-10fxq71"),
          e(pe, "class", "ga svelte-10fxq71"),
          e(pe, "data-gac", "footer.link"),
          e(pe, "data-gaa", "link_click"),
          e(pe, "data-gal", "coincodex"),
          e(pe, "href", (cl = s[3](v.BUY_CRYPTO_BUY_DOGE.pathname))),
          e(pe, "target", "_blank"),
          e(wt, "class", "svelte-10fxq71"),
          e(Fe, "class", "ga svelte-10fxq71"),
          e(Fe, "data-gac", "footer.link"),
          e(Fe, "data-gaa", "link_click"),
          e(Fe, "data-gal", "coincodex"),
          e(Fe, "href", (dl = s[3](v.BUY_CRYPTO_BUY_LTC.pathname))),
          e(Fe, "target", "_blank"),
          e(yt, "class", "svelte-10fxq71"),
          e(ke, "class", "ga svelte-10fxq71"),
          e(ke, "data-gac", "footer.link"),
          e(ke, "data-gaa", "link_click"),
          e(ke, "data-gal", "coincodex"),
          e(ke, "href", (ul = s[3](v.BUY_CRYPTO_BUY_ETHEREUM.pathname))),
          e(ke, "target", "_blank"),
          e($t, "class", "svelte-10fxq71"),
          e(Jt, "class", "xs:dn lh36 f16 fw3 TW"),
          e(Ve, "class", "ga svelte-10fxq71"),
          e(Ve, "data-gac", "footer.link"),
          e(Ve, "data-gaa", "link_click"),
          e(Ve, "data-gal", "coinmarketcap"),
          e(Ve, "href", d.COINMARKETCAP_LINK),
          e(Ve, "target", "_blank"),
          e(Ve, "rel", "noopener noreferrer nofollow"),
          e(Qt, "class", "svelte-10fxq71"),
          e(Be, "class", "ga svelte-10fxq71"),
          e(Be, "data-gac", "footer.link"),
          e(Be, "data-gaa", "link_click"),
          e(Be, "data-gal", "coingecko"),
          e(Be, "href", d.COINGECKO_LINK),
          e(Be, "target", "_blank"),
          e(Be, "rel", "noopener noreferrer nofollow"),
          e(jt, "class", "svelte-10fxq71"),
          e(be, "class", "ga svelte-10fxq71"),
          e(be, "data-gac", "footer.link"),
          e(be, "data-gaa", "link_click"),
          e(be, "data-gal", "coincodex"),
          e(be, "href", d.COINCODEX_LINK),
          e(be, "target", "_blank"),
          e(be, "rel", "noopener noreferrer nofollow"),
          e(zt, "class", "svelte-10fxq71"),
          e(Sa, "class", "xs:dn"),
          e(me, "class", "f1 box svelte-10fxq71"),
          e(U, "class", "f1 df fww"),
          e(I, "class", "main df svelte-10fxq71"),
          e(T, "class", "wrap pr svelte-10fxq71");
      },
      m(u, g) {
        p(u, T, g),
          a(T, I),
          a(I, O),
          a(O, f),
          a(f, A),
          a(O, c),
          a(O, S),
          a(S, M),
          a(O, W),
          a(O, b),
          pE(K, b, null),
          a(O, Re),
          a(O, w),
          pE(Y, w, null),
          a(O, se),
          a(O, ee),
          a(ee, Ce),
          a(I, C),
          a(I, U),
          a(U, P),
          a(P, F),
          a(F, Le),
          a(P, Ta),
          a(P, m),
          a(m, Te),
          a(Te, y),
          a(y, Ia),
          a(m, We),
          a(m, ve),
          a(ve, Ie),
          a(Ie, da),
          a(m, Xa),
          Ee && Ee.m(m, null),
          a(m, Ua),
          a(m, ce),
          a(ce, X),
          a(X, qa),
          a(m, ua),
          a(m, Aa),
          a(Aa, ge),
          a(ge, Ke),
          a(m, wa),
          a(m, Oa),
          a(Oa, z),
          a(z, Ya),
          a(m, ya),
          a(m, Xe),
          a(Xe, q),
          a(q, ma),
          a(m, oa),
          a(m, De),
          a(De, Ae),
          a(Ae, Ra),
          a(U, $a),
          a(U, Pe),
          a(Pe, de),
          a(de, Ja),
          a(Pe, Qa),
          a(Pe, H),
          a(H, Ue),
          a(Ue, Z),
          a(Z, qe),
          a(H, Fa),
          a(H, Ne),
          a(Ne, x),
          a(x, we),
          a(H, _),
          a(H, G),
          a(G, ae),
          a(ae, ot),
          a(H, Rt),
          a(H, La),
          a(La, ue),
          a(ue, Nt),
          a(H, nt),
          a(H, ye),
          a(ye, ne),
          a(ne, St),
          a(H, ft),
          a(H, ga),
          a(ga, te),
          a(te, Va),
          a(H, ct),
          a(H, ha),
          a(ha, le),
          a(le, dt),
          a(H, ut),
          a(H, Oe),
          a(Oe, Se),
          a(Se, _t),
          a(H, Ct),
          a(H, Da),
          a(Da, oe),
          a(oe, Lt),
          a(U, vt),
          a(U, $e),
          a($e, gt),
          a(gt, Ml),
          a($e, Hl),
          a($e, V),
          a(V, ht),
          a(ht, Me),
          a(Me, Yl),
          a(V, ml),
          a(V, Dt),
          a(Dt, Je),
          a(Je, Gl),
          a(V, pl),
          a(V, Pt),
          a(Pt, Qe),
          a(Qe, Fl),
          a(V, kl),
          a(V, Ut),
          a(Ut, je),
          a(je, Vl),
          a(V, Bl),
          a(V, Mt),
          a(Mt, ze),
          a(ze, bl),
          a(V, Wl),
          a(V, Ht),
          a(Ht, Ze),
          a(Ze, Kl),
          a(V, Xl),
          a(V, lt),
          ra.m(lt, null),
          a(V, ql),
          a(V, Et),
          sa.m(Et, null),
          a(V, wl),
          a(V, Yt),
          a(Yt, rt),
          a(rt, yl),
          a(U, $l),
          a(U, Ba),
          a(Ba, mt),
          a(mt, Jl),
          a(Ba, Ql),
          a(Ba, B),
          a(B, Gt),
          a(Gt, xe),
          a(xe, jl),
          a(B, zl),
          a(B, pt),
          a(pt, ea),
          a(ea, Zl),
          a(B, xl),
          a(B, Ft),
          a(Ft, He),
          a(He, eE),
          a(B, aE),
          a(B, kt),
          a(kt, aa),
          a(aa, tE),
          a(B, lE),
          a(B, Vt),
          a(Vt, Ye),
          a(Ye, EE),
          a(B, rE),
          a(B, Bt),
          a(Bt, ta),
          a(ta, sE),
          a(B, TE),
          a(B, bt),
          a(bt, na),
          a(na, IE),
          a(B, AE),
          a(B, Wt),
          a(Wt, _e),
          a(_e, iE),
          a(B, OE),
          a(B, Kt),
          a(Kt, la),
          a(la, oE),
          a(U, RE),
          a(U, me),
          a(me, Xt),
          a(Xt, NE),
          a(me, nE),
          a(me, Ea),
          a(Ea, qt),
          a(qt, Ge),
          a(Ge, SE),
          a(Ea, fE),
          a(Ea, wt),
          a(wt, pe),
          a(pe, cE),
          a(Ea, dE),
          a(Ea, yt),
          a(yt, Fe),
          a(Fe, uE),
          a(Ea, _E),
          a(Ea, $t),
          a($t, ke),
          a(ke, CE),
          a(me, LE),
          a(me, Jt),
          a(Jt, vE),
          a(me, gE),
          a(me, Sa),
          a(Sa, Qt),
          a(Qt, Ve),
          a(Ve, hE),
          a(Sa, DE),
          a(Sa, jt),
          a(jt, Be),
          a(Be, PE),
          a(Sa, UE),
          a(Sa, zt),
          a(zt, be),
          a(be, ME),
          a(T, HE),
          pE(st, T, null),
          (D = !0),
          YE || ((Or = sT(Me, "click", s[11])), (YE = !0));
      },
      p(u, [g]) {
        const ba = {};
        g & 16 && (ba.options = u[4]),
          !k && g & 4 && ((k = !0), (ba.value = u[2]), dT(() => (k = !1))),
          Y.$set(ba),
          u[5]
            ? Ee
              ? Ee.p(u, g)
              : ((Ee = rT(u)), Ee.c(), Ee.m(m, Ua))
            : Ee && (Ee.d(1), (Ee = null)),
          (!D ||
            (g & 200 &&
              Ha !==
                (Ha = u[3](
                  u[6]
                    ? u[7]
                      ? v.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
                      : v.BUY_CRYPTO_PLACE_ORDER.pathname
                    : v.BUY_CRYPTO.pathname
                )))) &&
            e(X, "href", Ha),
          (!D || (g & 8 && ia !== (ia = u[3](v.CRYPTO_CONVERTER.pathname)))) &&
            e(ge, "href", ia),
          (!D || (g & 8 && he !== (he = u[3](v.EARN_HOME.pathname)))) &&
            e(z, "href", he),
          (!D || (g & 8 && $ !== ($ = u[3](v.LAUNCHPOOL.pathname)))) &&
            e(q, "href", $),
          (!D || (g & 8 && Na !== (Na = u[3](v.STRATEGY_SQUARE.pathname)))) &&
            e(Ae, "href", Na),
          (!D || (g & 8 && pa !== (pa = u[3](d.PHEMEX_HELP_CENTER, "CMS")))) &&
            e(Z, "href", pa),
          (!D || (g & 8 && ka !== (ka = u[3](d.PHEMEX_ACADEMY, "CMS")))) &&
            e(x, "href", ka),
          (!D || (g & 8 && Ca !== (Ca = u[3](v.LEARN_CRYPTO.pathname)))) &&
            e(ae, "href", Ca),
          (!D || (g & 8 && xa !== (xa = u[3](d.PHEMEX_BLOG, "CMS")))) &&
            e(ue, "href", xa),
          (!D || (g & 8 && va !== (va = u[3](v.FEES_CONDITIONS.pathname)))) &&
            e(ne, "href", va),
          (!D || (g & 8 && et !== (et = u[3](v.APIS.pathname)))) &&
            e(te, "href", et),
          (!D ||
            (g & 8 && at !== (at = u[3](v.CONTRACT_INTRODUCTION.pathname)))) &&
            e(le, "href", at),
          (!D ||
            (g & 8 && tt !== (tt = u[3](v.OFFICIAL_VERIFICATION.pathname)))) &&
            e(Se, "href", tt),
          (!D || (g & 8 && El !== (El = u[3](v.BONUS.pathname)))) &&
            e(Me, "href", El),
          (!D ||
            (g & 8 && rl !== (rl = u[3](v.ACCOUNT_INVITE_FRIENDS.pathname)))) &&
            e(Je, "href", rl),
          (!D || (g & 8 && sl !== (sl = u[3](v.VIP_PORTAL.pathname)))) &&
            e(Qe, "href", sl),
          (!D || g & 2) && e(je, "href", u[1]),
          (!D || (g & 8 && Tl !== (Tl = u[3](v.ALL_STAR_PROGRAM.pathname)))) &&
            e(ze, "href", Tl),
          (!D ||
            (g & 8 && Il !== (Il = u[3](v.INSTITUTIONAL_CLIENT.pathname)))) &&
            e(Ze, "href", Il),
          _l === (_l = Rr(u)) && ra
            ? ra.p(u, g)
            : (ra.d(1), (ra = _l(u)), ra && (ra.c(), ra.m(lt, null))),
          Cl === (Cl = Nr(u)) && sa
            ? sa.p(u, g)
            : (sa.d(1), (sa = Cl(u)), sa && (sa.c(), sa.m(Et, null))),
          (!D || (g & 8 && Al !== (Al = u[3](v.ABOUT.pathname)))) &&
            e(xe, "href", Al),
          (!D ||
            (g & 8 &&
              il !== (il = u[3](v.ABOUT_BRAND_STYLE_GUIDE.pathname)))) &&
            e(ea, "href", il),
          (!D ||
            (g & 8 && Ol !== (Ol = u[3](v.STUDENT_FOUNDATION.pathname)))) &&
            e(aa, "href", Ol),
          (!D ||
            (g & 8 &&
              ol !== (ol = u[3](d.PHEMEX_REFERENCES_ANNOUNCEMENTS, "CMS")))) &&
            e(Ye, "href", ol),
          (!D || (g & 8 && Rl !== (Rl = u[3](v.SECURITY.pathname)))) &&
            e(ta, "href", Rl),
          (!D ||
            (g & 8 &&
              Nl !== (Nl = u[3](d.PHEMEX_REFERENCES_PRIVACY_POLICY, "CMS")))) &&
            e(na, "href", Nl),
          (!D ||
            (g & 8 &&
              nl !== (nl = u[3](d.PHEMEX_REFERENCES_TERMS_OF_USE, "CMS")))) &&
            e(_e, "href", nl),
          (!D || (g & 8 && Sl !== (Sl = u[3](v.SITEMAP.pathname)))) &&
            e(la, "href", Sl),
          (!D ||
            (g & 8 && fl !== (fl = u[3](v.BUY_CRYPTO_BUY_BTC.pathname)))) &&
            e(Ge, "href", fl),
          (!D ||
            (g & 8 && cl !== (cl = u[3](v.BUY_CRYPTO_BUY_DOGE.pathname)))) &&
            e(pe, "href", cl),
          (!D ||
            (g & 8 && dl !== (dl = u[3](v.BUY_CRYPTO_BUY_LTC.pathname)))) &&
            e(Fe, "href", dl),
          (!D ||
            (g & 8 &&
              ul !== (ul = u[3](v.BUY_CRYPTO_BUY_ETHEREUM.pathname)))) &&
            e(ke, "href", ul);
      },
      i(u) {
        D ||
          (Dl(K.$$.fragment, u),
          Dl(Y.$$.fragment, u),
          Dl(st.$$.fragment, u),
          (D = !0));
      },
      o(u) {
        Pl(K.$$.fragment, u),
          Pl(Y.$$.fragment, u),
          Pl(st.$$.fragment, u),
          (D = !1);
      },
      d(u) {
        u && t(T),
          FE(K),
          FE(Y),
          Ee && Ee.d(),
          ra.d(),
          sa.d(),
          FE(st),
          (YE = !1),
          Or();
      },
    }
  );
}
function zT(s, T, I) {
  let O, f, A, i, c, S, L, M, W;
  Pa(s, uT, (C) => I(15, (f = C))),
    Pa(s, _T, (C) => I(3, (A = C))),
    Pa(s, Ul, (C) => I(0, (c = C))),
    Pa(s, CT, (C) => I(4, (S = C))),
    Pa(s, LT, (C) => I(5, (L = C))),
    Pa(s, vT, (C) => I(6, (M = C))),
    Pa(s, gT, (C) => I(7, (W = C)));
  let { noShowBanner: b = !1 } = T;
  const K = hT("LG"),
    { page: Re } = PT();
  Pa(s, Re, (C) => I(16, (i = C)));
  let w = "";
  DT(() => {
    pT.parsePathname(i.path), Y();
  });
  function Y() {
    const C = location.origin + A(v.VIP_PROGRAM.pathname);
    I(1, (w = C + "?" + FT.stringify({ target: C, action: "Target" })));
  }
  function k(C) {
    const U = C.detail.value,
      P = YT[U] || U;
    f === "Login" ? se({ lang: P }) : Ul.set(eT[P] || P);
  }
  async function se(C) {
    const { data: U, error: P } = await kT.updateProfile(C);
    if (U) {
      UT.next(U);
      const { lang: F } = C;
      F && Ul.set(eT[F] || F);
    }
    P && MT.send("toast", "error", P);
  }
  function ee() {
    HT.track("web_click", {
      $screen_name: "home",
      $element_content: "footer_services_rewards_hub",
    });
  }
  function Ce(C) {
    (O = C), I(2, O), I(0, c);
  }
  return (
    (s.$$set = (C) => {
      "noShowBanner" in C && I(12, (b = C.noShowBanner));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && I(2, (O = c));
    }),
    [c, w, O, A, S, L, M, W, K, Re, k, ee, b, Ce]
  );
}
class aI extends VE {
  constructor(T) {
    super(), BE(this, T, zT, jT, bE, { noShowBanner: 12 });
  }
}
export { aI as F };
//# sourceMappingURL=chunk-9fef3892.js.map
