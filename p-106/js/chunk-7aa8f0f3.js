import { a as h } from "./app-7c71c7a1.js";
function L() {}
const fe = (e) => e;
function Be(e, a) {
  for (const c in a) e[c] = a[c];
  return e;
}
function Ee(e) {
  return e();
}
function re() {
  return Object.create(null);
}
function S(e) {
  e.forEach(Ee);
}
function y(e) {
  return typeof e == "function";
}
function ba(e, a) {
  return e != e
    ? a == a
    : e !== a || (e && typeof e == "object") || typeof e == "function";
}
let $;
function _a(e, a) {
  return $ || ($ = document.createElement("a")), ($.href = a), e === $.href;
}
function Me(e) {
  return Object.keys(e).length === 0;
}
function ue(e, ...a) {
  if (e == null) return L;
  const c = e.subscribe(...a);
  return c.unsubscribe ? () => c.unsubscribe() : c;
}
function ia(e) {
  let a;
  return ue(e, (c) => (a = c))(), a;
}
function sa(e, a, c) {
  e.$$.on_destroy.push(ue(a, c));
}
function ra(e, a, c, n) {
  if (e) {
    const f = Oe(e, a, c, n);
    return e[0](f);
  }
}
function Oe(e, a, c, n) {
  return e[1] && n ? Be(c.ctx.slice(), e[1](n(a))) : c.ctx;
}
function oa(e, a, c, n) {
  if (e[2] && n) {
    const f = e[2](n(c));
    if (a.dirty === void 0) return f;
    if (typeof f == "object") {
      const t = [],
        d = Math.max(a.dirty.length, f.length);
      for (let b = 0; b < d; b += 1) t[b] = a.dirty[b] | f[b];
      return t;
    }
    return a.dirty | f;
  }
  return a.dirty;
}
function ga(e, a, c, n, f, t) {
  if (f) {
    const d = Oe(a, c, n, t);
    e.p(d, f);
  }
}
function la(e) {
  if (e.ctx.length > 32) {
    const a = [],
      c = e.ctx.length / 32;
    for (let n = 0; n < c; n++) a[n] = -1;
    return a;
  }
  return -1;
}
function pa(e) {
  const a = {};
  for (const c in e) c[0] !== "$" && (a[c] = e[c]);
  return a;
}
function Ea(e, a) {
  const c = {};
  a = new Set(a);
  for (const n in e) !a.has(n) && n[0] !== "$" && (c[n] = e[n]);
  return c;
}
function ua(e) {
  const a = {};
  for (const c in e) a[c] = !0;
  return a;
}
function Oa(e) {
  return e ?? "";
}
function Aa(e) {
  return e && y(e.destroy) ? e.destroy : L;
}
const Ae = typeof window < "u";
let de = Ae ? () => window.performance.now() : () => Date.now(),
  te = Ae ? (e) => requestAnimationFrame(e) : L;
