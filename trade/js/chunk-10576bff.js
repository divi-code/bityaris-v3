import {
  B as d,
  q as Q,
  S as L,
  f as g,
  m as u,
  s as N,
  a as O,
  b as y,
  d as q,
  c as A,
  R as U,
  e as w,
  w as Tr,
  o as ja,
  t as Le,
  g as br,
  h as Ft,
  O as vs,
  i as Lt,
  j as Rn,
  k as As,
  l as Os,
  n as qa,
  N as ws,
  p as Er,
  r as Is,
  u as Cs,
  v as Qa,
  x as Ds,
  y as Ns,
  z as Ps,
} from "/trade/js/chunk-fe777520.js";
Array.prototype.toObject = function (e, t = (r) => r) {
  return this.reduce((r, n) => ((r[n[e]] = t(n)), r), {});
};
EventTarget.prototype.subscribe = function (e, t) {
  return this.addEventListener(e, t), () => this.removeEventListener(e, t);
};
Map.prototype.toObject = function (e = (r) => r, t = () => !0) {
  return Array.from(this.entries()).reduce((r, [n, a]) => {
    const o = e(a);
    return t(o) && (r[n] = o), r;
  }, {});
};
Map.prototype.toArray = function (e = (t) => t) {
  return Array.from(this.values(), e);
};
d.prototype.set = d.prototype.next;
const la = "mockFaucet",
  da = {
    readFaucet() {
      return localStorage.getItem(la) === "true";
    },
    updateFaucet(e) {
      localStorage.setItem(la, String(e));
    },
  },
  V = {
    MOCK_URL_FLAG: "/moc/",
    DEFAULT_MOCK_URL: "/moc/trade/BTCMUSDT",
    DEFAULT_LIVE_URL: "/trade/BTCUSDT",
    _isMock: !1,
    initMockStatus() {
      (V._isMock = location.pathname.startsWith(V.MOCK_URL_FLAG)),
        V._isMock && console.warn("[MOCK]");
    },
    isMock() {
      return V._isMock;
    },
    getMockPrefix() {
      return V.isMock() ? "/moc" : "";
    },
    gotoLive(e) {
      if (((e = e || V.DEFAULT_LIVE_URL), V.isMockUrl(e)))
        throw new Error("wrong live url");
      window.location.assign(e);
    },
    gotoMock(e) {
      if (((e = e || V.DEFAULT_MOCK_URL), !V.isMockUrl(e)))
        throw new Error("wrong mock url!");
      window.location.assign(e);
    },
    isMockUrl(e) {
      return e.includes(V.MOCK_URL_FLAG);
    },
    showFaucetGuide() {
      return !da.readFaucet();
    },
    disableFaucetGuide() {
      return da.updateFaucet(!0);
    },
  };
V.initMockStatus();
const Ls = {
    event(e, t, r, n = "") {
      (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "ga.event",
          gac: e,
          gaa: t,
          gal: r,
          gav: n,
        });
    },
    bindUserId(e, t) {
      (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "userId.bind",
          userId: String(e),
          parentId: String(t),
        });
    },
  },
  Xa = "",
  Ie = xs();
function xs() {
  const e = navigator.userAgent || navigator.vendor || window.opera;
  return {
    isBrowser: !0,
    isServer: !1,
    isApp: !1,
    isProduction: Us(),
    isTestNet: Za(),
    isLocal: ks(),
    isMobile: Bs(e),
    isBot: Gs(e),
    isDev: window.dev,
    site: Xa,
    isJapanSite: Ms("jp"),
  };
}
function Ms(e) {
  return Xa === e;
}
function Us() {
  if (Za() || location.protocol !== "") return !1;
  const e = location.hostname.split("");
  return (e.length === 3 && e[0] === "") || e.length === 2;
}
function Za() {
  return window.location.hostname.indexOf("testnet") > -1;
}
function ks() {
  return ["127.0.0.1", "localhost", "bityaris-v33.vercel.app"].indexOf(window.location.hostname) > -1;
}
function Bs(e) {
  return (
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      e
    ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )) &&
    !/(googlebot|Googlebot-Mobile|bingbot)/i.test(e)
  );
}
function Gs(e) {
  return /(googlebot|Googlebot-Mobile|bingbot)/i.test(e);
}
function Be() {
  return Math.floor((1 + Math.random()) * 65536)
    .toString(16)
    .substring(1);
}
const Ja = {
    build() {
      return `${Be()}${Be()}-${Be()}-${Be()}-${Be()}-${Be()}${Be()}${Be()}`;
    },
  },
  pa = "p_b_i_d";
function eo() {
  const e = localStorage.getItem(pa);
  if (e && e.length === 36) return e;
  const t = Ja.build();
  return localStorage.setItem(pa, t), t;
}
const to = "USER_USED_UID";
function vn() {
  return (localStorage.getItem(to) || "")
    .split(",")
    .filter(Boolean)
    .map((e) => parseInt(e));
}
function $s(e) {
  if (e !== 0) {
    const t = vn();
    localStorage.setItem(to, [e, ...t.filter((r) => r !== e)].join(","));
  }
}
function qg() {
  return vn().length > 0;
}
function Qg() {
  return "WEB";
}
function Vs() {
  return Ie.isMobile ? "H5" : "WEB";
}
const Fs = "https://et.phemex.com/web.gif?",
  ro = localStorage.getItem("et_show_log") === "Y",
  en = { bid: eo(), t0: Date.now() };
function Ys(e, t) {
  no(e, t);
}
function Hs(e) {
  no("page_view", e);
}
function Ws(e) {
  Object.assign(en, e),
    ro && (console.log("%c [ET] profile:", "color:#0f0;"), console.table(en));
}
function no(e, t) {
  const r = vn(),
    n = {
      ...en,
      uid: r[0] || "",
      time: Date.now(),
      event: e,
      url: window.location.href,
      context: { ...t, device: Vs() },
    };
  ro && (console.log(`%c [ET] event: ${e}`, "color:#0f0;"), console.table(n)),
    (new Image().src = Fs + Q.stringify({ d: Ks(n) }));
}
function Ks(e) {
  const t = JSON.stringify(e),
    r = (a) =>
      [
        [/≤/g, "<="],
        [/≥/g, ">="],
      ].reduce((o, i) => o.replace(i[0], i[1]), a),
    n = window.btoa(r(t));
  return [
    [/\+/g, "-"],
    [/\//g, "_"],
    [/=+$/, ""],
  ].reduce((a, o) => a.replace(o[0], o[1]), n);
}
window.dataLayer = window.dataLayer || [];
const zs = localStorage.getItem("ga4_show_log") === "Y";
function js(e, t) {
  ao({ event: e, ...t });
}
function qs(e) {
  ao({ event: "page_view", ...e });
}
function ao(e) {
  zs &&
    (console.log(`%c [GA4] event: ${e.event}`, "color:#0f0;"),
    console.table(e)),
    window.dataLayer.push(e);
}
const et = Qs();
function Qs() {
  return Ie.isBot
    ? { setProfile(e) {}, track(e, t) {}, pageView(e) {} }
    : {
        setProfile(e) {
          Ws(e);
        },
        track(e, t) {
          Ys(e, t), js(e, t);
        },
        pageView(e) {
          Hs(e), qs(e);
        },
      };
}
const fa = new L(),
  I = {
    subscribe(e, t, r) {
      const n = fa
        .pipe(g((a) => a.channel === e && a.type === t))
        .subscribe((a) => r(a.payload));
      return function () {
        n.unsubscribe();
      };
    },
    send(e, t, r = {}) {
      fa.next({ channel: e, type: t, payload: r });
    },
  },
  ga = { ja: { prod: ["phemex.jp", "pulse.social"] } },
  tn = Object.keys(ga).reduce((e, t) => {
    const r = ga[t],
      n = r.prod.reduce((c, m) => ({ ...c, [m]: "phemex.com" }), {}),
      o = (r.fat && r.fat.length > 0 ? r.fat : r.prod).reduce(
        (c, m) => ({
          ...c,
          [`fat.${m}`]: "fat.phemex.com",
          [`fat2.${m}`]: "fat2.phemex.com",
          [`fat3.${m}`]: "fat3.phemex.com",
        }),
        {}
      ),
      s = (r.ea && r.ea.length > 0 ? r.ea : r.prod).reduce(
        (c, m) => ({ ...c, [`ea.${m}`]: "ea.phemex.com" }),
        {}
      );
    return { ...e, [t]: { ...n, ...s, ...o } };
  }, {});
function Xs(e) {
  return Object.values(tn).reduce((r, n) => ({ ...r, ...n }), {})[e] || e;
}
function An() {
  const e = location.hostname;
  for (const t in tn) if (Object.keys(tn[t]).includes(e)) return t;
  return "en";
}
function Zs() {
  const e = An();
  return { ja: "JPY", en: "USD" }[e] || "USD";
}
function Js() {
  const e = An();
  return { ja: "JP" }[e] || "";
}
const oo = "localizedRedirect",
  pt = An();
Zs();
const ec = Js(),
  Sr = pt !== "en",
  tc = Sr && !localStorage.getItem(oo),
  rc = (e = "true") => {
    localStorage.setItem(oo, e);
  },
  nc = function (e) {
    return Sr && ![pt, "en"].includes(e) ? pt : e;
  },
  io = "phemex-auth-token",
  ac = "x-phemex-site",
  ut = {
    readToken: null,
    writeToken: null,
    removeToken: null,
    readBid: null,
    readLanguage: null,
  },
  f = { init: ic, get: cc, post: uc, put: lc, delete: dc },
  oc = new d(!1);
function ic(e) {
  Object.assign(ut, e), oc.next(!0);
}
function sc(e, t) {
  e.setRequestHeader("bid", ut.readBid()),
    e.setRequestHeader("Accept-Language", ut.readLanguage()),
    e.setRequestHeader("x-phemex-request-tracing", Ja.build()),
    Sr && e.setRequestHeader(ac, ec);
  const r = ut.readToken();
  r && e.setRequestHeader(io, r),
    t && Object.keys(t).forEach((n) => e.setRequestHeader(n, t[n]));
}
function yr(e) {
  e = e || {};
  const t = e.querystring
      ? "?" + e.querystring
      : e.query
      ? "?" + Q.stringify(e.query)
      : "",
    r = e.url + t,
    n = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
  n.onreadystatechange = () => {
    if (n.readyState === 2) {
      const o = n.getResponseHeader(io);
      o && (ut.writeToken(o), I.send("http", "token-change", { token: o }));
    }
    if (n.readyState === 4) {
      const o = n.status;
      if ((o >= 200 && o < 300) || o === 400) {
        const i = JSON.parse(n.responseText);
        if (i.code === 0) {
          e.success && e.success(e.formatter ? e.formatter(i.data) : i.data, i);
          return;
        }
        if (e.fail) {
          e.fail({ code: i.code, message: i.msg }, i), vt(r, i.code, n);
          return;
        }
      }
      if (o === 401) {
        const i = JSON.parse(n.responseText);
        ut.removeToken(), I.send("http", "401", { reply: i }), vt(r, i.code, n);
        return;
      }
      if (o === 403) {
        e.fail({ code: 403, message: "Request denied" }, null), vt(r, 403, n);
        return;
      }
      if (o === 429) {
        const i = "Too many requests, Please try again later";
        e.fail({ code: o, message: i }, null),
          I.send("toast", "error", { message: i }),
          vt(r, o, n);
        return;
      }
      e.fail &&
        (console.warn("network:", o),
        e.fail({ code: 499, message: "network error" }, null),
        vt(r, 499, n));
    }
  };
  const a = e.params ? JSON.stringify(e.params) : null;
  n.open(e.type, r, !0), sc(n, e.headers), n.send(a);
}
function cc(e, { query: t, ...r }) {
  return new Promise((n) =>
    yr({
      url: e,
      type: "GET",
      query: t,
      success(a, o) {
        n({ data: a, reply: o });
      },
      fail(a, o) {
        n({ error: a, reply: o });
      },
      ...r,
    })
  );
}
function uc(e, { query: t, params: r, ...n }) {
  return new Promise((a) =>
    yr({
      url: e,
      type: "POST",
      headers: { "Content-Type": "application/json" },
      query: t,
      params: r,
      success(o, i) {
        a({ data: o, reply: i });
      },
      fail(o, i) {
        a({ error: o, reply: i });
      },
      ...n,
    })
  );
}
function lc(e, { query: t, params: r, ...n }) {
  return new Promise((a) =>
    yr({
      url: e,
      type: "PUT",
      headers: { "Content-Type": "application/json" },
      query: t,
      params: r,
      success(o, i) {
        a({ data: o, reply: i });
      },
      fail(o, i) {
        a({ error: o, reply: i });
      },
      ...n,
    })
  );
}
function dc(e, { query: t, params: r, ...n }) {
  return new Promise((a) =>
    yr({
      url: e,
      type: "DELETE",
      query: t,
      params: r,
      success(o, i) {
        a({ data: o, reply: i });
      },
      fail(o, i) {
        a({ error: o, reply: i });
      },
      ...n,
    })
  );
}
function vt(e, t, { status: r, responseText: n }) {
  t !== 31108 &&
    et.track("web_debug", {
      debug_type: "http_error",
      debug_info: { url: e, status: r, responseText: n },
    });
}
const On = "phemex-auth-token";
function wn() {
  return localStorage.getItem(On);
}
function Xg(e) {
  localStorage.setItem(On, e);
}
function pc() {
  localStorage.removeItem(On);
}
const lt = {
    en: { browser: "en", html: "en-US", appStore: "us", name: "English" },
    ru: { browser: "ru", html: "ru-RU", appStore: "ru", name: "Русский" },
    ja: { browser: "ja", html: "ja-JP", appStore: "jp", name: "日本語" },
    es: { browser: "es", html: "es-ES", appStore: "es", name: "Español" },
    de: { browser: "de", html: "de-DE", appStore: "de", name: "Deutsch" },
    fr: { browser: "fr", html: "fr-FR", appStore: "fr", name: "Français" },
    tr: { browser: "tr", html: "tr-TR", appStore: "tr", name: "Türkçe" },
    pt: { browser: "pt", html: "pt-PT", appStore: "pt", name: "Português" },
    vi: { browser: "vi", html: "vi-VN", appStore: "vi", name: "tiếng Việt" },
  },
  so = "lang";
function co() {
  let e = fc();
  tc && (rc(), (e = pt));
  let t = localStorage.getItem(so) || e;
  return (t = nc(t)), lt.hasOwnProperty(t) ? t : "en";
}
function uo(e) {
  localStorage.setItem(so, e);
}
function fc() {
  const e = Object.keys(lt),
    t = (navigator.language || navigator.userLanguage).substring(0, 2),
    r = e.find((a) => lt[a].browser === t);
  if (r === "ko") return "en";
  const n = lt[r];
  return n ? n.browser : "en";
}
const Zt =
    { BASE_URL: "/trade/js", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }
      .VITE_DEV_HOST || (Ie.isLocal ? "phemex.com" : Xs(location.hostname)),
  ma = V.getMockPrefix(),
  xe = {
    API: ["https://api10", Zt].join(Ta(Zt)) + ma,
    WS: ["wss://ws10", Zt].join(Ta(Zt)) + ma,
    STATIC_URL: "https://static.phemex.com",
    TEST_NET: gc(),
    IMG_URL: "https://img.phemex.com",
  };
function gc() {
  return Ie.isTestNet ? location.origin : "https://testnet.phemex.com";
}
function Ta(e) {
  return e.split(".").length === 2 ? "." : "-";
}
const Yr = localStorage.getItem("ty_show_log") === "Y",
  lo = {
    setUid(e) {
      const t = window.TINGYUN;
      t && t.setUid && (Yr && console.log("[TY] SetUid:", e), t.setUid(e));
    },
    createEvent(e) {
      if (document.visibilityState !== "visible") {
        Yr && console.log("[TY] ignore NewAction:", e);
        return;
      }
      const t = window.TINGYUN;
      t &&
        t.newEvent &&
        (Yr && console.log("[TY] newEvent:", e),
        t.newAction({ key: e.phase, duration: e.duration }, !0),
        t.newEvent({
          name: "ws_connection",
          msg: "",
          status: "success",
          context: { ...e, url: window.location.href },
        }));
    },
  };
class mc extends L {
  init(t) {
    (this.worker = t()),
      this.worker.subscribe("message", ({ data: r }) => {
        if (this.closed) throw new Error();
        if (!this.isStopped) {
          const { observers: n } = this,
            a = n.length,
            o = n.slice();
          for (let i = 0; i < a; i++) o[i].next(r);
        }
      });
  }
  next(t) {
    this.worker && this.worker.postMessage(t);
  }
}
const S = new mc();
Ie.isBot ||
  S.pipe(g((t) => t.type === "worker-ready")).subscribe(() =>
    S.next({ type: "ws-url", url: xe.WS })
  );
S.pipe(g((e) => e.type === "tingyun-event")).subscribe(({ data: e }) =>
  lo.createEvent(e)
);
const Tc = S.pipe(
    g((e) => e.type === "orderbook"),
    u((e) => e.data.book),
    N(po()),
    O(1)
  ),
  Zg = S.pipe(
    g((e) => e.type === "fixation-order-book"),
    u((e) => e.data.book),
    N(po()),
    O(1)
  );
function po() {
  return { bids: [], asks: [], bid1Ep: 0, ask1Ep: 0 };
}
const In = new d("Init"),
  bc = In.pipe(g((e) => e === "Opening")),
  Ce = In.pipe(g((e) => e === "Opened")),
  rn = new d(0),
  ba = new d(0);
S.pipe(
  g((e) => e.type === "ws-status"),
  u((e) => e.data.status)
).subscribe((e) => In.next(e));
bc.subscribe(() => rn.next(rn.getValue() + 1));
Ce.subscribe(() => {
  S.next({ type: "ty-ready" }), rn.next(0), ba.next(ba.getValue() + 1);
});
const fo = new d([]);
Ce.subscribe(() => fo.next([]));
S.pipe(
  g((e) => e.type === "trades"),
  u((e) => e.data.trades)
).subscribe((e) => fo.next(e));
const C = {
  floor(e, t, r = 0) {
    if (isNaN(e) || e === "" || e === 1 / 0) return "";
    const n = e < 0 ? -1 : 1;
    return y(e).abs().times(y(10).pow(-r)).round(t, 0).times(n).toFixed(t);
  },
  round(e, t, r = 0) {
    if (isNaN(e) || e === "") return "";
    const n = e < 0 ? -1 : 1;
    return y(e).abs().times(y(10).pow(-r)).round(t).times(n).toFixed(t);
  },
  ceil(e, t, r = 0) {
    if (isNaN(e) || e === "") return "";
    const n = e < 0 ? -1 : 1;
    return y(e).abs().times(y(10).pow(-r)).round(t, 3).times(n).toFixed(t);
  },
  roundPriceEp(e, t) {
    return Number(y(e).div(t).round().times(t));
  },
  delimit(e) {
    const t = String(e);
    let r = "(\\d)(?=(\\d{3})+\\.)";
    return (
      t.indexOf(".") < 0 && (r = "(\\d)(?=(\\d{3})+$)"),
      t.replace(new RegExp(r, "g"), "$1,")
    );
  },
  pad(e) {
    return (e < 10 ? "0" : "") + String(e);
  },
  priceToEp(e, t = 4) {
    if (isNaN(e) || e === "" || e === 0) return 0;
    const r = y(10).pow(t);
    return Number(y(String(e).trim()).times(r));
  },
  abbreviateNumber(e, t = 2) {
    const r = e.toString();
    if (e < 1e3) return this.floor(r, t);
    const n = [
      { number: 1e3, unit: "K" },
      { number: 1e6, unit: "M" },
      { number: 1e9, unit: "B" },
      { number: 1e12, unit: "T" },
      { number: 1e15, unit: "P" },
      { number: 1e18, unit: "E" },
    ];
    let a;
    for (a = n.length - 1; a > 0 && !(e >= n[a].number); a--);
    const o = n[a];
    if (!o) return r;
    const { number: i, unit: s } = o;
    return (
      this.floor(
        (e / i).toString().replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1"),
        t
      ) + s
    );
  },
  unAbbreviateNumber(e) {
    const t = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, P: 1e15, E: 1e18 },
      r = ("" + e).replace(/,/g, ""),
      n = Object.keys(t).find((a) => r.endsWith(a));
    return n ? parseFloat(r.slice(0, -1)) * t[n] : parseFloat(r);
  },
  startWithNumber(e) {
    return /^\d/.test(e);
  },
  parseInt(e) {
    const t = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, P: 1e15, E: 1e18 },
      r = Object.keys(t).find((n) => e.endsWith(n));
    return r ? parseInt(e.slice(0, -1)) * t[r] : parseInt(e);
  },
  trimEnd0(e) {
    return e.replace(/(\.\d*?)0+$/g, "$1").replace(/\.$/, "");
  },
};
function Jg(e, t = 0) {
  return Number(y(e).round(t, y.roundDown));
}
function Ec(e, t) {
  return we(y(e).minus(t));
}
function Sc(e, t) {
  return we(y(e).plus(t));
}
function Ot(e, t) {
  return we(y(e).times(t));
}
function xt(e, t, r = -1, n = 1) {
  return r === -1 ? we(y(e).div(t)) : ar(y(e).div(t), r, n);
}
function Ea(e, ...t) {
  return t.length === 0
    ? we(e)
    : we(t.reduce((r, n) => (r.gt(n) ? y(n) : r), y(e)));
}
function em(e, ...t) {
  return t.length === 0
    ? we(e)
    : we(t.reduce((r, n) => (r.gt(n) ? r : y(n)), y(e)));
}
function nr(e, t) {
  return y(e).gt(t);
}
function yc(e, t) {
  return y(e).gte(t);
}
function _c(e, t) {
  return y(e).lt(t);
}
function tm(e, t) {
  return y(e).lte(t);
}
function hc(e, t) {
  return y(e).eq(t);
}
function Sa(e, t = !1) {
  const r = y(10).pow(y(e).toNumber());
  return t ? we(r) : r;
}
function ar(e, t = 8, r = 1) {
  return y(e).round(t, r).toFixed(t);
}
function rm(e) {
  return we(y(e).abs());
}
function we(e) {
  const t = y(e).abs().toString(),
    r = y(e).gte(0) ? "" : "-";
  if (!/e/.test(t)) return r + t;
  const n = Number(t.match(/\d+$/)[0]),
    a = t.match(/^[\d\.]+/)[0].replace(/\./, "");
  return /e-/.test(t)
    ? r + a.padStart(n + a.length, "0").replace(/^0/, "0.")
    : a.length < n
    ? r + a.padEnd(n + 1, "0")
    : r + a.substring(0, n + 1) + "." + a.substring(n + 1);
}
const nm = {
  create(e, t = {}, r) {
    const n = new e({ target: r || document.body, props: t, intro: !0 }),
      a = ya(n);
    return n.$on("close", a), n;
  },
  wait(e, t) {
    return new Promise((r) => {
      const n = new e({ target: document.body, props: t(r), intro: !0 }),
        a = ya(n);
      n.$on("close", a);
    });
  },
};
function ya(e) {
  const t = () => {
    window.removeEventListener("popstate", t, !1), e && e.$destroy();
  };
  return window.addEventListener("popstate", t), t;
}
const am = {
    gotoLogin(e, t) {
      const r = {
        target: window.location.href,
        action: "Target",
        ...(t || {}),
      };
      if (Ie.isLocal) {
        const n = (
          {
            BASE_URL: "/trade/js",
            MODE: "production",
            DEV: !1,
            PROD: !0,
            SSR: !1,
          }.VITE_DEV_HOST || ""
        ).replace(/\.?(phemex|cmexpro)\.com/, "");
        Object.assign(r, { proxyEnv: n });
      }
      window.location.assign([e, "?", Q.stringify(r)].join(""));
    },
  },
  go = (e) => {
    const t = new Date(e),
      r = t.getFullYear(),
      n = t.getMonth() + 1,
      a = t.getDate();
    return [r, n, a].map(C.pad).join("-");
  },
  Cn = (e) => {
    const t = new Date(e),
      r = t.getHours(),
      n = t.getMinutes(),
      a = t.getSeconds();
    return [r, n, a].map(C.pad).join(":");
  },
  Rc = (e) => {
    const t = new Date(e),
      r = t.getMonth() + 1,
      n = t.getDate();
    return [r, n].map(C.pad).join("-");
  },
  vc = (e) => [Rc(e), Cn(e)].join(" "),
  Ac = (e) => [go(e), Cn(e)].join(" "),
  Oc = (e) => {
    const t = new Date(e),
      r = t.getUTCFullYear(),
      n = t.getUTCMonth() + 1,
      a = t.getUTCDate();
    return [r, n, a].map(C.pad).join("-");
  },
  wc = (e) => {
    const t = new Date(e),
      r = t.getUTCHours(),
      n = t.getUTCMinutes(),
      a = t.getUTCSeconds();
    return [r, n, a].map(C.pad).join(":");
  };
function Ic() {
  const e = Date.now(),
    t = 1e3 * 60 * 60 * 24,
    r = new Date().getTimezoneOffset() / 60;
  return e - ((e - r) % t);
}
function Cc() {
  const e = Date.now(),
    t = 1e3 * 60 * 60 * 24;
  return e - (e % t);
}
const Dc = (e) => {
    e = e / 1e3;
    const t = Math.floor(e / 3600 / 24),
      r = Math.floor((e - t * 3600 * 24) / 3600);
    return `${t}d ${r}h`;
  },
  Hr = {
    formatDate: go,
    formatMonthDayTime: vc,
    formatTime: Cn,
    formatDateTime: Ac,
    formatUTCDate: Oc,
    formatUTCTime: wc,
    getTodayZeroTime: Ic,
    getTodayUTCZeroTime: Cc,
    formatDiffTime: Dc,
  },
  mo = new d(new Map());
