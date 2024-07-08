var fe = Object.defineProperty;
var pe = (t, r, e) =>
  r in t
    ? fe(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (t[r] = e);
var At = (t, r, e) => (pe(t, typeof r != "symbol" ? r + "" : r, e), e);
Map.prototype.toObject = function (t = (r) => r) {
  return Array.from(this.entries()).reduce(
    (r, [e, o]) => ((r[e] = t(o)), r),
    {}
  );
};
Map.prototype.toArray = function (t = (r) => r) {
  return Array.from(this.values(), t);
};
var ot = function (t, r) {
  return (
    (ot =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, o) {
          e.__proto__ = o;
        }) ||
      function (e, o) {
        for (var n in o)
          Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
      }),
    ot(t, r)
  );
};
function V(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError(
      "Class extends value " + String(r) + " is not a constructor or null"
    );
  ot(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype =
    r === null ? Object.create(r) : ((e.prototype = r.prototype), new e());
}
function de(t, r, e, o) {
  function n(i) {
    return i instanceof e
      ? i
      : new e(function (a) {
          a(i);
        });
  }
  return new (e || (e = Promise))(function (i, a) {
    function c(T) {
      try {
        _(o.next(T));
      } catch (I) {
        a(I);
      }
    }
    function p(T) {
      try {
        _(o.throw(T));
      } catch (I) {
        a(I);
      }
    }
    function _(T) {
      T.done ? i(T.value) : n(T.value).then(c, p);
    }
    _((o = o.apply(t, r || [])).next());
  });
}
function Nt(t, r) {
  var e = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    o,
    n,
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
  function c(_) {
    return function (T) {
      return p([_, T]);
    };
  }
  function p(_) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), _[0] && (e = 0)), e; )
      try {
        if (
          ((o = 1),
          n &&
            (i =
              _[0] & 2
                ? n.return
                : _[0]
                ? n.throw || ((i = n.return) && i.call(n), 0)
                : n.next) &&
            !(i = i.call(n, _[1])).done)
        )
          return i;
        switch (((n = 0), i && (_ = [_[0] & 2, i.value]), _[0])) {
          case 0:
          case 1:
            i = _;
            break;
          case 4:
            return e.label++, { value: _[1], done: !1 };
          case 5:
            e.label++, (n = _[1]), (_ = [0]);
            continue;
          case 7:
            (_ = e.ops.pop()), e.trys.pop();
            continue;
          default:
            if (
              ((i = e.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (_[0] === 6 || _[0] === 2))
            ) {
              e = 0;
              continue;
            }
            if (_[0] === 3 && (!i || (_[1] > i[0] && _[1] < i[3]))) {
              e.label = _[1];
              break;
            }
            if (_[0] === 6 && e.label < i[1]) {
              (e.label = i[1]), (i = _);
              break;
            }
            if (i && e.label < i[2]) {
              (e.label = i[2]), e.ops.push(_);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        _ = r.call(t, e);
      } catch (T) {
        (_ = [6, T]), (n = 0);
      } finally {
        o = i = 0;
      }
    if (_[0] & 5) throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
function H(t) {
  var r = typeof Symbol == "function" && Symbol.iterator,
    e = r && t[r],
    o = 0;
  if (e) return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
        );
      },
    };
  throw new TypeError(
    r ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Q(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e) return t;
  var o = e.call(t),
    n,
    i = [],
    a;
  try {
    for (; (r === void 0 || r-- > 0) && !(n = o.next()).done; ) i.push(n.value);
  } catch (c) {
    a = { error: c };
  } finally {
    try {
      n && !n.done && (e = o.return) && e.call(o);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Z(t, r, e) {
  if (e || arguments.length === 2)
    for (var o = 0, n = r.length, i; o < n; o++)
      (i || !(o in r)) &&
        (i || (i = Array.prototype.slice.call(r, 0, o)), (i[o] = r[o]));
  return t.concat(i || Array.prototype.slice.call(r));
}
function F(t) {
  return this instanceof F ? ((this.v = t), this) : new F(t);
}
function Ee(t, r, e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = e.apply(t, r || []),
    n,
    i = [];
  return (
    (n = {}),
    c("next"),
    c("throw"),
    c("return", a),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function a(R) {
    return function (P) {
      return Promise.resolve(P).then(R, I);
    };
  }
  function c(R, P) {
    o[R] &&
      ((n[R] = function (s) {
        return new Promise(function (u, E) {
          i.push([R, s, u, E]) > 1 || p(R, s);
        });
      }),
      P && (n[R] = P(n[R])));
  }
  function p(R, P) {
    try {
      _(o[R](P));
    } catch (s) {
      b(i[0][3], s);
    }
  }
  function _(R) {
    R.value instanceof F
      ? Promise.resolve(R.value.v).then(T, I)
      : b(i[0][2], R);
  }
  function T(R) {
    p("next", R);
  }
  function I(R) {
    p("throw", R);
  }
  function b(R, P) {
    R(P), i.shift(), i.length && p(i[0][0], i[0][1]);
  }
}
function Te(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t[Symbol.asyncIterator],
    e;
  return r
    ? r.call(t)
    : ((t = typeof H == "function" ? H(t) : t[Symbol.iterator]()),
      (e = {}),
      o("next"),
      o("throw"),
      o("return"),
      (e[Symbol.asyncIterator] = function () {
        return this;
      }),
      e);
  function o(i) {
    e[i] =
      t[i] &&
      function (a) {
        return new Promise(function (c, p) {
          (a = t[i](a)), n(c, p, a.done, a.value);
        });
      };
  }
  function n(i, a, c, p) {
    Promise.resolve(p).then(function (_) {
      i({ value: _, done: c });
    }, a);
  }
}
function v(t) {
  return typeof t == "function";
}
function Bt(t) {
  var r = function (o) {
      Error.call(o), (o.stack = new Error().stack);
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
          e.map(function (o, n) {
            return n + 1 + ") " + o.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = e);
  };
});
function nt(t, r) {
  if (t) {
    var e = t.indexOf(r);
    0 <= e && t.splice(e, 1);
  }
}
var S = (function () {
    function t(r) {
      (this.initialTeardown = r),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (t.prototype.unsubscribe = function () {
        var r, e, o, n, i;
        if (!this.closed) {
          this.closed = !0;
          var a = this._parentage;
          if (a)
            if (((this._parentage = null), Array.isArray(a)))
              try {
                for (var c = H(a), p = c.next(); !p.done; p = c.next()) {
                  var _ = p.value;
                  _.remove(this);
                }
              } catch (s) {
                r = { error: s };
              } finally {
                try {
                  p && !p.done && (e = c.return) && e.call(c);
                } finally {
                  if (r) throw r.error;
                }
              }
            else a.remove(this);
          var T = this.initialTeardown;
          if (v(T))
            try {
              T();
            } catch (s) {
              i = s instanceof et ? s.errors : [s];
            }
          var I = this._finalizers;
          if (I) {
            this._finalizers = null;
            try {
              for (var b = H(I), R = b.next(); !R.done; R = b.next()) {
                var P = R.value;
                try {
                  yt(P);
                } catch (s) {
                  (i = i ?? []),
                    s instanceof et
                      ? (i = Z(Z([], Q(i)), Q(s.errors)))
                      : i.push(s);
                }
              }
            } catch (s) {
              o = { error: s };
            } finally {
              try {
                R && !R.done && (n = b.return) && n.call(b);
              } finally {
                if (o) throw o.error;
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
        e === r ? (this._parentage = null) : Array.isArray(e) && nt(e, r);
      }),
      (t.prototype.remove = function (r) {
        var e = this._finalizers;
        e && nt(e, r), r instanceof t && r._removeParent(this);
      }),
      (t.EMPTY = (function () {
        var r = new t();
        return (r.closed = !0), r;
      })()),
      t
    );
  })(),
  Mt = S.EMPTY;
function xt(t) {
  return (
    t instanceof S ||
    (t && "closed" in t && v(t.remove) && v(t.add) && v(t.unsubscribe))
  );
}
function yt(t) {
  v(t) ? t() : t.unsubscribe();
}
var kt = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  it = {
    setTimeout: function (t, r) {
      for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o];
      var n = it.delegate;
      return n != null && n.setTimeout
        ? n.setTimeout.apply(n, Z([t, r], Q(e)))
        : setTimeout.apply(void 0, Z([t, r], Q(e)));
    },
    clearTimeout: function (t) {
      var r = it.delegate;
      return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(t);
    },
    delegate: void 0,
  };
function Ft(t) {
  it.setTimeout(function () {
    throw t;
  });
}
function Ot() {}
function X(t) {
  t();
}
var lt = (function (t) {
    V(r, t);
    function r(e) {
      var o = t.call(this) || this;
      return (
        (o.isStopped = !1),
        e ? ((o.destination = e), xt(e) && e.add(o)) : (o.destination = Oe),
        o
      );
    }
    return (
      (r.create = function (e, o, n) {
        return new at(e, o, n);
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
  })(S),
  Re = Function.prototype.bind;
function rt(t, r) {
  return Re.call(t, r);
}
var Ae = (function () {
    function t(r) {
      this.partialObserver = r;
    }
    return (
      (t.prototype.next = function (r) {
        var e = this.partialObserver;
        if (e.next)
          try {
            e.next(r);
          } catch (o) {
            q(o);
          }
      }),
      (t.prototype.error = function (r) {
        var e = this.partialObserver;
        if (e.error)
          try {
            e.error(r);
          } catch (o) {
            q(o);
          }
        else q(r);
      }),
      (t.prototype.complete = function () {
        var r = this.partialObserver;
        if (r.complete)
          try {
            r.complete();
          } catch (e) {
            q(e);
          }
      }),
      t
    );
  })(),
  at = (function (t) {
    V(r, t);
    function r(e, o, n) {
      var i = t.call(this) || this,
        a;
      if (v(e) || !e)
        a = { next: e ?? void 0, error: o ?? void 0, complete: n ?? void 0 };
      else {
        var c;
        i && kt.useDeprecatedNextContext
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
      return (i.destination = new Ae(a)), i;
    }
    return r;
  })(lt);
function q(t) {
  Ft(t);
}
function ye(t) {
  throw t;
}
var Oe = { closed: !0, next: Ot, error: ye, complete: Ot },
  ft = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Ht(t) {
  return t;
}
function he(t) {
  return t.length === 0
    ? Ht
    : t.length === 1
    ? t[0]
    : function (e) {
        return t.reduce(function (o, n) {
          return n(o);
        }, e);
      };
}
var D = (function () {
  function t(r) {
    r && (this._subscribe = r);
  }
  return (
    (t.prototype.lift = function (r) {
      var e = new t();
      return (e.source = this), (e.operator = r), e;
    }),
    (t.prototype.subscribe = function (r, e, o) {
      var n = this,
        i = Ie(r) ? r : new at(r, e, o);
      return (
        X(function () {
          var a = n,
            c = a.operator,
            p = a.source;
          i.add(c ? c.call(i, p) : p ? n._subscribe(i) : n._trySubscribe(i));
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
      var o = this;
      return (
        (e = ht(e)),
        new e(function (n, i) {
          var a = new at({
            next: function (c) {
              try {
                r(c);
              } catch (p) {
                i(p), a.unsubscribe();
              }
            },
            error: i,
            complete: n,
          });
          o.subscribe(a);
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
        new r(function (o, n) {
          var i;
          e.subscribe(
            function (a) {
              return (i = a);
            },
            function (a) {
              return n(a);
            },
            function () {
              return o(i);
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
  return (r = t ?? kt.Promise) !== null && r !== void 0 ? r : Promise;
}
function me(t) {
  return t && v(t.next) && v(t.error) && v(t.complete);
}
function Ie(t) {
  return (t && t instanceof lt) || (me(t) && xt(t));
}
function Pe(t) {
  return v(t == null ? void 0 : t.lift);
}
function W(t) {
  return function (r) {
    if (Pe(r))
      return r.lift(function (e) {
        try {
          return t(e, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function K(t, r, e, o, n) {
  return new ve(t, r, e, o, n);
}
var ve = (function (t) {
    V(r, t);
    function r(e, o, n, i, a, c) {
      var p = t.call(this, e) || this;
      return (
        (p.onFinalize = a),
        (p.shouldUnsubscribe = c),
        (p._next = o
          ? function (_) {
              try {
                o(_);
              } catch (T) {
                e.error(T);
              }
            }
          : t.prototype._next),
        (p._error = i
          ? function (_) {
              try {
                i(_);
              } catch (T) {
                e.error(T);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._error),
        (p._complete = n
          ? function () {
              try {
                n();
              } catch (_) {
                e.error(_);
              } finally {
                this.unsubscribe();
              }
            }
          : t.prototype._complete),
        p
      );
    }
    return (
      (r.prototype.unsubscribe = function () {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var o = this.closed;
          t.prototype.unsubscribe.call(this),
            !o &&
              ((e = this.onFinalize) === null || e === void 0 || e.call(this));
        }
      }),
      r
    );
  })(lt),
  be = Bt(function (t) {
    return function () {
      t(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    };
  }),
  pt = (function (t) {
    V(r, t);
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
        var o = new mt(this, this);
        return (o.operator = e), o;
      }),
      (r.prototype._throwIfClosed = function () {
        if (this.closed) throw new be();
      }),
      (r.prototype.next = function (e) {
        var o = this;
        X(function () {
          var n, i;
          if ((o._throwIfClosed(), !o.isStopped)) {
            o.currentObservers ||
              (o.currentObservers = Array.from(o.observers));
            try {
              for (
                var a = H(o.currentObservers), c = a.next();
                !c.done;
                c = a.next()
              ) {
                var p = c.value;
                p.next(e);
              }
            } catch (_) {
              n = { error: _ };
            } finally {
              try {
                c && !c.done && (i = a.return) && i.call(a);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        });
      }),
      (r.prototype.error = function (e) {
        var o = this;
        X(function () {
          if ((o._throwIfClosed(), !o.isStopped)) {
            (o.hasError = o.isStopped = !0), (o.thrownError = e);
            for (var n = o.observers; n.length; ) n.shift().error(e);
          }
        });
      }),
      (r.prototype.complete = function () {
        var e = this;
        X(function () {
          if ((e._throwIfClosed(), !e.isStopped)) {
            e.isStopped = !0;
            for (var o = e.observers; o.length; ) o.shift().complete();
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
        var o = this,
          n = this,
          i = n.hasError,
          a = n.isStopped,
          c = n.observers;
        return i || a
          ? Mt
          : ((this.currentObservers = null),
            c.push(e),
            new S(function () {
              (o.currentObservers = null), nt(c, e);
            }));
      }),
      (r.prototype._checkFinalizedStatuses = function (e) {
        var o = this,
          n = o.hasError,
          i = o.thrownError,
          a = o.isStopped;
        n ? e.error(i) : a && e.complete();
      }),
      (r.prototype.asObservable = function () {
        var e = new D();
        return (e.source = this), e;
      }),
      (r.create = function (e, o) {
        return new mt(e, o);
      }),
      r
    );
  })(D),
  mt = (function (t) {
    V(r, t);
    function r(e, o) {
      var n = t.call(this) || this;
      return (n.destination = e), (n.source = o), n;
    }
    return (
      (r.prototype.next = function (e) {
        var o, n;
        (n =
          (o = this.destination) === null || o === void 0 ? void 0 : o.next) ===
          null ||
          n === void 0 ||
          n.call(o, e);
      }),
      (r.prototype.error = function (e) {
        var o, n;
        (n =
          (o = this.destination) === null || o === void 0
            ? void 0
            : o.error) === null ||
          n === void 0 ||
          n.call(o, e);
      }),
      (r.prototype.complete = function () {
        var e, o;
        (o =
          (e = this.destination) === null || e === void 0
            ? void 0
            : e.complete) === null ||
          o === void 0 ||
          o.call(e);
      }),
      (r.prototype._subscribe = function (e) {
        var o, n;
        return (n =
          (o = this.source) === null || o === void 0
            ? void 0
            : o.subscribe(e)) !== null && n !== void 0
          ? n
          : Mt;
      }),
      r
    );
  })(pt),
  st = (function (t) {
    V(r, t);
    function r(e) {
      var o = t.call(this) || this;
      return (o._value = e), o;
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
        var o = t.prototype._subscribe.call(this, e);
        return !o.closed && e.next(this._value), o;
      }),
      (r.prototype.getValue = function () {
        var e = this,
          o = e.hasError,
          n = e.thrownError,
          i = e._value;
        if (o) throw n;
        return this._throwIfClosed(), i;
      }),
      (r.prototype.next = function (e) {
        t.prototype.next.call(this, (this._value = e));
      }),
      r
    );
  })(pt);
function ge(t) {
  return t && v(t.schedule);
}
function dt(t) {
  return t[t.length - 1];
}
function $r(t) {
  return v(dt(t)) ? t.pop() : void 0;
}
function Vt(t) {
  return ge(dt(t)) ? t.pop() : void 0;
}
function zr(t, r) {
  return typeof dt(t) == "number" ? t.pop() : r;
}
var Wt = function (t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function jt(t) {
  return v(t == null ? void 0 : t.then);
}
function Kt(t) {
  return v(t[ft]);
}
function Lt(t) {
  return (
    Symbol.asyncIterator && v(t == null ? void 0 : t[Symbol.asyncIterator])
  );
}
function Ut(t) {
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
var qt = Ce();
function $t(t) {
  return v(t == null ? void 0 : t[qt]);
}
function zt(t) {
  return Ee(this, arguments, function () {
    var e, o, n, i;
    return Nt(this, function (a) {
      switch (a.label) {
        case 0:
          (e = t.getReader()), (a.label = 1);
        case 1:
          a.trys.push([1, , 9, 10]), (a.label = 2);
        case 2:
          return [4, F(e.read())];
        case 3:
          return (
            (o = a.sent()),
            (n = o.value),
            (i = o.done),
            i ? [4, F(void 0)] : [3, 5]
          );
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, F(n)];
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
function L(t) {
  if (t instanceof D) return t;
  if (t != null) {
    if (Kt(t)) return Ye(t);
    if (Wt(t)) return De(t);
    if (jt(t)) return we(t);
    if (Lt(t)) return Qt(t);
    if ($t(t)) return Ne(t);
    if (Xt(t)) return Be(t);
  }
  throw Ut(t);
}
function Ye(t) {
  return new D(function (r) {
    var e = t[ft]();
    if (v(e.subscribe)) return e.subscribe(r);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function De(t) {
  return new D(function (r) {
    for (var e = 0; e < t.length && !r.closed; e++) r.next(t[e]);
    r.complete();
  });
}
function we(t) {
  return new D(function (r) {
    t.then(
      function (e) {
        r.closed || (r.next(e), r.complete());
      },
      function (e) {
        return r.error(e);
      }
    ).then(null, Ft);
  });
}
function Ne(t) {
  return new D(function (r) {
    var e, o;
    try {
      for (var n = H(t), i = n.next(); !i.done; i = n.next()) {
        var a = i.value;
        if ((r.next(a), r.closed)) return;
      }
    } catch (c) {
      e = { error: c };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    r.complete();
  });
}
function Qt(t) {
  return new D(function (r) {
    Me(t, r).catch(function (e) {
      return r.error(e);
    });
  });
}
function Be(t) {
  return Qt(zt(t));
}
function Me(t, r) {
  var e, o, n, i;
  return de(this, void 0, void 0, function () {
    var a, c;
    return Nt(this, function (p) {
      switch (p.label) {
        case 0:
          p.trys.push([0, 5, 6, 11]), (e = Te(t)), (p.label = 1);
        case 1:
          return [4, e.next()];
        case 2:
          if (((o = p.sent()), !!o.done)) return [3, 4];
          if (((a = o.value), r.next(a), r.closed)) return [2];
          p.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (c = p.sent()), (n = { error: c }), [3, 11];
        case 6:
          return (
            p.trys.push([6, , 9, 10]),
            o && !o.done && (i = e.return) ? [4, i.call(e)] : [3, 8]
          );
        case 7:
          p.sent(), (p.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (n) throw n.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return r.complete(), [2];
      }
    });
  });
}
function B(t, r, e, o, n) {
  o === void 0 && (o = 0), n === void 0 && (n = !1);
  var i = r.schedule(function () {
    e(), n ? t.add(this.schedule(null, o)) : this.unsubscribe();
  }, o);
  if ((t.add(i), !n)) return i;
}
function Zt(t, r) {
  return (
    r === void 0 && (r = 0),
    W(function (e, o) {
      e.subscribe(
        K(
          o,
          function (n) {
            return B(
              o,
              t,
              function () {
                return o.next(n);
              },
              r
            );
          },
          function () {
            return B(
              o,
              t,
              function () {
                return o.complete();
              },
              r
            );
          },
          function (n) {
            return B(
              o,
              t,
              function () {
                return o.error(n);
              },
              r
            );
          }
        )
      );
    })
  );
}
function Jt(t, r) {
  return (
    r === void 0 && (r = 0),
    W(function (e, o) {
      o.add(
        t.schedule(function () {
          return e.subscribe(o);
        }, r)
      );
    })
  );
}
function xe(t, r) {
  return L(t).pipe(Jt(r), Zt(r));
}
function ke(t, r) {
  return L(t).pipe(Jt(r), Zt(r));
}
function Fe(t, r) {
  return new D(function (e) {
    var o = 0;
    return r.schedule(function () {
      o === t.length
        ? e.complete()
        : (e.next(t[o++]), e.closed || this.schedule());
    });
  });
}
function He(t, r) {
  return new D(function (e) {
    var o;
    return (
      B(e, r, function () {
        (o = t[qt]()),
          B(
            e,
            r,
            function () {
              var n, i, a;
              try {
                (n = o.next()), (i = n.value), (a = n.done);
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
        return v(o == null ? void 0 : o.return) && o.return();
      }
    );
  });
}
function St(t, r) {
  if (!t) throw new Error("Iterable cannot be null");
  return new D(function (e) {
    B(e, r, function () {
      var o = t[Symbol.asyncIterator]();
      B(
        e,
        r,
        function () {
          o.next().then(function (n) {
            n.done ? e.complete() : e.next(n.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function Ve(t, r) {
  return St(zt(t), r);
}
function We(t, r) {
  if (t != null) {
    if (Kt(t)) return xe(t, r);
    if (Wt(t)) return Fe(t, r);
    if (jt(t)) return ke(t, r);
    if (Lt(t)) return St(t, r);
    if ($t(t)) return He(t, r);
    if (Xt(t)) return Ve(t, r);
  }
  throw Ut(t);
}
function Gt(t, r) {
  return r ? We(t, r) : L(t);
}
function je(t, r) {
  return W(function (e, o) {
    var n = 0;
    e.subscribe(
      K(o, function (i) {
        o.next(t.call(r, i, n++));
      })
    );
  });
}
function Ke(t, r, e, o, n, i, a, c) {
  var p = [],
    _ = 0,
    T = 0,
    I = !1,
    b = function () {
      I && !p.length && !_ && r.complete();
    },
    R = function (s) {
      return _ < o ? P(s) : p.push(s);
    },
    P = function (s) {
      i && r.next(s), _++;
      var u = !1;
      L(e(s, T++)).subscribe(
        K(
          r,
          function (E) {
            n == null || n(E), i ? R(E) : r.next(E);
          },
          function () {
            u = !0;
          },
          void 0,
          function () {
            if (u)
              try {
                _--;
                for (
                  var E = function () {
                    var d = p.shift();
                    a
                      ? B(r, a, function () {
                          return P(d);
                        })
                      : P(d);
                  };
                  p.length && _ < o;

                )
                  E();
                b();
              } catch (d) {
                r.error(d);
              }
          }
        )
      );
    };
  return (
    t.subscribe(
      K(r, R, function () {
        (I = !0), b();
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
      ? te(function (o, n) {
          return je(function (i, a) {
            return r(o, i, n, a);
          })(L(t(o, n)));
        }, e)
      : (typeof r == "number" && (e = r),
        W(function (o, n) {
          return Ke(o, n, t, e);
        }))
  );
}
function Le(t) {
  return t === void 0 && (t = 1 / 0), te(Ht, t);
}
function Ue() {
  return Le(1);
}
function It() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
  return Ue()(Gt(t, Vt(t)));
}
function ee(t, r) {
  return W(function (e, o) {
    var n = 0;
    e.subscribe(
      K(o, function (i) {
        return t.call(r, i, n++) && o.next(i);
      })
    );
  });
}
function qe() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
  var e = Vt(t);
  return W(function (o, n) {
    (e ? It(t, o, e) : It(t, o)).subscribe(n);
  });
}
st.prototype.set = st.prototype.next;
Promise.prototype.toRestState = function () {
  return Gt(this).pipe(qe({ loading: !0 }));
};
const re = new Set();
function $e(t) {
  t.forEach((r) => re.add(r));
}
function ze() {
  return [...re];
}
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var o in e) ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }
          return t;
        }),
    J.apply(null, arguments)
  );
}
var k;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(k || (k = {}));
var Pt = function (t) {
    return t;
  },
  vt = "beforeunload",
  Xe = "popstate";
function Qe(t) {
  t === void 0 && (t = {});
  var r = t,
    e = r.window,
    o = e === void 0 ? document.defaultView : e,
    n = o.history;
  function i() {
    var y = o.location,
      m = y.pathname,
      g = y.search,
      w = y.hash,
      Y = n.state || {};
    return [
      Y.idx,
      Pt({
        pathname: m,
        search: g,
        hash: w,
        state: Y.usr || null,
        key: Y.key || "default",
      }),
    ];
  }
  var a = null;
  function c() {
    if (a) R.call(a), (a = null);
    else {
      var y = k.Pop,
        m = i(),
        g = m[0],
        w = m[1];
      if (R.length) {
        if (g != null) {
          var Y = T - g;
          Y &&
            ((a = {
              action: y,
              location: w,
              retry: function () {
                O(Y * -1);
              },
            }),
            O(Y));
        }
      } else d(y);
    }
  }
  o.addEventListener(Xe, c);
  var p = k.Pop,
    _ = i(),
    T = _[0],
    I = _[1],
    b = gt(),
    R = gt();
  T == null && ((T = 0), n.replaceState(J({}, n.state, { idx: T }), ""));
  function P(y) {
    return typeof y == "string" ? y : Je(y);
  }
  function s(y, m) {
    return (
      m === void 0 && (m = null),
      Pt(
        J(
          { pathname: I.pathname, hash: "", search: "" },
          typeof y == "string" ? Se(y) : y,
          { state: m, key: Ze() }
        )
      )
    );
  }
  function u(y, m) {
    return [{ usr: y.state, key: y.key, idx: m }, P(y)];
  }
  function E(y, m, g) {
    return !R.length || (R.call({ action: y, location: m, retry: g }), !1);
  }
  function d(y) {
    p = y;
    var m = i();
    (T = m[0]), (I = m[1]), b.call({ action: p, location: I });
  }
  function A(y, m) {
    var g = k.Push,
      w = s(y, m);
    function Y() {
      A(y, m);
    }
    if (E(g, w, Y)) {
      var x = u(w, T + 1),
        tt = x[0],
        U = x[1];
      try {
        n.pushState(tt, "", U);
      } catch {
        o.location.assign(U);
      }
      d(g);
    }
  }
  function h(y, m) {
    var g = k.Replace,
      w = s(y, m);
    function Y() {
      h(y, m);
    }
    if (E(g, w, Y)) {
      var x = u(w, T),
        tt = x[0],
        U = x[1];
      n.replaceState(tt, "", U), d(g);
    }
  }
  function O(y) {
    n.go(y);
  }
  var N = {
    get action() {
      return p;
    },
    get location() {
      return I;
    },
    createHref: P,
    push: A,
    replace: h,
    go: O,
    back: function () {
      O(-1);
    },
    forward: function () {
      O(1);
    },
    listen: function (m) {
      return b.push(m);
    },
    block: function (m) {
      var g = R.push(m);
      return (
        R.length === 1 && o.addEventListener(vt, bt),
        function () {
          g(), R.length || o.removeEventListener(vt, bt);
        }
      );
    },
  };
  return N;
}
function bt(t) {
  t.preventDefault(), (t.returnValue = "");
}
function gt() {
  var t = [];
  return {
    get length() {
      return t.length;
    },
    push: function (e) {
      return (
        t.push(e),
        function () {
          t = t.filter(function (o) {
            return o !== e;
          });
        }
      );
    },
    call: function (e) {
      t.forEach(function (o) {
        return o && o(e);
      });
    },
  };
}
function Ze() {
  return Math.random().toString(36).substr(2, 8);
}
function Je(t) {
  var r = t.pathname,
    e = r === void 0 ? "/" : r,
    o = t.search,
    n = o === void 0 ? "" : o,
    i = t.hash,
    a = i === void 0 ? "" : i;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Se(t) {
  var r = {};
  if (t) {
    var e = t.indexOf("#");
    e >= 0 && ((r.hash = t.substr(e)), (t = t.substr(0, e)));
    var o = t.indexOf("?");
    o >= 0 && ((r.search = t.substr(o)), (t = t.substr(0, o))),
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
    isApp: t && or(),
    isMobile: t && nr(r),
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
  return ["127.0.0.1", "localhost", " ", "bityaris-v33.vercel.app"].indexOf(location.hostname) > -1;
}
function or() {
  return navigator.userAgent.indexOf("PhemexApp") > -1;
}
function nr(t) {
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
const $ = G.isBrowser ? Qe() : null;
function ar(t) {
  const r = { lastKeyIndex: 0, keys: [$.location.key] };
  $.listen(({ location: e }) => {
    const o = $._action;
    if (sr(r, o, e.key)) {
      const { pathname: i, search: a, key: c } = e;
      t({
        pathname: i,
        search: a,
        key: c,
        action: o,
        href: G.isBrowser ? window.location.href : "",
      }),
        ($._action = "");
      return;
    }
    window.location.reload();
  });
}
function sr(t, r, e) {
  const { keys: o } = t;
  if (r === "PUSH") return o.push(e), (t.lastKeyIndex = o.length - 1), !0;
  if (r === "REPLACE") return o.splice(t.lastKeyIndex, 1, e), !0;
  const n = o.indexOf(e);
  return n > -1 && (r === "GO_BACK" || r === "GO_FORWARD")
    ? ((t.lastKeyIndex = n), !0)
    : !1;
}
var Et = {},
  cr = (t) =>
    encodeURIComponent(t).replace(
      /[!'()*]/g,
      (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  oe = "%[a-f0-9]{2}",
  Ct = new RegExp("(" + oe + ")|([^%]+?)", "gi"),
  Yt = new RegExp("(" + oe + ")+", "gi");
function ct(t, r) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {}
  if (t.length === 1) return t;
  r = r || 1;
  var e = t.slice(0, r),
    o = t.slice(r);
  return Array.prototype.concat.call([], ct(e), ct(o));
}
function _r(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var r = t.match(Ct) || [], e = 1; e < r.length; e++)
      (t = ct(r, e).join("")), (r = t.match(Ct) || []);
    return t;
  }
}
function ur(t) {
  for (var r = { "%FE%FF": "��", "%FF%FE": "��" }, e = Yt.exec(t); e; ) {
    try {
      r[e[0]] = decodeURIComponent(e[0]);
    } catch {
      var o = _r(e[0]);
      o !== e[0] && (r[e[0]] = o);
    }
    e = Yt.exec(t);
  }
  r["%C2"] = "�";
  for (var n = Object.keys(r), i = 0; i < n.length; i++) {
    var a = n[i];
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
      return ur(t);
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
    o = fr;
  function n(s) {
    switch (s.arrayFormat) {
      case "index":
        return (u) => (E, d) => {
          const A = E.length;
          return d === void 0 || (s.skipNull && d === null)
            ? E
            : d === null
            ? [...E, [c(u, s), "[", A, "]"].join("")]
            : [...E, [c(u, s), "[", c(A, s), "]=", c(d, s)].join("")];
        };
      case "bracket":
        return (u) => (E, d) =>
          d === void 0 || (s.skipNull && d === null)
            ? E
            : d === null
            ? [...E, [c(u, s), "[]"].join("")]
            : [...E, [c(u, s), "[]=", c(d, s)].join("")];
      case "comma":
      case "separator":
        return (u) => (E, d) =>
          d == null || d.length === 0
            ? E
            : E.length === 0
            ? [[c(u, s), "=", c(d, s)].join("")]
            : [[E, c(d, s)].join(s.arrayFormatSeparator)];
      default:
        return (u) => (E, d) =>
          d === void 0 || (s.skipNull && d === null)
            ? E
            : d === null
            ? [...E, c(u, s)]
            : [...E, [c(u, s), "=", c(d, s)].join("")];
    }
  }
  function i(s) {
    let u;
    switch (s.arrayFormat) {
      case "index":
        return (E, d, A) => {
          if (
            ((u = /\[(\d*)\]$/.exec(E)), (E = E.replace(/\[\d*\]$/, "")), !u)
          ) {
            A[E] = d;
            return;
          }
          A[E] === void 0 && (A[E] = {}), (A[E][u[1]] = d);
        };
      case "bracket":
        return (E, d, A) => {
          if (((u = /(\[\])$/.exec(E)), (E = E.replace(/\[\]$/, "")), !u)) {
            A[E] = d;
            return;
          }
          if (A[E] === void 0) {
            A[E] = [d];
            return;
          }
          A[E] = [].concat(A[E], d);
        };
      case "comma":
      case "separator":
        return (E, d, A) => {
          const O =
            typeof d == "string" &&
            d.split("").indexOf(s.arrayFormatSeparator) > -1
              ? d.split(s.arrayFormatSeparator).map((N) => p(N, s))
              : d === null
              ? d
              : p(d, s);
          A[E] = O;
        };
      default:
        return (E, d, A) => {
          if (A[E] === void 0) {
            A[E] = d;
            return;
          }
          A[E] = [].concat(A[E], d);
        };
    }
  }
  function a(s) {
    if (typeof s != "string" || s.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function c(s, u) {
    return u.encode ? (u.strict ? r(s) : encodeURIComponent(s)) : s;
  }
  function p(s, u) {
    return u.decode ? e(s) : s;
  }
  function _(s) {
    return Array.isArray(s)
      ? s.sort()
      : typeof s == "object"
      ? _(Object.keys(s))
          .sort((u, E) => Number(u) - Number(E))
          .map((u) => s[u])
      : s;
  }
  function T(s) {
    const u = s.indexOf("#");
    return u !== -1 && (s = s.slice(0, u)), s;
  }
  function I(s) {
    let u = "";
    const E = s.indexOf("#");
    return E !== -1 && (u = s.slice(E)), u;
  }
  function b(s) {
    s = T(s);
    const u = s.indexOf("?");
    return u === -1 ? "" : s.slice(u + 1);
  }
  function R(s, u) {
    return (
      u.parseNumbers &&
      !Number.isNaN(Number(s)) &&
      typeof s == "string" &&
      s.trim() !== ""
        ? (s = Number(s))
        : u.parseBooleans &&
          s !== null &&
          (s.toLowerCase() === "true" || s.toLowerCase() === "false") &&
          (s = s.toLowerCase() === "true"),
      s
    );
  }
  function P(s, u) {
    (u = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      u
    )),
      a(u.arrayFormatSeparator);
    const E = i(u),
      d = Object.create(null);
    if (typeof s != "string" || ((s = s.trim().replace(/^[?#&]/, "")), !s))
      return d;
    for (const A of s.split("&")) {
      let [h, O] = o(u.decode ? A.replace(/\+/g, " ") : A, "=");
      (O = O === void 0 ? null : u.arrayFormat === "comma" ? O : p(O, u)),
        E(p(h, u), O, d);
    }
    for (const A of Object.keys(d)) {
      const h = d[A];
      if (typeof h == "object" && h !== null)
        for (const O of Object.keys(h)) h[O] = R(h[O], u);
      else d[A] = R(h, u);
    }
    return u.sort === !1
      ? d
      : (u.sort === !0
          ? Object.keys(d).sort()
          : Object.keys(d).sort(u.sort)
        ).reduce((A, h) => {
          const O = d[h];
          return (
            O && typeof O == "object" && !Array.isArray(O)
              ? (A[h] = _(O))
              : (A[h] = O),
            A
          );
        }, Object.create(null));
  }
  (t.extract = b),
    (t.parse = P),
    (t.stringify = (s, u) => {
      if (!s) return "";
      (u = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        u
      )),
        a(u.arrayFormatSeparator);
      const E = n(u),
        d = Object.assign({}, s);
      if (u.skipNull)
        for (const h of Object.keys(d))
          (d[h] === void 0 || d[h] === null) && delete d[h];
      const A = Object.keys(d);
      return (
        u.sort !== !1 && A.sort(u.sort),
        A.map((h) => {
          const O = s[h];
          return O === void 0
            ? ""
            : O === null
            ? c(h, u)
            : Array.isArray(O)
            ? O.reduce(E(h), []).join("&")
            : c(h, u) + "=" + c(O, u);
        })
          .filter((h) => h.length > 0)
          .join("&")
      );
    }),
    (t.parseUrl = (s, u) => ({
      url: T(s).split("?")[0] || "",
      query: P(b(s), u),
    })),
    (t.stringifyUrl = (s, u) => {
      const E = T(s.url).split("?")[0] || "",
        d = t.extract(s.url),
        A = t.parse(d),
        h = I(s.url),
        O = Object.assign(A, s.query);
      let N = t.stringify(O, u);
      return N && (N = `?${N}`), `${E}${N}${h}`;
    });
})(Et);
const ne = {
  genLG(t) {
    const r = pr(t || {});
    return function (e, o) {
      if (!e) return "";
      const { id: n, en: i } = e,
        a = r[n] || i;
      return o ? dr(a, o) : a;
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
    return ne.isLanguage(e)
      ? { lang: e, pathname: "/" + r.slice(1).join("/") }
      : { lang: "en", pathname: "/" + r.join("/") };
  },
};
function pr(t) {
  const r = {};
  return (
    Object.keys(t).forEach((e) => {
      t[e].forEach((n) => (r[n] = e));
    }),
    r
  );
}
function dr(t, r) {
  return Object.keys(r).reduce(
    (e, o) => e.replace(new RegExp(["(\\{", o, "\\})"].join(""), "g"), r[o]),
    t
  );
}
const ie = new st(Rr()),
  Er = ie.asObservable();
function Tr({ pathname: t, search: r, key: e, action: o, href: n }) {
  ie.next(ae({ pathname: t, search: r, key: e, action: o, href: n }));
}
function ae({ pathname: t, search: r, key: e, action: o, href: n }) {
  const i = Et.parse(r),
    { lang: a, pathname: c } = ne.parsePathname(t);
  return {
    action: o,
    locale: a,
    slug: c,
    pathname: t,
    query: i,
    key: e,
    href: n,
  };
}
function Rr() {
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
  M = Ar();
function Ar() {
  const t = typeof window == "object",
    r = t ? navigator.userAgent || navigator.vendor || window.opera : "";
  return {
    isServer: !t,
    isBrowser: !!t,
    isProduction: t && Or(),
    isEaProduction: t && hr(),
    isTestNet: t && Tt(),
    isLocal: t && Ir(),
    isApp: t && Pr(),
    isMobile: t && vr(r),
    isBot: t && br(r),
    isDev: t && mr(),
    site: se,
    isJapanSite: yr("jp"),
  };
}
function yr(t) {
  return se === t;
}
function Or() {
  if (Tt() || location.protocol !== "https:") return !1;
  const t = location.hostname.split(".");
  return (t.length === 3 && t[0] === "www") || t.length === 2;
}
function hr() {
  if (Tt() || location.protocol !== "https:") return !1;
  const t = location.hostname.split(".");
  return (t.length === 3 && t[0] === "ea") || t.length === 2;
}
function Tt() {
  return location.hostname.indexOf("testnet") > -1;
}
function mr() {
  return location.hostname.endsWith("cmexpro.com");
}
function Ir() {
  return (
    ["127.0.0.1", "localhost", "", "bityaris-v33.vercel.app"].indexOf(location.hostname) > -1 ||
    ["4000", "9000", "3000"].includes(location.port)
  );
}
function Pr() {
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
function br(t) {
  return /(googlebot|Googlebot-Mobile|bingbot)/i.test(t);
}
const Dt = { ja: { prod: ["phemex.jp", "pulse.social"] } },
  _t = Object.keys(Dt).reduce((t, r) => {
    const e = Dt[r],
      o = e.prod.reduce((p, _) => ({ ...p, [_]: "phemex.com" }), {}),
      i = (e.fat && e.fat.length > 0 ? e.fat : e.prod).reduce(
        (p, _) => ({
          ...p,
          [`fat.${_}`]: "fat.phemex.com",
          [`fat2.${_}`]: "fat2.phemex.com",
          [`fat3.${_}`]: "fat3.phemex.com",
        }),
        {}
      ),
      c = (e.ea && e.ea.length > 0 ? e.ea : e.prod).reduce(
        (p, _) => ({ ...p, [`ea.${_}`]: "ea.phemex.com" }),
        {}
      );
    return { ...t, [r]: { ...o, ...c, ...i } };
  }, {});
function gr(t) {
  return Object.values(_t).reduce((e, o) => ({ ...e, ...o }), {})[t] || t;
}
function Rt() {
  const t = M.isServer ? "phemex.com" : location.hostname;
  for (const r in _t) if (Object.keys(_t[r]).includes(t)) return r;
  return "en";
}
function Cr() {
  const t = Rt();
  return { ja: "JPY", en: "USD" }[t] || "USD";
}
function Yr() {
  const t = Rt();
  return { ja: "JP" }[t] || "";
}
const ce = "localizedRedirect",
  ut = Rt(),
  Xr = Cr(),
  Qr = Yr(),
  _e = ut !== "en",
  Zr = _e && (M.isServer ? !1 : !localStorage.getItem(ce)),
  Jr = (t = "true") => {
    localStorage.setItem(ce, t);
  },
  Sr = function (t) {
    return _e && ![ut, "en"].includes(t) ? ut : t;
  },
  C = {
    MOCK_URL_FLAG: "/moc/",
    _isMock: !1,
    initMockStatus() {
      M.isServer || (C._isMock = location.pathname.includes(C.MOCK_URL_FLAG)),
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
const Dr = "fat2.phemex.com",
  ue = C.getMockPrefix(),
  wr = le("https://api10") + ue,
  Nr = le("wss://ws10") + ue,
  Br = {
    API: wr,
    WS: Nr,
    STATIC_URL: "https://static.phemex.com",
    BASE_URL: Mr(),
    TEST_NET_URL: xr(),
    IMG_URL: "https://img.phemex.com",
  };
function Mr() {
  return location.origin;
}
function xr() {
  return M.isTestNet ? location.origin : "https://testnet.phemex.com";
}
function le(t) {
  const r = (o) => (o.split(".").length === 2 ? "." : "-"),
    e = (o, n) => [o, n].join(r(n));
  if (M.isServer) return e(t, "phemex.com");
  if (M.isLocal) {
    if (["4000", "9000"].includes(location.port)) return e(t, Dr);
    const o = Et.parse(window.location.search).proxyEnv,
      i =
        {
          dev: "dev.cmexpro.com",
          dev2: "dev2.cmexpro.com",
          dev3: "dev3.cmexpro.com",
          fat: "fat.phemex.com",
          fat2: "fat2.phemex.com",
          fat3: "fat3.phemex.com",
          ea: "ea.phemex.com",
        }[o] || "phemex.com";
    return e(t, i);
  }
  return e(t, gr(location.hostname));
}
const z = localStorage.getItem("ty_show_log") === "Y",
  kr = {
    setUid(t) {
      const r = window.TINGYUN;
      r && r.setUid && (z && console.log("[TY] SetUid:", t), r.setUid(t));
    },
    createAutoEvent(t) {
      const r = window.TINGYUN;
      return r && r.createAutoEvent
        ? (z && console.log("[TY] AutoEvent:", t), r.createAutoEvent(t))
        : { end() {}, fail() {} };
    },
    createEvent(t) {
      if (document.visibilityState !== "visible") {
        z && console.log("[TY] ignore NewAction:", t);
        return;
      }
      const r = window.TINGYUN;
      r &&
        r.newAction &&
        (z && console.log("[TY] NewAction:", t), r.newAction(t, !0));
    },
  };
class Fr extends pt {
  constructor() {
    super(...arguments);
    At(this, "worker");
  }
  init(e) {
    (this.worker = e()),
      this.worker.subscribe("message", ({ data: o }) => {
        if (this.closed) throw new Error();
        if (!this.isStopped) {
          const { observers: n } = this,
            i = n.length,
            a = n.slice();
          for (let c = 0; c < i; c++) a[c].next(o);
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
const j = new Fr();
M.isBot ||
  j.pipe(ee((t) => t.type === "worker-ready")).subscribe(() => {
    j.send({ type: "ws-url", url: Br.WS }),
      j.send({
        type: "state-symbol",
        tradeType: "Perpetual",
        symbol: C.isMock() ? "BTCMUSDT" : "EOSUSD",
      });
  });
j.pipe(ee((t) => t.type === "tingyun-event")).subscribe((t) =>
  kr.createEvent(t.data)
);
function Hr(t) {
  const r = G.isServer ? {} : window.langDic;
  return function (e, o) {
    if (!e) return console.warn("lang is empty"), "";
    const n = typeof e == "string" ? r[e] : e[t] || e.en;
    return o ? Vr(n, o) : n;
  };
}
function Vr(t, r) {
  return Object.keys(r).reduce(
    (e, o) => e.replace(new RegExp(["(\\{", o, "\\})"].join(""), "g"), r[o]),
    t
  );
}
async function Wr(t, r) {
  (window.process = { browser: !0 }), ar(Tr), j.init(r);
  let e = null;
  Er.subscribe(async (o) => {
    e && (e.$destroy(), window.scroll({ top: 0 }));
    const i = ze().find((T) => T.slug === o.slug);
    if (!i) {
      console.warn("template not found");
      return;
    }
    const a = Hr(o.locale);
    window.__LG__ = a;
    const c = new Map([["LG", a]]),
      { component: p } = await i.loader(),
      _ = document.getElementById("page");
    e = new p({ target: _, props: {}, hydrate: t, context: c });
  }),
    (localStorage.getItem("TINGYUN_STORAGE") || "").includes("apm2") &&
      localStorage.removeItem("TINGYUN_STORAGE");
}
Array.prototype.toObject = function (t, r = (e) => e) {
  return this.reduce((e, o) => ((e[o[t]] = r(o)), e), {});
};
EventTarget.prototype.subscribe = function (t, r) {
  return this.addEventListener(t, r), () => this.removeEventListener(t, r);
};
const jr = "modulepreload",
  Kr = function (t) {
    return "/p-105/" + t;
  },
  wt = {},
  f = function (r, e, o) {
    if (!e || e.length === 0) return r();
    const n = document.getElementsByTagName("link");
    return Promise.all(
      e.map((i) => {
        if (((i = Kr(i)), i in wt)) return;
        wt[i] = !0;
        const a = i.endsWith(".css"),
          c = a ? '[rel="stylesheet"]' : "";
        if (!!o)
          for (let T = n.length - 1; T >= 0; T--) {
            const I = n[T];
            if (I.href === i && (!a || I.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${c}`)) return;
        const _ = document.createElement("link");
        if (
          ((_.rel = a ? "stylesheet" : jr),
          a || ((_.as = "script"), (_.crossOrigin = "")),
          (_.href = i),
          document.head.appendChild(_),
          a)
        )
          return new Promise((T, I) => {
            _.addEventListener("load", T),
              _.addEventListener("error", () =>
                I(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => r());
  };
var l = ((t) => (
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
  (t.OTC_LEGEND_TRADING = "/fiat/buy-crypto/place-order"),
  (t.OTC_LEGEND_TRADING_HISTORY = "/fiat/buy-crypto/place-order"),
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
))(l || {});
const Lr = [
  {
    slug: l.BUY_CRYPTO_BUY_ALGO,
    loader: () =>
      f(
        () => import("./chunk-31ee4cfa.js"),
        [
          "js/chunk-31ee4cfa.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_AVAX,
    loader: () =>
      f(
        () => import("./chunk-0c46f4b3.js"),
        [
          "js/chunk-0c46f4b3.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_BTC,
    loader: () =>
      f(
        () => import("./chunk-ae01bb75.js"),
        [
          "js/chunk-ae01bb75.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_BCH,
    loader: () =>
      f(
        () => import("./chunk-8ea93828.js"),
        [
          "js/chunk-8ea93828.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_ADA,
    loader: () =>
      f(
        () => import("./chunk-e36e8050.js"),
        [
          "js/chunk-e36e8050.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_MANA,
    loader: () =>
      f(
        () => import("./chunk-88b0d36f.js"),
        [
          "js/chunk-88b0d36f.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_DENT,
    loader: () =>
      f(
        () => import("./chunk-f0f7e45a.js"),
        [
          "js/chunk-f0f7e45a.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_DOGE,
    loader: () =>
      f(
        () => import("./chunk-623bab47.js"),
        [
          "js/chunk-623bab47.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_ETHEREUM,
    loader: () =>
      f(
        () => import("./chunk-de5e7f96.js"),
        [
          "js/chunk-de5e7f96.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_LTC,
    loader: () =>
      f(
        () => import("./chunk-c36149ac.js"),
        [
          "js/chunk-c36149ac.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_LRC,
    loader: () =>
      f(
        () => import("./chunk-6f104165.js"),
        [
          "js/chunk-6f104165.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_MATIC,
    loader: () =>
      f(
        () => import("./chunk-9a4c4042.js"),
        [
          "js/chunk-9a4c4042.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_DOT,
    loader: () =>
      f(
        () => import("./chunk-de1adc7d.js"),
        [
          "js/chunk-de1adc7d.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_SAND,
    loader: () =>
      f(
        () => import("./chunk-adc14387.js"),
        [
          "js/chunk-adc14387.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_SHIB,
    loader: () =>
      f(
        () => import("./chunk-9d0adb12.js"),
        [
          "js/chunk-9d0adb12.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_SOL,
    loader: () =>
      f(
        () => import("./chunk-0ec2775b.js"),
        [
          "js/chunk-0ec2775b.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_XTZ,
    loader: () =>
      f(
        () => import("./chunk-5bb3f776.js"),
        [
          "js/chunk-5bb3f776.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_TRX,
    loader: () =>
      f(
        () => import("./chunk-4dd4e58f.js"),
        [
          "js/chunk-4dd4e58f.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_USDC,
    loader: () =>
      f(
        () => import("./chunk-a0263aef.js"),
        [
          "js/chunk-a0263aef.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_XLM,
    loader: () =>
      f(
        () => import("./chunk-a0fdd28b.js"),
        [
          "js/chunk-a0fdd28b.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_XRP,
    loader: () =>
      f(
        () => import("./chunk-9e3cf589.js"),
        [
          "js/chunk-9e3cf589.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_BUY_ZEC,
    loader: () =>
      f(
        () => import("./chunk-c526d934.js"),
        [
          "js/chunk-c526d934.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-bbd03739.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "js/chunk-47b49003.js",
          "css/SeoBuyCryptoPage-783ac904.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO,
    loader: () =>
      f(
        () => import("./chunk-5cb6965d.js"),
        [
          "js/chunk-5cb6965d.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-0502be9e.js",
          "css/CoinSelect-1bf11b3a.css",
          "js/chunk-bbb34680.js",
          "css/index-77f16d29.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_FAQ,
    loader: () =>
      f(
        () => import("./chunk-fc34d637.js"),
        [
          "js/chunk-fc34d637.js",
          "js/chunk-dd975def.js",
          "js/chunk-306f9dde.js",
          "css/index-8256a2f1.css",
        ]
      ),
  },
  {
    slug: l.P2P_HOME,
    loader: () =>
      f(
        () => import("./chunk-08fbedeb.js"),
        [
          "js/chunk-08fbedeb.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-6a098dd4.js",
          "css/Faqs-5defdc92.css",
          "js/chunk-63b40414.js",
          "css/FraudRiskAlert-1337dba4.css",
          "js/chunk-84b37366.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-47b49003.js",
          "js/chunk-7645b0aa.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-36f3cd39.js",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "css/AmountInput-5a14149d.css",
          "css/Form-d14f82f3.css",
          "css/index-fcfd5c3f.css",
        ]
      ),
  },
  {
    slug: l.P2P_MAKER_HOME,
    loader: () =>
      f(
        () => import("./chunk-6dec649a.js"),
        [
          "js/chunk-6dec649a.js",
          "js/chunk-dd975def.js",
          "js/chunk-187678fb.js",
          "js/chunk-36f3cd39.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-ce15bb07.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Warning-18cd819e.css",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-80986181.js",
          "css/AmountInput-5a14149d.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-47b49003.js",
          "js/chunk-587e6670.js",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "js/chunk-7645b0aa.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-4765fa05.js",
          "css/Layout-a8c2e764.css",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-9c514b41.js",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "js/chunk-3b85e0d6.js",
          "css/index-64c22b62.css",
          "js/chunk-cfc919b5.js",
          "css/AdvertiserInfo-94e54557.css",
          "css/index-1b94460b.css",
        ]
      ),
  },
  {
    slug: l.P2P_ADVERTISER_REVIEW,
    loader: () =>
      f(
        () => import("./chunk-513b3d8d.js"),
        [
          "js/chunk-513b3d8d.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-1e2e8d70.js",
          "css/Tabs2-f42d7f89.css",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-4765fa05.js",
          "js/chunk-80986181.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "css/index-d7b848e8.css",
        ]
      ),
  },
  {
    slug: l.P2P_CREATE_AN_AD,
    loader: () =>
      f(
        () => import("./chunk-31d7c5a6.js"),
        [
          "js/chunk-31d7c5a6.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-7b26daeb.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7645b0aa.js",
          "js/chunk-246fe560.js",
          "js/chunk-c9328547.js",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "js/chunk-0dda759e.js",
          "css/streams-42957c6e.css",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-9c514b41.js",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "css/FormAd-c74cb818.css",
          "css/index-0d440158.css",
        ]
      ),
  },
  {
    slug: l.P2P_FAQ,
    loader: () =>
      f(
        () => import("./chunk-21494d1a.js"),
        [
          "js/chunk-21494d1a.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-6a098dd4.js",
          "css/Faqs-5defdc92.css",
        ]
      ),
  },
  {
    slug: l.P2P_MY_ADS,
    loader: () =>
      f(
        () => import("./chunk-bf74598c.js"),
        [
          "js/chunk-bf74598c.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-1e2e8d70.js",
          "css/Tabs2-f42d7f89.css",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "js/chunk-0dda759e.js",
          "css/streams-42957c6e.css",
          "js/chunk-587e6670.js",
          "css/index-9ef9c3c0.css",
        ]
      ),
  },
  {
    slug: l.P2P_ADS_DETAILS,
    loader: () =>
      f(
        () => import("./chunk-8ac4a7bd.js"),
        [
          "js/chunk-8ac4a7bd.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-7b26daeb.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7645b0aa.js",
          "js/chunk-246fe560.js",
          "js/chunk-c9328547.js",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "js/chunk-0dda759e.js",
          "css/streams-42957c6e.css",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-9c514b41.js",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "css/FormAd-c74cb818.css",
        ]
      ),
  },
  {
    slug: l.P2P_ADS_EDIT,
    loader: () =>
      f(
        () => import("./chunk-4722114b.js"),
        [
          "js/chunk-4722114b.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-7b26daeb.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7645b0aa.js",
          "js/chunk-246fe560.js",
          "js/chunk-c9328547.js",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "js/chunk-0dda759e.js",
          "css/streams-42957c6e.css",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-9c514b41.js",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "css/FormAd-c74cb818.css",
        ]
      ),
  },
  {
    slug: l.P2P_ORDERS,
    loader: () =>
      f(
        () => import("./chunk-014d1927.js"),
        [
          "js/chunk-014d1927.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-1e2e8d70.js",
          "css/Tabs2-f42d7f89.css",
          "js/chunk-4765fa05.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-587e6670.js",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "css/index-d381c7ab.css",
        ]
      ),
  },
  {
    slug: l.P2P_HOME_MARKET,
    loader: () =>
      f(
        () => import("./chunk-dea8e20e.js"),
        [
          "js/chunk-dea8e20e.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-63b40414.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/FraudRiskAlert-1337dba4.css",
          "js/chunk-4765fa05.js",
          "js/chunk-80986181.js",
          "css/Layout-a8c2e764.css",
          "js/chunk-36f3cd39.js",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "css/AmountInput-5a14149d.css",
          "js/chunk-187678fb.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-47b49003.js",
          "js/chunk-587e6670.js",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "js/chunk-7645b0aa.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-9c514b41.js",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "js/chunk-3b85e0d6.js",
          "css/index-64c22b62.css",
          "js/chunk-6a098dd4.js",
          "css/Faqs-5defdc92.css",
          "css/index-336fa0e5.css",
        ]
      ),
  },
  {
    slug: l.P2P_MERCHANT_APPLY,
    loader: () =>
      f(
        () => import("./chunk-b8db772b.js"),
        [
          "js/chunk-b8db772b.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "css/index-b39d68f6.css",
        ]
      ),
  },
  {
    slug: l.ASSETS_PAYMENT_METHODS,
    loader: () =>
      f(
        () => import("./chunk-954ce339.js"),
        [
          "js/chunk-954ce339.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
        ]
      ),
  },
  {
    slug: l.P2P_HOME_LOGIN,
    loader: () =>
      f(
        () => import("./chunk-e3438b98.js"),
        [
          "js/chunk-e3438b98.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-63b40414.js",
          "css/FraudRiskAlert-1337dba4.css",
          "js/chunk-6a098dd4.js",
          "css/Faqs-5defdc92.css",
          "js/chunk-84b37366.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-47b49003.js",
          "js/chunk-7645b0aa.js",
          "js/chunk-0f96f101.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "js/chunk-36f3cd39.js",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "css/AmountInput-5a14149d.css",
          "css/Form-d14f82f3.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-9c514b41.js",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "css/index-b0c8b04c.css",
          "css/index-6eea0e1e.css",
        ]
      ),
  },
  {
    slug: l.P2P_ORDER_DETAILS,
    loader: () =>
      f(
        () => import("./chunk-e7d38b50.js"),
        [
          "js/chunk-e7d38b50.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-c56b6d3b.js",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "css/stream-fb4db725.css",
          "js/chunk-6a098dd4.js",
          "css/Faqs-5defdc92.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-246fe560.js",
          "js/chunk-c9328547.js",
          "js/chunk-8ae9d029.js",
          "css/2FA-fabba815.css",
          "css/index-13a8c146.css",
        ]
      ),
  },
  {
    slug: l.P2P_APPEAL_AN_ORDER,
    loader: () =>
      f(
        () => import("./chunk-db31e01b.js"),
        [
          "js/chunk-db31e01b.js",
          "js/chunk-dd975def.js",
          "js/chunk-4765fa05.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "js/chunk-c56b6d3b.js",
          "css/stream-fb4db725.css",
          "css/index-ac034927.css",
        ]
      ),
  },
  {
    slug: l.P2P_USER_CENTER,
    loader: () =>
      f(
        () => import("./chunk-b04ad798.js"),
        [
          "js/chunk-b04ad798.js",
          "js/chunk-dd975def.js",
          "js/chunk-8016f002.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-5f3a38f9.js",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-4765fa05.js",
          "js/chunk-80986181.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "js/chunk-ce15bb07.js",
          "css/Warning-18cd819e.css",
          "js/chunk-cfc919b5.js",
          "js/chunk-3b85e0d6.js",
          "css/AdvertiserInfo-94e54557.css",
          "js/chunk-aeaa9e86.js",
          "css/Textarea-c2baa995.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-afc46d9f.js",
          "css/Upload-08710d51.css",
          "css/index-6dbce63b.css",
        ]
      ),
  },
  {
    slug: l.P2P_USER_REVIEW,
    loader: () =>
      f(
        () => import("./chunk-513b3d8d.js"),
        [
          "js/chunk-513b3d8d.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-1e2e8d70.js",
          "css/Tabs2-f42d7f89.css",
          "js/chunk-8d78671d.js",
          "css/Pagination-4ec9e975.css",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-4765fa05.js",
          "js/chunk-80986181.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "css/Layout-a8c2e764.css",
          "css/index-d7b848e8.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_HOW_TO_BUY,
    loader: () =>
      f(
        () => import("./chunk-2d859f45.js"),
        [
          "js/chunk-2d859f45.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "css/index-6cdee58f.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_PLACE_ORDER,
    loader: () =>
      f(
        () => import("./chunk-0191b9fc.js"),
        [
          "js/chunk-0191b9fc.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-306f9dde.js",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-bc695d4e.js",
          "js/chunk-67ae22cf.js",
          "js/chunk-7e3f53b8.js",
          "css/Kyc-541b75fe.css",
          "js/chunk-0502be9e.js",
          "css/CoinSelect-1bf11b3a.css",
          "css/index-20b0e45c.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_PLACE_ORDER_HISTORY,
    loader: () =>
      f(
        () => import("./chunk-d248f34c.js"),
        [
          "js/chunk-d248f34c.js",
          "js/chunk-dd975def.js",
          "js/chunk-bdac9536.js",
          "js/chunk-8016f002.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "css/Layout-460b8b5c.css",
          "js/chunk-80986181.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-587e6670.js",
          "css/index-39f0e984.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_HISTORY,
    loader: () =>
      f(
        () => import("./chunk-69a9bbeb.js"),
        [
          "js/chunk-69a9bbeb.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-bdac9536.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "css/Layout-460b8b5c.css",
          "js/chunk-009444d3.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-587e6670.js",
          "css/index-4634e4ba.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_ORDER_CONFIRM,
    loader: () =>
      f(
        () => import("./chunk-a8a9b3bb.js"),
        [
          "js/chunk-a8a9b3bb.js",
          "js/chunk-dd975def.js",
          "js/chunk-f9fda786.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-de89b88d.js",
          "js/chunk-881da61c.js",
          "js/chunk-721f10fe.js",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-d0451701.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "js/chunk-c371c638.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "css/ChooseCardDrowdown-eaae74a4.css",
          "js/chunk-7cd8a3ff.js",
          "css/TimerForRefreshPricing-c56381d5.css",
          "js/chunk-f9d71564.js",
          "css/index-54f45ec8.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_ORDER_FAIL,
    loader: () =>
      f(
        () => import("./chunk-d3140c54.js"),
        [
          "js/chunk-d3140c54.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-83bbee6e.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-fd9116f0.js",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "css/PageContainer-83fd4481.css",
          "js/chunk-c7b25c0e.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-61c8e3fb.js",
          "css/ButtonMenus-d08c0b2e.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_ORDER_SUCCESS,
    loader: () =>
      f(
        () => import("./chunk-92c01b06.js"),
        [
          "js/chunk-92c01b06.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-c7fd296c.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-fd9116f0.js",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "css/PageContainer-83fd4481.css",
          "js/chunk-c7b25c0e.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-61c8e3fb.js",
          "css/ButtonMenus-d08c0b2e.css",
          "css/index-2fee0222.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_PAY,
    loader: () =>
      f(
        () => import("./chunk-ac802fc6.js"),
        [
          "js/chunk-ac802fc6.js",
          "js/chunk-dd975def.js",
          "js/chunk-0f5b36e3.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-c371c638.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-383460f7.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_PAYMENT,
    loader: () =>
      f(
        () => import("./chunk-78c0c1a1.js"),
        [
          "js/chunk-78c0c1a1.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-fd9116f0.js",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-81665eeb.js",
          "js/chunk-83bbee6e.js",
          "css/PageContainer-83fd4481.css",
          "js/chunk-721f10fe.js",
          "css/index-c18f373f.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_PLACE_ORDER,
    loader: () =>
      f(
        () => import("./chunk-434b13e9.js"),
        [
          "js/chunk-434b13e9.js",
          "js/chunk-dd975def.js",
          "js/chunk-f9fda786.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-f4df2524.js",
          "css/QuantityInput-431c94ae.css",
          "js/chunk-881da61c.js",
          "js/chunk-79fecbf3.js",
          "js/chunk-c371c638.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-d0451701.js",
          "js/chunk-9f1ca32a.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-81665eeb.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "js/chunk-de89b88d.js",
          "js/chunk-721f10fe.js",
          "css/ChooseCardDrowdown-eaae74a4.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7d1112a0.js",
          "js/chunk-b4b3c7cb.js",
          "js/chunk-7645b0aa.js",
          "css/index-d6a8ed8a.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_DETAILS,
    loader: () =>
      f(
        () => import("./chunk-2131fb03.js"),
        [
          "js/chunk-2131fb03.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-a8027aa5.js",
          "js/chunk-009444d3.js",
          "css/NotesView-0b89f473.css",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "js/chunk-fd9116f0.js",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "css/PageContainer-83fd4481.css",
          "js/chunk-c7b25c0e.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-61c8e3fb.js",
          "css/ButtonMenus-d08c0b2e.css",
          "css/index-e5c94ce4.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_SELL_CONFIRM,
    loader: () =>
      f(
        () => import("./chunk-24be2de8.js"),
        [
          "js/chunk-24be2de8.js",
          "js/chunk-dd975def.js",
          "js/chunk-f9fda786.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-de89b88d.js",
          "js/chunk-881da61c.js",
          "js/chunk-721f10fe.js",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-d0451701.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "js/chunk-c371c638.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "css/ChooseCardDrowdown-eaae74a4.css",
          "js/chunk-7cd8a3ff.js",
          "css/TimerForRefreshPricing-c56381d5.css",
          "js/chunk-f9d71564.js",
          "css/index-b406912a.css",
        ]
      ),
  },
  {
    slug: l.BUY_CRYPTO_CARD_SELL_RESULT,
    loader: () =>
      f(
        () => import("./chunk-c4157041.js"),
        [
          "js/chunk-c4157041.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-ded14b26.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-fd9116f0.js",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "css/PageContainer-83fd4481.css",
          "js/chunk-c7b25c0e.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-61c8e3fb.js",
          "css/ButtonMenus-d08c0b2e.css",
          "js/chunk-2fd7c6d8.js",
          "css/index-502eb578.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_CARD,
    loader: () =>
      f(
        () => import("./chunk-4fdb83e9.js"),
        [
          "js/chunk-4fdb83e9.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-c7fd296c.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-13de262b.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-29571520.js",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-305a0774.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-5c6d3b9c.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-55c3687d.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-61c8e3fb.js",
          "css/PageLayout-c9a554a3.css",
          "js/chunk-d5ee56c9.js",
          "css/Loading-0bc93ce1.css",
          "js/chunk-a8027aa5.js",
          "js/chunk-009444d3.js",
          "css/NotesView-0b89f473.css",
          "css/index-45aaa308.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_CONFIRM,
    loader: () =>
      f(
        () => import("./chunk-ff0b39d9.js"),
        [
          "js/chunk-ff0b39d9.js",
          "js/chunk-dd975def.js",
          "js/chunk-904196e4.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-db4275ef.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-de89b88d.js",
          "js/chunk-881da61c.js",
          "js/chunk-721f10fe.js",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-d0451701.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "js/chunk-c371c638.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "css/ChooseCardDrowdown-eaae74a4.css",
          "js/chunk-7cd8a3ff.js",
          "css/TimerForRefreshPricing-c56381d5.css",
          "js/chunk-6cef32b9.js",
          "js/chunk-60d42613.js",
          "js/chunk-cf4c4894.js",
          "css/util-ba2dcd99.css",
          "css/fiat-balance-transaction-2cf30bcc.css",
          "js/chunk-b6bb6c80.js",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "css/index-b0665bf2.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_PAYMENT_METHOD,
    loader: () =>
      f(
        () => import("./chunk-20ce093a.js"),
        [
          "js/chunk-20ce093a.js",
          "js/chunk-dd975def.js",
          "js/chunk-904196e4.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-db4275ef.js",
          "js/chunk-6cef32b9.js",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-d0451701.js",
          "js/chunk-c371c638.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-81665eeb.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "js/chunk-b4b3c7cb.js",
          "js/chunk-7645b0aa.js",
          "css/index-4f28ab59.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_TRANSAK,
    loader: () =>
      f(
        () => import("./chunk-6643225e.js"),
        [
          "js/chunk-6643225e.js",
          "js/chunk-dd975def.js",
          "js/chunk-0f5b36e3.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-d5ee56c9.js",
          "css/Loading-0bc93ce1.css",
          "css/index-2c41cc86.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_TRANSAK_RESULT,
    loader: () =>
      f(
        () => import("./chunk-2be574be.js"),
        [
          "js/chunk-2be574be.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-bc695d4e.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-13de262b.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-305a0774.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-5c6d3b9c.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-55c3687d.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-61c8e3fb.js",
          "css/PageLayout-c9a554a3.css",
          "js/chunk-88ee9262.js",
          "css/index-2b3c6e4e.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_BUY_RESULT,
    loader: () =>
      f(
        () => import("./chunk-1e212ecd.js"),
        [
          "js/chunk-1e212ecd.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-8016f002.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-13de262b.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-305a0774.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-5c6d3b9c.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-55c3687d.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-61c8e3fb.js",
          "css/PageLayout-c9a554a3.css",
          "js/chunk-c7fd296c.js",
          "js/chunk-2a04b230.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/Skeleton-5ce5869f.css",
          "css/CardInput-048399a3.css",
          "js/chunk-88ee9262.js",
          "css/index-83e42fec.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_PLACE_ORDER,
    loader: () =>
      f(
        () => import("./chunk-d62fd6e7.js"),
        [
          "js/chunk-d62fd6e7.js",
          "js/chunk-dd975def.js",
          "js/chunk-904196e4.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-db4275ef.js",
          "js/chunk-f4df2524.js",
          "css/QuantityInput-431c94ae.css",
          "js/chunk-79fecbf3.js",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-7188557f.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7d1112a0.js",
          "js/chunk-b4b3c7cb.js",
          "js/chunk-7645b0aa.js",
          "css/index-4dd032d2.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_SELL_CARD,
    loader: () =>
      f(
        () => import("./chunk-3de6f58d.js"),
        [
          "js/chunk-3de6f58d.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-13de262b.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-305a0774.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-5c6d3b9c.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-55c3687d.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-61c8e3fb.js",
          "css/PageLayout-c9a554a3.css",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
          "css/index-1c1be30d.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_SELL_CONFIRM,
    loader: () =>
      f(
        () => import("./chunk-592722d5.js"),
        [
          "js/chunk-592722d5.js",
          "js/chunk-dd975def.js",
          "js/chunk-904196e4.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-db4275ef.js",
          "js/chunk-881da61c.js",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-d0451701.js",
          "js/chunk-c371c638.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-81665eeb.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "js/chunk-60d42613.js",
          "js/chunk-cf4c4894.js",
          "css/util-ba2dcd99.css",
          "css/fiat-balance-transaction-2cf30bcc.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7fb60e46.js",
          "css/ChooseBankAccountDrowdown-acbc74fe.css",
          "js/chunk-7cd8a3ff.js",
          "css/TimerForRefreshPricing-c56381d5.css",
          "js/chunk-de89b88d.js",
          "js/chunk-721f10fe.js",
          "css/ChooseCardDrowdown-eaae74a4.css",
          "css/index-ef673246.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_SELL_PAYMENT_METHOD,
    loader: () =>
      f(
        () => import("./chunk-c04d8be0.js"),
        [
          "js/chunk-c04d8be0.js",
          "js/chunk-dd975def.js",
          "js/chunk-904196e4.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-db4275ef.js",
          "js/chunk-881da61c.js",
          "js/chunk-7a5ce19e.js",
          "js/chunk-383460f7.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-d9b724b7.js",
          "js/chunk-905d0fe6.js",
          "css/CardInput-048399a3.css",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-d0451701.js",
          "js/chunk-c371c638.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "js/chunk-9f1ca32a.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-81665eeb.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-c3b77e37.js",
          "css/FormItem-5ed55b61.css",
          "js/chunk-009444d3.js",
          "css/legend-creditdebitcard-buy-6b85e363.css",
          "js/chunk-b4b3c7cb.js",
          "js/chunk-7645b0aa.js",
          "css/index-796b9ddf.css",
        ]
      ),
  },
  {
    slug: l.FIAT_BUY_CRYPTO_SELL_RESULT,
    loader: () =>
      f(
        () => import("./chunk-4378c5eb.js"),
        [
          "js/chunk-4378c5eb.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-cf4c4894.js",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-bc695d4e.js",
          "js/chunk-5c669679.js",
          "js/chunk-ff1e8403.js",
          "js/chunk-ded14b26.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "css/util-ba2dcd99.css",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-13de262b.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-6bce4a36.js",
          "js/chunk-3b290d0f.js",
          "css/Popup-64d05b95.css",
          "js/chunk-9573fee0.js",
          "js/chunk-bbb34680.js",
          "js/chunk-018b7923.js",
          "css/UserCPFFormModal-572ef698.css",
          "js/chunk-305a0774.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-5c6d3b9c.js",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-55c3687d.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-61c8e3fb.js",
          "css/PageLayout-c9a554a3.css",
          "js/chunk-88ee9262.js",
          "css/index-322359a5.css",
        ]
      ),
  },
  {
    slug: l.FIAT_DEPOSIT,
    loader: () =>
      f(
        () => import("./chunk-d94aed1d.js"),
        [
          "js/chunk-d94aed1d.js",
          "js/chunk-dd975def.js",
          "js/chunk-6701631e.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "css/PageLayout-cdf14d6b.css",
          "js/chunk-f4df2524.js",
          "css/QuantityInput-431c94ae.css",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-9f1ca32a.js",
          "js/chunk-113b1735.js",
          "css/utils-e981a47c.css",
          "js/chunk-d0451701.js",
          "js/chunk-c7fd296c.js",
          "js/chunk-5c669679.js",
          "js/chunk-2a04b230.js",
          "js/chunk-ded14b26.js",
          "js/chunk-83bbee6e.js",
          "css/BindCardSellDialog-38ee9b57.css",
          "js/chunk-81665eeb.js",
          "css/CardInput-048399a3.css",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-ff1e8403.js",
          "css/TradingRequirementsDialog-4b7165d7.css",
          "js/chunk-29571520.js",
          "js/chunk-2bd84ce4.js",
          "css/FiatAgreementView-3ac19a89.css",
          "js/chunk-9b1cca3e.js",
          "css/index-2709c345.css",
        ]
      ),
  },
  {
    slug: l.FIAT_WITHDRAW,
    loader: () =>
      f(
        () => import("./chunk-5eb77860.js"),
        [
          "js/chunk-5eb77860.js",
          "js/chunk-dd975def.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-9b1cca3e.js",
          "js/chunk-0f5b36e3.js",
        ]
      ),
  },
  {
    slug: l.FIAT_WITHDRAW_ORDER_CONFIRM,
    loader: () =>
      f(
        () => import("./chunk-5e227b6f.js"),
        [
          "js/chunk-5e227b6f.js",
          "js/chunk-dd975def.js",
          "js/chunk-6701631e.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "css/PageLayout-cdf14d6b.css",
          "js/chunk-2db47011.js",
          "css/Tooltip-ca7ceb2d.css",
          "js/chunk-7fb60e46.js",
          "css/ChooseBankAccountDrowdown-acbc74fe.css",
          "js/chunk-9b1cca3e.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "js/chunk-d0451701.js",
          "js/chunk-f9d71564.js",
          "css/index-d9ebc502.css",
        ]
      ),
  },
  {
    slug: l.FIAT_DEPOSIT_TRANSFER_INFO,
    loader: () =>
      f(
        () => import("./chunk-ff2a7694.js"),
        [
          "js/chunk-ff2a7694.js",
          "js/chunk-dd975def.js",
          "js/chunk-6701631e.js",
          "js/chunk-4676658e.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "css/PageLayout-cdf14d6b.css",
          "css/index-6fbb0aaf.css",
        ]
      ),
  },
  {
    slug: l.FIAT_WITHDRAW_ORDER_RESULT,
    loader: () =>
      f(
        () => import("./chunk-05f3f4fd.js"),
        [
          "js/chunk-05f3f4fd.js",
          "js/chunk-dd975def.js",
          "js/chunk-8016f002.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e0c46928.js",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "css/Footer-609eb81f.css",
          "js/chunk-305a0774.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-79fecbf3.js",
          "css/AnnouncementBanner-568ebba6.css",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-b5eb8a0c.js",
          "js/chunk-2355bea8.js",
          "js/chunk-61c8e3fb.js",
          "js/chunk-2fd7c6d8.js",
          "js/chunk-29571520.js",
          "css/RiskForLegendDialog-8c64b34d.css",
          "css/index-8e65bd06.css",
        ]
      ),
  },
  {
    slug: l.FIAT_B2C_URL_PAYMENT,
    loader: () =>
      f(
        () => import("./chunk-bc24fc33.js"),
        [
          "js/chunk-bc24fc33.js",
          "js/chunk-dd975def.js",
          "js/chunk-0f5b36e3.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-e0c46928.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-4676658e.js",
          "js/chunk-8016f002.js",
          "css/Footer-609eb81f.css",
          "js/chunk-5c6d3b9c.js",
          "css/FAQWrap-4535e8c6.css",
          "css/Skeleton-5ce5869f.css",
          "js/chunk-a349155c.js",
          "js/chunk-c355af2a.js",
          "js/chunk-246fe560.js",
          "js/chunk-bea19973.js",
          "js/chunk-3c39b1e9.js",
          "js/chunk-5f3a38f9.js",
          "js/chunk-47b49003.js",
          "js/chunk-3b9e2777.js",
          "js/chunk-2bd84ce4.js",
          "css/NotesWrap-f17cf619.css",
          "js/chunk-7188557f.js",
          "css/PageMain-828cde44.css",
          "js/chunk-d8ae9668.js",
          "js/chunk-2355bea8.js",
          "js/chunk-e263091c.js",
          "js/chunk-a50a1c93.js",
          "js/chunk-f9d71564.js",
          "css/PageMain-430e61ba.css",
          "js/chunk-b6bb6c80.js",
          "js/chunk-c371c638.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "css/index-dc68625a.css",
        ]
      ),
  },
  {
    slug: l.FIAT_B2C_PAYMENT_RESULT,
    loader: () =>
      f(
        () => import("./chunk-4cc506e8.js"),
        [
          "js/chunk-4cc506e8.js",
          "js/chunk-dd975def.js",
          "js/chunk-e0c46928.js",
          "js/chunk-65793be5.js",
          "css/browser-35e25d02.css",
          "js/chunk-0f5b36e3.js",
          "css/buy-crypto-card-a68d3fb4.css",
          "js/chunk-b6bb6c80.js",
          "js/chunk-c371c638.js",
          "js/chunk-e978cd3f.js",
          "js/chunk-bc695d4e.js",
          "js/chunk-db4275ef.js",
          "js/chunk-b5eb8a0c.js",
          "css/utils-a1e18014.css",
          "css/index-ca962296.css",
        ]
      ),
  },
];
$e(Lr);
Wr(!0, () => new Worker("/p-worker/js/data-worker-b2656089.js")).then();
export {
  kr as A,
  st as B,
  S as C,
  H as D,
  nt as E,
  Ke as F,
  ve as G,
  v as H,
  f as I,
  fr as J,
  cr as K,
  lr as L,
  It as M,
  te as N,
  D as O,
  Bt as P,
  ge as Q,
  zr as R,
  Br as S,
  Le as T,
  Ot as U,
  lt as V,
  Xr as W,
  Er as X,
  Wt as Y,
  V as _,
  pt as a,
  Gt as b,
  Z as c,
  Q as d,
  M as e,
  ee as f,
  $r as g,
  B as h,
  K as i,
  Ht as j,
  at as k,
  L as l,
  je as m,
  Zr as n,
  W as o,
  Vt as p,
  Et as q,
  ut as r,
  qe as s,
  Sr as t,
  Jr as u,
  ne as v,
  _e as w,
  Qr as x,
  j as y,
  C as z,
};
//# sourceMappingURL=app-5c09a141.js.map
