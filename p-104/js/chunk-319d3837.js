import {
  S as de,
  i as he,
  s as me,
  e as b,
  c as E,
  a as k,
  d as g,
  b as m,
  f as we,
  g as y,
  h as Ie,
  t as R,
  j as ke,
  k as L,
  l as Pe,
  u as Oe,
  m as Ae,
  n as Le,
  o as je,
  p as J,
  q as x,
  r as Q,
  v as Ze,
  w as ft,
  x as Z,
  y as oe,
  z as at,
  A as vs,
  B as Ee,
  C as j,
  D as S,
  E as H,
  F as D,
  G as re,
  H as _,
  I as se,
  J as ve,
  K as $e,
  L as Ke,
  M as bs,
  N as Es,
  O as ue,
  P as Ce,
  Q as ge,
  R as _e,
  T as $s,
  U as ye,
  V as ss,
  W as kt,
  X as xe,
  Y as We,
  Z as Tt,
  _ as wt,
  $ as St,
  a0 as Is,
  a1 as ks,
  a2 as Ts,
  a3 as Dt,
  a4 as ws,
  a5 as Ss,
  a6 as Ds,
} from "./chunk-8f7551c4.js";
import {
  u as ns,
  b as ut,
  l as P,
  B as Ue,
  f as Ve,
  s as Fe,
  P as fe,
  a as rs,
  g as qe,
  o as ys,
  L as as,
  c as is,
  d as Ps,
  e as Os,
  h as As,
  i as yt,
  m as cs,
  j as Ls,
  k as it,
  n as Ns,
  p as Ye,
  q as ct,
  r as Pt,
  t as Cs,
  v as Xe,
  w as Rs,
  x as Vs,
  y as Ms,
  z as os,
  A as dt,
  C as Gs,
  D as Bs,
  E as Ot,
  F as js,
  G as At,
  H as Lt,
  I as Je,
} from "./chunk-772394bf.js";
import {
  S as Hs,
  e as Te,
  a as Us,
  B as et,
  f as Fs,
  m as fs,
} from "./app-6c8af094.js";
import { f as ht, P as Ws } from "./chunk-2724ef1c.js";
import { H as Ks } from "./chunk-a4912475.js";
import {
  S as Ge,
  t as Nt,
  T as zs,
  c as Ct,
  F as qs,
} from "./chunk-0e213858.js";
import {
  C as Ys,
  g as Xs,
  a as Js,
  M as Qs,
  l as Zs,
} from "./chunk-8f905c50.js";
import "./chunk-bbc88117.js";
import "./chunk-f928d363.js";
/* empty css              */ const xs = (r) => ({}),
  Rt = (r) => ({});
function en(r) {
  let e;
  const l = r[5].skeleton,
    t = Pe(l, r, r[4], Rt);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 16) &&
        Oe(t, l, s, s[4], e ? Le(l, s[4], n, xs) : Ae(s[4]), Rt);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function tn(r) {
  let e;
  const l = r[5].default,
    t = Pe(l, r, r[4], null);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 16) &&
        Oe(t, l, s, s[4], e ? Le(l, s[4], n, null) : Ae(s[4]), null);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function ln(r) {
  let e, l, t, s;
  const n = [tn, en],
    a = [];
  function i(c, o) {
    return c[3] ? 0 : 1;
  }
  return (
    (l = i(r)),
    (t = a[l] = n[l](r)),
    {
      c() {
        (e = b("div")), t.c(), this.h();
      },
      l(c) {
        e = E(c, "DIV", { class: !0, style: !0 });
        var o = k(e);
        t.l(o), o.forEach(g), this.h();
      },
      h() {
        m(e, "class", "skeleton-wrap svelte-eg7gxa"),
          we(e, "--height", r[0]),
          we(e, "--mheight", r[1] || r[0]),
          we(e, "--background", r[2]);
      },
      m(c, o) {
        y(c, e, o), a[l].m(e, null), (s = !0);
      },
      p(c, [o]) {
        let f = l;
        (l = i(c)),
          l === f
            ? a[l].p(c, o)
            : (Ie(),
              R(a[f], 1, 1, () => {
                a[f] = null;
              }),
              ke(),
              (t = a[l]),
              t ? t.p(c, o) : ((t = a[l] = n[l](c)), t.c()),
              L(t, 1),
              t.m(e, null)),
          (!s || o & 1) && we(e, "--height", c[0]),
          (!s || o & 3) && we(e, "--mheight", c[1] || c[0]),
          (!s || o & 4) && we(e, "--background", c[2]);
      },
      i(c) {
        s || (L(t), (s = !0));
      },
      o(c) {
        R(t), (s = !1);
      },
      d(c) {
        c && g(e), a[l].d();
      },
    }
  );
}
function sn(r, e, l) {
  let { $$slots: t = {}, $$scope: s } = e,
    { height: n } = e,
    { mheight: a = "" } = e,
    { background: i = "" } = e,
    { loaded: c } = e;
  return (
    (r.$$set = (o) => {
      "height" in o && l(0, (n = o.height)),
        "mheight" in o && l(1, (a = o.mheight)),
        "background" in o && l(2, (i = o.background)),
        "loaded" in o && l(3, (c = o.loaded)),
        "$$scope" in o && l(4, (s = o.$$scope));
    }),
    [n, a, i, c, s, t]
  );
}
class mt extends de {
  constructor(e) {
    super(),
      he(this, e, sn, ln, me, {
        height: 0,
        mheight: 1,
        background: 2,
        loaded: 3,
      });
  }
}
const nn = (r) => ({}),
  Vt = (r) => ({}),
  rn = (r) => ({}),
  Mt = (r) => ({}),
  an = (r) => ({}),
  Gt = (r) => ({ slot: "skeleton" });