Ce.subscribe(() => mo.next(new Map()));
S.pipe(
  g((e) => e.type === "index-price"),
  u((e) => e.data.prices)
).subscribe((e) => mo.next(e));
function Nc(e, t) {
  const r = "." + t;
  return e.has(r) ? e.get(r) : null;
}
function om(e, t) {
  const r = Nc(e, t);
  return r ? xt(r.priceEp, r.priceFactor) : null;
}
const To = new d([]);
S.pipe(
  g((e) => e.type === "contract-orders-active"),
  u((e) => e.data.orders)
).subscribe((e) => To.next(e));
const bo = new d([]);
S.pipe(
  g((e) => e.type === "contract-orders-conditional"),
  u((e) => e.data.orders)
).subscribe((e) => bo.next(e));
const Eo = new d([]);
S.pipe(g((e) => e.type === "contract-orders-fill")).subscribe((e) =>
  Eo.next(e.data.orders)
);
const So = new d([]);
S.pipe(
  g((e) => e.type === "contract-orders-history"),
  u((e) => e.data.orders)
).subscribe((e) => So.next(e));
Ce.subscribe(() => {
  To.next([]), bo.next([]), Eo.next([]), So.next([]);
});
const Jt = V.isMock(),
  p = {
    USER_LOGIN: "/users/login",
    USER_INFO: "/tokens/self",
    USER_LOGOUT: "/phemex-user/users/logout",
    USER_PREFERENCE: "/phemex-user/users/preference",
    PUBLIC_MISC: "/phemex-user/public/misc",
    USER_MEMBER_LEVEL: "/phemex-account/users/member/level",
    PUBLIC_GEO_V2: "/phemex-user/public/v2/geo",
    ACCOUNT_BIZ_GRAY: "/phemex-account/biz-gray",
    IM_ROBOT_INFO: "/phemex-im-server/public/data/zendesk/robot",
    CONFIG_PRODUCTS: "/public/products",
    CONFIG_PRODUCTS_PLUS: "/public/products-plus",
    ACCOUNT_TRANSFER: "/accounts/transfer",
    SUB_ACCOUNT_LIST: "/phemex-user/users/children",
    SUB_ACCOUNT_SWITCH: "/phemex-user/users/switch",
    MASTER_ACCOUNT_SWITCHBACK: "/phemex-user/users/switchBack",
    USER_TAG: "/phemex-client-data/users/tag/query",
    UPDATE_PROFILE: "/phemex-user/users/updateProfile",
    USER_CHILDREN: "/phemex-user/users/children",
    SWITCH_ACCOUNT: "/phemex-user/users/children/basic/info",
    ACCOUNT_TRANSFER_MAIN_SUB:
      "/exchanger-core/wallets/account/main-sub-transfer",
    CHILDREN_ASSETS: "/phemex-user/users/children/assets",
    CHILDREN_ASSETS_V2: "/phemex-user/users/v2/children/assets",
    CHILDREN_ASSETS_UTA: "/phemex-user/users/children/uta-assets",
    ORDER_LIMIT: "/orders",
    ORDER_MODIFY: "/orders",
    ORDER_CANCEL: "/orders",
    ORDER_CANCEL_ALL: "/orders/all",
    G_ORDER: "/g-orders",
    G_ORDER_MODIFY: "/g-orders",
    G_ORDER_CANCEL: "/g-orders",
    G_ORDER_CANCEL_ALL: "/complex-orders/cancel-all",
    SCALED_ORDERS: "/orders/scaled",
    SCALED_G_ORDERS: "/g-orders/scaled",
    SCALED_PREVIEW: "/contract-biz/scaled/order/preview",
    POSITION_LEVERAGE: "/positions/leverage",
    POSITION_LEVERAGE_V2: "/g-positions/leverage",
    POSITION_RISK_LIMIT: "/positions/riskLimit",
    G_POSITION_RISK_LIMIT: "/g-positions/riskLimit",
    G_POSITION_SWITCH_POS_MODE: "/g-positions/switch-pos-mode-sync",
    POSITION_CLOSE_ALL: "/complex-orders/close-all",
    POSITION_MARGIN_MODIFY: "/positions/assign",
    G_POSITION_MARGIN_MODIFY: "/g-positions/assign",
    POSITION_CLOSED_LIST: "/phemex-user/order/closedPositionList",
    POSITION_CLOSED_LIST_V2: Jt
      ? "/phemex-user/mock/closedPositionList"
      : "/phemex-user/order/v2/closedPositionList",
    INDEX_QUOTE: "/phemex-user/margins/v2/quote",
    MARGIN: "/phemex-user/margins/v2",
    TRANSFER: "/exchanger-core/wallets/v3/transfer",
    KLINE: "/phemex-user/public/md/kline",
    KLINE_V2: "/phemex-user/public/md/v2/kline/list",
    TREND: "/phemex-user/public/md/v2/trend",
    CNT_COLLECTION: "/phemex-kol-global/public/agent/group/click",
    ORDER_BOOK_PERM: "/orderbook/perm",
    ORDER_BOOK_ADJUST: "/orderbook/adjust ",
    ANNOUNCEMENTS_RECENT: "/",
    ACTIVITY_CONTENTS_VIEW_LOGOUT: "/phemex-activity/public/data/contents/list",
    ACTIVITY_CONTENTS_VIEW_LOGIN: "/phemex-activity/contents/list",
    BROWSE_TIME: "/phemex-activity/contents/browse-time",
    GET_TASKS: "/phemex-user/tasks/list",
    KYC_SUMMARY: "/phemex-kyc/kyc/summary",
    PROMOTIONS: "/phemex-user/public/promotions",
    SPOT_ORDER_CREATE: "/spot/orders",
    SPOT_ORDER_MODIFY: "/spot/orders",
    SPOT_ORDER_CANCEL: "/spot/orders",
    SPOT_ORDER_CANCEL_ALL: "/spot/orders/all",
    MEMBERSHIP_INFO: "/phemex-user/membership/baseMembershipInfo",
    RECEIVE: "/phemex-user/membership/drawMembershipFromPresent",
    BASE_MEMBER_INFO: "/phemex-user/membership/baseMembershipInfo",
    MEMBERSHIP_PURCHASE_PLANS:
      "/phemex-user/membership/view/membershipPurchasePlans",
    MEMBERSHIP_PURCHASE: "/phemex-user/membership/purchase",
    USER_KYC_INFO: "/phemex-user/membership/user-kyc-info",
    COIN_INFO: "/phemex-common-service/public/data/coin/info",
    INVESTMENT_PRODUCT: "/phemex-wm/public/product/v2/on-sale",
    COIN_BASIC_LIST: Jt
      ? "/phemex-common-service/public/data/mock/coin/basic/list"
      : "/phemex-common-service/public/data/coin/basic/list",
    COIN_INFO_LIST: Jt
      ? "/phemex-common-service/public/data/mock/coin/info/list"
      : "/phemex-common-service/public/data/coin/info/list",
    TRADING_FEE_RATE: "/spot-wallet-assets/trading-fee-rate",
    MEMBER_IS_PREMIUM: "/phemex-user/users/member/is-premium",
    MEMBER_STAGE: "/phemex-user/users/public/member/stage",
    ABTEST: "/phemex-common-service/abtest",
    PRIVACY_COIN: "/phemex-user/public/compliance/privacy/coin",
    EARN_CRYPTO_PRODUCT_LIST: "/phemex-wm/public/product/v3/on-sale",
    FAVORITES_LIST: "/phemex-user/users/favorites/list",
    OPERATE_FAVORITE: "/phemex-user/users/favorites",
    OPERATE_FAVORITE_CONTRACT: "/phemex-user/users/favorites/contract",
    CONTRACT_OPERATE_FAVORITE: "/phemex-user/users/favorites/contract",
    FAVORITES_MERGE: "/phemex-user/users/favorites/merge",
    CHILDREN_BASIC_INFO: "/phemex-user/users/children/basic/info",
    CATEGORY_LIST: "/phemex-common-service/public/data/category/list",
    COPY_TRADE_ABTEST: "/phemex-lb/abtest",
    COPY_TRADE_TRADER_SETTING: "/phemex-lb/trader/copying-symbols",
    KYC_COUNTRY_DOCUMENT_TYPES: "/phemex-kyc/kyc/base-kyc/support-document",
    KYC_BASIC_INFO: "/phemex-kyc/kyc/base-kyc/query",
    KYC_BASIC_SUBMIT: "/phemex-kyc/kyc/base-kyc/submit",
    BASE_KYC_CHECK: "/phemex-kyc/kyc/base-kyc/check",
    KYC_COUNTRIES: "/phemex-kyc/kyc/base-kyc/country-list",
    GET_BONUS: "/phemex-activity/general/public/val",
    WEB_RECOMMEND: "/phemex-predict/public/data/web/recommend",
    CUSTOMIZE_BIZ: "/contract-biz/cfg/customize/update",
    CUSTOMIZE_QUERY: "/contract-biz/cfg/customize/query",
    WELCOME_BONUS_AMOUNT: "/phemex-activity/public/data/welcome/amount",
    MOCK_TRADING_TASK: "/phemex-activity/operation/task/list",
    MOCK_TRADING_TASK_SUBMIT: "/phemex-activity/operation/task/submit",
    MARGIN_ACCOUNT_ACTIVATE: "/phemex-account/accounts/margin/open",
    MARGIN_BORROW: "/margin/borrow",
    MARGIN_REPAY: "/margin/payback",
    MARGIN_TRANSFER: "/exchanger-core/wallets/account/transfer",
    MARGIN_SYS_REMAINING_BORROW: "/margin-trade/wallets/query-firm-account",
    MARGIN_SYS_REMAINING_BORROW_UTA:
      "/uta/margin-trade/wallets/query-firm-account",
    COMMON_GRAY: "/phemex-user/biz-gray",
    MT_WALLETS: "/margin/query-wallets",
    MARGIN_ORDER_CREATE: "/margin-trade/orders",
    MARGIN_ORDER_MODIFY: "/margin-trade/orders",
    MARGIN_ORDER_CANCEL: "/margin-trade/orders",
    MARGIN_ORDER_CANCEL_ALL: "/margin-trade/orders/all",
    UTA_MARGIN_ORDER: "/uta/margin-trade/orders",
    UTA_MARGIN_ORDER_CANCEL_ALL: "/uta/margin-trade/orders/all",
    CONTRACT_TRANSFER_CURRENCIES: "/public/supported-currencies",
    CONVERSION_SUPPORTED_CURRENCIES:
      "/exchanger-core/wallets/public/data/conversion/supported-currencies",
    CONTRACT_GRAY: "/phemex-user/contract-gray",
    CONTRACTBIZ_TPSLMODE_UPDATE: "/contract-biz/cfg/update-tpsl-mode",
    CONVERSION_QUOTE: "/exchanger-core/wallets/v3/conversion/quote",
    CONVERSION_WALLET: "/exchanger-core/wallets/v3/conversion",
    CONVERSION_CONTRACT:
      "/exchanger-core/wallets/contract/transfer-convert-transfer",
    CONVERT_UTA: "/exchanger-core/wallets/universal/convert",
    INNER_DIALOG: "/phemex-activity/dialog/available/list",
    INNER_DIALOG_TESTING: "/phemex-activity/dialog/tester/list",
    FIAT_BIZ_GARY: "/phemex-uni-trade/biz-gray",
    CONTRACT_TRADING_LIST: "/phemex-user/order/tradingList",
    CONTRACT_TRADING_LIST_V2: Jt
      ? "/phemex-user/mock/tradingList"
      : "/phemex-user/order/v2/tradingList",
    SPOT_TRADING_LIST: "/phemex-user/spot/order/trades",
    STRATEGY_AVAILABLE_SYMBOL: "/phemex-strategy/strategy/public/symbol-list",
    STRATEGY_CREATE_CONFIG:
      "/phemex-strategy/strategy/public/config-for-creation",
    STRATEGY_RECOMMEND_LIST: "/phemex-strategy/strategy/public/recommendation",
    STRATEGY_RECOMMEND_DETAIL: "/phemex-strategy/strategy/public/rec-params",
    STRATEGY_CREATE: "/phemex-strategy/strategy/create",
    STRATEGY_OPEN_LIST: "/phemex-strategy/strategy/my/all-open",
    STRATEGY_HISTORY_LIST: "/phemex-strategy/strategy/my/history",
    STRATEGY_INCREASE_BALANCE: "/phemex-strategy/strategy/increase-balance",
    STRATEGY_UPDATE_TPSL: "/phemex-strategy/strategy/adjust-tpsl",
    STRATEGY_UPDATE_TRIGGER: "/phemex-strategy/strategy/adjust-trigger",
    STRATEGY_START: "/phemex-strategy/strategy/start",
    STRATEGY_STOP: "/phemex-strategy/strategy/stop",
    STRATEGY_MARTIN_CREATE: "/phemex-strategy/strategy/martin/create",
    STRATEGY_MARTIN_RECOMMEND_LIST:
      "/phemex-strategy/strategy/public/data/martin/recommendation",
    STRATEGY_MARTIN_HISTORY_LIST: "/phemex-strategy/strategy/my/martin/history",
    STRATEGY_MARTIN_TPSL: "/phemex-strategy/strategy/martin/adjust-tpsl",
    STRATEGY_MARTIN_DETAIL:
      "/phemex-strategy/strategy/public/data/martin/rec-params",
    STRATEGY_MARTIN_UPDATE_STOP_CONDITION:
      "/phemex-strategy/strategy/update-stop-condition",
    STRATEGY_MARTIN_UPDATE_START_CONDITION:
      "/phemex-strategy/strategy/update-start-condition",
    STRATEGY_SIGNAL_CREATE: "/phemex-strategy/signal/create",
    STRATEGY_SIGNAL_UPDATE: "/phemex-strategy/signal/update",
    STRATEGY_SIGNAL_DELETE: "/phemex-strategy/signal/del",
    STRATEGY_SIGNAL_DETAIL: "/phemex-strategy/signal/detail",
    STRATEGY_SIGNAL_LIST: "/phemex-strategy/signal/list",
    STRATEGY_SIGNAL_STRATEGY_CREATE: "/phemex-strategy/strategy/signal/create",
    STRATEGY_SIGNAL_STRATEGY_ADJUST_TPSL:
      "/phemex-strategy/strategy/signal/adjust-tpsl",
    STRATEGY_SIGNAL_STRATEGY_HISTORY:
      "/phemex-strategy/strategy/my/signal/history",
    SOUL_PASS_QUALIFICATIONS: "/phemex-account/soul-pass/qualifications",
    SOUL_PASS_STATUS: "/phemex-account/soul-pass/status",
    SPOT_STRATEGY_OPEN_LIST: "/spot-strategy/strategy/my/open",
    SPOT_STRATEGY_HISTORY_LIST: "/spot-strategy/strategy/my/history",
    SPOT_STRATEGY_CREATE: "/spot-strategy/strategy/create",
    SPOT_STRATEGY_START: "/spot-strategy/strategy/start",
    SPOT_STRATEGY_STOP: "/spot-strategy/strategy/stop",
    SPOT_STRATEGY_CONFIG:
      "/spot-strategy/strategy/public/data/config-for-creation",
    SPOT_STRATEGY_SYMBOL_LIST:
      "/spot-strategy/strategy/public/data/symbol-list",
    SPOT_STRATEGY_UPDATE_TPSL: "/spot-strategy/strategy/adjust-tpsl",
    SPOT_STRATEGY_UPDATE_TRIGGER_PRICE:
      "/spot-strategy/strategy/adjust-trigger",
    SPOT_STRATEGY_RECOMMEND_LIST:
      "/spot-strategy/strategy/public/data/recommendation",
    SPOT_STRATEGY_RECOMMEND_DETAIL:
      "/spot-strategy/strategy/public/data/rec-params",
    VIP_PROFILE: "/phemex-account/users/vip/profile",
    VIP_FEE_CONFIG: "/phemex-account/public/data/users/fee-config",
    UTA_QUERY: "/phemex-account/users/unified-account/query",
    UTA_SPOT_UPGRADE_ANSWER_COMPLETED:
      "/phemex-account/users/unified-account/spot-upgrade/answer-completed",
    UTA_SPOT_UPGRADE_APPLY:
      "/phemex-account/users/unified-account/spot-upgrade/apply",
    UTA_SPOT_UPGRADE_CHECK_SUB:
      "/phemex-account/users/unified-account/spot-upgrade/check-sub",
    UTA_SPOT_UPGRADE_APPLY_SUB:
      "/phemex-account/users/unified-account/spot-upgrade/apply-sub",
    SPOT_PT_DISCOUNT: "/margin/currency/discount",
    CONTRACT_PT_DISCOUNT: "/g-accounts/set-account-status",
    LENDING_ASSETS_OVERVIEW: "/phemex-lending/assets/overview",
    LENDING_POOL: "/phemex-lending/pool",
    LENDING_PUBLIC_DATA_POOL: "/phemex-lending/public/data/pool",
    DATA_ASSETS_OVERVIEW: "/margin/assets/overview",
    MARKET_FAVORITE_GROUPS: "/phemex-account/users/favorite/group/query-all",
    MARKET_FAVORITE_GROUPS_ADD: "/phemex-account/users/favorite/group/add",
    MARKET_FAVORITE_GROUPS_DELETE:
      "/phemex-account/users/favorite/group/delete",
    MARKET_FAVORITE_GROUPS_RENAME:
      "/phemex-account/users/favorite/group/rename",
    MARKET_FAVORITE_INSTRUMENT_add:
      "/phemex-account/users/favorite/instrument/add",
    MARKET_FAVORITE_INSTRUMENT_DELETE:
      "/phemex-account/users/favorite/instrument/delete",
    MARKET_FAVORITE_INSTRUMENT_TOP:
      "/phemex-account/users/favorite/instrument/top",
    MARKET_FAVORITE_INSTRUMENT_SORT:
      "/phemex-account/users/favorite/instrument/sort",
  };
Object.keys(p).forEach((e) => (p[e] = [xe.API, p[e]].join("")));
const ge = {
    info() {
      return f.get(p.USER_INFO, {
        formatter(e) {
          return (e.isMain = e.parentId === 0), (e.isSub = !e.isMain), e;
        },
      });
    },
    logout() {
      return f.post(p.USER_LOGOUT, {});
    },
    getPreference() {
      return f.get(p.USER_PREFERENCE, {});
    },
    modifyPreference(e) {
      return f.post(p.USER_PREFERENCE, { params: e });
    },
    getTasks() {
      return f.get(p.GET_TASKS, {});
    },
    getTag(e = {}) {
      return f.get(p.USER_TAG, { query: e });
    },
    updateProfile(e) {
      return f.post(p.UPDATE_PROFILE, {
        params: e,
        formatter(t) {
          return (t.isMain = t.parentId === 0), (t.isSub = !t.isMain), t;
        },
      });
    },
    getTradeFeeRate(e) {
      return f.get(p.TRADING_FEE_RATE, { query: { quoteCurrencyList: e } });
    },
    getMemberIsPremium() {
      return f.get(p.MEMBER_IS_PREMIUM, {});
    },
    getMemberStage() {
      return f.get(p.MEMBER_STAGE, {});
    },
    getFavoriteList() {
      return f.get(p.FAVORITES_LIST, {});
    },
    addFavorite(e) {
      return f.post(p.OPERATE_FAVORITE, { params: e });
    },
    addFavoriteForContract(e) {
      return f.post(p.OPERATE_FAVORITE_CONTRACT, { params: e });
    },
    updateContractFavoriteOrder(e) {
      return f.put(p.CONTRACT_OPERATE_FAVORITE, { params: e });
    },
    delFavorite(e) {
      return f.delete(p.OPERATE_FAVORITE, e);
    },
    getFavoriteMerge() {
      return f.get(p.FAVORITES_MERGE, {});
    },
    favoriteMerge(e) {
      return f.post(p.FAVORITES_MERGE, { params: e });
    },
    getDocumentTypesByCountry(e) {
      return f.get(p.KYC_COUNTRY_DOCUMENT_TYPES, { query: { country: e } });
    },
    getUserBasicKycInfo() {
      return f.get(p.KYC_BASIC_INFO, {});
    },
    setBasicKycInfo(e) {
      return f.post(p.KYC_BASIC_SUBMIT, { params: e });
    },
    getCountries() {
      return f.get(p.KYC_COUNTRIES, {});
    },
    getBaseKycCheck() {
      return f.get(p.BASE_KYC_CHECK, {});
    },
    getBonus() {
      return f.get(p.GET_BONUS, {});
    },
    getUserMemberLevel() {
      return f.get(p.USER_MEMBER_LEVEL, {});
    },
    getRecommend(e) {
      return f.get(p.WEB_RECOMMEND, { query: e });
    },
    getPublicGeoV2() {
      return f.get(p.PUBLIC_GEO_V2, {});
    },
    customizeBiz(e) {
      return f.post(p.CUSTOMIZE_BIZ, { params: e });
    },
    customizeQuery() {
      return f.get(p.CUSTOMIZE_QUERY, {});
    },
    getUserBizGray() {
      return f.get(p.ACCOUNT_BIZ_GRAY, {});
    },
    getUtaInfo() {
      return f.get(p.UTA_QUERY, {});
    },
    postUtaSpotUpgradeAnswerCompleted() {
      return f.post(p.UTA_SPOT_UPGRADE_ANSWER_COMPLETED, {});
    },
    postUtaSpotUpgradeApply() {
      return f.post(p.UTA_SPOT_UPGRADE_APPLY, {});
    },
    getUtaSpotUpgradeCheckSub() {
      return f.get(p.UTA_SPOT_UPGRADE_CHECK_SUB, {});
    },
    postUtaSpotUpgradeApplySub(e) {
      return f.post(p.UTA_SPOT_UPGRADE_APPLY_SUB, { query: e });
    },
    switchContractPtDiscount(e) {
      return f.post(p.CONTRACT_PT_DISCOUNT, { query: e });
    },
    switchSpotPtDiscount(e) {
      return f.post(p.SPOT_PT_DISCOUNT, { params: e });
    },
  },
  Dn = {
    switchToSubAccount(e) {
      return f.put(p.SUB_ACCOUNT_SWITCH, { query: { clientCnt: e } });
    },
    switchToMasterAccount() {
      return f.put(p.MASTER_ACCOUNT_SWITCHBACK, {});
    },
    getChildrenBaseInfo() {
      return f.get(p.CHILDREN_BASIC_INFO, {
        formatter(e) {
          return e.rows.map((t) => ({ ...t, isSub: t.parentId !== 0 }));
        },
      });
    },
    getSoulPassQualification() {
      return f.get(p.SOUL_PASS_QUALIFICATIONS, {});
    },
    getSoulPassStatus() {
      return f.get(p.SOUL_PASS_STATUS, {});
    },
    postUserChildren(e = {}) {
      return f.post(p.USER_CHILDREN, { params: e });
    },
    getSwitchAccount() {
      return f.get(p.SWITCH_ACCOUNT, {
        formatter(e) {
          return e.rows.forEach((t) => (t.isSub = t.parentId !== 0)), e;
        },
      });
    },
    postAccountTransferMainSub(e) {
      return f.post(p.ACCOUNT_TRANSFER_MAIN_SUB, { params: e });
    },
    getChildrenAssetsUta(e) {
      return f.get(p.CHILDREN_ASSETS_UTA, { query: e });
    },
    getChildrenAssetsV2(e) {
      return f.get(p.CHILDREN_ASSETS_V2, { query: e });
    },
    getChildrenAssets(e) {
      return f.get(p.CHILDREN_ASSETS, { query: e });
    },
  },
  Mt = {
    marginAccountActivate() {
      return f.post(p.MARGIN_ACCOUNT_ACTIVATE, {});
    },
    borrow(e) {
      return f.post(p.MARGIN_BORROW, { params: e });
    },
    replay(e) {
      return f.post(p.MARGIN_REPAY, { params: e });
    },
    transfer(e) {
      return f.post(p.MARGIN_TRANSFER, { params: e });
    },
    getSysRemainingBorrow(e) {
      return f.get(p.MARGIN_SYS_REMAINING_BORROW, { query: e });
    },
    getUtaSysRemainingBorrow(e) {
      return f.get(p.MARGIN_SYS_REMAINING_BORROW_UTA, { query: e });
    },
    getGray() {
      return f.get(p.COMMON_GRAY, {});
    },
    getWallets(e = {}) {
      return f.get(p.MT_WALLETS, { query: e });
    },
  },
  Pc = 4,
  im = 2,
  Lc = 0.2,
  sm = Lc * 100 + "%",
  xc = 0.1,
  cm = xc * 100 + "%",
  Yt = {
    getProductList() {
      return f.get(p.CONFIG_PRODUCTS_PLUS, {
        formatter(e) {
          let {
            currencies: t,
            products: r,
            riskLimits: n,
            leverages: a,
            leveragesV2: o = [],
            perpProductsV2: i = [],
            riskLimitsV2: s = [],
            collaterals: c = [],
            marginRiskLevels: m = null,
            tradeLevels: l,
            leverageMargins: b = [],
          } = e;
          (a = a || []), (c = c || []);
          const T = Mc(t),
            E = [...r.filter((P) => P.type === "Perpetual"), ...i],
            _ = [...n, ...Vc(s)],
            D = Uc(E, T, _),
            x = Gc(_, E),
            k = r.filter((P) => P.type === "Spot"),
            v = Bc(k, T),
            B = Wc([...$c(a), ...Fc(o)], "initialMarginEr");
          return {
            currencies: T,
            contracts: D,
            spots: v,
            riskLimits: x,
            leverages: B,
            riskLimitsV2: s,
            collaterals: c,
            marginRiskLevels: m,
            tradeLevels: l,
            leverageMargins: b,
          };
        },
      });
    },
    getPromotions(e) {
      return f.get(p.PROMOTIONS, { query: e });
    },
    getFiatConfig(e = {}) {
      return f.get(p.PUBLIC_MISC, e);
    },
    getCoinBasic() {
      return f.get(p.COIN_BASIC_LIST, {});
    },
    getCoinInfoList(e) {
      return f.get(p.COIN_INFO_LIST, { query: e });
    },
    getPrivateCoin() {
      return f.get(p.PRIVACY_COIN, {});
    },
    getCategory(e) {
      return f.get(p.CATEGORY_LIST, {
        query: e,
        formatter({ total: t, rows: r }) {
          const n = r.map((a) => {
            const { coins: o, ...i } = a;
            return { ...i, coins: o.map((s) => s.replace(" ", "")) };
          });
          return { total: t, rows: n };
        },
      });
    },
    getConversionPairs(e) {
      return f.get(p.CONVERSION_SUPPORTED_CURRENCIES, { query: e });
    },
  };
function Mc(e) {
  return e.map(
    (t) => (
      (t.symbol = t.currency), (t.valueFactor = Math.pow(10, t.valueScale)), t
    )
  );
}
function Uc(e, t, r) {
  return e.map((n) => {
    const {
        settleCurrency: a,
        quoteCurrency: o,
        contractUnderlyingAssets: i,
        type: s,
      } = n,
      c = i.indexOf(" ") > -1 && C.startWithNumber(i);
    let m = i;
    c && (m = i.split(" ")[1]);
    const l = i.replaceAll(" ", ""),
      b = a === o ? m : a;
    let T = t.find((P) => P.currency === a);
    T ||
      (console.warn(
        "not found config for " + a + " settle currency in currencies list"
      ),
      (T = nn(a)));
    const { valueScale: E } = T,
      _ = t.find((P) => P.currency === b),
      { steps: D } = r.find((P) => P.symbol === n.symbol) || {};
    (n.contractSide = a === o ? 1 : -1),
      (n.baseCurrencyName = _ ? _.name : b),
      (n.baseCurrency = c ? l : b),
      (n.ratioFactor = Math.pow(10, n.ratioScale)),
      (n.ratioPrecision = 2),
      (n.valuePrecision = a === "USD" ? 2 : 4),
      (n.riskLimitSteps = D);
    const x = n.contractSide > 0 ? b : o,
      k = n.contractSide > 0 ? i : o;
    (n.pairName = a === o ? l + o : a + o), (n.symbolV2 = n.pairName);
    const v = s === "PerpetualV2";
    (n.isSupportHedge = v),
      (n.qtyPrecision = v ? n.qtyPrecision : 0),
      (n.contPrecision = v ? n.qtyPrecision : 0),
      (n.settleValuePrecision = v ? n.qtyPrecision : 8),
      (n.qtyScale = v ? 0 : 8),
      (n.qtyFactor = v ? 1 : 1e8),
      (n.contTickSizeEv = v ? Number(n.qtyStepSize) : 1e8),
      (n.settleTickSizeEv = v ? Number(n.qtyStepSize) : 1),
      (n.status = Yc(n)),
      (n.contractSizePrecision = kc(n)),
      (n.priceScale = v ? 0 : Pc),
      (n.priceFactor = v ? 1 : 1e4),
      (n.tickSizeEp = n.tickSize * (v ? 1 : 1e4));
    const B = v ? 0 : E;
    return (
      (n.valueScale = B),
      (n.valueFactor = Math.pow(10, B)),
      (n.contractSize = v ? 1 : n.contractSize),
      (n.minPriceEp = v ? Number(n.minPriceRp) : n.minPriceEp),
      (n.maxPriceEp = v ? Number(n.maxPriceRp) : n.maxPriceEp),
      (n.contAmount = c ? k : String(n.contractSize) + x),
      (n.tickSizeEv = (a === "USD" ? 0.01 : 1e-4) * n.valueFactor),
      (n.maxOrderQty = v ? Number(n.maxOrderQtyRq) : n.maxOrderQty),
      (n.tipOrderQty = v ? Number(n.tipOrderQtyRq) : n.tipOrderQty),
      (n.qtyStepSize = Number(n.qtyStepSize || 0)),
      delete n.description,
      n
    );
  });
}
function kc(e) {
  if (e.isSupportHedge) return e.qtyPrecision;
  const { contractSize: t } = e;
  return t && t.toString().includes(".")
    ? t.toString().split(".")[1].length
    : 0;
}
function Bc(e, t) {
  return e.map((r) => {
    let n = t.find((o) => o.currency === r.baseCurrency),
      a = t.find((o) => o.currency === r.quoteCurrency);
    return (
      n ||
        (console.warn(
          "not found config for " +
            r.baseCurrency +
            " currency in currencies list"
        ),
        (n = nn(r.baseCurrency))),
      a ||
        (console.warn(
          "not found config for " +
            r.quoteCurrency +
            " currency in currencies list"
        ),
        (a = nn(r.quoteCurrency))),
      (r.name = n.name),
      (r.quoteName = a.name),
      (r.priceScale = n.valueScale),
      (r.displayBaseCurrency = n.displayCurrency),
      (r.pairName = n.symbol + a.symbol),
      (r.indexSymbol = "." + r.baseCurrency),
      (r.baseQtyScale = n.valueScale),
      (r.quoteQtyScale = a.valueScale),
      (r.baseQtyFactor = Math.pow(10, n.valueScale)),
      (r.quoteQtyFactor = Math.pow(10, a.valueScale)),
      (r.baseDeltaSizeEv = r.baseTickSizeEv),
      (r.baseDeltaSize = r.baseTickSizeEv / 1e8),
      (r.quoteDeltaSizeEv = 1e8),
      (r.quoteDeltaSize = 1),
      (r.quoteQtyTickSizeEv = Number(
        y(10).pow(Number(y(r.quoteQtyScale).minus(r.quoteQtyPrecision)))
      )),
      (r.quoteQtyTickSize = Number(y(10).pow(-r.quoteQtyPrecision))),
      (r.quoteTickSize = r.quoteTickSizeEv / 1e8),
      (r.baseQtyTickSizeEv = r.baseTickSizeEv),
      (r.baseQtyTickSize = r.baseTickSizeEv / 1e8),
      (r.status = Hc(r)),
      delete r.description,
      r
    );
  });
}
function Gc(e, t) {
  return e.map((r) => {
    const { symbol: n, riskLimits: a, steps: o } = r,
      i = t.find((c) => c.symbol === n);
    if (!i) {
      const c = a.map((m) => ((m.riskLimitEv = 0), m));
      return { symbol: n, steps: o, riskLimits: c };
    }
    const s = a.map((c) => ((c.riskLimitEv = c.limit * i.valueFactor), c));
    return { symbol: n, steps: o, riskLimits: s };
  });
}
function $c(e) {
  return e.map((t) => {
    const { initialMargin: r, initialMarginEr: n, options: a } = t,
      o = a.map((i) => ({ leverageEr: i * 1e8, leverage: i }));
    return { initialMargin: r, initialMarginEr: n, options: o };
  });
}
function Vc(e) {
  return e.map((t) => {
    const { symbol: r, riskLimits: n, steps: a } = t,
      o = n.map((i) => {
        const { limit: s, initialMarginRr: c, maintenanceMarginRr: m } = i,
          l = Number(s),
          b = Number(c),
          T = y(c).times(100) + "%",
          E = Number(m),
          _ = y(m).times(100) + "%";
        return {
          limit: s,
          riskLimitEv: l,
          initialMarginEr: b,
          maintenanceMarginEr: E,
          initialMargin: T,
          maintenanceMargin: _,
        };
      });
    return { symbol: r, steps: a, riskLimits: o };
  });
}
function Fc(e) {
  return e.map((t) => {
    const { initialMarginRr: r, options: n } = t,
      a = 1,
      o = n.map((s) => ({ leverageEr: Number(y(s).times(a)), leverage: s })),
      i = Number(y(r).times(a));
    return {
      initialMargin: C.floor(y(r).times(100), 1) + "%",
      initialMarginEr: i,
      options: o,
    };
  });
}
function Yc(e) {
  const [t, r, n, a, o] = (e == null ? void 0 : e.timeline) || [0, 0, 0, 0, 0],
    i = Date.now();
  return n === 0 && a === 0 && o === 0
    ? i < t
      ? "Init"
      : i < r
      ? "PreList"
      : "Listed"
    : i < t
    ? "Init"
    : i < r
    ? "PreList"
    : i < n
    ? "Listed"
    : i < a
    ? "Suspend"
    : i < o
    ? "Delisted"
    : "Hide";
}
function Hc(e) {
  const t = Date.now(),
    [r, n, , a, o] = (e == null ? void 0 : e.timeline) || [0, 0, 0, 0, 0];
  return a === 0 && o === 0
    ? t < r
      ? "Init"
      : t < n
      ? "PreList"
      : "Listed"
    : t < r
    ? "Init"
    : t < n
    ? "PreList"
    : t < a
    ? "Listed"
    : t < o
    ? "Delisted"
    : "Hide";
}
function nn(e) {
  return {
    code: 0,
    currency: e,
    displayCurrency: e,
    inAssetsDisplay: 1,
    maxValueEv: 5e18,
    minValueEv: 1,
    name: e,
    needAddrTag: 0,
    qtyPrecision: 8,
    status: "Listed",
    symbol: e,
    tickSizeEv: 1,
    valueFactor: 1e8,
    valuePrecision: 8,
    valueScale: 8,
  };
}
function Wc(e, t) {
  const r = new Map();
  return e.filter((n) => !r.has(n[t]) && r.set(n[t], 1));
}
const Ht = new d("USD"),
  Kc = new d("$"),
  zc = new d([]);
Ht.pipe(q()).subscribe((e) => S.next({ type: "update-fiat", currency: e }));
A([Ht, zc])
  .pipe(
    u(([e, t]) => t.find((r) => e === r.code)),
    g(Boolean),
    u((e) => e.sign),
    g(Boolean),
    q()
  )
  .subscribe((e) => Kc.next(e));
const De = new d(ho()),
  jc = new d({}),
  qc = new d(0),
  yo = new U(1),
  Qc = new d(nu()),
  Xc = new d(ru()),
  _o = new d(au());
function Zc() {
  De.next(ho()), Ht.next("USD");
}
De.pipe(g((e) => e.userId > 0)).subscribe(() =>
  Promise.all([eu(), tu(), Jc()])
);
async function Jc() {
  const { data: e } = await Mt.getGray();
  e && _o.next(e);
}
async function eu() {
  const { data: e } = await Dn.getSoulPassQualification();
  e && Xc.next(e);
}
async function tu() {
  const { data: e } = await Dn.getSoulPassStatus();
  e && Qc.next(e);
}
function ho() {
  return {
    avatar: "7ec0d398bea20b43.png",
    clientCnt: "",
    email: "",
    lang: "en",
    memberLevelCode: "",
    nickName: "",
    parentEmail: "",
    parentId: -1,
    previousUserId: 0,
    referralCode: "",
    referralType: -1,
    currency: "USD",
    roles: [],
    totp: -1,
    userId: 0,
    lastLoginTime: 0,
    isMain: !0,
    isSub: !1,
    subUsers: [],
    uta: { spot: 0 },
    createTime: 0,
    marginTradingAccountInfo: {
      marginAccountStatus: 0,
      marginBorrowSceneCheck: !1,
      marginTradeSceneCheck: !1,
      marginTransferInSceneCheck: !1,
      marginTransferOutSceneCheck: !1,
    },
    lendingAccount: { status: 0 },
  };
}
function ru() {
  return { userId: 0, qualified: !0, whitelisted: !1, tradingVolumeMet: !1 };
}
function nu() {
  return {
    clientId: 0,
    address: "",
    addressSource: "",
    chainName: "",
    status: -1,
    soulPassId: 0,
    chainTxHash: "",
    chainStatus: "",
    mintedCount: 0,
    revokedCount: 0,
  };
}
function au() {
  return { riskEngineMode: !1, strategyUserGray: !1, spotStrategyGrid: !1 };
}
const Nn = {
    info({ message: e }) {
      I.send("toast", "info", { message: e });
    },
    error(e) {
      I.send("toast", "error", e);
    },
  },
  yt = new d({});
async function ou() {
  const { data: e, error: t } = await ge.getPreference();
  e && yt.next(e), t && Nn.error(t);
}
function iu() {
  yt.next({});
}
async function Ro(e, t) {
  const { data: r, error: n } = await ge.modifyPreference({
    name: e,
    operation: t,
  });
  r && yt.next(r), n && Nn.error(n);
}
function tt(e, t = "symbol") {
  return e.reduce((r, n) => (r.set(n[t], n), r), new Map());
}
const vo = new d([]),
  _t = new U(1),
  su = _t.pipe(
    g((e) => e.length > 0),
    u((e) => tt(e, "currency")),
    N(new Map()),
    O(1)
  ),
  cu = _t.pipe(
    g((e) => e.length > 0),
    u((e) => tt(e, "code")),
    N(new Map()),
    O(1)
  ),
  _r = new U(1),
  uu = new d(0),
  Ao = new U(1),
  um = Ao.pipe(u((e) => tt(e, "index_id"))),
  Oo = _r.pipe(u((e) => tt(e, "symbol"))),
  ht = new U(1),
  lu = ht.pipe(u((e) => tt(e, "symbol"))),
  du = new U(1),
  wo = new U(1),
  Io = new U(1),
  hr = new d({ blackSymbols: [], levels: [] }),
  Co = new d({
    contracts: [],
    spots: [],
    riskLimits: [],
    leverages: [],
    collaterals: [],
    marginRiskLevels: null,
    leverageMargins: [],
  }),
  pu = new U(1),
  Do = new U(1),
  lm = ht.pipe(u(Tu), O(1)),
  Wt = new U(1),
  Fe = new U(1),
  dm = Fe.pipe(u((e) => tt(e, "symbol"))),
  fu = new U(1),
  rt = new U(1),
  gu = new U(1),
  Pn = new U(1),
  an = new U(1);
async function pm() {
  const { data: e, error: t } = await Yt.getProductList();
  if (e) {
    const { currencies: r, riskLimits: n, tradeLevels: a } = e;
    Co.next(e),
      vo.next(r),
      Io.next(n.reduce((o, i) => o.set(i.symbol, i.riskLimits), new Map())),
      hr.next(a || { blackSymbols: [], levels: [] });
  }
  t && console.warn("getProducts error", t);
}
async function fm() {
  const { data: e, error: t } = await Yt.getCoinBasic();
  e && wo.next(e.rows), t && console.warn("load coin basic list error", t);
}
async function gm(e) {
  const { data: t, error: r } = await Yt.getCoinInfoList({ lang: e });
  t && pu.next(tt(t.rows, "currency")),
    r && console.warn("load coin info list error", r);
}
async function mm() {
  const { data: e, error: t } = await Yt.getPrivateCoin();
  e && an.next(e),
    t &&
      an.next({ currencyList: [], spotSymbolList: [], contractSymbolList: [] });
}
async function Tm(e) {
  const { data: t } = await Yt.getCategory({ lang: e });
  t && Do.next(t.rows);
}
A([vo, wo])
  .pipe(u(([e, t]) => mu(e, t)))
  .subscribe((e) => _t.next(e));
A([Co, _t, an, Do]).subscribe(([e, t, r, n]) => {
  if (t.length === 0) return;
  const {
      contracts: a,
      spots: o,
      riskLimits: i,
      leverages: s,
      collaterals: c = [],
      marginRiskLevels: m,
      leverageMargins: l = [],
    } = e,
    { currencyList: b, contractSymbolList: T, spotSymbolList: E } = r,
    _ = t.filter((R) => b.indexOf(R.currency) === -1),
    D = a
      .filter((R) => T.indexOf(R.symbol) === -1)
      .map((R) => {
        const ce = n
          .filter((ne) => ne.coins.includes(R.baseCurrency))
          .map((ne) => ne.id);
        return { ...R, categoryIds: ce };
      }),
    x = c.map((R) => Su(R)),
    k = x.filter((R) => R.canTrade).map((R) => R.currency),
    v = x.filter((R) => R.canBorrow).map((R) => R.currency),
    B = o
      .filter((R) => E.indexOf(R.symbol) === -1)
      .map((R) => {
        const ce = _.find((G) => G.currency === R.baseCurrency),
          ne = ce ? ce.name : "",
          Te = n
            .filter((G) => G.coins.includes(R.baseCurrency))
            .map((G) => G.id),
          Ue =
            R.hasOwnProperty("leverage") &&
            R.leverage > 0 &&
            k.includes(R.baseCurrency) &&
            k.includes(R.quoteCurrency);
        return {
          ...R,
          name: ne,
          categoryIds: Te,
          mode: "Spot",
          supportMarginTrade: Ue,
          baseCurrencyCanBorrow: v.includes(R.baseCurrency),
          quoteCurrencyCanBorrow: v.includes(R.quoteCurrency),
        };
      }),
    P = bu(B),
    me = Eu(x, _),
    Ne = i.filter((R) => T.indexOf(R.symbol) === -1);
  S.next({
    type: "foundation-data",
    currencies: _,
    contracts: D,
    spots: B,
    riskLimits: Ne,
    leverages: s,
    marginCurrencies: me,
    marginPairs: P,
    marginRiskLevels: m,
    leverageMargins: l,
  }),
    _r.next(D),
    Ao.next(l),
    ht.next(B),
    du.next(s),
    gu.next(m),
    fu.next(x),
    Fe.next(P),
    rt.next(me);
});
function mu(e, t) {
  return e.map((r) => {
    const n = t.find((a) => a.currency === r.currency) || {
      assetsPrecision: 8,
    };
    return (
      (r.valuePrecision = n.assetsPrecision || 8),
      (r.qtyPrecision = ["USD", "USDT"].indexOf(r.currency) < 0 ? 8 : 2),
      (r.tickSizeEv = r.currency === "USD" ? 100 : 1),
      r
    );
  });
}
function Tu(e) {
  return e.reduce((t, r) => (r.stStatus === 1 && (t[r.symbol] = r), t), {});
}
function bu(e) {
  return e.reduce((t, r) => {
    if (r.supportMarginTrade) {
      const n = { ...r, mode: "Margin" };
      t.push(n);
    }
    return t;
  }, []);
}
function Eu(e, t) {
  return e.map((r) => {
    const n = t.find((a) => a.currency === r.currency);
    return n
      ? {
          ...r,
          name: n.name,
          displayCurrency: n.displayCurrency,
          valuePrecision: n.valuePrecision,
          pricePrecision: n.pricePrecision,
          status: n.status,
          valueFactor: 1,
          valueScale: 0,
        }
      : (console.warn(
          "not found config for " + r.currency + " currency in currencies list"
        ),
        r);
  });
}
function Su(e) {
  const t = !e.markDelete;
  return {
    ...e,
    canTransferOut: !0,
    canRepay: !0,
    canTransferIn: t,
    canBorrow: t,
    canTrade: t,
  };
}
const te = new d("Logout"),
  he = new d(!1);
