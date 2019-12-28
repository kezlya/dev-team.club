;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    0: function(e, t, n) {
      "use strict"
      n.d(t, "v", function() {
        return r
      }),
        n.d(t, "q", function() {
          return o
        }),
        n.d(t, "j", function() {
          return c
        }),
        n.d(t, "t", function() {
          return l
        }),
        n.d(t, "k", function() {
          return f
        }),
        n.d(t, "u", function() {
          return d
        }),
        n.d(t, "o", function() {
          return h
        }),
        n.d(t, "s", function() {
          return m
        }),
        n.d(t, "l", function() {
          return v
        }),
        n.d(t, "m", function() {
          return x
        }),
        n.d(t, "n", function() {
          return y
        }),
        n.d(t, "h", function() {
          return w
        }),
        n.d(t, "w", function() {
          return _
        }),
        n.d(t, "i", function() {
          return k
        }),
        n.d(t, "r", function() {
          return O
        }),
        n.d(t, "f", function() {
          return j
        }),
        n.d(t, "b", function() {
          return C
        }),
        n.d(t, "e", function() {
          return $
        }),
        n.d(t, "c", function() {
          return R
        }),
        n.d(t, "d", function() {
          return P
        }),
        n.d(t, "g", function() {
          return E
        }),
        n.d(t, "a", function() {
          return L
        }),
        n.d(t, "p", function() {
          return T
        })
      var r = {},
        o = [
          { code: "en", file: "en.js" },
          { code: "ru", file: "ru.js" }
        ],
        c = "en",
        l = "___",
        f = "default",
        d = "prefix_except_default",
        h = !0,
        m = null,
        v = {
          useCookie: !0,
          cookieKey: "i18n_redirected",
          alwaysRedirect: !1,
          fallbackLocale: null
        },
        x = !1,
        y = !1,
        w = "",
        _ = { moduleName: "i18n", syncLocale: !1, syncMessages: !1, syncRouteParams: !0 },
        k = function() {
          return null
        },
        O = function() {
          return null
        },
        j = "nuxt-i18n",
        C = "code",
        $ = "iso",
        R = "domain",
        P = "file",
        E = {
          PREFIX: "prefix",
          PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
          PREFIX_AND_DEFAULT: "prefix_and_default",
          NO_PREFIX: "no_prefix"
        },
        L = "nuxtI18n",
        T = ["en", "ru"]
    },
    100: function(e, t, n) {
      var content = n(220)
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals)
      ;(0, n(13).default)("fd9f26b4", content, !0, { sourceMap: !1 })
    },
    107: function(e, t, n) {
      "use strict"
      n(4), n(74), n(8), n(6), n(35), n(36)
      var r = n(2),
        o =
          window.requestIdleCallback ||
          function(e) {
            var t = Date.now()
            return setTimeout(function() {
              e({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - t))
                }
              })
            }, 1)
          },
        c =
          window.cancelIdleCallback ||
          function(e) {
            clearTimeout(e)
          },
        l =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(e) {
            e.forEach(function(e) {
              var t = e.intersectionRatio,
                link = e.target
              t <= 0 || link.__prefetch()
            })
          })
      t.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 }
        },
        mounted: function() {
          this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, { timeout: 2e3 }))
        },
        beforeDestroy: function() {
          c(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function() {
            l &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              l.observe(this.$el),
              (this.__observed = !0))
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function() {
            var e = navigator.connection
            return !(
              this.$nuxt.isOffline ||
              (e && ((e.effectiveType || "").includes("2g") || e.saveData))
            )
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(e) {
                return e.components.default
              })
              .filter(function(e) {
                return "function" == typeof e && !e.options && !e.__prefetched
              })
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              l.unobserve(this.$el)
              var e = this.getPrefetchComponents(),
                t = !0,
                n = !1,
                r = void 0
              try {
                for (var o, c = e[Symbol.iterator](); !(t = (o = c.next()).done); t = !0) {
                  var f = o.value,
                    d = f()
                  d instanceof Promise && d.catch(function() {}), (f.__prefetched = !0)
                }
              } catch (e) {
                ;(n = !0), (r = e)
              } finally {
                try {
                  t || null == c.return || c.return()
                } finally {
                  if (n) throw r
                }
              }
            }
          }
        }
      }
    },
    174: function(e, t, n) {
      e.exports = n(175)
    },
    175: function(e, t, n) {
      "use strict"
      n.r(t),
        function(e) {
          var t = n(17),
            r =
              (n(82),
              n(74),
              n(8),
              n(77),
              n(54),
              n(35),
              n(36),
              n(6),
              n(4),
              n(7),
              n(33),
              n(141),
              n(184),
              n(189),
              n(191),
              n(2)),
            o = n(163),
            c = n(79),
            l = n(5),
            f = n(57),
            d = n(107)
          r.a.component(d.a.name, d.a), r.a.component("NLink", d.a), e.fetch || (e.fetch = o.a)
          var h,
            m,
            v = [],
            x = window.__NUXT__ || {}
          Object.assign(r.a.config, { silent: !0, performance: !1 })
          var y = r.a.config.errorHandler || console.error
          function w(e, t, n) {
            var r = function(component) {
              var e =
                (function(component, e) {
                  if (!component || !component.options || !component.options[e]) return {}
                  var option = component.options[e]
                  if ("function" == typeof option) {
                    for (
                      var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2;
                      r < t;
                      r++
                    )
                      n[r - 2] = arguments[r]
                    return option.apply(void 0, n)
                  }
                  return option
                })(component, "transition", t, n) || {}
              return "string" == typeof e ? { name: e } : e
            }
            return e.map(function(e) {
              var t = Object.assign({}, r(e))
              if (n && n.matched.length && n.matched[0].components.default) {
                var o = r(n.matched[0].components.default)
                Object.keys(o)
                  .filter(function(e) {
                    return o[e] && e.toLowerCase().includes("leave")
                  })
                  .forEach(function(e) {
                    t[e] = o[e]
                  })
              }
              return t
            })
          }
          function _(e, t, n) {
            var r,
              o,
              c,
              f,
              d = this
            return regeneratorRuntime.async(
              function(m) {
                for (;;)
                  switch ((m.prev = m.next)) {
                    case 0:
                      if (
                        ((this._pathChanged = Boolean(h.nuxt.err) || t.path !== e.path),
                        (this._queryChanged = JSON.stringify(e.query) !== JSON.stringify(t.query)),
                        (this._diffQuery = this._queryChanged ? Object(l.g)(e.query, t.query) : []),
                        this._pathChanged &&
                          this.$loading.start &&
                          !this.$loading.manual &&
                          this.$loading.start(),
                        (m.prev = 4),
                        this._pathChanged || !this._queryChanged)
                      ) {
                        m.next = 11
                        break
                      }
                      return (
                        (m.next = 8),
                        regeneratorRuntime.awrap(
                          Object(l.n)(e, function(e, t) {
                            return { Component: e, instance: t }
                          })
                        )
                      )
                    case 8:
                      ;(r = m.sent),
                        r.some(function(n) {
                          var r = n.Component,
                            o = n.instance,
                            c = r.options.watchQuery
                          return (
                            !0 === c ||
                            (Array.isArray(c)
                              ? c.some(function(e) {
                                  return d._diffQuery[e]
                                })
                              : "function" == typeof c && c.apply(o, [e.query, t.query]))
                          )
                        }) &&
                          this.$loading.start &&
                          !this.$loading.manual &&
                          this.$loading.start()
                    case 11:
                      n(), (m.next = 25)
                      break
                    case 14:
                      if (
                        ((m.prev = 14),
                        (m.t0 = m.catch(4)),
                        (o = m.t0 || {}),
                        (c = o.statusCode || o.status || (o.response && o.response.status) || 500),
                        (f = o.message || ""),
                        !/^Loading( CSS)? chunk (\d)+ failed\./.test(f))
                      ) {
                        m.next = 22
                        break
                      }
                      return window.location.reload(!0), m.abrupt("return")
                    case 22:
                      this.error({ statusCode: c, message: f }),
                        this.$nuxt.$emit("routeChanged", e, t, o),
                        n()
                    case 25:
                    case "end":
                      return m.stop()
                  }
              },
              null,
              this,
              [[4, 14]]
            )
          }
          function k(e, t) {
            return x.serverRendered && t && Object(l.a)(e, t), (e._Ctor = e), e
          }
          function O(e) {
            var path = Object(l.d)(e.options.base, e.options.mode)
            return Object(l.c)(e.match(path), function(e, t, n, r, o) {
              var c
              return regeneratorRuntime.async(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("function" != typeof e || e.options) {
                        t.next = 4
                        break
                      }
                      return (t.next = 3), regeneratorRuntime.awrap(e())
                    case 3:
                      e = t.sent
                    case 4:
                      return (
                        (c = k(Object(l.o)(e), x.data ? x.data[o] : null)),
                        (n.components[r] = c),
                        t.abrupt("return", c)
                      )
                    case 7:
                    case "end":
                      return t.stop()
                  }
              })
            })
          }
          function j(e, t, n) {
            var r = this,
              o = ["nuxti18n"],
              f = !1
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.o)(n)).options.middleware && (o = o.concat(n.options.middleware)),
                e.forEach(function(e) {
                  e.options.middleware && (o = o.concat(e.options.middleware))
                })),
              (o = o.map(function(e) {
                return "function" == typeof e
                  ? e
                  : ("function" != typeof c.a[e] &&
                      ((f = !0), r.error({ statusCode: 500, message: "Unknown middleware " + e })),
                    c.a[e])
              })),
              !f)
            )
              return Object(l.k)(o, t)
          }
          function C(e, t, n) {
            var r,
              o,
              c,
              d,
              m,
              x,
              y,
              _,
              k,
              O,
              C,
              $,
              R,
              P,
              E,
              L,
              T,
              N = this
            return regeneratorRuntime.async(
              function(D) {
                for (;;)
                  switch ((D.prev = D.next)) {
                    case 0:
                      if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                        D.next = 2
                        break
                      }
                      return D.abrupt("return", n())
                    case 2:
                      return (
                        e === t
                          ? (v = [])
                          : ((r = []),
                            (v = Object(l.e)(t, r).map(function(e, i) {
                              return Object(l.b)(t.matched[r[i]].path)(t.params)
                            }))),
                        (o = !1),
                        (c = function(path) {
                          t.path === path.path && N.$loading.finish && N.$loading.finish(),
                            t.path !== path.path && N.$loading.pause && N.$loading.pause(),
                            o || ((o = !0), n(path))
                        }),
                        (D.next = 7),
                        regeneratorRuntime.awrap(
                          Object(l.p)(h, { route: e, from: t, next: c.bind(this) })
                        )
                      )
                    case 7:
                      if (
                        ((this._dateLastError = h.nuxt.dateErr),
                        (this._hadError = Boolean(h.nuxt.err)),
                        (d = []),
                        (m = Object(l.e)(e, d)).length)
                      ) {
                        D.next = 25
                        break
                      }
                      return (D.next = 14), regeneratorRuntime.awrap(j.call(this, m, h.context))
                    case 14:
                      if (!o) {
                        D.next = 16
                        break
                      }
                      return D.abrupt("return")
                    case 16:
                      return (
                        (D.next = 18),
                        regeneratorRuntime.awrap(
                          this.loadLayout(
                            "function" == typeof f.a.layout ? f.a.layout(h.context) : f.a.layout
                          )
                        )
                      )
                    case 18:
                      return (
                        (x = D.sent),
                        (D.next = 21),
                        regeneratorRuntime.awrap(j.call(this, m, h.context, x))
                      )
                    case 21:
                      if (!o) {
                        D.next = 23
                        break
                      }
                      return D.abrupt("return")
                    case 23:
                      return (
                        h.context.error({
                          statusCode: 404,
                          message: "This page could not be found"
                        }),
                        D.abrupt("return", n())
                      )
                    case 25:
                      return (
                        m.forEach(function(e) {
                          e._Ctor &&
                            e._Ctor.options &&
                            ((e.options.asyncData = e._Ctor.options.asyncData),
                            (e.options.fetch = e._Ctor.options.fetch))
                        }),
                        this.setTransitions(w(m, e, t)),
                        (D.prev = 27),
                        (D.next = 30),
                        regeneratorRuntime.awrap(j.call(this, m, h.context))
                      )
                    case 30:
                      if (!o) {
                        D.next = 32
                        break
                      }
                      return D.abrupt("return")
                    case 32:
                      if (!h.context._errored) {
                        D.next = 34
                        break
                      }
                      return D.abrupt("return", n())
                    case 34:
                      return (
                        "function" == typeof (y = m[0].options.layout) && (y = y(h.context)),
                        (D.next = 38),
                        regeneratorRuntime.awrap(this.loadLayout(y))
                      )
                    case 38:
                      return (
                        (y = D.sent),
                        (D.next = 41),
                        regeneratorRuntime.awrap(j.call(this, m, h.context, y))
                      )
                    case 41:
                      if (!o) {
                        D.next = 43
                        break
                      }
                      return D.abrupt("return")
                    case 43:
                      if (!h.context._errored) {
                        D.next = 45
                        break
                      }
                      return D.abrupt("return", n())
                    case 45:
                      ;(_ = !0),
                        (D.prev = 46),
                        (k = !0),
                        (O = !1),
                        (C = void 0),
                        (D.prev = 50),
                        ($ = m[Symbol.iterator]())
                    case 52:
                      if ((k = (R = $.next()).done)) {
                        D.next = 64
                        break
                      }
                      if ("function" == typeof (P = R.value).options.validate) {
                        D.next = 56
                        break
                      }
                      return D.abrupt("continue", 61)
                    case 56:
                      return (D.next = 58), regeneratorRuntime.awrap(P.options.validate(h.context))
                    case 58:
                      if ((_ = D.sent)) {
                        D.next = 61
                        break
                      }
                      return D.abrupt("break", 64)
                    case 61:
                      ;(k = !0), (D.next = 52)
                      break
                    case 64:
                      D.next = 70
                      break
                    case 66:
                      ;(D.prev = 66), (D.t0 = D.catch(50)), (O = !0), (C = D.t0)
                    case 70:
                      ;(D.prev = 70), (D.prev = 71), k || null == $.return || $.return()
                    case 73:
                      if (((D.prev = 73), !O)) {
                        D.next = 76
                        break
                      }
                      throw C
                    case 76:
                      return D.finish(73)
                    case 77:
                      return D.finish(70)
                    case 78:
                      D.next = 84
                      break
                    case 80:
                      return (
                        (D.prev = 80),
                        (D.t1 = D.catch(46)),
                        this.error({ statusCode: D.t1.statusCode || "500", message: D.t1.message }),
                        D.abrupt("return", n())
                      )
                    case 84:
                      if (_) {
                        D.next = 87
                        break
                      }
                      return (
                        this.error({ statusCode: 404, message: "This page could not be found" }),
                        D.abrupt("return", n())
                      )
                    case 87:
                      return (
                        (D.next = 89),
                        regeneratorRuntime.awrap(
                          Promise.all(
                            m.map(function(n, i) {
                              if (
                                ((n._path = Object(l.b)(e.matched[d[i]].path)(e.params)),
                                (n._dataRefresh = !1),
                                (N._pathChanged && N._queryChanged) || n._path !== v[i])
                              )
                                n._dataRefresh = !0
                              else if (!N._pathChanged && N._queryChanged) {
                                var r = n.options.watchQuery
                                !0 === r
                                  ? (n._dataRefresh = !0)
                                  : Array.isArray(r)
                                  ? (n._dataRefresh = r.some(function(e) {
                                      return N._diffQuery[e]
                                    }))
                                  : "function" == typeof r &&
                                    (E || (E = Object(l.f)(e)),
                                    (n._dataRefresh = r.apply(E[i], [e.query, t.query])))
                              }
                              if (N._hadError || !N._isMounted || n._dataRefresh) {
                                var o = [],
                                  c =
                                    n.options.asyncData && "function" == typeof n.options.asyncData,
                                  f = Boolean(n.options.fetch),
                                  m = c && f ? 30 : 45
                                if (c) {
                                  var x = Object(l.m)(n.options.asyncData, h.context).then(function(
                                    e
                                  ) {
                                    Object(l.a)(n, e), N.$loading.increase && N.$loading.increase(m)
                                  })
                                  o.push(x)
                                }
                                if (((N.$loading.manual = !1 === n.options.loading), f)) {
                                  var p = n.options.fetch(h.context)
                                  ;(p && (p instanceof Promise || "function" == typeof p.then)) ||
                                    (p = Promise.resolve(p)),
                                    p.then(function(e) {
                                      N.$loading.increase && N.$loading.increase(m)
                                    }),
                                    o.push(p)
                                }
                                return Promise.all(o)
                              }
                            })
                          )
                        )
                      )
                    case 89:
                      o ||
                        (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                        n()),
                        (D.next = 106)
                      break
                    case 92:
                      if (
                        ((D.prev = 92),
                        (D.t2 = D.catch(27)),
                        "ERR_REDIRECT" !== (L = D.t2 || {}).message)
                      ) {
                        D.next = 97
                        break
                      }
                      return D.abrupt("return", this.$nuxt.$emit("routeChanged", e, t, L))
                    case 97:
                      return (
                        (v = []),
                        Object(l.i)(L),
                        "function" == typeof (T = f.a.layout) && (T = T(h.context)),
                        (D.next = 103),
                        regeneratorRuntime.awrap(this.loadLayout(T))
                      )
                    case 103:
                      this.error(L), this.$nuxt.$emit("routeChanged", e, t, L), n()
                    case 106:
                    case "end":
                      return D.stop()
                  }
              },
              null,
              this,
              [
                [27, 92],
                [46, 80],
                [50, 66, 70, 78],
                [71, , 73, 77]
              ]
            )
          }
          function $(e, n) {
            Object(l.c)(e, function(e, n, o, c) {
              return (
                "object" !== Object(t.a)(e) ||
                  e.options ||
                  (((e = r.a.extend(e))._Ctor = e), (o.components[c] = e)),
                e
              )
            })
          }
          function R(e) {
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error()
            var t = this.$options.nuxt.err
              ? f.a.layout
              : e.matched[0].components.default.options.layout
            "function" == typeof t && (t = t(h.context)), this.setLayout(t)
          }
          function P(e, t) {
            var n = this
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var o = Object(l.f)(e),
                c = Object(l.e)(e)
              r.a.nextTick(function() {
                o.forEach(function(e, i) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    c[i] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    "function" == typeof e.constructor.options.data
                  ) {
                    var t = e.constructor.options.data.call(e)
                    for (var n in t) r.a.set(e.$data, n, t[n])
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit("triggerScroll")
                    })
                  }
                }),
                  R.call(n, e)
              })
            }
          }
          function E(e) {
            window.onNuxtReadyCbs.forEach(function(t) {
              "function" == typeof t && t(e)
            }),
              "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
              m.afterEach(function(t, n) {
                r.a.nextTick(function() {
                  return e.$nuxt.$emit("routeChanged", t, n)
                })
              })
          }
          Object(f.b)()
            .then(function(e) {
              var t, n, o, c
              return regeneratorRuntime.async(function(f) {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      return (
                        (h = e.app),
                        (m = e.router),
                        (t = new r.a(h)),
                        (n = function() {
                          t.$mount("#__nuxt"),
                            m.afterEach($),
                            m.afterEach(P.bind(t)),
                            r.a.nextTick(function() {
                              E(t)
                            })
                        }),
                        (f.next = 6),
                        regeneratorRuntime.awrap(Promise.all(O(m)))
                      )
                    case 6:
                      if (
                        ((o = f.sent),
                        (t.setTransitions = t.$options.nuxt.setTransitions.bind(t)),
                        o.length &&
                          (t.setTransitions(w(o, m.currentRoute)),
                          (v = m.currentRoute.matched.map(function(e) {
                            return Object(l.b)(e.path)(m.currentRoute.params)
                          }))),
                        (t.$loading = {}),
                        x.error && t.error(x.error),
                        m.beforeEach(_.bind(t)),
                        m.beforeEach(C.bind(t)),
                        !x.serverRendered)
                      ) {
                        f.next = 16
                        break
                      }
                      return n(), f.abrupt("return")
                    case 16:
                      ;(c = function() {
                        $(m.currentRoute, m.currentRoute), R.call(t, m.currentRoute), n()
                      }),
                        C.call(t, m.currentRoute, m.currentRoute, function(path) {
                          if (path) {
                            var e = m.afterEach(function(t, n) {
                              e(), c()
                            })
                            m.push(path, void 0, function(e) {
                              e && y(e)
                            })
                          } else c()
                        })
                    case 18:
                    case "end":
                      return f.stop()
                  }
              })
            })
            .catch(y)
        }.call(this, n(68))
    },
    200: function(e, t, n) {
      "use strict"
      var r = n(97)
      n.n(r).a
    },
    201: function(e, t, n) {
      ;(e.exports = n(12)(!1)).push([e.i, "h1[data-v-40237138]{font-size:20px}", ""])
    },
    204: function(e, t, n) {
      "use strict"
      var r = n(98)
      n.n(r).a
    },
    205: function(e, t, n) {
      ;(e.exports = n(12)(!1)).push([
        e.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",
        ""
      ])
    },
    206: function(e, t, n) {
      var content = n(207)
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals)
      ;(0, n(13).default)("18eee8ff", content, !0, { sourceMap: !1 })
    },
    207: function(e, t, n) {
      ;(e.exports = n(12)(!1)).push([
        e.i,
        "*{font-family:Work Sans,sans-serif}h1,h2{font-size:86px;text-transform:uppercase;font-weight:700}@media screen and (max-width:600px){h1,h2{font-size:54px}}",
        ""
      ])
    },
    208: function(e, t, n) {
      "use strict"
      var r = n(99)
      n.n(r).a
    },
    209: function(e, t, n) {
      ;(e.exports = n(12)(!1)).push([
        e.i,
        ".img-bg[data-v-534269f4]{width:100%;margin-top:-80px;position:relative}.img-bg .slogan[data-v-534269f4]{top:50%;left:0;margin:0 40px;-webkit-transform:translateY(-50%);transform:translateY(-50%);position:absolute;font-weight:700;text-transform:uppercase}.img-bg .slogan__big[data-v-534269f4]{font-size:86px;line-height:100px;white-space:pre-line}@media screen and (max-width:600px){.img-bg .slogan__big[data-v-534269f4]{font-size:54px;line-height:60px}}.img-bg .slogan__small[data-v-534269f4]{font-size:36px}@media screen and (max-width:600px){.img-bg .slogan__small[data-v-534269f4]{font-size:33px}}",
        ""
      ])
    },
    219: function(e, t, n) {
      "use strict"
      var r = n(100)
      n.n(r).a
    },
    220: function(e, t, n) {
      ;(e.exports = n(12)(!1)).push([
        e.i,
        ".color-white[data-v-531a6d94]{color:#fff!important}.color-white .logo[data-v-531a6d94]{color:#fff;border-color:#fff}.up-page[data-v-531a6d94]{background:transparent!important}.logo[data-v-531a6d94]{border:2px solid #000;padding:10px 18px;font-weight:600;font-size:16px;color:#000;text-decoration:none}.logo .local-switcher[data-v-531a6d94],.logo .nav-link[data-v-531a6d94]{margin:10px 5px;font-size:16px}.logo .menu[data-v-531a6d94]{padding:0 24px}@media (max-width:400px){.logo .menu[data-v-531a6d94]{padding:0}}.logo .mobile-menu__title[data-v-531a6d94]{font-size:25px!important}",
        ""
      ])
    },
    264: function(e, t, n) {
      var map = { "./en": [171, 0], "./en.js": [171, 0], "./ru": [172, 1], "./ru.js": [172, 1] }
      function r(e) {
        if (!n.o(map, e))
          return Promise.resolve().then(function() {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = "MODULE_NOT_FOUND"), t)
          })
        var t = map[e],
          r = t[0]
        return n.e(t[1]).then(function() {
          return n(r)
        })
      }
      ;(r.keys = function() {
        return Object.keys(map)
      }),
        (r.id = 264),
        (e.exports = r)
    },
    48: function(e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, "loadLanguageAsync", function() {
          return l
        }),
        n.d(t, "validateRouteParams", function() {
          return d
        }),
        n.d(t, "isSameRoute", function() {
          return v
        }),
        n.d(t, "getLocaleDomain", function() {
          return x
        }),
        n.d(t, "getLocaleFromRoute", function() {
          return y
        }),
        n.d(t, "syncVuex", function() {
          return w
        })
      n(77), n(150), n(39), n(33), n(38), n(7)
      var r = n(14),
        o = (n(6), n(263), n(17)),
        c = (n(4), n(50), n(35), n(36), n(54), n(0))
      function l(e, t) {
        var r, o, l, f, d, h
        return regeneratorRuntime.async(
          function(m) {
            for (;;)
              switch ((m.prev = m.next)) {
                case 0:
                  if (
                    ((r = e.app).i18n.loadedLanguages || (r.i18n.loadedLanguages = []),
                    r.i18n.loadedLanguages.includes(t))
                  ) {
                    m.next = 30
                    break
                  }
                  if (
                    !(o = r.i18n.locales.find(function(e) {
                      return e[c.b] === t
                    }))
                  ) {
                    m.next = 30
                    break
                  }
                  if (!(l = o[c.d])) {
                    m.next = 29
                    break
                  }
                  return (m.prev = 7), (m.next = 10), regeneratorRuntime.awrap(n(264)("./" + l))
                case 10:
                  if (((f = m.sent), "function" != typeof (d = f.default ? f.default : f))) {
                    m.next = 18
                    break
                  }
                  return (m.next = 15), regeneratorRuntime.awrap(Promise.resolve(d(e)))
                case 15:
                  ;(m.t0 = m.sent), (m.next = 19)
                  break
                case 18:
                  m.t0 = d
                case 19:
                  ;(h = m.t0),
                    r.i18n.setLocaleMessage(t, h),
                    r.i18n.loadedLanguages.push(t),
                    (m.next = 27)
                  break
                case 24:
                  ;(m.prev = 24), (m.t1 = m.catch(7)), console.error(m.t1)
                case 27:
                  m.next = 30
                  break
                case 29:
                  console.warn("[".concat(c.f, "] Could not find lang file for locale ").concat(t))
                case 30:
                case "end":
                  return m.stop()
              }
          },
          null,
          null,
          [[7, 24]]
        )
      }
      var f = function(e) {
          return e && !Array.isArray(e) && "object" === Object(o.a)(e)
        },
        d = function(e) {
          f(e)
            ? Object.entries(e).forEach(function(e) {
                var t = Object(r.a)(e, 2),
                  n = t[0],
                  o = t[1]
                c.p.includes(n)
                  ? f(o) ||
                    console.warn(
                      "["
                        .concat(c.f, "] Trying to set route params for locale ")
                        .concat(n, " with a non-object value")
                    )
                  : console.warn(
                      "["
                        .concat(c.f, "] Trying to set route params for key ")
                        .concat(n, " which is not a valid locale")
                    )
              })
            : console.warn("[".concat(c.f, "] Route params should be an object"))
        },
        h = /\/?$/
      function m() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (!a || !b) return a === b
        var e = Object.keys(a),
          t = Object.keys(b)
        return (
          e.length === t.length &&
          e.every(function(e) {
            var t = a[e],
              n = b[e]
            return "object" === Object(o.a)(t) && "object" === Object(o.a)(n)
              ? m(t, n)
              : String(t) === String(n)
          })
        )
      }
      function v(a, b) {
        return (
          !!b &&
          (a.path && b.path
            ? a.path.replace(h, "") === b.path.replace(h, "") &&
              a.hash === b.hash &&
              m(a.query, b.query)
            : !(!a.name || !b.name) &&
              a.name === b.name &&
              a.hash === b.hash &&
              m(a.query, b.query) &&
              m(a.params, b.params))
        )
      }
      var x = function(e, t) {
          var n = (e.forwardedHost, window.location.href.split("/")[2])
          if (n) {
            var r = e.locales.find(function(e) {
              return e[c.c] === n
            })
            if (r) return r[c.b]
          }
          return null
        },
        y = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = "(".concat(c.p.join("|"), ")"),
            n = "(?:".concat(c.t).concat(c.k, ")?")
          if (e.name) {
            var r = new RegExp(
                ""
                  .concat(c.t)
                  .concat(t)
                  .concat(n, "$"),
                "i"
              ),
              o = e.name.match(r)
            if (o && o.length > 1) return o[1]
          } else if (e.path) {
            var l = new RegExp("^/".concat(t, "/"), "i"),
              f = e.path.match(l)
            if (f && f.length > 1) return f[1]
          }
          return null
        },
        w = function(e) {
          var t,
            n,
            r = arguments
          return regeneratorRuntime.async(function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (
                    ((t = r.length > 1 && void 0 !== r[1] ? r[1] : null),
                    (n = r.length > 2 && void 0 !== r[2] ? r[2] : null),
                    !c.w || !e)
                  ) {
                    o.next = 9
                    break
                  }
                  if (null === t || !c.w.syncLocale) {
                    o.next = 6
                    break
                  }
                  return (
                    (o.next = 6),
                    regeneratorRuntime.awrap(e.dispatch(c.w.moduleName + "/setLocale", t))
                  )
                case 6:
                  if (null === n || !c.w.syncMessages) {
                    o.next = 9
                    break
                  }
                  return (
                    (o.next = 9),
                    regeneratorRuntime.awrap(e.dispatch(c.w.moduleName + "/setMessages", n))
                  )
                case 9:
                case "end":
                  return o.stop()
              }
          })
        }
    },
    5: function(e, t, n) {
      "use strict"
      n.d(t, "i", function() {
        return h
      }),
        n.d(t, "j", function() {
          return m
        }),
        n.d(t, "a", function() {
          return v
        }),
        n.d(t, "o", function() {
          return x
        }),
        n.d(t, "e", function() {
          return y
        }),
        n.d(t, "f", function() {
          return w
        }),
        n.d(t, "c", function() {
          return _
        }),
        n.d(t, "n", function() {
          return k
        }),
        n.d(t, "h", function() {
          return O
        }),
        n.d(t, "p", function() {
          return j
        }),
        n.d(t, "k", function() {
          return C
        }),
        n.d(t, "m", function() {
          return $
        }),
        n.d(t, "d", function() {
          return R
        }),
        n.d(t, "b", function() {
          return P
        }),
        n.d(t, "g", function() {
          return E
        }),
        n.d(t, "l", function() {
          return L
        })
      n(11), n(8), n(39), n(67), n(95), n(59), n(60), n(150), n(196)
      var r = n(14),
        o = (n(38), n(17)),
        c = (n(54), n(82), n(6), n(4), n(7), n(33), n(3)),
        l = n(2)
      function f(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? f(Object(source), !0).forEach(function(t) {
                Object(c.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
            : f(Object(source)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
              })
        }
        return e
      }
      function h(e) {
        l.a.config.errorHandler && l.a.config.errorHandler(e)
      }
      function m(e) {
        return e.then(function(e) {
          return e.default || e
        })
      }
      function v(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var n =
            e.options._originDataFn ||
            e.options.data ||
            function() {
              return {}
            }
          ;(e.options._originDataFn = n),
            (e.options.data = function() {
              var data = n.call(this, this)
              return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), d({}, data, {}, t)
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
        }
      }
      function x(e) {
        return e.options && e._Ctor === e
          ? e
          : (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = l.a.extend(e))._Ctor = e),
            !e.options.name && e.options.__file && (e.options.name = e.options.__file),
            e)
      }
      function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components"
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, r) {
            return Object.keys(e[n]).map(function(o) {
              return t && t.push(r), e[n][o]
            })
          })
        )
      }
      function w(e) {
        return y(e, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
      }
      function _(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, n) {
            return Object.keys(e.components).reduce(function(r, o) {
              return (
                e.components[o]
                  ? r.push(t(e.components[o], e.instances[o], e, o, n))
                  : delete e.components[o],
                r
              )
            }, [])
          })
        )
      }
      function k(e, t) {
        return Promise.all(
          _(e, function(e, n, r, o) {
            return regeneratorRuntime.async(function(c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    if ("function" != typeof e || e.options) {
                      c.next = 4
                      break
                    }
                    return (c.next = 3), regeneratorRuntime.awrap(e())
                  case 3:
                    e = c.sent
                  case 4:
                    return (
                      (r.components[o] = e = x(e)),
                      c.abrupt("return", "function" == typeof t ? t(e, n, r, o) : e)
                    )
                  case 6:
                  case "end":
                    return c.stop()
                }
            })
          })
        )
      }
      function O(e) {
        return regeneratorRuntime.async(function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (e) {
                  t.next = 2
                  break
                }
                return t.abrupt("return")
              case 2:
                return (t.next = 4), regeneratorRuntime.awrap(k(e))
              case 4:
                return t.abrupt(
                  "return",
                  d({}, e, {
                    meta: y(e).map(function(t, n) {
                      return d({}, t.options.meta, {}, (e.matched[n] || {}).meta)
                    })
                  })
                )
              case 5:
              case "end":
                return t.stop()
            }
        })
      }
      function j(e, t) {
        var n, c, l, f
        return regeneratorRuntime.async(function(d) {
          for (;;)
            switch ((d.prev = d.next)) {
              case 0:
                return (
                  e.context ||
                    ((e.context = {
                      isStatic: !0,
                      isDev: !1,
                      isHMR: !1,
                      app: e,
                      payload: t.payload,
                      error: t.error,
                      base: "/",
                      env: {
                        NUXT_ENV_SLACK_WEBHOOK: "TR021UCJC/BRLGPS4QG/uFIp2YRCVvaQebNrNA3eSeKB"
                      }
                    }),
                    t.req && (e.context.req = t.req),
                    t.res && (e.context.res = t.res),
                    t.ssrContext && (e.context.ssrContext = t.ssrContext),
                    (e.context.redirect = function(t, path, n) {
                      if (t) {
                        e.context._redirected = !0
                        var r = Object(o.a)(path)
                        if (
                          ("number" == typeof t ||
                            ("undefined" !== r && "object" !== r) ||
                            ((n = path || {}), (path = t), (r = Object(o.a)(path)), (t = 302)),
                          "object" === r && (path = e.router.resolve(path).route.fullPath),
                          !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                        )
                          throw ((path = A(path, n)),
                          window.location.replace(path),
                          new Error("ERR_REDIRECT"))
                        e.context.next({ path: path, query: n, status: t })
                      }
                    }),
                    (e.context.nuxtState = window.__NUXT__)),
                  (d.next = 3),
                  regeneratorRuntime.awrap(Promise.all([O(t.route), O(t.from)]))
                )
              case 3:
                ;(n = d.sent),
                  (c = Object(r.a)(n, 2)),
                  (l = c[0]),
                  (f = c[1]),
                  t.route && (e.context.route = l),
                  t.from && (e.context.from = f),
                  (e.context.next = t.next),
                  (e.context._redirected = !1),
                  (e.context._errored = !1),
                  (e.context.isHMR = !1),
                  (e.context.params = e.context.route.params || {}),
                  (e.context.query = e.context.route.query || {})
              case 15:
              case "end":
                return d.stop()
            }
        })
      }
      function C(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : $(e[0], t).then(function() {
              return C(e.slice(1), t)
            })
      }
      function $(e, t) {
        var n
        return (n =
          2 === e.length
            ? new Promise(function(n) {
                e(t, function(e, data) {
                  e && t.error(e), n((data = data || {}))
                })
              })
            : e(t)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n)
      }
      function R(base, e) {
        var path = decodeURI(window.location.pathname)
        return "hash" === e
          ? window.location.hash.replace(/^#\//, "")
          : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)),
            (path || "/") + window.location.search + window.location.hash)
      }
      function P(e, t) {
        return (function(e) {
          for (var t = new Array(e.length), i = 0; i < e.length; i++)
            "object" === Object(o.a)(e[i]) && (t[i] = new RegExp("^(?:" + e[i].pattern + ")$"))
          return function(n, r) {
            for (
              var path = "", data = n || {}, o = (r || {}).pretty ? N : encodeURIComponent, c = 0;
              c < e.length;
              c++
            ) {
              var l = e[c]
              if ("string" != typeof l) {
                var f = data[l.name || "pathMatch"],
                  d = void 0
                if (null == f) {
                  if (l.optional) {
                    l.partial && (path += l.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + l.name + '" to be defined')
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        "`"
                    )
                  if (0 === f.length) {
                    if (l.optional) continue
                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                  }
                  for (var h = 0; h < f.length; h++) {
                    if (((d = o(f[h])), !t[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      )
                    path += (0 === h ? l.prefix : l.delimiter) + d
                  }
                } else {
                  if (((d = l.asterisk ? N(f, !0) : o(f)), !t[c].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"'
                    )
                  path += l.prefix + d
                }
              } else path += l
            }
            return path
          }
        })(
          (function(e, t) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              l = (t && t.delimiter) || "/"
            for (; null != (n = T.exec(e)); ) {
              var f = n[0],
                d = n[1],
                h = n.index
              if (((path += e.slice(c, h)), (c = h + f.length), d)) path += d[1]
              else {
                var m = e[c],
                  v = n[2],
                  x = n[3],
                  y = n[4],
                  w = n[5],
                  _ = n[6],
                  k = n[7]
                path && (r.push(path), (path = ""))
                var O = null != v && null != m && m !== v,
                  j = "+" === _ || "*" === _,
                  C = "?" === _ || "*" === _,
                  $ = n[2] || l,
                  pattern = y || w
                r.push({
                  name: x || o++,
                  prefix: v || "",
                  delimiter: $,
                  optional: C,
                  repeat: j,
                  partial: O,
                  asterisk: Boolean(k),
                  pattern: pattern ? S(pattern) : k ? ".*" : "[^" + D($) + "]+?"
                })
              }
            }
            c < e.length && (path += e.substr(c))
            path && r.push(path)
            return r
          })(e, t)
        )
      }
      function E(e, t) {
        var n = {},
          r = d({}, e, {}, t)
        for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0)
        return n
      }
      function L(e) {
        var t
        if (e.message || "string" == typeof e) t = e.message || e
        else
          try {
            t = JSON.stringify(e, null, 2)
          } catch (n) {
            t = "[".concat(e.constructor.name, "]")
          }
        return d({}, e, {
          message: t,
          statusCode: e.statusCode || e.status || (e.response && e.response.status) || 500
        })
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(e) {
          window.onNuxtReadyCbs.push(e)
        })
      var T = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      )
      function N(e, t) {
        var n = t ? /[?#]/g : /[/?#]/g
        return encodeURI(e).replace(n, function(e) {
          return (
            "%" +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function D(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }
      function S(e) {
        return e.replace(/([=!:$/()])/g, "\\$1")
      }
      function A(e, t) {
        var n,
          o = e.indexOf("://")
        ;-1 !== o
          ? ((n = e.substring(0, o)), (e = e.substring(o + 3)))
          : e.startsWith("//") && (e = e.substring(2))
        var c,
          l = e.split("/"),
          f = (n ? n + "://" : "//") + l.shift(),
          path = l.filter(Boolean).join("/")
        if (2 === (l = path.split("#")).length) {
          var d = l,
            h = Object(r.a)(d, 2)
          ;(path = h[0]), (c = h[1])
        }
        return (
          (f += path ? "/" + path : ""),
          t &&
            "{}" !== JSON.stringify(t) &&
            (f +=
              (2 === e.split("?").length ? "&" : "?") +
              (function(e) {
                return Object.keys(e)
                  .sort()
                  .map(function(t) {
                    var n = e[t]
                    return null == n
                      ? ""
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(e) {
                            return [t, "=", e].join("")
                          })
                          .join("&")
                      : t + "=" + n
                  })
                  .filter(Boolean)
                  .join("&")
              })(t)),
          (f += c ? "#" + c : "")
        )
      }
    },
    57: function(e, t, n) {
      "use strict"
      n(11), n(8), n(6), n(7), n(4), n(54)
      var r = n(3),
        o = (n(33), n(2)),
        c = n(80),
        l = n(122),
        f = n.n(l),
        d = n(66),
        h = n.n(d),
        m = n(123),
        v = n(5)
      "scrollRestoration" in window.history &&
        ((window.history.scrollRestoration = "manual"),
        window.addEventListener("beforeunload", function() {
          window.history.scrollRestoration = "auto"
        }),
        window.addEventListener("load", function() {
          window.history.scrollRestoration = "manual"
        }))
      var x = function() {
        return Object(v.j)(Promise.all([n.e(4), n.e(8), n.e(5)]).then(n.bind(null, 368)))
      }
      o.a.use(m.a)
      var y = {
        mode: "history",
        base: decodeURI("/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function(e, t, n) {
          var r = !1,
            o = Object(v.e)(e)
          o.length < 2 &&
          o.every(function(e) {
            return !1 !== e.options.scrollToTop
          })
            ? (r = { x: 0, y: 0 })
            : o.some(function(e) {
                return e.options.scrollToTop
              }) && (r = { x: 0, y: 0 }),
            n && (r = n)
          var c = window.$nuxt
          return (
            e.path === t.path &&
              e.hash !== t.hash &&
              c.$nextTick(function() {
                return c.$emit("triggerScroll")
              }),
            new Promise(function(t) {
              c.$once("triggerScroll", function() {
                if (e.hash) {
                  var n = e.hash
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)))
                  try {
                    document.querySelector(n) && (r = { selector: n })
                  } catch (e) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    )
                  }
                }
                t(r)
              })
            })
          )
        },
        routes: [
          { path: "/ru/", component: x, name: "index___ru" },
          { path: "/", component: x, name: "index___en" }
        ],
        fallback: !1
      }
      var w = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function(e, t) {
            var n = t.parent,
              data = t.data,
              r = t.props
            data.nuxtChild = !0
            for (
              var o = n, c = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, f = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && f++, (n = n.$parent)
            data.nuxtChildDepth = f
            var d = c[f] || l,
              h = {}
            _.forEach(function(e) {
              void 0 !== d[e] && (h[e] = d[e])
            })
            var m = {}
            k.forEach(function(e) {
              "function" == typeof d[e] && (m[e] = d[e].bind(o))
            })
            var v = m.beforeEnter
            if (
              ((m.beforeEnter = function(e) {
                if (
                  (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit("triggerScroll")
                  }),
                  v)
                )
                  return v.call(o, e)
              }),
              !1 === d.css)
            ) {
              var x = m.leave
              ;(!x || x.length < 2) &&
                (m.leave = function(e, t) {
                  x && x.call(o, e), o.$nextTick(t)
                })
            }
            var y = e("routerView", data)
            return (
              r.keepAlive && (y = e("keep-alive", { props: r.keepAliveProps }, [y])),
              e("transition", { props: h, on: m }, [y])
            )
          }
        },
        _ = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass"
        ],
        k = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled"
        ],
        O = {
          layout: "empty",
          props: { error: { type: Object, default: null } },
          head: function() {
            return { title: 404 === this.error.statusCode ? this.pageNotFound : this.otherError }
          },
          data: function() {
            return { pageNotFound: "404 Страница не найдена", otherError: "Произошла ошибка" }
          }
        },
        j = (n(200), n(40)),
        C = n(58),
        $ = n.n(C),
        R = n(276),
        component = Object(j.a)(
          O,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              "v-app",
              { attrs: { dark: "" } },
              [
                404 === e.error.statusCode
                  ? n("h1", [e._v("\n    " + e._s(e.pageNotFound) + "\n  ")])
                  : n("h1", [e._v("\n    " + e._s(e.otherError) + "\n  ")]),
                e._v(" "),
                n("NuxtLink", { attrs: { to: "/" } }, [e._v("\n    Главная\n  ")])
              ],
              1
            )
          },
          [],
          !1,
          null,
          "40237138",
          null
        ),
        P = component.exports
      $()(component, { VApp: R.a })
      n(59), n(60), n(38)
      var E = n(14),
        L = {
          name: "Nuxt",
          components: { NuxtChild: w, NuxtError: P },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" }
          },
          errorCaptured: function(e) {
            this.displayingNuxtError && ((this.errorFromNuxtError = e), this.$forceUpdate())
          },
          computed: {
            routerViewKey: function() {
              if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                return (
                  this.nuxtChildKey || Object(v.b)(this.$route.matched[0].path)(this.$route.params)
                )
              var e = Object(E.a)(this.$route.matched, 1)[0]
              if (!e) return this.$route.path
              var t = e.components.default
              if (t && t.options) {
                var n = t.options
                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
            }
          },
          beforeCreate: function() {
            o.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
          },
          render: function(e) {
            var t = this
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function() {
                    return (t.errorFromNuxtError = !1)
                  }),
                  e("div", {}, [
                    e("h2", "An error occured while showing the error page"),
                    e(
                      "p",
                      "Unfortunately an error occured and while showing the error page another error occured"
                    ),
                    e("p", "Error details: ".concat(this.errorFromNuxtError.toString())),
                    e("nuxt-link", { props: { to: "/" } }, "Go back to home")
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function() {
                    return (t.displayingNuxtError = !1)
                  }),
                  e(P, { props: { error: this.nuxt.err } }))
              : e("NuxtChild", { key: this.routerViewKey, props: this.$props })
          }
        },
        T =
          (n(82),
          {
            name: "NuxtLoading",
            data: function() {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
              }
            },
            computed: {
              left: function() {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl ? (this.reversed ? "0px" : "auto") : this.reversed ? "auto" : "0px")
                )
              }
            },
            beforeDestroy: function() {
              this.clear()
            },
            methods: {
              clear: function() {
                clearInterval(this._timer), clearTimeout(this._throttle), (this._timer = null)
              },
              start: function() {
                var e = this
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function() {
                        return e.startTimer()
                      }, this.throttle))
                    : this.startTimer(),
                  this
                )
              },
              set: function(e) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
                  this
                )
              },
              get: function() {
                return this.percent
              },
              increase: function(e) {
                return (this.percent = Math.min(100, Math.floor(this.percent + e))), this
              },
              decrease: function(e) {
                return (this.percent = Math.max(0, Math.floor(this.percent - e))), this
              },
              pause: function() {
                return clearInterval(this._timer), this
              },
              resume: function() {
                return this.startTimer(), this
              },
              finish: function() {
                return (this.percent = this.reversed ? 0 : 100), this.hide(), this
              },
              hide: function() {
                var e = this
                return (
                  this.clear(),
                  setTimeout(function() {
                    ;(e.show = !1),
                      e.$nextTick(function() {
                        ;(e.percent = 0), (e.reversed = !1)
                      })
                  }, 500),
                  this
                )
              },
              fail: function() {
                return (this.canSucceed = !1), this
              },
              startTimer: function() {
                var e = this
                this.show || (this.show = !0),
                  void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    e.skipTimerCount > 0
                      ? e.skipTimerCount--
                      : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous &&
                          (e.percent >= 100
                            ? ((e.skipTimerCount = 1), (e.reversed = !e.reversed))
                            : e.percent <= 0 &&
                              ((e.skipTimerCount = 1), (e.reversed = !e.reversed))))
                  }, 100))
              }
            },
            render: function(e) {
              var t = e(!1)
              return (
                this.show &&
                  (t = e("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed
                    },
                    style: { width: this.percent + "%", left: this.left }
                  })),
                t
              )
            }
          }),
        N = (n(204), Object(j.a)(T, void 0, void 0, !1, null, null, null).exports),
        D =
          (n(206),
          {
            data: function() {
              return {}
            },
            mounted: function() {}
          }),
        S = (n(208), n(106)),
        A = Object(j.a)(
          D,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              "section",
              { staticClass: "img-bg" },
              [
                t("v-img", { attrs: { height: "650", src: "/header-bg.jpg" } }, [
                  t("div", { staticClass: "img-bg__slogan slogan white--text" }, [
                    t("h1", { staticClass: "slogan__big" }, [this._v(this._s(this.$t("slogan")))]),
                    this._v(" "),
                    t("h4", { staticClass: "slogan__small" }, [
                      this._v(this._s(this.$t("subSlogan")))
                    ])
                  ])
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          "534269f4",
          null
        ),
        I = A.exports
      $()(A, { VImg: S.a })
      var F = {
          data: function() {
            return { drawer: !1, fixed: !1, classHeader: null }
          },
          components: { HeaderBackground: I },
          mounted: function() {
            this.handlerChangeHeader(),
              document.addEventListener("scroll", this.handlerChangeHeader.bind(this))
          },
          methods: {
            handlerChangeHeader: function() {
              ;(this.scrolled = window.pageYOffset),
                this.scrolled < 50
                  ? (this.classHeader = "up-page color-white")
                  : (this.classHeader = "")
            }
          }
        },
        M = (n(219), n(281)),
        B = n(282),
        H = n(277),
        V = n(278),
        U = n(119),
        X = n(120),
        z = n(78),
        K = n(63),
        J = n(283),
        Q = n(279),
        W = Object(j.a)(
          F,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              "v-app",
              [
                n(
                  "v-navigation-drawer",
                  {
                    staticClass: "mobile-menu",
                    attrs: { fixed: "", temporary: "", app: "", dark: "", color: "black" },
                    model: {
                      value: e.drawer,
                      callback: function(t) {
                        e.drawer = t
                      },
                      expression: "drawer"
                    }
                  },
                  [
                    n(
                      "v-list",
                      { attrs: { dense: "" } },
                      [
                        n(
                          "v-list-item",
                          {
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#team")
                              }
                            }
                          },
                          [
                            n(
                              "v-list-item-content",
                              [
                                n("v-list-item-title", { staticClass: "mobile-menu__title" }, [
                                  e._v("Team")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "v-list-item",
                          {
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#work")
                              }
                            }
                          },
                          [
                            n(
                              "v-list-item-content",
                              [
                                n("v-list-item-title", { staticClass: "mobile-menu__title" }, [
                                  e._v("Work")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "v-list-item",
                          {
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#job")
                              }
                            }
                          },
                          [
                            n(
                              "v-list-item-content",
                              [
                                n("v-list-item-title", { staticClass: "mobile-menu__title" }, [
                                  e._v("Job")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        e._v(" "),
                        n(
                          "v-list-item",
                          {
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#contact")
                              }
                            }
                          },
                          [
                            n(
                              "v-list-item-content",
                              [
                                n("v-list-item-title", { staticClass: "mobile-menu__title" }, [
                                  e._v("Contact")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                e._v(" "),
                n(
                  "v-app-bar",
                  {
                    staticClass: "menu",
                    class: e.classHeader,
                    attrs: {
                      fixed: "",
                      elevation: "0",
                      app: "",
                      "hide-on-scroll": "",
                      height: "80"
                    }
                  },
                  [
                    n(
                      "v-btn",
                      {
                        staticClass: "d-sm-none",
                        class: e.classHeader,
                        attrs: { icon: "" },
                        on: {
                          click: function(t) {
                            t.stopPropagation(), (e.drawer = !e.drawer)
                          }
                        }
                      },
                      [n("v-icon", [e._v("mdi-menu")])],
                      1
                    ),
                    e._v(" "),
                    n(
                      "a",
                      { staticClass: "d-flex justify-center align-end logo", attrs: { href: "/" } },
                      [e._v("dev / team")]
                    ),
                    e._v(" "),
                    n("v-spacer"),
                    e._v(" "),
                    n(
                      "div",
                      { staticClass: "justify-end align-end d-none d-sm-flex" },
                      [
                        n(
                          "v-btn",
                          {
                            staticClass: "text-none nav-link",
                            class: e.classHeader,
                            attrs: { text: "", tile: "" },
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#team")
                              }
                            }
                          },
                          [e._v("\n\t\t\t\t" + e._s(e.$t("team")) + "\n\t\t\t")]
                        ),
                        e._v(" "),
                        n(
                          "v-btn",
                          {
                            staticClass: "text-none nav-link",
                            class: e.classHeader,
                            attrs: { text: "", tile: "" },
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#work")
                              }
                            }
                          },
                          [e._v("\n\t\t\t\t" + e._s(e.$t("work")) + "\n\t\t\t")]
                        ),
                        e._v(" "),
                        n(
                          "v-btn",
                          {
                            staticClass: "text-none nav-link",
                            class: e.classHeader,
                            attrs: { text: "", tile: "" },
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#job")
                              }
                            }
                          },
                          [e._v("\n\t\t\t\t" + e._s(e.$t("job")) + "\n\t\t\t")]
                        ),
                        e._v(" "),
                        n(
                          "v-btn",
                          {
                            staticClass: "text-none nav-link",
                            class: e.classHeader,
                            attrs: { text: "", tile: "" },
                            on: {
                              click: function(t) {
                                return e.$vuetify.goTo("#contact")
                              }
                            }
                          },
                          [e._v("\n\t\t\t\t" + e._s(e.$t("contact")) + "\n\t\t\t")]
                        )
                      ],
                      1
                    ),
                    e._v(" "),
                    n(
                      "v-btn",
                      {
                        staticClass: "text-none local-switcher",
                        class: e.classHeader,
                        attrs: { to: e.switchLocalePath("en"), tile: "", outlined: "" }
                      },
                      [e._v(e._s(e.$t("en")))]
                    ),
                    e._v(" "),
                    n(
                      "v-btn",
                      {
                        staticClass: "text-none local-switcher",
                        class: e.classHeader,
                        attrs: { to: e.switchLocalePath("ru"), tile: "", outlined: "" }
                      },
                      [e._v(e._s(e.$t("ru")))]
                    )
                  ],
                  1
                ),
                e._v(" "),
                n("v-content", [n("header-background"), e._v(" "), n("nuxt")], 1),
                e._v(" "),
                n(
                  "v-footer",
                  { staticClass: "white", attrs: { app: "" } },
                  [
                    n("span", [e._v("© " + e._s(new Date().getFullYear()) + " ООО Дев-тим")]),
                    e._v(" "),
                    n("v-spacer"),
                    e._v(" "),
                    n(
                      "v-btn",
                      { attrs: { href: "mailto:devteamclub.info@gmail.com", icon: "", small: "" } },
                      [n("v-icon", { attrs: { size: "20px" } }, [e._v("mdi-gmail")])],
                      1
                    ),
                    e._v(" "),
                    n(
                      "v-btn",
                      {
                        attrs: {
                          target: "_blank",
                          href: "https://www.facebook.com/devteamclub",
                          icon: "",
                          small: ""
                        }
                      },
                      [n("v-icon", { attrs: { size: "20px" } }, [e._v("mdi-facebook")])],
                      1
                    ),
                    e._v(" "),
                    n(
                      "v-btn",
                      {
                        attrs: {
                          target: "_blank",
                          href: "https://www.instagram.com/devteamclub",
                          icon: "",
                          small: ""
                        }
                      },
                      [n("v-icon", { attrs: { size: "20px" } }, [e._v("mdi-instagram")])],
                      1
                    ),
                    e._v(" "),
                    n(
                      "v-btn",
                      {
                        attrs: {
                          target: "_blank",
                          href: "https://twitter.com/devteamclub",
                          icon: "",
                          small: ""
                        }
                      },
                      [n("v-icon", { attrs: { size: "20px" } }, [e._v("mdi-twitter")])],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          "531a6d94",
          null
        ),
        Y = W.exports
      $()(W, {
        VApp: R.a,
        VAppBar: M.a,
        VBtn: B.a,
        VContent: H.a,
        VFooter: V.a,
        VIcon: U.a,
        VList: X.a,
        VListItem: z.a,
        VListItemContent: K.a,
        VListItemTitle: K.b,
        VNavigationDrawer: J.a,
        VSpacer: Q.a
      })
      var G = { _default: Y },
        Z = {
          head: {
            titleTemplate: "Dev-team",
            title: "dev-team",
            meta: [
              { charset: "utf-8" },
              { name: "viewport", content: "width=device-width, initial-scale=1" },
              { name: "description", content: "Dev-team creates tomorrow with you." },
              { name: "twitter:card", content: "summary_large_image" },
              { name: "twitter:title", content: "Dev Team" },
              { name: "twitter:description", content: "Dev-team creates tomorrow with you." },
              { name: "twitter:image", content: "/devteammeta.jpg" },
              { itemprop: "name", content: "Сайт команды разработчиков" },
              { itemprop: "description", content: "Dev-team creates tomorrow with you." },
              { itemprop: "image", content: "/devteammeta.jpg" },
              { property: "og:url", content: "https://dev-team.club" },
              { property: "og:type", content: "Сайт команды разработчиков" },
              { property: "og:title", content: "Dev Team" },
              { property: "og:description", content: "Dev-team creates tomorrow with you." },
              { property: "og:image", content: "/devteammeta.jpg" }
            ],
            link: [
              { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
              {
                rel: "stylesheet",
                href:
                  "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap"
              },
              {
                rel: "stylesheet",
                type: "text/css",
                href:
                  "https://fonts.googleapis.com/css?family=undefined:100,300,400,500,700,900&display=swap"
              },
              {
                rel: "stylesheet",
                type: "text/css",
                href:
                  "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
              }
            ],
            style: [],
            script: []
          },
          render: function(e, t) {
            var n = e("NuxtLoading", { ref: "loading" })
            this.nuxt.err &&
              P.layout &&
              this.setLayout("function" == typeof P.layout ? P.layout(this.context) : P.layout)
            var r = e(this.layout || "nuxt"),
              o = e("div", { domProps: { id: "__layout" }, key: this.layoutName }, [r]),
              c = e(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function(e) {
                      window.$nuxt.$nextTick(function() {
                        window.$nuxt.$emit("triggerScroll")
                      })
                    }
                  }
                },
                [o]
              )
            return e("div", { domProps: { id: "__nuxt" } }, [n, c])
          },
          data: function() {
            return { isOnline: !0, layout: null, layoutName: "" }
          },
          beforeCreate: function() {
            o.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
          },
          created: function() {
            ;(o.a.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context)
          },
          mounted: function() {
            this.$loading = this.$refs.loading
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function() {
              return !this.isOnline
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine)
            },
            refresh: function() {
              var e,
                t,
                n = this
              return regeneratorRuntime.async(
                function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if ((e = Object(v.f)(this.$route)).length) {
                          r.next = 3
                          break
                        }
                        return r.abrupt("return")
                      case 3:
                        return (
                          this.$loading.start(),
                          (t = e.map(function(e) {
                            var p = []
                            return (
                              e.$options.fetch && p.push(Object(v.m)(e.$options.fetch, n.context)),
                              e.$options.asyncData &&
                                p.push(
                                  Object(v.m)(e.$options.asyncData, n.context).then(function(t) {
                                    for (var n in t) o.a.set(e.$data, n, t[n])
                                  })
                                ),
                              Promise.all(p)
                            )
                          })),
                          (r.prev = 5),
                          (r.next = 8),
                          regeneratorRuntime.awrap(Promise.all(t))
                        )
                      case 8:
                        r.next = 15
                        break
                      case 10:
                        ;(r.prev = 10),
                          (r.t0 = r.catch(5)),
                          this.$loading.fail(),
                          Object(v.i)(r.t0),
                          this.error(r.t0)
                      case 15:
                        this.$loading.finish()
                      case 16:
                      case "end":
                        return r.stop()
                    }
                },
                null,
                this,
                [[5, 10]]
              )
            },
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish())
            },
            setLayout: function(e) {
              return (
                (e && G["_" + e]) || (e = "default"),
                (this.layoutName = e),
                (this.layout = G["_" + e]),
                this.layout
              )
            },
            loadLayout: function(e) {
              return (e && G["_" + e]) || (e = "default"), Promise.resolve(G["_" + e])
            }
          },
          components: { NuxtLoading: N }
        },
        ee = n(280),
        te = {
          icons: { iconfont: "mdi" },
          theme: {
            primary: "#1976d2",
            accent: "#424242",
            secondary: "#ff8f00",
            info: "#26a69a",
            warning: "#ffc107",
            error: "#dd2c00",
            success: "#00e676"
          }
        }
      o.a.use(ee.a, {})
      var ne = function(e) {
          var t = "function" == typeof te ? te(e) : te
          ;(t.icons = t.icons || {}), (t.icons.iconfont = "mdi")
          var n = new ee.a(t)
          ;(e.app.vuetify = n), (e.$vuetify = n.framework)
        },
        re = (n(39), n(50), n(81)),
        ae = n(79),
        oe = n(0),
        ie = n(48)
      function se(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function ce(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? se(Object(source), !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
            : se(Object(source)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
              })
        }
        return e
      }
      function ue(e, t) {
        if (e) {
          var n = this.i18n
          if (
            (oe.u === oe.g.NO_PREFIX &&
              t &&
              t !== n.locale &&
              console.warn(
                "[".concat(
                  oe.f,
                  "] Passing non-current locale to localePath is unsupported when using no_prefix strategy"
                )
              ),
            (t = t || n.locale))
          ) {
            "string" == typeof e && (e = { name: e })
            var r = Object.assign({}, e)
            if (e.path && !e.name) {
              var path = !(
                (t === oe.j && oe.u === oe.g.PREFIX_EXCEPT_DEFAULT) ||
                oe.u === oe.g.NO_PREFIX ||
                n.differentDomains
              )
                ? "/".concat(t).concat(e.path)
                : e.path
              r.path = path
            } else {
              var o = e.name + (oe.u === oe.g.NO_PREFIX ? "" : oe.t + t)
              t === oe.j && oe.u === oe.g.PREFIX_AND_DEFAULT && (o += oe.t + oe.k), (r.name = o)
              var c = r.params
              c && void 0 === c[0] && c.pathMatch && (c[0] = c.pathMatch)
            }
            return this.router.resolve(r).route.fullPath
          }
        }
      }
      function le(e) {
        var t = this.i18n
        oe.u === oe.g.NO_PREFIX &&
          e &&
          e !== t.locale &&
          console.warn(
            "[".concat(
              oe.f,
              "] Passing non-current locale to switchLocalePath is unsupported when using no_prefix strategy"
            )
          )
        var n = this.getRouteBaseName()
        if (!n) return ""
        var r = this.route,
          o = this.store,
          c = r.params,
          l = Object(re.a)(r, ["params"]),
          f = {}
        oe.w && o && (f = o.getters["".concat(oe.w.moduleName, "/localeRouteParams")](e))
        var d = Object.assign({}, l, { name: n, params: ce({}, c, {}, f, { 0: c.pathMatch }) }),
          path = this.localePath(d, e)
        if (t.differentDomains) {
          var h = t.locales.find(function(t) {
            return t[oe.b] === e
          })
          if (h && h[oe.c]) path = window.location.protocol.split(":")[0] + "://" + h[oe.c] + path
          else console.warn("[".concat(oe.f, "] Could not find domain name for locale ").concat(e))
        }
        return path
      }
      function fe(e) {
        var t = e || this.route
        return t.name ? t.name.split(oe.t)[0] : null
      }
      ae.a.nuxti18n = function(e) {
        var t, n, r, o, c
        return regeneratorRuntime.async(function(l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                if (((t = e.app), (n = e.route), (r = e.redirect), !e.isHMR)) {
                  l.next = 3
                  break
                }
                return l.abrupt("return")
              case 3:
                if ("/" !== n.path || !oe.s) {
                  l.next = 6
                  break
                }
                return r("/" + oe.s, n.query), l.abrupt("return")
              case 6:
                if (((l.t0 = oe.l), !l.t0)) {
                  l.next = 11
                  break
                }
                return (l.next = 10), regeneratorRuntime.awrap(t.i18n.__detectBrowserLanguage())
              case 10:
                l.t0 = l.sent
              case 11:
                if (!l.t0) {
                  l.next = 13
                  break
                }
                return l.abrupt("return")
              case 13:
                return (
                  (o = t.i18n.locale || t.i18n.defaultLocale || null),
                  (c = Object(ie.getLocaleFromRoute)(n)),
                  (l.next = 17),
                  regeneratorRuntime.awrap(t.i18n.setLocale(c || o))
                )
              case 17:
              case "end":
                return l.stop()
            }
        })
      }
      var pe = function(e) {
          return function() {
            var t = {
              getRouteBaseName: this.getRouteBaseName,
              i18n: this.$i18n,
              localePath: this.localePath,
              req: null,
              route: this.$route,
              router: this.$router,
              store: this.$store
            }
            return e.apply(t, arguments)
          }
        },
        de = function(e, t) {
          return function() {
            var n = e.app,
              r = (e.req, e.route),
              o = e.store,
              c = {
                getRouteBaseName: n.getRouteBaseName,
                i18n: n.i18n,
                localePath: n.localePath,
                req: null,
                route: r,
                router: n.router,
                store: o
              }
            return t.apply(c, arguments)
          }
        },
        he = {
          install: function(e) {
            e.mixin({
              methods: { localePath: pe(ue), switchLocalePath: pe(le), getRouteBaseName: pe(fe) }
            })
          }
        },
        me = function(e) {
          o.a.use(he)
          var t = e.app
          ;(t.localePath = de(e, ue)),
            (t.switchLocalePath = de(e, le)),
            (t.getRouteBaseName = de(e, fe))
        },
        ge = (n(35), n(36), n(265), n(124)),
        ve = n.n(ge),
        xe = n(125),
        be = n(56),
        ye = function() {
          var e = this
          if (
            !(c.a.hasMetaInfo ? c.a.hasMetaInfo(this) : this._hasMetaInfo) ||
            !this.$i18n ||
            !this.$i18n.locale ||
            !this.$i18n.locales ||
            !1 === this.$options[oe.a] ||
            (this.$options[oe.a] && !1 === this.$options[oe.a].seo)
          )
            return {}
          var t = this.$i18n.locales.find(function(t) {
              return t[oe.b] === e.$i18n.locale
            }),
            n = {}
          t && t[oe.e] && (n.lang = t[oe.e])
          var link = []
          if (
            (oe.u !== oe.g.NO_PREFIX &&
              link.push.apply(
                link,
                Object(be.a)(
                  this.$i18n.locales
                    .map(function(t) {
                      return t[oe.e]
                        ? {
                            hid: "alternate-hreflang-" + t[oe.e],
                            rel: "alternate",
                            href: oe.h + e.switchLocalePath(t.code),
                            hreflang: t[oe.e]
                          }
                        : (console.warn(
                            "[".concat(
                              oe.f,
                              "] Locale ISO code is required to generate alternate link"
                            )
                          ),
                          null)
                    })
                    .filter(function(e) {
                      return !!e
                    })
                )
              ),
            oe.u === oe.g.PREFIX_AND_DEFAULT)
          ) {
            var r = this.switchLocalePath(t[oe.b])
            r &&
              r !== this.$route.path &&
              link.push({ hid: "canonical-lang-" + t[oe.b], rel: "canonical", href: oe.h + r })
          }
          var meta = []
          return (
            t &&
              t[oe.e] &&
              meta.push({
                hid: "og:locale",
                property: "og:locale",
                content: t[oe.e].replace(/-/g, "_")
              }),
            meta.push.apply(
              meta,
              Object(be.a)(
                this.$i18n.locales
                  .filter(function(e) {
                    return e[oe.e] && e[oe.e] !== t[oe.e]
                  })
                  .map(function(e) {
                    return {
                      hid: "og:locale:alternate-" + e[oe.e],
                      property: "og:locale:alternate",
                      content: e[oe.e].replace(/-/g, "_")
                    }
                  })
              )
            ),
            { htmlAttrs: n, link: link, meta: meta }
          )
        }
      function we(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function _e(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? we(Object(source), !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
            : we(Object(source)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
              })
        }
        return e
      }
      o.a.use(xe.a)
      var ke = function(e) {
          var t, r, c, l, f, d, h, m, v, x, y, w, _, k
          return regeneratorRuntime.async(function(O) {
            for (;;)
              switch ((O.prev = O.next)) {
                case 0:
                  return (
                    (t = e.app),
                    (r = e.route),
                    (c = e.store),
                    (l = e.req),
                    e.res,
                    (f = e.redirect),
                    oe.w &&
                      c &&
                      c.registerModule(
                        oe.w.moduleName,
                        {
                          namespaced: !0,
                          state: function() {
                            return _e(
                              {},
                              oe.w.syncLocale ? { locale: "" } : {},
                              {},
                              oe.w.syncMessages ? { messages: {} } : {},
                              {},
                              oe.w.syncRouteParams ? { routeParams: {} } : {}
                            )
                          },
                          actions: _e(
                            {},
                            oe.w.syncLocale
                              ? {
                                  setLocale: function(e, t) {
                                    ;(0, e.commit)("setLocale", t)
                                  }
                                }
                              : {},
                            {},
                            oe.w.syncMessages
                              ? {
                                  setMessages: function(e, t) {
                                    ;(0, e.commit)("setMessages", t)
                                  }
                                }
                              : {},
                            {},
                            oe.w.syncRouteParams
                              ? {
                                  setRouteParams: function(e, t) {
                                    ;(0, e.commit)("setRouteParams", t)
                                  }
                                }
                              : {}
                          ),
                          mutations: _e(
                            {},
                            oe.w.syncLocale
                              ? {
                                  setLocale: function(e, t) {
                                    e.locale = t
                                  }
                                }
                              : {},
                            {},
                            oe.w.syncMessages
                              ? {
                                  setMessages: function(e, t) {
                                    e.messages = t
                                  }
                                }
                              : {},
                            {},
                            oe.w.syncRouteParams
                              ? {
                                  setRouteParams: function(e, t) {
                                    e.routeParams = t
                                  }
                                }
                              : {}
                          ),
                          getters: _e(
                            {},
                            oe.w.syncRouteParams
                              ? {
                                  localeRouteParams: function(e) {
                                    var t = e.routeParams
                                    return function(e) {
                                      return t[e] || {}
                                    }
                                  }
                                }
                              : {}
                          )
                        },
                        { preserveState: !!c.state[oe.w.moduleName] }
                      ),
                    (d = oe.l.useCookie),
                    (h = oe.l.cookieKey),
                    (m = function() {
                      if (d) return ve.a.get(h)
                    }),
                    (v = function(e) {
                      if (d) {
                        var t = new Date(),
                          n = {
                            expires: new Date(t.setDate(t.getDate() + 365)),
                            path: "/",
                            sameSite: "lax"
                          }
                        ve.a.set(h, e, n)
                      }
                    }),
                    (x = function(r) {
                      var o,
                        l,
                        h,
                        m,
                        v,
                        x,
                        y,
                        w,
                        _,
                        k = arguments
                      return regeneratorRuntime.async(function(O) {
                        for (;;)
                          switch ((O.prev = O.next)) {
                            case 0:
                              if (
                                ((o = k.length > 1 && void 0 !== k[1] ? k[1] : {}),
                                (l = o.initialSetup),
                                (h = void 0 !== l && l) || !t.i18n.differentDomains)
                              ) {
                                O.next = 3
                                break
                              }
                              return O.abrupt("return")
                            case 3:
                              if (r !== t.i18n.locale) {
                                O.next = 5
                                break
                              }
                              return O.abrupt("return")
                            case 5:
                              if (
                                ((m = t.i18n.locale),
                                h ||
                                  (t.i18n.beforeLanguageSwitch(m, r),
                                  d && t.i18n.setLocaleCookie(r)),
                                !oe.o)
                              ) {
                                O.next = 14
                                break
                              }
                              if (
                                ((v = n(48)),
                                (x = v.loadLanguageAsync),
                                !t.i18n.fallbackLocale || r === t.i18n.fallbackLocale)
                              ) {
                                O.next = 12
                                break
                              }
                              return (
                                (O.next = 12), regeneratorRuntime.awrap(x(e, t.i18n.fallbackLocale))
                              )
                            case 12:
                              return (O.next = 14), regeneratorRuntime.awrap(x(e, r))
                            case 14:
                              return (
                                (t.i18n.locale = r),
                                h || t.i18n.onLanguageSwitched(m, r),
                                (O.next = 18),
                                regeneratorRuntime.awrap(
                                  Object(ie.syncVuex)(c, r, t.i18n.getLocaleMessage(r))
                                )
                              )
                            case 18:
                              h ||
                                oe.u === oe.g.NO_PREFIX ||
                                ((y = t.switchLocalePath(r) || t.localePath("index", r)),
                                (w = t.router.resolve(y).route),
                                (_ = e.route) && !Object(ie.isSameRoute)(_, w) && f(y))
                            case 19:
                            case "end":
                              return O.stop()
                          }
                      })
                    }),
                    (t.i18n = new xe.a(oe.v)),
                    (t.i18n.locales = oe.q),
                    (t.i18n.defaultLocale = oe.j),
                    (t.i18n.differentDomains = oe.m),
                    (t.i18n.forwardedHost = oe.n),
                    (t.i18n.beforeLanguageSwitch = oe.i),
                    (t.i18n.onLanguageSwitched = oe.r),
                    (t.i18n.setLocaleCookie = v),
                    (t.i18n.getLocaleCookie = m),
                    (t.i18n.setLocale = function(e) {
                      return x(e)
                    }),
                    (o.a.prototype.$nuxtI18nSeo = ye),
                    c &&
                      ((c.$i18n = t.i18n),
                      c.state.localeDomains &&
                        t.i18n.locales.forEach(function(e) {
                          e.domain = c.state.localeDomains[e.code]
                        })),
                    (y = t.i18n.defaultLocale || null),
                    t.i18n.differentDomains
                      ? ((w = Object(ie.getLocaleDomain)(t.i18n, l)), (y = w || y))
                      : oe.u !== oe.g.NO_PREFIX
                      ? ((_ = Object(ie.getLocaleFromRoute)(r)), (y = _ || y))
                      : d && ((k = m()), oe.p.includes(k) && (y = k)),
                    (O.next = 22),
                    regeneratorRuntime.awrap(x(y, { initialSetup: !0 }))
                  )
                case 22:
                  return (
                    (t.i18n.__detectBrowserLanguage = function() {
                      var e, n, r, o
                      return regeneratorRuntime.async(function(c) {
                        for (;;)
                          switch ((c.prev = c.next)) {
                            case 0:
                              if (!oe.l) {
                                c.next = 15
                                break
                              }
                              if (
                                ((e = oe.l.alwaysRedirect),
                                (n = oe.l.fallbackLocale),
                                (d && (r = m()) && 1 !== r && "1" !== r) ||
                                  ("undefined" != typeof navigator && navigator.language
                                    ? (r = navigator.language.toLocaleLowerCase().substring(0, 2))
                                    : l &&
                                      void 0 !== l.headers["accept-language"] &&
                                      (r = l.headers["accept-language"]
                                        .split(",")[0]
                                        .toLocaleLowerCase()
                                        .substring(0, 2))),
                                !r)
                              ) {
                                c.next = 15
                                break
                              }
                              if (d && !e && m()) {
                                c.next = 15
                                break
                              }
                              if (((o = n), oe.p.includes(r) && (o = r), !o || !oe.p.includes(o))) {
                                c.next = 14
                                break
                              }
                              if (o === t.i18n.locale) {
                                c.next = 13
                                break
                              }
                              return (c.next = 11), regeneratorRuntime.awrap(t.i18n.setLocale(o))
                            case 11:
                              c.next = 14
                              break
                            case 13:
                              d && !m() && t.i18n.setLocaleCookie(o)
                            case 14:
                              return c.abrupt("return", !0)
                            case 15:
                              return c.abrupt("return", !1)
                            case 16:
                            case "end":
                              return c.stop()
                          }
                      })
                    }),
                    (O.next = 25),
                    regeneratorRuntime.awrap(t.i18n.__detectBrowserLanguage())
                  )
                case 25:
                case "end":
                  return O.stop()
              }
          })
        },
        Oe = function(e) {
          var i,
            s,
            t,
            n,
            a,
            r,
            o = e.app
          ;(i = window),
            (s = document),
            (t = "script"),
            (n = "ga"),
            (i.GoogleAnalyticsObject = n),
            (i.ga =
              i.ga ||
              function() {
                ;(i.ga.q = i.ga.q || []).push(arguments)
              }),
            (i.ga.l = 1 * new Date()),
            (a = s.createElement(t)),
            (r = s.getElementsByTagName(t)[0]),
            (a.async = 1),
            (a.src = "https://www.google-analytics.com/analytics.js"),
            r.parentNode.insertBefore(a, r),
            ga("create", "UA-153553466-1", "auto"),
            o.router.afterEach(function(e, t) {
              ga("set", "page", e.fullPath), ga("send", "pageview")
            })
        }
      function je(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function Ce(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? je(Object(source), !0).forEach(function(t) {
                Object(r.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
            : je(Object(source)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
              })
        }
        return e
      }
      n.d(t, "b", function() {
        return Re
      }),
        n.d(t, "a", function() {
          return P
        }),
        o.a.component(f.a.name, f.a),
        o.a.component(
          h.a.name,
          Ce({}, h.a, {
            render: function(e, t) {
              return (
                h.a._warned ||
                  ((h.a._warned = !0),
                  console.warn(
                    "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                  )),
                h.a.render(e, t)
              )
            }
          })
        ),
        o.a.component(w.name, w),
        o.a.component("NChild", w),
        o.a.component(L.name, L),
        o.a.use(c.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        })
      var $e = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      }
      function Re(e) {
        var t, n, r, c, path, l
        return regeneratorRuntime.async(function(f) {
          for (;;)
            switch ((f.prev = f.next)) {
              case 0:
                return (f.next = 2), regeneratorRuntime.awrap(new m.a(y))
              case 2:
                return (
                  (t = f.sent),
                  (n = Ce(
                    {
                      router: t,
                      nuxt: {
                        defaultTransition: $e,
                        transitions: [$e],
                        setTransitions: function(e) {
                          return (
                            Array.isArray(e) || (e = [e]),
                            (e = e.map(function(e) {
                              return (e = e
                                ? "string" == typeof e
                                  ? Object.assign({}, $e, { name: e })
                                  : Object.assign({}, $e, e)
                                : $e)
                            })),
                            (this.$options.nuxt.transitions = e),
                            e
                          )
                        },
                        err: null,
                        dateErr: null,
                        error: function(t) {
                          ;(t = t || null),
                            (n.context._errored = Boolean(t)),
                            (t = t ? Object(v.l)(t) : null)
                          var r = this.nuxt || this.$options.nuxt
                          return (r.dateErr = Date.now()), (r.err = t), e && (e.nuxt.error = t), t
                        }
                      }
                    },
                    Z
                  )),
                  (r = e
                    ? e.next
                    : function(e) {
                        return n.router.push(e)
                      }),
                  e
                    ? (c = t.resolve(e.url).route)
                    : ((path = Object(v.d)(t.options.base)), (c = t.resolve(path).route)),
                  (f.next = 8),
                  regeneratorRuntime.awrap(
                    Object(v.p)(n, {
                      route: c,
                      next: r,
                      error: n.nuxt.error.bind(n),
                      payload: e ? e.payload : void 0,
                      req: e ? e.req : void 0,
                      res: e ? e.res : void 0,
                      beforeRenderFns: e ? e.beforeRenderFns : void 0,
                      ssrContext: e
                    })
                  )
                )
              case 8:
                if (
                  ((l = function(e, t) {
                    if (!e) throw new Error("inject(key, value) has no key provided")
                    if (void 0 === t) throw new Error("inject(key, value) has no value provided")
                    n[(e = "$" + e)] = t
                    var r = "__nuxt_" + e + "_installed__"
                    o.a[r] ||
                      ((o.a[r] = !0),
                      o.a.use(function() {
                        o.a.prototype.hasOwnProperty(e) ||
                          Object.defineProperty(o.a.prototype, e, {
                            get: function() {
                              return this.$root.$options[e]
                            }
                          })
                      }))
                  }),
                  "function" != typeof ne)
                ) {
                  f.next = 12
                  break
                }
                return (f.next = 12), regeneratorRuntime.awrap(ne(n.context, l))
              case 12:
                if ("function" != typeof me) {
                  f.next = 15
                  break
                }
                return (f.next = 15), regeneratorRuntime.awrap(me(n.context, l))
              case 15:
                if ("function" != typeof ke) {
                  f.next = 18
                  break
                }
                return (f.next = 18), regeneratorRuntime.awrap(ke(n.context, l))
              case 18:
                if ("function" != typeof Oe) {
                  f.next = 21
                  break
                }
                return (f.next = 21), regeneratorRuntime.awrap(Oe(n.context, l))
              case 21:
                f.next = 24
                break
              case 24:
                return f.abrupt("return", { app: n, router: t })
              case 25:
              case "end":
                return f.stop()
            }
        })
      }
    },
    79: function(e, t, n) {
      "use strict"
      t.a = {}
    },
    97: function(e, t, n) {
      var content = n(201)
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals)
      ;(0, n(13).default)("2d3d7576", content, !0, { sourceMap: !1 })
    },
    98: function(e, t, n) {
      var content = n(205)
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals)
      ;(0, n(13).default)("5b425f4d", content, !0, { sourceMap: !1 })
    },
    99: function(e, t, n) {
      var content = n(209)
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals)
      ;(0, n(13).default)("71411d99", content, !0, { sourceMap: !1 })
    }
  },
  [[174, 6, 3, 7]]
])
