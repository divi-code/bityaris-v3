import {
  S as gt,
  i as pt,
  s as bt,
  e as d,
  D as w,
  C as y,
  p as re,
  c as _,
  a as v,
  F as $,
  E as U,
  d as n,
  q as ie,
  b as f,
  G as Ot,
  g as F,
  H as l,
  r as le,
  k as T,
  t as A,
  x as ae,
  J as Wt,
  L as et,
  I as Te,
  a2 as _r,
  K as Mt,
  Q as Ue,
  B as Xe,
  h as qe,
  j as Ke,
  y as ht,
  T as Er,
  Y as ts,
  a9 as ss,
  R as Nt,
  aa as rs,
  X as Ir,
  l as Os,
  u as Ms,
  m as Hs,
  n as Ws,
  a4 as wr,
  V as $r,
} from "./chunk-8f7551c4.js";
import {
  R as jt,
  T as Gt,
  h as kr,
  k as vr,
  I as Tr,
  ak as Dt,
  af as Fs,
  f as ls,
  A as Vr,
  aB as Dr,
  L as qs,
  aC as Ks,
  Q as Ys,
  ax as Tt,
  s as $e,
  P as Ht,
  aw as Sr,
  m as xe,
  ap as Cr,
  w as Rr,
  aA as yr,
} from "./chunk-772394bf.js";
import { B as Ur, S as Lr, q as Bt, e as Ar } from "./app-6c8af094.js";
import {
  h as I,
  r as Vt,
  v as zs,
  d as mr,
  n as Pr,
  i as kt,
  j as Js,
  E as hr,
  P as Nr,
  C as jr,
  H as Gr,
  U as Br,
  A as Or,
} from "./chunk-8f905c50.js";
import { P as Mr } from "./chunk-2724ef1c.js";
import { C as gr, a as Hr } from "./chunk-7eed48ce.js";
import "./chunk-bbc88117.js";
import "./chunk-f928d363.js";
const Wr = {
  getSupportedCurrencies(r) {
    return jt.get(Gt.CROSS_SITE_TRANSFER_SUPPORTED_CURRENCIES, {
      query: r,
      formatter(e) {
        const { total: t } = e,
          s = e.rows.map((i) => ({ text: i, value: i, currency: i }));
        return { total: t, rows: s };
      },
    });
  },
  updateTransferOut(r) {
    return jt.post(Gt.CROSS_SITE_TRANSFER_OUT, { params: r });
  },
  getConnectionUser(r) {
    return jt.get(Gt.CROSS_SITE_CONNECTION_USER, { query: r });
  },
  quickRegister(r, e) {
    return jt.post(Gt.CROSS_SITE_QUICK_REGISTER, { query: r, params: e });
  },
};
new Ur("");
function Fr(r) {
  return kr.chekcKOLLandingPageExists(r).toRestState();
}
function qr(r) {
  let e = r[0](I.ContinueBtn) + "",
    t;
  return {
    c() {
      t = y(e);
    },
    l(s) {
      t = U(s, e);
    },
    m(s, i) {
      F(s, t, i);
    },
    p: Te,
    d(s) {
      s && n(t);
    },
  };
}
function Kr(r) {
  let e,
    t,
    s,
    i,
    a,
    o = r[0](I.ConnectRegisterSuccess) + "",
    u,
    c,
    h,
    g = r[0](I.ConnectRegisterSuccessDesc) + "",
    p,
    D,
    k,
    G;
  return (
    (k = new vr({
      props: {
        minWidth: "100%",
        type: "primary",
        $$slots: { default: [qr] },
        $$scope: { ctx: r },
      },
    })),
    k.$on("click", r[1]),
    {
      c() {
        (e = d("div")),
          (t = d("img")),
          (i = w()),
          (a = d("div")),
          (u = y(o)),
          (c = w()),
          (h = d("div")),
          (p = y(g)),
          (D = w()),
          re(k.$$.fragment),
          this.h();
      },
      l(L) {
        e = _(L, "DIV", { class: !0 });
        var P = v(e);
        (t = _(P, "IMG", { width: !0, src: !0, alt: !0 })),
          (i = $(P)),
          (a = _(P, "DIV", { class: !0 }));
        var V = v(a);
        (u = U(V, o)),
          V.forEach(n),
          (c = $(P)),
          (h = _(P, "DIV", { class: !0 }));
        var C = v(h);
        (p = U(C, g)),
          C.forEach(n),
          (D = $(P)),
          ie(k.$$.fragment, P),
          P.forEach(n),
          this.h();
      },
      h() {
        f(t, "width", "80"),
          Ot(t.src, (s = Tr.SUCCESS_ICON)) || f(t, "src", s),
          f(t, "alt", "Success"),
          f(a, "class", "mt20 mb20 f16 fw3 T1"),
          f(h, "class", "mb40 f14 T3"),
          f(e, "class", "register-success tc p24");
      },
      m(L, P) {
        F(L, e, P),
          l(e, t),
          l(e, i),
          l(e, a),
          l(a, u),
          l(e, c),
          l(e, h),
          l(h, p),
          l(e, D),
          le(k, e, null),
          (G = !0);
      },
      p(L, [P]) {
        const V = {};
        P & 8 && (V.$$scope = { dirty: P, ctx: L }), k.$set(V);
      },
      i(L) {
        G || (T(k.$$.fragment, L), (G = !0));
      },
      o(L) {
        A(k.$$.fragment, L), (G = !1);
      },
      d(L) {
        L && n(e), ae(k);
      },
    }
  );
}
function Yr(r) {
  const e = Wt("LG");
  et(() => {
    setTimeout(() => {
      t();
    }, 5e3);
  });
  function t() {
    const { target: i } = Dt();
    window.location.assign(`${i}?doneConnect=1`);
  }
  function s() {
    t();
  }
  return [e, s];
}
class zr extends gt {
  constructor(e) {
    super(), pt(this, e, Yr, Kr, bt, {});
  }
}
function Jr(r) {
  let e,
    t,
    s,
    i,
    a = r[0](I.EnjoyMore) + "",
    o,
    u,
    c,
    h,
    g,
    p,
    D,
    k,
    G,
    L,
    P,
    V,
    C,
    q,
    B,
    ne,
    ge = r[0](I.AdditionalFeatures) + "",
    M,
    te,
    z,
    pe,
    be,
    Ve,
    we,
    De,
    ce,
    se,
    ee,
    Ee,
    me,
    Ie = r[0](I.ContractTrading) + "",
    Z,
    Le,
    fe,
    Ae = r[0](I.UpToLeverage) + "",
    Pe,
    Ne,
    ue,
    Re,
    Ye,
    Y,
    je,
    Se,
    de,
    X,
    O,
    K,
    He,
    Be = r[0](I.SpotTrading) + "",
    J,
    Q,
    b,
    N = r[0](I.ZeroFeesForPremiun) + "",
    S,
    R,
    H,
    j,
    W,
    m,
    E,
    _e,
    oe,
    x,
    Ce,
    Ge,
    Oe,
    We = r[0](I.AssetManagement) + "",
    tt,
    ze,
    Qe,
    Ze = r[0](I.EstimatedAPY) + "",
    Fe,
    Ft,
    st,
    rt,
    qt,
    Kt,
    it,
    lt,
    Yt,
    zt,
    Me,
    Je,
    Et,
    It = r[0](I.WelcomeBonus) + "",
    St,
    Jt,
    wt,
    $t = r[0](I.UpTo) + "",
    Ct,
    Xt,
    at,
    nt,
    Qt,
    Zt,
    ot,
    ct,
    xt,
    Rt,
    es,
    as;
  return (
    _r(r[3]),
    {
      c() {
        (e = d("div")),
          (t = d("div")),
          (s = d("div")),
          (i = d("div")),
          (o = y(a)),
          (u = w()),
          (c = d("div")),
          (h = d("div")),
          (g = d("div")),
          (p = w()),
          (D = d("div")),
          (k = d("img")),
          (L = w()),
          (P = d("div")),
          (V = d("img")),
          (q = w()),
          (B = d("div")),
          (ne = d("div")),
          (M = y(ge)),
          (te = w()),
          (z = d("div")),
          (pe = d("i")),
          (be = y("")),
          (Ve = w()),
          (we = d("div")),
          (De = d("i")),
          (ce = y("")),
          (se = w()),
          (ee = d("div")),
          (Ee = d("div")),
          (me = d("div")),
          (Z = y(Ie)),
          (Le = w()),
          (fe = d("div")),
          (Pe = y(Ae)),
          (Ne = w()),
          (ue = d("div")),
          (Re = d("i")),
          (Ye = y("")),
          (Y = w()),
          (je = d("div")),
          (Se = d("i")),
          (de = y("")),
          (X = w()),
          (O = d("div")),
          (K = d("div")),
          (He = d("div")),
          (J = y(Be)),
          (Q = w()),
          (b = d("div")),
          (S = y(N)),
          (R = w()),
          (H = d("div")),
          (j = d("i")),
          (W = y("")),
          (m = w()),
          (E = d("div")),
          (_e = d("i")),
          (oe = y("")),
          (x = w()),
          (Ce = d("div")),
          (Ge = d("div")),
          (Oe = d("div")),
          (tt = y(We)),
          (ze = w()),
          (Qe = d("div")),
          (Fe = y(Ze)),
          (Ft = w()),
          (st = d("div")),
          (rt = d("i")),
          (qt = y("")),
          (Kt = w()),
          (it = d("div")),
          (lt = d("i")),
          (Yt = y("")),
          (zt = w()),
          (Me = d("div")),
          (Je = d("div")),
          (Et = d("div")),
          (St = y(It)),
          (Jt = w()),
          (wt = d("div")),
          (Ct = y($t)),
          (Xt = w()),
          (at = d("div")),
          (nt = d("i")),
          (Qt = y("")),
          (Zt = w()),
          (ot = d("div")),
          (ct = d("i")),
          (xt = y("")),
          this.h();
      },
      l(ve) {
        e = _(ve, "DIV", { class: !0, style: !0 });
        var he = v(e);
        t = _(he, "DIV", { class: !0 });
        var ns = v(t);
        s = _(ns, "DIV", { class: !0 });
        var yt = v(s);
        i = _(yt, "DIV", { class: !0 });
        var os = v(i);
        (o = U(os, a)),
          os.forEach(n),
          (u = $(yt)),
          (c = _(yt, "DIV", { class: !0 }));
        var ye = v(c);
        h = _(ye, "DIV", { class: !0 });
        var ft = v(h);
        (g = _(ft, "DIV", {})),
          v(g).forEach(n),
          (p = $(ft)),
          (D = _(ft, "DIV", { class: !0 }));
        var cs = v(D);
        (k = _(cs, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
          cs.forEach(n),
          (L = $(ft)),
          (P = _(ft, "DIV", { class: !0 }));
        var fs = v(P);
        (V = _(fs, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
          fs.forEach(n),
          ft.forEach(n),
          (q = $(ye)),
          (B = _(ye, "DIV", { class: !0 }));
        var ut = v(B);
        ne = _(ut, "DIV", { class: !0 });
        var us = v(ne);
        (M = U(us, ge)),
          us.forEach(n),
          (te = $(ut)),
          (z = _(ut, "DIV", { class: !0 }));
        var ds = v(z);
        pe = _(ds, "I", { class: !0 });
        var _s = v(pe);
        (be = U(_s, "")),
          _s.forEach(n),
          ds.forEach(n),
          (Ve = $(ut)),
          (we = _(ut, "DIV", { class: !0 }));
        var vs = v(we);
        De = _(vs, "I", { class: !0 });
        var ms = v(De);
        (ce = U(ms, "")),
          ms.forEach(n),
          vs.forEach(n),
          ut.forEach(n),
          (se = $(ye)),
          (ee = _(ye, "DIV", { class: !0 }));
        var dt = v(ee);
        Ee = _(dt, "DIV", { class: !0 });
        var Ut = v(Ee);
        me = _(Ut, "DIV", {});
        var hs = v(me);
        (Z = U(hs, Ie)), hs.forEach(n), (Le = $(Ut)), (fe = _(Ut, "DIV", {}));
        var gs = v(fe);
        (Pe = U(gs, Ae)),
          gs.forEach(n),
          Ut.forEach(n),
          (Ne = $(dt)),
          (ue = _(dt, "DIV", { class: !0 }));
        var ps = v(ue);
        Re = _(ps, "I", { class: !0 });
        var bs = v(Re);
        (Ye = U(bs, "")),
          bs.forEach(n),
          ps.forEach(n),
          (Y = $(dt)),
          (je = _(dt, "DIV", { class: !0 }));
        var Es = v(je);
        Se = _(Es, "I", { class: !0 });
        var Is = v(Se);
        (de = U(Is, "")),
          Is.forEach(n),
          Es.forEach(n),
          dt.forEach(n),
          (X = $(ye)),
          (O = _(ye, "DIV", { class: !0 }));
        var _t = v(O);
        K = _(_t, "DIV", { class: !0 });
        var Lt = v(K);
        He = _(Lt, "DIV", {});
        var ws = v(He);
        (J = U(ws, Be)), ws.forEach(n), (Q = $(Lt)), (b = _(Lt, "DIV", {}));
        var $s = v(b);
        (S = U($s, N)),
          $s.forEach(n),
          Lt.forEach(n),
          (R = $(_t)),
          (H = _(_t, "DIV", { class: !0 }));
        var ks = v(H);
        j = _(ks, "I", { class: !0 });
        var Ts = v(j);
        (W = U(Ts, "")),
          Ts.forEach(n),
          ks.forEach(n),
          (m = $(_t)),
          (E = _(_t, "DIV", { class: !0 }));
        var Vs = v(E);
        _e = _(Vs, "I", { class: !0 });
        var Ds = v(_e);
        (oe = U(Ds, "")),
          Ds.forEach(n),
          Vs.forEach(n),
          _t.forEach(n),
          (x = $(ye)),
          (Ce = _(ye, "DIV", { class: !0 }));
        var vt = v(Ce);
        Ge = _(vt, "DIV", { class: !0 });
        var At = v(Ge);
        Oe = _(At, "DIV", {});
        var Ss = v(Oe);
        (tt = U(Ss, We)), Ss.forEach(n), (ze = $(At)), (Qe = _(At, "DIV", {}));
        var Cs = v(Qe);
        (Fe = U(Cs, Ze)),
          Cs.forEach(n),
          At.forEach(n),
          (Ft = $(vt)),
          (st = _(vt, "DIV", { class: !0 }));
        var Rs = v(st);
        rt = _(Rs, "I", { class: !0 });
        var ys = v(rt);
        (qt = U(ys, "")),
          ys.forEach(n),
          Rs.forEach(n),
          (Kt = $(vt)),
          (it = _(vt, "DIV", { class: !0 }));
        var Us = v(it);
        lt = _(Us, "I", { class: !0 });
        var Ls = v(lt);
        (Yt = U(Ls, "")),
          Ls.forEach(n),
          Us.forEach(n),
          vt.forEach(n),
          (zt = $(ye)),
          (Me = _(ye, "DIV", { class: !0 }));
        var mt = v(Me);
        Je = _(mt, "DIV", { class: !0 });
        var Pt = v(Je);
        Et = _(Pt, "DIV", {});
        var As = v(Et);
        (St = U(As, It)), As.forEach(n), (Jt = $(Pt)), (wt = _(Pt, "DIV", {}));
        var Ps = v(wt);
        (Ct = U(Ps, $t)),
          Ps.forEach(n),
          Pt.forEach(n),
          (Xt = $(mt)),
          (at = _(mt, "DIV", { class: !0 }));
        var Ns = v(at);
        nt = _(Ns, "I", { class: !0 });
        var js = v(nt);
        (Qt = U(js, "")),
          js.forEach(n),
          Ns.forEach(n),
          (Zt = $(mt)),
          (ot = _(mt, "DIV", { class: !0 }));
        var Gs = v(ot);
        ct = _(Gs, "I", { class: !0 });
        var Bs = v(ct);
        (xt = U(Bs, "")),
          Bs.forEach(n),
          Gs.forEach(n),
          mt.forEach(n),
          ye.forEach(n),
          yt.forEach(n),
          ns.forEach(n),
          he.forEach(n),
          this.h();
      },
      h() {
        f(i, "class", "lh30 f24 fw3 T1 tc"),
          f(k, "width", "80"),
          f(k, "height", "18"),
          Ot(k.src, (G = Fs.LOGO_DARK)) || f(k, "src", G),
          f(k, "alt", "logo"),
          f(D, "class", "tc"),
          f(V, "width", "92"),
          f(V, "height", "18"),
          Ot(V.src, (C = Fs.LOGO_DARK_TR)) || f(V, "src", C),
          f(V, "alt", "logo"),
          f(P, "class", "tc"),
          f(h, "class", "row df jcsb lh32 svelte-qlnk0n"),
          f(ne, "class", "df aic lh16 f14 T1 tl"),
          f(pe, "class", "iconfont BLUE"),
          f(z, "class", "df aic jcc"),
          f(De, "class", "iconfont sell"),
          f(we, "class", "df aic jcc"),
          f(B, "class", "row df lh52 svelte-qlnk0n"),
          f(Ee, "class", "df fdc jcc lh16 f14 T1 tl"),
          f(Re, "class", "iconfont BLUE"),
          f(ue, "class", "df aic jcc"),
          f(Se, "class", "iconfont sell"),
          f(je, "class", "df aic jcc"),
          f(ee, "class", "row lh52 svelte-qlnk0n"),
          f(K, "class", "df fdc jcc lh16 f14 T1 tl"),
          f(j, "class", "iconfont BLUE"),
          f(H, "class", "df aic jcc"),
          f(_e, "class", "iconfont sell"),
          f(E, "class", "df aic jcc"),
          f(O, "class", "row lh52 svelte-qlnk0n"),
          f(Ge, "class", "df fdc jcc lh16 f14 T1 tl"),
          f(rt, "class", "iconfont BLUE"),
          f(st, "class", "df aic jcc"),
          f(lt, "class", "iconfont sell"),
          f(it, "class", "df aic jcc"),
          f(Ce, "class", "row lh52 svelte-qlnk0n"),
          f(Je, "class", "df fdc jcc lh16 f14 T1 tl"),
          f(nt, "class", "iconfont BLUE"),
          f(at, "class", "df aic jcc"),
          f(ct, "class", "iconfont sell"),
          f(ot, "class", "df aic jcc"),
          f(Me, "class", "row lh52 svelte-qlnk0n"),
          f(c, "class", "table wp100 mt24 svelte-qlnk0n"),
          f(s, "class", "df fdc aic"),
          f(t, "class", "df fdc aic"),
          f(e, "class", "modal svelte-qlnk0n"),
          f(
            e,
            "style",
            (Rt = "border-radius: 12px; " + r[2] + " background: #fff;")
          );
      },
      m(ve, he) {
        F(ve, e, he),
          l(e, t),
          l(t, s),
          l(s, i),
          l(i, o),
          l(s, u),
          l(s, c),
          l(c, h),
          l(h, g),
          l(h, p),
          l(h, D),
          l(D, k),
          l(h, L),
          l(h, P),
          l(P, V),
          l(c, q),
          l(c, B),
          l(B, ne),
          l(ne, M),
          l(B, te),
          l(B, z),
          l(z, pe),
          l(pe, be),
          l(B, Ve),
          l(B, we),
          l(we, De),
          l(De, ce),
          l(c, se),
          l(c, ee),
          l(ee, Ee),
          l(Ee, me),
          l(me, Z),
          l(Ee, Le),
          l(Ee, fe),
          l(fe, Pe),
          l(ee, Ne),
          l(ee, ue),
          l(ue, Re),
          l(Re, Ye),
          l(ee, Y),
          l(ee, je),
          l(je, Se),
          l(Se, de),
          l(c, X),
          l(c, O),
          l(O, K),
          l(K, He),
          l(He, J),
          l(K, Q),
          l(K, b),
          l(b, S),
          l(O, R),
          l(O, H),
          l(H, j),
          l(j, W),
          l(O, m),
          l(O, E),
          l(E, _e),
          l(_e, oe),
          l(c, x),
          l(c, Ce),
          l(Ce, Ge),
          l(Ge, Oe),
          l(Oe, tt),
          l(Ge, ze),
          l(Ge, Qe),
          l(Qe, Fe),
          l(Ce, Ft),
          l(Ce, st),
          l(st, rt),
          l(rt, qt),
          l(Ce, Kt),
          l(Ce, it),
          l(it, lt),
          l(lt, Yt),
          l(c, zt),
          l(c, Me),
          l(Me, Je),
          l(Je, Et),
          l(Et, St),
          l(Je, Jt),
          l(Je, wt),
          l(wt, Ct),
          l(Me, Xt),
          l(Me, at),
          l(at, nt),
          l(nt, Qt),
          l(Me, Zt),
          l(Me, ot),
          l(ot, ct),
          l(ct, xt),
          es || ((as = Mt(window, "resize", r[3])), (es = !0));
      },
      p(ve, [he]) {
        he & 1 && a !== (a = ve[0](I.EnjoyMore) + "") && Ue(o, a),
          he & 1 && ge !== (ge = ve[0](I.AdditionalFeatures) + "") && Ue(M, ge),
          he & 1 && Ie !== (Ie = ve[0](I.ContractTrading) + "") && Ue(Z, Ie),
          he & 1 && Ae !== (Ae = ve[0](I.UpToLeverage) + "") && Ue(Pe, Ae),
          he & 1 && Be !== (Be = ve[0](I.SpotTrading) + "") && Ue(J, Be),
          he & 1 && N !== (N = ve[0](I.ZeroFeesForPremiun) + "") && Ue(S, N),
          he & 1 && We !== (We = ve[0](I.AssetManagement) + "") && Ue(tt, We),
          he & 1 && Ze !== (Ze = ve[0](I.EstimatedAPY) + "") && Ue(Fe, Ze),
          he & 1 && It !== (It = ve[0](I.WelcomeBonus) + "") && Ue(St, It),
          he & 1 && $t !== ($t = ve[0](I.UpTo) + "") && Ue(Ct, $t),
          he & 4 &&
            Rt !==
              (Rt = "border-radius: 12px; " + ve[2] + " background: #fff;") &&
            f(e, "style", Rt);
      },
      i: Te,
      o: Te,
      d(ve) {
        ve && n(e), (es = !1), as();
      },
    }
  );
}
function Xr(r, e, t) {
  let s,
    { LG: i = null } = e,
    a = 1200;
  function o() {
    t(1, (a = window.innerWidth));
  }
  return (
    (r.$$set = (u) => {
      "LG" in u && t(0, (i = u.LG));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 2 && t(2, (s = a > 640 ? "width: 530px;" : ""));
    }),
    [i, a, s, o]
  );
}
class Qr extends gt {
  constructor(e) {
    super(), pt(this, e, Xr, Jr, bt, { LG: 0 });
  }
}
const ke = `${Lr.STATIC_URL}/pubimg/`,
  Zr = {
    BANNER:
      ke +
      "bd34b257c080708ccc275ce5efa198c365b57899fd81542978550c114d46f510.png",
    RETURN1:
      ke +
      "be731f9f992b3d96ecb80a4175cba002a4f354b945cb9d759b31ca87958a14a3.png",
    RETURN2:
      ke +
      "ce9192bef136ac7b223de1142e4a413b2a80afe0e0c500cdc15d18d193db50f3.png",
    RETURN3:
      ke +
      "60aaddc02a031229c67e64700aa837ffff180218131087bedda1c06bbe40cfbe.png",
    JOURNEY1:
      ke +
      "5e7fa4e6e90f1a3a85a639aaa70384df6be4e08989f6305e12ed7fc350c46f45.png",
    JOURNEY2:
      ke +
      "0cfd00114f0b5fd2f9ed739b422929e0426b032ef5b96eb39b7def60acf0a0a7.png",
    JOURNEY3:
      ke +
      "f0d54c3800cb6bdba2d61a7bfe1d48e13592875c9dec6a6f86618a3e55e512bb.png",
    TOKENS:
      ke +
      "8993bba0bf36d2617583f067c3c735cf840d990ec6e1c18ed3183178ae6c0966.png",
    GIFT:
      ke +
      "43acb339204154027caed648e081e2231a860ef5d4d5bf7fe7e60e81c2d7b14a.png",
    HAND:
      ke +
      "bc7d8f839554a09ab345a2938bfb267a498d86ed14024e0c1bc79e92fb74693e.png",
    NEWS1:
      ke +
      "d00369015bdd0281bb904913b7c2a64585f2d05ba2924c0a4a397d0ba637c2b5.jpg",
    NEWS2:
      ke +
      "cfd5db93d1f23aceb28269a6680cd9b267914b9de2f9e22061319f735adb75c6.jpg",
    NEWS3:
      ke +
      "0fcdc3020d2ef76fc97d915ef2a7d743de4c7942e1fa71216cf44364f0d967af.jpg",
    NEWS4:
      ke +
      "744b769ddd89c218aa099c04fdde3c35e2e661d3c10060cf765b1c755fd350e0.jpg",
  };
const { window: pr } = Er;
function xr(r) {
  let e,
    t,
    s,
    i,
    a,
    o = r[23](Vt.CreateAccount) + "",
    u,
    c,
    h,
    g,
    p,
    D,
    k,
    G,
    L,
    P,
    V,
    C,
    q,
    B,
    ne,
    ge,
    M,
    te,
    z = r[23](I.InvitationCode) + "",
    pe,
    be,
    Ve = r[12] ? "&#xe65a;" : "&#xe65b;",
    we,
    De,
    ce,
    se,
    ee = r[13] ? "&#xe61f;" : "&#xe6d3;",
    Ee,
    me,
    Ie,
    Z,
    Le,
    fe,
    Ae,
    Pe,
    Ne,
    ue,
    Re,
    Ye,
    Y = r[18] && Xs(r);
  function je(m, E) {
    return m[17] ? si : ti;
  }
  let Se = je(r),
    de = Se(r),
    X = r[17] && Zs(r),
    O = r[17] && er(),
    K = r[0] && tr(r);
  function He(m) {
    r[35](m);
  }
  let Be = {
    haveIcon: !0,
    disabled: r[17] || !!r[18],
    autocomplete: "new-password",
    isError: r[7],
    placeholder: r[23](I.Email),
    modalUI: r[0],
  };
  r[3] !== void 0 && (Be.value = r[3]),
    (G = new hr({ props: Be })),
    ts.push(() => ss(G, "value", He)),
    G.$on("keypress", r[28]),
    G.$on("focus", r[29]("email_input_box")),
    G.$on("blur", r[30]("email_input_box"));
  let J = r[7] && sr(r),
    Q = r[0] && rr(r);
  function b(m) {
    r[36](m);
  }
  let N = {
    showIcon: !1,
    autocomplete: "new-password",
    isError: r[8],
    placeholder: r[23](I.Password),
    disabled: r[9],
    isPasswordTips: r[14],
    modalUI: r[0],
    isShowPasswordTips: r[15],
    innerWidth: r[6],
    placement: r[6] > 640 ? "left" : "right",
  };
  r[4] !== void 0 && (N.value = r[4]),
    (B = new Nr({ props: N })),
    ts.push(() => ss(B, "value", b)),
    B.$on("keypress", r[28]),
    B.$on("focus", r[29]("password_input_box")),
    B.$on("blur", r[30]("password_input_box"));
  let S = r[12] && ir(r),
    R = r[0] && !r[2] && lr(r);
  (fe = new vr({
    props: {
      class: "home-register-button pr f16 fw3",
      type: "primary",
      newRadius: !0,
      minWidth: "100%",
      loading: r[9],
      disabled: r[10] || !r[13],
      $$slots: { default: [ri] },
      $$scope: { ctx: r },
    },
  })),
    fe.$on("click", r[27]);
  let H = r[1] === 3 && !r[18] && ar(r),
    j = (!r[0] || r[21] == 1) && r[1] !== 1 && nr(r),
    W = r[17] && or();
  return {
    c() {
      (e = d("div")),
        Y && Y.c(),
        (t = w()),
        de.c(),
        (s = w()),
        (i = d("div")),
        (a = d("div")),
        (u = y(o)),
        (c = w()),
        X && X.c(),
        (h = w()),
        O && O.c(),
        (g = w()),
        (p = d("div")),
        K && K.c(),
        (D = w()),
        (k = d("div")),
        re(G.$$.fragment),
        (P = w()),
        J && J.c(),
        (V = w()),
        Q && Q.c(),
        (C = w()),
        (q = d("div")),
        re(B.$$.fragment),
        (ge = w()),
        (M = d("div")),
        (te = d("div")),
        (pe = y(z)),
        (be = d("i")),
        (we = w()),
        S && S.c(),
        (De = w()),
        (ce = d("div")),
        (se = d("i")),
        (Ee = w()),
        (me = d("div")),
        (Ie = w()),
        (Z = d("div")),
        R && R.c(),
        (Le = w()),
        re(fe.$$.fragment),
        (Ae = w()),
        H && H.c(),
        (Pe = w()),
        j && j.c(),
        (Ne = w()),
        W && W.c(),
        this.h();
    },
    l(m) {
      e = _(m, "DIV", { class: !0 });
      var E = v(e);
      Y && Y.l(E),
        (t = $(E)),
        de.l(E),
        (s = $(E)),
        (i = _(E, "DIV", { class: !0 }));
      var _e = v(i);
      a = _(_e, "DIV", {});
      var oe = v(a);
      (u = U(oe, o)),
        oe.forEach(n),
        _e.forEach(n),
        (c = $(E)),
        X && X.l(E),
        (h = $(E)),
        O && O.l(E),
        (g = $(E)),
        (p = _(E, "DIV", { class: !0 }));
      var x = v(p);
      K && K.l(x), (D = $(x)), (k = _(x, "DIV", { class: !0 }));
      var Ce = v(k);
      ie(G.$$.fragment, Ce),
        Ce.forEach(n),
        (P = $(x)),
        J && J.l(x),
        (V = $(x)),
        Q && Q.l(x),
        (C = $(x)),
        (q = _(x, "DIV", { class: !0 }));
      var Ge = v(q);
      ie(B.$$.fragment, Ge),
        Ge.forEach(n),
        (ge = $(x)),
        (M = _(x, "DIV", { class: !0 }));
      var Oe = v(M);
      te = _(Oe, "DIV", { class: !0 });
      var We = v(te);
      (pe = U(We, z)), (be = _(We, "I", { class: !0 }));
      var tt = v(be);
      tt.forEach(n),
        We.forEach(n),
        (we = $(Oe)),
        S && S.l(Oe),
        Oe.forEach(n),
        x.forEach(n),
        (De = $(E)),
        (ce = _(E, "DIV", { class: !0 }));
      var ze = v(ce);
      se = _(ze, "I", { class: !0 });
      var Qe = v(se);
      Qe.forEach(n), (Ee = $(ze)), (me = _(ze, "DIV", {}));
      var Ze = v(me);
      Ze.forEach(n),
        ze.forEach(n),
        (Ie = $(E)),
        (Z = _(E, "DIV", {
          class: !0,
          "data-gac": !0,
          "data-gaa": !0,
          "data-gal": !0,
        }));
      var Fe = v(Z);
      R && R.l(Fe),
        (Le = $(Fe)),
        ie(fe.$$.fragment, Fe),
        Fe.forEach(n),
        (Ae = $(E)),
        H && H.l(E),
        (Pe = $(E)),
        j && j.l(E),
        (Ne = $(E)),
        W && W.l(E),
        E.forEach(n),
        this.h();
    },
    h() {
      f(i, "class", "m-title lh48 f24 fw3 T1 svelte-nixvb"),
        f(k, "class", "home-register-email svelte-nixvb"),
        f(q, "class", "home-register-password svelte-nixvb"),
        f(be, "class", "iconfont ml10"),
        f(
          te,
          "class",
          "df aic lh20 f14 cp T4 home-register-invite-button svelte-nixvb"
        ),
        f(M, "class", "code mt20"),
        f(p, "class", "form pr svelte-nixvb"),
        f(se, "class", "iconfont mr4 f12 T4 cp svelte-nixvb"),
        Nt(se, "blue", r[13]),
        f(ce, "class", "bottom df svelte-nixvb"),
        f(Z, "class", "btn ga pr svelte-nixvb"),
        f(Z, "data-gac", "user.register"),
        f(Z, "data-gaa", "btn_click"),
        f(Z, "data-gal", "form.continue"),
        f(e, "class", "warp svelte-nixvb"),
        Nt(e, "modal-ui", r[0]);
    },
    m(m, E) {
      F(m, e, E),
        Y && Y.m(e, null),
        l(e, t),
        de.m(e, null),
        l(e, s),
        l(e, i),
        l(i, a),
        l(a, u),
        l(e, c),
        X && X.m(e, null),
        l(e, h),
        O && O.m(e, null),
        l(e, g),
        l(e, p),
        K && K.m(p, null),
        l(p, D),
        l(p, k),
        le(G, k, null),
        l(p, P),
        J && J.m(p, null),
        l(p, V),
        Q && Q.m(p, null),
        l(p, C),
        l(p, q),
        le(B, q, null),
        l(p, ge),
        l(p, M),
        l(M, te),
        l(te, pe),
        l(te, be),
        (be.innerHTML = Ve),
        l(M, we),
        S && S.m(M, null),
        l(e, De),
        l(e, ce),
        l(ce, se),
        (se.innerHTML = ee),
        l(ce, Ee),
        l(ce, me),
        (me.innerHTML = r[24]),
        l(e, Ie),
        l(e, Z),
        R && R.m(Z, null),
        l(Z, Le),
        le(fe, Z, null),
        l(e, Ae),
        H && H.m(e, null),
        l(e, Pe),
        j && j.m(e, null),
        l(e, Ne),
        W && W.m(e, null),
        (ue = !0),
        Re ||
          ((Ye = [Mt(te, "click", r[26]), Mt(se, "click", r[38])]), (Re = !0));
    },
    p(m, E) {
      m[18]
        ? Y
          ? (Y.p(m, E), E[0] & 262144 && T(Y, 1))
          : ((Y = Xs(m)), Y.c(), T(Y, 1), Y.m(e, t))
        : Y &&
          (qe(),
          A(Y, 1, 1, () => {
            Y = null;
          }),
          Ke()),
        Se === (Se = je(m)) && de
          ? de.p(m, E)
          : (de.d(1), (de = Se(m)), de && (de.c(), de.m(e, s))),
        m[17]
          ? X
            ? X.p(m, E)
            : ((X = Zs(m)), X.c(), X.m(e, h))
          : X && (X.d(1), (X = null)),
        m[17]
          ? O
            ? E[0] & 131072 && T(O, 1)
            : ((O = er()), O.c(), T(O, 1), O.m(e, g))
          : O &&
            (qe(),
            A(O, 1, 1, () => {
              O = null;
            }),
            Ke()),
        m[0]
          ? K
            ? K.p(m, E)
            : ((K = tr(m)), K.c(), K.m(p, D))
          : K && (K.d(1), (K = null));
      const _e = {};
      E[0] & 393216 && (_e.disabled = m[17] || !!m[18]),
        E[0] & 128 && (_e.isError = m[7]),
        E[0] & 1 && (_e.modalUI = m[0]),
        !L && E[0] & 8 && ((L = !0), (_e.value = m[3]), rs(() => (L = !1))),
        G.$set(_e),
        m[7]
          ? J
            ? J.p(m, E)
            : ((J = sr(m)), J.c(), J.m(p, V))
          : J && (J.d(1), (J = null)),
        m[0]
          ? Q
            ? Q.p(m, E)
            : ((Q = rr(m)), Q.c(), Q.m(p, C))
          : Q && (Q.d(1), (Q = null));
      const oe = {};
      E[0] & 256 && (oe.isError = m[8]),
        E[0] & 512 && (oe.disabled = m[9]),
        E[0] & 16384 && (oe.isPasswordTips = m[14]),
        E[0] & 1 && (oe.modalUI = m[0]),
        E[0] & 32768 && (oe.isShowPasswordTips = m[15]),
        E[0] & 64 && (oe.innerWidth = m[6]),
        E[0] & 64 && (oe.placement = m[6] > 640 ? "left" : "right"),
        !ne && E[0] & 16 && ((ne = !0), (oe.value = m[4]), rs(() => (ne = !1))),
        B.$set(oe),
        (!ue || E[0] & 4096) &&
          Ve !== (Ve = m[12] ? "&#xe65a;" : "&#xe65b;") &&
          (be.innerHTML = Ve),
        m[12]
          ? S
            ? (S.p(m, E), E[0] & 4096 && T(S, 1))
            : ((S = ir(m)), S.c(), T(S, 1), S.m(M, null))
          : S &&
            (qe(),
            A(S, 1, 1, () => {
              S = null;
            }),
            Ke()),
        (!ue || E[0] & 8192) &&
          ee !== (ee = m[13] ? "&#xe61f;" : "&#xe6d3;") &&
          (se.innerHTML = ee),
        (!ue || E[0] & 8192) && Nt(se, "blue", m[13]),
        m[0] && !m[2]
          ? R
            ? R.p(m, E)
            : ((R = lr(m)), R.c(), R.m(Z, Le))
          : R && (R.d(1), (R = null));
      const x = {};
      E[0] & 512 && (x.loading = m[9]),
        E[0] & 9216 && (x.disabled = m[10] || !m[13]),
        (E[0] & 1024) | (E[1] & 8388608) && (x.$$scope = { dirty: E, ctx: m }),
        fe.$set(x),
        m[1] === 3 && !m[18]
          ? H
            ? H.p(m, E)
            : ((H = ar(m)), H.c(), H.m(e, Pe))
          : H && (H.d(1), (H = null)),
        (!m[0] || m[21] == 1) && m[1] !== 1
          ? j
            ? (j.p(m, E), E[0] & 2097155 && T(j, 1))
            : ((j = nr(m)), j.c(), T(j, 1), j.m(e, Ne))
          : j &&
            (qe(),
            A(j, 1, 1, () => {
              j = null;
            }),
            Ke()),
        m[17]
          ? W
            ? E[0] & 131072 && T(W, 1)
            : ((W = or()), W.c(), T(W, 1), W.m(e, null))
          : W &&
            (qe(),
            A(W, 1, 1, () => {
              W = null;
            }),
            Ke()),
        (!ue || E[0] & 1) && Nt(e, "modal-ui", m[0]);
    },
    i(m) {
      ue ||
        (T(Y),
        T(O),
        T(G.$$.fragment, m),
        T(B.$$.fragment, m),
        T(S),
        T(fe.$$.fragment, m),
        T(j),
        T(W),
        (ue = !0));
    },
    o(m) {
      A(Y),
        A(O),
        A(G.$$.fragment, m),
        A(B.$$.fragment, m),
        A(S),
        A(fe.$$.fragment, m),
        A(j),
        A(W),
        (ue = !1);
    },
    d(m) {
      m && n(e),
        Y && Y.d(),
        de.d(),
        X && X.d(),
        O && O.d(),
        K && K.d(),
        ae(G),
        J && J.d(),
        Q && Q.d(),
        ae(B),
        S && S.d(),
        R && R.d(),
        ae(fe),
        H && H.d(),
        j && j.d(),
        W && W.d(),
        (Re = !1),
        Ir(Ye);
    },
  };
}
function ei(r) {
  let e, t;
  return (
    (e = new zr({})),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      p: Te,
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function Xs(r) {
  let e,
    t,
    s = r[23](I.DoYouAlsoWant) + "",
    i,
    a,
    o,
    u,
    c,
    h,
    g,
    p;
  return (
    (u = new Qr({ props: { LG: r[23] } })),
    (g = new gr({})),
    {
      c() {
        (e = d("div")),
          (t = d("div")),
          (i = y(s)),
          (a = w()),
          (o = d("div")),
          re(u.$$.fragment),
          (c = w()),
          (h = d("div")),
          re(g.$$.fragment),
          this.h();
      },
      l(D) {
        e = _(D, "DIV", { class: !0 });
        var k = v(e);
        t = _(k, "DIV", { class: !0 });
        var G = v(t);
        (i = U(G, s)), (a = $(G)), (o = _(G, "DIV", { class: !0 }));
        var L = v(o);
        ie(u.$$.fragment, L),
          L.forEach(n),
          G.forEach(n),
          (c = $(k)),
          (h = _(k, "DIV", { class: !0 }));
        var P = v(h);
        ie(g.$$.fragment, P), P.forEach(n), k.forEach(n), this.h();
      },
      h() {
        f(o, "class", "enjoy pr svelte-nixvb"),
          f(t, "class", "enjoy-phemex-tr lh16 f14 BLUE tdu tc cp svelte-nixvb"),
          f(h, "class", "pv16"),
          f(e, "class", "phemex-tr");
      },
      m(D, k) {
        F(D, e, k),
          l(e, t),
          l(t, i),
          l(t, a),
          l(t, o),
          le(u, o, null),
          l(e, c),
          l(e, h),
          le(g, h, null),
          (p = !0);
      },
      p: Te,
      i(D) {
        p || (T(u.$$.fragment, D), T(g.$$.fragment, D), (p = !0));
      },
      o(D) {
        A(u.$$.fragment, D), A(g.$$.fragment, D), (p = !1);
      },
      d(D) {
        D && n(e), ae(u), ae(g);
      },
    }
  );
}
function ti(r) {
  let e,
    t = r[23](Vt.CreateAccount) + "",
    s;
  return {
    c() {
      (e = d("div")), (s = y(t)), this.h();
    },
    l(i) {
      e = _(i, "DIV", { class: !0 });
      var a = v(e);
      (s = U(a, t)), a.forEach(n), this.h();
    },
    h() {
      f(e, "class", "title f32 fw3 T1 svelte-nixvb");
    },
    m(i, a) {
      F(i, e, a), l(e, s);
    },
    p: Te,
    d(i) {
      i && n(e);
    },
  };
}
function si(r) {
  let e,
    t = r[19] === r[25].Turkey && Qs(r);
  return {
    c() {
      t && t.c(), (e = Xe());
    },
    l(s) {
      t && t.l(s), (e = Xe());
    },
    m(s, i) {
      t && t.m(s, i), F(s, e, i);
    },
    p(s, i) {
      s[19] === s[25].Turkey
        ? t
          ? t.p(s, i)
          : ((t = Qs(s)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(s) {
      t && t.d(s), s && n(e);
    },
  };
}
function Qs(r) {
  let e,
    t = r[23](I.ConnectTrRegister) + "",
    s;
  return {
    c() {
      (e = d("div")), (s = y(t)), this.h();
    },
    l(i) {
      e = _(i, "DIV", { class: !0 });
      var a = v(e);
      (s = U(a, t)), a.forEach(n), this.h();
    },
    h() {
      f(e, "class", "title lh30 f24 fw3 tc T1 svelte-nixvb");
    },
    m(i, a) {
      F(i, e, a), l(e, s);
    },
    p: Te,
    d(i) {
      i && n(e);
    },
  };
}
function Zs(r) {
  let e,
    t = r[19] === r[25].Turkey && xs(r);
  return {
    c() {
      t && t.c(), (e = Xe());
    },
    l(s) {
      t && t.l(s), (e = Xe());
    },
    m(s, i) {
      t && t.m(s, i), F(s, e, i);
    },
    p(s, i) {
      s[19] === s[25].Turkey
        ? t
          ? t.p(s, i)
          : ((t = xs(s)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    d(s) {
      t && t.d(s), s && n(e);
    },
  };
}
function xs(r) {
  let e,
    t = r[23](I.ConnectTrRegisterDesc) + "",
    s;
  return {
    c() {
      (e = d("div")), (s = y(t)), this.h();
    },
    l(i) {
      e = _(i, "DIV", { class: !0 });
      var a = v(e);
      (s = U(a, t)), a.forEach(n), this.h();
    },
    h() {
      f(e, "class", "title2 mt32 lh18 f14 T3 tl svelte-nixvb");
    },
    m(i, a) {
      F(i, e, a), l(e, s);
    },
    p: Te,
    d(i) {
      i && n(e);
    },
  };
}
function er(r) {
  let e, t, s;
  return (
    (t = new gr({})),
    {
      c() {
        (e = d("div")), re(t.$$.fragment), this.h();
      },
      l(i) {
        e = _(i, "DIV", { class: !0 });
        var a = v(e);
        ie(t.$$.fragment, a), a.forEach(n), this.h();
      },
      h() {
        f(e, "class", "pv16");
      },
      m(i, a) {
        F(i, e, a), le(t, e, null), (s = !0);
      },
      i(i) {
        s || (T(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        A(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && n(e), ae(t);
      },
    }
  );
}
function tr(r) {
  let e,
    t = r[23](I.Email) + "",
    s;
  return {
    c() {
      (e = d("div")), (s = y(t)), this.h();
    },
    l(i) {
      e = _(i, "DIV", { class: !0 });
      var a = v(e);
      (s = U(a, t)), a.forEach(n), this.h();
    },
    h() {
      f(e, "class", "modal-ipt-title mt24 svelte-nixvb");
    },
    m(i, a) {
      F(i, e, a), l(e, s);
    },
    p: Te,
    d(i) {
      i && n(e);
    },
  };
}
function sr(r) {
  let e, t;
  return {
    c() {
      (e = d("div")), (t = y(r[7])), this.h();
    },
    l(s) {
      e = _(s, "DIV", { class: !0 });
      var i = v(e);
      (t = U(i, r[7])), i.forEach(n), this.h();
    },
    h() {
      f(e, "class", "sell mt10");
    },
    m(s, i) {
      F(s, e, i), l(e, t);
    },
    p(s, i) {
      i[0] & 128 && Ue(t, s[7]);
    },
    d(s) {
      s && n(e);
    },
  };
}
function rr(r) {
  let e,
    t = r[23](I.Password) + "",
    s;
  return {
    c() {
      (e = d("div")), (s = y(t)), this.h();
    },
    l(i) {
      e = _(i, "DIV", { class: !0 });
      var a = v(e);
      (s = U(a, t)), a.forEach(n), this.h();
    },
    h() {
      f(e, "class", "modal-ipt-title mt16 svelte-nixvb");
    },
    m(i, a) {
      F(i, e, a), l(e, s);
    },
    p: Te,
    d(i) {
      i && n(e);
    },
  };
}
function ir(r) {
  let e, t, s;
  function i(o) {
    r[37](o);
  }
  let a = {
    class: "mt16 home-register-invite-code",
    hasCodeIcon: r[0],
    haveIcon: !0,
    maxLength: "32",
    disabled: r[11],
    placeholder: r[23](I.InvitationCode),
  };
  return (
    r[5] !== void 0 && (a.value = r[5]),
    (e = new hr({ props: a })),
    ts.push(() => ss(e, "value", i)),
    e.$on("keypress", r[28]),
    {
      c() {
        re(e.$$.fragment);
      },
      l(o) {
        ie(e.$$.fragment, o);
      },
      m(o, u) {
        le(e, o, u), (s = !0);
      },
      p(o, u) {
        const c = {};
        u[0] & 1 && (c.hasCodeIcon = o[0]),
          u[0] & 2048 && (c.disabled = o[11]),
          !t && u[0] & 32 && ((t = !0), (c.value = o[5]), rs(() => (t = !1))),
          e.$set(c);
      },
      i(o) {
        s || (T(e.$$.fragment, o), (s = !0));
      },
      o(o) {
        A(e.$$.fragment, o), (s = !1);
      },
      d(o) {
        ae(e, o);
      },
    }
  );
}
function lr(r) {
  let e,
    t,
    s,
    i,
    a,
    o = r[23](I.UpToBonus, { Bonus: r[22] }) + "";
  return {
    c() {
      (e = d("div")), (t = d("img")), (i = w()), (a = d("div")), this.h();
    },
    l(u) {
      e = _(u, "DIV", { class: !0 });
      var c = v(e);
      (t = _(c, "IMG", { class: !0, src: !0, alt: !0 })),
        (i = $(c)),
        (a = _(c, "DIV", { class: !0 }));
      var h = v(a);
      h.forEach(n), c.forEach(n), this.h();
    },
    h() {
      f(t, "class", "gift-img svelte-nixvb"),
        Ot(t.src, (s = Zr.GIFT)) || f(t, "src", s),
        f(t, "alt", "gift"),
        f(a, "class", "gift-text lh16 br4 f14 cf svelte-nixvb"),
        f(e, "class", "gift-con df fdc aic svelte-nixvb");
    },
    m(u, c) {
      F(u, e, c), l(e, t), l(e, i), l(e, a), (a.innerHTML = o);
    },
    p(u, c) {
      c[0] & 4194304 &&
        o !== (o = u[23](I.UpToBonus, { Bonus: u[22] }) + "") &&
        (a.innerHTML = o);
    },
    d(u) {
      u && n(e);
    },
  };
}
function ri(r) {
  let e = r[23](r[10] ? I.Initializing : I.Continue) + "",
    t;
  return {
    c() {
      t = y(e);
    },
    l(s) {
      t = U(s, e);
    },
    m(s, i) {
      F(s, t, i);
    },
    p(s, i) {
      i[0] & 1024 &&
        e !== (e = s[23](s[10] ? I.Initializing : I.Continue) + "") &&
        Ue(t, e);
    },
    d(s) {
      s && n(t);
    },
  };
}
function ar(r) {
  let e,
    t,
    s = r[23](I.AlreadyHave) + "",
    i,
    a,
    o,
    u,
    c = r[23](I.LogIn) + "",
    h;
  return {
    c() {
      (e = d("div")),
        (t = d("label")),
        (i = y(s)),
        (a = w()),
        (o = d("span")),
        (u = d("a")),
        (h = y(c)),
        this.h();
    },
    l(g) {
      e = _(g, "DIV", { class: !0 });
      var p = v(e);
      t = _(p, "LABEL", { class: !0 });
      var D = v(t);
      (i = U(D, s)),
        D.forEach(n),
        (a = $(p)),
        (o = _(p, "SPAN", { class: !0 }));
      var k = v(o);
      u = _(k, "A", { class: !0, href: !0, target: !0 });
      var G = v(u);
      (h = U(G, c)), G.forEach(n), k.forEach(n), p.forEach(n), this.h();
    },
    h() {
      f(t, "class", "T2 account-title svelte-nixvb"),
        f(u, "class", "a1 svelte-nixvb"),
        f(u, "href", r[16]),
        f(u, "target", "_self"),
        f(o, "class", "sr svelte-nixvb"),
        f(e, "class", "login-account mt20");
    },
    m(g, p) {
      F(g, e, p), l(e, t), l(t, i), l(e, a), l(e, o), l(o, u), l(u, h);
    },
    p(g, p) {
      p[0] & 65536 && f(u, "href", g[16]);
    },
    d(g) {
      g && n(e);
    },
  };
}
function nr(r) {
  let e, t;
  return (
    (e = new jr({ props: { referralCode: r[5], entrance: "Register" } })),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      p(s, i) {
        const a = {};
        i[0] & 32 && (a.referralCode = s[5]), e.$set(a);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function or(r) {
  let e, t;
  return (
    (e = new Hr({})),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function ii(r) {
  let e, t, s, i, a, o;
  _r(r[34]);
  const u = [ei, xr],
    c = [];
  function h(g, p) {
    return g[20] ? 0 : 1;
  }
  return (
    (e = h(r)),
    (t = c[e] = u[e](r)),
    {
      c() {
        t.c(), (s = Xe());
      },
      l(g) {
        t.l(g), (s = Xe());
      },
      m(g, p) {
        c[e].m(g, p),
          F(g, s, p),
          (i = !0),
          a || ((o = Mt(pr, "resize", r[34])), (a = !0));
      },
      p(g, p) {
        let D = e;
        (e = h(g)),
          e === D
            ? c[e].p(g, p)
            : (qe(),
              A(c[D], 1, 1, () => {
                c[D] = null;
              }),
              Ke(),
              (t = c[e]),
              t ? t.p(g, p) : ((t = c[e] = u[e](g)), t.c()),
              T(t, 1),
              t.m(s.parentNode, s));
      },
      i(g) {
        i || (T(t), (i = !0));
      },
      o(g) {
        A(t), (i = !1);
      },
      d(g) {
        c[e].d(g), g && n(s), (a = !1), o();
      },
    }
  );
}
function li(r, e, t) {
  let s, i, a, o;
  ht(r, ls, (b) => t(33, (i = b))),
    ht(r, Vr, (b) => t(43, (a = b))),
    ht(r, Dr, (b) => t(22, (o = b)));
  let { registerUIVersion: u = 0 } = e,
    { modalUI: c = !1 } = e,
    { accountProps: h = "" } = e,
    { hideBonusImg: g = !1 } = e;
  const p = Wt("LG"),
    D = p(Vt.BySigningUp, {
      Term: `<a href="${i(
        qs.PHEMEX_REFERENCES_TERMS_OF_USE,
        "CMS"
      )}" target="_blank" style="color: #449AFF;">${p(Vt.Terms)}</a>`,
      Privacy: `<a href="${i(
        qs.PHEMEX_REFERENCES_PRIVACY_POLICY,
        "CMS"
      )}" target="_blank" style="color: #449AFF;">${p(Vt.PrivacyPolicy)}</a>`,
    }),
    k = { Turkey: "TURKEY" },
    G = { DEFAULT: "organic traffic", C2C: "C2C", KOL: "KOL" };
  let L = 1200,
    P = null,
    V = null,
    C = "",
    q = "",
    B = !1,
    ne = !0,
    ge = !1,
    M = "",
    te = 0,
    z = { target: "", action: "Welcome" },
    pe = !1,
    be = !0,
    Ve = !1,
    we = !1,
    De = "",
    ce,
    se,
    ee,
    Ee = !1,
    me = 0,
    Ie = G.DEFAULT,
    Z = 0;
  et(() => {
    t(10, (ne = !1)), t(32, (z = { target: "", action: "Welcome", ...Dt() }));
    let {
      referralCode: b,
      group: N,
      account: S,
      code: R,
      sourceSite: H,
      connectIdentifier: j,
    } = z;
    try {
      const W = Bt.parse(window.location.search).target;
      if (W) {
        t(32, (z.target = W), z);
        const m = Bt.parse(W.split("?")[1]);
        (b = !b && m.referralCode ? m.referralCode : b),
          (N = !N && m.group ? m.group : N);
      }
    } catch {}
    t(3, (P = S || h)),
      t(18, (se = R)),
      t(17, (ce = j)),
      t(19, (ee = H)),
      b && Ks.set({ code: b, group: N }),
      N && Ys.isNumber(N) && Tt.addGroupClickCnt(N);
  }),
    et(() =>
      Ks.subscribe(({ code: b, group: N }) => {
        t(11, (ge = !!b)),
          t(5, (M = b)),
          N && Ys.isNumber(N) && (te = Number(N));
      })
    ),
    et(() => {
      const b = Dt();
      t(21, (Z = b.modal)), Z == 1 && t(0, (c = !0));
    }),
    et(() => {
      if (!M) {
        Le();
        return;
      }
      Fr(M).subscribe((b) => {
        b.success && ((me = b.data.referralType || 0), Le());
      });
    });
  function Le() {
    if (!me) {
      $e.track("register_landingpage", { referral_code: M, channel: Ie });
      return;
    }
    [1, 3].includes(me) && (Ie = G.C2C),
      me === 5 && (Ie = G.KOL),
      $e.track("register_landingpage", { referral_code: M, channel: Ie });
  }
  function fe(b) {
    b && t(12, (pe = !0));
  }
  function Ae(b, N, S) {
    let R = "";
    N && (R += Bt.stringify({ target: N, action: "Target" })),
      S && (R += Bt.stringify({ modal: S })),
      t(16, (De = b(Ht.LOGIN.pathname) + (R ? `?${R}` : "")));
  }
  function Pe() {
    t(12, (pe = !pe));
  }
  async function Ne() {
    if (
      (M &&
        $e.track("referral_register", {
          referral_code_type: z.referralCode
            ? "link_referralcode"
            : "hand_fill_referralcode",
        }),
      $e.track("web_click", {
        $screen_name: "register",
        $element_content: "create_account",
      }),
      $e.track("launch_register", {
        referral_code: M,
        ui_position: "register_page",
      }),
      t(4, (V = V || "")),
      t(14, (Ve = !0)),
      t(7, (C = zs(s, p, I))),
      t(8, (q = O(V))),
      s && V && C === null && q === null)
    ) {
      t(9, (B = !0));
      const b = await Sr("register");
      if (!b) {
        xe.send("toast", "error", { message: p(I.NetworkError) }),
          t(9, (B = !1));
        return;
      }
      const N = {
        email: s,
        password: V,
        referralCode: M,
        group: te ? Number(te) : 0,
        nickName: "",
        lang: Cr[a] || a,
      };
      if (se) {
        await Re(N, b);
        return;
      }
      if (ce) {
        await Ye(N, b);
        return;
      }
      await ue(N, b);
    }
  }
  async function ue(b, N) {
    const { data: S, error: R } = await Tt.signUp(N, b);
    if ((t(9, (B = !1)), S)) {
      if (S.status === "1") {
        t(7, (C = p(I.TheAccountHasBeen)));
        return;
      }
      const H = {
        params: b,
        type: "mail-registration-code",
        context: S,
        async callback(j, W, m) {
          const E = m.code,
            _e = m.email,
            oe = await je(E, j, _e, M);
          W(oe);
        },
      };
      c && !Ar.isMobile
        ? xe.send("modal-register", "launchSafetyVerification", H)
        : mr.launchSafetyVerificationPage(p, H);
    }
    R && xe.send("toast", "error", R);
  }
  async function Re(b, N) {
    const { data: S, error: R } = await Wr.quickRegister(N, {
      ...b,
      connectIdentifier: se,
    });
    if ((t(9, (B = !1)), S)) {
      if (S.status === "1") {
        t(7, (C = p(I.TheAccountHasBeen)));
        return;
      }
      $e.track("complete_register_from_tr", {
        is_succeed: !0,
        fail_reason: "",
        platform: "web",
        source_page: "tr_register_success_page",
      }),
        Pr();
    }
    R &&
      ($e.track("complete_register_from_tr", {
        is_succeed: !1,
        fail_reason: R.message,
        platform: "web",
        source_page: "tr_register_success_page",
      }),
      xe.send("toast", "error", R));
  }
  async function Ye(b, N) {
    const { data: S, error: R } = await Tt.crossSiteSignUp(N, {
      ...b,
      connectIdentifier: ce,
    });
    if ((t(9, (B = !1)), S)) {
      if (S.status === "1") {
        t(7, (C = p(I.TheAccountHasBeen)));
        return;
      }
      ee === k.Turkey &&
        $e.track("complete_register_from_tr", {
          is_succeed: !0,
          fail_reason: "",
          platform: "web",
          source_page: "create_phemex_account_with_phemex_tr",
        }),
        t(20, (Ee = !0));
      return;
    }
    R &&
      (ee === k.Turkey &&
        $e.track("complete_register_from_tr", {
          is_succeed: !1,
          fail_reason: R.message,
          platform: "web",
          source_page: "create_phemex_account_with_phemex_tr",
        }),
      xe.send("toast", "error", R));
  }
  function Y(b, N) {
    return N === "Target" ? z.target : b(Ht.ACCOUNT_OVERVIEW.pathname);
  }
  async function je(b, N, S, R) {
    $e.track("verify", {
      verify_type: "email_verify",
      business_type: "register",
    }),
      kt.event("user.register", "verify_submit", "verify.submit_total");
    const { data: H, error: j } = await Tt.confirmRegister({
      code: b,
      mailCode: N,
      email: S,
    });
    if (H)
      return (
        $e.track("complete_register", {
          is_succeed: !0,
          verify_type: "email_verify",
          referral_code: R,
          channel: Ie,
        }),
        kt.event("user.register", "verify_submit", "verify.submit_success"),
        localStorage.setItem("close-receive-member", "N"),
        localStorage.setItem("base-kyc-status", "1"),
        xe.send("toast", "info", { message: p(I.Registered) }),
        await kt.bindGoogleClientId(),
        setTimeout(() => {
          kt.event("user.welcome", "open_welcome_page", "after_register"),
            window.location.assign(Y(i, z.action));
        }, 200),
        { code: 0, msg: "" }
      );
    if (j)
      return (
        $e.track("complete_register", {
          is_succeed: !1,
          fail_reason: j.message,
          verify_type: "email_verify",
          referral_code: R,
        }),
        xe.send("toast", "error", j),
        { code: j.code, msg: j.message }
      );
  }
  function Se(b) {
    b.keyCode === 13 &&
      (kt.event("user.register", "btn_click", "form.continue"), Ne());
  }
  function de(b) {
    return function () {
      b === "password_input_box" && (t(15, (we = !0)), t(14, (Ve = !1))),
        $e.track("input_box_focus", {
          input_box_type: b,
          business_type: "register",
          ui_position: "register_page",
        });
    };
  }
  function X(b) {
    return function () {
      t(7, (C = zs(s, p, I))),
        b === "password_input_box" && (t(8, (q = O(V))), t(14, (Ve = !0))),
        q || t(15, (we = !1)),
        $e.track("input_box_unfocus", {
          input_box_type: b,
          business_type: "register",
          ui_position: "register_page",
        });
    };
  }
  function O(b) {
    return b === ""
      ? p(I.NoPasswordError)
      : b && (!Js.PASSWORD.test(b) || !Js.CHARACTER_ASC.test(b))
      ? p(I.PasswordError)
      : null;
  }
  function K() {
    t(6, (L = pr.innerWidth));
  }
  function He(b) {
    (P = b), t(3, P);
  }
  function Be(b) {
    (V = b), t(4, V);
  }
  function J(b) {
    (M = b), t(5, M);
  }
  const Q = () => t(13, (be = !be));
  return (
    (r.$$set = (b) => {
      "registerUIVersion" in b && t(1, (u = b.registerUIVersion)),
        "modalUI" in b && t(0, (c = b.modalUI)),
        "accountProps" in b && t(31, (h = b.accountProps)),
        "hideBonusImg" in b && t(2, (g = b.hideBonusImg));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 8 && (s = P && P.trim()),
        r.$$.dirty[0] & 16 && t(8, (q = O(V))),
        r.$$.dirty[0] & 32 && fe(M),
        r.$$.dirty[1] & 6 && Ae(i, z.target, z.modal);
    }),
    [
      c,
      u,
      g,
      P,
      V,
      M,
      L,
      C,
      q,
      B,
      ne,
      ge,
      pe,
      be,
      Ve,
      we,
      De,
      ce,
      se,
      ee,
      Ee,
      Z,
      o,
      p,
      D,
      k,
      Pe,
      Ne,
      Se,
      de,
      X,
      h,
      z,
      i,
      K,
      He,
      Be,
      J,
      Q,
    ]
  );
}
class br extends gt {
  constructor(e) {
    super(),
      pt(
        this,
        e,
        li,
        ii,
        bt,
        { registerUIVersion: 1, modalUI: 0, accountProps: 31, hideBonusImg: 2 },
        null,
        [-1, -1]
      );
  }
}
function ai(r) {
  let e,
    t,
    s = r[0](I.RegistrationSuccessful) + "",
    i,
    a,
    o,
    u = r[0](I.YouHaveSuccessfully) + "",
    c;
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (i = y(s)),
        (a = w()),
        (o = d("div")),
        (c = y(u)),
        this.h();
    },
    l(h) {
      e = _(h, "DIV", { class: !0 });
      var g = v(e);
      t = _(g, "DIV", { class: !0 });
      var p = v(t);
      (i = U(p, s)), p.forEach(n), (a = $(g)), (o = _(g, "DIV", { class: !0 }));
      var D = v(o);
      (c = U(D, u)), D.forEach(n), g.forEach(n), this.h();
    },
    h() {
      f(t, "class", "f24 fw3 cf"),
        f(o, "class", "mt16 lh18 f14 cf"),
        f(e, "class", "warp df fdc jcc aic svelte-1uttsj2");
    },
    m(h, g) {
      F(h, e, g), l(e, t), l(t, i), l(e, a), l(e, o), l(o, c);
    },
    p: Te,
    i: Te,
    o: Te,
    d(h) {
      h && n(e);
    },
  };
}
function ni(r) {
  return [Wt("LG")];
}
class oi extends gt {
  constructor(e) {
    super(), pt(this, e, ni, ai, bt, {});
  }
}
const ci = (r) => ({}),
  cr = (r) => ({});
function fi(r) {
  let e, t, s, i, a, o, u, c, h, g, p, D, k;
  const G = r[2].default,
    L = Os(G, r, r[1], null),
    P = r[2].down,
    V = Os(P, r, r[1], cr);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (s = d("div")),
        (i = d("div")),
        (a = d("div")),
        (o = d("div")),
        L && L.c(),
        (u = w()),
        V && V.c(),
        (c = w()),
        (h = d("div")),
        (g = y("BitYaris, Trade Simple ")),
        (p = d("br")),
        (D = y(" © Copyright 2024 BitYaris All rights reserved")),
        this.h();
    },
    l(C) {
      e = _(C, "DIV", { class: !0 });
      var q = v(e);
      t = _(q, "DIV", { class: !0 });
      var B = v(t);
      s = _(B, "DIV", { class: !0 });
      var ne = v(s);
      i = _(ne, "DIV", { class: !0 });
      var ge = v(i);
      a = _(ge, "DIV", { class: !0 });
      var M = v(a);
      o = _(M, "DIV", {});
      var te = v(o);
      L && L.l(te),
        te.forEach(n),
        M.forEach(n),
        ge.forEach(n),
        (u = $(ne)),
        V && V.l(ne),
        ne.forEach(n),
        (c = $(B)),
        (h = _(B, "DIV", { class: !0 }));
      var z = v(h);
      (g = U(z, "BitYaris, Trade Simple ")),
        (p = _(z, "BR", {})),
        (D = U(z, " © Copyright 2024 BitYaris All rights reserved")),
        z.forEach(n),
        B.forEach(n),
        q.forEach(n),
        this.h();
    },
    h() {
      f(a, "class", "login svelte-heyhod"),
        f(i, "class", "main svelte-heyhod"),
        f(s, "class", "czjz f1 mainWarp svelte-heyhod"),
        f(h, "class", "copy-right pt8 f12 tc svelte-heyhod"),
        f(t, "class", "content df f1 svelte-heyhod"),
        f(e, "class", "warp svelte-heyhod");
    },
    m(C, q) {
      F(C, e, q),
        l(e, t),
        l(t, s),
        l(s, i),
        l(i, a),
        l(a, o),
        L && L.m(o, null),
        l(s, u),
        V && V.m(s, null),
        l(t, c),
        l(t, h),
        l(h, g),
        l(h, p),
        l(h, D),
        (k = !0);
    },
    p(C, [q]) {
      L &&
        L.p &&
        (!k || q & 2) &&
        Ms(L, G, C, C[1], k ? Ws(G, C[1], q, null) : Hs(C[1]), null),
        V &&
          V.p &&
          (!k || q & 2) &&
          Ms(V, P, C, C[1], k ? Ws(P, C[1], q, ci) : Hs(C[1]), cr);
    },
    i(C) {
      k || (T(L, C), T(V, C), (k = !0));
    },
    o(C) {
      A(L, C), A(V, C), (k = !1);
    },
    d(C) {
      C && n(e), L && L.d(C), V && V.d(C);
    },
  };
}
function ui(r, e, t) {
  let s;
  ht(r, ls, (o) => t(0, (s = o)));
  let { $$slots: i = {}, $$scope: a } = e;
  return (
    et(() => {
      document.body.style.height = "100%";
    }),
    (r.$$set = (o) => {
      "$$scope" in o && t(1, (a = o.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1 && s(Ht.HOME.pathname);
    }),
    [s, a, i]
  );
}
class di extends gt {
  constructor(e) {
    super(), pt(this, e, ui, fi, bt, {});
  }
}
function fr(r) {
  let e, t;
  return (
    (e = new di({
      props: { $$slots: { default: [_i] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      p(s, i) {
        const a = {};
        i & 259 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function ur(r) {
  let e, t;
  return (
    (e = new oi({})),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function _i(r) {
  let e,
    t,
    s,
    i,
    a = r[0] && ur();
  return (
    (s = new br({ props: { registerUIVersion: r[1] } })),
    {
      c() {
        a && a.c(), (e = w()), (t = d("div")), re(s.$$.fragment), this.h();
      },
      l(o) {
        a && a.l(o), (e = $(o)), (t = _(o, "DIV", { class: !0 }));
        var u = v(t);
        ie(s.$$.fragment, u), u.forEach(n), this.h();
      },
      h() {
        f(t, "class", "register-container svelte-1ajdkow");
      },
      m(o, u) {
        a && a.m(o, u), F(o, e, u), F(o, t, u), le(s, t, null), (i = !0);
      },
      p(o, u) {
        o[0]
          ? a
            ? u & 1 && T(a, 1)
            : ((a = ur()), a.c(), T(a, 1), a.m(e.parentNode, e))
          : a &&
            (qe(),
            A(a, 1, 1, () => {
              a = null;
            }),
            Ke());
        const c = {};
        u & 2 && (c.registerUIVersion = o[1]), s.$set(c);
      },
      i(o) {
        i || (T(a), T(s.$$.fragment, o), (i = !0));
      },
      o(o) {
        A(a), A(s.$$.fragment, o), (i = !1);
      },
      d(o) {
        a && a.d(o), o && n(e), o && n(t), ae(s);
      },
    }
  );
}
function dr(r) {
  let e, t;
  return (
    (e = new Br({
      props: { $$slots: { right: [mi], left: [vi] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        re(e.$$.fragment);
      },
      l(s) {
        ie(e.$$.fragment, s);
      },
      m(s, i) {
        le(e, s, i), (t = !0);
      },
      p(s, i) {
        const a = {};
        i & 258 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a);
      },
      i(s) {
        t || (T(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        A(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        ae(e, s);
      },
    }
  );
}
function vi(r) {
  let e, t, s;
  return (
    (t = new Or({})),
    {
      c() {
        (e = d("div")), re(t.$$.fragment), this.h();
      },
      l(i) {
        e = _(i, "DIV", { class: !0, slot: !0 });
        var a = v(e);
        ie(t.$$.fragment, a), a.forEach(n), this.h();
      },
      h() {
        f(e, "class", "activity-container df jcc aic svelte-1ajdkow"),
          f(e, "slot", "left");
      },
      m(i, a) {
        F(i, e, a), le(t, e, null), (s = !0);
      },
      p: Te,
      i(i) {
        s || (T(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        A(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && n(e), ae(t);
      },
    }
  );
}
function mi(r) {
  let e, t, s;
  return (
    (t = new br({ props: { registerUIVersion: r[1] } })),
    {
      c() {
        (e = d("div")), re(t.$$.fragment), this.h();
      },
      l(i) {
        e = _(i, "DIV", { class: !0, slot: !0 });
        var a = v(e);
        ie(t.$$.fragment, a), a.forEach(n), this.h();
      },
      h() {
        f(e, "class", "df aic jcc"), f(e, "slot", "right");
      },
      m(i, a) {
        F(i, e, a), le(t, e, null), (s = !0);
      },
      p(i, a) {
        const o = {};
        a & 2 && (o.registerUIVersion = i[1]), t.$set(o);
      },
      i(i) {
        s || (T(t.$$.fragment, i), (s = !0));
      },
      o(i) {
        A(t.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && n(e), ae(t);
      },
    }
  );
}
function hi(r) {
  let e, t, s, i, a;
  e = new Gr({ props: { isLogin: !0 } });
  let o = r[1] === is && fr(r),
    u = r[1] === 3 && dr(r);
  return {
    c() {
      re(e.$$.fragment),
        (t = w()),
        o && o.c(),
        (s = w()),
        u && u.c(),
        (i = Xe());
    },
    l(c) {
      ie(e.$$.fragment, c),
        (t = $(c)),
        o && o.l(c),
        (s = $(c)),
        u && u.l(c),
        (i = Xe());
    },
    m(c, h) {
      le(e, c, h),
        F(c, t, h),
        o && o.m(c, h),
        F(c, s, h),
        u && u.m(c, h),
        F(c, i, h),
        (a = !0);
    },
    p(c, h) {
      c[1] === is
        ? o
          ? (o.p(c, h), h & 2 && T(o, 1))
          : ((o = fr(c)), o.c(), T(o, 1), o.m(s.parentNode, s))
        : o &&
          (qe(),
          A(o, 1, 1, () => {
            o = null;
          }),
          Ke()),
        c[1] === 3
          ? u
            ? (u.p(c, h), h & 2 && T(u, 1))
            : ((u = dr(c)), u.c(), T(u, 1), u.m(i.parentNode, i))
          : u &&
            (qe(),
            A(u, 1, 1, () => {
              u = null;
            }),
            Ke());
    },
    i(c) {
      a || (T(e.$$.fragment, c), T(o), T(u), (a = !0));
    },
    o(c) {
      A(e.$$.fragment, c), A(o), A(u), (a = !1);
    },
    d(c) {
      ae(e, c), c && n(t), o && o.d(c), c && n(s), u && u.d(c), c && n(i);
    },
  };
}
function gi(r) {
  let e, t, s, i, a, o, u, c;
  return (
    (document.title = e = r[2](I.Title)),
    (u = new Mr({
      props: { $$slots: { default: [hi] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (t = d("meta")),
          (s = d("meta")),
          (i = d("style")),
          (a = y(`@media screen and (min-width: 640px) {
      html,
      body {
        min-width: 100%;
      }
    }`)),
          (o = w()),
          re(u.$$.fragment),
          this.h();
      },
      l(h) {
        const g = wr("svelte-hyaksa", document.head);
        (t = _(g, "META", { name: !0, content: !0 })),
          (s = _(g, "META", { name: !0, content: !0 })),
          (i = _(g, "STYLE", {}));
        var p = v(i);
        (a = U(
          p,
          `@media screen and (min-width: 640px) {
      html,
      body {
        min-width: 100%;
      }
    }`
        )),
          p.forEach(n),
          g.forEach(n),
          (o = $(h)),
          ie(u.$$.fragment, h),
          this.h();
      },
      h() {
        f(t, "name", "description"),
          f(t, "content", r[2](I.Description)),
          f(s, "name", "keywords"),
          f(s, "content", r[2](I.Keywords));
      },
      m(h, g) {
        l(document.head, t),
          l(document.head, s),
          l(document.head, i),
          l(i, a),
          F(h, o, g),
          le(u, h, g),
          (c = !0);
      },
      p(h, [g]) {
        (!c || g & 4) && e !== (e = h[2](I.Title)) && (document.title = e);
        const p = {};
        g & 259 && (p.$$scope = { dirty: g, ctx: h }), u.$set(p);
      },
      i(h) {
        c || (T(u.$$.fragment, h), (c = !0));
      },
      o(h) {
        A(u.$$.fragment, h), (c = !1);
      },
      d(h) {
        n(t), n(s), n(i), h && n(o), ae(u, h);
      },
    }
  );
}
const is = 1;
function pi(r, e, t) {
  let s, i;
  ht(r, ls, (g) => t(3, (s = g))), ht(r, Rr, (g) => t(4, (i = g)));
  const a = Wt("LG");
  $r();
  let o,
    u = 0;
  et(() => {
    const { code: g } = Dt();
    t(0, (o = !!g)), h(), c(), yr();
  });
  async function c() {
    if (o) {
      t(1, (u = is));
      return;
    }
    t(1, (u = 3));
  }
  async function h() {
    const { reply: g } = await Tt.getPublicGeoV2();
    g && g.data.code === 31029 && mr.launchRegisterTips(a);
  }
  return (
    (r.$$.update = () => {
      if (r.$$.dirty & 24 && i) {
        const { connectIdentifier: g, code: p } = Dt();
        !g && !p && window.location.assign(s(Ht.ACCOUNT_OVERVIEW.pathname));
      }
    }),
    [o, u, a, s, i]
  );
}
class bi extends gt {
  constructor(e) {
    super(), pt(this, e, pi, gi, bt, {});
  }
}
const Si = bi;
export { Si as component };
//# sourceMappingURL=chunk-583846a5.js.map