setTimeout(function () {
  const t = !!wn();
  vr(te, t ? "Login" : "Logout");
}, 0);
const No = new L(),
  Rr = new L(),
  yu = new d([]),
  _u = new U(1);
I.subscribe("user", "logout", () => Rr.next({ manual: !0 }));
I.subscribe("http", "401", () => Rr.next({ manual: !1 }));
function vr(e, t) {
  e.getValue() !== t && e.next(t);
}
te.pipe(u((e) => e === "Login")).subscribe((e) => {
  vr(he, e);
});
No.subscribe((e) => {
  const { userId: t, parentId: r } = e;
  Ls.bindUserId(t, r),
    lo.setUid(t),
    De.next(e),
    S.next({
      type: "sub-users-subscribe",
      users: { main: e, subs: (e.subUsers || []).filter(Ou) },
    }),
    S.next({ type: "init-user-data", data: e }),
    ou().then(),
    Ht.next(e.currency || "USD"),
    localStorage.setItem("current-user-id", String(t)),
    $s(e.userId),
    Au().then();
  const n =
    (!(e != null && e.uta) || e.uta.spot !== 2) &&
    e.marginTradingAccountInfo &&
    e.marginTradingAccountInfo.marginAccountStatus === 1;
  Wt.next(n),
    vr(te, "Login"),
    Pn.next(e.lendingAccount && e.lendingAccount.status === 1),
    _u.next();
});
Rr.subscribe(async ({ manual: e, code: t }) => {
  vr(te, "Logout"),
    Zc(),
    iu(),
    Ht.next("USD"),
    e && (await ge.logout()),
    pc(),
    yu.subscribe((r) => {
      r.indexOf(co()) > -1 && uo("en");
    }),
    (e || t === 3401) && window.location.reload();
});
A([he, Ce]).subscribe(Ru);
S.pipe(g((e) => e.type === "auth-error"))
  .pipe(
    u((e) => {
      var t;
      return (t = e.error) == null ? void 0 : t.code;
    }),
    g((e) => e === 6012)
  )
  .pipe(w(() => hu()))
  .subscribe();
te.pipe(
  g((e) => e === "Login"),
  w(() => vu())
).subscribe();
te.pipe(
  g((e) => e !== "Init"),
  Tr(De),
  u(([, e]) => e.isSub)
).subscribe((e) => {
  yo.next(e);
});
async function hu() {
  if (!wn()) {
    te.next("Logout");
    return;
  }
  const { data: t, error: r } = await ge.info();
  t && No.next(t),
    r &&
      r.code === 3401 &&
      (Rr.next({ manual: !1, code: r.code }), console.warn("Token invalid", r));
}
function Ru() {
  S.next({ type: "token-update", token: wn() });
}
async function vu() {
  const { data: e } = await ge.getTag();
  e && jc.next(e);
}
async function Au() {
  const { data: e } = await ge.getUserMemberLevel();
  e && qc.next(e.memberLevel);
}
function Ou(e) {
  return ["CT_FOLLOWER", "BOT_TRADE_ACCOUNT"].includes(e.userBizType);
}
const Po = new d(!0),
  Lo = new d(Ln());
te.pipe(
  g((e) => e !== "Init"),
  w((e) => (e === "Logout" ? ja(Ln()) : wu()))
).subscribe((e) => {
  Po.next(!1), Lo.next(e);
});
async function wu() {
  const { data: e, error: t } = await ge.getUserBizGray();
  return t && I.send("toast", "error", t), e || Ln();
}
function Ln() {
  return {
    ptMining: !1,
    sbt: !1,
    pt: !1,
    lendingAccount: !1,
    spotUta: !1,
    ptSpotFeeDeduct: !1,
    ptContractFeeDeduct: !1,
    lending: !1,
  };
}
const Ar = new d(Nu()),
  nt = new d(!1),
  Iu = new d(!1);
new d("Multi");
const xo = new L(),
  Cu = new d(Uo()),
  Mo = new U(1);
function bm(e) {
  return e === 2;
}
function Em(e) {
  return e === 1;
}
Ar.pipe(u((e) => e.spot)).subscribe((e) => {
  Iu.next(e === 1), nt.next(e === 2);
});
S.pipe(
  g((e) => e.type === "uta-state"),
  u((e) => e.data)
).subscribe(Ar);
De.pipe(
  u((e) => e.uta),
  g(Boolean)
).subscribe(Ar);
A([Lo, Po])
  .pipe(
    g(([, e]) => !e),
    u(([e]) => (e ? !!e.spotUta : !1))
  )
  .subscribe((e) => {
    Mo.next(e);
  });
A({ isSupportUtaSpot: Mo, utaState: Ar })
  .pipe(
    u(
      ({ isSupportUtaSpot: e, utaState: t }) =>
        e && (t.spot === 0 || t.spot === 1)
    ),
    q(),
    g(Boolean)
  )
  .subscribe(() => {
    xo.next();
  });
xo.pipe(w(Du)).subscribe((e) => Cu.next(e));
async function Du() {
  const { data: e, error: t } = await ge.getUtaInfo();
  return t && I.send("toast", "error", t), e || Uo();
}
function Uo() {
  return {
    userId: 0,
    spotUnifiedAccountUpgradeStatus: 0,
    spotUnifiedAccountUpgradeStep: 0,
    withdrawAndDepositCheckPassed: !1,
    withdrawAndDepositCheckDetail: null,
    spotOrderCheckPassed: !1,
    spotOrderCheckDetail: null,
    marginBorrowCheckPassed: !1,
    marginBorrowCheckDetail: null,
  };
}
function Nu() {
  return { spot: 0 };
}
const ko = new d(""),
  xn = new d([]);
A({ isUtaSpot: nt, wwData: S })
  .pipe(
    g(({ isUtaSpot: e, wwData: t }) =>
      e ? t.type === "uta-spot-orders-active" : t.type === "spot-orders-active"
    ),
    u((e) => e.wwData)
  )
  .subscribe((e) => {
    const { count: t, orders: r } = e.data;
    ko.next(t > 0 ? `(${t})` : ""), xn.next(r);
  });
const Bo = new d(""),
  Mn = new d([]);
A({ isUtaSpot: nt, wwData: S })
  .pipe(
    g(({ isUtaSpot: e, wwData: t }) =>
      e
        ? t.type === "uta-spot-orders-conditional"
        : t.type === "spot-orders-conditional"
    ),
    u((e) => e.wwData)
  )
  .subscribe((e) => {
    const { count: t, orders: r } = e.data;
    Bo.next(t > 0 ? `(${t})` : ""), Mn.next(r);
  });
const Un = new d([]);
A({ isUtaSpot: nt, wwData: S })
  .pipe(
    g(({ isUtaSpot: e, wwData: t }) =>
      e ? t.type === "uta-spot-orders-fill" : t.type === "spot-orders-fill"
    ),
    u((e) => e.wwData)
  )
  .subscribe((e) => Un.next(e.data.orders));
const kn = new d([]);
A({ isUtaSpot: nt, wwData: S })
  .pipe(
    g(({ isUtaSpot: e, wwData: t }) =>
      e
        ? t.type === "uta-spot-orders-history"
        : t.type === "spot-orders-history"
    ),
    u((e) => e.wwData)
  )
  .subscribe((e) => kn.next(e.data.orders));
const Pu = {
    abtest(e) {
      return f.get(p.ABTEST, {
        query: e,
        formatter(t) {
          return (t.experiment = !!t.experiment), t;
        },
      });
    },
    commonAbtest(e) {
      return f.get(p.ABTEST, { query: e });
    },
  },
  _a = new d(!0),
  Sm = te.pipe(
    Le((e) => {
      e === "Logout" && _a.next(!1);
    }),
    g((e) => e === "Login"),
    w(() => Pu.commonAbtest({ type: "PNL_INTERNAL" })),
    Le(() => {
      _a.next(!1);
    }),
    u(({ data: e }) => e && e.experiment === 1),
    N(!1),
    O(1)
  );
Ce.subscribe(() => {
  xn.next([]), Mn.next([]), Un.next([]), kn.next([]);
});
const Go = new d(""),
  Bn = new d([]);
S.pipe(g((e) => e.type === "margin-orders-active")).subscribe((e) => {
  const { count: t, orders: r } = e.data;
  Go.next(t > 0 ? `(${t})` : ""), Bn.next(r);
});
const $o = new d(""),
  Gn = new d([]);
S.pipe(g((e) => e.type === "margin-orders-conditional")).subscribe((e) => {
  const { count: t, orders: r } = e.data;
  $o.next(t > 0 ? `(${t})` : ""), Gn.next(r);
});
const $n = new d([]);
S.pipe(g((e) => e.type === "margin-orders-fill")).subscribe((e) =>
  $n.next(e.data.orders)
);
const Vn = new d([]);
S.pipe(g((e) => e.type === "margin-orders-history")).subscribe((e) =>
  Vn.next(e.data.orders)
);
Ce.subscribe(() => {
  Bn.next([]), Gn.next([]), $n.next([]), Vn.next([]);
});
const Vo = new U(1);
De.pipe(
  g((e) => !!e),
  u((e) => e.isMain)
).subscribe((e) => Vo.next(e));
S.pipe(
  g((e) => e.type === "update-lending-account-status"),
  u((e) => e.data && e.data.isActivateLendingAccount),
  q()
).subscribe((e) => Pn.next(e));
const on = {
    getAssets(e) {
      return f.get(p.LENDING_ASSETS_OVERVIEW, { query: e });
    },
    getPool(e) {
      return f.get(p.LENDING_POOL, { query: e });
    },
    getPublicPool(e) {
      return f.get(p.LENDING_PUBLIC_DATA_POOL, { query: e });
    },
  },
  Fo = new L(),
  Yo = new d([]);
V.isMock() || Fo.pipe(w(Lu), g(Boolean)).subscribe(Yo);
Yo.subscribe((e) => {
  S.next({ type: "lending-account-asset", data: e });
});
async function Lu() {
  const { data: e, error: t } = await on.getAssets();
  return t ? (I.send("toast", "error", t), null) : (e && e.rows) || null;
}
Pn.pipe(q(), g(Boolean)).subscribe(() => Fo.next());
var Ut = ((e) => (
    (e.Limit = "Limit"),
    (e.Market = "Market"),
    (e.Conditional = "Conditional"),
    e
  ))(Ut || {}),
  sn = ((e) => (
    (e.Limit = "Limit"),
    (e.Market = "Market"),
    (e.ScaledOrder = "ScaledOrder"),
    e
  ))(sn || {}),
  Ae = ((e) => (
    (e.Cont = "ByCont"), (e.Base = "ByValue"), (e.Coin = "ByCoin"), e
  ))(Ae || {}),
  xu = ((e) => ((e.ByBase = "ByBase"), (e.ByQuote = "ByQuote"), e))(xu || {}),
  Mu = ((e) => ((e.Buy = "Buy"), (e.Sell = "Sell"), e))(Mu || {}),
  Uu = ((e) => ((e.Open = "Open"), (e.Close = "Close"), e))(Uu || {}),
  ku = ((e) => (
    (e.Normal = "Normal"), (e.Borrow = "Borrow"), (e.Repay = "Repay"), e
  ))(ku || {}),
  Bu = ((e) => (
    (e.Spot = "SPOT"),
    (e.SpotMarginTrade = "SPOT_MARGIN_TRADE"),
    (e.UtaSpot = "UTA_SPOT"),
    (e.UtaMargin = "UTA_MARGIN"),
    e
  ))(Bu || {}),
  Or = ((e) => (
    (e.ProfitLoss = "ProfitLoss"),
    (e.TargetPrice = "TargetPrice"),
    (e.LiquidationPrice = "LiquidationPrice"),
    e
  ))(Or || {}),
  Gu = ((e) => (
    (e[(e.OPEN_POSITIONS = 0)] = "OPEN_POSITIONS"),
    (e[(e.CLOSED_POSITIONS = 1)] = "CLOSED_POSITIONS"),
    (e[(e.ACTIVE_ORDERS = 2)] = "ACTIVE_ORDERS"),
    (e[(e.CONDITIONAL_ORDERS = 3)] = "CONDITIONAL_ORDERS"),
    (e[(e.FILLS = 4)] = "FILLS"),
    (e[(e.ORDER_HISTORY = 5)] = "ORDER_HISTORY"),
    (e[(e.TRADING_BOTS = 6)] = "TRADING_BOTS"),
    e
  ))(Gu || {}),
  wr = ((e) => ((e.Each = "Each"), (e.Stack = "Stack"), e))(wr || {}),
  $u = ((e) => (
    (e.DEFAULT = "DEFAULT"), (e.BUY = "BUY"), (e.SELL = "SELL"), e
  ))($u || {}),
  K = ((e) => ((e.Left = "Left"), (e.Right = "Right"), e))(K || {}),
  Se = ((e) => ((e.Dark = "Dark"), (e.Light = "Light"), e))(Se || {}),
  Vu = ((e) => ((e.Dark = "dark"), (e.Light = "light"), e))(Vu || {}),
  Fu = ((e) => (
    (e[(e.Cross = 0)] = "Cross"), (e[(e.Isolated = 1)] = "Isolated"), e
  ))(Fu || {}),
  Yu = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
    Yu || {}
  ),
  Hu = ((e) => ((e[(e.Chart = 0)] = "Chart"), (e[(e.Depth = 1)] = "Depth"), e))(
    Hu || {}
  ),
  Wu = ((e) => ((e.Each = "Each"), (e.Stack = "Stack"), e))(Wu || {}),
  Ku = ((e) => ((e.Normal = "Normal"), (e.Down = "Down"), (e.Up = "Up"), e))(
    Ku || {}
  ),
  Dt = ((e) => ((e.OneWay = "OneWay"), (e.Hedge = "Hedged"), e))(Dt || {}),
  zu = ((e) => (
    (e.Favorite = "Favorite"),
    (e.Inverse = "Inverse"),
    (e.USD = "USD"),
    (e.USDS = "USDS"),
    (e.mUSDT = "mUSDT"),
    e
  ))(zu || {}),
  Nt = ((e) => ((e.Visible = "Visible"), (e.Hidden = "Hidden"), e))(Nt || {}),
  Fn = ((e) => ((e.Last = "Last"), (e.Index = "Index"), (e.Mark = "Mark"), e))(
    Fn || {}
  ),
  ju = ((e) => (
    (e.Flat = "Flat"),
    (e.Increment = "Increment"),
    (e.Decrement = "Decrement"),
    e
  ))(ju || {}),
  cn = ((e) => (
    (e.Roi = "ROI"), (e.Pnl = "Pnl"), (e.PriceChange = "PriceChange"), e
  ))(cn || {});
const M = {
  readStorageObject(e, t) {
    const r = localStorage.getItem(e);
    if (r)
      try {
        const n = JSON.parse(r);
        if (n.version === t.version) return { ...t, ...n };
      } catch {}
    return t;
  },
  writeStorageObject(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
  },
};
function ym({ read: e, write: t }) {
  const r = new L(),
    n = Ft(() => ja(e()));
  function a(...o) {
    const i = t(...o);
    return r.next(i), i;
  }
  return { storage$: br(n, r), writeStorage: a };
}
const ha = "contract_storage",
  ft = {
    readContractStorage() {
      return M.readStorageObject(ha, qu());
    },
    updateContractStorage(e) {
      M.writeStorageObject(ha, { ...ft.readContractStorage(), ...e });
    },
  };
function qu() {
  return {
    version: 1,
    calculatorDialogPos: null,
    calculatorTabType: Or.ProfitLoss,
    placeOrderSide: K.Right,
    placeOrderTabType: Ut.Limit,
    cheapCopyPlaceOrderTabType: Ut.Limit,
    conditionalType: sn.Limit,
    cheapCopyConditionalType: sn.Limit,
    orderBookType: wr.Stack,
    advancedIsShow: !1,
    hideOtherSymbols: !1,
    lastSymbol: "",
    quickPlaceMarketOrder: null,
    marketSort: { orderSide: "Normal", orderBy: "combinationTurnoverEv" },
    hideTpslEntireInfo: !1,
    hideTpslPartialInfo: !1,
    tpSl: { tp: cn.Roi, sl: cn.Roi },
    riskEngineMode: !0,
    timestamp: { ct: 0, cheapToken: 0 },
  };
}
const Ra = "spot_storage",
  gt = {
    readSpotStorage() {
      return M.readStorageObject(Ra, Qu());
    },
    updateSpotStorage(e) {
      M.writeStorageObject(Ra, { ...gt.readSpotStorage(), ...e });
    },
  };
function Qu() {
  return {
    version: 1,
    calculatorDialogPos: null,
    calculatorTabType: Or.ProfitLoss,
    placeOrderSide: K.Right,
    placeOrderTabType: Ut.Limit,
    orderBookType: wr.Stack,
    advancedIsShow: !1,
    hideOtherSymbols: !1,
    lastSymbol: "",
    quickPlaceMarketOrder: null,
    marketSort: { orderSide: "Normal", orderBy: "turnoverEv" },
  };
}
const va = "margin_trade_storage",
  mt = {
    readMarginStorage() {
      return M.readStorageObject(va, Xu());
    },
    updateMarginStorage(e) {
      M.writeStorageObject(va, { ...mt.readMarginStorage(), ...e });
    },
  };
function Xu() {
  return {
    version: 1,
    calculatorDialogPos: null,
    calculatorTabType: Or.ProfitLoss,
    placeOrderSide: K.Right,
    placeOrderTabType: Ut.Limit,
    orderBookType: wr.Stack,
    advancedIsShow: !1,
    hideOtherSymbols: !1,
    lastSymbol: "",
    guideStep: "transfer",
  };
}
const Zu = "/trade/all",
  Ho = "/spot/trade",
  Wo = "/trade/inverse",
  Ko = "/trade",
  Ju = "/moc/trade/inverse",
  el = "/moc/trade",
  zo = "/margin/trade",
  or = window,
  ir = V.isMock(),
  se = new d(null);
let un = null;
se.pipe(g(Boolean), Le(ll)).subscribe((e) => {
  rl(e), dl(e);
});
const tl = new vs((e) => ({
  unsubscribe: I.subscribe("trade-pair", "change", (r) => e.next(r)),
}));
A([tl, ht, _r, Fe])
  .pipe(u(al), g(Boolean))
  .subscribe((e) => se.next(e));
