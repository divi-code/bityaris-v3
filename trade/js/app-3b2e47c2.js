import {
  d as ft,
  c as se,
  L as be,
  t as ie,
  h as ut,
  l as dt,
  u as mt,
  a as je,
  p as ht,
  b as pt,
  e as gt,
  s as _t,
  f as bt,
  g as wt,
  m as yt,
  i as Ke,
  j as Ct,
  k as kt,
  n as vt,
  o as ve,
  q as Et,
  r as It,
  v as Tt,
  w as St,
  x as Mt,
  y as Ee,
  _ as Ie,
  z as Lt,
  A as zt,
  B as Dt,
  C as Rt,
  D as Ut,
  E as Nt,
  F as Pt,
  G as Ht,
  H as Vt,
  I as At,
  J as Ot,
  K as Bt,
  M as Ft,
  N as jt,
  O as Kt,
  P as Gt,
  Q as Yt,
} from "/trade/js/chunk-10576bff.js";
import {
  B as le,
  A as ee,
  C as te,
  D as ae,
  E as W,
  F as M,
  G as O,
  H as L,
  I as v,
  J as B,
  K as _,
  L as d,
  M as Te,
  P as S,
  Q as E,
  T as j,
  U as q,
  V as Z,
  W as J,
  X as z,
  Y as oe,
  Z as Wt,
  _ as R,
  $ as qt,
  a0 as Ge,
  a1 as Ye,
  a2 as Y,
  a3 as Zt,
  a4 as Se,
  a5 as U,
  a6 as N,
  a7 as ge,
  a8 as F,
  a9 as we,
  aa as ye,
  ab as Me,
  ac as b,
  ad as Q,
  ae as re,
  af as X,
  ag as $,
  ah as P,
  ai as ce,
  aj as fe,
  ak as Ce,
  f as x,
  e as We,
  m as K,
  a as ue,
  s as qe,
  d as Ze,
  c as de,
  w as Jt,
  S as Qt,
  al as Le,
  am as Xt,
  an as $t,
  ao as xt,
  i as ea,
} from "/trade/js/chunk-fe777520.js";
const Je = "ADA_USER",
  ta = {
    init(t = "en", e = null, a = null) {
      if (window.adaEmbed) return;
      window.adaSettings = { language: t };
      const s = document.createElement("script");
      (s.id = "__ada"),
        (s.defer = !0),
        (s.src = "//static.ada.support/embed2.js"),
        s.setAttribute("data-handle", "phemex-gen"),
        (s.type = "text/javascript"),
        (s.onload = function () {
          e && e();
        }),
        document.head.appendChild(s);
    },
    changeUserInfo(t, e) {
      const a = aa();
      if (t.userId > 0) {
        const s = { name: t.nickName, email: t.email, tags: e };
        De(t.userId),
          window.adaEmbed.reset({
            language: t.lang,
            metaFields: s,
            resetChatHistory: a != t.userId,
          });
        return;
      }
      a && (De(""), window.adaEmbed.deleteHistory());
    },
    async openChat() {
      await ze("open");
    },
    async hideChat() {
      await ze("hide");
    },
  };
async function ze(t) {
  if (!window.adaEmbed) return;
  const { isChatOpen: e } = await window.adaEmbed.getInfo();
  ((t === "open" && !e) || (t === "hide" && e)) && window.adaEmbed.toggle();
}
function aa() {
  return localStorage.getItem(Je);
}
function De(t) {
  localStorage.setItem(Je, t);
}
const Re = { IpConfig: na },
  Ue = new le(new Map()),
  sa = {
    init(t = "en", e = null, a = null) {
      if (window.zE || !a) return;
      /*const s = document.createElement("script");
      (s.id = "ze-snippet"),
        (s.src = "//static.zdassets.com/ekr/snippet.js?key=" + a.widget),
        (s.defer = !0),
        (s.type = "text/javascript"),
        (s.onload = function () {
          oa(),
            window.zE("messenger", "hide"),
            window.zE("messenger:on", "close", function () {
              window.zE("messenger", "hide");
            }),
            e(),
            Ne(t);
        }),
        document.head.appendChild(s),
        (window.zESettings = {
          webWidget: {
            offset: {},
            chat: { connectOnPageLoad: !1, prechatForm: {} },
          },
        }),
        document.head.appendChild(s);*/
    },
    changeUserInfo(t, e) {
      if (t.userId > 0) {
        Ne(t.lang),
          window.zE("messenger:set", "conversationFields", {
            name: t.nickName,
            email: t.email,
          }),
          window.zE("messenger:set", "conversationTags", [...e, Pe()]);
        return;
      }
      window.zE("messenger:set", "conversationTags", [Pe()]);
    },
    async openChat() {
      window.zE("messenger", "show"), window.zE("messenger", "open");
    },
    async hideChat() {
      window.zE("messenger", "close");
    },
    changeExpandInfo(t, e, a) {
      Re.hasOwnProperty(t) && Re[t](e, a);
    },
  };