const D = new Set();
function Ne(e) {
  D.forEach((a) => {
    a.c(e) || (D.delete(a), a.f());
  }),
    D.size !== 0 && te(Ne);
}
function be(e) {
  let a;
  return (
    D.size === 0 && te(Ne),
    {
      promise: new Promise((c) => {
        D.add((a = { c: e, f: c }));
      }),
      abort() {
        D.delete(a);
      },
    }
  );
}
let q = !1;
function ye() {
  q = !0;
}
function Ue() {
  q = !1;
}
function ve(e, a, c, n) {
  for (; e < a; ) {
    const f = e + ((a - e) >> 1);
    c(f) <= n ? (e = f + 1) : (a = f);
  }
  return e;
}
function we(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let a = e.childNodes;
  if (e.nodeName === "HEAD") {
    const _ = [];
    for (let i = 0; i < a.length; i++) {
      const r = a[i];
      r.claim_order !== void 0 && _.push(r);
    }
    a = _;
  }
  const c = new Int32Array(a.length + 1),
    n = new Int32Array(a.length);
  c[0] = -1;
  let f = 0;
  for (let _ = 0; _ < a.length; _++) {
    const i = a[_].claim_order,
      r =
        (f > 0 && a[c[f]].claim_order <= i
          ? f + 1
          : ve(1, f, (l) => a[c[l]].claim_order, i)) - 1;
    n[_] = c[r] + 1;
    const o = r + 1;
    (c[o] = _), (f = Math.max(o, f));
  }
  const t = [],
    d = [];
  let b = a.length - 1;
  for (let _ = c[f] + 1; _ != 0; _ = n[_ - 1]) {
    for (t.push(a[_ - 1]); b >= _; b--) d.push(a[b]);
    b--;
  }
  for (; b >= 0; b--) d.push(a[b]);
  t.reverse(), d.sort((_, i) => _.claim_order - i.claim_order);
  for (let _ = 0, i = 0; _ < d.length; _++) {
    for (; i < t.length && d[_].claim_order >= t[i].claim_order; ) i++;
    const r = i < t.length ? t[i] : null;
    e.insertBefore(d[_], r);
  }
}
function Te(e, a) {
  e.appendChild(a);
}
function Re(e) {
  if (!e) return document;
  const a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return a && a.host ? a : e.ownerDocument;
}
function He(e) {
  const a = Z("style");
  return xe(Re(e), a), a.sheet;
}
function xe(e, a) {
  return Te(e.head || e, a), a.sheet;
}
function Ye(e, a) {
  if (q) {
    for (
      we(e),
        (e.actual_end_child === void 0 ||
          (e.actual_end_child !== null &&
            e.actual_end_child.parentNode !== e)) &&
          (e.actual_end_child = e.firstChild);
      e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

    )
      e.actual_end_child = e.actual_end_child.nextSibling;
    a !== e.actual_end_child
      ? (a.claim_order !== void 0 || a.parentNode !== e) &&
        e.insertBefore(a, e.actual_end_child)
      : (e.actual_end_child = a.nextSibling);
  } else (a.parentNode !== e || a.nextSibling !== null) && e.appendChild(a);
}
function Fe(e, a, c) {
  e.insertBefore(a, c || null);
}
function $e(e, a, c) {
  q && !c
    ? Ye(e, a)
    : (a.parentNode !== e || a.nextSibling != c) &&
      e.insertBefore(a, c || null);
}
function B(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Na(e, a) {
  for (let c = 0; c < e.length; c += 1) e[c] && e[c].d(a);
}
function Z(e) {
  return document.createElement(e);
}
function Ie(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function _e(e) {
  return document.createTextNode(e);
}
function Ta() {
  return _e(" ");
}
function Ra() {
  return _e("");
}
function oe(e, a, c, n) {
  return e.addEventListener(a, c, n), () => e.removeEventListener(a, c, n);
}
function Ia(e) {
  return function (a) {
    return a.preventDefault(), e.call(this, a);
  };
}
function Ca(e) {
  return function (a) {
    return a.stopPropagation(), e.call(this, a);
  };
}
function We(e, a, c) {
  c == null
    ? e.removeAttribute(a)
    : e.getAttribute(a) !== c && e.setAttribute(a, c);
}
function La(e, a) {
  const c = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in a)
    a[n] == null
      ? e.removeAttribute(n)
      : n === "style"
      ? (e.style.cssText = a[n])
      : n === "__value"
      ? (e.value = e[n] = a[n])
      : c[n] && c[n].set
      ? (e[n] = a[n])
      : We(e, n, a[n]);
}
function ma(e) {
  return e === "" ? null : +e;
}
function Ke(e) {
  return Array.from(e.childNodes);
}
function Ce(e) {
  e.claim_info === void 0 &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function Le(e, a, c, n, f = !1) {
  Ce(e);
  const t = (() => {
    for (let d = e.claim_info.last_index; d < e.length; d++) {
      const b = e[d];
      if (a(b)) {
        const _ = c(b);
        return (
          _ === void 0 ? e.splice(d, 1) : (e[d] = _),
          f || (e.claim_info.last_index = d),
          b
        );
      }
    }
    for (let d = e.claim_info.last_index - 1; d >= 0; d--) {
      const b = e[d];
      if (a(b)) {
        const _ = c(b);
        return (
          _ === void 0 ? e.splice(d, 1) : (e[d] = _),
          f
            ? _ === void 0 && e.claim_info.last_index--
            : (e.claim_info.last_index = d),
          b
        );
      }
    }
    return n();
  })();
  return (
    (t.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    t
  );
}
function me(e, a, c, n) {
  return Le(
    e,
    (f) => f.nodeName === a,
    (f) => {
      const t = [];
      for (let d = 0; d < f.attributes.length; d++) {
        const b = f.attributes[d];
        c[b.name] || t.push(b.name);
      }
      t.forEach((d) => f.removeAttribute(d));
    },
    () => n(a)
  );
}
function ha(e, a, c) {
  return me(e, a, c, Z);
}
function Sa(e, a, c) {
  return me(e, a, c, Ie);
}
function ke(e, a) {
  return Le(
    e,
    (c) => c.nodeType === 3,
    (c) => {
      const n = "" + a;
      if (c.data.startsWith(n)) {
        if (c.data.length !== n.length) return c.splitText(n.length);
      } else c.data = n;
    },
    () => _e(a),
    !0
  );
}
function Pa(e) {
  return ke(e, " ");
}
function ge(e, a, c) {
  for (let n = c; n < e.length; n += 1) {
    const f = e[n];
    if (f.nodeType === 8 && f.textContent.trim() === a) return n;
  }
  return e.length;
}
function Ga(e, a) {
  const c = ge(e, "HTML_TAG_START", 0),
    n = ge(e, "HTML_TAG_END", c);
  if (c === n) return new le(void 0, a);
  Ce(e);
  const f = e.splice(c, n - c + 1);
  B(f[0]), B(f[f.length - 1]);
  const t = f.slice(1, f.length - 1);
  for (const d of t)
    (d.claim_order = e.claim_info.total_claimed),
      (e.claim_info.total_claimed += 1);
  return new le(t, a);
}
function Da(e, a) {
  (a = "" + a), e.wholeText !== a && (e.data = a);
}
function Ba(e, a) {
  e.value = a ?? "";
}
function Ma(e, a, c, n) {
  c === null
    ? e.style.removeProperty(a)
    : e.style.setProperty(a, c, n ? "important" : "");
}
let W;
function Ve() {
  if (W === void 0) {
    W = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      W = !0;
    }
  }
  return W;
}
function ya(e, a) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const n = Z("iframe");
  n.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ),
    n.setAttribute("aria-hidden", "true"),
    (n.tabIndex = -1);
  const f = Ve();
  let t;
  return (
    f
      ? ((n.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (t = oe(window, "message", (d) => {
          d.source === n.contentWindow && a();
        })))
      : ((n.src = "about:blank"),
        (n.onload = () => {
          t = oe(n.contentWindow, "resize", a);
        })),
    Te(e, n),
    () => {
      (f || (t && n.contentWindow)) && t(), B(n);
    }
  );
}
function Ua(e, a, c) {
  e.classList[c ? "add" : "remove"](a);
}
function he(e, a, { bubbles: c = !1, cancelable: n = !1 } = {}) {
  const f = document.createEvent("CustomEvent");
  return f.initCustomEvent(e, c, n, a), f;
}
function va(e, a) {
  const c = [];
  let n = 0;
  for (const f of a.childNodes)
    if (f.nodeType === 8) {
      const t = f.textContent.trim();
      t === `HEAD_${e}_END`
        ? ((n -= 1), c.push(f))
        : t === `HEAD_${e}_START` && ((n += 1), c.push(f));
    } else n > 0 && c.push(f);
  return c;
}
class je {
  constructor(a = !1) {
    (this.is_svg = !1), (this.is_svg = a), (this.e = this.n = null);
  }
  c(a) {
    this.h(a);
  }
  m(a, c, n = null) {
    this.e ||
      (this.is_svg ? (this.e = Ie(c.nodeName)) : (this.e = Z(c.nodeName)),
      (this.t = c),
      this.c(a)),
      this.i(n);
  }
  h(a) {
    (this.e.innerHTML = a), (this.n = Array.from(this.e.childNodes));
  }
  i(a) {
    for (let c = 0; c < this.n.length; c += 1) Fe(this.t, this.n[c], a);
  }
  p(a) {
    this.d(), this.h(a), this.i(this.a);
  }
  d() {
    this.n.forEach(B);
  }
}
class le extends je {
  constructor(a, c = !1) {
    super(c), (this.e = this.n = null), (this.l = a);
  }
  c(a) {
    this.l ? (this.n = this.l) : super.c(a);
  }
  i(a) {
    for (let c = 0; c < this.n.length; c += 1) $e(this.t, this.n[c], a);
  }
}
function wa(e, a) {
  return new e(a);
}
const j = new Map();
let X = 0;
function Xe(e) {
  let a = 5381,
    c = e.length;
  for (; c--; ) a = ((a << 5) - a) ^ e.charCodeAt(c);
  return a >>> 0;
}
function Je(e, a) {
  const c = { stylesheet: He(a), rules: {} };
  return j.set(e, c), c;
}
function J(e, a, c, n, f, t, d, b = 0) {
  const _ = 16.666 / n;
  let i = `{
`;
  for (let p = 0; p <= 1; p += _) {
    const O = a + (c - a) * t(p);
    i +=
      p * 100 +
      `%{${d(O, 1 - O)}}
`;
  }
  const r =
      i +
      `100% {${d(c, 1 - c)}}
}`,
    o = `__svelte_${Xe(r)}_${b}`,
    l = Re(e),
    { stylesheet: s, rules: g } = j.get(l) || Je(l, e);
  g[o] ||
    ((g[o] = !0), s.insertRule(`@keyframes ${o} ${r}`, s.cssRules.length));
  const E = e.style.animation || "";
  return (
    (e.style.animation = `${
      E ? `${E}, ` : ""
    }${o} ${n}ms linear ${f}ms 1 both`),
    (X += 1),
    o
  );
}
function z(e, a) {
  const c = (e.style.animation || "").split(", "),
    n = c.filter(
      a ? (t) => t.indexOf(a) < 0 : (t) => t.indexOf("__svelte") === -1
    ),
    f = c.length - n.length;
  f && ((e.style.animation = n.join(", ")), (X -= f), X || ze());
}
function ze() {
  te(() => {
    X ||
      (j.forEach((e) => {
        const { ownerNode: a } = e.stylesheet;
        a && B(a);
      }),
      j.clear());
  });
}
let x;
function H(e) {
  x = e;
}
function Y() {
  if (!x) throw new Error("Function called outside component initialization");
  return x;
}
function Ha(e) {
  Y().$$.on_mount.push(e);
}
function xa(e) {
  Y().$$.after_update.push(e);
}
function Ya(e) {
  Y().$$.on_destroy.push(e);
}
function Fa() {
  const e = Y();
  return (a, c, { cancelable: n = !1 } = {}) => {
    const f = e.$$.callbacks[a];
    if (f) {
      const t = he(a, c, { cancelable: n });
      return (
        f.slice().forEach((d) => {
          d.call(e, t);
        }),
        !t.defaultPrevented
      );
    }
    return !0;
  };
}
function $a(e) {
  return Y().$$.context.get(e);
}
function Wa(e, a) {
  const c = e.$$.callbacks[a.type];
  c && c.slice().forEach((n) => n.call(this, a));
}
const G = [],
  pe = [],
  k = [],
  ce = [],
  Se = Promise.resolve();
let ne = !1;
function Pe() {
  ne || ((ne = !0), Se.then(Ge));
}
function Ka() {
  return Pe(), Se;
}
function M(e) {
  k.push(e);
}
function ka(e) {
  ce.push(e);
}
const Q = new Set();
let P = 0;
function Ge() {
  if (P !== 0) return;
  const e = x;
  do {
    try {
      for (; P < G.length; ) {
        const a = G[P];
        P++, H(a), qe(a.$$);
      }
    } catch (a) {
      throw ((G.length = 0), (P = 0), a);
    }
    for (H(null), G.length = 0, P = 0; pe.length; ) pe.pop()();
    for (let a = 0; a < k.length; a += 1) {
      const c = k[a];
      Q.has(c) || (Q.add(c), c());
    }
    k.length = 0;
  } while (G.length);
  for (; ce.length; ) ce.pop()();
  (ne = !1), Q.clear(), H(e);
}
function qe(e) {
  if (e.fragment !== null) {
    e.update(), S(e.before_update);
    const a = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, a),
      e.after_update.forEach(M);
  }
}
let v;
function ie() {
  return (
    v ||
      ((v = Promise.resolve()),
      v.then(() => {
        v = null;
      })),
    v
  );
}
function m(e, a, c) {
  e.dispatchEvent(he(`${a ? "intro" : "outro"}${c}`));
}
const V = new Set();
let I;
function Va() {
  I = { r: 0, c: [], p: I };
}
function ja() {
  I.r || S(I.c), (I = I.p);
}
function De(e, a) {
  e && e.i && (V.delete(e), e.i(a));
}
function Ze(e, a, c, n) {
  if (e && e.o) {
    if (V.has(e)) return;
    V.add(e),
      I.c.push(() => {
        V.delete(e), n && (c && e.d(1), n());
      }),
      e.o(a);
  } else n && n();
}
const se = { duration: 0 };
function Xa(e, a, c) {
  const n = { direction: "in" };
  let f = a(e, c, n),
    t = !1,
    d,
    b,
    _ = 0;
  function i() {
    d && z(e, d);
  }
  function r() {
    const {
      delay: l = 0,
      duration: s = 300,
      easing: g = fe,
      tick: E = L,
      css: p,
    } = f || se;
    p && (d = J(e, 0, 1, s, l, g, p, _++)), E(0, 1);
    const O = de() + l,
      C = O + s;
    b && b.abort(),
      (t = !0),
      M(() => m(e, !0, "start")),
      (b = be((A) => {
        if (t) {
          if (A >= C) return E(1, 0), m(e, !0, "end"), i(), (t = !1);
          if (A >= O) {
            const N = g((A - O) / s);
            E(N, 1 - N);
          }
        }
        return t;
      }));
  }
  let o = !1;
  return {
    start() {
      o || ((o = !0), z(e), y(f) ? ((f = f(n)), ie().then(r)) : r());
    },
    invalidate() {
      o = !1;
    },
    end() {
      t && (i(), (t = !1));
    },
  };
}
function Ja(e, a, c) {
  const n = { direction: "out" };
  let f = a(e, c, n),
    t = !0,
    d;
  const b = I;
  b.r += 1;
  function _() {
    const {
      delay: i = 0,
      duration: r = 300,
      easing: o = fe,
      tick: l = L,
      css: s,
    } = f || se;
    s && (d = J(e, 1, 0, r, i, o, s));
    const g = de() + i,
      E = g + r;
    M(() => m(e, !1, "start")),
      be((p) => {
        if (t) {
          if (p >= E) return l(0, 1), m(e, !1, "end"), --b.r || S(b.c), !1;
          if (p >= g) {
            const O = o((p - g) / r);
            l(1 - O, O);
          }
        }
        return t;
      });
  }
  return (
    y(f)
      ? ie().then(() => {
          (f = f(n)), _();
        })
      : _(),
    {
      end(i) {
        i && f.tick && f.tick(1, 0), t && (d && z(e, d), (t = !1));
      },
    }
  );
}
function za(e, a, c, n) {
  const f = { direction: "both" };
  let t = a(e, c, f),
    d = n ? 0 : 1,
    b = null,
    _ = null,
    i = null;
  function r() {
    i && z(e, i);
  }
  function o(s, g) {
    const E = s.b - d;
    return (
      (g *= Math.abs(E)),
      {
        a: d,
        b: s.b,
        d: E,
        duration: g,
        start: s.start,
        end: s.start + g,
        group: s.group,
      }
    );
  }
  function l(s) {
    const {
        delay: g = 0,
        duration: E = 300,
        easing: p = fe,
        tick: O = L,
        css: C,
      } = t || se,
      A = { start: de() + g, b: s };
    s || ((A.group = I), (I.r += 1)),
      b || _
        ? (_ = A)
        : (C && (r(), (i = J(e, d, s, E, g, p, C))),
          s && O(0, 1),
          (b = o(A, E)),
          M(() => m(e, s, "start")),
          be((N) => {
            if (
              (_ &&
                N > _.start &&
                ((b = o(_, E)),
                (_ = null),
                m(e, b.b, "start"),
                C && (r(), (i = J(e, d, b.b, b.duration, 0, p, t.css)))),
              b)
            ) {
              if (N >= b.end)
                O((d = b.b), 1 - d),
                  m(e, b.b, "end"),
                  _ || (b.b ? r() : --b.group.r || S(b.group.c)),
                  (b = null);
              else if (N >= b.start) {
                const U = N - b.start;
                (d = b.a + b.d * p(U / b.duration)), O(d, 1 - d);
              }
            }
            return !!(b || _);
          }));
  }
  return {
    run(s) {
      y(t)
        ? ie().then(() => {
            (t = t(f)), l(s);
          })
        : l(s);
    },
    end() {
      r(), (b = _ = null);
    },
  };
}
const qa =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Za(e, a) {
  e.d(1), a.delete(e.key);
}
function Qa(e, a) {
  Ze(e, 1, 1, () => {
    a.delete(e.key);
  });
}
function ec(e, a, c, n, f, t, d, b, _, i, r, o) {
  let l = e.length,
    s = t.length,
    g = l;
  const E = {};
  for (; g--; ) E[e[g].key] = g;
  const p = [],
    O = new Map(),
    C = new Map();
  for (g = s; g--; ) {
    const u = o(f, t, g),
      T = c(u);
    let R = d.get(T);
    R ? n && R.p(u, a) : ((R = i(T, u)), R.c()),
      O.set(T, (p[g] = R)),
      T in E && C.set(T, Math.abs(g - E[T]));
  }
  const A = new Set(),
    N = new Set();
  function U(u) {
    De(u, 1), u.m(b, r), d.set(u.key, u), (r = u.first), s--;
  }
  for (; l && s; ) {
    const u = p[s - 1],
      T = e[l - 1],
      R = u.key,
      F = T.key;
    u === T
      ? ((r = u.first), l--, s--)
      : O.has(F)
      ? !d.has(R) || A.has(R)
        ? U(u)
        : N.has(F)
        ? l--
        : C.get(R) > C.get(F)
        ? (N.add(R), U(u))
        : (A.add(F), l--)
      : (_(T, d), l--);
  }
  for (; l--; ) {
    const u = e[l];
    O.has(u.key) || _(u, d);
  }
  for (; s; ) U(p[s - 1]);
  return p;
}
function ac(e, a) {
  const c = {},
    n = {},
    f = { $$scope: 1 };
  let t = e.length;
  for (; t--; ) {
    const d = e[t],
      b = a[t];
    if (b) {
      for (const _ in d) _ in b || (n[_] = 1);
      for (const _ in b) f[_] || ((c[_] = b[_]), (f[_] = 1));
      e[t] = b;
    } else for (const _ in d) f[_] = 1;
  }
  for (const d in n) d in c || (c[d] = void 0);
  return c;
}
function cc(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function nc(e, a, c) {
  const n = e.$$.props[a];
  n !== void 0 && ((e.$$.bound[n] = c), c(e.$$.ctx[n]));
}
function fc(e) {
  e && e.c();
}
function dc(e, a) {
  e && e.l(a);
}
function Qe(e, a, c, n) {
  const { fragment: f, after_update: t } = e.$$;
  f && f.m(a, c),
    n ||
      M(() => {
        const d = e.$$.on_mount.map(Ee).filter(y);
        e.$$.on_destroy ? e.$$.on_destroy.push(...d) : S(d),
          (e.$$.on_mount = []);
      }),
    t.forEach(M);
}
function ea(e, a) {
  const c = e.$$;
  c.fragment !== null &&
    (S(c.on_destroy),
    c.fragment && c.fragment.d(a),
    (c.on_destroy = c.fragment = null),
    (c.ctx = []));
}
function aa(e, a) {
  e.$$.dirty[0] === -1 && (G.push(e), Pe(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(a / 31) | 0] |= 1 << a % 31);
}
function tc(e, a, c, n, f, t, d, b = [-1]) {
  const _ = x;
  H(e);
  const i = (e.$$ = {
    fragment: null,
    ctx: [],
    props: t,
    update: L,
    not_equal: f,
    bound: re(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(a.context || (_ ? _.$$.context : [])),
    callbacks: re(),
    dirty: b,
    skip_bound: !1,
    root: a.target || _.$$.root,
  });
  d && d(i.root);
  let r = !1;
  if (
    ((i.ctx = c
      ? c(e, a.props || {}, (o, l, ...s) => {
          const g = s.length ? s[0] : l;
          return (
            i.ctx &&
              f(i.ctx[o], (i.ctx[o] = g)) &&
              (!i.skip_bound && i.bound[o] && i.bound[o](g), r && aa(e, o)),
            l
          );
        })
      : []),
    i.update(),
    (r = !0),
    S(i.before_update),
    (i.fragment = n ? n(i.ctx) : !1),
    a.target)
  ) {
    if (a.hydrate) {
      ye();
      const o = Ke(a.target);
      i.fragment && i.fragment.l(o), o.forEach(B);
    } else i.fragment && i.fragment.c();
    a.intro && De(e.$$.fragment),
      Qe(e, a.target, a.anchor, a.customElement),
      Ue(),
      Ge();
  }
  H(_);
}
class bc {
  $destroy() {
    ea(this, 1), (this.$destroy = L);
  }
  $on(a, c) {
    if (!y(c)) return L;
    const n = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return (
      n.push(c),
      () => {
        const f = n.indexOf(c);
        f !== -1 && n.splice(f, 1);
      }
    );
  }
  $set(a) {
    this.$$set &&
      !Me(a) &&
      ((this.$$.skip_bound = !0), this.$$set(a), (this.$$.skip_bound = !1));
  }
}
const ca = `${h.STATIC_URL}/s/home`,
  _c = `${h.STATIC_URL}/s/trade/spot/notice-img.png`,
  ee = {
    LOGO_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_DARK_TR: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_CONTRACT_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_CONTRACT_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    GRID_LIGHT: "/menu/gird-dark.svg",
    GRID_DARK: "/menu/grid-light.svg",
    PC_HOME_BANNER: "/pc/banner_v3.png",
    PC_HOME_BANNER_IN: "/pc/banner_introduce.png",
    PC_HOME_BANNER_MASK: "/pc/banner_mask.png",
    PC_HOME_ICON_1: "/pc/sy.png",
    PC_HOME_ICON_2: "/pc/cu.png",
    PC_HOME_ICON_3: "/pc/as.png",
    PC_HOME_ICON_4: "/pc/ad.png",
    PC_HOME_GETSTARTED: "/pc/getStarted.png",
    PC_HOME_INVALID: "/pc/invalid.jpg",
    PC_HOME_JACK: "/pc/jack_home.png",
    PC_HOME_LINKEDIN: "/pc/linkedin.png",
    PC_HOME_TWITTER: "/pc/twitter.png",
    PC_HOME_TELEGRAM: "/pc/telegram.png",
    PC_ABOUT_BUILDING: "/pc/building.png",
    PC_ABOUT_ICON_EMAIL: "/pc/icon-email.png",
    PC_ABOUT_FOOT_T: "/pc/foot_t.png",
    PC_ABOUT_IMG_1: "/pc/img02.png",
    PC_ABOUT_IMG_2: "/pc/img03.png",
    PC_ABOUT_YANG: "/pc/yang.png",
    PC_ABOUT_GIULIA: "/pc/paladini.png",
    PC_ABOUT_FEDERICO: "/pc/federico.png",
    PC_FOOTER_FACEBOOK: "/pc/facebook.png",
    PC_FOOTER_TWITTER: "/pc/twitter.png",
    PC_FOOTER_TELEGRAM: "/pc/telegram.png",
    PC_FOOTER_YOUTUBE: "/pc/youtube.png",
    PC_BONUS_BANNER: "/pc/banner_bonus_v2.png",
    PC_BONUS_BANNER_MASK: "/pc/bonus_left_mask.png",
    PC_BONUS_ICON: "/pc/icon.png",
    PC_BONUS_BG: "/pc/bonus_bg.png",
    PC_BONUS_GIRL: "/pc/bonus_girl.png",
    PC_BONUS_NEWPIC: "/pc/bonus_newPic.png",
    MOBILE_HOME_MBANNER: "/mobile/mbanner_v1.png",
    MOBILE_HOME_ICON_1: "/mobile/sy.png",
    MOBILE_HOME_ICON_2: "/mobile/cu.png",
    MOBILE_HOME_ICON_3: "/mobile/as.png",
    MOBILE_HOME_ICON_4: "/mobile/ad.png",
    MOBILE_HOME_GETSTARTED: "/mobile/getStarted.png",
    MOBILE_HOME_MISSION: "/mobile/img01.png",
    MOBILE_HOME_PRODUCT: "/mobile/img05.png",
    MOBILE_HOME_LINKEDIN: "/mobile/linkedin.png",
    MOBILE_HOME_TWITTER: "/mobile/twitter.png",
    MOBILE_HOME_TELEGRAM: "/mobile/telegram.png",
    MOBILE_ABOUT_CLOSEURL: "/mobile/invalid-name2.svg",
    MOBILE_ABOUT_ISCLOSEURL: "/mobile/invalid-name.svg",
    MOBILE_ABOUT_CONTACT: "/mobile/icon-email.png",
    MOBILE_ABOUT_MAIL: "/mobile/mail.png",
    MOBILE_ABOUT_BRANDSTORY: "/mobile/img08_v1.png",
    MOBILE_HOME_INVALID: "/mobile/invalid.png",
    MOBILE_BONUS_BANNER: "/mobile/banner_bonus_mobile_v1.png",
    PC_ALL_STAR_BANNER: "/allstar/banner_right.png",
    PC_ALL_STAR_BUSINESS: "/allstar/business.png",
    PC_ALL_STAR_COMPUTER: "/allstar/computer.png",
    PC_ALL_STAR_DOT: "/allstar/dot.png",
    PC_ALL_STAR_GROW_1: "/allstar/grow_1.png",
    PC_ALL_STAR_GROW_2: "/allstar/grow_2.png",
    PC_ALL_STAR_GROW_3: "/allstar/grow_3.png",
    PC_ALL_STAR_GROW_4: "/allstar/grow_4.png",
    PC_ALL_STAR_ICON_1: "/allstar/icon_1.svg",
    PC_ALL_STAR_ICON_2: "/allstar/icon_2.svg",
    PC_ALL_STAR_ICON_3: "/allstar/icon_3.svg",
    PC_ALL_STAR_ICON_4: "/allstar/icon_4.svg",
    PC_ALL_STAR_ICON_98: "/allstar/icon_98.svg",
    PC_ALL_STAR_ICON_BLUE: "/allstar/icon_blue.svg",
    PC_ALL_STAR_ICON_LEFT: "/allstar/icon_left.svg",
    PC_ALL_STAR_ICON_LOGO: "/logo/logo-icon-dark.svg",
    PC_ALL_STAR_ICON_TYX: "/allstar/icon_tyx.png",
    PC_ALL_STAR_ICON_YOU: "/allstar/icon_you.svg",
    PC_ALL_STAR_JOIN_LEFT: "/allstar/join_left_v1.png",
    PC_ALL_STAR_JOIN_RIGHT: "/allstar/join_right_v1.png",
    PC_ALL_STAR_JT_LEFT: "/allstar/jtleft.svg",
    PC_ALL_STAR_JT_RIGHT: "/allstar/jtright.svg",
    PC_ALL_STAR_M_JOIN: "/allstar/mJoin.png",
    APP_STORE: "/download/app-store.png",
    GOOGLE_PLAY: "/download/google-play.png",
    APP_DOWNLOAD_QR_CODE: "/download/qrcode.png",
    BUY_CRYPTO_NEW: "/pc/new.svg",
    MARKET_NO_DATA: "/buy-crypto/no-data.png",
    H5_MASK: "/3.0/mask.png",
    CRYPTO_TRADING_HOT: "/war/hot-v3.svg",
    APPLE_PAY: "/buy-crypto/apple-pay.png",
    BANK: "/buy-crypto/bank.png",
    DEBIT_CARD: "/buy-crypto/debit-card.png",
    BUY_CRYPTO_DOWNLOAD: "/buy-crypto/phemex-buy-crypto.jpg",
    FEEDBACK_ADD: "/account/feedback/add.svg",
    WARING: "/war/waring.png",
    WELCOME_CURRENCY: "/earn/currency.png",
    EARN_ORANGE: "/earn/earn-orange.svg",
    EARN_NEW: "/earn/earn-new.svg",
    EARN_NEW_2: "/earn/earn-new-2.svg",
    REGISTER_LANDING_PAGE_BANNER: "/register-landing-page/banner-bg.jpg",
    REGISTER_LANDING_PAGE_ADVANCED: "/register-landing-page/advanced.png",
    REGISTER_LANDING_PAGE_BITFINEX: "/register-landing-page/bitfinex.png",
    REGISTER_LANDING_PAGE_BITMEX: "/register-landing-page/bitmex.png",
    REGISTER_LANDING_PAGE_BONUS: "/register-landing-page/bonus.png",
    REGISTER_LANDING_PAGE_CARD_ICON: "/register-landing-page/card-icon.png",
    REGISTER_LANDING_PAGE_COINDESK: "/register-landing-page/coindesk-v1.png",
    REGISTER_LANDING_PAGE_COINTELEGRAPHY:
      "/register-landing-page/cointelegraphy.png",
    REGISTER_LANDING_PAGE_FEE_BG: "/register-landing-page/fee-bg.png",
    REGISTER_LANDING_PAGE_HIGH_PERFORMANCE:
      "/register-landing-page/high-performance.png",
    REGISTER_LANDING_PAGE_KYC: "/register-landing-page/kyc.png",
    REGISTER_LANDING_PAGE_REUTERS: "/register-landing-page/reuters.png",
    REGISTER_LANDING_PAGE_SECURITY: "/register-landing-page/security.png",
    REGISTER_LANDING_PAGE_SUPPORT: "/register-landing-page/support.png",
    REGISTER_LANDING_PAGE_TRADE_ICON: "/register-landing-page/trade-icon.png",
    REGISTER_LANDING_PAGE_TRIAL: "/register-landing-page/trial.png",
    REGISTER_LANDING_PAGE_EMAIL_GIF: "/register-landing-page/email-v1.gif",
    KING: "/big-client/king.png",
    KING_WATERMARK: "/big-client/king-bg.png",
    TESLA_MB_BANANA_BG: "/register-landing-page/tesla-mb-banner-v3.png",
    TESLA_PC_BANANA_BG: "/register-landing-page/tesla-banner-bg-v3.png",
    CONTRACT_WHITE: "/earn/contract-white.png",
    CONTRACT_GREY: "/earn/contract-grey.png",
    INVESTMENT_WHITE: "/earn/investment-white.png",
    INVESTMENT_GREY: "/earn/investment-grey.png",
    SPOT_WHITE: "/earn/spot-white.png",
    SPOT_GREY: "/earn/spot-grey.png",
    RECOMMEND: "/ja-image/recommend.png",
    DEPOSIT_IMG: "/bonus/deposit-img.png",
    DEPOSIT_BONUS: "/assets/60-bonus.png",
    DEPOSIT_BG: "/bonus/deposit-bg.png",
    MENU: "/ja-image/menu.svg",
    SHARE: "/account/invite-friends/share_v1.png",
    BIRTHDAY: "/3.0/birthday-v2.png",
    HOT: "/2.0/hot.png",
    MARKET_HOT: "/market/market-hot.png",
    TOP_GAINERS: "/market/top-gainers.png",
    NEW_LISTING: "/market/new-listing.png",
  };
Object.keys(ee).forEach((e) => (ee[e] = ee[e].startsWith("https://") ? ee[e] : [ca, ee[e]].join("")));
const ic = `${h.STATIC_URL}/s/web/assets/`,
  sc = `${h.STATIC_URL}/s/web/fiat/`,
  na = `${h.STATIC_URL}/pubimg/`,
  w = {
    LOGO_PULSE_LIGHT:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_PULSE_DARK:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    EMPTY:
      "f922b25bf0e8d266efb9884d6430f81ed41d0ea0373557495c8ca38a8c0fc685.png",
    SHARE:
      "a79d194585260943e3f7c4ab96333744bed40d987ebe6357f5773a4cbbedfef5.png",
    SEVENTY_BONUS:
      "393e424e7d1a0ceef8f8c49216357aa8068f66efa7e0dc1b9bfb51c348eb305a.png",
    SEVENTY_BONUS_10:
      "2cbdd20d17e10fd41180f82b7ecd7798676ab6517d1781ba4989f96f1540c8ce.png",
    SEVENTY_BONUS_2000:
      "189dd31245315c85f3e3d298b5eec1e99df3587544e7845813187e76c7a3ad67.png",
    LY_BANNER_BACKGROUND:
      "ab7a429eae47f4cf1014487e84d74906622504f3c6658b573024682051448246.jpg",
    LY_BANNER_M_BACKGROUND:
      "6c9db72c53c6de4b42d60a0de16294dc38e8ae4156e488e21cfe901255cc027c.jpg",
    EARN_BANNER:
      "e6a2a0a4ae8754fef88f30ac49a74cc8a55bf8f945b8ed108ef640d9c3b8bede.png",
    HOT_EARN_TAG:
      "97800cec7fd3880e3403a7872fb9d663bcb93fdb6573ad5c12211a31ee6efb10.png",
    NEW_EARN_TAG:
      "7fa244f39a41d2422c0cbd4998b2da939b7a02c5599160a57b82f36293f22711.png",
    CHECKED:
      "905624acb394f4867b87134f960179c5fba5160d8cbfbd02cdf3d1ac80a1fed8.png",
    NO_DATA_IMG:
      "ea9a54ed742a1a4398fdc8cef348511dce7d854984b75ca08a48500a1c1c0605.png",
    BUY_CRYPTO_TITLE:
      "8d24e84d4ad038db3110e13cce3068abced5139f26ada19f8fad39bf8bd97352.png",
    BUY_CRYPTO_STEP_1:
      "929f18dd165569ac7990089f4c855603a325e5d6bc3d74f315306d00b2a37aa7.png",
    BUY_CRYPTO_STEP_2:
      "4df5b4cd3cf44f85e5c066c6098bc01d2f3d191734622378c5865edbe9ff0a17.png",
    BUY_CRYPTO_STEP_3:
      "b69c4b09f55370ea73dfca264574ac2301fbe30bcb9e00c55f01e98aa00eae40.png",
    GIFT: "c556cfd09127838a5507b6891f641c09e9e1c1ff94d3f09dc62377ac2b28c09e.png",
    HUNDREDX:
      "b6586ed7d479774aba30e96fc84e5482b9841a3ceab85dba4b33051714409839.png",
    DOWNLOAD_ICON:
      "7b685e1d84e6de0959c883e2fedf1bcb22af3524118de8e7d9c7033750f223c9.png",
    ASSETS_EARN_LINK:
      "114cfb62410bd305ec0884167a1c574200ca73f963d180498fc447fb618a06b2.png",
    PREMIUM_LINK:
      "5125bfafe0b574948090fd83d2a4956fc0365ae5a6b987a8bf7293802d694a98.png",
    LEARN_AND_EARN:
      "ad45da51018e0a8225cf6b54cb09046be14eb67f8e76c2e10d576b0aa3e0d66d.png",
    ADVANTAGE_BG:
      "b6d88b6ff18fd43b9f14344d850e85baea325077a164025b69a755af4cbb9dde.png",
    FOOTER_ICON:
      "44b484e8af8463687ab1f2e2d82ac8b8d585fca001f6240ac527219531c9ec87.png",
    MARKET_BG:
      "e0596956e4006bbd13633496391779a395ce7b451235bf7887dc172175fbc641.png",
    BANNER_BG:
      "efb9abcb261759be868cdbb8ffc4c21cccc0fd9e8d963d755d0324d5fb648347.png",
    BANNER_KEVIN:
      "25bdeddad1c006813a090c93178c7975baad329fd3c14a9bb1610d6a7a39529d.png",
    BANNER_KEVIN_LOGIN:
      "b2dbdd2132974a73fb240b8322b1763739b328a79fadabc1fe28482a62336a15.png",
    BONUS:
      "476075d97dbd718f1361a9a0d9345ad320e7b9766323b6ff57841d8fec1b3526.png",
    CREDIT_CARD:
      "dc0c95c291a35ca47f767e5d3e3322b4caa11d035fae90aeef2879841e1b116f.png",
    CREDIT_DEBIT_CARDS:
      "925a281e64e62a543f0b4dfbfbd3aee4d1b2b6b54119cbed9223cc689c4bc401.png",
    OTC: "ff763f30963144efea49f64bb97a6184ce0b26da0ae5ea6aff2101b53dca7978.png",
    BUY_CRYPTO_DEPOSIT:
      "168c24f6c27429bd8e57b11c6aa2dd891669964c866e086f326c71cac71dd761.png",
    SPOT_TRADING:
      "f821c3543d0ee1dd31d53668d0654eb08a34afa881cc1aa3fe2fb4a64e23db8e.png",
    CONTRACT_TRADING:
      "a7781485af8e0ffbb6b69025d8fadd9102c2b37171e4470ab0e07b0e3e80c80e.png",
    CONVERT:
      "881843ab755d4ec18b581e2ba53c1535f97f70aef1a8e8997f829c6e2de9c52f.png",
    LAUNCHPAD:
      "9515716d0bf8084e174c2779c201d0d2cc6931bea0ca78b07da96e645e23092c.png",
    EARN_HOME:
      "716c8088a9894cefd1a75cb9276e688c633025185ffbac7ca876ded08a94535f.png",
    EARN: "ef03ebf89d992ae89b34c3250e74d10bd935b8bbf0ab3fd76fc47148bd377251.png",
    ACADEMY:
      "bb4b602577046ce4beb10c9ab8c7f86fbd4db568843a5753d21f88c9cf005d4b.png",
    WELCOME_BONUS:
      "f4dfc668514c50d7aed020089021012cf535bb16bdf060dc0fc0ef8b09ee8d6f.png",
    HIGH_PERFORMANCE:
      "e6590736c8de5378318550018d6f1ad9a165439c215c6135bd474e2d856ff235.png",
    COMMON_BANNER_BG:
      "317dc2b0b0584d7088f6e92e2ed5a42652d3e2f21b4182572cf0fbe6956f2781.png",
    PREMIUM:
      "998dc3a8a2a392eda453f6aca4e2bebc8c6b37a58b7f7773c7251bd7f85a963d.png",
    FULL_START:
      "baa28936eddfba506f91c265db9c7e0ea55147a5c86d7fa7f0c7e6f3bb59d503.png",
    START:
      "ac9dd0816818831540ffc5457a85c60da6380ee9d6ef53a1e07ff55c641f9a1c.png",
    BANNER:
      "8519b1775cd897458857858de0d523b92a26f6e7f0544c7d49580cbe42795966.jpg",
    BG_1: "7a90fc48b510fac2271bd5b707237ee87cc7bcb85083f8ef30a7660be5d316f3.png",
    BG_2: "5b44f9a85c1050c820bdb93824d6b3eeb98131279443e27908b915475e730718.png",
    BG_3: "715796b4ddbaea9a51040fa7f0f6180a11afa96cc7879951bb3eac19f657f599.png",
    CONNECT_ICON:
      "a63a2289ed9b384c448746a356fea0ea250ecb6dbedaf07437fde95b87be290b.png",
    CONNECT_ICON_TOP:
      "04b8e62a3b7f1c7a4c835201e9b8b0cbe087de996a22d52775c0f42ba1bf21a5.png",
    TRANSFER_ARROW:
      "7e00f9e03fc388344e9b752c3924fff46918bb87e0369588ec68f354c95320a4.png",
    TRANSFER_ICON_ARROW:
      "f648c19c20c2d530b20e65f9e22e59e06f6648765018fa2754492203c093cd96.png",
    GOOGLE_ICON:
      "96b63ebadef061f01f52db5c462b508c72900284538206b4e365afa08f122936.png",
    KYC_ICON:
      "5a0611e640312ce79a3bd544a05732cc5adcac1f0c0afc004edde2657fb56618.png",
    ERROR_ICON:
      "2093d21b4b42c34ed28dcf870d16957da86b0184322dfcd7236e968cd0112d25.png",
    SUCCESS_ICON:
      "f66376910963f00f1fe16d459585f3a8f2864880716a885320c9df7370927997.png",
    FAILED_ICON:
      "6235556bca0c1adb40c16c0fc796da4698f36d997b7c9a4241687b37e7f7134a.png",
    WARING:
      "1efd8dd37b128e853ad9bde23f485c6fad54689d09a8b45abb86ec0b2cb54ecc.png",
    FAIL: "5be86c2ca84bb97e79779c94d2b3fd79cf966571ee5d8fa96c1f93a1b35cf179.png",
    SUCCESS:
      "8bdcdef82d04eb6d725280d639d6734cde53b588382b301a785c9403ebdedcb5.png",
    FAILED_GREEN:
      "3a33026a9063fd0a3d2ab56cdcc3edf247773440ab2f7f6b77feca75f62d8fc8.png",
    SUCCESS_GREEN:
      "07f30c1d62048f3ba4f5d6feacca2db80631247814a17533ba455dbbcdc21659.png",
    PROGRESS_GREEN:
      "bb63699ced3e14e625054e90bf45d290d49313361e0219ed690743304a41d963.png",
    TR_GUIDE:
      "c95b23a244be1e9d559534b6bb58d4bf83273ec3564a406f84292b416e6b77f6.png",
    GIFT_BONUS:
      "53724bc30eec04e147e0f4565a54e61a066d16792a7fb71a194a0df5967b1e6d.png",
    BUY_CRYPTO_ZERO_FEE:
      "2b8f43a1054b7b8aac121b5d84348551b6f50139b6bc420dbe47098d09d38ea0.png",
    BUY_CRYPTO_ZERO_FEE2:
      "6af9a97de7155bd1cd64608b2220d2eed7ee59d8d9ebdb0d4670b8b3dc5fd4c5.png",
    BUY_CRYPTO_ZERO_FEE_DEPOSIT:
      "f2286d1c0242d8ddc8a93dd1c883229d140bba1a4935bb9cf814977adac96db8.png",
    BUY_CRYPTO_ZERO_FEE_HEADER:
      "c2f7ea976a543c7732295f655821f7820a8606918418be4d1c28d083046b8dca.png",
    APP_PHONE:
      "c8bf803a018c757b62a9b191fa1596f2b7efa32e6d6392fc46cfa6073f9c1eae.png",
    DEPOSIT_TIP:
      "c51a7518d85f34fa94274e5b87ef23939c887500f8c46d5af2c7e31f649b5143.png",
    APP_STROE:
      "5923004d4a9167409cd5ad1f322999135b097e07f09c3d991469c79e9ad21423.png",
    GOOGLE_PLAY:
      "97e84362b8ae1a8d4c003677702cff087158521a2fef47345a4b82202d1ae754.png",
    TRADE:
      "a9ec7eaf859b6175f5adf1fd3b46cb72484ee289a8968af4984cb0536388275c.png",
    CODE_URL:
      "b1f243393e0aafd6456d1d9e1909ae3d5ca93cb22f11e0c0fae454e014618d8f.png",
    SPOT_CONTRACT:
      "e4a5302dc001aa8c69c6cb67f5c012f4687c4d53fc2880b04296728fa7f8a3b4.png",
    PROFESSIONAL_TRADING:
      "88a3a50713e7b5e20dfa8c071674ad4397d953063b48d75246355396bc3cf111.png",
    CODE_WHITE:
      "954b28e383148438caea88cd2334b51d55ad4c54331fbd40d07acf6a8900a27c.png",
    APP_ICON:
      "a0fcc04928bb15b8bb911ad639eccbd31e7ed5c8062536d623160baafbe56c0c.png",
    GOOGLES_ICON:
      "516e9a6ec92aebc225aa43feb0bbd17654f34243f386c7101ea4bbbed8b7f5c0.png",
    ZERO_FEE:
      "ce49f8816e1e7c194b84b626c9b78eb562bad99230d8f726fbfd236d99238a25.png",
    MAXI_NUM:
      "672b3de541de477fb622f43454bedd86536f69f561309224aac512a06e94e0da.png",
    PROFESSION:
      "1049ee39fa928b029023c8d81a7fc2225d9f2f733c4731af7832f02c9869fc51.png",
    MULTIPLE:
      "f33bfd4570dc7467314afeb9514825416c6efe8368fcf59252eb2f71e37d8f40.png",
    BEGINNER:
      "fac72d11b2b79d85aaf5a0cf298a6ce755ffede14e345cfaefb421f2ddc758e1.png",
    ADVANCED:
      "434da4e41b80631ac5f1aad1f5ed7a1062a113154c1a04e3c8fdf32108ad609e.png",
    SECURITY:
      "479d442091b3e3cd726df63fd46742ca9fcf2d9c9e07ca9e3eac5e199eefd32e.png",
    SUPPORT:
      "139b4f94ff857369dcade8b61f7b7284156faa2a478827069bff952ad3d74e12.png",
    TRADE_APP:
      "6aff0353ea4b5b1e0b338a2991ff1ea34fccd7bd3f965196783d83c1bf7df803.png",
    HOT: "data/ee7a5587-51d8-40e5-bd20-a71fdecaa9f1.png",
    LOGO_LIGHT:
      "85b07d05756a81e31f13766ec4e0bcf53f7577940725df3ab882326d1bd5a3d0.png",
    SUCCESS_NEW:
      "e14122adc3186ab51e7a8b408ce523bfc393694e6b95a148f17d583370dc7636.png",
    CAUTION_ICON_TIP:
      "53c7df660ebc9fab73430055140544c108fd8b1de73f7e40d7f02e56c643f210.png",
    CALCULATOR_FAB:
      "63f33c6868bb1f079748b36780b561fb0843eaae1aa19f4e8bc77aed8431e764.png",
    TRUSTED:
      "06c600874e0fd1e9298992f13d562d78495356e6b33f51f62e051791bd489e67.png",
    USERFRIENDLY:
      "52678b3b783d0c778641f06c69efb3afb2cd7fb9e64fe5ef52448576b5237765.png",
    MONITOR:
      "63d391ac3a84e7e4822463cb6d4600ee2e9b3742b75513ad429b36e8541b0f91.png",
    GOLD: "dc6a11f501341f035c0e4ff536a39eda01ecf664ef3a3f443c63f2d2bd6a4d35.png",
    BONUT:
      "e04fdd32d977ab2a10c8cf339426bbd0e44324e6bcd664044cada4cb4eb6ba78.png",
    REAL_TIME:
      "f8d4ac05a67fabd74733674585b1f7ba6198a3b69dab132ee0d0c884e717a81e.png",
    CONSTANT:
      "fbc9b639dd3912d5f93134477e0bf7eee01a17de7f8037fa67e15c8f240dc2da.png",
    CUSTOMIZABLE:
      "38024f2a8b203d325f70b3d724f69f6a06c62467acf5fc9cd6d130b7262ca86c.png",
    ACCURATE:
      "f2f90b1d1fa13ad570cdacbf394e4ae1823a661adc148a33fec0a7c08c6e41cc.png",
    APP_STORE_HOME:
      "9daf0c9a1965375cda5bbabe4b89cc19f6ce8176b265539c288a6dd679f9c0ac.png",
    GOOGLE_PLAY_HOME:
      "93907b0d27f50e25a01e44588edcc658abca262fb8f96bf33e7bc6bb5c91d9d0.png",
    GET_PAID:
      "bd30ef452c1e3f5e20a0a882e873c79150225d49eb5dbc6071bf3d2055f5e11e.png",
    CHECK_ALL:
      "da73f6be8732f1226af681d2e99f57e4c2b3d259646a52f8c63a547fbce49e13.png",
    BUY_BG_LEFT:
      "49033d4d04948643990b40705971e0e55ca47009899bdc85f044867363e81464.png",
    BUY_BG_RIGHT:
      "1f1a8f65c6bccfd6350b4cddc03f3c10c8f61ff886ef8848e8b8cd0f78407cac.png",
    BUY_BG:
      "3539da1bf6315ed6c7532ff0f62e51a7652110d0fa79fd5b57207d3e7b3abda1.png",
    MAGNIFIER:
      "402075b91dc41aa57f51b9a27d5c15d4179090a5ca6d547a291f505f014d15ff.png",
    CRYPTO_CONVERTER:
      "6dccd1337341520c6ef67abc81ef1046cb33ce07c5d9a6469dd22fd011f43e21.png",
    SELL: "ca7f60281bae6994bfdd27c658ca70632315f6cfc26ae735e1e873c855bbe704.png",
    OTC_TRADING:
      "daccf7a4700cef3d602d75872d75dea8622b1633604cf717f6b145e4a1699f68.png",
    BUY_BG_MOBILE:
      "bf5a48bb8c6a9100a1220f8008166eec55613d2e4414572fc35bd00d4f7289c8.png",
    DOWNLOAD:
      "ad608a63bc713d0ee48e1f17a97f97176405e12e89c6c262f8e38435dbc72bfd.png",
    COMING_SOON:
      "a6823bd0ac6d282f9c7b7b32102ea5f85d2540c1e6a2c861c0b07aeb4e4516e8.png",
    LEVEL_BADGE_L0:
      "842a95c107d6d3f15537418edd1aa5b011cb3bd302b82fd2705d965c91c8deba.png",
    LEVEL_BADGE_L1:
      "23b61dcfb16f082168582ff6878c16b2138c793e2ebdbe38e994c1e664fcfc46.png",
    LEVEL_BADGE_L2:
      "0ba0c35a26cbf0940feefb6e25ab18c50c8df36dffb73be15ee22f62c3a00cd0.png",
    LEVEL_BADGE_L3:
      "abd374ddc850de6ac5fe2c5f866fdf49458d88992338563415fdfab4e9ba7ec5.png",
    LEVEL_BADGE_L4:
      "a5e03501cd3d8b6cf7f2320ca5ce3a3fec10b797eb1e7e2ea54201e6e03d6c59.png",
    LEVEL_BADGE_L5:
      "f1c430d18c0fcae7d9a38e3cac13421055b5e77187227dd64c09295c7cf3563a.png",
    LEVEL_BADGE_L6:
      "9910fb156b5ba2a873d1f7e0de2c8c8c36ced1ff8bbafb7f1247e26367b57e58.png",
    LEVEL_BADGE_L7:
      "3e339b8a749c70a21d9065a1e582f3940018fff9e8105d41cde8a560c64fc76a.png",
    LEVEL_BADGE_L8:
      "890a576eddabe3f4cfec4041d3c160af600a8681cb6093ceb7a5b1536970fbe2.png",
    LEVEL_BADGE_L9:
      "9c0c97a97b22dad820d8a46abd1b4e5e285aa88de268e7be0d2670aa082a610e.png",
    LEVEL_BADGE_L10:
      "ba3c2dc98165e7c75881929d1b542f0314c08eb3520556c20ee70bbe23649f7d.png",
    OG_ABOUT_US:
      "f11ab0559d0eb5dd1533579716e77173b5a214d14e0e3ec3e3e5d93b00a61942.jpg",
    OG_ALL_STAR:
      "3f74b10af865ac4deb60a0aea5be2552e13989d8c3562c62f57fe87e839df878.png",
    OG_CRYTO_CONVERTER:
      "e4a5775708eefa5999438df31b575619c9fcaf50cbc77ccc3f13cbbe23be40d3.jpg",
    OG_EARN_CRYPTO:
      "b77ae2d6fa215b301c075e4b0128b9420c09bb0293cc26ae994bbfeb1bbfb769.png",
    OG_LEARN_CRYTO:
      "6f26e6ce13c73a4a73ba144be173a939b98fcdf47acfccf181e23ddb4c671657.jpg",
    OG_SECURITY:
      "e42ddb9cdba613c4794d659df50088e6c25fe9448f5fa870768d1d9418de2cd8.jpg",
    OG_WELCOME:
      "7b8d20b60a5bf97a7ca8ac1d39fc5f1b51c09929a632edaffd2110bddb0c4d48.jpg",
    OG_MARKETS:
      "6aca0bdc3093a89f9d43831e8f55323b1c4f2d53b6e64a4c3b0f5e0c0ee7e437.jpg",
    KYC_CERTIFICATION:
      "6ae1dbc14346e22b18c42dc11fc3c84bd9508ec49896e09aadd65a4728af4709.png",
    GOOGLE_VERIFY:
      "60b8b5093c3731e9abc40e6bc4ba21b750a5325fca413793122a8e0ebbcdbd3d.png",
    NO_DATA:
      "4c9cd9f7f3d96689b276dc710ea52efd5212b3a4277de24820853bd0b0d147c0.png",
    P2P_MARKER_PLACE_ICON:
      "9c3908b994a609a5e0d8437d0e357ad2a3331a47d6b6b1aeabffa48542665d02.png",
    P2P_ORDER_PROCESSING_COUNTDOWN:
      "a2ee9a6d3cd1b76441dea8d934086869fd9bdc42e9652768d065f913ddd665e5.png",
    NEW_NO_DATA:
      "d840c36dbe3ad794c5c3625fe5d18cc6af9f252118cadb1045e906d68490bc6a.png",
    OG_NORMAL:
      "ba6e212389adabcf0c72252f9c61fb398fe0df1b5030efb0f022a8a665162bde.jpg",
    OG_NORMAL_JP:
      "f4c6cbe0a417908d24e5fb759ac1d4911fcf72f57a7b4caddd18b47fc30988f7.png",
    OG_BUY_CRYPTO:
      "6aca0bdc3093a89f9d43831e8f55323b1c4f2d53b6e64a4c3b0f5e0c0ee7e437.jpg",
    P2P_MARKERPLACE_ICON:
      "9c3908b994a609a5e0d8437d0e357ad2a3331a47d6b6b1aeabffa48542665d02.png",
    WaringTriangleBlue:
      "0fe5f960188309ec6c2517f7e31cfa3eecd5594a07ddc7ef74558fd4484fc372.png",
    ACCURATE_LEADER:
      "09fe2fc2eab962a78505ad96611a384b6b72c5b7a814e72e68e4342d29a71e9f.png",
    ACCURATE_GLASS:
      "75010e047819e560a2073e4863823783bd9806b47ddfec1a48d4bc6294784d97.png",
    ACCURATE_GRAND:
      "042bf4dd845e384c175840e29bb4ecc90ea96fbed45da23d21a026ec490e566f.png",
    ACCURATE_FIRST:
      "7dbcc279c70ac115f3923372b3c6cbe2fd27ab20aa5a8d4d18ad9852b303de89.png",
    ACCURATE_SECOND:
      "ef926ebf43486eec95aca9c4bfa411b79cc55314e5bfb4a27c57cf9347c9f634.png",
    ACCURATE_FIRST_ICON:
      "7550ade9f8b23650ee3f1be8de99ee0b0ae5404788ee449a74721e975a9beb86.png",
    ACCURATE_SECOND_ICON:
      "de38a3110da028eba363a8bc4ead4c7e5592749737abfcb83e160d4d7de1a18b.png",
    RECOMMEND:
      "34a04ad2bd34cc58b10dcaee38325e62b7105c4c0988a61b00373ef4f0a4d92e.png",
    RECENT:
      "1efec3eb1e945868fb7283e2f9b9b090cc1a7b6cc77a6ae5d139d9c74320288c.png",
    P2P_FEEDBACK_EDIT:
      "166df18a7398cfbac9bb240ee5d70a7061ac6bf2abdb4bb4921c2cc40f9f1764.png",
    P2P_FEEDBACK_GOOD:
      "ee5175fe025c8fa5eb36138b3686a4bf15bc542bb72d6bd97362d6280ba2bdf9.png",
    P2P_FEEDBACK_BAD:
      "86c0396ee3e89df86493dbe7cbf06411f58ee31c3fd1aaea433fd5e46f090140.png",
    P2P_FEEDBACK_GOOD_NORMAL:
      "5aa97381d0c6905ec640cc5ee78ee34a88af57267f672ade7be7352dbf48e889.png",
    P2P_FEEDBACK_BAD_NORMAL:
      "f8c3ee0490eaab4a5adecb68466e290fe4b68fac1f959dabab4d1edb1cd6d38e.png",
    P2P_APPEAL_CUSTOMER_SERVICE:
      "48314d7a1e98e7f352718b86562598843903acb916d00b0398c49a1e3b4cb913.png",
    P2P_IM_ATTACHMENT:
      "acfc017c6d7cd43be2f75ae6cb98ea05ed79ff4c520ebe395ed140deb1e1223e.png",
    P2P_IM_ATTACHMENT_HOVER:
      "445e066db5ae9c5a9e953a0b651e04fd241b6003b33f27b72d465dcf35057d46.png",
    P2P_IM_SEND:
      "3377887e18864107101df1aa7f0f23e562a0e7556b1de52f1f234c9c6b93ff79.png",
    P2P_IM_SEND_HOVER:
      "0fa2b36f8d671e4b1a53bacc690cc9c901f3623829ad61f4d3634ebd486059df.png",
    P2P_IM_FILE:
      "206398b8c6500ddd755a517f1175ced17b250c7cbb872ac00f4aa4f5ae3c5321.png",
    P2P_IM_BEEN_SENT:
      "3230198257c641d782754e89331150d0957038d9f9d2455321b88eff81ec541c.png",
    P2P_DEFAULT_FILE:
      "ff585d36438bdfd314c51ea6bd4a9d8aa980bedde41e079299646acfacfd9e2d.png",
    P2P_BANNER:
      "4683ecd5ed1edb813ed6fb076771400298c546249bd0436922fffc1afe18ad43.png",
    P2P_BANNER_ACTIVE1:
      "67147e230dd413cdb905ae7dc558323bfa67dc45f58343b2ae3a183af80367e4.png",
    COPY_LIST_BANNER_PART:
      "2b178cd01a121ea03f02dc19eaf8d34dce86ad24c7184050760df862b582da08.png",
    NO_ATTENTION_YET:
      "9a95ad4c83e7fd8f44a399345174478c81a3e01331d09743f4e7d19d949cb7da.png",
    CONTRACT_TRADE:
      "4d31778889d32958af0f9b2b115c237f19b6735f3d7fef63faf543037c466cd6.svg",
    COPY_TRADE:
      "e4286b45863c4d6c2953fb200bd15cb97811e21d98c1e3e4c12b6c3c91de98b4.svg",
    CLOSE_ICON:
      "da60efc0d41cf0503665ea4a34cab9d151d4bc88f7185f34509d3ef7604ebd2a.png",
    GOTO_ARROW:
      "f20d74cb525be1407dc6f3b67702f9029ca4ac176eb1a3feb0b97d420b48a5e4.png",
    BUY_CRYPTO_DOWNLOAD_JA:
      "b64add0e6bb6f04535f3080494bc44c5e52f3d1809fedfdaf382802ecd7d3c49.jpg",
    COPY_TRADING_NOTICE:
      "47b81b7a9640e59a7f9ff8ce9590d131659f11ea2375ad56b184d66bb84af944.png",
    KOL_BANNER:
      "84ed63b0f372b21a5efeb842819c956efe1349fb119771bf1ab0274ff7264618.png",
    KOL_HOME_BG:
      "d95bbbed2e3df7ef7fa54c47e3147f7bd2d0cd49684427f85aa2d05679949fc4.png",
    HEADER_NEW_ICON:
      "3d41c97379e870bb77c9c3808d6cd4ab241826b0df9e8fb988fb9e7f137b1be0.png",
    CHAT: "c6a4055699d3cf1d4c9e2cae94bcaba44d269ae4b810549cffc9e6c23be8c80e.png",
    USER_GUIDANCE:
      "8924d7630cc8ac4e1c85e8e66ab6e6759c187c2d0e7525a441316448529bdc77.png",
    LINK: "11ae14a8cbdb4181f69f30ed00fea5f53772a6523aab787859ef665dec6f397b.png",
    ARROW:
      "5cc3ba3cbc532535326c22c141fc3c7d33ae641ed20020041d39770d7d25632d.png",
    SCAM_ICON:
      "3234b0e7f79bc3cbdee93cd9b1e3d7f9e2171eebc4101c28ecf3d828a61ecbc3.png",
    BOX_CHECKED:
      "7767e45cc4f650d6204f1fee86cd88bd6dd0fcd9e972c4ed5793d45d5d3659ad.png",
    BOX_UNCHECK:
      "136e84858afd87d4bdaf585558cec463312af75474202bc069761d5523f3d6a0.png",
    VIDEO:
      "6ccc802a77cf193e9d26a1e1ebce2342a92221ca24b8cea6f47f6641d78a0023.png",
    PREDICT_ICON:
      "acfbcd1ad0e7e87c82d8e8527ebbbc1a36d9544e4094151aca44d00c90c8246b.png",
    DANGER_ICON:
      "714130c1c44e093df75a169ffadd19251701cb9e80b80a6e240a546f1790fa4e.png",
    NOTICE_ICON:
      "cd8b92f436638532b96caa6f7ad34dff2b1dcb2860bc6b743a5d4f75dc9994f6.png",
    CLOCK_ICON:
      "52520da507c0cbb54eb32745ff377ff0902fe5d8d6bdabe425419f6bf90a5928.png",
    RECOMMEND_GIFT:
      "8f48aea164b034999266cc59b84c9e04ea536ac7baa225663936821e0b6bc8a0.png",
    ARROW_BLUE:
      "5bab57ea3c54bcf1e465b596471b524e415f43f814df3dec17bf4b05bd75f5e9.png",
    ALL_STAR_REFERRAL:
      "b258001327b2053ba29cdf08d2546af17d1c19a4dc752949a57b31decb3a23f6.png",
    SECURITY_ICON:
      "e740429b2da0c8333534d6c78d0689e6abdb404e3c6ce624942b113f5ed03f06.png",
    COINM_PERPETUAL_MENU:
      "bb1e2564aabb7ae0810f4e2a02abfba2e8f0d6ce88a1400ebec5c927eca6ccca.png",
    USDC_PERPETUAL_MENU:
      "394994490bcba826df2f42d07982de7b639ed6ee7f40eacf8d2ec75cbc0c6e76.png",
    WITHDRAWAL_SUCCESS:
      "55e55bd28505778c4f80b0bc8db8ce9de94dd9aac7cff705c3dfaf02b427a98c.png",
    WITHDRAWAL_FAIL:
      "030e5a5c1f33dad19e9ef78bb043d304727b20093b0c78d220125d432bc01091.png",
    PAY_LOGOS:
      "af81cec43f27d24d6f33423b6299ba53985428c46753f78ddd11125f6bd3df0f.png",
    WAIT_ICON:
      "f6d2551bb9152e6e6d89813b15938575e6710457a6fcdf883ce727e242527bb8.png",
    OTC_BANNER:
      "2a5de86d8e8a2835b2c19315c8c0ae2c32f9a42963379c0b52115e8bb391f8ff.png",
    KOL_BACK:
      "66e277891167cac1556bf644baa098e333f24846417b76f0c8e26b8b5f9404cd.png",
    KOL_EDIT:
      "7cf92f26dff0abc57ba0b1ae45fda3d92e0425046b8fd5cb4f97fe9e284f2251.png",
    NEW_SUCCESS:
      "b0ea07600996c5bff938f57a784814fa90a448ea508b11775b13107c09766743.png",
    BTC_ETH:
      "7831bbea72b44f37246b43c63ba6d91911dfea6f992f58d9caf65fb8312f0281.png",
    USER_ICON:
      "c629e3bf7069057d96cdc7e2e3390d4e92c8248dd22fc36c180a90349113832d.png",
    STORE_ICON:
      "3080e726a32fecdf67175fc2a923a4e97d6425b431336ec6dd60618024b220d5.png",
    VIP_MENU:
      "03ce95826ed67df8c47fcc17f9d162a89181ac0fb063c550c586320780dbfa55.png",
    Fire: "data/cfe774d8-cfe8-48dd-b4a5-4b98d4e63850.png",
    MARGIN_TRADE_ICON:
      "0f13a181a5f87d62d620490c276f9a33638c5fb0df6aeece828028296c2c769c.png",
    QUESTION_ICON:
      "342e83bd479113a38e514b9baf3b7eed339d997afcd8fa2c9f995882f4788216.png",
  };
Object.keys(w).forEach(
  (e) => (w[e] = w[e].startsWith("https://") ? w[e] : [na, w[e]].join(""))
);
const K = {
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
  fa = `${h.STATIC_URL}/s/`;
Object.keys(K).forEach((e) => {
  /^http/.test(K[e]) || (K[e] = [fa, K[e]].join(""));
});
const da = `${h.IMG_URL}/v1/`,
  ae = {
    TRADING_BOTS: "dc7ecf3d/trading-bots.png",
    FUTURES_GRID: "697906b2/futures-grid.png",
    SPOT_GRID: "56532aef/futures-grid.png",
    SIGNAL: "dd9f2d46-931a-4496-be09-d978ea3d0cf4/signal-trading-icon.svg",
    MARTINGALE: "e9d61e8b-c3bb-4529-813c-cfef838a0e7e/futures-martingale.svg",
    TAG: "8d091996/tag.png",
    SHARE_BG: "dbf91b70/share-bg.png",
    COPY: "0541141f/copy.png",
    SAVE: "f2e759d5/save.png",
    LOGO_LIGHT: "d4dd5c7b/logo-transparent.png",
    OG: "01eacd71/bots-og.png",
    BOTS_ICON: "9b968b03/bot.png",
    NEWS: "d4f84019/new.png",
    BOTS_ENTRY: "829add93/banner-bot.png",
    FIRST_FRAME: "5c7022b6/first-frame.png",
    BANNER_VIDEO: "ab509b9d/p-v.mp4",
    ETH_BANNER_VIDEO: "b9146ca5/video-bg.png",
    ETH_SUBTRACT: "c1f5b039/subtract.png",
    STANDARD: "524e1f06/0-2x.png",
    VIP_1: "38fb6448/1-2x.png",
    VIP_2: "282625d3/2-2x.png",
    VIP_3: "58212980/3-2x.png",
    VIP_4: "f4f45c60/4-2x.png",
    VIP_5: "3eb98014/5-2x.png",
    VIP_6: "0c0e06e2/pro1-2x.png",
    VIP_7: "88a46410/pro2-2x.png",
    STAR_VIP: "f7d0bfd7/star-2x.png",
    MARGIN_TRADE_ICON: "f310cd8c/magin-trade-3x.png",
    PSP: "8d63c884/psp.png",
    REPORT: "a3a96534-9045-4daa-bbf5-551d927b1f92/report.svg",
    MM_SLIVER: "7fd829a3-6226-442c-acbd-62c5a2b1b3ba/mm-sliver.png",
    MM_GOLD: "7c6a58cb-3287-4eb0-99d6-586f571483c3/mm-gold.png",
    MM_GOLD_1: "f4fa073f-355a-4376-bed7-c3ef5a5629cd/mm-1-2x.png",
    MM_GOLD_2: "c0742a01-3368-4f5a-b59a-7ca5f54996b9/mm-2-2x.png",
    MM_GOLD_3: "c3f79c21-14da-4562-b871-1276ab5aa93a/mm-3-2x.png",
    EMAIL_BG: "0f4a2baa-2763-486b-8b1c-d3663ce5f9d5/email-bg.png",
    BONUS_OG: "20fbce13-a8ae-4a19-8257-d63e0d4db07a/og.png",
    BONUS_ICON: "7d2cdb02-8932-4e6f-b264-964cd36c3411/bonus.gif",
    BONUS_ICON_KYC: "0aad78c2-a788-4298-be3f-2f04dbaa7758/welcome.svg",
    BONUS_ICON_OVERVIEW: "2fa26df5-9cf5-4ac7-8a84-e3053ce67b59/image-27.png",
    NEW: "7fe796c9/new-v1.png",
    DANGER_ICON: "19cf1973-7359-4f12-81c7-3552f6790d09/close.svg",
    SUCCESS_ICON: "b5d2b7e9-9b34-4da5-a34a-2153775d51b2/tick-circle.svg",
    TIP_ICON: "d2658c7c-189e-4824-9038-a409c78875a9/warning-1.svg",
    LOCK_ICON: "1db83def-11c8-4dcd-9b5b-d96d248a8a60/lock.svg",
    TV: "a14807f4-e10b-4de8-b17c-9a94d870141d/tradingview.png",
    ACCOUNT_CONTRACT: "aed0feb4-aca5-4a9b-a58c-d2dea08521e3/contract.svg",
    ACCOUNT_CONTRACT_LOCK: "dfe4b6cf-5088-4d20-957e-933c4a3f8bf7/lock-1.svg",
    ENABLE_WHITELIST_LOCK_WARING:
      "1cf445b2-89aa-492b-8b28-93edeca3dc4a/icon-1.png",
    ENABLE_WHITELIST_LOCK_SUCCESS:
      "2d1d2677-5fdc-4d49-b6c2-97c2b5f3442c/icon-2.png",
    CLOSE: "318892bf-6200-4fb3-bb2c-605d040c58aa/close-1.svg",
    COIN_TRACKING:
      "2bcf38e4-1f15-494d-bf6f-16f956d37ba6/coin-tracking-info-1.svg",
    KOINLY:
      "f173cf46-1eb3-4796-9beb-b8108ec2e483/koinly-free-crypto-tax-software-1.svg",
    DOWNLOAD_CSV: "e8404685-eec4-452c-bb93-d9c7459fb2fc/frame.svg",
    DOWNLOAD_LOADING: "ce6ceeb9-58ec-4ee2-a7e4-5066fd6a5799/loading.gif",
    DOWNLOAD_BANNER: "26b13a84-8d3f-4d27-aca0-70d7b1144aa1/tax-2x.png",
    CIRCLE_RIGHT: "09e2ce6c-4f98-4d38-a2bb-45078f524c0e/circle-right.svg",
    CIRCLE_RIGHT_CHECKED:
      "d0943681-0dc3-4a8a-9d8d-1f8db82361b4/circle-right-checked.svg",
    FIRE: "664623f1-8884-4e08-81ff-c71e0d3fd96e/fire.svg",
    WATCHLIST_SHARE: "81fe38a0-e574-49a4-90e9-73bf0483f36d/watchlist-share.png",
  };
Object.keys(ae).forEach((e) => (ae[e] = [da, ae[e]].join("")));
export {
  ec as $,
  Ze as A,
  ja as B,
  ea as C,
  ra as D,
  ga as E,
  la as F,
  oa as G,
  Ma as H,
  pe as I,
  nc as J,
  ka as K,
  Wa as L,
  Ua as M,
  _a as N,
  Na as O,
  Oa as P,
  Fa as Q,
  Aa as R,
  bc as S,
  S as T,
  va as U,
  M as V,
  qa as W,
  w as X,
  le as Y,
  Ga as Z,
  ia as _,
  $e as a,
  Za as a0,
  ee as a1,
  ma as a2,
  Ba as a3,
  Be as a4,
  La as a5,
  ac as a6,
  Ea as a7,
  pa as a8,
  wa as a9,
  cc as aa,
  ae as ab,
  Ka as ac,
  Ca as ad,
  ya as ae,
  _c as af,
  Xa as ag,
  Ja as ah,
  Ya as ai,
  za as aj,
  Ie as ak,
  Sa as al,
  Qa as am,
  Ge as an,
  Ia as ao,
  ue as ap,
  fe as aq,
  ic as ar,
  sc as as,
  xa as at,
  ua as au,
  Z as b,
  sa as c,
  B as d,
  Ra as e,
  Ta as f,
  $a as g,
  ha as h,
  tc as i,
  Ke as j,
  ke as k,
  Pa as l,
  We as m,
  L as n,
  Ha as o,
  Ye as p,
  oe as q,
  y as r,
  ba as s,
  _e as t,
  Da as u,
  fc as v,
  dc as w,
  Qe as x,
  De as y,
  Va as z,
};
//# sourceMappingURL=chunk-7aa8f0f3.js.map