function _m() {
  A([ht, _r, Fe])
    .pipe(u(nl))
    .subscribe((e) => se.next(e));
}
function hm(e) {
  const t = se.getValue(),
    r = Q.stringify(e),
    n = r ? `?${r}` : "",
    a = t.origin + t.pathname + n;
  se.next({ ...t, href: a, query: e, search: n });
}
function rl(e) {
  e.href !== or.location.href && or.history.replaceState({}, null, e.href);
}
function nl([e, t, r]) {
  const { origin: n, pathname: a, search: o } = or.location,
    i = a.replace(V.MOCK_URL_FLAG, "/"),
    s = Q.parse(o),
    c = il(i, e, t, r),
    m = Jo(c),
    l = ei(n, m, o),
    b = c.type;
  return {
    origin: n,
    href: l,
    pathname: m,
    search: o,
    query: s,
    tradeType: b,
    tradePair: c,
    isPerpetual: Ir(b),
  };
}
function al([e, t, r, n]) {
  const { origin: a, search: o, query: i } = se.getValue(),
    s = ol(e, t, r, n);
  if (!s) return null;
  const c = Jo(s),
    m = ei(a, c, o),
    l = s.type;
  return {
    origin: a,
    href: m,
    pathname: c,
    search: o,
    query: i,
    tradeType: l,
    tradePair: s,
    isPerpetual: Ir(l),
  };
}
function ol(e, t, r, n) {
  if (e.mode === "Margin") {
    if (!e.symbol) {
      const a = qo("", n);
      return n.find((o) => o.symbol === a.symbol);
    }
    return n.find((a) => a.symbol === e.symbol);
  }
  if (e.type === "Spot") {
    if (!e.symbol) {
      const a = jo("", t);
      return t.find((o) => o.symbol === a.symbol);
    }
    return t.find((a) => a.symbol === e.symbol);
  }
  if (Ir(e.type)) {
    if (!e.symbol) {
      const a = Qo(!0, "", r);
      return r.find((o) => o.symbol === a.symbol);
    }
    return r.find((a) => a.symbol === e.symbol);
  }
  return null;
}
function il(e, t, r, n) {
  const a = e.split("/").filter(Boolean),
    o = a[a.length - 1];
  if (e.startsWith(Zu)) return sl(o, t, r);
  if (e.startsWith(Ho)) return jo(o, t);
  if (e.startsWith(zo)) return qo(o, n);
  const i = e.startsWith(Wo),
    s = e.startsWith(Ko);
  return i || s ? Qo(i, o, r) : Yn(r, !1);
}
function sl(e, t, r) {
  const n = t.find((o) => o.symbol === e);
  if (n) return n;
  const a = r.find((o) => o.symbol === e);
  return a || Yn(r, !1);
}
function jo(e, t) {
  const r = Zo(e.toUpperCase());
  return Xo(
    t,
    [r, gt.readSpotStorage().lastSymbol, "sBTCUSDT"].filter(Boolean)
  );
}
function qo(e, t) {
  var a;
  const r = Zo(e.toUpperCase()),
    n = (a = t[0]) == null ? void 0 : a.symbol;
  return Xo(t, [r, mt.readMarginStorage().lastSymbol, n].filter(Boolean));
}
function Qo(e, t, r) {
  const n = e ? -1 : 1,
    a = cl(t.toUpperCase(), e),
    o = Aa(r, a);
  if (o && o.contractSide === n) return o;
  const i = ft.readContractStorage().lastSymbol;
  if (i) {
    const s = Aa(r, i);
    if (s && s.contractSide === n) return s;
  }
  return Yn(r, e);
}
function Yn(e, t) {
  const r = ir ? "BTCMUSDT" : "BTCUSDT",
    n = "BTCUSD";
  return e.find((a) => a.symbol === (t ? n : r));
}
function Aa(e, t) {
  return e.filter(ti).find((r) => r.symbol === t);
}
function Xo(e, t) {
  for (let r = 0, n = t.length; r < n; r++) {
    const a = t[r],
      o = e.filter(ti).find((i) => i.symbol === a);
    if (o) return o;
  }
  return null;
}
function Zo(e) {
  return "s" + e;
}
function cl(e, t) {
  return e === "BTCUSD"
    ? t
      ? "BTCUSD"
      : "uBTCUSD"
    : !t && C.startWithNumber(e)
    ? "u" + e
    : (t ? "c" : "") + e;
}
function ul(e) {
  return e.type === "Spot"
    ? e.mode === "Margin"
      ? zo
      : Ho
    : Ir(e.type)
    ? e.contractSide > 0
      ? ir
        ? el
        : Ko
      : ir
      ? Ju
      : Wo
    : "";
}
function Jo(e) {
  return [ul(e), e.pairName].join("/");
}
function ei(e, t, r) {
  return e + t + r;
}
function ti(e) {
  return ["PreList", "Listed", "Suspend", "Delisted"].indexOf(e.status) > -1;
}
function Ir(e) {
  return ["Perpetual", "PerpetualV2"].includes(e);
}
function ll(e) {
  un = JSON.parse(JSON.stringify(e));
}
function dl(e) {
  un &&
    V.isMockUrl(un.pathname) !== V.isMockUrl(e.pathname) &&
    or.location.reload();
}
const pl = "modulepreload",
  fl = function (e) {
    return "/trade/js/" + e;
  },
  Oa = {},
  gl = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const a = document.getElementsByTagName("link");
    return Promise.all(
      r.map((o) => {
        if (((o = fl(o)), o in Oa)) return;
        Oa[o] = !0;
        const i = o.endsWith(".css"),
          s = i ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let l = a.length - 1; l >= 0; l--) {
            const b = a[l];
            if (b.href === o && (!i || b.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${s}`)) return;
        const m = document.createElement("link");
        if (
          ((m.rel = i ? "stylesheet" : pl),
          i || ((m.as = "script"), (m.crossOrigin = "")),
          (m.href = o),
          document.head.appendChild(m),
          i)
        )
          return new Promise((l, b) => {
            m.addEventListener("load", l),
              m.addEventListener("error", () =>
                b(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  },
  ml = {
    getCsRobotInfo(e = {}) {
      return f.get(p.IM_ROBOT_INFO, { query: e });
    },
  },
  Tl = { name: "AdaZAW", widget: null },
  Rm = new d(!1),
  bl = new L(),
  ri = new d(null);
bl.pipe(w(ni), g(Boolean)).subscribe();
async function vm() {
  const e = ri.getValue();
  return e || (await ni());
}
async function ni() {
  const e = De.getValue(),
    { data: t, error: r } = await ml.getCsRobotInfo({
      bid: eo(),
      user: e.userId,
    });
  return r && I.send("toast", "error", r), t && ri.next(t), t || Tl;
}
const El = {
    load(e) {
      return f.get(e, {});
    },
  },
  ln = "lang-data-trade",
  ai = 1,
  oi = window.langManifest || {};
function wa(e) {
  const t = localStorage.getItem(ln);
  if (!t) return null;
  const r = JSON.parse(t);
  return r.version !== ai || r.hash !== oi[e]
    ? (localStorage.setItem(ln, ""), null)
    : yl(r.data);
}
function Sl(e, t) {
  localStorage.setItem(
    ln,
    JSON.stringify({ version: ai, language: e, hash: oi[e], data: t })
  );
}
function yl(e) {
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      e[r].forEach((a) => (t[a] = r));
    }),
    t
  );
}
const _l = window.langManifest || {},
  Ze = new d(co()),
  Am = new d(hl(lt)),
  Om = Ze.pipe(u(Rl), O(1)),
  wm = Ze.pipe(u(vl), O(1)),
  Im = Ze.pipe(
    w((e) => Ol(e)),
    N({ language: Ze.getValue(), langRecord: {} }),
    u(Al),
    O(1)
  );
function hl(e) {
  return Sr ? { [pt]: e[pt], en: e.en } : e;
}
function Cm(e) {
  te
    .pipe(
      g((t) => t === "Login"),
      Lt(1)
    )
    .subscribe(() => wl({ lang: e })),
    te
      .pipe(
        g((t) => t !== "Login"),
        Lt(1)
      )
      .subscribe(() => Ze.next(e));
}
Ze.subscribe((e) => {
  const t = e === "ko" ? "en" : e,
    r = lt[t];
  (document.documentElement.lang = r ? r.html : "en-US"),
    uo(t),
    et.setProfile({ language: t });
});
function Rl(e) {
  return function (t) {
    return e === "en" ? t : t === "/" ? "/" + e : "/" + e + t;
  };
}
function vl(e) {
  return function (t) {
    return ["en", "vi"].indexOf(e) > -1 ? t : "/" + e + t;
  };
}
function Ia(e, t) {
  return e
    ? t
      ? Object.keys(t).reduce(
          (r, n) =>
            r.replace(new RegExp(["(\\{", n, "\\})"].join(""), "g"), t[n]),
          e
        )
      : e
    : "";
}
function Al({ language: e, langRecord: t }) {
  return Ie.isDev
    ? function (r, n) {
        if (!r) return "";
        const a = r[e] || r.en;
        return Ia(a, n);
      }
    : function (r, n) {
        if (!r) return console.warn("lang is empty"), "";
        const a = t[r];
        return Ia(a, n);
      };
}
async function Ol(e) {
  if (Ie.isDev) return { language: e, langRecord: {} };
  const t = wa(e);
  if (t) return { language: e, langRecord: t };
  const { reply: r } = await El.load(`/trade/lang/${e}-${_l[e]}.json`);
  return r
    ? (Sl(e, r), { language: e, langRecord: wa(e) })
    : { language: e, langRecord: {} };
}
async function wl(e) {
  const { data: t, error: r } = await ge.updateProfile(e);
  if (t) {
    De.next(t);
    const { lang: n } = e;
    n && Ze.next(n);
  }
  r && I.send("toast", "error", r);
}
const Il = {
    cnt(e) {
      return f.post(p.CNT_COLLECTION, { params: { id: e } });
    },
  },
  Hn = "referral-v1",
  ii = new d(Cl());
se.pipe(g((e) => e && !!e.query.referralCode)).subscribe((e) => {
  const { referralCode: t, group: r } = e.query;
  ii.next({ code: t, group: Number(r) });
});
ii.subscribe(({ code: e, group: t }) => {
  !e ||
    e === "null" ||
    localStorage.setItem(Hn, [e || "", String(t) || "0"].join(","));
});
function Dm() {
  const { referralCode: e, group: t } = Q.parse(window.location.search);
  e && localStorage.setItem(Hn, [e || "", t || "0"].join(",")), t && Il.cnt(t);
}
function Cl() {
  const e = localStorage.getItem(Hn);
  if (e) {
    const [t, r] = e.split(",");
    return { code: t === "null" ? "" : t, group: Number(r) };
  }
  return { code: "", group: 0 };
}
function dn(e, t) {
  return e.reduce(
    (r, n, a) => (t(n, a) ? r[0].push(n) : r[1].push(n), r),
    [[], []]
  );
}
function Dl(e, t) {
  const r = Math.min(e.x, t.x);
  return Math.max(e.x + e.w, t.x + t.w) - r < e.w + t.w;
}
function Nl(e, t) {
  return e.y === t.y ? e.x - t.x : e.y - t.y;
}
function pn(e) {
  return e.sort(Nl);
}
function si(e, t) {
  const r = e.filter((n) => Dl(n, t)).map((n) => n.y + n.h);
  return Math.max(...r, 0);
}
function fn(e) {
  return e.reduce((t, r) => t.concat({ ...r, y: si(t, r) }), []);
}
function ci(e) {
  const [t, r] = dn(e, (n) => n.visible);
  return fn(pn(t)).concat(r);
}
function ui(e) {
  return e.map((t, r) => ({
    index: r,
    zIndex: 1,
    visible: !0,
    full: !1,
    static: !1,
    resizable: !t.static,
    draggable: !t.static,
    min: t.min || null,
    max: t.max || null,
    drag: null,
    resize: null,
    responsive: { valueW: 0 },
    ...t,
  }));
}
function Nm(e, t, r, n, a) {
  const [o, i] = dn(e, (E) => E.visible),
    s = o.filter((E) => E.id !== t.id),
    c = fn(pn(s)),
    m = pn(c),
    [l, b] = dn(m, (E) => n >= E.y + 2),
    T = si(l, { x: r, y: 0, w: t.w, h: 0 });
  return fn([...l, { ...t, x: r, y: T, ...a }, ...b]).concat(i);
}
function Pm({
  shadow: e,
  useTransform: t,
  xPerPx: r,
  yPerPx: n,
  gapX: a,
  gapY: o,
  placeOrderSide: i,
}) {
  const { drag: s } = e,
    c = 1,
    m = Math.round(s ? s.x : e.x * r + (i === K.Left ? a : 0)) - c,
    l = Math.round(s ? s.y : e.y * n + o) - c,
    b = Math.round(e.w * r - a - e.responsive.valueW * r) + c * 2,
    T = Math.round(e.h * n - o) + c * 2;
  return [
    t && `transform: translate(${m}px,${l}px)`,
    !t && `left: ${m}px`,
    !t && `top: ${l}px`,
    `width:${b}px`,
    `height:${T}px`,
  ]
    .filter(Boolean)
    .join(";");
}
function Lm({ x: e, y: t, w: r, h: n, drag: a, responsive: o }) {
  return { x: e, y: t, w: r, h: n, drag: a, responsive: o };
}
function xm(e, ...t) {
  return e ? e.getBoundingClientRect() : null;
}
function Mm(e) {
  const t = e.filter((r) => r.visible);
  return Math.max(...t.map((r) => r.y + r.h), 1);
}
function Um(e, t, r) {
  const n = e.findIndex((o) => o.id === t.id);
  if (n < 0) return e;
  const a = { ...e[n], ...r };
  return e.splice(n, 1, a), [...e];
}
function km(e, t, r) {
  const n = e ? Math.max(r, e) : r;
  return t ? Math.min(n, t) : n;
}
function Bm({
  item: e,
  useTransform: t,
  xPerPx: r,
  yPerPx: n,
  gapX: a,
  gapY: o,
  placeOrderSide: i,
}) {
  const { drag: s, resize: c } = e,
    m = Math.round(s ? s.x : e.x * r + (i === K.Left ? a : 0)),
    l = Math.round(s ? s.y : e.y * n + o),
    b = Math.round(c ? c.w : e.w * r - a - e.responsive.valueW * r),
    T = Math.round(c ? c.h : e.h * n - o),
    E = s || c ? 0.8 : 1,
    _ = s || c ? 1e3 : e.zIndex;
  return [
    t && `transform:translate(${m}px,${l}px)`,
    !t && `left:${m}px`,
    !t && `top:${l}px`,
    `width:${b}px`,
    `height:${T}px`,
    `opacity:${E}`,
    `z-index:${_}`,
  ]
    .filter(Boolean)
    .join(";");
}
function Gm(e) {
  const t = e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
    r = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
  return { pageX: t, pageY: r };
}
function $m(e) {
  e = e.slice(10, -3);
  const t = e.indexOf("px,"),
    r = +e.slice(0, t),
    n = +e.slice(t + 4);
  return { x: r, y: n };
}
const li = "contract_grid_layout",
  kt = Bl();
function Pl(e) {
  return di().breakpoints.find((r) => r.range === e) || kl(K.Right, e);
}
function Ll(e) {
  const { version: t, breakpoints: r } = di(),
    n = xl(e, r);
  Ml(t, n);
}
function xl(e, t) {
  const { range: r, cols: n, items: a } = e,
    o = t.findIndex((m) => m.range === r),
    i = o < 0 ? t.length : o,
    s = o < 0 ? 0 : 1,
    c = [...t];
  return (
    c.splice(i, s, { range: r, cols: n, items: a }),
    c.sort((m, l) => m.range - l.range),
    c
  );
}
function di() {
  return M.readStorageObject(li, Ul());
}
function Ml(e, t) {
  M.writeStorageObject(li, { version: e, breakpoints: t });
}
function Ul() {
  return { version: 2, breakpoints: [] };
}
function kl(e, t) {
  const r = kt.find((n) => n.range === t);
  return r
    ? { range: r.range, cols: r.cols, items: ui(r.createDefaultItems(e)) }
    : null;
}
function Bl() {
  return [
    {
      range: 768,
      cols: 24,
      createDefaultItems(e) {
        return [];
      },
    },
    {
      range: 1024,
      cols: 24,
      createDefaultItems(e) {
        return e === K.Left
          ? [
              {
                x: 0,
                y: 0,
                w: 24,
                h: 10,
                id: "ChartView",
                min: { w: 8, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 0,
                y: 10,
                w: 24,
                h: 8,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 18, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : e === K.Right
          ? [
              {
                x: 0,
                y: 0,
                w: 24,
                h: 10,
                id: "ChartView",
                min: { w: 8, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 0,
                y: 10,
                w: 24,
                h: 8,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 18, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : [];
      },
    },
    {
      range: 1280,
      cols: 24,
      createDefaultItems(e) {
        return e === K.Left
          ? [
              {
                x: 0,
                y: 0,
                w: 8,
                h: 16,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              {
                x: 8,
                y: 0,
                w: 16,
                h: 16,
                id: "ChartView",
                min: { w: 8, h: 6 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 16, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : e === K.Right
          ? [
              {
                x: 0,
                y: 0,
                w: 16,
                h: 16,
                id: "ChartView",
                min: { w: 8, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 16,
                y: 0,
                w: 8,
                h: 16,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 16, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : [];
      },
    },
    {
      range: 1536,
      cols: 24,
      createDefaultItems(e) {
        return e === K.Left
          ? [
              {
                x: 0,
                y: 0,
                w: 6,
                h: 15,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              {
                x: 6,
                y: 0,
                w: 18,
                h: 15,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 34 },
              },
              { x: 0, y: 15, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : e === K.Right
          ? [
              {
                x: 0,
                y: 0,
                w: 18,
                h: 15,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 18,
                y: 0,
                w: 6,
                h: 15,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 15, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : [];
      },
    },
    {
      range: 1920,
      cols: 24,
      createDefaultItems(e) {
        return e === K.Left
          ? [
              {
                x: 0,
                y: 0,
                w: 5,
                h: 15,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              {
                x: 5,
                y: 0,
                w: 19,
                h: 15,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 34 },
              },
              { x: 0, y: 15, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : e === K.Right
          ? [
              {
                x: 0,
                y: 0,
                w: 19,
                h: 15,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 19,
                y: 0,
                w: 5,
                h: 15,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 15, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : [];
      },
    },
    {
      range: 2560,
      cols: 24,
      createDefaultItems(e) {
        return e === K.Left
          ? [
              {
                x: 0,
                y: 0,
                w: 4,
                h: 16,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              {
                x: 4,
                y: 0,
                w: 20,
                h: 16,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 34 },
              },
              { x: 0, y: 16, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : e === K.Right
          ? [
              {
                x: 0,
                y: 0,
                w: 20,
                h: 16,
                id: "ChartView",
                min: { w: 6, h: 6 },
                max: { w: 24, h: 33 },
              },
              {
                x: 20,
                y: 0,
                w: 4,
                h: 16,
                id: "BookTradesView",
                min: { w: 4, h: 4 },
                max: { w: 24, h: 33 },
              },
              { x: 0, y: 16, w: 24, h: 18, id: "PositionOrderTabView" },
            ]
          : [];
      },
    },
  ];
}
const Gl = new L(),
  $l = new L(),
  Vl = new L(),
  Fl = zl(window),
  Yl = Fl.pipe(
    u(
      (e) =>
        function (t) {
          return t && t.range === e ? t : Pl(e);
        }
    )
  ),
  Hl = Gl.pipe(
    u(
      (e) =>
        function (t) {
          const { range: r, cols: n } = t;
          return { range: r, cols: n, items: e };
        }
    )
  ),
  Wl = $l.pipe(
    u(
      (e) =>
        function (t) {
          const r = kt.find((n) => n.range === t.range);
          if (r) {
            const { range: n, cols: a } = t;
            return {
              range: n,
              cols: a,
              items: ci(ui(r.createDefaultItems(e))),
            };
          }
          return t;
        }
    )
  ),
  Kl = Vl.pipe(
    u(
      ({ id: e, visible: t }) =>
        function (r) {
          const { range: n, cols: a, items: o } = r;
          return { range: n, cols: a, items: ci(Ql(o, e, t)) };
        }
    )
  ),
  pi = br(Yl, Hl, Wl, Kl).pipe(
    Rn((e, t) => t(e), null),
    q(),
    O()
  ),
  Vm = pi.pipe(u((e) => e.range <= kt[0].range));
pi.subscribe((e) => Ll(e));
function zl(e) {
  return As(e, "resize").pipe(
    N(0),
    u(() => jl(e)),
    q(),
    u((t) => ql(t)),
    q()
  );
}
function jl(e) {
  return e.innerWidth;
}
function ql(e) {
  const t = kt.slice(-1)[0].range;
  return e > t ? t : kt.find((r) => e <= r.range).range;
}
function Ql(e, t, r) {
  return e.map((n) => (n.id === t ? { ...n, visible: r } : n));
}
const gn = {
    getPurchasePlans() {
      return f.get(p.MEMBERSHIP_PURCHASE_PLANS, {});
    },
    buyMembershipPurchase(e) {
      return f.post(p.MEMBERSHIP_PURCHASE, { query: e });
    },
    getVipProfile(e = {}) {
      return f.get(p.VIP_PROFILE, e);
    },
    getVipFeeConfig(e) {
      return f.get(p.VIP_FEE_CONFIG, { query: e });
    },
  },
  fi = {
    vipLevel: 0,
    effectiveLevel: 0,
    contractMakerFeeEr: 0,
    contractTakerFeeEr: 0,
    spotMakerFeeEr: 0,
    spotTakerFeeEr: 0,
    levelName: "--",
    tryConfig: { spotMakerFeeEr: 0, spotTakerFeeEr: 0, levelName: "--" },
  },
  gi = new L(),
  Xl = new d(fi),
  Zl = new L(),
  mi = new d([]),
  Ti = new d({
    contMakerFeeEr: 0,
    contTakerFeeEr: 0,
    level: 0,
    levelName: "",
    lowerContMakerRatio: "",
    lowerContTrdVol: "",
    lowerContVolRatio: "",
    lowerSpotMakerRatio: "",
    lowerSpotTrdVol: "",
    spotMakerFeeEr: 0,
    spotTakerFeeEr: 0,
    upperContApiRatio: "",
    upperSpotApiRatio: "",
  });
A([mi, gi])
  .pipe(
    w((e) =>
      Os(gn.getVipProfile(), qa(e), gn.getVipFeeConfig({ currency: "TRY" }))
    )
  )
  .subscribe(([e, t, r]) => {
    var a;
    const n =
      ((r == null ? void 0 : r.data) &&
        ((a = r == null ? void 0 : r.data) == null ? void 0 : a.rows)) ||
      [];
    if (e.data && t && t.length > 0) {
      const o = t.find((s) => {
          var c;
          return (
            s.level ===
            ((c = e == null ? void 0 : e.data) == null ? void 0 : c.vipLevel)
          );
        }),
        i = n.find((s) => {
          var c;
          return (
            s.level ===
            ((c = e == null ? void 0 : e.data) == null ? void 0 : c.vipLevel)
          );
        });
      Xl.next({
        ...fi,
        ...((e == null ? void 0 : e.data) || {}),
        ...(o || {}),
        tryConfig: i,
      });
    }
  });
Zl.pipe(
  w(() => gn.getVipFeeConfig({ currency: "USDT" })),
  u(({ data: e }) => e && e.rows),
  g(Boolean)
).subscribe((e) => {
  const t = e.find((r) => r.level === 0) || {};
  t && Ti.next(t), mi.next(e);
});
he.pipe(g(Boolean)).subscribe(() => gi.next());
Ti.pipe(
  u((e) => Number(xt(e.contTakerFeeEr, 1e8))),
  q()
).subscribe((e) => {
  uu.next(e),
    S.next({
      type: "contract-default-taker-fee-rate",
      contractDefaultTakerFeeRateEr: e,
    });
});
const Fm = new d(1200),
  Ym = new d(768),
  Me = new U(1),
  at = Me.pipe(
    u((e) => e.mode),
    q()
  );
se.pipe(g((e) => e && e.tradeType === "Spot")).subscribe((e) =>
  Me.next(e.tradePair)
);
A([se, Ce])
  .pipe(g(([e]) => e && e.tradeType === "Spot"))
  .subscribe(([e]) => {
    const { tradeType: t, tradePair: r } = e;
    S.next({
      type: "state-symbol",
      tradeType: t,
      symbol: r.symbol,
      mode: r.mode,
    });
  });
Me.subscribe((e) => {
  const { symbol: t } = e;
  et.track("change_tradingview", { symbol: t, market: "Spot" });
});
Me.pipe(g((e) => e.mode === "Spot")).subscribe(({ symbol: e }) => {
  e !== gt.readSpotStorage().lastSymbol &&
    gt.updateSpotStorage({ lastSymbol: e });
});
const Jl = S.pipe(
    g((e) => e.type === "market24h-spot"),
    u((e) => e.data),
    g(Boolean),
    N(new Map()),
    O(1)
  ),
  ed = A([Me, Jl]).pipe(
    u(([e, t]) => t.get(e.symbol) || Ca()),
    g(Boolean),
    N(Ca()),
    O(1)
  );
function Ca() {
  return {
    type: "Spot",
    symbol: "",
    status: "Listed",
    displaySymbol: "",
    openEp: 0,
    open: "--",
    closeEp: 0,
    close: "--",
    highEp: 0,
    high: "--",
    lowEp: 0,
    low: "--",
    indexPriceEp: 0,
    indexPrice: "--",
    turnoverEv: 0,
    turnoverStr: "--",
    volume24hStr: "--",
    change24hEp: 0,
    change24hStr: "--",
    changePercent: 0,
    changePercentStr: "--",
    baseCurrency: "",
    displayBaseCurrency: "",
    bid1Ep: 0,
    ask1Ep: 0,
    name: "-",
    closeMoneyWU: "--",
    klineData: [],
    stStatus: 0,
    hasZeroFee: !1,
    isNew: !1,
  };
}
const Ye = new U(1);
se.pipe(
  g((e) => e && e.isPerpetual),
  u((e) => e.tradePair),
  q()
).subscribe((e) => Ye.next(e));
A([se, Ce])
  .pipe(g(([e]) => e && ["Perpetual", "PerpetualV2"].indexOf(e.tradeType) > -1))
  .subscribe(([e]) => {
    const { tradeType: t, tradePair: r } = e;
    S.next({ type: "state-symbol", tradeType: t, symbol: r.symbol });
  });
Ye.subscribe((e) => {
  const { symbol: t } = e;
  et.track("change_tradingview", { symbol: t, market: "Contract" }),
    t !== ft.readContractStorage().lastSymbol &&
      ft.updateContractStorage({ lastSymbol: t });
});
const td = S.pipe(
    g((e) => e.type === "market24h-contract"),
    u((e) => e.data),
    g(Boolean),
    N(new Map()),
    O(1)
  ),
  bi = A([Ye, td]).pipe(
    u(([e, t]) => t.get(e.symbol)),
    g(Boolean),
    N(rd()),
    O(1)
  );
function rd() {
  return {
    type: "Perpetual",
    symbol: "BTCUSD",
    status: "Listed",
    pairName: "BTCUSD",
    displaySymbol: "BTCUSD",
    baseCurrency: "BTC",
    openEp: 0,
    open: "--",
    closeEp: 0,
    close: "--",
    highEp: 0,
    high: "--",
    lowEp: 0,
    low: "--",
    indexPriceEp: 0,
    indexPrice: "--",
    markPriceEp: 0,
    markPrice: "--",
    turnoverEv: 0,
    turnoverStr: "--",
    turnoverWU: "-- BTC",
    turnoverWithUSDRaw: 0,
    isCheapCopyToken: !1,
    openInterest: 0,
    openInterestStr: "--",
    volume24hStr: "--",
    fundingRate: 0,
    fundingRateStr: "--",
    predFundingRate: 0,
    predFundingRateStr: "--",
    change24hEp: 0,
    change24hStr: "--",
    changePercent: 0,
    changePercentStr: "--%",
    combinationTurnoverEv: 0,
    contractSide: 0,
    volume24hWithUSD: "--",
    turnoverWithUSD: "--",
    klineData: [],
    isNew: !1,
  };
}
function nd(e, t, r) {
  return t > e ? !0 : t < e ? !1 : r;
}
function ad(e, t, r) {
  return t < e ? !0 : t > e ? !1 : r;
}
function Hm(e, t, r) {
  return isNaN(e) || e === 0 || t || r === 0 ? !1 : r > e;
}
function Wm(e, t, r) {
  return isNaN(e) || e === 0 || t || r === 0 ? !1 : r < e;
}
const od = se.pipe(
    g(Boolean),
    w((e) => (e.tradeType === "Spot" ? ed : e.isPerpetual ? bi : ws)),
    u((e) => ({ priceEp: e.closeEp, price: e.close })),
    q((e, t) => e.priceEp === t.priceEp),
    Rn(ud, { title: "", oldPriceEp: NaN, upTrend: !1, downTrend: !1 }),
    u((e) => e.title)
  ),
  id = se.pipe(
    g(Boolean),
    u((e) =>
      e.tradeType === "Spot"
        ? ld(e.tradePair)
        : e.isPerpetual
        ? dd(e.tradePair)
        : ""
    )
  ),
  Km = A([od, id]).pipe(
    u((e) => e.join(" ")),
    q(),
    Er(100)
  ),
  zm = se.pipe(
    g(Boolean),
    u((e) =>
      e.tradeType === "Spot"
        ? sd(e.tradePair)
        : e.isPerpetual
        ? cd(e.tradePair)
        : ""
    ),
    Er(100)
  );
function sd(e) {
  return `Real time ${e.name} (${e.displayBaseCurrency}) to ${e.quoteName} (${e.quoteCurrency}) chart, ${e.pairName} Tradingview. Trade ${e.displaySymbol} on Phemex now!`;
}
function cd(e) {
  return `Start trading ${e.baseCurrencyName} futures on Phemex. ${e.baseCurrencyName} futures trading charts in real time. Trade ${e.baseCurrency}/USD perpetual contracts with up to 100x leverage.`;
}
function ud(e, { priceEp: t, price: r }) {
  const n = nd(e.oldPriceEp, t, e.upTrend),
    a = ad(e.oldPriceEp, t, e.downTrend),
    o = t;
  return {
    title: `${n ? "▲" : a ? "▼" : " "} ${r}`,
    upTrend: n,
    downTrend: a,
    oldPriceEp: o,
  };
}
function ld(e) {
  return `${e.pairName} | ${e.displayBaseCurrency} to ${e.quoteCurrency} Chart | Phemex Spot Trading`;
}
function dd(e) {
  return `${e.pairName} Perpetual | ${e.baseCurrency} Margin Trading | Phemex`;
}
const Ei = {
    PHEMEX_HOME: "/",
    TRADE: "/trade",
    TRADE_INVERSE: "/trade/inverse",
    DEFAULT_TRADE: "/trade/BTCUSD",
    DEFAULT_TRADE_INVERSE: "/trade/inverse/BTCUSD",
    SPOT_TRADE: "/spot/trade",
    PHEMEX_MARGIN_TRADE: "/margin/trade",
    REGISTER: "/register",
    LOGIN: "/login",
    PHEMEX_APP_DOWNLOAD: "/download",
    PHEMEX_ABOUT: "/about",
    PHEMEX_BONUS: "/bonus",
    PHEMEX_SECURITY: "/security",
    PHEMEX_FEES_CONDITIONS: "/fees-conditions",
    CRYPTO_TRADING_COMPETITION: "/crypto-trading-competition",
    ONE_CRYPTO_TRADING_COMPETITION: "/1-on-1-crypto-trading-competition",
    TRADING_DEPOSIT_BONUS: "/lp-trading-deposit-bonus",
    CRYPTO_CONVERTER: "/crypto-converter",
    CRYPTO_LAUNCHPAD: "/crypto-launchpad",
    ASSETS_OVERVIEW: "/assets/overview",
    ASSETS_OVERVIEW_ACCOUNT: "/assets/overview?tab=Account",
    ASSETS_SPOT_ACCOUNT: "/assets/spot-account",
    ASSETS_CONTRACT_ACCOUNT: "/assets/contract-account",
    ASSETS_INVESTMENT_ACCOUNT: "/assets/investment-account",
    ASSETS_FIAT_ACCOUNT: "/assets/fiat-account",
    ASSETS_MARGIN_ACCOUNT: "/assets/margin-account",
    ASSETS_TRADING_ACCOUNT: "/assets/trading-account",
    ASSETS_FUND_ACCOUNT: "/assets/fund-account",
    ASSETS_ORDER_HISTORY_GROUP: "/assets/order-history",
    ASSETS_DEPOSIT: "/assets/deposit",
    ASSETS_WITHDRAWAL: "/assets/withdrawal",
    ASSETS_WITHDRAWAL_ADDRESS: "/assets/withdrawal-address",
    ASSETS_FUNDS: "/assets/funds",
    ASSETS_SPOT_ORDER: "/assets/spot-order-history",
    ASSETS_SPOT_TRADE: "/assets/spot-trade-history",
    ASSETS_SPOT_PNL_DETAILS: "/assets/spot-pnl-history",
    ASSETS_CONVERSION_HISTORY: "/assets/conversion-history",
    ASSETS_PNL_DETAILS: "/assets/contract-pnl-details",
    ASSETS_ORDER_HISTORY: "/assets/contract-order-history",
    ASSETS_TRADE_HISTORY: "/assets/contract-trade-history",
    ASSETS_CONVERT_FAQ: "/assets/convert-faq",
    ASSETS_MARGIN_TRADE_ORDER_HISTORY: "/assets/margin-trade-order-history",
    ASSETS_MARGIN_TRADE_TRADE_HISTORY: "/assets/margin-trade-trade-history",
    ASSETS_MARGIN_TRADE_BORROW_HISTORY: "/assets/margin-trade-borrow-history",
    ASSETS_MARGIN_TRADE_REPAY_HISTORY: "/assets/margin-trade-repay-history",
    ASSETS_MARGIN_TRADE_INTEREST_HISTORY:
      "/assets/margin-trade-interest-history",
    ASSETS_PROOF_OF_RESERVES: "/proof-of-reserves",
    ASSETS_SPOT_HISTORY: "/assets/spot-history",
    ASSETS_MARGIN_HISTORY: "/assets/margin-history",
    ASSETS_CONTRACT_HISTORY: "/assets/contract-history",
    ASSETS_BUY_CRYPTO_HISTORY: "/assets/buy-crypto-history",
    ASSETS_DETAILS: "/assets/details",
    ASSETS_FIAT_DEPOSIT: "/assets/fiat-deposit",
    ASSETS_FIAT_WITHDRAW: "/assets/fiat-withdraw",
    ASSETS_BUY_SELL_CRYPTO_HISTORY: "/assets/fiat-buy-sell-crypto-history",
    ASSETS_LENDING_ACCOUNT: "/assets/lending-account",
    ASSETS_LENDING_HISTORY: "/assets/lending-history",
    ASSETS_DEPOSIT_WITHDRAW_HISTORY: "/assets/deposit-withdraw-history",
    ASSETS_TRANSFER_CONVERT_HISTORY: "/assets/transfer-convert-history",
    ACCOUNT_OVERVIEW: "/account/overview",
    ACCOUNT_VERIFICATION: "/account/verification",
    ACCOUNT_SECURITY: "/account/security",
    ACCOUNT_SUB_ACCOUNTS: "/account/sub-accounts",
    ACCOUNT_API_MANAGEMENT: "/account/api-management",
    ACCOUNT_PREMIUM_CENTER: "/account/points/my-privileges",
    SUB_ACCOUNT_HOME: "/account/sub-accounts",
    ACCOUNT_INVITE_FRIENDS: "/account/referral/invite-friends",
    VIP_PORTAL: "/vip-portal",
    SHARE_PREMIUM: "/account/referral/share-premium",
    ACCOUNT_SETTING: "/account/setting",
    ACCOUNT_TAX_REPORTING: "/account/tax-reporting",
    ACCOUNT_FEEDBACK: "https://zendesk.com/hc/en-us/requests/new",
    CONTRACT: "/contract/perpetual-contract",
    CONTRACT_DATA_INSIGHT: "/contract/data-insight",
    PHEMEX_REFERENCES: "/support",
    PHEMEX_BLOG: "/blogs",
    PHEMEX_STUDENT_FOUNDATION: "/student-foundation",
    PHEMEX_ANNOUNCEMENTS: "/",
    PHEMEX_BRACKET_ORDERS: "/help-center/what-is-a-bracket-order",
    PHEMEX_RISK_LIMIT: "/help-center/risk-limit",
    PHEMEX_ADL: "/help-center/what-is-the-insurance-fund-and-auto-deleveraging",
    EARN_CRYPTO: "/earn-crypto",
    EARN_SAVINGS: "/earn-crypto/savings-account",
    EARN_LAUNCH_POOL: "/earn-crypto/launchpool",
    PREDICT_TO_EARN: "/crypto-prediction-market",
    COMPETITION: "/crypto-trading-competition",
    BUY_CRYPTO: "/buy-crypto",
    BUY_CRYPTO_PLACE_ORDER: "/buy-crypto/place-order",
    OTC_LEGEND_TRADING: "/otc/legend-trading",
    MARKETS: "/markets",
    PHEMEX_CONTRACT_TRADE: "/trade",
    PHEMEX_SPOT_TRADE: "/spot/trade",
    PREMIUM: "/premium",
    BONUS: "/rewards-hub",
    ALL_STAR_PROGRAM: "/all-star-program",
    INSTITUTIONAL_CLIENT: "/institutional-clients",
    PHEMEX_ACADEMY: "/academy",
    CONTRACT_INTRODUCTION: "/contract/introduction",
    PHEMEX_PLATFORM: "/phemex-platform",
    ABOUT: "/about",
    FEES_CONDITIONS: "/fees-conditions",
    SECURITY: "/security",
    PHEMEX_CUSTOMER_SERVICE: "https://phemex.zendesk.com/hc/en-us/requests/new",
    PHEMEX_API_DOC: "https://github.com/phemex/phemex-api-docs",
    LEARN_CRYPTO: "/learn-crypto",
    PHEMEX_USER_GUIDES: "/user-guides",
    PHEMEX_HELP_CENTER: "/help-center",
    PHEMEX_GETTING_STARTED: "/getting-started",
    WHAT_IS_A_STOP_LOSS_ORDER: "/help-center/what-is-a-stop-loss-order",
    HOW_DO_MARKET_ORDERS_FILL: "/help-center/how-do-market-orders-fill",
    WHAT_IS_A_CLOSE_ON_TRIGGER_ORDER:
      "/help-center/what-is-a-close-on-trigger-order",
    HOW_DO_I_USE_HEDGE_MODE: "/help-center/how-do-i-use-hedge-mode",
    WHAT_ARE_CONDITIONAL_ORDERS: "/help-center/what-are-conditional-orders",
    HOW_DO_BUY_OR_SELL_A_COIN_SPOT_TRADING:
      "/help-center/how-do-i-buy-or-sell-a-coin-spot-trading",
    HOW_DO_CHANGE_TRADING_PAIRS_SYMBOLS:
      "/help-center/how-do-i-change-trading-pairs-symbols",
    PHEMEX_TESTNET: "https://testnet.phemex.com",
    PHEMEX_ANNIVERSARY: "https://anniversary.phemex.com",
    P2P_HOME: "/buy-crypto/fiat",
    P2P_HOME_LOGIN: "/buy-crypto/fiat/place-order",
    P2P_HOME_MARKET: "/buy-crypto/fiat/p2p-markets",
    COPY_TRADE: "/copy-trading/list",
    WEB3_PREMINING: "/web3/premining",
    WEB3_LENDING_MARKET: "/web3/lending",
    WEB3_LENDING_DETAILS: "/web3/lending/details-info",
    PREDICT_TO_EARN_DETAIL: "/crypto-prediction-market/detail",
    COPY_TRADE_LEADERBOARD: "/copy-trading/leaderboard",
    MY_REWARDS: "/bonus-center?tab=rewards",
    SPOT_MARGIN_DATA: "/spot/margin-data",
    CMS_CROSS_MARGIN_POSITION:
      "/help-center/how-is-liquidation-triggered-for-cross-margin-positions",
    CMS_MARGIN_GUIDE: "/help-center/how-do-i-margin-trade-on-phemex",
    CMS_MARK_PRICE: "/help-center/mark-price-and-dual-price-mechanism",
    PHEMEX_WHATS_IS_THE_CRYPTO_CONVERTER:
      "/help-center/whats-is-the-crypto-converter",
    PHEMEX_HOW_DO_I_USE_THE_CRYPTO_CONVERTER:
      "/help-center/how-do-i-use-the-crypto-converter",
    RECOMMEND_TO_TRADE_USDT:
      "/recommend-to-trade-usdt-margined-perpetual-contracts",
    FIAT_BUY_CRYPTO_PLACE_ORDER: "/fiat/buy-crypto/place-order",
    FIAT_DEPOSIT: "/fiat/deposit",
    BUY_CRYPTO_CARD_PLACE_ORDER: "/buy-crypto/card/place-order",
    BUY_CRYPTO_P2P_ORDERS: "/buy-crypto/fiat/orders",
    STRATEGY_DETAIL: "/bot-detail",
    STRATEGY_SQUARE: "/trading-bots",
    FUTURE_GRIDS_TRADING_CONTEST: "/trading-bots/futuregrids-contest",
    LEVERAGE_MARGIN: "/contract/leverage-margin",
    PHEMEX_CONTRACT_TRADE_USDS: "/trade/BTCUSDT",
    PROFIT_REINVESTMENT: "/help-center/what-is-profit-reinvestment",
    PHEMEXIA: "/web3/phemexia",
    WEB3_SOUL_PASS: "/web3/soulpass",
    WEB3_EQUITY_BENEFITS: "/web3/pt-benefits",
    WEB3_DUTCH_AUCTION: "/web3/pt-bidding",
    WEB3_STAKE: "/web3/stake/dashboard",
    WEB3_SOCIAL_TRADE_PT_REWARDS: "/web3/phemex-pulse/pt-rewards",
    WEB3_SOCIAL_TRADE_EXPLORE_GROUPS: "/web3/phemex-pulse/explore-groups",
    Web3_Whitepaper: "https://phemex.gitbook.io/phemex-web3-whitepaper/",
    PHEMEX_TR: "https://phemex.com.tr/",
    MOCK_TRADE: "/moc/trade/ETHMUSDT",
  },
  pd = [
    "/support",
    "/blogs",
    "/",
    "/help-center",
    "/help-center/what-is-a-bracket-order",
    "/help-center/risk-limit",
    "/help-center/what-is-the-insurance-fund-and-auto-deleveraging",
    "/help-center/what-is-a-stop-loss-order",
    "/help-center/how-do-market-orders-fill",
    "/help-center/what-is-a-close-on-trigger-order",
    "/help-center/what-are-conditional-orders",
    "/help-center/how-do-i-buy-or-sell-a-coin-spot-trading",
    "/help-center/how-do-i-change-trading-pairs-symbols",
    "/help-center/mark-price-and-dual-price-mechanism",
    "//recommend-to-trade-usdt-margined-perpetual-contracts",
    "/help-center/what-is-profit-reinvestment",
  ];
fd(Ei);
function fd(e) {
  Ie.isTestNet &&
    Object.keys(e).forEach((t) => {
      const r = e[t];
      pd.indexOf(r) > -1 &&
        (e[t] = window.location.origin.replace("testnet.", "") + r);
    });
}
const gd = { 3: 1, 120: 60, 180: 60, 360: 60, 720: 60 },
  jm = {
    convertResolution(e) {
      return (gd[e] || e) * 60;
    },
    convertToBar(e, t) {
      const { pricePrecision: r } = t,
        n = md(t),
        a = e[2] != 0 ? e[2] : e[3];
      return {
        close: wt(Number(e[6]), r, n),
        high: wt(Number(e[4]), r, n),
        low: wt(Number(e[5]), r, n),
        open: wt(Number(a), r, n),
        time: e[0] * 1e3,
        volume: Td(Number(e[7]), t),
      };
    },
  };
function md(e) {
  return e.type === "Spot" ? e.quoteQtyScale : e.priceScale;
}
function wt(e, t, r) {
  return Number(C.floor(e, t, r));
}
function Td(e, t) {
  if (t.type === "Spot") {
    const { baseQtyPrecision: r, baseQtyScale: n } = t;
    return wt(e, r, n);
  }
  return e;
}
const bd = {
    getOrderBookPerm() {
      return f.get(p.ORDER_BOOK_PERM, {});
    },
    orderBookAdjust(e) {
      return f.post(p.ORDER_BOOK_ADJUST, { params: e });
    },
  },
  Ed = `${xe.STATIC_URL}/s`,
  er = {
    GOOGLE_PLAY: "/home/download/google-play.png",
    APP_STORE: "/home/download/app-store.png",
    APP_DOWNLOAD_QR_CODE: "https://i.postimg.cc/Qt0c51kw/36424180-b6f16ad2-1642-11e8-8bf2-79c572077e0b.png",
    ANNOUNCEMENT: "/web/media/announcement.svg",
    ANNOUNCEMENT_BLUE: "/web/media/announcement_blue.svg",
    DOWNLOAD: "/web/media/download.svg",
    DOWNLOAD_BLUE: "/web/media/download_blue.svg",
    INVITE_BG: "/web/account/invite-friends/invite-bg.png",
    PREMIUM_CENTER_ICON: "/web/account/premium-center.svg",
    PREMIUM_CENTER_ICON_DARK: "/web/account/premium-center-dark.svg",
    PREMIUM_CENTER_ICON_HOVER: "/web/account/premium-center-hover.svg",
    GIFT_BOX: "/web/account/invite-friends/gift-box.svg",
    ZERO_FEE: "/web/account/zerofees.svg",
    GUIDANCE_IMG_1: "/trade/guidance/1.png",
    GUIDANCE_IMG_2: "/trade/guidance/1.png",
    GUIDANCE_IMG_3: "/trade/guidance/1.png",
    GIVE_AWAY: "/web/assets/give-away-v2.svg",
    FACEBOOK_IMG: "/web/media/facebook.svg",
    TWITTER_IMG:
      "https://img.phemex.com/v1/c80f707e-e491-410c-b9ed-e28fdf5e3d6c/twitter.svg",
    TELEGRAM_IMG: "/web/media/telegram.svg",
    YOUTUBE_IMG: "/web/media/youtube.svg",
    MICROBLOG_IMG: "/web/media/microblog.svg",
    NOTIFY: "/trade/spot/notice-img.png",
    MICRO_BLOG: "/web/media/microblog.svg",
    INVITE_FRIENDS_PEOPLE: "/home/account/invite-friends/people.png",
    INVITE_FRIENDS_ACQUIRE: "/home/account/invite-friends/acquire.svg",
    INVITE_FRIENDS_EARN: "/home/account/invite-friends/earn-blue.svg",
    CRYPTO_TRADING_HOT: "/home/war/hot-v3.svg",
    LOGO_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    CONTRACT_LOGO_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    CONTRACT_LOGO_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_TEST_NET_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_TEST_NET_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    TAG_NEWS: "/home/earn/earn-new.svg",
    EARN_ORANGE: "/home/earn/earn-orange.svg",
    EARN_NEW_2: "/home/earn/earn-new-2.svg",
    NO_LOGIN_MASK: "/home/3.0/mask.png",
    GET_PREMIUM: "/trade/spot-guidance/sorry.png",
    PREMIUM: "/home/receive/premium.png",
    STANDARD_USER: "/home/account/account-security/standard_user.png",
    PREMIUM_TRIAL: "/home/account/account-security/premium_trial.png",
    SORRY: "/trade/spot-guidance/sorry.png",
    WARING: "/home/war/waring.png",
    PAY_ERROR: "/web/account/payerror_v1.svg",
    PREMIUM_NOTIFICATION_WARING: "/web/account/notification_waring.svg",
    PREMIUM_NOTIFICATION: "/web/account/notification.svg",
    SHARE_INVITE_FRIENDS: "/home/account/invite-friends/share_v1.png",
    PREMIUM_TRAIL: "/home/receive/premium-trail.png",
    NEW: "/web/account/new.svg",
    EARN: "/web/account/earn.svg",
    LAUNCHPOOL: "/web/account/lanuchpool_icon_v1.svg",
    EARN_CRYPTO: "/web/account/earn-crypto-v2.svg",
    HOT: "/home/2.0/hot.png",
    COPY_TRADE_LIGHT: "/trade/copy-trading/ct-light.svg",
    COPY_TRADE_DARK: "/trade/copy-trading/ct-dark.svg",
    CONTRACT_MENU: "/trade/copy-trading/contract-menu.svg",
    COPY_TRADING_MENU: "/trade/copy-trading/copy-trading-menu.png",
    LEADERBOARD_MENU: "/trade/copy-trading/leaderboard-menu.svg",
    NO_DATA: "/home/buy-crypto/no-data.png",
    GRID_LIGHT: "/home/menu/gird-dark.svg",
    GRID_DARK: "/home/menu/grid-light.svg",
  };
Object.keys(er).forEach(
  (e) => !er[e].startsWith("https://") && (er[e] = [Ed, er[e]].join(""))
);
const Sd = `${xe.STATIC_URL}/pubimg/`,
  Oe = {
    EARN_HOME:
      "716c8088a9894cefd1a75cb9276e688c633025185ffbac7ca876ded08a94535f.png",
    SPOT_TRADING:
      "f821c3543d0ee1dd31d53668d0654eb08a34afa881cc1aa3fe2fb4a64e23db8e.png",
    MARGIN_TRADE_ICON:
      "0f13a181a5f87d62d620490c276f9a33638c5fb0df6aeece828028296c2c769c.png",
    CONVERT:
      "881843ab755d4ec18b581e2ba53c1535f97f70aef1a8e8997f829c6e2de9c52f.png",
    LAUNCHPAD:
      "9515716d0bf8084e174c2779c201d0d2cc6931bea0ca78b07da96e645e23092c.png",
    OTC: "ff763f30963144efea49f64bb97a6184ce0b26da0ae5ea6aff2101b53dca7978.png",
    BONUS:
      "476075d97dbd718f1361a9a0d9345ad320e7b9766323b6ff57841d8fec1b3526.png",
    BUY_CRYPTO_DEPOSIT:
      "168c24f6c27429bd8e57b11c6aa2dd891669964c866e086f326c71cac71dd761.png",
    CREDIT_CARD:
      "dc0c95c291a35ca47f767e5d3e3322b4caa11d035fae90aeef2879841e1b116f.png",
    PREMIUM:
      "998dc3a8a2a392eda453f6aca4e2bebc8c6b37a58b7f7773c7251bd7f85a963d.png",
    P2P_MARKER_PLACE_ICON:
      "9c3908b994a609a5e0d8437d0e357ad2a3331a47d6b6b1aeabffa48542665d02.png",
    NOTE_KYC:
      "67c69539b15fc689e76dc336c705c3400a86a232b9dda81fd59fcce2549f094e.png",
    USER_KYC:
      "53535b364903443c5cff56551a81d249a2f5c46888dcda945da09fb5937dcd41.png",
    CONTRACT_TRADE:
      "06c8ac40535a7491ae494b15bb42284c1fdca4804f73653abb70e8df330c2f72.png",
    COPY_TRADE:
      "f2d92837be42253e3cb597d414530dac91d7b669961354aefedf014a29f49a37.png",
    PREDICT_ICON:
      "acfbcd1ad0e7e87c82d8e8527ebbbc1a36d9544e4094151aca44d00c90c8246b.png",
    DANGER_ICON:
      "714130c1c44e093df75a169ffadd19251701cb9e80b80a6e240a546f1790fa4e.png",
    RECOMMEND_GIFT:
      "8f48aea164b034999266cc59b84c9e04ea536ac7baa225663936821e0b6bc8a0.png",
    COINM_MENU:
      "bb1e2564aabb7ae0810f4e2a02abfba2e8f0d6ce88a1400ebec5c927eca6ccca.png",
    COINS_MENU:
      "394994490bcba826df2f42d07982de7b639ed6ee7f40eacf8d2ec75cbc0c6e76.png",
    VIP_MENU:
      "03ce95826ed67df8c47fcc17f9d162a89181ac0fb063c550c586320780dbfa55.png",
    TRANSFER:
      "ffbe3afaf92a89435a6c465da4ada5dc95ce1ee2384b76497013e44273a37865.png",
    BANNER:
      "30f366b863d7b22e753ec004f8599e1a1b55749ba5f92bdd1de0e9f47e25c946.png",
    M_BANNER:
      "cd29b4b1b63dcfabc859ba20e2c4d70d01856a18a040d292b2708b76ed549998.png",
    CONVERT_DISABLED:
      "22dc33c0500f16f3e1f018056b3a8f42a709207dfc13286857d1d926d65ea294.png",
    CONVERT_SUCCESS:
      "6e3644c4a966963a5ea3adb1f2a0b56fd4f382c94483ec745d87e48254e3ffb8.png",
    CONVERT_FAIL:
      "3f2dbcdcf0fb08f72db81eafcdee223a35decf8c19ab15ed7abcec028c3346a6.png",
    CREDIT_DEBIT_CARDS:
      "925a281e64e62a543f0b4dfbfbd3aee4d1b2b6b54119cbed9223cc689c4bc401.png",
    TWITTER:
      "ebe1e569754ba8f435cf5a544055e97de553af55f5d50a80e8d615ef7bcc0672.png",
    FACEBOOK:
      "9cee169afafc0a56bcbe71d559391ebe9b909950ee7fe50369ff1d1379ddd945.png",
    TELEGRAM:
      "856f72e850e5b99ded18adbf3bae80f657f051f4640c292eaf6811da45b1d083.png",
    LINKEDIN:
      "db9366f85057d6c59a3d88505756100ec16605ee16abdeff7407d95c583a3210.png",
    REDDIT:
      "95ff654d0d6addbc89a07d38e3b9d2e514ee62a9e1235c285d007dc871125c67.png",
    JP_LOGO_PULSE_LIGHT:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    JP_LOGO_PULSE_DARK:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    Level1:
      "274d8392c0fcb1ea83b1fc5a388118d4e8a3a3f774342b1b71feee63bb73a7d8.png",
    Level2:
      "68869cd2f6a27a22ba5076b3bef0130ccf1872641c5c0f0833dab188105202b9.png",
    Level3:
      "27231853d8ecb59aee8b72b4f05ab2a76f704298c8ff3ef0d1b8abc6a8c84c86.png",
  };
Object.keys(Oe).forEach(
  (e) => (Oe[e] = Oe[e].startsWith("https://") ? Oe[e] : [Sd, Oe[e]].join(""))
);
const yd = `${xe.IMG_URL}/v1/`,
  Wr = {
    BOOK_DEFAULT: "284b7e62/default.png",
    BOOK_BUY: "e6729700/buy.png",
    BOOK_SELL: "09122f04/sell.png",
    BADGE_HOT: "c5c072e4/hot.png",
    BADGE_NEW: "7fe796c9/new-v1.png",
    BADGE_ZERO_FEE: "f61e4edd/zero-fee.png",
    NEW: "d4f84019/new.png",
    SHARE_BG: "dc7ecf3d/trading-bots.png",
    BOTS_ICON: "9b968b03/bot.png",
    OG: "01eacd71/bots-og.png",
    COPY: "0541141f/copy.png",
    SAVE: "f2e759d5/save.png",
    LOGO_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    NO_DATA: "c4765a2f/nodata-2x.png",
    COPY_PEOPLE_DARK: "ea11db48/join.png",
    COPY_PEOPLE_LIGHT: "67765928/join-light.png",
    SHARE: "27121c82/share.png",
    POSITION_SHARE_BG: "1bffa139/share-bg.png",
    POSITION_SHARE_BG2: "156af948/share-bg2.png",
    MOCK_TRADING: "7999a568/mock-trading.png",
    INCREASING_DARK: "e57aebc9-e17b-4620-8199-f3865cf371ab/increasing.svg",
    INCREASING_LIGHT:
      "aaf5699b-fa7a-4875-b17a-b72b5026d0a5/increasing-light.svg",
    DEGRESSION_DARK: "786b4f5e-9e34-4553-8725-f3a7bef85b80/degression.svg",
    DEGRESSION_LIGHT:
      "e6e8b5d9-c472-49e4-86bd-1d9539daad21/degression-light.svg",
    SCALED_ORDER: "dc714e59-2574-4988-a25e-eb1a045fb15b/scaled-order.png",
    FIRE: "664623f1-8884-4e08-81ff-c71e0d3fd96e/fire.svg",
    STAR: "e8a54035-06ca-4602-b73d-60effcb72bb4/new-star.svg",
    CIRCLE_RIGHT: "09e2ce6c-4f98-4d38-a2bb-45078f524c0e/circle-right.svg",
    CIRCLE_RIGHT_CHECKED:
      "d0943681-0dc3-4a8a-9d8d-1f8db82361b4/circle-right-checked.svg",
    ROCKET: "2522f35f-aa39-431c-a998-d87ff0ebbb8f/rocket.png",
    ROCKET_ICON: "4832067c-11a4-41ad-a255-cd93fa42cd5d/rocket-icon.png",
  };
Object.keys(Wr).forEach((e) => (Wr[e] = Wr[e].startsWith("https://") ? Wr[e] : [yd, Wr[e]].join("")));
const It = {
    FACEBOOK_IMG: "web/media/facebook.svg",
    TWITTER_IMG:
      "https://img.phemex.com/v1/c80f707e-e491-410c-b9ed-e28fdf5e3d6c/twitter.svg",
    TELEGRAM_IMG: "web/media/telegram.svg",
    MICROBLOG_IMG: "web/media/microblog.svg",
    LINKEDIN_IMG: "web/media/linkedin.svg",
    REDDIT_IMG: "web/media/reddit.svg",
    VK_IMG: "web/media/vk.svg",
    WHATSAPP_IMG: "web/media/whatsapp.svg",
    SNAPCHAT_IMG: "web/media/snapchat.svg",
  },
  _d = `${xe.STATIC_URL}/s/`;
Object.keys(It).forEach(
  (e) => !It[e].startsWith("https://") && (It[e] = [_d, It[e]].join(""))
);
const hd = `${xe.IMG_URL}/v1/`,
  Kr = {
    COPY: "a3a764cf-3ffa-4b49-a458-980bb52eb5ff/copy.svg",
    COPY_DARK: "61771e62-f6c6-4ea6-b62e-e2b5b8162e7b/copy.svg",
    SWITCH_ACCOUNT: "b8877eeb-1600-4391-b9ea-0c8f277fce6e/active.svg",
    SWITCH_ACCOUNT_DARK:
      "1ca12e9a-5e54-4a10-8c8c-24633218fd03/switch-account.svg",
    OVERVIEW: "59a80562-a884-4351-9ab7-b01f5ad2e685/overview.svg",
    OVERVIEW_DARK: "000bb153-3863-43bb-847c-b2bc0443abcc/overview.svg",
    VERIFICATION: "cce069df-e8fb-4322-9e08-4c8c4f324e4f/card.svg",
    VERIFICATION_DARK: "ebd4173b-b955-45cd-a6ab-20abe3dc98a7/verification.svg",
    SECURITY: "d44c7383-3108-4b37-9e8a-5fe58c680534/shield.png",
    SECURITY_DARK: "6f3a9c26-bdbe-462d-abfe-f3b85e195d00/security.svg",
    SUB_ACCOUNT: "53ee179f-2b17-457d-bbb3-4d684fd41bd6/sub-account.svg",
    SUB_ACCOUNT_DARK: "ee5dc1b2-76d6-4ec5-80ed-827aa6f5dc1f/sub-account.svg",
    API: "1ef44646-50c2-4bac-90b8-09898ace0f83/api.svg",
    API_DARK: "d14c9a45-2a92-4db5-b458-fa1fb5fa49fe/api.svg",
    TAX_REPORTING: "be55ef8b-fa5c-4add-8fed-5c8563f54931/tax-reporting.svg",
    TAX_REPORTING_DARK:
      "bafef2ac-6f90-4fc9-a94d-99f067edb2c1/tax-reporting.svg",
    INVITE_FRIENDS: "c8ca7458-d655-4b5b-bd56-81985f6d75a8/active.svg",
    INVITE_FRIENDS_DARK:
      "0e64e27e-cd24-49a3-94d1-2bbac163a4db/invite-friends.svg",
    SETTING: "1b4d871e-720e-4877-936e-c07bdecde6f4/setting.svg",
    SETTING_DARK: "688f6349-1806-430b-ae63-2292080eae69/setting.svg",
    LOG_OUT: "be7fecf0-1efe-47a0-878a-335b0f9c6fe5/active.svg",
    LOG_OUT_DARK: "cfd43d03-6d5b-4b27-90ee-cc3d545e3da3/log-out.svg",
  };
Object.keys(Kr).forEach((e) => (Kr[e] = [hd, Kr[e]].join("")));
const Da = "global_storage",
  Wn = {
    readGlobalStorage() {
      return M.readStorageObject(Da, Rd());
    },
    updateGlobalStorage(e) {
      M.writeStorageObject(Da, { ...Wn.readGlobalStorage(), ...e });
    },
  };
function Rd() {
  return { version: 1, themeType: Se.Dark };
}
const Kn = new d(Wn.readGlobalStorage().themeType),
  qm = Kn.pipe(u((e) => e === Se.Dark));
yt.subscribe((e) => {
  e.hasOwnProperty("darkTheme") && Kn.next(e.darkTheme ? Se.Dark : Se.Light);
});
Kn.subscribe((e) => {
  const { classList: t } = document.body;
  if (
    (t.add(e === Se.Light ? "light" : "dark"),
    t.remove(e === Se.Dark ? "light" : "dark"),
    Wn.updateGlobalStorage({ themeType: e }),
    te.getValue() !== "Login")
  )
    return;
  const { darkTheme: r } = yt.getValue();
  r !== void 0 &&
    ((r && e === Se.Dark) ||
      (!r && e === Se.Light) ||
      Ro("darkTheme", e === Se.Dark).then());
});
function vd(e, t, r) {
  return Ft(() => (t && t(), e)).pipe(
    O({ bufferSize: 1, refCount: !0 }),
    Is(() => {
      r && r();
    })
  );
}
const Ad = {
    transferMargin(e) {
      return f.put(p.MARGIN, { query: e });
    },
    indexQuote(e) {
      return f.get(p.INDEX_QUOTE, { query: e });
    },
    transfer(e) {
      return f.post(p.TRANSFER, { params: e });
    },
    getFiatBizGary() {
      return f.get(p.FIAT_BIZ_GARY, {});
    },
    getDataAssetsOverview(e) {
      return f.get(p.DATA_ASSETS_OVERVIEW, { query: e });
    },
  },
  Si = new L(),
  yi = new d(null);
yi.subscribe((e) => {
  S.next({ type: "assets", data: e });
});
V.isMock() || Si.pipe(Cs(200), w(Od), g(Boolean)).subscribe(yi);
async function Od() {
  const { data: e, error: t } = await Ad.getDataAssetsOverview({
    includeSub: !1,
    includeFiat: !0,
  });
  return t
    ? (I.send("toast", "error", t),
      {
        userId: 0,
        includeSub: !0,
        includeFiat: !0,
        usdTotalAssets: "0",
        usdtTotalAssets: "0",
        btcTotalAssets: "0",
        localCurrency: "0",
        localCcyTotalAssets: "0",
        timestampMill: "0",
        expiredTimeMill: "0",
        details: [],
      })
    : e;
}
const Qm = vd(
  S.pipe(
    g((e) => e.type === "assets"),
    u((e) => e.data.assets),
    N(wd()),
    O(1)
  ),
  () => {
    S.next({ type: "dynamic-subscribe", method: "subscribeAssets" }), Si.next();
  }
);
function wd() {
  const e = {
    btcEv: 0,
    btc: "--",
    usdEv: 0,
    usd: "--",
    money: "--",
    usdtEv: 0,
    usdt: "--",
  };
  return {
    isInit: !0,
    ...e,
    localCurrency: "",
    details: {
      spot: e,
      spotMargin: e,
      spotStrategy: e,
      contract: e,
      contractStrategy: e,
      copyTrade: e,
      investment: e,
      fiat: e,
      lending: e,
      trading: e,
      funding: e,
      spotAll: e,
      contractAll: e,
      tradingAll: e,
      tradingBot: e,
    },
  };
}
const Id = { cn: "zh" },
  Xm = {
    getLanguageKey(e) {
      return Id[e] || e;
    },
  },
  Cd = "contract_tv",
  Zm = "spot_tv",
  ue = {
    readTradingViewStorage(e) {
      return M.readStorageObject(e, Dd());
    },
    readInterval(e) {
      return ue.readTradingViewStorage(e).interval;
    },
    updateInterval(e, t) {
      M.writeStorageObject(e, { ...ue.readTradingViewStorage(e), interval: t });
    },
    readPriceType(e) {
      return ue.readTradingViewStorage(e).priceType;
    },
    updatePriceType(e, t) {
      M.writeStorageObject(e, {
        ...ue.readTradingViewStorage(e),
        priceType: t,
      });
    },
    readIsInit(e) {
      return ue.readTradingViewStorage(e).isInit;
    },
    updateIsInit(e, t) {
      M.writeStorageObject(e, { ...ue.readTradingViewStorage(e), isInit: t });
    },
    readTheme(e) {
      return ue.readTradingViewStorage(e).theme;
    },
    updateTheme(e, t) {
      M.writeStorageObject(e, { ...ue.readTradingViewStorage(e), theme: t });
    },
    readSettings(e) {
      return ue.readTradingViewStorage(e).settings;
    },
    updateSettings(e, t) {
      M.writeStorageObject(e, { ...ue.readTradingViewStorage(e), settings: t });
    },
    readMAStudy(e) {
      return ue.readTradingViewStorage(e).study;
    },
    updateMAStudy(e, t) {
      M.writeStorageObject(e, { ...ue.readTradingViewStorage(e), study: t });
    },
  };
function Dd() {
  return {
    version: 1,
    isInit: !0,
    theme: Se.Dark,
    interval: "15",
    settings: null,
  };
}
const Nd = S.pipe(
    g((e) => e.type === "contract-biz"),
    u((e) => e.data)
  ),
  Cr = new d([]);
he.pipe(g(Boolean)).subscribe(() => _i());
Nd.pipe(
  g((e) =>
    e == null ? void 0 : e.some(({ eventType: t }) => t === "slippageSetting")
  )
).subscribe(() => _i());
async function _i() {
  const { data: e, error: t } = await ge.customizeQuery();
  e && Cr.next(e), t && I.send("toast", "error", t);
}
async function hi({ bizKey: e, curVersion: t, settings: r }) {
  const n = t + 1,
    a = { bizVal: JSON.stringify(r), bizKey: e, version: n },
    { data: o, error: i } = await ge.customizeBiz(a);
  return o ? n : (i && I.send("toast", "error", i), -1);
}
const Ri = "tvSetting",
  Jm = new d(!1),
  eT = new d(!1),
  vi = new d(Ai()),
  Pd = new L(),
  tT = new d(ue.readPriceType(Cd) || Fn.Last),
  mn = new d(1);
function Ai() {
  return {
    favoriteIntervals: [
      "1",
      "5",
      "15",
      "30",
      "60",
      "180",
      "240",
      "360",
      "720",
      "1D",
      "1W",
    ],
    quickPlaceMarketOrder: !0,
    quickPlaceLimitOrder: !0,
    activeOrderLine: !0,
    conditionalOrderLine: !0,
    takeProfitStopLossLine: !0,
    liquidationLine: !1,
    positionLine: !0,
    closePositionConfirm: !0,
    reversePositionConfirm: !0,
    labelPosition: "Right",
    orderHistory: !0,
    estPnl: !0,
  };
}
Cr.subscribe((e) => {
  const t = e.find((r) => r.bizKey === Ri);
  t && (vi.next({ ...Ai(), ...JSON.parse(t.bizVal) }), mn.next(t.version));
});
A([he, vi, Pd])
  .pipe(
    Er(1e3),
    g(([e]) => e),
    w(([e, t]) => {
      const r = mn.getValue();
      return hi({ bizKey: Ri, curVersion: r, settings: t });
    })
  )
  .subscribe((e) => mn.next(e));
const rT =
  (e = "/pubimg/") =>
  (t) =>
    t ? `${xe.STATIC_URL}${e}${t}` : "";
function nT(e, t) {
  const r = e(Ei.ASSETS_DEPOSIT),
    n = Q.stringify({ callChainDeposit: 1, ...(t || {}) });
  return `${r}?${n}`;
}
const Ld = new d(!1);
Ie.isTestNet &&
  te
    .pipe(
      g((e) => e === "Login"),
      w(xd)
    )
    .subscribe();
async function xd() {
  const { data: e, error: t } = await bd.getOrderBookPerm();
  e && Ld.next(e.orderBookPerm), t && Nn.error(t);
}
const Kt = {
  availableSymbol(e) {
    return f.get(p.STRATEGY_AVAILABLE_SYMBOL, { query: e });
  },
  createConfig(e) {
    return f.get(p.STRATEGY_CREATE_CONFIG, { query: e });
  },
  recommendList(e) {
    return f.get(
      e.strategyType === "CONTRACT_MARTIN"
        ? p.STRATEGY_MARTIN_RECOMMEND_LIST
        : p.STRATEGY_RECOMMEND_LIST,
      {
        query: e,
        formatter: (t) => (
          t.forEach((r) => {
            r.profitHistory = r.profitHistory || [];
          }),
          t
        ),
      }
    );
  },
  recommendDetail(e) {
    return f.get(p.STRATEGY_RECOMMEND_DETAIL, { query: e });
  },
  async create(e) {
    const t = await f.post(p.STRATEGY_CREATE, { params: e });
    return t.error && I.send("toast", "error", t.error), t;
  },
  openList(e) {
    return f.get(p.STRATEGY_OPEN_LIST, { query: e });
  },
  historyList(e) {
    return f.get(p.STRATEGY_HISTORY_LIST, { query: e });
  },
  increaseBalance(e) {
    return f.post(p.STRATEGY_INCREASE_BALANCE, { params: e });
  },
  updateStrategyTpsl(e) {
    return f.post(p.STRATEGY_UPDATE_TPSL, { params: e });
  },
  updateStrategyTrigger(e) {
    return f.post(p.STRATEGY_UPDATE_TRIGGER, { params: e });
  },
  async start(e) {
    const t = await f.post(p.STRATEGY_START, { params: e });
    return t.error && I.send("toast", "error", t.error), t;
  },
  async stop(e) {
    const t = await f.post(p.STRATEGY_STOP, { params: e });
    return t.error && I.send("toast", "error", t.error), t;
  },
  async martinCreate(e) {
    const t = await f.post(p.STRATEGY_MARTIN_CREATE, { params: e });
    return t.error && I.send("toast", "error", t.error), t;
  },
  martinHistoryList(e) {
    return f.get(p.STRATEGY_MARTIN_HISTORY_LIST, { query: e });
  },
  martinTpSl(e) {
    return f.post(p.STRATEGY_MARTIN_TPSL, { params: e });
  },
  martinStrategyDetail(e) {
    return f.get(p.STRATEGY_MARTIN_DETAIL, { query: e });
  },
  signalCreate(e) {
    return f.post(p.STRATEGY_SIGNAL_CREATE, { params: e });
  },
  signalUpdate(e) {
    return f.post(p.STRATEGY_SIGNAL_UPDATE, { params: e });
  },
  signalDelete(e) {
    return f.post(p.STRATEGY_SIGNAL_DELETE, { params: e });
  },
  signalDetail(e) {
    return f.get(p.STRATEGY_SIGNAL_DETAIL, { query: e });
  },
  signalListQuery(e) {
    return f.get(p.STRATEGY_SIGNAL_LIST, { query: e });
  },
  signalStrategyCreate(e) {
    return f.post(p.STRATEGY_SIGNAL_STRATEGY_CREATE, { params: e });
  },
  signalStrategyAdjustTpsl(e) {
    return f.post(p.STRATEGY_SIGNAL_STRATEGY_ADJUST_TPSL, { params: e });
  },
  signalStrategyHistory(e) {
    return f.get(p.STRATEGY_SIGNAL_STRATEGY_HISTORY, { query: e });
  },
  async martinUpdateStartCondition(e) {
    const t = await f.post(p.STRATEGY_MARTIN_UPDATE_START_CONDITION, {
      params: e,
    });
    return t.error && I.send("toast", "error", t.error), t;
  },
  async martinUpdateStopCondition(e) {
    const t = await f.post(p.STRATEGY_MARTIN_UPDATE_STOP_CONDITION, {
      params: e,
    });
    return t.error && I.send("toast", "error", t.error), t;
  },
};
new d(!1);
const aT = new d([]),
  oT = new d(""),
  Md = new L(),
  Ud = new d({ loading: !0, list: [] });
Md.pipe(
  w((e) => Kt.availableSymbol({ strategyType: e })),
  u((e) => ({ loading: !1, list: (e.data || []).map((r) => r.symbol) }))
).subscribe((e) => Ud.next(e));
const iT = De.pipe(
    u((e) => e.isMain),
    N(!1)
  ),
  sT = new d("Standard"),
  cT = new d("Home"),
  uT = new d("Recommend"),
  lT = new d("Grid"),
  dT = new d("Active"),
  kd = new L(),
  Bd = new d({ loading: !0, success: !0, data: [] });
kd.pipe(w((e) => Dr(Kt.openList(e)))).subscribe((e) => {
  Bd.next(
    e.loading
      ? e
      : { loading: !1, success: !0, data: (e == null ? void 0 : e.data) || [] }
  );
});
const Gd = new L(),
  $d = new d({ loading: !0, success: !0, data: [] });
Gd.pipe(w((e) => Dr(Kt.historyList(e)))).subscribe((e) => {
  var t;
  $d.next(
    e.loading
      ? e
      : {
          loading: !1,
          success: !0,
          data:
            ((t = e == null ? void 0 : e.data) == null ? void 0 : t.rows) || [],
        }
  );
});
const Vd = new L(),
  Fd = new d({ loading: !0, success: !0, data: [] });
Vd.pipe(w((e) => Dr(Kt.martinHistoryList(e)))).subscribe((e) => {
  var t;
  Fd.next(
    e.loading
      ? e
      : {
          loading: !1,
          success: !0,
          data:
            ((t = e == null ? void 0 : e.data) == null ? void 0 : t.rows) || [],
        }
  );
});
const Yd = new L(),
  Hd = new d({ loading: !0, success: !0, data: [] });
Yd.pipe(w((e) => Dr(Kt.recommendList(e)))).subscribe((e) => {
  Hd.next(
    e.loading
      ? e
      : { loading: !1, success: !0, data: (e == null ? void 0 : e.data) || [] }
  );
});
function Dr(e, t = { loading: !0, data: [], success: !1, isInit: !0 }) {
  return qa(e).pipe(N(t));
}
const pT = Fe.pipe(
  u((e) => {
    var t;
    return ((t = e == null ? void 0 : e[0]) == null ? void 0 : t.leverage) || 5;
  }),
  O(1)
);
Fe.pipe(u((e) => e.map((t) => ({ value: t.symbol, text: t.displaySymbol }))));
const fT = rt.pipe(
    u((e) =>
      e
        .filter((t) => t.canBorrow)
        .map((t) => ({
          value: t.currency,
          text: t.currency,
          name: t.name,
          valuePrecision: t.valuePrecision,
        }))
    )
  ),
  gT = rt.pipe(
    u((e) =>
      e
        .filter((t) => t.canRepay)
        .map((t) => ({
          value: t.currency,
          text: t.currency,
          name: t.name,
          valuePrecision: t.valuePrecision,
        }))
    )
  ),
  mT = rt.pipe(
    u((e) =>
      e
        .filter((t) => t.canTransferIn)
        .map((t) => ({ value: t.currency, text: t.currency }))
    )
  ),
  TT = rt.pipe(
    u((e) =>
      e
        .filter((t) => t.canTransferOut)
        .map((t) => ({ value: t.currency, text: t.currency }))
    )
  );
rt.pipe(u((e) => e.map((t) => ({ value: t.currency, text: t.currency }))));
Fe.pipe(
  g((e) => e.length > 0),
  u((e) => {
    const t = e.map(({ leverage: r }) => r);
    return Math.max(...t);
  })
);
const Oi = new U(1);
A([nt, yo])
  .pipe(u(([e, t]) => e || !t))
  .subscribe((e) => Oi.next(e));
const Wd = new d([]);
te.pipe(
  g((e) => e === "Login"),
  w(() => Dn.getChildrenBaseInfo())
).subscribe(({ data: e }) => {
  e && Wd.next(e);
});
var zn = ((e) => ((e.Position = "Position"), (e.Actual = "Actual"), e))(
  zn || {}
);
const Kd = new d(zd());
Kd.subscribe((e) => ft.updateContractStorage({ placeOrderSide: e }));
function zd() {
  const e = ft.readContractStorage();
  return e && e.placeOrderSide ? e.placeOrderSide : K.Left;
}
const wi = {
    groupsAll() {
      return f.get(p.MARKET_FAVORITE_GROUPS, {});
    },
    groupAdd(e) {
      return f.post(p.MARKET_FAVORITE_GROUPS_ADD, { params: e });
    },
    groupDelete(e) {
      return f.post(p.MARKET_FAVORITE_GROUPS_DELETE, { params: e });
    },
    groupRename(e) {
      return f.post(p.MARKET_FAVORITE_GROUPS_RENAME, { params: e });
    },
    instrumentAdd(e) {
      return f.post(p.MARKET_FAVORITE_INSTRUMENT_add, { params: e });
    },
    instrumentDelete(e) {
      return f.post(p.MARKET_FAVORITE_INSTRUMENT_DELETE, { params: e });
    },
    instrumentTop(e) {
      return f.post(p.MARKET_FAVORITE_INSTRUMENT_TOP, { params: e });
    },
    instrumentSort(e) {
      return f.post(p.MARKET_FAVORITE_INSTRUMENT_SORT, { params: e });
    },
  },
  Ii = new U(1),
  Ci = new d([]),
  Di = new d([]),
  jd = new d(!1),
  jn = new L();
A([Ii, lu])
  .pipe(
    u(Ni),
    u((e) => e.sort(Pi({ sortKey: "orderNum", side: "up" }))),
    u((e) => e.map((t) => t.symbol))
  )
  .subscribe((e) => Ci.next(e));
A([Ii, Oo])
  .pipe(
    u(Ni),
    u((e) => e.sort(Pi({ sortKey: "orderNum", side: "up" }))),
    u((e) => e.map((t) => t.symbol))
  )
  .subscribe((e) => {
    Di.next(e);
  });
function Ni([e, t]) {
  return e.filter((r) => {
    const n = t.get(r.symbol);
    return n ? ["Listed", "PreList", "Suspend"].includes(n.status) : !1;
  });
}
I.subscribe(
  "symbol-favorite",
  "Add",
  async ({ symbol: e, type: t, groupIds: r }) => {
    const n = t === "Spot" ? "Spot" : "Contract";
    await qd(e, n, r),
      et.track("add_collection", {
        symbol: e,
        market: n,
        add_source_page: "trade_page",
      });
  }
);
async function qd(e, t, r) {
  const a = { symbols: typeof e == "string" ? [e] : [...e], groupIds: r },
    { data: o, error: i } = await wi.instrumentAdd(a);
  o && I.send("user-groups", "refresh"), i && I.send("toast", "error", i);
}
I.subscribe(
  "symbol-favorite",
  "Remove",
  async ({ symbol: e, type: t, groupIds: r }) => {
    const n = t === "Spot" ? "Spot" : "Contract";
    et.track("delete_collection", {
      symbol: e,
      market: n,
      delete_source_page: "trade_page",
    }),
      await Qd(e, r);
  }
);
async function Qd(e, t) {
  const r = { symbols: [e], groupIds: t },
    { data: n, error: a } = await wi.instrumentDelete(r);
  n && I.send("user-groups", "refresh"), a && I.send("toast", "error", a);
}
function Pi(e) {
  return function (t, r) {
    const { sortKey: n, side: a } = e,
      o = t[n],
      i = r[n];
    return a === "down" ? i - o : o - i;
  };
}
function Li({ symbols: e, symbol: t, orderNum: r }) {
  const n = e.findIndex((i) => i === t),
    a = r > -1 && r < e.length;
  if (n < 0 || !a) return e;
  const o = [...e];
  return o.splice(r, 0, o.splice(n, 1)[0]), o;
}
function xi(e) {
  const t = e.map((r, n) => ({ symbol: r, orderNum: n }));
  return he.pipe(
    g(Boolean),
    w(() => ge.updateContractFavoriteOrder({ symbolList: t })),
    Le((r) => {
      const n = r == null ? void 0 : r.error;
      n && (jd.next(!0), I.send("toast", "error", n));
    })
  );
}
const bT = he.pipe(
  g(Boolean),
  Qa(yt),
  u((e) => Xd(e.contractFavoritesTopTabBar))
);
function ET(e) {
  return he
    .pipe(
      g(Boolean),
      w(() => Ro("contractFavoritesTopTabBar", e === Nt.Visible))
    )
    .pipe(Lt(1))
    .subscribe();
}
function Xd(e) {
  return typeof e == "boolean"
    ? e
      ? Nt.Visible
      : Nt.Hidden
    : e === Nt.Visible;
}
const Zd = Ft(() => gl(() => Promise.resolve().then(() => bg), void 0)).pipe(
    Ds(3),
    O(1)
  ),
  ST = Zd.pipe(u((e) => e.dndzone)),
  Mi = new L();
Mi.pipe(
  Tr(Di),
  u(([{ symbol: e, orderNum: t }, r]) =>
    Li({ symbols: r, symbol: e, orderNum: t })
  ),
  w((e) => xi(e)),
  Le(() => {
    jn.next(!0);
  })
).subscribe();
function yT(e) {
  Mi.next(e);
}
const Jd = new L();
Jd.pipe(
  Tr(Ci),
  u(([{ symbol: e, orderNum: t }, r]) =>
    Li({ symbols: r, symbol: e, orderNum: t })
  ),
  w((e) => xi(e)),
  Le(() => {
    jn.next(!0);
  })
).subscribe();
jn.pipe(
  w(() => he.pipe(Le(() => I.send("user-groups", "refresh"))))
).subscribe();
const Bt = new d(null),
  ep = new d([]);
Ce.subscribe(() => Bt.next([]));
S.pipe(
  g((e) => e.type === "positions"),
  u((e) => e.data.positions)
).subscribe((e) => {
  if (e.length < 1) {
    Bt.next([]);
    return;
  }
  Bt.next(e);
});
const tp = A([Ye, Bt]).pipe(
  g(([e, t]) => t && t.length > 0),
  u(([e, t]) => t.find((r) => r.symbol === e.symbol && r.posSide === "Merged")),
  g(Boolean),
  O(1)
);
S.pipe(
  g((e) => e.type === "contract-margin-level"),
  u((e) => e.data.marginLevels)
).subscribe((e) => ep.next(e));
const Ui = "positionSetting",
  rp = new d(Dt.Hedge),
  np = new d(zn.Position),
  ap = new L(),
  ki = new d(Bi()),
  Tn = new d(1),
  qn = A([Ye, Bt]).pipe(
    g(([e, t]) => t && t.length > 0),
    u(([e, t]) => t.filter((r) => r.symbol === e.symbol)),
    g(Boolean),
    N([]),
    O(1)
  );
qn.pipe(
  u((e) =>
    e.filter(({ posMode: t }) => !!t).every(({ posMode: t }) => t === Dt.Hedge)
  )
).subscribe((e) => rp.next(e ? Dt.Hedge : Dt.OneWay));
function Bi() {
  return { leverageDisplayMode: zn.Position, priceSelectionBasis: Fn.Last };
}
Cr.subscribe((e) => {
  const t = e.find((r) => r.bizKey === Ui);
  if (t) {
    const r = { ...Bi(), ...JSON.parse(t.bizVal) };
    ki.next(r), Tn.next(t.version), np.next(r.leverageDisplayMode);
  }
});
A([he, ki, ap])
  .pipe(
    Er(1e3),
    g(([e]) => e),
    w(([e, t]) => {
      const r = Tn.getValue();
      return hi({ bizKey: Ui, curVersion: r, settings: t });
    })
  )
  .subscribe((e) => Tn.next(e));
const op = "slippageSetting",
  ip = new d([]),
  sp = new d(1);
function _T(e) {
  return new Promise(function (t, r) {
    try {
      Oo.subscribe((n) => {
        t(n.get(e));
      });
    } catch {
      r(null);
    }
  });
}
Cr.subscribe((e) => {
  const t = e == null ? void 0 : e.find((r) => r.bizKey === op);
  if (t)
    try {
      ip.next(JSON.parse((t == null ? void 0 : t.bizVal) ?? "")),
        sp.next((t == null ? void 0 : t.version) ?? 1);
    } catch {}
});
const Nr = window,
  Tt = new d({ online: Nr.navigator.onLine, delay: 0, lastTime: Date.now() });
Nr.addEventListener("online", Gi);
Nr.addEventListener("offline", Gi);
S.pipe(g((e) => e.type === "network-delay")).subscribe(
  ({ data: { delay: e } }) => Tt.next({ ...Tt.getValue(), delay: e })
);
S.pipe(g((e) => e.type === "network-last-time")).subscribe(
  ({ data: { lastTime: e } }) => Tt.next({ ...Tt.getValue(), lastTime: e })
);
function Gi() {
  const e = Nr.navigator.onLine;
  Tt.next({ ...Tt.getValue(), online: e });
}
const cp = {
    getProduct() {
      return f.get(p.INVESTMENT_PRODUCT, {});
    },
  },
  $i = new d([]),
  up = new d("-");
$i.pipe(u(lp)).subscribe((e) => up.next(e));
async function hT() {
  const { data: e, error: t } = await cp.getProduct();
  if (e) {
    $i.next(e.rows);
    return;
  }
  t && I.send("toast", "error", t);
}
function lp(e) {
  const t = e.map((n) => n.rateEr);
  if (t.length < 1) return "--%";
  const r = Math.max(...t);
  return C.floor(r, 2, 6) + "%";
}
const dp = new d({ priceEp: 1e4, price: "1" });
S.pipe(g((e) => e.type === "fiat-rate")).subscribe(({ data: e }) =>
  dp.next(e.fiatRate)
);
const Na = "spot_symbol_cache_",
  pp = {
    readSpotSymbolStorage(e) {
      return M.readStorageObject(Na + e, fp());
    },
    updateSpotSymbolStorage(e, t) {
      M.writeStorageObject(Na + e, { ...pp.readSpotSymbolStorage(e), ...t });
    },
  };
function fp() {
  return { version: 1, symbol: "", timeInForce: "GoodTillCancel" };
}
const gp = `${xe.STATIC_URL}/s/web/assets/`,
  RT = {
    getUrl(e) {
      return (e = e === "MUSDT" ? "USDT" : e), gp + e + ".svg";
    },
  },
  Vi = "MARKET_CATEGORY";
function vT() {
  const e = localStorage.getItem(Vi);
  return e ? JSON.parse(e) : {};
}
function AT(e) {
  localStorage.setItem(Vi, JSON.stringify(e));
}
const Qn = S.pipe(
    g((e) => e.type === "margin-trade-accounts"),
    u((e) => e.data.accounts),
    N([]),
    O(1)
  ),
  Fi = new L();
S.pipe(
  g((e) => e.type === "update-margin-account-status"),
  u((e) => e.data),
  q()
).subscribe((e) => Wt.next(e.isActivateMarginAccount));
Me.pipe(g((e) => e.mode === "Margin")).subscribe(({ symbol: e }) => {
  e !== mt.readMarginStorage().lastSymbol &&
    mt.updateMarginStorage({ lastSymbol: e });
});
A([Me, Oi])
  .pipe(g(([e, t]) => e.mode === "Margin" && !t))
  .subscribe(([e]) => {
    I.send("trade-pair", "change", { type: "Spot", symbol: e.symbol });
  });
A([Wt, Me])
  .pipe(
    g(([e]) => !!e),
    Lt(1),
    w(() => Mt.getWallets())
  )
  .subscribe();
A([Wt, Me, Qn])
  .pipe(
    g(([e]) => !!e),
    u(([, e, t]) => t.find((r) => r.currency === e.baseCurrency)),
    g((e) => e && hc(e.hourlyInterestRateEr, 0)),
    u((e) => e.currency),
    q()
  )
  .subscribe((e) => Fi.next(e));
A([Fi, su])
  .pipe(
    u(([e, t]) => (e && t.has(e) ? t.get(e).code : null)),
    q(),
    w((e) => Mt.getWallets({ currencyCode: e }))
  )
  .subscribe();
const OT = new d(null),
  wT = _t.pipe(
    u((e) => Pr(e, "currency")),
    u((e) => (t) => e[t]),
    N(() => {}),
    O(1)
  );
rt.pipe(
  u((e) => Pr(e, "currency")),
  u((e) => (t) => e[t]),
  N(() => {}),
  O(1)
);
const IT = Qn.pipe(
    u((e) => Pr(e, "currency")),
    u((e) => (t) => e[t]),
    N(() => {}),
    O(1)
  ),
  CT = Fe.pipe(
    u((e) => Pr(e, "symbol")),
    u((e) => (t) => e[t]),
    N(() => {}),
    O(1)
  );
function Pr(e, t) {
  return e.reduce((r, n) => ((r[n[t]] = n), r), {});
}
const mp = S.pipe(
  g((e) => e.type === "spot-wallets"),
  u((e) => e.data.wallets),
  N([]),
  O(1)
);
mp.subscribe();
const Tp = {
  findAccount(e, t) {
    return e.find((r) => r.currency === t) || bp(t);
  },
};
function bp(e) {
  const t = e === "USD" ? 2 : 8,
    r = (0).toFixed(t),
    n = (0).toFixed(4),
    a = r + " " + e,
    o = n + " " + e;
  return {
    currency: e,
    accountBalanceEv: 0,
    accountBalance: r,
    totalUsedBalanceEv: 0,
    totalUsedBalance: r,
    availableBalanceEv: 0,
    availableBalance: r,
    availableBalanceWU: a,
    availableBalance2: r,
    availableBalance2WU: a,
    availableBalance4: n,
    availableBalance4WU: o,
    availableTransferBalanceEv: 0,
    availableTransferBalanceWU: a,
    availableTransferBalance2WU: a,
    bonusBalanceEv: 0,
    bonusBalance: r,
    equityEv: 0,
    equity: r,
    unrealisedPnlEv: 0,
    unrealisedPnl: r,
    marginBalanceEv: 0,
    marginBalance: r,
    positionMarginEv: 0,
    positionMargin: r,
    orderMarginEv: 0,
    orderMargin: r,
  };
}
const Yi = new d([]);
S.pipe(
  g((e) => e.type === "accounts"),
  u((e) => e.data.accounts)
).subscribe((e) => Yi.next(e));
S.pipe(g((e) => e.type === "et-track")).subscribe((e) =>
  et.track(e.data.event, e.data.params)
);
const DT = S.pipe(
    g((e) => e.type === "fund-accounts"),
    u((e) => e.data.accounts),
    N([]),
    O(1)
  ),
  NT = S.pipe(
    g((e) => e.type === "fund-scale-accounts"),
    u((e) => e.data.accounts),
    N([]),
    O(1)
  ),
  Ep = new d([]);
S.pipe(
  g((e) => e.type === "lending-accounts"),
  u((e) => e.data.accounts)
).subscribe((e) => Ep.next(e));
const PT = {
  findMaxTransferOutAmount(e, t) {
    const r = e.find((n) => n.currency === t);
    return r
      ? {
          maxTransferOutAmountEv: Number(r.maxTransferOutAmountEv),
          maxTransferOutAmount: r.maxTransferOutAmount,
        }
      : { maxTransferOutAmountEv: 0, maxTransferOutAmount: (0).toFixed(8) };
  },
};
function LT(e, t) {
  return async function (r) {
    await e(t, r);
  };
}
const Sp = new d(!1);
S.pipe(
  g((e) => e.type === "spot-pt-discount-state"),
  u((e) => e.data.state)
).subscribe((e) => Sp.next(e));
const Xn = Ft(() => vp(nt.getValue())()).pipe(u((e) => e.data || [])),
  Hi = new L(),
  yp = Xn,
  _p = Ns(30 * 1e3).pipe(w(() => Xn)),
  hp = Hi.pipe(w(() => Xn)),
  Rp = br(yp, _p, hp).pipe(O(1)),
  xT = Wt.pipe(
    g(Boolean),
    q(),
    Qa(
      A([Rp, Qn]).pipe(
        u(
          ([e, t]) =>
            function (r, n = !1) {
              var i;
              const a =
                  ((i = e.find((s) => s.currency === r)) == null
                    ? void 0
                    : i.balanceRq) || "0",
                o = t.find((s) => s.currency === r);
              return n
                ? Ea(a, (o == null ? void 0 : o.remainingBorrow2XEv) || "0")
                : Ea(a, (o == null ? void 0 : o.remainingBorrowEv) || "0");
            }
        )
      )
    ),
    N(function (e) {
      return "0";
    })
  );
function MT() {
  Hi.next(!0);
}
function vp(e) {
  return e ? Mt.getUtaSysRemainingBorrow : Mt.getSysRemainingBorrow;
}
const Wi = new d(Ap()),
  UT = Wi.pipe(
    u((e) => ({ riskLevel: e.riskLevel, riskLevelEr: e.riskLevelEr }))
  );
S.pipe(g((e) => e.type === "margin-assets-overview")).subscribe((e) =>
  Wi.next(e.data)
);
function Ap() {
  return {
    totalEquityEv: "0",
    totalDebtEv: "0",
    netEquityEv: "0",
    totalEquityUsd: "--",
    totalDebtUsd: "--",
    netEquityUsd: "--",
    totalEquityBtc: "--",
    totalDebtBtc: "--",
    netEquityBtc: "--",
    maxTransferOutValueEv: "0",
    riskLevel: "--",
    riskLevelEr: "Infinity",
    totalAvailableEv: "0",
    totalAvailableUsd: "--",
    totalMarginEv: "0",
    totalMarginUsd: "--",
    totalFreezeEv: "0",
    totalFreezeUsd: "--",
  };
}
var re = ((e) => ((e.Spot = "Spot"), (e.Margin = "Margin"), e))(re || {});
function ot(e, t, r) {
  const n = new d(null),
    a = new d(r),
    o = new L(),
    i = new d(null);
  return (
    e
      .pipe(
        g((s) => Object.hasOwnProperty.call(t, s)),
        u((s) => t[s]),
        Le(() => {
          const s = n.getValue();
          s && s.unsubscribe();
          const c = i.getValue();
          c && c.unsubscribe();
        })
      )
      .subscribe((s) => {
        a.next(r);
        const c = s.subscribe((l) => a.next(l)),
          m = o.subscribe((l) => s.next(l));
        n.next(c), i.next(m);
      }),
    [a, o]
  );
}
const [kT] = ot(at, { [re.Margin]: Bn, [re.Spot]: xn }, []),
  [BT] = ot(at, { [re.Margin]: Go, [re.Spot]: ko }, ""),
  [GT] = ot(at, { [re.Margin]: Gn, [re.Spot]: Mn }, []),
  [$T] = ot(at, { [re.Margin]: $o, [re.Spot]: Bo }, ""),
  [VT] = ot(at, { [re.Margin]: Vn, [re.Spot]: kn }, []),
  FT = A([Ye, Yi]).pipe(u(([e, t]) => Tp.findAccount(t, e.settleCurrency)));
function YT(e = 8, t = 0) {
  const r = new Date(),
    n = r.getUTCHours(),
    a = r.getUTCMinutes(),
    o = r.getUTCSeconds(),
    s = ((Math.floor(n / e) + 1) * e - n) * 60 * 60 - a * 60 - o + t / 1e3;
  return `${Math.floor(s / 3600)}:${C.pad(Math.floor(s / 60) % 60)}:${C.pad(
    s % 60
  )}`;
}
const HT = S.pipe(
    g((e) => e.type === "market24h-contract-realtime"),
    u((e) => e.data),
    O(1)
  ),
  de = {
    toValueUnit(e) {
      return ct(e) || e.contractSide > 0
        ? e.settleCurrency
        : e.contractUnderlyingAssets;
    },
    toValueQuantity(e, t, r) {
      return ct(e)
        ? jr(r)
          ? "-"
          : Number(C.floor(y(t).mul(r), 4))
        : e.contractSide > 0
        ? jr(r)
          ? "-"
          : Number(C.floor(y(t).mul(e.contractSize).mul(r), 2))
        : Number(C.floor(y(t).mul(e.contractSize), 2));
    },
    toValue(e, t, r) {
      return zr(de.toValueQuantity(e, t, r), de.toValueUnit(e));
    },
    toCoinUnit(e) {
      return ct(e) || e.contractSide > 0
        ? e.contractUnderlyingAssets
        : e.settleCurrency;
    },
    toCoinQuantity(e, t, r) {
      return ct(e)
        ? Number(C.floor(t, e.qtyPrecision))
        : e.contractSide > 0
        ? Number(C.floor(y(t).mul(e.contractSize), 4))
        : jr(r) || Number(r) === 0
        ? "-"
        : Number(C.floor(y(t).mul(e.contractSize).div(r), 4));
    },
    toCoin(e, t, r) {
      return zr(de.toCoinQuantity(e, t, r), de.toCoinUnit(e));
    },
    toContUnit(e) {
      return ct(e) ? "" : "Cont";
    },
    toContQuantity(e, t) {
      return ct(e) ? "-" : Number(t);
    },
    toCont(e, t) {
      return zr(de.toContQuantity(e, t), de.toContUnit(e));
    },
    getUnit(e, t) {
      return {
        [Ae.Cont]: () => de.toContUnit(e),
        [Ae.Base]: () => de.toValueUnit(e),
        [Ae.Coin]: () => de.toCoinUnit(e),
      }[t]();
    },
    convert(e, t, r, n) {
      return {
        [Ae.Cont]: () => de.toContQuantity(e, r),
        [Ae.Base]: () => de.toValueQuantity(e, r, n),
        [Ae.Coin]: () => de.toCoinQuantity(e, r, n),
      }[t]();
    },
  };
function ct(e) {
  return e.type === "PerpetualV2";
}
function zr(e, t) {
  return (e = e === void 0 ? "-" : e), t ? `${e} ${t}` : `${e}`;
}
function jr(e) {
  return isNaN(e) || e === "";
}
const Pa = "contract_symbol_cache_",
  Op = "common_contract_cache_before_v2",
  wp = "common_contract_cache_v2",
  dt = {
    _getStorageKey(e) {
      return e === "Perpetual" ? Op : wp;
    },
    readContractSymbolStorage(e) {
      const t = dt._getStorageKey(e);
      return M.readStorageObject(t, Dp(e));
    },
    updateContractSymbolStorage(e, t) {
      const r = dt._getStorageKey(e);
      M.writeStorageObject(r, { ...dt.readContractSymbolStorage(e), ...t });
    },
  },
  Ip = {
    readContractSymbolStorage(e) {
      return { ...M.readStorageObject(Pa + e, Cp()) };
    },
    updateContractSymbolStorage(e, t) {
      M.writeStorageObject(Pa + e, {
        ...Ip.readContractSymbolStorage(e),
        ...t,
      });
    },
  };
function Cp() {
  return {
    ...{
      version: 1,
      quantityEv: 0,
      postOnly: !1,
      reduceOnly: !1,
      closeOnTrigger: !1,
      slTrigger: "ByLastPriceLimit",
      timeInForce: "GoodTillCancel",
      triggerType: "ByLastPrice",
      conditionalType: "Limit",
      qtyType: Ae.Base,
    },
  };
}
function Dp(e) {
  return { version: 1, qtyType: e === "PerpetualV2" ? Ae.Coin : Ae.Base };
}
const Np = new d(Ki("Perpetual")),
  Pp = new d(Ki("PerpetualV2"));
function Ki(e) {
  return dt.readContractSymbolStorage(e).qtyType;
}
Np.subscribe((e) => {
  S.next({ type: "qty-before-v2-change", qtyType: e }),
    dt.updateContractSymbolStorage("Perpetual", { qtyType: e });
});
Pp.subscribe((e) => {
  S.next({ type: "qty-v2-change", qtyType: e }),
    dt.updateContractSymbolStorage("PerpetualV2", { qtyType: e });
});
const Lr = {
  createRawRiskLimitOptions$: Lp,
  createRawRiskLimitOptions: zi,
  createRealRiskLimit$: xp,
  createRealRiskLimit: ji,
  createRealRiskLimitOptions: Mp,
  calcRiskLimit1: Up,
  calcTotalRiskLimit: Bp,
};
function Lp(e, t) {
  return A([e, t]).pipe(
    u(([r, n]) => zi(r, n)),
    N([]),
    O(1)
  );
}
function zi(e, t) {
  return !e || !t ? [] : t.get(e.symbol) || [];
}
function xp(e, t, r) {
  return A([e, t, r]).pipe(u(([n, a, o]) => ji(n, a, o)));
}
function ji(e, t, r) {
  if (!e || !t || t.length < 1 || !r) return null;
  const {
      tradeLevel: n,
      riskLimit: a,
      riskLimitEv: o,
      maintMarginReqEr: i,
      symbol: s,
    } = e,
    { blackSymbols: c, levels: m } = r;
  let l = [];
  !c.includes(s) && n !== 0 && (l = Gp(m, n));
  const b = $p(l, t[0].limit),
    T = (b == null ? void 0 : b.factor) || 1;
  return {
    ...(t.find((_) => _.maintenanceMarginEr === i) || t[0]),
    limit: Number(a),
    riskLimitEv: o,
    maintenanceMarginEr: i,
    factor: T,
  };
}
function Mp(e, t) {
  if (!e || !t) return [];
  const { factor: r } = t;
  return e.map((n) => ({
    ...n,
    limit: y(n.limit).mul(r).toNumber(),
    riskLimitEv: y(n.riskLimitEv).mul(r).toNumber(),
  }));
}
function Up(e, t) {
  const r = t.get(e.symbol) || [];
  return kp(e, r);
}
function kp(e, t) {
  return t.find((r) => r.riskLimitEv === e.riskLimitEv) || t[0];
}
function Bp(e, t) {
  return e ? e.riskLimit : t ? String(t.limit) : "0";
}
function Gp(e, t) {
  let r = null;
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    if (a.tradeLevel === t) return a.options;
    if (a.tradeLevel > t) return r ? r.options : [];
    r = a;
  }
  return [];
}
function $p(e, t) {
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (t <= n.limit) return n;
  }
  return null;
}
const La = { unit: "X", precision: 2 },
  WT = {
    leverageErToLeverage(
      e,
      t = 8,
      { removeEnd0: r = !1, unit: n = La.unit } = {}
    ) {
      const a = C.ceil(e, La.precision, t);
      return (r ? C.trimEnd0(a) : a) + n;
    },
    getMaxLeverageByLeverageOptions(e) {
      const t = e.reduce((r, n) => (y(r.leverageEr).gt(n.leverageEr) ? r : n), {
        leverageEr: 0,
      });
      return { ...t, leverageX: `${t.leverage}X` };
    },
    convertSlideOptions(e) {
      return e
        .sort((t, r) => t.leverageEr - r.leverageEr)
        .map((t) => ({ value: t.leverageEr, label: `${t.leverage}X` }));
    },
    ceilLeverageEr(e, t, r) {
      return y(C.ceil(e, t, r)).times(y(10).pow(r)).toNumber();
    },
  };
function Vp(e, t) {
  const r = t.find((n) => n.initialMarginEr === e);
  return r ? r.options : null;
}
function KT(e, t, r, n, a) {
  const o = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 20, 21, 22, 23, 25,
    29, 34, 40, 50, 67, 100,
  ];
  if (!e) return [];
  const { type: i, leverageMargin: s, maxLeverage: c } = e;
  if (i === "Perpetual") return !r || !n ? [] : Vp(n.initialMarginEr, r);
  if (!t || !a.has(s)) return [];
  const m = qi(t),
    b = xr(t, s, a)
      .sort((_, D) => _.notionalValueRv - D.notionalValueRv)
      .find(({ notionalValueRv: _ }) => _ >= m),
    T = Math.min((b == null ? void 0 : b.maxLeverage) || 0, c);
  return (Yp(o, T) || [])
    .sort((_, D) => _ - D)
    .map((_) => ({ leverage: _, leverageEr: _, leverageX: `${_}X` }));
}
function Fp(e, t, r, n) {
  if (!e) return "0";
  const { leverageMargin: a } = e;
  if (!n.has(a)) return "0";
  const o = xr(t, a, n),
    i = o
      .sort((s, c) => s.maxLeverage - c.maxLeverage)
      .find(({ maxLeverage: s }) => s >= r);
  if (!i) {
    const s = o.map(({ notionalValueRv: c }) => c);
    return Math.min(...s);
  }
  return (i == null ? void 0 : i.notionalValueRv) || 0;
}
function zT(e, t, r, n) {
  return C.delimit(Fp(e, t, r, n));
}
function jT(e, t, r, n) {
  if (!e) return Pt();
  const { leverageMargin: a } = e;
  if (!r.has(a)) return Pt();
  const o = n || qi(t),
    i = xr(t, a, r).sort((T, E) => T.notionalValueRv - E.notionalValueRv),
    s = i.find(({ notionalValueRv: T }) => T >= o) || i[i.length - 1];
  if (!s) return Pt();
  const {
      notionalValueRv: c,
      maintenanceMarginRateRr: m,
      maintenanceAmountRv: l,
    } = s,
    b = Number(y(c).times(m).minus(l));
  return {
    maintenanceAmountRv: Number(l),
    maintenanceMargin: b,
    maintenanceMarginRateRr: Number(m),
  };
}
function qT(e, t, r) {
  const { leverageMargin: n } = e;
  if (!r.has(n) || !t) return Pt();
  const { size: a, markPriceEp: o } = t,
    i = y(a).times(o).toNumber(),
    c = xr(t, n, r)
      .sort((T, E) => T.notionalValueRv - E.notionalValueRv)
      .find(({ notionalValueRv: T }) => T >= i);
  if (!c) return Pt();
  const { maintenanceMarginRateRr: m, maintenanceAmountRv: l } = c,
    b = Number(y(i).times(m).minus(l));
  return {
    maintenanceAmountRv: Number(l),
    maintenanceMargin: b,
    maintenanceMarginRateRr: Number(m),
  };
}
function Yp(e, t) {
  const n = e.filter((l) => l <= t);
  if (n.length <= 8) return n;
  let a = [];
  const o = n.reduce((l, b) => (b < l ? b : l), 1 / 0);
  a.push(o);
  const i = n.reduce((l, b) => (b > l ? b : l), -1 / 0);
  a.push(i);
  let s = 8 - 2;
  const c = n.length,
    m = Math.floor((c - 2) / s);
  for (let l = 1; l < c - 1 && (a.push(n[l]), s--, s !== 0); l += m);
  return a;
}
function Pt() {
  return {
    maintenanceAmountRv: 0,
    maintenanceMargin: 0,
    maintenanceMarginRateRr: 0,
  };
}
function qi(e) {
  if (!e) return 0;
  const { value: t, buyLeavesValueRv: r, sellLeavesValueRv: n } = e,
    a = Math.max(Number(r) || 0, Number(n) || 0);
  return y(t).plus(a).toNumber();
}
function xr(e = { size: 0, riskLimitIndexId: 0 }, t, r) {
  var o, i, s;
  const { size: n, riskLimitIndexId: a } = e;
  if (n == 0) return ((o = r.get(t)) == null ? void 0 : o.items) || [];
  if (a == 0) {
    const c = r.get(t) || { index_id: 0 },
      m = Number(c.index_id) - 1e3;
    return ((i = r.get(m) || r.get(t)) == null ? void 0 : i.items) || [];
  } else return (s = r.get(a) || r.get(t)) == null ? void 0 : s.items;
}
const QT = {
    isConditionalOrder(e) {
      return (
        [
          "Stop",
          "StopLimit",
          "LimitIfTouched",
          "MarketIfTouched",
          "BoSlLimit",
          "BoSlMarket",
        ].indexOf(e) > -1
      );
    },
    isLimitOrder(e) {
      return (
        [
          "Bracket",
          "StopLimit",
          "LimitIfTouched",
          "BoTpLimit",
          "BoSlLimit",
        ].indexOf(e) > -1
      );
    },
    isMarketOrder(e) {
      return (
        ["Market", "Stop", "MarketIfTouched", "BoSlMarket"].indexOf(e) > -1
      );
    },
    isBracketOrders(e) {
      return (
        ["Bracket", "BoTpLimit", "BoSlLimit", "BoSlMarket"].indexOf(e) > -1
      );
    },
    isFinalOrder(e) {
      return ["Deactivated", "Filled", "Canceled", "Rejected"].indexOf(e) > -1;
    },
    isActivation(e, t) {
      return (
        ["TrailingTakeProfitPeg", "TrailingTakeProfitByProportionPeg"].includes(
          t
        ) && e === "Inactive"
      );
    },
  },
  Hp = new d({});
br(bi.pipe(u(Wp)), Tc.pipe(u(Kp)))
  .pipe(Rn((e, t) => t(e), {}))
  .subscribe((e) => Hp.next(e));
function Wp(e) {
  return function (t) {
    const { closeEp: r, markPriceEp: n } = e;
    return { ...t, last_price: r, mark_price: n };
  };
}
function Kp(e) {
  return function (t) {
    const { bid1Ep: r, ask1Ep: n } = e;
    return { ...t, bid1: r, ask1: n };
  };
}
const zp = new d(!1),
  jp = new d(!1),
  qp = new d({ visible: !1, msg: "", launchTime: "" });
S.pipe(
  g((e) => e.type === "contract-pt-discount-state"),
  u((e) => e.data.state)
).subscribe((e) => zp.next(e));
_o.pipe(u((e) => !!(e != null && e.riskEngineMode))).subscribe((e) => {
  S.next({ type: "risk-engine-mode", data: e }), jp.next(e);
});
De.pipe(
  g((e) => e.userId > 0),
  u((e) => {
    if (V.isMock())
      return { visible: !1, msg: "mock 不需要提示", launchTime: "" };
    const r = localStorage.getItem("profit_reinvestment_timeline"),
      n = r
        ? JSON.parse(r)
        : {
            now: Date.now(),
            deadline: Date.UTC(2024, 3, 19),
            first: Date.UTC(2024, 4, 21),
            second: Date.UTC(2024, 4, 23),
            third: Date.UTC(2024, 4, 25),
          },
      a = n.now,
      { createTime: o, userId: i } = e;
    if (o > n.deadline)
      return { visible: !1, msg: "恭喜你不用灰度", launchTime: "" };
    const s = [6, 7].includes(i % 10),
      c = [8, 9].includes(i % 10),
      m = [10, 11, 12, 13, 14, 15].includes(i % 20);
    if (a < n.first) {
      if (s)
        return {
          visible: !0,
          msg: "尾号为0, 1的预热开始",
          launchTime: Hr.formatUTCDate(n.first),
        };
    } else if (a < n.second) {
      if (c)
        return {
          visible: !0,
          msg: "尾号为2, 3, 4, 5的预热开始",
          launchTime: Hr.formatUTCDate(n.second),
        };
    } else if (a < n.third && m)
      return {
        visible: !0,
        msg: "尾号为6, 7, 8, 9的预热开始",
        launchTime: Hr.formatUTCDate(n.third),
      };
    return { visible: !1, msg: "灰度结束了。。。", launchTime: "" };
  })
).subscribe((e) => qp.next(e));
function XT(e, t) {
  const r = Number(e),
    n = Number(t);
  return r <= n || r >= Math.pow(10, 6) ? "--" : e;
}
function Qi(e) {
  return [
    "TrailingStopPeg",
    "TrailingTakeProfitPeg",
    "TrailingStopByProportionPeg",
    "TrailingTakeProfitByProportionPeg",
  ].includes(e);
}
function Qp(e) {
  return (
    e.execInst === "CloseOnTrigger" &&
    ["New", "PartiallyFilled"].indexOf(e.ordStatus) > -1
  );
}
function Xp(e) {
  return (
    e.ordStatus === "Untriggered" &&
    ["LimitIfTouched", "MarketIfTouched"].includes(e.ordType)
  );
}
function Zp(e) {
  return (
    e.ordStatus === "Untriggered" &&
    ["Stop", "StopLimit"].includes(e.ordType) &&
    !Qi(e.pegPriceType)
  );
}
function Jp(e) {
  return ["Stop", "StopLimit", "StopAsLimit"].indexOf(e.ordType) > -1;
}
function ef(e) {
  return (
    Jp(e) &&
    Qi(e.pegPriceType) &&
    ["Inactive", "Untriggered"].includes(e.ordStatus)
  );
}
function Xi(e, t) {
  return t === "Entire"
    ? e.orderQty === 0
    : t === "Partial"
    ? e.orderQty !== 0
    : !0;
}
function tf(e, t) {
  return t === "Entire"
    ? e.orderQty === 0
    : t === "Partial"
    ? e.orderQty !== 0
    : !0;
}
function rf(e, t) {
  const { type: r } = t;
  return r === "Perpetual"
    ? e.symbol === t.symbol && e.curPosTerm === t.term
    : r === "PerpetualV2"
    ? e.symbol === t.symbol &&
      e.curPosTerm === t.term &&
      e.posSide === t.posSide
    : !0;
}
function Zn(e, t) {
  const r = e.curPosTerm === t.term && e.actionBy === "FromPosition",
    n = e.symbol === t.symbol;
  if (t.type === "Perpetual") return n && r;
  if (t.type === "PerpetualV2") {
    const a = e.posSide === t.posSide;
    return n && r && a;
  }
}
function ZT(e, t) {
  return e.filter((r) => rf(r, t) && Qp(r));
}
function Jn(e, t) {
  return t.actionTimestamp - e.actionTimestamp;
}
function JT(e, t, r = "All") {
  return e.filter((n) => Zn(n, t) && Xp(n) && Xi(n, r)).sort(Jn);
}
function eb(e, t, r = "All") {
  return e.filter((n) => Zn(n, t) && Zp(n) && Xi(n, r)).sort(Jn);
}
function tb(e, t, r = "All") {
  return e.filter((n) => Zn(n, t) && ef(n) && tf(n, r)).sort(Jn);
}
const rb = {
  createContract$(e, t) {
    return e.pipe(
      u((r) => r.find((n) => n.symbol === t)),
      g(Boolean),
      Lt(1)
    );
  },
  findContract(e, t) {
    return e.find((r) => r.symbol === t);
  },
};
function xa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xa(Object(r), !0).forEach(function (n) {
          Gt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : xa(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function sr(e) {
  return (
    (sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sr(e)
  );
}
function Gt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function nf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function af(e, t) {
  if (e == null) return {};
  var r = nf(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function of(e, t) {
  return cf(e) || lf(e, t) || ea(e, t) || pf();
}
function Je(e) {
  return sf(e) || uf(e) || ea(e) || df();
}
function sf(e) {
  if (Array.isArray(e)) return bn(e);
}
function cf(e) {
  if (Array.isArray(e)) return e;
}
function uf(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lf(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      s;
    try {
      for (
        r = r.call(e);
        !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
        a = !0
      );
    } catch (c) {
      (o = !0), (s = c);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function ea(e, t) {
  if (e) {
    if (typeof e == "string") return bn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bn(e, t);
  }
}
function bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function df() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = ea(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (c) {
          throw c;
        },
        f: a,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    i = !1,
    s;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var c = r.next();
      return (o = c.done), c;
    },
    e: function (c) {
      (i = !0), (s = c);
    },
    f: function () {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (i) throw s;
      }
    },
  };
}
var ff = "finalize",
  gf = "consider";
function bt(e, t, r) {
  e.dispatchEvent(new CustomEvent(ff, { detail: { items: t, info: r } }));
}
function Ve(e, t, r) {
  e.dispatchEvent(new CustomEvent(gf, { detail: { items: t, info: r } }));
}
var Ur = "draggedEntered",
  zt = "draggedLeft",
  kr = "draggedOverIndex",
  ta = "draggedLeftDocument",
  cr = { LEFT_FOR_ANOTHER: "leftForAnother", OUTSIDE_OF_ANY: "outsideOfAny" };
function mf(e, t, r) {
  e.dispatchEvent(
    new CustomEvent(Ur, { detail: { indexObj: t, draggedEl: r } })
  );
}
function Tf(e, t, r) {
  e.dispatchEvent(
    new CustomEvent(zt, {
      detail: { draggedEl: t, type: cr.LEFT_FOR_ANOTHER, theOtherDz: r },
    })
  );
}
function bf(e, t) {
  e.dispatchEvent(
    new CustomEvent(zt, { detail: { draggedEl: t, type: cr.OUTSIDE_OF_ANY } })
  );
}
function Ef(e, t, r) {
  e.dispatchEvent(
    new CustomEvent(kr, { detail: { indexObj: t, draggedEl: r } })
  );
}
function Sf(e) {
  window.dispatchEvent(new CustomEvent(ta, { detail: { draggedEl: e } }));
}
var Z = {
    DRAG_STARTED: "dragStarted",
    DRAGGED_ENTERED: Ur,
    DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
    DRAGGED_OVER_INDEX: kr,
    DRAGGED_LEFT: zt,
    DRAGGED_LEFT_ALL: "draggedLeftAll",
    DROPPED_INTO_ZONE: "droppedIntoZone",
    DROPPED_INTO_ANOTHER: "droppedIntoAnother",
    DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
    DRAG_STOPPED: "dragStopped",
  },
  ee = { POINTER: "pointer", KEYBOARD: "keyboard" },
  jt = "isDndShadowItem",
  ra = "data-is-dnd-shadow-item",
  Br = "id:dnd-shadow-placeholder-0000",
  Zi = "dnd-action-dragged-el",
  H = "id",
  ur = 0;
function Ji() {
  ur++;
}
function es() {
  if (ur === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  ur--;
}
function yf(e) {
  if (ur > 0)
    throw new Error(
      "can only override the id key before initialising any dndzone"
    );
  if (typeof e != "string") throw new Error("item id key has to be a string");
  h(function () {
    return ["overriding item id key name", e];
  }),
    (H = e);
}
var na = typeof window > "u",
  h = function () {};
function _f(e) {
  e
    ? (h = function (r) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : console.debug,
          a = r();
        Array.isArray(a) ? n.apply(void 0, Je(a)) : n(a);
      })
    : (h = function () {});
}
function ts(e) {
  var t,
    r = e.getBoundingClientRect(),
    n = getComputedStyle(e),
    a = n.transform;
  if (a) {
    var o, i, s, c;
    if (a.startsWith("matrix3d("))
      (t = a.slice(9, -1).split(/, /)),
        (o = +t[0]),
        (i = +t[5]),
        (s = +t[12]),
        (c = +t[13]);
    else if (a.startsWith("matrix("))
      (t = a.slice(7, -1).split(/, /)),
        (o = +t[0]),
        (i = +t[3]),
        (s = +t[4]),
        (c = +t[5]);
    else return r;
    var m = n.transformOrigin,
      l = r.x - s - (1 - o) * parseFloat(m),
      b = r.y - c - (1 - i) * parseFloat(m.slice(m.indexOf(" ") + 1)),
      T = o ? r.width / o : e.offsetWidth,
      E = i ? r.height / i : e.offsetHeight;
    return {
      x: l,
      y: b,
      width: T,
      height: E,
      top: b,
      right: l + T,
      bottom: b + E,
      left: l,
    };
  } else return r;
}
function rs(e) {
  var t = ts(e);
  return {
    top: t.top + window.scrollY,
    bottom: t.bottom + window.scrollY,
    left: t.left + window.scrollX,
    right: t.right + window.scrollX,
  };
}
function aa(e) {
  var t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    bottom: t.bottom + window.scrollY,
    left: t.left + window.scrollX,
    right: t.right + window.scrollX,
  };
}
function ns(e) {
  return { x: (e.left + e.right) / 2, y: (e.top + e.bottom) / 2 };
}
function hf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function oa(e, t) {
  return e.y <= t.bottom && e.y >= t.top && e.x >= t.left && e.x <= t.right;
}
function $t(e) {
  return ns(aa(e));
}
function Ma(e, t) {
  var r = $t(e),
    n = rs(t);
  return oa(r, n);
}
function Rf(e, t) {
  var r = $t(e),
    n = $t(t);
  return hf(r, n);
}
function vf(e) {
  var t = aa(e);
  return (
    t.right < 0 ||
    t.left > document.documentElement.scrollWidth ||
    t.bottom < 0 ||
    t.top > document.documentElement.scrollHeight
  );
}
function Af(e, t) {
  var r = aa(t);
  return oa(e, r)
    ? {
        top: e.y - r.top,
        bottom: r.bottom - e.y,
        left: e.x - r.left,
        right: Math.min(r.right, document.documentElement.clientWidth) - e.x,
      }
    : null;
}
var qe;
function ia() {
  h(function () {
    return "resetting indexes cache";
  }),
    (qe = new Map());
}
ia();
function Of(e) {
  h(function () {
    return "resetting indexes cache for dz";
  }),
    qe.delete(e);
}
function wf(e) {
  var t = Array.from(e.children).findIndex(function (r) {
    return r.getAttribute(ra);
  });
  if (t >= 0)
    return (
      qe.has(e) || qe.set(e, new Map()), qe.get(e).set(t, rs(e.children[t])), t
    );
}
function If(e, t) {
  if (!Ma(e, t)) return null;
  var r = t.children;
  if (r.length === 0) return { index: 0, isProximityBased: !0 };
  for (var n = wf(t), a = 0; a < r.length; a++)
    if (Ma(e, r[a])) {
      var o = qe.has(t) && qe.get(t).get(a);
      return o && !oa($t(e), o)
        ? { index: n, isProximityBased: !1 }
        : { index: a, isProximityBased: !1 };
    }
  for (var i = Number.MAX_VALUE, s = void 0, c = 0; c < r.length; c++) {
    var m = Rf(e, r[c]);
    m < i && ((i = m), (s = c));
  }
  return { index: s, isProximityBased: !0 };
}
var At = 25;
function as() {
  var e;
  function t() {
    e = { directionObj: void 0, stepPx: 0 };
  }
  t();
  function r(o) {
    var i = e,
      s = i.directionObj,
      c = i.stepPx;
    s &&
      (o.scrollBy(s.x * c, s.y * c),
      window.requestAnimationFrame(function () {
        return r(o);
      }));
  }
  function n(o) {
    return At - o;
  }
  function a(o, i) {
    if (!i) return !1;
    var s = Af(o, i);
    if (s === null) return t(), !1;
    var c = !!e.directionObj,
      m = !1,
      l = !1;
    return (i.scrollHeight > i.clientHeight &&
      (s.bottom < At
        ? ((m = !0),
          (e.directionObj = { x: 0, y: 1 }),
          (e.stepPx = n(s.bottom)))
        : s.top < At &&
          ((m = !0), (e.directionObj = { x: 0, y: -1 }), (e.stepPx = n(s.top))),
      !c && m)) ||
      (i.scrollWidth > i.clientWidth &&
        (s.right < At
          ? ((l = !0),
            (e.directionObj = { x: 1, y: 0 }),
            (e.stepPx = n(s.right)))
          : s.left < At &&
            ((l = !0),
            (e.directionObj = { x: -1, y: 0 }),
            (e.stepPx = n(s.left))),
        !c && l))
      ? (r(i), !0)
      : (t(), !1);
  }
  return { scrollIfNeeded: a, resetScrolling: t };
}
function Pe(e) {
  return JSON.stringify(e, null, 2);
}
function Ua(e) {
  if (!e) throw new Error("cannot get depth of a falsy node");
  return os(e, 0);
}
function os(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.parentElement ? os(e.parentElement, t + 1) : t - 1;
}
function Cf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var r in e)
    if (!{}.hasOwnProperty.call(t, r) || t[r] !== e[r]) return !1;
  return !0;
}
function Df(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var Nf = 200,
  ka = 10,
  is = as(),
  Pf = is.scrollIfNeeded,
  Lf = is.resetScrolling,
  En;
function xf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nf,
    n,
    a,
    o = !1,
    i,
    s = Array.from(t).sort(function (m, l) {
      return Ua(l) - Ua(m);
    });
  function c() {
    var m = $t(e),
      l = Pf(m, n);
    if (!l && i && Math.abs(i.x - m.x) < ka && Math.abs(i.y - m.y) < ka) {
      En = window.setTimeout(c, r);
      return;
    }
    if (vf(e)) {
      h(function () {
        return "off document";
      }),
        Sf(e);
      return;
    }
    i = m;
    var b = !1,
      T = Mr(s),
      E;
    try {
      for (T.s(); !(E = T.n()).done; ) {
        var _ = E.value;
        l && Of(n);
        var D = If(e, _);
        if (D !== null) {
          var x = D.index;
          (b = !0),
            _ !== n
              ? (n && Tf(n, e, _), mf(_, D, e), (n = _))
              : x !== a && (Ef(_, D, e), (a = x));
          break;
        }
      }
    } catch (k) {
      T.e(k);
    } finally {
      T.f();
    }
    !b && o && n ? (bf(n, e), (n = void 0), (a = void 0), (o = !1)) : (o = !0),
      (En = window.setTimeout(c, r));
  }
  c();
}
function Mf() {
  h(function () {
    return "unobserving";
  }),
    clearTimeout(En),
    Lf(),
    ia();
}
var Uf = 300,
  lr;
function dr(e) {
  var t = e.touches ? e.touches[0] : e;
  lr = { x: t.clientX, y: t.clientY };
}
var ss = as(),
  kf = ss.scrollIfNeeded,
  Bf = ss.resetScrolling,
  cs;
function us() {
  if (lr) {
    var e = kf(lr, document.documentElement);
    e && ia();
  }
  cs = window.setTimeout(us, Uf);
}
function Gf() {
  h(function () {
    return "arming window scroller";
  }),
    window.addEventListener("mousemove", dr),
    window.addEventListener("touchmove", dr),
    us();
}
function $f() {
  h(function () {
    return "disarming window scroller";
  }),
    window.removeEventListener("mousemove", dr),
    window.removeEventListener("touchmove", dr),
    (lr = void 0),
    window.clearTimeout(cs),
    Bf();
}
function Vf(e) {
  var t = e.cloneNode(!0),
    r = [],
    n = e.tagName === "SELECT",
    a = n ? [e] : Je(e.querySelectorAll("select")),
    o = Mr(a),
    i;
  try {
    for (o.s(); !(i = o.n()).done; ) {
      var s = i.value;
      r.push(s.value);
    }
  } catch (E) {
    o.e(E);
  } finally {
    o.f();
  }
  if (a.length <= 0) return t;
  for (
    var c = n ? [t] : Je(t.querySelectorAll("select")), m = 0;
    m < c.length;
    m++
  ) {
    var l = c[m],
      b = r[m],
      T = l.querySelector('option[value="'.concat(b, '"'));
    T && T.setAttribute("selected", !0);
  }
  return t;
}
var Ff = 0.2;
function We(e) {
  return "".concat(e, " ").concat(Ff, "s ease");
}
function Yf(e, t) {
  var r = e.getBoundingClientRect(),
    n = Vf(e);
  ls(e, n), (n.id = Zi), (n.style.position = "fixed");
  var a = r.top,
    o = r.left;
  if (
    ((n.style.top = "".concat(a, "px")), (n.style.left = "".concat(o, "px")), t)
  ) {
    var i = ns(r);
    (a -= i.y - t.y),
      (o -= i.x - t.x),
      window.setTimeout(function () {
        (n.style.top = "".concat(a, "px")), (n.style.left = "".concat(o, "px"));
      }, 0);
  }
  return (
    (n.style.margin = "0"),
    (n.style.boxSizing = "border-box"),
    (n.style.height = "".concat(r.height, "px")),
    (n.style.width = "".concat(r.width, "px")),
    (n.style.transition = ""
      .concat(We("top"), ", ")
      .concat(We("left"), ", ")
      .concat(We("background-color"), ", ")
      .concat(We("opacity"), ", ")
      .concat(We("color"), " ")),
    window.setTimeout(function () {
      return (n.style.transition += ", "
        .concat(We("width"), ", ")
        .concat(We("height")));
    }, 0),
    (n.style.zIndex = "9999"),
    (n.style.cursor = "grabbing"),
    n
  );
}
function Hf(e) {
  e.style.cursor = "grab";
}
function Wf(e, t, r, n, a) {
  var o = t.getBoundingClientRect(),
    i = e.getBoundingClientRect(),
    s = o.width - i.width,
    c = o.height - i.height;
  if (s || c) {
    var m = { left: (r - i.left) / i.width, top: (n - i.top) / i.height };
    (e.style.height = "".concat(o.height, "px")),
      (e.style.width = "".concat(o.width, "px")),
      (e.style.left = "".concat(parseFloat(e.style.left) - m.left * s, "px")),
      (e.style.top = "".concat(parseFloat(e.style.top) - m.top * c, "px"));
  }
  ls(t, e), a();
}
function ls(e, t) {
  var r = window.getComputedStyle(e);
  Array.from(r)
    .filter(function (n) {
      return (
        n.startsWith("background") ||
        n.startsWith("padding") ||
        n.startsWith("font") ||
        n.startsWith("text") ||
        n.startsWith("align") ||
        n.startsWith("justify") ||
        n.startsWith("display") ||
        n.startsWith("flex") ||
        n.startsWith("border") ||
        n === "opacity" ||
        n === "color" ||
        n === "list-style-type"
      );
    })
    .forEach(function (n) {
      return t.style.setProperty(
        n,
        r.getPropertyValue(n),
        r.getPropertyPriority(n)
      );
    });
}
function Kf(e, t) {
  (e.draggable = !1),
    (e.ondragstart = function () {
      return !1;
    }),
    t
      ? ((e.style.userSelect = ""),
        (e.style.WebkitUserSelect = ""),
        (e.style.cursor = ""))
      : ((e.style.userSelect = "none"),
        (e.style.WebkitUserSelect = "none"),
        (e.style.cursor = "grab"));
}
function ds(e) {
  (e.style.display = "none"),
    (e.style.position = "fixed"),
    (e.style.zIndex = "-5");
}
function zf(e) {
  (e.style.visibility = "hidden"), e.setAttribute(ra, "true");
}
function jf(e) {
  (e.style.visibility = ""), e.removeAttribute(ra);
}
function rr(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : function () {
            return [];
          };
  e.forEach(function (n) {
    var a = t(n);
    Object.keys(a).forEach(function (o) {
      n.style[o] = a[o];
    }),
      r(n).forEach(function (o) {
        return n.classList.add(o);
      });
  });
}
function pr(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : function () {
            return [];
          };
  e.forEach(function (n) {
    var a = t(n);
    Object.keys(a).forEach(function (o) {
      n.style[o] = "";
    }),
      r(n).forEach(function (o) {
        return n.classList.contains(o) && n.classList.remove(o);
      });
  });
}
function qf(e) {
  var t = e.style.minHeight;
  e.style.minHeight = window.getComputedStyle(e).getPropertyValue("height");
  var r = e.style.minWidth;
  return (
    (e.style.minWidth = window.getComputedStyle(e).getPropertyValue("width")),
    function () {
      (e.style.minHeight = t), (e.style.minWidth = r);
    }
  );
}
var Qf = "--any--",
  Xf = 100,
  Ba = 3,
  Ga = { outline: "rgba(255, 255, 102, 0.7) solid 2px" },
  ve,
  j,
  le,
  Gr,
  Y,
  $r,
  Et,
  ie,
  Ge,
  pe,
  je = !1,
  sa = !1,
  ca,
  qt = !1,
  Ct = [],
  _e = new Map(),
  F = new Map(),
  qr = new WeakMap();
function Zf(e, t) {
  h(function () {
    return "registering drop-zone if absent";
  }),
    _e.has(t) || _e.set(t, new Set()),
    _e.get(t).has(e) || (_e.get(t).add(e), Ji());
}
function $a(e, t) {
  _e.get(t).delete(e), es(), _e.get(t).size === 0 && _e.delete(t);
}
function Jf() {
  h(function () {
    return "watching dragged element";
  }),
    Gf();
  var e = _e.get(Gr),
    t = Mr(e),
    r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var n = r.value;
      n.addEventListener(Ur, ps),
        n.addEventListener(zt, fs),
        n.addEventListener(kr, gs);
    }
  } catch (o) {
    t.e(o);
  } finally {
    t.f();
  }
  window.addEventListener(ta, St);
  var a = Math.max.apply(
    Math,
    [Xf].concat(
      Je(
        Array.from(e.keys()).map(function (o) {
          return F.get(o).dropAnimationDurationMs;
        })
      )
    )
  );
  xf(j, e, a * 1.07);
}
function eg() {
  h(function () {
    return "unwatching dragged element";
  }),
    $f();
  var e = _e.get(Gr),
    t = Mr(e),
    r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var n = r.value;
      n.removeEventListener(Ur, ps),
        n.removeEventListener(zt, fs),
        n.removeEventListener(kr, gs);
    }
  } catch (a) {
    t.e(a);
  } finally {
    t.f();
  }
  window.removeEventListener(ta, St), Mf();
}
function tg(e) {
  return e.findIndex(function (t) {
    return t[H] === Br;
  });
}
function Vr(e) {
  return e.findIndex(function (t) {
    return !!t[jt] && t[H] !== Br;
  });
}
function ps(e) {
  h(function () {
    return ["dragged entered", e.currentTarget, e.detail];
  });
  var t = F.get(e.currentTarget),
    r = t.items,
    n = t.dropFromOthersDisabled;
  if (n && e.currentTarget !== Y) {
    h(function () {
      return "ignoring dragged entered because drop is currently disabled";
    });
    return;
  }
  if (
    ((qt = !1),
    (r = r.filter(function (b) {
      return b[H] !== Et[H];
    })),
    h(function () {
      return "dragged entered items ".concat(Pe(r));
    }),
    Y !== e.currentTarget)
  ) {
    var a = F.get(Y).items,
      o = a.filter(function (b) {
        return !b[jt];
      });
    Ve(Y, o, {
      trigger: Z.DRAGGED_ENTERED_ANOTHER,
      id: le[H],
      source: ee.POINTER,
    });
  } else {
    var i = tg(r);
    i !== -1 &&
      (h(function () {
        return "removing placeholder item from origin dz";
      }),
      r.splice(i, 1));
  }
  var s = e.detail.indexObj,
    c = s.index,
    m = s.isProximityBased,
    l = m && c === e.currentTarget.children.length - 1 ? c + 1 : c;
  (ie = e.currentTarget),
    r.splice(l, 0, Et),
    Ve(e.currentTarget, r, {
      trigger: Z.DRAGGED_ENTERED,
      id: le[H],
      source: ee.POINTER,
    });
}
function fs(e) {
  if (je) {
    h(function () {
      return ["dragged left", e.currentTarget, e.detail];
    });
    var t = F.get(e.currentTarget),
      r = t.items,
      n = t.dropFromOthersDisabled;
    if (n && e.currentTarget !== Y && e.currentTarget !== ie) {
      h(function () {
        return "drop is currently disabled";
      });
      return;
    }
    var a = Vr(r),
      o = r.splice(a, 1)[0];
    ie = void 0;
    var i = e.detail,
      s = i.type,
      c = i.theOtherDz;
    if (
      s === cr.OUTSIDE_OF_ANY ||
      (s === cr.LEFT_FOR_ANOTHER && c !== Y && F.get(c).dropFromOthersDisabled)
    ) {
      h(function () {
        return "dragged left all, putting shadow element back in the origin dz";
      }),
        (qt = !0),
        (ie = Y);
      var m = F.get(Y).items;
      m.splice($r, 0, o),
        Ve(Y, m, {
          trigger: Z.DRAGGED_LEFT_ALL,
          id: le[H],
          source: ee.POINTER,
        });
    }
    Ve(e.currentTarget, r, {
      trigger: Z.DRAGGED_LEFT,
      id: le[H],
      source: ee.POINTER,
    });
  }
}
function gs(e) {
  h(function () {
    return ["dragged is over index", e.currentTarget, e.detail];
  });
  var t = F.get(e.currentTarget),
    r = t.items,
    n = t.dropFromOthersDisabled;
  if (n && e.currentTarget !== Y) {
    h(function () {
      return "drop is currently disabled";
    });
    return;
  }
  qt = !1;
  var a = e.detail.indexObj.index,
    o = Vr(r);
  r.splice(o, 1),
    r.splice(a, 0, Et),
    Ve(e.currentTarget, r, {
      trigger: Z.DRAGGED_OVER_INDEX,
      id: le[H],
      source: ee.POINTER,
    });
}
function fr(e) {
  e.preventDefault();
  var t = e.touches ? e.touches[0] : e;
  (pe = { x: t.clientX, y: t.clientY }),
    (j.style.transform = "translate3d("
      .concat(pe.x - Ge.x, "px, ")
      .concat(pe.y - Ge.y, "px, 0)"));
}
function St() {
  h(function () {
    return "dropped";
  }),
    (sa = !0),
    window.removeEventListener("mousemove", fr),
    window.removeEventListener("touchmove", fr),
    window.removeEventListener("mouseup", St),
    window.removeEventListener("touchend", St),
    eg(),
    Hf(j),
    ie ||
      (h(function () {
        return "element was dropped right after it left origin but before entering somewhere else";
      }),
      (ie = Y)),
    h(function () {
      return ["dropped in dz", ie];
    });
  var e = F.get(ie),
    t = e.items,
    r = e.type;
  pr(
    _e.get(r),
    function (o) {
      return F.get(o).dropTargetStyle;
    },
    function (o) {
      return F.get(o).dropTargetClasses;
    }
  );
  var n = Vr(t);
  n === -1 && (n = $r),
    (t = t.map(function (o) {
      return o[jt] ? le : o;
    }));
  function a() {
    ca(),
      bt(ie, t, {
        trigger: qt ? Z.DROPPED_OUTSIDE_OF_ANY : Z.DROPPED_INTO_ZONE,
        id: le[H],
        source: ee.POINTER,
      }),
      ie !== Y &&
        bt(Y, F.get(Y).items, {
          trigger: Z.DROPPED_INTO_ANOTHER,
          id: le[H],
          source: ee.POINTER,
        }),
      jf(ie.children[n]),
      ag();
  }
  rg(n, a);
}
function rg(e, t) {
  var r = ts(ie.children[e]),
    n = {
      x: r.left - parseFloat(j.style.left),
      y: r.top - parseFloat(j.style.top),
    },
    a = F.get(ie),
    o = a.dropAnimationDurationMs,
    i = "transform ".concat(o, "ms ease");
  (j.style.transition = j.style.transition ? j.style.transition + "," + i : i),
    (j.style.transform = "translate3d("
      .concat(n.x, "px, ")
      .concat(n.y, "px, 0)")),
    window.setTimeout(t, o);
}
function ng(e, t) {
  Ct.push({ dz: e, destroy: t }),
    window.requestAnimationFrame(function () {
      ds(e), document.body.appendChild(e);
    });
}
function ag() {
  j.remove(),
    ve.remove(),
    Ct.length &&
      (h(function () {
        return ["will destroy zones that were removed during drag", Ct];
      }),
      Ct.forEach(function (e) {
        var t = e.dz,
          r = e.destroy;
        r(), t.remove();
      }),
      (Ct = [])),
    (j = void 0),
    (ve = void 0),
    (le = void 0),
    (Gr = void 0),
    (Y = void 0),
    ($r = void 0),
    (Et = void 0),
    (ie = void 0),
    (Ge = void 0),
    (pe = void 0),
    (je = !1),
    (sa = !1),
    (ca = void 0),
    (qt = !1);
}
function og(e, t) {
  var r = !1,
    n = {
      items: void 0,
      type: void 0,
      flipDurationMs: 0,
      dragDisabled: !1,
      morphDisabled: !1,
      dropFromOthersDisabled: !1,
      dropTargetStyle: Ga,
      dropTargetClasses: [],
      transformDraggedElement: function () {},
      centreDraggedOnCursor: !1,
    };
  h(function () {
    return [
      "dndzone good to go options: ".concat(Pe(t), ", config: ").concat(Pe(n)),
      { node: e },
    ];
  });
  var a = new Map();
  function o() {
    window.addEventListener("mousemove", c, { passive: !1 }),
      window.addEventListener("touchmove", c, { passive: !1, capture: !1 }),
      window.addEventListener("mouseup", s, { passive: !1 }),
      window.addEventListener("touchend", s, { passive: !1 });
  }
  function i() {
    window.removeEventListener("mousemove", c),
      window.removeEventListener("touchmove", c),
      window.removeEventListener("mouseup", s),
      window.removeEventListener("touchend", s);
  }
  function s() {
    i(), (ve = void 0), (Ge = void 0), (pe = void 0);
  }
  function c(T) {
    T.preventDefault();
    var E = T.touches ? T.touches[0] : T;
    (pe = { x: E.clientX, y: E.clientY }),
      (Math.abs(pe.x - Ge.x) >= Ba || Math.abs(pe.y - Ge.y) >= Ba) &&
        (i(), l());
  }
  function m(T) {
    if (
      T.target !== T.currentTarget &&
      (T.target.value !== void 0 || T.target.isContentEditable)
    ) {
      h(function () {
        return "won't initiate drag on a nested input element";
      });
      return;
    }
    if (T.button) {
      h(function () {
        return "ignoring none left click button: ".concat(T.button);
      });
      return;
    }
    if (je) {
      h(function () {
        return "cannot start a new drag before finalizing previous one";
      });
      return;
    }
    T.stopPropagation();
    var E = T.touches ? T.touches[0] : T;
    (Ge = { x: E.clientX, y: E.clientY }),
      (pe = Ke({}, Ge)),
      (ve = T.currentTarget),
      o();
  }
  function l() {
    h(function () {
      return ["drag start config: ".concat(Pe(n)), ve];
    }),
      (je = !0);
    var T = a.get(ve);
    ($r = T), (Y = ve.parentElement);
    var E = Y.getRootNode(),
      _ = E.body || E,
      D = n.items,
      x = n.type,
      k = n.centreDraggedOnCursor;
    (le = Ke({}, D[T])), (Gr = x), (Et = Ke(Ke({}, le), {}, Gt({}, jt, !0)));
    var v = Ke(Ke({}, Et), {}, Gt({}, H, Br));
    j = Yf(ve, k && pe);
    function B() {
      j.parentElement
        ? window.requestAnimationFrame(B)
        : (_.appendChild(j), j.focus(), Jf(), ds(ve), _.appendChild(ve));
    }
    window.requestAnimationFrame(B),
      rr(
        Array.from(_e.get(n.type)).filter(function (P) {
          return P === Y || !F.get(P).dropFromOthersDisabled;
        }),
        function (P) {
          return F.get(P).dropTargetStyle;
        },
        function (P) {
          return F.get(P).dropTargetClasses;
        }
      ),
      D.splice(T, 1, v),
      (ca = qf(Y)),
      Ve(Y, D, { trigger: Z.DRAG_STARTED, id: le[H], source: ee.POINTER }),
      window.addEventListener("mousemove", fr, { passive: !1 }),
      window.addEventListener("touchmove", fr, { passive: !1, capture: !1 }),
      window.addEventListener("mouseup", St, { passive: !1 }),
      window.addEventListener("touchend", St, { passive: !1 });
  }
  function b(T) {
    var E = T.items,
      _ = E === void 0 ? void 0 : E,
      D = T.flipDurationMs,
      x = D === void 0 ? 0 : D,
      k = T.type,
      v = k === void 0 ? Qf : k,
      B = T.dragDisabled,
      P = B === void 0 ? !1 : B,
      me = T.morphDisabled,
      Ne = me === void 0 ? !1 : me,
      R = T.dropFromOthersDisabled,
      ce = R === void 0 ? !1 : R,
      ne = T.dropTargetStyle,
      Te = ne === void 0 ? Ga : ne,
      Ue = T.dropTargetClasses,
      G = Ue === void 0 ? [] : Ue,
      Rt = T.transformDraggedElement,
      ke = Rt === void 0 ? function () {} : Rt,
      W = T.centreDraggedOnCursor,
      Fr = W === void 0 ? !1 : W;
    (n.dropAnimationDurationMs = x),
      n.type && v !== n.type && $a(e, n.type),
      (n.type = v),
      Zf(e, v),
      (n.items = Je(_)),
      (n.dragDisabled = P),
      (n.morphDisabled = Ne),
      (n.transformDraggedElement = ke),
      (n.centreDraggedOnCursor = Fr),
      r &&
        je &&
        !sa &&
        (!Cf(Te, n.dropTargetStyle) || !Df(G, n.dropTargetClasses)) &&
        (pr(
          [e],
          function () {
            return n.dropTargetStyle;
          },
          function () {
            return G;
          }
        ),
        rr(
          [e],
          function () {
            return Te;
          },
          function () {
            return G;
          }
        )),
      (n.dropTargetStyle = Te),
      (n.dropTargetClasses = Je(G));
    function it(ae, Re) {
      return F.get(ae) ? F.get(ae)[Re] : n[Re];
    }
    r &&
      je &&
      n.dropFromOthersDisabled !== ce &&
      (ce
        ? pr(
            [e],
            function (ae) {
              return it(ae, "dropTargetStyle");
            },
            function (ae) {
              return it(ae, "dropTargetClasses");
            }
          )
        : rr(
            [e],
            function (ae) {
              return it(ae, "dropTargetStyle");
            },
            function (ae) {
              return it(ae, "dropTargetClasses");
            }
          )),
      (n.dropFromOthersDisabled = ce),
      F.set(e, n);
    for (
      var He = Vr(n.items),
        Qt = function (Re) {
          var oe = e.children[Re];
          if ((Kf(oe, P), Re === He))
            return (
              Ne ||
                Wf(j, oe, pe.x, pe.y, function () {
                  return n.transformDraggedElement(j, le, Re);
                }),
              zf(oe),
              "continue"
            );
          oe.removeEventListener("mousedown", qr.get(oe)),
            oe.removeEventListener("touchstart", qr.get(oe)),
            P ||
              (oe.addEventListener("mousedown", m),
              oe.addEventListener("touchstart", m),
              qr.set(oe, m)),
            a.set(oe, Re),
            r || (r = !0);
        },
        st = 0;
      st < e.children.length;
      st++
    )
      var Xt = Qt(st);
  }
  return (
    b(t),
    {
      update: function (E) {
        h(function () {
          return "pointer dndzone will update newOptions: ".concat(Pe(E));
        }),
          b(E);
      },
      destroy: function () {
        function E() {
          h(function () {
            return "pointer dndzone will destroy";
          }),
            $a(e, F.get(e).type),
            F.delete(e);
        }
        je
          ? (h(function () {
              return "pointer dndzone will be scheduled for destruction";
            }),
            ng(e, E))
          : E();
      },
    }
  );
}
var tr,
  Sn = {
    DND_ZONE_ACTIVE: "dnd-zone-active",
    DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled",
  },
  ms =
    ((tr = {}),
    Gt(
      tr,
      Sn.DND_ZONE_ACTIVE,
      "Tab to one the items and press space-bar or enter to start dragging it"
    ),
    Gt(tr, Sn.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"),
    tr),
  ig = "dnd-action-aria-alert",
  $;
function yn() {
  $ ||
    (($ = document.createElement("div")),
    (function () {
      ($.id = ig),
        ($.style.position = "fixed"),
        ($.style.bottom = "0"),
        ($.style.left = "0"),
        ($.style.zIndex = "-5"),
        ($.style.opacity = "0"),
        ($.style.height = "0"),
        ($.style.width = "0"),
        $.setAttribute("role", "alert");
    })(),
    document.body.prepend($),
    Object.entries(ms).forEach(function (e) {
      var t = of(e, 2),
        r = t[0],
        n = t[1];
      return document.body.prepend(ug(r, n));
    }));
}
function sg() {
  return na
    ? null
    : (document.readyState === "complete"
        ? yn()
        : window.addEventListener("DOMContentLoaded", yn),
      Ke({}, Sn));
}
function cg() {
  na ||
    !$ ||
    (Object.keys(ms).forEach(function (e) {
      var t;
      return (t = document.getElementById(e)) === null || t === void 0
        ? void 0
        : t.remove();
    }),
    $.remove(),
    ($ = void 0));
}
function ug(e, t) {
  var r = document.createElement("div");
  return (
    (r.id = e),
    (r.innerHTML = "<p>".concat(t, "</p>")),
    (r.style.display = "none"),
    (r.style.position = "fixed"),
    (r.style.zIndex = "-5"),
    r
  );
}
function Qe(e) {
  if (!na) {
    $ || yn(), ($.innerHTML = "");
    var t = document.createTextNode(e);
    $.appendChild(t), ($.style.display = "none"), ($.style.display = "inline");
  }
}
var lg = "--any--",
  Va = { outline: "rgba(255, 255, 102, 0.7) solid 2px" },
  fe = !1,
  _n,
  X,
  Xe = "",
  ze,
  Ee,
  $e = "",
  gr = new WeakSet(),
  Fa = new WeakMap(),
  Ya = new WeakMap(),
  hn = new Map(),
  z = new Map(),
  ye = new Map(),
  mr;
function dg(e, t) {
  h(function () {
    return "registering drop-zone if absent";
  }),
    ye.size === 0 &&
      (h(function () {
        return "adding global keydown and click handlers";
      }),
      (mr = sg()),
      window.addEventListener("keydown", Ts),
      window.addEventListener("click", bs)),
    ye.has(t) || ye.set(t, new Set()),
    ye.get(t).has(e) || (ye.get(t).add(e), Ji());
}
function Ha(e, t) {
  h(function () {
    return "unregistering drop-zone";
  }),
    X === e && Vt(),
    ye.get(t).delete(e),
    es(),
    ye.get(t).size === 0 && ye.delete(t),
    ye.size === 0 &&
      (h(function () {
        return "removing global keydown and click handlers";
      }),
      window.removeEventListener("keydown", Ts),
      window.removeEventListener("click", bs),
      (mr = void 0),
      cg());
}
function Ts(e) {
  if (fe)
    switch (e.key) {
      case "Escape": {
        Vt();
        break;
      }
    }
}
function bs() {
  fe &&
    (gr.has(document.activeElement) ||
      (h(function () {
        return "clicked outside of any draggable";
      }),
      Vt()));
}
function pg(e) {
  if (
    (h(function () {
      return "zone focus";
    }),
    !!fe)
  ) {
    var t = e.currentTarget;
    if (t !== X) {
      Xe = t.getAttribute("aria-label") || "";
      var r = z.get(X),
        n = r.items,
        a = n.find(function (b) {
          return b[H] === Ee;
        }),
        o = n.indexOf(a),
        i = n.splice(o, 1)[0],
        s = z.get(t),
        c = s.items,
        m = s.autoAriaDisabled;
      t.getBoundingClientRect().top < X.getBoundingClientRect().top ||
      t.getBoundingClientRect().left < X.getBoundingClientRect().left
        ? (c.push(i),
          m ||
            Qe("Moved item ".concat($e, " to the end of the list ").concat(Xe)))
        : (c.unshift(i),
          m ||
            Qe(
              "Moved item "
                .concat($e, " to the beginning of the list ")
                .concat(Xe)
            ));
      var l = X;
      bt(l, n, {
        trigger: Z.DROPPED_INTO_ANOTHER,
        id: Ee,
        source: ee.KEYBOARD,
      }),
        bt(t, c, { trigger: Z.DROPPED_INTO_ZONE, id: Ee, source: ee.KEYBOARD }),
        (X = t);
    }
  }
}
function Es() {
  hn.forEach(function (e, t) {
    var r = e.update;
    return r(z.get(t));
  });
}
function Vt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  h(function () {
    return "drop";
  }),
    z.get(X).autoAriaDisabled || Qe("Stopped dragging item ".concat($e)),
    gr.has(document.activeElement) && document.activeElement.blur(),
    e &&
      Ve(X, z.get(X).items, {
        trigger: Z.DRAG_STOPPED,
        id: Ee,
        source: ee.KEYBOARD,
      }),
    pr(
      ye.get(_n),
      function (t) {
        return z.get(t).dropTargetStyle;
      },
      function (t) {
        return z.get(t).dropTargetClasses;
      }
    ),
    (ze = null),
    (Ee = null),
    ($e = ""),
    (_n = null),
    (X = null),
    (Xe = ""),
    (fe = !1),
    Es();
}
function fg(e, t) {
  var r = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: Va,
    dropTargetClasses: [],
    autoAriaDisabled: !1,
  };
  function n(l, b, T) {
    l.length <= 1 || l.splice(T, 1, l.splice(b, 1, l[T])[0]);
  }
  function a(l) {
    switch (
      (h(function () {
        return ["handling key down", l.key];
      }),
      l.key)
    ) {
      case "Enter":
      case " ": {
        if (
          (l.target.disabled !== void 0 ||
            l.target.href ||
            l.target.isContentEditable) &&
          !gr.has(l.target)
        )
          return;
        l.preventDefault(), l.stopPropagation(), fe ? Vt() : o(l);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!fe) return;
        l.preventDefault(), l.stopPropagation();
        var b = z.get(e),
          T = b.items,
          E = Array.from(e.children),
          _ = E.indexOf(l.currentTarget);
        h(function () {
          return ["arrow down", _];
        }),
          _ < E.length - 1 &&
            (r.autoAriaDisabled ||
              Qe(
                "Moved item "
                  .concat($e, " to position ")
                  .concat(_ + 2, " in the list ")
                  .concat(Xe)
              ),
            n(T, _, _ + 1),
            bt(e, T, {
              trigger: Z.DROPPED_INTO_ZONE,
              id: Ee,
              source: ee.KEYBOARD,
            }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!fe) return;
        l.preventDefault(), l.stopPropagation();
        var D = z.get(e),
          x = D.items,
          k = Array.from(e.children),
          v = k.indexOf(l.currentTarget);
        h(function () {
          return ["arrow up", v];
        }),
          v > 0 &&
            (r.autoAriaDisabled ||
              Qe(
                "Moved item "
                  .concat($e, " to position ")
                  .concat(v, " in the list ")
                  .concat(Xe)
              ),
            n(x, v, v - 1),
            bt(e, x, {
              trigger: Z.DROPPED_INTO_ZONE,
              id: Ee,
              source: ee.KEYBOARD,
            }));
        break;
      }
    }
  }
  function o(l) {
    h(function () {
      return "drag start";
    }),
      s(l.currentTarget),
      (X = e),
      (_n = r.type),
      (fe = !0);
    var b = Array.from(ye.get(r.type)).filter(function (E) {
      return E === X || !z.get(E).dropFromOthersDisabled;
    });
    if (
      (rr(
        b,
        function (E) {
          return z.get(E).dropTargetStyle;
        },
        function (E) {
          return z.get(E).dropTargetClasses;
        }
      ),
      !r.autoAriaDisabled)
    ) {
      var T = "Started dragging item "
        .concat($e, ". Use the arrow keys to move it within its list ")
        .concat(Xe);
      b.length > 1 &&
        (T += ", or tab to another list in order to move the item into it"),
        Qe(T);
    }
    Ve(e, z.get(e).items, {
      trigger: Z.DRAG_STARTED,
      id: Ee,
      source: ee.KEYBOARD,
    }),
      Es();
  }
  function i(l) {
    fe && l.currentTarget !== ze && (l.stopPropagation(), Vt(!1), o(l));
  }
  function s(l) {
    var b = z.get(e),
      T = b.items,
      E = Array.from(e.children),
      _ = E.indexOf(l);
    (ze = l),
      (ze.tabIndex = 0),
      (Ee = T[_][H]),
      ($e = E[_].getAttribute("aria-label") || "");
  }
  function c(l) {
    var b = l.items,
      T = b === void 0 ? [] : b,
      E = l.type,
      _ = E === void 0 ? lg : E,
      D = l.dragDisabled,
      x = D === void 0 ? !1 : D,
      k = l.zoneTabIndex,
      v = k === void 0 ? 0 : k,
      B = l.dropFromOthersDisabled,
      P = B === void 0 ? !1 : B,
      me = l.dropTargetStyle,
      Ne = me === void 0 ? Va : me,
      R = l.dropTargetClasses,
      ce = R === void 0 ? [] : R,
      ne = l.autoAriaDisabled,
      Te = ne === void 0 ? !1 : ne;
    (r.items = Je(T)),
      (r.dragDisabled = x),
      (r.dropFromOthersDisabled = P),
      (r.zoneTabIndex = v),
      (r.dropTargetStyle = Ne),
      (r.dropTargetClasses = ce),
      (r.autoAriaDisabled = Te),
      r.type && _ !== r.type && Ha(e, r.type),
      (r.type = _),
      dg(e, _),
      Te ||
        (e.setAttribute("aria-disabled", x),
        e.setAttribute("role", "list"),
        e.setAttribute(
          "aria-describedby",
          x ? mr.DND_ZONE_DRAG_DISABLED : mr.DND_ZONE_ACTIVE
        )),
      z.set(e, r),
      fe
        ? (e.tabIndex =
            e === X ||
            ze.contains(e) ||
            r.dropFromOthersDisabled ||
            (X && r.type !== z.get(X).type)
              ? -1
              : 0)
        : (e.tabIndex = r.zoneTabIndex),
      e.addEventListener("focus", pg);
    for (
      var Ue = function (ke) {
          var W = e.children[ke];
          gr.add(W),
            (W.tabIndex = fe ? -1 : 0),
            Te || W.setAttribute("role", "listitem"),
            W.removeEventListener("keydown", Fa.get(W)),
            W.removeEventListener("click", Ya.get(W)),
            x ||
              (W.addEventListener("keydown", a),
              Fa.set(W, a),
              W.addEventListener("click", i),
              Ya.set(W, i)),
            fe &&
              r.items[ke][H] === Ee &&
              (h(function () {
                return ["focusing on", { i: ke, focusedItemId: Ee }];
              }),
              (ze = W),
              (ze.tabIndex = 0),
              W.focus());
        },
        G = 0;
      G < e.children.length;
      G++
    )
      Ue(G);
  }
  c(t);
  var m = {
    update: function (b) {
      h(function () {
        return "keyboard dndzone will update newOptions: ".concat(Pe(b));
      }),
        c(b);
    },
    destroy: function () {
      h(function () {
        return "keyboard dndzone will destroy";
      }),
        Ha(e, r.type),
        z.delete(e),
        hn.delete(e);
    },
  };
  return hn.set(e, m), m;
}
var gg = [
  "items",
  "flipDurationMs",
  "type",
  "dragDisabled",
  "morphDisabled",
  "dropFromOthersDisabled",
  "zoneTabIndex",
  "dropTargetStyle",
  "dropTargetClasses",
  "transformDraggedElement",
  "autoAriaDisabled",
  "centreDraggedOnCursor",
];
function mg(e, t) {
  Wa(t);
  var r = og(e, t),
    n = fg(e, t);
  return {
    update: function (o) {
      Wa(o), r.update(o), n.update(o);
    },
    destroy: function () {
      r.destroy(), n.destroy();
    },
  };
}
function Wa(e) {
  var t = e.items;
  e.flipDurationMs,
    e.type,
    e.dragDisabled,
    e.morphDisabled,
    e.dropFromOthersDisabled;
  var r = e.zoneTabIndex;
  e.dropTargetStyle;
  var n = e.dropTargetClasses;
  e.transformDraggedElement, e.autoAriaDisabled, e.centreDraggedOnCursor;
  var a = af(e, gg);
  if (
    (Object.keys(a).length > 0 &&
      console.warn("dndzone will ignore unknown options", a),
    !t)
  )
    throw new Error("no 'items' key provided to dndzone");
  var o = t.find(function (i) {
    return !{}.hasOwnProperty.call(i, H);
  });
  if (o)
    throw new Error(
      "missing '".concat(H, "' property for item ").concat(Pe(o))
    );
  if (n && !Array.isArray(n))
    throw new Error(
      "dropTargetClasses should be an array but instead it is a "
        .concat(sr(n), ", ")
        .concat(Pe(n))
    );
  if (r && !Tg(r))
    throw new Error(
      "zoneTabIndex should be a number but instead it is a "
        .concat(sr(r), ", ")
        .concat(Pe(r))
    );
}
function Tg(e) {
  return (
    !isNaN(e) &&
    (function (t) {
      return (t | 0) === t;
    })(parseFloat(e))
  );
}
const bg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        DRAGGED_ELEMENT_ID: Zi,
        SHADOW_ITEM_MARKER_PROPERTY_NAME: jt,
        SHADOW_PLACEHOLDER_ITEM_ID: Br,
        SOURCES: ee,
        TRIGGERS: Z,
        alertToScreenReader: Qe,
        dndzone: mg,
        overrideItemIdKeyNameBeforeInitialisingDndZones: yf,
        setDebugMode: _f,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Eg = 6,
  Qr = 2,
  Xr = 0,
  Sg = { general: 1, vePTDiscount: 2, stakedPt: 3 },
  yg = new L(),
  Ss = new d([]),
  _g = new d([]);
A([Vo, yg])
  .pipe(
    g(([e]) => !!e),
    w(hg),
    g(Boolean)
  )
  .subscribe(Ss);
A({ pools: Ss, currenciesCache: cu })
  .pipe(
    g(({ currenciesCache: e }) => e.size > 0),
    u(({ pools: e, currenciesCache: t }) =>
      e.map((r) => Rg(r, t)).filter(Boolean)
    )
  )
  .subscribe((e) => _g.next(e));
function nb(e, t) {
  return t.reduce(
    (r, n) =>
      n.currencyInfo.symbol !== e ||
      !n.canBorrow ||
      (r &&
        _c(
          r.loanType === Sg.vePTDiscount
            ? r.discountBorrowApyRr
            : r.borrowAPYRr,
          n.borrowAPYRr
        ))
        ? r
        : n,
    null
  );
}
function ab(e, t) {
  return t.reduce(
    (r, n) =>
      n.currencyInfo.symbol !== e || !n.canSupply
        ? r
        : !r || nr(n.supplyAPYRr, r.supplyAPYRr)
        ? n
        : r,
    null
  );
}
async function hg() {
  const e = he.getValue(),
    { data: t, error: r } = await (e ? on.getPool : on.getPublicPool)();
  return r ? (I.send("toast", "error", r), null) : (t && t.rows) || null;
}
function Rg(e, t) {
  const r = t.get(e.currency);
  if (!r) return null;
  const {
      poolId: n,
      currency: a,
      currentHourlyBorrowRate: o,
      borrowAPY: i,
      totalBorrowedRq: s,
      totalLiquidityRq: c,
      totalBorrowedWithDiscount: m,
      supportedCollaterals: l,
      optimalUsageRr: b,
      baseBorrowRate: T,
      variableRateSlope1: E,
      variableRateSlope2: _,
      discountRate: D,
      discountBudgetRate: x,
      discountableRatioVept: k,
      discountableRatioLoan: v,
      maxVeptAmount: B,
      minVeptAmount: P,
      minBorrowPerUser: me,
      maxBorrowPerUser: Ne,
      initLtvRr: R,
      marginCallL1LtvRr: ce,
      liqLtvRr: ne,
      poolOrder: Te,
      poolLoanType: Ue,
      lastPrice: G,
      canBorrow: Rt,
      supplyAPY: ke,
      supplyCap: W,
      canSupply: Fr,
    } = e,
    it = Ot(c || 0, G || 0),
    He = Sc(s || 0, m || 0),
    Qt = Ot(He || 0, G || 0),
    st = Ec(c || 0, He || 0),
    Xt = Ot(st || 0, G || 0),
    ae = nr(c, 0) ? xt(He, c) : "0",
    Re = Ot(i || 0, D),
    oe = xt(e.discountableRatioVept || "1", e.discountableRatioLoan || "1");
  return {
    poolId: n,
    currency: a,
    displayCurrency: r.displayCurrency,
    currencyInfo: r,
    currentHourlyBorrowRateRr: o || "0",
    currentHourlyBorrowRate: J(o, Eg),
    borrowAPYRr: i || "0",
    borrowAPY: J(i, Qr),
    supplyAPYRr: ke || "0",
    supplyAPY: vg(ke, Qr),
    totalBorrowedRq: s || "0",
    totalBorrowed: be(s, r.valuePrecision),
    poolTotalBorrowedRq: He,
    poolTotalBorrowed: Ka(He, 2),
    poolTotalBorrowedUsdRq: Qt,
    poolTotalBorrowedUsd: Ka(Qt, r.valuePrecision),
    totalLiquidityRq: c || "0",
    totalLiquidity: be(c, r.valuePrecision),
    totalLiquidityUsdRq: it || "0",
    totalAvailableRq: st,
    totalAvailableUsdRq: Xt || "0",
    totalAvailableUsd: be(Xt, r.valuePrecision),
    totalBorrowedWithDiscountRq: m || "0",
    totalBorrowedWithDiscount: be(m, r.valuePrecision),
    utilizationRateRr: ae,
    utilizationRate: J(ae, 2),
    supportedCollaterals: l,
    optimalUsageRr: b || "0",
    optimalUsage: J(b),
    baseBorrowRateRr: T || "0",
    baseBorrowRate: J(T),
    variableRateSlope1Rr: E || "0",
    variableRateSlope1: J(E),
    variableRateSlope2Rr: _ || "0",
    variableRateSlope2: J(_),
    discountRateRr: D || "0",
    discountRate: J(D),
    discountBorrowApyRr: Re,
    discountBorrowApy: J(Re, Qr),
    discountBudgetRateRr: x || "0",
    discountBudgetRate: J(x),
    discountableRatioVePT: k || "1",
    discountableRatioLoan: v || "1",
    discountableRatioRr: oe,
    discountableRatio: J(oe),
    maxVePTAmountRq: B || "0",
    maxVePTAmount: be(B, r.valuePrecision),
    minVePTAmountRq: P || "0",
    minVePTAmount: be(P, r.valuePrecision),
    minBorrowPerUserRq: me || "0",
    minBorrowPerUser: be(me, r.valuePrecision),
    maxBorrowPerUserRq: Ne || "0",
    maxBorrowPerUser: be(Ne, r.valuePrecision),
    initLtvRr: R || "0",
    initLtv: J(R, Xr, !0, 3),
    marginCallL1LtvRr: ce || "0",
    marginCallL1Ltv: J(ce, Xr, !0, 3),
    liqLtvRr: ne || "0",
    liqLtv: J(ne, Xr, !0, 3),
    poolOrder: Te,
    loanType: Ue,
    lastPriceRq: G,
    lastPrice: be(G, r.valuePrecision),
    canBorrow: Rt,
    supplyCapRq: W,
    canSupply: Fr,
  };
}
function Ka(e, t = 2) {
  const n = [
    { unit: 1e9, text: "B" },
    { unit: 1e6, text: "M" },
    { unit: 1e3, text: "K" },
  ].find((a) => yc(e, a.unit));
  return n ? be(xt(e, n.unit), t) + n.text : be(e, t);
}
function J(e, t = 4, r = !0, n = 0) {
  if (!e && e !== 0) return "--";
  let a = ar(Ot(e, 100), t, n);
  return r && (a = C.trimEnd0(a)), a + "%";
}
function be(e, t = 8, r = !0, n = 0) {
  return !e && e !== 0
    ? "--"
    : r
    ? C.delimit(C.trimEnd0(ar(e, t, n)))
    : C.delimit(ar(e, t, n));
}
function vg(e, t = 4, r = !0, n = 0) {
  if (!e && e !== 0) return "--";
  const a = Sa(-(t + 2), !0);
  return nr(e, 0) && nr(a, e) ? "< " + Sa(-t, !0) + "%" : J(e, t, r, n);
}
const ob = {
    parseUrl(e) {
      const t = e.query.t,
        r = t && t.toLowerCase() === "s",
        n = e.query.sid,
        a = e.query.rec,
        o = `${e.query.type}`.toLowerCase();
      return {
        isStrategy: r,
        type: o,
        params: n && a ? { strategyId: n, recType: a } : void 0,
      };
    },
    clearCopyQuery(e) {
      const t = { ...e.query };
      return delete t.sid, delete t.rec, t;
    },
  },
  za = "strategy_grid",
  Ag = {
    read() {
      return M.readStorageObject(za, Og());
    },
    update(e) {
      M.writeStorageObject(za, { ...Ag.read(), ...e });
    },
  };
function Og() {
  return { version: 1, positionGridPreview: !1 };
}
const wg = new d(!0);
document.addEventListener("visibilitychange", () => {
  wg.next(!document.hidden);
});
const Zr = {
  en: ["twitter", "facebook", "telegram", "linkedin", "reddit", "microblog"],
  ru: [
    "vk",
    "twitter",
    "facebook",
    "telegram",
    "linkedin",
    "reddit",
    "whatsapp",
  ],
  es: ["whatsapp", "snapchat", "twitter", "facebook", "telegram", "linkedin"],
  tr: ["whatsapp", "facebook", "twitter", "telegram"],
  pt: ["facebook", "twitter", "whatsapp", "linkedin"],
  other: ["twitter", "facebook", "telegram", "linkedin", "reddit"],
};
function Ig(e, t, r, n = "", a) {
  if (!(e || a) || !t || !r) return [];
  const o = {
    facebook: `https://www.facebook.com/sharer.php?${Q.stringify({
      u: t + "&media=facebook",
    })}`,
    twitter: `https://twitter.com/share?${Q.stringify({
      text: r,
      url: t + "&media=twitter",
    })}`,
    telegram: `https://telegram.me/share/url?${Q.stringify({
      text: r,
      url: t + "&media=telegram",
    })}`,
    microblog: `http://v.t.sina.com.cn/share/share.php?${Q.stringify({
      title: r,
      url: t + "&media=microblog",
      pic: n,
    })}`,
    linkedin: `https://www.linkedin.com/shareArticle?${Q.stringify({
      title: r,
      url: t + "&media=linkedin",
    })}`,
    reddit: `https://reddit.com/submit?${Q.stringify({
      title: r,
      url: t + "&media=reddit",
    })}`,
    vk: `https://vk.com/share.php?${Q.stringify({ url: t + "&media=vk" })}`,
    whatsapp: `https://web.whatsapp.com/send?${Q.stringify({
      text: t + "&media=whatsapp",
    })}`,
    snapchat: `https://snapchat.com/scan?${Q.stringify({
      attachmentUrl: t + "&media=snapchat",
      utm_source: "phemex",
    })}`,
  };
  if (a && a.length > 0) return a.map((c) => ({ ...s(c.name), ...c }));
  return (Zr[e] ? Zr[e] : Zr.other).map(s);
  function s(c) {
    return { media: c, link: o[c], img: It[`${c.toUpperCase()}_IMG`] };
  }
}
function ib({ referralLink: e, shareText: t, shareImg: r }) {
  const n = [
    { name: "twitter", img: Oe.TWITTER },
    { name: "facebook", img: Oe.FACEBOOK },
    { name: "telegram", img: Oe.TELEGRAM },
    { name: "linkedin", img: Oe.LINKEDIN },
    { name: "reddit", img: Oe.REDDIT },
  ];
  return Ig("", e, t, r, n);
}
function sb({ fixLink: e, path: t, referralCode: r }) {
  return t
    ? location.origin + e(t) + `?referralCode=${r}`
    : location.origin + location.pathname + `?referralCode=${r}`;
}
function Cg(e, t) {
  return new Promise((r, n) => {
    if (document.getElementById(e)) {
      r();
      return;
    }
    const a = document.createElement("script");
    (a.async = !0),
      (a.src = t),
      (a.onload = () => r()),
      (a.onerror = (o) => n(o)),
      document.body.appendChild(a);
  });
}
const Dg = new L(),
  Ng = () =>
    Cg(
      "html2canvas",
      "https://s.phemex.com/100/3rd/html2canvas/1.4.1/html2canvas.min.js"
    ),
  Pg = Ft(() => Ng()).pipe(
    u(() => window.html2canvas),
    O(1)
  );