function na(t, e) {
  if (t != null && t.countryCode) {
    const a = Ue.getValue();
    a.set(e.countryCodeFieldId, {
      id: e.countryCodeFieldId,
      value: t.countryCode,
    }),
      window.zE("messenger:set", "conversationFields", Array.from(a.values())),
      Ue.next(a);
  }
}
function Ne(t) {
  t && window.zE("messenger:set", "locale", t);
}
function Pe() {
  return "website_" + (ft || "global").toLowerCase();
}
const He = "create_zendesk_time";
function oa() {
  sessionStorage.getItem(He) ||
    (window.zE("messenger", "logoutUser"),
    sessionStorage.setItem(He, `${new Date().valueOf()}`));
}
const _e = {
  init(t, e = "en", a) {
    const s = G(t);
    s && s.init(e, a, t);
  },
  changeUserInfo(t, e, a) {
    const s = se.getValue(),
      o = G(s);
    o && o.changeUserInfo(t, ia(e, a));
  },
  async openChat() {
    const t = se.getValue(),
      e = G(t);
    e && e.openChat();
  },
  async hideChat() {
    const t = se.getValue(),
      e = G(t);
    e && e.hideChat();
  },
  async changeExpandInfo(t, e) {
    const a = se.getValue(),
      s = G(a);
    s && s != null && s.changeExpandInfo && s.changeExpandInfo(t, e, a);
  },
};
function G(t) {
  if (t) return t.name === "AdaZAW" ? ta : t.name === "PhemexBot" ? sa : null;
}
function ia(t, e) {
  const a = "VIP: " + e;
  if (!t) return [a];
  const s = [
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
    o = Object.keys(t)
      .map((i) =>
        s.includes(i) && t[i]
          ? typeof t[i] == "boolean"
            ? i
            : `${i}: ${t[i]}`
          : ""
      )
      .filter(Boolean);
  return [a, ...o];
}
const la = (t) => ({}),
  Ve = (t) => ({}),
  ra = (t) => ({}),
  Ae = (t) => ({});
function ca(t) {
  let e, a, s, o, i, u, r, n, l, f, c;
  const p = t[4].header,
    C = W(p, t, t[3], Ae),
    T = t[4].default,
    h = W(T, t, t[3], null),
    y = t[4].footer,
    k = W(y, t, t[3], Ve);
  return {
    c() {
      (e = M("div")),
        (a = M("div")),
        (s = M("div")),
        C && C.c(),
        (o = O()),
        h && h.c(),
        (i = O()),
        k && k.c(),
        this.h();
    },
    l(w) {
      e = L(w, "DIV", { class: !0 });
      var m = v(e);
      a = L(m, "DIV", { class: !0 });
      var I = v(a);
      s = L(I, "DIV", { class: !0, style: !0 });
      var D = v(s);
      C && C.l(D),
        (o = B(D)),
        h && h.l(D),
        (i = B(D)),
        k && k.l(D),
        D.forEach(_),
        I.forEach(_),
        m.forEach(_),
        this.h();
    },
    h() {
      d(s, "class", "modal sv B3 H-115jbqt"),
        d(s, "style", t[1]),
        d(a, "class", "modal-mask H-115jbqt"),
        d(e, "class", (n = Te(t[0]) + " H-115jbqt"));
    },
    m(w, m) {
      S(w, e, m),
        E(e, a),
        E(a, s),
        C && C.m(s, null),
        E(s, o),
        h && h.m(s, null),
        E(s, i),
        k && k.m(s, null),
        (l = !0),
        f || ((c = [j(s, "click", fa), j(a, "click", t[2])]), (f = !0));
    },
    p(w, [m]) {
      C &&
        C.p &&
        (!l || m & 8) &&
        q(C, p, w, w[3], l ? J(p, w[3], m, ra) : Z(w[3]), Ae),
        h &&
          h.p &&
          (!l || m & 8) &&
          q(h, T, w, w[3], l ? J(T, w[3], m, null) : Z(w[3]), null),
        k &&
          k.p &&
          (!l || m & 8) &&
          q(k, y, w, w[3], l ? J(y, w[3], m, la) : Z(w[3]), Ve),
        (!l || m & 2) && d(s, "style", w[1]),
        (!l || (m & 1 && n !== (n = Te(w[0]) + " H-115jbqt"))) &&
          d(e, "class", n);
    },
    i(w) {
      l ||
        (z(C, w),
        z(h, w),
        z(k, w),
        oe(() => {
          l && (r && r.end(1), (u = Wt(a, Se, { duration: 100 })), u.start());
        }),
        (l = !0));
    },
    o(w) {
      R(C, w),
        R(h, w),
        R(k, w),
        u && u.invalidate(),
        (r = qt(a, Se, { duration: 100 })),
        (l = !1);
    },
    d(w) {
      w && _(e),
        C && C.d(w),
        h && h.d(w),
        k && k.d(w),
        w && r && r.end(),
        (f = !1),
        Ge(c);
    },
  };
}
function fa(t) {
  t.stopPropagation();
}
function ua(t, e, a) {
  let { $$slots: s = {}, $$scope: o } = e;
  const i = Ye();
  let { class: u = "" } = e,
    { style: r = "" } = e;
  Y(() => {
    (document.body.style.overflow = "hidden"),
      (document.body.style.paddingRight = "6px");
  }),
    Zt(() => {
      (document.body.style.overflow = "initial"),
        (document.body.style.paddingRight = "unset");
    });
  function n() {
    i("maskClick");
  }
  return (
    (t.$$set = (l) => {
      "class" in l && a(0, (u = l.class)),
        "style" in l && a(1, (r = l.style)),
        "$$scope" in l && a(3, (o = l.$$scope));
    }),
    [u, r, n, o, s]
  );
}
let da = class extends ee {
  constructor(e) {
    super(), te(this, e, ua, ca, ae, { class: 0, style: 1 });
  }
};
function ma(t) {
  let e, a, s, o, i, u, r, n, l, f, c, p, C;
  return {
    c() {
      (e = U("svg")),
        (a = U("g")),
        (s = U("path")),
        (o = U("path")),
        (i = U("path")),
        (u = U("path")),
        (r = U("path")),
        (n = U("path")),
        (l = U("path")),
        (f = U("path")),
        (c = U("path")),
        (p = U("path")),
        (C = U("path")),
        this.h();
    },
    l(T) {
      e = N(T, "svg", { width: !0, height: !0 });
      var h = v(e);
      a = N(h, "g", { fill: !0, "fill-rule": !0 });
      var y = v(a);
      (s = N(y, "path", { d: !0 })),
        v(s).forEach(_),
        (o = N(y, "path", { d: !0, opacity: !0 })),
        v(o).forEach(_),
        (i = N(y, "path", { d: !0, opacity: !0 })),
        v(i).forEach(_),
        (u = N(y, "path", { d: !0, opacity: !0 })),
        v(u).forEach(_),
        (r = N(y, "path", { d: !0, opacity: !0 })),
        v(r).forEach(_),
        (n = N(y, "path", { d: !0, opacity: !0 })),
        v(n).forEach(_),
        (l = N(y, "path", { d: !0, opacity: !0 })),
        v(l).forEach(_),
        (f = N(y, "path", { d: !0 })),
        v(f).forEach(_),
        (c = N(y, "path", { d: !0, opacity: !0 })),
        v(c).forEach(_),
        (p = N(y, "path", { d: !0, opacity: !0 })),
        v(p).forEach(_),
        (C = N(y, "path", { d: !0, opacity: !0 })),
        v(C).forEach(_),
        y.forEach(_),
        h.forEach(_),
        this.h();
    },
    h() {
      d(
        s,
        "d",
        "M11.992 4c.304 0 .504.2.504.503v2.102c0 .304-.2.504-.504.504s-.503-.2-.503-.504V4.503c.008-.303.207-.503.503-.503z"
      ),
        d(
          o,
          "d",
          "M11.992 16.891c.304 0 .504.2.504.504v2.102c0 .303-.2.503-.504.503s-.503-.2-.503-.503v-2.102c.008-.304.207-.504.503-.504z"
        ),
        d(o, "opacity", ".5"),
        d(
          i,
          "d",
          "M19.984 11.992c0 .304-.2.504-.503.504h-2.102c-.304 0-.504-.2-.504-.504s.2-.503.504-.503h2.102c.303.008.503.207.503.503z"
        ),
        d(i, "opacity", ".2"),
        d(
          u,
          "d",
          "M7.1 11.992c0 .304-.199.504-.503.504H4.503c-.303 0-.503-.2-.503-.504s.2-.503.503-.503h2.102c.296.008.496.207.496.503z"
        ),
        d(u, "opacity", ".8"),
        d(
          r,
          "d",
          "M18.89 7.996c.103.2.103.504-.2.695L16.89 9.794a.54.54 0 01-.703-.2.524.524 0 01.2-.703l1.798-1.095c.304-.096.6-.096.703.2z"
        ),
        d(r, "opacity", ".1"),
        d(
          n,
          "d",
          "M7.796 14.39c.104.2.104.503-.2.703l-1.798 1.103a.524.524 0 01-.703-.2.524.524 0 01.2-.703l1.798-1.103c.208-.096.503 0 .703.2z"
        ),
        d(n, "opacity", ".7"),
        d(
          l,
          "d",
          "M9.594 16.188c.2.104.304.4.2.703L8.691 18.69c-.2.304-.503.304-.695.2-.2-.104-.304-.4-.2-.703L8.9 16.388c.096-.296.4-.296.695-.2z"
        ),
        d(l, "opacity", ".6"),
        d(
          f,
          "d",
          "M7.996 5.103c.2-.2.503-.104.695.104l1.103 1.798a.54.54 0 01-.2.703c-.303.2-.599.104-.703-.104L7.796 5.702c-.096-.2 0-.503.2-.6z"
        ),
        d(
          c,
          "d",
          "M14.39 16.188a.524.524 0 01.703.2l1.103 1.798c.104.2.104.503-.2.703a.524.524 0 01-.703-.2l-1.103-1.798c-.096-.304 0-.6.2-.703z"
        ),
        d(c, "opacity", ".4"),
        d(
          p,
          "d",
          "M5.103 7.996c.104-.2.4-.304.703-.2L7.596 8.9c.2.104.304.4.2.6-.2.303-.503.4-.703.2L5.303 8.69c-.304-.191-.4-.495-.2-.695z"
        ),
        d(p, "opacity", ".9"),
        d(
          C,
          "d",
          "M16.188 14.39c.104-.2.4-.304.703-.2l1.798 1.103c.2.104.304.4.2.703-.104.2-.4.304-.703.2l-1.798-1.103c-.2-.104-.296-.4-.2-.703z"
        ),
        d(C, "opacity", ".3"),
        d(a, "fill", "#FFF"),
        d(a, "fill-rule", "nonzero"),
        d(e, "width", "24"),
        d(e, "height", "24");
    },
    m(T, h) {
      S(T, e, h),
        E(e, a),
        E(a, s),
        E(a, o),
        E(a, i),
        E(a, u),
        E(a, r),
        E(a, n),
        E(a, l),
        E(a, f),
        E(a, c),
        E(a, p),
        E(a, C);
    },
    p: ge,
    i: ge,
    o: ge,
    d(T) {
      T && _(e);
    },
  };
}
let ha = class extends ee {
  constructor(e) {
    super(), te(this, e, null, ma, ae, {});
  }
};
function pa(t) {
  let e,
    a,
    s,
    o,
    i,
    u,
    r,
    n = t[4] && Oe();
  const l = t[9].default,
    f = W(l, t, t[8], null);
  return {
    c() {
      (e = M("button")), n && n.c(), (a = O()), f && f.c(), this.h();
    },
    l(c) {
      e = L(c, "BUTTON", { class: !0, style: !0 });
      var p = v(e);
      n && n.l(p), (a = B(p)), f && f.l(p), p.forEach(_), this.h();
    },
    h() {
      (e.disabled = s = t[3] || t[4]),
        d(e, "class", (o = "f14 " + t[0] + " H-1ltrnrh")),
        d(e, "style", t[7]),
        b(e, "loading", t[4]),
        b(e, "small", t[2] === "small"),
        b(e, "default", t[1] === "default"),
        b(e, "text", t[1] === "text"),
        b(e, "common", t[1] === "common"),
        b(e, "primary", t[1] === "primary"),
        b(e, "warning", t[1] === "warning"),
        b(e, "danger", t[1] === "danger"),
        b(e, "ghost", t[1] === "ghost"),
        b(e, "blue", t[1] === "blue");
    },
    m(c, p) {
      S(c, e, p),
        n && n.m(e, null),
        E(e, a),
        f && f.m(e, null),
        (i = !0),
        u || ((r = j(e, "click", t[11])), (u = !0));
    },
    p(c, p) {
      c[4]
        ? n
          ? p & 16 && z(n, 1)
          : ((n = Oe()), n.c(), z(n, 1), n.m(e, a))
        : n &&
          (we(),
          R(n, 1, 1, () => {
            n = null;
          }),
          ye()),
        f &&
          f.p &&
          (!i || p & 256) &&
          q(f, l, c, c[8], i ? J(l, c[8], p, null) : Z(c[8]), null),
        (!i || (p & 24 && s !== (s = c[3] || c[4]))) && (e.disabled = s),
        (!i || (p & 1 && o !== (o = "f14 " + c[0] + " H-1ltrnrh"))) &&
          d(e, "class", o),
        (!i || p & 128) && d(e, "style", c[7]),
        (!i || p & 17) && b(e, "loading", c[4]),
        (!i || p & 5) && b(e, "small", c[2] === "small"),
        (!i || p & 3) && b(e, "default", c[1] === "default"),
        (!i || p & 3) && b(e, "text", c[1] === "text"),
        (!i || p & 3) && b(e, "common", c[1] === "common"),
        (!i || p & 3) && b(e, "primary", c[1] === "primary"),
        (!i || p & 3) && b(e, "warning", c[1] === "warning"),
        (!i || p & 3) && b(e, "danger", c[1] === "danger"),
        (!i || p & 3) && b(e, "ghost", c[1] === "ghost"),
        (!i || p & 3) && b(e, "blue", c[1] === "blue");
    },
    i(c) {
      i || (z(n), z(f, c), (i = !0));
    },
    o(c) {
      R(n), R(f, c), (i = !1);
    },
    d(c) {
      c && _(e), n && n.d(), f && f.d(c), (u = !1), r();
    },
  };
}
function ga(t) {
  let e, a, s, o, i;
  const u = t[9].default,
    r = W(u, t, t[8], null);
  return {
    c() {
      (e = M("a")), r && r.c(), this.h();
    },
    l(n) {
      e = L(n, "A", { href: !0, class: !0, target: !0, style: !0 });
      var l = v(e);
      r && r.l(l), l.forEach(_), this.h();
    },
    h() {
      d(e, "href", t[5]),
        d(e, "class", (a = "f14 " + t[0] + " H-1ltrnrh")),
        d(e, "target", t[6]),
        d(e, "style", t[7]),
        b(e, "disabled", t[3] || t[4]),
        b(e, "loading", t[4]),
        b(e, "small", t[2] === "small"),
        b(e, "default", t[1] === "default"),
        b(e, "text", t[1] === "text"),
        b(e, "common", t[1] === "common"),
        b(e, "primary", t[1] === "primary"),
        b(e, "warning", t[1] === "warning"),
        b(e, "danger", t[1] === "danger"),
        b(e, "ghost", t[1] === "ghost"),
        b(e, "blue", t[1] === "blue");
    },
    m(n, l) {
      S(n, e, l),
        r && r.m(e, null),
        (s = !0),
        o || ((i = j(e, "click", t[10])), (o = !0));
    },
    p(n, l) {
      r &&
        r.p &&
        (!s || l & 256) &&
        q(r, u, n, n[8], s ? J(u, n[8], l, null) : Z(n[8]), null),
        (!s || l & 32) && d(e, "href", n[5]),
        (!s || (l & 1 && a !== (a = "f14 " + n[0] + " H-1ltrnrh"))) &&
          d(e, "class", a),
        (!s || l & 64) && d(e, "target", n[6]),
        (!s || l & 128) && d(e, "style", n[7]),
        (!s || l & 25) && b(e, "disabled", n[3] || n[4]),
        (!s || l & 17) && b(e, "loading", n[4]),
        (!s || l & 5) && b(e, "small", n[2] === "small"),
        (!s || l & 3) && b(e, "default", n[1] === "default"),
        (!s || l & 3) && b(e, "text", n[1] === "text"),
        (!s || l & 3) && b(e, "common", n[1] === "common"),
        (!s || l & 3) && b(e, "primary", n[1] === "primary"),
        (!s || l & 3) && b(e, "warning", n[1] === "warning"),
        (!s || l & 3) && b(e, "danger", n[1] === "danger"),
        (!s || l & 3) && b(e, "ghost", n[1] === "ghost"),
        (!s || l & 3) && b(e, "blue", n[1] === "blue");
    },
    i(n) {
      s || (z(r, n), (s = !0));
    },
    o(n) {
      R(r, n), (s = !1);
    },
    d(n) {
      n && _(e), r && r.d(n), (o = !1), i();
    },
  };
}
function Oe(t) {
  let e, a;
  return (
    (e = new ha({})),
    {
      c() {
        Q(e.$$.fragment);
      },
      l(s) {
        re(e.$$.fragment, s);
      },
      m(s, o) {
        X(e, s, o), (a = !0);
      },
      i(s) {
        a || (z(e.$$.fragment, s), (a = !0));
      },
      o(s) {
        R(e.$$.fragment, s), (a = !1);
      },
      d(s) {
        $(e, s);
      },
    }
  );
}
function _a(t) {
  let e, a, s, o;
  const i = [ga, pa],
    u = [];
  function r(n, l) {
    return n[5] ? 0 : 1;
  }
  return (
    (e = r(t)),
    (a = u[e] = i[e](t)),
    {
      c() {
        a.c(), (s = F());
      },
      l(n) {
        a.l(n), (s = F());
      },
      m(n, l) {
        u[e].m(n, l), S(n, s, l), (o = !0);
      },
      p(n, [l]) {
        let f = e;
        (e = r(n)),
          e === f
            ? u[e].p(n, l)
            : (we(),
              R(u[f], 1, 1, () => {
                u[f] = null;
              }),
              ye(),
              (a = u[e]),
              a ? a.p(n, l) : ((a = u[e] = i[e](n)), a.c()),
              z(a, 1),
              a.m(s.parentNode, s));
      },
      i(n) {
        o || (z(a), (o = !0));
      },
      o(n) {
        R(a), (o = !1);
      },
      d(n) {
        u[e].d(n), n && _(s);
      },
    }
  );
}
function ba(t, e, a) {
  let { $$slots: s = {}, $$scope: o } = e,
    { class: i = "" } = e,
    { type: u = "default" } = e,
    { size: r = "normal" } = e,
    { disabled: n = !1 } = e,
    { loading: l = !1 } = e,
    { href: f = null } = e,
    { target: c = "_self" } = e,
    { style: p = "" } = e;
  function C(h) {
    Me.call(this, t, h);
  }
  function T(h) {
    Me.call(this, t, h);
  }
  return (
    (t.$$set = (h) => {
      "class" in h && a(0, (i = h.class)),
        "type" in h && a(1, (u = h.type)),
        "size" in h && a(2, (r = h.size)),
        "disabled" in h && a(3, (n = h.disabled)),
        "loading" in h && a(4, (l = h.loading)),
        "href" in h && a(5, (f = h.href)),
        "target" in h && a(6, (c = h.target)),
        "style" in h && a(7, (p = h.style)),
        "$$scope" in h && a(8, (o = h.$$scope));
    }),
    [i, u, r, n, l, f, c, p, o, s, C, T]
  );
}
let wa = class extends ee {
  constructor(e) {
    super(),
      te(this, e, ba, _a, ae, {
        class: 0,
        type: 1,
        size: 2,
        disabled: 3,
        loading: 4,
        href: 5,
        target: 6,
        style: 7,
      });
  }
};
const V = {
  Note: "99a406",
  Cancel: "4334b7",
  CancelAll: "5c4538",
  Confirm: "d104b6",
  Continue: "fe6a62",
  NoData: "ba462c",
  Buy: "693bb2",
  Sell: "0a3363",
  Long: "28fc10",
  Short: "5249af",
  ClickHereTo: "c7f687",
  OK: "75a602",
  Perpetual: "4794af",
  PerpetualComplete: "142722",
  PerpetualV2: "67a2b9",
  CurrencyMargin: "04dbe0",
  LogIn: "dcfb86",
  Register: "03d151",
  ComingSoon: "987042",
  ListingTime: "caea65",
  Countdown: "f04605",
  Refresh: "54a25e",
  Suspend: "117d6a",
  Init: "bfa008",
  PreList: "febf7d",
  Delisted: "a4dc07",
  Hide: "c8a309",
  SecureAccount: "142f03",
  SecureAccountDesc: "22ddc2",
  KycInfo: "a939ea",
  GetStarted: "05b6a3",
  Language: "7492d3",
  DontShowAgain: "a406d1",
  Size: "58c279",
  Cont: "8fa40e",
  ZeroFee: "9c8227",
  Direction: "6213a4",
  OpenLong: "2765d2",
  OpenShort: "904cf1",
  CloseLong: "27e48f",
  CloseShort: "14d78a",
  preRestrictedMsg: "6907aa",
  restrictedMsg: "8ca66a",
  ReferralCode: "6fb39c",
  ScanQRCode: "6ed5b5",
  Deposit: "42191a",
  FeeLevel: "b24101",
  YourFeeLevel: "aae0da",
  Maker: "0244d7",
  Taker: "167eb7",
  Yes: "663e42",
  No: "a0d22d",
  Last: "eb2342",
  GotIt: "e2f49c",
  LearnMore: "ca2bef",
};
function ya(t) {
  let e, a;
  return {
    c() {
      (e = M("div")), (a = ce(t[1])), this.h();
    },
    l(s) {
      e = L(s, "DIV", { class: !0 });
      var o = v(e);
      (a = fe(o, t[1])), o.forEach(_), this.h();
    },
    h() {
      d(e, "class", "body mt20 T1");
    },
    m(s, o) {
      S(s, e, o), E(e, a);
    },
    p(s, o) {
      o & 2 && Ce(a, s[1]);
    },
    d(s) {
      s && _(e);
    },
  };
}
function Ca(t) {
  let e, a, s;
  return {
    c() {
      (e = M("div")), (a = M("span")), (s = ce(t[0])), this.h();
    },
    l(o) {
      e = L(o, "DIV", { slot: !0, class: !0 });
      var i = v(e);
      a = L(i, "SPAN", { class: !0 });
      var u = v(a);
      (s = fe(u, t[0])), u.forEach(_), i.forEach(_), this.h();
    },
    h() {
      d(a, "class", "f16"),
        d(e, "slot", "header"),
        d(e, "class", "df aic jcsb lh24 T1");
    },
    m(o, i) {
      S(o, e, i), E(e, a), E(a, s);
    },
    p(o, i) {
      i & 1 && Ce(s, o[0]);
    },
    d(o) {
      o && _(e);
    },
  };
}
function ka(t) {
  let e = t[2](V.OK) + "",
    a;
  return {
    c() {
      a = ce(e);
    },
    l(s) {
      a = fe(s, e);
    },
    m(s, o) {
      S(s, a, o);
    },
    p(s, o) {
      o & 4 && e !== (e = s[2](V.OK) + "") && Ce(a, e);
    },
    d(s) {
      s && _(a);
    },
  };
}
function va(t) {
  let e, a, s;
  return (
    (a = new wa({
      props: {
        class: "btn BLUE",
        type: "primary",
        $$slots: { default: [ka] },
        $$scope: { ctx: t },
      },
    })),
    a.$on("click", t[3]),
    {
      c() {
        (e = M("div")), Q(a.$$.fragment), this.h();
      },
      l(o) {
        e = L(o, "DIV", { slot: !0, class: !0 });
        var i = v(e);
        re(a.$$.fragment, i), i.forEach(_), this.h();
      },
      h() {
        d(e, "slot", "footer"),
          d(e, "class", "footer df jcfe tr mt24 H-ly9618");
      },
      m(o, i) {
        S(o, e, i), X(a, e, null), (s = !0);
      },
      p(o, i) {
        const u = {};
        i & 36 && (u.$$scope = { dirty: i, ctx: o }), a.$set(u);
      },
      i(o) {
        s || (z(a.$$.fragment, o), (s = !0));
      },
      o(o) {
        R(a.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && _(e), $(a);
      },
    }
  );
}
function Ea(t) {
  let e, a;
  return (
    (e = new da({
      props: {
        style:
          "padding: 24px; border-radius: 12px; width: 500px; background: var(--B2); border: 1px solid var(--B0)",
        $$slots: { footer: [va], header: [Ca], default: [ya] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Q(e.$$.fragment);
      },
      l(s) {
        re(e.$$.fragment, s);
      },
      m(s, o) {
        X(e, s, o), (a = !0);
      },
      p(s, [o]) {
        const i = {};
        o & 39 && (i.$$scope = { dirty: o, ctx: s }), e.$set(i);
      },
      i(s) {
        a || (z(e.$$.fragment, s), (a = !0));
      },
      o(s) {
        R(e.$$.fragment, s), (a = !1);
      },
      d(s) {
        $(e, s);
      },
    }
  );
}
function Ia(t, e, a) {
  let s;
  P(t, be, (n) => a(2, (s = n)));
  let { title: o = "" } = e,
    { message: i = "" } = e;
  const u = Ye();
  function r() {
    u("close");
  }
  return (
    (t.$$set = (n) => {
      "title" in n && a(0, (o = n.title)),
        "message" in n && a(1, (i = n.message));
    }),
    [o, i, s, r]
  );
}
let Ta = class extends ee {
  constructor(e) {
    super(), te(this, e, Ia, Ea, ae, { title: 0, message: 1 });
  }
};
const Qe = "TIP_ONTARIAN";
function Sa() {
  const t = ie.formatUTCDate(Date.now());
  return localStorage.getItem(Qe) !== t;
}
function Ma() {
  const t = ie.formatUTCDate(Date.now());
  return localStorage.setItem(Qe, t);
}
const me = ut.pipe(
    x(Boolean),
    We(() => mt.getPublicGeoV2()),
    K((t) => (t == null ? void 0 : t.data) || {}),
    ue(1)
  ),
  Xe = me.pipe(
    K((t) => t.code === 31046),
    qe(!1),
    Ze()
  ),
  $e = me.pipe(
    K((t) => t.code === 31043),
    qe(!1),
    Ze()
  );
de([$e, je])
  .pipe(x(([t, e]) => t && e === "Login"))
  .subscribe(() => {
    dt.next({ manual: !0 });
  });
function La() {
  Xe.pipe(
    x(Boolean),
    We(() =>
      be.pipe(
        x((t) => !!t(V.Note)),
        Jt(me)
      )
    )
  ).subscribe(([t, e]) => {
    Sa() &&
      (Ma(),
      ht.create(Ta, {
        title: t(V.Note),
        message: t(V.preRestrictedMsg, {
          Email: "support@phemex.zendesk.com",
          Date: ie.formatUTCDate(e.startTime),
        }),
      }));
  });
}
const Wa = new Qt(),
  qa = new le(!1),
  za = new le(0),
  Da = new le(0),
  Za = de([pt, gt]).pipe(
    K(([t, e]) =>
      [...t.values()]
        .filter(({ status: s }) => xe(s))
        .map((s) => {
          const o = e.get(s.symbol),
            {
              settleCurrency: i,
              quoteCurrency: u,
              timeline: r,
              categoryIds: n,
            } = o,
            l = 864e5 * 30,
            f = Date.now() < l + r[1];
          return {
            ...s,
            settleCurrency: i,
            quoteCurrency: u,
            timeline: r,
            categoryIds: n,
            isNew: f,
          };
        })
    ),
    ue(1)
  ),
  Ra = de([_t, bt, wt]).pipe(
    K(([t, e, a]) =>
      [...t.values()]
        .filter(({ status: o }) => xe(o))
        .map((o) => {
          const i = e.get(o.symbol),
            {
              type: u,
              symbol: r,
              displayBaseCurrency: n,
              displaySymbol: l,
              baseCurrency: f,
              status: c,
              timeline: p,
              categoryIds: C,
              stStatus: T,
            } = i,
            h = 864e5 * 30,
            y = Date.now() < h + p[1],
            k = a.get(f);
          return {
            ...o,
            type: u,
            symbol: r,
            pairName: l,
            displaySymbol: l,
            baseCurrency: f,
            displayBaseCurrency: n,
            name: (k == null ? void 0 : k.fullName) || "-",
            status: c,
            timeline: p,
            categoryIds: C,
            isNew: y,
            stStatus: T,
          };
        })
    ),
    ue(1)
  ),
  Ja = de([Ra, yt]).pipe(
    K(([t, e]) => t.filter((a) => [...e.keys()].includes(a.symbol))),
    ue(1)
  );
function xe(t) {
  return ["Listed", "PreList", "Suspend"].includes(t);
}
const { setTimeout: Be } = $t;
function Ua(t) {
  let e;
  return {
    c() {
      (e = M("link")), this.h();
    },
    l(a) {
      (e = L(a, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      d(e, "rel", "shortcut icon"),
        d(e, "href", "https://i.postimg.cc/jScfByB5/favicon.png");
    },
    m(a, s) {
      S(a, e, s);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Na(t) {
  let e;
  return {
    c() {
      (e = M("link")), this.h();
    },
    l(a) {
      (e = L(a, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      d(e, "rel", "shortcut icon"),
        d(
          e,
          "href",
          "https://img.phemex.com/v1/22c61c50-f468-405f-86cd-bbafb7b2d8e7/favicon-pulse-social.ico"
        );
    },
    m(a, s) {
      S(a, e, s);
    },
    d(a) {
      a && _(e);
    },
  };
}
function Fe(t) {
  let e,
    a,
    s,
    o,
    i,
    u,
    r,
    n =
      (t[9]
        ? t[11](V.preRestrictedMsg, { Email: ne, Date: t[7] })
        : t[11](V.restrictedMsg, { Email: ne })) + "",
    l;
  return {
    c() {
      (e = M("div")),
        (a = O()),
        (s = M("div")),
        (o = M("i")),
        (i = ce("")),
        (u = O()),
        (r = M("div")),
        this.h();
    },
    l(f) {
      (e = L(f, "DIV", { class: !0 })),
        v(e).forEach(_),
        (a = B(f)),
        (s = L(f, "DIV", { class: !0 }));
      var c = v(s);
      o = L(c, "I", { class: !0 });
      var p = v(o);
      (i = fe(p, "")),
        p.forEach(_),
        (u = B(c)),
        (r = L(c, "DIV", { class: !0 }));
      var C = v(r);
      C.forEach(_), c.forEach(_), this.h();
    },
    h() {
      d(e, "class", "placeholder-block H-1ex8fl0"),
        d(o, "class", "iconfont error f16 mr10 H-1ex8fl0"),
        d(r, "class", "f14 lh22"),
        d(s, "class", "ip-restricted-notify df H-1ex8fl0"),
        oe(() => t[22].call(s));
    },
    m(f, c) {
      S(f, e, c),
        S(f, a, c),
        S(f, s, c),
        E(s, o),
        E(o, i),
        E(s, u),
        E(s, r),
        (r.innerHTML = n),
        (l = xt(s, t[22].bind(s)));
    },
    p(f, c) {
      c & 2688 &&
        n !==
          (n =
            (f[9]
              ? f[11](V.preRestrictedMsg, { Email: ne, Date: f[7] })
              : f[11](V.restrictedMsg, { Email: ne })) + "") &&
        (r.innerHTML = n);
    },
    d(f) {
      f && _(e), f && _(a), f && _(s), l();
    },
  };
}
function Pa(t) {
  let e = !1,
    a = () => {
      e = !1;
    },
    s,
    o,
    i,
    u,
    r,
    n,
    l,
    f,
    c,
    p;
  oe(t[20]), oe(t[21]);
  function C(m, I) {
    return Ke.isJapanSite ? Na : Ua;
  }
  let h = C()(t),
    y = (t[9] || t[10]) && Fe(t);
  var k = t[8];
  function w(m) {
    return { props: { isSpot: m[4], isContract: m[5] } };
  }
  return (
    k && (n = Le(k, w(t))),
    {
      c() {
        (o = M("link")),
          h.c(),
          (i = F()),
          (u = O()),
          y && y.c(),
          (r = O()),
          n && Q(n.$$.fragment),
          (l = F()),
          this.h();
      },
      l(m) {
        const I = Xt("svelte-1cup4f9", document.head);
        (o = L(I, "LINK", { rel: !0, href: !0 })),
          h.l(I),
          (i = F()),
          I.forEach(_),
          (u = B(m)),
          y && y.l(m),
          (r = B(m)),
          n && re(n.$$.fragment, m),
          (l = F()),
          this.h();
      },
      h() {
        d(o, "rel", "canonical"), d(o, "href", t[6]);
      },
      m(m, I) {
        E(document.head, o),
          h.m(document.head, null),
          E(document.head, i),
          S(m, u, I),
          y && y.m(m, I),
          S(m, r, I),
          n && X(n, m, I),
          S(m, l, I),
          (f = !0),
          c ||
            ((p = [
              j(window, "resize", t[20]),
              j(window, "scroll", () => {
                (e = !0), clearTimeout(s), (s = Be(a, 100)), t[21]();
              }),
            ]),
            (c = !0));
      },
      p(m, [I]) {
        I & 4 &&
          !e &&
          ((e = !0),
          clearTimeout(s),
          scrollTo(window.pageXOffset, m[2]),
          (s = Be(a, 100))),
          (!f || I & 64) && d(o, "href", m[6]),
          m[9] || m[10]
            ? y
              ? y.p(m, I)
              : ((y = Fe(m)), y.c(), y.m(r.parentNode, r))
            : y && (y.d(1), (y = null));
        const D = {};
        if (
          (I & 16 && (D.isSpot = m[4]),
          I & 32 && (D.isContract = m[5]),
          I & 256 && k !== (k = m[8]))
        ) {
          if (n) {
            we();
            const A = n;
            R(A.$$.fragment, 1, 0, () => {
              $(A, 1);
            }),
              ye();
          }
          k
            ? ((n = Le(k, w(m))),
              Q(n.$$.fragment),
              z(n.$$.fragment, 1),
              X(n, l.parentNode, l))
            : (n = null);
        } else k && n.$set(D);
      },
      i(m) {
        f || (n && z(n.$$.fragment, m), (f = !0));
      },
      o(m) {
        n && R(n.$$.fragment, m), (f = !1);
      },
      d(m) {
        _(o),
          h.d(m),
          _(i),
          m && _(u),
          y && y.d(m),
          m && _(r),
          m && _(l),
          n && $(n, m),
          (c = !1),
          Ge(p);
      },
    }
  );
}
const ne =
  '<a href="mailto:support@phemex.zendesk.com">support@phemex.zendesk.com</a>';
function Ha(t) {
  return t
    ? Ie(() => import("/trade/js/chunk-d26d11c0.js").then((e) => e.h), [])
    : Ie(() => import("/trade/js/chunk-41eedcde.js").then((e) => e.p), []);
}
function Va(t, e, a) {
  let s, o, i, u, r, n, l, f, c, p, C, T;
  P(t, ve, (g) => a(23, (s = g))),
    P(t, me, (g) => a(12, (o = g))),
    P(t, Ee, (g) => a(13, (i = g))),
    P(t, Da, (g) => a(14, (u = g))),
    P(t, Lt, (g) => a(15, (r = g))),
    P(t, zt, (g) => a(16, (n = g))),
    P(t, Dt, (g) => a(17, (l = g))),
    P(t, Rt, (g) => a(18, (f = g))),
    P(t, Ut, (g) => a(19, (c = g))),
    P(t, Xe, (g) => a(9, (p = g))),
    P(t, $e, (g) => a(10, (C = g))),
    P(t, be, (g) => a(11, (T = g)));
  let h = !1,
    y = !1,
    k = 1200,
    w = 768,
    m = null,
    I = "",
    D = 0,
    A = 0,
    ke;
  Y(() => {
    je.pipe(
      x((g) => g !== "Init"),
      ea(1)
    ).subscribe((g) => Ct.pageView({ auth_status: g }));
  }),
    Y(() => {
      kt(), vt.next();
    }),
    Y(() => ve.subscribe((g) => Promise.all([Et(g), It(g)]))),
    Y(() => {
      La();
    });
  function et(g) {
    g &&
      (a(6, (m = g.href)),
      a(4, (h = g.tradeType === "Spot")),
      a(5, (y = g.isPerpetual)));
  }
  async function tt(g) {
    const H = await Ha(g);
    H && a(8, (ke = H.default));
  }
  function at(g, H) {
    Tt.next(g), St.next(H);
  }
  function st(g) {
    g ||
      setTimeout(async () => {
        const H = await Mt();
        _e.init(H, s, function () {
          Ee.next(!0);
        });
      }, 5e3);
  }
  function nt(g, H, he, pe) {
    g && _e.changeUserInfo(he, H, pe);
  }
  function ot(g, H) {
    g && _e.changeExpandInfo("IpConfig", H);
  }
  function it(g, H, he) {
    const pe = g + H - he;
    za.next(Math.max(pe, 0));
  }
  function lt() {
    a(0, (k = window.innerWidth)), a(1, (w = window.innerHeight));
  }
  function rt() {
    a(2, (D = window.pageYOffset));
  }
  function ct() {
    (A = this.offsetHeight), a(3, A);
  }
  return (
    (t.$$.update = () => {
      t.$$.dirty & 262144 && tt(f),
        t.$$.dirty & 524288 && et(c),
        t.$$.dirty & 3 && at(k, w),
        t.$$.dirty & 262144 && !Ke.isBot && st(f),
        t.$$.dirty & 237568 && nt(i, l, n, r),
        t.$$.dirty & 4096 &&
          a(7, (I = ie.formatUTCDate(o == null ? void 0 : o.startTime))),
        t.$$.dirty & 16396 && it(A, u, D),
        t.$$.dirty & 12288 && ot(i, o);
    }),
    [k, w, D, A, h, y, m, I, ke, p, C, T, o, i, u, r, n, l, f, c, lt, rt, ct]
  );
}
class Aa extends ee {
  constructor(e) {
    super(), te(this, e, Va, Pa, ae, {});
  }
}
async function Oa(t) {
  Nt(),
    Pt.init({
      readToken: Ht,
      writeToken: Vt,
      removeToken: At,
      readBid: Ot,
      readLanguage: Bt,
    }),
    Ft.init(t),
    await Promise.all([jt(), Kt(), Gt(), Yt()]),
    new Aa({ target: document.getElementById("app") });
}
Oa(() => new Worker("/trade/js/data-worker-37d278fc.js")).then();
(localStorage.getItem("TINGYUN_STORAGE") || "").includes("apm2") &&
  (console.log("deleted"), localStorage.removeItem("TINGYUN_STORAGE"));
export {
  wa as C,
  da as a,
  _e as b,
  V as c,
  Da as d,
  ha as e,
  Wa as f,
  Za as g,
  qa as h,
  za as i,
  Ja as m,
  Ra as s,
};
//# sourceMappingURL=app-3b2e47c2.js.map