function cn(r) {
  let e;
  const l = r[7].logout,
    t = Pe(l, r, r[8], Vt);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 256) &&
        Oe(t, l, s, s[8], e ? Le(l, s[8], n, nn) : Ae(s[8]), Vt);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function on(r) {
  let e;
  const l = r[7].login,
    t = Pe(l, r, r[8], Mt);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 256) &&
        Oe(t, l, s, s[8], e ? Le(l, s[8], n, rn) : Ae(s[8]), Mt);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function fn(r) {
  let e;
  const l = r[7].default,
    t = Pe(l, r, r[8], null);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 256) &&
        Oe(t, l, s, s[8], e ? Le(l, s[8], n, null) : Ae(s[8]), null);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function un(r) {
  let e, l, t, s;
  const n = [fn, on, cn],
    a = [];
  function i(c, o) {
    return c[0] ? 0 : c[1] === "Login" ? 1 : c[1] === "Logout" ? 2 : -1;
  }
  return (
    ~(e = i(r)) && (l = a[e] = n[e](r)),
    {
      c() {
        l && l.c(), (t = Ee());
      },
      l(c) {
        l && l.l(c), (t = Ee());
      },
      m(c, o) {
        ~e && a[e].m(c, o), y(c, t, o), (s = !0);
      },
      p(c, o) {
        let f = e;
        (e = i(c)),
          e === f
            ? ~e && a[e].p(c, o)
            : (l &&
                (Ie(),
                R(a[f], 1, 1, () => {
                  a[f] = null;
                }),
                ke()),
              ~e
                ? ((l = a[e]),
                  l ? l.p(c, o) : ((l = a[e] = n[e](c)), l.c()),
                  L(l, 1),
                  l.m(t.parentNode, t))
                : (l = null));
      },
      i(c) {
        s || (L(l), (s = !0));
      },
      o(c) {
        R(l), (s = !1);
      },
      d(c) {
        ~e && a[e].d(c), c && g(t);
      },
    }
  );
}
function dn(r) {
  let e;
  const l = r[7].init,
    t = Pe(l, r, r[8], Gt);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, n) {
      t &&
        t.p &&
        (!e || n & 256) &&
        Oe(t, l, s, s[8], e ? Le(l, s[8], n, an) : Ae(s[8]), Gt);
    },
    i(s) {
      e || (L(t, s), (e = !0));
    },
    o(s) {
      R(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function hn(r) {
  let e, l;
  const t = [r[3], { loaded: r[1] !== "Init" && r[2] }];
  let s = { $$slots: { skeleton: [dn], default: [un] }, $$scope: { ctx: r } };
  for (let n = 0; n < t.length; n += 1) s = je(s, t[n]);
  return (
    (e = new mt({ props: s })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(n) {
        x(e.$$.fragment, n);
      },
      m(n, a) {
        Q(e, n, a), (l = !0);
      },
      p(n, [a]) {
        const i =
          a & 14
            ? Ze(t, [
                a & 8 && ft(n[3]),
                a & 6 && { loaded: n[1] !== "Init" && n[2] },
              ])
            : {};
        a & 259 && (i.$$scope = { dirty: a, ctx: n }), e.$set(i);
      },
      i(n) {
        l || (L(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        Z(e, n);
      },
    }
  );
}
function mn(r, e, l) {
  let t, s, n;
  oe(r, ns, (d) => l(1, (s = d))), oe(r, ut, (d) => l(2, (n = d)));
  let { $$slots: a = {}, $$scope: i } = e;
  const c = vs(a);
  let { height: o } = e,
    { mheight: f = "" } = e,
    { background: u = "" } = e;
  return (
    (r.$$set = (d) => {
      l(3, (e = je(je({}, e), at(d)))),
        "height" in d && l(4, (o = d.height)),
        "mheight" in d && l(5, (f = d.mheight)),
        "background" in d && l(6, (u = d.background)),
        "$$scope" in d && l(8, (i = d.$$scope));
    }),
    l(0, (t = !!c.default)),
    (e = at(e)),
    [t, s, n, e, o, f, u, a, i]
  );
}
class _t extends de {
  constructor(e) {
    super(), he(this, e, mn, hn, me, { height: 4, mheight: 5, background: 6 });
  }
}
const _n = `${Hs.STATIC_URL}/pubimg/`,
  te = {
    BANNER_LOGIN_BG:
      "c642bb352e8b2f57442722e0163053553879a6b3cace78ef21ecb66682025e11.png",
    BANNER_LOGIN_MOBILE:
      "c642bb352e8b2f57442722e0163053553879a6b3cace78ef21ecb66682025e11.png",
    BANNER_LOGOUT_BG:
      "e46c5c3663ca7de2fc173609f6bcf9da97fac5a513385af8470b4b2ca7ed0163.png",
    BANNER_LOGOUT_MOBILE:
      "e46c5c3663ca7de2fc173609f6bcf9da97fac5a513385af8470b4b2ca7ed0163.png",
    DOWNLOAD_LOGIN:
      "12e183f40f5d12702dcb52e3533c9733ddbb5fd32b76685a96690835ee45ab61.png",
    DOWNLOAD_LOGOUT:
      "3799e947e779c60918f589fd6be647e46ce5dc1ecd7c1032bf21c0cd77632825.png",
    GIFT: "859e020c0e6c91e89afbfa229786f62e65c37097e43b0d86fc87e122ac5a7f4e.png",
    APPSTORE:
      "150841ad46c554d674eb89ce75479936f1072622a28a52c30926ae6d570d6841.png",
    GOOGLE:
      "6f494fbf8628e75a72d446ef2fba6b88fb40beefb6346b3dd09c2235e065b7fc.png",
    APK: "394e48fea16cb3e12b0e716b8032ee2c72b33f69de81fd7fd39b195216c7a6ef.png",
    QRCODE:
      "7e16c44a9c6f694483f48a7d26fbc9cf2757e99e65707af2988113ec2ee71b7d.png",
    IPHONE:
      "166c592c81a9f8a33a96db821c0934c98d5aebdee857e91a2b3faeb3417d07bb.png",
    BRAND_SAFE_1:
      "46a5679e80ef7189ed1521df332bfe0b0a7a5ad01e7089991111725b936a574f.png",
    BRAND_SAFE_2:
      "69f3bb7ca600eb932dac40611f665254bc434a835ebf031c865a63b039d45810.png",
    BRAND_SAFE_3:
      "52947c81b5741bb2a4f6832279c372c75f57b949500301984ba8aee0fdb676ed.png",
    BRAND_SUPER_1:
      "e6590736c8de5378318550018d6f1ad9a165439c215c6135bd474e2d856ff235.png",
    BRAND_SUPER_2:
      "ebd96ca0f3794d05183399bdabc8381e13a833a189c51b3bfe1bcde26beb0130.png",
    BRAND_SIMPLE_1:
      "2c3f135cdf9484e3d159de8d943e8579d0d24516cebf7cbc5f37cb963ce2c257.png",
    BRAND_SIMPLE_2:
      "f821c3543d0ee1dd31d53668d0654eb08a34afa881cc1aa3fe2fb4a64e23db8e.png",
    BRAND_SIMPLE_3:
      "ef03ebf89d992ae89b34c3250e74d10bd935b8bbf0ab3fd76fc47148bd377251.png",
    DAUPHINE_UNIVERSITY:
      "6c3f0fdac12afe7161182a85ad8c03d8d4493c34dc635aa41f09f0f214921f05.png",
    UNIVERSITY:
      "4e1e35679f44011f0562df598fe1b99d441006155cb93073280f109f64450523.png",
    QUOTA:
      "e07bd93f17cb19294c84143ed6c9d975207eaba2b04714a9bcc8fd8cc0051e6e.png",
    PRESS_FORBES:
      "4b951620ab0e8e0cb1e4c6a59d84bee9c250ce69af3486f952cb97e5991ac3dd.png",
    PRESS_NEW_YORK_POST:
      "9dd31b44d7713b8a80ac09512330b6dca44a585ef640d4611f37581ee4ebe307.png",
    PRESS_BUSINESS:
      "aa9c5dd8ceca1b4fa73b8d0b1b3d6d8f65382c1f8d70f6216de3617167f2d824.png",
    PRESS_IBT:
      "4bfc44dae7022a233aa0340271254a42de7a02f63b1c0f7620b2f9d42a6c6066.png",
    KNOWLEDGE_BG:
      "35450231d3595c9422fc6f4935f6060092eaa05df857deca359f5bd36b03eab9.png",
    PRO1: "de9e3405e429d27d006633badb0d4c721b959b9eb99b0f9ea9b7efc82547ba09.png",
    PRO2: "fdc66dcc900d23a1742d4bef79ee97057ce5fdfda19e86a8da72d995a7d7a71a.png",
    PRO3: "7416dd66d12d14532a92c8e1f84eca7d411587534638c5a70c52890bd019f251.png",
    DOWNLOAD_QRCODE:
      "79b20259279155bc68d478d435610f488a31bee451049e33e381f2c51e1be6ef.png",
    SIMULATE:
      "dbfde50b15bcab6f40b1ecbedaa94bc73fad953753dcdaa0ef6b946a726df7f2.png",
    APPLE:
      "aa5b679bcc85e7f6602179b7d5460529fda82ee26227c453b8becd05e3c0333a.png",
    GOOGLE_PLAY:
      "6191493cc76b12d03878f30bddcf9ebdd5344729ab884e84af5eb4ffaba90806.png",
    H5_GOOGLE_PLAY:
      "2273560ddbfe73516dab82efde8350a50804cb5576204a0bdd71dd8370c534aa.png",
    H5_APPLE:
      "2e1884418e87804cec7b16dd9bf7770c0b9d60e34d680f412be8548fa7aae77b.png",
    STEP1:
      "2c3f135cdf9484e3d159de8d943e8579d0d24516cebf7cbc5f37cb963ce2c257.png",
    STEP2:
      "269d166af46c7faa163430e94c49377e420564cae57b523e1accfef722868c31.png",
    STEP3:
      "1db4d9ced40157dcf44172fdba74bed016add61f01b407046144dd0acfbb8298.png",
    Forbes:
      "4b951620ab0e8e0cb1e4c6a59d84bee9c250ce69af3486f952cb97e5991ac3dd.png",
    IBT: "4bfc44dae7022a233aa0340271254a42de7a02f63b1c0f7620b2f9d42a6c6066.png",
    NYP: "9dd31b44d7713b8a80ac09512330b6dca44a585ef640d4611f37581ee4ebe307.png",
    MSB: "99ce3058560284752349dbcbf786d24a3a9204122099a7d727758335a0896bfc.png",
    DFI: "b50cc6fd5dc5e53af0ff0aa9a9dad1d87763bf1b4dbda694aa0fb8283754312e.png",
    FC: "5bde7d7889f5da4dad4fe8524fc1493d7837c683ccd40f16db4fb4c8e9df0a15.png",
    PSL: "4be716806a9414307ec5fbf6c814158e27106f4385e9413c4347ab65b153a880.png",
    USE_EN1:
      "ae8a4f163e2ad43cdcf681e4daaecae8616e7b1c064bd0f2b7b171539776b526.jpg",
    USE_EN2:
      "adb27546dc090da72e305d97b0cfa6c613b86b0812b1e149422fbe245f96c74a.jpg",
    USE_EN3:
      "7aab6f51055a52fa2f1901888ebc88c647abccaa48d970608fbd41075b8d7d78.jpg",
    USE_ES1:
      "ffaa6dcb9d116a5d638aa0ed60be1c795940aafbcea3cd7aa4aac1773cfdbde3.jpg",
    USE_ES2:
      "a122661c115923de8df96306f06d8185078e896b2a41da042531b2bc96806eff.jpg",
    USE_ES3:
      "3b1ef9c1cab330376cc60aead7c0fd9e736de6f5855a3285c891236954df1423.jpg",
    USE_TR1:
      "f824e0f4b02b7f2b3a20ad255f827d8767fdd323c19953a1de7a676d24d4ce45.jpg",
    USE_TR2:
      "f29faedc03d62d9e9cb31f14bc5c3a40a0049c284e927ab9fb717739e936981f.jpg",
    USE_TR3:
      "1f8e7d61c59fac2fa4af6f81e2e473a75705881ab20eb8e0879563994300357e.jpg",
    USE_VI1:
      "a33d1b5734080db1aa43a98a4887e03211453f3545787468abca6c01b1fbe7af.jpg",
    USE_VI2:
      "b1918360a540b72cc03de647ea49bf0f2796c11a8058ed5ea856e5896a2f1417.jpg",
    USE_VI3:
      "af17ff5265401904b82ca54e31294f7f4c276c5356d7ce45ba381c77cc90b26c.jpg",
    NEWS: "4d5a0551e507464f4dbe2805b4e3b587942d6a042b2970feacd080c7fb556338.png",
    MARQUEE_GOOGLE:
      "9e6bf6740f61eedf02f0a9ce0c292c84e8a7f5c1c530293ee40a79fed2939e50.png",
    TWITTER:
      "1596c41f61185da6b4b36b4807723aa81308f21e06964cc08ab5fa0cac60c528.png",
    BLOOMBERG:
      "ac63d606788449f63b85ca385877c0db54c0564175dff27db9254ca415bc730f.png",
    NASDAQ:
      "46c5c656372f620ebee227e197226afaa994d2348323670773d32568f4132703.png",
    COIN_GECKO:
      "7769ea485ca64f8402566074209695e2ce9b71cae85ed7faf0210d0cd8d73400.png",
    COIN_MARKET_CAP:
      "e03ec136f43bc7b7a27dd88925c51be605aab7fdcd5ac2fdf226e91f2cb3bd5b.png",
    TRADING_VIEW:
      "7ab9622b29eb3a23631f8a16da83eddcd0ac455ac47e2e905b8656d3366ebc49.png",
    SIMPLEX:
      "f9af3e4ca94f9c4c14883233d0266e04c0b4de658be557acf76da02a96732c52.png",
    CHAINALYSIS:
      "884d4a0804baea0415e89478cc868a23c2ce331b4510892faa2a9e9366bbec40.png",
    JUMIO:
      "2a9db7037e02001fc261ee41a3483a792fd44ae2cbdcb58970ba71fb994ad46e.png",
    MOONPAY:
      "ea328c0b871c6f9d721e4440b13b4624fdafde41111bbf7cfe61c75ff541a192.png",
    SOURCE:
      "81e282c7c90198461ab2dd58d509b4ebeadc3fdfb44918b8448d3d75498ba061.png",
    CONTRACT:
      "a7781485af8e0ffbb6b69025d8fadd9102c2b37171e4470ab0e07b0e3e80c80e.png",
    SPOT_TRADING:
      "f821c3543d0ee1dd31d53668d0654eb08a34afa881cc1aa3fe2fb4a64e23db8e.png",
    BUY_CRYPTO:
      "ff763f30963144efea49f64bb97a6184ce0b26da0ae5ea6aff2101b53dca7978.png",
    EARN: "ef03ebf89d992ae89b34c3250e74d10bd935b8bbf0ab3fd76fc47148bd377251.png",
    BONUS:
      "f4dfc668514c50d7aed020089021012cf535bb16bdf060dc0fc0ef8b09ee8d6f.png",
    REFERRAL:
      "e5d44ea7034d48f79f69e42c2aa8c1cca6ab45ff63691f5ebaa058ff5707eb5a.png",
    MARGIN_TRADING:
      "0f13a181a5f87d62d620490c276f9a33638c5fb0df6aeece828028296c2c769c.png",
    SOULPASS_BG:
      "8fa7d19f2fe4b1c5b0bcb1358ff7d3441075d4f9bb35f0247ebf419902e1fafa.png",
    SOULPASS_BG_H5:
      "79d3f170f130302adf09964ce3a29731f881581cb34974df878b1c15ec9719f0.png",
    PREHEAT_BANNER:
      "2562652c4978c8910be1e9943db89167f37f3b5b5035729e235e399a4197e1a0.jpg",
    ARROW_RIGHT:
      "ec87b8bc12fd3f7902a4e095c451d856db9ff0823c886bb3fafaedc16ebc9ead.png",
    H5_PREHEAT_BANNER:
      "189d436d468065f98eff67661211d5736bef3b007a4665086b9dd3f785eb3e5b.png",
    JP_BANNER_ICONS:
      "72ba163c0ad41f254e0c492c5d832fa11de38627670ad61dd77882afbcf265d6.png",
    PULSE:
      "38f0001380dfdad9eda2727e8fe35818f5eb1a7caa45087bafcc5f94e4a6e92b.png",
    DOWN_GREEN_ARROW:
      "8285567a1de0e57cb5e856ce7d88d8474e7f2574b1f59139c579ef375182e2d2.png",
    DOWN_GREEN_ARROW_H5:
      "bc28dba9aded9b7abf3695e348b5916d6f9dc3213767b0bb08422313b7dfd09f.png",
    APP_STORE_HOME:
      "6513abc5b8fc4d39315a96d183b4f5bb19d96f9b714171966bfa7532e7a4636d.png",
    GOOGLE_PLAY_HOME:
      "9fc211f26abb9809739d08a651a03938a746e4cc29e64ab073c0ccbcb4323a25.png",
    HEART:
      "e2af9bf4cceff5f5d5050dd344c8123d40bdb1347a7ec4edd6287760a18d3fd8.png",
    HAND_HEART:
      "f38d64c780f942d7808946f410321a4c3822e3666013ebb0328c2c16f4adf933.png",
    TALK: "03bd26ba8ca66134ef4686a6b9d5c600166a5204ccd50dc4a9118e324f312132.png",
    ICON_POSTER_1:
      "a81ae5286ee70f8cac0d0c5553f683e318ca103b8641ec57b03e458be98dcb16.png",
    ICON_POSTER_2:
      "3493a63d70fcf726cb1e062378eb28b3005174cda40831de0a04752d4846c0a3.png",
    ICON_POSTER_3:
      "5317a5be84e017e03f42640b5a843bf40095100efd0c4d41a41285b3ca8951ba.png",
    ICON_POSTER_4:
      "d19c54fec938c538bc06f121bafd6c918a81f4482732e31678d837510ad91e3b.png",
    ICON_POSTER_5:
      "6f31a41dc56ed10a8170a455799b9821372c8f7c278eff456759bb57bacaa4cf.png",
    ICON_POSTER_5_SUB:
      "3b8c4445972cf991236ad2afb1070e50fb91e9b1dc86c0903e7613b6423c30b9.png",
    KOL_ICON_1:
      "a244968b1d6d8a17ac126de003b6028f5cfc397768a5d04464571cca2032fb46.png",
    KOL_ICON_2:
      "73e87e19b5e683d2b6f7a9edfa0d11c0c5a3e842fedc9dcf64e48484ccf2ba99.png",
    KOL_ICON_3:
      "e4fe3f7e55a36eb7b732d25856fc40fbc7bb7ef9a05d11061dea9bc2111c3ebc.png",
    KOL_ICON_4:
      "3d55ce3594314f72e222e0f3e5a2b7a1a89062bbd82197dcc1ee4935106e652a.png",
    BANNER_TEXT:
      "63a20da9cf7f2cce24a5d110121c72adba91eb9b55be32407cc81b468cf3ba0d.png",
  };
Object.keys(te).forEach((r) => (te[r] = [_n, te[r]].join("")));
function gn(r) {
  let e,
    l,
    t = r[0](P.PulseSeason3) + "",
    s,
    n,
    a,
    i,
    c,
    o,
    f = r[0](P.PulseCastRule) + "",
    u;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (s = j(t)),
        (n = S()),
        (a = b("img")),
        (c = S()),
        (o = b("div")),
        (u = j(f)),
        this.h();
    },
    l(d) {
      e = E(d, "DIV", { class: !0 });
      var h = k(e);
      l = E(h, "DIV", { class: !0 });
      var p = k(l);
      (s = H(p, t)),
        (n = D(p)),
        (a = E(p, "IMG", { width: !0, height: !0, alt: !0, src: !0 })),
        p.forEach(g),
        (c = D(h)),
        (o = E(h, "DIV", { class: !0 }));
      var v = k(o);
      (u = H(v, f)), v.forEach(g), h.forEach(g), this.h();
    },
    h() {
      m(a, "width", "20"),
        m(a, "height", "20"),
        m(a, "alt", "Entry"),
        re(a.src, (i = te.ARROW_RIGHT)) || m(a, "src", i),
        m(l, "class", "shining cp svelte-1xxhk2j"),
        m(o, "class", "join f16 svelte-1xxhk2j"),
        m(e, "class", "preheat-text svelte-1xxhk2j");
    },
    m(d, h) {
      y(d, e, h), _(e, l), _(l, s), _(l, n), _(l, a), _(e, c), _(e, o), _(o, u);
    },
    p: se,
    i: se,
    o: se,
    d(d) {
      d && g(e);
    },
  };
}
function pn(r) {
  return [ve("LG")];
}
class vn extends de {
  constructor(e) {
    super(), he(this, e, pn, gn, me, {});
  }
}
function bn(r) {
  let e = r[0](P.SignUpWithEmail) + "",
    l;
  return {
    c() {
      l = j(e);
    },
    l(t) {
      l = H(t, e);
    },
    m(t, s) {
      y(t, l, s);
    },
    p: se,
    d(t) {
      t && g(l);
    },
  };
}
function En(r) {
  let e, l, t, s, n, a, i, c;
  return (
    (l = new Ue({
      props: {
        class: "fw2",
        type: "primary",
        $$slots: { default: [bn] },
        $$scope: { ctx: r },
      },
    })),
    l.$on("click", r[2]),
    (n = new Ys({ props: { isShowOr: !1, entrance: "Register" } })),
    {
      c() {
        (e = b("div")),
          J(l.$$.fragment),
          (t = S()),
          (s = b("div")),
          J(n.$$.fragment),
          this.h();
      },
      l(o) {
        e = E(o, "DIV", { class: !0 });
        var f = k(e);
        x(l.$$.fragment, f), (t = D(f)), (s = E(f, "DIV", { class: !0 }));
        var u = k(s);
        x(n.$$.fragment, u), u.forEach(g), f.forEach(g), this.h();
      },
      h() {
        m(s, "class", "google ml12 svelte-990irc"),
          m(e, "class", "wrap df TW  svelte-990irc");
      },
      m(o, f) {
        y(o, e, f),
          Q(l, e, null),
          _(e, t),
          _(e, s),
          Q(n, s, null),
          (a = !0),
          i || ((c = $e(s, "click", r[1])), (i = !0));
      },
      p(o, [f]) {
        const u = {};
        f & 16 && (u.$$scope = { dirty: f, ctx: o }), l.$set(u);
      },
      i(o) {
        a || (L(l.$$.fragment, o), L(n.$$.fragment, o), (a = !0));
      },
      o(o) {
        R(l.$$.fragment, o), R(n.$$.fragment, o), (a = !1);
      },
      d(o) {
        o && g(e), Z(l), Z(n), (i = !1), c();
      },
    }
  );
}
function $n(r, e, l) {
  let t;
  oe(r, Ve, (i) => l(3, (t = i)));
  const s = ve("LG");
  function n() {
    Fe.track("web_click", {
      $screen_name: "home",
      $element_content: "sign up with google",
    });
  }
  function a() {
    window.location.assign(t(fe.REGISTER.pathname));
  }
  return [s, n, a];
}
class In extends de {
  constructor(e) {
    super(), he(this, e, $n, En, me, {});
  }
}
const kn = {
  Title: "ed2e13",
  Description: "54a91c",
  Keywords: "5715cc",
  OGTitle: "55595a",
  OGDescription: "7b8cb4",
  TheFastest: "f80df9",
  Cryptocurrency: "18cefa",
  Founded: "2cb57f",
  Claim: "13a446",
  RecentTrading: "5717e9",
  Vol: "4d4a52",
  TradeCrypto: "d03314",
  CurrentlyOffer: "457e2f",
  SupportTraditional: "c99352",
  WhyChooseUs: "b5cd00",
  HighPerformanceStability: "18d512",
  CrossEngine: "a9c1ff",
  AdvancedFunctionalities: "0c5d92",
  WeProvideStateOfTheArt: "898b0f",
  HighestLevelSecurity: "5e063b",
  AllAssets: "05506c",
  BrandAccessSupport: "60ba14",
  PhemexFocusesOn: "027667",
  PhemexInTheMedia: "e1d8ba",
  GetApp: "356e3e",
  TradeCryptocurrency: "378299",
  Install: "c8920c",
  Download: "e8a9ad",
  GETSTARTED: "f7aba9",
  TheFastestCryptocurrency: "cada33",
  SPOTTRADING: "236c8a",
  ContractTrading: "08fe4f",
  Markets: "fd1892",
  Spot: "cd4dc7",
  Contract: "16a4ec",
  All: "60bc30",
  Coin: "77ef36",
  LastPrice: "57115f",
  Change: "4ea087",
  Chart: "b72883",
  Action: "3af78a",
  Symbol: "86aa8c",
  HereAreAFew: "b9cdc9",
  AccessAnywhere: "d826af",
  SimpleFastEasy: "b224e1",
  StartToTrade: "ac6ac0",
  ScanTo: "219c13",
  EnterYourEmail: "be6791",
  ItOnlyTakes: "624082",
  OrderResponseTimes: "6de60a",
  IntegratedLiquidity: "b62b1a",
  ExecutedOrders: "ba54ce",
  AverageTradingVolume: "30f108",
  HowToTrade: "e6e3b1",
  BuyLong: "8f1586",
  SellShort: "ac25a7",
  TryOurContractDemo: "ef890e",
  HowDoYouWant: "833441",
  Price: "e0f1d8",
  NowYouCanTake: "b5c069",
  ClosePosition: "e50122",
  MakingMoneySimple: "05ea79",
  TryAgain: "748498",
  TradeNow: "9814d1",
  TradeCryptocurrenciesWith: "670eec",
  PhemexProvidesBoth: "64adfa",
  Volume: "6b1f53",
  Turnover: "ebfe20",
  Trade: "55ace6",
  LearnMoreAbout: "47a1fd",
  Suspend: "67f340",
  TradeVolume: "b53d4f",
  Users: "79a97e",
  IntegratedLiquidityProviders: "cbd98e",
  TryNow: "ad0919",
  CreateAccount: "64fa00",
  Assets: "e2b449",
  Finance: "046d9b",
  Deposit: "e33424",
  BuyCrypto: "2aa79a",
  WeUseOur: "386f54",
  LearnMore: "2d5533",
  Accept: "2d6173",
  BuySell: "69a3ac",
  SignUpNow: "c82b65",
  TheMostEfficient: "b8152b",
  BreakThrough: "300eff",
  BreakFree: "d1a314",
  TheMost: "af6172",
  Efficient: "c20382",
  CryptoTradingAndInvestmentPlatform: "dc51ad",
  BreakThroughBreakFree: "237543",
  OurProducts: "7b2b2d",
  InstantlyBuy: "61b5a2",
  BuyNow: "a2a3e1",
  TradeBTCETH: "1d9184",
  TradeCryptoBtn: "36dfe2",
  TradeCryptoDerivatives: "45ed3d",
  TradeContracts: "eb1eeb",
  EarnCrypto: "d58bfa",
  EarnBitcoinAndOther: "6b582c",
  EarnNow: "2bed91",
  Academy: "aee6d8",
  BoostYourCrypto: "756d16",
  StartLearning: "4e9af4",
  WelcomeBonus: "341b0c",
  ReceiveUpTo: "78dff3",
  ClaimNow: "8c237b",
  EmailAddress: "0a6b89",
  GetStarted: "3df495",
  NewUserBonus: "a0fba3",
  GrabWelcomeGift: "def7cd",
  RegisterNow: "b9b925",
  ZeroFeesOnSpot: "134c4f",
  TradingFeeOn: "98b90e",
  LearnMores: "d8bada",
  ZEROFeesOn: "1d8cac",
  CelebratePhemex: "f18776",
};
function Tn(r) {
  let e, l, t, s, n;
  return (
    (l = new Ge({ props: { height: "64px", colorMode: "black" } })),
    (s = new Ge({
      props: { height: "64px", colorMode: "black", class: "ml20" },
    })),
    {
      c() {
        (e = b("div")), J(l.$$.fragment), (t = S()), J(s.$$.fragment), this.h();
      },
      l(a) {
        e = E(a, "DIV", { class: !0 });
        var i = k(e);
        x(l.$$.fragment, i),
          (t = D(i)),
          x(s.$$.fragment, i),
          i.forEach(g),
          this.h();
      },
      h() {
        m(e, "class", "trade-deposit df aic svelte-16gza7f");
      },
      m(a, i) {
        y(a, e, i), Q(l, e, null), _(e, t), Q(s, e, null), (n = !0);
      },
      p: se,
      i(a) {
        n || (L(l.$$.fragment, a), L(s.$$.fragment, a), (n = !0));
      },
      o(a) {
        R(l.$$.fragment, a), R(s.$$.fragment, a), (n = !1);
      },
      d(a) {
        a && g(e), Z(l), Z(s);
      },
    }
  );
}
function wn(r) {
  let e, l, t;
  return {
    c() {
      (e = b("div")), (l = b("img")), this.h();
    },
    l(s) {
      e = E(s, "DIV", { class: !0 });
      var n = k(e);
      (l = E(n, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        n.forEach(g),
        this.h();
    },
    h() {
      m(l, "width", "148"),
        m(l, "height", "200"),
        re(l.src, (t = te.BANNER_LOGIN_MOBILE)) || m(l, "src", t),
        m(l, "alt", "kevin"),
        m(e, "class", "m-mask pr tc svelte-16gza7f");
    },
    m(s, n) {
      y(s, e, n), _(e, l);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function Sn(r) {
  let e,
    l = r[1](P.Trade) + "",
    t;
  return {
    c() {
      (e = b("span")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "SPAN", { class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "fw3");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function Dn(r) {
  let e,
    l = r[1](P.Deposit) + "",
    t;
  return {
    c() {
      (e = b("span")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "SPAN", { class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "fw3");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function yn(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o = Te.isMobile && wn();
  return (
    (t = new Ue({
      props: {
        type: "primary",
        size: "large",
        block: !0,
        $$slots: { default: [Sn] },
        $$scope: { ctx: r },
      },
    })),
    t.$on("click", r[2]),
    (n = new Ue({
      props: {
        class: "ml20",
        type: "default",
        block: !0,
        size: "large",
        $$slots: { default: [Dn] },
        $$scope: { ctx: r },
      },
    })),
    n.$on("click", r[3]),
    {
      c() {
        o && o.c(),
          (e = S()),
          (l = b("div")),
          J(t.$$.fragment),
          (s = S()),
          J(n.$$.fragment),
          this.h();
      },
      l(f) {
        o && o.l(f), (e = D(f)), (l = E(f, "DIV", { class: !0 }));
        var u = k(l);
        x(t.$$.fragment, u),
          (s = D(u)),
          x(n.$$.fragment, u),
          u.forEach(g),
          this.h();
      },
      h() {
        m(l, "class", "trade-deposit df aic svelte-16gza7f");
      },
      m(f, u) {
        o && o.m(f, u),
          y(f, e, u),
          y(f, l, u),
          Q(t, l, null),
          _(l, s),
          Q(n, l, null),
          (a = !0),
          i || ((c = $e(l, "click", bs(r[5]))), (i = !0));
      },
      p(f, u) {
        Te.isMobile && o.p(f, u);
        const d = {};
        u & 128 && (d.$$scope = { dirty: u, ctx: f }), t.$set(d);
        const h = {};
        u & 128 && (h.$$scope = { dirty: u, ctx: f }), n.$set(h);
      },
      i(f) {
        a || (L(t.$$.fragment, f), L(n.$$.fragment, f), (a = !0));
      },
      o(f) {
        R(t.$$.fragment, f), R(n.$$.fragment, f), (a = !1);
      },
      d(f) {
        o && o.d(f), f && g(e), f && g(l), Z(t), Z(n), (i = !1), c();
      },
    }
  );
}
function Pn(r) {
  let e,
    l,
    t,
    s = r[1](P.PhemexBrandAmbassador) + "",
    n,
    a,
    i,
    c = r[1](P.KevinSay) + "",
    o,
    f,
    u,
    d,
    h = r[1](P.Kevin) + "",
    p;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (o = j(c)),
        (f = S()),
        (u = b("div")),
        (d = j("-")),
        (p = j(h)),
        this.h();
    },
    l(v) {
      e = E(v, "DIV", { class: !0 });
      var I = k(e);
      l = E(I, "DIV", { class: !0 });
      var $ = k(l);
      t = E($, "DIV", { class: !0 });
      var T = k(t);
      (n = H(T, s)), T.forEach(g), (a = D($)), (i = E($, "DIV", { class: !0 }));
      var w = k(i);
      (o = H(w, c)), w.forEach(g), (f = D($)), (u = E($, "DIV", {}));
      var A = k(u);
      (d = H(A, "-")),
        (p = H(A, h)),
        A.forEach(g),
        $.forEach(g),
        I.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "mb12 f14"),
        m(i, "class", "mb12"),
        m(l, "class", "f1 f12"),
        m(e, "class", "m-logout-logo df jcsb");
    },
    m(v, I) {
      y(v, e, I),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, o),
        _(l, f),
        _(l, u),
        _(u, d),
        _(u, p);
    },
    p: se,
    d(v) {
      v && g(e);
    },
  };
}
function On(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c =
      r[1](kn.NewUserBonus, {
        Volume: "<span style='color:#5AA8FA'>$100</span>",
      }) + "",
    o,
    f,
    u,
    d,
    h = Te.isMobile && Pn(r);
  return (
    (u = new In({})),
    {
      c() {
        h && h.c(),
          (e = S()),
          (l = b("div")),
          (t = b("div")),
          (s = b("img")),
          (a = S()),
          (i = b("div")),
          (o = S()),
          (f = b("div")),
          J(u.$$.fragment),
          this.h();
      },
      l(p) {
        h && h.l(p), (e = D(p)), (l = E(p, "DIV", { class: !0 }));
        var v = k(l);
        t = E(v, "DIV", { class: !0 });
        var I = k(t);
        (s = E(I, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
          (a = D(I)),
          (i = E(I, "DIV", {}));
        var $ = k(i);
        $.forEach(g),
          I.forEach(g),
          (o = D(v)),
          (f = E(v, "DIV", { class: !0 }));
        var T = k(f);
        x(u.$$.fragment, T), T.forEach(g), v.forEach(g), this.h();
      },
      h() {
        m(s, "class", "mr4"),
          m(s, "width", "24"),
          m(s, "height", "24"),
          re(s.src, (n = te.GIFT)) || m(s, "src", n),
          m(s, "alt", "bonus"),
          m(t, "class", "df aic mt12 mb12"),
          m(f, "class", "df aic"),
          m(l, "class", "register df fdc svelte-16gza7f");
      },
      m(p, v) {
        h && h.m(p, v),
          y(p, e, v),
          y(p, l, v),
          _(l, t),
          _(t, s),
          _(t, a),
          _(t, i),
          (i.innerHTML = c),
          _(l, o),
          _(l, f),
          Q(u, f, null),
          (d = !0);
      },
      p(p, v) {
        Te.isMobile && h.p(p, v);
      },
      i(p) {
        d || (L(u.$$.fragment, p), (d = !0));
      },
      o(p) {
        R(u.$$.fragment, p), (d = !1);
      },
      d(p) {
        h && h.d(p), p && g(e), p && g(l), Z(u);
      },
    }
  );
}
function An(r) {
  let e,
    l,
    t,
    s,
    n = r[1](P.BreakThrough) + "",
    a,
    i,
    c = r[1](P.BreakFree) + "",
    o,
    f,
    u,
    d =
      r[1](P.TheMostEfficient, {
        Efficient:
          "<span style='color:#5AA8FA'>" + r[1](P.Efficient) + "</span>",
      }) + "",
    h,
    p,
    v,
    I,
    $,
    T,
    w,
    A,
    C,
    N,
    U,
    M;
  return (
    (p = new _t({
      props: {
        height: "112px",
        $$slots: { logout: [On], login: [yn], init: [Tn] },
        $$scope: { ctx: r },
      },
    })),
    (A = new vn({})),
    {
      c() {
        (e = b("section")),
          (l = b("div")),
          (t = b("div")),
          (s = b("div")),
          (a = j(n)),
          (i = S()),
          (o = j(c)),
          (f = S()),
          (u = b("h1")),
          (h = S()),
          J(p.$$.fragment),
          (v = S()),
          (I = b("a")),
          ($ = b("img")),
          (w = S()),
          J(A.$$.fragment),
          this.h();
      },
      l(G) {
        e = E(G, "SECTION", { class: !0 });
        var B = k(e);
        l = E(B, "DIV", { class: !0 });
        var K = k(l);
        t = E(K, "DIV", { class: !0 });
        var q = k(t);
        s = E(q, "DIV", { class: !0 });
        var ee = k(s);
        (a = H(ee, n)),
          (i = D(ee)),
          (o = H(ee, c)),
          ee.forEach(g),
          (f = D(q)),
          (u = E(q, "H1", { class: !0 }));
        var X = k(u);
        X.forEach(g),
          (h = D(q)),
          x(p.$$.fragment, q),
          q.forEach(g),
          (v = D(K)),
          (I = E(K, "A", { class: !0, href: !0 }));
        var F = k(I);
        ($ = E(F, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
          (w = D(F)),
          x(A.$$.fragment, F),
          F.forEach(g),
          K.forEach(g),
          B.forEach(g),
          this.h();
      },
      h() {
        m(s, "class", "subtitle svelte-16gza7f"),
          m(u, "class", "title svelte-16gza7f"),
          m(t, "class", "banner-left svelte-16gza7f"),
          m($, "class", "db mr30"),
          m($, "width", "468"),
          m($, "height", "374"),
          re(
            $.src,
            (T =
              "https://api2.copycash.com/api/blob/48bd79c1-0e90-4111-b132-6fb89507d820")
          ) || m($, "src", T),
          m($, "alt", "Lending Protocol"),
          m(I, "class", "banner-right svelte-16gza7f"),
          m(
            I,
            "href",
            (C = r[0](fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname))
          ),
          m(l, "class", "main pr df aic jcsb svelte-16gza7f"),
          m(e, "class", "wrap TW cp svelte-16gza7f");
      },
      m(G, B) {
        y(G, e, B),
          _(e, l),
          _(l, t),
          _(t, s),
          _(s, a),
          _(s, i),
          _(s, o),
          _(t, f),
          _(t, u),
          (u.innerHTML = d),
          _(t, h),
          Q(p, t, null),
          _(l, v),
          _(l, I),
          _(I, $),
          _(I, w),
          Q(A, I, null),
          (N = !0),
          U || ((M = $e(e, "click", r[4])), (U = !0));
      },
      p(G, [B]) {
        const K = {};
        B & 128 && (K.$$scope = { dirty: B, ctx: G }),
          p.$set(K),
          (!N ||
            (B & 1 &&
              C !==
                (C = G[0](fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname)))) &&
            m(I, "href", C);
      },
      i(G) {
        N || (L(p.$$.fragment, G), L(A.$$.fragment, G), (N = !0));
      },
      o(G) {
        R(p.$$.fragment, G), R(A.$$.fragment, G), (N = !1);
      },
      d(G) {
        G && g(e), Z(p), Z(A), (U = !1), M();
      },
    }
  );
}
function Ln(r, e, l) {
  let t;
  oe(r, Ve, (o) => l(0, (t = o)));
  const s = ve("LG");
  Ke(async () => {
    const o = window.location.origin + fe.DOWNLOAD.pathname;
    await rs.toDataURL(o);
  });
  function n() {
    Fe.track("web_click", { $screen_name: "home", $element_content: "Trade" }),
      qe("/trade/BTCUSDT");
  }
  function a() {
    Fe.track("web_click", {
      $screen_name: "home",
      $element_content: "deposit",
    }),
      ys({ LG: s });
  }
  function i() {
    Fe.track("web_click", { $screen_name: "home", $element_content: "Pulse" }),
      qe(t(fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname));
  }
  function c(o) {
    Es.call(this, r, o);
  }
  return [t, s, n, a, i, c];
}
class Nn extends de {
  constructor(e) {
    super(), he(this, e, Ln, An, me, {});
  }
}
function Cn(r) {
  let e, l, t, s, n, a, i, c, o;
  return (
    (t = new Ge({ props: { width: "32px", height: "32px", baseColor: st } })),
    (a = new Ge({ props: { height: "20px", width: "80px", baseColor: st } })),
    (c = new Ge({ props: { height: "12px", baseColor: st } })),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          J(t.$$.fragment),
          (s = S()),
          (n = b("div")),
          J(a.$$.fragment),
          (i = S()),
          J(c.$$.fragment),
          this.h();
      },
      l(f) {
        e = E(f, "DIV", { class: !0 });
        var u = k(e);
        l = E(u, "DIV", { class: !0 });
        var d = k(l);
        x(t.$$.fragment, d),
          d.forEach(g),
          (s = D(u)),
          (n = E(u, "DIV", { class: !0 }));
        var h = k(n);
        x(a.$$.fragment, h),
          (i = D(h)),
          x(c.$$.fragment, h),
          h.forEach(g),
          u.forEach(g),
          this.h();
      },
      h() {
        m(l, "class", "fs0 mr12 svelte-1c55549"),
          m(n, "class", "wp100"),
          m(e, "class", "item df cp svelte-1c55549");
      },
      m(f, u) {
        y(f, e, u),
          _(e, l),
          Q(t, l, null),
          _(e, s),
          _(e, n),
          Q(a, n, null),
          _(n, i),
          Q(c, n, null),
          (o = !0);
      },
      p: se,
      i(f) {
        o ||
          (L(t.$$.fragment, f),
          L(a.$$.fragment, f),
          L(c.$$.fragment, f),
          (o = !0));
      },
      o(f) {
        R(t.$$.fragment, f), R(a.$$.fragment, f), R(c.$$.fragment, f), (o = !1);
      },
      d(f) {
        f && g(e), Z(t), Z(a), Z(c);
      },
    }
  );
}
const st = "#eaeaea";
class Rn extends de {
  constructor(e) {
    super(), he(this, e, null, Cn, me, {});
  }
}
function Bt(r, e, l) {
  const t = r.slice();
  return (t[6] = e[l]), t;
}
function Vn(r, e, l) {
  const t = r.slice();
  return (t[6] = e[l]), t;
}
function jt(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c = r[6].title + "",
    o,
    f,
    u,
    d = r[6].desc + "",
    h,
    p,
    v;
  return {
    c() {
      (e = b("div")),
        (l = b("img")),
        (n = S()),
        (a = b("div")),
        (i = b("div")),
        (o = j(c)),
        (f = S()),
        (u = b("div")),
        (h = S()),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var $ = k(e);
      (l = E($, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (n = D($)),
        (a = E($, "DIV", { class: !0 }));
      var T = k(a);
      i = E(T, "DIV", { class: !0 });
      var w = k(i);
      (o = H(w, c)), w.forEach(g), (f = D(T)), (u = E(T, "DIV", { class: !0 }));
      var A = k(u);
      A.forEach(g), T.forEach(g), (h = D($)), $.forEach(g), this.h();
    },
    h() {
      m(l, "width", "32"),
        m(l, "height", "32"),
        re(l.src, (t = te[r[6].icon])) || m(l, "src", t),
        m(l, "alt", (s = r[6].title)),
        m(i, "class", "title f16 fw3 svelte-1kflztv"),
        m(u, "class", "desc svelte-1kflztv"),
        m(a, "class", "ml12 T1 f12 svelte-1kflztv"),
        m(e, "class", "item fl df cp svelte-1kflztv");
    },
    m(I, $) {
      y(I, e, $),
        _(e, l),
        _(e, n),
        _(e, a),
        _(a, i),
        _(i, o),
        _(a, f),
        _(a, u),
        (u.innerHTML = d),
        _(e, h),
        p ||
          ((v = $e(e, "click", function () {
            Ce(r[1](r[6])) && r[1](r[6]).apply(this, arguments);
          })),
          (p = !0));
    },
    p(I, $) {
      (r = I),
        $ & 1 && !re(l.src, (t = te[r[6].icon])) && m(l, "src", t),
        $ & 1 && s !== (s = r[6].title) && m(l, "alt", s),
        $ & 1 && c !== (c = r[6].title + "") && ge(o, c),
        $ & 1 && d !== (d = r[6].desc + "") && (u.innerHTML = d);
    },
    d(I) {
      I && g(e), (p = !1), v();
    },
  };
}
function Mn(r) {
  let e,
    l = r[0],
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = jt(Bt(r, l, s));
  return {
    c() {
      e = b("div");
      for (let s = 0; s < t.length; s += 1) t[s].c();
      this.h();
    },
    l(s) {
      e = E(s, "DIV", { class: !0 });
      var n = k(e);
      for (let a = 0; a < t.length; a += 1) t[a].l(n);
      n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "menu svelte-1kflztv");
    },
    m(s, n) {
      y(s, e, n);
      for (let a = 0; a < t.length; a += 1) t[a].m(e, null);
    },
    p(s, n) {
      if (n & 3) {
        l = s[0];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = Bt(s, l, a);
          t[a] ? t[a].p(i, n) : ((t[a] = jt(i)), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      s && g(e), ue(t, s);
    },
  };
}
function Gn(r) {
  let e, l;
  return (
    (e = new Rn({})),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function Bn(r) {
  let e,
    l,
    t = new Array(6).fill(0),
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = Gn(Vn(r, t, n));
  return {
    c() {
      e = b("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = E(n, "DIV", { slot: !0, class: !0 });
      var a = k(e);
      for (let i = 0; i < s.length; i += 1) s[i].l(a);
      a.forEach(g), this.h();
    },
    h() {
      m(e, "slot", "init"), m(e, "class", "con svelte-1kflztv");
    },
    m(n, a) {
      y(n, e, a);
      for (let i = 0; i < s.length; i += 1) s[i].m(e, null);
      l = !0;
    },
    p: se,
    i(n) {
      if (!l) {
        for (let a = 0; a < t.length; a += 1) L(s[a]);
        l = !0;
      }
    },
    o(n) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1) R(s[a]);
      l = !1;
    },
    d(n) {
      n && g(e), ue(s, n);
    },
  };
}
function jn(r) {
  let e, l, t, s;
  return (
    (t = new _t({
      props: {
        height: "44px",
        $$slots: { init: [Bn], default: [Mn] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")), (l = b("div")), J(t.$$.fragment), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = k(e);
        l = E(a, "DIV", { class: !0 });
        var i = k(l);
        x(t.$$.fragment, i), i.forEach(g), a.forEach(g), this.h();
      },
      h() {
        m(l, "class", "main pv24 svelte-1kflztv"),
          m(e, "class", "wrap svelte-1kflztv");
      },
      m(n, a) {
        y(n, e, a), _(e, l), Q(t, l, null), (s = !0);
      },
      p(n, [a]) {
        const i = {};
        a & 2049 && (i.$$scope = { dirty: a, ctx: n }), t.$set(i);
      },
      i(n) {
        s || (L(t.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(t.$$.fragment, n), (s = !1);
      },
      d(n) {
        n && g(e), Z(t);
      },
    }
  );
}
function Hn(r, e, l) {
  let t, s;
  oe(r, Ve, (o) => l(3, (t = o))), oe(r, ht, (o) => l(2, (s = o)));
  const n = ve("LG");
  let a = [];
  function i(o) {
    return [
      {
        title: n(P.MenuTitle1),
        desc: n(P.MenuDesc1),
        icon: "BUY_CRYPTO",
        href: t(
          o
            ? fe.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
            : fe.OTC_LEGEND_TRADING.pathname
        ),
        name: "buy_crypto",
      },
      {
        title: n(P.MenuTitle2),
        desc: n(P.MenuDesc2),
        icon: "SPOT_TRADING",
        href: "/spot/trade/BTCUSDT",
        name: "spot_trading",
      },
      {
        title: n(P.MenuTitle3),
        desc: n(P.MenuDesc3),
        icon: "CONTRACT",
        href: "/trade/BTCUSDT",
        name: "contract_trading",
      },
      {
        title: n(P.MenuMarginTradeTitle),
        desc: n(P.MenuMarginTradeDesc),
        icon: "MARGIN_TRADING",
        href: as.PHEMEX_SPOT_MARGIN_TRADE + "/BTCUSDT",
        name: "margin_trading",
      },
      {
        title: n(P.MenuTitle5),
        desc: n(P.MenuDesc5),
        icon: "BONUS",
        href: t(fe.BONUS.pathname),
        name: "rewards_hub",
      },
      {
        title: n(P.MenuTitle6),
        desc: n(P.MenuDesc6),
        icon: "REFERRAL",
        href: t(fe.ACCOUNT_INVITE_FRIENDS.pathname),
        name: "referral",
      },
    ];
  }
  function c(o) {
    return function () {
      Fe.track("web_click", {
        $screen_name: "home",
        $element_content: "resource_" + o.name,
      }),
        (location.href = o.href);
    };
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 4 && l(0, (a = i(s)));
    }),
    [a, c, s]
  );
}
class Un extends de {
  constructor(e) {
    super(), he(this, e, Hn, jn, me, {});
  }
}
function Ht(r, e, l) {
  const t = r.slice();
  return (t[3] = e[l]), t;
}
function Ut(r) {
  let e, l;
  const t = [r[3]];
  let s = {};
  for (let n = 0; n < t.length; n += 1) s = je(s, t[n]);
  return (
    (e = new Ge({ props: s })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(n) {
        x(e.$$.fragment, n);
      },
      m(n, a) {
        Q(e, n, a), (l = !0);
      },
      p(n, a) {
        const i = a & 1 ? Ze(t, [ft(n[3])]) : {};
        e.$set(i);
      },
      i(n) {
        l || (L(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        Z(e, n);
      },
    }
  );
}
function Fn(r) {
  let e,
    l,
    t,
    s = r[0],
    n = [];
  for (let i = 0; i < s.length; i += 1) n[i] = Ut(Ht(r, s, i));
  const a = (i) =>
    R(n[i], 1, 1, () => {
      n[i] = null;
    });
  return {
    c() {
      e = b("div");
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0, style: !0 });
      var c = k(e);
      for (let o = 0; o < n.length; o += 1) n[o].l(c);
      c.forEach(g), this.h();
    },
    h() {
      m(e, "class", (l = "skeleton-line " + r[2] + " svelte-mm6dba")),
        we(e, "--skeleton-line-num", r[0].length),
        we(e, "--skeleton-line-height", r[1]);
    },
    m(i, c) {
      y(i, e, c);
      for (let o = 0; o < n.length; o += 1) n[o].m(e, null);
      t = !0;
    },
    p(i, [c]) {
      if (c & 1) {
        s = i[0];
        let o;
        for (o = 0; o < s.length; o += 1) {
          const f = Ht(i, s, o);
          n[o]
            ? (n[o].p(f, c), L(n[o], 1))
            : ((n[o] = Ut(f)), n[o].c(), L(n[o], 1), n[o].m(e, null));
        }
        for (Ie(), o = s.length; o < n.length; o += 1) a(o);
        ke();
      }
      (!t ||
        (c & 4 && l !== (l = "skeleton-line " + i[2] + " svelte-mm6dba"))) &&
        m(e, "class", l),
        (!t || c & 1) && we(e, "--skeleton-line-num", i[0].length),
        (!t || c & 2) && we(e, "--skeleton-line-height", i[1]);
    },
    i(i) {
      if (!t) {
        for (let c = 0; c < s.length; c += 1) L(n[c]);
        t = !0;
      }
    },
    o(i) {
      n = n.filter(Boolean);
      for (let c = 0; c < n.length; c += 1) R(n[c]);
      t = !1;
    },
    d(i) {
      i && g(e), ue(n, i);
    },
  };
}
function Wn(r, e, l) {
  let { childProps: t = [] } = e,
    { height: s = "32px" } = e,
    { class: n = "" } = e;
  return (
    (r.$$set = (a) => {
      "childProps" in a && l(0, (t = a.childProps)),
        "height" in a && l(1, (s = a.height)),
        "class" in a && l(2, (n = a.class));
    }),
    [t, s, n]
  );
}
class us extends de {
  constructor(e) {
    super(), he(this, e, Wn, Fn, me, { childProps: 0, height: 1, class: 2 });
  }
}
const ds = new Us(),
  hs = new et([]),
  ms = new et([]),
  _s = new et([]),
  gs = new et([]);
is([ds, ns])
  .pipe(
    Ps(ut),
    Fs(([, r]) => r !== "Init"),
    Os(([r, e]) => Kn(r, e))
  )
  .subscribe((r) => hs.next(r));
async function Kn(r, e) {
  const { data: l, error: t } = await (e === "Login"
    ? yt.contentViewLogin(r)
    : yt.contentViewLogout(r));
  return l ? l.rows : (t && cs.send("toast", "error", t), []);
}
ut.subscribe(async () => {
  const { data: r } = await As.getHotSpotsAndContracts();
  _s.next(r.spot), gs.next(r.contract);
});
async function zn() {
  const { data: r, error: e } = await Ls.getTasksList();
  return r ? ms.next(r.rows) : (e && cs.send("toast", "error", e), []);
}
const { Boolean: tt } = $s;
function Ft(r, e, l) {
  const t = r.slice();
  return (t[19] = e[l]), t;
}
function Wt(r, e, l) {
  const t = r.slice();
  return (t[25] = e[l]), t;
}
function qn(r, e, l) {
  const t = r.slice();
  return (t[22] = e[l]), t;
}
function Kt(r, e, l) {
  const t = r.slice();
  return (t[30] = e[l]), t;
}
function zt(r, e, l) {
  const t = r.slice();
  return (t[22] = e[l]), t;
}
function Yn(r) {
  let e = r[4](P.ViewMore) + "",
    l,
    t,
    s;
  return {
    c() {
      (l = j(e)), (t = b("i")), (s = j("")), this.h();
    },
    l(n) {
      (l = H(n, e)), (t = E(n, "I", { class: !0 }));
      var a = k(t);
      (s = H(a, "")), a.forEach(g), this.h();
    },
    h() {
      m(t, "class", "iconfont arrow dib fw3 svelte-161jgm9");
    },
    m(n, a) {
      y(n, l, a), y(n, t, a), _(t, s);
    },
    p: se,
    d(n) {
      n && g(l), n && g(t);
    },
  };
}
function qt(r) {
  let e,
    l,
    t = r[2][r[1]],
    s = [];
  for (let a = 0; a < t.length; a += 1) s[a] = Yt(Kt(r, t, a));
  const n = (a) =>
    R(s[a], 1, 1, () => {
      s[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < s.length; a += 1) s[a].c();
      e = Ee();
    },
    l(a) {
      for (let i = 0; i < s.length; i += 1) s[i].l(a);
      e = Ee();
    },
    m(a, i) {
      for (let c = 0; c < s.length; c += 1) s[c].m(a, i);
      y(a, e, i), (l = !0);
    },
    p(a, i) {
      if (i[0] & 22) {
        t = a[2][a[1]];
        let c;
        for (c = 0; c < t.length; c += 1) {
          const o = Kt(a, t, c);
          s[c]
            ? (s[c].p(o, i), L(s[c], 1))
            : ((s[c] = Yt(o)), s[c].c(), L(s[c], 1), s[c].m(e.parentNode, e));
        }
        for (Ie(), c = t.length; c < s.length; c += 1) n(c);
        ke();
      }
    },
    i(a) {
      if (!l) {
        for (let i = 0; i < t.length; i += 1) L(s[i]);
        l = !0;
      }
    },
    o(a) {
      s = s.filter(tt);
      for (let i = 0; i < s.length; i += 1) R(s[i]);
      l = !1;
    },
    d(a) {
      ue(s, a), a && g(e);
    },
  };
}
function Xn(r) {
  let e = r[30].displaySymbol + "",
    l;
  return {
    c() {
      l = j(e);
    },
    l(t) {
      l = H(t, e);
    },
    m(t, s) {
      y(t, l, s);
    },
    p(t, s) {
      s[0] & 6 && e !== (e = t[30].displaySymbol + "") && ge(l, e);
    },
    d(t) {
      t && g(l);
    },
  };
}
function Jn(r) {
  let e,
    l,
    t = r[30].symbolV2 + "",
    s,
    n,
    a,
    i = r[4](P.Perpetual) + "",
    c,
    o,
    f,
    u = r[30].settleCurrency + "",
    d,
    h,
    p = r[4](P.Margin) + "",
    v;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (s = j(t)),
        (n = S()),
        (a = b("span")),
        (c = j(i)),
        (o = S()),
        (f = b("div")),
        (d = j(u)),
        (h = j("-")),
        (v = j(p)),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", {});
      var $ = k(e);
      l = E($, "DIV", { class: !0 });
      var T = k(l);
      (s = H(T, t)), (n = D(T)), (a = E(T, "SPAN", { class: !0 }));
      var w = k(a);
      (c = H(w, i)),
        w.forEach(g),
        T.forEach(g),
        (o = D($)),
        (f = E($, "DIV", { class: !0 }));
      var A = k(f);
      (d = H(A, u)),
        (h = H(A, "-")),
        (v = H(A, p)),
        A.forEach(g),
        $.forEach(g),
        this.h();
    },
    h() {
      m(a, "class", "cell-type svelte-161jgm9"),
        m(l, "class", "lh20 fw2 ooo"),
        m(f, "class", "lh20 f12 T4");
    },
    m(I, $) {
      y(I, e, $),
        _(e, l),
        _(l, s),
        _(l, n),
        _(l, a),
        _(a, c),
        _(e, o),
        _(e, f),
        _(f, d),
        _(f, h),
        _(f, v);
    },
    p(I, $) {
      $[0] & 6 && t !== (t = I[30].symbolV2 + "") && ge(s, t),
        $[0] & 6 && u !== (u = I[30].settleCurrency + "") && ge(d, u);
    },
    d(I) {
      I && g(e);
    },
  };
}
function Qn(r) {
  let e = r[4](P.Trade) + "",
    l;
  return {
    c() {
      l = j(e);
    },
    l(t) {
      l = H(t, e);
    },
    m(t, s) {
      y(t, l, s);
    },
    p: se,
    d(t) {
      t && g(l);
    },
  };
}
function Yt(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o,
    f = r[30].close + "",
    u,
    d,
    h,
    p,
    v = r[30].changePercentStr + "",
    I,
    $,
    T,
    w,
    A,
    C,
    N,
    U,
    M,
    G,
    B;
  function K(X, F) {
    return X[30].type === "Perpetual" || X[30].type === "PerpetualV2" ? Jn : Xn;
  }
  let q = K(r),
    ee = q(r);
  return (
    (w = new zs({
      props: {
        width: 100,
        height: 22,
        data: r[30].klineData,
        change: r[30].change24hEp,
      },
    })),
    (N = new it({
      props: {
        class: "trade wsn fw2",
        newRadius: !0,
        type: "common",
        size: "small",
        $$slots: { default: [Qn] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          (t = b("img")),
          (a = S()),
          ee.c(),
          (i = S()),
          (c = b("div")),
          (o = j("$ ")),
          (u = j(f)),
          (d = S()),
          (h = b("div")),
          (p = b("span")),
          (I = j(v)),
          ($ = S()),
          (T = b("div")),
          J(w.$$.fragment),
          (A = S()),
          (C = b("div")),
          J(N.$$.fragment),
          (U = S()),
          this.h();
      },
      l(X) {
        e = E(X, "DIV", { class: !0 });
        var F = k(e);
        l = E(F, "DIV", { class: !0 });
        var Y = k(l);
        (t = E(Y, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
          (a = D(Y)),
          ee.l(Y),
          Y.forEach(g),
          (i = D(F)),
          (c = E(F, "DIV", { class: !0 }));
        var W = k(c);
        (o = H(W, "$ ")),
          (u = H(W, f)),
          W.forEach(g),
          (d = D(F)),
          (h = E(F, "DIV", { class: !0 }));
        var O = k(h);
        p = E(O, "SPAN", { class: !0 });
        var V = k(p);
        (I = H(V, v)),
          V.forEach(g),
          O.forEach(g),
          ($ = D(F)),
          (T = E(F, "DIV", { class: !0 }));
        var ae = k(T);
        x(w.$$.fragment, ae),
          ae.forEach(g),
          (A = D(F)),
          (C = E(F, "DIV", { class: !0 }));
        var ne = k(C);
        x(N.$$.fragment, ne), ne.forEach(g), (U = D(F)), F.forEach(g), this.h();
      },
      h() {
        m(t, "class", "mr12 xs:dn"),
          m(t, "width", "32"),
          m(t, "height", "32"),
          re(t.src, (s = Xe.getUrl(r[30].baseCurrency))) || m(t, "src", s),
          m(t, "alt", (n = r[30].displaySymbol)),
          m(l, "class", "cell mt12 df aic jcfs fw2 svelte-161jgm9"),
          m(c, "class", "cell mt12 f18 tr svelte-161jgm9"),
          m(p, "class", "br4 svelte-161jgm9"),
          _e(p, "up", r[30].changePercent > 0),
          _e(p, "down", r[30].changePercent < 0),
          m(h, "class", "cell mt12 f18 tr svelte-161jgm9"),
          m(T, "class", "cell mt12 tr xs:dn svelte-161jgm9"),
          m(C, "class", "cell mt12 tr xs:dn svelte-161jgm9"),
          m(e, "class", "row aic svelte-161jgm9");
      },
      m(X, F) {
        y(X, e, F),
          _(e, l),
          _(l, t),
          _(l, a),
          ee.m(l, null),
          _(e, i),
          _(e, c),
          _(c, o),
          _(c, u),
          _(e, d),
          _(e, h),
          _(h, p),
          _(p, I),
          _(e, $),
          _(e, T),
          Q(w, T, null),
          _(e, A),
          _(e, C),
          Q(N, C, null),
          _(e, U),
          (M = !0),
          G ||
            ((B = $e(e, "click", function () {
              Ce(Qe(r[30])) && Qe(r[30]).apply(this, arguments);
            })),
            (G = !0));
      },
      p(X, F) {
        (r = X),
          (!M ||
            (F[0] & 6 && !re(t.src, (s = Xe.getUrl(r[30].baseCurrency))))) &&
            m(t, "src", s),
          (!M || (F[0] & 6 && n !== (n = r[30].displaySymbol))) &&
            m(t, "alt", n),
          q === (q = K(r)) && ee
            ? ee.p(r, F)
            : (ee.d(1), (ee = q(r)), ee && (ee.c(), ee.m(l, null))),
          (!M || F[0] & 6) && f !== (f = r[30].close + "") && ge(u, f),
          (!M || F[0] & 6) &&
            v !== (v = r[30].changePercentStr + "") &&
            ge(I, v),
          (!M || F[0] & 6) && _e(p, "up", r[30].changePercent > 0),
          (!M || F[0] & 6) && _e(p, "down", r[30].changePercent < 0);
        const Y = {};
        F[0] & 6 && (Y.data = r[30].klineData),
          F[0] & 6 && (Y.change = r[30].change24hEp),
          w.$set(Y);
        const W = {};
        F[1] & 4 && (W.$$scope = { dirty: F, ctx: r }), N.$set(W);
      },
      i(X) {
        M || (L(w.$$.fragment, X), L(N.$$.fragment, X), (M = !0));
      },
      o(X) {
        R(w.$$.fragment, X), R(N.$$.fragment, X), (M = !1);
      },
      d(X) {
        X && g(e), ee.d(), Z(w), Z(N), (G = !1), B();
      },
    }
  );
}
function Zn(r) {
  let e,
    l,
    t = r[2] && r[2][r[1]] && qt(r);
  return {
    c() {
      (e = b("div")), t && t.c(), this.h();
    },
    l(s) {
      e = E(s, "DIV", { class: !0 });
      var n = k(e);
      t && t.l(n), n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "container svelte-161jgm9");
    },
    m(s, n) {
      y(s, e, n), t && t.m(e, null), (l = !0);
    },
    p(s, n) {
      s[2] && s[2][s[1]]
        ? t
          ? (t.p(s, n), n[0] & 6 && L(t, 1))
          : ((t = qt(s)), t.c(), L(t, 1), t.m(e, null))
        : t &&
          (Ie(),
          R(t, 1, 1, () => {
            t = null;
          }),
          ke());
    },
    i(s) {
      l || (L(t), (l = !0));
    },
    o(s) {
      R(t), (l = !1);
    },
    d(s) {
      s && g(e), t && t.d();
    },
  };
}
function Xt(r) {
  let e, l;
  return (
    (e = new us({
      props: {
        class: "mt12",
        height: "64px",
        childProps: r[3]
          ? [
              { width: "180px", borderRadius: "4px" },
              { width: "100px", class: "grid-end" },
              { width: "70px", class: "grid-end" },
            ]
          : [
              { width: "32px", height: "32px", borderRadius: "50%" },
              { width: "180px" },
              { width: "120px", class: "grid-end" },
              { width: "60px", class: "grid-end" },
              { width: "100px", class: "grid-end" },
              { width: "70px", class: "grid-end" },
            ],
      },
    })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      p(t, s) {
        const n = {};
        s[0] & 8 &&
          (n.childProps = t[3]
            ? [
                { width: "180px", borderRadius: "4px" },
                { width: "100px", class: "grid-end" },
                { width: "70px", class: "grid-end" },
              ]
            : [
                { width: "32px", height: "32px", borderRadius: "50%" },
                { width: "180px" },
                { width: "120px", class: "grid-end" },
                { width: "60px", class: "grid-end" },
                { width: "100px", class: "grid-end" },
                { width: "70px", class: "grid-end" },
              ]),
          e.$set(n);
      },
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function xn(r) {
  let e,
    l,
    t = new Array(Re).fill(0),
    s = [];
  for (let a = 0; a < t.length; a += 1) s[a] = Xt(zt(r, t, a));
  const n = (a) =>
    R(s[a], 1, 1, () => {
      s[a] = null;
    });
  return {
    c() {
      e = b("div");
      for (let a = 0; a < s.length; a += 1) s[a].c();
      this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = k(e);
      for (let c = 0; c < s.length; c += 1) s[c].l(i);
      i.forEach(g), this.h();
    },
    h() {
      m(e, "class", "df fdcr ml24 mr24 mr12");
    },
    m(a, i) {
      y(a, e, i);
      for (let c = 0; c < s.length; c += 1) s[c].m(e, null);
      l = !0;
    },
    p(a, i) {
      if (i[0] & 8) {
        t = new Array(Re).fill(0);
        let c;
        for (c = 0; c < t.length; c += 1) {
          const o = zt(a, t, c);
          s[c]
            ? (s[c].p(o, i), L(s[c], 1))
            : ((s[c] = Xt(o)), s[c].c(), L(s[c], 1), s[c].m(e, null));
        }
        for (Ie(), c = t.length; c < s.length; c += 1) n(c);
        ke();
      }
    },
    i(a) {
      if (!l) {
        for (let i = 0; i < t.length; i += 1) L(s[i]);
        l = !0;
      }
    },
    o(a) {
      s = s.filter(tt);
      for (let i = 0; i < s.length; i += 1) R(s[i]);
      l = !1;
    },
    d(a) {
      a && g(e), ue(s, a);
    },
  };
}
function er(r) {
  let e, l, t;
  return {
    c() {
      (e = j("View More ")), (l = b("i")), (t = j("")), this.h();
    },
    l(s) {
      (e = H(s, "View More ")), (l = E(s, "I", { class: !0 }));
      var n = k(l);
      (t = H(n, "")), n.forEach(g), this.h();
    },
    h() {
      m(l, "class", "iconfont arrow dib fw3 svelte-161jgm9");
    },
    m(s, n) {
      y(s, e, n), y(s, l, n), _(l, t);
    },
    p: se,
    d(s) {
      s && g(e), s && g(l);
    },
  };
}
function Jt(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o = r[25].displaySymbol + "",
    f,
    u,
    d = (r[25].type !== "Spot" ? r[4](Ct.Perpetual) : "") + "",
    h,
    p,
    v,
    I,
    $ = r[25].close + "",
    T,
    w,
    A,
    C = r[25].changePercentStr + "",
    N,
    U,
    M,
    G,
    B;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("img")),
        (a = S()),
        (i = b("div")),
        (c = b("div")),
        (f = j(o)),
        (u = S()),
        (h = j(d)),
        (p = S()),
        (v = b("div")),
        (I = b("div")),
        (T = j($)),
        (w = S()),
        (A = b("div")),
        (N = j(C)),
        (M = S()),
        this.h();
    },
    l(K) {
      e = E(K, "DIV", { class: !0 });
      var q = k(e);
      l = E(q, "DIV", { class: !0 });
      var ee = k(l);
      (t = E(ee, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (a = D(ee)),
        (i = E(ee, "DIV", { class: !0 }));
      var X = k(i);
      c = E(X, "DIV", {});
      var F = k(c);
      (f = H(F, o)),
        (u = D(F)),
        (h = H(F, d)),
        F.forEach(g),
        X.forEach(g),
        ee.forEach(g),
        (p = D(q)),
        (v = E(q, "DIV", { class: !0 }));
      var Y = k(v);
      I = E(Y, "DIV", {});
      var W = k(I);
      (T = H(W, $)), W.forEach(g), (w = D(Y)), (A = E(Y, "DIV", { class: !0 }));
      var O = k(A);
      (N = H(O, C)),
        O.forEach(g),
        Y.forEach(g),
        (M = D(q)),
        q.forEach(g),
        this.h();
    },
    h() {
      m(t, "width", "32"),
        m(t, "height", "32"),
        re(t.src, (s = Xe.getUrl(r[25].baseCurrency))) || m(t, "src", s),
        m(t, "alt", (n = r[25].displaySymbol)),
        m(i, "class", "ml12"),
        m(l, "class", "df aic"),
        m(
          A,
          "class",
          (U = ye(r[25].changePercent > 0 ? "up" : "down") + " svelte-161jgm9")
        ),
        m(v, "class", "tr"),
        m(e, "class", "crypto mt12 df aic jcsb ph24 cp svelte-161jgm9");
    },
    m(K, q) {
      y(K, e, q),
        _(e, l),
        _(l, t),
        _(l, a),
        _(l, i),
        _(i, c),
        _(c, f),
        _(c, u),
        _(c, h),
        _(e, p),
        _(e, v),
        _(v, I),
        _(I, T),
        _(v, w),
        _(v, A),
        _(A, N),
        _(e, M),
        G ||
          ((B = $e(e, "click", function () {
            Ce(Qe(r[25])) && Qe(r[25]).apply(this, arguments);
          })),
          (G = !0));
    },
    p(K, q) {
      (r = K),
        q[0] & 1 &&
          !re(t.src, (s = Xe.getUrl(r[25].baseCurrency))) &&
          m(t, "src", s),
        q[0] & 1 && n !== (n = r[25].displaySymbol) && m(t, "alt", n),
        q[0] & 1 && o !== (o = r[25].displaySymbol + "") && ge(f, o),
        q[0] & 1 &&
          d !== (d = (r[25].type !== "Spot" ? r[4](Ct.Perpetual) : "") + "") &&
          ge(h, d),
        q[0] & 1 && $ !== ($ = r[25].close + "") && ge(T, $),
        q[0] & 1 && C !== (C = r[25].changePercentStr + "") && ge(N, C),
        q[0] & 1 &&
          U !==
            (U =
              ye(r[25].changePercent > 0 ? "up" : "down") +
              " svelte-161jgm9") &&
          m(A, "class", U);
    },
    d(K) {
      K && g(e), (G = !1), B();
    },
  };
}
function tr(r) {
  let e,
    l = r[19].cryptos,
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = Jt(Wt(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ee();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = Ee();
    },
    m(s, n) {
      for (let a = 0; a < t.length; a += 1) t[a].m(s, n);
      y(s, e, n);
    },
    p(s, n) {
      if (n[0] & 17) {
        l = s[19].cryptos;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = Wt(s, l, a);
          t[a]
            ? t[a].p(i, n)
            : ((t[a] = Jt(i)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      ue(t, s), s && g(e);
    },
  };
}
function lr(r) {
  let e, l;
  return (
    (e = new us({
      props: {
        class: "mt12",
        height: "64px",
        childProps: [
          { width: "32px", height: "32px", borderRadius: "50%" },
          { width: "200px" },
          { width: "60px", class: "grid-end" },
        ],
      },
    })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      p: se,
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function sr(r) {
  let e,
    l,
    t = new Array(ze).fill(0),
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = lr(qn(r, t, n));
  return {
    c() {
      e = b("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = k(e);
      for (let i = 0; i < s.length; i += 1) s[i].l(a);
      a.forEach(g), this.h();
    },
    h() {
      m(e, "class", "df fdcr ml24 mr24");
    },
    m(n, a) {
      y(n, e, a);
      for (let i = 0; i < s.length; i += 1) s[i].m(e, null);
      l = !0;
    },
    p: se,
    i(n) {
      if (!l) {
        for (let a = 0; a < t.length; a += 1) L(s[a]);
        l = !0;
      }
    },
    o(n) {
      s = s.filter(tt);
      for (let a = 0; a < s.length; a += 1) R(s[a]);
      l = !1;
    },
    d(n) {
      n && g(e), ue(s, n);
    },
  };
}
function Qt(r) {
  let e,
    l,
    t,
    s = r[19].label + "",
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h,
    p,
    v,
    I;
  return (
    (p = new mt({
      props: {
        loaded: r[19].cryptos && r[19].cryptos.length === ze,
        $$slots: { skeleton: [sr], default: [tr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          (t = b("h3")),
          (n = j(s)),
          (a = S()),
          (i = b("a")),
          (c = j("All ")),
          (o = b("i")),
          (f = j("")),
          (d = S()),
          (h = b("div")),
          J(p.$$.fragment),
          (v = S()),
          this.h();
      },
      l($) {
        e = E($, "DIV", { class: !0 });
        var T = k(e);
        l = E(T, "DIV", { class: !0 });
        var w = k(l);
        t = E(w, "H3", { class: !0 });
        var A = k(t);
        (n = H(A, s)),
          A.forEach(g),
          (a = D(w)),
          (i = E(w, "A", { href: !0, class: !0, ref: !0 }));
        var C = k(i);
        (c = H(C, "All ")), (o = E(C, "I", { class: !0 }));
        var N = k(o);
        (f = H(N, "")),
          N.forEach(g),
          C.forEach(g),
          w.forEach(g),
          (d = D(T)),
          (h = E(T, "DIV", {}));
        var U = k(h);
        x(p.$$.fragment, U), U.forEach(g), (v = D(T)), T.forEach(g), this.h();
      },
      h() {
        m(t, "class", "label svelte-161jgm9"),
          m(o, "class", "iconfont arrow dib fw3 svelte-161jgm9"),
          m(i, "href", (u = r[19].href)),
          m(i, "class", "f14"),
          m(i, "ref", "noopener"),
          m(l, "class", "title-wrap df aic jcsb ph24 svelte-161jgm9"),
          m(e, "class", "more-wrap pv24 svelte-161jgm9");
      },
      m($, T) {
        y($, e, T),
          _(e, l),
          _(l, t),
          _(t, n),
          _(l, a),
          _(l, i),
          _(i, c),
          _(i, o),
          _(o, f),
          _(e, d),
          _(e, h),
          Q(p, h, null),
          _(e, v),
          (I = !0);
      },
      p($, T) {
        (!I || T[0] & 1) && s !== (s = $[19].label + "") && ge(n, s),
          (!I || (T[0] & 1 && u !== (u = $[19].href))) && m(i, "href", u);
        const w = {};
        T[0] & 1 && (w.loaded = $[19].cryptos && $[19].cryptos.length === ze),
          (T[0] & 1) | (T[1] & 4) && (w.$$scope = { dirty: T, ctx: $ }),
          p.$set(w);
      },
      i($) {
        I || (L(p.$$.fragment, $), (I = !0));
      },
      o($) {
        R(p.$$.fragment, $), (I = !1);
      },
      d($) {
        $ && g(e), Z(p);
      },
    }
  );
}
function nr(r) {
  let e,
    l,
    t,
    s = r[4](P.CryptoPrices) + "",
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d = r[4](P.HotSpot) + "",
    h,
    p,
    v,
    I = r[4](P.HotContract) + "",
    $,
    T,
    w,
    A = r[4](P.TopGainers) + "",
    C,
    N,
    U,
    M = r[4](P.NewListhings) + "",
    G,
    B,
    K,
    q,
    ee,
    X,
    F,
    Y,
    W,
    O,
    V,
    ae,
    ne,
    z;
  (q = new it({
    props: { type: "text", $$slots: { default: [Yn] }, $$scope: { ctx: r } },
  })),
    q.$on("click", r[8]),
    (X = new mt({
      props: {
        loaded: r[2] && r[2][r[1]] && r[2][r[1]].length === Re,
        $$slots: { skeleton: [xn], default: [Zn] },
        $$scope: { ctx: r },
      },
    })),
    (W = new it({
      props: { type: "text", $$slots: { default: [er] }, $$scope: { ctx: r } },
    })),
    W.$on("click", r[8]);
  let pe = r[0],
    ie = [];
  for (let le = 0; le < pe.length; le += 1) ie[le] = Qt(Ft(r, pe, le));
  const Se = (le) =>
    R(ie[le], 1, 1, () => {
      ie[le] = null;
    });
  return {
    c() {
      (e = b("section")),
        (l = b("div")),
        (t = b("h2")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (c = b("div")),
        (o = b("div")),
        (f = b("div")),
        (u = b("h3")),
        (h = j(d)),
        (p = S()),
        (v = b("h3")),
        ($ = j(I)),
        (T = S()),
        (w = b("h3")),
        (C = j(A)),
        (N = S()),
        (U = b("h3")),
        (G = j(M)),
        (B = S()),
        (K = b("div")),
        J(q.$$.fragment),
        (ee = S()),
        J(X.$$.fragment),
        (F = S()),
        (Y = b("div")),
        J(W.$$.fragment),
        (O = S()),
        (V = b("div"));
      for (let le = 0; le < ie.length; le += 1) ie[le].c();
      this.h();
    },
    l(le) {
      e = E(le, "SECTION", { class: !0 });
      var ce = k(e);
      l = E(ce, "DIV", { class: !0 });
      var De = k(l);
      t = E(De, "H2", { class: !0 });
      var Me = k(t);
      (n = H(Me, s)),
        Me.forEach(g),
        (a = D(De)),
        (i = E(De, "DIV", { class: !0 }));
      var Ne = k(i);
      c = E(Ne, "DIV", { class: !0 });
      var be = k(c);
      o = E(be, "DIV", { class: !0 });
      var He = k(o);
      f = E(He, "DIV", { class: !0 });
      var Be = k(f);
      u = E(Be, "H3", { class: !0, "data-tab": !0 });
      var gt = k(u);
      (h = H(gt, d)),
        gt.forEach(g),
        (p = D(Be)),
        (v = E(Be, "H3", { class: !0, "data-tab": !0 }));
      var pt = k(v);
      ($ = H(pt, I)),
        pt.forEach(g),
        (T = D(Be)),
        (w = E(Be, "H3", { class: !0, "data-tab": !0 }));
      var vt = k(w);
      (C = H(vt, A)),
        vt.forEach(g),
        (N = D(Be)),
        (U = E(Be, "H3", { class: !0, "data-tab": !0 }));
      var bt = k(U);
      (G = H(bt, M)),
        bt.forEach(g),
        Be.forEach(g),
        (B = D(He)),
        (K = E(He, "DIV", { class: !0 }));
      var Et = k(K);
      x(q.$$.fragment, Et),
        Et.forEach(g),
        He.forEach(g),
        (ee = D(be)),
        x(X.$$.fragment, be),
        (F = D(be)),
        (Y = E(be, "DIV", { class: !0 }));
      var $t = k(Y);
      x(W.$$.fragment, $t),
        $t.forEach(g),
        be.forEach(g),
        (O = D(Ne)),
        (V = E(Ne, "DIV", { class: !0 }));
      var It = k(V);
      for (let lt = 0; lt < ie.length; lt += 1) ie[lt].l(It);
      It.forEach(g), Ne.forEach(g), De.forEach(g), ce.forEach(g), this.h();
    },
    h() {
      m(t, "class", "caption mb32 f32 svelte-161jgm9"),
        m(u, "class", "tab f16 cp svelte-161jgm9"),
        m(u, "data-tab", r[5].SPOT),
        _e(u, "active", r[1] === r[5].SPOT),
        m(v, "class", "tab ml24 f16 cp svelte-161jgm9"),
        m(v, "data-tab", r[5].CONTRACT),
        _e(v, "active", r[1] === r[5].CONTRACT),
        m(w, "class", "tab ml24 f16 cp dn xs:db svelte-161jgm9"),
        m(w, "data-tab", r[5].GAINER),
        _e(w, "active", r[1] === r[5].GAINER),
        m(U, "class", "tab ml24 f16 cp dn xs:db svelte-161jgm9"),
        m(U, "data-tab", r[5].NEW_LISTING),
        _e(U, "active", r[1] === r[5].NEW_LISTING),
        m(f, "class", "tab-wrap df aic svelte-161jgm9"),
        m(K, "class", "view-more-btn-wrap f14 xs:dn svelte-161jgm9"),
        m(o, "class", "df aic jcsb ph24"),
        m(Y, "class", "h5-more mt16 tc f14 dn xs:db"),
        m(c, "class", "data-wrap f1 pv24 svelte-161jgm9"),
        m(V, "class", "right f16 xs:dn svelte-161jgm9"),
        m(i, "class", "content df br12 fw2 svelte-161jgm9"),
        m(l, "class", "wrap svelte-161jgm9"),
        m(e, "class", "outer svelte-161jgm9");
    },
    m(le, ce) {
      y(le, e, ce),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, c),
        _(c, o),
        _(o, f),
        _(f, u),
        _(u, h),
        _(f, p),
        _(f, v),
        _(v, $),
        _(f, T),
        _(f, w),
        _(w, C),
        _(f, N),
        _(f, U),
        _(U, G),
        _(o, B),
        _(o, K),
        Q(q, K, null),
        _(c, ee),
        Q(X, c, null),
        _(c, F),
        _(c, Y),
        Q(W, Y, null),
        _(i, O),
        _(i, V);
      for (let De = 0; De < ie.length; De += 1) ie[De].m(V, null);
      (ae = !0), ne || ((z = $e(f, "click", r[7])), (ne = !0));
    },
    p(le, ce) {
      (!ae || ce[0] & 34) && _e(u, "active", le[1] === le[5].SPOT),
        (!ae || ce[0] & 34) && _e(v, "active", le[1] === le[5].CONTRACT),
        (!ae || ce[0] & 34) && _e(w, "active", le[1] === le[5].GAINER),
        (!ae || ce[0] & 34) && _e(U, "active", le[1] === le[5].NEW_LISTING);
      const De = {};
      ce[1] & 4 && (De.$$scope = { dirty: ce, ctx: le }), q.$set(De);
      const Me = {};
      ce[0] & 6 &&
        (Me.loaded = le[2] && le[2][le[1]] && le[2][le[1]].length === Re),
        (ce[0] & 14) | (ce[1] & 4) && (Me.$$scope = { dirty: ce, ctx: le }),
        X.$set(Me);
      const Ne = {};
      if (
        (ce[1] & 4 && (Ne.$$scope = { dirty: ce, ctx: le }),
        W.$set(Ne),
        ce[0] & 17)
      ) {
        pe = le[0];
        let be;
        for (be = 0; be < pe.length; be += 1) {
          const He = Ft(le, pe, be);
          ie[be]
            ? (ie[be].p(He, ce), L(ie[be], 1))
            : ((ie[be] = Qt(He)), ie[be].c(), L(ie[be], 1), ie[be].m(V, null));
        }
        for (Ie(), be = pe.length; be < ie.length; be += 1) Se(be);
        ke();
      }
    },
    i(le) {
      if (!ae) {
        L(q.$$.fragment, le), L(X.$$.fragment, le), L(W.$$.fragment, le);
        for (let ce = 0; ce < pe.length; ce += 1) L(ie[ce]);
        ae = !0;
      }
    },
    o(le) {
      R(q.$$.fragment, le),
        R(X.$$.fragment, le),
        R(W.$$.fragment, le),
        (ie = ie.filter(tt));
      for (let ce = 0; ce < ie.length; ce += 1) R(ie[ce]);
      ae = !1;
    },
    d(le) {
      le && g(e), Z(q), Z(X), Z(W), ue(ie, le), (ne = !1), z();
    },
  };
}
const Re = 7,
  ze = 3;
function Zt(r, e) {
  const l = [];
  return (
    [...r, ...e].forEach((t) => {
      l.find(({ symbol: s }) => t.symbol === s) || l.push(t);
    }),
    l
  );
}
function Qe(r) {
  return function () {
    window.open(r.tradeLink, "_blank", "noopener");
  };
}
function rr(r, e, l) {
  let t, s, n, a, i, c, o;
  oe(r, Ns, (N) => l(9, (t = N))),
    oe(r, Nt, (N) => l(10, (s = N))),
    oe(r, Ye, (N) => l(11, (n = N))),
    oe(r, ct, (N) => l(12, (a = N))),
    oe(r, Ve, (N) => l(15, (i = N))),
    oe(r, Pt, (N) => l(3, (o = N)));
  const f = ve("LG"),
    u = [
      {
        label: f(P.TopGainers),
        cryptos: [],
        href: i(fe.MARKETS.pathname) + "?tabType=Spot",
      },
      {
        label: f(P.NewListhings),
        cryptos: [],
        href: i(fe.MARKETS.pathname) + "?tabType=NewListings",
      },
    ],
    d = {
      SPOT: "SPOT",
      CONTRACT: "CONTRACT",
      NEW_LISTING: "NEW_LISTING",
      GAINER: "GAINER",
    },
    h = {
      SPOT: {
        marketsId: 0,
        sortKey: "combinationTurnoverEv",
        viewMoreLink: i(fe.MARKETS.pathname),
      },
      CONTRACT: {
        marketsId: 2,
        sortKey: "combinationTurnoverEv",
        viewMoreLink: i(fe.MARKETS.pathname) + "?tabType=Contract",
      },
      NEW_LISTING: {
        marketsId: 1,
        sortKey: "listTime",
        viewMoreLink: i(fe.MARKETS.pathname + "?tabType=NewListings"),
      },
      GAINER: {
        marketsId: 0,
        sortKey: "changePercent",
        viewMoreLink: i(
          fe.MARKETS.pathname + "?tabType=Spot&sort=changePercent"
        ),
      },
    };
  let p = [],
    v = [];
  const I = is([ct, _s, Ye, gs, Pt, Nt, Cs]).pipe(
    fs(([N, U, M, G, B, K, q]) => {
      let ee = U.map((F) => N.find((Y) => Y.symbol === F)).filter(Boolean),
        X = G.map((F) => M.find((Y) => Y.symbol === F)).filter(Boolean);
      return (
        ee.length < Re && (ee = Zt(ee, p).slice(0, Re)),
        X.length < Re && (X = Zt(X, v).slice(0, Re)),
        B
          ? {
              [d.SPOT]: ee,
              [d.CONTRACT]: X,
              [d.GAINER]: K,
              [d.NEW_LISTING]: q.slice(0, 3),
            }
          : { [d.SPOT]: ee, [d.CONTRACT]: X }
      );
    })
  );
  oe(r, I, (N) => l(2, (c = N)));
  let $ = d.SPOT;
  function T(N, U) {
    l(0, (u[0].cryptos = w(ze, d.GAINER, N)), u),
      l(0, (u[1].cryptos = w(ze, d.NEW_LISTING, U)), u);
  }
  function w(N, U, ...M) {
    const G = h[U],
      B = M.length > 1 ? M[G.marketsId] : M[0];
    return B ? B.sort((K, q) => q[G.sortKey] - K[G.sortKey]).slice(0, N) : [];
  }
  function A(N) {
    const U = N.target.dataset.tab;
    U && l(1, ($ = U));
  }
  function C() {
    window.open(h[$].viewMoreLink, "_self", "noopener");
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty[0] & 6656 && (p = w(Re, d.SPOT, a, t, n)),
        r.$$.dirty[0] & 6656 && (v = w(Re, d.CONTRACT, a, t, n)),
        r.$$.dirty[0] & 1536 && T(s, t);
    }),
    [u, $, c, o, f, d, I, A, C, t, s, n, a]
  );
}
class ar extends de {
  constructor(e) {
    super(), he(this, e, rr, nr, me, {}, null, [-1, -1]);
  }
}
function xt(r, e, l) {
  const t = r.slice();
  return (t[9] = e[l]), (t[11] = l), t;
}
function el(r) {
  let e, l;
  return (
    (e = new Ue({
      props: {
        class: r[2] !== r[9].btnType ? "p0" : "",
        type: r[2] === r[9].btnType ? "primary" : "text",
        $$slots: { default: [ir] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", function () {
      Ce(sl(r[9])) && sl(r[9]).apply(this, arguments);
    }),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      p(t, s) {
        r = t;
        const n = {};
        s & 6 && (n.class = r[2] !== r[9].btnType ? "p0" : ""),
          s & 6 && (n.type = r[2] === r[9].btnType ? "primary" : "text"),
          s & 4102 && (n.$$scope = { dirty: s, ctx: r }),
          e.$set(n);
      },
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function tl(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = j("")), this.h();
    },
    l(t) {
      e = E(t, "I", { class: !0 });
      var s = k(e);
      (l = H(s, "")), s.forEach(g), this.h();
    },
    h() {
      m(e, "class", "iconfont db ml8 f14 BLUE cp b");
    },
    m(t, s) {
      y(t, e, s), _(e, l);
    },
    d(t) {
      t && g(e);
    },
  };
}
function ir(r) {
  let e,
    l = r[9].btnText + "",
    t,
    s,
    n = r[2] !== r[9].btnType && tl();
  return {
    c() {
      (e = b("div")), (t = j(l)), (s = S()), n && n.c(), this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = k(e);
      (t = H(i, l)), (s = D(i)), n && n.l(i), i.forEach(g), this.h();
    },
    h() {
      m(e, "class", "df aic fw3");
    },
    m(a, i) {
      y(a, e, i), _(e, t), _(e, s), n && n.m(e, null);
    },
    p(a, i) {
      i & 2 && l !== (l = a[9].btnText + "") && ge(t, l),
        a[2] !== a[9].btnType
          ? n || ((n = tl()), n.c(), n.m(e, null))
          : n && (n.d(1), (n = null));
    },
    d(a) {
      a && g(e), n && n.d();
    },
  };
}
function ll(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c = r[9].title + "",
    o,
    f,
    u,
    d = r[9].desc + "",
    h,
    p,
    v,
    I = ((r[11] === 0 && !r[0]) || r[11] !== 0) && el(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("img")),
        (a = S()),
        (i = b("h3")),
        (o = j(c)),
        (f = S()),
        (u = b("div")),
        (h = S()),
        I && I.c(),
        (p = S()),
        this.h();
    },
    l($) {
      e = E($, "DIV", { class: !0 });
      var T = k(e);
      l = E(T, "DIV", {});
      var w = k(l);
      (t = E(w, "IMG", { class: !0, width: !0, height: !0, src: !0, alt: !0 })),
        (a = D(w)),
        (i = E(w, "H3", { class: !0 }));
      var A = k(i);
      (o = H(A, c)), A.forEach(g), (f = D(w)), (u = E(w, "DIV", { class: !0 }));
      var C = k(u);
      C.forEach(g),
        w.forEach(g),
        (h = D(T)),
        I && I.l(T),
        (p = D(T)),
        T.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "mb24"),
        m(t, "width", "60"),
        m(t, "height", "60"),
        re(t.src, (s = te[r[9].icon])) || m(t, "src", s),
        m(t, "alt", (n = r[9].alt)),
        m(i, "class", "title mb20 f24 T1 svelte-9pa0i3"),
        m(u, "class", "desc mb24 T3 svelte-9pa0i3"),
        m(e, "class", "card df fdc aifs jcsb tl svelte-9pa0i3");
    },
    m($, T) {
      y($, e, T),
        _(e, l),
        _(l, t),
        _(l, a),
        _(l, i),
        _(i, o),
        _(l, f),
        _(l, u),
        (u.innerHTML = d),
        _(e, h),
        I && I.m(e, null),
        _(e, p),
        (v = !0);
    },
    p($, T) {
      (!v || (T & 2 && !re(t.src, (s = te[$[9].icon])))) && m(t, "src", s),
        (!v || (T & 2 && n !== (n = $[9].alt))) && m(t, "alt", n),
        (!v || T & 2) && c !== (c = $[9].title + "") && ge(o, c),
        (!v || T & 2) && d !== (d = $[9].desc + "") && (u.innerHTML = d),
        ($[11] === 0 && !$[0]) || $[11] !== 0
          ? I
            ? (I.p($, T), T & 1 && L(I, 1))
            : ((I = el($)), I.c(), L(I, 1), I.m(e, p))
          : I &&
            (Ie(),
            R(I, 1, 1, () => {
              I = null;
            }),
            ke());
    },
    i($) {
      v || (L(I), (v = !0));
    },
    o($) {
      R(I), (v = !1);
    },
    d($) {
      $ && g(e), I && I.d();
    },
  };
}
function cr(r) {
  let e,
    l,
    t = r[3](P.WeMakeCryptoEasy) + "",
    s,
    n,
    a,
    i = r[3](P.StepsTitle) + "",
    c,
    o,
    f,
    u,
    d = r[1],
    h = [];
  for (let v = 0; v < d.length; v += 1) h[v] = ll(xt(r, d, v));
  const p = (v) =>
    R(h[v], 1, 1, () => {
      h[v] = null;
    });
  return {
    c() {
      (e = b("section")),
        (l = b("h2")),
        (s = j(t)),
        (n = S()),
        (a = b("div")),
        (c = j(i)),
        (o = S()),
        (f = b("div"));
      for (let v = 0; v < h.length; v += 1) h[v].c();
      this.h();
    },
    l(v) {
      e = E(v, "SECTION", { class: !0 });
      var I = k(e);
      l = E(I, "H2", { class: !0 });
      var $ = k(l);
      (s = H($, t)), $.forEach(g), (n = D(I)), (a = E(I, "DIV", { class: !0 }));
      var T = k(a);
      (c = H(T, i)), T.forEach(g), (o = D(I)), (f = E(I, "DIV", { class: !0 }));
      var w = k(f);
      for (let A = 0; A < h.length; A += 1) h[A].l(w);
      w.forEach(g), I.forEach(g), this.h();
    },
    h() {
      m(l, "class", "caption svelte-9pa0i3"),
        m(a, "class", "sub-title fw2 svelte-9pa0i3"),
        m(f, "class", "card-wrap df svelte-9pa0i3"),
        m(e, "class", "wrap tc svelte-9pa0i3");
    },
    m(v, I) {
      y(v, e, I), _(e, l), _(l, s), _(e, n), _(e, a), _(a, c), _(e, o), _(e, f);
      for (let $ = 0; $ < h.length; $ += 1) h[$].m(f, null);
      u = !0;
    },
    p(v, [I]) {
      if (I & 7) {
        d = v[1];
        let $;
        for ($ = 0; $ < d.length; $ += 1) {
          const T = xt(v, d, $);
          h[$]
            ? (h[$].p(T, I), L(h[$], 1))
            : ((h[$] = ll(T)), h[$].c(), L(h[$], 1), h[$].m(f, null));
        }
        for (Ie(), $ = d.length; $ < h.length; $ += 1) p($);
        ke();
      }
    },
    i(v) {
      if (!u) {
        for (let I = 0; I < d.length; I += 1) L(h[I]);
        u = !0;
      }
    },
    o(v) {
      h = h.filter(Boolean);
      for (let I = 0; I < h.length; I += 1) R(h[I]);
      u = !1;
    },
    d(v) {
      v && g(e), ue(h, v);
    },
  };
}
function or(r) {
  return r.some((e) => e.taskId === 10 && e.status === 200);
}
function sl(r) {
  return function () {
    location.href = r.href;
  };
}
function fr(r, e, l) {
  let t, s, n, a, i, c;
  oe(r, Ve, (d) => l(7, (s = d))),
    oe(r, Rs, (d) => l(0, (n = d))),
    oe(r, Ye, (d) => l(4, (a = d))),
    oe(r, ht, (d) => l(5, (i = d))),
    oe(r, ms, (d) => l(6, (c = d)));
  const o = ve("LG");
  let f = [];
  Ke(() => n && zn());
  function u(d, h) {
    return [
      {
        icon: "STEP1",
        title: o(P.Step1),
        desc: o(P.Step1Desc),
        btnType: "step1",
        btnText: o(P.SignUp),
        alt: "fund your account",
        href: s(fe.REGISTER.pathname),
      },
      {
        icon: "STEP2",
        title: o(P.Step2),
        desc: o(P.Step2Desc),
        btnType: "step2",
        btnText: o(P.BuyNow),
        alt: "deposit crypto",
        href: s(
          d
            ? fe.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
            : fe.OTC_LEGEND_TRADING.pathname
        ),
      },
      {
        icon: "STEP3",
        title: o(P.Step3),
        desc: o(P.Step3Desc, { Number: h == null ? void 0 : h.length }),
        btnType: "step3",
        btnText: o(P.TradingNow),
        alt: "trade crypto",
        href: "/trade/BTCUSD",
      },
    ];
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 65 && l(2, (t = n ? (or(c) ? "step3" : "step2") : "step1")),
        r.$$.dirty & 48 && l(1, (f = u(i, a)));
    }),
    [n, f, t, o, a, i, c]
  );
}
class ur extends de {
  constructor(e) {
    super(), he(this, e, fr, cr, me, {});
  }
}
function nl(r, e, l) {
  const t = r.slice();
  return (t[8] = e[l]), t;
}
function rl(r, e, l) {
  const t = r.slice();
  return (t[11] = e[l]), t;
}
function al(r, e, l) {
  const t = r.slice();
  return (t[11] = e[l]), t;
}
function il(r) {
  let e,
    l,
    t = r[11].title + "",
    s,
    n,
    a,
    i,
    c,
    o,
    f;
  return {
    c() {
      (e = b("div")),
        (l = b("sapn")),
        (s = j(t)),
        (n = S()),
        (a = b("i")),
        (i = j("")),
        (c = S()),
        this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var d = k(e);
      l = E(d, "SAPN", {});
      var h = k(l);
      (s = H(h, t)), h.forEach(g), (n = D(d)), (a = E(d, "I", { class: !0 }));
      var p = k(a);
      (i = H(p, "")), p.forEach(g), (c = D(d)), d.forEach(g), this.h();
    },
    h() {
      m(a, "class", "arrow-h5 iconfont dn ml8 f14 BLUE cp b xs:db"),
        m(e, "class", "action df jcsb fw2 svelte-2ij5ar");
    },
    m(u, d) {
      y(u, e, d),
        _(e, l),
        _(l, s),
        _(e, n),
        _(e, a),
        _(a, i),
        _(e, c),
        o ||
          ((f = $e(e, "click", function () {
            Ce(r[2](r[11])) && r[2](r[11]).apply(this, arguments);
          })),
          (o = !0));
    },
    p(u, d) {
      (r = u), d & 1 && t !== (t = r[11].title + "") && ge(s, t);
    },
    d(u) {
      u && g(e), (o = !1), f();
    },
  };
}
function dr(r) {
  let e,
    l,
    t = r[11].action + "",
    s,
    n,
    a;
  return {
    c() {
      (e = b("div")),
        (l = b("span")),
        (s = j(t)),
        (n = b("i")),
        (a = j("")),
        this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      l = E(c, "SPAN", {});
      var o = k(l);
      (s = H(o, t)), o.forEach(g), (n = E(c, "I", { class: !0 }));
      var f = k(n);
      (a = H(f, "")), f.forEach(g), c.forEach(g), this.h();
    },
    h() {
      m(n, "class", "iconfont db ml8 f14 BLUE cp b"),
        m(e, "class", "df aife fw3");
    },
    m(i, c) {
      y(i, e, c), _(e, l), _(l, s), _(e, n), _(n, a);
    },
    p(i, c) {
      c & 1 && t !== (t = i[11].action + "") && ge(s, t);
    },
    d(i) {
      i && g(e);
    },
  };
}
function cl(r) {
  let e, l, t, s;
  return (
    (l = new Ue({
      props: {
        type: "text",
        class: "p0 xs:dn",
        $$slots: { default: [dr] },
        $$scope: { ctx: r },
      },
    })),
    l.$on("click", function () {
      Ce(r[2](r[11])) && r[2](r[11]).apply(this, arguments);
    }),
    {
      c() {
        (e = b("div")), J(l.$$.fragment), (t = S()), this.h();
      },
      l(n) {
        e = E(n, "DIV", { class: !0 });
        var a = k(e);
        x(l.$$.fragment, a), (t = D(a)), a.forEach(g), this.h();
      },
      h() {
        m(e, "class", "action-link svelte-2ij5ar");
      },
      m(n, a) {
        y(n, e, a), Q(l, e, null), _(e, t), (s = !0);
      },
      p(n, a) {
        r = n;
        const i = {};
        a & 65537 && (i.$$scope = { dirty: a, ctx: r }), l.$set(i);
      },
      i(n) {
        s || (L(l.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(l.$$.fragment, n), (s = !1);
      },
      d(n) {
        n && g(e), Z(l);
      },
    }
  );
}
function ol(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i = r[8].title + "",
    c,
    o,
    f,
    u = r[8].desc + "",
    d,
    h,
    p,
    v,
    I,
    $,
    T,
    w = r[8].actions,
    A = [];
  for (let M = 0; M < w.length; M += 1) A[M] = il(al(r, w, M));
  let C = r[8].actions,
    N = [];
  for (let M = 0; M < C.length; M += 1) N[M] = cl(rl(r, C, M));
  const U = (M) =>
    R(N[M], 1, 1, () => {
      N[M] = null;
    });
  return {
    c() {
      (e = b("div")),
        (l = b("img")),
        (s = S()),
        (n = b("div")),
        (a = b("h3")),
        (c = j(i)),
        (o = S()),
        (f = b("div")),
        (d = j(u)),
        (h = S()),
        (p = b("div"));
      for (let M = 0; M < A.length; M += 1) A[M].c();
      (v = S()), (I = b("div"));
      for (let M = 0; M < N.length; M += 1) N[M].c();
      ($ = S()), this.h();
    },
    l(M) {
      e = E(M, "DIV", { class: !0 });
      var G = k(e);
      (l = E(G, "IMG", { src: !0, alt: !0, class: !0 })),
        (s = D(G)),
        (n = E(G, "DIV", { class: !0 }));
      var B = k(n);
      a = E(B, "H3", { class: !0 });
      var K = k(a);
      (c = H(K, i)), K.forEach(g), (o = D(B)), (f = E(B, "DIV", { class: !0 }));
      var q = k(f);
      (d = H(q, u)), q.forEach(g), (h = D(B)), (p = E(B, "DIV", { class: !0 }));
      var ee = k(p);
      for (let F = 0; F < A.length; F += 1) A[F].l(ee);
      ee.forEach(g), (v = D(B)), (I = E(B, "DIV", { class: !0 }));
      var X = k(I);
      for (let F = 0; F < N.length; F += 1) N[F].l(X);
      X.forEach(g), B.forEach(g), ($ = D(G)), G.forEach(g), this.h();
    },
    h() {
      re(l.src, (t = r[8].img)) || m(l, "src", t),
        m(l, "alt", "product-icon"),
        m(l, "class", "svelte-2ij5ar"),
        m(a, "class", "product-title b svelte-2ij5ar"),
        m(f, "class", "desc mb32 f16 svelte-2ij5ar"),
        m(p, "class", "df aifs jcsb xs:db f18"),
        m(I, "class", "mt16 df aife jcsb f18"),
        m(n, "class", "content svelte-2ij5ar"),
        m(e, "class", "product df aifs jcsb svelte-2ij5ar");
    },
    m(M, G) {
      y(M, e, G),
        _(e, l),
        _(e, s),
        _(e, n),
        _(n, a),
        _(a, c),
        _(n, o),
        _(n, f),
        _(f, d),
        _(n, h),
        _(n, p);
      for (let B = 0; B < A.length; B += 1) A[B].m(p, null);
      _(n, v), _(n, I);
      for (let B = 0; B < N.length; B += 1) N[B].m(I, null);
      _(e, $), (T = !0);
    },
    p(M, G) {
      if (
        ((!T || (G & 1 && !re(l.src, (t = M[8].img)))) && m(l, "src", t),
        (!T || G & 1) && i !== (i = M[8].title + "") && ge(c, i),
        (!T || G & 1) && u !== (u = M[8].desc + "") && ge(d, u),
        G & 5)
      ) {
        w = M[8].actions;
        let B;
        for (B = 0; B < w.length; B += 1) {
          const K = al(M, w, B);
          A[B] ? A[B].p(K, G) : ((A[B] = il(K)), A[B].c(), A[B].m(p, null));
        }
        for (; B < A.length; B += 1) A[B].d(1);
        A.length = w.length;
      }
      if (G & 5) {
        C = M[8].actions;
        let B;
        for (B = 0; B < C.length; B += 1) {
          const K = rl(M, C, B);
          N[B]
            ? (N[B].p(K, G), L(N[B], 1))
            : ((N[B] = cl(K)), N[B].c(), L(N[B], 1), N[B].m(I, null));
        }
        for (Ie(), B = C.length; B < N.length; B += 1) U(B);
        ke();
      }
    },
    i(M) {
      if (!T) {
        for (let G = 0; G < C.length; G += 1) L(N[G]);
        T = !0;
      }
    },
    o(M) {
      N = N.filter(Boolean);
      for (let G = 0; G < N.length; G += 1) R(N[G]);
      T = !1;
    },
    d(M) {
      M && g(e), ue(A, M), ue(N, M);
    },
  };
}
function hr(r) {
  let e,
    l,
    t,
    s = r[1](P.OurProducts) + "",
    n,
    a,
    i,
    c = r[0],
    o = [];
  for (let u = 0; u < c.length; u += 1) o[u] = ol(nl(r, c, u));
  const f = (u) =>
    R(o[u], 1, 1, () => {
      o[u] = null;
    });
  return {
    c() {
      (e = b("section")), (l = b("div")), (t = b("h2")), (n = j(s)), (a = S());
      for (let u = 0; u < o.length; u += 1) o[u].c();
      this.h();
    },
    l(u) {
      e = E(u, "SECTION", { class: !0 });
      var d = k(e);
      l = E(d, "DIV", { class: !0 });
      var h = k(l);
      t = E(h, "H2", { class: !0 });
      var p = k(t);
      (n = H(p, s)), p.forEach(g), (a = D(h));
      for (let v = 0; v < o.length; v += 1) o[v].l(h);
      h.forEach(g), d.forEach(g), this.h();
    },
    h() {
      m(t, "class", "caption tc svelte-2ij5ar"),
        m(l, "class", "wrap svelte-2ij5ar"),
        m(e, "class", "outer svelte-2ij5ar");
    },
    m(u, d) {
      y(u, e, d), _(e, l), _(l, t), _(t, n), _(l, a);
      for (let h = 0; h < o.length; h += 1) o[h].m(l, null);
      i = !0;
    },
    p(u, [d]) {
      if (d & 5) {
        c = u[0];
        let h;
        for (h = 0; h < c.length; h += 1) {
          const p = nl(u, c, h);
          o[h]
            ? (o[h].p(p, d), L(o[h], 1))
            : ((o[h] = ol(p)), o[h].c(), L(o[h], 1), o[h].m(l, null));
        }
        for (Ie(), h = c.length; h < o.length; h += 1) f(h);
        ke();
      }
    },
    i(u) {
      if (!i) {
        for (let d = 0; d < c.length; d += 1) L(o[d]);
        i = !0;
      }
    },
    o(u) {
      o = o.filter(Boolean);
      for (let d = 0; d < o.length; d += 1) R(o[d]);
      i = !1;
    },
    d(u) {
      u && g(e), ue(o, u);
    },
  };
}
function mr(r, e, l) {
  let t, s, n, a, i;
  oe(r, Ve, (u) => l(6, (s = u))),
    oe(r, Ye, (u) => l(3, (n = u))),
    oe(r, ct, (u) => l(4, (a = u))),
    oe(r, ht, (u) => l(5, (i = u)));
  const c = ve("LG");
  function o(u, d, h) {
    return [
      {
        title: c(P.Reliable),
        desc: c(P.ReliableDesc),
        img: te.PRO1,
        alt: "crypto leverage trading",
        actions: [
          {
            title: c(P.StartTrade, { Number: h == null ? void 0 : h.length }),
            action: c(P.TradingNow),
            href: "/trade/BTCUSDT",
          },
          {
            title: c(P.LowFee),
            action: c(P.Check),
            href: s(fe.VIP_PROGRAM.pathname),
          },
          {
            title: c(P.OneClick),
            action: c(P.GoCopy),
            href: s(fe.COPY_TRADING_LIST.pathname),
          },
        ],
      },
      {
        title: c(P.MostReward),
        desc: c(P.Trade249, { Number: d == null ? void 0 : d.length }),
        img: te.PRO2,
        alt: "spot trading crypto",
        actions: [
          {
            title: c(P.Explore270, { Number: d == null ? void 0 : d.length }),
            action: c(P.TradingNow),
            href: as.PHEMEX_SPOT_TRADE,
          },
          {
            title: c(P.BuyP2P),
            action: c(P.BuyCrypto),
            href: s(
              u
                ? fe.FIAT_BUY_CRYPTO_PLACE_ORDER.pathname
                : fe.OTC_LEGEND_TRADING.pathname
            ),
          },
          {
            title: c(P.FindNext),
            action: c(P.Launchpad),
            href: s(fe.LAUNCHPAD.pathname),
          },
        ],
      },
      {
        title: c(P.Grow),
        desc: c(P.EarBTC),
        img: te.PRO3,
        alt: "earn crypto",
        actions: [
          {
            title: c(P.Stake),
            action: c(P.Launchpool),
            href: s(fe.LAUNCHPOOL.pathname),
          },
          {
            title: c(P.Generate),
            action: c(P.SaveNow),
            href: s(fe.EARN.pathname),
          },
        ],
      },
    ];
  }
  function f(u) {
    return function () {
      qe(u.href);
    };
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 56 && l(0, (t = o(i, a, n)));
    }),
    [t, c, f, n, a, i]
  );
}
class _r extends de {
  constructor(e) {
    super(), he(this, e, mr, hr, me, {});
  }
}
var ot = {},
  gr = {
    get exports() {
      return ot;
    },
    set exports(r) {
      ot = r;
    },
  };
(function (r, e) {
  (function (l, t) {
    r.exports = t();
  })(typeof self < "u" ? self : Vs, function () {
    return (function (l) {
      function t(n) {
        if (s[n]) return s[n].exports;
        var a = (s[n] = { i: n, l: !1, exports: {} });
        return l[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
      }
      var s = {};
      return (
        (t.m = l),
        (t.c = s),
        (t.d = function (n, a, i) {
          t.o(n, a) ||
            Object.defineProperty(n, a, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (t.n = function (n) {
          var a =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return t.d(a, "a", a), a;
        }),
        (t.o = function (n, a) {
          return Object.prototype.hasOwnProperty.call(n, a);
        }),
        (t.p = ""),
        t((t.s = 0))
      );
    })([
      function (l, t, s) {
        function n(o, f) {
          if (!(o instanceof f))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    typeof Symbol == "function" &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                },
          i = (function () {
            function o(f, u) {
              for (var d = 0; d < u.length; d++) {
                var h = u[d];
                (h.enumerable = h.enumerable || !1),
                  (h.configurable = !0),
                  "value" in h && (h.writable = !0),
                  Object.defineProperty(f, h.key, h);
              }
            }
            return function (f, u, d) {
              return u && o(f.prototype, u), d && o(f, d), f;
            };
          })(),
          c = (function () {
            function o(f) {
              var u = this;
              if (
                (n(this, o),
                (this.config = o.mergeSettings(f)),
                (this.selector =
                  typeof this.config.selector == "string"
                    ? document.querySelector(this.config.selector)
                    : this.config.selector),
                this.selector === null)
              )
                throw new Error("Something wrong with your selector 😭");
              this.resolveSlidesNumber(),
                (this.selectorWidth = this.selector.offsetWidth),
                (this.innerElements = [].slice.call(this.selector.children)),
                (this.currentSlide = this.config.loop
                  ? this.config.startIndex % this.innerElements.length
                  : Math.max(
                      0,
                      Math.min(
                        this.config.startIndex,
                        this.innerElements.length - this.perPage
                      )
                    )),
                (this.transformProperty = o.webkitOrNot()),
                [
                  "resizeHandler",
                  "touchstartHandler",
                  "touchendHandler",
                  "touchmoveHandler",
                  "mousedownHandler",
                  "mouseupHandler",
                  "mouseleaveHandler",
                  "mousemoveHandler",
                  "clickHandler",
                ].forEach(function (d) {
                  u[d] = u[d].bind(u);
                }),
                this.init();
            }
            return (
              i(
                o,
                [
                  {
                    key: "attachEvents",
                    value: function () {
                      window.addEventListener("resize", this.resizeHandler),
                        this.config.draggable &&
                          ((this.pointerDown = !1),
                          (this.drag = {
                            startX: 0,
                            endX: 0,
                            startY: 0,
                            letItGo: null,
                            preventClick: !1,
                          }),
                          this.selector.addEventListener(
                            "touchstart",
                            this.touchstartHandler
                          ),
                          this.selector.addEventListener(
                            "touchend",
                            this.touchendHandler
                          ),
                          this.selector.addEventListener(
                            "touchmove",
                            this.touchmoveHandler
                          ),
                          this.selector.addEventListener(
                            "mousedown",
                            this.mousedownHandler
                          ),
                          this.selector.addEventListener(
                            "mouseup",
                            this.mouseupHandler
                          ),
                          this.selector.addEventListener(
                            "mouseleave",
                            this.mouseleaveHandler
                          ),
                          this.selector.addEventListener(
                            "mousemove",
                            this.mousemoveHandler
                          ),
                          this.selector.addEventListener(
                            "click",
                            this.clickHandler
                          ));
                    },
                  },
                  {
                    key: "detachEvents",
                    value: function () {
                      window.removeEventListener("resize", this.resizeHandler),
                        this.selector.removeEventListener(
                          "touchstart",
                          this.touchstartHandler
                        ),
                        this.selector.removeEventListener(
                          "touchend",
                          this.touchendHandler
                        ),
                        this.selector.removeEventListener(
                          "touchmove",
                          this.touchmoveHandler
                        ),
                        this.selector.removeEventListener(
                          "mousedown",
                          this.mousedownHandler
                        ),
                        this.selector.removeEventListener(
                          "mouseup",
                          this.mouseupHandler
                        ),
                        this.selector.removeEventListener(
                          "mouseleave",
                          this.mouseleaveHandler
                        ),
                        this.selector.removeEventListener(
                          "mousemove",
                          this.mousemoveHandler
                        ),
                        this.selector.removeEventListener(
                          "click",
                          this.clickHandler
                        );
                    },
                  },
                  {
                    key: "init",
                    value: function () {
                      this.attachEvents(),
                        (this.selector.style.overflow = "hidden"),
                        (this.selector.style.direction = this.config.rtl
                          ? "rtl"
                          : "ltr"),
                        this.buildSliderFrame(),
                        this.config.onInit.call(this);
                    },
                  },
                  {
                    key: "buildSliderFrame",
                    value: function () {
                      var f = this.selectorWidth / this.perPage,
                        u = this.config.loop
                          ? this.innerElements.length + 2 * this.perPage
                          : this.innerElements.length;
                      (this.sliderFrame = document.createElement("div")),
                        (this.sliderFrame.style.width = f * u + "px"),
                        this.enableTransition(),
                        this.config.draggable &&
                          (this.selector.style.cursor = "-webkit-grab");
                      var d = document.createDocumentFragment();
                      if (this.config.loop)
                        for (
                          var h = this.innerElements.length - this.perPage;
                          h < this.innerElements.length;
                          h++
                        ) {
                          var p = this.buildSliderFrameItem(
                            this.innerElements[h].cloneNode(!0)
                          );
                          d.appendChild(p);
                        }
                      for (var v = 0; v < this.innerElements.length; v++) {
                        var I = this.buildSliderFrameItem(
                          this.innerElements[v]
                        );
                        d.appendChild(I);
                      }
                      if (this.config.loop)
                        for (var $ = 0; $ < this.perPage; $++) {
                          var T = this.buildSliderFrameItem(
                            this.innerElements[$].cloneNode(!0)
                          );
                          d.appendChild(T);
                        }
                      this.sliderFrame.appendChild(d),
                        (this.selector.innerHTML = ""),
                        this.selector.appendChild(this.sliderFrame),
                        this.slideToCurrent();
                    },
                  },
                  {
                    key: "buildSliderFrameItem",
                    value: function (f) {
                      var u = document.createElement("div");
                      return (
                        (u.style.cssFloat = this.config.rtl ? "right" : "left"),
                        (u.style.float = this.config.rtl ? "right" : "left"),
                        (u.style.width =
                          (this.config.loop
                            ? 100 /
                              (this.innerElements.length + 2 * this.perPage)
                            : 100 / this.innerElements.length) + "%"),
                        u.appendChild(f),
                        u
                      );
                    },
                  },
                  {
                    key: "resolveSlidesNumber",
                    value: function () {
                      if (typeof this.config.perPage == "number")
                        this.perPage = this.config.perPage;
                      else if (a(this.config.perPage) === "object") {
                        this.perPage = 1;
                        for (var f in this.config.perPage)
                          window.innerWidth >= f &&
                            (this.perPage = this.config.perPage[f]);
                      }
                    },
                  },
                  {
                    key: "prev",
                    value: function () {
                      var f =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : 1,
                        u = arguments[1];
                      if (!(this.innerElements.length <= this.perPage)) {
                        var d = this.currentSlide;
                        if (this.config.loop)
                          if (this.currentSlide - f < 0) {
                            this.disableTransition();
                            var h =
                                this.currentSlide + this.innerElements.length,
                              p = this.perPage,
                              v = h + p,
                              I =
                                (this.config.rtl ? 1 : -1) *
                                v *
                                (this.selectorWidth / this.perPage),
                              $ = this.config.draggable
                                ? this.drag.endX - this.drag.startX
                                : 0;
                            (this.sliderFrame.style[this.transformProperty] =
                              "translate3d(" + (I + $) + "px, 0, 0)"),
                              (this.currentSlide = h - f);
                          } else this.currentSlide = this.currentSlide - f;
                        else
                          this.currentSlide = Math.max(
                            this.currentSlide - f,
                            0
                          );
                        d !== this.currentSlide &&
                          (this.slideToCurrent(this.config.loop),
                          this.config.onChange.call(this),
                          u && u.call(this));
                      }
                    },
                  },
                  {
                    key: "next",
                    value: function () {
                      var f =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : 1,
                        u = arguments[1];
                      if (!(this.innerElements.length <= this.perPage)) {
                        var d = this.currentSlide;
                        if (this.config.loop)
                          if (
                            this.currentSlide + f >
                            this.innerElements.length - this.perPage
                          ) {
                            this.disableTransition();
                            var h =
                                this.currentSlide - this.innerElements.length,
                              p = this.perPage,
                              v = h + p,
                              I =
                                (this.config.rtl ? 1 : -1) *
                                v *
                                (this.selectorWidth / this.perPage),
                              $ = this.config.draggable
                                ? this.drag.endX - this.drag.startX
                                : 0;
                            (this.sliderFrame.style[this.transformProperty] =
                              "translate3d(" + (I + $) + "px, 0, 0)"),
                              (this.currentSlide = h + f);
                          } else this.currentSlide = this.currentSlide + f;
                        else
                          this.currentSlide = Math.min(
                            this.currentSlide + f,
                            this.innerElements.length - this.perPage
                          );
                        d !== this.currentSlide &&
                          (this.slideToCurrent(this.config.loop),
                          this.config.onChange.call(this),
                          u && u.call(this));
                      }
                    },
                  },
                  {
                    key: "disableTransition",
                    value: function () {
                      (this.sliderFrame.style.webkitTransition =
                        "all 0ms " + this.config.easing),
                        (this.sliderFrame.style.transition =
                          "all 0ms " + this.config.easing);
                    },
                  },
                  {
                    key: "enableTransition",
                    value: function () {
                      (this.sliderFrame.style.webkitTransition =
                        "all " +
                        this.config.duration +
                        "ms " +
                        this.config.easing),
                        (this.sliderFrame.style.transition =
                          "all " +
                          this.config.duration +
                          "ms " +
                          this.config.easing);
                    },
                  },
                  {
                    key: "goTo",
                    value: function (f, u) {
                      if (!(this.innerElements.length <= this.perPage)) {
                        var d = this.currentSlide;
                        (this.currentSlide = this.config.loop
                          ? f % this.innerElements.length
                          : Math.min(
                              Math.max(f, 0),
                              this.innerElements.length - this.perPage
                            )),
                          d !== this.currentSlide &&
                            (this.slideToCurrent(),
                            this.config.onChange.call(this),
                            u && u.call(this));
                      }
                    },
                  },
                  {
                    key: "slideToCurrent",
                    value: function (f) {
                      var u = this,
                        d = this.config.loop
                          ? this.currentSlide + this.perPage
                          : this.currentSlide,
                        h =
                          (this.config.rtl ? 1 : -1) *
                          d *
                          (this.selectorWidth / this.perPage);
                      f
                        ? requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                              u.enableTransition(),
                                (u.sliderFrame.style[u.transformProperty] =
                                  "translate3d(" + h + "px, 0, 0)");
                            });
                          })
                        : (this.sliderFrame.style[this.transformProperty] =
                            "translate3d(" + h + "px, 0, 0)");
                    },
                  },
                  {
                    key: "updateAfterDrag",
                    value: function () {
                      var f =
                          (this.config.rtl ? -1 : 1) *
                          (this.drag.endX - this.drag.startX),
                        u = Math.abs(f),
                        d = this.config.multipleDrag
                          ? Math.ceil(u / (this.selectorWidth / this.perPage))
                          : 1,
                        h = f > 0 && this.currentSlide - d < 0,
                        p =
                          f < 0 &&
                          this.currentSlide + d >
                            this.innerElements.length - this.perPage;
                      f > 0 &&
                      u > this.config.threshold &&
                      this.innerElements.length > this.perPage
                        ? this.prev(d)
                        : f < 0 &&
                          u > this.config.threshold &&
                          this.innerElements.length > this.perPage &&
                          this.next(d),
                        this.slideToCurrent(h || p);
                    },
                  },
                  {
                    key: "resizeHandler",
                    value: function () {
                      this.resolveSlidesNumber(),
                        this.currentSlide + this.perPage >
                          this.innerElements.length &&
                          (this.currentSlide =
                            this.innerElements.length <= this.perPage
                              ? 0
                              : this.innerElements.length - this.perPage),
                        (this.selectorWidth = this.selector.offsetWidth),
                        this.buildSliderFrame();
                    },
                  },
                  {
                    key: "clearDrag",
                    value: function () {
                      this.drag = {
                        startX: 0,
                        endX: 0,
                        startY: 0,
                        letItGo: null,
                        preventClick: this.drag.preventClick,
                      };
                    },
                  },
                  {
                    key: "touchstartHandler",
                    value: function (f) {
                      ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(
                        f.target.nodeName
                      ) !== -1 ||
                        (f.stopPropagation(),
                        (this.pointerDown = !0),
                        (this.drag.startX = f.touches[0].pageX),
                        (this.drag.startY = f.touches[0].pageY));
                    },
                  },
                  {
                    key: "touchendHandler",
                    value: function (f) {
                      f.stopPropagation(),
                        (this.pointerDown = !1),
                        this.enableTransition(),
                        this.drag.endX && this.updateAfterDrag(),
                        this.clearDrag();
                    },
                  },
                  {
                    key: "touchmoveHandler",
                    value: function (f) {
                      if (
                        (f.stopPropagation(),
                        this.drag.letItGo === null &&
                          (this.drag.letItGo =
                            Math.abs(this.drag.startY - f.touches[0].pageY) <
                            Math.abs(this.drag.startX - f.touches[0].pageX)),
                        this.pointerDown && this.drag.letItGo)
                      ) {
                        f.preventDefault(),
                          (this.drag.endX = f.touches[0].pageX),
                          (this.sliderFrame.style.webkitTransition =
                            "all 0ms " + this.config.easing),
                          (this.sliderFrame.style.transition =
                            "all 0ms " + this.config.easing);
                        var u = this.config.loop
                            ? this.currentSlide + this.perPage
                            : this.currentSlide,
                          d = u * (this.selectorWidth / this.perPage),
                          h = this.drag.endX - this.drag.startX,
                          p = this.config.rtl ? d + h : d - h;
                        this.sliderFrame.style[this.transformProperty] =
                          "translate3d(" +
                          (this.config.rtl ? 1 : -1) * p +
                          "px, 0, 0)";
                      }
                    },
                  },
                  {
                    key: "mousedownHandler",
                    value: function (f) {
                      ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(
                        f.target.nodeName
                      ) !== -1 ||
                        (f.preventDefault(),
                        f.stopPropagation(),
                        (this.pointerDown = !0),
                        (this.drag.startX = f.pageX));
                    },
                  },
                  {
                    key: "mouseupHandler",
                    value: function (f) {
                      f.stopPropagation(),
                        (this.pointerDown = !1),
                        (this.selector.style.cursor = "-webkit-grab"),
                        this.enableTransition(),
                        this.drag.endX && this.updateAfterDrag(),
                        this.clearDrag();
                    },
                  },
                  {
                    key: "mousemoveHandler",
                    value: function (f) {
                      if ((f.preventDefault(), this.pointerDown)) {
                        f.target.nodeName === "A" &&
                          (this.drag.preventClick = !0),
                          (this.drag.endX = f.pageX),
                          (this.selector.style.cursor = "-webkit-grabbing"),
                          (this.sliderFrame.style.webkitTransition =
                            "all 0ms " + this.config.easing),
                          (this.sliderFrame.style.transition =
                            "all 0ms " + this.config.easing);
                        var u = this.config.loop
                            ? this.currentSlide + this.perPage
                            : this.currentSlide,
                          d = u * (this.selectorWidth / this.perPage),
                          h = this.drag.endX - this.drag.startX,
                          p = this.config.rtl ? d + h : d - h;
                        this.sliderFrame.style[this.transformProperty] =
                          "translate3d(" +
                          (this.config.rtl ? 1 : -1) * p +
                          "px, 0, 0)";
                      }
                    },
                  },
                  {
                    key: "mouseleaveHandler",
                    value: function (f) {
                      this.pointerDown &&
                        ((this.pointerDown = !1),
                        (this.selector.style.cursor = "-webkit-grab"),
                        (this.drag.endX = f.pageX),
                        (this.drag.preventClick = !1),
                        this.enableTransition(),
                        this.updateAfterDrag(),
                        this.clearDrag());
                    },
                  },
                  {
                    key: "clickHandler",
                    value: function (f) {
                      this.drag.preventClick && f.preventDefault(),
                        (this.drag.preventClick = !1);
                    },
                  },
                  {
                    key: "remove",
                    value: function (f, u) {
                      if (f < 0 || f >= this.innerElements.length)
                        throw new Error("Item to remove doesn't exist 😭");
                      var d = f < this.currentSlide,
                        h = this.currentSlide + this.perPage - 1 === f;
                      (d || h) && this.currentSlide--,
                        this.innerElements.splice(f, 1),
                        this.buildSliderFrame(),
                        u && u.call(this);
                    },
                  },
                  {
                    key: "insert",
                    value: function (f, u, d) {
                      if (u < 0 || u > this.innerElements.length + 1)
                        throw new Error("Unable to inset it at this index 😭");
                      if (this.innerElements.indexOf(f) !== -1)
                        throw new Error(
                          "The same item in a carousel? Really? Nope 😭"
                        );
                      var h =
                        u <= this.currentSlide > 0 && this.innerElements.length;
                      (this.currentSlide = h
                        ? this.currentSlide + 1
                        : this.currentSlide),
                        this.innerElements.splice(u, 0, f),
                        this.buildSliderFrame(),
                        d && d.call(this);
                    },
                  },
                  {
                    key: "prepend",
                    value: function (f, u) {
                      this.insert(f, 0), u && u.call(this);
                    },
                  },
                  {
                    key: "append",
                    value: function (f, u) {
                      this.insert(f, this.innerElements.length + 1),
                        u && u.call(this);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      var f =
                          arguments.length > 0 &&
                          arguments[0] !== void 0 &&
                          arguments[0],
                        u = arguments[1];
                      if (
                        (this.detachEvents(),
                        (this.selector.style.cursor = "auto"),
                        f)
                      ) {
                        for (
                          var d = document.createDocumentFragment(), h = 0;
                          h < this.innerElements.length;
                          h++
                        )
                          d.appendChild(this.innerElements[h]);
                        (this.selector.innerHTML = ""),
                          this.selector.appendChild(d),
                          this.selector.removeAttribute("style");
                      }
                      u && u.call(this);
                    },
                  },
                ],
                [
                  {
                    key: "mergeSettings",
                    value: function (f) {
                      var u = {
                          selector: ".siema",
                          duration: 200,
                          easing: "ease-out",
                          perPage: 1,
                          startIndex: 0,
                          draggable: !0,
                          multipleDrag: !0,
                          threshold: 20,
                          loop: !1,
                          rtl: !1,
                          onInit: function () {},
                          onChange: function () {},
                        },
                        d = f;
                      for (var h in d) u[h] = d[h];
                      return u;
                    },
                  },
                  {
                    key: "webkitOrNot",
                    value: function () {
                      return typeof document.documentElement.style.transform ==
                        "string"
                        ? "transform"
                        : "WebkitTransform";
                    },
                  },
                ]
              ),
              o
            );
          })();
        (t.default = c), (l.exports = t.default);
      },
    ]);
  });
})(gr);
const pr = Ms(ot);
function fl(r, e, l) {
  const t = r.slice();
  return (t[35] = e[l]), (t[37] = l), t;
}
const vr = (r) => ({}),
  ul = (r) => ({}),
  br = (r) => ({}),
  dl = (r) => ({});
function hl(r) {
  let e, l, t, s, n, a, i, c;
  const o = r[28]["left-control"],
    f = Pe(o, r, r[27], dl),
    u = r[28]["right-control"],
    d = Pe(u, r, r[27], ul);
  return {
    c() {
      (e = b("button")),
        f && f.c(),
        (t = S()),
        (s = b("button")),
        d && d.c(),
        this.h();
    },
    l(h) {
      e = E(h, "BUTTON", { class: !0, "aria-label": !0 });
      var p = k(e);
      f && f.l(p),
        p.forEach(g),
        (t = D(h)),
        (s = E(h, "BUTTON", { class: !0, "aria-label": !0 }));
      var v = k(s);
      d && d.l(v), v.forEach(g), this.h();
    },
    h() {
      m(e, "class", "left svelte-f439t6"),
        m(e, "aria-label", "left"),
        m(s, "class", "right svelte-f439t6"),
        m(s, "aria-label", "right");
    },
    m(h, p) {
      y(h, e, p),
        f && f.m(e, null),
        y(h, t, p),
        y(h, s, p),
        d && d.m(s, null),
        (a = !0),
        i ||
          ((c = [
            $e(e, "click", r[4]),
            kt((l = r[12].call(null, e, r[0]))),
            $e(s, "click", r[5]),
            kt((n = r[12].call(null, s, r[0]))),
          ]),
          (i = !0));
    },
    p(h, p) {
      f &&
        f.p &&
        (!a || p[0] & 134217728) &&
        Oe(f, o, h, h[27], a ? Le(o, h[27], p, br) : Ae(h[27]), dl),
        l && Ce(l.update) && p[0] & 1 && l.update.call(null, h[0]),
        d &&
          d.p &&
          (!a || p[0] & 134217728) &&
          Oe(d, u, h, h[27], a ? Le(u, h[27], p, vr) : Ae(h[27]), ul),
        n && Ce(n.update) && p[0] & 1 && n.update.call(null, h[0]);
    },
    i(h) {
      a || (L(f, h), L(d, h), (a = !0));
    },
    o(h) {
      R(f, h), R(d, h), (a = !1);
    },
    d(h) {
      h && g(e),
        f && f.d(h),
        h && g(t),
        h && g(s),
        d && d.d(h),
        (i = !1),
        xe(c);
    },
  };
}
function ml(r) {
  let e,
    l = { length: r[11] },
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = _l(fl(r, l, s));
  return {
    c() {
      e = b("ul");
      for (let s = 0; s < t.length; s += 1) t[s].c();
      this.h();
    },
    l(s) {
      e = E(s, "UL", { class: !0 });
      var n = k(e);
      for (let a = 0; a < t.length; a += 1) t[a].l(n);
      n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "dots svelte-f439t6");
    },
    m(s, n) {
      y(s, e, n);
      for (let a = 0; a < t.length; a += 1) t[a].m(e, null);
    },
    p(s, n) {
      if (n[0] & 2504) {
        l = { length: s[11] };
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = fl(s, l, a);
          t[a] ? t[a].p(i, n) : ((t[a] = _l(i)), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      s && g(e), ue(t, s);
    },
  };
}
function _l(r) {
  let e, l, t, s;
  function n() {
    return r[30](r[37]);
  }
  return {
    c() {
      (e = b("li")), this.h();
    },
    l(a) {
      (e = E(a, "LI", { class: !0 })), k(e).forEach(g), this.h();
    },
    h() {
      m(
        e,
        "class",
        (l =
          ye(r[3](r[8], r[37]) ? "dot dot-active" : "dot") + " svelte-f439t6")
      );
    },
    m(a, i) {
      y(a, e, i), t || ((s = $e(e, "click", n)), (t = !0));
    },
    p(a, i) {
      (r = a),
        i[0] & 256 &&
          l !==
            (l =
              ye(r[3](r[8], r[37]) ? "dot dot-active" : "dot") +
              " svelte-f439t6") &&
          m(e, "class", l);
    },
    d(a) {
      a && g(e), (t = !1), s();
    },
  };
}
function Er(r) {
  let e, l, t, s, n, a;
  const i = r[28].default,
    c = Pe(i, r, r[27], null);
  let o = r[1] && hl(r),
    f = r[2] && ml(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        c && c.c(),
        (t = S()),
        o && o.c(),
        (s = S()),
        f && f.c(),
        this.h();
    },
    l(u) {
      e = E(u, "DIV", { class: !0 });
      var d = k(e);
      l = E(d, "DIV", { class: !0 });
      var h = k(l);
      c && c.l(h),
        h.forEach(g),
        (t = D(d)),
        o && o.l(d),
        (s = D(d)),
        f && f.l(d),
        d.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "slides"),
        m(e, "class", (n = ye(r[10]) + " svelte-f439t6"));
    },
    m(u, d) {
      y(u, e, d),
        _(e, l),
        c && c.m(l, null),
        r[29](l),
        _(e, t),
        o && o.m(e, null),
        _(e, s),
        f && f.m(e, null),
        (a = !0);
    },
    p(u, d) {
      c &&
        c.p &&
        (!a || d[0] & 134217728) &&
        Oe(c, i, u, u[27], a ? Le(i, u[27], d, null) : Ae(u[27]), null),
        u[1]
          ? o
            ? (o.p(u, d), d[0] & 2 && L(o, 1))
            : ((o = hl(u)), o.c(), L(o, 1), o.m(e, s))
          : o &&
            (Ie(),
            R(o, 1, 1, () => {
              o = null;
            }),
            ke()),
        u[2]
          ? f
            ? f.p(u, d)
            : ((f = ml(u)), f.c(), f.m(e, null))
          : f && (f.d(1), (f = null)),
        (!a || (d[0] & 1024 && n !== (n = ye(u[10]) + " svelte-f439t6"))) &&
          m(e, "class", n);
    },
    i(u) {
      a || (L(c, u), L(o), (a = !0));
    },
    o(u) {
      R(c, u), R(o), (a = !1);
    },
    d(u) {
      u && g(e), c && c.d(u), r[29](null), o && o.d(), f && f.d();
    },
  };
}
function $r(r, e, l) {
  let t,
    s,
    n,
    { $$slots: a = {}, $$scope: i } = e,
    { class: c = "" } = e,
    { perPage: o = 3 } = e,
    { perMove: f = 3 } = e,
    { loop: u = !0 } = e,
    { autoplay: d = 0 } = e,
    { duration: h = 200 } = e,
    { easing: p = "ease-out" } = e,
    { startIndex: v = 0 } = e,
    { draggable: I = !0 } = e,
    { multipleDrag: $ = !0 } = e,
    { controls: T = !0 } = e,
    { dots: w = !1 } = e,
    { threshold: A = 20 } = e,
    { rtl: C = !1 } = e;
  const N = ss();
  let U = v,
    M,
    G,
    B,
    K;
  Ke(
    () => (
      l(
        26,
        (G = new pr({
          selector: M,
          perPage: typeof o == "object" ? o : Number(o),
          loop: u,
          duration: h,
          easing: p,
          startIndex: v,
          draggable: I,
          multipleDrag: $,
          threshold: A,
          rtl: C,
          onChange: O,
        }))
      ),
      d && (B = setInterval(X, d)),
      () => {
        d && clearInterval(B), G.destroy();
      }
    )
  );
  function q(z, pe) {
    return z < 0 && (z = t.length + z), z >= pe * s && z < pe * s + s;
  }
  function ee() {
    G.prev(f);
  }
  function X() {
    G.next(f);
  }
  function F(z) {
    G.goTo(z);
  }
  function Y() {
    clearInterval(B);
  }
  function W() {
    d && (B = setInterval(X, d));
  }
  function O(z) {
    l(8, (U = G.currentSlide)),
      N("change", {
        currentSlide: G.currentSlide,
        slideCount: G.innerElements.length,
      });
  }
  function V(z, pe) {
    function ie(Se) {
      Y(), W();
    }
    return (
      pe && z.addEventListener("click", ie),
      {
        destroy() {
          z.removeEventListener("click", ie);
        },
      }
    );
  }
  function ae(z) {
    We[z ? "unshift" : "push"](() => {
      (M = z), l(9, M);
    });
  }
  const ne = (z) => F(z * s);
  return (
    (r.$$set = (z) => {
      "class" in z && l(13, (c = z.class)),
        "perPage" in z && l(14, (o = z.perPage)),
        "perMove" in z && l(15, (f = z.perMove)),
        "loop" in z && l(16, (u = z.loop)),
        "autoplay" in z && l(0, (d = z.autoplay)),
        "duration" in z && l(17, (h = z.duration)),
        "easing" in z && l(18, (p = z.easing)),
        "startIndex" in z && l(19, (v = z.startIndex)),
        "draggable" in z && l(20, (I = z.draggable)),
        "multipleDrag" in z && l(21, ($ = z.multipleDrag)),
        "controls" in z && l(1, (T = z.controls)),
        "dots" in z && l(2, (w = z.dots)),
        "threshold" in z && l(22, (A = z.threshold)),
        "rtl" in z && l(23, (C = z.rtl)),
        "$$scope" in z && l(27, (i = z.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty[0] & 8192 && l(10, (K = os(c, "carousel"))),
        r.$$.dirty[0] & 67108864 && (t = G ? G.innerElements : []),
        r.$$.dirty[0] & 67125248 && l(7, (s = G ? G.perPage : o)),
        r.$$.dirty[0] & 67108992 &&
          l(11, (n = G ? Math.ceil(G.innerElements.length / s) : []));
    }),
    [
      d,
      T,
      w,
      q,
      ee,
      X,
      F,
      s,
      U,
      M,
      K,
      n,
      V,
      c,
      o,
      f,
      u,
      h,
      p,
      v,
      I,
      $,
      A,
      C,
      Y,
      W,
      G,
      i,
      a,
      ae,
      ne,
    ]
  );
}
class ps extends de {
  constructor(e) {
    super(),
      he(
        this,
        e,
        $r,
        Er,
        me,
        {
          class: 13,
          perPage: 14,
          perMove: 15,
          loop: 16,
          autoplay: 0,
          duration: 17,
          easing: 18,
          startIndex: 19,
          draggable: 20,
          multipleDrag: 21,
          controls: 1,
          dots: 2,
          threshold: 22,
          rtl: 23,
          isDotActive: 3,
          left: 4,
          right: 5,
          go: 6,
          pause: 24,
          resume: 25,
        },
        null,
        [-1, -1]
      );
  }
  get isDotActive() {
    return this.$$.ctx[3];
  }
  get left() {
    return this.$$.ctx[4];
  }
  get right() {
    return this.$$.ctx[5];
  }
  get go() {
    return this.$$.ctx[6];
  }
  get pause() {
    return this.$$.ctx[24];
  }
  get resume() {
    return this.$$.ctx[25];
  }
}
function gl(r, e, l) {
  const t = r.slice();
  return (t[18] = e[l]), (t[20] = l), t;
}
function pl(r, e, l) {
  const t = r.slice();
  return (t[21] = e[l]), t;
}
function vl(r, e, l) {
  const t = r.slice();
  return (t[21] = e[l]), (t[20] = l), t;
}
function bl(r) {
  let e, l, t, s;
  const n = [kr, Ir],
    a = [];
  function i(c, o) {
    return c[1].length > 2 || Te.isMobile ? 0 : 1;
  }
  return (
    (e = i(r)),
    (l = a[e] = n[e](r)),
    {
      c() {
        l.c(), (t = Ee());
      },
      l(c) {
        l.l(c), (t = Ee());
      },
      m(c, o) {
        a[e].m(c, o), y(c, t, o), (s = !0);
      },
      p(c, o) {
        let f = e;
        (e = i(c)),
          e === f
            ? a[e].p(c, o)
            : (Ie(),
              R(a[f], 1, 1, () => {
                a[f] = null;
              }),
              ke(),
              (l = a[e]),
              l ? l.p(c, o) : ((l = a[e] = n[e](c)), l.c()),
              L(l, 1),
              l.m(t.parentNode, t));
      },
      i(c) {
        s || (L(l), (s = !0));
      },
      o(c) {
        R(l), (s = !1);
      },
      d(c) {
        a[e].d(c), c && g(t);
      },
    }
  );
}
function Ir(r) {
  let e,
    l = r[1],
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = El(pl(r, l, s));
  return {
    c() {
      e = b("div");
      for (let s = 0; s < t.length; s += 1) t[s].c();
      this.h();
    },
    l(s) {
      e = E(s, "DIV", { class: !0 });
      var n = k(e);
      for (let a = 0; a < t.length; a += 1) t[a].l(n);
      n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "df aic");
    },
    m(s, n) {
      y(s, e, n);
      for (let a = 0; a < t.length; a += 1) t[a].m(e, null);
    },
    p(s, n) {
      if (n & 2) {
        l = s[1];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = pl(s, l, a);
          t[a] ? t[a].p(i, n) : ((t[a] = El(i)), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    i: se,
    o: se,
    d(s) {
      s && g(e), ue(t, s);
    },
  };
}
function kr(r) {
  let e, l;
  return (
    (e = new ps({
      props: {
        dots: !0,
        perPage: r[7],
        perMove: 1,
        controls: !0,
        draggable: r[8] <= 640,
        $$slots: { "right-control": [Sr], "left-control": [wr], default: [Tr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      p(t, s) {
        const n = {};
        s & 128 && (n.perPage = t[7]),
          s & 256 && (n.draggable = t[8] <= 640),
          s & 33554434 && (n.$$scope = { dirty: s, ctx: t }),
          e.$set(n);
      },
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function El(r) {
  let e, l, t, s, n;
  return {
    c() {
      (e = b("div")), (l = b("img")), (n = S()), this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = k(e);
      (l = E(i, "IMG", { width: !0, src: !0, alt: !0, class: !0 })),
        (n = D(i)),
        i.forEach(g),
        this.h();
    },
    h() {
      m(l, "width", "100%"),
        re(l.src, (t = r[21].detail.webimg)) || m(l, "src", t),
        m(l, "alt", (s = r[21].detail.webBannerAlt)),
        m(l, "class", "svelte-6p0kmj"),
        m(e, "class", "card tc cp svelte-6p0kmj");
    },
    m(a, i) {
      y(a, e, i), _(e, l), _(e, n);
    },
    p(a, i) {
      i & 2 && !re(l.src, (t = a[21].detail.webimg)) && m(l, "src", t),
        i & 2 && s !== (s = a[21].detail.webBannerAlt) && m(l, "alt", s);
    },
    d(a) {
      a && g(e);
    },
  };
}
function $l(r) {
  let e, l, t, s, n, a, i;
  return {
    c() {
      (e = b("div")), (l = b("img")), (n = S()), this.h();
    },
    l(c) {
      e = E(c, "DIV", { class: !0 });
      var o = k(e);
      (l = E(o, "IMG", { width: !0, src: !0, alt: !0, class: !0 })),
        (n = D(o)),
        o.forEach(g),
        this.h();
    },
    h() {
      m(l, "width", "100%"),
        re(l.src, (t = r[21].detail.webimg)) || m(l, "src", t),
        m(l, "alt", (s = r[21].detail.webBannerAlt)),
        m(l, "class", "svelte-6p0kmj"),
        m(e, "class", "card tc cp svelte-6p0kmj");
    },
    m(c, o) {
      y(c, e, o),
        _(e, l),
        _(e, n),
        a ||
          ((i = $e(e, "click", function () {
            Ce(r[11](r[21], r[20])) &&
              r[11](r[21], r[20]).apply(this, arguments);
          })),
          (a = !0));
    },
    p(c, o) {
      (r = c),
        o & 2 && !re(l.src, (t = r[21].detail.webimg)) && m(l, "src", t),
        o & 2 && s !== (s = r[21].detail.webBannerAlt) && m(l, "alt", s);
    },
    d(c) {
      c && g(e), (a = !1), i();
    },
  };
}
function Tr(r) {
  let e,
    l = r[1],
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = $l(vl(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ee();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = Ee();
    },
    m(s, n) {
      for (let a = 0; a < t.length; a += 1) t[a].m(s, n);
      y(s, e, n);
    },
    p(s, n) {
      if (n & 2050) {
        l = s[1];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = vl(s, l, a);
          t[a]
            ? t[a].p(i, n)
            : ((t[a] = $l(i)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      ue(t, s), s && g(e);
    },
  };
}
function wr(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = j("")), this.h();
    },
    l(t) {
      e = E(t, "I", { class: !0, slot: !0 });
      var s = k(e);
      (l = H(s, "")), s.forEach(g), this.h();
    },
    h() {
      m(e, "class", "iconfont left df aic jcc f36 cp svelte-6p0kmj"),
        m(e, "slot", "left-control");
    },
    m(t, s) {
      y(t, e, s), _(e, l);
    },
    p: se,
    d(t) {
      t && g(e);
    },
  };
}
function Sr(r) {
  let e, l;
  return {
    c() {
      (e = b("i")), (l = j("")), this.h();
    },
    l(t) {
      e = E(t, "I", { class: !0, slot: !0 });
      var s = k(e);
      (l = H(s, "")), s.forEach(g), this.h();
    },
    h() {
      m(e, "class", "iconfont right df aic jcc f36 cp svelte-6p0kmj"),
        m(e, "slot", "right-control");
    },
    m(t, s) {
      y(t, e, s), _(e, l);
    },
    p: se,
    d(t) {
      t && g(e);
    },
  };
}
function Il(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o,
    f = r[10](P.ViewMore) + "",
    u,
    d,
    h = r[0],
    p = [];
  for (let v = 0; v < h.length; v += 1) p[v] = kl(gl(r, h, v));
  return {
    c() {
      (e = b("div")), (l = b("img")), (s = S()), (n = b("div")), (a = b("div"));
      for (let v = 0; v < p.length; v += 1) p[v].c();
      (c = S()), (o = b("a")), (u = j(f)), this.h();
    },
    l(v) {
      e = E(v, "DIV", { class: !0 });
      var I = k(e);
      (l = E(I, "IMG", { width: !0, height: !0, src: !0, alt: !0 })),
        (s = D(I)),
        (n = E(I, "DIV", { class: !0 }));
      var $ = k(n);
      a = E($, "DIV", { style: !0 });
      var T = k(a);
      for (let A = 0; A < p.length; A += 1) p[A].l(T);
      T.forEach(g),
        $.forEach(g),
        (c = D(I)),
        (o = E(I, "A", { href: !0, class: !0 }));
      var w = k(o);
      (u = H(w, f)), w.forEach(g), I.forEach(g), this.h();
    },
    h() {
      m(l, "width", "18"),
        m(l, "height", "18"),
        re(l.src, (t = te.NEWS)) || m(l, "src", t),
        m(l, "alt", ""),
        m(
          a,
          "style",
          (i = `transform: translateY(-${r[2] * r[6]}px);transition: ${r[5]}`)
        ),
        m(n, "class", "marquee svelte-6p0kmj"),
        m(o, "href", (d = r[9](fe.PROMOTIONS.pathname))),
        m(o, "class", "T3 svelte-6p0kmj"),
        m(e, "class", "marquee-wrap df aic svelte-6p0kmj");
    },
    m(v, I) {
      y(v, e, I), _(e, l), _(e, s), _(e, n), _(n, a);
      for (let $ = 0; $ < p.length; $ += 1) p[$].m(a, null);
      r[12](a), r[13](n), _(e, c), _(e, o), _(o, u);
    },
    p(v, I) {
      if (I & 2049) {
        h = v[0];
        let $;
        for ($ = 0; $ < h.length; $ += 1) {
          const T = gl(v, h, $);
          p[$] ? p[$].p(T, I) : ((p[$] = kl(T)), p[$].c(), p[$].m(a, null));
        }
        for (; $ < p.length; $ += 1) p[$].d(1);
        p.length = h.length;
      }
      I & 100 &&
        i !==
          (i = `transform: translateY(-${v[2] * v[6]}px);transition: ${
            v[5]
          }`) &&
        m(a, "style", i),
        I & 512 && d !== (d = v[9](fe.PROMOTIONS.pathname)) && m(o, "href", d);
    },
    d(v) {
      v && g(e), ue(p, v), r[12](null), r[13](null);
    },
  };
}
function kl(r) {
  let e,
    l,
    t = r[18].detail.description + "",
    s,
    n,
    a,
    i = Ot.formatMonthDay(r[18].releaseTime, "-") + "",
    c,
    o,
    f,
    u;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (s = j(t)),
        (n = S()),
        (a = b("div")),
        (c = j(i)),
        (o = S()),
        this.h();
    },
    l(d) {
      e = E(d, "DIV", { class: !0 });
      var h = k(e);
      l = E(h, "DIV", { class: !0 });
      var p = k(l);
      (s = H(p, t)), p.forEach(g), (n = D(h)), (a = E(h, "DIV", { class: !0 }));
      var v = k(a);
      (c = H(v, i)), v.forEach(g), (o = D(h)), h.forEach(g), this.h();
    },
    h() {
      m(l, "class", "desc f1 svelte-6p0kmj"),
        m(a, "class", "date ml12 xs:dn"),
        m(e, "class", "maq-item df aic cp svelte-6p0kmj");
    },
    m(d, h) {
      y(d, e, h),
        _(e, l),
        _(l, s),
        _(e, n),
        _(e, a),
        _(a, c),
        _(e, o),
        f ||
          ((u = $e(e, "click", function () {
            Ce(r[11](r[18], r[20])) &&
              r[11](r[18], r[20]).apply(this, arguments);
          })),
          (f = !0));
    },
    p(d, h) {
      (r = d),
        h & 1 && t !== (t = r[18].detail.description + "") && ge(s, t),
        h & 1 &&
          i !== (i = Ot.formatMonthDay(r[18].releaseTime, "-") + "") &&
          ge(c, i);
    },
    d(d) {
      d && g(e), (f = !1), u();
    },
  };
}
function Dr(r) {
  let e,
    l,
    t,
    s,
    n = r[1].length > 0 && bl(r),
    a = r[0].length > 0 && Il(r);
  return {
    c() {
      (e = b("div")), n && n.c(), (l = S()), a && a.c(), (t = Ee()), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      n && n.l(c), c.forEach(g), (l = D(i)), a && a.l(i), (t = Ee()), this.h();
    },
    h() {
      m(e, "class", "wrap svelte-6p0kmj");
    },
    m(i, c) {
      y(i, e, c),
        n && n.m(e, null),
        y(i, l, c),
        a && a.m(i, c),
        y(i, t, c),
        (s = !0);
    },
    p(i, [c]) {
      i[1].length > 0
        ? n
          ? (n.p(i, c), c & 2 && L(n, 1))
          : ((n = bl(i)), n.c(), L(n, 1), n.m(e, null))
        : n &&
          (Ie(),
          R(n, 1, 1, () => {
            n = null;
          }),
          ke()),
        i[0].length > 0
          ? a
            ? a.p(i, c)
            : ((a = Il(i)), a.c(), a.m(t.parentNode, t))
          : a && (a.d(1), (a = null));
    },
    i(i) {
      s || (L(n), (s = !0));
    },
    o(i) {
      R(n), (s = !1);
    },
    d(i) {
      i && g(e), n && n.d(), i && g(l), a && a.d(i), i && g(t);
    },
  };
}
function yr(r, e, l) {
  let t, s, n, a, i, c, o;
  oe(r, hs, (C) => l(1, (a = C))),
    oe(r, dt, (C) => l(15, (i = C))),
    oe(r, Gs, (C) => l(8, (c = C))),
    oe(r, Ve, (C) => l(9, (o = C)));
  let f = 0,
    u = null,
    d = null,
    h = null,
    p = "all 0.1s";
  const v = ve("LG");
  Ke(() => ds.next({ itemKey: "banner", lang: i, location: 1, device: Bs() }));
  function I(C) {
    u && clearInterval(u),
      C.length > 2 &&
        (u = setInterval(() => {
          const N = f >= C.length - 1;
          l(5, (p = "all 0.2s")),
            l(2, (f = N ? 0 : f + 1)),
            f >= C.length - 1 &&
              setTimeout(() => {
                l(5, (p = "all 0")), l(2, (f = 0));
              }, 1e3);
        }, 8e3));
  }
  function $(C, N) {
    return function (U) {
      U.preventDefault(), T(C, N), (location.href = C.detail.webLink);
    };
  }
  function T(C, N) {
    const U = Te.isMobile || Te.isApp;
    Fe.track("banner_click", {
      banner_index: N,
      banner_url: C.detail.webLink,
      banner_lang: C.lang,
      banner_source_page: "home",
      scene_type: C.detail.sceneType,
      banner_label: C.detail.bannerLabel,
      platform: U ? (Te.isMobile ? "H5" : "app_h5") : "Web",
    });
  }
  function w(C) {
    We[C ? "unshift" : "push"](() => {
      (h = C), l(4, h);
    });
  }
  function A(C) {
    We[C ? "unshift" : "push"](() => {
      (d = C), l(3, d);
    });
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 2 && l(0, (t = a.length > 0 ? [...a, a[0]] : [])),
        r.$$.dirty & 1 && I(t);
    }),
    l(7, (s = Te.isMobile ? 1 : 3)),
    l(6, (n = Te.isMobile ? 16 : 18)),
    [t, a, f, d, h, p, n, s, c, o, v, $, w, A]
  );
}
class Pr extends de {
  constructor(e) {
    super(), he(this, e, yr, Dr, me, {});
  }
}
function Tl(r, e, l) {
  const t = r.slice();
  return (t[1] = e[l]), t;
}
function wl(r) {
  let e, l, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(s) {
      (e = E(s, "IMG", { height: !0, src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      m(e, "height", "100%"),
        re(e.src, (l = te[r[1].img])) || m(e, "src", l),
        m(e, "alt", (t = r[1].alt)),
        m(e, "class", "svelte-1xdb082");
    },
    m(s, n) {
      y(s, e, n);
    },
    p(s, n) {
      n & 1 && !re(e.src, (l = te[s[1].img])) && m(e, "src", l),
        n & 1 && t !== (t = s[1].alt) && m(e, "alt", t);
    },
    d(s) {
      s && g(e);
    },
  };
}
function Or(r) {
  let e,
    l,
    t,
    s = r[0].title + "",
    n,
    a,
    i,
    c = r[0].desc + "",
    o,
    f,
    u,
    d,
    h,
    p = r[0].imgs,
    v = [];
  for (let I = 0; I < p.length; I += 1) v[I] = wl(Tl(r, p, I));
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("h3")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (o = j(c)),
        (f = S()),
        (u = b("div")),
        (d = b("div"));
      for (let I = 0; I < v.length; I += 1) v[I].c();
      this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var $ = k(e);
      l = E($, "DIV", {});
      var T = k(l);
      t = E(T, "H3", { class: !0 });
      var w = k(t);
      (n = H(w, s)), w.forEach(g), (a = D(T)), (i = E(T, "DIV", { class: !0 }));
      var A = k(i);
      (o = H(A, c)),
        A.forEach(g),
        T.forEach(g),
        (f = D($)),
        (u = E($, "DIV", { class: !0 }));
      var C = k(u);
      d = E(C, "DIV", { class: !0 });
      var N = k(d);
      for (let U = 0; U < v.length; U += 1) v[U].l(N);
      N.forEach(g), C.forEach(g), $.forEach(g), this.h();
    },
    h() {
      m(t, "class", "title f24 mb12 svelte-1xdb082"),
        m(i, "class", "desc f16 svelte-1xdb082"),
        m(d, "class", "scroller df aifs svelte-1xdb082"),
        m(u, "class", (h = ye(`brands ${r[0].class}`) + " svelte-1xdb082")),
        m(e, "class", "card df fdc jcsb p24 svelte-1xdb082");
    },
    m(I, $) {
      y(I, e, $),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, o),
        _(e, f),
        _(e, u),
        _(u, d);
      for (let T = 0; T < v.length; T += 1) v[T].m(d, null);
    },
    p(I, [$]) {
      if (
        ($ & 1 && s !== (s = I[0].title + "") && ge(n, s),
        $ & 1 && c !== (c = I[0].desc + "") && ge(o, c),
        $ & 1)
      ) {
        p = I[0].imgs;
        let T;
        for (T = 0; T < p.length; T += 1) {
          const w = Tl(I, p, T);
          v[T] ? v[T].p(w, $) : ((v[T] = wl(w)), v[T].c(), v[T].m(d, null));
        }
        for (; T < v.length; T += 1) v[T].d(1);
        v.length = p.length;
      }
      $ & 1 &&
        h !== (h = ye(`brands ${I[0].class}`) + " svelte-1xdb082") &&
        m(u, "class", h);
    },
    i: se,
    o: se,
    d(I) {
      I && g(e), ue(v, I);
    },
  };
}
function Ar(r, e, l) {
  let { item: t } = e;
  return (
    (r.$$set = (s) => {
      "item" in s && l(0, (t = s.item));
    }),
    [t]
  );
}
class Lr extends de {
  constructor(e) {
    super(), he(this, e, Ar, Or, me, { item: 0 });
  }
}
function Nr(r) {
  let e,
    l,
    t,
    s = r[0].content + "",
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d = r[0].name + "",
    h,
    p,
    v,
    I = r[0].subscribers + "",
    $,
    T,
    w = r[1](P.Subscribers) + "",
    A;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = j(s)),
        (a = S()),
        (i = b("img")),
        (o = S()),
        (f = b("div")),
        (u = b("div")),
        (h = j(d)),
        (p = S()),
        (v = b("div")),
        ($ = j(I)),
        (T = S()),
        (A = j(w)),
        this.h();
    },
    l(C) {
      e = E(C, "DIV", { class: !0 });
      var N = k(e);
      l = E(N, "DIV", { class: !0 });
      var U = k(l);
      t = E(U, "DIV", { class: !0 });
      var M = k(t);
      (n = H(M, s)),
        M.forEach(g),
        (a = D(U)),
        (i = E(U, "IMG", {
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
          class: !0,
        })),
        U.forEach(g),
        (o = D(N)),
        (f = E(N, "DIV", {}));
      var G = k(f);
      u = E(G, "DIV", { class: !0 });
      var B = k(u);
      (h = H(B, d)), B.forEach(g), (p = D(G)), (v = E(G, "DIV", {}));
      var K = k(v);
      ($ = H(K, I)),
        (T = D(K)),
        (A = H(K, w)),
        K.forEach(g),
        G.forEach(g),
        N.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "text f14 fw3 svelte-fr9879"),
        m(i, "width", "100"),
        m(i, "height", "100"),
        re(i.src, (c = te[r[0].img])) || m(i, "src", c),
        m(i, "alt", ""),
        m(i, "class", "svelte-fr9879"),
        m(l, "class", "df aifs jcsb"),
        m(u, "class", "f16 fw3"),
        m(e, "class", "card df fdc jcsb p24 svelte-fr9879");
    },
    m(C, N) {
      y(C, e, N),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(e, o),
        _(e, f),
        _(f, u),
        _(u, h),
        _(f, p),
        _(f, v),
        _(v, $),
        _(v, T),
        _(v, A);
    },
    p(C, [N]) {
      N & 1 && s !== (s = C[0].content + "") && ge(n, s),
        N & 1 && !re(i.src, (c = te[C[0].img])) && m(i, "src", c),
        N & 1 && d !== (d = C[0].name + "") && ge(h, d),
        N & 1 && I !== (I = C[0].subscribers + "") && ge($, I);
    },
    i: se,
    o: se,
    d(C) {
      C && g(e);
    },
  };
}
function Cr(r, e, l) {
  let { item: t } = e;
  const s = ve("LG");
  return (
    (r.$$set = (n) => {
      "item" in n && l(0, (t = n.item));
    }),
    [t, s]
  );
}
class Rr extends de {
  constructor(e) {
    super(), he(this, e, Cr, Nr, me, { item: 0 });
  }
}
function Vr(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function Sl(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function Dl(r, e, l) {
  const t = r.slice();
  return (t[10] = e[l]), t;
}
function Mr(r) {
  let e, l, t;
  return (
    (l = new Ge({ props: { height: "202px", borderRadius: "20px" } })),
    {
      c() {
        (e = b("div")), J(l.$$.fragment), this.h();
      },
      l(s) {
        e = E(s, "DIV", { style: !0 });
        var n = k(e);
        x(l.$$.fragment, n), n.forEach(g), this.h();
      },
      h() {
        we(e, "width", "100%"), we(e, "padding", "0 8px");
      },
      m(s, n) {
        y(s, e, n), Q(l, e, null), (t = !0);
      },
      p: se,
      i(s) {
        t || (L(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        R(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && g(e), Z(l);
      },
    }
  );
}
function Gr(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o = new Array(3).fill(0),
    f = [];
  for (let u = 0; u < o.length; u += 1) f[u] = Mr(Vr(r, o, u));
  return (
    (n = new Ge({ props: { class: "mr12", width: "18px", height: "18px" } })),
    (i = new Ge({ props: { height: "18px", width: "400px" } })),
    {
      c() {
        (e = b("div")), (l = b("div"));
        for (let u = 0; u < f.length; u += 1) f[u].c();
        (t = S()),
          (s = b("div")),
          J(n.$$.fragment),
          (a = S()),
          J(i.$$.fragment),
          this.h();
      },
      l(u) {
        e = E(u, "DIV", { slot: !0, class: !0 });
        var d = k(e);
        l = E(d, "DIV", { class: !0 });
        var h = k(l);
        for (let v = 0; v < f.length; v += 1) f[v].l(h);
        h.forEach(g), (t = D(d)), (s = E(d, "DIV", { class: !0 }));
        var p = k(s);
        x(n.$$.fragment, p),
          (a = D(p)),
          x(i.$$.fragment, p),
          p.forEach(g),
          d.forEach(g),
          this.h();
      },
      h() {
        m(l, "class", "df jcsb"),
          m(s, "class", "df aic mt40"),
          m(e, "slot", "init"),
          m(e, "class", "wrap svelte-1jj5lk4");
      },
      m(u, d) {
        y(u, e, d), _(e, l);
        for (let h = 0; h < f.length; h += 1) f[h].m(l, null);
        _(e, t), _(e, s), Q(n, s, null), _(s, a), Q(i, s, null), (c = !0);
      },
      p: se,
      i(u) {
        if (!c) {
          for (let d = 0; d < o.length; d += 1) L(f[d]);
          L(n.$$.fragment, u), L(i.$$.fragment, u), (c = !0);
        }
      },
      o(u) {
        f = f.filter(Boolean);
        for (let d = 0; d < f.length; d += 1) R(f[d]);
        R(n.$$.fragment, u), R(i.$$.fragment, u), (c = !1);
      },
      d(u) {
        u && g(e), ue(f, u), Z(n), Z(i);
      },
    }
  );
}
function Br(r) {
  let e, l;
  return (
    (e = new Pr({})),
    {
      c() {
        J(e.$$.fragment);
      },
      l(t) {
        x(e.$$.fragment, t);
      },
      m(t, s) {
        Q(e, t, s), (l = !0);
      },
      i(t) {
        l || (L(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        R(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function yl(r) {
  let e, l, t;
  var s = r[7].component;
  function n(a) {
    return { props: { item: a[10] } };
  }
  return (
    s && (e = Tt(s, n(r))),
    {
      c() {
        e && J(e.$$.fragment), (l = Ee());
      },
      l(a) {
        e && x(e.$$.fragment, a), (l = Ee());
      },
      m(a, i) {
        e && Q(e, a, i), y(a, l, i), (t = !0);
      },
      p(a, i) {
        const c = {};
        if ((i & 1 && (c.item = a[10]), s !== (s = a[7].component))) {
          if (e) {
            Ie();
            const o = e;
            R(o.$$.fragment, 1, 0, () => {
              Z(o, 1);
            }),
              ke();
          }
          s
            ? ((e = Tt(s, n(a))),
              J(e.$$.fragment),
              L(e.$$.fragment, 1),
              Q(e, l.parentNode, l))
            : (e = null);
        } else s && e.$set(c);
      },
      i(a) {
        t || (e && L(e.$$.fragment, a), (t = !0));
      },
      o(a) {
        e && R(e.$$.fragment, a), (t = !1);
      },
      d(a) {
        a && g(l), e && Z(e, a);
      },
    }
  );
}
function Pl(r) {
  let e,
    l,
    t,
    s = r[7].label + "",
    n,
    a,
    i,
    c,
    o,
    f = r[7].cards,
    u = [];
  for (let h = 0; h < f.length; h += 1) u[h] = yl(Dl(r, f, h));
  const d = (h) =>
    R(u[h], 1, 1, () => {
      u[h] = null;
    });
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("h2")),
        (n = j(s)),
        (a = S()),
        (i = b("div"));
      for (let h = 0; h < u.length; h += 1) u[h].c();
      (c = S()), this.h();
    },
    l(h) {
      e = E(h, "DIV", { class: !0 });
      var p = k(e);
      l = E(p, "DIV", { class: !0 });
      var v = k(l);
      t = E(v, "H2", { class: !0 });
      var I = k(t);
      (n = H(I, s)), I.forEach(g), (a = D(v)), (i = E(v, "DIV", { class: !0 }));
      var $ = k(i);
      for (let T = 0; T < u.length; T += 1) u[T].l($);
      $.forEach(g), v.forEach(g), (c = D(p)), p.forEach(g), this.h();
    },
    h() {
      m(t, "class", "caption f32 svelte-1jj5lk4"),
        m(i, "class", "cards df svelte-1jj5lk4"),
        m(l, "class", "tl"),
        m(e, "class", "card f1 tc");
    },
    m(h, p) {
      y(h, e, p), _(e, l), _(l, t), _(t, n), _(l, a), _(l, i);
      for (let v = 0; v < u.length; v += 1) u[v].m(i, null);
      _(e, c), (o = !0);
    },
    p(h, p) {
      if (((!o || p & 1) && s !== (s = h[7].label + "") && ge(n, s), p & 1)) {
        f = h[7].cards;
        let v;
        for (v = 0; v < f.length; v += 1) {
          const I = Dl(h, f, v);
          u[v]
            ? (u[v].p(I, p), L(u[v], 1))
            : ((u[v] = yl(I)), u[v].c(), L(u[v], 1), u[v].m(i, null));
        }
        for (Ie(), v = f.length; v < u.length; v += 1) d(v);
        ke();
      }
    },
    i(h) {
      if (!o) {
        for (let p = 0; p < f.length; p += 1) L(u[p]);
        o = !0;
      }
    },
    o(h) {
      u = u.filter(Boolean);
      for (let p = 0; p < u.length; p += 1) R(u[p]);
      o = !1;
    },
    d(h) {
      h && g(e), ue(u, h);
    },
  };
}
function jr(r) {
  let e,
    l,
    t = r[0],
    s = [];
  for (let a = 0; a < t.length; a += 1) s[a] = Pl(Sl(r, t, a));
  const n = (a) =>
    R(s[a], 1, 1, () => {
      s[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < s.length; a += 1) s[a].c();
      e = Ee();
    },
    l(a) {
      for (let i = 0; i < s.length; i += 1) s[i].l(a);
      e = Ee();
    },
    m(a, i) {
      for (let c = 0; c < s.length; c += 1) s[c].m(a, i);
      y(a, e, i), (l = !0);
    },
    p(a, i) {
      if (i & 1) {
        t = a[0];
        let c;
        for (c = 0; c < t.length; c += 1) {
          const o = Sl(a, t, c);
          s[c]
            ? (s[c].p(o, i), L(s[c], 1))
            : ((s[c] = Pl(o)), s[c].c(), L(s[c], 1), s[c].m(e.parentNode, e));
        }
        for (Ie(), c = t.length; c < s.length; c += 1) n(c);
        ke();
      }
    },
    i(a) {
      if (!l) {
        for (let i = 0; i < t.length; i += 1) L(s[i]);
        l = !0;
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let i = 0; i < s.length; i += 1) R(s[i]);
      l = !1;
    },
    d(a) {
      ue(s, a), a && g(e);
    },
  };
}
function Hr(r) {
  let e, l, t;
  return (
    (l = new ps({
      props: {
        autoplay: 1e4,
        perPage: 1,
        perMove: 1,
        dots: !0,
        controls: !0,
        $$slots: { default: [jr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")), J(l.$$.fragment), this.h();
      },
      l(s) {
        e = E(s, "DIV", { class: !0, slot: !0 });
        var n = k(e);
        x(l.$$.fragment, n), n.forEach(g), this.h();
      },
      h() {
        m(e, "class", "wrap recommend svelte-1jj5lk4"), m(e, "slot", "logout");
      },
      m(s, n) {
        y(s, e, n), Q(l, e, null), (t = !0);
      },
      p(s, n) {
        const a = {};
        n & 32769 && (a.$$scope = { dirty: n, ctx: s }), l.$set(a);
      },
      i(s) {
        t || (L(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        R(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && g(e), Z(l);
      },
    }
  );
}
function Ur(r) {
  let e, l, t;
  return (
    (l = new _t({
      props: {
        height: "300px",
        mheight: "160px",
        $$slots: { logout: [Hr], login: [Br], init: [Gr] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("section")), J(l.$$.fragment), this.h();
      },
      l(s) {
        e = E(s, "SECTION", { class: !0 });
        var n = k(e);
        x(l.$$.fragment, n), n.forEach(g), this.h();
      },
      h() {
        m(e, "class", "outer ovh svelte-1jj5lk4");
      },
      m(s, n) {
        y(s, e, n), Q(l, e, null), (t = !0);
      },
      p(s, [n]) {
        const a = {};
        n & 32769 && (a.$$scope = { dirty: n, ctx: s }), l.$set(a);
      },
      i(s) {
        t || (L(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        R(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && g(e), Z(l);
      },
    }
  );
}
function Fr(r, e, l) {
  let t, s;
  oe(r, dt, (f) => l(1, (s = f)));
  const n = ve("LG"),
    a = [
      n(P.YouGonnaHearAndSee),
      n(P.ItsBeenPleasureSupport),
      n(P.ItsBeenPleasureWorkWith),
    ],
    i = {
      en: [
        { img: "USE_EN1", name: "Cantering Clark", subscribers: "154k" },
        { img: "USE_EN2", name: "Rager", subscribers: "204k" },
        { img: "USE_EN3", name: "Cold Blooded Shiller", subscribers: "189.7K" },
      ],
      es: [
        { img: "USE_ES1", name: "Tech Con Catalina", subscribers: "191K" },
        { img: "USE_ES2", name: "Monitor BTC", subscribers: "81K" },
        { img: "USE_ES3", name: "@cryptokakarot1", subscribers: "28K" },
      ],
      tr: [
        { img: "USE_TR1", name: "Coin Muhendisi", subscribers: "232.7k" },
        { img: "USE_TR2", name: "Tuna Kaya ", subscribers: "286K" },
        { img: "USE_TR3", name: "Karasu", subscribers: "103k" },
      ],
      vi: [
        {
          img: "USE_VI1",
          name: "FOMOnista Trading Community",
          subscribers: "100k",
        },
        { img: "USE_VI2", name: "Sói Crypto", subscribers: "42,2k" },
        { img: "USE_VI3", name: "F.A Capital", subscribers: "12k" },
      ],
    };
  function c(f) {
    const u = o(f);
    return [
      {
        label: n(P.WhoTrust),
        cards: [
          {
            title: n(P.Media),
            desc: n(P.Recognize),
            class: "first",
            imgs: [
              { img: "Forbes", alt: "forbes" },
              { img: "IBT", alt: "IBT" },
              { img: "NYP", alt: "new york post" },
              { img: "Forbes", alt: "forbes" },
              { img: "IBT", alt: "IBT" },
              { img: "NYP", alt: "new york post" },
            ],
          },
          {
            title: n(P.License),
            desc: n(P.Certified),
            imgs: [
              { img: "MSB", alt: "MSB" },
              { img: "FC", alt: "fintrac canafe" },
            ],
          },
          {
            title: n(P.Academic),
            desc: n(P.Partnered),
            imgs: [{ img: "PSL", alt: "dauphine university" }],
          },
        ],
        component: Lr,
      },
      {
        label: n(P.WhoUsePhemex),
        cards: u.map((d, h) => Object.assign({ content: a[h] }, d)),
        component: Rr,
      },
    ];
  }
  function o(f) {
    return i[f] || i.en;
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 2 && l(0, (t = c(s)));
    }),
    [t, s]
  );
}
class Wr extends de {
  constructor(e) {
    super(), he(this, e, Fr, Ur, me, {});
  }
}
function Ol(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function Al(r) {
  let e,
    l,
    t,
    s,
    n,
    a = r[2].label + "",
    i,
    c,
    o,
    f;
  return {
    c() {
      (e = b("button")),
        (l = b("img")),
        (s = S()),
        (n = b("div")),
        (i = j(a)),
        (c = S()),
        this.h();
    },
    l(u) {
      e = E(u, "BUTTON", { class: !0 });
      var d = k(e);
      (l = E(d, "IMG", { class: !0, src: !0, alt: !0 })),
        (s = D(d)),
        (n = E(d, "DIV", { class: !0 }));
      var h = k(n);
      (i = H(h, a)), h.forEach(g), (c = D(d)), d.forEach(g), this.h();
    },
    h() {
      m(l, "class", "br8 ovh svelte-dgodyd"),
        re(l.src, (t = r[2].img)) || m(l, "src", t),
        m(l, "alt", ""),
        m(n, "class", "dn xs:db"),
        m(e, "class", "download-btn svelte-dgodyd");
    },
    m(u, d) {
      y(u, e, d),
        _(e, l),
        _(e, s),
        _(e, n),
        _(n, i),
        _(e, c),
        o ||
          ((f = $e(e, "click", function () {
            Ce(Ll(r[2].url)) && Ll(r[2].url).apply(this, arguments);
          })),
          (o = !0));
    },
    p(u, d) {
      (r = u),
        d & 1 && !re(l.src, (t = r[2].img)) && m(l, "src", t),
        d & 1 && a !== (a = r[2].label + "") && ge(i, a);
    },
    d(u) {
      u && g(e), (o = !1), f();
    },
  };
}
function Kr(r) {
  let e,
    l,
    t,
    s = r[1](P.TradeCrypto) + "",
    n,
    a,
    i,
    c = r[1](P.TradeCryptocurrenciesWith) + "",
    o,
    f,
    u,
    d,
    h,
    p = r[1](P.PhemexProvidesBoth) + "",
    v,
    I,
    $,
    T,
    w,
    A,
    C,
    N,
    U,
    M = r[1](P.ScanToDownloadIOSAndroid) + "",
    G,
    B,
    K,
    q,
    ee,
    X,
    F = r[0],
    Y = [];
  for (let W = 0; W < F.length; W += 1) Y[W] = Al(Ol(r, F, W));
  return {
    c() {
      (e = b("section")),
        (l = b("div")),
        (t = b("h2")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (o = j(c)),
        (f = S()),
        (u = b("div")),
        (d = b("div")),
        (h = b("div")),
        (v = j(p)),
        (I = S()),
        ($ = b("div")),
        (T = b("div")),
        (w = b("img")),
        (C = S()),
        (N = b("div")),
        (U = b("div")),
        (G = j(M)),
        (B = S()),
        (K = b("div"));
      for (let W = 0; W < Y.length; W += 1) Y[W].c();
      (q = S()), (ee = b("img")), this.h();
    },
    l(W) {
      e = E(W, "SECTION", { class: !0 });
      var O = k(e);
      l = E(O, "DIV", { class: !0 });
      var V = k(l);
      t = E(V, "H2", { class: !0 });
      var ae = k(t);
      (n = H(ae, s)),
        ae.forEach(g),
        (a = D(V)),
        (i = E(V, "DIV", { class: !0 }));
      var ne = k(i);
      (o = H(ne, c)),
        ne.forEach(g),
        (f = D(V)),
        (u = E(V, "DIV", { class: !0 }));
      var z = k(u);
      d = E(z, "DIV", { class: !0 });
      var pe = k(d);
      h = E(pe, "DIV", { class: !0 });
      var ie = k(h);
      (v = H(ie, p)),
        ie.forEach(g),
        (I = D(pe)),
        ($ = E(pe, "DIV", { class: !0 }));
      var Se = k($);
      T = E(Se, "DIV", { class: !0 });
      var le = k(T);
      (w = E(le, "IMG", {
        width: !0,
        height: !0,
        src: !0,
        alt: !0,
        class: !0,
      })),
        (C = D(le)),
        (N = E(le, "DIV", { class: !0 }));
      var ce = k(N);
      U = E(ce, "DIV", {});
      var De = k(U);
      (G = H(De, M)),
        De.forEach(g),
        ce.forEach(g),
        le.forEach(g),
        (B = D(Se)),
        (K = E(Se, "DIV", { class: !0 }));
      var Me = k(K);
      for (let Ne = 0; Ne < Y.length; Ne += 1) Y[Ne].l(Me);
      Me.forEach(g),
        Se.forEach(g),
        pe.forEach(g),
        (q = D(z)),
        (ee = E(z, "IMG", { class: !0, src: !0, alt: !0 })),
        z.forEach(g),
        V.forEach(g),
        O.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "caption svelte-dgodyd"),
        m(i, "class", "sub-title mb12 fw2 svelte-dgodyd"),
        m(h, "class", "desc mb24 T3 xs:dn svelte-dgodyd"),
        m(w, "width", "116"),
        m(w, "height", "116"),
        re(w.src, (A = te.DOWNLOAD_QRCODE)) || m(w, "src", A),
        m(w, "alt", "QR code to download the app"),
        m(w, "class", "svelte-dgodyd"),
        m(N, "class", "ml16 fw2"),
        m(T, "class", "qrcode df aife svelte-dgodyd"),
        m(K, "class", "btns-wrap df aic mt24 svelte-dgodyd"),
        m($, "class", "download-wrap svelte-dgodyd"),
        m(d, "class", "left svelte-dgodyd"),
        m(ee, "class", "simulate svelte-dgodyd"),
        re(ee.src, (X = te.SIMULATE)) || m(ee, "src", X),
        m(ee, "alt", "crypto trading platform"),
        m(u, "class", "content df aife jcsb svelte-dgodyd"),
        m(l, "class", "wrap svelte-dgodyd"),
        m(e, "class", "outer svelte-dgodyd");
    },
    m(W, O) {
      y(W, e, O),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, o),
        _(l, f),
        _(l, u),
        _(u, d),
        _(d, h),
        _(h, v),
        _(d, I),
        _(d, $),
        _($, T),
        _(T, w),
        _(T, C),
        _(T, N),
        _(N, U),
        _(U, G),
        _($, B),
        _($, K);
      for (let V = 0; V < Y.length; V += 1) Y[V].m(K, null);
      _(u, q), _(u, ee);
    },
    p(W, [O]) {
      if (O & 1) {
        F = W[0];
        let V;
        for (V = 0; V < F.length; V += 1) {
          const ae = Ol(W, F, V);
          Y[V] ? Y[V].p(ae, O) : ((Y[V] = Al(ae)), Y[V].c(), Y[V].m(K, null));
        }
        for (; V < Y.length; V += 1) Y[V].d(1);
        Y.length = F.length;
      }
    },
    i: se,
    o: se,
    d(W) {
      W && g(e), ue(Y, W);
    },
  };
}
function Ll(r) {
  return function () {
    window.open(r, "_blank", "noopener");
  };
}
function zr(r, e, l) {
  let t;
  const s = ve("LG");
  return (
    l(
      0,
      (t = [
        {
          url: Xs(),
          label: s(P.AppStore),
          img: Te.isMobile ? te.H5_APPLE : te.APPLE,
        },
        {
          url: Js(),
          label: s(P.GooglePlay),
          img: Te.isMobile ? te.H5_GOOGLE_PLAY : te.GOOGLE_PLAY,
        },
      ])
    ),
    [t, s]
  );
}
class qr extends de {
  constructor(e) {
    super(), he(this, e, zr, Kr, me, {});
  }
}
function Yr(r) {
  let e, l;
  const t = r[5].default,
    s = Pe(t, r, r[4], null);
  let n = [{ class: r[0] }, r[1]],
    a = {};
  for (let i = 0; i < n.length; i += 1) a = je(a, n[i]);
  return {
    c() {
      (e = b("div")), s && s.c(), this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      s && s.l(c), c.forEach(g), this.h();
    },
    h() {
      wt(e, a);
    },
    m(i, c) {
      y(i, e, c), s && s.m(e, null), (l = !0);
    },
    p(i, [c]) {
      s &&
        s.p &&
        (!l || c & 16) &&
        Oe(s, t, i, i[4], l ? Le(t, i[4], c, null) : Ae(i[4]), null),
        wt(e, (a = Ze(n, [(!l || c & 1) && { class: i[0] }, c & 2 && i[1]])));
    },
    i(i) {
      l || (L(s, i), (l = !0));
    },
    o(i) {
      R(s, i), (l = !1);
    },
    d(i) {
      i && g(e), s && s.d(i);
    },
  };
}
function Xr(r, e, l) {
  const t = ["class", "gutter", "accordion"];
  let s = St(e, t),
    { $$slots: n = {}, $$scope: a } = e;
  const i = ss();
  let { class: c = "" } = e,
    { gutter: o = 20 } = e,
    { accordion: f = !1 } = e;
  const u = js([]);
  function d(h) {
    const p = ks(u);
    if (p.includes(h)) {
      const I = f ? [] : p.filter(($) => $ !== h);
      u.set(I), i("change", I);
      return;
    }
    const v = f ? [h] : [...p, h];
    u.set(v), i("change", v);
  }
  return (
    Is("panelContent", {
      gutter: o,
      accordion: f,
      activePanelIds: u,
      setActivePanel: (h) => d(h),
    }),
    (r.$$set = (h) => {
      (e = je(je({}, e), at(h))),
        l(1, (s = St(e, t))),
        "class" in h && l(0, (c = h.class)),
        "gutter" in h && l(2, (o = h.gutter)),
        "accordion" in h && l(3, (f = h.accordion)),
        "$$scope" in h && l(4, (a = h.$$scope));
    }),
    [c, s, o, f, a, n]
  );
}
class Jr extends de {
  constructor(e) {
    super(), he(this, e, Xr, Yr, me, { class: 0, gutter: 2, accordion: 3 });
  }
}
const Qr = (r) => ({}),
  Nl = (r) => ({});
function Zr(r) {
  let e, l;
  return {
    c() {
      (e = b("h3")), (l = j(r[0])), this.h();
    },
    l(t) {
      e = E(t, "H3", { class: !0 });
      var s = k(e);
      (l = H(s, r[0])), s.forEach(g), this.h();
    },
    h() {
      m(e, "class", "panel-title svelte-16px5qc");
    },
    m(t, s) {
      y(t, e, s), _(e, l);
    },
    p(t, s) {
      s & 1 && ge(l, t[0]);
    },
    d(t) {
      t && g(e);
    },
  };
}
function Cl(r) {
  let e, l, t;
  const s = r[10].default,
    n = Pe(s, r, r[9], null);
  return {
    c() {
      (e = b("div")), n && n.c(), this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = k(e);
      n && n.l(i), i.forEach(g), this.h();
    },
    h() {
      m(e, "class", "panel-content svelte-16px5qc");
    },
    m(a, i) {
      y(a, e, i), n && n.m(e, null), (t = !0);
    },
    p(a, i) {
      n &&
        n.p &&
        (!t || i & 512) &&
        Oe(n, s, a, a[9], t ? Le(s, a[9], i, null) : Ae(a[9]), null);
    },
    i(a) {
      t ||
        (L(n, a),
        Ts(() => {
          l || (l = Dt(e, At, { duration: 250 }, !0)), l.run(1);
        }),
        (t = !0));
    },
    o(a) {
      R(n, a), l || (l = Dt(e, At, { duration: 250 }, !1)), l.run(0), (t = !1);
    },
    d(a) {
      a && g(e), n && n.d(a), a && l && l.end();
    },
  };
}
function xr(r) {
  let e, l, t, s, n, a, i, c, o, f, u;
  const d = r[10]["panel-title"],
    h = Pe(d, r, r[9], Nl),
    p = h || Zr(r);
  let v = r[2] && Cl(r);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        p && p.c(),
        (t = S()),
        (s = b("i")),
        (n = j("")),
        (i = S()),
        v && v.c(),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0, style: !0 });
      var $ = k(e);
      l = E($, "DIV", { class: !0 });
      var T = k(l);
      p && p.l(T), (t = D(T)), (s = E(T, "I", { id: !0, class: !0 }));
      var w = k(s);
      (n = H(w, "")),
        w.forEach(g),
        T.forEach(g),
        (i = D($)),
        v && v.l($),
        $.forEach(g),
        this.h();
    },
    h() {
      m(s, "id", "icon"),
        m(
          s,
          "class",
          (a = ye(r[2] ? "animation iconfont" : "iconfont") + " svelte-16px5qc")
        ),
        m(l, "class", "panel-title-wrap svelte-16px5qc"),
        m(e, "class", (c = ye(r[3]) + " svelte-16px5qc")),
        m(e, "style", `margin-bottom: ${r[4]}px`);
    },
    m(I, $) {
      y(I, e, $),
        _(e, l),
        p && p.m(l, null),
        _(l, t),
        _(l, s),
        _(s, n),
        _(e, i),
        v && v.m(e, null),
        (o = !0),
        f || ((u = $e(l, "click", r[11])), (f = !0));
    },
    p(I, [$]) {
      h
        ? h.p &&
          (!o || $ & 512) &&
          Oe(h, d, I, I[9], o ? Le(d, I[9], $, Qr) : Ae(I[9]), Nl)
        : p && p.p && (!o || $ & 1) && p.p(I, o ? $ : -1),
        (!o ||
          ($ & 4 &&
            a !==
              (a =
                ye(I[2] ? "animation iconfont" : "iconfont") +
                " svelte-16px5qc"))) &&
          m(s, "class", a),
        I[2]
          ? v
            ? (v.p(I, $), $ & 4 && L(v, 1))
            : ((v = Cl(I)), v.c(), L(v, 1), v.m(e, null))
          : v &&
            (Ie(),
            R(v, 1, 1, () => {
              v = null;
            }),
            ke()),
        (!o || ($ & 8 && c !== (c = ye(I[3]) + " svelte-16px5qc"))) &&
          m(e, "class", c);
    },
    i(I) {
      o || (L(p, I), L(v), (o = !0));
    },
    o(I) {
      R(p, I), R(v), (o = !1);
    },
    d(I) {
      I && g(e), p && p.d(I), v && v.d(), (f = !1), u();
    },
  };
}
function ea(r, e, l) {
  let t,
    { $$slots: s = {}, $$scope: n } = e,
    { class: a = "" } = e,
    { title: i = void 0 } = e,
    { panelId: c = void 0 } = e;
  const {
    gutter: o,
    activePanelIds: f,
    setActivePanel: u,
  } = ve("panelContent");
  oe(r, f, ($) => l(8, (t = $)));
  let d, h;
  function p($) {
    $.length ? l(2, (d = $.includes(c))) : l(2, (d = !1));
  }
  function v($) {
    u($);
  }
  const I = () => v(c);
  return (
    (r.$$set = ($) => {
      "class" in $ && l(7, (a = $.class)),
        "title" in $ && l(0, (i = $.title)),
        "panelId" in $ && l(1, (c = $.panelId)),
        "$$scope" in $ && l(9, (n = $.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 128 && l(3, (h = os(a, "panel-wrap"))),
        r.$$.dirty & 256 && p(t);
    }),
    [i, c, d, h, o, f, v, a, t, n, s, I]
  );
}
class nt extends de {
  constructor(e) {
    super(), he(this, e, ea, xr, me, { class: 7, title: 0, panelId: 1 });
  }
}
function Rl(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function Vl(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function Ml(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function Gl(r) {
  let e,
    l,
    t,
    s = r[2].desc + "",
    n,
    a;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = j(s)),
        (a = S()),
        this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      l = E(c, "DIV", { class: !0 });
      var o = k(l);
      t = E(o, "DIV", {});
      var f = k(t);
      (n = H(f, s)),
        f.forEach(g),
        o.forEach(g),
        (a = D(c)),
        c.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "f1"),
        m(e, "class", "brand-content df pv16 svelte-1sbsm3m");
    },
    m(i, c) {
      y(i, e, c), _(e, l), _(l, t), _(t, n), _(e, a);
    },
    p: se,
    d(i) {
      i && g(e);
    },
  };
}
function ta(r) {
  let e,
    l = r[1].safe,
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = Gl(Ml(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ee();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = Ee();
    },
    m(s, n) {
      for (let a = 0; a < t.length; a += 1) t[a].m(s, n);
      y(s, e, n);
    },
    p(s, n) {
      if (n & 2) {
        l = s[1].safe;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = Ml(s, l, a);
          t[a]
            ? t[a].p(i, n)
            : ((t[a] = Gl(i)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      ue(t, s), s && g(e);
    },
  };
}
function la(r) {
  let e,
    l = r[0](P.Trustworthy) + "",
    t;
  return {
    c() {
      (e = b("h3")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "H3", { slot: !0, class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "slot", "panel-title"), m(e, "class", "brand-title svelte-1sbsm3m");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function Bl(r) {
  let e,
    l,
    t,
    s = r[2].desc + "",
    n,
    a;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = j(s)),
        (a = S()),
        this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      l = E(c, "DIV", { class: !0 });
      var o = k(l);
      t = E(o, "DIV", {});
      var f = k(t);
      (n = H(f, s)),
        f.forEach(g),
        o.forEach(g),
        (a = D(c)),
        c.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "f1"),
        m(e, "class", "brand-content df pv16 svelte-1sbsm3m");
    },
    m(i, c) {
      y(i, e, c), _(e, l), _(l, t), _(t, n), _(e, a);
    },
    p: se,
    d(i) {
      i && g(e);
    },
  };
}
function sa(r) {
  let e,
    l = r[1].super,
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = Bl(Vl(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ee();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = Ee();
    },
    m(s, n) {
      for (let a = 0; a < t.length; a += 1) t[a].m(s, n);
      y(s, e, n);
    },
    p(s, n) {
      if (n & 2) {
        l = s[1].super;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = Vl(s, l, a);
          t[a]
            ? t[a].p(i, n)
            : ((t[a] = Bl(i)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      ue(t, s), s && g(e);
    },
  };
}
function na(r) {
  let e,
    l = r[0](P.Transparency) + "",
    t;
  return {
    c() {
      (e = b("h3")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "H3", { slot: !0, class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "slot", "panel-title"), m(e, "class", "brand-title svelte-1sbsm3m");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function jl(r) {
  let e,
    l,
    t,
    s = r[2].desc + "",
    n,
    a;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (n = j(s)),
        (a = S()),
        this.h();
    },
    l(i) {
      e = E(i, "DIV", { class: !0 });
      var c = k(e);
      l = E(c, "DIV", { class: !0 });
      var o = k(l);
      t = E(o, "DIV", {});
      var f = k(t);
      (n = H(f, s)),
        f.forEach(g),
        o.forEach(g),
        (a = D(c)),
        c.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "f1"),
        m(e, "class", "brand-content df pv16 svelte-1sbsm3m");
    },
    m(i, c) {
      y(i, e, c), _(e, l), _(l, t), _(t, n), _(e, a);
    },
    p: se,
    d(i) {
      i && g(e);
    },
  };
}
function ra(r) {
  let e,
    l = r[1].simple,
    t = [];
  for (let s = 0; s < l.length; s += 1) t[s] = jl(Rl(r, l, s));
  return {
    c() {
      for (let s = 0; s < t.length; s += 1) t[s].c();
      e = Ee();
    },
    l(s) {
      for (let n = 0; n < t.length; n += 1) t[n].l(s);
      e = Ee();
    },
    m(s, n) {
      for (let a = 0; a < t.length; a += 1) t[a].m(s, n);
      y(s, e, n);
    },
    p(s, n) {
      if (n & 2) {
        l = s[1].simple;
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = Rl(s, l, a);
          t[a]
            ? t[a].p(i, n)
            : ((t[a] = jl(i)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(s) {
      ue(t, s), s && g(e);
    },
  };
}
function aa(r) {
  let e,
    l = r[0](P.Together) + "",
    t;
  return {
    c() {
      (e = b("h3")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "H3", { slot: !0, class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "slot", "panel-title"), m(e, "class", "brand-title svelte-1sbsm3m");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function ia(r) {
  let e, l, t, s, n, a;
  return (
    (e = new nt({
      props: {
        panelId: "1",
        $$slots: { "panel-title": [la], default: [ta] },
        $$scope: { ctx: r },
      },
    })),
    (t = new nt({
      props: {
        panelId: "2",
        $$slots: { "panel-title": [na], default: [sa] },
        $$scope: { ctx: r },
      },
    })),
    (n = new nt({
      props: {
        panelId: "3",
        $$slots: { "panel-title": [aa], default: [ra] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        J(e.$$.fragment),
          (l = S()),
          J(t.$$.fragment),
          (s = S()),
          J(n.$$.fragment);
      },
      l(i) {
        x(e.$$.fragment, i),
          (l = D(i)),
          x(t.$$.fragment, i),
          (s = D(i)),
          x(n.$$.fragment, i);
      },
      m(i, c) {
        Q(e, i, c), y(i, l, c), Q(t, i, c), y(i, s, c), Q(n, i, c), (a = !0);
      },
      p(i, c) {
        const o = {};
        c & 512 && (o.$$scope = { dirty: c, ctx: i }), e.$set(o);
        const f = {};
        c & 512 && (f.$$scope = { dirty: c, ctx: i }), t.$set(f);
        const u = {};
        c & 512 && (u.$$scope = { dirty: c, ctx: i }), n.$set(u);
      },
      i(i) {
        a ||
          (L(e.$$.fragment, i),
          L(t.$$.fragment, i),
          L(n.$$.fragment, i),
          (a = !0));
      },
      o(i) {
        R(e.$$.fragment, i), R(t.$$.fragment, i), R(n.$$.fragment, i), (a = !1);
      },
      d(i) {
        Z(e, i), i && g(l), Z(t, i), i && g(s), Z(n, i);
      },
    }
  );
}
function ca(r) {
  let e,
    l,
    t,
    s = r[0](P.PhemexBrand3T) + "",
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d;
  return (
    (u = new Jr({
      props: {
        class: "f1",
        accordion: !0,
        activeIds: ["1"],
        $$slots: { default: [ia] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("section")),
          (l = b("div")),
          (t = b("h2")),
          (n = j(s)),
          (a = S()),
          (i = b("div")),
          (c = b("img")),
          (f = S()),
          J(u.$$.fragment),
          this.h();
      },
      l(h) {
        e = E(h, "SECTION", { class: !0 });
        var p = k(e);
        l = E(p, "DIV", { class: !0 });
        var v = k(l);
        t = E(v, "H2", { class: !0 });
        var I = k(t);
        (n = H(I, s)),
          I.forEach(g),
          (a = D(v)),
          (i = E(v, "DIV", { class: !0 }));
        var $ = k(i);
        (c = E($, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
          (f = D($)),
          x(u.$$.fragment, $),
          $.forEach(g),
          v.forEach(g),
          p.forEach(g),
          this.h();
      },
      h() {
        m(t, "class", "title svelte-1sbsm3m"),
          m(c, "class", "brand-logo svelte-1sbsm3m"),
          m(c, "width", "512"),
          m(c, "height", "700"),
          re(c.src, (o = te.IPHONE)) || m(c, "src", o),
          m(c, "alt", "crypto trading app"),
          m(i, "class", "df jcsb"),
          m(l, "class", "main svelte-1sbsm3m"),
          m(e, "class", "wrap TW svelte-1sbsm3m");
      },
      m(h, p) {
        y(h, e, p),
          _(e, l),
          _(l, t),
          _(t, n),
          _(l, a),
          _(l, i),
          _(i, c),
          _(i, f),
          Q(u, i, null),
          (d = !0);
      },
      p(h, [p]) {
        const v = {};
        p & 512 && (v.$$scope = { dirty: p, ctx: h }), u.$set(v);
      },
      i(h) {
        d || (L(u.$$.fragment, h), (d = !0));
      },
      o(h) {
        R(u.$$.fragment, h), (d = !1);
      },
      d(h) {
        h && g(e), Z(u);
      },
    }
  );
}
function oa(r) {
  const e = ve("LG"),
    l = {
      safe: [{ title: e(P.Trustworthy), desc: e(P.SinceOurInception) }],
      super: [{ title: e(P.Transparency), desc: e(P.FirstExchangeTo) }],
      simple: [{ title: e(P.Together), desc: e(P.AnEverGrowing) }],
    };
  return [e, l];
}
class fa extends de {
  constructor(e) {
    super(), he(this, e, oa, ca, me, {});
  }
}
function Hl(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function Ul(r) {
  let e,
    l,
    t,
    s = r[7].text + "",
    n,
    a,
    i,
    c,
    o = r[1](P.PublishOn) + "",
    f,
    u,
    d,
    h,
    p;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("blockquote")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (c = b("div")),
        (f = j(o)),
        (u = S()),
        (d = b("img")),
        (p = S()),
        this.h();
    },
    l(v) {
      e = E(v, "DIV", { class: !0, style: !0 });
      var I = k(e);
      l = E(I, "DIV", { class: !0, style: !0 });
      var $ = k(l);
      t = E($, "BLOCKQUOTE", { class: !0 });
      var T = k(t);
      (n = H(T, s)), T.forEach(g), (a = D($)), (i = E($, "DIV", {}));
      var w = k(i);
      c = E(w, "DIV", { class: !0 });
      var A = k(c);
      (f = H(A, o)),
        A.forEach(g),
        (u = D(w)),
        (d = E(w, "IMG", { src: !0, alt: !0, class: !0 })),
        w.forEach(g),
        $.forEach(g),
        (p = D(I)),
        I.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "svelte-mtj5ir"),
        m(c, "class", "mb20 T3"),
        re(d.src, (h = r[7].logo)) || m(d, "src", h),
        m(d, "alt", r[7].alt),
        m(d, "class", "svelte-mtj5ir"),
        m(l, "class", "content df fdc jcsb B3 svelte-mtj5ir"),
        m(l, "style", r[3]),
        m(e, "class", "carousel-item svelte-mtj5ir"),
        we(e, "width", r[2] + "px");
    },
    m(v, I) {
      y(v, e, I),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, c),
        _(c, f),
        _(i, u),
        _(i, d),
        _(e, p);
    },
    p: se,
    d(v) {
      v && g(e);
    },
  };
}
function ua(r) {
  let e,
    l,
    t = r[1](P.WhatThePressSays) + "",
    s,
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h,
    p,
    v,
    I = r[4],
    $ = [];
  for (let T = 0; T < I.length; T += 1) $[T] = Ul(Hl(r, I, T));
  return {
    c() {
      (e = b("section")), (l = b("h2")), (s = j(t)), (n = S()), (a = b("div"));
      for (let T = 0; T < $.length; T += 1) $[T].c();
      (i = S()),
        (c = b("div")),
        (o = b("i")),
        (f = j("")),
        (u = S()),
        (d = b("i")),
        (h = j("")),
        this.h();
    },
    l(T) {
      e = E(T, "SECTION", { class: !0 });
      var w = k(e);
      l = E(w, "H2", { class: !0 });
      var A = k(l);
      (s = H(A, t)),
        A.forEach(g),
        (n = D(w)),
        (a = E(w, "DIV", { class: !0, style: !0 }));
      var C = k(a);
      for (let G = 0; G < $.length; G += 1) $[G].l(C);
      C.forEach(g), (i = D(w)), (c = E(w, "DIV", { class: !0 }));
      var N = k(c);
      o = E(N, "I", { class: !0 });
      var U = k(o);
      (f = H(U, "")), U.forEach(g), (u = D(N)), (d = E(N, "I", { class: !0 }));
      var M = k(d);
      (h = H(M, "")), M.forEach(g), N.forEach(g), w.forEach(g), this.h();
    },
    h() {
      m(l, "class", "title svelte-mtj5ir"),
        m(a, "class", "carousel df ais pr svelte-mtj5ir"),
        we(a, "width", r[2] * r[4].length + "px"),
        we(a, "transform", "translateX(-" + r[2] * r[0] + "px)"),
        m(o, "class", "iconfont df aic jcc f36 svelte-mtj5ir"),
        _e(o, "disabled", r[0] === 0),
        m(d, "class", "iconfont df aic jcc f36 svelte-mtj5ir"),
        _e(d, "disabled", r[0] === r[4].length - 1),
        m(c, "class", "control df jcc mt40"),
        m(e, "class", "wrap ovh svelte-mtj5ir");
    },
    m(T, w) {
      y(T, e, w), _(e, l), _(l, s), _(e, n), _(e, a);
      for (let A = 0; A < $.length; A += 1) $[A].m(a, null);
      _(e, i),
        _(e, c),
        _(c, o),
        _(o, f),
        _(c, u),
        _(c, d),
        _(d, h),
        p || ((v = [$e(o, "click", r[5]), $e(d, "click", r[6])]), (p = !0));
    },
    p(T, [w]) {
      if (w & 30) {
        I = T[4];
        let A;
        for (A = 0; A < I.length; A += 1) {
          const C = Hl(T, I, A);
          $[A] ? $[A].p(C, w) : (($[A] = Ul(C)), $[A].c(), $[A].m(a, null));
        }
        for (; A < $.length; A += 1) $[A].d(1);
        $.length = I.length;
      }
      w & 1 && we(a, "transform", "translateX(-" + T[2] * T[0] + "px)"),
        w & 1 && _e(o, "disabled", T[0] === 0),
        w & 17 && _e(d, "disabled", T[0] === T[4].length - 1);
    },
    i: se,
    o: se,
    d(T) {
      T && g(e), ue($, T), (p = !1), xe(v);
    },
  };
}
function da(r, e, l) {
  const t = ve("LG"),
    s = Te.isMobile ? screen.width : 600,
    n = Te.isMobile
      ? `background: url("${te.QUOTA}") no-repeat bottom 20px right 16px/48px 40px;`
      : `background: url("${te.QUOTA}") no-repeat bottom 54px right 54px/96px 80px;`,
    a = [
      { text: t(P.BestCrypto), logo: te.PRESS_FORBES, alt: "Forbes" },
      {
        text: t(P.FastestCrypto),
        logo: te.PRESS_NEW_YORK_POST,
        alt: "New York Post",
      },
      {
        text: "“It includes everything you need for both beginners and professionals.”",
        logo: te.PRESS_BUSINESS,
        alt: "Business Insider",
      },
      {
        text: "“BitYaris maintains a simple, light, and blazing fast platform specifically designed for maximum uptime. BitYaris has been silently climbing the ranks with the goal of becoming the top derivatives exchange in the world.”",
        logo: te.PRESS_IBT,
        alt: "IBT",
      },
    ];
  let i = 0;
  function c() {
    i !== 0 && l(0, (i += -1));
  }
  function o() {
    i !== a.length - 1 && l(0, (i += 1));
  }
  return [i, t, s, n, a, c, o];
}
class ha extends de {
  constructor(e) {
    super(), he(this, e, da, ua, me, {});
  }
}
function ma(r) {
  let e,
    l,
    t,
    s = r[0](P.OurDuty) + "",
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h = r[0](P.OurDutyDesc) + "",
    p,
    v,
    I,
    $;
  return {
    c() {
      (e = b("section")),
        (l = b("div")),
        (t = b("h2")),
        (n = j(s)),
        (a = S()),
        (i = b("div")),
        (c = b("div")),
        (o = b("img")),
        (u = S()),
        (d = b("div")),
        (p = j(h)),
        (v = S()),
        (I = b("img")),
        this.h();
    },
    l(T) {
      e = E(T, "SECTION", { class: !0 });
      var w = k(e);
      l = E(w, "DIV", { class: !0 });
      var A = k(l);
      t = E(A, "H2", { class: !0 });
      var C = k(t);
      (n = H(C, s)), C.forEach(g), (a = D(A)), (i = E(A, "DIV", { class: !0 }));
      var N = k(i);
      c = E(N, "DIV", { class: !0 });
      var U = k(c);
      (o = E(U, "IMG", { class: !0, width: !0, src: !0, alt: !0 })),
        (u = D(U)),
        (d = E(U, "DIV", { class: !0 }));
      var M = k(d);
      (p = H(M, h)),
        M.forEach(g),
        U.forEach(g),
        (v = D(N)),
        (I = E(N, "IMG", { class: !0, src: !0, alt: !0 })),
        N.forEach(g),
        A.forEach(g),
        w.forEach(g),
        this.h();
    },
    h() {
      m(t, "class", "title svelte-yhzven"),
        m(o, "class", "db mb24"),
        m(o, "width", "100%"),
        re(o.src, (f = te.DAUPHINE_UNIVERSITY)) || m(o, "src", f),
        m(o, "alt", "dauphine university"),
        m(d, "class", "fw2"),
        m(c, "class", "text f1 svelte-yhzven"),
        m(I, "class", "dib svelte-yhzven"),
        re(I.src, ($ = te.UNIVERSITY)) || m(I, "src", $),
        m(I, "alt", "cryptocurrency"),
        m(i, "class", "content df ovh svelte-yhzven"),
        m(l, "class", "main svelte-yhzven"),
        m(e, "class", "wrap svelte-yhzven");
    },
    m(T, w) {
      y(T, e, w),
        _(e, l),
        _(l, t),
        _(t, n),
        _(l, a),
        _(l, i),
        _(i, c),
        _(c, o),
        _(c, u),
        _(c, d),
        _(d, p),
        _(i, v),
        _(i, I);
    },
    p: se,
    i: se,
    o: se,
    d(T) {
      T && g(e);
    },
  };
}
function _a(r) {
  return [ve("LG")];
}
class ga extends de {
  constructor(e) {
    super(), he(this, e, _a, ma, me, {});
  }
}
function Fl(r, e, l) {
  const t = r.slice();
  return (t[1] = e[l]), t;
}
function Wl(r) {
  let e, l;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(t) {
      (e = E(t, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      re(e.src, (l = te[r[1]])) || m(e, "src", l),
        m(e, "alt", r[1]),
        m(e, "class", "svelte-1lccfhe");
    },
    m(t, s) {
      y(t, e, s);
    },
    p: se,
    d(t) {
      t && g(e);
    },
  };
}
function pa(r) {
  let e,
    l,
    t = [...r[0], ...r[0]],
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = Wl(Fl(r, t, n));
  return {
    c() {
      (e = b("section")), (l = b("div"));
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = E(n, "SECTION", { class: !0 });
      var a = k(e);
      l = E(a, "DIV", { class: !0 });
      var i = k(l);
      for (let c = 0; c < s.length; c += 1) s[c].l(i);
      i.forEach(g), a.forEach(g), this.h();
    },
    h() {
      m(l, "class", "scroller df aic jcsb pa svelte-1lccfhe"),
        m(e, "class", "wrap pr over svelte-1lccfhe");
    },
    m(n, a) {
      y(n, e, a), _(e, l);
      for (let i = 0; i < s.length; i += 1) s[i].m(l, null);
    },
    p(n, [a]) {
      if (a & 1) {
        t = [...n[0], ...n[0]];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = Fl(n, t, i);
          s[i] ? s[i].p(c, a) : ((s[i] = Wl(c)), s[i].c(), s[i].m(l, null));
        }
        for (; i < s.length; i += 1) s[i].d(1);
        s.length = t.length;
      }
    },
    i: se,
    o: se,
    d(n) {
      n && g(e), ue(s, n);
    },
  };
}
function va(r) {
  return [
    [
      "TWITTER",
      "BLOOMBERG",
      "NASDAQ",
      "COIN_GECKO",
      "COIN_MARKET_CAP",
      "TRADING_VIEW",
      "SIMPLEX",
      "CHAINALYSIS",
      "JUMIO",
      "MOONPAY",
      "SOURCE",
    ],
  ];
}
class ba extends de {
  constructor(e) {
    super(), he(this, e, va, pa, me, {});
  }
}
function Ea(r) {
  let e,
    l = r[0](P.PhemexTokenActivityOperate) + "",
    t;
  return {
    c() {
      (e = b("div")), (t = j(l)), this.h();
    },
    l(s) {
      e = E(s, "DIV", { class: !0 });
      var n = k(e);
      (t = H(n, l)), n.forEach(g), this.h();
    },
    h() {
      m(e, "class", "btn-inner svelte-158n2l9");
    },
    m(s, n) {
      y(s, e, n), _(e, t);
    },
    p: se,
    d(s) {
      s && g(e);
    },
  };
}
function $a(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h = r[0](P.PhemexTokenActivityTitle) + "",
    p,
    v,
    I,
    $ =
      r[0](P.PhemexTokenActivityContent, {
        EarnReward: `<span style="color: #38d102;">${r[0](
          P.EngagingRewards
        )}</span>`,
      }) + "",
    T,
    w,
    A,
    C,
    N,
    U = r[0](P.PhemexTokenActivityOperate) + "",
    M,
    G,
    B,
    K,
    q,
    ee,
    X;
  return (
    (w = new Ue({
      props: {
        class: "xs:dn",
        type: "text",
        size: "large",
        $$slots: { default: [Ea] },
        $$scope: { ctx: r },
      },
    })),
    w.$on("click", r[1]),
    {
      c() {
        (e = b("div")),
          (l = b("div")),
          (t = b("img")),
          (n = S()),
          (a = b("img")),
          (c = S()),
          (o = b("div")),
          (f = b("div")),
          (u = b("div")),
          (d = b("span")),
          (p = j(h)),
          (v = S()),
          (I = b("div")),
          (T = S()),
          J(w.$$.fragment),
          (A = S()),
          (C = b("div")),
          (N = b("span")),
          (M = j(U)),
          (G = S()),
          (B = b("i")),
          (K = j("")),
          this.h();
      },
      l(F) {
        e = E(F, "DIV", { class: !0 });
        var Y = k(e);
        l = E(Y, "DIV", { class: !0 });
        var W = k(l);
        (t = E(W, "IMG", { alt: !0, class: !0, src: !0 })),
          (n = D(W)),
          (a = E(W, "IMG", { alt: !0, class: !0, src: !0 })),
          (c = D(W)),
          (o = E(W, "DIV", { class: !0 }));
        var O = k(o);
        f = E(O, "DIV", {});
        var V = k(f);
        u = E(V, "DIV", { class: !0 });
        var ae = k(u);
        d = E(ae, "SPAN", { class: !0 });
        var ne = k(d);
        (p = H(ne, h)),
          ne.forEach(g),
          ae.forEach(g),
          (v = D(V)),
          (I = E(V, "DIV", { class: !0 }));
        var z = k(I);
        z.forEach(g),
          (T = D(V)),
          x(w.$$.fragment, V),
          (A = D(V)),
          (C = E(V, "DIV", { class: !0 }));
        var pe = k(C);
        N = E(pe, "SPAN", {});
        var ie = k(N);
        (M = H(ie, U)),
          ie.forEach(g),
          (G = D(pe)),
          (B = E(pe, "I", { class: !0 }));
        var Se = k(B);
        (K = H(Se, "")),
          Se.forEach(g),
          pe.forEach(g),
          V.forEach(g),
          O.forEach(g),
          W.forEach(g),
          Y.forEach(g),
          this.h();
      },
      h() {
        m(t, "alt", r[0](P.PhemexTokenActivityTitle)),
          m(t, "class", "bg-img pc svelte-158n2l9"),
          re(t.src, (s = te.SOULPASS_BG)) || m(t, "src", s),
          m(a, "alt", r[0](P.PhemexTokenActivityTitle)),
          m(a, "class", "bg-img h5 svelte-158n2l9"),
          re(a.src, (i = te.SOULPASS_BG_H5)) || m(a, "src", i),
          m(d, "class", "lh20 f16 TW xs:f14 svelte-158n2l9"),
          m(u, "class", "mb10 xs:dn"),
          m(
            I,
            "class",
            "mb40 lh36 f24 fw3 cf xs:mb16 xs:lh16 xs:f14 svelte-158n2l9"
          ),
          m(B, "class", "iconfont ml8 f12"),
          m(C, "class", "dn lh14 f12 T4 xs:db svelte-158n2l9"),
          m(o, "class", "content pr svelte-158n2l9"),
          m(l, "class", "wrap pr br12 svelte-158n2l9"),
          m(e, "class", "soul-pass-entry B1 svelte-158n2l9");
      },
      m(F, Y) {
        y(F, e, Y),
          _(e, l),
          _(l, t),
          _(l, n),
          _(l, a),
          _(l, c),
          _(l, o),
          _(o, f),
          _(f, u),
          _(u, d),
          _(d, p),
          _(f, v),
          _(f, I),
          (I.innerHTML = $),
          _(f, T),
          Q(w, f, null),
          _(f, A),
          _(f, C),
          _(C, N),
          _(N, M),
          _(C, G),
          _(C, B),
          _(B, K),
          (q = !0),
          ee || ((X = $e(C, "click", r[1])), (ee = !0));
      },
      p(F, [Y]) {
        const W = {};
        Y & 8 && (W.$$scope = { dirty: Y, ctx: F }), w.$set(W);
      },
      i(F) {
        q || (L(w.$$.fragment, F), (q = !0));
      },
      o(F) {
        R(w.$$.fragment, F), (q = !1);
      },
      d(F) {
        F && g(e), Z(w), (ee = !1), X();
      },
    }
  );
}
function Ia(r, e, l) {
  let t;
  oe(r, Ve, (a) => l(2, (t = a)));
  const s = ve("LG");
  function n() {
    window.location.assign(t(fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname));
  }
  return [s, n];
}
class ka extends de {
  constructor(e) {
    super(), he(this, e, Ia, $a, me, {});
  }
}
function Ta(r) {
  let e = r[0](P.LearnAboutCrypto) + "",
    l;
  return {
    c() {
      l = j(e);
    },
    l(t) {
      l = H(t, e);
    },
    m(t, s) {
      y(t, l, s);
    },
    p: se,
    d(t) {
      t && g(l);
    },
  };
}
function wa(r) {
  let e,
    l,
    t,
    s = r[0](P.SharingCryptoKnowledge) + "",
    n,
    a,
    i,
    c = r[0](P.FreeAndComprehensive) + "",
    o,
    f,
    u,
    d;
  return (
    (u = new Ue({
      props: {
        type: "default",
        class: "fw3",
        size: "large",
        $$slots: { default: [Ta] },
        $$scope: { ctx: r },
      },
    })),
    u.$on("click", r[2]),
    {
      c() {
        (e = b("section")),
          (l = b("div")),
          (t = b("h2")),
          (n = j(s)),
          (a = S()),
          (i = b("div")),
          (o = j(c)),
          (f = S()),
          J(u.$$.fragment),
          this.h();
      },
      l(h) {
        e = E(h, "SECTION", { style: !0 });
        var p = k(e);
        l = E(p, "DIV", { class: !0 });
        var v = k(l);
        t = E(v, "H2", { class: !0 });
        var I = k(t);
        (n = H(I, s)),
          I.forEach(g),
          (a = D(v)),
          (i = E(v, "DIV", { class: !0 }));
        var $ = k(i);
        (o = H($, c)),
          $.forEach(g),
          (f = D(v)),
          x(u.$$.fragment, v),
          v.forEach(g),
          p.forEach(g),
          this.h();
      },
      h() {
        m(t, "class", "title mb12 svelte-1v0yozx"),
          m(i, "class", "subtitle mb28 svelte-1v0yozx"),
          m(l, "class", "main tc TW svelte-1v0yozx"),
          m(e, "style", r[1]);
      },
      m(h, p) {
        y(h, e, p),
          _(e, l),
          _(l, t),
          _(t, n),
          _(l, a),
          _(l, i),
          _(i, o),
          _(l, f),
          Q(u, l, null),
          (d = !0);
      },
      p(h, [p]) {
        const v = {};
        p & 16 && (v.$$scope = { dirty: p, ctx: h }), u.$set(v);
      },
      i(h) {
        d || (L(u.$$.fragment, h), (d = !0));
      },
      o(h) {
        R(u.$$.fragment, h), (d = !1);
      },
      d(h) {
        h && g(e), Z(u);
      },
    }
  );
}
function Sa(r, e, l) {
  let t;
  oe(r, Ve, (i) => l(3, (t = i)));
  const s = ve("LG"),
    n = Te.isMobile
      ? "background: var(--blue)"
      : `background: url("${te.KNOWLEDGE_BG}") no-repeat center center/auto 100% var(--blue);`;
  function a() {
    qe(t(fe.LEARN_CRYPTO.pathname));
  }
  return [s, n, a];
}
class Da extends de {
  constructor(e) {
    super(), he(this, e, Sa, wa, me, {});
  }
}
function ya(r) {
  let e;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = E(l, "IMG", { class: !0, alt: !0, "data-src": !0 })), this.h();
    },
    h() {
      m(e, "class", "qrcode lazyload"),
        m(e, "alt", "qr code"),
        m(e, "data-src", r[4]);
    },
    m(l, t) {
      y(l, e, t);
    },
    p(l, t) {
      t & 16 && m(e, "data-src", l[4]);
    },
    d(l) {
      l && g(e);
    },
  };
}
function Kl(r) {
  let e, l, t;
  return {
    c() {
      (e = b("a")), (l = b("img")), this.h();
    },
    l(s) {
      e = E(s, "A", { href: !0, target: !0, class: !0 });
      var n = k(e);
      (l = E(n, "IMG", { class: !0, src: !0 })), n.forEach(g), this.h();
    },
    h() {
      m(l, "class", "img svelte-1jbh0ar"),
        re(l.src, (t = r[1])) || m(l, "src", t),
        m(e, "href", r[0]),
        m(e, "target", "_blank"),
        m(e, "class", "app-download-btn svelte-1jbh0ar");
    },
    m(s, n) {
      y(s, e, n), _(e, l);
    },
    p(s, n) {
      n & 2 && !re(l.src, (t = s[1])) && m(l, "src", t),
        n & 1 && m(e, "href", s[0]);
    },
    d(s) {
      s && g(e);
    },
  };
}
function Pa(r) {
  let e,
    l = r[3] && Kl(r);
  return {
    c() {
      (e = b("div")), l && l.c(), this.h();
    },
    l(t) {
      e = E(t, "DIV", { slot: !0, class: !0 });
      var s = k(e);
      l && l.l(s), s.forEach(g), this.h();
    },
    h() {
      m(e, "slot", "trigger"),
        m(e, "class", "icon-con df aic cp fw1 svelte-1jbh0ar"),
        _e(e, "android", r[2] === "Android"),
        _e(e, "ios", r[2] === "IOS");
    },
    m(t, s) {
      y(t, e, s), l && l.m(e, null);
    },
    p(t, s) {
      t[3]
        ? l
          ? l.p(t, s)
          : ((l = Kl(t)), l.c(), l.m(e, null))
        : l && (l.d(1), (l = null)),
        s & 4 && _e(e, "android", t[2] === "Android"),
        s & 4 && _e(e, "ios", t[2] === "IOS");
    },
    d(t) {
      t && g(e), l && l.d();
    },
  };
}
function Oa(r) {
  let e, l, t;
  return (
    (l = new Qs({
      props: {
        placement: Aa,
        modifiers: r[7],
        noIcon: !0,
        $$slots: { trigger: [Pa], default: [ya] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = b("div")), J(l.$$.fragment), this.h();
      },
      l(s) {
        e = E(s, "DIV", { class: !0 });
        var n = k(e);
        x(l.$$.fragment, n), n.forEach(g), this.h();
      },
      h() {
        m(e, "class", "btn-wrapper svelte-1jbh0ar"),
          _e(e, "android-env", r[5]),
          _e(e, "ios-env", r[6]);
      },
      m(s, n) {
        y(s, e, n), Q(l, e, null), (t = !0);
      },
      p(s, [n]) {
        const a = {};
        n & 128 && (a.modifiers = s[7]),
          n & 2079 && (a.$$scope = { dirty: n, ctx: s }),
          l.$set(a),
          (!t || n & 32) && _e(e, "android-env", s[5]),
          (!t || n & 64) && _e(e, "ios-env", s[6]);
      },
      i(s) {
        t || (L(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        R(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && g(e), Z(l);
      },
    }
  );
}
const Aa = "top-start";
function La(r, e, l) {
  let t;
  ve("LG");
  let { url: s } = e,
    { img: n } = e,
    { type: a } = e,
    i = !1,
    c,
    o,
    f;
  Ke(() => {
    const h = new Image();
    (h.src = n),
      (h.onload = function () {
        l(3, (i = !0));
      });
    const p = Lt.subscribe(async (v) => {
      l(4, (c = await rs.toDataURL(s, { width: 280 * v, margin: 5 * v })));
    });
    return (
      d(),
      function () {
        p.unsubscribe();
      }
    );
  });
  const u = Lt.pipe(
    fs((h) => [
      { name: "offset", options: { offset: [-100 * h, 10 * h] } },
      { name: "preventOverflow", options: { padding: 40 * h } },
    ])
  );
  oe(r, u, (h) => l(7, (t = h)));
  function d() {
    const h = navigator.userAgent;
    l(5, (o = h.indexOf("Android") > -1 || h.indexOf("Linux") > -1)),
      l(6, (f = !!h.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)));
  }
  return (
    (r.$$set = (h) => {
      "url" in h && l(0, (s = h.url)),
        "img" in h && l(1, (n = h.img)),
        "type" in h && l(2, (a = h.type));
    }),
    [s, n, a, i, c, o, f, t, u]
  );
}
class Na extends de {
  constructor(e) {
    super(), he(this, e, La, Oa, me, { url: 0, img: 1, type: 2 });
  }
}
function zl(r, e, l) {
  const t = r.slice();
  return (t[16] = e[l]), (t[17] = e), (t[18] = l), t;
}
function ql(r) {
  let e,
    l,
    t = r[16].content + "",
    s,
    n = r[18],
    a,
    i,
    c,
    o,
    f,
    u;
  const d = () => r[7](l, n),
    h = () => r[7](null, n),
    p = () => r[8](e, n),
    v = () => r[8](null, n);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (s = j(t)),
        (a = S()),
        (i = b("img")),
        (o = S()),
        this.h();
    },
    l(I) {
      e = E(I, "DIV", { class: !0 });
      var $ = k(e);
      l = E($, "DIV", { class: !0 });
      var T = k(l);
      (s = H(T, t)),
        T.forEach(g),
        (a = D($)),
        (i = E($, "IMG", { class: !0, height: !0, src: !0 })),
        (o = D($)),
        $.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "content svelte-1myql6f"),
        m(i, "class", "icon svelte-1myql6f"),
        m(i, "height", "38"),
        re(i.src, (c = r[16].icon)) || m(i, "src", c),
        m(e, "class", "kol df aic svelte-1myql6f"),
        _e(e, "active", r[2] === r[18]);
    },
    m(I, $) {
      y(I, e, $),
        _(e, l),
        _(l, s),
        d(),
        _(e, a),
        _(e, i),
        _(e, o),
        p(),
        f ||
          ((u = [$e(e, "mouseover", r[5](r[18])), $e(e, "mouseout", r[6])]),
          (f = !0));
    },
    p(I, $) {
      (r = I),
        n !== r[18] && (h(), (n = r[18]), d()),
        n !== r[18] && (v(), (n = r[18]), p()),
        $ & 4 && _e(e, "active", r[2] === r[18]);
    },
    d(I) {
      I && g(e), h(), v(), (f = !1), xe(u);
    },
  };
}
function Ca(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i = r[4],
    c = [];
  for (let o = 0; o < i.length; o += 1) c[o] = ql(zl(r, i, o));
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = S()),
        (s = b("div")),
        (n = S()),
        (a = b("div"));
      for (let o = 0; o < c.length; o += 1) c[o].c();
      this.h();
    },
    l(o) {
      e = E(o, "DIV", { class: !0 });
      var f = k(e);
      (l = E(f, "DIV", { class: !0 })),
        k(l).forEach(g),
        (t = D(f)),
        (s = E(f, "DIV", { class: !0 })),
        k(s).forEach(g),
        (n = D(f)),
        (a = E(f, "DIV", { class: !0 }));
      var u = k(a);
      for (let d = 0; d < c.length; d += 1) c[d].l(u);
      u.forEach(g), f.forEach(g), this.h();
    },
    h() {
      m(l, "class", "mask svelte-1myql6f"),
        m(s, "class", "mask bottom svelte-1myql6f"),
        m(a, "class", "kols svelte-1myql6f"),
        m(e, "class", "kol-marquee svelte-1myql6f"),
        _e(e, "show", r[3]);
    },
    m(o, f) {
      y(o, e, f), _(e, l), _(e, t), _(e, s), _(e, n), _(e, a);
      for (let u = 0; u < c.length; u += 1) c[u].m(a, null);
    },
    p(o, [f]) {
      if (f & 119) {
        i = o[4];
        let u;
        for (u = 0; u < i.length; u += 1) {
          const d = zl(o, i, u);
          c[u] ? c[u].p(d, f) : ((c[u] = ql(d)), c[u].c(), c[u].m(a, null));
        }
        for (; u < c.length; u += 1) c[u].d(1);
        c.length = i.length;
      }
      f & 8 && _e(e, "show", o[3]);
    },
    i: se,
    o: se,
    d(o) {
      o && g(e), ue(c, o);
    },
  };
}
const rt = 54,
  Yl = 4;
function Ra(r, e, l) {
  const t = [],
    s = [],
    n = [],
    a = ve("LG"),
    i = [
      { icon: te.KOL_ICON_1, content: a(P.KOL_Message1) },
      { icon: te.KOL_ICON_2, content: a(P.KOL_Message2) },
      { icon: te.KOL_ICON_3, content: a(P.KOL_Message3) },
      { icon: te.KOL_ICON_4, content: a(P.KOL_Message4) },
      { icon: te.KOL_ICON_1, content: a(P.KOL_Message1) },
      { icon: te.KOL_ICON_2, content: a(P.KOL_Message2) },
      { icon: te.KOL_ICON_3, content: a(P.KOL_Message3) },
      { icon: te.KOL_ICON_4, content: a(P.KOL_Message4) },
    ];
  let c = !1,
    o = -1,
    f = [],
    u,
    d = !1;
  Ke(() => {
    t.forEach((w, A) => {
      f.push(w.offsetTop), n.push(s[A].scrollWidth);
    }),
      f.forEach((w, A) => {
        Object.assign(t[A].style, { top: w + "px", position: "absolute" });
      }),
      s.forEach((w) => {
        w.style.width = 0;
      }),
      l(3, (d = !0)),
      h();
  });
  function h() {
    (c = !1), p();
  }
  function p() {
    clearTimeout(u),
      (f = f.map((w, A) => {
        let C = w - 1;
        return C === -rt
          ? A === 0
            ? f[f.length - 1] + Yl + rt
            : f[A - 1] + Yl + rt
          : C;
      })),
      t.forEach((w, A) => {
        w.style.top = `${f[A]}px`;
      }),
      !c && (u = setTimeout(p, 20));
  }
  function v(w) {
    return function () {
      l(2, (o = w)), l(1, (s[w].style.width = n[w] + "px"), s), (c = !0);
    };
  }
  function I() {
    l(2, (o = -1)),
      h(),
      s.forEach((w) => {
        w.style.width = 0;
      });
  }
  function $(w, A) {
    We[w ? "unshift" : "push"](() => {
      (s[A] = w), l(1, s);
    });
  }
  function T(w, A) {
    We[w ? "unshift" : "push"](() => {
      (t[A] = w), l(0, t);
    });
  }
  return [t, s, o, d, i, v, I, $, T];
}
class Va extends de {
  constructor(e) {
    super(), he(this, e, Ra, Ca, me, {});
  }
}
function Xl(r, e, l) {
  const t = r.slice();
  return (t[9] = e[l]), (t[11] = l), t;
}
function Jl(r, e, l) {
  const t = r.slice();
  return (t[9] = e[l]), (t[12] = e), (t[11] = l), t;
}
function Ql(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i = r[11],
    c,
    o;
  const f = () => r[7](n, i),
    u = () => r[7](null, i);
  return {
    c() {
      (e = b("div")), (l = b("img")), (s = S()), (n = b("video")), this.h();
    },
    l(d) {
      e = E(d, "DIV", { class: !0 });
      var h = k(e);
      (l = E(h, "IMG", { class: !0, src: !0 })),
        (s = D(h)),
        (n = E(h, "VIDEO", { class: !0, src: !0 })),
        k(n).forEach(g),
        h.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "bg-img svelte-1qu9ru1"),
        re(l.src, (t = r[3][r[11]])) || m(l, "src", t),
        m(n, "class", "video svelte-1qu9ru1"),
        (n.autoplay = !0),
        (n.loop = !0),
        (n.muted = !0),
        re(n.src, (a = r[9])) || m(n, "src", a),
        _e(n, "hide", r[1] === r[11]),
        m(e, "class", "icon pr pc svelte-1qu9ru1");
    },
    m(d, h) {
      y(d, e, h),
        _(e, l),
        _(e, s),
        _(e, n),
        f(),
        c ||
          ((o = [$e(e, "mouseout", r[5]), $e(e, "mouseover", r[6](r[11]))]),
          (c = !0));
    },
    p(d, h) {
      (r = d),
        i !== r[11] && (u(), (i = r[11]), f()),
        h & 2 && _e(n, "hide", r[1] === r[11]);
    },
    d(d) {
      d && g(e), u(), (c = !1), xe(o);
    },
  };
}
function Zl(r) {
  let e, l, t, s;
  return {
    c() {
      (e = b("div")), (l = b("video")), (s = S()), this.h();
    },
    l(n) {
      e = E(n, "DIV", { class: !0 });
      var a = k(e);
      (l = E(a, "VIDEO", { class: !0, src: !0 })),
        k(l).forEach(g),
        (s = D(a)),
        a.forEach(g),
        this.h();
    },
    h() {
      m(l, "class", "video svelte-1qu9ru1"),
        (l.autoplay = !0),
        (l.loop = !0),
        (l.muted = !0),
        re(l.src, (t = r[9])) || m(l, "src", t),
        m(e, "class", "icon pr h5 m-icon svelte-1qu9ru1");
    },
    m(n, a) {
      y(n, e, a), _(e, l), _(e, s);
    },
    p: se,
    d(n) {
      n && g(e);
    },
  };
}
function Ma(r) {
  let e,
    l,
    t,
    s,
    n,
    a = r[2],
    i = [];
  for (let f = 0; f < a.length; f += 1) i[f] = Ql(Jl(r, a, f));
  let c = r[4],
    o = [];
  for (let f = 0; f < c.length; f += 1) o[f] = Zl(Xl(r, c, f));
  return {
    c() {
      e = b("div");
      for (let f = 0; f < i.length; f += 1) i[f].c();
      (l = S()), (t = b("img")), (n = S());
      for (let f = 0; f < o.length; f += 1) o[f].c();
      this.h();
    },
    l(f) {
      e = E(f, "DIV", { class: !0 });
      var u = k(e);
      for (let d = 0; d < i.length; d += 1) i[d].l(u);
      (l = D(u)), (t = E(u, "IMG", { class: !0, src: !0 })), (n = D(u));
      for (let d = 0; d < o.length; d += 1) o[d].l(u);
      u.forEach(g), this.h();
    },
    h() {
      m(t, "class", "icon-poster-sub pc svelte-1qu9ru1"),
        re(t.src, (s = te.ICON_POSTER_5_SUB)) || m(t, "src", s),
        m(e, "class", "icons df jcc svelte-1qu9ru1");
    },
    m(f, u) {
      y(f, e, u);
      for (let d = 0; d < i.length; d += 1) i[d].m(e, null);
      _(e, l), _(e, t), _(e, n);
      for (let d = 0; d < o.length; d += 1) o[d].m(e, null);
    },
    p(f, [u]) {
      if (u & 111) {
        a = f[2];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const h = Jl(f, a, d);
          i[d] ? i[d].p(h, u) : ((i[d] = Ql(h)), i[d].c(), i[d].m(e, l));
        }
        for (; d < i.length; d += 1) i[d].d(1);
        i.length = a.length;
      }
      if (u & 16) {
        c = f[4];
        let d;
        for (d = 0; d < c.length; d += 1) {
          const h = Xl(f, c, d);
          o[d] ? o[d].p(h, u) : ((o[d] = Zl(h)), o[d].c(), o[d].m(e, null));
        }
        for (; d < o.length; d += 1) o[d].d(1);
        o.length = c.length;
      }
    },
    i: se,
    o: se,
    d(f) {
      f && g(e), ue(i, f), ue(o, f);
    },
  };
}
function Ga(r, e, l) {
  ve("LG");
  const t = [
      "https://img.phemex.com/v1/80cfbcb7-e397-4c69-a1d2-eb4d8c6d493d/copy-20965095-cecb-4-ee-4-8257-3-b50-b325-cf-56.MOV",
      "https://img.phemex.com/v1/905899d6-7e49-4450-ac37-627113022594/copy-a1-cc-3024-f56-e-417-f-92-cf-f2-a33-a9-f74-c8.MOV",
      "https://img.phemex.com/v1/5a4f5513-d5d8-4fe8-bd59-123a2ee77a8e/copy-5-a2-c09-b4-1-fe-4-4-af-4-af-46-1-db-6-f5744-ba-1.MOV",
      "https://img.phemex.com/v1/ae1037ea-b04b-479a-9d69-bf89efda8131/copy-23-da-6889-d2-e7-4-ceb-8-d37-ef-4-b76-f495-ca.MOV",
      "https://img.phemex.com/v1/31635a6b-7bb0-4ef1-97c3-b38fe721ce15/copy-9-f7229-d4-738-b-480-c-8-f3-f-e77-b2-be-24497.MOV",
    ],
    s = [
      te.ICON_POSTER_1,
      te.ICON_POSTER_2,
      te.ICON_POSTER_3,
      te.ICON_POSTER_4,
      te.ICON_POSTER_5,
    ],
    n = [
      "https://img.phemex.com/v1/1685ac0c-1606-42de-9b30-2e779618ddd0/copy-08401602-a0-c8-4-fb-9-a0-ae-0-fd-30-edd-78-d9.mp4",
    ],
    a = [];
  let i = -1;
  function c() {
    l(1, (i = -1)),
      a.forEach((u) => {
        u.play();
      });
  }
  function o(u) {
    return function () {
      a[u].pause(), l(1, (i = u));
    };
  }
  function f(u, d) {
    We[u ? "unshift" : "push"](() => {
      (a[d] = u), l(0, a);
    });
  }
  return [a, i, t, s, n, c, o, f];
}
class Ba extends de {
  constructor(e) {
    super(), he(this, e, Ga, Ma, me, {});
  }
}
function xl(r, e, l) {
  const t = r.slice();
  return (t[3] = e[l]), t;
}
function es(r) {
  let e, l;
  const t = [r[3]];
  let s = {};
  for (let n = 0; n < t.length; n += 1) s = je(s, t[n]);
  return (
    (e = new Na({ props: s })),
    {
      c() {
        J(e.$$.fragment);
      },
      l(n) {
        x(e.$$.fragment, n);
      },
      m(n, a) {
        Q(e, n, a), (l = !0);
      },
      p(n, a) {
        const i = a & 4 ? Ze(t, [ft(n[3])]) : {};
        e.$set(i);
      },
      i(n) {
        l || (L(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        R(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        Z(e, n);
      },
    }
  );
}
function ja(r) {
  let e,
    l,
    t,
    s,
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h,
    p,
    v,
    I = r[1](P.JpBannerTitle) + "",
    $,
    T,
    w,
    A = r[1](P.JpBannerSubTitle) + "",
    C,
    N,
    U,
    M,
    G = r[1](Zs.LaunchPulseApp) + "",
    B,
    K,
    q,
    ee,
    X,
    F;
  t = new Ba({});
  let Y = r[2],
    W = [];
  for (let V = 0; V < Y.length; V += 1) W[V] = es(xl(r, Y, V));
  const O = (V) =>
    R(W[V], 1, 1, () => {
      W[V] = null;
    });
  return (
    (X = new Va({})),
    {
      c() {
        (e = b("section")),
          (l = b("div")),
          J(t.$$.fragment),
          (s = S()),
          (n = b("img")),
          (i = S()),
          (c = b("div")),
          (o = b("img")),
          (u = S()),
          (d = b("img")),
          (p = S()),
          (v = b("span")),
          ($ = j(I)),
          (T = S()),
          (w = b("div")),
          (C = j(A)),
          (N = S()),
          (U = b("div")),
          (M = b("a")),
          (B = j(G)),
          (q = S());
        for (let V = 0; V < W.length; V += 1) W[V].c();
        (ee = S()), J(X.$$.fragment), this.h();
      },
      l(V) {
        e = E(V, "SECTION", { class: !0 });
        var ae = k(e);
        l = E(ae, "DIV", { class: !0 });
        var ne = k(l);
        x(t.$$.fragment, ne),
          (s = D(ne)),
          (n = E(ne, "IMG", { class: !0, src: !0 })),
          (i = D(ne)),
          (c = E(ne, "DIV", { class: !0 }));
        var z = k(c);
        (o = E(z, "IMG", { class: !0, src: !0 })),
          (u = D(z)),
          (d = E(z, "IMG", { class: !0, src: !0 })),
          (p = D(z)),
          (v = E(z, "SPAN", { class: !0 }));
        var pe = k(v);
        ($ = H(pe, I)),
          pe.forEach(g),
          z.forEach(g),
          (T = D(ne)),
          (w = E(ne, "DIV", { class: !0 }));
        var ie = k(w);
        (C = H(ie, A)),
          ie.forEach(g),
          (N = D(ne)),
          (U = E(ne, "DIV", { class: !0 }));
        var Se = k(U);
        M = E(Se, "A", { class: !0, href: !0 });
        var le = k(M);
        (B = H(le, G)), le.forEach(g), (q = D(Se));
        for (let ce = 0; ce < W.length; ce += 1) W[ce].l(Se);
        Se.forEach(g),
          ne.forEach(g),
          (ee = D(ae)),
          x(X.$$.fragment, ae),
          ae.forEach(g),
          this.h();
      },
      h() {
        m(n, "class", "pulse-text svelte-1iu207r"),
          re(n.src, (a = te.PULSE)) || m(n, "src", a),
          m(o, "class", "arrow pc svelte-1iu207r"),
          re(o.src, (f = te.DOWN_GREEN_ARROW)) || m(o, "src", f),
          m(d, "class", "arrow h5 svelte-1iu207r"),
          re(d.src, (h = te.DOWN_GREEN_ARROW_H5)) || m(d, "src", h),
          m(v, "class", "text"),
          m(c, "class", "title svelte-1iu207r"),
          m(w, "class", "sub-title svelte-1iu207r"),
          m(M, "class", "launch-app svelte-1iu207r"),
          m(
            M,
            "href",
            (K = r[0](fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname))
          ),
          m(U, "class", "btn-container df jcc svelte-1iu207r"),
          m(l, "class", "container svelte-1iu207r"),
          m(e, "class", "jp-banner df fdc aic pr svelte-1iu207r");
      },
      m(V, ae) {
        y(V, e, ae),
          _(e, l),
          Q(t, l, null),
          _(l, s),
          _(l, n),
          _(l, i),
          _(l, c),
          _(c, o),
          _(c, u),
          _(c, d),
          _(c, p),
          _(c, v),
          _(v, $),
          _(l, T),
          _(l, w),
          _(w, C),
          _(l, N),
          _(l, U),
          _(U, M),
          _(M, B),
          _(U, q);
        for (let ne = 0; ne < W.length; ne += 1) W[ne].m(U, null);
        _(e, ee), Q(X, e, null), (F = !0);
      },
      p(V, [ae]) {
        if (
          ((!F ||
            (ae & 1 &&
              K !==
                (K = V[0](fe.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname)))) &&
            m(M, "href", K),
          ae & 4)
        ) {
          Y = V[2];
          let ne;
          for (ne = 0; ne < Y.length; ne += 1) {
            const z = xl(V, Y, ne);
            W[ne]
              ? (W[ne].p(z, ae), L(W[ne], 1))
              : ((W[ne] = es(z)), W[ne].c(), L(W[ne], 1), W[ne].m(U, null));
          }
          for (Ie(), ne = Y.length; ne < W.length; ne += 1) O(ne);
          ke();
        }
      },
      i(V) {
        if (!F) {
          L(t.$$.fragment, V);
          for (let ae = 0; ae < Y.length; ae += 1) L(W[ae]);
          L(X.$$.fragment, V), (F = !0);
        }
      },
      o(V) {
        R(t.$$.fragment, V), (W = W.filter(Boolean));
        for (let ae = 0; ae < W.length; ae += 1) R(W[ae]);
        R(X.$$.fragment, V), (F = !1);
      },
      d(V) {
        V && g(e), Z(t), ue(W, V), Z(X);
      },
    }
  );
}
function Ha(r, e, l) {
  let t;
  oe(r, Ve, (a) => l(0, (t = a)));
  const s = ve("LG"),
    n = [
      {
        img: te.APP_STORE_HOME,
        url: "https://apps.apple.com/app/id6444693051",
        type: "IOS",
      },
      {
        img: te.GOOGLE_PLAY_HOME,
        url: "https://play.google.com/store/apps/details?id=com.phemex.pulse",
        type: "Android",
      },
    ];
  return [t, s, n];
}
class Ua extends de {
  constructor(e) {
    super(), he(this, e, Ha, ja, me, {});
  }
}
function ts(r, e, l) {
  const t = r.slice();
  return (t[2] = e[l]), t;
}
function ls(r) {
  let e,
    l,
    t,
    s,
    n,
    a = r[2].title + "",
    i,
    c,
    o,
    f = r[2].desc + "",
    u,
    d;
  return {
    c() {
      (e = b("div")),
        (l = b("img")),
        (s = S()),
        (n = b("div")),
        (i = j(a)),
        (c = S()),
        (o = b("div")),
        (u = j(f)),
        (d = S()),
        this.h();
    },
    l(h) {
      e = E(h, "DIV", { class: !0 });
      var p = k(e);
      (l = E(p, "IMG", { height: !0, src: !0 })),
        (s = D(p)),
        (n = E(p, "DIV", { class: !0 }));
      var v = k(n);
      (i = H(v, a)), v.forEach(g), (c = D(p)), (o = E(p, "DIV", { class: !0 }));
      var I = k(o);
      (u = H(I, f)), I.forEach(g), (d = D(p)), p.forEach(g), this.h();
    },
    h() {
      m(l, "height", "28"),
        re(l.src, (t = r[2].img)) || m(l, "src", t),
        m(n, "class", "title svelte-u2o97i"),
        m(o, "class", "desc svelte-u2o97i"),
        m(e, "class", "introduction svelte-u2o97i");
    },
    m(h, p) {
      y(h, e, p),
        _(e, l),
        _(e, s),
        _(e, n),
        _(n, i),
        _(e, c),
        _(e, o),
        _(o, u),
        _(e, d);
    },
    p: se,
    d(h) {
      h && g(e);
    },
  };
}
function Fa(r) {
  let e,
    l,
    t,
    s = r[0],
    n = [];
  for (let a = 0; a < s.length; a += 1) n[a] = ls(ts(r, s, a));
  return {
    c() {
      (e = b("div")), (l = b("div")), (t = b("div"));
      for (let a = 0; a < n.length; a += 1) n[a].c();
      this.h();
    },
    l(a) {
      e = E(a, "DIV", { class: !0 });
      var i = k(e);
      l = E(i, "DIV", { class: !0 });
      var c = k(l);
      t = E(c, "DIV", { class: !0 });
      var o = k(t);
      for (let f = 0; f < n.length; f += 1) n[f].l(o);
      o.forEach(g), c.forEach(g), i.forEach(g), this.h();
    },
    h() {
      m(t, "class", "inner svelte-u2o97i"),
        m(l, "class", "introductions svelte-u2o97i"),
        m(e, "class", "introductions-wrapper svelte-u2o97i");
    },
    m(a, i) {
      y(a, e, i), _(e, l), _(l, t);
      for (let c = 0; c < n.length; c += 1) n[c].m(t, null);
    },
    p(a, [i]) {
      if (i & 1) {
        s = a[0];
        let c;
        for (c = 0; c < s.length; c += 1) {
          const o = ts(a, s, c);
          n[c] ? n[c].p(o, i) : ((n[c] = ls(o)), n[c].c(), n[c].m(t, null));
        }
        for (; c < n.length; c += 1) n[c].d(1);
        n.length = s.length;
      }
    },
    i: se,
    o: se,
    d(a) {
      a && g(e), ue(n, a);
    },
  };
}
function Wa(r) {
  const e = ve("LG");
  return [
    [
      {
        img: te.HEART,
        title: e(P.JpIntroduction1_Title),
        desc: e(P.JpIntroduction1_Desc),
      },
      {
        img: te.HAND_HEART,
        title: e(P.JpIntroduction2_Title),
        desc: e(P.JpIntroduction2_Desc),
      },
      {
        img: te.TALK,
        title: e(P.JpIntroduction3_Title),
        desc: e(P.JpIntroduction3_Desc),
      },
    ],
  ];
}
class Ka extends de {
  constructor(e) {
    super(), he(this, e, Wa, Fa, me, {});
  }
}
function za(r) {
  let e, l, t, s, n, a, i, c, o, f, u, d, h;
  return (
    (document.title = e = r[1](P.Title)),
    {
      c() {
        (l = S()),
          (t = b("meta")),
          (s = S()),
          (n = b("meta")),
          (a = S()),
          (i = b("meta")),
          (c = S()),
          (o = b("meta")),
          (f = S()),
          (u = b("meta")),
          (d = S()),
          (h = b("meta")),
          this.h();
      },
      l(p) {
        (l = D(p)),
          (t = E(p, "META", { name: !0, content: !0 })),
          (s = D(p)),
          (n = E(p, "META", { name: !0, content: !0 })),
          (a = D(p)),
          (i = E(p, "META", { name: !0, content: !0 })),
          (c = D(p)),
          (o = E(p, "META", { name: !0, content: !0 })),
          (f = D(p)),
          (u = E(p, "META", { name: !0, content: !0 })),
          (d = D(p)),
          (h = E(p, "META", { name: !0, content: !0 })),
          this.h();
      },
      h() {
        m(t, "name", "og:title"),
          m(t, "content", r[1](P.OGTitle)),
          m(n, "name", "twitter:title"),
          m(n, "content", r[1](P.OGTitle)),
          m(i, "name", "description"),
          m(i, "content", r[1](P.Description)),
          m(o, "name", "og:description"),
          m(o, "content", r[1](P.OGDescription)),
          m(u, "name", "og:image"),
          m(u, "content", Je.OG_NORMAL),
          m(h, "name", "twitter:image"),
          m(h, "content", Je.OG_NORMAL);
      },
      m(p, v) {
        y(p, l, v),
          y(p, t, v),
          y(p, s, v),
          y(p, n, v),
          y(p, a, v),
          y(p, i, v),
          y(p, c, v),
          y(p, o, v),
          y(p, f, v),
          y(p, u, v),
          y(p, d, v),
          y(p, h, v);
      },
      p(p, v) {
        v & 2 && e !== (e = p[1](P.Title)) && (document.title = e);
      },
      d(p) {
        p && g(l),
          p && g(t),
          p && g(s),
          p && g(n),
          p && g(a),
          p && g(i),
          p && g(c),
          p && g(o),
          p && g(f),
          p && g(u),
          p && g(d),
          p && g(h);
      },
    }
  );
}
function qa(r) {
  let e, l, t, s, n, a, i, c, o, f, u, d, h;
  return (
    (document.title = e = r[1](P.TitleJP)),
    {
      c() {
        (l = S()),
          (t = b("meta")),
          (s = S()),
          (n = b("meta")),
          (a = S()),
          (i = b("meta")),
          (c = S()),
          (o = b("meta")),
          (f = S()),
          (u = b("meta")),
          (d = S()),
          (h = b("meta")),
          this.h();
      },
      l(p) {
        (l = D(p)),
          (t = E(p, "META", { name: !0, content: !0 })),
          (s = D(p)),
          (n = E(p, "META", { name: !0, content: !0 })),
          (a = D(p)),
          (i = E(p, "META", { name: !0, content: !0 })),
          (c = D(p)),
          (o = E(p, "META", { name: !0, content: !0 })),
          (f = D(p)),
          (u = E(p, "META", { name: !0, content: !0 })),
          (d = D(p)),
          (h = E(p, "META", { name: !0, content: !0 })),
          this.h();
      },
      h() {
        m(t, "name", "og:title"),
          m(t, "content", r[1](P.TitleJP)),
          m(n, "name", "twitter:title"),
          m(n, "content", r[1](P.TitleJP)),
          m(i, "name", "description"),
          m(i, "content", r[1](P.DescriptionJP)),
          m(o, "name", "og:description"),
          m(o, "content", r[1](P.DescriptionJP)),
          m(u, "name", "og:image"),
          m(u, "content", Je.OG_NORMAL_JP),
          m(h, "name", "twitter:image"),
          m(h, "content", Je.OG_NORMAL_JP);
      },
      m(p, v) {
        y(p, l, v),
          y(p, t, v),
          y(p, s, v),
          y(p, n, v),
          y(p, a, v),
          y(p, i, v),
          y(p, c, v),
          y(p, o, v),
          y(p, f, v),
          y(p, u, v),
          y(p, d, v),
          y(p, h, v);
      },
      p(p, v) {
        v & 2 && e !== (e = p[1](P.TitleJP)) && (document.title = e);
      },
      d(p) {
        p && g(l),
          p && g(t),
          p && g(s),
          p && g(n),
          p && g(a),
          p && g(i),
          p && g(c),
          p && g(o),
          p && g(f),
          p && g(u),
          p && g(d),
          p && g(h);
      },
    }
  );
}
function Ya(r) {
  let e, l, t, s, n, a;
  return (
    (e = new Nn({})),
    (t = new Un({})),
    (n = new Wr({})),
    {
      c() {
        J(e.$$.fragment),
          (l = S()),
          J(t.$$.fragment),
          (s = S()),
          J(n.$$.fragment);
      },
      l(i) {
        x(e.$$.fragment, i),
          (l = D(i)),
          x(t.$$.fragment, i),
          (s = D(i)),
          x(n.$$.fragment, i);
      },
      m(i, c) {
        Q(e, i, c), y(i, l, c), Q(t, i, c), y(i, s, c), Q(n, i, c), (a = !0);
      },
      i(i) {
        a ||
          (L(e.$$.fragment, i),
          L(t.$$.fragment, i),
          L(n.$$.fragment, i),
          (a = !0));
      },
      o(i) {
        R(e.$$.fragment, i), R(t.$$.fragment, i), R(n.$$.fragment, i), (a = !1);
      },
      d(i) {
        Z(e, i), i && g(l), Z(t, i), i && g(s), Z(n, i);
      },
    }
  );
}
function Xa(r) {
  let e, l, t, s;
  return (
    (e = new Ua({})),
    (t = new Ka({})),
    {
      c() {
        J(e.$$.fragment), (l = S()), J(t.$$.fragment);
      },
      l(n) {
        x(e.$$.fragment, n), (l = D(n)), x(t.$$.fragment, n);
      },
      m(n, a) {
        Q(e, n, a), y(n, l, a), Q(t, n, a), (s = !0);
      },
      i(n) {
        s || (L(e.$$.fragment, n), L(t.$$.fragment, n), (s = !0));
      },
      o(n) {
        R(e.$$.fragment, n), R(t.$$.fragment, n), (s = !1);
      },
      d(n) {
        Z(e, n), n && g(l), Z(t, n);
      },
    }
  );
}
function Ja(r) {
  let e,
    l = (r[3][r[0]] || r[2]) + "",
    t,
    s,
    n,
    a,
    i,
    c,
    o,
    f,
    u,
    d,
    h,
    p,
    v,
    I,
    $,
    T,
    w,
    A,
    C,
    N,
    U,
    M,
    G,
    B,
    K,
    q,
    ee,
    X;
  s = new Ks({ props: { isHome: !0 } });
  const F = [Xa, Ya],
    Y = [];
  function W(O, V) {
    return Te.isJapanSite === !0 ? 0 : 1;
  }
  return (
    (a = W()),
    (i = Y[a] = F[a](r)),
    (o = new ar({})),
    (u = new ka({})),
    (h = new ur({})),
    (v = new _r({})),
    ($ = new qr({})),
    (w = new fa({})),
    (C = new ha({})),
    (U = new ba({})),
    (G = new ga({})),
    (K = new Da({})),
    (ee = new qs({})),
    {
      c() {
        (e = new Ss(!1)),
          (t = S()),
          J(s.$$.fragment),
          (n = S()),
          i.c(),
          (c = S()),
          J(o.$$.fragment),
          (f = S()),
          J(u.$$.fragment),
          (d = S()),
          J(h.$$.fragment),
          (p = S()),
          J(v.$$.fragment),
          (I = S()),
          J($.$$.fragment),
          (T = S()),
          J(w.$$.fragment),
          (A = S()),
          J(C.$$.fragment),
          (N = S()),
          J(U.$$.fragment),
          (M = S()),
          J(G.$$.fragment),
          (B = S()),
          J(K.$$.fragment),
          (q = S()),
          J(ee.$$.fragment),
          this.h();
      },
      l(O) {
        (e = Ds(O, !1)),
          (t = D(O)),
          x(s.$$.fragment, O),
          (n = D(O)),
          i.l(O),
          (c = D(O)),
          x(o.$$.fragment, O),
          (f = D(O)),
          x(u.$$.fragment, O),
          (d = D(O)),
          x(h.$$.fragment, O),
          (p = D(O)),
          x(v.$$.fragment, O),
          (I = D(O)),
          x($.$$.fragment, O),
          (T = D(O)),
          x(w.$$.fragment, O),
          (A = D(O)),
          x(C.$$.fragment, O),
          (N = D(O)),
          x(U.$$.fragment, O),
          (M = D(O)),
          x(G.$$.fragment, O),
          (B = D(O)),
          x(K.$$.fragment, O),
          (q = D(O)),
          x(ee.$$.fragment, O),
          this.h();
      },
      h() {
        e.a = t;
      },
      m(O, V) {
        e.m(l, O, V),
          y(O, t, V),
          Q(s, O, V),
          y(O, n, V),
          Y[a].m(O, V),
          y(O, c, V),
          Q(o, O, V),
          y(O, f, V),
          Q(u, O, V),
          y(O, d, V),
          Q(h, O, V),
          y(O, p, V),
          Q(v, O, V),
          y(O, I, V),
          Q($, O, V),
          y(O, T, V),
          Q(w, O, V),
          y(O, A, V),
          Q(C, O, V),
          y(O, N, V),
          Q(U, O, V),
          y(O, M, V),
          Q(G, O, V),
          y(O, B, V),
          Q(K, O, V),
          y(O, q, V),
          Q(ee, O, V),
          (X = !0);
      },
      p(O, V) {
        (!X || V & 1) && l !== (l = (O[3][O[0]] || O[2]) + "") && e.p(l);
      },
      i(O) {
        X ||
          (L(s.$$.fragment, O),
          L(i),
          L(o.$$.fragment, O),
          L(u.$$.fragment, O),
          L(h.$$.fragment, O),
          L(v.$$.fragment, O),
          L($.$$.fragment, O),
          L(w.$$.fragment, O),
          L(C.$$.fragment, O),
          L(U.$$.fragment, O),
          L(G.$$.fragment, O),
          L(K.$$.fragment, O),
          L(ee.$$.fragment, O),
          (X = !0));
      },
      o(O) {
        R(s.$$.fragment, O),
          R(i),
          R(o.$$.fragment, O),
          R(u.$$.fragment, O),
          R(h.$$.fragment, O),
          R(v.$$.fragment, O),
          R($.$$.fragment, O),
          R(w.$$.fragment, O),
          R(C.$$.fragment, O),
          R(U.$$.fragment, O),
          R(G.$$.fragment, O),
          R(K.$$.fragment, O),
          R(ee.$$.fragment, O),
          (X = !1);
      },
      d(O) {
        O && e.d(),
          O && g(t),
          Z(s, O),
          O && g(n),
          Y[a].d(O),
          O && g(c),
          Z(o, O),
          O && g(f),
          Z(u, O),
          O && g(d),
          Z(h, O),
          O && g(p),
          Z(v, O),
          O && g(I),
          Z($, O),
          O && g(T),
          Z(w, O),
          O && g(A),
          Z(C, O),
          O && g(N),
          Z(U, O),
          O && g(M),
          Z(G, O),
          O && g(B),
          Z(K, O),
          O && g(q),
          Z(ee, O);
      },
    }
  );
}
function Qa(r) {
  let e, l, t, s, n, a, i, c, o;
  function f(h, p) {
    return Te.isJapanSite ? qa : za;
  }
  let d = f()(r);
  return (
    (c = new Ws({
      props: {
        customOpenGraph: !0,
        customTwitter: !0,
        $$slots: { default: [Ja] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        d.c(),
          (e = b("meta")),
          (l = b("meta")),
          (t = b("meta")),
          (s = b("meta")),
          (n = b("meta")),
          (a = b("meta")),
          (i = S()),
          J(c.$$.fragment),
          this.h();
      },
      l(h) {
        const p = ws("svelte-46lsj5", document.head);
        d.l(p),
          (e = E(p, "META", { name: !0, content: !0 })),
          (l = E(p, "META", { name: !0, content: !0 })),
          (t = E(p, "META", { name: !0, content: !0 })),
          (s = E(p, "META", { name: !0, content: !0 })),
          (n = E(p, "META", { name: !0, content: !0 })),
          (a = E(p, "META", { name: !0, content: !0 })),
          p.forEach(g),
          (i = D(h)),
          x(c.$$.fragment, h),
          this.h();
      },
      h() {
        m(e, "name", "keywords"),
          m(e, "content", r[1](P.Keywords)),
          m(l, "name", "twitter:card"),
          m(l, "content", "summary_large_image"),
          m(t, "name", "twitter:site"),
          m(t, "content", "@BitYaris_official"),
          m(s, "name", "facebook-domain-verification"),
          m(s, "content", "lyiqrvhuqlwultn0bumowbcu3cziwr"),
          m(n, "name", "naver-site-verification"),
          m(n, "content", "f7192400993ce86b6e21a0f14eb8af81b5ce096d"),
          m(a, "name", "google-site-verification"),
          m(a, "content", "QOhl_Voo3aJ1tHzGTr4cE7PP_-Vhs3reIvDFVU08yaY");
      },
      m(h, p) {
        d.m(document.head, null),
          _(document.head, e),
          _(document.head, l),
          _(document.head, t),
          _(document.head, s),
          _(document.head, n),
          _(document.head, a),
          y(h, i, p),
          Q(c, h, p),
          (o = !0);
      },
      p(h, [p]) {
        d.p(h, p);
        const v = {};
        p & 129 && (v.$$scope = { dirty: p, ctx: h }), c.$set(v);
      },
      i(h) {
        o || (L(c.$$.fragment, h), (o = !0));
      },
      o(h) {
        R(c.$$.fragment, h), (o = !1);
      },
      d(h) {
        d.d(h), g(e), g(l), g(t), g(s), g(n), g(a), h && g(i), Z(c, h);
      },
    }
  );
}
function Za(r, e, l) {
  let t;
  oe(r, dt, (f) => l(0, (t = f)));
  const s = ve("LG"),
    n = `<script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "페멕스",
            "alternateName": "BitYaris, phemax, femex, phmex, fimex, fhemex, phamex, phemix, feemex, pfemex, phenmex, femax, pehemex, phemmex, phemwx, phemez, phemec, pheemx, pjemex, phemix, phemx, pheemex, phimex",
            "url": "https://phemex.com/ko",
            "email":"support@phemex.zendesk.com",
            "slogan":"페멕스 | BitYaris | 간편한 암호화폐 거래소 | 비트코인",
            "description":"블록체인 업계에서 TOP 10안에 드는 페멕스 거래소는 계약거래와 수수료 없는 현물거래를 제공합니다.",
            "logo": "https://static.phemex.com/pubimg/6e844d113f03a766036d6730df029389ef391801070ec278d9a3054751bb6599.png",
            "sameAs": [
              "https://www.facebook.com/BitYarisKorea/",
              "https://twitter.com/n",
              "https://blog.naver.com/p",
              "https://open.kakao.com/o",
              "https://t.me/",
              "https://phemex.com/ko"
            ],
            "foundingdate":"2019"
          }
     <\/script>`,
    a = `<script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "BitYaris",
            
            "url": "https://phemex.com/",
            "email":"support@phemex.zendesk.com",
            "slogan":"BitYaris, Trade Simple",
            "description":"BitYaris is the fastest Crypto exchange and Crypto Futures trading platform. Trade Bitcoin with Zero Fees. You can also trade perpetual contracts with 100x Leverage.",
            "logo": "https://static.phemex.com/pubimg/6e844d113f03a766036d6730df029389ef391801070ec278d9a3054751bb6599.png",
            "sameAs": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.instagram.com/",
            "https://www.youtube.com/",
            "https://www.linkedin.com",
            "https://phemex.com/"
            ],
            "foundingdate":"2019"
        }
      <\/script>`;
  return [
    t,
    s,
    a,
    {
      en: a,
      ru: `<script type="application/ld+json">
       {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "BitYaris",
          
          "url": "https://phemex.com/ru",
          "email":"support@phemex.zendesk.com",
          "slogan":"BitYaris, торговать просто",
          "description":"Самая быстрая платформа для торговли криптовалютами и фьючерсами. Спотовая торговля с нулевыми комиссиями. Торговля с кредитным плечом до 100х.",
          "logo": "https://static.phemex.com/pubimg/6e844d113f03a766036d6730df029389ef391801070ec278d9a3054751bb6599.png",
          "sameAs": [
            "https://twitter.com/BitYarisR",
            "https://t.me/BitYaris_Russian",
            "https://vk.com/phemex_official",
            "https://phemex.com/ru"
          ],
          "foundingdate":"2019"
        }
      <\/script>`,
      ko: n,
      ja: `<script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "BitYaris",
            "alternateName": "フェメックス, phemax, femex, phmex, fimex, fhemex, phamex, phemix, feemex, pfemex, phenmex, femax, pehemex, phemmex, phemwx, phemez, phemec, pheemx, pjemex, phemix, phemx, pheemex, phimex",
            "url": "https://phemex.com/ja",
            "email":"support@phemex.zendesk.com",
            "slogan":"シンプルに取引",
            "description":"最も信頼できる仮想通貨＆デリバティブ取引プラットフォーム",
            "logo": "https://static.phemex.com/pubimg/6e844d113f03a766036d6730df029389ef391801070ec278d9a3054751bb6599.png",
            "sameAs": [
              "https://twitter.com/BitYarisJP",
              "https://t.me/BitYaris_Japanese",
              "https://www.youtube.com/channel/UCxty1OmqDH3cXvbzALSxhSA",
              "https://phemex.com/ja"
            ],
            "foundingdate":"2019"
          }
      <\/script>`,
    },
  ];
}
class xa extends de {
  constructor(e) {
    super(), he(this, e, Za, Qa, me, {});
  }
}
const fi = xa;
export { fi as component };
//# sourceMappingURL=chunk-319d3837.js.map