let Jr;
function Lg() {
  let e = document.createElement("a");
  return (
    (e.style.display = "none"),
    document.body.appendChild(e),
    function (r, n) {
      if (!r) return;
      const a = window.URL.createObjectURL(r);
      (e.href = a), (e.download = n), e.click(), window.URL.revokeObjectURL(a);
    }
  );
}
const cb = Dg.pipe(
  Ps((e) =>
    Pg.pipe(
      w((t) =>
        t(e.element, {
          useCORS: !0,
          onclone: function (r) {
            const n = r.getElementById("downloadMirror");
            n && (n.style.display = "block");
          },
        })
      ),
      w(xg),
      Le((t) => {
        Jr || (Jr = Lg()), Jr(t, e.fileName);
      }),
      u(() => ({ loading: !1 })),
      N({ loading: !0 })
    )
  ),
  N({ loading: !1 })
);
function xg(e) {
  return new Promise((t) => {
    e.toBlob(t, "image/jpeg", 0.95);
  });
}
const ub = S.pipe(
    g((e) => e.type === "market24h-spot-realtime"),
    u((e) => e.data),
    O(1)
  ),
  Mg = new d([]);
A([_t, ht])
  .pipe(u(([e, t]) => Ug(e)))
  .subscribe((e) => Mg.next(e));
