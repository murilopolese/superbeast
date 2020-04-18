// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"p5.prod.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! p5.js v1.0.0 April 17, 2020 */
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).p5 = e();
  }
}(function () {
  return function a(o, s, l) {
    function u(t, e) {
      if (!s[t]) {
        if (!o[t]) {
          var r = "function" == typeof require && require;
          if (!e && r) return r(t, !0);
          if (h) return h(t, !0);
          var n = new Error("Cannot find module '" + t + "'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }

        var i = s[t] = {
          exports: {}
        };
        o[t][0].call(i.exports, function (e) {
          return u(o[t][1][e] || e);
        }, i, i.exports, a, o, s, l);
      }

      return s[t].exports;
    }

    for (var h = "function" == typeof require && require, e = 0; e < l.length; e++) {
      u(l[e]);
    }

    return u;
  }({
    1: [function (e, t, r) {
      t.exports = function (e) {
        if (Array.isArray(e)) return e;
      };
    }, {}],
    2: [function (e, t, r) {
      t.exports = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }

          return r;
        }
      };
    }, {}],
    3: [function (e, t, r) {
      t.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    }, {}],
    4: [function (e, t, r) {
      t.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      };
    }, {}],
    5: [function (e, t, r) {
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      t.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    }, {}],
    6: [function (e, t, r) {
      t.exports = function (e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e;
      };
    }, {}],
    7: [function (e, t, r) {
      function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, n(e);
      }

      t.exports = n;
    }, {}],
    8: [function (e, t, r) {
      var n = e("./setPrototypeOf");

      t.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && n(e, t);
      };
    }, {
      "./setPrototypeOf": 15
    }],
    9: [function (e, t, r) {
      t.exports = function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      };
    }, {}],
    10: [function (e, t, r) {
      t.exports = function (e, t) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;

        try {
          for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0) {
            ;
          }
        } catch (e) {
          i = !0, a = e;
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (i) throw a;
          }
        }

        return r;
      };
    }, {}],
    11: [function (e, t, r) {
      t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }, {}],
    12: [function (e, t, r) {
      t.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    }, {}],
    13: [function (e, t, r) {
      var i = e("./defineProperty");

      t.exports = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          }))), n.forEach(function (e) {
            i(t, e, r[e]);
          });
        }

        return t;
      };
    }, {
      "./defineProperty": 6
    }],
    14: [function (e, t, r) {
      var n = e("../helpers/typeof"),
          i = e("./assertThisInitialized");

      t.exports = function (e, t) {
        return !t || "object" !== n(t) && "function" != typeof t ? i(e) : t;
      };
    }, {
      "../helpers/typeof": 18,
      "./assertThisInitialized": 3
    }],
    15: [function (e, r, t) {
      function n(e, t) {
        return r.exports = n = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, n(e, t);
      }

      r.exports = n;
    }, {}],
    16: [function (e, t, r) {
      var n = e("./arrayWithHoles"),
          i = e("./iterableToArrayLimit"),
          a = e("./nonIterableRest");

      t.exports = function (e, t) {
        return n(e) || i(e, t) || a();
      };
    }, {
      "./arrayWithHoles": 1,
      "./iterableToArrayLimit": 10,
      "./nonIterableRest": 11
    }],
    17: [function (e, t, r) {
      var n = e("./arrayWithoutHoles"),
          i = e("./iterableToArray"),
          a = e("./nonIterableSpread");

      t.exports = function (e) {
        return n(e) || i(e) || a();
      };
    }, {
      "./arrayWithoutHoles": 2,
      "./iterableToArray": 9,
      "./nonIterableSpread": 12
    }],
    18: [function (e, t, r) {
      function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      function i(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function i(e) {
          return n(e);
        } : t.exports = i = function i(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
        }, i(e);
      }

      t.exports = i;
    }, {}],
    19: [function (e, t, r) {
      "use strict";

      r.byteLength = function (e) {
        var t = f(e),
            r = t[0],
            n = t[1];
        return 3 * (r + n) / 4 - n;
      }, r.toByteArray = function (e) {
        var t,
            r,
            n = f(e),
            i = n[0],
            a = n[1],
            o = new h(function (e, t) {
          return 3 * (e + t) / 4 - t;
        }(i, a)),
            s = 0,
            l = 0 < a ? i - 4 : i;

        for (r = 0; r < l; r += 4) {
          t = u[e.charCodeAt(r)] << 18 | u[e.charCodeAt(r + 1)] << 12 | u[e.charCodeAt(r + 2)] << 6 | u[e.charCodeAt(r + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = 255 & t;
        }

        2 === a && (t = u[e.charCodeAt(r)] << 2 | u[e.charCodeAt(r + 1)] >> 4, o[s++] = 255 & t);
        1 === a && (t = u[e.charCodeAt(r)] << 10 | u[e.charCodeAt(r + 1)] << 4 | u[e.charCodeAt(r + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = 255 & t);
        return o;
      }, r.fromByteArray = function (e) {
        for (var t, r = e.length, n = r % 3, i = [], a = 0, o = r - n; a < o; a += 16383) {
          i.push(l(e, a, o < a + 16383 ? o : a + 16383));
        }

        1 == n ? (t = e[r - 1], i.push(s[t >> 2] + s[t << 4 & 63] + "==")) : 2 == n && (t = (e[r - 2] << 8) + e[r - 1], i.push(s[t >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "="));
        return i.join("");
      };

      for (var s = [], u = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = n.length; i < a; ++i) {
        s[i] = n[i], u[n.charCodeAt(i)] = i;
      }

      function f(e) {
        var t = e.length;
        if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
      }

      function l(e, t, r) {
        for (var n, i, a = [], o = t; o < r; o += 3) {
          n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(s[(i = n) >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
        }

        return a.join("");
      }

      u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63;
    }, {}],
    20: [function (e, t, r) {}, {}],
    21: [function (N, e, F) {
      (function (f) {
        "use strict";

        var n = N("base64-js"),
            a = N("ieee754"),
            e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        F.Buffer = f, F.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return f.alloc(+e);
        }, F.INSPECT_MAX_BYTES = 50;
        var r = 2147483647;

        function o(e) {
          if (r < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          var t = new Uint8Array(e);
          return Object.setPrototypeOf(t, f.prototype), t;
        }

        function f(e, t, r) {
          if ("number" != typeof e) return i(e, t, r);
          if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
          return l(e);
        }

        function i(e, t, r) {
          if ("string" == typeof e) return function (e, t) {
            "string" == typeof t && "" !== t || (t = "utf8");
            if (!f.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            var r = 0 | c(e, t),
                n = o(r),
                i = n.write(e, t);
            i !== r && (n = n.slice(0, i));
            return n;
          }(e, t);
          if (ArrayBuffer.isView(e)) return u(e);
          if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
          if (A(e, ArrayBuffer) || e && A(e.buffer, ArrayBuffer)) return function (e, t, r) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var n;
            n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
            return Object.setPrototypeOf(n, f.prototype), n;
          }(e, t, r);
          if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
          var n = e.valueOf && e.valueOf();
          if (null != n && n !== e) return f.from(n, t, r);

          var i = function (e) {
            if (f.isBuffer(e)) {
              var t = 0 | h(e.length),
                  r = o(t);
              return 0 === r.length || e.copy(r, 0, 0, t), r;
            }

            if (void 0 !== e.length) return "number" != typeof e.length || I(e.length) ? o(0) : u(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data);
          }(e);

          if (i) return i;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return f.from(e[Symbol.toPrimitive]("string"), t, r);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
        }

        function s(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }

        function l(e) {
          return s(e), o(e < 0 ? 0 : 0 | h(e));
        }

        function u(e) {
          for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), n = 0; n < t; n += 1) {
            r[n] = 255 & e[n];
          }

          return r;
        }

        function h(e) {
          if (r <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
          return 0 | e;
        }

        function c(e, t) {
          if (f.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || A(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
          var r = e.length,
              n = 2 < arguments.length && !0 === arguments[2];
          if (!n && 0 === r) return 0;

          for (var i = !1;;) {
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;

              case "utf8":
              case "utf-8":
                return O(e).length;

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;

              case "hex":
                return r >>> 1;

              case "base64":
                return k(e).length;

              default:
                if (i) return n ? -1 : O(e).length;
                t = ("" + t).toLowerCase(), i = !0;
            }
          }
        }

        function p(e, t, r) {
          var n = e[t];
          e[t] = e[r], e[r] = n;
        }

        function d(e, t, r, n, i) {
          if (0 === e.length) return -1;

          if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), I(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }

          if ("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, r, n, i);
          if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : g(e, [t], r, n, i);
          throw new TypeError("val must be string, number or Buffer");
        }

        function g(e, t, r, n, i) {
          var a,
              o = 1,
              s = e.length,
              l = t.length;

          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            s /= o = 2, l /= 2, r /= 2;
          }

          function u(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o);
          }

          if (i) {
            var h = -1;

            for (a = r; a < s; a++) {
              if (u(e, a) === u(t, -1 === h ? 0 : a - h)) {
                if (-1 === h && (h = a), a - h + 1 === l) return h * o;
              } else -1 !== h && (a -= a - h), h = -1;
            }
          } else for (s < r + l && (r = s - l), a = r; 0 <= a; a--) {
            for (var f = !0, c = 0; c < l; c++) {
              if (u(e, a + c) !== u(t, c)) {
                f = !1;
                break;
              }
            }

            if (f) return a;
          }

          return -1;
        }

        function m(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? i < (n = Number(n)) && (n = i) : n = i;
          var a = t.length;
          a / 2 < n && (n = a / 2);

          for (var o = 0; o < n; ++o) {
            var s = parseInt(t.substr(2 * o, 2), 16);
            if (I(s)) return o;
            e[r + o] = s;
          }

          return o;
        }

        function v(e, t, r, n) {
          return D(function (e) {
            for (var t = [], r = 0; r < e.length; ++r) {
              t.push(255 & e.charCodeAt(r));
            }

            return t;
          }(t), e, r, n);
        }

        function y(e, t, r, n) {
          return D(function (e, t) {
            for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) {
              r = e.charCodeAt(o), n = r >> 8, i = r % 256, a.push(i), a.push(n);
            }

            return a;
          }(t, e.length - r), e, r, n);
        }

        function b(e, t, r) {
          return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
        }

        function _(e, t, r) {
          r = Math.min(e.length, r);

          for (var n = [], i = t; i < r;) {
            var a,
                o,
                s,
                l,
                u = e[i],
                h = null,
                f = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
            if (i + f <= r) switch (f) {
              case 1:
                u < 128 && (h = u);
                break;

              case 2:
                128 == (192 & (a = e[i + 1])) && 127 < (l = (31 & u) << 6 | 63 & a) && (h = l);
                break;

              case 3:
                a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && 2047 < (l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) && (l < 55296 || 57343 < l) && (h = l);
                break;

              case 4:
                a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && l < 1114112 && (h = l);
            }
            null === h ? (h = 65533, f = 1) : 65535 < h && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += f;
          }

          return function (e) {
            var t = e.length;
            if (t <= x) return String.fromCharCode.apply(String, e);
            var r = "",
                n = 0;

            for (; n < t;) {
              r += String.fromCharCode.apply(String, e.slice(n, n += x));
            }

            return r;
          }(n);
        }

        F.kMaxLength = r, (f.TYPED_ARRAY_SUPPORT = function () {
          try {
            var e = new Uint8Array(1),
                t = {
              foo: function foo() {
                return 42;
              }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
          } catch (e) {
            return !1;
          }
        }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(f.prototype, "parent", {
          enumerable: !0,
          get: function get() {
            if (f.isBuffer(this)) return this.buffer;
          }
        }), Object.defineProperty(f.prototype, "offset", {
          enumerable: !0,
          get: function get() {
            if (f.isBuffer(this)) return this.byteOffset;
          }
        }), "undefined" != typeof Symbol && null != Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), f.poolSize = 8192, f.from = function (e, t, r) {
          return i(e, t, r);
        }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array), f.alloc = function (e, t, r) {
          return i = t, a = r, s(n = e), n <= 0 ? o(n) : void 0 !== i ? "string" == typeof a ? o(n).fill(i, a) : o(n).fill(i) : o(n);
          var n, i, a;
        }, f.allocUnsafe = function (e) {
          return l(e);
        }, f.allocUnsafeSlow = function (e) {
          return l(e);
        }, f.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== f.prototype;
        }, f.compare = function (e, t) {
          if (A(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), A(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (e === t) return 0;

          for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i) {
            if (e[i] !== t[i]) {
              r = e[i], n = t[i];
              break;
            }
          }

          return r < n ? -1 : n < r ? 1 : 0;
        }, f.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;

            default:
              return !1;
          }
        }, f.concat = function (e, t) {
          if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return f.alloc(0);
          var r;
          if (void 0 === t) for (r = t = 0; r < e.length; ++r) {
            t += e[r].length;
          }
          var n = f.allocUnsafe(t),
              i = 0;

          for (r = 0; r < e.length; ++r) {
            var a = e[r];
            if (A(a, Uint8Array) && (a = f.from(a)), !f.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(n, i), i += a.length;
          }

          return n;
        }, f.byteLength = c, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

          for (var t = 0; t < e; t += 2) {
            p(this, t, t + 1);
          }

          return this;
        }, f.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

          for (var t = 0; t < e; t += 4) {
            p(this, t, t + 3), p(this, t + 1, t + 2);
          }

          return this;
        }, f.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

          for (var t = 0; t < e; t += 8) {
            p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
          }

          return this;
        }, f.prototype.toLocaleString = f.prototype.toString = function () {
          var e = this.length;
          return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : function (e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";

            for (e = e || "utf8";;) {
              switch (e) {
                case "hex":
                  return T(this, t, r);

                case "utf8":
                case "utf-8":
                  return _(this, t, r);

                case "ascii":
                  return S(this, t, r);

                case "latin1":
                case "binary":
                  return w(this, t, r);

                case "base64":
                  return b(this, t, r);

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, t, r);

                default:
                  if (n) throw new TypeError("Unknown encoding: " + e);
                  e = (e + "").toLowerCase(), n = !0;
              }
            }
          }.apply(this, arguments);
        }, f.prototype.equals = function (e) {
          if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === f.compare(this, e);
        }, f.prototype.inspect = function () {
          var e = "",
              t = F.INSPECT_MAX_BYTES;
          return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
        }, e && (f.prototype[e] = f.prototype.inspect), f.prototype.compare = function (e, t, r, n, i) {
          if (A(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(e));
          if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
          if (i <= n && r <= t) return 0;
          if (i <= n) return -1;
          if (r <= t) return 1;
          if (this === e) return 0;

          for (var a = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), s = Math.min(a, o), l = this.slice(n, i), u = e.slice(t, r), h = 0; h < s; ++h) {
            if (l[h] !== u[h]) {
              a = l[h], o = u[h];
              break;
            }
          }

          return a < o ? -1 : o < a ? 1 : 0;
        }, f.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }, f.prototype.indexOf = function (e, t, r) {
          return d(this, e, t, r, !0);
        }, f.prototype.lastIndexOf = function (e, t, r) {
          return d(this, e, t, r, !1);
        }, f.prototype.write = function (e, t, r, n) {
          if (void 0 === t) n = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
          }
          var i = this.length - t;
          if ((void 0 === r || i < r) && (r = i), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          n = n || "utf8";

          for (var a, o, s, l, u, h, f = !1;;) {
            switch (n) {
              case "hex":
                return m(this, e, t, r);

              case "utf8":
              case "utf-8":
                return u = t, h = r, D(O(e, (l = this).length - u), l, u, h);

              case "ascii":
                return v(this, e, t, r);

              case "latin1":
              case "binary":
                return v(this, e, t, r);

              case "base64":
                return a = this, o = t, s = r, D(k(e), a, o, s);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return y(this, e, t, r);

              default:
                if (f) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), f = !0;
            }
          }
        }, f.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var x = 4096;

        function S(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);

          for (var i = t; i < r; ++i) {
            n += String.fromCharCode(127 & e[i]);
          }

          return n;
        }

        function w(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);

          for (var i = t; i < r; ++i) {
            n += String.fromCharCode(e[i]);
          }

          return n;
        }

        function T(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n);

          for (var i = "", a = t; a < r; ++a) {
            i += U[e[a]];
          }

          return i;
        }

        function E(e, t, r) {
          for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2) {
            i += String.fromCharCode(n[a] + 256 * n[a + 1]);
          }

          return i;
        }

        function C(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (r < e + t) throw new RangeError("Trying to access beyond buffer length");
        }

        function L(e, t, r, n, i, a) {
          if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (i < t || t < a) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }

        function M(e, t, r, n) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }

        function P(e, t, r, n, i) {
          return t = +t, r >>>= 0, i || M(e, 0, r, 4), a.write(e, t, r, n, 23, 4), r + 4;
        }

        function R(e, t, r, n, i) {
          return t = +t, r >>>= 0, i || M(e, 0, r, 8), a.write(e, t, r, n, 52, 8), r + 8;
        }

        f.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), t < e && (t = e);
          var n = this.subarray(e, t);
          return Object.setPrototypeOf(n, f.prototype), n;
        }, f.prototype.readUIntLE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || C(e, t, this.length);

          for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) {
            n += this[e + a] * i;
          }

          return n;
        }, f.prototype.readUIntBE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || C(e, t, this.length);

          for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) {
            n += this[e + --t] * i;
          }

          return n;
        }, f.prototype.readUInt8 = function (e, t) {
          return e >>>= 0, t || C(e, 1, this.length), this[e];
        }, f.prototype.readUInt16LE = function (e, t) {
          return e >>>= 0, t || C(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, f.prototype.readUInt16BE = function (e, t) {
          return e >>>= 0, t || C(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, f.prototype.readUInt32LE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, f.prototype.readUInt32BE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, f.prototype.readIntLE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || C(e, t, this.length);

          for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) {
            n += this[e + a] * i;
          }

          return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
        }, f.prototype.readIntBE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || C(e, t, this.length);

          for (var n = t, i = 1, a = this[e + --n]; 0 < n && (i *= 256);) {
            a += this[e + --n] * i;
          }

          return (i *= 128) <= a && (a -= Math.pow(2, 8 * t)), a;
        }, f.prototype.readInt8 = function (e, t) {
          return e >>>= 0, t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, f.prototype.readInt16LE = function (e, t) {
          e >>>= 0, t || C(e, 2, this.length);
          var r = this[e] | this[e + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, f.prototype.readInt16BE = function (e, t) {
          e >>>= 0, t || C(e, 2, this.length);
          var r = this[e + 1] | this[e] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, f.prototype.readInt32LE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, f.prototype.readInt32BE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, f.prototype.readFloatLE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), a.read(this, e, !0, 23, 4);
        }, f.prototype.readFloatBE = function (e, t) {
          return e >>>= 0, t || C(e, 4, this.length), a.read(this, e, !1, 23, 4);
        }, f.prototype.readDoubleLE = function (e, t) {
          return e >>>= 0, t || C(e, 8, this.length), a.read(this, e, !0, 52, 8);
        }, f.prototype.readDoubleBE = function (e, t) {
          return e >>>= 0, t || C(e, 8, this.length), a.read(this, e, !1, 52, 8);
        }, f.prototype.writeUIntLE = function (e, t, r, n) {
          e = +e, t >>>= 0, r >>>= 0, n || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = 1,
              a = 0;

          for (this[t] = 255 & e; ++a < r && (i *= 256);) {
            this[t + a] = e / i & 255;
          }

          return t + r;
        }, f.prototype.writeUIntBE = function (e, t, r, n) {
          e = +e, t >>>= 0, r >>>= 0, n || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var i = r - 1,
              a = 1;

          for (this[t + i] = 255 & e; 0 <= --i && (a *= 256);) {
            this[t + i] = e / a & 255;
          }

          return t + r;
        }, f.prototype.writeUInt8 = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
        }, f.prototype.writeUInt16LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, f.prototype.writeUInt16BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, f.prototype.writeUInt32LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
        }, f.prototype.writeUInt32BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, f.prototype.writeIntLE = function (e, t, r, n) {
          if (e = +e, t >>>= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            L(this, e, t, r, i - 1, -i);
          }

          var a = 0,
              o = 1,
              s = 0;

          for (this[t] = 255 & e; ++a < r && (o *= 256);) {
            e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
          }

          return t + r;
        }, f.prototype.writeIntBE = function (e, t, r, n) {
          if (e = +e, t >>>= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            L(this, e, t, r, i - 1, -i);
          }

          var a = r - 1,
              o = 1,
              s = 0;

          for (this[t + a] = 255 & e; 0 <= --a && (o *= 256);) {
            e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
          }

          return t + r;
        }, f.prototype.writeInt8 = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, f.prototype.writeInt16LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, f.prototype.writeInt16BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, f.prototype.writeInt32LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
        }, f.prototype.writeInt32BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, f.prototype.writeFloatLE = function (e, t, r) {
          return P(this, e, t, !0, r);
        }, f.prototype.writeFloatBE = function (e, t, r) {
          return P(this, e, t, !1, r);
        }, f.prototype.writeDoubleLE = function (e, t, r) {
          return R(this, e, t, !0, r);
        }, f.prototype.writeDoubleBE = function (e, t, r) {
          return R(this, e, t, !1, r);
        }, f.prototype.copy = function (e, t, r, n) {
          if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer");
          if (r = r || 0, n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < n && n < r && (n = r), n === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
          var i = n - r;
          if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);else if (this === e && r < t && t < n) for (var a = i - 1; 0 <= a; --a) {
            e[a + t] = this[a + r];
          } else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
          return i;
        }, f.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);

            if (1 === e.length) {
              var i = e.charCodeAt(0);
              ("utf8" === n && i < 128 || "latin1" === n) && (e = i);
            }
          } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));

          if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
          if (r <= t) return this;
          var a;
          if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof (e = e || 0)) for (a = t; a < r; ++a) {
            this[a] = e;
          } else {
            var o = f.isBuffer(e) ? e : f.from(e, n),
                s = o.length;
            if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');

            for (a = 0; a < r - t; ++a) {
              this[a + t] = o[a % s];
            }
          }
          return this;
        };
        var t = /[^+/0-9A-Za-z-_]/g;

        function O(e, t) {
          var r;
          t = t || 1 / 0;

          for (var n = e.length, i = null, a = [], o = 0; o < n; ++o) {
            if (55295 < (r = e.charCodeAt(o)) && r < 57344) {
              if (!i) {
                if (56319 < r) {
                  -1 < (t -= 3) && a.push(239, 191, 189);
                  continue;
                }

                if (o + 1 === n) {
                  -1 < (t -= 3) && a.push(239, 191, 189);
                  continue;
                }

                i = r;
                continue;
              }

              if (r < 56320) {
                -1 < (t -= 3) && a.push(239, 191, 189), i = r;
                continue;
              }

              r = 65536 + (i - 55296 << 10 | r - 56320);
            } else i && -1 < (t -= 3) && a.push(239, 191, 189);

            if (i = null, r < 128) {
              if (--t < 0) break;
              a.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              a.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }

          return a;
        }

        function k(e) {
          return n.toByteArray(function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(t, "")).length < 2) return "";

            for (; e.length % 4 != 0;) {
              e += "=";
            }

            return e;
          }(e));
        }

        function D(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) {
            t[i + r] = e[i];
          }

          return i;
        }

        function A(e, t) {
          return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
        }

        function I(e) {
          return e != e;
        }

        var U = function () {
          for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r) {
            for (var n = 16 * r, i = 0; i < 16; ++i) {
              t[n + i] = e[r] + e[i];
            }
          }

          return t;
        }();
      }).call(this, N("buffer").Buffer);
    }, {
      "base64-js": 19,
      buffer: 21,
      ieee754: 26
    }],
    22: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e && "object" == _typeof(e) && "default" in e ? e.default : e;
      }

      var i = n(e("@babel/runtime/helpers/classCallCheck")),
          a = n(e("@babel/runtime/helpers/createClass")),
          o = [],
          s = o.forEach,
          l = o.slice;

      var u,
          h = function h(e, t, r, n) {
        var i;

        if (r) {
          var a = new Date();
          a.setTime(a.getTime() + 60 * r * 1e3), i = "; expires=" + a.toGMTString();
        } else i = "";

        n = n ? "domain=" + n + ";" : "", document.cookie = e + "=" + t + i + ";" + n + "path=/";
      },
          f = function f(e) {
        for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
          for (var i = r[n]; " " === i.charAt(0);) {
            i = i.substring(1, i.length);
          }

          if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
        }

        return null;
      },
          c = {
        name: "cookie",
        lookup: function lookup(e) {
          var t;

          if (e.lookupCookie && "undefined" != typeof document) {
            var r = f(e.lookupCookie);
            r && (t = r);
          }

          return t;
        },
        cacheUserLanguage: function cacheUserLanguage(e, t) {
          t.lookupCookie && "undefined" != typeof document && h(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain);
        }
      },
          p = {
        name: "querystring",
        lookup: function lookup(e) {
          var t;
          if ("undefined" != typeof window) for (var r = window.location.search.substring(1).split("&"), n = 0; n < r.length; n++) {
            var i = r[n].indexOf("=");
            if (0 < i) r[n].substring(0, i) === e.lookupQuerystring && (t = r[n].substring(i + 1));
          }
          return t;
        }
      };

      try {
        u = "undefined" !== window && null !== window.localStorage;
        var d = "i18next.translate.boo";
        window.localStorage.setItem(d, "foo"), window.localStorage.removeItem(d);
      } catch (e) {
        u = !1;
      }

      var g = {
        name: "localStorage",
        lookup: function lookup(e) {
          var t;

          if (e.lookupLocalStorage && u) {
            var r = window.localStorage.getItem(e.lookupLocalStorage);
            r && (t = r);
          }

          return t;
        },
        cacheUserLanguage: function cacheUserLanguage(e, t) {
          t.lookupLocalStorage && u && window.localStorage.setItem(t.lookupLocalStorage, e);
        }
      },
          m = {
        name: "navigator",
        lookup: function lookup() {
          var e = [];

          if ("undefined" != typeof navigator) {
            if (navigator.languages) for (var t = 0; t < navigator.languages.length; t++) {
              e.push(navigator.languages[t]);
            }
            navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language);
          }

          return 0 < e.length ? e : void 0;
        }
      },
          v = {
        name: "htmlTag",
        lookup: function lookup(e) {
          var t,
              r = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
          return r && "function" == typeof r.getAttribute && (t = r.getAttribute("lang")), t;
        }
      },
          y = {
        name: "path",
        lookup: function lookup(e) {
          var t;

          if ("undefined" != typeof window) {
            var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (r instanceof Array) if ("number" == typeof e.lookupFromPathIndex) {
              if ("string" != typeof r[e.lookupFromPathIndex]) return;
              t = r[e.lookupFromPathIndex].replace("/", "");
            } else t = r[0].replace("/", "");
          }

          return t;
        }
      },
          b = {
        name: "subdomain",
        lookup: function lookup(e) {
          var t;

          if ("undefined" != typeof window) {
            var r = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
            r instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? r[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : r[0].replace("http://", "").replace("https://", "").replace(".", ""));
          }

          return t;
        }
      };

      var _ = function () {
        function r(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          i(this, r), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
        }

        return a(r, [{
          key: "init",
          value: function value(e, t, r) {
            var n = 1 < arguments.length && void 0 !== t ? t : {},
                i = 2 < arguments.length && void 0 !== r ? r : {};
            this.services = e, this.options = function (r) {
              return s.call(l.call(arguments, 1), function (e) {
                if (e) for (var t in e) {
                  void 0 === r[t] && (r[t] = e[t]);
                }
              }), r;
            }(n, this.options || {}, {
              order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
              lookupQuerystring: "lng",
              lookupCookie: "i18next",
              lookupLocalStorage: "i18nextLng",
              caches: ["localStorage"],
              excludeCacheFor: ["cimode"],
              checkWhitelist: !0
            }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(c), this.addDetector(p), this.addDetector(g), this.addDetector(m), this.addDetector(v), this.addDetector(y), this.addDetector(b);
          }
        }, {
          key: "addDetector",
          value: function value(e) {
            this.detectors[e.name] = e;
          }
        }, {
          key: "detect",
          value: function value(e) {
            var r = this;
            e = e || this.options.order;
            var n,
                i = [];

            if (e.forEach(function (e) {
              if (r.detectors[e]) {
                var t = r.detectors[e].lookup(r.options);
                t && "string" == typeof t && (t = [t]), t && (i = i.concat(t));
              }
            }), i.forEach(function (e) {
              if (!n) {
                var t = r.services.languageUtils.formatLanguageCode(e);
                r.options.checkWhitelist && !r.services.languageUtils.isWhitelisted(t) || (n = t);
              }
            }), !n) {
              var t = this.i18nOptions.fallbackLng;
              "string" == typeof t && (t = [t]), t = t || [], n = "[object Array]" === Object.prototype.toString.apply(t) ? t[0] : t[0] || t.default && t.default[0];
            }

            return n;
          }
        }, {
          key: "cacheUserLanguage",
          value: function value(t, e) {
            var r = this;
            (e = e || this.options.caches) && (this.options.excludeCacheFor && -1 < this.options.excludeCacheFor.indexOf(t) || e.forEach(function (e) {
              r.detectors[e] && r.detectors[e].cacheUserLanguage(t, r.options);
            }));
          }
        }]), r;
      }();

      _.type = "languageDetector", t.exports = _;
    }, {
      "@babel/runtime/helpers/classCallCheck": 23,
      "@babel/runtime/helpers/createClass": 24
    }],
    23: [function (e, t, r) {
      arguments[4][4][0].apply(r, arguments);
    }, {
      dup: 4
    }],
    24: [function (e, t, r) {
      arguments[4][5][0].apply(r, arguments);
    }, {
      dup: 5
    }],
    25: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e && "object" == _typeof(e) && "default" in e ? e.default : e;
      }

      var k = n(e("@babel/runtime/helpers/typeof")),
          D = n(e("@babel/runtime/helpers/objectSpread")),
          l = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/createClass")),
          u = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          h = n(e("@babel/runtime/helpers/getPrototypeOf")),
          f = n(e("@babel/runtime/helpers/assertThisInitialized")),
          c = n(e("@babel/runtime/helpers/inherits")),
          a = n(e("@babel/runtime/helpers/toConsumableArray")),
          p = n(e("@babel/runtime/helpers/slicedToArray")),
          o = {
        type: "logger",
        log: function log(e) {
          this.output("log", e);
        },
        warn: function warn(e) {
          this.output("warn", e);
        },
        error: function error(e) {
          this.output("error", e);
        },
        output: function output(e, t) {
          var r;
          console && console[e] && (r = console)[e].apply(r, a(t));
        }
      },
          d = new (function () {
        function r(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          l(this, r), this.init(e, t);
        }

        return i(r, [{
          key: "init",
          value: function value(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            this.prefix = r.prefix || "i18next:", this.logger = e || o, this.options = r, this.debug = r.debug;
          }
        }, {
          key: "setDebug",
          value: function value(e) {
            this.debug = e;
          }
        }, {
          key: "log",
          value: function value() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
              t[r] = arguments[r];
            }

            return this.forward(t, "log", "", !0);
          }
        }, {
          key: "warn",
          value: function value() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
              t[r] = arguments[r];
            }

            return this.forward(t, "warn", "", !0);
          }
        }, {
          key: "error",
          value: function value() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
              t[r] = arguments[r];
            }

            return this.forward(t, "error", "");
          }
        }, {
          key: "deprecate",
          value: function value() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
              t[r] = arguments[r];
            }

            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
          }
        }, {
          key: "forward",
          value: function value(e, t, r, n) {
            return n && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(r).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
          }
        }, {
          key: "create",
          value: function value(e) {
            return new r(this.logger, D({}, {
              prefix: "".concat(this.prefix, ":").concat(e, ":")
            }, this.options));
          }
        }]), r;
      }())(),
          g = function () {
        function e() {
          l(this, e), this.observers = {};
        }

        return i(e, [{
          key: "on",
          value: function value(e, t) {
            var r = this;
            return e.split(" ").forEach(function (e) {
              r.observers[e] = r.observers[e] || [], r.observers[e].push(t);
            }), this;
          }
        }, {
          key: "off",
          value: function value(e, t) {
            this.observers[e] && (t ? this.observers[e] = this.observers[e].filter(function (e) {
              return e !== t;
            }) : delete this.observers[e]);
          }
        }, {
          key: "emit",
          value: function value(t) {
            for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) {
              r[n - 1] = arguments[n];
            }

            this.observers[t] && [].concat(this.observers[t]).forEach(function (e) {
              e.apply(void 0, r);
            });
            this.observers["*"] && [].concat(this.observers["*"]).forEach(function (e) {
              e.apply(e, [t].concat(r));
            });
          }
        }]), e;
      }();

      function m() {
        var r,
            n,
            e = new Promise(function (e, t) {
          r = e, n = t;
        });
        return e.resolve = r, e.reject = n, e;
      }

      function v(e) {
        return null == e ? "" : "" + e;
      }

      function y(e, t, r) {
        function n(e) {
          return e && -1 < e.indexOf("###") ? e.replace(/###/g, ".") : e;
        }

        function i() {
          return !e || "string" == typeof e;
        }

        for (var a = "string" != typeof t ? [].concat(t) : t.split("."); 1 < a.length;) {
          if (i()) return {};
          var o = n(a.shift());
          !e[o] && r && (e[o] = new r()), e = e[o];
        }

        return i() ? {} : {
          obj: e,
          k: n(a.shift())
        };
      }

      function b(e, t, r) {
        var n = y(e, t, Object);
        n.obj[n.k] = r;
      }

      function _(e, t) {
        var r = y(e, t),
            n = r.obj,
            i = r.k;
        if (n) return n[i];
      }

      function x(e, t, r) {
        var n = _(e, r);

        return void 0 !== n ? n : _(t, r);
      }

      function s(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }

      var S = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
      };

      function w(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function (e) {
          return S[e];
        }) : e;
      }

      var T = function () {
        function n(e) {
          var t,
              r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
          };
          return l(this, n), t = u(this, h(n).call(this)), g.call(f(t)), t.data = e || {}, t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t;
        }

        return c(n, g), i(n, [{
          key: "addNamespaces",
          value: function value(e) {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }
        }, {
          key: "removeNamespaces",
          value: function value(e) {
            var t = this.options.ns.indexOf(e);
            -1 < t && this.options.ns.splice(t, 1);
          }
        }, {
          key: "getResource",
          value: function value(e, t, r, n) {
            var i = 3 < arguments.length && void 0 !== n ? n : {},
                a = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                o = [e, t];
            return r && "string" != typeof r && (o = o.concat(r)), r && "string" == typeof r && (o = o.concat(a ? r.split(a) : r)), -1 < e.indexOf(".") && (o = e.split(".")), _(this.data, o);
          }
        }, {
          key: "addResource",
          value: function value(e, t, r, n, i) {
            var a = 4 < arguments.length && void 0 !== i ? i : {
              silent: !1
            },
                o = this.options.keySeparator;
            void 0 === o && (o = ".");
            var s = [e, t];
            r && (s = s.concat(o ? r.split(o) : r)), -1 < e.indexOf(".") && (n = t, t = (s = e.split("."))[1]), this.addNamespaces(t), b(this.data, s, n), a.silent || this.emit("added", e, t, r, n);
          }
        }, {
          key: "addResources",
          value: function value(e, t, r, n) {
            var i = 3 < arguments.length && void 0 !== n ? n : {
              silent: !1
            };

            for (var a in r) {
              "string" != typeof r[a] && "[object Array]" !== Object.prototype.toString.apply(r[a]) || this.addResource(e, t, a, r[a], {
                silent: !0
              });
            }

            i.silent || this.emit("added", e, t, r);
          }
        }, {
          key: "addResourceBundle",
          value: function value(e, t, r, n, i, a) {
            var o = 5 < arguments.length && void 0 !== a ? a : {
              silent: !1
            },
                s = [e, t];
            -1 < e.indexOf(".") && (n = r, r = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
            var l = _(this.data, s) || {};
            n ? function e(t, r, n) {
              for (var i in r) {
                i in t ? "string" == typeof t[i] || t[i] instanceof String || "string" == typeof r[i] || r[i] instanceof String ? n && (t[i] = r[i]) : e(t[i], r[i], n) : t[i] = r[i];
              }

              return t;
            }(l, r, i) : l = D({}, l, r), b(this.data, s, l), o.silent || this.emit("added", e, t, r);
          }
        }, {
          key: "removeResourceBundle",
          value: function value(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
          }
        }, {
          key: "hasResourceBundle",
          value: function value(e, t) {
            return void 0 !== this.getResource(e, t);
          }
        }, {
          key: "getResourceBundle",
          value: function value(e, t) {
            return t = t || this.options.defaultNS, "v1" === this.options.compatibilityAPI ? D({}, {}, this.getResource(e, t)) : this.getResource(e, t);
          }
        }, {
          key: "getDataByLanguage",
          value: function value(e) {
            return this.data[e];
          }
        }, {
          key: "toJSON",
          value: function value() {
            return this.data;
          }
        }]), n;
      }(),
          E = {
        processors: {},
        addPostProcessor: function addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle: function handle(e, t, r, n, i) {
          var a = this;
          return e.forEach(function (e) {
            a.processors[e] && (t = a.processors[e].process(t, r, n, i));
          }), t;
        }
      },
          C = {},
          L = function () {
        function o(e) {
          var t,
              r,
              n,
              i,
              a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          return l(this, o), t = u(this, h(o).call(this)), g.call(f(t)), r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n = e, i = f(t), r.forEach(function (e) {
            n[e] && (i[e] = n[e]);
          }), t.options = a, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = d.create("translator"), t;
        }

        return c(o, g), i(o, [{
          key: "changeLanguage",
          value: function value(e) {
            e && (this.language = e);
          }
        }, {
          key: "exists",
          value: function value(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {
              interpolation: {}
            },
                n = this.resolve(e, r);
            return n && void 0 !== n.res;
          }
        }, {
          key: "extractFromKey",
          value: function value(e, t) {
            var r = t.nsSeparator || this.options.nsSeparator;
            void 0 === r && (r = ":");
            var n = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                i = t.ns || this.options.defaultNS;

            if (r && -1 < e.indexOf(r)) {
              var a = e.split(r);
              (r !== n || r === n && -1 < this.options.ns.indexOf(a[0])) && (i = a.shift()), e = a.join(n);
            }

            return "string" == typeof i && (i = [i]), {
              key: e,
              namespaces: i
            };
          }
        }, {
          key: "translate",
          value: function value(e, r) {
            var n = this;
            if ("object" !== k(r) && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), r = r || {}, null == e) return "";
            Array.isArray(e) || (e = [String(e)]);
            var t = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                i = this.extractFromKey(e[e.length - 1], r),
                a = i.key,
                o = i.namespaces,
                s = o[o.length - 1],
                l = r.lng || this.language,
                u = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

            if (l && "cimode" === l.toLowerCase()) {
              if (u) {
                var h = r.nsSeparator || this.options.nsSeparator;
                return s + h + a;
              }

              return a;
            }

            var f = this.resolve(e, r),
                c = f && f.res,
                p = f && f.usedKey || a,
                d = f && f.exactUsedKey || a,
                g = Object.prototype.toString.apply(c),
                m = void 0 !== r.joinArrays ? r.joinArrays : this.options.joinArrays,
                v = !this.i18nFormat || this.i18nFormat.handleAsObject;

            if (v && c && "string" != typeof c && "boolean" != typeof c && "number" != typeof c && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(g) < 0 && ("string" != typeof m || "[object Array]" !== g)) {
              if (!r.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, c, r) : "key '".concat(a, " (").concat(this.language, ")' returned an object instead of string.");

              if (t) {
                var y = "[object Array]" === g,
                    b = y ? [] : {},
                    _ = y ? d : p;

                for (var x in c) {
                  if (Object.prototype.hasOwnProperty.call(c, x)) {
                    var S = "".concat(_).concat(t).concat(x);
                    b[x] = this.translate(S, D({}, r, {
                      joinArrays: !1,
                      ns: o
                    })), b[x] === S && (b[x] = c[x]);
                  }
                }

                c = b;
              }
            } else if (v && "string" == typeof m && "[object Array]" === g) c = (c = c.join(m)) && this.extendTranslation(c, e, r);else {
              var w = !1,
                  T = !1;

              if (!this.isValidLookup(c) && void 0 !== r.defaultValue) {
                if (w = !0, void 0 !== r.count) {
                  var E = this.pluralResolver.getSuffix(l, r.count);
                  c = r["defaultValue".concat(E)];
                }

                c = c || r.defaultValue;
              }

              this.isValidLookup(c) || (T = !0, c = a);
              var C = r.defaultValue && r.defaultValue !== c && this.options.updateMissing;

              if (T || w || C) {
                this.logger.log(C ? "updateKey" : "missingKey", l, s, a, C ? r.defaultValue : c);
                var L = [],
                    M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                if ("fallback" === this.options.saveMissingTo && M && M[0]) for (var P = 0; P < M.length; P++) {
                  L.push(M[P]);
                } else "all" === this.options.saveMissingTo ? L = this.languageUtils.toResolveHierarchy(r.lng || this.language) : L.push(r.lng || this.language);

                var R = function R(e, t) {
                  n.options.missingKeyHandler ? n.options.missingKeyHandler(e, s, t, C ? r.defaultValue : c, C, r) : n.backendConnector && n.backendConnector.saveMissing && n.backendConnector.saveMissing(e, s, t, C ? r.defaultValue : c, C, r), n.emit("missingKey", e, s, t, c);
                };

                if (this.options.saveMissing) {
                  var O = void 0 !== r.count && "string" != typeof r.count;
                  this.options.saveMissingPlurals && O ? L.forEach(function (t) {
                    n.pluralResolver.getPluralFormsOfKey(t, a).forEach(function (e) {
                      return R([t], e);
                    });
                  }) : R(L, a);
                }
              }

              c = this.extendTranslation(c, e, r, f), T && c === a && this.options.appendNamespaceToMissingKey && (c = "".concat(s, ":").concat(a)), T && this.options.parseMissingKeyHandler && (c = this.options.parseMissingKeyHandler(c));
            }

            return c;
          }
        }, {
          key: "extendTranslation",
          value: function value(e, t, r, n) {
            var i = this;
            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, r, n.usedLng, n.usedNS, n.usedKey, {
              resolved: n
            });else if (!r.skipInterpolation) {
              r.interpolation && this.interpolator.init(D({}, r, {
                interpolation: D({}, this.options.interpolation, r.interpolation)
              }));
              var a = r.replace && "string" != typeof r.replace ? r.replace : r;
              this.options.interpolation.defaultVariables && (a = D({}, this.options.interpolation.defaultVariables, a)), e = this.interpolator.interpolate(e, a, r.lng || this.language, r), !1 !== r.nest && (e = this.interpolator.nest(e, function () {
                return i.translate.apply(i, arguments);
              }, r)), r.interpolation && this.interpolator.reset();
            }
            var o = r.postProcess || this.options.postProcess,
                s = "string" == typeof o ? [o] : o;
            return null != e && s && s.length && !1 !== r.applyPostProcessor && (e = E.handle(s, e, t, this.options && this.options.postProcessPassResolved ? D({
              i18nResolved: n
            }, r) : r, this)), e;
          }
        }, {
          key: "resolve",
          value: function value(e, t) {
            var u,
                i,
                h,
                f,
                c,
                p = this,
                d = 1 < arguments.length && void 0 !== t ? t : {};
            return "string" == typeof e && (e = [e]), e.forEach(function (e) {
              if (!p.isValidLookup(u)) {
                var t = p.extractFromKey(e, d),
                    o = t.key;
                i = o;
                var r = t.namespaces;
                p.options.fallbackNS && (r = r.concat(p.options.fallbackNS));
                var s = void 0 !== d.count && "string" != typeof d.count,
                    l = void 0 !== d.context && "string" == typeof d.context && "" !== d.context,
                    n = d.lngs ? d.lngs : p.languageUtils.toResolveHierarchy(d.lng || p.language, d.fallbackLng);
                r.forEach(function (a) {
                  p.isValidLookup(u) || (c = a, !C["".concat(n[0], "-").concat(a)] && p.utils && p.utils.hasLoadedNamespace && !p.utils.hasLoadedNamespace(c) && (C["".concat(n[0], "-").concat(a)] = !0, p.logger.warn('key "'.concat(i, '" for namespace "').concat(c, '" for languages "').concat(n.join(", "), "\" won't get resolved as namespace was not yet loaded"), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), n.forEach(function (e) {
                    if (!p.isValidLookup(u)) {
                      f = e;
                      var t,
                          r,
                          n = o,
                          i = [n];
                      if (p.i18nFormat && p.i18nFormat.addLookupKeys) p.i18nFormat.addLookupKeys(i, o, e, a, d);else s && (t = p.pluralResolver.getSuffix(e, d.count)), s && l && i.push(n + t), l && i.push(n += "".concat(p.options.contextSeparator).concat(d.context)), s && i.push(n += t);

                      for (; r = i.pop();) {
                        p.isValidLookup(u) || (h = r, u = p.getResource(e, a, r, d));
                      }
                    }
                  }));
                });
              }
            }), {
              res: u,
              usedKey: i,
              exactUsedKey: h,
              usedLng: f,
              usedNS: c
            };
          }
        }, {
          key: "isValidLookup",
          value: function value(e) {
            return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e);
          }
        }, {
          key: "getResource",
          value: function value(e, t, r, n) {
            var i = 3 < arguments.length && void 0 !== n ? n : {};
            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i);
          }
        }]), o;
      }();

      function M(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }

      var P = function () {
        function t(e) {
          l(this, t), this.options = e, this.whitelist = this.options.whitelist || !1, this.logger = d.create("languageUtils");
        }

        return i(t, [{
          key: "getScriptPartFromCode",
          value: function value(e) {
            if (!e || e.indexOf("-") < 0) return null;
            var t = e.split("-");
            return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")));
          }
        }, {
          key: "getLanguagePartFromCode",
          value: function value(e) {
            if (!e || e.indexOf("-") < 0) return e;
            var t = e.split("-");
            return this.formatLanguageCode(t[0]);
          }
        }, {
          key: "formatLanguageCode",
          value: function value(e) {
            if ("string" == typeof e && -1 < e.indexOf("-")) {
              var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                  r = e.split("-");
              return this.options.lowerCaseLng ? r = r.map(function (e) {
                return e.toLowerCase();
              }) : 2 === r.length ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), -1 < t.indexOf(r[1].toLowerCase()) && (r[1] = M(r[1].toLowerCase()))) : 3 === r.length && (r[0] = r[0].toLowerCase(), 2 === r[1].length && (r[1] = r[1].toUpperCase()), "sgn" !== r[0] && 2 === r[2].length && (r[2] = r[2].toUpperCase()), -1 < t.indexOf(r[1].toLowerCase()) && (r[1] = M(r[1].toLowerCase())), -1 < t.indexOf(r[2].toLowerCase()) && (r[2] = M(r[2].toLowerCase()))), r.join("-");
            }

            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
          }
        }, {
          key: "isWhitelisted",
          value: function value(e) {
            return "languageOnly" !== this.options.load && !this.options.nonExplicitWhitelist || (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || -1 < this.whitelist.indexOf(e);
          }
        }, {
          key: "getFallbackCodes",
          value: function value(e, t) {
            if (!e) return [];
            if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
            if (!t) return e.default || [];
            var r = e[t];
            return (r = (r = (r = r || e[this.getScriptPartFromCode(t)]) || e[this.formatLanguageCode(t)]) || e.default) || [];
          }
        }, {
          key: "toResolveHierarchy",
          value: function value(e, t) {
            function r(e) {
              e && (n.isWhitelisted(e) ? a.push(e) : n.logger.warn("rejecting non-whitelisted language code: ".concat(e)));
            }

            var n = this,
                i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                a = [];
            return "string" == typeof e && -1 < e.indexOf("-") ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), i.forEach(function (e) {
              a.indexOf(e) < 0 && r(n.formatLanguageCode(e));
            }), a;
          }
        }]), t;
      }(),
          R = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
      }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
      }, {
        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
      }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
      }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
      }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
      }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
      }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
      }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
      }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
      }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
      }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
      }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
      }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
      }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
      }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
      }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
      }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
      }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
      }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
      }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
      }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
      }, {
        lngs: ["he"],
        nr: [1, 2, 20, 21],
        fc: 22
      }],
          O = {
        1: function _(e) {
          return Number(1 < e);
        },
        2: function _(e) {
          return Number(1 != e);
        },
        3: function _() {
          return 0;
        },
        4: function _(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2);
        },
        5: function _(e) {
          return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5);
        },
        6: function _(e) {
          return Number(1 == e ? 0 : 2 <= e && e <= 4 ? 1 : 2);
        },
        7: function _(e) {
          return Number(1 == e ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2);
        },
        8: function _(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
        },
        9: function _(e) {
          return Number(2 <= e);
        },
        10: function _(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
        },
        11: function _(e) {
          return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : 2 < e && e < 20 ? 2 : 3);
        },
        12: function _(e) {
          return Number(e % 10 != 1 || e % 100 == 11);
        },
        13: function _(e) {
          return Number(0 !== e);
        },
        14: function _(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
        },
        15: function _(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2);
        },
        16: function _(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
        },
        17: function _(e) {
          return Number(1 == e || e % 10 == 1 ? 0 : 1);
        },
        18: function _(e) {
          return Number(0 == e ? 0 : 1 == e ? 1 : 2);
        },
        19: function _(e) {
          return Number(1 == e ? 0 : 0 === e || 1 < e % 100 && e % 100 < 11 ? 1 : 10 < e % 100 && e % 100 < 20 ? 2 : 3);
        },
        20: function _(e) {
          return Number(1 == e ? 0 : 0 === e || 0 < e % 100 && e % 100 < 20 ? 1 : 2);
        },
        21: function _(e) {
          return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
        },
        22: function _(e) {
          return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || 10 < e) && e % 10 == 0 ? 2 : 3);
        }
      };

      var A = function () {
        function n(e) {
          var r,
              t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          l(this, n), this.languageUtils = e, this.options = t, this.logger = d.create("pluralResolver"), this.rules = (r = {}, R.forEach(function (t) {
            t.lngs.forEach(function (e) {
              r[e] = {
                numbers: t.nr,
                plurals: O[t.fc]
              };
            });
          }), r);
        }

        return i(n, [{
          key: "addRule",
          value: function value(e, t) {
            this.rules[e] = t;
          }
        }, {
          key: "getRule",
          value: function value(e) {
            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
          }
        }, {
          key: "needsPlural",
          value: function value(e) {
            var t = this.getRule(e);
            return t && 1 < t.numbers.length;
          }
        }, {
          key: "getPluralFormsOfKey",
          value: function value(r, n) {
            var i = this,
                a = [],
                e = this.getRule(r);
            return e && e.numbers.forEach(function (e) {
              var t = i.getSuffix(r, e);
              a.push("".concat(n).concat(t));
            }), a;
          }
        }, {
          key: "getSuffix",
          value: function value(e, t) {
            var r = this,
                n = this.getRule(e);

            if (n) {
              var i = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                  a = n.numbers[i];
              this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] && (2 === a ? a = "plural" : 1 === a && (a = ""));

              var o = function o() {
                return r.options.prepend && a.toString() ? r.options.prepend + a.toString() : a.toString();
              };

              return "v1" === this.options.compatibilityJSON ? 1 === a ? "" : "number" == typeof a ? "_plural_".concat(a.toString()) : o() : "v2" === this.options.compatibilityJSON ? o() : this.options.simplifyPluralSuffix && 2 === n.numbers.length && 1 === n.numbers[0] ? o() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
            }

            return this.logger.warn("no plural rule found for: ".concat(e)), "";
          }
        }]), n;
      }(),
          I = function () {
        function t() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          l(this, t), this.logger = d.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function (e) {
            return e;
          }, this.init(e);
        }

        return i(t, [{
          key: "init",
          value: function value(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {};
            t.interpolation || (t.interpolation = {
              escapeValue: !0
            });
            var r = t.interpolation;
            this.escape = void 0 !== r.escape ? r.escape : w, this.escapeValue = void 0 === r.escapeValue || r.escapeValue, this.useRawValueToEscape = void 0 !== r.useRawValueToEscape && r.useRawValueToEscape, this.prefix = r.prefix ? s(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? s(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? s(r.nestingPrefix) : r.nestingPrefixEscaped || s("$t("), this.nestingSuffix = r.nestingSuffix ? s(r.nestingSuffix) : r.nestingSuffixEscaped || s(")"), this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.resetRegExp();
          }
        }, {
          key: "reset",
          value: function value() {
            this.options && this.init(this.options);
          }
        }, {
          key: "resetRegExp",
          value: function value() {
            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
            this.regexp = new RegExp(e, "g");
            var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
            this.regexpUnescape = new RegExp(t, "g");
            var r = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
            this.nestingRegexp = new RegExp(r, "g");
          }
        }, {
          key: "interpolate",
          value: function value(e, i, a, t) {
            var r,
                n,
                o,
                s = this,
                l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

            function u(e) {
              return e.replace(/\$/g, "$$$$");
            }

            function h(e) {
              if (e.indexOf(s.formatSeparator) < 0) return x(i, l, e);
              var t = e.split(s.formatSeparator),
                  r = t.shift().trim(),
                  n = t.join(s.formatSeparator).trim();
              return s.format(x(i, l, r), n, a);
            }

            this.resetRegExp();
            var f = t && t.missingInterpolationHandler || this.options.missingInterpolationHandler;

            for (o = 0; r = this.regexpUnescape.exec(e);) {
              if (void 0 === (n = h(r[1].trim()))) {
                if ("function" == typeof f) {
                  var c = f(e, r, t);
                  n = "string" == typeof c ? c : "";
                } else this.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)), n = "";
              } else "string" == typeof n || this.useRawValueToEscape || (n = v(n));
              if (e = e.replace(r[0], u(n)), this.regexpUnescape.lastIndex = 0, ++o >= this.maxReplaces) break;
            }

            for (o = 0; r = this.regexp.exec(e);) {
              if (void 0 === (n = h(r[1].trim()))) {
                if ("function" == typeof f) {
                  var p = f(e, r, t);
                  n = "string" == typeof p ? p : "";
                } else this.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)), n = "";
              } else "string" == typeof n || this.useRawValueToEscape || (n = v(n));
              if (n = this.escapeValue ? u(this.escape(n)) : u(n), e = e.replace(r[0], n), this.regexp.lastIndex = 0, ++o >= this.maxReplaces) break;
            }

            return e;
          }
        }, {
          key: "nest",
          value: function value(e, t, r) {
            var n,
                i,
                a = D({}, 2 < arguments.length && void 0 !== r ? r : {});

            function o(t, e) {
              if (t.indexOf(",") < 0) return t;
              var r = t.split(",");
              t = r.shift();
              var n = r.join(",");
              n = (n = this.interpolate(n, a)).replace(/'/g, '"');

              try {
                a = JSON.parse(n), e && (a = D({}, e, a));
              } catch (e) {
                this.logger.error("failed parsing options string in nesting for key ".concat(t), e);
              }

              return delete a.defaultValue, t;
            }

            for (a.applyPostProcessor = !1, delete a.defaultValue; n = this.nestingRegexp.exec(e);) {
              if ((i = t(o.call(this, n[1].trim(), a), a)) && n[0] === e && "string" != typeof i) return i;
              "string" != typeof i && (i = v(i)), i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), i = ""), e = e.replace(n[0], i), this.regexp.lastIndex = 0;
            }

            return e;
          }
        }]), t;
      }();

      var U = function () {
        function a(e, t, r) {
          var n,
              i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          return l(this, a), n = u(this, h(a).call(this)), g.call(f(n)), n.backend = e, n.store = t, n.services = r, n.languageUtils = r.languageUtils, n.options = i, n.logger = d.create("backendConnector"), n.state = {}, n.queue = [], n.backend && n.backend.init && n.backend.init(r, i.backend, i), n;
        }

        return c(a, g), i(a, [{
          key: "queueLoad",
          value: function value(e, t, i, r) {
            var a = this,
                o = [],
                s = [],
                l = [],
                u = [];
            return e.forEach(function (r) {
              var n = !0;
              t.forEach(function (e) {
                var t = "".concat(r, "|").concat(e);
                !i.reload && a.store.hasResourceBundle(r, e) ? a.state[t] = 2 : a.state[t] < 0 || (1 === a.state[t] ? s.indexOf(t) < 0 && s.push(t) : (a.state[t] = 1, n = !1, s.indexOf(t) < 0 && s.push(t), o.indexOf(t) < 0 && o.push(t), u.indexOf(e) < 0 && u.push(e)));
              }), n || l.push(r);
            }), (o.length || s.length) && this.queue.push({
              pending: s,
              loaded: {},
              errors: [],
              callback: r
            }), {
              toLoad: o,
              pending: s,
              toLoadLanguages: l,
              toLoadNamespaces: u
            };
          }
        }, {
          key: "loaded",
          value: function value(s, l, e) {
            var t = s.split("|"),
                r = p(t, 2),
                u = r[0],
                h = r[1];
            l && this.emit("failedLoading", u, h, l), e && this.store.addResourceBundle(u, h, e), this.state[s] = l ? -1 : 2;
            var f = {};
            this.queue.forEach(function (e) {
              var t, r, n, i, a, o;
              t = e.loaded, r = h, i = y(t, [u], Object), a = i.obj, o = i.k, a[o] = a[o] || [], n && (a[o] = a[o].concat(r)), n || a[o].push(r), function (e, t) {
                for (var r = e.indexOf(t); -1 !== r;) {
                  e.splice(r, 1), r = e.indexOf(t);
                }
              }(e.pending, s), l && e.errors.push(l), 0 !== e.pending.length || e.done || (Object.keys(e.loaded).forEach(function (t) {
                f[t] || (f[t] = []), e.loaded[t].length && e.loaded[t].forEach(function (e) {
                  f[t].indexOf(e) < 0 && f[t].push(e);
                });
              }), e.done = !0, e.errors.length ? e.callback(e.errors) : e.callback());
            }), this.emit("loaded", f), this.queue = this.queue.filter(function (e) {
              return !e.done;
            });
          }
        }, {
          key: "read",
          value: function value(r, n, i, e, t, a) {
            var o = this,
                s = 3 < arguments.length && void 0 !== e ? e : 0,
                l = 4 < arguments.length && void 0 !== t ? t : 250,
                u = 5 < arguments.length ? a : void 0;
            return r.length ? this.backend[i](r, n, function (e, t) {
              e && t && s < 5 ? setTimeout(function () {
                o.read.call(o, r, n, i, s + 1, 2 * l, u);
              }, l) : u(e, t);
            }) : u(null, {});
          }
        }, {
          key: "prepareLoading",
          value: function value(e, t, r, n) {
            var i = this,
                a = 2 < arguments.length && void 0 !== r ? r : {},
                o = 3 < arguments.length ? n : void 0;
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
            "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
            var s = this.queueLoad(e, t, a, o);
            if (!s.toLoad.length) return s.pending.length || o(), null;
            s.toLoad.forEach(function (e) {
              i.loadOne(e);
            });
          }
        }, {
          key: "load",
          value: function value(e, t, r) {
            this.prepareLoading(e, t, {}, r);
          }
        }, {
          key: "reload",
          value: function value(e, t, r) {
            this.prepareLoading(e, t, {
              reload: !0
            }, r);
          }
        }, {
          key: "loadOne",
          value: function value(r, e) {
            var n = this,
                i = 1 < arguments.length && void 0 !== e ? e : "",
                t = r.split("|"),
                a = p(t, 2),
                o = a[0],
                s = a[1];
            this.read(o, s, "read", null, null, function (e, t) {
              e && n.logger.warn("".concat(i, "loading namespace ").concat(s, " for language ").concat(o, " failed"), e), !e && t && n.logger.log("".concat(i, "loaded namespace ").concat(s, " for language ").concat(o), t), n.loaded(r, e, t);
            });
          }
        }, {
          key: "saveMissing",
          value: function value(e, t, r, n, i, a) {
            var o = 5 < arguments.length && void 0 !== a ? a : {};
            this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(r, '" for namespace "').concat(t, '" as the namespace was not yet loaded'), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != r && "" !== r && (this.backend && this.backend.create && this.backend.create(e, t, r, n, null, D({}, o, {
              isUpdate: i
            })), e && e[0] && this.store.addResource(e[0], t, r, n));
          }
        }]), a;
      }();

      function N(e) {
        return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e;
      }

      function F() {}

      var G = new (function () {
        function s() {
          var e,
              t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
              r = 1 < arguments.length ? arguments[1] : void 0;

          if (l(this, s), e = u(this, h(s).call(this)), g.call(f(e)), e.options = N(t), e.services = {}, e.logger = d, e.modules = {
            external: []
          }, r && !e.isInitialized && !t.isClone) {
            if (!e.options.initImmediate) return e.init(t, r), u(e, f(e));
            setTimeout(function () {
              e.init(t, r);
            }, 0);
          }

          return e;
        }

        return c(s, g), i(s, [{
          key: "init",
          value: function value(e, t) {
            var i = this,
                r = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? t : void 0;

            function a(e) {
              return e ? "function" == typeof e ? new e() : e : null;
            }

            if ("function" == typeof r && (n = r, r = {}), this.options = D({}, {
              debug: !1,
              initImmediate: !0,
              ns: ["translation"],
              defaultNS: ["translation"],
              fallbackLng: ["dev"],
              fallbackNS: !1,
              whitelist: !1,
              nonExplicitWhitelist: !1,
              load: "all",
              preload: !1,
              simplifyPluralSuffix: !0,
              keySeparator: ".",
              nsSeparator: ":",
              pluralSeparator: "_",
              contextSeparator: "_",
              partialBundledLanguages: !1,
              saveMissing: !1,
              updateMissing: !1,
              saveMissingTo: "fallback",
              saveMissingPlurals: !0,
              missingKeyHandler: !1,
              missingInterpolationHandler: !1,
              postProcess: !1,
              postProcessPassResolved: !1,
              returnNull: !0,
              returnEmptyString: !0,
              returnObjects: !1,
              joinArrays: !1,
              returnedObjectHandler: !1,
              parseMissingKeyHandler: !1,
              appendNamespaceToMissingKey: !1,
              appendNamespaceToCIMode: !1,
              overloadTranslationOptionHandler: function overloadTranslationOptionHandler(e) {
                var t = {};

                if ("object" === k(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === k(e[2]) || "object" === k(e[3])) {
                  var r = e[3] || e[2];
                  Object.keys(r).forEach(function (e) {
                    t[e] = r[e];
                  });
                }

                return t;
              },
              interpolation: {
                escapeValue: !0,
                format: function format(e) {
                  return e;
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                maxReplaces: 1e3
              }
            }, this.options, N(r)), this.format = this.options.interpolation.format, n = n || F, !this.options.isClone) {
              this.modules.logger ? d.init(a(this.modules.logger), this.options) : d.init(null, this.options);
              var o = new P(this.options);
              this.store = new T(this.options.resources, this.options);
              var s = this.services;
              s.logger = d, s.resourceStore = this.store, s.languageUtils = o, s.pluralResolver = new A(o, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
              }), s.interpolator = new I(this.options), s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
              }, s.backendConnector = new U(a(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function (e) {
                for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) {
                  r[n - 1] = arguments[n];
                }

                i.emit.apply(i, [e].concat(r));
              }), this.modules.languageDetector && (s.languageDetector = a(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = a(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new L(this.services, this.options), this.translator.on("*", function (e) {
                for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) {
                  r[n - 1] = arguments[n];
                }

                i.emit.apply(i, [e].concat(r));
              }), this.modules.external.forEach(function (e) {
                e.init && e.init(i);
              });
            }

            ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (t) {
              i[t] = function () {
                var e;
                return (e = i.store)[t].apply(e, arguments);
              };
            });

            function l() {
              i.changeLanguage(i.options.lng, function (e, t) {
                i.isInitialized = !0, i.logger.log("initialized", i.options), i.emit("initialized", i.options), u.resolve(t), n(e, t);
              });
            }

            var u = m();
            return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u;
          }
        }, {
          key: "loadResources",
          value: function value(e, t) {
            var r = this,
                n = 1 < arguments.length && void 0 !== t ? t : F,
                i = "string" == typeof e ? e : this.language;

            if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
              if (i && "cimode" === i.toLowerCase()) return n();

              var a = [],
                  o = function o(e) {
                e && r.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                  a.indexOf(e) < 0 && a.push(e);
                });
              };

              if (i) o(i);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
                return o(e);
              });
              this.options.preload && this.options.preload.forEach(function (e) {
                return o(e);
              }), this.services.backendConnector.load(a, this.options.ns, n);
            } else n(null);
          }
        }, {
          key: "reloadResources",
          value: function value(e, t, r) {
            var n = m();
            return e = e || this.languages, t = t || this.options.ns, r = r || F, this.services.backendConnector.reload(e, t, function (e) {
              n.resolve(), r(e);
            }), n;
          }
        }, {
          key: "use",
          value: function value(e) {
            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && E.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this;
          }
        }, {
          key: "changeLanguage",
          value: function value(e, i) {
            var a = this;
            this.isLanguageChangingTo = e;
            var o = m();
            this.emit("languageChanging", e);

            function t(n) {
              n && (a.language || (a.language = n, a.languages = a.services.languageUtils.toResolveHierarchy(n)), a.translator.language || a.translator.changeLanguage(n), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage(n)), a.loadResources(n, function (e) {
                var t, r;
                t = e, (r = n) ? (a.language = r, a.languages = a.services.languageUtils.toResolveHierarchy(r), a.translator.changeLanguage(r), a.isLanguageChangingTo = void 0, a.emit("languageChanged", r), a.logger.log("languageChanged", r)) : a.isLanguageChangingTo = void 0, o.resolve(function () {
                  return a.t.apply(a, arguments);
                }), i && i(t, function () {
                  return a.t.apply(a, arguments);
                });
              });
            }

            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(t) : t(e) : t(this.services.languageDetector.detect()), o;
          }
        }, {
          key: "getFixedT",
          value: function value(e, t) {
            function o(e, t) {
              var r;

              if ("object" !== k(t)) {
                for (var n = arguments.length, i = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) {
                  i[a - 2] = arguments[a];
                }

                r = s.options.overloadTranslationOptionHandler([e, t].concat(i));
              } else r = D({}, t);

              return r.lng = r.lng || o.lng, r.lngs = r.lngs || o.lngs, r.ns = r.ns || o.ns, s.t(e, r);
            }

            var s = this;
            return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = t, o;
          }
        }, {
          key: "t",
          value: function value() {
            var e;
            return this.translator && (e = this.translator).translate.apply(e, arguments);
          }
        }, {
          key: "exists",
          value: function value() {
            var e;
            return this.translator && (e = this.translator).exists.apply(e, arguments);
          }
        }, {
          key: "setDefaultNamespace",
          value: function value(e) {
            this.options.defaultNS = e;
          }
        }, {
          key: "hasLoadedNamespace",
          value: function value(e) {
            var n = this;
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            var t = this.languages[0],
                r = !!this.options && this.options.fallbackLng,
                i = this.languages[this.languages.length - 1];
            if ("cimode" === t.toLowerCase()) return !0;

            function a(e, t) {
              var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
              return -1 === r || 2 === r;
            }

            return !!this.hasResourceBundle(t, e) || !this.services.backendConnector.backend || !(!a(t, e) || r && !a(i, e));
          }
        }, {
          key: "loadNamespaces",
          value: function value(e, t) {
            var r = this,
                n = m();
            return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function (e) {
              r.options.ns.indexOf(e) < 0 && r.options.ns.push(e);
            }), this.loadResources(function (e) {
              n.resolve(), t && t(e);
            }), n) : (t && t(), Promise.resolve());
          }
        }, {
          key: "loadLanguages",
          value: function value(e, t) {
            var r = m();
            "string" == typeof e && (e = [e]);
            var n = this.options.preload || [],
                i = e.filter(function (e) {
              return n.indexOf(e) < 0;
            });
            return i.length ? (this.options.preload = n.concat(i), this.loadResources(function (e) {
              r.resolve(), t && t(e);
            }), r) : (t && t(), Promise.resolve());
          }
        }, {
          key: "dir",
          value: function value(e) {
            if (!(e = e || (this.languages && 0 < this.languages.length ? this.languages[0] : this.language))) return "rtl";
            return 0 <= ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) ? "rtl" : "ltr";
          }
        }, {
          key: "createInstance",
          value: function value(e, t) {
            return new s(0 < arguments.length && void 0 !== e ? e : {}, 1 < arguments.length ? t : void 0);
          }
        }, {
          key: "cloneInstance",
          value: function value(e, t) {
            var r = this,
                n = 0 < arguments.length && void 0 !== e ? e : {},
                i = 1 < arguments.length && void 0 !== t ? t : F,
                a = D({}, this.options, n, {
              isClone: !0
            }),
                o = new s(a);
            return ["store", "services", "language"].forEach(function (e) {
              o[e] = r[e];
            }), o.translator = new L(o.services, o.options), o.translator.on("*", function (e) {
              for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) {
                r[n - 1] = arguments[n];
              }

              o.emit.apply(o, [e].concat(r));
            }), o.init(a, i), o.translator.options = o.options, o;
          }
        }]), s;
      }())();
      t.exports = G;
    }, {
      "@babel/runtime/helpers/assertThisInitialized": 3,
      "@babel/runtime/helpers/classCallCheck": 4,
      "@babel/runtime/helpers/createClass": 5,
      "@babel/runtime/helpers/getPrototypeOf": 7,
      "@babel/runtime/helpers/inherits": 8,
      "@babel/runtime/helpers/objectSpread": 13,
      "@babel/runtime/helpers/possibleConstructorReturn": 14,
      "@babel/runtime/helpers/slicedToArray": 16,
      "@babel/runtime/helpers/toConsumableArray": 17,
      "@babel/runtime/helpers/typeof": 18
    }],
    26: [function (e, t, r) {
      r.read = function (e, t, r, n, i) {
        var a,
            o,
            s = 8 * i - n - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            h = -7,
            f = r ? i - 1 : 0,
            c = r ? -1 : 1,
            p = e[t + f];

        for (f += c, a = p & (1 << -h) - 1, p >>= -h, h += s; 0 < h; a = 256 * a + e[t + f], f += c, h -= 8) {
          ;
        }

        for (o = a & (1 << -h) - 1, a >>= -h, h += n; 0 < h; o = 256 * o + e[t + f], f += c, h -= 8) {
          ;
        }

        if (0 === a) a = 1 - u;else {
          if (a === l) return o ? NaN : 1 / 0 * (p ? -1 : 1);
          o += Math.pow(2, n), a -= u;
        }
        return (p ? -1 : 1) * o * Math.pow(2, a - n);
      }, r.write = function (e, t, r, n, i, a) {
        var o,
            s,
            l,
            u = 8 * a - i - 1,
            h = (1 << u) - 1,
            f = h >> 1,
            c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : a - 1,
            d = n ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), 2 <= (t += 1 <= o + f ? c / l : c * Math.pow(2, 1 - f)) * l && (o++, l /= 2), h <= o + f ? (s = 0, o = h) : 1 <= o + f ? (s = (t * l - 1) * Math.pow(2, i), o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[r + p] = 255 & s, p += d, s /= 256, i -= 8) {
          ;
        }

        for (o = o << i | s, u += i; 0 < u; e[r + p] = 255 & o, p += d, o /= 256, u -= 8) {
          ;
        }

        e[r + p - d] |= 128 * g;
      };
    }, {}],
    27: [function (e, t, r) {
      "use strict";

      var n;

      function m(e, t) {
        return e.b === t.b && e.a === t.a;
      }

      function v(e, t) {
        return e.b < t.b || e.b === t.b && e.a <= t.a;
      }

      function y(e, t, r) {
        var n = t.b - e.b,
            i = r.b - t.b;
        return 0 < n + i ? n < i ? t.a - e.a + n / (n + i) * (e.a - r.a) : t.a - r.a + i / (n + i) * (r.a - e.a) : 0;
      }

      function b(e, t, r) {
        var n = t.b - e.b,
            i = r.b - t.b;
        return 0 < n + i ? (t.a - r.a) * n + (t.a - e.a) * i : 0;
      }

      function _(e, t) {
        return e.a < t.a || e.a === t.a && e.b <= t.b;
      }

      function x(e, t, r) {
        var n = t.a - e.a,
            i = r.a - t.a;
        return 0 < n + i ? n < i ? t.b - e.b + n / (n + i) * (e.b - r.b) : t.b - r.b + i / (n + i) * (r.b - e.b) : 0;
      }

      function S(e, t, r) {
        var n = t.a - e.a,
            i = r.a - t.a;
        return 0 < n + i ? (t.b - r.b) * n + (t.b - e.b) * i : 0;
      }

      function w(e, t, r, n) {
        return (e = e < 0 ? 0 : e) <= (r = r < 0 ? 0 : r) ? 0 === r ? (t + n) / 2 : t + e / (e + r) * (n - t) : n + r / (e + r) * (t - n);
      }

      function o(e) {
        var t = a(e.b);
        return i(t, e.c), i(t.b, e.c), s(t, e.a), t;
      }

      function T(e, t) {
        var r = !1,
            n = !1;
        e !== t && (t.a !== e.a && (n = !0, g(t.a, e.a)), t.d !== e.d && (r = !0, l(t.d, e.d)), p(t, e), n || (i(t, e.a), e.a.c = e), r || (s(t, e.d), e.d.a = e));
      }

      function f(e) {
        var t = e.b,
            r = !1;
        e.d !== e.b.d && (r = !0, l(e.d, e.b.d)), e.c === e ? g(e.a, null) : (e.b.d.a = J(e), e.a.c = e.c, p(e, J(e)), r || s(e, e.d)), t.c === t ? (g(t.a, null), l(t.d, null)) : (e.d.a = J(t), t.a.c = t.c, p(t, J(t))), d(e);
      }

      function E(e) {
        var t = a(e),
            r = t.b;
        return p(t, e.e), t.a = e.b.a, i(r, t.a), t.d = r.d = e.d, t = t.b, p(e.b, J(e.b)), p(e.b, t), e.b.a = t.a, t.b.a.c = t.b, t.b.d = e.b.d, t.f = e.f, t.b.f = e.b.f, t;
      }

      function c(e, t) {
        var r = !1,
            n = a(e),
            i = n.b;
        return t.d !== e.d && (r = !0, l(t.d, e.d)), p(n, e.e), p(i, t), n.a = e.b.a, i.a = t.a, n.d = i.d = e.d, e.d.a = i, r || s(n, e.d), n;
      }

      function a(e) {
        var t = new Q(),
            r = new Q(),
            n = e.b.h;
        return (((r.h = n).b.h = t).h = e).b.h = r, t.b = r, ((t.c = t).e = r).b = t, (r.c = r).e = t;
      }

      function p(e, t) {
        var r = e.c,
            n = t.c;
        r.b.e = t, (n.b.e = e).c = n, t.c = r;
      }

      function i(e, t) {
        var r = t.f,
            n = new ee(t, r);

        for (r.e = n, r = (t.f = n).c = e; r.a = n, (r = r.c) !== e;) {
          ;
        }
      }

      function s(e, t) {
        var r = t.d,
            n = new K(t, r);

        for (r.b = n, (t.d = n).a = e, n.c = t.c, r = e; r.d = n, (r = r.e) !== e;) {
          ;
        }
      }

      function d(e) {
        var t = e.h;
        e = e.b.h, (t.b.h = e).b.h = t;
      }

      function g(e, t) {
        for (var r = e.c, n = r; n.a = t, (n = n.c) !== r;) {
          ;
        }

        r = e.f, ((n = e.e).f = r).e = n;
      }

      function l(e, t) {
        for (var r = e.a, n = r; n.d = t, (n = n.e) !== r;) {
          ;
        }

        r = e.d, ((n = e.b).d = r).b = n;
      }

      function C(e) {
        var t = 0;
        return Math.abs(e[1]) > Math.abs(e[0]) && (t = 1), Math.abs(e[2]) > Math.abs(e[t]) && (t = 2), t;
      }

      var L = 4e150;

      function M(e, t) {
        e.f += t.f, e.b.f += t.b.f;
      }

      function u(e, t, r) {
        return e = e.a, t = t.a, r = r.a, t.b.a === e ? r.b.a === e ? v(t.a, r.a) ? b(r.b.a, t.a, r.a) <= 0 : 0 <= b(t.b.a, r.a, t.a) : b(r.b.a, e, r.a) <= 0 : r.b.a === e ? 0 <= b(t.b.a, e, t.a) : (t = y(t.b.a, e, t.a), (e = y(r.b.a, e, r.a)) <= t);
      }

      function P(e) {
        e.a.i = null;
        var t = e.e;
        t.a.c = t.c, t.c.a = t.a, e.e = null;
      }

      function h(e, t) {
        f(e.a), e.c = !1, (e.a = t).i = e;
      }

      function R(e) {
        for (var t = e.a.a; (e = ce(e)).a.a === t;) {
          ;
        }

        return e.c && (h(e, t = c(fe(e).a.b, e.a.e)), e = ce(e)), e;
      }

      function O(e, t, r) {
        var n = new he();
        return n.a = r, n.e = W(e.f, t.e, n), r.i = n;
      }

      function k(e, t) {
        switch (e.s) {
          case 100130:
            return 0 != (1 & t);

          case 100131:
            return 0 !== t;

          case 100132:
            return 0 < t;

          case 100133:
            return t < 0;

          case 100134:
            return 2 <= t || t <= -2;
        }

        return !1;
      }

      function D(e) {
        var t = e.a,
            r = t.d;
        r.c = e.d, r.a = t, P(e);
      }

      function A(e, t, r) {
        for (t = (e = t).a; e !== r;) {
          e.c = !1;
          var n = fe(e),
              i = n.a;

          if (i.a !== t.a) {
            if (!n.c) {
              D(e);
              break;
            }

            h(n, i = c(t.c.b, i.b));
          }

          t.c !== i && (T(J(i), i), T(t, i)), D(e), t = n.a, e = n;
        }

        return t;
      }

      function I(e, t, r, n, i, a) {
        for (var o = !0; O(e, t, r.b), (r = r.c) !== n;) {
          ;
        }

        for (null === i && (i = fe(t).a.b.c); (r = (n = fe(t)).a.b).a === i.a;) {
          r.c !== i && (T(J(r), r), T(J(i), r)), n.f = t.f - r.f, n.d = k(e, n.f), t.b = !0, !o && G(e, t) && (M(r, i), P(t), f(i)), o = !1, t = n, i = r;
        }

        t.b = !0, a && j(e, t);
      }

      function U(e, t, r, n, i) {
        var a = [t.g[0], t.g[1], t.g[2]];
        t.d = null, t.d = e.o && e.o(a, r, n, e.c) || null, null === t.d && (i ? e.n || (Z(e, 100156), e.n = !0) : t.d = r[0]);
      }

      function N(e, t, r) {
        var n = [null, null, null, null];
        n[0] = t.a.d, n[1] = r.a.d, U(e, t.a, n, [.5, .5, 0, 0], !1), T(t, r);
      }

      function F(e, t, r, n, i) {
        var a = Math.abs(t.b - e.b) + Math.abs(t.a - e.a),
            o = Math.abs(r.b - e.b) + Math.abs(r.a - e.a),
            s = i + 1;
        n[i] = .5 * o / (a + o), n[s] = .5 * a / (a + o), e.g[0] += n[i] * t.g[0] + n[s] * r.g[0], e.g[1] += n[i] * t.g[1] + n[s] * r.g[1], e.g[2] += n[i] * t.g[2] + n[s] * r.g[2];
      }

      function G(e, t) {
        var r = fe(t),
            n = t.a,
            i = r.a;

        if (v(n.a, i.a)) {
          if (0 < b(i.b.a, n.a, i.a)) return !1;

          if (m(n.a, i.a)) {
            if (n.a !== i.a) {
              r = e.e;
              var a = n.a.h;

              if (0 <= a) {
                var o = (r = r.b).d,
                    s = r.e,
                    l = r.c,
                    u = l[a];
                o[u] = o[r.a], (l[o[u]] = u) <= --r.a && (u <= 1 ? le(r, u) : v(s[o[u >> 1]], s[o[u]]) ? le(r, u) : ue(r, u)), s[a] = null, l[a] = r.b, r.b = a;
              } else for (r.c[-(a + 1)] = null; 0 < r.a && null === r.c[r.d[r.a - 1]];) {
                --r.a;
              }

              N(e, J(i), n);
            }
          } else E(i.b), T(n, J(i)), t.b = r.b = !0;
        } else {
          if (b(n.b.a, i.a, n.a) < 0) return !1;
          ce(t).b = t.b = !0, E(n.b), T(J(i), n);
        }

        return !0;
      }

      function B(e, t) {
        var r = fe(t),
            n = t.a,
            i = r.a,
            a = n.a,
            o = i.a,
            s = n.b.a,
            l = i.b.a,
            u = new ee();
        if (b(s, e.a, a), b(l, e.a, o), a === o || Math.min(a.a, s.a) > Math.max(o.a, l.a)) return !1;

        if (v(a, o)) {
          if (0 < b(l, a, o)) return !1;
        } else if (b(s, o, a) < 0) return !1;

        var h,
            f,
            c = s,
            p = a,
            d = l,
            g = o;
        if (v(c, p) || (h = c, c = p, p = h), v(d, g) || (h = d, d = g, g = h), v(c, d) || (h = c, c = d, d = h, h = p, p = g, g = h), v(d, p) ? v(p, g) ? ((h = y(c, d, p)) + (f = y(d, p, g)) < 0 && (h = -h, f = -f), u.b = w(h, d.b, f, p.b)) : ((h = b(c, d, p)) + (f = -b(c, g, p)) < 0 && (h = -h, f = -f), u.b = w(h, d.b, f, g.b)) : u.b = (d.b + p.b) / 2, _(c, p) || (h = c, c = p, p = h), _(d, g) || (h = d, d = g, g = h), _(c, d) || (h = c, c = d, d = h, h = p, p = g, g = h), _(d, p) ? _(p, g) ? ((h = x(c, d, p)) + (f = x(d, p, g)) < 0 && (h = -h, f = -f), u.a = w(h, d.a, f, p.a)) : ((h = S(c, d, p)) + (f = -S(c, g, p)) < 0 && (h = -h, f = -f), u.a = w(h, d.a, f, g.a)) : u.a = (d.a + p.a) / 2, v(u, e.a) && (u.b = e.a.b, u.a = e.a.a), c = v(a, o) ? a : o, v(c, u) && (u.b = c.b, u.a = c.a), m(u, a) || m(u, o)) return G(e, t), !1;

        if (!m(s, e.a) && 0 <= b(s, e.a, u) || !m(l, e.a) && b(l, e.a, u) <= 0) {
          if (l === e.a) return E(n.b), T(i.b, n), n = fe(t = R(t)).a, A(e, fe(t), r), I(e, t, J(n), n, n, !0), !0;
          if (s !== e.a) return 0 <= b(s, e.a, u) && (ce(t).b = t.b = !0, E(n.b), n.a.b = e.a.b, n.a.a = e.a.a), b(l, e.a, u) <= 0 && (t.b = r.b = !0, E(i.b), i.a.b = e.a.b, i.a.a = e.a.a), !1;

          for (E(i.b), T(n.e, J(i)), o = (a = r = t).a.b.a; (a = ce(a)).a.b.a === o;) {
            ;
          }

          return a = fe(t = a).a.b.c, r.a = J(i), I(e, t, (i = A(e, r, null)).c, n.b.c, a, !0), !0;
        }

        return E(n.b), E(i.b), T(J(i), n), n.a.b = u.b, n.a.a = u.a, n.a.h = re(e.e, n.a), n = n.a, i = [0, 0, 0, 0], u = [a.d, s.d, o.d, l.d], n.g[0] = n.g[1] = n.g[2] = 0, F(n, a, s, i, 0), F(n, o, l, i, 2), U(e, n, u, i, !0), ce(t).b = t.b = r.b = !0, !1;
      }

      function j(e, t) {
        for (var r = fe(t);;) {
          for (; r.b;) {
            r = fe(t = r);
          }

          if (!t.b && (null === (t = ce(r = t)) || !t.b)) break;
          t.b = !1;
          var n,
              i = t.a,
              a = r.a;
          if (n = i.b.a !== a.b.a) e: {
            var o = fe(n = t),
                s = n.a,
                l = o.a,
                u = void 0;

            if (v(s.b.a, l.b.a)) {
              if (b(s.b.a, l.b.a, s.a) < 0) {
                n = !1;
                break e;
              }

              ce(n).b = n.b = !0, u = E(s), T(l.b, u), u.d.c = n.d;
            } else {
              if (0 < b(l.b.a, s.b.a, l.a)) {
                n = !1;
                break e;
              }

              n.b = o.b = !0, u = E(l), T(s.e, l.b), u.b.d.c = n.d;
            }

            n = !0;
          }
          if (n && (r.c ? (P(r), f(a), a = (r = fe(t)).a) : t.c && (P(t), f(i), i = (t = ce(r)).a)), i.a !== a.a) if (i.b.a === a.b.a || t.c || r.c || i.b.a !== e.a && a.b.a !== e.a) G(e, t);else if (B(e, t)) break;
          i.a === a.a && i.b.a === a.b.a && (M(a, i), P(t), f(i), t = ce(r));
        }
      }

      function z(e, t) {
        for (var r = (e.a = t).c; null === r.i;) {
          if ((r = r.c) === t.c) {
            r = e;
            var n = t;
            (o = new he()).a = n.c.b;

            for (var i = (l = r.f).a; null !== (i = i.a).b && !l.c(l.b, o, i.b);) {
              ;
            }

            var a = fe(l = i.b),
                o = l.a;
            i = a.a;
            if (0 === b(o.b.a, n, o.a)) m((o = l.a).a, n) || m(o.b.a, n) || (E(o.b), l.c && (f(o.c), l.c = !1), T(n.c, o), z(r, n));else {
              var s = v(i.b.a, o.b.a) ? l : a;
              a = void 0;
              l.d || s.c ? (a = s === l ? c(n.c.b, o.e) : c(i.b.c.b, n.c).b, s.c ? h(s, a) : ((l = O(o = r, l, a)).f = ce(l).f + l.a.f, l.d = k(o, l.f)), z(r, n)) : I(r, l, n.c, n.c, null, !0);
            }
            return;
          }
        }

        if (l = (o = fe(r = R(r.i))).a, (o = A(e, o, null)).c === l) {
          o = (l = o).c, i = fe(r), a = r.a, s = i.a;
          var l,
              u = !1;
          a.b.a !== s.b.a && B(e, r), m(a.a, e.a) && (T(J(o), a), o = fe(r = R(r)).a, A(e, fe(r), i), u = !0), m(s.a, e.a) && (T(l, J(s)), l = A(e, i, null), u = !0), u ? I(e, r, l.c, o, o, !0) : (n = v(s.a, a.a) ? J(s) : a, I(e, r, n = c(l.c.b, n), n.c, n.c, !1), n.b.i.c = !0, j(e, r));
        } else I(e, r, o.c, l, l, !0);
      }

      function V(e, t) {
        var r = new he(),
            n = o(e.b);
        n.a.b = L, n.a.a = t, n.b.a.b = -L, n.b.a.a = t, e.a = n.b.a, r.a = n, r.f = 0, r.d = !1, r.c = !1, r.h = !0, r.b = !1, n = W(n = e.f, n.a, r), r.e = n;
      }

      function H(e) {
        this.a = new q(), this.b = e, this.c = u;
      }

      function W(e, t, r) {
        for (; null !== (t = t.c).b && !e.c(e.b, t.b, r);) {
          ;
        }

        return e = new q(r, t.a, t), t.a.c = e, t.a = e;
      }

      function q(e, t, r) {
        this.b = e || null, this.a = t || this, this.c = r || this;
      }

      function X() {
        this.d = 0, this.p = this.b = this.q = null, this.j = [0, 0, 0], this.s = 100130, this.n = !1, this.o = this.a = this.e = this.f = null, this.m = !1, this.c = this.r = this.i = this.k = this.l = this.h = null;
      }

      function Y(e, t) {
        if (e.d !== t) for (; e.d !== t;) {
          if (e.d < t) switch (e.d) {
            case 0:
              Z(e, 100151), e.u(null);
              break;

            case 1:
              Z(e, 100152), e.t();
          } else switch (e.d) {
            case 2:
              Z(e, 100154), e.v();
              break;

            case 1:
              Z(e, 100153), e.w();
          }
        }
      }

      function Z(e, t) {
        e.p && e.p(t, e.c);
      }

      function K(e, t) {
        this.b = e || this, this.d = t || this, this.a = null, this.c = !1;
      }

      function Q() {
        (this.h = this).i = this.d = this.a = this.e = this.c = this.b = null, this.f = 0;
      }

      function J(e) {
        return e.b.e;
      }

      function $() {
        this.c = new ee(), this.a = new K(), this.b = new Q(), this.d = new Q(), this.b.b = this.d, this.d.b = this.b;
      }

      function ee(e, t) {
        this.e = e || this, this.f = t || this, this.d = this.c = null, this.g = [0, 0, 0], this.h = this.a = this.b = 0;
      }

      function te() {
        this.c = [], this.d = null, this.a = 0, this.e = !1, this.b = new ie();
      }

      function re(e, t) {
        if (e.e) {
          var r,
              n = e.b,
              i = ++n.a;
          return 2 * i > n.f && (n.f *= 2, n.c = ae(n.c, n.f + 1)), 0 === n.b ? r = i : (r = n.b, n.b = n.c[n.b]), n.e[r] = t, n.c[r] = i, n.d[i] = r, n.h && ue(n, i), r;
        }

        return n = e.a++, e.c[n] = t, -(n + 1);
      }

      function ne(e) {
        if (0 === e.a) return se(e.b);
        var t = e.c[e.d[e.a - 1]];
        if (0 !== e.b.a && v(oe(e.b), t)) return se(e.b);

        for (; --e.a, 0 < e.a && null === e.c[e.d[e.a - 1]];) {
          ;
        }

        return t;
      }

      function ie() {
        this.d = ae([0], 33), this.e = [null, null], this.c = [0, 0], this.a = 0, this.f = 32, this.b = 0, this.h = !1, this.d[1] = 1;
      }

      function ae(e, t) {
        for (var r = Array(t), n = 0; n < e.length; n++) {
          r[n] = e[n];
        }

        for (; n < t; n++) {
          r[n] = 0;
        }

        return r;
      }

      function oe(e) {
        return e.e[e.d[1]];
      }

      function se(e) {
        var t = e.d,
            r = e.e,
            n = e.c,
            i = t[1],
            a = r[i];
        return 0 < e.a && (t[1] = t[e.a], n[t[1]] = 1, r[i] = null, n[i] = e.b, e.b = i, 0 < --e.a && le(e, 1)), a;
      }

      function le(e, t) {
        for (var r = e.d, n = e.e, i = e.c, a = t, o = r[a];;) {
          var s = a << 1;
          s < e.a && v(n[r[s + 1]], n[r[s]]) && (s += 1);
          var l = r[s];

          if (s > e.a || v(n[o], n[l])) {
            i[r[a] = o] = a;
            break;
          }

          i[r[a] = l] = a, a = s;
        }
      }

      function ue(e, t) {
        for (var r = e.d, n = e.e, i = e.c, a = t, o = r[a];;) {
          var s = a >> 1,
              l = r[s];

          if (0 == s || v(n[l], n[o])) {
            i[r[a] = o] = a;
            break;
          }

          i[r[a] = l] = a, a = s;
        }
      }

      function he() {
        this.e = this.a = null, this.f = 0, this.c = this.b = this.h = this.d = !1;
      }

      function fe(e) {
        return e.e.c.b;
      }

      function ce(e) {
        return e.e.a.b;
      }

      (n = X.prototype).x = function () {
        Y(this, 0);
      }, n.B = function (e, t) {
        switch (e) {
          case 100142:
            return;

          case 100140:
            switch (t) {
              case 100130:
              case 100131:
              case 100132:
              case 100133:
              case 100134:
                return void (this.s = t);
            }

            break;

          case 100141:
            return void (this.m = !!t);

          default:
            return void Z(this, 100900);
        }

        Z(this, 100901);
      }, n.y = function (e) {
        switch (e) {
          case 100142:
            return 0;

          case 100140:
            return this.s;

          case 100141:
            return this.m;

          default:
            Z(this, 100900);
        }

        return !1;
      }, n.A = function (e, t, r) {
        this.j[0] = e, this.j[1] = t, this.j[2] = r;
      }, n.z = function (e, t) {
        var r = t || null;

        switch (e) {
          case 100100:
          case 100106:
            this.h = r;
            break;

          case 100104:
          case 100110:
            this.l = r;
            break;

          case 100101:
          case 100107:
            this.k = r;
            break;

          case 100102:
          case 100108:
            this.i = r;
            break;

          case 100103:
          case 100109:
            this.p = r;
            break;

          case 100105:
          case 100111:
            this.o = r;
            break;

          case 100112:
            this.r = r;
            break;

          default:
            Z(this, 100900);
        }
      }, n.C = function (e, t) {
        var r = !1,
            n = [0, 0, 0];
        Y(this, 2);

        for (var i = 0; i < 3; ++i) {
          var a = e[i];
          a < -1e150 && (a = -1e150, r = !0), 1e150 < a && (a = 1e150, r = !0), n[i] = a;
        }

        r && Z(this, 100155), null === (r = this.q) ? T(r = o(this.b), r.b) : (E(r), r = r.e), r.a.d = t, r.a.g[0] = n[0], r.a.g[1] = n[1], r.a.g[2] = n[2], r.f = 1, r.b.f = -1, this.q = r;
      }, n.u = function (e) {
        Y(this, 0), this.d = 1, this.b = new $(), this.c = e;
      }, n.t = function () {
        Y(this, 1), this.d = 2, this.q = null;
      }, n.v = function () {
        Y(this, 2), this.d = 1;
      }, n.w = function () {
        Y(this, 1), this.d = 0;
        var e,
            t,
            r = !1,
            n = [l = this.j[0], i = this.j[1], o = this.j[2]];

        if (0 === l && 0 === i && 0 === o) {
          for (var i = [-2e150, -2e150, -2e150], a = [2e150, 2e150, 2e150], o = [], s = [], l = (r = this.b.c).e; l !== r; l = l.e) {
            for (var u = 0; u < 3; ++u) {
              var h = l.g[u];
              h < a[u] && (a[u] = h, s[u] = l), h > i[u] && (i[u] = h, o[u] = l);
            }
          }

          if (l = 0, i[1] - a[1] > i[0] - a[0] && (l = 1), i[2] - a[2] > i[l] - a[l] && (l = 2), a[l] >= i[l]) n[0] = 0, n[1] = 0, n[2] = 1;else {
            for (i = 0, a = s[l], o = o[l], s = [0, 0, 0], a = [a.g[0] - o.g[0], a.g[1] - o.g[1], a.g[2] - o.g[2]], u = [0, 0, 0], l = r.e; l !== r; l = l.e) {
              u[0] = l.g[0] - o.g[0], u[1] = l.g[1] - o.g[1], u[2] = l.g[2] - o.g[2], s[0] = a[1] * u[2] - a[2] * u[1], s[1] = a[2] * u[0] - a[0] * u[2], s[2] = a[0] * u[1] - a[1] * u[0], i < (h = s[0] * s[0] + s[1] * s[1] + s[2] * s[2]) && (i = h, n[0] = s[0], n[1] = s[1], n[2] = s[2]);
            }

            i <= 0 && (n[0] = n[1] = n[2] = 0, n[C(a)] = 1);
          }
          r = !0;
        }

        for (s = C(n), l = this.b.c, i = (s + 1) % 3, o = (s + 2) % 3, s = 0 < n[s] ? 1 : -1, n = l.e; n !== l; n = n.e) {
          n.b = n.g[i], n.a = s * n.g[o];
        }

        if (r) {
          for (n = 0, l = (r = this.b.a).b; l !== r; l = l.b) {
            if (!((i = l.a).f <= 0)) for (; n += (i.a.b - i.b.a.b) * (i.a.a + i.b.a.a), (i = i.e) !== l.a;) {
              ;
            }
          }

          if (n < 0) for (r = (n = this.b.c).e; r !== n; r = r.e) {
            r.a = -r.a;
          }
        }

        for (this.n = !1, l = (n = this.b.b).h; l !== n; l = r) {
          r = l.h, i = l.e, m(l.a, l.b.a) && l.e.e !== l && (N(this, i, l), f(l), i = (l = i).e), i.e === l && (i !== l && (i !== r && i !== r.b || (r = r.h), f(i)), l !== r && l !== r.b || (r = r.h), f(l));
        }

        for (this.e = n = new te(), l = (r = this.b.c).e; l !== r; l = l.e) {
          l.h = re(n, l);
        }

        for (!function (e) {
          e.d = [];

          for (var t = 0; t < e.a; t++) {
            e.d[t] = t;
          }

          e.d.sort(function (r) {
            return function (e, t) {
              return v(r[e], r[t]) ? 1 : -1;
            };
          }(e.c)), e.e = !0, function (e) {
            for (var t = e.a; 1 <= t; --t) {
              le(e, t);
            }

            e.h = !0;
          }(e.b);
        }(n), this.f = new H(this), V(this, -L), V(this, L); null !== (n = ne(this.e));) {
          for (;;) {
            e: if (l = this.e, 0 === l.a) r = oe(l.b);else if (r = l.c[l.d[l.a - 1]], 0 !== l.b.a && (l = oe(l.b), v(l, r))) {
              r = l;
              break e;
            }

            if (null === r || !m(r, n)) break;
            r = ne(this.e), N(this, n.c, r.c);
          }

          z(this, n);
        }

        for (this.a = this.f.a.a.b.a.a, n = 0; null !== (r = this.f.a.a.b);) {
          r.h || ++n, P(r);
        }

        for (this.f = null, (n = this.e).b = null, n.d = null, this.e = n.c = null, l = (n = this.b).a.b; l !== n.a; l = r) {
          r = l.b, (l = l.a).e.e === l && (M(l.c, l), f(l));
        }

        if (!this.n) {
          if (n = this.b, this.m) for (l = n.b.h; l !== n.b; l = r) {
            r = l.h, l.b.d.c !== l.d.c ? l.f = l.d.c ? 1 : -1 : f(l);
          } else for (l = n.a.b; l !== n.a; l = r) {
            if (r = l.b, l.c) {
              for (l = l.a; v(l.b.a, l.a); l = l.c.b) {
                ;
              }

              for (; v(l.a, l.b.a); l = l.e) {
                ;
              }

              for (i = l.c.b, o = void 0; l.e !== i;) {
                if (v(l.b.a, i.a)) {
                  for (; i.e !== l && (v((t = i.e).b.a, t.a) || b(i.a, i.b.a, i.e.b.a) <= 0);) {
                    i = (o = c(i.e, i)).b;
                  }

                  i = i.c.b;
                } else {
                  for (; i.e !== l && (v((e = l.c.b).a, e.b.a) || 0 <= b(l.b.a, l.a, l.c.b.a));) {
                    l = (o = c(l, l.c.b)).b;
                  }

                  l = l.e;
                }
              }

              for (; i.e.e !== l;) {
                i = (o = c(i.e, i)).b;
              }
            }
          }
          if (this.h || this.i || this.k || this.l) if (this.m) {
            for (r = (n = this.b).a.b; r !== n.a; r = r.b) {
              if (r.c) {
                for (this.h && this.h(2, this.c), l = r.a; this.k && this.k(l.a.d, this.c), (l = l.e) !== r.a;) {
                  ;
                }

                this.i && this.i(this.c);
              }
            }
          } else {
            for (n = this.b, r = !!this.l, l = !1, i = -1, o = n.a.d; o !== n.a; o = o.d) {
              if (o.c) for (l || (this.h && this.h(4, this.c), l = !0), s = o.a; r && i !== (a = s.b.d.c ? 0 : 1) && (i = a, this.l && this.l(!!i, this.c)), this.k && this.k(s.a.d, this.c), (s = s.e) !== o.a;) {
                ;
              }
            }

            l && this.i && this.i(this.c);
          }

          if (this.r) {
            for (l = (n = this.b).a.b; l !== n.a; l = r) {
              if (r = l.b, !l.c) {
                for (o = (i = l.a).e, s = void 0; o = (s = o).e, (s.d = null) === s.b.d && (s.c === s ? g(s.a, null) : (s.a.c = s.c, p(s, J(s))), (a = s.b).c === a ? g(a.a, null) : (a.a.c = a.c, p(a, J(a))), d(s)), s !== i;) {
                  ;
                }

                i = l.d, ((l = l.b).d = i).b = l;
              }
            }

            return this.r(this.b), void (this.c = this.b = null);
          }
        }

        this.b = this.c = null;
      }, this.libtess = {
        GluTesselator: X,
        windingRule: {
          GLU_TESS_WINDING_ODD: 100130,
          GLU_TESS_WINDING_NONZERO: 100131,
          GLU_TESS_WINDING_POSITIVE: 100132,
          GLU_TESS_WINDING_NEGATIVE: 100133,
          GLU_TESS_WINDING_ABS_GEQ_TWO: 100134
        },
        primitiveType: {
          GL_LINE_LOOP: 2,
          GL_TRIANGLES: 4,
          GL_TRIANGLE_STRIP: 5,
          GL_TRIANGLE_FAN: 6
        },
        errorType: {
          GLU_TESS_MISSING_BEGIN_POLYGON: 100151,
          GLU_TESS_MISSING_END_POLYGON: 100153,
          GLU_TESS_MISSING_BEGIN_CONTOUR: 100152,
          GLU_TESS_MISSING_END_CONTOUR: 100154,
          GLU_TESS_COORD_TOO_LARGE: 100155,
          GLU_TESS_NEED_COMBINE_CALLBACK: 100156
        },
        gluEnum: {
          GLU_TESS_MESH: 100112,
          GLU_TESS_TOLERANCE: 100142,
          GLU_TESS_WINDING_RULE: 100140,
          GLU_TESS_BOUNDARY_ONLY: 100141,
          GLU_INVALID_ENUM: 100900,
          GLU_INVALID_VALUE: 100901,
          GLU_TESS_BEGIN: 100100,
          GLU_TESS_VERTEX: 100101,
          GLU_TESS_END: 100102,
          GLU_TESS_ERROR: 100103,
          GLU_TESS_EDGE_FLAG: 100104,
          GLU_TESS_COMBINE: 100105,
          GLU_TESS_BEGIN_DATA: 100106,
          GLU_TESS_VERTEX_DATA: 100107,
          GLU_TESS_END_DATA: 100108,
          GLU_TESS_ERROR_DATA: 100109,
          GLU_TESS_EDGE_FLAG_DATA: 100110,
          GLU_TESS_COMBINE_DATA: 100111
        }
      }, X.prototype.gluDeleteTess = X.prototype.x, X.prototype.gluTessProperty = X.prototype.B, X.prototype.gluGetTessProperty = X.prototype.y, X.prototype.gluTessNormal = X.prototype.A, X.prototype.gluTessCallback = X.prototype.z, X.prototype.gluTessVertex = X.prototype.C, X.prototype.gluTessBeginPolygon = X.prototype.u, X.prototype.gluTessBeginContour = X.prototype.t, X.prototype.gluTessEndContour = X.prototype.v, X.prototype.gluTessEndPolygon = X.prototype.w, void 0 !== t && (t.exports = this.libtess);
    }, {}],
    28: [function (e, t, r) {
      "use strict";

      function M(e, t, r, n) {
        for (var i = e[t++], a = 1 << i, o = 1 + a, s = 1 + o, l = i + 1, u = (1 << l) - 1, h = 0, f = 0, c = 0, p = e[t++], d = new Int32Array(4096), g = null;;) {
          for (; h < 16 && 0 !== p;) {
            f |= e[t++] << h, h += 8, 1 === p ? p = e[t++] : --p;
          }

          if (h < l) break;
          var m = f & u;

          if (f >>= l, h -= l, m != a) {
            if (m == o) break;

            for (var v = m < s ? m : g, y = 0, b = v; a < b;) {
              b = d[b] >> 8, ++y;
            }

            var _ = b;
            if (n < c + y + (v !== m ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
            r[c++] = _;
            var x = c += y;

            for (v !== m && (r[c++] = _), b = v; y--;) {
              b = d[b], r[--x] = 255 & b, b >>= 8;
            }

            null !== g && s < 4096 && (d[s++] = g << 8 | _, u + 1 <= s && l < 12 && (++l, u = u << 1 | 1)), g = m;
          } else s = 1 + o, u = (1 << (l = i + 1)) - 1, g = null;
        }

        return c !== n && console.log("Warning, gif stream shorter than expected."), r;
      }

      try {
        r.GifWriter = function (v, e, t, r) {
          var y = 0,
              n = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop,
              b = void 0 === r.palette ? null : r.palette;
          if (e <= 0 || t <= 0 || 65535 < e || 65535 < t) throw new Error("Width/Height invalid.");

          function _(e) {
            var t = e.length;
            if (t < 2 || 256 < t || t & t - 1) throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
            return t;
          }

          v[y++] = 71, v[y++] = 73, v[y++] = 70, v[y++] = 56, v[y++] = 57, v[y++] = 97;
          var i = 0,
              a = 0;

          if (null !== b) {
            for (var o = _(b); o >>= 1;) {
              ++i;
            }

            if (o = 1 << i, --i, void 0 !== r.background) {
              if (o <= (a = r.background)) throw new Error("Background index out of range.");
              if (0 === a) throw new Error("Background index explicitly passed as 0.");
            }
          }

          if (v[y++] = 255 & e, v[y++] = e >> 8 & 255, v[y++] = 255 & t, v[y++] = t >> 8 & 255, v[y++] = (null !== b ? 128 : 0) | i, v[y++] = a, v[y++] = 0, null !== b) for (var s = 0, l = b.length; s < l; ++s) {
            var u = b[s];
            v[y++] = u >> 16 & 255, v[y++] = u >> 8 & 255, v[y++] = 255 & u;
          }

          if (null !== n) {
            if (n < 0 || 65535 < n) throw new Error("Loop count invalid.");
            v[y++] = 33, v[y++] = 255, v[y++] = 11, v[y++] = 78, v[y++] = 69, v[y++] = 84, v[y++] = 83, v[y++] = 67, v[y++] = 65, v[y++] = 80, v[y++] = 69, v[y++] = 50, v[y++] = 46, v[y++] = 48, v[y++] = 3, v[y++] = 1, v[y++] = 255 & n, v[y++] = n >> 8 & 255, v[y++] = 0;
          }

          var x = !1;
          this.addFrame = function (e, t, r, n, i, a) {
            if (!0 === x && (--y, x = !1), a = void 0 === a ? {} : a, e < 0 || t < 0 || 65535 < e || 65535 < t) throw new Error("x/y invalid.");
            if (r <= 0 || n <= 0 || 65535 < r || 65535 < n) throw new Error("Width/Height invalid.");
            if (i.length < r * n) throw new Error("Not enough pixels for the frame size.");
            var o = !0,
                s = a.palette;
            if (null == s && (o = !1, s = b), null == s) throw new Error("Must supply either a local or global palette.");

            for (var l = _(s), u = 0; l >>= 1;) {
              ++u;
            }

            l = 1 << u;
            var h = void 0 === a.delay ? 0 : a.delay,
                f = void 0 === a.disposal ? 0 : a.disposal;
            if (f < 0 || 3 < f) throw new Error("Disposal out of range.");
            var c = !1,
                p = 0;
            if (void 0 !== a.transparent && null !== a.transparent && (c = !0, (p = a.transparent) < 0 || l <= p)) throw new Error("Transparent color index.");
            if (0 === f && !c && 0 === h || (v[y++] = 33, v[y++] = 249, v[y++] = 4, v[y++] = f << 2 | (!0 === c ? 1 : 0), v[y++] = 255 & h, v[y++] = h >> 8 & 255, v[y++] = p, v[y++] = 0), v[y++] = 44, v[y++] = 255 & e, v[y++] = e >> 8 & 255, v[y++] = 255 & t, v[y++] = t >> 8 & 255, v[y++] = 255 & r, v[y++] = r >> 8 & 255, v[y++] = 255 & n, v[y++] = n >> 8 & 255, v[y++] = !0 === o ? 128 | u - 1 : 0, !0 === o) for (var d = 0, g = s.length; d < g; ++d) {
              var m = s[d];
              v[y++] = m >> 16 & 255, v[y++] = m >> 8 & 255, v[y++] = 255 & m;
            }
            return y = function (t, r, e, n) {
              t[r++] = e;
              var i = r++,
                  a = 1 << e,
                  o = a - 1,
                  s = 1 + a,
                  l = 1 + s,
                  u = e + 1,
                  h = 0,
                  f = 0;

              function c(e) {
                for (; e <= h;) {
                  t[r++] = 255 & f, f >>= 8, h -= 8, r === i + 256 && (t[i] = 255, i = r++);
                }
              }

              function p(e) {
                f |= e << h, h += u, c(8);
              }

              var d = n[0] & o,
                  g = {};
              p(a);

              for (var m = 1, v = n.length; m < v; ++m) {
                var y = n[m] & o,
                    b = d << 8 | y,
                    _ = g[b];

                if (void 0 === _) {
                  for (f |= d << h, h += u; 8 <= h;) {
                    t[r++] = 255 & f, f >>= 8, h -= 8, r === i + 256 && (t[i] = 255, i = r++);
                  }

                  4096 === l ? (p(a), l = 1 + s, u = e + 1, g = {}) : (1 << u <= l && ++u, g[b] = l++), d = y;
                } else d = _;
              }

              p(d), p(s), c(1), i + 1 === r ? t[i] = 0 : (t[i] = r - i - 1, t[r++] = 0);
              return r;
            }(v, y, u < 2 ? 2 : u, i);
          }, this.end = function () {
            return !1 === x && (v[y++] = 59, x = !0), y;
          }, this.getOutputBuffer = function () {
            return v;
          }, this.setOutputBuffer = function (e) {
            v = e;
          }, this.getOutputBufferPosition = function () {
            return y;
          }, this.setOutputBufferPosition = function (e) {
            y = e;
          };
        }, r.GifReader = function (x) {
          var e = 0;
          if (71 !== x[e++] || 73 !== x[e++] || 70 !== x[e++] || 56 !== x[e++] || 56 != (x[e++] + 1 & 253) || 97 !== x[e++]) throw new Error("Invalid GIF 87a/89a header.");
          var S = x[e++] | x[e++] << 8,
              t = x[e++] | x[e++] << 8,
              r = x[e++],
              n = r >> 7,
              i = 1 << 1 + (7 & r);
          x[e++], x[e++];
          var a = null,
              o = null;
          n && (a = e, e += 3 * (o = i));
          var s = !0,
              l = [],
              u = 0,
              h = null,
              f = 0,
              c = null;

          for (this.width = S, this.height = t; s && e < x.length;) {
            switch (x[e++]) {
              case 33:
                switch (x[e++]) {
                  case 255:
                    if (11 !== x[e] || 78 == x[e + 1] && 69 == x[e + 2] && 84 == x[e + 3] && 83 == x[e + 4] && 67 == x[e + 5] && 65 == x[e + 6] && 80 == x[e + 7] && 69 == x[e + 8] && 50 == x[e + 9] && 46 == x[e + 10] && 48 == x[e + 11] && 3 == x[e + 12] && 1 == x[e + 13] && 0 == x[e + 16]) e += 14, c = x[e++] | x[e++] << 8, e++;else for (e += 12;;) {
                      if (!(0 <= (L = x[e++]))) throw Error("Invalid block size");
                      if (0 === L) break;
                      e += L;
                    }
                    break;

                  case 249:
                    if (4 !== x[e++] || 0 !== x[e + 4]) throw new Error("Invalid graphics extension block.");
                    var p = x[e++];
                    u = x[e++] | x[e++] << 8, h = x[e++], 0 == (1 & p) && (h = null), f = p >> 2 & 7, e++;
                    break;

                  case 254:
                    for (;;) {
                      if (!(0 <= (L = x[e++]))) throw Error("Invalid block size");
                      if (0 === L) break;
                      e += L;
                    }

                    break;

                  default:
                    throw new Error("Unknown graphic control label: 0x" + x[e - 1].toString(16));
                }

                break;

              case 44:
                var d = x[e++] | x[e++] << 8,
                    g = x[e++] | x[e++] << 8,
                    m = x[e++] | x[e++] << 8,
                    v = x[e++] | x[e++] << 8,
                    y = x[e++],
                    b = y >> 6 & 1,
                    _ = 1 << 1 + (7 & y),
                    w = a,
                    T = o,
                    E = !1;

                if (y >> 7) {
                  E = !0;
                  w = e, e += 3 * (T = _);
                }

                var C = e;

                for (e++;;) {
                  var L;
                  if (!(0 <= (L = x[e++]))) throw Error("Invalid block size");
                  if (0 === L) break;
                  e += L;
                }

                l.push({
                  x: d,
                  y: g,
                  width: m,
                  height: v,
                  has_local_palette: E,
                  palette_offset: w,
                  palette_size: T,
                  data_offset: C,
                  data_length: e - C,
                  transparent_index: h,
                  interlaced: !!b,
                  delay: u,
                  disposal: f
                });
                break;

              case 59:
                s = !1;
                break;

              default:
                throw new Error("Unknown gif block: 0x" + x[e - 1].toString(16));
            }
          }

          this.numFrames = function () {
            return l.length;
          }, this.loopCount = function () {
            return c;
          }, this.frameInfo = function (e) {
            if (e < 0 || e >= l.length) throw new Error("Frame index out of range.");
            return l[e];
          }, this.decodeAndBlitFrameBGRA = function (e, t) {
            var r = this.frameInfo(e),
                n = r.width * r.height,
                i = new Uint8Array(n);
            M(x, r.data_offset, i, n);
            var a = r.palette_offset,
                o = r.transparent_index;
            null === o && (o = 256);
            var s = r.width,
                l = S - s,
                u = s,
                h = 4 * (r.y * S + r.x),
                f = 4 * ((r.y + r.height) * S + r.x),
                c = h,
                p = 4 * l;
            !0 === r.interlaced && (p += 4 * S * 7);

            for (var d = 8, g = 0, m = i.length; g < m; ++g) {
              var v = i[g];
              if (0 === u && (u = s, f <= (c += p) && (p = 4 * l + 4 * S * (d - 1), c = h + (s + l) * (d << 1), d >>= 1)), v === o) c += 4;else {
                var y = x[a + 3 * v],
                    b = x[a + 3 * v + 1],
                    _ = x[a + 3 * v + 2];
                t[c++] = _, t[c++] = b, t[c++] = y, t[c++] = 255;
              }
              --u;
            }
          }, this.decodeAndBlitFrameRGBA = function (e, t) {
            var r = this.frameInfo(e),
                n = r.width * r.height,
                i = new Uint8Array(n);
            M(x, r.data_offset, i, n);
            var a = r.palette_offset,
                o = r.transparent_index;
            null === o && (o = 256);
            var s = r.width,
                l = S - s,
                u = s,
                h = 4 * (r.y * S + r.x),
                f = 4 * ((r.y + r.height) * S + r.x),
                c = h,
                p = 4 * l;
            !0 === r.interlaced && (p += 4 * S * 7);

            for (var d = 8, g = 0, m = i.length; g < m; ++g) {
              var v = i[g];
              if (0 === u && (u = s, f <= (c += p) && (p = 4 * l + 4 * S * (d - 1), c = h + (s + l) * (d << 1), d >>= 1)), v === o) c += 4;else {
                var y = x[a + 3 * v],
                    b = x[a + 3 * v + 1],
                    _ = x[a + 3 * v + 2];
                t[c++] = y, t[c++] = b, t[c++] = _, t[c++] = 255;
              }
              --u;
            }
          };
        };
      } catch (e) {}
    }, {}],
    29: [function (jr, t, r) {
      (function (Br) {
        var e;
        e = this, function (E) {
          "use strict";

          function e(e) {
            if (null == this) throw TypeError();
            var t = String(this),
                r = t.length,
                n = e ? Number(e) : 0;

            if (n != n && (n = 0), !(n < 0 || r <= n)) {
              var i,
                  a = t.charCodeAt(n);
              return 55296 <= a && a <= 56319 && n + 1 < r && 56320 <= (i = t.charCodeAt(n + 1)) && i <= 57343 ? 1024 * (a - 55296) + i - 56320 + 65536 : a;
            }
          }

          var t;
          String.prototype.codePointAt || ((t = function () {
            try {
              var e = {},
                  t = Object.defineProperty,
                  r = t(e, e, e) && t;
            } catch (e) {}

            return r;
          }()) ? t(String.prototype, "codePointAt", {
            value: e,
            configurable: !0,
            writable: !0
          }) : String.prototype.codePointAt = e);
          var l = 0,
              a = -3;

          function r() {
            this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
          }

          function o(e, t) {
            this.source = e, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new r(), this.dtree = new r();
          }

          var s = new r(),
              u = new r(),
              h = new Uint8Array(30),
              f = new Uint16Array(30),
              c = new Uint8Array(30),
              p = new Uint16Array(30),
              d = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              g = new r(),
              m = new Uint8Array(320);

          function n(e, t, r, n) {
            var i, a;

            for (i = 0; i < r; ++i) {
              e[i] = 0;
            }

            for (i = 0; i < 30 - r; ++i) {
              e[i + r] = i / r | 0;
            }

            for (a = n, i = 0; i < 30; ++i) {
              t[i] = a, a += 1 << e[i];
            }
          }

          var v = new Uint16Array(16);

          function y(e, t, r, n) {
            var i, a;

            for (i = 0; i < 16; ++i) {
              e.table[i] = 0;
            }

            for (i = 0; i < n; ++i) {
              e.table[t[r + i]]++;
            }

            for (i = a = e.table[0] = 0; i < 16; ++i) {
              v[i] = a, a += e.table[i];
            }

            for (i = 0; i < n; ++i) {
              t[r + i] && (e.trans[v[t[r + i]]++] = i);
            }
          }

          function b(e) {
            e.bitcount-- || (e.tag = e.source[e.sourceIndex++], e.bitcount = 7);
            var t = 1 & e.tag;
            return e.tag >>>= 1, t;
          }

          function _(e, t, r) {
            if (!t) return r;

            for (; e.bitcount < 24;) {
              e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
            }

            var n = e.tag & 65535 >>> 16 - t;
            return e.tag >>>= t, e.bitcount -= t, n + r;
          }

          function x(e, t) {
            for (; e.bitcount < 24;) {
              e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
            }

            for (var r = 0, n = 0, i = 0, a = e.tag; n = 2 * n + (1 & a), a >>>= 1, ++i, r += t.table[i], 0 <= (n -= t.table[i]);) {
              ;
            }

            return e.tag = a, e.bitcount -= i, t.trans[r + n];
          }

          function S(e, t, r) {
            var n, i, a, o, s, l;

            for (n = _(e, 5, 257), i = _(e, 5, 1), a = _(e, 4, 4), o = 0; o < 19; ++o) {
              m[o] = 0;
            }

            for (o = 0; o < a; ++o) {
              var u = _(e, 3, 0);

              m[d[o]] = u;
            }

            for (y(g, m, 0, 19), s = 0; s < n + i;) {
              var h = x(e, g);

              switch (h) {
                case 16:
                  var f = m[s - 1];

                  for (l = _(e, 2, 3); l; --l) {
                    m[s++] = f;
                  }

                  break;

                case 17:
                  for (l = _(e, 3, 3); l; --l) {
                    m[s++] = 0;
                  }

                  break;

                case 18:
                  for (l = _(e, 7, 11); l; --l) {
                    m[s++] = 0;
                  }

                  break;

                default:
                  m[s++] = h;
              }
            }

            y(t, m, 0, n), y(r, m, n, i);
          }

          function w(e, t, r) {
            for (;;) {
              var n,
                  i,
                  a,
                  o,
                  s = x(e, t);
              if (256 === s) return l;
              if (s < 256) e.dest[e.destLen++] = s;else for (n = _(e, h[s -= 257], f[s]), i = x(e, r), o = a = e.destLen - _(e, c[i], p[i]); o < a + n; ++o) {
                e.dest[e.destLen++] = e.dest[o];
              }
            }
          }

          function T(e) {
            for (var t, r; 8 < e.bitcount;) {
              e.sourceIndex--, e.bitcount -= 8;
            }

            if ((t = 256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !== (65535 & ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))) return a;

            for (e.sourceIndex += 4, r = t; r; --r) {
              e.dest[e.destLen++] = e.source[e.sourceIndex++];
            }

            return e.bitcount = 0, l;
          }

          !function (e, t) {
            var r;

            for (r = 0; r < 7; ++r) {
              e.table[r] = 0;
            }

            for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0; r < 24; ++r) {
              e.trans[r] = 256 + r;
            }

            for (r = 0; r < 144; ++r) {
              e.trans[24 + r] = r;
            }

            for (r = 0; r < 8; ++r) {
              e.trans[168 + r] = 280 + r;
            }

            for (r = 0; r < 112; ++r) {
              e.trans[176 + r] = 144 + r;
            }

            for (r = 0; r < 5; ++r) {
              t.table[r] = 0;
            }

            for (t.table[5] = 32, r = 0; r < 32; ++r) {
              t.trans[r] = r;
            }
          }(s, u), n(h, f, 4, 3), n(c, p, 2, 1), h[28] = 0, f[28] = 258;

          var i = function i(e, t) {
            var r,
                n,
                i = new o(e, t);

            do {
              switch (r = b(i), _(i, 2, 0)) {
                case 0:
                  n = T(i);
                  break;

                case 1:
                  n = w(i, s, u);
                  break;

                case 2:
                  S(i, i.ltree, i.dtree), n = w(i, i.ltree, i.dtree);
                  break;

                default:
                  n = a;
              }

              if (n !== l) throw new Error("Data error");
            } while (!r);

            return i.destLen < i.dest.length ? "function" == typeof i.dest.slice ? i.dest.slice(0, i.destLen) : i.dest.subarray(0, i.destLen) : i.dest;
          };

          function C(e, t, r, n, i) {
            return Math.pow(1 - i, 3) * e + 3 * Math.pow(1 - i, 2) * i * t + 3 * (1 - i) * Math.pow(i, 2) * r + Math.pow(i, 3) * n;
          }

          function L() {
            this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
          }

          function I() {
            this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
          }

          function M(e) {
            throw new Error(e);
          }

          function P(e, t) {
            e || M(t);
          }

          L.prototype.isEmpty = function () {
            return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
          }, L.prototype.addPoint = function (e, t) {
            "number" == typeof e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), "number" == typeof t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
          }, L.prototype.addX = function (e) {
            this.addPoint(e, null);
          }, L.prototype.addY = function (e) {
            this.addPoint(null, e);
          }, L.prototype.addBezier = function (e, t, r, n, i, a, o, s) {
            var l = this,
                u = [e, t],
                h = [r, n],
                f = [i, a],
                c = [o, s];
            this.addPoint(e, t), this.addPoint(o, s);

            for (var p = 0; p <= 1; p++) {
              var d = 6 * u[p] - 12 * h[p] + 6 * f[p],
                  g = -3 * u[p] + 9 * h[p] - 9 * f[p] + 3 * c[p],
                  m = 3 * h[p] - 3 * u[p];

              if (0 != g) {
                var v = Math.pow(d, 2) - 4 * m * g;

                if (!(v < 0)) {
                  var y = (-d + Math.sqrt(v)) / (2 * g);
                  0 < y && y < 1 && (0 === p && l.addX(C(u[p], h[p], f[p], c[p], y)), 1 === p && l.addY(C(u[p], h[p], f[p], c[p], y)));
                  var b = (-d - Math.sqrt(v)) / (2 * g);
                  0 < b && b < 1 && (0 === p && l.addX(C(u[p], h[p], f[p], c[p], b)), 1 === p && l.addY(C(u[p], h[p], f[p], c[p], b)));
                }
              } else {
                if (0 == d) continue;

                var _ = -m / d;

                0 < _ && _ < 1 && (0 === p && l.addX(C(u[p], h[p], f[p], c[p], _)), 1 === p && l.addY(C(u[p], h[p], f[p], c[p], _)));
              }
            }
          }, L.prototype.addQuad = function (e, t, r, n, i, a) {
            var o = e + 2 / 3 * (r - e),
                s = t + 2 / 3 * (n - t),
                l = o + 1 / 3 * (i - e),
                u = s + 1 / 3 * (a - t);
            this.addBezier(e, t, o, s, l, u, i, a);
          }, I.prototype.moveTo = function (e, t) {
            this.commands.push({
              type: "M",
              x: e,
              y: t
            });
          }, I.prototype.lineTo = function (e, t) {
            this.commands.push({
              type: "L",
              x: e,
              y: t
            });
          }, I.prototype.curveTo = I.prototype.bezierCurveTo = function (e, t, r, n, i, a) {
            this.commands.push({
              type: "C",
              x1: e,
              y1: t,
              x2: r,
              y2: n,
              x: i,
              y: a
            });
          }, I.prototype.quadTo = I.prototype.quadraticCurveTo = function (e, t, r, n) {
            this.commands.push({
              type: "Q",
              x1: e,
              y1: t,
              x: r,
              y: n
            });
          }, I.prototype.close = I.prototype.closePath = function () {
            this.commands.push({
              type: "Z"
            });
          }, I.prototype.extend = function (e) {
            if (e.commands) e = e.commands;else if (e instanceof L) {
              var t = e;
              return this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), void this.close();
            }
            Array.prototype.push.apply(this.commands, e);
          }, I.prototype.getBoundingBox = function () {
            for (var e = new L(), t = 0, r = 0, n = 0, i = 0, a = 0; a < this.commands.length; a++) {
              var o = this.commands[a];

              switch (o.type) {
                case "M":
                  e.addPoint(o.x, o.y), t = n = o.x, r = i = o.y;
                  break;

                case "L":
                  e.addPoint(o.x, o.y), n = o.x, i = o.y;
                  break;

                case "Q":
                  e.addQuad(n, i, o.x1, o.y1, o.x, o.y), n = o.x, i = o.y;
                  break;

                case "C":
                  e.addBezier(n, i, o.x1, o.y1, o.x2, o.y2, o.x, o.y), n = o.x, i = o.y;
                  break;

                case "Z":
                  n = t, i = r;
                  break;

                default:
                  throw new Error("Unexpected path command " + o.type);
              }
            }

            return e.isEmpty() && e.addPoint(0, 0), e;
          }, I.prototype.draw = function (e) {
            e.beginPath();

            for (var t = 0; t < this.commands.length; t += 1) {
              var r = this.commands[t];
              "M" === r.type ? e.moveTo(r.x, r.y) : "L" === r.type ? e.lineTo(r.x, r.y) : "C" === r.type ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y) : "Q" === r.type ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y) : "Z" === r.type && e.closePath();
            }

            this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke());
          }, I.prototype.toPathData = function (a) {
            function e() {
              for (var e, t = arguments, r = "", n = 0; n < arguments.length; n += 1) {
                var i = t[n];
                0 <= i && 0 < n && (r += " "), r += (e = i, Math.round(e) === e ? "" + Math.round(e) : e.toFixed(a));
              }

              return r;
            }

            a = void 0 !== a ? a : 2;

            for (var t = "", r = 0; r < this.commands.length; r += 1) {
              var n = this.commands[r];
              "M" === n.type ? t += "M" + e(n.x, n.y) : "L" === n.type ? t += "L" + e(n.x, n.y) : "C" === n.type ? t += "C" + e(n.x1, n.y1, n.x2, n.y2, n.x, n.y) : "Q" === n.type ? t += "Q" + e(n.x1, n.y1, n.x, n.y) : "Z" === n.type && (t += "Z");
            }

            return t;
          }, I.prototype.toSVG = function (e) {
            var t = '<path d="';
            return t += this.toPathData(e), t += '"', this.fill && "black" !== this.fill && (null === this.fill ? t += ' fill="none"' : t += ' fill="' + this.fill + '"'), this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), t += "/>";
          }, I.prototype.toDOMElement = function (e) {
            var t = this.toPathData(e),
                r = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return r.setAttribute("d", t), r;
          };
          var R = {
            fail: M,
            argument: P,
            assert: P
          },
              O = 2147483648,
              k = {},
              D = {},
              A = {};

          function U(e) {
            return function () {
              return e;
            };
          }

          D.BYTE = function (e) {
            return R.argument(0 <= e && e <= 255, "Byte value should be between 0 and 255."), [e];
          }, A.BYTE = U(1), D.CHAR = function (e) {
            return [e.charCodeAt(0)];
          }, A.CHAR = U(1), D.CHARARRAY = function (e) {
            for (var t = [], r = 0; r < e.length; r += 1) {
              t[r] = e.charCodeAt(r);
            }

            return t;
          }, A.CHARARRAY = function (e) {
            return e.length;
          }, D.USHORT = function (e) {
            return [e >> 8 & 255, 255 & e];
          }, A.USHORT = U(2), D.SHORT = function (e) {
            return 32768 <= e && (e = -(65536 - e)), [e >> 8 & 255, 255 & e];
          }, A.SHORT = U(2), D.UINT24 = function (e) {
            return [e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.UINT24 = U(3), D.ULONG = function (e) {
            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.ULONG = U(4), D.LONG = function (e) {
            return O <= e && (e = -(2 * O - e)), [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.LONG = U(4), D.FIXED = D.ULONG, A.FIXED = A.ULONG, D.FWORD = D.SHORT, A.FWORD = A.SHORT, D.UFWORD = D.USHORT, A.UFWORD = A.USHORT, D.LONGDATETIME = function (e) {
            return [0, 0, 0, 0, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.LONGDATETIME = U(8), D.TAG = function (e) {
            return R.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)];
          }, A.TAG = U(4), D.Card8 = D.BYTE, A.Card8 = A.BYTE, D.Card16 = D.USHORT, A.Card16 = A.USHORT, D.OffSize = D.BYTE, A.OffSize = A.BYTE, D.SID = D.USHORT, A.SID = A.USHORT, D.NUMBER = function (e) {
            return -107 <= e && e <= 107 ? [e + 139] : 108 <= e && e <= 1131 ? [247 + ((e -= 108) >> 8), 255 & e] : -1131 <= e && e <= -108 ? [251 + ((e = -e - 108) >> 8), 255 & e] : -32768 <= e && e <= 32767 ? D.NUMBER16(e) : D.NUMBER32(e);
          }, A.NUMBER = function (e) {
            return D.NUMBER(e).length;
          }, D.NUMBER16 = function (e) {
            return [28, e >> 8 & 255, 255 & e];
          }, A.NUMBER16 = U(3), D.NUMBER32 = function (e) {
            return [29, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.NUMBER32 = U(5), D.REAL = function (e) {
            var t = e.toString(),
                r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);

            if (r) {
              var n = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
              t = (Math.round(e * n) / n).toString();
            }

            for (var i = "", a = 0, o = t.length; a < o; a += 1) {
              var s = t[a];
              i += "e" === s ? "-" === t[++a] ? "c" : "b" : "." === s ? "a" : "-" === s ? "e" : s;
            }

            for (var l = [30], u = 0, h = (i += 1 & i.length ? "f" : "ff").length; u < h; u += 2) {
              l.push(parseInt(i.substr(u, 2), 16));
            }

            return l;
          }, A.REAL = function (e) {
            return D.REAL(e).length;
          }, D.NAME = D.CHARARRAY, A.NAME = A.CHARARRAY, D.STRING = D.CHARARRAY, A.STRING = A.CHARARRAY, k.UTF8 = function (e, t, r) {
            for (var n = [], i = r, a = 0; a < i; a++, t += 1) {
              n[a] = e.getUint8(t);
            }

            return String.fromCharCode.apply(null, n);
          }, k.UTF16 = function (e, t, r) {
            for (var n = [], i = r / 2, a = 0; a < i; a++, t += 2) {
              n[a] = e.getUint16(t);
            }

            return String.fromCharCode.apply(null, n);
          }, D.UTF16 = function (e) {
            for (var t = [], r = 0; r < e.length; r += 1) {
              var n = e.charCodeAt(r);
              t[t.length] = n >> 8 & 255, t[t.length] = 255 & n;
            }

            return t;
          }, A.UTF16 = function (e) {
            return 2 * e.length;
          };
          var N = {
            "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
            "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
            "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
            "x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
            "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
            "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
            macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
          };

          k.MACSTRING = function (e, t, r, n) {
            var i = N[n];

            if (void 0 !== i) {
              for (var a = "", o = 0; o < r; o++) {
                var s = e.getUint8(t + o);
                a += s <= 127 ? String.fromCharCode(s) : i[127 & s];
              }

              return a;
            }
          };

          var F,
              G = "function" == typeof WeakMap && new WeakMap();

          function B(e) {
            return -128 <= e && e <= 127;
          }

          function j(e, t, r) {
            for (var n = 0, i = e.length; t < i && n < 64 && 0 === e[t];) {
              ++t, ++n;
            }

            return r.push(128 | n - 1), t;
          }

          function z(e, t, r) {
            for (var n = 0, i = e.length, a = t; a < i && n < 64;) {
              var o = e[a];
              if (!B(o)) break;
              if (0 === o && a + 1 < i && 0 === e[a + 1]) break;
              ++a, ++n;
            }

            r.push(n - 1);

            for (var s = t; s < a; ++s) {
              r.push(e[s] + 256 & 255);
            }

            return a;
          }

          function V(e, t, r) {
            for (var n = 0, i = e.length, a = t; a < i && n < 64;) {
              var o = e[a];
              if (0 === o) break;
              if (B(o) && a + 1 < i && B(e[a + 1])) break;
              ++a, ++n;
            }

            r.push(64 | n - 1);

            for (var s = t; s < a; ++s) {
              var l = e[s];
              r.push(l + 65536 >> 8 & 255, l + 256 & 255);
            }

            return a;
          }

          D.MACSTRING = function (e, t) {
            var r = function (e) {
              if (!F) for (var t in F = {}, N) {
                F[t] = new String(t);
              }
              var r = F[e];

              if (void 0 !== r) {
                if (G) {
                  var n = G.get(r);
                  if (void 0 !== n) return n;
                }

                var i = N[e];

                if (void 0 !== i) {
                  for (var a = {}, o = 0; o < i.length; o++) {
                    a[i.charCodeAt(o)] = o + 128;
                  }

                  return G && G.set(r, a), a;
                }
              }
            }(t);

            if (void 0 !== r) {
              for (var n = [], i = 0; i < e.length; i++) {
                var a = e.charCodeAt(i);
                if (128 <= a && void 0 === (a = r[a])) return;
                n[i] = a;
              }

              return n;
            }
          }, A.MACSTRING = function (e, t) {
            var r = D.MACSTRING(e, t);
            return void 0 !== r ? r.length : 0;
          }, D.VARDELTAS = function (e) {
            for (var t = 0, r = []; t < e.length;) {
              var n = e[t];
              t = 0 === n ? j(e, t, r) : -128 <= n && n <= 127 ? z(e, t, r) : V(e, t, r);
            }

            return r;
          }, D.INDEX = function (e) {
            for (var t = 1, r = [t], n = [], i = 0; i < e.length; i += 1) {
              var a = D.OBJECT(e[i]);
              Array.prototype.push.apply(n, a), t += a.length, r.push(t);
            }

            if (0 === n.length) return [0, 0];

            for (var o = [], s = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, l = [void 0, D.BYTE, D.USHORT, D.UINT24, D.ULONG][s], u = 0; u < r.length; u += 1) {
              var h = l(r[u]);
              Array.prototype.push.apply(o, h);
            }

            return Array.prototype.concat(D.Card16(e.length), D.OffSize(s), o, n);
          }, A.INDEX = function (e) {
            return D.INDEX(e).length;
          }, D.DICT = function (e) {
            for (var t = [], r = Object.keys(e), n = r.length, i = 0; i < n; i += 1) {
              var a = parseInt(r[i], 0),
                  o = e[a];
              t = (t = t.concat(D.OPERAND(o.value, o.type))).concat(D.OPERATOR(a));
            }

            return t;
          }, A.DICT = function (e) {
            return D.DICT(e).length;
          }, D.OPERATOR = function (e) {
            return e < 1200 ? [e] : [12, e - 1200];
          }, D.OPERAND = function (e, t) {
            var r = [];
            if (Array.isArray(t)) for (var n = 0; n < t.length; n += 1) {
              R.argument(e.length === t.length, "Not enough arguments given for type" + t), r = r.concat(D.OPERAND(e[n], t[n]));
            } else if ("SID" === t) r = r.concat(D.NUMBER(e));else if ("offset" === t) r = r.concat(D.NUMBER32(e));else if ("number" === t) r = r.concat(D.NUMBER(e));else {
              if ("real" !== t) throw new Error("Unknown operand type " + t);
              r = r.concat(D.REAL(e));
            }
            return r;
          }, D.OP = D.BYTE, A.OP = A.BYTE;
          var H = "function" == typeof WeakMap && new WeakMap();

          function W(e, t, r) {
            for (var n = 0; n < t.length; n += 1) {
              var i = t[n];
              this[i.name] = i.value;
            }

            if (this.tableName = e, this.fields = t, r) for (var a = Object.keys(r), o = 0; o < a.length; o += 1) {
              var s = a[o],
                  l = r[s];
              void 0 !== this[s] && (this[s] = l);
            }
          }

          function q(e, t, r) {
            void 0 === r && (r = t.length);
            var n = new Array(t.length + 1);
            n[0] = {
              name: e + "Count",
              type: "USHORT",
              value: r
            };

            for (var i = 0; i < t.length; i++) {
              n[i + 1] = {
                name: e + i,
                type: "USHORT",
                value: t[i]
              };
            }

            return n;
          }

          function X(e, t, r) {
            var n = t.length,
                i = new Array(n + 1);
            i[0] = {
              name: e + "Count",
              type: "USHORT",
              value: n
            };

            for (var a = 0; a < n; a++) {
              i[a + 1] = {
                name: e + a,
                type: "TABLE",
                value: r(t[a], a)
              };
            }

            return i;
          }

          function Y(e, t, r) {
            var n = t.length,
                i = [];
            i[0] = {
              name: e + "Count",
              type: "USHORT",
              value: n
            };

            for (var a = 0; a < n; a++) {
              i = i.concat(r(t[a], a));
            }

            return i;
          }

          function Z(e) {
            1 === e.format ? W.call(this, "coverageTable", [{
              name: "coverageFormat",
              type: "USHORT",
              value: 1
            }].concat(q("glyph", e.glyphs))) : R.assert(!1, "Can't create coverage table format 2 yet.");
          }

          function K(e) {
            W.call(this, "scriptListTable", Y("scriptRecord", e, function (e, t) {
              var r = e.script,
                  n = r.defaultLangSys;
              return R.assert(!!n, "Unable to write GSUB: script " + e.tag + " has no default language system."), [{
                name: "scriptTag" + t,
                type: "TAG",
                value: e.tag
              }, {
                name: "script" + t,
                type: "TABLE",
                value: new W("scriptTable", [{
                  name: "defaultLangSys",
                  type: "TABLE",
                  value: new W("defaultLangSys", [{
                    name: "lookupOrder",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "reqFeatureIndex",
                    type: "USHORT",
                    value: n.reqFeatureIndex
                  }].concat(q("featureIndex", n.featureIndexes)))
                }].concat(Y("langSys", r.langSysRecords, function (e, t) {
                  var r = e.langSys;
                  return [{
                    name: "langSysTag" + t,
                    type: "TAG",
                    value: e.tag
                  }, {
                    name: "langSys" + t,
                    type: "TABLE",
                    value: new W("langSys", [{
                      name: "lookupOrder",
                      type: "USHORT",
                      value: 0
                    }, {
                      name: "reqFeatureIndex",
                      type: "USHORT",
                      value: r.reqFeatureIndex
                    }].concat(q("featureIndex", r.featureIndexes)))
                  }];
                })))
              }];
            }));
          }

          function Q(e) {
            W.call(this, "featureListTable", Y("featureRecord", e, function (e, t) {
              var r = e.feature;
              return [{
                name: "featureTag" + t,
                type: "TAG",
                value: e.tag
              }, {
                name: "feature" + t,
                type: "TABLE",
                value: new W("featureTable", [{
                  name: "featureParams",
                  type: "USHORT",
                  value: r.featureParams
                }].concat(q("lookupListIndex", r.lookupListIndexes)))
              }];
            }));
          }

          function J(e, r) {
            W.call(this, "lookupListTable", X("lookup", e, function (e) {
              var t = r[e.lookupType];
              return R.assert(!!t, "Unable to write GSUB lookup type " + e.lookupType + " tables."), new W("lookupTable", [{
                name: "lookupType",
                type: "USHORT",
                value: e.lookupType
              }, {
                name: "lookupFlag",
                type: "USHORT",
                value: e.lookupFlag
              }].concat(X("subtable", e.subtables, t)));
            }));
          }

          D.CHARSTRING = function (e) {
            if (H) {
              var t = H.get(e);
              if (void 0 !== t) return t;
            }

            for (var r = [], n = e.length, i = 0; i < n; i += 1) {
              var a = e[i];
              r = r.concat(D[a.type](a.value));
            }

            return H && H.set(e, r), r;
          }, A.CHARSTRING = function (e) {
            return D.CHARSTRING(e).length;
          }, D.OBJECT = function (e) {
            var t = D[e.type];
            return R.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value);
          }, A.OBJECT = function (e) {
            var t = A[e.type];
            return R.argument(void 0 !== t, "No sizeOf function for type " + e.type), t(e.value);
          }, D.TABLE = function (e) {
            for (var t = [], r = e.fields.length, n = [], i = [], a = 0; a < r; a += 1) {
              var o = e.fields[a],
                  s = D[o.type];
              R.argument(void 0 !== s, "No encoding function for field type " + o.type + " (" + o.name + ")");
              var l = e[o.name];
              void 0 === l && (l = o.value);
              var u = s(l);
              "TABLE" === o.type ? (i.push(t.length), t = t.concat([0, 0]), n.push(u)) : t = t.concat(u);
            }

            for (var h = 0; h < n.length; h += 1) {
              var f = i[h],
                  c = t.length;
              R.argument(c < 65536, "Table " + e.tableName + " too big."), t[f] = c >> 8, t[f + 1] = 255 & c, t = t.concat(n[h]);
            }

            return t;
          }, A.TABLE = function (e) {
            for (var t = 0, r = e.fields.length, n = 0; n < r; n += 1) {
              var i = e.fields[n],
                  a = A[i.type];
              R.argument(void 0 !== a, "No sizeOf function for field type " + i.type + " (" + i.name + ")");
              var o = e[i.name];
              void 0 === o && (o = i.value), t += a(o), "TABLE" === i.type && (t += 2);
            }

            return t;
          }, D.RECORD = D.TABLE, A.RECORD = A.TABLE, D.LITERAL = function (e) {
            return e;
          }, A.LITERAL = function (e) {
            return e.length;
          }, W.prototype.encode = function () {
            return D.TABLE(this);
          }, W.prototype.sizeOf = function () {
            return A.TABLE(this);
          };
          var $ = {
            Table: W,
            Record: W,
            Coverage: (Z.prototype = Object.create(W.prototype)).constructor = Z,
            ScriptList: (K.prototype = Object.create(W.prototype)).constructor = K,
            FeatureList: (Q.prototype = Object.create(W.prototype)).constructor = Q,
            LookupList: (J.prototype = Object.create(W.prototype)).constructor = J,
            ushortList: q,
            tableList: X,
            recordList: Y
          };

          function ee(e, t) {
            return e.getUint8(t);
          }

          function te(e, t) {
            return e.getUint16(t, !1);
          }

          function re(e, t) {
            return e.getUint32(t, !1);
          }

          function ne(e, t) {
            return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
          }

          var ie = {
            byte: 1,
            uShort: 2,
            short: 2,
            uLong: 4,
            fixed: 4,
            longDateTime: 8,
            tag: 4
          };

          function ae(e, t) {
            this.data = e, this.offset = t, this.relativeOffset = 0;
          }

          ae.prototype.parseByte = function () {
            var e = this.data.getUint8(this.offset + this.relativeOffset);
            return this.relativeOffset += 1, e;
          }, ae.prototype.parseChar = function () {
            var e = this.data.getInt8(this.offset + this.relativeOffset);
            return this.relativeOffset += 1, e;
          }, ae.prototype.parseCard8 = ae.prototype.parseByte, ae.prototype.parseCard16 = ae.prototype.parseUShort = function () {
            var e = this.data.getUint16(this.offset + this.relativeOffset);
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseSID = ae.prototype.parseUShort, ae.prototype.parseOffset16 = ae.prototype.parseUShort, ae.prototype.parseShort = function () {
            var e = this.data.getInt16(this.offset + this.relativeOffset);
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseF2Dot14 = function () {
            var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseOffset32 = ae.prototype.parseULong = function () {
            var e = re(this.data, this.offset + this.relativeOffset);
            return this.relativeOffset += 4, e;
          }, ae.prototype.parseFixed = function () {
            var e = ne(this.data, this.offset + this.relativeOffset);
            return this.relativeOffset += 4, e;
          }, ae.prototype.parseString = function (e) {
            var t = this.data,
                r = this.offset + this.relativeOffset,
                n = "";
            this.relativeOffset += e;

            for (var i = 0; i < e; i++) {
              n += String.fromCharCode(t.getUint8(r + i));
            }

            return n;
          }, ae.prototype.parseTag = function () {
            return this.parseString(4);
          }, ae.prototype.parseLongDateTime = function () {
            var e = re(this.data, this.offset + this.relativeOffset + 4);
            return e -= 2082844800, this.relativeOffset += 8, e;
          }, ae.prototype.parseVersion = function (e) {
            var t = te(this.data, this.offset + this.relativeOffset),
                r = te(this.data, this.offset + this.relativeOffset + 2);
            return this.relativeOffset += 4, void 0 === e && (e = 4096), t + r / e / 10;
          }, ae.prototype.skip = function (e, t) {
            void 0 === t && (t = 1), this.relativeOffset += ie[e] * t;
          }, ae.prototype.parseULongList = function (e) {
            void 0 === e && (e = this.parseULong());

            for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++) {
              t[i] = r.getUint32(n), n += 4;
            }

            return this.relativeOffset += 4 * e, t;
          }, ae.prototype.parseOffset16List = ae.prototype.parseUShortList = function (e) {
            void 0 === e && (e = this.parseUShort());

            for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++) {
              t[i] = r.getUint16(n), n += 2;
            }

            return this.relativeOffset += 2 * e, t;
          }, ae.prototype.parseShortList = function (e) {
            for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++) {
              t[i] = r.getInt16(n), n += 2;
            }

            return this.relativeOffset += 2 * e, t;
          }, ae.prototype.parseByteList = function (e) {
            for (var t = new Array(e), r = this.data, n = this.offset + this.relativeOffset, i = 0; i < e; i++) {
              t[i] = r.getUint8(n++);
            }

            return this.relativeOffset += e, t;
          }, ae.prototype.parseList = function (e, t) {
            t || (t = e, e = this.parseUShort());

            for (var r = new Array(e), n = 0; n < e; n++) {
              r[n] = t.call(this);
            }

            return r;
          }, ae.prototype.parseList32 = function (e, t) {
            t || (t = e, e = this.parseULong());

            for (var r = new Array(e), n = 0; n < e; n++) {
              r[n] = t.call(this);
            }

            return r;
          }, ae.prototype.parseRecordList = function (e, t) {
            t || (t = e, e = this.parseUShort());

            for (var r = new Array(e), n = Object.keys(t), i = 0; i < e; i++) {
              for (var a = {}, o = 0; o < n.length; o++) {
                var s = n[o],
                    l = t[s];
                a[s] = l.call(this);
              }

              r[i] = a;
            }

            return r;
          }, ae.prototype.parseRecordList32 = function (e, t) {
            t || (t = e, e = this.parseULong());

            for (var r = new Array(e), n = Object.keys(t), i = 0; i < e; i++) {
              for (var a = {}, o = 0; o < n.length; o++) {
                var s = n[o],
                    l = t[s];
                a[s] = l.call(this);
              }

              r[i] = a;
            }

            return r;
          }, ae.prototype.parseStruct = function (e) {
            if ("function" == typeof e) return e.call(this);

            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n],
                  a = e[i];
              r[i] = a.call(this);
            }

            return r;
          }, ae.prototype.parseValueRecord = function (e) {
            if (void 0 === e && (e = this.parseUShort()), 0 !== e) {
              var t = {};
              return 1 & e && (t.xPlacement = this.parseShort()), 2 & e && (t.yPlacement = this.parseShort()), 4 & e && (t.xAdvance = this.parseShort()), 8 & e && (t.yAdvance = this.parseShort()), 16 & e && (t.xPlaDevice = void 0, this.parseShort()), 32 & e && (t.yPlaDevice = void 0, this.parseShort()), 64 & e && (t.xAdvDevice = void 0, this.parseShort()), 128 & e && (t.yAdvDevice = void 0, this.parseShort()), t;
            }
          }, ae.prototype.parseValueRecordList = function () {
            for (var e = this.parseUShort(), t = this.parseUShort(), r = new Array(t), n = 0; n < t; n++) {
              r[n] = this.parseValueRecord(e);
            }

            return r;
          }, ae.prototype.parsePointer = function (e) {
            var t = this.parseOffset16();
            if (0 < t) return new ae(this.data, this.offset + t).parseStruct(e);
          }, ae.prototype.parsePointer32 = function (e) {
            var t = this.parseOffset32();
            if (0 < t) return new ae(this.data, this.offset + t).parseStruct(e);
          }, ae.prototype.parseListOfLists = function (e) {
            for (var t = this, r = this.parseOffset16List(), n = r.length, i = this.relativeOffset, a = new Array(n), o = 0; o < n; o++) {
              var s = r[o];
              if (0 !== s) {
                if (t.relativeOffset = s, e) {
                  for (var l = t.parseOffset16List(), u = new Array(l.length), h = 0; h < l.length; h++) {
                    t.relativeOffset = s + l[h], u[h] = e.call(t);
                  }

                  a[o] = u;
                } else a[o] = t.parseUShortList();
              } else a[o] = void 0;
            }

            return this.relativeOffset = i, a;
          }, ae.prototype.parseCoverage = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort(),
                r = this.parseUShort();
            if (1 === t) return {
              format: 1,
              glyphs: this.parseUShortList(r)
            };
            if (2 !== t) throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");

            for (var n = new Array(r), i = 0; i < r; i++) {
              n[i] = {
                start: this.parseUShort(),
                end: this.parseUShort(),
                index: this.parseUShort()
              };
            }

            return {
              format: 2,
              ranges: n
            };
          }, ae.prototype.parseClassDef = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            if (1 === t) return {
              format: 1,
              startGlyph: this.parseUShort(),
              classes: this.parseUShortList()
            };
            if (2 === t) return {
              format: 2,
              ranges: this.parseRecordList({
                start: ae.uShort,
                end: ae.uShort,
                classId: ae.uShort
              })
            };
            throw new Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
          }, ae.list = function (e, t) {
            return function () {
              return this.parseList(e, t);
            };
          }, ae.list32 = function (e, t) {
            return function () {
              return this.parseList32(e, t);
            };
          }, ae.recordList = function (e, t) {
            return function () {
              return this.parseRecordList(e, t);
            };
          }, ae.recordList32 = function (e, t) {
            return function () {
              return this.parseRecordList32(e, t);
            };
          }, ae.pointer = function (e) {
            return function () {
              return this.parsePointer(e);
            };
          }, ae.pointer32 = function (e) {
            return function () {
              return this.parsePointer32(e);
            };
          }, ae.tag = ae.prototype.parseTag, ae.byte = ae.prototype.parseByte, ae.uShort = ae.offset16 = ae.prototype.parseUShort, ae.uShortList = ae.prototype.parseUShortList, ae.uLong = ae.offset32 = ae.prototype.parseULong, ae.uLongList = ae.prototype.parseULongList, ae.struct = ae.prototype.parseStruct, ae.coverage = ae.prototype.parseCoverage, ae.classDef = ae.prototype.parseClassDef;
          var oe = {
            reserved: ae.uShort,
            reqFeatureIndex: ae.uShort,
            featureIndexes: ae.uShortList
          };
          ae.prototype.parseScriptList = function () {
            return this.parsePointer(ae.recordList({
              tag: ae.tag,
              script: ae.pointer({
                defaultLangSys: ae.pointer(oe),
                langSysRecords: ae.recordList({
                  tag: ae.tag,
                  langSys: ae.pointer(oe)
                })
              })
            })) || [];
          }, ae.prototype.parseFeatureList = function () {
            return this.parsePointer(ae.recordList({
              tag: ae.tag,
              feature: ae.pointer({
                featureParams: ae.offset16,
                lookupListIndexes: ae.uShortList
              })
            })) || [];
          }, ae.prototype.parseLookupList = function (n) {
            return this.parsePointer(ae.list(ae.pointer(function () {
              var e = this.parseUShort();
              R.argument(1 <= e && e <= 9, "GPOS/GSUB lookup type " + e + " unknown.");
              var t = this.parseUShort(),
                  r = 16 & t;
              return {
                lookupType: e,
                lookupFlag: t,
                subtables: this.parseList(ae.pointer(n[e])),
                markFilteringSet: r ? this.parseUShort() : void 0
              };
            }))) || [];
          }, ae.prototype.parseFeatureVariationsList = function () {
            return this.parsePointer32(function () {
              var e = this.parseUShort(),
                  t = this.parseUShort();
              return R.argument(1 === e && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({
                conditionSetOffset: ae.offset32,
                featureTableSubstitutionOffset: ae.offset32
              });
            }) || [];
          };
          var se = {
            getByte: ee,
            getCard8: ee,
            getUShort: te,
            getCard16: te,
            getShort: function getShort(e, t) {
              return e.getInt16(t, !1);
            },
            getULong: re,
            getFixed: ne,
            getTag: function getTag(e, t) {
              for (var r = "", n = t; n < t + 4; n += 1) {
                r += String.fromCharCode(e.getInt8(n));
              }

              return r;
            },
            getOffset: function getOffset(e, t, r) {
              for (var n = 0, i = 0; i < r; i += 1) {
                n <<= 8, n += e.getUint8(t + i);
              }

              return n;
            },
            getBytes: function getBytes(e, t, r) {
              for (var n = [], i = t; i < r; i += 1) {
                n.push(e.getUint8(i));
              }

              return n;
            },
            bytesToString: function bytesToString(e) {
              for (var t = "", r = 0; r < e.length; r += 1) {
                t += String.fromCharCode(e[r]);
              }

              return t;
            },
            Parser: ae
          };
          var le = {
            parse: function parse(e, t) {
              var r = {};
              r.version = se.getUShort(e, t), R.argument(0 === r.version, "cmap table version should be 0."), r.numTables = se.getUShort(e, t + 2);

              for (var n = -1, i = r.numTables - 1; 0 <= i; --i) {
                var a = se.getUShort(e, t + 4 + 8 * i),
                    o = se.getUShort(e, t + 4 + 8 * i + 2);

                if (3 === a && (0 === o || 1 === o || 10 === o) || 0 === a && (0 === o || 1 === o || 2 === o || 3 === o || 4 === o)) {
                  n = se.getULong(e, t + 4 + 8 * i + 4);
                  break;
                }
              }

              if (-1 === n) throw new Error("No valid cmap sub-tables found.");
              var s = new se.Parser(e, t + n);
              if (r.format = s.parseUShort(), 12 === r.format) !function (e, t) {
                var r;
                t.parseUShort(), e.length = t.parseULong(), e.language = t.parseULong(), e.groupCount = r = t.parseULong(), e.glyphIndexMap = {};

                for (var n = 0; n < r; n += 1) {
                  for (var i = t.parseULong(), a = t.parseULong(), o = t.parseULong(), s = i; s <= a; s += 1) {
                    e.glyphIndexMap[s] = o, o++;
                  }
                }
              }(r, s);else {
                if (4 !== r.format) throw new Error("Only format 4 and 12 cmap tables are supported (found format " + r.format + ").");
                !function (e, t, r, n, i) {
                  var a;
                  e.length = t.parseUShort(), e.language = t.parseUShort(), e.segCount = a = t.parseUShort() >> 1, t.skip("uShort", 3), e.glyphIndexMap = {};

                  for (var o = new se.Parser(r, n + i + 14), s = new se.Parser(r, n + i + 16 + 2 * a), l = new se.Parser(r, n + i + 16 + 4 * a), u = new se.Parser(r, n + i + 16 + 6 * a), h = n + i + 16 + 8 * a, f = 0; f < a - 1; f += 1) {
                    for (var c = void 0, p = o.parseUShort(), d = s.parseUShort(), g = l.parseShort(), m = u.parseUShort(), v = d; v <= p; v += 1) {
                      0 !== m ? (h = u.offset + u.relativeOffset - 2, h += m, h += 2 * (v - d), 0 !== (c = se.getUShort(r, h)) && (c = c + g & 65535)) : c = v + g & 65535, e.glyphIndexMap[v] = c;
                    }
                  }
                }(r, s, e, t, n);
              }
              return r;
            },
            make: function make(e) {
              var t,
                  r = !0;

              for (t = e.length - 1; 0 < t; --t) {
                if (65535 < e.get(t).unicode) {
                  console.log("Adding CMAP format 12 (needed!)"), r = !1;
                  break;
                }
              }

              var n = [{
                name: "version",
                type: "USHORT",
                value: 0
              }, {
                name: "numTables",
                type: "USHORT",
                value: r ? 1 : 2
              }, {
                name: "platformID",
                type: "USHORT",
                value: 3
              }, {
                name: "encodingID",
                type: "USHORT",
                value: 1
              }, {
                name: "offset",
                type: "ULONG",
                value: r ? 12 : 20
              }];
              r || (n = n.concat([{
                name: "cmap12PlatformID",
                type: "USHORT",
                value: 3
              }, {
                name: "cmap12EncodingID",
                type: "USHORT",
                value: 10
              }, {
                name: "cmap12Offset",
                type: "ULONG",
                value: 0
              }])), n = n.concat([{
                name: "format",
                type: "USHORT",
                value: 4
              }, {
                name: "cmap4Length",
                type: "USHORT",
                value: 0
              }, {
                name: "language",
                type: "USHORT",
                value: 0
              }, {
                name: "segCountX2",
                type: "USHORT",
                value: 0
              }, {
                name: "searchRange",
                type: "USHORT",
                value: 0
              }, {
                name: "entrySelector",
                type: "USHORT",
                value: 0
              }, {
                name: "rangeShift",
                type: "USHORT",
                value: 0
              }]);
              var i,
                  a,
                  o,
                  s = new $.Table("cmap", n);

              for (s.segments = [], t = 0; t < e.length; t += 1) {
                for (var l = e.get(t), u = 0; u < l.unicodes.length; u += 1) {
                  i = s, a = l.unicodes[u], o = t, i.segments.push({
                    end: a,
                    start: a,
                    delta: -(a - o),
                    offset: 0,
                    glyphIndex: o
                  });
                }

                s.segments = s.segments.sort(function (e, t) {
                  return e.start - t.start;
                });
              }

              s.segments.push({
                end: 65535,
                start: 65535,
                delta: 1,
                offset: 0
              });
              var h = s.segments.length,
                  f = 0,
                  c = [],
                  p = [],
                  d = [],
                  g = [],
                  m = [],
                  v = [];

              for (t = 0; t < h; t += 1) {
                var y = s.segments[t];
                y.end <= 65535 && y.start <= 65535 ? (c = c.concat({
                  name: "end_" + t,
                  type: "USHORT",
                  value: y.end
                }), p = p.concat({
                  name: "start_" + t,
                  type: "USHORT",
                  value: y.start
                }), d = d.concat({
                  name: "idDelta_" + t,
                  type: "SHORT",
                  value: y.delta
                }), g = g.concat({
                  name: "idRangeOffset_" + t,
                  type: "USHORT",
                  value: y.offset
                }), void 0 !== y.glyphId && (m = m.concat({
                  name: "glyph_" + t,
                  type: "USHORT",
                  value: y.glyphId
                }))) : f += 1, r || void 0 === y.glyphIndex || (v = (v = (v = v.concat({
                  name: "cmap12Start_" + t,
                  type: "ULONG",
                  value: y.start
                })).concat({
                  name: "cmap12End_" + t,
                  type: "ULONG",
                  value: y.end
                })).concat({
                  name: "cmap12Glyph_" + t,
                  type: "ULONG",
                  value: y.glyphIndex
                }));
              }

              if (s.segCountX2 = 2 * (h - f), s.searchRange = 2 * Math.pow(2, Math.floor(Math.log(h - f) / Math.log(2))), s.entrySelector = Math.log(s.searchRange / 2) / Math.log(2), s.rangeShift = s.segCountX2 - s.searchRange, s.fields = s.fields.concat(c), s.fields.push({
                name: "reservedPad",
                type: "USHORT",
                value: 0
              }), s.fields = s.fields.concat(p), s.fields = s.fields.concat(d), s.fields = s.fields.concat(g), s.fields = s.fields.concat(m), s.cmap4Length = 14 + 2 * c.length + 2 + 2 * p.length + 2 * d.length + 2 * g.length + 2 * m.length, !r) {
                var b = 16 + 4 * v.length;
                s.cmap12Offset = 20 + s.cmap4Length, s.fields = s.fields.concat([{
                  name: "cmap12Format",
                  type: "USHORT",
                  value: 12
                }, {
                  name: "cmap12Reserved",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "cmap12Length",
                  type: "ULONG",
                  value: b
                }, {
                  name: "cmap12Language",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "cmap12nGroups",
                  type: "ULONG",
                  value: v.length / 3
                }]), s.fields = s.fields.concat(v);
              }

              return s;
            }
          },
              ue = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
              he = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
              fe = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
              ce = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];

          function pe(e) {
            this.font = e;
          }

          function de(e) {
            this.cmap = e;
          }

          function ge(e, t) {
            this.encoding = e, this.charset = t;
          }

          function me(e) {
            switch (e.version) {
              case 1:
                this.names = ce.slice();
                break;

              case 2:
                this.names = new Array(e.numberOfGlyphs);

                for (var t = 0; t < e.numberOfGlyphs; t++) {
                  e.glyphNameIndex[t] < ce.length ? this.names[t] = ce[e.glyphNameIndex[t]] : this.names[t] = e.names[e.glyphNameIndex[t] - ce.length];
                }

                break;

              case 2.5:
                this.names = new Array(e.numberOfGlyphs);

                for (var r = 0; r < e.numberOfGlyphs; r++) {
                  this.names[r] = ce[r + e.glyphNameIndex[r]];
                }

                break;

              case 3:
              default:
                this.names = [];
            }
          }

          pe.prototype.charToGlyphIndex = function (e) {
            var t = e.codePointAt(0),
                r = this.font.glyphs;
            if (r) for (var n = 0; n < r.length; n += 1) {
              for (var i = r.get(n), a = 0; a < i.unicodes.length; a += 1) {
                if (i.unicodes[a] === t) return n;
              }
            }
            return null;
          }, de.prototype.charToGlyphIndex = function (e) {
            return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
          }, ge.prototype.charToGlyphIndex = function (e) {
            var t = e.codePointAt(0),
                r = this.encoding[t];
            return this.charset.indexOf(r);
          }, me.prototype.nameToGlyphIndex = function (e) {
            return this.names.indexOf(e);
          }, me.prototype.glyphIndexToName = function (e) {
            return this.names[e];
          };
          var ve = {
            line: function line(e, t, r, n, i) {
              e.beginPath(), e.moveTo(t, r), e.lineTo(n, i), e.stroke();
            }
          };

          function ye(e) {
            this.bindConstructorValues(e);
          }

          function be(t, e, r) {
            Object.defineProperty(t, e, {
              get: function get() {
                return t.path, t[r];
              },
              set: function set(e) {
                t[r] = e;
              },
              enumerable: !0,
              configurable: !0
            });
          }

          function _e(e, t) {
            if (this.font = e, this.glyphs = {}, Array.isArray(t)) for (var r = 0; r < t.length; r++) {
              this.glyphs[r] = t[r];
            }
            this.length = t && t.length || 0;
          }

          ye.prototype.bindConstructorValues = function (e) {
            var t, r;
            this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : [], e.xMin && (this.xMin = e.xMin), e.yMin && (this.yMin = e.yMin), e.xMax && (this.xMax = e.xMax), e.yMax && (this.yMax = e.yMax), e.advanceWidth && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", (t = e.path, r = t || new I(), {
              configurable: !0,
              get: function get() {
                return "function" == typeof r && (r = r()), r;
              },
              set: function set(e) {
                r = e;
              }
            }));
          }, ye.prototype.addUnicode = function (e) {
            0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e);
          }, ye.prototype.getBoundingBox = function () {
            return this.path.getBoundingBox();
          }, ye.prototype.getPath = function (e, t, r, n, i) {
            var a, o;
            e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 72;
            var s = (n = n || {}).xScale,
                l = n.yScale;
            if (n.hinting && i && i.hinting && (o = this.path && i.hinting.exec(this, r)), o) a = i.hinting.getCommands(o), e = Math.round(e), t = Math.round(t), s = l = 1;else {
              a = this.path.commands;
              var u = 1 / this.path.unitsPerEm * r;
              void 0 === s && (s = u), void 0 === l && (l = u);
            }

            for (var h = new I(), f = 0; f < a.length; f += 1) {
              var c = a[f];
              "M" === c.type ? h.moveTo(e + c.x * s, t + -c.y * l) : "L" === c.type ? h.lineTo(e + c.x * s, t + -c.y * l) : "Q" === c.type ? h.quadraticCurveTo(e + c.x1 * s, t + -c.y1 * l, e + c.x * s, t + -c.y * l) : "C" === c.type ? h.curveTo(e + c.x1 * s, t + -c.y1 * l, e + c.x2 * s, t + -c.y2 * l, e + c.x * s, t + -c.y * l) : "Z" === c.type && h.closePath();
            }

            return h;
          }, ye.prototype.getContours = function () {
            if (void 0 === this.points) return [];

            for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
              var n = this.points[r];
              t.push(n), n.lastPointOfContour && (e.push(t), t = []);
            }

            return R.argument(0 === t.length, "There are still points left in the current contour."), e;
          }, ye.prototype.getMetrics = function () {
            for (var e = this.path.commands, t = [], r = [], n = 0; n < e.length; n += 1) {
              var i = e[n];
              "Z" !== i.type && (t.push(i.x), r.push(i.y)), "Q" !== i.type && "C" !== i.type || (t.push(i.x1), r.push(i.y1)), "C" === i.type && (t.push(i.x2), r.push(i.y2));
            }

            var a = {
              xMin: Math.min.apply(null, t),
              yMin: Math.min.apply(null, r),
              xMax: Math.max.apply(null, t),
              yMax: Math.max.apply(null, r),
              leftSideBearing: this.leftSideBearing
            };
            return isFinite(a.xMin) || (a.xMin = 0), isFinite(a.xMax) || (a.xMax = this.advanceWidth), isFinite(a.yMin) || (a.yMin = 0), isFinite(a.yMax) || (a.yMax = 0), a.rightSideBearing = this.advanceWidth - a.leftSideBearing - (a.xMax - a.xMin), a;
          }, ye.prototype.draw = function (e, t, r, n, i) {
            this.getPath(t, r, n, i).draw(e);
          }, ye.prototype.drawPoints = function (o, e, t, r) {
            function n(e, t, r, n) {
              var i = 2 * Math.PI;
              o.beginPath();

              for (var a = 0; a < e.length; a += 1) {
                o.moveTo(t + e[a].x * n, r + e[a].y * n), o.arc(t + e[a].x * n, r + e[a].y * n, 2, 0, i, !1);
              }

              o.closePath(), o.fill();
            }

            e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 24;

            for (var i = 1 / this.path.unitsPerEm * r, a = [], s = [], l = this.path, u = 0; u < l.commands.length; u += 1) {
              var h = l.commands[u];
              void 0 !== h.x && a.push({
                x: h.x,
                y: -h.y
              }), void 0 !== h.x1 && s.push({
                x: h.x1,
                y: -h.y1
              }), void 0 !== h.x2 && s.push({
                x: h.x2,
                y: -h.y2
              });
            }

            o.fillStyle = "blue", n(a, e, t, i), o.fillStyle = "red", n(s, e, t, i);
          }, ye.prototype.drawMetrics = function (e, t, r, n) {
            var i;
            t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 24, i = 1 / this.path.unitsPerEm * n, e.lineWidth = 1, e.strokeStyle = "black", ve.line(e, t, -1e4, t, 1e4), ve.line(e, -1e4, r, 1e4, r);
            var a = this.xMin || 0,
                o = this.yMin || 0,
                s = this.xMax || 0,
                l = this.yMax || 0,
                u = this.advanceWidth || 0;
            e.strokeStyle = "blue", ve.line(e, t + a * i, -1e4, t + a * i, 1e4), ve.line(e, t + s * i, -1e4, t + s * i, 1e4), ve.line(e, -1e4, r + -o * i, 1e4, r + -o * i), ve.line(e, -1e4, r + -l * i, 1e4, r + -l * i), e.strokeStyle = "green", ve.line(e, t + u * i, -1e4, t + u * i, 1e4);
          }, _e.prototype.get = function (e) {
            return "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]()), this.glyphs[e];
          }, _e.prototype.push = function (e, t) {
            this.glyphs[e] = t, this.length++;
          };
          var xe = {
            GlyphSet: _e,
            glyphLoader: function glyphLoader(e, t) {
              return new ye({
                index: t,
                font: e
              });
            },
            ttfGlyphLoader: function ttfGlyphLoader(r, e, n, i, a, o) {
              return function () {
                var t = new ye({
                  index: e,
                  font: r
                });
                return t.path = function () {
                  n(t, i, a);
                  var e = o(r.glyphs, t);
                  return e.unitsPerEm = r.unitsPerEm, e;
                }, be(t, "xMin", "_xMin"), be(t, "xMax", "_xMax"), be(t, "yMin", "_yMin"), be(t, "yMax", "_yMax"), t;
              };
            },
            cffGlyphLoader: function cffGlyphLoader(r, e, n, i) {
              return function () {
                var t = new ye({
                  index: e,
                  font: r
                });
                return t.path = function () {
                  var e = n(r, t, i);
                  return e.unitsPerEm = r.unitsPerEm, e;
                }, t;
              };
            }
          };

          function Se(e, t) {
            if (e === t) return !0;

            if (Array.isArray(e) && Array.isArray(t)) {
              if (e.length !== t.length) return !1;

              for (var r = 0; r < e.length; r += 1) {
                if (!Se(e[r], t[r])) return !1;
              }

              return !0;
            }

            return !1;
          }

          function we(e) {
            return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
          }

          function Te(e, t, r) {
            var n,
                i,
                a = [],
                o = [],
                s = se.getCard16(e, t);

            if (0 !== s) {
              var l = se.getByte(e, t + 2);
              n = t + (s + 1) * l + 2;

              for (var u = t + 3, h = 0; h < s + 1; h += 1) {
                a.push(se.getOffset(e, u, l)), u += l;
              }

              i = n + a[s];
            } else i = t + 2;

            for (var f = 0; f < a.length - 1; f += 1) {
              var c = se.getBytes(e, n + a[f], n + a[f + 1]);
              r && (c = r(c)), o.push(c);
            }

            return {
              objects: o,
              startOffset: t,
              endOffset: i
            };
          }

          function Ee(e, t) {
            if (28 === t) return e.parseByte() << 8 | e.parseByte();
            if (29 === t) return e.parseByte() << 24 | e.parseByte() << 16 | e.parseByte() << 8 | e.parseByte();
            if (30 === t) return function (e) {
              for (var t = "", r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) {
                var n = e.parseByte(),
                    i = n >> 4,
                    a = 15 & n;
                if (15 == i) break;
                if (t += r[i], 15 == a) break;
                t += r[a];
              }

              return parseFloat(t);
            }(e);
            if (32 <= t && t <= 246) return t - 139;
            if (247 <= t && t <= 250) return 256 * (t - 247) + e.parseByte() + 108;
            if (251 <= t && t <= 254) return 256 * -(t - 251) - e.parseByte() - 108;
            throw new Error("Invalid b0 " + t);
          }

          function Ce(e, t, r) {
            t = void 0 !== t ? t : 0;
            var n = new se.Parser(e, t),
                i = [],
                a = [];

            for (r = void 0 !== r ? r : e.length; n.relativeOffset < r;) {
              var o = n.parseByte();
              o <= 21 ? (12 === o && (o = 1200 + n.parseByte()), i.push([o, a]), a = []) : a.push(Ee(n, o));
            }

            return function (e) {
              for (var t = {}, r = 0; r < e.length; r += 1) {
                var n = e[r][0],
                    i = e[r][1],
                    a = void 0;
                if (a = 1 === i.length ? i[0] : i, t.hasOwnProperty(n) && !isNaN(t[n])) throw new Error("Object " + t + " already has key " + n);
                t[n] = a;
              }

              return t;
            }(i);
          }

          function Le(e, t) {
            return t = t <= 390 ? ue[t] : e[t - 391];
          }

          function Me(e, t, r) {
            for (var n, i = {}, a = 0; a < t.length; a += 1) {
              var o = t[a];

              if (Array.isArray(o.type)) {
                var s = [];
                s.length = o.type.length;

                for (var l = 0; l < o.type.length; l++) {
                  void 0 === (n = void 0 !== e[o.op] ? e[o.op][l] : void 0) && (n = void 0 !== o.value && void 0 !== o.value[l] ? o.value[l] : null), "SID" === o.type[l] && (n = Le(r, n)), s[l] = n;
                }

                i[o.name] = s;
              } else void 0 === (n = e[o.op]) && (n = void 0 !== o.value ? o.value : null), "SID" === o.type && (n = Le(r, n)), i[o.name] = n;
            }

            return i;
          }

          var Pe = [{
            name: "version",
            op: 0,
            type: "SID"
          }, {
            name: "notice",
            op: 1,
            type: "SID"
          }, {
            name: "copyright",
            op: 1200,
            type: "SID"
          }, {
            name: "fullName",
            op: 2,
            type: "SID"
          }, {
            name: "familyName",
            op: 3,
            type: "SID"
          }, {
            name: "weight",
            op: 4,
            type: "SID"
          }, {
            name: "isFixedPitch",
            op: 1201,
            type: "number",
            value: 0
          }, {
            name: "italicAngle",
            op: 1202,
            type: "number",
            value: 0
          }, {
            name: "underlinePosition",
            op: 1203,
            type: "number",
            value: -100
          }, {
            name: "underlineThickness",
            op: 1204,
            type: "number",
            value: 50
          }, {
            name: "paintType",
            op: 1205,
            type: "number",
            value: 0
          }, {
            name: "charstringType",
            op: 1206,
            type: "number",
            value: 2
          }, {
            name: "fontMatrix",
            op: 1207,
            type: ["real", "real", "real", "real", "real", "real"],
            value: [.001, 0, 0, .001, 0, 0]
          }, {
            name: "uniqueId",
            op: 13,
            type: "number"
          }, {
            name: "fontBBox",
            op: 5,
            type: ["number", "number", "number", "number"],
            value: [0, 0, 0, 0]
          }, {
            name: "strokeWidth",
            op: 1208,
            type: "number",
            value: 0
          }, {
            name: "xuid",
            op: 14,
            type: [],
            value: null
          }, {
            name: "charset",
            op: 15,
            type: "offset",
            value: 0
          }, {
            name: "encoding",
            op: 16,
            type: "offset",
            value: 0
          }, {
            name: "charStrings",
            op: 17,
            type: "offset",
            value: 0
          }, {
            name: "private",
            op: 18,
            type: ["number", "offset"],
            value: [0, 0]
          }, {
            name: "ros",
            op: 1230,
            type: ["SID", "SID", "number"]
          }, {
            name: "cidFontVersion",
            op: 1231,
            type: "number",
            value: 0
          }, {
            name: "cidFontRevision",
            op: 1232,
            type: "number",
            value: 0
          }, {
            name: "cidFontType",
            op: 1233,
            type: "number",
            value: 0
          }, {
            name: "cidCount",
            op: 1234,
            type: "number",
            value: 8720
          }, {
            name: "uidBase",
            op: 1235,
            type: "number"
          }, {
            name: "fdArray",
            op: 1236,
            type: "offset"
          }, {
            name: "fdSelect",
            op: 1237,
            type: "offset"
          }, {
            name: "fontName",
            op: 1238,
            type: "SID"
          }],
              Re = [{
            name: "subrs",
            op: 19,
            type: "offset",
            value: 0
          }, {
            name: "defaultWidthX",
            op: 20,
            type: "number",
            value: 0
          }, {
            name: "nominalWidthX",
            op: 21,
            type: "number",
            value: 0
          }];

          function Oe(e, t, r, n) {
            return Me(Ce(e, t, r), Re, n);
          }

          function ke(e, t, r, n) {
            for (var i, a, o = [], s = 0; s < r.length; s += 1) {
              var l = new DataView(new Uint8Array(r[s]).buffer),
                  u = (a = n, Me(Ce(i = l, 0, i.byteLength), Pe, a));
              u._subrs = [], u._subrsBias = 0;
              var h = u.private[0],
                  f = u.private[1];

              if (0 !== h && 0 !== f) {
                var c = Oe(e, f + t, h, n);

                if (u._defaultWidthX = c.defaultWidthX, u._nominalWidthX = c.nominalWidthX, 0 !== c.subrs) {
                  var p = Te(e, f + c.subrs + t);
                  u._subrs = p.objects, u._subrsBias = we(u._subrs);
                }

                u._privateDict = c;
              }

              o.push(u);
            }

            return o;
          }

          function De(m, v, e) {
            var y,
                b,
                _,
                x,
                S,
                w,
                t,
                T,
                E = new I(),
                C = [],
                L = 0,
                M = !1,
                P = !1,
                R = 0,
                O = 0;

            if (m.isCIDFont) {
              var r = m.tables.cff.topDict._fdSelect[v.index],
                  n = m.tables.cff.topDict._fdArray[r];
              S = n._subrs, w = n._subrsBias, t = n._defaultWidthX, T = n._nominalWidthX;
            } else S = m.tables.cff.topDict._subrs, w = m.tables.cff.topDict._subrsBias, t = m.tables.cff.topDict._defaultWidthX, T = m.tables.cff.topDict._nominalWidthX;

            var k = t;

            function D(e, t) {
              P && E.closePath(), E.moveTo(e, t), P = !0;
            }

            function A() {
              C.length % 2 == 0 || M || (k = C.shift() + T), L += C.length >> 1, C.length = 0, M = !0;
            }

            return function e(t) {
              for (var r, n, i, a, o, s, l, u, h, f, c, p, d = 0; d < t.length;) {
                var g = t[d];

                switch (d += 1, g) {
                  case 1:
                  case 3:
                    A();
                    break;

                  case 4:
                    1 < C.length && !M && (k = C.shift() + T, M = !0), O += C.pop(), D(R, O);
                    break;

                  case 5:
                    for (; 0 < C.length;) {
                      R += C.shift(), O += C.shift(), E.lineTo(R, O);
                    }

                    break;

                  case 6:
                    for (; 0 < C.length && (R += C.shift(), E.lineTo(R, O), 0 !== C.length);) {
                      O += C.shift(), E.lineTo(R, O);
                    }

                    break;

                  case 7:
                    for (; 0 < C.length && (O += C.shift(), E.lineTo(R, O), 0 !== C.length);) {
                      R += C.shift(), E.lineTo(R, O);
                    }

                    break;

                  case 8:
                    for (; 0 < C.length;) {
                      y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x + C.shift(), E.curveTo(y, b, _, x, R, O);
                    }

                    break;

                  case 10:
                    o = C.pop() + w, (s = S[o]) && e(s);
                    break;

                  case 11:
                    return;

                  case 12:
                    switch (g = t[d], d += 1, g) {
                      case 35:
                        y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), l = _ + C.shift(), u = x + C.shift(), h = l + C.shift(), f = u + C.shift(), c = h + C.shift(), p = f + C.shift(), R = c + C.shift(), O = p + C.shift(), C.shift(), E.curveTo(y, b, _, x, l, u), E.curveTo(h, f, c, p, R, O);
                        break;

                      case 34:
                        y = R + C.shift(), b = O, _ = y + C.shift(), x = b + C.shift(), l = _ + C.shift(), u = x, h = l + C.shift(), f = x, c = h + C.shift(), p = O, R = c + C.shift(), E.curveTo(y, b, _, x, l, u), E.curveTo(h, f, c, p, R, O);
                        break;

                      case 36:
                        y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), l = _ + C.shift(), u = x, h = l + C.shift(), f = x, c = h + C.shift(), p = f + C.shift(), R = c + C.shift(), E.curveTo(y, b, _, x, l, u), E.curveTo(h, f, c, p, R, O);
                        break;

                      case 37:
                        y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), l = _ + C.shift(), u = x + C.shift(), h = l + C.shift(), f = u + C.shift(), c = h + C.shift(), p = f + C.shift(), Math.abs(c - R) > Math.abs(p - O) ? R = c + C.shift() : O = p + C.shift(), E.curveTo(y, b, _, x, l, u), E.curveTo(h, f, c, p, R, O);
                        break;

                      default:
                        console.log("Glyph " + v.index + ": unknown operator 1200" + g), C.length = 0;
                    }

                    break;

                  case 14:
                    0 < C.length && !M && (k = C.shift() + T, M = !0), P && (E.closePath(), P = !1);
                    break;

                  case 18:
                    A();
                    break;

                  case 19:
                  case 20:
                    A(), d += L + 7 >> 3;
                    break;

                  case 21:
                    2 < C.length && !M && (k = C.shift() + T, M = !0), O += C.pop(), D(R += C.pop(), O);
                    break;

                  case 22:
                    1 < C.length && !M && (k = C.shift() + T, M = !0), D(R += C.pop(), O);
                    break;

                  case 23:
                    A();
                    break;

                  case 24:
                    for (; 2 < C.length;) {
                      y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x + C.shift(), E.curveTo(y, b, _, x, R, O);
                    }

                    R += C.shift(), O += C.shift(), E.lineTo(R, O);
                    break;

                  case 25:
                    for (; 6 < C.length;) {
                      R += C.shift(), O += C.shift(), E.lineTo(R, O);
                    }

                    y = R + C.shift(), b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x + C.shift(), E.curveTo(y, b, _, x, R, O);
                    break;

                  case 26:
                    for (C.length % 2 && (R += C.shift()); 0 < C.length;) {
                      y = R, b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _, O = x + C.shift(), E.curveTo(y, b, _, x, R, O);
                    }

                    break;

                  case 27:
                    for (C.length % 2 && (O += C.shift()); 0 < C.length;) {
                      y = R + C.shift(), b = O, _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x, E.curveTo(y, b, _, x, R, O);
                    }

                    break;

                  case 28:
                    r = t[d], n = t[d + 1], C.push((r << 24 | n << 16) >> 16), d += 2;
                    break;

                  case 29:
                    o = C.pop() + m.gsubrsBias, (s = m.gsubrs[o]) && e(s);
                    break;

                  case 30:
                    for (; 0 < C.length && (y = R, b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x + (1 === C.length ? C.shift() : 0), E.curveTo(y, b, _, x, R, O), 0 !== C.length);) {
                      y = R + C.shift(), b = O, _ = y + C.shift(), x = b + C.shift(), O = x + C.shift(), R = _ + (1 === C.length ? C.shift() : 0), E.curveTo(y, b, _, x, R, O);
                    }

                    break;

                  case 31:
                    for (; 0 < C.length && (y = R + C.shift(), b = O, _ = y + C.shift(), x = b + C.shift(), O = x + C.shift(), R = _ + (1 === C.length ? C.shift() : 0), E.curveTo(y, b, _, x, R, O), 0 !== C.length);) {
                      y = R, b = O + C.shift(), _ = y + C.shift(), x = b + C.shift(), R = _ + C.shift(), O = x + (1 === C.length ? C.shift() : 0), E.curveTo(y, b, _, x, R, O);
                    }

                    break;

                  default:
                    g < 32 ? console.log("Glyph " + v.index + ": unknown operator " + g) : g < 247 ? C.push(g - 139) : g < 251 ? (r = t[d], d += 1, C.push(256 * (g - 247) + r + 108)) : g < 255 ? (r = t[d], d += 1, C.push(256 * -(g - 251) - r - 108)) : (r = t[d], n = t[d + 1], i = t[d + 2], a = t[d + 3], d += 4, C.push((r << 24 | n << 16 | i << 8 | a) / 65536));
                }
              }
            }(e), v.advanceWidth = k, E;
          }

          function Ae(e, t) {
            var r,
                n = ue.indexOf(e);
            return 0 <= n && (r = n), 0 <= (n = t.indexOf(e)) ? r = n + ue.length : (r = ue.length + t.length, t.push(e)), r;
          }

          function Ie(e, t, r) {
            for (var n = {}, i = 0; i < e.length; i += 1) {
              var a = e[i],
                  o = t[a.name];
              void 0 === o || Se(o, a.value) || ("SID" === a.type && (o = Ae(o, r)), n[a.op] = {
                name: a.name,
                type: a.type,
                value: o
              });
            }

            return n;
          }

          function Ue(e, t) {
            var r = new $.Record("Top DICT", [{
              name: "dict",
              type: "DICT",
              value: {}
            }]);
            return r.dict = Ie(Pe, e, t), r;
          }

          function Ne(e) {
            var t = new $.Record("Top DICT INDEX", [{
              name: "topDicts",
              type: "INDEX",
              value: []
            }]);
            return t.topDicts = [{
              name: "topDict_0",
              type: "TABLE",
              value: e
            }], t;
          }

          function Fe(e) {
            var t = [],
                r = e.path;
            t.push({
              name: "width",
              type: "NUMBER",
              value: e.advanceWidth
            });

            for (var n = 0, i = 0, a = 0; a < r.commands.length; a += 1) {
              var o = void 0,
                  s = void 0,
                  l = r.commands[a];

              if ("Q" === l.type) {
                l = {
                  type: "C",
                  x: l.x,
                  y: l.y,
                  x1: 1 / 3 * n + 2 / 3 * l.x1,
                  y1: 1 / 3 * i + 2 / 3 * l.y1,
                  x2: 1 / 3 * l.x + 2 / 3 * l.x1,
                  y2: 1 / 3 * l.y + 2 / 3 * l.y1
                };
              }

              if ("M" === l.type) o = Math.round(l.x - n), s = Math.round(l.y - i), t.push({
                name: "dx",
                type: "NUMBER",
                value: o
              }), t.push({
                name: "dy",
                type: "NUMBER",
                value: s
              }), t.push({
                name: "rmoveto",
                type: "OP",
                value: 21
              }), n = Math.round(l.x), i = Math.round(l.y);else if ("L" === l.type) o = Math.round(l.x - n), s = Math.round(l.y - i), t.push({
                name: "dx",
                type: "NUMBER",
                value: o
              }), t.push({
                name: "dy",
                type: "NUMBER",
                value: s
              }), t.push({
                name: "rlineto",
                type: "OP",
                value: 5
              }), n = Math.round(l.x), i = Math.round(l.y);else if ("C" === l.type) {
                var u = Math.round(l.x1 - n),
                    h = Math.round(l.y1 - i),
                    f = Math.round(l.x2 - l.x1),
                    c = Math.round(l.y2 - l.y1);
                o = Math.round(l.x - l.x2), s = Math.round(l.y - l.y2), t.push({
                  name: "dx1",
                  type: "NUMBER",
                  value: u
                }), t.push({
                  name: "dy1",
                  type: "NUMBER",
                  value: h
                }), t.push({
                  name: "dx2",
                  type: "NUMBER",
                  value: f
                }), t.push({
                  name: "dy2",
                  type: "NUMBER",
                  value: c
                }), t.push({
                  name: "dx",
                  type: "NUMBER",
                  value: o
                }), t.push({
                  name: "dy",
                  type: "NUMBER",
                  value: s
                }), t.push({
                  name: "rrcurveto",
                  type: "OP",
                  value: 8
                }), n = Math.round(l.x), i = Math.round(l.y);
              }
            }

            return t.push({
              name: "endchar",
              type: "OP",
              value: 14
            }), t;
          }

          var Ge = {
            parse: function parse(e, t, r) {
              r.tables.cff = {};
              var n,
                  i,
                  a,
                  o = Te(e, (n = e, i = t, (a = {}).formatMajor = se.getCard8(n, i), a.formatMinor = se.getCard8(n, i + 1), a.size = se.getCard8(n, i + 2), a.offsetSize = se.getCard8(n, i + 3), a.startOffset = i, a.endOffset = i + 4, a).endOffset, se.bytesToString),
                  s = Te(e, o.endOffset),
                  l = Te(e, s.endOffset, se.bytesToString),
                  u = Te(e, l.endOffset);
              r.gsubrs = u.objects, r.gsubrsBias = we(r.gsubrs);
              var h = ke(e, t, s.objects, l.objects);
              if (1 !== h.length) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + h.length);
              var f = h[0];

              if ((r.tables.cff.topDict = f)._privateDict && (r.defaultWidthX = f._privateDict.defaultWidthX, r.nominalWidthX = f._privateDict.nominalWidthX), void 0 !== f.ros[0] && void 0 !== f.ros[1] && (r.isCIDFont = !0), r.isCIDFont) {
                var c = f.fdArray,
                    p = f.fdSelect;
                if (0 === c || 0 === p) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                var d = ke(e, t, Te(e, c += t).objects, l.objects);
                f._fdArray = d, p += t, f._fdSelect = function (e, t, r, n) {
                  var i,
                      a = [],
                      o = new se.Parser(e, t),
                      s = o.parseCard8();
                  if (0 === s) for (var l = 0; l < r; l++) {
                    if (n <= (i = o.parseCard8())) throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + n + ")");
                    a.push(i);
                  } else {
                    if (3 !== s) throw new Error("CFF Table CID Font FDSelect table has unsupported format " + s);
                    var u,
                        h = o.parseCard16(),
                        f = o.parseCard16();
                    if (0 !== f) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + f);

                    for (var c = 0; c < h; c++) {
                      if (i = o.parseCard8(), u = o.parseCard16(), n <= i) throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + n + ")");
                      if (r < u) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + u);

                      for (; f < u; f++) {
                        a.push(i);
                      }

                      f = u;
                    }

                    if (u !== r) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + u);
                  }
                  return a;
                }(e, p, r.numGlyphs, d.length);
              }

              var g = t + f.private[1],
                  m = Oe(e, g, f.private[0], l.objects);

              if (r.defaultWidthX = m.defaultWidthX, r.nominalWidthX = m.nominalWidthX, 0 !== m.subrs) {
                var v = Te(e, g + m.subrs);
                r.subrs = v.objects, r.subrsBias = we(r.subrs);
              } else r.subrs = [], r.subrsBias = 0;

              var y = Te(e, t + f.charStrings);
              r.nGlyphs = y.objects.length;

              var b = function (e, t, r, n) {
                var i,
                    a,
                    o = new se.Parser(e, t);
                --r;
                var s = [".notdef"],
                    l = o.parseCard8();
                if (0 === l) for (var u = 0; u < r; u += 1) {
                  i = o.parseSID(), s.push(Le(n, i));
                } else if (1 === l) for (; s.length <= r;) {
                  i = o.parseSID(), a = o.parseCard8();

                  for (var h = 0; h <= a; h += 1) {
                    s.push(Le(n, i)), i += 1;
                  }
                } else {
                  if (2 !== l) throw new Error("Unknown charset format " + l);

                  for (; s.length <= r;) {
                    i = o.parseSID(), a = o.parseCard16();

                    for (var f = 0; f <= a; f += 1) {
                      s.push(Le(n, i)), i += 1;
                    }
                  }
                }
                return s;
              }(e, t + f.charset, r.nGlyphs, l.objects);

              0 === f.encoding ? r.cffEncoding = new ge(he, b) : 1 === f.encoding ? r.cffEncoding = new ge(fe, b) : r.cffEncoding = function (e, t, r) {
                var n,
                    i = {},
                    a = new se.Parser(e, t),
                    o = a.parseCard8();
                if (0 === o) for (var s = a.parseCard8(), l = 0; l < s; l += 1) {
                  i[n = a.parseCard8()] = l;
                } else {
                  if (1 !== o) throw new Error("Unknown encoding format " + o);
                  var u = a.parseCard8();
                  n = 1;

                  for (var h = 0; h < u; h += 1) {
                    for (var f = a.parseCard8(), c = a.parseCard8(), p = f; p <= f + c; p += 1) {
                      i[p] = n, n += 1;
                    }
                  }
                }
                return new ge(i, r);
              }(e, t + f.encoding, b), r.encoding = r.encoding || r.cffEncoding, r.glyphs = new xe.GlyphSet(r);

              for (var _ = 0; _ < r.nGlyphs; _ += 1) {
                var x = y.objects[_];
                r.glyphs.push(_, xe.cffGlyphLoader(r, _, De, x));
              }
            },
            make: function make(e, t) {
              for (var r, n = new $.Table("CFF ", [{
                name: "header",
                type: "RECORD"
              }, {
                name: "nameIndex",
                type: "RECORD"
              }, {
                name: "topDictIndex",
                type: "RECORD"
              }, {
                name: "stringIndex",
                type: "RECORD"
              }, {
                name: "globalSubrIndex",
                type: "RECORD"
              }, {
                name: "charsets",
                type: "RECORD"
              }, {
                name: "charStringsIndex",
                type: "RECORD"
              }, {
                name: "privateDict",
                type: "RECORD"
              }]), i = 1 / t.unitsPerEm, a = {
                version: t.version,
                fullName: t.fullName,
                familyName: t.familyName,
                weight: t.weightName,
                fontBBox: t.fontBBox || [0, 0, 0, 0],
                fontMatrix: [i, 0, 0, i, 0, 0],
                charset: 999,
                encoding: 0,
                charStrings: 999,
                private: [0, 999]
              }, o = [], s = 1; s < e.length; s += 1) {
                r = e.get(s), o.push(r.name);
              }

              var l = [];
              n.header = new $.Record("Header", [{
                name: "major",
                type: "Card8",
                value: 1
              }, {
                name: "minor",
                type: "Card8",
                value: 0
              }, {
                name: "hdrSize",
                type: "Card8",
                value: 4
              }, {
                name: "major",
                type: "Card8",
                value: 1
              }]), n.nameIndex = function (e) {
                var t = new $.Record("Name INDEX", [{
                  name: "names",
                  type: "INDEX",
                  value: []
                }]);
                t.names = [];

                for (var r = 0; r < e.length; r += 1) {
                  t.names.push({
                    name: "name_" + r,
                    type: "NAME",
                    value: e[r]
                  });
                }

                return t;
              }([t.postScriptName]);
              var u,
                  h,
                  f,
                  c = Ue(a, l);
              n.topDictIndex = Ne(c), n.globalSubrIndex = new $.Record("Global Subr INDEX", [{
                name: "subrs",
                type: "INDEX",
                value: []
              }]), n.charsets = function (e, t) {
                for (var r = new $.Record("Charsets", [{
                  name: "format",
                  type: "Card8",
                  value: 0
                }]), n = 0; n < e.length; n += 1) {
                  var i = Ae(e[n], t);
                  r.fields.push({
                    name: "glyph_" + n,
                    type: "SID",
                    value: i
                  });
                }

                return r;
              }(o, l), n.charStringsIndex = function (e) {
                for (var t = new $.Record("CharStrings INDEX", [{
                  name: "charStrings",
                  type: "INDEX",
                  value: []
                }]), r = 0; r < e.length; r += 1) {
                  var n = e.get(r),
                      i = Fe(n);
                  t.charStrings.push({
                    name: n.name,
                    type: "CHARSTRING",
                    value: i
                  });
                }

                return t;
              }(e), n.privateDict = (u = {}, h = l, (f = new $.Record("Private DICT", [{
                name: "dict",
                type: "DICT",
                value: {}
              }])).dict = Ie(Re, u, h), f), n.stringIndex = function (e) {
                var t = new $.Record("String INDEX", [{
                  name: "strings",
                  type: "INDEX",
                  value: []
                }]);
                t.strings = [];

                for (var r = 0; r < e.length; r += 1) {
                  t.strings.push({
                    name: "string_" + r,
                    type: "STRING",
                    value: e[r]
                  });
                }

                return t;
              }(l);
              var p = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
              return a.charset = p, a.encoding = 0, a.charStrings = a.charset + n.charsets.sizeOf(), a.private[1] = a.charStrings + n.charStringsIndex.sizeOf(), c = Ue(a, l), n.topDictIndex = Ne(c), n;
            }
          };
          var Be = {
            parse: function parse(e, t) {
              var r = {},
                  n = new se.Parser(e, t);
              return r.version = n.parseVersion(), r.fontRevision = Math.round(1e3 * n.parseFixed()) / 1e3, r.checkSumAdjustment = n.parseULong(), r.magicNumber = n.parseULong(), R.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."), r.flags = n.parseUShort(), r.unitsPerEm = n.parseUShort(), r.created = n.parseLongDateTime(), r.modified = n.parseLongDateTime(), r.xMin = n.parseShort(), r.yMin = n.parseShort(), r.xMax = n.parseShort(), r.yMax = n.parseShort(), r.macStyle = n.parseUShort(), r.lowestRecPPEM = n.parseUShort(), r.fontDirectionHint = n.parseShort(), r.indexToLocFormat = n.parseShort(), r.glyphDataFormat = n.parseShort(), r;
            },
            make: function make(e) {
              var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
                  r = t;
              return e.createdTimestamp && (r = e.createdTimestamp + 2082844800), new $.Table("head", [{
                name: "version",
                type: "FIXED",
                value: 65536
              }, {
                name: "fontRevision",
                type: "FIXED",
                value: 65536
              }, {
                name: "checkSumAdjustment",
                type: "ULONG",
                value: 0
              }, {
                name: "magicNumber",
                type: "ULONG",
                value: 1594834165
              }, {
                name: "flags",
                type: "USHORT",
                value: 0
              }, {
                name: "unitsPerEm",
                type: "USHORT",
                value: 1e3
              }, {
                name: "created",
                type: "LONGDATETIME",
                value: r
              }, {
                name: "modified",
                type: "LONGDATETIME",
                value: t
              }, {
                name: "xMin",
                type: "SHORT",
                value: 0
              }, {
                name: "yMin",
                type: "SHORT",
                value: 0
              }, {
                name: "xMax",
                type: "SHORT",
                value: 0
              }, {
                name: "yMax",
                type: "SHORT",
                value: 0
              }, {
                name: "macStyle",
                type: "USHORT",
                value: 0
              }, {
                name: "lowestRecPPEM",
                type: "USHORT",
                value: 0
              }, {
                name: "fontDirectionHint",
                type: "SHORT",
                value: 2
              }, {
                name: "indexToLocFormat",
                type: "SHORT",
                value: 0
              }, {
                name: "glyphDataFormat",
                type: "SHORT",
                value: 0
              }], e);
            }
          };
          var je = {
            parse: function parse(e, t) {
              var r = {},
                  n = new se.Parser(e, t);
              return r.version = n.parseVersion(), r.ascender = n.parseShort(), r.descender = n.parseShort(), r.lineGap = n.parseShort(), r.advanceWidthMax = n.parseUShort(), r.minLeftSideBearing = n.parseShort(), r.minRightSideBearing = n.parseShort(), r.xMaxExtent = n.parseShort(), r.caretSlopeRise = n.parseShort(), r.caretSlopeRun = n.parseShort(), r.caretOffset = n.parseShort(), n.relativeOffset += 8, r.metricDataFormat = n.parseShort(), r.numberOfHMetrics = n.parseUShort(), r;
            },
            make: function make(e) {
              return new $.Table("hhea", [{
                name: "version",
                type: "FIXED",
                value: 65536
              }, {
                name: "ascender",
                type: "FWORD",
                value: 0
              }, {
                name: "descender",
                type: "FWORD",
                value: 0
              }, {
                name: "lineGap",
                type: "FWORD",
                value: 0
              }, {
                name: "advanceWidthMax",
                type: "UFWORD",
                value: 0
              }, {
                name: "minLeftSideBearing",
                type: "FWORD",
                value: 0
              }, {
                name: "minRightSideBearing",
                type: "FWORD",
                value: 0
              }, {
                name: "xMaxExtent",
                type: "FWORD",
                value: 0
              }, {
                name: "caretSlopeRise",
                type: "SHORT",
                value: 1
              }, {
                name: "caretSlopeRun",
                type: "SHORT",
                value: 0
              }, {
                name: "caretOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved1",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved2",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved3",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved4",
                type: "SHORT",
                value: 0
              }, {
                name: "metricDataFormat",
                type: "SHORT",
                value: 0
              }, {
                name: "numberOfHMetrics",
                type: "USHORT",
                value: 0
              }], e);
            }
          };
          var ze = {
            parse: function parse(e, t, r, n, i) {
              for (var a, o, s = new se.Parser(e, t), l = 0; l < n; l += 1) {
                l < r && (a = s.parseUShort(), o = s.parseShort());
                var u = i.get(l);
                u.advanceWidth = a, u.leftSideBearing = o;
              }
            },
            make: function make(e) {
              for (var t = new $.Table("hmtx", []), r = 0; r < e.length; r += 1) {
                var n = e.get(r),
                    i = n.advanceWidth || 0,
                    a = n.leftSideBearing || 0;
                t.fields.push({
                  name: "advanceWidth_" + r,
                  type: "USHORT",
                  value: i
                }), t.fields.push({
                  name: "leftSideBearing_" + r,
                  type: "SHORT",
                  value: a
                });
              }

              return t;
            }
          };
          var Ve = {
            make: function make(e) {
              for (var t = new $.Table("ltag", [{
                name: "version",
                type: "ULONG",
                value: 1
              }, {
                name: "flags",
                type: "ULONG",
                value: 0
              }, {
                name: "numTags",
                type: "ULONG",
                value: e.length
              }]), r = "", n = 12 + 4 * e.length, i = 0; i < e.length; ++i) {
                var a = r.indexOf(e[i]);
                a < 0 && (a = r.length, r += e[i]), t.fields.push({
                  name: "offset " + i,
                  type: "USHORT",
                  value: n + a
                }), t.fields.push({
                  name: "length " + i,
                  type: "USHORT",
                  value: e[i].length
                });
              }

              return t.fields.push({
                name: "stringPool",
                type: "CHARARRAY",
                value: r
              }), t;
            },
            parse: function parse(e, t) {
              var r = new se.Parser(e, t),
                  n = r.parseULong();
              R.argument(1 === n, "Unsupported ltag table version."), r.skip("uLong", 1);

              for (var i = r.parseULong(), a = [], o = 0; o < i; o++) {
                for (var s = "", l = t + r.parseUShort(), u = r.parseUShort(), h = l; h < l + u; ++h) {
                  s += String.fromCharCode(e.getInt8(h));
                }

                a.push(s);
              }

              return a;
            }
          };
          var He = {
            parse: function parse(e, t) {
              var r = {},
                  n = new se.Parser(e, t);
              return r.version = n.parseVersion(), r.numGlyphs = n.parseUShort(), 1 === r.version && (r.maxPoints = n.parseUShort(), r.maxContours = n.parseUShort(), r.maxCompositePoints = n.parseUShort(), r.maxCompositeContours = n.parseUShort(), r.maxZones = n.parseUShort(), r.maxTwilightPoints = n.parseUShort(), r.maxStorage = n.parseUShort(), r.maxFunctionDefs = n.parseUShort(), r.maxInstructionDefs = n.parseUShort(), r.maxStackElements = n.parseUShort(), r.maxSizeOfInstructions = n.parseUShort(), r.maxComponentElements = n.parseUShort(), r.maxComponentDepth = n.parseUShort()), r;
            },
            make: function make(e) {
              return new $.Table("maxp", [{
                name: "version",
                type: "FIXED",
                value: 20480
              }, {
                name: "numGlyphs",
                type: "USHORT",
                value: e
              }]);
            }
          },
              We = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
              qe = {
            0: "en",
            1: "fr",
            2: "de",
            3: "it",
            4: "nl",
            5: "sv",
            6: "es",
            7: "da",
            8: "pt",
            9: "no",
            10: "he",
            11: "ja",
            12: "ar",
            13: "fi",
            14: "el",
            15: "is",
            16: "mt",
            17: "tr",
            18: "hr",
            19: "zh-Hant",
            20: "ur",
            21: "hi",
            22: "th",
            23: "ko",
            24: "lt",
            25: "pl",
            26: "hu",
            27: "es",
            28: "lv",
            29: "se",
            30: "fo",
            31: "fa",
            32: "ru",
            33: "zh",
            34: "nl-BE",
            35: "ga",
            36: "sq",
            37: "ro",
            38: "cz",
            39: "sk",
            40: "si",
            41: "yi",
            42: "sr",
            43: "mk",
            44: "bg",
            45: "uk",
            46: "be",
            47: "uz",
            48: "kk",
            49: "az-Cyrl",
            50: "az-Arab",
            51: "hy",
            52: "ka",
            53: "mo",
            54: "ky",
            55: "tg",
            56: "tk",
            57: "mn-CN",
            58: "mn",
            59: "ps",
            60: "ks",
            61: "ku",
            62: "sd",
            63: "bo",
            64: "ne",
            65: "sa",
            66: "mr",
            67: "bn",
            68: "as",
            69: "gu",
            70: "pa",
            71: "or",
            72: "ml",
            73: "kn",
            74: "ta",
            75: "te",
            76: "si",
            77: "my",
            78: "km",
            79: "lo",
            80: "vi",
            81: "id",
            82: "tl",
            83: "ms",
            84: "ms-Arab",
            85: "am",
            86: "ti",
            87: "om",
            88: "so",
            89: "sw",
            90: "rw",
            91: "rn",
            92: "ny",
            93: "mg",
            94: "eo",
            128: "cy",
            129: "eu",
            130: "ca",
            131: "la",
            132: "qu",
            133: "gn",
            134: "ay",
            135: "tt",
            136: "ug",
            137: "dz",
            138: "jv",
            139: "su",
            140: "gl",
            141: "af",
            142: "br",
            143: "iu",
            144: "gd",
            145: "gv",
            146: "ga",
            147: "to",
            148: "el-polyton",
            149: "kl",
            150: "az",
            151: "nn"
          },
              Xe = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 5,
            11: 1,
            12: 4,
            13: 0,
            14: 6,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 2,
            20: 4,
            21: 9,
            22: 21,
            23: 3,
            24: 29,
            25: 29,
            26: 29,
            27: 29,
            28: 29,
            29: 0,
            30: 0,
            31: 4,
            32: 7,
            33: 25,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 29,
            39: 29,
            40: 0,
            41: 5,
            42: 7,
            43: 7,
            44: 7,
            45: 7,
            46: 7,
            47: 7,
            48: 7,
            49: 7,
            50: 4,
            51: 24,
            52: 23,
            53: 7,
            54: 7,
            55: 7,
            56: 7,
            57: 27,
            58: 7,
            59: 4,
            60: 4,
            61: 4,
            62: 4,
            63: 26,
            64: 9,
            65: 9,
            66: 9,
            67: 13,
            68: 13,
            69: 11,
            70: 10,
            71: 12,
            72: 17,
            73: 16,
            74: 14,
            75: 15,
            76: 18,
            77: 19,
            78: 20,
            79: 22,
            80: 30,
            81: 0,
            82: 0,
            83: 0,
            84: 4,
            85: 28,
            86: 28,
            87: 28,
            88: 0,
            89: 0,
            90: 0,
            91: 0,
            92: 0,
            93: 0,
            94: 0,
            128: 0,
            129: 0,
            130: 0,
            131: 0,
            132: 0,
            133: 0,
            134: 0,
            135: 7,
            136: 4,
            137: 26,
            138: 0,
            139: 0,
            140: 0,
            141: 0,
            142: 0,
            143: 28,
            144: 0,
            145: 0,
            146: 0,
            147: 0,
            148: 6,
            149: 0,
            150: 0,
            151: 0
          },
              Ye = {
            1078: "af",
            1052: "sq",
            1156: "gsw",
            1118: "am",
            5121: "ar-DZ",
            15361: "ar-BH",
            3073: "ar",
            2049: "ar-IQ",
            11265: "ar-JO",
            13313: "ar-KW",
            12289: "ar-LB",
            4097: "ar-LY",
            6145: "ary",
            8193: "ar-OM",
            16385: "ar-QA",
            1025: "ar-SA",
            10241: "ar-SY",
            7169: "aeb",
            14337: "ar-AE",
            9217: "ar-YE",
            1067: "hy",
            1101: "as",
            2092: "az-Cyrl",
            1068: "az",
            1133: "ba",
            1069: "eu",
            1059: "be",
            2117: "bn",
            1093: "bn-IN",
            8218: "bs-Cyrl",
            5146: "bs",
            1150: "br",
            1026: "bg",
            1027: "ca",
            3076: "zh-HK",
            5124: "zh-MO",
            2052: "zh",
            4100: "zh-SG",
            1028: "zh-TW",
            1155: "co",
            1050: "hr",
            4122: "hr-BA",
            1029: "cs",
            1030: "da",
            1164: "prs",
            1125: "dv",
            2067: "nl-BE",
            1043: "nl",
            3081: "en-AU",
            10249: "en-BZ",
            4105: "en-CA",
            9225: "en-029",
            16393: "en-IN",
            6153: "en-IE",
            8201: "en-JM",
            17417: "en-MY",
            5129: "en-NZ",
            13321: "en-PH",
            18441: "en-SG",
            7177: "en-ZA",
            11273: "en-TT",
            2057: "en-GB",
            1033: "en",
            12297: "en-ZW",
            1061: "et",
            1080: "fo",
            1124: "fil",
            1035: "fi",
            2060: "fr-BE",
            3084: "fr-CA",
            1036: "fr",
            5132: "fr-LU",
            6156: "fr-MC",
            4108: "fr-CH",
            1122: "fy",
            1110: "gl",
            1079: "ka",
            3079: "de-AT",
            1031: "de",
            5127: "de-LI",
            4103: "de-LU",
            2055: "de-CH",
            1032: "el",
            1135: "kl",
            1095: "gu",
            1128: "ha",
            1037: "he",
            1081: "hi",
            1038: "hu",
            1039: "is",
            1136: "ig",
            1057: "id",
            1117: "iu",
            2141: "iu-Latn",
            2108: "ga",
            1076: "xh",
            1077: "zu",
            1040: "it",
            2064: "it-CH",
            1041: "ja",
            1099: "kn",
            1087: "kk",
            1107: "km",
            1158: "quc",
            1159: "rw",
            1089: "sw",
            1111: "kok",
            1042: "ko",
            1088: "ky",
            1108: "lo",
            1062: "lv",
            1063: "lt",
            2094: "dsb",
            1134: "lb",
            1071: "mk",
            2110: "ms-BN",
            1086: "ms",
            1100: "ml",
            1082: "mt",
            1153: "mi",
            1146: "arn",
            1102: "mr",
            1148: "moh",
            1104: "mn",
            2128: "mn-CN",
            1121: "ne",
            1044: "nb",
            2068: "nn",
            1154: "oc",
            1096: "or",
            1123: "ps",
            1045: "pl",
            1046: "pt",
            2070: "pt-PT",
            1094: "pa",
            1131: "qu-BO",
            2155: "qu-EC",
            3179: "qu",
            1048: "ro",
            1047: "rm",
            1049: "ru",
            9275: "smn",
            4155: "smj-NO",
            5179: "smj",
            3131: "se-FI",
            1083: "se",
            2107: "se-SE",
            8251: "sms",
            6203: "sma-NO",
            7227: "sms",
            1103: "sa",
            7194: "sr-Cyrl-BA",
            3098: "sr",
            6170: "sr-Latn-BA",
            2074: "sr-Latn",
            1132: "nso",
            1074: "tn",
            1115: "si",
            1051: "sk",
            1060: "sl",
            11274: "es-AR",
            16394: "es-BO",
            13322: "es-CL",
            9226: "es-CO",
            5130: "es-CR",
            7178: "es-DO",
            12298: "es-EC",
            17418: "es-SV",
            4106: "es-GT",
            18442: "es-HN",
            2058: "es-MX",
            19466: "es-NI",
            6154: "es-PA",
            15370: "es-PY",
            10250: "es-PE",
            20490: "es-PR",
            3082: "es",
            1034: "es",
            21514: "es-US",
            14346: "es-UY",
            8202: "es-VE",
            2077: "sv-FI",
            1053: "sv",
            1114: "syr",
            1064: "tg",
            2143: "tzm",
            1097: "ta",
            1092: "tt",
            1098: "te",
            1054: "th",
            1105: "bo",
            1055: "tr",
            1090: "tk",
            1152: "ug",
            1058: "uk",
            1070: "hsb",
            1056: "ur",
            2115: "uz-Cyrl",
            1091: "uz",
            1066: "vi",
            1106: "cy",
            1160: "wo",
            1157: "sah",
            1144: "ii",
            1130: "yo"
          };

          function Ze(e, t, r) {
            switch (e) {
              case 0:
                if (65535 === t) return "und";
                if (r) return r[t];
                break;

              case 1:
                return qe[t];

              case 3:
                return Ye[t];
            }
          }

          var Ke = "utf-16",
              Qe = {
            0: "macintosh",
            1: "x-mac-japanese",
            2: "x-mac-chinesetrad",
            3: "x-mac-korean",
            6: "x-mac-greek",
            7: "x-mac-cyrillic",
            9: "x-mac-devanagai",
            10: "x-mac-gurmukhi",
            11: "x-mac-gujarati",
            12: "x-mac-oriya",
            13: "x-mac-bengali",
            14: "x-mac-tamil",
            15: "x-mac-telugu",
            16: "x-mac-kannada",
            17: "x-mac-malayalam",
            18: "x-mac-sinhalese",
            19: "x-mac-burmese",
            20: "x-mac-khmer",
            21: "x-mac-thai",
            22: "x-mac-lao",
            23: "x-mac-georgian",
            24: "x-mac-armenian",
            25: "x-mac-chinesesimp",
            26: "x-mac-tibetan",
            27: "x-mac-mongolian",
            28: "x-mac-ethiopic",
            29: "x-mac-ce",
            30: "x-mac-vietnamese",
            31: "x-mac-extarabic"
          },
              Je = {
            15: "x-mac-icelandic",
            17: "x-mac-turkish",
            18: "x-mac-croatian",
            24: "x-mac-ce",
            25: "x-mac-ce",
            26: "x-mac-ce",
            27: "x-mac-ce",
            28: "x-mac-ce",
            30: "x-mac-icelandic",
            37: "x-mac-romanian",
            38: "x-mac-ce",
            39: "x-mac-ce",
            40: "x-mac-ce",
            143: "x-mac-inuit",
            146: "x-mac-gaelic"
          };

          function $e(e, t, r) {
            switch (e) {
              case 0:
                return Ke;

              case 1:
                return Je[r] || Qe[t];

              case 3:
                if (1 === t || 10 === t) return Ke;
            }
          }

          function et(e) {
            var t = {};

            for (var r in e) {
              t[e[r]] = parseInt(r);
            }

            return t;
          }

          function tt(e, t, r, n, i, a) {
            return new $.Record("NameRecord", [{
              name: "platformID",
              type: "USHORT",
              value: e
            }, {
              name: "encodingID",
              type: "USHORT",
              value: t
            }, {
              name: "languageID",
              type: "USHORT",
              value: r
            }, {
              name: "nameID",
              type: "USHORT",
              value: n
            }, {
              name: "length",
              type: "USHORT",
              value: i
            }, {
              name: "offset",
              type: "USHORT",
              value: a
            }]);
          }

          function rt(e, t) {
            var r = function (e, t) {
              var r = e.length,
                  n = t.length - r + 1;

              e: for (var i = 0; i < n; i++) {
                for (; i < n; i++) {
                  for (var a = 0; a < r; a++) {
                    if (t[i + a] !== e[a]) continue e;
                  }

                  return i;
                }
              }

              return -1;
            }(e, t);

            if (r < 0) {
              r = t.length;

              for (var n = 0, i = e.length; n < i; ++n) {
                t.push(e[n]);
              }
            }

            return r;
          }

          var nt = {
            parse: function parse(e, t, r) {
              for (var n = {}, i = new se.Parser(e, t), a = i.parseUShort(), o = i.parseUShort(), s = i.offset + i.parseUShort(), l = 0; l < o; l++) {
                var u = i.parseUShort(),
                    h = i.parseUShort(),
                    f = i.parseUShort(),
                    c = i.parseUShort(),
                    p = We[c] || c,
                    d = i.parseUShort(),
                    g = i.parseUShort(),
                    m = Ze(u, f, r),
                    v = $e(u, h, f);

                if (void 0 !== v && void 0 !== m) {
                  var y = void 0;

                  if (y = v === Ke ? k.UTF16(e, s + g, d) : k.MACSTRING(e, s + g, d, v)) {
                    var b = n[p];
                    void 0 === b && (b = n[p] = {}), b[m] = y;
                  }
                }
              }

              return 1 === a && i.parseUShort(), n;
            },
            make: function make(e, t) {
              var r,
                  n = [],
                  i = {},
                  a = et(We);

              for (var o in e) {
                var s = a[o];
                if (void 0 === s && (s = o), r = parseInt(s), isNaN(r)) throw new Error('Name table entry "' + o + '" does not exist, see nameTableNames for complete list.');
                i[r] = e[o], n.push(r);
              }

              for (var l = et(qe), u = et(Ye), h = [], f = [], c = 0; c < n.length; c++) {
                var p = i[r = n[c]];

                for (var d in p) {
                  var g = p[d],
                      m = 1,
                      v = l[d],
                      y = Xe[v],
                      b = $e(m, y, v),
                      _ = D.MACSTRING(g, b);

                  void 0 === _ && (m = 0, (v = t.indexOf(d)) < 0 && (v = t.length, t.push(d)), y = 4, _ = D.UTF16(g));
                  var x = rt(_, f);
                  h.push(tt(m, y, v, r, _.length, x));
                  var S = u[d];

                  if (void 0 !== S) {
                    var w = D.UTF16(g),
                        T = rt(w, f);
                    h.push(tt(3, 1, S, r, w.length, T));
                  }
                }
              }

              h.sort(function (e, t) {
                return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID;
              });

              for (var E = new $.Table("name", [{
                name: "format",
                type: "USHORT",
                value: 0
              }, {
                name: "count",
                type: "USHORT",
                value: h.length
              }, {
                name: "stringOffset",
                type: "USHORT",
                value: 6 + 12 * h.length
              }]), C = 0; C < h.length; C++) {
                E.fields.push({
                  name: "record_" + C,
                  type: "RECORD",
                  value: h[C]
                });
              }

              return E.fields.push({
                name: "strings",
                type: "LITERAL",
                value: f
              }), E;
            }
          },
              it = [{
            begin: 0,
            end: 127
          }, {
            begin: 128,
            end: 255
          }, {
            begin: 256,
            end: 383
          }, {
            begin: 384,
            end: 591
          }, {
            begin: 592,
            end: 687
          }, {
            begin: 688,
            end: 767
          }, {
            begin: 768,
            end: 879
          }, {
            begin: 880,
            end: 1023
          }, {
            begin: 11392,
            end: 11519
          }, {
            begin: 1024,
            end: 1279
          }, {
            begin: 1328,
            end: 1423
          }, {
            begin: 1424,
            end: 1535
          }, {
            begin: 42240,
            end: 42559
          }, {
            begin: 1536,
            end: 1791
          }, {
            begin: 1984,
            end: 2047
          }, {
            begin: 2304,
            end: 2431
          }, {
            begin: 2432,
            end: 2559
          }, {
            begin: 2560,
            end: 2687
          }, {
            begin: 2688,
            end: 2815
          }, {
            begin: 2816,
            end: 2943
          }, {
            begin: 2944,
            end: 3071
          }, {
            begin: 3072,
            end: 3199
          }, {
            begin: 3200,
            end: 3327
          }, {
            begin: 3328,
            end: 3455
          }, {
            begin: 3584,
            end: 3711
          }, {
            begin: 3712,
            end: 3839
          }, {
            begin: 4256,
            end: 4351
          }, {
            begin: 6912,
            end: 7039
          }, {
            begin: 4352,
            end: 4607
          }, {
            begin: 7680,
            end: 7935
          }, {
            begin: 7936,
            end: 8191
          }, {
            begin: 8192,
            end: 8303
          }, {
            begin: 8304,
            end: 8351
          }, {
            begin: 8352,
            end: 8399
          }, {
            begin: 8400,
            end: 8447
          }, {
            begin: 8448,
            end: 8527
          }, {
            begin: 8528,
            end: 8591
          }, {
            begin: 8592,
            end: 8703
          }, {
            begin: 8704,
            end: 8959
          }, {
            begin: 8960,
            end: 9215
          }, {
            begin: 9216,
            end: 9279
          }, {
            begin: 9280,
            end: 9311
          }, {
            begin: 9312,
            end: 9471
          }, {
            begin: 9472,
            end: 9599
          }, {
            begin: 9600,
            end: 9631
          }, {
            begin: 9632,
            end: 9727
          }, {
            begin: 9728,
            end: 9983
          }, {
            begin: 9984,
            end: 10175
          }, {
            begin: 12288,
            end: 12351
          }, {
            begin: 12352,
            end: 12447
          }, {
            begin: 12448,
            end: 12543
          }, {
            begin: 12544,
            end: 12591
          }, {
            begin: 12592,
            end: 12687
          }, {
            begin: 43072,
            end: 43135
          }, {
            begin: 12800,
            end: 13055
          }, {
            begin: 13056,
            end: 13311
          }, {
            begin: 44032,
            end: 55215
          }, {
            begin: 55296,
            end: 57343
          }, {
            begin: 67840,
            end: 67871
          }, {
            begin: 19968,
            end: 40959
          }, {
            begin: 57344,
            end: 63743
          }, {
            begin: 12736,
            end: 12783
          }, {
            begin: 64256,
            end: 64335
          }, {
            begin: 64336,
            end: 65023
          }, {
            begin: 65056,
            end: 65071
          }, {
            begin: 65040,
            end: 65055
          }, {
            begin: 65104,
            end: 65135
          }, {
            begin: 65136,
            end: 65279
          }, {
            begin: 65280,
            end: 65519
          }, {
            begin: 65520,
            end: 65535
          }, {
            begin: 3840,
            end: 4095
          }, {
            begin: 1792,
            end: 1871
          }, {
            begin: 1920,
            end: 1983
          }, {
            begin: 3456,
            end: 3583
          }, {
            begin: 4096,
            end: 4255
          }, {
            begin: 4608,
            end: 4991
          }, {
            begin: 5024,
            end: 5119
          }, {
            begin: 5120,
            end: 5759
          }, {
            begin: 5760,
            end: 5791
          }, {
            begin: 5792,
            end: 5887
          }, {
            begin: 6016,
            end: 6143
          }, {
            begin: 6144,
            end: 6319
          }, {
            begin: 10240,
            end: 10495
          }, {
            begin: 40960,
            end: 42127
          }, {
            begin: 5888,
            end: 5919
          }, {
            begin: 66304,
            end: 66351
          }, {
            begin: 66352,
            end: 66383
          }, {
            begin: 66560,
            end: 66639
          }, {
            begin: 118784,
            end: 119039
          }, {
            begin: 119808,
            end: 120831
          }, {
            begin: 1044480,
            end: 1048573
          }, {
            begin: 65024,
            end: 65039
          }, {
            begin: 917504,
            end: 917631
          }, {
            begin: 6400,
            end: 6479
          }, {
            begin: 6480,
            end: 6527
          }, {
            begin: 6528,
            end: 6623
          }, {
            begin: 6656,
            end: 6687
          }, {
            begin: 11264,
            end: 11359
          }, {
            begin: 11568,
            end: 11647
          }, {
            begin: 19904,
            end: 19967
          }, {
            begin: 43008,
            end: 43055
          }, {
            begin: 65536,
            end: 65663
          }, {
            begin: 65856,
            end: 65935
          }, {
            begin: 66432,
            end: 66463
          }, {
            begin: 66464,
            end: 66527
          }, {
            begin: 66640,
            end: 66687
          }, {
            begin: 66688,
            end: 66735
          }, {
            begin: 67584,
            end: 67647
          }, {
            begin: 68096,
            end: 68191
          }, {
            begin: 119552,
            end: 119647
          }, {
            begin: 73728,
            end: 74751
          }, {
            begin: 119648,
            end: 119679
          }, {
            begin: 7040,
            end: 7103
          }, {
            begin: 7168,
            end: 7247
          }, {
            begin: 7248,
            end: 7295
          }, {
            begin: 43136,
            end: 43231
          }, {
            begin: 43264,
            end: 43311
          }, {
            begin: 43312,
            end: 43359
          }, {
            begin: 43520,
            end: 43615
          }, {
            begin: 65936,
            end: 65999
          }, {
            begin: 66e3,
            end: 66047
          }, {
            begin: 66208,
            end: 66271
          }, {
            begin: 127024,
            end: 127135
          }];
          var at = {
            parse: function parse(e, t) {
              var r = {},
                  n = new se.Parser(e, t);
              r.version = n.parseUShort(), r.xAvgCharWidth = n.parseShort(), r.usWeightClass = n.parseUShort(), r.usWidthClass = n.parseUShort(), r.fsType = n.parseUShort(), r.ySubscriptXSize = n.parseShort(), r.ySubscriptYSize = n.parseShort(), r.ySubscriptXOffset = n.parseShort(), r.ySubscriptYOffset = n.parseShort(), r.ySuperscriptXSize = n.parseShort(), r.ySuperscriptYSize = n.parseShort(), r.ySuperscriptXOffset = n.parseShort(), r.ySuperscriptYOffset = n.parseShort(), r.yStrikeoutSize = n.parseShort(), r.yStrikeoutPosition = n.parseShort(), r.sFamilyClass = n.parseShort(), r.panose = [];

              for (var i = 0; i < 10; i++) {
                r.panose[i] = n.parseByte();
              }

              return r.ulUnicodeRange1 = n.parseULong(), r.ulUnicodeRange2 = n.parseULong(), r.ulUnicodeRange3 = n.parseULong(), r.ulUnicodeRange4 = n.parseULong(), r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()), r.fsSelection = n.parseUShort(), r.usFirstCharIndex = n.parseUShort(), r.usLastCharIndex = n.parseUShort(), r.sTypoAscender = n.parseShort(), r.sTypoDescender = n.parseShort(), r.sTypoLineGap = n.parseShort(), r.usWinAscent = n.parseUShort(), r.usWinDescent = n.parseUShort(), 1 <= r.version && (r.ulCodePageRange1 = n.parseULong(), r.ulCodePageRange2 = n.parseULong()), 2 <= r.version && (r.sxHeight = n.parseShort(), r.sCapHeight = n.parseShort(), r.usDefaultChar = n.parseUShort(), r.usBreakChar = n.parseUShort(), r.usMaxContent = n.parseUShort()), r;
            },
            make: function make(e) {
              return new $.Table("OS/2", [{
                name: "version",
                type: "USHORT",
                value: 3
              }, {
                name: "xAvgCharWidth",
                type: "SHORT",
                value: 0
              }, {
                name: "usWeightClass",
                type: "USHORT",
                value: 0
              }, {
                name: "usWidthClass",
                type: "USHORT",
                value: 0
              }, {
                name: "fsType",
                type: "USHORT",
                value: 0
              }, {
                name: "ySubscriptXSize",
                type: "SHORT",
                value: 650
              }, {
                name: "ySubscriptYSize",
                type: "SHORT",
                value: 699
              }, {
                name: "ySubscriptXOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "ySubscriptYOffset",
                type: "SHORT",
                value: 140
              }, {
                name: "ySuperscriptXSize",
                type: "SHORT",
                value: 650
              }, {
                name: "ySuperscriptYSize",
                type: "SHORT",
                value: 699
              }, {
                name: "ySuperscriptXOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "ySuperscriptYOffset",
                type: "SHORT",
                value: 479
              }, {
                name: "yStrikeoutSize",
                type: "SHORT",
                value: 49
              }, {
                name: "yStrikeoutPosition",
                type: "SHORT",
                value: 258
              }, {
                name: "sFamilyClass",
                type: "SHORT",
                value: 0
              }, {
                name: "bFamilyType",
                type: "BYTE",
                value: 0
              }, {
                name: "bSerifStyle",
                type: "BYTE",
                value: 0
              }, {
                name: "bWeight",
                type: "BYTE",
                value: 0
              }, {
                name: "bProportion",
                type: "BYTE",
                value: 0
              }, {
                name: "bContrast",
                type: "BYTE",
                value: 0
              }, {
                name: "bStrokeVariation",
                type: "BYTE",
                value: 0
              }, {
                name: "bArmStyle",
                type: "BYTE",
                value: 0
              }, {
                name: "bLetterform",
                type: "BYTE",
                value: 0
              }, {
                name: "bMidline",
                type: "BYTE",
                value: 0
              }, {
                name: "bXHeight",
                type: "BYTE",
                value: 0
              }, {
                name: "ulUnicodeRange1",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange2",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange3",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange4",
                type: "ULONG",
                value: 0
              }, {
                name: "achVendID",
                type: "CHARARRAY",
                value: "XXXX"
              }, {
                name: "fsSelection",
                type: "USHORT",
                value: 0
              }, {
                name: "usFirstCharIndex",
                type: "USHORT",
                value: 0
              }, {
                name: "usLastCharIndex",
                type: "USHORT",
                value: 0
              }, {
                name: "sTypoAscender",
                type: "SHORT",
                value: 0
              }, {
                name: "sTypoDescender",
                type: "SHORT",
                value: 0
              }, {
                name: "sTypoLineGap",
                type: "SHORT",
                value: 0
              }, {
                name: "usWinAscent",
                type: "USHORT",
                value: 0
              }, {
                name: "usWinDescent",
                type: "USHORT",
                value: 0
              }, {
                name: "ulCodePageRange1",
                type: "ULONG",
                value: 0
              }, {
                name: "ulCodePageRange2",
                type: "ULONG",
                value: 0
              }, {
                name: "sxHeight",
                type: "SHORT",
                value: 0
              }, {
                name: "sCapHeight",
                type: "SHORT",
                value: 0
              }, {
                name: "usDefaultChar",
                type: "USHORT",
                value: 0
              }, {
                name: "usBreakChar",
                type: "USHORT",
                value: 0
              }, {
                name: "usMaxContext",
                type: "USHORT",
                value: 0
              }], e);
            },
            unicodeRanges: it,
            getUnicodeRange: function getUnicodeRange(e) {
              for (var t = 0; t < it.length; t += 1) {
                var r = it[t];
                if (e >= r.begin && e < r.end) return t;
              }

              return -1;
            }
          };
          var ot = {
            parse: function parse(e, t) {
              var r = {},
                  n = new se.Parser(e, t);

              switch (r.version = n.parseVersion(), r.italicAngle = n.parseFixed(), r.underlinePosition = n.parseShort(), r.underlineThickness = n.parseShort(), r.isFixedPitch = n.parseULong(), r.minMemType42 = n.parseULong(), r.maxMemType42 = n.parseULong(), r.minMemType1 = n.parseULong(), r.maxMemType1 = n.parseULong(), r.version) {
                case 1:
                  r.names = ce.slice();
                  break;

                case 2:
                  r.numberOfGlyphs = n.parseUShort(), r.glyphNameIndex = new Array(r.numberOfGlyphs);

                  for (var i = 0; i < r.numberOfGlyphs; i++) {
                    r.glyphNameIndex[i] = n.parseUShort();
                  }

                  r.names = [];

                  for (var a = 0; a < r.numberOfGlyphs; a++) {
                    if (r.glyphNameIndex[a] >= ce.length) {
                      var o = n.parseChar();
                      r.names.push(n.parseString(o));
                    }
                  }

                  break;

                case 2.5:
                  r.numberOfGlyphs = n.parseUShort(), r.offset = new Array(r.numberOfGlyphs);

                  for (var s = 0; s < r.numberOfGlyphs; s++) {
                    r.offset[s] = n.parseChar();
                  }

              }

              return r;
            },
            make: function make() {
              return new $.Table("post", [{
                name: "version",
                type: "FIXED",
                value: 196608
              }, {
                name: "italicAngle",
                type: "FIXED",
                value: 0
              }, {
                name: "underlinePosition",
                type: "FWORD",
                value: 0
              }, {
                name: "underlineThickness",
                type: "FWORD",
                value: 0
              }, {
                name: "isFixedPitch",
                type: "ULONG",
                value: 0
              }, {
                name: "minMemType42",
                type: "ULONG",
                value: 0
              }, {
                name: "maxMemType42",
                type: "ULONG",
                value: 0
              }, {
                name: "minMemType1",
                type: "ULONG",
                value: 0
              }, {
                name: "maxMemType1",
                type: "ULONG",
                value: 0
              }]);
            }
          },
              st = new Array(9);
          st[1] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              substFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              deltaGlyphId: this.parseUShort()
            } : 2 === t ? {
              substFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              substitute: this.parseOffset16List()
            } : void R.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
          }, st[2] = function () {
            var e = this.parseUShort();
            return R.argument(1 === e, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              sequences: this.parseListOfLists()
            };
          }, st[3] = function () {
            var e = this.parseUShort();
            return R.argument(1 === e, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              alternateSets: this.parseListOfLists()
            };
          }, st[4] = function () {
            var e = this.parseUShort();
            return R.argument(1 === e, "GSUB ligature table identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              ligatureSets: this.parseListOfLists(function () {
                return {
                  ligGlyph: this.parseUShort(),
                  components: this.parseUShortList(this.parseUShort() - 1)
                };
              })
            };
          };
          var lt = {
            sequenceIndex: ae.uShort,
            lookupListIndex: ae.uShort
          };
          st[5] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            if (1 === t) return {
              substFormat: t,
              coverage: this.parsePointer(ae.coverage),
              ruleSets: this.parseListOfLists(function () {
                var e = this.parseUShort(),
                    t = this.parseUShort();
                return {
                  input: this.parseUShortList(e - 1),
                  lookupRecords: this.parseRecordList(t, lt)
                };
              })
            };
            if (2 === t) return {
              substFormat: t,
              coverage: this.parsePointer(ae.coverage),
              classDef: this.parsePointer(ae.classDef),
              classSets: this.parseListOfLists(function () {
                var e = this.parseUShort(),
                    t = this.parseUShort();
                return {
                  classes: this.parseUShortList(e - 1),
                  lookupRecords: this.parseRecordList(t, lt)
                };
              })
            };

            if (3 === t) {
              var r = this.parseUShort(),
                  n = this.parseUShort();
              return {
                substFormat: t,
                coverages: this.parseList(r, ae.pointer(ae.coverage)),
                lookupRecords: this.parseRecordList(n, lt)
              };
            }

            R.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
          }, st[6] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              substFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              chainRuleSets: this.parseListOfLists(function () {
                return {
                  backtrack: this.parseUShortList(),
                  input: this.parseUShortList(this.parseShort() - 1),
                  lookahead: this.parseUShortList(),
                  lookupRecords: this.parseRecordList(lt)
                };
              })
            } : 2 === t ? {
              substFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              backtrackClassDef: this.parsePointer(ae.classDef),
              inputClassDef: this.parsePointer(ae.classDef),
              lookaheadClassDef: this.parsePointer(ae.classDef),
              chainClassSet: this.parseListOfLists(function () {
                return {
                  backtrack: this.parseUShortList(),
                  input: this.parseUShortList(this.parseShort() - 1),
                  lookahead: this.parseUShortList(),
                  lookupRecords: this.parseRecordList(lt)
                };
              })
            } : 3 === t ? {
              substFormat: 3,
              backtrackCoverage: this.parseList(ae.pointer(ae.coverage)),
              inputCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookaheadCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookupRecords: this.parseRecordList(lt)
            } : void R.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
          }, st[7] = function () {
            var e = this.parseUShort();
            R.argument(1 === e, "GSUB Extension Substitution subtable identifier-format must be 1");
            var t = this.parseUShort(),
                r = new ae(this.data, this.offset + this.parseULong());
            return {
              substFormat: 1,
              lookupType: t,
              extension: st[t].call(r)
            };
          }, st[8] = function () {
            var e = this.parseUShort();
            return R.argument(1 === e, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              backtrackCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookaheadCoverage: this.parseList(ae.pointer(ae.coverage)),
              substitutes: this.parseUShortList()
            };
          };
          var ut = new Array(9);
          ut[1] = function (e) {
            return 1 === e.substFormat ? new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }, {
              name: "deltaGlyphID",
              type: "USHORT",
              value: e.deltaGlyphId
            }]) : new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 2
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.ushortList("substitute", e.substitute)));
          }, ut[3] = function (e) {
            return R.assert(1 === e.substFormat, "Lookup type 3 substFormat must be 1."), new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.tableList("altSet", e.alternateSets, function (e) {
              return new $.Table("alternateSetTable", $.ushortList("alternate", e));
            })));
          }, ut[4] = function (e) {
            return R.assert(1 === e.substFormat, "Lookup type 4 substFormat must be 1."), new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.tableList("ligSet", e.ligatureSets, function (e) {
              return new $.Table("ligatureSetTable", $.tableList("ligature", e, function (e) {
                return new $.Table("ligatureTable", [{
                  name: "ligGlyph",
                  type: "USHORT",
                  value: e.ligGlyph
                }].concat($.ushortList("component", e.components, e.components.length + 1)));
              }));
            })));
          };
          var ht = {
            parse: function parse(e, t) {
              var r = new ae(e, t = t || 0),
                  n = r.parseVersion(1);
              return R.argument(1 === n || 1.1 === n, "Unsupported GSUB table version."), 1 === n ? {
                version: n,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(st)
              } : {
                version: n,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(st),
                variations: r.parseFeatureVariationsList()
              };
            },
            make: function make(e) {
              return new $.Table("GSUB", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "scripts",
                type: "TABLE",
                value: new $.ScriptList(e.scripts)
              }, {
                name: "features",
                type: "TABLE",
                value: new $.FeatureList(e.features)
              }, {
                name: "lookups",
                type: "TABLE",
                value: new $.LookupList(e.lookups, ut)
              }]);
            }
          };
          var ft = {
            parse: function parse(e, t) {
              var r = new se.Parser(e, t),
                  n = r.parseULong();
              R.argument(1 === n, "Unsupported META table version."), r.parseULong(), r.parseULong();

              for (var i = r.parseULong(), a = {}, o = 0; o < i; o++) {
                var s = r.parseTag(),
                    l = r.parseULong(),
                    u = r.parseULong(),
                    h = k.UTF8(e, t + l, u);
                a[s] = h;
              }

              return a;
            },
            make: function make(e) {
              var t = Object.keys(e).length,
                  r = "",
                  n = 16 + 12 * t,
                  i = new $.Table("meta", [{
                name: "version",
                type: "ULONG",
                value: 1
              }, {
                name: "flags",
                type: "ULONG",
                value: 0
              }, {
                name: "offset",
                type: "ULONG",
                value: n
              }, {
                name: "numTags",
                type: "ULONG",
                value: t
              }]);

              for (var a in e) {
                var o = r.length;
                r += e[a], i.fields.push({
                  name: "tag " + a,
                  type: "TAG",
                  value: a
                }), i.fields.push({
                  name: "offset " + a,
                  type: "ULONG",
                  value: n + o
                }), i.fields.push({
                  name: "length " + a,
                  type: "ULONG",
                  value: e[a].length
                });
              }

              return i.fields.push({
                name: "stringPool",
                type: "CHARARRAY",
                value: r
              }), i;
            }
          };

          function ct(e) {
            return Math.log(e) / Math.log(2) | 0;
          }

          function pt(e) {
            for (; e.length % 4 != 0;) {
              e.push(0);
            }

            for (var t = 0, r = 0; r < e.length; r += 4) {
              t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
            }

            return t %= Math.pow(2, 32);
          }

          function dt(e, t, r, n) {
            return new $.Record("Table Record", [{
              name: "tag",
              type: "TAG",
              value: void 0 !== e ? e : ""
            }, {
              name: "checkSum",
              type: "ULONG",
              value: void 0 !== t ? t : 0
            }, {
              name: "offset",
              type: "ULONG",
              value: void 0 !== r ? r : 0
            }, {
              name: "length",
              type: "ULONG",
              value: void 0 !== n ? n : 0
            }]);
          }

          function gt(e) {
            var t = new $.Table("sfnt", [{
              name: "version",
              type: "TAG",
              value: "OTTO"
            }, {
              name: "numTables",
              type: "USHORT",
              value: 0
            }, {
              name: "searchRange",
              type: "USHORT",
              value: 0
            }, {
              name: "entrySelector",
              type: "USHORT",
              value: 0
            }, {
              name: "rangeShift",
              type: "USHORT",
              value: 0
            }]);
            t.tables = e, t.numTables = e.length;
            var r = Math.pow(2, ct(t.numTables));
            t.searchRange = 16 * r, t.entrySelector = ct(r), t.rangeShift = 16 * t.numTables - t.searchRange;

            for (var n = [], i = [], a = t.sizeOf() + dt().sizeOf() * t.numTables; a % 4 != 0;) {
              a += 1, i.push({
                name: "padding",
                type: "BYTE",
                value: 0
              });
            }

            for (var o = 0; o < e.length; o += 1) {
              var s = e[o];
              R.argument(4 === s.tableName.length, "Table name" + s.tableName + " is invalid.");
              var l = s.sizeOf(),
                  u = dt(s.tableName, pt(s.encode()), a, l);

              for (n.push({
                name: u.tag + " Table Record",
                type: "RECORD",
                value: u
              }), i.push({
                name: s.tableName + " table",
                type: "RECORD",
                value: s
              }), a += l, R.argument(!isNaN(a), "Something went wrong calculating the offset."); a % 4 != 0;) {
                a += 1, i.push({
                  name: "padding",
                  type: "BYTE",
                  value: 0
                });
              }
            }

            return n.sort(function (e, t) {
              return e.value.tag > t.value.tag ? 1 : -1;
            }), t.fields = t.fields.concat(n), t.fields = t.fields.concat(i), t;
          }

          function mt(e, t, r) {
            for (var n = 0; n < t.length; n += 1) {
              var i = e.charToGlyphIndex(t[n]);
              if (0 < i) return e.glyphs.get(i).getMetrics();
            }

            return r;
          }

          var vt = {
            make: gt,
            fontToTable: function fontToTable(e) {
              for (var t, r = [], n = [], i = [], a = [], o = [], s = [], l = [], u = 0, h = 0, f = 0, c = 0, p = 0, d = 0; d < e.glyphs.length; d += 1) {
                var g = e.glyphs.get(d),
                    m = 0 | g.unicode;
                if (isNaN(g.advanceWidth)) throw new Error("Glyph " + g.name + " (" + d + "): advanceWidth is not a number.");
                (m < t || void 0 === t) && 0 < m && (t = m), u < m && (u = m);
                var v = at.getUnicodeRange(m);
                if (v < 32) h |= 1 << v;else if (v < 64) f |= 1 << v - 32;else if (v < 96) c |= 1 << v - 64;else {
                  if (!(v < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                  p |= 1 << v - 96;
                }

                if (".notdef" !== g.name) {
                  var y = g.getMetrics();
                  r.push(y.xMin), n.push(y.yMin), i.push(y.xMax), a.push(y.yMax), s.push(y.leftSideBearing), l.push(y.rightSideBearing), o.push(g.advanceWidth);
                }
              }

              var b = {
                xMin: Math.min.apply(null, r),
                yMin: Math.min.apply(null, n),
                xMax: Math.max.apply(null, i),
                yMax: Math.max.apply(null, a),
                advanceWidthMax: Math.max.apply(null, o),
                advanceWidthAvg: function (e) {
                  for (var t = 0, r = 0; r < e.length; r += 1) {
                    t += e[r];
                  }

                  return t / e.length;
                }(o),
                minLeftSideBearing: Math.min.apply(null, s),
                maxLeftSideBearing: Math.max.apply(null, s),
                minRightSideBearing: Math.min.apply(null, l)
              };
              b.ascender = e.ascender, b.descender = e.descender;

              var _ = Be.make({
                flags: 3,
                unitsPerEm: e.unitsPerEm,
                xMin: b.xMin,
                yMin: b.yMin,
                xMax: b.xMax,
                yMax: b.yMax,
                lowestRecPPEM: 3,
                createdTimestamp: e.createdTimestamp
              }),
                  x = je.make({
                ascender: b.ascender,
                descender: b.descender,
                advanceWidthMax: b.advanceWidthMax,
                minLeftSideBearing: b.minLeftSideBearing,
                minRightSideBearing: b.minRightSideBearing,
                xMaxExtent: b.maxLeftSideBearing + (b.xMax - b.xMin),
                numberOfHMetrics: e.glyphs.length
              }),
                  S = He.make(e.glyphs.length),
                  w = at.make({
                xAvgCharWidth: Math.round(b.advanceWidthAvg),
                usWeightClass: e.tables.os2.usWeightClass,
                usWidthClass: e.tables.os2.usWidthClass,
                usFirstCharIndex: t,
                usLastCharIndex: u,
                ulUnicodeRange1: h,
                ulUnicodeRange2: f,
                ulUnicodeRange3: c,
                ulUnicodeRange4: p,
                fsSelection: e.tables.os2.fsSelection,
                sTypoAscender: b.ascender,
                sTypoDescender: b.descender,
                sTypoLineGap: 0,
                usWinAscent: b.yMax,
                usWinDescent: Math.abs(b.yMin),
                ulCodePageRange1: 1,
                sxHeight: mt(e, "xyvw", {
                  yMax: Math.round(b.ascender / 2)
                }).yMax,
                sCapHeight: mt(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", b).yMax,
                usDefaultChar: e.hasChar(" ") ? 32 : 0,
                usBreakChar: e.hasChar(" ") ? 32 : 0
              }),
                  T = ze.make(e.glyphs),
                  E = le.make(e.glyphs),
                  C = e.getEnglishName("fontFamily"),
                  L = e.getEnglishName("fontSubfamily"),
                  M = C + " " + L,
                  P = e.getEnglishName("postScriptName");

              P = P || C.replace(/\s/g, "") + "-" + L;
              var R = {};

              for (var O in e.names) {
                R[O] = e.names[O];
              }

              R.uniqueID || (R.uniqueID = {
                en: e.getEnglishName("manufacturer") + ":" + M
              }), R.postScriptName || (R.postScriptName = {
                en: P
              }), R.preferredFamily || (R.preferredFamily = e.names.fontFamily), R.preferredSubfamily || (R.preferredSubfamily = e.names.fontSubfamily);
              var k = [],
                  D = nt.make(R, k),
                  A = 0 < k.length ? Ve.make(k) : void 0,
                  I = ot.make(),
                  U = Ge.make(e.glyphs, {
                version: e.getEnglishName("version"),
                fullName: M,
                familyName: C,
                weightName: L,
                postScriptName: P,
                unitsPerEm: e.unitsPerEm,
                fontBBox: [0, b.yMin, b.ascender, b.advanceWidthMax]
              }),
                  N = e.metas && 0 < Object.keys(e.metas).length ? ft.make(e.metas) : void 0,
                  F = [_, x, S, w, D, E, I, U, T];
              A && F.push(A), e.tables.gsub && F.push(ht.make(e.tables.gsub)), N && F.push(N);

              for (var G = gt(F), B = pt(G.encode()), j = G.fields, z = !1, V = 0; V < j.length; V += 1) {
                if ("head table" === j[V].name) {
                  j[V].value.checkSumAdjustment = 2981146554 - B, z = !0;
                  break;
                }
              }

              if (!z) throw new Error("Could not find head table with checkSum to adjust.");
              return G;
            },
            computeCheckSum: pt
          };

          function yt(e, t) {
            for (var r = 0, n = e.length - 1; r <= n;) {
              var i = r + n >>> 1,
                  a = e[i].tag;
              if (a === t) return i;
              a < t ? r = 1 + i : n = i - 1;
            }

            return -r - 1;
          }

          function bt(e, t) {
            for (var r = 0, n = e.length - 1; r <= n;) {
              var i = r + n >>> 1,
                  a = e[i];
              if (a === t) return i;
              a < t ? r = 1 + i : n = i - 1;
            }

            return -r - 1;
          }

          function _t(e, t) {
            for (var r, n = 0, i = e.length - 1; n <= i;) {
              var a = n + i >>> 1,
                  o = (r = e[a]).start;
              if (o === t) return r;
              o < t ? n = 1 + a : i = a - 1;
            }

            if (0 < n) return t > (r = e[n - 1]).end ? 0 : r;
          }

          function xt(e, t) {
            this.font = e, this.tableName = t;
          }

          function St(e) {
            xt.call(this, e, "gpos");
          }

          function wt(e) {
            xt.call(this, e, "gsub");
          }

          function Tt(e, t) {
            var r = e.length;
            if (r !== t.length) return !1;

            for (var n = 0; n < r; n++) {
              if (e[n] !== t[n]) return !1;
            }

            return !0;
          }

          function Et(e, t, r) {
            for (var n = e.subtables, i = 0; i < n.length; i++) {
              var a = n[i];
              if (a.substFormat === t) return a;
            }

            if (r) return n.push(r), r;
          }

          function Ct(e) {
            for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; ++n) {
              r[n] = e[n];
            }

            return t;
          }

          function Lt(e, t) {
            if (!e) throw t;
          }

          function Mt(e, t, r, n, i) {
            var a;
            return a = 0 < (t & n) ? (a = e.parseByte(), 0 == (t & i) && (a = -a), r + a) : 0 < (t & i) ? r : r + e.parseShort();
          }

          function Pt(e, t, r) {
            var n,
                i,
                a = new se.Parser(t, r);

            if (e.numberOfContours = a.parseShort(), e._xMin = a.parseShort(), e._yMin = a.parseShort(), e._xMax = a.parseShort(), e._yMax = a.parseShort(), 0 < e.numberOfContours) {
              for (var o = e.endPointIndices = [], s = 0; s < e.numberOfContours; s += 1) {
                o.push(a.parseUShort());
              }

              e.instructionLength = a.parseUShort(), e.instructions = [];

              for (var l = 0; l < e.instructionLength; l += 1) {
                e.instructions.push(a.parseByte());
              }

              var u = o[o.length - 1] + 1;
              n = [];

              for (var h = 0; h < u; h += 1) {
                if (i = a.parseByte(), n.push(i), 0 < (8 & i)) for (var f = a.parseByte(), c = 0; c < f; c += 1) {
                  n.push(i), h += 1;
                }
              }

              if (R.argument(n.length === u, "Bad flags."), 0 < o.length) {
                var p,
                    d = [];

                if (0 < u) {
                  for (var g = 0; g < u; g += 1) {
                    i = n[g], (p = {}).onCurve = !!(1 & i), p.lastPointOfContour = 0 <= o.indexOf(g), d.push(p);
                  }

                  for (var m = 0, v = 0; v < u; v += 1) {
                    i = n[v], (p = d[v]).x = Mt(a, i, m, 2, 16), m = p.x;
                  }

                  for (var y = 0, b = 0; b < u; b += 1) {
                    i = n[b], (p = d[b]).y = Mt(a, i, y, 4, 32), y = p.y;
                  }
                }

                e.points = d;
              } else e.points = [];
            } else if (0 === e.numberOfContours) e.points = [];else {
              e.isComposite = !0, e.points = [], e.components = [];

              for (var _ = !0; _;) {
                n = a.parseUShort();
                var x = {
                  glyphIndex: a.parseUShort(),
                  xScale: 1,
                  scale01: 0,
                  scale10: 0,
                  yScale: 1,
                  dx: 0,
                  dy: 0
                };
                0 < (1 & n) ? 0 < (2 & n) ? (x.dx = a.parseShort(), x.dy = a.parseShort()) : x.matchedPoints = [a.parseUShort(), a.parseUShort()] : 0 < (2 & n) ? (x.dx = a.parseChar(), x.dy = a.parseChar()) : x.matchedPoints = [a.parseByte(), a.parseByte()], 0 < (8 & n) ? x.xScale = x.yScale = a.parseF2Dot14() : 0 < (64 & n) ? (x.xScale = a.parseF2Dot14(), x.yScale = a.parseF2Dot14()) : 0 < (128 & n) && (x.xScale = a.parseF2Dot14(), x.scale01 = a.parseF2Dot14(), x.scale10 = a.parseF2Dot14(), x.yScale = a.parseF2Dot14()), e.components.push(x), _ = !!(32 & n);
              }

              if (256 & n) {
                e.instructionLength = a.parseUShort(), e.instructions = [];

                for (var S = 0; S < e.instructionLength; S += 1) {
                  e.instructions.push(a.parseByte());
                }
              }
            }
          }

          function Rt(e, t) {
            for (var r = [], n = 0; n < e.length; n += 1) {
              var i = e[n],
                  a = {
                x: t.xScale * i.x + t.scale01 * i.y + t.dx,
                y: t.scale10 * i.x + t.yScale * i.y + t.dy,
                onCurve: i.onCurve,
                lastPointOfContour: i.lastPointOfContour
              };
              r.push(a);
            }

            return r;
          }

          function Ot(e) {
            var t = new I();
            if (!e) return t;

            for (var r = function (e) {
              for (var t = [], r = [], n = 0; n < e.length; n += 1) {
                var i = e[n];
                r.push(i), i.lastPointOfContour && (t.push(r), r = []);
              }

              return R.argument(0 === r.length, "There are still points left in the current contour."), t;
            }(e), n = 0; n < r.length; ++n) {
              var i = r[n],
                  a = null,
                  o = i[i.length - 1],
                  s = i[0];
              if (o.onCurve) t.moveTo(o.x, o.y);else if (s.onCurve) t.moveTo(s.x, s.y);else {
                var l = {
                  x: .5 * (o.x + s.x),
                  y: .5 * (o.y + s.y)
                };
                t.moveTo(l.x, l.y);
              }

              for (var u = 0; u < i.length; ++u) {
                if (a = o, o = s, s = i[(u + 1) % i.length], o.onCurve) t.lineTo(o.x, o.y);else {
                  var h = s;
                  a.onCurve || {
                    x: .5 * (o.x + a.x),
                    y: .5 * (o.y + a.y)
                  }, s.onCurve || (h = {
                    x: .5 * (o.x + s.x),
                    y: .5 * (o.y + s.y)
                  }), t.quadraticCurveTo(o.x, o.y, h.x, h.y);
                }
              }

              t.closePath();
            }

            return t;
          }

          function kt(e, t) {
            if (t.isComposite) for (var r = 0; r < t.components.length; r += 1) {
              var n = t.components[r],
                  i = e.get(n.glyphIndex);

              if (i.getPath(), i.points) {
                var a = void 0;
                if (void 0 === n.matchedPoints) a = Rt(i.points, n);else {
                  if (n.matchedPoints[0] > t.points.length - 1 || n.matchedPoints[1] > i.points.length - 1) throw Error("Matched points out of range in " + t.name);
                  var o = t.points[n.matchedPoints[0]],
                      s = i.points[n.matchedPoints[1]],
                      l = {
                    xScale: n.xScale,
                    scale01: n.scale01,
                    scale10: n.scale10,
                    yScale: n.yScale,
                    dx: 0,
                    dy: 0
                  };
                  s = Rt([s], l)[0], l.dx = o.x - s.x, l.dy = o.y - s.y, a = Rt(i.points, l);
                }
                t.points = t.points.concat(a);
              }
            }
            return Ot(t.points);
          }

          (St.prototype = xt.prototype = {
            searchTag: yt,
            binSearch: bt,
            getTable: function getTable(e) {
              var t = this.font.tables[this.tableName];
              return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
            },
            getScriptNames: function getScriptNames() {
              var e = this.getTable();
              return e ? e.scripts.map(function (e) {
                return e.tag;
              }) : [];
            },
            getDefaultScriptName: function getDefaultScriptName() {
              var e = this.getTable();

              if (e) {
                for (var t = !1, r = 0; r < e.scripts.length; r++) {
                  var n = e.scripts[r].tag;
                  if ("DFLT" === n) return n;
                  "latn" === n && (t = !0);
                }

                return t ? "latn" : void 0;
              }
            },
            getScriptTable: function getScriptTable(e, t) {
              var r = this.getTable(t);

              if (r) {
                e = e || "DFLT";
                var n = r.scripts,
                    i = yt(r.scripts, e);
                if (0 <= i) return n[i].script;

                if (t) {
                  var a = {
                    tag: e,
                    script: {
                      defaultLangSys: {
                        reserved: 0,
                        reqFeatureIndex: 65535,
                        featureIndexes: []
                      },
                      langSysRecords: []
                    }
                  };
                  return n.splice(-1 - i, 0, a), a.script;
                }
              }
            },
            getLangSysTable: function getLangSysTable(e, t, r) {
              var n = this.getScriptTable(e, r);

              if (n) {
                if (!t || "dflt" === t || "DFLT" === t) return n.defaultLangSys;
                var i = yt(n.langSysRecords, t);
                if (0 <= i) return n.langSysRecords[i].langSys;

                if (r) {
                  var a = {
                    tag: t,
                    langSys: {
                      reserved: 0,
                      reqFeatureIndex: 65535,
                      featureIndexes: []
                    }
                  };
                  return n.langSysRecords.splice(-1 - i, 0, a), a.langSys;
                }
              }
            },
            getFeatureTable: function getFeatureTable(e, t, r, n) {
              var i = this.getLangSysTable(e, t, n);

              if (i) {
                for (var a, o = i.featureIndexes, s = this.font.tables[this.tableName].features, l = 0; l < o.length; l++) {
                  if ((a = s[o[l]]).tag === r) return a.feature;
                }

                if (n) {
                  var u = s.length;
                  return R.assert(0 === u || r >= s[u - 1].tag, "Features must be added in alphabetical order."), a = {
                    tag: r,
                    feature: {
                      params: 0,
                      lookupListIndexes: []
                    }
                  }, s.push(a), o.push(u), a.feature;
                }
              }
            },
            getLookupTables: function getLookupTables(e, t, r, n, i) {
              var a = this.getFeatureTable(e, t, r, i),
                  o = [];

              if (a) {
                for (var s, l = a.lookupListIndexes, u = this.font.tables[this.tableName].lookups, h = 0; h < l.length; h++) {
                  (s = u[l[h]]).lookupType === n && o.push(s);
                }

                if (0 === o.length && i) {
                  s = {
                    lookupType: n,
                    lookupFlag: 0,
                    subtables: [],
                    markFilteringSet: void 0
                  };
                  var f = u.length;
                  return u.push(s), l.push(f), [s];
                }
              }

              return o;
            },
            getGlyphClass: function getGlyphClass(e, t) {
              switch (e.format) {
                case 1:
                  return e.startGlyph <= t && t < e.startGlyph + e.classes.length ? e.classes[t - e.startGlyph] : 0;

                case 2:
                  var r = _t(e.ranges, t);

                  return r ? r.classId : 0;
              }
            },
            getCoverageIndex: function getCoverageIndex(e, t) {
              switch (e.format) {
                case 1:
                  var r = bt(e.glyphs, t);
                  return 0 <= r ? r : -1;

                case 2:
                  var n = _t(e.ranges, t);

                  return n ? n.index + t - n.start : -1;
              }
            },
            expandCoverage: function expandCoverage(e) {
              if (1 === e.format) return e.glyphs;

              for (var t = [], r = e.ranges, n = 0; n < r.length; n++) {
                for (var i = r[n], a = i.start, o = i.end, s = a; s <= o; s++) {
                  t.push(s);
                }
              }

              return t;
            }
          }).init = function () {
            var e = this.getDefaultScriptName();
            this.defaultKerningTables = this.getKerningTables(e);
          }, St.prototype.getKerningValue = function (e, t, r) {
            for (var n = 0; n < e.length; n++) {
              for (var i = e[n].subtables, a = 0; a < i.length; a++) {
                var o = i[a],
                    s = this.getCoverageIndex(o.coverage, t);
                if (!(s < 0)) switch (o.posFormat) {
                  case 1:
                    for (var l = o.pairSets[s], u = 0; u < l.length; u++) {
                      var h = l[u];
                      if (h.secondGlyph === r) return h.value1 && h.value1.xAdvance || 0;
                    }

                    break;

                  case 2:
                    var f = this.getGlyphClass(o.classDef1, t),
                        c = this.getGlyphClass(o.classDef2, r),
                        p = o.classRecords[f][c];
                    return p.value1 && p.value1.xAdvance || 0;
                }
              }
            }

            return 0;
          }, St.prototype.getKerningTables = function (e, t) {
            if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
          }, (wt.prototype = xt.prototype).createDefaultTable = function () {
            return {
              version: 1,
              scripts: [{
                tag: "DFLT",
                script: {
                  defaultLangSys: {
                    reserved: 0,
                    reqFeatureIndex: 65535,
                    featureIndexes: []
                  },
                  langSysRecords: []
                }
              }],
              features: [],
              lookups: []
            };
          }, wt.prototype.getSingle = function (e, t, r) {
            for (var n = [], i = this.getLookupTables(t, r, e, 1), a = 0; a < i.length; a++) {
              for (var o = i[a].subtables, s = 0; s < o.length; s++) {
                var l = o[s],
                    u = this.expandCoverage(l.coverage),
                    h = void 0;

                if (1 === l.substFormat) {
                  var f = l.deltaGlyphId;

                  for (h = 0; h < u.length; h++) {
                    var c = u[h];
                    n.push({
                      sub: c,
                      by: c + f
                    });
                  }
                } else {
                  var p = l.substitute;

                  for (h = 0; h < u.length; h++) {
                    n.push({
                      sub: u[h],
                      by: p[h]
                    });
                  }
                }
              }
            }

            return n;
          }, wt.prototype.getAlternates = function (e, t, r) {
            for (var n = [], i = this.getLookupTables(t, r, e, 3), a = 0; a < i.length; a++) {
              for (var o = i[a].subtables, s = 0; s < o.length; s++) {
                for (var l = o[s], u = this.expandCoverage(l.coverage), h = l.alternateSets, f = 0; f < u.length; f++) {
                  n.push({
                    sub: u[f],
                    by: h[f]
                  });
                }
              }
            }

            return n;
          }, wt.prototype.getLigatures = function (e, t, r) {
            for (var n = [], i = this.getLookupTables(t, r, e, 4), a = 0; a < i.length; a++) {
              for (var o = i[a].subtables, s = 0; s < o.length; s++) {
                for (var l = o[s], u = this.expandCoverage(l.coverage), h = l.ligatureSets, f = 0; f < u.length; f++) {
                  for (var c = u[f], p = h[f], d = 0; d < p.length; d++) {
                    var g = p[d];
                    n.push({
                      sub: [c].concat(g.components),
                      by: g.ligGlyph
                    });
                  }
                }
              }
            }

            return n;
          }, wt.prototype.addSingle = function (e, t, r, n) {
            var i = Et(this.getLookupTables(r, n, e, 1, !0)[0], 2, {
              substFormat: 2,
              coverage: {
                format: 1,
                glyphs: []
              },
              substitute: []
            });
            R.assert(1 === i.coverage.format, "Ligature: unable to modify coverage table format " + i.coverage.format);
            var a = t.sub,
                o = this.binSearch(i.coverage.glyphs, a);
            o < 0 && (o = -1 - o, i.coverage.glyphs.splice(o, 0, a), i.substitute.splice(o, 0, 0)), i.substitute[o] = t.by;
          }, wt.prototype.addAlternate = function (e, t, r, n) {
            var i = Et(this.getLookupTables(r, n, e, 3, !0)[0], 1, {
              substFormat: 1,
              coverage: {
                format: 1,
                glyphs: []
              },
              alternateSets: []
            });
            R.assert(1 === i.coverage.format, "Ligature: unable to modify coverage table format " + i.coverage.format);
            var a = t.sub,
                o = this.binSearch(i.coverage.glyphs, a);
            o < 0 && (o = -1 - o, i.coverage.glyphs.splice(o, 0, a), i.alternateSets.splice(o, 0, 0)), i.alternateSets[o] = t.by;
          }, wt.prototype.addLigature = function (e, t, r, n) {
            var i = this.getLookupTables(r, n, e, 4, !0)[0],
                a = i.subtables[0];
            a || (a = {
              substFormat: 1,
              coverage: {
                format: 1,
                glyphs: []
              },
              ligatureSets: []
            }, i.subtables[0] = a), R.assert(1 === a.coverage.format, "Ligature: unable to modify coverage table format " + a.coverage.format);
            var o = t.sub[0],
                s = t.sub.slice(1),
                l = {
              ligGlyph: t.by,
              components: s
            },
                u = this.binSearch(a.coverage.glyphs, o);

            if (0 <= u) {
              for (var h = a.ligatureSets[u], f = 0; f < h.length; f++) {
                if (Tt(h[f].components, s)) return;
              }

              h.push(l);
            } else u = -1 - u, a.coverage.glyphs.splice(u, 0, o), a.ligatureSets.splice(u, 0, [l]);
          }, wt.prototype.getFeature = function (e, t, r) {
            if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);

            switch (e) {
              case "aalt":
              case "salt":
                return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));

              case "dlig":
              case "liga":
              case "rlig":
                return this.getLigatures(e, t, r);
            }
          }, wt.prototype.add = function (e, t, r, n) {
            if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, n);

            switch (e) {
              case "aalt":
              case "salt":
                return "number" == typeof t.by ? this.addSingle(e, t, r, n) : this.addAlternate(e, t, r, n);

              case "dlig":
              case "liga":
              case "rlig":
                return this.addLigature(e, t, r, n);
            }
          };
          var Dt,
              At,
              It,
              Ut,
              Nt = {
            getPath: Ot,
            parse: function parse(e, t, r, n) {
              for (var i = new xe.GlyphSet(n), a = 0; a < r.length - 1; a += 1) {
                var o = r[a];
                o !== r[a + 1] ? i.push(a, xe.ttfGlyphLoader(n, a, Pt, e, t + o, kt)) : i.push(a, xe.glyphLoader(n, a));
              }

              return i;
            }
          };

          function Ft(e) {
            this.font = e, this.getCommands = function (e) {
              return Nt.getPath(e).commands;
            }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
          }

          function Gt(e) {
            return e;
          }

          function Bt(e) {
            return Math.sign(e) * Math.round(Math.abs(e));
          }

          function jt(e) {
            return Math.sign(e) * Math.round(Math.abs(2 * e)) / 2;
          }

          function zt(e) {
            return Math.sign(e) * (Math.round(Math.abs(e) + .5) - .5);
          }

          function Vt(e) {
            return Math.sign(e) * Math.ceil(Math.abs(e));
          }

          function Ht(e) {
            return Math.sign(e) * Math.floor(Math.abs(e));
          }

          function Wt(e) {
            var t = this.srPeriod,
                r = this.srPhase,
                n = 1;
            return e < 0 && (e = -e, n = -1), e += this.srThreshold - r, e = Math.trunc(e / t) * t, (e += r) < 0 ? r * n : e * n;
          }

          var qt = {
            x: 1,
            y: 0,
            axis: "x",
            distance: function distance(e, t, r, n) {
              return (r ? e.xo : e.x) - (n ? t.xo : t.x);
            },
            interpolate: function interpolate(e, t, r, n) {
              var i, a, o, s, l, u, h;
              if (!n || n === this) return i = e.xo - t.xo, a = e.xo - r.xo, l = t.x - t.xo, u = r.x - r.xo, 0 === (h = (o = Math.abs(i)) + (s = Math.abs(a))) ? void (e.x = e.xo + (l + u) / 2) : void (e.x = e.xo + (l * s + u * o) / h);
              i = n.distance(e, t, !0, !0), a = n.distance(e, r, !0, !0), l = n.distance(t, t, !1, !0), u = n.distance(r, r, !1, !0), 0 !== (h = (o = Math.abs(i)) + (s = Math.abs(a))) ? qt.setRelative(e, e, (l * s + u * o) / h, n, !0) : qt.setRelative(e, e, (l + u) / 2, n, !0);
            },
            normalSlope: Number.NEGATIVE_INFINITY,
            setRelative: function setRelative(e, t, r, n, i) {
              if (n && n !== this) {
                var a = i ? t.xo : t.x,
                    o = i ? t.yo : t.y,
                    s = a + r * n.x,
                    l = o + r * n.y;
                e.x = s + (e.y - l) / n.normalSlope;
              } else e.x = (i ? t.xo : t.x) + r;
            },
            slope: 0,
            touch: function touch(e) {
              e.xTouched = !0;
            },
            touched: function touched(e) {
              return e.xTouched;
            },
            untouch: function untouch(e) {
              e.xTouched = !1;
            }
          },
              Xt = {
            x: 0,
            y: 1,
            axis: "y",
            distance: function distance(e, t, r, n) {
              return (r ? e.yo : e.y) - (n ? t.yo : t.y);
            },
            interpolate: function interpolate(e, t, r, n) {
              var i, a, o, s, l, u, h;
              if (!n || n === this) return i = e.yo - t.yo, a = e.yo - r.yo, l = t.y - t.yo, u = r.y - r.yo, 0 === (h = (o = Math.abs(i)) + (s = Math.abs(a))) ? void (e.y = e.yo + (l + u) / 2) : void (e.y = e.yo + (l * s + u * o) / h);
              i = n.distance(e, t, !0, !0), a = n.distance(e, r, !0, !0), l = n.distance(t, t, !1, !0), u = n.distance(r, r, !1, !0), 0 !== (h = (o = Math.abs(i)) + (s = Math.abs(a))) ? Xt.setRelative(e, e, (l * s + u * o) / h, n, !0) : Xt.setRelative(e, e, (l + u) / 2, n, !0);
            },
            normalSlope: 0,
            setRelative: function setRelative(e, t, r, n, i) {
              if (n && n !== this) {
                var a = i ? t.xo : t.x,
                    o = i ? t.yo : t.y,
                    s = a + r * n.x,
                    l = o + r * n.y;
                e.y = l + n.normalSlope * (e.x - s);
              } else e.y = (i ? t.yo : t.y) + r;
            },
            slope: Number.POSITIVE_INFINITY,
            touch: function touch(e) {
              e.yTouched = !0;
            },
            touched: function touched(e) {
              return e.yTouched;
            },
            untouch: function untouch(e) {
              e.yTouched = !1;
            }
          };

          function Yt(e, t) {
            this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this);
          }

          function Zt(e, t) {
            var r = Math.sqrt(e * e + t * t);
            return t /= r, 1 === (e /= r) && 0 === t ? qt : 0 === e && 1 === t ? Xt : new Yt(e, t);
          }

          function Kt(e, t, r, n) {
            this.x = this.xo = Math.round(64 * e) / 64, this.y = this.yo = Math.round(64 * t) / 64, this.lastPointOfContour = r, this.onCurve = n, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
          }

          Object.freeze(qt), Object.freeze(Xt), Yt.prototype.distance = function (e, t, r, n) {
            return this.x * qt.distance(e, t, r, n) + this.y * Xt.distance(e, t, r, n);
          }, Yt.prototype.interpolate = function (e, t, r, n) {
            var i, a, o, s, l, u, h;
            o = n.distance(e, t, !0, !0), s = n.distance(e, r, !0, !0), i = n.distance(t, t, !1, !0), a = n.distance(r, r, !1, !0), 0 !== (h = (l = Math.abs(o)) + (u = Math.abs(s))) ? this.setRelative(e, e, (i * u + a * l) / h, n, !0) : this.setRelative(e, e, (i + a) / 2, n, !0);
          }, Yt.prototype.setRelative = function (e, t, r, n, i) {
            n = n || this;
            var a = i ? t.xo : t.x,
                o = i ? t.yo : t.y,
                s = a + r * n.x,
                l = o + r * n.y,
                u = n.normalSlope,
                h = this.slope,
                f = e.x,
                c = e.y;
            e.x = (h * f - u * s + l - c) / (h - u), e.y = h * (e.x - f) + c;
          }, Yt.prototype.touch = function (e) {
            e.xTouched = !0, e.yTouched = !0;
          }, Kt.prototype.nextTouched = function (e) {
            for (var t = this.nextPointOnContour; !e.touched(t) && t !== this;) {
              t = t.nextPointOnContour;
            }

            return t;
          }, Kt.prototype.prevTouched = function (e) {
            for (var t = this.prevPointOnContour; !e.touched(t) && t !== this;) {
              t = t.prevPointOnContour;
            }

            return t;
          };
          var Qt = Object.freeze(new Kt(0, 0)),
              Jt = {
            cvCutIn: 17 / 16,
            deltaBase: 9,
            deltaShift: .125,
            loop: 1,
            minDis: 1,
            autoFlip: !0
          };

          function $t(e, t) {
            switch (this.env = e, this.stack = [], this.prog = t, e) {
              case "glyf":
                this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;

              case "prep":
                this.fv = this.pv = this.dpv = qt, this.round = Bt;
            }
          }

          function er(e) {
            for (var t = e.tZone = new Array(e.gZone.length), r = 0; r < t.length; r++) {
              t[r] = new Kt(0, 0);
            }
          }

          function tr(e, t) {
            var r,
                n = e.prog,
                i = e.ip,
                a = 1;

            do {
              if (88 === (r = n[++i])) a++;else if (89 === r) a--;else if (64 === r) i += n[i + 1] + 1;else if (65 === r) i += 2 * n[i + 1] + 1;else if (176 <= r && r <= 183) i += r - 176 + 1;else if (184 <= r && r <= 191) i += 2 * (r - 184 + 1);else if (t && 1 === a && 27 === r) break;
            } while (0 < a);

            e.ip = i;
          }

          function rr(e, t) {
            E.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"), t.fv = t.pv = t.dpv = e;
          }

          function nr(e, t) {
            E.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"), t.pv = t.dpv = e;
          }

          function ir(e, t) {
            E.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), t.fv = e;
          }

          function ar(e, t) {
            var r,
                n,
                i = t.stack,
                a = i.pop(),
                o = i.pop(),
                s = t.z2[a],
                l = t.z1[o];
            E.DEBUG && console.log("SPVTL[" + e + "]", a, o), n = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.pv = t.dpv = Zt(r, n);
          }

          function or(e, t) {
            var r,
                n,
                i = t.stack,
                a = i.pop(),
                o = i.pop(),
                s = t.z2[a],
                l = t.z1[o];
            E.DEBUG && console.log("SFVTL[" + e + "]", a, o), n = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.fv = Zt(r, n);
          }

          function sr(e) {
            E.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
          }

          function lr(e, t) {
            var r = t.stack.pop(),
                n = t.z0[r],
                i = t.fv,
                a = t.pv;
            E.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
            var o = a.distance(n, Qt);
            e && (o = t.round(o)), i.setRelative(n, Qt, o, a), i.touch(n), t.rp0 = t.rp1 = r;
          }

          function ur(e, t) {
            var r,
                n,
                i,
                a = t.z2,
                o = a.length - 2;
            E.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");

            for (var s = 0; s < o; s++) {
              r = a[s], e.touched(r) || (n = r.prevTouched(e)) !== r && (n === (i = r.nextTouched(e)) && e.setRelative(r, r, e.distance(n, n, !1, !0), e, !0), e.interpolate(r, n, i, e));
            }
          }

          function hr(e, t) {
            for (var r = t.stack, n = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[n], a = t.fv, o = t.pv, s = t.loop, l = t.z2; s--;) {
              var u = r.pop(),
                  h = l[u],
                  f = o.distance(i, i, !1, !0);
              a.setRelative(h, h, f, o), a.touch(h), E.DEBUG && console.log(t.step, (1 < t.loop ? "loop " + (t.loop - s) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", u);
            }

            t.loop = 1;
          }

          function fr(e, t) {
            var r = t.stack,
                n = e ? t.rp1 : t.rp2,
                i = (e ? t.z0 : t.z1)[n],
                a = t.fv,
                o = t.pv,
                s = r.pop(),
                l = t.z2[t.contours[s]],
                u = l;
            E.DEBUG && console.log(t.step, "SHC[" + e + "]", s);

            for (var h = o.distance(i, i, !1, !0); u !== i && a.setRelative(u, u, h, o), (u = u.nextPointOnContour) !== l;) {
              ;
            }
          }

          function cr(e, t) {
            var r,
                n,
                i = t.stack,
                a = e ? t.rp1 : t.rp2,
                o = (e ? t.z0 : t.z1)[a],
                s = t.fv,
                l = t.pv,
                u = i.pop();

            switch (E.DEBUG && console.log(t.step, "SHZ[" + e + "]", u), u) {
              case 0:
                r = t.tZone;
                break;

              case 1:
                r = t.gZone;
                break;

              default:
                throw new Error("Invalid zone");
            }

            for (var h = l.distance(o, o, !1, !0), f = r.length - 2, c = 0; c < f; c++) {
              n = r[c], s.setRelative(n, n, h, l);
            }
          }

          function pr(e, t) {
            var r = t.stack,
                n = r.pop() / 64,
                i = r.pop(),
                a = t.z1[i],
                o = t.z0[t.rp0],
                s = t.fv,
                l = t.pv;
            s.setRelative(a, o, n, l), s.touch(a), E.DEBUG && console.log(t.step, "MSIRP[" + e + "]", n, i), t.rp1 = t.rp0, t.rp2 = i, e && (t.rp0 = i);
          }

          function dr(e, t) {
            var r = t.stack,
                n = r.pop(),
                i = r.pop(),
                a = t.z0[i],
                o = t.fv,
                s = t.pv,
                l = t.cvt[n];
            E.DEBUG && console.log(t.step, "MIAP[" + e + "]", n, "(", l, ")", i);
            var u = s.distance(a, Qt);
            e && (Math.abs(u - l) < t.cvCutIn && (u = l), u = t.round(u)), o.setRelative(a, Qt, u, s), 0 === t.zp0 && (a.xo = a.x, a.yo = a.y), o.touch(a), t.rp0 = t.rp1 = i;
          }

          function gr(e, t) {
            var r = t.stack,
                n = r.pop(),
                i = t.z2[n];
            E.DEBUG && console.log(t.step, "GC[" + e + "]", n), r.push(64 * t.dpv.distance(i, Qt, e, !1));
          }

          function mr(e, t) {
            var r = t.stack,
                n = r.pop(),
                i = r.pop(),
                a = t.z1[n],
                o = t.z0[i],
                s = t.dpv.distance(o, a, e, e);
            E.DEBUG && console.log(t.step, "MD[" + e + "]", n, i, "->", s), t.stack.push(Math.round(64 * s));
          }

          function vr(e, t) {
            var r = t.stack,
                n = r.pop(),
                i = t.fv,
                a = t.pv,
                o = t.ppem,
                s = t.deltaBase + 16 * (e - 1),
                l = t.deltaShift,
                u = t.z0;
            E.DEBUG && console.log(t.step, "DELTAP[" + e + "]", n, r);

            for (var h = 0; h < n; h++) {
              var f = r.pop(),
                  c = r.pop();

              if (s + ((240 & c) >> 4) === o) {
                var p = (15 & c) - 8;
                0 <= p && p++, E.DEBUG && console.log(t.step, "DELTAPFIX", f, "by", p * l);
                var d = u[f];
                i.setRelative(d, d, p * l, a);
              }
            }
          }

          function yr(e, t) {
            var r = t.stack,
                n = r.pop();
            E.DEBUG && console.log(t.step, "ROUND[]"), r.push(64 * t.round(n / 64));
          }

          function br(e, t) {
            var r = t.stack,
                n = r.pop(),
                i = t.ppem,
                a = t.deltaBase + 16 * (e - 1),
                o = t.deltaShift;
            E.DEBUG && console.log(t.step, "DELTAC[" + e + "]", n, r);

            for (var s = 0; s < n; s++) {
              var l = r.pop(),
                  u = r.pop();

              if (a + ((240 & u) >> 4) === i) {
                var h = (15 & u) - 8;
                0 <= h && h++;
                var f = h * o;
                E.DEBUG && console.log(t.step, "DELTACFIX", l, "by", f), t.cvt[l] += f;
              }
            }
          }

          function _r(e, t) {
            var r,
                n,
                i = t.stack,
                a = i.pop(),
                o = i.pop(),
                s = t.z2[a],
                l = t.z1[o];
            E.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", a, o), n = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.dpv = Zt(r, n);
          }

          function xr(e, t) {
            var r = t.stack,
                n = t.prog,
                i = t.ip;
            E.DEBUG && console.log(t.step, "PUSHB[" + e + "]");

            for (var a = 0; a < e; a++) {
              r.push(n[++i]);
            }

            t.ip = i;
          }

          function Sr(e, t) {
            var r = t.ip,
                n = t.prog,
                i = t.stack;
            E.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");

            for (var a = 0; a < e; a++) {
              var o = n[++r] << 8 | n[++r];
              32768 & o && (o = -(1 + (65535 ^ o))), i.push(o);
            }

            t.ip = r;
          }

          function wr(e, t, r, n, i, a) {
            var o,
                s,
                l,
                u,
                h = a.stack,
                f = e && h.pop(),
                c = h.pop(),
                p = a.rp0,
                d = a.z0[p],
                g = a.z1[c],
                m = a.minDis,
                v = a.fv,
                y = a.dpv;
            l = 0 <= (s = o = y.distance(g, d, !0, !0)) ? 1 : -1, s = Math.abs(s), e && (u = a.cvt[f], n && Math.abs(s - u) < a.cvCutIn && (s = u)), r && s < m && (s = m), n && (s = a.round(s)), v.setRelative(g, d, l * s, y), v.touch(g), E.DEBUG && console.log(a.step, (e ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (r ? ">" : "_") + (n ? "R" : "_") + (0 === i ? "Gr" : 1 === i ? "Bl" : 2 === i ? "Wh" : "") + "]", e ? f + "(" + a.cvt[f] + "," + u + ")" : "", c, "(d =", o, "->", l * s, ")"), a.rp1 = a.rp0, a.rp2 = c, t && (a.rp0 = c);
          }

          Ft.prototype.exec = function (e, t) {
            if ("number" != typeof t) throw new Error("Point size is not a number!");

            if (!(2 < this._errorState)) {
              var r = this.font,
                  n = this._prepState;

              if (!n || n.ppem !== t) {
                var i = this._fpgmState;

                if (!i) {
                  $t.prototype = Jt, (i = this._fpgmState = new $t("fpgm", r.tables.fpgm)).funcs = [], i.font = r, E.DEBUG && (console.log("---EXEC FPGM---"), i.step = -1);

                  try {
                    At(i);
                  } catch (e) {
                    return console.log("Hinting error in FPGM:" + e), void (this._errorState = 3);
                  }
                }

                $t.prototype = i, (n = this._prepState = new $t("prep", r.tables.prep)).ppem = t;
                var a = r.tables.cvt;
                if (a) for (var o = n.cvt = new Array(a.length), s = t / r.unitsPerEm, l = 0; l < a.length; l++) {
                  o[l] = a[l] * s;
                } else n.cvt = [];
                E.DEBUG && (console.log("---EXEC PREP---"), n.step = -1);

                try {
                  At(n);
                } catch (e) {
                  this._errorState < 2 && console.log("Hinting error in PREP:" + e), this._errorState = 2;
                }
              }

              if (!(1 < this._errorState)) try {
                return It(e, n);
              } catch (e) {
                return this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), void (this._errorState = 1);
              }
            }
          }, It = function It(e, t) {
            var r,
                n,
                i,
                a = t.ppem / t.font.unitsPerEm,
                o = a,
                s = e.components;

            if ($t.prototype = t, s) {
              var l = t.font;
              n = [], r = [];

              for (var u = 0; u < s.length; u++) {
                var h = s[u],
                    f = l.glyphs.get(h.glyphIndex);
                i = new $t("glyf", f.instructions), E.DEBUG && (console.log("---EXEC COMP " + u + "---"), i.step = -1), Ut(f, i, a, o);

                for (var c = Math.round(h.dx * a), p = Math.round(h.dy * o), d = i.gZone, g = i.contours, m = 0; m < d.length; m++) {
                  var v = d[m];
                  v.xTouched = v.yTouched = !1, v.xo = v.x = v.x + c, v.yo = v.y = v.y + p;
                }

                var y = n.length;
                n.push.apply(n, d);

                for (var b = 0; b < g.length; b++) {
                  r.push(g[b] + y);
                }
              }

              e.instructions && !i.inhibitGridFit && ((i = new $t("glyf", e.instructions)).gZone = i.z0 = i.z1 = i.z2 = n, i.contours = r, n.push(new Kt(0, 0), new Kt(Math.round(e.advanceWidth * a), 0)), E.DEBUG && (console.log("---EXEC COMPOSITE---"), i.step = -1), At(i), n.length -= 2);
            } else i = new $t("glyf", e.instructions), E.DEBUG && (console.log("---EXEC GLYPH---"), i.step = -1), Ut(e, i, a, o), n = i.gZone;

            return n;
          }, Ut = function Ut(e, t, r, n) {
            for (var i, a, o, s = e.points || [], l = s.length, u = t.gZone = t.z0 = t.z1 = t.z2 = [], h = t.contours = [], f = 0; f < l; f++) {
              i = s[f], u[f] = new Kt(i.x * r, i.y * n, i.lastPointOfContour, i.onCurve);
            }

            for (var c = 0; c < l; c++) {
              i = u[c], a || (a = i, h.push(c)), i.lastPointOfContour ? ((i.nextPointOnContour = a).prevPointOnContour = i, a = void 0) : (o = u[c + 1], (i.nextPointOnContour = o).prevPointOnContour = i);
            }

            if (!t.inhibitGridFit) {
              if (E.DEBUG) {
                console.log("PROCESSING GLYPH", t.stack);

                for (var p = 0; p < l; p++) {
                  console.log(p, u[p].x, u[p].y);
                }
              }

              if (u.push(new Kt(0, 0), new Kt(Math.round(e.advanceWidth * r), 0)), At(t), u.length -= 2, E.DEBUG) {
                console.log("FINISHED GLYPH", t.stack);

                for (var d = 0; d < l; d++) {
                  console.log(d, u[d].x, u[d].y);
                }
              }
            }
          }, At = function At(e) {
            var t = e.prog;

            if (t) {
              var r,
                  n = t.length;

              for (e.ip = 0; e.ip < n; e.ip++) {
                if (E.DEBUG && e.step++, !(r = Dt[t[e.ip]])) throw new Error("unknown instruction: 0x" + Number(t[e.ip]).toString(16));
                r(e);
              }
            }
          }, Dt = [rr.bind(void 0, Xt), rr.bind(void 0, qt), nr.bind(void 0, Xt), nr.bind(void 0, qt), ir.bind(void 0, Xt), ir.bind(void 0, qt), ar.bind(void 0, 0), ar.bind(void 0, 1), or.bind(void 0, 0), or.bind(void 0, 1), function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "SPVFS[]", r, n), e.pv = e.dpv = Zt(n, r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "SPVFS[]", r, n), e.fv = Zt(n, r);
          }, function (e) {
            var t = e.stack,
                r = e.pv;
            E.DEBUG && console.log(e.step, "GPV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
          }, function (e) {
            var t = e.stack,
                r = e.fv;
            E.DEBUG && console.log(e.step, "GFV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
          }, function (e) {
            e.fv = e.pv, E.DEBUG && console.log(e.step, "SFVTPV[]");
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop(),
                i = t.pop(),
                a = t.pop(),
                o = t.pop(),
                s = e.z0,
                l = e.z1,
                u = s[r],
                h = s[n],
                f = l[i],
                c = l[a],
                p = e.z2[o];
            E.DEBUG && console.log("ISECT[], ", r, n, i, a, o);
            var d = u.x,
                g = u.y,
                m = h.x,
                v = h.y,
                y = f.x,
                b = f.y,
                _ = c.x,
                x = c.y,
                S = (d - m) * (b - x) - (g - v) * (y - _),
                w = d * v - g * m,
                T = y * x - b * _;
            p.x = (w * (y - _) - T * (d - m)) / S, p.y = (w * (b - x) - T * (g - v)) / S;
          }, function (e) {
            e.rp0 = e.stack.pop(), E.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
          }, function (e) {
            e.rp1 = e.stack.pop(), E.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
          }, function (e) {
            e.rp2 = e.stack.pop(), E.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
          }, function (e) {
            var t = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "SZP0[]", t), e.zp0 = t) {
              case 0:
                e.tZone || er(e), e.z0 = e.tZone;
                break;

              case 1:
                e.z0 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "SZP1[]", t), e.zp1 = t) {
              case 0:
                e.tZone || er(e), e.z1 = e.tZone;
                break;

              case 1:
                e.z1 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "SZP2[]", t), e.zp2 = t) {
              case 0:
                e.tZone || er(e), e.z2 = e.tZone;
                break;

              case 1:
                e.z2 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "SZPS[]", t), e.zp0 = e.zp1 = e.zp2 = t, t) {
              case 0:
                e.tZone || er(e), e.z0 = e.z1 = e.z2 = e.tZone;
                break;

              case 1:
                e.z0 = e.z1 = e.z2 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            e.loop = e.stack.pop(), E.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
          }, function (e) {
            E.DEBUG && console.log(e.step, "RTG[]"), e.round = Bt;
          }, function (e) {
            E.DEBUG && console.log(e.step, "RTHG[]"), e.round = zt;
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SMD[]", t), e.minDis = t / 64;
          }, function (e) {
            E.DEBUG && console.log(e.step, "ELSE[]"), tr(e, !1);
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "JMPR[]", t), e.ip += t - 1;
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SCVTCI[]", t), e.cvCutIn = t / 64;
          }, void 0, void 0, function (e) {
            var t = e.stack;
            E.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
          }, sr, function (e) {
            E.DEBUG && console.log(e.step, "CLEAR[]"), e.stack.length = 0;
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(n);
          }, function (e) {
            var t = e.stack;
            E.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "MINDEX[]", r), t.push(t.splice(t.length - r, 1)[0]);
          }, void 0, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "LOOPCALL[]", r, n);
            var i = e.ip,
                a = e.prog;
            e.prog = e.funcs[r];

            for (var o = 0; o < n; o++) {
              At(e), E.DEBUG && console.log(++e.step, o + 1 < n ? "next loopcall" : "done loopcall", o);
            }

            e.ip = i, e.prog = a;
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "CALL[]", t);
            var r = e.ip,
                n = e.prog;
            e.prog = e.funcs[t], At(e), e.ip = r, e.prog = n, E.DEBUG && console.log(++e.step, "returning from", t);
          }, function (e) {
            if ("fpgm" !== e.env) throw new Error("FDEF not allowed here");
            var t = e.stack,
                r = e.prog,
                n = e.ip,
                i = t.pop(),
                a = n;

            for (E.DEBUG && console.log(e.step, "FDEF[]", i); 45 !== r[++n];) {
              ;
            }

            e.ip = n, e.funcs[i] = r.slice(a + 1, n);
          }, void 0, lr.bind(void 0, 0), lr.bind(void 0, 1), ur.bind(void 0, Xt), ur.bind(void 0, qt), hr.bind(void 0, 0), hr.bind(void 0, 1), fr.bind(void 0, 0), fr.bind(void 0, 1), cr.bind(void 0, 0), cr.bind(void 0, 1), function (e) {
            for (var t = e.stack, r = e.loop, n = e.fv, i = t.pop() / 64, a = e.z2; r--;) {
              var o = t.pop(),
                  s = a[o];
              E.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]", o, i), n.setRelative(s, s, i), n.touch(s);
            }

            e.loop = 1;
          }, function (e) {
            for (var t = e.stack, r = e.rp1, n = e.rp2, i = e.loop, a = e.z0[r], o = e.z1[n], s = e.fv, l = e.dpv, u = e.z2; i--;) {
              var h = t.pop(),
                  f = u[h];
              E.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - i) + ": " : "") + "IP[]", h, r, "<->", n), s.interpolate(f, a, o, l), s.touch(f);
            }

            e.loop = 1;
          }, pr.bind(void 0, 0), pr.bind(void 0, 1), function (e) {
            for (var t = e.stack, r = e.rp0, n = e.z0[r], i = e.loop, a = e.fv, o = e.pv, s = e.z1; i--;) {
              var l = t.pop(),
                  u = s[l];
              E.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - i) + ": " : "") + "ALIGNRP[]", l), a.setRelative(u, n, 0, o), a.touch(u);
            }

            e.loop = 1;
          }, function (e) {
            E.DEBUG && console.log(e.step, "RTDG[]"), e.round = jt;
          }, dr.bind(void 0, 0), dr.bind(void 0, 1), function (e) {
            var t = e.prog,
                r = e.ip,
                n = e.stack,
                i = t[++r];
            E.DEBUG && console.log(e.step, "NPUSHB[]", i);

            for (var a = 0; a < i; a++) {
              n.push(t[++r]);
            }

            e.ip = r;
          }, function (e) {
            var t = e.ip,
                r = e.prog,
                n = e.stack,
                i = r[++t];
            E.DEBUG && console.log(e.step, "NPUSHW[]", i);

            for (var a = 0; a < i; a++) {
              var o = r[++t] << 8 | r[++t];
              32768 & o && (o = -(1 + (65535 ^ o))), n.push(o);
            }

            e.ip = t;
          }, function (e) {
            var t = e.stack,
                r = e.store;
            r = r || (e.store = []);
            var n = t.pop(),
                i = t.pop();
            E.DEBUG && console.log(e.step, "WS", n, i), r[i] = n;
          }, function (e) {
            var t = e.stack,
                r = e.store,
                n = t.pop();
            E.DEBUG && console.log(e.step, "RS", n);
            var i = r && r[n] || 0;
            t.push(i);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "WCVTP", r, n), e.cvt[n] = r / 64;
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "RCVT", r), t.push(64 * e.cvt[r]);
          }, gr.bind(void 0, 0), gr.bind(void 0, 1), void 0, mr.bind(void 0, 0), mr.bind(void 0, 1), function (e) {
            E.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
          }, void 0, function (e) {
            E.DEBUG && console.log(e.step, "FLIPON[]"), e.autoFlip = !0;
          }, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "LT[]", r, n), t.push(n < r ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "LTEQ[]", r, n), t.push(n <= r ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "GT[]", r, n), t.push(r < n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "GTEQ[]", r, n), t.push(r <= n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "EQ[]", r, n), t.push(r === n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "NEQ[]", r, n), t.push(r !== n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "ODD[]", r), t.push(Math.trunc(r) % 2 ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "EVEN[]", r), t.push(Math.trunc(r) % 2 ? 0 : 1);
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "IF[]", t), t || (tr(e, !0), E.DEBUG && console.log(e.step, "EIF[]"));
          }, function (e) {
            E.DEBUG && console.log(e.step, "EIF[]");
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "AND[]", r, n), t.push(r && n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "OR[]", r, n), t.push(r || n ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
          }, vr.bind(void 0, 1), function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SDB[]", t), e.deltaBase = t;
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SDS[]", t), e.deltaShift = Math.pow(.5, t);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "ADD[]", r, n), t.push(n + r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "SUB[]", r, n), t.push(n - r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "DIV[]", r, n), t.push(64 * n / r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "MUL[]", r, n), t.push(n * r / 64);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "FLOOR[]", r), t.push(64 * Math.floor(r / 64));
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            E.DEBUG && console.log(e.step, "CEILING[]", r), t.push(64 * Math.ceil(r / 64));
          }, yr.bind(void 0, 0), yr.bind(void 0, 1), yr.bind(void 0, 2), yr.bind(void 0, 3), void 0, void 0, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "WCVTF[]", r, n), e.cvt[n] = r * e.ppem / e.font.unitsPerEm;
          }, vr.bind(void 0, 2), vr.bind(void 0, 3), br.bind(void 0, 1), br.bind(void 0, 2), br.bind(void 0, 3), function (e) {
            var t,
                r = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "SROUND[]", r), e.round = Wt, 192 & r) {
              case 0:
                t = .5;
                break;

              case 64:
                t = 1;
                break;

              case 128:
                t = 2;
                break;

              default:
                throw new Error("invalid SROUND value");
            }

            switch (e.srPeriod = t, 48 & r) {
              case 0:
                e.srPhase = 0;
                break;

              case 16:
                e.srPhase = .25 * t;
                break;

              case 32:
                e.srPhase = .5 * t;
                break;

              case 48:
                e.srPhase = .75 * t;
                break;

              default:
                throw new Error("invalid SROUND value");
            }

            r &= 15, e.srThreshold = 0 === r ? 0 : (r / 8 - .5) * t;
          }, function (e) {
            var t,
                r = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "S45ROUND[]", r), e.round = Wt, 192 & r) {
              case 0:
                t = Math.sqrt(2) / 2;
                break;

              case 64:
                t = Math.sqrt(2);
                break;

              case 128:
                t = 2 * Math.sqrt(2);
                break;

              default:
                throw new Error("invalid S45ROUND value");
            }

            switch (e.srPeriod = t, 48 & r) {
              case 0:
                e.srPhase = 0;
                break;

              case 16:
                e.srPhase = .25 * t;
                break;

              case 32:
                e.srPhase = .5 * t;
                break;

              case 48:
                e.srPhase = .75 * t;
                break;

              default:
                throw new Error("invalid S45ROUND value");
            }

            r &= 15, e.srThreshold = 0 === r ? 0 : (r / 8 - .5) * t;
          }, void 0, void 0, function (e) {
            E.DEBUG && console.log(e.step, "ROFF[]"), e.round = Gt;
          }, void 0, function (e) {
            E.DEBUG && console.log(e.step, "RUTG[]"), e.round = Vt;
          }, function (e) {
            E.DEBUG && console.log(e.step, "RDTG[]"), e.round = Ht;
          }, sr, sr, void 0, void 0, void 0, void 0, void 0, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SCANCTRL[]", t);
          }, _r.bind(void 0, 0), _r.bind(void 0, 1), function (e) {
            var t = e.stack,
                r = t.pop(),
                n = 0;
            E.DEBUG && console.log(e.step, "GETINFO[]", r), 1 & r && (n = 35), 32 & r && (n |= 4096), t.push(n);
          }, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop(),
                i = t.pop();
            E.DEBUG && console.log(e.step, "ROLL[]"), t.push(n), t.push(r), t.push(i);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "MAX[]", r, n), t.push(Math.max(n, r));
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                n = t.pop();
            E.DEBUG && console.log(e.step, "MIN[]", r, n), t.push(Math.min(n, r));
          }, function (e) {
            var t = e.stack.pop();
            E.DEBUG && console.log(e.step, "SCANTYPE[]", t);
          }, function (e) {
            var t = e.stack.pop(),
                r = e.stack.pop();

            switch (E.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t) {
              case 1:
                return void (e.inhibitGridFit = !!r);

              case 2:
                return void (e.ignoreCvt = !!r);

              default:
                throw new Error("invalid INSTCTRL[] selector");
            }
          }, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, xr.bind(void 0, 1), xr.bind(void 0, 2), xr.bind(void 0, 3), xr.bind(void 0, 4), xr.bind(void 0, 5), xr.bind(void 0, 6), xr.bind(void 0, 7), xr.bind(void 0, 8), Sr.bind(void 0, 1), Sr.bind(void 0, 2), Sr.bind(void 0, 3), Sr.bind(void 0, 4), Sr.bind(void 0, 5), Sr.bind(void 0, 6), Sr.bind(void 0, 7), Sr.bind(void 0, 8), wr.bind(void 0, 0, 0, 0, 0, 0), wr.bind(void 0, 0, 0, 0, 0, 1), wr.bind(void 0, 0, 0, 0, 0, 2), wr.bind(void 0, 0, 0, 0, 0, 3), wr.bind(void 0, 0, 0, 0, 1, 0), wr.bind(void 0, 0, 0, 0, 1, 1), wr.bind(void 0, 0, 0, 0, 1, 2), wr.bind(void 0, 0, 0, 0, 1, 3), wr.bind(void 0, 0, 0, 1, 0, 0), wr.bind(void 0, 0, 0, 1, 0, 1), wr.bind(void 0, 0, 0, 1, 0, 2), wr.bind(void 0, 0, 0, 1, 0, 3), wr.bind(void 0, 0, 0, 1, 1, 0), wr.bind(void 0, 0, 0, 1, 1, 1), wr.bind(void 0, 0, 0, 1, 1, 2), wr.bind(void 0, 0, 0, 1, 1, 3), wr.bind(void 0, 0, 1, 0, 0, 0), wr.bind(void 0, 0, 1, 0, 0, 1), wr.bind(void 0, 0, 1, 0, 0, 2), wr.bind(void 0, 0, 1, 0, 0, 3), wr.bind(void 0, 0, 1, 0, 1, 0), wr.bind(void 0, 0, 1, 0, 1, 1), wr.bind(void 0, 0, 1, 0, 1, 2), wr.bind(void 0, 0, 1, 0, 1, 3), wr.bind(void 0, 0, 1, 1, 0, 0), wr.bind(void 0, 0, 1, 1, 0, 1), wr.bind(void 0, 0, 1, 1, 0, 2), wr.bind(void 0, 0, 1, 1, 0, 3), wr.bind(void 0, 0, 1, 1, 1, 0), wr.bind(void 0, 0, 1, 1, 1, 1), wr.bind(void 0, 0, 1, 1, 1, 2), wr.bind(void 0, 0, 1, 1, 1, 3), wr.bind(void 0, 1, 0, 0, 0, 0), wr.bind(void 0, 1, 0, 0, 0, 1), wr.bind(void 0, 1, 0, 0, 0, 2), wr.bind(void 0, 1, 0, 0, 0, 3), wr.bind(void 0, 1, 0, 0, 1, 0), wr.bind(void 0, 1, 0, 0, 1, 1), wr.bind(void 0, 1, 0, 0, 1, 2), wr.bind(void 0, 1, 0, 0, 1, 3), wr.bind(void 0, 1, 0, 1, 0, 0), wr.bind(void 0, 1, 0, 1, 0, 1), wr.bind(void 0, 1, 0, 1, 0, 2), wr.bind(void 0, 1, 0, 1, 0, 3), wr.bind(void 0, 1, 0, 1, 1, 0), wr.bind(void 0, 1, 0, 1, 1, 1), wr.bind(void 0, 1, 0, 1, 1, 2), wr.bind(void 0, 1, 0, 1, 1, 3), wr.bind(void 0, 1, 1, 0, 0, 0), wr.bind(void 0, 1, 1, 0, 0, 1), wr.bind(void 0, 1, 1, 0, 0, 2), wr.bind(void 0, 1, 1, 0, 0, 3), wr.bind(void 0, 1, 1, 0, 1, 0), wr.bind(void 0, 1, 1, 0, 1, 1), wr.bind(void 0, 1, 1, 0, 1, 2), wr.bind(void 0, 1, 1, 0, 1, 3), wr.bind(void 0, 1, 1, 1, 0, 0), wr.bind(void 0, 1, 1, 1, 0, 1), wr.bind(void 0, 1, 1, 1, 0, 2), wr.bind(void 0, 1, 1, 1, 0, 3), wr.bind(void 0, 1, 1, 1, 1, 0), wr.bind(void 0, 1, 1, 1, 1, 1), wr.bind(void 0, 1, 1, 1, 1, 2), wr.bind(void 0, 1, 1, 1, 1, 3)];

          var Tr = Array.from || function (e) {
            return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
          };

          function Er(e) {
            (e = e || {}).empty || (Lt(e.familyName, "When creating a new Font object, familyName is required."), Lt(e.styleName, "When creating a new Font object, styleName is required."), Lt(e.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Lt(e.ascender, "When creating a new Font object, ascender is required."), Lt(e.descender, "When creating a new Font object, descender is required."), Lt(e.descender < 0, "Descender should be negative (e.g. -512)."), this.names = {
              fontFamily: {
                en: e.familyName || " "
              },
              fontSubfamily: {
                en: e.styleName || " "
              },
              fullName: {
                en: e.fullName || e.familyName + " " + e.styleName
              },
              postScriptName: {
                en: e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, "")
              },
              designer: {
                en: e.designer || " "
              },
              designerURL: {
                en: e.designerURL || " "
              },
              manufacturer: {
                en: e.manufacturer || " "
              },
              manufacturerURL: {
                en: e.manufacturerURL || " "
              },
              license: {
                en: e.license || " "
              },
              licenseURL: {
                en: e.licenseURL || " "
              },
              version: {
                en: e.version || "Version 0.1"
              },
              description: {
                en: e.description || " "
              },
              copyright: {
                en: e.copyright || " "
              },
              trademark: {
                en: e.trademark || " "
              }
            }, this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.createdTimestamp = e.createdTimestamp, this.tables = {
              os2: {
                usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
                usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
                fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR
              }
            }), this.supported = !0, this.glyphs = new xe.GlyphSet(this, e.glyphs || []), this.encoding = new pe(this), this.position = new St(this), this.substitution = new wt(this), this.tables = this.tables || {}, Object.defineProperty(this, "hinting", {
              get: function get() {
                return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new Ft(this) : void 0;
              }
            });
          }

          function Cr(e, t) {
            var r = JSON.stringify(e),
                n = 256;

            for (var i in t) {
              var a = parseInt(i);

              if (a && !(a < 256)) {
                if (JSON.stringify(t[i]) === r) return a;
                n <= a && (n = a + 1);
              }
            }

            return t[n] = e, n;
          }

          function Lr(e, t, r, n) {
            for (var i = [{
              name: "nameID_" + e,
              type: "USHORT",
              value: Cr(t.name, n)
            }, {
              name: "flags_" + e,
              type: "USHORT",
              value: 0
            }], a = 0; a < r.length; ++a) {
              var o = r[a].tag;
              i.push({
                name: "axis_" + e + " " + o,
                type: "FIXED",
                value: t.coordinates[o] << 16
              });
            }

            return i;
          }

          function Mr(e, t, r, n) {
            var i = {},
                a = new se.Parser(e, t);
            i.name = n[a.parseUShort()] || {}, a.skip("uShort", 1), i.coordinates = {};

            for (var o = 0; o < r.length; ++o) {
              i.coordinates[r[o].tag] = a.parseFixed();
            }

            return i;
          }

          Er.prototype.hasChar = function (e) {
            return null !== this.encoding.charToGlyphIndex(e);
          }, Er.prototype.charToGlyphIndex = function (e) {
            return this.encoding.charToGlyphIndex(e);
          }, Er.prototype.charToGlyph = function (e) {
            var t = this.charToGlyphIndex(e),
                r = this.glyphs.get(t);
            return r = r || this.glyphs.get(0);
          }, Er.prototype.stringToGlyphs = function (e, t) {
            t = t || this.defaultRenderOptions;

            for (var r = Tr(e), n = [], i = 0; i < r.length; i += 1) {
              var a = r[i];
              n.push(this.charToGlyphIndex(a));
            }

            var o = n.length;

            if (t.features) {
              var s = t.script || this.substitution.getDefaultScriptName(),
                  l = [];
              t.features.liga && (l = l.concat(this.substitution.getFeature("liga", s, t.language))), t.features.rlig && (l = l.concat(this.substitution.getFeature("rlig", s, t.language)));

              for (var u = 0; u < o; u += 1) {
                for (var h = 0; h < l.length; h++) {
                  for (var f = l[h], c = f.sub, p = c.length, d = 0; d < p && c[d] === n[u + d];) {
                    d++;
                  }

                  d === p && (n.splice(u, p, f.by), o = o - p + 1);
                }
              }
            }

            for (var g = new Array(o), m = this.glyphs.get(0), v = 0; v < o; v += 1) {
              g[v] = this.glyphs.get(n[v]) || m;
            }

            return g;
          }, Er.prototype.nameToGlyphIndex = function (e) {
            return this.glyphNames.nameToGlyphIndex(e);
          }, Er.prototype.nameToGlyph = function (e) {
            var t = this.nameToGlyphIndex(e),
                r = this.glyphs.get(t);
            return r = r || this.glyphs.get(0);
          }, Er.prototype.glyphIndexToName = function (e) {
            return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : "";
          }, Er.prototype.getKerningValue = function (e, t) {
            e = e.index || e, t = t.index || t;
            var r = this.position.defaultKerningTables;
            return r ? this.position.getKerningValue(r, e, t) : this.kerningPairs[e + "," + t] || 0;
          }, Er.prototype.defaultRenderOptions = {
            kerning: !0,
            features: {
              liga: !0,
              rlig: !0
            }
          }, Er.prototype.forEachGlyph = function (e, t, r, n, i, a) {
            t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 72, i = i || this.defaultRenderOptions;
            var o,
                s = 1 / this.unitsPerEm * n,
                l = this.stringToGlyphs(e, i);

            if (i.kerning) {
              var u = i.script || this.position.getDefaultScriptName();
              o = this.position.getKerningTables(u, i.language);
            }

            for (var h = 0; h < l.length; h += 1) {
              var f = l[h];
              if (a.call(this, f, t, r, n, i), f.advanceWidth && (t += f.advanceWidth * s), i.kerning && h < l.length - 1) t += (o ? this.position.getKerningValue(o, f.index, l[h + 1].index) : this.getKerningValue(f, l[h + 1])) * s;
              i.letterSpacing ? t += i.letterSpacing * n : i.tracking && (t += i.tracking / 1e3 * n);
            }

            return t;
          }, Er.prototype.getPath = function (e, t, r, n, a) {
            var o = new I();
            return this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
              var i = e.getPath(t, r, n, a, this);
              o.extend(i);
            }), o;
          }, Er.prototype.getPaths = function (e, t, r, n, a) {
            var o = [];
            return this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
              var i = e.getPath(t, r, n, a, this);
              o.push(i);
            }), o;
          }, Er.prototype.getAdvanceWidth = function (e, t, r) {
            return this.forEachGlyph(e, 0, 0, t, r, function () {});
          }, Er.prototype.draw = function (e, t, r, n, i, a) {
            this.getPath(t, r, n, i, a).draw(e);
          }, Er.prototype.drawPoints = function (i, e, t, r, n, a) {
            this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
              e.drawPoints(i, t, r, n);
            });
          }, Er.prototype.drawMetrics = function (i, e, t, r, n, a) {
            this.forEachGlyph(e, t, r, n, a, function (e, t, r, n) {
              e.drawMetrics(i, t, r, n);
            });
          }, Er.prototype.getEnglishName = function (e) {
            var t = this.names[e];
            if (t) return t.en;
          }, Er.prototype.validate = function () {
            var r = this;

            function e(e) {
              var t = r.getEnglishName(e);
              t && t.trim().length;
            }

            e("fontFamily"), e("weightName"), e("manufacturer"), e("copyright"), e("version"), this.unitsPerEm;
          }, Er.prototype.toTables = function () {
            return vt.fontToTable(this);
          }, Er.prototype.toBuffer = function () {
            return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
          }, Er.prototype.toArrayBuffer = function () {
            for (var e = this.toTables().encode(), t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; n++) {
              r[n] = e[n];
            }

            return t;
          }, Er.prototype.download = function (t) {
            var e = this.getEnglishName("fontFamily"),
                r = this.getEnglishName("fontSubfamily");
            t = t || e.replace(/\s/g, "") + "-" + r + ".otf";
            var i = this.toArrayBuffer();
            if ("undefined" != typeof window) window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, i.byteLength, function (e) {
              e.root.getFile(t, {
                create: !0
              }, function (n) {
                n.createWriter(function (e) {
                  var t = new DataView(i),
                      r = new Blob([t], {
                    type: "font/opentype"
                  });
                  e.write(r), e.addEventListener("writeend", function () {
                    location.href = n.toURL();
                  }, !1);
                });
              });
            }, function (e) {
              throw new Error(e.name + ": " + e.message);
            });else {
              var n = jr("fs"),
                  a = function (e) {
                for (var t = new Br(e.byteLength), r = new Uint8Array(e), n = 0; n < t.length; ++n) {
                  t[n] = r[n];
                }

                return t;
              }(i);

              n.writeFileSync(t, a);
            }
          }, Er.prototype.fsSelectionValues = {
            ITALIC: 1,
            UNDERSCORE: 2,
            NEGATIVE: 4,
            OUTLINED: 8,
            STRIKEOUT: 16,
            BOLD: 32,
            REGULAR: 64,
            USER_TYPO_METRICS: 128,
            WWS: 256,
            OBLIQUE: 512
          }, Er.prototype.usWidthClasses = {
            ULTRA_CONDENSED: 1,
            EXTRA_CONDENSED: 2,
            CONDENSED: 3,
            SEMI_CONDENSED: 4,
            MEDIUM: 5,
            SEMI_EXPANDED: 6,
            EXPANDED: 7,
            EXTRA_EXPANDED: 8,
            ULTRA_EXPANDED: 9
          }, Er.prototype.usWeightClasses = {
            THIN: 100,
            EXTRA_LIGHT: 200,
            LIGHT: 300,
            NORMAL: 400,
            MEDIUM: 500,
            SEMI_BOLD: 600,
            BOLD: 700,
            EXTRA_BOLD: 800,
            BLACK: 900
          };
          var Pr = {
            make: function make(e, t) {
              var r,
                  n,
                  i,
                  a,
                  o = new $.Table("fvar", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "offsetToData",
                type: "USHORT",
                value: 0
              }, {
                name: "countSizePairs",
                type: "USHORT",
                value: 2
              }, {
                name: "axisCount",
                type: "USHORT",
                value: e.axes.length
              }, {
                name: "axisSize",
                type: "USHORT",
                value: 20
              }, {
                name: "instanceCount",
                type: "USHORT",
                value: e.instances.length
              }, {
                name: "instanceSize",
                type: "USHORT",
                value: 4 + 4 * e.axes.length
              }]);
              o.offsetToData = o.sizeOf();

              for (var s = 0; s < e.axes.length; s++) {
                o.fields = o.fields.concat((r = s, n = e.axes[s], i = t, a = Cr(n.name, i), [{
                  name: "tag_" + r,
                  type: "TAG",
                  value: n.tag
                }, {
                  name: "minValue_" + r,
                  type: "FIXED",
                  value: n.minValue << 16
                }, {
                  name: "defaultValue_" + r,
                  type: "FIXED",
                  value: n.defaultValue << 16
                }, {
                  name: "maxValue_" + r,
                  type: "FIXED",
                  value: n.maxValue << 16
                }, {
                  name: "flags_" + r,
                  type: "USHORT",
                  value: 0
                }, {
                  name: "nameID_" + r,
                  type: "USHORT",
                  value: a
                }]));
              }

              for (var l = 0; l < e.instances.length; l++) {
                o.fields = o.fields.concat(Lr(l, e.instances[l], e.axes, t));
              }

              return o;
            },
            parse: function parse(e, t, r) {
              var n = new se.Parser(e, t),
                  i = n.parseULong();
              R.argument(65536 === i, "Unsupported fvar table version.");
              var a = n.parseOffset16();
              n.skip("uShort", 1);

              for (var o, s, l, u, h, f = n.parseUShort(), c = n.parseUShort(), p = n.parseUShort(), d = n.parseUShort(), g = [], m = 0; m < f; m++) {
                g.push((o = e, s = t + a + m * c, l = r, h = u = void 0, u = {}, h = new se.Parser(o, s), u.tag = h.parseTag(), u.minValue = h.parseFixed(), u.defaultValue = h.parseFixed(), u.maxValue = h.parseFixed(), h.skip("uShort", 1), u.name = l[h.parseUShort()] || {}, u));
              }

              for (var v = [], y = t + a + f * c, b = 0; b < p; b++) {
                v.push(Mr(e, y + b * d, g, r));
              }

              return {
                axes: g,
                instances: v
              };
            }
          },
              Rr = new Array(10);
          Rr[1] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              posFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              value: this.parseValueRecord()
            } : 2 === t ? {
              posFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              values: this.parseValueRecordList()
            } : void R.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
          }, Rr[2] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            R.assert(1 === t || 2 === t, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
            var r = this.parsePointer(ae.coverage),
                n = this.parseUShort(),
                i = this.parseUShort();
            if (1 === t) return {
              posFormat: t,
              coverage: r,
              valueFormat1: n,
              valueFormat2: i,
              pairSets: this.parseList(ae.pointer(ae.list(function () {
                return {
                  secondGlyph: this.parseUShort(),
                  value1: this.parseValueRecord(n),
                  value2: this.parseValueRecord(i)
                };
              })))
            };

            if (2 === t) {
              var a = this.parsePointer(ae.classDef),
                  o = this.parsePointer(ae.classDef),
                  s = this.parseUShort(),
                  l = this.parseUShort();
              return {
                posFormat: t,
                coverage: r,
                valueFormat1: n,
                valueFormat2: i,
                classDef1: a,
                classDef2: o,
                class1Count: s,
                class2Count: l,
                classRecords: this.parseList(s, ae.list(l, function () {
                  return {
                    value1: this.parseValueRecord(n),
                    value2: this.parseValueRecord(i)
                  };
                }))
              };
            }
          }, Rr[3] = function () {
            return {
              error: "GPOS Lookup 3 not supported"
            };
          }, Rr[4] = function () {
            return {
              error: "GPOS Lookup 4 not supported"
            };
          }, Rr[5] = function () {
            return {
              error: "GPOS Lookup 5 not supported"
            };
          }, Rr[6] = function () {
            return {
              error: "GPOS Lookup 6 not supported"
            };
          }, Rr[7] = function () {
            return {
              error: "GPOS Lookup 7 not supported"
            };
          }, Rr[8] = function () {
            return {
              error: "GPOS Lookup 8 not supported"
            };
          }, Rr[9] = function () {
            return {
              error: "GPOS Lookup 9 not supported"
            };
          };
          var Or = new Array(10);
          var kr = {
            parse: function parse(e, t) {
              var r = new ae(e, t = t || 0),
                  n = r.parseVersion(1);
              return R.argument(1 === n || 1.1 === n, "Unsupported GPOS table version " + n), 1 === n ? {
                version: n,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(Rr)
              } : {
                version: n,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(Rr),
                variations: r.parseFeatureVariationsList()
              };
            },
            make: function make(e) {
              return new $.Table("GPOS", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "scripts",
                type: "TABLE",
                value: new $.ScriptList(e.scripts)
              }, {
                name: "features",
                type: "TABLE",
                value: new $.FeatureList(e.features)
              }, {
                name: "lookups",
                type: "TABLE",
                value: new $.LookupList(e.lookups, Or)
              }]);
            }
          };
          var Dr = {
            parse: function parse(e, t) {
              var r = new se.Parser(e, t),
                  n = r.parseUShort();
              if (0 === n) return function (e) {
                var t = {};
                e.skip("uShort");
                var r = e.parseUShort();
                R.argument(0 === r, "Unsupported kern sub-table version."), e.skip("uShort", 2);
                var n = e.parseUShort();
                e.skip("uShort", 3);

                for (var i = 0; i < n; i += 1) {
                  var a = e.parseUShort(),
                      o = e.parseUShort(),
                      s = e.parseShort();
                  t[a + "," + o] = s;
                }

                return t;
              }(r);
              if (1 === n) return function (e) {
                var t = {};
                e.skip("uShort"), 1 < e.parseULong() && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
                var r = 255 & e.parseUShort();

                if (e.skip("uShort"), 0 == r) {
                  var n = e.parseUShort();
                  e.skip("uShort", 3);

                  for (var i = 0; i < n; i += 1) {
                    var a = e.parseUShort(),
                        o = e.parseUShort(),
                        s = e.parseShort();
                    t[a + "," + o] = s;
                  }
                }

                return t;
              }(r);
              throw new Error("Unsupported kern table version (" + n + ").");
            }
          };
          var Ar = {
            parse: function parse(e, t, r, n) {
              for (var i = new se.Parser(e, t), a = n ? i.parseUShort : i.parseULong, o = [], s = 0; s < r + 1; s += 1) {
                var l = a.call(i);
                n && (l *= 2), o.push(l);
              }

              return o;
            }
          };

          function Ir(e, r) {
            jr("fs").readFile(e, function (e, t) {
              if (e) return r(e.message);
              r(null, Ct(t));
            });
          }

          function Ur(e, t) {
            var r = new XMLHttpRequest();
            r.open("get", e, !0), r.responseType = "arraybuffer", r.onload = function () {
              return r.response ? t(null, r.response) : t("Font could not be loaded: " + r.statusText);
            }, r.onerror = function () {
              t("Font could not be loaded");
            }, r.send();
          }

          function Nr(e, t) {
            for (var r = [], n = 12, i = 0; i < t; i += 1) {
              var a = se.getTag(e, n),
                  o = se.getULong(e, n + 4),
                  s = se.getULong(e, n + 8),
                  l = se.getULong(e, n + 12);
              r.push({
                tag: a,
                checksum: o,
                offset: s,
                length: l,
                compression: !1
              }), n += 16;
            }

            return r;
          }

          function Fr(e, t) {
            if ("WOFF" !== t.compression) return {
              data: e,
              offset: t.offset
            };
            var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
                n = new Uint8Array(t.length);
            if (i(r, n), n.byteLength !== t.length) throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
            return {
              data: new DataView(n.buffer, 0),
              offset: 0
            };
          }

          function Gr(e) {
            var t,
                r,
                n,
                i,
                a,
                o,
                s,
                l,
                u,
                h,
                f,
                c,
                p,
                d,
                g = new Er({
              empty: !0
            }),
                m = new DataView(e, 0),
                v = [],
                y = se.getTag(m, 0);
            if (y === String.fromCharCode(0, 1, 0, 0) || "true" === y || "typ1" === y) g.outlinesFormat = "truetype", v = Nr(m, n = se.getUShort(m, 4));else if ("OTTO" === y) g.outlinesFormat = "cff", v = Nr(m, n = se.getUShort(m, 4));else {
              if ("wOFF" !== y) throw new Error("Unsupported OpenType signature " + y);
              var b = se.getTag(m, 4);
              if (b === String.fromCharCode(0, 1, 0, 0)) g.outlinesFormat = "truetype";else {
                if ("OTTO" !== b) throw new Error("Unsupported OpenType flavor " + y);
                g.outlinesFormat = "cff";
              }

              v = function (e, t) {
                for (var r = [], n = 44, i = 0; i < t; i += 1) {
                  var a = se.getTag(e, n),
                      o = se.getULong(e, n + 4),
                      s = se.getULong(e, n + 8),
                      l = se.getULong(e, n + 12),
                      u = void 0;
                  u = s < l && "WOFF", r.push({
                    tag: a,
                    offset: o,
                    compression: u,
                    compressedLength: s,
                    length: l
                  }), n += 20;
                }

                return r;
              }(m, n = se.getUShort(m, 12));
            }

            for (var _ = 0; _ < n; _ += 1) {
              var x = v[_],
                  S = void 0;

              switch (x.tag) {
                case "cmap":
                  S = Fr(m, x), g.tables.cmap = le.parse(S.data, S.offset), g.encoding = new de(g.tables.cmap);
                  break;

                case "cvt ":
                  S = Fr(m, x), d = new se.Parser(S.data, S.offset), g.tables.cvt = d.parseShortList(x.length / 2);
                  break;

                case "fvar":
                  a = x;
                  break;

                case "fpgm":
                  S = Fr(m, x), d = new se.Parser(S.data, S.offset), g.tables.fpgm = d.parseByteList(x.length);
                  break;

                case "head":
                  S = Fr(m, x), g.tables.head = Be.parse(S.data, S.offset), g.unitsPerEm = g.tables.head.unitsPerEm, t = g.tables.head.indexToLocFormat;
                  break;

                case "hhea":
                  S = Fr(m, x), g.tables.hhea = je.parse(S.data, S.offset), g.ascender = g.tables.hhea.ascender, g.descender = g.tables.hhea.descender, g.numberOfHMetrics = g.tables.hhea.numberOfHMetrics;
                  break;

                case "hmtx":
                  u = x;
                  break;

                case "ltag":
                  S = Fr(m, x), r = Ve.parse(S.data, S.offset);
                  break;

                case "maxp":
                  S = Fr(m, x), g.tables.maxp = He.parse(S.data, S.offset), g.numGlyphs = g.tables.maxp.numGlyphs;
                  break;

                case "name":
                  c = x;
                  break;

                case "OS/2":
                  S = Fr(m, x), g.tables.os2 = at.parse(S.data, S.offset);
                  break;

                case "post":
                  S = Fr(m, x), g.tables.post = ot.parse(S.data, S.offset), g.glyphNames = new me(g.tables.post);
                  break;

                case "prep":
                  S = Fr(m, x), d = new se.Parser(S.data, S.offset), g.tables.prep = d.parseByteList(x.length);
                  break;

                case "glyf":
                  o = x;
                  break;

                case "loca":
                  f = x;
                  break;

                case "CFF ":
                  i = x;
                  break;

                case "kern":
                  h = x;
                  break;

                case "GPOS":
                  s = x;
                  break;

                case "GSUB":
                  l = x;
                  break;

                case "meta":
                  p = x;
              }
            }

            var w = Fr(m, c);

            if (g.tables.name = nt.parse(w.data, w.offset, r), g.names = g.tables.name, o && f) {
              var T = 0 === t,
                  E = Fr(m, f),
                  C = Ar.parse(E.data, E.offset, g.numGlyphs, T),
                  L = Fr(m, o);
              g.glyphs = Nt.parse(L.data, L.offset, C, g);
            } else {
              if (!i) throw new Error("Font doesn't contain TrueType or CFF outlines.");
              var M = Fr(m, i);
              Ge.parse(M.data, M.offset, g);
            }

            var P = Fr(m, u);

            if (ze.parse(P.data, P.offset, g.numberOfHMetrics, g.numGlyphs, g.glyphs), function (e) {
              for (var t, r = e.tables.cmap.glyphIndexMap, n = Object.keys(r), i = 0; i < n.length; i += 1) {
                var a = n[i],
                    o = r[a];
                (t = e.glyphs.get(o)).addUnicode(parseInt(a));
              }

              for (var s = 0; s < e.glyphs.length; s += 1) {
                t = e.glyphs.get(s), e.cffEncoding ? e.isCIDFont ? t.name = "gid" + s : t.name = e.cffEncoding.charset[s] : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(s));
              }
            }(g), h) {
              var R = Fr(m, h);
              g.kerningPairs = Dr.parse(R.data, R.offset);
            } else g.kerningPairs = {};

            if (s) {
              var O = Fr(m, s);
              g.tables.gpos = kr.parse(O.data, O.offset), g.position.init();
            }

            if (l) {
              var k = Fr(m, l);
              g.tables.gsub = ht.parse(k.data, k.offset);
            }

            if (a) {
              var D = Fr(m, a);
              g.tables.fvar = Pr.parse(D.data, D.offset, g.names);
            }

            if (p) {
              var A = Fr(m, p);
              g.tables.meta = ft.parse(A.data, A.offset), g.metas = g.tables.meta;
            }

            return g;
          }

          E.Font = Er, E.Glyph = ye, E.Path = I, E.BoundingBox = L, E._parse = se, E.parse = Gr, E.load = function (e, n) {
            ("undefined" == typeof window ? Ir : Ur)(e, function (e, t) {
              if (e) return n(e);
              var r;

              try {
                r = Gr(t);
              } catch (e) {
                return n(e, null);
              }

              return n(null, r);
            });
          }, E.loadSync = function (e) {
            return Gr(Ct(jr("fs").readFileSync(e)));
          }, Object.defineProperty(E, "__esModule", {
            value: !0
          });
        }("object" == _typeof(r) && void 0 !== t ? r : e.opentype = {});
      }).call(this, jr("buffer").Buffer);
    }, {
      buffer: 21,
      fs: 20
    }],
    30: [function (e, t, u) {
      (function (i) {
        function a(e, t) {
          for (var r = 0, n = e.length - 1; 0 <= n; n--) {
            var i = e[n];
            "." === i ? e.splice(n, 1) : ".." === i ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
          }

          if (t) for (; r--;) {
            e.unshift("..");
          }
          return e;
        }

        function o(e, t) {
          if (e.filter) return e.filter(t);

          for (var r = [], n = 0; n < e.length; n++) {
            t(e[n], n, e) && r.push(e[n]);
          }

          return r;
        }

        u.resolve = function () {
          for (var e = "", t = !1, r = arguments.length - 1; -1 <= r && !t; r--) {
            var n = 0 <= r ? arguments[r] : i.cwd();
            if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
            n && (e = n + "/" + e, t = "/" === n.charAt(0));
          }

          return (t ? "/" : "") + (e = a(o(e.split("/"), function (e) {
            return !!e;
          }), !t).join("/")) || ".";
        }, u.normalize = function (e) {
          var t = u.isAbsolute(e),
              r = "/" === n(e, -1);
          return (e = a(o(e.split("/"), function (e) {
            return !!e;
          }), !t).join("/")) || t || (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
        }, u.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }, u.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return u.normalize(o(e, function (e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
            return e;
          }).join("/"));
        }, u.relative = function (e, t) {
          function r(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) {
              ;
            }

            for (var r = e.length - 1; 0 <= r && "" === e[r]; r--) {
              ;
            }

            return r < t ? [] : e.slice(t, r - t + 1);
          }

          e = u.resolve(e).substr(1), t = u.resolve(t).substr(1);

          for (var n = r(e.split("/")), i = r(t.split("/")), a = Math.min(n.length, i.length), o = a, s = 0; s < a; s++) {
            if (n[s] !== i[s]) {
              o = s;
              break;
            }
          }

          var l = [];

          for (s = o; s < n.length; s++) {
            l.push("..");
          }

          return (l = l.concat(i.slice(o))).join("/");
        }, u.sep = "/", u.delimiter = ":", u.dirname = function (e) {
          if ("string" != typeof e && (e += ""), 0 === e.length) return ".";

          for (var t = e.charCodeAt(0), r = 47 === t, n = -1, i = !0, a = e.length - 1; 1 <= a; --a) {
            if (47 === (t = e.charCodeAt(a))) {
              if (!i) {
                n = a;
                break;
              }
            } else i = !1;
          }

          return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n);
        }, u.basename = function (e, t) {
          var r = function (e) {
            "string" != typeof e && (e += "");
            var t,
                r = 0,
                n = -1,
                i = !0;

            for (t = e.length - 1; 0 <= t; --t) {
              if (47 === e.charCodeAt(t)) {
                if (!i) {
                  r = t + 1;
                  break;
                }
              } else -1 === n && (i = !1, n = t + 1);
            }

            return -1 === n ? "" : e.slice(r, n);
          }(e);

          return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
        }, u.extname = function (e) {
          "string" != typeof e && (e += "");

          for (var t = -1, r = 0, n = -1, i = !0, a = 0, o = e.length - 1; 0 <= o; --o) {
            var s = e.charCodeAt(o);

            if (47 === s) {
              if (i) continue;
              r = o + 1;
              break;
            }

            -1 === n && (i = !1, n = o + 1), 46 === s ? -1 === t ? t = o : 1 !== a && (a = 1) : -1 !== t && (a = -1);
          }

          return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
        };
        var n = "b" === "ab".substr(-1) ? function (e, t, r) {
          return e.substr(t, r);
        } : function (e, t, r) {
          return t < 0 && (t = e.length + t), e.substr(t, r);
        };
      }).call(this, e("_process"));
    }, {
      _process: 31
    }],
    31: [function (e, t, r) {
      var n,
          i,
          a = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined");
      }

      function s() {
        throw new Error("clearTimeout has not been defined");
      }

      function l(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }

      !function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }

        try {
          i = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          i = s;
        }
      }();
      var u,
          h = [],
          f = !1,
          c = -1;

      function p() {
        f && u && (f = !1, u.length ? h = u.concat(h) : c = -1, h.length && d());
      }

      function d() {
        if (!f) {
          var e = l(p);
          f = !0;

          for (var t = h.length; t;) {
            for (u = h, h = []; ++c < t;) {
              u && u[c].run();
            }

            c = -1, t = h.length;
          }

          u = null, f = !1, function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);

            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          }(e);
        }
      }

      function g(e, t) {
        this.fun = e, this.array = t;
      }

      function m() {}

      a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }
        h.push(new g(e, t)), 1 !== h.length || f || l(d);
      }, g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function (e) {
        return [];
      }, a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function () {
        return "/";
      }, a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function () {
        return 0;
      };
    }, {}],
    32: [function (e, t, r) {
      "use strict";

      var n,
          i = (n = e("./core/main")) && n.__esModule ? n : {
        default: n
      };
      e("./core/constants"), e("./core/environment"), e("./core/error_helpers"), e("./core/preload"), e("./core/p5.Element"), e("./core/p5.Renderer"), e("./core/rendering"), e("./core/structure"), e("./core/transform"), e("./core/shape/2d_primitives"), e("./core/shape/attributes"), e("./core/shape/curves"), e("./core/shape/vertex"), e("./color/creating_reading"), e("./color/p5.Color"), e("./color/setting"), e("./data/p5.TypedDict"), e("./events/mouse"), e("./image/image"), e("./image/loading_displaying"), e("./image/p5.Image"), e("./math/calculation"), e("./math/math"), e("./math/p5.Vector"), e("./math/random"), e("./math/trigonometry"), e("./typography/attributes"), e("./typography/loading_displaying"), e("./utilities/array_functions"), e("./utilities/string_functions"), e("./utilities/time_date"), e("./core/init"), t.exports = i.default;
    }, {
      "./color/creating_reading": 34,
      "./color/p5.Color": 35,
      "./color/setting": 36,
      "./core/constants": 37,
      "./core/environment": 38,
      "./core/error_helpers": 39,
      "./core/init": 41,
      "./core/main": 43,
      "./core/p5.Element": 44,
      "./core/p5.Renderer": 46,
      "./core/preload": 48,
      "./core/rendering": 49,
      "./core/shape/2d_primitives": 50,
      "./core/shape/attributes": 51,
      "./core/shape/curves": 52,
      "./core/shape/vertex": 53,
      "./core/structure": 55,
      "./core/transform": 56,
      "./data/p5.TypedDict": 57,
      "./events/mouse": 58,
      "./image/image": 60,
      "./image/loading_displaying": 61,
      "./image/p5.Image": 62,
      "./math/calculation": 63,
      "./math/math": 64,
      "./math/p5.Vector": 65,
      "./math/random": 66,
      "./math/trigonometry": 67,
      "./typography/attributes": 68,
      "./typography/loading_displaying": 69,
      "./utilities/array_functions": 70,
      "./utilities/string_functions": 71,
      "./utilities/time_date": 72
    }],
    33: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.ColorConversion = {}, i.default.ColorConversion._hsbaToHSLA = function (e) {
        var t = e[0],
            r = e[1],
            n = e[2],
            i = (2 - r) * n / 2;
        return 0 != i && (1 == i ? r = 0 : i < .5 ? r /= 2 - r : r = r * n / (2 - 2 * i)), [t, r, i, e[3]];
      }, i.default.ColorConversion._hsbaToRGBA = function (e) {
        var t = 6 * e[0],
            r = e[1],
            n = e[2],
            i = [];
        if (0 === r) i = [n, n, n, e[3]];else {
          var a,
              o,
              s,
              l = Math.floor(t),
              u = n * (1 - r),
              h = n * (1 - r * (t - l)),
              f = n * (1 - r * (1 + l - t));
          s = 1 === l ? (a = h, o = n, u) : 2 === l ? (a = u, o = n, f) : 3 === l ? (a = u, o = h, n) : 4 === l ? (a = f, o = u, n) : 5 === l ? (a = n, o = u, h) : (a = n, o = f, u), i = [a, o, s, e[3]];
        }
        return i;
      }, i.default.ColorConversion._hslaToHSBA = function (e) {
        var t,
            r = e[0],
            n = e[1],
            i = e[2];
        return [r, n = 2 * ((t = i < .5 ? (1 + n) * i : i + n - i * n) - i) / t, t, e[3]];
      }, i.default.ColorConversion._hslaToRGBA = function (e) {
        var t = 6 * e[0],
            r = e[1],
            n = e[2],
            i = [];
        if (0 === r) i = [n, n, n, e[3]];else {
          var a,
              o = 2 * n - (a = n < .5 ? (1 + r) * n : n + r - n * r),
              s = function s(e, t, r) {
            return e < 0 ? e += 6 : 6 <= e && (e -= 6), e < 1 ? t + (r - t) * e : e < 3 ? r : e < 4 ? t + (r - t) * (4 - e) : t;
          };

          i = [s(2 + t, o, a), s(t, o, a), s(t - 2, o, a), e[3]];
        }
        return i;
      }, i.default.ColorConversion._rgbaToHSBA = function (e) {
        var t,
            r,
            n = e[0],
            i = e[1],
            a = e[2],
            o = Math.max(n, i, a),
            s = o - Math.min(n, i, a);
        return 0 == s ? r = t = 0 : (r = s / o, n === o ? t = (i - a) / s : i === o ? t = 2 + (a - n) / s : a === o && (t = 4 + (n - i) / s), t < 0 ? t += 6 : 6 <= t && (t -= 6)), [t / 6, r, o, e[3]];
      }, i.default.ColorConversion._rgbaToHSLA = function (e) {
        var t,
            r,
            n = e[0],
            i = e[1],
            a = e[2],
            o = Math.max(n, i, a),
            s = Math.min(n, i, a),
            l = o + s,
            u = o - s;
        return 0 == u ? r = t = 0 : (r = l < 1 ? u / l : u / (2 - l), n === o ? t = (i - a) / u : i === o ? t = 2 + (a - n) / u : a === o && (t = 4 + (n - i) / u), t < 0 ? t += 6 : 6 <= t && (t -= 6)), [t / 6, r, l / 2, e[3]];
      };
      var a = i.default.ColorConversion;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    34: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          f = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          c = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      e("./p5.Color"), e("../core/error_helpers"), f.default.prototype.alpha = function (e) {
        return f.default._validateParameters("alpha", arguments), this.color(e)._getAlpha();
      }, f.default.prototype.blue = function (e) {
        return f.default._validateParameters("blue", arguments), this.color(e)._getBlue();
      }, f.default.prototype.brightness = function (e) {
        return f.default._validateParameters("brightness", arguments), this.color(e)._getBrightness();
      }, f.default.prototype.color = function () {
        if (f.default._validateParameters("color", arguments), arguments[0] instanceof f.default.Color) return arguments[0];
        var e = arguments[0] instanceof Array ? arguments[0] : arguments;
        return new f.default.Color(this, e);
      }, f.default.prototype.green = function (e) {
        return f.default._validateParameters("green", arguments), this.color(e)._getGreen();
      }, f.default.prototype.hue = function (e) {
        return f.default._validateParameters("hue", arguments), this.color(e)._getHue();
      }, f.default.prototype.lerpColor = function (e, t, r) {
        f.default._validateParameters("lerpColor", arguments);

        var n,
            i,
            a,
            o,
            s,
            l,
            u = this._colorMode,
            h = this._colorMaxes;
        if (u === c.RGB) s = e.levels.map(function (e) {
          return e / 255;
        }), l = t.levels.map(function (e) {
          return e / 255;
        });else if (u === c.HSB) e._getBrightness(), t._getBrightness(), s = e.hsba, l = t.hsba;else {
          if (u !== c.HSL) throw new Error("".concat(u, "cannot be used for interpolation."));
          e._getLightness(), t._getLightness(), s = e.hsla, l = t.hsla;
        }
        return r = Math.max(Math.min(r, 1), 0), void 0 === this.lerp && (this.lerp = function (e, t, r) {
          return r * (t - e) + e;
        }), n = this.lerp(s[0], l[0], r), i = this.lerp(s[1], l[1], r), a = this.lerp(s[2], l[2], r), o = this.lerp(s[3], l[3], r), n *= h[u][0], i *= h[u][1], a *= h[u][2], o *= h[u][3], this.color(n, i, a, o);
      }, f.default.prototype.lightness = function (e) {
        return f.default._validateParameters("lightness", arguments), this.color(e)._getLightness();
      }, f.default.prototype.red = function (e) {
        return f.default._validateParameters("red", arguments), this.color(e)._getRed();
      }, f.default.prototype.saturation = function (e) {
        return f.default._validateParameters("saturation", arguments), this.color(e)._getSaturation();
      };
      var i = f.default;
      r.default = i;
    }, {
      "../core/constants": 37,
      "../core/error_helpers": 39,
      "../core/main": 43,
      "./p5.Color": 35
    }],
    35: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var f = n(e("../core/main")),
          c = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          p = n(e("./color_conversion"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      f.default.Color = function (e, t) {
        if (this._storeModeAndMaxes(e._colorMode, e._colorMaxes), this.mode !== c.RGB && this.mode !== c.HSL && this.mode !== c.HSB) throw new Error("".concat(this.mode, " is an invalid colorMode."));
        return this._array = f.default.Color._parseInputs.apply(this, t), this._calculateLevels(), this;
      }, f.default.Color.prototype.toString = function (e) {
        var t = this.levels,
            r = this._array,
            n = r[3];

        switch (e) {
          case "#rrggbb":
            return "#".concat(t[0] < 16 ? "0".concat(t[0].toString(16)) : t[0].toString(16), t[1] < 16 ? "0".concat(t[1].toString(16)) : t[1].toString(16), t[2] < 16 ? "0".concat(t[2].toString(16)) : t[2].toString(16));

          case "#rrggbbaa":
            return "#".concat(t[0] < 16 ? "0".concat(t[0].toString(16)) : t[0].toString(16), t[1] < 16 ? "0".concat(t[1].toString(16)) : t[1].toString(16), t[2] < 16 ? "0".concat(t[2].toString(16)) : t[2].toString(16), t[3] < 16 ? "0".concat(t[2].toString(16)) : t[3].toString(16));

          case "#rgb":
            return "#".concat(Math.round(15 * r[0]).toString(16), Math.round(15 * r[1]).toString(16), Math.round(15 * r[2]).toString(16));

          case "#rgba":
            return "#".concat(Math.round(15 * r[0]).toString(16), Math.round(15 * r[1]).toString(16), Math.round(15 * r[2]).toString(16), Math.round(15 * r[3]).toString(16));

          case "rgb":
            return "rgb(".concat(t[0], ", ", t[1], ", ", t[2], ")");

          case "rgb%":
            return "rgb(".concat((100 * r[0]).toPrecision(3), "%, ", (100 * r[1]).toPrecision(3), "%, ", (100 * r[2]).toPrecision(3), "%)");

          case "rgba%":
            return "rgba(".concat((100 * r[0]).toPrecision(3), "%, ", (100 * r[1]).toPrecision(3), "%, ", (100 * r[2]).toPrecision(3), "%, ", (100 * r[3]).toPrecision(3), "%)");

          case "hsb":
          case "hsv":
            return this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), "hsb(".concat(this.hsba[0] * this.maxes[c.HSB][0], ", ", this.hsba[1] * this.maxes[c.HSB][1], ", ", this.hsba[2] * this.maxes[c.HSB][2], ")");

          case "hsb%":
          case "hsv%":
            return this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), "hsb(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%)");

          case "hsba":
          case "hsva":
            return this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), "hsba(".concat(this.hsba[0] * this.maxes[c.HSB][0], ", ", this.hsba[1] * this.maxes[c.HSB][1], ", ", this.hsba[2] * this.maxes[c.HSB][2], ", ", n, ")");

          case "hsba%":
          case "hsva%":
            return this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), "hsba(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%, ", (100 * n).toPrecision(3), "%)");

          case "hsl":
            return this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), "hsl(".concat(this.hsla[0] * this.maxes[c.HSL][0], ", ", this.hsla[1] * this.maxes[c.HSL][1], ", ", this.hsla[2] * this.maxes[c.HSL][2], ")");

          case "hsl%":
            return this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%)");

          case "hsla":
            return this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), "hsla(".concat(this.hsla[0] * this.maxes[c.HSL][0], ", ", this.hsla[1] * this.maxes[c.HSL][1], ", ", this.hsla[2] * this.maxes[c.HSL][2], ", ", n, ")");

          case "hsla%":
            return this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%, ", (100 * n).toPrecision(3), "%)");

          case "rgba":
          default:
            return "rgba(".concat(t[0], ",", t[1], ",", t[2], ",", n, ")");
        }
      }, f.default.Color.prototype.setRed = function (e) {
        this._array[0] = e / this.maxes[c.RGB][0], this._calculateLevels();
      }, f.default.Color.prototype.setGreen = function (e) {
        this._array[1] = e / this.maxes[c.RGB][1], this._calculateLevels();
      }, f.default.Color.prototype.setBlue = function (e) {
        this._array[2] = e / this.maxes[c.RGB][2], this._calculateLevels();
      }, f.default.Color.prototype.setAlpha = function (e) {
        this._array[3] = e / this.maxes[this.mode][3], this._calculateLevels();
      }, f.default.Color.prototype._calculateLevels = function () {
        for (var e = this._array, t = this.levels = new Array(e.length), r = e.length - 1; 0 <= r; --r) {
          t[r] = Math.round(255 * e[r]);
        }
      }, f.default.Color.prototype._getAlpha = function () {
        return this._array[3] * this.maxes[this.mode][3];
      }, f.default.Color.prototype._storeModeAndMaxes = function (e, t) {
        this.mode = e, this.maxes = t;
      }, f.default.Color.prototype._getMode = function () {
        return this.mode;
      }, f.default.Color.prototype._getMaxes = function () {
        return this.maxes;
      }, f.default.Color.prototype._getBlue = function () {
        return this._array[2] * this.maxes[c.RGB][2];
      }, f.default.Color.prototype._getBrightness = function () {
        return this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[c.HSB][2];
      }, f.default.Color.prototype._getGreen = function () {
        return this._array[1] * this.maxes[c.RGB][1];
      }, f.default.Color.prototype._getHue = function () {
        return this.mode === c.HSB ? (this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[c.HSB][0]) : (this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[c.HSL][0]);
      }, f.default.Color.prototype._getLightness = function () {
        return this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[c.HSL][2];
      }, f.default.Color.prototype._getRed = function () {
        return this._array[0] * this.maxes[c.RGB][0];
      }, f.default.Color.prototype._getSaturation = function () {
        return this.mode === c.HSB ? (this.hsba || (this.hsba = p.default._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[c.HSB][1]) : (this.hsla || (this.hsla = p.default._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[c.HSL][1]);
      };
      var d = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      },
          i = /\s*/,
          a = /(\d{1,3})/,
          l = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
          u = new RegExp("".concat(l.source, "%")),
          g = {
        HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        HEX4: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
        HEX8: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
        RGB: new RegExp(["^rgb\\(", a.source, ",", a.source, ",", a.source, "\\)$"].join(i.source), "i"),
        RGB_PERCENT: new RegExp(["^rgb\\(", u.source, ",", u.source, ",", u.source, "\\)$"].join(i.source), "i"),
        RGBA: new RegExp(["^rgba\\(", a.source, ",", a.source, ",", a.source, ",", l.source, "\\)$"].join(i.source), "i"),
        RGBA_PERCENT: new RegExp(["^rgba\\(", u.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(i.source), "i"),
        HSL: new RegExp(["^hsl\\(", a.source, ",", u.source, ",", u.source, "\\)$"].join(i.source), "i"),
        HSLA: new RegExp(["^hsla\\(", a.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(i.source), "i"),
        HSB: new RegExp(["^hsb\\(", a.source, ",", u.source, ",", u.source, "\\)$"].join(i.source), "i"),
        HSBA: new RegExp(["^hsba\\(", a.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(i.source), "i")
      };

      f.default.Color._parseInputs = function (e, t, r, n) {
        var i,
            a = arguments.length,
            o = this.mode,
            s = this.maxes[o],
            l = [];

        if (3 <= a) {
          for (l[0] = e / s[0], l[1] = t / s[1], l[2] = r / s[2], l[3] = "number" == typeof n ? n / s[3] : 1, i = l.length - 1; 0 <= i; --i) {
            var u = l[i];
            u < 0 ? l[i] = 0 : 1 < u && (l[i] = 1);
          }

          return o === c.HSL ? p.default._hslaToRGBA(l) : o === c.HSB ? p.default._hsbaToRGBA(l) : l;
        }

        if (1 === a && "string" == typeof e) {
          var h = e.trim().toLowerCase();
          if (d[h]) return f.default.Color._parseInputs.call(this, d[h]);
          if (g.HEX3.test(h)) return (l = g.HEX3.exec(h).slice(1).map(function (e) {
            return parseInt(e + e, 16) / 255;
          }))[3] = 1, l;
          if (g.HEX6.test(h)) return (l = g.HEX6.exec(h).slice(1).map(function (e) {
            return parseInt(e, 16) / 255;
          }))[3] = 1, l;
          if (g.HEX4.test(h)) return l = g.HEX4.exec(h).slice(1).map(function (e) {
            return parseInt(e + e, 16) / 255;
          });
          if (g.HEX8.test(h)) return l = g.HEX8.exec(h).slice(1).map(function (e) {
            return parseInt(e, 16) / 255;
          });
          if (g.RGB.test(h)) return (l = g.RGB.exec(h).slice(1).map(function (e) {
            return e / 255;
          }))[3] = 1, l;
          if (g.RGB_PERCENT.test(h)) return (l = g.RGB_PERCENT.exec(h).slice(1).map(function (e) {
            return parseFloat(e) / 100;
          }))[3] = 1, l;
          if (g.RGBA.test(h)) return l = g.RGBA.exec(h).slice(1).map(function (e, t) {
            return 3 === t ? parseFloat(e) : e / 255;
          });
          if (g.RGBA_PERCENT.test(h)) return l = g.RGBA_PERCENT.exec(h).slice(1).map(function (e, t) {
            return 3 === t ? parseFloat(e) : parseFloat(e) / 100;
          });
          if (g.HSL.test(h) ? (l = g.HSL.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100;
          }))[3] = 1 : g.HSLA.test(h) && (l = g.HSLA.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100;
          })), (l = l.map(function (e) {
            return Math.max(Math.min(e, 1), 0);
          })).length) return p.default._hslaToRGBA(l);

          if (g.HSB.test(h) ? (l = g.HSB.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100;
          }))[3] = 1 : g.HSBA.test(h) && (l = g.HSBA.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100;
          })), l.length) {
            for (i = l.length - 1; 0 <= i; --i) {
              l[i] = Math.max(Math.min(l[i], 1), 0);
            }

            return p.default._hsbaToRGBA(l);
          }

          l = [1, 1, 1, 1];
        } else {
          if (1 !== a && 2 !== a || "number" != typeof e) throw new Error("".concat(arguments, "is not a valid color representation."));
          l[0] = e / s[2], l[1] = e / s[2], l[2] = e / s[2], l[3] = "number" == typeof t ? t / s[3] : 1, l = l.map(function (e) {
            return Math.max(Math.min(e, 1), 0);
          });
        }

        return l;
      };

      var h = f.default.Color;
      r.default = h;
    }, {
      "../core/constants": 37,
      "../core/main": 43,
      "./color_conversion": 33
    }],
    36: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          s = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function u() {
          return e;
        }, e;
      }

      e("./p5.Color"), s.default.prototype.background = function () {
        var e;
        return (e = this._renderer).background.apply(e, arguments), this;
      }, s.default.prototype.clear = function () {
        return this._renderer.clear(), this;
      }, s.default.prototype.colorMode = function (e, t, r, n, i) {
        if (s.default._validateParameters("colorMode", arguments), e === l.RGB || e === l.HSB || e === l.HSL) {
          this._colorMode = e;
          var a = this._colorMaxes[e];
          2 === arguments.length ? (a[0] = t, a[1] = t, a[2] = t, a[3] = t) : 4 === arguments.length ? (a[0] = t, a[1] = r, a[2] = n) : 5 === arguments.length && (a[0] = t, a[1] = r, a[2] = n, a[3] = i);
        }

        return this;
      }, s.default.prototype.fill = function () {
        var e;
        return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), (e = this._renderer).fill.apply(e, arguments), this;
      }, s.default.prototype.noFill = function () {
        return this._renderer._setProperty("_doFill", !1), this;
      }, s.default.prototype.noStroke = function () {
        return this._renderer._setProperty("_doStroke", !1), this;
      }, s.default.prototype.stroke = function () {
        var e;
        return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), (e = this._renderer).stroke.apply(e, arguments), this;
      }, s.default.prototype.erase = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 255,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 255;
        return this._renderer.erase(e, t), this;
      }, s.default.prototype.noErase = function () {
        return this._renderer.noErase(), this;
      };
      var i = s.default;
      r.default = i;
    }, {
      "../core/constants": 37,
      "../core/main": 43,
      "./p5.Color": 35
    }],
    37: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.FILL = r.STROKE = r.CURVE = r.BEZIER = r.QUADRATIC = r.LINEAR = r._CTX_MIDDLE = r._DEFAULT_LEADMULT = r._DEFAULT_TEXT_FILL = r.BOLDITALIC = r.BOLD = r.ITALIC = r.NORMAL = r.BLUR = r.ERODE = r.DILATE = r.POSTERIZE = r.INVERT = r.OPAQUE = r.GRAY = r.THRESHOLD = r.BURN = r.DODGE = r.SOFT_LIGHT = r.HARD_LIGHT = r.OVERLAY = r.REPLACE = r.SCREEN = r.MULTIPLY = r.EXCLUSION = r.SUBTRACT = r.DIFFERENCE = r.LIGHTEST = r.DARKEST = r.ADD = r.REMOVE = r.BLEND = r.UP_ARROW = r.TAB = r.SHIFT = r.RIGHT_ARROW = r.RETURN = r.OPTION = r.LEFT_ARROW = r.ESCAPE = r.ENTER = r.DOWN_ARROW = r.DELETE = r.CONTROL = r.BACKSPACE = r.ALT = r.AUTO = r.HSL = r.HSB = r.RGB = r.MITER = r.BEVEL = r.ROUND = r.SQUARE = r.PROJECT = r.PIE = r.CHORD = r.OPEN = r.CLOSE = r.TESS = r.QUAD_STRIP = r.QUADS = r.TRIANGLE_STRIP = r.TRIANGLE_FAN = r.TRIANGLES = r.LINE_LOOP = r.LINE_STRIP = r.LINES = r.POINTS = r.BASELINE = r.BOTTOM = r.TOP = r.CENTER = r.LEFT = r.RIGHT = r.RADIUS = r.CORNERS = r.CORNER = r.RAD_TO_DEG = r.DEG_TO_RAD = r.RADIANS = r.DEGREES = r.TWO_PI = r.TAU = r.QUARTER_PI = r.PI = r.HALF_PI = r.WAIT = r.TEXT = r.MOVE = r.HAND = r.CROSS = r.ARROW = r.WEBGL = r.P2D = void 0, r.AXES = r.GRID = r._DEFAULT_FILL = r._DEFAULT_STROKE = r.PORTRAIT = r.LANDSCAPE = r.MIRROR = r.CLAMP = r.REPEAT = r.NEAREST = r.IMAGE = r.IMMEDIATE = r.TEXTURE = void 0;
      var n = Math.PI;
      r.P2D = "p2d";
      r.WEBGL = "webgl";
      r.ARROW = "default";
      r.CROSS = "crosshair";
      r.HAND = "pointer";
      r.MOVE = "move";
      r.TEXT = "text";
      r.WAIT = "wait";
      var i = n / 2;
      r.HALF_PI = i;
      var a = n;
      r.PI = a;
      var o = n / 4;
      r.QUARTER_PI = o;
      var s = 2 * n;
      r.TAU = s;
      var l = 2 * n;
      r.TWO_PI = l;
      r.DEGREES = "degrees";
      r.RADIANS = "radians";
      var u = n / 180;
      r.DEG_TO_RAD = u;
      var h = 180 / n;
      r.RAD_TO_DEG = h;
      r.CORNER = "corner";
      r.CORNERS = "corners";
      r.RADIUS = "radius";
      r.RIGHT = "right";
      r.LEFT = "left";
      r.CENTER = "center";
      r.TOP = "top";
      r.BOTTOM = "bottom";
      r.BASELINE = "alphabetic";
      r.POINTS = 0;
      r.LINES = 1;
      r.LINE_STRIP = 3;
      r.LINE_LOOP = 2;
      r.TRIANGLES = 4;
      r.TRIANGLE_FAN = 6;
      r.TRIANGLE_STRIP = 5;
      r.QUADS = "quads";
      r.QUAD_STRIP = "quad_strip";
      r.TESS = "tess";
      r.CLOSE = "close";
      r.OPEN = "open";
      r.CHORD = "chord";
      r.PIE = "pie";
      r.PROJECT = "square";
      r.SQUARE = "butt";
      r.ROUND = "round";
      r.BEVEL = "bevel";
      r.MITER = "miter";
      r.RGB = "rgb";
      r.HSB = "hsb";
      r.HSL = "hsl";
      r.AUTO = "auto";
      r.ALT = 18;
      r.BACKSPACE = 8;
      r.CONTROL = 17;
      r.DELETE = 46;
      r.DOWN_ARROW = 40;
      r.ENTER = 13;
      r.ESCAPE = 27;
      r.LEFT_ARROW = 37;
      r.OPTION = 18;
      r.RETURN = 13;
      r.RIGHT_ARROW = 39;
      r.SHIFT = 16;
      r.TAB = 9;
      r.UP_ARROW = 38;
      r.BLEND = "source-over";
      r.REMOVE = "destination-out";
      r.ADD = "lighter";
      r.DARKEST = "darken";
      r.LIGHTEST = "lighten";
      r.DIFFERENCE = "difference";
      r.SUBTRACT = "subtract";
      r.EXCLUSION = "exclusion";
      r.MULTIPLY = "multiply";
      r.SCREEN = "screen";
      r.REPLACE = "copy";
      r.OVERLAY = "overlay";
      r.HARD_LIGHT = "hard-light";
      r.SOFT_LIGHT = "soft-light";
      r.DODGE = "color-dodge";
      r.BURN = "color-burn";
      r.THRESHOLD = "threshold";
      r.GRAY = "gray";
      r.OPAQUE = "opaque";
      r.INVERT = "invert";
      r.POSTERIZE = "posterize";
      r.DILATE = "dilate";
      r.ERODE = "erode";
      r.BLUR = "blur";
      r.NORMAL = "normal";
      r.ITALIC = "italic";
      r.BOLD = "bold";
      r.BOLDITALIC = "bold italic";
      r._DEFAULT_TEXT_FILL = "#000000";
      r._DEFAULT_LEADMULT = 1.25;
      r._CTX_MIDDLE = "middle";
      r.LINEAR = "linear";
      r.QUADRATIC = "quadratic";
      r.BEZIER = "bezier";
      r.CURVE = "curve";
      r.STROKE = "stroke";
      r.FILL = "fill";
      r.TEXTURE = "texture";
      r.IMMEDIATE = "immediate";
      r.IMAGE = "image";
      r.NEAREST = "nearest";
      r.REPEAT = "repeat";
      r.CLAMP = "clamp";
      r.MIRROR = "mirror";
      r.LANDSCAPE = "landscape";
      r.PORTRAIT = "portrait";
      r._DEFAULT_STROKE = "#000000";
      r._DEFAULT_FILL = "#FFFFFF";
      r.GRID = "grid";
      r.AXES = "axes";
    }, {}],
    38: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          i = (n = e("./main")) && n.__esModule ? n : {
        default: n
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      var l = [a.ARROW, a.CROSS, a.HAND, a.MOVE, a.TEXT, a.WAIT];
      i.default.prototype._frameRate = 0, i.default.prototype._lastFrameTime = window.performance.now(), i.default.prototype._targetFrameRate = 60;
      var u = window.print;

      function h() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
      }

      function f() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
      }

      i.default.prototype.print = function () {
        var e;
        arguments.length ? (e = console).log.apply(e, arguments) : u();
      }, i.default.prototype.frameCount = 0, i.default.prototype.deltaTime = 0, i.default.prototype.focused = document.hasFocus(), i.default.prototype.cursor = function (e, t, r) {
        var n = "auto",
            i = this._curElement.elt;
        if (l.includes(e)) n = e;else if ("string" == typeof e) {
          var a = "";
          t && r && "number" == typeof t && "number" == typeof r && (a = "".concat(t, " ").concat(r)), n = "http://" === e.substring(0, 7) || "https://" === e.substring(0, 8) ? "url(".concat(e, ") ").concat(a, ", auto") : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(e) ? "url(".concat(e, ") ").concat(a, ", auto") : e;
        }
        i.style.cursor = n;
      }, i.default.prototype.frameRate = function (e) {
        return i.default._validateParameters("frameRate", arguments), "number" != typeof e || e < 0 ? this._frameRate : (this._setProperty("_targetFrameRate", e), 0 === e && this._setProperty("_frameRate", e), this);
      }, i.default.prototype.getFrameRate = function () {
        return this.frameRate();
      }, i.default.prototype.setFrameRate = function (e) {
        return this.frameRate(e);
      }, i.default.prototype.noCursor = function () {
        this._curElement.elt.style.cursor = "none";
      }, i.default.prototype.displayWidth = screen.width, i.default.prototype.displayHeight = screen.height, i.default.prototype.windowWidth = h(), i.default.prototype.windowHeight = f(), i.default.prototype._onresize = function (e) {
        this._setProperty("windowWidth", h()), this._setProperty("windowHeight", f());
        var t,
            r = this._isGlobal ? window : this;
        "function" == typeof r.windowResized && (void 0 === (t = r.windowResized(e)) || t || e.preventDefault());
      }, i.default.prototype.width = 0, i.default.prototype.height = 0, i.default.prototype.fullscreen = function (e) {
        if (i.default._validateParameters("fullscreen", arguments), void 0 === e) return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        e ? function (e) {
          if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) throw new Error("Fullscreen not enabled in this browser.");
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }(document.documentElement) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
      }, i.default.prototype.pixelDensity = function (e) {
        var t;
        return i.default._validateParameters("pixelDensity", arguments), "number" == typeof e ? (e !== this._pixelDensity && (this._pixelDensity = e), (t = this).resizeCanvas(this.width, this.height, !0)) : t = this._pixelDensity, t;
      }, i.default.prototype.displayDensity = function () {
        return window.devicePixelRatio;
      }, i.default.prototype.getURL = function () {
        return location.href;
      }, i.default.prototype.getURLPath = function () {
        return location.pathname.split("/").filter(function (e) {
          return "" !== e;
        });
      }, i.default.prototype.getURLParams = function () {
        for (var e, t = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {}; null != (e = t.exec(location.search));) {
          e.index === t.lastIndex && t.lastIndex++, r[e[1]] = e[2];
        }

        return r;
      };
      var c = i.default;
      r.default = c;
    }, {
      "./constants": 37,
      "./main": 43
    }],
    39: [function (r, e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n,
          i = (n = r("./main")) && n.__esModule ? n : {
        default: n
      };
      (function (e) {
        if (e && e.__esModule) return;
        if (null === e || "object" !== s(e) && "function" != typeof e) return;
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
      })(r("./constants")), r("./internationalization");

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function o() {
          return e;
        }, e;
      }

      function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      i.default._validateParameters = i.default._friendlyFileLoadError = i.default._friendlyError = function () {};

      function a() {
        function e(r) {
          return Object.getOwnPropertyNames(r).filter(function (e) {
            return "_" !== e[0] && !(e in t) && (t[e] = !0);
          }).map(function (e) {
            var t;
            return t = "function" == typeof r[e] ? "function" : e === e.toUpperCase() ? "constant" : "variable", {
              name: e,
              type: t
            };
          });
        }

        var t = {};
        (u = [].concat(e(i.default.prototype), e(r("./constants")))).sort(function (e, t) {
          return t.name.length - e.name.length;
        });
      }

      function l(r, n) {
        n = n || console.log.bind(console), u || a(), u.some(function (e) {
          if (r.message && null !== r.message.match("\\W?".concat(e.name, "\\W"))) {
            var t = "function" === e.type ? "".concat(e.name, "()") : e.name;
            return n("Did you just try to use p5.js's ".concat(t, " ").concat(e.type, "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: ").concat(h)), !0;
          }
        });
      }

      var u = null,
          h = "https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";
      i.default.prototype._helpForMisusedAtTopLevelCode = l, "complete" !== document.readyState && (window.addEventListener("error", l, !1), window.addEventListener("load", function () {
        window.removeEventListener("error", l, !1);
      }));
      var f = i.default;
      t.default = f;
    }, {
      "../../docs/reference/data.json": void 0,
      "./constants": 37,
      "./internationalization": 42,
      "./main": 43
    }],
    40: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      var n = {
        modeAdjust: function modeAdjust(e, t, r, n, i) {
          return i === a.CORNER ? {
            x: e,
            y: t,
            w: r,
            h: n
          } : i === a.CORNERS ? {
            x: e,
            y: t,
            w: r - e,
            h: n - t
          } : i === a.RADIUS ? {
            x: e - r,
            y: t - n,
            w: 2 * r,
            h: 2 * n
          } : i === a.CENTER ? {
            x: e - .5 * r,
            y: t - .5 * n,
            w: r,
            h: n
          } : void 0;
        }
      };
      r.default = n;
    }, {
      "./constants": 37
    }],
    41: [function (e, t, r) {
      "use strict";

      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      e("./internationalization");
      var a = Promise.resolve();
      Promise.all([new Promise(function (e, t) {
        "complete" === document.readyState ? e() : window.addEventListener("load", e, !1);
      }), a]).then(function () {
        void 0 === window._setupDone ? window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !i.default.instance && new i.default() : console.warn("p5.js seems to have been imported multiple times. Please remove the duplicate import");
      });
    }, {
      "../core/main": 43,
      "./internationalization": 42
    }],
    42: [function (e, t, n) {
      "use strict";

      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.initialize = n.translator = void 0;
      var i = r(e("i18next")),
          a = r(e("i18next-browser-languagedetector")),
          o = r(e("../../translations"));

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var s = function s() {
        return console.debug("p5.js translator called before translations were loaded"), "";
      };

      n.translator = s;

      n.initialize = function () {
        return new Promise(function (t, r) {
          i.default.use(a.default).init({
            fallbackLng: "en",
            nestingPrefix: "$tr(",
            nestingSuffix: ")",
            defaultNS: "translation",
            interpolation: {
              escapeValue: !1
            },
            detection: {
              checkWhitelist: !1
            },
            resources: o.default
          }).then(function (e) {
            n.translator = s = e, t();
          }, function (e) {
            return r("Translations failed to load (".concat(e, ")"));
          });
        });
      };
    }, {
      "../../translations": 79,
      i18next: 25,
      "i18next-browser-languagedetector": 22
    }],
    43: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0, e("./shim");

      var n = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      var a = function () {
        function _(e, t, r) {
          var c = this;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, _), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = t, this._curElement = null, this._elements = [], this._glAttributes = null, this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._initializeInstanceVariables(), this._defaultCanvasSize = {
            width: 100,
            height: 100
          }, this._events = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            dragend: null,
            dragover: null,
            click: null,
            dblclick: null,
            mouseover: null,
            mouseout: null,
            keydown: null,
            keyup: null,
            keypress: null,
            touchstart: null,
            touchmove: null,
            touchend: null,
            resize: null,
            blur: null
          }, this._millisStart = -1, this._lcg_random_state = null, this._gaussian_previous = !1, this._events.wheel = null, this._loadingScreenId = "p5_loading", this._registeredMethods = {};
          var n = Object.getOwnPropertyNames(_.prototype._registeredMethods),
              i = !0,
              a = !1,
              o = void 0;

          try {
            for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
              var u = s.value;
              this._registeredMethods[u] = _.prototype._registeredMethods[u].slice();
            }
          } catch (e) {
            a = !0, o = e;
          } finally {
            try {
              i || null == l.return || l.return();
            } finally {
              if (a) throw o;
            }
          }

          window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function () {
            c._userNode && "string" == typeof c._userNode && (c._userNode = document.getElementById(c._userNode));
            var e = (c._isGlobal ? window : c).preload;

            if (e) {
              var t = document.getElementById(c._loadingScreenId);
              if (!t) (t = document.createElement("div")).innerHTML = "Loading...", t.style.position = "absolute", t.id = c._loadingScreenId, (c._userNode || document.body).appendChild(t);
              var r = c._preloadMethods;

              for (var n in r) {
                r[n] = r[n] || _;
                var i = r[n];
                i !== _.prototype && i !== _ || (c._isGlobal && (window[n] = c._wrapPreload(c, n)), i = c), c._registeredPreloadMethods[n] = i[n], i[n] = c._wrapPreload(i, n);
              }

              e(), c._runIfPreloadsAreDone();
            } else c._setup(), c._draw();
          }, this._runIfPreloadsAreDone = function () {
            var e = this._isGlobal ? window : this;

            if (0 === e._preloadCount) {
              var t = document.getElementById(e._loadingScreenId);
              t && t.parentNode.removeChild(t), this._lastFrameTime = window.performance.now(), e._setup(), e._draw();
            }
          }, this._decrementPreload = function () {
            var e = this._isGlobal ? window : this;
            "function" == typeof e.preload && (e._setProperty("_preloadCount", e._preloadCount - 1), e._runIfPreloadsAreDone());
          }, this._wrapPreload = function (n, i) {
            var a = this;
            return function () {
              a._incrementPreload();

              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
                t[r] = arguments[r];
              }

              return a._registeredPreloadMethods[i].apply(n, t);
            };
          }, this._incrementPreload = function () {
            var e = this._isGlobal ? window : this;

            e._setProperty("_preloadCount", e._preloadCount + 1);
          }, this._setup = function () {
            c.createCanvas(c._defaultCanvasSize.width, c._defaultCanvasSize.height, "p2d");
            var e = c._isGlobal ? window : c;
            if ("function" == typeof e.preload) for (var t in c._preloadMethods) {
              e[t] = c._preloadMethods[t][t], e[t] && c && (e[t] = e[t].bind(c));
            }
            c._millisStart = window.performance.now(), "function" == typeof e.setup && e.setup();
            var r = document.getElementsByTagName("canvas"),
                n = !0,
                i = !1,
                a = void 0;

            try {
              for (var o, s = r[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                var l = o.value;
                "true" === l.dataset.hidden && (l.style.visibility = "", delete l.dataset.hidden);
              }
            } catch (e) {
              i = !0, a = e;
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw a;
              }
            }

            c._lastFrameTime = window.performance.now(), c._setupDone = !0;
          }, this._draw = function () {
            var e = window.performance.now(),
                t = e - c._lastFrameTime,
                r = 1e3 / c._targetFrameRate;
            (!c._loop || r - 5 <= t) && (c.redraw(), c._frameRate = 1e3 / (e - c._lastFrameTime), c.deltaTime = e - c._lastFrameTime, c._setProperty("deltaTime", c.deltaTime), c._lastFrameTime = e, void 0 !== c._updateMouseCoords && (c._updateMouseCoords(), c._setProperty("movedX", 0), c._setProperty("movedY", 0))), c._loop && (c._requestAnimId = window.requestAnimationFrame(c._draw));
          }, this._setProperty = function (e, t) {
            c[e] = t, c._isGlobal && (window[e] = t);
          }, this.remove = function () {
            var e = document.getElementById(c._loadingScreenId);

            if (e && (e.parentNode.removeChild(e), c._incrementPreload()), c._curElement) {
              for (var t in c._loop = !1, c._requestAnimId && window.cancelAnimationFrame(c._requestAnimId), c._events) {
                window.removeEventListener(t, c._events[t]);
              }

              var r = !0,
                  n = !1,
                  i = void 0;

              try {
                for (var a, o = c._elements[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                  var s = a.value;

                  for (var l in s.elt && s.elt.parentNode && s.elt.parentNode.removeChild(s.elt), s._events) {
                    s.elt.removeEventListener(l, s._events[l]);
                  }
                }
              } catch (e) {
                n = !0, i = e;
              } finally {
                try {
                  r || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }

              var u = c;

              c._registeredMethods.remove.forEach(function (e) {
                void 0 !== e && e.call(u);
              });
            }

            if (c._isGlobal) {
              for (var h in _.prototype) {
                try {
                  delete window[h];
                } catch (e) {
                  window[h] = void 0;
                }
              }

              for (var f in c) {
                if (c.hasOwnProperty(f)) try {
                  delete window[f];
                } catch (e) {
                  window[f] = void 0;
                }
              }

              _.instance = null;
            }
          }, this._registeredMethods.init.forEach(function (e) {
            void 0 !== e && e.call(this);
          }, this), this._setupPromisePreloads();

          var h = this._createFriendlyGlobalFunctionBinder();

          if (e) e(this);else {
            for (var f in this._isGlobal = !0, _.instance = this, _.prototype) {
              if ("function" == typeof _.prototype[f]) {
                var p = f.substring(2);
                this._events.hasOwnProperty(p) || (Math.hasOwnProperty(f) && Math[f] === _.prototype[f] ? h(f, _.prototype[f]) : h(f, _.prototype[f].bind(this)));
              } else h(f, _.prototype[f]);
            }

            for (var d in this) {
              this.hasOwnProperty(d) && h(d, this[d]);
            }
          }

          for (var g in this._events) {
            var m = this["_on".concat(g)];

            if (m) {
              var v = m.bind(this);
              window.addEventListener(g, v, {
                passive: !1
              }), this._events[g] = v;
            }
          }

          function y() {
            c._setProperty("focused", !0);
          }

          function b() {
            c._setProperty("focused", !1);
          }

          window.addEventListener("focus", y), window.addEventListener("blur", b), this.registerMethod("remove", function () {
            window.removeEventListener("focus", y), window.removeEventListener("blur", b);
          }), "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1);
        }

        var e, t, r;
        return e = _, (t = [{
          key: "_initializeInstanceVariables",
          value: function value() {
            this._styles = [], this._bezierDetail = 20, this._curveDetail = 20, this._colorMode = n.RGB, this._colorMaxes = {
              rgb: [255, 255, 255, 255],
              hsb: [360, 100, 100, 1],
              hsl: [360, 100, 100, 1]
            }, this._downKeys = {};
          }
        }, {
          key: "registerPreloadMethod",
          value: function value(e, t) {
            _.prototype._preloadMethods.hasOwnProperty(e) || (_.prototype._preloadMethods[e] = t);
          }
        }, {
          key: "registerMethod",
          value: function value(e, t) {
            var r = this || _.prototype;
            r._registeredMethods.hasOwnProperty(e) || (r._registeredMethods[e] = []), r._registeredMethods[e].push(t);
          }
        }, {
          key: "_createFriendlyGlobalFunctionBinder",
          value: function value(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                r = t.globalObject || window;
            t.log || console.log.bind(console);
            return function (e, t) {
              r[e] = t;
            };
          }
        }]) && i(e.prototype, t), r && i(e, r), _;
      }();

      for (var l in a.instance = null, a.disableFriendlyErrors = !1, n) {
        a.prototype[l] = n[l];
      }

      a.prototype._preloadMethods = {
        loadJSON: a.prototype,
        loadImage: a.prototype,
        loadStrings: a.prototype,
        loadXML: a.prototype,
        loadBytes: a.prototype,
        loadTable: a.prototype,
        loadFont: a.prototype,
        loadModel: a.prototype,
        loadShader: a.prototype
      }, a.prototype._registeredMethods = {
        init: [],
        pre: [],
        post: [],
        remove: []
      }, a.prototype._registeredPreloadMethods = {};
      var u = a;
      r.default = u;
    }, {
      "./constants": 37,
      "./shim": 54
    }],
    44: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("./main")) && n.__esModule ? n : {
        default: n
      };
      i.default.Element = function (e, t) {
        this.elt = e, this._pInst = this._pixelsState = t, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight;
      }, i.default.Element.prototype.parent = function (e) {
        return void 0 === e ? this.elt.parentNode : ("string" == typeof e ? ("#" === e[0] && (e = e.substring(1)), e = document.getElementById(e)) : e instanceof i.default.Element && (e = e.elt), e.appendChild(this.elt), this);
      }, i.default.Element.prototype.id = function (e) {
        return void 0 === e ? this.elt.id : (this.elt.id = e, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this);
      }, i.default.Element.prototype.class = function (e) {
        return void 0 === e ? this.elt.className : (this.elt.className = e, this);
      }, i.default.Element.prototype.mousePressed = function (t) {
        return i.default.Element._adjustListener("mousedown", function (e) {
          return this._pInst._setProperty("mouseIsPressed", !0), this._pInst._setMouseButton(e), t.call(this);
        }, this), this;
      }, i.default.Element.prototype.doubleClicked = function (e) {
        return i.default.Element._adjustListener("dblclick", e, this), this;
      }, i.default.Element.prototype.mouseWheel = function (e) {
        return i.default.Element._adjustListener("wheel", e, this), this;
      }, i.default.Element.prototype.mouseReleased = function (e) {
        return i.default.Element._adjustListener("mouseup", e, this), this;
      }, i.default.Element.prototype.mouseClicked = function (e) {
        return i.default.Element._adjustListener("click", e, this), this;
      }, i.default.Element.prototype.mouseMoved = function (e) {
        return i.default.Element._adjustListener("mousemove", e, this), this;
      }, i.default.Element.prototype.mouseOver = function (e) {
        return i.default.Element._adjustListener("mouseover", e, this), this;
      }, i.default.Element.prototype.mouseOut = function (e) {
        return i.default.Element._adjustListener("mouseout", e, this), this;
      }, i.default.Element.prototype.touchStarted = function (e) {
        return i.default.Element._adjustListener("touchstart", e, this), this;
      }, i.default.Element.prototype.touchMoved = function (e) {
        return i.default.Element._adjustListener("touchmove", e, this), this;
      }, i.default.Element.prototype.touchEnded = function (e) {
        return i.default.Element._adjustListener("touchend", e, this), this;
      }, i.default.Element.prototype.dragOver = function (e) {
        return i.default.Element._adjustListener("dragover", e, this), this;
      }, i.default.Element.prototype.dragLeave = function (e) {
        return i.default.Element._adjustListener("dragleave", e, this), this;
      }, i.default.Element._adjustListener = function (e, t, r) {
        return !1 === t ? i.default.Element._detachListener(e, r) : i.default.Element._attachListener(e, t, r), this;
      }, i.default.Element._attachListener = function (e, t, r) {
        r._events[e] && i.default.Element._detachListener(e, r);
        var n = t.bind(r);
        r.elt.addEventListener(e, n, !1), r._events[e] = n;
      }, i.default.Element._detachListener = function (e, t) {
        var r = t._events[e];
        t.elt.removeEventListener(e, r, !1), t._events[e] = null;
      }, i.default.Element.prototype._setProperty = function (e, t) {
        this[e] = t;
      };
      var a = i.default.Element;
      r.default = a;
    }, {
      "./main": 43
    }],
    45: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          s = (n = e("./main")) && n.__esModule ? n : {
        default: n
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function u() {
          return e;
        }, e;
      }

      s.default.Graphics = function (e, t, r, n) {
        var i = r || l.P2D;
        this.canvas = document.createElement("canvas");
        var a = n._userNode || document.body;

        for (var o in a.appendChild(this.canvas), s.default.Element.call(this, this.canvas, n), s.default.prototype) {
          this[o] || ("function" == typeof s.default.prototype[o] ? this[o] = s.default.prototype[o].bind(this) : this[o] = s.default.prototype[o]);
        }

        return s.default.prototype._initializeInstanceVariables.apply(this), this.width = e, this.height = t, this._pixelDensity = n._pixelDensity, i === l.WEBGL ? this._renderer = new s.default.RendererGL(this.canvas, this, !1) : this._renderer = new s.default.Renderer2D(this.canvas, this, !1), n._elements.push(this), Object.defineProperty(this, "deltaTime", {
          get: function get() {
            return this._pInst.deltaTime;
          }
        }), this._renderer.resize(e, t), this._renderer._applyDefaults(), this;
      }, s.default.Graphics.prototype = Object.create(s.default.Element.prototype), s.default.Graphics.prototype.reset = function () {
        this._renderer.resetMatrix(), this._renderer.isP3D && this._renderer._update();
      }, s.default.Graphics.prototype.remove = function () {
        this.elt.parentNode && this.elt.parentNode.removeChild(this.elt);

        var e = this._pInst._elements.indexOf(this);

        for (var t in -1 !== e && this._pInst._elements.splice(e, 1), this._events) {
          this.elt.removeEventListener(t, this._events[t]);
        }
      };
      var i = s.default.Graphics;
      r.default = i;
    }, {
      "./constants": 37,
      "./main": 43
    }],
    46: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          l = (n = e("./main")) && n.__esModule ? n : {
        default: n
      },
          y = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== s(e) && "function" != typeof e) return {
          default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function o() {
          return e;
        }, e;
      }

      function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      function u(e) {
        var t = 0,
            r = 0;
        if (e.offsetParent) for (; t += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;) {
          ;
        } else t += e.offsetLeft, r += e.offsetTop;
        return [t, r];
      }

      l.default.Renderer = function (e, t, r) {
        l.default.Element.call(this, e, t), this.canvas = e, this._pixelsState = t, r ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = y.NORMAL, this._textAscent = null, this._textDescent = null, this._textAlign = y.LEFT, this._textBaseline = y.BASELINE, this._rectMode = y.CORNER, this._ellipseMode = y.CENTER, this._curveTightness = 0, this._imageMode = y.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1;
      }, l.default.Renderer.prototype = Object.create(l.default.Element.prototype), l.default.Renderer.prototype.push = function () {
        return {
          properties: {
            _doStroke: this._doStroke,
            _strokeSet: this._strokeSet,
            _doFill: this._doFill,
            _fillSet: this._fillSet,
            _tint: this._tint,
            _imageMode: this._imageMode,
            _rectMode: this._rectMode,
            _ellipseMode: this._ellipseMode,
            _textFont: this._textFont,
            _textLeading: this._textLeading,
            _textSize: this._textSize,
            _textAlign: this._textAlign,
            _textBaseline: this._textBaseline,
            _textStyle: this._textStyle
          }
        };
      }, l.default.Renderer.prototype.pop = function (e) {
        e.properties && Object.assign(this, e.properties);
      }, l.default.Renderer.prototype.resize = function (e, t) {
        this.width = e, this.height = t, this.elt.width = e * this._pInst._pixelDensity, this.elt.height = t * this._pInst._pixelDensity, this.elt.style.width = "".concat(e, "px"), this.elt.style.height = "".concat(t, "px"), this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height));
      }, l.default.Renderer.prototype.get = function (e, t, r, n) {
        var i = this._pixelsState,
            a = i._pixelDensity,
            o = this.canvas;
        if (void 0 === e && void 0 === t) e = t = 0, r = i.width, n = i.height;else if (e *= a, t *= a, void 0 === r && void 0 === n) return e < 0 || t < 0 || e >= o.width || t >= o.height ? [0, 0, 0, 0] : this._getPixel(e, t);
        var s = new l.default.Image(r, n);
        return s.canvas.getContext("2d").drawImage(o, e, t, r * a, n * a, 0, 0, r, n), s;
      }, l.default.Renderer.prototype.textLeading = function (e) {
        return "number" == typeof e ? (this._setProperty("_textLeading", e), this._pInst) : this._textLeading;
      }, l.default.Renderer.prototype.textSize = function (e) {
        return "number" == typeof e ? (this._setProperty("_textSize", e), this._setProperty("_textLeading", e * y._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize;
      }, l.default.Renderer.prototype.textStyle = function (e) {
        return e ? (e !== y.NORMAL && e !== y.ITALIC && e !== y.BOLD && e !== y.BOLDITALIC || this._setProperty("_textStyle", e), this._applyTextProperties()) : this._textStyle;
      }, l.default.Renderer.prototype.textAscent = function () {
        return null === this._textAscent && this._updateTextMetrics(), this._textAscent;
      }, l.default.Renderer.prototype.textDescent = function () {
        return null === this._textDescent && this._updateTextMetrics(), this._textDescent;
      }, l.default.Renderer.prototype.textAlign = function (e, t) {
        return void 0 !== e ? (this._setProperty("_textAlign", e), void 0 !== t && this._setProperty("_textBaseline", t), this._applyTextProperties()) : {
          horizontal: this._textAlign,
          vertical: this._textBaseline
        };
      }, l.default.Renderer.prototype.text = function (e, t, r, n, i) {
        var a,
            o,
            s,
            l,
            u,
            h,
            f,
            c,
            p = this._pInst,
            d = Number.MAX_VALUE;

        if ((this._doFill || this._doStroke) && void 0 !== e) {
          if ("string" != typeof e && (e = e.toString()), a = (e = e.replace(/(\t)/g, "  ")).split("\n"), void 0 !== n) {
            for (s = c = 0; s < a.length; s++) {
              for (u = "", f = a[s].split(" "), o = 0; o < f.length; o++) {
                h = "".concat(u + f[o], " "), n < this.textWidth(h) ? (u = "".concat(f[o], " "), c += p.textLeading()) : u = h;
              }
            }

            switch (this._rectMode === y.CENTER && (t -= n / 2, r -= i / 2), this._textAlign) {
              case y.CENTER:
                t += n / 2;
                break;

              case y.RIGHT:
                t += n;
            }

            var g = !1;

            if (void 0 !== i) {
              switch (this._textBaseline) {
                case y.BOTTOM:
                  r += i - c;
                  break;

                case y.CENTER:
                  r += (i - c) / 2;
                  break;

                case y.BASELINE:
                  g = !0, this._textBaseline = y.TOP;
              }

              d = r + i - p.textAscent();
            }

            for (s = 0; s < a.length; s++) {
              for (u = "", f = a[s].split(" "), o = 0; o < f.length; o++) {
                h = "".concat(u + f[o], " "), n < this.textWidth(h) && 0 < u.length ? (this._renderText(p, u, t, r, d), u = "".concat(f[o], " "), r += p.textLeading()) : u = h;
              }

              this._renderText(p, u, t, r, d), r += p.textLeading(), g && (this._textBaseline = y.BASELINE);
            }
          } else {
            var m = 0,
                v = p.textAlign().vertical;

            for (v === y.CENTER ? m = (a.length - 1) * p.textLeading() / 2 : v === y.BOTTOM && (m = (a.length - 1) * p.textLeading()), l = 0; l < a.length; l++) {
              this._renderText(p, a[l], t, r - m, d), r += p.textLeading();
            }
          }

          return p;
        }
      }, l.default.Renderer.prototype._applyDefaults = function () {
        return this;
      }, l.default.Renderer.prototype._isOpenType = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._textFont;
        return "object" === s(e) && e.font && e.font.supported;
      }, l.default.Renderer.prototype._updateTextMetrics = function () {
        if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this;
        var e = document.createElement("span");
        e.style.fontFamily = this._textFont, e.style.fontSize = "".concat(this._textSize, "px"), e.innerHTML = "ABCjgq|";
        var t = document.createElement("div");
        t.style.display = "inline-block", t.style.width = "1px", t.style.height = "0px";
        var r = document.createElement("div");
        r.appendChild(e), r.appendChild(t), r.style.height = "0px", r.style.overflow = "hidden", document.body.appendChild(r), t.style.verticalAlign = "baseline";
        var n = u(t),
            i = u(e),
            a = n[1] - i[1];
        t.style.verticalAlign = "bottom", n = u(t), i = u(e);
        var o = n[1] - i[1] - a;
        return document.body.removeChild(r), this._setProperty("_textAscent", a), this._setProperty("_textDescent", o), this;
      };
      var i = l.default.Renderer;
      r.default = i;
    }, {
      "../core/constants": 37,
      "./main": 43
    }],
    47: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var f = n(e("./main")),
          d = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants")),
          c = n(e("../image/filters"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      e("./p5.Renderer");
      var m = "rgba(0,0,0,0)";
      f.default.Renderer2D = function (e, t, r) {
        return f.default.Renderer.call(this, e, t, r), this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this;
      }, f.default.Renderer2D.prototype = Object.create(f.default.Renderer.prototype), f.default.Renderer2D.prototype._applyDefaults = function () {
        this._cachedFillStyle = this._cachedStrokeStyle = void 0, this._cachedBlendMode = d.BLEND, this._setFill(d._DEFAULT_FILL), this._setStroke(d._DEFAULT_STROKE), this.drawingContext.lineCap = d.ROUND, this.drawingContext.font = "normal 12px sans-serif";
      }, f.default.Renderer2D.prototype.resize = function (e, t) {
        f.default.Renderer.prototype.resize.call(this, e, t), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity);
      }, f.default.Renderer2D.prototype.background = function () {
        if (this.drawingContext.save(), this.resetMatrix(), (arguments.length <= 0 ? void 0 : arguments[0]) instanceof f.default.Image) this._pInst.image(arguments.length <= 0 ? void 0 : arguments[0], 0, 0, this.width, this.height);else {
          var e,
              t = this._getFill(),
              r = (e = this._pInst).color.apply(e, arguments).toString();

          this._setFill(r), this._isErasing && this.blendMode(this._cachedBlendMode), this.drawingContext.fillRect(0, 0, this.width, this.height), this._setFill(t), this._isErasing && this._pInst.erase();
        }
        this.drawingContext.restore();
      }, f.default.Renderer2D.prototype.clear = function () {
        this.drawingContext.save(), this.resetMatrix(), this.drawingContext.clearRect(0, 0, this.width, this.height), this.drawingContext.restore();
      }, f.default.Renderer2D.prototype.fill = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments);

        this._setFill(t.toString());
      }, f.default.Renderer2D.prototype.stroke = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments);

        this._setStroke(t.toString());
      }, f.default.Renderer2D.prototype.erase = function (e, t) {
        if (!this._isErasing) {
          this._cachedFillStyle = this.drawingContext.fillStyle;

          var r = this._pInst.color(255, e).toString();

          this.drawingContext.fillStyle = r, this._cachedStrokeStyle = this.drawingContext.strokeStyle;

          var n = this._pInst.color(255, t).toString();

          this.drawingContext.strokeStyle = n;
          var i = this._cachedBlendMode;
          this.blendMode(d.REMOVE), this._cachedBlendMode = i, this._isErasing = !0;
        }
      }, f.default.Renderer2D.prototype.noErase = function () {
        this._isErasing && (this.drawingContext.fillStyle = this._cachedFillStyle, this.drawingContext.strokeStyle = this._cachedStrokeStyle, this.blendMode(this._cachedBlendMode), this._isErasing = !1);
      }, f.default.Renderer2D.prototype.image = function (e, t, r, n, i, a, o, s, l) {
        var u;
        e.gifProperties && e._animateGif(this._pInst);

        try {
          this._tint && (f.default.MediaElement && e instanceof f.default.MediaElement && e.loadPixels(), e.canvas && (u = this._getTintedImageCanvas(e))), u = u || e.canvas || e.elt;
          var h = 1;
          e.width && 0 < e.width && (h = u.width / e.width), this._isErasing && this.blendMode(this._cachedBlendMode), this.drawingContext.drawImage(u, h * t, h * r, h * n, h * i, a, o, s, l), this._isErasing && this._pInst.erase();
        } catch (e) {
          if ("NS_ERROR_NOT_AVAILABLE" !== e.name) throw e;
        }
      }, f.default.Renderer2D.prototype._getTintedImageCanvas = function (e) {
        if (!e.canvas) return e;

        var t = c.default._toPixels(e.canvas),
            r = document.createElement("canvas");

        r.width = e.canvas.width, r.height = e.canvas.height;

        for (var n = r.getContext("2d"), i = n.createImageData(e.canvas.width, e.canvas.height), a = i.data, o = 0; o < t.length; o += 4) {
          var s = t[o],
              l = t[o + 1],
              u = t[o + 2],
              h = t[o + 3];
          a[o] = s * this._tint[0] / 255, a[o + 1] = l * this._tint[1] / 255, a[o + 2] = u * this._tint[2] / 255, a[o + 3] = h * this._tint[3] / 255;
        }

        return n.putImageData(i, 0, 0), r;
      }, f.default.Renderer2D.prototype.blendMode = function (e) {
        if (e === d.SUBTRACT) console.warn("blendMode(SUBTRACT) only works in WEBGL mode.");else {
          if (e !== d.BLEND && e !== d.REMOVE && e !== d.DARKEST && e !== d.LIGHTEST && e !== d.DIFFERENCE && e !== d.MULTIPLY && e !== d.EXCLUSION && e !== d.SCREEN && e !== d.REPLACE && e !== d.OVERLAY && e !== d.HARD_LIGHT && e !== d.SOFT_LIGHT && e !== d.DODGE && e !== d.BURN && e !== d.ADD) throw new Error("Mode ".concat(e, " not recognized."));
          this._cachedBlendMode = e, this.drawingContext.globalCompositeOperation = e;
        }
      }, f.default.Renderer2D.prototype.blend = function () {
        for (var e = this.drawingContext.globalCompositeOperation, t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        var i = r[r.length - 1],
            a = Array.prototype.slice.call(r, 0, r.length - 1);
        this.drawingContext.globalCompositeOperation = i, f.default.prototype.copy.apply(this, a), this.drawingContext.globalCompositeOperation = e;
      }, f.default.Renderer2D.prototype._getPixel = function (e, t) {
        var r;
        return [(r = this.drawingContext.getImageData(e, t, 1, 1).data)[0], r[1], r[2], r[3]];
      }, f.default.Renderer2D.prototype.loadPixels = function () {
        var e = this._pixelsState,
            t = e._pixelDensity,
            r = this.width * t,
            n = this.height * t,
            i = this.drawingContext.getImageData(0, 0, r, n);
        e._setProperty("imageData", i), e._setProperty("pixels", i.data);
      }, f.default.Renderer2D.prototype.set = function (e, t, r) {
        e = Math.floor(e), t = Math.floor(t);
        var n = this._pixelsState;
        if (r instanceof f.default.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(n._pixelDensity, n._pixelDensity), this.drawingContext.drawImage(r.canvas, e, t), this.drawingContext.restore();else {
          var i = 0,
              a = 0,
              o = 0,
              s = 0,
              l = 4 * (t * n._pixelDensity * (this.width * n._pixelDensity) + e * n._pixelDensity);
          if (n.imageData || n.loadPixels.call(n), "number" == typeof r) l < n.pixels.length && (o = a = i = r, s = 255);else if (r instanceof Array) {
            if (r.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
            l < n.pixels.length && (i = r[0], a = r[1], o = r[2], s = r[3]);
          } else r instanceof f.default.Color && l < n.pixels.length && (i = r.levels[0], a = r.levels[1], o = r.levels[2], s = r.levels[3]);

          for (var u = 0; u < n._pixelDensity; u++) {
            for (var h = 0; h < n._pixelDensity; h++) {
              l = 4 * ((t * n._pixelDensity + h) * this.width * n._pixelDensity + (e * n._pixelDensity + u)), n.pixels[l] = i, n.pixels[l + 1] = a, n.pixels[l + 2] = o, n.pixels[l + 3] = s;
            }
          }
        }
      }, f.default.Renderer2D.prototype.updatePixels = function (e, t, r, n) {
        var i = this._pixelsState,
            a = i._pixelDensity;
        void 0 === e && void 0 === t && void 0 === r && void 0 === n && (t = e = 0, r = this.width, n = this.height), e *= a, t *= a, r *= a, n *= a, this.gifProperties && (this.gifProperties.frames[this.gifProperties.displayIndex].image = i.imageData), this.drawingContext.putImageData(i.imageData, e, t, 0, 0, r, n);
      }, f.default.Renderer2D.prototype._acuteArcToBezier = function (e, t) {
        var r = t / 2,
            n = Math.cos(r),
            i = Math.sin(r),
            a = 1 / Math.tan(r),
            o = e + r,
            s = Math.cos(o),
            l = Math.sin(o),
            u = (4 - n) / 3,
            h = i + (n - u) * a;
        return {
          ax: Math.cos(e).toFixed(7),
          ay: Math.sin(e).toFixed(7),
          bx: (u * s + h * l).toFixed(7),
          by: (u * l - h * s).toFixed(7),
          cx: (u * s - h * l).toFixed(7),
          cy: (u * l + h * s).toFixed(7),
          dx: Math.cos(e + t).toFixed(7),
          dy: Math.sin(e + t).toFixed(7)
        };
      }, f.default.Renderer2D.prototype.arc = function (r, n, e, t, i, a, o) {
        var s = this.drawingContext,
            l = e / 2,
            u = t / 2,
            h = 0,
            f = [];

        for (r += l, n += u; 1e-5 <= a - i;) {
          h = Math.min(a - i, d.HALF_PI), f.push(this._acuteArcToBezier(i, h)), i += h;
        }

        return this._doFill && (s.beginPath(), f.forEach(function (e, t) {
          0 === t && s.moveTo(r + e.ax * l, n + e.ay * u), s.bezierCurveTo(r + e.bx * l, n + e.by * u, r + e.cx * l, n + e.cy * u, r + e.dx * l, n + e.dy * u);
        }), o !== d.PIE && null != o || s.lineTo(r, n), s.closePath(), s.fill()), this._doStroke && (s.beginPath(), f.forEach(function (e, t) {
          0 === t && s.moveTo(r + e.ax * l, n + e.ay * u), s.bezierCurveTo(r + e.bx * l, n + e.by * u, r + e.cx * l, n + e.cy * u, r + e.dx * l, n + e.dy * u);
        }), o === d.PIE ? (s.lineTo(r, n), s.closePath()) : o === d.CHORD && s.closePath(), s.stroke()), this;
      }, f.default.Renderer2D.prototype.ellipse = function (e) {
        var t = this.drawingContext,
            r = this._doFill,
            n = this._doStroke,
            i = parseFloat(e[0]),
            a = parseFloat(e[1]),
            o = parseFloat(e[2]),
            s = parseFloat(e[3]);

        if (r && !n) {
          if (this._getFill() === m) return this;
        } else if (!r && n && this._getStroke() === m) return this;

        var l = o / 2 * .5522847498,
            u = s / 2 * .5522847498,
            h = i + o,
            f = a + s,
            c = i + o / 2,
            p = a + s / 2;
        t.beginPath(), t.moveTo(i, p), t.bezierCurveTo(i, p - u, c - l, a, c, a), t.bezierCurveTo(c + l, a, h, p - u, h, p), t.bezierCurveTo(h, p + u, c + l, f, c, f), t.bezierCurveTo(c - l, f, i, p + u, i, p), t.closePath(), r && t.fill(), n && t.stroke();
      }, f.default.Renderer2D.prototype.line = function (e, t, r, n) {
        var i = this.drawingContext;
        return this._doStroke && (this._getStroke() === m || (i.beginPath(), i.moveTo(e, t), i.lineTo(r, n), i.stroke())), this;
      }, f.default.Renderer2D.prototype.point = function (e, t) {
        var r = this.drawingContext;
        if (!this._doStroke) return this;
        if (this._getStroke() === m) return this;

        var n = this._getStroke(),
            i = this._getFill();

        e = Math.round(e), t = Math.round(t), this._setFill(n), 1 < r.lineWidth ? (r.beginPath(), r.arc(e, t, r.lineWidth / 2, 0, d.TWO_PI, !1), r.fill()) : r.fillRect(e, t, 1, 1), this._setFill(i);
      }, f.default.Renderer2D.prototype.quad = function (e, t, r, n, i, a, o, s) {
        var l = this.drawingContext,
            u = this._doFill,
            h = this._doStroke;

        if (u && !h) {
          if (this._getFill() === m) return this;
        } else if (!u && h && this._getStroke() === m) return this;

        return l.beginPath(), l.moveTo(e, t), l.lineTo(r, n), l.lineTo(i, a), l.lineTo(o, s), l.closePath(), u && l.fill(), h && l.stroke(), this;
      }, f.default.Renderer2D.prototype.rect = function (e) {
        var t = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            l = e[7],
            u = this.drawingContext,
            h = this._doFill,
            f = this._doStroke;

        if (h && !f) {
          if (this._getFill() === m) return this;
        } else if (!h && f && this._getStroke() === m) return this;

        if (u.beginPath(), void 0 === a) u.rect(t, r, n, i);else {
          void 0 === o && (o = a), void 0 === s && (s = o), void 0 === l && (l = s);
          var c = Math.abs(n),
              p = Math.abs(i),
              d = c / 2,
              g = p / 2;
          c < 2 * a && (a = d), p < 2 * a && (a = g), c < 2 * o && (o = d), p < 2 * o && (o = g), c < 2 * s && (s = d), p < 2 * s && (s = g), c < 2 * l && (l = d), p < 2 * l && (l = g), u.beginPath(), u.moveTo(t + a, r), u.arcTo(t + n, r, t + n, r + i, o), u.arcTo(t + n, r + i, t, r + i, s), u.arcTo(t, r + i, t, r, l), u.arcTo(t, r, t + n, r, a), u.closePath();
        }
        return this._doFill && u.fill(), this._doStroke && u.stroke(), this;
      }, f.default.Renderer2D.prototype.triangle = function (e) {
        var t = this.drawingContext,
            r = this._doFill,
            n = this._doStroke,
            i = e[0],
            a = e[1],
            o = e[2],
            s = e[3],
            l = e[4],
            u = e[5];

        if (r && !n) {
          if (this._getFill() === m) return this;
        } else if (!r && n && this._getStroke() === m) return this;

        t.beginPath(), t.moveTo(i, a), t.lineTo(o, s), t.lineTo(l, u), t.closePath(), r && t.fill(), n && t.stroke();
      }, f.default.Renderer2D.prototype.endShape = function (e, t, r, n, i, a, o) {
        if (0 === t.length) return this;
        if (!this._doStroke && !this._doFill) return this;
        var s,
            l,
            u,
            h = e === d.CLOSE;
        h && !a && t.push(t[0]);
        var f = t.length;
        if (!r || o !== d.POLYGON && null !== o) {
          if (!n || o !== d.POLYGON && null !== o) {
            if (!i || o !== d.POLYGON && null !== o) {
              if (o === d.POINTS) for (l = 0; l < f; l++) {
                s = t[l], this._doStroke && this._pInst.stroke(s[6]), this._pInst.point(s[0], s[1]);
              } else if (o === d.LINES) for (l = 0; l + 1 < f; l += 2) {
                s = t[l], this._doStroke && this._pInst.stroke(t[l + 1][6]), this._pInst.line(s[0], s[1], t[l + 1][0], t[l + 1][1]);
              } else if (o === d.TRIANGLES) for (l = 0; l + 2 < f; l += 3) {
                s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(t[l + 2][0], t[l + 2][1]), this.drawingContext.closePath(), this._doFill && (this._pInst.fill(t[l + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(t[l + 2][6]), this.drawingContext.stroke());
              } else if (o === d.TRIANGLE_STRIP) for (l = 0; l + 1 < f; l++) {
                s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(s[0], s[1]), this._doStroke && this._pInst.stroke(t[l + 1][6]), this._doFill && this._pInst.fill(t[l + 1][5]), l + 2 < f && (this.drawingContext.lineTo(t[l + 2][0], t[l + 2][1]), this._doStroke && this._pInst.stroke(t[l + 2][6]), this._doFill && this._pInst.fill(t[l + 2][5])), this._doFillStrokeClose(h);
              } else if (o === d.TRIANGLE_FAN) {
                if (2 < f) {
                  for (this.drawingContext.beginPath(), l = 2; l < f; l++) {
                    s = t[l], this.drawingContext.moveTo(t[0][0], t[0][1]), this.drawingContext.lineTo(t[l - 1][0], t[l - 1][1]), this.drawingContext.lineTo(s[0], s[1]), this.drawingContext.lineTo(t[0][0], t[0][1]), l < f - 1 && (this._doFill && s[5] !== t[l + 1][5] || this._doStroke && s[6] !== t[l + 1][6]) && (this._doFill && (this._pInst.fill(s[5]), this.drawingContext.fill(), this._pInst.fill(t[l + 1][5])), this._doStroke && (this._pInst.stroke(s[6]), this.drawingContext.stroke(), this._pInst.stroke(t[l + 1][6])), this.drawingContext.closePath(), this.drawingContext.beginPath());
                  }

                  this._doFillStrokeClose(h);
                }
              } else if (o === d.QUADS) for (l = 0; l + 3 < f; l += 4) {
                for (s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(s[0], s[1]), u = 1; u < 4; u++) {
                  this.drawingContext.lineTo(t[l + u][0], t[l + u][1]);
                }

                this.drawingContext.lineTo(s[0], s[1]), this._doFill && this._pInst.fill(t[l + 3][5]), this._doStroke && this._pInst.stroke(t[l + 3][6]), this._doFillStrokeClose(h);
              } else if (o === d.QUAD_STRIP) {
                if (3 < f) for (l = 0; l + 1 < f; l += 2) {
                  s = t[l], this.drawingContext.beginPath(), l + 3 < f ? (this.drawingContext.moveTo(t[l + 2][0], t[l + 2][1]), this.drawingContext.lineTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(t[l + 3][0], t[l + 3][1]), this._doFill && this._pInst.fill(t[l + 3][5]), this._doStroke && this._pInst.stroke(t[l + 3][6])) : (this.drawingContext.moveTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1])), this._doFillStrokeClose(h);
                }
              } else {
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[0][0], t[0][1]), l = 1; l < f; l++) {
                  (s = t[l]).isVert && (s.moveTo ? this.drawingContext.moveTo(s[0], s[1]) : this.drawingContext.lineTo(s[0], s[1]));
                }

                this._doFillStrokeClose(h);
              }
            } else {
              for (this.drawingContext.beginPath(), l = 0; l < f; l++) {
                t[l].isVert ? t[l].moveTo ? this.drawingContext.moveTo(t[l][0], t[l][1]) : this.drawingContext.lineTo(t[l][0], t[l][1]) : this.drawingContext.quadraticCurveTo(t[l][0], t[l][1], t[l][2], t[l][3]);
              }

              this._doFillStrokeClose(h);
            }
          } else {
            for (this.drawingContext.beginPath(), l = 0; l < f; l++) {
              t[l].isVert ? t[l].moveTo ? this.drawingContext.moveTo(t[l][0], t[l][1]) : this.drawingContext.lineTo(t[l][0], t[l][1]) : this.drawingContext.bezierCurveTo(t[l][0], t[l][1], t[l][2], t[l][3], t[l][4], t[l][5]);
            }

            this._doFillStrokeClose(h);
          }
        } else if (3 < f) {
          var c = [],
              p = 1 - this._curveTightness;

          for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[1][0], t[1][1]), l = 1; l + 2 < f; l++) {
            s = t[l], c[0] = [s[0], s[1]], c[1] = [s[0] + (p * t[l + 1][0] - p * t[l - 1][0]) / 6, s[1] + (p * t[l + 1][1] - p * t[l - 1][1]) / 6], c[2] = [t[l + 1][0] + (p * t[l][0] - p * t[l + 2][0]) / 6, t[l + 1][1] + (p * t[l][1] - p * t[l + 2][1]) / 6], c[3] = [t[l + 1][0], t[l + 1][1]], this.drawingContext.bezierCurveTo(c[1][0], c[1][1], c[2][0], c[2][1], c[3][0], c[3][1]);
          }

          h && this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this._doFillStrokeClose(h);
        }
        return a = i = n = r = !1, h && t.pop(), this;
      }, f.default.Renderer2D.prototype.strokeCap = function (e) {
        return e !== d.ROUND && e !== d.SQUARE && e !== d.PROJECT || (this.drawingContext.lineCap = e), this;
      }, f.default.Renderer2D.prototype.strokeJoin = function (e) {
        return e !== d.ROUND && e !== d.BEVEL && e !== d.MITER || (this.drawingContext.lineJoin = e), this;
      }, f.default.Renderer2D.prototype.strokeWeight = function (e) {
        return this.drawingContext.lineWidth = void 0 === e || 0 === e ? 1e-4 : e, this;
      }, f.default.Renderer2D.prototype._getFill = function () {
        return this._cachedFillStyle || (this._cachedFillStyle = this.drawingContext.fillStyle), this._cachedFillStyle;
      }, f.default.Renderer2D.prototype._setFill = function (e) {
        e !== this._cachedFillStyle && (this.drawingContext.fillStyle = e, this._cachedFillStyle = e);
      }, f.default.Renderer2D.prototype._getStroke = function () {
        return this._cachedStrokeStyle || (this._cachedStrokeStyle = this.drawingContext.strokeStyle), this._cachedStrokeStyle;
      }, f.default.Renderer2D.prototype._setStroke = function (e) {
        e !== this._cachedStrokeStyle && (this.drawingContext.strokeStyle = e, this._cachedStrokeStyle = e);
      }, f.default.Renderer2D.prototype.bezier = function (e, t, r, n, i, a, o, s) {
        return this._pInst.beginShape(), this._pInst.vertex(e, t), this._pInst.bezierVertex(r, n, i, a, o, s), this._pInst.endShape(), this;
      }, f.default.Renderer2D.prototype.curve = function (e, t, r, n, i, a, o, s) {
        return this._pInst.beginShape(), this._pInst.curveVertex(e, t), this._pInst.curveVertex(r, n), this._pInst.curveVertex(i, a), this._pInst.curveVertex(o, s), this._pInst.endShape(), this;
      }, f.default.Renderer2D.prototype._doFillStrokeClose = function (e) {
        e && this.drawingContext.closePath(), this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke();
      }, f.default.Renderer2D.prototype.applyMatrix = function (e, t, r, n, i, a) {
        this.drawingContext.transform(e, t, r, n, i, a);
      }, f.default.Renderer2D.prototype.resetMatrix = function () {
        return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this;
      }, f.default.Renderer2D.prototype.rotate = function (e) {
        this.drawingContext.rotate(e);
      }, f.default.Renderer2D.prototype.scale = function (e, t) {
        return this.drawingContext.scale(e, t), this;
      }, f.default.Renderer2D.prototype.translate = function (e, t) {
        return e instanceof f.default.Vector && (t = e.y, e = e.x), this.drawingContext.translate(e, t), this;
      }, f.default.Renderer2D.prototype.text = function (e, t, r, n, i) {
        var a;
        void 0 !== n && this.drawingContext.textBaseline === d.BASELINE && (a = !0, this.drawingContext.textBaseline = d.TOP);
        var o = f.default.Renderer.prototype.text.apply(this, arguments);
        return a && (this.drawingContext.textBaseline = d.BASELINE), o;
      }, f.default.Renderer2D.prototype._renderText = function (e, t, r, n, i) {
        if (!(i <= n)) return e.push(), this._isOpenType() ? this._textFont._renderPath(t, r, n, {
          renderer: this
        }) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(t, r, n), this._doFill && (this._fillSet || this._setFill(d._DEFAULT_TEXT_FILL), this.drawingContext.fillText(t, r, n))), e.pop(), e;
      }, f.default.Renderer2D.prototype.textWidth = function (e) {
        return this._isOpenType() ? this._textFont._textWidth(e, this._textSize) : this.drawingContext.measureText(e).width;
      }, f.default.Renderer2D.prototype._applyTextProperties = function () {
        var e,
            t = this._pInst;
        return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), e = this._textFont, this._isOpenType() && (e = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = "".concat(this._textStyle || "normal", " ").concat(this._textSize || 12, "px ").concat(e || "sans-serif"), this.drawingContext.textAlign = this._textAlign, this._textBaseline === d.CENTER ? this.drawingContext.textBaseline = d._CTX_MIDDLE : this.drawingContext.textBaseline = this._textBaseline, t;
      }, f.default.Renderer2D.prototype.push = function () {
        return this.drawingContext.save(), f.default.Renderer.prototype.push.apply(this);
      }, f.default.Renderer2D.prototype.pop = function (e) {
        this.drawingContext.restore(), this._cachedFillStyle = this.drawingContext.fillStyle, this._cachedStrokeStyle = this.drawingContext.strokeStyle, f.default.Renderer.prototype.pop.call(this, e);
      };
      var i = f.default.Renderer2D;
      r.default = i;
    }, {
      "../image/filters": 59,
      "./constants": 37,
      "./main": 43,
      "./p5.Renderer": 46
    }],
    48: [function (e, t, r) {
      "use strict";

      var n,
          c = (n = e("./main")) && n.__esModule ? n : {
        default: n
      };
      c.default.prototype._promisePreloads = [];
      var p = !(c.default.prototype.registerPromisePreload = function (e) {
        c.default.prototype._promisePreloads.push(e);
      });
      c.default.prototype._setupPromisePreloads = function () {
        var e = !0,
            t = !1,
            r = void 0;

        try {
          for (var n, i = this._promisePreloads[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
            var a = n.value,
                o = this,
                s = a.method,
                l = a.addCallbacks,
                u = a.legacyPreloadSetup,
                h = a.target || this,
                f = h[s].bind(h);

            if (h === c.default.prototype) {
              if (p) continue;
              o = null, f = h[s];
            }

            if (h[s] = this._wrapPromisePreload(o, f, l), u) h[u.method] = this._legacyPreloadGenerator(o, u, h[s]);
          }
        } catch (e) {
          t = !0, r = e;
        } finally {
          try {
            e || null == i.return || i.return();
          } finally {
            if (t) throw r;
          }
        }

        p = !0;
      }, c.default.prototype._wrapPromisePreload = function (e, l, u) {
        var t = function t() {
          var e = this;

          this._incrementPreload();

          for (var t = null, r = null, n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
            i[a] = arguments[a];
          }

          if (u) for (var o = i.length - 1; 0 <= o && !r && "function" == typeof i[o]; o--) {
            r = t, t = i.pop();
          }
          var s = Promise.resolve(l.apply(this, i));
          return t && s.then(t), r && s.catch(r), s.then(function () {
            return e._decrementPreload();
          }), s;
        };

        return e && (t = t.bind(e)), t;
      };

      function a() {
        return {};
      }

      c.default.prototype._legacyPreloadGenerator = function (e, t, n) {
        var i = t.createBaseObject || a,
            r = function r() {
          var t = this;

          this._incrementPreload();

          var r = i.apply(this, arguments);
          return n.apply(this, arguments).then(function (e) {
            Object.assign(r, e), t._decrementPreload();
          }), r;
        };

        return e && (r = r.bind(e)), r;
      };
    }, {
      "./main": 43
    }],
    49: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          s = (n = e("./main")) && n.__esModule ? n : {
        default: n
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== u(e) && "function" != typeof e) return {
          default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function o() {
          return e;
        }, e;
      }

      function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      e("./p5.Graphics"), e("./p5.Renderer2D"), e("../webgl/p5.RendererGL");
      var h = "defaultCanvas0";
      s.default.prototype.createCanvas = function (e, t, r) {
        s.default._validateParameters("createCanvas", arguments);

        var n,
            i = r || l.P2D;

        if (i === l.WEBGL) {
          if (n = document.getElementById(h)) {
            n.parentNode.removeChild(n);
            var a = this._renderer;
            this._elements = this._elements.filter(function (e) {
              return e !== a;
            });
          }

          (n = document.createElement("canvas")).id = h, n.classList.add("p5Canvas");
        } else if (this._defaultGraphicsCreated) n = this.canvas;else {
          n = document.createElement("canvas");

          for (var o = 0; document.getElementById("defaultCanvas".concat(o));) {
            o++;
          }

          h = "defaultCanvas".concat(o), n.id = h, n.classList.add("p5Canvas");
        }

        return this._setupDone || (n.dataset.hidden = !0, n.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(n) : document.body.appendChild(n), i === l.WEBGL ? (this._setProperty("_renderer", new s.default.RendererGL(n, this, !0)), this._elements.push(this._renderer)) : this._defaultGraphicsCreated || (this._setProperty("_renderer", new s.default.Renderer2D(n, this, !0)), this._defaultGraphicsCreated = !0, this._elements.push(this._renderer)), this._renderer.resize(e, t), this._renderer._applyDefaults(), this._renderer;
      }, s.default.prototype.resizeCanvas = function (e, t, r) {
        if (s.default._validateParameters("resizeCanvas", arguments), this._renderer) {
          var n = {};

          for (var i in this.drawingContext) {
            var a = this.drawingContext[i];
            "object" !== u(a) && "function" != typeof a && (n[i] = a);
          }

          for (var o in this._renderer.resize(e, t), this.width = e, this.height = t, n) {
            try {
              this.drawingContext[o] = n[o];
            } catch (e) {}
          }

          r || this.redraw();
        }
      }, s.default.prototype.noCanvas = function () {
        this.canvas && this.canvas.parentNode.removeChild(this.canvas);
      }, s.default.prototype.createGraphics = function (e, t, r) {
        return s.default._validateParameters("createGraphics", arguments), new s.default.Graphics(e, t, r, this);
      }, s.default.prototype.blendMode = function (e) {
        s.default._validateParameters("blendMode", arguments), e === l.NORMAL && (console.warn("NORMAL has been deprecated for use in blendMode. defaulting to BLEND instead."), e = l.BLEND), this._renderer.blendMode(e);
      };
      var i = s.default;
      r.default = i;
    }, {
      "../webgl/p5.RendererGL": 75,
      "./constants": 37,
      "./main": 43,
      "./p5.Graphics": 45,
      "./p5.Renderer2D": 47
    }],
    50: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var h = n(e("../main")),
          s = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = l();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants")),
          f = n(e("../helpers"));

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return l = function l() {
          return e;
        }, e;
      }

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      e("../error_helpers"), h.default.prototype._normalizeArcAngles = function (e, t, r, n, i) {
        var a;
        return e -= s.TWO_PI * Math.floor(e / s.TWO_PI), t -= s.TWO_PI * Math.floor(t / s.TWO_PI), a = Math.min(Math.abs(e - t), s.TWO_PI - Math.abs(e - t)), i && (e = e <= s.HALF_PI ? Math.atan(r / n * Math.tan(e)) : e > s.HALF_PI && e <= 3 * s.HALF_PI ? Math.atan(r / n * Math.tan(e)) + s.PI : Math.atan(r / n * Math.tan(e)) + s.TWO_PI, t = t <= s.HALF_PI ? Math.atan(r / n * Math.tan(t)) : t > s.HALF_PI && t <= 3 * s.HALF_PI ? Math.atan(r / n * Math.tan(t)) + s.PI : Math.atan(r / n * Math.tan(t)) + s.TWO_PI), t < e && (t += s.TWO_PI), {
          start: e,
          stop: t,
          correspondToSamePoint: a < 1e-5
        };
      }, h.default.prototype.arc = function (e, t, r, n, i, a, o, s) {
        if (h.default._validateParameters("arc", arguments), !this._renderer._doStroke && !this._renderer._doFill) return this;
        i = this._toRadians(i), a = this._toRadians(a), r = Math.abs(r), n = Math.abs(n);

        var l = f.default.modeAdjust(e, t, r, n, this._renderer._ellipseMode),
            u = this._normalizeArcAngles(i, a, l.w, l.h, !0);

        return u.correspondToSamePoint ? this._renderer.ellipse([l.x, l.y, l.w, l.h, s]) : this._renderer.arc(l.x, l.y, l.w, l.h, u.start, u.stop, o, s), this;
      }, h.default.prototype.ellipse = function (e, t, r, n, i) {
        return h.default._validateParameters("ellipse", arguments), this._renderEllipse.apply(this, arguments);
      }, h.default.prototype.circle = function () {
        h.default._validateParameters("circle", arguments);

        var e = Array.prototype.slice.call(arguments, 0, 2);
        return e.push(arguments[2]), e.push(arguments[2]), this._renderEllipse.apply(this, e);
      }, h.default.prototype._renderEllipse = function (e, t, r, n, i) {
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        r < 0 && (r = Math.abs(r)), void 0 === n ? n = r : n < 0 && (n = Math.abs(n));
        var a = f.default.modeAdjust(e, t, r, n, this._renderer._ellipseMode);
        return this._renderer.ellipse([a.x, a.y, a.w, a.h, i]), this;
      }, h.default.prototype.line = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        h.default._validateParameters("line", t), this._renderer._doStroke && (n = this._renderer).line.apply(n, t);
        return this;
      }, h.default.prototype.point = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        h.default._validateParameters("point", t), this._renderer._doStroke && (1 === t.length && t[0] instanceof h.default.Vector ? this._renderer.point.call(this._renderer, t[0].x, t[0].y, t[0].z) : (n = this._renderer).point.apply(n, t));
        return this;
      }, h.default.prototype.quad = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        h.default._validateParameters("quad", t), (this._renderer._doStroke || this._renderer._doFill) && (this._renderer.isP3D && 12 !== t.length ? this._renderer.quad.call(this._renderer, t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 0, t[6], t[7], 0) : (n = this._renderer).quad.apply(n, t));
        return this;
      }, h.default.prototype.rect = function () {
        return h.default._validateParameters("rect", arguments), this._renderRect.apply(this, arguments);
      }, h.default.prototype.square = function (e, t, r, n, i, a, o) {
        return h.default._validateParameters("square", arguments), this._renderRect.call(this, e, t, r, r, n, i, a, o);
      }, h.default.prototype._renderRect = function () {
        if (this._renderer._doStroke || this._renderer._doFill) {
          3 === arguments.length && (arguments[3] = arguments[2]);

          for (var e = f.default.modeAdjust(arguments[0], arguments[1], arguments[2], arguments[3], this._renderer._rectMode), t = [e.x, e.y, e.w, e.h], r = 4; r < arguments.length; r++) {
            t[r] = arguments[r];
          }

          this._renderer.rect(t);
        }

        return this;
      }, h.default.prototype.triangle = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return h.default._validateParameters("triangle", t), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.triangle(t), this;
      };
      var i = h.default;
      r.default = i;
    }, {
      "../constants": 37,
      "../error_helpers": 39,
      "../helpers": 40,
      "../main": 43
    }],
    51: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          i = (n = e("../main")) && n.__esModule ? n : {
        default: n
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      i.default.prototype.ellipseMode = function (e) {
        return i.default._validateParameters("ellipseMode", arguments), e !== a.CORNER && e !== a.CORNERS && e !== a.RADIUS && e !== a.CENTER || (this._renderer._ellipseMode = e), this;
      }, i.default.prototype.noSmooth = function () {
        return this.setAttributes("antialias", !1), this._renderer.isP3D || "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !1), this;
      }, i.default.prototype.rectMode = function (e) {
        return i.default._validateParameters("rectMode", arguments), e !== a.CORNER && e !== a.CORNERS && e !== a.RADIUS && e !== a.CENTER || (this._renderer._rectMode = e), this;
      }, i.default.prototype.smooth = function () {
        return this.setAttributes("antialias", !0), this._renderer.isP3D || "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !0), this;
      }, i.default.prototype.strokeCap = function (e) {
        return i.default._validateParameters("strokeCap", arguments), e !== a.ROUND && e !== a.SQUARE && e !== a.PROJECT || this._renderer.strokeCap(e), this;
      }, i.default.prototype.strokeJoin = function (e) {
        return i.default._validateParameters("strokeJoin", arguments), e !== a.ROUND && e !== a.BEVEL && e !== a.MITER || this._renderer.strokeJoin(e), this;
      }, i.default.prototype.strokeWeight = function (e) {
        return i.default._validateParameters("strokeWeight", arguments), this._renderer.strokeWeight(e), this;
      };
      var l = i.default;
      r.default = l;
    }, {
      "../constants": 37,
      "../main": 43
    }],
    52: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          s = (n = e("../main")) && n.__esModule ? n : {
        default: n
      };
      e("../error_helpers"), s.default.prototype.bezier = function () {
        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return s.default._validateParameters("bezier", r), (this._renderer._doStroke || this._renderer._doFill) && (e = this._renderer).bezier.apply(e, r), this;
      }, s.default.prototype.bezierDetail = function (e) {
        return s.default._validateParameters("bezierDetail", arguments), this._bezierDetail = e, this;
      }, s.default.prototype.bezierPoint = function (e, t, r, n, i) {
        s.default._validateParameters("bezierPoint", arguments);

        var a = 1 - i;
        return Math.pow(a, 3) * e + 3 * Math.pow(a, 2) * i * t + 3 * a * Math.pow(i, 2) * r + Math.pow(i, 3) * n;
      }, s.default.prototype.bezierTangent = function (e, t, r, n, i) {
        s.default._validateParameters("bezierTangent", arguments);

        var a = 1 - i;
        return 3 * n * Math.pow(i, 2) - 3 * r * Math.pow(i, 2) + 6 * r * a * i - 6 * t * a * i + 3 * t * Math.pow(a, 2) - 3 * e * Math.pow(a, 2);
      }, s.default.prototype.curve = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        s.default._validateParameters("curve", t), this._renderer._doStroke && (n = this._renderer).curve.apply(n, t);
        return this;
      }, s.default.prototype.curveDetail = function (e) {
        return s.default._validateParameters("curveDetail", arguments), this._curveDetail = e < 3 ? 3 : e, this;
      }, s.default.prototype.curveTightness = function (e) {
        return s.default._validateParameters("curveTightness", arguments), this._renderer._curveTightness = e, this;
      }, s.default.prototype.curvePoint = function (e, t, r, n, i) {
        s.default._validateParameters("curvePoint", arguments);

        var a = i * i * i,
            o = i * i;
        return e * (-.5 * a + o - .5 * i) + t * (1.5 * a - 2.5 * o + 1) + r * (-1.5 * a + 2 * o + .5 * i) + n * (.5 * a - .5 * o);
      }, s.default.prototype.curveTangent = function (e, t, r, n, i) {
        s.default._validateParameters("curveTangent", arguments);

        var a = i * i;
        return e * (-3 * a / 2 + 2 * i - .5) + t * (9 * a / 2 - 5 * i) + r * (-9 * a / 2 + 4 * i + .5) + n * (3 * a / 2 - i);
      };
      var i = s.default;
      r.default = i;
    }, {
      "../error_helpers": 39,
      "../main": 43
    }],
    53: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          s = (n = e("../main")) && n.__esModule ? n : {
        default: n
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function u() {
          return e;
        }, e;
      }

      var i = null,
          h = [],
          f = [],
          c = !1,
          a = !1,
          p = !1,
          d = !1,
          g = !0;
      s.default.prototype.beginContour = function () {
        return f = [], d = !0, this;
      }, s.default.prototype.beginShape = function (e) {
        var t;
        (s.default._validateParameters("beginShape", arguments), this._renderer.isP3D) ? (t = this._renderer).beginShape.apply(t, arguments) : (i = e === l.POINTS || e === l.LINES || e === l.TRIANGLES || e === l.TRIANGLE_FAN || e === l.TRIANGLE_STRIP || e === l.QUADS || e === l.QUAD_STRIP ? e : null, h = [], f = []);
        return this;
      }, s.default.prototype.bezierVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        if (s.default._validateParameters("bezierVertex", t), this._renderer.isP3D) (n = this._renderer).bezierVertex.apply(n, t);else if (0 === h.length) s.default._friendlyError("vertex() must be used once before calling bezierVertex()", "bezierVertex");else {
          c = !0;

          for (var i = [], a = 0; a < t.length; a++) {
            i[a] = t[a];
          }

          i.isVert = !1, d ? f.push(i) : h.push(i);
        }
        return this;
      }, s.default.prototype.curveVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        var n;
        (s.default._validateParameters("curveVertex", t), this._renderer.isP3D) ? (n = this._renderer).curveVertex.apply(n, t) : (a = !0, this.vertex(t[0], t[1]));
        return this;
      }, s.default.prototype.endContour = function () {
        var e = f[0].slice();
        e.isVert = f[0].isVert, e.moveTo = !1, f.push(e), g && (h.push(h[0]), g = !1);

        for (var t = 0; t < f.length; t++) {
          h.push(f[t]);
        }

        return this;
      }, s.default.prototype.endShape = function (e) {
        if (s.default._validateParameters("endShape", arguments), this._renderer.isP3D) this._renderer.endShape(e, a, c, p, d, i);else {
          if (0 === h.length) return this;
          if (!this._renderer._doStroke && !this._renderer._doFill) return this;
          var t = e === l.CLOSE;
          t && !d && h.push(h[0]), this._renderer.endShape(e, h, a, c, p, d, i), g = !(d = p = c = a = !1), t && h.pop();
        }
        return this;
      }, s.default.prototype.quadraticVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        if (s.default._validateParameters("quadraticVertex", t), this._renderer.isP3D) {
          var n;

          (n = this._renderer).quadraticVertex.apply(n, t);
        } else {
          if (this._contourInited) {
            var i = {};
            return i.x = t[0], i.y = t[1], i.x3 = t[2], i.y3 = t[3], i.type = l.QUADRATIC, this._contourVertices.push(i), this;
          }

          if (0 < h.length) {
            p = !0;

            for (var a = [], o = 0; o < t.length; o++) {
              a[o] = t[o];
            }

            a.isVert = !1, d ? f.push(a) : h.push(a);
          } else s.default._friendlyError("vertex() must be used once before calling quadraticVertex()", "quadraticVertex");
        }

        return this;
      }, s.default.prototype.vertex = function (e, t, r, n, i) {
        if (this._renderer.isP3D) {
          var a;

          (a = this._renderer).vertex.apply(a, arguments);
        } else {
          var o = [];
          o.isVert = !0, o[0] = e, o[1] = t, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = this._renderer._getFill(), o[6] = this._renderer._getStroke(), r && (o.moveTo = r), d ? (0 === f.length && (o.moveTo = !0), f.push(o)) : h.push(o);
        }

        return this;
      };
      var m = s.default;
      r.default = m;
    }, {
      "../constants": 37,
      "../main": 43
    }],
    54: [function (e, t, r) {
      "use strict";

      function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
        window.setTimeout(e, 1e3 / 60);
      }, "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
        value: Array.prototype.slice,
        writable: !0,
        configurable: !0,
        enumerable: !1
      }), function () {
        if (!Object.assign) {
          var s = Object.keys,
              e = Object.defineProperty,
              l = "function" == typeof Symbol && "symbol" === n(Symbol()),
              r = Object.prototype.propertyIsEnumerable,
              u = function u(t) {
            return function (e) {
              return r.call(t, e);
            };
          };

          e(Object, "assign", {
            value: function value(e, t) {
              if (null == e) throw new TypeError("target must be an object");
              var r,
                  n,
                  i,
                  a,
                  o = Object(e);

              for (r = 1; r < arguments.length; ++r) {
                for (n = Object(arguments[r]), a = s(n), l && Object.getOwnPropertySymbols && a.push.apply(a, Object.getOwnPropertySymbols(n).filter(u(n))), i = 0; i < a.length; ++i) {
                  o[a[i]] = n[a[i]];
                }
              }

              return o;
            },
            configurable: !0,
            enumerable: !1,
            writable: !0
          });
        }
      }();
    }, {}],
    55: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("./main")) && n.__esModule ? n : {
        default: n
      };
      i.default.prototype.noLoop = function () {
        this._loop = !1;
      }, i.default.prototype.loop = function () {
        this._loop || (this._loop = !0, this._setupDone && this._draw());
      }, i.default.prototype.push = function () {
        this._styles.push({
          props: {
            _colorMode: this._colorMode
          },
          renderer: this._renderer.push()
        });
      }, i.default.prototype.pop = function () {
        var e = this._styles.pop();

        e ? (this._renderer.pop(e.renderer), Object.assign(this, e.props)) : console.warn("pop() was called without matching push()");
      }, i.default.prototype.redraw = function (e) {
        if (!this._inUserDraw && this._setupDone) {
          var t = parseInt(e);
          (isNaN(t) || t < 1) && (t = 1);
          var r = this._isGlobal ? window : this,
              n = r.setup,
              i = r.draw;

          if ("function" == typeof i) {
            void 0 === n && r.scale(r._pixelDensity, r._pixelDensity);

            for (var a = function a(e) {
              e.call(r);
            }, o = 0; o < t; o++) {
              r.resetMatrix(), r._renderer.isP3D && r._renderer._update(), r._setProperty("frameCount", r.frameCount + 1), r._registeredMethods.pre.forEach(a), this._inUserDraw = !0;

              try {
                i();
              } finally {
                this._inUserDraw = !1;
              }

              r._registeredMethods.post.forEach(a);
            }
          }
        }
      };
      var a = i.default;
      r.default = a;
    }, {
      "./main": 43
    }],
    56: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          a = (n = e("./main")) && n.__esModule ? n : {
        default: n
      };
      a.default.prototype.applyMatrix = function (e, t, r, n, i, a) {
        var o;
        return (o = this._renderer).applyMatrix.apply(o, arguments), this;
      }, a.default.prototype.resetMatrix = function () {
        return this._renderer.resetMatrix(), this;
      }, a.default.prototype.rotate = function (e, t) {
        return a.default._validateParameters("rotate", arguments), this._renderer.rotate(this._toRadians(e), t), this;
      }, a.default.prototype.rotateX = function (e) {
        return this._assert3d("rotateX"), a.default._validateParameters("rotateX", arguments), this._renderer.rotateX(this._toRadians(e)), this;
      }, a.default.prototype.rotateY = function (e) {
        return this._assert3d("rotateY"), a.default._validateParameters("rotateY", arguments), this._renderer.rotateY(this._toRadians(e)), this;
      }, a.default.prototype.rotateZ = function (e) {
        return this._assert3d("rotateZ"), a.default._validateParameters("rotateZ", arguments), this._renderer.rotateZ(this._toRadians(e)), this;
      }, a.default.prototype.scale = function (e, t, r) {
        if (a.default._validateParameters("scale", arguments), e instanceof a.default.Vector) {
          var n = e;
          e = n.x, t = n.y, r = n.z;
        } else if (e instanceof Array) {
          var i = e;
          e = i[0], t = i[1], r = i[2] || 1;
        }

        return isNaN(t) ? t = r = e : isNaN(r) && (r = 1), this._renderer.scale.call(this._renderer, e, t, r), this;
      }, a.default.prototype.shearX = function (e) {
        a.default._validateParameters("shearX", arguments);

        var t = this._toRadians(e);

        return this._renderer.applyMatrix(1, 0, Math.tan(t), 1, 0, 0), this;
      }, a.default.prototype.shearY = function (e) {
        a.default._validateParameters("shearY", arguments);

        var t = this._toRadians(e);

        return this._renderer.applyMatrix(1, Math.tan(t), 0, 1, 0, 0), this;
      }, a.default.prototype.translate = function (e, t, r) {
        return a.default._validateParameters("translate", arguments), this._renderer.isP3D ? this._renderer.translate(e, t, r) : this._renderer.translate(e, t), this;
      };
      var i = a.default;
      r.default = i;
    }, {
      "./main": 43
    }],
    57: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.prototype.createStringDict = function (e, t) {
        return i.default._validateParameters("createStringDict", arguments), new i.default.StringDict(e, t);
      }, i.default.prototype.createNumberDict = function (e, t) {
        return i.default._validateParameters("createNumberDict", arguments), new i.default.NumberDict(e, t);
      }, i.default.TypedDict = function (e, t) {
        return e instanceof Object ? this.data = e : (this.data = {}, this.data[e] = t), this;
      }, i.default.TypedDict.prototype.size = function () {
        return Object.keys(this.data).length;
      }, i.default.TypedDict.prototype.hasKey = function (e) {
        return this.data.hasOwnProperty(e);
      }, i.default.TypedDict.prototype.get = function (e) {
        if (this.data.hasOwnProperty(e)) return this.data[e];
        console.log("".concat(e, " does not exist in this Dictionary"));
      }, i.default.TypedDict.prototype.set = function (e, t) {
        this._validate(t) ? this.data[e] = t : console.log("Those values dont work for this dictionary type.");
      }, i.default.TypedDict.prototype._addObj = function (e) {
        for (var t in e) {
          this.set(t, e[t]);
        }
      }, i.default.TypedDict.prototype.create = function (e, t) {
        e instanceof Object && void 0 === t ? this._addObj(e) : void 0 !== e ? this.set(e, t) : console.log("In order to create a new Dictionary entry you must pass an object or a key, value pair");
      }, i.default.TypedDict.prototype.clear = function () {
        this.data = {};
      }, i.default.TypedDict.prototype.remove = function (e) {
        if (!this.data.hasOwnProperty(e)) throw new Error("".concat(e, " does not exist in this Dictionary"));
        delete this.data[e];
      }, i.default.TypedDict.prototype.print = function () {
        for (var e in this.data) {
          console.log("key:".concat(e, " value:").concat(this.data[e]));
        }
      }, i.default.TypedDict.prototype.saveTable = function (e) {
        var t = "";

        for (var r in this.data) {
          t += "".concat(r, ",").concat(this.data[r], "\n");
        }

        var n = new Blob([t], {
          type: "text/csv"
        });
        i.default.prototype.downloadFile(n, e || "mycsv", "csv");
      }, i.default.TypedDict.prototype.saveJSON = function (e, t) {
        i.default.prototype.saveJSON(this.data, e, t);
      }, i.default.TypedDict.prototype._validate = function (e) {
        return !0;
      }, i.default.StringDict = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        i.default.TypedDict.apply(this, t);
      }, i.default.StringDict.prototype = Object.create(i.default.TypedDict.prototype), i.default.StringDict.prototype._validate = function (e) {
        return "string" == typeof e;
      }, i.default.NumberDict = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        i.default.TypedDict.apply(this, t);
      }, i.default.NumberDict.prototype = Object.create(i.default.TypedDict.prototype), i.default.NumberDict.prototype._validate = function (e) {
        return "number" == typeof e;
      }, i.default.NumberDict.prototype.add = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] += t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, i.default.NumberDict.prototype.sub = function (e, t) {
        this.add(e, -t);
      }, i.default.NumberDict.prototype.mult = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] *= t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, i.default.NumberDict.prototype.div = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] /= t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, i.default.NumberDict.prototype._valueTest = function (e) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to search for a minimum or maximum value on an empty NumberDict");
        if (1 === Object.keys(this.data).length) return this.data[Object.keys(this.data)[0]];
        var t = this.data[Object.keys(this.data)[0]];

        for (var r in this.data) {
          this.data[r] * e < t * e && (t = this.data[r]);
        }

        return t;
      }, i.default.NumberDict.prototype.minValue = function () {
        return this._valueTest(1);
      }, i.default.NumberDict.prototype.maxValue = function () {
        return this._valueTest(-1);
      }, i.default.NumberDict.prototype._keyTest = function (e) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to use minValue on an empty NumberDict");
        if (1 === Object.keys(this.data).length) return Object.keys(this.data)[0];

        for (var t = Object.keys(this.data)[0], r = 1; r < Object.keys(this.data).length; r++) {
          Object.keys(this.data)[r] * e < t * e && (t = Object.keys(this.data)[r]);
        }

        return t;
      }, i.default.NumberDict.prototype.minKey = function () {
        return this._keyTest(1);
      }, i.default.NumberDict.prototype.maxKey = function () {
        return this._keyTest(-1);
      };
      var a = i.default.TypedDict;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    58: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      i.default.prototype.movedX = 0, i.default.prototype.movedY = 0, i.default.prototype._hasMouseInteracted = !1, i.default.prototype.mouseX = 0, i.default.prototype.mouseY = 0, i.default.prototype.pmouseX = 0, i.default.prototype.pmouseY = 0, i.default.prototype.winMouseX = 0, i.default.prototype.winMouseY = 0, i.default.prototype.pwinMouseX = 0, i.default.prototype.pwinMouseY = 0, i.default.prototype.mouseButton = 0, i.default.prototype.mouseIsPressed = !1, i.default.prototype._updateNextMouseCoords = function (e) {
        if (null !== this._curElement && (!e.touches || 0 < e.touches.length)) {
          var t = function (e, t, r, n) {
            n && !n.clientX && (n.touches ? n = n.touches[0] : n.changedTouches && (n = n.changedTouches[0]));
            var i = e.getBoundingClientRect(),
                a = e.scrollWidth / t || 1,
                o = e.scrollHeight / r || 1;
            return {
              x: (n.clientX - i.left) / a,
              y: (n.clientY - i.top) / o,
              winX: n.clientX,
              winY: n.clientY,
              id: n.identifier
            };
          }(this._curElement.elt, this.width, this.height, e);

          this._setProperty("movedX", e.movementX), this._setProperty("movedY", e.movementY), this._setProperty("mouseX", t.x), this._setProperty("mouseY", t.y), this._setProperty("winMouseX", t.winX), this._setProperty("winMouseY", t.winY);
        }

        this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0));
      }, i.default.prototype._updateMouseCoords = function () {
        this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY), this._setProperty("_pmouseWheelDeltaY", this._mouseWheelDeltaY);
      }, i.default.prototype._setMouseButton = function (e) {
        1 === e.button ? this._setProperty("mouseButton", a.CENTER) : 2 === e.button ? this._setProperty("mouseButton", a.RIGHT) : this._setProperty("mouseButton", a.LEFT);
      }, i.default.prototype._onmousemove = function (e) {
        var t = this._isGlobal ? window : this;
        this._updateNextMouseCoords(e), this.mouseIsPressed ? "function" == typeof t.mouseDragged ? !1 === t.mouseDragged(e) && e.preventDefault() : "function" == typeof t.touchMoved && !1 === t.touchMoved(e) && e.preventDefault() : "function" == typeof t.mouseMoved && !1 === t.mouseMoved(e) && e.preventDefault();
      }, i.default.prototype._onmousedown = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("mouseIsPressed", !0), this._setMouseButton(e), this._updateNextMouseCoords(e), "function" == typeof t.mousePressed ? !1 === t.mousePressed(e) && e.preventDefault() : navigator.userAgent.toLowerCase().includes("safari") && "function" == typeof t.touchStarted && !1 === t.touchStarted(e) && e.preventDefault();
      }, i.default.prototype._onmouseup = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("mouseIsPressed", !1), "function" == typeof t.mouseReleased ? !1 === t.mouseReleased(e) && e.preventDefault() : "function" == typeof t.touchEnded && !1 === t.touchEnded(e) && e.preventDefault();
      }, i.default.prototype._ondragend = i.default.prototype._onmouseup, i.default.prototype._ondragover = i.default.prototype._onmousemove, i.default.prototype._onclick = function (e) {
        var t = this._isGlobal ? window : this;
        "function" == typeof t.mouseClicked && !1 === t.mouseClicked(e) && e.preventDefault();
      }, i.default.prototype._ondblclick = function (e) {
        var t = this._isGlobal ? window : this;
        "function" == typeof t.doubleClicked && !1 === t.doubleClicked(e) && e.preventDefault();
      }, i.default.prototype._mouseWheelDeltaY = 0, i.default.prototype._pmouseWheelDeltaY = 0, i.default.prototype._onwheel = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("_mouseWheelDeltaY", e.deltaY), "function" == typeof t.mouseWheel && (e.delta = e.deltaY, !1 === t.mouseWheel(e) && e.preventDefault());
      }, i.default.prototype.requestPointerLock = function () {
        var e = this._curElement.elt;
        return e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock, e.requestPointerLock ? (e.requestPointerLock(), !0) : (console.log("requestPointerLock is not implemented in this browser"), !1);
      }, i.default.prototype.exitPointerLock = function () {
        document.exitPointerLock();
      };
      var l = i.default;
      r.default = l;
    }, {
      "../core/constants": 37,
      "../core/main": 43
    }],
    59: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var M,
          P,
          R,
          O,
          k = {};

      function n(e, t) {
        for (var r, n, i, a, o, s, l, u, h, f, c = k._toPixels(e), p = e.width, d = e.height, g = p * d, m = new Int32Array(g), v = 0; v < g; v++) {
          m[v] = k._getARGB(c, v);
        }

        var y,
            b,
            _,
            x,
            S = new Int32Array(g),
            w = new Int32Array(g),
            T = new Int32Array(g),
            E = new Int32Array(g),
            C = 0;

        for (!function (e) {
          var t = 3.5 * e | 0;

          if (M !== (t = t < 1 ? 1 : t < 248 ? t : 248)) {
            P = 1 + (M = t) << 1, R = new Int32Array(P), O = new Array(P);

            for (var r = 0; r < P; r++) {
              O[r] = new Int32Array(256);
            }

            for (var n, i, a, o, s = 1, l = t - 1; s < t; s++) {
              R[t + s] = R[l] = i = l * l, a = O[t + s], o = O[l--];

              for (var u = 0; u < 256; u++) {
                a[u] = o[u] = i * u;
              }
            }

            n = R[t] = t * t, a = O[t];

            for (var h = 0; h < 256; h++) {
              a[h] = n * h;
            }
          }
        }(t), b = 0; b < d; b++) {
          for (y = 0; y < p; y++) {
            if (a = i = n = o = r = 0, (s = y - M) < 0) f = -s, s = 0;else {
              if (p <= s) break;
              f = 0;
            }

            for (_ = f; _ < P && !(p <= s); _++) {
              var L = m[s + C];
              o += (x = O[_])[(-16777216 & L) >>> 24], n += x[(16711680 & L) >> 16], i += x[(65280 & L) >> 8], a += x[255 & L], r += R[_], s++;
            }

            S[l = C + y] = o / r, w[l] = n / r, T[l] = i / r, E[l] = a / r;
          }

          C += p;
        }

        for (h = (u = -M) * p, b = C = 0; b < d; b++) {
          for (y = 0; y < p; y++) {
            if (a = i = n = o = r = 0, u < 0) f = l = -u, s = y;else {
              if (d <= u) break;
              f = 0, l = u, s = y + h;
            }

            for (_ = f; _ < P && !(d <= l); _++) {
              o += (x = O[_])[S[s]], n += x[w[s]], i += x[T[s]], a += x[E[s]], r += R[_], l++, s += p;
            }

            m[y + C] = o / r << 24 | n / r << 16 | i / r << 8 | a / r;
          }

          C += p, h += p, u++;
        }

        k._setPixels(c, m);
      }

      k._toPixels = function (e) {
        return e instanceof ImageData ? e.data : e.getContext("2d").getImageData(0, 0, e.width, e.height).data;
      }, k._getARGB = function (e, t) {
        var r = 4 * t;
        return e[3 + r] << 24 & 4278190080 | e[r] << 16 & 16711680 | e[1 + r] << 8 & 65280 | 255 & e[2 + r];
      }, k._setPixels = function (e, t) {
        for (var r = 0, n = 0, i = e.length; n < i; n++) {
          e[(r = 4 * n) + 0] = (16711680 & t[n]) >>> 16, e[r + 1] = (65280 & t[n]) >>> 8, e[r + 2] = 255 & t[n], e[r + 3] = (4278190080 & t[n]) >>> 24;
        }
      }, k._toImageData = function (e) {
        return e instanceof ImageData ? e : e.getContext("2d").getImageData(0, 0, e.width, e.height);
      }, k._createImageData = function (e, t) {
        return k._tmpCanvas = document.createElement("canvas"), k._tmpCtx = k._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(e, t);
      }, k.apply = function (e, t, r) {
        var n = e.getContext("2d"),
            i = n.getImageData(0, 0, e.width, e.height),
            a = t(i, r);
        a instanceof ImageData ? n.putImageData(a, 0, 0, 0, 0, e.width, e.height) : n.putImageData(i, 0, 0, 0, 0, e.width, e.height);
      }, k.threshold = function (e, t) {
        var r = k._toPixels(e);

        void 0 === t && (t = .5);

        for (var n = Math.floor(255 * t), i = 0; i < r.length; i += 4) {
          var a = void 0;
          a = n <= .2126 * r[i] + .7152 * r[i + 1] + .0722 * r[i + 2] ? 255 : 0, r[i] = r[i + 1] = r[i + 2] = a;
        }
      }, k.gray = function (e) {
        for (var t = k._toPixels(e), r = 0; r < t.length; r += 4) {
          var n = .2126 * t[r] + .7152 * t[r + 1] + .0722 * t[r + 2];
          t[r] = t[r + 1] = t[r + 2] = n;
        }
      }, k.opaque = function (e) {
        for (var t = k._toPixels(e), r = 0; r < t.length; r += 4) {
          t[r + 3] = 255;
        }

        return t;
      }, k.invert = function (e) {
        for (var t = k._toPixels(e), r = 0; r < t.length; r += 4) {
          t[r] = 255 - t[r], t[r + 1] = 255 - t[r + 1], t[r + 2] = 255 - t[r + 2];
        }
      }, k.posterize = function (e, t) {
        var r = k._toPixels(e);

        if (t < 2 || 255 < t) throw new Error("Level must be greater than 2 and less than 255 for posterize");

        for (var n = t - 1, i = 0; i < r.length; i += 4) {
          var a = r[i],
              o = r[i + 1],
              s = r[i + 2];
          r[i] = 255 * (a * t >> 8) / n, r[i + 1] = 255 * (o * t >> 8) / n, r[i + 2] = 255 * (s * t >> 8) / n;
        }
      }, k.dilate = function (e) {
        for (var t, r, n, i, a, o, s, l, u, h, f, c, p, d, g, m, v, y = k._toPixels(e), b = 0, _ = y.length ? y.length / 4 : 0, x = new Int32Array(_); b < _;) {
          for (r = (t = b) + e.width; b < r;) {
            n = i = k._getARGB(y, b), (s = b - 1) < t && (s = b), r <= (o = b + 1) && (o = b), (l = b - e.width) < 0 && (l = 0), _ <= (u = b + e.width) && (u = b), c = k._getARGB(y, l), f = k._getARGB(y, s), p = k._getARGB(y, u), (a = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n)) < (g = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f)) && (i = f, a = g), a < (d = 77 * ((h = k._getARGB(y, o)) >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h)) && (i = h, a = d), a < (m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c)) && (i = c, a = m), a < (v = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p)) && (i = p, a = v), x[b++] = i;
          }
        }

        k._setPixels(y, x);
      }, k.erode = function (e) {
        for (var t, r, n, i, a, o, s, l, u, h, f, c, p, d, g, m, v, y = k._toPixels(e), b = 0, _ = y.length ? y.length / 4 : 0, x = new Int32Array(_); b < _;) {
          for (r = (t = b) + e.width; b < r;) {
            n = i = k._getARGB(y, b), (s = b - 1) < t && (s = b), r <= (o = b + 1) && (o = b), (l = b - e.width) < 0 && (l = 0), _ <= (u = b + e.width) && (u = b), c = k._getARGB(y, l), f = k._getARGB(y, s), p = k._getARGB(y, u), (g = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f)) < (a = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n)) && (i = f, a = g), (d = 77 * ((h = k._getARGB(y, o)) >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h)) < a && (i = h, a = d), (m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c)) < a && (i = c, a = m), (v = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p)) < a && (i = p, a = v), x[b++] = i;
          }
        }

        k._setPixels(y, x);
      }, k.blur = function (e, t) {
        n(e, t);
      };
      var i = k;
      r.default = i;
    }, {}],
    60: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var k = n(e("../core/main")),
          D = n(e("omggif"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function A(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) {
              r[t] = e[t];
            }

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      var f = [];
      k.default.prototype.createImage = function (e, t) {
        return k.default._validateParameters("createImage", arguments), new k.default.Image(e, t);
      }, k.default.prototype.saveCanvas = function () {
        k.default._validateParameters("saveCanvas", arguments);

        var e,
            t,
            r,
            n,
            i = [].slice.call(arguments);

        switch (arguments[0] instanceof HTMLCanvasElement ? (e = arguments[0], i.shift()) : arguments[0] instanceof k.default.Element ? (e = arguments[0].elt, i.shift()) : e = this._curElement && this._curElement.elt, 1 <= i.length && (t = i[0]), 2 <= i.length && (r = i[1]), r = r || k.default.prototype._checkFileExtension(t, r)[1] || "png") {
          default:
            n = "image/png";
            break;

          case "jpeg":
          case "jpg":
            n = "image/jpeg";
        }

        e.toBlob(function (e) {
          k.default.prototype.downloadFile(e, t, r);
        }, n);
      }, k.default.prototype.saveGif = function (d, e) {
        var g = d.gifProperties,
            t = g.loopLimit;
        1 === t ? t = null : null === t && (t = 0);

        for (var r = new Uint8Array(d.width * d.height * g.numFrames), m = [], n = {}, i = 0; i < g.numFrames; i++) {
          for (var a = new Set(), o = g.frames[i].image.data, s = o.length, l = new Uint32Array(d.width * d.height), u = 0, h = 0; u < s; u += 4, h++) {
            var f = o[u + 0] << 16 | o[u + 1] << 8 | o[u + 2] << 0;
            a.add(f), l[h] = f;
          }

          var c = A(a).sort().toString();
          void 0 === n[c] ? n[c] = {
            freq: 1,
            frames: [i]
          } : (n[c].freq += 1, n[c].frames.push(i)), m.push(l);
        }

        var v = [],
            p = Object.keys(n).sort(function (e, t) {
          return n[t].freq - n[e].freq;
        }),
            y = p[0].split(",").map(function (e) {
          return parseInt(e);
        });
        v = v.concat(n[y].frames);

        for (var b = new Set(y), _ = 1; _ < p.length; _++) {
          var x = p[_].split(",").map(function (e) {
            return parseInt(e);
          }).filter(function (e) {
            return !b.has(e);
          });

          if (y.length + x.length <= 256) {
            for (var S = 0; S < x.length; S++) {
              y.push(x[S]), b.add(x[S]);
            }

            v = v.concat(n[p[_]].frames);
          }
        }

        v = new Set(v);

        for (var w = {}, T = 0; T < y.length; T++) {
          w[y[T]] || (w[y[T]] = T);
        }

        for (var E = 1; E < y.length;) {
          E <<= 1;
        }

        y.length = E;

        for (var C = {
          loop: t,
          palette: new Uint32Array(y)
        }, L = new D.default.GifWriter(r, d.width, d.height, C), M = {}, P = function P(e) {
          for (var t = !v.has(e), r = t ? [] : y, n = new Uint8Array(d.width * d.height), i = {}, a = new Set(), o = 0; o < m[e].length; o++) {
            var s = m[e][o];
            t ? (void 0 === i[s] && (i[s] = r.length, r.push(s)), n[o] = i[s]) : n[o] = w[s], 0 < e && m[e - 1][o] !== s && a.add(s);
          }

          var l = {},
              u = r.filter(function (e) {
            return !a.has(e);
          });

          if (0 < u.length) {
            var h = u[0],
                f = t ? i[h] : w[h];

            if (0 < e) {
              for (var c = 0; c < m[e].length; c++) {
                m[e - 1][c] === m[e][c] && (n[c] = f);
              }

              l.transparent = f, M.frameOpts.disposal = 1;
            }
          }

          if (l.delay = g.frames[e].delay / 10, t) {
            for (var p = 1; p < r.length;) {
              p <<= 1;
            }

            r.length = p, l.palette = new Uint32Array(r);
          }

          0 < e && L.addFrame(0, 0, d.width, d.height, M.pixelPaletteIndex, M.frameOpts), M = {
            pixelPaletteIndex: n,
            frameOpts: l
          };
        }, R = 0; R < g.numFrames; R++) {
          P(R);
        }

        M.frameOpts.disposal = 1, L.addFrame(0, 0, d.width, d.height, M.pixelPaletteIndex, M.frameOpts);
        var O = new Blob([r.slice(0, L.end())], {
          type: "image/gif"
        });
        k.default.prototype.downloadFile(O, e, "gif");
      }, k.default.prototype.saveFrames = function (e, t, r, n, o) {
        k.default._validateParameters("saveFrames", arguments);

        var i = r || 3;
        i = k.default.prototype.constrain(i, 0, 15), i *= 1e3;
        var a = n || 15;
        a = k.default.prototype.constrain(a, 0, 22);
        var s = 0,
            l = k.default.prototype._makeFrame,
            u = this._curElement.elt,
            h = setInterval(function () {
          l(e + s, t, u), s++;
        }, 1e3 / a);
        setTimeout(function () {
          if (clearInterval(h), o) o(f);else {
            var e = !0,
                t = !1,
                r = void 0;

            try {
              for (var n, i = f[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                var a = n.value;
                k.default.prototype.downloadFile(a.imageData, a.filename, a.ext);
              }
            } catch (e) {
              t = !0, r = e;
            } finally {
              try {
                e || null == i.return || i.return();
              } finally {
                if (t) throw r;
              }
            }
          }
          f = [];
        }, i + .01);
      }, k.default.prototype._makeFrame = function (e, t, r) {
        var n, i;
        if (n = this ? this._curElement.elt : r, t) switch (t.toLowerCase()) {
          case "png":
            i = "image/png";
            break;

          case "jpeg":
          case "jpg":
            i = "image/jpeg";
            break;

          default:
            i = "image/png";
        } else t = "png", i = "image/png";
        var a = n.toDataURL(i);
        a = a.replace(i, "image/octet-stream");
        var o = {};
        o.imageData = a, o.filename = e, o.ext = t, f.push(o);
      };
      var i = k.default;
      r.default = i;
    }, {
      "../core/main": 43,
      omggif: 28
    }],
    61: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var x = i(e("../core/main")),
          f = i(e("./filters")),
          S = i(e("../core/helpers")),
          n = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          d = i(e("omggif"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function w(e, t) {
        return 0 < e && e < t ? e : t;
      }

      e("../core/error_helpers"), x.default.prototype.loadImage = function (n, i, a) {
        x.default._validateParameters("loadImage", arguments);

        var o = new x.default.Image(1, 1, this),
            s = this,
            e = new Request(n, {
          method: "GET",
          mode: "cors"
        });
        return fetch(n, e).then(function (e) {
          var t = e.headers.get("content-type");
          if (null === t && console.warn("The image you loaded does not have a Content-Type header. If you are using the online editor consider reuploading the asset."), t && t.includes("image/gif")) e.arrayBuffer().then(function (e) {
            e && function (e, r, t, n, i) {
              var a = new d.default.GifReader(e);
              r.width = r.canvas.width = a.width, r.height = r.canvas.height = a.height;
              var o = [],
                  s = a.numFrames(),
                  l = new Uint8ClampedArray(r.width * r.height * 4);

              if (1 < s) {
                for (var u = function u(e, t) {
                  try {
                    t.decodeAndBlitFrameRGBA(e, l);
                  } catch (e) {
                    x.default._friendlyFileLoadError(8, r.src), "function" == typeof n ? n(e) : console.error(e);
                  }
                }, h = 0; h < s; h++) {
                  var f = a.frameInfo(h);
                  1 === a.frameInfo(h).disposal && 0 < h ? r.drawingContext.putImageData(o[h - 1].image, 0, 0) : (r.drawingContext.clearRect(0, 0, r.width, r.height), l = new Uint8ClampedArray(r.width * r.height * 4)), u(h, a);
                  var c = new ImageData(l, r.width, r.height);
                  r.drawingContext.putImageData(c, 0, 0), o.push({
                    image: r.drawingContext.getImageData(0, 0, r.width, r.height),
                    delay: 10 * f.delay
                  });
                }

                var p = a.loopCount();
                null === p ? p = 1 : 0 === p && (p = null), r.gifProperties = {
                  displayIndex: 0,
                  loopLimit: p,
                  loopCount: 0,
                  frames: o,
                  numFrames: s,
                  playing: !0,
                  timeDisplayed: 0
                };
              }

              "function" == typeof t && t(r);
              i();
            }(new Uint8Array(e), o, i, a, function (e) {
              s._decrementPreload();
            }.bind(s));
          }, function (e) {
            "function" == typeof a ? a(e) : console.error(e);
          });else {
            var r = new Image();
            r.onload = function () {
              o.width = o.canvas.width = r.width, o.height = o.canvas.height = r.height, o.drawingContext.drawImage(r, 0, 0), o.modified = !0, "function" == typeof i && i(o), s._decrementPreload();
            }, r.onerror = function (e) {
              x.default._friendlyFileLoadError(0, r.src), "function" == typeof a ? a(e) : console.error(e);
            }, 0 !== n.indexOf("data:image/") && (r.crossOrigin = "Anonymous"), r.src = n;
          }
          o.modified = !0;
        }), o;
      }, x.default.prototype.image = function (e, t, r, n, i, a, o, s, l) {
        x.default._validateParameters("image", arguments);

        var u = e.width,
            h = e.height;
        e.elt && e.elt.videoWidth && !e.canvas && (u = e.elt.videoWidth, h = e.elt.videoHeight);
        var f = t,
            c = r,
            p = n || u,
            d = i || h,
            g = a || 0,
            m = o || 0,
            v = s || u,
            y = l || h;
        v = w(v, u), y = w(y, h);
        var b = 1;
        e.elt && !e.canvas && e.elt.style.width && (b = e.elt.videoWidth && !n ? e.elt.videoWidth : e.elt.width, b /= parseInt(e.elt.style.width, 10)), g *= b, m *= b, y *= b, v *= b;

        var _ = S.default.modeAdjust(f, c, p, d, this._renderer._imageMode);

        this._renderer.image(e, g, m, v, y, _.x, _.y, _.w, _.h);
      }, x.default.prototype.tint = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        x.default._validateParameters("tint", t);

        var n = this.color.apply(this, t);
        this._renderer._tint = n.levels;
      }, x.default.prototype.noTint = function () {
        this._renderer._tint = null;
      }, x.default.prototype._getTintedImageCanvas = function (e) {
        if (!e.canvas) return e;

        var t = f.default._toPixels(e.canvas),
            r = document.createElement("canvas");

        r.width = e.canvas.width, r.height = e.canvas.height;

        for (var n = r.getContext("2d"), i = n.createImageData(e.canvas.width, e.canvas.height), a = i.data, o = 0; o < t.length; o += 4) {
          var s = t[o],
              l = t[o + 1],
              u = t[o + 2],
              h = t[o + 3];
          a[o] = s * this._renderer._tint[0] / 255, a[o + 1] = l * this._renderer._tint[1] / 255, a[o + 2] = u * this._renderer._tint[2] / 255, a[o + 3] = h * this._renderer._tint[3] / 255;
        }

        return n.putImageData(i, 0, 0), r;
      }, x.default.prototype.imageMode = function (e) {
        x.default._validateParameters("imageMode", arguments), e !== n.CORNER && e !== n.CORNERS && e !== n.CENTER || (this._renderer._imageMode = e);
      };
      var a = x.default;
      r.default = a;
    }, {
      "../core/constants": 37,
      "../core/error_helpers": 39,
      "../core/helpers": 40,
      "../core/main": 43,
      "./filters": 59,
      omggif: 28
    }],
    62: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i = a(e("../core/main")),
          n = a(e("./filters"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      i.default.Image = function (e, t) {
        this.width = e, this.height = t, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), (this._pixelsState = this)._pixelDensity = 1, this.gifProperties = null, this._modified = !1, this.pixels = [];
      }, i.default.Image.prototype._animateGif = function (e) {
        var t = this.gifProperties;

        if (t.playing) {
          t.timeDisplayed += e.deltaTime;
          var r = t.frames[t.displayIndex].delay;

          if (t.timeDisplayed >= r) {
            var n = Math.floor(t.timeDisplayed / r);
            if (t.timeDisplayed = 0, t.displayIndex += n, t.loopCount = Math.floor(t.displayIndex / t.numFrames), null !== t.loopLimit && t.loopCount >= t.loopLimit) t.playing = !1;else {
              var i = t.displayIndex % t.numFrames;
              this.drawingContext.putImageData(t.frames[i].image, 0, 0), t.displayIndex = i, this.setModified(!0);
            }
          }
        }
      }, i.default.Image.prototype._setProperty = function (e, t) {
        this[e] = t, this.setModified(!0);
      }, i.default.Image.prototype.loadPixels = function () {
        i.default.Renderer2D.prototype.loadPixels.call(this), this.setModified(!0);
      }, i.default.Image.prototype.updatePixels = function (e, t, r, n) {
        i.default.Renderer2D.prototype.updatePixels.call(this, e, t, r, n), this.setModified(!0);
      }, i.default.Image.prototype.get = function (e, t, r, n) {
        return i.default._validateParameters("p5.Image.get", arguments), i.default.Renderer2D.prototype.get.apply(this, arguments);
      }, i.default.Image.prototype._getPixel = i.default.Renderer2D.prototype._getPixel, i.default.Image.prototype.set = function (e, t, r) {
        i.default.Renderer2D.prototype.set.call(this, e, t, r), this.setModified(!0);
      }, i.default.Image.prototype.resize = function (e, t) {
        0 === e && 0 === t ? (e = this.canvas.width, t = this.canvas.height) : 0 === e ? e = this.canvas.width * t / this.canvas.height : 0 === t && (t = this.canvas.height * e / this.canvas.width), e = Math.floor(e), t = Math.floor(t);
        var r = document.createElement("canvas");
        if (r.width = e, r.height = t, this.gifProperties) for (var n = this.gifProperties, i = function i(e, t) {
          for (var r = 0, n = 0; n < t.height; n++) {
            for (var i = 0; i < t.width; i++) {
              var a = Math.floor(i * e.width / t.width),
                  o = 4 * (Math.floor(n * e.height / t.height) * e.width + a);
              t.data[r++] = e.data[o++], t.data[r++] = e.data[o++], t.data[r++] = e.data[o++], t.data[r++] = e.data[o++];
            }
          }
        }, a = 0; a < n.numFrames; a++) {
          var o = this.drawingContext.createImageData(e, t);
          i(n.frames[a].image, o), n.frames[a].image = o;
        }
        r.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, r.width, r.height), this.canvas.width = this.width = e, this.canvas.height = this.height = t, this.drawingContext.drawImage(r, 0, 0, e, t, 0, 0, e, t), 0 < this.pixels.length && this.loadPixels(), this.setModified(!0);
      }, i.default.Image.prototype.copy = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        i.default.prototype.copy.apply(this, t);
      }, i.default.Image.prototype.mask = function (e) {
        void 0 === e && (e = this);
        var t = this.drawingContext.globalCompositeOperation,
            r = 1;
        e instanceof i.default.Renderer && (r = e._pInst._pixelDensity);
        var n = [e, 0, 0, r * e.width, r * e.height, 0, 0, this.width, this.height];
        this.drawingContext.globalCompositeOperation = "destination-in", i.default.Image.prototype.copy.apply(this, n), this.drawingContext.globalCompositeOperation = t, this.setModified(!0);
      }, i.default.Image.prototype.filter = function (e, t) {
        n.default.apply(this.canvas, n.default[e], t), this.setModified(!0);
      }, i.default.Image.prototype.blend = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        i.default.prototype.blend.apply(this, t), this.setModified(!0);
      }, i.default.Image.prototype.setModified = function (e) {
        this._modified = e;
      }, i.default.Image.prototype.isModified = function () {
        return this._modified;
      }, i.default.Image.prototype.save = function (e, t) {
        this.gifProperties ? i.default.prototype.saveGif(this, e) : i.default.prototype.saveCanvas(this.canvas, e, t);
      }, i.default.Image.prototype.reset = function () {
        if (this.gifProperties) {
          var e = this.gifProperties;
          e.playing = !0, e.timeSinceStart = 0, e.timeDisplayed = 0, e.loopCount = 0, e.displayIndex = 0, this.drawingContext.putImageData(e.frames[0].image, 0, 0);
        }
      }, i.default.Image.prototype.getCurrentFrame = function () {
        if (this.gifProperties) {
          var e = this.gifProperties;
          return e.displayIndex % e.numFrames;
        }
      }, i.default.Image.prototype.setFrame = function (e) {
        if (this.gifProperties) {
          var t = this.gifProperties;
          e < t.numFrames && 0 <= e ? (t.timeDisplayed = 0, t.displayIndex = e, this.drawingContext.putImageData(t.frames[e].image, 0, 0)) : console.log("Cannot set GIF to a frame number that is higher than total number of frames or below zero.");
        }
      }, i.default.Image.prototype.numFrames = function () {
        if (this.gifProperties) return this.gifProperties.numFrames;
      }, i.default.Image.prototype.play = function () {
        this.gifProperties && (this.gifProperties.playing = !0);
      }, i.default.Image.prototype.pause = function () {
        this.gifProperties && (this.gifProperties.playing = !1);
      }, i.default.Image.prototype.delay = function (e, t) {
        if (this.gifProperties) {
          var r = this.gifProperties;
          if (t < r.numFrames && 0 <= t) r.frames[t].delay = e;else {
            var n = !0,
                i = !1,
                a = void 0;

            try {
              for (var o, s = r.frames[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                o.value.delay = e;
              }
            } catch (e) {
              i = !0, a = e;
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw a;
              }
            }
          }
        }
      };
      var o = i.default.Image;
      r.default = o;
    }, {
      "../core/main": 43,
      "./filters": 59
    }],
    63: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          s = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };

      function i() {
        if ("function" == typeof Math.hypot) return Math.hypot.apply(null, arguments);

        for (var e = arguments.length, t = [], r = 0, n = 0; n < e; n++) {
          var i = arguments[n];
          if ((i = +i) === 1 / 0 || i === -1 / 0) return 1 / 0;
          r < (i = Math.abs(i)) && (r = i), t[n] = i;
        }

        0 === r && (r = 1);

        for (var a = 0, o = 0, s = 0; s < e; s++) {
          var l = t[s] / r,
              u = l * l - o,
              h = a + u;
          o = h - a - u, a = h;
        }

        return Math.sqrt(a) * r;
      }

      s.default.prototype.abs = Math.abs, s.default.prototype.ceil = Math.ceil, s.default.prototype.constrain = function (e, t, r) {
        return s.default._validateParameters("constrain", arguments), Math.max(Math.min(e, r), t);
      }, s.default.prototype.dist = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return s.default._validateParameters("dist", t), 4 === t.length ? i(t[2] - t[0], t[3] - t[1]) : 6 === t.length ? i(t[3] - t[0], t[4] - t[1], t[5] - t[2]) : void 0;
      }, s.default.prototype.exp = Math.exp, s.default.prototype.floor = Math.floor, s.default.prototype.lerp = function (e, t, r) {
        return s.default._validateParameters("lerp", arguments), r * (t - e) + e;
      }, s.default.prototype.log = Math.log, s.default.prototype.mag = function (e, t) {
        return s.default._validateParameters("mag", arguments), i(e, t);
      }, s.default.prototype.map = function (e, t, r, n, i, a) {
        s.default._validateParameters("map", arguments);

        var o = (e - t) / (r - t) * (i - n) + n;
        return a ? n < i ? this.constrain(o, n, i) : this.constrain(o, i, n) : o;
      }, s.default.prototype.max = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return s.default._validateParameters("max", t), t[0] instanceof Array ? Math.max.apply(null, t[0]) : Math.max.apply(null, t);
      }, s.default.prototype.min = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return s.default._validateParameters("min", t), t[0] instanceof Array ? Math.min.apply(null, t[0]) : Math.min.apply(null, t);
      }, s.default.prototype.norm = function (e, t, r) {
        return s.default._validateParameters("norm", arguments), this.map(e, t, r, 0, 1);
      }, s.default.prototype.pow = Math.pow, s.default.prototype.round = function (e, t) {
        return t ? Number(Math.round(e + "e" + t) + "e-" + t) : Math.round(e);
      }, s.default.prototype.sq = function (e) {
        return e * e;
      }, s.default.prototype.sqrt = Math.sqrt, s.default.prototype.fract = function (e) {
        s.default._validateParameters("fract", arguments);

        var t = 0,
            r = Number(e);
        if (isNaN(r) || Math.abs(r) === 1 / 0) return r;
        if (r < 0 && (r = -r, t = 1), !String(r).includes(".") || String(r).includes("e")) return r < 1 ? Math.abs(t - r) : 0;
        var n = String(r);
        return n = Number("0" + n.slice(n.indexOf("."))), Math.abs(t - n);
      };
      var a = s.default;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    64: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };

      i.default.prototype.createVector = function (e, t, r) {
        return this instanceof i.default ? new i.default.Vector(this, arguments) : new i.default.Vector(e, t, r);
      };

      var a = i.default;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    65: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          l = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      l.default.Vector = function (e, t, r) {
        var n, i, a;
        a = e instanceof l.default ? (this.p5 = e, n = t[0] || 0, i = t[1] || 0, t[2] || 0) : (n = e || 0, i = t || 0, r || 0), this.x = n, this.y = i, this.z = a;
      }, l.default.Vector.prototype.toString = function () {
        return "p5.Vector Object : [".concat(this.x, ", ").concat(this.y, ", ").concat(this.z, "]");
      }, l.default.Vector.prototype.set = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x = e.x || 0, this.y = e.y || 0, this.z = e.z || 0) : e instanceof Array ? (this.x = e[0] || 0, this.y = e[1] || 0, this.z = e[2] || 0) : (this.x = e || 0, this.y = t || 0, this.z = r || 0), this;
      }, l.default.Vector.prototype.copy = function () {
        return this.p5 ? new l.default.Vector(this.p5, [this.x, this.y, this.z]) : new l.default.Vector(this.x, this.y, this.z);
      }, l.default.Vector.prototype.add = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x += e.x || 0, this.y += e.y || 0, this.z += e.z || 0) : e instanceof Array ? (this.x += e[0] || 0, this.y += e[1] || 0, this.z += e[2] || 0) : (this.x += e || 0, this.y += t || 0, this.z += r || 0), this;
      };

      function u(e, t) {
        return 0 !== e && (this.x = this.x % e), 0 !== t && (this.y = this.y % t), this;
      }

      function h(e, t, r) {
        return 0 !== e && (this.x = this.x % e), 0 !== t && (this.y = this.y % t), 0 !== r && (this.z = this.z % r), this;
      }

      l.default.Vector.prototype.rem = function (e, t, r) {
        if (e instanceof l.default.Vector) {
          if (Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z)) {
            var n = parseFloat(e.x),
                i = parseFloat(e.y),
                a = parseFloat(e.z);
            h.call(this, n, i, a);
          }
        } else if (e instanceof Array) e.every(function (e) {
          return Number.isFinite(e);
        }) && (2 === e.length && u.call(this, e[0], e[1]), 3 === e.length && h.call(this, e[0], e[1], e[2]));else if (1 === arguments.length) {
          if (Number.isFinite(e) && 0 !== e) return this.x = this.x % e, this.y = this.y % e, this.z = this.z % e, this;
        } else if (2 === arguments.length) {
          var o = Array.prototype.slice.call(arguments);
          o.every(function (e) {
            return Number.isFinite(e);
          }) && 2 === o.length && u.call(this, o[0], o[1]);
        } else if (3 === arguments.length) {
          var s = Array.prototype.slice.call(arguments);
          s.every(function (e) {
            return Number.isFinite(e);
          }) && 3 === s.length && h.call(this, s[0], s[1], s[2]);
        }
      }, l.default.Vector.prototype.sub = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x -= e.x || 0, this.y -= e.y || 0, this.z -= e.z || 0) : e instanceof Array ? (this.x -= e[0] || 0, this.y -= e[1] || 0, this.z -= e[2] || 0) : (this.x -= e || 0, this.y -= t || 0, this.z -= r || 0), this;
      }, l.default.Vector.prototype.mult = function (e, t, r) {
        if (e instanceof l.default.Vector) return Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z) && "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.z ? (this.x *= e.x, this.y *= e.y, this.z *= e.z) : console.warn("p5.Vector.prototype.mult:", "x contains components that are either undefined or not finite numbers"), this;
        if (e instanceof Array) return e.every(function (e) {
          return Number.isFinite(e);
        }) && e.every(function (e) {
          return "number" == typeof e;
        }) ? 1 === e.length ? (this.x *= e[0], this.y *= e[0], this.z *= e[0]) : 2 === e.length ? (this.x *= e[0], this.y *= e[1]) : 3 === e.length && (this.x *= e[0], this.y *= e[1], this.z *= e[2]) : console.warn("p5.Vector.prototype.mult:", "x contains elements that are either undefined or not finite numbers"), this;
        var n = Array.prototype.slice.call(arguments);
        return n.every(function (e) {
          return Number.isFinite(e);
        }) && n.every(function (e) {
          return "number" == typeof e;
        }) ? (1 === arguments.length && (this.x *= e, this.y *= e, this.z *= e), 2 === arguments.length && (this.x *= e, this.y *= t), 3 === arguments.length && (this.x *= e, this.y *= t, this.z *= r)) : console.warn("p5.Vector.prototype.mult:", "x, y, or z arguments are either undefined or not a finite number"), this;
      }, l.default.Vector.prototype.div = function (e, t, r) {
        if (e instanceof l.default.Vector) {
          if (Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z) && "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.z) {
            if (0 === e.x || 0 === e.y || 0 === e.z) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
            this.x /= e.x, this.y /= e.y, this.z /= e.z;
          } else console.warn("p5.Vector.prototype.div:", "x contains components that are either undefined or not finite numbers");

          return this;
        }

        if (e instanceof Array) {
          if (e.every(function (e) {
            return Number.isFinite(e);
          }) && e.every(function (e) {
            return "number" == typeof e;
          })) {
            if (e.some(function (e) {
              return 0 === e;
            })) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
            1 === e.length ? (this.x /= e[0], this.y /= e[0], this.z /= e[0]) : 2 === e.length ? (this.x /= e[0], this.y /= e[1]) : 3 === e.length && (this.x /= e[0], this.y /= e[1], this.z /= e[2]);
          } else console.warn("p5.Vector.prototype.div:", "x contains components that are either undefined or not finite numbers");

          return this;
        }

        var n = Array.prototype.slice.call(arguments);

        if (n.every(function (e) {
          return Number.isFinite(e);
        }) && n.every(function (e) {
          return "number" == typeof e;
        })) {
          if (n.some(function (e) {
            return 0 === e;
          })) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
          1 === arguments.length && (this.x /= e, this.y /= e, this.z /= e), 2 === arguments.length && (this.x /= e, this.y /= t), 3 === arguments.length && (this.x /= e, this.y /= t, this.z /= r);
        } else console.warn("p5.Vector.prototype.div:", "x, y, or z arguments are either undefined or not a finite number");

        return this;
      }, l.default.Vector.prototype.mag = function () {
        return Math.sqrt(this.magSq());
      }, l.default.Vector.prototype.magSq = function () {
        var e = this.x,
            t = this.y,
            r = this.z;
        return e * e + t * t + r * r;
      }, l.default.Vector.prototype.dot = function (e, t, r) {
        return e instanceof l.default.Vector ? this.dot(e.x, e.y, e.z) : this.x * (e || 0) + this.y * (t || 0) + this.z * (r || 0);
      }, l.default.Vector.prototype.cross = function (e) {
        var t = this.y * e.z - this.z * e.y,
            r = this.z * e.x - this.x * e.z,
            n = this.x * e.y - this.y * e.x;
        return this.p5 ? new l.default.Vector(this.p5, [t, r, n]) : new l.default.Vector(t, r, n);
      }, l.default.Vector.prototype.dist = function (e) {
        return e.copy().sub(this).mag();
      }, l.default.Vector.prototype.normalize = function () {
        var e = this.mag();
        return 0 !== e && this.mult(1 / e), this;
      }, l.default.Vector.prototype.limit = function (e) {
        var t = this.magSq();
        return e * e < t && this.div(Math.sqrt(t)).mult(e), this;
      }, l.default.Vector.prototype.setMag = function (e) {
        return this.normalize().mult(e);
      }, l.default.Vector.prototype.heading = function () {
        var e = Math.atan2(this.y, this.x);
        return this.p5 ? this.p5._fromRadians(e) : e;
      }, l.default.Vector.prototype.rotate = function (e) {
        var t = this.heading() + e;
        this.p5 && (t = this.p5._toRadians(t));
        var r = this.mag();
        return this.x = Math.cos(t) * r, this.y = Math.sin(t) * r, this;
      }, l.default.Vector.prototype.angleBetween = function (e) {
        var t,
            r = this.dot(e) / (this.mag() * e.mag());
        return t = Math.acos(Math.min(1, Math.max(-1, r))), t *= Math.sign(this.cross(e).z || 1), this.p5 && (t = this.p5._fromRadians(t)), t;
      }, l.default.Vector.prototype.lerp = function (e, t, r, n) {
        return e instanceof l.default.Vector ? this.lerp(e.x, e.y, e.z, t) : (this.x += (e - this.x) * n || 0, this.y += (t - this.y) * n || 0, this.z += (r - this.z) * n || 0, this);
      }, l.default.Vector.prototype.reflect = function (e) {
        return e.normalize(), this.sub(e.mult(2 * this.dot(e)));
      }, l.default.Vector.prototype.array = function () {
        return [this.x || 0, this.y || 0, this.z || 0];
      }, l.default.Vector.prototype.equals = function (e, t, r) {
        var n, i, a;
        return a = e instanceof l.default.Vector ? (n = e.x || 0, i = e.y || 0, e.z || 0) : e instanceof Array ? (n = e[0] || 0, i = e[1] || 0, e[2] || 0) : (n = e || 0, i = t || 0, r || 0), this.x === n && this.y === i && this.z === a;
      }, l.default.Vector.fromAngle = function (e, t) {
        return void 0 === t && (t = 1), new l.default.Vector(t * Math.cos(e), t * Math.sin(e), 0);
      }, l.default.Vector.fromAngles = function (e, t, r) {
        void 0 === r && (r = 1);
        var n = Math.cos(t),
            i = Math.sin(t),
            a = Math.cos(e),
            o = Math.sin(e);
        return new l.default.Vector(r * o * i, -r * a, r * o * n);
      }, l.default.Vector.random2D = function () {
        return this.fromAngle(Math.random() * a.TWO_PI);
      }, l.default.Vector.random3D = function () {
        var e = Math.random() * a.TWO_PI,
            t = 2 * Math.random() - 1,
            r = Math.sqrt(1 - t * t),
            n = r * Math.cos(e),
            i = r * Math.sin(e);
        return new l.default.Vector(n, i, t);
      }, l.default.Vector.add = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "")), r.add(t), r;
      }, l.default.Vector.rem = function (e, t) {
        if (e instanceof l.default.Vector && t instanceof l.default.Vector) {
          var r = e.copy();
          return r.rem(t), r;
        }
      }, l.default.Vector.sub = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "")), r.sub(t), r;
      }, l.default.Vector.mult = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "")), r.mult(t), r;
      }, l.default.Vector.div = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "")), r.div(t), r;
      }, l.default.Vector.dot = function (e, t) {
        return e.dot(t);
      }, l.default.Vector.cross = function (e, t) {
        return e.cross(t);
      }, l.default.Vector.dist = function (e, t) {
        return e.dist(t);
      }, l.default.Vector.lerp = function (e, t, r, n) {
        return n ? n.set(e) : (n = e.copy(), 4 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "")), n.lerp(t, r), n;
      }, l.default.Vector.mag = function (e) {
        var t = e.x,
            r = e.y,
            n = e.z,
            i = t * t + r * r + n * n;
        return Math.sqrt(i);
      };
      var i = l.default.Vector;
      r.default = i;
    }, {
      "../core/constants": 37,
      "../core/main": 43
    }],
    66: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      var a = "_lcg_random_state",
          o = 4294967296,
          s = 0;
      i.default.prototype._lcg = function (e) {
        return this[e] = (1664525 * this[e] + 1013904223) % o, this[e] / o;
      }, i.default.prototype._lcgSetSeed = function (e, t) {
        this[e] = (null == t ? Math.random() * o : t) >>> 0;
      }, i.default.prototype.randomSeed = function (e) {
        this._lcgSetSeed(a, e), this._gaussian_previous = !1;
      }, i.default.prototype.random = function (e, t) {
        var r;
        if (i.default._validateParameters("random", arguments), r = null != this[a] ? this._lcg(a) : Math.random(), void 0 === e) return r;
        if (void 0 === t) return e instanceof Array ? e[Math.floor(r * e.length)] : r * e;

        if (t < e) {
          var n = e;
          e = t, t = n;
        }

        return r * (t - e) + e;
      }, i.default.prototype.randomGaussian = function (e, t) {
        var r, n, i, a;
        if (this._gaussian_previous) r = s, this._gaussian_previous = !1;else {
          for (; 1 <= (a = (n = this.random(2) - 1) * n + (i = this.random(2) - 1) * i);) {
            ;
          }

          r = n * (a = Math.sqrt(-2 * Math.log(a) / a)), s = i * a, this._gaussian_previous = !0;
        }
        return r * (t || 1) + (e || 0);
      };
      var l = i.default;
      r.default = l;
    }, {
      "../core/main": 43
    }],
    67: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      i.default.prototype._angleMode = a.RADIANS, i.default.prototype.acos = function (e) {
        return this._fromRadians(Math.acos(e));
      }, i.default.prototype.asin = function (e) {
        return this._fromRadians(Math.asin(e));
      }, i.default.prototype.atan = function (e) {
        return this._fromRadians(Math.atan(e));
      }, i.default.prototype.atan2 = function (e, t) {
        return this._fromRadians(Math.atan2(e, t));
      }, i.default.prototype.cos = function (e) {
        return Math.cos(this._toRadians(e));
      }, i.default.prototype.sin = function (e) {
        return Math.sin(this._toRadians(e));
      }, i.default.prototype.tan = function (e) {
        return Math.tan(this._toRadians(e));
      }, i.default.prototype.degrees = function (e) {
        return e * a.RAD_TO_DEG;
      }, i.default.prototype.radians = function (e) {
        return e * a.DEG_TO_RAD;
      }, i.default.prototype.angleMode = function (e) {
        e !== a.DEGREES && e !== a.RADIANS || (this._angleMode = e);
      }, i.default.prototype._toRadians = function (e) {
        return this._angleMode === a.DEGREES ? e * a.DEG_TO_RAD : e;
      }, i.default.prototype._toDegrees = function (e) {
        return this._angleMode === a.RADIANS ? e * a.RAD_TO_DEG : e;
      }, i.default.prototype._fromRadians = function (e) {
        return this._angleMode === a.DEGREES ? e * a.RAD_TO_DEG : e;
      };
      var l = i.default;
      r.default = l;
    }, {
      "../core/constants": 37,
      "../core/main": 43
    }],
    68: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.prototype.textAlign = function (e, t) {
        var r;
        return i.default._validateParameters("textAlign", arguments), (r = this._renderer).textAlign.apply(r, arguments);
      }, i.default.prototype.textLeading = function (e) {
        var t;
        return i.default._validateParameters("textLeading", arguments), (t = this._renderer).textLeading.apply(t, arguments);
      }, i.default.prototype.textSize = function (e) {
        var t;
        return i.default._validateParameters("textSize", arguments), (t = this._renderer).textSize.apply(t, arguments);
      }, i.default.prototype.textStyle = function (e) {
        var t;
        return i.default._validateParameters("textStyle", arguments), (t = this._renderer).textStyle.apply(t, arguments);
      }, i.default.prototype.textWidth = function () {
        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return r[0] += "", i.default._validateParameters("textWidth", r), 0 === r[0].length ? 0 : (e = this._renderer).textWidth.apply(e, r);
      }, i.default.prototype.textAscent = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return i.default._validateParameters("textAscent", t), this._renderer.textAscent();
      }, i.default.prototype.textDescent = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        return i.default._validateParameters("textDescent", t), this._renderer.textDescent();
      }, i.default.prototype._updateTextMetrics = function () {
        return this._renderer._updateTextMetrics();
      };
      var a = i.default;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    69: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          c = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      },
          i = l(e("../core/constants")),
          a = l(e("opentype.js"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        return r.default = e, t && t.set(e, r), r;
      }

      e("../core/error_helpers"), c.default.prototype.loadFont = function (s, l, u) {
        c.default._validateParameters("loadFont", arguments);

        var h = new c.default.Font(this),
            f = this;
        return a.load(s, function (e, t) {
          if (e) return c.default._friendlyFileLoadError(4, s), void 0 !== u ? u(e) : void console.error(e, s);
          h.font = t, void 0 !== l && l(h), f._decrementPreload();
          var r,
              n,
              i = s.split("\\").pop().split("/").pop(),
              a = i.lastIndexOf("."),
              o = a < 1 ? null : i.substr(a + 1);
          ["ttf", "otf", "woff", "woff2"].includes(o) && (r = i.substr(0, a), (n = document.createElement("style")).appendChild(document.createTextNode("\n@font-face {\nfont-family: ".concat(r, ";\nsrc: url(").concat(s, ");\n}\n"))), document.head.appendChild(n));
        }), h;
      }, c.default.prototype.text = function (e, t, r, n, i) {
        var a;
        return c.default._validateParameters("text", arguments), this._renderer._doFill || this._renderer._doStroke ? (a = this._renderer).text.apply(a, arguments) : this;
      }, c.default.prototype.textFont = function (e, t) {
        if (c.default._validateParameters("textFont", arguments), arguments.length) {
          if (!e) throw new Error("null font passed to textFont");
          return this._renderer._setProperty("_textFont", e), t && (this._renderer._setProperty("_textSize", t), this._renderer._setProperty("_textLeading", t * i._DEFAULT_LEADMULT)), this._renderer._applyTextProperties();
        }

        return this._renderer._textFont;
      };
      var u = c.default;
      r.default = u;
    }, {
      "../core/constants": 37,
      "../core/error_helpers": 39,
      "../core/main": 43,
      "opentype.js": 29
    }],
    70: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.prototype.append = function (e, t) {
        return e.push(t), e;
      }, i.default.prototype.arrayCopy = function (e, t, r, n, i) {
        var a, o;
        e = void 0 !== i ? (o = Math.min(i, e.length), a = n, e.slice(t, o + t)) : (o = void 0 !== r ? (o = r, Math.min(o, e.length)) : e.length, a = 0, r = t, e.slice(0, o)), Array.prototype.splice.apply(r, [a, o].concat(e));
      }, i.default.prototype.concat = function (e, t) {
        return e.concat(t);
      }, i.default.prototype.reverse = function (e) {
        return e.reverse();
      }, i.default.prototype.shorten = function (e) {
        return e.pop(), e;
      }, i.default.prototype.shuffle = function (e, t) {
        for (var r, n, i = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e), a = (e = t || i ? e : e.slice()).length; 1 < a;) {
          r = Math.random() * a | 0, n = e[--a], e[a] = e[r], e[r] = n;
        }

        return e;
      }, i.default.prototype.sort = function (e, t) {
        var r = t ? e.slice(0, Math.min(t, e.length)) : e,
            n = t ? e.slice(Math.min(t, e.length)) : [];
        return (r = "string" == typeof r[0] ? r.sort() : r.sort(function (e, t) {
          return e - t;
        })).concat(n);
      }, i.default.prototype.splice = function (e, t, r) {
        return Array.prototype.splice.apply(e, [r, 0].concat(t)), e;
      }, i.default.prototype.subset = function (e, t, r) {
        return void 0 !== r ? e.slice(t, t + r) : e.slice(t, e.length);
      };
      var a = i.default;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    71: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          o = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };

      function i(e, t, r) {
        var n = e < 0,
            i = n ? e.toString().substring(1) : e.toString(),
            a = i.indexOf("."),
            o = -1 !== a ? i.substring(0, a) : i,
            s = -1 !== a ? i.substring(a + 1) : "",
            l = n ? "-" : "";

        if (void 0 !== r) {
          var u = "";
          (-1 !== a || 0 < r - s.length) && (u = "."), s.length > r && (s = s.substring(0, r));

          for (var h = 0; h < t - o.length; h++) {
            l += "0";
          }

          l += o, l += u, l += s;

          for (var f = 0; f < r - s.length; f++) {
            l += "0";
          }

          return l;
        }

        for (var c = 0; c < Math.max(t - o.length, 0); c++) {
          l += "0";
        }

        return l += i;
      }

      function a(e, t) {
        var r = (e = e.toString()).indexOf("."),
            n = -1 !== r ? e.substring(r) : "",
            i = -1 !== r ? e.substring(0, r) : e;
        if (i = i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === t) n = "";else if (void 0 !== t) if (t > n.length) for (var a = t - (n += -1 === r ? "." : "").length + 1, o = 0; o < a; o++) {
          n += "0";
        } else n = n.substring(0, t + 1);
        return i + n;
      }

      function s(e) {
        return 0 < parseFloat(e) ? "+".concat(e.toString()) : e.toString();
      }

      function l(e) {
        return 0 <= parseFloat(e) ? " ".concat(e.toString()) : e.toString();
      }

      e("../core/error_helpers"), o.default.prototype.join = function (e, t) {
        return o.default._validateParameters("join", arguments), e.join(t);
      }, o.default.prototype.match = function (e, t) {
        return o.default._validateParameters("match", arguments), e.match(t);
      }, o.default.prototype.matchAll = function (e, t) {
        o.default._validateParameters("matchAll", arguments);

        for (var r = new RegExp(t, "g"), n = r.exec(e), i = []; null !== n;) {
          i.push(n), n = r.exec(e);
        }

        return i;
      }, o.default.prototype.nf = function (e, t, r) {
        return o.default._validateParameters("nf", arguments), e instanceof Array ? e.map(function (e) {
          return i(e, t, r);
        }) : "[object Arguments]" === Object.prototype.toString.call(e) ? 3 === e.length ? this.nf(e[0], e[1], e[2]) : 2 === e.length ? this.nf(e[0], e[1]) : this.nf(e[0]) : i(e, t, r);
      }, o.default.prototype.nfc = function (e, t) {
        return o.default._validateParameters("nfc", arguments), e instanceof Array ? e.map(function (e) {
          return a(e, t);
        }) : a(e, t);
      }, o.default.prototype.nfp = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        o.default._validateParameters("nfp", t);

        var n = o.default.prototype.nf.apply(this, t);
        return n instanceof Array ? n.map(s) : s(n);
      }, o.default.prototype.nfs = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r];
        }

        o.default._validateParameters("nfs", t);

        var n = o.default.prototype.nf.apply(this, t);
        return n instanceof Array ? n.map(l) : l(n);
      }, o.default.prototype.split = function (e, t) {
        return o.default._validateParameters("split", arguments), e.split(t);
      }, o.default.prototype.splitTokens = function (e, t) {
        var r;

        if (o.default._validateParameters("splitTokens", arguments), void 0 !== t) {
          var n = t,
              i = /\]/g.exec(n),
              a = /\[/g.exec(n);
          r = a && i ? (n = n.slice(0, i.index) + n.slice(i.index + 1), a = /\[/g.exec(n), n = n.slice(0, a.index) + n.slice(a.index + 1), new RegExp("[\\[".concat(n, "\\]]"), "g")) : i ? (n = n.slice(0, i.index) + n.slice(i.index + 1), new RegExp("[".concat(n, "\\]]"), "g")) : a ? (n = n.slice(0, a.index) + n.slice(a.index + 1), new RegExp("[".concat(n, "\\[]"), "g")) : new RegExp("[".concat(n, "]"), "g");
        } else r = /\s/g;

        return e.split(r).filter(function (e) {
          return e;
        });
      }, o.default.prototype.trim = function (e) {
        return o.default._validateParameters("trim", arguments), e instanceof Array ? e.map(this.trim) : e.trim();
      };
      var u = o.default;
      r.default = u;
    }, {
      "../core/error_helpers": 39,
      "../core/main": 43
    }],
    72: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.prototype.day = function () {
        return new Date().getDate();
      }, i.default.prototype.hour = function () {
        return new Date().getHours();
      }, i.default.prototype.minute = function () {
        return new Date().getMinutes();
      }, i.default.prototype.millis = function () {
        return -1 === this._millisStart ? 0 : window.performance.now() - this._millisStart;
      }, i.default.prototype.month = function () {
        return new Date().getMonth() + 1;
      }, i.default.prototype.second = function () {
        return new Date().getSeconds();
      }, i.default.prototype.year = function () {
        return new Date().getFullYear();
      };
      var a = i.default;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    73: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          g = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      g.default.prototype.camera = function () {
        var e;

        this._assert3d("camera");

        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return g.default._validateParameters("camera", r), (e = this._renderer._curCamera).camera.apply(e, r), this;
      }, g.default.prototype.perspective = function () {
        var e;

        this._assert3d("perspective");

        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return g.default._validateParameters("perspective", r), (e = this._renderer._curCamera).perspective.apply(e, r), this;
      }, g.default.prototype.ortho = function () {
        var e;

        this._assert3d("ortho");

        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return g.default._validateParameters("ortho", r), (e = this._renderer._curCamera).ortho.apply(e, r), this;
      }, g.default.prototype.frustum = function () {
        var e;

        this._assert3d("frustum");

        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }

        return g.default._validateParameters("frustum", r), (e = this._renderer._curCamera).frustum.apply(e, r), this;
      }, g.default.prototype.createCamera = function () {
        this._assert3d("createCamera");

        var e = new g.default.Camera(this._renderer);
        return e._computeCameraDefaultSettings(), e._setDefaultCamera(), this._renderer._curCamera = e;
      }, g.default.Camera = function (e) {
        this._renderer = e, this.cameraType = "default", this.cameraMatrix = new g.default.Matrix(), this.projMatrix = new g.default.Matrix();
      }, g.default.Camera.prototype.perspective = function (e, t, r, n) {
        this.cameraType = 0 < arguments.length ? "custom" : "default", void 0 === e ? (e = this.defaultCameraFOV, this.cameraFOV = e) : this.cameraFOV = this._renderer._pInst._toRadians(e), void 0 === t && (t = this.defaultAspectRatio), void 0 === r && (r = this.defaultCameraNear), void 0 === n && (n = this.defaultCameraFar), r <= 1e-4 && (r = .01, console.log("Avoid perspective near plane values close to or below 0. Setting value to 0.01.")), n < r && console.log("Perspective far plane value is less than near plane value. Nothing will be shown."), this.aspectRatio = t, this.cameraNear = r, this.cameraFar = n, this.projMatrix = g.default.Matrix.identity();
        var i = 1 / Math.tan(this.cameraFOV / 2),
            a = 1 / (this.cameraNear - this.cameraFar);
        this.projMatrix.set(i / t, 0, 0, 0, 0, -i, 0, 0, 0, 0, (n + r) * a, -1, 0, 0, 2 * n * r * a, 0), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]);
      }, g.default.Camera.prototype.ortho = function (e, t, r, n, i, a) {
        void 0 === e && (e = -this._renderer.width / 2), void 0 === t && (t = this._renderer.width / 2), void 0 === r && (r = -this._renderer.height / 2), void 0 === n && (n = this._renderer.height / 2), void 0 === i && (i = 0), void 0 === a && (a = Math.max(this._renderer.width, this._renderer.height));
        var o = t - e,
            s = n - r,
            l = a - i,
            u = 2 / o,
            h = 2 / s,
            f = -2 / l,
            c = -(t + e) / o,
            p = -(n + r) / s,
            d = -(a + i) / l;
        this.projMatrix = g.default.Matrix.identity(), this.projMatrix.set(u, 0, 0, 0, 0, -h, 0, 0, 0, 0, f, 0, c, p, d, 1), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, g.default.Camera.prototype.frustum = function (e, t, r, n, i, a) {
        void 0 === e && (e = -this._renderer.width / 2), void 0 === t && (t = this._renderer.width / 2), void 0 === r && (r = -this._renderer.height / 2), void 0 === n && (n = this._renderer.height / 2), void 0 === i && (i = 0), void 0 === a && (a = Math.max(this._renderer.width, this._renderer.height));
        var o = t - e,
            s = n - r,
            l = a - i,
            u = 2 * i / o,
            h = 2 * i / s,
            f = -2 * a * i / l,
            c = (t + e) / o,
            p = (n + r) / s,
            d = -(a + i) / l;
        this.projMatrix = g.default.Matrix.identity(), this.projMatrix.set(u, 0, 0, 0, 0, h, 0, 0, c, p, d, -1, 0, 0, f, 0), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, g.default.Camera.prototype._rotateView = function (e, t, r, n) {
        var i = this.centerX,
            a = this.centerY,
            o = this.centerZ;
        i -= this.eyeX, a -= this.eyeY, o -= this.eyeZ;
        var s = g.default.Matrix.identity(this._renderer._pInst);
        s.rotate(this._renderer._pInst._toRadians(e), t, r, n);
        var l = [i * s.mat4[0] + a * s.mat4[4] + o * s.mat4[8], i * s.mat4[1] + a * s.mat4[5] + o * s.mat4[9], i * s.mat4[2] + a * s.mat4[6] + o * s.mat4[10]];
        l[0] += this.eyeX, l[1] += this.eyeY, l[2] += this.eyeZ, this.camera(this.eyeX, this.eyeY, this.eyeZ, l[0], l[1], l[2], this.upX, this.upY, this.upZ);
      }, g.default.Camera.prototype.pan = function (e) {
        var t = this._getLocalAxes();

        this._rotateView(e, t.y[0], t.y[1], t.y[2]);
      }, g.default.Camera.prototype.tilt = function (e) {
        var t = this._getLocalAxes();

        this._rotateView(e, t.x[0], t.x[1], t.x[2]);
      }, g.default.Camera.prototype.lookAt = function (e, t, r) {
        this.camera(this.eyeX, this.eyeY, this.eyeZ, e, t, r, this.upX, this.upY, this.upZ);
      }, g.default.Camera.prototype.camera = function (e, t, r, n, i, a, o, s, l) {
        void 0 === e && (e = this.defaultEyeX, t = this.defaultEyeY, r = this.defaultEyeZ, n = e, i = t, s = 1, l = o = a = 0), this.eyeX = e, this.eyeY = t, this.eyeZ = r, this.centerX = n, this.centerY = i, this.centerZ = a, this.upX = o, this.upY = s, this.upZ = l;

        var u = this._getLocalAxes();

        this.cameraMatrix.set(u.x[0], u.y[0], u.z[0], 0, u.x[1], u.y[1], u.z[1], 0, u.x[2], u.y[2], u.z[2], 0, 0, 0, 0, 1);
        var h = -e,
            f = -t,
            c = -r;
        return this.cameraMatrix.translate([h, f, c]), this._isActive() && this._renderer.uMVMatrix.set(this.cameraMatrix.mat4[0], this.cameraMatrix.mat4[1], this.cameraMatrix.mat4[2], this.cameraMatrix.mat4[3], this.cameraMatrix.mat4[4], this.cameraMatrix.mat4[5], this.cameraMatrix.mat4[6], this.cameraMatrix.mat4[7], this.cameraMatrix.mat4[8], this.cameraMatrix.mat4[9], this.cameraMatrix.mat4[10], this.cameraMatrix.mat4[11], this.cameraMatrix.mat4[12], this.cameraMatrix.mat4[13], this.cameraMatrix.mat4[14], this.cameraMatrix.mat4[15]), this;
      }, g.default.Camera.prototype.move = function (e, t, r) {
        var n = this._getLocalAxes(),
            i = [n.x[0] * e, n.x[1] * e, n.x[2] * e],
            a = [n.y[0] * t, n.y[1] * t, n.y[2] * t],
            o = [n.z[0] * r, n.z[1] * r, n.z[2] * r];

        this.camera(this.eyeX + i[0] + a[0] + o[0], this.eyeY + i[1] + a[1] + o[1], this.eyeZ + i[2] + a[2] + o[2], this.centerX + i[0] + a[0] + o[0], this.centerY + i[1] + a[1] + o[1], this.centerZ + i[2] + a[2] + o[2], 0, 1, 0);
      }, g.default.Camera.prototype.setPosition = function (e, t, r) {
        var n = e - this.eyeX,
            i = t - this.eyeY,
            a = r - this.eyeZ;
        this.camera(e, t, r, this.centerX + n, this.centerY + i, this.centerZ + a, 0, 1, 0);
      }, g.default.Camera.prototype._computeCameraDefaultSettings = function () {
        this.defaultCameraFOV = 60 / 180 * Math.PI, this.defaultAspectRatio = this._renderer.width / this._renderer.height, this.defaultEyeX = 0, this.defaultEyeY = 0, this.defaultEyeZ = this._renderer.height / 2 / Math.tan(this.defaultCameraFOV / 2), this.defaultCenterX = 0, this.defaultCenterY = 0, this.defaultCenterZ = 0, this.defaultCameraNear = .1 * this.defaultEyeZ, this.defaultCameraFar = 10 * this.defaultEyeZ;
      }, g.default.Camera.prototype._setDefaultCamera = function () {
        this.cameraFOV = this.defaultCameraFOV, this.aspectRatio = this.defaultAspectRatio, this.eyeX = this.defaultEyeX, this.eyeY = this.defaultEyeY, this.eyeZ = this.defaultEyeZ, this.centerX = this.defaultCenterX, this.centerY = this.defaultCenterY, this.centerZ = this.defaultCenterZ, this.upX = 0, this.upY = 1, this.upZ = 0, this.cameraNear = this.defaultCameraNear, this.cameraFar = this.defaultCameraFar, this.perspective(), this.camera(), this.cameraType = "default";
      }, g.default.Camera.prototype._resize = function () {
        "default" === this.cameraType ? (this._computeCameraDefaultSettings(), this._setDefaultCamera()) : this.perspective(this.cameraFOV, this._renderer.width / this._renderer.height);
      }, g.default.Camera.prototype.copy = function () {
        var e = new g.default.Camera(this._renderer);
        return e.cameraFOV = this.cameraFOV, e.aspectRatio = this.aspectRatio, e.eyeX = this.eyeX, e.eyeY = this.eyeY, e.eyeZ = this.eyeZ, e.centerX = this.centerX, e.centerY = this.centerY, e.centerZ = this.centerZ, e.cameraNear = this.cameraNear, e.cameraFar = this.cameraFar, e.cameraType = this.cameraType, e.cameraMatrix = this.cameraMatrix.copy(), e.projMatrix = this.projMatrix.copy(), e;
      }, g.default.Camera.prototype._getLocalAxes = function () {
        var e = this.eyeX - this.centerX,
            t = this.eyeY - this.centerY,
            r = this.eyeZ - this.centerZ,
            n = Math.sqrt(e * e + t * t + r * r);
        0 !== n && (e /= n, t /= n, r /= n);
        var i = this.upX,
            a = this.upY,
            o = this.upZ,
            s = a * r - o * t,
            l = -i * r + o * e,
            u = i * t - a * e;
        i = t * u - r * l, a = -e * u + r * s, o = e * l - t * s;
        var h = Math.sqrt(s * s + l * l + u * u);
        0 !== h && (s /= h, l /= h, u /= h);
        var f = Math.sqrt(i * i + a * a + o * o);
        return 0 !== f && (i /= f, a /= f, o /= f), {
          x: [s, l, u],
          y: [i, a, o],
          z: [e, t, r]
        };
      }, g.default.Camera.prototype._orbit = function (e, t, r) {
        var n = this.eyeX - this.centerX,
            i = this.eyeY - this.centerY,
            a = this.eyeZ - this.centerZ,
            o = Math.sqrt(n * n + i * i + a * a),
            s = Math.atan2(n, a),
            l = Math.acos(Math.max(-1, Math.min(1, i / o)));
        s += e, (o += r) < 0 && (o = .1), (l += t) > Math.PI ? l = Math.PI : l <= 0 && (l = .001);
        var u = Math.sin(l) * o * Math.sin(s),
            h = Math.cos(l) * o,
            f = Math.sin(l) * o * Math.cos(s);
        this.camera(u + this.centerX, h + this.centerY, f + this.centerZ, this.centerX, this.centerY, this.centerZ, 0, 1, 0);
      }, g.default.Camera.prototype._isActive = function () {
        return this === this._renderer._curCamera;
      }, g.default.prototype.setCamera = function (e) {
        this._renderer._curCamera = e, this._renderer.uPMatrix.set(e.projMatrix.mat4[0], e.projMatrix.mat4[1], e.projMatrix.mat4[2], e.projMatrix.mat4[3], e.projMatrix.mat4[4], e.projMatrix.mat4[5], e.projMatrix.mat4[6], e.projMatrix.mat4[7], e.projMatrix.mat4[8], e.projMatrix.mat4[9], e.projMatrix.mat4[10], e.projMatrix.mat4[11], e.projMatrix.mat4[12], e.projMatrix.mat4[13], e.projMatrix.mat4[14], e.projMatrix.mat4[15]);
      };
      var i = g.default.Camera;
      r.default = i;
    }, {
      "../core/main": 43
    }],
    74: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          R = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };

      var i = Array,
          O = function O(e) {
        return e instanceof Array;
      };

      "undefined" != typeof Float32Array && (i = Float32Array, O = function O(e) {
        return e instanceof Array || e instanceof Float32Array;
      }), R.default.Matrix = function () {
        for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) {
          e[t] = arguments[t];
        }

        return e.length && e[e.length - 1] instanceof R.default && (this.p5 = e[e.length - 1]), "mat3" === e[0] ? this.mat3 = Array.isArray(e[1]) ? e[1] : new i([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = Array.isArray(e[0]) ? e[0] : new i([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this;
      }, R.default.Matrix.prototype.set = function (e) {
        return e instanceof R.default.Matrix ? this.mat4 = e.mat4 : O(e) ? this.mat4 = e : 16 === arguments.length && (this.mat4[0] = e, this.mat4[1] = arguments[1], this.mat4[2] = arguments[2], this.mat4[3] = arguments[3], this.mat4[4] = arguments[4], this.mat4[5] = arguments[5], this.mat4[6] = arguments[6], this.mat4[7] = arguments[7], this.mat4[8] = arguments[8], this.mat4[9] = arguments[9], this.mat4[10] = arguments[10], this.mat4[11] = arguments[11], this.mat4[12] = arguments[12], this.mat4[13] = arguments[13], this.mat4[14] = arguments[14], this.mat4[15] = arguments[15]), this;
      }, R.default.Matrix.prototype.get = function () {
        return new R.default.Matrix(this.mat4, this.p5);
      }, R.default.Matrix.prototype.copy = function () {
        var e = new R.default.Matrix(this.p5);
        return e.mat4[0] = this.mat4[0], e.mat4[1] = this.mat4[1], e.mat4[2] = this.mat4[2], e.mat4[3] = this.mat4[3], e.mat4[4] = this.mat4[4], e.mat4[5] = this.mat4[5], e.mat4[6] = this.mat4[6], e.mat4[7] = this.mat4[7], e.mat4[8] = this.mat4[8], e.mat4[9] = this.mat4[9], e.mat4[10] = this.mat4[10], e.mat4[11] = this.mat4[11], e.mat4[12] = this.mat4[12], e.mat4[13] = this.mat4[13], e.mat4[14] = this.mat4[14], e.mat4[15] = this.mat4[15], e;
      }, R.default.Matrix.identity = function (e) {
        return new R.default.Matrix(e);
      }, R.default.Matrix.prototype.transpose = function (e) {
        var t, r, n, i, a, o;
        return e instanceof R.default.Matrix ? (t = e.mat4[1], r = e.mat4[2], n = e.mat4[3], i = e.mat4[6], a = e.mat4[7], o = e.mat4[11], this.mat4[0] = e.mat4[0], this.mat4[1] = e.mat4[4], this.mat4[2] = e.mat4[8], this.mat4[3] = e.mat4[12], this.mat4[4] = t, this.mat4[5] = e.mat4[5], this.mat4[6] = e.mat4[9], this.mat4[7] = e.mat4[13], this.mat4[8] = r, this.mat4[9] = i, this.mat4[10] = e.mat4[10], this.mat4[11] = e.mat4[14], this.mat4[12] = n, this.mat4[13] = a, this.mat4[14] = o, this.mat4[15] = e.mat4[15]) : O(e) && (t = e[1], r = e[2], n = e[3], i = e[6], a = e[7], o = e[11], this.mat4[0] = e[0], this.mat4[1] = e[4], this.mat4[2] = e[8], this.mat4[3] = e[12], this.mat4[4] = t, this.mat4[5] = e[5], this.mat4[6] = e[9], this.mat4[7] = e[13], this.mat4[8] = r, this.mat4[9] = i, this.mat4[10] = e[10], this.mat4[11] = e[14], this.mat4[12] = n, this.mat4[13] = a, this.mat4[14] = o, this.mat4[15] = e[15]), this;
      }, R.default.Matrix.prototype.invert = function (e) {
        var t, r, n, i, a, o, s, l, u, h, f, c, p, d, g, m;
        e instanceof R.default.Matrix ? (t = e.mat4[0], r = e.mat4[1], n = e.mat4[2], i = e.mat4[3], a = e.mat4[4], o = e.mat4[5], s = e.mat4[6], l = e.mat4[7], u = e.mat4[8], h = e.mat4[9], f = e.mat4[10], c = e.mat4[11], p = e.mat4[12], d = e.mat4[13], g = e.mat4[14], m = e.mat4[15]) : O(e) && (t = e[0], r = e[1], n = e[2], i = e[3], a = e[4], o = e[5], s = e[6], l = e[7], u = e[8], h = e[9], f = e[10], c = e[11], p = e[12], d = e[13], g = e[14], m = e[15]);

        var v = t * o - r * a,
            y = t * s - n * a,
            b = t * l - i * a,
            _ = r * s - n * o,
            x = r * l - i * o,
            S = n * l - i * s,
            w = u * d - h * p,
            T = u * g - f * p,
            E = u * m - c * p,
            C = h * g - f * d,
            L = h * m - c * d,
            M = f * m - c * g,
            P = v * M - y * L + b * C + _ * E - x * T + S * w;

        return P ? (P = 1 / P, this.mat4[0] = (o * M - s * L + l * C) * P, this.mat4[1] = (n * L - r * M - i * C) * P, this.mat4[2] = (d * S - g * x + m * _) * P, this.mat4[3] = (f * x - h * S - c * _) * P, this.mat4[4] = (s * E - a * M - l * T) * P, this.mat4[5] = (t * M - n * E + i * T) * P, this.mat4[6] = (g * b - p * S - m * y) * P, this.mat4[7] = (u * S - f * b + c * y) * P, this.mat4[8] = (a * L - o * E + l * w) * P, this.mat4[9] = (r * E - t * L - i * w) * P, this.mat4[10] = (p * x - d * b + m * v) * P, this.mat4[11] = (h * b - u * x - c * v) * P, this.mat4[12] = (o * T - a * C - s * w) * P, this.mat4[13] = (t * C - r * T + n * w) * P, this.mat4[14] = (d * y - p * _ - g * v) * P, this.mat4[15] = (u * _ - h * y + f * v) * P, this) : null;
      }, R.default.Matrix.prototype.invert3x3 = function () {
        var e = this.mat3[0],
            t = this.mat3[1],
            r = this.mat3[2],
            n = this.mat3[3],
            i = this.mat3[4],
            a = this.mat3[5],
            o = this.mat3[6],
            s = this.mat3[7],
            l = this.mat3[8],
            u = l * i - a * s,
            h = -l * n + a * o,
            f = s * n - i * o,
            c = e * u + t * h + r * f;
        return c ? (c = 1 / c, this.mat3[0] = u * c, this.mat3[1] = (-l * t + r * s) * c, this.mat3[2] = (a * t - r * i) * c, this.mat3[3] = h * c, this.mat3[4] = (l * e - r * o) * c, this.mat3[5] = (-a * e + r * n) * c, this.mat3[6] = f * c, this.mat3[7] = (-s * e + t * o) * c, this.mat3[8] = (i * e - t * n) * c, this) : null;
      }, R.default.Matrix.prototype.transpose3x3 = function (e) {
        var t = e[1],
            r = e[2],
            n = e[5];
        return this.mat3[1] = e[3], this.mat3[2] = e[6], this.mat3[3] = t, this.mat3[5] = e[7], this.mat3[6] = r, this.mat3[7] = n, this;
      }, R.default.Matrix.prototype.inverseTranspose = function (e) {
        void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = e.mat4[0], this.mat3[1] = e.mat4[1], this.mat3[2] = e.mat4[2], this.mat3[3] = e.mat4[4], this.mat3[4] = e.mat4[5], this.mat3[5] = e.mat4[6], this.mat3[6] = e.mat4[8], this.mat3[7] = e.mat4[9], this.mat3[8] = e.mat4[10]);
        var t = this.invert3x3();
        if (t) t.transpose3x3(this.mat3);else for (var r = 0; r < 9; r++) {
          this.mat3[r] = 0;
        }
        return this;
      }, R.default.Matrix.prototype.determinant = function () {
        var e = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
            t = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
            r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
            n = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
            i = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
            a = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
            o = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
            s = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
            l = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
            u = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
            h = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13];
        return e * (this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14]) - t * h + r * u + n * l - i * s + a * o;
      }, R.default.Matrix.prototype.mult = function (e) {
        var t;
        if (e === this || e === this.mat4) t = this.copy().mat4;else if (e instanceof R.default.Matrix) t = e.mat4;else if (O(e)) t = e;else {
          if (16 !== arguments.length) return;
          t = arguments;
        }
        var r = this.mat4[0],
            n = this.mat4[1],
            i = this.mat4[2],
            a = this.mat4[3];
        return this.mat4[0] = r * t[0] + n * t[4] + i * t[8] + a * t[12], this.mat4[1] = r * t[1] + n * t[5] + i * t[9] + a * t[13], this.mat4[2] = r * t[2] + n * t[6] + i * t[10] + a * t[14], this.mat4[3] = r * t[3] + n * t[7] + i * t[11] + a * t[15], r = this.mat4[4], n = this.mat4[5], i = this.mat4[6], a = this.mat4[7], this.mat4[4] = r * t[0] + n * t[4] + i * t[8] + a * t[12], this.mat4[5] = r * t[1] + n * t[5] + i * t[9] + a * t[13], this.mat4[6] = r * t[2] + n * t[6] + i * t[10] + a * t[14], this.mat4[7] = r * t[3] + n * t[7] + i * t[11] + a * t[15], r = this.mat4[8], n = this.mat4[9], i = this.mat4[10], a = this.mat4[11], this.mat4[8] = r * t[0] + n * t[4] + i * t[8] + a * t[12], this.mat4[9] = r * t[1] + n * t[5] + i * t[9] + a * t[13], this.mat4[10] = r * t[2] + n * t[6] + i * t[10] + a * t[14], this.mat4[11] = r * t[3] + n * t[7] + i * t[11] + a * t[15], r = this.mat4[12], n = this.mat4[13], i = this.mat4[14], a = this.mat4[15], this.mat4[12] = r * t[0] + n * t[4] + i * t[8] + a * t[12], this.mat4[13] = r * t[1] + n * t[5] + i * t[9] + a * t[13], this.mat4[14] = r * t[2] + n * t[6] + i * t[10] + a * t[14], this.mat4[15] = r * t[3] + n * t[7] + i * t[11] + a * t[15], this;
      }, R.default.Matrix.prototype.apply = function (e) {
        var t;
        if (e === this || e === this.mat4) t = this.copy().mat4;else if (e instanceof R.default.Matrix) t = e.mat4;else if (O(e)) t = e;else {
          if (16 !== arguments.length) return;
          t = arguments;
        }
        var r = this.mat4,
            n = r[0],
            i = r[4],
            a = r[8],
            o = r[12];
        r[0] = t[0] * n + t[1] * i + t[2] * a + t[3] * o, r[4] = t[4] * n + t[5] * i + t[6] * a + t[7] * o, r[8] = t[8] * n + t[9] * i + t[10] * a + t[11] * o, r[12] = t[12] * n + t[13] * i + t[14] * a + t[15] * o;
        var s = r[1],
            l = r[5],
            u = r[9],
            h = r[13];
        r[1] = t[0] * s + t[1] * l + t[2] * u + t[3] * h, r[5] = t[4] * s + t[5] * l + t[6] * u + t[7] * h, r[9] = t[8] * s + t[9] * l + t[10] * u + t[11] * h, r[13] = t[12] * s + t[13] * l + t[14] * u + t[15] * h;
        var f = r[2],
            c = r[6],
            p = r[10],
            d = r[14];
        r[2] = t[0] * f + t[1] * c + t[2] * p + t[3] * d, r[6] = t[4] * f + t[5] * c + t[6] * p + t[7] * d, r[10] = t[8] * f + t[9] * c + t[10] * p + t[11] * d, r[14] = t[12] * f + t[13] * c + t[14] * p + t[15] * d;
        var g = r[3],
            m = r[7],
            v = r[11],
            y = r[15];
        return r[3] = t[0] * g + t[1] * m + t[2] * v + t[3] * y, r[7] = t[4] * g + t[5] * m + t[6] * v + t[7] * y, r[11] = t[8] * g + t[9] * m + t[10] * v + t[11] * y, r[15] = t[12] * g + t[13] * m + t[14] * v + t[15] * y, this;
      }, R.default.Matrix.prototype.scale = function (e, t, r) {
        return e instanceof R.default.Vector ? (t = e.y, r = e.z, e = e.x) : e instanceof Array && (t = e[1], r = e[2], e = e[0]), this.mat4[0] *= e, this.mat4[1] *= e, this.mat4[2] *= e, this.mat4[3] *= e, this.mat4[4] *= t, this.mat4[5] *= t, this.mat4[6] *= t, this.mat4[7] *= t, this.mat4[8] *= r, this.mat4[9] *= r, this.mat4[10] *= r, this.mat4[11] *= r, this;
      }, R.default.Matrix.prototype.rotate = function (e, t, r, n) {
        t instanceof R.default.Vector ? (r = t.y, n = t.z, t = t.x) : t instanceof Array && (r = t[1], n = t[2], t = t[0]);
        var i = Math.sqrt(t * t + r * r + n * n);
        t *= 1 / i, r *= 1 / i, n *= 1 / i;

        var a = this.mat4[0],
            o = this.mat4[1],
            s = this.mat4[2],
            l = this.mat4[3],
            u = this.mat4[4],
            h = this.mat4[5],
            f = this.mat4[6],
            c = this.mat4[7],
            p = this.mat4[8],
            d = this.mat4[9],
            g = this.mat4[10],
            m = this.mat4[11],
            v = Math.sin(e),
            y = Math.cos(e),
            b = 1 - y,
            _ = t * t * b + y,
            x = r * t * b + n * v,
            S = n * t * b - r * v,
            w = t * r * b - n * v,
            T = r * r * b + y,
            E = n * r * b + t * v,
            C = t * n * b + r * v,
            L = r * n * b - t * v,
            M = n * n * b + y;

        return this.mat4[0] = a * _ + u * x + p * S, this.mat4[1] = o * _ + h * x + d * S, this.mat4[2] = s * _ + f * x + g * S, this.mat4[3] = l * _ + c * x + m * S, this.mat4[4] = a * w + u * T + p * E, this.mat4[5] = o * w + h * T + d * E, this.mat4[6] = s * w + f * T + g * E, this.mat4[7] = l * w + c * T + m * E, this.mat4[8] = a * C + u * L + p * M, this.mat4[9] = o * C + h * L + d * M, this.mat4[10] = s * C + f * L + g * M, this.mat4[11] = l * C + c * L + m * M, this;
      }, R.default.Matrix.prototype.translate = function (e) {
        var t = e[0],
            r = e[1],
            n = e[2] || 0;
        this.mat4[12] += this.mat4[0] * t + this.mat4[4] * r + this.mat4[8] * n, this.mat4[13] += this.mat4[1] * t + this.mat4[5] * r + this.mat4[9] * n, this.mat4[14] += this.mat4[2] * t + this.mat4[6] * r + this.mat4[10] * n, this.mat4[15] += this.mat4[3] * t + this.mat4[7] * r + this.mat4[11] * n;
      }, R.default.Matrix.prototype.rotateX = function (e) {
        this.rotate(e, 1, 0, 0);
      }, R.default.Matrix.prototype.rotateY = function (e) {
        this.rotate(e, 0, 1, 0);
      }, R.default.Matrix.prototype.rotateZ = function (e) {
        this.rotate(e, 0, 0, 1);
      }, R.default.Matrix.prototype.perspective = function (e, t, r, n) {
        var i = 1 / Math.tan(e / 2),
            a = 1 / (r - n);
        return this.mat4[0] = i / t, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = i, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (n + r) * a, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * n * r * a, this.mat4[15] = 0, this;
      }, R.default.Matrix.prototype.ortho = function (e, t, r, n, i, a) {
        var o = 1 / (e - t),
            s = 1 / (r - n),
            l = 1 / (i - a);
        return this.mat4[0] = -2 * o, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * s, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * l, this.mat4[11] = 0, this.mat4[12] = (e + t) * o, this.mat4[13] = (n + r) * s, this.mat4[14] = (a + i) * l, this.mat4[15] = 1, this;
      };
      var a = R.default.Matrix;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    75: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var u = i(e("../core/main")),
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
          }
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          n = i(e("libtess"));

      e("./p5.Shader"), e("./p5.Camera"), e("../core/p5.Renderer"), e("./p5.Matrix");
      e("path");

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function s() {
          return e;
        }, e;
      }

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function l(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) {
              r[t] = e[t];
            }

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      var h = "precision highp float;\nprecision highp int;\n\nuniform mat4 uViewMatrix;\n\nuniform bool uUseLighting;\n\nuniform int uAmbientLightCount;\nuniform vec3 uAmbientColor[5];\n\nuniform int uDirectionalLightCount;\nuniform vec3 uLightingDirection[5];\nuniform vec3 uDirectionalDiffuseColors[5];\nuniform vec3 uDirectionalSpecularColors[5];\n\nuniform int uPointLightCount;\nuniform vec3 uPointLightLocation[5];\nuniform vec3 uPointLightDiffuseColors[5];\t\nuniform vec3 uPointLightSpecularColors[5];\n\nuniform int uSpotLightCount;\nuniform float uSpotLightAngle[5];\nuniform float uSpotLightConc[5];\nuniform vec3 uSpotLightDiffuseColors[5];\nuniform vec3 uSpotLightSpecularColors[5];\nuniform vec3 uSpotLightLocation[5];\nuniform vec3 uSpotLightDirection[5];\n\nuniform bool uSpecular;\nuniform float uShininess;\n\nuniform float uConstantAttenuation;\nuniform float uLinearAttenuation;\nuniform float uQuadraticAttenuation;\n\nconst float specularFactor = 2.0;\nconst float diffuseFactor = 0.73;\n\nstruct LightResult {\n  float specular;\n  float diffuse;\n};\n\nfloat _phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  vec3 R = reflect(lightDirection, surfaceNormal);\n  return pow(max(0.0, dot(R, viewDirection)), shininess);\n}\n\nfloat _lambertDiffuse(vec3 lightDirection, vec3 surfaceNormal) {\n  return max(0.0, dot(-lightDirection, surfaceNormal));\n}\n\nLightResult _light(vec3 viewDirection, vec3 normal, vec3 lightVector) {\n\n  vec3 lightDir = normalize(lightVector);\n\n  //compute our diffuse & specular terms\n  LightResult lr;\n  if (uSpecular)\n    lr.specular = _phongSpecular(lightDir, viewDirection, normal, uShininess);\n  lr.diffuse = _lambertDiffuse(lightDir, normal);\n  return lr;\n}\n\nvoid totalLight(\n  vec3 modelPosition,\n  vec3 normal,\n  out vec3 totalDiffuse,\n  out vec3 totalSpecular\n) {\n\n  totalSpecular = vec3(0.0);\n\n  if (!uUseLighting) {\n    totalDiffuse = vec3(1.0);\n    return;\n  }\n\n  totalDiffuse = vec3(0.0);\n\n  vec3 viewDirection = normalize(-modelPosition);\n\n  for (int j = 0; j < 5; j++) {\n    if (j < uDirectionalLightCount) {\n      vec3 lightVector = (uViewMatrix * vec4(uLightingDirection[j], 0.0)).xyz;\n      vec3 lightColor = uDirectionalDiffuseColors[j];\n      vec3 specularColor = uDirectionalSpecularColors[j];\n      LightResult result = _light(viewDirection, normal, lightVector);\n      totalDiffuse += result.diffuse * lightColor;\n      totalSpecular += result.specular * lightColor * specularColor;\n    }\n\n    if (j < uPointLightCount) {\n      vec3 lightPosition = (uViewMatrix * vec4(uPointLightLocation[j], 1.0)).xyz;\n      vec3 lightVector = modelPosition - lightPosition;\n    \n      //calculate attenuation\n      float lightDistance = length(lightVector);\n      float lightFalloff = 1.0 / (uConstantAttenuation + lightDistance * uLinearAttenuation + (lightDistance * lightDistance) * uQuadraticAttenuation);\n      vec3 lightColor = lightFalloff * uPointLightDiffuseColors[j];\n      vec3 specularColor = lightFalloff * uPointLightSpecularColors[j];\n\n      LightResult result = _light(viewDirection, normal, lightVector);\n      totalDiffuse += result.diffuse * lightColor;\n      totalSpecular += result.specular * lightColor * specularColor;\n    }\n\n    if(j < uSpotLightCount) {\n      vec3 lightPosition = (uViewMatrix * vec4(uSpotLightLocation[j], 1.0)).xyz;\n      vec3 lightVector = modelPosition - lightPosition;\n    \n      float lightDistance = length(lightVector);\n      float lightFalloff = 1.0 / (uConstantAttenuation + lightDistance * uLinearAttenuation + (lightDistance * lightDistance) * uQuadraticAttenuation);\n\n      vec3 lightDirection = (uViewMatrix * vec4(uSpotLightDirection[j], 0.0)).xyz;\n      float spotDot = dot(normalize(lightVector), normalize(lightDirection));\n      float spotFalloff;\n      if(spotDot < uSpotLightAngle[j]) {\n        spotFalloff = 0.0;\n      }\n      else {\n        spotFalloff = pow(spotDot, uSpotLightConc[j]);\n      }\n      lightFalloff *= spotFalloff;\n\n      vec3 lightColor = uSpotLightDiffuseColors[j];\n      vec3 specularColor = uSpotLightSpecularColors[j];\n     \n      LightResult result = _light(viewDirection, normal, lightVector);\n      \n      totalDiffuse += result.diffuse * lightColor * lightFalloff;\n      totalSpecular += result.specular * lightColor * specularColor * lightFalloff;\n    }\n  }\n\n  totalDiffuse *= diffuseFactor;\n  totalSpecular *= specularFactor;\n}\n",
          f = {
        immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
        vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
        vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
        normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertTexCoord = aTexCoord;\n}\n",
        normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
        basicFrag: "precision mediump float;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
        lightVert: h + "// include lighting.glgl\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying highp vec2 vVertTexCoord;\nvarying vec3 vDiffuseColor;\nvarying vec3 vSpecularColor;\n\nvoid main(void) {\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * viewModelPosition;\n\n  vec3 vertexNormal = normalize(uNormalMatrix * aNormal);\n  vVertTexCoord = aTexCoord;\n\n  totalLight(viewModelPosition.xyz, vertexNormal, vDiffuseColor, vSpecularColor);\n\n  for (int i = 0; i < 8; i++) {\n    if (i < uAmbientLightCount) {\n      vDiffuseColor += uAmbientColor[i];\n    }\n  }\n}\n",
        lightTextureFrag: "precision highp float;\n\nuniform vec4 uMaterialColor;\nuniform vec4 uTint;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uEmissive;\n\nvarying highp vec2 vVertTexCoord;\nvarying vec3 vDiffuseColor;\nvarying vec3 vSpecularColor;\n\nvoid main(void) {\n  if(uEmissive && !isTexture) {\n    gl_FragColor = uMaterialColor;\n  }\n  else {\n    gl_FragColor = isTexture ? texture2D(uSampler, vVertTexCoord) * (uTint / vec4(255, 255, 255, 255)) : uMaterialColor;\n    gl_FragColor.rgb = gl_FragColor.rgb * vDiffuseColor + vSpecularColor;\n  }\n}",
        phongVert: "precision highp float;\nprecision highp int;\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform vec3 uAmbientColor[5];\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void) {\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  // Pass varyings to fragment shader\n  vViewPosition = viewModelPosition.xyz;\n  gl_Position = uProjectionMatrix * viewModelPosition;  \n\n  vNormal = uNormalMatrix * aNormal;\n  vTexCoord = aTexCoord;\n\n  // TODO: this should be a uniform\n  vAmbientColor = vec3(0.0);\n  for (int i = 0; i < 5; i++) {\n    if (i < uAmbientLightCount) {\n      vAmbientColor += uAmbientColor[i];\n    }\n  }\n}\n",
        phongFrag: h + "// include lighting.glsl\nprecision highp float;\nprecision highp int;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uEmissive;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void) {\n\n  vec3 diffuse;\n  vec3 specular;\n  totalLight(vViewPosition, normalize(vNormal), diffuse, specular);\n\n  if(uEmissive && !isTexture) {\n    gl_FragColor = uMaterialColor;\n  }\n  else {\n    gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) : uMaterialColor;\n    gl_FragColor.rgb = gl_FragColor.rgb * (diffuse + vAmbientColor) + specular;\n  }\n}",
        fontVert: "precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec4 uGlyphRect;\nuniform float uGlyphOffset;\n\nvarying vec2 vTexCoord;\nvarying float w;\n\nvoid main() {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n\n  // scale by the size of the glyph's rectangle\n  positionVec4.xy *= uGlyphRect.zw - uGlyphRect.xy;\n\n  // move to the corner of the glyph\n  positionVec4.xy += uGlyphRect.xy;\n\n  // move to the letter's line offset\n  positionVec4.x += uGlyphOffset;\n  \n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vTexCoord = aTexCoord;\n  w = gl_Position.w;\n}\n",
        fontFrag: "#extension GL_OES_standard_derivatives : enable\nprecision mediump float;\n\n#if 0\n  // simulate integer math using floats\n\t#define int float\n\t#define ivec2 vec2\n\t#define INT(x) float(x)\n\n\tint ifloor(float v) { return floor(v); }\n\tivec2 ifloor(vec2 v) { return floor(v); }\n\n#else\n  // use native integer math\n\tprecision highp int;\n\t#define INT(x) x\n\n\tint ifloor(float v) { return int(v); }\n\tint ifloor(int v) { return v; }\n\tivec2 ifloor(vec2 v) { return ivec2(v); }\n\n#endif\n\nuniform sampler2D uSamplerStrokes;\nuniform sampler2D uSamplerRowStrokes;\nuniform sampler2D uSamplerRows;\nuniform sampler2D uSamplerColStrokes;\nuniform sampler2D uSamplerCols;\n\nuniform ivec2 uStrokeImageSize;\nuniform ivec2 uCellsImageSize;\nuniform ivec2 uGridImageSize;\n\nuniform ivec2 uGridOffset;\nuniform ivec2 uGridSize;\nuniform vec4 uMaterialColor;\n\nvarying vec2 vTexCoord;\n\n// some helper functions\nint round(float v) { return ifloor(v + 0.5); }\nivec2 round(vec2 v) { return ifloor(v + 0.5); }\nfloat saturate(float v) { return clamp(v, 0.0, 1.0); }\nvec2 saturate(vec2 v) { return clamp(v, 0.0, 1.0); }\n\nint mul(float v1, int v2) {\n  return ifloor(v1 * float(v2));\n}\n\nivec2 mul(vec2 v1, ivec2 v2) {\n  return ifloor(v1 * vec2(v2) + 0.5);\n}\n\n// unpack a 16-bit integer from a float vec2\nint getInt16(vec2 v) {\n  ivec2 iv = round(v * 255.0);\n  return iv.x * INT(128) + iv.y;\n}\n\nvec2 pixelScale;\nvec2 coverage = vec2(0.0);\nvec2 weight = vec2(0.5);\nconst float minDistance = 1.0/8192.0;\nconst float hardness = 1.05; // amount of antialias\n\n// the maximum number of curves in a glyph\nconst int N = INT(250);\n\n// retrieves an indexed pixel from a sampler\nvec4 getTexel(sampler2D sampler, int pos, ivec2 size) {\n  int width = size.x;\n  int y = ifloor(pos / width);\n  int x = pos - y * width;  // pos % width\n\n  return texture2D(sampler, (vec2(x, y) + 0.5) / vec2(size));\n}\n\nvoid calulateCrossings(vec2 p0, vec2 p1, vec2 p2, out vec2 C1, out vec2 C2) {\n\n  // get the coefficients of the quadratic in t\n  vec2 a = p0 - p1 * 2.0 + p2;\n  vec2 b = p0 - p1;\n  vec2 c = p0 - vTexCoord;\n\n  // found out which values of 't' it crosses the axes\n  vec2 surd = sqrt(max(vec2(0.0), b * b - a * c));\n  vec2 t1 = ((b - surd) / a).yx;\n  vec2 t2 = ((b + surd) / a).yx;\n\n  // approximate straight lines to avoid rounding errors\n  if (abs(a.y) < 0.001)\n    t1.x = t2.x = c.y / (2.0 * b.y);\n\n  if (abs(a.x) < 0.001)\n    t1.y = t2.y = c.x / (2.0 * b.x);\n\n  // plug into quadratic formula to find the corrdinates of the crossings\n  C1 = ((a * t1 - b * 2.0) * t1 + c) * pixelScale;\n  C2 = ((a * t2 - b * 2.0) * t2 + c) * pixelScale;\n}\n\nvoid coverageX(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  // determine on which side of the x-axis the points lie\n  bool y0 = p0.y > vTexCoord.y;\n  bool y1 = p1.y > vTexCoord.y;\n  bool y2 = p2.y > vTexCoord.y;\n\n  // could web be under the curve (after t1)?\n  if (y1 ? !y2 : y0) {\n    // add the coverage for t1\n    coverage.x += saturate(C1.x + 0.5);\n    // calculate the anti-aliasing for t1\n    weight.x = min(weight.x, abs(C1.x));\n  }\n\n  // are we outside the curve (after t2)?\n  if (y1 ? !y0 : y2) {\n    // subtract the coverage for t2\n    coverage.x -= saturate(C2.x + 0.5);\n    // calculate the anti-aliasing for t2\n    weight.x = min(weight.x, abs(C2.x));\n  }\n}\n\n// this is essentially the same as coverageX, but with the axes swapped\nvoid coverageY(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  bool x0 = p0.x > vTexCoord.x;\n  bool x1 = p1.x > vTexCoord.x;\n  bool x2 = p2.x > vTexCoord.x;\n\n  if (x1 ? !x2 : x0) {\n    coverage.y -= saturate(C1.y + 0.5);\n    weight.y = min(weight.y, abs(C1.y));\n  }\n\n  if (x1 ? !x0 : x2) {\n    coverage.y += saturate(C2.y + 0.5);\n    weight.y = min(weight.y, abs(C2.y));\n  }\n}\n\nvoid main() {\n\n  // calculate the pixel scale based on screen-coordinates\n  pixelScale = hardness / fwidth(vTexCoord);\n\n  // which grid cell is this pixel in?\n  ivec2 gridCoord = ifloor(vTexCoord * vec2(uGridSize));\n\n  // intersect curves in this row\n  {\n    // the index into the row info bitmap\n    int rowIndex = gridCoord.y + uGridOffset.y;\n    // fetch the info texel\n    vec4 rowInfo = getTexel(uSamplerRows, rowIndex, uGridImageSize);\n    // unpack the rowInfo\n    int rowStrokeIndex = getInt16(rowInfo.xy);\n    int rowStrokeCount = getInt16(rowInfo.zw);\n\n    for (int iRowStroke = INT(0); iRowStroke < N; iRowStroke++) {\n      if (iRowStroke >= rowStrokeCount)\n        break;\n\n      // each stroke is made up of 3 points: the start and control point\n      // and the start of the next curve.\n      // fetch the indices of this pair of strokes:\n      vec4 strokeIndices = getTexel(uSamplerRowStrokes, rowStrokeIndex++, uCellsImageSize);\n\n      // unpack the stroke index\n      int strokePos = getInt16(strokeIndices.xy);\n\n      // fetch the two strokes\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n\n      // calculate the coverage\n      coverageX(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  // intersect curves in this column\n  {\n    int colIndex = gridCoord.x + uGridOffset.x;\n    vec4 colInfo = getTexel(uSamplerCols, colIndex, uGridImageSize);\n    int colStrokeIndex = getInt16(colInfo.xy);\n    int colStrokeCount = getInt16(colInfo.zw);\n    \n    for (int iColStroke = INT(0); iColStroke < N; iColStroke++) {\n      if (iColStroke >= colStrokeCount)\n        break;\n\n      vec4 strokeIndices = getTexel(uSamplerColStrokes, colStrokeIndex++, uCellsImageSize);\n\n      int strokePos = getInt16(strokeIndices.xy);\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n      coverageY(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  weight = saturate(1.0 - weight * 2.0);\n  float distance = max(weight.x + weight.y, minDistance); // manhattan approx.\n  float antialias = abs(dot(coverage, weight) / distance);\n  float cover = min(abs(coverage.x), abs(coverage.y));\n  gl_FragColor = uMaterialColor;\n  gl_FragColor.a *= saturate(max(antialias, cover));\n}",
        lineVert: "/*\n  Part of the Processing project - http://processing.org\n  Copyright (c) 2012-15 The Processing Foundation\n  Copyright (c) 2004-12 Ben Fry and Casey Reas\n  Copyright (c) 2001-04 Massachusetts Institute of Technology\n  This library is free software; you can redistribute it and/or\n  modify it under the terms of the GNU Lesser General Public\n  License as published by the Free Software Foundation, version 2.1.\n  This library is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n  Lesser General Public License for more details.\n  You should have received a copy of the GNU Lesser General\n  Public License along with this library; if not, write to the\n  Free Software Foundation, Inc., 59 Temple Place, Suite 330,\n  Boston, MA  02111-1307  USA\n*/\n\n#define PROCESSING_LINE_SHADER\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uStrokeWeight;\n\nuniform vec4 uViewport;\nuniform int uPerspective;\n\nattribute vec4 aPosition;\nattribute vec4 aDirection;\n  \nvoid main() {\n  // using a scale <1 moves the lines towards the camera\n  // in order to prevent popping effects due to half of\n  // the line disappearing behind the geometry faces.\n  vec3 scale = vec3(0.9995);\n\n  vec4 posp = uModelViewMatrix * aPosition;\n  vec4 posq = uModelViewMatrix * (aPosition + vec4(aDirection.xyz, 0));\n\n  // Moving vertices slightly toward the camera\n  // to avoid depth-fighting with the fill triangles.\n  // Discussed here:\n  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848  \n  posp.xyz = posp.xyz * scale;\n  posq.xyz = posq.xyz * scale;\n\n  vec4 p = uProjectionMatrix * posp;\n  vec4 q = uProjectionMatrix * posq;\n\n  // formula to convert from clip space (range -1..1) to screen space (range 0..[width or height])\n  // screen_p = (p.xy/p.w + <1,1>) * 0.5 * uViewport.zw\n\n  // prevent division by W by transforming the tangent formula (div by 0 causes\n  // the line to disappear, see https://github.com/processing/processing/issues/5183)\n  // t = screen_q - screen_p\n  //\n  // tangent is normalized and we don't care which aDirection it points to (+-)\n  // t = +- normalize( screen_q - screen_p )\n  // t = +- normalize( (q.xy/q.w+<1,1>)*0.5*uViewport.zw - (p.xy/p.w+<1,1>)*0.5*uViewport.zw )\n  //\n  // extract common factor, <1,1> - <1,1> cancels out\n  // t = +- normalize( (q.xy/q.w - p.xy/p.w) * 0.5 * uViewport.zw )\n  //\n  // convert to common divisor\n  // t = +- normalize( ((q.xy*p.w - p.xy*q.w) / (p.w*q.w)) * 0.5 * uViewport.zw )\n  //\n  // remove the common scalar divisor/factor, not needed due to normalize and +-\n  // (keep uViewport - can't remove because it has different components for x and y\n  //  and corrects for aspect ratio, see https://github.com/processing/processing/issues/5181)\n  // t = +- normalize( (q.xy*p.w - p.xy*q.w) * uViewport.zw )\n\n  vec2 tangent = normalize((q.xy*p.w - p.xy*q.w) * uViewport.zw);\n\n  // flip tangent to normal (it's already normalized)\n  vec2 normal = vec2(-tangent.y, tangent.x);\n\n  float thickness = aDirection.w * uStrokeWeight;\n  vec2 offset = normal * thickness / 2.0;\n\n  vec2 curPerspScale;\n\n  if(uPerspective == 1) {\n    // Perspective ---\n    // convert from world to clip by multiplying with projection scaling factor\n    // to get the right thickness (see https://github.com/processing/processing/issues/5182)\n    // invert Y, projections in Processing invert Y\n    curPerspScale = (uProjectionMatrix * vec4(1, -1, 0, 0)).xy;\n  } else {\n    // No Perspective ---\n    // multiply by W (to cancel out division by W later in the pipeline) and\n    // convert from screen to clip (derived from clip to screen above)\n    curPerspScale = p.w / (0.5 * uViewport.zw);\n  }\n\n  gl_Position.xy = p.xy + offset.xy * curPerspScale;\n  gl_Position.zw = p.zw;\n}\n",
        lineFrag: "precision mediump float;\nprecision mediump int;\n\nuniform vec4 uMaterialColor;\n\nvoid main() {\n  gl_FragColor = uMaterialColor;\n}",
        pointVert: "attribute vec3 aPosition;\nuniform float uPointSize;\nvarying float vStrokeWeight;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nvoid main() {\n\tvec4 positionVec4 =  vec4(aPosition, 1.0);\n\tgl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\tgl_PointSize = uPointSize;\n\tvStrokeWeight = uPointSize;\n}",
        pointFrag: "precision mediump float;\nprecision mediump int;\nuniform vec4 uMaterialColor;\nvarying float vStrokeWeight;\n\nvoid main(){\n\tfloat mask = 0.0;\n\n\t// make a circular mask using the gl_PointCoord (goes from 0 - 1 on a point)\n    // might be able to get a nicer edge on big strokeweights with smoothstep but slightly less performant\n\n\tmask = step(0.98, length(gl_PointCoord * 2.0 - 1.0));\n\n\t// if strokeWeight is 1 or less lets just draw a square\n\t// this prevents weird artifacting from carving circles when our points are really small\n\t// if strokeWeight is larger than 1, we just use it as is\n\n\tmask = mix(0.0, mask, clamp(floor(vStrokeWeight - 0.5),0.0,1.0));\n\n\t// throw away the borders of the mask\n    // otherwise we get weird alpha blending issues\n\n\tif(mask > 0.98){\n      discard;\n  \t}\n\n  \tgl_FragColor = vec4(uMaterialColor.rgb * (1.0 - mask), uMaterialColor.a) ;\n}"
      };
      u.default.RendererGL = function (e, t, r, n) {
        return u.default.Renderer.call(this, e, t, r), this._setAttributeDefaults(t), this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this._isErasing = !1, this._enableLighting = !1, this.ambientLightColors = [], this.specularColors = [1, 1, 1], this.directionalLightDirections = [], this.directionalLightDiffuseColors = [], this.directionalLightSpecularColors = [], this.pointLightPositions = [], this.pointLightDiffuseColors = [], this.pointLightSpecularColors = [], this.spotLightPositions = [], this.spotLightDirections = [], this.spotLightDiffuseColors = [], this.spotLightSpecularColors = [], this.spotLightAngle = [], this.spotLightConc = [], this.drawMode = a.FILL, this.curFillColor = this._cachedFillStyle = [1, 1, 1, 1], this.curStrokeColor = this._cachedStrokeStyle = [0, 0, 0, 1], this.curBlendMode = a.BLEND, this._cachedBlendMode = void 0, this.blendExt = this.GL.getExtension("EXT_blend_minmax"), this._isBlending = !1, this._useSpecularMaterial = !1, this._useEmissiveMaterial = !1, this._useNormalMaterial = !1, this._useShininess = 1, this._tint = [255, 255, 255, 255], this.constantAttenuation = 1, this.linearAttenuation = 0, this.quadraticAttenuation = 0, this.uMVMatrix = new u.default.Matrix(), this.uPMatrix = new u.default.Matrix(), this.uNMatrix = new u.default.Matrix("mat3"), this._curCamera = new u.default.Camera(this), this._curCamera._computeCameraDefaultSettings(), this._curCamera._setDefaultCamera(), this._defaultLightShader = void 0, this._defaultImmediateModeShader = void 0, this._defaultNormalShader = void 0, this._defaultColorShader = void 0, this._defaultPointShader = void 0, this.userFillShader = void 0, this.userStrokeShader = void 0, this.userPointShader = void 0, this.retainedMode = {
          geometry: {},
          buffers: {
            stroke: [new u.default.RenderBuffer(3, "lineVertices", "lineVertexBuffer", "aPosition", this, this._flatten), new u.default.RenderBuffer(4, "lineNormals", "lineNormalBuffer", "aDirection", this, this._flatten)],
            fill: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(3, "vertexNormals", "normalBuffer", "aNormal", this, this._vToNArray), new u.default.RenderBuffer(4, "vertexColors", "colorBuffer", "aMaterialColor", this), new u.default.RenderBuffer(3, "vertexAmbients", "ambientBuffer", "aAmbientColor", this), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)],
            text: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)]
          }
        }, this.immediateMode = {
          geometry: new u.default.Geometry(),
          shapeMode: a.TRIANGLE_FAN,
          _bezierVertex: [],
          _quadraticVertex: [],
          _curveVertex: [],
          buffers: {
            fill: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(3, "vertexNormals", "normalBuffer", "aNormal", this, this._vToNArray), new u.default.RenderBuffer(4, "vertexColors", "colorBuffer", "aVertexColor", this), new u.default.RenderBuffer(3, "vertexAmbients", "ambientBuffer", "aAmbientColor", this), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)],
            stroke: [new u.default.RenderBuffer(3, "lineVertices", "lineVertexBuffer", "aPosition", this, this._flatten), new u.default.RenderBuffer(4, "lineNormals", "lineNormalBuffer", "aDirection", this, this._flatten)],
            point: this.GL.createBuffer()
          }
        }, this.pointSize = 5, this.curStrokeWeight = 1, this.textures = [], this.textureMode = a.IMAGE, this.textureWrapX = a.CLAMP, this.textureWrapY = a.CLAMP, this._tex = null, this._curveTightness = 6, this._lookUpTableBezier = [], this._lookUpTableQuadratic = [], this._lutBezierDetail = 0, this._lutQuadraticDetail = 0, this._tessy = this._initTessy(), this.fontInfos = {}, this._curShader = void 0, this;
      }, u.default.RendererGL.prototype = Object.create(u.default.Renderer.prototype), u.default.RendererGL.prototype._setAttributeDefaults = function (e) {
        var t = {
          alpha: !0,
          depth: !0,
          stencil: !0,
          antialias: navigator.userAgent.toLowerCase().includes("safari"),
          premultipliedAlpha: !1,
          preserveDrawingBuffer: !0,
          perPixelLighting: !0
        };
        null === e._glAttributes ? e._glAttributes = t : e._glAttributes = Object.assign(t, e._glAttributes);
      }, u.default.RendererGL.prototype._initContext = function () {
        try {
          if (this.drawingContext = this.canvas.getContext("webgl", this._pInst._glAttributes) || this.canvas.getContext("experimental-webgl", this._pInst._glAttributes), null === this.drawingContext) throw new Error("Error creating webgl context");
          var e = this.drawingContext;
          e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), this._viewport = this.drawingContext.getParameter(this.drawingContext.VIEWPORT);
        } catch (e) {
          throw e;
        }
      }, u.default.RendererGL.prototype._resetContext = function (e, t) {
        var r = this.width,
            n = this.height,
            i = this.canvas.id,
            a = this._pInst instanceof u.default.Graphics;

        if (a) {
          var o = this._pInst;
          o.canvas.parentNode.removeChild(o.canvas), o.canvas = document.createElement("canvas"), (o._pInst._userNode || document.body).appendChild(o.canvas), u.default.Element.call(o, o.canvas, o._pInst), o.width = r, o.height = n;
        } else {
          var s = this.canvas;
          s && s.parentNode.removeChild(s), (s = document.createElement("canvas")).id = i, this._pInst._userNode ? this._pInst._userNode.appendChild(s) : document.body.appendChild(s), this._pInst.canvas = s;
        }

        var l = new u.default.RendererGL(this._pInst.canvas, this._pInst, !a);
        this._pInst._setProperty("_renderer", l), l.resize(r, n), l._applyDefaults(), a || this._pInst._elements.push(l), "function" == typeof t && setTimeout(function () {
          t.apply(window._renderer, e);
        }, 0);
      }, u.default.prototype.setAttributes = function (e, t) {
        if (void 0 !== this._glAttributes) {
          var r = !0;

          if (void 0 !== t ? (null === this._glAttributes && (this._glAttributes = {}), this._glAttributes[e] !== t && (this._glAttributes[e] = t, r = !1)) : e instanceof Object && this._glAttributes !== e && (this._glAttributes = e, r = !1), this._renderer.isP3D && !r) {
            if (!this._setupDone) for (var n in this._renderer.retainedMode.geometry) {
              if (this._renderer.retainedMode.geometry.hasOwnProperty(n)) return void console.error("Sorry, Could not set the attributes, you need to call setAttributes() before calling the other drawing methods in setup()");
            }
            this.push(), this._renderer._resetContext(), this.pop(), this._renderer._curCamera && (this._renderer._curCamera._renderer = this._renderer);
          }
        } else console.log("You are trying to use setAttributes on a p5.Graphics object that does not use a WEBGL renderer.");
      }, u.default.RendererGL.prototype._update = function () {
        this.uMVMatrix.set(this._curCamera.cameraMatrix.mat4[0], this._curCamera.cameraMatrix.mat4[1], this._curCamera.cameraMatrix.mat4[2], this._curCamera.cameraMatrix.mat4[3], this._curCamera.cameraMatrix.mat4[4], this._curCamera.cameraMatrix.mat4[5], this._curCamera.cameraMatrix.mat4[6], this._curCamera.cameraMatrix.mat4[7], this._curCamera.cameraMatrix.mat4[8], this._curCamera.cameraMatrix.mat4[9], this._curCamera.cameraMatrix.mat4[10], this._curCamera.cameraMatrix.mat4[11], this._curCamera.cameraMatrix.mat4[12], this._curCamera.cameraMatrix.mat4[13], this._curCamera.cameraMatrix.mat4[14], this._curCamera.cameraMatrix.mat4[15]), this.ambientLightColors.length = 0, this.specularColors = [1, 1, 1], this.directionalLightDirections.length = 0, this.directionalLightDiffuseColors.length = 0, this.directionalLightSpecularColors.length = 0, this.pointLightPositions.length = 0, this.pointLightDiffuseColors.length = 0, this.pointLightSpecularColors.length = 0, this.spotLightPositions.length = 0, this.spotLightDirections.length = 0, this.spotLightDiffuseColors.length = 0, this.spotLightSpecularColors.length = 0, this.spotLightAngle.length = 0, this.spotLightConc.length = 0, this._enableLighting = !1, this._tint = [255, 255, 255, 255], this.GL.clear(this.GL.DEPTH_BUFFER_BIT);
      }, u.default.RendererGL.prototype.background = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments),
            r = t.levels[0] / 255,
            n = t.levels[1] / 255,
            i = t.levels[2] / 255,
            a = t.levels[3] / 255;

        this.GL.clearColor(r, n, i, a), this.GL.clear(this.GL.COLOR_BUFFER_BIT);
      }, u.default.RendererGL.prototype.fill = function (e, t, r, n) {
        var i = u.default.prototype.color.apply(this._pInst, arguments);
        this.curFillColor = i._array, this.drawMode = a.FILL, this._useNormalMaterial = !1, this._tex = null;
      }, u.default.RendererGL.prototype.stroke = function (e, t, r, n) {
        arguments[3] = 255;
        var i = u.default.prototype.color.apply(this._pInst, arguments);
        this.curStrokeColor = i._array;
      }, u.default.RendererGL.prototype.strokeCap = function (e) {
        console.error("Sorry, strokeCap() is not yet implemented in WEBGL mode");
      }, u.default.RendererGL.prototype.strokeJoin = function (e) {
        console.error("Sorry, strokeJoin() is not yet implemented in WEBGL mode");
      }, u.default.RendererGL.prototype.filter = function (e) {
        console.error("filter() does not work in WEBGL mode");
      }, u.default.RendererGL.prototype.blendMode = function (e) {
        e === a.DARKEST || e === a.LIGHTEST || e === a.ADD || e === a.BLEND || e === a.SUBTRACT || e === a.SCREEN || e === a.EXCLUSION || e === a.REPLACE || e === a.MULTIPLY || e === a.REMOVE ? this.curBlendMode = e : e !== a.BURN && e !== a.OVERLAY && e !== a.HARD_LIGHT && e !== a.SOFT_LIGHT && e !== a.DODGE || console.warn("BURN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, and DODGE only work for blendMode in 2D mode.");
      }, u.default.RendererGL.prototype.erase = function (e, t) {
        this._isErasing || (this._cachedBlendMode = this.curBlendMode, this.blendMode(a.REMOVE), this._cachedFillStyle = this.curFillColor.slice(), this.curFillColor = [1, 1, 1, e / 255], this._cachedStrokeStyle = this.curStrokeColor.slice(), this.curStrokeColor = [1, 1, 1, t / 255], this._isErasing = !0);
      }, u.default.RendererGL.prototype.noErase = function () {
        this._isErasing && (this.curFillColor = this._cachedFillStyle.slice(), this.curStrokeColor = this._cachedStrokeStyle.slice(), this.blendMode(this._cachedBlendMode), this._isErasing = !1);
      }, u.default.RendererGL.prototype.strokeWeight = function (e) {
        this.curStrokeWeight !== e && (this.pointSize = e, this.curStrokeWeight = e);
      }, u.default.RendererGL.prototype._getPixel = function (e, t) {
        var r;
        return r = new Uint8Array(4), this.drawingContext.readPixels(e, t, 1, 1, this.drawingContext.RGBA, this.drawingContext.UNSIGNED_BYTE, r), [r[0], r[1], r[2], r[3]];
      }, u.default.RendererGL.prototype.loadPixels = function () {
        var e = this._pixelsState;

        if (!0 === this._pInst._glAttributes.preserveDrawingBuffer) {
          var t = e.pixels,
              r = this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4;
          t instanceof Uint8Array && t.length === r || (t = new Uint8Array(r), this._pixelsState._setProperty("pixels", t));
          var n = this._pInst._pixelDensity;
          this.GL.readPixels(0, 0, this.width * n, this.height * n, this.GL.RGBA, this.GL.UNSIGNED_BYTE, t);
        } else console.log("loadPixels only works in WebGL when preserveDrawingBuffer is true.");
      }, u.default.RendererGL.prototype.geometryInHash = function (e) {
        return void 0 !== this.retainedMode.geometry[e];
      }, u.default.RendererGL.prototype.resize = function (e, t) {
        u.default.Renderer.prototype.resize.call(this, e, t), this.GL.viewport(0, 0, this.GL.drawingBufferWidth, this.GL.drawingBufferHeight), this._viewport = this.GL.getParameter(this.GL.VIEWPORT), this._curCamera._resize();
        var r = this._pixelsState;
        void 0 !== r.pixels && r._setProperty("pixels", new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4));
      }, u.default.RendererGL.prototype.clear = function () {
        var e = (arguments.length <= 0 ? void 0 : arguments[0]) || 0,
            t = (arguments.length <= 1 ? void 0 : arguments[1]) || 0,
            r = (arguments.length <= 2 ? void 0 : arguments[2]) || 0,
            n = (arguments.length <= 3 ? void 0 : arguments[3]) || 0;
        this.GL.clearColor(e, t, r, n), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);
      }, u.default.RendererGL.prototype.applyMatrix = function (e, t, r, n, i, a) {
        16 === arguments.length ? u.default.Matrix.prototype.apply.apply(this.uMVMatrix, arguments) : this.uMVMatrix.apply([e, t, 0, 0, r, n, 0, 0, 0, 0, 1, 0, i, a, 0, 1]);
      }, u.default.RendererGL.prototype.translate = function (e, t, r) {
        return e instanceof u.default.Vector && (r = e.z, t = e.y, e = e.x), this.uMVMatrix.translate([e, t, r]), this;
      }, u.default.RendererGL.prototype.scale = function (e, t, r) {
        return this.uMVMatrix.scale(e, t, r), this;
      }, u.default.RendererGL.prototype.rotate = function (e, t) {
        return void 0 === t ? this.rotateZ(e) : (u.default.Matrix.prototype.rotate.apply(this.uMVMatrix, arguments), this);
      }, u.default.RendererGL.prototype.rotateX = function (e) {
        return this.rotate(e, 1, 0, 0), this;
      }, u.default.RendererGL.prototype.rotateY = function (e) {
        return this.rotate(e, 0, 1, 0), this;
      }, u.default.RendererGL.prototype.rotateZ = function (e) {
        return this.rotate(e, 0, 0, 1), this;
      }, u.default.RendererGL.prototype.push = function () {
        var e = u.default.Renderer.prototype.push.apply(this),
            t = e.properties;
        return t.uMVMatrix = this.uMVMatrix.copy(), t.uPMatrix = this.uPMatrix.copy(), t._curCamera = this._curCamera, this._curCamera = this._curCamera.copy(), t.ambientLightColors = this.ambientLightColors.slice(), t.specularColors = this.specularColors.slice(), t.directionalLightDirections = this.directionalLightDirections.slice(), t.directionalLightDiffuseColors = this.directionalLightDiffuseColors.slice(), t.directionalLightSpecularColors = this.directionalLightSpecularColors.slice(), t.pointLightPositions = this.pointLightPositions.slice(), t.pointLightDiffuseColors = this.pointLightDiffuseColors.slice(), t.pointLightSpecularColors = this.pointLightSpecularColors.slice(), t.spotLightPositions = this.spotLightPositions.slice(), t.spotLightDirections = this.spotLightDirections.slice(), t.spotLightDiffuseColors = this.spotLightDiffuseColors.slice(), t.spotLightSpecularColors = this.spotLightSpecularColors.slice(), t.spotLightAngle = this.spotLightAngle.slice(), t.spotLightConc = this.spotLightConc.slice(), t.userFillShader = this.userFillShader, t.userStrokeShader = this.userStrokeShader, t.userPointShader = this.userPointShader, t.pointSize = this.pointSize, t.curStrokeWeight = this.curStrokeWeight, t.curStrokeColor = this.curStrokeColor, t.curFillColor = this.curFillColor, t._useSpecularMaterial = this._useSpecularMaterial, t._useEmissiveMaterial = this._useEmissiveMaterial, t._useShininess = this._useShininess, t.constantAttenuation = this.constantAttenuation, t.linearAttenuation = this.linearAttenuation, t.quadraticAttenuation = this.quadraticAttenuation, t._enableLighting = this._enableLighting, t._useNormalMaterial = this._useNormalMaterial, t._tex = this._tex, t.drawMode = this.drawMode, e;
      }, u.default.RendererGL.prototype.resetMatrix = function () {
        return this.uMVMatrix = u.default.Matrix.identity(this._pInst), this;
      }, u.default.RendererGL.prototype._getImmediateStrokeShader = function () {
        var e = this.userStrokeShader;
        return e && e.isStrokeShader() ? e : this._getLineShader();
      }, u.default.RendererGL.prototype._getRetainedStrokeShader = u.default.RendererGL.prototype._getImmediateStrokeShader, u.default.RendererGL.prototype._getImmediateFillShader = function () {
        var e = this.userFillShader;
        if (this._useNormalMaterial && (!e || !e.isNormalShader())) return this._getNormalShader();

        if (this._enableLighting) {
          if (!e || !e.isLightShader()) return this._getLightShader();
        } else if (this._tex) {
          if (!e || !e.isTextureShader()) return this._getLightShader();
        } else if (!e) return this._getImmediateModeShader();

        return e;
      }, u.default.RendererGL.prototype._getRetainedFillShader = function () {
        if (this._useNormalMaterial) return this._getNormalShader();
        var e = this.userFillShader;

        if (this._enableLighting) {
          if (!e || !e.isLightShader()) return this._getLightShader();
        } else if (this._tex) {
          if (!e || !e.isTextureShader()) return this._getLightShader();
        } else if (!e) return this._getColorShader();

        return e;
      }, u.default.RendererGL.prototype._getImmediatePointShader = function () {
        var e = this.userPointShader;
        return e && e.isPointShader() ? e : this._getPointShader();
      }, u.default.RendererGL.prototype._getRetainedLineShader = u.default.RendererGL.prototype._getImmediateLineShader, u.default.RendererGL.prototype._getLightShader = function () {
        return this._defaultLightShader || (this._pInst._glAttributes.perPixelLighting ? this._defaultLightShader = new u.default.Shader(this, f.phongVert, f.phongFrag) : this._defaultLightShader = new u.default.Shader(this, f.lightVert, f.lightTextureFrag)), this._defaultLightShader;
      }, u.default.RendererGL.prototype._getImmediateModeShader = function () {
        return this._defaultImmediateModeShader || (this._defaultImmediateModeShader = new u.default.Shader(this, f.immediateVert, f.vertexColorFrag)), this._defaultImmediateModeShader;
      }, u.default.RendererGL.prototype._getNormalShader = function () {
        return this._defaultNormalShader || (this._defaultNormalShader = new u.default.Shader(this, f.normalVert, f.normalFrag)), this._defaultNormalShader;
      }, u.default.RendererGL.prototype._getColorShader = function () {
        return this._defaultColorShader || (this._defaultColorShader = new u.default.Shader(this, f.normalVert, f.basicFrag)), this._defaultColorShader;
      }, u.default.RendererGL.prototype._getPointShader = function () {
        return this._defaultPointShader || (this._defaultPointShader = new u.default.Shader(this, f.pointVert, f.pointFrag)), this._defaultPointShader;
      }, u.default.RendererGL.prototype._getLineShader = function () {
        return this._defaultLineShader || (this._defaultLineShader = new u.default.Shader(this, f.lineVert, f.lineFrag)), this._defaultLineShader;
      }, u.default.RendererGL.prototype._getFontShader = function () {
        return this._defaultFontShader || (this.GL.getExtension("OES_standard_derivatives"), this._defaultFontShader = new u.default.Shader(this, f.fontVert, f.fontFrag)), this._defaultFontShader;
      }, u.default.RendererGL.prototype._getEmptyTexture = function () {
        if (!this._emptyTexture) {
          var e = new u.default.Image(1, 1);
          e.set(0, 0, 255), this._emptyTexture = new u.default.Texture(this, e);
        }

        return this._emptyTexture;
      }, u.default.RendererGL.prototype.getTexture = function (e) {
        var t = this.textures,
            r = !0,
            n = !1,
            i = void 0;

        try {
          for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            var s = a.value;
            if (s.src === e) return s;
          }
        } catch (e) {
          n = !0, i = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (n) throw i;
          }
        }

        var l = new u.default.Texture(this, e);
        return t.push(l), l;
      }, u.default.RendererGL.prototype._setStrokeUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curStrokeColor), e.setUniform("uStrokeWeight", this.curStrokeWeight);
      }, u.default.RendererGL.prototype._setFillUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curFillColor), e.setUniform("isTexture", !!this._tex), this._tex && e.setUniform("uSampler", this._tex), e.setUniform("uTint", this._tint), e.setUniform("uSpecular", this._useSpecularMaterial), e.setUniform("uEmissive", this._useEmissiveMaterial), e.setUniform("uShininess", this._useShininess), e.setUniform("uUseLighting", this._enableLighting);
        var t = this.pointLightDiffuseColors.length / 3;
        e.setUniform("uPointLightCount", t), e.setUniform("uPointLightLocation", this.pointLightPositions), e.setUniform("uPointLightDiffuseColors", this.pointLightDiffuseColors), e.setUniform("uPointLightSpecularColors", this.pointLightSpecularColors);
        var r = this.directionalLightDiffuseColors.length / 3;
        e.setUniform("uDirectionalLightCount", r), e.setUniform("uLightingDirection", this.directionalLightDirections), e.setUniform("uDirectionalDiffuseColors", this.directionalLightDiffuseColors), e.setUniform("uDirectionalSpecularColors", this.directionalLightSpecularColors);
        var n = this.ambientLightColors.length / 3;
        e.setUniform("uAmbientLightCount", n), e.setUniform("uAmbientColor", this.ambientLightColors);
        var i = this.spotLightDiffuseColors.length / 3;
        e.setUniform("uSpotLightCount", i), e.setUniform("uSpotLightAngle", this.spotLightAngle), e.setUniform("uSpotLightConc", this.spotLightConc), e.setUniform("uSpotLightDiffuseColors", this.spotLightDiffuseColors), e.setUniform("uSpotLightSpecularColors", this.spotLightSpecularColors), e.setUniform("uSpotLightLocation", this.spotLightPositions), e.setUniform("uSpotLightDirection", this.spotLightDirections), e.setUniform("uConstantAttenuation", this.constantAttenuation), e.setUniform("uLinearAttenuation", this.linearAttenuation), e.setUniform("uQuadraticAttenuation", this.quadraticAttenuation), e.bindTextures();
      }, u.default.RendererGL.prototype._setPointUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curStrokeColor), e.setUniform("uPointSize", this.pointSize);
      }, u.default.RendererGL.prototype._bindBuffer = function (e, t, r, n, i) {
        if (t = t || this.GL.ARRAY_BUFFER, this.GL.bindBuffer(t, e), void 0 !== r) {
          var a = new (n || Float32Array)(r);
          this.GL.bufferData(t, a, i || this.GL.STATIC_DRAW);
        }
      }, u.default.RendererGL.prototype._arraysEqual = function (e, t) {
        var r = e.length;
        if (r !== t.length) return !1;

        for (var n = 0; n < r; n++) {
          if (e[n] !== t[n]) return !1;
        }

        return !0;
      }, u.default.RendererGL.prototype._isTypedArray = function (e) {
        return Float32Array, Float64Array, Int16Array, Uint16Array, e instanceof Uint32Array;
      }, u.default.RendererGL.prototype._flatten = function (e) {
        if (0 === e.length) return [];

        if (2e4 < e.length) {
          var t,
              r = Object.prototype.toString,
              n = [],
              i = e.slice();

          for (t = i.pop(); "[object Array]" === r.call(t) ? i.push.apply(i, l(t)) : n.push(t), i.length && void 0 !== (t = i.pop());) {
            ;
          }

          return n.reverse(), n;
        }

        var a;
        return (a = []).concat.apply(a, l(e));
      }, u.default.RendererGL.prototype._vToNArray = function (e) {
        var t = [],
            r = !0,
            n = !1,
            i = void 0;

        try {
          for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            var s = a.value;
            t.push(s.x, s.y, s.z);
          }
        } catch (e) {
          n = !0, i = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (n) throw i;
          }
        }

        return t;
      }, u.default.prototype._assert3d = function (e) {
        if (!this._renderer.isP3D) throw new Error("".concat(e, "() is only supported in WEBGL mode. If you'd like to use 3D graphics and WebGL, see  https://p5js.org/examples/form-3d-primitives.html for more information."));
      }, u.default.RendererGL.prototype._initTessy = function () {
        var e = new n.default.GluTesselator();
        return e.gluTessCallback(n.default.gluEnum.GLU_TESS_VERTEX_DATA, function (e, t) {
          t[t.length] = e[0], t[t.length] = e[1], t[t.length] = e[2];
        }), e.gluTessCallback(n.default.gluEnum.GLU_TESS_BEGIN, function (e) {
          e !== n.default.primitiveType.GL_TRIANGLES && console.log("expected TRIANGLES but got type: ".concat(e));
        }), e.gluTessCallback(n.default.gluEnum.GLU_TESS_ERROR, function (e) {
          console.log("error callback"), console.log("error number: ".concat(e));
        }), e.gluTessCallback(n.default.gluEnum.GLU_TESS_COMBINE, function (e, t, r) {
          return [e[0], e[1], e[2]];
        }), e.gluTessCallback(n.default.gluEnum.GLU_TESS_EDGE_FLAG, function (e) {}), e;
      }, u.default.RendererGL.prototype._triangulate = function (e) {
        this._tessy.gluTessNormal(0, 0, 1);

        var t = [];

        this._tessy.gluTessBeginPolygon(t);

        for (var r = 0; r < e.length; r++) {
          this._tessy.gluTessBeginContour();

          for (var n = e[r], i = 0; i < n.length; i += 3) {
            var a = [n[i], n[i + 1], n[i + 2]];

            this._tessy.gluTessVertex(a, a);
          }

          this._tessy.gluTessEndContour();
        }

        return this._tessy.gluTessEndPolygon(), t;
      }, u.default.RendererGL.prototype._bezierCoefficients = function (e) {
        var t = e * e,
            r = 1 - e,
            n = r * r;
        return [n * r, 3 * n * e, 3 * r * t, t * e];
      }, u.default.RendererGL.prototype._quadraticCoefficients = function (e) {
        var t = 1 - e;
        return [t * t, 2 * t * e, e * e];
      }, u.default.RendererGL.prototype._bezierToCatmull = function (e) {
        return [e[1], e[1] + (e[2] - e[0]) / this._curveTightness, e[2] - (e[3] - e[1]) / this._curveTightness, e[2]];
      };
      var c = u.default.RendererGL;
      r.default = c;
    }, {
      "../core/constants": 37,
      "../core/main": 43,
      "../core/p5.Renderer": 46,
      "./p5.Camera": 73,
      "./p5.Matrix": 74,
      "./p5.Shader": 76,
      libtess: 27,
      path: 30
    }],
    76: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n,
          i = (n = e("../core/main")) && n.__esModule ? n : {
        default: n
      };
      i.default.Shader = function (e, t, r) {
        this._renderer = e, this._vertSrc = t, this._fragSrc = r, this._vertShader = -1, this._fragShader = -1, this._glProgram = 0, this._loadedAttributes = !1, this.attributes = {}, this._loadedUniforms = !1, this.uniforms = {}, this._bound = !1, this.samplers = [];
      }, i.default.Shader.prototype.init = function () {
        if (0 === this._glProgram) {
          var e = this._renderer.GL;
          if (this._vertShader = e.createShader(e.VERTEX_SHADER), e.shaderSource(this._vertShader, this._vertSrc), e.compileShader(this._vertShader), !e.getShaderParameter(this._vertShader, e.COMPILE_STATUS)) return console.error("Yikes! An error occurred compiling the vertex shader:".concat(e.getShaderInfoLog(this._vertShader))), null;
          if (this._fragShader = e.createShader(e.FRAGMENT_SHADER), e.shaderSource(this._fragShader, this._fragSrc), e.compileShader(this._fragShader), !e.getShaderParameter(this._fragShader, e.COMPILE_STATUS)) return console.error("Darn! An error occurred compiling the fragment shader:".concat(e.getShaderInfoLog(this._fragShader))), null;
          this._glProgram = e.createProgram(), e.attachShader(this._glProgram, this._vertShader), e.attachShader(this._glProgram, this._fragShader), e.linkProgram(this._glProgram), e.getProgramParameter(this._glProgram, e.LINK_STATUS) || console.error("Snap! Error linking shader program: ".concat(e.getProgramInfoLog(this._glProgram))), this._loadAttributes(), this._loadUniforms();
        }

        return this;
      }, i.default.Shader.prototype._loadAttributes = function () {
        if (!this._loadedAttributes) {
          this.attributes = {};

          for (var e = this._renderer.GL, t = e.getProgramParameter(this._glProgram, e.ACTIVE_ATTRIBUTES), r = 0; r < t; ++r) {
            var n = e.getActiveAttrib(this._glProgram, r),
                i = n.name,
                a = e.getAttribLocation(this._glProgram, i),
                o = {};
            o.name = i, o.location = a, o.index = r, o.type = n.type, o.size = n.size, this.attributes[i] = o;
          }

          this._loadedAttributes = !0;
        }
      }, i.default.Shader.prototype._loadUniforms = function () {
        if (!this._loadedUniforms) {
          for (var e = this._renderer.GL, t = e.getProgramParameter(this._glProgram, e.ACTIVE_UNIFORMS), r = 0, n = 0; n < t; ++n) {
            var i = e.getActiveUniform(this._glProgram, n),
                a = {};
            a.location = e.getUniformLocation(this._glProgram, i.name), a.size = i.size;
            var o = i.name;
            1 < i.size && (o = o.substring(0, o.indexOf("[0]"))), a.name = o, a.type = i.type, a._cachedData = void 0, a.type === e.SAMPLER_2D && (a.samplerIndex = r, r++, this.samplers.push(a)), a.isArray = a.type === e.FLOAT_MAT3 || a.type === e.FLOAT_MAT4 || a.type === e.FLOAT_VEC2 || a.type === e.FLOAT_VEC3 || a.type === e.FLOAT_VEC4 || a.type === e.INT_VEC2 || a.type === e.INT_VEC3 || a.type === e.INT_VEC4, this.uniforms[o] = a;
          }

          this._loadedUniforms = !0;
        }
      }, i.default.Shader.prototype.compile = function () {}, i.default.Shader.prototype.bindShader = function () {
        this.init(), this._bound || (this.useProgram(), this._bound = !0, this._setMatrixUniforms(), this.setUniform("uViewport", this._renderer._viewport));
      }, i.default.Shader.prototype.unbindShader = function () {
        return this._bound && (this.unbindTextures(), this._bound = !1), this;
      }, i.default.Shader.prototype.bindTextures = function () {
        var e = this._renderer.GL,
            t = !0,
            r = !1,
            n = void 0;

        try {
          for (var i, a = this.samplers[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
            var o = i.value,
                s = o.texture;
            void 0 === s && (s = this._renderer._getEmptyTexture()), e.activeTexture(e.TEXTURE0 + o.samplerIndex), s.bindTexture(), s.update(), e.uniform1i(o.location, o.samplerIndex);
          }
        } catch (e) {
          r = !0, n = e;
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw n;
          }
        }
      }, i.default.Shader.prototype.updateTextures = function () {
        var e = !0,
            t = !1,
            r = void 0;

        try {
          for (var n, i = this.samplers[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
            var a = n.value.texture;
            a && a.update();
          }
        } catch (e) {
          t = !0, r = e;
        } finally {
          try {
            e || null == i.return || i.return();
          } finally {
            if (t) throw r;
          }
        }
      }, i.default.Shader.prototype.unbindTextures = function () {}, i.default.Shader.prototype._setMatrixUniforms = function () {
        this.setUniform("uProjectionMatrix", this._renderer.uPMatrix.mat4), this.isStrokeShader() && ("default" === this._renderer._curCamera.cameraType ? this.setUniform("uPerspective", 1) : this.setUniform("uPerspective", 0)), this.setUniform("uModelViewMatrix", this._renderer.uMVMatrix.mat4), this.setUniform("uViewMatrix", this._renderer._curCamera.cameraMatrix.mat4), this.uniforms.uNormalMatrix && (this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix), this.setUniform("uNormalMatrix", this._renderer.uNMatrix.mat3));
      }, i.default.Shader.prototype.useProgram = function () {
        var e = this._renderer.GL;
        return this._renderer._curShader !== this && (e.useProgram(this._glProgram), this._renderer._curShader = this), this;
      }, i.default.Shader.prototype.setUniform = function (e, t) {
        var r = this.uniforms[e];

        if (r) {
          var n = this._renderer.GL;

          if (r.isArray) {
            if (r._cachedData && this._renderer._arraysEqual(r._cachedData, t)) return;
            r._cachedData = t.slice(0);
          } else {
            if (r._cachedData && r._cachedData === t) return;
            r._cachedData = t;
          }

          var i = r.location;

          switch (this.useProgram(), r.type) {
            case n.BOOL:
              !0 === t ? n.uniform1i(i, 1) : n.uniform1i(i, 0);
              break;

            case n.INT:
              1 < r.size ? t.length && n.uniform1iv(i, t) : n.uniform1i(i, t);
              break;

            case n.FLOAT:
              1 < r.size ? t.length && n.uniform1fv(i, t) : n.uniform1f(i, t);
              break;

            case n.FLOAT_MAT3:
              n.uniformMatrix3fv(i, !1, t);
              break;

            case n.FLOAT_MAT4:
              n.uniformMatrix4fv(i, !1, t);
              break;

            case n.FLOAT_VEC2:
              1 < r.size ? t.length && n.uniform2fv(i, t) : n.uniform2f(i, t[0], t[1]);
              break;

            case n.FLOAT_VEC3:
              1 < r.size ? t.length && n.uniform3fv(i, t) : n.uniform3f(i, t[0], t[1], t[2]);
              break;

            case n.FLOAT_VEC4:
              1 < r.size ? t.length && n.uniform4fv(i, t) : n.uniform4f(i, t[0], t[1], t[2], t[3]);
              break;

            case n.INT_VEC2:
              1 < r.size ? t.length && n.uniform2iv(i, t) : n.uniform2i(i, t[0], t[1]);
              break;

            case n.INT_VEC3:
              1 < r.size ? t.length && n.uniform3iv(i, t) : n.uniform3i(i, t[0], t[1], t[2]);
              break;

            case n.INT_VEC4:
              1 < r.size ? t.length && n.uniform4iv(i, t) : n.uniform4i(i, t[0], t[1], t[2], t[3]);
              break;

            case n.SAMPLER_2D:
              n.activeTexture(n.TEXTURE0 + r.samplerIndex), r.texture = this._renderer.getTexture(t), n.uniform1i(r.location, r.samplerIndex);
          }

          return this;
        }
      }, i.default.Shader.prototype.isLightShader = function () {
        return void 0 !== this.attributes.aNormal || void 0 !== this.uniforms.uUseLighting || void 0 !== this.uniforms.uAmbientLightCount || void 0 !== this.uniforms.uDirectionalLightCount || void 0 !== this.uniforms.uPointLightCount || void 0 !== this.uniforms.uAmbientColor || void 0 !== this.uniforms.uDirectionalDiffuseColors || void 0 !== this.uniforms.uDirectionalSpecularColors || void 0 !== this.uniforms.uPointLightLocation || void 0 !== this.uniforms.uPointLightDiffuseColors || void 0 !== this.uniforms.uPointLightSpecularColors || void 0 !== this.uniforms.uLightingDirection || void 0 !== this.uniforms.uSpecular;
      }, i.default.Shader.prototype.isNormalShader = function () {
        return void 0 !== this.attributes.aNormal;
      }, i.default.Shader.prototype.isTextureShader = function () {
        return 0 < this.samplerIndex;
      }, i.default.Shader.prototype.isColorShader = function () {
        return void 0 !== this.attributes.aVertexColor || void 0 !== this.uniforms.uMaterialColor;
      }, i.default.Shader.prototype.isTexLightShader = function () {
        return this.isLightShader() && this.isTextureShader();
      }, i.default.Shader.prototype.isStrokeShader = function () {
        return void 0 !== this.uniforms.uStrokeWeight;
      }, i.default.Shader.prototype.enableAttrib = function (e, t, r, n, i, a) {
        if (e) {
          0;
          var o = e.location;

          if (-1 !== o) {
            var s = this._renderer.GL;
            e.enabled || (s.enableVertexAttribArray(o), e.enabled = !0), this._renderer.GL.vertexAttribPointer(o, t, r || s.FLOAT, n || !1, i || 0, a || 0);
          }
        }

        return this;
      };
      var a = i.default.Shader;
      r.default = a;
    }, {
      "../core/main": 43
    }],
    77: [function (e, t, r) {
      t.exports = {
        fes: {
          autoplay: "The media that tried to play (with '{{src}}') wasn't allowed to by this browser, most likely due to the browser's autoplay policy. Check out {{link}} for more information about why.",
          fileLoadError: {
            bytes: "It looks like there was a problem loading your file. {{suggestion}}",
            font: "It looks like there was a problem loading your font. {{suggestion}}",
            gif: "There was some trouble loading your GIF. Make sure that your GIF is using 87a or 89a encoding.",
            image: "It looks like there was a problem loading your image. {{suggestion}}",
            json: "It looks like there was a problem loading your JSON file. {{suggestion}}",
            large: "If your large file isn't fetched successfully, we recommend splitting the file into smaller segments and fetching those.",
            strings: "It looks like there was a problem loading your text file. {{suggestion}}",
            suggestion: "Try checking if the file path ({{filePath}}) is correct, hosting the file online, or running a local server. (More info at {{link}})",
            table: "It looks like there was a problem loading your table file. {{suggestion}}",
            xml: "It looks like there was a problem loading your XML file. {{suggestion}}"
          },
          misusedTopLevel: "Did you just try to use p5.js's {{symbolName}} {{symbolType}}? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: {{link}}",
          pre: "🌸 p5.js says: {{message}}",
          welcome: "Welcome! This is your friendly debugger. To turn me off, switch to using p5.min.js."
        }
      };
    }, {}],
    78: [function (e, t, r) {
      t.exports = {
        fes: {
          autoplay: "Su browser impidío un medio tocar (de '{{src}}'), posiblemente porque las reglas de autoplay. Para aprender más, visite {{link}}.",
          fileLoadError: {
            bytes: "",
            font: "",
            gif: "",
            image: "",
            json: "",
            large: "",
            strings: "",
            suggestion: "",
            table: "",
            xml: ""
          },
          misusedTopLevel: "",
          pre: "🌸 p5.js dice: {{message}}",
          welcome: ""
        }
      };
    }, {}],
    79: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n = a(e("./en/translation")),
          i = a(e("./es/translation"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var o = {
        en: {
          translation: n.default
        },
        es: {
          translation: i.default
        }
      };
      r.default = o;
    }, {
      "./en/translation": 77,
      "./es/translation": 78
    }]
  }, {}, [32])(32);
});
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60959" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","p5.prod.min.js"], null)
//# sourceMappingURL=/p5.prod.min.80ad6b97.js.map