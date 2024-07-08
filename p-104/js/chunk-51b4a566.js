import { d as R1 } from "./app-6c8af094.js";
import {
  c9 as T1,
  ca as C1,
  cb as N1,
  cc as $1,
  cd as D1,
  ce as F1,
  cf as L1,
  cg as M1,
  ch as j1,
  ci as q1,
  cj as U1,
  ck as eu,
  cl as Hf,
  cm as ee,
  cn as Bf,
  co as Ko,
  cp as z1,
  cq as Kf,
  cr as k1,
  cs as jo,
  ct as H1,
  cu as B1,
  cv as ds,
  cw as K1,
  cx as Vf,
  x as Br,
  y as V1,
} from "./chunk-772394bf.js";
import "./chunk-8f7551c4.js";
function tu(n) {
  return globalThis.Buffer != null
    ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
    : n;
}
function Wf(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? tu(globalThis.Buffer.allocUnsafe(n))
    : new Uint8Array(n);
}
function zc(n, t) {
  t || (t = n.reduce((o, u) => o + u.length, 0));
  const r = Wf(t);
  let s = 0;
  for (const o of n) r.set(o, s), (s += o.length);
  return tu(r);
}
const yl = {
  ...T1,
  ...C1,
  ...N1,
  ...$1,
  ...D1,
  ...F1,
  ...L1,
  ...M1,
  ...j1,
  ...q1,
};
function Gf(n, t, r, s) {
  return {
    name: n,
    prefix: t,
    encoder: { name: n, prefix: t, encode: r },
    decoder: { decode: s },
  };
}
const vl = Gf(
    "utf8",
    "u",
    (n) => "u" + new TextDecoder("utf8").decode(n),
    (n) => new TextEncoder().encode(n.substring(1))
  ),
  xc = Gf(
    "ascii",
    "a",
    (n) => {
      let t = "a";
      for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
      return t;
    },
    (n) => {
      n = n.substring(1);
      const t = Wf(n.length);
      for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
      return t;
    }
  ),
  Jf = {
    utf8: vl,
    "utf-8": vl,
    hex: yl.base16,
    latin1: xc,
    ascii: xc,
    binary: xc,
    ...yl,
  };
function dr(n, t = "utf8") {
  const r = Jf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? tu(globalThis.Buffer.from(n, "utf-8"))
    : r.decoder.decode(`${r.prefix}${n}`);
}
function nr(n, t = "utf8") {
  const r = Jf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(n).substring(1);
}
var ml =
    (globalThis && globalThis.__spreadArray) ||
    function (n, t, r) {
      if (r || arguments.length === 2)
        for (var s = 0, o = t.length, u; s < o; s++)
          (u || !(s in t)) &&
            (u || (u = Array.prototype.slice.call(t, 0, s)), (u[s] = t[s]));
      return n.concat(u || Array.prototype.slice.call(t));
    },
  W1 = (function () {
    function n(t, r, s) {
      (this.name = t),
        (this.version = r),
        (this.os = s),
        (this.type = "browser");
    }
    return n;
  })(),
  G1 = (function () {
    function n(t) {
      (this.version = t),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return n;
  })(),
  J1 = (function () {
    function n(t, r, s, o) {
      (this.name = t),
        (this.version = r),
        (this.os = s),
        (this.bot = o),
        (this.type = "bot-device");
    }
    return n;
  })(),
  Q1 = (function () {
    function n() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return n;
  })(),
  Y1 = (function () {
    function n() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return n;
  })(),
  X1 =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Z1 =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  wl = 3,
  ew = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", X1],
  ],
  bl = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function tw(n) {
  return n
    ? _l(n)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Y1()
    : typeof navigator < "u"
    ? _l(navigator.userAgent)
    : nw();
}
function rw(n) {
  return (
    n !== "" &&
    ew.reduce(function (t, r) {
      var s = r[0],
        o = r[1];
      if (t) return t;
      var u = o.exec(n);
      return !!u && [s, u];
    }, !1)
  );
}
function _l(n) {
  var t = rw(n);
  if (!t) return null;
  var r = t[0],
    s = t[1];
  if (r === "searchbot") return new Q1();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < wl && (o = ml(ml([], o, !0), sw(wl - o.length), !0))
    : (o = []);
  var u = o.join("."),
    f = iw(n),
    g = Z1.exec(n);
  return g && g[1] ? new J1(r, u, f, g[1]) : new W1(r, u, f);
}
function iw(n) {
  for (var t = 0, r = bl.length; t < r; t++) {
    var s = bl[t],
      o = s[0],
      u = s[1],
      f = u.exec(n);
    if (f) return o;
  }
  return null;
}
function nw() {
  var n = typeof process < "u" && process.version;
  return n ? new G1(process.version.slice(1)) : null;
}
function sw(n) {
  for (var t = [], r = 0; r < n; r++) t.push("0");
  return t;
}
const ow = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
    batchFetchMessages: "waku_batchFetchMessages",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
    batchFetchMessages: "irn_batchFetchMessages",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
    batchFetchMessages: "iridium_batchFetchMessages",
  },
};
var Ut = {},
  aw = {
    get exports() {
      return Ut;
    },
    set exports(n) {
      Ut = n;
    },
  },
  On = typeof Reflect == "object" ? Reflect : null,
  El =
    On && typeof On.apply == "function"
      ? On.apply
      : function (t, r, s) {
          return Function.prototype.apply.call(t, r, s);
        },
  $o;
On && typeof On.ownKeys == "function"
  ? ($o = On.ownKeys)
  : Object.getOwnPropertySymbols
  ? ($o = function (t) {
      return Object.getOwnPropertyNames(t).concat(
        Object.getOwnPropertySymbols(t)
      );
    })
  : ($o = function (t) {
      return Object.getOwnPropertyNames(t);
    });
function cw(n) {
  console && console.warn && console.warn(n);
}
var Qf =
  Number.isNaN ||
  function (t) {
    return t !== t;
  };
function Me() {
  Me.init.call(this);
}
aw.exports = Me;
Ut.once = fw;
Me.EventEmitter = Me;
Me.prototype._events = void 0;
Me.prototype._eventsCount = 0;
Me.prototype._maxListeners = void 0;
var Il = 10;
function Vo(n) {
  if (typeof n != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof n
    );
}
Object.defineProperty(Me, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return Il;
  },
  set: function (n) {
    if (typeof n != "number" || n < 0 || Qf(n))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          n +
          "."
      );
    Il = n;
  },
});
Me.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
Me.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || Qf(t))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        t +
        "."
    );
  return (this._maxListeners = t), this;
};
function Yf(n) {
  return n._maxListeners === void 0 ? Me.defaultMaxListeners : n._maxListeners;
}
Me.prototype.getMaxListeners = function () {
  return Yf(this);
};
Me.prototype.emit = function (t) {
  for (var r = [], s = 1; s < arguments.length; s++) r.push(arguments[s]);
  var o = t === "error",
    u = this._events;
  if (u !== void 0) o = o && u.error === void 0;
  else if (!o) return !1;
  if (o) {
    var f;
    if ((r.length > 0 && (f = r[0]), f instanceof Error)) throw f;
    var g = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw ((g.context = f), g);
  }
  var m = u[t];
  if (m === void 0) return !1;
  if (typeof m == "function") El(m, this, r);
  else
    for (var y = m.length, E = rp(m, y), s = 0; s < y; ++s) El(E[s], this, r);
  return !0;
};
function Xf(n, t, r, s) {
  var o, u, f;
  if (
    (Vo(r),
    (u = n._events),
    u === void 0
      ? ((u = n._events = Object.create(null)), (n._eventsCount = 0))
      : (u.newListener !== void 0 &&
          (n.emit("newListener", t, r.listener ? r.listener : r),
          (u = n._events)),
        (f = u[t])),
    f === void 0)
  )
    (f = u[t] = r), ++n._eventsCount;
  else if (
    (typeof f == "function"
      ? (f = u[t] = s ? [r, f] : [f, r])
      : s
      ? f.unshift(r)
      : f.push(r),
    (o = Yf(n)),
    o > 0 && f.length > o && !f.warned)
  ) {
    f.warned = !0;
    var g = new Error(
      "Possible EventEmitter memory leak detected. " +
        f.length +
        " " +
        String(t) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (g.name = "MaxListenersExceededWarning"),
      (g.emitter = n),
      (g.type = t),
      (g.count = f.length),
      cw(g);
  }
  return n;
}
Me.prototype.addListener = function (t, r) {
  return Xf(this, t, r, !1);
};
Me.prototype.on = Me.prototype.addListener;
Me.prototype.prependListener = function (t, r) {
  return Xf(this, t, r, !0);
};
function uw() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Zf(n, t, r) {
  var s = { fired: !1, wrapFn: void 0, target: n, type: t, listener: r },
    o = uw.bind(s);
  return (o.listener = r), (s.wrapFn = o), o;
}
Me.prototype.once = function (t, r) {
  return Vo(r), this.on(t, Zf(this, t, r)), this;
};
Me.prototype.prependOnceListener = function (t, r) {
  return Vo(r), this.prependListener(t, Zf(this, t, r)), this;
};
Me.prototype.removeListener = function (t, r) {
  var s, o, u, f, g;
  if ((Vo(r), (o = this._events), o === void 0)) return this;
  if (((s = o[t]), s === void 0)) return this;
  if (s === r || s.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete o[t],
        o.removeListener && this.emit("removeListener", t, s.listener || r));
  else if (typeof s != "function") {
    for (u = -1, f = s.length - 1; f >= 0; f--)
      if (s[f] === r || s[f].listener === r) {
        (g = s[f].listener), (u = f);
        break;
      }
    if (u < 0) return this;
    u === 0 ? s.shift() : hw(s, u),
      s.length === 1 && (o[t] = s[0]),
      o.removeListener !== void 0 && this.emit("removeListener", t, g || r);
  }
  return this;
};
Me.prototype.off = Me.prototype.removeListener;
Me.prototype.removeAllListeners = function (t) {
  var r, s, o;
  if (((s = this._events), s === void 0)) return this;
  if (s.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : s[t] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete s[t]),
      this
    );
  if (arguments.length === 0) {
    var u = Object.keys(s),
      f;
    for (o = 0; o < u.length; ++o)
      (f = u[o]), f !== "removeListener" && this.removeAllListeners(f);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = s[t]), typeof r == "function")) this.removeListener(t, r);
  else if (r !== void 0)
    for (o = r.length - 1; o >= 0; o--) this.removeListener(t, r[o]);
  return this;
};
function ep(n, t, r) {
  var s = n._events;
  if (s === void 0) return [];
  var o = s[t];
  return o === void 0
    ? []
    : typeof o == "function"
    ? r
      ? [o.listener || o]
      : [o]
    : r
    ? lw(o)
    : rp(o, o.length);
}
Me.prototype.listeners = function (t) {
  return ep(this, t, !0);
};
Me.prototype.rawListeners = function (t) {
  return ep(this, t, !1);
};
Me.listenerCount = function (n, t) {
  return typeof n.listenerCount == "function"
    ? n.listenerCount(t)
    : tp.call(n, t);
};
Me.prototype.listenerCount = tp;
function tp(n) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[n];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
Me.prototype.eventNames = function () {
  return this._eventsCount > 0 ? $o(this._events) : [];
};
function rp(n, t) {
  for (var r = new Array(t), s = 0; s < t; ++s) r[s] = n[s];
  return r;
}
function hw(n, t) {
  for (; t + 1 < n.length; t++) n[t] = n[t + 1];
  n.pop();
}
function lw(n) {
  for (var t = new Array(n.length), r = 0; r < t.length; ++r)
    t[r] = n[r].listener || n[r];
  return t;
}
function fw(n, t) {
  return new Promise(function (r, s) {
    function o(f) {
      n.removeListener(t, u), s(f);
    }
    function u() {
      typeof n.removeListener == "function" && n.removeListener("error", o),
        r([].slice.call(arguments));
    }
    ip(n, t, u, { once: !0 }), t !== "error" && pw(n, o, { once: !0 });
  });
}
function pw(n, t, r) {
  typeof n.on == "function" && ip(n, "error", t, r);
}
function ip(n, t, r, s) {
  if (typeof n.on == "function") s.once ? n.once(t, r) : n.on(t, r);
  else if (typeof n.addEventListener == "function")
    n.addEventListener(t, function o(u) {
      s.once && n.removeEventListener(t, o), r(u);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof n
    );
}
const dw = ":";
function gw(n) {
  const [t, r] = n.split(dw);
  return { namespace: t, reference: r };
}
function yw(n, t = []) {
  const r = [];
  return (
    Object.keys(n).forEach((s) => {
      if (t.length && !t.includes(s)) return;
      const o = n[s];
      r.push(...o.accounts);
    }),
    r
  );
}
function np(n, t) {
  return n.includes(":") ? [n] : t.chains || [];
}
const sp = "base10",
  ir = "base16",
  kc = "base64pad",
  ru = "utf8",
  op = 0,
  Xi = 1,
  vw = 0,
  xl = 1,
  Hc = 12,
  iu = 32;
function mw() {
  const n = Bf.generateKeyPair();
  return { privateKey: nr(n.secretKey, ir), publicKey: nr(n.publicKey, ir) };
}
function Bc() {
  const n = Ko.randomBytes(iu);
  return nr(n, ir);
}
function ww(n, t) {
  const r = Bf.sharedKey(dr(n, ir), dr(t, ir), !0),
    s = new z1(eu.SHA256, r).expand(iu);
  return nr(s, ir);
}
function bw(n) {
  const t = eu.hash(dr(n, ir));
  return nr(t, ir);
}
function An(n) {
  const t = eu.hash(dr(n, ru));
  return nr(t, ir);
}
function _w(n) {
  return dr(`${n}`, sp);
}
function gs(n) {
  return Number(nr(n, sp));
}
function Ew(n) {
  const t = _w(typeof n.type < "u" ? n.type : op);
  if (gs(t) === Xi && typeof n.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof n.senderPublicKey < "u" ? dr(n.senderPublicKey, ir) : void 0,
    s = typeof n.iv < "u" ? dr(n.iv, ir) : Ko.randomBytes(Hc),
    o = new Kf.ChaCha20Poly1305(dr(n.symKey, ir)).seal(s, dr(n.message, ru));
  return xw({ type: t, sealed: o, iv: s, senderPublicKey: r });
}
function Iw(n) {
  const t = new Kf.ChaCha20Poly1305(dr(n.symKey, ir)),
    { sealed: r, iv: s } = qo(n.encoded),
    o = t.open(s, r);
  if (o === null) throw new Error("Failed to decrypt");
  return nr(o, ru);
}
function xw(n) {
  if (gs(n.type) === Xi) {
    if (typeof n.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return nr(zc([n.type, n.senderPublicKey, n.iv, n.sealed]), kc);
  }
  return nr(zc([n.type, n.iv, n.sealed]), kc);
}
function qo(n) {
  const t = dr(n, kc),
    r = t.slice(vw, xl),
    s = xl;
  if (gs(r) === Xi) {
    const g = s + iu,
      m = g + Hc,
      y = t.slice(s, g),
      E = t.slice(g, m),
      x = t.slice(m);
    return { type: r, sealed: x, iv: E, senderPublicKey: y };
  }
  const o = s + Hc,
    u = t.slice(s, o),
    f = t.slice(o);
  return { type: r, sealed: f, iv: u };
}
function Pw(n, t) {
  const r = qo(n);
  return ap({
    type: gs(r.type),
    senderPublicKey:
      typeof r.senderPublicKey < "u" ? nr(r.senderPublicKey, ir) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function ap(n) {
  const t = (n == null ? void 0 : n.type) || op;
  if (t === Xi) {
    if (typeof (n == null ? void 0 : n.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (n == null ? void 0 : n.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: t,
    senderPublicKey: n == null ? void 0 : n.senderPublicKey,
    receiverPublicKey: n == null ? void 0 : n.receiverPublicKey,
  };
}
function Pl(n) {
  return (
    n.type === Xi &&
    typeof n.senderPublicKey == "string" &&
    typeof n.receiverPublicKey == "string"
  );
}
var Sw = Object.defineProperty,
  Sl = Object.getOwnPropertySymbols,
  Ow = Object.prototype.hasOwnProperty,
  Aw = Object.prototype.propertyIsEnumerable,
  Ol = (n, t, r) =>
    t in n
      ? Sw(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Al = (n, t) => {
    for (var r in t || (t = {})) Ow.call(t, r) && Ol(n, r, t[r]);
    if (Sl) for (var r of Sl(t)) Aw.call(t, r) && Ol(n, r, t[r]);
    return n;
  };
const Rw = "ReactNative",
  Er = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  Tw = "js";
function nu() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Cn() {
  return !k1() && !!Hf() && navigator.product === Rw;
}
function Nn() {
  return !nu() && !!Hf();
}
function ys() {
  return Cn()
    ? Er.reactNative
    : nu()
    ? Er.node
    : Nn()
    ? Er.browser
    : Er.unknown;
}
function Cw() {
  var n;
  try {
    return Cn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (n = global.Application) == null
        ? void 0
        : n.applicationId
      : void 0;
  } catch {
    return;
  }
}
function Nw(n, t) {
  let r = jo.parse(n);
  return (r = Al(Al({}, r), t)), (n = jo.stringify(r)), n;
}
function $w() {
  return U1() || { name: "", description: "", url: "", icons: [""] };
}
function Dw() {
  if (
    ys() === Er.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: r, Version: s } = global.Platform;
    return [r, s].join("-");
  }
  const n = tw();
  if (n === null) return "unknown";
  const t = n.os ? n.os.replace(" ", "").toLowerCase() : "unknown";
  return n.type === "browser"
    ? [t, n.name, n.version].join("-")
    : [t, n.version].join("-");
}
function Fw() {
  var n;
  const t = ys();
  return t === Er.browser
    ? [t, ((n = H1()) == null ? void 0 : n.host) || "unknown"].join(":")
    : t;
}
function Lw(n, t, r) {
  const s = Dw(),
    o = Fw();
  return [[n, t].join("-"), [Tw, r].join("-"), s, o].join("/");
}
function Mw({
  protocol: n,
  version: t,
  relayUrl: r,
  sdkVersion: s,
  auth: o,
  projectId: u,
  useOnCloseEvent: f,
  bundleId: g,
}) {
  const m = r.split("?"),
    y = Lw(n, t, s),
    E = {
      auth: o,
      ua: y,
      projectId: u,
      useOnCloseEvent: f || void 0,
      origin: g || void 0,
    },
    x = Nw(m[1] || "", E);
  return m[0] + "?" + x;
}
function Qi(n, t) {
  return n.filter((r) => t.includes(r)).length === n.length;
}
function cp(n) {
  return Object.fromEntries(n.entries());
}
function up(n) {
  return new Map(Object.entries(n));
}
function Pn(n = ee.FIVE_MINUTES, t) {
  const r = ee.toMiliseconds(n || ee.FIVE_MINUTES);
  let s, o, u;
  return {
    resolve: (f) => {
      u && s && (clearTimeout(u), s(f));
    },
    reject: (f) => {
      u && o && (clearTimeout(u), o(f));
    },
    done: () =>
      new Promise((f, g) => {
        (u = setTimeout(() => {
          g(new Error(t));
        }, r)),
          (s = f),
          (o = g);
      }),
  };
}
function ls(n, t, r) {
  return new Promise(async (s, o) => {
    const u = setTimeout(() => o(new Error(r)), t);
    try {
      const f = await n;
      s(f);
    } catch (f) {
      o(f);
    }
    clearTimeout(u);
  });
}
function hp(n, t) {
  if (typeof t == "string" && t.startsWith(`${n}:`)) return t;
  if (n.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (n.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${n}`);
}
function jw(n) {
  return hp("topic", n);
}
function qw(n) {
  return hp("id", n);
}
function lp(n) {
  const [t, r] = n.split(":"),
    s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string") s.topic = r;
  else if (t === "id" && Number.isInteger(Number(r))) s.id = Number(r);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${r}`
    );
  return s;
}
function kr(n, t) {
  return ee.fromMiliseconds((t || Date.now()) + ee.toMiliseconds(n));
}
function Ti(n) {
  return Date.now() >= ee.toMiliseconds(n);
}
function Ct(n, t) {
  return `${n}${t ? `:${t}` : ""}`;
}
function Pc(n = [], t = []) {
  return [...new Set([...n, ...t])];
}
async function Uw({ id: n, topic: t, wcDeepLink: r }) {
  try {
    if (!r) return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let o = s == null ? void 0 : s.href;
    if (typeof o != "string") return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const u = `${o}/wc?requestId=${n}&sessionTopic=${t}`,
      f = ys();
    f === Er.browser
      ? u.startsWith("https://")
        ? window.open(u, "_blank", "noreferrer noopener")
        : window.open(u, "_self", "noreferrer noopener")
      : f === Er.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(u));
  } catch (s) {
    console.error(s);
  }
}
async function zw(n, t) {
  try {
    return (await n.getItem(t)) || (Nn() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const kw = "irn";
function Kc(n) {
  return (n == null ? void 0 : n.relay) || { protocol: kw };
}
function Do(n) {
  const t = ow[n];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${n}`);
  return t;
}
var Hw = Object.defineProperty,
  Rl = Object.getOwnPropertySymbols,
  Bw = Object.prototype.hasOwnProperty,
  Kw = Object.prototype.propertyIsEnumerable,
  Tl = (n, t, r) =>
    t in n
      ? Hw(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Vw = (n, t) => {
    for (var r in t || (t = {})) Bw.call(t, r) && Tl(n, r, t[r]);
    if (Rl) for (var r of Rl(t)) Kw.call(t, r) && Tl(n, r, t[r]);
    return n;
  };
function Ww(n, t = "-") {
  const r = {},
    s = "relay" + t;
  return (
    Object.keys(n).forEach((o) => {
      if (o.startsWith(s)) {
        const u = o.replace(s, ""),
          f = n[o];
        r[u] = f;
      }
    }),
    r
  );
}
function Cl(n) {
  (n = n.includes("wc://") ? n.replace("wc://", "") : n),
    (n = n.includes("wc:") ? n.replace("wc:", "") : n);
  const t = n.indexOf(":"),
    r = n.indexOf("?") !== -1 ? n.indexOf("?") : void 0,
    s = n.substring(0, t),
    o = n.substring(t + 1, r).split("@"),
    u = typeof r < "u" ? n.substring(r) : "",
    f = jo.parse(u);
  return {
    protocol: s,
    topic: Gw(o[0]),
    version: parseInt(o[1], 10),
    symKey: f.symKey,
    relay: Ww(f),
  };
}
function Gw(n) {
  return n.startsWith("//") ? n.substring(2) : n;
}
function Jw(n, t = "-") {
  const r = "relay",
    s = {};
  return (
    Object.keys(n).forEach((o) => {
      const u = r + t + o;
      n[o] && (s[u] = n[o]);
    }),
    s
  );
}
function Qw(n) {
  return (
    `${n.protocol}:${n.topic}@${n.version}?` +
    jo.stringify(Vw({ symKey: n.symKey }, Jw(n.relay)))
  );
}
function $n(n) {
  const t = [];
  return (
    n.forEach((r) => {
      const [s, o] = r.split(":");
      t.push(`${s}:${o}`);
    }),
    t
  );
}
function Yw(n) {
  const t = [];
  return (
    Object.values(n).forEach((r) => {
      t.push(...$n(r.accounts));
    }),
    t
  );
}
function Xw(n, t) {
  const r = [];
  return (
    Object.values(n).forEach((s) => {
      $n(s.accounts).includes(t) && r.push(...s.methods);
    }),
    r
  );
}
function Zw(n, t) {
  const r = [];
  return (
    Object.values(n).forEach((s) => {
      $n(s.accounts).includes(t) && r.push(...s.events);
    }),
    r
  );
}
function eb(n, t) {
  const r = Fo(n, t);
  if (r) throw new Error(r.message);
  const s = {};
  for (const [o, u] of Object.entries(n))
    s[o] = {
      methods: u.methods,
      events: u.events,
      chains: u.accounts.map((f) => `${f.split(":")[0]}:${f.split(":")[1]}`),
    };
  return s;
}
function su(n) {
  return n.includes(":");
}
function as(n) {
  return su(n) ? n.split(":")[0] : n;
}
const tb = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  rb = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function K(n, t) {
  const { message: r, code: s } = rb[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function bt(n, t) {
  const { message: r, code: s } = tb[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Zr(n, t) {
  return Array.isArray(n) ? (typeof t < "u" && n.length ? n.every(t) : !0) : !1;
}
function Rn(n) {
  return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length;
}
function rr(n) {
  return typeof n > "u";
}
function qt(n, t) {
  return t && rr(n) ? !0 : typeof n == "string" && !!n.trim().length;
}
function ou(n, t) {
  return t && rr(n) ? !0 : typeof n == "number" && !isNaN(n);
}
function ib(n, t) {
  const { requiredNamespaces: r } = t,
    s = Object.keys(n.namespaces),
    o = Object.keys(r);
  let u = !0;
  return Qi(o, s)
    ? (s.forEach((f) => {
        const { accounts: g, methods: m, events: y } = n.namespaces[f],
          E = $n(g),
          x = r[f];
        (!Qi(np(f, x), E) || !Qi(x.methods, m) || !Qi(x.events, y)) && (u = !1);
      }),
      u)
    : !1;
}
function Uo(n) {
  return qt(n, !1) && n.includes(":") ? n.split(":").length === 2 : !1;
}
function nb(n) {
  if (qt(n, !1) && n.includes(":")) {
    const t = n.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Uo(r);
    }
  }
  return !1;
}
function sb(n) {
  if (qt(n, !1))
    try {
      return typeof new URL(n) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function ob(n) {
  var t;
  return (t = n == null ? void 0 : n.proposer) == null ? void 0 : t.publicKey;
}
function ab(n) {
  return n == null ? void 0 : n.topic;
}
function cb(n, t) {
  let r = null;
  return (
    qt(n == null ? void 0 : n.publicKey, !1) ||
      (r = K(
        "MISSING_OR_INVALID",
        `${t} controller public key should be a string`
      )),
    r
  );
}
function Nl(n) {
  let t = !0;
  return Zr(n) ? n.length && (t = n.every((r) => qt(r, !1))) : (t = !1), t;
}
function ub(n, t, r) {
  let s = null;
  return (
    Zr(t) && t.length
      ? t.forEach((o) => {
          s ||
            Uo(o) ||
            (s = bt(
              "UNSUPPORTED_CHAINS",
              `${r}, chain ${o} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Uo(n) ||
        (s = bt(
          "UNSUPPORTED_CHAINS",
          `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    s
  );
}
function hb(n, t, r) {
  let s = null;
  return (
    Object.entries(n).forEach(([o, u]) => {
      if (s) return;
      const f = ub(o, np(o, u), `${t} ${r}`);
      f && (s = f);
    }),
    s
  );
}
function lb(n, t) {
  let r = null;
  return (
    Zr(n)
      ? n.forEach((s) => {
          r ||
            nb(s) ||
            (r = bt(
              "UNSUPPORTED_ACCOUNTS",
              `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (r = bt(
          "UNSUPPORTED_ACCOUNTS",
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    r
  );
}
function fb(n, t) {
  let r = null;
  return (
    Object.values(n).forEach((s) => {
      if (r) return;
      const o = lb(s == null ? void 0 : s.accounts, `${t} namespace`);
      o && (r = o);
    }),
    r
  );
}
function pb(n, t) {
  let r = null;
  return (
    Nl(n == null ? void 0 : n.methods)
      ? Nl(n == null ? void 0 : n.events) ||
        (r = bt(
          "UNSUPPORTED_EVENTS",
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (r = bt(
          "UNSUPPORTED_METHODS",
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    r
  );
}
function fp(n, t) {
  let r = null;
  return (
    Object.values(n).forEach((s) => {
      if (r) return;
      const o = pb(s, `${t}, namespace`);
      o && (r = o);
    }),
    r
  );
}
function db(n, t, r) {
  let s = null;
  if (n && Rn(n)) {
    const o = fp(n, t);
    o && (s = o);
    const u = hb(n, t, r);
    u && (s = u);
  } else
    s = K("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return s;
}
function Fo(n, t) {
  let r = null;
  if (n && Rn(n)) {
    const s = fp(n, t);
    s && (r = s);
    const o = fb(n, t);
    o && (r = o);
  } else
    r = K(
      "MISSING_OR_INVALID",
      `${t}, namespaces should be an object with data`
    );
  return r;
}
function pp(n) {
  return qt(n.protocol, !0);
}
function gb(n, t) {
  let r = !1;
  return (
    t && !n
      ? (r = !0)
      : n &&
        Zr(n) &&
        n.length &&
        n.forEach((s) => {
          r = pp(s);
        }),
    r
  );
}
function yb(n) {
  return typeof n == "number";
}
function pr(n) {
  return typeof n < "u" && typeof n !== null;
}
function vb(n) {
  return !(
    !n ||
    typeof n != "object" ||
    !n.code ||
    !ou(n.code, !1) ||
    !n.message ||
    !qt(n.message, !1)
  );
}
function mb(n) {
  return !(rr(n) || !qt(n.method, !1));
}
function wb(n) {
  return !(
    rr(n) ||
    (rr(n.result) && rr(n.error)) ||
    !ou(n.id, !1) ||
    !qt(n.jsonrpc, !1)
  );
}
function bb(n) {
  return !(rr(n) || !qt(n.name, !1));
}
function $l(n, t) {
  return !(!Uo(t) || !Yw(n).includes(t));
}
function _b(n, t, r) {
  return qt(r, !1) ? Xw(n, t).includes(r) : !1;
}
function Eb(n, t, r) {
  return qt(r, !1) ? Zw(n, t).includes(r) : !1;
}
function Dl(n, t, r) {
  let s = null;
  const o = Ib(n),
    u = xb(t),
    f = Object.keys(o),
    g = Object.keys(u),
    m = Fl(Object.keys(n)),
    y = Fl(Object.keys(t)),
    E = m.filter((x) => !y.includes(x));
  return (
    E.length &&
      (s = K(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${E.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Qi(f, g) ||
      (s = K(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${g.toString()}`
      )),
    Object.keys(t).forEach((x) => {
      if (!x.includes(":") || s) return;
      const $ = $n(t[x].accounts);
      $.includes(x) ||
        (s = K(
          "NON_CONFORMING_NAMESPACES",
          `${r} namespaces accounts don't satisfy namespace accounts for ${x}
        Required: ${x}
        Approved: ${$.toString()}`
        ));
    }),
    f.forEach((x) => {
      s ||
        (Qi(o[x].methods, u[x].methods)
          ? Qi(o[x].events, u[x].events) ||
            (s = K(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces events don't satisfy namespace events for ${x}`
            ))
          : (s = K(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces methods don't satisfy namespace methods for ${x}`
            )));
    }),
    s
  );
}
function Ib(n) {
  const t = {};
  return (
    Object.keys(n).forEach((r) => {
      var s;
      r.includes(":")
        ? (t[r] = n[r])
        : (s = n[r].chains) == null ||
          s.forEach((o) => {
            t[o] = { methods: n[r].methods, events: n[r].events };
          });
    }),
    t
  );
}
function Fl(n) {
  return [...new Set(n.map((t) => (t.includes(":") ? t.split(":")[0] : t)))];
}
function xb(n) {
  const t = {};
  return (
    Object.keys(n).forEach((r) => {
      if (r.includes(":")) t[r] = n[r];
      else {
        const s = $n(n[r].accounts);
        s == null ||
          s.forEach((o) => {
            t[o] = {
              accounts: n[r].accounts.filter((u) => u.includes(`${o}:`)),
              methods: n[r].methods,
              events: n[r].events,
            };
          });
      }
    }),
    t
  );
}
function Pb(n, t) {
  return ou(n, !1) && n <= t.max && n >= t.min;
}
function Ll() {
  const n = ys();
  return new Promise((t) => {
    switch (n) {
      case Er.browser:
        t(Sb());
        break;
      case Er.reactNative:
        t(Ob());
        break;
      case Er.node:
        t(Ab());
        break;
      default:
        t(!0);
    }
  });
}
function Sb() {
  return Nn() && (navigator == null ? void 0 : navigator.onLine);
}
async function Ob() {
  if (Cn() && typeof global < "u" && global != null && global.NetInfo) {
    const n = await (global == null ? void 0 : global.NetInfo.fetch());
    return n == null ? void 0 : n.isConnected;
  }
  return !0;
}
function Ab() {
  return !0;
}
function Rb(n) {
  switch (ys()) {
    case Er.browser:
      Tb(n);
      break;
    case Er.reactNative:
      Cb(n);
      break;
  }
}
function Tb(n) {
  !Cn() &&
    Nn() &&
    (window.addEventListener("online", () => n(!0)),
    window.addEventListener("offline", () => n(!1)));
}
function Cb(n) {
  Cn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) =>
        n(t == null ? void 0 : t.isConnected)
      ));
}
const Sc = {};
let So = class {
  static get(t) {
    return Sc[t];
  }
  static set(t, r) {
    Sc[t] = r;
  }
  static delete(t) {
    delete Sc[t];
  }
};
const Nb =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  $b =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Db = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Fb(n, t) {
  if (
    n === "__proto__" ||
    (n === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    Lb(n);
    return;
  }
  return t;
}
function Lb(n) {
  console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`);
}
function Oo(n, t = {}) {
  if (typeof n != "string") return n;
  const r = n.trim();
  if (n[0] === '"' && n.endsWith('"') && !n.includes("\\"))
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!Db.test(n)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return n;
  }
  try {
    if (Nb.test(n) || $b.test(n)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(n, Fb);
    }
    return JSON.parse(n);
  } catch (s) {
    if (t.strict) throw s;
    return n;
  }
}
function Mb(n) {
  return !n || typeof n.then != "function" ? Promise.resolve(n) : n;
}
function jt(n, ...t) {
  try {
    return Mb(n(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function jb(n) {
  const t = typeof n;
  return n === null || (t !== "object" && t !== "function");
}
function qb(n) {
  const t = Object.getPrototypeOf(n);
  return !t || t.isPrototypeOf(Object);
}
function Lo(n) {
  if (jb(n)) return String(n);
  if (qb(n) || Array.isArray(n)) return JSON.stringify(n);
  if (typeof n.toJSON == "function") return Lo(n.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function dp() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Vc = "base64:";
function Ub(n) {
  if (typeof n == "string") return n;
  dp();
  const t = Buffer.from(n).toString("base64");
  return Vc + t;
}
function zb(n) {
  return typeof n != "string" || !n.startsWith(Vc)
    ? n
    : (dp(), Buffer.from(n.slice(Vc.length), "base64"));
}
function fr(n) {
  return n
    ? n
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function kb(...n) {
  return fr(n.join(":"));
}
function Ao(n) {
  return (n = fr(n)), n ? n + ":" : "";
}
const Hb = "memory",
  Bb = () => {
    const n = new Map();
    return {
      name: Hb,
      options: {},
      hasItem(t) {
        return n.has(t);
      },
      getItem(t) {
        return n.get(t) ?? null;
      },
      getItemRaw(t) {
        return n.get(t) ?? null;
      },
      setItem(t, r) {
        n.set(t, r);
      },
      setItemRaw(t, r) {
        n.set(t, r);
      },
      removeItem(t) {
        n.delete(t);
      },
      getKeys() {
        return Array.from(n.keys());
      },
      clear() {
        n.clear();
      },
      dispose() {
        n.clear();
      },
    };
  };
function Kb(n = {}) {
  const t = {
      mounts: { "": n.driver || Bb() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (y) => {
      for (const E of t.mountpoints)
        if (y.startsWith(E))
          return {
            base: E,
            relativeKey: y.slice(E.length),
            driver: t.mounts[E],
          };
      return { base: "", relativeKey: y, driver: t.mounts[""] };
    },
    s = (y, E) =>
      t.mountpoints
        .filter((x) => x.startsWith(y) || (E && y.startsWith(x)))
        .map((x) => ({
          relativeBase: y.length > x.length ? y.slice(x.length) : void 0,
          mountpoint: x,
          driver: t.mounts[x],
        })),
    o = (y, E) => {
      if (t.watching) {
        E = fr(E);
        for (const x of t.watchListeners) x(y, E);
      }
    },
    u = async () => {
      if (!t.watching) {
        t.watching = !0;
        for (const y in t.mounts) t.unwatch[y] = await Ml(t.mounts[y], o, y);
      }
    },
    f = async () => {
      if (t.watching) {
        for (const y in t.unwatch) await t.unwatch[y]();
        (t.unwatch = {}), (t.watching = !1);
      }
    },
    g = (y, E, x) => {
      const $ = new Map(),
        L = (T) => {
          let Y = $.get(T.base);
          return (
            Y ||
              ((Y = { driver: T.driver, base: T.base, items: [] }),
              $.set(T.base, Y)),
            Y
          );
        };
      for (const T of y) {
        const Y = typeof T == "string",
          re = fr(Y ? T : T.key),
          oe = Y ? void 0 : T.value,
          ce = Y || !T.options ? E : { ...E, ...T.options },
          ae = r(re);
        L(ae).items.push({
          key: re,
          value: oe,
          relativeKey: ae.relativeKey,
          options: ce,
        });
      }
      return Promise.all([...$.values()].map((T) => x(T))).then((T) =>
        T.flat()
      );
    },
    m = {
      hasItem(y, E = {}) {
        y = fr(y);
        const { relativeKey: x, driver: $ } = r(y);
        return jt($.hasItem, x, E);
      },
      getItem(y, E = {}) {
        y = fr(y);
        const { relativeKey: x, driver: $ } = r(y);
        return jt($.getItem, x, E).then((L) => Oo(L));
      },
      getItems(y, E) {
        return g(y, E, (x) =>
          x.driver.getItems
            ? jt(
                x.driver.getItems,
                x.items.map(($) => ({
                  key: $.relativeKey,
                  options: $.options,
                })),
                E
              ).then(($) =>
                $.map((L) => ({ key: kb(x.base, L.key), value: Oo(L.value) }))
              )
            : Promise.all(
                x.items.map(($) =>
                  jt(x.driver.getItem, $.relativeKey, $.options).then((L) => ({
                    key: $.key,
                    value: Oo(L),
                  }))
                )
              )
        );
      },
      getItemRaw(y, E = {}) {
        y = fr(y);
        const { relativeKey: x, driver: $ } = r(y);
        return $.getItemRaw
          ? jt($.getItemRaw, x, E)
          : jt($.getItem, x, E).then((L) => zb(L));
      },
      async setItem(y, E, x = {}) {
        if (E === void 0) return m.removeItem(y);
        y = fr(y);
        const { relativeKey: $, driver: L } = r(y);
        L.setItem &&
          (await jt(L.setItem, $, Lo(E), x), L.watch || o("update", y));
      },
      async setItems(y, E) {
        await g(y, E, async (x) => {
          if (x.driver.setItems)
            return jt(
              x.driver.setItems,
              x.items.map(($) => ({
                key: $.relativeKey,
                value: Lo($.value),
                options: $.options,
              })),
              E
            );
          x.driver.setItem &&
            (await Promise.all(
              x.items.map(($) =>
                jt(x.driver.setItem, $.relativeKey, Lo($.value), $.options)
              )
            ));
        });
      },
      async setItemRaw(y, E, x = {}) {
        if (E === void 0) return m.removeItem(y, x);
        y = fr(y);
        const { relativeKey: $, driver: L } = r(y);
        if (L.setItemRaw) await jt(L.setItemRaw, $, E, x);
        else if (L.setItem) await jt(L.setItem, $, Ub(E), x);
        else return;
        L.watch || o("update", y);
      },
      async removeItem(y, E = {}) {
        typeof E == "boolean" && (E = { removeMeta: E }), (y = fr(y));
        const { relativeKey: x, driver: $ } = r(y);
        $.removeItem &&
          (await jt($.removeItem, x, E),
          (E.removeMeta || E.removeMata) &&
            (await jt($.removeItem, x + "$", E)),
          $.watch || o("remove", y));
      },
      async getMeta(y, E = {}) {
        typeof E == "boolean" && (E = { nativeOnly: E }), (y = fr(y));
        const { relativeKey: x, driver: $ } = r(y),
          L = Object.create(null);
        if (
          ($.getMeta && Object.assign(L, await jt($.getMeta, x, E)),
          !E.nativeOnly)
        ) {
          const T = await jt($.getItem, x + "$", E).then((Y) => Oo(Y));
          T &&
            typeof T == "object" &&
            (typeof T.atime == "string" && (T.atime = new Date(T.atime)),
            typeof T.mtime == "string" && (T.mtime = new Date(T.mtime)),
            Object.assign(L, T));
        }
        return L;
      },
      setMeta(y, E, x = {}) {
        return this.setItem(y + "$", E, x);
      },
      removeMeta(y, E = {}) {
        return this.removeItem(y + "$", E);
      },
      async getKeys(y, E = {}) {
        y = Ao(y);
        const x = s(y, !0);
        let $ = [];
        const L = [];
        for (const T of x) {
          const re = (await jt(T.driver.getKeys, T.relativeBase, E))
            .map((oe) => T.mountpoint + fr(oe))
            .filter((oe) => !$.some((ce) => oe.startsWith(ce)));
          L.push(...re),
            ($ = [
              T.mountpoint,
              ...$.filter((oe) => !oe.startsWith(T.mountpoint)),
            ]);
        }
        return y
          ? L.filter((T) => T.startsWith(y) && !T.endsWith("$"))
          : L.filter((T) => !T.endsWith("$"));
      },
      async clear(y, E = {}) {
        (y = Ao(y)),
          await Promise.all(
            s(y, !1).map(async (x) => {
              if (x.driver.clear) return jt(x.driver.clear, x.relativeBase, E);
              if (x.driver.removeItem) {
                const $ = await x.driver.getKeys(x.relativeBase || "", E);
                return Promise.all($.map((L) => x.driver.removeItem(L, E)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(t.mounts).map((y) => jl(y)));
      },
      async watch(y) {
        return (
          await u(),
          t.watchListeners.push(y),
          async () => {
            (t.watchListeners = t.watchListeners.filter((E) => E !== y)),
              t.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (t.watchListeners = []), await f();
      },
      mount(y, E) {
        if (((y = Ao(y)), y && t.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (t.mountpoints.push(y),
            t.mountpoints.sort((x, $) => $.length - x.length)),
          (t.mounts[y] = E),
          t.watching &&
            Promise.resolve(Ml(E, o, y))
              .then((x) => {
                t.unwatch[y] = x;
              })
              .catch(console.error),
          m
        );
      },
      async unmount(y, E = !0) {
        (y = Ao(y)),
          !(!y || !t.mounts[y]) &&
            (t.watching &&
              y in t.unwatch &&
              (t.unwatch[y](), delete t.unwatch[y]),
            E && (await jl(t.mounts[y])),
            (t.mountpoints = t.mountpoints.filter((x) => x !== y)),
            delete t.mounts[y]);
      },
      getMount(y = "") {
        y = fr(y) + ":";
        const E = r(y);
        return { driver: E.driver, base: E.base };
      },
      getMounts(y = "", E = {}) {
        return (
          (y = fr(y)),
          s(y, E.parents).map(($) => ({ driver: $.driver, base: $.mountpoint }))
        );
      },
    };
  return m;
}
function Ml(n, t, r) {
  return n.watch ? n.watch((s, o) => t(s, r + o)) : () => {};
}
async function jl(n) {
  typeof n.dispose == "function" && (await jt(n.dispose));
}
function Zi(n) {
  return new Promise((t, r) => {
    (n.oncomplete = n.onsuccess = () => t(n.result)),
      (n.onabort = n.onerror = () => r(n.error));
  });
}
function gp(n, t) {
  const r = indexedDB.open(n);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const s = Zi(r);
  return (o, u) => s.then((f) => u(f.transaction(t, o).objectStore(t)));
}
let Oc;
function vs() {
  return Oc || (Oc = gp("keyval-store", "keyval")), Oc;
}
function ql(n, t = vs()) {
  return t("readonly", (r) => Zi(r.get(n)));
}
function Vb(n, t, r = vs()) {
  return r("readwrite", (s) => (s.put(t, n), Zi(s.transaction)));
}
function Wb(n, t = vs()) {
  return t("readwrite", (r) => (r.delete(n), Zi(r.transaction)));
}
function Gb(n = vs()) {
  return n("readwrite", (t) => (t.clear(), Zi(t.transaction)));
}
function Jb(n, t) {
  return (
    (n.openCursor().onsuccess = function () {
      this.result && (t(this.result), this.result.continue());
    }),
    Zi(n.transaction)
  );
}
function Qb(n = vs()) {
  return n("readonly", (t) => {
    if (t.getAllKeys) return Zi(t.getAllKeys());
    const r = [];
    return Jb(t, (s) => r.push(s.key)).then(() => r);
  });
}
const Yb = (n) =>
    JSON.stringify(n, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  Xb = (n) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = n.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function ms(n) {
  if (typeof n != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof n}`);
  try {
    return Xb(n);
  } catch {
    return n;
  }
}
function Yi(n) {
  return typeof n == "string" ? n : Yb(n) || "";
}
const Zb = "idb-keyval";
var e_ = (n = {}) => {
  const t = n.base && n.base.length > 0 ? `${n.base}:` : "",
    r = (o) => t + o;
  let s;
  return (
    n.dbName && n.storeName && (s = gp(n.dbName, n.storeName)),
    {
      name: Zb,
      options: n,
      async hasItem(o) {
        return !(typeof (await ql(r(o), s)) > "u");
      },
      async getItem(o) {
        return (await ql(r(o), s)) ?? null;
      },
      setItem(o, u) {
        return Vb(r(o), u, s);
      },
      removeItem(o) {
        return Wb(r(o), s);
      },
      getKeys() {
        return Qb(s);
      },
      clear() {
        return Gb(s);
      },
    }
  );
};
const t_ = "WALLET_CONNECT_V2_INDEXED_DB",
  r_ = "keyvaluestorage";
let i_ = class {
  constructor() {
    this.indexedDb = Kb({ driver: e_({ dbName: t_, storeName: r_ }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (t) => [t.key, t.value]
    );
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null) return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Yi(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var Ac =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Mo = { exports: {} };
(function () {
  let n;
  function t() {}
  (n = t),
    (n.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (n.prototype.setItem = function (r, s) {
      this[r] = String(s);
    }),
    (n.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (n.prototype.clear = function () {
      const r = this;
      Object.keys(r).forEach(function (s) {
        (r[s] = void 0), delete r[s];
      });
    }),
    (n.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    n.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof Ac < "u" && Ac.localStorage
      ? (Mo.exports = Ac.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Mo.exports = window.localStorage)
      : (Mo.exports = new t());
})();
function n_(n) {
  var t;
  return [n[0], ms((t = n[1]) != null ? t : "")];
}
class s_ {
  constructor() {
    this.localStorage = Mo.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(n_);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null) return ms(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Yi(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const o_ = "wc_storage_version",
  Ul = 1,
  a_ = async (n, t, r) => {
    const s = o_,
      o = await t.getItem(s);
    if (o && o >= Ul) {
      r(t);
      return;
    }
    const u = await n.getKeys();
    if (!u.length) {
      r(t);
      return;
    }
    const f = [];
    for (; u.length; ) {
      const g = u.shift();
      if (!g) continue;
      const m = g.toLowerCase();
      if (
        m.includes("wc@") ||
        m.includes("walletconnect") ||
        m.includes("wc_") ||
        m.includes("wallet_connect")
      ) {
        const y = await n.getItem(g);
        await t.setItem(g, y), f.push(g);
      }
    }
    await t.setItem(s, Ul), r(t), c_(n, f);
  },
  c_ = async (n, t) => {
    t.length &&
      t.forEach(async (r) => {
        await n.removeItem(r);
      });
  };
let u_ = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (r) => {
        (this.storage = r), (this.initialized = !0);
      });
    const t = new s_();
    this.storage = t;
    try {
      const r = new i_();
      a_(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.initialized && (clearInterval(r), t());
        }, 20);
      }));
  }
};
var Dn = {},
  es = {},
  Rc = {},
  ts = {};
class en {}
const h_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: en },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  l_ = B1(h_);
var zl;
function f_() {
  if (zl) return ts;
  (zl = 1),
    Object.defineProperty(ts, "__esModule", { value: !0 }),
    (ts.IHeartBeat = void 0);
  const n = l_;
  class t extends n.IEvents {
    constructor(s) {
      super();
    }
  }
  return (ts.IHeartBeat = t), ts;
}
var kl;
function yp() {
  return (
    kl ||
      ((kl = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          ds.__exportStar(f_(), n);
      })(Rc)),
    Rc
  );
}
var Tc = {},
  Ji = {},
  Hl;
function p_() {
  if (Hl) return Ji;
  (Hl = 1),
    Object.defineProperty(Ji, "__esModule", { value: !0 }),
    (Ji.HEARTBEAT_EVENTS = Ji.HEARTBEAT_INTERVAL = void 0);
  const n = ee;
  return (
    (Ji.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
    (Ji.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    Ji
  );
}
var Bl;
function vp() {
  return (
    Bl ||
      ((Bl = 1),
      (function (n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          ds.__exportStar(p_(), n);
      })(Tc)),
    Tc
  );
}
var Kl;
function d_() {
  if (Kl) return es;
  (Kl = 1),
    Object.defineProperty(es, "__esModule", { value: !0 }),
    (es.HeartBeat = void 0);
  const n = ds,
    t = Ut,
    r = ee,
    s = yp(),
    o = vp();
  class u extends s.IHeartBeat {
    constructor(g) {
      super(g),
        (this.events = new t.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval =
          (g == null ? void 0 : g.interval) || o.HEARTBEAT_INTERVAL);
    }
    static init(g) {
      return n.__awaiter(this, void 0, void 0, function* () {
        const m = new u(g);
        return yield m.init(), m;
      });
    }
    init() {
      return n.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(g, m) {
      this.events.on(g, m);
    }
    once(g, m) {
      this.events.once(g, m);
    }
    off(g, m) {
      this.events.off(g, m);
    }
    removeListener(g, m) {
      this.events.removeListener(g, m);
    }
    initialize() {
      return n.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          r.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (es.HeartBeat = u), es;
}
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  const t = ds;
  t.__exportStar(d_(), n), t.__exportStar(yp(), n), t.__exportStar(vp(), n);
})(Dn);
function g_(n) {
  try {
    return JSON.stringify(n);
  } catch {
    return '"[Circular]"';
  }
}
var y_ = v_;
function v_(n, t, r) {
  var s = (r && r.stringify) || g_,
    o = 1;
  if (typeof n == "object" && n !== null) {
    var u = t.length + o;
    if (u === 1) return n;
    var f = new Array(u);
    f[0] = s(n);
    for (var g = 1; g < u; g++) f[g] = s(t[g]);
    return f.join(" ");
  }
  if (typeof n != "string") return n;
  var m = t.length;
  if (m === 0) return n;
  for (
    var y = "", E = 1 - o, x = -1, $ = (n && n.length) || 0, L = 0;
    L < $;

  ) {
    if (n.charCodeAt(L) === 37 && L + 1 < $) {
      switch (((x = x > -1 ? x : 0), n.charCodeAt(L + 1))) {
        case 100:
        case 102:
          if (E >= m || t[E] == null) break;
          x < L && (y += n.slice(x, L)), (y += Number(t[E])), (x = L + 2), L++;
          break;
        case 105:
          if (E >= m || t[E] == null) break;
          x < L && (y += n.slice(x, L)),
            (y += Math.floor(Number(t[E]))),
            (x = L + 2),
            L++;
          break;
        case 79:
        case 111:
        case 106:
          if (E >= m || t[E] === void 0) break;
          x < L && (y += n.slice(x, L));
          var T = typeof t[E];
          if (T === "string") {
            (y += "'" + t[E] + "'"), (x = L + 2), L++;
            break;
          }
          if (T === "function") {
            (y += t[E].name || "<anonymous>"), (x = L + 2), L++;
            break;
          }
          (y += s(t[E])), (x = L + 2), L++;
          break;
        case 115:
          if (E >= m) break;
          x < L && (y += n.slice(x, L)), (y += String(t[E])), (x = L + 2), L++;
          break;
        case 37:
          x < L && (y += n.slice(x, L)), (y += "%"), (x = L + 2), L++, E--;
          break;
      }
      ++E;
    }
    ++L;
  }
  return x === -1 ? n : (x < $ && (y += n.slice(x)), y);
}
const Vl = y_;
var Wo = Xr;
const fs = O_().console || {},
  m_ = {
    mapHttpRequest: Ro,
    mapHttpResponse: Ro,
    wrapRequestSerializer: Cc,
    wrapResponseSerializer: Cc,
    wrapErrorSerializer: Cc,
    req: Ro,
    res: Ro,
    err: I_,
  };
function w_(n, t) {
  return Array.isArray(n)
    ? n.filter(function (s) {
        return s !== "!stdSerializers.err";
      })
    : n === !0
    ? Object.keys(t)
    : !1;
}
function Xr(n) {
  (n = n || {}), (n.browser = n.browser || {});
  const t = n.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const r = n.browser.write || fs;
  n.browser.write && (n.browser.asObject = !0);
  const s = n.serializers || {},
    o = w_(n.browser.serialize, s);
  let u = n.browser.serialize;
  Array.isArray(n.browser.serialize) &&
    n.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (u = !1);
  const f = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" &&
    (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
    n.enabled === !1 && (n.level = "silent");
  const g = n.level || "info",
    m = Object.create(r);
  m.log || (m.log = ps),
    Object.defineProperty(m, "levelVal", { get: E }),
    Object.defineProperty(m, "level", { get: x, set: $ });
  const y = {
    transmit: t,
    serialize: o,
    asObject: n.browser.asObject,
    levels: f,
    timestamp: x_(n),
  };
  (m.levels = Xr.levels),
    (m.level = g),
    (m.setMaxListeners =
      m.getMaxListeners =
      m.emit =
      m.addListener =
      m.on =
      m.prependListener =
      m.once =
      m.prependOnceListener =
      m.removeListener =
      m.removeAllListeners =
      m.listeners =
      m.listenerCount =
      m.eventNames =
      m.write =
      m.flush =
        ps),
    (m.serializers = s),
    (m._serialize = o),
    (m._stdErrSerialize = u),
    (m.child = L),
    t && (m._logEvent = Wc());
  function E() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function x() {
    return this._level;
  }
  function $(T) {
    if (T !== "silent" && !this.levels.values[T])
      throw Error("unknown level " + T);
    (this._level = T),
      In(y, m, "error", "log"),
      In(y, m, "fatal", "error"),
      In(y, m, "warn", "error"),
      In(y, m, "info", "log"),
      In(y, m, "debug", "log"),
      In(y, m, "trace", "log");
  }
  function L(T, Y) {
    if (!T) throw new Error("missing bindings for child Pino");
    (Y = Y || {}), o && T.serializers && (Y.serializers = T.serializers);
    const re = Y.serializers;
    if (o && re) {
      var oe = Object.assign({}, s, re),
        ce = n.browser.serialize === !0 ? Object.keys(oe) : o;
      delete T.serializers, Go([T], ce, oe, this._stdErrSerialize);
    }
    function ae(te) {
      (this._childLevel = (te._childLevel | 0) + 1),
        (this.error = xn(te, T, "error")),
        (this.fatal = xn(te, T, "fatal")),
        (this.warn = xn(te, T, "warn")),
        (this.info = xn(te, T, "info")),
        (this.debug = xn(te, T, "debug")),
        (this.trace = xn(te, T, "trace")),
        oe && ((this.serializers = oe), (this._serialize = ce)),
        t && (this._logEvent = Wc([].concat(te._logEvent.bindings, T)));
    }
    return (ae.prototype = this), new ae(this);
  }
  return m;
}
Xr.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
Xr.stdSerializers = m_;
Xr.stdTimeFunctions = Object.assign(
  {},
  { nullTime: mp, epochTime: wp, unixTime: P_, isoTime: S_ }
);
function In(n, t, r, s) {
  const o = Object.getPrototypeOf(t);
  (t[r] =
    t.levelVal > t.levels.values[r] ? ps : o[r] ? o[r] : fs[r] || fs[s] || ps),
    b_(n, t, r);
}
function b_(n, t, r) {
  (!n.transmit && t[r] === ps) ||
    (t[r] = (function (s) {
      return function () {
        const u = n.timestamp(),
          f = new Array(arguments.length),
          g =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === fs
              ? fs
              : this;
        for (var m = 0; m < f.length; m++) f[m] = arguments[m];
        if (
          (n.serialize &&
            !n.asObject &&
            Go(f, this._serialize, this.serializers, this._stdErrSerialize),
          n.asObject ? s.call(g, __(this, r, f, u)) : s.apply(g, f),
          n.transmit)
        ) {
          const y = n.transmit.level || t.level,
            E = Xr.levels.values[y],
            x = Xr.levels.values[r];
          if (x < E) return;
          E_(
            this,
            {
              ts: u,
              methodLevel: r,
              methodValue: x,
              transmitLevel: y,
              transmitValue: Xr.levels.values[n.transmit.level || t.level],
              send: n.transmit.send,
              val: t.levelVal,
            },
            f
          );
        }
      };
    })(t[r]));
}
function __(n, t, r, s) {
  n._serialize && Go(r, n._serialize, n.serializers, n._stdErrSerialize);
  const o = r.slice();
  let u = o[0];
  const f = {};
  s && (f.time = s), (f.level = Xr.levels.values[t]);
  let g = (n._childLevel | 0) + 1;
  if ((g < 1 && (g = 1), u !== null && typeof u == "object")) {
    for (; g-- && typeof o[0] == "object"; ) Object.assign(f, o.shift());
    u = o.length ? Vl(o.shift(), o) : void 0;
  } else typeof u == "string" && (u = Vl(o.shift(), o));
  return u !== void 0 && (f.msg = u), f;
}
function Go(n, t, r, s) {
  for (const o in n)
    if (s && n[o] instanceof Error) n[o] = Xr.stdSerializers.err(n[o]);
    else if (typeof n[o] == "object" && !Array.isArray(n[o]))
      for (const u in n[o])
        t && t.indexOf(u) > -1 && u in r && (n[o][u] = r[u](n[o][u]));
}
function xn(n, t, r) {
  return function () {
    const s = new Array(1 + arguments.length);
    s[0] = t;
    for (var o = 1; o < s.length; o++) s[o] = arguments[o - 1];
    return n[r].apply(this, s);
  };
}
function E_(n, t, r) {
  const s = t.send,
    o = t.ts,
    u = t.methodLevel,
    f = t.methodValue,
    g = t.val,
    m = n._logEvent.bindings;
  Go(
    r,
    n._serialize || Object.keys(n.serializers),
    n.serializers,
    n._stdErrSerialize === void 0 ? !0 : n._stdErrSerialize
  ),
    (n._logEvent.ts = o),
    (n._logEvent.messages = r.filter(function (y) {
      return m.indexOf(y) === -1;
    })),
    (n._logEvent.level.label = u),
    (n._logEvent.level.value = f),
    s(u, n._logEvent, g),
    (n._logEvent = Wc(m));
}
function Wc(n) {
  return {
    ts: 0,
    messages: [],
    bindings: n || [],
    level: { label: "", value: 0 },
  };
}
function I_(n) {
  const t = { type: n.constructor.name, msg: n.message, stack: n.stack };
  for (const r in n) t[r] === void 0 && (t[r] = n[r]);
  return t;
}
function x_(n) {
  return typeof n.timestamp == "function"
    ? n.timestamp
    : n.timestamp === !1
    ? mp
    : wp;
}
function Ro() {
  return {};
}
function Cc(n) {
  return n;
}
function ps() {}
function mp() {
  return !1;
}
function wp() {
  return Date.now();
}
function P_() {
  return Math.round(Date.now() / 1e3);
}
function S_() {
  return new Date(Date.now()).toISOString();
}
function O_() {
  function n(t) {
    return typeof t < "u" && t;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return n(self) || n(window) || n(this) || {};
  }
}
const A_ = { level: "info" },
  ws = "custom_context";
var R_ = Object.defineProperty,
  T_ = Object.defineProperties,
  C_ = Object.getOwnPropertyDescriptors,
  Wl = Object.getOwnPropertySymbols,
  N_ = Object.prototype.hasOwnProperty,
  $_ = Object.prototype.propertyIsEnumerable,
  Gl = (n, t, r) =>
    t in n
      ? R_(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  D_ = (n, t) => {
    for (var r in t || (t = {})) N_.call(t, r) && Gl(n, r, t[r]);
    if (Wl) for (var r of Wl(t)) $_.call(t, r) && Gl(n, r, t[r]);
    return n;
  },
  F_ = (n, t) => T_(n, C_(t));
function Jo(n) {
  return F_(D_({}, n), { level: (n == null ? void 0 : n.level) || A_.level });
}
function L_(n, t = ws) {
  return n[t] || "";
}
function M_(n, t, r = ws) {
  return (n[r] = t), n;
}
function gr(n, t = ws) {
  let r = "";
  return (
    typeof n.bindings > "u" ? (r = L_(n, t)) : (r = n.bindings().context || ""),
    r
  );
}
function j_(n, t, r = ws) {
  const s = gr(n, r);
  return s.trim() ? `${s}/${t}` : t;
}
function Ir(n, t, r = ws) {
  const s = j_(n, t, r),
    o = n.child({ context: s });
  return M_(o, s, r);
}
let q_ = class extends en {
    constructor(t) {
      super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  U_ = class extends en {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r), (this.records = new Map());
    }
  },
  z_ = class {
    constructor(t, r) {
      (this.logger = t), (this.core = r);
    }
  },
  k_ = class extends en {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  H_ = class extends en {
    constructor(t) {
      super();
    }
  },
  B_ = class {
    constructor(t, r, s, o) {
      (this.core = t), (this.logger = r), (this.name = s);
    }
  },
  K_ = class extends en {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  V_ = class extends en {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  W_ = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  G_ = class {
    constructor(t) {
      (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  J_ = class {
    constructor(t) {
      this.client = t;
    }
  };
var au = {},
  bp = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var t = K1,
    r = Vf;
  (n.DIGEST_LENGTH = 64), (n.BLOCK_SIZE = 128);
  var s = (function () {
    function g() {
      (this.digestLength = n.DIGEST_LENGTH),
        (this.blockSize = n.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (g.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (g.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.clean = function () {
        r.wipe(this._buffer),
          r.wipe(this._tempHi),
          r.wipe(this._tempLo),
          this.reset();
      }),
      (g.prototype.update = function (m, y) {
        if ((y === void 0 && (y = m.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var E = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < n.BLOCK_SIZE && y > 0; )
            (this._buffer[this._bufferLength++] = m[E++]), y--;
          this._bufferLength === this.blockSize &&
            (u(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((E = u(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            m,
            E,
            y
          )),
          (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = m[E++]), y--;
        return this;
      }),
      (g.prototype.finish = function (m) {
        if (!this._finished) {
          var y = this._bytesHashed,
            E = this._bufferLength,
            x = (y / 536870912) | 0,
            $ = y << 3,
            L = y % 128 < 112 ? 128 : 256;
          this._buffer[E] = 128;
          for (var T = E + 1; T < L - 8; T++) this._buffer[T] = 0;
          t.writeUint32BE(x, this._buffer, L - 8),
            t.writeUint32BE($, this._buffer, L - 4),
            u(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              L
            ),
            (this._finished = !0);
        }
        for (var T = 0; T < this.digestLength / 8; T++)
          t.writeUint32BE(this._stateHi[T], m, T * 8),
            t.writeUint32BE(this._stateLo[T], m, T * 8 + 4);
        return this;
      }),
      (g.prototype.digest = function () {
        var m = new Uint8Array(this.digestLength);
        return this.finish(m), m;
      }),
      (g.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (g.prototype.restoreState = function (m) {
        return (
          this._stateHi.set(m.stateHi),
          this._stateLo.set(m.stateLo),
          (this._bufferLength = m.bufferLength),
          m.buffer && this._buffer.set(m.buffer),
          (this._bytesHashed = m.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.cleanSavedState = function (m) {
        r.wipe(m.stateHi),
          r.wipe(m.stateLo),
          m.buffer && r.wipe(m.buffer),
          (m.bufferLength = 0),
          (m.bytesHashed = 0);
      }),
      g
    );
  })();
  n.SHA512 = s;
  var o = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function u(g, m, y, E, x, $, L) {
    for (
      var T = y[0],
        Y = y[1],
        re = y[2],
        oe = y[3],
        ce = y[4],
        ae = y[5],
        te = y[6],
        he = y[7],
        pe = E[0],
        Q = E[1],
        ve = E[2],
        _t = E[3],
        st = E[4],
        Be = E[5],
        zt = E[6],
        kt = E[7],
        b,
        O,
        J,
        le,
        k,
        z,
        H,
        B;
      L >= 128;

    ) {
      for (var et = 0; et < 16; et++) {
        var ot = 8 * et + $;
        (g[et] = t.readUint32BE(x, ot)), (m[et] = t.readUint32BE(x, ot + 4));
      }
      for (var et = 0; et < 80; et++) {
        var Di = T,
          Ee = Y,
          Dr = re,
          D = oe,
          N = ce,
          R = ae,
          h = te,
          I = he,
          X = pe,
          ue = Q,
          me = ve,
          Oe = _t,
          Re = st,
          Ie = Be,
          Et = zt,
          gt = kt;
        if (
          ((b = he),
          (O = kt),
          (k = O & 65535),
          (z = O >>> 16),
          (H = b & 65535),
          (B = b >>> 16),
          (b =
            ((ce >>> 14) | (st << (32 - 14))) ^
            ((ce >>> 18) | (st << (32 - 18))) ^
            ((st >>> (41 - 32)) | (ce << (32 - (41 - 32))))),
          (O =
            ((st >>> 14) | (ce << (32 - 14))) ^
            ((st >>> 18) | (ce << (32 - 18))) ^
            ((ce >>> (41 - 32)) | (st << (32 - (41 - 32))))),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (b = (ce & ae) ^ (~ce & te)),
          (O = (st & Be) ^ (~st & zt)),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (b = o[et * 2]),
          (O = o[et * 2 + 1]),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (b = g[et % 16]),
          (O = m[et % 16]),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (z += k >>> 16),
          (H += z >>> 16),
          (B += H >>> 16),
          (J = (H & 65535) | (B << 16)),
          (le = (k & 65535) | (z << 16)),
          (b = J),
          (O = le),
          (k = O & 65535),
          (z = O >>> 16),
          (H = b & 65535),
          (B = b >>> 16),
          (b =
            ((T >>> 28) | (pe << (32 - 28))) ^
            ((pe >>> (34 - 32)) | (T << (32 - (34 - 32)))) ^
            ((pe >>> (39 - 32)) | (T << (32 - (39 - 32))))),
          (O =
            ((pe >>> 28) | (T << (32 - 28))) ^
            ((T >>> (34 - 32)) | (pe << (32 - (34 - 32)))) ^
            ((T >>> (39 - 32)) | (pe << (32 - (39 - 32))))),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (b = (T & Y) ^ (T & re) ^ (Y & re)),
          (O = (pe & Q) ^ (pe & ve) ^ (Q & ve)),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (z += k >>> 16),
          (H += z >>> 16),
          (B += H >>> 16),
          (I = (H & 65535) | (B << 16)),
          (gt = (k & 65535) | (z << 16)),
          (b = D),
          (O = Oe),
          (k = O & 65535),
          (z = O >>> 16),
          (H = b & 65535),
          (B = b >>> 16),
          (b = J),
          (O = le),
          (k += O & 65535),
          (z += O >>> 16),
          (H += b & 65535),
          (B += b >>> 16),
          (z += k >>> 16),
          (H += z >>> 16),
          (B += H >>> 16),
          (D = (H & 65535) | (B << 16)),
          (Oe = (k & 65535) | (z << 16)),
          (Y = Di),
          (re = Ee),
          (oe = Dr),
          (ce = D),
          (ae = N),
          (te = R),
          (he = h),
          (T = I),
          (Q = X),
          (ve = ue),
          (_t = me),
          (st = Oe),
          (Be = Re),
          (zt = Ie),
          (kt = Et),
          (pe = gt),
          et % 16 === 15)
        )
          for (var ot = 0; ot < 16; ot++)
            (b = g[ot]),
              (O = m[ot]),
              (k = O & 65535),
              (z = O >>> 16),
              (H = b & 65535),
              (B = b >>> 16),
              (b = g[(ot + 9) % 16]),
              (O = m[(ot + 9) % 16]),
              (k += O & 65535),
              (z += O >>> 16),
              (H += b & 65535),
              (B += b >>> 16),
              (J = g[(ot + 1) % 16]),
              (le = m[(ot + 1) % 16]),
              (b =
                ((J >>> 1) | (le << (32 - 1))) ^
                ((J >>> 8) | (le << (32 - 8))) ^
                (J >>> 7)),
              (O =
                ((le >>> 1) | (J << (32 - 1))) ^
                ((le >>> 8) | (J << (32 - 8))) ^
                ((le >>> 7) | (J << (32 - 7)))),
              (k += O & 65535),
              (z += O >>> 16),
              (H += b & 65535),
              (B += b >>> 16),
              (J = g[(ot + 14) % 16]),
              (le = m[(ot + 14) % 16]),
              (b =
                ((J >>> 19) | (le << (32 - 19))) ^
                ((le >>> (61 - 32)) | (J << (32 - (61 - 32)))) ^
                (J >>> 6)),
              (O =
                ((le >>> 19) | (J << (32 - 19))) ^
                ((J >>> (61 - 32)) | (le << (32 - (61 - 32)))) ^
                ((le >>> 6) | (J << (32 - 6)))),
              (k += O & 65535),
              (z += O >>> 16),
              (H += b & 65535),
              (B += b >>> 16),
              (z += k >>> 16),
              (H += z >>> 16),
              (B += H >>> 16),
              (g[ot] = (H & 65535) | (B << 16)),
              (m[ot] = (k & 65535) | (z << 16));
      }
      (b = T),
        (O = pe),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[0]),
        (O = E[0]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[0] = T = (H & 65535) | (B << 16)),
        (E[0] = pe = (k & 65535) | (z << 16)),
        (b = Y),
        (O = Q),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[1]),
        (O = E[1]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[1] = Y = (H & 65535) | (B << 16)),
        (E[1] = Q = (k & 65535) | (z << 16)),
        (b = re),
        (O = ve),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[2]),
        (O = E[2]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[2] = re = (H & 65535) | (B << 16)),
        (E[2] = ve = (k & 65535) | (z << 16)),
        (b = oe),
        (O = _t),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[3]),
        (O = E[3]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[3] = oe = (H & 65535) | (B << 16)),
        (E[3] = _t = (k & 65535) | (z << 16)),
        (b = ce),
        (O = st),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[4]),
        (O = E[4]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[4] = ce = (H & 65535) | (B << 16)),
        (E[4] = st = (k & 65535) | (z << 16)),
        (b = ae),
        (O = Be),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[5]),
        (O = E[5]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[5] = ae = (H & 65535) | (B << 16)),
        (E[5] = Be = (k & 65535) | (z << 16)),
        (b = te),
        (O = zt),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[6]),
        (O = E[6]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[6] = te = (H & 65535) | (B << 16)),
        (E[6] = zt = (k & 65535) | (z << 16)),
        (b = he),
        (O = kt),
        (k = O & 65535),
        (z = O >>> 16),
        (H = b & 65535),
        (B = b >>> 16),
        (b = y[7]),
        (O = E[7]),
        (k += O & 65535),
        (z += O >>> 16),
        (H += b & 65535),
        (B += b >>> 16),
        (z += k >>> 16),
        (H += z >>> 16),
        (B += H >>> 16),
        (y[7] = he = (H & 65535) | (B << 16)),
        (E[7] = kt = (k & 65535) | (z << 16)),
        ($ += 128),
        (L -= 128);
    }
    return $;
  }
  function f(g) {
    var m = new s();
    m.update(g);
    var y = m.digest();
    return m.clean(), y;
  }
  n.hash = f;
})(bp);
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.convertSecretKeyToX25519 =
      n.convertPublicKeyToX25519 =
      n.verify =
      n.sign =
      n.extractPublicKeyFromSecretKey =
      n.generateKeyPair =
      n.generateKeyPairFromSeed =
      n.SEED_LENGTH =
      n.SECRET_KEY_LENGTH =
      n.PUBLIC_KEY_LENGTH =
      n.SIGNATURE_LENGTH =
        void 0);
  const t = Ko,
    r = bp,
    s = Vf;
  (n.SIGNATURE_LENGTH = 64),
    (n.PUBLIC_KEY_LENGTH = 32),
    (n.SECRET_KEY_LENGTH = 64),
    (n.SEED_LENGTH = 32);
  function o(D) {
    const N = new Float64Array(16);
    if (D) for (let R = 0; R < D.length; R++) N[R] = D[R];
    return N;
  }
  const u = new Uint8Array(32);
  u[0] = 9;
  const f = o(),
    g = o([1]),
    m = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    y = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    E = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    x = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    $ = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function L(D, N) {
    for (let R = 0; R < 16; R++) D[R] = N[R] | 0;
  }
  function T(D) {
    let N = 1;
    for (let R = 0; R < 16; R++) {
      let h = D[R] + N + 65535;
      (N = Math.floor(h / 65536)), (D[R] = h - N * 65536);
    }
    D[0] += N - 1 + 37 * (N - 1);
  }
  function Y(D, N, R) {
    const h = ~(R - 1);
    for (let I = 0; I < 16; I++) {
      const X = h & (D[I] ^ N[I]);
      (D[I] ^= X), (N[I] ^= X);
    }
  }
  function re(D, N) {
    const R = o(),
      h = o();
    for (let I = 0; I < 16; I++) h[I] = N[I];
    T(h), T(h), T(h);
    for (let I = 0; I < 2; I++) {
      R[0] = h[0] - 65517;
      for (let ue = 1; ue < 15; ue++)
        (R[ue] = h[ue] - 65535 - ((R[ue - 1] >> 16) & 1)), (R[ue - 1] &= 65535);
      R[15] = h[15] - 32767 - ((R[14] >> 16) & 1);
      const X = (R[15] >> 16) & 1;
      (R[14] &= 65535), Y(h, R, 1 - X);
    }
    for (let I = 0; I < 16; I++)
      (D[2 * I] = h[I] & 255), (D[2 * I + 1] = h[I] >> 8);
  }
  function oe(D, N) {
    let R = 0;
    for (let h = 0; h < 32; h++) R |= D[h] ^ N[h];
    return (1 & ((R - 1) >>> 8)) - 1;
  }
  function ce(D, N) {
    const R = new Uint8Array(32),
      h = new Uint8Array(32);
    return re(R, D), re(h, N), oe(R, h);
  }
  function ae(D) {
    const N = new Uint8Array(32);
    return re(N, D), N[0] & 1;
  }
  function te(D, N) {
    for (let R = 0; R < 16; R++) D[R] = N[2 * R] + (N[2 * R + 1] << 8);
    D[15] &= 32767;
  }
  function he(D, N, R) {
    for (let h = 0; h < 16; h++) D[h] = N[h] + R[h];
  }
  function pe(D, N, R) {
    for (let h = 0; h < 16; h++) D[h] = N[h] - R[h];
  }
  function Q(D, N, R) {
    let h,
      I,
      X = 0,
      ue = 0,
      me = 0,
      Oe = 0,
      Re = 0,
      Ie = 0,
      Et = 0,
      gt = 0,
      tt = 0,
      Ce = 0,
      Ke = 0,
      Ve = 0,
      rt = 0,
      Fe = 0,
      We = 0,
      Ae = 0,
      je = 0,
      at = 0,
      $e = 0,
      It = 0,
      Nt = 0,
      Ht = 0,
      Bt = 0,
      Ft = 0,
      Qt = 0,
      sr = 0,
      Kr = 0,
      Yt = 0,
      ei = 0,
      wi = 0,
      Fi = 0,
      ct = R[0],
      Qe = R[1],
      ut = R[2],
      ht = R[3],
      it = R[4],
      Ye = R[5],
      xt = R[6],
      Pt = R[7],
      lt = R[8],
      St = R[9],
      ft = R[10],
      yt = R[11],
      pt = R[12],
      He = R[13],
      Ot = R[14],
      At = R[15];
    (h = N[0]),
      (X += h * ct),
      (ue += h * Qe),
      (me += h * ut),
      (Oe += h * ht),
      (Re += h * it),
      (Ie += h * Ye),
      (Et += h * xt),
      (gt += h * Pt),
      (tt += h * lt),
      (Ce += h * St),
      (Ke += h * ft),
      (Ve += h * yt),
      (rt += h * pt),
      (Fe += h * He),
      (We += h * Ot),
      (Ae += h * At),
      (h = N[1]),
      (ue += h * ct),
      (me += h * Qe),
      (Oe += h * ut),
      (Re += h * ht),
      (Ie += h * it),
      (Et += h * Ye),
      (gt += h * xt),
      (tt += h * Pt),
      (Ce += h * lt),
      (Ke += h * St),
      (Ve += h * ft),
      (rt += h * yt),
      (Fe += h * pt),
      (We += h * He),
      (Ae += h * Ot),
      (je += h * At),
      (h = N[2]),
      (me += h * ct),
      (Oe += h * Qe),
      (Re += h * ut),
      (Ie += h * ht),
      (Et += h * it),
      (gt += h * Ye),
      (tt += h * xt),
      (Ce += h * Pt),
      (Ke += h * lt),
      (Ve += h * St),
      (rt += h * ft),
      (Fe += h * yt),
      (We += h * pt),
      (Ae += h * He),
      (je += h * Ot),
      (at += h * At),
      (h = N[3]),
      (Oe += h * ct),
      (Re += h * Qe),
      (Ie += h * ut),
      (Et += h * ht),
      (gt += h * it),
      (tt += h * Ye),
      (Ce += h * xt),
      (Ke += h * Pt),
      (Ve += h * lt),
      (rt += h * St),
      (Fe += h * ft),
      (We += h * yt),
      (Ae += h * pt),
      (je += h * He),
      (at += h * Ot),
      ($e += h * At),
      (h = N[4]),
      (Re += h * ct),
      (Ie += h * Qe),
      (Et += h * ut),
      (gt += h * ht),
      (tt += h * it),
      (Ce += h * Ye),
      (Ke += h * xt),
      (Ve += h * Pt),
      (rt += h * lt),
      (Fe += h * St),
      (We += h * ft),
      (Ae += h * yt),
      (je += h * pt),
      (at += h * He),
      ($e += h * Ot),
      (It += h * At),
      (h = N[5]),
      (Ie += h * ct),
      (Et += h * Qe),
      (gt += h * ut),
      (tt += h * ht),
      (Ce += h * it),
      (Ke += h * Ye),
      (Ve += h * xt),
      (rt += h * Pt),
      (Fe += h * lt),
      (We += h * St),
      (Ae += h * ft),
      (je += h * yt),
      (at += h * pt),
      ($e += h * He),
      (It += h * Ot),
      (Nt += h * At),
      (h = N[6]),
      (Et += h * ct),
      (gt += h * Qe),
      (tt += h * ut),
      (Ce += h * ht),
      (Ke += h * it),
      (Ve += h * Ye),
      (rt += h * xt),
      (Fe += h * Pt),
      (We += h * lt),
      (Ae += h * St),
      (je += h * ft),
      (at += h * yt),
      ($e += h * pt),
      (It += h * He),
      (Nt += h * Ot),
      (Ht += h * At),
      (h = N[7]),
      (gt += h * ct),
      (tt += h * Qe),
      (Ce += h * ut),
      (Ke += h * ht),
      (Ve += h * it),
      (rt += h * Ye),
      (Fe += h * xt),
      (We += h * Pt),
      (Ae += h * lt),
      (je += h * St),
      (at += h * ft),
      ($e += h * yt),
      (It += h * pt),
      (Nt += h * He),
      (Ht += h * Ot),
      (Bt += h * At),
      (h = N[8]),
      (tt += h * ct),
      (Ce += h * Qe),
      (Ke += h * ut),
      (Ve += h * ht),
      (rt += h * it),
      (Fe += h * Ye),
      (We += h * xt),
      (Ae += h * Pt),
      (je += h * lt),
      (at += h * St),
      ($e += h * ft),
      (It += h * yt),
      (Nt += h * pt),
      (Ht += h * He),
      (Bt += h * Ot),
      (Ft += h * At),
      (h = N[9]),
      (Ce += h * ct),
      (Ke += h * Qe),
      (Ve += h * ut),
      (rt += h * ht),
      (Fe += h * it),
      (We += h * Ye),
      (Ae += h * xt),
      (je += h * Pt),
      (at += h * lt),
      ($e += h * St),
      (It += h * ft),
      (Nt += h * yt),
      (Ht += h * pt),
      (Bt += h * He),
      (Ft += h * Ot),
      (Qt += h * At),
      (h = N[10]),
      (Ke += h * ct),
      (Ve += h * Qe),
      (rt += h * ut),
      (Fe += h * ht),
      (We += h * it),
      (Ae += h * Ye),
      (je += h * xt),
      (at += h * Pt),
      ($e += h * lt),
      (It += h * St),
      (Nt += h * ft),
      (Ht += h * yt),
      (Bt += h * pt),
      (Ft += h * He),
      (Qt += h * Ot),
      (sr += h * At),
      (h = N[11]),
      (Ve += h * ct),
      (rt += h * Qe),
      (Fe += h * ut),
      (We += h * ht),
      (Ae += h * it),
      (je += h * Ye),
      (at += h * xt),
      ($e += h * Pt),
      (It += h * lt),
      (Nt += h * St),
      (Ht += h * ft),
      (Bt += h * yt),
      (Ft += h * pt),
      (Qt += h * He),
      (sr += h * Ot),
      (Kr += h * At),
      (h = N[12]),
      (rt += h * ct),
      (Fe += h * Qe),
      (We += h * ut),
      (Ae += h * ht),
      (je += h * it),
      (at += h * Ye),
      ($e += h * xt),
      (It += h * Pt),
      (Nt += h * lt),
      (Ht += h * St),
      (Bt += h * ft),
      (Ft += h * yt),
      (Qt += h * pt),
      (sr += h * He),
      (Kr += h * Ot),
      (Yt += h * At),
      (h = N[13]),
      (Fe += h * ct),
      (We += h * Qe),
      (Ae += h * ut),
      (je += h * ht),
      (at += h * it),
      ($e += h * Ye),
      (It += h * xt),
      (Nt += h * Pt),
      (Ht += h * lt),
      (Bt += h * St),
      (Ft += h * ft),
      (Qt += h * yt),
      (sr += h * pt),
      (Kr += h * He),
      (Yt += h * Ot),
      (ei += h * At),
      (h = N[14]),
      (We += h * ct),
      (Ae += h * Qe),
      (je += h * ut),
      (at += h * ht),
      ($e += h * it),
      (It += h * Ye),
      (Nt += h * xt),
      (Ht += h * Pt),
      (Bt += h * lt),
      (Ft += h * St),
      (Qt += h * ft),
      (sr += h * yt),
      (Kr += h * pt),
      (Yt += h * He),
      (ei += h * Ot),
      (wi += h * At),
      (h = N[15]),
      (Ae += h * ct),
      (je += h * Qe),
      (at += h * ut),
      ($e += h * ht),
      (It += h * it),
      (Nt += h * Ye),
      (Ht += h * xt),
      (Bt += h * Pt),
      (Ft += h * lt),
      (Qt += h * St),
      (sr += h * ft),
      (Kr += h * yt),
      (Yt += h * pt),
      (ei += h * He),
      (wi += h * Ot),
      (Fi += h * At),
      (X += 38 * je),
      (ue += 38 * at),
      (me += 38 * $e),
      (Oe += 38 * It),
      (Re += 38 * Nt),
      (Ie += 38 * Ht),
      (Et += 38 * Bt),
      (gt += 38 * Ft),
      (tt += 38 * Qt),
      (Ce += 38 * sr),
      (Ke += 38 * Kr),
      (Ve += 38 * Yt),
      (rt += 38 * ei),
      (Fe += 38 * wi),
      (We += 38 * Fi),
      (I = 1),
      (h = X + I + 65535),
      (I = Math.floor(h / 65536)),
      (X = h - I * 65536),
      (h = ue + I + 65535),
      (I = Math.floor(h / 65536)),
      (ue = h - I * 65536),
      (h = me + I + 65535),
      (I = Math.floor(h / 65536)),
      (me = h - I * 65536),
      (h = Oe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Oe = h - I * 65536),
      (h = Re + I + 65535),
      (I = Math.floor(h / 65536)),
      (Re = h - I * 65536),
      (h = Ie + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ie = h - I * 65536),
      (h = Et + I + 65535),
      (I = Math.floor(h / 65536)),
      (Et = h - I * 65536),
      (h = gt + I + 65535),
      (I = Math.floor(h / 65536)),
      (gt = h - I * 65536),
      (h = tt + I + 65535),
      (I = Math.floor(h / 65536)),
      (tt = h - I * 65536),
      (h = Ce + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ce = h - I * 65536),
      (h = Ke + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ke = h - I * 65536),
      (h = Ve + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ve = h - I * 65536),
      (h = rt + I + 65535),
      (I = Math.floor(h / 65536)),
      (rt = h - I * 65536),
      (h = Fe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Fe = h - I * 65536),
      (h = We + I + 65535),
      (I = Math.floor(h / 65536)),
      (We = h - I * 65536),
      (h = Ae + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ae = h - I * 65536),
      (X += I - 1 + 37 * (I - 1)),
      (I = 1),
      (h = X + I + 65535),
      (I = Math.floor(h / 65536)),
      (X = h - I * 65536),
      (h = ue + I + 65535),
      (I = Math.floor(h / 65536)),
      (ue = h - I * 65536),
      (h = me + I + 65535),
      (I = Math.floor(h / 65536)),
      (me = h - I * 65536),
      (h = Oe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Oe = h - I * 65536),
      (h = Re + I + 65535),
      (I = Math.floor(h / 65536)),
      (Re = h - I * 65536),
      (h = Ie + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ie = h - I * 65536),
      (h = Et + I + 65535),
      (I = Math.floor(h / 65536)),
      (Et = h - I * 65536),
      (h = gt + I + 65535),
      (I = Math.floor(h / 65536)),
      (gt = h - I * 65536),
      (h = tt + I + 65535),
      (I = Math.floor(h / 65536)),
      (tt = h - I * 65536),
      (h = Ce + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ce = h - I * 65536),
      (h = Ke + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ke = h - I * 65536),
      (h = Ve + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ve = h - I * 65536),
      (h = rt + I + 65535),
      (I = Math.floor(h / 65536)),
      (rt = h - I * 65536),
      (h = Fe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Fe = h - I * 65536),
      (h = We + I + 65535),
      (I = Math.floor(h / 65536)),
      (We = h - I * 65536),
      (h = Ae + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ae = h - I * 65536),
      (X += I - 1 + 37 * (I - 1)),
      (D[0] = X),
      (D[1] = ue),
      (D[2] = me),
      (D[3] = Oe),
      (D[4] = Re),
      (D[5] = Ie),
      (D[6] = Et),
      (D[7] = gt),
      (D[8] = tt),
      (D[9] = Ce),
      (D[10] = Ke),
      (D[11] = Ve),
      (D[12] = rt),
      (D[13] = Fe),
      (D[14] = We),
      (D[15] = Ae);
  }
  function ve(D, N) {
    Q(D, N, N);
  }
  function _t(D, N) {
    const R = o();
    let h;
    for (h = 0; h < 16; h++) R[h] = N[h];
    for (h = 253; h >= 0; h--) ve(R, R), h !== 2 && h !== 4 && Q(R, R, N);
    for (h = 0; h < 16; h++) D[h] = R[h];
  }
  function st(D, N) {
    const R = o();
    let h;
    for (h = 0; h < 16; h++) R[h] = N[h];
    for (h = 250; h >= 0; h--) ve(R, R), h !== 1 && Q(R, R, N);
    for (h = 0; h < 16; h++) D[h] = R[h];
  }
  function Be(D, N) {
    const R = o(),
      h = o(),
      I = o(),
      X = o(),
      ue = o(),
      me = o(),
      Oe = o(),
      Re = o(),
      Ie = o();
    pe(R, D[1], D[0]),
      pe(Ie, N[1], N[0]),
      Q(R, R, Ie),
      he(h, D[0], D[1]),
      he(Ie, N[0], N[1]),
      Q(h, h, Ie),
      Q(I, D[3], N[3]),
      Q(I, I, y),
      Q(X, D[2], N[2]),
      he(X, X, X),
      pe(ue, h, R),
      pe(me, X, I),
      he(Oe, X, I),
      he(Re, h, R),
      Q(D[0], ue, me),
      Q(D[1], Re, Oe),
      Q(D[2], Oe, me),
      Q(D[3], ue, Re);
  }
  function zt(D, N, R) {
    for (let h = 0; h < 4; h++) Y(D[h], N[h], R);
  }
  function kt(D, N) {
    const R = o(),
      h = o(),
      I = o();
    _t(I, N[2]), Q(R, N[0], I), Q(h, N[1], I), re(D, h), (D[31] ^= ae(R) << 7);
  }
  function b(D, N, R) {
    L(D[0], f), L(D[1], g), L(D[2], g), L(D[3], f);
    for (let h = 255; h >= 0; --h) {
      const I = (R[(h / 8) | 0] >> (h & 7)) & 1;
      zt(D, N, I), Be(N, D), Be(D, D), zt(D, N, I);
    }
  }
  function O(D, N) {
    const R = [o(), o(), o(), o()];
    L(R[0], E), L(R[1], x), L(R[2], g), Q(R[3], E, x), b(D, R, N);
  }
  function J(D) {
    if (D.length !== n.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${n.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(D);
    (N[0] &= 248), (N[31] &= 127), (N[31] |= 64);
    const R = new Uint8Array(32),
      h = [o(), o(), o(), o()];
    O(h, N), kt(R, h);
    const I = new Uint8Array(64);
    return I.set(D), I.set(R, 32), { publicKey: R, secretKey: I };
  }
  n.generateKeyPairFromSeed = J;
  function le(D) {
    const N = (0, t.randomBytes)(32, D),
      R = J(N);
    return (0, s.wipe)(N), R;
  }
  n.generateKeyPair = le;
  function k(D) {
    if (D.length !== n.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${n.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(D.subarray(32));
  }
  n.extractPublicKeyFromSecretKey = k;
  const z = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function H(D, N) {
    let R, h, I, X;
    for (h = 63; h >= 32; --h) {
      for (R = 0, I = h - 32, X = h - 12; I < X; ++I)
        (N[I] += R - 16 * N[h] * z[I - (h - 32)]),
          (R = Math.floor((N[I] + 128) / 256)),
          (N[I] -= R * 256);
      (N[I] += R), (N[h] = 0);
    }
    for (R = 0, I = 0; I < 32; I++)
      (N[I] += R - (N[31] >> 4) * z[I]), (R = N[I] >> 8), (N[I] &= 255);
    for (I = 0; I < 32; I++) N[I] -= R * z[I];
    for (h = 0; h < 32; h++) (N[h + 1] += N[h] >> 8), (D[h] = N[h] & 255);
  }
  function B(D) {
    const N = new Float64Array(64);
    for (let R = 0; R < 64; R++) N[R] = D[R];
    for (let R = 0; R < 64; R++) D[R] = 0;
    H(D, N);
  }
  function et(D, N) {
    const R = new Float64Array(64),
      h = [o(), o(), o(), o()],
      I = (0, r.hash)(D.subarray(0, 32));
    (I[0] &= 248), (I[31] &= 127), (I[31] |= 64);
    const X = new Uint8Array(64);
    X.set(I.subarray(32), 32);
    const ue = new r.SHA512();
    ue.update(X.subarray(32)), ue.update(N);
    const me = ue.digest();
    ue.clean(),
      B(me),
      O(h, me),
      kt(X, h),
      ue.reset(),
      ue.update(X.subarray(0, 32)),
      ue.update(D.subarray(32)),
      ue.update(N);
    const Oe = ue.digest();
    B(Oe);
    for (let Re = 0; Re < 32; Re++) R[Re] = me[Re];
    for (let Re = 0; Re < 32; Re++)
      for (let Ie = 0; Ie < 32; Ie++) R[Re + Ie] += Oe[Re] * I[Ie];
    return H(X.subarray(32), R), X;
  }
  n.sign = et;
  function ot(D, N) {
    const R = o(),
      h = o(),
      I = o(),
      X = o(),
      ue = o(),
      me = o(),
      Oe = o();
    return (
      L(D[2], g),
      te(D[1], N),
      ve(I, D[1]),
      Q(X, I, m),
      pe(I, I, D[2]),
      he(X, D[2], X),
      ve(ue, X),
      ve(me, ue),
      Q(Oe, me, ue),
      Q(R, Oe, I),
      Q(R, R, X),
      st(R, R),
      Q(R, R, I),
      Q(R, R, X),
      Q(R, R, X),
      Q(D[0], R, X),
      ve(h, D[0]),
      Q(h, h, X),
      ce(h, I) && Q(D[0], D[0], $),
      ve(h, D[0]),
      Q(h, h, X),
      ce(h, I)
        ? -1
        : (ae(D[0]) === N[31] >> 7 && pe(D[0], f, D[0]), Q(D[3], D[0], D[1]), 0)
    );
  }
  function Di(D, N, R) {
    const h = new Uint8Array(32),
      I = [o(), o(), o(), o()],
      X = [o(), o(), o(), o()];
    if (R.length !== n.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${n.SIGNATURE_LENGTH} bytes`);
    if (ot(X, D)) return !1;
    const ue = new r.SHA512();
    ue.update(R.subarray(0, 32)), ue.update(D), ue.update(N);
    const me = ue.digest();
    return (
      B(me), b(I, X, me), O(X, R.subarray(32)), Be(I, X), kt(h, I), !oe(R, h)
    );
  }
  n.verify = Di;
  function Ee(D) {
    let N = [o(), o(), o(), o()];
    if (ot(N, D)) throw new Error("Ed25519: invalid public key");
    let R = o(),
      h = o(),
      I = N[1];
    he(R, g, I), pe(h, g, I), _t(h, h), Q(R, R, h);
    let X = new Uint8Array(32);
    return re(X, R), X;
  }
  n.convertPublicKeyToX25519 = Ee;
  function Dr(D) {
    const N = (0, r.hash)(D.subarray(0, 32));
    (N[0] &= 248), (N[31] &= 127), (N[31] |= 64);
    const R = new Uint8Array(N.subarray(0, 32));
    return (0, s.wipe)(N), R;
  }
  n.convertSecretKeyToX25519 = Dr;
})(au);
const Q_ = "EdDSA",
  Y_ = "JWT",
  _p = ".",
  Ep = "base64url",
  X_ = "utf8",
  Z_ = "utf8",
  eE = ":",
  tE = "did",
  rE = "key",
  Jl = "base58btc",
  iE = "z",
  nE = "K36",
  sE = 32;
function zo(n) {
  return nr(dr(Yi(n), X_), Ep);
}
function Ip(n) {
  const t = dr(nE, Jl),
    r = iE + nr(zc([t, n]), Jl);
  return [tE, rE, r].join(eE);
}
function oE(n) {
  return nr(n, Ep);
}
function aE(n) {
  return dr([zo(n.header), zo(n.payload)].join(_p), Z_);
}
function cE(n) {
  return [zo(n.header), zo(n.payload), oE(n.signature)].join(_p);
}
function Ql(n = Ko.randomBytes(sE)) {
  return au.generateKeyPairFromSeed(n);
}
async function uE(n, t, r, s, o = ee.fromMiliseconds(Date.now())) {
  const u = { alg: Q_, typ: Y_ },
    f = Ip(s.publicKey),
    g = o + r,
    m = { iss: f, sub: n, aud: t, iat: o, exp: g },
    y = aE({ header: u, payload: m }),
    E = au.sign(s.secretKey, y);
  return cE({ header: u, payload: m, signature: E });
}
const hE = "PARSE_ERROR",
  lE = "INVALID_REQUEST",
  fE = "METHOD_NOT_FOUND",
  pE = "INVALID_PARAMS",
  xp = "INTERNAL_ERROR",
  cu = "SERVER_ERROR",
  dE = [-32700, -32600, -32601, -32602, -32603],
  hs = {
    [hE]: { code: -32700, message: "Parse error" },
    [lE]: { code: -32600, message: "Invalid Request" },
    [fE]: { code: -32601, message: "Method not found" },
    [pE]: { code: -32602, message: "Invalid params" },
    [xp]: { code: -32603, message: "Internal error" },
    [cu]: { code: -32e3, message: "Server error" },
  },
  Pp = cu;
function gE(n) {
  return dE.includes(n);
}
function Yl(n) {
  return Object.keys(hs).includes(n) ? hs[n] : hs[Pp];
}
function yE(n) {
  const t = Object.values(hs).find((r) => r.code === n);
  return t || hs[Pp];
}
function Sp(n, t, r) {
  return n.message.includes("getaddrinfo ENOTFOUND") ||
    n.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : n;
}
var Op = {},
  fi = {},
  Xl;
function vE() {
  if (Xl) return fi;
  (Xl = 1),
    Object.defineProperty(fi, "__esModule", { value: !0 }),
    (fi.isBrowserCryptoAvailable =
      fi.getSubtleCrypto =
      fi.getBrowerCrypto =
        void 0);
  function n() {
    return (
      (Br === null || Br === void 0 ? void 0 : Br.crypto) ||
      (Br === null || Br === void 0 ? void 0 : Br.msCrypto) ||
      {}
    );
  }
  fi.getBrowerCrypto = n;
  function t() {
    const s = n();
    return s.subtle || s.webkitSubtle;
  }
  fi.getSubtleCrypto = t;
  function r() {
    return !!n() && !!t();
  }
  return (fi.isBrowserCryptoAvailable = r), fi;
}
var pi = {},
  Zl;
function mE() {
  if (Zl) return pi;
  (Zl = 1),
    Object.defineProperty(pi, "__esModule", { value: !0 }),
    (pi.isBrowser = pi.isNode = pi.isReactNative = void 0);
  function n() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  pi.isReactNative = n;
  function t() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  pi.isNode = t;
  function r() {
    return !n() && !t();
  }
  return (pi.isBrowser = r), pi;
}
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  const t = ds;
  t.__exportStar(vE(), n), t.__exportStar(mE(), n);
})(Op);
function uu(n = 3) {
  const t = Date.now() * Math.pow(10, n),
    r = Math.floor(Math.random() * Math.pow(10, n));
  return t + r;
}
function Ap(n = 6) {
  return BigInt(uu(n));
}
function Tn(n, t, r) {
  return { id: r || uu(), jsonrpc: "2.0", method: n, params: t };
}
function hu(n, t) {
  return { id: n, jsonrpc: "2.0", result: t };
}
function Qo(n, t, r) {
  return { id: n, jsonrpc: "2.0", error: wE(t, r) };
}
function wE(n, t) {
  return typeof n > "u"
    ? Yl(xp)
    : (typeof n == "string" &&
        (n = Object.assign(Object.assign({}, Yl(cu)), { message: n })),
      typeof t < "u" && (n.data = t),
      gE(n.code) && (n = yE(n.code)),
      n);
}
class bE {}
class _E extends bE {
  constructor() {
    super();
  }
}
class EE extends _E {
  constructor(t) {
    super();
  }
}
const IE = "^https?:",
  xE = "^wss?:";
function PE(n) {
  const t = n.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function Rp(n, t) {
  const r = PE(n);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function ef(n) {
  return Rp(n, IE);
}
function tf(n) {
  return Rp(n, xE);
}
function SE(n) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(n);
}
function Tp(n) {
  return (
    typeof n == "object" && "id" in n && "jsonrpc" in n && n.jsonrpc === "2.0"
  );
}
function lu(n) {
  return Tp(n) && "method" in n;
}
function Yo(n) {
  return Tp(n) && (yi(n) || Hr(n));
}
function yi(n) {
  return "result" in n;
}
function Hr(n) {
  return "error" in n;
}
class vi extends EE {
  constructor(t) {
    super(t),
      (this.events = new Ut.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(
      Tn(t.method, t.params || [], t.id || Ap().toString()),
      r
    );
  }
  async requestStrict(t, r) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (u) {
          o(u);
        }
      this.events.on(`${t.id}`, (u) => {
        Hr(u) ? o(u.error) : s(u.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (u) {
        o(u);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      Yo(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == "string" &&
        (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const OE = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  AE = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  rf = (n) => n.split("?")[0],
  nf = 10,
  RE = OE();
let TE = class {
  constructor(t) {
    if (
      ((this.url = t),
      (this.events = new Ut.EventEmitter()),
      (this.registering = !1),
      !tf(t))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), t();
      }),
        this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Yi(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!tf(t))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (u) => {
            this.resetMaxListeners(), o(u);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, s) => {
        const o = new URLSearchParams(t).get("origin"),
          u = Op.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !SE(t) },
          f = new RE(t, [], u);
        AE()
          ? (f.onerror = (g) => {
              const m = g;
              s(this.emitError(m.error));
            })
          : f.on("error", (g) => {
              s(this.emitError(g));
            }),
          (f.onopen = () => {
            this.onOpen(f), r(f);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(t) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? ms(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      o = s.message || s.toString(),
      u = Qo(t, o);
    this.events.emit("payload", u);
  }
  parseError(t, r = this.url) {
    return Sp(t, rf(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > nf && this.events.setMaxListeners(nf);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        (t == null ? void 0 : t.message) ||
          `WebSocket connection failed for host: ${rf(this.url)}`
      )
    );
    return this.events.emit("register_error", r), r;
  }
};
var ko = {},
  CE = {
    get exports() {
      return ko;
    },
    set exports(n) {
      ko = n;
    },
  };
(function (n, t) {
  var r = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    u = 2,
    f = 9007199254740991,
    g = "[object Arguments]",
    m = "[object Array]",
    y = "[object AsyncFunction]",
    E = "[object Boolean]",
    x = "[object Date]",
    $ = "[object Error]",
    L = "[object Function]",
    T = "[object GeneratorFunction]",
    Y = "[object Map]",
    re = "[object Number]",
    oe = "[object Null]",
    ce = "[object Object]",
    ae = "[object Promise]",
    te = "[object Proxy]",
    he = "[object RegExp]",
    pe = "[object Set]",
    Q = "[object String]",
    ve = "[object Symbol]",
    _t = "[object Undefined]",
    st = "[object WeakMap]",
    Be = "[object ArrayBuffer]",
    zt = "[object DataView]",
    kt = "[object Float32Array]",
    b = "[object Float64Array]",
    O = "[object Int8Array]",
    J = "[object Int16Array]",
    le = "[object Int32Array]",
    k = "[object Uint8Array]",
    z = "[object Uint8ClampedArray]",
    H = "[object Uint16Array]",
    B = "[object Uint32Array]",
    et = /[\\^$.*+?()[\]{}|]/g,
    ot = /^\[object .+?Constructor\]$/,
    Di = /^(?:0|[1-9]\d*)$/,
    Ee = {};
  (Ee[kt] =
    Ee[b] =
    Ee[O] =
    Ee[J] =
    Ee[le] =
    Ee[k] =
    Ee[z] =
    Ee[H] =
    Ee[B] =
      !0),
    (Ee[g] =
      Ee[m] =
      Ee[Be] =
      Ee[E] =
      Ee[zt] =
      Ee[x] =
      Ee[$] =
      Ee[L] =
      Ee[Y] =
      Ee[re] =
      Ee[ce] =
      Ee[he] =
      Ee[pe] =
      Ee[Q] =
      Ee[st] =
        !1);
  var Dr = typeof Br == "object" && Br && Br.Object === Object && Br,
    D = typeof self == "object" && self && self.Object === Object && self,
    N = Dr || D || Function("return this")(),
    R = t && !t.nodeType && t,
    h = R && !0 && n && !n.nodeType && n,
    I = h && h.exports === R,
    X = I && Dr.process,
    ue = (function () {
      try {
        return X && X.binding && X.binding("util");
      } catch {}
    })(),
    me = ue && ue.isTypedArray;
  function Oe(v, P) {
    for (var q = -1, W = v == null ? 0 : v.length, Ue = 0, de = []; ++q < W; ) {
      var Ge = v[q];
      P(Ge, q, v) && (de[Ue++] = Ge);
    }
    return de;
  }
  function Re(v, P) {
    for (var q = -1, W = P.length, Ue = v.length; ++q < W; ) v[Ue + q] = P[q];
    return v;
  }
  function Ie(v, P) {
    for (var q = -1, W = v == null ? 0 : v.length; ++q < W; )
      if (P(v[q], q, v)) return !0;
    return !1;
  }
  function Et(v, P) {
    for (var q = -1, W = Array(v); ++q < v; ) W[q] = P(q);
    return W;
  }
  function gt(v) {
    return function (P) {
      return v(P);
    };
  }
  function tt(v, P) {
    return v.has(P);
  }
  function Ce(v, P) {
    return v == null ? void 0 : v[P];
  }
  function Ke(v) {
    var P = -1,
      q = Array(v.size);
    return (
      v.forEach(function (W, Ue) {
        q[++P] = [Ue, W];
      }),
      q
    );
  }
  function Ve(v, P) {
    return function (q) {
      return v(P(q));
    };
  }
  function rt(v) {
    var P = -1,
      q = Array(v.size);
    return (
      v.forEach(function (W) {
        q[++P] = W;
      }),
      q
    );
  }
  var Fe = Array.prototype,
    We = Function.prototype,
    Ae = Object.prototype,
    je = N["__core-js_shared__"],
    at = We.toString,
    $e = Ae.hasOwnProperty,
    It = (function () {
      var v = /[^.]+$/.exec((je && je.keys && je.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    Nt = Ae.toString,
    Ht = RegExp(
      "^" +
        at
          .call($e)
          .replace(et, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Bt = I ? N.Buffer : void 0,
    Ft = N.Symbol,
    Qt = N.Uint8Array,
    sr = Ae.propertyIsEnumerable,
    Kr = Fe.splice,
    Yt = Ft ? Ft.toStringTag : void 0,
    ei = Object.getOwnPropertySymbols,
    wi = Bt ? Bt.isBuffer : void 0,
    Fi = Ve(Object.keys, Object),
    ct = yr(N, "DataView"),
    Qe = yr(N, "Map"),
    ut = yr(N, "Promise"),
    ht = yr(N, "Set"),
    it = yr(N, "WeakMap"),
    Ye = yr(Object, "create"),
    xt = ri(ct),
    Pt = ri(Qe),
    lt = ri(ut),
    St = ri(ht),
    ft = ri(it),
    yt = Ft ? Ft.prototype : void 0,
    pt = yt ? yt.valueOf : void 0;
  function He(v) {
    var P = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++P < q; ) {
      var W = v[P];
      this.set(W[0], W[1]);
    }
  }
  function Ot() {
    (this.__data__ = Ye ? Ye(null) : {}), (this.size = 0);
  }
  function At(v) {
    var P = this.has(v) && delete this.__data__[v];
    return (this.size -= P ? 1 : 0), P;
  }
  function ea(v) {
    var P = this.__data__;
    if (Ye) {
      var q = P[v];
      return q === s ? void 0 : q;
    }
    return $e.call(P, v) ? P[v] : void 0;
  }
  function ta(v) {
    var P = this.__data__;
    return Ye ? P[v] !== void 0 : $e.call(P, v);
  }
  function ra(v, P) {
    var q = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (q[v] = Ye && P === void 0 ? s : P),
      this
    );
  }
  (He.prototype.clear = Ot),
    (He.prototype.delete = At),
    (He.prototype.get = ea),
    (He.prototype.has = ta),
    (He.prototype.set = ra);
  function xr(v) {
    var P = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++P < q; ) {
      var W = v[P];
      this.set(W[0], W[1]);
    }
  }
  function ia() {
    (this.__data__ = []), (this.size = 0);
  }
  function na(v) {
    var P = this.__data__,
      q = Li(P, v);
    if (q < 0) return !1;
    var W = P.length - 1;
    return q == W ? P.pop() : Kr.call(P, q, 1), --this.size, !0;
  }
  function sa(v) {
    var P = this.__data__,
      q = Li(P, v);
    return q < 0 ? void 0 : P[q][1];
  }
  function oa(v) {
    return Li(this.__data__, v) > -1;
  }
  function aa(v, P) {
    var q = this.__data__,
      W = Li(q, v);
    return W < 0 ? (++this.size, q.push([v, P])) : (q[W][1] = P), this;
  }
  (xr.prototype.clear = ia),
    (xr.prototype.delete = na),
    (xr.prototype.get = sa),
    (xr.prototype.has = oa),
    (xr.prototype.set = aa);
  function ti(v) {
    var P = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++P < q; ) {
      var W = v[P];
      this.set(W[0], W[1]);
    }
  }
  function rn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new He(),
        map: new (Qe || xr)(),
        string: new He(),
      });
  }
  function ca(v) {
    var P = bi(this, v).delete(v);
    return (this.size -= P ? 1 : 0), P;
  }
  function nn(v) {
    return bi(this, v).get(v);
  }
  function ua(v) {
    return bi(this, v).has(v);
  }
  function ha(v, P) {
    var q = bi(this, v),
      W = q.size;
    return q.set(v, P), (this.size += q.size == W ? 0 : 1), this;
  }
  (ti.prototype.clear = rn),
    (ti.prototype.delete = ca),
    (ti.prototype.get = nn),
    (ti.prototype.has = ua),
    (ti.prototype.set = ha);
  function sn(v) {
    var P = -1,
      q = v == null ? 0 : v.length;
    for (this.__data__ = new ti(); ++P < q; ) this.add(v[P]);
  }
  function _s(v) {
    return this.__data__.set(v, s), this;
  }
  function Es(v) {
    return this.__data__.has(v);
  }
  (sn.prototype.add = sn.prototype.push = _s), (sn.prototype.has = Es);
  function Fr(v) {
    var P = (this.__data__ = new xr(v));
    this.size = P.size;
  }
  function la() {
    (this.__data__ = new xr()), (this.size = 0);
  }
  function fa(v) {
    var P = this.__data__,
      q = P.delete(v);
    return (this.size = P.size), q;
  }
  function pa(v) {
    return this.__data__.get(v);
  }
  function da(v) {
    return this.__data__.has(v);
  }
  function Is(v, P) {
    var q = this.__data__;
    if (q instanceof xr) {
      var W = q.__data__;
      if (!Qe || W.length < r - 1)
        return W.push([v, P]), (this.size = ++q.size), this;
      q = this.__data__ = new ti(W);
    }
    return q.set(v, P), (this.size = q.size), this;
  }
  (Fr.prototype.clear = la),
    (Fr.prototype.delete = fa),
    (Fr.prototype.get = pa),
    (Fr.prototype.has = da),
    (Fr.prototype.set = Is);
  function xs(v, P) {
    var q = cn(v),
      W = !q && Ls(v),
      Ue = !q && !W && Mn(v),
      de = !q && !W && !Ue && qs(v),
      Ge = q || W || Ue || de,
      Rt = Ge ? Et(v.length, String) : [],
      Pe = Rt.length;
    for (var ze in v)
      (P || $e.call(v, ze)) &&
        !(
          Ge &&
          (ze == "length" ||
            (Ue && (ze == "offset" || ze == "parent")) ||
            (de &&
              (ze == "buffer" || ze == "byteLength" || ze == "byteOffset")) ||
            Cs(ze, Pe))
        ) &&
        Rt.push(ze);
    return Rt;
  }
  function Li(v, P) {
    for (var q = v.length; q--; ) if (Fs(v[q][0], P)) return q;
    return -1;
  }
  function Fn(v, P, q) {
    var W = P(v);
    return cn(v) ? W : Re(W, q(v));
  }
  function Mi(v) {
    return v == null
      ? v === void 0
        ? _t
        : oe
      : Yt && Yt in Object(v)
      ? Rs(v)
      : va(v);
  }
  function Ln(v) {
    return qi(v) && Mi(v) == g;
  }
  function ji(v, P, q, W, Ue) {
    return v === P
      ? !0
      : v == null || P == null || (!qi(v) && !qi(P))
      ? v !== v && P !== P
      : Ps(v, P, q, W, ji, Ue);
  }
  function Ps(v, P, q, W, Ue, de) {
    var Ge = cn(v),
      Rt = cn(P),
      Pe = Ge ? m : Vr(v),
      ze = Rt ? m : Vr(P);
    (Pe = Pe == g ? ce : Pe), (ze = ze == g ? ce : ze);
    var vt = Pe == ce,
      or = ze == ce,
      Tt = Pe == ze;
    if (Tt && Mn(v)) {
      if (!Mn(P)) return !1;
      (Ge = !0), (vt = !1);
    }
    if (Tt && !vt)
      return (
        de || (de = new Fr()),
        Ge || qs(v) ? on(v, P, q, W, Ue, de) : ya(v, P, Pe, q, W, Ue, de)
      );
    if (!(q & o)) {
      var Je = vt && $e.call(v, "__wrapped__"),
        Xt = or && $e.call(P, "__wrapped__");
      if (Je || Xt) {
        var Lr = Je ? v.value() : v,
          Pr = Xt ? P.value() : P;
        return de || (de = new Fr()), Ue(Lr, Pr, q, W, de);
      }
    }
    return Tt ? (de || (de = new Fr()), As(v, P, q, W, Ue, de)) : !1;
  }
  function ga(v) {
    if (!js(v) || $s(v)) return !1;
    var P = un(v) ? Ht : ot;
    return P.test(ri(v));
  }
  function Ss(v) {
    return qi(v) && Ms(v.length) && !!Ee[Mi(v)];
  }
  function Os(v) {
    if (!Ds(v)) return Fi(v);
    var P = [];
    for (var q in Object(v)) $e.call(v, q) && q != "constructor" && P.push(q);
    return P;
  }
  function on(v, P, q, W, Ue, de) {
    var Ge = q & o,
      Rt = v.length,
      Pe = P.length;
    if (Rt != Pe && !(Ge && Pe > Rt)) return !1;
    var ze = de.get(v);
    if (ze && de.get(P)) return ze == P;
    var vt = -1,
      or = !0,
      Tt = q & u ? new sn() : void 0;
    for (de.set(v, P), de.set(P, v); ++vt < Rt; ) {
      var Je = v[vt],
        Xt = P[vt];
      if (W) var Lr = Ge ? W(Xt, Je, vt, P, v, de) : W(Je, Xt, vt, v, P, de);
      if (Lr !== void 0) {
        if (Lr) continue;
        or = !1;
        break;
      }
      if (Tt) {
        if (
          !Ie(P, function (Pr, Wr) {
            if (!tt(Tt, Wr) && (Je === Pr || Ue(Je, Pr, q, W, de)))
              return Tt.push(Wr);
          })
        ) {
          or = !1;
          break;
        }
      } else if (!(Je === Xt || Ue(Je, Xt, q, W, de))) {
        or = !1;
        break;
      }
    }
    return de.delete(v), de.delete(P), or;
  }
  function ya(v, P, q, W, Ue, de, Ge) {
    switch (q) {
      case zt:
        if (v.byteLength != P.byteLength || v.byteOffset != P.byteOffset)
          return !1;
        (v = v.buffer), (P = P.buffer);
      case Be:
        return !(v.byteLength != P.byteLength || !de(new Qt(v), new Qt(P)));
      case E:
      case x:
      case re:
        return Fs(+v, +P);
      case $:
        return v.name == P.name && v.message == P.message;
      case he:
      case Q:
        return v == P + "";
      case Y:
        var Rt = Ke;
      case pe:
        var Pe = W & o;
        if ((Rt || (Rt = rt), v.size != P.size && !Pe)) return !1;
        var ze = Ge.get(v);
        if (ze) return ze == P;
        (W |= u), Ge.set(v, P);
        var vt = on(Rt(v), Rt(P), W, Ue, de, Ge);
        return Ge.delete(v), vt;
      case ve:
        if (pt) return pt.call(v) == pt.call(P);
    }
    return !1;
  }
  function As(v, P, q, W, Ue, de) {
    var Ge = q & o,
      Rt = an(v),
      Pe = Rt.length,
      ze = an(P),
      vt = ze.length;
    if (Pe != vt && !Ge) return !1;
    for (var or = Pe; or--; ) {
      var Tt = Rt[or];
      if (!(Ge ? Tt in P : $e.call(P, Tt))) return !1;
    }
    var Je = de.get(v);
    if (Je && de.get(P)) return Je == P;
    var Xt = !0;
    de.set(v, P), de.set(P, v);
    for (var Lr = Ge; ++or < Pe; ) {
      Tt = Rt[or];
      var Pr = v[Tt],
        Wr = P[Tt];
      if (W) var jn = Ge ? W(Wr, Pr, Tt, P, v, de) : W(Pr, Wr, Tt, v, P, de);
      if (!(jn === void 0 ? Pr === Wr || Ue(Pr, Wr, q, W, de) : jn)) {
        Xt = !1;
        break;
      }
      Lr || (Lr = Tt == "constructor");
    }
    if (Xt && !Lr) {
      var Ui = v.constructor,
        Lt = P.constructor;
      Ui != Lt &&
        "constructor" in v &&
        "constructor" in P &&
        !(
          typeof Ui == "function" &&
          Ui instanceof Ui &&
          typeof Lt == "function" &&
          Lt instanceof Lt
        ) &&
        (Xt = !1);
    }
    return de.delete(v), de.delete(P), Xt;
  }
  function an(v) {
    return Fn(v, ba, Ts);
  }
  function bi(v, P) {
    var q = v.__data__;
    return Ns(P) ? q[typeof P == "string" ? "string" : "hash"] : q.map;
  }
  function yr(v, P) {
    var q = Ce(v, P);
    return ga(q) ? q : void 0;
  }
  function Rs(v) {
    var P = $e.call(v, Yt),
      q = v[Yt];
    try {
      v[Yt] = void 0;
      var W = !0;
    } catch {}
    var Ue = Nt.call(v);
    return W && (P ? (v[Yt] = q) : delete v[Yt]), Ue;
  }
  var Ts = ei
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              Oe(ei(v), function (P) {
                return sr.call(v, P);
              }));
        }
      : qe,
    Vr = Mi;
  ((ct && Vr(new ct(new ArrayBuffer(1))) != zt) ||
    (Qe && Vr(new Qe()) != Y) ||
    (ut && Vr(ut.resolve()) != ae) ||
    (ht && Vr(new ht()) != pe) ||
    (it && Vr(new it()) != st)) &&
    (Vr = function (v) {
      var P = Mi(v),
        q = P == ce ? v.constructor : void 0,
        W = q ? ri(q) : "";
      if (W)
        switch (W) {
          case xt:
            return zt;
          case Pt:
            return Y;
          case lt:
            return ae;
          case St:
            return pe;
          case ft:
            return st;
        }
      return P;
    });
  function Cs(v, P) {
    return (
      (P = P ?? f),
      !!P &&
        (typeof v == "number" || Di.test(v)) &&
        v > -1 &&
        v % 1 == 0 &&
        v < P
    );
  }
  function Ns(v) {
    var P = typeof v;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function $s(v) {
    return !!It && It in v;
  }
  function Ds(v) {
    var P = v && v.constructor,
      q = (typeof P == "function" && P.prototype) || Ae;
    return v === q;
  }
  function va(v) {
    return Nt.call(v);
  }
  function ri(v) {
    if (v != null) {
      try {
        return at.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function Fs(v, P) {
    return v === P || (v !== v && P !== P);
  }
  var Ls = Ln(
      (function () {
        return arguments;
      })()
    )
      ? Ln
      : function (v) {
          return qi(v) && $e.call(v, "callee") && !sr.call(v, "callee");
        },
    cn = Array.isArray;
  function ma(v) {
    return v != null && Ms(v.length) && !un(v);
  }
  var Mn = wi || Le;
  function wa(v, P) {
    return ji(v, P);
  }
  function un(v) {
    if (!js(v)) return !1;
    var P = Mi(v);
    return P == L || P == T || P == y || P == te;
  }
  function Ms(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= f;
  }
  function js(v) {
    var P = typeof v;
    return v != null && (P == "object" || P == "function");
  }
  function qi(v) {
    return v != null && typeof v == "object";
  }
  var qs = me ? gt(me) : Ss;
  function ba(v) {
    return ma(v) ? xs(v) : Os(v);
  }
  function qe() {
    return [];
  }
  function Le() {
    return !1;
  }
  n.exports = wa;
})(CE, ko);
function NE(n, t) {
  if (n.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++) r[s] = 255;
  for (var o = 0; o < n.length; o++) {
    var u = n.charAt(o),
      f = u.charCodeAt(0);
    if (r[f] !== 255) throw new TypeError(u + " is ambiguous");
    r[f] = o;
  }
  var g = n.length,
    m = n.charAt(0),
    y = Math.log(g) / Math.log(256),
    E = Math.log(256) / Math.log(g);
  function x(T) {
    if (
      (T instanceof Uint8Array ||
        (ArrayBuffer.isView(T)
          ? (T = new Uint8Array(T.buffer, T.byteOffset, T.byteLength))
          : Array.isArray(T) && (T = Uint8Array.from(T))),
      !(T instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (T.length === 0) return "";
    for (var Y = 0, re = 0, oe = 0, ce = T.length; oe !== ce && T[oe] === 0; )
      oe++, Y++;
    for (
      var ae = ((ce - oe) * E + 1) >>> 0, te = new Uint8Array(ae);
      oe !== ce;

    ) {
      for (
        var he = T[oe], pe = 0, Q = ae - 1;
        (he !== 0 || pe < re) && Q !== -1;
        Q--, pe++
      )
        (he += (256 * te[Q]) >>> 0),
          (te[Q] = he % g >>> 0),
          (he = (he / g) >>> 0);
      if (he !== 0) throw new Error("Non-zero carry");
      (re = pe), oe++;
    }
    for (var ve = ae - re; ve !== ae && te[ve] === 0; ) ve++;
    for (var _t = m.repeat(Y); ve < ae; ++ve) _t += n.charAt(te[ve]);
    return _t;
  }
  function $(T) {
    if (typeof T != "string") throw new TypeError("Expected String");
    if (T.length === 0) return new Uint8Array();
    var Y = 0;
    if (T[Y] !== " ") {
      for (var re = 0, oe = 0; T[Y] === m; ) re++, Y++;
      for (
        var ce = ((T.length - Y) * y + 1) >>> 0, ae = new Uint8Array(ce);
        T[Y];

      ) {
        var te = r[T.charCodeAt(Y)];
        if (te === 255) return;
        for (
          var he = 0, pe = ce - 1;
          (te !== 0 || he < oe) && pe !== -1;
          pe--, he++
        )
          (te += (g * ae[pe]) >>> 0),
            (ae[pe] = te % 256 >>> 0),
            (te = (te / 256) >>> 0);
        if (te !== 0) throw new Error("Non-zero carry");
        (oe = he), Y++;
      }
      if (T[Y] !== " ") {
        for (var Q = ce - oe; Q !== ce && ae[Q] === 0; ) Q++;
        for (var ve = new Uint8Array(re + (ce - Q)), _t = re; Q !== ce; )
          ve[_t++] = ae[Q++];
        return ve;
      }
    }
  }
  function L(T) {
    var Y = $(T);
    if (Y) return Y;
    throw new Error(`Non-${t} character`);
  }
  return { encode: x, decodeUnsafe: $, decode: L };
}
var $E = NE,
  DE = $E;
const Cp = (n) => {
    if (n instanceof Uint8Array && n.constructor.name === "Uint8Array")
      return n;
    if (n instanceof ArrayBuffer) return new Uint8Array(n);
    if (ArrayBuffer.isView(n))
      return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  FE = (n) => new TextEncoder().encode(n),
  LE = (n) => new TextDecoder().decode(n);
class ME {
  constructor(t, r, s) {
    (this.name = t), (this.prefix = r), (this.baseEncode = s);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class jE {
  constructor(t, r, s) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = s);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Np(this, t);
  }
}
let qE = class {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Np(this, t);
  }
  decode(t) {
    const r = t[0],
      s = this.decoders[r];
    if (s) return s.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
};
const Np = (n, t) =>
  new qE({
    ...(n.decoders || { [n.prefix]: n }),
    ...(t.decoders || { [t.prefix]: t }),
  });
class UE {
  constructor(t, r, s, o) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new ME(t, r, s)),
      (this.decoder = new jE(t, r, o));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Xo = ({ name: n, prefix: t, encode: r, decode: s }) => new UE(n, t, r, s),
  bs = ({ prefix: n, name: t, alphabet: r }) => {
    const { encode: s, decode: o } = DE(r, t);
    return Xo({ prefix: n, name: t, encode: s, decode: (u) => Cp(o(u)) });
  },
  zE = (n, t, r, s) => {
    const o = {};
    for (let E = 0; E < t.length; ++E) o[t[E]] = E;
    let u = n.length;
    for (; n[u - 1] === "="; ) --u;
    const f = new Uint8Array(((u * r) / 8) | 0);
    let g = 0,
      m = 0,
      y = 0;
    for (let E = 0; E < u; ++E) {
      const x = o[n[E]];
      if (x === void 0) throw new SyntaxError(`Non-${s} character`);
      (m = (m << r) | x),
        (g += r),
        g >= 8 && ((g -= 8), (f[y++] = 255 & (m >> g)));
    }
    if (g >= r || 255 & (m << (8 - g)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  kE = (n, t, r) => {
    const s = t[t.length - 1] === "=",
      o = (1 << r) - 1;
    let u = "",
      f = 0,
      g = 0;
    for (let m = 0; m < n.length; ++m)
      for (g = (g << 8) | n[m], f += 8; f > r; )
        (f -= r), (u += t[o & (g >> f)]);
    if ((f && (u += t[o & (g << (r - f))]), s))
      for (; (u.length * r) & 7; ) u += "=";
    return u;
  },
  Vt = ({ name: n, prefix: t, bitsPerChar: r, alphabet: s }) =>
    Xo({
      prefix: t,
      name: n,
      encode(o) {
        return kE(o, s, r);
      },
      decode(o) {
        return zE(o, s, r, n);
      },
    }),
  HE = Xo({
    prefix: "\0",
    name: "identity",
    encode: (n) => LE(n),
    decode: (n) => FE(n),
  });
var BE = Object.freeze({ __proto__: null, identity: HE });
const KE = Vt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var VE = Object.freeze({ __proto__: null, base2: KE });
const WE = Vt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var GE = Object.freeze({ __proto__: null, base8: WE });
const JE = bs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var QE = Object.freeze({ __proto__: null, base10: JE });
const YE = Vt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  XE = Vt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var ZE = Object.freeze({ __proto__: null, base16: YE, base16upper: XE });
const eI = Vt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  tI = Vt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  rI = Vt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  iI = Vt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  nI = Vt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  sI = Vt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  oI = Vt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  aI = Vt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  cI = Vt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var uI = Object.freeze({
  __proto__: null,
  base32: eI,
  base32upper: tI,
  base32pad: rI,
  base32padupper: iI,
  base32hex: nI,
  base32hexupper: sI,
  base32hexpad: oI,
  base32hexpadupper: aI,
  base32z: cI,
});
const hI = bs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  lI = bs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var fI = Object.freeze({ __proto__: null, base36: hI, base36upper: lI });
const pI = bs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  dI = bs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var gI = Object.freeze({ __proto__: null, base58btc: pI, base58flickr: dI });
const yI = Vt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  vI = Vt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  mI = Vt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  wI = Vt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var bI = Object.freeze({
  __proto__: null,
  base64: yI,
  base64pad: vI,
  base64url: mI,
  base64urlpad: wI,
});
const $p = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  _I = $p.reduce((n, t, r) => ((n[r] = t), n), []),
  EI = $p.reduce((n, t, r) => ((n[t.codePointAt(0)] = r), n), []);
function II(n) {
  return n.reduce((t, r) => ((t += _I[r]), t), "");
}
function xI(n) {
  const t = [];
  for (const r of n) {
    const s = EI[r.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const PI = Xo({ prefix: "🚀", name: "base256emoji", encode: II, decode: xI });
var SI = Object.freeze({ __proto__: null, base256emoji: PI }),
  OI = Dp,
  sf = 128,
  AI = 127,
  RI = ~AI,
  TI = Math.pow(2, 31);
function Dp(n, t, r) {
  (t = t || []), (r = r || 0);
  for (var s = r; n >= TI; ) (t[r++] = (n & 255) | sf), (n /= 128);
  for (; n & RI; ) (t[r++] = (n & 255) | sf), (n >>>= 7);
  return (t[r] = n | 0), (Dp.bytes = r - s + 1), t;
}
var CI = Gc,
  NI = 128,
  of = 127;
function Gc(n, s) {
  var r = 0,
    s = s || 0,
    o = 0,
    u = s,
    f,
    g = n.length;
  do {
    if (u >= g)
      throw ((Gc.bytes = 0), new RangeError("Could not decode varint"));
    (f = n[u++]),
      (r += o < 28 ? (f & of) << o : (f & of) * Math.pow(2, o)),
      (o += 7);
  } while (f >= NI);
  return (Gc.bytes = u - s), r;
}
var $I = Math.pow(2, 7),
  DI = Math.pow(2, 14),
  FI = Math.pow(2, 21),
  LI = Math.pow(2, 28),
  MI = Math.pow(2, 35),
  jI = Math.pow(2, 42),
  qI = Math.pow(2, 49),
  UI = Math.pow(2, 56),
  zI = Math.pow(2, 63),
  kI = function (n) {
    return n < $I
      ? 1
      : n < DI
      ? 2
      : n < FI
      ? 3
      : n < LI
      ? 4
      : n < MI
      ? 5
      : n < jI
      ? 6
      : n < qI
      ? 7
      : n < UI
      ? 8
      : n < zI
      ? 9
      : 10;
  },
  HI = { encode: OI, decode: CI, encodingLength: kI },
  Fp = HI;
const af = (n, t, r = 0) => (Fp.encode(n, t, r), t),
  cf = (n) => Fp.encodingLength(n),
  Jc = (n, t) => {
    const r = t.byteLength,
      s = cf(n),
      o = s + cf(r),
      u = new Uint8Array(o + r);
    return af(n, u, 0), af(r, u, s), u.set(t, o), new BI(n, r, t, u);
  };
class BI {
  constructor(t, r, s, o) {
    (this.code = t), (this.size = r), (this.digest = s), (this.bytes = o);
  }
}
const Lp = ({ name: n, code: t, encode: r }) => new KI(n, t, r);
class KI {
  constructor(t, r, s) {
    (this.name = t), (this.code = r), (this.encode = s);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array
        ? Jc(this.code, r)
        : r.then((s) => Jc(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Mp = (n) => async (t) => new Uint8Array(await crypto.subtle.digest(n, t)),
  VI = Lp({ name: "sha2-256", code: 18, encode: Mp("SHA-256") }),
  WI = Lp({ name: "sha2-512", code: 19, encode: Mp("SHA-512") });
var GI = Object.freeze({ __proto__: null, sha256: VI, sha512: WI });
const jp = 0,
  JI = "identity",
  qp = Cp,
  QI = (n) => Jc(jp, qp(n)),
  YI = { code: jp, name: JI, encode: qp, digest: QI };
var XI = Object.freeze({ __proto__: null, identity: YI });
new TextEncoder(), new TextDecoder();
const uf = {
  ...BE,
  ...VE,
  ...GE,
  ...QE,
  ...ZE,
  ...uI,
  ...fI,
  ...gI,
  ...bI,
  ...SI,
};
({ ...GI, ...XI });
function Up(n) {
  return globalThis.Buffer != null
    ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
    : n;
}
function ZI(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Up(globalThis.Buffer.allocUnsafe(n))
    : new Uint8Array(n);
}
function zp(n, t, r, s) {
  return {
    name: n,
    prefix: t,
    encoder: { name: n, prefix: t, encode: r },
    decoder: { decode: s },
  };
}
const hf = zp(
    "utf8",
    "u",
    (n) => "u" + new TextDecoder("utf8").decode(n),
    (n) => new TextEncoder().encode(n.substring(1))
  ),
  Nc = zp(
    "ascii",
    "a",
    (n) => {
      let t = "a";
      for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
      return t;
    },
    (n) => {
      n = n.substring(1);
      const t = ZI(n.length);
      for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
      return t;
    }
  ),
  ex = {
    utf8: hf,
    "utf-8": hf,
    hex: uf.base16,
    latin1: Nc,
    ascii: Nc,
    binary: Nc,
    ...uf,
  };
function tx(n, t = "utf8") {
  const r = ex[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Up(globalThis.Buffer.from(n, "utf-8"))
    : r.decoder.decode(`${r.prefix}${n}`);
}
const kp = "wc",
  rx = 2,
  fu = "core",
  Ci = `${kp}@2:${fu}:`,
  ix = { name: fu, logger: "error" },
  nx = { database: ":memory:" },
  sx = "crypto",
  lf = "client_ed25519_seed",
  ox = ee.ONE_DAY,
  ax = "keychain",
  cx = "0.3",
  ux = "messages",
  hx = "0.3",
  lx = ee.SIX_HOURS,
  fx = "publisher",
  Hp = "irn",
  px = "error",
  Bp = "wss://relay.walletconnect.com",
  ff = "wss://relay.walletconnect.org",
  dx = "relayer",
  Jt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  gx = "_subscription",
  di = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  yx = ee.ONE_SECOND,
  vx = "2.10.6",
  mx = 1e4,
  wx = "0.3",
  bx = "WALLETCONNECT_CLIENT_ID",
  zr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  _x = "subscription",
  Ex = "0.3",
  Ix = ee.FIVE_SECONDS * 1e3,
  xx = "pairing",
  Px = "0.3",
  rs = {
    wc_pairingDelete: {
      req: { ttl: ee.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ee.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ee.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ee.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ee.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ee.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  cs = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Yr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  Sx = "history",
  Ox = "0.3",
  Ax = "expirer",
  $r = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  Rx = "0.3",
  $c = "verify-api",
  Sn = "https://verify.walletconnect.com",
  Qc = "https://verify.walletconnect.org",
  Tx = [Sn, Qc];
class Cx {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = ax),
      (this.version = cx),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: u } = K("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(u);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = t),
      (this.logger = Ir(r, this.name));
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, cp(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? up(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Nx {
  constructor(t, r, s) {
    (this.core = t),
      (this.logger = r),
      (this.name = sx),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          u = Ql(o);
        return Ip(u.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = mw();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const u = await this.getClientSeed(),
          f = Ql(u),
          g = Bc();
        return await uE(g, o, ox, f);
      }),
      (this.generateSharedKey = (o, u, f) => {
        this.isInitialized();
        const g = this.getPrivateKey(o),
          m = ww(g, u);
        return this.setSymKey(m, f);
      }),
      (this.setSymKey = async (o, u) => {
        this.isInitialized();
        const f = u || bw(o);
        return await this.keychain.set(f, o), f;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, u, f) => {
        this.isInitialized();
        const g = ap(f),
          m = Yi(u);
        if (Pl(g)) {
          const $ = g.senderPublicKey,
            L = g.receiverPublicKey;
          o = await this.generateSharedKey($, L);
        }
        const y = this.getSymKey(o),
          { type: E, senderPublicKey: x } = g;
        return Ew({ type: E, symKey: y, message: m, senderPublicKey: x });
      }),
      (this.decode = async (o, u, f) => {
        this.isInitialized();
        const g = Pw(u, f);
        if (Pl(g)) {
          const m = g.receiverPublicKey,
            y = g.senderPublicKey;
          o = await this.generateSharedKey(m, y);
        }
        try {
          const m = this.getSymKey(o),
            y = Iw({ symKey: m, encoded: u });
          return ms(y);
        } catch (m) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(m);
        }
      }),
      (this.getPayloadType = (o) => {
        const u = qo(o);
        return gs(u.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const u = qo(o);
        return u.senderPublicKey ? nr(u.senderPublicKey, ir) : void 0;
      }),
      (this.core = t),
      (this.logger = Ir(r, this.name)),
      (this.keychain = s || new Cx(this.core, this.logger));
  }
  get context() {
    return gr(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(lf);
    } catch {
      (t = Bc()), await this.keychain.set(lf, t);
    }
    return tx(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class $x extends z_ {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = ux),
      (this.version = hx),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const u = An(o);
        let f = this.messages.get(s);
        return (
          typeof f > "u" && (f = {}),
          typeof f[u] < "u" ||
            ((f[u] = o), this.messages.set(s, f), await this.persist()),
          u
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const u = this.get(s),
          f = An(o);
        return typeof u[f] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = Ir(t, this.name)),
      (this.core = r);
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, cp(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? up(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Dx extends k_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new Ut.EventEmitter()),
      (this.name = fx),
      (this.queue = new Map()),
      (this.publishTimeout = ee.toMiliseconds(ee.TEN_SECONDS)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, u) => {
        var f;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: u },
          });
        try {
          const g = (u == null ? void 0 : u.ttl) || lx,
            m = Kc(u),
            y = (u == null ? void 0 : u.prompt) || !1,
            E = (u == null ? void 0 : u.tag) || 0,
            x = (u == null ? void 0 : u.id) || Ap().toString(),
            $ = {
              topic: s,
              message: o,
              opts: { ttl: g, relay: m, prompt: y, tag: E, id: x },
            },
            L = setTimeout(() => this.queue.set(x, $), this.publishTimeout);
          try {
            await await ls(
              this.rpcPublish(s, o, g, m, y, E, x),
              this.publishTimeout,
              "Failed to publish payload, please try again."
            ),
              this.removeRequestFromQueue(x),
              this.relayer.events.emit(Jt.publish, $);
          } catch (T) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (f = u == null ? void 0 : u.internal) != null &&
                f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(x), T);
            return;
          } finally {
            clearTimeout(L);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: u },
            });
        } catch (g) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(g),
            g)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = t),
      (this.logger = Ir(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return gr(this.logger);
  }
  rpcPublish(t, r, s, o, u, f, g) {
    var m, y, E, x;
    const $ = {
      method: Do(o.protocol).publish,
      params: { topic: t, message: r, ttl: s, prompt: u, tag: f },
      id: g,
    };
    return (
      rr((m = $.params) == null ? void 0 : m.prompt) &&
        ((y = $.params) == null || delete y.prompt),
      rr((E = $.params) == null ? void 0 : E.tag) &&
        ((x = $.params) == null || delete x.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: $ }),
      this.relayer.request($)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: o } = t;
      await this.publish(r, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Dn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(Jt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(Jt.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class Fx {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const s = this.get(t);
        this.exists(t, r) || this.map.set(t, [...s, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > "u") {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const s = this.get(t);
        if (!this.exists(t, r)) return;
        const o = s.filter((u) => u !== r);
        if (!o.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Lx = Object.defineProperty,
  Mx = Object.defineProperties,
  jx = Object.getOwnPropertyDescriptors,
  pf = Object.getOwnPropertySymbols,
  qx = Object.prototype.hasOwnProperty,
  Ux = Object.prototype.propertyIsEnumerable,
  df = (n, t, r) =>
    t in n
      ? Lx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  is = (n, t) => {
    for (var r in t || (t = {})) qx.call(t, r) && df(n, r, t[r]);
    if (pf) for (var r of pf(t)) Ux.call(t, r) && df(n, r, t[r]);
    return n;
  },
  Dc = (n, t) => Mx(n, jx(t));
class zx extends K_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new Fx()),
      (this.events = new Ut.EventEmitter()),
      (this.name = _x),
      (this.version = Ex),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Ci),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const u = Kc(o),
            f = { topic: s, relay: u };
          this.pending.set(s, f);
          const g = await this.rpcSubscribe(s, u);
          return (
            this.onSubscribe(g, f),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            g
          );
        } catch (u) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(u),
            u)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (o == null ? void 0 : o.id) < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) =>
        this.topics.includes(s)
          ? !0
          : await new Promise((o, u) => {
              const f = new ee.Watch();
              f.start(this.pendingSubscriptionWatchLabel);
              const g = setInterval(() => {
                !this.pending.has(s) &&
                  this.topics.includes(s) &&
                  (clearInterval(g),
                  f.stop(this.pendingSubscriptionWatchLabel),
                  o(!0)),
                  f.elapsed(this.pendingSubscriptionWatchLabel) >= Ix &&
                    (clearInterval(g),
                    f.stop(this.pendingSubscriptionWatchLabel),
                    u(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1)),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = t),
      (this.logger = Ir(r, this.name)),
      (this.clientId = "");
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(t, o, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: t, id: r, opts: s },
      });
    try {
      const o = Kc(s);
      await this.rpcUnsubscribe(t, r, o);
      const u = bt("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, u),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: t, id: r, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: Do(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await ls(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(Jt.connection_stalled);
    }
    return An(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay,
      s = {
        method: Do(r.protocol).batchSubscribe,
        params: { topics: t.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await ls(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(Jt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const o = {
      method: Do(s.protocol).unsubscribe,
      params: { topic: t, id: r },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Dc(is({}, r), { id: t })),
      this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, is({}, r)), this.pending.delete(r.topic);
      });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r),
      this.hasSubscription(r, t) && this.deleteSubscription(r, s),
      await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: t,
        subscription: r,
      }),
      this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, is({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(zr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = K("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: t,
        reason: r,
      });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(s.topic, t),
      this.events.emit(zr.deleted, Dc(is({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(zr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(zr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = K("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(r),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(r))
        );
      }
      (this.cached = t),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    Zr(r) &&
      this.onBatchSubscribe(r.map((s, o) => Dc(is({}, t[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }),
      await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Dn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(Jt.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(Jt.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(zr.created, async (t) => {
        const r = zr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      }),
      this.events.on(zr.deleted, async (t) => {
        const r = zr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.restartInProgress || (clearInterval(r), t());
        }, this.pollingInterval);
      }));
  }
}
var kx = Object.defineProperty,
  gf = Object.getOwnPropertySymbols,
  Hx = Object.prototype.hasOwnProperty,
  Bx = Object.prototype.propertyIsEnumerable,
  yf = (n, t, r) =>
    t in n
      ? kx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Kx = (n, t) => {
    for (var r in t || (t = {})) Hx.call(t, r) && yf(n, r, t[r]);
    if (gf) for (var r of gf(t)) Bx.call(t, r) && yf(n, r, t[r]);
    return n;
  };
class Vx extends H_ {
  constructor(t) {
    super(t),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Ut.EventEmitter()),
      (this.name = dx),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.request = async (r) => {
        this.logger.debug("Publishing Request Payload");
        try {
          return (
            await this.toEstablishConnection(), await this.provider.request(r)
          );
        } catch (s) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(s),
            s)
          );
        }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(Jt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(Jt.error, r),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(di.payload, this.onPayloadHandler),
          this.provider.on(di.connect, this.onConnectHandler),
          this.provider.on(di.disconnect, this.onDisconnectHandler),
          this.provider.on(di.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < "u" && typeof t.logger != "string"
          ? Ir(t.logger, this.name)
          : Wo(Jo({ level: t.logger || px }))),
      (this.messages = new $x(this.logger, t.core)),
      (this.subscriber = new zx(this, this.logger)),
      (this.publisher = new Dx(this, this.logger)),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Bp),
      (this.projectId = t.projectId),
      (this.bundleId = Cw()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ff}...`
      ),
        await this.restartTransport(ff);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, mx);
  }
  get context() {
    return gr(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(),
      await this.publisher.publish(t, r, s),
      await this.recordMessageEvent({
        topic: t,
        message: r,
        publishedAt: Date.now(),
      });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let u;
    const f = (g) => {
      g.topic === t && (this.subscriber.off(zr.created, f), u());
    };
    return (
      await Promise.all([
        new Promise((g) => {
          (u = g), this.subscriber.on(zr.created, f);
        }),
        new Promise(async (g) => {
          (o = await this.subscriber.subscribe(t, r)), g();
        }),
      ]),
      o
    );
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await ls(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(t) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      t &&
        t !== this.relayUrl &&
        ((this.relayUrl = t),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((r) => {
            if (!this.initialized) return r();
            this.subscriber.once(zr.resubscribed, () => {
              r();
            });
          }),
          new Promise(async (r, s) => {
            try {
              await ls(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            r();
          }),
        ]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message)) throw r;
        this.provider.events.emit(di.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = t || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await Ll()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new vi(
      new TE(
        Mw({
          sdkVersion: vx,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(r)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0
      );
    const o = this.messages.has(r, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(t) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: t }),
      lu(t))
    ) {
      if (!t.method.endsWith(gx)) return;
      const r = t.params,
        { topic: s, message: o, publishedAt: u } = r.data,
        f = { topic: s, message: o, publishedAt: u };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(Kx({ type: "event", event: r.id }, f)),
        this.events.emit(r.id, f),
        await this.acknowledgePayload(t),
        await this.onMessageEvent(f);
    } else Yo(t) && this.events.emit(Jt.message_ack, t);
  }
  async onMessageEvent(t) {
    (await this.shouldIgnoreMessageEvent(t)) ||
      (this.events.emit(Jt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = hu(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(di.payload, this.onPayloadHandler),
      this.provider.off(di.connect, this.onConnectHandler),
      this.provider.off(di.disconnect, this.onDisconnectHandler),
      this.provider.off(di.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Jt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Ll();
    Rb(async (r) => {
      this.initialized &&
        t !== r &&
        ((t = r),
        r
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Jt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((t) => this.logger.error(t));
      }, ee.toMiliseconds(yx)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var Wx = Object.defineProperty,
  vf = Object.getOwnPropertySymbols,
  Gx = Object.prototype.hasOwnProperty,
  Jx = Object.prototype.propertyIsEnumerable,
  mf = (n, t, r) =>
    t in n
      ? Wx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  wf = (n, t) => {
    for (var r in t || (t = {})) Gx.call(t, r) && mf(n, r, t[r]);
    if (vf) for (var r of vf(t)) Jx.call(t, r) && mf(n, r, t[r]);
    return n;
  };
class Zo extends B_ {
  constructor(t, r, s, o = Ci, u = void 0) {
    super(t, r, s, o),
      (this.core = t),
      (this.logger = r),
      (this.name = s),
      (this.map = new Map()),
      (this.version = wx),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !rr(f)
              ? this.map.set(this.getKey(f), f)
              : ob(f)
              ? this.map.set(f.id, f)
              : ab(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, g) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, g)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: g,
              }),
              this.map.set(f, g),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f
          ? this.values.filter((g) =>
              Object.keys(f).every((m) => ko(g[m], f[m]))
            )
          : this.values
      )),
      (this.update = async (f, g) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: f,
            update: g,
          });
        const m = wf(wf({}, this.getData(f)), g);
        this.map.set(f, m), await this.persist();
      }),
      (this.delete = async (f, g) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: f,
              reason: g,
            }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = Ir(r, this.name)),
      (this.storagePrefix = o),
      (this.getKey = u);
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = K("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length) return;
      if (this.map.size) {
        const { message: r } = K("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Qx {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = xx),
      (this.version = Px),
      (this.events = new Ut()),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.ignoredPayloadTypes = [Xi]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Bc(),
          o = await this.core.crypto.setSymKey(s),
          u = kr(ee.FIVE_MINUTES),
          f = { protocol: Hp },
          g = { topic: o, expiry: u, relay: f, active: !1 },
          m = Qw({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: f,
          });
        return (
          await this.pairings.set(o, g),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, u),
          { topic: o, uri: m }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: u, relay: f } = Cl(s.uri);
        let g;
        if (
          this.pairings.keys.includes(o) &&
          ((g = this.pairings.get(o)), g.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const m = kr(ee.FIVE_MINUTES),
          y = { topic: o, relay: f, expiry: m, active: !1 };
        return (
          await this.pairings.set(o, y),
          this.core.expirer.set(o, m),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(cs.create, y),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(u, o),
            await this.core.relayer.subscribe(o, { relay: f })),
          y
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = kr(ee.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const u = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: f, resolve: g, reject: m } = Pn();
          this.events.once(Ct("pairing_ping", u), ({ error: y }) => {
            y ? m(y) : g();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            bt("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, u) => {
        const f = Tn(o, u),
          g = await this.core.crypto.encode(s, f),
          m = rs[o].req;
        return (
          this.core.history.set(s, f), this.core.relayer.publish(s, g, m), f.id
        );
      }),
      (this.sendResult = async (s, o, u) => {
        const f = hu(s, u),
          g = await this.core.crypto.encode(o, f),
          m = await this.core.history.get(o, s),
          y = rs[m.request.method].res;
        await this.core.relayer.publish(o, g, y),
          await this.core.history.resolve(f);
      }),
      (this.sendError = async (s, o, u) => {
        const f = Qo(s, u),
          g = await this.core.crypto.encode(o, f),
          m = await this.core.history.get(o, s),
          y = rs[m.request.method]
            ? rs[m.request.method].res
            : rs.unregistered_method.res;
        await this.core.relayer.publish(o, g, y),
          await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, bt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => Ti(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: u } = s;
        switch (u.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, u);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, u);
          default:
            return this.onUnknownRpcMethodRequest(o, u);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: u } = s,
          f = (await this.core.history.get(o, u.id)).request.method;
        switch (f) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, u);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: u } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(u, s, !0),
            this.events.emit(cs.ping, { id: u, topic: s });
        } catch (f) {
          await this.sendError(u, s, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: u } = o;
        setTimeout(() => {
          yi(o)
            ? this.events.emit(Ct("pairing_ping", u), {})
            : Hr(o) &&
              this.events.emit(Ct("pairing_ping", u), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: u } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(cs.delete, { id: u, topic: s });
        } catch (f) {
          await this.sendError(u, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: u, method: f } = o;
        try {
          if (this.registeredMethods.includes(f)) return;
          const g = bt("WC_METHOD_UNSUPPORTED", f);
          await this.sendError(u, s, g), this.logger.error(g);
        } catch (g) {
          await this.sendError(u, s, g), this.logger.error(g);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error(bt("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!pr(s)) {
          const { message: f } = K("MISSING_OR_INVALID", `pair() params: ${s}`);
          throw new Error(f);
        }
        if (!sb(s.uri)) {
          const { message: f } = K(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(f);
        }
        const u = Cl(s.uri);
        if (!((o = u == null ? void 0 : u.relay) != null && o.protocol)) {
          const { message: f } = K(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(f);
        }
        if (!(u != null && u.symKey)) {
          const { message: f } = K("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!pr(s)) {
          const { message: u } = K("MISSING_OR_INVALID", `ping() params: ${s}`);
          throw new Error(u);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!pr(s)) {
          const { message: u } = K(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(u);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!qt(s, !1)) {
          const { message: o } = K(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = K(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (Ti(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = K("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = t),
      (this.logger = Ir(r, this.name)),
      (this.pairings = new Zo(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return gr(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Jt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (
        !this.pairings.keys.includes(r) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(r, s);
      try {
        lu(o)
          ? (this.core.history.set(r, o),
            this.onRelayEventRequest({ topic: r, payload: o }))
          : Yo(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: r, payload: o }),
            this.core.history.delete(r, o.id));
      } catch (u) {
        this.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on($r.expired, async (t) => {
      const { topic: r } = lp(t.target);
      r &&
        this.pairings.keys.includes(r) &&
        (await this.deletePairing(r, !0),
        this.events.emit(cs.expire, { topic: r }));
    });
  }
}
class Yx extends U_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new Ut.EventEmitter()),
      (this.name = Sx),
      (this.version = Ox),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, u) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: u,
          }),
          this.records.has(o.id))
        )
          return;
        const f = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: u,
          expiry: kr(ee.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(Yr.created, f);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Hr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(Yr.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((u) => {
            if (u.topic === s) {
              if (typeof o < "u" && u.id !== o) return;
              this.records.delete(u.id), this.events.emit(Yr.deleted, u);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Ir(r, this.name));
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < "u") return;
        const s = {
          topic: r.topic,
          request: Tn(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(s);
      }),
      t
    );
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = K("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Yr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length) return;
      if (this.records.size) {
        const { message: r } = K("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Yr.created, (t) => {
      const r = Yr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: "event", event: r, record: t }),
        this.persist();
    }),
      this.events.on(Yr.updated, (t) => {
        const r = Yr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.events.on(Yr.deleted, (t) => {
        const r = Yr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.core.heartbeat.on(Dn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        ee.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Xx extends V_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new Ut.EventEmitter()),
      (this.name = Ax),
      (this.version = Rx),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ci),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const u = this.formatTarget(s),
          f = { target: u, expiry: o };
        this.expirations.set(u, f),
          this.checkExpiry(u, f),
          this.events.emit($r.created, { target: u, expiration: f });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            u = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit($r.deleted, { target: o, expiration: u });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Ir(r, this.name));
  }
  get context() {
    return gr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return jw(t);
    if (typeof t == "number") return qw(t);
    const { message: r } = K("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit($r.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = K("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = K("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    ee.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t),
      this.events.emit($r.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Dn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on($r.created, (t) => {
        const r = $r.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on($r.expired, (t) => {
        const r = $r.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on($r.deleted, (t) => {
        const r = $r.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Zx extends W_ {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = $c),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Cn() || !Nn()) return;
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (u) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(u);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = Qc);
          try {
            await this.createIframe();
          } catch (u) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(u),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        let u;
        try {
          u = await this.fetchAttestation(s.attestationId, o);
        } catch (f) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(f),
            (u = await this.fetchAttestation(s.attestationId, Qc));
        }
        return u;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const u = this.startAbortTimer(ee.ONE_SECOND * 2),
          f = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(u), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (u) => {
          u.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((u) => {
            if (document.getElementById($c)) return u();
            window.addEventListener("message", o);
            const f = document.createElement("iframe");
            (f.id = $c),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = "none"),
              document.body.append(f),
              (this.iframe = f),
              (s = u);
          }),
          new Promise((u, f) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                f("verify iframe load timeout");
            }, ee.toMiliseconds(ee.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || Sn;
        return (
          Tx.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${Sn}`
            ),
            (o = Sn)),
          o
        );
      }),
      (this.logger = Ir(r, this.name)),
      (this.verifyUrl = Sn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = nu() && {}.IS_VITEST);
  }
  get context() {
    return gr(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ee.toMiliseconds(t))
    );
  }
}
var eP = Object.defineProperty,
  bf = Object.getOwnPropertySymbols,
  tP = Object.prototype.hasOwnProperty,
  rP = Object.prototype.propertyIsEnumerable,
  _f = (n, t, r) =>
    t in n
      ? eP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Ef = (n, t) => {
    for (var r in t || (t = {})) tP.call(t, r) && _f(n, r, t[r]);
    if (bf) for (var r of bf(t)) rP.call(t, r) && _f(n, r, t[r]);
    return n;
  };
class pu extends q_ {
  constructor(t) {
    super(t),
      (this.protocol = kp),
      (this.version = rx),
      (this.name = fu),
      (this.events = new Ut.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = t == null ? void 0 : t.projectId),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Bp),
      (this.customStoragePrefix =
        t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "");
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Wo(Jo({ level: (t == null ? void 0 : t.logger) || ix.logger }));
    (this.logger = Ir(r, this.name)),
      (this.heartbeat = new Dn.HeartBeat()),
      (this.crypto = new Nx(
        this,
        this.logger,
        t == null ? void 0 : t.keychain
      )),
      (this.history = new Yx(this, this.logger)),
      (this.expirer = new Xx(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new u_(Ef(Ef({}, nx), t == null ? void 0 : t.storageOptions))),
      (this.relayer = new Vx({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new Qx(this, this.logger)),
      (this.verify = new Zx(this.projectId || "", this.logger));
  }
  static async init(t) {
    const r = new pu(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(bx, s), r;
  }
  get context() {
    return gr(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (t) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          t
        ),
        this.logger.error(t.message),
        t)
      );
    }
  }
}
const iP = pu,
  Kp = "wc",
  Vp = 2,
  Wp = "client",
  du = `${Kp}@${Vp}:${Wp}:`,
  Fc = {
    name: Wp,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  If = "WALLETCONNECT_DEEPLINK_CHOICE",
  nP = "proposal",
  Gp = "Proposal expired",
  sP = "session",
  To = ee.SEVEN_DAYS,
  oP = "engine",
  ns = {
    wc_sessionPropose: {
      req: { ttl: ee.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ee.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ee.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ee.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ee.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ee.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ee.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ee.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ee.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ee.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ee.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ee.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ee.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ee.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ee.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ee.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  Lc = { min: ee.FIVE_MINUTES, max: ee.SEVEN_DAYS },
  gi = { idle: "IDLE", active: "ACTIVE" },
  aP = "request",
  cP = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var uP = Object.defineProperty,
  hP = Object.defineProperties,
  lP = Object.getOwnPropertyDescriptors,
  xf = Object.getOwnPropertySymbols,
  fP = Object.prototype.hasOwnProperty,
  pP = Object.prototype.propertyIsEnumerable,
  Pf = (n, t, r) =>
    t in n
      ? uP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  lr = (n, t) => {
    for (var r in t || (t = {})) fP.call(t, r) && Pf(n, r, t[r]);
    if (xf) for (var r of xf(t)) pP.call(t, r) && Pf(n, r, t[r]);
    return n;
  },
  ss = (n, t) => hP(n, lP(t));
class dP extends J_ {
  constructor(t) {
    super(t),
      (this.name = oP),
      (this.events = new Ut()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [Xi]),
      (this.requestQueue = { state: gi.idle, queue: [] }),
      (this.sessionRequestQueue = { state: gi.idle, queue: [] }),
      (this.requestQueueDelay = ee.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(ns) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ee.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (r) => {
        await this.isInitialized();
        const s = ss(lr({}, r), {
          requiredNamespaces: r.requiredNamespaces || {},
          optionalNamespaces: r.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: u,
          optionalNamespaces: f,
          sessionProperties: g,
          relays: m,
        } = s;
        let y = o,
          E,
          x = !1;
        if (
          (y && (x = this.client.core.pairing.pairings.get(y).active), !y || !x)
        ) {
          const { topic: ae, uri: te } =
            await this.client.core.pairing.create();
          (y = ae), (E = te);
        }
        const $ = await this.client.core.crypto.generateKeyPair(),
          L = lr(
            {
              requiredNamespaces: u,
              optionalNamespaces: f,
              relays: m ?? [{ protocol: Hp }],
              proposer: { publicKey: $, metadata: this.client.metadata },
            },
            g && { sessionProperties: g }
          ),
          { reject: T, resolve: Y, done: re } = Pn(ee.FIVE_MINUTES, Gp);
        if (
          (this.events.once(
            Ct("session_connect"),
            async ({ error: ae, session: te }) => {
              if (ae) T(ae);
              else if (te) {
                te.self.publicKey = $;
                const he = ss(lr({}, te), {
                  requiredNamespaces: te.requiredNamespaces,
                  optionalNamespaces: te.optionalNamespaces,
                });
                await this.client.session.set(te.topic, he),
                  await this.setExpiry(te.topic, te.expiry),
                  y &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: y,
                      metadata: te.peer.metadata,
                    })),
                  Y(he);
              }
            }
          ),
          !y)
        ) {
          const { message: ae } = K(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${y}`
          );
          throw new Error(ae);
        }
        const oe = await this.sendRequest({
            topic: y,
            method: "wc_sessionPropose",
            params: L,
          }),
          ce = kr(ee.FIVE_MINUTES);
        return (
          await this.setProposal(oe, lr({ id: oe, expiry: ce }, L)),
          { uri: E, approval: re }
        );
      }),
      (this.pair = async (r) => (
        await this.isInitialized(), await this.client.core.pairing.pair(r)
      )),
      (this.approve = async (r) => {
        await this.isInitialized(), await this.isValidApprove(r);
        const {
            id: s,
            relayProtocol: o,
            namespaces: u,
            sessionProperties: f,
          } = r,
          g = this.client.proposal.get(s);
        let {
          pairingTopic: m,
          proposer: y,
          requiredNamespaces: E,
          optionalNamespaces: x,
        } = g;
        (m = m || ""), Rn(E) || (E = eb(u, "approve()"));
        const $ = await this.client.core.crypto.generateKeyPair(),
          L = y.publicKey,
          T = await this.client.core.crypto.generateSharedKey($, L);
        m &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: m,
            metadata: y.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: m,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: $ },
          }),
          await this.client.proposal.delete(s, bt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: m }));
        const Y = lr(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: u,
            requiredNamespaces: E,
            optionalNamespaces: x,
            pairingTopic: m,
            controller: { publicKey: $, metadata: this.client.metadata },
            expiry: kr(To),
          },
          f && { sessionProperties: f }
        );
        await this.client.core.relayer.subscribe(T),
          await this.sendRequest({
            topic: T,
            method: "wc_sessionSettle",
            params: Y,
            throwOnFailedPublish: !0,
          });
        const re = ss(lr({}, Y), {
          topic: T,
          pairingTopic: m,
          acknowledged: !1,
          self: Y.controller,
          peer: { publicKey: y.publicKey, metadata: y.metadata },
          controller: $,
        });
        return (
          await this.client.session.set(T, re),
          await this.setExpiry(T, kr(To)),
          {
            topic: T,
            acknowledged: () =>
              new Promise((oe) =>
                setTimeout(() => oe(this.client.session.get(T)), 500)
              ),
          }
        );
      }),
      (this.reject = async (r) => {
        await this.isInitialized(), await this.isValidReject(r);
        const { id: s, reason: o } = r,
          { pairingTopic: u } = this.client.proposal.get(s);
        u &&
          (await this.sendError(s, u, o),
          await this.client.proposal.delete(s, bt("USER_DISCONNECTED")));
      }),
      (this.update = async (r) => {
        await this.isInitialized(), await this.isValidUpdate(r);
        const { topic: s, namespaces: o } = r,
          u = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: f, resolve: g, reject: m } = Pn();
        return (
          this.events.once(Ct("session_update", u), ({ error: y }) => {
            y ? m(y) : g();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (r) => {
        await this.isInitialized(), await this.isValidExtend(r);
        const { topic: s } = r,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: u, resolve: f, reject: g } = Pn();
        return (
          this.events.once(Ct("session_extend", o), ({ error: m }) => {
            m ? g(m) : f();
          }),
          await this.setExpiry(s, kr(To)),
          { acknowledged: u }
        );
      }),
      (this.request = async (r) => {
        await this.isInitialized(), await this.isValidRequest(r);
        const { chainId: s, request: o, topic: u, expiry: f } = r,
          g = uu(),
          {
            done: m,
            resolve: y,
            reject: E,
          } = Pn(f, "Request expired. Please try again.");
        return (
          this.events.once(
            Ct("session_request", g),
            ({ error: x, result: $ }) => {
              x ? E(x) : y($);
            }
          ),
          await Promise.all([
            new Promise(async (x) => {
              await this.sendRequest({
                clientRpcId: g,
                topic: u,
                method: "wc_sessionRequest",
                params: { request: o, chainId: s },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch(($) => E($)),
                this.client.events.emit("session_request_sent", {
                  topic: u,
                  request: o,
                  chainId: s,
                  id: g,
                }),
                x();
            }),
            new Promise(async (x) => {
              const $ = await zw(this.client.core.storage, If);
              Uw({ id: g, topic: u, wcDeepLink: $ }), x();
            }),
            m(),
          ]).then((x) => x[2])
        );
      }),
      (this.respond = async (r) => {
        await this.isInitialized(), await this.isValidRespond(r);
        const { topic: s, response: o } = r,
          { id: u } = o;
        yi(o)
          ? await this.sendResult({
              id: u,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Hr(o) && (await this.sendError(u, s, o.error)),
          this.cleanupAfterResponse(r);
      }),
      (this.ping = async (r) => {
        await this.isInitialized(), await this.isValidPing(r);
        const { topic: s } = r;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: u, resolve: f, reject: g } = Pn();
          this.events.once(Ct("session_ping", o), ({ error: m }) => {
            m ? g(m) : f();
          }),
            await u();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (r) => {
        await this.isInitialized(), await this.isValidEmit(r);
        const { topic: s, event: o, chainId: u } = r;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: u },
        });
      }),
      (this.disconnect = async (r) => {
        await this.isInitialized(), await this.isValidDisconnect(r);
        const { topic: s } = r;
        this.client.session.keys.includes(s)
          ? (await this.sendRequest({
              topic: s,
              method: "wc_sessionDelete",
              params: bt("USER_DISCONNECTED"),
              throwOnFailedPublish: !0,
            }),
            await this.deleteSession(s))
          : await this.client.core.pairing.disconnect({ topic: s });
      }),
      (this.find = (r) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => ib(s, r))
      )),
      (this.getPendingSessionRequests = () => (
        this.isInitialized(), this.client.pendingRequest.getAll()
      )),
      (this.cleanupDuplicatePairings = async (r) => {
        if (r.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(r.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((u) => {
                var f, g;
                return (
                  ((f = u.peerMetadata) == null ? void 0 : f.url) &&
                  ((g = u.peerMetadata) == null ? void 0 : g.url) ===
                    r.peer.metadata.url &&
                  u.topic &&
                  u.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((u) =>
                  this.client.core.pairing.disconnect({ topic: u.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (r, s) => {
        const { self: o } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r),
          this.client.session.delete(r, bt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(o.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
          this.client.core.crypto.keychain.has(r) &&
            (await this.client.core.crypto.deleteSymKey(r)),
          s || this.client.core.expirer.del(r),
          this.client.core.storage
            .removeItem(If)
            .catch((u) => this.client.logger.warn(u));
      }),
      (this.deleteProposal = async (r, s) => {
        await Promise.all([
          this.client.proposal.delete(r, bt("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(r),
        ]);
      }),
      (this.deletePendingSessionRequest = async (r, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(r, s),
          o ? Promise.resolve() : this.client.core.expirer.del(r),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((u) => u.id !== r)),
          o && (this.sessionRequestQueue.state = gi.idle);
      }),
      (this.setExpiry = async (r, s) => {
        this.client.session.keys.includes(r) &&
          (await this.client.session.update(r, { expiry: s })),
          this.client.core.expirer.set(r, s);
      }),
      (this.setProposal = async (r, s) => {
        await this.client.proposal.set(r, s),
          this.client.core.expirer.set(r, s.expiry);
      }),
      (this.setPendingSessionRequest = async (r) => {
        const s = ns.wc_sessionRequest.req.ttl,
          { id: o, topic: u, params: f, verifyContext: g } = r;
        await this.client.pendingRequest.set(o, {
          id: o,
          topic: u,
          params: f,
          verifyContext: g,
        }),
          s && this.client.core.expirer.set(o, kr(s));
      }),
      (this.sendRequest = async (r) => {
        const {
            topic: s,
            method: o,
            params: u,
            expiry: f,
            relayRpcId: g,
            clientRpcId: m,
            throwOnFailedPublish: y,
          } = r,
          E = Tn(o, u, m);
        if (Nn() && cP.includes(o)) {
          const L = An(JSON.stringify(E));
          this.client.core.verify.register({ attestationId: L });
        }
        const x = await this.client.core.crypto.encode(s, E),
          $ = ns[o].req;
        return (
          f && ($.ttl = f),
          g && ($.id = g),
          this.client.core.history.set(s, E),
          y
            ? (($.internal = ss(lr({}, $.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, x, $))
            : this.client.core.relayer
                .publish(s, x, $)
                .catch((L) => this.client.logger.error(L)),
          E.id
        );
      }),
      (this.sendResult = async (r) => {
        const { id: s, topic: o, result: u, throwOnFailedPublish: f } = r,
          g = hu(s, u),
          m = await this.client.core.crypto.encode(o, g),
          y = await this.client.core.history.get(o, s),
          E = ns[y.request.method].res;
        f
          ? ((E.internal = ss(lr({}, E.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, m, E))
          : this.client.core.relayer
              .publish(o, m, E)
              .catch((x) => this.client.logger.error(x)),
          await this.client.core.history.resolve(g);
      }),
      (this.sendError = async (r, s, o) => {
        const u = Qo(r, o),
          f = await this.client.core.crypto.encode(s, u),
          g = await this.client.core.history.get(s, r),
          m = ns[g.request.method].res;
        this.client.core.relayer.publish(s, f, m),
          await this.client.core.history.resolve(u);
      }),
      (this.cleanup = async () => {
        const r = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          Ti(o.expiry) && r.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            Ti(o.expiry) && s.push(o.id);
          }),
          await Promise.all([
            ...r.map((o) => this.deleteSession(o)),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (r) => {
        this.requestQueue.queue.push(r), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === gi.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = gi.active;
          const r = this.requestQueue.queue.shift();
          if (r)
            try {
              this.processRequest(r),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = gi.idle;
      }),
      (this.processRequest = (r) => {
        const { topic: s, payload: o } = r,
          u = o.method;
        switch (u) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${u}`);
        }
      }),
      (this.onRelayEventResponse = async (r) => {
        const { topic: s, payload: o } = r,
          u = (await this.client.core.history.get(s, o.id)).request.method;
        switch (u) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${u}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: s } = r,
          { message: o } = K(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (r, s) => {
        const { params: o, id: u } = s;
        try {
          this.isValidConnect(lr({}, s.params));
          const f = kr(ee.FIVE_MINUTES),
            g = lr({ id: u, pairingTopic: r, expiry: f }, o);
          await this.setProposal(u, g);
          const m = An(JSON.stringify(s)),
            y = await this.getVerifyContext(m, g.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: u,
            params: g,
            verifyContext: y,
          });
        } catch (f) {
          await this.sendError(u, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (r, s) => {
        const { id: o } = s;
        if (yi(s)) {
          const { result: u } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: u,
          });
          const f = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: f,
          });
          const g = f.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: g,
          });
          const m = u.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: m,
          });
          const y = await this.client.core.crypto.generateSharedKey(g, m);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: y,
          });
          const E = await this.client.core.relayer.subscribe(y);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: E,
          }),
            await this.client.core.pairing.activate({ topic: r });
        } else
          Hr(s) &&
            (await this.client.proposal.delete(o, bt("USER_DISCONNECTED")),
            this.events.emit(Ct("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (r, s) => {
        const { id: o, params: u } = s;
        try {
          this.isValidSessionSettleRequest(u);
          const {
              relay: f,
              controller: g,
              expiry: m,
              namespaces: y,
              requiredNamespaces: E,
              optionalNamespaces: x,
              sessionProperties: $,
              pairingTopic: L,
            } = s.params,
            T = lr(
              {
                topic: r,
                relay: f,
                expiry: m,
                namespaces: y,
                acknowledged: !0,
                pairingTopic: L,
                requiredNamespaces: E,
                optionalNamespaces: x,
                controller: g.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: g.publicKey, metadata: g.metadata },
              },
              $ && { sessionProperties: $ }
            );
          await this.sendResult({ id: s.id, topic: r, result: !0 }),
            this.events.emit(Ct("session_connect"), { session: T }),
            this.cleanupDuplicatePairings(T);
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (r, s) => {
        const { id: o } = s;
        yi(s)
          ? (await this.client.session.update(r, { acknowledged: !0 }),
            this.events.emit(Ct("session_approve", o), {}))
          : Hr(s) &&
            (await this.client.session.delete(r, bt("USER_DISCONNECTED")),
            this.events.emit(Ct("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (r, s) => {
        const { params: o, id: u } = s;
        try {
          const f = `${r}_session_update`,
            g = So.get(f);
          if (g && this.isRequestOutOfSync(g, u)) {
            this.client.logger.info(`Discarding out of sync request - ${u}`);
            return;
          }
          this.isValidUpdate(lr({ topic: r }, o)),
            await this.client.session.update(r, { namespaces: o.namespaces }),
            await this.sendResult({ id: u, topic: r, result: !0 }),
            this.client.events.emit("session_update", {
              id: u,
              topic: r,
              params: o,
            }),
            So.set(f, u);
        } catch (f) {
          await this.sendError(u, r, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (r, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, s) => {
        const { id: o } = s;
        yi(s)
          ? this.events.emit(Ct("session_update", o), {})
          : Hr(s) &&
            this.events.emit(Ct("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: r }),
            await this.setExpiry(r, kr(To)),
            await this.sendResult({ id: o, topic: r, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: r });
        } catch (u) {
          await this.sendError(o, r, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionExtendResponse = (r, s) => {
        const { id: o } = s;
        yi(s)
          ? this.events.emit(Ct("session_extend", o), {})
          : Hr(s) &&
            this.events.emit(Ct("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: r }),
            await this.sendResult({ id: o, topic: r, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: r });
        } catch (u) {
          await this.sendError(o, r, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionPingResponse = (r, s) => {
        const { id: o } = s;
        setTimeout(() => {
          yi(s)
            ? this.events.emit(Ct("session_ping", o), {})
            : Hr(s) &&
              this.events.emit(Ct("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (r, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: r, reason: s.params }),
            await Promise.all([
              new Promise((u) => {
                this.client.core.relayer.once(Jt.publish, async () => {
                  u(await this.deleteSession(r));
                });
              }),
              this.sendResult({ id: o, topic: r, result: !0 }),
            ]),
            this.client.events.emit("session_delete", { id: o, topic: r });
        } catch (u) {
          this.client.logger.error(u);
        }
      }),
      (this.onSessionRequest = async (r, s) => {
        const { id: o, params: u } = s;
        try {
          this.isValidRequest(lr({ topic: r }, u));
          const f = An(JSON.stringify(Tn("wc_sessionRequest", u, o))),
            g = this.client.session.get(r),
            m = await this.getVerifyContext(f, g.peer.metadata),
            y = { id: o, topic: r, params: u, verifyContext: m };
          await this.setPendingSessionRequest(y),
            this.addSessionRequestToSessionRequestQueue(y),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (r, s) => {
        const { id: o } = s;
        yi(s)
          ? this.events.emit(Ct("session_request", o), { result: s.result })
          : Hr(s) &&
            this.events.emit(Ct("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (r, s) => {
        const { id: o, params: u } = s;
        try {
          const f = `${r}_session_event_${u.event.name}`,
            g = So.get(f);
          if (g && this.isRequestOutOfSync(g, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(lr({ topic: r }, u)),
            this.client.events.emit("session_event", {
              id: o,
              topic: r,
              params: u,
            }),
            So.set(f, o);
        } catch (f) {
          await this.sendError(o, r, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = gi.idle),
              this.processSessionRequestQueue();
          }, ee.toMiliseconds(this.requestQueueDelay));
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === gi.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = gi.active),
            this.client.events.emit("session_request", r);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (r) => {
        if (r.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === r.topic);
        s &&
          this.onSessionProposeRequest(
            r.topic,
            Tn(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (r) => {
        if (!pr(r)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(r)}`
          );
          throw new Error(m);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: u,
          sessionProperties: f,
          relays: g,
        } = r;
        if ((rr(s) || (await this.isValidPairingTopic(s)), !gb(g, !0))) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `connect() relays: ${g}`
          );
          throw new Error(m);
        }
        !rr(o) &&
          Rn(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !rr(u) &&
            Rn(u) !== 0 &&
            this.validateNamespaces(u, "optionalNamespaces"),
          rr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.validateNamespaces = (r, s) => {
        const o = db(r, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (r) => {
        if (!pr(r))
          throw new Error(
            K("MISSING_OR_INVALID", `approve() params: ${r}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: u,
          sessionProperties: f,
        } = r;
        await this.isValidProposalId(s);
        const g = this.client.proposal.get(s),
          m = Fo(o, "approve()");
        if (m) throw new Error(m.message);
        const y = Dl(g.requiredNamespaces, o, "approve()");
        if (y) throw new Error(y.message);
        if (!qt(u, !0)) {
          const { message: E } = K(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${u}`
          );
          throw new Error(E);
        }
        rr(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.isValidReject = async (r) => {
        if (!pr(r)) {
          const { message: u } = K(
            "MISSING_OR_INVALID",
            `reject() params: ${r}`
          );
          throw new Error(u);
        }
        const { id: s, reason: o } = r;
        if ((await this.isValidProposalId(s), !vb(o))) {
          const { message: u } = K(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(u);
        }
      }),
      (this.isValidSessionSettleRequest = (r) => {
        if (!pr(r)) {
          const { message: y } = K(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${r}`
          );
          throw new Error(y);
        }
        const { relay: s, controller: o, namespaces: u, expiry: f } = r;
        if (!pp(s)) {
          const { message: y } = K(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(y);
        }
        const g = cb(o, "onSessionSettleRequest()");
        if (g) throw new Error(g.message);
        const m = Fo(u, "onSessionSettleRequest()");
        if (m) throw new Error(m.message);
        if (Ti(f)) {
          const { message: y } = K("EXPIRED", "onSessionSettleRequest()");
          throw new Error(y);
        }
      }),
      (this.isValidUpdate = async (r) => {
        if (!pr(r)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `update() params: ${r}`
          );
          throw new Error(m);
        }
        const { topic: s, namespaces: o } = r;
        await this.isValidSessionTopic(s);
        const u = this.client.session.get(s),
          f = Fo(o, "update()");
        if (f) throw new Error(f.message);
        const g = Dl(u.requiredNamespaces, o, "update()");
        if (g) throw new Error(g.message);
      }),
      (this.isValidExtend = async (r) => {
        if (!pr(r)) {
          const { message: o } = K(
            "MISSING_OR_INVALID",
            `extend() params: ${r}`
          );
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (r) => {
        if (!pr(r)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `request() params: ${r}`
          );
          throw new Error(m);
        }
        const { topic: s, request: o, chainId: u, expiry: f } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: g } = this.client.session.get(s);
        if (!$l(g, u)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `request() chainId: ${u}`
          );
          throw new Error(m);
        }
        if (!mb(o)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(m);
        }
        if (!_b(g, u, o.method)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(m);
        }
        if (f && !Pb(f, Lc)) {
          const { message: m } = K(
            "MISSING_OR_INVALID",
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Lc.min} and ${Lc.max}`
          );
          throw new Error(m);
        }
      }),
      (this.isValidRespond = async (r) => {
        if (!pr(r)) {
          const { message: u } = K(
            "MISSING_OR_INVALID",
            `respond() params: ${r}`
          );
          throw new Error(u);
        }
        const { topic: s, response: o } = r;
        if ((await this.isValidSessionTopic(s), !wb(o))) {
          const { message: u } = K(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(o)}`
          );
          throw new Error(u);
        }
      }),
      (this.isValidPing = async (r) => {
        if (!pr(r)) {
          const { message: o } = K("MISSING_OR_INVALID", `ping() params: ${r}`);
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (r) => {
        if (!pr(r)) {
          const { message: g } = K("MISSING_OR_INVALID", `emit() params: ${r}`);
          throw new Error(g);
        }
        const { topic: s, event: o, chainId: u } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!$l(f, u)) {
          const { message: g } = K(
            "MISSING_OR_INVALID",
            `emit() chainId: ${u}`
          );
          throw new Error(g);
        }
        if (!bb(o)) {
          const { message: g } = K(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(g);
        }
        if (!Eb(f, u, o.name)) {
          const { message: g } = K(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(g);
        }
      }),
      (this.isValidDisconnect = async (r) => {
        if (!pr(r)) {
          const { message: o } = K(
            "MISSING_OR_INVALID",
            `disconnect() params: ${r}`
          );
          throw new Error(o);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (r, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || Sn,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const u = await this.client.core.verify.resolve({
            attestationId: r,
            verifyUrl: s.verifyUrl,
          });
          u &&
            ((o.verified.origin = u.origin),
            (o.verified.isScam = u.isScam),
            (o.verified.validation =
              u.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (u) {
          this.client.logger.info(u);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (r, s) => {
        Object.values(r).forEach((o) => {
          if (!qt(o, !1)) {
            const { message: u } = K(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(u);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = K("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Jt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(r, s);
      try {
        lu(o)
          ? (this.client.core.history.set(r, o),
            this.onRelayEventRequest({ topic: r, payload: o }))
          : Yo(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: r, payload: o }),
            this.client.core.history.delete(r, o.id))
          : this.onRelayEventUnknownPayload({ topic: r, payload: o });
      } catch (u) {
        this.client.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on($r.expired, async (t) => {
      const { topic: r, id: s } = lp(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, K("EXPIRED"), !0);
      r
        ? this.client.session.keys.includes(r) &&
          (await this.deleteSession(r, !0),
          this.client.events.emit("session_expire", { topic: r }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(cs.create, (t) =>
      this.onPairingCreated(t)
    );
  }
  isValidPairingTopic(t) {
    if (!qt(t, !1)) {
      const { message: r } = K(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = K(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ti(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = K("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!qt(t, !1)) {
      const { message: r } = K(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = K(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ti(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = K("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (qt(t, !1)) {
      const { message: r } = K(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    } else {
      const { message: r } = K(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!yb(t)) {
      const { message: r } = K(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = K(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ti(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = K("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class gP extends Zo {
  constructor(t, r) {
    super(t, r, nP, du), (this.core = t), (this.logger = r);
  }
}
class yP extends Zo {
  constructor(t, r) {
    super(t, r, sP, du), (this.core = t), (this.logger = r);
  }
}
class vP extends Zo {
  constructor(t, r) {
    super(t, r, aP, du, (s) => s.id), (this.core = t), (this.logger = r);
  }
}
let mP = class Jp extends G_ {
  constructor(t) {
    super(t),
      (this.protocol = Kp),
      (this.version = Vp),
      (this.name = Fc.name),
      (this.events = new Ut.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (t == null ? void 0 : t.name) || Fc.name),
      (this.metadata = (t == null ? void 0 : t.metadata) || $w());
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Wo(Jo({ level: (t == null ? void 0 : t.logger) || Fc.logger }));
    (this.core = (t == null ? void 0 : t.core) || new iP(t)),
      (this.logger = Ir(r, this.name)),
      (this.session = new yP(this.core, this.logger)),
      (this.proposal = new gP(this.core, this.logger)),
      (this.pendingRequest = new vP(this.core, this.logger)),
      (this.engine = new dP(this));
  }
  static async init(t) {
    const r = new Jp(t);
    return await r.initialize(), r;
  }
  get context() {
    return gr(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(t.message),
        t)
      );
    }
  }
};
var Ho = {},
  wP = {
    get exports() {
      return Ho;
    },
    set exports(n) {
      Ho = n;
    },
  };
(function (n, t) {
  var r = typeof self < "u" ? self : Br,
    s = (function () {
      function u() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (u.prototype = r), new u();
    })();
  (function (u) {
    (function (f) {
      var g = {
        searchParams: "URLSearchParams" in u,
        iterable: "Symbol" in u && "iterator" in Symbol,
        blob:
          "FileReader" in u &&
          "Blob" in u &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in u,
        arrayBuffer: "ArrayBuffer" in u,
      };
      function m(b) {
        return b && DataView.prototype.isPrototypeOf(b);
      }
      if (g.arrayBuffer)
        var y = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          E =
            ArrayBuffer.isView ||
            function (b) {
              return b && y.indexOf(Object.prototype.toString.call(b)) > -1;
            };
      function x(b) {
        if (
          (typeof b != "string" && (b = String(b)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
        )
          throw new TypeError("Invalid character in header field name");
        return b.toLowerCase();
      }
      function $(b) {
        return typeof b != "string" && (b = String(b)), b;
      }
      function L(b) {
        var O = {
          next: function () {
            var J = b.shift();
            return { done: J === void 0, value: J };
          },
        };
        return (
          g.iterable &&
            (O[Symbol.iterator] = function () {
              return O;
            }),
          O
        );
      }
      function T(b) {
        (this.map = {}),
          b instanceof T
            ? b.forEach(function (O, J) {
                this.append(J, O);
              }, this)
            : Array.isArray(b)
            ? b.forEach(function (O) {
                this.append(O[0], O[1]);
              }, this)
            : b &&
              Object.getOwnPropertyNames(b).forEach(function (O) {
                this.append(O, b[O]);
              }, this);
      }
      (T.prototype.append = function (b, O) {
        (b = x(b)), (O = $(O));
        var J = this.map[b];
        this.map[b] = J ? J + ", " + O : O;
      }),
        (T.prototype.delete = function (b) {
          delete this.map[x(b)];
        }),
        (T.prototype.get = function (b) {
          return (b = x(b)), this.has(b) ? this.map[b] : null;
        }),
        (T.prototype.has = function (b) {
          return this.map.hasOwnProperty(x(b));
        }),
        (T.prototype.set = function (b, O) {
          this.map[x(b)] = $(O);
        }),
        (T.prototype.forEach = function (b, O) {
          for (var J in this.map)
            this.map.hasOwnProperty(J) && b.call(O, this.map[J], J, this);
        }),
        (T.prototype.keys = function () {
          var b = [];
          return (
            this.forEach(function (O, J) {
              b.push(J);
            }),
            L(b)
          );
        }),
        (T.prototype.values = function () {
          var b = [];
          return (
            this.forEach(function (O) {
              b.push(O);
            }),
            L(b)
          );
        }),
        (T.prototype.entries = function () {
          var b = [];
          return (
            this.forEach(function (O, J) {
              b.push([J, O]);
            }),
            L(b)
          );
        }),
        g.iterable && (T.prototype[Symbol.iterator] = T.prototype.entries);
      function Y(b) {
        if (b.bodyUsed) return Promise.reject(new TypeError("Already read"));
        b.bodyUsed = !0;
      }
      function re(b) {
        return new Promise(function (O, J) {
          (b.onload = function () {
            O(b.result);
          }),
            (b.onerror = function () {
              J(b.error);
            });
        });
      }
      function oe(b) {
        var O = new FileReader(),
          J = re(O);
        return O.readAsArrayBuffer(b), J;
      }
      function ce(b) {
        var O = new FileReader(),
          J = re(O);
        return O.readAsText(b), J;
      }
      function ae(b) {
        for (
          var O = new Uint8Array(b), J = new Array(O.length), le = 0;
          le < O.length;
          le++
        )
          J[le] = String.fromCharCode(O[le]);
        return J.join("");
      }
      function te(b) {
        if (b.slice) return b.slice(0);
        var O = new Uint8Array(b.byteLength);
        return O.set(new Uint8Array(b)), O.buffer;
      }
      function he() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (b) {
            (this._bodyInit = b),
              b
                ? typeof b == "string"
                  ? (this._bodyText = b)
                  : g.blob && Blob.prototype.isPrototypeOf(b)
                  ? (this._bodyBlob = b)
                  : g.formData && FormData.prototype.isPrototypeOf(b)
                  ? (this._bodyFormData = b)
                  : g.searchParams && URLSearchParams.prototype.isPrototypeOf(b)
                  ? (this._bodyText = b.toString())
                  : g.arrayBuffer && g.blob && m(b)
                  ? ((this._bodyArrayBuffer = te(b.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : g.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(b) || E(b))
                  ? (this._bodyArrayBuffer = te(b))
                  : (this._bodyText = b = Object.prototype.toString.call(b))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof b == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : g.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(b) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          g.blob &&
            ((this.blob = function () {
              var b = Y(this);
              if (b) return b;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? Y(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(oe);
            })),
          (this.text = function () {
            var b = Y(this);
            if (b) return b;
            if (this._bodyBlob) return ce(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(ae(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          g.formData &&
            (this.formData = function () {
              return this.text().then(_t);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var pe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function Q(b) {
        var O = b.toUpperCase();
        return pe.indexOf(O) > -1 ? O : b;
      }
      function ve(b, O) {
        O = O || {};
        var J = O.body;
        if (b instanceof ve) {
          if (b.bodyUsed) throw new TypeError("Already read");
          (this.url = b.url),
            (this.credentials = b.credentials),
            O.headers || (this.headers = new T(b.headers)),
            (this.method = b.method),
            (this.mode = b.mode),
            (this.signal = b.signal),
            !J && b._bodyInit != null && ((J = b._bodyInit), (b.bodyUsed = !0));
        } else this.url = String(b);
        if (
          ((this.credentials =
            O.credentials || this.credentials || "same-origin"),
          (O.headers || !this.headers) && (this.headers = new T(O.headers)),
          (this.method = Q(O.method || this.method || "GET")),
          (this.mode = O.mode || this.mode || null),
          (this.signal = O.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && J)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(J);
      }
      ve.prototype.clone = function () {
        return new ve(this, { body: this._bodyInit });
      };
      function _t(b) {
        var O = new FormData();
        return (
          b
            .trim()
            .split("&")
            .forEach(function (J) {
              if (J) {
                var le = J.split("="),
                  k = le.shift().replace(/\+/g, " "),
                  z = le.join("=").replace(/\+/g, " ");
                O.append(decodeURIComponent(k), decodeURIComponent(z));
              }
            }),
          O
        );
      }
      function st(b) {
        var O = new T(),
          J = b.replace(/\r?\n[\t ]+/g, " ");
        return (
          J.split(/\r?\n/).forEach(function (le) {
            var k = le.split(":"),
              z = k.shift().trim();
            if (z) {
              var H = k.join(":").trim();
              O.append(z, H);
            }
          }),
          O
        );
      }
      he.call(ve.prototype);
      function Be(b, O) {
        O || (O = {}),
          (this.type = "default"),
          (this.status = O.status === void 0 ? 200 : O.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in O ? O.statusText : "OK"),
          (this.headers = new T(O.headers)),
          (this.url = O.url || ""),
          this._initBody(b);
      }
      he.call(Be.prototype),
        (Be.prototype.clone = function () {
          return new Be(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new T(this.headers),
            url: this.url,
          });
        }),
        (Be.error = function () {
          var b = new Be(null, { status: 0, statusText: "" });
          return (b.type = "error"), b;
        });
      var zt = [301, 302, 303, 307, 308];
      (Be.redirect = function (b, O) {
        if (zt.indexOf(O) === -1) throw new RangeError("Invalid status code");
        return new Be(null, { status: O, headers: { location: b } });
      }),
        (f.DOMException = u.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (O, J) {
          (this.message = O), (this.name = J);
          var le = Error(O);
          this.stack = le.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function kt(b, O) {
        return new Promise(function (J, le) {
          var k = new ve(b, O);
          if (k.signal && k.signal.aborted)
            return le(new f.DOMException("Aborted", "AbortError"));
          var z = new XMLHttpRequest();
          function H() {
            z.abort();
          }
          (z.onload = function () {
            var B = {
              status: z.status,
              statusText: z.statusText,
              headers: st(z.getAllResponseHeaders() || ""),
            };
            B.url =
              "responseURL" in z
                ? z.responseURL
                : B.headers.get("X-Request-URL");
            var et = "response" in z ? z.response : z.responseText;
            J(new Be(et, B));
          }),
            (z.onerror = function () {
              le(new TypeError("Network request failed"));
            }),
            (z.ontimeout = function () {
              le(new TypeError("Network request failed"));
            }),
            (z.onabort = function () {
              le(new f.DOMException("Aborted", "AbortError"));
            }),
            z.open(k.method, k.url, !0),
            k.credentials === "include"
              ? (z.withCredentials = !0)
              : k.credentials === "omit" && (z.withCredentials = !1),
            "responseType" in z && g.blob && (z.responseType = "blob"),
            k.headers.forEach(function (B, et) {
              z.setRequestHeader(et, B);
            }),
            k.signal &&
              (k.signal.addEventListener("abort", H),
              (z.onreadystatechange = function () {
                z.readyState === 4 && k.signal.removeEventListener("abort", H);
              })),
            z.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return (
        (kt.polyfill = !0),
        u.fetch ||
          ((u.fetch = kt),
          (u.Headers = T),
          (u.Request = ve),
          (u.Response = Be)),
        (f.Headers = T),
        (f.Request = ve),
        (f.Response = Be),
        (f.fetch = kt),
        Object.defineProperty(f, "__esModule", { value: !0 }),
        f
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var o = s;
  (t = o.fetch),
    (t.default = o.fetch),
    (t.fetch = o.fetch),
    (t.Headers = o.Headers),
    (t.Request = o.Request),
    (t.Response = o.Response),
    (n.exports = t);
})(wP, Ho);
const Sf = V1(Ho);
var bP = Object.defineProperty,
  _P = Object.defineProperties,
  EP = Object.getOwnPropertyDescriptors,
  Of = Object.getOwnPropertySymbols,
  IP = Object.prototype.hasOwnProperty,
  xP = Object.prototype.propertyIsEnumerable,
  Af = (n, t, r) =>
    t in n
      ? bP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Rf = (n, t) => {
    for (var r in t || (t = {})) IP.call(t, r) && Af(n, r, t[r]);
    if (Of) for (var r of Of(t)) xP.call(t, r) && Af(n, r, t[r]);
    return n;
  },
  Tf = (n, t) => _P(n, EP(t));
const PP = { Accept: "application/json", "Content-Type": "application/json" },
  SP = "POST",
  Cf = { headers: PP, method: SP },
  Nf = 10;
let $i = class {
  constructor(t, r = !1) {
    if (
      ((this.url = t),
      (this.disableProviderPing = r),
      (this.events = new Ut.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !ef(t))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    (this.url = t), (this.disableProviderPing = r);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || (await this.register());
    try {
      const r = Yi(t),
        s = await (await Sf(this.url, Tf(Rf({}, Cf), { body: r }))).json();
      this.onPayload({ data: s });
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  async register(t = this.url) {
    if (!ef(t))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (u) => {
            this.resetMaxListeners(), o(u);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = t), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const r = Yi({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Sf(t, Tf(Rf({}, Cf), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const s = this.parseError(r);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? ms(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      o = s.message || s.toString(),
      u = Qo(t, o);
    this.events.emit("payload", u);
  }
  parseError(t, r = this.url) {
    return Sp(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Nf && this.events.setMaxListeners(Nf);
  }
};
const $f = "error",
  OP = "wss://relay.walletconnect.com",
  AP = "wc",
  RP = "universal_provider",
  Df = `${AP}@2:${RP}:`,
  TP = "https://rpc.walletconnect.com/v1/",
  mi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var os =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Yc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (n, t) {
  (function () {
    var r,
      s = "4.17.21",
      o = 200,
      u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      f = "Expected a function",
      g = "Invalid `variable` option passed into `_.template`",
      m = "__lodash_hash_undefined__",
      y = 500,
      E = "__lodash_placeholder__",
      x = 1,
      $ = 2,
      L = 4,
      T = 1,
      Y = 2,
      re = 1,
      oe = 2,
      ce = 4,
      ae = 8,
      te = 16,
      he = 32,
      pe = 64,
      Q = 128,
      ve = 256,
      _t = 512,
      st = 30,
      Be = "...",
      zt = 800,
      kt = 16,
      b = 1,
      O = 2,
      J = 3,
      le = 1 / 0,
      k = 9007199254740991,
      z = 17976931348623157e292,
      H = 0 / 0,
      B = 4294967295,
      et = B - 1,
      ot = B >>> 1,
      Di = [
        ["ary", Q],
        ["bind", re],
        ["bindKey", oe],
        ["curry", ae],
        ["curryRight", te],
        ["flip", _t],
        ["partial", he],
        ["partialRight", pe],
        ["rearg", ve],
      ],
      Ee = "[object Arguments]",
      Dr = "[object Array]",
      D = "[object AsyncFunction]",
      N = "[object Boolean]",
      R = "[object Date]",
      h = "[object DOMException]",
      I = "[object Error]",
      X = "[object Function]",
      ue = "[object GeneratorFunction]",
      me = "[object Map]",
      Oe = "[object Number]",
      Re = "[object Null]",
      Ie = "[object Object]",
      Et = "[object Promise]",
      gt = "[object Proxy]",
      tt = "[object RegExp]",
      Ce = "[object Set]",
      Ke = "[object String]",
      Ve = "[object Symbol]",
      rt = "[object Undefined]",
      Fe = "[object WeakMap]",
      We = "[object WeakSet]",
      Ae = "[object ArrayBuffer]",
      je = "[object DataView]",
      at = "[object Float32Array]",
      $e = "[object Float64Array]",
      It = "[object Int8Array]",
      Nt = "[object Int16Array]",
      Ht = "[object Int32Array]",
      Bt = "[object Uint8Array]",
      Ft = "[object Uint8ClampedArray]",
      Qt = "[object Uint16Array]",
      sr = "[object Uint32Array]",
      Kr = /\b__p \+= '';/g,
      Yt = /\b(__p \+=) '' \+/g,
      ei = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      wi = /&(?:amp|lt|gt|quot|#39);/g,
      Fi = /[&<>"']/g,
      ct = RegExp(wi.source),
      Qe = RegExp(Fi.source),
      ut = /<%-([\s\S]+?)%>/g,
      ht = /<%([\s\S]+?)%>/g,
      it = /<%=([\s\S]+?)%>/g,
      Ye = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      xt = /^\w*$/,
      Pt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      lt = /[\\^$.*+?()[\]{}|]/g,
      St = RegExp(lt.source),
      ft = /^\s+/,
      yt = /\s/,
      pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      He = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Ot = /,? & /,
      At = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ea = /[()=,{}\[\]\/\s]/,
      ta = /\\(\\)?/g,
      ra = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      xr = /\w*$/,
      ia = /^[-+]0x[0-9a-f]+$/i,
      na = /^0b[01]+$/i,
      sa = /^\[object .+?Constructor\]$/,
      oa = /^0o[0-7]+$/i,
      aa = /^(?:0|[1-9]\d*)$/,
      ti = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      rn = /($^)/,
      ca = /['\n\r\u2028\u2029\\]/g,
      nn = "\\ud800-\\udfff",
      ua = "\\u0300-\\u036f",
      ha = "\\ufe20-\\ufe2f",
      sn = "\\u20d0-\\u20ff",
      _s = ua + ha + sn,
      Es = "\\u2700-\\u27bf",
      Fr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      la = "\\xac\\xb1\\xd7\\xf7",
      fa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      pa = "\\u2000-\\u206f",
      da =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Is = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      xs = "\\ufe0e\\ufe0f",
      Li = la + fa + pa + da,
      Fn = "['’]",
      Mi = "[" + nn + "]",
      Ln = "[" + Li + "]",
      ji = "[" + _s + "]",
      Ps = "\\d+",
      ga = "[" + Es + "]",
      Ss = "[" + Fr + "]",
      Os = "[^" + nn + Li + Ps + Es + Fr + Is + "]",
      on = "\\ud83c[\\udffb-\\udfff]",
      ya = "(?:" + ji + "|" + on + ")",
      As = "[^" + nn + "]",
      an = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      yr = "[" + Is + "]",
      Rs = "\\u200d",
      Ts = "(?:" + Ss + "|" + Os + ")",
      Vr = "(?:" + yr + "|" + Os + ")",
      Cs = "(?:" + Fn + "(?:d|ll|m|re|s|t|ve))?",
      Ns = "(?:" + Fn + "(?:D|LL|M|RE|S|T|VE))?",
      $s = ya + "?",
      Ds = "[" + xs + "]?",
      va = "(?:" + Rs + "(?:" + [As, an, bi].join("|") + ")" + Ds + $s + ")*",
      ri = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Fs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Ls = Ds + $s + va,
      cn = "(?:" + [ga, an, bi].join("|") + ")" + Ls,
      ma = "(?:" + [As + ji + "?", ji, an, bi, Mi].join("|") + ")",
      Mn = RegExp(Fn, "g"),
      wa = RegExp(ji, "g"),
      un = RegExp(on + "(?=" + on + ")|" + ma + Ls, "g"),
      Ms = RegExp(
        [
          yr + "?" + Ss + "+" + Cs + "(?=" + [Ln, yr, "$"].join("|") + ")",
          Vr + "+" + Ns + "(?=" + [Ln, yr + Ts, "$"].join("|") + ")",
          yr + "?" + Ts + "+" + Cs,
          yr + "+" + Ns,
          Fs,
          ri,
          Ps,
          cn,
        ].join("|"),
        "g"
      ),
      js = RegExp("[" + Rs + nn + _s + xs + "]"),
      qi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      qs = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      ba = -1,
      qe = {};
    (qe[at] =
      qe[$e] =
      qe[It] =
      qe[Nt] =
      qe[Ht] =
      qe[Bt] =
      qe[Ft] =
      qe[Qt] =
      qe[sr] =
        !0),
      (qe[Ee] =
        qe[Dr] =
        qe[Ae] =
        qe[N] =
        qe[je] =
        qe[R] =
        qe[I] =
        qe[X] =
        qe[me] =
        qe[Oe] =
        qe[Ie] =
        qe[tt] =
        qe[Ce] =
        qe[Ke] =
        qe[Fe] =
          !1);
    var Le = {};
    (Le[Ee] =
      Le[Dr] =
      Le[Ae] =
      Le[je] =
      Le[N] =
      Le[R] =
      Le[at] =
      Le[$e] =
      Le[It] =
      Le[Nt] =
      Le[Ht] =
      Le[me] =
      Le[Oe] =
      Le[Ie] =
      Le[tt] =
      Le[Ce] =
      Le[Ke] =
      Le[Ve] =
      Le[Bt] =
      Le[Ft] =
      Le[Qt] =
      Le[sr] =
        !0),
      (Le[I] = Le[X] = Le[Fe] = !1);
    var v = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      P = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      q = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      W = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Ue = parseFloat,
      de = parseInt,
      Ge = typeof os == "object" && os && os.Object === Object && os,
      Rt = typeof self == "object" && self && self.Object === Object && self,
      Pe = Ge || Rt || Function("return this")(),
      ze = t && !t.nodeType && t,
      vt = ze && !0 && n && !n.nodeType && n,
      or = vt && vt.exports === ze,
      Tt = or && Ge.process,
      Je = (function () {
        try {
          var S = vt && vt.require && vt.require("util").types;
          return S || (Tt && Tt.binding && Tt.binding("util"));
        } catch {}
      })(),
      Xt = Je && Je.isArrayBuffer,
      Lr = Je && Je.isDate,
      Pr = Je && Je.isMap,
      Wr = Je && Je.isRegExp,
      jn = Je && Je.isSet,
      Ui = Je && Je.isTypedArray;
    function Lt(S, F, C) {
      switch (C.length) {
        case 0:
          return S.call(F);
        case 1:
          return S.call(F, C[0]);
        case 2:
          return S.call(F, C[0], C[1]);
        case 3:
          return S.call(F, C[0], C[1], C[2]);
      }
      return S.apply(F, C);
    }
    function Xp(S, F, C, G) {
      for (var fe = -1, Te = S == null ? 0 : S.length; ++fe < Te; ) {
        var $t = S[fe];
        F(G, $t, C($t), S);
      }
      return G;
    }
    function Sr(S, F) {
      for (
        var C = -1, G = S == null ? 0 : S.length;
        ++C < G && F(S[C], C, S) !== !1;

      );
      return S;
    }
    function Zp(S, F) {
      for (var C = S == null ? 0 : S.length; C-- && F(S[C], C, S) !== !1; );
      return S;
    }
    function vu(S, F) {
      for (var C = -1, G = S == null ? 0 : S.length; ++C < G; )
        if (!F(S[C], C, S)) return !1;
      return !0;
    }
    function _i(S, F) {
      for (
        var C = -1, G = S == null ? 0 : S.length, fe = 0, Te = [];
        ++C < G;

      ) {
        var $t = S[C];
        F($t, C, S) && (Te[fe++] = $t);
      }
      return Te;
    }
    function Us(S, F) {
      var C = S == null ? 0 : S.length;
      return !!C && hn(S, F, 0) > -1;
    }
    function _a(S, F, C) {
      for (var G = -1, fe = S == null ? 0 : S.length; ++G < fe; )
        if (C(F, S[G])) return !0;
      return !1;
    }
    function Xe(S, F) {
      for (var C = -1, G = S == null ? 0 : S.length, fe = Array(G); ++C < G; )
        fe[C] = F(S[C], C, S);
      return fe;
    }
    function Ei(S, F) {
      for (var C = -1, G = F.length, fe = S.length; ++C < G; ) S[fe + C] = F[C];
      return S;
    }
    function Ea(S, F, C, G) {
      var fe = -1,
        Te = S == null ? 0 : S.length;
      for (G && Te && (C = S[++fe]); ++fe < Te; ) C = F(C, S[fe], fe, S);
      return C;
    }
    function ed(S, F, C, G) {
      var fe = S == null ? 0 : S.length;
      for (G && fe && (C = S[--fe]); fe--; ) C = F(C, S[fe], fe, S);
      return C;
    }
    function Ia(S, F) {
      for (var C = -1, G = S == null ? 0 : S.length; ++C < G; )
        if (F(S[C], C, S)) return !0;
      return !1;
    }
    var td = xa("length");
    function rd(S) {
      return S.split("");
    }
    function id(S) {
      return S.match(At) || [];
    }
    function mu(S, F, C) {
      var G;
      return (
        C(S, function (fe, Te, $t) {
          if (F(fe, Te, $t)) return (G = Te), !1;
        }),
        G
      );
    }
    function zs(S, F, C, G) {
      for (var fe = S.length, Te = C + (G ? 1 : -1); G ? Te-- : ++Te < fe; )
        if (F(S[Te], Te, S)) return Te;
      return -1;
    }
    function hn(S, F, C) {
      return F === F ? gd(S, F, C) : zs(S, wu, C);
    }
    function nd(S, F, C, G) {
      for (var fe = C - 1, Te = S.length; ++fe < Te; )
        if (G(S[fe], F)) return fe;
      return -1;
    }
    function wu(S) {
      return S !== S;
    }
    function bu(S, F) {
      var C = S == null ? 0 : S.length;
      return C ? Sa(S, F) / C : H;
    }
    function xa(S) {
      return function (F) {
        return F == null ? r : F[S];
      };
    }
    function Pa(S) {
      return function (F) {
        return S == null ? r : S[F];
      };
    }
    function _u(S, F, C, G, fe) {
      return (
        fe(S, function (Te, $t, ke) {
          C = G ? ((G = !1), Te) : F(C, Te, $t, ke);
        }),
        C
      );
    }
    function sd(S, F) {
      var C = S.length;
      for (S.sort(F); C--; ) S[C] = S[C].value;
      return S;
    }
    function Sa(S, F) {
      for (var C, G = -1, fe = S.length; ++G < fe; ) {
        var Te = F(S[G]);
        Te !== r && (C = C === r ? Te : C + Te);
      }
      return C;
    }
    function Oa(S, F) {
      for (var C = -1, G = Array(S); ++C < S; ) G[C] = F(C);
      return G;
    }
    function od(S, F) {
      return Xe(F, function (C) {
        return [C, S[C]];
      });
    }
    function Eu(S) {
      return S && S.slice(0, Su(S) + 1).replace(ft, "");
    }
    function vr(S) {
      return function (F) {
        return S(F);
      };
    }
    function Aa(S, F) {
      return Xe(F, function (C) {
        return S[C];
      });
    }
    function qn(S, F) {
      return S.has(F);
    }
    function Iu(S, F) {
      for (var C = -1, G = S.length; ++C < G && hn(F, S[C], 0) > -1; );
      return C;
    }
    function xu(S, F) {
      for (var C = S.length; C-- && hn(F, S[C], 0) > -1; );
      return C;
    }
    function ad(S, F) {
      for (var C = S.length, G = 0; C--; ) S[C] === F && ++G;
      return G;
    }
    var cd = Pa(v),
      ud = Pa(P);
    function hd(S) {
      return "\\" + W[S];
    }
    function ld(S, F) {
      return S == null ? r : S[F];
    }
    function ln(S) {
      return js.test(S);
    }
    function fd(S) {
      return qi.test(S);
    }
    function pd(S) {
      for (var F, C = []; !(F = S.next()).done; ) C.push(F.value);
      return C;
    }
    function Ra(S) {
      var F = -1,
        C = Array(S.size);
      return (
        S.forEach(function (G, fe) {
          C[++F] = [fe, G];
        }),
        C
      );
    }
    function Pu(S, F) {
      return function (C) {
        return S(F(C));
      };
    }
    function Ii(S, F) {
      for (var C = -1, G = S.length, fe = 0, Te = []; ++C < G; ) {
        var $t = S[C];
        ($t === F || $t === E) && ((S[C] = E), (Te[fe++] = C));
      }
      return Te;
    }
    function ks(S) {
      var F = -1,
        C = Array(S.size);
      return (
        S.forEach(function (G) {
          C[++F] = G;
        }),
        C
      );
    }
    function dd(S) {
      var F = -1,
        C = Array(S.size);
      return (
        S.forEach(function (G) {
          C[++F] = [G, G];
        }),
        C
      );
    }
    function gd(S, F, C) {
      for (var G = C - 1, fe = S.length; ++G < fe; ) if (S[G] === F) return G;
      return -1;
    }
    function yd(S, F, C) {
      for (var G = C + 1; G--; ) if (S[G] === F) return G;
      return G;
    }
    function fn(S) {
      return ln(S) ? md(S) : td(S);
    }
    function Mr(S) {
      return ln(S) ? wd(S) : rd(S);
    }
    function Su(S) {
      for (var F = S.length; F-- && yt.test(S.charAt(F)); );
      return F;
    }
    var vd = Pa(q);
    function md(S) {
      for (var F = (un.lastIndex = 0); un.test(S); ) ++F;
      return F;
    }
    function wd(S) {
      return S.match(un) || [];
    }
    function bd(S) {
      return S.match(Ms) || [];
    }
    var _d = function S(F) {
        F = F == null ? Pe : pn.defaults(Pe.Object(), F, pn.pick(Pe, qs));
        var C = F.Array,
          G = F.Date,
          fe = F.Error,
          Te = F.Function,
          $t = F.Math,
          ke = F.Object,
          Ta = F.RegExp,
          Ed = F.String,
          Or = F.TypeError,
          Hs = C.prototype,
          Id = Te.prototype,
          dn = ke.prototype,
          Bs = F["__core-js_shared__"],
          Ks = Id.toString,
          De = dn.hasOwnProperty,
          xd = 0,
          Ou = (function () {
            var e = /[^.]+$/.exec((Bs && Bs.keys && Bs.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          Vs = dn.toString,
          Pd = Ks.call(ke),
          Sd = Pe._,
          Od = Ta(
            "^" +
              Ks.call(De)
                .replace(lt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ws = or ? F.Buffer : r,
          xi = F.Symbol,
          Gs = F.Uint8Array,
          Au = Ws ? Ws.allocUnsafe : r,
          Js = Pu(ke.getPrototypeOf, ke),
          Ru = ke.create,
          Tu = dn.propertyIsEnumerable,
          Qs = Hs.splice,
          Cu = xi ? xi.isConcatSpreadable : r,
          Un = xi ? xi.iterator : r,
          zi = xi ? xi.toStringTag : r,
          Ys = (function () {
            try {
              var e = Vi(ke, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          Ad = F.clearTimeout !== Pe.clearTimeout && F.clearTimeout,
          Rd = G && G.now !== Pe.Date.now && G.now,
          Td = F.setTimeout !== Pe.setTimeout && F.setTimeout,
          Xs = $t.ceil,
          Zs = $t.floor,
          Ca = ke.getOwnPropertySymbols,
          Cd = Ws ? Ws.isBuffer : r,
          Nu = F.isFinite,
          Nd = Hs.join,
          $d = Pu(ke.keys, ke),
          Dt = $t.max,
          Wt = $t.min,
          Dd = G.now,
          Fd = F.parseInt,
          $u = $t.random,
          Ld = Hs.reverse,
          Na = Vi(F, "DataView"),
          zn = Vi(F, "Map"),
          $a = Vi(F, "Promise"),
          gn = Vi(F, "Set"),
          kn = Vi(F, "WeakMap"),
          Hn = Vi(ke, "create"),
          eo = kn && new kn(),
          yn = {},
          Md = Wi(Na),
          jd = Wi(zn),
          qd = Wi($a),
          Ud = Wi(gn),
          zd = Wi(kn),
          to = xi ? xi.prototype : r,
          Bn = to ? to.valueOf : r,
          Du = to ? to.toString : r;
        function p(e) {
          if (dt(e) && !ge(e) && !(e instanceof xe)) {
            if (e instanceof Ar) return e;
            if (De.call(e, "__wrapped__")) return Fh(e);
          }
          return new Ar(e);
        }
        var vn = (function () {
          function e() {}
          return function (i) {
            if (!nt(i)) return {};
            if (Ru) return Ru(i);
            e.prototype = i;
            var a = new e();
            return (e.prototype = r), a;
          };
        })();
        function ro() {}
        function Ar(e, i) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!i),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (p.templateSettings = {
          escape: ut,
          evaluate: ht,
          interpolate: it,
          variable: "",
          imports: { _: p },
        }),
          (p.prototype = ro.prototype),
          (p.prototype.constructor = p),
          (Ar.prototype = vn(ro.prototype)),
          (Ar.prototype.constructor = Ar);
        function xe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = B),
            (this.__views__ = []);
        }
        function kd() {
          var e = new xe(this.__wrapped__);
          return (
            (e.__actions__ = ar(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = ar(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = ar(this.__views__)),
            e
          );
        }
        function Hd() {
          if (this.__filtered__) {
            var e = new xe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function Bd() {
          var e = this.__wrapped__.value(),
            i = this.__dir__,
            a = ge(e),
            c = i < 0,
            l = a ? e.length : 0,
            d = ry(0, l, this.__views__),
            w = d.start,
            _ = d.end,
            A = _ - w,
            M = c ? _ : w - 1,
            j = this.__iteratees__,
            U = j.length,
            V = 0,
            Z = Wt(A, this.__takeCount__);
          if (!a || (!c && l == A && Z == A)) return nh(e, this.__actions__);
          var ne = [];
          e: for (; A-- && V < Z; ) {
            M += i;
            for (var we = -1, se = e[M]; ++we < U; ) {
              var _e = j[we],
                Se = _e.iteratee,
                br = _e.type,
                tr = Se(se);
              if (br == O) se = tr;
              else if (!tr) {
                if (br == b) continue e;
                break e;
              }
            }
            ne[V++] = se;
          }
          return ne;
        }
        (xe.prototype = vn(ro.prototype)), (xe.prototype.constructor = xe);
        function ki(e) {
          var i = -1,
            a = e == null ? 0 : e.length;
          for (this.clear(); ++i < a; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Kd() {
          (this.__data__ = Hn ? Hn(null) : {}), (this.size = 0);
        }
        function Vd(e) {
          var i = this.has(e) && delete this.__data__[e];
          return (this.size -= i ? 1 : 0), i;
        }
        function Wd(e) {
          var i = this.__data__;
          if (Hn) {
            var a = i[e];
            return a === m ? r : a;
          }
          return De.call(i, e) ? i[e] : r;
        }
        function Gd(e) {
          var i = this.__data__;
          return Hn ? i[e] !== r : De.call(i, e);
        }
        function Jd(e, i) {
          var a = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (a[e] = Hn && i === r ? m : i),
            this
          );
        }
        (ki.prototype.clear = Kd),
          (ki.prototype.delete = Vd),
          (ki.prototype.get = Wd),
          (ki.prototype.has = Gd),
          (ki.prototype.set = Jd);
        function ii(e) {
          var i = -1,
            a = e == null ? 0 : e.length;
          for (this.clear(); ++i < a; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Qd() {
          (this.__data__ = []), (this.size = 0);
        }
        function Yd(e) {
          var i = this.__data__,
            a = io(i, e);
          if (a < 0) return !1;
          var c = i.length - 1;
          return a == c ? i.pop() : Qs.call(i, a, 1), --this.size, !0;
        }
        function Xd(e) {
          var i = this.__data__,
            a = io(i, e);
          return a < 0 ? r : i[a][1];
        }
        function Zd(e) {
          return io(this.__data__, e) > -1;
        }
        function eg(e, i) {
          var a = this.__data__,
            c = io(a, e);
          return c < 0 ? (++this.size, a.push([e, i])) : (a[c][1] = i), this;
        }
        (ii.prototype.clear = Qd),
          (ii.prototype.delete = Yd),
          (ii.prototype.get = Xd),
          (ii.prototype.has = Zd),
          (ii.prototype.set = eg);
        function ni(e) {
          var i = -1,
            a = e == null ? 0 : e.length;
          for (this.clear(); ++i < a; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function tg() {
          (this.size = 0),
            (this.__data__ = {
              hash: new ki(),
              map: new (zn || ii)(),
              string: new ki(),
            });
        }
        function rg(e) {
          var i = yo(this, e).delete(e);
          return (this.size -= i ? 1 : 0), i;
        }
        function ig(e) {
          return yo(this, e).get(e);
        }
        function ng(e) {
          return yo(this, e).has(e);
        }
        function sg(e, i) {
          var a = yo(this, e),
            c = a.size;
          return a.set(e, i), (this.size += a.size == c ? 0 : 1), this;
        }
        (ni.prototype.clear = tg),
          (ni.prototype.delete = rg),
          (ni.prototype.get = ig),
          (ni.prototype.has = ng),
          (ni.prototype.set = sg);
        function Hi(e) {
          var i = -1,
            a = e == null ? 0 : e.length;
          for (this.__data__ = new ni(); ++i < a; ) this.add(e[i]);
        }
        function og(e) {
          return this.__data__.set(e, m), this;
        }
        function ag(e) {
          return this.__data__.has(e);
        }
        (Hi.prototype.add = Hi.prototype.push = og), (Hi.prototype.has = ag);
        function jr(e) {
          var i = (this.__data__ = new ii(e));
          this.size = i.size;
        }
        function cg() {
          (this.__data__ = new ii()), (this.size = 0);
        }
        function ug(e) {
          var i = this.__data__,
            a = i.delete(e);
          return (this.size = i.size), a;
        }
        function hg(e) {
          return this.__data__.get(e);
        }
        function lg(e) {
          return this.__data__.has(e);
        }
        function fg(e, i) {
          var a = this.__data__;
          if (a instanceof ii) {
            var c = a.__data__;
            if (!zn || c.length < o - 1)
              return c.push([e, i]), (this.size = ++a.size), this;
            a = this.__data__ = new ni(c);
          }
          return a.set(e, i), (this.size = a.size), this;
        }
        (jr.prototype.clear = cg),
          (jr.prototype.delete = ug),
          (jr.prototype.get = hg),
          (jr.prototype.has = lg),
          (jr.prototype.set = fg);
        function Fu(e, i) {
          var a = ge(e),
            c = !a && Gi(e),
            l = !a && !c && Ri(e),
            d = !a && !c && !l && _n(e),
            w = a || c || l || d,
            _ = w ? Oa(e.length, Ed) : [],
            A = _.length;
          for (var M in e)
            (i || De.call(e, M)) &&
              !(
                w &&
                (M == "length" ||
                  (l && (M == "offset" || M == "parent")) ||
                  (d &&
                    (M == "buffer" ||
                      M == "byteLength" ||
                      M == "byteOffset")) ||
                  ci(M, A))
              ) &&
              _.push(M);
          return _;
        }
        function Lu(e) {
          var i = e.length;
          return i ? e[Ba(0, i - 1)] : r;
        }
        function pg(e, i) {
          return vo(ar(e), Bi(i, 0, e.length));
        }
        function dg(e) {
          return vo(ar(e));
        }
        function Da(e, i, a) {
          ((a !== r && !qr(e[i], a)) || (a === r && !(i in e))) && si(e, i, a);
        }
        function Kn(e, i, a) {
          var c = e[i];
          (!(De.call(e, i) && qr(c, a)) || (a === r && !(i in e))) &&
            si(e, i, a);
        }
        function io(e, i) {
          for (var a = e.length; a--; ) if (qr(e[a][0], i)) return a;
          return -1;
        }
        function gg(e, i, a, c) {
          return (
            Pi(e, function (l, d, w) {
              i(c, l, a(l), w);
            }),
            c
          );
        }
        function Mu(e, i) {
          return e && Jr(i, Mt(i), e);
        }
        function yg(e, i) {
          return e && Jr(i, ur(i), e);
        }
        function si(e, i, a) {
          i == "__proto__" && Ys
            ? Ys(e, i, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (e[i] = a);
        }
        function Fa(e, i) {
          for (var a = -1, c = i.length, l = C(c), d = e == null; ++a < c; )
            l[a] = d ? r : gc(e, i[a]);
          return l;
        }
        function Bi(e, i, a) {
          return (
            e === e &&
              (a !== r && (e = e <= a ? e : a),
              i !== r && (e = e >= i ? e : i)),
            e
          );
        }
        function Rr(e, i, a, c, l, d) {
          var w,
            _ = i & x,
            A = i & $,
            M = i & L;
          if ((a && (w = l ? a(e, c, l, d) : a(e)), w !== r)) return w;
          if (!nt(e)) return e;
          var j = ge(e);
          if (j) {
            if (((w = ny(e)), !_)) return ar(e, w);
          } else {
            var U = Gt(e),
              V = U == X || U == ue;
            if (Ri(e)) return ah(e, _);
            if (U == Ie || U == Ee || (V && !l)) {
              if (((w = A || V ? {} : Sh(e)), !_))
                return A ? Wg(e, yg(w, e)) : Vg(e, Mu(w, e));
            } else {
              if (!Le[U]) return l ? e : {};
              w = sy(e, U, _);
            }
          }
          d || (d = new jr());
          var Z = d.get(e);
          if (Z) return Z;
          d.set(e, w),
            tl(e)
              ? e.forEach(function (se) {
                  w.add(Rr(se, i, a, se, e, d));
                })
              : Zh(e) &&
                e.forEach(function (se, _e) {
                  w.set(_e, Rr(se, i, a, _e, e, d));
                });
          var ne = M ? (A ? tc : ec) : A ? ur : Mt,
            we = j ? r : ne(e);
          return (
            Sr(we || e, function (se, _e) {
              we && ((_e = se), (se = e[_e])),
                Kn(w, _e, Rr(se, i, a, _e, e, d));
            }),
            w
          );
        }
        function vg(e) {
          var i = Mt(e);
          return function (a) {
            return ju(a, e, i);
          };
        }
        function ju(e, i, a) {
          var c = a.length;
          if (e == null) return !c;
          for (e = ke(e); c--; ) {
            var l = a[c],
              d = i[l],
              w = e[l];
            if ((w === r && !(l in e)) || !d(w)) return !1;
          }
          return !0;
        }
        function qu(e, i, a) {
          if (typeof e != "function") throw new Or(f);
          return Xn(function () {
            e.apply(r, a);
          }, i);
        }
        function Vn(e, i, a, c) {
          var l = -1,
            d = Us,
            w = !0,
            _ = e.length,
            A = [],
            M = i.length;
          if (!_) return A;
          a && (i = Xe(i, vr(a))),
            c
              ? ((d = _a), (w = !1))
              : i.length >= o && ((d = qn), (w = !1), (i = new Hi(i)));
          e: for (; ++l < _; ) {
            var j = e[l],
              U = a == null ? j : a(j);
            if (((j = c || j !== 0 ? j : 0), w && U === U)) {
              for (var V = M; V--; ) if (i[V] === U) continue e;
              A.push(j);
            } else d(i, U, c) || A.push(j);
          }
          return A;
        }
        var Pi = fh(Gr),
          Uu = fh(Ma, !0);
        function mg(e, i) {
          var a = !0;
          return (
            Pi(e, function (c, l, d) {
              return (a = !!i(c, l, d)), a;
            }),
            a
          );
        }
        function no(e, i, a) {
          for (var c = -1, l = e.length; ++c < l; ) {
            var d = e[c],
              w = i(d);
            if (w != null && (_ === r ? w === w && !wr(w) : a(w, _)))
              var _ = w,
                A = d;
          }
          return A;
        }
        function wg(e, i, a, c) {
          var l = e.length;
          for (
            a = ye(a),
              a < 0 && (a = -a > l ? 0 : l + a),
              c = c === r || c > l ? l : ye(c),
              c < 0 && (c += l),
              c = a > c ? 0 : il(c);
            a < c;

          )
            e[a++] = i;
          return e;
        }
        function zu(e, i) {
          var a = [];
          return (
            Pi(e, function (c, l, d) {
              i(c, l, d) && a.push(c);
            }),
            a
          );
        }
        function Kt(e, i, a, c, l) {
          var d = -1,
            w = e.length;
          for (a || (a = ay), l || (l = []); ++d < w; ) {
            var _ = e[d];
            i > 0 && a(_)
              ? i > 1
                ? Kt(_, i - 1, a, c, l)
                : Ei(l, _)
              : c || (l[l.length] = _);
          }
          return l;
        }
        var La = ph(),
          ku = ph(!0);
        function Gr(e, i) {
          return e && La(e, i, Mt);
        }
        function Ma(e, i) {
          return e && ku(e, i, Mt);
        }
        function so(e, i) {
          return _i(i, function (a) {
            return ui(e[a]);
          });
        }
        function Ki(e, i) {
          i = Oi(i, e);
          for (var a = 0, c = i.length; e != null && a < c; ) e = e[Qr(i[a++])];
          return a && a == c ? e : r;
        }
        function Hu(e, i, a) {
          var c = i(e);
          return ge(e) ? c : Ei(c, a(e));
        }
        function Zt(e) {
          return e == null
            ? e === r
              ? rt
              : Re
            : zi && zi in ke(e)
            ? ty(e)
            : dy(e);
        }
        function ja(e, i) {
          return e > i;
        }
        function bg(e, i) {
          return e != null && De.call(e, i);
        }
        function _g(e, i) {
          return e != null && i in ke(e);
        }
        function Eg(e, i, a) {
          return e >= Wt(i, a) && e < Dt(i, a);
        }
        function qa(e, i, a) {
          for (
            var c = a ? _a : Us,
              l = e[0].length,
              d = e.length,
              w = d,
              _ = C(d),
              A = 1 / 0,
              M = [];
            w--;

          ) {
            var j = e[w];
            w && i && (j = Xe(j, vr(i))),
              (A = Wt(j.length, A)),
              (_[w] =
                !a && (i || (l >= 120 && j.length >= 120))
                  ? new Hi(w && j)
                  : r);
          }
          j = e[0];
          var U = -1,
            V = _[0];
          e: for (; ++U < l && M.length < A; ) {
            var Z = j[U],
              ne = i ? i(Z) : Z;
            if (((Z = a || Z !== 0 ? Z : 0), !(V ? qn(V, ne) : c(M, ne, a)))) {
              for (w = d; --w; ) {
                var we = _[w];
                if (!(we ? qn(we, ne) : c(e[w], ne, a))) continue e;
              }
              V && V.push(ne), M.push(Z);
            }
          }
          return M;
        }
        function Ig(e, i, a, c) {
          return (
            Gr(e, function (l, d, w) {
              i(c, a(l), d, w);
            }),
            c
          );
        }
        function Wn(e, i, a) {
          (i = Oi(i, e)), (e = Th(e, i));
          var c = e == null ? e : e[Qr(Cr(i))];
          return c == null ? r : Lt(c, e, a);
        }
        function Bu(e) {
          return dt(e) && Zt(e) == Ee;
        }
        function xg(e) {
          return dt(e) && Zt(e) == Ae;
        }
        function Pg(e) {
          return dt(e) && Zt(e) == R;
        }
        function Gn(e, i, a, c, l) {
          return e === i
            ? !0
            : e == null || i == null || (!dt(e) && !dt(i))
            ? e !== e && i !== i
            : Sg(e, i, a, c, Gn, l);
        }
        function Sg(e, i, a, c, l, d) {
          var w = ge(e),
            _ = ge(i),
            A = w ? Dr : Gt(e),
            M = _ ? Dr : Gt(i);
          (A = A == Ee ? Ie : A), (M = M == Ee ? Ie : M);
          var j = A == Ie,
            U = M == Ie,
            V = A == M;
          if (V && Ri(e)) {
            if (!Ri(i)) return !1;
            (w = !0), (j = !1);
          }
          if (V && !j)
            return (
              d || (d = new jr()),
              w || _n(e) ? Ih(e, i, a, c, l, d) : Zg(e, i, A, a, c, l, d)
            );
          if (!(a & T)) {
            var Z = j && De.call(e, "__wrapped__"),
              ne = U && De.call(i, "__wrapped__");
            if (Z || ne) {
              var we = Z ? e.value() : e,
                se = ne ? i.value() : i;
              return d || (d = new jr()), l(we, se, a, c, d);
            }
          }
          return V ? (d || (d = new jr()), ey(e, i, a, c, l, d)) : !1;
        }
        function Og(e) {
          return dt(e) && Gt(e) == me;
        }
        function Ua(e, i, a, c) {
          var l = a.length,
            d = l,
            w = !c;
          if (e == null) return !d;
          for (e = ke(e); l--; ) {
            var _ = a[l];
            if (w && _[2] ? _[1] !== e[_[0]] : !(_[0] in e)) return !1;
          }
          for (; ++l < d; ) {
            _ = a[l];
            var A = _[0],
              M = e[A],
              j = _[1];
            if (w && _[2]) {
              if (M === r && !(A in e)) return !1;
            } else {
              var U = new jr();
              if (c) var V = c(M, j, A, e, i, U);
              if (!(V === r ? Gn(j, M, T | Y, c, U) : V)) return !1;
            }
          }
          return !0;
        }
        function Ku(e) {
          if (!nt(e) || uy(e)) return !1;
          var i = ui(e) ? Od : sa;
          return i.test(Wi(e));
        }
        function Ag(e) {
          return dt(e) && Zt(e) == tt;
        }
        function Rg(e) {
          return dt(e) && Gt(e) == Ce;
        }
        function Tg(e) {
          return dt(e) && Io(e.length) && !!qe[Zt(e)];
        }
        function Vu(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? hr
            : typeof e == "object"
            ? ge(e)
              ? Ju(e[0], e[1])
              : Gu(e)
            : dl(e);
        }
        function za(e) {
          if (!Yn(e)) return $d(e);
          var i = [];
          for (var a in ke(e)) De.call(e, a) && a != "constructor" && i.push(a);
          return i;
        }
        function Cg(e) {
          if (!nt(e)) return py(e);
          var i = Yn(e),
            a = [];
          for (var c in e)
            (c == "constructor" && (i || !De.call(e, c))) || a.push(c);
          return a;
        }
        function ka(e, i) {
          return e < i;
        }
        function Wu(e, i) {
          var a = -1,
            c = cr(e) ? C(e.length) : [];
          return (
            Pi(e, function (l, d, w) {
              c[++a] = i(l, d, w);
            }),
            c
          );
        }
        function Gu(e) {
          var i = ic(e);
          return i.length == 1 && i[0][2]
            ? Ah(i[0][0], i[0][1])
            : function (a) {
                return a === e || Ua(a, e, i);
              };
        }
        function Ju(e, i) {
          return sc(e) && Oh(i)
            ? Ah(Qr(e), i)
            : function (a) {
                var c = gc(a, e);
                return c === r && c === i ? yc(a, e) : Gn(i, c, T | Y);
              };
        }
        function oo(e, i, a, c, l) {
          e !== i &&
            La(
              i,
              function (d, w) {
                if ((l || (l = new jr()), nt(d))) Ng(e, i, w, a, oo, c, l);
                else {
                  var _ = c ? c(ac(e, w), d, w + "", e, i, l) : r;
                  _ === r && (_ = d), Da(e, w, _);
                }
              },
              ur
            );
        }
        function Ng(e, i, a, c, l, d, w) {
          var _ = ac(e, a),
            A = ac(i, a),
            M = w.get(A);
          if (M) {
            Da(e, a, M);
            return;
          }
          var j = d ? d(_, A, a + "", e, i, w) : r,
            U = j === r;
          if (U) {
            var V = ge(A),
              Z = !V && Ri(A),
              ne = !V && !Z && _n(A);
            (j = A),
              V || Z || ne
                ? ge(_)
                  ? (j = _)
                  : mt(_)
                  ? (j = ar(_))
                  : Z
                  ? ((U = !1), (j = ah(A, !0)))
                  : ne
                  ? ((U = !1), (j = ch(A, !0)))
                  : (j = [])
                : Zn(A) || Gi(A)
                ? ((j = _),
                  Gi(_) ? (j = nl(_)) : (!nt(_) || ui(_)) && (j = Sh(A)))
                : (U = !1);
          }
          U && (w.set(A, j), l(j, A, c, d, w), w.delete(A)), Da(e, a, j);
        }
        function Qu(e, i) {
          var a = e.length;
          if (a) return (i += i < 0 ? a : 0), ci(i, a) ? e[i] : r;
        }
        function Yu(e, i, a) {
          i.length
            ? (i = Xe(i, function (d) {
                return ge(d)
                  ? function (w) {
                      return Ki(w, d.length === 1 ? d[0] : d);
                    }
                  : d;
              }))
            : (i = [hr]);
          var c = -1;
          i = Xe(i, vr(ie()));
          var l = Wu(e, function (d, w, _) {
            var A = Xe(i, function (M) {
              return M(d);
            });
            return { criteria: A, index: ++c, value: d };
          });
          return sd(l, function (d, w) {
            return Kg(d, w, a);
          });
        }
        function $g(e, i) {
          return Xu(e, i, function (a, c) {
            return yc(e, c);
          });
        }
        function Xu(e, i, a) {
          for (var c = -1, l = i.length, d = {}; ++c < l; ) {
            var w = i[c],
              _ = Ki(e, w);
            a(_, w) && Jn(d, Oi(w, e), _);
          }
          return d;
        }
        function Dg(e) {
          return function (i) {
            return Ki(i, e);
          };
        }
        function Ha(e, i, a, c) {
          var l = c ? nd : hn,
            d = -1,
            w = i.length,
            _ = e;
          for (e === i && (i = ar(i)), a && (_ = Xe(e, vr(a))); ++d < w; )
            for (
              var A = 0, M = i[d], j = a ? a(M) : M;
              (A = l(_, j, A, c)) > -1;

            )
              _ !== e && Qs.call(_, A, 1), Qs.call(e, A, 1);
          return e;
        }
        function Zu(e, i) {
          for (var a = e ? i.length : 0, c = a - 1; a--; ) {
            var l = i[a];
            if (a == c || l !== d) {
              var d = l;
              ci(l) ? Qs.call(e, l, 1) : Wa(e, l);
            }
          }
          return e;
        }
        function Ba(e, i) {
          return e + Zs($u() * (i - e + 1));
        }
        function Fg(e, i, a, c) {
          for (var l = -1, d = Dt(Xs((i - e) / (a || 1)), 0), w = C(d); d--; )
            (w[c ? d : ++l] = e), (e += a);
          return w;
        }
        function Ka(e, i) {
          var a = "";
          if (!e || i < 1 || i > k) return a;
          do i % 2 && (a += e), (i = Zs(i / 2)), i && (e += e);
          while (i);
          return a;
        }
        function be(e, i) {
          return cc(Rh(e, i, hr), e + "");
        }
        function Lg(e) {
          return Lu(En(e));
        }
        function Mg(e, i) {
          var a = En(e);
          return vo(a, Bi(i, 0, a.length));
        }
        function Jn(e, i, a, c) {
          if (!nt(e)) return e;
          i = Oi(i, e);
          for (
            var l = -1, d = i.length, w = d - 1, _ = e;
            _ != null && ++l < d;

          ) {
            var A = Qr(i[l]),
              M = a;
            if (A === "__proto__" || A === "constructor" || A === "prototype")
              return e;
            if (l != w) {
              var j = _[A];
              (M = c ? c(j, A, _) : r),
                M === r && (M = nt(j) ? j : ci(i[l + 1]) ? [] : {});
            }
            Kn(_, A, M), (_ = _[A]);
          }
          return e;
        }
        var eh = eo
            ? function (e, i) {
                return eo.set(e, i), e;
              }
            : hr,
          jg = Ys
            ? function (e, i) {
                return Ys(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: mc(i),
                  writable: !0,
                });
              }
            : hr;
        function qg(e) {
          return vo(En(e));
        }
        function Tr(e, i, a) {
          var c = -1,
            l = e.length;
          i < 0 && (i = -i > l ? 0 : l + i),
            (a = a > l ? l : a),
            a < 0 && (a += l),
            (l = i > a ? 0 : (a - i) >>> 0),
            (i >>>= 0);
          for (var d = C(l); ++c < l; ) d[c] = e[c + i];
          return d;
        }
        function Ug(e, i) {
          var a;
          return (
            Pi(e, function (c, l, d) {
              return (a = i(c, l, d)), !a;
            }),
            !!a
          );
        }
        function ao(e, i, a) {
          var c = 0,
            l = e == null ? c : e.length;
          if (typeof i == "number" && i === i && l <= ot) {
            for (; c < l; ) {
              var d = (c + l) >>> 1,
                w = e[d];
              w !== null && !wr(w) && (a ? w <= i : w < i)
                ? (c = d + 1)
                : (l = d);
            }
            return l;
          }
          return Va(e, i, hr, a);
        }
        function Va(e, i, a, c) {
          var l = 0,
            d = e == null ? 0 : e.length;
          if (d === 0) return 0;
          i = a(i);
          for (
            var w = i !== i, _ = i === null, A = wr(i), M = i === r;
            l < d;

          ) {
            var j = Zs((l + d) / 2),
              U = a(e[j]),
              V = U !== r,
              Z = U === null,
              ne = U === U,
              we = wr(U);
            if (w) var se = c || ne;
            else
              M
                ? (se = ne && (c || V))
                : _
                ? (se = ne && V && (c || !Z))
                : A
                ? (se = ne && V && !Z && (c || !we))
                : Z || we
                ? (se = !1)
                : (se = c ? U <= i : U < i);
            se ? (l = j + 1) : (d = j);
          }
          return Wt(d, et);
        }
        function th(e, i) {
          for (var a = -1, c = e.length, l = 0, d = []; ++a < c; ) {
            var w = e[a],
              _ = i ? i(w) : w;
            if (!a || !qr(_, A)) {
              var A = _;
              d[l++] = w === 0 ? 0 : w;
            }
          }
          return d;
        }
        function rh(e) {
          return typeof e == "number" ? e : wr(e) ? H : +e;
        }
        function mr(e) {
          if (typeof e == "string") return e;
          if (ge(e)) return Xe(e, mr) + "";
          if (wr(e)) return Du ? Du.call(e) : "";
          var i = e + "";
          return i == "0" && 1 / e == -le ? "-0" : i;
        }
        function Si(e, i, a) {
          var c = -1,
            l = Us,
            d = e.length,
            w = !0,
            _ = [],
            A = _;
          if (a) (w = !1), (l = _a);
          else if (d >= o) {
            var M = i ? null : Yg(e);
            if (M) return ks(M);
            (w = !1), (l = qn), (A = new Hi());
          } else A = i ? [] : _;
          e: for (; ++c < d; ) {
            var j = e[c],
              U = i ? i(j) : j;
            if (((j = a || j !== 0 ? j : 0), w && U === U)) {
              for (var V = A.length; V--; ) if (A[V] === U) continue e;
              i && A.push(U), _.push(j);
            } else l(A, U, a) || (A !== _ && A.push(U), _.push(j));
          }
          return _;
        }
        function Wa(e, i) {
          return (
            (i = Oi(i, e)), (e = Th(e, i)), e == null || delete e[Qr(Cr(i))]
          );
        }
        function ih(e, i, a, c) {
          return Jn(e, i, a(Ki(e, i)), c);
        }
        function co(e, i, a, c) {
          for (
            var l = e.length, d = c ? l : -1;
            (c ? d-- : ++d < l) && i(e[d], d, e);

          );
          return a
            ? Tr(e, c ? 0 : d, c ? d + 1 : l)
            : Tr(e, c ? d + 1 : 0, c ? l : d);
        }
        function nh(e, i) {
          var a = e;
          return (
            a instanceof xe && (a = a.value()),
            Ea(
              i,
              function (c, l) {
                return l.func.apply(l.thisArg, Ei([c], l.args));
              },
              a
            )
          );
        }
        function Ga(e, i, a) {
          var c = e.length;
          if (c < 2) return c ? Si(e[0]) : [];
          for (var l = -1, d = C(c); ++l < c; )
            for (var w = e[l], _ = -1; ++_ < c; )
              _ != l && (d[l] = Vn(d[l] || w, e[_], i, a));
          return Si(Kt(d, 1), i, a);
        }
        function sh(e, i, a) {
          for (var c = -1, l = e.length, d = i.length, w = {}; ++c < l; ) {
            var _ = c < d ? i[c] : r;
            a(w, e[c], _);
          }
          return w;
        }
        function Ja(e) {
          return mt(e) ? e : [];
        }
        function Qa(e) {
          return typeof e == "function" ? e : hr;
        }
        function Oi(e, i) {
          return ge(e) ? e : sc(e, i) ? [e] : Dh(Ne(e));
        }
        var zg = be;
        function Ai(e, i, a) {
          var c = e.length;
          return (a = a === r ? c : a), !i && a >= c ? e : Tr(e, i, a);
        }
        var oh =
          Ad ||
          function (e) {
            return Pe.clearTimeout(e);
          };
        function ah(e, i) {
          if (i) return e.slice();
          var a = e.length,
            c = Au ? Au(a) : new e.constructor(a);
          return e.copy(c), c;
        }
        function Ya(e) {
          var i = new e.constructor(e.byteLength);
          return new Gs(i).set(new Gs(e)), i;
        }
        function kg(e, i) {
          var a = i ? Ya(e.buffer) : e.buffer;
          return new e.constructor(a, e.byteOffset, e.byteLength);
        }
        function Hg(e) {
          var i = new e.constructor(e.source, xr.exec(e));
          return (i.lastIndex = e.lastIndex), i;
        }
        function Bg(e) {
          return Bn ? ke(Bn.call(e)) : {};
        }
        function ch(e, i) {
          var a = i ? Ya(e.buffer) : e.buffer;
          return new e.constructor(a, e.byteOffset, e.length);
        }
        function uh(e, i) {
          if (e !== i) {
            var a = e !== r,
              c = e === null,
              l = e === e,
              d = wr(e),
              w = i !== r,
              _ = i === null,
              A = i === i,
              M = wr(i);
            if (
              (!_ && !M && !d && e > i) ||
              (d && w && A && !_ && !M) ||
              (c && w && A) ||
              (!a && A) ||
              !l
            )
              return 1;
            if (
              (!c && !d && !M && e < i) ||
              (M && a && l && !c && !d) ||
              (_ && a && l) ||
              (!w && l) ||
              !A
            )
              return -1;
          }
          return 0;
        }
        function Kg(e, i, a) {
          for (
            var c = -1,
              l = e.criteria,
              d = i.criteria,
              w = l.length,
              _ = a.length;
            ++c < w;

          ) {
            var A = uh(l[c], d[c]);
            if (A) {
              if (c >= _) return A;
              var M = a[c];
              return A * (M == "desc" ? -1 : 1);
            }
          }
          return e.index - i.index;
        }
        function hh(e, i, a, c) {
          for (
            var l = -1,
              d = e.length,
              w = a.length,
              _ = -1,
              A = i.length,
              M = Dt(d - w, 0),
              j = C(A + M),
              U = !c;
            ++_ < A;

          )
            j[_] = i[_];
          for (; ++l < w; ) (U || l < d) && (j[a[l]] = e[l]);
          for (; M--; ) j[_++] = e[l++];
          return j;
        }
        function lh(e, i, a, c) {
          for (
            var l = -1,
              d = e.length,
              w = -1,
              _ = a.length,
              A = -1,
              M = i.length,
              j = Dt(d - _, 0),
              U = C(j + M),
              V = !c;
            ++l < j;

          )
            U[l] = e[l];
          for (var Z = l; ++A < M; ) U[Z + A] = i[A];
          for (; ++w < _; ) (V || l < d) && (U[Z + a[w]] = e[l++]);
          return U;
        }
        function ar(e, i) {
          var a = -1,
            c = e.length;
          for (i || (i = C(c)); ++a < c; ) i[a] = e[a];
          return i;
        }
        function Jr(e, i, a, c) {
          var l = !a;
          a || (a = {});
          for (var d = -1, w = i.length; ++d < w; ) {
            var _ = i[d],
              A = c ? c(a[_], e[_], _, a, e) : r;
            A === r && (A = e[_]), l ? si(a, _, A) : Kn(a, _, A);
          }
          return a;
        }
        function Vg(e, i) {
          return Jr(e, nc(e), i);
        }
        function Wg(e, i) {
          return Jr(e, xh(e), i);
        }
        function uo(e, i) {
          return function (a, c) {
            var l = ge(a) ? Xp : gg,
              d = i ? i() : {};
            return l(a, e, ie(c, 2), d);
          };
        }
        function mn(e) {
          return be(function (i, a) {
            var c = -1,
              l = a.length,
              d = l > 1 ? a[l - 1] : r,
              w = l > 2 ? a[2] : r;
            for (
              d = e.length > 3 && typeof d == "function" ? (l--, d) : r,
                w && er(a[0], a[1], w) && ((d = l < 3 ? r : d), (l = 1)),
                i = ke(i);
              ++c < l;

            ) {
              var _ = a[c];
              _ && e(i, _, c, d);
            }
            return i;
          });
        }
        function fh(e, i) {
          return function (a, c) {
            if (a == null) return a;
            if (!cr(a)) return e(a, c);
            for (
              var l = a.length, d = i ? l : -1, w = ke(a);
              (i ? d-- : ++d < l) && c(w[d], d, w) !== !1;

            );
            return a;
          };
        }
        function ph(e) {
          return function (i, a, c) {
            for (var l = -1, d = ke(i), w = c(i), _ = w.length; _--; ) {
              var A = w[e ? _ : ++l];
              if (a(d[A], A, d) === !1) break;
            }
            return i;
          };
        }
        function Gg(e, i, a) {
          var c = i & re,
            l = Qn(e);
          function d() {
            var w = this && this !== Pe && this instanceof d ? l : e;
            return w.apply(c ? a : this, arguments);
          }
          return d;
        }
        function dh(e) {
          return function (i) {
            i = Ne(i);
            var a = ln(i) ? Mr(i) : r,
              c = a ? a[0] : i.charAt(0),
              l = a ? Ai(a, 1).join("") : i.slice(1);
            return c[e]() + l;
          };
        }
        function wn(e) {
          return function (i) {
            return Ea(fl(ll(i).replace(Mn, "")), e, "");
          };
        }
        function Qn(e) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new e();
              case 1:
                return new e(i[0]);
              case 2:
                return new e(i[0], i[1]);
              case 3:
                return new e(i[0], i[1], i[2]);
              case 4:
                return new e(i[0], i[1], i[2], i[3]);
              case 5:
                return new e(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var a = vn(e.prototype),
              c = e.apply(a, i);
            return nt(c) ? c : a;
          };
        }
        function Jg(e, i, a) {
          var c = Qn(e);
          function l() {
            for (var d = arguments.length, w = C(d), _ = d, A = bn(l); _--; )
              w[_] = arguments[_];
            var M = d < 3 && w[0] !== A && w[d - 1] !== A ? [] : Ii(w, A);
            if (((d -= M.length), d < a))
              return wh(e, i, ho, l.placeholder, r, w, M, r, r, a - d);
            var j = this && this !== Pe && this instanceof l ? c : e;
            return Lt(j, this, w);
          }
          return l;
        }
        function gh(e) {
          return function (i, a, c) {
            var l = ke(i);
            if (!cr(i)) {
              var d = ie(a, 3);
              (i = Mt(i)),
                (a = function (_) {
                  return d(l[_], _, l);
                });
            }
            var w = e(i, a, c);
            return w > -1 ? l[d ? i[w] : w] : r;
          };
        }
        function yh(e) {
          return ai(function (i) {
            var a = i.length,
              c = a,
              l = Ar.prototype.thru;
            for (e && i.reverse(); c--; ) {
              var d = i[c];
              if (typeof d != "function") throw new Or(f);
              if (l && !w && go(d) == "wrapper") var w = new Ar([], !0);
            }
            for (c = w ? c : a; ++c < a; ) {
              d = i[c];
              var _ = go(d),
                A = _ == "wrapper" ? rc(d) : r;
              A &&
              oc(A[0]) &&
              A[1] == (Q | ae | he | ve) &&
              !A[4].length &&
              A[9] == 1
                ? (w = w[go(A[0])].apply(w, A[3]))
                : (w = d.length == 1 && oc(d) ? w[_]() : w.thru(d));
            }
            return function () {
              var M = arguments,
                j = M[0];
              if (w && M.length == 1 && ge(j)) return w.plant(j).value();
              for (var U = 0, V = a ? i[U].apply(this, M) : j; ++U < a; )
                V = i[U].call(this, V);
              return V;
            };
          });
        }
        function ho(e, i, a, c, l, d, w, _, A, M) {
          var j = i & Q,
            U = i & re,
            V = i & oe,
            Z = i & (ae | te),
            ne = i & _t,
            we = V ? r : Qn(e);
          function se() {
            for (var _e = arguments.length, Se = C(_e), br = _e; br--; )
              Se[br] = arguments[br];
            if (Z)
              var tr = bn(se),
                _r = ad(Se, tr);
            if (
              (c && (Se = hh(Se, c, l, Z)),
              d && (Se = lh(Se, d, w, Z)),
              (_e -= _r),
              Z && _e < M)
            ) {
              var wt = Ii(Se, tr);
              return wh(e, i, ho, se.placeholder, a, Se, wt, _, A, M - _e);
            }
            var Ur = U ? a : this,
              li = V ? Ur[e] : e;
            return (
              (_e = Se.length),
              _ ? (Se = gy(Se, _)) : ne && _e > 1 && Se.reverse(),
              j && A < _e && (Se.length = A),
              this && this !== Pe && this instanceof se && (li = we || Qn(li)),
              li.apply(Ur, Se)
            );
          }
          return se;
        }
        function vh(e, i) {
          return function (a, c) {
            return Ig(a, e, i(c), {});
          };
        }
        function lo(e, i) {
          return function (a, c) {
            var l;
            if (a === r && c === r) return i;
            if ((a !== r && (l = a), c !== r)) {
              if (l === r) return c;
              typeof a == "string" || typeof c == "string"
                ? ((a = mr(a)), (c = mr(c)))
                : ((a = rh(a)), (c = rh(c))),
                (l = e(a, c));
            }
            return l;
          };
        }
        function Xa(e) {
          return ai(function (i) {
            return (
              (i = Xe(i, vr(ie()))),
              be(function (a) {
                var c = this;
                return e(i, function (l) {
                  return Lt(l, c, a);
                });
              })
            );
          });
        }
        function fo(e, i) {
          i = i === r ? " " : mr(i);
          var a = i.length;
          if (a < 2) return a ? Ka(i, e) : i;
          var c = Ka(i, Xs(e / fn(i)));
          return ln(i) ? Ai(Mr(c), 0, e).join("") : c.slice(0, e);
        }
        function Qg(e, i, a, c) {
          var l = i & re,
            d = Qn(e);
          function w() {
            for (
              var _ = -1,
                A = arguments.length,
                M = -1,
                j = c.length,
                U = C(j + A),
                V = this && this !== Pe && this instanceof w ? d : e;
              ++M < j;

            )
              U[M] = c[M];
            for (; A--; ) U[M++] = arguments[++_];
            return Lt(V, l ? a : this, U);
          }
          return w;
        }
        function mh(e) {
          return function (i, a, c) {
            return (
              c && typeof c != "number" && er(i, a, c) && (a = c = r),
              (i = hi(i)),
              a === r ? ((a = i), (i = 0)) : (a = hi(a)),
              (c = c === r ? (i < a ? 1 : -1) : hi(c)),
              Fg(i, a, c, e)
            );
          };
        }
        function po(e) {
          return function (i, a) {
            return (
              (typeof i == "string" && typeof a == "string") ||
                ((i = Nr(i)), (a = Nr(a))),
              e(i, a)
            );
          };
        }
        function wh(e, i, a, c, l, d, w, _, A, M) {
          var j = i & ae,
            U = j ? w : r,
            V = j ? r : w,
            Z = j ? d : r,
            ne = j ? r : d;
          (i |= j ? he : pe),
            (i &= ~(j ? pe : he)),
            i & ce || (i &= ~(re | oe));
          var we = [e, i, l, Z, U, ne, V, _, A, M],
            se = a.apply(r, we);
          return oc(e) && Ch(se, we), (se.placeholder = c), Nh(se, e, i);
        }
        function Za(e) {
          var i = $t[e];
          return function (a, c) {
            if (
              ((a = Nr(a)), (c = c == null ? 0 : Wt(ye(c), 292)), c && Nu(a))
            ) {
              var l = (Ne(a) + "e").split("e"),
                d = i(l[0] + "e" + (+l[1] + c));
              return (
                (l = (Ne(d) + "e").split("e")), +(l[0] + "e" + (+l[1] - c))
              );
            }
            return i(a);
          };
        }
        var Yg =
          gn && 1 / ks(new gn([, -0]))[1] == le
            ? function (e) {
                return new gn(e);
              }
            : _c;
        function bh(e) {
          return function (i) {
            var a = Gt(i);
            return a == me ? Ra(i) : a == Ce ? dd(i) : od(i, e(i));
          };
        }
        function oi(e, i, a, c, l, d, w, _) {
          var A = i & oe;
          if (!A && typeof e != "function") throw new Or(f);
          var M = c ? c.length : 0;
          if (
            (M || ((i &= ~(he | pe)), (c = l = r)),
            (w = w === r ? w : Dt(ye(w), 0)),
            (_ = _ === r ? _ : ye(_)),
            (M -= l ? l.length : 0),
            i & pe)
          ) {
            var j = c,
              U = l;
            c = l = r;
          }
          var V = A ? r : rc(e),
            Z = [e, i, a, c, l, j, U, d, w, _];
          if (
            (V && fy(Z, V),
            (e = Z[0]),
            (i = Z[1]),
            (a = Z[2]),
            (c = Z[3]),
            (l = Z[4]),
            (_ = Z[9] = Z[9] === r ? (A ? 0 : e.length) : Dt(Z[9] - M, 0)),
            !_ && i & (ae | te) && (i &= ~(ae | te)),
            !i || i == re)
          )
            var ne = Gg(e, i, a);
          else
            i == ae || i == te
              ? (ne = Jg(e, i, _))
              : (i == he || i == (re | he)) && !l.length
              ? (ne = Qg(e, i, a, c))
              : (ne = ho.apply(r, Z));
          var we = V ? eh : Ch;
          return Nh(we(ne, Z), e, i);
        }
        function _h(e, i, a, c) {
          return e === r || (qr(e, dn[a]) && !De.call(c, a)) ? i : e;
        }
        function Eh(e, i, a, c, l, d) {
          return (
            nt(e) && nt(i) && (d.set(i, e), oo(e, i, r, Eh, d), d.delete(i)), e
          );
        }
        function Xg(e) {
          return Zn(e) ? r : e;
        }
        function Ih(e, i, a, c, l, d) {
          var w = a & T,
            _ = e.length,
            A = i.length;
          if (_ != A && !(w && A > _)) return !1;
          var M = d.get(e),
            j = d.get(i);
          if (M && j) return M == i && j == e;
          var U = -1,
            V = !0,
            Z = a & Y ? new Hi() : r;
          for (d.set(e, i), d.set(i, e); ++U < _; ) {
            var ne = e[U],
              we = i[U];
            if (c) var se = w ? c(we, ne, U, i, e, d) : c(ne, we, U, e, i, d);
            if (se !== r) {
              if (se) continue;
              V = !1;
              break;
            }
            if (Z) {
              if (
                !Ia(i, function (_e, Se) {
                  if (!qn(Z, Se) && (ne === _e || l(ne, _e, a, c, d)))
                    return Z.push(Se);
                })
              ) {
                V = !1;
                break;
              }
            } else if (!(ne === we || l(ne, we, a, c, d))) {
              V = !1;
              break;
            }
          }
          return d.delete(e), d.delete(i), V;
        }
        function Zg(e, i, a, c, l, d, w) {
          switch (a) {
            case je:
              if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                return !1;
              (e = e.buffer), (i = i.buffer);
            case Ae:
              return !(
                e.byteLength != i.byteLength || !d(new Gs(e), new Gs(i))
              );
            case N:
            case R:
            case Oe:
              return qr(+e, +i);
            case I:
              return e.name == i.name && e.message == i.message;
            case tt:
            case Ke:
              return e == i + "";
            case me:
              var _ = Ra;
            case Ce:
              var A = c & T;
              if ((_ || (_ = ks), e.size != i.size && !A)) return !1;
              var M = w.get(e);
              if (M) return M == i;
              (c |= Y), w.set(e, i);
              var j = Ih(_(e), _(i), c, l, d, w);
              return w.delete(e), j;
            case Ve:
              if (Bn) return Bn.call(e) == Bn.call(i);
          }
          return !1;
        }
        function ey(e, i, a, c, l, d) {
          var w = a & T,
            _ = ec(e),
            A = _.length,
            M = ec(i),
            j = M.length;
          if (A != j && !w) return !1;
          for (var U = A; U--; ) {
            var V = _[U];
            if (!(w ? V in i : De.call(i, V))) return !1;
          }
          var Z = d.get(e),
            ne = d.get(i);
          if (Z && ne) return Z == i && ne == e;
          var we = !0;
          d.set(e, i), d.set(i, e);
          for (var se = w; ++U < A; ) {
            V = _[U];
            var _e = e[V],
              Se = i[V];
            if (c) var br = w ? c(Se, _e, V, i, e, d) : c(_e, Se, V, e, i, d);
            if (!(br === r ? _e === Se || l(_e, Se, a, c, d) : br)) {
              we = !1;
              break;
            }
            se || (se = V == "constructor");
          }
          if (we && !se) {
            var tr = e.constructor,
              _r = i.constructor;
            tr != _r &&
              "constructor" in e &&
              "constructor" in i &&
              !(
                typeof tr == "function" &&
                tr instanceof tr &&
                typeof _r == "function" &&
                _r instanceof _r
              ) &&
              (we = !1);
          }
          return d.delete(e), d.delete(i), we;
        }
        function ai(e) {
          return cc(Rh(e, r, jh), e + "");
        }
        function ec(e) {
          return Hu(e, Mt, nc);
        }
        function tc(e) {
          return Hu(e, ur, xh);
        }
        var rc = eo
          ? function (e) {
              return eo.get(e);
            }
          : _c;
        function go(e) {
          for (
            var i = e.name + "", a = yn[i], c = De.call(yn, i) ? a.length : 0;
            c--;

          ) {
            var l = a[c],
              d = l.func;
            if (d == null || d == e) return l.name;
          }
          return i;
        }
        function bn(e) {
          var i = De.call(p, "placeholder") ? p : e;
          return i.placeholder;
        }
        function ie() {
          var e = p.iteratee || wc;
          return (
            (e = e === wc ? Vu : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function yo(e, i) {
          var a = e.__data__;
          return cy(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
        }
        function ic(e) {
          for (var i = Mt(e), a = i.length; a--; ) {
            var c = i[a],
              l = e[c];
            i[a] = [c, l, Oh(l)];
          }
          return i;
        }
        function Vi(e, i) {
          var a = ld(e, i);
          return Ku(a) ? a : r;
        }
        function ty(e) {
          var i = De.call(e, zi),
            a = e[zi];
          try {
            e[zi] = r;
            var c = !0;
          } catch {}
          var l = Vs.call(e);
          return c && (i ? (e[zi] = a) : delete e[zi]), l;
        }
        var nc = Ca
            ? function (e) {
                return e == null
                  ? []
                  : ((e = ke(e)),
                    _i(Ca(e), function (i) {
                      return Tu.call(e, i);
                    }));
              }
            : Ec,
          xh = Ca
            ? function (e) {
                for (var i = []; e; ) Ei(i, nc(e)), (e = Js(e));
                return i;
              }
            : Ec,
          Gt = Zt;
        ((Na && Gt(new Na(new ArrayBuffer(1))) != je) ||
          (zn && Gt(new zn()) != me) ||
          ($a && Gt($a.resolve()) != Et) ||
          (gn && Gt(new gn()) != Ce) ||
          (kn && Gt(new kn()) != Fe)) &&
          (Gt = function (e) {
            var i = Zt(e),
              a = i == Ie ? e.constructor : r,
              c = a ? Wi(a) : "";
            if (c)
              switch (c) {
                case Md:
                  return je;
                case jd:
                  return me;
                case qd:
                  return Et;
                case Ud:
                  return Ce;
                case zd:
                  return Fe;
              }
            return i;
          });
        function ry(e, i, a) {
          for (var c = -1, l = a.length; ++c < l; ) {
            var d = a[c],
              w = d.size;
            switch (d.type) {
              case "drop":
                e += w;
                break;
              case "dropRight":
                i -= w;
                break;
              case "take":
                i = Wt(i, e + w);
                break;
              case "takeRight":
                e = Dt(e, i - w);
                break;
            }
          }
          return { start: e, end: i };
        }
        function iy(e) {
          var i = e.match(He);
          return i ? i[1].split(Ot) : [];
        }
        function Ph(e, i, a) {
          i = Oi(i, e);
          for (var c = -1, l = i.length, d = !1; ++c < l; ) {
            var w = Qr(i[c]);
            if (!(d = e != null && a(e, w))) break;
            e = e[w];
          }
          return d || ++c != l
            ? d
            : ((l = e == null ? 0 : e.length),
              !!l && Io(l) && ci(w, l) && (ge(e) || Gi(e)));
        }
        function ny(e) {
          var i = e.length,
            a = new e.constructor(i);
          return (
            i &&
              typeof e[0] == "string" &&
              De.call(e, "index") &&
              ((a.index = e.index), (a.input = e.input)),
            a
          );
        }
        function Sh(e) {
          return typeof e.constructor == "function" && !Yn(e) ? vn(Js(e)) : {};
        }
        function sy(e, i, a) {
          var c = e.constructor;
          switch (i) {
            case Ae:
              return Ya(e);
            case N:
            case R:
              return new c(+e);
            case je:
              return kg(e, a);
            case at:
            case $e:
            case It:
            case Nt:
            case Ht:
            case Bt:
            case Ft:
            case Qt:
            case sr:
              return ch(e, a);
            case me:
              return new c();
            case Oe:
            case Ke:
              return new c(e);
            case tt:
              return Hg(e);
            case Ce:
              return new c();
            case Ve:
              return Bg(e);
          }
        }
        function oy(e, i) {
          var a = i.length;
          if (!a) return e;
          var c = a - 1;
          return (
            (i[c] = (a > 1 ? "& " : "") + i[c]),
            (i = i.join(a > 2 ? ", " : " ")),
            e.replace(
              pt,
              `{
/* [wrapped with ` +
                i +
                `] */
`
            )
          );
        }
        function ay(e) {
          return ge(e) || Gi(e) || !!(Cu && e && e[Cu]);
        }
        function ci(e, i) {
          var a = typeof e;
          return (
            (i = i ?? k),
            !!i &&
              (a == "number" || (a != "symbol" && aa.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < i
          );
        }
        function er(e, i, a) {
          if (!nt(a)) return !1;
          var c = typeof i;
          return (
            c == "number" ? cr(a) && ci(i, a.length) : c == "string" && i in a
          )
            ? qr(a[i], e)
            : !1;
        }
        function sc(e, i) {
          if (ge(e)) return !1;
          var a = typeof e;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            e == null ||
            wr(e)
            ? !0
            : xt.test(e) || !Ye.test(e) || (i != null && e in ke(i));
        }
        function cy(e) {
          var i = typeof e;
          return i == "string" ||
            i == "number" ||
            i == "symbol" ||
            i == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function oc(e) {
          var i = go(e),
            a = p[i];
          if (typeof a != "function" || !(i in xe.prototype)) return !1;
          if (e === a) return !0;
          var c = rc(a);
          return !!c && e === c[0];
        }
        function uy(e) {
          return !!Ou && Ou in e;
        }
        var hy = Bs ? ui : Ic;
        function Yn(e) {
          var i = e && e.constructor,
            a = (typeof i == "function" && i.prototype) || dn;
          return e === a;
        }
        function Oh(e) {
          return e === e && !nt(e);
        }
        function Ah(e, i) {
          return function (a) {
            return a == null ? !1 : a[e] === i && (i !== r || e in ke(a));
          };
        }
        function ly(e) {
          var i = _o(e, function (c) {
              return a.size === y && a.clear(), c;
            }),
            a = i.cache;
          return i;
        }
        function fy(e, i) {
          var a = e[1],
            c = i[1],
            l = a | c,
            d = l < (re | oe | Q),
            w =
              (c == Q && a == ae) ||
              (c == Q && a == ve && e[7].length <= i[8]) ||
              (c == (Q | ve) && i[7].length <= i[8] && a == ae);
          if (!(d || w)) return e;
          c & re && ((e[2] = i[2]), (l |= a & re ? 0 : ce));
          var _ = i[3];
          if (_) {
            var A = e[3];
            (e[3] = A ? hh(A, _, i[4]) : _), (e[4] = A ? Ii(e[3], E) : i[4]);
          }
          return (
            (_ = i[5]),
            _ &&
              ((A = e[5]),
              (e[5] = A ? lh(A, _, i[6]) : _),
              (e[6] = A ? Ii(e[5], E) : i[6])),
            (_ = i[7]),
            _ && (e[7] = _),
            c & Q && (e[8] = e[8] == null ? i[8] : Wt(e[8], i[8])),
            e[9] == null && (e[9] = i[9]),
            (e[0] = i[0]),
            (e[1] = l),
            e
          );
        }
        function py(e) {
          var i = [];
          if (e != null) for (var a in ke(e)) i.push(a);
          return i;
        }
        function dy(e) {
          return Vs.call(e);
        }
        function Rh(e, i, a) {
          return (
            (i = Dt(i === r ? e.length - 1 : i, 0)),
            function () {
              for (
                var c = arguments, l = -1, d = Dt(c.length - i, 0), w = C(d);
                ++l < d;

              )
                w[l] = c[i + l];
              l = -1;
              for (var _ = C(i + 1); ++l < i; ) _[l] = c[l];
              return (_[i] = a(w)), Lt(e, this, _);
            }
          );
        }
        function Th(e, i) {
          return i.length < 2 ? e : Ki(e, Tr(i, 0, -1));
        }
        function gy(e, i) {
          for (var a = e.length, c = Wt(i.length, a), l = ar(e); c--; ) {
            var d = i[c];
            e[c] = ci(d, a) ? l[d] : r;
          }
          return e;
        }
        function ac(e, i) {
          if (
            !(i === "constructor" && typeof e[i] == "function") &&
            i != "__proto__"
          )
            return e[i];
        }
        var Ch = $h(eh),
          Xn =
            Td ||
            function (e, i) {
              return Pe.setTimeout(e, i);
            },
          cc = $h(jg);
        function Nh(e, i, a) {
          var c = i + "";
          return cc(e, oy(c, yy(iy(c), a)));
        }
        function $h(e) {
          var i = 0,
            a = 0;
          return function () {
            var c = Dd(),
              l = kt - (c - a);
            if (((a = c), l > 0)) {
              if (++i >= zt) return arguments[0];
            } else i = 0;
            return e.apply(r, arguments);
          };
        }
        function vo(e, i) {
          var a = -1,
            c = e.length,
            l = c - 1;
          for (i = i === r ? c : i; ++a < i; ) {
            var d = Ba(a, l),
              w = e[d];
            (e[d] = e[a]), (e[a] = w);
          }
          return (e.length = i), e;
        }
        var Dh = ly(function (e) {
          var i = [];
          return (
            e.charCodeAt(0) === 46 && i.push(""),
            e.replace(Pt, function (a, c, l, d) {
              i.push(l ? d.replace(ta, "$1") : c || a);
            }),
            i
          );
        });
        function Qr(e) {
          if (typeof e == "string" || wr(e)) return e;
          var i = e + "";
          return i == "0" && 1 / e == -le ? "-0" : i;
        }
        function Wi(e) {
          if (e != null) {
            try {
              return Ks.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function yy(e, i) {
          return (
            Sr(Di, function (a) {
              var c = "_." + a[0];
              i & a[1] && !Us(e, c) && e.push(c);
            }),
            e.sort()
          );
        }
        function Fh(e) {
          if (e instanceof xe) return e.clone();
          var i = new Ar(e.__wrapped__, e.__chain__);
          return (
            (i.__actions__ = ar(e.__actions__)),
            (i.__index__ = e.__index__),
            (i.__values__ = e.__values__),
            i
          );
        }
        function vy(e, i, a) {
          (a ? er(e, i, a) : i === r) ? (i = 1) : (i = Dt(ye(i), 0));
          var c = e == null ? 0 : e.length;
          if (!c || i < 1) return [];
          for (var l = 0, d = 0, w = C(Xs(c / i)); l < c; )
            w[d++] = Tr(e, l, (l += i));
          return w;
        }
        function my(e) {
          for (
            var i = -1, a = e == null ? 0 : e.length, c = 0, l = [];
            ++i < a;

          ) {
            var d = e[i];
            d && (l[c++] = d);
          }
          return l;
        }
        function wy() {
          var e = arguments.length;
          if (!e) return [];
          for (var i = C(e - 1), a = arguments[0], c = e; c--; )
            i[c - 1] = arguments[c];
          return Ei(ge(a) ? ar(a) : [a], Kt(i, 1));
        }
        var by = be(function (e, i) {
            return mt(e) ? Vn(e, Kt(i, 1, mt, !0)) : [];
          }),
          _y = be(function (e, i) {
            var a = Cr(i);
            return (
              mt(a) && (a = r), mt(e) ? Vn(e, Kt(i, 1, mt, !0), ie(a, 2)) : []
            );
          }),
          Ey = be(function (e, i) {
            var a = Cr(i);
            return mt(a) && (a = r), mt(e) ? Vn(e, Kt(i, 1, mt, !0), r, a) : [];
          });
        function Iy(e, i, a) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = a || i === r ? 1 : ye(i)), Tr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function xy(e, i, a) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = a || i === r ? 1 : ye(i)),
              (i = c - i),
              Tr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function Py(e, i) {
          return e && e.length ? co(e, ie(i, 3), !0, !0) : [];
        }
        function Sy(e, i) {
          return e && e.length ? co(e, ie(i, 3), !0) : [];
        }
        function Oy(e, i, a, c) {
          var l = e == null ? 0 : e.length;
          return l
            ? (a && typeof a != "number" && er(e, i, a) && ((a = 0), (c = l)),
              wg(e, i, a, c))
            : [];
        }
        function Lh(e, i, a) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = a == null ? 0 : ye(a);
          return l < 0 && (l = Dt(c + l, 0)), zs(e, ie(i, 3), l);
        }
        function Mh(e, i, a) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c - 1;
          return (
            a !== r && ((l = ye(a)), (l = a < 0 ? Dt(c + l, 0) : Wt(l, c - 1))),
            zs(e, ie(i, 3), l, !0)
          );
        }
        function jh(e) {
          var i = e == null ? 0 : e.length;
          return i ? Kt(e, 1) : [];
        }
        function Ay(e) {
          var i = e == null ? 0 : e.length;
          return i ? Kt(e, le) : [];
        }
        function Ry(e, i) {
          var a = e == null ? 0 : e.length;
          return a ? ((i = i === r ? 1 : ye(i)), Kt(e, i)) : [];
        }
        function Ty(e) {
          for (var i = -1, a = e == null ? 0 : e.length, c = {}; ++i < a; ) {
            var l = e[i];
            c[l[0]] = l[1];
          }
          return c;
        }
        function qh(e) {
          return e && e.length ? e[0] : r;
        }
        function Cy(e, i, a) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = a == null ? 0 : ye(a);
          return l < 0 && (l = Dt(c + l, 0)), hn(e, i, l);
        }
        function Ny(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 0, -1) : [];
        }
        var $y = be(function (e) {
            var i = Xe(e, Ja);
            return i.length && i[0] === e[0] ? qa(i) : [];
          }),
          Dy = be(function (e) {
            var i = Cr(e),
              a = Xe(e, Ja);
            return (
              i === Cr(a) ? (i = r) : a.pop(),
              a.length && a[0] === e[0] ? qa(a, ie(i, 2)) : []
            );
          }),
          Fy = be(function (e) {
            var i = Cr(e),
              a = Xe(e, Ja);
            return (
              (i = typeof i == "function" ? i : r),
              i && a.pop(),
              a.length && a[0] === e[0] ? qa(a, r, i) : []
            );
          });
        function Ly(e, i) {
          return e == null ? "" : Nd.call(e, i);
        }
        function Cr(e) {
          var i = e == null ? 0 : e.length;
          return i ? e[i - 1] : r;
        }
        function My(e, i, a) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c;
          return (
            a !== r && ((l = ye(a)), (l = l < 0 ? Dt(c + l, 0) : Wt(l, c - 1))),
            i === i ? yd(e, i, l) : zs(e, wu, l, !0)
          );
        }
        function jy(e, i) {
          return e && e.length ? Qu(e, ye(i)) : r;
        }
        var qy = be(Uh);
        function Uh(e, i) {
          return e && e.length && i && i.length ? Ha(e, i) : e;
        }
        function Uy(e, i, a) {
          return e && e.length && i && i.length ? Ha(e, i, ie(a, 2)) : e;
        }
        function zy(e, i, a) {
          return e && e.length && i && i.length ? Ha(e, i, r, a) : e;
        }
        var ky = ai(function (e, i) {
          var a = e == null ? 0 : e.length,
            c = Fa(e, i);
          return (
            Zu(
              e,
              Xe(i, function (l) {
                return ci(l, a) ? +l : l;
              }).sort(uh)
            ),
            c
          );
        });
        function Hy(e, i) {
          var a = [];
          if (!(e && e.length)) return a;
          var c = -1,
            l = [],
            d = e.length;
          for (i = ie(i, 3); ++c < d; ) {
            var w = e[c];
            i(w, c, e) && (a.push(w), l.push(c));
          }
          return Zu(e, l), a;
        }
        function uc(e) {
          return e == null ? e : Ld.call(e);
        }
        function By(e, i, a) {
          var c = e == null ? 0 : e.length;
          return c
            ? (a && typeof a != "number" && er(e, i, a)
                ? ((i = 0), (a = c))
                : ((i = i == null ? 0 : ye(i)), (a = a === r ? c : ye(a))),
              Tr(e, i, a))
            : [];
        }
        function Ky(e, i) {
          return ao(e, i);
        }
        function Vy(e, i, a) {
          return Va(e, i, ie(a, 2));
        }
        function Wy(e, i) {
          var a = e == null ? 0 : e.length;
          if (a) {
            var c = ao(e, i);
            if (c < a && qr(e[c], i)) return c;
          }
          return -1;
        }
        function Gy(e, i) {
          return ao(e, i, !0);
        }
        function Jy(e, i, a) {
          return Va(e, i, ie(a, 2), !0);
        }
        function Qy(e, i) {
          var a = e == null ? 0 : e.length;
          if (a) {
            var c = ao(e, i, !0) - 1;
            if (qr(e[c], i)) return c;
          }
          return -1;
        }
        function Yy(e) {
          return e && e.length ? th(e) : [];
        }
        function Xy(e, i) {
          return e && e.length ? th(e, ie(i, 2)) : [];
        }
        function Zy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 1, i) : [];
        }
        function ev(e, i, a) {
          return e && e.length
            ? ((i = a || i === r ? 1 : ye(i)), Tr(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function tv(e, i, a) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = a || i === r ? 1 : ye(i)),
              (i = c - i),
              Tr(e, i < 0 ? 0 : i, c))
            : [];
        }
        function rv(e, i) {
          return e && e.length ? co(e, ie(i, 3), !1, !0) : [];
        }
        function iv(e, i) {
          return e && e.length ? co(e, ie(i, 3)) : [];
        }
        var nv = be(function (e) {
            return Si(Kt(e, 1, mt, !0));
          }),
          sv = be(function (e) {
            var i = Cr(e);
            return mt(i) && (i = r), Si(Kt(e, 1, mt, !0), ie(i, 2));
          }),
          ov = be(function (e) {
            var i = Cr(e);
            return (
              (i = typeof i == "function" ? i : r), Si(Kt(e, 1, mt, !0), r, i)
            );
          });
        function av(e) {
          return e && e.length ? Si(e) : [];
        }
        function cv(e, i) {
          return e && e.length ? Si(e, ie(i, 2)) : [];
        }
        function uv(e, i) {
          return (
            (i = typeof i == "function" ? i : r),
            e && e.length ? Si(e, r, i) : []
          );
        }
        function hc(e) {
          if (!(e && e.length)) return [];
          var i = 0;
          return (
            (e = _i(e, function (a) {
              if (mt(a)) return (i = Dt(a.length, i)), !0;
            })),
            Oa(i, function (a) {
              return Xe(e, xa(a));
            })
          );
        }
        function zh(e, i) {
          if (!(e && e.length)) return [];
          var a = hc(e);
          return i == null
            ? a
            : Xe(a, function (c) {
                return Lt(i, r, c);
              });
        }
        var hv = be(function (e, i) {
            return mt(e) ? Vn(e, i) : [];
          }),
          lv = be(function (e) {
            return Ga(_i(e, mt));
          }),
          fv = be(function (e) {
            var i = Cr(e);
            return mt(i) && (i = r), Ga(_i(e, mt), ie(i, 2));
          }),
          pv = be(function (e) {
            var i = Cr(e);
            return (i = typeof i == "function" ? i : r), Ga(_i(e, mt), r, i);
          }),
          dv = be(hc);
        function gv(e, i) {
          return sh(e || [], i || [], Kn);
        }
        function yv(e, i) {
          return sh(e || [], i || [], Jn);
        }
        var vv = be(function (e) {
          var i = e.length,
            a = i > 1 ? e[i - 1] : r;
          return (a = typeof a == "function" ? (e.pop(), a) : r), zh(e, a);
        });
        function kh(e) {
          var i = p(e);
          return (i.__chain__ = !0), i;
        }
        function mv(e, i) {
          return i(e), e;
        }
        function mo(e, i) {
          return i(e);
        }
        var wv = ai(function (e) {
          var i = e.length,
            a = i ? e[0] : 0,
            c = this.__wrapped__,
            l = function (d) {
              return Fa(d, e);
            };
          return i > 1 ||
            this.__actions__.length ||
            !(c instanceof xe) ||
            !ci(a)
            ? this.thru(l)
            : ((c = c.slice(a, +a + (i ? 1 : 0))),
              c.__actions__.push({ func: mo, args: [l], thisArg: r }),
              new Ar(c, this.__chain__).thru(function (d) {
                return i && !d.length && d.push(r), d;
              }));
        });
        function bv() {
          return kh(this);
        }
        function _v() {
          return new Ar(this.value(), this.__chain__);
        }
        function Ev() {
          this.__values__ === r && (this.__values__ = rl(this.value()));
          var e = this.__index__ >= this.__values__.length,
            i = e ? r : this.__values__[this.__index__++];
          return { done: e, value: i };
        }
        function Iv() {
          return this;
        }
        function xv(e) {
          for (var i, a = this; a instanceof ro; ) {
            var c = Fh(a);
            (c.__index__ = 0),
              (c.__values__ = r),
              i ? (l.__wrapped__ = c) : (i = c);
            var l = c;
            a = a.__wrapped__;
          }
          return (l.__wrapped__ = e), i;
        }
        function Pv() {
          var e = this.__wrapped__;
          if (e instanceof xe) {
            var i = e;
            return (
              this.__actions__.length && (i = new xe(this)),
              (i = i.reverse()),
              i.__actions__.push({ func: mo, args: [uc], thisArg: r }),
              new Ar(i, this.__chain__)
            );
          }
          return this.thru(uc);
        }
        function Sv() {
          return nh(this.__wrapped__, this.__actions__);
        }
        var Ov = uo(function (e, i, a) {
          De.call(e, a) ? ++e[a] : si(e, a, 1);
        });
        function Av(e, i, a) {
          var c = ge(e) ? vu : mg;
          return a && er(e, i, a) && (i = r), c(e, ie(i, 3));
        }
        function Rv(e, i) {
          var a = ge(e) ? _i : zu;
          return a(e, ie(i, 3));
        }
        var Tv = gh(Lh),
          Cv = gh(Mh);
        function Nv(e, i) {
          return Kt(wo(e, i), 1);
        }
        function $v(e, i) {
          return Kt(wo(e, i), le);
        }
        function Dv(e, i, a) {
          return (a = a === r ? 1 : ye(a)), Kt(wo(e, i), a);
        }
        function Hh(e, i) {
          var a = ge(e) ? Sr : Pi;
          return a(e, ie(i, 3));
        }
        function Bh(e, i) {
          var a = ge(e) ? Zp : Uu;
          return a(e, ie(i, 3));
        }
        var Fv = uo(function (e, i, a) {
          De.call(e, a) ? e[a].push(i) : si(e, a, [i]);
        });
        function Lv(e, i, a, c) {
          (e = cr(e) ? e : En(e)), (a = a && !c ? ye(a) : 0);
          var l = e.length;
          return (
            a < 0 && (a = Dt(l + a, 0)),
            xo(e) ? a <= l && e.indexOf(i, a) > -1 : !!l && hn(e, i, a) > -1
          );
        }
        var Mv = be(function (e, i, a) {
            var c = -1,
              l = typeof i == "function",
              d = cr(e) ? C(e.length) : [];
            return (
              Pi(e, function (w) {
                d[++c] = l ? Lt(i, w, a) : Wn(w, i, a);
              }),
              d
            );
          }),
          jv = uo(function (e, i, a) {
            si(e, a, i);
          });
        function wo(e, i) {
          var a = ge(e) ? Xe : Wu;
          return a(e, ie(i, 3));
        }
        function qv(e, i, a, c) {
          return e == null
            ? []
            : (ge(i) || (i = i == null ? [] : [i]),
              (a = c ? r : a),
              ge(a) || (a = a == null ? [] : [a]),
              Yu(e, i, a));
        }
        var Uv = uo(
          function (e, i, a) {
            e[a ? 0 : 1].push(i);
          },
          function () {
            return [[], []];
          }
        );
        function zv(e, i, a) {
          var c = ge(e) ? Ea : _u,
            l = arguments.length < 3;
          return c(e, ie(i, 4), a, l, Pi);
        }
        function kv(e, i, a) {
          var c = ge(e) ? ed : _u,
            l = arguments.length < 3;
          return c(e, ie(i, 4), a, l, Uu);
        }
        function Hv(e, i) {
          var a = ge(e) ? _i : zu;
          return a(e, Eo(ie(i, 3)));
        }
        function Bv(e) {
          var i = ge(e) ? Lu : Lg;
          return i(e);
        }
        function Kv(e, i, a) {
          (a ? er(e, i, a) : i === r) ? (i = 1) : (i = ye(i));
          var c = ge(e) ? pg : Mg;
          return c(e, i);
        }
        function Vv(e) {
          var i = ge(e) ? dg : qg;
          return i(e);
        }
        function Wv(e) {
          if (e == null) return 0;
          if (cr(e)) return xo(e) ? fn(e) : e.length;
          var i = Gt(e);
          return i == me || i == Ce ? e.size : za(e).length;
        }
        function Gv(e, i, a) {
          var c = ge(e) ? Ia : Ug;
          return a && er(e, i, a) && (i = r), c(e, ie(i, 3));
        }
        var Jv = be(function (e, i) {
            if (e == null) return [];
            var a = i.length;
            return (
              a > 1 && er(e, i[0], i[1])
                ? (i = [])
                : a > 2 && er(i[0], i[1], i[2]) && (i = [i[0]]),
              Yu(e, Kt(i, 1), [])
            );
          }),
          bo =
            Rd ||
            function () {
              return Pe.Date.now();
            };
        function Qv(e, i) {
          if (typeof i != "function") throw new Or(f);
          return (
            (e = ye(e)),
            function () {
              if (--e < 1) return i.apply(this, arguments);
            }
          );
        }
        function Kh(e, i, a) {
          return (
            (i = a ? r : i),
            (i = e && i == null ? e.length : i),
            oi(e, Q, r, r, r, r, i)
          );
        }
        function Vh(e, i) {
          var a;
          if (typeof i != "function") throw new Or(f);
          return (
            (e = ye(e)),
            function () {
              return (
                --e > 0 && (a = i.apply(this, arguments)), e <= 1 && (i = r), a
              );
            }
          );
        }
        var lc = be(function (e, i, a) {
            var c = re;
            if (a.length) {
              var l = Ii(a, bn(lc));
              c |= he;
            }
            return oi(e, c, i, a, l);
          }),
          Wh = be(function (e, i, a) {
            var c = re | oe;
            if (a.length) {
              var l = Ii(a, bn(Wh));
              c |= he;
            }
            return oi(i, c, e, a, l);
          });
        function Gh(e, i, a) {
          i = a ? r : i;
          var c = oi(e, ae, r, r, r, r, r, i);
          return (c.placeholder = Gh.placeholder), c;
        }
        function Jh(e, i, a) {
          i = a ? r : i;
          var c = oi(e, te, r, r, r, r, r, i);
          return (c.placeholder = Jh.placeholder), c;
        }
        function Qh(e, i, a) {
          var c,
            l,
            d,
            w,
            _,
            A,
            M = 0,
            j = !1,
            U = !1,
            V = !0;
          if (typeof e != "function") throw new Or(f);
          (i = Nr(i) || 0),
            nt(a) &&
              ((j = !!a.leading),
              (U = "maxWait" in a),
              (d = U ? Dt(Nr(a.maxWait) || 0, i) : d),
              (V = "trailing" in a ? !!a.trailing : V));
          function Z(wt) {
            var Ur = c,
              li = l;
            return (c = l = r), (M = wt), (w = e.apply(li, Ur)), w;
          }
          function ne(wt) {
            return (M = wt), (_ = Xn(_e, i)), j ? Z(wt) : w;
          }
          function we(wt) {
            var Ur = wt - A,
              li = wt - M,
              gl = i - Ur;
            return U ? Wt(gl, d - li) : gl;
          }
          function se(wt) {
            var Ur = wt - A,
              li = wt - M;
            return A === r || Ur >= i || Ur < 0 || (U && li >= d);
          }
          function _e() {
            var wt = bo();
            if (se(wt)) return Se(wt);
            _ = Xn(_e, we(wt));
          }
          function Se(wt) {
            return (_ = r), V && c ? Z(wt) : ((c = l = r), w);
          }
          function br() {
            _ !== r && oh(_), (M = 0), (c = A = l = _ = r);
          }
          function tr() {
            return _ === r ? w : Se(bo());
          }
          function _r() {
            var wt = bo(),
              Ur = se(wt);
            if (((c = arguments), (l = this), (A = wt), Ur)) {
              if (_ === r) return ne(A);
              if (U) return oh(_), (_ = Xn(_e, i)), Z(A);
            }
            return _ === r && (_ = Xn(_e, i)), w;
          }
          return (_r.cancel = br), (_r.flush = tr), _r;
        }
        var Yv = be(function (e, i) {
            return qu(e, 1, i);
          }),
          Xv = be(function (e, i, a) {
            return qu(e, Nr(i) || 0, a);
          });
        function Zv(e) {
          return oi(e, _t);
        }
        function _o(e, i) {
          if (typeof e != "function" || (i != null && typeof i != "function"))
            throw new Or(f);
          var a = function () {
            var c = arguments,
              l = i ? i.apply(this, c) : c[0],
              d = a.cache;
            if (d.has(l)) return d.get(l);
            var w = e.apply(this, c);
            return (a.cache = d.set(l, w) || d), w;
          };
          return (a.cache = new (_o.Cache || ni)()), a;
        }
        _o.Cache = ni;
        function Eo(e) {
          if (typeof e != "function") throw new Or(f);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, i[0]);
              case 2:
                return !e.call(this, i[0], i[1]);
              case 3:
                return !e.call(this, i[0], i[1], i[2]);
            }
            return !e.apply(this, i);
          };
        }
        function em(e) {
          return Vh(2, e);
        }
        var tm = zg(function (e, i) {
            i =
              i.length == 1 && ge(i[0])
                ? Xe(i[0], vr(ie()))
                : Xe(Kt(i, 1), vr(ie()));
            var a = i.length;
            return be(function (c) {
              for (var l = -1, d = Wt(c.length, a); ++l < d; )
                c[l] = i[l].call(this, c[l]);
              return Lt(e, this, c);
            });
          }),
          fc = be(function (e, i) {
            var a = Ii(i, bn(fc));
            return oi(e, he, r, i, a);
          }),
          Yh = be(function (e, i) {
            var a = Ii(i, bn(Yh));
            return oi(e, pe, r, i, a);
          }),
          rm = ai(function (e, i) {
            return oi(e, ve, r, r, r, i);
          });
        function im(e, i) {
          if (typeof e != "function") throw new Or(f);
          return (i = i === r ? i : ye(i)), be(e, i);
        }
        function nm(e, i) {
          if (typeof e != "function") throw new Or(f);
          return (
            (i = i == null ? 0 : Dt(ye(i), 0)),
            be(function (a) {
              var c = a[i],
                l = Ai(a, 0, i);
              return c && Ei(l, c), Lt(e, this, l);
            })
          );
        }
        function sm(e, i, a) {
          var c = !0,
            l = !0;
          if (typeof e != "function") throw new Or(f);
          return (
            nt(a) &&
              ((c = "leading" in a ? !!a.leading : c),
              (l = "trailing" in a ? !!a.trailing : l)),
            Qh(e, i, { leading: c, maxWait: i, trailing: l })
          );
        }
        function om(e) {
          return Kh(e, 1);
        }
        function am(e, i) {
          return fc(Qa(i), e);
        }
        function cm() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return ge(e) ? e : [e];
        }
        function um(e) {
          return Rr(e, L);
        }
        function hm(e, i) {
          return (i = typeof i == "function" ? i : r), Rr(e, L, i);
        }
        function lm(e) {
          return Rr(e, x | L);
        }
        function fm(e, i) {
          return (i = typeof i == "function" ? i : r), Rr(e, x | L, i);
        }
        function pm(e, i) {
          return i == null || ju(e, i, Mt(i));
        }
        function qr(e, i) {
          return e === i || (e !== e && i !== i);
        }
        var dm = po(ja),
          gm = po(function (e, i) {
            return e >= i;
          }),
          Gi = Bu(
            (function () {
              return arguments;
            })()
          )
            ? Bu
            : function (e) {
                return dt(e) && De.call(e, "callee") && !Tu.call(e, "callee");
              },
          ge = C.isArray,
          ym = Xt ? vr(Xt) : xg;
        function cr(e) {
          return e != null && Io(e.length) && !ui(e);
        }
        function mt(e) {
          return dt(e) && cr(e);
        }
        function vm(e) {
          return e === !0 || e === !1 || (dt(e) && Zt(e) == N);
        }
        var Ri = Cd || Ic,
          mm = Lr ? vr(Lr) : Pg;
        function wm(e) {
          return dt(e) && e.nodeType === 1 && !Zn(e);
        }
        function bm(e) {
          if (e == null) return !0;
          if (
            cr(e) &&
            (ge(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              Ri(e) ||
              _n(e) ||
              Gi(e))
          )
            return !e.length;
          var i = Gt(e);
          if (i == me || i == Ce) return !e.size;
          if (Yn(e)) return !za(e).length;
          for (var a in e) if (De.call(e, a)) return !1;
          return !0;
        }
        function _m(e, i) {
          return Gn(e, i);
        }
        function Em(e, i, a) {
          a = typeof a == "function" ? a : r;
          var c = a ? a(e, i) : r;
          return c === r ? Gn(e, i, r, a) : !!c;
        }
        function pc(e) {
          if (!dt(e)) return !1;
          var i = Zt(e);
          return (
            i == I ||
            i == h ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !Zn(e))
          );
        }
        function Im(e) {
          return typeof e == "number" && Nu(e);
        }
        function ui(e) {
          if (!nt(e)) return !1;
          var i = Zt(e);
          return i == X || i == ue || i == D || i == gt;
        }
        function Xh(e) {
          return typeof e == "number" && e == ye(e);
        }
        function Io(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= k;
        }
        function nt(e) {
          var i = typeof e;
          return e != null && (i == "object" || i == "function");
        }
        function dt(e) {
          return e != null && typeof e == "object";
        }
        var Zh = Pr ? vr(Pr) : Og;
        function xm(e, i) {
          return e === i || Ua(e, i, ic(i));
        }
        function Pm(e, i, a) {
          return (a = typeof a == "function" ? a : r), Ua(e, i, ic(i), a);
        }
        function Sm(e) {
          return el(e) && e != +e;
        }
        function Om(e) {
          if (hy(e)) throw new fe(u);
          return Ku(e);
        }
        function Am(e) {
          return e === null;
        }
        function Rm(e) {
          return e == null;
        }
        function el(e) {
          return typeof e == "number" || (dt(e) && Zt(e) == Oe);
        }
        function Zn(e) {
          if (!dt(e) || Zt(e) != Ie) return !1;
          var i = Js(e);
          if (i === null) return !0;
          var a = De.call(i, "constructor") && i.constructor;
          return typeof a == "function" && a instanceof a && Ks.call(a) == Pd;
        }
        var dc = Wr ? vr(Wr) : Ag;
        function Tm(e) {
          return Xh(e) && e >= -k && e <= k;
        }
        var tl = jn ? vr(jn) : Rg;
        function xo(e) {
          return typeof e == "string" || (!ge(e) && dt(e) && Zt(e) == Ke);
        }
        function wr(e) {
          return typeof e == "symbol" || (dt(e) && Zt(e) == Ve);
        }
        var _n = Ui ? vr(Ui) : Tg;
        function Cm(e) {
          return e === r;
        }
        function Nm(e) {
          return dt(e) && Gt(e) == Fe;
        }
        function $m(e) {
          return dt(e) && Zt(e) == We;
        }
        var Dm = po(ka),
          Fm = po(function (e, i) {
            return e <= i;
          });
        function rl(e) {
          if (!e) return [];
          if (cr(e)) return xo(e) ? Mr(e) : ar(e);
          if (Un && e[Un]) return pd(e[Un]());
          var i = Gt(e),
            a = i == me ? Ra : i == Ce ? ks : En;
          return a(e);
        }
        function hi(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = Nr(e)), e === le || e === -le)) {
            var i = e < 0 ? -1 : 1;
            return i * z;
          }
          return e === e ? e : 0;
        }
        function ye(e) {
          var i = hi(e),
            a = i % 1;
          return i === i ? (a ? i - a : i) : 0;
        }
        function il(e) {
          return e ? Bi(ye(e), 0, B) : 0;
        }
        function Nr(e) {
          if (typeof e == "number") return e;
          if (wr(e)) return H;
          if (nt(e)) {
            var i = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = nt(i) ? i + "" : i;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = Eu(e);
          var a = na.test(e);
          return a || oa.test(e)
            ? de(e.slice(2), a ? 2 : 8)
            : ia.test(e)
            ? H
            : +e;
        }
        function nl(e) {
          return Jr(e, ur(e));
        }
        function Lm(e) {
          return e ? Bi(ye(e), -k, k) : e === 0 ? e : 0;
        }
        function Ne(e) {
          return e == null ? "" : mr(e);
        }
        var Mm = mn(function (e, i) {
            if (Yn(i) || cr(i)) {
              Jr(i, Mt(i), e);
              return;
            }
            for (var a in i) De.call(i, a) && Kn(e, a, i[a]);
          }),
          sl = mn(function (e, i) {
            Jr(i, ur(i), e);
          }),
          Po = mn(function (e, i, a, c) {
            Jr(i, ur(i), e, c);
          }),
          jm = mn(function (e, i, a, c) {
            Jr(i, Mt(i), e, c);
          }),
          qm = ai(Fa);
        function Um(e, i) {
          var a = vn(e);
          return i == null ? a : Mu(a, i);
        }
        var zm = be(function (e, i) {
            e = ke(e);
            var a = -1,
              c = i.length,
              l = c > 2 ? i[2] : r;
            for (l && er(i[0], i[1], l) && (c = 1); ++a < c; )
              for (var d = i[a], w = ur(d), _ = -1, A = w.length; ++_ < A; ) {
                var M = w[_],
                  j = e[M];
                (j === r || (qr(j, dn[M]) && !De.call(e, M))) && (e[M] = d[M]);
              }
            return e;
          }),
          km = be(function (e) {
            return e.push(r, Eh), Lt(ol, r, e);
          });
        function Hm(e, i) {
          return mu(e, ie(i, 3), Gr);
        }
        function Bm(e, i) {
          return mu(e, ie(i, 3), Ma);
        }
        function Km(e, i) {
          return e == null ? e : La(e, ie(i, 3), ur);
        }
        function Vm(e, i) {
          return e == null ? e : ku(e, ie(i, 3), ur);
        }
        function Wm(e, i) {
          return e && Gr(e, ie(i, 3));
        }
        function Gm(e, i) {
          return e && Ma(e, ie(i, 3));
        }
        function Jm(e) {
          return e == null ? [] : so(e, Mt(e));
        }
        function Qm(e) {
          return e == null ? [] : so(e, ur(e));
        }
        function gc(e, i, a) {
          var c = e == null ? r : Ki(e, i);
          return c === r ? a : c;
        }
        function Ym(e, i) {
          return e != null && Ph(e, i, bg);
        }
        function yc(e, i) {
          return e != null && Ph(e, i, _g);
        }
        var Xm = vh(function (e, i, a) {
            i != null && typeof i.toString != "function" && (i = Vs.call(i)),
              (e[i] = a);
          }, mc(hr)),
          Zm = vh(function (e, i, a) {
            i != null && typeof i.toString != "function" && (i = Vs.call(i)),
              De.call(e, i) ? e[i].push(a) : (e[i] = [a]);
          }, ie),
          e0 = be(Wn);
        function Mt(e) {
          return cr(e) ? Fu(e) : za(e);
        }
        function ur(e) {
          return cr(e) ? Fu(e, !0) : Cg(e);
        }
        function t0(e, i) {
          var a = {};
          return (
            (i = ie(i, 3)),
            Gr(e, function (c, l, d) {
              si(a, i(c, l, d), c);
            }),
            a
          );
        }
        function r0(e, i) {
          var a = {};
          return (
            (i = ie(i, 3)),
            Gr(e, function (c, l, d) {
              si(a, l, i(c, l, d));
            }),
            a
          );
        }
        var i0 = mn(function (e, i, a) {
            oo(e, i, a);
          }),
          ol = mn(function (e, i, a, c) {
            oo(e, i, a, c);
          }),
          n0 = ai(function (e, i) {
            var a = {};
            if (e == null) return a;
            var c = !1;
            (i = Xe(i, function (d) {
              return (d = Oi(d, e)), c || (c = d.length > 1), d;
            })),
              Jr(e, tc(e), a),
              c && (a = Rr(a, x | $ | L, Xg));
            for (var l = i.length; l--; ) Wa(a, i[l]);
            return a;
          });
        function s0(e, i) {
          return al(e, Eo(ie(i)));
        }
        var o0 = ai(function (e, i) {
          return e == null ? {} : $g(e, i);
        });
        function al(e, i) {
          if (e == null) return {};
          var a = Xe(tc(e), function (c) {
            return [c];
          });
          return (
            (i = ie(i)),
            Xu(e, a, function (c, l) {
              return i(c, l[0]);
            })
          );
        }
        function a0(e, i, a) {
          i = Oi(i, e);
          var c = -1,
            l = i.length;
          for (l || ((l = 1), (e = r)); ++c < l; ) {
            var d = e == null ? r : e[Qr(i[c])];
            d === r && ((c = l), (d = a)), (e = ui(d) ? d.call(e) : d);
          }
          return e;
        }
        function c0(e, i, a) {
          return e == null ? e : Jn(e, i, a);
        }
        function u0(e, i, a, c) {
          return (
            (c = typeof c == "function" ? c : r), e == null ? e : Jn(e, i, a, c)
          );
        }
        var cl = bh(Mt),
          ul = bh(ur);
        function h0(e, i, a) {
          var c = ge(e),
            l = c || Ri(e) || _n(e);
          if (((i = ie(i, 4)), a == null)) {
            var d = e && e.constructor;
            l
              ? (a = c ? new d() : [])
              : nt(e)
              ? (a = ui(d) ? vn(Js(e)) : {})
              : (a = {});
          }
          return (
            (l ? Sr : Gr)(e, function (w, _, A) {
              return i(a, w, _, A);
            }),
            a
          );
        }
        function l0(e, i) {
          return e == null ? !0 : Wa(e, i);
        }
        function f0(e, i, a) {
          return e == null ? e : ih(e, i, Qa(a));
        }
        function p0(e, i, a, c) {
          return (
            (c = typeof c == "function" ? c : r),
            e == null ? e : ih(e, i, Qa(a), c)
          );
        }
        function En(e) {
          return e == null ? [] : Aa(e, Mt(e));
        }
        function d0(e) {
          return e == null ? [] : Aa(e, ur(e));
        }
        function g0(e, i, a) {
          return (
            a === r && ((a = i), (i = r)),
            a !== r && ((a = Nr(a)), (a = a === a ? a : 0)),
            i !== r && ((i = Nr(i)), (i = i === i ? i : 0)),
            Bi(Nr(e), i, a)
          );
        }
        function y0(e, i, a) {
          return (
            (i = hi(i)),
            a === r ? ((a = i), (i = 0)) : (a = hi(a)),
            (e = Nr(e)),
            Eg(e, i, a)
          );
        }
        function v0(e, i, a) {
          if (
            (a && typeof a != "boolean" && er(e, i, a) && (i = a = r),
            a === r &&
              (typeof i == "boolean"
                ? ((a = i), (i = r))
                : typeof e == "boolean" && ((a = e), (e = r))),
            e === r && i === r
              ? ((e = 0), (i = 1))
              : ((e = hi(e)), i === r ? ((i = e), (e = 0)) : (i = hi(i))),
            e > i)
          ) {
            var c = e;
            (e = i), (i = c);
          }
          if (a || e % 1 || i % 1) {
            var l = $u();
            return Wt(e + l * (i - e + Ue("1e-" + ((l + "").length - 1))), i);
          }
          return Ba(e, i);
        }
        var m0 = wn(function (e, i, a) {
          return (i = i.toLowerCase()), e + (a ? hl(i) : i);
        });
        function hl(e) {
          return vc(Ne(e).toLowerCase());
        }
        function ll(e) {
          return (e = Ne(e)), e && e.replace(ti, cd).replace(wa, "");
        }
        function w0(e, i, a) {
          (e = Ne(e)), (i = mr(i));
          var c = e.length;
          a = a === r ? c : Bi(ye(a), 0, c);
          var l = a;
          return (a -= i.length), a >= 0 && e.slice(a, l) == i;
        }
        function b0(e) {
          return (e = Ne(e)), e && Qe.test(e) ? e.replace(Fi, ud) : e;
        }
        function _0(e) {
          return (e = Ne(e)), e && St.test(e) ? e.replace(lt, "\\$&") : e;
        }
        var E0 = wn(function (e, i, a) {
            return e + (a ? "-" : "") + i.toLowerCase();
          }),
          I0 = wn(function (e, i, a) {
            return e + (a ? " " : "") + i.toLowerCase();
          }),
          x0 = dh("toLowerCase");
        function P0(e, i, a) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? fn(e) : 0;
          if (!i || c >= i) return e;
          var l = (i - c) / 2;
          return fo(Zs(l), a) + e + fo(Xs(l), a);
        }
        function S0(e, i, a) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? fn(e) : 0;
          return i && c < i ? e + fo(i - c, a) : e;
        }
        function O0(e, i, a) {
          (e = Ne(e)), (i = ye(i));
          var c = i ? fn(e) : 0;
          return i && c < i ? fo(i - c, a) + e : e;
        }
        function A0(e, i, a) {
          return (
            a || i == null ? (i = 0) : i && (i = +i),
            Fd(Ne(e).replace(ft, ""), i || 0)
          );
        }
        function R0(e, i, a) {
          return (
            (a ? er(e, i, a) : i === r) ? (i = 1) : (i = ye(i)), Ka(Ne(e), i)
          );
        }
        function T0() {
          var e = arguments,
            i = Ne(e[0]);
          return e.length < 3 ? i : i.replace(e[1], e[2]);
        }
        var C0 = wn(function (e, i, a) {
          return e + (a ? "_" : "") + i.toLowerCase();
        });
        function N0(e, i, a) {
          return (
            a && typeof a != "number" && er(e, i, a) && (i = a = r),
            (a = a === r ? B : a >>> 0),
            a
              ? ((e = Ne(e)),
                e &&
                (typeof i == "string" || (i != null && !dc(i))) &&
                ((i = mr(i)), !i && ln(e))
                  ? Ai(Mr(e), 0, a)
                  : e.split(i, a))
              : []
          );
        }
        var $0 = wn(function (e, i, a) {
          return e + (a ? " " : "") + vc(i);
        });
        function D0(e, i, a) {
          return (
            (e = Ne(e)),
            (a = a == null ? 0 : Bi(ye(a), 0, e.length)),
            (i = mr(i)),
            e.slice(a, a + i.length) == i
          );
        }
        function F0(e, i, a) {
          var c = p.templateSettings;
          a && er(e, i, a) && (i = r), (e = Ne(e)), (i = Po({}, i, c, _h));
          var l = Po({}, i.imports, c.imports, _h),
            d = Mt(l),
            w = Aa(l, d),
            _,
            A,
            M = 0,
            j = i.interpolate || rn,
            U = "__p += '",
            V = Ta(
              (i.escape || rn).source +
                "|" +
                j.source +
                "|" +
                (j === it ? ra : rn).source +
                "|" +
                (i.evaluate || rn).source +
                "|$",
              "g"
            ),
            Z =
              "//# sourceURL=" +
              (De.call(i, "sourceURL")
                ? (i.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++ba + "]") +
              `
`;
          e.replace(V, function (se, _e, Se, br, tr, _r) {
            return (
              Se || (Se = br),
              (U += e.slice(M, _r).replace(ca, hd)),
              _e &&
                ((_ = !0),
                (U +=
                  `' +
__e(` +
                  _e +
                  `) +
'`)),
              tr &&
                ((A = !0),
                (U +=
                  `';
` +
                  tr +
                  `;
__p += '`)),
              Se &&
                (U +=
                  `' +
((__t = (` +
                  Se +
                  `)) == null ? '' : __t) +
'`),
              (M = _r + se.length),
              se
            );
          }),
            (U += `';
`);
          var ne = De.call(i, "variable") && i.variable;
          if (!ne)
            U =
              `with (obj) {
` +
              U +
              `
}
`;
          else if (ea.test(ne)) throw new fe(g);
          (U = (A ? U.replace(Kr, "") : U)
            .replace(Yt, "$1")
            .replace(ei, "$1;")),
            (U =
              "function(" +
              (ne || "obj") +
              `) {
` +
              (ne
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (_ ? ", __e = _.escape" : "") +
              (A
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              U +
              `return __p
}`);
          var we = pl(function () {
            return Te(d, Z + "return " + U).apply(r, w);
          });
          if (((we.source = U), pc(we))) throw we;
          return we;
        }
        function L0(e) {
          return Ne(e).toLowerCase();
        }
        function M0(e) {
          return Ne(e).toUpperCase();
        }
        function j0(e, i, a) {
          if (((e = Ne(e)), e && (a || i === r))) return Eu(e);
          if (!e || !(i = mr(i))) return e;
          var c = Mr(e),
            l = Mr(i),
            d = Iu(c, l),
            w = xu(c, l) + 1;
          return Ai(c, d, w).join("");
        }
        function q0(e, i, a) {
          if (((e = Ne(e)), e && (a || i === r))) return e.slice(0, Su(e) + 1);
          if (!e || !(i = mr(i))) return e;
          var c = Mr(e),
            l = xu(c, Mr(i)) + 1;
          return Ai(c, 0, l).join("");
        }
        function U0(e, i, a) {
          if (((e = Ne(e)), e && (a || i === r))) return e.replace(ft, "");
          if (!e || !(i = mr(i))) return e;
          var c = Mr(e),
            l = Iu(c, Mr(i));
          return Ai(c, l).join("");
        }
        function z0(e, i) {
          var a = st,
            c = Be;
          if (nt(i)) {
            var l = "separator" in i ? i.separator : l;
            (a = "length" in i ? ye(i.length) : a),
              (c = "omission" in i ? mr(i.omission) : c);
          }
          e = Ne(e);
          var d = e.length;
          if (ln(e)) {
            var w = Mr(e);
            d = w.length;
          }
          if (a >= d) return e;
          var _ = a - fn(c);
          if (_ < 1) return c;
          var A = w ? Ai(w, 0, _).join("") : e.slice(0, _);
          if (l === r) return A + c;
          if ((w && (_ += A.length - _), dc(l))) {
            if (e.slice(_).search(l)) {
              var M,
                j = A;
              for (
                l.global || (l = Ta(l.source, Ne(xr.exec(l)) + "g")),
                  l.lastIndex = 0;
                (M = l.exec(j));

              )
                var U = M.index;
              A = A.slice(0, U === r ? _ : U);
            }
          } else if (e.indexOf(mr(l), _) != _) {
            var V = A.lastIndexOf(l);
            V > -1 && (A = A.slice(0, V));
          }
          return A + c;
        }
        function k0(e) {
          return (e = Ne(e)), e && ct.test(e) ? e.replace(wi, vd) : e;
        }
        var H0 = wn(function (e, i, a) {
            return e + (a ? " " : "") + i.toUpperCase();
          }),
          vc = dh("toUpperCase");
        function fl(e, i, a) {
          return (
            (e = Ne(e)),
            (i = a ? r : i),
            i === r ? (fd(e) ? bd(e) : id(e)) : e.match(i) || []
          );
        }
        var pl = be(function (e, i) {
            try {
              return Lt(e, r, i);
            } catch (a) {
              return pc(a) ? a : new fe(a);
            }
          }),
          B0 = ai(function (e, i) {
            return (
              Sr(i, function (a) {
                (a = Qr(a)), si(e, a, lc(e[a], e));
              }),
              e
            );
          });
        function K0(e) {
          var i = e == null ? 0 : e.length,
            a = ie();
          return (
            (e = i
              ? Xe(e, function (c) {
                  if (typeof c[1] != "function") throw new Or(f);
                  return [a(c[0]), c[1]];
                })
              : []),
            be(function (c) {
              for (var l = -1; ++l < i; ) {
                var d = e[l];
                if (Lt(d[0], this, c)) return Lt(d[1], this, c);
              }
            })
          );
        }
        function V0(e) {
          return vg(Rr(e, x));
        }
        function mc(e) {
          return function () {
            return e;
          };
        }
        function W0(e, i) {
          return e == null || e !== e ? i : e;
        }
        var G0 = yh(),
          J0 = yh(!0);
        function hr(e) {
          return e;
        }
        function wc(e) {
          return Vu(typeof e == "function" ? e : Rr(e, x));
        }
        function Q0(e) {
          return Gu(Rr(e, x));
        }
        function Y0(e, i) {
          return Ju(e, Rr(i, x));
        }
        var X0 = be(function (e, i) {
            return function (a) {
              return Wn(a, e, i);
            };
          }),
          Z0 = be(function (e, i) {
            return function (a) {
              return Wn(e, a, i);
            };
          });
        function bc(e, i, a) {
          var c = Mt(i),
            l = so(i, c);
          a == null &&
            !(nt(i) && (l.length || !c.length)) &&
            ((a = i), (i = e), (e = this), (l = so(i, Mt(i))));
          var d = !(nt(a) && "chain" in a) || !!a.chain,
            w = ui(e);
          return (
            Sr(l, function (_) {
              var A = i[_];
              (e[_] = A),
                w &&
                  (e.prototype[_] = function () {
                    var M = this.__chain__;
                    if (d || M) {
                      var j = e(this.__wrapped__),
                        U = (j.__actions__ = ar(this.__actions__));
                      return (
                        U.push({ func: A, args: arguments, thisArg: e }),
                        (j.__chain__ = M),
                        j
                      );
                    }
                    return A.apply(e, Ei([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function e1() {
          return Pe._ === this && (Pe._ = Sd), this;
        }
        function _c() {}
        function t1(e) {
          return (
            (e = ye(e)),
            be(function (i) {
              return Qu(i, e);
            })
          );
        }
        var r1 = Xa(Xe),
          i1 = Xa(vu),
          n1 = Xa(Ia);
        function dl(e) {
          return sc(e) ? xa(Qr(e)) : Dg(e);
        }
        function s1(e) {
          return function (i) {
            return e == null ? r : Ki(e, i);
          };
        }
        var o1 = mh(),
          a1 = mh(!0);
        function Ec() {
          return [];
        }
        function Ic() {
          return !1;
        }
        function c1() {
          return {};
        }
        function u1() {
          return "";
        }
        function h1() {
          return !0;
        }
        function l1(e, i) {
          if (((e = ye(e)), e < 1 || e > k)) return [];
          var a = B,
            c = Wt(e, B);
          (i = ie(i)), (e -= B);
          for (var l = Oa(c, i); ++a < e; ) i(a);
          return l;
        }
        function f1(e) {
          return ge(e) ? Xe(e, Qr) : wr(e) ? [e] : ar(Dh(Ne(e)));
        }
        function p1(e) {
          var i = ++xd;
          return Ne(e) + i;
        }
        var d1 = lo(function (e, i) {
            return e + i;
          }, 0),
          g1 = Za("ceil"),
          y1 = lo(function (e, i) {
            return e / i;
          }, 1),
          v1 = Za("floor");
        function m1(e) {
          return e && e.length ? no(e, hr, ja) : r;
        }
        function w1(e, i) {
          return e && e.length ? no(e, ie(i, 2), ja) : r;
        }
        function b1(e) {
          return bu(e, hr);
        }
        function _1(e, i) {
          return bu(e, ie(i, 2));
        }
        function E1(e) {
          return e && e.length ? no(e, hr, ka) : r;
        }
        function I1(e, i) {
          return e && e.length ? no(e, ie(i, 2), ka) : r;
        }
        var x1 = lo(function (e, i) {
            return e * i;
          }, 1),
          P1 = Za("round"),
          S1 = lo(function (e, i) {
            return e - i;
          }, 0);
        function O1(e) {
          return e && e.length ? Sa(e, hr) : 0;
        }
        function A1(e, i) {
          return e && e.length ? Sa(e, ie(i, 2)) : 0;
        }
        return (
          (p.after = Qv),
          (p.ary = Kh),
          (p.assign = Mm),
          (p.assignIn = sl),
          (p.assignInWith = Po),
          (p.assignWith = jm),
          (p.at = qm),
          (p.before = Vh),
          (p.bind = lc),
          (p.bindAll = B0),
          (p.bindKey = Wh),
          (p.castArray = cm),
          (p.chain = kh),
          (p.chunk = vy),
          (p.compact = my),
          (p.concat = wy),
          (p.cond = K0),
          (p.conforms = V0),
          (p.constant = mc),
          (p.countBy = Ov),
          (p.create = Um),
          (p.curry = Gh),
          (p.curryRight = Jh),
          (p.debounce = Qh),
          (p.defaults = zm),
          (p.defaultsDeep = km),
          (p.defer = Yv),
          (p.delay = Xv),
          (p.difference = by),
          (p.differenceBy = _y),
          (p.differenceWith = Ey),
          (p.drop = Iy),
          (p.dropRight = xy),
          (p.dropRightWhile = Py),
          (p.dropWhile = Sy),
          (p.fill = Oy),
          (p.filter = Rv),
          (p.flatMap = Nv),
          (p.flatMapDeep = $v),
          (p.flatMapDepth = Dv),
          (p.flatten = jh),
          (p.flattenDeep = Ay),
          (p.flattenDepth = Ry),
          (p.flip = Zv),
          (p.flow = G0),
          (p.flowRight = J0),
          (p.fromPairs = Ty),
          (p.functions = Jm),
          (p.functionsIn = Qm),
          (p.groupBy = Fv),
          (p.initial = Ny),
          (p.intersection = $y),
          (p.intersectionBy = Dy),
          (p.intersectionWith = Fy),
          (p.invert = Xm),
          (p.invertBy = Zm),
          (p.invokeMap = Mv),
          (p.iteratee = wc),
          (p.keyBy = jv),
          (p.keys = Mt),
          (p.keysIn = ur),
          (p.map = wo),
          (p.mapKeys = t0),
          (p.mapValues = r0),
          (p.matches = Q0),
          (p.matchesProperty = Y0),
          (p.memoize = _o),
          (p.merge = i0),
          (p.mergeWith = ol),
          (p.method = X0),
          (p.methodOf = Z0),
          (p.mixin = bc),
          (p.negate = Eo),
          (p.nthArg = t1),
          (p.omit = n0),
          (p.omitBy = s0),
          (p.once = em),
          (p.orderBy = qv),
          (p.over = r1),
          (p.overArgs = tm),
          (p.overEvery = i1),
          (p.overSome = n1),
          (p.partial = fc),
          (p.partialRight = Yh),
          (p.partition = Uv),
          (p.pick = o0),
          (p.pickBy = al),
          (p.property = dl),
          (p.propertyOf = s1),
          (p.pull = qy),
          (p.pullAll = Uh),
          (p.pullAllBy = Uy),
          (p.pullAllWith = zy),
          (p.pullAt = ky),
          (p.range = o1),
          (p.rangeRight = a1),
          (p.rearg = rm),
          (p.reject = Hv),
          (p.remove = Hy),
          (p.rest = im),
          (p.reverse = uc),
          (p.sampleSize = Kv),
          (p.set = c0),
          (p.setWith = u0),
          (p.shuffle = Vv),
          (p.slice = By),
          (p.sortBy = Jv),
          (p.sortedUniq = Yy),
          (p.sortedUniqBy = Xy),
          (p.split = N0),
          (p.spread = nm),
          (p.tail = Zy),
          (p.take = ev),
          (p.takeRight = tv),
          (p.takeRightWhile = rv),
          (p.takeWhile = iv),
          (p.tap = mv),
          (p.throttle = sm),
          (p.thru = mo),
          (p.toArray = rl),
          (p.toPairs = cl),
          (p.toPairsIn = ul),
          (p.toPath = f1),
          (p.toPlainObject = nl),
          (p.transform = h0),
          (p.unary = om),
          (p.union = nv),
          (p.unionBy = sv),
          (p.unionWith = ov),
          (p.uniq = av),
          (p.uniqBy = cv),
          (p.uniqWith = uv),
          (p.unset = l0),
          (p.unzip = hc),
          (p.unzipWith = zh),
          (p.update = f0),
          (p.updateWith = p0),
          (p.values = En),
          (p.valuesIn = d0),
          (p.without = hv),
          (p.words = fl),
          (p.wrap = am),
          (p.xor = lv),
          (p.xorBy = fv),
          (p.xorWith = pv),
          (p.zip = dv),
          (p.zipObject = gv),
          (p.zipObjectDeep = yv),
          (p.zipWith = vv),
          (p.entries = cl),
          (p.entriesIn = ul),
          (p.extend = sl),
          (p.extendWith = Po),
          bc(p, p),
          (p.add = d1),
          (p.attempt = pl),
          (p.camelCase = m0),
          (p.capitalize = hl),
          (p.ceil = g1),
          (p.clamp = g0),
          (p.clone = um),
          (p.cloneDeep = lm),
          (p.cloneDeepWith = fm),
          (p.cloneWith = hm),
          (p.conformsTo = pm),
          (p.deburr = ll),
          (p.defaultTo = W0),
          (p.divide = y1),
          (p.endsWith = w0),
          (p.eq = qr),
          (p.escape = b0),
          (p.escapeRegExp = _0),
          (p.every = Av),
          (p.find = Tv),
          (p.findIndex = Lh),
          (p.findKey = Hm),
          (p.findLast = Cv),
          (p.findLastIndex = Mh),
          (p.findLastKey = Bm),
          (p.floor = v1),
          (p.forEach = Hh),
          (p.forEachRight = Bh),
          (p.forIn = Km),
          (p.forInRight = Vm),
          (p.forOwn = Wm),
          (p.forOwnRight = Gm),
          (p.get = gc),
          (p.gt = dm),
          (p.gte = gm),
          (p.has = Ym),
          (p.hasIn = yc),
          (p.head = qh),
          (p.identity = hr),
          (p.includes = Lv),
          (p.indexOf = Cy),
          (p.inRange = y0),
          (p.invoke = e0),
          (p.isArguments = Gi),
          (p.isArray = ge),
          (p.isArrayBuffer = ym),
          (p.isArrayLike = cr),
          (p.isArrayLikeObject = mt),
          (p.isBoolean = vm),
          (p.isBuffer = Ri),
          (p.isDate = mm),
          (p.isElement = wm),
          (p.isEmpty = bm),
          (p.isEqual = _m),
          (p.isEqualWith = Em),
          (p.isError = pc),
          (p.isFinite = Im),
          (p.isFunction = ui),
          (p.isInteger = Xh),
          (p.isLength = Io),
          (p.isMap = Zh),
          (p.isMatch = xm),
          (p.isMatchWith = Pm),
          (p.isNaN = Sm),
          (p.isNative = Om),
          (p.isNil = Rm),
          (p.isNull = Am),
          (p.isNumber = el),
          (p.isObject = nt),
          (p.isObjectLike = dt),
          (p.isPlainObject = Zn),
          (p.isRegExp = dc),
          (p.isSafeInteger = Tm),
          (p.isSet = tl),
          (p.isString = xo),
          (p.isSymbol = wr),
          (p.isTypedArray = _n),
          (p.isUndefined = Cm),
          (p.isWeakMap = Nm),
          (p.isWeakSet = $m),
          (p.join = Ly),
          (p.kebabCase = E0),
          (p.last = Cr),
          (p.lastIndexOf = My),
          (p.lowerCase = I0),
          (p.lowerFirst = x0),
          (p.lt = Dm),
          (p.lte = Fm),
          (p.max = m1),
          (p.maxBy = w1),
          (p.mean = b1),
          (p.meanBy = _1),
          (p.min = E1),
          (p.minBy = I1),
          (p.stubArray = Ec),
          (p.stubFalse = Ic),
          (p.stubObject = c1),
          (p.stubString = u1),
          (p.stubTrue = h1),
          (p.multiply = x1),
          (p.nth = jy),
          (p.noConflict = e1),
          (p.noop = _c),
          (p.now = bo),
          (p.pad = P0),
          (p.padEnd = S0),
          (p.padStart = O0),
          (p.parseInt = A0),
          (p.random = v0),
          (p.reduce = zv),
          (p.reduceRight = kv),
          (p.repeat = R0),
          (p.replace = T0),
          (p.result = a0),
          (p.round = P1),
          (p.runInContext = S),
          (p.sample = Bv),
          (p.size = Wv),
          (p.snakeCase = C0),
          (p.some = Gv),
          (p.sortedIndex = Ky),
          (p.sortedIndexBy = Vy),
          (p.sortedIndexOf = Wy),
          (p.sortedLastIndex = Gy),
          (p.sortedLastIndexBy = Jy),
          (p.sortedLastIndexOf = Qy),
          (p.startCase = $0),
          (p.startsWith = D0),
          (p.subtract = S1),
          (p.sum = O1),
          (p.sumBy = A1),
          (p.template = F0),
          (p.times = l1),
          (p.toFinite = hi),
          (p.toInteger = ye),
          (p.toLength = il),
          (p.toLower = L0),
          (p.toNumber = Nr),
          (p.toSafeInteger = Lm),
          (p.toString = Ne),
          (p.toUpper = M0),
          (p.trim = j0),
          (p.trimEnd = q0),
          (p.trimStart = U0),
          (p.truncate = z0),
          (p.unescape = k0),
          (p.uniqueId = p1),
          (p.upperCase = H0),
          (p.upperFirst = vc),
          (p.each = Hh),
          (p.eachRight = Bh),
          (p.first = qh),
          bc(
            p,
            (function () {
              var e = {};
              return (
                Gr(p, function (i, a) {
                  De.call(p.prototype, a) || (e[a] = i);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (p.VERSION = s),
          Sr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              p[e].placeholder = p;
            }
          ),
          Sr(["drop", "take"], function (e, i) {
            (xe.prototype[e] = function (a) {
              a = a === r ? 1 : Dt(ye(a), 0);
              var c = this.__filtered__ && !i ? new xe(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Wt(a, c.__takeCount__))
                  : c.__views__.push({
                      size: Wt(a, B),
                      type: e + (c.__dir__ < 0 ? "Right" : ""),
                    }),
                c
              );
            }),
              (xe.prototype[e + "Right"] = function (a) {
                return this.reverse()[e](a).reverse();
              });
          }),
          Sr(["filter", "map", "takeWhile"], function (e, i) {
            var a = i + 1,
              c = a == b || a == J;
            xe.prototype[e] = function (l) {
              var d = this.clone();
              return (
                d.__iteratees__.push({ iteratee: ie(l, 3), type: a }),
                (d.__filtered__ = d.__filtered__ || c),
                d
              );
            };
          }),
          Sr(["head", "last"], function (e, i) {
            var a = "take" + (i ? "Right" : "");
            xe.prototype[e] = function () {
              return this[a](1).value()[0];
            };
          }),
          Sr(["initial", "tail"], function (e, i) {
            var a = "drop" + (i ? "" : "Right");
            xe.prototype[e] = function () {
              return this.__filtered__ ? new xe(this) : this[a](1);
            };
          }),
          (xe.prototype.compact = function () {
            return this.filter(hr);
          }),
          (xe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (xe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (xe.prototype.invokeMap = be(function (e, i) {
            return typeof e == "function"
              ? new xe(this)
              : this.map(function (a) {
                  return Wn(a, e, i);
                });
          })),
          (xe.prototype.reject = function (e) {
            return this.filter(Eo(ie(e)));
          }),
          (xe.prototype.slice = function (e, i) {
            e = ye(e);
            var a = this;
            return a.__filtered__ && (e > 0 || i < 0)
              ? new xe(a)
              : (e < 0 ? (a = a.takeRight(-e)) : e && (a = a.drop(e)),
                i !== r &&
                  ((i = ye(i)), (a = i < 0 ? a.dropRight(-i) : a.take(i - e))),
                a);
          }),
          (xe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (xe.prototype.toArray = function () {
            return this.take(B);
          }),
          Gr(xe.prototype, function (e, i) {
            var a = /^(?:filter|find|map|reject)|While$/.test(i),
              c = /^(?:head|last)$/.test(i),
              l = p[c ? "take" + (i == "last" ? "Right" : "") : i],
              d = c || /^find/.test(i);
            l &&
              (p.prototype[i] = function () {
                var w = this.__wrapped__,
                  _ = c ? [1] : arguments,
                  A = w instanceof xe,
                  M = _[0],
                  j = A || ge(w),
                  U = function (_e) {
                    var Se = l.apply(p, Ei([_e], _));
                    return c && V ? Se[0] : Se;
                  };
                j &&
                  a &&
                  typeof M == "function" &&
                  M.length != 1 &&
                  (A = j = !1);
                var V = this.__chain__,
                  Z = !!this.__actions__.length,
                  ne = d && !V,
                  we = A && !Z;
                if (!d && j) {
                  w = we ? w : new xe(this);
                  var se = e.apply(w, _);
                  return (
                    se.__actions__.push({ func: mo, args: [U], thisArg: r }),
                    new Ar(se, V)
                  );
                }
                return ne && we
                  ? e.apply(this, _)
                  : ((se = this.thru(U)),
                    ne ? (c ? se.value()[0] : se.value()) : se);
              });
          }),
          Sr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var i = Hs[e],
                a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                c = /^(?:pop|shift)$/.test(e);
              p.prototype[e] = function () {
                var l = arguments;
                if (c && !this.__chain__) {
                  var d = this.value();
                  return i.apply(ge(d) ? d : [], l);
                }
                return this[a](function (w) {
                  return i.apply(ge(w) ? w : [], l);
                });
              };
            }
          ),
          Gr(xe.prototype, function (e, i) {
            var a = p[i];
            if (a) {
              var c = a.name + "";
              De.call(yn, c) || (yn[c] = []), yn[c].push({ name: i, func: a });
            }
          }),
          (yn[ho(r, oe).name] = [{ name: "wrapper", func: r }]),
          (xe.prototype.clone = kd),
          (xe.prototype.reverse = Hd),
          (xe.prototype.value = Bd),
          (p.prototype.at = wv),
          (p.prototype.chain = bv),
          (p.prototype.commit = _v),
          (p.prototype.next = Ev),
          (p.prototype.plant = xv),
          (p.prototype.reverse = Pv),
          (p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Sv),
          (p.prototype.first = p.prototype.head),
          Un && (p.prototype[Un] = Iv),
          p
        );
      },
      pn = _d();
    vt ? (((vt.exports = pn)._ = pn), (ze._ = pn)) : (Pe._ = pn);
  }).call(os);
})(Yc, Yc.exports);
var CP = Object.defineProperty,
  NP = Object.defineProperties,
  $P = Object.getOwnPropertyDescriptors,
  Ff = Object.getOwnPropertySymbols,
  DP = Object.prototype.hasOwnProperty,
  FP = Object.prototype.propertyIsEnumerable,
  Lf = (n, t, r) =>
    t in n
      ? CP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  Co = (n, t) => {
    for (var r in t || (t = {})) DP.call(t, r) && Lf(n, r, t[r]);
    if (Ff) for (var r of Ff(t)) FP.call(t, r) && Lf(n, r, t[r]);
    return n;
  },
  LP = (n, t) => NP(n, $P(t));
function Ni(n, t, r) {
  var s;
  const o = gw(n);
  return (
    ((s = t.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${TP}?chainId=${o.namespace}:${o.reference}&projectId=${r}`
  );
}
function tn(n) {
  return n.includes(":") ? n.split(":")[1] : n;
}
function Qp(n) {
  return n.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function MP(n, t) {
  const r = Object.keys(t.namespaces).filter((o) => o.includes(n));
  if (!r.length) return [];
  const s = [];
  return (
    r.forEach((o) => {
      const u = t.namespaces[o].accounts;
      s.push(...u);
    }),
    s
  );
}
function jP(n = {}, t = {}) {
  const r = Mf(n),
    s = Mf(t);
  return Yc.exports.merge(r, s);
}
function Mf(n) {
  var t, r, s, o;
  const u = {};
  if (!Rn(n)) return u;
  for (const [f, g] of Object.entries(n)) {
    const m = su(f) ? [f] : g.chains,
      y = g.methods || [],
      E = g.events || [],
      x = g.rpcMap || {},
      $ = as(f);
    u[$] = LP(Co(Co({}, u[$]), g), {
      chains: Pc(m, (t = u[$]) == null ? void 0 : t.chains),
      methods: Pc(y, (r = u[$]) == null ? void 0 : r.methods),
      events: Pc(E, (s = u[$]) == null ? void 0 : s.events),
      rpcMap: Co(Co({}, x), (o = u[$]) == null ? void 0 : o.rpcMap),
    });
  }
  return u;
}
function qP(n) {
  return n.includes(":") ? n.split(":")[2] : n;
}
function UP(n) {
  const t = {};
  for (const [r, s] of Object.entries(n)) {
    const o = s.methods || [],
      u = s.events || [],
      f = s.accounts || [],
      g = su(r) ? [r] : s.chains ? s.chains : Qp(s.accounts);
    t[r] = { chains: g, methods: o, events: u, accounts: f };
  }
  return t;
}
function Mc(n) {
  return typeof n == "number"
    ? n
    : n.includes("0x")
    ? parseInt(n, 16)
    : n.includes(":")
    ? Number(n.split(":")[1])
    : Number(n);
}
const Yp = {},
  Ze = (n) => Yp[n],
  jc = (n, t) => {
    Yp[n] = t;
  };
class zP {
  constructor(t) {
    (this.name = "polkadot"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = tn(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class kP {
  constructor(t) {
    (this.name = "eip155"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method)
      ? await this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
      (this.chainId = parseInt(t)),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const s =
      r || Ni(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = parseInt(tn(r));
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const t = this.chainId,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let o = t.request.params
      ? (r = t.request.params[0]) == null
        ? void 0
        : r.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const u = parseInt(o, 16);
    if (this.isChainApproved(u)) this.setDefaultChain(`${u}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: t.topic,
        request: { method: t.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${u}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${u}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class HP {
  constructor(t) {
    (this.name = "solana"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = tn(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class BP {
  constructor(t) {
    (this.name = "cosmos"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        mi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = tn(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class KP {
  constructor(t) {
    (this.name = "cip34"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        mi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        const s = this.getCardanoRPCUrl(r),
          o = tn(r);
        t[o] = this.createHttpProvider(o, s);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class VP {
  constructor(t) {
    (this.name = "elrond"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = tn(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class WP {
  constructor(t) {
    (this.name = "multiversx"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const o = tn(r);
        t[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, Ze("disableProviderPing")));
  }
}
class GP {
  constructor(t) {
    (this.name = "near"),
      (this.namespace = t.namespace),
      (this.events = Ze("events")),
      (this.client = Ze("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (((this.chainId = t), !this.httpProviders[t])) {
      const s = r || Ni(`${this.name}:${t}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        t[r] = this.createHttpProvider(
          r,
          (s = this.namespace.rpcMap) == null ? void 0 : s[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace);
    return typeof s > "u"
      ? void 0
      : new vi(new $i(s, Ze("disableProviderPing")));
  }
}
var JP = Object.defineProperty,
  QP = Object.defineProperties,
  YP = Object.getOwnPropertyDescriptors,
  jf = Object.getOwnPropertySymbols,
  XP = Object.prototype.hasOwnProperty,
  ZP = Object.prototype.propertyIsEnumerable,
  qf = (n, t, r) =>
    t in n
      ? JP(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  No = (n, t) => {
    for (var r in t || (t = {})) XP.call(t, r) && qf(n, r, t[r]);
    if (jf) for (var r of jf(t)) ZP.call(t, r) && qf(n, r, t[r]);
    return n;
  },
  qc = (n, t) => QP(n, YP(t));
class gu {
  constructor(t) {
    (this.events = new Ut()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = t),
      (this.logger =
        typeof (t == null ? void 0 : t.logger) < "u" &&
        typeof (t == null ? void 0 : t.logger) != "string"
          ? t.logger
          : Wo(Jo({ level: (t == null ? void 0 : t.logger) || $f }))),
      (this.disableProviderPing =
        (t == null ? void 0 : t.disableProviderPing) || !1);
  }
  static async init(t) {
    const r = new gu(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, o] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({
      request: No({}, t),
      chainId: `${s}:${o}`,
      topic: this.session.topic,
    });
  }
  sendAsync(t, r, s) {
    this.request(t, s)
      .then((o) => r(null, o))
      .catch((o) => r(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (t = this.session) == null ? void 0 : t.topic,
      reason: bt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(t),
      await this.cleanupPendingPairings(),
      !t.skipPairing)
    )
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: t,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((u) => {
            (this.session = u),
              this.namespaces ||
                ((this.namespaces = UP(u.namespaces)),
                this.persist("namespaces", this.namespaces));
          })
          .catch((u) => {
            if (u.message !== Gp) throw u;
            r++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(o, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (Zr(r)) {
      for (const s of r)
        t.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const t = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[t])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await mP.init({
        logger: this.providerOpts.logger || $f,
        relayUrl: this.providerOpts.relayUrl || OP,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const t = [
      ...new Set(Object.keys(this.session.namespaces).map((r) => as(r))),
    ];
    jc("client", this.client),
      jc("events", this.events),
      jc("disableProviderPing", this.disableProviderPing),
      t.forEach((r) => {
        if (!this.session) return;
        const s = MP(r, this.session),
          o = Qp(s),
          u = jP(this.namespaces, this.optionalNamespaces),
          f = qc(No({}, u[r]), { accounts: s, chains: o });
        switch (r) {
          case "eip155":
            this.rpcProviders[r] = new kP({ namespace: f });
            break;
          case "solana":
            this.rpcProviders[r] = new HP({ namespace: f });
            break;
          case "cosmos":
            this.rpcProviders[r] = new BP({ namespace: f });
            break;
          case "polkadot":
            this.rpcProviders[r] = new zP({ namespace: f });
            break;
          case "cip34":
            this.rpcProviders[r] = new KP({ namespace: f });
            break;
          case "elrond":
            this.rpcProviders[r] = new VP({ namespace: f });
            break;
          case "multiversx":
            this.rpcProviders[r] = new WP({ namespace: f });
            break;
          case "near":
            this.rpcProviders[r] = new GP({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }),
      this.client.on("session_event", (t) => {
        const { params: r } = t,
          { event: s } = r;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && Zr(o) && this.events.emit("accountsChanged", o.map(qP));
        } else if (s.name === "chainChanged") {
          const o = r.chainId,
            u = r.event.data,
            f = as(o),
            g = Mc(o) !== Mc(u) ? `${f}:${Mc(u)}` : o;
          this.onChainChanged(g);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", t);
      }),
      this.client.on("session_update", ({ topic: t, params: r }) => {
        var s;
        const { namespaces: o } = r,
          u = (s = this.client) == null ? void 0 : s.session.get(t);
        (this.session = qc(No({}, u), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: t, params: r });
      }),
      this.client.on("session_delete", async (t) => {
        await this.cleanup(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            qc(No({}, bt("USER_DISCONNECTED")), { data: t.topic })
          );
      }),
      this.on(mi.DEFAULT_CHAIN_CHANGED, (t) => {
        this.onChainChanged(t, !0);
      });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace(
        (r = this.session) == null ? void 0 : r.namespaces[t]
      );
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: o } = t;
    r && Object.keys(r).length && (this.namespaces = r),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", r),
      this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [r, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, s];
    if (
      r &&
      !Object.keys(this.namespaces || {})
        .map((f) => as(f))
        .includes(r)
    )
      throw new Error(
        `Namespace '${r}' is not configured. Please call connect() first with namespace config.`
      );
    if (r && s) return [r, s];
    const o = as(Object.keys(this.namespaces)[0]),
      u = this.rpcProviders[o].getDefaultChain();
    return [o, u];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces) return;
    const [o, u] = this.validateChain(t);
    r || this.getProvider(o).setDefaultChain(u),
      (((s = this.namespaces[o]) != null
        ? s
        : this.namespaces[`${o}:${u}`]
      ).defaultChain = u),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", u);
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Df}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Df}/${t}`);
  }
}
const eS = gu,
  tS = "wc",
  rS = "ethereum_provider",
  iS = `${tS}@2:${rS}:`,
  nS = "https://rpc.walletconnect.com/v1/",
  Xc = ["eth_sendTransaction", "personal_sign"],
  sS = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  Zc = ["chainChanged", "accountsChanged"],
  oS = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var aS = Object.defineProperty,
  cS = Object.defineProperties,
  uS = Object.getOwnPropertyDescriptors,
  Uf = Object.getOwnPropertySymbols,
  hS = Object.prototype.hasOwnProperty,
  lS = Object.prototype.propertyIsEnumerable,
  zf = (n, t, r) =>
    t in n
      ? aS(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[t] = r),
  us = (n, t) => {
    for (var r in t || (t = {})) hS.call(t, r) && zf(n, r, t[r]);
    if (Uf) for (var r of Uf(t)) lS.call(t, r) && zf(n, r, t[r]);
    return n;
  },
  kf = (n, t) => cS(n, uS(t));
function Bo(n) {
  return Number(n[0].split(":")[1]);
}
function Uc(n) {
  return `0x${n.toString(16)}`;
}
function fS(n) {
  const {
    chains: t,
    optionalChains: r,
    methods: s,
    optionalMethods: o,
    events: u,
    optionalEvents: f,
    rpcMap: g,
  } = n;
  if (!Zr(t)) throw new Error("Invalid chains");
  const m = {
      chains: t,
      methods: s || Xc,
      events: u || Zc,
      rpcMap: us({}, t.length ? { [Bo(t)]: g[Bo(t)] } : {}),
    },
    y = u == null ? void 0 : u.filter((L) => !Zc.includes(L)),
    E = s == null ? void 0 : s.filter((L) => !Xc.includes(L));
  if (!r && !f && !o && !(y != null && y.length) && !(E != null && E.length))
    return { required: t.length ? m : void 0 };
  const x =
      ((y == null ? void 0 : y.length) && (E == null ? void 0 : E.length)) ||
      !r,
    $ = {
      chains: [...new Set(x ? m.chains.concat(r || []) : r)],
      methods: [...new Set(m.methods.concat(o != null && o.length ? o : sS))],
      events: [...new Set(m.events.concat(f != null && f.length ? f : oS))],
      rpcMap: g,
    };
  return { required: t.length ? m : void 0, optional: r.length ? $ : void 0 };
}
class yu {
  constructor() {
    (this.events = new Ut.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = iS),
      (this.on = (t, r) => (this.events.on(t, r), this)),
      (this.once = (t, r) => (this.events.once(t, r), this)),
      (this.removeListener = (t, r) => (
        this.events.removeListener(t, r), this
      )),
      (this.off = (t, r) => (this.events.off(t, r), this)),
      (this.parseAccount = (t) =>
        this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(t) {
    const r = new yu();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: s } = fS(this.rpc);
    try {
      const o = await new Promise(async (f, g) => {
        var m;
        this.rpc.showQrModal &&
          ((m = this.modal) == null ||
            m.subscribeModal((y) => {
              !y.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                g(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              kf(
                us(
                  { namespaces: us({}, r && { [this.namespace]: r }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: t == null ? void 0 : t.pairingTopic }
              )
            )
            .then((y) => {
              f(y);
            })
            .catch((y) => {
              g(new Error(y.message));
            });
      });
      if (!o) return;
      const u = yw(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : u),
        this.setAccounts(u),
        this.events.emit("connect", { chainId: Uc(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t,
        { event: s } = r;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", t);
    }),
      this.signer.on("chainChanged", (t) => {
        const r = parseInt(t);
        (this.chainId = r),
          this.events.emit("chainChanged", Uc(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (t) => {
        this.events.emit("session_update", t);
      }),
      this.signer.on("session_delete", (t) => {
        this.reset(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            kf(us({}, bt("USER_DISCONNECTED")), {
              data: t.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (t) => {
        var r, s;
        this.rpc.showQrModal &&
          ((r = this.modal) == null || r.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: t })),
          this.events.emit("display_uri", t);
      });
  }
  switchEthereumChain(t) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: t.toString(16) }],
    });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    r.length &&
      ((this.chainId = r[0]),
      this.events.emit("chainChanged", Uc(this.chainId)),
      this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      (this.chainId = r), this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, o] = t.split(":");
    return { chainId: `${r}:${s}`, address: o };
  }
  setAccounts(t) {
    (this.accounts = t
      .filter(
        (r) =>
          this.parseChainId(this.parseAccountId(r).chainId) === this.chainId
      )
      .map((r) => this.parseAccountId(r).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const o = (r = t == null ? void 0 : t.chains) != null ? r : [],
      u = (s = t == null ? void 0 : t.optionalChains) != null ? s : [],
      f = o.concat(u);
    if (!f.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const g = o.length ? (t == null ? void 0 : t.methods) || Xc : [],
      m = o.length ? (t == null ? void 0 : t.events) || Zc : [],
      y = (t == null ? void 0 : t.optionalMethods) || [],
      E = (t == null ? void 0 : t.optionalEvents) || [],
      x = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId),
      $ = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return {
      chains: o == null ? void 0 : o.map((L) => this.formatChainId(L)),
      optionalChains: u.map((L) => this.formatChainId(L)),
      methods: g,
      events: m,
      optionalMethods: y,
      optionalEvents: E,
      rpcMap: x,
      showQrModal: !!(t != null && t.showQrModal),
      qrModalOptions: $,
      projectId: t.projectId,
      metadata: t.metadata,
    };
  }
  buildRpcMap(t, r) {
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = this.getRpcUrl(o, r);
      }),
      s
    );
  }
  async initialize(t) {
    if (
      ((this.rpc = this.getRpcConfig(t)),
      (this.chainId = this.rpc.chains.length
        ? Bo(this.rpc.chains)
        : Bo(this.rpc.optionalChains)),
      (this.signer = await eS.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: t.disableProviderPing,
        relayUrl: t.relayUrl,
        storageOptions: t.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let r;
      try {
        const { WalletConnectModal: s } = await R1(
          () => import("./chunk-942b1f0c.js").then((o) => o.i),
          ["js/chunk-942b1f0c.js", "js/app-6c8af094.js"]
        );
        r = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (r)
        try {
          this.modal = new r(
            us(
              {
                walletConnectVersion: 2,
                projectId: this.rpc.projectId,
                standaloneChains: this.rpc.chains,
              },
              this.rpc.qrModalOptions
            )
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: s, rpcMap: o } = t;
    r &&
      Zr(r) &&
      ((this.rpc.chains = r.map((u) => this.formatChainId(u))),
      r.forEach((u) => {
        this.rpc.rpcMap[u] = (o == null ? void 0 : o[u]) || this.getRpcUrl(u);
      })),
      s &&
        Zr(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          s == null ? void 0 : s.map((u) => this.formatChainId(u))),
        s.forEach((u) => {
          this.rpc.rpcMap[u] = (o == null ? void 0 : o[u]) || this.getRpcUrl(u);
        }));
  }
  getRpcUrl(t, r) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) ||
      `${nS}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      r = this.session.namespaces[`${this.namespace}:${t}`]
        ? this.session.namespaces[`${this.namespace}:${t}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts
    ),
      this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String
      ? [this.parseAccount(t)]
      : t.map((r) => this.parseAccount(r));
  }
}
const $S = yu;
export {
  $S as EthereumProvider,
  oS as OPTIONAL_EVENTS,
  sS as OPTIONAL_METHODS,
  Zc as REQUIRED_EVENTS,
  Xc as REQUIRED_METHODS,
  yu as default,
};
//# sourceMappingURL=chunk-51b4a566.js.map