function Ug(e, t) {
  return e
    .filter((r) => !!r.inAssetsDisplay)
    .map((r) => ({ text: r.currency, value: r.currency, name: r.name }));
}
const lb = {
    isConditionalOrder(e) {
      return (
        ["Stop", "StopLimit", "LimitIfTouched", "MarketIfTouched"].indexOf(
          e.ordType
        ) > -1
      );
    },
    isMarketOrder(e) {
      return ["Market", "Stop", "MarketIfTouched"].indexOf(e.ordType) > -1;
    },
    isLiqTradeOrder(e) {
      return e.ordType === "LiqTrade";
    },
    calcValue({
      qtyType: e,
      priceEp: t,
      baseQtyEv: r,
      quoteQtyEv: n,
      baseQtyScale: a,
      quoteQtyScale: o,
      baseQtyPrecision: i,
      quoteQtyPrecision: s,
    }) {
      const c = this.getByQtyType(e, i, s, !0);
      if (t <= 0) return this.formatDelimit(0, c);
      const m = y(t).div(y(10).pow(o));
      if (e === "ByBase") {
        const l = y(10).pow(a);
        return this.formatDelimit(y(r).div(l).times(m), c);
      }
      if (e === "ByQuote") {
        const l = y(10).pow(o);
        return this.formatDelimit(y(n).div(l).div(m), c);
      }
      return this.formatDelimit(0, c);
    },
    calcValueWU({
      qtyType: e,
      priceEp: t,
      baseQtyEv: r,
      quoteQtyEv: n,
      baseQtyScale: a,
      quoteQtyScale: o,
      baseQtyPrecision: i,
      quoteQtyPrecision: s,
      displayBaseCurrency: c,
      quoteCurrency: m,
    }) {
      const l = this.calcValue({
        qtyType: e,
        priceEp: t,
        baseQtyEv: r,
        quoteQtyEv: n,
        baseQtyScale: a,
        quoteQtyScale: o,
        baseQtyPrecision: i,
        quoteQtyPrecision: s,
      });
      return e === "ByBase"
        ? [l, m].join(" ")
        : e === "ByQuote"
        ? [l, c].join(" ")
        : "-";
    },
    calcQty(e, t, r) {
      return e === "ByBase"
        ? C.delimit(t)
        : e === "ByQuote"
        ? C.delimit(r)
        : "";
    },
    calcQtyWU(e, t, r, n, a) {
      return e === "ByBase"
        ? C.delimit(t) + " " + r
        : e === "ByQuote"
        ? C.delimit(n) + " " + a
        : "";
    },
    getByQtyType(e, t, r, n = !1) {
      if (e === "ByBase") return n ? r : t;
      if (e === "ByQuote") return n ? t : r;
    },
    joinWU(e, t) {
      return !e || !t ? "-" : [e, t].join(" ");
    },
    formatDelimit(e, t) {
      return C.delimit(C.floor(e, t));
    },
    isFinalOrder(e) {
      return ["Deactivated", "Filled", "Canceled", "Rejected"].indexOf(e) > -1;
    },
  },
  kg = new d({ bids: [], asks: [] });
