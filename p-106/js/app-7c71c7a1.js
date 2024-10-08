var fe = Object.defineProperty;
var pe = (t, r, e) =>
  r in t
    ? fe(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (t[r] = e);
var Rt = (t, r, e) => (pe(t, typeof r != "symbol" ? r + "" : r, e), e);
Map.prototype.toObject = function (t = (r) => r) {
  return Array.from(this.entries()).reduce(
    (r, [e, n]) => ((r[e] = t(n)), r),
    {}
  );
};
Map.prototype.toArray = function (t = (r) => r) {
  return Array.from(this.values(), t);
};
var nt = function (t, r) {
  return (
    (nt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, n) {
          e.__proto__ = n;
        }) ||
      function (e, n) {
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }),
    nt(t, r)
  );
};
function W(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError(
      "Class extends value " + String(r) + " is not a constructor or null"
    );
  nt(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype =
    r === null ? Object.create(r) : ((e.prototype = r.prototype), new e());
}
function de(t, r, e, n) {
  function o(i) {
    return i instanceof e
      ? i
      : new e(function (a) {
          a(i);
        });
  }
  return new (e || (e = Promise))(function (i, a) {
    function c(E) {
      try {
        u(n.next(E));
      } catch (b) {
        a(b);
      }
    }
    function l(E) {
      try {
        u(n.throw(E));
      } catch (b) {
        a(b);
      }
    }
    function u(E) {
      E.done ? i(E.value) : o(E.value).then(c, l);
    }
    u((n = n.apply(t, r || [])).next());
  });
}
function Yt(t, r) {
  var e = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    o,
    i,
    a;
  return (
    (a = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function c(u) {
    return function (E) {
      return l([u, E]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), u[0] && (e = 0)), e; )
      try {
        if (
          ((n = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return e.label++, { value: u[1], done: !1 };
          case 5:
            e.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = e.ops.pop()), e.trys.pop();
            continue;
          default:
            if (
              ((i = e.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              e = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              e.label = u[1];
              break;
            }
            if (u[0] === 6 && e.label < i[1]) {
              (e.label = i[1]), (i = u);
              break;
            }
            if (i && e.label < i[2]) {
              (e.label = i[2]), e.ops.push(u);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        u = r.call(t, e);
      } catch (E) {
        (u = [6, E]), (o = 0);
      } finally {
        n = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function F(t) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    e = r && t[r],
    n = 0;
  if (e) return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    r ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Z(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e) return t;
  var n = e.call(t),
    o,
    i = [],
    a;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (c) {
    a = { error: c };
  } finally {
    try {
      o && !o.done && (e = n.return) && e.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function J(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = r.length, i; n < o; n++)
      (i || !(n in r)) &&
        (i || (i = Array.prototype.slice.call(r, 0, n)), (i[n] = r[n]));
  return t.concat(i || Array.prototype.slice.call(r));
}
function H(t) {
  return this instanceof H ? ((this.v = t), this) : new H(t);
}
function Te(t, r, e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(t, r || []),
    o,
    i = [];
  return (
    (o = {}),
    c("next"),
    c("throw"),
    c("return", a),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function a(A) {
    return function (I) {
      return Promise.resolve(I).then(A, b);
    };
  }
  function c(A, I) {
    n[A] &&
      ((o[A] = function (s) {
        return new Promise(function (_, p) {
          i.push([A, s, _, p]) > 1 || l(A, s);
        });
      }),
      I && (o[A] = I(o[A])));
  }
  function l(A, I) {
    try {
      u(n[A](I));
    } catch (s) {
      g(i[0][3], s);
    }
  }
  function u(A) {
    A.value instanceof H
      ? Promise.resolve(A.value.v).then(E, b)
      : g(i[0][2], A);
  }
  function E(A) {
    l("next", A);
  }
  function b(A) {
    l("throw", A);
  }
  function g(A, I) {
    A(I), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function Ee(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t[Symbol.asyncIterator],
    e;
  return r
    ? r.call(t)
    : ((t = typeof F == "function" ? F(t) : t[Symbol.iterator]()),
      (e = {}),
      n("next"),
      n("throw"),
      n("return"),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e);
  function n(i) {
    e[i] =
      t[i] &&
      function (a) {
        return new Promise(function (c, l) {
          (a = t[i](a)), o(c, l, a.done, a.value);
        });
      };
  }
  function o(i, a, c, l) {
    Promise.resolve(l).then(function (u) {
      i({ value: u, done: c });
    }, a);
  }
}
function v(t) {
  return typeof t == "function";
}
function Bt(t) {
  var r = function (n) {
      Error.call(n), (n.stack = new Error().stack);
    },
    e = t(r);
  return (
    (e.prototype = Object.create(Error.prototype)),
    (e.prototype.constructor = e),
    e
  );
}
var et = Bt(function (t) {
  return function (e) {
    t(this),
      (this.message = e
        ? e.length +
          ` errors occurred during unsubscription:
` +
          e.map(function (n, o) {
            return o + 1 + ") " + n.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = e);
  };
});
function ot(t, r) {
  if (t) {
    var e = t.indexOf(r);
    0 <= e && t.splice(e, 1);
  }
}
var U = (function () {
    function t(r) {
      (this.initialTeardown = r),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (t.prototype.unsubscribe = function () {
        var r, e, n, o, i;
        if (!this.closed) {
          this.closed = !0;
          var a = this._parentage;
          if (a)
            if (((this._parentage = null), Array.isArray(a)))
              try {
                for (var c = F(a), l = c.next(); !l.done; l = c.next()) {
                  var u = l.value;
                  u.remove(this);
                }
              } catch (s) {
                r = { error: s };
              } finally {
                try {
                  l && !l.done && (e = c.return) && e.call(c);
                } finally {
                  if (r) throw r.error;
                }
              }
            else a.remove(this);
          var E = this.initialTeardown;
          if (v(E))
            try {
              E();
            } catch (s) {
              i = s instanceof et ? s.errors : [s];
            }
          var b = this._finalizers;
          if (b) {
            this._finalizers = null;
            try {
              for (var g = F(b), A = g.next(); !A.done; A = g.next()) {
                var I = A.value;
                try {
                  yt(I);
                } catch (s) {
                  (i = i ?? []),
                    s instanceof et
                      ? (i = J(J([], Z(i)), Z(s.errors)))
                      : i.push(s);
                }
              }
            } catch (s) {
              n = { error: s };
            } finally {
              try {
                A && !A.done && (o = g.return) && o.call(g);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          if (i) throw new et(i);
        }
      }),
      (t.prototype.add = function (r) {
        var e;
        if (r && r !== this)
          if (this.closed) yt(r);
          else {
            if (r instanceof t) {
              if (r.closed || r._hasParent(this)) return;
              r._addParent(this);
            }
            (this._finalizers =
              (e = this._finalizers) !== null && e !== void 0 ? e : []).push(r);
          }
      }),
      (t.prototype._hasParent = function (r) {
        var e = this._parentage;
        return e === r || (Array.isArray(e) && e.includes(r));
      }),
      (t.prototype._addParent = function (r) {
        var e = this._parentage;
        this._parentage = Array.isArray(e) ? (e.push(r), e) : e ? [e, r] : r;
      }),
      (t.prototype._removeParent = function (r) {
        var e = this._parentage;
        e === r ? (this._parentage = null) : Array.isArray(e) && ot(e, r);
      }),
      (t.prototype.remove = function (r) {
        var e = this._finalizers;
        e && ot(e, r), r instanceof t && r._removeParent(this);
      }),
      (t.EMPTY = (function () {
        var r = new t();
        return (r.closed = !0), r;
      })()),
      t
    );
  })(),
  xt = U.EMPTY;
function kt(t) {
  return (
    t instanceof U ||
    (t && "closed" in t && v(t.remove) && v(t.add) && v(t.unsubscribe))
  );
}
function yt(t) {
  v(t) ? t() : t.unsubscribe();
}
var Mt = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  it = {
    setTimeout: function (t, r) {
      for (var e = [], n = 2; n < arguments.length; n++)
        e[n - 2] = arguments[n];
      var o = it.delegate;
      return o != null && o.setTimeout
        ? o.setTimeout.apply(o, J([t, r], Z(e)))
        : setTimeout.apply(void 0, J([t, r], Z(e)));
    },
    clearTimeout: function (t) {
      var r = it.delegate;
      return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(t);
    },
    delegate: void 0,
  };
function Ht(t) {
  it.setTimeout(function () {
    throw t;
  });
}
function Ot() {}
function X(t) {
  t();
}
var lt = (function (t) {
    W(r, t);
    function r(e) {
      var n = t.call(this) || this;
      return (
        (n.isStopped = !1),
        e ? ((n.destination = e), kt(e) && e.add(n)) : (n.destination = Oe),
        n
      );
    }
    return (
      (r.create = function (e, n, o) {
        return new at(e, n, o);
      }),
      (r.prototype.next = function (e) {
        this.isStopped || this._next(e);
      }),
      (r.prototype.error = function (e) {
        this.isStopped || ((this.isStopped = !0), this._error(e));
      }),
      (r.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (r.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          t.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (r.prototype._next = function (e) {
        this.destination.next(e);
      }),
      (r.prototype._error = function (e) {
        try {
          this.destination.error(e);
        } finally {
          this.unsubscribe();
        }
      }),
      (r.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      r
    );
  })(U),
  Ae = Function.prototype.bind;
function rt(t, r) {
  return Ae.call(t, r);
}
var Re = (function () {
    function t(r) {
      this.partialObserver = r;
    }
    return (
      (t.prototype.next = function (r) {
        var e = this.partialObserver;
        if (e.next)
          try {
            e.next(r);
          } catch (n) {
            $(n);
          }
      }),
      (t.prototype.error = function (r) {
        var e = this.partialObserver;
        if (e.error)
          try {
            e.error(r);
          } catch (n) {
            $(n);
          }
        else $(r);
      }),
      (t.prototype.complete = function () {
        var r = this.partialObserver;
        if (r.complete)
          try {
            r.complete();
          } catch (e) {
            $(e);
          }
      }),
      t
    );
  })(),
  at = (function (t) {
    W(r, t);
    function r(e, n, o) {
      var i = t.call(this) || this,
        a;
      if (v(e) || !e)
        a = { next: e ?? void 0, error: n ?? void 0, complete: o ?? void 0 };
      else {
        var c;
        i && Mt.useDeprecatedNextContext
          ? ((c = Object.create(e)),
            (c.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (a = {
              next: e.next && rt(e.next, c),
              error: e.error && rt(e.error, c),
              complete: e.complete && rt(e.complete, c),
            }))
          : (a = e);
      }
      return (i.destination = new Re(a)), i;
    }
    return r;
  })(lt);
function $(t) {
  Ht(t);
}
function ye(t) {
  throw t;
}
var Oe = { closed: !0, next: Ot, error: ye, complete: Ot },
  ft = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Ft(t) {
  return t;
}
function he(t) {
  return t.length === 0
    ? Ft
    : t.length === 1
    ? t[0]
    : function (e) {
        return t.reduce(function (n, o) {
          return o(n);
        }, e);
      };
}
var w = (function () {
  function t(r) {
    r && (this._subscribe = r);
  }
  return (
    (t.prototype.lift = function (r) {
      var e = new t();
      return (e.source = this), (e.operator = r), e;
    }),
    (t.prototype.subscribe = function (r, e, n) {
      var o = this,
        i = be(r) ? r : new at(r, e, n);
      return (
        X(function () {
          var a = o,
            c = a.operator,
            l = a.source;
          i.add(c ? c.call(i, l) : l ? o._subscribe(i) : o._trySubscribe(i));
        }),
        i
      );
    }),
    (t.prototype._trySubscribe = function (r) {
      try {
        return this._subscribe(r);
      } catch (e) {
        r.error(e);
      }
    }),
    (t.prototype.forEach = function (r, e) {
      var n = this;
      return (
        (e = ht(e)),
        new e(function (o, i) {
          var a = new at({
            next: function (c) {
              try {
                r(c);
              } catch (l) {
                i(l), a.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          n.subscribe(a);
        })
      );
    }),
    (t.prototype._subscribe = function (r) {
      var e;
      return (e = this.source) === null || e === void 0
        ? void 0
        : e.subscribe(r);
    }),
    (t.prototype[ft] = function () {
      return this;
    }),
    (t.prototype.pipe = function () {
      for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
      return he(r)(this);
    }),
    (t.prototype.toPromise = function (r) {
      var e = this;
      return (
        (r = ht(r)),
        new r(function (n, o) {
          var i;
          e.subscribe(
            function (a) {
              return (i = a);
            },
            function (a) {
              return o(a);
            },
            function () {
              return n(i);
            }
          );
        })
      );
    }),
    (t.create = function (r) {
      return new t(r);
    }),
    t
  );
})();
function ht(t) {
  var r;
  return (r = t ?? Mt.Promise) !== null && r !== void 0 ? r : Promise;
}
function me(t) {
  return t && v(t.next) && v(t.error) && v(t.complete);
}
function be(t) {
  return (t && t instanceof lt) || (me(t) && kt(t));
}
function Ie(t) {
  return v(t == null ? void 0 : t.lift);
}
function V(t) {
  return function (r) {
    if (Ie(r))
      return r.lift(function (e) {
        try {
          return t(e, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function K(t, r, e, n, o) {
  return new ve(t, r, e, n, o);
}
var ve = (function (t) {
    W(r, t);
    function r(e, n, o, i, a, c) {
      var l = t.call(this, e) || this;
      return (
        (l.onFinalize = a),
        (l.shouldUnsubscribe = c),
        (l._next = n
          ? function (u) {
              try {
                n(u);
              } catch (E) {
                e.error(E);
              }
            }
          : t.prototype._next),
        (l._error = i
          ? function (u) {
              try {
                i(u);
              } catch (E) {
                e.error(E);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._error),
        (l._complete = o
          ? function () {
              try {
                o();
              } catch (u) {
                e.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._complete),
        l
      );
    }
    return (
      (r.prototype.unsubscribe = function () {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          t.prototype.unsubscribe.call(this),
            !n &&
              ((e = this.onFinalize) === null || e === void 0 || e.call(this));
        }
      }),
      r
    );
  })(lt),
  ge = Bt(function (t) {
    return function () {
      t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  pt = (function (t) {
    W(r, t);
    function r() {
      var e = t.call(this) || this;
      return (
        (e.closed = !1),
        (e.currentObservers = null),
        (e.observers = []),
        (e.isStopped = !1),
        (e.hasError = !1),
        (e.thrownError = null),
        e
      );
    }
    return (
      (r.prototype.lift = function (e) {
        var n = new mt(this, this);
        return (n.operator = e), n;
      }),
      (r.prototype._throwIfClosed = function () {
        if (this.closed) throw new ge();
      }),
      (r.prototype.next = function (e) {
        var n = this;
        X(function () {
          var o, i;
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.currentObservers ||
              (n.currentObservers = Array.from(n.observers));
            try {
              for (
                var a = F(n.currentObservers), c = a.next();
                !c.done;
                c = a.next()
              ) {
                var l = c.value;
                l.next(e);
              }
            } catch (u) {
              o = { error: u };
            } finally {
              try {
                c && !c.done && (i = a.return) && i.call(a);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (r.prototype.error = function (e) {
        var n = this;
        X(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            (n.hasError = n.isStopped = !0), (n.thrownError = e);
            for (var o = n.observers; o.length; ) o.shift().error(e);
          }
        });
      }),
      (r.prototype.complete = function () {
        var e = this;
        X(function () {
          if ((e._throwIfClosed(), !e.isStopped)) {
            e.isStopped = !0;
            for (var n = e.observers; n.length; ) n.shift().complete();
          }
        });
      }),
      (r.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(r.prototype, "observed", {
        get: function () {
          var e;
          return (
            ((e = this.observers) === null || e === void 0
              ? void 0
              : e.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype._trySubscribe = function (e) {
        return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e);
      }),
      (r.prototype._subscribe = function (e) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(e),
          this._innerSubscribe(e)
        );
      }),
      (r.prototype._innerSubscribe = function (e) {
        var n = this,
          o = this,
          i = o.hasError,
          a = o.isStopped,
          c = o.observers;
        return i || a
          ? xt
          : ((this.currentObservers = null),
            c.push(e),
            new U(function () {
              (n.currentObservers = null), ot(c, e);
            }));
      }),
      (r.prototype._checkFinalizedStatuses = function (e) {
        var n = this,
          o = n.hasError,
          i = n.thrownError,
          a = n.isStopped;
        o ? e.error(i) : a && e.complete();
      }),
      (r.prototype.asObservable = function () {
        var e = new w();
        return (e.source = this), e;
      }),
      (r.create = function (e, n) {
        return new mt(e, n);
      }),
      r
    );
  })(w),
  mt = (function (t) {
    W(r, t);
    function r(e, n) {
      var o = t.call(this) || this;
      return (o.destination = e), (o.source = n), o;
    }
    return (
      (r.prototype.next = function (e) {
        var n, o;
        (o =
          (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
          null ||
          o === void 0 ||
          o.call(n, e);
      }),
      (r.prototype.error = function (e) {
        var n, o;
        (o =
          (n = this.destination) === null || n === void 0
            ? void 0
            : n.error) === null ||
          o === void 0 ||
          o.call(n, e);
      }),
      (r.prototype.complete = function () {
        var e, n;
        (n =
          (e = this.destination) === null || e === void 0
            ? void 0
            : e.complete) === null ||
          n === void 0 ||
          n.call(e);
      }),
      (r.prototype._subscribe = function (e) {
        var n, o;
        return (o =
          (n = this.source) === null || n === void 0
            ? void 0
            : n.subscribe(e)) !== null && o !== void 0
          ? o
          : xt;
      }),
      r
    );
  })(pt),
  st = (function (t) {
    W(r, t);
    function r(e) {
      var n = t.call(this) || this;
      return (n._value = e), n;
    }
    return (
      Object.defineProperty(r.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype._subscribe = function (e) {
        var n = t.prototype._subscribe.call(this, e);
        return !n.closed && e.next(this._value), n;
      }),
      (r.prototype.getValue = function () {
        var e = this,
          n = e.hasError,
          o = e.thrownError,
          i = e._value;
        if (n) throw o;
        return this._throwIfClosed(), i;
      }),
      (r.prototype.next = function (e) {
        t.prototype.next.call(this, (this._value = e));
      }),
      r
    );
  })(pt);
function Pe(t) {
  return t && v(t.schedule);
}
function dt(t) {
  return t[t.length - 1];
}
function zr(t) {
  return v(dt(t)) ? t.pop() : void 0;
}
function Wt(t) {
  return Pe(dt(t)) ? t.pop() : void 0;
}
function Qr(t, r) {
  return typeof dt(t) == "number" ? t.pop() : r;
}
var Vt = function (t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function jt(t) {
  return v(t == null ? void 0 : t.then);
}
function Kt(t) {
  return v(t[ft]);
}
function St(t) {
  return (
    Symbol.asyncIterator && v(t == null ? void 0 : t[Symbol.asyncIterator])
  );
}
function qt(t) {
  return new TypeError(
    "You provided " +
      (t !== null && typeof t == "object"
        ? "an invalid object"
        : "'" + t + "'") +
      " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
  );
}
function Ce() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var $t = Ce();
function zt(t) {
  return v(t == null ? void 0 : t[$t]);
}
function Qt(t) {
  return Te(this, arguments, function () {
    var e, n, o, i;
    return Yt(this, function (a) {
      switch (a.label) {
        case 0:
          (e = t.getReader()), (a.label = 1);
        case 1:
          a.trys.push([1, , 9, 10]), (a.label = 2);
        case 2:
          return [4, H(e.read())];
        case 3:
          return (
            (n = a.sent()),
            (o = n.value),
            (i = n.done),
            i ? [4, H(void 0)] : [3, 5]
          );
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, H(o)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Xt(t) {
  return v(t == null ? void 0 : t.getReader);
}
function S(t) {
  if (t instanceof w) return t;
  if (t != null) {
    if (Kt(t)) return Ne(t);
    if (Vt(t)) return we(t);
    if (jt(t)) return De(t);
    if (St(t)) return Zt(t);
    if (zt(t)) return Ye(t);
    if (Xt(t)) return Be(t);
  }
  throw qt(t);
}
function Ne(t) {
  return new w(function (r) {
    var e = t[ft]();
    if (v(e.subscribe)) return e.subscribe(r);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function we(t) {
  return new w(function (r) {
    for (var e = 0; e < t.length && !r.closed; e++) r.next(t[e]);
    r.complete();
  });
}
function De(t) {
  return new w(function (r) {
    t.then(
      function (e) {
        r.closed || (r.next(e), r.complete());
      },
      function (e) {
        return r.error(e);
      }
    ).then(null, Ht);
  });
}
function Ye(t) {
  return new w(function (r) {
    var e, n;
    try {
      for (var o = F(t), i = o.next(); !i.done; i = o.next()) {
        var a = i.value;
        if ((r.next(a), r.closed)) return;
      }
    } catch (c) {
      e = { error: c };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    r.complete();
  });
}
function Zt(t) {
  return new w(function (r) {
    xe(t, r).catch(function (e) {
      return r.error(e);
    });
  });
}
function Be(t) {
  return Zt(Qt(t));
}
function xe(t, r) {
  var e, n, o, i;
  return de(this, void 0, void 0, function () {
    var a, c;
    return Yt(this, function (l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), (e = Ee(t)), (l.label = 1);
        case 1:
          return [4, e.next()];
        case 2:
          if (((n = l.sent()), !!n.done)) return [3, 4];
          if (((a = n.value), r.next(a), r.closed)) return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (c = l.sent()), (o = { error: c }), [3, 11];
        case 6:
          return (
            l.trys.push([6, , 9, 10]),
            n && !n.done && (i = e.return) ? [4, i.call(e)] : [3, 8]
          );
        case 7:
          l.sent(), (l.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (o) throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return r.complete(), [2];
      }
    });
  });
}
function B(t, r, e, n, o) {
  n === void 0 && (n = 0), o === void 0 && (o = !1);
  var i = r.schedule(function () {
    e(), o ? t.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if ((t.add(i), !o)) return i;
}
function Jt(t, r) {
  return (
    r === void 0 && (r = 0),
    V(function (e, n) {
      e.subscribe(
        K(
          n,
          function (o) {
            return B(
              n,
              t,
              function () {
                return n.next(o);
              },
              r
            );
          },
          function () {
            return B(
              n,
              t,
              function () {
                return n.complete();
              },
              r
            );
          },
          function (o) {
            return B(
              n,
              t,
              function () {
                return n.error(o);
              },
              r
            );
          }
        )
      );
    })
  );
}
function Lt(t, r) {
  return (
    r === void 0 && (r = 0),
    V(function (e, n) {
      n.add(
        t.schedule(function () {
          return e.subscribe(n);
        }, r)
      );
    })
  );
}
function ke(t, r) {
  return S(t).pipe(Lt(r), Jt(r));
}
function Me(t, r) {
  return S(t).pipe(Lt(r), Jt(r));
}
function He(t, r) {
  return new w(function (e) {
    var n = 0;
    return r.schedule(function () {
      n === t.length
        ? e.complete()
        : (e.next(t[n++]), e.closed || this.schedule());
    });
  });
}
function Fe(t, r) {
  return new w(function (e) {
    var n;
    return (
      B(e, r, function () {
        (n = t[$t]()),
          B(
            e,
            r,
            function () {
              var o, i, a;
              try {
                (o = n.next()), (i = o.value), (a = o.done);
              } catch (c) {
                e.error(c);
                return;
              }
              a ? e.complete() : e.next(i);
            },
            0,
            !0
          );
      }),
      function () {
        return v(n == null ? void 0 : n.return) && n.return();
      }
    );
  });
}
function Ut(t, r) {
  if (!t) throw new Error("Iterable cannot be null");
  return new w(function (e) {
    B(e, r, function () {
      var n = t[Symbol.asyncIterator]();
      B(
        e,
        r,
        function () {
          n.next().then(function (o) {
            o.done ? e.complete() : e.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function We(t, r) {
  return Ut(Qt(t), r);
}
function Ve(t, r) {
  if (t != null) {
    if (Kt(t)) return ke(t, r);
    if (Vt(t)) return He(t, r);
    if (jt(t)) return Me(t, r);
    if (St(t)) return Ut(t, r);
    if (zt(t)) return Fe(t, r);
    if (Xt(t)) return We(t, r);
  }
  throw qt(t);
}
function Gt(t, r) {
  return r ? Ve(t, r) : S(t);
}
function je(t, r) {
  return V(function (e, n) {
    var o = 0;
    e.subscribe(
      K(n, function (i) {
        n.next(t.call(r, i, o++));
      })
    );
  });
}
function Ke(t, r, e, n, o, i, a, c) {
  var l = [],
    u = 0,
    E = 0,
    b = !1,
    g = function () {
      b && !l.length && !u && r.complete();
    },
    A = function (s) {
      return u < n ? I(s) : l.push(s);
    },
    I = function (s) {
      i && r.next(s), u++;
      var _ = !1;
      S(e(s, E++)).subscribe(
        K(
          r,
          function (p) {
            o == null || o(p), i ? A(p) : r.next(p);
          },
          function () {
            _ = !0;
          },
          void 0,
          function () {
            if (_)
              try {
                u--;
                for (
                  var p = function () {
                    var f = l.shift();
                    a
                      ? B(r, a, function () {
                          return I(f);
                        })
                      : I(f);
                  };
                  l.length && u < n;

                )
                  p();
                g();
              } catch (f) {
                r.error(f);
              }
          }
        )
      );
    };
  return (
    t.subscribe(
      K(r, A, function () {
        (b = !0), g();
      })
    ),
    function () {
      c == null || c();
    }
  );
}
function te(t, r, e) {
  return (
    e === void 0 && (e = 1 / 0),
    v(r)
      ? te(function (n, o) {
          return je(function (i, a) {
            return r(n, i, o, a);
          })(S(t(n, o)));
        }, e)
      : (typeof r == "number" && (e = r),
        V(function (n, o) {
          return Ke(n, o, t, e);
        }))
  );
}
function Se(t) {
  return t === void 0 && (t = 1 / 0), te(Ft, t);
}
function qe() {
  return Se(1);
}
function bt() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
  return qe()(Gt(t, Wt(t)));
}
function ee(t, r) {
  return V(function (e, n) {
    var o = 0;
    e.subscribe(
      K(n, function (i) {
        return t.call(r, i, o++) && n.next(i);
      })
    );
  });
}
function $e() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
  var e = Wt(t);
  return V(function (n, o) {
    (e ? bt(t, n, e) : bt(t, n)).subscribe(o);
  });
}
st.prototype.set = st.prototype.next;
Promise.prototype.toRestState = function () {
  return Gt(this).pipe($e({ loading: !0 }));
};
const re = new Set();
function ze(t) {
  t.forEach((r) => re.add(r));
}
function Qe() {
  return [...re];
}
function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var n in e) ({}).hasOwnProperty.call(e, n) && (t[n] = e[n]);
          }
          return t;
        }),
    L.apply(null, arguments)
  );
}
var M;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(M || (M = {}));
var It = function (t) {
    return t;
  },
  vt = "beforeunload",
  Xe = "popstate";
function Ze(t) {
  t === void 0 && (t = {});
  var r = t,
    e = r.window,
    n = e === void 0 ? document.defaultView : e,
    o = n.history;
  function i() {
    var y = n.location,
      m = y.pathname,
      P = y.search,
      D = y.hash,
      N = o.state || {};
    return [
      N.idx,
      It({
        pathname: m,
        search: P,
        hash: D,
        state: N.usr || null,
        key: N.key || "default",
      }),
    ];
  }
  var a = null;
  function c() {
    if (a) A.call(a), (a = null);
    else {
      var y = M.Pop,
        m = i(),
        P = m[0],
        D = m[1];
      if (A.length) {
        if (P != null) {
          var N = E - P;
          N &&
            ((a = {
              action: y,
              location: D,
              retry: function () {
                O(N * -1);
              },
            }),
            O(N));
        }
      } else f(y);
    }
  }
  n.addEventListener(Xe, c);
  var l = M.Pop,
    u = i(),
    E = u[0],
    b = u[1],
    g = Pt(),
    A = Pt();
  E == null && ((E = 0), o.replaceState(L({}, o.state, { idx: E }), ""));
  function I(y) {
    return typeof y == "string" ? y : Le(y);
  }
  function s(y, m) {
    return (
      m === void 0 && (m = null),
      It(
        L(
          { pathname: b.pathname, hash: "", search: "" },
          typeof y == "string" ? Ue(y) : y,
          { state: m, key: Je() }
        )
      )
    );
  }
  function _(y, m) {
    return [{ usr: y.state, key: y.key, idx: m }, I(y)];
  }
  function p(y, m, P) {
    return !A.length || (A.call({ action: y, location: m, retry: P }), !1);
  }
  function f(y) {
    l = y;
    var m = i();
    (E = m[0]), (b = m[1]), g.call({ action: l, location: b });
  }
  function R(y, m) {
    var P = M.Push,
      D = s(y, m);
    function N() {
      R(y, m);
    }
    if (p(P, D, N)) {
      var k = _(D, E + 1),
        tt = k[0],
        q = k[1];
      try {
        o.pushState(tt, "", q);
      } catch {
        n.location.assign(q);
      }
      f(P);
    }
  }
  function h(y, m) {
    var P = M.Replace,
      D = s(y, m);
    function N() {
      h(y, m);
    }
    if (p(P, D, N)) {
      var k = _(D, E),
        tt = k[0],
        q = k[1];
      o.replaceState(tt, "", q), f(P);
    }
  }
  function O(y) {
    o.go(y);
  }
  var Y = {
    get action() {
      return l;
    },
    get location() {
      return b;
    },
    createHref: I,
    push: R,
    replace: h,
    go: O,
    back: function () {
      O(-1);
    },
    forward: function () {
      O(1);
    },
    listen: function (m) {
      return g.push(m);
    },
    block: function (m) {
      var P = A.push(m);
      return (
        A.length === 1 && n.addEventListener(vt, gt),
        function () {
          P(), A.length || n.removeEventListener(vt, gt);
        }
      );
    },
  };
  return Y;
}
function gt(t) {
  t.preventDefault(), (t.returnValue = "");
}
function Pt() {
  var t = [];
  return {
    get length() {
      return t.length;
    },
    push: function (e) {
      return (
        t.push(e),
        function () {
          t = t.filter(function (n) {
            return n !== e;
          });
        }
      );
    },
    call: function (e) {
      t.forEach(function (n) {
        return n && n(e);
      });
    },
  };
}
function Je() {
  return Math.random().toString(36).substr(2, 8);
}
function Le(t) {
  var r = t.pathname,
    e = r === void 0 ? "/" : r,
    n = t.search,
    o = n === void 0 ? "" : n,
    i = t.hash,
    a = i === void 0 ? "" : i;
  return (
    o && o !== "?" && (e += o.charAt(0) === "?" ? o : "?" + o),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Ue(t) {
  var r = {};
  if (t) {
    var e = t.indexOf("#");
    e >= 0 && ((r.hash = t.substr(e)), (t = t.substr(0, e)));
    var n = t.indexOf("?");
    n >= 0 && ((r.search = t.substr(n)), (t = t.substr(0, n))),
      t && (r.pathname = t);
  }
  return r;
}
const G = Ge();
function Ge() {
  const t = typeof window == "object",
    r = t ? navigator.userAgent || navigator.vendor : "";
  return {
    isBrowser: t,
    isServer: !t,
    isProduction: t && tr(),
    isTestNet: t && er(),
    isLocal: t && rr(),
    isApp: t && nr(),
    isMobile: t && or(r),
    isBot: t && ir(r),
  };
}
function tr() {
  return location.hostname === "phemex.com.tr";
}
function er() {
  return location.hostname.indexOf("testnet") > -1;
}
function rr() {
  return (
    ["127.0.0.1", "localhost", "bityaris-v33.vercel.app", "bityaris.co.za"].indexOf(
      location.hostname
    ) > -1
  );
}
function nr() {
  return navigator.userAgent.indexOf("PhemexApp") > -1;
}
function or(t) {
  return (
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      t
    ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        t.substr(0, 4)
      )) &&
    !/(googlebot|Googlebot-Mobile|bingbot)/i.test(t)
  );
}
function ir(t) {
  return /(googlebot|Googlebot-Mobile|bingbot)/i.test(t);
}
const z = G.isBrowser ? Ze() : null;
function ar(t) {
  const r = { lastKeyIndex: 0, keys: [z.location.key] };
  z.listen(({ location: e }) => {
    const n = z._action;
    if (sr(r, n, e.key)) {
      const { pathname: i, search: a, key: c } = e;
      t({
        pathname: i,
        search: a,
        key: c,
        action: n,
        href: G.isBrowser ? window.location.href : "",
      }),
        (z._action = "");
      return;
    }
    window.location.reload();
  });
}
function sr(t, r, e) {
  const { keys: n } = t;
  if (r === "PUSH") return n.push(e), (t.lastKeyIndex = n.length - 1), !0;
  if (r === "REPLACE") return n.splice(t.lastKeyIndex, 1, e), !0;
  const o = n.indexOf(e);
  return o > -1 && (r === "GO_BACK" || r === "GO_FORWARD")
    ? ((t.lastKeyIndex = o), !0)
    : !1;
}
var Tt = {},
  cr = (t) =>
    encodeURIComponent(t).replace(
      /[!'()*]/g,
      (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  ne = "%[a-f0-9]{2}",
  Ct = new RegExp("(" + ne + ")|([^%]+?)", "gi"),
  Nt = new RegExp("(" + ne + ")+", "gi");
function ct(t, r) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {}
  if (t.length === 1) return t;
  r = r || 1;
  var e = t.slice(0, r),
    n = t.slice(r);
  return Array.prototype.concat.call([], ct(e), ct(n));
}
function ur(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var r = t.match(Ct) || [], e = 1; e < r.length; e++)
      (t = ct(r, e).join("")), (r = t.match(Ct) || []);
    return t;
  }
}
function _r(t) {
  for (var r = { "%FE%FF": "��", "%FF%FE": "��" }, e = Nt.exec(t); e; ) {
    try {
      r[e[0]] = decodeURIComponent(e[0]);
    } catch {
      var n = ur(e[0]);
      n !== e[0] && (r[e[0]] = n);
    }
    e = Nt.exec(t);
  }
  r["%C2"] = "�";
  for (var o = Object.keys(r), i = 0; i < o.length; i++) {
    var a = o[i];
    t = t.replace(new RegExp(a, "g"), r[a]);
  }
  return t;
}
var lr = function (t) {
    if (typeof t != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof t + "`"
      );
    try {
      return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
    } catch {
      return _r(t);
    }
  },
  fr = (t, r) => {
    if (!(typeof t == "string" && typeof r == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (r === "") return [t];
    const e = t.indexOf(r);
    return e === -1 ? [t] : [t.slice(0, e), t.slice(e + r.length)];
  };
(function (t) {
  const r = cr,
    e = lr,
    n = fr;
  function o(s) {
    switch (s.arrayFormat) {
      case "index":
        return (_) => (p, f) => {
          const R = p.length;
          return f === void 0 || (s.skipNull && f === null)
            ? p
            : f === null
            ? [...p, [c(_, s), "[", R, "]"].join("")]
            : [...p, [c(_, s), "[", c(R, s), "]=", c(f, s)].join("")];
        };
      case "bracket":
        return (_) => (p, f) =>
          f === void 0 || (s.skipNull && f === null)
            ? p
            : f === null
            ? [...p, [c(_, s), "[]"].join("")]
            : [...p, [c(_, s), "[]=", c(f, s)].join("")];
      case "comma":
      case "separator":
        return (_) => (p, f) =>
          f == null || f.length === 0
            ? p
            : p.length === 0
            ? [[c(_, s), "=", c(f, s)].join("")]
            : [[p, c(f, s)].join(s.arrayFormatSeparator)];
      default:
        return (_) => (p, f) =>
          f === void 0 || (s.skipNull && f === null)
            ? p
            : f === null
            ? [...p, c(_, s)]
            : [...p, [c(_, s), "=", c(f, s)].join("")];
    }
  }
  function i(s) {
    let _;
    switch (s.arrayFormat) {
      case "index":
        return (p, f, R) => {
          if (
            ((_ = /\[(\d*)\]$/.exec(p)), (p = p.replace(/\[\d*\]$/, "")), !_)
          ) {
            R[p] = f;
            return;
          }
          R[p] === void 0 && (R[p] = {}), (R[p][_[1]] = f);
        };
      case "bracket":
        return (p, f, R) => {
          if (((_ = /(\[\])$/.exec(p)), (p = p.replace(/\[\]$/, "")), !_)) {
            R[p] = f;
            return;
          }
          if (R[p] === void 0) {
            R[p] = [f];
            return;
          }
          R[p] = [].concat(R[p], f);
        };
      case "comma":
      case "separator":
        return (p, f, R) => {
          const O =
            typeof f == "string" &&
            f.split("").indexOf(s.arrayFormatSeparator) > -1
              ? f.split(s.arrayFormatSeparator).map((Y) => l(Y, s))
              : f === null
              ? f
              : l(f, s);
          R[p] = O;
        };
      default:
        return (p, f, R) => {
          if (R[p] === void 0) {
            R[p] = f;
            return;
          }
          R[p] = [].concat(R[p], f);
        };
    }
  }
  function a(s) {
    if (typeof s != "string" || s.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function c(s, _) {
    return _.encode ? (_.strict ? r(s) : encodeURIComponent(s)) : s;
  }
  function l(s, _) {
    return _.decode ? e(s) : s;
  }
  function u(s) {
    return Array.isArray(s)
      ? s.sort()
      : typeof s == "object"
      ? u(Object.keys(s))
          .sort((_, p) => Number(_) - Number(p))
          .map((_) => s[_])
      : s;
  }
  function E(s) {
    const _ = s.indexOf("#");
    return _ !== -1 && (s = s.slice(0, _)), s;
  }
  function b(s) {
    let _ = "";
    const p = s.indexOf("#");
    return p !== -1 && (_ = s.slice(p)), _;
  }
  function g(s) {
    s = E(s);
    const _ = s.indexOf("?");
    return _ === -1 ? "" : s.slice(_ + 1);
  }
  function A(s, _) {
    return (
      _.parseNumbers &&
      !Number.isNaN(Number(s)) &&
      typeof s == "string" &&
      s.trim() !== ""
        ? (s = Number(s))
        : _.parseBooleans &&
          s !== null &&
          (s.toLowerCase() === "true" || s.toLowerCase() === "false") &&
          (s = s.toLowerCase() === "true"),
      s
    );
  }
  function I(s, _) {
    (_ = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      _
    )),
      a(_.arrayFormatSeparator);
    const p = i(_),
      f = Object.create(null);
    if (typeof s != "string" || ((s = s.trim().replace(/^[?#&]/, "")), !s))
      return f;
    for (const R of s.split("&")) {
      let [h, O] = n(_.decode ? R.replace(/\+/g, " ") : R, "=");
      (O = O === void 0 ? null : _.arrayFormat === "comma" ? O : l(O, _)),
        p(l(h, _), O, f);
    }
    for (const R of Object.keys(f)) {
      const h = f[R];
      if (typeof h == "object" && h !== null)
        for (const O of Object.keys(h)) h[O] = A(h[O], _);
      else f[R] = A(h, _);
    }
    return _.sort === !1
      ? f
      : (_.sort === !0
          ? Object.keys(f).sort()
          : Object.keys(f).sort(_.sort)
        ).reduce((R, h) => {
          const O = f[h];
          return (
            O && typeof O == "object" && !Array.isArray(O)
              ? (R[h] = u(O))
              : (R[h] = O),
            R
          );
        }, Object.create(null));
  }
  (t.extract = g),
    (t.parse = I),
    (t.stringify = (s, _) => {
      if (!s) return "";
      (_ = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        _
      )),
        a(_.arrayFormatSeparator);
      const p = o(_),
        f = Object.assign({}, s);
      if (_.skipNull)
        for (const h of Object.keys(f))
          (f[h] === void 0 || f[h] === null) && delete f[h];
      const R = Object.keys(f);
      return (
        _.sort !== !1 && R.sort(_.sort),
        R.map((h) => {
          const O = s[h];
          return O === void 0
            ? ""
            : O === null
            ? c(h, _)
            : Array.isArray(O)
            ? O.reduce(p(h), []).join("&")
            : c(h, _) + "=" + c(O, _);
        })
          .filter((h) => h.length > 0)
          .join("&")
      );
    }),
    (t.parseUrl = (s, _) => ({
      url: E(s).split("?")[0] || "",
      query: I(g(s), _),
    })),
    (t.stringifyUrl = (s, _) => {
      const p = E(s.url).split("?")[0] || "",
        f = t.extract(s.url),
        R = t.parse(f),
        h = b(s.url),
        O = Object.assign(R, s.query);
      let Y = t.stringify(O, _);
      return Y && (Y = `?${Y}`), `${p}${Y}${h}`;
    });
})(Tt);
const oe = {
  genLG(t) {
    const r = pr(t || {});
    return function (e, n) {
      if (!e) return "";
      const { id: o, en: i } = e,
        a = r[o] || i;
      return n ? dr(a, n) : a;
    };
  },
  isLanguage(t) {
    return (
      [
        "en",
        "ru",
        "ko",
        "ja",
        "es",
        "cn",
        "de",
        "fr",
        "tr",
        "pt",
        "vi",
      ].indexOf(t) > -1
    );
  },
  parsePathname(t) {
    const r = t.split("/").filter(Boolean);
    if (r.length < 1) return { lang: "en", pathname: "/" };
    const e = r[0];
    return oe.isLanguage(e)
      ? { lang: e, pathname: "/" + r.slice(1).join("/") }
      : { lang: "en", pathname: "/" + r.join("/") };
  },
};
function pr(t) {
  const r = {};
  return (
    Object.keys(t).forEach((e) => {
      t[e].forEach((o) => (r[o] = e));
    }),
    r
  );
}
function dr(t, r) {
  return Object.keys(r).reduce(
    (e, n) => e.replace(new RegExp(["(\\{", n, "\\})"].join(""), "g"), r[n]),
    t
  );
}
const ie = new st(Ar()),
  Tr = ie.asObservable();
function Er({ pathname: t, search: r, key: e, action: n, href: o }) {
  ie.next(ae({ pathname: t, search: r, key: e, action: n, href: o }));
}
function ae({ pathname: t, search: r, key: e, action: n, href: o }) {
  const i = Tt.parse(r),
    { lang: a, pathname: c } = oe.parsePathname(t);
  return {
    action: n,
    locale: a,
    slug: c,
    pathname: t,
    query: i,
    key: e,
    href: o,
  };
}
function Ar() {
  if (G.isServer)
    return {
      action: "INIT",
      slug: "",
      locale: typeof SSR_LOCALE == "string" ? SSR_LOCALE : "en",
      pathname: "",
      query: {},
      key: "default",
      href: "",
    };
  const { pathname: t, search: r, href: e } = window.location;
  return ae({
    pathname: t,
    search: r,
    href: e,
    key: "default",
    action: "INIT",
  });
}
const se = "",
  x = Rr();
function Rr() {
  const t = typeof window == "object",
    r = t ? navigator.userAgent || navigator.vendor || window.opera : "";
  return {
    isServer: !t,
    isBrowser: !!t,
    isProduction: t && Or(),
    isEaProduction: t && hr(),
    isTestNet: t && Et(),
    isLocal: t && br(),
    isApp: t && Ir(),
    isMobile: t && vr(r),
    isBot: t && gr(r),
    isDev: t && mr(),
    site: se,
    isJapanSite: yr("jp"),
  };
}
function yr(t) {
  return se === t;
}
function Or() {
  if (Et() || location.protocol !== "") return !1;
  const t = location.hostname.split("");
  return (t.length === 3 && t[0] === "") || t.length === 2;
}
function hr() {
  if (Et() || location.protocol !== "") return !1;
  const t = location.hostname.split("");
  return (t.length === 3 && t[0] === "ea") || t.length === 2;
}
function Et() {
  return location.hostname.indexOf("testnet") > -1;
}
function mr() {
  return location.hostname.endsWith("cmexpro.com");
}
function br() {
  return (
    ["127.0.0.1", "localhost", "bityaris-v33.vercel.app", "bityaris.co.za"].indexOf(
      location.hostname
    ) > -1 || ["4000", "9000", "3000"].includes(location.port)
  );
}
function Ir() {
  return window.navigator.userAgent.indexOf("PhemexApp") > -1;
}
function vr(t) {
  return (
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      t
    ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        t.substr(0, 4)
      )) &&
    !/(googlebot|Googlebot-Mobile|bingbot)/i.test(t)
  );
}
function gr(t) {
  return /(googlebot|Googlebot-Mobile|bingbot)/i.test(t);
}
const wt = { ja: { prod: ["phemex.jp", "pulse.social"] } },
  ut = Object.keys(wt).reduce((t, r) => {
    const e = wt[r],
      n = e.prod.reduce((l, u) => ({ ...l, [u]: "phemex.com" }), {}),
      i = (e.fat && e.fat.length > 0 ? e.fat : e.prod).reduce(
        (l, u) => ({
          ...l,
          [`fat.${u}`]: "fat.phemex.com",
          [`fat2.${u}`]: "fat2.phemex.com",
          [`fat3.${u}`]: "fat3.phemex.com",
        }),
        {}
      ),
      c = (e.ea && e.ea.length > 0 ? e.ea : e.prod).reduce(
        (l, u) => ({ ...l, [`ea.${u}`]: "ea.phemex.com" }),
        {}
      );
    return { ...t, [r]: { ...n, ...c, ...i } };
  }, {});
function Pr(t) {
  return Object.values(ut).reduce((e, n) => ({ ...e, ...n }), {})[t] || t;
}
function At() {
  const t = x.isServer ? "phemex.com" : location.hostname;
  for (const r in ut) if (Object.keys(ut[r]).includes(t)) return r;
  return "en";
}
function Cr() {
  const t = At();
  return { ja: "JPY", en: "USD" }[t] || "USD";
}
function Nr() {
  const t = At();
  return { ja: "JP" }[t] || "";
}
const ce = "localizedRedirect",
  _t = At(),
  Xr = Cr(),
  Zr = Nr(),
  ue = _t !== "en",
  Jr = ue && (x.isServer ? !1 : !localStorage.getItem(ce)),
  Lr = (t = "true") => {
    localStorage.setItem(ce, t);
  },
  Ur = function (t) {
    return ue && ![_t, "en"].includes(t) ? _t : t;
  },
  C = {
    MOCK_URL_FLAG: "/moc/",
    _isMock: !1,
    initMockStatus() {
      x.isServer || (C._isMock = location.pathname.includes(C.MOCK_URL_FLAG)),
        C._isMock && console.warn("[MOCK]");
    },
    isMock() {
      return C._isMock;
    },
    getMockPrefix() {
      return C.isMock() ? "/moc" : "";
    },
    gotoLive(t) {
      if (((t = t || "/"), C.isMockUrl(t))) throw new Error("wrong live url");
      window.location.assign(t);
    },
    gotoMock(t) {
      if (!C.isMockUrl(t)) throw new Error("wrong mock url!");
      window.location.assign(t);
    },
    currentLiveUrl() {
      return location.href.replace(C.MOCK_URL_FLAG, "/");
    },
    isMockUrl(t) {
      return t.includes(C.MOCK_URL_FLAG);
    },
  };
C.initMockStatus();
const wr = "fat2.phemex.com",
  _e = C.getMockPrefix(),
  Dr = le("https://api10") + _e,
  Yr = le("wss://ws10") + _e,
  Br = {
    API: Dr,
    WS: Yr,
    STATIC_URL: "https://static.phemex.com",
    BASE_URL: xr(),
    TEST_NET_URL: kr(),
    IMG_URL: "https://img.phemex.com",
  };
function xr() {
  return location.origin;
}
function kr() {
  return x.isTestNet ? location.origin : "https://testnet.phemex.com";
}
function le(t) {
  const r = (n) => (n.split(".").length === 2 ? "." : "-"),
    e = (n, o) => [n, o].join(r(o));
  if (x.isServer) return e(t, "phemex.com");
  if (x.isLocal) {
    if (["4000", "9000"].includes(location.port)) return e(t, wr);
    const n = Tt.parse(window.location.search).proxyEnv,
      i =
        {
          dev: "dev.cmexpro.com",
          dev2: "dev2.cmexpro.com",
          dev3: "dev3.cmexpro.com",
          fat: "fat.phemex.com",
          fat2: "fat2.phemex.com",
          fat3: "fat3.phemex.com",
          ea: "ea.phemex.com",
        }[n] || "phemex.com";
    return e(t, i);
  }
  return e(t, Pr(location.hostname));
}
const Q = localStorage.getItem("ty_show_log") === "Y",
  Mr = {
    setUid(t) {
      const r = window.TINGYUN;
      r && r.setUid && (Q && console.log("[TY] SetUid:", t), r.setUid(t));
    },
    createAutoEvent(t) {
      const r = window.TINGYUN;
      return r && r.createAutoEvent
        ? (Q && console.log("[TY] AutoEvent:", t), r.createAutoEvent(t))
        : { end() {}, fail() {} };
    },
    createEvent(t) {
      if (document.visibilityState !== "visible") {
        Q && console.log("[TY] ignore NewAction:", t);
        return;
      }
      const r = window.TINGYUN;
      r &&
        r.newAction &&
        (Q && console.log("[TY] NewAction:", t), r.newAction(t, !0));
    },
  };
class Hr extends pt {
  constructor() {
    super(...arguments);
    Rt(this, "worker");
  }
  init(e) {
    (this.worker = e()),
      this.worker.subscribe("message", ({ data: n }) => {
        if (this.closed) throw new Error();
        if (!this.isStopped) {
          const { observers: o } = this,
            i = o.length,
            a = o.slice();
          for (let c = 0; c < i; c++) a[c].next(n);
        }
      });
  }
  send(e) {
    this.worker && this.worker.postMessage(e);
  }
  next(e) {
    this.worker && this.worker.postMessage(e);
  }
}
const j = new Hr();
x.isBot ||
  j.pipe(ee((t) => t.type === "worker-ready")).subscribe(() => {
    j.send({ type: "ws-url", url: Br.WS }),
      j.send({
        type: "state-symbol",
        tradeType: "Perpetual",
        symbol: C.isMock() ? "BTCMUSDT" : "EOSUSD",
      });
  });
j.pipe(ee((t) => t.type === "tingyun-event")).subscribe((t) =>
  Mr.createEvent(t.data)
);
function Fr(t) {
  const r = G.isServer ? {} : window.langDic;
  return function (e, n) {
    if (!e) return console.warn("lang is empty"), "";
    const o = typeof e == "string" ? r[e] : e[t] || e.en;
    return n ? Wr(o, n) : o;
  };
}
function Wr(t, r) {
  return Object.keys(r).reduce(
    (e, n) => e.replace(new RegExp(["(\\{", n, "\\})"].join(""), "g"), r[n]),
    t
  );
}
async function Vr(t, r) {
  (window.process = { browser: !0 }), ar(Er), j.init(r);
  let e = null;
  Tr.subscribe(async (n) => {
    e && (e.$destroy(), window.scroll({ top: 0 }));
    const i = Qe().find((E) => E.slug === n.slug);
    if (!i) {
      console.warn("template not found");
      return;
    }
    const a = Fr(n.locale);
    window.__LG__ = a;
    const c = new Map([["LG", a]]),
      { component: l } = await i.loader(),
      u = document.getElementById("page");
    e = new l({ target: u, props: {}, hydrate: t, context: c });
  }),
    (localStorage.getItem("TINGYUN_STORAGE") || "").includes("apm2") &&
      localStorage.removeItem("TINGYUN_STORAGE");
}
Array.prototype.toObject = function (t, r = (e) => e) {
  return this.reduce((e, n) => ((e[n[t]] = r(n)), e), {});
};
EventTarget.prototype.subscribe = function (t, r) {
  return this.addEventListener(t, r), () => this.removeEventListener(t, r);
};
const jr = "modulepreload",
  Kr = function (t) {
    return "/p-106/" + t;
  },
  Dt = {},
  T = function (r, e, n) {
    if (!e || e.length === 0) return r();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      e.map((i) => {
        if (((i = Kr(i)), i in Dt)) return;
        Dt[i] = !0;
        const a = i.endsWith(".css"),
          c = a ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let E = o.length - 1; E >= 0; E--) {
            const b = o[E];
            if (b.href === i && (!a || b.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${c}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = a ? "stylesheet" : jr),
          a || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = i),
          document.head.appendChild(u),
          a)
        )
          return new Promise((E, b) => {
            u.addEventListener("load", E),
              u.addEventListener("error", () =>
                b(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => r());
  };
var d = ((t) => (
  (t.HOME = "/"),
  (t.CRYPTO_TRADING_COMPETITION_1_ON_1 = "/1-on-1-crypto-trading-competition"),
  (t.NOT_FOUND = "/404"),
  (t.ABOUT = "/about"),
  (t.ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE = "/about/ambassador/kevin-de-bruyne"),
  (t.ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE_AUDIT =
    "/about/ambassador/kevin-de-bruyne-audit"),
  (t.ABOUT_BRAND_STYLE_GUIDE = "/about/brand-style-guide"),
  (t.ACCOUNT_FEEDBACK = "/account/feedback"),
  (t.ACCOUNT_OVERVIEW = "/account/overview"),
  (t.ACCOUNT_PREMIUM_CENTER = "/account/points/my-privileges"),
  (t.ACCOUNT_SECURITY = "/account/security"),
  (t.ACCOUNT_SECURITY_PASSKEY = "/account/security/passkeys"),
  (t.ACCOUNT_VERIFICATION = "/account/verification"),
  (t.ACCOUNT_API_MANAGEMENT = "/account/api-management"),
  (t.ACCOUNT_TAX_REPORTING = "/account/tax-reporting"),
  (t.ACCOUNT_SUB_ACCOUNTS = "/account/sub-accounts"),
  (t.ACCOUNT_INVITE_FRIENDS = "/account/referral/invite-friends"),
  (t.ACCOUNT_INVITE_FRIENDS_ENTRY = "/account/referral/invite-friends-entry"),
  (t.ACCOUNT_SETTING = "/account/setting"),
  (t.ACCOUNT_SECURITY_AUTHORIZATION = "/account/security/authorization"),
  (t.ACCOUNT_INVITE_FRIENDS_MY_INVITATIONS =
    "/account/referral/invite-friends/my-invitations"),
  (t.SHARE_PREMIUM = "/account/referral/share-premium"),
  (t.ACCOUNT_SECURITY_DEVICE_MANAGE = "/account/security/device"),
  (t.ACCOUNT_SECURITY_DEVICE_HISTORY = "/account/security/device/history"),
  (t.KOL_LANDING = "/activity/all-star"),
  (t.KOL_LANDING_ACTIVITY = "/activity/all-star/kol"),
  (t.CRYPTO_COIN_FLIP = "/activity/crypto-coin-flip"),
  (t.CRYPTO_TRADING_REBATES = "/activity/crypto-trading-rebates"),
  (t.EXCLUSIVE_COUPONS = "/activity/exclusive-coupons"),
  (t.KOL_LANDING_PAGE = "/activity/kol"),
  (t.KYC_MYSTERY_BOX = "/activity/mystery-box"),
  (t.PREDICT_ETH_PRICE = "/activity/predict-eth-price"),
  (t.ACTIVITY_REGISTER_REWARDS = "/activity/register-rewards"),
  (t.SWAP_ETH = "/activity/swap-eth-to-ethw-eths"),
  (t.SWAP_ETH_HISTORY = "/activity/swap-eth-to-ethw-eths/history"),
  (t.ALL_STAR_PROGRAM = "/affiliate-program"),
  (t.ALL_STAR_PROGRAM_BAK = "/all-star-program"),
  (t.ASSETS_HISTORY = "/assets/contract-history"),
  (t.ASSETS_ORDER_HISTORY = "/assets/contract-order-history"),
  (t.ASSETS_PNL_DETAILS = "/assets/contract-pnl-details"),
  (t.ASSETS_TRADE_HISTORY = "/assets/contract-trade-history"),
  (t.ASSETS_CONVERT_HISTORY = "/assets/conversion-history"),
  (t.ASSETS_CONVERT_FAQ = "/assets/convert-faq"),
  (t.ASSETS_TRANSFER = "/assets/cross-platform-transfer"),
  (t.ASSETS_DEPOSIT = "/assets/deposit"),
  (t.ASSETS_DEPOSIT_FAQ = "/assets/deposit/faq"),
  (t.ASSETS_DETAILS = "/assets/details"),
  (t.ASSETS_FUNDS = "/assets/funds"),
  (t.ASSETS_MARGIN_HISTORY = "/assets/margin-history"),
  (t.ASSETS_MARGIN_TRADE_BORROW_HISTORY =
    "/assets/margin-trade-borrow-history"),
  (t.ASSETS_MARGIN_TRADE_INTEREST_HISTORY =
    "/assets/margin-trade-interest-history"),
  (t.ASSETS_MARGIN_TRADE_ORDER_HISTORY = "/assets/margin-trade-order-history"),
  (t.ASSETS_MARGIN_TRADE_REPAY_HISTORY = "/assets/margin-trade-repay-history"),
  (t.ASSETS_MARGIN_TRADE_TRADE_HISTORY = "/assets/margin-trade-trade-history"),
  (t.ASSETS_OVERVIEW = "/assets/overview"),
  (t.ASSETS_SPOT_ACCOUNT = "/assets/spot-account"),
  (t.ASSETS_CONTRACT_ACCOUNT = "/assets/contract-account"),
  (t.ASSETS_MARGIN_ACCOUNT = "/assets/margin-account"),
  (t.ASSETS_INVESTMENT_ACCOUNT = "/assets/investment-account"),
  (t.ASSETS_SPOT_ORDER = "/assets/spot-order-history"),
  (t.ASSETS_SPOT_HISTORY = "/assets/spot-history"),
  (t.ASSETS_SPOT_PNL_DETAILS = "/assets/spot-pnl-history"),
  (t.ASSETS_SPOT_TRADE = "/assets/spot-trade-history"),
  (t.ASSETS_WITHDRAWAL = "/assets/withdrawal"),
  (t.ASSETS_WITHDRAWAL_FAQ = "/assets/withdrawal/faq"),
  (t.ASSETS_FIAT_ACCOUNT = "/assets/fiat-account"),
  (t.ASSETS_WITHDRAWAL_ADDRESS = "/assets/withdrawal-address"),
  (t.ASSETS_WITHDRAWAL_CONFIRM = "/assets/withdrawal-confirm"),
  (t.BUY_CRYPTO_HISTORY = "/assets/buy-crypto-history"),
  (t.ASSETS_BUY_SELL_CRYPTO_HISTORY = "/assets/fiat-buy-sell-crypto-history"),
  (t.ASSETS_FIAT_DEPOSIT = "/assets/fiat-deposit"),
  (t.ASSETS_FIAT_WITHDRAW = "/assets/fiat-withdraw"),
  (t.ASSETS_TRADING_ACCOUNT = "/assets/trading-account"),
  (t.ASSETS_FUND_ACCOUNT = "/assets/fund-account"),
  (t.ASSETS_BORROWING_DETAILS = "/assets/borrowing-details"),
  (t.ASSETS_ORDER_HISTORY_GROUP = "/assets/order-history"),
  (t.ASSETS_DEPOSIT_WITHDRAW_HISTORY = "/assets/deposit-withdraw-history"),
  (t.ASSETS_TRANSFER_CONVERT_HISTORY = "/assets/transfer-convert-history"),
  (t.ASSETS_ACCOUNT_UPGRADE_H5 = "/assets/account-upgrade"),
  (t.ASSETS_LENDING_ACCOUNT = "/assets/lending-account"),
  (t.ASSETS_LENDING_HISTORY = "/assets/lending-history"),
  (t.BONUS = "/rewards-hub"),
  (t.BONUS_CENTER = "/bonus-center"),
  (t.BUY_CRYPTO = "/buy-crypto"),
  (t.BUY_CRYPTO_BUY_ALGO = "/buy-crypto/buy-algorand-algo"),
  (t.BUY_CRYPTO_BUY_AVAX = "/buy-crypto/buy-avax-avalanche"),
  (t.BUY_CRYPTO_BUY_BTC = "/buy-crypto/buy-bitcoin"),
  (t.BUY_CRYPTO_BUY_BCH = "/buy-crypto/buy-bitcoin-cash-bch"),
  (t.BUY_CRYPTO_BUY_ADA = "/buy-crypto/buy-cardano-ada"),
  (t.BUY_CRYPTO_BUY_MANA = "/buy-crypto/buy-decentraland-mana"),
  (t.BUY_CRYPTO_BUY_DENT = "/buy-crypto/buy-dent"),
  (t.BUY_CRYPTO_BUY_DOGE = "/buy-crypto/buy-dogecoin"),
  (t.BUY_CRYPTO_BUY_ETHEREUM = "/buy-crypto/buy-ethereum"),
  (t.BUY_CRYPTO_BUY_LTC = "/buy-crypto/buy-litecoin-ltc"),
  (t.BUY_CRYPTO_BUY_LRC = "/buy-crypto/buy-loopring-lrc"),
  (t.BUY_CRYPTO_BUY_MATIC = "/buy-crypto/buy-matic-polygon"),
  (t.BUY_CRYPTO_BUY_DOT = "/buy-crypto/buy-polkadot-dot"),
  (t.BUY_CRYPTO_BUY_SAND = "/buy-crypto/buy-sandbox-crypto-sand"),
  (t.BUY_CRYPTO_BUY_SHIB = "/buy-crypto/buy-shiba-inu-coin-shib"),
  (t.BUY_CRYPTO_BUY_SOL = "/buy-crypto/buy-solana-sol"),
  (t.BUY_CRYPTO_BUY_XTZ = "/buy-crypto/buy-tezos-xtz"),
  (t.BUY_CRYPTO_BUY_TRX = "/buy-crypto/buy-tron-trx"),
  (t.BUY_CRYPTO_BUY_USDC = "/buy-crypto/buy-usdc"),
  (t.BUY_CRYPTO_BUY_XLM = "/buy-crypto/buy-xlm-stellar-lumens"),
  (t.BUY_CRYPTO_BUY_XRP = "/buy-crypto/buy-xrp-ripple"),
  (t.BUY_CRYPTO_BUY_ZEC = "/buy-crypto/buy-zcash-zec"),
  (t.BUY_CRYPTO_FAQ = "/buy-crypto/faq"),
  (t.P2P_HOME = "/buy-crypto/fiat"),
  (t.P2P_MAKER_HOME = "/buy-crypto/fiat/advertiser"),
  (t.P2P_ADVERTISER_REVIEW = "/buy-crypto/fiat/advertiser/leave-a-review"),
  (t.P2P_CREATE_AN_AD = "/buy-crypto/fiat/create-an-ad"),
  (t.P2P_FAQ = "/buy-crypto/fiat/faq"),
  (t.P2P_MY_ADS = "/buy-crypto/fiat/my-ads"),
  (t.P2P_ADS_DETAILS = "/buy-crypto/fiat/my-ads/details"),
  (t.P2P_ADS_EDIT = "/buy-crypto/fiat/my-ads/edit"),
  (t.P2P_ORDERS = "/buy-crypto/fiat/orders"),
  (t.P2P_HOME_MARKET = "/buy-crypto/fiat/p2p-markets"),
  (t.P2P_MERCHANT_APPLY = "/buy-crypto/fiat/p2p-merchant-apply"),
  (t.ASSETS_PAYMENT_METHODS = "/buy-crypto/fiat/payment-methods"),
  (t.P2P_HOME_LOGIN = "/buy-crypto/fiat/place-order"),
  (t.P2P_APPEAL_AN_ORDER = "/buy-crypto/fiat/place-order/appeal-an-order"),
  (t.P2P_ORDER_DETAILS = "/buy-crypto/fiat/place-order/details"),
  (t.P2P_USER_CENTER = "/buy-crypto/fiat/user-center"),
  (t.P2P_USER_REVIEW = "/buy-crypto/fiat/user-center/review"),
  (t.BUY_CRYPTO_HOW_TO_BUY = "/buy-crypto/how-to-buy-bitcoin"),
  (t.BUY_CRYPTO_PLACE_ORDER = "/buy-crypto/place-order"),
  (t.BUY_CRYPTO_PLACE_ORDER_HISTORY = "/buy-crypto/place-order/history"),
  (t.BUY_CRYPTO_CARD_HISTORY = "/buy-crypto/card/history"),
  (t.BUY_CRYPTO_CARD_ORDER_CONFIRM = "/buy-crypto/card/order-confirm"),
  (t.BUY_CRYPTO_CARD_ORDER_FAIL = "/buy-crypto/card/order-fail"),
  (t.BUY_CRYPTO_CARD_ORDER_SUCCESS = "/buy-crypto/card/order-success"),
  (t.BUY_CRYPTO_CARD_PAY = "/buy-crypto/card/pay"),
  (t.BUY_CRYPTO_CARD_PAYMENT = "/buy-crypto/card/payment"),
  (t.BUY_CRYPTO_CARD_PLACE_ORDER = "/buy-crypto/card/place-order"),
  (t.BUY_CRYPTO_CARD_DETAILS = "/buy-crypto/card/card-details"),
  (t.BUY_CRYPTO_CARD_SELL_CONFIRM = "/buy-crypto/card/sell-confirm"),
  (t.BUY_CRYPTO_CARD_SELL_RESULT = "/buy-crypto/card/sell-result"),
  (t.CONTRACT_DATA_INSIGHT = "/contract/data-insight"),
  (t.CONTRACT_FUNDING_HISTORY = "/contract/funding-history"),
  (t.CONTRACT_INDEX_PRICE = "/contract/index-price"),
  (t.CONTRACT_INSURANCE_FUND = "/contract/insurance-fund"),
  (t.CONTRACT_INTRODUCTION = "/contract/introduction"),
  (t.CONTRACT_MARK_PRICE = "/contract/mark-price"),
  (t.CONTRACT_PERPETUAL_CONTRACT = "/contract/perpetual-contract"),
  (t.CONTRACT_LEVERAGE_MARGIN = "/contract/leverage-margin"),
  (t.BECOME_A_TRADER = "/copy-trading/become-a-trader"),
  (t.COPY_TRADING_DRAW = "/copy-trading/draw"),
  (t.COPY_SETTINGS = "/copy-trading/follower-view/copy-setting"),
  (t.COPIER_DETAIL = "/copy-trading/follower-view/details"),
  (t.TRADER_HOME_FOLLOWER_VIEW = "/copy-trading/follower-view/home"),
  (t.COPY_TRADING_FAQ = "/copy-trading/home/faq"),
  (t.COPY_LEADERBOARD = "/copy-trading/leaderboard"),
  (t.COPY_TRADING_LIST = "/copy-trading/list"),
  (t.TRADER_HOME = "/copy-trading/trader-view/home"),
  (t.COPY_TRADING_TRADER_SETTING = "/copy-trading/trader-view/setting"),
  (t.GMX_TRADER_LIST = "/copy-trading/gmx-trader-list"),
  (t.CONTRACT_WARS = "/crypto-trading-competition"),
  (t.BITSHIN_TRADE_COMPETITION = "/crypto-trading-competition/bitshin"),
  (t.WORLD_CUP = "/crypto-trading-competition/football-frenzy"),
  (t.MO_TRADE_COMPETITION = "/crypto-trading-competition/mo-diseax"),
  (t.PT_ARENA_5 = "/crypto-trading-competition/pt-arena-5"),
  (t.MARGIN_TRADING_COMPETITION =
    "/crypto-trading-competition/that-martini-guy"),
  (t.DOWNLOAD = "/download"),
  (t.DOWNLOAD_IOS_PRO = "/download/ios-pro"),
  (t.EARN_HOME = "/earn-crypto"),
  (t.EARN_SAVINGS_ACCOUNT = "/earn-crypto/savings-account"),
  (t.EARN_MY_EARNINGS = "/earn-crypto/my-earnings"),
  (t.EARN_LAUNCHPOOL = "/earn-crypto/launchpool"),
  (t.EARN_LIMITED_TIME_OFFER = "/earn-crypto/limited-time-offer"),
  (t.EARN_PREDICT_TO_EARN = "/crypto-prediction-market"),
  (t.EARN_PREDICT_TO_EARN_DETAIL = "/crypto-prediction-market/detail"),
  (t.EARN_PREDICT_TO_EARN_HISTORY = "/crypto-prediction-market/history"),
  (t.EARN_CRYPTO_CONVERTER = "/crypto-converter"),
  (t.EARN_LAUNCHPAD = "/crypto-launchpad"),
  (t.EARN_LAUNCHPAD_DETAIL = "/crypto-launchpad/detail"),
  (t.EARN_LAUNCHPAD_HISTORY = "/crypto-launchpad/history"),
  (t.EVENT_SUBSCRIPTION = "/event/subscription"),
  (t.FEES_CONDITIONS = "/fees-conditions"),
  (t.BIG_CLIENT_DASHBOARD = "/institutional-account-dashboard"),
  (t.INSTITUTIONAL_CLIENT = "/institutional-clients"),
  (t.INVESTMENT = "/investment"),
  (t.KOL_HOME = "/kol/home"),
  (t.KOL_GENERALIZE = "/kol/generalize"),
  (t.KOL_MATERIAL = "/kol/material"),
  (t.KOL_COMMISSION = "/kol/commission"),
  (t.KOL_ACCOUNTS = "/kol/accounts"),
  (t.KOL_SUB_AGENT = "/kol/sub-agent"),
  (t.KOL_WITHDRAW = "/kol/withdraw"),
  (t.KOL_EQUITY_DETAILS = "/kol/equity-details"),
  (t.KOL_PERSONAL = "/kol/personal"),
  (t.KOL_AGENT_DEAL = "/kol/agent-deal"),
  (t.KOL_PREMIUM = "/kol/premium"),
  (t.LEARN_CRYPTO = "/learn-crypto"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES = "/learn-crypto/crypto-derivatives"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES_DERIVATIVES =
    "/learn-crypto/crypto-derivatives/derivatives"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES_LEVERAGE_LIQUIDATION =
    "/learn-crypto/crypto-derivatives/leverage-liquidation"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES_MARGIN =
    "/learn-crypto/crypto-derivatives/margin"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES_PERPETUAL_CONTRACTS =
    "/learn-crypto/crypto-derivatives/perpetual-contracts"),
  (t.LEARN_CRYPTO_CRYPTO_DERIVATIVES_QUIZ =
    "/learn-crypto/crypto-derivatives/quiz"),
  (t.LEARN_CRYPTO_CRYPTO_FIAT = "/learn-crypto/crypto-fiat"),
  (t.LEARN_CRYPTO_CRYPTO_FIAT_HOW_DOES_CRYPTO_WORK =
    "/learn-crypto/crypto-fiat/how-does-crypto-work"),
  (t.LEARN_CRYPTO_CRYPTO_FIAT_QUIZ = "/learn-crypto/crypto-fiat/quiz"),
  (t.LEARN_CRYPTO_CRYPTO_FIAT_WHAT_IS_CRYPTO =
    "/learn-crypto/crypto-fiat/what-is-crypto"),
  (t.LEARN_CRYPTO_CRYPTO_FIAT_WHAT_IS_FIAT =
    "/learn-crypto/crypto-fiat/what-is-fiat"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO = "/learn-crypto/how-to-buy-crypto"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_CREDIT_CARD =
    "/learn-crypto/how-to-buy-crypto/credit-card"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_ACTIVATE =
    "/learn-crypto/how-to-buy-crypto/otc-activate"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_DEPOSIT =
    "/learn-crypto/how-to-buy-crypto/otc-deposit"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_PURCHASE =
    "/learn-crypto/how-to-buy-crypto/otc-purchase"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_QUIZ =
    "/learn-crypto/how-to-buy-crypto/quiz"),
  (t.LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_TRANSFER =
    "/learn-crypto/how-to-buy-crypto/transfer"),
  (t.LEARN_CRYPTO_HOW_TO_EARN_CRYPTO = "/learn-crypto/how-to-earn-crypto"),
  (t.LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_LAUNCHPAD =
    "/learn-crypto/how-to-earn-crypto/phemex-launchpad"),
  (t.LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_LAUNCHPOOL =
    "/learn-crypto/how-to-earn-crypto/phemex-launchpool"),
  (t.LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_SAVINGS =
    "/learn-crypto/how-to-earn-crypto/phemex-savings"),
  (t.LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_QUIZ =
    "/learn-crypto/how-to-earn-crypto/quiz"),
  (t.LEARN_CRYPTO_PERPETUAL_CONTRACTS = "/learn-crypto/perpetual-contracts"),
  (t.LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_ADJUST_MARGIN =
    "/learn-crypto/perpetual-contracts/how-to-adjust-margin"),
  (t.LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_OPEN_POSITION =
    "/learn-crypto/perpetual-contracts/how-to-open-position"),
  (t.LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_SET_OR_ADJUST_LEVERAGE =
    "/learn-crypto/perpetual-contracts/how-to-set-or-adjust-leverage"),
  (t.LEARN_CRYPTO_PERPETUAL_CONTRACTS_QUIZ =
    "/learn-crypto/perpetual-contracts/quiz"),
  (t.LEARN_CRYPTO_SPOT_TRADING = "/learn-crypto/spot-trading"),
  (t.LEARN_CRYPTO_SPOT_TRADING_INTRODUCTION =
    "/learn-crypto/spot-trading/introduction"),
  (t.LEARN_CRYPTO_SPOT_TRADING_QUIZ = "/learn-crypto/spot-trading/quiz"),
  (t.LEARN_CRYPTO_SPOT_TRADING_SPOT_CONDITIONAL_ORDERS =
    "/learn-crypto/spot-trading/spot-conditional-orders"),
  (t.LEARN_CRYPTO_SPOT_TRADING_SPOT_LIMIT_ORDERS =
    "/learn-crypto/spot-trading/spot-limit-orders"),
  (t.LEARN_CRYPTO_SPOT_TRADING_SPOT_MARKET_ORDERS =
    "/learn-crypto/spot-trading/spot-market-orders"),
  (t.LEARN_CRYPTO_SPOT_TRADING_TOKENBOT =
    "/learn-crypto/spot-trading/tokenbot"),
  (t.LEGEND_TRADING_BIND_CARD = "/legend-trading/bind-card"),
  (t.LEGEND_TRADING_MANAGE_CARD = "/legend-trading/manage-card"),
  (t.LEGEND_TRADING_SYNC_KYC = "/legend-trading/sync-kyc"),
  (t.LEGEND_TRADING_WRITE_QUESTIONNAIRE =
    "/legend-trading/write-questionnaire"),
  (t.LEGEND_TRADING_BILLING_ADDRESS = "/legend-trading/billing-address"),
  (t.LEGEND_TRADING_CARD_BINDING = "/legend-trading/card-binding"),
  (t.LEGEND_TRADING_PAYMENT = "/legend-trading/payment"),
  (t.LOGIN = "/login"),
  (t.LOGOUT = "/logout"),
  (t.REGISTER_LANDING_PAGE = "/lp-crypto-platform"),
  (t.LP_CRYPTO_PLATFORM = "/lp-crypto-platform-v2"),
  (t.TESLA_GIVEAWAY = "/lp-tesla-giveaway"),
  (t.TRADING_DEPOSIT_BONUS = "/lp-trading-deposit-bonus"),
  (t.DEPOSIT_DAZZLE_MDX = "/lp-trading-deposit-bonus/mdx"),
  (t.MARKETS = "/markets"),
  (t.OFFICIAL_VERIFICATION = "/official-verification"),
  (t.OTC_LEGEND_TRADING = "/otc/legend-trading"),
  (t.OTC_LEGEND_TRADING_HISTORY = "/otc/legend-trading/history"),
  (t.PHEMEX_PLATFORM = "/phemex-platform"),
  (t.PREMIUM_ARCHIVED = "/premium/archived"),
  (t.PROMOTIONS = "/promotions"),
  (t.CHECK_ACCOUNT = "/proof-of-reserves"),
  (t.REGISTER = "/register"),
  (t.REGISTER_VERIFIED = "/register-verified"),
  (t.REGISTER_VT1 = "/register-vt1"),
  (t.RESET_PASSWORD = "/reset-password"),
  (t.RESET_SECURITY = "/reset-security"),
  (t.OAUTH_AUTHORIZE = "/oauth"),
  (t.OAUTH_AUTHORIZE_LOGIN = "/oauth-login"),
  (t.SECURITY = "/security"),
  (t.SITEMAP = "/sitemap"),
  (t.SPOT_MARGIN_DATA = "/spot/margin-data"),
  (t.STUDENT_FOUNDATION = "/student-foundation"),
  (t.VIP_PROGRAM = "/vip"),
  (t.VIP_PORTAL = "/vip-portal"),
  (t.WELCOME = "/welcome"),
  (t.YEAR_IN_REVIEW_2022 = "/year-in-review-2022"),
  (t.WEB3_SOUL_PASS = "/web3/soulpass"),
  (t.WEB3_EQUITY = "/web3/pt"),
  (t.WEB3_EQUITY_BENEFITS = "/web3/pt-benefits"),
  (t.WEB3_XPT_PREMINING = "/web3/premining"),
  (t.WEB3_PHEMEXIA = "/web3/phemexia"),
  (t.WEB3_ASSETS_OVERVIEW = "/web3/assets/overview"),
  (t.WEB3_STAKE = "/web3/stake/dashboard"),
  (t.WEB3_STAKE_BUYBACK_HISTORY = "/web3/stake/buyback-history"),
  (t.WEB3_STAKE_STAKE_HISTORY = "/web3/stake/stake-history"),
  (t.WEB3_DUTCH_AUCTION = "/web3/pt-bidding"),
  (t.WEB3_AIRDROPS_CRYPTO_MAS = "/web3/airdrops/cryptomas"),
  (t.WEB3_LENDING_MARKET = "/web3/lending"),
  (t.WEB3_LENDING_DETAILS = "/web3/lending/details-info"),
  (t.WEB3_LENDING_DASHBOARD = "/web3/lending/dashboard"),
  (t.FIAT_BUY_CRYPTO_BUY_CARD = "/fiat/buy-crypto/buy/card"),
  (t.FIAT_BUY_CRYPTO_BUY_CONFIRM = "/fiat/buy-crypto/buy/confirm"),
  (t.FIAT_BUY_CRYPTO_BUY_PAYMENT_METHOD =
    "/fiat/buy-crypto/buy/payment-method"),
  (t.FIAT_BUY_CRYPTO_BUY_TRANSAK = "/fiat/buy-crypto/buy/transak"),
  (t.FIAT_BUY_CRYPTO_BUY_TRANSAK_RESULT =
    "/fiat/buy-crypto/buy/transak/result"),
  (t.FIAT_BUY_CRYPTO_BUY_RESULT = "/fiat/buy-crypto/buy/result"),
  (t.FIAT_BUY_CRYPTO_PLACE_ORDER = "/fiat/buy-crypto/place-order"),
  (t.FIAT_BUY_CRYPTO_SELL_CARD = "/fiat/buy-crypto/sell/card"),
  (t.FIAT_BUY_CRYPTO_SELL_CONFIRM = "/fiat/buy-crypto/sell/confirm"),
  (t.FIAT_BUY_CRYPTO_SELL_PAYMENT_METHOD =
    "/fiat/buy-crypto/sell/payment-method"),
  (t.FIAT_BUY_CRYPTO_SELL_RESULT = "/fiat/buy-crypto/sell/result"),
  (t.FIAT_DEPOSIT = "/fiat/deposit"),
  (t.FIAT_WITHDRAW = "/fiat/withdraw"),
  (t.FIAT_WITHDRAW_ORDER_CONFIRM = "/fiat/withdraw/order-confirm"),
  (t.FIAT_DEPOSIT_TRANSFER_INFO = "/fiat/deposit/transfer-info"),
  (t.FIAT_WITHDRAW_ORDER_RESULT = "/fiat/withdraw/order-result"),
  (t.FIAT_B2C_URL_PAYMENT = "/fiat/b2c-url-payment"),
  (t.FIAT_B2C_PAYMENT_RESULT = "/fiat/b2c-payment-result"),
  (t.FIAT_ORDER_LIST = "/fiat/order-list"),
  (t.STRATEGY_SQUARE = "/trading-bots"),
  (t.MOC_STRATEGY_SQUARE = "/moc/trading-bots"),
  (t.STRATEGY_DETAIL = "/bot-detail"),
  (t.MOC_STRATEGY_DETAIL = "/moc/bot-detail"),
  (t.FUTURE_GRIDS_TRADING_CONTEST = "/trading-bots/futuregrids-contest"),
  (t.XPT_AIRDROP = "/web3/xpt-infinity"),
  (t.CEX_AIRDROP = "/web3/xpt-infinity/cryptic-bounty-airdrop"),
  (t.DEX_AIRDROP = "/web3/xpt-infinity/dexclusive-airdrop"),
  (t.FTX_AIRDROP = "/web3/xpt-infinity/resurge-rewards-airdrop"),
  (t.WEB3_SPACEID = "/web3/airdrops/spaceid"),
  (t.WEB3_ETH = "/web3/airdrops/100eth"),
  (t.WEB3_1000BTC = "/web3/airdrops/1000btc"),
  (t.WEB3_SOCIAL_TRADE_HOME = "/web3/phemex-pulse"),
  (t.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS = "/web3/phemex-pulse/explore-groups"),
  (t.WEB3_SOCIAL_TRADE_MY_GROUPS = "/web3/phemex-pulse/my-groups"),
  (t.WEB3_SOCIAL_TRADE_CAST_DETAIL = "/web3/phemex-pulse/cast"),
  (t.WEB3_SOCIAL_TRADE_GROUP_DETAIL = "/web3/phemex-pulse/group"),
  (t.WEB3_SOCIAL_TRADE_PT_REWARDS = "/web3/phemex-pulse/pt-rewards"),
  (t.WEB3_SOCIAL_TRADE_MOBILE_PT_REWARDS = "/web3/phemex-pulse/m-pt-rewards"),
  (t.WEB3_SOCIAL_TRADE_INVITE = "/phemex-pulse/invite-friends-group"),
  (t.WEB3_SOCIAL_TRADE_INSCRIPTION_MARKETPLACE =
    "/web3/phemex-pulse/inscription-marketplace"),
  (t.WEB3_SOCIAL_TRADE_INSCRIPTION_MARKETPLACE_h5 =
    "/web3/phemex-pulse/m-inscription-marketplace"),
  (t.WEB3_SOCIAL_TRADE_MY_GROUP_PASS = "/web3/phemex-pulse/my-group-pass"),
  (t.WEB3_SOCIAL_TRADE_GROUP_APPLY_MODERATOR_H5 =
    "/web3/phemex-pulse/group-apply-moderator"),
  (t.WEB3_SOCIAL_TRADE_PULSE_DROP = "/web3/phemex-pulse/pulsedrop"),
  (t.WEB3_SOCIAL_TRADE_MOBILE_PULSE_DROP = "/web3/phemex-pulse/m-pulsedrop"),
  (t.WEB3_SOCIAL_TRADE_PULSE_PROFILE = "/web3/phemex-pulse/profile"),
  (t.WEB3_SOCIAL_TRADE_PULSE_PROFILE_EDIT = "/web3/phemex-pulse/edit-profile"),
  (t.WEB3_PULSE_PULSE_ACTIVITY_H5 = "/web3/phemex-pulse/m-pulse-activity"),
  (t.PT_PREHEAT_AIRDROP = "/web3/pt-to-the-moon"),
  (t.BROKER_INDEX = "/broker"),
  (t.BROKER_DASHBOARD = "/broker/dashboard"),
  (t.BROKER_TRADERS = "/broker/traders"),
  (t.BROKER_COMMISSIONS_CONTRACT = "/broker/contract-commissions"),
  (t.BROKER_COMMISSIONS_SPOT = "/broker/spot-commissions"),
  (t.BROKER_ASSETS = "/broker/assets"),
  (t.BROKER_USER_INFO = "/broker/user-info"),
  (t.APIS = "/home-api"),
  (t.EMAIL_SUBSCRIBE = "/mail/subscribe"),
  (t.REDIRECT = "/redirect"),
  (t.CS_EVALUATE = "/cs/evaluate"),
  (t.TELEGRAM_APP_AUTH = "/oauth/telegram/app/auth"),
  t
))(d || {});
const Sr = [
  {
    slug: d.ASSETS_OVERVIEW,
    loader: () =>
      T(
        () => import("./chunk-357abacd.js"),
        [
          "js/chunk-357abacd.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b7d1088f.js",
          "js/chunk-19eee52c.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/CurrentTransfer-044f9d8e.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-a50a1c93.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-d80e4578.js",
          "js/chunk-cce30434.js",
          "js/chunk-0720337d.js",
          "js/chunk-fb06e4c9.js",
          "js/chunk-d010e407.js",
          "js/chunk-a79095bb.js",
          "css/StartUpgrade-2e16eba0.css",
          "js/chunk-a4879e56.js",
          "css/index-bfa76de7.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_TRANSFER,
    loader: () =>
      T(
        () => import("./chunk-8da71c44.js"),
        [
          "js/chunk-8da71c44.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-a9a63979.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "css/index-1c042dec.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_SPOT_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-d9779d72.js"),
        [
          "js/chunk-d9779d72.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-cd813617.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-d0502630.js",
          "js/chunk-1c9529e1.js",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "js/chunk-30b29945.js",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-f0dda25c.css",
          "js/chunk-ce3ddd0d.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertHistoryPage-1d39b85c.css",
          "js/chunk-69c1e511.js",
          "css/PtConvertPage-3a9a2a3f.css",
          "css/index-1d0427e2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_SPOT_PNL_DETAILS,
    loader: () =>
      T(
        () => import("./chunk-d9779d72.js"),
        [
          "js/chunk-d9779d72.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-cd813617.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-d0502630.js",
          "js/chunk-1c9529e1.js",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "js/chunk-30b29945.js",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-f0dda25c.css",
          "js/chunk-ce3ddd0d.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertHistoryPage-1d39b85c.css",
          "js/chunk-69c1e511.js",
          "css/PtConvertPage-3a9a2a3f.css",
          "css/index-1d0427e2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_SPOT_ORDER,
    loader: () =>
      T(
        () => import("./chunk-d9779d72.js"),
        [
          "js/chunk-d9779d72.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-cd813617.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-d0502630.js",
          "js/chunk-1c9529e1.js",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "js/chunk-30b29945.js",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-f0dda25c.css",
          "js/chunk-ce3ddd0d.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertHistoryPage-1d39b85c.css",
          "js/chunk-69c1e511.js",
          "css/PtConvertPage-3a9a2a3f.css",
          "css/index-1d0427e2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_SPOT_TRADE,
    loader: () =>
      T(
        () => import("./chunk-d9779d72.js"),
        [
          "js/chunk-d9779d72.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-cd813617.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-d0502630.js",
          "js/chunk-1c9529e1.js",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "js/chunk-30b29945.js",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-f0dda25c.css",
          "js/chunk-ce3ddd0d.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertHistoryPage-1d39b85c.css",
          "js/chunk-69c1e511.js",
          "css/PtConvertPage-3a9a2a3f.css",
          "css/index-1d0427e2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_CONVERT_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-0183fcc3.js"),
        [
          "js/chunk-0183fcc3.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-ce3ddd0d.js",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-30b29945.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertHistoryPage-1d39b85c.css",
          "css/page-e0656a9b.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_TRADE_ORDER_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_TRADE_TRADE_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_TRADE_BORROW_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_TRADE_REPAY_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_TRADE_INTEREST_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-f4072a59.js"),
        [
          "js/chunk-f4072a59.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "js/chunk-b367067b.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/FilterBar-a1d80d94.css",
          "css/index-40108e6a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-564d7595.js"),
        [
          "js/chunk-564d7595.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-8661cbad.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "css/FilterBar-eb2842b1.css",
          "css/index-ef8240c2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_PNL_DETAILS,
    loader: () =>
      T(
        () => import("./chunk-564d7595.js"),
        [
          "js/chunk-564d7595.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-8661cbad.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "css/FilterBar-eb2842b1.css",
          "css/index-ef8240c2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_ORDER_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-564d7595.js"),
        [
          "js/chunk-564d7595.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-8661cbad.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "css/FilterBar-eb2842b1.css",
          "css/index-ef8240c2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_TRADE_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-564d7595.js"),
        [
          "js/chunk-564d7595.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-8661cbad.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "css/FilterBar-eb2842b1.css",
          "css/index-ef8240c2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_DEPOSIT_WITHDRAW_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-ef3b4364.js"),
        [
          "js/chunk-ef3b4364.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-d0502630.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-37931a49.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-0d565e75.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-1d9244ab.js",
          "js/chunk-102e1fa2.js",
          "css/DepositHistory-98ffa7de.css",
          "js/chunk-45a86752.js",
          "js/chunk-178355d6.js",
          "css/CancelWithdrawDialog-c39b3bd1.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "css/index-139d1938.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_TRANSFER_CONVERT_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-75d091c8.js"),
        [
          "js/chunk-75d091c8.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-d0502630.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-e9fcd192.js",
          "js/chunk-30b29945.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "css/ConvertList-2804be77.css",
          "js/chunk-69c1e511.js",
          "css/PtConvertPage-3a9a2a3f.css",
          "css/index-59a38ced.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_DEPOSIT,
    loader: () =>
      T(
        () => import("./chunk-c83545f5.js"),
        [
          "js/chunk-c83545f5.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-0d565e75.js",
          "js/chunk-567cf265.js",
          "css/Suspended-ff9f246f.css",
          "js/chunk-a50a1c93.js",
          "js/chunk-1d9244ab.js",
          "js/chunk-4f88dad6.js",
          "css/CoinSelect-bb00b763.css",
          "js/chunk-102e1fa2.js",
          "js/chunk-37931a49.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "js/chunk-e62d3684.js",
          "css/NoData-47e507fd.css",
          "css/DepositHistory-98ffa7de.css",
          "css/index-772dff10.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_DEPOSIT_FAQ,
    loader: () =>
      T(
        () => import("./chunk-54d8f7b4.js"),
        [
          "js/chunk-54d8f7b4.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-102e1fa2.js",
          "css/index-829506ac.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_WITHDRAWAL,
    loader: () =>
      T(
        () => import("./chunk-b4ce08b4.js"),
        [
          "js/chunk-b4ce08b4.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-e2aa8b87.js",
          "js/chunk-0d565e75.js",
          "js/chunk-f25d21cf.js",
          "js/chunk-a9a63979.js",
          "js/chunk-e89e3191.js",
          "js/chunk-4fe59fce.js",
          "js/chunk-1d9244ab.js",
          "js/chunk-a50a1c93.js",
          "css/BindGoogleDialog-c6ceb011.css",
          "js/chunk-6753f31e.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-567cf265.js",
          "css/Suspended-ff9f246f.css",
          "js/chunk-178355d6.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-d0502630.js",
          "js/chunk-45a86752.js",
          "js/chunk-41417cb7.js",
          "js/chunk-e62d3684.js",
          "css/NoData-47e507fd.css",
          "css/CancelWithdrawDialog-c39b3bd1.css",
          "js/chunk-97f5d190.js",
          "js/chunk-4f88dad6.js",
          "css/CoinSelect-bb00b763.css",
          "js/chunk-102e1fa2.js",
          "js/chunk-1b92417a.js",
          "css/Popup-64d05b95.css",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7e3f53b8.js",
          "js/chunk-d010e407.js",
          "css/index-ba31fc64.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_WITHDRAWAL_ADDRESS,
    loader: () =>
      T(
        () => import("./chunk-f3820d76.js"),
        [
          "js/chunk-f3820d76.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-0d565e75.js",
          "js/chunk-e2aa8b87.js",
          "js/chunk-f25d21cf.js",
          "js/chunk-a9a63979.js",
          "js/chunk-e89e3191.js",
          "js/chunk-4fe59fce.js",
          "js/chunk-1d9244ab.js",
          "js/chunk-a50a1c93.js",
          "css/BindGoogleDialog-c6ceb011.css",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-d0502630.js",
          "js/chunk-30b29945.js",
          "js/chunk-d010e407.js",
          "js/chunk-4f88dad6.js",
          "css/CoinSelect-bb00b763.css",
          "js/chunk-41417cb7.js",
          "js/chunk-e62d3684.js",
          "css/NoData-47e507fd.css",
          "css/index-fbb5be53.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_WITHDRAWAL_CONFIRM,
    loader: () =>
      T(
        () => import("./chunk-dc041e8c.js"),
        [
          "js/chunk-dc041e8c.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-97f5d190.js",
          "js/chunk-45a86752.js",
          "js/chunk-1d9244ab.js",
          "css/index-6eef87a2.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_WITHDRAWAL_FAQ,
    loader: () =>
      T(
        () => import("./chunk-6789b9ca.js"),
        [
          "js/chunk-6789b9ca.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-f25d21cf.js",
          "css/index-829506ac.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_DETAILS,
    loader: () =>
      T(
        () => import("./chunk-8cc39b22.js"),
        [
          "js/chunk-8cc39b22.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-30b29945.js",
          "js/chunk-45a86752.js",
          "js/chunk-1d9244ab.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-41417cb7.js",
          "js/chunk-e62d3684.js",
          "css/NoData-47e507fd.css",
          "js/chunk-e9fcd192.js",
          "css/ConvertList-2804be77.css",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "js/chunk-37931a49.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-0d565e75.js",
          "js/chunk-102e1fa2.js",
          "css/DepositHistory-98ffa7de.css",
          "js/chunk-178355d6.js",
          "css/CancelWithdrawDialog-c39b3bd1.css",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "css/Layout-98f4c841.css",
          "css/index-042ea640.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_FIAT_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-272d0f37.js"),
        [
          "js/chunk-272d0f37.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-38ecec89.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-05ea8540.js",
          "js/chunk-3c119963.js",
          "css/Ellipsis-6a1672dd.css",
          "css/MobileOperateDropdown-bf5667d2.css",
          "js/chunk-97f5d190.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-a4879e56.js",
          "js/chunk-6753f31e.js",
          "css/index-f9fe649f.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_FUNDS,
    loader: () =>
      T(
        () => import("./chunk-23efe4b7.js"),
        [
          "js/chunk-23efe4b7.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-41417cb7.js",
          "css/NoData-47e507fd.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-4fe59fce.js",
          "js/chunk-0bab3b01.js",
          "css/Table-a6564672.css",
          "js/chunk-250ec437.js",
          "js/chunk-1176ab9a.js",
          "js/chunk-97f5d190.js",
          "css/utils-3c34aaae.css",
          "js/chunk-b4baa004.js",
          "css/ExportButton-fa70858c.css",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "css/index-1eb2133e.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_SPOT_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-61d43269.js"),
        [
          "js/chunk-61d43269.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-33f05589.js",
          "js/chunk-d010e407.js",
          "js/chunk-19eee52c.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "css/Page-e06a01e0.css",
          "js/chunk-0d565e75.js",
          "js/chunk-8503c1cf.js",
          "css/ConvertSmallBalance-fa9b4439.css",
          "js/chunk-b7d1088f.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/CurrentTransfer-044f9d8e.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-a4879e56.js",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-3c119963.js",
          "css/Ellipsis-6a1672dd.css",
          "css/index-c731e248.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_CONTRACT_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-4cd6d490.js"),
        [
          "js/chunk-4cd6d490.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b7d1088f.js",
          "js/chunk-19eee52c.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/CurrentTransfer-044f9d8e.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-8503c1cf.js",
          "css/index-34f6e680.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_MARGIN_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-59b6f04d.js"),
        [
          "js/chunk-59b6f04d.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b7d1088f.js",
          "js/chunk-19eee52c.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/CurrentTransfer-044f9d8e.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-38864a9e.js",
          "js/chunk-a4879e56.js",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-3c17b8a2.js",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "css/index-393fac4c.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_INVESTMENT_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-4271d086.js"),
        [
          "js/chunk-4271d086.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-b7d1088f.js",
          "js/chunk-19eee52c.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/CurrentTransfer-044f9d8e.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-1c258bd0.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-41890d5f.js",
          "css/Switch-aa366baf.css",
          "js/chunk-1b92417a.js",
          "css/Popup-64d05b95.css",
          "js/chunk-38864a9e.js",
          "js/chunk-97f5d190.js",
          "js/chunk-30b29945.js",
          "css/index-54468b0c.css",
        ]
      ),
  },
  {
    slug: d.BUY_CRYPTO_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-d9791b54.js"),
        [
          "js/chunk-d9791b54.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-38ecec89.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-cce30434.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "css/index-b38c6db5.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_BUY_SELL_CRYPTO_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-d9791b54.js"),
        [
          "js/chunk-d9791b54.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-38ecec89.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-cce30434.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "css/index-b38c6db5.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_FIAT_DEPOSIT,
    loader: () =>
      T(
        () => import("./chunk-d9791b54.js"),
        [
          "js/chunk-d9791b54.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-38ecec89.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-cce30434.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "css/index-b38c6db5.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_FIAT_WITHDRAW,
    loader: () =>
      T(
        () => import("./chunk-d9791b54.js"),
        [
          "js/chunk-d9791b54.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-38ecec89.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-cce30434.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "css/index-b38c6db5.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_CONVERT_FAQ,
    loader: () =>
      T(
        () => import("./chunk-e64ac769.js"),
        [
          "js/chunk-e64ac769.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "css/index-b5f8aefc.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_TRADING_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-20d54dfa.js"),
        [
          "js/chunk-20d54dfa.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-1c258bd0.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-3c17b8a2.js",
          "js/chunk-8503c1cf.js",
          "js/chunk-38864a9e.js",
          "js/chunk-a4879e56.js",
          "css/index-535bb68a.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_FUND_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-e9cca10c.js"),
        [
          "js/chunk-e9cca10c.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-2905d827.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-d0502630.js",
          "js/chunk-05ea8540.js",
          "js/chunk-3c119963.js",
          "css/Ellipsis-6a1672dd.css",
          "css/MobileOperateDropdown-bf5667d2.css",
          "js/chunk-33f05589.js",
          "js/chunk-d010e407.js",
          "js/chunk-0d565e75.js",
          "js/chunk-8503c1cf.js",
          "css/ConvertSmallBalance-fa9b4439.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "js/chunk-1c258bd0.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-38864a9e.js",
          "js/chunk-3c17b8a2.js",
          "js/chunk-a4879e56.js",
          "css/index-7ce8dea7.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_BORROWING_DETAILS,
    loader: () =>
      T(
        () => import("./chunk-99d6b4b5.js"),
        [
          "js/chunk-99d6b4b5.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-d0502630.js",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-3d8731c5.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-99cb176f.js",
          "js/chunk-30b29945.js",
          "js/chunk-0bab3b01.js",
          "js/chunk-8503c1cf.js",
          "css/Table-a6564672.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "css/ListContainer-8bc1af21.css",
          "css/index-a81998ee.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_ORDER_HISTORY_GROUP,
    loader: () =>
      T(
        () => import("./chunk-dcc020de.js"),
        [
          "js/chunk-dcc020de.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-2905d827.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-b8a5cf48.js",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-8661cbad.js",
          "js/chunk-ad088372.js",
          "js/chunk-0720337d.js",
          "css/ExportOfflineHistoryDialog-496e9b02.css",
          "js/chunk-f9340c6c.js",
          "css/ExportTaxDeclarationReportTip-cf16dde3.css",
          "js/chunk-8503c1cf.js",
          "js/chunk-30b29945.js",
          "js/chunk-41417cb7.js",
          "js/chunk-e62d3684.js",
          "css/NoData-47e507fd.css",
          "js/chunk-14517ced.js",
          "css/Chart-4cef3b8b.css",
          "css/FilterBar-eb2842b1.css",
          "js/chunk-1c9529e1.js",
          "js/chunk-0bab3b01.js",
          "css/Table-a6564672.css",
          "css/FilterBar-f0dda25c.css",
          "js/chunk-b367067b.js",
          "css/FilterBar-a1d80d94.css",
          "js/chunk-bc168206.js",
          "js/chunk-b4baa004.js",
          "css/ExportButton-fa70858c.css",
          "js/chunk-250ec437.js",
          "js/chunk-ff86a3f7.js",
          "css/Lending-abf0f005.css",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-a50a1c93.js",
          "css/InterestHistory-6bcded83.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "css/Layout-98f4c841.css",
          "js/chunk-34bd0d31.js",
          "css/Button-aed77e2c.css",
          "css/index-124aef94.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_ACCOUNT_UPGRADE_H5,
    loader: () =>
      T(
        () => import("./chunk-50cdef3c.js"),
        [
          "js/chunk-50cdef3c.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-2905d827.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-d80e4578.js",
          "js/chunk-cce30434.js",
          "js/chunk-0720337d.js",
          "js/chunk-fb06e4c9.js",
          "js/chunk-d010e407.js",
          "js/chunk-a79095bb.js",
          "css/StartUpgrade-2e16eba0.css",
          "css/index-86379b3f.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_LENDING_ACCOUNT,
    loader: () =>
      T(
        () => import("./chunk-e881c0e0.js"),
        [
          "js/chunk-e881c0e0.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-2905d827.js",
          "js/chunk-9bf11974.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-1176ab9a.js",
          "js/chunk-97f5d190.js",
          "css/utils-3c34aaae.css",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-d0502630.js",
          "js/chunk-1c258bd0.js",
          "js/chunk-e89e3191.js",
          "js/chunk-a9a63979.js",
          "js/chunk-4fe59fce.js",
          "css/TotalAssets-309c2b68.css",
          "js/chunk-1b92417a.js",
          "css/Popup-64d05b95.css",
          "js/chunk-c2442a46.js",
          "js/chunk-d010e407.js",
          "js/chunk-ff86a3f7.js",
          "js/chunk-8503c1cf.js",
          "css/Lending-abf0f005.css",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-41890d5f.js",
          "css/Switch-aa366baf.css",
          "js/chunk-250ec437.js",
          "js/chunk-a4879e56.js",
          "js/chunk-38864a9e.js",
          "css/index-a7daf58e.css",
        ]
      ),
  },
  {
    slug: d.ASSETS_LENDING_HISTORY,
    loader: () =>
      T(
        () => import("./chunk-6afa649e.js"),
        [
          "js/chunk-6afa649e.js",
          "js/chunk-7aa8f0f3.js",
          "js/chunk-a092f8ee.js",
          "css/drawer-4f2d9581.css",
          "js/chunk-1176ab9a.js",
          "js/chunk-9bf11974.js",
          "js/chunk-97f5d190.js",
          "css/utils-3c34aaae.css",
          "js/chunk-2905d827.js",
          "js/chunk-19eee52c.js",
          "css/Page-e06a01e0.css",
          "js/chunk-d0502630.js",
          "js/chunk-3d8731c5.js",
          "js/chunk-b8a5cf48.js",
          "js/chunk-b1f367f0.js",
          "js/chunk-fd938724.js",
          "css/Footer-43c83e01.css",
          "js/chunk-e62d3684.js",
          "css/Layout-98f4c841.css",
          "js/chunk-bc168206.js",
          "js/chunk-b4baa004.js",
          "css/ExportButton-fa70858c.css",
          "js/chunk-250ec437.js",
          "js/chunk-ff86a3f7.js",
          "js/chunk-8503c1cf.js",
          "css/Lending-abf0f005.css",
          "js/chunk-30b29945.js",
          "js/chunk-cd813617.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-a50a1c93.js",
          "css/InterestHistory-6bcded83.css",
          "js/chunk-c2442a46.js",
          "css/index-73389e8d.css",
        ]
      ),
  },
];
ze(Sr);
Vr(!0, () => new Worker("/p-worker/js/data-worker-b2656089.js")).then();
export {
  at as A,
  st as B,
  B as C,
  Ft as D,
  Pe as E,
  Qr as F,
  Se as G,
  Ot as H,
  F as I,
  bt as J,
  Jr as K,
  Lr as L,
  _t as M,
  Ur as N,
  w as O,
  ue as P,
  C as Q,
  Mr as R,
  pt as S,
  lt as T,
  Xr as U,
  Tr as V,
  fr as W,
  cr as X,
  lr as Y,
  Z as _,
  Br as a,
  Gt as b,
  te as c,
  S as d,
  x as e,
  ee as f,
  v as g,
  T as h,
  Vt as i,
  K as j,
  Ke as k,
  oe as l,
  je as m,
  ve as n,
  V as o,
  zr as p,
  Tt as q,
  Zr as r,
  $e as s,
  U as t,
  J as u,
  W as v,
  j as w,
  ot as x,
  Wt as y,
  Bt as z,
};
//# sourceMappingURL=app-7c71c7a1.js.map
