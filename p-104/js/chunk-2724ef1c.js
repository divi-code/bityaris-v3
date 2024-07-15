import {
  S as He,
  i as Ye,
  s as Qe,
  B as Ue,
  g as M,
  I as je,
  d as h,
  y as Me,
  J as Pn,
  L as tt,
  e as y,
  D as A,
  C as B,
  c as T,
  a as w,
  F as O,
  E as U,
  b as p,
  H as f,
  G as st,
  K as Ie,
  k as Y,
  h as Mt,
  t as q,
  j as Lt,
  a2 as Qn,
  aj as Rs,
  ak as As,
  V as Ut,
  P as Qt,
  p as le,
  q as ce,
  r as ue,
  x as fe,
  Q as se,
  l as pn,
  R as X,
  u as gn,
  m as mn,
  n as _n,
  O as or,
  X as Hr,
  N as nn,
  al as ht,
  a5 as Cl,
  a6 as El,
  a3 as uo,
  f as lr,
  Y as Ne,
  a9 as Xe,
  aa as Ze,
  a7 as ai,
  W as wl,
  a8 as Il,
  T as Os,
  ag as Dl,
  af as kl,
  am as Sl,
  o as fo,
  z as ho,
  an as rs,
  a1 as Pl,
  a4 as Rl,
  ad as Al,
} from "./chunk-8f7551c4.js";
import {
  aQ as Ol,
  K as Nl,
  aR as Ml,
  aS as ii,
  aT as Ll,
  as as Fl,
  aU as Vl,
  E as Le,
  aV as Kr,
  R as j,
  T as W,
  c as $t,
  d as ot,
  w as Ds,
  e as Re,
  b as Ge,
  m as oe,
  aL as cr,
  k as Bt,
  s as an,
  ac as ss,
  aW as Bl,
  F as Ul,
  aX as $l,
  a3 as sn,
  aY as Rn,
  aZ as Hl,
  V as ur,
  a_ as Ns,
  v as vn,
  a$ as Yl,
  b0 as os,
  b1 as Ql,
  aO as Ms,
  Q as $,
  al as Br,
  f as Ls,
  P as Zt,
  b2 as Wl,
  u as as,
  M as fr,
  b3 as li,
  aP as Un,
  a9 as ar,
  ab as Ar,
  b4 as rt,
  b5 as ci,
  b6 as ql,
  b7 as ui,
  b8 as Fs,
  b9 as Kl,
  ba as jl,
  bb as fi,
  bc as un,
  bd as it,
  be as di,
  bf as Vs,
  I as Bs,
  g as hi,
  bg as Zr,
  aa as zl,
  aN as Jl,
  a8 as wn,
  aM as Xl,
  B as pi,
  bh as Zl,
  bi as gi,
  A as mi,
  a6 as Us,
  bj as Gl,
  bk as _i,
  bl as xl,
  W as ec,
  bm as $n,
  bn as Hn,
  O as tc,
  bo as nc,
  bp as po,
  bq as go,
  ay as vi,
  br as Sr,
  bs as bi,
  aG as yi,
  bt as rc,
  H as sc,
  bu as oc,
  bv as ac,
  bw as ic,
  bx as lc,
  ak as cc,
  aC as uc,
  ax as fc,
  aj as dc,
  by as hc,
  bz as pc,
  C as gc,
  bA as mc,
} from "./chunk-772394bf.js";
import {
  p as _c,
  O as vc,
  i as bc,
  h as yc,
  o as Tc,
  g as Cc,
  m as ye,
  B as ve,
  f as lt,
  a as Ce,
  e as Bn,
  S as Dn,
  j as Ec,
  w as wc,
  s as dr,
  k as Ti,
  q as Ic,
  l as us,
} from "./app-6c8af094.js";
import { k as Yn } from "./chunk-bbc88117.js";
import { i as Ci } from "./chunk-f928d363.js";
function Dc() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = _c(e),
    r = Ol(e),
    s = r.args,
    o = r.keys,
    a = new vc(function (i) {
      var l = s.length;
      if (!l) {
        i.complete();
        return;
      }
      for (
        var c = new Array(l),
          u = l,
          d = l,
          m = function (v) {
            var _ = !1;
            bc(s[v]).subscribe(
              yc(
                i,
                function (I) {
                  _ || ((_ = !0), d--), (c[v] = I);
                },
                function () {
                  return u--;
                },
                void 0,
                function () {
                  (!u || !_) && (d || i.next(o ? Ml(o, c) : c), i.complete());
                }
              )
            );
          },
          g = 0;
        g < l;
        g++
      )
        m(g);
    });
  return n ? a.pipe(Nl(n)) : a;
}
function kc(e, t, n) {
  return (
    t === void 0 && (t = 1 / 0),
    (t = (t || 0) < 1 ? 1 / 0 : t),
    Tc(function (r, s) {
      return Cc(r, s, e, t, void 0, !0, n);
    })
  );
}
function Sc() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = e.length;
  if (n === 0) throw new Error("list of properties cannot be empty.");
  return ye(function (r) {
    for (var s = r, o = 0; o < n; o++) {
      var a = s == null ? void 0 : s[e[o]];
      if (typeof a < "u") s = a;
      else return;
    }
    return s;
  });
}
function mo(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i,
    l =
      (e[1]
        ? e[3](Kr.preRestrictedMsg, { Email: jr, Date: e[0] })
        : e[3](Kr.restrictedMsg, { Email: jr })) + "";
  return {
    c() {
      (t = y("div")),
        (n = A()),
        (r = y("div")),
        (s = y("i")),
        (o = B("")),
        (a = A()),
        (i = y("div")),
        this.h();
    },
    l(c) {
      (t = T(c, "DIV", { class: !0 })),
        w(t).forEach(h),
        (n = O(c)),
        (r = T(c, "DIV", { class: !0 }));
      var u = w(r);
      s = T(u, "I", { class: !0 });
      var d = w(s);
      (o = U(d, "")),
        d.forEach(h),
        (a = O(u)),
        (i = T(u, "DIV", { class: !0 }));
      var m = w(i);
      m.forEach(h), u.forEach(h), this.h();
    },
    h() {
      p(t, "class", "placeholder-block svelte-5d40uk"),
        p(s, "class", "iconfont error f16 mr10 svelte-5d40uk"),
        p(i, "class", "f14 lh22"),
        p(r, "class", "ip-restricted-notify df svelte-5d40uk");
    },
    m(c, u) {
      M(c, t, u),
        M(c, n, u),
        M(c, r, u),
        f(r, s),
        f(s, o),
        f(r, a),
        f(r, i),
        (i.innerHTML = l);
    },
    p(c, u) {
      u & 3 &&
        l !==
          (l =
            (c[1]
              ? c[3](Kr.preRestrictedMsg, { Email: jr, Date: c[0] })
              : c[3](Kr.restrictedMsg, { Email: jr })) + "") &&
        (i.innerHTML = l);
    },
    d(c) {
      c && h(t), c && h(n), c && h(r);
    },
  };
}
function Pc(e) {
  let t,
    n = (e[1] || e[2]) && mo(e);
  return {
    c() {
      n && n.c(), (t = Ue());
    },
    l(r) {
      n && n.l(r), (t = Ue());
    },
    m(r, s) {
      n && n.m(r, s), M(r, t, s);
    },
    p(r, [s]) {
      r[1] || r[2]
        ? n
          ? n.p(r, s)
          : ((n = mo(r)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: je,
    o: je,
    d(r) {
      n && n.d(r), r && h(t);
    },
  };
}
const jr =
  '<a href="mailto:"></a>';
function Rc(e, t, n) {
  let r, s, o;
  Me(e, ii, (l) => n(4, (r = l))),
    Me(e, Ll, (l) => n(1, (s = l))),
    Me(e, Fl, (l) => n(2, (o = l)));
  const a = Pn("LG");
  let i = "";
  return (
    tt(() => {
      Vl(a);
    }),
    (e.$$.update = () => {
      e.$$.dirty & 16 && n(0, (i = Le.formatUTCDate(r && r.startTime)));
    }),
    [i, s, o, a, r]
  );
}
class Ac extends He {
  constructor(t) {
    super(), Ye(this, t, Rc, Pc, Qe, {});
  }
}
const Oc = {
    contractIntroduction(e) {
      return j.get(W.CONTRACT_INTRODUCTION, { query: e });
    },
    getInsuranceMap(e) {
      return j.get(W.INSURANCE_MAP, { query: e });
    },
    getFundList(e) {
      return j.get(W.INSURANCE_LIST, { query: e });
    },
    getFundListV2(e) {
      return j.get(W.INSURANCE_LIST_V2, { query: e });
    },
    getFundingRateList(e) {
      return j.get(W.FUNDING_RATE_LIST, {
        query: e,
        formatter({ rows: t, total: n }) {
          return {
            rows: t.map((s) => ({
              ...s,
              fundingTime: s.intervalSeconds ? s.intervalSeconds / 3600 : 8,
            })),
            total: n,
          };
        },
      });
    },
    getContractTransferCurrencies(e) {
      return j.get(W.CONTRACT_TRANSFER_CURRENCIES, { query: e });
    },
    postContractConvert(e) {
      return j.post(W.CONTRACT_CONVERT, { params: e });
    },
    getFoundHistoryData(e) {
      return j.get(W.FUNDING_RATE_DATE_ALL, { query: { symbol: e } });
    },
    getExpiredBonus(e) {
      return j.get(W.EXPIRED_BONUS, { query: e });
    },
  },
  kn = {
    getContractOrder(e) {
      return j.get(W.DOWNLOAD_CONTRACT_ORDER, { query: e });
    },
    getContractOrderV2(e) {
      return j.get(W.DOWNLOAD_CONTRACT_ORDER_V2, { query: e });
    },
    getContractTrade(e) {
      return j.get(W.DOWNLOAD_CONTRACT_TRADE, { query: e });
    },
    getContractTradeV2(e) {
      return j.get(W.DOWNLOAD_CONTRACT_TRADE_V2, { query: e });
    },
    getSpotOrder(e) {
      return j.get(W.DOWNLOAD_SPOT_ORDER, {
        query: e,
        formatter(t) {
          const { total: n, rows: r } = t;
          return (
            r.forEach((s) => {
              (s.time = Le.formatUTCDateTime(s.createTimeNs * 1e-6)),
                delete s.createTimeNs;
            }),
            { total: n, rows: r }
          );
        },
      });
    },
    getSpotTrades(e) {
      return j.get(W.DOWNLOAD_SPOT_TRADES, {
        query: e,
        formatter(t) {
          const { total: n, rows: r } = t;
          return (
            r.forEach((s) => {
              (s.time = Le.formatUTCDateTime(s.transactTimeNs * 1e-6)),
                delete s.transactTimeNs;
            }),
            { total: n, rows: r }
          );
        },
      });
    },
    getWalletDetails(e) {
      return j.get(W.DOWNLOAD_WALLET_DETAILS, {
        query: e,
        formatter(t) {
          const { total: n, rows: r } = t;
          return (
            r.forEach((s) => {
              (s.time = Le.formatUTCDateTime(s.transactTimeNs * 1e-6)),
                delete s.transactTimeNs;
            }),
            { total: n, rows: r }
          );
        },
      });
    },
    getDeposit(e) {
      return j.get(W.DOWNLOAD_DEPOSIT, {
        query: e,
        formatter(t) {
          const { total: n, rows: r } = t;
          return (
            r.forEach((s) => {
              (s.time = Le.formatUTCDateTime(s.createdAt)), delete s.createdAt;
            }),
            { total: n, rows: r }
          );
        },
      });
    },
    getWithdraw(e) {
      return j.get(W.DOWNLOAD_WITHDRAW, {
        query: e,
        formatter(t) {
          const { total: n, rows: r } = t;
          return (
            r.forEach((s) => {
              (s.time = Le.formatUTCDateTime(s.submitedAt)),
                delete s.submitedAt;
            }),
            { total: n, rows: r }
          );
        },
      });
    },
    getOfflineDownload(e) {
      return j.get(W.OFFLINE_DOWNLOAD_QUERY, { query: e });
    },
    getLimitCheckOfflineDownload(e) {
      return j.get(W.OFFLINE_DOWNLOAD_LIMIT_CHECK, { query: e });
    },
    createOfflineDownload(e) {
      return j.post(W.OFFLINE_DOWNLOAD_CREATE, { params: e });
    },
    getKolClientExport(e) {
      return j.get(W.KOL_CLIENT_EXPORT_QUERY, { query: e });
    },
    getKolClientCsv(e) {
      return j.get(W.KOL_CLIENT_EXPORT_CSV, { query: e, responseType: "blob" });
    },
    creatKolClientFile(e) {
      return j.post(W.KOL_CLIENT_EXPORT_APPLY, { params: e });
    },
  },
  $s = {
    getOperationBannersLogout(e) {
      return j.get(W.ACTIVITY_CONTENTS_VIEW_LOGOUT, { query: e });
    },
    getOperationBannersLogin(e) {
      return j.get(W.ACTIVITY_CONTENTS_VIEW_LOGIN, { query: e });
    },
    getDialogDataList(e) {
      return j.get(W.INNER_DIALOG, { query: e });
    },
    getTestDialogDataList(e) {
      return j.get(W.INNER_DIALOG_TESTING, { query: e });
    },
  },
  cn = is(),
  ks = new ve([]),
  Nc = ks.pipe(
    lt((e) => e.length > 0),
    ye(Bc),
    ye(Vc)
  ),
  Hs = new ve(!1),
  $r = new ve(!1),
  Ei = new Ce(),
  Mc = $t([Hs, Nc, $r]).pipe(ye($c), ye(Uc), ye(Hc), lt(Boolean));
$t([Ei.pipe(ot(Ge)), Ds])
  .pipe(Re(([e, t]) => (t ? Promise.all([Lc(e), Fc(e)]) : [])))
  .subscribe(([e = {}, t]) => {
    if (t && t.rows) {
      ks.next([...fs(e, 0), ...fs(t, 1)]);
      return;
    }
    ks.next(fs(e, 0));
  });
async function Lc(e) {
  const { data: t, error: n } = await $s.getDialogDataList(e);
  if (t) return t;
  if (n) return oe.send("toast", "error", n), {};
}
async function Fc(e) {
  const { data: t, error: n } = await $s.getTestDialogDataList(e);
  if (t) return t;
  if (n) return oe.send("toast", "error", n), {};
}
function fs(e, t) {
  const { rows: n = [] } = e;
  return n.map((r) => {
    const { plan: s, config: o } = r,
      { fatigueRule: a, priority: i, ...l } = o || {};
    return {
      status: s.status,
      platformList: s.platformList,
      createTime: l.createTime,
      startTime: s.startTime,
      endTime: s.endTime,
      platformAllPage: s.platformRoute.web === "ALL",
      platformWebRoutes:
        (s.platformRoute.web && s.platformRoute.web.split(",")) || [],
      fatigueType: a.type === "ONCE" ? 1 : 2,
      fatigueCount: a.totalFatigue,
      fatigueIntervalSeconds: a.fatigueInterval * 6e4,
      currentCount: 0,
      priority: i === "LOW" ? -1 : i === "MID" ? 0 : 1,
      templateType: l.templateType === "DIALOG" ? "image" : "text",
      templateKey: `${t ? "tt" : "t"}${l.groupId}`,
      webPic: l.webPic,
      appPic: l.appPic,
      btn1: l.btn1,
      btn2: l.btn2,
      title: l.title,
      content: l.content,
      testing: !!t,
    };
  });
}
function Vc(e) {
  return e && e.length > 0
    ? (e.reduce(
        (t, n) => (
          t.hasOwnProperty(n.templateKey) ||
            (t[n.templateKey] = { count: 0, time: 0 }),
          t
        ),
        cn
      ),
      e)
    : [];
}
function Bc(e) {
  const t = is();
  if (!e || e.length === 0) return e;
  const n = e.reduce((s, o) => ((s[o.templateKey] = !0), s), {}),
    r = Object.keys(t).reduce((s, o) => (n[o] && (s[o] = t[o]), s), {});
  return Ys(r), e;
}
function Uc([e, t, n]) {
  return [
    e.filter((s) => {
      const o = cn[s.templateKey];
      return o.count === 0
        ? !0
        : n - o.time - s.fatigueIntervalSeconds >= 0 &&
            cn.hasOwnProperty(s.templateKey) &&
            o.count < s.fatigueCount;
    }),
    t,
    n,
  ];
}
function $c([, e, t]) {
  const n = new Date().valueOf(),
    r = e.filter((s) => (s.testing ? !0 : s.startTime <= n && s.endTime >= n));
  return Kc(r, n), [r, t, n];
}
function Hc([e, t, n]) {
  return e && e.length > 0 && !t ? [e, Yc, Wc(n)] : [];
}
function Yc(e, t) {
  const n = e.filter((s) => s.platformAllPage || Qc(t, s.platformWebRoutes));
  return n.length <= 0 ? null : qc(n)[0];
}
function Qc(e, t = []) {
  return t.filter((n) => (n === "/" ? e === n : e.startsWith(n))).length > 0;
}
function Wc(e) {
  return function (t) {
    jc(t.templateKey, e), zc(t.templateKey, e);
  };
}
function qc(e) {
  return e.sort((t, n) =>
    t.priority !== n.priority
      ? t.priority > n.priority
        ? -1
        : 0
      : t.createTime > n.createTime
      ? -1
      : 0
  );
}
function Kc(e, t) {
  const n = _o(t),
    r = e.reduce((s, o) => {
      if (o.fatigueType === 2) {
        const a = cn[o.templateKey].time,
          i = _o(a);
        a > 0 &&
          Math.ceil(n - i) > 0 &&
          a + o.fatigueIntervalSeconds < t &&
          s.push(o.templateKey);
      }
      return s;
    }, []);
  if (r.length > 0) {
    const s = is();
    r.forEach((o) => {
      (cn[o].count = 0), (cn[o].time = t), (s[o].count = 0), (s[o].time = t);
    }),
      Ys(s);
  }
}
function _o(e) {
  const t = Le.formatDate(e);
  return Number(t.replace(/-/g, ""));
}
function jc(e, t) {
  if (cn.hasOwnProperty(e)) {
    const n = cn[e];
    (cn[e].count = n.count + 1), (cn[e].time = t);
  }
}
function is() {
  return Bn.isServer
    ? {}
    : (localStorage.getItem("dialog_count") || "").split(",").reduce((t, n) => {
        const [r, s] = n.split(":");
        if (r) {
          const [o, a] = (s || "").split("_");
          t[r] = { count: Number(o || 0), time: Number(a || 0) };
        }
        return t;
      }, {});
}
function zc(e, t) {
  const n = cn[e],
    r = is();
  (r[e] = { count: n.count, time: t }), Ys(r);
}
function Ys(e) {
  const t = Object.keys(e)
    .map((n) => `${n}:${e[n].count}_${e[n].time}`)
    .join(",");
  localStorage.setItem("dialog_count", t);
}
function vo(e) {
  let t, n;
  return (
    (t = new Bt({
      props: {
        class: "wsn avg",
        newRadius: !0,
        type: "primary",
        style: `margin-left:0px;flex:1;color:${e[0].btn1.btnTextColor};background-color:${e[0].btn1.btnColor};border:1px solid ${e[0].btn1.btnBorderColor}`,
        $$slots: { default: [Jc] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("click", function () {
      Qt(
        e[0].btn1.buttonAction === "CLOSE"
          ? e[2](e[0].btn1, 1)
          : e[3](e[0].btn1, 1)
      ) &&
        (e[0].btn1.buttonAction === "CLOSE"
          ? e[2](e[0].btn1, 1)
          : e[3](e[0].btn1, 1)
        ).apply(this, arguments);
    }),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        e = r;
        const o = {};
        s & 1 &&
          (o.style = `margin-left:0px;flex:1;color:${e[0].btn1.btnTextColor};background-color:${e[0].btn1.btnColor};border:1px solid ${e[0].btn1.btnBorderColor}`),
          s & 65 && (o.$$scope = { dirty: s, ctx: e }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function Jc(e) {
  let t = e[0].btn1.btnTitle + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0].btn1.btnTitle + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function bo(e) {
  let t, n;
  return (
    (t = new Bt({
      props: {
        class: "wsn avg",
        newRadius: !0,
        type: "primary",
        style: `margin-left:0px;flex:1;color:${e[0].btn2.btnTextColor};background-color:${e[0].btn2.btnColor};border:1px solid ${e[0].btn2.btnBorderColor}`,
        $$slots: { default: [Xc] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("click", function () {
      Qt(
        e[0].btn2.buttonAction === "CLOSE"
          ? e[2](e[0].btn2, 2)
          : e[3](e[0].btn2, 2)
      ) &&
        (e[0].btn2.buttonAction === "CLOSE"
          ? e[2](e[0].btn2, 2)
          : e[3](e[0].btn2, 2)
        ).apply(this, arguments);
    }),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        e = r;
        const o = {};
        s & 1 &&
          (o.style = `margin-left:0px;flex:1;color:${e[0].btn2.btnTextColor};background-color:${e[0].btn2.btnColor};border:1px solid ${e[0].btn2.btnBorderColor}`),
          s & 65 && (o.$$scope = { dirty: s, ctx: e }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function Xc(e) {
  let t = e[0].btn2.btnTitle + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0].btn2.btnTitle + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function Zc(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i,
    l,
    c,
    u,
    d,
    m,
    g,
    v,
    _,
    I,
    C,
    k,
    D,
    E = e[0].btn1 && vo(e),
    b = e[0].btn2 && bo(e);
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = y("div")),
        (s = y("div")),
        (o = y("i")),
        (a = B("")),
        (i = A()),
        (l = y("div")),
        (c = y("img")),
        (d = A()),
        (m = y("div")),
        (g = y("div")),
        E && E.c(),
        (v = A()),
        b && b.c(),
        this.h();
    },
    l(P) {
      t = T(P, "DIV", { class: !0 });
      var R = w(t);
      n = T(R, "DIV", { class: !0 });
      var N = w(n);
      r = T(N, "DIV", { class: !0 });
      var S = w(r);
      s = T(S, "DIV", { class: !0 });
      var H = w(s);
      o = T(H, "I", { class: !0 });
      var F = w(o);
      (a = U(F, "")),
        F.forEach(h),
        H.forEach(h),
        (i = O(S)),
        (l = T(S, "DIV", { class: !0 }));
      var G = w(l);
      (c = T(G, "IMG", { class: !0, src: !0, alt: !0 })),
        G.forEach(h),
        (d = O(S)),
        (m = T(S, "DIV", { class: !0 }));
      var re = w(m);
      g = T(re, "DIV", { class: !0 });
      var x = w(g);
      E && E.l(x),
        (v = O(x)),
        b && b.l(x),
        x.forEach(h),
        re.forEach(h),
        S.forEach(h),
        N.forEach(h),
        R.forEach(h),
        this.h();
    },
    h() {
      p(o, "class", "close iconfont pa ml24 lh12 f20 T4 cp svelte-gsnp2o"),
        p(s, "class", "df jcsb"),
        p(c, "class", "image db svelte-gsnp2o"),
        st(c.src, (u = `${Dn.STATIC_URL}${e[0].webPic}`)) || p(c, "src", u),
        p(c, "alt", "popup image"),
        p(l, "class", "ovh br12"),
        p(g, "class", "btns df fww ph24 mt24 svelte-gsnp2o"),
        p(m, "class", "btns-container pa svelte-gsnp2o"),
        p(r, "class", "content pr B1 svelte-gsnp2o"),
        p(n, "class", "container svelte-gsnp2o"),
        p(t, "class", "modal-mask svelte-gsnp2o");
    },
    m(P, R) {
      M(P, t, R),
        f(t, n),
        f(n, r),
        f(r, s),
        f(s, o),
        f(o, a),
        f(r, i),
        f(r, l),
        f(l, c),
        f(r, d),
        f(r, m),
        f(m, g),
        E && E.m(g, null),
        f(g, v),
        b && b.m(g, null),
        (C = !0),
        k || ((D = Ie(o, "click", e[1])), (k = !0));
    },
    p(P, [R]) {
      (!C || (R & 1 && !st(c.src, (u = `${Dn.STATIC_URL}${P[0].webPic}`)))) &&
        p(c, "src", u),
        P[0].btn1
          ? E
            ? (E.p(P, R), R & 1 && Y(E, 1))
            : ((E = vo(P)), E.c(), Y(E, 1), E.m(g, v))
          : E &&
            (Mt(),
            q(E, 1, 1, () => {
              E = null;
            }),
            Lt()),
        P[0].btn2
          ? b
            ? (b.p(P, R), R & 1 && Y(b, 1))
            : ((b = bo(P)), b.c(), Y(b, 1), b.m(g, null))
          : b &&
            (Mt(),
            q(b, 1, 1, () => {
              b = null;
            }),
            Lt());
    },
    i(P) {
      C ||
        (Y(E),
        Y(b),
        Qn(() => {
          I && I.end(1), (_ = Rs(t, cr, { duration: 100 })), _.start();
        }),
        (C = !0));
    },
    o(P) {
      q(E),
        q(b),
        _ && _.invalidate(),
        (I = As(t, cr, { duration: 100 })),
        (C = !1);
    },
    d(P) {
      P && h(t), E && E.d(), b && b.d(), P && I && I.end(), (k = !1), D();
    },
  };
}
function Gc(e, t, n) {
  let { content: r = "" } = t;
  const s = Ut();
  function o() {
    l();
  }
  function a(c, u) {
    return function () {
      l(),
        an.track(`sensors_image_dialog_button${u}_click`, {
          ui_position: "sensors-date-popups",
          $element_content: c.btnTitle,
        });
    };
  }
  function i(c, u) {
    return function () {
      window.open(c.webLink, "_blank"),
        l(),
        an.track(`sensors_image_dialog_button${u}_click`, {
          ui_position: "sensors-date-popups",
          $element_content: c.btnTitle,
        });
    };
  }
  function l() {
    s("close"), $r.next(!1);
  }
  return (
    (e.$$set = (c) => {
      "content" in c && n(0, (r = c.content));
    }),
    [r, o, a, i]
  );
}
class xc extends He {
  constructor(t) {
    super(), Ye(this, t, Gc, Zc, Qe, { content: 0 });
  }
}
function yo(e) {
  let t, n;
  return (
    (t = new Bt({
      props: {
        class: "mt0 wsn avg",
        newRadius: !0,
        type: "primary",
        style: `margin-left:0px;flex:1;color:${e[0].btn1.btnTextColor};background-color:${e[0].btn1.btnColor};border:1px solid ${e[0].btn1.btnBorderColor}`,
        $$slots: { default: [eu] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("click", function () {
      Qt(
        e[0].btn1.buttonAction === "CLOSE"
          ? e[2](e[0].btn1, 1)
          : e[3](e[0].btn1, 1)
      ) &&
        (e[0].btn1.buttonAction === "CLOSE"
          ? e[2](e[0].btn1, 1)
          : e[3](e[0].btn1, 1)
        ).apply(this, arguments);
    }),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        e = r;
        const o = {};
        s & 1 &&
          (o.style = `margin-left:0px;flex:1;color:${e[0].btn1.btnTextColor};background-color:${e[0].btn1.btnColor};border:1px solid ${e[0].btn1.btnBorderColor}`),
          s & 65 && (o.$$scope = { dirty: s, ctx: e }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function eu(e) {
  let t = e[0].btn1.btnTitle + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0].btn1.btnTitle + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function To(e) {
  let t, n;
  return (
    (t = new Bt({
      props: {
        class: "wsn avg",
        newRadius: !0,
        type: "primary",
        style: `margin-left:0px;flex:1;color:${e[0].btn2.btnTextColor};background-color:${e[0].btn2.btnColor};border:1px solid ${e[0].btn2.btnBorderColor}`,
        $$slots: { default: [tu] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("click", function () {
      Qt(
        e[0].btn2.buttonAction === "CLOSE"
          ? e[2](e[0].btn2, 2)
          : e[3](e[0].btn2, 2)
      ) &&
        (e[0].btn2.buttonAction === "CLOSE"
          ? e[2](e[0].btn2, 2)
          : e[3](e[0].btn2, 2)
        ).apply(this, arguments);
    }),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        e = r;
        const o = {};
        s & 1 &&
          (o.style = `margin-left:0px;flex:1;color:${e[0].btn2.btnTextColor};background-color:${e[0].btn2.btnColor};border:1px solid ${e[0].btn2.btnBorderColor}`),
          s & 65 && (o.$$scope = { dirty: s, ctx: e }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function tu(e) {
  let t = e[0].btn2.btnTitle + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0].btn2.btnTitle + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function nu(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0].title + "",
    i,
    l,
    c,
    u,
    d,
    m,
    g,
    v = e[0].content + "",
    _,
    I,
    C,
    k,
    D,
    E,
    b,
    P,
    R = e[0].btn1 && yo(e),
    N = e[0].btn2 && To(e);
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = y("div")),
        (s = y("div")),
        (o = y("div")),
        (i = B(a)),
        (l = A()),
        (c = y("i")),
        (u = B("")),
        (d = A()),
        (m = y("div")),
        (g = y("div")),
        (_ = A()),
        (I = y("div")),
        R && R.c(),
        (C = A()),
        N && N.c(),
        this.h();
    },
    l(S) {
      t = T(S, "DIV", { class: !0 });
      var H = w(t);
      n = T(H, "DIV", { class: !0 });
      var F = w(n);
      r = T(F, "DIV", { class: !0 });
      var G = w(r);
      s = T(G, "DIV", { class: !0 });
      var re = w(s);
      o = T(re, "DIV", { class: !0 });
      var x = w(o);
      (i = U(x, a)), x.forEach(h), (l = O(re)), (c = T(re, "I", { class: !0 }));
      var ae = w(c);
      (u = U(ae, "")),
        ae.forEach(h),
        re.forEach(h),
        (d = O(G)),
        (m = T(G, "DIV", { class: !0 }));
      var V = w(m);
      g = T(V, "DIV", { class: !0 });
      var ee = w(g);
      ee.forEach(h), V.forEach(h), (_ = O(G)), (I = T(G, "DIV", { class: !0 }));
      var ie = w(I);
      R && R.l(ie),
        (C = O(ie)),
        N && N.l(ie),
        ie.forEach(h),
        G.forEach(h),
        F.forEach(h),
        H.forEach(h),
        this.h();
    },
    h() {
      p(o, "class", "title lh24 f20 fw3 T1 svelte-1ia2d9m"),
        p(c, "class", "close iconfont pa ml24 lh12 f20 T4 cp svelte-1ia2d9m"),
        p(s, "class", "df jcsb"),
        p(g, "class", "text lh20 f14 T3 svelte-1ia2d9m"),
        p(m, "class", "mt12 ovh"),
        p(I, "class", "btns df fww pt24 svelte-1ia2d9m"),
        p(r, "class", "content pr B1 br12 pv24 ph24 svelte-1ia2d9m"),
        p(n, "class", "container svelte-1ia2d9m"),
        p(t, "class", "modal-mask svelte-1ia2d9m");
    },
    m(S, H) {
      M(S, t, H),
        f(t, n),
        f(n, r),
        f(r, s),
        f(s, o),
        f(o, i),
        f(s, l),
        f(s, c),
        f(c, u),
        f(r, d),
        f(r, m),
        f(m, g),
        (g.innerHTML = v),
        f(r, _),
        f(r, I),
        R && R.m(I, null),
        f(I, C),
        N && N.m(I, null),
        (E = !0),
        b || ((P = Ie(c, "click", e[1])), (b = !0));
    },
    p(S, [H]) {
      (!E || H & 1) && a !== (a = S[0].title + "") && se(i, a),
        (!E || H & 1) && v !== (v = S[0].content + "") && (g.innerHTML = v),
        S[0].btn1
          ? R
            ? (R.p(S, H), H & 1 && Y(R, 1))
            : ((R = yo(S)), R.c(), Y(R, 1), R.m(I, C))
          : R &&
            (Mt(),
            q(R, 1, 1, () => {
              R = null;
            }),
            Lt()),
        S[0].btn2
          ? N
            ? (N.p(S, H), H & 1 && Y(N, 1))
            : ((N = To(S)), N.c(), Y(N, 1), N.m(I, null))
          : N &&
            (Mt(),
            q(N, 1, 1, () => {
              N = null;
            }),
            Lt());
    },
    i(S) {
      E ||
        (Y(R),
        Y(N),
        Qn(() => {
          D && D.end(1), (k = Rs(t, cr, { duration: 100 })), k.start();
        }),
        (E = !0));
    },
    o(S) {
      q(R),
        q(N),
        k && k.invalidate(),
        (D = As(t, cr, { duration: 100 })),
        (E = !1);
    },
    d(S) {
      S && h(t), R && R.d(), N && N.d(), S && D && D.end(), (b = !1), P();
    },
  };
}
function ru(e, t, n) {
  let { content: r = "" } = t;
  const s = Ut();
  function o() {
    l();
  }
  function a(c, u) {
    return function () {
      l(),
        an.track(`sensors_image_dialog_button${u}_click`, {
          ui_position: "sensors-date-popups",
          $element_content: c.btnTitle,
        });
    };
  }
  function i(c, u) {
    return function () {
      window.open(c.webLink, "_blank"),
        an.track(`sensors_image_dialog_button${u}_click`, {
          ui_position: "sensors-date-popups",
          $element_content: c.btnTitle,
        }),
        l();
    };
  }
  function l() {
    s("close"), $r.next(!1);
  }
  return (
    (e.$$set = (c) => {
      "content" in c && n(0, (r = c.content));
    }),
    [r, o, a, i]
  );
}
class su extends He {
  constructor(t) {
    super(), Ye(this, t, ru, nu, Qe, { content: 0 });
  }
}
const ou = {
    getCsRobotInfo(e) {
      return j.get(W.IM_ROBOT_INFO, { query: e });
    },
    csEvaluation(e) {
      return j.post(W.IM_CS_EVALUATION, { params: e });
    },
  },
  au = { name: "AdaZAW", widget: null },
  Co = new ve(!1),
  iu = new Ce(),
  Pr = new ve(null);
iu.pipe(Re(wi), lt(Boolean)).subscribe();
async function lu() {
  const e = Pr.getValue();
  return e || (await wi());
}
async function wi() {
  const e = ss.getValue(),
    { data: t, error: n } = await ou.getCsRobotInfo({
      bid: Bl(),
      user: e.userId,
    });
  return n && oe.send("toast", "error", n), t && Pr.next(t), t || au;
}
const Ii = "ADA_USER",
  cu = {
    init(e = "en", t, n = null) {
      if (window.adaEmbed) return;
      window.adaSettings = { language: e };
      const r = document.createElement("script");
      (r.id = "__ada"),
        (r.defer = !0),
        (r.src = "//static.ada.support/embed2.js"),
        r.setAttribute("data-handle", "phemex-gen"),
        (r.type = "text/javascript"),
        (r.onload = function () {
          t();
        }),
        document.head.appendChild(r);
    },
    changeUserInfo(e, t) {
      const n = uu();
      if (e.userId > 0) {
        const r = { name: e.nickName, email: e.email, tags: t };
        wo(e.userId),
          window.adaEmbed.reset({
            language: e.lang,
            metaFields: r,
            resetChatHistory: n != e.userId,
          });
        return;
      }
      n && (wo(""), window.adaEmbed.deleteHistory());
    },
    async openChat() {
      await Eo("open");
    },
    async hideChat() {
      await Eo("hide");
    },
  };
async function Eo(e) {
  const { isChatOpen: t } = await window.adaEmbed.getInfo();
  ((e === "open" && !t) || (e === "hide" && t)) && window.adaEmbed.toggle();
}
function uu() {
  return localStorage.getItem(Ii);
}
function wo(e) {
  localStorage.setItem(Ii, e);
}
const Io = { IpConfig: du },
  Do = new ve(new Map()),
  fu = {
    init(e = "en", t = null, n = null) {
      if (window.zE) return;
      const r = document.createElement("script");
      /*(r.id = "ze-snippet"),
        (r.src = "//static.zdassets.com/ekr/snippet.js?key=" + n.widget),
        (r.defer = !0),
        (r.type = "text/javascript"),
        (r.onload = function () {
          hu(), t && t(), ko(e);
        }),
        document.head.appendChild(r),
        (window.zESettings = {
          webWidget: {
            offset: {},
            chat: { connectOnPageLoad: !1, prechatForm: {} },
          },
        }),
        document.head.appendChild(r);*/
    },
    changeUserInfo(e, t) {
      if (e.userId > 0) {
        ko(e.lang),
          window.zE("messenger:set", "conversationTags", [...t, So()]);
        return;
      }
      window.zE("messenger:set", "conversationTags", [So()]);
    },
    async openChat() {
      window.zE("messenger", "open");
    },
    async hideChat() {
      window.zE("messenger", "close");
    },
    changeExpandInfo(e, t, n) {
      Io.hasOwnProperty(e) && Io[e](t, n);
    },
  };
function du(e, t) {
  if (e != null && e.countryCode) {
    const n = Do.getValue();
    n.set(t.countryCodeFieldId, {
      id: t.countryCodeFieldId,
      value: e.countryCode,
    }),
      window.zE("messenger:set", "conversationFields", Array.from(n.values())),
      Do.next(n);
  }
}
function ko(e) {
  e && window.zE("messenger:set", "locale", e);
}
function So() {
  return "website_" + (Ec || "global").toLowerCase();
}
const Po = "create_zendesk_time";
function hu() {
  sessionStorage.getItem(Po) ||
    (window.zE("messenger", "logoutUser"),
    sessionStorage.setItem(Po, `${new Date().valueOf()}`));
}
const ds = {
  init(e, t = "en", n) {
    const r = Vr(e);
    r && r.init(t, n, e);
  },
  changeUserInfo(e, t, n) {
    const r = Pr.getValue(),
      s = Vr(r);
    s && s.changeUserInfo(e, pu(t, n));
  },
  async openChat() {
    const e = Pr.getValue(),
      t = Vr(e);
    t && t.openChat();
  },
  async hideChat() {
    const e = Pr.getValue(),
      t = Vr(e);
    t && t.hideChat();
  },
  async changeExpandInfo(e, t) {
    const n = Pr.getValue(),
      r = Vr(n);
    r && r != null && r.changeExpandInfo && r.changeExpandInfo(e, t, n);
  },
};
function Vr(e) {
  if (e) return e.name === "AdaZAW" ? cu : e.name === "PhemexBot" ? fu : null;
}
function pu(e, t) {
  const n = "VIP: " + t;
  if (!e) return [n];
  const r = [
      "uid",
      "kycCountry",
      "ptStake",
      "apiUser",
      "bonusHunter",
      "referralId",
      "kol",
      "registerDate",
      "hasRecentTrade",
      "ka",
    ],
    s = Object.keys(e)
      .map((o) =>
        r.includes(o) && e[o]
          ? typeof e[o] == "boolean"
            ? o
            : `${o}: ${e[o]}`
          : ""
      )
      .filter(Boolean);
  return [n, ...s];
}
const Di = new ve(0),
  Qs = new ve([]),
  ki = new ve({}),
  gu = new ve({}),
  Gr = new ve({}),
  Jr = new ve(),
  Si = new Ce().pipe(Re(() => Yn.getBonus().toRestState())),
  Pi = new Ce().pipe(Re(() => Yn.getCountries().toRestState())),
  Ri = new Ce().pipe(Re(() => Yn.getCountryRegions().toRestState())),
  mu = new Ce().pipe(Re(() => Yn.getAllKycSummary().toRestState()));
Si.subscribe((e) => {
  const { data: t, error: n } = e;
  t && Di.next(t.bonusAmount), n && oe.send("toast", "error", n);
});
Pi.subscribe((e) => {
  const { data: t, error: n } = e;
  t &&
    Qs.next(
      t.rows.map((r) => ({
        text: r.fullName,
        value: r.simpleNameThree,
        countryCode: r.phoneNoPrefix,
      }))
    ),
    n && oe.send("toast", "error", n);
});
Ri.subscribe((e) => {
  const { data: t, error: n } = e;
  t && ki.next(t.rows), n && oe.send("toast", "error", n);
});
mu.subscribe((e) => {
  const { data: t, error: n } = e;
  t && gu.next(t), n && oe.send("toast", "error", n);
});
async function _u() {
  const { data: e, error: t } = await Yn.getUserBasicKycInfo();
  return e
    ? (Gr.next(e), e)
    : (t && oe.send("toast", "error", t), Gr.next({}), {});
}
const vu = (e) => ({}),
  Ro = (e) => ({});
function Ao(e, t, n) {
  const r = e.slice();
  return (r[22] = t[n]), r;
}
const bu = (e) => ({ option: e & 8 }),
  Oo = (e) => ({ option: e[22] }),
  yu = (e) => ({ displayText: e & 512 }),
  No = (e) => ({ displayText: e[9] });
function Tu(e) {
  let t, n;
  return {
    c() {
      (t = y("span")), (n = B(e[9])), this.h();
    },
    l(r) {
      t = T(r, "SPAN", { class: !0 });
      var s = w(t);
      (n = U(s, e[9])), s.forEach(h), this.h();
    },
    h() {
      p(t, "class", "f1 cp wp100 cb ml4 wsn ooo svelte-1o622qb");
    },
    m(r, s) {
      M(r, t, s), f(t, n);
    },
    p(r, s) {
      s & 512 && se(n, r[9]);
    },
    d(r) {
      r && h(t);
    },
  };
}
function Cu(e) {
  let t,
    n = e[22].text + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "f1 cp wp100 cb ml4 wsn ooo svelte-1o622qb"),
        X(t, "active", e[9] === e[22].text);
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o & 8 && n !== (n = s[22].text + "") && se(r, n),
        o & 520 && X(t, "active", s[9] === s[22].text);
    },
    d(s) {
      s && h(t);
    },
  };
}
function Mo(e) {
  let t, n, r, s;
  const o = e[16].item,
    a = pn(o, e, e[15], Oo),
    i = a || Cu(e);
  return {
    c() {
      (t = y("li")), i && i.c(), this.h();
    },
    l(l) {
      t = T(l, "LI", { class: !0, style: !0 });
      var c = w(t);
      i && i.l(c), c.forEach(h), this.h();
    },
    h() {
      p(t, "class", "option T2 cp svelte-1o622qb"),
        p(t, "style", e[7]),
        X(t, "disabled", e[22].disabled);
    },
    m(l, c) {
      M(l, t, c),
        i && i.m(t, null),
        (n = !0),
        r ||
          ((s = Ie(t, "click", function () {
            Qt(e[11](e[22])) && e[11](e[22]).apply(this, arguments);
          })),
          (r = !0));
    },
    p(l, c) {
      (e = l),
        a
          ? a.p &&
            (!n || c & 32776) &&
            gn(a, o, e, e[15], n ? _n(o, e[15], c, bu) : mn(e[15]), Oo)
          : i && i.p && (!n || c & 520) && i.p(e, n ? c : -1),
        (!n || c & 128) && p(t, "style", e[7]),
        (!n || c & 8) && X(t, "disabled", e[22].disabled);
    },
    i(l) {
      n || (Y(i, l), (n = !0));
    },
    o(l) {
      q(i, l), (n = !1);
    },
    d(l) {
      l && h(t), i && i.d(l), (r = !1), s();
    },
  };
}
function Eu(e) {
  let t, n, r, s, o, a, i, l, c, u, d, m;
  const g = e[16].displayItem,
    v = pn(g, e, e[15], No),
    _ = v || Tu(e);
  let I = e[3],
    C = [];
  for (let b = 0; b < I.length; b += 1) C[b] = Mo(Ao(e, I, b));
  const k = (b) =>
      q(C[b], 1, 1, () => {
        C[b] = null;
      }),
    D = e[16].action,
    E = pn(D, e, e[15], Ro);
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        _ && _.c(),
        (r = A()),
        (s = y("i")),
        (o = B("")),
        (a = A()),
        (i = y("ul"));
      for (let b = 0; b < C.length; b += 1) C[b].c();
      (l = A()), E && E.c(), this.h();
    },
    l(b) {
      t = T(b, "DIV", { class: !0, style: !0 });
      var P = w(t);
      n = T(P, "DIV", { class: !0 });
      var R = w(n);
      _ && _.l(R), (r = O(R)), (s = T(R, "I", { class: !0 }));
      var N = w(s);
      (o = U(N, "")),
        N.forEach(h),
        R.forEach(h),
        (a = O(P)),
        (i = T(P, "UL", { class: !0 }));
      var S = w(i);
      for (let H = 0; H < C.length; H += 1) C[H].l(S);
      (l = O(S)), E && E.l(S), S.forEach(h), P.forEach(h), this.h();
    },
    h() {
      p(s, "class", "iconfont arrow svelte-1o622qb"),
        X(s, "animation", e[8]),
        p(n, "class", "df aic jcsb"),
        p(i, "class", "pa sv svelte-1o622qb"),
        X(i, "dropdown", e[8]),
        p(t, "class", (c = "wrap pr T2 " + e[0] + " svelte-1o622qb")),
        p(t, "style", e[1]),
        X(t, "underline", e[6] === "underline"),
        X(t, "border", e[6] === "border"),
        X(t, "no-border", e[6] === "no-border"),
        X(t, "disabled", e[2]),
        X(t, "white", e[4]),
        X(t, "before", e[5]);
    },
    m(b, P) {
      M(b, t, P),
        f(t, n),
        _ && _.m(n, null),
        f(n, r),
        f(n, s),
        f(s, o),
        f(t, a),
        f(t, i);
      for (let R = 0; R < C.length; R += 1) C[R].m(i, null);
      f(i, l),
        E && E.m(i, null),
        (u = !0),
        d || ((m = [Ie(n, "click", e[10]), Ie(t, "click", e[17])]), (d = !0));
    },
    p(b, [P]) {
      if (
        (v
          ? v.p &&
            (!u || P & 33280) &&
            gn(v, g, b, b[15], u ? _n(g, b[15], P, yu) : mn(b[15]), No)
          : _ && _.p && (!u || P & 512) && _.p(b, u ? P : -1),
        (!u || P & 256) && X(s, "animation", b[8]),
        P & 35464)
      ) {
        I = b[3];
        let R;
        for (R = 0; R < I.length; R += 1) {
          const N = Ao(b, I, R);
          C[R]
            ? (C[R].p(N, P), Y(C[R], 1))
            : ((C[R] = Mo(N)), C[R].c(), Y(C[R], 1), C[R].m(i, l));
        }
        for (Mt(), R = I.length; R < C.length; R += 1) k(R);
        Lt();
      }
      E &&
        E.p &&
        (!u || P & 32768) &&
        gn(E, D, b, b[15], u ? _n(D, b[15], P, vu) : mn(b[15]), Ro),
        (!u || P & 256) && X(i, "dropdown", b[8]),
        (!u ||
          (P & 1 && c !== (c = "wrap pr T2 " + b[0] + " svelte-1o622qb"))) &&
          p(t, "class", c),
        (!u || P & 2) && p(t, "style", b[1]),
        (!u || P & 65) && X(t, "underline", b[6] === "underline"),
        (!u || P & 65) && X(t, "border", b[6] === "border"),
        (!u || P & 65) && X(t, "no-border", b[6] === "no-border"),
        (!u || P & 5) && X(t, "disabled", b[2]),
        (!u || P & 17) && X(t, "white", b[4]),
        (!u || P & 33) && X(t, "before", b[5]);
    },
    i(b) {
      if (!u) {
        Y(_, b);
        for (let P = 0; P < I.length; P += 1) Y(C[P]);
        Y(E, b), (u = !0);
      }
    },
    o(b) {
      q(_, b), (C = C.filter(Boolean));
      for (let P = 0; P < C.length; P += 1) q(C[P]);
      q(E, b), (u = !1);
    },
    d(b) {
      b && h(t), _ && _.d(b), or(C, b), E && E.d(b), (d = !1), Hr(m);
    },
  };
}
const hs = Ul(null);
let wu = 0;
function Iu(e, t, n) {
  let { $$slots: r = {}, $$scope: s } = t,
    { class: o = "" } = t,
    { style: a = "" } = t,
    { value: i = void 0 } = t,
    { disabled: l = !1 } = t,
    { options: c = null } = t,
    { white: u = !1 } = t,
    { before: d = !1 } = t,
    { placeholder: m = "" } = t,
    { label: g = "" } = t,
    { type: v = "underline" } = t,
    { itemStyle: _ = "height: 38px;line-height: 38px;" } = t;
  const I = Ut(),
    C = wu++;
  let k = !1,
    D = g;
  tt(
    () => (
      document.addEventListener("click", E),
      () => document.removeEventListener("click", E)
    )
  ),
    tt(() =>
      hs.subscribe((S) => {
        S !== C && E();
      })
    );
  function E() {
    n(8, (k = !1));
  }
  function b(S, H) {
    if (S.length < 1 || H === void 0) {
      n(9, (D = m));
      return;
    }
    const F = S.find((G) => G.value === H);
    if (F) {
      n(9, (D = g ? `${g}：${F.text}` : F.text));
      return;
    }
    n(9, (D = m));
  }
  function P(S) {
    S.stopPropagation(), !l && (n(8, (k = !k)), k && hs.set(C), I("click"));
  }
  function R(S) {
    return function (H) {
      if (S.disabled) {
        H.stopPropagation();
        return;
      }
      n(12, (i = S.value)),
        n(8, (k = !k)),
        k && hs.set(C),
        I("change", { value: i, option: S });
    };
  }
  function N(S) {
    nn.call(this, e, S);
  }
  return (
    (e.$$set = (S) => {
      "class" in S && n(0, (o = S.class)),
        "style" in S && n(1, (a = S.style)),
        "value" in S && n(12, (i = S.value)),
        "disabled" in S && n(2, (l = S.disabled)),
        "options" in S && n(3, (c = S.options)),
        "white" in S && n(4, (u = S.white)),
        "before" in S && n(5, (d = S.before)),
        "placeholder" in S && n(13, (m = S.placeholder)),
        "label" in S && n(14, (g = S.label)),
        "type" in S && n(6, (v = S.type)),
        "itemStyle" in S && n(7, (_ = S.itemStyle)),
        "$$scope" in S && n(15, (s = S.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 4104 && b(c, i);
    }),
    [o, a, l, c, u, d, v, _, k, D, P, R, i, m, g, s, r, N]
  );
}
class Ur extends He {
  constructor(t) {
    super(),
      Ye(this, t, Iu, Eu, Qe, {
        class: 0,
        style: 1,
        value: 12,
        disabled: 2,
        options: 3,
        white: 4,
        before: 5,
        placeholder: 13,
        label: 14,
        type: 6,
        itemStyle: 7,
      });
  }
}
const Du = (e) => ({}),
  Lo = (e) => ({});
function Fo(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i,
    l,
    c,
    u,
    d = e[12] && Vo(e);
  const m = e[26].content,
    g = pn(m, e, e[25], Lo);
  let v = !e[14] && Bo(e);
  return {
    c() {
      (t = y("div")),
        d && d.c(),
        (n = A()),
        (r = new Cl(!1)),
        (s = A()),
        g && g.c(),
        (o = A()),
        v && v.c(),
        this.h();
    },
    l(_) {
      t = T(_, "DIV", {
        class: !0,
        "data-popper-placement": !0,
        role: !0,
        style: !0,
      });
      var I = w(t);
      d && d.l(I),
        (n = O(I)),
        (r = El(I, !1)),
        (s = O(I)),
        g && g.l(I),
        (o = O(I)),
        v && v.l(I),
        I.forEach(h),
        this.h();
    },
    h() {
      (r.a = s),
        p(t, "class", "tooltip svelte-1i0ojtq"),
        p(t, "data-popper-placement", e[1]),
        p(t, "role", "tooltip"),
        p(t, "style", (a = Uo(e[13], e[3], e[5], e[9], e[4], e[6], e[7]))),
        X(t, "phone", e[17] < 640),
        X(t, "p16", e[12]);
    },
    m(_, I) {
      M(_, t, I),
        d && d.m(t, null),
        f(t, n),
        r.m(e[0], t),
        f(t, s),
        g && g.m(t, null),
        f(t, o),
        v && v.m(t, null),
        e[28](t),
        (l = !0),
        c ||
          ((u = [
            Ie(t, "mouseenter", e[19]),
            Ie(t, "mouseover", e[19]),
            Ie(t, "mouseleave", e[20]),
          ]),
          (c = !0));
    },
    p(_, I) {
      (e = _),
        e[12]
          ? d
            ? d.p(e, I)
            : ((d = Vo(e)), d.c(), d.m(t, n))
          : d && (d.d(1), (d = null)),
        (!l || I[0] & 1) && r.p(e[0]),
        g &&
          g.p &&
          (!l || I[0] & 33554432) &&
          gn(g, m, e, e[25], l ? _n(m, e[25], I, Du) : mn(e[25]), Lo),
        e[14]
          ? v && (v.d(1), (v = null))
          : v
          ? v.p(e, I)
          : ((v = Bo(e)), v.c(), v.m(t, null)),
        (!l || I[0] & 2) && p(t, "data-popper-placement", e[1]),
        (!l ||
          (I[0] & 8952 &&
            a !== (a = Uo(e[13], e[3], e[5], e[9], e[4], e[6], e[7])))) &&
          p(t, "style", a),
        (!l || I[0] & 131072) && X(t, "phone", e[17] < 640),
        (!l || I[0] & 4096) && X(t, "p16", e[12]);
    },
    i(_) {
      l ||
        (Y(g, _),
        Qn(() => {
          i || (i = uo(t, cr, e[2] ? {} : { delay: 0, duration: 0 }, !0)),
            i.run(1);
        }),
        (l = !0));
    },
    o(_) {
      q(g, _),
        i || (i = uo(t, cr, e[2] ? {} : { delay: 0, duration: 0 }, !1)),
        i.run(0),
        (l = !1);
    },
    d(_) {
      _ && h(t),
        d && d.d(),
        g && g.d(_),
        v && v.d(),
        e[28](null),
        _ && i && i.end(),
        (c = !1),
        Hr(u);
    },
  };
}
function Vo(e) {
  let t, n, r, s, o;
  return {
    c() {
      (t = y("div")), (n = y("i")), (r = B("")), this.h();
    },
    l(a) {
      t = T(a, "DIV", { class: !0 });
      var i = w(t);
      n = T(i, "I", { class: !0, style: !0 });
      var l = w(n);
      (r = U(l, "")), l.forEach(h), i.forEach(h), this.h();
    },
    h() {
      p(n, "class", "iconfont lh12 f12 cp"),
        lr(n, "color", e[5]),
        p(t, "class", "icon cp svelte-1i0ojtq");
    },
    m(a, i) {
      M(a, t, i),
        f(t, n),
        f(n, r),
        s || ((o = Ie(n, "click", e[21])), (s = !0));
    },
    p(a, i) {
      i[0] & 32 && lr(n, "color", a[5]);
    },
    d(a) {
      a && h(t), (s = !1), o();
    },
  };
}
function Bo(e) {
  let t, n, r;
  return {
    c() {
      (t = y("div")), (n = y("div")), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0, "data-popper-arrow": !0, style: !0 });
      var o = w(t);
      (n = T(o, "DIV", { class: !0, style: !0 })),
        w(n).forEach(h),
        o.forEach(h),
        this.h();
    },
    h() {
      p(n, "class", "arrow2 svelte-1i0ojtq"),
        p(n, "style", (r = "background:" + e[3] + ";" + e[8])),
        p(t, "class", "arrow svelte-1i0ojtq"),
        p(t, "data-popper-arrow", ""),
        lr(t, "right", e[10]);
    },
    m(s, o) {
      M(s, t, o), f(t, n);
    },
    p(s, o) {
      o[0] & 264 &&
        r !== (r = "background:" + s[3] + ";" + s[8]) &&
        p(n, "style", r),
        o[0] & 1024 && lr(t, "right", s[10]);
    },
    d(s) {
      s && h(t);
    },
  };
}
function ku(e) {
  let t, n, r, s;
  Qn(e[27]);
  let o = (e[11] || e[12] || (e[15] === "hover" && e[18])) && Fo(e);
  return {
    c() {
      o && o.c(), (t = Ue());
    },
    l(a) {
      o && o.l(a), (t = Ue());
    },
    m(a, i) {
      o && o.m(a, i),
        M(a, t, i),
        (n = !0),
        r || ((s = Ie(window, "resize", e[27])), (r = !0));
    },
    p(a, i) {
      a[11] || a[12] || (a[15] === "hover" && a[18])
        ? o
          ? (o.p(a, i), i[0] & 301056 && Y(o, 1))
          : ((o = Fo(a)), o.c(), Y(o, 1), o.m(t.parentNode, t))
        : o &&
          (Mt(),
          q(o, 1, 1, () => {
            o = null;
          }),
          Lt());
    },
    i(a) {
      n || (Y(o), (n = !0));
    },
    o(a) {
      q(o), (n = !1);
    },
    d(a) {
      o && o.d(a), a && h(t), (r = !1), s();
    },
  };
}
function Uo(e, t, n, r, s, o, a) {
  return `${Object.entries(e)
    .map((l) => `${l[0]}:${l[1]}`)
    .join(
      ";"
    )};background:${t};color:${n};right:${r};z-index:${s};border:${o};${a};`;
}
function Su(e, t, n) {
  let { $$slots: r = {}, $$scope: s } = t,
    { content: o = "" } = t,
    { anchorNode: a = null } = t,
    { placement: i = "top" } = t,
    { isFade: l = !0 } = t,
    { background: c = "#000" } = t,
    { zIndex: u = 99999 } = t,
    { color: d = "#fff" } = t,
    { border: m = "0" } = t,
    { boxShadow: g = "" } = t,
    { arrowBoxShadow: v = "" } = t,
    { right: _ = "" } = t,
    { arrowRight: I = "" } = t,
    { show: C = !1 } = t,
    { visible: k = !1 } = t,
    { style: D = {} } = t,
    { hideDelay: E = 0 } = t,
    { offset: b = [0, 8] } = t,
    { noArrow: P = !1 } = t,
    { trigger: R = "hover" } = t;
  const N = Ut();
  let S = 1200,
    H,
    F = !1;
  tt(
    () => (
      R === "click" && document.addEventListener("click", V),
      function () {
        R === "click" && document.removeEventListener("click", V);
      }
    )
  );
  function G(Z, me) {
    !Z ||
      !me ||
      $l(me, Z, {
        placement: i,
        modifiers: [{ name: "offset", options: { offset: b } }],
      });
  }
  function re() {
    n(18, (F = !0));
  }
  function x() {
    n(18, (F = !1));
  }
  function ae() {
    n(18, (F = !1)), N("clickClose");
  }
  function V(Z) {
    (C || k || F) &&
      ((a && a.contains(Z.target)) ||
        H.contains(Z.target) ||
        N("clickOutside"));
  }
  function ee() {
    n(17, (S = window.innerWidth));
  }
  function ie(Z) {
    Ne[Z ? "unshift" : "push"](() => {
      (H = Z), n(16, H);
    });
  }
  return (
    (e.$$set = (Z) => {
      "content" in Z && n(0, (o = Z.content)),
        "anchorNode" in Z && n(22, (a = Z.anchorNode)),
        "placement" in Z && n(1, (i = Z.placement)),
        "isFade" in Z && n(2, (l = Z.isFade)),
        "background" in Z && n(3, (c = Z.background)),
        "zIndex" in Z && n(4, (u = Z.zIndex)),
        "color" in Z && n(5, (d = Z.color)),
        "border" in Z && n(6, (m = Z.border)),
        "boxShadow" in Z && n(7, (g = Z.boxShadow)),
        "arrowBoxShadow" in Z && n(8, (v = Z.arrowBoxShadow)),
        "right" in Z && n(9, (_ = Z.right)),
        "arrowRight" in Z && n(10, (I = Z.arrowRight)),
        "show" in Z && n(11, (C = Z.show)),
        "visible" in Z && n(12, (k = Z.visible)),
        "style" in Z && n(13, (D = Z.style)),
        "hideDelay" in Z && n(23, (E = Z.hideDelay)),
        "offset" in Z && n(24, (b = Z.offset)),
        "noArrow" in Z && n(14, (P = Z.noArrow)),
        "trigger" in Z && n(15, (R = Z.trigger)),
        "$$scope" in Z && n(25, (s = Z.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 4259840 && G(H, a);
    }),
    [
      o,
      i,
      l,
      c,
      u,
      d,
      m,
      g,
      v,
      _,
      I,
      C,
      k,
      D,
      P,
      R,
      H,
      S,
      F,
      re,
      x,
      ae,
      a,
      E,
      b,
      s,
      r,
      ee,
      ie,
    ]
  );
}
class Pu extends He {
  constructor(t) {
    super(),
      Ye(
        this,
        t,
        Su,
        ku,
        Qe,
        {
          content: 0,
          anchorNode: 22,
          placement: 1,
          isFade: 2,
          background: 3,
          zIndex: 4,
          color: 5,
          border: 6,
          boxShadow: 7,
          arrowBoxShadow: 8,
          right: 9,
          arrowRight: 10,
          show: 11,
          visible: 12,
          style: 13,
          hideDelay: 23,
          offset: 24,
          noArrow: 14,
          trigger: 15,
        },
        null,
        [-1, -1]
      );
  }
  get content() {
    return this.$$.ctx[0];
  }
  set content(t) {
    this.$$set({ content: t }), ht();
  }
  get anchorNode() {
    return this.$$.ctx[22];
  }
  set anchorNode(t) {
    this.$$set({ anchorNode: t }), ht();
  }
  get placement() {
    return this.$$.ctx[1];
  }
  set placement(t) {
    this.$$set({ placement: t }), ht();
  }
  get isFade() {
    return this.$$.ctx[2];
  }
  set isFade(t) {
    this.$$set({ isFade: t }), ht();
  }
  get background() {
    return this.$$.ctx[3];
  }
  set background(t) {
    this.$$set({ background: t }), ht();
  }
  get zIndex() {
    return this.$$.ctx[4];
  }
  set zIndex(t) {
    this.$$set({ zIndex: t }), ht();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(t) {
    this.$$set({ color: t }), ht();
  }
  get border() {
    return this.$$.ctx[6];
  }
  set border(t) {
    this.$$set({ border: t }), ht();
  }
  get boxShadow() {
    return this.$$.ctx[7];
  }
  set boxShadow(t) {
    this.$$set({ boxShadow: t }), ht();
  }
  get arrowBoxShadow() {
    return this.$$.ctx[8];
  }
  set arrowBoxShadow(t) {
    this.$$set({ arrowBoxShadow: t }), ht();
  }
  get right() {
    return this.$$.ctx[9];
  }
  set right(t) {
    this.$$set({ right: t }), ht();
  }
  get arrowRight() {
    return this.$$.ctx[10];
  }
  set arrowRight(t) {
    this.$$set({ arrowRight: t }), ht();
  }
  get show() {
    return this.$$.ctx[11];
  }
  set show(t) {
    this.$$set({ show: t }), ht();
  }
  get visible() {
    return this.$$.ctx[12];
  }
  set visible(t) {
    this.$$set({ visible: t }), ht();
  }
  get style() {
    return this.$$.ctx[13];
  }
  set style(t) {
    this.$$set({ style: t }), ht();
  }
  get hideDelay() {
    return this.$$.ctx[23];
  }
  set hideDelay(t) {
    this.$$set({ hideDelay: t }), ht();
  }
  get offset() {
    return this.$$.ctx[24];
  }
  set offset(t) {
    this.$$set({ offset: t }), ht();
  }
  get noArrow() {
    return this.$$.ctx[14];
  }
  set noArrow(t) {
    this.$$set({ noArrow: t }), ht();
  }
  get trigger() {
    return this.$$.ctx[15];
  }
  set trigger(t) {
    this.$$set({ trigger: t }), ht();
  }
}
const Rr = {
  Note: "446399",
  Note1: "bbc820",
  Note2: "8d5a88",
  Note3: "610fec",
  Show: "7d0ca6",
  Confirm: "e64c8b",
};
function Ru(e) {
  let t,
    n,
    r,
    s = e[0](Rr.Note1) + "",
    o,
    a,
    i,
    l = e[0](Rr.Note2) + "",
    c,
    u,
    d,
    m = e[0](Rr.Note3) + "",
    g,
    v,
    _,
    I,
    C,
    k;
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = y("div")),
        (o = B(s)),
        (a = A()),
        (i = y("div")),
        (c = B(l)),
        (u = A()),
        (d = y("div")),
        (g = B(m)),
        (v = A()),
        (_ = y("div")),
        (I = y("a")),
        (C = y("img")),
        this.h();
    },
    l(D) {
      t = T(D, "DIV", { class: !0 });
      var E = w(t);
      n = T(E, "DIV", { class: !0 });
      var b = w(n);
      r = T(b, "DIV", { class: !0 });
      var P = w(r);
      (o = U(P, s)), P.forEach(h), (a = O(b)), (i = T(b, "DIV", { class: !0 }));
      var R = w(i);
      (c = U(R, l)), R.forEach(h), (u = O(b)), (d = T(b, "DIV", { class: !0 }));
      var N = w(d);
      (g = U(N, m)),
        N.forEach(h),
        b.forEach(h),
        (v = O(E)),
        (_ = T(E, "DIV", { class: !0 }));
      var S = w(_);
      I = T(S, "A", { href: !0, target: !0 });
      var H = w(I);
      (C = T(H, "IMG", { src: !0, alt: !0 })),
        H.forEach(h),
        S.forEach(h),
        E.forEach(h),
        this.h();
    },
    h() {
      p(r, "class", "title1 T2 svelte-whkido"),
        p(i, "class", "title1 T2 svelte-whkido"),
        p(d, "class", "title1 T2 svelte-whkido"),
        p(n, "class", "main svelte-whkido"),
        st(C.src, (k = "https://phemex.com/font/chrome.svg")) || p(C, "src", k),
        p(C, "alt", "chrome"),
        p(I, "href", "https://www.google.com/chrome/"),
        p(I, "target", "_blank"),
        p(_, "class", "tc mt30 svelte-whkido"),
        p(t, "class", "body");
    },
    m(D, E) {
      M(D, t, E),
        f(t, n),
        f(n, r),
        f(r, o),
        f(n, a),
        f(n, i),
        f(i, c),
        f(n, u),
        f(n, d),
        f(d, g),
        f(t, v),
        f(t, _),
        f(_, I),
        f(I, C);
    },
    p: je,
    d(D) {
      D && h(t);
    },
  };
}
function Au(e) {
  let t,
    n,
    r = e[0](Rr.Note) + "",
    s;
  return {
    c() {
      (t = y("div")), (n = y("div")), (s = B(r)), this.h();
    },
    l(o) {
      t = T(o, "DIV", { class: !0, slot: !0 });
      var a = w(t);
      n = T(a, "DIV", { class: !0 });
      var i = w(n);
      (s = U(i, r)), i.forEach(h), a.forEach(h), this.h();
    },
    h() {
      p(n, "class", "title fw2 T1 svelte-whkido"),
        p(t, "class", "p24 lh24 df b f16 T2"),
        p(t, "slot", "header");
    },
    m(o, a) {
      M(o, t, a), f(t, n), f(n, s);
    },
    p: je,
    d(o) {
      o && h(t);
    },
  };
}
function Ou(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i = e[0](Rr.Show) + "",
    l,
    c,
    u,
    d = e[0](Rr.Confirm) + "",
    m;
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = y("input")),
        (s = A()),
        (o = y("label")),
        (a = A()),
        (l = B(i)),
        (c = A()),
        (u = y("span")),
        (m = B(d)),
        this.h();
    },
    l(g) {
      t = T(g, "DIV", { class: !0, slot: !0 });
      var v = w(t);
      n = T(v, "DIV", { class: !0 });
      var _ = w(n);
      (r = T(_, "INPUT", { id: !0, class: !0, type: !0 })),
        (s = O(_)),
        (o = T(_, "LABEL", { for: !0, class: !0 })),
        w(o).forEach(h),
        (a = O(_)),
        (l = U(_, i)),
        _.forEach(h),
        (c = O(v)),
        (u = T(v, "SPAN", { class: !0, id: !0 }));
      var I = w(u);
      (m = U(I, d)), I.forEach(h), v.forEach(h), this.h();
    },
    h() {
      p(r, "id", "compatibilityCheckbox"),
        p(r, "class", "input svelte-whkido"),
        p(r, "type", "checkbox"),
        p(o, "for", "compatibilityCheckbox"),
        p(o, "class", "svelte-whkido"),
        p(n, "class", "pr"),
        p(u, "class", "button svelte-whkido"),
        p(u, "id", "compatibilityButton"),
        p(t, "class", "footer df fdr jcsb svelte-whkido"),
        p(t, "slot", "footer");
    },
    m(g, v) {
      M(g, t, v),
        f(t, n),
        f(n, r),
        f(n, s),
        f(n, o),
        f(n, a),
        f(n, l),
        f(t, c),
        f(t, u),
        f(u, m);
    },
    p: je,
    d(g) {
      g && h(t);
    },
  };
}
function Nu(e) {
  let t, n, r;
  return (
    (n = new sn({
      props: {
        style: "max-width:520px;padding:24px;",
        $$slots: { footer: [Ou], header: [Au], default: [Ru] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(s) {
        t = T(s, "DIV", { id: !0, class: !0 });
        var o = w(t);
        ce(n.$$.fragment, o), o.forEach(h), this.h();
      },
      h() {
        p(t, "id", "compatibility"), p(t, "class", "warp dn svelte-whkido");
      },
      m(s, o) {
        M(s, t, o), ue(n, t, null), (r = !0);
      },
      p(s, [o]) {
        const a = {};
        o & 2 && (a.$$scope = { dirty: o, ctx: s }), n.$set(a);
      },
      i(s) {
        r || (Y(n.$$.fragment, s), (r = !0));
      },
      o(s) {
        q(n.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && h(t), fe(n);
      },
    }
  );
}
function Mu(e) {
  return [Pn("LG")];
}
class Lu extends He {
  constructor(t) {
    super(), Ye(this, t, Mu, Nu, Qe, {});
  }
}
function Fu(e, t = {}) {
  const {
    content: n,
    placement: r,
    background: s,
    color: o,
    border: a,
    boxShadow: i,
    arrowBoxShadow: l,
    hideDelay: c = 0,
    zIndex: u = 99999,
    style: d,
    offset: m,
    isFade: g,
  } = t;
  let v = new Pu({
      target: document.body,
      props: {
        content: n,
        placement: r,
        anchorNode: e,
        background: s,
        color: o,
        border: a,
        boxShadow: i,
        arrowBoxShadow: l,
        hideDelay: c,
        zIndex: u,
        style: d,
        offset: m,
        isFade: g,
      },
    }),
    _;
  function I() {
    clearInterval(_), v && (v.show = !0);
  }
  function C() {
    clearInterval(_),
      (_ = setTimeout(() => {
        v && (v.show = !1);
      }, c));
  }
  const k = ["mouseenter", "focus"],
    D = ["mouseleave", "blur"];
  return (
    k.forEach((E) => e.addEventListener(E, I)),
    D.forEach((E) => e.addEventListener(E, C)),
    {
      update(E) {
        v && (v.content = E.content);
      },
      destroy() {
        v && v.$destroy(),
          (v = null),
          k.forEach((E) => e.removeEventListener(E, I)),
          D.forEach((E) => e.removeEventListener(E, C));
      },
    }
  );
}
const Ai = new ve([]),
  Vu = new ve([]),
  Bu = new ve([]),
  Uu = new ve([]),
  $u = new ve([]),
  Hu = new ve([]);
Rn.pipe(ye(Oi)).subscribe((e) => Ai.next(e));
Hl.pipe(ye(Oi)).subscribe((e) => Vu.next(e));
ur.pipe(ye(Yu)).subscribe((e) => Bu.next(e));
ur.pipe(ye(Qu)).subscribe((e) => Uu.next(e));
ur.pipe(ye(Wu)).subscribe((e) => $u.next(e));
ur.pipe(ye(qu)).subscribe((e) => Hu.next(e));
function Oi(e) {
  return e
    .filter((t) => !!t.inAssetsDisplay)
    .map((t) => ({
      text: t.displayCurrency,
      value: t.currency,
      name: t.name,
      currencyCode: t.code,
    }));
}
function Yu(e) {
  return e
    .filter((t) => t.status === "Listed")
    .map((t) => {
      const { symbol: n, symbolV2: r, settleCurrency: s, baseCurrency: o } = t;
      return { text: r, value: n, settleCurrency: s, baseCurrency: o };
    });
}
function Qu(e) {
  return e.map((t) => {
    const {
      symbolV2: n,
      fundingRate8hSymbol: r,
      settleCurrency: s,
      baseCurrency: o,
    } = t;
    return { text: n, value: r, settleCurrency: s, baseCurrency: o };
  });
}
function Wu(e) {
  return e
    .filter((t) => t.status === "Listed")
    .map((t) => {
      const { indexSymbol: n, settleCurrency: r, baseCurrency: s } = t;
      return { text: "." + s, value: n, settleCurrency: r, baseCurrency: s };
    });
}
function qu(e) {
  return e
    .filter((t) => t.status === "Listed")
    .map((t) => {
      const {
        markSymbol: n,
        settleCurrency: r,
        baseCurrency: s,
        status: o,
      } = t;
      return { text: ".M" + s, value: n, settleCurrency: r, baseCurrency: s };
    });
}
function Ku(e) {
  let t, n, r;
  function s(a) {
    e[11](a);
  }
  let o = {
    type: "border",
    class: "select-coin cp " + e[4],
    options: e[3] ? e[6] : e[2](e[5]),
    $$slots: {
      item: [
        Ju,
        ({ option: a }) => ({ 15: a }),
        ({ option: a }) => (a ? 32768 : 0),
      ],
      displayItem: [zu],
    },
    $$scope: { ctx: e },
  };
  return (
    e[0] !== void 0 && (o.value = e[0]),
    (t = new Ur({ props: o })),
    Ne.push(() => Xe(t, "value", s)),
    t.$on("change", e[12]),
    {
      c() {
        le(t.$$.fragment);
      },
      l(a) {
        ce(t.$$.fragment, a);
      },
      m(a, i) {
        ue(t, a, i), (r = !0);
      },
      p(a, i) {
        const l = {};
        i & 16 && (l.class = "select-coin cp " + a[4]),
          i & 108 && (l.options = a[3] ? a[6] : a[2](a[5])),
          i & 98305 && (l.$$scope = { dirty: i, ctx: a }),
          !n && i & 1 && ((n = !0), (l.value = a[0]), Ze(() => (n = !1))),
          t.$set(l);
      },
      i(a) {
        r || (Y(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(t.$$.fragment, a), (r = !1);
      },
      d(a) {
        fe(t, a);
      },
    }
  );
}
function ju(e) {
  let t, n, r;
  function s(a) {
    e[9](a);
  }
  let o = {
    type: "underline",
    class: "select-coin cp " + e[4],
    options: e[3] ? e[6] : e[2](e[5]),
    $$slots: {
      item: [
        Zu,
        ({ option: a }) => ({ 15: a }),
        ({ option: a }) => (a ? 32768 : 0),
      ],
      displayItem: [Xu],
    },
    $$scope: { ctx: e },
  };
  return (
    e[0] !== void 0 && (o.value = e[0]),
    (t = new Ns({ props: o })),
    Ne.push(() => Xe(t, "value", s)),
    t.$on("change", e[10]),
    {
      c() {
        le(t.$$.fragment);
      },
      l(a) {
        ce(t.$$.fragment, a);
      },
      m(a, i) {
        ue(t, a, i), (r = !0);
      },
      p(a, i) {
        const l = {};
        i & 16 && (l.class = "select-coin cp " + a[4]),
          i & 108 && (l.options = a[3] ? a[6] : a[2](a[5])),
          i & 98433 && (l.$$scope = { dirty: i, ctx: a }),
          !n && i & 1 && ((n = !0), (l.value = a[0]), Ze(() => (n = !1))),
          t.$set(l);
      },
      i(a) {
        r || (Y(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(t.$$.fragment, a), (r = !1);
      },
      d(a) {
        fe(t, a);
      },
    }
  );
}
function zu(e) {
  let t, n, r, s, o, a, i;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("span")),
        (a = B(e[0])),
        this.h();
    },
    l(l) {
      t = T(l, "DIV", { slot: !0, class: !0 });
      var c = w(t);
      (n = T(c, "IMG", { class: !0, src: !0, alt: !0 })),
        (s = O(c)),
        (o = T(c, "SPAN", { class: !0 }));
      var u = w(o);
      (a = U(u, e[0])), u.forEach(h), c.forEach(h), this.h();
    },
    h() {
      p(n, "class", "w18 svelte-1k6daux"),
        st(n.src, (r = vn.getUrl(e[0]))) || p(n, "src", r),
        p(n, "alt", "Coin"),
        p(o, "class", (i = "ml8 " + e[0] + " svelte-1k6daux")),
        p(t, "slot", "displayItem"),
        p(t, "class", "df aic");
    },
    m(l, c) {
      M(l, t, c), f(t, n), f(t, s), f(t, o), f(o, a);
    },
    p(l, c) {
      c & 1 && !st(n.src, (r = vn.getUrl(l[0]))) && p(n, "src", r),
        c & 1 && se(a, l[0]),
        c & 1 &&
          i !== (i = "ml8 " + l[0] + " svelte-1k6daux") &&
          p(o, "class", i);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Ju(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[15].text + "",
    i,
    l;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("span")),
        (i = B(a)),
        this.h();
    },
    l(c) {
      t = T(c, "DIV", { slot: !0, class: !0 });
      var u = w(t);
      (n = T(u, "IMG", { class: !0, src: !0, alt: !0 })),
        (s = O(u)),
        (o = T(u, "SPAN", { class: !0 }));
      var d = w(o);
      (i = U(d, a)), d.forEach(h), u.forEach(h), this.h();
    },
    h() {
      p(n, "class", "w18 svelte-1k6daux"),
        st(n.src, (r = vn.getUrl(e[15].value))) || p(n, "src", r),
        p(n, "alt", "Coin"),
        p(o, "class", (l = "ml8 " + e[15].text + " svelte-1k6daux")),
        p(t, "slot", "item"),
        p(t, "class", "df aic");
    },
    m(c, u) {
      M(c, t, u), f(t, n), f(t, s), f(t, o), f(o, i);
    },
    p(c, u) {
      u & 32768 && !st(n.src, (r = vn.getUrl(c[15].value))) && p(n, "src", r),
        u & 32768 && a !== (a = c[15].text + "") && se(i, a),
        u & 32768 &&
          l !== (l = "ml8 " + c[15].text + " svelte-1k6daux") &&
          p(o, "class", l);
    },
    d(c) {
      c && h(t);
    },
  };
}
function Xu(e) {
  let t, n, r, s, o, a, i;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("span")),
        (a = B(e[7])),
        this.h();
    },
    l(l) {
      t = T(l, "DIV", { slot: !0, class: !0 });
      var c = w(t);
      (n = T(c, "IMG", { class: !0, src: !0, alt: !0 })),
        (s = O(c)),
        (o = T(c, "SPAN", { class: !0 }));
      var u = w(o);
      (a = U(u, e[7])), u.forEach(h), c.forEach(h), this.h();
    },
    h() {
      p(n, "class", "w18 svelte-1k6daux"),
        st(n.src, (r = vn.getUrl(e[0]))) || p(n, "src", r),
        p(n, "alt", "Coin"),
        p(o, "class", (i = "ml8 " + e[0] + " svelte-1k6daux")),
        p(t, "slot", "displayItem"),
        p(t, "class", "df aic");
    },
    m(l, c) {
      M(l, t, c), f(t, n), f(t, s), f(t, o), f(o, a);
    },
    p(l, c) {
      c & 1 && !st(n.src, (r = vn.getUrl(l[0]))) && p(n, "src", r),
        c & 128 && se(a, l[7]),
        c & 1 &&
          i !== (i = "ml8 " + l[0] + " svelte-1k6daux") &&
          p(o, "class", i);
    },
    d(l) {
      l && h(t);
    },
  };
}
function Zu(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[15].text + "",
    i,
    l;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("span")),
        (i = B(a)),
        this.h();
    },
    l(c) {
      t = T(c, "DIV", { slot: !0, class: !0 });
      var u = w(t);
      (n = T(u, "IMG", { class: !0, src: !0, alt: !0 })),
        (s = O(u)),
        (o = T(u, "SPAN", { class: !0 }));
      var d = w(o);
      (i = U(d, a)), d.forEach(h), u.forEach(h), this.h();
    },
    h() {
      p(n, "class", "w18 svelte-1k6daux"),
        st(n.src, (r = vn.getUrl(e[15].value))) || p(n, "src", r),
        p(n, "alt", "Coin"),
        p(o, "class", (l = "ml8 " + e[15].text + " svelte-1k6daux")),
        p(t, "slot", "item"),
        p(t, "class", "df aic");
    },
    m(c, u) {
      M(c, t, u), f(t, n), f(t, s), f(t, o), f(o, i);
    },
    p(c, u) {
      u & 32768 && !st(n.src, (r = vn.getUrl(c[15].value))) && p(n, "src", r),
        u & 32768 && a !== (a = c[15].text + "") && se(i, a),
        u & 32768 &&
          l !== (l = "ml8 " + c[15].text + " svelte-1k6daux") &&
          p(o, "class", l);
    },
    d(c) {
      c && h(t);
    },
  };
}
function Gu(e) {
  let t, n, r, s;
  const o = [ju, Ku],
    a = [];
  function i(l, c) {
    return l[1] ? 0 : 1;
  }
  return (
    (t = i(e)),
    (n = a[t] = o[t](e)),
    {
      c() {
        n.c(), (r = Ue());
      },
      l(l) {
        n.l(l), (r = Ue());
      },
      m(l, c) {
        a[t].m(l, c), M(l, r, c), (s = !0);
      },
      p(l, [c]) {
        let u = t;
        (t = i(l)),
          t === u
            ? a[t].p(l, c)
            : (Mt(),
              q(a[u], 1, 1, () => {
                a[u] = null;
              }),
              Lt(),
              (n = a[t]),
              n ? n.p(l, c) : ((n = a[t] = o[t](l)), n.c()),
              Y(n, 1),
              n.m(r.parentNode, r));
      },
      i(l) {
        s || (Y(n), (s = !0));
      },
      o(l) {
        q(n), (s = !1);
      },
      d(l) {
        a[t].d(l), l && h(r);
      },
    }
  );
}
function xu(e, t, n) {
  let r, s;
  Me(e, Rn, (k) => n(8, (r = k))), Me(e, Ai, (k) => n(5, (s = k)));
  let { isSearch: o = !1 } = t,
    { coin: a = "" } = t,
    {
      converter: i = function (k) {
        return k;
      },
    } = t,
    { isCryptoCoin: l = !1 } = t,
    { class: c = "" } = t,
    u = [],
    d = a;
  function m(k, D) {
    n(6, (u = k ? D.filter((E) => !["USD", "ETHS"].includes(E.value)) : D));
  }
  function g(k, D) {
    const E = k.find((b) => b.currency === D);
    E && n(7, (d = E.displayCurrency));
  }
  function v(k) {
    (a = k), n(0, a);
  }
  function _(k) {
    nn.call(this, e, k);
  }
  function I(k) {
    (a = k), n(0, a);
  }
  function C(k) {
    nn.call(this, e, k);
  }
  return (
    (e.$$set = (k) => {
      "isSearch" in k && n(1, (o = k.isSearch)),
        "coin" in k && n(0, (a = k.coin)),
        "converter" in k && n(2, (i = k.converter)),
        "isCryptoCoin" in k && n(3, (l = k.isCryptoCoin)),
        "class" in k && n(4, (c = k.class));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 40 && m(l, s), e.$$.dirty & 257 && g(r, a);
    }),
    [a, o, i, l, c, s, u, d, r, v, _, I, C]
  );
}
class ef extends He {
  constructor(t) {
    super(),
      Ye(this, t, xu, Gu, Qe, {
        isSearch: 1,
        coin: 0,
        converter: 2,
        isCryptoCoin: 3,
        class: 4,
      });
  }
}
const Ni = new ve([]),
  tf = new ve({ status: 100, taskList: [] }),
  Mi = new ve([
    {
      membershipType: "purchasePlan30V1",
      currencyName: "USDT",
      price: "9.9",
      originPrice: "",
      days: 30,
    },
  ]);
Ge.subscribe(() => {
  rf(), sf();
});
Yl.subscribe(() => nf());
async function nf() {
  const { data: e, error: t } = await os.getUserTasks();
  e && tf.next(e), t && oe.send("toast", "error", t);
}
async function rf() {
  const { data: e } = await os.getPurchasePlans();
  e && Mi.next(e);
}
async function sf() {
  const { data: e } = await os.getSupportCurrency();
  e && Ni.next(e.supportCurrencyList);
}
const $o = {
    Title: "875f5f",
    NewJourney: "d38df4",
    BecomeAllStar: "2aa8de",
    Permanently: "383819",
    JoinUs: "c2475e",
    GetPremium: "351a7d",
    AskAFriend: "1bdf23",
    GetFromFriendContent: "825ba2",
    CompleteTasks: "8726cc",
    GetByTaskTontent: "40bf51",
    Task_1: "51840d",
    Task_2: "5bf3b1",
    Task_3: "e924fe",
    Receive_1: "e67b4a",
    Receive_3: "5c8e12",
    DirectPurchase: "1b25f6",
    PayForPremiumbtc: "b02f4e",
    PerDay_1: "abc663",
    PerDay_2: "c2bb03",
    PerDay_3: "008759",
    PayForPremium: "5f2f7c",
    BuyNow: "5280b3",
    Days: "7a9c94",
    CheckoutOther: "47cb3a",
    Questions: "1cc047",
    Question_1: "990355",
    Question_2: "ba9348",
    Question_3: "73b850",
    Question_4: "9c7761",
    Answer_1: "315daf",
    Answer_2: "c5340e",
    Answer_3: "352eca",
    Answer_4: "2edb6a",
    Answer_5: "4bbd26",
    Answer_6: "36d572",
    Spot: "e60134",
    Others: "d3add3",
    Trade: "8d97cd",
    ZeroFees: "8bb497",
    TakerAndMaker: "132cd1",
    SupportsConditionalOrders: "393581",
    Contract: "106710",
    Taker: "5d352c",
    Maker: "5158c0",
    InstantWithdrawal: "908d08",
    NoWithdraw: "1ff013",
    AbilityToGift: "4e6600",
    StandardUser: "ffe4cf",
    PremiumTrial: "f2fb46",
    Premium: "db24cd",
    WaysToGet: "179a61",
    PremiumT: "ebcb02",
    RegistrationGift: "cb51e8",
    NewUsersCan: "a28c5b",
    RegisterNow: "c6e30b",
    FullPremium: "52b92c",
    GetFromTwitter: "8d6240",
    Follow: "3a1a4f",
    Twitter: "5a3b58",
    RetweetOurPinned: "f6a8ab",
    CompleteThe: "31052c",
    Application: "ff6593",
    ProcessAndReceive: "c04424",
    FollowPhemex: "d07044",
    Applicate: "d7ba29",
    CompleteFollowingTasks: "72bbb3",
    PhemexReservesAll: "54bae2",
    YouMustFirst: "3bef34",
    YouMustFirstClaiming: "a9dd0a",
    YouMainAccountMust: "cb14ce",
    GoToKYC: "da722d",
    Note: "3d756e",
    DailyLimit: "500b2a",
    MonthlyLimit: "bcc06c",
  },
  Li = `${Dn.STATIC_URL}/s/web/account/`,
  of = Li + "notification_waring.svg",
  af = Li + "payerror_v1.svg",
  lf = `${Dn.STATIC_URL}/pubimg/`,
  ps = {
    BANNER:
      "22f93ff65135db944fb3a6f800e73730045c3fdde2f271fa6d2ffe1ed40a9dc4.png",
  };
Object.keys(ps).forEach((e) => (ps[e] = [lf, ps[e]].join("")));
const Xr = new ve("BTC"),
  Ss = new Ce(),
  cf = Xr.pipe(
    lt((e) => e !== "USDT"),
    Re((e) =>
      Ql.pipe(
        ye((t) => t.get("." + e)),
        lt(Boolean),
        lt((t) => t.priceEp > 0),
        Ms(1)
      )
    )
  ),
  uf = $t([cf, Ss]).pipe(ye(([e, t]) => ff(e.priceEp, t, e.priceFactor)));
function ff(e, t, n) {
  return $.floor((Number(t) * n) / e, 8, 0);
}
const Nt = {
  BuyPremium: "a57379",
  ChooseThePlan: "6407ae",
  Total: "e66ebf",
  PaymentCoin: "954a8c",
  PAY: "09bfb7",
  After: "a913dc",
  Spot: "f66ca6",
  Spot_1: "f9b974",
  Spot_2: "4a9164",
  Spot_3: "19f754",
  Others: "7e1f78",
  Others_1: "82534b",
  Others_2: "3d6368",
  Others_3: "f318d7",
  More: "b33abd",
  Days: "fba703",
  BuyText: "5c451b",
};
function Ho(e, t, n) {
  const r = e.slice();
  return (r[16] = t[n]), r;
}
function Yo(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        style: "overflow: visible;",
        visible: e[0],
        size: "big",
        $$slots: { default: [gf] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s & 1 && (o.visible = r[0]),
          s & 524415 && (o.$$scope = { dirty: s, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function Qo(e, t) {
  let n,
    r,
    s,
    o = t[1] === t[16].membershipType ? "&#xe621;" : "&#xe622;",
    a,
    i = t[16].days + "",
    l,
    c,
    u = t[7](Nt.Days) + "",
    d,
    m,
    g,
    v = t[16].price + "",
    _,
    I,
    C,
    k,
    D;
  return {
    key: e,
    first: null,
    c() {
      (n = y("div")),
        (r = y("div")),
        (s = y("i")),
        (a = A()),
        (l = B(i)),
        (c = A()),
        (d = B(u)),
        (m = A()),
        (g = y("div")),
        (_ = B(v)),
        (I = B(" USD")),
        (C = A()),
        this.h();
    },
    l(E) {
      n = T(E, "DIV", { class: !0 });
      var b = w(n);
      r = T(b, "DIV", { class: !0 });
      var P = w(r);
      s = T(P, "I", { class: !0 });
      var R = w(s);
      R.forEach(h),
        (a = O(P)),
        (l = U(P, i)),
        (c = O(P)),
        (d = U(P, u)),
        P.forEach(h),
        (m = O(b)),
        (g = T(b, "DIV", { class: !0 }));
      var N = w(g);
      (_ = U(N, v)),
        (I = U(N, " USD")),
        N.forEach(h),
        (C = O(b)),
        b.forEach(h),
        this.h();
    },
    h() {
      p(s, "class", "iconfont T4 cp mr8 svelte-18cfhy7"),
        X(s, "checked", t[1] === t[16].membershipType),
        p(r, "class", "df aic f14 lh16 svelte-18cfhy7"),
        X(r, "T2", t[1] === t[16].membershipType),
        X(r, "T3", t[1] !== t[16].membershipType),
        p(g, "class", "fw2 T2 f14"),
        p(n, "class", "df jcsb mt20"),
        (this.first = n);
    },
    m(E, b) {
      M(E, n, b),
        f(n, r),
        f(r, s),
        (s.innerHTML = o),
        f(r, a),
        f(r, l),
        f(r, c),
        f(r, d),
        f(n, m),
        f(n, g),
        f(g, _),
        f(g, I),
        f(n, C),
        k ||
          ((D = Ie(s, "click", function () {
            Qt(t[9](t[16])) && t[9](t[16]).apply(this, arguments);
          })),
          (k = !0));
    },
    p(E, b) {
      (t = E),
        b & 34 &&
          o !== (o = t[1] === t[16].membershipType ? "&#xe621;" : "&#xe622;") &&
          (s.innerHTML = o),
        b & 34 && X(s, "checked", t[1] === t[16].membershipType),
        b & 32 && i !== (i = t[16].days + "") && se(l, i),
        b & 34 && X(r, "T2", t[1] === t[16].membershipType),
        b & 34 && X(r, "T3", t[1] !== t[16].membershipType),
        b & 32 && v !== (v = t[16].price + "") && se(_, v);
    },
    d(E) {
      E && h(n), (k = !1), D();
    },
  };
}
function df(e) {
  let t, n;
  return {
    c() {
      (t = B("≈ ")), (n = B(e[6]));
    },
    l(r) {
      (t = U(r, "≈ ")), (n = U(r, e[6]));
    },
    m(r, s) {
      M(r, t, s), M(r, n, s);
    },
    p(r, s) {
      s & 64 && se(n, r[6]);
    },
    d(r) {
      r && h(t), r && h(n);
    },
  };
}
function hf(e) {
  let t, n;
  return {
    c() {
      (t = B("= ")), (n = B(e[2]));
    },
    l(r) {
      (t = U(r, "= ")), (n = U(r, e[2]));
    },
    m(r, s) {
      M(r, t, s), M(r, n, s);
    },
    p(r, s) {
      s & 4 && se(n, r[2]);
    },
    d(r) {
      r && h(t), r && h(n);
    },
  };
}
function Wo(e) {
  let t, n, r, s, o;
  return {
    c() {
      (t = y("div")), (n = y("img")), this.h();
    },
    l(a) {
      t = T(a, "DIV", { class: !0 });
      var i = w(t);
      (n = T(i, "IMG", { class: !0, src: !0, alt: !0 })),
        i.forEach(h),
        this.h();
    },
    h() {
      p(n, "class", "img svelte-18cfhy7"),
        st(n.src, (r = of)) || p(n, "src", r),
        p(n, "alt", "Notification"),
        p(t, "class", "ml4 cp");
    },
    m(a, i) {
      M(a, t, i),
        f(t, n),
        s ||
          ((o = wl(
            Fu.call(null, t, {
              content: e[8],
              placement: "bottom",
              background: "#fff",
              color: "var(--T1)",
            })
          )),
          (s = !0));
    },
    p: je,
    d(a) {
      a && h(t), (s = !1), o();
    },
  };
}
function pf(e) {
  let t = e[7](Nt.PAY) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function gf(e) {
  let t,
    n,
    r,
    s = e[7](Nt.After) + "",
    o,
    a,
    i,
    l = e[7](Nt.Spot) + "",
    c,
    u,
    d,
    m = e[7](Nt.Spot_1) + "",
    g,
    v,
    _ = e[7]($o.DailyLimit) + "",
    I,
    C,
    k = e[7]($o.MonthlyLimit) + "",
    D,
    E,
    b,
    P,
    R = e[7](Nt.Spot_2) + "",
    N,
    S,
    H,
    F = e[7](Nt.Spot_3) + "",
    G,
    re,
    x,
    ae = e[7](Nt.Others) + "",
    V,
    ee,
    ie,
    Z = e[7](Nt.Others_1) + "",
    me,
    Ae,
    z,
    te = e[7](Nt.Others_2) + "",
    ne,
    Te,
    be,
    Pe = e[7](Nt.Others_3) + "",
    De,
    qe,
    K,
    Ee = e[7](Nt.More) + "",
    Se,
    J,
    de,
    Oe,
    Fe,
    ge,
    $e,
    ct,
    on = e[7](Nt.BuyPremium) + "",
    ut,
    bt,
    pt,
    Ve = [],
    Ht = new Map(),
    yt,
    vt,
    ze,
    Q = e[7](Nt.PaymentCoin) + "",
    at,
    gt,
    Yt,
    nt,
    Tt,
    Ke,
    Kt,
    On = e[7](Nt.Total) + "",
    Nn,
    jn,
    xe,
    Mn,
    Ln,
    zn,
    Ft,
    jt,
    Vt,
    fn,
    Jn,
    zt,
    Fn = e[5];
  const hr = (we) => we[16].price;
  for (let we = 0; we < Fn.length; we += 1) {
    let Be = Ho(e, Fn, we),
      ke = hr(Be);
    Ht.set(ke, (Ve[we] = Qo(ke, Be)));
  }
  (nt = new ef({ props: { coin: e[4], converter: e[11] } })),
    nt.$on("change", e[14]);
  function pr(we, Be) {
    return we[4] === "USDT" ? hf : df;
  }
  let Jt = pr(e),
    mt = Jt(e),
    et = e[4] !== "USDT" && Wo(e);
  return (
    (Vt = new Bt({
      props: {
        type: "primary",
        minWidth: "100%",
        loading: e[3],
        $$slots: { default: [pf] },
        $$scope: { ctx: e },
      },
    })),
    Vt.$on("click", e[10]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = y("div")),
          (o = B(s)),
          (a = A()),
          (i = y("div")),
          (c = B(l)),
          (u = A()),
          (d = y("div")),
          (g = B(m)),
          (v = B(" (")),
          (I = B(_)),
          (C = A()),
          (D = B(k)),
          (E = B(")")),
          (b = A()),
          (P = y("div")),
          (N = B(R)),
          (S = A()),
          (H = y("div")),
          (G = B(F)),
          (re = A()),
          (x = y("div")),
          (V = B(ae)),
          (ee = A()),
          (ie = y("div")),
          (me = B(Z)),
          (Ae = A()),
          (z = y("div")),
          (ne = B(te)),
          (Te = A()),
          (be = y("div")),
          (De = B(Pe)),
          (qe = A()),
          (K = y("div")),
          (Se = B(Ee)),
          (J = A()),
          (de = y("div")),
          (Oe = y("div")),
          (Fe = y("i")),
          (ge = B("")),
          ($e = A()),
          (ct = y("div")),
          (ut = B(on)),
          (bt = A()),
          (pt = y("div"));
        for (let we = 0; we < Ve.length; we += 1) Ve[we].c();
        (yt = A()),
          (vt = y("div")),
          (ze = y("div")),
          (at = B(Q)),
          (gt = A()),
          (Yt = y("div")),
          le(nt.$$.fragment),
          (Tt = A()),
          (Ke = y("div")),
          (Kt = y("div")),
          (Nn = B(On)),
          (jn = A()),
          (xe = y("div")),
          mt.c(),
          (Mn = A()),
          (Ln = B(e[4])),
          (zn = A()),
          et && et.c(),
          (Ft = A()),
          (jt = y("div")),
          le(Vt.$$.fragment),
          this.h();
      },
      l(we) {
        t = T(we, "DIV", { class: !0 });
        var Be = w(t);
        n = T(Be, "DIV", { class: !0 });
        var ke = w(n);
        r = T(ke, "DIV", { class: !0 });
        var dn = w(r);
        (o = U(dn, s)),
          dn.forEach(h),
          (a = O(ke)),
          (i = T(ke, "DIV", { class: !0 }));
        var gr = w(i);
        (c = U(gr, l)),
          gr.forEach(h),
          (u = O(ke)),
          (d = T(ke, "DIV", { class: !0 }));
        var ft = w(d);
        (g = U(ft, m)),
          (v = U(ft, " (")),
          (I = U(ft, _)),
          (C = O(ft)),
          (D = U(ft, k)),
          (E = U(ft, ")")),
          ft.forEach(h),
          (b = O(ke)),
          (P = T(ke, "DIV", { class: !0 }));
        var bn = w(P);
        (N = U(bn, R)),
          bn.forEach(h),
          (S = O(ke)),
          (H = T(ke, "DIV", { class: !0 }));
        var Vn = w(H);
        (G = U(Vn, F)),
          Vn.forEach(h),
          (re = O(ke)),
          (x = T(ke, "DIV", { class: !0 }));
        var Xn = w(x);
        (V = U(Xn, ae)),
          Xn.forEach(h),
          (ee = O(ke)),
          (ie = T(ke, "DIV", { class: !0 }));
        var mr = w(ie);
        (me = U(mr, Z)),
          mr.forEach(h),
          (Ae = O(ke)),
          (z = T(ke, "DIV", { class: !0 }));
        var Xt = w(z);
        (ne = U(Xt, te)),
          Xt.forEach(h),
          (Te = O(ke)),
          (be = T(ke, "DIV", { class: !0 }));
        var _r = w(be);
        (De = U(_r, Pe)),
          _r.forEach(h),
          (qe = O(ke)),
          (K = T(ke, "DIV", { class: !0 }));
        var vr = w(K);
        (Se = U(vr, Ee)),
          vr.forEach(h),
          ke.forEach(h),
          (J = O(Be)),
          (de = T(Be, "DIV", { class: !0 }));
        var Ct = w(de);
        Oe = T(Ct, "DIV", { class: !0 });
        var Gt = w(Oe);
        Fe = T(Gt, "I", { class: !0 });
        var dt = w(Fe);
        (ge = U(dt, "")),
          dt.forEach(h),
          Gt.forEach(h),
          ($e = O(Ct)),
          (ct = T(Ct, "DIV", { class: !0 }));
        var Or = w(ct);
        (ut = U(Or, on)),
          Or.forEach(h),
          (bt = O(Ct)),
          (pt = T(Ct, "DIV", { class: !0 }));
        var Zn = w(pt);
        for (let xt = 0; xt < Ve.length; xt += 1) Ve[xt].l(Zn);
        Zn.forEach(h), (yt = O(Ct)), (vt = T(Ct, "DIV", {}));
        var Et = w(vt);
        ze = T(Et, "DIV", { class: !0 });
        var Nr = w(ze);
        (at = U(Nr, Q)), Nr.forEach(h), (gt = O(Et)), (Yt = T(Et, "DIV", {}));
        var Gn = w(Yt);
        ce(nt.$$.fragment, Gn),
          Gn.forEach(h),
          Et.forEach(h),
          (Tt = O(Ct)),
          (Ke = T(Ct, "DIV", { class: !0 }));
        var wt = w(Ke);
        Kt = T(wt, "DIV", { class: !0 });
        var Yr = w(Kt);
        (Nn = U(Yr, On)),
          Yr.forEach(h),
          (jn = O(wt)),
          (xe = T(wt, "DIV", { class: !0 }));
        var yn = w(xe);
        mt.l(yn),
          (Mn = O(yn)),
          (Ln = U(yn, e[4])),
          (zn = O(yn)),
          et && et.l(yn),
          yn.forEach(h),
          wt.forEach(h),
          (Ft = O(Ct)),
          (jt = T(Ct, "DIV", { class: !0 }));
        var Mr = w(jt);
        ce(Vt.$$.fragment, Mr),
          Mr.forEach(h),
          Ct.forEach(h),
          Be.forEach(h),
          this.h();
      },
      h() {
        p(r, "class", "left_title fw2 cf svelte-18cfhy7"),
          p(i, "class", "left_title_2 mt16 cf svelte-18cfhy7"),
          p(d, "class", "f14 lh16 mt8 cf svelte-18cfhy7"),
          p(P, "class", "f14 lh16 mt8 cf svelte-18cfhy7"),
          p(H, "class", "f14 lh16 mt8 cf svelte-18cfhy7"),
          p(x, "class", "left_title_2 mt24 cf svelte-18cfhy7"),
          p(ie, "class", "f14 lh16 mt12 cf svelte-18cfhy7"),
          p(z, "class", "f14 lh16 mt12 cf svelte-18cfhy7"),
          p(be, "class", "f14 lh16 mt12 cf svelte-18cfhy7"),
          p(K, "class", "left_title_2 mt36 cf f12 svelte-18cfhy7"),
          p(n, "class", "modal_left svelte-18cfhy7"),
          p(Fe, "class", "iconfont lh16 f16 T4 cp svelte-18cfhy7"),
          p(Oe, "class", "df jcfe close svelte-18cfhy7"),
          p(ct, "class", "right_title f16 T1"),
          p(pt, "class", "card mt12 svelte-18cfhy7"),
          p(ze, "class", "mt20 T2 f14 lh22"),
          p(Kt, "class", "T2 f14 lh22"),
          p(xe, "class", "T2 f14 lh22 df"),
          p(Ke, "class", "df jcsb mt24"),
          p(jt, "class", "mt12"),
          p(de, "class", "modal_right T1 svelte-18cfhy7"),
          p(t, "class", "main df fdr svelte-18cfhy7");
      },
      m(we, Be) {
        M(we, t, Be),
          f(t, n),
          f(n, r),
          f(r, o),
          f(n, a),
          f(n, i),
          f(i, c),
          f(n, u),
          f(n, d),
          f(d, g),
          f(d, v),
          f(d, I),
          f(d, C),
          f(d, D),
          f(d, E),
          f(n, b),
          f(n, P),
          f(P, N),
          f(n, S),
          f(n, H),
          f(H, G),
          f(n, re),
          f(n, x),
          f(x, V),
          f(n, ee),
          f(n, ie),
          f(ie, me),
          f(n, Ae),
          f(n, z),
          f(z, ne),
          f(n, Te),
          f(n, be),
          f(be, De),
          f(n, qe),
          f(n, K),
          f(K, Se),
          f(t, J),
          f(t, de),
          f(de, Oe),
          f(Oe, Fe),
          f(Fe, ge),
          f(de, $e),
          f(de, ct),
          f(ct, ut),
          f(de, bt),
          f(de, pt);
        for (let ke = 0; ke < Ve.length; ke += 1) Ve[ke].m(pt, null);
        f(de, yt),
          f(de, vt),
          f(vt, ze),
          f(ze, at),
          f(vt, gt),
          f(vt, Yt),
          ue(nt, Yt, null),
          f(de, Tt),
          f(de, Ke),
          f(Ke, Kt),
          f(Kt, Nn),
          f(Ke, jn),
          f(Ke, xe),
          mt.m(xe, null),
          f(xe, Mn),
          f(xe, Ln),
          f(xe, zn),
          et && et.m(xe, null),
          f(de, Ft),
          f(de, jt),
          ue(Vt, jt, null),
          (fn = !0),
          Jn || ((zt = Ie(Fe, "click", e[13])), (Jn = !0));
      },
      p(we, Be) {
        Be & 674 &&
          ((Fn = we[5]),
          (Ve = ai(Ve, Be, hr, 1, we, Fn, Ht, pt, Il, Qo, null, Ho)));
        const ke = {};
        Be & 16 && (ke.coin = we[4]),
          nt.$set(ke),
          Jt === (Jt = pr(we)) && mt
            ? mt.p(we, Be)
            : (mt.d(1), (mt = Jt(we)), mt && (mt.c(), mt.m(xe, Mn))),
          (!fn || Be & 16) && se(Ln, we[4]),
          we[4] !== "USDT"
            ? et
              ? et.p(we, Be)
              : ((et = Wo(we)), et.c(), et.m(xe, null))
            : et && (et.d(1), (et = null));
        const dn = {};
        Be & 8 && (dn.loading = we[3]),
          Be & 524288 && (dn.$$scope = { dirty: Be, ctx: we }),
          Vt.$set(dn);
      },
      i(we) {
        fn || (Y(nt.$$.fragment, we), Y(Vt.$$.fragment, we), (fn = !0));
      },
      o(we) {
        q(nt.$$.fragment, we), q(Vt.$$.fragment, we), (fn = !1);
      },
      d(we) {
        we && h(t);
        for (let Be = 0; Be < Ve.length; Be += 1) Ve[Be].d();
        fe(nt), mt.d(), et && et.d(), fe(Vt), (Jn = !1), zt();
      },
    }
  );
}
function mf(e) {
  let t,
    n,
    r = e[0] && Yo(e);
  return {
    c() {
      r && r.c(), (t = Ue());
    },
    l(s) {
      r && r.l(s), (t = Ue());
    },
    m(s, o) {
      r && r.m(s, o), M(s, t, o), (n = !0);
    },
    p(s, [o]) {
      s[0]
        ? r
          ? (r.p(s, o), o & 1 && Y(r, 1))
          : ((r = Yo(s)), r.c(), Y(r, 1), r.m(t.parentNode, t))
        : r &&
          (Mt(),
          q(r, 1, 1, () => {
            r = null;
          }),
          Lt());
    },
    i(s) {
      n || (Y(r), (n = !0));
    },
    o(s) {
      q(r), (n = !1);
    },
    d(s) {
      r && r.d(s), s && h(t);
    },
  };
}
function _f(e, t, n) {
  let r, s, o, a;
  Me(e, Ni, (D) => n(15, (r = D))),
    Me(e, Xr, (D) => n(12, (s = D))),
    Me(e, Mi, (D) => n(5, (o = D))),
    Me(e, uf, (D) => n(6, (a = D)));
  const i = Pn("LG"),
    l = i(Nt.BuyText);
  let c = !1,
    u = "purchasePlan30V1",
    d = "9.9",
    m = !1,
    g;
  tt(() =>
    oe.subscribe("buy-premium", "dialog-show", ({ record: D }) => {
      Xr.next("BTC"),
        n(1, (u = D.membershipType)),
        n(2, (d = D.price)),
        Ss.next(D.price),
        n(0, (c = !0));
    })
  );
  function v(D) {
    an.track("choose_premium_days", { membership_days: D.days }),
      n(1, (u = D.membershipType)),
      n(2, (d = D.price)),
      Ss.next(D.price);
  }
  async function _() {
    n(3, (m = !0));
    const D = { membershipType: u, currencyName: g, autoRenew: "0" },
      { data: E, error: b } = await os.buyMembershipPurchase(D);
    if ((n(0, (c = !1)), E)) {
      const P = { type: "success", membershipType: u, price: d, data: E };
      oe.send("buy-success", "dialog-show", { record: P }),
        oe.send("reload-base-membership", "action"),
        oe.send("reload-share-time", "action");
    }
    if (b) {
      const { code: P, message: R } = b,
        N = i(Br[P]) || R,
        S = { type: "error", membershipType: u, price: d, code: P, message: N };
      oe.send("buy-success", "dialog-show", { record: S });
    }
    n(3, (m = !1));
  }
  function I(D) {
    return D.filter((E) => r.indexOf(E.value) > -1);
  }
  const C = () => n(0, (c = !1)),
    k = (D) => Xr.next(D.detail.value);
  return (
    (e.$$.update = () => {
      e.$$.dirty & 4096 && n(4, (g = s));
    }),
    [c, u, d, m, g, o, a, i, l, v, _, I, s, C, k]
  );
}
class vf extends He {
  constructor(t) {
    super(), Ye(this, t, _f, mf, Qe, {});
  }
}
const ln = {
  OrderSuccess: "7023c9",
  CheckPremium: "7355b5",
  OrderFaild: "a15947",
  TryAgain: "e2a0f5",
  Cancel: "5c6ed7",
  AmountSpent: "e548c2",
  PaymentCoin: "877b68",
  Product: "60340e",
  day30: "ab2332",
  day90: "bee423",
  day365: "5f8959",
};
const { window: Fi } = Os;
function qo(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        style: e[8],
        $$slots: { footer: [If], header: [bf] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s & 256 && (o.style = r[8]),
          s & 262398 && (o.$$scope = { dirty: s, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function bf(e) {
  let t, n, r, s, o, a, i, l;
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = B(e[2])),
        (s = A()),
        (o = y("i")),
        (a = B("")),
        this.h();
    },
    l(c) {
      t = T(c, "DIV", { class: !0, slot: !0 });
      var u = w(t);
      n = T(u, "DIV", { class: !0 });
      var d = w(n);
      (r = U(d, e[2])),
        d.forEach(h),
        (s = O(u)),
        (o = T(u, "I", { class: !0 }));
      var m = w(o);
      (a = U(m, "")), m.forEach(h), u.forEach(h), this.h();
    },
    h() {
      p(n, "class", "lh24 fw2 f18 T1"),
        p(o, "class", "iconfont lh12 f12 T4 cp"),
        p(t, "class", "lh24 b f16 T2 df jcsb"),
        p(t, "slot", "header");
    },
    m(c, u) {
      M(c, t, u),
        f(t, n),
        f(n, r),
        f(t, s),
        f(t, o),
        f(o, a),
        i || ((l = Ie(o, "click", e[15])), (i = !0));
    },
    p(c, u) {
      u & 4 && se(r, c[2]);
    },
    d(c) {
      c && h(t), (i = !1), l();
    },
  };
}
function yf(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i,
    l = (Br[e[5]] ? e[9](Br[e[5]]) : e[7]) + "",
    c,
    u,
    d,
    m,
    g,
    v;
  return (
    (d = new Bt({
      props: {
        type: "primary",
        $$slots: { default: [Cf] },
        $$scope: { ctx: e },
      },
    })),
    d.$on("click", e[11]),
    (g = new Bt({
      props: {
        type: "default",
        $$slots: { default: [Ef] },
        $$scope: { ctx: e },
      },
    })),
    g.$on("click", e[14]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = y("div")),
          (s = y("img")),
          (a = A()),
          (i = y("div")),
          (c = A()),
          (u = y("div")),
          le(d.$$.fragment),
          (m = A()),
          le(g.$$.fragment),
          this.h();
      },
      l(_) {
        t = T(_, "DIV", {});
        var I = w(t);
        n = T(I, "DIV", { class: !0 });
        var C = w(n);
        r = T(C, "DIV", { class: !0 });
        var k = w(r);
        (s = T(k, "IMG", { src: !0, alt: !0, class: !0 })),
          k.forEach(h),
          (a = O(C)),
          (i = T(C, "DIV", { class: !0 }));
        var D = w(i);
        D.forEach(h),
          C.forEach(h),
          (c = O(I)),
          (u = T(I, "DIV", { class: !0 }));
        var E = w(u);
        ce(d.$$.fragment, E),
          (m = O(E)),
          ce(g.$$.fragment, E),
          E.forEach(h),
          I.forEach(h),
          this.h();
      },
      h() {
        st(s.src, (o = af)) || p(s, "src", o),
          p(s, "alt", "Error"),
          p(s, "class", "svelte-a711tm"),
          p(r, "class", "icon svelte-a711tm"),
          p(i, "class", "f14 lh18 T2 mt8 tc"),
          p(n, "class", "df fdc aic"),
          p(u, "class", "df jcsb mt42 svelte-a711tm");
      },
      m(_, I) {
        M(_, t, I),
          f(t, n),
          f(n, r),
          f(r, s),
          f(n, a),
          f(n, i),
          (i.innerHTML = l),
          f(t, c),
          f(t, u),
          ue(d, u, null),
          f(u, m),
          ue(g, u, null),
          (v = !0);
      },
      p(_, I) {
        (!v || I & 160) &&
          l !== (l = (Br[_[5]] ? _[9](Br[_[5]]) : _[7]) + "") &&
          (i.innerHTML = l);
        const C = {};
        I & 262144 && (C.$$scope = { dirty: I, ctx: _ }), d.$set(C);
        const k = {};
        I & 262144 && (k.$$scope = { dirty: I, ctx: _ }), g.$set(k);
      },
      i(_) {
        v || (Y(d.$$.fragment, _), Y(g.$$.fragment, _), (v = !0));
      },
      o(_) {
        q(d.$$.fragment, _), q(g.$$.fragment, _), (v = !1);
      },
      d(_) {
        _ && h(t), fe(d), fe(g);
      },
    }
  );
}
function Tf(e) {
  let t,
    n,
    r,
    s,
    o = e[9](ln.AmountSpent) + "",
    a,
    i,
    l,
    c = $.floor(e[6].amountEv, 8, 8) + "",
    u,
    d,
    m = e[6].currency + "",
    g,
    v,
    _,
    I,
    C = e[9](ln.PaymentCoin) + "",
    k,
    D,
    E,
    b,
    P,
    R,
    N,
    S = e[6].currency + "",
    H,
    F,
    G,
    re,
    x = e[9](ln.Product) + "",
    ae,
    V,
    ee,
    ie = e[10][e[4]] + "",
    Z,
    me,
    Ae,
    z,
    te;
  return (
    (z = new Bt({
      props: {
        type: "primary",
        minWidth: "100%",
        $$slots: { default: [wf] },
        $$scope: { ctx: e },
      },
    })),
    z.$on("click", e[12]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = y("div")),
          (s = y("label")),
          (a = B(o)),
          (i = A()),
          (l = y("span")),
          (u = B(c)),
          (d = A()),
          (g = B(m)),
          (v = A()),
          (_ = y("div")),
          (I = y("label")),
          (k = B(C)),
          (D = A()),
          (E = y("span")),
          (b = y("img")),
          (R = A()),
          (N = y("span")),
          (H = B(S)),
          (F = A()),
          (G = y("div")),
          (re = y("label")),
          (ae = B(x)),
          (V = A()),
          (ee = y("span")),
          (Z = B(ie)),
          (me = A()),
          (Ae = y("div")),
          le(z.$$.fragment),
          this.h();
      },
      l(ne) {
        t = T(ne, "DIV", {});
        var Te = w(t);
        n = T(Te, "DIV", { class: !0 });
        var be = w(n);
        r = T(be, "DIV", { class: !0 });
        var Pe = w(r);
        s = T(Pe, "LABEL", { class: !0 });
        var De = w(s);
        (a = U(De, o)),
          De.forEach(h),
          (i = O(Pe)),
          (l = T(Pe, "SPAN", { class: !0 }));
        var qe = w(l);
        (u = U(qe, c)),
          (d = O(qe)),
          (g = U(qe, m)),
          qe.forEach(h),
          Pe.forEach(h),
          (v = O(be)),
          (_ = T(be, "DIV", { class: !0 }));
        var K = w(_);
        I = T(K, "LABEL", { class: !0 });
        var Ee = w(I);
        (k = U(Ee, C)),
          Ee.forEach(h),
          (D = O(K)),
          (E = T(K, "SPAN", { class: !0 }));
        var Se = w(E);
        (b = T(Se, "IMG", { class: !0, src: !0, alt: !0 })),
          (R = O(Se)),
          (N = T(Se, "SPAN", { class: !0 }));
        var J = w(N);
        (H = U(J, S)),
          J.forEach(h),
          Se.forEach(h),
          K.forEach(h),
          (F = O(be)),
          (G = T(be, "DIV", { class: !0 }));
        var de = w(G);
        re = T(de, "LABEL", { class: !0 });
        var Oe = w(re);
        (ae = U(Oe, x)),
          Oe.forEach(h),
          (V = O(de)),
          (ee = T(de, "SPAN", { class: !0 }));
        var Fe = w(ee);
        (Z = U(Fe, ie)),
          Fe.forEach(h),
          de.forEach(h),
          be.forEach(h),
          (me = O(Te)),
          (Ae = T(Te, "DIV", { class: !0 }));
        var ge = w(Ae);
        ce(z.$$.fragment, ge), ge.forEach(h), Te.forEach(h), this.h();
      },
      h() {
        p(s, "class", "f14"),
          p(l, "class", "fw2"),
          p(r, "class", "df jcsb T2 lh22 wp80 wsn svelte-a711tm"),
          p(I, "class", "f14"),
          p(b, "class", "w18  svelte-a711tm"),
          st(b.src, (P = vn.getUrl(e[6].currency))) || p(b, "src", P),
          p(b, "alt", "Coin"),
          p(N, "class", "ml4"),
          p(E, "class", "fw2 df aic"),
          p(_, "class", "df jcsb T2 lh22 mt12 wp80 wsn svelte-a711tm"),
          p(re, "class", "f14"),
          p(ee, "class", "fw2"),
          p(G, "class", "df jcsb T2 lh22 mt12 wp80 wsn svelte-a711tm"),
          p(n, "class", "df fdc aic"),
          p(Ae, "class", "df jcsb mt42 svelte-a711tm");
      },
      m(ne, Te) {
        M(ne, t, Te),
          f(t, n),
          f(n, r),
          f(r, s),
          f(s, a),
          f(r, i),
          f(r, l),
          f(l, u),
          f(l, d),
          f(l, g),
          f(n, v),
          f(n, _),
          f(_, I),
          f(I, k),
          f(_, D),
          f(_, E),
          f(E, b),
          f(E, R),
          f(E, N),
          f(N, H),
          f(n, F),
          f(n, G),
          f(G, re),
          f(re, ae),
          f(G, V),
          f(G, ee),
          f(ee, Z),
          f(t, me),
          f(t, Ae),
          ue(z, Ae, null),
          (te = !0);
      },
      p(ne, Te) {
        (!te || Te & 64) &&
          c !== (c = $.floor(ne[6].amountEv, 8, 8) + "") &&
          se(u, c),
          (!te || Te & 64) && m !== (m = ne[6].currency + "") && se(g, m),
          (!te || (Te & 64 && !st(b.src, (P = vn.getUrl(ne[6].currency))))) &&
            p(b, "src", P),
          (!te || Te & 64) && S !== (S = ne[6].currency + "") && se(H, S),
          (!te || Te & 16) && ie !== (ie = ne[10][ne[4]] + "") && se(Z, ie);
        const be = {};
        Te & 262144 && (be.$$scope = { dirty: Te, ctx: ne }), z.$set(be);
      },
      i(ne) {
        te || (Y(z.$$.fragment, ne), (te = !0));
      },
      o(ne) {
        q(z.$$.fragment, ne), (te = !1);
      },
      d(ne) {
        ne && h(t), fe(z);
      },
    }
  );
}
function Cf(e) {
  let t = e[9](ln.TryAgain) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function Ef(e) {
  let t = e[9](ln.Cancel) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function wf(e) {
  let t = e[9](ln.CheckPremium) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function If(e) {
  let t, n, r, s;
  const o = [Tf, yf],
    a = [];
  function i(l, c) {
    return l[3] === "success" ? 0 : 1;
  }
  return (
    (n = i(e)),
    (r = a[n] = o[n](e)),
    {
      c() {
        (t = y("div")), r.c(), this.h();
      },
      l(l) {
        t = T(l, "DIV", { class: !0, slot: !0 });
        var c = w(t);
        r.l(c), c.forEach(h), this.h();
      },
      h() {
        p(t, "class", "footer df fdc svelte-a711tm"), p(t, "slot", "footer");
      },
      m(l, c) {
        M(l, t, c), a[n].m(t, null), (s = !0);
      },
      p(l, c) {
        let u = n;
        (n = i(l)),
          n === u
            ? a[n].p(l, c)
            : (Mt(),
              q(a[u], 1, 1, () => {
                a[u] = null;
              }),
              Lt(),
              (r = a[n]),
              r ? r.p(l, c) : ((r = a[n] = o[n](l)), r.c()),
              Y(r, 1),
              r.m(t, null));
      },
      i(l) {
        s || (Y(r), (s = !0));
      },
      o(l) {
        q(r), (s = !1);
      },
      d(l) {
        l && h(t), a[n].d();
      },
    }
  );
}
function Df(e) {
  let t, n, r, s;
  Qn(e[13]);
  let o = e[1] && qo(e);
  return {
    c() {
      o && o.c(), (t = Ue());
    },
    l(a) {
      o && o.l(a), (t = Ue());
    },
    m(a, i) {
      o && o.m(a, i),
        M(a, t, i),
        (n = !0),
        r || ((s = Ie(Fi, "resize", e[13])), (r = !0));
    },
    p(a, [i]) {
      a[1]
        ? o
          ? (o.p(a, i), i & 2 && Y(o, 1))
          : ((o = qo(a)), o.c(), Y(o, 1), o.m(t.parentNode, t))
        : o &&
          (Mt(),
          q(o, 1, 1, () => {
            o = null;
          }),
          Lt());
    },
    i(a) {
      n || (Y(o), (n = !0));
    },
    o(a) {
      q(o), (n = !1);
    },
    d(a) {
      o && o.d(a), a && h(t), (r = !1), s();
    },
  };
}
function kf(e, t, n) {
  let r, s;
  Me(e, Ls, (b) => n(17, (s = b)));
  const o = Pn("LG"),
    a = {
      purchasePlan30V1: o(ln.day30),
      purchasePlan90V1: o(ln.day90),
      purchasePlan365V1: o(ln.day365),
    };
  let i = !1,
    l,
    c,
    u,
    d,
    m = 1080,
    g,
    v,
    _;
  tt(() =>
    oe.subscribe("buy-success", "dialog-show", ({ record: b }) => {
      n(3, (c = b.type)),
        n(4, (u = b.membershipType)),
        (d = b.price),
        n(5, (g = b.code)),
        n(6, (v = b.data)),
        n(7, (_ = b.message)),
        n(2, (l = o(c === "success" ? ln.OrderSuccess : ln.OrderFaild))),
        n(1, (i = !0));
    })
  );
  function I() {
    const b = { membershipType: u, price: d };
    n(1, (i = !1)), oe.send("buy-premium", "dialog-show", { record: b });
  }
  function C() {
    n(1, (i = !1)), window.location.assign(s(Zt.ACCOUNT_OVERVIEW.pathname));
  }
  function k() {
    n(0, (m = Fi.innerWidth));
  }
  const D = () => n(1, (i = !1)),
    E = () => n(1, (i = !1));
  return (
    (e.$$.update = () => {
      e.$$.dirty & 1 && n(8, (r = m > 640 ? "width:360px;" : ""));
    }),
    [m, i, l, c, u, g, v, _, r, o, a, I, C, k, D, E]
  );
}
class Sf extends He {
  constructor(t) {
    super(), Ye(this, t, kf, Df, Qe, {});
  }
}
const Pf = (e, t, n, r = 0) => {
    let s = new Date(t, e, 1);
    s.setDate(s.getDate() - s.getDay() + r);
    let o = e === 11 ? 0 : e + 1,
      a = [];
    for (; s.getMonth() !== o || s.getDay() !== r || a.length !== 6; ) {
      s.getDay() === r &&
        a.unshift({ days: [], id: `${t}${e}${t}${a.length}` });
      const i = Object.assign(
        {
          partOfMonth: s.getMonth() === e,
          day: s.getDate(),
          month: s.getMonth(),
          year: s.getFullYear(),
          date: new Date(s),
        },
        n(s)
      );
      a[0].days.push(i), s.setDate(s.getDate() + 1);
    }
    return a.reverse(), { month: e, year: t, weeks: a };
  },
  Rf = (e, t, n) => {
    let r = new Date();
    return (
      r.setHours(0, 0, 0, 0),
      (s) => {
        const o = s >= e && s <= t;
        return {
          isInRange: o,
          selectable: o && (!n || n(s)),
          isToday: s.getTime() === r.getTime(),
        };
      }
    );
  };
function Af(e, t, n = null, r = 0) {
  e.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0);
  let s = new Date(t.getFullYear(), t.getMonth() + 1, 1),
    o = [],
    a = new Date(e.getFullYear(), e.getMonth(), 1),
    i = Rf(e, t, n);
  for (; a < s; )
    o.push(Pf(a.getMonth(), a.getFullYear(), i, r)),
      a.setMonth(a.getMonth() + 1);
  return o;
}
const Dr = (e, t) =>
  e.getDate() === t.getDate() &&
  e.getMonth() === t.getMonth() &&
  e.getFullYear() === t.getFullYear();
function Ko(e, t, n) {
  const r = e.slice();
  return (r[7] = t[n]), r;
}
function jo(e) {
  let t,
    n,
    r = e[7].date.getDate() + "",
    s,
    o,
    a,
    i;
  function l() {
    return e[6](e[7]);
  }
  return {
    c() {
      (t = y("div")), (n = y("button")), (s = B(r)), (o = A()), this.h();
    },
    l(c) {
      t = T(c, "DIV", { class: !0 });
      var u = w(t);
      n = T(u, "BUTTON", { class: !0, type: !0 });
      var d = w(n);
      (s = U(d, r)), d.forEach(h), (o = O(u)), u.forEach(h), this.h();
    },
    h() {
      p(n, "class", "day--label svelte-1f2gkwh"),
        p(n, "type", "button"),
        X(n, "selected", Dr(e[7].date, e[1])),
        X(n, "highlighted", Dr(e[7].date, e[2])),
        X(n, "shake-date", e[3] && Dr(e[7].date, e[3])),
        X(n, "disabled", !e[7].selectable),
        p(t, "class", "day svelte-1f2gkwh"),
        X(t, "outside-month", !e[7].partOfMonth),
        X(t, "is-today", e[7].isToday),
        X(t, "is-disabled", !e[7].selectable);
    },
    m(c, u) {
      M(c, t, u),
        f(t, n),
        f(n, s),
        f(t, o),
        a || ((i = Ie(n, "click", l)), (a = !0));
    },
    p(c, u) {
      (e = c),
        u & 1 && r !== (r = e[7].date.getDate() + "") && se(s, r),
        u & 3 && X(n, "selected", Dr(e[7].date, e[1])),
        u & 5 && X(n, "highlighted", Dr(e[7].date, e[2])),
        u & 9 && X(n, "shake-date", e[3] && Dr(e[7].date, e[3])),
        u & 1 && X(n, "disabled", !e[7].selectable),
        u & 1 && X(t, "outside-month", !e[7].partOfMonth),
        u & 1 && X(t, "is-today", e[7].isToday),
        u & 1 && X(t, "is-disabled", !e[7].selectable);
    },
    d(c) {
      c && h(t), (a = !1), i();
    },
  };
}
function Of(e) {
  let t,
    n,
    r,
    s,
    o = e[0],
    a = [];
  for (let i = 0; i < o.length; i += 1) a[i] = jo(Ko(e, o, i));
  return {
    c() {
      t = y("div");
      for (let i = 0; i < a.length; i += 1) a[i].c();
      this.h();
    },
    l(i) {
      t = T(i, "DIV", { class: !0 });
      var l = w(t);
      for (let c = 0; c < a.length; c += 1) a[c].l(l);
      l.forEach(h), this.h();
    },
    h() {
      p(t, "class", "week svelte-1f2gkwh");
    },
    m(i, l) {
      M(i, t, l);
      for (let c = 0; c < a.length; c += 1) a[c].m(t, null);
      s = !0;
    },
    p(i, [l]) {
      if (((e = i), l & 47)) {
        o = e[0];
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = Ko(e, o, c);
          a[c] ? a[c].p(u, l) : ((a[c] = jo(u)), a[c].c(), a[c].m(t, null));
        }
        for (; c < a.length; c += 1) a[c].d(1);
        a.length = o.length;
      }
    },
    i(i) {
      s ||
        (i &&
          Qn(() => {
            r && r.end(1),
              (n = Rs(t, Wl, { x: e[4] * 50, duration: 180, delay: 90 })),
              n.start();
          }),
        (s = !0));
    },
    o(i) {
      n && n.invalidate(), i && (r = As(t, cr, { duration: 180 })), (s = !1);
    },
    d(i) {
      i && h(t), or(a, i), i && r && r.end();
    },
  };
}
function Nf(e, t, n) {
  const r = Ut();
  let { days: s } = t,
    { selected: o } = t,
    { highlighted: a } = t,
    { shouldShakeDate: i } = t,
    { direction: l } = t;
  const c = (u) => r("dateSelected", u.date);
  return (
    (e.$$set = (u) => {
      "days" in u && n(0, (s = u.days)),
        "selected" in u && n(1, (o = u.selected)),
        "highlighted" in u && n(2, (a = u.highlighted)),
        "shouldShakeDate" in u && n(3, (i = u.shouldShakeDate)),
        "direction" in u && n(4, (l = u.direction));
    }),
    [s, o, a, i, l, r, c]
  );
}
class Mf extends He {
  constructor(t) {
    super(),
      Ye(this, t, Nf, Of, Qe, {
        days: 0,
        selected: 1,
        highlighted: 2,
        shouldShakeDate: 3,
        direction: 4,
      });
  }
}
function zo(e, t, n) {
  const r = e.slice();
  return (r[8] = t[n]), r;
}
function Jo(e, t) {
  let n, r, s;
  return (
    (r = new Mf({
      props: {
        days: t[8].days,
        selected: t[1],
        highlighted: t[2],
        shouldShakeDate: t[3],
        direction: t[4],
      },
    })),
    r.$on("dateSelected", t[7]),
    {
      key: e,
      first: null,
      c() {
        (n = Ue()), le(r.$$.fragment), this.h();
      },
      l(o) {
        (n = Ue()), ce(r.$$.fragment, o), this.h();
      },
      h() {
        this.first = n;
      },
      m(o, a) {
        M(o, n, a), ue(r, o, a), (s = !0);
      },
      p(o, a) {
        t = o;
        const i = {};
        a & 1 && (i.days = t[8].days),
          a & 2 && (i.selected = t[1]),
          a & 4 && (i.highlighted = t[2]),
          a & 8 && (i.shouldShakeDate = t[3]),
          a & 16 && (i.direction = t[4]),
          r.$set(i);
      },
      i(o) {
        s || (Y(r.$$.fragment, o), (s = !0));
      },
      o(o) {
        q(r.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && h(n), fe(r, o);
      },
    }
  );
}
function Lf(e) {
  let t,
    n = [],
    r = new Map(),
    s,
    o = e[0].weeks;
  const a = (i) => i[8].id;
  for (let i = 0; i < o.length; i += 1) {
    let l = zo(e, o, i),
      c = a(l);
    r.set(c, (n[i] = Jo(c, l)));
  }
  return {
    c() {
      t = y("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      t = T(i, "DIV", { class: !0 });
      var l = w(t);
      for (let c = 0; c < n.length; c += 1) n[c].l(l);
      l.forEach(h), this.h();
    },
    h() {
      p(t, "class", "month-container svelte-ny3kda");
    },
    m(i, l) {
      M(i, t, l);
      for (let c = 0; c < n.length; c += 1) n[c].m(t, null);
      s = !0;
    },
    p(i, [l]) {
      l & 31 &&
        ((o = i[0].weeks),
        Mt(),
        (n = ai(n, l, a, 1, i, o, r, t, Dl, Jo, null, zo)),
        Lt());
    },
    i(i) {
      if (!s) {
        for (let l = 0; l < o.length; l += 1) Y(n[l]);
        s = !0;
      }
    },
    o(i) {
      for (let l = 0; l < n.length; l += 1) q(n[l]);
      s = !1;
    },
    d(i) {
      i && h(t);
      for (let l = 0; l < n.length; l += 1) n[l].d();
    },
  };
}
function Ff(e, t, n) {
  let { id: r } = t,
    { visibleMonth: s } = t,
    { selected: o } = t,
    { highlighted: a } = t,
    { shouldShakeDate: i } = t,
    l = r,
    c;
  function u(d) {
    nn.call(this, e, d);
  }
  return (
    (e.$$set = (d) => {
      "id" in d && n(5, (r = d.id)),
        "visibleMonth" in d && n(0, (s = d.visibleMonth)),
        "selected" in d && n(1, (o = d.selected)),
        "highlighted" in d && n(2, (a = d.highlighted)),
        "shouldShakeDate" in d && n(3, (i = d.shouldShakeDate));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 96 && (n(4, (c = l < r ? 1 : -1)), n(6, (l = r)));
    }),
    [s, o, a, i, c, r, l, u]
  );
}
class Vf extends He {
  constructor(t) {
    super(),
      Ye(this, t, Ff, Lf, Qe, {
        id: 5,
        visibleMonth: 0,
        selected: 1,
        highlighted: 2,
        shouldShakeDate: 3,
      });
  }
}
function Xo(e, t, n) {
  const r = e.slice();
  return (r[15] = t[n]), (r[17] = n), r;
}
function Zo(e) {
  let t,
    n,
    r = e[15].abbrev + "",
    s,
    o,
    a,
    i;
  function l(...c) {
    return e[14](e[15], e[17], ...c);
  }
  return {
    c() {
      (t = y("div")), (n = y("span")), (s = B(r)), (o = A()), this.h();
    },
    l(c) {
      t = T(c, "DIV", { class: !0 });
      var u = w(t);
      n = T(u, "SPAN", { class: !0 });
      var d = w(n);
      (s = U(d, r)), d.forEach(h), (o = O(u)), u.forEach(h), this.h();
    },
    h() {
      p(n, "class", "svelte-1dqf106"),
        p(t, "class", "month-selector--month svelte-1dqf106"),
        X(t, "selected", e[17] === e[0]),
        X(t, "selectable", e[15].selectable);
    },
    m(c, u) {
      M(c, t, u),
        f(t, n),
        f(n, s),
        f(t, o),
        a || ((i = Ie(t, "click", l)), (a = !0));
    },
    p(c, u) {
      (e = c),
        u & 64 && r !== (r = e[15].abbrev + "") && se(s, r),
        u & 1 && X(t, "selected", e[17] === e[0]),
        u & 64 && X(t, "selectable", e[15].selectable);
    },
    d(c) {
      c && h(t), (a = !1), i();
    },
  };
}
function Bf(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i = e[4][e[0]][0] + "",
    l,
    c,
    u,
    d,
    m,
    g,
    v,
    _,
    I,
    C,
    k = e[6],
    D = [];
  for (let E = 0; E < k.length; E += 1) D[E] = Zo(Xo(e, k, E));
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = y("div")),
        (s = y("i")),
        (o = A()),
        (a = y("div")),
        (l = B(i)),
        (c = A()),
        (u = B(e[1])),
        (d = A()),
        (m = y("div")),
        (g = y("i")),
        (v = A()),
        (_ = y("div"));
      for (let E = 0; E < D.length; E += 1) D[E].c();
      this.h();
    },
    l(E) {
      t = T(E, "DIV", { class: !0 });
      var b = w(t);
      n = T(b, "DIV", { class: !0 });
      var P = w(n);
      r = T(P, "DIV", { class: !0 });
      var R = w(r);
      (s = T(R, "I", { class: !0 })),
        w(s).forEach(h),
        R.forEach(h),
        (o = O(P)),
        (a = T(P, "DIV", { class: !0 }));
      var N = w(a);
      (l = U(N, i)),
        (c = O(N)),
        (u = U(N, e[1])),
        N.forEach(h),
        (d = O(P)),
        (m = T(P, "DIV", { class: !0 }));
      var S = w(m);
      (g = T(S, "I", { class: !0 })),
        w(g).forEach(h),
        S.forEach(h),
        P.forEach(h),
        (v = O(b)),
        (_ = T(b, "DIV", { class: !0 }));
      var H = w(_);
      for (let F = 0; F < D.length; F += 1) D[F].l(H);
      H.forEach(h), b.forEach(h), this.h();
    },
    h() {
      p(s, "class", "arrow left svelte-1dqf106"),
        p(r, "class", "control svelte-1dqf106"),
        X(r, "enabled", e[3]),
        p(a, "class", "label svelte-1dqf106"),
        p(g, "class", "arrow right svelte-1dqf106"),
        p(m, "class", "control svelte-1dqf106"),
        X(m, "enabled", e[2]),
        p(n, "class", "heading-section svelte-1dqf106"),
        p(_, "class", "month-selector svelte-1dqf106"),
        X(_, "open", e[5]),
        p(t, "class", "title");
    },
    m(E, b) {
      M(E, t, b),
        f(t, n),
        f(n, r),
        f(r, s),
        f(n, o),
        f(n, a),
        f(a, l),
        f(a, c),
        f(a, u),
        f(n, d),
        f(n, m),
        f(m, g),
        f(t, v),
        f(t, _);
      for (let P = 0; P < D.length; P += 1) D[P].m(_, null);
      I ||
        ((C = [
          Ie(r, "click", e[12]),
          Ie(a, "click", e[8]),
          Ie(m, "click", e[13]),
        ]),
        (I = !0));
    },
    p(E, [b]) {
      if (
        (b & 8 && X(r, "enabled", E[3]),
        b & 17 && i !== (i = E[4][E[0]][0] + "") && se(l, i),
        b & 2 && se(u, E[1]),
        b & 4 && X(m, "enabled", E[2]),
        b & 577)
      ) {
        k = E[6];
        let P;
        for (P = 0; P < k.length; P += 1) {
          const R = Xo(E, k, P);
          D[P] ? D[P].p(R, b) : ((D[P] = Zo(R)), D[P].c(), D[P].m(_, null));
        }
        for (; P < D.length; P += 1) D[P].d(1);
        D.length = k.length;
      }
      b & 32 && X(_, "open", E[5]);
    },
    i: je,
    o: je,
    d(E) {
      E && h(t), or(D, E), (I = !1), Hr(C);
    },
  };
}
function Uf(e, t, n) {
  const r = Ut();
  let { month: s } = t,
    { year: o } = t,
    { start: a } = t,
    { end: i } = t,
    { canIncrementMonth: l } = t,
    { canDecrementMonth: c } = t,
    { monthsOfYear: u } = t,
    d = !1,
    m;
  function g() {
    n(5, (d = !d));
  }
  function v(k, { m: D, i: E }) {
    k.stopPropagation(), D.selectable && (r("monthSelected", E), g());
  }
  const _ = () => r("incrementMonth", -1),
    I = () => r("incrementMonth", 1),
    C = (k, D, E) => v(E, { m: k, i: D });
  return (
    (e.$$set = (k) => {
      "month" in k && n(0, (s = k.month)),
        "year" in k && n(1, (o = k.year)),
        "start" in k && n(10, (a = k.start)),
        "end" in k && n(11, (i = k.end)),
        "canIncrementMonth" in k && n(2, (l = k.canIncrementMonth)),
        "canDecrementMonth" in k && n(3, (c = k.canDecrementMonth)),
        "monthsOfYear" in k && n(4, (u = k.monthsOfYear));
    }),
    (e.$$.update = () => {
      if (e.$$.dirty & 3090) {
        let k = a.getFullYear() === o,
          D = i.getFullYear() === o;
        n(
          6,
          (m = u.map((E, b) =>
            Object.assign(
              {},
              { name: E[0], abbrev: E[1] },
              {
                selectable:
                  (!k && !D) ||
                  ((!k || b >= a.getMonth()) && (!D || b <= i.getMonth())),
              }
            )
          ))
        );
      }
    }),
    [s, o, l, c, u, d, m, r, g, v, a, i, _, I, C]
  );
}
class $f extends He {
  constructor(t) {
    super(),
      Ye(this, t, Uf, Bf, Qe, {
        month: 0,
        year: 1,
        start: 10,
        end: 11,
        canIncrementMonth: 2,
        canDecrementMonth: 3,
        monthsOfYear: 4,
      });
  }
}
const { window: Vi } = Os,
  Hf = (e) => ({}),
  Go = (e) => ({}),
  Yf = (e) => ({}),
  xo = (e) => ({});
function Qf(e) {
  let t, n, r, s, o, a, i, l, c;
  Qn(e[14]);
  const u = e[13].trigger,
    d = pn(u, e, e[12], xo),
    m = e[13].contents,
    g = pn(m, e, e[12], Go);
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        d && d.c(),
        (r = A()),
        (s = y("div")),
        (o = y("div")),
        (a = y("div")),
        g && g.c(),
        this.h();
    },
    l(v) {
      t = T(v, "DIV", { class: !0 });
      var _ = w(t);
      n = T(_, "DIV", { class: !0 });
      var I = w(n);
      d && d.l(I),
        I.forEach(h),
        (r = O(_)),
        (s = T(_, "DIV", { class: !0, style: !0 }));
      var C = w(s);
      o = T(C, "DIV", { class: !0 });
      var k = w(o);
      a = T(k, "DIV", { class: !0 });
      var D = w(a);
      g && g.l(D),
        D.forEach(h),
        k.forEach(h),
        C.forEach(h),
        _.forEach(h),
        this.h();
    },
    h() {
      p(n, "class", "trigger"),
        p(a, "class", "contents-inner svelte-mc1z8c"),
        p(o, "class", "contents svelte-mc1z8c"),
        p(s, "class", "contents-wrapper svelte-mc1z8c"),
        lr(
          s,
          "transform",
          "translate(-50%,-50%) translate(" + e[8] + "px, " + e[7] + "px)"
        ),
        X(s, "visible", e[0]),
        X(s, "shrink", e[1]),
        p(t, "class", "sc-popover svelte-mc1z8c");
    },
    m(v, _) {
      M(v, t, _),
        f(t, n),
        d && d.m(n, null),
        e[15](n),
        f(t, r),
        f(t, s),
        f(s, o),
        f(o, a),
        g && g.m(a, null),
        e[16](o),
        e[17](s),
        e[18](t),
        (i = !0),
        l || ((c = [Ie(Vi, "resize", e[14]), Ie(n, "click", e[9])]), (l = !0));
    },
    p(v, [_]) {
      d &&
        d.p &&
        (!i || _ & 4096) &&
        gn(d, u, v, v[12], i ? _n(u, v[12], _, Yf) : mn(v[12]), xo),
        g &&
          g.p &&
          (!i || _ & 4096) &&
          gn(g, m, v, v[12], i ? _n(m, v[12], _, Hf) : mn(v[12]), Go),
        (!i || _ & 384) &&
          lr(
            s,
            "transform",
            "translate(-50%,-50%) translate(" + v[8] + "px, " + v[7] + "px)"
          ),
        (!i || _ & 1) && X(s, "visible", v[0]),
        (!i || _ & 2) && X(s, "shrink", v[1]);
    },
    i(v) {
      i || (Y(d, v), Y(g, v), (i = !0));
    },
    o(v) {
      q(d, v), q(g, v), (i = !1);
    },
    d(v) {
      v && h(t),
        d && d.d(v),
        e[15](null),
        g && g.d(v),
        e[16](null),
        e[17](null),
        e[18](null),
        (l = !1),
        Hr(c);
    },
  };
}
function Wf(e, t, n) {
  let { $$slots: r = {}, $$scope: s } = t;
  const o = Ut();
  let a = (F, G, re) => {
      function x() {
        re.apply(this, arguments), F.removeEventListener(G, x);
      }
      F.addEventListener(G, x);
    },
    i,
    l,
    c,
    u,
    d,
    m = 0,
    g = 0,
    { open: v = !1 } = t,
    { shrink: _ } = t,
    { trigger: I } = t;
  const C = () => {
    n(1, (_ = !0)),
      a(u, "animationend", () => {
        n(1, (_ = !1)), n(0, (v = !1)), o("closed");
      });
  };
  function k(F) {
    if (!v) return;
    let G = F.target;
    do if (G === i) return;
    while ((G = G.parentNode));
    C();
  }
  tt(() => {
    if ((document.addEventListener("click", k), !!I))
      return (
        c.appendChild(I.parentNode.removeChild(I)),
        () => {
          document.removeEventListener("click", k);
        }
      );
  });
  const D = async () => {
      v || n(0, (v = !0)), await kl();
      let F = d.getBoundingClientRect();
      return {
        top: F.top + -1 * m,
        bottom: window.innerHeight - F.bottom + m,
        left: F.left + -1 * g,
        right: document.body.clientWidth - F.right + g,
      };
    },
    E = async () => {
      let F = await D(),
        G,
        re;
      return (
        l < 480
          ? (re = F.bottom)
          : F.top < 0
          ? (re = Math.abs(F.top))
          : F.bottom < 0
          ? (re = F.bottom)
          : (re = 0),
        F.left < 0
          ? (G = Math.abs(F.left))
          : F.right < 0
          ? (G = F.right)
          : (G = 0),
        { x: G, y: re }
      );
    },
    b = async () => {
      const { x: F, y: G } = await E();
      n(8, (g = F)), n(7, (m = G)), n(0, (v = !0)), o("opened");
    };
  function P() {
    n(3, (l = Vi.innerWidth));
  }
  function R(F) {
    Ne[F ? "unshift" : "push"](() => {
      (c = F), n(4, c);
    });
  }
  function N(F) {
    Ne[F ? "unshift" : "push"](() => {
      (u = F), n(5, u);
    });
  }
  function S(F) {
    Ne[F ? "unshift" : "push"](() => {
      (d = F), n(6, d);
    });
  }
  function H(F) {
    Ne[F ? "unshift" : "push"](() => {
      (i = F), n(2, i);
    });
  }
  return (
    (e.$$set = (F) => {
      "open" in F && n(0, (v = F.open)),
        "shrink" in F && n(1, (_ = F.shrink)),
        "trigger" in F && n(10, (I = F.trigger)),
        "$$scope" in F && n(12, (s = F.$$scope));
    }),
    [v, _, i, l, c, u, d, m, g, b, I, C, s, r, P, R, N, S, H]
  );
}
class qf extends He {
  constructor(t) {
    super(),
      Ye(this, t, Wf, Qf, Qe, { open: 0, shrink: 1, trigger: 10, close: 11 });
  }
  get close() {
    return this.$$.ctx[11];
  }
}
const ea = (e, t, n) => e.replace(new RegExp("#{" + t + "}", "g"), n),
  rr = function (e, t, n) {
    if (((e = e.toString()), typeof t > "u" || e.length == t)) return e;
    if (((n = typeof n > "u" ? !1 : n), e.length < t))
      for (; t - e.length > 0; ) e = "0" + e;
    else
      e.length > t &&
        (n ? (e = e.substring(e.length - t)) : (e = e.substring(0, t)));
    return e;
  },
  Kf = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
  ],
  jf = [
    ["January", "Jan"],
    ["February", "Feb"],
    ["March", "Mar"],
    ["April", "Apr"],
    ["May", "May"],
    ["June", "Jun"],
    ["July", "Jul"],
    ["August", "Aug"],
    ["September", "Sep"],
    ["October", "Oct"],
    ["November", "Nov"],
    ["December", "Dec"],
  ];
let sr = { daysOfWeek: Kf, monthsOfYear: jf };
const zf = (e) =>
  Object.keys(e).forEach((t) => {
    sr[t] && sr[t].length == e[t].length && (sr[t] = e[t]);
  });
var Jf = [
    {
      key: "d",
      method: function (e) {
        return rr(e.getDate(), 2);
      },
    },
    {
      key: "D",
      method: function (e) {
        return sr.daysOfWeek[e.getDay()][1];
      },
    },
    {
      key: "j",
      method: function (e) {
        return e.getDate();
      },
    },
    {
      key: "l",
      method: function (e) {
        return sr.daysOfWeek[e.getDay()][0];
      },
    },
    {
      key: "F",
      method: function (e) {
        return sr.monthsOfYear[e.getMonth()][0];
      },
    },
    {
      key: "m",
      method: function (e) {
        return rr(e.getMonth() + 1, 2);
      },
    },
    {
      key: "M",
      method: function (e) {
        return sr.monthsOfYear[e.getMonth()][1];
      },
    },
    {
      key: "n",
      method: function (e) {
        return e.getMonth() + 1;
      },
    },
    {
      key: "Y",
      method: function (e) {
        return e.getFullYear();
      },
    },
    {
      key: "y",
      method: function (e) {
        return rr(e.getFullYear(), 2, !0);
      },
    },
  ],
  Xf = [
    {
      key: "a",
      method: function (e) {
        return e.getHours() > 11 ? "pm" : "am";
      },
    },
    {
      key: "A",
      method: function (e) {
        return e.getHours() > 11 ? "PM" : "AM";
      },
    },
    {
      key: "g",
      method: function (e) {
        return e.getHours() % 12 || 12;
      },
    },
    {
      key: "G",
      method: function (e) {
        return e.getHours();
      },
    },
    {
      key: "h",
      method: function (e) {
        return rr(e.getHours() % 12 || 12, 2);
      },
    },
    {
      key: "H",
      method: function (e) {
        return rr(e.getHours(), 2);
      },
    },
    {
      key: "i",
      method: function (e) {
        return rr(e.getMinutes(), 2);
      },
    },
    {
      key: "s",
      method: function (e) {
        return rr(e.getSeconds(), 2);
      },
    },
  ];
const Zf = (e = {}) => {
    zf(e);
  },
  Gf = (e, t = "#{m}/#{d}/#{Y}") => (
    Jf.forEach((n) => {
      t.indexOf(`#{${n.key}}`) != -1 && (t = ea(t, n.key, n.method(e)));
    }),
    Xf.forEach((n) => {
      t.indexOf(`#{${n.key}}`) != -1 && (t = ea(t, n.key, n.method(e)));
    }),
    t
  ),
  hn = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pgup: 33,
    pgdown: 34,
    enter: 13,
    escape: 27,
    tab: 9,
  },
  xf = Object.keys(hn).map((e) => hn[e]);
const ed = (e) => ({ selected: e[0] & 1, formattedSelected: e[0] & 4 }),
  ta = (e) => ({ selected: e[0], formattedSelected: e[2] });
function na(e, t, n) {
  const r = e.slice();
  return (r[62] = t[n]), r;
}
function ra(e) {
  let t, n;
  return {
    c() {
      (t = y("button")), (n = B(e[2])), this.h();
    },
    l(r) {
      t = T(r, "BUTTON", { class: !0, type: !0 });
      var s = w(t);
      (n = U(s, e[2])), s.forEach(h), this.h();
    },
    h() {
      p(t, "class", "calendar-button svelte-1lorc63"), p(t, "type", "button");
    },
    m(r, s) {
      M(r, t, s), f(t, n);
    },
    p(r, s) {
      s[0] & 4 && se(n, r[2]);
    },
    d(r) {
      r && h(t);
    },
  };
}
function td(e) {
  let t,
    n = !e[1] && ra(e);
  return {
    c() {
      n && n.c(), (t = Ue());
    },
    l(r) {
      n && n.l(r), (t = Ue());
    },
    m(r, s) {
      n && n.m(r, s), M(r, t, s);
    },
    p(r, s) {
      r[1]
        ? n && (n.d(1), (n = null))
        : n
        ? n.p(r, s)
        : ((n = ra(r)), n.c(), n.m(t.parentNode, t));
    },
    d(r) {
      n && n.d(r), r && h(t);
    },
  };
}
function nd(e) {
  let t, n;
  const r = e[40].default,
    s = pn(r, e, e[47], ta),
    o = s || td(e);
  return {
    c() {
      (t = y("div")), o && o.c(), this.h();
    },
    l(a) {
      t = T(a, "DIV", { slot: !0, class: !0 });
      var i = w(t);
      o && o.l(i), i.forEach(h), this.h();
    },
    h() {
      p(t, "slot", "trigger"), p(t, "class", "svelte-1lorc63");
    },
    m(a, i) {
      M(a, t, i), o && o.m(t, null), (n = !0);
    },
    p(a, i) {
      s
        ? s.p &&
          (!n || (i[0] & 5) | (i[1] & 65536)) &&
          gn(s, r, a, a[47], n ? _n(r, a[47], i, ed) : mn(a[47]), ta)
        : o && o.p && (!n || i[0] & 6) && o.p(a, n ? i : [-1, -1, -1]);
    },
    i(a) {
      n || (Y(o, a), (n = !0));
    },
    o(a) {
      q(o, a), (n = !1);
    },
    d(a) {
      a && h(t), o && o.d(a);
    },
  };
}
function sa(e) {
  let t,
    n = e[62][1] + "",
    r;
  return {
    c() {
      (t = y("span")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "SPAN", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "svelte-1lorc63");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p: je,
    d(s) {
      s && h(t);
    },
  };
}
function rd(e) {
  let t, n, r, s, o, a, i, l;
  (r = new $f({
    props: {
      month: e[6],
      year: e[7],
      canIncrementMonth: e[15],
      canDecrementMonth: e[14],
      start: e[3],
      end: e[4],
      monthsOfYear: e[5],
    },
  })),
    r.$on("monthSelected", e[41]),
    r.$on("incrementMonth", e[42]);
  let c = e[18],
    u = [];
  for (let d = 0; d < c.length; d += 1) u[d] = sa(na(e, c, d));
  return (
    (i = new Vf({
      props: {
        visibleMonth: e[8],
        selected: e[0],
        highlighted: e[10],
        shouldShakeDate: e[11],
        id: e[17],
      },
    })),
    i.$on("dateSelected", e[43]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          le(r.$$.fragment),
          (s = A()),
          (o = y("div"));
        for (let d = 0; d < u.length; d += 1) u[d].c();
        (a = A()), le(i.$$.fragment), this.h();
      },
      l(d) {
        t = T(d, "DIV", { slot: !0, class: !0 });
        var m = w(t);
        n = T(m, "DIV", { class: !0 });
        var g = w(n);
        ce(r.$$.fragment, g), (s = O(g)), (o = T(g, "DIV", { class: !0 }));
        var v = w(o);
        for (let _ = 0; _ < u.length; _ += 1) u[_].l(v);
        v.forEach(h),
          (a = O(g)),
          ce(i.$$.fragment, g),
          g.forEach(h),
          m.forEach(h),
          this.h();
      },
      h() {
        p(o, "class", "legend svelte-1lorc63"),
          p(n, "class", "calendar svelte-1lorc63"),
          p(t, "slot", "contents"),
          p(t, "class", "svelte-1lorc63");
      },
      m(d, m) {
        M(d, t, m), f(t, n), ue(r, n, null), f(n, s), f(n, o);
        for (let g = 0; g < u.length; g += 1) u[g].m(o, null);
        f(n, a), ue(i, n, null), (l = !0);
      },
      p(d, m) {
        const g = {};
        if (
          (m[0] & 64 && (g.month = d[6]),
          m[0] & 128 && (g.year = d[7]),
          m[0] & 32768 && (g.canIncrementMonth = d[15]),
          m[0] & 16384 && (g.canDecrementMonth = d[14]),
          m[0] & 8 && (g.start = d[3]),
          m[0] & 16 && (g.end = d[4]),
          m[0] & 32 && (g.monthsOfYear = d[5]),
          r.$set(g),
          m[0] & 262144)
        ) {
          c = d[18];
          let _;
          for (_ = 0; _ < c.length; _ += 1) {
            const I = na(d, c, _);
            u[_] ? u[_].p(I, m) : ((u[_] = sa(I)), u[_].c(), u[_].m(o, null));
          }
          for (; _ < u.length; _ += 1) u[_].d(1);
          u.length = c.length;
        }
        const v = {};
        m[0] & 256 && (v.visibleMonth = d[8]),
          m[0] & 1 && (v.selected = d[0]),
          m[0] & 1024 && (v.highlighted = d[10]),
          m[0] & 2048 && (v.shouldShakeDate = d[11]),
          m[0] & 131072 && (v.id = d[17]),
          i.$set(v);
      },
      i(d) {
        l || (Y(r.$$.fragment, d), Y(i.$$.fragment, d), (l = !0));
      },
      o(d) {
        q(r.$$.fragment, d), q(i.$$.fragment, d), (l = !1);
      },
      d(d) {
        d && h(t), fe(r), or(u, d), fe(i);
      },
    }
  );
}
function sd(e) {
  let t, n, r, s, o;
  function a(c) {
    e[45](c);
  }
  function i(c) {
    e[46](c);
  }
  let l = {
    trigger: e[1],
    $$slots: { contents: [rd], trigger: [nd] },
    $$scope: { ctx: e },
  };
  return (
    e[12] !== void 0 && (l.open = e[12]),
    e[13] !== void 0 && (l.shrink = e[13]),
    (n = new qf({ props: l })),
    e[44](n),
    Ne.push(() => Xe(n, "open", a)),
    Ne.push(() => Xe(n, "shrink", i)),
    n.$on("opened", e[23]),
    n.$on("closed", e[22]),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(c) {
        t = T(c, "DIV", { class: !0, style: !0 });
        var u = w(t);
        ce(n.$$.fragment, u), u.forEach(h), this.h();
      },
      h() {
        p(t, "class", "datepicker svelte-1lorc63"),
          p(t, "style", e[16]),
          X(t, "open", e[12]),
          X(t, "closing", e[13]);
      },
      m(c, u) {
        M(c, t, u), ue(n, t, null), (o = !0);
      },
      p(c, u) {
        const d = {};
        u[0] & 2 && (d.trigger = c[1]),
          (u[0] & 183807) | (u[1] & 65536) &&
            (d.$$scope = { dirty: u, ctx: c }),
          !r && u[0] & 4096 && ((r = !0), (d.open = c[12]), Ze(() => (r = !1))),
          !s &&
            u[0] & 8192 &&
            ((s = !0), (d.shrink = c[13]), Ze(() => (s = !1))),
          n.$set(d),
          (!o || u[0] & 65536) && p(t, "style", c[16]),
          (!o || u[0] & 4096) && X(t, "open", c[12]),
          (!o || u[0] & 8192) && X(t, "closing", c[13]);
      },
      i(c) {
        o || (Y(n.$$.fragment, c), (o = !0));
      },
      o(c) {
        q(n.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && h(t), e[44](null), fe(n);
      },
    }
  );
}
function od(e, t, n) {
  let r,
    s,
    o,
    a,
    i,
    l,
    c,
    u,
    { $$slots: d = {}, $$scope: m } = t;
  const g = Ut(),
    v = new Date();
  let _,
    { format: I = "#{m}/#{d}/#{Y}" } = t,
    { start: C = new Date(1987, 9, 29) } = t,
    { end: k = new Date(2020, 9, 29) } = t,
    { selected: D = v } = t,
    { dateChosen: E = !1 } = t,
    { trigger: b = null } = t,
    { selectableCallback: P = null } = t,
    { weekStart: R = 0 } = t,
    {
      daysOfWeek: N = [
        ["Sunday", "Sun"],
        ["Monday", "Mon"],
        ["Tuesday", "Tue"],
        ["Wednesday", "Wed"],
        ["Thursday", "Thu"],
        ["Friday", "Fri"],
        ["Saturday", "Sat"],
      ],
    } = t,
    {
      monthsOfYear: S = [
        ["January", "Jan"],
        ["February", "Feb"],
        ["March", "Mar"],
        ["April", "Apr"],
        ["May", "May"],
        ["June", "Jun"],
        ["July", "Jul"],
        ["August", "Aug"],
        ["September", "Sep"],
        ["October", "Oct"],
        ["November", "Nov"],
        ["December", "Dec"],
      ],
    } = t,
    { style: H = "" } = t,
    { buttonBackgroundColor: F = "#fff" } = t,
    { buttonBorderColor: G = "#eee" } = t,
    { buttonTextColor: re = "#333" } = t,
    { highlightColor: x = "#f7901e" } = t,
    { dayBackgroundColor: ae = "none" } = t,
    { dayTextColor: V = "#4a4a4a" } = t,
    { dayHighlightedBackgroundColor: ee = "#efefef" } = t,
    { dayHighlightedTextColor: ie = "#4a4a4a" } = t;
  Zf({ daysOfWeek: N, monthsOfYear: S });
  let Z =
      R === 0
        ? N
        : (() => {
            let Q = N.slice();
            return Q.push(Q.shift()), Q;
          })(),
    me = v,
    Ae = !1,
    z,
    te = v.getMonth(),
    ne = v.getFullYear(),
    Te = !1,
    be = !1;
  v.setHours(0, 0, 0, 0);
  function Pe(Q) {
    b && n(1, (b.innerHTML = Q), b);
  }
  let De = 0,
    { formattedSelected: qe } = t;
  tt(() => {
    n(6, (te = D.getMonth())), n(7, (ne = D.getFullYear()));
  });
  function K(Q) {
    n(6, (te = Q)), n(10, (me = new Date(ne, te, 1)));
  }
  function Ee(Q, at = 1) {
    if ((Q === 1 && !l) || (Q === -1 && !c)) return;
    let gt = new Date(ne, te, 1);
    gt.setMonth(gt.getMonth() + Q),
      n(6, (te = gt.getMonth())),
      n(7, (ne = gt.getFullYear())),
      n(10, (me = new Date(ne, te, at)));
  }
  function Se() {
    return new Date(D);
  }
  const J = (Q, at, gt) => {
    let Yt = r.find((nt) => nt.month === Q && nt.year === gt);
    if (!Yt) return null;
    for (let nt = 0; nt < Yt.weeks.length; ++nt)
      for (let Tt = 0; Tt < Yt.weeks[nt].days.length; ++Tt) {
        let Ke = Yt.weeks[nt].days[Tt];
        if (Ke.month === Q && Ke.day === at && Ke.year === gt) return Ke;
      }
    return null;
  };
  function de(Q) {
    let at = new Date(me);
    at.setDate(me.getDate() + Q);
    let gt = J(at.getMonth(), at.getDate(), at.getFullYear());
    !gt ||
      !gt.isInRange ||
      (n(10, (me = at)),
      Q > 0 && me > a && Ee(1, me.getDate()),
      Q < 0 && me < i && Ee(-1, me.getDate()));
  }
  function Oe(Q) {
    const at = J(Q.getMonth(), Q.getDate(), Q.getFullYear());
    return at && at.selectable;
  }
  function Fe(Q) {
    clearTimeout(z),
      n(11, (Ae = Q)),
      (z = setTimeout(() => {
        n(11, (Ae = !1));
      }, 700));
  }
  function ge(Q) {
    Pe(Q);
  }
  function $e(Q) {
    return Oe(Q)
      ? (ut(),
        n(0, (D = Q)),
        n(24, (E = !0)),
        ge(qe),
        g("dateSelected", { date: Q }))
      : Fe(Q);
  }
  function ct(Q) {
    if (xf.indexOf(Q.keyCode) !== -1)
      switch ((Q.preventDefault(), Q.keyCode)) {
        case hn.left:
          de(-1);
          break;
        case hn.up:
          de(-7);
          break;
        case hn.right:
          de(1);
          break;
        case hn.down:
          de(7);
          break;
        case hn.pgup:
          Ee(-1);
          break;
        case hn.pgdown:
          Ee(1);
          break;
        case hn.escape:
          ut();
          break;
        case hn.enter:
          $e(me);
          break;
      }
  }
  function on() {
    document.removeEventListener("keydown", ct), g("close");
  }
  function ut() {
    _.close(), on();
  }
  function bt() {
    n(10, (me = Se())),
      n(6, (te = D.getMonth())),
      n(7, (ne = D.getFullYear())),
      document.addEventListener("keydown", ct),
      g("open");
  }
  const pt = (Q) => K(Q.detail),
    Ve = (Q) => Ee(Q.detail),
    Ht = (Q) => $e(Q.detail);
  function yt(Q) {
    Ne[Q ? "unshift" : "push"](() => {
      (_ = Q), n(9, _);
    });
  }
  function vt(Q) {
    (Te = Q), n(12, Te);
  }
  function ze(Q) {
    (be = Q), n(13, be);
  }
  return (
    (e.$$set = (Q) => {
      "format" in Q && n(25, (I = Q.format)),
        "start" in Q && n(3, (C = Q.start)),
        "end" in Q && n(4, (k = Q.end)),
        "selected" in Q && n(0, (D = Q.selected)),
        "dateChosen" in Q && n(24, (E = Q.dateChosen)),
        "trigger" in Q && n(1, (b = Q.trigger)),
        "selectableCallback" in Q && n(26, (P = Q.selectableCallback)),
        "weekStart" in Q && n(27, (R = Q.weekStart)),
        "daysOfWeek" in Q && n(28, (N = Q.daysOfWeek)),
        "monthsOfYear" in Q && n(5, (S = Q.monthsOfYear)),
        "style" in Q && n(29, (H = Q.style)),
        "buttonBackgroundColor" in Q && n(30, (F = Q.buttonBackgroundColor)),
        "buttonBorderColor" in Q && n(31, (G = Q.buttonBorderColor)),
        "buttonTextColor" in Q && n(32, (re = Q.buttonTextColor)),
        "highlightColor" in Q && n(33, (x = Q.highlightColor)),
        "dayBackgroundColor" in Q && n(34, (ae = Q.dayBackgroundColor)),
        "dayTextColor" in Q && n(35, (V = Q.dayTextColor)),
        "dayHighlightedBackgroundColor" in Q &&
          n(36, (ee = Q.dayHighlightedBackgroundColor)),
        "dayHighlightedTextColor" in Q &&
          n(37, (ie = Q.dayHighlightedTextColor)),
        "formattedSelected" in Q && n(2, (qe = Q.formattedSelected)),
        "$$scope" in Q && n(47, (m = Q.$$scope));
    }),
    (e.$$.update = () => {
      if (
        (e.$$.dirty[0] & 201326616 && n(39, (r = Af(C, k, P, R))),
        (e.$$.dirty[0] & 192) | (e.$$.dirty[1] & 256))
      ) {
        n(38, (De = 0));
        for (let Q = 0; Q < r.length; Q += 1)
          r[Q].month === te && r[Q].year === ne && n(38, (De = Q));
      }
      e.$$.dirty[1] & 384 && n(8, (s = r[De])),
        e.$$.dirty[0] & 192 && n(17, (o = ne + te / 100)),
        e.$$.dirty[0] & 256 && (a = s.weeks[s.weeks.length - 1].days[6].date),
        e.$$.dirty[0] & 256 && (i = s.weeks[0].days[0].date),
        e.$$.dirty[1] & 384 && n(15, (l = De < r.length - 1)),
        e.$$.dirty[1] & 128 && n(14, (c = De > 0)),
        (e.$$.dirty[0] & 1610612736) | (e.$$.dirty[1] & 127) &&
          n(
            16,
            (u = `
    --button-background-color: ${F};
    --button-border-color: ${G};
    --button-text-color: ${re};
    --highlight-color: ${x};
    --day-background-color: ${ae};
    --day-text-color: ${V};
    --day-highlighted-background-color: ${ee};
    --day-highlighted-text-color: ${ie};
    ${H}
  `)
          ),
        e.$$.dirty[0] & 33554433 &&
          n(2, (qe = typeof I == "function" ? I(D) : Gf(D, I)));
    }),
    [
      D,
      b,
      qe,
      C,
      k,
      S,
      te,
      ne,
      s,
      _,
      me,
      Ae,
      Te,
      be,
      c,
      l,
      u,
      o,
      Z,
      K,
      Ee,
      $e,
      on,
      bt,
      E,
      I,
      P,
      R,
      N,
      H,
      F,
      G,
      re,
      x,
      ae,
      V,
      ee,
      ie,
      De,
      r,
      d,
      pt,
      Ve,
      Ht,
      yt,
      vt,
      ze,
      m,
    ]
  );
}
class oa extends He {
  constructor(t) {
    super(),
      Ye(
        this,
        t,
        od,
        sd,
        Qe,
        {
          format: 25,
          start: 3,
          end: 4,
          selected: 0,
          dateChosen: 24,
          trigger: 1,
          selectableCallback: 26,
          weekStart: 27,
          daysOfWeek: 28,
          monthsOfYear: 5,
          style: 29,
          buttonBackgroundColor: 30,
          buttonBorderColor: 31,
          buttonTextColor: 32,
          highlightColor: 33,
          dayBackgroundColor: 34,
          dayTextColor: 35,
          dayHighlightedBackgroundColor: 36,
          dayHighlightedTextColor: 37,
          formattedSelected: 2,
        },
        null,
        [-1, -1, -1]
      );
  }
}
const Sn = {
    Hours: "3c2dbb",
    Yesterday: "fbbe68",
    Weeks: "a68fd3",
    MonthDate: "0724a7",
    PastMonth: "597611",
    Past3Month: "c0f293",
    Custom: "101388",
    Cancel: "71c576",
    Export: "81ef02",
    ExportHistory: "2e7e46",
  },
  aa = (e) => [
    { type: "hours", name: e(Sn.Hours) },
    { type: "yesterday", name: e(Sn.Yesterday) },
  ],
  ia = (e) => [
    { type: "weeks", name: e(Sn.Weeks) },
    { type: "monthDate", name: e(Sn.MonthDate) },
  ],
  la = (e) => [
    { type: "pastMonth", name: e(Sn.PastMonth) },
    { type: "past3Month", name: e(Sn.Past3Month) },
  ];
function ad(e, t, n) {
  return id(() => window.XLSX.utils.aoa_to_sheet(e), t, n);
}
async function id(e, t, n) {
  await Sl();
  const { utils: r, writeFile: s } = window.XLSX,
    o = r.book_new();
  r.book_append_sheet(o, e(), n.slice(0, 31));
  const a = t.endsWith(".csv") ? "csv" : "xls";
  s(o, t, { bookType: a });
}
const Bi = {
    getLaunchpoolList(e) {
      return j.get(W.LAUNCHPOOL_PUBLIC_POOL, { query: e });
    },
    getLaunchpoolDetail(e) {
      return j.get(W.LAUNCHPOOL_PUBLIC_POOL_DETAIL, { query: e });
    },
    getRebateList(e) {
      return j.get(W.LAUNCHPOOL_REBATE_CLAIMED_LIST, { query: e });
    },
    getDistributionList(e) {
      return j.get(W.LAUNCHPOOL_REBATE_LIST, { query: e });
    },
    getUserPool(e) {
      return j.get(W.LAUNCHPOOL_USER_POOL, { query: e });
    },
    stakeLaunchPool(e) {
      return j.post(W.LAUNCHPOOL_PURCHASE, { params: e });
    },
    unStakeLaunchPool(e) {
      return j.post(W.LAUNCHPOOL_REDEMPTION, { params: e });
    },
    getLaunchPoolFunds(e) {
      return j.get(W.LAUNCHPOOL_FUNDS, { query: e });
    },
    getPoolDesc(e) {
      return j.get(W.LAUNCHPOOL_POOL_DESC, { query: e });
    },
    getUnclaimedRebate(e) {
      return j.get(W.LAUNCHPOOL_MYSELF_UNCLAIMED_REBATE, { query: e });
    },
    rebateClaimed(e) {
      return j.post(W.LAUNCHPOOL_REBATE_CLAIM, { params: e });
    },
    getRebateStat() {
      return j.get(W.LAUNCHPOOL_REBATE_STAT, {});
    },
    getRebateCountdown(e) {
      return j.post(W.LAUNCHPOOL_REBATE_COUNTDOWN, { query: e });
    },
  },
  Wn = { beforeUpgrade: 0, afterUpgrade: 1 },
  ld = {
    Title: "2520e3",
    PNLHistory: "6a92f5",
    OrderHistory: "fdd822",
    TradeHistory: "167c4d",
    ConvertHistory: "95006f",
    YourSpotTrading: "167d84",
    PTConvert: "82b523",
  },
  L = {
    All: "3a67d9",
    DailyRealizedPNL: "441b00",
    Transfer: "f0b55e",
    MembershipPurchase: "3d2f81",
    Convert: "a001a3",
    Commission: "40aa2e",
    Bonus: "f8550d",
    Deposit: "ba3822",
    Withdrawal: "a8b045",
    TransferSubAccount: "24e11d",
    TransferMainAccount: "035826",
    TransferConvert: "80ab89",
    Trade: "49576f",
    TransferToFlexibleSaving: "63294a",
    TransferToFixedSaving: "99262d",
    LaunchpadCommitment: "0ac2b0",
    LaunchpadDistribution: "51c7d5",
    LaunchpadSponsor: "886907",
    LaunchpadSponsorRebate: "c3a389",
    TransferFormFlexibleSaving: "f59263",
    FlexibleSavingIncome: "693652",
    FixedSavingIncome: "2dc3b9",
    TransferInFixedTrialFund: "06d6d4",
    FixedTrialFundExpired: "d68077",
    FixedTrialFundIncome: "ad87a1",
    TransferInFlexibleTrialFund: "005694",
    FlexibleTrialFundExpired: "302613",
    FlexibleTrialFundIncome: "cacbf1",
    EarlyRedemptionIncome: "521012",
    OTCBuy: "607ff2",
    OTCSell: "571dc6",
    TransferPhemexTr: "99558e",
    Airdrop: "19b286",
    LaunchpoolStaking: "44978c",
    LaunchpoolRewards: "27857a",
    LaunchpoolUnstaking: "778174",
    LaunchpoolSponsor: "3b5cd9",
    LaunchpoolSponsorRebate: "cb94d0",
    SpotTradingFeeRebate: "f4fd07",
    SpotFeeDeduct: "f48628",
    ContractFeeDeduct: "31a2e2",
    MysteryBox: "0d1d75",
    C2cOrderFreeze: "b3b8d2",
    C2cFundsTransfer: "636390",
    c2CAdFreeze: "f85ad3",
    AutoDeduction: "8d0cc0",
    AutoFunding: "6fba34",
    FixedActivityIncome: "215b05",
    TransferToFixedActivity: "b885e3",
    Swap: "243123",
    PredictionRewards: "39b294",
    PredictionPlacements: "1389ab",
    InPrediction: "132215",
    Win: "9581f5",
    WinRedeemed: "79f32a",
    Lose: "eef915",
    Refund: "8b8dde",
    ThirdPartyBuy: "9d4897",
    CopyTradeFunds: "9459ea",
    MarginTradeTrading: "fbb110",
    MarginTradeBorrow: "ba3eda",
    MarginTradeRepay: "c7ff84",
    MarginTradeTransfer: "8856bf",
    MarginTradeRebate: "c7a204",
    MarginTradeDeduct: "f875eb",
    SoulPassFirstMintedAirdrop: "dff3ac",
    FiatWireDeposit: "2de39d",
    FiatACHDeposit: "c14ed5",
    FiatWithdrawal: "328357",
    FiatWireReturned: "963b6e",
    FiatWireReturn: "cd69d8",
    SellCrypto: "c8c563",
    BuyCrypto: "3e47a8",
    AutoConversion: "8d53e2",
    UserPromotion: "bffdd3",
    Referral: "e5afc6",
    SoulPassXPTPreMining: "97fba9",
    CardBuy: "fbd117",
    CardSell: "9daea5",
    TransferTradingBots: "33f79a",
    UnifiedTradeAccountTransfer: "af582e",
    UnifiedSpotTrading: "ebc2e4",
    UnifiedMarginTrading: "df41a5",
    XPTConvert: "d0bffd",
    Web3StakeTradingRewards: "9cf37f",
    Web3StakeStake: "e46cf1",
    Web3StakeRedeem: "c9e91e",
    Web3StakeRewards: "342a87",
    DutchAuction: "ffc9e0",
    DutchAuctionRedeem: "6f228f",
    TradingFeeDeduct: "17f79a",
    BuyCryptoAirdrop: "bb5412",
    SocialTradingGroupRewards: "b4647d",
    SocialGroup: "60b961",
    SocialGroupEntry: "38ac22",
    GroupPassMintDeduct: "6a8f3b",
    GroupPassMintIncome: "30b229",
    GroupPassTrade: "12a8a9",
    LendingTransfer: "f47074",
    CollateralDeduction: "55aeff",
    LoanBorrow: "209e1d",
    CollateralRelease: "7dcee4",
    LoanPayback: "06ffeb",
    LendingSupply: "e414ef",
    LendingRedeem: "855a77",
    LendingRecvInterest: "f5d2c4",
  },
  Ui = {
    0: "-",
    1: "Market",
    2: "Limit",
    3: "Stop",
    4: "StopLimit",
    5: "MarketIfTouched",
    6: "LimitIfTouched",
    7: "ProtectedMarket",
    8: "Market",
    9: "Stop",
    10: "MarketIfTouched",
    11: "Bracket",
    12: "BoTpLimit",
    13: "BoSlLimit",
    14: "BoSlMarket",
    "-11": "Liquidation",
  },
  $i = {
    0: "-",
    1: "Trade",
    2: "Liq",
    3: "ADL",
    4: "Funding",
    5: "TakeOver",
    6: "LiqTrade",
    7: "AdlTrade",
    8: "Amend",
    9: "Cancel",
    10: "Replace",
    11: "TransferIn",
    12: "TransferOut",
    13: "ExchangeIn",
    14: "ExchangeOut",
    15: "PositionSettingChange",
  },
  cd = {
    1: "Untriggered",
    2: "Deactivated",
    3: "Triggered",
    4: "Rejected",
    5: "New",
    6: "PartiallyFilled",
    7: "Filled",
    8: "Canceled",
  };
function ca(e) {
  return {
    0: "-",
    1: e(L.Deposit),
    2: e(L.Withdrawal),
    3: e(L.TransferSubAccount),
    4: e(L.TransferMainAccount),
    10: e(L.Transfer),
    11: e(L.Transfer),
    12: e(L.Convert),
    13: e(L.Convert),
    44: e(L.MembershipPurchase),
    50: e(L.Commission),
    52: e(L.Convert),
    53: e(L.Convert),
    58: e(L.TransferPhemexTr),
    59: e(L.Convert),
    54: e(L.TransferToFlexibleSaving),
    55: e(L.TransferFormFlexibleSaving),
    56: e(L.TransferToFixedSaving),
    60: e(ld.PTConvert),
    75: e(L.LaunchpadCommitment),
    76: e(L.LaunchpadDistribution),
    77: e(L.LaunchpadSponsor),
    78: e(L.LaunchpadSponsorRebate),
    70: e(L.LaunchpoolStaking),
    71: e(L.LaunchpoolUnstaking),
    72: e(L.LaunchpoolRewards),
    73: e(L.LaunchpoolSponsor),
    74: e(L.LaunchpoolSponsorRebate),
    80: e(L.Airdrop),
    81: e(L.SpotTradingFeeRebate),
    82: e(L.MysteryBox),
    85: e(L.c2CAdFreeze),
    87: e(L.C2cOrderFreeze),
    89: e(L.C2cFundsTransfer),
    97: e(L.ThirdPartyBuy),
    99: e(L.CardBuy),
    100: e(L.CardSell),
    103: e(L.BuyCryptoAirdrop),
    105: e(L.AutoDeduction),
    106: e(L.AutoFunding),
    110: e(L.SpotFeeDeduct),
    111: e(L.ContractFeeDeduct),
    112: e(L.TransferToFixedActivity),
    115: e(L.Swap),
    113: e(L.PredictionPlacements),
    114: e(L.PredictionRewards),
    120: e(L.TransferTradingBots),
    121: e(L.TransferTradingBots),
    123: e(L.TransferTradingBots),
    124: e(L.TransferTradingBots),
    200: e(L.Trade),
    211: e(L.MarginTradeBorrow),
    212: e(L.MarginTradeRepay),
    226: e(L.MarginTradeRebate),
    227: e(L.MarginTradeDeduct),
    228: e(L.UnifiedTradeAccountTransfer),
    300: e(L.OTCSell),
    301: e(L.OTCBuy),
    302: e(L.ThirdPartyBuy),
    303: e(L.ThirdPartyBuy),
    90: e(L.CopyTradeFunds),
    91: e(L.CopyTradeFunds),
    92: e(L.CopyTradeFunds),
    93: e(L.CopyTradeFunds),
    213: e(L.MarginTradeTransfer),
    250: e(L.XPTConvert),
    251: e(L.Web3StakeTradingRewards),
    253: e(L.Web3StakeStake),
    254: e(L.Web3StakeRedeem),
    255: e(L.Web3StakeRewards),
    260: e(L.DutchAuction),
    261: e(L.DutchAuctionRedeem),
    232: e(L.TradingFeeDeduct),
    320: e(L.SocialTradingGroupRewards),
    323: e(L.SocialGroup),
    324: e(L.SocialGroupEntry),
    340: e(L.GroupPassMintDeduct),
    341: e(L.GroupPassMintIncome),
    342: e(L.GroupPassTrade),
    256: e(L.Deposit),
    257: e(L.Withdrawal),
    325: e(L.LendingTransfer),
  };
}
function ud(e) {
  return {
    0: "-",
    1: e(L.Deposit),
    3: e(L.TransferSubAccount),
    4: e(L.TransferMainAccount),
    90: e(L.CopyTradeFunds),
    91: e(L.CopyTradeFunds),
    92: e(L.CopyTradeFunds),
    93: e(L.CopyTradeFunds),
    105: e(L.AutoDeduction),
    106: e(L.AutoFunding),
    120: e(L.TransferTradingBots),
    121: e(L.TransferTradingBots),
    123: e(L.TransferTradingBots),
    124: e(L.TransferTradingBots),
    211: e(L.MarginTradeBorrow),
    212: e(L.MarginTradeRepay),
    227: e(L.MarginTradeDeduct),
    228: e(L.UnifiedTradeAccountTransfer),
    230: e(L.UnifiedSpotTrading),
    231: e(L.UnifiedMarginTrading),
    232: e(L.TradingFeeDeduct),
    250: e(L.XPTConvert),
  };
}
function ua(e) {
  return {
    1001: e(L.TransferToFlexibleSaving),
    1005: e(L.TransferToFixedSaving),
    1004: e(L.TransferFormFlexibleSaving),
    1003: e(L.FlexibleSavingIncome),
    1007: e(L.FixedSavingIncome),
    1013: e(L.TransferInFixedTrialFund),
    1014: e(L.FixedTrialFundExpired),
    1015: e(L.FixedTrialFundIncome),
    1016: e(L.TransferInFlexibleTrialFund),
    1017: e(L.FlexibleTrialFundExpired),
    1018: e(L.FlexibleTrialFundIncome),
    1019: e(L.EarlyRedemptionIncome),
    1020: e(L.TransferToFixedActivity),
    1021: e(L.FixedActivityIncome),
  };
}
function fd(e) {
  return { INVEST: e(L.LaunchpoolStaking), REDEEM: e(L.LaunchpoolUnstaking) };
}
function dd(e) {
  return {
    1: e(L.DailyRealizedPNL),
    2: e(L.Transfer),
    3: e(L.Commission),
    4: e(L.Bonus),
    5: e(L.TransferMainAccount),
    6: e(L.TransferSubAccount),
    90: e(L.CopyTradeFunds),
    91: e(L.CopyTradeFunds),
    92: e(L.CopyTradeFunds),
    120: e(L.TransferTradingBots),
    121: e(L.TransferTradingBots),
    123: e(L.TransferTradingBots),
    124: e(L.TransferTradingBots),
    213: e(L.MarginTradeTransfer),
    228: e(L.UnifiedTradeAccountTransfer),
    232: e(L.TradingFeeDeduct),
    325: e(L.LendingTransfer),
  };
}
function Hi(e, t, n, r) {
  const s = e.find((c) => c.symbol === t.symbol);
  if (!s) return "-";
  const { type: o } = s,
    { side: a, posSide: i } = t,
    l = a === 1;
  if (o === "Perpetual") return n(r[l ? "Long" : "Short"]);
  if (o === "PerpetualV2") {
    if (i === 1) return n(r[l ? "OpenLong" : "CloseLong"]);
    if (i === 2) return n(r[l ? "CloseShort" : "OpenShort"]);
    if (i === 3) return n(r[l ? "Long" : "Short"]);
  }
  return "-";
}
const Yi = {
  getAnnuouncement(e) {
    return j.get(W.PUBLIC_B2C_BANNER, {
      query: e,
      formatter: (t) => (t.items && t.items[0]) || {},
    });
  },
  getAnnuouncements(e) {
    return j.get(W.PUBLIC_B2C_BANNER, { query: e });
  },
  getFiatBalanceQuery(e) {
    return j.get(W.FIAT_BALANCE_QUERY, { query: e });
  },
  getFiatDepositConfig(e) {
    return j.get(W.PUBLIC_FIAT_DEPOSIT_CONFIG, { query: e });
  },
  getFiatDepositAccount(e) {
    return j.get(W.FIAT_DEPOSIT_ACCOUNT_QUERY, { query: e });
  },
  fiatDepositSuccessConfirm(e) {
    return j.post(W.FIAT_DEPOSIT_SUCCESS_CONFIRM, { query: e });
  },
  getFiatDepositQuery(e) {
    return j.get(W.FIAT_DEPOSIT_QUERY, { query: e });
  },
  getFiatDepositWithdrawConfig(e) {
    return j.get(W.FIAT_DEPOSIT_WITHDRAW_QUERY, { query: e });
  },
  getFiatWithdrawCards(e) {
    return j.get(W.FIAT_DEPOSIT_WITHDRAW_CARDS, { query: e });
  },
  fiatDepositWithdrawSubmit(e) {
    return j.post(W.FIAT_DEPOSIT_WITHDRAW_SUBMIT, { params: e });
  },
  getFiatWithdrawOrderList(e) {
    return j.get(W.FIAT_WITHDRAW_ORDER_LIST, { query: e });
  },
  fiatBalanceChangeQuery(e) {
    return j.get(W.FIAT_BALANCE_CHANGE_QUERY, { query: e });
  },
  getOneClickConfig(e) {
    return j.get(W.OC_CONFIG, { query: e });
  },
  getOneClickPricing(e, t) {
    return j.get(t ? W.BUY_CRYPTO_PRICING : W.PUBLIC_BUY_CRYPTO_PRICING, {
      query: e,
    });
  },
  fiatOrder(e) {
    return j.post(W.OC_FIAT_ORDER, { params: e });
  },
  thirdPartyOrder(e) {
    return j.post(W.BUY_CRYPTO_PLACE_ORDER, { query: e });
  },
  getChannels(e, t) {
    return j.get(t ? W.BUY_CRYPTO_CONFIG : W.PUBLIC_BUY_CRYPTO_CONFIG, {
      query: e,
    });
  },
  placeOrder(e) {
    return j.post(W.OC_PLACE_ORDER, { params: e });
  },
  checkSellRisk(e) {
    return j.post(W.OC_RISK_CHECK, { params: e });
  },
  postKycValidate(e) {
    return j.post(W.OC_KYC_VALIDATE, { params: e });
  },
  createTransakOrder(e) {
    return j.post(W.OC_TRANSAK_ORDER, { params: e });
  },
  saveTransakOrder(e) {
    return j.get(W.OC_TRANSAK_SAVE_ORDER, { query: e });
  },
  getFiatDepositOrderList(e) {
    return j.get(W.FIAT_DEPOSIT_ORDER_LIST, { query: e });
  },
  postDepositConfirm(e) {
    return j.post(W.FIAT_DEPOSIT_CONFIRM, { query: e });
  },
  getFiatBizGary(e) {
    return j.get(W.FIAT_BIZ_GARY, { query: e });
  },
  getFiatBalanceOrderList(e) {
    return j.get(W.OC_FIAT_BALANCE_HISTORY, { query: e });
  },
  getCreditDebitCardOrderList(e) {
    return j.get(W.OC_CREDIT_DEBIT_CARD_HISTORY, { query: e });
  },
  getThirdPartyOrderList(e) {
    return j.get(W.OC_THIRD_PARTY_HISTORY, { query: e });
  },
  getDefaultPaymentMethod() {
    return j.get(W.OC_DEFAULT_PAYMENT_METHOD, {});
  },
  bindSellCreditDebitCard(e) {
    return j.post(W.OC_CREDIT_DEBIT_BIND_CARD, { params: e });
  },
  getNewCardDetail(e) {
    return j.get(W.OC_NEW_CARD_DETAIL, { query: e });
  },
};
ss.pipe(
  lt((e) => !!e.userId),
  ye((e) => !e.isMain)
);
const hd = as.pipe(
    lt((e) => e !== "Init"),
    ye((e) => e === "Login")
  ),
  Qi = hd.pipe(
    Re((e) =>
      e
        ? pd()
        : Un({
            creditCardsBuyCrypto: !1,
            fiatDepositWithdraw: !1,
            creditCardsSellCrypto: !1,
          })
    ),
    fr(1)
  ),
  Bm = Qi.pipe(
    ye((e) => e.fiatDepositWithdraw),
    li()
  );
Qi.pipe(
  ye((e) => ({ buy: e.creditCardsBuyCrypto, sell: e.creditCardsSellCrypto }))
);
async function pd() {
  return (await Yi.getFiatBizGary()).data || {};
}
const gd = new ve([]);
wc.pipe(
  lt((e) => e.type === "lending-accounts"),
  ye((e) => e.data.accounts)
).subscribe((e) => gd.next(e));
const md = `${Dn.STATIC_URL}/pubimg/`,
  gs = {
    BANNER:
      "30f366b863d7b22e753ec004f8599e1a1b55749ba5f92bdd1de0e9f47e25c946.png",
    M_BANNER:
      "cd29b4b1b63dcfabc859ba20e2c4d70d01856a18a040d292b2708b76ed549998.png",
    CONVERT:
      "ffbe3afaf92a89435a6c465da4ada5dc95ce1ee2384b76497013e44273a37865.png",
    CONVERT_DISABLED:
      "22dc33c0500f16f3e1f018056b3a8f42a709207dfc13286857d1d926d65ea294.png",
    SUCCESS:
      "6e3644c4a966963a5ea3adb1f2a0b56fd4f382c94483ec745d87e48254e3ffb8.png",
    FAIL: "3f2dbcdcf0fb08f72db81eafcdee223a35decf8c19ab15ed7abcec028c3346a6.png",
  };
Object.keys(gs).forEach((e) => (gs[e] = [md, gs[e]].join("")));
const _d = new Ce();
_d.pipe(
  Re((e) => Ti(rt.getConversionQuote(e)).pipe(Ar(Ws), Re(vd))),
  dr({ data: Ps(), timeout: 0 })
);
new ve(!0);
function Ps() {
  return { quoteArgs: { price: "--", proceeds: "--", ttlMs: 7e3 } };
}
function vd(e) {
  const t = e.data;
  if (t) {
    const { ttlMs: n = 7e3 } = t.quoteArgs || {},
      r = Math.floor(n / 1e3);
    return ci(
      Un({ data: t, timeout: r }),
      ui(1e3).pipe(
        ye((s) => ({ data: t, timeout: r - s - 1 })),
        Ms(r - 1)
      ),
      Un({ data: Ps(), timeout: 0 }).pipe(ql(r * 1e3))
    );
  }
  return Un({ data: Ps(), timeout: 0 });
}
function Ws(e) {
  const t = e.error;
  t && oe.send("toast", "error", t);
}
const bd = ar(() => Oc.getContractTransferCurrencies()).pipe(
    Ar(Ws),
    ye((e) => e.data || []),
    fr(1)
  ),
  yd = ar(() =>
    rt.getConversionSupportedCurrencies({ cfgType: "CFG_CURRENCY_PAIR" })
  ).pipe(
    Ar(Ws),
    ye((e) => (e.data ? e.data.cfgList || [] : []))
  );
Ge.pipe(
  Re(() => Dc([bd, yd])),
  ye(Td),
  dr({ convertUSDCurrencies: [], currencyMappings: {}, options: [] })
);
Rn.pipe(
  ye((e) => e.reduce((t, n) => ((t[n.currency] = n), t), {})),
  fr(1)
);
function Td([e, t]) {
  return t.reduce(
    (n, r) => {
      const { fromCurrency: s, toCurrency: o } = r;
      return (
        e.indexOf(s) > -1 &&
          o === "USD" &&
          (n.convertUSDCurrencies.push(s),
          (n.currencyMappings[s] = r),
          n.options.push({ value: s, text: s })),
        n
      );
    },
    { convertUSDCurrencies: [], currencyMappings: {}, options: [] }
  );
}
const qs = ar(() => kd(fi.getValue())()).pipe(ye((e) => e.data || [])),
  Cd = new Ce(),
  Ed = ui(30 * 1e3).pipe(Fs(qs)),
  wd = Cd.pipe(Fs(qs)),
  Wi = ci(qs, Ed, wd).pipe(fr(1));
Wi.pipe(ye(xr), dr(xr([])));
const Id = Kl.pipe(ye(Dd));
jl.pipe(
  lt(Boolean),
  li(),
  Fs(
    $t([Wi.pipe(ye(xr)), Id]).pipe(
      ye(
        ([e, t]) =>
          function (n) {
            const r = e(n),
              s = t(n);
            return it(r).gt(s) ? s : r;
          }
      )
    )
  ),
  dr(xr([]))
);
function xr(e) {
  return function (t) {
    const n = e.find((r) => r.currency === t);
    return n ? n.balanceRq : "0";
  };
}
function Dd(e) {
  return function (t) {
    const n = e.find((r) => r.currency === t);
    return n ? n.remainingBorrowEv : "0";
  };
}
function kd(e) {
  return e ? un.getUtaSysRemainingBorrow : un.getSysRemainingBorrow;
}
const Sd = "https://img.phemex.com",
  ms = {
    SIMPLEX: "/v1/69a820fd/simplex.png",
    BIND_A_CARD: "/v1/d50ee580/bind-a-card.png",
    COMPLETE_PAYMENT: "/v1/af7294bb/step3-2x.png",
    COMPLETED: "/v1/8dc0b0ee/completed.png",
    ERROR: "/v1/f4f26239/error.png",
    FAILED: "/v1/7c2c1735/failed.png",
    FIAT_BALANCE_ACCOUNT: "/v1/09780b96/fiat-balance-account.png",
    FIAT_BALANCE: "/v1/2c9b91e5/fiat-balance.png",
    KYC_IDENTITY: "/v1/4c0fc21d/step2-2x.png",
    SUPPORT_PAYMENT: "/v1/ff69ef76/support-payment.png",
    ALL_PAYMENT_METHODS: "/v1/f9df6057/all-payment-methods.png",
    ULTRA_LOW_FEE: "/v1/0a538bcc/ultra-low-fee.png",
    SUPER_FAST_SETTLEMENT: "/v1/39c0c9ff/super-fast-settlement.png",
    NO_PAYMENT_METHOD: "/v1/8e8bfaf7/no-payment-method.png",
    NO_TRANSACTION_FEES: "/v1/369aedfe/no-transaction-fees.png",
    SIGN_UP: "/v1/6226ce71/step1-2x.png",
    TRADE_WITH_PRIVACY: "/v1/8b0a63e1/trade-with-privacy.png",
    TRADING_REQUIREMENTS: "/v1/eca643fd/trading-requirements.png",
    LINE: "/v1/e9bca3e5/line.png",
    BANK_BLUE: "/v1/44f04960/bank-blue.png",
    FIAT_ACCOUNT_ICON: "/v1/38eaa16deb95cba8/fiat-account.svg",
    FIAT_DEPOSIT_ICON: "/v1/fdb0db8eb05c2178/fiat-deposit.svg",
    ONE_CLICK_ICON: "/v1/e978c255ca365b23/one-click.svg",
    ADD_A_CARD: "/v1/173f4fa5/add-a-card.png",
    TRANSAK: "/v1/7ed8c681-8969-4330-8567-8305ffcbdb99/transak.svg",
  };
Object.keys(ms).forEach((e) => (ms[e] = [Sd, ms[e]].join("")));
const _s = {
  VISA: "/s/home/buy-crypto/visa.png",
  MASTERCARD: "/s/home/buy-crypto/master.png",
  BANKTRANSFER: "/s/home/buy-crypto/banktransfer.png",
  SEPA: "/s/home/buy-crypto/sepa.png",
  POLI: "/s/home/buy-crypto/poli.png",
  PAYID: "/s/home/buy-crypto/payid.png",
  IDEAL: "/s/home/buy-crypto/ideal.png",
  PIX: "/s/home/buy-crypto/pix.png",
};
Object.keys(_s).forEach((e) => (_s[e] = [Dn.STATIC_URL, _s[e]].join("")));
const qi = {
    getAnnuouncement(e) {
      return j.get(W.PUBLIC_B2C_BANNER, {
        query: e,
        formatter: (t) => (t.items && t.items[0]) || {},
      });
    },
    getConfigs(e, t) {
      return j.get(t ? W.BUY_CRYPTO_CONFIG : W.PUBLIC_BUY_CRYPTO_CONFIG, {
        query: e,
      });
    },
    getPricing(e, t) {
      return j.get(t ? W.BUY_CRYPTO_PRICING : W.PUBLIC_BUY_CRYPTO_PRICING, {
        query: e,
      });
    },
    getOrderList(e) {
      return j.get(W.B2C_ORDERS, { query: e });
    },
    getAdBannerList(e, t) {
      return j.get(
        t ? W.ACTIVITY_CONTENTS_VIEW_LOGIN : W.ACTIVITY_CONTENTS_VIEW_LOGOUT,
        { query: e }
      );
    },
    getPaymentList(e) {
      return j.get(W.B2C_BANK_CARD_LIST, { query: e });
    },
    setDefaultPayment(e) {
      return j.put(W.B2C_BANK_CARD_SET_DEFAULT, { query: e });
    },
    deletePayment(e) {
      return j.delete(W.B2C_BANK_CARD, { query: e });
    },
    postPlaceOrder(e) {
      return j.post(W.B2C_PLACE_ORDER, { params: e });
    },
    postBindCardPlaceOrder(e) {
      return j.post(W.B2C_BIND_CARD_PLACE_ORDER, { params: e });
    },
    postKycValidate(e) {
      return j.post(W.B2C_KYC_VALIDATE, { params: e });
    },
    checkRisk(e) {
      return j.get(W.FIAT_RISK_CHECK, { query: e });
    },
    creditOrderFailed(e) {
      return j.post(W.B2C_CREDIT_ORDER_FAILED, { params: e });
    },
    getDepositAddress(e) {
      return j.get(W.OTC_DEPOSIT_ADDRESS, { query: e });
    },
    getLegendQuestionnaires(e) {
      return j.get(W.OTC_LEGEND_QUESTIONNAIRE, { query: e });
    },
    getPhemexAndLegendKYCStatus() {
      return j.post(W.SUBMIT_OTC_LEGEND_QUESTIONNAIRE, {
        params: { needSync: !1 },
      });
    },
    postLegendQuestionnaire(e) {
      return j.post(W.SUBMIT_OTC_LEGEND_QUESTIONNAIRE, {
        params: { needSync: !0, ...e },
      });
    },
    getMercuryoNewBindedCards(e) {
      return j.get(W.B2C_BANK_CARD_LIST, {
        query: {
          pageNum: 0,
          pageSize: e || 3,
          channelName: "Mercuryo",
          status: "NEW",
          sortField: "update_time",
          side: "sell",
        },
      });
    },
    unbindMercuryoNewBindedCard(e) {
      return j.delete(W.DELETE_B2C_BANK_CARD, { query: { cardId: e } });
    },
    getPaybisOrderList(e) {
      return j.get(W.PAYBIS_ORDERS, { query: e });
    },
    postPaybisOrder(e) {
      return j.post(W.PAYBIS_PLACE_ORDER, { params: e });
    },
  },
  Ks = {
    checkGeo() {
      return j.get(W.OTC_LEGEND_GEO, {});
    },
    getParams() {
      return j.get(W.OTC_LEGEND_PARAMS, {});
    },
    checkKyc() {
      return j.get(W.OTC_KYC_CHECK, {});
    },
    getKycApprovedStatus() {
      return j.get(W.OTC_KYC_APPROVED_STATUS, {});
    },
    getKycApprovedStatusV2() {
      return j.get(W.OTC_KYC_APPROVED_STATUS_V2, {});
    },
    getLegendTradeHistory(e) {
      return j.get(W.BUY_CRYPTO_OTC_LEGEND_HISTORY, { query: e });
    },
  },
  fa = {
    NoKyc: 70015,
    NoRegionsNoAdvance: 70016,
    NoAdvance: 70017,
    NoBasic: 70018,
    NoRegions: 70019,
    Processing: 70020,
    Unverified: 70021,
    NotSupport: 70022,
    TypeNotSupport: 70023,
    Missing: 70024,
  },
  Pd = Object.keys(fa).reduce((e, t) => ({ ...e, [fa[t]]: t }), {});
const Rd = (e) => ({}),
  da = (e) => ({}),
  Ad = (e) => ({}),
  ha = (e) => ({});
function pa(e) {
  let t, n, r, s;
  return {
    c() {
      (t = y("i")), (n = B("")), this.h();
    },
    l(o) {
      t = T(o, "I", { class: !0 });
      var a = w(t);
      (n = U(a, "")), a.forEach(h), this.h();
    },
    h() {
      p(t, "class", "close-icon iconfont mr16 f16 cp svelte-kolf29");
    },
    m(o, a) {
      M(o, t, a), f(t, n), r || ((s = Ie(t, "click", e[8])), (r = !0));
    },
    p: je,
    d(o) {
      o && h(t), (r = !1), s();
    },
  };
}
function Od(e) {
  let t, n, r, s, o, a, i, l, c;
  const u = e[12].prefix,
    d = pn(u, e, e[11], ha);
  let m = e[4] && e[0] && pa(e);
  const g = e[12].suffix,
    v = pn(g, e, e[11], da);
  return {
    c() {
      (t = y("div")),
        d && d.c(),
        (n = A()),
        (r = y("input")),
        (o = A()),
        m && m.c(),
        (a = A()),
        v && v.c(),
        this.h();
    },
    l(_) {
      t = T(_, "DIV", { class: !0 });
      var I = w(t);
      d && d.l(I),
        (n = O(I)),
        (r = T(I, "INPUT", { class: !0, placeholder: !0, type: !0 })),
        (o = O(I)),
        m && m.l(I),
        (a = O(I)),
        v && v.l(I),
        I.forEach(h),
        this.h();
    },
    h() {
      p(r, "class", (s = "fw5 T2 " + e[1] + " svelte-kolf29")),
        (r.readOnly = e[2]),
        p(r, "placeholder", e[3]),
        p(r, "type", "text"),
        X(r, "disabled", e[2]),
        p(t, "class", "pm-input df aic br4 svelte-kolf29");
    },
    m(_, I) {
      M(_, t, I),
        d && d.m(t, null),
        f(t, n),
        f(t, r),
        e[15](r),
        f(t, o),
        m && m.m(t, null),
        f(t, a),
        v && v.m(t, null),
        (i = !0),
        l ||
          ((c = [
            Ie(r, "keydown", e[9]),
            Ie(r, "focus", e[13]),
            Ie(r, "blur", e[14]),
            Ie(r, "input", e[7]),
          ]),
          (l = !0));
    },
    p(_, [I]) {
      d &&
        d.p &&
        (!i || I & 2048) &&
        gn(d, u, _, _[11], i ? _n(u, _[11], I, Ad) : mn(_[11]), ha),
        (!i || (I & 2 && s !== (s = "fw5 T2 " + _[1] + " svelte-kolf29"))) &&
          p(r, "class", s),
        (!i || I & 4) && (r.readOnly = _[2]),
        (!i || I & 8) && p(r, "placeholder", _[3]),
        (!i || I & 6) && X(r, "disabled", _[2]),
        _[4] && _[0]
          ? m
            ? m.p(_, I)
            : ((m = pa(_)), m.c(), m.m(t, a))
          : m && (m.d(1), (m = null)),
        v &&
          v.p &&
          (!i || I & 2048) &&
          gn(v, g, _, _[11], i ? _n(g, _[11], I, Rd) : mn(_[11]), da);
    },
    i(_) {
      i || (Y(d, _), Y(v, _), (i = !0));
    },
    o(_) {
      q(d, _), q(v, _), (i = !1);
    },
    d(_) {
      _ && h(t),
        d && d.d(_),
        e[15](null),
        m && m.d(),
        v && v.d(_),
        (l = !1),
        Hr(c);
    },
  };
}
function Nd(e) {
  if (document.selection) {
    e.focus();
    const t = document.selection.createRange(),
      n = t.text.length;
    t.moveStart("character", -e.value.length);
    const r = t.text.length - n;
    return { start: r, end: r + n };
  }
  return e.selectionStart || e.selectionStart === 0
    ? { start: e.selectionStart, end: e.selectionEnd }
    : { start: 0, end: 0 };
}
function Md(e, { start: t, end: n }) {
  if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, n);
  else if (e.createTextRange) {
    const r = e.createTextRange();
    r.collapse(!0),
      r.moveEnd("character", n),
      r.moveStart("character", t),
      r.select();
  }
}
function vs(e, t) {
  e && e.value !== t && (e.value = t);
}
function Ld(e, t, n) {
  let r,
    { $$slots: s = {}, $$scope: o } = t,
    { class: a = "" } = t,
    { len: i = null } = t,
    { value: l = "" } = t,
    { disabled: c = !1 } = t,
    { placeholder: u = "" } = t,
    { clearable: d = !1 } = t;
  const m = Ut(),
    g = Pn("field");
  Me(e, g, (S) => n(18, (r = S)));
  let v = null,
    _ = "",
    I = null;
  tt(() => {
    if (!g) return;
    t.hasOwnProperty("value") && console.warn("Input Value binding is invalid");
    const S = r;
    S !== l && (n(0, (l = S)), (_ = S), vs(v, S));
  });
  function C(S) {
    g && g.set(S);
  }
  function k(S) {
    const H = S.target,
      F = H.value;
    if (i && F.length > i) {
      D(H);
      return;
    }
    n(0, (l = F)), (_ = F), C(F), m("change", { value: F });
  }
  function D(S) {
    vs(S, _), I && Md(S, I), (I = null);
  }
  function E() {
    n(0, (l = "")), (_ = ""), C(""), m("change", { value: "" });
  }
  function b(S) {
    (I = Nd(S.target)), m("keydown", S);
  }
  function P(S) {
    nn.call(this, e, S);
  }
  function R(S) {
    nn.call(this, e, S);
  }
  function N(S) {
    Ne[S ? "unshift" : "push"](() => {
      (v = S), n(5, v);
    });
  }
  return (
    (e.$$set = (S) => {
      n(22, (t = fo(fo({}, t), ho(S)))),
        "class" in S && n(1, (a = S.class)),
        "len" in S && n(10, (i = S.len)),
        "value" in S && n(0, (l = S.value)),
        "disabled" in S && n(2, (c = S.disabled)),
        "placeholder" in S && n(3, (u = S.placeholder)),
        "clearable" in S && n(4, (d = S.clearable)),
        "$$scope" in S && n(11, (o = S.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 33 && !g && vs(v, l);
    }),
    (t = ho(t)),
    [l, a, c, u, d, v, g, k, E, b, i, o, s, P, R, N]
  );
}
class nr extends He {
  constructor(t) {
    super(),
      Ye(this, t, Ld, Od, Qe, {
        class: 1,
        len: 10,
        value: 0,
        disabled: 2,
        placeholder: 3,
        clearable: 4,
      });
  }
}
const es = new ve(!1),
  Fd = new Ce(),
  Vd = new Ce(),
  Bd = new Ce(),
  Ud = new Ce(),
  Ki = new ve(null),
  $d = new Ce(),
  Hd = new Ce(),
  ji = new Ce(),
  Yd = new ve(!0),
  Qd = new Ce(),
  Wd = new ve(!1);
$t([Fd, as])
  .pipe(
    ot(Ge),
    Ar(() => es.next(!0)),
    di(500),
    Re(([e, t]) => qd(e, t)),
    lt(Boolean)
  )
  .subscribe((e) => {
    es.next(!1), Ki.next(e);
  });
$t([Vd, as])
  .pipe(
    ot(Ge),
    Ar(() => es.next(!0)),
    di(500),
    Re(([e, t]) => Kd(e, t)),
    lt(Boolean)
  )
  .subscribe((e) => {
    es.next(!1);
    const { isUpdate: t } = e,
      [n] = e.channels;
    $d.next({ ...n, isUpdate: t });
  });
Bd.pipe(ot(Ge), Re(jd), lt(Boolean)).subscribe((e) => {
  Hd.next(e);
});
async function qd(e, t) {
  if (t && t === "Init") return;
  const n = t === "Login",
    { data: r, error: s } = await Vs.getBuyCryptoConfig(e, n);
  if (r) return r;
  s && oe.send("toast", "error", s);
}
async function Kd(e, t) {
  if (t && t === "Init") return;
  const n = t === "Login",
    { isUpdate: r, ...s } = e,
    o = Ki.getValue();
  if (!o) return;
  if (
    !(s.side === "buy"
      ? +o.minBuyFiatAmount <= s.fiatAmount &&
        +o.maxBuyFiatAmount >= s.fiatAmount
      : +o.minSellDigitalAmount <= s.digitalAmount &&
        +o.maxSellDigitalAmount >= s.digitalAmount)
  )
    return null;
  const { data: i, error: l } = await Vs.getBuyCryptoPricing(s, n);
  if (i) return { ...i, isUpdate: r };
  l && oe.send("toast", "error", l);
}
async function jd(e) {
  const { data: t, error: n } = await Vs.getBuyCryptoBanner(e);
  if (t) {
    const r = t.rows.find((s) => s.language === e.language);
    if (r) return r;
    if (t.rows.length === 0) return null;
  }
  n && oe.send("toast", "error", n);
}
Ud.pipe(ot(Ge), Re(zd), lt(Boolean)).subscribe((e) => {
  ji.next(e);
});
async function zd() {
  const { data: e, error: t } = await Yn.getCountryRegions();
  if (e) return e.rows;
  t && oe.send("toast", "error", t);
}
$t([Qs, ji]);
Qd.pipe(
  Re(() => {
    const e = Ic.parse(window.location.search);
    return ["amount", "payment"].every((t) => !!e[t]) ? Un(!1) : Jd();
  })
).subscribe((e) => {
  e && Wd.next(!0), Yd.next(!1);
});
async function Jd() {
  const { data: e, error: t } = await Ks.getKycApprovedStatus();
  return t && oe.send("toast", "error", t), e;
}
const We = {
  ThisTradingIs: "033993",
  Confirm: "ba9b52",
  Notice: "790e1f",
  SorryThisService: "74b6ec",
  IfYouWantTo: "635371",
  TradingRequirements: "a55f9b",
  ForSecureTransactions: "a36ca2",
  BasicAndAdv: "979871",
  NoteTheOriginal: "a620c8",
};
function Xd(e) {
  let t = e[0](We.Confirm) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0](We.Confirm) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function Zd(e) {
  let t,
    n,
    r,
    s = e[0](We.ThisTradingIs) + "",
    o,
    a,
    i,
    l,
    c,
    u,
    d;
  return (
    (l = new Bt({
      props: {
        class: "wp100",
        newRadius: !0,
        type: "primary",
        $$slots: { default: [Xd] },
        $$scope: { ctx: e },
      },
    })),
    l.$on("click", e[2]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = y("div")),
          (o = B(s)),
          (a = A()),
          (i = y("div")),
          le(l.$$.fragment),
          this.h();
      },
      l(m) {
        t = T(m, "DIV", { class: !0 });
        var g = w(t);
        n = T(g, "DIV", { class: !0 });
        var v = w(n);
        r = T(v, "DIV", { class: !0 });
        var _ = w(r);
        (o = U(_, s)),
          _.forEach(h),
          v.forEach(h),
          (a = O(g)),
          (i = T(g, "DIV", { class: !0 }));
        var I = w(i);
        ce(l.$$.fragment, I), I.forEach(h), g.forEach(h), this.h();
      },
      h() {
        p(r, "class", "lh24 f16 T1"),
          p(n, "class", "df fdc"),
          p(i, "class", "mt40 wp100"),
          p(t, "class", "df fdc aic mt40");
      },
      m(m, g) {
        M(m, t, g),
          f(t, n),
          f(n, r),
          f(r, o),
          f(t, a),
          f(t, i),
          ue(l, i, null),
          (c = !0),
          u || ((d = Ie(t, "click", eh)), (u = !0));
      },
      p(m, g) {
        (!c || g & 1) && s !== (s = m[0](We.ThisTradingIs) + "") && se(o, s);
        const v = {};
        g & 33 && (v.$$scope = { dirty: g, ctx: m }), l.$set(v);
      },
      i(m) {
        c || (Y(l.$$.fragment, m), (c = !0));
      },
      o(m) {
        q(l.$$.fragment, m), (c = !1);
      },
      d(m) {
        m && h(t), fe(l), (u = !1), d();
      },
    }
  );
}
function Gd(e) {
  let t,
    n,
    r = e[0](We.Notice) + "",
    s;
  return {
    c() {
      (t = y("div")), (n = y("div")), (s = B(r)), this.h();
    },
    l(o) {
      t = T(o, "DIV", { class: !0, slot: !0 });
      var a = w(t);
      n = T(a, "DIV", { class: !0 });
      var i = w(n);
      (s = U(i, r)), i.forEach(h), a.forEach(h), this.h();
    },
    h() {
      p(n, "class", "lh24 f20 fw3 T1"),
        p(t, "class", "header df aic jcc lh24 f24"),
        p(t, "slot", "header");
    },
    m(o, a) {
      M(o, t, a), f(t, n), f(n, s);
    },
    p(o, a) {
      a & 1 && r !== (r = o[0](We.Notice) + "") && se(s, r);
    },
    d(o) {
      o && h(t);
    },
  };
}
function xd(e) {
  let t, n, r, s, o;
  return (
    (n = new sn({
      props: {
        visible: !0,
        allowScroll: !0,
        style: "border-radius: 12px;width: 480px;background: #fff;",
        $$slots: { header: [Gd], default: [Zd] },
        $$scope: { ctx: e },
      },
    })),
    n.$on("close", e[1]),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0 });
        var i = w(t);
        ce(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        p(t, "class", "dialog-box");
      },
      m(a, i) {
        M(a, t, i),
          ue(n, t, null),
          (r = !0),
          s || ((o = Ie(t, "mousewheel", rs(e[3]))), (s = !0));
      },
      p(a, [i]) {
        const l = {};
        i & 33 && (l.$$scope = { dirty: i, ctx: a }), n.$set(l);
      },
      i(a) {
        r || (Y(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && h(t), fe(n), (s = !1), o();
      },
    }
  );
}
function eh(e) {
  e.stopPropagation();
}
function th(e, t, n) {
  let { LG: r = null } = t;
  const s = Ut();
  function o() {
    s("close");
  }
  function a() {
    o();
  }
  function i(l) {
    nn.call(this, e, l);
  }
  return (
    (e.$$set = (l) => {
      "LG" in l && n(0, (r = l.LG));
    }),
    [r, o, a, i]
  );
}
class nh extends He {
  constructor(t) {
    super(), Ye(this, t, th, xd, Qe, { LG: 0 });
  }
}
function rh(e) {
  let t = e[0](We.Confirm) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0](We.Confirm) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function sh(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0](We.TradingRequirements) + "",
    i,
    l,
    c,
    u,
    d,
    m =
      e[0](We.ForSecureTransactions).replace(
        e[0](We.BasicAndAdv),
        `<span class="T1">${e[0](We.BasicAndAdv)}</span>`
      ) + "",
    g,
    v,
    _ = e[0](We.NoteTheOriginal) + "",
    I,
    C,
    k,
    D,
    E,
    b,
    P;
  return (
    (D = new Bt({
      props: {
        class: "wp100",
        newRadius: !0,
        type: "primary",
        $$slots: { default: [rh] },
        $$scope: { ctx: e },
      },
    })),
    D.$on("click", e[2]),
    {
      c() {
        (t = y("div")),
          (n = y("img")),
          (s = A()),
          (o = y("h2")),
          (i = B(a)),
          (l = A()),
          (c = y("div")),
          (u = y("div")),
          (d = y("div")),
          (g = A()),
          (v = y("div")),
          (I = B(_)),
          (C = A()),
          (k = y("div")),
          le(D.$$.fragment),
          this.h();
      },
      l(R) {
        t = T(R, "DIV", { class: !0 });
        var N = w(t);
        (n = T(N, "IMG", {
          width: !0,
          height: !0,
          src: !0,
          class: !0,
          alt: !0,
        })),
          (s = O(N)),
          (o = T(N, "H2", { class: !0 }));
        var S = w(o);
        (i = U(S, a)),
          S.forEach(h),
          (l = O(N)),
          (c = T(N, "DIV", { class: !0 }));
        var H = w(c);
        u = T(H, "DIV", { class: !0 });
        var F = w(u);
        d = T(F, "DIV", { class: !0 });
        var G = w(d);
        G.forEach(h), (g = O(F)), (v = T(F, "DIV", { class: !0 }));
        var re = w(v);
        (I = U(re, _)),
          re.forEach(h),
          F.forEach(h),
          (C = O(H)),
          (k = T(H, "DIV", { class: !0 }));
        var x = w(k);
        ce(D.$$.fragment, x),
          x.forEach(h),
          H.forEach(h),
          N.forEach(h),
          this.h();
      },
      h() {
        p(n, "width", "100"),
          p(n, "height", "100"),
          st(n.src, (r = Bs.KYC_CERTIFICATION)) || p(n, "src", r),
          p(n, "class", "kyc tc"),
          p(n, "alt", "KYC"),
          p(o, "class", "p0 mb24 tc"),
          p(d, "class", "lh24 f16 T3"),
          p(v, "class", "mt10 lh24 f16 T1 tl"),
          p(u, "class", "df fdc"),
          p(k, "class", "mt40 wp100"),
          p(c, "class", "df fdc aic"),
          p(t, "class", "tc");
      },
      m(R, N) {
        M(R, t, N),
          f(t, n),
          f(t, s),
          f(t, o),
          f(o, i),
          f(t, l),
          f(t, c),
          f(c, u),
          f(u, d),
          (d.innerHTML = m),
          f(u, g),
          f(u, v),
          f(v, I),
          f(c, C),
          f(c, k),
          ue(D, k, null),
          (E = !0),
          b || ((P = Ie(c, "click", ah)), (b = !0));
      },
      p(R, N) {
        (!E || N & 1) &&
          a !== (a = R[0](We.TradingRequirements) + "") &&
          se(i, a),
          (!E || N & 1) &&
            m !==
              (m =
                R[0](We.ForSecureTransactions).replace(
                  R[0](We.BasicAndAdv),
                  `<span class="T1">${R[0](We.BasicAndAdv)}</span>`
                ) + "") &&
            (d.innerHTML = m),
          (!E || N & 1) &&
            _ !== (_ = R[0](We.NoteTheOriginal) + "") &&
            se(I, _);
        const S = {};
        N & 65 && (S.$$scope = { dirty: N, ctx: R }), D.$set(S);
      },
      i(R) {
        E || (Y(D.$$.fragment, R), (E = !0));
      },
      o(R) {
        q(D.$$.fragment, R), (E = !1);
      },
      d(R) {
        R && h(t), fe(D), (b = !1), P();
      },
    }
  );
}
function oh(e) {
  let t, n, r, s, o;
  return (
    (n = new sn({
      props: {
        visible: !0,
        allowScroll: !0,
        showCloseIcon: !0,
        style: "border-radius: 12px;width: 480px;background: #fff;",
        $$slots: { default: [sh] },
        $$scope: { ctx: e },
      },
    })),
    n.$on("close", e[1]),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0 });
        var i = w(t);
        ce(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        p(t, "class", "dialog-box");
      },
      m(a, i) {
        M(a, t, i),
          ue(n, t, null),
          (r = !0),
          s || ((o = Ie(t, "mousewheel", rs(e[3]))), (s = !0));
      },
      p(a, [i]) {
        const l = {};
        i & 65 && (l.$$scope = { dirty: i, ctx: a }), n.$set(l);
      },
      i(a) {
        r || (Y(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && h(t), fe(n), (s = !1), o();
      },
    }
  );
}
function ah(e) {
  e.stopPropagation();
}
function ih(e, t, n) {
  let r;
  Me(e, Ls, (c) => n(4, (r = c)));
  let { LG: s = null } = t;
  const o = Ut();
  function a() {
    o("close");
  }
  function i() {
    hi(r(Zt.ACCOUNT_VERIFICATION.pathname) + "?popupKycEntry=kyc");
  }
  function l(c) {
    nn.call(this, e, c);
  }
  return (
    (e.$$set = (c) => {
      "LG" in c && n(0, (s = c.LG));
    }),
    [s, a, i, l]
  );
}
class lh extends He {
  constructor(t) {
    super(), Ye(this, t, ih, oh, Qe, { LG: 0 });
  }
}
function ch(e) {
  let t = e[0](We.Confirm) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0](We.Confirm) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function uh(e) {
  let t,
    n,
    r,
    s = e[0](We.SorryThisService) + "",
    o,
    a,
    i,
    l = e[0](We.IfYouWantTo) + "",
    c,
    u,
    d,
    m,
    g,
    v,
    _;
  return (
    (m = new Bt({
      props: {
        class: "wp100",
        newRadius: !0,
        type: "primary",
        $$slots: { default: [ch] },
        $$scope: { ctx: e },
      },
    })),
    m.$on("click", e[2]),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = y("div")),
          (o = B(s)),
          (a = A()),
          (i = y("div")),
          (c = B(l)),
          (u = A()),
          (d = y("div")),
          le(m.$$.fragment),
          this.h();
      },
      l(I) {
        t = T(I, "DIV", { class: !0 });
        var C = w(t);
        n = T(C, "DIV", { class: !0 });
        var k = w(n);
        r = T(k, "DIV", { class: !0 });
        var D = w(r);
        (o = U(D, s)),
          D.forEach(h),
          (a = O(k)),
          (i = T(k, "DIV", { class: !0 }));
        var E = w(i);
        (c = U(E, l)),
          E.forEach(h),
          k.forEach(h),
          (u = O(C)),
          (d = T(C, "DIV", { class: !0 }));
        var b = w(d);
        ce(m.$$.fragment, b), b.forEach(h), C.forEach(h), this.h();
      },
      h() {
        p(r, "class", "lh24 f16 T1"),
          p(i, "class", "lh24 f16 T1"),
          p(n, "class", "df fdc"),
          p(d, "class", "mt40 wp100"),
          p(t, "class", "df fdc aic mt40");
      },
      m(I, C) {
        M(I, t, C),
          f(t, n),
          f(n, r),
          f(r, o),
          f(n, a),
          f(n, i),
          f(i, c),
          f(t, u),
          f(t, d),
          ue(m, d, null),
          (g = !0),
          v || ((_ = Ie(t, "click", hh)), (v = !0));
      },
      p(I, C) {
        (!g || C & 1) && s !== (s = I[0](We.SorryThisService) + "") && se(o, s),
          (!g || C & 1) && l !== (l = I[0](We.IfYouWantTo) + "") && se(c, l);
        const k = {};
        C & 33 && (k.$$scope = { dirty: C, ctx: I }), m.$set(k);
      },
      i(I) {
        g || (Y(m.$$.fragment, I), (g = !0));
      },
      o(I) {
        q(m.$$.fragment, I), (g = !1);
      },
      d(I) {
        I && h(t), fe(m), (v = !1), _();
      },
    }
  );
}
function fh(e) {
  let t,
    n,
    r = e[0](We.Notice) + "",
    s;
  return {
    c() {
      (t = y("div")), (n = y("div")), (s = B(r)), this.h();
    },
    l(o) {
      t = T(o, "DIV", { class: !0, slot: !0 });
      var a = w(t);
      n = T(a, "DIV", { class: !0 });
      var i = w(n);
      (s = U(i, r)), i.forEach(h), a.forEach(h), this.h();
    },
    h() {
      p(n, "class", "lh24 f20 fw3 T1"),
        p(t, "class", "header df aic jcc lh24 f24"),
        p(t, "slot", "header");
    },
    m(o, a) {
      M(o, t, a), f(t, n), f(n, s);
    },
    p(o, a) {
      a & 1 && r !== (r = o[0](We.Notice) + "") && se(s, r);
    },
    d(o) {
      o && h(t);
    },
  };
}
function dh(e) {
  let t, n, r, s, o;
  return (
    (n = new sn({
      props: {
        visible: !0,
        allowScroll: !0,
        style: "border-radius: 12px;width: 480px;background: #fff;",
        $$slots: { header: [fh], default: [uh] },
        $$scope: { ctx: e },
      },
    })),
    n.$on("close", e[1]),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0 });
        var i = w(t);
        ce(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        p(t, "class", "dialog-box");
      },
      m(a, i) {
        M(a, t, i),
          ue(n, t, null),
          (r = !0),
          s || ((o = Ie(t, "mousewheel", rs(e[3]))), (s = !0));
      },
      p(a, [i]) {
        const l = {};
        i & 33 && (l.$$scope = { dirty: i, ctx: a }), n.$set(l);
      },
      i(a) {
        r || (Y(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && h(t), fe(n), (s = !1), o();
      },
    }
  );
}
function hh(e) {
  e.stopPropagation();
}
function ph(e, t, n) {
  let { LG: r = null } = t;
  const s = Ut();
  function o() {
    s("close");
  }
  function a() {
    o();
  }
  function i(l) {
    nn.call(this, e, l);
  }
  return (
    (e.$$set = (l) => {
      "LG" in l && n(0, (r = l.LG));
    }),
    [r, o, a, i]
  );
}
class gh extends He {
  constructor(t) {
    super(), Ye(this, t, ph, dh, Qe, { LG: 0 });
  }
}
const mh = new ve(""),
  zi = new Ce(),
  Ji = zi.pipe(
    ot(Ge),
    Re(qi.getLegendQuestionnaires),
    Ar(Jl),
    ye(({ data: e }) => ({ loading: !e, data: e })),
    dr({ loading: !0, data: [] }),
    fr(1)
  ),
  ts = new ve([]),
  _h = $t([Ji, ts]).pipe(ye(bh), fr(1)),
  vh = new Ce();
vh.pipe(
  Zr(
    Ji.pipe(
      lt((e) => !e.loading),
      ye((e) => e.data)
    ),
    ts
  )
).subscribe(([{ index: e, data: t }, n, r]) => {
  const o = n[e].reduce(
      (i, l) => (
        l.type === "checkbox" &&
          ((l == null ? void 0 : l.options) || []).forEach((c) => {
            i[c.name] = !1;
          }),
        l.type === "radio" && (i[l.name] = ""),
        l.type === "textarea" && (i[l.name] = ""),
        i
      ),
      {}
    ),
    a = [...r];
  (a[e] = { ...o, ...(r[e] || {}), ...t }), ts.next(a);
});
function bh([e, t]) {
  if (e.loading || t.length < 1) return !1;
  const n = e.data,
    r = t.filter(Boolean);
  return n.length !== r.length
    ? !1
    : t.every((s, o) =>
        Object.values(s || {}).find((a) => {
          var i, l;
          return (
            a === !0 ||
            (a == null ? void 0 : a.length) >= 15 ||
            (((l = (i = n[o]) == null ? void 0 : i[0]) == null
              ? void 0
              : l.type) === "radio" &&
              a.length > 0)
          );
        })
      );
}
const yh = new Ce();
yh.pipe(
  Zr(_h.pipe(lt(Boolean))),
  zl(
    ([
      {
        answers: e,
        LG: t,
        closeOriginDialog: n,
        closeOriginDialogAndSetPromise: r,
      },
    ]) =>
      ar(() => qi.postLegendQuestionnaire({ answers: e })).pipe(
        ye((s) => {
          const { error: o, data: a } = s,
            i = o == null ? void 0 : o.code,
            l = Pd[i];
          return i && l
            ? (i === 70022
                ? (n && n(), wn.create(nh, { LG: t }))
                : i === 70023
                ? (n && n(), wn.create(gh, { LG: t }))
                : i === 70024
                ? (n && n(), wn.create(lh, { LG: t }))
                : oe.send("toast", "error", o),
              !1)
            : a
            ? !0
            : (oe.send("toast", "error", o), !1);
        }),
        Re((s) =>
          s
            ? ar(() => Ks.getKycApprovedStatusV2()).pipe(
                Re((o) => {
                  const { error: a, data: i } = o;
                  if (!!i) return Un({ loading: !1, data: !0 });
                  const c = ns[a == null ? void 0 : a.code];
                  if (c && c !== "WRITE_QUESTIONNAIRE") {
                    const u = r();
                    return ar(() =>
                      Sh({
                        LG: t,
                        legendKycStatus: c === "IN_REVIEW" ? ns.PROCESSING : c,
                      })
                    ).pipe(
                      ye((d) => (u && u(!!d), { loading: !1, data: !!d }))
                    );
                  }
                  return (
                    oe.send("toast", "error", a), Un({ loading: !1, data: !1 })
                  );
                })
              )
            : Un({ loading: !1, data: !1 })
        ),
        dr({ loading: !0, data: !1 })
      )
  ),
  fr(1)
);
mh.subscribe((e) => {
  e === "visible" && zi.next(), e === "hidden" && ts.next([]);
});
const tn = {
  Survey: "55df28",
  QuestionnaireIntroduction: "ae3b07",
  Optional: "29b07f",
  Continue: "1a30e3",
  Confirm: "d380ed",
  KYCLoadingTitle: "6db21f",
  KYCLoadingIntroduction: "c40cbf",
  OneMinute: "93bb81",
  Unfortunately: "edfc4d",
  UnfortunatelyTitle: "e19dfe",
  UnfortunatelyIntroduction: "2abe02",
  VerifyYourIdentity: "702f5d",
  VerifyYourIdentityTitle: "1c745c",
  VerifyYourIdentityIntroduction: "5841b3",
  Introduction: "df9ac9",
  AdditiOnother: "1cc0d1",
  PleaseDetails: "375d25",
};
const Xi = 6,
  zr = new Ce(),
  { poll$: Th, notifier$: Ch } = Xl(
    () =>
      ar(Ks.getKycApprovedStatusV2).pipe(
        ye((e) => {
          const { data: t, error: n } = e;
          return t
            ? "APPROVED"
            : ns[n == null ? void 0 : n.code] || ns.PROCESSING;
        })
      ),
    { pollInterval: 2e3, pollTimes: Xi }
  );
function ga(e) {
  let t, n;
  return (
    (t = new pi({
      props: {
        newRadius: !0,
        type: "primary",
        class: "submit-btn mt32 wp100 f16 fw2",
        $$slots: { default: [Eh] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("click", e[2]),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s & 4097 && (o.$$scope = { dirty: s, ctx: r }), t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function Eh(e) {
  let t = e[0](tn.Confirm) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0](tn.Confirm) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function wh(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0](e[1].title) + "",
    i,
    l,
    c,
    u = e[0](e[1].introduction) + "",
    d,
    m,
    g,
    v,
    _ =
      e[0](e[1].content, {
        OneMinute: `<span class="b T1">${e[0](tn.OneMinute)}</span>`,
        SubmitATicket:
          '<a href="https://support.legendtrading.com/hc/en-us/requests/new" target="legend_support">Submit a Ticket</a>',
      }) + "",
    I,
    C,
    k,
    D,
    E = e[1].showConfirm && ga(e);
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("h1")),
        (i = B(a)),
        (l = A()),
        (c = y("div")),
        (d = B(u)),
        (g = A()),
        (v = y("div")),
        (k = A()),
        E && E.c(),
        this.h();
    },
    l(b) {
      t = T(b, "DIV", { class: !0 });
      var P = w(t);
      (n = T(P, "IMG", {
        src: !0,
        width: !0,
        height: !0,
        alt: !0,
        srcset: !0,
      })),
        (s = O(P)),
        (o = T(P, "H1", { class: !0 }));
      var R = w(o);
      (i = U(R, a)), R.forEach(h), (l = O(P)), (c = T(P, "DIV", { class: !0 }));
      var N = w(c);
      (d = U(N, u)), N.forEach(h), (g = O(P)), (v = T(P, "DIV", { class: !0 }));
      var S = w(v);
      S.forEach(h), (k = O(P)), E && E.l(P), P.forEach(h), this.h();
    },
    h() {
      st(n.src, (r = e[1].logo)) || p(n, "src", r),
        p(n, "width", "88"),
        p(n, "height", "88"),
        p(n, "alt", ""),
        p(n, "srcset", ""),
        p(o, "class", "p0 T1 f20 b gilroy mt32 svelte-sluedi"),
        p(c, "class", "light-color f16 fw2 gilroy mt12 svelte-sluedi"),
        (c.hidden = m = !e[1].introduction),
        p(
          v,
          "class",
          (I =
            "light-color gilroy " +
            (e[1].introduction ? "f12 bg" : "f16 fw2") +
            " mt12 svelte-sluedi")
        ),
        (v.hidden = C = !e[1].content),
        p(t, "class", "df aic jcc fdc");
    },
    m(b, P) {
      M(b, t, P),
        f(t, n),
        f(t, s),
        f(t, o),
        f(o, i),
        f(t, l),
        f(t, c),
        f(c, d),
        f(t, g),
        f(t, v),
        (v.innerHTML = _),
        f(t, k),
        E && E.m(t, null),
        (D = !0);
    },
    p(b, P) {
      (!D || (P & 2 && !st(n.src, (r = b[1].logo)))) && p(n, "src", r),
        (!D || P & 3) && a !== (a = b[0](b[1].title) + "") && se(i, a),
        (!D || P & 3) && u !== (u = b[0](b[1].introduction) + "") && se(d, u),
        (!D || (P & 2 && m !== (m = !b[1].introduction))) && (c.hidden = m),
        (!D || P & 3) &&
          _ !==
            (_ =
              b[0](b[1].content, {
                OneMinute: `<span class="b T1">${b[0](tn.OneMinute)}</span>`,
                SubmitATicket:
                  '<a href="https://support.legendtrading.com/hc/en-us/requests/new" target="legend_support">Submit a Ticket</a>',
              }) + "") &&
          (v.innerHTML = _),
        (!D ||
          (P & 2 &&
            I !==
              (I =
                "light-color gilroy " +
                (b[1].introduction ? "f12 bg" : "f16 fw2") +
                " mt12 svelte-sluedi"))) &&
          p(v, "class", I),
        (!D || (P & 2 && C !== (C = !b[1].content))) && (v.hidden = C),
        b[1].showConfirm
          ? E
            ? (E.p(b, P), P & 2 && Y(E, 1))
            : ((E = ga(b)), E.c(), Y(E, 1), E.m(t, null))
          : E &&
            (Mt(),
            q(E, 1, 1, () => {
              E = null;
            }),
            Lt());
    },
    i(b) {
      D || (Y(E), (D = !0));
    },
    o(b) {
      q(E), (D = !1);
    },
    d(b) {
      b && h(t), E && E.d();
    },
  };
}
function Ih(e) {
  let t, n, r, s, o;
  return (
    (n = new sn({
      props: {
        class: "order-container",
        visible: !0,
        showCloseIcon: !0,
        allowScroll: !0,
        style: "width: 480px",
        $$slots: { default: [wh] },
        $$scope: { ctx: e },
      },
    })),
    n.$on("close", e[6]),
    {
      c() {
        (t = y("div")), le(n.$$.fragment), this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0 });
        var i = w(t);
        ce(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        p(t, "class", "dialog-box svelte-sluedi");
      },
      m(a, i) {
        M(a, t, i),
          ue(n, t, null),
          (r = !0),
          s || ((o = Ie(t, "mousewheel", rs(e[5]))), (s = !0));
      },
      p(a, [i]) {
        const l = {};
        i & 4099 && (l.$$scope = { dirty: i, ctx: a }), n.$set(l);
      },
      i(a) {
        r || (Y(n.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(n.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && h(t), fe(n), (s = !1), o();
      },
    }
  );
}
function Dh(e, t, n) {
  let r, s;
  Me(e, Th, (_) => n(4, (s = _)));
  let { LG: o } = t,
    { legendKycStatus: a } = t;
  const i = Ut();
  let l = 0;
  tt(() => () => {
    zr.next();
  });
  function c(_) {
    _ === "PROCESSING" && Ch.next(null);
  }
  function u(_) {
    if ((console.log(_), !!_)) {
      if (a !== "PROCESSING") {
        zr.next();
        return;
      }
      if (_ === "APPROVED") {
        i("success"), zr.next();
        return;
      }
      if (_ === "REJECTED") {
        n(3, (a = "REJECTED")), zr.next();
        return;
      }
      (l += 1), l >= Xi && n(3, (a = "IN_REVIEW"));
    }
  }
  function d(_) {
    return {
      REJECTED: {
        logo: ys.ORDER_FAILED,
        title: tn.Unfortunately,
        introduction: tn.UnfortunatelyTitle,
        content: tn.UnfortunatelyIntroduction,
        showConfirm: !0,
      },
      PROCESSING: {
        logo: ys.ORDER_PROCESSING,
        title: tn.KYCLoadingTitle,
        content: tn.KYCLoadingIntroduction,
      },
      IN_REVIEW: {
        logo: ys.ORDER_TIME,
        title: tn.VerifyYourIdentity,
        introduction: tn.VerifyYourIdentityTitle,
        content: tn.VerifyYourIdentityIntroduction,
        showConfirm: !0,
      },
    }[_];
  }
  function m() {
    i("close");
  }
  function g(_) {
    nn.call(this, e, _);
  }
  function v(_) {
    nn.call(this, e, _);
  }
  return (
    (e.$$set = (_) => {
      "LG" in _ && n(0, (o = _.LG)),
        "legendKycStatus" in _ && n(3, (a = _.legendKycStatus));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 8 && n(1, (r = d(a))),
        e.$$.dirty & 8 && c(a),
        e.$$.dirty & 16 && u(s);
    }),
    [o, r, m, a, s, g, v]
  );
}
class kh extends He {
  constructor(t) {
    super(), Ye(this, t, Dh, Ih, Qe, { LG: 0, legendKycStatus: 3 });
  }
}
const bs = "https://img.phemex.com/v1/",
  ys = {
    ORDER_PROCESSING: `${bs}86259d03-fd2e-4eb4-88c9-1dccdabe5315/order-processing.svg`,
    ORDER_TIME: `${bs}af18cc67-cd06-4d93-9099-fbf57f311d4d/order-time.svg`,
    ORDER_FAILED: `${bs}74f78ff5-f99d-42a5-b4f6-63e689dd119c/order-failed.svg`,
  };
async function Sh(e) {
  const t = wn.create(kh, e);
  return new Promise((n) => {
    t.$on("success", function (r) {
      t.$destroy(), n(!0);
    }),
      t.$on("close", function () {
        t.$destroy(), n(!1);
      });
  });
}
const ns = {
  70050: "WRITE_QUESTIONNAIRE",
  70051: "IN_REVIEW",
  70052: "REJECTED",
  PROCESSING: "PROCESSING",
};
function An(e, t, n, r) {
  if (!fi.getValue() || (!n && !r)) return t;
  const o = Zl.getValue();
  return e === 1 ? (r ? r(t, o) : t) : n ? n(t, o) : t;
}
const ir = { Cont: "ByCont", Base: "ByValue", Coin: "ByCoin" },
  _t = {
    toValueUnit(e) {
      return _t._isV2(e) || e.contractSide > 0
        ? e.settleCurrency
        : e.contractUnderlyingAssets;
    },
    toValueQuantity(e, t, n) {
      return _t._isV2(e)
        ? Ts(n)
          ? "-"
          : $.floor(it(t).mul(n), 8)
        : e.contractSide > 0
        ? Ts(n)
          ? "-"
          : $.floor(it(t).mul(e.contractSize).mul(n), 2)
        : $.floor(it(t).mul(e.contractSize), 2);
    },
    toValue(e, t, n) {
      return _t._display(_t.toValueQuantity(e, t, n), _t.toValueUnit(e));
    },
    toCoinUnit(e) {
      return _t._isV2(e) || e.contractSide > 0
        ? e.contractUnderlyingAssets
        : e.settleCurrency;
    },
    toCoinQuantity(e, t, n) {
      return _t._isV2(e)
        ? $.floor(t, 8)
        : e.contractSide > 0
        ? $.floor(it(t).mul(e.contractSize), 8)
        : Ts(n) || Number(n) === 0
        ? "-"
        : $.floor(it(t).mul(e.contractSize).div(n), 8);
    },
    toCoin(e, t, n) {
      return _t._display(_t.toCoinQuantity(e, t, n), _t.toCoinUnit(e));
    },
    toContUnit(e) {
      return _t._isV2(e) ? "" : "Cont";
    },
    toContQuantity(e, t) {
      return _t._isV2(e) ? "-" : t;
    },
    toCont(e, t) {
      return _t._display(_t.toContQuantity(e, t), _t.toContUnit(e));
    },
    _isV2(e) {
      return e.type === "PerpetualV2";
    },
    _display(e, t) {
      return (e = e === void 0 ? "-" : e), t ? `${e} ${t}` : `${e}`;
    },
  };
function Ts(e) {
  return isNaN(Number(e)) || e === "";
}
function Wt(e, t, n, r, s) {
  const o = e.type === "Perpetual" ? r : s,
    a = {
      [ir.Cont]: () => _t.toCont(e, t),
      [ir.Base]: () => _t.toValue(e, t, n),
      [ir.Coin]: () => _t.toCoin(e, t, n),
    };
  return a[o] && a[o]();
}
const Ph = "common_contract_cache_before_v2",
  Rh = "common_contract_cache_v2";
function Ah() {
  let e = localStorage.getItem(Ph);
  return (e = e && JSON.parse(e)), e ? e.qtyType : ir.Cont;
}
function Oh() {
  let e = localStorage.getItem(Rh);
  return (e = e && JSON.parse(e)), e ? e.qtyType : ir.Coin;
}
const qn = new ve(ir.Coin),
  Kn = new ve(ir.Coin);
Ge.subscribe(() => {
  qn.next(Ah()), Kn.next(Oh());
});
const ma = new Ce(),
  Nh = new Ce(),
  Zi = new ve({ total: 0, rows: [] });
$t([Zi, ur, Rn, qn, Kn]).pipe(ye(Lh));
Nh.pipe(
  ot(Ge),
  Re((e) => Mh(e))
).subscribe();
async function Mh({
  currency: e,
  offset: t,
  symbol: n,
  ordStatus: r,
  ordType: s,
  isPerpetualV2: o,
  utaState: a = Wn.beforeUpgrade,
}) {
  ma.next(!0);
  const l = An(
      a,
      {
        currency: e,
        symbol: n,
        offset: t,
        ordStatus: r,
        ordType: s,
        limit: 10,
        withCount: !0,
      },
      (d, m) => ({ ...d, end: m }),
      (d, m) => ({ ...d, start: m })
    ),
    { data: c, error: u } = o ? await rt.orderListV2(l) : await rt.orderList(l);
  ma.next(!1), c && Zi.next(c), u && oe.send("toast", "error", u);
}
function Lh([e, t, n, r, s]) {
  const { rows: o, total: a } = e;
  let i = Gi({
    rows: o,
    contracts: t,
    currencies: n,
    qtyTypeBeforeV2: r,
    qtyTypeV2: s,
  });
  return (i = i.filter(Boolean)), { rows: i, total: a };
}
function Gi({
  rows: e,
  contracts: t,
  currencies: n,
  qtyTypeBeforeV2: r,
  qtyTypeV2: s,
}) {
  return (
    (r = r || qn.getValue()),
    (s = s || Kn.getValue()),
    e.map((o) => {
      const a = t.find((k) => k.symbol === o.symbol);
      if (!a) return null;
      const {
          isPerpetualV2: i,
          pricePrecision: l,
          priceScale: c,
          settleCurrency: u,
          symbolV2: d,
          baseCurrency: m,
        } = a,
        g = n.find((k) => k.currency === u);
      if (!g) return null;
      const { qtyPrecision: v, valueScale: _ } = g,
        I = {
          createdTime: Le.formatUTCDateTime(o.createdAt),
          symbol: o.symbol,
          displaySymbol: `${d} ${u}-Margin`,
          status: cd[o.ordStatus] || "--",
          orderType: Uh(o),
          orderId: o.orderId,
          bizError: o.bizError,
          side: o.side,
          ordType: o.ordType,
          tradeType: o.tradeType,
          execPriceEp: o.execPriceEp,
        };
      if (i) {
        const k = Number(o.execPriceRp) !== 0 ? o.execPriceRp : o.priceRp;
        return (
          Object.assign(I, {
            orderQty: Wt(a, o.orderQtyRq, k, r, s),
            orderPrice: _a(o.priceRp, o.ordType, l, 0),
            orderValue: va(Number(o.cumValueRv), 0, v, u),
            triggerPrice: Bh(o),
            execQty: Wt(a, o.execQtyRq, o.priceRp, r, s),
            leavesQty: Wt(a, o.leavesQtyRq, o.priceRp, r, s),
            posSide: o.posSide,
            execPriceEp: Number(o.execPriceRp),
            priceEp: Number(o.priceRp),
            orderQtyRq: Number(o.orderQtyRq),
            displayQtyRq: Number(o.displayQtyRq),
            icebergQty: o.displayQtyRq + m,
          }),
          I
        );
      }
      const C = Fh(o, l, c);
      return (
        Object.assign(I, {
          orderQty: `${
            o.orderQty === 0
              ? "PositionSize"
              : (o.side === 1 ? "" : "-") + Wt(a, o.orderQty, C, r, s)
          }`,
          orderPrice: _a(o.priceEp, o.ordType, l, c),
          orderValue: va(o.cumValueEv, _, v, u),
          triggerPrice: Vh(o, l, c),
          execQty: Wt(a, o.execQty, C, r, s),
          leavesQty: Wt(a, o.leavesQty, C, r, s),
          priceEp: o.priceEp,
          orderQtyRq: Number(o.orderQtyRq),
          displayQtyRq: Number(o.displayQtyRq),
          icebergQty: o.displayQtyRq + "Cont",
        }),
        I
      );
    })
  );
}
function Fh(e, t, n) {
  const r = Number(e.execPriceEp) !== 0 ? e.execPriceEp : e.priceEp;
  return $.floor(r, t, n);
}
function _a(e, t, n, r) {
  return [1, 3, 5, 14].indexOf(t) > -1
    ? "Market"
    : e > 0
    ? $.floor(e, n, r)
    : "-";
}
function va(e, t, n, r) {
  return $.floor(e, n, t) + " " + r;
}
function Vh(e, t, n) {
  const { stopDirection: r, stopPxEp: s, trigger: o } = e;
  return r === 0 || s === 0
    ? "--"
    : $.floor(s, t, n) + (o === 1 ? "(MP)" : o === 2 ? "(IP)" : "(LP)");
}
function Bh(e) {
  const { stopDirection: t, stopPxRp: n, trigger: r } = e;
  return t === 0 || Number(n) === 0
    ? "--"
    : n + (r === 1 ? "(MP)" : r === 2 ? "(IP)" : "(LP)");
}
function Uh(e) {
  const { ordType: t, tradeType: n } = e;
  return t === 0 ? $i[n] : Ui[t] || "--";
}
const ba = new Ce(),
  $h = new Ce(),
  xi = new ve({ total: 0, rows: [] });
$t([xi, ur, Rn, qn, Kn]).pipe(ye(Yh));
$h.pipe(
  ot(Ge),
  Re((e) => Hh(e))
).subscribe();
async function Hh({
  currency: e,
  offset: t,
  symbol: n,
  execType: r,
  isPerpetualV2: s,
  utaState: o = Wn.beforeUpgrade,
}) {
  ba.next(!0);
  const i = An(
      o,
      {
        currency: e,
        symbol: n,
        offset: t,
        execType: r,
        limit: 10,
        withCount: !0,
      },
      (u, d) => ({ ...u, end: d }),
      (u, d) => ({ ...u, start: d })
    ),
    { data: l, error: c } = s ? await rt.tradeListV2(i) : await rt.tradeList(i);
  return (
    ba.next(!1),
    l && xi.next(l),
    c && oe.send("toast", "error", c),
    { total: 0, rows: [] }
  );
}
function Yh([e, t, n, r, s]) {
  const { rows: o, total: a } = e;
  let i = el({
    rows: o,
    contracts: t,
    currencies: n,
    qtyTypeBeforeV2: r,
    qtyTypeV2: s,
  });
  return (i = i.filter(Boolean)), { rows: i, total: a };
}
function el({
  rows: e,
  contracts: t,
  currencies: n,
  qtyTypeBeforeV2: r,
  qtyTypeV2: s,
}) {
  return (
    (r = r || qn.getValue()),
    (s = s || Kn.getValue()),
    e.map((o) => {
      const a = t.find((C) => C.symbol === o.symbol);
      if (!a) return null;
      const {
          isPerpetualV2: i,
          pricePrecision: l,
          priceScale: c,
          settleCurrency: u,
          symbolV2: d,
        } = a,
        m = n.find((C) => C.currency === u);
      if (!m) return null;
      const { valueScale: g, valuePrecision: v } = m,
        _ = {
          createdTime: Le.formatUTCDateTime(o.createdAt),
          symbol: o.symbol,
          displaySymbol: `${d} ${u}-Margin`,
          type: Qh(o),
          execType:
            o.tradeType === 1
              ? "Trade"
              : o.tradeType === 6
              ? "Liquidation"
              : "ADL",
          execId: o.execId,
          side: o.side,
          tradeType: o.tradeType,
        };
      if (i) {
        (o.priceEp = Number(o.priceRp)),
          (o.execPriceEp = Number(o.execPriceRp)),
          (o.execValueEv = Number(o.execValueRv)),
          (o.execFeeEv = Number(o.execFeeRv));
        const C = Number(o.execPriceRp) !== 0 ? o.execPriceRp : o.priceRp;
        return (
          Object.assign(_, {
            execQty: Wt(a, o.execQtyRq, C, r, s),
            execPrice: ya(o, l, 0),
            orderQty: Wt(a, o.orderQtyRq, C, r, s),
            orderPrice: Ca(o, l, 0),
            execValue: Ta(o, u, 0, v),
            feeRate: $.floor(o.feeRateRr, 4, -2) + "%",
            feePaid: Ea(o, u, 0, v),
            posSide: o.posSide,
            execPriceEp: o.execPriceEp,
            priceEp: o.priceEp,
          }),
          _
        );
      }
      const I = Wh(o, l, c);
      return (
        Object.assign(_, {
          execQty: (o.side === 1 ? "" : "-") + Wt(a, o.execQty, I, r, s),
          execPrice: ya(o, l, c),
          orderQty: (o.side === 1 ? "" : "-") + Wt(a, o.orderQty, I, r, s),
          orderPrice: Ca(o, l, c),
          execValue: Ta(o, u, g, v),
          feeRate: $.floor(o.feeRateEr, 4, 6) + "%",
          feePaid: Ea(o, u, g, v),
          execPriceEp: o.execPriceEp,
          priceEp: o.priceEp,
        }),
        _
      );
    })
  );
}
function Qh(e) {
  const { ordType: t, tradeType: n } = e;
  return t === 0 ? $i[n] : Ui[t] || "--";
}
function Wh(e, t, n) {
  const { execPriceEp: r, priceEp: s } = e,
    o = Number(r) !== 0 ? r : s;
  return $.floor(o, t, n);
}
function ya(e, t, n) {
  const { execPriceEp: r, priceEp: s, tradeType: o } = e;
  return $.floor(o === 6 ? s : r, t, n);
}
function Ta(e, t, n, r) {
  return $.floor(e.execValueEv, r, n) + " " + t;
}
function Ca(e, t, n) {
  const { ordType: r, priceEp: s } = e;
  return [1, 3, 5, 14].indexOf(r) > -1
    ? "Market"
    : s === 0
    ? "--"
    : $.floor(s, t, n);
}
function Ea(e, t, n, r) {
  return e.ptFeeRv && gi(e.ptFeeRv, 0)
    ? $.floor(e.ptFeeRv, r, 0) + " PT"
    : $.floor(e.execFeeEv, r, n) + " " + t;
}
const rn = new Ce(),
  qh = new Ce(),
  Kh = new ve({ total: 0, rows: [] }),
  jh = new Ce(),
  zh = new ve({ total: 0, rows: [] }),
  Jh = new Ce(),
  Xh = new ve({ total: 0, rows: [] }),
  Zh = new Ce(),
  tl = new ve({ total: 0, rows: [] });
tl.pipe(ye(np));
const Gh = new Ce(),
  xh = new ve({ total: 0, rows: [] }),
  ep = new Ce(),
  tp = new ve({ total: 0, rows: [] });
function np(e) {
  const { rows: t, total: n } = e;
  return { rows: nl(t), total: n };
}
function nl(e) {
  return e.map((t) => ({
    createdTime: Le.formatDateTime(t.createTime),
    account: t.currency,
    type: t.type,
    typeCode: t.type,
    bonusExtra: t.bonusExtra,
    changeAmount: t.amountRv,
    balance: t.balanceRv,
  }));
}
qh.pipe(
  ot(Ge),
  Re((e) => rp(e))
).subscribe((e) => Kh.next(e));
jh.pipe(
  ot(Ge),
  Re((e) => sp(e))
).subscribe((e) => zh.next(e));
Jh.pipe(
  ot(Ge),
  Re((e) => op(e))
).subscribe((e) => Xh.next(e));
Zh.pipe(
  ot(Ge),
  Re((e) => ap(e))
).subscribe();
Gh.pipe(
  ot(Ge),
  Re(() => up())
).subscribe((e) => xh.next(e));
ep.pipe(
  ot(Ge),
  Re((e) => fp(e))
).subscribe((e) => tp.next(e));
async function rp({ coin: e, bizCode: t, offset: n }) {
  rn.next(!0);
  const r = {
      currency: e,
      offset: n,
      limit: 10,
      start: "",
      end: "",
      bizCode: t,
      side: "",
      withCount: !0,
    },
    { data: s, error: o } = await rt.getWalletsDetail(r);
  return (
    rn.next(!1),
    s || (o && oe.send("toast", "error", o), { total: 0, rows: [] })
  );
}
async function sp({ currency: e, bizCode: t, current: n, limit: r }) {
  rn.next(!0);
  const s = { fiatCurrency: e, pageNum: n, pageSize: r || 10, bizType: t },
    { data: o, error: a } = await Yi.fiatBalanceChangeQuery(s);
  return (
    rn.next(!1),
    o || (a && oe.send("toast", "error", a), { total: 0, rows: [] })
  );
}
async function op({
  coin: e,
  bizCode: t,
  limit: n,
  current: r,
  utaState: s = Wn.beforeUpgrade,
  targetFund: o = 0,
}) {
  rn.next(!0);
  const a = {
      currency: e,
      pageNum: r,
      pageSize: n,
      utaState: s,
      targetFund: o,
      bizCode: t,
      start: "",
      end: "",
    },
    { data: i, error: l } = await un.getFundsHistory(a);
  return (
    rn.next(!1),
    i || (l && oe.send("toast", "error", l), { total: 0, rows: [] })
  );
}
async function ap({ currency: e, offset: t, type: n, utaState: r = 0 }) {
  rn.next(!0);
  const s = {
      currency: e,
      offset: t,
      type: n,
      limit: 10,
      start: 1,
      end: Date.now() + 864e5,
      bizCode: "",
      side: "",
      withCount: !0,
    },
    o = An(
      r,
      s,
      (l, c) => ({ ...l, end: c }),
      (l, c) => ({ ...l, start: c })
    ),
    { data: a, error: i } = await rt.tradeAccountDetailV2(o);
  rn.next(!1), a && tl.next(a), i && oe.send("toast", "error", i);
}
const ip = new Ce(),
  lp = new ve({ total: 0, rows: [] });
ip.pipe(
  ot(Ge),
  Re((e) => cp(e))
).subscribe((e) => lp.next(e));
async function cp({
  coin: e,
  eventTypes: t,
  offset: n,
  utaState: r = Wn.beforeUpgrade,
}) {
  rn.next(!0);
  const o = An(
      r,
      { currency: e, offset: n, limit: 10, eventTypes: t, withCount: !0 },
      (l, c) => ({ ...l, end: c }),
      (l, c) => ({ ...l, start: c })
    ),
    { data: a, error: i } = await Ci.getAccountFlow(o);
  return (
    rn.next(!1),
    a || (i && oe.send("toast", "error", i), { total: 0, rows: [] })
  );
}
async function up() {
  const e = { itemKey: "banner", location: 4, lang: Pl(mi) },
    { data: t, error: n } = await $s.getOperationBannersLogin(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function fp({
  offset: e,
  investCurrency: t,
  tradeType: n,
  utaState: r = Wn.beforeUpgrade,
}) {
  rn.next(!0);
  const o = An(
      r,
      { offset: e, limit: 10, tradeType: n, investCurrency: t, withCount: !0 },
      (l, c) => ({ ...l, end: c }),
      (l, c) => ({ ...l, start: c })
    ),
    { data: a, error: i } = await Bi.getLaunchPoolFunds(o);
  return (
    rn.next(!1),
    a || (i && oe.send("toast", "error", i), { total: 0, rows: [] })
  );
}
const In = new Ce(),
  dp = new Ce(),
  rl = new ve({ total: 0, rows: [] });
$t([rl, Us, Rn, qn, Kn]).pipe(ye(pp));
dp.pipe(
  ot(Ge),
  Re((e) => hp(e))
).subscribe();
async function hp({ currency: e, offset: t, symbol: n, isPerpetualV2: r }) {
  In.next(!0);
  const s = { currency: e, offset: t, symbol: n, limit: 10, withCount: !0 },
    o = r ? rt.closedPositionListV2 : rt.closedPositionList,
    { data: a, error: i } = await o(s);
  In.next(!1), a && rl.next(a), i && oe.send("toast", "error", i);
}
function sl([e, t, n], r) {
  const s = qn.getValue(),
    o = Kn.getValue(),
    { rows: a, total: i } = e;
  return {
    rows: a
      .map((c) => {
        const u = t.get(c.symbol);
        if (!u)
          return {
            createdTime: "-",
            symbol: c.symbol + "--Margin",
            openTime: "-",
            closeTime: "-",
            openPrice: "-",
            closePrice: "-",
            totalSize: "-",
            closedPnl: "-",
            tradingFeePaid: "-",
            tradingPtFeePaid: "-",
            fundingFeePaid: "-",
            realisedPnl: "-",
            roi: "-",
          };
        const {
            isPerpetualV2: d,
            pricePrecision: m,
            priceScale: g,
            settleCurrency: v,
            symbolV2: _,
          } = u,
          I = n.find((ie) => ie.currency === v);
        if (!I)
          return {
            createdTime: Le.formatDateTime(c.createdAt),
            symbol: `${_} ${v}-Margin`,
            openTime: "-",
            closeTime: "-",
            openPrice: "-",
            closePrice: "-",
            totalSize: "-",
            closedPnl: "-",
            tradingFeePaid: "-",
            tradingPtFeePaid: "-",
            fundingFeePaid: "-",
            realisedPnl: "-",
            roi: "-",
          };
        const { valueScale: C, valuePrecision: k } = I,
          { openedTimeNs: D, updatedTimeNs: E } = c,
          b = {
            createdTime: Le.formatDateTime(c.createdAt),
            symbol: `${_} ${v}-Margin`,
            openTime: Le.formatUTCDateTime(D),
            closeTime: Le.formatUTCDateTime(E),
          };
        if (d || r) {
          const {
              openPrice: ie,
              closePrice: Z,
              side: me,
              closedSizeRq: Ae,
              closedPnlRv: z,
              exchangeFeeRv: te,
              cumPtFeeRv: ne,
              fundingFeeRv: Te,
              realizedPnlRv: be,
              roi: Pe,
              termPtFeeRv: De,
            } = c,
            qe = Number(Z) !== 0 ? Z : ie;
          return Object.assign(b, {
            openPrice: ie || "-",
            closePrice: Z || "-",
            totalSize: (me === 1 ? "" : "-") + Wt(u, Ae, qe, s, o),
            closedPnl: z + " " + v,
            tradingFeePaid: te + " " + v,
            tradingPtFeePaid: De + " PT",
            fundingFeePaid: Te + " " + v,
            realisedPnl: be + " " + v,
            roi: Z && Pe ? $.floor(Pe, 2, -2) + " %" : "-%",
          });
        }
        const {
            openPriceEp: P,
            closePriceEp: R,
            side: N,
            closedSize: S,
            closedPnlEv: H,
            exchangeFeeEv: F,
            fundingFeeEv: G,
            realizedPnlEv: re,
            roiEr: x,
          } = c,
          ae = P ? $.floor(P, m, g) : "-",
          V = R ? $.floor(R, m, g) : "-",
          ee = Number(R) !== 0 ? V : ae;
        return Object.assign(b, {
          openPrice: ae,
          closePrice: V,
          totalSize: (N === 1 ? "" : "-") + Wt(u, S, ee, s, o),
          closedPnl: $.floor(H, k, C) + " " + v,
          tradingFeePaid: $.floor(F, k, C) + " " + v,
          tradingPtFeePaid: "-",
          fundingFeePaid: $.floor(G, k, C) + " " + v,
          realisedPnl: $.floor(re, k, C) + " " + v,
          roi: R ? $.floor(it(x).div(1e6), 2) + "%" : "-%",
        });
      })
      .filter(Boolean),
    total: i,
  };
}
function pp([e, t, n]) {
  return sl([e, t, n]);
}
function gp([e, t, n]) {
  return sl([{ rows: e }, t, n], !0);
}
const mp = new Ce(),
  ol = new ve({ total: 0, rows: [] });
$t([ol, Us, Rn]).pipe(ye(vp));
mp.pipe(
  ot(Ge),
  Re((e) => _p(e))
).subscribe();
async function _p({ currency: e, offset: t, symbol: n, isPerpetualV2: r }) {
  In.next(!0);
  const s = { currency: e, offset: t, symbol: n, limit: 10, withCount: !0 },
    { data: o, error: a } = r
      ? await rt.exchangeFeeListV2(s)
      : await rt.exchangeFeeList(s);
  In.next(!1), o && ol.next(o), a && oe.send("toast", "error", a);
}
function vp([e, t, n]) {
  const { rows: r, total: s } = e;
  return {
    rows: r.map((a) => {
      const i = t.get(a.symbol);
      if (!i)
        return {
          createdTime: "-",
          symbol: a.symbol + "--Margin",
          takerVolume: "-",
          makerVolume: "-",
          takeFeeRate: "-",
          makerFeeRate: "-",
          tradingFeePaid: "-",
          tradingPtFeePaid: "-",
        };
      const { isPerpetualV2: l, settleCurrency: c, symbolV2: u } = i,
        d = n.find((E) => E.currency === c);
      if (!d)
        return {
          createdTime: "-",
          symbol: a.symbol + "--Margin",
          takerVolume: "-",
          makerVolume: "-",
          takeFeeRate: "-",
          makerFeeRate: "-",
          tradingFeePaid: "-",
          tradingPtFeePaid: "-",
        };
      const { valueScale: m, valuePrecision: g } = d,
        v = {
          createdTime: Le.formatDateTime(a.createdAt),
          symbol: `${u} ${c}-Margin`,
        };
      if (l) {
        const {
            takerValueRv: E,
            makerValueRv: b,
            takerRateRr: P,
            makerRateRr: R,
            exchangeFeeValueRv: N,
            ptMakerFeeRv: S,
            ptTakerFeeRv: H,
          } = a,
          F = Gl(S || 0, H || 0);
        return (
          Object.assign(v, {
            takerVolume: (Number(E) ? E : "-") + " " + c,
            makerVolume: (Number(b) ? b : "-") + " " + c,
            takeFeeRate: (Number(P) ? $.floor(P, 4, -2) : "-") + "%",
            makerFeeRate: (Number(R) ? $.floor(R, 4, -2) : "-") + "%",
            tradingFeePaid: N + " " + c,
            tradingPtFeePaid: (gi(F, 0) ? F : "-") + " PT",
          }),
          v
        );
      }
      const {
        takerValueEv: _,
        makerValueEv: I,
        takerRateEr: C,
        makerRateEr: k,
        exchangeFeeValueEv: D,
      } = a;
      return (
        Object.assign(v, {
          takerVolume: (_ ? $.floor(_, g, m) : "-") + " " + c,
          makerVolume: (I ? $.floor(I, g, m) : "-") + " " + c,
          takeFeeRate: (C ? $.floor(C, 4, 6) : "-") + "%",
          makerFeeRate: (k ? $.floor(k, 4, 6) : "-") + "%",
          tradingFeePaid: $.floor(D, g, m) + " " + c,
          tradingPtFeePaid: "-",
        }),
        v
      );
    }),
    total: s,
  };
}
const bp = new Ce();
bp.pipe(
  ot(Ge),
  Re((e) => yp(e))
).subscribe();
const al = new ve({ total: 0, rows: [] });
$t([al, Us, Rn, qn, Kn]).pipe(ye(Ip));
async function yp({ currency: e, offset: t, symbol: n, isPerpetualV2: r }) {
  In.next(!0);
  const s = { currency: e, symbol: n, offset: t, limit: 10, withCount: !0 },
    { data: o, error: a } = r
      ? await rt.fundingFeeListV2(s)
      : await rt.fundingFeeList(s);
  In.next(!1), o && al.next(o), a && oe.send("toast", "error", a);
}
const Tp = new Ce(),
  Cp = new ve([]),
  Ep = new ve([]);
Tp.pipe(
  ot(Ge),
  Re((e) => wp(e))
).subscribe((e) => Ep.next(e));
async function wp({ days: e, symbol: t, currency: n, isPerpetualV2: r }) {
  In.next(!0);
  const s = { days: e, symbol: t, currency: n };
  if (t) {
    const l = r ? rt.pnlPositionV2 : rt.pnlPosition,
      { data: c, error: u } = await l(s);
    return (
      In.next(!1),
      c ? (Cp.next(c), c.rows) : (u && oe.send("toast", "error", u), [])
    );
  }
  const o = r ? rt.pnlAccountV2 : rt.pnlAccount,
    { data: a, error: i } = await o(s);
  return In.next(!1), a ? a.rows : (i && oe.send("toast", "error", i), []);
}
function Ip([e, t, n, r, s]) {
  const { rows: o, total: a } = e;
  return {
    rows: o.map((l) => {
      const c = t.get(l.symbol);
      if (!c)
        return {
          createdTime: "-",
          symbol: l.symbol + "--Margin",
          execQty: "-",
          markPrice: "-",
          markValue: "-",
          fundingRate: "-",
          execFundingRate: "-",
          fundingFeePaid: "-",
        };
      const {
          isPerpetualV2: u,
          pricePrecision: d,
          priceScale: m,
          settleCurrency: g,
          symbolV2: v,
        } = c,
        _ = n.find((b) => b.currency === g);
      if (!_)
        return {
          createdTime: "-",
          symbol: l.symbol + "--Margin",
          execQty: "-",
          markPrice: "-",
          markValue: "-",
          fundingRate: "-",
          execFundingRate: "-",
          fundingFeePaid: "-",
        };
      const { valueScale: I, valuePrecision: C } = _,
        k = {
          createdTime: Le.formatDateTime(l.createdAt),
          symbol: `${v} ${g}-Margin`,
        };
      if (u)
        return (
          Object.assign(k, {
            execQty:
              (l.side === 1 ? "" : "-") +
              Wt(c, l.execQtyRq, l.execPriceRp, r, s),
            markPrice: l.execPriceRp,
            markValue: l.execValueRv + " " + g,
            fundingRate: $.floor(l.fundingRateRr, 4, -2) + "%",
            execFundingRate: $.floor(l.feeRateRr, 4, -2) + "%",
            fundingFeePaid: l.execFeeRv + " " + g,
          }),
          k
        );
      const { execFeeEv: D } = l,
        E = $.floor(l.execPriceEp, d, m);
      return (
        Object.assign(k, {
          execQty: (l.side === 1 ? "" : "-") + Wt(c, l.execQty, E, r, s),
          markPrice: E,
          markValue: $.floor(l.execValueEv, C, I) + " " + g,
          fundingRate: $.floor(l.fundingRateEr, 4, 6) + "%",
          execFundingRate: $.floor(l.feeRateEr, 4, 6) + "%",
          fundingFeePaid:
            (D > 0
              ? $.floor(Math.abs(D), C, I)
              : "-" + $.floor(Math.abs(D), C, I)) +
            " " +
            g,
        }),
        k
      );
    }),
    total: a,
  };
}
const Dp = {
    0: "ManualRepay",
    2: "MarginRepay",
    3: "UtaSpotRepay",
    4: "UtaMarginRepay",
  },
  wa = { 0: "ManualRepay", 1: "AutoRepay", 2: "LiquidationRepay" },
  Ia = new Ce(),
  kp = new Ce(),
  il = new ve({ total: 0, rows: [] });
$t([il, _i]).pipe(ye(Rp));
const Sp = 10;
kp.pipe(
  ot(Ge),
  Re((e) => Pp(e))
).subscribe((e) => il.next(e));
async function Pp({ current: e, currency: t, business: n }) {
  Ia.next(!0);
  const r = { business: n, currency: t, pageNum: e, pageSize: Sp },
    { data: s, error: o } = await un.getRepayHistory(r);
  return (
    Ia.next(!1),
    s || (o && oe.send("toast", "error", o), { total: 0, rows: [] })
  );
}
function Rp([e, t]) {
  const { rows: n, total: r } = e;
  return {
    rows: n.map((o) => {
      const { valuePrecision: a = 8 } = t[o.currency] || {},
        i = it(o.principalAmountRv).plus(o.interestAmountRv);
      return {
        repayCurrency: o.currency,
        repayTime: Le.formatDateTime(o.repayTime),
        principalAmount:
          $.trimEnd0(o.principalAmountRv) === "0"
            ? 0
            : $.floor(o.principalAmountRv, a, 0),
        interestAmount:
          $.trimEnd0(o.interestAmountRv) === "0"
            ? 0
            : $.floor(o.interestAmountRv, a, 0),
        totalRepayAmount:
          $.trimEnd0(i.toString()) === "0" ? 0 : $.floor(i, a, 0),
        liquidationFee:
          $.trimEnd0(o.liqFeeRv) === "0" ? 0 : $.floor(o.liqFeeRv, a, 0),
        type: o.type,
        status: o.status,
        business: o.business,
      };
    }),
    total: r,
  };
}
const Ap = {
    0: "ManualBorrow",
    2: "MarginBorrow",
    3: "UtaSpotBorrow",
    4: "UtaMarginBorrow",
  },
  Da = { 0: "ManualBorrow", 1: "AutoBorrow" },
  ka = new Ce(),
  Op = new Ce(),
  ll = new ve({ total: 0, rows: [] });
$t([ll, _i]).pipe(
  lt(([, e]) => Object.keys(e).length > 0),
  ye(Lp),
  dr({ total: 0, rows: [] })
);
const Np = 10;
Op.pipe(
  ot(Ge),
  Re((e) => Mp(e))
).subscribe((e) => ll.next(e));
async function Mp({ current: e, currency: t, business: n }) {
  ka.next(!0);
  const r = { business: n, currency: t, pageNum: e, pageSize: Np },
    { data: s, error: o } = await un.getBorrowHistory(r);
  return (
    ka.next(!1),
    s || (o && oe.send("toast", "error", o), { total: 0, rows: [] })
  );
}
function Lp([e, t]) {
  const { rows: n, total: r = 0 } = e;
  return {
    rows: n.map((o) => {
      const a = t[o.currency],
        { valuePrecision: i } = a;
      return {
        borrowCurrency: o.currency,
        borrowTime: Le.formatDateTime(o.borrowTime),
        amount: $.floor(o.amountRv, i, 0),
        type: o.type,
        status: o.status,
        business: o.business,
      };
    }),
    total: r,
  };
}
const Cs = {
    Title: "d5102c",
    All: "dd351c",
    Symbol: "ca7f5d",
    Coin: "659e61",
    Date: "b9936e",
    PrincipalAmount: "fb64c6",
    InterestAmount: "c8ba2b",
    TotalRepayAmount: "23cada",
    AutoRepay: "8f4f6f",
    ManualRepay: "f8616e",
    LiquidationRepay: "002ec3",
    LiquidationFee: "bf48fa",
    Type: "f0416a",
    Status: "297024",
    Success: "d6db98",
    Fail: "e350ef",
    MarginTradeRepayHistoryFileName: "c166a6",
    Export: "d27e4a",
    ExportDesc: "6ea313",
    TradeType: "f0a515",
    MarginRepay: "433b4e",
    UtaSpotRepay: "7aea3d",
    UtaMarginRepay: "4a2117",
  },
  Es = {
    Title: "7a34b4",
    All: "4155e8",
    Symbol: "fc336b",
    Coin: "04e86a",
    Date: "29319c",
    Amount: "791cc7",
    Type: "6dd778",
    Status: "d78634",
    AutoBorrow: "65608e",
    ManualBorrow: "700d0b",
    Success: "35e9b4",
    Fail: "b36f56",
    MarginTradeBorrowHistoryFileName: "923b88",
    Export: "94a6c8",
    ExportDesc: "d93cb9",
    TradeType: "65c4fa",
    MarginBorrow: "14de4d",
    UtaSpotBorrow: "197d84",
    UtaMarginBorrow: "eff914",
  };
new Ce();
async function Fp(e) {
  return await js(e, 0, 0);
}
async function Vp(e) {
  return await js(e, 1, 0);
}
async function Bp(e) {
  return await js(e, 1, 1);
}
async function cl(e) {
  const {
      currency: t,
      end: n,
      start: r,
      limit: s,
      utaState: o,
      business: a,
    } = e,
    i = {
      currency: t,
      pageNum: 1,
      pageSize: s,
      end: n,
      start: r,
      utaState: o,
      business: a,
    },
    { data: l, error: c } = await un.getTradeHistory(i);
  return l || (c && oe.send("toast", "error", c), { total: 0, rows: [] });
}
function ws(e, { currencies: t, LG: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
            transactTimeNs: s,
            currency: o,
            bizCode: a,
            amountRv: i,
            balanceRv: l,
          } = r,
          c = Le.formatDateTime(s * 1e-6),
          u = qt(t, o),
          d = u ? u.valuePrecision : 8,
          m = (Number(i) > 0 ? "+" : "") + $.floor(i, d) + " " + o,
          g = $.floor(l, d) + " " + o;
        return [c, o, ud(n)[a], m, g];
      });
}
function Sa(e, { spots: t, currencies: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
            side: s,
            transactTimeNs: o,
            ordType: a,
            execId: i,
            qtyType: l,
            feeCurrency: c,
            execBaseQtyRq: u,
            execQuoteQtyRq: d,
            execPriceRp: m,
            baseQtyRq: g,
            quoteQtyRq: v,
            priceRp: _,
            feeRateRr: I,
            execFeeRv: C,
          } = r,
          k = Le.formatUTCDateTime(o * 1e-6),
          D = ls(t, r);
        if (!D)
          return [
            k,
            "--",
            s,
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            a,
            i.substring(0, 8),
          ];
        const {
            displaySymbol: E,
            pricePrecision: b,
            displayBaseCurrency: P,
            baseQtyPrecision: R,
            quoteCurrency: N,
            quoteQtyPrecision: S,
          } = D,
          H = s === "Buy" ? $.floor(u, R) + " " + P : $.floor(d, S) + " " + N,
          F = $.floor(m, b),
          G = s === "Buy" ? $.floor(d, S) + " " + N : $.floor(u, R) + " " + P,
          re =
            l === "ByBase" ? $.floor(g, R) + " " + P : $.floor(v, S) + " " + N,
          x = a === "Market" ? "Market" : $.floor(_, b),
          ae = qt(n, c);
        if (!ae)
          return [k, E, s, H, F, G, re, x, "--", "--", a, i.substring(0, 8)];
        const { valuePrecision: V, displayCurrency: ee } = ae,
          ie = $.floor(I, 6, -2) + "%",
          Z = $.floor(C, V) + " " + ee;
        return [k, E, s, H, F, G, re, x, ie, Z, a, i.substring(0, 8)];
      });
}
async function js(e, t = 0, n = 0) {
  const { currency: r, end: s, start: o, limit: a } = e,
    i = {
      currency: r,
      pageNum: 1,
      pageSize: a,
      end: s,
      start: o,
      utaState: t,
      targetFund: n,
    },
    { data: l, error: c } = await un.getFundsHistory(i);
  return l || (c && oe.send("toast", "error", c), { total: 0, rows: [] });
}
function ls(e, t) {
  return e.find((n) => n.symbol === t.symbol);
}
function qt(e, t) {
  return e.find((n) => n.currency === t);
}
function Pa(e) {
  return function (t, { currencies: n, LG: r }) {
    return n.length < 1
      ? null
      : t.map((s) => {
          const o = qt(n, s.currency),
            a = o ? o.valuePrecision : 8,
            i = $.floor(s.amountRv, a, 0);
          return e
            ? [
                s.currency,
                r(Es[Ap[s.business + ""]]),
                Le.formatDateTime(s.borrowTime),
                i,
                r(Es[Da[s.type + ""]]),
                s.status,
              ]
            : [
                s.currency,
                Le.formatDateTime(s.borrowTime),
                i,
                r(Es[Da[s.type + ""]]),
                s.status,
              ];
        });
  };
}
function Ra(e) {
  return function (t, { currencies: n, LG: r }) {
    return n.length < 1
      ? null
      : t.map((s) => {
          const o = qt(n, s.currency),
            a = o ? o.valuePrecision : 8,
            i = Number(s.principalAmountRv) + Number(s.interestAmountRv),
            l = $.floor(s.principalAmountRv, a),
            c = $.floor(s.interestAmountRv, a),
            u = $.floor(i, a),
            d = Le.formatDateTime(s.repayTime);
          return e
            ? [
                s.currency,
                r(Cs[Dp[s.business + ""]]),
                d,
                l,
                c,
                u,
                r(Cs[wa[s.type + ""]]),
                s.status,
              ]
            : [s.currency, d, l, c, u, r(Cs[wa[s.type + ""]]), s.status];
        });
  };
}
async function Aa(e) {
  const { currency: t, end: n, start: r, limit: s } = e,
    o = { currency: t, pageNum: 1, pageSize: s, end: n, start: r },
    { data: a, error: i } = await un.getRepayHistory(o);
  return a || (i && oe.send("toast", "error", i), { total: 0, rows: [] });
}
async function ul(e) {
  const {
      currency: t,
      end: n,
      start: r,
      limit: s,
      business: o,
      utaState: a,
    } = e,
    i = {
      currency: t,
      pageNum: 1,
      pageSize: s,
      end: n,
      start: r,
      utaState: a,
      business: o,
    },
    { data: l, error: c } = await un.getOrderHistory(i);
  return l || (c && oe.send("toast", "error", c), { total: 0, rows: [] });
}
const Is = {
    Title: "562b90",
    ConvertHistory: "7f7dff",
    PaymentCurrency: "0a0e12",
    ReceiveCurrency: "d6f88a",
    Status: "429d30",
    Complated: "d8810f",
    Processing: "6b8105",
    Failed: "77c0fd",
    All: "dae1c2",
    Time: "22be22",
    PaymentAmount: "356286",
    ConversionRate: "402c39",
    ReceiveAmount: "edb6f5",
    OrderID: "348295",
    GenerateAllConversionStatements: "d767ed",
    ExportConversionHistory: "d26ad0",
    YourErrorCode: "9ed303",
    WhenExecutingTheTrade: "ba78bf",
    ConvertRecordBeforeUpgrade: "d5781a",
  },
  Up = 500,
  $p = 2e3,
  Hp = ["ContractTrade", "ContractOrder"],
  Yp = [1004, 1014, 1017],
  zs = new Ce(),
  Oa = zs.pipe(Sc("context")),
  Qp = {
    SpotOrder: Ma,
    SpotOrderUpgraded: Ma,
    SpotTrade: Na,
    SpotTradeUpgraded: Na,
    ContractOrder: tg,
    ContractTrade: eg,
    WalletDetails: ng,
    Deposit: rg,
    Withdrawal: sg,
    InvestmentAccount: og,
    ClosedPNL: ag,
    ConversionHistory: ig,
    ContractTradeAccountsHistory: La(0),
    ContractTradeAccountsUpgradedHistory: La(1),
    LaunchPoolHistory: lg,
    MarginTradeFundsDetails: Fp,
    MarginTradeInterestHistory: cg,
    MarginTradeBorrowHistory: Fa,
    MarginTradeBorrowHistoryUpgraded: Fa,
    MarginTradeRepayHistory: Aa,
    MarginTradeRepayHistoryUpgraded: Aa,
    MarginOrderHistory: ul,
    MarginTradeHistory: cl,
    TradingAccountHistory: Vp,
    FundAccountHistory: Bp,
  },
  Wp = {
    SpotOrder: fg,
    SpotOrderUpgraded: Ba(!0),
    SpotTrade: ug,
    SpotTradeUpgraded: Sa,
    ContractOrder: dg,
    ContractTrade: hg,
    WalletDetails: pg,
    Deposit: gg,
    Withdrawal: mg,
    InvestmentAccount: _g,
    ClosedPNL: vg,
    ConversionHistory: bg,
    ContractTradeAccountsHistory: Va,
    ContractTradeAccountsUpgradedHistory: Va,
    LaunchPoolHistory: Cg,
    MarginTradeFundsDetails: ws,
    MarginTradeInterestHistory: Eg,
    MarginTradeBorrowHistory: Pa(),
    MarginTradeBorrowHistoryUpgraded: Pa(!0),
    MarginTradeRepayHistory: Ra(),
    MarginTradeRepayHistoryUpgraded: Ra(!0),
    MarginOrderHistory: Ba(),
    MarginTradeHistory: Sa,
    TradingAccountHistory: ws,
    FundAccountHistory: ws,
  };
zs.pipe(
  ye(
    ({
      rangeType: e,
      formattedStartTime: t,
      formattedEndTime: n,
      context: r,
    }) => {
      const {
        isPerpetualV2: s,
        type: o,
        currency: a,
        symbol: i,
        customizeQuery: l = {},
      } = r;
      return {
        query: {
          ...l,
          offset: 0,
          limit: Hp.includes(o) ? $p : Up,
          ...qp(e, t, n),
          currency: a,
          symbol: i,
        },
        rows: [],
        total: 1 / 0,
        type: o,
        isPerpetualV2: s,
      };
    }
  ),
  kc(({ query: e, rows: t, total: n, type: r, isPerpetualV2: s }) =>
    t.length >= n
      ? xl
      : Ti(Qp[r](e, s)).pipe(
          ye((o) => ({
            query: { ...e, offset: t.length + o.rows.length },
            rows: [...t, ...o.rows],
            total: o.total,
            type: r,
          }))
        )
  ),
  lt((e) => e.rows.length >= e.total),
  Zr(ec, ur, Rn, Oa),
  ye(([e, t, n, r, s]) =>
    Wp[s.type](e.rows, {
      spots: t,
      contracts: n,
      currencies: r,
      lang: s.lang,
      LG: s.LG,
    })
  ),
  lt(Boolean),
  Zr(Oa),
  Re(Rg)
).subscribe(() => {
  oe.send("download", "disappear");
});
function qp(e, t, n) {
  return Kp[e](t, n);
}
const Kp = {
  hours: jp,
  yesterday: zp,
  weeks: Jp,
  monthDate: Xp,
  pastMonth: Zp,
  past3Month: Gp,
  Custom: xp,
};
function jp() {
  const e = new Date();
  return {
    start: Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate() - 1,
      e.getUTCHours(),
      e.getMinutes(),
      e.getSeconds()
    ),
    end: Date.now(),
    dateType: 1,
  };
}
function zp() {
  const e = new Date(),
    t = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() - 1),
    n = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
  return { start: t, end: n, dateType: 2 };
}
function Jp() {
  const e = new Date();
  return {
    start: Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate() - 14,
      e.getUTCHours(),
      e.getMinutes(),
      e.getSeconds()
    ),
    end: Date.now(),
    dateType: 3,
  };
}
function Xp() {
  const e = new Date();
  return {
    start: Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1),
    end: Date.now(),
    dateType: 4,
  };
}
function Zp() {
  const e = new Date();
  return {
    start: Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth() - 1,
      e.getUTCDate(),
      e.getUTCHours(),
      e.getMinutes(),
      e.getSeconds()
    ),
    end: Date.now(),
    dateType: 5,
  };
}
function Gp() {
  const e = new Date();
  return {
    start: Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth() - 3,
      e.getUTCDate(),
      e.getUTCHours(),
      e.getMinutes(),
      e.getSeconds()
    ),
    end: Date.now(),
    dateType: 6,
  };
}
function xp(e, t) {
  const [n, r, s] = e.split("-").map((u) => Number(u)),
    o = Date.UTC(n, r - 1, s),
    [a, i, l] = t.split("-").map((u) => Number(u)),
    c = Date.UTC(a, i - 1, l + 1);
  return { start: o, end: c, dateType: 7 };
}
async function Na({ utaState: e, business: t, ...n }) {
  if (e === Wn.afterUpgrade)
    return await cl({ utaState: e, business: t, ...n });
  const { data: r, error: s } = await kn.getSpotTrades(n);
  return r || (s && oe.send("toast", "error", s), { total: 0, rows: [] });
}
async function Ma({ utaState: e, business: t, ...n }) {
  if (e === Wn.afterUpgrade)
    return await ul({ utaState: e, business: t, ...n });
  const { data: r, error: s } = await kn.getSpotOrder(n);
  return r || (s && oe.send("toast", "error", s), { total: 0, rows: [] });
}
async function eg({ utaState: e, ...t }, n) {
  const r = An(
      e,
      t,
      (a, i) => ({ ...a, start: Hn(i, a.start), end: Hn(i, a.end) }),
      (a, i) => ({ ...a, start: $n(i, a.start), end: $n(i, a.end) })
    ),
    { data: s, error: o } = n
      ? await kn.getContractTradeV2(r)
      : await kn.getContractTrade(r);
  return s || (o && oe.send("toast", "error", o), { total: 0, rows: [] });
}
async function tg({ utaState: e, ...t }, n) {
  const r = An(
      e,
      t,
      (a, i) => ({ ...a, start: Hn(i, a.start), end: Hn(i, a.end) }),
      (a, i) => ({ ...a, start: $n(i, a.start), end: $n(i, a.end) })
    ),
    { data: s, error: o } = n
      ? await kn.getContractOrderV2(r)
      : await kn.getContractOrder(r);
  return s || (o && oe.send("toast", "error", o), { total: 0, rows: [] });
}
async function ng(e) {
  const { data: t, error: n } = await kn.getWalletDetails(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function rg(e) {
  const { data: t, error: n } = await kn.getDeposit(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function sg(e) {
  const { data: t, error: n } = await kn.getWithdraw(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function og(e) {
  e.withCount = !0;
  const { data: t, error: n } = await Ci.getAccountFlow(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function ag({ offset: e, limit: t, dateType: n, start: r, end: s }) {
  const o = {
      offset: e,
      limit: t,
      dateType: n,
      start: r,
      end: s,
      withCount: !0,
    },
    { data: a, error: i } = await rt.closedPositionListV2(o);
  return a || (i && oe.send("toast", "error", i), { total: 0, rows: [] });
}
async function ig({
  offset: e,
  limit: t,
  start: n,
  end: r,
  dateType: s,
  utaState: o = Wn.beforeUpgrade,
}) {
  const i = An(
      o,
      {
        offset: e,
        limit: t,
        dateType: s,
        startTime: n,
        endTime: r,
        withCount: !0,
      },
      (u, d) => ({
        ...u,
        startTime: Hn(d, u.startTime),
        endTime: Hn(d, u.endTime),
      }),
      (u, d) => ({
        ...u,
        startTime: $n(d, u.startTime),
        endTime: $n(d, u.endTime),
      })
    ),
    { data: l, error: c } = await rt.getConversionsList(i);
  return l || (c && oe.send("toast", "error", c), { total: 0, rows: [] });
}
function La(e = 0) {
  return async function (t) {
    t.withCount = !0;
    const n = An(
        e,
        t,
        (o, a) => ({ ...o, start: Hn(a, o.start), end: Hn(a, o.end) }),
        (o, a) => ({ ...o, start: $n(a, o.start), end: $n(a, o.end) })
      ),
      { data: r, error: s } = await rt.tradeAccountDetailV2(n);
    return r || (s && oe.send("toast", "error", s), { total: 0, rows: [] });
  };
}
async function lg(e) {
  e.withCount = !0;
  const { data: t, error: n } = await Bi.getLaunchPoolFunds(e);
  return t || (n && oe.send("toast", "error", n), { total: 0, rows: [] });
}
async function cg(e) {
  const { currency: t, end: n, start: r, limit: s } = e,
    o = { currency: t, pageNum: 1, pageSize: s, end: n, start: r },
    { data: a, error: i } = await un.getBorrowInterestHistory(o);
  return a || (i && oe.send("toast", "error", i), { total: 0, rows: [] });
}
async function Fa(e) {
  const { currency: t, end: n, start: r, limit: s } = e,
    o = { currency: t, pageNum: 1, pageSize: s, end: n, start: r },
    { data: a, error: i } = await un.getBorrowHistory(o);
  return a || (i && oe.send("toast", "error", i), { total: 0, rows: [] });
}
function ug(e, { spots: t, currencies: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
            execPriceEp: s,
            side: o,
            time: a,
            execBaseQtyEv: i,
            execQuoteQtyEv: l,
            priceEP: c,
            quoteQtyEv: u,
            baseQtyEv: d,
            feeRateEr: m,
            ordType: g,
            execId: v,
            qtyType: _,
            execFeeEv: I,
            feeCurrency: C,
          } = r,
          k = ls(t, r);
        if (!k)
          return [
            a,
            "--",
            o,
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            g,
            v.substring(0, 8),
          ];
        const {
            displaySymbol: D,
            pricePrecision: E,
            displayBaseCurrency: b,
            baseQtyPrecision: P,
            baseQtyScale: R,
            quoteCurrency: N,
            quoteQtyPrecision: S,
            quoteQtyScale: H,
          } = k,
          F =
            o === "Buy"
              ? $.delimit($.floor(i, P, R)) + " " + b
              : $.delimit($.floor(l, S, H)) + " " + N,
          G = $.floor(s, E, H),
          re =
            o === "Buy"
              ? $.delimit($.floor(l, S, H)) + " " + N
              : $.delimit($.floor(i, P, R)) + " " + b,
          x =
            _ === "ByBase"
              ? $.delimit($.floor(d, P, R)) + " " + b
              : $.delimit($.floor(u, S, H)) + " " + N,
          ae = g === "Market" ? "Market" : $.floor(c, E, H),
          V = qt(n, C);
        if (!V)
          return [a, D, o, F, G, re, x, ae, "--", "--", g, v.substring(0, 8)];
        const { valueScale: ee, valuePrecision: ie, displayCurrency: Z } = V,
          me = $.trimEnd0($.floor(m, 6, 6)) + "%",
          Ae = $.floor(I, ie, ee) + " " + Z;
        return [a, D, o, F, G, re, x, ae, me, Ae, g, v.substring(0, 8)];
      });
}
function fg(e, { spots: t, currencies: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
            time: s,
            side: o,
            priceEp: a,
            stopPxEp: i,
            quoteQtyEv: l,
            baseQtyEv: c,
            qtyType: u,
            avgPriceEp: d,
            leavesQuoteQtyEv: m,
            leavesBaseQtyEv: g,
            cumBaseValueEv: v,
            cumQuoteValueEv: _,
            ordType: I,
            ordStatus: C,
            orderID: k,
          } = r,
          D = ls(t, r);
        if (!D)
          return [
            s,
            "--",
            o,
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            "--",
            I,
            C,
            k,
          ];
        const {
            displaySymbol: E,
            pricePrecision: b,
            displayBaseCurrency: P,
            baseQtyPrecision: R,
            baseQtyScale: N,
            quoteCurrency: S,
            quoteQtyPrecision: H,
            quoteQtyScale: F,
          } = D,
          G = ["Market", "Stop", "MarketIfTouched"].indexOf(I) > -1,
          re =
            ["Stop", "StopLimit", "LimitIfTouched", "MarketIfTouched"].indexOf(
              I
            ) < 0,
          x =
            u === "ByBase"
              ? $.floor(c, R, N) + " " + P
              : $.floor(l, H, F) + " " + S,
          ae = G ? "Market" : $.floor(a, b, F),
          V = d === 0 ? "-" : $.floor(d, b, F),
          ee = u === "ByBase" ? $.floor(v, R, N) : $.floor(_, H, N),
          ie = u === "ByBase" ? $.floor(g, R, N) : $.floor(m, H, N),
          Z = G
            ? "-"
            : Sg({
                qtyType: u,
                priceEp: a,
                baseQtyEv: c,
                quoteQtyEv: l,
                baseQtyScale: N,
                quoteQtyScale: F,
                baseQtyPrecision: R,
                quoteQtyPrecision: H,
                baseCurrency: P,
                quoteCurrency: S,
              }),
          me = re ? "-" : $.floor(i, b, F);
        return [s, E, o, x, ae, V, ee + " / " + ie, Z, me, I, C, k];
      });
}
function dg(e, { contracts: t, currencies: n, lang: r, LG: s }) {
  return t.length < 1 || n.length < 1
    ? null
    : Gi({ rows: e, contracts: t, currencies: n }).map((a) => [
        a.createdTime,
        a.symbol,
        a.orderQty,
        Hi(t, a, s, r),
        a.orderPrice,
        a.execQty + "/" + a.leavesQty,
        a.orderValue,
        a.triggerPrice,
        a.orderType,
        a.status,
        a.orderId,
      ]);
}
function hg(e, { contracts: t, currencies: n, lang: r, LG: s }) {
  return t.length < 1 || n.length < 1
    ? null
    : el({ rows: e, contracts: t, currencies: n }).map((a) => [
        a.createdTime,
        a.symbol,
        a.execType,
        a.execQty,
        Hi(t, a, s, r),
        a.execPrice,
        a.orderQty,
        a.orderPrice,
        a.execValue,
        a.feeRate,
        a.feePaid,
        a.type,
        a.execId,
      ]);
}
function pg(e, { currencies: t, LG: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
            time: s,
            currencyCode: o,
            bizCode: a,
            amountEv: i,
            balanceEv: l,
            side: c,
          } = r,
          u = qt(t, o);
        if (!u) return [s, o, ca(n)[a], "--", "--"];
        const { valueScale: d, valuePrecision: m } = u,
          g = (c === 0 ? "-" : "+") + $.floor(i, m, d) + " " + o,
          v = $.floor(l, m, d) + " " + o;
        return [s, o, ca(n)[a], g, v];
      });
}
function gg(e, { currencies: t }) {
  return t.length < 1
    ? null
    : e.map((n) => {
        const { time: r, txHash: s, amountEv: o, currency: a, status: i } = n,
          l = qt(t, a);
        if (!l) return [r, s, "-- " + a, i];
        const { valuePrecision: c, valueScale: u, displayCurrency: d } = l;
        return [r, s, $.floor(o, c, u) + " " + d, i];
      });
}
function mg(e, { currencies: t }) {
  return t.length < 1
    ? null
    : e.map((n) => {
        const {
            time: r,
            address: s,
            txHash: o,
            amountEv: a,
            currency: i,
            feeEv: l,
            status: c,
            rejectReason: u,
          } = n,
          d = qt(t, i);
        if (!d) return [r, s, o || "--", "--", "--", "--"];
        const { valueScale: m, displayCurrency: g } = d,
          v = $.floor(a, m, m) + " " + g,
          _ = $.floor(l, m, m) + " " + g,
          I = c + (u && u !== null ? "(" + u + ")" : "");
        return [r, s, o || "--", v, _, I];
      });
}
function _g(e, { currencies: t, LG: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
          createTime: s,
          currency: o,
          eventType: a,
          updateAmountEv: i,
          balanceEv: l,
        } = r;
        if (!qt(t, o))
          return [Le.formatUTCDateTime(s), o, ua(n)[a], "--", "--" + o];
        const { valuePrecision: u, valueScale: d } = qt(t, o);
        return [
          Le.formatUTCDateTime(s),
          o,
          ua(n)[a],
          (Yp.indexOf(a) > -1 ? "- " : "+ ") + $.floor(i, u, d) + o,
          $.floor(l, u, d) + o,
        ];
      });
}
function vg(e, { contracts: t, currencies: n }) {
  if (t.length < 1) return null;
  const r = tc(t, "symbol"),
    { rows: s } = gp([e, r, n]);
  return s.map((o) => [
    o.openTime,
    o.closeTime,
    o.symbol,
    o.openPrice,
    o.closePrice,
    o.totalSize,
    o.closedPnl,
    o.tradingFeePaid,
    o.fundingFeePaid,
    o.realisedPnl,
    o.roi,
  ]);
}
function bg(e, { currencies: t, LG: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const {
          createTime: s,
          fromCurrency: o,
          conversionRate: a,
          toCurrency: i,
          status: l,
          linkKey: c,
        } = r;
        return [
          Le.formatUTCDateTime(s),
          o,
          yg(t, r),
          $.floor(a, 4, 8),
          i,
          Tg(t, r),
          Dg(n)[l],
          c.substring(0, 8),
        ];
      });
}
function yg(e, t) {
  const { fromCurrency: n, fromAmountEv: r } = t,
    s = qt(e, n);
  if (!s) return "--";
  const { valueScale: o, qtyPrecision: a } = s;
  return $.floor(r, a, o);
}
function Tg(e, t) {
  const { toCurrency: n, toAmountEv: r } = t,
    s = qt(e, n);
  if (!s) return "--";
  const { valueScale: o, qtyPrecision: a } = s;
  return $.floor(r, a, o);
}
function Va(e, { LG: t }) {
  return nl(e).map((r) => [
    r.createdTime,
    r.account,
    dd(t)[r.type],
    r.changeAmount,
    r.balance,
  ]);
}
function Cg(e, { currencies: t, LG: n }) {
  return t.length < 1
    ? null
    : e.map((r) => {
        const { investTime: s, investCurrency: o, tradeType: a } = r;
        return [Le.formatDateTime(s), o, fd(n)[a], wg(t, r), Ig(t, r)];
      });
}
function Eg(e) {
  return e.map((t) => {
    const n = $.delimit($.floor(t.hourlyInterestRv, nc)),
      r = it(t.hourlyRateRr).times(100).round(po, 3).toFixed(po) + "%",
      s = it(t.annualRateRr).times(100).round(go, 3).toFixed(go) + "%";
    return [
      t.borrowCurrency,
      Le.formatDateTime(t.interestCalcTime),
      t.interestCurrency,
      n,
      r + "/" + s,
    ];
  });
}
function Ba(e = !1) {
  return function (t, { spots: n, currencies: r }) {
    return n.length < 1
      ? null
      : t.map((s) => {
          const {
              createTimeNs: o,
              side: a,
              priceEp: i,
              qtyType: l,
              avgPriceEp: c,
              ordType: u,
              ordStatus: d,
              orderId: m,
              feeCurrency: g,
              priceRp: v,
              avgPriceRp: _,
              cumBaseValueRv: I,
              cumQuoteValueRv: C,
              leavesBaseQtyRq: k,
              leavesQuoteQtyRq: D,
              baseQtyRq: E,
              quoteQtyRq: b,
              stopPxRp: P,
              cumFeeRv: R,
            } = s,
            N = Le.formatUTCDateTime(o * 1e-6),
            S = ls(n, s);
          if (!S)
            return [
              N,
              "--",
              a,
              "--",
              "--",
              "--",
              "--",
              "--",
              "--",
              "--",
              u,
              d,
              m,
            ];
          const {
              displaySymbol: H,
              pricePrecision: F,
              displayBaseCurrency: G,
              baseQtyPrecision: re,
              quoteCurrency: x,
              quoteQtyPrecision: ae,
            } = S,
            V =
              ["Market", "Stop", "MarketIfTouched", "LiqTrade"].indexOf(u) > -1,
            ee =
              [
                "Stop",
                "StopLimit",
                "LimitIfTouched",
                "MarketIfTouched",
              ].indexOf(u) < 0,
            ie =
              l === "ByBase"
                ? $.floor(E, re) + " " + G
                : $.floor(b, ae) + " " + x,
            Z = V ? "Market" : $.floor(v, F),
            me = Number(_) === 0 ? "-" : $.floor(_, F),
            Ae = l === "ByBase" ? $.floor(I, re) : $.floor(C, ae),
            z = l === "ByBase" ? $.floor(k, re) : $.floor(D, ae),
            te = V
              ? "-"
              : kg({
                  qtyType: l,
                  baseQtyRq: E,
                  quoteQtyRq: b,
                  priceRp: v,
                  priceEp: i,
                  baseQtyPrecision: re,
                  quoteQtyPrecision: ae,
                  baseCurrency: G,
                  quoteCurrency: x,
                }),
            ne = ee ? "-" : $.floor(P, F),
            { displayCurrency: Te } = r.find((Pe) => Pe.currency === g),
            be = R + " " + Te;
          return e
            ? [N, H, a, ie, Z, me, Ae + " / " + z, te, ne, u, d, m]
            : [N, H, a, ie, Z, me, Ae + " / " + z, te, ne, be, u, d, m];
        });
  };
}
function wg(e, t) {
  const { requestAmountEv: n, investCurrency: r } = t,
    s = qt(e, r);
  if (!s) return "--";
  const { valueScale: o, valuePrecision: a } = s;
  return $.delimit($.floor(n, a, o)) + " " + r;
}
function Ig(e, t) {
  const { balanceEv: n, investCurrency: r } = t,
    s = qt(e, r);
  if (!s) return "--";
  const { valueScale: o, valuePrecision: a } = s;
  return $.delimit($.floor(n, a, o)) + " " + r;
}
function Dg(e) {
  return { 1: e(Is.Processing), 2: e(Is.Complated), 3: e(Is.Failed) };
}
function kg({
  qtyType: e,
  baseQtyRq: t,
  quoteQtyRq: n,
  priceRp: r,
  baseQtyPrecision: s,
  quoteQtyPrecision: o,
  baseCurrency: a,
  quoteCurrency: i,
}) {
  if (e === "ByBase") {
    const l = it(t).times(it(r));
    return [$.floor(Number(l), o), i].join(" ");
  }
  if (e === "ByQuote") {
    const l = it(n).div(it(r));
    return [$.floor(Number(l), s), a].join(" ");
  }
  return "-";
}
function Sg({
  qtyType: e,
  priceEp: t,
  baseQtyEv: n,
  quoteQtyEv: r,
  baseQtyScale: s,
  quoteQtyScale: o,
  baseQtyPrecision: a,
  quoteQtyPrecision: i,
  baseCurrency: l,
  quoteCurrency: c,
}) {
  const u = Pg({
    qtyType: e,
    priceEp: t,
    baseQtyEv: n,
    quoteQtyEv: r,
    baseQtyScale: s,
    quoteQtyScale: o,
  });
  return e === "ByBase"
    ? [$.floor(Number(u), i), c].join(" ")
    : e === "ByQuote"
    ? [$.floor(Number(u), a), l].join(" ")
    : "-";
}
function Pg({
  qtyType: e,
  priceEp: t,
  baseQtyEv: n,
  quoteQtyEv: r,
  baseQtyScale: s,
  quoteQtyScale: o,
}) {
  if (t === 0) return 0;
  const a = it(10).pow(s),
    i = it(10).pow(o),
    l = it(10).pow(o),
    c = it(t).div(l);
  return e === "ByBase"
    ? it(n).div(a).times(c)
    : e === "ByQuote"
    ? it(r).div(i).div(c)
    : 0;
}
function Rg([e, t]) {
  const n = [t.headers, ...e];
  return ad(n, t.fileName + ".csv", t.fileName);
}
function Ua(e, t, n) {
  const r = e.slice();
  return (r[18] = t[n]), r;
}
function $a(e, t, n) {
  const r = e.slice();
  return (r[18] = t[n]), r;
}
function Ha(e, t, n) {
  const r = e.slice();
  return (r[18] = t[n]), r;
}
function Ya(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        visible: e[1],
        $$slots: { footer: [Lg], header: [Og], default: [Ag] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s & 2 && (o.visible = r[1]),
          s & 33554559 && (o.$$scope = { dirty: s, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function Qa(e) {
  let t,
    n,
    r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;",
    s,
    o,
    a = e[18].name + "",
    i,
    l,
    c,
    u;
  function d() {
    return e[11](e[18]);
  }
  return {
    c() {
      (t = y("div")),
        (n = y("i")),
        (s = A()),
        (o = y("div")),
        (i = B(a)),
        (l = A()),
        this.h();
    },
    l(m) {
      t = T(m, "DIV", { class: !0 });
      var g = w(t);
      n = T(g, "I", { class: !0 });
      var v = w(n);
      v.forEach(h), (s = O(g)), (o = T(g, "DIV", {}));
      var _ = w(o);
      (i = U(_, a)), _.forEach(h), (l = O(g)), g.forEach(h), this.h();
    },
    h() {
      p(n, "class", "iconfont mr8"),
        X(n, "BLUE", e[4] === e[18].type),
        X(o, "T2", e[4] === e[18].type),
        p(t, "class", "T3 w200 ml20 df cp svelte-a6pi1s");
    },
    m(m, g) {
      M(m, t, g),
        f(t, n),
        (n.innerHTML = r),
        f(t, s),
        f(t, o),
        f(o, i),
        f(t, l),
        c || ((u = Ie(t, "click", d)), (c = !0));
    },
    p(m, g) {
      (e = m),
        g & 16 &&
          r !== (r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;") &&
          (n.innerHTML = r),
        g & 144 && X(n, "BLUE", e[4] === e[18].type),
        g & 144 && X(o, "T2", e[4] === e[18].type);
    },
    d(m) {
      m && h(t), (c = !1), u();
    },
  };
}
function Wa(e) {
  let t,
    n,
    r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;",
    s,
    o,
    a = e[18].name + "",
    i,
    l,
    c,
    u;
  function d() {
    return e[12](e[18]);
  }
  return {
    c() {
      (t = y("div")),
        (n = y("i")),
        (s = A()),
        (o = y("div")),
        (i = B(a)),
        (l = A()),
        this.h();
    },
    l(m) {
      t = T(m, "DIV", { class: !0 });
      var g = w(t);
      n = T(g, "I", { class: !0 });
      var v = w(n);
      v.forEach(h), (s = O(g)), (o = T(g, "DIV", {}));
      var _ = w(o);
      (i = U(_, a)), _.forEach(h), (l = O(g)), g.forEach(h), this.h();
    },
    h() {
      p(n, "class", "iconfont mr8"),
        X(n, "BLUE", e[4] === e[18].type),
        X(o, "T2", e[4] === e[18].type),
        p(t, "class", "T3 w200 ml20 df cp svelte-a6pi1s");
    },
    m(m, g) {
      M(m, t, g),
        f(t, n),
        (n.innerHTML = r),
        f(t, s),
        f(t, o),
        f(o, i),
        f(t, l),
        c || ((u = Ie(t, "click", d)), (c = !0));
    },
    p(m, g) {
      (e = m),
        g & 16 &&
          r !== (r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;") &&
          (n.innerHTML = r),
        g & 144 && X(n, "BLUE", e[4] === e[18].type),
        g & 144 && X(o, "T2", e[4] === e[18].type);
    },
    d(m) {
      m && h(t), (c = !1), u();
    },
  };
}
function qa(e) {
  let t,
    n,
    r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;",
    s,
    o,
    a = e[18].name + "",
    i,
    l,
    c,
    u;
  function d() {
    return e[13](e[18]);
  }
  return {
    c() {
      (t = y("div")),
        (n = y("i")),
        (s = A()),
        (o = y("div")),
        (i = B(a)),
        (l = A()),
        this.h();
    },
    l(m) {
      t = T(m, "DIV", { class: !0 });
      var g = w(t);
      n = T(g, "I", { class: !0 });
      var v = w(n);
      v.forEach(h), (s = O(g)), (o = T(g, "DIV", {}));
      var _ = w(o);
      (i = U(_, a)), _.forEach(h), (l = O(g)), g.forEach(h), this.h();
    },
    h() {
      p(n, "class", "iconfont mr8"),
        X(n, "BLUE", e[4] === e[18].type),
        X(o, "T2", e[4] === e[18].type),
        p(t, "class", "T3 w200 ml20 df cp svelte-a6pi1s");
    },
    m(m, g) {
      M(m, t, g),
        f(t, n),
        (n.innerHTML = r),
        f(t, s),
        f(t, o),
        f(o, i),
        f(t, l),
        c || ((u = Ie(t, "click", d)), (c = !0));
    },
    p(m, g) {
      (e = m),
        g & 16 &&
          r !== (r = e[4] === e[18].type ? "&#xe621;" : "&#xe622;") &&
          (n.innerHTML = r),
        g & 144 && X(n, "BLUE", e[4] === e[18].type),
        g & 144 && X(o, "T2", e[4] === e[18].type);
    },
    d(m) {
      m && h(t), (c = !1), u();
    },
  };
}
function Ag(e) {
  let t,
    n,
    r,
    s,
    o,
    a,
    i,
    l,
    c,
    u,
    d,
    m,
    g = e[4] === "Custom" ? "&#xe621;" : "&#xe622;",
    v,
    _,
    I = e[7](Sn.Custom) + "",
    C,
    k,
    D,
    E,
    b,
    P,
    R,
    N,
    S,
    H,
    F,
    G,
    re,
    x,
    ae,
    V,
    ee,
    ie,
    Z,
    me,
    Ae,
    z,
    te = aa(e[7]),
    ne = [];
  for (let J = 0; J < te.length; J += 1) ne[J] = Qa(Ha(e, te, J));
  let Te = ia(e[7]),
    be = [];
  for (let J = 0; J < Te.length; J += 1) be[J] = Wa($a(e, Te, J));
  let Pe = la(e[7]),
    De = [];
  for (let J = 0; J < Pe.length; J += 1) De[J] = qa(Ua(e, Pe, J));
  function qe(J) {
    e[15](J);
  }
  let K = { format: Ka, end: new Date() };
  e[0] !== void 0 && (K.formattedSelected = e[0]),
    (b = new oa({ props: K })),
    Ne.push(() => Xe(b, "formattedSelected", qe));
  function Ee(J) {
    e[16](J);
  }
  let Se = { format: Ka, start: e[6], end: new Date() };
  return (
    e[5] !== void 0 && (Se.formattedSelected = e[5]),
    (ae = new oa({ props: Se })),
    Ne.push(() => Xe(ae, "formattedSelected", Ee)),
    {
      c() {
        (t = y("div")), (n = A()), (r = y("div")), (s = y("div"));
        for (let J = 0; J < ne.length; J += 1) ne[J].c();
        (o = A()), (a = y("div"));
        for (let J = 0; J < be.length; J += 1) be[J].c();
        (i = A()), (l = y("div"));
        for (let J = 0; J < De.length; J += 1) De[J].c();
        (c = A()),
          (u = y("div")),
          (d = y("div")),
          (m = y("i")),
          (v = A()),
          (_ = y("div")),
          (C = B(I)),
          (k = A()),
          (D = y("div")),
          (E = y("div")),
          le(b.$$.fragment),
          (R = A()),
          (N = y("i")),
          (S = B("")),
          (H = A()),
          (F = y("i")),
          (G = B("")),
          (re = A()),
          (x = y("div")),
          le(ae.$$.fragment),
          (ee = A()),
          (ie = y("i")),
          (Z = B("")),
          this.h();
      },
      l(J) {
        (t = T(J, "DIV", { id: !0, style: !0 })),
          w(t).forEach(h),
          (n = O(J)),
          (r = T(J, "DIV", { class: !0 }));
        var de = w(r);
        s = T(de, "DIV", { class: !0 });
        var Oe = w(s);
        for (let ze = 0; ze < ne.length; ze += 1) ne[ze].l(Oe);
        Oe.forEach(h), (o = O(de)), (a = T(de, "DIV", { class: !0 }));
        var Fe = w(a);
        for (let ze = 0; ze < be.length; ze += 1) be[ze].l(Fe);
        Fe.forEach(h), (i = O(de)), (l = T(de, "DIV", { class: !0 }));
        var ge = w(l);
        for (let ze = 0; ze < De.length; ze += 1) De[ze].l(ge);
        ge.forEach(h), (c = O(de)), (u = T(de, "DIV", { class: !0 }));
        var $e = w(u);
        d = T($e, "DIV", { class: !0 });
        var ct = w(d);
        m = T(ct, "I", { class: !0 });
        var on = w(m);
        on.forEach(h), (v = O(ct)), (_ = T(ct, "DIV", {}));
        var ut = w(_);
        (C = U(ut, I)),
          ut.forEach(h),
          ct.forEach(h),
          (k = O($e)),
          (D = T($e, "DIV", { class: !0 }));
        var bt = w(D);
        E = T(bt, "DIV", { class: !0 });
        var pt = w(E);
        ce(b.$$.fragment, pt), (R = O(pt)), (N = T(pt, "I", { class: !0 }));
        var Ve = w(N);
        (S = U(Ve, "")),
          Ve.forEach(h),
          pt.forEach(h),
          (H = O(bt)),
          (F = T(bt, "I", { class: !0 }));
        var Ht = w(F);
        (G = U(Ht, "")),
          Ht.forEach(h),
          (re = O(bt)),
          (x = T(bt, "DIV", { class: !0 }));
        var yt = w(x);
        ce(ae.$$.fragment, yt), (ee = O(yt)), (ie = T(yt, "I", { class: !0 }));
        var vt = w(ie);
        (Z = U(vt, "")),
          vt.forEach(h),
          yt.forEach(h),
          bt.forEach(h),
          $e.forEach(h),
          de.forEach(h),
          this.h();
      },
      h() {
        p(t, "id", "container"),
          lr(t, "display", "none"),
          p(s, "class", "df jcsb"),
          p(a, "class", "df jcsb mt20"),
          p(l, "class", "df jcsb mt20"),
          p(m, "class", "iconfont mr8"),
          X(m, "BLUE", e[4] === "Custom"),
          X(_, "T2", e[4] === "Custom"),
          p(d, "class", "T3 df cp"),
          p(N, "class", "iconfont df aic"),
          X(N, "BLUE", e[4] === "Custom"),
          p(E, "class", "df jcsb w140 date-box1 svelte-a6pi1s"),
          X(E, "disable", e[4] !== "Custom"),
          p(F, "class", "iconfont df aic jcc f12"),
          X(F, "T3", e[4] === "Custom"),
          p(ie, "class", "iconfont df aic"),
          X(ie, "BLUE", e[4] === "Custom"),
          p(x, "class", "df jcsb w140 date-box2 svelte-a6pi1s"),
          X(x, "disable", e[4] !== "Custom"),
          p(D, "class", "df jcsb date-pick mt20 T4 svelte-a6pi1s"),
          p(u, "class", "bg mt20 svelte-a6pi1s"),
          p(r, "class", "main df fdc svelte-a6pi1s");
      },
      m(J, de) {
        M(J, t, de), M(J, n, de), M(J, r, de), f(r, s);
        for (let Oe = 0; Oe < ne.length; Oe += 1) ne[Oe].m(s, null);
        f(r, o), f(r, a);
        for (let Oe = 0; Oe < be.length; Oe += 1) be[Oe].m(a, null);
        f(r, i), f(r, l);
        for (let Oe = 0; Oe < De.length; Oe += 1) De[Oe].m(l, null);
        f(r, c),
          f(r, u),
          f(u, d),
          f(d, m),
          (m.innerHTML = g),
          f(d, v),
          f(d, _),
          f(_, C),
          f(u, k),
          f(u, D),
          f(D, E),
          ue(b, E, null),
          f(E, R),
          f(E, N),
          f(N, S),
          f(D, H),
          f(D, F),
          f(F, G),
          f(D, re),
          f(D, x),
          ue(ae, x, null),
          f(x, ee),
          f(x, ie),
          f(ie, Z),
          (me = !0),
          Ae || ((z = Ie(d, "click", e[14])), (Ae = !0));
      },
      p(J, de) {
        if (de & 144) {
          te = aa(J[7]);
          let ge;
          for (ge = 0; ge < te.length; ge += 1) {
            const $e = Ha(J, te, ge);
            ne[ge]
              ? ne[ge].p($e, de)
              : ((ne[ge] = Qa($e)), ne[ge].c(), ne[ge].m(s, null));
          }
          for (; ge < ne.length; ge += 1) ne[ge].d(1);
          ne.length = te.length;
        }
        if (de & 144) {
          Te = ia(J[7]);
          let ge;
          for (ge = 0; ge < Te.length; ge += 1) {
            const $e = $a(J, Te, ge);
            be[ge]
              ? be[ge].p($e, de)
              : ((be[ge] = Wa($e)), be[ge].c(), be[ge].m(a, null));
          }
          for (; ge < be.length; ge += 1) be[ge].d(1);
          be.length = Te.length;
        }
        if (de & 144) {
          Pe = la(J[7]);
          let ge;
          for (ge = 0; ge < Pe.length; ge += 1) {
            const $e = Ua(J, Pe, ge);
            De[ge]
              ? De[ge].p($e, de)
              : ((De[ge] = qa($e)), De[ge].c(), De[ge].m(l, null));
          }
          for (; ge < De.length; ge += 1) De[ge].d(1);
          De.length = Pe.length;
        }
        (!me || de & 16) &&
          g !== (g = J[4] === "Custom" ? "&#xe621;" : "&#xe622;") &&
          (m.innerHTML = g),
          (!me || de & 16) && X(m, "BLUE", J[4] === "Custom"),
          (!me || de & 16) && X(_, "T2", J[4] === "Custom");
        const Oe = {};
        !P &&
          de & 1 &&
          ((P = !0), (Oe.formattedSelected = J[0]), Ze(() => (P = !1))),
          b.$set(Oe),
          (!me || de & 16) && X(N, "BLUE", J[4] === "Custom"),
          (!me || de & 16) && X(E, "disable", J[4] !== "Custom"),
          (!me || de & 16) && X(F, "T3", J[4] === "Custom");
        const Fe = {};
        de & 64 && (Fe.start = J[6]),
          !V &&
            de & 32 &&
            ((V = !0), (Fe.formattedSelected = J[5]), Ze(() => (V = !1))),
          ae.$set(Fe),
          (!me || de & 16) && X(ie, "BLUE", J[4] === "Custom"),
          (!me || de & 16) && X(x, "disable", J[4] !== "Custom");
      },
      i(J) {
        me || (Y(b.$$.fragment, J), Y(ae.$$.fragment, J), (me = !0));
      },
      o(J) {
        q(b.$$.fragment, J), q(ae.$$.fragment, J), (me = !1);
      },
      d(J) {
        J && h(t),
          J && h(n),
          J && h(r),
          or(ne, J),
          or(be, J),
          or(De, J),
          fe(b),
          fe(ae),
          (Ae = !1),
          z();
      },
    }
  );
}
function Og(e) {
  let t, n, r, s, o, a, i, l, c;
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (r = B(e[3])),
        (s = B(" (CSV)")),
        (o = A()),
        (a = y("i")),
        (i = B("")),
        this.h();
    },
    l(u) {
      t = T(u, "DIV", { class: !0, slot: !0 });
      var d = w(t);
      n = T(d, "DIV", { class: !0 });
      var m = w(n);
      (r = U(m, e[3])),
        (s = U(m, " (CSV)")),
        m.forEach(h),
        (o = O(d)),
        (a = T(d, "I", { class: !0 }));
      var g = w(a);
      (i = U(g, "")), g.forEach(h), d.forEach(h), this.h();
    },
    h() {
      p(n, "class", "f16 T1 fw2 lh24"),
        p(a, "class", "iconfont lh12 f12 T4 cp df aic"),
        p(t, "class", "lh24 b df jcsb"),
        p(t, "slot", "header");
    },
    m(u, d) {
      M(u, t, d),
        f(t, n),
        f(n, r),
        f(n, s),
        f(t, o),
        f(t, a),
        f(a, i),
        l || ((c = Ie(a, "click", e[10])), (l = !0));
    },
    p(u, d) {
      d & 8 && se(r, u[3]);
    },
    d(u) {
      u && h(t), (l = !1), c();
    },
  };
}
function Ng(e) {
  let t = e[7](Sn.Cancel) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function Mg(e) {
  let t = e[7](Sn.Export) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function Lg(e) {
  let t, n, r, s, o;
  return (
    (n = new Bt({
      props: {
        type: "default",
        $$slots: { default: [Ng] },
        $$scope: { ctx: e },
      },
    })),
    n.$on("click", e[9]),
    (s = new Bt({
      props: {
        type: "primary",
        loading: e[2],
        $$slots: { default: [Mg] },
        $$scope: { ctx: e },
      },
    })),
    s.$on("click", e[8]),
    {
      c() {
        (t = y("div")),
          le(n.$$.fragment),
          (r = A()),
          le(s.$$.fragment),
          this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0, slot: !0 });
        var i = w(t);
        ce(n.$$.fragment, i),
          (r = O(i)),
          ce(s.$$.fragment, i),
          i.forEach(h),
          this.h();
      },
      h() {
        p(t, "class", "df jcfe mt24"), p(t, "slot", "footer");
      },
      m(a, i) {
        M(a, t, i), ue(n, t, null), f(t, r), ue(s, t, null), (o = !0);
      },
      p(a, i) {
        const l = {};
        i & 33554432 && (l.$$scope = { dirty: i, ctx: a }), n.$set(l);
        const c = {};
        i & 4 && (c.loading = a[2]),
          i & 33554432 && (c.$$scope = { dirty: i, ctx: a }),
          s.$set(c);
      },
      i(a) {
        o || (Y(n.$$.fragment, a), Y(s.$$.fragment, a), (o = !0));
      },
      o(a) {
        q(n.$$.fragment, a), q(s.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && h(t), fe(n), fe(s);
      },
    }
  );
}
function Fg(e) {
  let t,
    n,
    r = e[1] && Ya(e);
  return {
    c() {
      r && r.c(), (t = Ue());
    },
    l(s) {
      r && r.l(s), (t = Ue());
    },
    m(s, o) {
      r && r.m(s, o), M(s, t, o), (n = !0);
    },
    p(s, [o]) {
      s[1]
        ? r
          ? (r.p(s, o), o & 2 && Y(r, 1))
          : ((r = Ya(s)), r.c(), Y(r, 1), r.m(t.parentNode, t))
        : r &&
          (Mt(),
          q(r, 1, 1, () => {
            r = null;
          }),
          Lt());
    },
    i(s) {
      n || (Y(r), (n = !0));
    },
    o(s) {
      q(r), (n = !1);
    },
    d(s) {
      r && r.d(s), s && h(t);
    },
  };
}
const Ka = "#{Y}-#{m}-#{d}";
function Vg(e) {
  return e ? new Date(e) : new Date();
}
function Bg(e, t, n) {
  let r;
  const s = Pn("LG");
  let o = !1,
    a = !1,
    i,
    l = "hours",
    c = "",
    u = "",
    d = null;
  tt(() =>
    oe.subscribe("export-history", "dialog-show", (b) => {
      n(1, (o = !0)),
        n(4, (l = "hours")),
        (d = b),
        (d.LG = s),
        n(3, (i = b.title));
    })
  ),
    tt(() =>
      oe.subscribe("download", "disappear", () => {
        n(1, (o = !1)), n(2, (a = !1));
      })
    );
  function m() {
    if (l === "Custom") {
      const b = new Date(c).getTime();
      if ((new Date(u).getTime() - b) / 864e5 > 92) {
        oe.send("three-months-tip", "dialog-show");
        return;
      }
    }
    n(2, (a = !0)),
      zs.next({
        rangeType: l,
        formattedStartTime: c,
        formattedEndTime: u,
        context: d,
      });
  }
  const g = () => n(1, (o = !1)),
    v = () => n(1, (o = !1)),
    _ = (b) => n(4, (l = b.type)),
    I = (b) => n(4, (l = b.type)),
    C = (b) => n(4, (l = b.type)),
    k = () => n(4, (l = "Custom"));
  function D(b) {
    (c = b), n(0, c);
  }
  function E(b) {
    (u = b), n(5, u);
  }
  return (
    (e.$$.update = () => {
      e.$$.dirty & 1 && n(6, (r = Vg(c)));
    }),
    [c, o, a, i, l, u, r, s, m, g, v, _, I, C, k, D, E]
  );
}
class Ug extends He {
  constructor(t) {
    super(), Ye(this, t, Bg, Fg, Qe, {});
  }
}
const fl = { ThreeMonthsTips: "4368a1", ExportFailed: "119671" };
function ja(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        visible: e[0],
        size: "small",
        $$slots: { header: [Hg], default: [$g] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s & 1 && (o.visible = r[0]),
          s & 9 && (o.$$scope = { dirty: s, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function $g(e) {
  let t,
    n,
    r = e[1](fl.ThreeMonthsTips) + "",
    s;
  return {
    c() {
      (t = y("div")), (n = y("div")), (s = B(r)), this.h();
    },
    l(o) {
      t = T(o, "DIV", { class: !0 });
      var a = w(t);
      n = T(a, "DIV", { class: !0 });
      var i = w(n);
      (s = U(i, r)), i.forEach(h), a.forEach(h), this.h();
    },
    h() {
      p(n, "class", "mt16 tc lh22 T2"), p(t, "class", "mt24 df fdc aic mb24");
    },
    m(o, a) {
      M(o, t, a), f(t, n), f(n, s);
    },
    p: je,
    d(o) {
      o && h(t);
    },
  };
}
function Hg(e) {
  let t,
    n,
    r = e[1](fl.ExportFailed) + "",
    s,
    o,
    a,
    i,
    l,
    c;
  return {
    c() {
      (t = y("div")),
        (n = y("div")),
        (s = B(r)),
        (o = A()),
        (a = y("i")),
        (i = B("")),
        this.h();
    },
    l(u) {
      t = T(u, "DIV", { class: !0, slot: !0 });
      var d = w(t);
      n = T(d, "DIV", { class: !0 });
      var m = w(n);
      (s = U(m, r)), m.forEach(h), (o = O(d)), (a = T(d, "I", { class: !0 }));
      var g = w(a);
      (i = U(g, "")), g.forEach(h), d.forEach(h), this.h();
    },
    h() {
      p(n, "class", "lh24 fw2 f18 T1"),
        p(a, "class", "iconfont lh12 f12 T4 cp"),
        p(t, "class", "lh24 df b f16 T2 jcsb"),
        p(t, "slot", "header");
    },
    m(u, d) {
      M(u, t, d),
        f(t, n),
        f(n, s),
        f(t, o),
        f(t, a),
        f(a, i),
        l || ((c = Ie(a, "click", e[2])), (l = !0));
    },
    p: je,
    d(u) {
      u && h(t), (l = !1), c();
    },
  };
}
function Yg(e) {
  let t,
    n,
    r = e[0] && ja(e);
  return {
    c() {
      r && r.c(), (t = Ue());
    },
    l(s) {
      r && r.l(s), (t = Ue());
    },
    m(s, o) {
      r && r.m(s, o), M(s, t, o), (n = !0);
    },
    p(s, [o]) {
      s[0]
        ? r
          ? (r.p(s, o), o & 1 && Y(r, 1))
          : ((r = ja(s)), r.c(), Y(r, 1), r.m(t.parentNode, t))
        : r &&
          (Mt(),
          q(r, 1, 1, () => {
            r = null;
          }),
          Lt());
    },
    i(s) {
      n || (Y(r), (n = !0));
    },
    o(s) {
      q(r), (n = !1);
    },
    d(s) {
      r && r.d(s), s && h(t);
    },
  };
}
function Qg(e, t, n) {
  const r = Pn("LG");
  let { visible: s = !1 } = t;
  tt(() =>
    oe.subscribe("three-months-tip", "dialog-show", () => {
      n(0, (s = !0));
    })
  );
  const o = () => n(0, (s = !1));
  return (
    (e.$$set = (a) => {
      "visible" in a && n(0, (s = a.visible));
    }),
    [s, r, o]
  );
}
class Wg extends He {
  constructor(t) {
    super(), Ye(this, t, Qg, Yg, Qe, { visible: 0 });
  }
}
function qg(e) {
  let t = e[0](Sr.OK) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s & 1 && t !== (t = r[0](Sr.OK) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function Kg(e) {
  let t,
    n = e[0](Sr.WelcomeBack) + "",
    r,
    s,
    o,
    a = e[0](Sr.YourAccountHas) + "",
    i,
    l,
    c,
    u,
    d;
  return (
    (u = new Bt({
      props: {
        type: "primary",
        size: "small",
        $$slots: { default: [qg] },
        $$scope: { ctx: e },
      },
    })),
    u.$on("click", e[1]),
    {
      c() {
        (t = y("div")),
          (r = B(n)),
          (s = A()),
          (o = y("div")),
          (i = B(a)),
          (l = A()),
          (c = y("div")),
          le(u.$$.fragment),
          this.h();
      },
      l(m) {
        t = T(m, "DIV", { class: !0 });
        var g = w(t);
        (r = U(g, n)),
          g.forEach(h),
          (s = O(m)),
          (o = T(m, "DIV", { class: !0 }));
        var v = w(o);
        (i = U(v, a)),
          v.forEach(h),
          (l = O(m)),
          (c = T(m, "DIV", { class: !0 }));
        var _ = w(c);
        ce(u.$$.fragment, _), _.forEach(h), this.h();
      },
      h() {
        p(t, "class", "f16 fw3 tc"),
          p(o, "class", "mt12 tc"),
          p(c, "class", "mt20 tc");
      },
      m(m, g) {
        M(m, t, g),
          f(t, r),
          M(m, s, g),
          M(m, o, g),
          f(o, i),
          M(m, l, g),
          M(m, c, g),
          ue(u, c, null),
          (d = !0);
      },
      p(m, g) {
        (!d || g & 1) && n !== (n = m[0](Sr.WelcomeBack) + "") && se(r, n),
          (!d || g & 1) && a !== (a = m[0](Sr.YourAccountHas) + "") && se(i, a);
        const v = {};
        g & 9 && (v.$$scope = { dirty: g, ctx: m }), u.$set(v);
      },
      i(m) {
        d || (Y(u.$$.fragment, m), (d = !0));
      },
      o(m) {
        q(u.$$.fragment, m), (d = !1);
      },
      d(m) {
        m && h(t), m && h(s), m && h(o), m && h(l), m && h(c), fe(u);
      },
    }
  );
}
function jg(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        visible: !0,
        style: "max-width: 400px;",
        $$slots: { default: [Kg] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, [s]) {
        const o = {};
        s & 9 && (o.$$scope = { dirty: s, ctx: r }), t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function zg(e, t, n) {
  let { LG: r } = t;
  const s = Ut();
  tt(() => {
    setTimeout(() => {
      s("close");
    }, 3e3),
      vi.next(0);
  });
  function o() {
    s("close");
  }
  return (
    (e.$$set = (a) => {
      "LG" in a && n(0, (r = a.LG));
    }),
    [r, o]
  );
}
class Jg extends He {
  constructor(t) {
    super(), Ye(this, t, zg, jg, Qe, { LG: 0 });
  }
}
function Ot(e, ...t) {
  return async function (...n) {
    return await e(...t, ...n);
  };
}
function Xg(e) {
  let t, n;
  return {
    c() {
      (t = y("div")), (n = B(e[2])), this.h();
    },
    l(r) {
      t = T(r, "DIV", { class: !0 });
      var s = w(t);
      (n = U(s, e[2])), s.forEach(h), this.h();
    },
    h() {
      p(t, "class", "code df aic jcc T3 svelte-4v1u1a");
    },
    m(r, s) {
      M(r, t, s), f(t, n);
    },
    p(r, s) {
      s & 4 && se(n, r[2]);
    },
    i: je,
    o: je,
    d(r) {
      r && h(t);
    },
  };
}
function Zg(e) {
  let t, n, r, s, o, a, i, l;
  function c(d) {
    e[5](d);
  }
  let u = { operation: !1, len: 4, showLabel: !1 };
  return (
    e[1] !== void 0 && (u.valueEx = e[1]),
    (a = new bi({ props: u })),
    Ne.push(() => Xe(a, "valueEx", c)),
    {
      c() {
        (t = y("div")),
          (n = y("div")),
          (r = B("+")),
          (s = A()),
          (o = y("div")),
          le(a.$$.fragment),
          this.h();
      },
      l(d) {
        t = T(d, "DIV", { class: !0 });
        var m = w(t);
        n = T(m, "DIV", { class: !0 });
        var g = w(n);
        (r = U(g, "+")),
          g.forEach(h),
          (s = O(m)),
          (o = T(m, "DIV", { class: !0 }));
        var v = w(o);
        ce(a.$$.fragment, v), v.forEach(h), m.forEach(h), this.h();
      },
      h() {
        p(n, "class", "jia pa df aic svelte-4v1u1a"),
          p(o, "class", "jia-inp pa svelte-4v1u1a"),
          p(t, "class", "code df aic pr svelte-4v1u1a");
      },
      m(d, m) {
        M(d, t, m),
          f(t, n),
          f(n, r),
          f(t, s),
          f(t, o),
          ue(a, o, null),
          (l = !0);
      },
      p(d, m) {
        const g = {};
        !i && m & 2 && ((i = !0), (g.valueEx = d[1]), Ze(() => (i = !1))),
          a.$set(g);
      },
      i(d) {
        l || (Y(a.$$.fragment, d), (l = !0));
      },
      o(d) {
        q(a.$$.fragment, d), (l = !1);
      },
      d(d) {
        d && h(t), fe(a);
      },
    }
  );
}
function Gg(e) {
  let t, n, r, s, o, a, i;
  const l = [Zg, Xg],
    c = [];
  function u(g, v) {
    return g[4] ? 0 : 1;
  }
  (n = u(e)), (r = c[n] = l[n](e));
  function d(g) {
    e[6](g);
  }
  let m = { operation: !1, showLabel: !1, len: e[3] };
  return (
    e[0] !== void 0 && (m.valueEx = e[0]),
    (o = new bi({ props: m })),
    Ne.push(() => Xe(o, "valueEx", d)),
    o.$on("blur", e[7]),
    {
      c() {
        (t = y("div")), r.c(), (s = A()), le(o.$$.fragment), this.h();
      },
      l(g) {
        t = T(g, "DIV", { class: !0 });
        var v = w(t);
        r.l(v), (s = O(v)), ce(o.$$.fragment, v), v.forEach(h), this.h();
      },
      h() {
        p(t, "class", "phone df svelte-4v1u1a");
      },
      m(g, v) {
        M(g, t, v), c[n].m(t, null), f(t, s), ue(o, t, null), (i = !0);
      },
      p(g, [v]) {
        let _ = n;
        (n = u(g)),
          n === _
            ? c[n].p(g, v)
            : (Mt(),
              q(c[_], 1, 1, () => {
                c[_] = null;
              }),
              Lt(),
              (r = c[n]),
              r ? r.p(g, v) : ((r = c[n] = l[n](g)), r.c()),
              Y(r, 1),
              r.m(t, s));
        const I = {};
        v & 8 && (I.len = g[3]),
          !a && v & 1 && ((a = !0), (I.valueEx = g[0]), Ze(() => (a = !1))),
          o.$set(I);
      },
      i(g) {
        i || (Y(r), Y(o.$$.fragment, g), (i = !0));
      },
      o(g) {
        q(r), q(o.$$.fragment, g), (i = !1);
      },
      d(g) {
        g && h(t), c[n].d(), fe(o);
      },
    }
  );
}
function xg(e, t, n) {
  let { value: r = 0 } = t,
    { countryCode: s = "" } = t,
    { len: o = "20" } = t,
    { haveNoCountryCode: a = !1 } = t,
    { code: i = 0 } = t;
  function l(d) {
    (i = d), n(1, i);
  }
  function c(d) {
    (r = d), n(0, r);
  }
  function u(d) {
    nn.call(this, e, d);
  }
  return (
    (e.$$set = (d) => {
      "value" in d && n(0, (r = d.value)),
        "countryCode" in d && n(2, (s = d.countryCode)),
        "len" in d && n(3, (o = d.len)),
        "haveNoCountryCode" in d && n(4, (a = d.haveNoCountryCode)),
        "code" in d && n(1, (i = d.code));
    }),
    [r, i, s, o, a, l, c, u]
  );
}
class em extends He {
  constructor(t) {
    super(),
      Ye(this, t, xg, Gg, Qe, {
        value: 0,
        countryCode: 2,
        len: 3,
        haveNoCountryCode: 4,
        code: 1,
      });
  }
}
const kr = { Day: "6992b4", Month: "261416", Year: "e48ad9" };
function tm(e) {
  let t, n, r, s, o, a, i, l, c, u;
  function d(C) {
    e[8](C);
  }
  let m = {
    class: "f1",
    type: "border",
    options: e[6],
    placeholder: e[0](kr.Year),
  };
  e[1] !== void 0 && (m.value = e[1]),
    (n = new Ur({ props: m })),
    Ne.push(() => Xe(n, "value", d));
  function g(C) {
    e[9](C);
  }
  let v = {
    class: "f1",
    type: "border",
    options: e[5],
    placeholder: e[0](kr.Month),
  };
  e[2] !== void 0 && (v.value = e[2]),
    (o = new Ur({ props: v })),
    Ne.push(() => Xe(o, "value", g));
  function _(C) {
    e[10](C);
  }
  let I = {
    class: "f1",
    type: "border",
    options: e[4],
    placeholder: e[0](kr.Day),
  };
  return (
    e[3] !== void 0 && (I.value = e[3]),
    (l = new Ur({ props: I })),
    Ne.push(() => Xe(l, "value", _)),
    {
      c() {
        (t = y("div")),
          le(n.$$.fragment),
          (s = A()),
          le(o.$$.fragment),
          (i = A()),
          le(l.$$.fragment),
          this.h();
      },
      l(C) {
        t = T(C, "DIV", { class: !0 });
        var k = w(t);
        ce(n.$$.fragment, k),
          (s = O(k)),
          ce(o.$$.fragment, k),
          (i = O(k)),
          ce(l.$$.fragment, k),
          k.forEach(h),
          this.h();
      },
      h() {
        p(t, "class", "wrap df svelte-1ix0b86");
      },
      m(C, k) {
        M(C, t, k),
          ue(n, t, null),
          f(t, s),
          ue(o, t, null),
          f(t, i),
          ue(l, t, null),
          (u = !0);
      },
      p(C, [k]) {
        const D = {};
        k & 1 && (D.placeholder = C[0](kr.Year)),
          !r && k & 2 && ((r = !0), (D.value = C[1]), Ze(() => (r = !1))),
          n.$set(D);
        const E = {};
        k & 32 && (E.options = C[5]),
          k & 1 && (E.placeholder = C[0](kr.Month)),
          !a && k & 4 && ((a = !0), (E.value = C[2]), Ze(() => (a = !1))),
          o.$set(E);
        const b = {};
        k & 16 && (b.options = C[4]),
          k & 1 && (b.placeholder = C[0](kr.Day)),
          !c && k & 8 && ((c = !0), (b.value = C[3]), Ze(() => (c = !1))),
          l.$set(b);
      },
      i(C) {
        u ||
          (Y(n.$$.fragment, C),
          Y(o.$$.fragment, C),
          Y(l.$$.fragment, C),
          (u = !0));
      },
      o(C) {
        q(n.$$.fragment, C), q(o.$$.fragment, C), q(l.$$.fragment, C), (u = !1);
      },
      d(C) {
        C && h(t), fe(n), fe(o), fe(l);
      },
    }
  );
}
function nm() {
  const e = new Date(),
    t = [],
    n = e.getFullYear();
  for (let r = n - 18; r >= 1900; r--) {
    const s = String(r);
    t.push({ text: s, value: s });
  }
  return t;
}
function rm(e, t, n) {
  let { LG: r } = t,
    { value: s = "" } = t;
  const o = nm();
  let a = !1,
    i,
    l,
    c = "",
    u = "",
    d = "";
  function m(D) {
    if (!a && D) {
      a = !0;
      const E = D.split("-");
      n(1, (c = E[0])), n(2, (u = E[1])), n(3, (d = E[2])), v(c), _(c, u);
    }
  }
  function g(D, E, b) {
    i.filter((P) => P.value === b).length === 0 && (n(3, (d = "")), (b = "")),
      l.filter((P) => P.value === E).length === 0 &&
        (n(2, (u = "")), n(3, (d = "")), (E = ""), (b = "")),
      n(7, (s = D && E && b ? [D, E, b].join("-") : ""));
  }
  function v(D) {
    const E = [];
    for (let b = 1; b < 13; b++) {
      const P = o[0].value;
      if ((D === P && b <= new Date().getMonth() + 1) || D !== P) {
        const R = $.pad(b);
        E.push({ text: R, value: R });
      }
    }
    n(5, (l = E));
  }
  function _(D, E) {
    const b = o[0].value,
      P = new Date(),
      R = $.pad(P.getMonth() + 1),
      N = new Date(D, E, 0).getDate(),
      S = [];
    for (let H = 1; H <= N; H++)
      if (
        (D === b && E === R && H <= P.getDate()) ||
        D !== b ||
        (D === b && E !== R)
      ) {
        const F = $.pad(H);
        S.push({ text: F, value: F });
      }
    n(4, (i = S));
  }
  function I(D) {
    (c = D), n(1, c);
  }
  function C(D) {
    (u = D), n(2, u);
  }
  function k(D) {
    (d = D), n(3, d);
  }
  return (
    (e.$$set = (D) => {
      "LG" in D && n(0, (r = D.LG)), "value" in D && n(7, (s = D.value));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 6 && _(c, u),
        e.$$.dirty & 2 && v(c),
        e.$$.dirty & 14 && g(c, u, d),
        e.$$.dirty & 128 && m(s);
    }),
    [r, c, u, d, i, l, o, s, I, C, k]
  );
}
class sm extends He {
  constructor(t) {
    super(), Ye(this, t, rm, tm, Qe, { LG: 0, value: 7 });
  }
}
const _e = {
  Title: "bc2382",
  Tip: "95aaa5",
  Bonus: "fbb0ea",
  CountryRegion: "056fe5",
  Province: "194ca1",
  City: "0aa1ad",
  LastName: "71eeb9",
  FirstName: "b0e96a",
  Birthday: "f5429d",
  Address: "474344",
  ZipCode: "9daf9b",
  Certificate: "48f9d5",
  Id: "53fe40",
  Submit: "8bf68e",
  Under18: "c6618c",
  Logout: "df4f25",
  Id1: "fb104c",
  Id2: "c23442",
  Id3: "aa6d61",
  Id4: "4d4115",
  SubLogout: "44d49b",
  PhoneNumber: "bde130",
  TradingRequirements: "2cd7fe",
  ForSecureTransationsAdvanced: "551211",
  ForSecureTransations: "29601a",
  Continue: "faa2fe",
  CountryName: "df3172",
  FieldValidError: "74cc3f",
};
function om(e) {
  let t,
    n = e[0](_e.Logout) + "",
    r,
    s,
    o;
  return {
    c() {
      (t = y("span")), (r = B(n)), this.h();
    },
    l(a) {
      t = T(a, "SPAN", { class: !0 });
      var i = w(t);
      (r = U(i, n)), i.forEach(h), this.h();
    },
    h() {
      p(t, "class", "logout pa f14 T4 tdu cp svelte-1ubn3k7");
    },
    m(a, i) {
      M(a, t, i), f(t, r), s || ((o = Ie(t, "click", e[18])), (s = !0));
    },
    p(a, i) {
      i[0] & 1 && n !== (n = a[0](_e.Logout) + "") && se(r, n);
    },
    d(a) {
      a && h(t), (s = !1), o();
    },
  };
}
function am(e) {
  let t, n, r, s;
  return {
    c() {
      (t = y("i")), (n = B("")), this.h();
    },
    l(o) {
      t = T(o, "I", { class: !0 });
      var a = w(t);
      (n = U(a, "")), a.forEach(h), this.h();
    },
    h() {
      p(t, "class", "iconfont pa f30 T4 cp svelte-1ubn3k7");
    },
    m(o, a) {
      M(o, t, a), f(t, n), r || ((s = Ie(t, "click", e[15])), (r = !0));
    },
    p: je,
    d(o) {
      o && h(t), (r = !1), s();
    },
  };
}
function im(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0](_e.Bonus, { Bonus: e[12] }) + "";
  return {
    c() {
      (t = y("div")), (n = y("img")), (s = A()), (o = y("span")), this.h();
    },
    l(i) {
      t = T(i, "DIV", { class: !0 });
      var l = w(t);
      (n = T(l, "IMG", { class: !0, src: !0, width: !0, height: !0, alt: !0 })),
        (s = O(l)),
        (o = T(l, "SPAN", {}));
      var c = w(o);
      c.forEach(h), l.forEach(h), this.h();
    },
    h() {
      p(n, "class", "mr8"),
        st(n.src, (r = e[14])) || p(n, "src", r),
        p(n, "width", "18"),
        p(n, "height", "18"),
        p(n, "alt", "gift-icon"),
        p(t, "class", "tip df aic mb18 br4 f14 svelte-1ubn3k7");
    },
    m(i, l) {
      M(i, t, l), f(t, n), f(t, s), f(t, o), (o.innerHTML = a);
    },
    p(i, l) {
      l[0] & 4097 &&
        a !== (a = i[0](_e.Bonus, { Bonus: i[12] }) + "") &&
        (o.innerHTML = a);
    },
    d(i) {
      i && h(t);
    },
  };
}
function lm(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0](_e.Tip) + "",
    i;
  return {
    c() {
      (t = y("div")),
        (n = y("img")),
        (s = A()),
        (o = y("span")),
        (i = B(a)),
        this.h();
    },
    l(l) {
      t = T(l, "DIV", { class: !0 });
      var c = w(t);
      (n = T(c, "IMG", { class: !0, src: !0, width: !0, height: !0, alt: !0 })),
        (s = O(c)),
        (o = T(c, "SPAN", {}));
      var u = w(o);
      (i = U(u, a)), u.forEach(h), c.forEach(h), this.h();
    },
    h() {
      p(n, "class", "mr8"),
        st(n.src, (r = e[13])) || p(n, "src", r),
        p(n, "width", "18"),
        p(n, "height", "18"),
        p(n, "alt", "shield-icon"),
        p(t, "class", "tip df aic mb18 br4 f14 svelte-1ubn3k7");
    },
    m(l, c) {
      M(l, t, c), f(t, n), f(t, s), f(t, o), f(o, i);
    },
    p(l, c) {
      c[0] & 1 && a !== (a = l[0](_e.Tip) + "") && se(i, a);
    },
    d(l) {
      l && h(t);
    },
  };
}
function cm(e) {
  let t, n, r;
  function s(a) {
    e[24](a);
  }
  let o = { type: "border", options: e[9] };
  return (
    e[3].province !== void 0 && (o.value = e[3].province),
    (t = new Ns({ props: o })),
    Ne.push(() => Xe(t, "value", s)),
    {
      c() {
        le(t.$$.fragment);
      },
      l(a) {
        ce(t.$$.fragment, a);
      },
      m(a, i) {
        ue(t, a, i), (r = !0);
      },
      p(a, i) {
        const l = {};
        i[0] & 512 && (l.options = a[9]),
          !n &&
            i[0] & 8 &&
            ((n = !0), (l.value = a[3].province), Ze(() => (n = !1))),
          t.$set(l);
      },
      i(a) {
        r || (Y(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        q(t.$$.fragment, a), (r = !1);
      },
      d(a) {
        fe(t, a);
      },
    }
  );
}
function um(e) {
  let t, n, r, s, o;
  function a(c) {
    e[23](c);
  }
  let i = {};
  e[3].province !== void 0 && (i.value = e[3].province),
    (t = new nr({ props: i })),
    Ne.push(() => Xe(t, "value", a)),
    t.$on("blur", function () {
      Qt(Ot(e[20], "province", e[3].province)) &&
        Ot(e[20], "province", e[3].province).apply(this, arguments);
    });
  let l = e[8].province.valid === !1 && za(e);
  return {
    c() {
      le(t.$$.fragment), (r = A()), l && l.c(), (s = Ue());
    },
    l(c) {
      ce(t.$$.fragment, c), (r = O(c)), l && l.l(c), (s = Ue());
    },
    m(c, u) {
      ue(t, c, u), M(c, r, u), l && l.m(c, u), M(c, s, u), (o = !0);
    },
    p(c, u) {
      e = c;
      const d = {};
      !n &&
        u[0] & 8 &&
        ((n = !0), (d.value = e[3].province), Ze(() => (n = !1))),
        t.$set(d),
        e[8].province.valid === !1
          ? l
            ? l.p(e, u)
            : ((l = za(e)), l.c(), l.m(s.parentNode, s))
          : l && (l.d(1), (l = null));
    },
    i(c) {
      o || (Y(t.$$.fragment, c), (o = !0));
    },
    o(c) {
      q(t.$$.fragment, c), (o = !1);
    },
    d(c) {
      fe(t, c), c && h(r), l && l.d(c), c && h(s);
    },
  };
}
function za(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function Ja(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function Xa(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function Za(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function Ga(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function xa(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function ei(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function ti(e) {
  let t,
    n = e[0](_e.FieldValidError) + "",
    r;
  return {
    c() {
      (t = y("div")), (r = B(n)), this.h();
    },
    l(s) {
      t = T(s, "DIV", { class: !0 });
      var o = w(t);
      (r = U(o, n)), o.forEach(h), this.h();
    },
    h() {
      p(t, "class", "err svelte-1ubn3k7");
    },
    m(s, o) {
      M(s, t, o), f(t, r);
    },
    p(s, o) {
      o[0] & 1 && n !== (n = s[0](_e.FieldValidError) + "") && se(r, n);
    },
    d(s) {
      s && h(t);
    },
  };
}
function fm(e) {
  let t = e[0](_e.Submit) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p(r, s) {
      s[0] & 1 && t !== (t = r[0](_e.Submit) + "") && se(n, t);
    },
    d(r) {
      r && h(n);
    },
  };
}
function dm(e) {
  let t,
    n,
    r,
    s = e[0](_e.Title) + "",
    o,
    a,
    i,
    l,
    c,
    u,
    d = e[0](_e.CountryRegion) + "",
    m,
    g,
    v,
    _,
    I,
    C,
    k,
    D = e[0](_e.Province) + "",
    E,
    b,
    P,
    R,
    N,
    S,
    H,
    F = e[0](_e.City) + "",
    G,
    re,
    x,
    ae,
    V,
    ee,
    ie,
    Z,
    me = e[0](_e.LastName) + "",
    Ae,
    z,
    te,
    ne,
    Te,
    be,
    Pe,
    De,
    qe = e[0](_e.FirstName) + "",
    K,
    Ee,
    Se,
    J,
    de,
    Oe,
    Fe,
    ge,
    $e = e[0](_e.Birthday) + "",
    ct,
    on,
    ut,
    bt,
    pt,
    Ve,
    Ht,
    yt = e[0](_e.PhoneNumber) + "",
    vt,
    ze,
    Q,
    at,
    gt,
    Yt,
    nt,
    Tt,
    Ke,
    Kt,
    On = e[0](_e.Address) + "",
    Nn,
    jn,
    xe,
    Mn,
    Ln,
    zn,
    Ft,
    jt,
    Vt = e[0](_e.ZipCode) + "",
    fn,
    Jn,
    zt,
    Fn,
    hr,
    pr,
    Jt,
    mt,
    et = e[0](_e.Certificate) + "",
    we,
    Be,
    ke,
    dn,
    gr,
    ft,
    bn,
    Vn = e[0](_e.Id) + "",
    Xn,
    mr,
    Xt,
    _r,
    vr,
    Ct,
    Gt,
    dt;
  function Or(pe, he) {
    return pe[1] ? am : om;
  }
  let Zn = Or(e),
    Et = Zn(e);
  function Nr(pe, he) {
    return pe[2] ? lm : im;
  }
  let Gn = Nr(e),
    wt = Gn(e);
  function Yr(pe) {
    e[22](pe);
  }
  let yn = { type: "border", options: e[11] };
  e[3].country !== void 0 && (yn.value = e[3].country),
    (v = new Ns({ props: yn })),
    Ne.push(() => Xe(v, "value", Yr)),
    v.$on("change", e[16]);
  const Mr = [um, cm],
    xt = [];
  function Js(pe, he) {
    return pe[9].length === 0 ? 0 : 1;
  }
  (P = Js(e)), (R = xt[P] = Mr[P](e));
  function dl(pe) {
    e[25](pe);
  }
  let Xs = {};
  e[3].city !== void 0 && (Xs.value = e[3].city),
    (x = new nr({ props: Xs })),
    Ne.push(() => Xe(x, "value", dl)),
    x.$on("blur", function () {
      Qt(Ot(e[20], "city", e[3].city)) &&
        Ot(e[20], "city", e[3].city).apply(this, arguments);
    });
  let It = e[8].city.valid === !1 && Ja(e);
  function hl(pe) {
    e[26](pe);
  }
  let Zs = {};
  e[3].lastName !== void 0 && (Zs.value = e[3].lastName),
    (te = new nr({ props: Zs })),
    Ne.push(() => Xe(te, "value", hl)),
    te.$on("blur", function () {
      Qt(Ot(e[20], "lastName", e[3].lastName)) &&
        Ot(e[20], "lastName", e[3].lastName).apply(this, arguments);
    });
  let Dt = e[8].lastName.valid === !1 && Xa(e);
  function pl(pe) {
    e[27](pe);
  }
  let Gs = {};
  e[3].firstName !== void 0 && (Gs.value = e[3].firstName),
    (Se = new nr({ props: Gs })),
    Ne.push(() => Xe(Se, "value", pl)),
    Se.$on("blur", function () {
      Qt(Ot(e[20], "firstName", e[3].firstName)) &&
        Ot(e[20], "firstName", e[3].firstName).apply(this, arguments);
    });
  let kt = e[8].firstName.valid === !1 && Za(e);
  function gl(pe) {
    e[28](pe);
  }
  let xs = { LG: e[0] };
  e[3].birthday !== void 0 && (xs.value = e[3].birthday),
    (ut = new sm({ props: xs })),
    Ne.push(() => Xe(ut, "value", gl));
  function ml(pe) {
    e[29](pe);
  }
  function _l(pe) {
    e[30](pe);
  }
  let cs = {
    countryCode: e[3].countryCode ? "+" + e[3].countryCode : "",
    haveNoCountryCode: e[5],
  };
  e[3].phoneNumber !== void 0 && (cs.value = e[3].phoneNumber),
    e[6] !== void 0 && (cs.code = e[6]),
    (Q = new em({ props: cs })),
    Ne.push(() => Xe(Q, "value", ml)),
    Ne.push(() => Xe(Q, "code", _l)),
    Q.$on("blur", function () {
      Qt(Ot(e[20], "phoneNumber", e[3].phoneNumber)) &&
        Ot(e[20], "phoneNumber", e[3].phoneNumber).apply(this, arguments);
    });
  let St = e[8].phoneNumber.valid === !1 && Ga(e);
  function vl(pe) {
    e[31](pe);
  }
  let eo = {};
  e[3].address !== void 0 && (eo.value = e[3].address),
    (xe = new nr({ props: eo })),
    Ne.push(() => Xe(xe, "value", vl)),
    xe.$on("blur", function () {
      Qt(Ot(e[20], "address", e[3].address)) &&
        Ot(e[20], "address", e[3].address).apply(this, arguments);
    });
  let Pt = e[8].address.valid === !1 && xa(e);
  function bl(pe) {
    e[32](pe);
  }
  let to = {};
  e[3].zipCode !== void 0 && (to.value = e[3].zipCode),
    (zt = new nr({ props: to })),
    Ne.push(() => Xe(zt, "value", bl)),
    zt.$on("blur", function () {
      Qt(Ot(e[20], "zipCode", e[3].zipCode)) &&
        Ot(e[20], "zipCode", e[3].zipCode).apply(this, arguments);
    });
  let Rt = e[8].zipCode.valid === !1 && ei(e);
  function yl(pe) {
    e[33](pe);
  }
  let no = { type: "border", options: e[7] };
  e[3].documentType !== void 0 && (no.value = e[3].documentType),
    (ke = new Ur({ props: no })),
    Ne.push(() => Xe(ke, "value", yl)),
    ke.$on("change", e[19]);
  function Tl(pe) {
    e[34](pe);
  }
  let ro = {};
  e[3].documentNumber !== void 0 && (ro.value = e[3].documentNumber),
    (Xt = new nr({ props: ro })),
    Ne.push(() => Xe(Xt, "value", Tl)),
    Xt.$on("blur", function () {
      Qt(Ot(e[20], "documentNumber", e[3].documentNumber)) &&
        Ot(e[20], "documentNumber", e[3].documentNumber).apply(this, arguments);
    });
  let At = e[8].documentNumber.valid === !1 && ti(e);
  return (
    (Gt = new pi({
      props: {
        class: "wp100",
        type: "primary",
        loading: e[4],
        disabled: e[10],
        $$slots: { default: [fm] },
        $$scope: { ctx: e },
      },
    })),
    Gt.$on("click", e[17]),
    {
      c() {
        (t = y("div")),
          Et.c(),
          (n = A()),
          (r = y("div")),
          (o = B(s)),
          (a = A()),
          wt.c(),
          (i = A()),
          (l = y("form")),
          (c = y("div")),
          (u = y("div")),
          (m = B(d)),
          (g = A()),
          le(v.$$.fragment),
          (I = A()),
          (C = y("div")),
          (k = y("div")),
          (E = B(D)),
          (b = A()),
          R.c(),
          (N = A()),
          (S = y("div")),
          (H = y("div")),
          (G = B(F)),
          (re = A()),
          le(x.$$.fragment),
          (V = A()),
          It && It.c(),
          (ee = A()),
          (ie = y("div")),
          (Z = y("div")),
          (Ae = B(me)),
          (z = A()),
          le(te.$$.fragment),
          (Te = A()),
          Dt && Dt.c(),
          (be = A()),
          (Pe = y("div")),
          (De = y("div")),
          (K = B(qe)),
          (Ee = A()),
          le(Se.$$.fragment),
          (de = A()),
          kt && kt.c(),
          (Oe = A()),
          (Fe = y("div")),
          (ge = y("div")),
          (ct = B($e)),
          (on = A()),
          le(ut.$$.fragment),
          (pt = A()),
          (Ve = y("div")),
          (Ht = y("div")),
          (vt = B(yt)),
          (ze = A()),
          le(Q.$$.fragment),
          (Yt = A()),
          St && St.c(),
          (nt = A()),
          (Tt = y("div")),
          (Ke = y("div")),
          (Kt = y("div")),
          (Nn = B(On)),
          (jn = A()),
          le(xe.$$.fragment),
          (Ln = A()),
          Pt && Pt.c(),
          (zn = A()),
          (Ft = y("div")),
          (jt = y("div")),
          (fn = B(Vt)),
          (Jn = A()),
          le(zt.$$.fragment),
          (hr = A()),
          Rt && Rt.c(),
          (pr = A()),
          (Jt = y("div")),
          (mt = y("div")),
          (we = B(et)),
          (Be = A()),
          le(ke.$$.fragment),
          (gr = A()),
          (ft = y("div")),
          (bn = y("div")),
          (Xn = B(Vn)),
          (mr = A()),
          le(Xt.$$.fragment),
          (vr = A()),
          At && At.c(),
          (Ct = A()),
          le(Gt.$$.fragment),
          this.h();
      },
      l(pe) {
        t = T(pe, "DIV", { class: !0 });
        var he = w(t);
        Et.l(he), (n = O(he)), (r = T(he, "DIV", { class: !0 }));
        var br = w(r);
        (o = U(br, s)),
          br.forEach(h),
          (a = O(he)),
          wt.l(he),
          (i = O(he)),
          (l = T(he, "FORM", { class: !0 }));
        var Je = w(l);
        c = T(Je, "DIV", { class: !0 });
        var xn = w(c);
        u = T(xn, "DIV", { class: !0 });
        var Lr = w(u);
        (m = U(Lr, d)),
          Lr.forEach(h),
          (g = O(xn)),
          ce(v.$$.fragment, xn),
          xn.forEach(h),
          (I = O(Je)),
          (C = T(Je, "DIV", { class: !0 }));
        var er = w(C);
        k = T(er, "DIV", { class: !0 });
        var yr = w(k);
        (E = U(yr, D)),
          yr.forEach(h),
          (b = O(er)),
          R.l(er),
          er.forEach(h),
          (N = O(Je)),
          (S = T(Je, "DIV", { class: !0 }));
        var en = w(S);
        H = T(en, "DIV", { class: !0 });
        var Fr = w(H);
        (G = U(Fr, F)),
          Fr.forEach(h),
          (re = O(en)),
          ce(x.$$.fragment, en),
          (V = O(en)),
          It && It.l(en),
          en.forEach(h),
          (ee = O(Je)),
          (ie = T(Je, "DIV", { class: !0 }));
        var Tn = w(ie);
        Z = T(Tn, "DIV", { class: !0 });
        var Tr = w(Z);
        (Ae = U(Tr, me)),
          Tr.forEach(h),
          (z = O(Tn)),
          ce(te.$$.fragment, Tn),
          (Te = O(Tn)),
          Dt && Dt.l(Tn),
          Tn.forEach(h),
          (be = O(Je)),
          (Pe = T(Je, "DIV", { class: !0 }));
        var Cn = w(Pe);
        De = T(Cn, "DIV", { class: !0 });
        var tr = w(De);
        (K = U(tr, qe)),
          tr.forEach(h),
          (Ee = O(Cn)),
          ce(Se.$$.fragment, Cn),
          (de = O(Cn)),
          kt && kt.l(Cn),
          Cn.forEach(h),
          (Oe = O(Je)),
          (Fe = T(Je, "DIV", { class: !0 }));
        var Qr = w(Fe);
        ge = T(Qr, "DIV", { class: !0 });
        var so = w(ge);
        (ct = U(so, $e)),
          so.forEach(h),
          (on = O(Qr)),
          ce(ut.$$.fragment, Qr),
          Qr.forEach(h),
          (pt = O(Je)),
          (Ve = T(Je, "DIV", { class: !0 }));
        var Cr = w(Ve);
        Ht = T(Cr, "DIV", { class: !0 });
        var oo = w(Ht);
        (vt = U(oo, yt)),
          oo.forEach(h),
          (ze = O(Cr)),
          ce(Q.$$.fragment, Cr),
          (Yt = O(Cr)),
          St && St.l(Cr),
          Cr.forEach(h),
          (nt = O(Je)),
          (Tt = T(Je, "DIV", { class: !0 }));
        var Wr = w(Tt);
        Ke = T(Wr, "DIV", { class: !0 });
        var Er = w(Ke);
        Kt = T(Er, "DIV", { class: !0 });
        var ao = w(Kt);
        (Nn = U(ao, On)),
          ao.forEach(h),
          (jn = O(Er)),
          ce(xe.$$.fragment, Er),
          (Ln = O(Er)),
          Pt && Pt.l(Er),
          Er.forEach(h),
          (zn = O(Wr)),
          (Ft = T(Wr, "DIV", { class: !0 }));
        var wr = w(Ft);
        jt = T(wr, "DIV", { class: !0 });
        var io = w(jt);
        (fn = U(io, Vt)),
          io.forEach(h),
          (Jn = O(wr)),
          ce(zt.$$.fragment, wr),
          (hr = O(wr)),
          Rt && Rt.l(wr),
          wr.forEach(h),
          Wr.forEach(h),
          (pr = O(Je)),
          (Jt = T(Je, "DIV", { class: !0 }));
        var qr = w(Jt);
        mt = T(qr, "DIV", { class: !0 });
        var lo = w(mt);
        (we = U(lo, et)),
          lo.forEach(h),
          (Be = O(qr)),
          ce(ke.$$.fragment, qr),
          qr.forEach(h),
          (gr = O(Je)),
          (ft = T(Je, "DIV", { class: !0 }));
        var Ir = w(ft);
        bn = T(Ir, "DIV", { class: !0 });
        var co = w(bn);
        (Xn = U(co, Vn)),
          co.forEach(h),
          (mr = O(Ir)),
          ce(Xt.$$.fragment, Ir),
          (vr = O(Ir)),
          At && At.l(Ir),
          Ir.forEach(h),
          Je.forEach(h),
          (Ct = O(he)),
          ce(Gt.$$.fragment, he),
          he.forEach(h),
          this.h();
      },
      h() {
        p(r, "class", "mb20 f18 b"),
          p(u, "class", "label svelte-1ubn3k7"),
          p(c, "class", "form-item svelte-1ubn3k7"),
          p(k, "class", "label svelte-1ubn3k7"),
          p(C, "class", "form-item svelte-1ubn3k7"),
          p(H, "class", "label mb8 f14 T4 svelte-1ubn3k7"),
          p(S, "class", "form-item mt24 svelte-1ubn3k7"),
          p(Z, "class", "label svelte-1ubn3k7"),
          p(ie, "class", "form-item svelte-1ubn3k7"),
          p(De, "class", "label svelte-1ubn3k7"),
          p(Pe, "class", "form-item svelte-1ubn3k7"),
          p(ge, "class", "label svelte-1ubn3k7"),
          p(Fe, "class", "form-item svelte-1ubn3k7"),
          p(Ht, "class", "label svelte-1ubn3k7"),
          p(Ve, "class", "form-item svelte-1ubn3k7"),
          p(Kt, "class", "label svelte-1ubn3k7"),
          p(Ke, "class", "form-item f1 svelte-1ubn3k7"),
          p(jt, "class", "label svelte-1ubn3k7"),
          p(Ft, "class", "form-item f1 ml10 svelte-1ubn3k7"),
          p(Tt, "class", "col svelte-1ubn3k7"),
          p(mt, "class", "label svelte-1ubn3k7"),
          p(Jt, "class", "form-item svelte-1ubn3k7"),
          p(bn, "class", "label svelte-1ubn3k7"),
          p(ft, "class", "form-item svelte-1ubn3k7"),
          p(l, "class", "svelte-1ubn3k7"),
          p(t, "class", "wrap svelte-1ubn3k7");
      },
      m(pe, he) {
        M(pe, t, he),
          Et.m(t, null),
          f(t, n),
          f(t, r),
          f(r, o),
          f(t, a),
          wt.m(t, null),
          f(t, i),
          f(t, l),
          f(l, c),
          f(c, u),
          f(u, m),
          f(c, g),
          ue(v, c, null),
          f(l, I),
          f(l, C),
          f(C, k),
          f(k, E),
          f(C, b),
          xt[P].m(C, null),
          f(l, N),
          f(l, S),
          f(S, H),
          f(H, G),
          f(S, re),
          ue(x, S, null),
          f(S, V),
          It && It.m(S, null),
          f(l, ee),
          f(l, ie),
          f(ie, Z),
          f(Z, Ae),
          f(ie, z),
          ue(te, ie, null),
          f(ie, Te),
          Dt && Dt.m(ie, null),
          f(l, be),
          f(l, Pe),
          f(Pe, De),
          f(De, K),
          f(Pe, Ee),
          ue(Se, Pe, null),
          f(Pe, de),
          kt && kt.m(Pe, null),
          f(l, Oe),
          f(l, Fe),
          f(Fe, ge),
          f(ge, ct),
          f(Fe, on),
          ue(ut, Fe, null),
          f(l, pt),
          f(l, Ve),
          f(Ve, Ht),
          f(Ht, vt),
          f(Ve, ze),
          ue(Q, Ve, null),
          f(Ve, Yt),
          St && St.m(Ve, null),
          f(l, nt),
          f(l, Tt),
          f(Tt, Ke),
          f(Ke, Kt),
          f(Kt, Nn),
          f(Ke, jn),
          ue(xe, Ke, null),
          f(Ke, Ln),
          Pt && Pt.m(Ke, null),
          f(Tt, zn),
          f(Tt, Ft),
          f(Ft, jt),
          f(jt, fn),
          f(Ft, Jn),
          ue(zt, Ft, null),
          f(Ft, hr),
          Rt && Rt.m(Ft, null),
          f(l, pr),
          f(l, Jt),
          f(Jt, mt),
          f(mt, we),
          f(Jt, Be),
          ue(ke, Jt, null),
          f(l, gr),
          f(l, ft),
          f(ft, bn),
          f(bn, Xn),
          f(ft, mr),
          ue(Xt, ft, null),
          f(ft, vr),
          At && At.m(ft, null),
          f(t, Ct),
          ue(Gt, t, null),
          (dt = !0);
      },
      p(pe, he) {
        (e = pe),
          Zn === (Zn = Or(e)) && Et
            ? Et.p(e, he)
            : (Et.d(1), (Et = Zn(e)), Et && (Et.c(), Et.m(t, n))),
          (!dt || he[0] & 1) && s !== (s = e[0](_e.Title) + "") && se(o, s),
          Gn === (Gn = Nr(e)) && wt
            ? wt.p(e, he)
            : (wt.d(1), (wt = Gn(e)), wt && (wt.c(), wt.m(t, i))),
          (!dt || he[0] & 1) &&
            d !== (d = e[0](_e.CountryRegion) + "") &&
            se(m, d);
        const br = {};
        he[0] & 2048 && (br.options = e[11]),
          !_ &&
            he[0] & 8 &&
            ((_ = !0), (br.value = e[3].country), Ze(() => (_ = !1))),
          v.$set(br),
          (!dt || he[0] & 1) && D !== (D = e[0](_e.Province) + "") && se(E, D);
        let Je = P;
        (P = Js(e)),
          P === Je
            ? xt[P].p(e, he)
            : (Mt(),
              q(xt[Je], 1, 1, () => {
                xt[Je] = null;
              }),
              Lt(),
              (R = xt[P]),
              R ? R.p(e, he) : ((R = xt[P] = Mr[P](e)), R.c()),
              Y(R, 1),
              R.m(C, null)),
          (!dt || he[0] & 1) && F !== (F = e[0](_e.City) + "") && se(G, F);
        const xn = {};
        !ae &&
          he[0] & 8 &&
          ((ae = !0), (xn.value = e[3].city), Ze(() => (ae = !1))),
          x.$set(xn),
          e[8].city.valid === !1
            ? It
              ? It.p(e, he)
              : ((It = Ja(e)), It.c(), It.m(S, null))
            : It && (It.d(1), (It = null)),
          (!dt || he[0] & 1) &&
            me !== (me = e[0](_e.LastName) + "") &&
            se(Ae, me);
        const Lr = {};
        !ne &&
          he[0] & 8 &&
          ((ne = !0), (Lr.value = e[3].lastName), Ze(() => (ne = !1))),
          te.$set(Lr),
          e[8].lastName.valid === !1
            ? Dt
              ? Dt.p(e, he)
              : ((Dt = Xa(e)), Dt.c(), Dt.m(ie, null))
            : Dt && (Dt.d(1), (Dt = null)),
          (!dt || he[0] & 1) &&
            qe !== (qe = e[0](_e.FirstName) + "") &&
            se(K, qe);
        const er = {};
        !J &&
          he[0] & 8 &&
          ((J = !0), (er.value = e[3].firstName), Ze(() => (J = !1))),
          Se.$set(er),
          e[8].firstName.valid === !1
            ? kt
              ? kt.p(e, he)
              : ((kt = Za(e)), kt.c(), kt.m(Pe, null))
            : kt && (kt.d(1), (kt = null)),
          (!dt || he[0] & 1) &&
            $e !== ($e = e[0](_e.Birthday) + "") &&
            se(ct, $e);
        const yr = {};
        he[0] & 1 && (yr.LG = e[0]),
          !bt &&
            he[0] & 8 &&
            ((bt = !0), (yr.value = e[3].birthday), Ze(() => (bt = !1))),
          ut.$set(yr),
          (!dt || he[0] & 1) &&
            yt !== (yt = e[0](_e.PhoneNumber) + "") &&
            se(vt, yt);
        const en = {};
        he[0] & 8 &&
          (en.countryCode = e[3].countryCode ? "+" + e[3].countryCode : ""),
          he[0] & 32 && (en.haveNoCountryCode = e[5]),
          !at &&
            he[0] & 8 &&
            ((at = !0), (en.value = e[3].phoneNumber), Ze(() => (at = !1))),
          !gt &&
            he[0] & 64 &&
            ((gt = !0), (en.code = e[6]), Ze(() => (gt = !1))),
          Q.$set(en),
          e[8].phoneNumber.valid === !1
            ? St
              ? St.p(e, he)
              : ((St = Ga(e)), St.c(), St.m(Ve, null))
            : St && (St.d(1), (St = null)),
          (!dt || he[0] & 1) &&
            On !== (On = e[0](_e.Address) + "") &&
            se(Nn, On);
        const Fr = {};
        !Mn &&
          he[0] & 8 &&
          ((Mn = !0), (Fr.value = e[3].address), Ze(() => (Mn = !1))),
          xe.$set(Fr),
          e[8].address.valid === !1
            ? Pt
              ? Pt.p(e, he)
              : ((Pt = xa(e)), Pt.c(), Pt.m(Ke, null))
            : Pt && (Pt.d(1), (Pt = null)),
          (!dt || he[0] & 1) &&
            Vt !== (Vt = e[0](_e.ZipCode) + "") &&
            se(fn, Vt);
        const Tn = {};
        !Fn &&
          he[0] & 8 &&
          ((Fn = !0), (Tn.value = e[3].zipCode), Ze(() => (Fn = !1))),
          zt.$set(Tn),
          e[8].zipCode.valid === !1
            ? Rt
              ? Rt.p(e, he)
              : ((Rt = ei(e)), Rt.c(), Rt.m(Ft, null))
            : Rt && (Rt.d(1), (Rt = null)),
          (!dt || he[0] & 1) &&
            et !== (et = e[0](_e.Certificate) + "") &&
            se(we, et);
        const Tr = {};
        he[0] & 128 && (Tr.options = e[7]),
          !dn &&
            he[0] & 8 &&
            ((dn = !0), (Tr.value = e[3].documentType), Ze(() => (dn = !1))),
          ke.$set(Tr),
          (!dt || he[0] & 1) && Vn !== (Vn = e[0](_e.Id) + "") && se(Xn, Vn);
        const Cn = {};
        !_r &&
          he[0] & 8 &&
          ((_r = !0), (Cn.value = e[3].documentNumber), Ze(() => (_r = !1))),
          Xt.$set(Cn),
          e[8].documentNumber.valid === !1
            ? At
              ? At.p(e, he)
              : ((At = ti(e)), At.c(), At.m(ft, null))
            : At && (At.d(1), (At = null));
        const tr = {};
        he[0] & 16 && (tr.loading = e[4]),
          he[0] & 1024 && (tr.disabled = e[10]),
          (he[0] & 1) | (he[1] & 4096) && (tr.$$scope = { dirty: he, ctx: e }),
          Gt.$set(tr);
      },
      i(pe) {
        dt ||
          (Y(v.$$.fragment, pe),
          Y(R),
          Y(x.$$.fragment, pe),
          Y(te.$$.fragment, pe),
          Y(Se.$$.fragment, pe),
          Y(ut.$$.fragment, pe),
          Y(Q.$$.fragment, pe),
          Y(xe.$$.fragment, pe),
          Y(zt.$$.fragment, pe),
          Y(ke.$$.fragment, pe),
          Y(Xt.$$.fragment, pe),
          Y(Gt.$$.fragment, pe),
          (dt = !0));
      },
      o(pe) {
        q(v.$$.fragment, pe),
          q(R),
          q(x.$$.fragment, pe),
          q(te.$$.fragment, pe),
          q(Se.$$.fragment, pe),
          q(ut.$$.fragment, pe),
          q(Q.$$.fragment, pe),
          q(xe.$$.fragment, pe),
          q(zt.$$.fragment, pe),
          q(ke.$$.fragment, pe),
          q(Xt.$$.fragment, pe),
          q(Gt.$$.fragment, pe),
          (dt = !1);
      },
      d(pe) {
        pe && h(t),
          Et.d(),
          wt.d(),
          fe(v),
          xt[P].d(),
          fe(x),
          It && It.d(),
          fe(te),
          Dt && Dt.d(),
          fe(Se),
          kt && kt.d(),
          fe(ut),
          fe(Q),
          St && St.d(),
          fe(xe),
          Pt && Pt.d(),
          fe(zt),
          Rt && Rt.d(),
          fe(ke),
          fe(Xt),
          At && At.d(),
          fe(Gt);
      },
    }
  );
}
function hm(e) {
  let t, n;
  return (
    (t = new sn({
      props: {
        visible: !0,
        class: "modal-basic-kyc",
        $$slots: { default: [dm] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        (s[0] & 8191) | (s[1] & 4096) && (o.$$scope = { dirty: s, ctx: r }),
          t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function pm(e) {
  return /^[0-9a-zA-Z]{3,10}$/.test(e);
}
function gm(e) {
  return /^[0-9a-zA-Z]{5,50}$/.test(e);
}
function mm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    e.charCodeAt(n) <= 127 ? (t += 1) : (t += 2);
  return t;
}
function _m(e, t, n = 0) {
  const r = mm(String(e));
  return !(r > t || r < n);
}
function vm(e, t) {
  return !e || !e[t]
    ? []
    : e[t]
        .map((n) => ({ text: n, value: n }))
        .concat({ text: "Other", value: "Other" });
}
function bm(e, t, n) {
  let r, s, o, a, i, l, c;
  Me(e, Qs, (K) => n(11, (o = K))),
    Me(e, Gr, (K) => n(35, (a = K))),
    Me(e, ki, (K) => n(21, (i = K))),
    Me(e, ss, (K) => n(36, (l = K))),
    Me(e, Di, (K) => n(12, (c = K)));
  let { LG: u } = t,
    { closeable: d } = t,
    { callback: m } = t;
  const g = Ut(),
    v = `${Dn.STATIC_URL}/pubimg/66928f9779901d567eab1171acf8541c63769183b6f4e23c926819e8b26a83b7.png`,
    _ = `${Dn.STATIC_URL}/pubimg/cfbf8bca49e34ba0a2c9c8353b17abd9ee5d8545479a4f416b6b0b4d5636c543.png`;
  let I = [],
    C = {
      id: null,
      userId: l.userId,
      country: "",
      province: "",
      city: "",
      birthday: "",
      address: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      documentType: 1,
      documentNumber: "",
      phoneNumber: 0,
      countryCode: "",
    },
    k = !1,
    D = !1,
    E = 0,
    b = {
      province: { valid: null, maxLen: 50, minLen: 1 },
      city: { valid: null, maxLen: 50, minLen: 1 },
      firstName: { valid: null, maxLen: 50, minLen: 1 },
      lastName: { valid: null, maxLen: 50, minLen: 1 },
      phoneNumber: { valid: null, maxLen: 20, minLen: 5 },
      address: { valid: null, maxLen: 100, minLen: 1 },
      zipCode: { valid: null, validator: pm },
      documentNumber: { valid: null, validator: gm },
    };
  tt(() => {
    an.track("basic_information_exposure"),
      Ri.next(),
      Pi.next(),
      _u(),
      m || Si.next();
    const K = Gr.subscribe(() => {
      Object.keys(C).forEach((Ee) => {
        a[Ee] &&
          (n(3, (C[Ee] = a[Ee]), C),
          a.phoneNo &&
            (n(6, (E = a.phoneNo.split("-")[0])),
            n(3, (C.countryCode = a.phoneNo.split("-")[0]), C),
            n(3, (C.phoneNumber = a.phoneNo.split("-")[1]), C)));
      }),
        a.country && (S(a.country), H(a.country));
    });
    return function () {
      K.unsubscribe();
    };
  });
  function P(K, Ee) {
    K && Ee && n(3, (C.countryCode = Ee), C);
  }
  function R() {
    an.track("basic_information_button_click", { button_name: "skip" }), N();
  }
  function N() {
    localStorage.removeItem("base-kyc-status"), Jr.next(), g("close");
  }
  async function S(K) {
    const { data: Ee, error: Se } = await Yn.getDocumentTypesByCountry(K);
    Ee &&
      n(
        7,
        (I = Object.entries(Ee).map(([J]) => ({
          text: u(_e[`Id${J}`]),
          value: Number(J),
        })))
      ),
      Se && oe.send("toast", "error", Se);
  }
  function H(K) {
    n(5, (D = !1));
    const Ee = o.find((Se) => Se.value === K);
    if (K === "OTH") {
      n(5, (D = !0)), n(6, (E = 1));
      return;
    }
    if (!Ee) {
      n(3, (C.country = "OTH"), C), n(6, (E = 1)), n(5, (D = !0));
      return;
    }
    n(3, (C.countryCode = Ee.countryCode), C);
  }
  function F(K) {
    n(3, (C.documentType = 1), C),
      n(3, (C.documentNumber = ""), C),
      S(K.detail.value),
      H(K.detail.value);
  }
  async function G() {
    if (
      (an.track("basic_information_button_click", { button_name: "submit" }),
      !ae(C))
    ) {
      an.track("basic_information_validator_failed", {
        button_name: "submit",
        formData: C,
      });
      return;
    }
    n(4, (k = !0));
    const K = {
        ...C,
        phoneNo: (D ? E : C.countryCode) + "-" + C.phoneNumber,
        countryName: o.find((J) => J.value === C.country).text,
      },
      { data: Ee, error: Se } = await Yn.setBasicKycInfo(K);
    n(4, (k = !1)), Ee && (m && m(), N()), Se && oe.send("toast", "error", Se);
  }
  function re() {
    an.track("basic_information_button_click", { button_name: "log_out" }),
      yi.next({ manual: !0 });
  }
  function x() {
    n(3, (C.documentNumber = ""), C);
  }
  function ae(K) {
    return Object.keys(K)
      .map((Ee) => V(Ee, K[Ee]))
      .every((Ee) => !!Ee);
  }
  function V(K, Ee) {
    if (b.hasOwnProperty(K)) {
      const Se = b[K];
      let J = !0;
      return (
        (Se.hasOwnProperty("maxLen") || Se.hasOwnProperty("minLen")) &&
          (J = _m(Ee, Se.maxLen, Se.minLen || 0)),
        Se.hasOwnProperty("validator") && (J = Se.validator(Ee)),
        n(8, (b[K].valid = J), b),
        J
      );
    }
    return !0;
  }
  function ee(K) {
    e.$$.not_equal(C.country, K) && ((C.country = K), n(3, C));
  }
  function ie(K) {
    e.$$.not_equal(C.province, K) && ((C.province = K), n(3, C));
  }
  function Z(K) {
    e.$$.not_equal(C.province, K) && ((C.province = K), n(3, C));
  }
  function me(K) {
    e.$$.not_equal(C.city, K) && ((C.city = K), n(3, C));
  }
  function Ae(K) {
    e.$$.not_equal(C.lastName, K) && ((C.lastName = K), n(3, C));
  }
  function z(K) {
    e.$$.not_equal(C.firstName, K) && ((C.firstName = K), n(3, C));
  }
  function te(K) {
    e.$$.not_equal(C.birthday, K) && ((C.birthday = K), n(3, C));
  }
  function ne(K) {
    e.$$.not_equal(C.phoneNumber, K) && ((C.phoneNumber = K), n(3, C));
  }
  function Te(K) {
    (E = K), n(6, E);
  }
  function be(K) {
    e.$$.not_equal(C.address, K) && ((C.address = K), n(3, C));
  }
  function Pe(K) {
    e.$$.not_equal(C.zipCode, K) && ((C.zipCode = K), n(3, C));
  }
  function De(K) {
    e.$$.not_equal(C.documentType, K) && ((C.documentType = K), n(3, C));
  }
  function qe(K) {
    e.$$.not_equal(C.documentNumber, K) && ((C.documentNumber = K), n(3, C));
  }
  return (
    (e.$$set = (K) => {
      "LG" in K && n(0, (u = K.LG)),
        "closeable" in K && n(1, (d = K.closeable)),
        "callback" in K && n(2, (m = K.callback));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 96 && P(D, E),
        e.$$.dirty[0] & 24 &&
          n(
            10,
            (r =
              Object.entries(C)
                .filter(([K]) => K !== "id")
                .some(([K, Ee]) => !Ee) || k)
          ),
        e.$$.dirty[0] & 2097160 && n(9, (s = vm(i, C.country)));
    }),
    [
      u,
      d,
      m,
      C,
      k,
      D,
      E,
      I,
      b,
      s,
      r,
      o,
      c,
      v,
      _,
      R,
      F,
      G,
      re,
      x,
      V,
      i,
      ee,
      ie,
      Z,
      me,
      Ae,
      z,
      te,
      ne,
      Te,
      be,
      Pe,
      De,
      qe,
    ]
  );
}
class ym extends He {
  constructor(t) {
    super(),
      Ye(
        this,
        t,
        bm,
        hm,
        Qe,
        { LG: 0, closeable: 1, callback: 2 },
        null,
        [-1, -1]
      );
  }
}
function Tm(e) {
  let t = e[0](_e.Logout) + "",
    n;
  return {
    c() {
      n = B(t);
    },
    l(r) {
      n = U(r, t);
    },
    m(r, s) {
      M(r, n, s);
    },
    p: je,
    d(r) {
      r && h(n);
    },
  };
}
function Cm(e) {
  let t,
    n,
    r,
    s,
    o,
    a = e[0](_e.SubLogout) + "",
    i,
    l,
    c,
    u;
  return (
    (c = new Bt({
      props: {
        class: "f16",
        newRadius: !0,
        type: "primary",
        $$slots: { default: [Tm] },
        $$scope: { ctx: e },
      },
    })),
    c.$on("click", e[2]),
    {
      c() {
        (t = y("div")),
          (n = y("img")),
          (s = A()),
          (o = y("div")),
          (i = B(a)),
          (l = A()),
          le(c.$$.fragment),
          this.h();
      },
      l(d) {
        t = T(d, "DIV", { class: !0 });
        var m = w(t);
        (n = T(m, "IMG", { class: !0, src: !0, alt: !0 })),
          (s = O(m)),
          (o = T(m, "DIV", { class: !0 }));
        var g = w(o);
        (i = U(g, a)),
          g.forEach(h),
          (l = O(m)),
          ce(c.$$.fragment, m),
          m.forEach(h),
          this.h();
      },
      h() {
        p(n, "class", "icon svelte-fz10ip"),
          st(n.src, (r = e[1])) || p(n, "src", r),
          p(n, "alt", "info-icon"),
          p(o, "class", "content f16 svelte-fz10ip"),
          p(t, "class", "tc");
      },
      m(d, m) {
        M(d, t, m),
          f(t, n),
          f(t, s),
          f(t, o),
          f(o, i),
          f(t, l),
          ue(c, t, null),
          (u = !0);
      },
      p(d, m) {
        const g = {};
        m & 8 && (g.$$scope = { dirty: m, ctx: d }), c.$set(g);
      },
      i(d) {
        u || (Y(c.$$.fragment, d), (u = !0));
      },
      o(d) {
        q(c.$$.fragment, d), (u = !1);
      },
      d(d) {
        d && h(t), fe(c);
      },
    }
  );
}
function Em(e) {
  let t, n;
  return (
    (t = new sn({
      props: { visible: !0, $$slots: { default: [Cm] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        le(t.$$.fragment);
      },
      l(r) {
        ce(t.$$.fragment, r);
      },
      m(r, s) {
        ue(t, r, s), (n = !0);
      },
      p(r, [s]) {
        const o = {};
        s & 8 && (o.$$scope = { dirty: s, ctx: r }), t.$set(o);
      },
      i(r) {
        n || (Y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        q(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        fe(t, r);
      },
    }
  );
}
function wm(e) {
  const t = Pn("LG"),
    n = `${Dn.STATIC_URL}/pubimg/9a4c8b7bac33e49bdd74998cd9e7fe32c84405f6121bc6869fa74d0fc66ca95c.png`;
  function r() {
    yi.next({ manual: !0 }), localStorage.removeItem("base-kyc-status");
  }
  return [t, n, r];
}
class Im extends He {
  constructor(t) {
    super(), Ye(this, t, wm, Em, Qe, {});
  }
}
const { document: En } = Os;
function Dm(e) {
  let t;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(n) {
      (t = T(n, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      p(t, "rel", "canonical"),
        p(t, "href", location.origin + location.pathname);
    },
    m(n, r) {
      M(n, t, r);
    },
    p: je,
    d(n) {
      n && h(t);
    },
  };
}
function ni(e) {
  let t, n, r, s, o, a, i;
  return {
    c() {
      (t = y("meta")),
        (n = A()),
        (r = y("meta")),
        (s = A()),
        (o = y("meta")),
        (a = A()),
        (i = y("meta")),
        this.h();
    },
    l(l) {
      (t = T(l, "META", { name: !0, content: !0 })),
        (n = O(l)),
        (r = T(l, "META", { name: !0, content: !0 })),
        (s = O(l)),
        (o = T(l, "META", { name: !0, content: !0 })),
        (a = O(l)),
        (i = T(l, "META", { name: !0, content: !0 })),
        this.h();
    },
    h() {
      p(t, "name", "twitter:card"),
        p(t, "content", "summary_large_image"),
        p(r, "name", "twitter:site"),
        p(r, "content", "@BitYaris_official"),
        p(o, "name", "twitter:title"),
        p(
          o,
          "content",
          "BitYaris: Buy & Sell Crypto | Trade BTC and Crypto Derivatives"
        ),
        p(i, "name", "twitter:image"),
        p(i, "content", Bs.OG_NORMAL);
    },
    m(l, c) {
      M(l, t, c),
        M(l, n, c),
        M(l, r, c),
        M(l, s, c),
        M(l, o, c),
        M(l, a, c),
        M(l, i, c);
    },
    p: je,
    d(l) {
      l && h(t),
        l && h(n),
        l && h(r),
        l && h(s),
        l && h(o),
        l && h(a),
        l && h(i);
    },
  };
}
function ri(e) {
  let t, n, r, s, o;
  return {
    c() {
      (t = y("meta")),
        (n = A()),
        (r = y("meta")),
        (s = A()),
        (o = y("meta")),
        this.h();
    },
    l(a) {
      (t = T(a, "META", { name: !0, content: !0 })),
        (n = O(a)),
        (r = T(a, "META", { name: !0, content: !0 })),
        (s = O(a)),
        (o = T(a, "META", { name: !0, content: !0 })),
        this.h();
    },
    h() {
      p(t, "name", "og:title"),
        p(
          t,
          "content",
          "BitYaris: Buy & Sell Crypto | Trade BTC and Crypto Derivatives"
        ),
        p(r, "name", "og:description"),
        p(
          r,
          "content",
          "BitYaris is the fastest crypto exchange and crypto derivatives platform. Buy, Sell & Earn Bitcoin, Ether, & altcoin. Trade perpetual contracts with 100x Leverage."
        ),
        p(o, "name", "og:image"),
        p(o, "content", Bs.OG_NORMAL);
    },
    m(a, i) {
      M(a, t, i), M(a, n, i), M(a, r, i), M(a, s, i), M(a, o, i);
    },
    p: je,
    d(a) {
      a && h(t), a && h(n), a && h(r), a && h(s), a && h(o);
    },
  };
}
function km(e) {
  let t;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(n) {
      (t = T(n, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      p(t, "rel", "shortcut icon"),
        p(t, "href", "https://i.postimg.cc/jScfByB5/favicon.png");
    },
    m(n, r) {
      M(n, t, r);
    },
    d(n) {
      n && h(t);
    },
  };
}
function Sm(e) {
  let t;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(n) {
      (t = T(n, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      p(t, "rel", "shortcut icon"),
        p(
          t,
          "href",
          "https://img.phemex.com/v1/22c61c50-f468-405f-86cd-bbafb7b2d8e7/favicon-pulse-social.ico"
        );
    },
    m(n, r) {
      M(n, t, r);
    },
    d(n) {
      n && h(t);
    },
  };
}
function Pm(e) {
  let t = e[5](),
    n,
    r,
    s,
    o,
    a,
    i,
    l,
    c,
    u,
    d,
    m,
    g,
    v,
    _,
    I,
    C,
    k,
    D,
    E,
    b,
    P,
    R;
  Qn(e[17]);
  let N = t && Dm(),
    S = !e[0] && ni(),
    H = !e[1] && ri();
  function F(V, ee) {
    return Bn.isJapanSite ? Sm : km;
  }
  let re = F()(e);
  i = new Ac({});
  const x = e[16].default,
    ae = pn(x, e, e[15], null);
  return (
    (u = new Lu({})),
    (m = new vf({})),
    (v = new Sf({})),
    (I = new Ug({})),
    (k = new Wg({})),
    (E = new rc({})),
    {
      c() {
        N && N.c(),
          (n = Ue()),
          S && S.c(),
          (r = Ue()),
          H && H.c(),
          (s = Ue()),
          re.c(),
          (o = Ue()),
          (a = A()),
          le(i.$$.fragment),
          (l = A()),
          ae && ae.c(),
          (c = A()),
          le(u.$$.fragment),
          (d = A()),
          le(m.$$.fragment),
          (g = A()),
          le(v.$$.fragment),
          (_ = A()),
          le(I.$$.fragment),
          (C = A()),
          le(k.$$.fragment),
          (D = A()),
          le(E.$$.fragment);
      },
      l(V) {
        const ee = Rl("svelte-1bwu4l0", En.head);
        N && N.l(ee),
          (n = Ue()),
          S && S.l(ee),
          (r = Ue()),
          H && H.l(ee),
          (s = Ue()),
          re.l(ee),
          (o = Ue()),
          ee.forEach(h),
          (a = O(V)),
          ce(i.$$.fragment, V),
          (l = O(V)),
          ae && ae.l(V),
          (c = O(V)),
          ce(u.$$.fragment, V),
          (d = O(V)),
          ce(m.$$.fragment, V),
          (g = O(V)),
          ce(v.$$.fragment, V),
          (_ = O(V)),
          ce(I.$$.fragment, V),
          (C = O(V)),
          ce(k.$$.fragment, V),
          (D = O(V)),
          ce(E.$$.fragment, V);
      },
      m(V, ee) {
        N && N.m(En.head, null),
          f(En.head, n),
          S && S.m(En.head, null),
          f(En.head, r),
          H && H.m(En.head, null),
          f(En.head, s),
          re.m(En.head, null),
          f(En.head, o),
          M(V, a, ee),
          ue(i, V, ee),
          M(V, l, ee),
          ae && ae.m(V, ee),
          M(V, c, ee),
          ue(u, V, ee),
          M(V, d, ee),
          ue(m, V, ee),
          M(V, g, ee),
          ue(v, V, ee),
          M(V, _, ee),
          ue(I, V, ee),
          M(V, C, ee),
          ue(k, V, ee),
          M(V, D, ee),
          ue(E, V, ee),
          (b = !0),
          P || ((R = Ie(window, "resize", e[17])), (P = !0));
      },
      p(V, ee) {
        t && N.p(V, ee),
          V[0]
            ? S && (S.d(1), (S = null))
            : S
            ? S.p(V, ee)
            : ((S = ni()), S.c(), S.m(r.parentNode, r)),
          V[1]
            ? H && (H.d(1), (H = null))
            : H
            ? H.p(V, ee)
            : ((H = ri()), H.c(), H.m(s.parentNode, s)),
          ae &&
            ae.p &&
            (!b || ee[0] & 32768) &&
            gn(ae, x, V, V[15], b ? _n(x, V[15], ee, null) : mn(V[15]), null);
      },
      i(V) {
        b ||
          (Y(i.$$.fragment, V),
          Y(ae, V),
          Y(u.$$.fragment, V),
          Y(m.$$.fragment, V),
          Y(v.$$.fragment, V),
          Y(I.$$.fragment, V),
          Y(k.$$.fragment, V),
          Y(E.$$.fragment, V),
          (b = !0));
      },
      o(V) {
        q(i.$$.fragment, V),
          q(ae, V),
          q(u.$$.fragment, V),
          q(m.$$.fragment, V),
          q(v.$$.fragment, V),
          q(I.$$.fragment, V),
          q(k.$$.fragment, V),
          q(E.$$.fragment, V),
          (b = !1);
      },
      d(V) {
        N && N.d(V),
          h(n),
          S && S.d(V),
          h(r),
          H && H.d(V),
          h(s),
          re.d(V),
          h(o),
          V && h(a),
          fe(i, V),
          V && h(l),
          ae && ae.d(V),
          V && h(c),
          fe(u, V),
          V && h(d),
          fe(m, V),
          V && h(g),
          fe(v, V),
          V && h(_),
          fe(I, V),
          V && h(C),
          fe(k, V),
          V && h(D),
          fe(E, V),
          (P = !1),
          R();
      },
    }
  );
}
let si = null,
  oi = null;
function Rm(e, t) {
  (oi = e),
    si ||
      (Hs.next(!0),
      Ei.next({
        channel: "WEB",
        scene: "UNKNOWN",
        platform: "WEB",
        language: t || "en",
        site: Bn.isJapanSite ? "JP" : "GLOBAL",
      }),
      (si = Mc.subscribe(([n, r, s]) => {
        if (n && n.length > 0) {
          const o = r(n, oi);
          if (!o) return;
          if ((s && s(o), o.templateType === "image")) {
            wn.create(xc, { content: o }), $r.next(!0);
            return;
          }
          o.templateType === "text" &&
            (wn.create(su, { content: o }), $r.next(!0));
        }
      })));
}
function Am() {
  Hs.next(!1);
}
function Om(e, t, n) {
  let r, s, o, a, i, l, c, u, d, m, g, v;
  Me(e, sc, (z) => n(18, (r = z))),
    Me(e, mi, (z) => n(19, (s = z))),
    Me(e, ss, (z) => n(9, (a = z))),
    Me(e, Jr, (z) => n(20, (i = z))),
    Me(e, vi, (z) => n(21, (l = z))),
    Me(e, Ds, (z) => n(10, (c = z))),
    Me(e, Ls, (z) => n(22, (u = z))),
    Me(e, ii, (z) => n(11, (d = z))),
    Me(e, Co, (z) => n(12, (m = z))),
    Me(e, oc, (z) => n(13, (g = z))),
    Me(e, ac, (z) => n(14, (v = z)));
  let { $$slots: _ = {}, $$scope: I } = t,
    { customTwitter: C = !1 } = t,
    { customOpenGraph: k = !1 } = t,
    { hasLoadZeSnippet: D = !1 } = t,
    { defaultReferral: E = {} } = t,
    b = 1200,
    P = 768;
  const R = Pn("LG"),
    { page: N } = dc();
  Me(e, N, (z) => n(8, (o = z)));
  const S = [
      Zt.CONTRACT_PERPETUAL_CONTRACT.pathname,
      Zt.REGISTER_VT1.pathname,
      Zt.MARKETS.pathname,
    ],
    H = [
      Zt.LOGIN.pathname,
      Zt.REGISTER.pathname,
      Zt.WELCOME.pathname,
      Zt.RESET_PASSWORD.pathname,
      Zt.RESET_SECURITY.pathname,
    ],
    F = [Zt.ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE.pathname, Zt.KOL_LANDING.pathname],
    G = [];
  tt(() => {
    ic.map((te) => u(te)).includes(o.path) && hi(u(Zt.HOME.pathname));
  }),
    tt(() => oe.send("captcha-status", "refresh")),
    tt(() => {
      as.pipe(
        lt((z) => z !== "Init"),
        Ms(1)
      ).subscribe((z) => {
        const { irclickid: te } = o.query,
          ne = te
            ? { auth_status: z, click_id: te, click_id_source: "impact" }
            : { auth_status: z };
        an.pageView(ne);
      });
    }),
    tt(() => Rm(o.path, s)),
    tt(() => {
      if (Bn.isApp || Bn.isBot || D) return;
      const { pathname: z } = us.parsePathname(o.path);
      if (Bn.isMobile) {
        F.indexOf(z) === -1 && setTimeout(V, 5e3);
        return;
      }
      G.includes(z) || setTimeout(V, 2e3), ee(c, l);
    }),
    tt(() =>
      Ds.subscribe(async (z) => {
        if (!z || !localStorage.getItem("base-kyc-status")) return;
        const { baseKycStrategy: ne } = await lc();
        if (ne === 1) {
          localStorage.removeItem("base-kyc-status");
          return;
        }
        if (!i) {
          if (a.isSub && ne === 3) {
            const Te = wn.create(Im);
            Jr.next(Te);
            return;
          }
          if (!a.isSub && (ne === 2 || ne === 3)) {
            const Te = wn.create(ym, { LG: R, closeable: ne === 2 });
            Jr.next(Te);
          }
        }
      })
    ),
    tt(() => {
      const {
        referralCode: z = E && E.referralCode,
        group: te = E && E.group,
      } = cc();
      z && uc.set({ code: z, group: te }),
        te && $.isNumber(te) && fc.addGroupClickCnt(te);
    }),
    Al(() => Am());
  function re() {
    hc.next(), pc.next();
  }
  function x(z) {
    const te = us.parsePathname(z).pathname;
    if (H.indexOf(te) === -1) {
      document.body.style.height = "auto";
      return;
    }
    document.body.style.height = "100%";
  }
  function ae() {
    if (Bn.isServer) return !1;
    const z = us.parsePathname(o.path).pathname;
    return S.indexOf(z) < 0;
  }
  async function V() {
    const z = await lu();
    ds.init(z, s, function () {
      Co.next(!0);
    });
  }
  function ee(z, te) {
    !z ||
      te === "0" ||
      localStorage.getItem("ACTIVATION_STATUS") !== "1" ||
      wn.create(Jg, { LG: R });
  }
  function ie(z, te, ne, Te) {
    z && ds.changeUserInfo(ne, te, Te);
  }
  function Z(z, te) {
    z && ds.changeExpandInfo("IpConfig", te);
  }
  function me(z, te) {
    gc.next(z),
      mc.next(te),
      Bn.isBrowser && document.body.style.setProperty("--aspect-ratio", r);
  }
  function Ae() {
    n(2, (b = window.innerWidth)), n(3, (P = window.innerHeight));
  }
  return (
    (e.$$set = (z) => {
      "customTwitter" in z && n(0, (C = z.customTwitter)),
        "customOpenGraph" in z && n(1, (k = z.customOpenGraph)),
        "hasLoadZeSnippet" in z && n(6, (D = z.hasLoadZeSnippet)),
        "defaultReferral" in z && n(7, (E = z.defaultReferral)),
        "$$scope" in z && n(15, (I = z.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 256 && x(o.path),
        e.$$.dirty[0] & 1024 && c && re(),
        e.$$.dirty[0] & 29184 && ie(m, v, a, g),
        e.$$.dirty[0] & 6144 && Z(m, d),
        e.$$.dirty[0] & 12 && me(b, P);
    }),
    [C, k, b, P, N, ae, D, E, o, a, c, d, m, g, v, I, _, Ae]
  );
}
class Um extends He {
  constructor(t) {
    super(),
      Ye(
        this,
        t,
        Om,
        Pm,
        Qe,
        {
          customTwitter: 0,
          customOpenGraph: 1,
          hasLoadZeSnippet: 6,
          defaultReferral: 7,
        },
        null,
        [-1, -1]
      );
  }
}
export { Um as P, Ur as S, qi as b, Bm as f, Fu as t };
//# sourceMappingURL=chunk-2724ef1c.js.map