S.pipe(g((e) => e.type === "depth")).subscribe(({ data: e }) => kg.next(e));
const ys = new d(!gt.readSpotStorage().hideOtherSymbols);
ys.subscribe((e) => {
  S.next({ type: "spot-all-symbols", data: e }),
    gt.updateSpotStorage({ hideOtherSymbols: !e });
});
const _s = new d(!mt.readMarginStorage().hideOtherSymbols);
_s.subscribe((e) => {
  S.next({ type: "margin-all-symbols", data: e }),
    mt.updateMarginStorage({ hideOtherSymbols: !e });
});
const [db, pb] = ot(at, { [re.Margin]: _s, [re.Spot]: ys }, !1),
  [fb] = ot(at, { [re.Margin]: $n, [re.Spot]: Un }, []),
  Bg = {
    abtest() {
      return f.get(p.COPY_TRADE_ABTEST, {});
    },
    getTraderSetting() {
      return f.get(p.COPY_TRADE_TRADER_SETTING, {});
    },
  },
  gb = Gg(te, Bg.getTraderSetting, Ye);
function Gg(e, t, r) {
  return e.pipe(
    g((n) => n === "Login"),
    w(t),
    u((n) => n.data || []),
    Tr(r),
    u(([n, a]) => !!n.find((o) => o === a.symbol)),
    N(!1),
    O(1)
  );
}
const $g = qn.pipe(u((e) => e.find(({ posSide: t }) => t === "Long"))),
  Vg = qn.pipe(u((e) => e.find(({ posSide: t }) => t === "Short"))),
  ua = Lr.createRawRiskLimitOptions$(Ye, Io),
  Fg = Lr.createRealRiskLimit$(tp, ua, hr),
  Yg = Lr.createRealRiskLimit$($g, ua, hr),
  Hg = Lr.createRealRiskLimit$(Vg, ua, hr);
function mb(e) {
  return { Merged: Fg, Long: Yg, Short: Hg }[e];
}
const hs = new d(new Map());
S.pipe(
  g((e) => e.type === "tpsltsCache"),
  u((e) => e.data)
).subscribe(hs);
const Wg = hs.pipe(
    u((e) => (t, r) => {
      const n = t + (r || "");
      return e.get(n) || zg();
    })
  ),
  Tb = Wg.pipe(
    u((e) => (t, r) => {
      const n = e(t, r),
        a = Kg(n);
      return a.entire > 0 ? "Entire" : a.partial > 0 ? "Partial" : "None";
    })
  );
function Kg(e) {
  return {
    entire: e.tp.Entire.length + e.sl.Entire.length,
    partial: e.tp.Partial.length + e.sl.Partial.length,
  };
}
function zg() {
  return {
    tp: { Entire: [], Partial: [], All: [] },
    sl: { Entire: [], Partial: [], All: [] },
    ts: { All: [] },
  };
}
const Rs = new d(new Map()),
  bb = Rs.pipe(
    u((e) => e.get("Invalid")),
    g(Boolean),
    N({ accountBalanceRv: "0", totalOrdUsedBalanceRv: "0", fixedUsedRv: "0" })
  );
S.pipe(
  g((e) => e.type === "risk-unit"),
  u((e) => e.data),
  g(Boolean),
  N(new Map()),
  O(1)
).subscribe((e) => Rs.next(e));
export {
  Kn as $,
  De as A,
  jc as B,
  Vm as C,
  se as D,
  _m as E,
  f as F,
  wn as G,
  Xg as H,
  pc as I,
  eo as J,
  co as K,
  Im as L,
  S as M,
  hu as N,
  mm as O,
  pm as P,
  fm as Q,
  er as R,
  Om as S,
  am as T,
  Ei as U,
  Iu as V,
  Qm as W,
  V as X,
  I as Y,
  xe as Z,
  gl as _,
  te as a,
  xu as a$,
  wm as a0,
  Am as a1,
  Cm as a2,
  C as a3,
  Km as a4,
  zm as a5,
  qm as a6,
  iT as a7,
  Oi as a8,
  pT as a9,
  Se as aA,
  vi as aB,
  bT as aC,
  pi as aD,
  rp as aE,
  Kd as aF,
  Xd as aG,
  ET as aH,
  Nt as aI,
  K as aJ,
  $l as aK,
  Vl as aL,
  Pd as aM,
  Ld as aN,
  Tt as aO,
  rn as aP,
  ba as aQ,
  In as aR,
  Jm as aS,
  Oe as aT,
  Yt as aU,
  Qg as aV,
  Nn as aW,
  at as aX,
  ue as aY,
  Zm as aZ,
  Me as a_,
  lt as aa,
  Xm as ab,
  yt as ac,
  Ht as ad,
  Vo as ae,
  Sm as af,
  Ro as ag,
  nT as ah,
  nt as ai,
  p as aj,
  Kr as ak,
  Wd as al,
  Dn as am,
  Ye as an,
  bd as ao,
  ki as ap,
  zn as aq,
  ap as ar,
  np as as,
  _u as at,
  sp as au,
  ip as av,
  op as aw,
  _i as ax,
  he as ay,
  qg as az,
  td as b,
  zu as b$,
  Tc as b0,
  pp as b1,
  RT as b2,
  ed as b3,
  $i as b4,
  Ut as b5,
  Vu as b6,
  sn as b7,
  gt as b8,
  Mu as b9,
  zT as bA,
  Dt as bB,
  WT as bC,
  Fu as bD,
  Uu as bE,
  QT as bF,
  du as bG,
  Io as bH,
  qn as bI,
  hr as bJ,
  Lr as bK,
  KT as bL,
  Yi as bM,
  Yu as bN,
  Tp as bO,
  bo as bP,
  JT as bQ,
  eb as bR,
  tb as bS,
  XT as bT,
  To as bU,
  rb as bV,
  So as bW,
  Di as bX,
  Ci as bY,
  ht as bZ,
  Fe as b_,
  _t as ba,
  mp as bb,
  Bu as bc,
  nr as bd,
  ku as be,
  Wt as bf,
  IT as bg,
  wT as bh,
  xT as bi,
  Qn as bj,
  mt as bk,
  UT as bl,
  kT as bm,
  GT as bn,
  VT as bo,
  rt as bp,
  hT as bq,
  FT as br,
  Bt as bs,
  bi as bt,
  YT as bu,
  HT as bv,
  _r as bw,
  Cd as bx,
  Ae as by,
  um as bz,
  ri as c,
  $u as c$,
  Do as c0,
  Ku as c1,
  ft as c2,
  lm as c3,
  Wr as c4,
  ST as c5,
  yT as c6,
  CT as c7,
  vT as c8,
  AT as c9,
  tm as cA,
  Sc as cB,
  ar as cC,
  Ot as cD,
  MT as cE,
  ym as cF,
  sT as cG,
  cT as cH,
  ob as cI,
  lb as cJ,
  Jg as cK,
  aT as cL,
  Mn as cM,
  xn as cN,
  eT as cO,
  kg as cP,
  Hu as cQ,
  db as cR,
  OT as cS,
  re as cT,
  fb as cU,
  fu as cV,
  BT as cW,
  $T as cX,
  pb as cY,
  lT as cZ,
  Wu as c_,
  Ep as ca,
  DT as cb,
  Pn as cc,
  TT as cd,
  mT as ce,
  Fo as cf,
  Cu as cg,
  em as ch,
  Ea as ci,
  Ec as cj,
  xt as ck,
  LT as cl,
  yo as cm,
  _g as cn,
  Sg as co,
  nb as cp,
  ab as cq,
  ou as cr,
  ub as cs,
  Mo as ct,
  yc as cu,
  _c as cv,
  mo as cw,
  Wi as cx,
  Sa as cy,
  om as cz,
  ec as d,
  wg as d$,
  fo as d0,
  yg as d1,
  Mt as d2,
  Ce as d3,
  Pc as d4,
  Ja as d5,
  hc as d6,
  sm as d7,
  Sp as d8,
  rm as d9,
  tT as dA,
  Fn as dB,
  dT as dC,
  Cr as dD,
  ZT as dE,
  cb as dF,
  sb as dG,
  Dg as dH,
  Nd as dI,
  dp as dJ,
  im as dK,
  Qi as dL,
  Eo as dM,
  Gu as dN,
  Ip as dO,
  dt as dP,
  Hp as dQ,
  _T as dR,
  zp as dS,
  cm as dT,
  Ag as dU,
  _o as dV,
  rT as dW,
  Hd as dX,
  Ud as dY,
  Yd as dZ,
  Kt as d_,
  gu as da,
  fT as db,
  we as dc,
  gT as dd,
  Fi as de,
  jT as df,
  jp as dg,
  uu as dh,
  mb as di,
  cn as dj,
  Pp as dk,
  Np as dl,
  de as dm,
  Wg as dn,
  Tb as dp,
  bb as dq,
  Rs as dr,
  qT as ds,
  ju as dt,
  gb as du,
  ep as dv,
  qp as dw,
  Xp as dx,
  Zp as dy,
  ef as dz,
  Oo as e,
  oT as e0,
  La as e1,
  Fp as e2,
  uT as e3,
  Md as e4,
  hm as e5,
  kd as e6,
  ib as e7,
  Bm as e8,
  Gm as e9,
  tt as eA,
  PT as eB,
  Xl as eC,
  NT as eD,
  bg as eE,
  $m as ea,
  Mm as eb,
  xm as ec,
  Pm as ed,
  Um as ee,
  ci as ef,
  Nm as eg,
  Gl as eh,
  Lm as ei,
  km as ej,
  wi as ek,
  wo as el,
  Mg as em,
  bm as en,
  Em as eo,
  Bd as ep,
  $d as eq,
  Gd as er,
  Fd as es,
  Vd as et,
  Zg as eu,
  nd as ev,
  ad as ew,
  Hm as ex,
  Wm as ey,
  jm as ez,
  lu as f,
  pu as g,
  oc as h,
  Ie as i,
  et as j,
  Dm as k,
  Rr as l,
  dm as m,
  Zl as n,
  Ze as o,
  nm as p,
  gm as q,
  Tm as r,
  Jl as s,
  Hr as t,
  ge as u,
  Fm as v,
  Ym as w,
  vm as x,
  Rm as y,
  qc as z,
};
//# sourceMappingURL=chunk-10576bff.js.map
