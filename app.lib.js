/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

! function(t, i) {
    if ("function" == typeof define && define.amd) define(i);
    else if ("object" == typeof window) {
        var e;
        window.addEventListener("load", function() {
            t.Famous = i(), e && t.Famous(e)
        }), t.Famous = function(t) {
            e = t
        }
    } else t.Famous = i()
}(this, function() {
    var requirejs, require, define;
    return function(t) {
        function i(t, i) {
            var e, s, o, n, r, a, h, u, c, p, l = i && i.split("/"),
                d = f.map,
                m = d && d["*"] || {};
            if (t && "." === t.charAt(0) && i) {
                for (l = l.slice(0, l.length - 1), t = l.concat(t.split("/")), u = 0; u < t.length; u += 1)
                    if (p = t[u], "." === p) t.splice(u, 1), u -= 1;
                    else if (".." === p) {
                    if (1 === u && (".." === t[2] || ".." === t[0])) break;
                    u > 0 && (t.splice(u - 1, 2), u -= 2)
                }
                t = t.join("/")
            }
            if ((l || m) && d) {
                for (e = t.split("/"), u = e.length; u > 0; u -= 1) {
                    if (s = e.slice(0, u).join("/"), l)
                        for (c = l.length; c > 0; c -= 1)
                            if (o = d[l.slice(0, c).join("/")], o && (o = o[s])) {
                                n = o, r = u;
                                break
                            }
                    if (n) break;
                    !a && m && m[s] && (a = m[s], h = u)
                }!n && a && (n = a, r = h), n && (e.splice(0, r, n), t = e.join("/"))
            }
            return t
        }

        function e(i, e) {
            return function() {
                return u.apply(t, g.call(arguments, 0).concat([i, e]))
            }
        }

        function s(t) {
            return function(e) {
                return i(e, t)
            }
        }

        function o(t) {
            return function(i) {
                l[t] = i
            }
        }

        function n(i) {
            if (d.hasOwnProperty(i)) {
                var e = d[i];
                delete d[i], m[i] = !0, h.apply(t, e)
            }
            if (!l.hasOwnProperty(i) && !m.hasOwnProperty(i)) throw new Error("No " + i);
            return l[i]
        }

        function r(t) {
            var i, e = t ? t.indexOf("!") : -1;
            return e > -1 && (i = t.substring(0, e), t = t.substring(e + 1, t.length)), [i, t]
        }

        function a(t) {
            return function() {
                return f && f.config && f.config[t] || {}
            }
        }
        var h, u, c, p, l = {},
            d = {},
            f = {},
            m = {},
            g = [].slice;
        c = function(t, e) {
            var o, a = r(t),
                h = a[0];
            return t = a[1], h && (h = i(h, e), o = n(h)), h ? t = o && o.normalize ? o.normalize(t, s(e)) : i(t, e) : (t = i(t, e), a = r(t), h = a[0], t = a[1], h && (o = n(h))), {
                f: h ? h + "!" + t : t,
                n: t,
                pr: h,
                p: o
            }
        }, p = {
            require: function(t) {
                return e(t)
            },
            exports: function(t) {
                var i = l[t];
                return "undefined" != typeof i ? i : l[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: l[t],
                    config: a(t)
                }
            }
        }, h = function(i, s, r, a) {
            var h, u, f, g, y, _, v = [];
            if (a = a || i, "function" == typeof r) {
                for (s = !s.length && r.length ? ["require", "exports", "module"] : s, y = 0; y < s.length; y += 1)
                    if (g = c(s[y], a), u = g.f, "require" === u) v[y] = p.require(i);
                    else if ("exports" === u) v[y] = p.exports(i), _ = !0;
                else if ("module" === u) h = v[y] = p.module(i);
                else if (l.hasOwnProperty(u) || d.hasOwnProperty(u) || m.hasOwnProperty(u)) v[y] = n(u);
                else {
                    if (!g.p) throw new Error(i + " missing " + u);
                    g.p.load(g.n, e(a, !0), o(u), {}), v[y] = l[u]
                }
                f = r.apply(l[i], v), i && (h && h.exports !== t && h.exports !== l[i] ? l[i] = h.exports : f === t && _ || (l[i] = f))
            } else i && (l[i] = r)
        }, requirejs = require = u = function(i, e, s, o, r) {
            return "string" == typeof i ? p[i] ? p[i](e) : n(c(i, e).f) : (i.splice || (f = i, e.splice ? (i = e, e = s, s = null) : i = t), e = e || function() {}, "function" == typeof s && (s = o, o = r), o ? h(t, i, e, s) : setTimeout(function() {
                h(t, i, e, s)
            }, 15), u)
        }, u.config = function(t) {
            return f = t, u
        }, define = function(t, i, e) {
            i.splice || (e = i, i = []), d[t] = [t, i, e]
        }, define.amd = {
            jQuery: !0
        }
    }(), define("lib/almond", function() {}), "undefined" == typeof document || "classList" in document.createElement("a") || ! function(t) {
        var i = "classList",
            e = "prototype",
            s = (t.HTMLElement || t.Element)[e],
            o = Object,
            n = String[e].trim || function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            r = Array[e].indexOf || function(t) {
                for (var i = 0, e = this.length; e > i; i++)
                    if (i in this && this[i] === t) return i;
                return -1
            },
            a = function(t, i) {
                this.name = t, this.code = DOMException[t], this.message = i
            },
            h = function(t, i) {
                if ("" === i) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(i)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return r.call(t, i)
            },
            u = function(t) {
                for (var i = n.call(t.className), e = i ? i.split(/\s+/) : [], s = 0, o = e.length; o > s; s++) this.push(e[s]);
                this._updateClassName = function() {
                    t.className = this.toString()
                }
            },
            c = u[e] = [],
            p = function() {
                return new u(this)
            };
        if (a[e] = Error[e], c.item = function(t) {
                return this[t] || null
            }, c.contains = function(t) {
                return t += "", -1 !== h(this, t)
            }, c.add = function(t) {
                t += "", -1 === h(this, t) && (this.push(t), this._updateClassName())
            }, c.remove = function(t) {
                t += "";
                var i = h(this, t); - 1 !== i && (this.splice(i, 1), this._updateClassName())
            }, c.toggle = function(t) {
                t += "", -1 === h(this, t) ? this.add(t) : this.remove(t)
            }, c.toString = function() {
                return this.join(" ")
            }, o.defineProperty) {
            var l = {
                get: p,
                enumerable: !0,
                configurable: !0
            };
            try {
                o.defineProperty(s, i, l)
            } catch (d) {
                -2146823252 === d.number && (l.enumerable = !1, o.defineProperty(s, i, l))
            }
        } else o[e].__defineGetter__ && s.__defineGetter__(i, p)
    }(self), define("lib/classList", function() {}), Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var i = Array.prototype.slice.call(arguments, 1),
            e = this,
            s = function() {},
            o = function() {
                return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
            };
        return s.prototype = this.prototype, o.prototype = new s, o
    }), define("lib/functionPrototypeBind", function() {}), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(function() {
            t(+new Date)
        }, 1e3 / 60)
    }), define("lib/requestAnimationFrame", function() {}), define("famous/Entity", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            var i = r.length;
            return n(i, t), i
        }

        function o(t) {
            return r[t]
        }

        function n(t, i) {
            r[t] = i
        }
        var r = [];
        e.exports = {
            register: s,
            get: o,
            set: n
        }
    }), define("famous/Matrix", ["require", "exports", "module"], function(t, i, e) {
        var s = {};
        s.precision = 1e-6, s.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], s.multiply4x4 = function o(t, i) {
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], e[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], e[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], e[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], e[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], arguments.length <= 2 ? e : o.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        }, s.multiply = function n(t, i) {
            if (!t || !i) return t || i;
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + i[14], arguments.length <= 2 ? e : n.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        }, s.move = function(t, i) {
            return i[2] || (i[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + i[0], t[13] + i[1], t[14] + i[2], 1]
        }, s.moveThen = function(t, i) {
            t[2] || (t[2] = 0);
            var e = t[0] * i[0] + t[1] * i[4] + t[2] * i[8],
                o = t[0] * i[1] + t[1] * i[5] + t[2] * i[9],
                n = t[0] * i[2] + t[1] * i[6] + t[2] * i[10];
            return s.move(i, [e, o, n])
        }, s.translate = function(t, i, e) {
            return void 0 === e && (e = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, e, 1]
        }, s.scale = function(t, i, e) {
            return void 0 === e && (e = 1), [t, 0, 0, 0, 0, i, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]
        }, s.rotateX = function(t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [1, 0, 0, 0, 0, i, e, 0, 0, -e, i, 0, 0, 0, 0, 1]
        }, s.rotateY = function(t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [i, 0, -e, 0, 0, 1, 0, 0, e, 0, i, 0, 0, 0, 0, 1]
        }, s.rotateZ = function(t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }, s.rotate = function(t, i, e) {
            var s = Math.cos(t),
                o = Math.sin(t),
                n = Math.cos(i),
                r = Math.sin(i),
                a = Math.cos(e),
                h = Math.sin(e),
                u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return u[0] = n * a, u[1] = s * h + o * r * a, u[2] = o * h - s * r * a, u[4] = -n * h, u[5] = s * a - o * r * h, u[6] = o * a + s * r * h, u[8] = r, u[9] = -o * n, u[10] = s * n, u
        }, s.rotateAxis = function(t, i) {
            var e = Math.sin(i),
                s = Math.cos(i),
                o = 1 - s,
                n = t[0] * t[0] * o,
                r = t[0] * t[1] * o,
                a = t[0] * t[2] * o,
                h = t[1] * t[1] * o,
                u = t[1] * t[2] * o,
                c = t[2] * t[2] * o,
                p = t[0] * e,
                l = t[1] * e,
                d = t[2] * e,
                f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return f[0] = n + s, f[1] = r + d, f[2] = a - l, f[4] = r - d, f[5] = h + s, f[6] = u + p, f[8] = a + l, f[9] = u - p, f[10] = c + s, f
        }, s.aboutOrigin = function(t, i) {
            var e = t[0] - (t[0] * i[0] + t[1] * i[4] + t[2] * i[8]),
                o = t[1] - (t[0] * i[1] + t[1] * i[5] + t[2] * i[9]),
                n = t[2] - (t[0] * i[2] + t[1] * i[6] + t[2] * i[10]);
            return s.move(i, [e, o, n])
        }, s.formatCSS = function(t) {
            for (var i = t.slice(0), e = 0; e < i.length; e++) i[e] < 1e-6 && i[e] > -1e-6 && (i[e] = 0);
            return "matrix3d(" + i.join() + ")"
        }, s.skew = function(t, i, e) {
            return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, Math.tan(i), Math.tan(t), 1, 0, 0, 0, 0, 1]
        }, s.getTranslate = function(t) {
            return [t[12], t[13], t[14]]
        }, s.inverse = function(t) {
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                e = t[5] * t[10] - t[6] * t[9],
                s = t[4] * t[10] - t[6] * t[8],
                o = t[4] * t[9] - t[5] * t[8],
                n = t[1] * t[10] - t[2] * t[9],
                r = t[0] * t[10] - t[2] * t[8],
                a = t[0] * t[9] - t[1] * t[8],
                h = t[1] * t[6] - t[2] * t[5],
                u = t[0] * t[6] - t[2] * t[4],
                c = t[0] * t[5] - t[1] * t[4],
                p = t[0] * e - t[1] * s + t[2] * o,
                l = 1 / p;
            return i[0] = l * e, i[1] = -l * n, i[2] = l * h, i[4] = -l * s, i[5] = l * r, i[6] = -l * u, i[8] = l * o, i[9] = -l * a, i[10] = l * c, i[12] = -t[12] * i[0] - t[13] * i[4] - t[14] * i[8], i[13] = -t[12] * i[1] - t[13] * i[5] - t[14] * i[9], i[14] = -t[12] * i[2] - t[13] * i[6] - t[14] * i[10], i
        }, s.interpret = function(t) {
            function i(t) {
                return 2 == t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
            }

            function e(t) {
                return Math.sqrt(i(t))
            }

            function o(t) {
                return 0 > t ? -1 : 1
            }
            var n = [t[0], t[1], t[2]],
                r = o(n[0]),
                a = e(n),
                h = [n[0] + r * a, n[1], n[2]],
                u = 2 / i(h),
                c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            c[0] = 1 - u * h[0] * h[0], c[5] = 1 - u * h[1] * h[1], c[10] = 1 - u * h[2] * h[2], c[1] = -u * h[0] * h[1], c[2] = -u * h[0] * h[2], c[6] = -u * h[1] * h[2], c[4] = c[1], c[8] = c[2], c[9] = c[6];
            var p = s.multiply(t, c),
                l = [p[5], p[6]],
                d = o(l[0]),
                f = e(l),
                m = [l[0] + d * f, l[1]],
                g = 2 / i(m),
                y = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            y[5] = 1 - g * m[0] * m[0], y[10] = 1 - g * m[1] * m[1], y[6] = -g * m[0] * m[1], y[9] = y[6];
            var _ = s.multiply(c, y),
                v = s.multiply(t, _),
                b = s.scale(v[0] < 0 ? -1 : 1, v[5] < 0 ? -1 : 1, v[10] < 0 ? -1 : 1);
            v = s.multiply(b, v), _ = s.multiply(_, b);
            var S = {};
            return S.translate = s.getTranslate(t), S.rotate = [Math.atan2(-_[6], _[10]), Math.asin(_[2]), Math.atan2(-_[1], _[0])], S.rotate[0] || (S.rotate[0] = 0, S.rotate[2] = Math.atan2(_[4], _[5])), S.scale = [v[0], v[5], v[10]], S.skew = [Math.atan(v[9] / S.scale[2]), Math.atan(v[8] / S.scale[2]), Math.atan(v[4] / S.scale[0])], Math.abs(S.rotate[0]) + Math.abs(S.rotate[2]) > 1.5 * Math.PI && (S.rotate[1] = Math.PI - S.rotate[1], S.rotate[1] > Math.PI && (S.rotate[1] -= 2 * Math.PI), S.rotate[1] < -Math.PI && (S.rotate[1] += 2 * Math.PI), S.rotate[0] < 0 ? S.rotate[0] += Math.PI : S.rotate[0] -= Math.PI, S.rotate[2] < 0 ? S.rotate[2] += Math.PI : S.rotate[2] -= Math.PI), S
        }, s.build = function(t) {
            var i = s.scale(t.scale[0], t.scale[1], t.scale[2]),
                e = s.skew(t.skew[0], t.skew[1], t.skew[2]),
                o = s.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
            return s.move(s.multiply(i, e, o), t.translate)
        }, s.equals = function(t, i) {
            if (t === i) return !0;
            if (!t || !i) return !1;
            for (var e = 0; e < t.length; e++)
                if (t[e] != i[e]) return !1;
            return !0
        }, s.normalizeRotation = function(t) {
            var i = t.slice(0);
            for ((i[0] == Math.PI / 2 || i[0] == -Math.PI / 2) && (i[0] = -i[0], i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] > Math.PI / 2 && (i[0] = i[0] - Math.PI, i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] < -Math.PI / 2 && (i[0] = i[0] + Math.PI, i[1] = -Math.PI - i[1], i[2] -= Math.PI); i[1] < -Math.PI;) i[1] += 2 * Math.PI;
            for (; i[1] >= Math.PI;) i[1] -= 2 * Math.PI;
            for (; i[2] < -Math.PI;) i[2] += 2 * Math.PI;
            for (; i[2] >= Math.PI;) i[2] -= 2 * Math.PI;
            return i
        }, s.vecMultiply = function(t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + i[12], t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + i[13], t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + i[14]]
        }, s.applyPerspective = function(t, i) {
            var e = i / (i - t[2]);
            return [e * t[0], e * t[1]]
        }, e.exports = s
    }), define("famous/SpecParser", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
        function s() {
            this.reset()
        }

        function o(t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8], t[0] * i[1] + t[1] * i[5] + t[2] * i[9], t[0] * i[2] + t[1] * i[6] + t[2] * i[10]]
        }
        var n = t("./Matrix");
        s.parse = function(t, i) {
            var e = new s,
                o = e.parse(t);
            return i ? void i(o) : o
        }, s.prototype.parse = function(t) {
            return this.reset(), this._parseSpec(t, n.identity, 1, [0, 0], void 0, n.identity), this.result
        }, s.prototype.reset = function() {
            this.result = {}
        }, s.prototype._parseSpec = function(t, i, e, s, r, a) {
            if (void 0 == t);
            else if ("number" == typeof t) {
                var h = t,
                    u = r ? [s[0] * r[0], s[1] * r[1], 0] : [0, 0, 0];
                i || (i = n.identity), this.result[h] = [n.move(i, o(u, a)), e, s, r]
            } else if (t instanceof Array)
                for (var c = 0; c < t.length; c++) this._parseSpec(t[c], i, e, s, r, a);
            else if (void 0 !== t.target) {
                var p = t.target,
                    l = i,
                    d = e,
                    f = s,
                    m = r;
                void 0 !== t.opacity && (d = e * t.opacity), t.transform && (l = n.multiply(t.transform, i)), t.origin && (f = t.origin), t.size && (m = t.size, void 0 === m[0] && (m[0] = r[0]), void 0 === m[1] && (m[1] = r[1]), r || (r = m), f || (f = [0, 0]), l || (l = n.identity), l = n.move(l, o([f[0] * r[0], f[1] * r[1], 0], a)), l = n.moveThen([-f[0] * m[0], -f[1] * m[1], 0], l), a = i ? i : n.identity, f = [0, 0]), this._parseSpec(p, l, d, f, m, a)
            }
        }, e.exports = s
    }), define("famous/RenderNode", ["require", "exports", "module", "./Entity", "./SpecParser", "./Matrix"], function(t, i, e) {
        function s(t) {
            this.modifiers = [], this.object = void 0, t && this.set(t), this._hasCached = !1, this._resultCache = {}, this._prevResults = {}
        }

        function o(t, i, e) {
            var s = r.parse(t);
            for (var a in s) {
                var h = n.get(a),
                    u = s[a];
                u.unshift(i);
                var c = h.commit.apply(h, u);
                c ? o(c, i, e) : e[a] = u
            }
        } {
            var n = t("./Entity"),
                r = t("./SpecParser");
            t("./Matrix")
        }
        s.prototype.get = function() {
            return this.object
        }, s.prototype.set = function(t) {
            this.object = t
        }, s.prototype.link = function(t) {
            if (t instanceof Array) this.set(t);
            else {
                var i = this.get();
                i ? i instanceof Array ? this.modifiers.unshift(t) : (this.modifiers.unshift(i), this.set(t)) : this.set(t)
            }
            return this
        }, s.prototype.add = function(t) {
            this.get() instanceof Array || this.set([]);
            var i = new s(t);
            return this.get().push(i), i
        }, s.prototype.mod = function(t) {
            return this.modifiers.push(t), this
        }, s.prototype.commit = function(t, i, e, s, r) {
            var a = this.render(void 0, this._hasCached);
            if (a !== !0) {
                for (var h in this._prevResults)
                    if (!(h in this._resultCache)) {
                        var u = n.get(h);
                        u.cleanup && u.cleanup(t.getAllocator())
                    }
                this._prevResults = this._resultCache, this._resultCache = {}, o({
                    transform: i,
                    size: r,
                    origin: s,
                    opacity: e,
                    target: a
                }, t, this._resultCache), this._hasCached = !0
            }
        }, s.prototype.render = function(t) {
            var i = t,
                e = this.get();
            if (e)
                if (e.render) i = e.render(t);
                else {
                    var s = e.length - 1;
                    for (i = new Array(s); s >= 0;) i[s] = e[s].render(), s--
                }
            for (var o = this.modifiers.length, s = 0; o > s; s++) i = this.modifiers[s].render(i);
            return i
        }, e.exports = s
    }), define("famous/EventHandler", ["require", "exports", "module"], function(t, i, e) {
        function s() {
            this.listeners = {}, this.downstream = [], this.downstreamFn = [], this.owner = this
        }

        function o(t, i) {
            for (var e = !1, s = 0; s < this.downstream.length; s++) e = this.downstream[s].emit(t, i) || e;
            for (var s = 0; s < this.downstreamFn.length; s++) e = this.downstreamFn[s](t, i) || e;
            return e
        }
        s.prototype.emit = function(t, i) {
            i || (i = {});
            var e = this.listeners[t],
                s = !1;
            if (e)
                for (var n = 0; n < e.length; n++) e[n].call(this.owner, i) && (s = !0);
            return o.call(this, t, i) || s
        }, s.prototype.on = function(t, i) {
            this.listeners[t] || (this.listeners[t] = []);
            var e = this.listeners[t].indexOf(i);
            return 0 > e && this.listeners[t].push(i), this
        }, s.prototype.unbind = function(t, i) {
            var e = this.listeners[t].indexOf(i);
            e >= 0 && this.listeners[t].splice(e, 1)
        }, s.prototype.pipe = function(t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream,
                e = i.indexOf(t);
            return 0 > e && i.push(t), t instanceof Function ? t("pipe") : t.emit("pipe"), t
        }, s.prototype.unpipe = function(t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream,
                e = i.indexOf(t);
            return e >= 0 ? (i.splice(e, 1), t instanceof Function ? t("unpipe") : t.emit("unpipe"), t) : !1
        }, s.prototype.bindThis = function(t) {
            this.owner = t
        }, s.setInputHandler = function(t, i) {
            t.emit = i.emit.bind(i)
        }, s.setOutputHandler = function(t, i) {
            i instanceof s && i.bindThis(t), t.pipe = i.pipe.bind(i), t.unpipe = i.unpipe.bind(i), t.on = i.on.bind(i), t.unbind = i.unbind.bind(i)
        }, e.exports = s
    }), define("famous/ElementAllocator", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
        }
        s.prototype.migrate = function(t) {
            var i = this.container;
            if (t !== i) {
                if (i instanceof DocumentFragment) t.appendChild(i);
                else
                    for (; i.hasChildNodes();) t.appendChild(i.removeChild(i.firstChild));
                this.container = t
            }
        }, s.prototype.allocate = function(t) {
            t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
            var i, e = this.detachedNodes[t];
            return e.length > 0 ? i = e.pop() : (i = document.createElement(t), this.container.appendChild(i)), this.nodeCount++, i
        }, s.prototype.deallocate = function(t) {
            var i = t.nodeName.toLowerCase(),
                e = this.detachedNodes[i];
            e.push(t), this.nodeCount--
        }, s.prototype.getNodeCount = function() {
            return this.nodeCount
        }, e.exports = s
    }), define("famous/Utility", ["require", "exports", "module"], function(t, i, e) {
        var s = {};
        s.Curve = {
            linear: function(t) {
                return t
            },
            easeIn: function(t) {
                return t * t
            },
            easeOut: function(t) {
                return t * (2 - t)
            },
            easeInOut: function(t) {
                return .5 >= t ? 2 * t * t : -2 * t * t + 4 * t - 1
            },
            easeOutBounce: function(t) {
                return t * (3 - 2 * t)
            },
            spring: function(t) {
                return (1 - t) * Math.sin(6 * Math.PI * t) + t
            }
        }, s.Direction = {
            X: 0,
            Y: 1,
            Z: 2
        }, s.Origin = {
            tl: [0, 0],
            t: [.5, 0],
            tr: [1, 0],
            l: [0, .5],
            c: [.5, .5],
            r: [1, .5],
            bl: [0, 1],
            b: [.5, 1],
            br: [1, 1]
        }, s.after = function(t, i) {
            var e = t;
            return function() {
                e--, 0 === e && i.apply(this, arguments)
            }
        }, s.loadURL = function(t, i) {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                4 == this.readyState && i && i(this.responseText)
            }, e.open("GET", t), e.send()
        }, s.transformInFrontMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1], s.transformInFront = {
            render: function(t) {
                return {
                    transform: s.transformInFrontMatrix,
                    target: t
                }
            }
        }, s.transformBehindMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1], s.transformBehind = {
            render: function(t) {
                return {
                    transform: s.transformBehindMatrix,
                    target: t
                }
            }
        }, s.customizeComponent = function(t, i, e) {
            var s = function(s) {
                t.call(this, i), s && this.setOptions(s), e && e.call(this)
            };
            return s.prototype = Object.create(t.prototype), s
        }, e.exports = s
    }), define("famous/MultipleTransition", ["require", "exports", "module", "./Utility"], function(t, i, e) {
        function s(t) {
            this.method = t, this._instances = [], this.state = []
        }
        var o = t("./Utility");
        s.SUPPORTS_MULTIPLE = !0, s.prototype.get = function() {
            for (var t = 0; t < this._instances.length; t++) this.state[t] = this._instances[t].get();
            return this.state
        }, s.prototype.set = function(t, i, e) {
            for (var s = o.after(t.length, e), n = 0; n < t.length; n++) this._instances[n] || (this._instances[n] = new this.method), this._instances[n].set(t[n], i, s)
        }, s.prototype.reset = function(t) {
            for (var i = 0; i < t.length; i++) this._instances[i] || (this._instances[i] = new this.method), this._instances[i].reset(t[i])
        }, e.exports = s
    }), define("famous/TweenTransition", ["require", "exports", "module", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active = !1, this._callback = void 0, this.state = 0
        }

        function o(t, i, e) {
            return (1 - e) * t + e * i
        }

        function n(t) {
            return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
        }

        function r(t, i) {
            var e = {
                curve: i.curve
            };
            return i.duration && (e.duration = i.duration), i.speed && (e.speed = i.speed), t instanceof Object && (void 0 !== t.duration && (e.duration = t.duration), t.curve && (e.curve = t.curve), t.speed && (e.speed = t.speed)), "string" == typeof e.curve && (e.curve = s.getCurve(e.curve)), e
        }
        var a = t("famous/Utility");
        s.SUPPORTS_MULTIPLE = !0, s.DEFAULT_OPTIONS = {
            curve: a.Curve.linear,
            duration: 500,
            speed: 0
        };
        var h = {};
        s.registerCurve = function(t, i) {
            return h[t] ? !1 : (h[t] = i, !0)
        }, s.unregisterCurve = function(t) {
            return h[t] ? (delete h[t], !0) : !1
        }, s.getCurve = function(t) {
            return h[t]
        }, s.getCurves = function() {
            return h
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
        }, s.prototype.set = function(t, i, e) {
            if (!i) return this.reset(t), void(e && e());
            if (this._startValue = n(this.get()), i = r(i, this.options), i.speed) {
                var s = this._startValue;
                if (s instanceof Object) {
                    var o = 0;
                    for (var a in s) o += (t[a] - s[a]) * (t[a] - s[a]);
                    i.duration = Math.sqrt(o) / i.speed
                } else i.duration = Math.abs(t - s) / i.speed
            }
            this._startTime = Date.now(), this._endValue = n(t), this._duration = i.duration, this._curve = i.curve, this._active = !0, this._callback = e
        }, s.prototype.reset = function(t) {
            if (this._callback) {
                var i = this._callback;
                this._callback = void 0, i()
            }
            this.state = n(t), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._endValue = this.state, this._active = !1
        }, s.prototype.get = function(t) {
            return this.update(t), this.state
        }, s.prototype.update = function(t) {
            if (this._active) {
                if (t || (t = Date.now()), !(this._updateTime >= t)) {
                    this._updateTime = t;
                    var i = t - this._startTime;
                    if (i >= this._duration) this.state = this._endValue, this._active = !1;
                    else if (0 > i) this.state = this._startValue;
                    else {
                        var e = i / this._duration;
                        if (this.state instanceof Object)
                            for (var s in this.state) this.state[s] = o(this._startValue[s], this._endValue[s], this._curve(e));
                        else this.state = o(this._startValue, this._endValue, this._curve(e))
                    }
                }
            } else if (this._callback) {
                var n = this._callback;
                this._callback = void 0, n()
            }
        }, s.prototype.isActive = function() {
            return this._active
        }, s.prototype.halt = function() {
            this.reset(this.get())
        }, s.registerCurve("linear", a.Curve.linear), s.registerCurve("easeIn", a.Curve.easeIn), s.registerCurve("easeOut", a.Curve.easeOut), s.registerCurve("easeInOut", a.Curve.easeInOut), s.registerCurve("easeOutBounce", a.Curve.easeOutBounce), s.registerCurve("spring", a.Curve.spring), e.exports = s
    }), define("famous/Transitionable", ["require", "exports", "module", "./Utility", "./MultipleTransition", "./TweenTransition"], function(t, i, e) {
        function s(t) {
            this.currentAction = null, this.actionQueue = [], this.callbackQueue = [], this.state = 0, this._callback = void 0, this._engineInstance = null, this._currentMethod = null, this.set(t)
        }

        function o() {
            if (this._callback) {
                var t = this._callback;
                this._callback = void 0, t()
            }
            if (this.actionQueue.length <= 0) return void this.set(this._engineInstance);
            this.currentAction = this.actionQueue.shift(), this._callback = this.callbackQueue.shift();
            var i = null,
                e = this.currentAction[0],
                s = this.currentAction[1];
            s instanceof Object && s.method ? (i = s.method, "string" == typeof i && (i = a[i])) : i = r, this._currentMethod !== i && (this._engineInstance = !(e instanceof Object) || i.SUPPORTS_MULTIPLE === !0 || e.length <= i.SUPPORTS_MULTIPLE ? new i : new n(i), this._currentMethod = i), this._engineInstance.reset(this.state), this._engineInstance.set(e, s, o.bind(this))
        }
        var n = (t("./Utility"), t("./MultipleTransition")),
            r = t("./TweenTransition"),
            a = {};
        s.registerMethod = function(t, i) {
            return t in a ? !1 : (a[t] = i, !0)
        }, s.unregisterMethod = function(t) {
            return t in a ? (delete a[t], !0) : !1
        }, s.prototype.set = function(t, i, e) {
            if (!i) return this.reset(t), void(e && e());
            var s = [t, i];
            this.actionQueue.push(s), this.callbackQueue.push(e), this.currentAction || o.call(this)
        }, s.prototype.reset = function(t) {
            this._currentMethod = null, this._engineInstance = null, this.state = t, this.currentAction = null, this.actionQueue = [], this.callbackQueue = []
        }, s.prototype.delay = function(t, i) {
            this.set(this._engineInstance, {
                duration: t,
                curve: function() {
                    return 0
                }
            }, i)
        }, s.prototype.get = function(t) {
            return this._engineInstance && (this.state = this._engineInstance.get(t)), this.state
        }, s.prototype.isActive = function() {
            return !!this.currentAction
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, e.exports = s
    }), define("famous/Context", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./SpecParser", "./ElementAllocator", "./Matrix", "./Transitionable"], function(t, i, e) {
        function s(t) {
            this.container = t, this.allocator = new a(t), this.srcNode = new n, this.eventHandler = new r, this._size = [window.innerWidth, window.innerHeight], this.perspectiveState = new u(0), this._perspective = void 0, this.eventHandler.on("resize", function() {
                this._size = o(this.container)
            }.bind(this))
        }

        function o(t) {
            return [t.clientWidth, t.clientHeight]
        }
        var n = t("./RenderNode"),
            r = t("./EventHandler"),
            a = (t("./SpecParser"), t("./ElementAllocator")),
            h = t("./Matrix"),
            u = t("./Transitionable");
        s.prototype.getAllocator = function() {
            return this.allocator
        }, s.prototype.link = function(t) {
            return this.srcNode.link(t)
        }, s.prototype.add = function(t) {
            return this.srcNode.add(t)
        }, s.prototype.mod = function(t) {
            return this.srcNode.mod(t)
        }, s.prototype.migrate = function(t) {
            t !== this.container && (this.container = t, this.allocator.migrate(t))
        }, s.prototype.getSize = function() {
            return this._size
        }, s.prototype.setSize = function(t) {
            t || (t = o(this.container)), this._size = t
        }, s.prototype.update = function() {
            var t = this.perspectiveState.get();
            t !== this._perspective && (this.container.style.perspective = t ? t.toFixed() + "px" : "", this.container.style.webkitPerspective = t ? t.toFixed() : "", this._perspective = t), this.srcNode && this.srcNode.commit(this, h.identity, 1, [0, 0], this._size)
        }, s.prototype.getOutputTransform = function(t) {
            var i = this.parsedCache;
            if (i) {
                var e = t.id,
                    s = {
                        transform: i.transforms[e],
                        opacity: i.opacities[e]
                    };
                if (i.origins[e] && (s.origin = i.origins[e]), i.groups[e]) {
                    var o = i.groups[e];
                    s.transform = h.multiply(s.transform, i.groupTransforms[o]), i.groupOpacities[o] && (s.opacity *= i.groupOpacities[o])
                }
                return s
            }
        }, s.prototype.getPerspective = function() {
            return this.perspectiveState.get()
        }, s.prototype.setPerspective = function(t, i, e) {
            return this.perspectiveState.set(t, i, e)
        }, s.prototype.emit = function(t, i) {
            return this.eventHandler.emit(t, i)
        }, s.prototype.on = function(t, i) {
            return this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            return this.eventHandler.unbind(t, i)
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, e.exports = s
    }), define("famous/Engine", ["require", "exports", "module", "./Context", "./EventHandler"], function(t, i, e) {
        function s() {
            var t = Date.now();
            if (T && T > t - w) return void requestAnimationFrame(s);
            x = t - w, w = t, z.emit("prerender");
            for (var i = 0; i < b.length; i++) b[i].call(this);
            for (b = []; S.length && Date.now() - t < M;) S.shift().call(this);
            for (var i = 0; i < v.length; i++) v[i].update();
            z.emit("postrender"), requestAnimationFrame(s)
        }

        function o(t) {
            if (document.activeElement && "INPUT" == document.activeElement.nodeName) return void document.activeElement.addEventListener("blur", function e() {
                this.removeEventListener("blur", e), o(t)
            });
            window.scrollTo(0, 0);
            for (var i = 0; i < v.length; i++) v[i].emit("resize");
            z.emit("resize")
        }

        function n(t) {
            return z.pipe(t)
        }

        function r(t) {
            return z.unpipe(t)
        }

        function a(t, i) {
            z.on(t, i)
        }

        function h(t, i) {
            z.emit(t, i)
        }

        function u(t, i) {
            z.unbind(t, i)
        }

        function c() {
            return 1e3 / x
        }

        function p(t) {
            T = Math.floor(1e3 / t)
        }

        function l(t) {
            void 0 === t ? (t = document.createElement("div"), t.classList.add("container"), document.body.appendChild(t)) : t instanceof Element || (t = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
            var i = new y(t);
            return v.push(i), i
        }

        function d(t) {
            b.push(t)
        }

        function f(t) {
            return C[t]
        }

        function m(t) {
            var i = C.length;
            return C[i] = t, i
        }

        function g(t) {
            S.push(t)
        }
        var y = t("./Context"),
            _ = t("./EventHandler"),
            v = [],
            b = [],
            S = [],
            w = Date.now(),
            x = void 0,
            T = void 0,
            z = new _,
            M = 10,
            C = [];
        requestAnimationFrame(s), window.addEventListener("resize", o, !1), o(), window.addEventListener("touchmove", function(t) {
            t.preventDefault()
        }, !1);
        for (var P = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mousewheel", "wheel", "resize"], k = 0; k < P.length; k++) {
            var O = P[k];
            document.body.addEventListener(O, function(t) {
                z.emit(t.type, t, !1)
            }, !1)
        }
        e.exports = {
            on: a,
            defer: g,
            emit: h,
            unbind: u,
            pipe: n,
            unpipe: r,
            createContext: l,
            getFPS: c,
            setFPSCap: p,
            nextTick: d,
            getEntity: f,
            registerEntity: m
        }
    }), define("famous-utils/Time", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
        function s(t, i) {
            var e = Date.now(),
                s = function() {
                    var s = Date.now();
                    s - e >= i && (t(), e = Date.now())
                };
            return h.on("prerender", s), s
        }

        function o(t) {
            h.unbind("prerender", t)
        }

        function n(t, i, e) {
            var s = Date.now(),
                o = function() {
                    var n = Date.now(),
                        r = (n - s) / t;
                    return n - s >= t ? (i(1), h.unbind("prerender", o), void(e && e())) : void i(r)
                };
            h.on("prerender", o)
        }

        function r(t, i) {
            var e = Date.now(),
                s = function() {
                    var o = Date.now();
                    return o - e >= i ? (h.unbind("prerender", s), void t()) : void 0
                };
            return h.on("prerender", s), s
        }

        function a(t) {
            h.unbind("prerender", t)
        }
        var h = t("famous/Engine");
        e.exports = {
            setInterval: s,
            removeInterval: o,
            executeOver: n,
            setTimeout: r,
            removeTimeout: a
        }
    }), define("famous-utils/Utils", ["require", "exports", "module", "./Time", "famous/Matrix"], function(t, i, e) {
        var s = t("./Time"),
            o = t("famous/Matrix"),
            n = {
                rad2deg: function(t) {
                    return 57.2957795 * t
                },
                deg2rad: function(t) {
                    return .0174532925 * t
                },
                distance: function(t, i, e, s) {
                    var o = e - t,
                        n = s - i;
                    return Math.sqrt(o * o + n * n)
                },
                distance3D: function(t, i, e, s, o, n) {
                    var r = s - t,
                        a = o - i,
                        h = n - e;
                    return Math.sqrt(r * r + a * a + h * h)
                },
                map: function(t, i, e, s, o, n) {
                    var r = (t - i) / (e - i) * (o - s) + s;
                    return n && (o > s ? r > o ? r = o : s > r && (r = s) : o > r ? r = o : r > s && (r = s)), r
                },
                limit: function(t, i, e) {
                    return t = Math.min(t, e), t = Math.max(t, i)
                },
                perspective: function(t, i, e, s) {
                    var o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                        n = 1 / Math.tan(t / 2),
                        r = 1 / (e - s);
                    return o[0] = n / i, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = n, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (s + e) * r, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = 2 * s * e * r, o[15] = 0, o
                },
                ortho: function(t, i, e, s, o, n) {
                    var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                        a = -(i + t) / (i - t),
                        h = -(s + e) / (s - e),
                        u = -(n + o) / (n - o);
                    return r[0] = 2 / (i - t), r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 / (s - e), r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = -2 / (n - o), r[11] = -1, r[12] = a, r[13] = h, r[14] = u, r[15] = 1, r
                },
                normalFromFM: function(t, i) {
                    var e = i[0],
                        s = i[1],
                        o = i[2],
                        n = i[3],
                        r = i[4],
                        a = i[5],
                        h = i[6],
                        u = i[7],
                        c = i[8],
                        p = i[9],
                        l = i[10],
                        d = i[11],
                        f = i[12],
                        m = i[13],
                        g = i[14],
                        y = i[15],
                        _ = e * a - s * r,
                        v = e * h - o * r,
                        b = e * u - n * r,
                        S = s * h - o * a,
                        w = s * u - n * a,
                        x = o * u - n * h,
                        T = c * m - p * f,
                        z = c * g - l * f,
                        M = c * y - d * f,
                        C = p * g - l * m,
                        P = p * y - d * m,
                        k = l * y - d * g,
                        O = _ * k - v * P + b * C + S * M - w * z + x * T;
                    return O ? (O = 1 / O, t[0] = (a * k - h * P + u * C) * O, t[1] = (h * M - r * k - u * z) * O, t[2] = (r * P - a * M + u * T) * O, t[3] = (o * P - s * k - n * C) * O, t[4] = (e * k - o * M + n * z) * O, t[5] = (s * M - e * P - n * T) * O, t[6] = (m * x - g * w + y * S) * O, t[7] = (g * b - f * x - y * v) * O, t[8] = (f * w - m * b + y * _) * O, t) : null
                },
                clamp: function(t, i, e) {
                    return i > t ? i : t > e ? e : t
                },
                color: function(t, i, e, s) {
                    return "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                },
                backgroundTransparent: function() {
                    return {
                        backgroundColor: "transparent"
                    }
                },
                backgroundColor: function(t, i, e, s) {
                    return {
                        backgroundColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderRadius: function(t) {
                    return {
                        borderRadius: t + "px"
                    }
                },
                borderTopWidth: function(t) {
                    return {
                        borderTopWidth: t + "px"
                    }
                },
                borderBottomWidth: function(t) {
                    return {
                        borderBottomWidth: t + "px"
                    }
                },
                borderLeftWidth: function(t) {
                    return {
                        borderLeftWidth: t + "px"
                    }
                },
                borderRightWidth: function(t) {
                    return {
                        borderRightWidth: t + "px"
                    }
                },
                borderWidth: function(t) {
                    return {
                        borderWidth: t + "px"
                    }
                },
                borderColor: function(t, i, e, s) {
                    return 0 == s ? {
                        borderColor: "transparent"
                    } : {
                        borderColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderTopColor: function(t, i, e, s) {
                    return 0 == s ? {
                        borderTopColor: "transparent"
                    } : {
                        borderTopColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderBottomColor: function(t, i, e, s) {
                    return 0 == s ? {
                        borderBottomColor: "transparent"
                    } : {
                        borderBottomColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderRightColor: function(t, i, e, s) {
                    return 0 == s ? {
                        borderRightColor: "transparent"
                    } : {
                        borderRightColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderLeftColor: function(t, i, e, s) {
                    return 0 == s ? {
                        borderLeftColor: "transparent"
                    } : {
                        borderLeftColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderStyle: function(t) {
                    return {
                        borderStyle: t
                    }
                },
                borderTopStyle: function(t) {
                    return {
                        borderTopStyle: t
                    }
                },
                borderBottomStyle: function(t) {
                    return {
                        borderBottomStyle: t
                    }
                },
                borderRightStyle: function(t) {
                    return {
                        borderRightStyle: t
                    }
                },
                borderLeftStyle: function(t) {
                    return {
                        borderLeftStyle: t
                    }
                },
                colorHSL: function(t, i, e, s) {
                    return "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                },
                backgroundTransparent: function() {
                    return {
                        backgroundColor: "transparent"
                    }
                },
                backgroundColorHSL: function(t, i, e, s) {
                    return {
                        backgroundColor: "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                    }
                },
                backfaceVisible: function(t) {
                    return t ? {
                        "backface-visibility": "visible",
                        "-webkit-backface-visibility": "visible",
                        "-moz-backface-visibility": "visible",
                        "-ms-backface-visibility": "visible"
                    } : {
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden",
                        "-moz-backface-visibility": "hidden",
                        "-ms-backface-visibility": "hidden"
                    }
                },
                clipCircle: function(t, i, e) {
                    return {
                        "-webkit-clip-path": "circle(" + t + "px," + i + "px," + e + "px)"
                    }
                },
                getWidth: function() {
                    return window.innerWidth
                },
                getHeight: function() {
                    return window.innerHeight
                },
                getCenter: function() {
                    return [.5 * n.getWidth(), .5 * n.getHeight()]
                },
                isMobile: function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
                },
                isString: function(t) {
                    return "string" == typeof t || t instanceof String
                },
                isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                extend: function(t, i) {
                    for (var e in i) t[e] = i[e];
                    return t
                },
                getDevicePixelRatio: function() {
                    return window.devicePixelRatio ? window.devicePixelRatio : 1
                },
                supportsWebGL: function() {
                    return /Android|Chrome|Mozilla/i.test(navigator.appCodeName) && window.WebGLRenderingContext ? !0 : !1
                },
                getSurfacePosition: function(t) {
                    function i(t) {
                        var s = o(t);
                        if ("" !== s && void 0 !== s) {
                            var n = e(s);
                            r[0] += n[0], r[1] += n[1], r[2] += n[2]
                        }
                        t.parentElement !== document.body && i(t.parentNode)
                    }

                    function e(t) {
                        var i = [];
                        t = s(t), i[0] = parseInt(t[12].replace(" ", "")), i[1] = parseInt(t[13].replace(" ", "")), i[2] = parseInt(t[14].replace(" ", ""));
                        for (var e = 0; e < i.length; e++) "undefined" == typeof i[e] && (i[e] = 0);
                        return i
                    }

                    function s(t) {
                        return t = t.replace("matrix3d(", ""), t = t.replace(")", ""), t.split(",")
                    }

                    function o(t) {
                        var i = t.style.webkitTransform || t.style.transform;
                        return i
                    }
                    var n = t._currTarget,
                        r = [0, 0, 0];
                    return n ? (i(n), r) : void 0
                },
                getCenterMatrix: function(t, i, e) {
                    return void 0 == e && (e = 0), o.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], e)
                },
                debounce: function(t, i) {
                    var e, o, n, r, a;
                    return function() {
                        o = this, a = arguments, n = new Date;
                        var h = function() {
                            var u = new Date - n;
                            i > u ? e = s.setTimeout(h, i - u) : (e = null, r = t.apply(o, a))
                        };
                        return e || (e = s.setTimeout(h, i)), r
                    }
                },
                hasUserMedia: function() {
                    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
                },
                getUserMedia: function() {
                    return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
                },
                isWebkit: function() {
                    return !!window.webkitURL
                }
            };
        e.exports = n
    }), define("famous-utils/KeyCodes", ["require", "exports", "module"], function(t, i, e) {
        var s = {
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            a: 97,
            b: 98,
            c: 99,
            d: 100,
            e: 101,
            f: 102,
            g: 103,
            h: 104,
            i: 105,
            j: 106,
            k: 107,
            l: 108,
            m: 109,
            n: 110,
            o: 111,
            p: 112,
            q: 113,
            r: 114,
            s: 115,
            t: 116,
            u: 117,
            v: 118,
            w: 119,
            x: 120,
            y: 121,
            z: 122,
            ENTER: 13,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39,
            UP_ARROW: 38,
            DOWN_ARROW: 40,
            SPACE: 32,
            SHIFT: 16,
            TAB: 9
        };
        e.exports = s
    }), define("famous/OptionsManager", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
        function s(t) {
            this._value = t, this.eventOutput = null
        }

        function o() {
            this.eventOutput = new n, this.eventOutput.bindThis(this), n.setOutputHandler(this, this.eventOutput)
        }
        var n = t("./EventHandler");
        s.prototype.patch = function() {
            for (var t = this._value, i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                for (var s in e) !(s in t && "object" == typeof t[s]) || t[s] instanceof Array || "object" != typeof e[s] || e[s] instanceof Array ? this.set(s, e[s]) : (t.hasOwnProperty(s) || (t[s] = Object.create(t[s])), this.key(s).patch(e[s]), this.eventOutput && this.eventOutput.emit("change", {
                    id: s,
                    value: this.key(s).value()
                }))
            }
            return this
        }, s.prototype.setOptions = s.prototype.patch, s.prototype.key = function(t) {
            var i = new s(this._value[t]);
            return (!(i._value instanceof Object) || i._value instanceof Array) && (i._value = {}), i
        }, s.prototype.get = function(t) {
            return this._value[t]
        }, s.prototype.getOptions = s.prototype.get, s.prototype.set = function(t, i) {
            var e = this.get(t);
            return this._value[t] = i, this.eventOutput && i !== e && this.eventOutput.emit("change", {
                id: t,
                value: i
            }), this
        }, s.prototype.value = function() {
            return this._value
        }, s.prototype.on = function() {
            return o.call(this), this.on.apply(this, arguments)
        }, s.prototype.unbind = function() {
            return o.call(this), this.unbind.apply(this, arguments)
        }, s.prototype.pipe = function() {
            return o.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function() {
            return o.call(this), this.unpipe.apply(this, arguments)
        }, e.exports = s
    }), define("famous/View", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./OptionsManager"], function(t, i, e) {
        function s(t) {
            this.node = new o, this.eventInput = new n, this.eventOutput = new n, n.setInputHandler(this, this.eventInput), n.setOutputHandler(this, this.eventOutput), this.options = Object.create(this.constructor.DEFAULT_OPTIONS || s.DEFAULT_OPTIONS), this.optionsManager = new r(this.options), t && this.setOptions(t)
        }
        var o = t("./RenderNode"),
            n = t("./EventHandler"),
            r = t("./OptionsManager");
        s.DEFAULT_OPTIONS = null, s.prototype.getOptions = function() {
            return this.optionsManager.value()
        }, s.prototype.setOptions = function(t) {
            this.optionsManager.patch(t)
        }, s.prototype._add = function() {
            return this.node.add.apply(this.node, arguments)
        }, s.prototype._link = function() {
            return this.node.link.apply(this.node, arguments)
        }, s.prototype.render = function() {
            return this.node.render.apply(this.node, arguments)
        }, s.prototype.getSize = function() {
            var t = this.node.get();
            return t.getSize ? t.getSize.apply(t, arguments) : this.options.size
        }, e.exports = s
    }), define("famous-scene/Scene", ["require", "exports", "module", "famous-utils/Utils", "famous-utils/KeyCodes", "famous/Engine", "famous/EventHandler", "famous/View"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.width = o.getWidth(), this.height = o.getHeight(), this.mouseDown = !1, this.callbacks = {}, this.bindEvents()
        }
        var o = t("famous-utils/Utils"),
            n = (t("famous-utils/KeyCodes"), t("famous/Engine"), t("famous/EventHandler"), t("famous/View"));
        s.prototype = Object.create(n.prototype), s.prototype.bindEvents = function() {
            this.callbacks.prerender = this.update.bind(this), this.callbacks.touchstart = this.touchstart.bind(this), this.callbacks.touchmove = this.touchmove.bind(this), this.callbacks.touchend = this.touchend.bind(this), this.callbacks.keypress = this.keypress.bind(this), this.callbacks.resize = o.debounce(this.resize.bind(this), 333), this.callbacks.mousedown = this._mousedown.bind(this), this.callbacks.mousemove = this._mousemove.bind(this), this.callbacks.mouseover = this._mouseover.bind(this), this.callbacks.mouseup = this._mouseup.bind(this), this.callbacks.mouseout = this._mouseout.bind(this), this.callbacks.keydown = this.keydown.bind(this), this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++) this.eventInput.on(t[i], this.callbacks[t[i]])
        }, s.prototype.unbindEvents = function() {
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++) this.unbind(t[i], this.callbacks[t[i]])
        }, s.prototype.activate = function(t) {
            t && t()
        }, s.prototype.update = function() {}, s.prototype.render = function() {
            return this.node.render()
        }, s.prototype.deactivate = function(t) {
            t && t()
        }, s.prototype.touchstart = function() {}, s.prototype.touchmove = function() {}, s.prototype.touchend = function() {}, s.prototype._mousedown = function(t) {
            this.mouseDown = !0, this.mousedown(t)
        }, s.prototype._mousemove = function(t) {
            this.mouseDown === !0 ? this.mousedrag(t) : this.mousemove(t)
        }, s.prototype._mouseover = function(t) {
            this.mouseover(t)
        }, s.prototype._mouseup = function(t) {
            this.mouseDown = !1, this.mouseup(t)
        }, s.prototype._mouseout = function(t) {
            this.mouseout(t)
        }, s.prototype.mousedown = function() {}, s.prototype.mouseup = function() {}, s.prototype.mousemove = function() {}, s.prototype.mouseover = function() {}, s.prototype.mouseout = function() {}, s.prototype.mousedrag = function() {}, s.prototype.keypress = function() {}, s.prototype.keydown = function() {}, s.prototype.keyup = function() {}, s.prototype.keypress = function() {}, s.prototype.resize = function() {
            this.width = o.getWidth(), this.height = o.getHeight()
        }, s.prototype.setController = function(t) {
            this.controller = t
        }, e.exports = s
    }), define("famous/Surface", ["require", "exports", "module", "./Entity", "./EventHandler", "./Matrix"], function(t, i, e) {
        function s(t) {
            this.options = {}, this.properties = {}, this.content = "", this.classList = [], this.size = void 0, this._classesDirty = !0, this._stylesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._dirtyClasses = [], this._matrix = void 0, this._opacity = 1, this._origin = void 0, this._size = void 0, this.eventForwarder = function(t) {
                this.emit(t.type, t)
            }.bind(this), this.eventHandler = new d, this.eventHandler.bindThis(this), this.id = l.register(this), t && this.setOptions(t), this._currTarget = void 0
        }

        function o(t) {
            for (var i = this.surfaceEvents, e = 0; e < i.length; e++) t.addEventListener(i[e], this.eventForwarder)
        }

        function r(t) {
            for (var i = this.surfaceEvents, e = 0; e < i.length; e++) t.removeEventListener(i[e], this.eventForwarder)
        }

        function a(t) {
            for (var i = 0; i < this._dirtyClasses.length; i++) t.classList.remove(this._dirtyClasses[i]);
            this._dirtyClasses = []
        }

        function h(t) {
            for (var i in this.properties) t.style[i] = this.properties[i]
        }

        function u(t) {
            for (var i in this.properties) t.style[i] = ""
        }

        function c(t, i) {
            return t || i ? t && i ? t[0] == i[0] && t[1] == i[1] : !1 : !0
        }

        function p(t) {
            return (100 * t[0]).toFixed(6) + "% " + (100 * t[1]).toFixed(6) + "%"
        }
        var l = t("./Entity"),
            d = t("./EventHandler"),
            f = t("./Matrix"),
            m = void 0 !== document.body.style.webkitTransform;
        s.prototype.surfaceEvents = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "mousewheel", "wheel"], s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.on = function(t, i) {
            this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            this.eventHandler.unbind(t, i)
        }, s.prototype.emit = function(t, i) {
            i && !i.origin && (i.origin = this);
            var e = this.eventHandler.emit(t, i);
            return e && i.stopPropagation && i.stopPropagation(), e
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.pipeEvents = function() {
            return console.warn("pipeEvents is deprecated; use pipe instead"), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, s.prototype.render = function() {
            return this.id
        }, s.prototype.setProperties = function(t) {
            for (n in t) this.properties[n] = t[n];
            this._stylesDirty = !0
        }, s.prototype.getProperties = function() {
            return this.properties
        }, s.prototype.addClass = function(t) {
            this.classList.indexOf(t) < 0 && (this.classList.push(t), this._classesDirty = !0)
        }, s.prototype.removeClass = function(t) {
            var i = this.classList.indexOf(t);
            i >= 0 && (this._dirtyClasses.push(this.classList.splice(i, 1)[0]), this._classesDirty = !0)
        }, s.prototype.setClasses = function(t) {
            for (var i = [], e = 0; e < this.classList.length; e++) t.indexOf(this.classList[e]) < 0 && i.push(this.classList[e]);
            for (var e = 0; e < i.length; e++) this.removeClass(i[e]);
            for (var e = 0; e < t.length; e++) this.addClass(t[e])
        }, s.prototype.getClassList = function() {
            return this.classList
        }, s.prototype.setContent = function(t) {
            this.content != t && (this.content = t, this._contentDirty = !0)
        }, s.prototype.getContent = function() {
            return this.content
        }, s.prototype.setOptions = function(t) {
            t.size && this.setSize(t.size), t.classes && this.setClasses(t.classes), t.properties && this.setProperties(t.properties), t.content && this.setContent(t.content)
        };
        var g, y, _;
        g = m ? function(t, i) {
            t.style.webkitTransform = f.formatCSS(i)
        } : function(t, i) {
            t.style.transform = f.formatCSS(i)
        }, y = m ? function(t, i) {
            t.style.webkitTransformOrigin = p(i)
        } : function(t, i) {
            t.style.transformOrigin = p(i)
        }, _ = m ? function(t) {
            t.style.webkitTransform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        } : function(t) {
            t.style.transform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        }, s.prototype.setup = function(t) {
            var i = t.allocate(this.elementType);
            if (this.elementClass)
                if (this.elementClass instanceof Array)
                    for (var e = 0; e < this.elementClass.length; e++) i.classList.add(this.elementClass[e]);
                else i.classList.add(this.elementClass);
            o.call(this, i), y(i, [0, 0]), this._currTarget = i, this._stylesDirty = !0, this._classesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._matrix = void 0, this._opacity = void 0, this._origin = void 0, this._size = void 0
        }, s.prototype.commit = function(t, i, e, s, o) {
            this._currTarget || this.setup(t.getAllocator());
            var n = this._currTarget;
            if (this.size) {
                var r = o;
                o = this.size.slice(0), void 0 === o[0] && r[0] && (o[0] = r[0]), void 0 === o[1] && r[1] && (o[1] = r[1])
            }
            if (c(this._size, o) || (this._size = o.slice(0), this._sizeDirty = !0), !i && this._matrix) return this._matrix = void 0, this._opacity = 0, void _(n);
            if (this._opacity !== e && (this._opacity = e, n.style.opacity = Math.min(e, .999999)), !c(this._origin, s) || !f.equals(this._matrix, i)) {
                i || (i = f.identity), s || (s = [0, 0]), this._origin = s.slice(0), this._matrix = i;
                var u = i;
                s && (u = f.moveThen([-this._size[0] * s[0], -this._size[1] * s[1]], i)), g(n, u)
            }
            if (this._classesDirty || this._stylesDirty || this._sizeDirty || this._contentDirty) {
                if (this._classesDirty) {
                    a.call(this, n);
                    for (var p = this.getClassList(), l = 0; l < p.length; l++) n.classList.add(p[l]);
                    this._classesDirty = !1
                }
                this._stylesDirty && (h.call(this, n), this._stylesDirty = !1), this._sizeDirty && (this._size && (n.style.width = this._size[0] !== !0 ? this._size[0] + "px" : "", n.style.height = this._size[1] !== !0 ? this._size[1] + "px" : ""), this._sizeDirty = !1), this._contentDirty && (this.deploy(n), this._contentDirty = !1)
            }
        }, s.prototype.cleanup = function(t) {
            var i = this._currTarget;
            this.recall(i), i.style.width = "", i.style.height = "", this._size = void 0, u.call(this, i);
            var e = this.getClassList();
            a.call(this, i);
            for (var s = 0; s < e.length; s++) i.classList.remove(e[s]);
            r.call(this, i), this._currTarget = void 0, t.deallocate(i), _(i)
        }, s.prototype.deploy = function(t) {
            var i = this.getContent();
            "string" == typeof i ? t.innerHTML = i : t.appendChild(i)
        }, s.prototype.recall = function(t) {
            for (var i = document.createDocumentFragment(); t.hasChildNodes();) i.appendChild(t.firstChild);
            this.setContent(i)
        }, s.prototype.getSize = function(t) {
            return t ? this._size : this.size || this._size
        }, s.prototype.setSize = function(t) {
            this.size = t ? t.slice(0, 2) : void 0, this._sizeDirty = !0
        }, e.exports = s
    }), define("famous/Modifier", ["require", "exports", "module", "./Matrix", "./Transitionable", "./Utility"], function(t, i, e) {
        function s(t) {
            var i = o.identity,
                e = 1,
                s = void 0,
                r = void 0;
            arguments.length > 1 || arguments[0] instanceof Array ? (void 0 !== arguments[0] && (i = arguments[0]), void 0 !== arguments[1] && (e = arguments[1]), s = arguments[2], r = arguments[3]) : t && (t.transform && (i = t.transform), void 0 !== t.opacity && (e = t.opacity), t.origin && (s = t.origin), t.size && (r = t.size)), this.transformTranslateState = new n([0, 0, 0]), this.transformRotateState = new n([0, 0, 0]), this.transformSkewState = new n([0, 0, 0]), this.transformScaleState = new n([1, 1, 1]), this.opacityState = new n(e), this.originState = new n([0, 0]), this.sizeState = new n([0, 0]), this._originEnabled = !1, this._sizeEnabled = !1, this.setTransform(i), this.setOpacity(e), this.setOrigin(s), this.setSize(r)
        }
        var o = t("./Matrix"),
            n = t("./Transitionable"),
            r = t("./Utility");
        s.prototype.getTransform = function() {
            return this.isActive() ? o.build({
                translate: this.transformTranslateState.get(),
                rotate: this.transformRotateState.get(),
                skew: this.transformSkewState.get(),
                scale: this.transformScaleState.get()
            }) : this.getFinalTransform()
        }, s.prototype.getFinalTransform = function() {
            return this._finalTransform
        }, s.prototype.setTransform = function(t, i, e) {
            var s = e ? r.after(4, e) : void 0;
            if (i) {
                if (this._transformDirty) {
                    var n = o.interpret(this.getFinalTransform());
                    this.transformTranslateState.set(n.translate), this.transformRotateState.set(n.rotate), this.transformSkewState.set(n.skew), this.transformScaleState.set(n.scale), this._transformDirty = !1
                }
                var a = o.interpret(t);
                this.transformTranslateState.set(a.translate, i, s), this.transformRotateState.set(a.rotate, i, s), this.transformSkewState.set(a.skew, i, s), this.transformScaleState.set(a.scale, i, s)
            } else this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this._transformDirty = !0;
            this._finalTransform = t
        }, s.prototype.getOpacity = function() {
            return this.opacityState.get()
        }, s.prototype.setOpacity = function(t, i, e) {
            this.opacityState.set(t, i, e)
        }, s.prototype.getOrigin = function() {
            return this._originEnabled ? this.originState.get() : void 0
        }, s.prototype.setOrigin = function(t, i, e) {
            this._originEnabled = !!t, t || (t = [0, 0]), t instanceof Array || (t = r.origins[t]), this.originState.set(t, i, e)
        }, s.prototype.getSize = function() {
            return this._sizeEnabled ? this.sizeState.get() : void 0
        }, s.prototype.setSize = function(t, i, e) {
            this._sizeEnabled = !!t, t || (t = [0, 0]), this.sizeState.set(t, i, e)
        }, s.prototype.setDefaultTransition = function(t) {
            this.transformTranslateState.setDefault(t), this.transformRotateState.setDefault(t), this.transformSkewState.setDefault(t), this.transformScaleState.setDefault(t), this.opacityState.setDefault(t), this.originState.setDefault(t), this.sizeState.setDefault(t)
        }, s.prototype.halt = function() {
            this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this.opacityState.halt(), this.originState.halt(), this.sizeState.halt()
        }, s.prototype.isActive = function() {
            return this.transformTranslateState.isActive() || this.transformRotateState.isActive() || this.transformSkewState.isActive() || this.transformScaleState.isActive()
        }, s.prototype.render = function(t) {
            return {
                transform: this.getTransform(),
                opacity: this.getOpacity(),
                origin: this.getOrigin(),
                size: this.getSize(),
                target: t
            }
        }, e.exports = s
    }), define("famous-animation/Easing", ["require", "exports", "module"], function(t, i, e) {
        var s = {
            linear: function(t, i, e, s) {
                return t * (e / s) + i
            },
            linearNorm: function(t) {
                return t
            },
            inQuad: function(t, i, e, s) {
                return e * (t /= s) * t + i
            },
            inQuadNorm: function(t) {
                return t * t
            },
            outQuad: function(t, i, e, s) {
                return -e * (t /= s) * (t - 2) + i
            },
            outQuadNorm: function(t) {
                return -(t -= 1) * t + 1
            },
            inOutQuad: function(t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t + i : -e / 2 * (--t * (t - 2) - 1) + i
            },
            inOutQuadNorm: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            inCubic: function(t, i, e, s) {
                return e * (t /= s) * t * t + i
            },
            inCubicNorm: function(t) {
                return t * t * t
            },
            outCubic: function(t, i, e, s) {
                return e * ((t = t / s - 1) * t * t + 1) + i
            },
            outCubicNorm: function(t) {
                return --t * t * t + 1
            },
            inOutCubic: function(t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t + i : e / 2 * ((t -= 2) * t * t + 2) + i
            },
            inOutCubicNorm: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            inQuart: function(t, i, e, s) {
                return e * (t /= s) * t * t * t + i
            },
            inQuartNorm: function(t) {
                return t * t * t * t
            },
            outQuart: function(t, i, e, s) {
                return -e * ((t = t / s - 1) * t * t * t - 1) + i
            },
            outQuartNorm: function(t) {
                return -(--t * t * t * t - 1)
            },
            inOutQuart: function(t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t * t + i : -e / 2 * ((t -= 2) * t * t * t - 2) + i
            },
            inOutQuartNorm: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            inQuint: function(t, i, e, s) {
                return e * (t /= s) * t * t * t * t + i
            },
            inQuintNorm: function(t) {
                return t * t * t * t * t
            },
            outQuint: function(t, i, e, s) {
                return e * ((t = t / s - 1) * t * t * t * t + 1) + i
            },
            outQuintNorm: function(t) {
                return --t * t * t * t * t + 1
            },
            inOutQuint: function(t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t * t * t + i : e / 2 * ((t -= 2) * t * t * t * t + 2) + i
            },
            inOutQuintNorm: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            inSine: function(t, i, e, s) {
                return -e * Math.cos(t / s * (Math.PI / 2)) + e + i
            },
            inSineNorm: function(t) {
                return -1 * Math.cos(t * (Math.PI / 2)) + 1
            },
            outSine: function(t, i, e, s) {
                return e * Math.sin(t / s * (Math.PI / 2)) + i
            },
            outSineNorm: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            inOutSine: function(t, i, e, s) {
                return -e / 2 * (Math.cos(Math.PI * t / s) - 1) + i
            },
            inOutSineNorm: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            inExpo: function(t, i, e, s) {
                return 0 == t ? i : e * Math.pow(2, 10 * (t / s - 1)) + i
            },
            inExpoNorm: function(t) {
                return 0 == t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            outExpo: function(t, i, e, s) {
                return t == s ? i + e : e * (-Math.pow(2, -10 * t / s) + 1) + i
            },
            outExpoNorm: function(t) {
                return 1 == t ? 1 : -Math.pow(2, -10 * t) + 1
            },
            inOutExpo: function(t, i, e, s) {
                return 0 == t ? i : t == s ? i + e : (t /= s / 2) < 1 ? e / 2 * Math.pow(2, 10 * (t - 1)) + i : e / 2 * (-Math.pow(2, -10 * --t) + 2) + i
            },
            inOutExpoNorm: function(t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            inCirc: function(t, i, e, s) {
                return -e * (Math.sqrt(1 - (t /= s) * t) - 1) + i
            },
            inCircNorm: function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            },
            outCirc: function(t, i, e, s) {
                return e * Math.sqrt(1 - (t = t / s - 1) * t) + i
            },
            outCircNorm: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            inOutCirc: function(t, i, e, s) {
                return (t /= s / 2) < 1 ? -e / 2 * (Math.sqrt(1 - t * t) - 1) + i : e / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
            },
            inOutCircNorm: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            inElastic: function(t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (1 == (t /= s)) return i + e;
                if (n || (n = .3 * s), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n)) + i
            },
            inElasticNorm: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e)))
            },
            outElastic: function(t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (1 == (t /= s)) return i + e;
                if (n || (n = .3 * s), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return r * Math.pow(2, -10 * t) * Math.sin(2 * (t * s - o) * Math.PI / n) + e + i
            },
            outElasticNorm: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (t - i) * Math.PI / e) + 1)
            },
            inOutElastic: function(t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (2 == (t /= s / 2)) return i + e;
                if (n || (n = .3 * s * 1.5), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) + i : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * s - o) * Math.PI / n) * .5 + e + i
            },
            inOutElasticNorm: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - i) * Math.PI / e) * .5 + 1)
            },
            inBack: function(t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), e * (t /= s) * t * ((o + 1) * t - o) + i
            },
            inBackNorm: function(t, i) {
                return void 0 == i && (i = 1.70158), t * t * ((i + 1) * t - i)
            },
            outBack: function(t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), e * ((t = t / s - 1) * t * ((o + 1) * t + o) + 1) + i
            },
            outBackNorm: function(t, i) {
                return void 0 == i && (i = 1.70158), --t * t * ((i + 1) * t + i) + 1
            },
            inOutBack: function(t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), (t /= s / 2) < 1 ? e / 2 * t * t * (((o *= 1.525) + 1) * t - o) + i : e / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i
            },
            inOutBackNorm: function(t, i) {
                return void 0 == i && (i = 1.70158), (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
            },
            inBounce: function(t, i, e, o) {
                return e - s.outBounce(o - t, 0, e, o) + i
            },
            inBounceNorm: function(t) {
                return 1 - s.outBounceNorm(1 - t)
            },
            outBounce: function(t, i, e, s) {
                return (t /= s) < 1 / 2.75 ? 7.5625 * e * t * t + i : 2 / 2.75 > t ? e * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? e * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : e * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
            },
            outBounceNorm: function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            inOutBounce: function(t, i, e, o) {
                return o / 2 > t ? .5 * s.inBounce(2 * t, 0, e, o) + i : .5 * s.outBounce(2 * t - o, 0, e, o) + .5 * e + i
            },
            inOutBounceNorm: function(t) {
                return .5 > t ? .5 * s.inBounceNorm(2 * t) : .5 * s.outBounceNorm(2 * t - 1) + .5
            }
        };
        e.exports = s
    }), define("famous/ImageSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s() {
            this.imageUrl = void 0, o.apply(this, arguments)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.surfaceEvents = o.prototype.surfaceEvents.concat(["load"]), s.prototype.elementType = "img", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
            this.imageUrl = t, this._contentDirty = !0
        }, s.prototype.deploy = function(t) {
            t.src = this.imageUrl || ""
        }, s.prototype.recall = function(t) {
            t.src = ""
        }, e.exports = s
    }), define("famous-sync/TouchTracker", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.selective = t, this.touchHistory = {}, this.eventHandler = new u(!0)
        }

        function o(t, i, e, s) {
            var o = {};
            for (var n in t) o[n] = t[n];
            return {
                touch: o,
                origin: i,
                timestamp: +Date.now(),
                count: s,
                history: e
            }
        }

        function n(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = o(e, t.origin, void 0, t.touches.length);
                this.eventHandler.emit("trackstart", s), this.selective || this.touchHistory[e.identifier] || this.track(s)
            }
        }

        function r(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.touchHistory[e.identifier].push(n), this.eventHandler.emit("trackmove", n)
                }
            }
        }

        function a(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.eventHandler.emit("trackend", n), delete this.touchHistory[e.identifier]
                }
            }
        }

        function h() {
            for (var t in this.touchHistory) {
                var i = this.touchHistory[t];
                this.eventHandler.emit("trackend", {
                    touch: i[i.length - 1].touch,
                    timestamp: +Date.now(),
                    count: 0,
                    history: i
                }), delete this.touchHistory[t]
            }
        }
        var u = t("famous/EventHandler");
        s.prototype.track = function(t) {
            this.touchHistory[t.touch.identifier] = [t]
        }, s.prototype.emit = function(t, i) {
            return "touchstart" == t ? n.call(this, i) : "touchmove" == t ? r.call(this, i) : "touchend" == t ? a.call(this, i) : "touchcancel" == t ? a.call(this, i) : "unpipe" == t ? h.call(this) : void 0
        }, s.prototype.on = function(t, i) {
            return this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            return this.eventHandler.unbind(t, i)
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, e.exports = s
    }), define("app/widgets/FrontTile", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/View", "famous/Modifier", "famous-utils/Time", "famous-animation/Easing", "famous/ImageSurface", "famous-sync/TouchTracker"], function(t, i, e) {
        function s() {
            if (d.apply(this, arguments), this.startPositions = {
                    title: l.move(l.scale(.9, .9), [.05 * this.options.size[0], .05 * this.options.size[1], 1])
                }, this.endPositions = {
                    title: l.translate(0, 0, 1)
                }, this.options.imgSrc) {
                if (!(this.options.imgSrc in m)) {
                    var t = new Image;
                    t.src = this.options.imgSrc, t.width = this.options.size[0], t.height = this.options.size[1], m[this.options.imgSrc] = t
                }
                this.image = m[this.options.imgSrc], this.mainSurface = new p({
                    size: this.options.size,
                    content: this.image
                })
            } else this.mainSurface = new p({
                size: this.options.size,
                content: "",
                properties: {
                    backgroundColor: "#fff"
                }
            });
            this.titleSurface = new p({
                size: this.options.size,
                content: '<span class="lightbox-thumb-tile">' + this.options.title + '</span><br/><span class="lightbox-thumb-year">' + this.options.year + "</span>",
                properties: {
                    fontSize: this.options.fontSize + "px",
                    paddingTop: .5 * this.options.size[1] - this.options.fontSize + "px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "center"
                },
                classes: ["lightbox-thumb"]
            }), this.titleMod = new f({
                opacity: 0,
                transform: this.startPositions.title
            }), this.highlight = new p({
                properties: {
                    border: "2px solid #ffffff"
                },
                size: this.options.size
            }), this.highlightMod = new f({
                opacity: 0
            }), this._scaleEffect = c(this.options.size, [2, 2], -2), this.events(), this.node.add(this.mainSurface), this.node.add(this.titleMod).link(this.titleSurface), this.node.add(this.highlightMod).link(this.highlight)
        }

        function o() {
            n.call(this)
        }

        function n() {
            h.call(this), this.eventOutput.emit("lightbox", void 0)
        }

        function r() {
            this.titleMod.halt(), this.titleMod.setOpacity(1, this.options.fadeTransform), this.titleMod.setTransform(this.endPositions.title, this.options.fadeTransform)
        }

        function a() {
            this.titleMod.halt(), this.titleMod.setOpacity(0, this.options.fadeTransform), this.titleMod.setTransform(this.startPositions.title, this.options.fadeTransform)
        }

        function h() {
            this.highlightMod.setOpacity(1), this.highlightMod.setOpacity(0, this.options.highlightOpacityTransition, u.bind(this)), this.highlightMod.setTransform(this._scaleEffect, this.options.highlightOpacityTransition)
        }

        function u() {
            this.highlightMod.setTransform(l.translate(0, 0, -2))
        }

        function c(t, i, e) {
            return l.move(l.scale(i[0], i[1]), [-i[0] * t[0] * .25, -i[1] * t[1] * .25, e])
        }
        var p = t("famous/Surface"),
            l = t("famous/Matrix"),
            d = (t("famous-utils/Utils"), t("famous/View")),
            f = t("famous/Modifier"),
            m = (t("famous-utils/Time"), t("famous-animation/Easing"), t("famous/ImageSurface"), t("famous-sync/TouchTracker"), {});
        s.prototype = Object.create(d.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            imgSrc: void 0,
            size: [300, 300],
            fontSize: 24,
            title: "IMAGE TILE",
            year: "SUB TITLE",
            fadeTransform: {
                curve: "outExpoNorm",
                duration: 250
            },
            highlightOpacityTransition: {
                curve: "outBounceNorm",
                duration: 550
            }
        }, s.prototype.events = function() {
            this.titleSurface.on("mouseover", r.bind(this)), this.titleSurface.on("mouseout", a.bind(this)), this.eventInput.on("click", o.bind(this)), this.mainSurface.pipe(this.eventInput), this.titleSurface.pipe(this.eventInput)
        }, s.prototype.getSize = function() {
            return this.mainSurface.getSize()
        }, s.prototype.activate = function() {
            a.call(this)
        }, e.exports = s
    }), define("app/widgets/ArrayHelpers", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            return [t[0] - i[0], t[1] - i[1]]
        }

        function o(t, i) {
            return [t[0] - i[0], t[1] - i[1]]
        }

        function n(t, i) {
            return [t[0] * i[0], t[1] * i[1]]
        }

        function r(t, i) {
            return [t[0] * i, t[1] * i]
        }
        e.exports = {
            halfOf: function(t) {
                return r(t, .5)
            },
            sub: o,
            add: s,
            multiply: n,
            scalar: r
        }
    }), define("app/widgets/SizingHelpers", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            if (t[0] > i[0] * e[0]) {
                var s = t[1] / t[0];
                t[0] = Math.round(i[0] * e[0]), t[1] = Math.round(t[0] * s)
            }
            if (t[1] > i[1] * e[1]) {
                var o = t[0] / t[1];
                t[1] = Math.round(i[1] * e[1]), t[0] = Math.round(t[1] * o)
            }
        }

        function o(t, i) {
            var e = t.getSize(),
                s = i.getSize();
            return [e[0] / s[0], e[1] / s[1]]
        }
        e.exports = {
            resize: s,
            getSizeRatio: o
        }
    }), define("app/widgets/LayoutEngine", ["require", "exports", "module", "famous/Engine", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            c.on("resize", p.debounce(r.bind(this), 400)), this.layouts = [], this.screenSize, n.call(this)
        }

        function o(t) {
            return this.layouts.indexOf(t)
        }

        function n() {
            this.screenSize = [window.innerWidth, window.innerHeight]
        }

        function r() {
            n.call(this);
            for (var t = 0; t < this.layouts.length; t++) a.call(this, t)
        }

        function a(t) {
            var i = this.layouts[t],
                e = h.call(this, i);
            e && u.call(this, e)
        }

        function h(t) {
            var i, e, s = [];
            for (var o in t) t[o].minWidth < this.screenSize[0] && t[o].maxWidth > this.screenSize[0] && s.push(o);
            if (0 == s.length) return void console.warn("No possible layout");
            for (var n = 0; n < s.length; n++)
                if (i) {
                    var r = t[s[n]];
                    r.maxWidth > i && (e = s[n], i = r.maxWidth)
                } else i = t[s[n]].maxWidth, e = s[n];
            return t[e]
        }

        function u(t) {
            for (var i = t.layouts, e = 0; e < i.length; e++) {
                var s = i[e];
                if (s.transform && (s.matrix && s.transform.setTransform(s.matrix, s.transition, s.transformCallback), s.origin && s.transform.setOrigin(s.origin, s.originTransition, s.originCallback), s.opacity && s.transform.setOpacity(s.opacity, s.opacityTransition, s.opacityCallback), s.size && s.transform.setSize(s.size, s.sizeTransition, s.sizeCallback)), s.fns)
                    if (p.isArray(s.fns))
                        for (var e = 0; e < s.fns.length; e++) s.fns[e]();
                    else s.fns()
            }
        }
        var c = t("famous/Engine"),
            p = t("famous-utils/Utils");
        s.prototype.add = function(t) {
            this.layouts.push(t)
        }, s.prototype.remove = function(t) {
            var i = o(t); - 1 !== i && this.layouts.splice(1, i)
        }, s.prototype.triggerLayout = function(t) {
            if (t) {
                var i = o.call(this, t); - 1 !== i && a.call(this, i)
            } else r.call(this)
        }, s.prototype.getScreenSize = function() {
            return this.screenSize
        };
        var l = new s;
        e.exports = l
    }), define("famous-ui/Buttons/ButtonBase", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.surface = new o(this.options.surfaceOptions), this.surface.pipe(this), this.transform = new a({
                size: this.surface.getSize()
            }), this.node.link(this.transform).link(this.surface), this.surface.pipe(this), this.surface.on("click", this._handleClick.bind(this)), this._state = !1
        }
        var o = t("famous/Surface"),
            n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Modifier"),
            h = t("famous-animation/Easing");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            surfaceOptions: {},
            openState: r.identity,
            closeState: r.rotateZ(.75 * Math.PI),
            transition: {
                curve: h.inOutBackNorm,
                duration: 500
            }
        }, s.prototype._handleClick = function() {}, s.prototype.halt = function() {
            this.transform.halt()
        }, s.prototype.setTransform = function() {
            this.transform.setTransform.apply(this.transform, arguments)
        }, s.prototype.setOpacity = function() {
            this.transform.setOpacity.apply(this.transform, arguments)
        }, s.prototype.getSize = function() {
            return this.surface.getSize()
        }, e.exports = s
    }), define("app/widgets/ImageButton", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/View", "famous/Modifier", "famous-ui/Buttons/ButtonBase", "famous-ui/Buttons/ButtonBase", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.image = new Image, this.image.src = this.options.imgSrc, this.setSize(this.options.size), this.surface.setContent(this.image)
        } {
            var o = (t("famous/Surface"), t("famous/Matrix")),
                n = (t("famous/View"), t("famous/Modifier"), t("famous-ui/Buttons/ButtonBase")),
                n = t("famous-ui/Buttons/ButtonBase");
            t("famous-utils/Utils")
        }
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            surfaceOptions: {},
            openState: o.identity,
            closeState: o.rotateZ(.75 * Math.PI),
            transition: {
                curve: "inOutBackNorm",
                duration: 500
            },
            imgSrc: "",
            size: [50, 50]
        }, s.prototype.setSize = function(t) {
            this.surface.setSize(t), this.image.width = t[0], this.image.height = t[1]
        }, s.prototype.addTo = function(t) {
            t.add(this.node)
        }, e.exports = s
    }), define("app/widgets/CloseButton", ["require", "exports", "module", "./ImageButton"], function(t, i, e) {
        var s = t("./ImageButton"),
            o = new s({
                imgSrc: "img/buttons/x_white.svg"
            });
        e.exports = o
    }), define("app/widgets/InfoButton", ["require", "exports", "module", "./ImageButton"], function(t, i, e) {
        var s = t("./ImageButton"),
            o = new s({
                imgSrc: "img/buttons/i_white.svg"
            });
        e.exports = o
    }), define("app/widgets/BackTile", ["require", "exports", "module", "famous/Surface", "famous/ImageSurface", "famous/Matrix", "famous/View", "famous/Modifier", "famous-utils/Time", "famous-utils/Utils", "./ArrayHelpers", "./SizingHelpers", "app/widgets/LayoutEngine", "app/widgets/CloseButton", "app/widgets/InfoButton"], function(t, i, e) {
        function s() {
            if (this.options.size = [this.options.maxImageSize[0], this.options.maxImageSize[1]], g.resize(this.options.size, [window.innerWidth, window.innerHeight], this.options.mainSurfaceRatio), this._lastSize) {
                var t = m.halfOf(m.sub(this._lastSize, this.options.size));
                this._visible && this.emit("resize", t)
            }
            this.options.titleSize[0] = this.options.size[0], this.titleSurface && this.titleSurface.setSize(this.options.titleSize), this.mainSurface && (this.image.width !== this.options.size[0] || this.image.height !== this.options.size[1]) && (1 == this.id && console.log("options ize", this.options.size), this.mainSurface.setSize(this.options.size), 1 == this.id && console.log("getSize", this.mainSurface.getSize()), this.image.width = this.options.size[0], this.image.height = this.options.size[1])
        }

        function o(t) {
            this._isMobile = !0;
            var i = window.innerWidth,
                e = window.innerHeight,
                s = (this.originOffset, this.options);
            s.tagSize[0] = s.size[0], s.tagSize[1] = s.size[1], this.tagSurface && (this.tagSurface.setProperties({
                paddingTop: s.margin + s.titleSize[1] + "px",
                paddingLeft: s.margin + "px",
                paddingRight: s.margin + "px",
                backgroundColor: s.mobileTagBgColor
            }), this.tagSurface.setSize(s.tagSize)), this.titleSurface && this.titleSurface.setProperties({
                paddingLeft: s.margin + "px",
                fontSize: "14px",
                bottom: "0px"
            }), this.transitions.close = {
                method: "physics",
                spring: {
                    period: 800,
                    dampingRatio: .75
                },
                wall: !0,
                v: 0
            }, this.transitions.info = {
                method: "physics",
                spring: {
                    period: 500,
                    dampingRatio: .85
                },
                wall: !0,
                v: 0
            }, this.startPositions = {
                close: l.translate(-500, e - s.margin - s.closeSize[1]),
                info: l.translate(i - s.infoSize[0] - s.margin + s.size[0], e - s.margin - s.infoSize[1]),
                title: l.translate(0, 200, -2),
                tag: l.move(l.scale(1, .001), [0, -200])
            }, this.finalPositions = {
                close: l.translate(s.margin, e - .5 * s.margin - s.closeSize[1]),
                info: l.translate(i - s.infoSize[0] - s.margin, e - .5 * s.margin - s.infoSize[1]),
                title: l.translate(0, s.margin + s.titleSize[1], 2),
                tag: l.translate(0, 0, 1),
                titleOpacity: 0,
                tagOpacity: 0,
                infoOpacity: 1
            }, this._init && (this._visible ? t || this.activate() : this.deactivate())
        }

        function n(t) {
            function i() {
                this.tagSurface.setSize(h.tagSize), this.tagSurface.setProperties({
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    paddingTop: "0px",
                    backgroundColor: "transparent"
                }), this.titleSurface.setProperties({
                    padding: "0px",
                    fontSize: "16px",
                    top: "0px"
                })
            }

            function e() {
                h.titleSize[0] = u[0] - 3 * h.margin, this.titleSurface.setSize(h.titleSize), h.tagSize[0] = u[0] - 4 * h.margin, h.tagSize[1] = h.size[1] - h.titleSize[1]
            }

            function s() {
                this.startPositions.title = l.translate(-a[1] + n - .5 * h.titleSize[0], 0, 0), this.finalPositions.title = l.translate(h.size[0] + 2 * h.margin, 0, 0), this.startPositions.tag = l.translate(-a[1] + n, h.titleSize[1] + 2 * h.margin, 0), this.finalPositions.tag = l.translate(h.size[0] + 2 * h.margin, h.titleSize[1] + 2 * h.margin, 0)
            }

            function o() {
                var t = h.size[0] + 2 * h.margin,
                    i = u[1] < h.margin ? h.margin : 0;
                this.startPositions.title = l.translate(t + 200, i, -5), this.finalPositions.title = l.translate(t, i, 0), this.startPositions.tag = l.translate(h.size[0] + 2 * h.margin + 200, h.titleSize[1] + h.margin + i), this.finalPositions.tag = l.translate(h.size[0] + 2 * h.margin, h.titleSize[1] + h.margin + i);
                var e = l.getTranslate(this.finalPositions.close);
                this.startPositions.close = l.translate(e[0], e[1] + i - 500, e[1]), this.finalPositions.close = l.translate(e[0], e[1] + i, e[1])
            }
            this._isMobile = !1;
            var n = window.innerWidth,
                r = window.innerHeight,
                a = this.originOffset,
                h = this.options,
                u = [.5 * (n - h.size[0]), .5 * (r - h.size[1])];
            i.call(this), e.call(this), this.startPositions = {
                close: l.translate(-this.options.closeSize[0] - this.options.margin, 0),
                tag: l.translate(this.options.size[0] - 50, -1),
                title: void 0,
                info: l.identity
            }, this.finalPositions = {
                close: l.translate(-this.options.closeSize[0] - this.options.margin, 0),
                tag: l.translate(this.options.size[0] + this.options.margin, 0),
                title: void 0,
                info: l.identity,
                tagOpacity: 1,
                titleOpacity: 1,
                infoOpacity: 0
            }, this.transitions.title = {
                method: "physics",
                spring: {
                    period: this._springTitlePeriod || 800,
                    dampingRatio: this._springTitleDamping || .75
                },
                wall: !0,
                v: 0
            }, this.transitions.tag = {
                method: "physics",
                spring: {
                    period: this._springTagPeriod || 500,
                    dampingRatio: this._springTagDamping || .65
                },
                wall: !0,
                v: 0
            }, u[1] > this.options.titleSize[1] + h.margin ? s.call(this) : o.call(this), this._init && (this._visible ? t || this.activate() : this.deactivate())
        }

        function r() {
            d.apply(this, arguments), this.id = b++, this._isMobile, this._init = !1, this._visible = !1, this._infoVisible = !1, this._buttonEventsBound = !1, this._springTitleDamping, this._springTitlePeriod, this._springTagDamping, this._springTagPeriod, this._lastSize, this.startPositions = {}, this.finalPositions = {}, this.originOffset = [0, 0, 0], this.layouts = {
                mobile: {
                    minWidth: 0,
                    maxWidth: 1137,
                    layouts: [{
                        fns: [s.bind(this), o.bind(this)]
                    }]
                },
                desktop: {
                    minWidth: 1138,
                    maxWidth: 4e3,
                    layouts: [{
                        fns: [s.bind(this), n.bind(this)]
                    }]
                }
            }, y.add(this.layouts), this.transitions = {
                close: {
                    curve: "inOutBackNorm",
                    duration: 500
                },
                titleOp: {
                    curve: "inSineNorm",
                    duration: 500
                },
                title: {
                    curve: "outBackNorm",
                    duration: 500
                },
                tag: {
                    curve: "outBackNorm",
                    duration: 500
                },
                physics: {
                    method: "physics",
                    spring: {
                        period: 300,
                        dampingRatio: .45
                    },
                    wall: !0,
                    v: 0
                },
                info: {
                    curve: "outBackNorm",
                    duration: 400
                }
            }, this.image = new Image, this.image.src = this.options.imgSrc, this.image.width = this.options.size[0], this.image.height = this.options.size[1], this.mainSurface = new p({
                size: this.options.size,
                content: this.image,
                properties: {
                    backgroundColor: "#494949"
                }
            }), this.titleSurface = new p({
                size: this.options.titleSize,
                content: this.options.content.title
            }), this.tagSurface = new p({
                size: this.options.tagSize,
                content: this.options.content.tag
            }), y.triggerLayout(this.layouts), this.titleMod = new f({
                transform: this.startPositions.title,
                opacity: 0
            }), this.tagMod = new f({
                transform: this.startPositions.tag,
                opacity: 0
            }), this.infoMod = new f({
                transform: this.startPositions.info,
                opacity: 0
            }), this._clickClose = h.bind(this), this._clickInfo = u.bind(this), this.node.add(this.mainSurface), this.node.add(this.titleMod).link(this.titleSurface), this.node.add(this.tagMod).link(this.tagSurface), this.eventInput.pipe(this.eventOutput), this.mainSurface.on("click", a.bind(this)), this._init = !0
        }

        function a(t) {
            t.preventDefault(), t.stopPropagation(), this.eventOutput.emit("lightbox")
        }

        function h() {
            this.emit("lightbox", void 0);
            var t = c(this.finalPositions.close, [.5, .5, 1], this.options.closeSize);
            _.setTransform(t, this.options.clickCurve)
        }

        function u(t) {
            t.preventDefault(), t.stopPropagation();
            var i = c(this.finalPositions.info, [.5, .5, 1], this.options.infoSize);
            v.halt(), v.setTransform(i, this.options.clickCurve, this._resetInfoButton.bind(this)), this._toggleInfo()
        }

        function c(t, i, e) {
            var s = l.getTranslate(t);
            return s[0] += .5 * (1 - i[0]) * e[0], s[1] += .5 * (1 - i[1]) * e[1], l.move(l.scale(i[0], i[1], i[2]), s)
        }
        var p = t("famous/Surface"),
            l = (t("famous/ImageSurface"), t("famous/Matrix")),
            d = t("famous/View"),
            f = t("famous/Modifier"),
            m = (t("famous-utils/Time"), t("famous-utils/Utils"), t("./ArrayHelpers")),
            g = t("./SizingHelpers"),
            y = t("app/widgets/LayoutEngine"),
            _ = t("app/widgets/CloseButton"),
            v = t("app/widgets/InfoButton"),
            b = 0;
        r.prototype = Object.create(d.prototype), r.prototype.constructor = r, r.DEFAULT_OPTIONS = {
            imgSrc: void 0,
            containerSize: [window.innerWidth, window.innerHeight],
            size: [1e3, 800],
            maxImageSize: [1e3, 800],
            titleSize: [1e3, 100],
            desktopTagSize: [250, 300],
            tagSize: [250, 300],
            margin: 20,
            mainSurfaceRatio: [1, 1],
            closeSize: [50, 50],
            content: void 0,
            infoSize: [50, 50],
            clickCurve: {
                curve: "outBounceNorm",
                duration: 300
            },
            mobileTagBgColor: "rgba(25, 25, 25, 0.8)"
        }, r.prototype.setVisibile = function(t) {
            this._visible = t
        }, r.prototype._resetInfoButton = function() {
            v.setTransform(this.finalPositions.info, this.options.clickCurve)
        }, r.prototype._toggleInfo = function() {
            this._infoVisible ? this._hideInfo() : this._showInfo()
        }, r.prototype._hideInfo = function() {
            this._infoVisible = !1, this.tagMod.halt(), this.tagMod.setTransform(this.startPositions.tag, this.transitions.tag), this.tagMod.setOpacity(0, this.transitions.tag), this.titleMod.halt(), this.titleMod.setOpacity(0, this.transitions.titleOp), this.titleMod.setTransform(this.startPositions.title, this.transitions.title)
        }, r.prototype._showInfo = function() {
            this._infoVisible = !0, this.tagMod.halt(), this.tagMod.setTransform(this.finalPositions.tag, this.transitions.tag), this.tagMod.setOpacity(1, this.transitions.tag), this.titleMod.halt(), this.titleMod.setOpacity(1, this.transitions.titleOp), this.titleMod.setTransform(this.finalPositions.title, this.transitions.title)
        }, r.prototype.render = function() {
            return this._visible ? this.node.render() : void 0
        }, r.prototype.getSize = function() {
            return this.mainSurface.getSize()
        }, r.prototype.setOffset = function(t) {
            this._lastSize = [this.options.size[0], this.options.size[1]], this.parentOffset = t, this._isMobile ? o.call(this, !0) : n.call(this, !0)
        }, r.prototype.activate = function() {
            0 == this._isMobile ? (this.titleMod.halt(), this.titleMod.setOpacity(this.finalPositions.titleOpacity, this.transitions.titleOp), this.titleMod.setTransform(this.finalPositions.title, this.transitions.title), this.tagMod.halt(), this.tagMod.setOpacity(this.finalPositions.tagOpacity, this.transitions.tag), this.tagMod.setTransform(this.finalPositions.tag, this.transitions.tag)) : (this._hideInfo(), this._buttonEvents(), _.halt(), _.setOpacity(1, this.transitions.close), _.setTransform(this.finalPositions.close, this.transitions.physics), v.halt(), v.setOpacity(this.finalPositions.infoOpacity, this.transitions.info), v.setTransform(this.finalPositions.info, this.transitions.info))
        }, r.prototype.deactivate = function() {
            this._visible && (this._buttonEventsBound && this._removeButtonEvents(), _.halt(), _.setOpacity(0, this.transitions.close), _.setTransform(this.startPositions.close, this.transitions.close), v.halt(), v.setOpacity(0, this.transitions.info), v.setTransform(this.startPositions.info, this.transitions.info), this.titleMod.halt(), this.titleMod.setOpacity(0, this.transitions.titleOp), this.titleMod.setTransform(this.startPositions.title, this.transitions.title), this.tagMod.halt(), this.tagMod.setOpacity(0, this.transitions.tag), this.tagMod.setTransform(this.startPositions.tag, this.transitions.tag))
        }, r.prototype._buttonEvents = function() {
            this._buttonEventsBound = !0, _.on("click", this._clickClose), v.on("click", this._clickInfo)
        }, r.prototype._removeButtonEvents = function() {
            this._buttonEventsBound = !1, _.unbind("click", this._clickClose), v.unbind("click", this._clickInfo)
        }, e.exports = r
    }), define("famous/EventArbiter", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
        function s(t) {
            this.dispatchers = {}, this.currMode = void 0, this.setMode(t)
        }
        var o = t("./EventHandler");
        s.prototype.setMode = function(t) {
            if (t != this.currMode) {
                var i = this.currMode;
                this.dispatchers[this.currMode] && this.dispatchers[this.currMode].emit("unpipe"), this.currMode = t, this.dispatchers[t] && this.dispatchers[t].emit("pipe"), this.emit("change", {
                    from: i,
                    to: t
                })
            }
        }, s.prototype.forMode = function(t) {
            return this.dispatchers[t] || (this.dispatchers[t] = new o), this.dispatchers[t]
        }, s.prototype.emit = function(t, i) {
            if (void 0 == this.currMode) return !1;
            i || (i = {});
            var e = this.dispatchers[this.currMode];
            return e ? e.emit(t, i) : void 0
        }, e.exports = s
    }), define("famous-generative/SimplexNoise", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e, s) {
            this.x = t || 0, this.y = i || 0, this.z = e || 0, this.w = s || 0
        }

        function o(t, i, e) {
            return t.x * i + t.y * e
        }

        function n(t, i, e, s) {
            return t.x * i + t.y * e + t.z * s
        }

        function r(t, i, e, s, o) {
            return t.x * i + t.y * e + t.z * s + t.w * o
        }

        function a() {
            this.F2 = .5 * (Math.sqrt(3) - 1), this.G2 = (3 - Math.sqrt(3)) / 6, this.F3 = 1 / 3, this.G3 = 1 / 6, this.F4 = (Math.sqrt(5) - 1) / 4, this.G4 = (5 - Math.sqrt(5)) / 20, this.grad3 = [new s(1, 1, 0), new s(-1, 1, 0), new s(1, -1, 0), new s(-1, -1, 0), new s(1, 0, 1), new s(-1, 0, 1), new s(1, 0, -1), new s(-1, 0, -1), new s(0, 1, 1), new s(0, -1, 1), new s(0, 1, -1), new s(0, -1, -1)], this.grad4 = [new s(0, 1, 1, 1), new s(0, 1, 1, -1), new s(0, 1, -1, 1), new s(0, 1, -1, -1), new s(0, -1, 1, 1), new s(0, -1, 1, -1), new s(0, -1, -1, 1), new s(0, -1, -1, -1), new s(1, 0, 1, 1), new s(1, 0, 1, -1), new s(1, 0, -1, 1), new s(1, 0, -1, -1), new s(-1, 0, 1, 1), new s(-1, 0, 1, -1), new s(-1, 0, -1, 1), new s(-1, 0, -1, -1), new s(1, 1, 0, 1), new s(1, 1, 0, -1), new s(1, -1, 0, 1), new s(1, -1, 0, -1), new s(-1, 1, 0, 1), new s(-1, 1, 0, -1), new s(-1, -1, 0, 1), new s(-1, -1, 0, -1), new s(1, 1, 1, 0), new s(1, 1, -1, 0), new s(1, -1, 1, 0), new s(1, -1, -1, 0), new s(-1, 1, 1, 0), new s(-1, 1, -1, 0), new s(-1, -1, 1, 0), new s(-1, -1, -1, 0)], this.p = [];
            for (var t = 0; 255 >= t; t++) this.p[t] = Math.floor(255 * Math.random());
            this.perm = [], this.permMod12 = [];
            for (var t = 0; 512 > t; t++) this.perm[t] = this.p[255 & t], this.permMod12[t] = this.perm[t] % 12
        }
        a.prototype.noise2D = function(t, i) {
            var e, s, n = 0,
                r = 0,
                a = 0,
                h = (t + i) * this.F2,
                u = Math.floor(t + h),
                c = Math.floor(i + h),
                p = (u + c) * this.G2,
                l = u - p,
                d = c - p,
                f = t - l,
                m = i - d;
            f > m ? (e = 1, s = 0) : (e = 0, s = 1);
            var g = f - e + this.G2,
                y = m - s + this.G2,
                _ = f - 1 + 2 * this.G2,
                v = m - 1 + 2 * this.G2,
                b = 255 & u,
                S = 255 & c,
                w = .5 - f * f - m * m;
            if (w >= 0) {
                var x = this.permMod12[b + this.perm[S]];
                w *= w, n = w * w * o(this.grad3[x], f, m)
            }
            var T = .5 - g * g - y * y;
            if (T >= 0) {
                var z = this.permMod12[b + e + this.perm[S + s]];
                T *= T, r = T * T * o(this.grad3[z], g, y)
            }
            var M = .5 - _ * _ - v * v;
            if (M >= 0) {
                var C = this.permMod12[b + 1 + this.perm[S + 1]];
                M *= M, a = M * M * o(this.grad3[C], _, v)
            }
            return 70 * (n + r + a)
        }, a.prototype.noise3D = function(t, i, e) {
            var s, o, r, a, h, u, c = 0,
                p = 0,
                l = 0,
                d = 0,
                f = (t + i + e) * this.F3,
                m = Math.floor(t + f),
                g = Math.floor(i + f),
                y = Math.floor(e + f),
                _ = (m + g + y) * this.G3,
                v = m - _,
                b = g - _,
                S = y - _,
                w = t - v,
                x = i - b,
                T = e - S;
            w >= x ? x >= T ? (s = 1, o = 0, r = 0, a = 1, h = 1, u = 0) : w >= T ? (s = 1, o = 0, r = 0, a = 1, h = 0, u = 1) : (s = 0, o = 0, r = 1, a = 1, h = 0, u = 1) : T > x ? (s = 0, o = 0, r = 1, a = 0, h = 1, u = 1) : T > w ? (s = 0, o = 1, r = 0, a = 0, h = 1, u = 1) : (s = 0, o = 1, r = 0, a = 1, h = 1, u = 0);
            var z = w - s + this.G3,
                M = x - o + this.G3,
                C = T - r + this.G3,
                P = w - a + 2 * this.G3,
                k = x - h + 2 * this.G3,
                O = T - u + 2 * this.G3,
                I = w - 1 + 3 * this.G3,
                E = x - 1 + 3 * this.G3,
                N = T - 1 + 3 * this.G3,
                D = 255 & m,
                A = 255 & g,
                F = 255 & y,
                R = .6 - w * w - x * x - T * T;
            if (R >= 0) {
                var B = this.permMod12[D + this.perm[A + this.perm[F]]];
                R *= R, c = R * R * n(this.grad3[B], w, x, T)
            }
            var q = .6 - z * z - M * M - C * C;
            if (q >= 0) {
                var U = this.permMod12[D + s + this.perm[A + o + this.perm[F + r]]];
                q *= q, p = q * q * n(this.grad3[U], z, M, C)
            }
            var L = .6 - P * P - k * k - O * O;
            if (L >= 0) {
                var G = this.permMod12[D + a + this.perm[A + h + this.perm[F + u]]];
                L *= L, l = L * L * n(this.grad3[G], P, k, O)
            }
            var j = .6 - I * I - E * E - N * N;
            if (j >= 0) {
                var H = this.permMod12[D + 1 + this.perm[A + 1 + this.perm[F + 1]]];
                j *= j, d = j * j * n(this.grad3[H], I, E, N)
            }
            return 32 * (c + p + l + d)
        }, a.prototype.noise4D = function(t, i, e, s) {
            var o = 0,
                n = 0,
                a = 0,
                h = 0,
                u = 0,
                c = (t + i + e + s) * this.F4,
                p = Math.floor(t + c),
                l = Math.floor(i + c),
                d = Math.floor(e + c),
                f = Math.floor(s + c),
                m = (p + l + d + f) * this.G4,
                g = p - m,
                y = l - m,
                _ = d - m,
                v = f - m,
                b = t - g,
                S = i - y,
                w = e - _,
                x = s - v,
                T = 0,
                z = 0,
                M = 0,
                C = 0;
            b > S ? T++ : z++, b > w ? T++ : M++, b > x ? T++ : C++, S > w ? z++ : M++, S > x ? z++ : C++, w > x ? M++ : C++;
            var P, k, O, I, E, N, D, A, F, R, B, q;
            P = T >= 3 ? 1 : 0, k = z >= 3 ? 1 : 0, O = M >= 3 ? 1 : 0, I = C >= 3 ? 1 : 0, E = T >= 2 ? 1 : 0, N = z >= 2 ? 1 : 0, D = M >= 2 ? 1 : 0, A = C >= 2 ? 1 : 0, F = T >= 1 ? 1 : 0, R = z >= 1 ? 1 : 0, B = M >= 1 ? 1 : 0, q = C >= 1 ? 1 : 0;
            var U = b - P + this.G4,
                L = S - k + this.G4,
                G = w - O + this.G4,
                j = x - I + this.G4,
                H = b - E + 2 * this.G4,
                V = S - N + 2 * this.G4,
                W = w - D + 2 * this.G4,
                Y = x - A + 2 * this.G4,
                X = b - F + 3 * this.G4,
                Z = S - R + 3 * this.G4,
                Q = w - B + 3 * this.G4,
                K = x - q + 3 * this.G4,
                J = b - 1 + 4 * this.G4,
                $ = S - 1 + 4 * this.G4,
                ti = w - 1 + 4 * this.G4,
                ii = x - 1 + 4 * this.G4,
                ei = 255 & p,
                si = 255 & l,
                oi = 255 & d,
                ni = 255 & f,
                ri = .6 - b * b - S * S - w * w - x * x;
            if (ri >= 0) {
                var ai = this.perm[ei + this.perm[si + this.perm[oi + this.perm[ni]]]] % 32;
                ri *= ri, o = ri * ri * r(this.grad4[ai], b, S, w, x)
            }
            var hi = .6 - U * U - L * L - G * G - j * j;
            if (hi >= 0) {
                var ui = this.perm[ei + P + this.perm[si + k + this.perm[oi + O + this.perm[ni + I]]]] % 32;
                hi *= hi, n = hi * hi * r(this.grad4[ui], U, L, G, j)
            }
            var ci = .6 - H * H - V * V - W * W - Y * Y;
            if (ci >= 0) {
                var pi = this.perm[ei + E + this.perm[si + N + this.perm[oi + D + this.perm[ni + A]]]] % 32;
                ci *= ci, a = ci * ci * r(this.grad4[pi], H, V, W, Y)
            }
            var li = .6 - X * X - Z * Z - Q * Q - K * K;
            if (li >= 0) {
                var di = this.perm[ei + F + this.perm[si + R + this.perm[oi + B + this.perm[ni + q]]]] % 32;
                li *= li, h = li * li * r(this.grad4[di], X, Z, Q, K)
            }
            var fi = .6 - J * J - $ * $ - ti * ti - ii * ii;
            if (0 > fi) {
                var mi = this.perm[ei + 1 + this.perm[si + 1 + this.perm[oi + 1 + this.perm[ni + 1]]]] % 32;
                fi *= fi, u = fi * fi * r(this.grad4[mi], J, $, ti, ii)
            }
            return 27 * (o + n + a + h + u)
        }, e.exports = a
    }), define("app/widgets/LightboxTile", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous-utils/Utils", "famous/Engine", "famous/View", "famous/RenderNode", "famous-animation/Easing"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.front = new o({
                size: this.options.size,
                properties: this.options.frontProperties,
                classes: this.options.frontClasses,
                content: this.options.frontContent
            }), this.back = new o({
                size: this.options.size,
                properties: this.options.backProperties,
                classes: this.options.backClasses,
                content: this.options.backContent
            }), this.mainTransform = new n({
                size: this.options.size,
                origin: [0, 0]
            }), this.frontTransform = new n({
                size: this.options.size,
                origin: [.5, .5]
            }), this.backTransform = new n({
                size: this.options.size,
                origin: [.5, .5],
                transform: r.rotateY(Math.PI)
            }), this.tileNode = new h, this.node.link(this.mainTransform).link(this.tileNode), this.tileNode.add(this.frontTransform).link(this.front), this.tileNode.add(this.backTransform).link(this.back), this._frontIsVisible = !0, this._isDeactivated = !1, this.front.pipe(this), this.back.pipe(this)
        } {
            var o = t("famous/Surface"),
                n = t("famous/Modifier"),
                r = t("famous/Matrix"),
                a = (t("famous-utils/Utils"), t("famous/Engine"), t("famous/View")),
                h = t("famous/RenderNode");
            t("famous-animation/Easing")
        }
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            frontContent: "<h1>Front</h1>",
            frontProperties: {
                border: "1px solid white",
                textAlign: "center",
                lineHeight: "200px",
                fontSize: "24px",
                backgroundColor: "#a3bfb9",
                borderRadius: "20px"
            },
            frontClasses: [],
            backContent: "<h1>Back</h1>",
            backProperties: {
                lineHeight: "200px",
                border: "1px solid #33ccff",
                textAlign: "center",
                backgroundColor: "#497375",
                borderRadius: "20px"
            },
            backClasses: [],
            size: [400, 400],
            flipTransition: {
                curve: "inOutBackNorm",
                duration: 500
            },
            flipZDepth: 1,
            deactivateZDepth: -500,
            deactivateTransition: {
                curve: "inOutBackNorm",
                duration: 500
            }
        }, s.prototype.toggleFrontBack = function(t) {
            this._frontIsVisible ? this.showBack(t) : this.showFront(t)
        }, s.prototype.getSize = function() {
            return this._frontIsVisible ? this.front.getSize() : this.back.getSize()
        }, s.prototype.showFront = function(t) {
            this._frontIsVisible = !0, this.mainTransform.halt(), this.mainTransform.setTransform(r.identity, this.options.flipTransition, t)
        }, s.prototype.showBack = function(t) {
            this._frontIsVisible = !1, this.mainTransform.halt(), this.mainTransform.setTransform(r.move(r.rotateY(Math.PI), [0, 0, this.options.flipZDepth]), this.options.flipTransition, t)
        }, s.prototype.sendBack = function(t) {
            this.mainTransform.halt(), this.mainTransform.setTransform(r.translate(0, 0, this.options.deactivateZDepth), this.options.deactivateTransition, t)
        }, s.prototype.activate = function(t) {
            this.showFront(t)
        }, e.exports = s
    }), define("famous/ContainerSurface", ["require", "exports", "module", "./Surface", "./Context"], function(t, i, e) {
        function s(t) {
            o.call(this, t), this._container = document.createElement("div"), this._container.classList.add("group"), this._container.style.width = "100%", this._container.style.height = "100%", this._container.style.position = "relative", this._shouldRecalculateSize = !1, this.context = new n(this._container), this.setContent(this._container)
        }
        var o = t("./Surface"),
            n = t("./Context");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.link = function() {
            return this.context.link.apply(this.context, arguments)
        }, s.prototype.add = function() {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function() {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function() {
            return this._sizeDirty && (this._shouldRecalculateSize = !0), o.prototype.render.call(this)
        }, s.prototype.commit = function() {
            var t = o.prototype.commit.apply(this, arguments);
            return this._shouldRecalculateSize && (this.context.setSize(), this._shouldRecalculateSize = !1), this.context.update(), t
        }, e.exports = s
    }), define("famous-physics/math/Vector", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ.apply(this, t), t instanceof s && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }
        var o = new s(0, 0, 0);
        s.prototype.add = function(t, i) {
            return i = i || o, i.setXYZ(this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function(t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function(t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.equals = function(t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.rotate = function(t, i) {
            var e = t.x,
                s = t.y,
                o = t.z;
            return this.rotateX(e, i).rotateY(s, i).rotateZ(o, i)
        }, s.prototype.rotateX = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(e, -n * a + s * r, n * r - s * a)
        }, s.prototype.rotateY = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-n * a + e * r, s, n * r + e * a)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-s * a + e * r, s * r + e * a, n)
        }, s.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this.x, this.y, this.z)
        }, s.prototype.isZero = function() {
            return !(this.x || this.y || this.z)
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, s.prototype.put = function(t) {
            t.set(o)
        }, s.prototype.setXYZ = function(t, i, e) {
            return o.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function() {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function(t, i) {
            if (i = i || o, 1 / 0 === t) return i;
            var e = this.norm();
            return e > t && this.normalize().mult(t, i), i
        }, s.prototype.project = function(t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function(t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function() {
            return [this.x, this.y, this.z]
        }, s.prototype.get = function() {
            return this.toArray()
        }, s.prototype.zero = new s(0, 0, 0), s.prototype.one = new s(1, 1, 1), e.exports = s
    }), define("famous-physics/bodies/Particle", ["require", "exports", "module", "famous/RenderNode", "famous-physics/math/Vector", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            t = t || {}, this.p = t.p ? new n(t.p) : new n(0, 0, 0), this.v = t.v ? new n(t.v) : new n(0, 0, 0), this.a = t.a ? new n(t.a) : new n(0, 0, 0), this.f = t.f ? new n(t.f) : new n(0, 0, 0), this.m = void 0 !== t.m ? t.m : 1, this.restitution = void 0 !== t.restitution ? t.restitution : .5, this.dissipation = void 0 !== t.dissipation ? t.dissipation : 0, this.immunity = void 0 !== t.immunity ? t.immunity : !1, this.axis = void 0 !== t.axis ? t.axis : void 0, this.mInv = 1 / this.m, this.size = [0, 0, 0], this.node = void 0, this.spec = {
                size: [0, 0],
                target: {
                    origin: [.5, .5],
                    transform: void 0,
                    target: void 0
                }
            }
        }
        var o = t("famous/RenderNode"),
            n = t("famous-physics/math/Vector"),
            r = t("famous/Matrix");
        s.AXIS = {
            X: 0,
            Y: 1,
            Z: 2
        }, s.prototype.setPos = function(t) {
            this.p.set(t)
        }, s.prototype.getPos = function() {
            return this.p.get()
        }, s.prototype.setVel = function(t, i) {
            (!this.getImmunity() || i) && this.v.set(t)
        }, s.prototype.getVel = function() {
            return this.v.get()
        }, s.prototype.setMass = function(t) {
            this.m = t, this.mInv = 1 / t
        }, s.prototype.getMass = function() {
            return this.m
        }, s.prototype.setImmunity = function(t) {
            this.immunity = t
        }, s.prototype.getImmunity = function() {
            return this.immunity
        }, s.prototype.toggleImmunity = function() {
            this.setImmunity(!this.getImmunity())
        }, s.prototype.clear = function(t, i) {
            t = t || new n, i = i || new n, this.setPos(t), this.setVel(i), this.f.clear(), this.a.clear()
        }, s.prototype.applyForce = function(t) {
            this.immunity || this.f.add(t, this.f)
        }, s.prototype.applyImpulse = function(t) {
            this.immunity || this.v.add(t.mult(this.mInv), this.v)
        }, s.prototype.getEnergy = function() {
            return .5 * this.m * this.v.dot(this.v)
        }, s.prototype.updateAcceleration = function() {
            this.a.set(this.f.mult(this.mInv)), this.f.clear()
        }, s.prototype.getTransform = function() {
            var t = this.p;
            return void 0 !== this.axis && (s.AXIS.X == this.axis && (t.y = 0, t.z = 0), s.AXIS.Y == this.axis && (t.x = 0, t.z = 0), s.AXIS.Z == this.axis && (t.x = 0, t.y = 0)), r.translate(t.x, t.y, t.z)
        }, s.prototype.link = function(t) {
            return this.node = new o, this.node.link(t)
        }, s.prototype.add = function(t) {
            return this.node || (this.node = new o), this.node.add(t)
        }, s.prototype.render = function(t) {
            return t = t || this.node, t ? (this.spec.target.transform = this.getTransform(), this.spec.target.target = t.render(), this.spec) : void 0
        }, e.exports = s
    }), define("famous-physics/math/Quaternion", ["require", "exports", "module", "famous/Matrix"], function(t, i, e) {
        function s(t, i, e, s) {
            return this.w = void 0 !== t ? t : 1, this.x = i || 0, this.y = e || 0, this.z = s || 0, this
        }
        t("famous/Matrix");
        s.prototype.makeFromAngleAndAxis = function(t, i) {
            i.normalize();
            var e = .5 * t,
                s = Math.sin(e);
            return this.x = s * i.x, this.y = s * i.y, this.z = s * i.z, this.w = Math.cos(e), this
        }, s.prototype.clone = function() {
            return new s(this.w, this.x, this.y, this.z)
        }, s.prototype.setWXYZ = function(t, i, e, s) {
            return this.w = t, this.x = i, this.y = e, this.z = s, this
        }, s.prototype.set = function(t) {
            return this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z, this
        }, s.prototype.clear = function() {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, s.prototype.normalize = function() {
            var t = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == t) this.w = 1, this.x = this.y = this.z = 0;
            else {
                var i = 1 / t;
                this.w *= i, this.x *= i, this.y *= i, this.z *= i
            }
            return this
        }, s.prototype.getMatrix = function() {
            return this.normalize(), [1 - 2 * this.y * this.y - 2 * this.z * this.z, -2 * this.x * this.y - 2 * this.z * this.w, 2 * this.x * this.z - 2 * this.y * this.w, 0, -2 * this.x * this.y + 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z, -2 * this.y * this.z - 2 * this.x * this.w, 0, 2 * this.x * this.z + 2 * this.y * this.w, -2 * this.y * this.z + 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0, 0, 0, 0, 1]
        }, s.prototype.multiply = function(t, i) {
            return i = i || this.register, i.w = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z, i.x = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y, i.y = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x, i.z = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w, i
        }, s.prototype.isEqual = function(t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z ? !0 : !1
        }, s.prototype.dot = function(t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.add = function(t, i) {
            return i = i || this.register, i.w = this.w + t.w, i.x = this.x + t.x, i.y = this.y + t.y, i.z = this.z + t.z, i
        }, s.prototype.sub = function(t, i) {
            return i = i || this.register, i.w = this.w - t.w, i.x = this.x - t.x, i.y = this.y - t.y, i.z = this.z - t.z, i
        }, s.prototype.normSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.conj = function(t) {
            return t = t || this.register, t.w = this.w, t.x = -this.x, t.y = -this.y, t.z = -this.z, t
        }, s.prototype.inverse = function(t) {
            return t = t || this.register, this.conj(t), t.scalarDivide(this.normSquared(), t), t
        }, s.prototype.scalarDivide = function(t, i) {
            return i = i || this.register, t = 1 / t, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.scalarMult = function(t, i) {
            return i = i || this.register, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.isZero = function() {
            return 0 == this.x && 0 == this.y && 0 == this.z && 1 == this.w ? !0 : !1
        }, s.prototype.negate = function() {
            return this.w = -this.w, this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, s.prototype.zeroRotation = function() {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, s.prototype.slerp = function(t, i, e) {
            e = e || this.register;
            var s, o, n, r, a;
            return this.to.set(t), this.from.set(this), o = this.dot(t), 0 > o && (o = -o, this.to.negate()), 1 - o > this.epsilon ? (s = Math.acos(o), n = Math.sin(s), r = Math.sin((1 - i) * s) / n, a = Math.sin(i * s) / n) : (r = 1 - i, a = i), this.from.scalarMult(r, this.from), this.to.scalarMult(a, this.to), this.from.add(this.to, e), e
        }, s.prototype.epsilon = 1e-5, s.prototype.from = new s(0, 0, 0, 0), s.prototype.to = new s(0, 0, 0, 0), s.prototype.register = new s(0, 0, 0, 0), s.prototype.zero = new s(0, 0, 0, 0), s.prototype.one = new s(1, 1, 1, 1), e.exports = s
    }), define("famous-physics/bodies/Body", ["require", "exports", "module", "./Particle", "famous-physics/math/Vector", "famous-physics/math/Quaternion", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            o.call(this, t), this.q = t.q ? new r(t.q) : new r, this.w = t.w ? new n(t.w) : new n, this.L = t.L ? new n(t.L) : new n, this.t = t.t ? new n(t.t) : new n, this.I = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.Iinv = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.w.w = 0
        }
        var o = t("./Particle"),
            n = t("famous-physics/math/Vector"),
            r = t("famous-physics/math/Quaternion"),
            a = t("famous/Matrix");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.updateAngularVelocity = function() {
            var t = this.Iinv,
                i = this.L,
                e = i.x,
                s = i.y,
                o = i.z,
                n = t[0],
                r = t[1],
                a = t[2];
            this.w.setXYZ(n[0] * e + n[1] * s + n[2] * o, r[0] * e + r[1] * s + r[2] * o, a[0] * e + a[1] * s + a[2] * o)
        }, s.prototype.applyTorque = function(t) {
            this.getImmunity() || this.t.add(t, this.t)
        }, s.prototype.getTransform = function() {
            return a.move(this.q.getMatrix(), this.p.get())
        }, e.exports = s
    }), define("famous-physics/bodies/Circle", ["require", "exports", "module", "./Body"], function(t, i, e) {
        function s(t) {
            o.call(this, t), t = t || {}, this.r = t.r || 0, this.size = [2 * this.r, 2 * this.r];
            var i = this.r,
                e = this.m;
            this.I = [
                [.25 * e * i * i, 0, 0],
                [0, .25 * e * i * i, 0],
                [0, 0, .5 * e * i * i]
            ], this.Iinv = [
                [4 / (e * i * i), 0, 0],
                [0, 4 / (e * i * i), 0],
                [0, 0, 2 / (e * i * i)]
            ]
        }
        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }), define("famous-physics/bodies/Rectangle", ["require", "exports", "module", "./Body"], function(t, i, e) {
        function s(t) {
            o.call(this, t), t = t || {}, this.size = t.size || [0, 0];
            var i = this.size[0],
                e = this.size[1];
            this.I = [
                [e * e / 12, 0, 0],
                [0, i * i / 12, 0],
                [0, 0, (i * i + e * e) / 12]
            ], this.Iinv = [
                [12 / (e * e), 0, 0],
                [0, 12 / (i * i), 0],
                [0, 0, 12 / (i * i + e * e)]
            ]
        }
        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }), define("famous-physics/math/vector", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ.apply(this, t), t instanceof s && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }
        var o = new s(0, 0, 0);
        s.prototype.add = function(t, i) {
            return i = i || o, i.setXYZ(this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function(t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function(t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.equals = function(t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.rotate = function(t, i) {
            var e = t.x,
                s = t.y,
                o = t.z;
            return this.rotateX(e, i).rotateY(s, i).rotateZ(o, i)
        }, s.prototype.rotateX = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(e, -n * a + s * r, n * r - s * a)
        }, s.prototype.rotateY = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-n * a + e * r, s, n * r + e * a)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-s * a + e * r, s * r + e * a, n)
        }, s.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this.x, this.y, this.z)
        }, s.prototype.isZero = function() {
            return !(this.x || this.y || this.z)
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, s.prototype.put = function(t) {
            t.set(o)
        }, s.prototype.setXYZ = function(t, i, e) {
            return o.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function() {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function(t, i) {
            if (i = i || o, 1 / 0 === t) return i;
            var e = this.norm();
            return e > t && this.normalize().mult(t, i), i
        }, s.prototype.project = function(t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function(t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function() {
            return [this.x, this.y, this.z]
        }, s.prototype.get = function() {
            return this.toArray()
        }, s.prototype.zero = new s(0, 0, 0), s.prototype.one = new s(1, 1, 1), e.exports = s
    }), define("famous-physics/forces/Force", ["require", "exports", "module", "famous-physics/math/vector"], function(t, i, e) {
        function s() {
            this.force = new o
        }
        var o = t("famous-physics/math/vector");
        s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.prototype.getEnergy = function() {
            return 0
        }, e.exports = s
    }), define("famous-physics/constraints/Constraint", ["require", "exports", "module"], function(t, i, e) {
        function s() {}
        s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/integrator/SymplecticEuler", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            this.opts = {
                vCap: 1 / 0,
                aCap: 1 / 0
            }, t && this.setOpts(t)
        }
        s.prototype.integrateVelocity = function(t, i) {
            var e = t.v,
                s = t.a;
            s.isZero() || (s.cap(this.opts.aCap, s), e.add(s.mult(i), e))
        }, s.prototype.integratePosition = function(t, i) {
            var e = t.p,
                s = t.v;
            s.isZero() || (s.cap(this.opts.vCap, s), e.add(s.mult(i), e))
        }, s.prototype.integrateAngularMomentum = function(t, i) {
            var e = t.L,
                s = t.t;
            s.isZero() || (e.add(s.mult(i), e), s.clear())
        }, s.prototype.integrateOrientation = function(t, i) {
            var e = t.q,
                s = t.w;
            s.isZero() || (e.normalize(), e.add(e.multiply(s).scalarMult(.5 * i), e))
        }, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, e.exports = s
    }), define("famous-physics/PhysicsEngine", ["require", "exports", "module", "famous-physics/bodies/Particle", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Rectangle", "famous-physics/forces/Force", "famous-physics/constraints/Constraint", "famous-physics/integrator/SymplecticEuler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                speed: 1,
                steps: 1,
                vCap: 1 / 0,
                aCap: 1 / 0,
                constraintSteps: 2,
                constraintTolerance: 1e-4
            }, t && this.setOpts(t), this._particles = [], this._agents = {}, this._forces = [], this._constraints = [], this._playing = !0, this._buffer = 0, this._timestep = 1e3 / 60 / this.opts.steps, this._prevTime = void 0, this._currTime = void 0, this._integrator = new E({
                vCap: this.opts.vCap,
                aCap: this.opts.aCap
            }), this._currAgentId = 0, this.BODIES = s.BODIES
        }

        function o() {
            return Date.now()
        }

        function n(t, i, e) {
            void 0 === i && (i = this.getParticles()), i instanceof Array || (i = [i]), this._agents[this._currAgentId] = {
                agent: t,
                targets: i,
                source: e
            };
            var s = this._currAgentId,
                o = r.call(this, t);
            return o.push(s), this._currAgentId++
        }

        function r(t) {
            return t instanceof O ? this._forces : t instanceof I ? this._constraints : void 0
        }

        function a(t) {
            return this._agents[t]
        }

        function h(t) {
            var i = a.call(this, this._forces[t]);
            i.agent.applyForce(i.targets, i.source)
        }

        function u(t, i) {
            var e = this._agents[this._constraints[t]];
            return e.agent.applyConstraint(e.targets, e.source, i)
        }

        function c() {
            for (var t = this._forces.length - 1; t > -1; t--) h.call(this, t)
        }

        function p(t) {
            var i = 1 / 0,
                e = 0;
            for (this.opts.constraintTolerance; e < this.opts.constraintSteps;) {
                i = 0;
                for (var s = this._constraints.length - 1; s > -1; s--) i += u.call(this, s, t);
                e++
            }
        }

        function l(t) {
            t.immunity || t.updateAcceleration()
        }

        function d(t, i) {
            t.immunity || this._integrator.integrateVelocity(t, i)
        }

        function f(t) {
            !t.immunity && t instanceof C && t.updateAngularVelocity()
        }

        function m(t, i) {
            !t.immunity && t instanceof C && this._integrator.integrateAngularMomentum(t, i)
        }

        function g(t, i) {
            t.immunity || this._integrator.integratePosition(t, i)
        }

        function y(t, i) {
            !t.immunity && t instanceof C && this._integrator.integrateOrientation(t, i)
        }

        function _() {
            this.forEachParticle(l)
        }

        function v(t) {
            this.forEachParticle(d, t)
        }

        function b(t) {
            this.forEachParticle(g, t)
        }

        function S() {
            this.forEachParticle(f)
        }

        function w(t) {
            this.forEachParticle(m, t)
        }

        function x(t) {
            this.forEachParticle(y, t)
        }

        function T(t) {
            c.call(this), _.call(this), v.call(this, t), w.call(this, t), S.call(this, t), p.call(this, t), b.call(this, t), x.call(this, t)
        }

        function z(t, i) {
            i.push(t.render())
        }
        var M = t("famous-physics/bodies/Particle"),
            C = t("famous-physics/bodies/Body"),
            P = t("famous-physics/bodies/Circle"),
            k = t("famous-physics/bodies/Rectangle"),
            O = t("famous-physics/forces/Force"),
            I = t("famous-physics/constraints/Constraint"),
            E = t("famous-physics/integrator/SymplecticEuler");
        s.BODIES = {
            POINT: M,
            BODY: C,
            CIRCLE: P,
            RECTANGLE: k
        }, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] && (this.opts[i] = t[i])
        }, s.prototype.addBody = function(t) {
            return this._particles.push(t), t
        }, s.prototype.createParticle = function(t) {
            return this.addBody(new M(t))
        }, s.prototype.createBody = function(t) {
            var i = t.shape || s.BODIES.POINT;
            return this.addBody(new i(t))
        }, s.prototype.remove = function(t) {
            var i = this._particles.indexOf(t);
            if (i > -1) {
                for (var e = 0; e < Object.keys(this._agents); e++) this.detachFrom(e, t);
                this._particles.splice(i, 1)
            }
        }, s.prototype.attach = function(t, i, e) {
            if (t instanceof Array) {
                for (var s = [], o = 0; o < t.length; o++) s[o] = n.call(this, t[o], i, e);
                return s
            }
            return n.call(this, t, i, e)
        }, s.prototype.attachTo = function(t, i) {
            a.call(this, t).targets.push(i)
        }, s.prototype.detach = function(t) {
            var i = this.getAgent(t),
                e = r.call(this, i),
                s = e.indexOf(t);
            e.splice(s, 1), delete this._agents[t]
        }, s.prototype.detachFrom = function(t, i) {
            var e = a.call(this, t);
            if (e.source === i) this.detach(t);
            else {
                var s = e.targets,
                    o = s.indexOf(i);
                o > -1 && s.splice(o, 1)
            }
        }, s.prototype.detachAll = function() {
            this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
        }, s.prototype.getAgent = function(t) {
            return a.call(this, t).agent
        }, s.prototype.getParticles = function() {
            return this._particles
        }, s.prototype.getParticlesExcept = function(t) {
            var i = [];
            return this.forEachParticle(function(e) {
                -1 === t.indexOf(e) && i.push(e)
            }), i
        }, s.prototype.getPos = function(t) {
            return (t || this._particles[0]).getPos()
        }, s.prototype.getVel = function(t) {
            return (t || this._particles[0]).getVel()
        }, s.prototype.getTransform = function(t) {
            return (t || this._particles[0]).getTransform()
        }, s.prototype.setPos = function(t, i) {
            (i || this._particles[0]).setPos(t)
        }, s.prototype.setVel = function(t, i) {
            (i || this._particles[0]).setVel(t)
        }, s.prototype.forEachParticle = function(t, i) {
            for (var e = this.getParticles(), s = 0, o = e.length; o > s; s++) t.call(this, e[s], i)
        }, s.prototype.step = function() {
            if (this._playing) {
                this._prevTime || (this._prevTime = o()), this._currTime = o();
                var t = this._currTime - this._prevTime;
                this._prevTime = this._currTime, 0 != t && T.call(this, this.opts.speed * this._timestep)
            }
        }, s.prototype.render = function() {
            this.step();
            var t = [];
            return this.forEachParticle(z, t), t
        }, s.prototype.play = function() {
            this._prevTime = o(), this._playing = !0
        }, s.prototype.pause = function() {
            this._playing = !1
        }, s.prototype.toggle = function() {
            this._playing ? this.pause() : this.play()
        }, s.prototype.reverseTime = function() {
            this.opts.speed *= -1
        }, s.prototype.reverseVelocities = function() {
            this.forEachParticle(function(t) {
                t.v.mult(-1, t.v)
            })
        }, e.exports = s
    }), define("famous-physics/forces/Drag", ["require", "exports", "module", "famous-physics/forces/Force"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: .01,
                forceFunction: s.FORCE_FUNCTIONS.LINEAR
            }, t && this.setOpts(t), o.call(this)
        }
        var o = t("famous-physics/forces/Force");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
            LINEAR: function(t) {
                return t
            },
            QUADRATIC: function(t) {
                return t.mult(t.norm())
            }
        }, s.prototype.applyForce = function(t) {
            var i = this.opts.strength,
                e = this.opts.forceFunction,
                s = this.force;
            for (var o in t) {
                var n = t[o];
                e(n.v).mult(-i).put(s), n.applyForce(s), n.L && n.L.mult(1 - this.opts.strength, n.L)
            }
        }, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, e.exports = s
    }), define("famous-physics/forces/Spring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                period: 0,
                dampingRatio: 0,
                length: 0,
                lMin: 0,
                lMax: 1 / 0,
                anchor: void 0,
                forceFunction: s.FORCE_FUNCTIONS.HOOK,
                callback: void 0,
                callbackTolerance: 1e-7
            }, t && this.setOpts(t), this.init(), this._canFireCallback = void 0, h.call(this)
        }

        function o(t) {
            this.forceFunction = t
        }

        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }

        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }

        function a(t, i) {
            return .5 * t * i * i
        }
        var h = t("famous-physics/forces/Force"),
            u = t("famous-physics/math/Vector");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = h, s.FORCE_FUNCTIONS = {
            FENE: function(t, i) {
                var e = .99 * i,
                    s = Math.max(Math.min(t, e), -e);
                return s / (1 - s * s / (i * i))
            },
            HOOK: function(t) {
                return t
            }
        }, s.prototype.init = function() {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, s.prototype.applyForce = function(t, i) {
            for (var e = this.force, s = this.opts, o = s.stiffness, n = s.damping, r = s.length, h = s.anchor || i.p, u = s.callback, c = 0; c < t.length; c++) {
                var p = t[c],
                    l = h.sub(p.p),
                    d = l.norm() - r;
                if (0 == d) return;
                var f = p.m;
                if (o *= f, n *= f, e.set(l.normalize(o * this.forceFunction(d, this.opts.lMax))), n && (i ? e.add(p.v.sub(i.v).mult(-n), e) : e.add(p.v.mult(-n), e)), p.applyForce(e), i && i.applyForce(e.mult(-1)), this.opts.callback) {
                    var m = p.getEnergy() + a(o, d);
                    this.fireCallback(p, u, m)
                }
            }
        }, s.prototype.fireCallback = function(t, i, e) {
            e < this.opts.callbackTolerance ? (this._canFireCallback && i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }, s.prototype.getEnergy = function(t, i) {
            var e = this.opts,
                s = e.length,
                o = e.anchor || i.p,
                n = e.stiffness,
                r = o.sub(t.p),
                a = r.norm() - s;
            return .5 * n * a * a
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof u && (this.opts.anchor = t.anchor.p), t.anchor instanceof u && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new u(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, e.exports = s
    }), define("famous-sync/TouchSync", ["require", "exports", "module", "./TouchTracker", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.output = new h, this.touchTracker = new a, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1
            }, this.setOptions(i ? i : this.options), h.setOutputHandler(this, this.output), h.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", n.bind(this)), this.touchTracker.on("trackend", r.bind(this))
        }

        function o(t) {
            this.output.emit("start", {
                count: t.count,
                touch: t.touch.identifier
            })
        }

        function n(t) {
            var i = t.history,
                e = i[i.length - 2].timestamp,
                o = i[i.length - 1].timestamp,
                n = i[i.length - 2].touch,
                r = i[i.length - 1].touch,
                a = r.pageX - n.pageX,
                h = r.pageY - n.pageY;
            this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
            var u = Math.max(o - e, 8),
                c = a / u,
                p = h / u;
            if (i.length > 2) var l = i[i.length - 3].touch,
                d = (r.pageX - 2 * n.pageX + l.pageX) / (u * u),
                f = (r.pageY - 2 * n.pageY + l.pageY) / (u * u);
            else var d = 0,
                f = 0;
            var m, g, y, _ = this.targetGet(),
                v = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (m = _ + v * a, g = v * c, y = v * p) : this.options.direction == s.DIRECTION_Y ? (m = _ + v * h, g = v * p, y = v * f) : (m = [_[0] + v * a, _[1] + v * h], g = [v * c, v * p], y = [v * d, v * f]), this.output.emit("update", {
                p: m,
                v: g,
                a: y,
                touch: t.touch.identifier
            })
        }

        function r(t) {
            var i = void 0 !== this.options.direction ? 0 : [0, 0],
                e = t.history,
                o = t.count,
                n = this.targetGet();
            if (e.length > 1) {
                var r = e[e.length - 2].timestamp,
                    a = e[e.length - 1].timestamp,
                    h = e[e.length - 2].touch,
                    u = e[e.length - 1].touch,
                    c = u.pageX - h.pageX,
                    p = u.pageY - h.pageY;
                this.options.rails && (Math.abs(c) > Math.abs(p) ? p = 0 : c = 0);
                var i, l = Math.max(a - r, 1),
                    d = c / l,
                    f = p / l,
                    m = this.options.scale;
                i = this.options.direction == s.DIRECTION_X ? m * d : this.options.direction == s.DIRECTION_Y ? m * f : [m * d, m * f]
            }
            this.output.emit("end", {
                p: n,
                v: i,
                count: o,
                touch: t.touch.identifier
            })
        }
        var a = t("./TouchTracker"),
            h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.getOptions = function() {
            return this.options
        }, e.exports = s
    }), define("famous-sync/ScrollSync", ["require", "exports", "module", "famous/EventHandler", "famous/Engine"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                minimumEndSpeed: 1 / 0,
                rails: !1,
                scale: 1,
                stallTime: 50
            }, this.setOptions(i ? i : this.options), this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this._lastFrame = void 0, this.input.on("mousewheel", n.bind(this)), this.input.on("wheel", n.bind(this)), this.inProgress = !1, this._loopBound = !1
        }

        function o() {
            var t = Date.now();
            if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                var i = this.targetGet();
                this.inProgress = !1;
                var e = 0;
                Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (e = this._prevVel), this.output.emit("end", {
                    p: i,
                    v: e,
                    slip: !0
                })
            }
        }

        function n(t) {
            t.preventDefault(), this.inProgress || (this.inProgress = !0, this.output.emit("start", {
                slip: !0
            }), this._loopBound || (a.on("prerender", o.bind(this)), this._loopBound = !0));
            var i = this._prevTime,
                e = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : -t.deltaX,
                n = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : -t.deltaY,
                r = Date.now();
            this.options.rails && (Math.abs(e) > Math.abs(n) ? n = 0 : e = 0);
            var h, u, c = Math.max(r - i, 8),
                p = e / c,
                l = n / c,
                d = this.targetGet(),
                f = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (h = d + f * e, u = f * p) : this.options.direction == s.DIRECTION_Y ? (h = d + f * n, u = f * l) : (h = [d[0] + f * e, d[1] + f * n], u = [f * p, f * l]), this.output.emit("update", {
                p: h,
                v: u,
                slip: !0
            }), this._prevTime = r, this._prevVel = u
        }
        var r = t("famous/EventHandler"),
            a = t("famous/Engine");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
        }, e.exports = s
    }), define("famous-sync/GenericSync", ["require", "exports", "module", "famous/EventHandler", "./TouchSync", "./ScrollSync"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this._handlers = void 0, this.options = {
                syncClasses: h
            }, this._handlerOptions = this.options, i && this.setOptions(i), this._handlers || o.call(this)
        }

        function o() {
            if (this._handlers)
                for (var t = 0; t < this._handlers.length; t++) this.eventInput.unpipe(this._handlers[t]), this._handlers[t].unpipe(this.eventOutput);
            this._handlers = [];
            for (var t = 0; t < this.options.syncClasses.length; t++) {
                var i = this.options.syncClasses[t];
                this._handlers[t] = new i(this.targetGet, this._handlerOptions), this.eventInput.pipe(this._handlers[t]), this._handlers[t].pipe(this.eventOutput)
            }
        }
        var n = t("famous/EventHandler"),
            r = t("./TouchSync"),
            a = t("./ScrollSync"),
            h = [r, a];
        s.register = function(t) {
            h.indexOf(t) < 0 && h.push(t)
        }, s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DIRECTION_Z = 2, s.prototype.setOptions = function(t) {
            if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, o.call(this)), this._handlers)
                for (var i = 0; i < this._handlers.length; i++) this._handlers[i].setOptions(this._handlerOptions)
        }, e.exports = s
    }), define("famous/ViewSequence", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            this.array = t, this.index = i || 0, this.loop = e || !1, this._prev = void 0, this._prevIndex = void 0, this._next = void 0, this._nextIndex = void 0
        }
        s.prototype.getPrevious = function() {
            var t = this.index - 1;
            if (0 == this.index) {
                if (!this.loop) return void 0;
                t = this.array.length - 1
            }
            return this._prev && this._prevIndex == t || (this._prev = new s(this.array, t, this.loop), this._prev._next = this, this._prev._nextIndex = this.index, this._prevIndex = t), this._prev
        }, s.prototype.getNext = function() {
            var t = this.index + 1;
            if (t >= this.array.length) {
                if (!this.loop) return void 0;
                t = 0
            }
            return this._next && this._next == t || (this._next = new s(this.array, t, this.loop), this._next._prev = this, this._next._prevIndex = this.index, this._nextIndex = t), this._next
        }, s.prototype.toString = function() {
            return this.index
        }, s.prototype.get = function() {
            return this.array[this.index]
        }, s.prototype.getSize = function() {
            var t = this.get();
            if (t) return t.getSize ? t.getSize.apply(t, arguments) : void 0
        }, s.prototype.render = function() {
            var t = this.get();
            if (t) return t.render.apply(t, arguments)
        }, e.exports = s
    }), define("famous/Group", ["require", "exports", "module", "./Context", "./Matrix", "./Surface"], function(t, i, e) {
        function s(t) {
            r.call(this, t), this._shouldRecalculateSize = !1, this._container = document.createDocumentFragment(), this.context = new o(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0], this._origin = void 0, this._originTransfer = {
                render: function(t) {
                    return {
                        origin: this._origin,
                        target: t
                    }
                }.bind(this)
            }
        }
        var o = t("./Context"),
            n = t("./Matrix"),
            r = t("./Surface");
        s.SIZE_ZERO = [0, 0], s.prototype = Object.create(r.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "group", s.prototype.link = function() {
            var t = this.context.link(this._originTransfer);
            return t.link.apply(t, arguments)
        }, s.prototype.add = function() {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function() {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function() {
            return r.prototype.render.call(this)
        }, s.prototype.deploy = function(t) {
            this.context.migrate(t)
        }, s.prototype.recall = function() {
            this._container = document.createDocumentFragment(), this.context.migrate(this._container)
        }, s.prototype.commit = function(t, i, e, o, a) {
            i = n.moveThen([-o[0] * a[0], -o[1] * a[1], 0], i);
            var h = r.prototype.commit.call(this, t, i, e, o, s.SIZE_ZERO);
            return this._origin = o, (a[0] != this._groupSize[0] || a[1] != this._groupSize[1]) && (this.context.setSize(a), this._groupSize[0] = a[0], this._groupSize[1] = a[1]), this.context.update(), h
        }, e.exports = s
    }), define("famous-views/Scrollview", ["require", "exports", "module", "famous/Utility", "famous-physics/PhysicsEngine", "famous-physics/bodies/Particle", "famous-physics/forces/Drag", "famous-physics/forces/Spring", "famous/Matrix", "famous/EventHandler", "famous-sync/GenericSync", "famous/ViewSequence", "famous/Group", "famous/Entity"], function(t, i, e) {
        function s(t) {
            this.options = {
                direction: v.Direction.Y,
                rails: !0,
                defaultItemSize: [100, 100],
                itemSpacing: 0,
                clipSize: void 0,
                margin: void 0,
                drag: .001,
                edgeGrip: .5,
                edgePeriod: 300,
                edgeDamp: 1,
                paginated: !1,
                pagePeriod: 500,
                pageDamp: .8,
                pageStopSpeed: 1 / 0,
                pageSwitchSpeed: 1,
                speedLimit: 10
            }, this.physicsEngine = new b, this.particle = new S, this.physicsEngine.addBody(this.particle), this.spring = new x({
                anchor: [0, 0, 0]
            }), this.drag = new w, this.sync = new M(function() {
                return -this.getPosition()
            }.bind(this), {
                direction: this.options.direction == v.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
            }), this.eventInput = new z, this.eventOutput = new z, this.sync.pipe(this.eventInput), this.sync.pipe(this.eventOutput), z.setOutputHandler(this, this.eventOutput), this._outputFunction = void 0, this._masterOutputFunction = void 0, this.setOutputFunction(), this.touchCount = 0, this._springAttached = !1, this.currSpring = void 0, this._onEdge = 0, this._springPosition = 0, this._touchVelocity = void 0, this._earlyEnd = !1, this._masterOffset = 0, this._lastFrameNode = void 0, this.setOptions(t ? t : {}), a.call(this), this.group = new P, this.group.link({
                render: _.bind(this)
            }), this._entityId = k.register(this), this._contextSize = [window.innerWidth, window.innerHeight], this._offsets = {}
        }

        function o(t) {
            this.touchCount = t.count, void 0 === t.count && (this.touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd = !1
        }

        function n(t) {
            var i = -t.p,
                e = -t.v;
            this._onEdge && t.slip && (0 > e && this._onEdge < 0 || e > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd = !0) : this._earlyEnd && Math.abs(e) > Math.abs(this.particle.getVel()[0]) && o.call(this, t)), this._earlyEnd || (this._touchVelocity = e, this.setPosition(i))
        }

        function r(t) {
            if (this.touchCount = t.count || 0, !this.touchCount) {
                u.call(this), this._onEdge && (this._springAttached = !0), h.call(this);
                var i = -t.v,
                    e = this.options.speedLimit;
                t.slip && (e *= this.options.edgeGrip), -e > i ? i = -e : i > e && (i = e), this.setVelocity(i), this._touchVelocity = void 0
            }
        }

        function a() {
            this.eventInput.on("start", o.bind(this)), this.eventInput.on("update", n.bind(this)), this.eventInput.on("end", r.bind(this))
        }

        function h() {
            this._springAttached ? this.physicsEngine.attach([this.spring], this.particle) : this.physicsEngine.attach([this.drag], this.particle)
        }

        function u() {
            this._springAttached = !1, this.physicsEngine.detachAll()
        }

        function c(t) {
            return t || (t = this.options.defaultItemSize), t[this.options.direction == v.Direction.X ? 0 : 1]
        }

        function p(t) {
            this._springPosition += t, this.setPosition(this.getPosition() + t), this.spring.setOpts({
                anchor: [this._springPosition, 0, 0]
            })
        }

        function l() {
            for (var t = !1; !t && this.getPosition() < 0;) {
                var i = this.node.getPrevious ? this.node.getPrevious() : void 0;
                if (i) {
                    var e = i.getSize ? i.getSize() : this.options.defaultItemSize,
                        s = c.call(this, e) + this.options.itemSpacing;
                    p.call(this, s), this._masterOffset -= s, this.node = i
                } else t = !0
            }
            for (var o = this.node && this.node.getSize ? this.node.getSize() : this.options.defaultItemSize; !t && this.getPosition() >= c.call(this, o) + this.options.itemSpacing;) {
                var n = this.node.getNext ? this.node.getNext() : void 0;
                if (n) {
                    var s = c.call(this, o) + this.options.itemSpacing;
                    p.call(this, -s), this._masterOffset += s, this.node = n, o = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize
                } else t = !0
            }
            Math.abs(this._masterOffset) > y.call(this) + this.options.margin && (this._masterOffset = 0)
        }

        function d(t) {
            !this._onEdge && t ? (this.sync.setOptions({
                scale: this.options.edgeGrip
            }), this.touchCount || this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))) : this._onEdge && !t && (this.sync.setOptions({
                scale: 1
            }), this._springAttached && (u.call(this), h.call(this))), this._onEdge = t
        }

        function f() {
            if (0 == this.touchCount && !this._springAttached && !this._onEdge && this.options.paginated && Math.abs(this.getVelocity()) < this.options.pageStopSpeed) {
                var t = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize,
                    i = Math.abs(this.getVelocity()) > this.options.pageSwitchSpeed,
                    e = this.getVelocity() > 0,
                    s = this.getPosition() > .5 * c.call(this, t);
                (i && e || !i && s) && this.goToNextPage(), m.call(this, 0, {
                    period: this.options.pagePeriod,
                    damp: this.options.pageDamp
                }), this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle)
            }
        }

        function m(t, i) {
            i || (i = {
                period: this.options.edgePeriod,
                damp: this.options.edgeDamp
            }), this._springPosition = t, this.spring.setOpts({
                anchor: [this._springPosition, 0, 0],
                period: i.period,
                dampingRatio: i.damp
            })
        }

        function g(t, i, e) {
            var s = t.getSize ? t.getSize() : this.options.defaultItemSize;
            s || (s = this.options.defaultItemSize);
            var o = this._outputFunction(i);
            return e.push({
                transform: o,
                target: t.render()
            }), s[this.options.direction == v.Direction.X ? 0 : 1]
        }

        function y() {
            return this.options.clipSize ? this.options.clipSize : c.call(this, this._contextSize)
        }

        function _() {
            var t = {};
            if (this.node) {
                var i = this.getPosition(),
                    e = [],
                    s = 0,
                    o = 0,
                    n = this.node;
                for (t[n] = 0; n && o - i < y.call(this) + this.options.margin;) o += g.call(this, n, o + this._masterOffset, e) + this.options.itemSpacing, n = n.getNext ? n.getNext() : void 0, t[n] = o, !n && o - i - this.options.itemSpacing <= y.call(this) && (this._onEdge || m.call(this, o - y.call(this) - this.options.itemSpacing), s = 1);
                if (n = this.node && this.node.getPrevious ? this.node.getPrevious() : void 0, o = 0, n) {
                    var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                    o -= c.call(this, r) + this.options.itemSpacing
                } else 0 >= i && (this._onEdge || m.call(this, 0), s = -1);
                for (; n && o - i > -(y.call(this) + this.options.margin);)
                    if (t[n] = o, g.call(this, n, o + this._masterOffset, e), n = n.getPrevious ? n.getPrevious() : void 0) {
                        var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                        o -= c.call(this, r) + this.options.itemSpacing
                    }
                return this._offsets = t, d.call(this, s), f.call(this), this.options.paginated && this._lastFrameNode !== this.node && (this.eventOutput.emit("pageChange"), this._lastFrameNode = this.node), e
            }
        }
        var v = t("famous/Utility"),
            b = t("famous-physics/PhysicsEngine"),
            S = t("famous-physics/bodies/Particle"),
            w = t("famous-physics/forces/Drag"),
            x = t("famous-physics/forces/Spring"),
            T = t("famous/Matrix"),
            z = t("famous/EventHandler"),
            M = t("famous-sync/GenericSync"),
            C = t("famous/ViewSequence"),
            P = t("famous/Group"),
            k = t("famous/Entity");
        s.prototype.emit = function(t, i) {
            "update" == t || "start" == t || "end" == t ? this.eventInput.emit(t, i) : this.sync.emit(t, i)
        }, s.prototype.getPosition = function(t) {
            var i = this.particle.getPos()[0];
            if (void 0 === t) return i;
            var e = this._offsets[t];
            return void 0 !== e ? i - e : void 0
        }, s.prototype.setPosition = function(t) {
            this.particle.setPos([t, 0, 0])
        }, s.prototype.getVelocity = function() {
            return this.touchCount ? this._touchVelocity : this.particle.getVel()[0]
        }, s.prototype.setVelocity = function(t) {
            this.particle.setVel([t, 0, 0])
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction, "x" === this.options.direction ? this.options.direction = v.Direction.X : "y" === this.options.direction && (this.options.direction = v.Direction.Y)), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.clipSize && (this.options.clipSize = t.clipSize), void 0 !== t.margin && (this.options.margin = t.margin), void 0 !== t.drag && (this.options.drag = t.drag), void 0 !== t.friction && (this.options.friction = t.friction), void 0 !== t.edgeGrip && (this.options.edgeGrip = t.edgeGrip), void 0 !== t.edgePeriod && (this.options.edgePeriod = t.edgePeriod), void 0 !== t.edgeDamp && (this.options.edgeDamp = t.edgeDamp), void 0 !== t.paginated && (this.options.paginated = t.paginated), void 0 !== t.pageStopSpeed && (this.options.pageStopSpeed = t.pageStopSpeed), void 0 !== t.pageSwitchSpeed && (this.options.pageSwitchSpeed = t.pageSwitchSpeed), void 0 !== t.pagePeriod && (this.options.pagePeriod = t.pagePeriod), void 0 !== t.pageDamp && (this.options.pageDamp = t.pageDamp), void 0 !== t.speedLimit && (this.options.speedLimit = t.speedLimit), void 0 === this.options.margin && (this.options.margin = .5 * Math.max(window.innerWidth, window.innerHeight)), this.drag.setOpts({
                strength: this.options.drag
            }), this.spring.setOpts({
                period: this.options.edgePeriod,
                dampingRatio: this.options.edgeDamp
            }), this.sync.setOptions({
                rails: this.options.rails,
                direction: this.options.direction == v.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
            })
        }, s.prototype.setOutputFunction = function(t, i) {
            t || (t = function(t) {
                return this.options.direction == v.Direction.X ? T.translate(t, 0) : T.translate(0, t)
            }.bind(this), i = t), this._outputFunction = t, this._masterOutputFunction = i ? i : function(i) {
                return T.inverse(t(-i))
            }
        }, s.prototype.goToPreviousPage = function() {
            var t = this.node.getPrevious ? this.node.getPrevious() : void 0;
            if (t) {
                var i = c.call(this, this.node.getSize()) + this.options.itemSpacing;
                this.setPosition(this.getPosition() + i), this.node = t;
                for (var e in this.offsets) this.offsets[e] += i
            }
            return t
        }, s.prototype.goToNextPage = function() {
            var t = this.node.getNext ? this.node.getNext() : void 0;
            if (t) {
                var i = c.call(this, this.node.getSize()) + this.options.itemSpacing;
                this.setPosition(this.getPosition() - i), this.node = t;
                for (var e in this.offsets) this.offsets[e] -= i
            }
            return t
        }, s.prototype.getCurrentNode = function() {
            return this.node
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new C(t)), this.node = t, this._lastFrameNode = t
        }, s.prototype.getSize = function() {
            return this.options.direction == v.Direction.X ? [y.call(this), void 0] : [void 0, y.call(this)]
        }, s.prototype.render = function() {
            return this.physicsEngine.step(), this._entityId
        }, s.prototype.commit = function(t, i, e, s, o) {
            this._contextSize = o, l.call(this);
            var n = this.getPosition(),
                r = this._masterOutputFunction(-(n + this._masterOffset));
            return {
                transform: T.moveThen([-s[0] * o[0], -s[1] * o[1], 0], i),
                opacity: e,
                origin: s,
                size: o,
                target: {
                    transform: r,
                    origin: s,
                    target: this.group.render()
                }
            }
        }, e.exports = s
    }), define("famous-widgets/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "famous-views/Scrollview", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }
        var o = t("famous/ContainerSurface"),
            n = t("famous/EventHandler"),
            r = t("famous-views/Scrollview"),
            a = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            look: void 0,
            feel: {
                direction: a.Direction.X
            }
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, s.prototype.sequenceFrom = function() {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, s.prototype.render = function() {
            return this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("app/widgets/ScrollbarScrollview", ["require", "exports", "module", "famous/Utility", "famous-views/Scrollview"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.scrollviewStats = {
                itemPercentage: 0,
                totalPercentage: 0,
                totalSize: [0, 0],
                startDistance: 0,
                endDistance: 0,
                currentIndex: 0
            }, this._getPercentage = n.bind(this), this._getTotalSize = o.bind(this), this.on("update", this._getPercentage), this.on("start", this._getTotalSize)
        }

        function o() {
            var t = this.getCurrentNode();
            if (t) {
                var i = t.array;
                this.scrollviewStats.totalSize[0] = 0, this.scrollviewStats.totalSize[1] = 0;
                for (var e = 0; e < i.length; e++) {
                    var s = i[e].getSize();
                    s[0] && (this.scrollviewStats.totalSize[0] += s[0] + this.options.itemSpacing), s[1] && (this.scrollviewStats.totalSize[1] += s[1] + this.options.itemSpacing)
                }
            }
        }

        function n() {
            var t = this.scrollviewStats,
                i = t.startDistance + t.currentPos;
            t.totalPercentage = i / t.totalSize[this.options.direction], console.log("percentage", t.totalPercentage.toFixed(3), "currentPos: ", i.toFixed(3), "totalSize: ", t.totalSize[this.options.direction].toFixed(3))
        }
        var r = t("famous/Utility"),
            a = t("famous-views/Scrollview");
        s.prototype = Object.create(a.prototype), s.prototype.setPosition = function(t) {
            this._calcStats(t), this.particle.setPos([t, 0, 0])
        }, s.prototype._calcStats = function(t) {
            this.scrollviewStats.currentPos = t, this._getPercentageUpToIndex(this.node.index)
        }, s.prototype._getPercentageUpToIndex = function(t) {
            this.scrollviewStats.currentIndex !== t && (this._distanceFromZero(t), this._distanceToEnd()), this.scrollviewStats.currentIndex = t
        }, s.prototype._distanceFromZero = function(t) {
            var i = this.getCurrentNode();
            if (i && 0 != t) {
                var e = i.array;
                this.scrollviewStats.startDistance = 0;
                for (var s = 0; s < e.length && s !== t; s++) this.scrollviewStats.startDistance += e[s].getSize()[this.options.direction] + this.options.itemSpacing
            }
        }, s.prototype._distanceToEnd = function() {
            this.scrollviewStats.endDistance = this.scrollviewStats.totalSize[this.options.direction] - this.scrollviewStats.startDistance
        }, s.prototype._sizeForCurrentDirection = function(t) {
            return t || (t = this.options.defaultItemSize), t[this.options.direction == r.Direction.X ? 0 : 1]
        }, e.exports = s
    }), define("app/widgets/GridLayout", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous-utils/Utils", "famous/Engine", "famous/View", "./LightboxTile", "famous/Modifier", "famous-animation/Easing", "famous/RenderNode", "famous-utils/Time", "famous-widgets/ScrollContainer", "famous-views/Scrollview", "./ScrollbarScrollview", "famous/Utility", "famous/Entity", "famous/Group"], function(t, i, e) {
        function s() {
            if (S.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this._entityId = k.register(this), this._numItems = 0, this._containerWidth, this._containerHeight, this._numRows, this._numColumns, this._rowHeight, this._columnWidth, this._gridWidth, this._gridHeight, this._marginLeft, this._marginRight, this._marginTop, this._marginBottom, this._hasMarginNodes, this._lastGroupingLimit, this._getInternalSize = u.bind(this), this.renderables = [], this.modifiers = [], this.scrollNodes = [], this.displacements = [], this.options.updateOnResize && b.on("resize", v.debounce(p.bind(this), this.options.debounceDelay)), this.mainTransform = new w, l.call(this), this.options.useScrollview) {
                var t = this.options.containerProperties;
                this.options.overflowHidden && (t.overflow = "hidden"), this.options.useContainer ? (this.scroll = new M({
                    look: {
                        properties: t,
                        size: [this._containerWidth, this._containerHeight]
                    },
                    feel: {
                        direction: this.options.direction,
                        clipSize: 0
                    }
                }), this.scroll.surface.context.setPerspective(this.options.perspective)) : this.scroll = new C({
                    direction: this.options.direction,
                    paginated: this.options.paginated,
                    clipSize: 0,
                    margin: window.innerWidth,
                    itemSpacing: 0
                }), this.node.add(this.mainTransform).link(this.scroll), this.scroll.sequenceFrom(this.scrollNodes), this.pipe(this.scroll)
            } else this.mainNode = new T, this.node.add(this.mainTransform).link(this.mainNode)
        }

        function o(t) {
            this._numItems++;
            var i = new w;
            return this.options.useScrollview ? t.pipe(this.scroll) : this.mainNode.add(i).link(t), [i, t]
        }

        function n(t, i) {
            var e = o.call(this, t);
            this.modifiers.unshift(e[0]), this.renderables.unshift(e[1]), a.call(this, i)
        }

        function r(t, i) {
            var e = o.call(this, t);
            this.modifiers.push(e[0]), this.renderables.push(e[1]), a.call(this, i)
        }

        function a(t) {
            void 0 == t && p.call(this)
        }

        function h() {
            this._internalSize = this.options.direction == P.Direction.X ? [this._columnWidth + 2 * this.options.columnGutters, this._rowHeight * this._numRows + (this._numRows - 1) * this.options.rowGutters] : [this._numColumns * this._columnWidth + (this._numColumns - 1) * this.options.columnGutters, this._rowHeight + this.options.rowGutters]
        }

        function u() {
            return this._internalSize
        }

        function c(t) {
            this._dirty && l.call(this);
            for (var i = 0; i < this.modifiers.length; i++) {
                var e = y.call(this, i);
                this.modifiers[i].halt(), this.options.delayTransition ? z.setTimeout(this.modifiers[i].setTransform.bind(this.modifiers[i], e, this.options.transition, t), i * this.options.delayIncrement) : this.modifiers[i].setTransform(e, this.options.transition, t)
            }
            this.emit("reflow")
        }

        function p() {
            this._dirty = !0, c.call(this)
        }

        function l() {
            var t = this.options.useContainer ? this.scroll.scrollview : this.scroll;
            this._marginLeft = this.options.leftMargin, this._marginRight = this.options.rightMargin, this._marginTop = this.options.topMargin, this._marginBottom = this.options.bottomMargin, this._containerHeight = window.innerHeight, this._containerWidth = window.innerWidth, this.options.useContainer && this.scroll.setOptions({
                look: {
                    size: [this._containerWidth, this._containerHeight]
                }
            }), this._gridHeight = this._containerHeight - (this._marginTop + this._marginTop), this._gridWidth = this._containerWidth - (this._marginLeft + this._marginRight), this.options.numRows && (this._numRows = this.options.numRows, this._rowHeight = (this._gridHeight - this.options.rowGutters * (this._numRows - 1)) / this._numRows), this.options.numColumns && (this._numColumns = this.options.numColumns, this._columnWidth = (this._gridWidth - this.options.columnGutters * (this._numColumns - 1)) / this._numColumns), this.options.columnWidth && (this._columnWidth = this.options.columnWidth), this.options.rowHeight && (this._rowHeight = this.options.rowHeight), this.options.direction == P.Direction.Y ? (this._numColumns = Math.max(Math.floor(this._gridWidth / (this._columnWidth + this.options.columnGutters)), 1), this._numRows = Math.ceil(this._numItems / this._numColumns), this.options.autoMargin && (this._marginLeft = .5 * (this._containerWidth - (this._numColumns * this._columnWidth + (this._numColumns - 1) * this.options.columnGutters)), this._marginRight = this._marginLeft), this._gridHeight = this._numRows * this._rowHeight + this._marginTop + this._marginBottom + this.options.rowGutters * (this._numRows - 1)) : this.options.direction == P.Direction.X && (this._numRows = Math.floor(this._gridHeight / (this._rowHeight + this.options.rowGutters)), this._numColumns = Math.ceil(this._numItems / this._numRows), this.options.autoMargin && (this._marginTop = .5 * (this._containerHeight - (this._numRows * this._rowHeight + (this._numRows - 1) * this.options.rowGutters)), this._marginBottom = this._marginTop), this._gridWidth = this._numColumns * this._columnWidth + this._marginTop + this._marginRight + this.options.columnGutters * (this._numColumns - 1)), t && t.getPosition() > this._gridHeight && t.setPosition(0), this.options.useScrollview && (h.call(this), d.call(this)), this._dirty = !1
        }

        function d() {
            var t = !1;
            g.call(this);
            var i = this.options.direction == P.Direction.X ? this._numRows : this._numColumns;
            this._lastGroupingLimit !== i && void 0 !== this._lastGroupingLimit && (t = !0);
            for (var e = 0, s = 0; s < this.modifiers.length; s++) {
                if (s % i == 0 && 0 !== s && e++, this.scrollNodes[e] || (this.scrollNodes[e] = new T, this.scrollNodes[e].getSize = this._getInternalSize), this.scrollNodes[e].getSize !== this._getInternalSize && (this.scrollNodes[e].getSize = this._getInternalSize), this.scrollNodes[e].add(this.modifiers[s]).link(this.renderables[s]), t) {
                    var o, n, r = this.displacements[s] - e,
                        a = _.getTranslate(this.modifiers[s].getFinalTransform());
                    this.options.direction == P.Direction.X ? (n = r * (this._columnWidth + this.options.columnGutters), o = _.translate(a[0] + n, a[1], a[2])) : (n = r * (this._rowHeight + this.options.rowGutters), o = _.translate(a[0], a[1] + n, a[2])), this.modifiers[s].setTransform(o)
                }
                this.displacements[s] = e
            }
            e++;
            var h = this.scrollNodes.length - e;
            h > 0 && this.scrollNodes.splice(this.scrollNodes.length - h, this.scrollNodes.length), f.call(this), this._lastGroupingLimit = i
        }

        function f() {
            this._hasMarginNodes = !0;
            var t = new T;
            t.getSize = function() {
                return this.options.direction == P.Direction.X ? [this._marginLeft, this._internalSize[1]] : [this._internalSize[0], this._marginTop]
            }.bind(this), this.scrollNodes.unshift(t);
            var i = new T;
            i.getSize = function() {
                return this.options.direction == P.Direction.X ? [this._marginLeft - this.options.columnGutters, this._internalSize[1]] : [this._internalSize[0], this._marginBottom - this.options.rowGutters]
            }.bind(this), this.scrollNodes.push(i)
        }

        function m() {
            this.scrollNodes.splice(0, 1), this.scrollNodes.splice(this.scrollNodes.length - 1, 1), this._hasMarginNodes = !1
        }

        function g() {
            this._hasMarginNodes && m.call(this);
            for (var t = 0; t < this.scrollNodes.length; t++) this.scrollNodes[t] && (this.scrollNodes[t].object = void 0)
        }

        function y(t) {
            var i, e, s = t % this._numColumns,
                o = Math.floor(t / this._numColumns);
            return this.options.useScrollview ? this.options.direction == P.Direction.X ? (e = o * this._rowHeight + o * this.options.rowGutters + this._marginTop, _.translate(0, e, 0)) : (i = s * this._columnWidth + s * this.options.columnGutters + this._marginLeft, _.translate(i, 0, 0)) : (i = s * this._columnWidth + s * this.options.columnGutters + this._marginLeft, e = o * this._rowHeight + o * this.options.rowGutters + this._marginTop, _.translate(i, e, 0))
        } {
            var _ = (t("famous/Surface"), t("famous/Matrix")),
                v = (t("famous/EventHandler"), t("famous-utils/Utils")),
                b = t("famous/Engine"),
                S = t("famous/View"),
                w = (t("./LightboxTile"), t("famous/Modifier")),
                x = t("famous-animation/Easing"),
                T = t("famous/RenderNode"),
                z = t("famous-utils/Time"),
                M = t("famous-widgets/ScrollContainer"),
                C = (t("famous-views/Scrollview"), t("./ScrollbarScrollview")),
                P = t("famous/Utility"),
                k = t("famous/Entity");
            t("famous/Group")
        }
        s.prototype = Object.create(S.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            containerWidthFn: function() {
                return window.innerWidth
            },
            containerHeightFn: function() {
                return window.innerHeight
            },
            columnWidth: void 0,
            rowHeight: void 0,
            numColumns: void 0,
            numRows: void 0,
            direction: P.Direction.Y,
            paginated: !1,
            autoMargin: !0,
            leftMargin: 50,
            rightMargin: 50,
            topMargin: 50,
            bottomMargin: 50,
            columnGutters: 20,
            rowGutters: 20,
            updateOnResize: !0,
            debounceDelay: 150,
            transition: {
                curve: x.inOutBackNorm,
                duration: 600
            },
            delayTransition: !0,
            delayIncrement: 15,
            useScrollview: !0,
            useContainer: !1,
            containerProperties: {
                "background-color": "#ffffff"
            },
            overflowHidden: !1,
            perspective: 1e3
        }, s.prototype.append = function(t) {
            if (v.isArray(t)) {
                for (var i = 0; i < t.length; i++) r.call(this, t[i], !0);
                p.call(this)
            } else r.call(this, t)
        }, s.prototype.prepend = function(t) {
            if (v.isArray(t)) {
                for (var i = 0; i < t.length; i++) n.call(this, t[i], !0);
                p.call(this)
            } else n.call(this, t)
        }, s.prototype.remove = function() {
            this._numItems--
        }, s.prototype.reflow = function() {
            p.call(this)
        }, s.prototype.commit = function(t, i, e, s, o) {
            return {
                transform: _.moveThen([-s[0] * o[0], -s[1] * o[1], 0], i),
                opacity: e,
                origin: s,
                size: o,
                target: {
                    transform: i,
                    origin: s,
                    target: this.node.render()
                }
            }
        }, s.prototype.render = function() {
            return this._entityId
        }, s.prototype.getSize = function() {
            return [this._containerWidth, this._containerHeight]
        }, e.exports = s
    }), define("famous-math/Quaternion", ["require", "exports", "module", "famous/Matrix"], function(t, i, e) {
        function s(t, i, e, s) {
            return this.w = t || 1, this.x = i || 0, this.y = e || 0, this.z = s || 0, this
        }
        t("famous/Matrix");
        s.prototype.makeFromAngleAndAxis = function(t, i) {
            i.normalize();
            var e = .5 * t,
                s = Math.sin(e);
            return this.x = s * i.x, this.y = s * i.y, this.z = s * i.z, this.w = Math.cos(e), this
        }, s.prototype.clone = function() {
            return new s(this.w, this.x, this.y, this.z)
        }, s.prototype.setWXYZ = function(t, i, e, s) {
            return this.w = t, this.x = i, this.y = e, this.z = s, this
        }, s.prototype.set = function(t) {
            return this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z, this
        }, s.prototype.clear = function() {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, s.prototype.normalize = function() {
            var t = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == t) this.w = 1, this.x = this.y = this.z = 0;
            else {
                var i = 1 / t;
                this.w *= i, this.x *= i, this.y *= i, this.z *= i
            }
            return this
        }, s.prototype.getMatrix = function() {
            return this.normalize(), [1 - 2 * this.y * this.y - 2 * this.z * this.z, 2 * this.x * this.y - 2 * this.z * this.w, 2 * this.x * this.z + 2 * this.y * this.w, 0, 2 * this.x * this.y + 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z, 2 * this.y * this.z - 2 * this.x * this.w, 0, 2 * this.x * this.z - 2 * this.y * this.w, 2 * this.y * this.z + 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0, 0, 0, 0, 1]
        }, s.prototype.multiply = function(t, i) {
            return i = i || this.register, i.w = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z, i.x = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y, i.y = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x, i.z = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w, i
        }, s.prototype.isEqual = function(t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z ? !0 : !1
        }, s.prototype.dot = function(t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.add = function(t, i) {
            return i = i || this.register, i.w = this.w + t.w, i.x = this.x + t.x, i.y = this.y + t.y, i.z = this.z + t.z, i
        }, s.prototype.sub = function(t, i) {
            return i = i || this.register, i.w = this.w - t.w, i.x = this.x - t.x, i.y = this.y - t.y, i.z = this.z - t.z, i
        }, s.prototype.normSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.conj = function(t) {
            return t = t || this.register, t.w = this.w, t.x = -this.x, t.y = -this.y, t.z = -this.z, t
        }, s.prototype.inverse = function(t) {
            return t = t || this.register, this.conj(t), t.scalarDivide(this.normSquared(), t), t
        }, s.prototype.scalarDivide = function(t, i) {
            return i = i || this.register, t = 1 / t, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.scalarMult = function(t, i) {
            return i = i || this.register, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.isZero = function() {
            return 0 == this.x && 0 == this.y && 0 == this.z && 1 == this.w ? !0 : !1
        }, s.prototype.negate = function() {
            return this.w = -this.w, this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, s.prototype.zeroRotation = function() {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, s.prototype.slerp = function(t, i, e) {
            e = e || this.register;
            var s, o, n, r, a;
            return this.to.set(t), this.from.set(this), o = this.dot(t), 0 > o && (o = -o, this.to.negate()), 1 - o > this.epsilon ? (s = Math.acos(o), n = Math.sin(s), r = Math.sin((1 - i) * s) / n, a = Math.sin(i * s) / n) : (r = 1 - i, a = i), this.from.scalarMult(r, this.from), this.to.scalarMult(a, this.to), this.from.add(this.to, e), e
        }, s.prototype.epsilon = 1e-5, s.prototype.from = new s(0, 0, 0, 0), s.prototype.to = new s(0, 0, 0, 0), s.prototype.register = new s(0, 0, 0, 0), s.prototype.zero = new s(0, 0, 0, 0), s.prototype.one = new s(1, 1, 1, 1), e.exports = s
    }), define("famous-math/Vector", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ(t[0], t[1], t[2]), "Vector" == t.constructor.name && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }
        s.prototype.add = function(t, i) {
            return i = i || this.register, i.setXYZ(this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function(t, i) {
            return i = i || this.register, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function(t, i) {
            return i = i || this.register, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            return i = i || this.register, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.rotate = function(t, i) {
            var e = t.x,
                s = t.y,
                o = t.z;
            return this.rotateX(e, i).rotateY(s, i).rotateZ(o, i)
        }, s.prototype.rotateX = function(t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(e, -o * r + s * n, o * n - s * r)
        }, s.prototype.rotateY = function(t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(-o * r + e * n, s, o * n + e * r)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(-s * r + e * n, s * n + e * r, o)
        }, s.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = t || 1, i = i || this.register;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this.x, this.y, this.z)
        }, s.prototype.isZero = function() {
            return !this.x && !this.y && !this.z
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z), this != this.register && this.register.clear(), this
        }, s.prototype.setXYZ = function(t, i, e) {
            return this.register.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function() {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function(t) {
            if (1 / 0 == t) return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, s.prototype.project = function(t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function(t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function() {
            return [this.x, this.y, this.z]
        }, s.prototype.fromArray = function(t) {
            this.x = t[0], this.y = t[1], this.z = t[2]
        }, s.prototype.get = function() {
            return this.toArray()
        }, s.prototype.register = new s(0, 0, 0), s.prototype.zero = new s(0, 0, 0), s.prototype.one = new s(1, 1, 1), e.exports = s
    }), define("famous-generative/Line", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous-math/Quaternion", "famous-math/Vector"], function(t, i, e) {
        function s(t) {
            t || (t = {}), this.result = [], this.width = t.width || 2, this.opacity = t.opacity || 1, this.calculateTransform("undefined" == typeof t.x1 ? 0 : t.x1, "undefined" == typeof t.y1 ? 0 : t.y1, "undefined" == typeof t.z1 ? 0 : t.z1, "undefined" == typeof t.x2 ? 0 : t.x2, "undefined" == typeof t.y2 ? 0 : t.y2, "undefined" == typeof t.z2 ? 0 : t.z2), this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [500, 500]
            }), this.surface.addClass("line"), this.surface.setProperties({
                "background-color": "rgba(255, 255, 255, 1.0)"
            })
        } {
            var o = t("famous/Surface"),
                n = t("famous/Matrix"),
                r = t("famous-utils/Utils");
            t("famous-math/Quaternion"), t("famous-math/Vector")
        }
        s.prototype.setProperties = function(t) {
            this.surface.setProperties(t)
        }, s.prototype.setLineWidth = function(t) {
            return this.width = t, this
        }, s.prototype.getLineWidth = function() {
            return this.width
        }, s.prototype.setColor = function(t, i, e, s) {
            return this.surface.setProperties(r.backgroundColor(t, i, e, 1)), this.opacity = s, this
        }, s.prototype.setOpacity = function(t) {
            return this.opacity = t, this
        }, s.prototype.render = function() {
            var t = {
                transform: this.transform,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            };
            return t
        }, s.prototype.setP1 = function(t, i, e) {
            this.calculateTransform(t, i, e, this.x2, this.y2, this.z2)
        }, s.prototype.setP2 = function(t, i, e) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, i, e)
        }, s.prototype.set = function(t, i, e, s, o, n) {
            this.calculateTransform(t, i, e, s, o, n)
        }, s.prototype.setX1 = function(t) {
            this.calculateTransform(t, this.y1, this.z1, this.x2, this.y2, this.z2)
        }, s.prototype.setY1 = function(t) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, this.y2, this.z2)
        }, s.prototype.setZ1 = function(t) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, this.z2)
        }, s.prototype.setX2 = function(t) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, this.y2, this.z2)
        }, s.prototype.setY2 = function(t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, t, this.z2)
        }, s.prototype.setZ2 = function(t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, this.y2, t)
        }, s.prototype.setX = function(t, i) {
            this.calculateTransform(t, this.y1, this.z1, i, this.y2, this.z2)
        }, s.prototype.setY = function(t, i) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, i, this.z2)
        }, s.prototype.setZ = function(t, i) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, i)
        }, s.prototype.getX1 = function() {
            return this.x1
        }, s.prototype.getX2 = function() {
            return this.x2
        }, s.prototype.getY1 = function() {
            return this.y1
        }, s.prototype.getY2 = function() {
            return this.y2
        }, s.prototype.getZ1 = function() {
            return this.z1
        }, s.prototype.getZ2 = function() {
            return this.z2
        }, s.prototype.getX = function() {
            return [this.x1, this.x2]
        }, s.prototype.getY = function() {
            return [this.y1, this.y2]
        }, s.prototype.getZ = function() {
            return [this.z1, this.z2]
        }, s.prototype.getP1 = function() {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function() {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getLength = function() {
            return this.length
        }, s.prototype.calculateTransform = function(t, i, e, s, o, a) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = a, this.length = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), this.lengthX = this.x2 - this.x1, this.lengthY = this.y2 - this.y1, this.lengthZ = this.z2 - this.z1, this.centerX = .5 * this.lengthX + this.x1, this.centerY = .5 * this.lengthY + this.y1, this.centerZ = .5 * this.lengthZ + this.z1, this.angleZ = Math.atan2(this.lengthY, this.lengthX), this.angleY = Math.asin(this.lengthZ / this.length), isNaN(this.angleZ) && (this.angleZ = .5 * Math.PI), isNaN(this.angleY) && (this.angleY = .5 * Math.PI), this.transform = n.multiply(n.identity, n.rotateY(-this.angleY)), this.transform = n.multiply(this.transform, n.rotateZ(this.angleZ)), this.transform = n.multiply(this.transform, n.translate(this.centerX, this.centerY, this.centerZ)), this.transform = n.multiply(n.scale(this.length / 500, this.width / 500, 1), this.transform)
        }, e.exports = s
    }), define("app/widgets/GridLayout_ui", ["require", "exports", "module", "famous/Surface", "./GridLayout", "famous-generative/Line", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous-animation/Easing", "famous/Utility", "famous/Engine", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            h.apply(this, arguments), this._debugRows = [], this._debugColumns = [], this._debugMargins = [], this._debugLineCurve = {
                curve: l.inOutBackNorm,
                duration: 800
            }, this.on("reflow", r.bind(this)), f.on("resize", m.debounce(this.resizeLines.bind(this), 250)), this._addedLines, this.lineNode, this.lineMod = new c({
                opacity: 0
            }), this._lineCurve = {
                curve: l.outSineNorm,
                duration: 250
            }, r.call(this)
        }

        function o() {
            return [window.innerWidth, 2]
        }

        function n() {
            return [2, window.innerHeight]
        }

        function r() {
            function t(t, i) {
                if (this._debugRows[r]) {
                    this._debugRows[r].transform.halt(), this._debugRows[r].transform.setTransform(t, this._debugLineCurve), this._debugRows[r].transform.setOpacity(1);
                    var e = this._debugRows[r].surface.getSize();
                    e[0] !== i.size[0] && this._debugRows[r].surface.setSize(i.size)
                } else {
                    var s = new a(i),
                        o = new c({
                            transform: t
                        });
                    this._debugRows.push({
                        transform: o,
                        surface: s
                    }), this.lineNode.add(o).link(s)
                }
                r++
            }

            function i(t, i) {
                if (this._debugColumns[r]) {
                    this._debugColumns[r].transform.halt(), this._debugColumns[r].transform.setTransform(t, this._debugLineCurve), this._debugColumns[r].transform.setOpacity(1);
                    var e = this._debugColumns[r].surface.getSize();
                    e[1] !== i.size[1] && this._debugColumns[r].surface.setSize(i.size)
                } else {
                    var s = new a(i),
                        o = new c({
                            transform: t
                        });
                    this._debugColumns.push({
                        transform: o,
                        surface: s
                    }), this.lineNode.add(o).link(s)
                }
                r++
            }
            var e = {
                    size: o(),
                    properties: {
                        backgroundColor: "rgba( 14, 216, 245, 0.5 )"
                    }
                },
                s = {
                    size: n(),
                    properties: {
                        backgroundColor: "rgba( 14, 216, 245, 0.5 )"
                    }
                },
                r = 0;
            if (this._addedLines = !1, this.lineNode || (this.lineNode = new p, this._addedLines = !0), this.options.direction == d.Direction.X) {
                for (var h = 0; h < this._numRows; h++) t.call(this, u.translate(0, this._marginTop + h * this._rowHeight + h * this.options.rowGutters, 0), e), t.call(this, u.translate(0, this._marginTop + (h + 1) * this._rowHeight + h * this.options.rowGutters, 0), e);
                for (; r < this._debugRows.length;) this._debugRows[r].transform.setOpacity(0), r++;
                var h = this._hasMarginNodes ? 1 : 0,
                    l = this._hasMarginNodes ? this.scrollNodes.length - 1 : this.scrollNodes.length;
                for (this._t1 ? this._t2.setTransform(u.translate(0, this._columnWidth), this._lineCurve) : (this._t1 = new c({
                        opacity: 0
                    }), this._t2 = new c({
                        opacity: 0,
                        transform: u.translate(0, this._columnWidth)
                    })); l > h; h++) {
                    var f = new a(e);
                    this.scrollNodes[h].add(this._t1).link(f), f = new a(e), this.scrollNodes[h].add(this._t2).link(f)
                }
            } else {
                for (var h = 0; h < this._numColumns; h++) i.call(this, u.translate(this._marginLeft + h * this._columnWidth + h * this.options.columnGutters, 0, 0), s), i.call(this, u.translate(this._marginLeft + (h + 1) * this._columnWidth + h * this.options.columnGutters, 0, 0), s);
                for (; r < this._debugColumns.length;) this._debugColumns[r].transform.setOpacity(0), r++;
                var h = this._hasMarginNodes ? 1 : 0,
                    l = this._hasMarginNodes ? this.scrollNodes.length - 1 : this.scrollNodes.length;
                for (this._t1 ? this._t2.setTransform(u.translate(0, this._rowHeight), this._lineCurve) : (this._t1 = new c({
                        opacity: 0
                    }), this._t2 = new c({
                        opacity: 0,
                        transform: u.translate(0, this._rowHeight)
                    })); l > h; h++) {
                    var m = new a(e);
                    this.scrollNodes[h].add(this._t1).link(m), m = new a(e), this.scrollNodes[h].add(this._t2).link(m)
                }
            }
            this._addedLines || this.node.add(this.lineMod).link(this.lineNode)
        }
        var a = t("famous/Surface"),
            h = t("./GridLayout"),
            u = (t("famous-generative/Line"), t("famous/Matrix")),
            c = t("famous/Modifier"),
            p = t("famous/RenderNode"),
            l = t("famous-animation/Easing"),
            d = t("famous/Utility"),
            f = t("famous/Engine"),
            m = t("famous-utils/Utils");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = h.DEFAULT_OPTIONS, s.prototype.hideDebug = function() {
            this.lineMod.setOpacity(0, this._lineCurve), this._t1.setOpacity(0, this._lineCurve), this._t2.setOpacity(0, this._lineCurve)
        }, s.prototype.showDebug = function() {
            this.lineMod.setOpacity(1, this._lineCurve), this._t1.setOpacity(1, this._lineCurve), this._t2.setOpacity(1, this._lineCurve)
        }, s.prototype.resizeLines = function() {
            for (var t = n(), i = o(), e = 0; e < this._debugColumns.length; e++) this._debugColumns[e].surface.setSize(t);
            for (var e = 0; e < this._debugRows.length; e++) this._debugRows[e].surface.setSize(i)
        }, e.exports = s
    }), define("app/widgets/LightboxRenderableTile", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/Engine", "famous/View", "famous/RenderNode", "famous-utils/Utils", "famous-animation/Easing", "./SizingHelpers", "./ArrayHelpers"], function(t, i, e) {
        function s(t) {
            h.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.id = d++, this.options.scaleTransition.duration = .5 * this.options.flipTransition.duration, this.front, this.back, this._offsetPos, o.call(this, t), this.back.on("resize", this._refineBackPlacement.bind(this)), this.mainModifier = new r({
                size: this.front.getSize(),
                origin: [0, 0]
            }), 1 == this.id && (this.mainModifier.setTransform = function() {
                console.log(arguments[0]), r.prototype.setTransform.apply(this, arguments)
            }), this.frontModifier = new r({
                size: this.front.getSize(),
                origin: [.5, .5]
            }), this.backModifier = new r({
                size: this.back.getSize(),
                origin: [.5, .5],
                transform: a.rotateY(Math.PI)
            }), this.tileNode = new u, this.node.link(this.mainModifier).link(this.tileNode), this.tileNode.add(this.frontModifier).link(this.front), this.tileNode.add(this.backModifier).link(this.back), this._frontIsVisible = !0, this._isDeactivated = !1
        }

        function o(t) {
            t || (t = {}), t.front && (this.front = t.front), t.back && (this.back = t.back), this.front.pipe(this), this.back.pipe(this)
        }

        function n() {
            var t = [window.innerWidth, window.innerHeight],
                i = l.halfOf(t),
                e = c.getSurfacePosition(this.front.mainSurface),
                s = this.front.getSize(),
                o = (l.halfOf(s), this.back.getSize()),
                n = l.halfOf(o),
                r = i[1] - n[1] - e[1];
            return console.log("window:", t, "backsize:", o, "caled!", r), [i[0] - n[0] - e[0], r]
        }
        var r = (t("famous/Surface"), t("famous/Modifier")),
            a = t("famous/Matrix"),
            h = (t("famous/Engine"), t("famous/View")),
            u = t("famous/RenderNode"),
            c = t("famous-utils/Utils"),
            p = (t("famous-animation/Easing"), t("./SizingHelpers")),
            l = t("./ArrayHelpers"),
            d = 0;
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            front: void 0,
            back: void 0,
            fade: !1,
            flipTransition: {
                curve: "inOutBackNorm",
                duration: 1350
            },
            scaleTransition: {
                curve: "inOutSineNorm"
            },
            flipZDepth: 1,
            deactivateZDepth: -800,
            deactivateTransition: {
                curve: "outBounceNorm",
                duration: 600
            },
            activateTransition: {
                curve: "inOutBackNorm",
                duration: 1550
            },
            fadeTransition: {
                curve: "inOutSineNorm",
                duration: 600
            }
        }, s.prototype.getSize = function() {
            return this._frontIsVisible ? this.front.getSize() : this.back.getSize()
        }, s.prototype.toggleFrontBack = function(t) {
            this._frontIsVisible ? this.showBack(t) : this.showFront(t)
        }, s.prototype.showFront = function(t) {
            this._frontIsVisible || this._scaleBackToFront(), this._deactivated = !1, this._frontIsVisible = !0, this._frontScaled && this._resetFront(), this.back.deactivate(), this._setMainToFront(t), this.options.fade && this.mainModifier.setOpacity(1, this.options.fadeTransition)
        }, s.prototype.showBack = function(t) {
            this._frontIsVisible = !1, this._backScaled && this._resetBack(), this._scaleFrontToBack(), this._setMainToBack(function(t) {
                this.back.activate.call(this.back), t && t()
            }.bind(this, t)), this.back.setVisibile(!0)
        }, s.prototype.sendBack = function(t) {
            this._deactivated = !0, this.mainModifier.halt(), this.mainModifier.setTransform(a.translate(0, 0, this.options.deactivateZDepth), this.options.deactivateTransition, t), this.options.fade && this.mainModifier.setOpacity(.1, this.options.fadeTransition)
        }, s.prototype.setDeactivateZDepth = function(t) {
            this.options.deactivateZDepth = -t
        }, s.prototype._resetBack = function(t, i) {
            this.backModifier.halt(), this.backModifier.setTransform(a.rotateY(Math.PI)), this._backScaled = !1, i && i()
        }, s.prototype._resetFront = function(t, i) {
            this.frontModifier.halt(), this.frontModifier.setTransform(a.identity), this._frontScaled = !1, i && i()
        }, s.prototype._scaleBackToFront = function() {
            var t = p.getSizeRatio(this.front, this.back);
            this.backModifier.halt(), this.backModifier.setTransform(a.multiply(a.scale(t[0], t[1]), a.rotateY(Math.PI)), this.options.scaleTransition), this._backScaled = !0
        }, s.prototype._scaleFrontToBack = function() {
            var t = p.getSizeRatio(this.back, this.front);
            this.frontModifier.halt(), this.frontModifier.setTransform(a.scale(t[0], t[1]), this.options.scaleTransition), this._frontScaled = !0
        }, s.prototype._setMainToFront = function(t) {
            var i = this._deactivated ? this.options.activateTransition : this.options.flipTransition;
            this.mainModifier.halt(), this.mainModifier.setTransform(a.identity, i, function(t) {
                this.front.activate(), this.back._visible && this.back.setVisibile(!1), t && t()
            }.bind(this, t)), this.mainModifier.setSize(this.front.getSize(), i)
        }, s.prototype._setMainToBack = function(t) {
            console.log("set main to back"), this._offsetPos = n.call(this), this.back.setOffset(this._offsetPos), this.mainModifier.halt(), this.mainModifier.setTransform(a.move(a.rotateY(Math.PI), [this._offsetPos[0], this._offsetPos[1], this.options.flipZDepth]), this.options.flipTransition, function(t) {
                t && t()
            }.bind(this, t)), this.mainModifier.setSize(this.back.getSize(), this.options.flipTransition)
        }, s.prototype._refineBackPlacement = function(t) {
            this._offsetPos[0] += t[0], this.mainModifier.setTransform(a.move(a.rotateY(Math.PI), [this._offsetPos[0], this._offsetPos[1], this.options.flipZDepth]), this.options.flipTransition)
        }, s.prototype.getBackTransitions = function() {
            return this.back.transitions
        }, e.exports = s
    }), define("app/widgets/Lightbox", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/Engine", "famous/EventArbiter", "famous/View", "famous/Modifier", "famous-utils/Time", "famous-utils/Utils", "famous-utils/KeyCodes", "famous-generative/SimplexNoise", "famous-animation/Easing", "./GridLayout_ui", "./LightboxRenderableTile"], function(t, i, e) {
        function s() {
            p.apply(this, arguments), this.content, this._lastIndex, this._simplexOffset = 0, this.tiles = [], this.tileModifiers = [], this.simplexGradient = [], this.layout = new f({
                columnWidth: this.options.columnWidth,
                rowHeight: this.options.rowHeight,
                columnGutters: 200,
                rowGutters: 60
            }), this.simplex = new d;
            this.layout.getSize();
            this.eventInput.pipe(this.eventOutput), this.eventArbiter = new c, u.pipe(this.eventArbiter), this.eventArbiter.forMode(g).pipe(this.layout), this.eventArbiter.setMode(g)
        }

        function o(t) {
            var i;
            i = void 0 == this._activeTile ? this._lastIndex ? this._lastIndex : t : this._activeTile, i = (i + t) % this.content.length, -1 == i && (i = this.content.length - 1), n.call(this, i)
        }

        function n(t) {
            void 0 == t || t == this._lastIndex && !this.tiles[t]._frontIsVisible ? (a.call(this), this.emit("gridView"), this.eventArbiter.setMode(g)) : (r.call(this, t), this._lastIndex = t, this.eventArbiter.setMode(y))
        }

        function r(t) {
            this._activeTile = t;
            for (var i = 0; i < this.tiles.length; i++)
                if (i !== t) {
                    var e = this._getDelay(i);
                    e ? l.setTimeout(this.tiles[i].sendBack.bind(this.tiles[i]), e) : this.tiles[i].sendBack.call(this.tiles[i])
                } else this.tiles[i].showBack(), this.emit("selectionView", this.tiles[i])
        }

        function a(t) {
            this._activeTile = void 0;
            for (var i = this.tiles.length, e = 0; i > e; e++) {
                var s = 0 == e ? t : void 0,
                    o = this._getDelay(e);
                o ? l.setTimeout(this.tiles[e].showFront.bind(this.tiles[e], s), o) : this.tiles[e].showFront(s)
            }
            this._simplexOffset++
        }

        function h() {}
        var u = (t("famous/Surface"), t("famous/Matrix"), t("famous/Engine")),
            c = t("famous/EventArbiter"),
            p = t("famous/View"),
            l = (t("famous/Modifier"), t("famous-utils/Time")),
            d = (t("famous-utils/Utils"), t("famous-utils/KeyCodes"), t("famous-generative/SimplexNoise")),
            f = (t("famous-animation/Easing"), t("./GridLayout_ui")),
            m = t("./LightboxRenderableTile"),
            g = 0,
            y = 1;
        s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            commonFrontProperties: {},
            commonBackProperties: {},
            columnWidth: 400,
            rowHeight: 400,
            simplexAmplitude: 0,
            fadeProperties: {
                backgroundColor: "#000",
                pointerEvents: "none"
            },
            fadeOutCurve: {
                duration: 350,
                curve: "outSineNorm"
            },
            fadeInCurve: {
                duration: 350,
                curve: "inOutSineNorm"
            }
        }, s.prototype.setActive = function(t) {
            n.call(this, t)
        }, s.prototype.setContent = function(t) {
            this.content = t;
            for (var i = 0; i < this.content.length; i++) {
                var e = this.content[i];
                e.fade = !this._usingFader, this.simplexGradient.push(.5 * (this.simplex.noise2D(.5 * i, 1) + 1));
                var s = new m(e);
                this.tiles.push(s), s.on("lightbox", n.bind(this, i))
            }
            this.layout.append(this.tiles), this.node.add(this.layout), h.call(this)
        }, s.prototype.showNext = function() {
            o.call(this, 1)
        }, s.prototype.showPrev = function() {
            o.call(this, -1)
        }, s.prototype.setDeactivateZDepth = function(t) {
            for (var i = 0; i < this.tiles.length; i++) this.tiles[i].setDeactivateZDepth(t)
        }, s.prototype._getDelay = function(t) {
            return this.simplexGradient[(t + this._simplexOffset) % this.simplexGradient.length] * this.options.simplexAmplitude
        }, e.exports = s
    }), define("famous-physics/constraints/StiffSpring", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 1,
                period: 1e3,
                callback: void 0,
                callbackTolerance: 1e-4
            }, t && this.setOpts(t), this.pDiff = new a, this.vDiff = new a, this.n = new a, this.impulse1 = new a, this.impulse2 = new a, this._canFireCallback = !0
        }

        function o(t, i, e) {
            e < this.opts.callbackTolerance ? this._canFireCallback && (i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }

        function n(t, i, e) {
            var s = Math.abs(t.dot(i) / e);
            return s
        }
        var r = t("famous-physics/constraints/Constraint"),
            a = t("../math/Vector");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = r, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor instanceof a && (this.opts.anchor = t.anchor), t.anchor.p instanceof a && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new a(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.callback && (this.opts.callback = t.callback, this._canFireCallback = !0), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance)
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.opts, r = this.pDiff, a = this.vDiff, h = this.impulse1, u = this.impulse2, c = s.length, p = s.anchor || i.p, l = s.period, d = s.dampingRatio, f = 0; f < t.length; f++) {
                var m = t[f],
                    g = m.p,
                    y = m.v,
                    _ = m.m,
                    v = m.mInv;
                r.set(g.sub(p));
                var b = r.norm() - c;
                if (i) {
                    var S = i.mInv,
                        w = i.v;
                    a.set(y.sub(w));
                    var x = 1 / (v + S)
                } else {
                    a.set(y);
                    var x = _
                }
                if (0 == this.opts.period) var T = 0,
                    z = 1;
                else var M = 4 * x * Math.PI * Math.PI / (l * l),
                    C = 4 * x * Math.PI * d / l,
                    z = e * M / (C + e * M),
                    T = 1 / (C + e * M);
                var P = z / e * b;
                if (r.normalize(-P).sub(a).mult(e / (T + e / x)).put(h), m.applyImpulse(h), i && (h.mult(-1).put(u), i.applyImpulse(u)), this.opts.callback) {
                    var k = m.getEnergy() + n(h, r, e);
                    o.call(this, m, this.opts.callback, k)
                }
            }
        }, s.prototype.getEnergy = function(t, i) {
            var e = this.opts,
                s = e.length,
                o = e.period,
                n = e.anchor || i.p;
            if (0 === o) return 0;
            var r = 4 * t.m * Math.PI * Math.PI / (o * o),
                a = n.sub(t.p),
                h = a.norm() - s;
            return .5 * r * h * h
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Wall", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                restitution: .7,
                k: 0,
                n: new n,
                d: 0,
                onContact: s.ON_CONTACT.REFLECT
            }, t && this.setOpts(t), this.diff = new n, this.impulse = new n, this.slop = -1, this.eventHandler = new r, r.setOutputHandler(this, this.eventHandler)
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector"),
            r = t("famous/EventHandler");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.ON_CONTACT = {
            REFLECT: 0,
            WRAP: 1,
            ABSORB: 2
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.restitution && (this.opts.restitution = t.restitution), void 0 !== t.k && (this.opts.k = t.k), void 0 !== t.d && (this.opts.d = t.d), void 0 !== t.onContact && (this.opts.onContact = t.onContact), void 0 !== t.n && this.opts.n.set(t.n)
        }, s.prototype.getNormalVelocity = function(t) {
            var i = this.opts.n;
            return t.dot(i)
        }, s.prototype.getDistance = function(t) {
            var i = this.opts.n,
                e = this.opts.d;
            return t.dot(i) + e
        }, s.prototype.onEnter = function(t, i, e) {
            var o = t.p,
                n = t.v,
                r = t.m,
                a = this.opts.n,
                h = this.opts.onContact,
                u = this.opts.restitution,
                c = this.impulse,
                p = this.opts.k,
                l = 0,
                d = {
                    particle: t,
                    wall: this,
                    overlap: i
                };
            switch (this.eventHandler.emit("enter", d), h) {
                case s.ON_CONTACT.REFLECT:
                    var f = i < this.slop ? -((1 + u) * a.dot(n) + p / e * (i - this.slop)) / (r * e + l) : -((1 + u) * a.dot(n)) / (r * e + l);
                    c.set(a.mult(e * f)), t.applyImpulse(c), o.add(a.mult(-i), o);
                    break;
                case s.ON_CONTACT.ABSORB:
                    var f = a.dot(n) / (r * e + l);
                    c.set(a.mult(e * f)), t.applyImpulse(c), o.add(a.mult(-i), o), n.clear();
                    break;
                case s.ON_CONTACT.WRAP:
                    i < -t.r && this.eventHandler.emit("wrap", d)
            }
        }, s.prototype.onExit = function(t, i) {
            var e = this.opts.onContact,
                o = t.p,
                n = this.opts.n;
            e == s.ON_CONTACT.REFLECT ? o.add(n.mult(-i), o) : e == s.ON_CONTACT.WRAP || e == s.ON_CONTACT.ABSORB, this.eventHandler.emit("exit", {
                particle: t,
                wall: this,
                overlap: i
            })
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.opts.n, o = 0; o < t.length; o++) {
                var n = t[o],
                    r = n.p,
                    a = n.v,
                    h = n.r || 0,
                    u = this.getDistance(r.add(s.mult(-h))),
                    c = this.getNormalVelocity(a);
                0 > u && (0 > c ? this.onEnter(n, u, e) : this.onExit(n, u, e))
            }
        }, e.exports = s
    }), define("famous-physics/utils/PhysicsTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.defaultDefinition = {
                spring: {
                    period: 300,
                    dampingRatio: .5
                },
                v: 0,
                wall: !1
            }, t = t || 0, this._anchor = new _(t, 0, 0), this.endState = t, this.prevState = void 0, this.direction = void 0, this.atRest = !0, this.spring = new g({
                anchor: this._anchor
            }), this.wall = new y({
                restitution: .5,
                k: 0,
                n: new _(-1, 0, 0)
            }), this.attachedWall = void 0, this.PE = new m, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.attachedSpring = this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                v > t && (this.atRest = !0, c.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            this.spring.setOpts(t.spring), p.call(this, t.v), t.wall ? h.call(this) : u.call(this)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t, this.direction = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, void 0 !== this.attachedSpring && (this._anchor.x = t), void 0 !== this.attachedWall && this.wall.setOpts({
                d: Math.abs(t),
                n: [-this.direction, 0, 0]
            }), p.call(this, this.direction * d.call(this))
        }

        function h() {
            this.attachedWall = this.PE.attach(this.wall, this.particle)
        }

        function u() {
            void 0 !== this.attachedWall && this.PE.detach(this.attachedWall)
        }

        function c(t) {
            this.particle.p.x = t
        }

        function p(t) {
            this.particle.v.x = t
        }

        function l() {
            return this.particle.p.x
        }

        function d() {
            return this.particle.v.x
        }

        function f(t) {
            this.callback = t
        }
        var m = t("famous-physics/PhysicsEngine"),
            g = t("famous-physics/constraints/StiffSpring"),
            y = t("famous-physics/constraints/Wall"),
            _ = t("famous-physics/math/Vector");
        s.forceFunctions = g.forceFunctions;
        var v = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, c.call(this, t), p.call(this, i), a.call(this, t), f.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), d.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), l.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), void f.call(this, e)) : (this.reset(t), void(e && e()))
        }, e.exports = s
    }), define("famous-ui/Buttons/RotateButton", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "./ButtonBase"], function(t, i, e) {
        function s() {
            r.apply(this, arguments), this.transform.setOrigin([.5, .5]), this._state = !1
        }
        var o = (t("famous/Surface"), t("famous/View"), t("famous/Matrix")),
            n = (t("famous/Modifier"), t("famous-animation/Easing")),
            r = t("./ButtonBase");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            surfaceOptions: {},
            openState: o.identity,
            closeState: o.rotateZ(.75 * Math.PI),
            transition: {
                curve: n.inOutBackNorm,
                duration: 500
            }
        }, s.prototype._handleClick = function(t) {
            t.stopPropagation(), this.toggle()
        }, s.prototype.getSize = function() {
            return this.surface.getSize()
        }, s.prototype.toggle = function() {
            0 == this._state ? this.open() : this.close()
        }, s.prototype.open = function() {
            this._state = !0, this.transform.halt(), this.emit("open"), this.transform.setTransform(this.options.closeState, this.options.transition)
        }, s.prototype.close = function() {
            this._state = !1, this.transform.halt(), this.emit("close"), this.transform.setTransform(this.options.openState, this.options.transition)
        }, e.exports = s
    }), define("app/ID", ["require", "exports", "module"], function(t, i, e) {
        e.exports = 1003
    }), define("core/NextButton", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Surface", "famous/Modifier", "famous/Utility", "famous-utils/Utils", "famous-animation/Easing", "famous-ui/Buttons/RotateButton", "app/ID", "famous-utils/Time"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), this.nextButton, this.nextButtonModifier, this.nextButtonX, this.nextButtonY, this.hidden = !1, this.descriptionVisible = !1, this.descriptionInit = !1, this.nextDescriptionMod, this.nextDescription, this.sceneWidth, this.sceneHeight, this.positions(), this.initButton(), this._ajaxNext(), this.show()
        }
        var o = t("famous/View"),
            n = t("famous/Matrix"),
            r = t("famous/Surface"),
            a = t("famous/Modifier"),
            h = t("famous/Utility"),
            u = t("famous-utils/Utils"),
            c = (t("famous-animation/Easing"), t("famous-ui/Buttons/RotateButton"), t("app/ID")),
            p = t("famous-utils/Time");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            offset: [0, 0],
            buttonSize: [0, 0],
            showTransition: {
                curve: "inOutBackNorm",
                duration: 400
            },
            hideTransition: {
                curve: "inOutBackNorm",
                duration: 400
            },
            hoverTransition: {
                curve: "inOutSineNorm",
                duration: 800
            },
            nextDescriptionSize: [200, 60],
            descriptionInTransition: {
                method: "physics",
                spring: {
                    period: 800,
                    dampingRatio: .41
                },
                wall: !0,
                v: 0
            },
            descriptionOutTransition: {
                method: "physics",
                spring: {
                    period: 400,
                    dampingRatio: .5
                },
                wall: !1,
                v: 0
            },
            position: "tr"
        }, s.prototype.resize = function() {
            this.positions(), this.descriptionVisible ? (this.descriptionVisible = !this.descriptionVisible, this.showNextDescription()) : (this.descriptionVisible = !this.descriptionVisible, this.hideNextDescription()), this.show()
        }, s.prototype.positions = function() {
            {
                var t = window.innerWidth;
                window.innerHeight
            }
            "tr" == this.options.position ? (this.hiddenPositions = {
                next: n.translate(t - this.options.offset[0] - this.options.buttonSize[0], -this.options.buttonSize[1], 0),
                nextDescription: n.translate(t, this.options.offset[1], 0)
            }, this.shownPositions = {
                next: n.translate(t - this.options.offset[0] - this.options.buttonSize[0], this.options.offset[1], 0),
                nextDescription: n.translate(t - this.options.nextDescriptionSize[0], this.options.offset[1], 0)
            }) : "tc" == this.options.position && (this.hiddenPositions = {
                next: n.translate(.5 * t - .5 * this.options.buttonSize[0], -this.options.buttonSize[1], 0),
                nextDescription: n.translate(.5 * t + .5 * this.options.buttonSize[0], -this.options.nextDescriptionSize[1], 0)
            }, this.shownPositions = {
                next: n.translate(.5 * t - .5 * this.options.buttonSize[0], this.options.offset[1], 0),
                nextDescription: n.translate(.5 * t + .5 * this.options.buttonSize[0], 0, 0)
            })
        }, s.prototype.show = function() {
            if (!this.hidden) {
                var t = this.shownPositions.next,
                    i = this.nextButton.getSize();
                this.nextButtonX = t[12] + .5 * i[0], this.nextButtonY = t[13] + .5 * i[1], this.nextButtonModifier.halt(), this.nextButtonModifier.setTransform(t, this.options.showTransition)
            }
        }, s.prototype.showAll = function() {
            this.hidden = !1, this.show()
        }, s.prototype.hideAll = function() {
            this.hidden = !0, this.hideNextDescription(), this.hide()
        }, s.prototype.hide = function() {
            this.nextButtonModifier.halt(), this.nextButtonModifier.setTransform(this.hiddenPositions.next, this.options.hideTransition)
        }, s.prototype.hideNextDescription = function() {
            this.descriptionInit && this.descriptionVisible && (this.show(), this.nextDescriptionMod.halt(), this.nextDescriptionMod.setTransform(this.hiddenPositions.nextDescription, this.options.descriptionOutTransition), this.descriptionVisible = !1)
        }, s.prototype.showNextDescription = function() {
            this.descriptionInit && (this.descriptionVisible || (this.hide(), this.nextDescriptionMod.halt(), p.setTimeout(function() {
                1 == this.descriptionVisible && this.nextDescriptionMod.setTransform(this.shownPositions.nextDescription, this.options.descriptionInTransition)
            }.bind(this), 110), this.descriptionVisible = !0))
        }, s.prototype.mousemove = function(t, i) {
            var e = u.distance(t.pageX, t.pageY, this.nextButtonX, this.nextButtonY);
            i > e ? this.showNextDescription() : this.hideNextDescription()
        }, s.prototype._ajaxNext = function() {
            h.loadURL("http://fsrv.us/?f=getNextDemo&currentID=" + c + "&source=" + window.location.host + "&glEnabled=" + u.supportsWebGL(), function(t) {
                if (t) {
                    var i = JSON.parse(t);
                    this.demoData = i.demoData, this.nextDemo = i.nextDemoData, this.nextDemo && this.demoData && this.initNextDescription()
                }
            }.bind(this))
        }, s.prototype.initButton = function() {
            this.nextButton = new r({
                properties: {
                    backgroundColor: "rgba( 0, 0, 0, 0.0)"
                },
                content: '<img draggable="false" class="no-user-select" src="js/core/next.svg" height="' + this.options.buttonSize[1] + '"></img>',
                size: this.options.buttonSize
            }), this.nextButtonModifier = new a({
                size: this.nextButton.getSize(),
                transform: this.hiddenPositions.next,
                opacity: this.nextButtonOpacity
            }), this.node.add(this.nextButtonModifier).link(this.nextButton)
        }, s.prototype.initNextDescription = function() {
            this.descriptionInit = !0;
            var t = "s.codepen.io" == window.location.host ? this.nextDemo.codepenURL : this.nextDemo.staticURL;
            this.nextButton.setContent('<a href="' + t + '">' + this.nextButton.getContent() + "</a>");
            var i = this.nextDemo.name,
                e = "http://notAvailableYet" !== this.nextDemo.thumbSRC ? this.nextDemo.thumbSRC : "https://s3-us-west-1.amazonaws.com/disrupt.famo.us/widgets-lightbox/thumb.jpg";
            this.nextDescription = new r({
                content: '<a target="_blank" style=" text-decoration: none; float: left;" href="' + t + '"><img style="float: left; width: 50px;" src="' + e + '" width="50"></img><div style="float: left; padding-left: 5px;"><span class="core-next-demo">NEXT DEMO:</span><br><span class="core-next-name">' + i + "</span></div></a>",
                size: this.options.nextDescriptionSize,
                classes: ["core-nextDescription"],
                properties: {
                    padding: "5px",
                    backgroundColor: "#000"
                }
            }), this.nextDescription.on("click", function(t, i) {
                i.preventDefault(), window.location.href = t
            }.bind(this, t)), this.nextDescriptionMod = new a({
                transform: this.hiddenPositions.nextDescription
            }), this.node.add(this.nextDescriptionMod).link(this.nextDescription), this.descriptionVisible = !1
        }, e.exports = s
    }), define("core/ExpandingSurface", ["require", "exports", "module", "famous/Surface", "famous/Engine"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this._resizeDirty = !0, this._checkHeight = o.bind(this), r.on("postrender", this._checkHeight)
        }

        function o() {
            if (this._resizeDirty && this._currTarget) {
                var t = [this.size[0], this._currTarget.firstChild.clientHeight];
                this.setSize(t), this.emit("resize", t), this._dirty = !1, r.unbind("postrender", this._checkHeight)
            }
        }
        var n = t("famous/Surface"),
            r = t("famous/Engine");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.setHeightDirty = function() {
            this._resizeDirty = !0, r.on("postrender", this._checkHeight)
        }, e.exports = s
    }), define("core/Fader", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Modifier"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.fade = new o({
                properties: {
                    backgroundColor: this.options.color
                },
                classes: ["background-fader"]
            }), this.fadeMod = new r({
                opacity: this.options.visible ? this.options.fadePercent : 0
            }), this.node.link(this.fadeMod).link(this.fade)
        }
        var o = t("famous/Surface"),
            n = t("famous/View"),
            r = t("famous/Modifier");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            color: "#000000",
            fadePercent: .8,
            visible: !0,
            fadeTransition: {
                curve: "outExpoNorm",
                duration: 500
            },
            fadePercent: .8
        }, s.prototype.show = function() {
            this.fadeMod.setOpacity(this.options.fadePercent, this.options.fadeTransition)
        }, s.prototype.hide = function() {
            this.fadeMod.setOpacity(0, this.options.fadeTransition)
        }, e.exports = s
    }), define("core/Submit", ["require", "exports", "module", "famous/Surface", "famous-utils/Time"], function(t, i, e) {
        function s() {
            this._submitDelay = 200, this.submit = new n({
                properties: {
                    backgroundColor: "rgba( 255, 255, 255, 1.0)",
                    color: "rgba( 0, 0, 0, 1.0 )",
                    textAlign: "center"
                },
                classes: ["submit"],
                content: "JOIN!",
                size: this._submitSize
            }), this.loadingIndex = 2
        }

        function o() {
            if (this.isLoading) {
                for (var t = "", i = 1; i < this.loadingIndex; i++) t += ".";
                this.loadingIndex = (this.loadingIndex + 1) % 4 + 1, this.submit.setContent(t), r.setTimeout(this._boundLoading, this._submitDelay)
            }
        }
        var n = t("famous/Surface"),
            r = t("famous-utils/Time");
        s.prototype.render = function() {
            return this.submit.render()
        }, s.prototype.on = function(t, i) {
            return this.submit.on(t, i)
        }, s.prototype.setLoading = function() {
            this.isLoading = !0, this._boundLoading = o.bind(this), o.call(this)
        }, s.prototype.setSuccess = function() {
            this.isLoading = !1, this.submit.setContent("SENT")
        }, s.prototype.setDefault = function() {
            this.isLoading = !1, this.submit.setContent("JOIN!")
        }, e.exports = s
    }), define("famous-scene/SceneController", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Engine"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.routes = {}, this.sceneArray = [], this.sceneIndex = 0
        }
        var o = t("famous/View"),
            n = (t("famous/Matrix"), t("famous/Modifier")),
            r = t("famous/Engine");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            loop: !0
        }, s.prototype.addScene = function(t, i) {
            this.routes[t] = i, this.sceneArray.push(t), this.emit("add", {
                key: t,
                view: i
            })
        }, s.prototype.addScenes = function(t) {
            for (var i in t) this.addScene(i, t[i])
        }, s.prototype.removeScene = function(t) {
            delete this.routes[t], this.emit("remove", {
                key: t
            })
        }, s.prototype.reset = function() {
            this.node.object = void 0
        }, s.prototype.next = function() {
            this.sceneIndex++, this.sceneIndex == this.sceneArray.length ? this.options.loop ? (this.sceneIndex = 0, this.setScene(this.sceneArray[this.sceneIndex], "next")) : (this.emit("end"), this.sceneIndex--) : this.setScene(this.sceneArray[this.sceneIndex], "next"), this.emit("next", this.sceneArray[this.sceneIndex])
        }, s.prototype.prev = function() {
            this.sceneIndex--, this.sceneIndex < 0 ? this.options.loop ? (this.sceneIndex = this.sceneArray.length - 1, this.setScene(this.sceneArray[this.sceneIndex], "prev")) : (this.emit("beginning"), this.sceneIndex++) : this.setScene(this.sceneArray[this.sceneIndex], "prev"), this.emit("prev", this.sceneArray[this.sceneIndex])
        }, s.prototype.setActiveTransform = function(t, i, e) {
            this.activeTransform && (this.activeTransform.halt(), this.activeTransform.setTransform(t, i, e))
        }, s.prototype.setScene = function(t, i) {
            var e = this.routes[t];
            return "undefined" == typeof e ? void console.warn("No view exists!", t) : (this.currentRoute = t, this.ActiveConstructor = e, this.inTransition = !0, void 0 == i && (this.sceneIndex = this.sceneArray.indexOf(this.currentRoute)), this.emit("set", {
                key: t,
                view: e,
                index: this.sceneIndex
            }), this.activeScene && this.activeScene.deactivate ? (this.activeScene.deactivate(this.activateScene.bind(this), i), void this.emit("deactivate")) : this.activateScene(i))
        }, s.prototype.setSceneOrder = function(t) {
            this.sceneArray = t, this.emit("reorder", {
                array: this.sceneArray
            })
        }, s.prototype.activateScene = function() {
            this.reset(), r.unpipe(this.activeScene), this.activeScene = new this.ActiveConstructor, this.activeTransform = new n, this.activeScene.setController && this.activeScene.setController(this), r.pipe(this.activeScene), this.node.add(this.activeTransform).link(this.activeScene), this.activeScene.activate ? this.activeScene.activate(function() {
                this.inTransition = !1, this.emit("activate")
            }.bind(this)) : (this.inTransition = !1, this.emit("activate"))
        }, s.prototype.getCurrentRoute = function() {
            return this.currentRoute
        }, s.prototype.getCurrentIndex = function() {
            return this.sceneIndex
        }, s.prototype.getRoutes = function() {
            return this.routes
        }, s.prototype.getSceneOrder = function() {
            return this.sceneArray
        }, s.prototype.getOrderedScenes = function() {
            for (var t = [], i = 0; i < this.sceneArray.length; i++) t.push(this.routes[this.sceneArray[i]]);
            return t
        }, s.prototype.getActiveTransform = function() {
            return this.activeTransform
        }, e.exports = s
    }), define("app/SceneController", ["require", "exports", "module", "famous-scene/SceneController"], function(t, i, e) {
        var s = t("famous-scene/SceneController"),
            o = new s;
        e.exports = o
    }), define("core/GA", ["require", "exports", "module"], function(t, i, e) {
        var s = s || [];
        s.push(["_setAccount", "UA-34653957-1"]), s.push(["_setCampSourceKey", "utm_source"]), s.push(["_setCampMediumKey", "utm_medium"]), s.push(["_setCampContentKey", "utm_keyword"]), s.push(["_setCampTermKey", "utm_keyword"]), s.push(["_setCampNameKey", "utm_campaign"]), s.push(["_trackPageview"]),
            function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(t, i)
            }(), e.exports = s
    }), define("core/SignupData", ["require", "exports", "module", "famous/EventHandler", "famous/Utility", "app/ID", "./GA"], function(t, i, e) {
        function s(t) {
            this.options = {
                formId: "",
                emailId: "",
                githubId: "",
                twitterId: ""
            };
            for (var i in t) this.options[i] = t[i];
            this.form, this.email, this.github, this.twitter, this.eventHandler = new n, n.setInputHandler(this, this.eventHandler), n.setOutputHandler(this, this.eventHandler), this._onSubmit = o.bind(this), this.registerView(), this.reset()
        }

        function o(t) {
            t.preventDefault(), this.sendData()
        }
        var n = t("famous/EventHandler"),
            r = t("famous/Utility"),
            a = t("app/ID"),
            h = t("./GA");
        s.prototype.reset = function() {
            this.form = document.getElementById(this.options.formId), this.email = document.getElementById(this.options.emailId), this.github = document.getElementById(this.options.githubId), this.twitter = document.getElementById(this.options.twitterId), this.events()
        }, s.prototype.events = function() {
            this.form.addEventListener("submit", this._onSubmit)
        }, s.prototype._getData = function() {
            var t = {};
            return this.email && (t.email = this.email.value), this.github && (t.github = this.github.value), this.twitter && (t.twitter = this.twitter.value), t
        }, s.prototype.registerView = function() {
            if (!(window.location.host.search("localhost") > -1)) {
                var t = "http://fsrv.us/?f=registerView&demoID=" + a;
                r.loadURL(t)
            }
        }, s.prototype.sendData = function() {
            var t = this._getData(),
                i = "http://fsrv.us/?f=registerUserforNewsletter&email=" + t.email + "&demoID=" + a;
            t.github && (i += "&github=" + t.github), t.twitter && (i += "&twitter=" + t.twitter), this.emit("loadingStart"), h.push(["_trackEvent", "sign-up", "submit", , 1, !0]), r.loadURL(i, function(t) {
                this.signupResponse = JSON.parse(t), this.parseResponse()
            }.bind(this))
        }, s.prototype.parseResponse = function() {
            this.emit("loadingEnd"), null == this.signupResponse.error ? this.emit("success") : this.emit("error", this.signupResponse.error)
        }, e.exports = s
    }), define("core/SignupContent", ["require", "exports", "module"], function(t, i, e) {
        var s = "",
            o = '<span class = "famous-signup-label">Twitter</span> <span class = "famous-signup-optional">optional</span>',
            n = '<span class = "famous-signup-label">Github</span ><span class  = "famous-signup-optional">optional</span>',
            r = "",
            a = "Handle",
            h = "Name",
            u = "",
            c = "Sign up for Beta",
            p = "LOADING",
            l = "SENT!",
            d = "",
            f = "",
            m = "",
            g = !1,
            y = !1;
        e.exports = {
            getEmailLabel: function() {
                return s
            },
            setEmailLabel: function(t) {
                s = t
            },
            getEmailMessage: function() {
                return r
            },
            setEmailMessage: function(t) {
                r = t
            },
            getTwitterMessage: function() {
                return a
            },
            setTwitterMessage: function(t) {
                a = t
            },
            getEmailMessage: function() {
                return r
            },
            setEmailMessage: function(t) {
                r = t
            },
            getGithubMessage: function() {
                return h
            },
            setGithubMessage: function(t) {
                h = t
            },
            getHeadLine: function() {
                return d
            },
            setHeadline: function(t) {
                d = t
            },
            getSubHeadLine: function() {
                return f
            },
            setSubHeadline: function(t) {
                f = t
            },
            getMainText: function() {
                return m
            },
            setMainText: function(t) {
                m = t
            },
            getSignupButton: function() {
                return u
            },
            setSignupButton: function(t) {
                u = t
            },
            getOpenMessage: function() {
                return c
            },
            setOpenMessage: function(t) {
                c = t
            },
            useGithub: function() {
                return g
            },
            setGithub: function(t) {
                g = t
            },
            useTwitter: function() {
                return y
            },
            setTwitter: function(t) {
                y = t
            },
            getLoadingStart: function() {
                return p
            },
            setLoadingStart: function(t) {
                p = t
            },
            getLoadingEnd: function() {
                return l
            },
            setLoadingEnd: function(t) {
                l = t
            },
            getContent: function() {
                var t = '<div class="famous-signup-backing" style="float: left;">';
                return "" !== d && (t += '<h1 class="famous-signup-spacer famous-signup-headline">' + d + "</h1>"), "" !== f && (t += '<h6 class="famous-signup-spacer famous-signup-sub-headline">' + f + "</h6>"), "" !== m && (t += '<h3 class="famous-signup-main-text">' + m + "</h3>"), t += '<form id="famous-signup-form"><div class="famous-signup-spacer" style="width: 100%; float: left;">', 0 == g && 0 == y ? (t += '<input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 65%;" name="email" maxlength="75" placeholder="' + r + '">', t += '<div style="width: 30%; float: left; margin-left: 5%; " ><input class="famous-signup-button" style="float: left; width: 100%;"type="submit" value="' + u + '"></div></form></div>') : (t += "" !== s ? '<label for="email" style="width: 30%;float: left;padding-top: 15px;">' + s + '</label><input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 70%;" name="email" maxlength="75" placeholder="' + r + '"><br></div>' : '<input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 100%;" name="email" maxlength="75" placeholder="' + r + '">', g && (t += '<div style="width: 100%;float: left;" class="famous-signup-spacer" ><label for="github" style="width: 30%; float: left;padding-top: 15px;">' + n + '</label><input class="famous-signup-input" id="famous-signup-github" type="text" size="30" style="float: left;width: 70%;"  name="github" maxlength="75" placeholder="' + h + '"><br></div>'), y && (t += '<div style="width: 100%; float: left;" class="famous-signup-spacer"><label for="twitter" style="width: 30%; float: left;padding-top: 15px;">' + o + '</label><input class="famous-signup-input" id="famous-signup-twitter" type="text" size="30" style="float: left;width: 70%;" name="twitter" maxlength="75" placeholder="' + a + '"></div>'), t += '<div style="width: 100%; float: left;" ><input class="famous-signup-button" style="float: left; width: 100%;"type="submit" value="' + u + '"></div></form></div>'), t
            }
        }
    }), define("core/Signup", ["require", "exports", "module", "famous/Engine", "famous/View", "famous/Matrix", "famous/ImageSurface", "famous/Surface", "./ExpandingSurface", "famous/Modifier", "famous/Utility", "./Fader", "famous-animation/Easing", "famous-utils/Utils", "famous-utils/KeyCodes", "app/ID", "famous-utils/Time", "./Submit", "famous/RenderNode", "app/SceneController", "./SignupData", "./SignupContent", "famous/Transitionable", "famous-physics/utils/PhysicsTransition"], function(t, i, e) {
        function s() {
            h.apply(this, arguments), this.close, this.closeMod, this.signupBacking, this.signupBackingMod, this._signupSize, this.openForm, this.openFormMod, this.error, this.errorMod, this.signupData, this._initData = r.bind(this), this._isVisible = !0, this.initSignup(), this.events()
        }

        function o() {
            this._originalSignupMessage = l.getSignupButton(), l.setSignupButton(l.getLoadingStart()), this.resetBackingContent()
        }

        function n() {
            l.setSignupButton(l.getLoadingEnd()), this.resetBackingContent()
        }

        function r() {
            this.signupData = new p({
                formId: "famous-signup-form",
                emailId: "famous-signup-email",
                githubId: "famous-signup-github",
                twitterId: "famous-signup-twitter"
            }), this.eventOutput.emit("dataAdded", this.signupData), this.dataEvents(), a.unbind("postrender", this._initData)
        }
        var a = t("famous/Engine"),
            h = t("famous/View"),
            u = (t("famous/Matrix"), t("famous/ImageSurface"), t("famous/Surface"), t("./ExpandingSurface")),
            c = t("famous/Modifier"),
            p = (t("famous/Utility"), t("./Fader"), t("famous-animation/Easing"), t("famous-utils/Utils"), t("famous-utils/KeyCodes"), t("app/ID"), t("famous-utils/Time"), t("./Submit"), t("famous/RenderNode"), t("app/SceneController"), t("./SignupData")),
            l = t("./SignupContent"),
            d = t("famous/Transitionable"),
            f = t("famous-physics/utils/PhysicsTransition");
        d.registerMethod("physics", f), s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            animateScene: !0,
            closeSize: [50, 50],
            hideOpen: !1,
            hideOpenOnMobile: !0,
            openButtonZPos: 2,
            errorFailedProperties: {
                color: "rgb(253, 98, 85)"
            },
            errorSuccessProperties: {
                color: "rgb(90, 226, 132)"
            }
        }, s.prototype.events = function() {
            a.on("postrender", this._initData), this.signupBacking.on("resize", function(t) {
                this._signupSize = t, this.signupData && this.signupData.reset(), this.eventOutput.emit("resize")
            }.bind(this))
        }, s.prototype.dataEvents = function() {
            this.signupData.on("loadingStart", o.bind(this)), this.signupData.on("loadingEnd", n.bind(this))
        }, s.prototype.resetBackingContent = function() {
            this.signupBacking.setContent(l.getContent()), this.signupBacking.setHeightDirty()
        }, s.prototype.initSignup = function() {
            this._signupSize = [256, 20], this.signupBacking = new u({
                content: l.getContent(),
                size: this._signupSize
            }), this.signupBackingMod = new c({
                opacity: 1
            }), this.node.add(this.signupBackingMod).link(this.signupBacking)
        }, s.prototype.setVisible = function(t) {
            this._isVisible = t
        }, s.prototype.getSize = function() {
            return this.signupBacking.getSize()
        }, e.exports = s
    }), define("famous-ui/PanelScrollview", ["require", "exports", "module", "famous-views/Scrollview"], function(t, i, e) {
        function s(t) {
            this.panelOpts = Object.create(s.DEFAULT_OPTIONS), t && this.setPanelOptions(t), n.call(this, this.panelOpts.scrollviewOptions), this.uiItems = [], this._sequenced = !1
        }

        function o(t) {
            this.uiItems.push(t), this._sequenced === !1 && (this.sequenceFrom(this.uiItems), this._sequenced = !0), void 0 === t.getSize() && t.setSize && t.setSize([this.panelOpts.width, this.panelOpts.sliderHeight]), t.init && t.init(), t.pipe && t.pipe(this)
        }
        var n = t("famous-views/Scrollview");
        s.DEFAULT_OPTIONS = {
            scrollviewOptions: {
                direction: "y",
                itemSpacing: 8
            },
            width: 256,
            sliderHeight: 16
        }, s.prototype = Object.create(n.prototype), s.prototype.setPanelOptions = function(t) {
            for (var i in s.DEFAULT_OPTIONS) void 0 !== t[i] && (this.panelOpts[i] = t[i])
        }, s.prototype.reset = function() {
            this.uiItems = [], this._sequenced = !1
        }, s.prototype.add = function(t) {
            if (t instanceof Array)
                for (var i = 0; i < t.length; i++) o.call(this, t[i]);
            else o.call(this, t)
        }, s.prototype.addBackground = function() {}, e.exports = s
    }), define("famous-ui/Toggles/BoolToggle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Modifier", "famous-animation/Easing", "famous/RenderNode", "famous-utils/Utils", "famous/View"], function(t, i, e) {
        function s(t) {
            c.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = t.value, this.name = t.name
        }

        function o() {
            this.toggle()
        }

        function n() {
            this.transform.halt();
            var t = this.value ? a.scale(1, 1, 1) : a.move(a.scale(1e-4, 1e-4, 1e-4), [.5 * this.options.size[1], .5 * this.options.size[1], 0]),
                i = this.value ? 1 : 0;
            this.transform.setTransform(t, this.options.transition), this.transform.setOpacity(i, this.options.transition)
        }
        var r = t("famous/Surface"),
            a = t("famous/Matrix"),
            h = (t("famous/EventHandler"), t("famous/Modifier"), t("famous/Modifier")),
            u = t("famous-animation/Easing"),
            c = (t("famous/RenderNode"), t("famous-utils/Utils"), t("famous/View"));
        s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            value: !0,
            name: "bool toggle",
            transition: {
                duration: 250,
                curve: u.inOutBackNorm
            },
            padding: 20
        }, s.prototype.init = function() {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]);
            var t = 1 == this.options.value ? 1 : 0;
            this.label = new r({
                size: this.options.size,
                content: '<div style="border: 1px solid #ffffff; width:' + this.options.size[1] + "px; height: " + this.options.size[1] + 'px; float: left;"></div><div class="slider-label" style="float: left; margin-left:' + .5 * this.options.size[1] + "px;margin-top:" + .1 * this.options.size[1] + 'px">' + this.name + "</div>",
                properties: {
                    fontSize: .75 * this.options.size[1] + "px"
                }
            }), this.fill = new r({
                size: [this.options.size[1], this.options.size[1]],
                properties: {
                    backgroundColor: "#ffffff"
                }
            }), this.transform = new h({
                opacity: t,
                transform: a.translate(0, 0, 1),
                size: [this.options.size[1], this.options.size[1]]
            }), this.labelTransform = new h({
                transform: a.translate(0, 0, 1)
            }), this.fill.pipe(this), this.label.pipe(this), this.on("click", o.bind(this)), this.node.add(this.transform).link(this.fill), this.node.add(this.labelTransform).link(this.label), this.set(this.options.value)
        }, s.prototype.silentSet = function(t) {
            this.value = t, n.call(this)
        }, s.prototype.toggle = function() {
            this.set(!this.value)
        }, s.prototype.set = function(t) {
            this.value !== t && (this.value = t, this.emit("change", {
                value: this.value
            }), n.call(this))
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.setSize = function(t) {
            this.options.size = t
        }, e.exports = s
    }), define("famous-ui/Toggles/MultiBoolToggle", ["require", "exports", "module", "famous/Surface", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/EventHandler", "famous/View", "famous-animation/Easing", "./BoolToggle"], function(t, i, e) {
        function s() {
            p.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value, this.label, this.labelTransform, this.usingLabel = !1, this.bools = [], this.boolValues = [], this.transforms = []
        }

        function o() {
            void 0 !== this.options.name && (this.label = new a({
                size: this.options.size,
                content: '<div class="slider-label" style="margin-top:' + .1 * this.options.size[1] + 'px">' + this.options.name + "</div>"
            }), this.label.setProperties({
                "font-size": .75 * this.options.size[1] + "px"
            }), this.labelTransform = new u, this.transforms.push(this.labelTransform), this.usingLabel = !0, this.node.add(this.labelTransform).link(this.label), r.call(this))
        }

        function n() {
            for (var t = 0; t < this.options.values.length; t++) {
                var i = t == this.options.defaultSelected ? !0 : !1;
                i && (this.value = this.options.values[t]), this._addToggle(i, this.options.values[t], !0)
            }
        }

        function r() {
            this.sizeState.halt();
            var t = this.transforms.length,
                i = t * this.options.size[1] + (t - 1) * this.options.padding;
            this.sizeState.set([this.options.size[0], i], this.options.sizeTransition)
        }
        var a = t("famous/Surface"),
            h = (t("famous/RenderNode"), t("famous/Matrix")),
            u = t("famous/Modifier"),
            c = t("famous/Transitionable"),
            p = (t("famous/EventHandler"), t("famous/View")),
            l = t("famous-animation/Easing"),
            d = t("./BoolToggle");
        s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            values: [],
            defaultSelected: 0,
            name: void 0,
            padding: 20,
            sizeTransition: {
                curve: l.inOutBackNorm,
                duration: 400
            },
            opacityTransition: {
                curve: l.inOutBackNorm,
                duration: 400
            }
        }, s.prototype.init = function() {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]), this.sizeState = new c([this.options.size[0], 0]), o.call(this), n.call(this)
        }, s.prototype.setSelectedToggle = function(t) {
            for (var i = 0; i < this.bools.length; i++) i == t ? (this.bools[i].silentSet(!0), this.boolValues[i] = !0, this.value = this.options.values[i], this.emit("change", {
                value: this.options.values[i]
            })) : (this.bools[i].silentSet(!1), this.boolValues[i] = !1)
        }, s.prototype.set = function(t) {
            var i = this.options.values.indexOf(t);
            this.setSelectedToggle(i)
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype._addToggle = function(t, i, e) {
            var s = this.transforms.length,
                o = new d({
                    size: this.options.size,
                    value: t,
                    name: i
                });
            o.init(), o.pipe(this), e || this.options.values.push(i);
            var n = new u({
                transform: h.translate(0, this.options.size[1] * s + this.options.padding * s),
                opacity: 0
            });
            n.setOpacity(1, this.options.opacityTransition), this.bools.push(o), this.transforms.push(n), this.node.add(n).link(o), o.silentSet(t), this.boolValues.push(t), o.on("change", function(t) {
                1 == this.boolValues[t] ? this.bools[t].silentSet(!0) : this.setSelectedToggle(t)
            }.bind(this, this.usingLabel ? s - 1 : s)), r.call(this)
        }, s.prototype.getSize = function() {
            return this.sizeState ? this.sizeState.get() : void 0
        }, s.prototype.setSize = function(t) {
            this.options.size = t
        }, s.prototype.removeToggle = function(t) {
            var i, e;
            "number" == typeof t ? i = t : "string" == typeof t && (i = this.options.values.indexOf(t)), i >= 0 && (e = this.usingLabel ? i + 1 : i, this.transforms[e].setOpacity(0, this.options.sizeTransition, function(t, i) {
                this.branches.splice(i, 1), this.bools.splice(t, 1), this.options.values.splice(t, 1), this.transforms.splice(i, 1), r.call(this)
            }.bind(this, i, e)))
        }, e.exports = s
    }), define("famous/CanvasSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t) {
            t && t.canvasSize && (this.canvasSize = t.canvasSize), o.call(this, t), this.canvasSize || (this.canvasSize = this.getSize()), this.backBuffer = document.createElement("canvas"), this.canvasSize && (this.backBuffer.width = this.canvasSize[0], this.backBuffer.height = this.canvasSize[1]), this._contextId = void 0
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "canvas", s.prototype.elementClass = "surface", s.prototype.setContent = function() {}, s.prototype.deploy = function(t) {
            this.canvasSize && (t.width = this.canvasSize[0], t.height = this.canvasSize[1]), "2d" == this._contextId && (t.getContext(this._contextId).drawImage(this.backBuffer, 0, 0), this.backBuffer.width = 0, this.backBuffer.height = 0)
        }, s.prototype.recall = function(t) {
            this.getSize();
            this.backBuffer.width = t.width, this.backBuffer.height = t.height, "2d" == this._contextId && (this.backBuffer.getContext(this._contextId).drawImage(t, 0, 0), t.width = 0, t.height = 0)
        }, s.prototype.getContext = function(t) {
            return this._contextId = t, this._currTarget ? this._currTarget.getContext(t) : this.backBuffer.getContext(t)
        }, s.prototype.setSize = function(t, i) {
            o.prototype.setSize.apply(this, arguments), i && (this.canvasSize = i.slice(0)), this._currTarget && (this._currTarget.width = this.canvasSize[0], this._currTarget.height = this.canvasSize[1])
        }, e.exports = s
    }), define("famous-ui/Easing/CanvasDrawer", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e, s, o) {
            t.beginPath(), t.moveTo(i, e), t.lineTo(s, o), t.stroke(), t.closePath()
        }

        function o(t, i, e, s, o) {
            t.beginPath(), t.rect(i, e, s, o), t.fill(), t.closePath()
        }
        e.exports = {
            lineTo: s,
            rect: o
        }
    }), define("famous-ui/Easing/EasingVisualizer", ["require", "exports", "module", "famous-animation/Easing", "famous/CanvasSurface", "./CanvasDrawer"], function(t, i, e) {
        function s(t) {
            this.opts = {
                size: [1e3, 1e3],
                strokeColor: "#33ccff",
                fillColor: "#333",
                fn: n.inOutBackNorm,
                divisions: 30
            }, this.setOpts(t), this.opts.canvasSize = [2 * this.opts.size[0], 2 * this.opts.size[1]], this.opts.gutter = Math.floor(.35 * this.opts.size[0]), r.call(this, {
                size: this.opts.size,
                canvasSize: this.opts.canvasSize
            }), this.update()
        }

        function o() {
            var t = document.createElement("canvas");
            t.width = this.opts.canvasSize[0], t.height = this.opts.canvasSize[1];
            var i = t.getContext("2d");
            i.strokeStyle = this.opts.strokeColor, i.lineWidth = 2, i.fillStyle = this.opts.fillColor, a.rect(i, 0, 0, this.opts.canvasSize[0], this.opts.canvasSize[1]);
            for (var e = 1 / this.opts.divisions, s = this.opts.canvasSize[0] - this.opts.gutter, o = this.opts.canvasSize[1] - this.opts.gutter, n = .5 * this.opts.gutter, r = 1; r < this.opts.divisions; r++) {
                var h = e * (r - 1),
                    u = e * r,
                    c = h * s + n,
                    p = u * s + n,
                    l = o - this.opts.fn(h) * (o - this.opts.gutter),
                    d = o - this.opts.fn(u) * (o - this.opts.gutter);
                a.lineTo(i, c, l, p, d)
            }
            return t
        }
        var n = t("famous-animation/Easing"),
            r = t("famous/CanvasSurface"),
            a = t("./CanvasDrawer");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.setOpts = function(t, i) {
            i || (i = this.opts);
            for (var e in t) i[e] = t[e]
        }, s.prototype.setCurve = function(t) {
            this.opts.fn = t, this.update()
        }, s.prototype.update = function() {
            var t = o.call(this),
                i = this.getContext("2d");
            i.drawImage(t, 0, 0)
        }, e.exports = s
    }), define("famous-ui/Easing/EasingBool", ["require", "exports", "module", "./EasingVisualizer", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.easingOpts = {
                value: !1,
                selectedProperties: {
                    border: "3px solid #33ccff"
                },
                normalProperties: {
                    border: "none"
                }
            }, n.apply(this, arguments), this.setOptions(i, this.easingOpts), this.on("click", this.toggle.bind(this)), o.call(this)
        }

        function o() {
            var t = this.easingOpts.value ? this.easingOpts.selectedProperties : this.easingOpts.normalProperties;
            this.setProperties(t)
        } {
            var n = t("./EasingVisualizer");
            t("famous/EventHandler")
        }
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.silentSet = function(t) {
            this.easingOpts.value = t, o.call(this)
        }, s.prototype.toggle = function() {
            this.set(!this.value)
        }, s.prototype.set = function(t) {
            this.easingOpts.value = t, this.emit("boolChange", {
                value: this.easingOpts.value
            }), o.call(this)
        }, e.exports = s
    }), define("famous-ui/Easing/MultiEasingToggle", ["require", "exports", "module", "./EasingBool", "famous-animation/Easing", "famous/View", "famous/Modifier", "famous/Matrix"], function(t, i, e) {
        function s() {
            h.apply(this, arguments), this.value = this.options.easingFns[this.options.defaultSelected], this.height = 0, this.bools = [], this.initialized = !1
        }

        function o() {
            for (var t = this.options.easingFns.length, i = [], e = 0, s = -1, o = 0; t > o; o++) s = o % this.options.columns, 0 === s && 0 !== o && e++, i.push(c.translate(s * this.options.easingBoolSize[0], e * this.options.easingBoolSize[1], 0)), o == t - 1 && (this.options.size[1] = (e + 1) * this.options.easingBoolSize[1]);
            return i
        }

        function n(t, i) {
            for (var e = !i, s = 0; s < this.bools.length; s++) this.bools[s].silentSet(s == t ? i : e);
            this.value = this.options.easingFns[t], this.eventOutput.emit("change", {
                value: this.value
            })
        }
        var r = t("./EasingBool"),
            a = t("famous-animation/Easing"),
            h = t("famous/View"),
            u = t("famous/Modifier"),
            c = t("famous/Matrix");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            easingFns: [a.inOutBackNorm, a.outBounceNorm, a.inOutBackNorm, a.outBounceNorm],
            columns: 3,
            size: void 0,
            panelSize: 216,
            easingAspect: [1.25, 1],
            defaultSelected: 0,
            easingBoolSize: [void 0, void 0],
            selectedProperties: void 0,
            normalProperties: void 0
        }, s.prototype.init = function() {
            for (var t = o.call(this), i = 0; i < this.options.easingFns.length; i++) {
                value = i == this.options.defaultSelected ? !0 : !1;
                var e = {
                    value: value
                };
                this.options.selectedProperties && (e.selectedProperties = this.options.selectedProperties), this.options.normalProperties && (e.normalProperties = this.options.normalProperties);
                var s = new r({
                    fn: this.options.easingFns[i],
                    size: this.options.easingBoolSize
                }, e);
                s.on("boolChange", n.bind(this, i)), s.pipe(this.eventOutput), this.node.add(new u(t[i])).link(s), this.bools.push(s)
            }
            this.initialized = !0
        }, s.prototype.set = function(t) {
            var i = this.options.easingFns.indexOf(t);
            n.call(this, i, !0)
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype.setSize = function(t) {
            this.options.easingBoolSize[0] = Math.floor(t[0] / this.options.columns), this.options.easingBoolSize[1] = Math.floor(this.options.easingBoolSize[0] / this.options.easingAspect[0]), this.options.size = [], this.options.size[0] = t[0]
        }, s.prototype.getSize = function() {
            return this.initialized ? this.options.size : void 0
        }, e.exports = s
    }), define("famous-ui/Dropdown/DropdownItem", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview"], function(t, i, e) {
        function s(t, i, e) {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = i, this._isSelected = e || !1, this._styleType, this.options.itemContent.unshift(this.options.name), this.surface = new h({
                size: this.options.itemSize,
                content: this.options.template.apply(this, this.options.itemContent)
            }), this.transform = new a, o.call(this), this.surface.pipe(this), this.surface.on("click", this.emit.bind(this, "selection", {
                value: this.value,
                origin: this
            })), this.node.link(this.transform).link(this.surface)
        }

        function o() {
            this.transform.halt(), this._isSelected ? (this.surface.setProperties(this.options.selectedProperties), this._styleType = !0, this.transform.setTransform(r.move(r.scale(.7, .7), [.125 * this.options.itemSize[0], .125 * this.options.itemSize[1]])), this.transform.setTransform(r.identity, this.options.squishCurve, this.emit.bind(this, "selectionEnd"))) : (this.surface.setProperties(this.options.properties), this._styleType = !1, this.transform.getFinalTransform() !== r.identity && this.transform.setTransform(r.identity))
        } {
            var n = t("famous/View"),
                r = t("famous/Matrix"),
                a = t("famous/Modifier"),
                h = t("famous/Surface"),
                u = t("famous-animation/Easing");
            t("famous-utils/Utils"), t("famous-views/Scrollview")
        }
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            name: "Food",
            itemSize: [216, 50],
            classes: [],
            properties: {
                color: "#ffffff",
                "background-color": "#333",
                border: "1px solid #ccc"
            },
            selectedProperties: {},
            template: function(t) {
                return '<h2 style="padding: 10px;">' + t + "</h2>"
            },
            defaultCurve: {
                curve: u.inOutBackNorm,
                duration: 400
            },
            squishCurve: {
                curve: u.outBounceNorm,
                duration: 400
            },
            itemContent: []
        }, s.prototype.setTemplate = function() {}, s.prototype.setSelected = function(t) {
            this._isSelected = t, o.call(this)
        }, s.prototype.getSize = function() {
            return this.surface.getSize()
        }, s.prototype.getName = function() {
            return this.options.name
        }, e.exports = s
    }), define("famous-ui/Dropdown/Dropdown", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview", "./DropdownItem", "famous/ContainerSurface"], function(t, i, e) {
        function s() {
            d.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.options.scrollviewOpts.clipSize = this.options.height, this.label = void 0, this.defaultMtx = void 0, this.closedMtx = void 0, this.arrowClosedPos = void 0, this.arrowOpenPos = void 0, this.labelTemplate = void 0, this.itemTemplate = void 0, this.itemOpts = void 0, this.sizeState = new g([0, 0]), this.items = [], this._isOpen = !1, this.initialized = !1
        }

        function o() {
            this.label = new y({
                content: this._getLabelContent(this.options.defaultSelected),
                size: this.options.itemSize
            }), this.label.setProperties(this.options.labelProperties), this.labelTransform = new m, this.node.add(this.labelTransform).link(this.label), this.label.on("click", this.toggleMenu.bind(this))
        }

        function n() {
            this.arrow = new y({
                size: this.options.arrowSize,
                content: this.options.arrowContent
            }), this.arrowTransform = new m({
                transform: this.arrowClosedPos
            }), this.node.add(this.arrowTransform).link(this.arrow)
        }

        function r() {
            this.scrollviewContainer = new S({
                size: [this.options.itemSize[0], this.options.height],
                properties: {
                    overflow: "hidden"
                }
            }), this.scrollview = new v(this.options.scrollviewOpts), this.scrollview.sequenceFrom(this.items), this.scrollviewTransform = new m({
                transform: this.closedMtx,
                opacity: 0,
                size: [this.options.itemSize[0], this.options.itemSize[1]]
            }), this.node.add(this.scrollviewTransform).link(this.scrollviewContainer), this.scrollviewContainer.add(this.scrollview)
        }

        function a() {
            for (var t = 0; t < this.options.items.length; t++) {
                var i = this.options.items[t];
                this.addItem(i.name, i.value, i.content)
            }
            this.value = this.items[this.options.defaultSelected].value
        }

        function h(t) {
            var i = t ? this.arrowOpenPos : this.arrowClosedPos;
            this.arrowTransform.setTransform(i, this.options.defaultCurve)
        }

        function u(t) {
            var i = t ? 1 : 1e-6,
                e = t ? [this.options.itemSize[0], this.options.height] : [this.options.itemSize[0], this.options.itemSize[1]],
                s = t ? this.defaultMtx : this.closedMtx;
            this.scrollviewTransform.setOpacity(i, this.options.defaultCurve), this.scrollviewTransform.setTransform(s, this.options.defaultCurve), this.sizeState.set(e, this.options.defaultCurve)
        }

        function c(t) {
            var i = this.items.indexOf(t.origin),
                e = this.items[i];
            e && this.set(e.value, i)
        }

        function p(t) {
            for (var i = 0; i < this.items.length; i++) this.items[i].setSelected(t == i ? !0 : !1)
        }

        function l(t) {
            for (var i = 0; i < this.items.length; i++)
                if (this.items[i].value == t) return i;
            return -1
        }
        var d = t("famous/View"),
            f = t("famous/Matrix"),
            m = t("famous/Modifier"),
            g = t("famous/Transitionable"),
            y = t("famous/Surface"),
            _ = t("famous-animation/Easing"),
            v = (t("famous-utils/Utils"), t("famous-views/Scrollview")),
            b = t("./DropdownItem"),
            S = t("famous/ContainerSurface");
        s.prototype = Object.create(d.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            items: [{
                name: "Apples",
                value: "apples"
            }, {
                name: "Oranges",
                value: "oranges"
            }],
            defaultSelected: 0,
            itemSize: void 0,
            labelProperties: {
                color: "#ffffff",
                "background-color": "#333",
                border: "1px solid #ccc"
            },
            itemClasses: [],
            itemProperties: {
                color: "#ccc",
                "background-color": "#fff",
                border: "1px solid #ccc"
            },
            itemSelectedProperties: {
                border: "3px solid #33ccff"
            },
            scrollviewOpts: {
                direction: 1,
                clipSize: void 0
            },
            height: 125,
            defaultCurve: {
                curve: _.inOutBackNorm,
                duration: 500
            },
            labelFadeCurve: {
                curve: _.inOutSineNorm,
                duration: 200
            },
            arrowSize: [20, 20],
            arrowPadding: [5, 10, 1],
            arrowContent: '<img src="js/famous-ui/img/arrowRight.svg"></img>',
            itemTemplate: function(t) {
                return '<h4 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h4>"
            },
            labelTemplate: function(t) {
                return '<h3 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h3>"
            },
            autoClose: !1
        }, s.prototype.init = function() {
            this.defaultMtx = f.translate(0, this.options.itemSize[1], 0), this.closedMtx = f.move(f.scale(1, .01), [0, this.options.itemSize[1], 0]), this.arrowClosedPos = f.translate(this.options.itemSize[0] - this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]), this.arrowOpenPos = f.move(f.rotateZ(.5 * Math.PI), [this.options.itemSize[0] - .25 * this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]]), this.options.itemTemplate = this.options.itemTemplate.bind(this), this.options.labelTemplate = this.options.labelTemplate.bind(this), this.itemOpts = {
                itemSize: this.options.itemSize,
                itemProperties: this.options.itemProperties,
                selectedProperties: this.options.itemSelectedProperties,
                template: this.options.itemTemplate,
                classes: this.options.itemClasses
            }, n.call(this), r.call(this), a.call(this), o.call(this), this.sizeState.set(this.options.itemSize), this.initialized = !0
        }, s.prototype.addItem = function(t, i, e) {
            var s = this.itemOpts;
            s.name = t, e && (s.itemContent = e);
            var o = new b(s, i, !1);
            o.setTemplate(this.itemTemplate), o.transform.setOpacity(0), o.transform.setOpacity(1, this.options.defaultCurve), this.items.push(o), o.pipe(this.scrollview), o.on("selection", c.bind(this)), this.options.autoClose && o.on("selectionEnd", this.closeMenu.bind(this))
        }, s.prototype.openMenu = function() {
            this._isOpen = !0, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, s.prototype.closeMenu = function() {
            this._isOpen = !1, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, s.prototype.toggleMenu = function() {
            this._isOpen ? this.closeMenu() : this.openMenu()
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype._getLabelContent = function(t) {
            var i = this.items[t],
                e = i.options.itemContent,
                s = this.options.labelTemplate.apply(this, e);
            return s
        }, s.prototype.set = function(t) {
            var i = l.call(this, t),
                e = this.items[i];
            this.value = e.value, p.call(this, i);
            var s = this._getLabelContent(i);
            this.updateLabel(s), this.emit("change", {
                value: this.value
            })
        }, s.prototype.setHeight = function(t) {
            this.options.height = t, this.options.scrollviewOpts.clipSize = t, this.scrollview.options.clipSize = t, this.scrollviewContainer.setSize(this.options.itemSize[0], t)
        }, s.prototype.removeItem = function(t) {
            var i;
            "string" == typeof t ? i = l.call(this, t) : "number" == typeof t && (i = t), -1 !== i && this.items[i].transform.setOpacity(0, this.options.defaultCurve, function(t) {
                this.items.splice(t, 1)
            }.bind(this, i))
        }, s.prototype.updateLabel = function(t) {
            var i = function(t) {
                this.label.setContent(t), this.labelTransform.setOpacity(1, this.options.labelFadeCurve)
            };
            this.labelTransform.setOpacity(0, this.options.labelFadeCurve, i.bind(this, t))
        }, s.prototype.setSize = function(t) {
            this.options.itemSize = [t[0], 2 * t[1]]
        }, s.prototype.getSize = function() {
            return this.initialized ? this.sizeState.get() : void 0
        }, e.exports = s
    }), define("famous-ui/Slider", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous-utils/Utils", "famous/Engine", "famous/View"], function(t, i, e) {
        function s() {
            v.apply(this, arguments), this.eventInput.pipe(this.eventOutput), void 0 === this.options.defaultValue && (this.options.defaultValue = .5 * (this.options.range[0] + this.options.range[1])), this.pos = [], this.value = this.options.defaultValue, this._dirty = !0, this.currTouchId = null
        }

        function o(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function n(t) {
            if (o(t), !this.currTouchId) {
                var i = t.changedTouches[0];
                this.currTouchId = i.identifier, this._handleStart(i)
            }
        }

        function r(t) {
            o(t), _.on("mousemove", this._mouseMove), _.on("mouseup", this._mouseUp), _.on("mouseout", this._mouseLeave), this._handleStart(t)
        }

        function a(t) {
            this._dirty && (this.pos = y.getSurfacePosition(this.back), this._dirty = !1), this.set(y.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function h(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i];
                if (e.identifier == this.currTouchId) {
                    this._handleMove(e);
                    break
                }
            }
        }

        function u(t) {
            o(t), this._handleMove(t)
        }

        function c(t) {
            this.set(y.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function p(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++)
                if (t.changedTouches[i].identifier == this.currTouchId) {
                    this.currTouchId = void 0;
                    break
                }
        }

        function l(t) {
            o(t), this._endMouse()
        }

        function d(t) {
            var i = t.relatedTarget || t.toElement;
            i && "HTML" != i.nodeName || this._endMouse()
        }

        function f() {
            return this.options.name + " <span class='slider-value' style='float:right'>" + this.value.toFixed(this.options.precision) + "</span>"
        }
        var m = t("famous/Surface"),
            g = t("famous/Matrix"),
            y = (t("famous/EventHandler"), t("famous-utils/Utils")),
            _ = t("famous/Engine"),
            v = t("famous/View");
        s.prototype = Object.create(v.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            range: [0, 10],
            defaultValue: void 0,
            precision: 2,
            name: "Slider",
            backOpacity: 1
        }, s.prototype.init = function() {
            this.fill = new m({
                size: this.options.size,
                classes: ["slider-fill", "no-user-select"]
            }), this.back = new m({
                size: this.options.size,
                classes: ["slider-back", "no-user-select"]
            }), this.backMatrix = g.translate(0, 0, 1), this.label = new m({
                size: this.options.size,
                classes: ["slider-label", "no-user-select"],
                properties: {
                    fontSize: .75 * this.options.size[1] + "px",
                    lineHeight: this.options.size[1] + "px"
                },
                content: f.call(this)
            }), this.labelMatrix = g.translate(0, this.options.size[1], 1.2), this.back.pipe(this), this.label.pipe(this), this.fill.pipe(this), this.on("touchstart", n.bind(this)), this.on("touchmove", h.bind(this)), this.on("touchend", p.bind(this)), this.on("touchcancel", p.bind(this)), this.on("mousedown", r.bind(this)), this.on("mousedown", r.bind(this)), this._mouseMove = u.bind(this), this._mouseUp = l.bind(this), this._mouseLeave = d.bind(this), this._handleStart = a.bind(this), this._handleMove = c.bind(this), this._add(this.fill), this._add(this.back), this._add(this.label)
        }, s.prototype._endMouse = function() {
            _.unbind("mousemove", this._mouseMove), _.unbind("mouseup", this._mouseUp), _.unbind("mouseout", this._mouseLeave)
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype.getRange = function() {
            return this.options.range
        }, s.prototype.setSize = function(t) {
            this.options.size = t
        }, s.prototype.getSize = function() {
            return this.options.size ? [this.options.size[0], 2 * this.options.size[1]] : void 0
        }, s.prototype.set = function(t) {
            return this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), this.setLabelContent(), this.emit("change", {
                value: this.get(),
                range: this.range
            }), this
        }, s.prototype.setLabelContent = function() {
            this.label.setContent(f.call(this))
        }, s.prototype.render = function() {
            var t = (this.get() - this.options.range[0]) / (this.options.range[1] - this.options.range[0]);
            return [{
                transform: this.backMatrix,
                opacity: this.options.backOpacity,
                target: this.back.render()
            }, {
                transform: g.move(g.scale(t, 1, 1), [0, 0, 2]),
                target: this.fill.render()
            }, {
                transform: this.labelMatrix,
                target: this.label.render()
            }]
        }, e.exports = s
    }), define("famous-color/Color", ["require", "exports", "module", "famous-utils/Utils"], function(t, i, e) {
        function s(t, i, e, o) {
            t instanceof s ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = t.getHex()) : (this.r = "undefined" == typeof t ? 255 : t, this.g = "undefined" == typeof i ? 255 : i, this.b = "undefined" == typeof e ? 255 : e, this.a = "undefined" == typeof o ? 1 : o, this.hex = this.getHex())
        }

        function o(t, i, e) {
            return 0 > e && (e += 1), e > 1 && (e -= 1), 1 / 6 > e ? t + 6 * (i - t) * e : .5 > e ? i : 2 / 3 > e ? t + (i - t) * (2 / 3 - e) * 6 : t
        }
        var n = t("famous-utils/Utils");
        s.prototype.getHue = function() {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255,
                s = Math.max(t, i, e),
                o = Math.min(t, i, e),
                n = 0,
                r = s - o;
            switch (s) {
                case t:
                    n = (i - e) / r + (e > i ? 6 : 0);
                    break;
                case i:
                    n = (e - t) / r + 2;
                    break;
                case e:
                    n = (t - i) / r + 4
            }
            return n *= 60, isNaN(n) && (n = 0), n
        }, s.prototype.getSaturation = function() {
            var t, i = this.r / 255,
                e = this.g / 255,
                s = this.b / 255,
                o = Math.max(i, e, s),
                n = Math.min(i, e, s),
                r = (o + n) / 2;
            if (o == n) h = t = 0;
            else {
                var a = o - n;
                switch (t = r > .5 ? a / (2 - o - n) : a / (o + n), o) {
                    case i:
                        h = (e - s) / a + (s > e ? 6 : 0);
                        break;
                    case e:
                        h = (s - i) / a + 2;
                        break;
                    case s:
                        h = (i - e) / a + 4
                }
                h *= 60
            }
            return 100 * t
        }, s.prototype.getBrightness = function() {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255;
            return 100 * Math.max(t, i, e)
        }, s.prototype.getLightness = function() {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255;
            return (Math.max(t, i, e) + Math.min(t, i, e)) / 2 * 100
        }, s.prototype.getHex = function() {
            function t(t) {
                var i = t.toString(16);
                return 1 === i.length ? "0" + i : i
            }
            return "#" + t(this.r) + t(this.g) + t(this.b)
        }, s.prototype.getHSL = function() {
            var t, i, e = this.r / 255,
                s = this.g / 255,
                o = this.b / 255,
                n = Math.max(e, s, o),
                r = Math.min(e, s, o),
                a = (n + r) / 2;
            if (n == r) t = i = 0;
            else {
                var h = n - r;
                switch (i = a > .5 ? h / (2 - n - r) : h / (n + r), n) {
                    case e:
                        t = (s - o) / h + (o > s ? 6 : 0);
                        break;
                    case s:
                        t = (o - e) / h + 2;
                        break;
                    case o:
                        t = (e - s) / h + 4
                }
                t *= 60
            }
            return [t, 100 * i, 100 * a]
        }, s.prototype.setFromHSL = function(t, i, e) {
            t /= 360, i /= 100, e /= 100;
            var s, n, r;
            if (0 === i) s = n = r = e;
            else {
                var a = .5 > e ? e * (1 + i) : e + i - e * i,
                    h = 2 * e - a;
                s = o(h, a, t + 1 / 3), n = o(h, a, t), r = o(h, a, t - 1 / 3)
            }
            return this.r = Math.round(255 * s), this.g = Math.round(255 * n), this.b = Math.round(255 * r), this.hex = this.getHex(), this
        }, s.prototype.setFromHex = function(t) {
            return t = "#" === t.charAt(0) ? t.substring(1, t.length) : t, 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), this.hex = "#" + t, this.r = parseInt(t.substring(0, 2), 16), this.g = parseInt(t.substring(2, 4), 16), this.b = parseInt(t.substring(4, 6), 16), this
        }, s.prototype.setFromRGBA = function(t, i, e, s) {
            return this.r = t, this.g = i, this.b = e, s && (this.a = s), this.hex = this.getHex(), this
        }, s.prototype.setHue = function(t) {
            var i = this.getHSL();
            return this.setFromHSL(t, i[1], i[2])
        }, s.prototype.setSaturation = function(t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], t, i[2])
        }, s.prototype.setLightness = function(t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], i[1], t)
        }, s.prototype.getCSSBackgroundColor = function() {
            return n.backgroundColor(this.r, this.b, this.g, this.a)
        }, s.prototype.getCSSColor = function() {
            return n.color(this.r, this.g, this.b, this.a)
        }, s.prototype.clone = function() {
            return new s(this.r, this.g, this.b, this.a)
        }, s.prototype.toNormalizeColorArray = function() {
            return [this.r / 255, this.g / 255, this.b / 255, this.a]
        }, e.exports = s
    }), define("famous-ui/ColorPicker/ColorButton", ["require", "exports", "module", "famous/EventHandler", "famous/CanvasSurface"], function(t, i, e) {
        function s(t, i) {
            this.size = t, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], o.call(this, {
                size: this.size,
                canvasSize: this.canvasSize
            }), this.color = i, this.colorSurface(this.color.getHex())
        }
        var o = (t("famous/EventHandler"), t("famous/CanvasSurface"));
        s.prototype = Object.create(o.prototype), s.prototype.colorSurface = function(t) {
            var i = this.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = t, i.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }, e.exports = s
    }), define("famous-ui/ColorPicker/CanvasPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous-utils/Utils", "famous-color/Color", "famous/Engine", "famous-animation/Easing", "./ColorButton", "famous/View"], function(t, i, e) {
        function s(t, i, e) {
            S.call(this, e), this.eventInput.pipe(this.eventOutput), this.size = t, this.color = i.clone(), this.name = name, this.pos = [], this._dirty = !0, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], this._selectedCoords = [y.map(this.options.pickerPosX, 0, 1, 0, this.size[0] - 1, !0), y.map(this.options.pickerPosY, 0, 1, 0, this.size[1] - 1, !0)], this.gradient = new f({
                size: [this.size[0], this.size[0]],
                canvasSize: [2 * this.size[0], 2 * this.size[0]]
            });
            var s = n.call(this, this.size[0] * this.options.pickerPosX, this.size[1] * this.options.pickerPosY);
            this.pickerTransform = new g({
                transform: m.translate(s[0], s[1], 0)
            }), this.picker = this.options.colorPicker ? new b(this.options.pickerSize, this.color) : new d({
                size: this.options.pickerSize,
                classes: ["ui-color-picker"]
            }), this.picker.setProperties(this.options.pickerProperties), this._mousemove = h.bind(this), this._mouseup = u.bind(this), this.gradient.on("mousedown", r.bind(this)), this.picker.on("mousedown", r.bind(this)), this.gradient.on("touchstart", a.bind(this)), this.picker.on("touchstart", a.bind(this)), this.gradient.on("touchmove", c.bind(this)), this.picker.on("touchmove", c.bind(this)), this.gradient.on("click", p), this.picker.on("click", p), this.on("updatePosition", this.updateColor.bind(this)), this.on("updatePosition", o.bind(this)), this.node.add(this.pickerTransform).link(this.picker), this.node.add(this.gradient)
        }

        function o(t) {
            var i = n.call(this, this._selectedCoords[0], this._selectedCoords[1]);
            this.options.railsY && (i[1] = 0), this.pickerTransform.halt(), t.shouldAnimate ? this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ), this.options.transition) : this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ))
        }

        function n(t, i) {
            var e = .5 * this.options.pickerSize[0];
            return [y.map(t, 0, this.size[0], -e, this.size[0] - e, !0), this.options.railsY ? 0 : y.map(i, 0, this.size[1], -e, this.size[1] - e, !0)]
        }

        function r(t) {
            t.preventDefault(), t.stopPropagation(), this._dirty = !0, l.call(this, t, !0), _.on("mousemove", this._mousemove), _.on("mouseup", this._mouseup)
        }

        function a(t) {
            this._dirty = !0, t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function h(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t)
        }

        function u(t) {
            t.preventDefault(), t.stopPropagation(), _.unbind("mousemove", this._mousemove), _.unbind("mouseup", this._mouseup)
        }

        function c(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function p(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function l(t, i) {
            this._dirty && (this.pos = y.getSurfacePosition(this.gradient), this._dirty = !1), this._selectedCoords = [y.clamp(t.pageX - this.pos[0], 0, this.size[0] - 1), y.clamp(t.pageY - this.pos[1], 0, this.size[1] - 1)], this.emit("updatePosition", {
                shouldAnimate: i
            })
        }
        var d = t("famous/Surface"),
            f = t("famous/CanvasSurface"),
            m = t("famous/Matrix"),
            g = (t("famous/EventHandler"), t("famous/Modifier")),
            y = t("famous-utils/Utils"),
            _ = (t("famous-color/Color"), t("famous/Engine")),
            v = t("famous-animation/Easing"),
            b = t("./ColorButton"),
            S = t("famous/View");
        s.prototype = Object.create(S.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            pickerSize: [4, 25],
            transition: {
                curve: v.inSineNorm,
                duration: 50
            },
            pickerPosX: 0,
            pickerPosY: 0,
            pickerZ: 2,
            railsY: !1,
            pickerProperties: {},
            colorPicker: !1
        }, s.prototype.drawGradient = function() {}, s.prototype.getColor = function() {
            return this.color
        }, s.prototype.getSize = function() {
            return this.size
        }, s.prototype.updateColor = function() {
            var t = this.gradient.getContext("2d"),
                i = t.getImageData(2 * this._selectedCoords[0], 2 * this._selectedCoords[1], 1, 1).data;
            this.color.setFromRGBA(i[0], i[1], i[2]), this.emit("change", {
                value: this.color
            })
        }, e.exports = s
    }), define("famous-ui/ColorPicker/GradientPicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function(t, i, e) {
        function s(t, i) {
            var e = i.getSaturation() / 100,
                s = i.getBrightness() / 100;
            i.setSaturation(100), n.call(this, t, i, {
                pickerSize: [26, 26],
                pickerProperties: {
                    borderRadius: "13px",
                    border: "1px solid white"
                },
                pickerPosX: e,
                pickerPosY: 1 - s
            }), this.drawGradient(this.color.getCSSColor())
        }

        function o(t, i, e, s, o) {
            var n = t.createLinearGradient(this.canvasSize[0] * s[0], this.canvasSize[1] * s[1], this.canvasSize[0] * o[0], this.canvasSize[1] * o[1]);
            n.addColorStop(0, i), n.addColorStop(1, e), t.fillStyle = n, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }
        var n = (t("famous-color/Color"), t("./CanvasPicker"));
        s.prototype = Object.create(n.prototype), s.prototype.drawGradient = function(t) {
            var i = this.gradient.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, i, "rgba(255, 255, 255, 1)", t, [0, .5], [1, .5]), o.call(this, i, "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)", [.5, 1], [.5, 0]), this.updateColor()
        }, e.exports = s
    }), define("famous-ui/ColorPicker/HuePicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function(t, i, e) {
        function s(t, i, e) {
            var s = new n,
                o = i.getHue();
            s.setFromHSL(o, 100, 50);
            var a = e || [35, 35];
            r.call(this, t, s, {
                railsY: !0,
                pickerProperties: {
                    border: "2px solid white",
                    borderRadius: t[0] / 2 + "px",
                    boxShadow: "0px 1px 0px #888",
                    marginTop: "2px"
                },
                pickerPosX: 1 - o / 360,
                pickerSize: a,
                colorPicker: !0,
                normalizedColors: !0
            }), this.drawGradient(this.color.getCSSColor()), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, e) {
            var s = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
            s.addColorStop(0, "rgb(255,   0,   0)"), s.addColorStop(.16, "rgb(255,   0, 255)"), s.addColorStop(.33, "rgb(0,     0, 255)"), s.addColorStop(.5, "rgb(0,   255, 255)"), s.addColorStop(.67, "rgb(0,   255,   0)"), s.addColorStop(.83, "rgb(255, 255,   0)"), s.addColorStop(1, "rgb(255,   0,   0)"), t.fillStyle = s, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }
        var n = t("famous-color/Color"),
            r = t("./CanvasPicker");
        s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function(t) {
            this.pickerColor !== t.value.hex && (this.picker.colorSurface(t.value.hex), this.pickerColor = t.value.hex)
        }, s.prototype.drawGradient = function() {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, t, [0, .5], [1, .5])
        }, e.exports = s
    }), define("famous-ui/ColorPicker/AlphaPicker", ["require", "exports", "module", "famous/Surface", "famous-color/Color", "./CanvasPicker", "famous-ui/Easing/CanvasDrawer"], function(t, i, e) {
        function s(t, i, e) {
            var s = e || [35, 35];
            r.call(this, t, i, {
                railsY: !0,
                pickerProperties: {
                    border: "3px solid white",
                    borderRadius: t[0] / 2 + "px",
                    boxShadow: "0px 1px 0px #888",
                    marginTop: "2px"
                },
                pickerPosX: i.a,
                pickerSize: s,
                colorPicker: !0,
                normalizedColors: !0
            }), this.alpha = this.color.a, this.backgroundCanvas = n.call(this), this.drawGradient(), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, e, s) {
            colorAlpha = s.substring(0, s.length - 2);
            var o = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
            o.addColorStop(0, colorAlpha + "0)"), o.addColorStop(1, colorAlpha + "1)"), t.fillStyle = o, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        function n() {
            var t = document.createElement("canvas");
            t.width = this.canvasSize[0], t.height = this.canvasSize[1];
            var i = t.getContext("2d");
            i.fillStyle = "#ffffff", a.rect(i, 0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = "#cccccc";
            for (var e = 16, s = 2, o = height = this.canvasSize[0] / e, n = 0; e > n; n++)
                for (var r = 0; s > r; r++) n % 2 == 0 && r % 2 == 0 ? a.rect(i, o * n, r * height, o, height) : n % 2 == 1 && r % 2 == 1 && a.rect(i, o * n, r * height, o, height);
            return t
        }
        var r = (t("famous/Surface"), t("famous-color/Color"), t("./CanvasPicker")),
            a = t("famous-ui/Easing/CanvasDrawer");
        s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function(t) {
            this.picker.colorSurface(t.value.getCSSColor())
        }, s.prototype.setColor = function(t) {
            this.color = t, this.drawGradient(), this.drawPickerColor({
                value: this.color
            })
        }, s.prototype.drawGradient = function() {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), t.drawImage(this.backgroundCanvas, 0, 0);
            var i = this.color.clone();
            i.a = 0, o.call(this, t, [0, 0], [1, 1], i.getCSSColor())
        }, s.prototype.updateColor = function() {
            var t = parseFloat((this._selectedCoords[0] / this.size[0]).toFixed(2));
            this.color.a = t, this.emit("change", {
                value: this.color
            })
        }, e.exports = s
    }), define("famous-ui/ColorPicker/ColorPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Transitionable", "famous-utils/Utils", "famous-color/Color", "famous/View", "famous/Engine", "famous-animation/Easing", "famous-utils/Time", "./GradientPicker", "./HuePicker", "./AlphaPicker", "./ColorButton"], function(t, i, e) {
        function s() {
            d.apply(this, arguments), this.color = this.options.defaultColor, this.sizeState = new p([0, 0]), this.visible = !1, this.boundListener = !1, this._closeListen = this.hide.bind(this)
        }

        function o(t) {
            var i = t.value.getCSSColor();
            this.gradientPicker.drawGradient(i), a.call(this)
        }

        function n() {
            a.call(this)
        }

        function r() {
            a.call(this)
        }

        function a() {
            var t = this.gradientPicker.getColor();
            this.options.useAlpha && (t.a = this.alphaPicker.getColor().a, this.alphaPicker.setColor(t)), this.color = t, h.call(this, {
                value: this.color
            }), this.eventOutput.emit("change", {
                value: this.color
            })
        }

        function h(t) {
            var i = t.value.getCSSColor();
            this.openingSurface.colorSurface(i)
        }
        var u = (t("famous/Surface"), t("famous/CanvasSurface"), t("famous/Matrix")),
            c = (t("famous/EventHandler"), t("famous/Modifier")),
            p = t("famous/Transitionable"),
            l = (t("famous-utils/Utils"), t("famous-color/Color")),
            d = t("famous/View"),
            f = t("famous/Engine"),
            m = t("famous-animation/Easing"),
            g = (t("famous-utils/Time"), t("./GradientPicker")),
            y = t("./HuePicker"),
            _ = t("./AlphaPicker"),
            v = t("./ColorButton");
        s.prototype = Object.create(d.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            transition: {
                curve: m.inOutBackNorm,
                duration: 400
            },
            hueSize: 30,
            pickerSize: [25, 25],
            size: void 0,
            defaultColor: new l(80, 255, 255),
            name: "",
            useAlpha: !0,
            padding: 5
        }, s.prototype.init = function() {
            this.defaultPositions = {
                gradientPicker: u.translate(0, this.options.size[1], 1),
                huePicker: u.translate(0, this.options.size[1] + this.options.size[0], 1),
                alphaPicker: u.translate(0, 2 * this.options.size[1] + this.options.size[0] + 3 * this.options.padding, 1)
            }, this.gradientPicker = new g([this.options.size[0], this.options.size[0]], this.color), this.gradientTransform = new c({
                transform: this.defaultPositions.gradientPicker
            }), this.huePicker = new y([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.hueTransform = new c({
                transform: this.defaultPositions.huePicker
            }), this.openingSurface = new v(this.options.size, this.color, this.options.name), this.openingTransform = new c, this.node.add(this.hueTransform).link(this.huePicker), this.node.add(this.openingTransform).link(this.openingSurface), this.node.add(this.gradientTransform).link(this.gradientPicker), this.openingSurface.on("click", this.togglePicker.bind(this)), this.huePicker.on("change", o.bind(this)), this.gradientPicker.on("change", n.bind(this)), this.on("change", h.bind(this)), this.options.useAlpha && (this.alphaPicker = new _([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.alphaTransform = new c({
                transform: this.defaultPositions.alphaPicker
            }), this.node.add(this.alphaTransform).link(this.alphaPicker), this.alphaPicker.on("change", r.bind(this))), this.hide()
        }, s.prototype.set = function() {}, s.prototype.get = function() {
            return this.color
        }, s.prototype.togglePicker = function() {
            0 == this.visible ? this.show() : this.hide()
        }, s.prototype.hide = function() {
            this.visible = !1;
            var t = u.multiply(u.scale(1, 1e-7), this.defaultPositions.gradientPicker);
            this.hueTransform.halt(), this.hueTransform.setOpacity(0, this.options.transition), this.hueTransform.setTransform(t, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(0, this.options.transition), this.gradientTransform.setTransform(t, this.options.transition), this.options.useAlpha && (this.alphaTransform.halt(), this.alphaTransform.setOpacity(0, this.options.transition), this.alphaTransform.setTransform(t, this.options.transition)), this.sizeState.set([this.options.size[0], this.options.size[1]], this.options.transition), 1 == this.boundListener && this.unbindClickClose()
        }, s.prototype.show = function() {
            this.emit("showing"), this.visible = !0, this.hueTransform.halt(), this.hueTransform.setOpacity(1, this.options.transition), this.hueTransform.setTransform(this.defaultPositions.huePicker, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(1, this.options.transition), this.gradientTransform.setTransform(this.defaultPositions.gradientPicker, this.options.transition), this.options.useAlpha ? (this.alphaTransform.halt(), this.alphaTransform.setOpacity(1, this.options.transition), this.alphaTransform.setTransform(this.defaultPositions.alphaPicker, this.options.transition), this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1] + this.alphaPicker.getSize()[1]], this.options.transition)) : this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1]], this.options.transition), f.defer(this.bindClickClose.bind(this))
        }, s.prototype.setSize = function(t) {
            this.options.size = t
        }, s.prototype.getSize = function() {
            return this.options.size ? this.sizeState.get() : void 0
        }, s.prototype.bindClickClose = function() {
            f.on("click", this._closeListen), this.boundListener = !0
        }, s.prototype.unbindClickClose = function() {
            f.unbind("click", this._closeListen), this.boundListener = !1
        }, s.prototype.render = function() {
            return {
                size: this.sizeState.get(),
                target: this.node.render()
            }
        }, e.exports = s
    }), define("famous-ui/Text/Label", ["require", "exports", "module", "famous/Surface"], function(t, i, e) {
        function s(t) {
            this.options = {
                size: void 0,
                content: "",
                properties: {},
                classes: ["ui-label"]
            }, this._dirty = !0;
            for (var i in t) this.options[i] = t[i];
            this.surface
        }
        var o = t("famous/Surface");
        s.prototype.init = function() {
            this.surface = new o({
                size: this.options.size,
                content: "<div>" + this.options.content + "</div>",
                classes: this.options.classes,
                properties: this.options.properties
            })
        }, s.prototype.setSize = function(t) {
            this.options.size = [t[0], 0]
        }, s.prototype.getSize = function() {
            return this.options.size ? this.options.size : void 0
        }, s.prototype.pipe = function(t) {
            return this.surface.pipe(t)
        }, s.prototype.render = function() {
            return this._dirty && this.surface._currTarget && (this.options.size = [this.options.size[0], this.surface._currTarget.firstChild.clientHeight], this.surface.setSize(this.options.size), this._dirty = !1), this.surface.render()
        }, e.exports = s
    }), define("famous-ui/AutoUI", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "famous-ui/PanelScrollview", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Dropdown/Dropdown", "famous-ui/Slider", "famous-ui/ColorPicker/ColorPicker", "famous-ui/Text/Label"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.panel = new u(this.options.panelOptions), this.pipe(this.panel), this.autoUIElements = [], this.autoUIElementsMap = {}, this.panelModifier = new a({
                transform: this.options.defaultMatrix
            }), this._add(this.panelModifier).link(this.panel), this.options.defaultSelected && this.setCurrentObject(this.options.defaultSelected)
        }

        function o() {
            if (this.currentObject.autoUI)
                for (var t = 0; t < this.currentObject.autoUI.length; t++) {
                    var i = this.currentObject.autoUI[t];
                    i.type && this._optionToUI(i, this.panel)
                }
            this._scaledDown && (this.panelModifier.setTransform(this.options.defaultMatrix, this.options.scaleTransition), this._scaledDown = !1)
        }
        var n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Modifier"),
            h = t("famous-animation/Easing"),
            u = t("famous-ui/PanelScrollview"),
            c = t("famous-ui/Toggles/BoolToggle"),
            p = t("famous-ui/Toggles/MultiBoolToggle"),
            l = t("famous-ui/Easing/MultiEasingToggle"),
            d = t("famous-ui/Dropdown/Dropdown"),
            f = t("famous-ui/Slider"),
            m = t("famous-ui/ColorPicker/ColorPicker"),
            g = t("famous-ui/Text/Label");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            scaleTransition: {
                curve: h.inOutBackNorm,
                duration: 500
            },
            opacityTransition: {
                curve: h.inOutBackNorm,
                duration: 500
            },
            saveValues: !1,
            panelOptions: {},
            defaultSelected: void 0,
            defaultMatrix: r.translate(0, 0),
            animateIn: !1
        }, s.UI_ELEMENTS = {
            slider: f,
            dropdown: d,
            colorPicker: m,
            toggle: c,
            multiBoolToggle: p,
            easing: l,
            label: g
        }, s.prototype.setCurrentObject = function(t) {
            t !== this.currentObj && (this.currentObject = t, this.clear(o.bind(this)))
        }, s.prototype.setScrollviewOptions = function(t) {
            return this.panel.setOptions(t)
        }, s.prototype.toJSON = function() {
            for (var t = 0; t < this.autoUIElements.length; t++);
        }, s.prototype.reset = function() {
            this.panel.reset(), this.autoUIElements = [], this.autoUIElementsMap = {}
        }, s.prototype.getSize = function() {
            return [this.panel.panelOpts.width, void 0]
        }, s.prototype.clear = function(t) {
            function i(t) {
                this.panelModifier.halt(), this.panelModifier.setOpacity(1, this.options.opacityTransition), this.reset(), t && t()
            }
            this._scaledDown = !0, this.options.animateIn ? (this.panelModifier.setOpacity(0, this.options.opacityTransition), this.panelModifier.setTransform(r.move(r.scale(1, 1e-5), this.options.defaultMatrix), this.options.scaleTransition, i.bind(this, t))) : (this.reset(), t && t())
        }, s.prototype._optionToUI = function(t) {
            var i = s.UI_ELEMENTS[t.type],
                e = new i(t.uiOptions);
            if (this.panel.add(e), this.autoUIElements.push(e), t.uiOptions.name && (this.autoUIElementsMap[t.uiOptions.name] = e), t.key) {
                var o = t.object ? t.object : this.currentObject.options;
                e.on("change", function(t, i, e, s) {
                    t[i] = s.value, e && e.call(this, s.value)
                }.bind(this.currentObject, o, t.key, t.callback))
            } else t.callback && e.on("change", function(t, i) {
                t.call(this, i.value)
            }.bind(this.currentObject, t.callback))
        }, s.prototype.getUIElementsMap = function() {
            return this.autoUIElementsMap
        }, e.exports = s
    }), define("core/SignupError", ["require", "exports", "module", "famous/Engine", "famous/View", "famous/Matrix", "famous/ImageSurface", "famous/Surface", "./ExpandingSurface", "famous/Modifier", "famous/Utility", "./Fader", "famous-animation/Easing", "famous-utils/Utils", "famous-utils/KeyCodes", "app/ID", "famous-utils/Time", "./Submit", "famous/RenderNode", "app/SceneController", "./SignupData", "./SignupContent", "famous/Transitionable", "famous-physics/utils/PhysicsTransition"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.error, this.errorMod, this.signupData, this._isVisible = !0, this.initError(), this.events()
        }

        function o(t) {
            this.signupData = t, this.dataEvents()
        }

        function n(t) {
            this.setErrorFailed(), this.setErrorContent(t), this.showError()
        }

        function r() {
            this.setErrorSuccess(), this.setErrorContent("Success!"), this.showError()
        }
        var a = (t("famous/Engine"), t("famous/View")),
            h = t("famous/Matrix"),
            u = (t("famous/ImageSurface"), t("famous/Surface")),
            c = (t("./ExpandingSurface"), t("famous/Modifier")),
            p = (t("famous/Utility"), t("./Fader"), t("famous-animation/Easing"), t("famous-utils/Utils"), t("famous-utils/KeyCodes"), t("app/ID"), t("famous-utils/Time")),
            l = (t("./Submit"), t("famous/RenderNode"), t("app/SceneController"), t("./SignupData"), t("./SignupContent"), t("famous/Transitionable")),
            d = t("famous-physics/utils/PhysicsTransition");
        l.registerMethod("physics", d), s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            signup: void 0,
            animateScene: !0,
            closeSize: [50, 50],
            hideOpen: !1,
            hideOpenOnMobile: !0,
            openButtonZPos: 2,
            errorFailedProperties: {
                color: "rgb(253, 98, 85)"
            },
            errorSuccessProperties: {
                color: "rgb(90, 226, 132)"
            }
        }, s.prototype.events = function() {
            this.options.signup.on("dataAdded", o.bind(this))
        }, s.prototype.dataEvents = function() {
            this.signupData.on("success", r.bind(this)), this.signupData.on("error", n.bind(this))
        }, s.prototype.initError = function() {
            this.error = new u({
                size: window.innerWidth > 1400 ? [.25 * window.innerWidth, 100] : [.75 * window.innerWidth, 100],
                classes: ["famous-signup-error"]
            }), this.errorMod = new c({
                transform: h.move(h.scale(1e-5, 1e-5), [0, 0, 3]),
                origin: [.5, 0],
                opacity: 0
            }), this.node.add(this.errorMod).link(this.error)
        }, s.prototype.showError = function() {
            var t = {
                curve: "outExpoNorm",
                duration: 500
            };
            this.errorMod.setOpacity(1, t), this.errorMod.setOrigin([.5, .25], t), this.errorMod.setTransform(h.translate(0, 0, 4), t), p.setTimeout(this.hideError.bind(this), 3e3)
        }, s.prototype.hideError = function() {
            var t = {
                curve: "inOutExpoNorm",
                duration: 500
            };
            this.errorMod.halt(), this.errorMod.setOrigin([.5, 0], t), this.errorMod.setOpacity(0, t), this.errorMod.setTransform(h.move(h.scale(1e-5, 1e-5), [0, 0, 4]), t)
        }, s.prototype.setErrorContent = function(t) {
            this.error.setContent(t)
        }, s.prototype.setErrorFailed = function() {
            this.error.setProperties(this.options.errorFailedProperties)
        }, s.prototype.setErrorSuccess = function() {
            this.error.setProperties(this.options.errorSuccessProperties)
        }, s.prototype.setVisible = function(t) {
            this._isVisible = t
        }, s.prototype.getSize = function() {
            return this.error.getSize()
        }, e.exports = s
    }), define("core/UI", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Surface", "famous/Utility", "famous/Modifier", "famous/Engine", "famous/ContainerSurface", "famous-animation/Easing", "famous-ui/AutoUI", "famous-ui/Buttons/RotateButton", "./Signup", "./SignupError", "famous-utils/Time", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            n.apply(this, arguments), this.buttonOpacity = .25, this.uiShowMatrix, this.uiHideMatrix, this.shownPositions, this.hiddenPositions, this.button, this.buttonModifier, this.ui, this.uiModifier, this.backingPanel, this.backingModifier, this.signup, this.error, this.positions(), this.initSignup(), this.backingShowMatrix, this.uiHideMatrix, this.uiShowMatrix, this.shownPositions, this.hiddenPositions, this._uiAdded = !1, this._uiVisible = !1, this.initButton(), this.initUI(), this.initBacking(), this.events(), this.showButton(), this.hideAll(), m.isMobile() && this.button.close()
        }

        function o(t) {
            t.stopPropagation()
        }
        var n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Surface"),
            h = (t("famous/Utility"), t("famous/Modifier")),
            u = (t("famous/Engine"), t("famous/ContainerSurface")),
            c = t("famous-animation/Easing"),
            p = t("famous-ui/AutoUI"),
            l = t("famous-ui/Buttons/RotateButton"),
            d = t("./Signup"),
            f = t("./SignupError"),
            m = (t("famous-utils/Time"), t("famous-utils/Utils"));
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            buttonSize: [40, 40],
            offset: [20, 20],
            uiFadeTransition: {
                curve: c.inOutBackNorm,
                duration: 400
            },
            uiScaleTransition: {
                curve: c.inOutCubicNorm,
                duration: 400
            },
            hoverTransition: {
                curve: c.inOutSineNorm,
                duration: 800
            },
            backingFade: .7
        }, s.prototype.positions = function() {
            var t = this.signup ? this.signup.getSize() : [0, 0],
                i = 3 * this.options.offset[1] + this.options.buttonSize[1] + t[1];
            this.uiShowMatrix = r.translate(this.options.offset[0], 2 * this.options.offset[1] + this.options.buttonSize[1], 2), this.uiHideMatrix = r.multiply(r.scale(1, 1e-4, 1), this.uiShowMatrix), this.backingShowMatrix = r.translate(0, 0, 1), this.backingHide = r.multiply(r.scale(1, 1e-4, 1), this.backingShowMatrix), this.signupShowMatrix = r.translate(this.options.offset[0], 3 * this.options.offset[1] + this.options.buttonSize[1] + window.innerHeight - i, 2), this.signupHideMatrix = r.multiply(r.scale(1, 1e-4, 1), this.signupShowMatrix), this.shownPositions = {
                button: r.translate(this.options.offset[0], this.options.offset[1], 2)
            }, this.hiddenPositions = {
                button: r.translate(this.options.offset[0], -(this.options.buttonSize[0] + this.options.offset[1]), 2)
            }, this.ui && this.uiContainer.setSize([t[0], window.innerHeight - i]), this._uiVisible && this.showAll()
        }, s.prototype.initSignup = function() {
            this.signup = new d, this.signupMod = new h({
                transform: this.signupHideMatrix,
                opacity: 0
            }), this.error = new f({
                signup: this.signup
            }), this.node.add(this.error), this.node.add(this.signupMod).link(this.signup), this.signup.on("resize", this.resize.bind(this))
        }, s.prototype.initButton = function() {
            this.button = new l({
                surfaceOptions: {
                    properties: {
                        backgroundColor: "rgba( 0, 0, 0, 0.0)"
                    },
                    content: '<img draggable="false" class="no-user-select" src="js/core/plus.svg" height="' + this.options.buttonSize[1] + '"></img>',
                    size: this.options.buttonSize
                }
            }), this.buttonModifier = new h({
                size: this.options.buttonSize,
                transform: this.hiddenPositions.button,
                opacity: this.buttonOpacity
            }), this.node.add(this.buttonModifier).link(this.button)
        }, s.prototype.initUI = function() {
            this.ui = new p, this.uiContainer = new u({
                size: [256, void 0],
                properties: {
                    overflow: "hidden"
                }
            }), this.uiContainer.pipe(this.ui), this.uiContainer.on("mousewheel", o), this.uiContainer.on("wheel", o), this.uiContainer.on("touchmove", o), this.uiContainer.on("touchstart", o), this.uiContainer.on("touchend", o), this.uiModifier = new h({
                transform: this.uiHideMatrix,
                opacity: 0
            }), this.node.add(this.uiModifier).link(this.uiContainer), this.uiContainer.link(new h({
                transform: r.translate(0, 0, 1)
            })).link(this.ui)
        }, s.prototype.initBacking = function() {
            var t = this.ui.getSize();
            this.backingPanel = new a({
                properties: {
                    backgroundColor: "#000000"
                },
                size: [t[0] + 2 * this.options.offset[0], window.innerHeight]
            }), this.backingModifier = new h({
                transform: this.backingHide,
                opacity: 0
            }), this.node.add(this.backingModifier).link(this.backingPanel)
        }, s.prototype.getUI = function() {
            return this.ui
        }, s.prototype.events = function() {
            this.button.on("open", this.showUI.bind(this, void 0)), this.button.on("close", this.hideUI.bind(this, void 0))
        }, s.prototype.mousemove = function(t, i) {
            var e = m.distance(t.pageX, t.pageY, this.buttonX, this.buttonY);
            i > e || this.uiModifier.getOpacity() > .01 ? 1 != this.buttonOpacity && (this.buttonOpacity = 1, this.buttonModifier.halt(), this.buttonModifier.setOpacity(this.buttonOpacity, this.options.hoverTransition)) : .5 != this.buttonOpacity && (this.buttonOpacity = .5, this.buttonModifier.halt(), this.buttonModifier.setOpacity(this.buttonOpacity, this.options.hoverTransition))
        }, s.prototype.resize = function() {
            this.positions(), this.backingPanel.setSize([this.ui.getSize()[0] + 2 * this.options.offset[0], window.innerHeight])
        }, s.prototype.showAll = function() {
            this._uiVisible || this.showUI(), this.showButton(), this.button.open()
        }, s.prototype.hideAll = function() {
            this._uiVisible && this.hideUI(), this.hideButton()
        }, s.prototype.showButton = function() {
            var t = this.shownPositions.button,
                i = this.options.buttonSize;
            this.buttonX = t[12] + .5 * i[0], this.buttonY = t[13] + .5 * i[1], this.buttonModifier.halt(), this.buttonModifier.setTransform(t, this.options.uiFadeTransition)
        }, s.prototype.showUI = function() {
            this._uiVisible = !0, this.uiModifier.halt(), this.uiModifier.setTransform(this.uiShowMatrix, this.options.uiScaleTransition), this.uiModifier.setOpacity(1, this.options.uiFadeTransition), this.backingModifier.halt(), this.backingModifier.setOpacity(this.options.backingFade, this.options.uiFadeTransition), this.backingModifier.setTransform(this.backingShowMatrix, this.options.uiScaleTransition), this.signupMod.halt(), this.signupMod.setOpacity(1, this.options.uiFadeTransition), this.signupMod.setTransform(this.signupShowMatrix, this.options.uiScaleTransition), this.eventOutput.emit("showUI")
        }, s.prototype.hideButton = function() {
            this.button.close();
            var t = this.hiddenPositions.button,
                i = this.options.buttonSize;
            this.buttonX = t[12] + .5 * i[0], this.buttonY = t[13] + .5 * i[1], this.buttonModifier.halt(), this.buttonModifier.setTransform(t, this.options.uiFadeTransition)
        }, s.prototype.hideUI = function() {
            this._uiVisible = !1, this.uiModifier.halt(), this.uiModifier.setTransform(this.uiHideMatrix, this.options.uiScaleTransition), this.uiModifier.setOpacity(0, this.options.uiFadeTransition), this.backingModifier.halt(), this.backingModifier.setTransform(this.uiHideMatrix, this.options.uiScaleTransition), this.backingModifier.setOpacity(0, this.options.uiFadeTransition), this.signupMod.halt(), this.signupMod.setOpacity(0, this.options.uiFadeTransition), this.signupMod.setTransform(this.signupHideMatrix, this.options.uiScaleTransition), this.eventOutput.emit("hideUI")
        }, s.prototype.setCurrentObject = function(t) {
            this.ui.setCurrentObject(t)
        }, s.prototype.getButton = function() {
            return this.button
        }, e.exports = s
    }), define("core/InterfaceContainer", ["require", "exports", "module", "famous/Engine", "famous/ContainerSurface"], function(t, i, e) {
        var s = t("famous/Engine"),
            o = t("famous/ContainerSurface"),
            n = s.createContext();
        n.setPerspective(0), n.container.style.zIndex = "10000", n.container.style.position = "absolute", n.container.style.transformStyle = "flat", n.container.style.webkitTransformStyle = "flat";
        var r = new o({
            properties: {
                pointerEvents: "none",
                zIndex: "10001",
                position: "absolute",
                transformStyle: "flat",
                webkitTransformStyle: "flat"
            }
        });
        n.add(r), e.exports = r
    }), define("core/Interface", ["require", "exports", "module", "famous/ContainerSurface", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/Utility", "famous-scene/Scene", "famous-utils/Utils", "famous-utils/KeyCodes", "famous-animation/Easing", "famous-utils/Time", "famous/Transitionable", "famous-physics/utils/PhysicsTransition", "./NextButton", "./Signup", "./UI", "./InterfaceContainer"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), l.context.srcNode.set(void 0), this.options.useUI && (this.UI = new p({
                offset: this.options.offset,
                buttonSize: this.options.buttonSize
            }), this.UI.pipe(this.eventOutput), l.add(this.UI)), this.options.useNext && "s.codepen.io" !== window.location.host && (this.nextButton = new u({
                offset: this.options.offset,
                buttonSize: this.options.buttonSize,
                position: this.options.nextPosition
            }), l.add(this.nextButton)), this.options.useSignup && (this.signup = new c({
                offset: this.options.offset,
                buttonSize: this.options.buttonSize,
                textInputScale: this.options.textInputScale,
                submitScale: this.options.submitScale
            }), l.add(this.signup)), this._uiHidden = !1, this.initForm = this.options.useSignup ? !1 : !0
        }
        var o = (t("famous/ContainerSurface"), t("famous/Surface"), t("famous/Modifier"), t("famous/Matrix"), t("famous/Utility"), t("famous-scene/Scene")),
            n = t("famous-utils/Utils"),
            r = (t("famous-utils/KeyCodes"), t("famous-animation/Easing")),
            a = (t("famous-utils/Time"), t("famous/Transitionable")),
            h = t("famous-physics/utils/PhysicsTransition");
        a.registerMethod("physics", h);
        var u = t("./NextButton"),
            c = t("./Signup"),
            p = t("./UI"),
            l = t("./InterfaceContainer");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            useUI: !0,
            useNext: !0,
            useSignup: !1,
            buttonSize: [40, 40],
            offset: [20, 20],
            nextPosition: "tr",
            submitScale: 2,
            textInputScale: 6,
            uiFadeTransition: {
                curve: r.inOutBackNorm,
                duration: 400
            },
            uiScaleTransition: {
                curve: r.inOutCubicNorm,
                duration: 400
            },
            hoverTransition: {
                curve: r.inOutSineNorm,
                duration: 800
            },
            hideAllTransition: {
                curve: r.inOutBackNorm,
                duration: 800
            }
        }, s.prototype.hideAllUI = function() {
            this._uiHidden = !0, this.signup && this.signup.hideAll(), this.UI && this.UI.hideAll(), this.nextButton && this.nextButton.hideAll()
        }, s.prototype.showAllUI = function() {
            this._uiHidden = !1, this.signup && this.signup.showAll(), this.UI && this.UI.showButton(), this.nextButton && this.nextButton.showAll()
        }, s.prototype.getAutoUI = function() {
            return this.UI ? this.UI.getUI() : void 0
        }, s.prototype.getUI = function() {
            return this.UI
        }, s.prototype.setCurrentObject = function(t) {
            this.UI.setCurrentObject(t)
        }, s.prototype.resize = function() {
            this.width = n.getWidth(), this.height = n.getHeight(), !this._uiHidden && this.signup && this.signup.showLogo(), this.nextButton && this.nextButton.resize(), this.signup && this.signup.resize(), this.UI && this.UI.resize()
        }, s.prototype.mousemove = function(t) {
            if (!this._uiHidden) {
                var i = Math.max(this.height / 3, this.options.buttonSize[0] * (this.options.textInputScale + this.options.submitScale) + 3 * this.options.offset[0]);
                this.UI && this.UI.mousemove(t, i), this.nextButton && this.nextButton.mousemove(t, i)
            }
        }, s.prototype.update = function() {}, e.exports = s
    }), define("app/data", ["require", "exports", "module"], function(t, i, e) {
        e.exports = [{
            //size: [569, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor.jpg",
            size: [800, 800],
            src: 'data/casque1.jpg',
            medium: "etching and aquatint",
            description: "This print is work No. 1 of the Caprichos series (1st edition, Madrid, 1799).",
            thumbSrc: "data/casque1.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$99",
            spanishTitle: "New series Sennheiser audioset<br>Pliable, light",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Sennheiser",
            serie: '3,5mm',
            artist: '1,02m',
            dimensions: "190g"
        }, {
            //size: [567, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega.jpg",
            size: [800, 800],
            src: 'data/casque2.jpg',
            medium: "etching and aquatint",
            description: "This print is work No. 2 of the Caprichos series (1st edition, Madrid, 1799).",
            thumbSrc: "data/casque2.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$299",
            spanishTitle: "High-end Beats model, pliable<br>Noice reducer, comfort",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Beats by Dr. Dre",
            serie: '3,5mm',
            artist: '1,65m',
            dimensions: "290g"
        }, {
            //size: [574, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._03_-_Que_viene_el_Coco.jpg",
            size: [800, 800],
            src: 'data/casque3.jpg',
            thumbSrc: "data/casque3.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 3 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._03_-_Que_viene_el_Coco_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$250",
            spanishTitle: "High-end Denon model, pliable<br>Comfort, earbuds in real leather, high-quality materials.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Denon",
            serie: '3,5mm',
            artist: '1,3m',
            dimensions: "285g"
        }, {
            size: [800, 800],
            src: 'data/casque4.jpg',
            thumbSrc: "data/casque4.jpg",
            //size: [587, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._04_-_El_de_la_rollona.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 4 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._04_-_El_de_la_rollona_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$79",
            spanishTitle: "Sony earphones, light and movable <br>Premium plastic, replacement earbuds offered.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Sony",
            serie: '3,5mm',
            artist: '1,2m',
            dimensions: "120g"
        }, {
            size: [800, 800],
            src: 'data/casque5.jpg',
            thumbSrc: "data/casque5.jpg",
            //size: [624, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._05_-_Tal_para_qual.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 5 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._05_-_Tal_para_qual_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$199",
            spanishTitle: "Classic Beats headset, pliable</br>good comfort, noice reducer",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Beats by Dr. Dre",
            serie: '3,5mm',
            artist: '1,4m',
            dimensions: "265g"
        }, {
            size: [800, 800],
            src: 'data/casque6.jpg',
            thumbSrc: "data/casque6.jpg",
            //size: [568, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._06_-_Nadie_se_conoce.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 6 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._06_-_Nadie_se_conoce_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$149",
            spanishTitle: "Wireless Panasonic headset <br> Ultra-light",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Panasonic",
            serie: '3,5mm',
            artist: '1,24m',
            dimensions: "180g"
        }, {
            size: [800, 800],
            src: 'data/casque7.jpg',
            thumbSrc: "data/casque7.jpg",
            //size: [600, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._07_-_Ni_asi_la_distingue.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 7 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._07_-_Ni_asi_la_distingue_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$85",
            spanishTitle: "Marshall classic headset <br>Ajustable",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Marshall",
            serie: '3,5mm',
            artist: '1,7m',
            dimensions: "190g"
        }, {
            size: [800, 800],
            src: 'data/casque8.jpg',
            thumbSrc: "data/casque8.jpg",
            //size: [569, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._08_-_Que_se_la_llevaron21.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 8 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._08_-_Que_se_la_llevaron21_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$239",
            spanishTitle: "Panasonic high-end wireless headset<br>Noise-reducer, rechargeable, good battery life, foldable.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Panasonic",
            serie: '3,5mm',
            artist: '1,25m',
            dimensions: "250g"
        }, {
            size: [800, 800],
            src: 'data/casque9.jpg',
            thumbSrc: "data/casque9.jpg",
            //size: [593, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._09_-_Tantalo.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 9 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._09_-_Tantalo_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$259",
            spanishTitle: "High-end Oppo headset, foldable <br>Comfort, leather eartips, premium materials.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Oppo",
            serie: '3,5mm',
            artist: '1,3m',
            dimensions: "260g"
        }, {
            size: [800, 800],
            src: 'data/casque10.jpg',
            thumbSrc: "data/casque10.jpg",
            //size: [571, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._10_-_El_amor_y_la_muerte.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 10 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._10_-_El_amor_y_la_muerte_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$195",
            spanishTitle: "Pioneer premium headset<br> Noise-reducer, leather eartips.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Pioneer",
            serie: '3,5mm',
            artist: '1,4m',
            dimensions: "220g"
        }, {
            size: [800, 800],
            src: 'data/casque11.jpg',
            thumbSrc: "data/casque11.jpg",
            //size: [568, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._11_-_Muchachos_al_avC3ADo.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 11 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._11_-_Muchachos_al_avC3ADo_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$180",
            spanishTitle: "Razer gaming series headset<br> Integrated microphone, isolation, comfort.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Razer",
            serie: '3,5mm',
            artist: '1,5m',
            dimensions: "200g"
        }, {
            size: [800, 800],
            src: 'data/casque12.jpg',
            thumbSrc: "data/casque12.jpg",
            //size: [567, 800],
            //src: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._12_-_A_caza_de_dientes.jpg",
            medium: "etching and aquatint",
            description: "This print is work No. 12 of the Caprichos series (1st edition, Madrid, 1799).",
            //thumbSrc: "data/caprichos/Museo_del_Prado_-_Goya_-_Caprichos_-_No._12_-_A_caza_de_dientes_thumb.jpg",
            source: "Museo del Prado",
            location: "Madrid",
            date: "$319",
            spanishTitle: "Focal Performance series <br>Pure sound quality, integrated microphone, premium materials.",
            permissions: "This is a faithful photographic reproduction of a two-dimensional, public domain work of art. Such reproductions are in the public domain in the United States. In other jurisdictions, re-use of this content may be restricted; see Reuse of PD-Art photographs for details. The work of art itself is in the public domain for the following reason:Public domainPublic domainfalsefalseThis work is in the public domain in the United States, and those countries with a copyright term of life of the author plus 100 years or less.This file has been identified as being free of known restrictions under copyright law, including all related and neighboring rights.",
            englishTitle: "Focal",
            serie: '3,5mm',
            artist: '1,15m',
            dimensions: "220g"
        }]
    }), define("app/scenes/BlankLightbox", ["require", "exports", "module", "famous-scene/Scene", "famous/Surface", "famous/Matrix", "famous/Engine", "famous/Utility", "famous-utils/Utils", "app/widgets/FrontTile", "app/widgets/BackTile", "app/widgets/Lightbox", "core/Interface", "app/data"], function(t, i, e) {
        function s() {
            o.apply(this), this.lightbox = new u({
                commonFrontProperties: {
                    backgroundColor: "white",
                    boxShadow: "0px 1px 1px 1px #333",
                    borderRadius: "5px",
                    lineHeight: "400px",
                    backgroundColor: "#ccc",
                    textAlign: "center"
                },
                commonBackProperties: {
                    backgroundColor: "#33ccff"
                },
                columnWidth: 400,
                rowHeight: 400
            }), this.initUI(), this.parentUI = new c, this.parentUI.setCurrentObject(this), n.pipe(this.parentUI), this.node.add(this.parentUI), this.node.add(this.lightbox), this.events(), this.setData()
        } {
            var o = t("famous-scene/Scene"),
                n = (t("famous/Surface"), t("famous/Matrix"), t("famous/Engine")),
                r = (t("famous/Utility"), t("famous-utils/Utils")),
                a = t("app/widgets/FrontTile"),
                h = t("app/widgets/BackTile"),
                u = t("app/widgets/Lightbox"),
                c = t("core/Interface");
            t("app/data")
        }
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.events = function() {
            this.parentUI.on("showUI", function() {
                this.showUI()
            }.bind(this)), this.parentUI.on("hideUI", this.hideUI.bind(this)), this.lightbox.on("selectionView", this.parentUI.hideAllUI.bind(this.parentUI)), this.lightbox.on("gridView", this.parentUI.showAllUI.bind(this.parentUI))
        }, s.prototype.initUI = function() {
            this.nonDeboucnedReflow = this.lightbox.layout.reflow.bind(this.lightbox.layout), this.reflowGrid = r.debounce(this.lightbox.layout.reflow.bind(this.lightbox.layout), 150), this.labelProperties = {
                borderBottom: "1px solid white",
                color: "rgba( 255, 255, 255, 1 )",
                fontSize: "16px"
            }, this.autoUI = [{
                type: "label",
                uiOptions: {
                    content: "GRID",
                    properties: this.labelProperties
                }
            }, {
                key: "columnGutters",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.reflowGrid,
                uiOptions: {
                    range: [0, 200],
                    name: "Column Gutters",
                    defaultValue: this.lightbox.layout.options.columnGutters,
                    backOpacity: .8
                }
            }, {
                key: "rowGutters",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 200],
                    name: "Row Gutters",
                    defaultValue: this.lightbox.layout.options.rowGutters
                }
            }, {
                key: "topMargin",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 400],
                    name: "topMargin",
                    defaultValue: this.lightbox.layout.options.topMargin
                }
            }, {
                key: "bottomMargin",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 400],
                    name: "bottomMargin",
                    defaultValue: this.lightbox.layout.options.bottomMargin
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "LIGHTBOX",
                    properties: this.labelProperties
                }
            }, {
                type: "slider",
                callback: this.lightbox.setDeactivateZDepth.bind(this.lightbox),
                uiOptions: {
                    range: [100, 5e3],
                    name: "Deactivate Depth",
                    defaultValue: this.lightbox.layout.options.bottomMargin
                }
            }, {
                key: "simplexAmplitude",
                type: "slider",
                object: this.lightbox.options,
                uiOptions: {
                    range: [0, 500],
                    name: "Duration Variance",
                    defaultValue: this.lightbox.options.simplexAmplitude
                }
            }]
        }, s.prototype.showUI = function() {
            this.lightbox.layout.showDebug()
        }, s.prototype.hideUI = function() {
            this.lightbox.layout.hideDebug()
        }, s.prototype.setData = function(t) {
            this.data = t;
            for (var i = [], e = 0; 80 > e; e++) {
                var s = new a({}),
                    o = new h({
                        size: [500, 800]
                    });
                i.push({
                    front: s,
                    back: o
                })
            }
            this.lightbox.setContent(i)
        }, e.exports = s
    }), define("famous-animation/RegisterEasing", ["require", "exports", "module", "./Easing", "famous/TweenTransition"], function(t) {
        function i() {
            for (var t = /norm/gi, i = e(o).filter(function(i) {
                    return t.test(i)
                }).sort(), s = {}, n = 0; n < i.length; n++) s[i[n]] = o[i[n]];
            return s
        }

        function e(t) {
            var i = [];
            for (key in t) t.hasOwnProperty(key) && i.push(key);
            return i
        }

        function s() {
            var t = i();
            for (var e in t) n.registerCurve(e, t[e])
        }
        var o = t("./Easing"),
            n = t("famous/TweenTransition");
        s()
    }), define("famous-color/ColorPalette", ["require", "exports", "module", "./Color"], function(t, i, e) {
        function s(t) {
            this.colors = t
        }
        t("./Color");
        s.prototype.getColor = function(t) {
            return this.colors[t % this.colors.length]
        }, s.prototype.getCSS = function(t) {
            return this.getColor(t).getCSSColor()
        }, s.prototype.getLighestColor = function() {
            for (var t, i = 0, e = 0; e < this.colors.length; e++) {
                var s = this.colors[e].getLightness();
                s > i && (t = this.colors[e], i = s)
            }
            return t
        }, s.prototype.getDarkestColor = function() {
            for (var t, i = 100, e = 0; e < this.colors.length; e++) {
                var s = this.colors[e].getLightness();
                i > s && (t = this.colors[e], i = s)
            }
            return t
        }, s.prototype.getCount = function() {
            return this.colors.length
        }, e.exports = s
    }), define("famous-physics/forces/TorqueSpring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                period: 0,
                dampingRatio: 0,
                length: 0,
                lMin: 0,
                lMax: 1 / 0,
                anchor: void 0,
                forceFunction: s.FORCE_FUNCTIONS.HOOK,
                callback: void 0,
                callbackTolerance: 1e-7
            }, t && this.setOpts(t), this.torque = new h, this.init(), this._canFireCallback = void 0, a.call(this)
        }

        function o(t) {
            this.forceFunction = t
        }

        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }

        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }
        var a = t("famous-physics/forces/Force"),
            h = t("famous-physics/math/Vector");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = a, s.FORCE_FUNCTIONS = {
            FENE: function(t, i) {
                var e = .99 * i,
                    s = Math.max(Math.min(t, e), -e);
                return s / (1 - s * s / (i * i))
            },
            HOOK: function(t) {
                return t
            }
        }, s.prototype.init = function() {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, s.prototype.applyForce = function(t) {
            for (var i = this.torque, e = this.opts, s = e.stiffness, o = e.damping, n = e.length, r = e.anchor, a = 0; a < t.length; a++) {
                var h = t[a],
                    u = r.sub(h.q),
                    c = u.norm() - n;
                if (0 == c) return;
                var p = h.m;
                s *= p, o *= p, i.set(u.normalize(s * this.forceFunction(c, this.opts.lMax))), o && i.add(h.w.mult(-o), i), h.applyTorque(i)
            }
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, e.exports = s
    }), define("app/widgets/TorqueRenderable", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous-physics/PhysicsEngine", "famous-physics/math/Vector", "famous-physics/math/Vector", "famous-physics/forces/TorqueSpring", "famous-physics/forces/Spring", "famous-physics/forces/Drag", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.physicsMod = new u({
                origin: [.5, .5]
            }), this.physicsNode = new c, this.modifier = new u({
                size: this.options.size
            }), this.node.link(this.modifier).link(this.physicsMod).link(this.physicsNode), this.PE = new p, this.body = this.PE.createBody({
                shape: this.PE.BODIES.RECTANGLE,
                size: this.options.size
            }), this.torqueSpring = new f({
                anchor: new d(0, 0, 0, 0),
                period: this.options.torquePeriod,
                dampingRatio: this.options.torqueDamping
            }), this.forceSpring = new m({
                anchor: [0, 0, 0],
                period: this.options.forceSpringPeriod,
                dampingRatio: this.options.forceSpringDamping
            }), this.drag = new g({
                strength: this.options.drag
            }), this.on("mousedown", n.bind(this)), this.on("touchstart", r.bind(this)), this._torque = new l(0, 0, -this.options.torqueStrength), this._force = new l(0, 0, -this.options.forceStrength), this.PE.attach([this.torqueSpring, this.forceSpring]), o.call(this)
        }

        function o() {
            for (var t = 0; t < this.options.views.length; t++) this.add(this.options.views[t])
        }

        function n(t) {
            this.applyTorque(new l(t.offsetX - this.body.size[0] / 2, -(t.offsetY - this.body.size[1] / 2), 0))
        }

        function r(t) {
            this.applyTorque(new l(t.pageX - this.offset[0] - this.body.size[0] / 2, -(t.pageY - this.offset[1] - this.body.size[1] / 2), 0))
        } {
            var a = t("famous/View"),
                h = t("famous/Matrix"),
                u = t("famous/Modifier"),
                c = t("famous/RenderNode"),
                p = t("famous-physics/PhysicsEngine"),
                l = t("famous-physics/math/Vector"),
                d = t("famous-physics/math/Vector"),
                f = t("famous-physics/forces/TorqueSpring"),
                m = t("famous-physics/forces/Spring"),
                g = t("famous-physics/forces/Drag");
            t("famous-utils/Utils")
        }
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            pos: [0, 0, 0],
            vel: [0, 0, 0],
            torqueStrength: .02,
            torquePeriod: 5,
            torqueDamping: 20,
            forceStrength: .02,
            forceSpringPeriod: 1e3,
            forceSpringDamping: .8,
            zDepth: -300,
            size: [400, 400],
            drag: .01,
            views: []
        }, s.prototype.setTransform = function(t, i, e) {
            this.modifier.setTransform(t, i, e), this.setOffset(h.getTranslate(t))
        }, s.prototype.setOffset = function(t) {
            this.offset = t
        }, s.prototype.setSize = function(t) {
            this.body.setOptions({
                size: t
            }), this.modifier.setSize(t)
        }, s.prototype.applyTorque = function(t) {
            this.body.applyTorque(t.cross(this._torque)), this.body.applyForce(this._force), this.emit("forceApplied")
        }, s.prototype.add = function(t) {
            this.physicsNode.add(t), t.pipe(this)
        }, s.prototype.render = function() {
            this.PE.step();
            var t = this.body.getTransform();
            return this.physicsMod.setTransform(t), this.node.render()
        }, s.prototype.setTorqueSpringOpts = function() {
            this.torqueSpring.setOpts({
                period: this.options.torquePeriod,
                dampingRatio: this.options.torqueDamping
            })
        }, s.prototype.setForceSpringOpts = function() {
            this.forceSpring.setOpts({
                period: this.options.forceSpringPeriod,
                dampingRatio: this.options.forceSpringDamping
            })
        }, s.prototype.setForce = function(t) {
            this.options.forceStrength = t, this._force = new l(0, 0, -this.options.forceStrength)
        }, s.prototype.setTorque = function(t) {
            this.options.torqueStrength = t, this._torque = new l(0, 0, -this.options.torqueStrength)
        }, e.exports = s
    }), define("famous-scene/Transitions", ["require", "exports", "module", "famous-animation/Easing", "famous/Matrix"], function(t, i, e) {
        var s = t("famous-animation/Easing"),
            o = t("famous/Matrix");
        e.exports = {
            popIn: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight])), t.setTransform(o.identity, e, i)
            },
            popOut: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight]), e, i)
            },
            fadeLeft: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0), e, i), t.setOpacity(0, e)
            },
            fadeInLeft: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0)), t.setTransform(o.identity, e, i), t.setOpacity(0), t.setOpacity(1, e)
            },
            fadeRight: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0), e, i), t.setOpacity(0, e)
            },
            fadeInRight: function(t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0)), t.setTransform(o.identity, e, i), t.setOpacity(0), t.setOpacity(1, e)
            }
        }
    }), define("famous-scene/SceneTransitions", ["require", "exports", "module", "famous-scene/SceneController", "famous-animation/Easing", "famous/Matrix", "./Transitions"], function(t, i, e) {
        function s(t) {
            this.controller = t
        }
        var o = (t("famous-scene/SceneController"), t("famous-animation/Easing"), t("famous/Matrix"), t("./Transitions"));
        s.prototype.setController = function(t) {
            this.controller = t
        }, s.prototype.popIn = function(t) {
            o.popIn(this.controller.getActiveTransform(), t)
        }, s.prototype.popOut = function(t) {
            o.popOut(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeLeft = function(t) {
            o.fadeLeft(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeInLeft = function(t) {
            o.fadeInLeft(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeRight = function(t) {
            o.fadeRight(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeInRight = function(t) {
            o.fadeInRight(this.controller.getActiveTransform(), t)
        }, e.exports = s
    }), define("app/SceneTransitions", ["require", "exports", "module", "famous-scene/SceneTransitions", "app/SceneController"], function(t, i, e) {
        var s = t("famous-scene/SceneTransitions"),
            o = t("app/SceneController"),
            n = new s;
        n.setController(o), e.exports = n
    }), define("app/scenes/EmptyScene", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/Engine", "famous/Utility", "famous/ImageSurface", "famous/Surface", "famous-animation/RegisterEasing", "famous-views/Scrollview", "famous-scene/Scene", "famous-utils/Utils", "famous-utils/Time", "famous-color/ColorPalette", "famous-color/Color", "famous-ui/Text/Label", "famous-ui/AutoUI", "app/widgets/TorqueRenderable", "app/SceneController", "app/SceneTransitions"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput)
        } {
            var o = (t("famous/Matrix"), t("famous/Modifier"), t("famous/Engine"), t("famous/Utility"), t("famous/ImageSurface"), t("famous/Surface"), t("famous-animation/RegisterEasing"), t("famous-views/Scrollview"), t("famous-scene/Scene"));
            t("famous-utils/Utils"), t("famous-utils/Time"), t("famous-color/ColorPalette"), t("famous-color/Color"), t("famous-ui/Text/Label"), t("famous-ui/AutoUI"), t("app/widgets/TorqueRenderable"), t("app/SceneController"), t("app/SceneTransitions")
        }
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, e.exports = s
    }), define("app/widgets/BackContent", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            this.content = t, this.tag = o(this.content.tag), this.title = n(this.content.title)
        }

        function o(t) {
            var i = "";
            return t.series && (i += '<span class="lightbox-tag-title"> JACK TYPE </span><br/>', i += '<span class="lightbox-tag-content">' + t.series + "</span><br/>"), t.edition && (i += '<span class="lightbox-tag-title"> EDITION </span><br/>', i += '<span class="lightbox-tag-content">' + t.edition + "</span><br/>"), t.artist && (i += '<span class="lightbox-tag-title"> CABLE LENGTH</span><br/>', i += '<span class="lightbox-tag-content">' + t.artist + "</span><br/>"), t.material && (i += '<span class="lightbox-tag-title"> MATERIAL </span><br/>', i += '<span class="lightbox-tag-content">' + t.material + "</span><br/>"), t.size && (i += '<span class="lightbox-tag-title"> WEIGHT </span><br/>', i += '<span class="lightbox-tag-content">' + t.size + "</span><br/>"), t.date && (i += '<span class="lightbox-tag-title"> PRICE </span><br/>', i += '<span class="lightbox-tag-content">' + t.date + "</span><br/>"), i
        }

        function n(t) {
            return '<span class="lightbox-title">' + t.english + '</span><span class="lightbox-spanish-title">' + t.spanish + "</span>"
        }
        e.exports = s
    }), define("app/scenes/LightboxScene", ["require", "exports", "module", "famous-scene/Scene", "famous/Surface", "famous/Matrix", "famous/Engine", "famous/Utility", "famous-utils/Utils", "app/widgets/FrontTile", "app/widgets/BackTile", "app/widgets/BackContent", "app/widgets/Lightbox", "core/Interface", "app/data", "app/widgets/CloseButton", "app/widgets/InfoButton"], function(t, i, e) {
        function s() {
            o.apply(this), this.lightbox = new c({
                commonFrontProperties: {
                    backgroundColor: "white",
                    boxShadow: "0px 1px 1px 1px #333",
                    borderRadius: "5px",
                    lineHeight: "400px",
                    backgroundColor: "#ccc",
                    textAlign: "center"
                },
                commonBackProperties: {
                    backgroundColor: "#33ccff"
                },
                columnWidth: 300,
                rowHeight: 300
            }), this.initUI(), this.parentUI = new p, this.parentUI.setCurrentObject(this), n.pipe(this.parentUI), this.node.add(this.parentUI), this.node.add(this.lightbox), this.node.add(d), this.node.add(f), d.setOpacity(0), f.setOpacity(0), this.events(), this.setData(l)
        }
        var o = t("famous-scene/Scene"),
            n = (t("famous/Surface"), t("famous/Matrix"), t("famous/Engine")),
            r = (t("famous/Utility"), t("famous-utils/Utils")),
            a = t("app/widgets/FrontTile"),
            h = t("app/widgets/BackTile"),
            u = t("app/widgets/BackContent"),
            c = t("app/widgets/Lightbox"),
            p = t("core/Interface"),
            l = t("app/data"),
            d = t("app/widgets/CloseButton"),
            f = t("app/widgets/InfoButton");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.events = function() {
            this.parentUI.on("showUI", function() {
                this.showUI()
            }.bind(this)), this.parentUI.on("hideUI", function() {
                this.hideUI()
            }.bind(this)), this.lightbox.on("selectionView", function() {
                this.parentUI.hideAllUI()
            }.bind(this)), this.lightbox.on("gridView", function() {
                this.parentUI.showAllUI()
            }.bind(this))
        }, s.prototype.initUI = function() {
            this.nonDeboucnedReflow = this.lightbox.layout.reflow.bind(this.lightbox.layout), this.reflowGrid = r.debounce(this.lightbox.layout.reflow.bind(this.lightbox.layout), 150), this.labelProperties = {
                borderBottom: "1px solid white",
                color: "rgba( 255, 255, 255, 1 )",
                fontSize: "16px"
            }, this.autoUI = [{
                type: "label",
                uiOptions: {
                    content: "GRID",
                    properties: this.labelProperties
                }
            }, {
                key: "columnGutters",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.reflowGrid,
                uiOptions: {
                    range: [0, 200],
                    name: "Column Gutters",
                    defaultValue: this.lightbox.layout.options.columnGutters,
                    backOpacity: .8
                }
            }, {
                key: "rowGutters",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 200],
                    name: "Row Gutters",
                    defaultValue: this.lightbox.layout.options.rowGutters
                }
            }, {
                key: "topMargin",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 400],
                    name: "topMargin",
                    defaultValue: this.lightbox.layout.options.topMargin
                }
            }, {
                key: "bottomMargin",
                type: "slider",
                object: this.lightbox.layout.options,
                callback: this.nonDeboucnedReflow,
                uiOptions: {
                    range: [0, 400],
                    name: "bottomMargin",
                    defaultValue: this.lightbox.layout.options.bottomMargin
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "LIGHTBOX",
                    properties: this.labelProperties
                }
            }, {
                type: "slider",
                callback: this.lightbox.setDeactivateZDepth.bind(this.lightbox),
                uiOptions: {
                    range: [100, 5e3],
                    name: "Deactivate Depth",
                    defaultValue: this.lightbox.layout.options.bottomMargin
                }
            }, {
                key: "simplexAmplitude",
                type: "slider",
                object: this.lightbox.options,
                uiOptions: {
                    range: [0, 500],
                    name: "Duration Variance",
                    defaultValue: this.lightbox.options.simplexAmplitude
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "TITLE TRANSITION",
                    properties: this.labelProperties
                }
            }, {
                type: "slider",
                callback: function(t) {
                    for (var i = 0; i < this.lightbox.tiles.length; i++) this.lightbox.tiles[i].back._springTitleDamping = t
                }.bind(this),
                uiOptions: {
                    range: [.1, .9],
                    name: "Title Spring Damping",
                    defaultValue: .75
                }
            }, {
                type: "slider",
                callback: function(t) {
                    for (var i = 0; i < this.lightbox.tiles.length; i++) this.lightbox.tiles[i].back._springTitlePeriod = t
                }.bind(this),
                uiOptions: {
                    range: [300, 2e3],
                    name: "Title Spring Period",
                    defaultValue: 800
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "TAG TRANSITION",
                    properties: this.labelProperties
                }
            }, {
                type: "slider",
                callback: function(t) {
                    for (var i = 0; i < this.lightbox.tiles.length; i++) this.lightbox.tiles[i].back._springTagDamping = t
                }.bind(this),
                uiOptions: {
                    range: [.1, .9],
                    name: "Tag Spring Damping",
                    defaultValue: .75
                }
            }, {
                type: "slider",
                callback: function(t) {
                    for (var i = 0; i < this.lightbox.tiles.length; i++) this.lightbox.tiles[i].back._springTagPeriod = t
                }.bind(this),
                uiOptions: {
                    range: [300, 2e3],
                    name: "Tag Spring Period",
                    defaultValue: 800
                }
            }]
        }, s.prototype.showUI = function() {
            this.lightbox.layout.showDebug()
        }, s.prototype.hideUI = function() {
            this.lightbox.layout.hideDebug()
        }, s.prototype.setData = function(t) {
            this.data = t;
            for (var i = [], e = 0; e < this.data.length; e++) {
                var t = this.data[e],
                    s = new a({
                        imgSrc: t.thumbSrc,
                        title: t.englishTitle,
                        year: t.date
                    }),
                    o = new u({
                        title: {
                            english: t.englishTitle,
                            spanish: t.spanishTitle
                        },
                        tag: {
                            series: t.serie,
                            artist: t.artist,
                            date: t.date,
                            size: t.dimensions,
                            material: t.material
                        }
                    }),
                    n = new h({
                        imgSrc: t.src,
                        size: t.size,
                        maxImageSize: t.size,
                        content: o
                    });
                i.push({
                    front: s,
                    back: n
                })
            }
            this.lightbox.setContent(i)
        }, e.exports = s
    }), define("famous-sync/MouseSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1,
                stallTime: 50,
                propogate: !0
            }, this.setOptions(i ? i : this.options), this.input = new h, this.output = new h, this._mouseDown = !1, h.setInputHandler(this, this.input), h.setOutputHandler(this, this.output), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousedown", o.bind(this)), this.input.on("mousemove", n.bind(this)), this.input.on("mouseup", r.bind(this)), this.options.propogate ? this.input.on("mouseleave", a.bind(this)) : this.input.on("mouseleave", r.bind(this))
        }

        function o(t) {
            this._mouseDown = !0, t.preventDefault(), this._prevCoord = [t.clientX, t.clientY], this._prevTime = Date.now(), this._prevVel = void 0 !== this.options.direction ? 0 : [0, 0], this.output.emit("start")
        }

        function n(t) {
            if (this._prevCoord) {
                var i = this._prevCoord,
                    e = this._prevTime,
                    o = [t.clientX, t.clientY],
                    n = Date.now(),
                    r = o[0] - i[0],
                    a = o[1] - i[1];
                this.options.rails && (Math.abs(r) > Math.abs(a) ? a = 0 : r = 0);
                var h, u, c = Math.max(n - e, 8),
                    p = r / c,
                    l = a / c,
                    d = this.targetGet(),
                    f = this.options.scale;
                this.options.direction == s.DIRECTION_X ? (h = d + f * r, u = f * p) : this.options.direction == s.DIRECTION_Y ? (h = d + f * a, u = f * l) : (h = [d[0] + f * r, d[1] + f * a], u = [f * p, f * l]), this.output.emit("update", {
                    p: h,
                    v: u
                }), this._prevCoord = o, this._prevTime = n, this._prevVel = u
            }
        }

        function r() {
            if (this._mouseDown = !1, this._prevCoord) {
                var t = this._prevTime,
                    i = Date.now();
                i - t > this.options.stallTime && (this._prevVel = void 0 == this.options.direction ? [0, 0] : 0);
                var e = this.targetGet();
                this.output.emit("end", {
                    p: e,
                    v: this._prevVel
                }), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0
            }
        }

        function a() {
            if (this._mouseDown) {
                var t = function(t) {
                        n.call(this, t)
                    }.bind(this),
                    i = function(e) {
                        r(e), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
                    }.bind(this);
                document.addEventListener("mousemove", t), document.addEventListener("mouseup", i)
            }
        }
        var h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime), void 0 !== t.propogate && (this.options.propogate = t.propogate)
        }, e.exports = s
    }), define("famous-modifiers/Draggable", ["require", "exports", "module", "famous/Matrix", "famous-sync/MouseSync", "famous-sync/TouchSync", "famous-sync/GenericSync", "famous/Transitionable", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._positionState = new d([0, 0]), this._cursorPos = [0, 0], this._active = !0, this.sync = new l(function() {
                return this._cursorPos
            }.bind(this), {
                scale: this.options.scale,
                syncClasses: [c, p]
            }), this.eventOutput = new f, f.setInputHandler(this, this.sync), f.setOutputHandler(this, this.eventOutput), a.call(this)
        }

        function o() {
            var t = this.getPosition();
            this._cursorPos = t.slice(), this.eventOutput.emit("dragstart", {
                p: t
            })
        }

        function n(t) {
            this._active && (this.setPosition(h.call(this, t.p), this.options.transition), this._cursorPos = t.p), this.eventOutput.emit("dragmove", {
                p: this.getPosition()
            })
        }

        function r() {
            this.eventOutput.emit("dragend", {
                p: this.getPosition()
            })
        }

        function a() {
            this.sync.on("start", o.bind(this)), this.sync.on("update", n.bind(this)), this.sync.on("end", r.bind(this))
        }

        function h(t) {
            var i = this.options,
                e = i.projection,
                s = i.maxX,
                o = i.maxY,
                n = i.snapX,
                r = i.snapY,
                a = e & m.x ? t[0] : 0,
                h = e & m.y ? t[1] : 0;
            return n > 0 && (a -= a % n), r > 0 && (h -= h % r), a = Math.max(Math.min(a, s), -s), h = Math.max(Math.min(h, o), -o), [a, h]
        }
        var u = t("famous/Matrix"),
            c = t("famous-sync/MouseSync"),
            p = t("famous-sync/TouchSync"),
            l = t("famous-sync/GenericSync"),
            d = t("famous/Transitionable"),
            f = t("famous/EventHandler"),
            m = {
                x: 1,
                y: 2
            };
        s.DEFAULT_OPTIONS = {
            projection: m.x | m.y,
            scale: 1,
            maxX: 1 / 0,
            maxY: 1 / 0,
            snapX: 0,
            snapY: 0,
            transition: {
                duration: 0
            }
        }, s.prototype.setOptions = function(t) {
            var i = this.options;
            if (void 0 !== t.projection) {
                var e = t.projection;
                this.options.projection = 0, ["x", "y"].forEach(function(t) {
                    -1 != e.indexOf(t) && (i.projection |= m[t])
                })
            }
            void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.maxX && (i.maxX = t.maxX), void 0 !== t.maxY && (i.maxY = t.maxY), void 0 !== t.snapX && (i.snapX = t.snapX), void 0 !== t.snapY && (i.snapY = t.snapY), void 0 !== t.transition && (i.transition = t.transition)
        }, s.prototype.getPosition = function() {
            return this._positionState.get()
        }, s.prototype.setPosition = function(t, i, e) {
            this._positionState.isActive() && this._positionState.halt(), this._positionState.set(t, i, e)
        }, s.prototype.activate = function() {
            this._active = !0
        }, s.prototype.deactivate = function() {
            this._active = !1
        }, s.prototype.toggle = function() {
            this._active = !this._active
        }, s.prototype.render = function(t) {
            var i = this.getPosition();
            return {
                transform: u.translate(i[0], i[1]),
                target: t
            }
        }, e.exports = s
    }), define("app/widgets/MakeDraggable", ["require", "exports", "module", "famous-modifiers/Draggable", "famous/RenderNode", "famous/Modifier", "famous/View", "famous/Matrix", "famous/Engine"], function(t, i, e) {
        function s() {
            u.apply(this, arguments), this.mainNode = new h, this.draggable = new a({
                snapY: 100
            }), this.node.link(this.draggable).link(this.mainNode)
        }

        function o(t) {
            t.object = void 0
        }

        function n(t, i) {
            if (t.object)
                for (var e = 0; e < t.object.length; e++)
                    if (t.object[e].object == i) return t.object[e]
        }

        function r(t, i) {
            return [t[0] + i[0], t[1] + i[1]]
        }
        var a = t("famous-modifiers/Draggable"),
            h = t("famous/RenderNode"),
            u = (t("famous/Modifier"), t("famous/View")),
            c = t("famous/Matrix"),
            p = t("famous/Engine");
        s.prototype = Object.create(u.prototype), s.prototype.constructor = s, s.prototype.activate = function(t, i, e) {
            this._active = !0;
            var s = [0, 0, 0];
            e && (s = c.getTranslate(e.getFinalTransform())), this.draggable.setPos(s), this._offsetPos = s, this._currSurface = i, this._currMod = e, this._currNode = n.call(this, t.node, i), o(this._currNode), this.mainNode.link(i), p.pipe(this.draggable)
        }, s.prototype.deactivate = function() {
            this._active && (this._makePermanant(), o(this.mainNode), this._currSurface.unpipe(this.draggable), this._currNode.object = this._currSurface, this._resetState(), this._active = !1, p.unpipe(this.draggable))
        }, s.prototype._makePermanant = function() {
            if (this._currMod) {
                var t = this.draggable.getPos(),
                    i = this._currMod.getFinalTransform(),
                    e = (r(t, c.getTranslate(i)), c.multiply(i, c.translate(t[0] - this._offsetPos[0], t[1] - this._offsetPos[1])));
                this._currMod.setTransform(e)
            }
        }, s.prototype._resetState = function() {
            this._currNode = void 0, this._currSurface = void 0, this._currMod = void 0
        }, e.exports = s
    }), define("app/scenes/TitleScene", ["require", "exports", "module", "famous/ImageSurface", "famous/Surface", "famous/Matrix", "famous/Modifier", "famous/Engine", "famous/Utility", "famous-animation/Easing", "famous-views/Scrollview", "famous-scene/Scene", "famous-utils/Utils", "famous-modifiers/Draggable", "app/widgets/MakeDraggable", "core/Interface", "famous-animation/RegisterEasing", "famous-utils/Time", "famous-color/ColorPalette", "famous-color/Color", "famous-ui/Text/Label", "app/widgets/TorqueRenderable", "app/SceneController", "app/SceneTransitions"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.palette = new u([(new c).setFromHex("#e1dbcd"), (new c).setFromHex("#141501")]), this.button = new o({
                content: '<h3 class="title-button">ENTER EXHIBITION</h3>',
                classes: ["backfaceVisible"],
                properties: {
                    textAlign: "left",
                    color: this.palette.getCSS(0),
                    fontSize: "24px",
                    cursor: "pointer",
                    borderRight: "1px solid " + this.palette.getCSS(0),
                    borderLeft: "1px solid " + this.palette.getCSS(0),
                    padding: "5px"
                },
                size: [200, 50]
            }), this.torque = new l({
                views: [this.button],
                forceStrength: 0,
                forceSpringDamping: .55,
                forceSpringPeriod: 1100,
                torqueStrength: .12,
                torquePeriod: 5
            }), this.button.on("click", function() {
                h.setTimeout(function() {
                    d.setScene("lightbox")
                }, 150)
            }), this.content = {
                title: {
                    render: new o({
                        content: '<h3 class="title-first-name">FRANCISCO</h3><br><h3 class="title-second-name">GOYA<h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "48px"
                        },
                        size: [316, 200]
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.125, .375],
                        transform: n.translate(0, 50)
                    })
                },
                birthDate: {
                    render: new o({
                        content: '<p>BORN</p></br><h3 class="title-birth-date">1746</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [100, 50]
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.125, .125]
                    })
                },
                deathDate: {
                    render: new o({
                        content: '<p>DIED</p></br><h3 class="title-death-date">1828</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [100, 50]
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.825, .125]
                    })
                },
                caprichoDate: {
                    render: new o({
                        content: '<p>LOS CAPRICHOS</p></br><h3 class="title-creation-date">1799</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [150, 50]
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.577439024390241, .125]
                    })
                },
                caprichoText: {
                    render: new o({
                        content: '<h3 class="title-capricho">Los Caprichos</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "24px"
                        },
                        size: [200, 50]
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.577439024390241, .125],
                        transform: n.translate(0, -100, 0)
                    })
                },
                descriptionText: {
                    render: new p({
                        content: "Los Caprichos are a set of 80 aquatint prints created by the Spanish artist Francisco Goya in 1797 and 1798, and published as an album in 1799.<br><br>The prints were an artistic experiment: a medium for Goya's condemnation of the universal follies and foolishness in the Spanish society in which he lived.<br><br>The criticisms are far-ranging and acidic; he speaks against the predominance of superstition, the ignorance and inabilities of the various members of the ruling class, pedagogical short-comings, marital mistakes and the decline of rationality.",
                        size: [.375 * window.innerWidth, 200],
                        properties: {
                            fontSize: "16px",
                            lineHeight: "24px"
                        }
                    }),
                    mod: new r({
                        opacity: 0,
                        origin: [.72, .6]
                    })
                },
                button: {
                    render: this.torque,
                    mod: new r({
                        opacity: 0
                    })
                }
            }, this.setTorquePos(), this.node.add(this.torque), this.content.descriptionText.render.init(), this.addContent(this.content), h.setTimeout(this.initAnimations.bind(this), 250)
        }
        var o = (t("famous/ImageSurface"), t("famous/Surface")),
            n = t("famous/Matrix"),
            r = t("famous/Modifier"),
            a = (t("famous/Engine"), t("famous/Utility"), t("famous-animation/Easing"), t("famous-views/Scrollview"), t("famous-scene/Scene")),
            h = (t("famous-utils/Utils"), t("famous-modifiers/Draggable"), t("app/widgets/MakeDraggable"), t("core/Interface"), t("famous-animation/RegisterEasing"), t("famous-utils/Time")),
            u = t("famous-color/ColorPalette"),
            c = t("famous-color/Color"),
            p = t("famous-ui/Text/Label"),
            l = t("app/widgets/TorqueRenderable"),
            d = t("app/SceneController"),
            f = t("app/SceneTransitions");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.initAnimations = function() {
            this.content.title.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            }), this.content.title.mod.setTransform(n.identity, {
                curve: "outBackNorm",
                duration: 800
            }, this._birth.bind(this))
        }, s.prototype._birth = function() {
            this.content.birthDate.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            }, this._death.bind(this))
        }, s.prototype._death = function() {
            this.content.deathDate.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            }), h.setTimeout(this._caprichoDate.bind(this), 700)
        }, s.prototype._caprichoDate = function() {
            this.content.caprichoDate.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            }), this.content.caprichoDate.mod.setTransform(n.identity, {
                curve: "inOutBackNorm",
                duration: 800
            }, this._descriptionText.bind(this))
        }, s.prototype._capricho = function() {
            this.content.caprichoText.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            }), this.content.caprichoText.mod.setTransform(n.translate(0, 50, 0), {
                curve: "inOutBackNorm",
                duration: 800
            })
        }, s.prototype._descriptionText = function() {
            this.content.descriptionText.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 700
            }), this.content.descriptionText.mod.setTransform(n.translate(40, 0), {
                curve: "inOutBackNorm",
                duration: 800
            }, this._button.bind(this))
        }, s.prototype._button = function() {
            this.content.button.mod.setOpacity(1, {
                curve: "inSineNorm",
                duration: 400
            })
        }, s.prototype.setTorquePos = function() {
            var t = this.button.getSize();
            this.torque.setTransform(n.translate(.5 * window.innerWidth - .5 * t[0], .65 * window.innerHeight - .5 * t[1]), {
                curve: "inOutBackNorm",
                duration: 500
            })
        }, s.prototype.addContent = function(t) {
            for (var i in t) {
                var e = t[i];
                e.mod ? this.node.add(e.mod).link(e.render) : this.node.add(e.render)
            }
        }, s.prototype.initUI = function() {
            this.labelProperties = {
                borderBottom: "1px solid white",
                color: "rgba( 255, 255, 255, 1 )",
                fontSize: "16px"
            }, this.autoUI = [{
                type: "label",
                uiOptions: {
                    content: "GRID",
                    properties: this.labelProperties
                }
            }], this.ui = new AutoUI({
                defaultSelected: this
            }), this.node.add(this.ui)
        }, s.prototype.deactivate = function(t) {
            f.sceneFadeLeft(t)
        }, e.exports = s
    }), define("app/scenes/TitleScene2", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/Engine", "famous/Utility", "famous/ImageSurface", "famous/Surface", "famous-animation/RegisterEasing", "famous-views/Scrollview", "famous-scene/Scene", "famous-utils/Utils", "famous-utils/Time", "famous-color/ColorPalette", "famous-color/Color", "famous-ui/Text/Label", "famous-ui/AutoUI", "app/widgets/TorqueRenderable", "app/SceneController", "app/SceneTransitions"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.palette, this.button, this.torque, this.content, this.initContent(), this.initPalette(), this.initButton(), this.events()
        } {
            var o = t("famous/Matrix"),
                n = t("famous/Modifier"),
                r = (t("famous/Engine"), t("famous/Utility"), t("famous/ImageSurface"), t("famous/Surface")),
                a = (t("famous-animation/RegisterEasing"), t("famous-views/Scrollview"), t("famous-scene/Scene")),
                h = (t("famous-utils/Utils"), t("famous-utils/Time")),
                u = (t("famous-color/ColorPalette"), t("famous-color/Color")),
                c = t("famous-ui/Text/Label"),
                p = (t("famous-ui/AutoUI"), t("app/widgets/TorqueRenderable")),
                l = t("app/SceneController");
            t("app/SceneTransitions")
        }
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.PALETTE = ["#e1dbcd", "#141501"], s.prototype.events = function() {
            this.button.on("click", function() {
                h.setTimeout(function() {
                    l.setScene("lightbox")
                }, 150)
            })
        }, s.prototype.createContent = function() {
            this.content = {
                title: {
                    render: new r({
                        content: '<h3 class="title-first-name">FRANCISCO</h3><br><h3 class="title-second-name">GOYA<h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "48px"
                        },
                        size: [316, 200]
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.125, .375],
                        transform: o.translate(0, 50)
                    })
                },
                birthDate: {
                    render: new r({
                        content: '<p>BORN</p></br><h3 class="title-birth-date">1746</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [100, 50]
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.125, .125]
                    })
                },
                deathDate: {
                    render: new r({
                        content: '<p>DIED</p></br><h3 class="title-death-date">1828</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [100, 50]
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.825, .125]
                    })
                },
                caprichoDate: {
                    render: new r({
                        content: '<p>LOS CAPRICHOS</p></br><h3 class="title-creation-date">1799</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "16px"
                        },
                        size: [150, 50]
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.577439024390241, .125]
                    })
                },
                caprichoText: {
                    render: new r({
                        content: '<h3 class="title-capricho">Los Caprichos</h3>',
                        properties: {
                            textAlign: "left",
                            color: this.palette.getCSS(0),
                            fontSize: "24px"
                        },
                        size: [200, 50]
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.577439024390241, .125],
                        transform: o.translate(0, -100, 0)
                    })
                },
                descriptionText: {
                    render: new c({
                        content: "Los Caprichos are a set of 80 aquatint prints created by the Spanish artist Francisco Goya in 1797 and 1798, and published as an album in 1799.<br><br>The prints were an artistic experiment: a medium for Goya's condemnation of the universal follies and foolishness in the Spanish society in which he lived.<br><br>The criticisms are far-ranging and acidic; he speaks against the predominance of superstition, the ignorance and inabilities of the various members of the ruling class, pedagogical short-comings, marital mistakes and the decline of rationality.",
                        size: [.375 * window.innerWidth, 200],
                        properties: {
                            fontSize: "16px",
                            lineHeight: "24px"
                        }
                    }),
                    mod: new n({
                        opacity: 0,
                        origin: [.72, .6]
                    })
                },
                button: {
                    render: this.torque,
                    mod: new n({
                        opacity: 0
                    })
                }
            }
        }, s.prototype.createAnimations = function() {
            this._openingAnimation = [{
                title: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 400,
                    transform: o.identity,
                    curve: "outBackNorm",
                    duration: 800
                }
            }, {
                birthDate: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 400
                }
            }, {
                deathDate: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 400
                }
            }, 700, {
                caprichoDate: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 400,
                    transform: o.identity,
                    curve: "inOutBackNorm",
                    duration: 800
                }
            }, {
                descriptionText: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 700,
                    transform: o.translate(40, 0),
                    curve: "inOutBackNorm",
                    duration: 800
                }
            }, {
                button: {
                    opacity: 1,
                    opacityCurve: "inSineNorm",
                    opacityDuration: 400
                }
            }]
        }, s.prototype.initContent = function(t) {
            this.createContent();
            for (var i in this.content) {
                var e = t[i];
                e.mod ? this.node.add(e.mod).link(e.render) : this.node.add(e.render)
            }
            this.setTorquePos(), this.node.add(this.torque), this.content.descriptionText.render.init(), this.addContent(this.content)
        }, s.prototype.initPalette = function() {
            this.palette = [];
            for (var t = 0; t < s.PALETTE.length; t++) this.palette.push((new u).setFromHex(s.PALETTE[t]))
        }, s.prototype.initButton = function() {
            this.button = new r({
                content: '<h3 class="title-button">ENTER EXHIBITION</h3>',
                classes: ["backfaceVisible"],
                properties: {
                    "text-align": "left",
                    color: this.palette.getCSS(0),
                    "font-size": "24px",
                    cursor: "pointer",
                    "border-right": "1px solid " + this.palette.getCSS(0),
                    "border-left": "1px solid " + this.palette.getCSS(0),
                    padding: "5px"
                },
                size: [200, 50]
            }), this.torque = new p({
                views: [this.button],
                forceStrength: 0,
                forceSpringDamping: .55,
                forceSpringPeriod: 1100,
                torqueStrength: .12,
                torquePeriod: 5
            })
        }, s.prototype.setTorquePos = function() {
            var t = this.button.getSize();
            this.torque.setTransform(o.translate(.5 * window.innerWidth - .5 * t[0], .65 * window.innerHeight - .5 * t[1]), {
                curve: "inOutBackNorm",
                duration: 500
            })
        }, e.exports = s
    }), define("app/widgets/EmptyClass", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Surface", "famous/Modifier", "famous-animation/Easing"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput)
        } {
            var o = t("famous/View");
            t("famous/Matrix"), t("famous/Surface"), t("famous/Modifier"), t("famous-animation/Easing")
        }
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, e.exports = s
    }), define("famous/SceneCompiler", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
        function s(t) {
            var i = {
                    varCounter: 0
                },
                e = [],
                s = h.call(i, t, e);
            return e.push("return " + s + ";"), new Function(["FT", "RenderNode", "RN_link", "RN_include", "id", "transforms"], e.join("\n"))
        }

        function o(t, i) {
            return "var " + t + " = " + i + ";"
        }

        function n(t, i) {
            return "id." + t + " = " + i + ";"
        }

        function r(t) {
            return "transforms.push(" + t + ");"
        }

        function a() {
            return "_" + this.varCounter++
        }

        function h(t, i) {
            var e;
            if (t instanceof Array) e = u.call(this, t, i);
            else if (e = a.call(this), t.target) {
                var s = h.call(this, t.target, i),
                    p = c.call(this, t, i);
                i.push(o(e, "new RenderNode(" + p + ")")), i.push("RN_link.call(" + e + ", " + s + ");"), t.id && i.push(n(t.id, p)), i.push(r(p))
            } else t.id && (i.push(o(e, "new RenderNode()")), i.push(n(t.id, e)));
            return e
        }

        function u(t, i) {
            var e = a.call(this);
            i.push(o(e, "new RenderNode()"));
            for (var s = 0; s < t.length; s++) {
                var n = h.call(this, t[s], i);
                n && i.push("RN_include.call(" + e + ", " + n + ");")
            }
            return e
        }

        function c(t, i) {
            var e = t.transform,
                s = t.opacity,
                n = t.origin,
                r = t.size,
                h = (t.target, l.identity);
            if (e instanceof Array)
                if (16 == e.length && "number" == typeof e[0]) h = e;
                else
                    for (var u = 0; u < e.length; u++) h = l.multiply(h, p(e[u]));
            else e instanceof Object && (h = p(e));
            var c = a.call(this),
                d = "[" + h.join(",") + "]",
                f = n ? "[" + n.join(",") + "]" : void 0,
                m = r ? "[" + r.join(",") + "]" : void 0;
            return i.push(o(c, "new FT(" + d + "," + s + "," + f + "," + m + ")")), c
        }

        function p(t) {
            for (var i in d)
                if (i in t) {
                    var e = t[i];
                    return e instanceof Array || (e = [e]), d[i].apply(this, e)
                }
        }
        var l = t("./Matrix"),
            d = {
                translate: l.translate,
                rotate: l.rotate,
                rotateX: l.rotateX,
                rotateY: l.rotateY,
                rotateZ: l.rotateZ,
                rotateAxis: l.rotateAxis,
                scale: l.scale,
                skew: l.skew,
                matrix3d: function() {
                    return arguments
                }
            };
        e.exports = {
            compile: s
        }
    }), define("famous/Scene", ["require", "exports", "module", "./RenderNode", "./Modifier", "./SceneCompiler"], function(t, i, e) {
        function s(t) {
            this.id = {}, this.transforms = [], this.node = new o, this._def = void 0, t && this.load(t)
        }
        var o = t("./RenderNode"),
            n = t("./Modifier"),
            r = t("./SceneCompiler"),
            a = o.prototype.link,
            h = o.prototype.add;
        s.prototype.create = function() {
            return new s(this._def)
        }, s.prototype.load = function(t) {
            t instanceof s ? t = t._def : t instanceof Function || (t = r.compile(t)), this.node = t(n, o, a, h, this.id, this.transforms), this._def = t
        }, s.prototype.getTransforms = function() {
            return this.transforms
        }, s.prototype.add = function() {
            return this.node.add.apply(this.node, arguments)
        }, s.prototype.mod = function() {
            return this.node.mod.apply(this.node, arguments)
        }, s.prototype.link = function() {
            return this.node.link.apply(this.node, arguments)
        }, s.prototype.render = function() {
            return this.node.render.apply(this.node, arguments)
        }, e.exports = s
    }), define("famous/Timer", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
        function s(t) {
            return u.on(c, t), t
        }

        function o(t, i) {
            var e = p(),
                o = function() {
                    var s = p();
                    s - e >= i && (t.apply(this, arguments), u.unbind(c, o))
                };
            return s(o)
        }

        function n(t, i) {
            var e = p(),
                o = function() {
                    var s = p();
                    s - e >= i && (t.apply(this, arguments), e = p())
                };
            return s(o)
        }

        function r(t, i) {
            if (void 0 !== i) {
                var e = function() {
                    i--, 0 >= i && (t.apply(this, arguments), h(e))
                };
                return s(e)
            }
        }

        function a(t, i) {
            i = i || 1;
            var e = i,
                o = function() {
                    i--, 0 >= i && (t.apply(this, arguments), i = e)
                };
            return s(o)
        }

        function h(t) {
            u.unbind(c, t)
        }
        var u = t("famous/Engine"),
            c = "prerender",
            p = window.performance ? function() {
                return performance.now()
            } : function() {
                return Date.now()
            };
        e.exports = {
            setTimeout: o,
            setInterval: n,
            after: r,
            every: a,
            clear: h
        }
    }), define("famous/VideoSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t) {
            this.autoplay = t.autoplay || !1, this.videoUrl = void 0, o.apply(this, arguments)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "video", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
            this.videoUrl = t, this.contentDirty = !0
        }, s.prototype.deploy = function(t) {
            t.src = this.videoUrl, t.autoplay = this.autoplay
        }, s.prototype.recall = function(t) {
            t.src = ""
        }, e.exports = s
    }), define("famous/WebGLSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t, i) {
            this.options = i, this._canvas = document.createElement("canvas"), o.call(this, t), this.setContent(this._canvas), this.setSize(t)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.getContext = function() {
            return this._canvas.getContext("experimental-webgl", this.options)
        }, s.prototype.setSize = function(t) {
            o.prototype.setSize.apply(this, arguments), this._canvas.style.width = t[0] + "px", this._canvas.style.height = t[1] + "px";
            var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this._canvas.width = t[0] * i, this._canvas.height = t[1] * i
        }, e.exports = s
    }), define("famous-animation/Animation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "./Easing"], function(t, i, e) {
        function s(t) {
            return this.name = t.name || "base", this.dead = !1, this.engine = t.engine || void 0, this.duration = t.duration || 500, this.delay = t.delay || 0, this.nextAnimations = [], void 0 !== t.next && (t.next instanceof Array ? this.nextAnimations.concat(t.next) : this.nextAnimations.push(t.next)), this.callback = t.callback || void 0, this.startTime = 0, this.endTime = 0, this.currentTime = 0, this.normalizedTime = 0, this.timePassed = 0, this.halted = !1, this.playing = !1, this.activated = !1, this.activateCallback = t.activateCallback || void 0, this.deactivateCallback = t.deactivateCallback || void 0, this.loop = t.loop || !1, this.reverse = t.reverse || !1, this.reverseUponLoop = t.reverseUponLoop || !1, this
        } {
            var o = (t("famous/Surface"), t("famous/Matrix"), t("famous-utils/Utils"));
            t("./Easing")
        }
        s.prototype.setDead = function(t) {
            return this.dead = t, this
        }, s.prototype.isDead = function() {
            return this.dead
        }, s.prototype.setup = function() {}, s.prototype.update = function() {}, s.prototype.render = function() {}, s.prototype.isPlaying = function() {
            return this.playing
        }, s.prototype.setDuration = function(t) {
            return this.duration = t, this
        }, s.prototype.setDelay = function(t) {
            return this.delay = t, this
        }, s.prototype.setCallback = function(t) {
            return this.callback = t || void 0, this
        }, s.prototype.setReverse = function(t) {
            return this.reverse = t, this
        }, s.prototype.toggleReverse = function() {
            return this.reverse = !this.reverse, this
        }, s.prototype.setLoop = function(t) {
            return this.loop = t, this
        }, s.prototype.setReverseUponLoop = function(t) {
            return this.reverseUponLoop = t, this
        }, s.prototype.isHalted = function() {
            return this.halted
        }, s.prototype.halt = function() {
            this.halted = !0, this.timePassed = this.engine.getTime() - this.startTime
        }, s.prototype.continueAnimation = function() {
            this.halted = !1, this.startTime = this.engine.getTime() - this.timePassed, this.timePassed = 0
        }, s.prototype.activate = function() {}, s.prototype.deactivate = function() {}, s.prototype.start = function() {
            this.engine.addAnimation(this), this.setDead(!1), this.halted = !1, this.playing = !0, this.startTime = this.engine.getTime() + this.delay - this.timePassed, this.endTime = this.startTime + this.duration, this.normalizedTime = 0
        }, s.prototype.tick = function() {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = o.clamp(this.normalizedTime, 0, 1), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update(), void this.end();
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update())
            }
        }, s.prototype.getTime = function() {
            return this.normalizedTime
        }, s.prototype.end = function() {
            if (this.activated = !1, this.playing = !1, this.deactivate(), void 0 !== this.deactivateCallback && this.deactivateCallback(), this.engine.removeAnimation(this), this.reverseUponLoop && this.toggleReverse(), this.loop) this.start();
            else
                for (var t = 0; t < this.nextAnimations.length; t++) this.nextAnimations[t].start();
            void 0 !== this.callback && this.callback()
        }, s.prototype.setNext = function(t) {
            t instanceof Array ? this.nextAnimations = this.nextAnimations.concat(this.nextAnimations, t) : this.nextAnimations.push(t)
        }, s.prototype.setName = function(t) {
            this.name = t
        }, s.prototype.getName = function() {
            return this.name
        }, s.prototype.setActivateCallback = function(t) {
            this.activateCallback = t
        }, s.prototype.setDeactivateCallback = function(t) {
            this.deactivateCallback = t
        }, e.exports = s
    }), define("famous-animation/Timer", ["require", "exports", "module"], function(t, i, e) {
        function s() {
            window.performance ? window.performance.now ? this.getTime = function() {
                return window.performance.now()
            } : window.performance.webkitNow && (this.getTime = function() {
                return window.performance.webkitNow()
            }) : this.getTime = function() {
                return Date.now()
            }
        }
        e.exports = s
    }), define("famous-animation/AnimationEngine", ["require", "exports", "module", "famous/Engine", "./Timer", "./Animation"], function(t, i, e) {
        function s() {
            this.animations = [], this.timer = new n, o.on("prerender", this.update.bind(this))
        } {
            var o = t("famous/Engine"),
                n = t("./Timer");
            t("./Animation")
        }
        s.prototype.update = function() {
            for (var t = 0; t < this.animations.length; t++) this.animations[t].tick()
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.animations.length; i++) this.animations[i].normalizedTime > 0 && t.push(this.animations[i].render()), this.animations[i].isDead() && this.animations.splice(this.animations.indexOf(this.animations[i]), 1);
            return t
        }, s.prototype.emit = function(t) {
            "prerender" == t && (this.update(), this.render())
        }, s.prototype.addAnimation = function(t) {
            -1 == this.animations.indexOf(t) && this.animations.push(t)
        }, s.prototype.removeAnimation = function(t) {
            t.setDead(!0)
        }, s.prototype.getTime = function() {
            return this.timer.getTime()
        }, e.exports = s
    }), define("famous-animation/CubicBezier", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            var i = [
                [1, 0, 0, 0],
                [0, 0, 1, 0],
                [-3, 3, -2, -1],
                [2, -2, 1, 1]
            ];
            t = t || [0, 1, 0, 0], this.coef = [0, 0, 0, 0];
            for (var e = 0; 4 > e; e++)
                for (var s = 0; 4 > s; s++) this.coef[e] += i[e][s] * t[s]
        }
        s.prototype.create = function() {
            var t = this;
            return function(i) {
                i = i || 0;
                var e = t.coef;
                return e[0] + e[1] * i + e[2] * i * i + e[3] * i * i * i
            }
        }, e.exports = s
    }), define("famous-animation/GenericAnimation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion", "./Animation", "./AnimationEngine", "./Easing", "famous-utils/Utils", "famous-color/Color"], function(t, i, e) {
        function s(t) {
            a.call(this, t), this.surface = t.surface, this.renderSurface = t.renderSurface || !1, this.easing = t.easing || h.inOutCubicNorm, this.animateColor = !1, this.startColor = t.startColor || new c(255, 255, 255, 1), this.endColor = t.endColor || new c(255, 255, 255, 1), this.startColorHSL = new n, this.endColorHSL = new n, this.deltaColorHSL = new n, this.currentColorHSL = new n, this.animateOpacity = !1, this.startOpacity = t.startOpacity || 0, this.endOpacity = t.endOpacity || 0, this.deltaOpacity = 0, this.animatePosition = !1, this.startPosition = t.startPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.endPosition = t.endPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.currentPosition = new n(0, 0, 0), this.deltaPosition = new n(0, 0, 0), this.animateOrientation = !1, this.startOrientation = t.startOrientation || new r, this.endOrientation = t.endOrientation || new r, this.currentOrientation = t.currentOrientation || new r, this.animateRadius = !1, this.startRadius = t.startRadius || 0, this.endRadius = t.endRadius || 0, this.deltaRadius = 0, this.currentRadius = 0
        }
        var o = (t("famous/Surface"), t("famous/Matrix")),
            n = t("famous-math/Vector"),
            r = t("famous-math/Quaternion"),
            a = t("./Animation"),
            h = (t("./AnimationEngine"), t("./Easing")),
            u = t("famous-utils/Utils"),
            c = t("famous-color/Color");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.prototype.activate = function() {
            var t = this.startColor.getHSL(),
                i = this.endColor.getHSL();
            this.startColorHSL.setXYZ(t[0], t[1], t[2]), this.endColorHSL.setXYZ(i[0], i[1], i[2]), this.endColorHSL.sub(this.startColorHSL, this.deltaColorHSL), this.currentColorHSL.set(this.startColorHSL), this.animateColor = this.startColor.r == this.endColor.r && this.startColor.g == this.endColor.g && this.startColor.b == this.endColor.b && this.startColor.a == this.endColor.a ? !1 : !0, this.deltaOpacity = this.endOpacity - this.startOpacity, this.animateOpacity = Math.abs(this.deltaOpacity) > 0 ? !0 : !1, this.endPosition.sub(this.startPosition, this.deltaPosition), this.currentPosition.set(this.startPosition), this.animatePosition = this.deltaPosition.isZero() ? !1 : !0, this.animateOrientation = this.startOrientation.isEqual(this.endOrientation) ? !1 : !0, this.deltaRadius = this.endRadius - this.startRadius, this.currentRadius = this.startRadius, this.animateRadius = 0 === this.deltaRadius ? !1 : !0
        }, s.prototype.tick = function() {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = u.clamp(this.normalizedTime, 0, 1), this._update(), this.update(), void this.end();
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this._update(), this.update())
            }
        }, s.prototype._update = function() {
            var t = this.easing(this.normalizedTime);
            this.animateColor && (this.deltaColorHSL.mult(t, this.currentColorHSL), this.currentColorHSL.add(this.startColorHSL, this.currentColorHSL), this.surface.setProperties(u.backgroundColorHSL(this.currentColorHSL.x, this.currentColorHSL.y, this.currentColorHSL.z, 1))), this.animateOpacity && (this.surface.opacity = this.startOpacity + this.deltaOpacity * t), (this.animatePosition || this.animateOrientation) && (this.deltaPosition.mult(t, this.currentPosition), this.currentPosition.add(this.startPosition, this.currentPosition), this.startOrientation.slerp(this.endOrientation, t, this.currentOrientation), this.surface.mtx = o.move(this.currentOrientation.getMatrix(), this.currentPosition.toArray())), this.animateRadius && (this.currentRadius = this.startRadius + this.deltaRadius * t, this.surface.setProperties(u.borderRadius(this.currentRadius)))
        }, s.prototype.render = function() {
            return this.renderSurface && !this.dead && this.normalizedTime > 0 ? {
                transform: this.surface.mtx,
                opacity: this.surface.opacity,
                target: this.surface.render()
            } : void 0
        }, s.prototype.setStartColor = function(t) {
            this.startColor = t
        }, s.prototype.setEndColor = function(t) {
            this.endColor = t
        }, s.prototype.getStartColor = function() {
            return this.startColor
        }, s.prototype.getEndColor = function() {
            return this.endColor
        }, s.prototype.setStartPosition = function(t) {
            this.startPosition = t
        }, s.prototype.setStartPositionX = function(t) {
            this.startPosition.x = t
        }, s.prototype.setStartPositionY = function(t) {
            this.startPosition.y = t
        }, s.prototype.setStartPositionZ = function(t) {
            this.startPosition.z = t
        }, s.prototype.setEndPosition = function(t) {
            this.endPosition = t
        }, s.prototype.setEndPositionX = function(t) {
            this.endPosition.setX(t)
        }, s.prototype.setEndPositionY = function(t) {
            this.endPosition.setY(t)
        }, s.prototype.setEndPositionZ = function(t) {
            this.endPosition.setZ(t)
        }, s.prototype.getEndPosition = function() {
            return this.endPosition
        }, s.prototype.getStartPosition = function() {
            return this.startPosition
        }, s.prototype.getCurrentPosition = function() {
            return this.currentPosition
        }, s.prototype.setStartOpacity = function(t) {
            this.startOpacity = t
        }, s.prototype.setEndOpacity = function(t) {
            this.endOpacity = t
        }, s.prototype.getStartOpacity = function() {
            return this.startOpacity
        }, s.prototype.getEndOpacity = function() {
            return this.endOpacity
        }, s.prototype.setStartRadius = function(t) {
            this.startRadius = t
        }, s.prototype.setEndRadius = function(t) {
            this.endRadius = t
        }, s.prototype.getCurrentRadius = function() {
            return this.currentRadius
        }, s.prototype.getStartRadius = function() {
            return this.startRadius
        }, s.prototype.getEndRadius = function() {
            return this.endRadius
        }, s.prototype.setStartOrientation = function(t) {
            this.startOrientation = t
        }, s.prototype.setEndOrientation = function(t) {
            this.endOrientation = t
        }, s.prototype.getEndOrientation = function() {
            return this.endOrientation
        }, s.prototype.getStartOrientation = function() {
            return this.startOrientation
        }, s.prototype.setEasing = function(t) {
            this.easing = t
        }, s.prototype.setSurface = function(t) {
            this.surface = t
        }, s.prototype.setEndValuesToStartValues = function() {
            this.startColor = this.endColor.clone(), this.startOpacity = this.endOpacity, this.startPosition.set(this.endPosition), this.startOrientation.set(this.endOrientation), this.startRadius = this.endRadius
        }, e.exports = s
    }), define("famous-animation/Idle", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            this.idleFn = t, this.timeout = i, this.enabled = i > 0, this.reset()
        }
        s.prototype.timeoutIn = function(t) {
            this.lastTouchTime = (new Date).getTime() - this.timeout + t
        }, s.prototype.enable = function() {
            this.enabled = !0
        }, s.prototype.disable = function() {
            this.enabled = !1
        }, s.prototype.setIdleFunction = function(t) {
            this.idleFn = t
        }, s.prototype.update = function() {
            if (!this.idling && this.enabled && this.idleFn) {
                var t = (new Date).getTime();
                t - this.lastTouchTime > this.timeout && (this.idling = !0, this.idleFn.call(this))
            }
        }, s.prototype.isIdling = function() {
            return this.idling
        }, s.prototype.reset = function() {
            this.lastTouchTime = (new Date).getTime(), this.idling = !1
        }, s.prototype.emit = function() {
            this.reset()
        }, e.exports = s
    }), define("famous-animation/PiecewiseCubicBezier", ["require", "exports", "module", "./CubicBezier"], function(t, i, e) {
        function s(t) {
            t = t || {}, this.split = t.split || .5;
            var i = t.overshoot || 0,
                e = t.vLeft || [0, 1 + i, 0, 0],
                s = t.vRight || [1 + i, 1, 0, 0];
            this.bezLeft = new o(e).create(), this.bezRight = new o(s).create()
        }
        var o = t("./CubicBezier");
        s.prototype.create = function() {
            var t = this;
            return function(i) {
                i = i || 0;
                var e, s = t.split;
                return s > i ? (e = i / s, t.bezLeft(e)) : (e = (i - s) / (1 - s), t.bezRight(e))
            }
        }, e.exports = s
    }), define("famous-animation/Sequence", ["require", "exports", "module"], function(t, i, e) {
        function s() {
            this.startTime = 0, this.setupPos = 0, this.schedule = [], this.seqLoc = -1
        }
        s.prototype._execute = function(t) {
            for (this.seqLoc < 0 && (this.seqLoc = 0); this.seqLoc < this.schedule.length && this.schedule[this.seqLoc].pos <= t;) this.schedule[this.seqLoc].action.call(this), this.seqLoc++
        }, s.prototype.update = function() {
            if (!(this.seqLoc < 0 || this.seqLoc >= this.schedule.length)) {
                var t = (new Date).getTime() - this.startTime;
                this._execute(t)
            }
        }, s.prototype.at = function(t, i) {
            this.schedule.push({
                pos: t,
                action: i
            }), this.setupPos = t
        }, s.prototype.after = function(t, i) {
            this.at(this.setupPos + t, i)
        }, s.prototype.play = function(t) {
            this.schedule.sort(function(t, i) {
                return t.pos - i.pos
            }), this.startTime = (new Date).getTime();
            for (var i = 0; i < this.schedule.length && this.schedule[i].pos < t;) i++;
            this.seqLoc = i
        }, s.prototype.fastForward = function(t) {
            "undefined" == typeof t && (t = 1 / 0), this._execute(t)
        }, s.prototype.stop = function() {
            this.seqLoc = -1
        }, e.exports = s
    }), define("famous-color/ColorPalettes", ["require", "exports", "module", "./Color", "./ColorPalette"], function(t, i, e) {
        function s() {}

        function o(t) {
            return new r(t[0], t[1], t[2], t[3])
        }

        function n(t) {
            for (var i = [], e = 0, s = t.length; s > e; e++) i.push(o(t[e]));
            return new a(i)
        }
        var r = t("./Color"),
            a = t("./ColorPalette"),
            h = [
                [
                    [53, 92, 125, 1],
                    [108, 91, 123, 1],
                    [192, 108, 132, 1],
                    [246, 114, 128, 1],
                    [248, 177, 149, 1]
                ],
                [
                    [27, 21, 33, 1],
                    [181, 172, 1, 1],
                    [212, 30, 69, 1],
                    [232, 110, 28, 1],
                    [236, 186, 9, 1]
                ],
                [
                    [63, 54, 42, 1],
                    [231, 69, 13, 1],
                    [250, 157, 4, 1],
                    [251, 222, 3, 1],
                    [254, 245, 150, 1]
                ],
                [
                    [10, 103, 137, 1],
                    [10, 153, 111, 1],
                    [207, 6, 56, 1],
                    [250, 102, 50, 1],
                    [254, 205, 35, 1]
                ],
                [
                    [157, 85, 105, 1],
                    [192, 227, 217, 1],
                    [202, 55, 99, 1],
                    [227, 237, 195, 1],
                    [235, 113, 84, 1]
                ],
                [
                    [110, 110, 110, 1],
                    [145, 217, 255, 1],
                    [237, 255, 135, 1],
                    [255, 133, 167, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [25, 26, 36, 1],
                    [51, 44, 44, 1],
                    [250, 101, 87, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [27, 103, 107, 1],
                    [81, 149, 72, 1],
                    [136, 196, 37, 1],
                    [190, 242, 2, 1],
                    [234, 253, 230, 1]
                ],
                [
                    [31, 11, 12, 1],
                    [48, 5, 17, 1],
                    [179, 84, 79, 1],
                    [214, 195, 150, 1],
                    [231, 252, 207, 1]
                ],
                [
                    [172, 248, 248, 1],
                    [223, 235, 24, 1],
                    [230, 95, 95, 1],
                    [235, 54, 24, 1],
                    [235, 207, 24, 1]
                ],
                [
                    [196, 182, 109, 1],
                    [213, 39, 5, 1],
                    [240, 211, 119, 1],
                    [243, 232, 228, 1],
                    [247, 109, 60, 1]
                ],
                [
                    [11, 72, 107, 1],
                    [59, 134, 134, 1],
                    [121, 189, 154, 1],
                    [168, 219, 168, 1],
                    [207, 240, 158, 1]
                ],
                [
                    [0, 188, 209, 1],
                    [118, 211, 222, 1],
                    [174, 232, 251, 1],
                    [176, 248, 255, 1],
                    [254, 249, 240, 1]
                ],
                [
                    [85, 73, 57, 1],
                    [112, 108, 77, 1],
                    [241, 230, 143, 1],
                    [255, 100, 100, 1],
                    [255, 151, 111, 1]
                ],
                [
                    [36, 244, 161, 1],
                    [178, 42, 58, 1],
                    [199, 244, 36, 1],
                    [244, 36, 182, 1],
                    [249, 246, 49, 1]
                ],
                [
                    [108, 144, 134, 1],
                    [169, 204, 24, 1],
                    [207, 73, 108, 1],
                    [235, 234, 188, 1],
                    [252, 84, 99, 1]
                ],
                [
                    [78, 79, 75, 1],
                    [130, 35, 57, 1],
                    [247, 62, 62, 1],
                    [255, 119, 61, 1],
                    [255, 213, 115, 1]
                ],
                [
                    [121, 28, 49, 1],
                    [145, 213, 152, 1],
                    [191, 178, 64, 1],
                    [202, 51, 68, 1],
                    [237, 126, 80, 1]
                ],
                [
                    [104, 73, 83, 1],
                    [127, 191, 151, 1],
                    [182, 219, 145, 1],
                    [250, 107, 41, 1],
                    [253, 158, 41, 1]
                ],
                [
                    [0, 203, 231, 1],
                    [0, 218, 60, 1],
                    [223, 21, 26, 1],
                    [244, 243, 40, 1],
                    [253, 134, 3, 1]
                ],
                [
                    [56, 222, 231, 1],
                    [232, 255, 0, 1],
                    [254, 62, 71, 1],
                    [255, 130, 0, 1]
                ],
                [
                    [27, 32, 38, 1],
                    [75, 89, 107, 1],
                    [153, 228, 255, 1],
                    [247, 79, 79, 1],
                    [255, 59, 59, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [0, 173, 239, 1],
                    [236, 0, 140, 1],
                    [255, 242, 0, 1]
                ],
                [
                    [47, 43, 173, 1],
                    [173, 43, 173, 1],
                    [228, 38, 146, 1],
                    [247, 21, 104, 1],
                    [247, 219, 21, 1]
                ],
                [
                    [101, 150, 158, 1],
                    [171, 20, 44, 1],
                    [189, 219, 222, 1],
                    [205, 212, 108, 1],
                    [219, 217, 210, 1]
                ],
                [
                    [97, 24, 36, 1],
                    [193, 47, 42, 1],
                    [247, 255, 238, 1],
                    [254, 222, 123, 1],
                    [255, 101, 64, 1]
                ],
                [
                    [118, 85, 66, 1],
                    [124, 231, 163, 1],
                    [220, 93, 110, 1],
                    [255, 174, 60, 1],
                    [255, 229, 156, 1]
                ],
                [
                    [63, 184, 175, 1],
                    [127, 199, 175, 1],
                    [218, 216, 167, 1],
                    [255, 61, 127, 1],
                    [255, 158, 157, 1]
                ],
                [
                    [217, 251, 223, 1],
                    [219, 255, 210, 1],
                    [231, 254, 235, 1],
                    [234, 255, 210, 1],
                    [243, 255, 210, 1]
                ],
                [
                    [0, 23, 42, 1],
                    [27, 139, 163, 1],
                    [94, 202, 214, 1],
                    [178, 222, 249, 1],
                    [206, 254, 255, 1]
                ],
                [
                    [225, 245, 196, 1],
                    [237, 229, 116, 1],
                    [249, 212, 35, 1],
                    [252, 145, 58, 1],
                    [255, 78, 80, 1]
                ],
                [
                    [7, 9, 61, 1],
                    [11, 16, 140, 1],
                    [12, 15, 102, 1],
                    [14, 78, 173, 1],
                    [16, 127, 201, 1]
                ],
                [
                    [5, 177, 240, 1],
                    [5, 232, 240, 1],
                    [94, 87, 230, 1],
                    [230, 87, 149, 1],
                    [255, 5, 113, 1]
                ],
                [
                    [48, 0, 24, 1],
                    [90, 61, 49, 1],
                    [131, 123, 71, 1],
                    [173, 184, 95, 1],
                    [229, 237, 184, 1]
                ],
                [
                    [111, 191, 162, 1],
                    [191, 184, 174, 1],
                    [242, 199, 119, 1],
                    [242, 230, 194, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [22, 147, 165, 1],
                    [69, 181, 196, 1],
                    [126, 206, 202, 1],
                    [160, 222, 214, 1],
                    [199, 237, 232, 1]
                ],
                [
                    [8, 26, 48, 1],
                    [50, 64, 90, 1],
                    [59, 100, 128, 1],
                    [155, 153, 130, 1],
                    [255, 134, 17, 1]
                ],
                [
                    [74, 186, 176, 1],
                    [152, 33, 0, 1],
                    [255, 211, 0, 1],
                    [255, 245, 158, 1]
                ],
                [
                    [42, 135, 50, 1],
                    [49, 48, 66, 1],
                    [107, 85, 48, 1],
                    [255, 109, 36, 1],
                    [255, 235, 107, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [25, 134, 219, 1],
                    [105, 172, 224, 1],
                    [149, 199, 24, 1],
                    [184, 212, 40, 1]
                ],
                [
                    [64, 0, 20, 1],
                    [127, 0, 40, 1],
                    [191, 0, 59, 1],
                    [229, 0, 71, 1],
                    [255, 0, 79, 1]
                ],
                [
                    [56, 69, 59, 1],
                    [78, 133, 136, 1],
                    [255, 70, 84, 1],
                    [255, 213, 106, 1],
                    [255, 254, 211, 1]
                ],
                [
                    [29, 44, 143, 1],
                    [57, 179, 162, 1],
                    [209, 146, 191, 1],
                    [222, 75, 107, 1],
                    [252, 180, 121, 1]
                ],
                [
                    [14, 36, 48, 1],
                    [232, 213, 183, 1],
                    [232, 213, 185, 1],
                    [245, 179, 73, 1],
                    [252, 58, 81, 1]
                ],
                [
                    [0, 210, 255, 1],
                    [222, 255, 0, 1],
                    [255, 0, 168, 1],
                    [255, 66, 0, 1]
                ],
                [
                    [21, 99, 105, 1],
                    [51, 53, 84, 1],
                    [169, 186, 181, 1],
                    [216, 69, 148, 1],
                    [236, 196, 89, 1]
                ],
                [
                    [105, 210, 231, 1],
                    [167, 219, 216, 1],
                    [224, 228, 204, 1],
                    [243, 134, 48, 1],
                    [250, 105, 0, 1]
                ],
                [
                    [122, 106, 83, 1],
                    [148, 140, 117, 1],
                    [153, 178, 183, 1],
                    [213, 222, 217, 1],
                    [217, 206, 178, 1]
                ],
                [
                    [34, 104, 136, 1],
                    [57, 142, 182, 1],
                    [255, 162, 0, 1],
                    [255, 214, 0, 1],
                    [255, 245, 0, 1]
                ],
                [
                    [2, 100, 117, 1],
                    [194, 163, 79, 1],
                    [251, 184, 41, 1],
                    [254, 251, 175, 1],
                    [255, 229, 69, 1]
                ],
                [
                    [214, 37, 77, 1],
                    [246, 215, 107, 1],
                    [253, 235, 169, 1],
                    [255, 84, 117, 1],
                    [255, 144, 54, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [124, 180, 144, 1],
                    [211, 25, 0, 1],
                    [255, 102, 0, 1],
                    [255, 242, 175, 1]
                ],
                [
                    [35, 116, 222, 1],
                    [38, 38, 38, 1],
                    [87, 54, 255, 1],
                    [231, 255, 54, 1],
                    [255, 54, 111, 1]
                ],
                [
                    [64, 18, 44, 1],
                    [89, 186, 169, 1],
                    [101, 98, 115, 1],
                    [216, 241, 113, 1],
                    [252, 255, 217, 1]
                ],
                [
                    [126, 148, 158, 1],
                    [174, 194, 171, 1],
                    [235, 206, 160, 1],
                    [252, 119, 101, 1],
                    [255, 51, 95, 1]
                ],
                [
                    [75, 73, 11, 1],
                    [117, 116, 73, 1],
                    [226, 223, 154, 1],
                    [235, 229, 77, 1],
                    [255, 0, 81, 1]
                ],
                [
                    [159, 112, 69, 1],
                    [183, 98, 5, 1],
                    [208, 167, 124, 1],
                    [253, 169, 43, 1],
                    [254, 238, 171, 1]
                ],
                [
                    [38, 37, 28, 1],
                    [160, 232, 183, 1],
                    [235, 10, 68, 1],
                    [242, 100, 61, 1],
                    [242, 167, 61, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [67, 110, 217, 1],
                    [120, 0, 0, 1],
                    [216, 216, 216, 1],
                    [240, 24, 0, 1]
                ],
                [
                    [51, 51, 51, 1],
                    [131, 163, 0, 1],
                    [158, 12, 57, 1],
                    [226, 27, 90, 1],
                    [251, 255, 227, 1]
                ],
                [
                    [79, 156, 52, 1],
                    [108, 186, 85, 1],
                    [125, 210, 89, 1],
                    [158, 228, 70, 1],
                    [187, 255, 133, 1]
                ],
                [
                    [0, 44, 43, 1],
                    [7, 100, 97, 1],
                    [10, 131, 127, 1],
                    [255, 61, 0, 1],
                    [255, 188, 17, 1]
                ],
                [
                    [149, 207, 183, 1],
                    [240, 65, 85, 1],
                    [242, 242, 111, 1],
                    [255, 130, 58, 1],
                    [255, 247, 189, 1]
                ],
                [
                    [89, 168, 15, 1],
                    [158, 213, 76, 1],
                    [196, 237, 104, 1],
                    [226, 255, 158, 1],
                    [240, 242, 221, 1]
                ],
                [
                    [54, 42, 44, 1],
                    [189, 223, 38, 1],
                    [237, 38, 105, 1],
                    [238, 189, 97, 1],
                    [252, 84, 99, 1]
                ],
                [
                    [11, 246, 147, 1],
                    [38, 137, 233, 1],
                    [233, 26, 157, 1],
                    [246, 182, 11, 1],
                    [246, 242, 11, 1]
                ],
                [
                    [8, 0, 9, 1],
                    [65, 242, 221, 1],
                    [207, 242, 65, 1],
                    [249, 44, 130, 1],
                    [252, 241, 30, 1]
                ],
                [
                    [198, 164, 154, 1],
                    [198, 229, 217, 1],
                    [214, 129, 137, 1],
                    [233, 78, 119, 1],
                    [244, 234, 213, 1]
                ],
                [
                    [6, 71, 128, 1],
                    [8, 84, 199, 1],
                    [160, 194, 222, 1],
                    [205, 239, 255, 1],
                    [237, 237, 244, 1]
                ],
                [
                    [93, 66, 63, 1],
                    [124, 87, 83, 1],
                    [238, 128, 117, 1],
                    [255, 177, 169, 1],
                    [255, 233, 231, 1]
                ],
                [
                    [59, 129, 131, 1],
                    [237, 48, 60, 1],
                    [245, 99, 74, 1],
                    [250, 208, 137, 1],
                    [255, 156, 91, 1]
                ],
                [
                    [56, 166, 155, 1],
                    [104, 191, 101, 1],
                    [204, 217, 106, 1],
                    [242, 88, 53, 1],
                    [242, 218, 94, 1]
                ],
                [
                    [60, 197, 234, 1],
                    [70, 70, 70, 1],
                    [233, 234, 60, 1],
                    [246, 246, 246, 1]
                ],
                [
                    [97, 99, 130, 1],
                    [102, 36, 91, 1],
                    [105, 165, 164, 1],
                    [168, 196, 162, 1],
                    [229, 234, 164, 1]
                ],
                [
                    [10, 191, 188, 1],
                    [19, 116, 125, 1],
                    [41, 34, 31, 1],
                    [252, 53, 76, 1],
                    [252, 247, 197, 1]
                ],
                [
                    [7, 0, 4, 1],
                    [236, 67, 8, 1],
                    [252, 129, 10, 1],
                    [255, 172, 35, 1],
                    [255, 251, 214, 1]
                ],
                [
                    [0, 5, 1, 1],
                    [8, 138, 19, 1],
                    [237, 20, 9, 1],
                    [240, 249, 241, 1],
                    [247, 249, 21, 1]
                ],
                [
                    [64, 197, 132, 1],
                    [131, 218, 232, 1],
                    [170, 46, 154, 1],
                    [251, 35, 137, 1],
                    [251, 132, 137, 1]
                ],
                [
                    [64, 47, 58, 1],
                    [217, 119, 119, 1],
                    [255, 198, 158, 1],
                    [255, 219, 196, 1]
                ],
                [
                    [243, 96, 49, 1],
                    [249, 236, 95, 1],
                    [255, 102, 0, 1],
                    [255, 153, 0, 1],
                    [255, 204, 0, 1]
                ],
                [
                    [33, 90, 109, 1],
                    [45, 45, 41, 1],
                    [60, 162, 162, 1],
                    [146, 199, 163, 1],
                    [223, 236, 230, 1]
                ],
                [
                    [10, 42, 63, 1],
                    [101, 147, 160, 1],
                    [185, 204, 184, 1],
                    [219, 21, 34, 1],
                    [255, 239, 167, 1]
                ],
                [
                    [0, 160, 176, 1],
                    [106, 74, 60, 1],
                    [204, 51, 63, 1],
                    [235, 104, 65, 1],
                    [237, 201, 81, 1]
                ],
                [
                    [14, 141, 148, 1],
                    [67, 77, 83, 1],
                    [114, 173, 117, 1],
                    [233, 213, 88, 1],
                    [255, 171, 7, 1]
                ],
                [
                    [94, 159, 163, 1],
                    [176, 85, 116, 1],
                    [220, 209, 180, 1],
                    [248, 126, 123, 1],
                    [250, 184, 127, 1]
                ],
                [
                    [31, 31, 31, 1],
                    [122, 91, 62, 1],
                    [205, 189, 174, 1],
                    [250, 75, 0, 1],
                    [250, 250, 250, 1]
                ],
                [
                    [176, 230, 41, 1],
                    [180, 35, 16, 1],
                    [247, 207, 10, 1],
                    [250, 124, 7, 1],
                    [252, 231, 13, 1]
                ],
                [
                    [94, 65, 47, 1],
                    [120, 192, 168, 1],
                    [240, 120, 24, 1],
                    [240, 168, 48, 1],
                    [252, 235, 182, 1]
                ],
                [
                    [31, 26, 28, 1],
                    [98, 128, 125, 1],
                    [134, 158, 138, 1],
                    [201, 107, 30, 1],
                    [209, 205, 178, 1]
                ],
                [
                    [40, 60, 0, 1],
                    [100, 153, 125, 1],
                    [237, 143, 69, 1],
                    [241, 169, 48, 1],
                    [254, 204, 109, 1]
                ],
                [
                    [37, 2, 15, 1],
                    [143, 143, 143, 1],
                    [158, 30, 76, 1],
                    [236, 236, 236, 1],
                    [255, 17, 104, 1]
                ],
                [
                    [207, 108, 116, 1],
                    [244, 93, 120, 1],
                    [255, 112, 136, 1],
                    [255, 130, 153, 1],
                    [255, 187, 193, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [12, 13, 5, 1],
                    [168, 171, 132, 1],
                    [198, 201, 157, 1],
                    [231, 235, 176, 1]
                ],
                [
                    [0, 170, 255, 1],
                    [170, 0, 255, 1],
                    [170, 255, 0, 1],
                    [255, 0, 170, 1],
                    [255, 170, 0, 1]
                ],
                [
                    [78, 150, 137, 1],
                    [126, 208, 214, 1],
                    [135, 214, 155, 1],
                    [195, 255, 104, 1],
                    [244, 252, 232, 1]
                ],
                [
                    [10, 10, 10, 1],
                    [227, 246, 255, 1],
                    [255, 20, 87, 1],
                    [255, 216, 125, 1]
                ],
                [
                    [51, 51, 153, 1],
                    [102, 153, 204, 1],
                    [153, 204, 255, 1],
                    [255, 0, 51, 1],
                    [255, 204, 0, 1]
                ],
                [
                    [23, 22, 92, 1],
                    [190, 191, 158, 1],
                    [216, 210, 153, 1],
                    [229, 228, 218, 1],
                    [245, 224, 56, 1]
                ],
                [
                    [49, 99, 64, 1],
                    [96, 158, 77, 1],
                    [159, 252, 88, 1],
                    [195, 252, 88, 1],
                    [242, 252, 88, 1]
                ],
                [
                    [92, 88, 99, 1],
                    [168, 81, 99, 1],
                    [180, 222, 193, 1],
                    [207, 255, 221, 1],
                    [255, 31, 76, 1]
                ],
                [
                    [61, 67, 7, 1],
                    [161, 253, 17, 1],
                    [225, 244, 56, 1],
                    [244, 251, 196, 1],
                    [255, 208, 79, 1]
                ],
                [
                    [0, 205, 172, 1],
                    [2, 170, 176, 1],
                    [22, 147, 165, 1],
                    [127, 255, 36, 1],
                    [195, 255, 104, 1]
                ],
                [
                    [0, 203, 231, 1],
                    [0, 218, 60, 1],
                    [223, 21, 26, 1],
                    [244, 243, 40, 1],
                    [253, 134, 3, 1]
                ],
                [
                    [34, 104, 136, 1],
                    [57, 142, 182, 1],
                    [255, 162, 0, 1],
                    [255, 214, 0, 1],
                    [255, 245, 0, 1]
                ],
                [
                    [3, 13, 79, 1],
                    [206, 236, 239, 1],
                    [231, 237, 234, 1],
                    [251, 12, 6, 1],
                    [255, 197, 44, 1]
                ],
                [
                    [253, 255, 0, 1],
                    [255, 0, 0, 1],
                    [255, 90, 0, 1],
                    [255, 114, 0, 1],
                    [255, 167, 0, 1]
                ],
                [
                    [108, 66, 18, 1],
                    [179, 0, 176, 1],
                    [183, 255, 55, 1],
                    [255, 124, 69, 1],
                    [255, 234, 155, 1]
                ],
                [
                    [0, 4, 49, 1],
                    [59, 69, 58, 1],
                    [90, 224, 151, 1],
                    [204, 46, 9, 1],
                    [255, 253, 202, 1]
                ],
                [
                    [59, 45, 56, 1],
                    [188, 189, 172, 1],
                    [207, 190, 39, 1],
                    [240, 36, 117, 1],
                    [242, 116, 53, 1]
                ],
                [
                    [101, 145, 155, 1],
                    [120, 185, 168, 1],
                    [168, 212, 148, 1],
                    [242, 177, 73, 1],
                    [244, 229, 97, 1]
                ],
                [
                    [0, 193, 118, 1],
                    [136, 193, 0, 1],
                    [250, 190, 40, 1],
                    [255, 0, 60, 1],
                    [255, 138, 0, 1]
                ],
                [
                    [110, 37, 63, 1],
                    [165, 199, 185, 1],
                    [199, 94, 106, 1],
                    [241, 245, 244, 1],
                    [251, 236, 236, 1]
                ],
                [
                    [39, 112, 140, 1],
                    [111, 191, 162, 1],
                    [190, 191, 149, 1],
                    [227, 208, 116, 1],
                    [255, 180, 115, 1]
                ],
                [
                    [62, 72, 76, 1],
                    [82, 91, 96, 1],
                    [105, 158, 81, 1],
                    [131, 178, 107, 1],
                    [242, 232, 97, 1]
                ],
                [
                    [248, 135, 46, 1],
                    [252, 88, 12, 1],
                    [252, 107, 10, 1],
                    [253, 202, 73, 1],
                    [255, 169, 39, 1]
                ],
                [
                    [83, 119, 122, 1],
                    [84, 36, 55, 1],
                    [192, 41, 66, 1],
                    [217, 91, 67, 1],
                    [236, 208, 120, 1]
                ],
                [
                    [41, 136, 140, 1],
                    [54, 19, 0, 1],
                    [162, 121, 15, 1],
                    [188, 53, 33, 1],
                    [255, 208, 130, 1]
                ],
                [
                    [10, 186, 181, 1],
                    [58, 203, 199, 1],
                    [106, 219, 216, 1],
                    [153, 236, 234, 1],
                    [201, 252, 251, 1]
                ],
                [
                    [8, 158, 42, 1],
                    [9, 42, 100, 1],
                    [90, 204, 191, 1],
                    [229, 4, 4, 1],
                    [251, 235, 175, 1]
                ],
                [
                    [187, 187, 136, 1],
                    [204, 198, 141, 1],
                    [238, 170, 136, 1],
                    [238, 194, 144, 1],
                    [238, 221, 153, 1]
                ],
                [
                    [121, 219, 204, 1],
                    [134, 78, 65, 1],
                    [234, 169, 167, 1],
                    [242, 199, 196, 1],
                    [248, 245, 226, 1]
                ],
                [
                    [96, 136, 213, 1],
                    [114, 170, 222, 1],
                    [157, 200, 233, 1],
                    [192, 222, 245, 1],
                    [217, 239, 244, 1]
                ],
                [
                    [30, 30, 30, 1],
                    [177, 255, 0, 1],
                    [209, 210, 212, 1],
                    [242, 240, 240, 1]
                ],
                [
                    [255, 102, 0, 1],
                    [255, 153, 0, 1],
                    [255, 204, 0, 1],
                    [255, 255, 204, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [35, 15, 43, 1],
                    [130, 179, 174, 1],
                    [188, 227, 197, 1],
                    [235, 235, 188, 1],
                    [242, 29, 65, 1]
                ],
                [
                    [212, 238, 94, 1],
                    [225, 237, 185, 1],
                    [240, 242, 235, 1],
                    [244, 250, 210, 1],
                    [255, 66, 66, 1]
                ],
                [
                    [20, 32, 71, 1],
                    [168, 95, 59, 1],
                    [247, 92, 92, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [63, 184, 240, 1],
                    [80, 208, 240, 1],
                    [196, 251, 93, 1],
                    [224, 240, 240, 1],
                    [236, 255, 224, 1]
                ],
                [
                    [185, 222, 81, 1],
                    [209, 227, 137, 1],
                    [224, 72, 145, 1],
                    [225, 183, 237, 1],
                    [245, 225, 226, 1]
                ],
                [
                    [185, 222, 81, 1],
                    [209, 227, 137, 1],
                    [224, 72, 145, 1],
                    [225, 183, 237, 1],
                    [245, 225, 226, 1]
                ],
                [
                    [17, 68, 34, 1],
                    [51, 170, 170, 1],
                    [51, 221, 51, 1],
                    [221, 238, 68, 1],
                    [221, 238, 187, 1]
                ],
                [
                    [46, 13, 35, 1],
                    [245, 72, 40, 1],
                    [247, 128, 60, 1],
                    [248, 228, 193, 1],
                    [255, 237, 191, 1]
                ],
                [
                    [204, 243, 144, 1],
                    [224, 224, 90, 1],
                    [247, 196, 31, 1],
                    [252, 147, 10, 1],
                    [255, 0, 61, 1]
                ],
                [
                    [18, 18, 18, 1],
                    [255, 89, 56, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [53, 38, 48, 1],
                    [85, 72, 101, 1],
                    [205, 91, 81, 1],
                    [233, 223, 204, 1],
                    [243, 163, 107, 1]
                ],
                [
                    [236, 250, 1, 1],
                    [236, 250, 2, 1],
                    [247, 220, 2, 1],
                    [248, 227, 113, 1],
                    [250, 173, 9, 1]
                ],
                [
                    [77, 129, 121, 1],
                    [161, 129, 121, 1],
                    [236, 85, 101, 1],
                    [249, 220, 159, 1],
                    [254, 157, 93, 1]
                ],
                [
                    [4, 0, 4, 1],
                    [65, 61, 61, 1],
                    [75, 0, 15, 1],
                    [200, 255, 0, 1],
                    [250, 2, 60, 1]
                ],
                [
                    [66, 50, 56, 1],
                    [179, 112, 45, 1],
                    [200, 209, 151, 1],
                    [235, 33, 56, 1],
                    [245, 222, 140, 1]
                ],
                [
                    [143, 153, 36, 1],
                    [172, 201, 95, 1],
                    [241, 57, 109, 1],
                    [243, 255, 235, 1],
                    [253, 96, 129, 1]
                ],
                [
                    [18, 18, 18, 1],
                    [23, 122, 135, 1],
                    [250, 245, 240, 1],
                    [255, 180, 143, 1]
                ],
                [
                    [67, 197, 210, 1],
                    [182, 108, 97, 1],
                    [241, 155, 140, 1],
                    [254, 247, 237, 1],
                    [255, 234, 215, 1]
                ],
                [
                    [78, 205, 196, 1],
                    [85, 98, 112, 1],
                    [196, 77, 88, 1],
                    [199, 244, 100, 1],
                    [255, 107, 107, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [137, 161, 160, 1],
                    [154, 227, 226, 1],
                    [255, 71, 103, 1],
                    [255, 118, 5, 1]
                ],
                [
                    [248, 200, 221, 1],
                    [253, 231, 120, 1],
                    [255, 61, 61, 1],
                    [255, 92, 143, 1],
                    [255, 103, 65, 1]
                ],
                [
                    [23, 138, 132, 1],
                    [145, 145, 145, 1],
                    [229, 255, 125, 1],
                    [235, 143, 172, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [73, 112, 138, 1],
                    [136, 171, 194, 1],
                    [202, 255, 66, 1],
                    [208, 224, 235, 1],
                    [235, 247, 248, 1]
                ],
                [
                    [51, 222, 245, 1],
                    [122, 245, 51, 1],
                    [245, 51, 145, 1],
                    [245, 161, 52, 1],
                    [248, 248, 101, 1]
                ],
                [
                    [57, 13, 45, 1],
                    [172, 222, 178, 1],
                    [225, 234, 181, 1],
                    [237, 173, 158, 1],
                    [254, 75, 116, 1]
                ],
                [
                    [192, 107, 129, 1],
                    [233, 22, 67, 1],
                    [245, 175, 145, 1],
                    [247, 201, 182, 1],
                    [249, 210, 182, 1]
                ],
                [
                    [131, 196, 192, 1],
                    [156, 100, 53, 1],
                    [190, 215, 62, 1],
                    [237, 66, 98, 1],
                    [240, 233, 226, 1]
                ],
                [
                    [136, 145, 136, 1],
                    [191, 218, 223, 1],
                    [207, 246, 247, 1],
                    [233, 26, 82, 1],
                    [237, 242, 210, 1]
                ],
                [
                    [64, 44, 56, 1],
                    [209, 212, 169, 1],
                    [227, 164, 129, 1],
                    [245, 215, 165, 1],
                    [255, 111, 121, 1]
                ],
                [
                    [93, 65, 87, 1],
                    [131, 134, 137, 1],
                    [168, 202, 186, 1],
                    [202, 215, 178, 1],
                    [235, 227, 170, 1]
                ],
                [
                    [0, 168, 198, 1],
                    [64, 192, 203, 1],
                    [143, 190, 0, 1],
                    [174, 226, 57, 1],
                    [249, 242, 231, 1]
                ],
                [
                    [0, 204, 190, 1],
                    [9, 166, 163, 1],
                    [157, 191, 175, 1],
                    [237, 235, 201, 1],
                    [252, 249, 216, 1]
                ],
                [
                    [0, 205, 172, 1],
                    [2, 170, 176, 1],
                    [22, 147, 165, 1],
                    [127, 255, 36, 1],
                    [195, 255, 104, 1]
                ],
                [
                    [51, 39, 23, 1],
                    [107, 172, 191, 1],
                    [157, 188, 188, 1],
                    [240, 240, 175, 1],
                    [255, 55, 15, 1]
                ],
                [
                    [51, 51, 53, 1],
                    [101, 99, 106, 1],
                    [139, 135, 149, 1],
                    [193, 190, 200, 1],
                    [233, 232, 238, 1]
                ],
                [
                    [17, 118, 109, 1],
                    [65, 9, 54, 1],
                    [164, 11, 84, 1],
                    [228, 111, 10, 1],
                    [240, 179, 0, 1]
                ],
                [
                    [73, 10, 61, 1],
                    [138, 155, 15, 1],
                    [189, 21, 80, 1],
                    [233, 127, 2, 1],
                    [248, 202, 0, 1]
                ],
                [
                    [71, 162, 145, 1],
                    [144, 79, 135, 1],
                    [213, 28, 122, 1],
                    [219, 213, 139, 1],
                    [244, 127, 143, 1]
                ],
                [
                    [55, 191, 230, 1],
                    [169, 232, 250, 1],
                    [186, 255, 21, 1],
                    [211, 255, 106, 1],
                    [247, 239, 236, 1]
                ],
                [
                    [69, 173, 168, 1],
                    [84, 121, 128, 1],
                    [89, 79, 79, 1],
                    [157, 224, 173, 1],
                    [229, 252, 194, 1]
                ],
                [
                    [248, 241, 224, 1],
                    [249, 246, 241, 1],
                    [250, 244, 227, 1],
                    [251, 106, 79, 1],
                    [255, 193, 150, 1]
                ],
                [
                    [0, 98, 125, 1],
                    [1, 64, 87, 1],
                    [51, 50, 49, 1],
                    [66, 153, 15, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [52, 17, 57, 1],
                    [53, 150, 104, 1],
                    [60, 50, 81, 1],
                    [168, 212, 111, 1],
                    [255, 237, 144, 1]
                ],
                [
                    [0, 153, 137, 1],
                    [163, 169, 72, 1],
                    [206, 24, 54, 1],
                    [237, 185, 46, 1],
                    [248, 89, 49, 1]
                ],
                [
                    [26, 31, 30, 1],
                    [108, 189, 181, 1],
                    [147, 204, 198, 1],
                    [200, 214, 191, 1],
                    [227, 223, 186, 1]
                ],
                [
                    [165, 222, 190, 1],
                    [183, 234, 201, 1],
                    [251, 178, 163, 1],
                    [252, 37, 55, 1],
                    [255, 215, 183, 1]
                ],
                [
                    [26, 20, 14, 1],
                    [90, 142, 161, 1],
                    [204, 65, 65, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [51, 51, 51, 1],
                    [111, 111, 111, 1],
                    [204, 204, 204, 1],
                    [255, 100, 0, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [51, 145, 148, 1],
                    [167, 2, 103, 1],
                    [241, 12, 73, 1],
                    [246, 216, 107, 1],
                    [251, 107, 65, 1]
                ],
                [
                    [31, 3, 51, 1],
                    [31, 57, 77, 1],
                    [39, 130, 92, 1],
                    [112, 179, 112, 1],
                    [171, 204, 120, 1]
                ],
                [
                    [209, 242, 165, 1],
                    [239, 250, 180, 1],
                    [245, 105, 145, 1],
                    [255, 159, 128, 1],
                    [255, 196, 140, 1]
                ],
                [
                    [60, 54, 79, 1],
                    [109, 124, 157, 1],
                    [124, 144, 179, 1],
                    [149, 181, 194, 1],
                    [185, 224, 220, 1]
                ],
                [
                    [35, 179, 218, 1],
                    [153, 214, 241, 1],
                    [168, 153, 241, 1],
                    [208, 89, 218, 1],
                    [248, 78, 150, 1]
                ],
                [
                    [85, 66, 54, 1],
                    [96, 185, 154, 1],
                    [211, 206, 61, 1],
                    [241, 239, 165, 1],
                    [247, 120, 37, 1]
                ],
                [
                    [20, 20, 20, 1],
                    [177, 198, 204, 1],
                    [255, 239, 94, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [136, 238, 208, 1],
                    [202, 224, 129, 1],
                    [239, 67, 53, 1],
                    [242, 205, 79, 1],
                    [246, 139, 54, 1]
                ],
                [
                    [53, 38, 29, 1],
                    [95, 79, 69, 1],
                    [151, 123, 105, 1],
                    [206, 173, 142, 1],
                    [253, 115, 26, 1]
                ],
                [
                    [68, 66, 89, 1],
                    [159, 189, 166, 1],
                    [219, 101, 68, 1],
                    [240, 145, 67, 1],
                    [252, 177, 71, 1]
                ],
                [
                    [191, 208, 0, 1],
                    [196, 60, 39, 1],
                    [233, 60, 31, 1],
                    [242, 83, 58, 1],
                    [242, 240, 235, 1]
                ],
                [
                    [43, 43, 43, 1],
                    [53, 54, 52, 1],
                    [230, 50, 75, 1],
                    [242, 227, 198, 1],
                    [255, 198, 165, 1]
                ],
                [
                    [23, 20, 38, 1],
                    [26, 15, 12, 1],
                    [207, 207, 207, 1],
                    [240, 240, 240, 1],
                    [255, 77, 148, 1]
                ],
                [
                    [28, 1, 19, 1],
                    [107, 1, 3, 1],
                    [163, 0, 6, 1],
                    [194, 26, 1, 1],
                    [240, 60, 2, 1]
                ],
                [
                    [10, 10, 10, 1],
                    [140, 97, 70, 1],
                    [214, 179, 156, 1],
                    [242, 76, 61, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [46, 13, 35, 1],
                    [245, 72, 40, 1],
                    [247, 128, 60, 1],
                    [248, 228, 193, 1],
                    [255, 237, 191, 1]
                ],
                [
                    [0, 62, 95, 1],
                    [0, 67, 132, 1],
                    [22, 147, 165, 1],
                    [150, 207, 234, 1],
                    [247, 249, 114, 1]
                ],
                [
                    [66, 29, 56, 1],
                    [87, 0, 69, 1],
                    [190, 226, 232, 1],
                    [205, 255, 24, 1],
                    [255, 8, 90, 1]
                ],
                [
                    [47, 59, 97, 1],
                    [121, 128, 146, 1],
                    [187, 235, 185, 1],
                    [233, 236, 229, 1],
                    [255, 103, 89, 1]
                ],
                [
                    [58, 17, 28, 1],
                    [87, 73, 81, 1],
                    [131, 152, 142, 1],
                    [188, 222, 165, 1],
                    [230, 249, 188, 1]
                ],
                [
                    [147, 193, 196, 1],
                    [198, 182, 204, 1],
                    [242, 202, 174, 1],
                    [250, 12, 195, 1],
                    [255, 123, 15, 1]
                ],
                [
                    [255, 3, 149, 1],
                    [255, 9, 3, 1],
                    [255, 139, 3, 1],
                    [255, 216, 3, 1],
                    [255, 251, 3, 1]
                ],
                [
                    [4, 0, 4, 1],
                    [254, 26, 138, 1],
                    [254, 53, 26, 1],
                    [254, 143, 26, 1],
                    [254, 240, 26, 1]
                ],
                [
                    [125, 173, 154, 1],
                    [196, 199, 169, 1],
                    [249, 213, 177, 1],
                    [254, 126, 142, 1],
                    [255, 62, 97, 1]
                ],
                [
                    [69, 38, 50, 1],
                    [145, 32, 77, 1],
                    [226, 247, 206, 1],
                    [228, 132, 74, 1],
                    [232, 191, 86, 1]
                ],
                [
                    [0, 0, 0, 1],
                    [38, 173, 228, 1],
                    [77, 188, 233, 1],
                    [209, 231, 81, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [44, 87, 133, 1],
                    [209, 19, 47, 1],
                    [235, 241, 247, 1],
                    [237, 214, 130, 1]
                ],
                [
                    [92, 172, 196, 1],
                    [140, 209, 157, 1],
                    [206, 232, 121, 1],
                    [252, 182, 83, 1],
                    [255, 82, 84, 1]
                ],
                [
                    [58, 68, 8, 1],
                    [74, 88, 7, 1],
                    [125, 146, 22, 1],
                    [157, 222, 13, 1],
                    [199, 237, 14, 1]
                ],
                [
                    [22, 147, 167, 1],
                    [200, 207, 2, 1],
                    [204, 12, 57, 1],
                    [230, 120, 30, 1],
                    [248, 252, 193, 1]
                ],
                [
                    [59, 12, 44, 1],
                    [210, 255, 31, 1],
                    [250, 244, 224, 1],
                    [255, 106, 0, 1],
                    [255, 195, 0, 1]
                ],
                [
                    [44, 13, 26, 1],
                    [52, 158, 151, 1],
                    [200, 206, 19, 1],
                    [222, 26, 114, 1],
                    [248, 245, 193, 1]
                ],
                [
                    [28, 20, 13, 1],
                    [203, 232, 107, 1],
                    [242, 233, 225, 1],
                    [255, 255, 255, 1]
                ],
                [
                    [75, 88, 191, 1],
                    [161, 206, 247, 1],
                    [247, 255, 133, 1],
                    [255, 54, 134, 1]
                ],
                [
                    [74, 95, 103, 1],
                    [92, 55, 75, 1],
                    [204, 55, 71, 1],
                    [209, 92, 87, 1],
                    [217, 212, 168, 1]
                ]
            ];
        s.prototype.getPalette = function(t) {
            return n(h[t])
        }, s.prototype.getCount = function() {
            return h.length
        }, e.exports = s
    }), define("famous-css/StyleManager", ["require", "exports", "module"], function(t, e) {
        function s() {
            for (x in document.styleSheets) {
                var t = document.styleSheets[x],
                    e = t.cssRules ? t.cssRules : t.rules;
                if (e)
                    for (i = 0; i < e.length; i++) {
                        var s = e[i].selectorText;
                        if (s in n)
                            for (key in n[s]) "height" == key ? e[i].style.height = n[s][key] : "width" == key ? e[i].style.width = n[s][key] : "line-height" == key ? e[i].style.lineHeight = n[s][key] : "margin-top" == key ? e[i].style.marginTop = n[s][key] : "margin-bottom" == key ? e[i].style.marginBottom = n[s][key] : "margin-right" == key ? e[i].style.marginRight = n[s][key] : "min-height" == key ? e[i].style.minHeight = n[s][key] : "left" == key ? e[i].style.left = n[s][key] : "right" == key ? e[i].style.right = n[s][key] : "padding" == key ? e[i].style.padding = n[s][key] : "top" == key ? e[i].style.top = n[s][key] : "bottom" == key ? e[i].style.bottom = n[s][key] : "text-shadow" == key ? e[i].style.textShadow = n[s][key] : "font-family" == key ? e[i].style.fontFamily = n[s][key] : "font-size" == key ? e[i].style.fontSize = n[s][key] : "background-size" == key ? e[i].style.backgroundSize = n[s][key] : "margin" == key ? e[i].style.margin = n[s][key] : "padding-left" == key ? e[i].style.paddingLeft = n[s][key] : "padding-right" == key ? e[i].style.paddingRight = n[s][key] : "padding-top" == key ? e[i].style.paddingTop = n[s][key] : "padding-bottom" == key ? e[i].style.paddingBottom = n[s][key] : "letter-spacing" == key ? e[i].style.letterSpacing = n[s][key] : "margin-left" == key ? e[i].style.marginLeft = n[s][key] : "min-width" == key ? e[i].style.minWidth = n[s][key] : "max-height" == key ? e[i].style.maxHeight = n[s][key] : "border-top" == key ? e[i].style.borderTop = n[s][key] : "border" == key ? e[i].style.border = n[s][key] : "-webkit-perspective" == key ? e[i].style["-webkit-perspective"] = n[s][key] : "perspective" == key ? e[i].style.perspective = n[s][key] : "background" == key ? (e[i].style["background-color"] = n[s][key], e[i].style.background = n[s][key]) : "box-shadow" == key ? (e[i].style["-webkit-box-shadow"] = n[s][key], e[i].style["-moz-box-shadow"] = n[s][key], e[i].style["box-shadow"] = n[s][key]) : "border-top-right-radius" == key ? (e[i].style["border-top-right-radius"] = n[s][key], e[i].style["-webkit-border-top-right-radius"] = n[s][key], e[i].style["-moz-border-radius-topright"] = n[s][key]) : "border-radius" == key ? (e[i].style["-moz-border-radius"] = n[s][key], e[i].style["-webkit-border-radius"] = n[s][key], e[i].style.borderRadius = n[s][key]) : console.log("Cant set CSS variable. No function associated with: " + key)
                    }
            }
            n = {}, e = null, t = null
        }

        function o(t, i, e) {
            t in n || (n[t] = {}), e = e.toString().toLowerCase(), e.indexOf("rgb") < 0 && e.indexOf("px") < 0 && e.indexOf("%") < 0 && e.indexOf(!1) && (e += "px"), n[t][i] = e
        }
        var n = {};
        e.setStyles = s, e.setRule = o
    }), define("famous-css/StyleSheet", ["require", "exports", "module", "./StyleManager"], function(t, i) {
        function e() {
            s.setRule("body", "font-size", .02 * window.innerWidth), s.setRule("body", "background", "#000000"), s.setStyles()
        }
        var s = t("./StyleManager");
        i.buildStyleSheet = e
    }), define("famous-generative/Box", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode"], function(t, i, e) {
        function s(t, i, e) {
            this.nodes = [], this.result = [], this.top = new o({
                size: [t, e]
            }), this.bottom = new o({
                size: [t, e]
            }), this.left = new o({
                size: [e, i]
            }), this.right = new o({
                size: [e, i]
            }), this.front = new o({
                size: [t, i]
            }), this.back = new o({
                size: [t, i]
            }), this.top.addClass("box-top"), this.bottom.addClass("box-bottom"), this.left.addClass("box-left"), this.right.addClass("box-right"), this.front.addClass("box-front"), this.back.addClass("box-back"), this.sides = [this.top, this.bottom, this.left, this.right, this.front, this.back], this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * Math.PI)),
                opacity: 1,
                target: this.add(this.top).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * -Math.PI)),
                opacity: 1,
                target: this.add(this.bottom).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * -Math.PI)),
                opacity: 1,
                target: this.add(this.left).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * Math.PI)),
                opacity: 1,
                target: this.add(this.right).execute()
            }), this.result.push({
                transform: n.translate(0, 0, .5 * e),
                opacity: 1,
                target: this.add(this.front).execute()
            }), this.result.push({
                transform: n.translate(0, 0, .5 * -e),
                opacity: 1,
                target: this.add(this.back).execute()
            })
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils"),
            a = t("famous/RenderNode");
        s.prototype.setColor = function(t, i, e, s) {
            for (var o = 0; o < this.sides.length; o++) this.sides[o].setProperties({
                backgroundColor: r.color(t, i, e, s)
            })
        }, s.prototype.setFrontColor = function(t, i, e, s) {
            this.front.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setBackColor = function(t, i, e, s) {
            this.back.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setRightColor = function(t, i, e, s) {
            this.right.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setLeftColor = function(t, i, e, s) {
            this.left.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setTopColor = function(t, i, e, s) {
            this.top.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setBottomColor = function(t, i, e, s) {
            this.bottom.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.add = function(t) {
            var i = new a;
            return this.nodes.push(i), i.from(t), i
        }, s.prototype.render = function() {
            return this.result
        }, e.exports = s
    }), define("famous-generative/Axis", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "./Box"], function(t, i, e) {
        function s() {
            this.radius = 256, this.box = new r(this.radius, this.radius, this.radius), this.xyPlane = new o({
                size: [this.radius, this.radius]
            }), this.xyPlane.addClass("plane-xy"), this.xyTransform = n.rotateX(Math.PI / 2), this.zxPlane = new o({
                size: [this.radius, this.radius]
            }), this.zxPlane.addClass("plane-zx"), this.zxTransform = n.rotateY(Math.PI / 2), this.yzPlane = new o({
                size: [this.radius, this.radius]
            }), this.yzPlane.addClass("plane-yz"), this.yzTransform = n.rotateZ(Math.PI / 2), this.transform = n.identity, this.opacity = 1, this.results = [], this.results.push({
                transform: this.transform,
                opacity: this.opacity,
                target: this.box.render()
            }), this.results.push({
                transform: this.xyTransform,
                opacity: this.opacity,
                target: this.xyPlane.render()
            }), this.results.push({
                transform: this.zxTransform,
                opacity: this.opacity,
                target: this.zxPlane.render()
            }), this.results.push({
                transform: this.yzTransform,
                opacity: this.opacity,
                target: this.yzPlane.render()
            })
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("./Box");
        s.prototype.render = function() {
            return this.results
        }, e.exports = s
    }), define("famous-generative/DebugTriangle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous-math/Quaternion", "famous-math/Vector", "./Line"], function(t, i, e) {
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.opacity = t.opacity || 1, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [this.size, this.size]
            }), this.surface.addClass("DebugTriangle"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid red",
                "border-left": .5 * this.size + "px solid blue",
                "border-bottom": this.size + "px solid rgba(255, 255, 255, .75)"
            }), this.line0 = new h({
                x1: this.x1,
                y1: this.y1,
                x2: this.x2,
                y2: this.y2,
                width: 2,
                opacity: .5
            }), this.line1 = new h({
                x1: this.x2,
                y1: this.y2,
                x2: this.x3,
                y2: this.y3,
                width: 2,
                opacity: .5
            }), this.line2 = new h({
                x1: this.x3,
                y1: this.y3,
                x2: this.x1,
                y2: this.y1,
                width: 2,
                opacity: .5
            }), this.line0.setLineWidth(4);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var e = .75,
                s = 30;
            this.p1Surf = new o({
                size: [s, s]
            }), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(s)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">1</p>'), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = e, this.p2Surf = new o({
                size: [s, s]
            }), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(s)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">2</p>'), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = e, this.p3Surf = new o({
                size: [s, s]
            }), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(s)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">3</p>'), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = e, this.calculateTransform()
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils"),
            a = (t("famous-math/Quaternion"), t("famous-math/Vector")),
            h = t("./Line");
        s.prototype.setProperties = function(t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function(t, i, e, s) {
            return this.surface.setProperties(r.backgroundColor(t, i, e, 1)), this.opacity = s, this
        }, s.prototype.setOpacity = function(t) {
            return this.opacity = t, this
        }, s.prototype.render = function() {
            var t = [{
                transform: this.mtx,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            }];
            return t.push(this.line0.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push({
                transform: this.p1Surf.mtx,
                opacity: this.p1Surf.opacity,
                origin: [.5, .5],
                target: this.p1Surf.render()
            }), t.push({
                transform: this.p2Surf.mtx,
                opacity: this.p2Surf.opacity,
                origin: [.5, .5],
                target: this.p2Surf.render()
            }), t.push({
                transform: this.p3Surf.mtx,
                opacity: this.p3Surf.opacity,
                origin: [.5, .5],
                target: this.p3Surf.render()
            }), t
        }, s.prototype.setP1 = function(t, i, e) {
            this.set(t, i, e, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, s.prototype.setP2 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, t, i, e, this.x3, this.y3, this.z3)
        }, s.prototype.setP3 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, e)
        }, s.prototype.set = function(t, i, e, s, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, s.prototype.getP1 = function() {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function() {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getP3 = function() {
            return [this.x3, this.y3, this.z3]
        }, s.prototype.getLength = function() {
            return this.length
        }, s.prototype.calculateTransform = function() {
            var t = 0,
                i = 0,
                e = 0,
                s = 0,
                o = 0,
                h = 0,
                u = 0,
                c = 0,
                p = 0,
                l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2),
                d = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3),
                f = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3),
                m = 0;
            if (l > d ? l > f ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, c = this.y3, p = this.z3, m = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, m = f) : d > f ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, c = this.y2, p = this.z2, m = d) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, m = f), s >= t) {
                var g = t,
                    y = i,
                    _ = e;
                t = s, i = o, e = h, s = g, o = y, h = _
            }
            this.p1Surf.mtx = n.move(n.identity, [t, i, e]), this.p2Surf.mtx = n.move(n.identity, [s, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, c, p]), this.line0.set(t, i, e, s, o, h), this.line0.setColor(255, 255, 0, 1), this.line1.set(t, i, e, u, c, p), this.line1.setColor(255, 0, 255, 1), this.line2.set(s, o, h, u, c, p), this.line2.setColor(0, 255, 255, 1);
            var v = 1,
                b = 1,
                S = 0,
                w = 0,
                x = Math.atan((o - i) / (s - t));
            isNaN(x) && (x = this.halfPi);
            var T = .5 * (l + d + f),
                z = Math.sqrt(T * (T - l) * (T - d) * (T - f)),
                M = 2 * z / m,
                C = Math.asin(M / r.distance3D(t, i, e, u, c, p)),
                P = Math.asin(M / r.distance3D(s, o, h, u, c, p)),
                k = M / Math.tan(P) / m,
                O = M / Math.tan(C) / m,
                I = new a(s - t, o - i, h - e),
                E = new a(s - u, o - c, h - p),
                N = new a;
            if (I.cross(E, N), N.z > 0 && (v = -1), t == s) {
                v *= -1;
                var D = O;
                O = k, k = D
            }
            var A = this.invSize * M,
                F = this.invSize * m;
            rot = n.multiply(n.identity, n.rotate(S, w, x)), this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * O + "px solid rgba(255, 0, 0, .50)",
                "border-left": this.size * k + "px solid rgba(0, 0, 255, .50)",
                "border-bottom": this.size + "px solid rgba(0, 255, 0, .50)"
            });
            var R = .5 * (t + s) - v * M * .5 * Math.sin(-x),
                B = .5 * (i + o) - v * M * .5 * Math.cos(Math.abs(x)),
                q = n.move(n.identity, [R, B, 0]);
            this.mtx = n.multiply(n.identity, n.scale(F * b, A * v, 1), rot, q)
        }, e.exports = s
    }), define("famous-generative/EasyCamera", ["require", "exports", "module", "famous/Engine", "famous-utils/Utils", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion"], function(t, i, e) {
        function s() {
            this.renderMatrix = r.identity, this.doubleClickToReset = !0, this.touchTime = (new Date).getTime(), this.clickTime = (new Date).getTime(), this.deltaTime = 200, this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.radius = .5 * Math.max(this.viewWidth, this.viewHeight), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.axis = new a(0, 1, 0), this.theta = 0, this.flipX = 1, this.flipY = 1, this.flipZ = 1, this.t1 = new a, this.t2 = new a, this.pt1 = new a, this.pt2 = new a, this.damping = .95, this.zAcc = 0, this.zVel = 0, this.dt = 0, this.pdt = 0, this.distance = -100, this.position = new a(0, 0, this.distance), this.rotation = new a(0, 0, 0), this.e_mtx = r.identity, this.q_rot = new h, this.q_mtx = r.identity, this.quat = new h, this.d_mtx = r.identity, this.sensitivityRotation = 3, this.sensitivityZoom = 3, this.touchDown = !1, this.mouseDown = !1, o.on("prerender", this._update.bind(this)), o.on("touchstart", this.touchstart.bind(this)), o.on("touchmove", this.touchmove.bind(this)), o.on("touchend", this.touchend.bind(this)), o.on("resize", this.resize.bind(this)), o.on("mousedown", this.mousedown.bind(this)), o.on("mousemove", this.mousemove.bind(this)), o.on("mouseup", this.mouseup.bind(this)), window.addEventListener("mousewheel", this.mousewheel.bind(this)), this.updateMatrix()
        }
        var o = t("famous/Engine"),
            n = t("famous-utils/Utils"),
            r = t("famous/Matrix"),
            a = t("famous-math/Vector"),
            h = t("famous-math/Quaternion");
        s.prototype._update = function() {
            this.update(), !this.mouseDown && !this.touchDown && this.theta > 1e-4 && (this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix(), this.theta *= this.damping)
        }, s.prototype.update = function() {}, s.prototype.setFlipX = function(t) {
            this.flipX = t ? -1 : 1
        }, s.prototype.setFlipY = function(t) {
            this.flipY = t ? -1 : 1
        }, s.prototype.setFlipZ = function(t) {
            this.flipZ = t ? -1 : 1
        }, s.prototype.setSensitivityZoom = function(t) {
            this.sensitivityZoom = t
        }, s.prototype.setSensitivityRotation = function(t) {
            this.sensitivityRotation = t
        }, s.prototype.setDistance = function(t) {
            this.distance = t, this.position.z = this.distance, this.setPosition(this.position)
        }, s.prototype.setPosition = function(t) {
            this.position.set(t), this.updateMatrix()
        }, s.prototype.applyQuaternionRotation = function(t) {
            this.q_rot = this.q_rot.multiply(t), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, s.prototype.applyEulerRotation = function(t, i, e) {
            this.rotation.setXYZ(t, i, e), this.e_mtx = r.rotate(t, i, e), this.updateMatrix()
        }, s.prototype.updateMatrix = function() {
            this.renderMatrix = r.move(r.multiply(this.q_mtx, this.e_mtx), this.position.toArray())
        }, s.prototype.getRotationMatrix = function() {
            return this.q_mtx
        }, s.prototype.getMatrix = function() {
            return this.renderMatrix
        }, s.prototype.reset = function() {
            this.theta = 0, this.q_rot.clear(), this.q_mtx = this.d_mtx, this.position.clear(), this.position.setXYZ(0, 0, this.distance), this.updateMatrix()
        }, s.prototype.setDefaultMatrix = function(t) {
            this.d_mtx = t
        }, s.prototype.clickCheckForCameraRestart = function() {
            var t = (new Date).getTime();
            t - this.clickTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.clickTime = t
        }, s.prototype.touchCheckForCameraRestart = function() {
            var t = (new Date).getTime();
            t - this.touchTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.touchTime = t
        }, s.prototype.touchstart = function(t) {
            1 == t.touches.length ? (this.touchDown = !0, this.touchCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY)) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.pt1.set(this.t1), this.pt2.set(this.t2), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.pdt = this.dt)
        }, s.prototype.touchmove = function(t) {
            1 == t.touches.length ? (this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY), this.updateArcBallRotation()) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.position.z += this.flipZ * (this.dt - this.pdt) / this.sensitivityZoom, this.updateMatrix(), this.pt1.set(this.t1), this.pt2.set(this.t2), this.pdt = this.dt)
        }, s.prototype.touchend = function(t) {
            1 == t.touches.length ? (this.t1.clear(), this.pt1.clear(), this.quat.clear()) : 2 == t.touches.length && (this.t1.clear(), this.pt1.clear(), this.t2.clear(), this.pt2.clear(), this.dt = 0, this.pdt = 0)
        }, s.prototype.setArcBallVector = function(t, i) {
            this.pt1.set(this.t1), this.t1.clear(), this.t1.x = -1 * this.flipX * (t - this.center.x) / this.radius, this.t1.y = -1 * this.flipY * (i - this.center.y) / this.radius;
            var e = this.t1.norm();
            e > 1 ? this.t1.normalize(1, this.t1) : this.t1.z = Math.sqrt(1 - e)
        }, s.prototype.updateArcBallRotation = function() {
            this.theta = Math.acos(this.t1.dot(this.pt1)), this.axis = this.pt1.cross(this.t1, this.axis), this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, s.prototype.emit = function(t, i) {
            "prerender" == t ? this.update(i) : "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "resize" == t && this.resize(i)
        }, s.prototype.mousemove = function(t) {
            this.mouseDown && (this.setArcBallVector(t.clientX, t.clientY), this.updateArcBallRotation())
        }, s.prototype.mousedown = function(t) {
            this.mouseDown = !0, this.clickCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.clientX, t.clientY)
        }, s.prototype.mouseup = function() {
            this.mouseDown = !1
        }, s.prototype.mousewheel = function(t) {
            this.position.z += this.flipZ * n.limit(t.wheelDelta, -500, 500) * .01 * this.sensitivityZoom, this.updateMatrix()
        }, s.prototype.resize = function() {
            this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.radius = .5 * Math.min(this.viewWidth, this.viewHeight)
        }, s.prototype.setDamping = function(t) {
            this.damping = t
        }, s.prototype.render = function(t) {
            return {
                transform: this.renderMatrix,
                origin: [.5, .5],
                target: t
            }
        }, e.exports = s
    }), define("famous-generative/Integrator", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e, s, o) {
            this.targeting = !0, this.target = i || 0, this.pos = t || 0, this.delta = this.target - this.pos, this.vel = 0, this.acc = 0, this.damping = e || .125, this.extForce = 0, this.extForceInQue = !1, this.velLimit = s || .125, this.accLimit = o || .0125
        }
        s.prototype.setPhysics = function(t, i, e) {
            this.damping = t, this.velLimit = i, this.accLimit = e
        }, s.prototype.update = function() {
            return this.targeting && (this.acc = 0, this.acc += this.goToTarget(), this.extForceInQue && (this.acc += this.extForce, this.extForceInQue = !1, this.extForce = 0), this.accLimitCheck(), this.acc -= this.vel * this.damping, this.vel += this.acc, this.velLimitCheck(), this.pos += this.vel), this.pos
        }, s.prototype.setTarget = function(t) {
            this.target = t
        }, s.prototype.setTargetAndHome = function(t) {
            this.target = t, this.pos = t
        }, s.prototype.getValue = function() {
            return this.pos
        }, s.prototype.goToTarget = function() {
            return this.delta = this.target - this.pos, this.delta
        }, s.prototype.addForce = function(t) {
            this.extForceInQue = !0, this.extForce += t
        }, s.prototype.accLimitCheck = function() {
            Math.abs(this.acc) > this.accLimit && (this.acc = this.acc > 0 ? this.accLimit : -this.accLimit)
        }, s.prototype.velLimitCheck = function() {
            Math.abs(this.vel) > this.velLimit && (this.vel = this.vel > 0 ? this.velLimit : -this.velLimit)
        }, e.exports = s
    }), define("famous-generative/Particle", ["require", "exports", "module", "famous-math/Vector"], function(t, i, e) {
        function s() {
            this.theta = 0, this.speed = .01, this.home = new o(0, 0, 0), this.ppos = new o(0, 0, 0), this.pos = new o(0, 0, 0), this.vel = new o(0, 0, 0), this.acc = new o(0, 0, 0), this.velLimit = 10, this.accLimit = .25, this.radius = .5
        }
        var o = t("famous-math/Vector");
        s.prototype.update = function() {
            this.ppos.set(this.pos), this.ppos.sub(this.pos, this.vel), this.vel.add(this.acc.cap(this.accLimit), this.vel), this.pos.add(this.vel.cap(this.velLimit), this.pos)
        }, e.exports = s
    }), define("famous-generative/Touch", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-math/Vector", "./Integrator", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            this.identifier = -1, this.modAmp = .05, this.modSpeed = .2, this.angle = 0, this.alive = !1, this.radius = 64, this.surface = new o({
                size: [2 * this.radius, 2 * this.radius]
            }), this.surface.addClass("touch"), this.pos = new r, this.mtx = n.identity, this.opacity = 0, this.damping = .3, this.velLimit = .25, this.accLimit = .1, this.integrator = new a(0, 0, this.damping, this.velLimit, this.accLimit), this.modulator = new a(0, 0), this.scale = 0, this.surfaceBack = new o({
                size: [2 * this.radius, 2 * this.radius]
            }), this.surfaceBack.addClass("touch-back"), this.mtxBack = n.identity, this.opacityBack = 0, this.backAlpha = 4, this.backIntegrator = new a(0, 0, .75, .25, .025)
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-math/Vector"),
            a = t("./Integrator"),
            h = t("famous-utils/Utils");
        s.prototype.setIdentifier = function(t) {
            this.identifier = t
        }, s.prototype.setRadius = function(t) {
            this.radius = t, this.surface.setSize([2 * this.radius, 2 * this.radius]), this.surfaceBack.setSize([2 * this.radius, 2 * this.radius])
        }, s.prototype.isAlive = function() {
            return this.alive || this.integrator.getValue() > 1e-7 ? !0 : !1
        }, s.prototype.update = function() {
            this.alive && (this.angle += this.modSpeed * this.modulator.update(), this.integrator.addForce(this.modAmp * Math.sin(this.angle))), this.opacity = this.integrator.update(), this.scale = this.integrator.getValue(), this.mtx = n.multiply(n.scale(this.scale, this.scale, 1), n.move(n.identity, this.pos.toArray()));
            var t = h.clamp(this.backIntegrator.update(), 0, 1);
            this.opacityBack = -this.backAlpha * t * t + this.backAlpha * t, this.mtxBack = n.multiply(n.scale(.5 * this.angle, .5 * this.angle, 1), n.move(n.identity, this.pos.toArray()))
        }, s.prototype.render = function() {
            return {
                transform: this.mtx,
                origin: [.5, .5],
                opacity: this.opacity,
                target: this.surface.render()
            }
        }, s.prototype.renderBack = function() {
            return {
                transform: this.mtxBack,
                origin: [.5, .5],
                opacity: this.opacityBack,
                target: this.surfaceBack.render()
            }
        }, s.prototype.touchstart = function(t, i) {
            this.angle = 0, this.freed = !1, this.alive = !0, this.integrator.setTarget(1), this.integrator.setPhysics(this.damping, this.velLimit, this.accLimit), this.backIntegrator.setTarget(1), this.modulator.setTarget(1), t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, s.prototype.touchmove = function(t, i) {
            t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, s.prototype.touchend = function() {
            this.alive = !1, this.integrator.setTarget(0), this.integrator.setPhysics(.1, .25, .0125), this.modulator.setTargetAndHome(0), this.backIntegrator.setTargetAndHome(0)
        }, e.exports = s
    }), define("famous-generative/TouchVisualizer", ["require", "exports", "module", "./Touch"], function(t, i, e) {
        function s() {
            this.touches = [], this.cachedTouches = [], this.unActiveTouches = [], this.activeIdentifies = [];
            for (var t = 0; 20 > t; t++) this.cachedTouches[t] = new o(this), this.unActiveTouches[t] = this.cachedTouches[t]
        }
        var o = t("./Touch");
        s.prototype.update = function() {
            for (var t = 0; t < this.activeIdentifies.length; t++) {
                var i = this.activeIdentifies[t];
                void 0 !== this.touches[i] && this.touches[i].update()
            }
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.activeIdentifies.length; i++) {
                var e = this.activeIdentifies[i];
                void 0 !== this.touches[e] && this.touches[e].isAlive() ? (t.push(this.touches[e].render()), t.push(this.touches[e].renderBack())) : this.touchFreed(this.touches[e])
            }
            return t
        }, s.prototype.emit = function(t, i) {
            "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "prerender" == t && this.update(i)
        }, s.prototype.getCachedTouch = function() {
            return this.unActiveTouches.pop()
        }, s.prototype.touchstart = function(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 === this.touches[e] && this.cachedTouches.length > 0 && (-1 == this.activeIdentifies.indexOf(e) && this.activeIdentifies.push(e), this.touches[e] = this.getCachedTouch(), this.touches[e].setIdentifier(e)), this.touches[e].touchstart(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, s.prototype.touchmove = function(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 !== this.touches[e] && this.touches[e].touchmove(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, s.prototype.touchend = function(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 !== this.touches[e] && this.touches[e].touchend()
            }
        }, s.prototype.touchFreed = function(t) {
            if (void 0 !== t) {
                var i = t.identifier,
                    e = this.activeIdentifies.indexOf(i);
                this.activeIdentifies.splice(e, 1), this.unActiveTouches.push(t), this.touches[i] = void 0
            }
        }, e.exports = s
    }), define("famous-generative/Triangle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous-math/Quaternion", "famous-math/Vector", "./Line"], function(t, i, e) {
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [this.size, this.size]
            }), this.surface.addClass("Triangle"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid transparent",
                "border-left": .5 * this.size + "px solid transparent",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this.calculateTransform()
        } {
            var o = t("famous/Surface"),
                n = t("famous/Matrix"),
                r = t("famous-utils/Utils"),
                a = (t("famous-math/Quaternion"), t("famous-math/Vector"));
            t("./Line")
        }
        s.prototype.setProperties = function(t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function(t, i, e, s) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(e)), this.opacity = s, this.surface.setProperties({
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this
        }, s.prototype.setOpacity = function(t) {
            return this.opacity = t, this
        }, s.prototype.render = function() {
            var t = {
                transform: this.mtx,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            };
            return t
        }, s.prototype.setP1 = function(t, i, e) {
            this.set(t, i, e, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, s.prototype.setP2 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, t, i, e, this.x3, this.y3, this.z3)
        }, s.prototype.setP3 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, e)
        }, s.prototype.set = function(t, i, e, s, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, s.prototype.getP1 = function() {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function() {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getP3 = function() {
            return [this.x3, this.y3, this.z3]
        }, s.prototype.getLength = function() {
            return this.length
        }, s.prototype.calculateTransform = function() {
            var t = 0,
                i = 0,
                e = 0,
                s = 0,
                o = 0,
                h = 0,
                u = 0,
                c = 0,
                p = 0,
                l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2),
                d = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3),
                f = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3),
                m = 0;
            if (l > d ? l > f ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, c = this.y3, p = this.z3, m = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, m = f) : d > f ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, c = this.y2, p = this.z2, m = d) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, m = f), s >= t) {
                var g = t,
                    y = i,
                    _ = e;
                t = s, i = o, e = h, s = g, o = y, h = _
            }
            var v = 1,
                b = 1,
                S = Math.atan((o - i) / (s - t)),
                w = .5 * (l + d + f),
                x = Math.sqrt(w * (w - l) * (w - d) * (w - f)),
                T = 2 * x / m,
                z = Math.asin(T / r.distance3D(t, i, e, u, c, p)),
                M = Math.asin(T / r.distance3D(s, o, h, u, c, p)),
                C = T / Math.tan(M) / m,
                P = T / Math.tan(z) / m,
                k = new a(s - t, o - i, h - e),
                O = new a(s - u, o - c, h - p),
                I = new a;
            if (k.cross(O, I), I.z > 0 && (v = -1), t == s) {
                v *= -1;
                var E = P;
                P = C, C = E
            }
            var N = this.invSize * T,
                D = this.invSize * m;
            rot = n.multiply(n.identity, n.rotateZ(S)), this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * P + "px solid transparent",
                "border-left": this.size * C + "px solid transparent",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            });
            var A = .5 * (t + s) - v * T * .5 * Math.sin(-S),
                F = .5 * (i + o) - v * T * .5 * Math.cos(Math.abs(S));
            this.mtx = n.multiply(n.identity, n.scale(D * b, N * v, 1), rot, n.move(n.identity, [A, F, 0]))
        }, e.exports = s
    }), define("famous-generative/Triangle3D", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous-math/Quaternion", "famous-math/Vector", "famous-generative/Line"], function(t, i, e) {
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.xAxis = new a(1, 0, 0), this.yAxis = new a(0, 1, 0), this.zAxis = new a(0, 0, 1), this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [this.size, this.size]
            }), this.surface.addClass("Triangle3D"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid red",
                "border-left": .5 * this.size + "px solid blue",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this.normal = new h({
                width: 4,
                opacity: 1
            }), this.line1 = new h({
                width: 4,
                opacity: 1
            }), this.line2 = new h({
                width: 4,
                opacity: 1
            }), this.line3 = new h({
                width: 4,
                opacity: 1
            }), this.line4 = new h({
                width: 4,
                opacity: 1
            }), this.line5 = new h({
                width: 4,
                opacity: 1
            }), this.line6 = new h({
                width: 4,
                opacity: 1
            }), this.normal.setColor(255, 0, 0, 1), this.line1.setColor(255, 255, 0, 1), this.line2.setColor(255, 0, 255, 1), this.line3.setColor(0, 255, 255, 1), this.line4.setColor(255, 0, 0, 1), this.line5.setColor(0, 0, 0, 1), this.line5.setColor(0, 0, 0, 1);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var e = .75,
                s = 30;
            this.p1Surf = new o({
                size: [s, s]
            }), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(s)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">1</p>'), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = e, this.p2Surf = new o({
                size: [s, s]
            }), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(s)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">2</p>'), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = e, this.p3Surf = new o({
                size: [s, s]
            }), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(s)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">3</p>'), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = e, this.p4Surf = new o({
                size: [s, s]
            }), this.p4Surf.setProperties(r.backgroundColor(255, 0, 0, 1)), this.p4Surf.setProperties(r.borderRadius(s)), this.p4Surf.setContent('<p class="triangleIndex" style="' + i + '">C</p>'), this.p4Surf.mtx = n.identity, this.p4Surf.opacity = e, this.p5Surf = new o({
                size: [s, s]
            }), this.p5Surf.setProperties(r.backgroundColor(0, 255, 0, 1)), this.p5Surf.setProperties(r.borderRadius(s)), this.p5Surf.setContent('<p class="triangleIndex" style="' + i + '">M</p>'), this.p5Surf.mtx = n.identity, this.p5Surf.opacity = e, this.p6Surf = new o({
                size: [s, s]
            }), this.p6Surf.setProperties(r.backgroundColor(0, 0, 255, 1)), this.p6Surf.setProperties(r.borderRadius(s)), this.p6Surf.setContent('<p class="triangleIndex" style="' + i + '">V</p>'), this.p6Surf.mtx = n.identity, this.p6Surf.opacity = e, this.calculateTransform()
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils"),
            a = (t("famous-math/Quaternion"), t("famous-math/Vector")),
            h = t("famous-generative/Line");
        s.prototype.setProperties = function(t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function(t, i, e, s) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(e)), this.opacity = s, this.surface.setProperties({
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this
        }, s.prototype.setOpacity = function(t) {
            return this.opacity = t, this
        }, s.prototype.render = function() {
            var t = [{
                transform: this.mtx,
                opacity: this.opacity,
                target: this.surface.render()
            }];
            return t.push(this.normal.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push(this.line3.render()), t.push(this.line4.render()), t.push(this.line5.render()), t.push(this.line6.render()), t.push({
                transform: this.p1Surf.mtx,
                opacity: this.p1Surf.opacity,
                target: this.p1Surf.render()
            }), t.push({
                transform: this.p2Surf.mtx,
                opacity: this.p2Surf.opacity,
                target: this.p2Surf.render()
            }), t.push({
                transform: this.p3Surf.mtx,
                opacity: this.p3Surf.opacity,
                target: this.p3Surf.render()
            }), t.push({
                transform: this.p4Surf.mtx,
                opacity: this.p4Surf.opacity,
                target: this.p4Surf.render()
            }), t.push({
                transform: this.p5Surf.mtx,
                opacity: this.p5Surf.opacity,
                target: this.p5Surf.render()
            }), t.push({
                transform: this.p6Surf.mtx,
                opacity: this.p6Surf.opacity,
                target: this.p6Surf.render()
            }), t
        }, s.prototype.setP1 = function(t, i, e) {
            this.set(t, i, e, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, s.prototype.setP2 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, t, i, e, this.x3, this.y3, this.z3)
        }, s.prototype.setP3 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, e)
        }, s.prototype.set = function(t, i, e, s, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, s.prototype.getP1 = function() {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function() {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getP3 = function() {
            return [this.x3, this.y3, this.z3]
        }, s.prototype.getLength = function() {
            return this.length
        }, s.prototype.calculateTransform = function() {
            var t = 0,
                i = 0,
                e = 0,
                s = 0,
                o = 0,
                h = 0,
                u = 0,
                c = 0,
                p = 0,
                l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2),
                d = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3),
                f = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3),
                m = 0,
                g = 0,
                y = 0,
                _ = 0,
                v = 0;
            l > d ? l > f ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, c = this.y3, p = this.z3, g = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, g = f) : d > f ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, c = this.y2, p = this.z2, g = d) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, g = f);
            var b = new a(t, i, e),
                S = new a(s, o, h),
                w = new a(u, c, p),
                x = new a(t + s, i + o, e + h);
            x.mult(.5, x), this.p5Surf.mtx = n.translate(x.x, x.y, x.z), this.p1Surf.mtx = n.move(n.identity, b.toArray()), this.p2Surf.mtx = n.move(n.identity, S.toArray()), this.p3Surf.mtx = n.move(n.identity, w.toArray());
            var T = new a(t + s + u, i + o + c, e + h + p);
            T.mult(1 / 3, T);
            var z = new a;
            z.add(S).sub(b, z);
            var M = new a;
            M.add(w).sub(S, M);
            var C = new a;
            C.add(w).sub(b, C);
            var P = new a;
            z.cross(M, P);
            var k = this.xAxis.dot(P),
                O = this.yAxis.dot(P),
                I = this.zAxis.dot(P);
            console.log(k, O, I), 0 > I && (b = new a(s, o, h), S = new a(t, i, e), z = new a, z.add(S).sub(b, z), M = new a, M.add(w).sub(S, M), C = new a, C.add(w).sub(b, C), P = new a, z.cross(M, P)), k = this.xAxis.dot(P), O = this.yAxis.dot(P), I = this.zAxis.dot(P), this.p1Surf.mtx = n.move(n.identity, b.toArray()), this.p2Surf.mtx = n.move(n.identity, S.toArray()), this.p3Surf.mtx = n.move(n.identity, w.toArray()), console.log(k, O, I);
            var E = new a;
            E.add(b).sub(x, E), this.line5.set(x.x, x.y, x.z, x.x + E.x, x.y + E.y, x.z + E.z), m = .5 * P.norm(), y = 2 * m / g;
            var N = new a;
            N = E.cross(P, N), N.normalize(y / 2, N), this.line6.set(x.x, x.y, x.z, x.x + N.x, x.y + N.y, x.z + N.z);
            var D = new a(x.x + N.x, x.y + N.y, x.z + N.z);
            this.p6Surf.mtx = n.translate(D.x, D.y, D.z);
            var A = Math.asin(y / C.getLength()),
                F = Math.asin(y / M.getLength());
            _ = y / Math.tan(F) / g, v = y / Math.tan(A) / g, P.normalize(150, P), this.line4.set(T.x, T.y, T.z, T.x + P.x, T.y + P.y, T.z + P.z), this.p4Surf.mtx = n.translate(T.x, T.y, T.z);
            var R = (Math.acos(z.dot(M) / (z.norm() * M.norm())), Math.atan2(P.x, Math.sqrt(P.z * P.z + P.y * P.y))),
                B = Math.atan2(-P.y, P.z);
            this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * v + "px solid transparent",
                "border-left": this.size * _ + "px solid transparent",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            });
            var q = T.x - (T.x - D.x),
                U = T.y - (T.y - D.y),
                L = T.z - (T.z - D.z);
            this.line1.setLineWidth(10), this.line1.set(0, 0, 0, T.x, T.y, T.z), this.mtx = n.scale(this.invSize * g, this.invSize * y, 1), this.mtx = n.multiply(this.mtx, n.rotateZ(0), n.rotate(B, R, 0)), this.mtx = n.move(this.mtx, [q, U, L])
        }, e.exports = s
    }), define("famous-generative/Triangle3DOLD", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector", "famous-generative/Line"], function(t, i, e) {
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o([this.size, this.size]), this.surface.addClass("Triangle3D"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid red",
                "border-left": .5 * this.size + "px solid blue",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this.normal = new h({
                width: 4,
                opacity: 1
            }), this.line1 = new h({
                width: 4,
                opacity: 1
            }), this.line2 = new h({
                width: 4,
                opacity: 1
            }), this.line3 = new h({
                width: 4,
                opacity: 1
            }), this.line4 = new h({
                width: 4,
                opacity: 1
            }), this.line5 = new h({
                width: 4,
                opacity: 1
            }), this.line6 = new h({
                width: 4,
                opacity: 1
            }), this.normal.setColor(255, 0, 0, 1), this.line1.setColor(255, 255, 0, 1), this.line2.setColor(255, 0, 255, 1), this.line3.setColor(0, 255, 255, 1), this.line4.setColor(255, 0, 0, 1), this.line5.setColor(0, 0, 0, 1), this.line5.setColor(0, 0, 0, 1);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var e = .75,
                s = 30;
            this.p1Surf = new o([s, s]), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(s)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">1</p>'), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = e, this.p2Surf = new o([s, s]), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(s)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">2</p>'), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = e, this.p3Surf = new o([s, s]), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(s)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">3</p>'), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = e, this.p4Surf = new o([s, s]), this.p4Surf.setProperties(r.backgroundColor(255, 0, 0, 1)), this.p4Surf.setProperties(r.borderRadius(s)), this.p4Surf.setContent('<p class="triangleIndex" style="' + i + '">C</p>'), this.p4Surf.mtx = n.identity, this.p4Surf.opacity = e, this.p5Surf = new o([s, s]), this.p5Surf.setProperties(r.backgroundColor(0, 255, 0, 1)), this.p5Surf.setProperties(r.borderRadius(s)), this.p5Surf.setContent('<p class="triangleIndex" style="' + i + '">M</p>'), this.p5Surf.mtx = n.identity, this.p5Surf.opacity = e, this.p6Surf = new o([s, s]), this.p6Surf.setProperties(r.backgroundColor(0, 0, 255, 1)), this.p6Surf.setProperties(r.borderRadius(s)), this.p6Surf.setContent('<p class="triangleIndex" style="' + i + '">V</p>'), this.p6Surf.mtx = n.identity, this.p6Surf.opacity = e, this.calculateTransform()
        }
        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils"),
            a = (t("famous/RenderNode"), t("famous-math/Quaternion"), t("famous-math/Vector")),
            h = t("famous-generative/Line");
        s.prototype.setProperties = function(t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function(t, i, e, s) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(e)), this.opacity = s, this.surface.setProperties({
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this
        }, s.prototype.setOpacity = function(t) {
            return this.opacity = t, this
        }, s.prototype.render = function() {
            var t = [{
                transform: this.mtx,
                opacity: this.opacity,
                target: this.surface.render()
            }];
            return t.push(this.normal.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push(this.line3.render()), t.push(this.line4.render()), t.push(this.line5.render()), t.push(this.line6.render()), t.push({
                transform: this.p1Surf.mtx,
                opacity: this.p1Surf.opacity,
                target: this.p1Surf.render()
            }), t.push({
                transform: this.p2Surf.mtx,
                opacity: this.p2Surf.opacity,
                target: this.p2Surf.render()
            }), t.push({
                transform: this.p3Surf.mtx,
                opacity: this.p3Surf.opacity,
                target: this.p3Surf.render()
            }), t.push({
                transform: this.p4Surf.mtx,
                opacity: this.p4Surf.opacity,
                target: this.p4Surf.render()
            }), t.push({
                transform: this.p5Surf.mtx,
                opacity: this.p5Surf.opacity,
                target: this.p5Surf.render()
            }), t.push({
                transform: this.p6Surf.mtx,
                opacity: this.p6Surf.opacity,
                target: this.p6Surf.render()
            }), t
        }, s.prototype.setP1 = function(t, i, e) {
            this.set(t, i, e, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, s.prototype.setP2 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, t, i, e, this.x3, this.y3, this.z3)
        }, s.prototype.setP3 = function(t, i, e) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, e)
        }, s.prototype.set = function(t, i, e, s, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, s.prototype.getP1 = function() {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function() {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getP3 = function() {
            return [this.x3, this.y3, this.z3]
        }, s.prototype.getLength = function() {
            return this.length
        }, s.prototype.calculateTransform = function() {
            var t = 0,
                i = 0,
                e = 0,
                s = 0,
                o = 0,
                h = 0,
                u = 0,
                c = 0,
                p = 0,
                l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2),
                d = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3),
                f = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3),
                m = 0,
                g = 0,
                y = 0,
                _ = 0,
                v = 0;
            if (l > d ? l > f ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, c = this.y3, p = this.z3, g = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, g = f) : d > f ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, c = this.y2, p = this.z2, g = d) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, c = this.y1, p = this.z1, g = f), s >= t) {
                var b = t,
                    S = i,
                    w = e;
                t = s, i = o, e = h, s = b, o = S, h = w
            }
            var x = new a(t, i, e),
                T = new a(s, o, h),
                z = new a(u, c, p),
                M = new a(t + s, i + o, e + h);
            M.mult(.5, M);
            var C = new a;
            C.add(x).sub(M, C), this.line5.set(M.x, M.y, M.z, M.x + C.x, M.y + C.y, M.z + C.z), this.p5Surf.mtx = n.translate(M.x, M.y, M.z), this.p1Surf.mtx = n.move(n.identity, [t, i, e]), this.p2Surf.mtx = n.move(n.identity, [s, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, c, p]);
            var P = new a(t + s + u, i + o + c, e + h + p);
            P.mult(1 / 3, P);
            var k = new a;
            k.add(T).sub(x, k);
            var O = new a;
            O.add(z).sub(T, O);
            var I = new a;
            I.add(z).sub(x, I);
            var E = new a;
            k.cross(O, E), m = .5 * E.norm(), y = 2 * m / g;
            var N = new a;
            N = C.cross(E, N), N.normalize(y / 2, N), this.line6.set(M.x, M.y, M.z, M.x + N.x, M.y + N.y, M.z + N.z);
            var D = new a(M.x + N.x, M.y + N.y, M.z + N.z);
            this.p6Surf.mtx = n.translate(D.x, D.y, D.z);
            var A = Math.asin(y / I.getLength()),
                F = Math.asin(y / O.getLength()),
                _ = y / Math.tan(F) / g,
                v = y / Math.tan(A) / g;
            E.normalize(150, E), this.line4.set(P.x, P.y, P.z, P.x + E.x, P.y + E.y, P.z + E.z), this.p4Surf.mtx = n.translate(P.x, P.y, P.z);
            var R = Math.acos(k.dot(O) / (k.norm() * O.norm())),
                B = Math.atan2(E.x, Math.sqrt(E.z * E.z + E.y * E.y)),
                q = Math.atan2(-E.y, E.z);
            this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * v + "px solid red",
                "border-left": this.size * _ + "px solid green",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            });
            var U = P.x - (P.x - D.x),
                L = P.y - (P.y - D.y),
                G = P.z - (P.z - D.z);
            this.line1.setLineWidth(10), this.line1.set(0, 0, 0, P.x, P.y, P.z), this.mtx = n.scale(this.invSize * g, this.invSize * y, 1), this.mtx = n.multiply(this.mtx, n.rotateZ(-R + .5 * Math.PI), n.rotate(q, B, 0)), this.mtx = n.move(this.mtx, [U, L, G])
        }, e.exports = s
    }), define("famous-modifiers/Camera", ["require", "exports", "module", "famous/Transitionable", "famous/Matrix", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this._renderMatrix = r.identity, this._scaleState = new n([1, 1, 1]), this._skewState = new n([0, 0, 0]), this._rotateState = new n([0, 0, 0]), this._translateState = new n([0, 0, 0]), this._dirty = !1, t && this.lookAt(t)
        }

        function o() {
            var t = r.scale.apply(this, this._scaleState.get()),
                i = r.skew.apply(this, this._skewState.get()),
                e = r.rotate.apply(this, this._rotateState.get()),
                s = r.move(r.multiply(t, i, e), this._translateState.get());
            return r.inverse(s)
        }
        var n = t("famous/Transitionable"),
            r = t("famous/Matrix"),
            a = t("famous/Utility");
        s.prototype.halt = function() {
            this._scaleState.halt(), this._skewState.halt(), this._rotateState.halt(), this._translateState.halt()
        }, s.prototype.getScale = function() {
            return this._scaleState.get()
        }, s.prototype.setScale = function(t, i, e) {
            return this._dirty = !0, this._scaleState.set(t, i, e)
        }, s.prototype.getSkew = function() {
            return this._skewState.get()
        }, s.prototype.setSkew = function(t, i, e) {
            return this._dirty = !0, this._skewState.set(t, i, e)
        }, s.prototype.getRotation = function() {
            return this._rotateState.get()
        }, s.prototype.setRotation = function(t, i, e) {
            return this._dirty = !0, this._rotateState.set(t, i, e)
        }, s.prototype.getSpin = s.prototype.getRotation, s.prototype.setSpin = s.prototype.setRotation, s.prototype.getPos = function() {
            return this._translateState.get()
        }, s.prototype.setPos = function(t, i, e) {
            return this._dirty = !0, this._translateState.set(t, i, e)
        }, s.prototype.lookAt = function(t, i, e) {
            var s = void 0;
            e && (s = a.after(4, e)), this.halt();
            var o = r.interpret(t);
            this.setScale(o.scale, i, s), this.setSkew(o.skew, i, s), this.setRotation(o.rotate, i, s), this.setPos(o.translate, i, s)
        }, s.prototype.render = function(t) {
            return this._dirty |= this._scaleState.isActive() || this._skewState.isActive() || this._rotateState.isActive() || this._translateState.isActive(), this._dirty && (this._renderMatrix = o.call(this), this._dirty = !1), {
                transform: this._renderMatrix,
                group: !0,
                target: t
            }
        }, e.exports = s
    }), define("famous-modifiers/Swappable", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier"], function(t, i, e) {
        function s(t) {
            this.options = {
                initTransform: h.identity,
                initOpacity: 0,
                finalTransform: h.identity,
                finalOpacity: 0,
                inTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                outTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                async: !1
            }, this.nodes = {}, this.transforms = [], this.currIndex = -1, this.prevIndex = -1, this.setOptions(t)
        }

        function o(t, i, e, s, o, n, r) {
            if (t in this.nodes) {
                var a = this.nodes[t].get();
                a.isMoving() || (i && a.setTransform(i), void 0 !== e && a.setOpacity(e)), a.setTransform(s, n), a.setOpacity(o, n, r)
            }
        }

        function n(t, i) {
            o.call(this, t, this.options.initTransform, this.options.initOpacity, h.identity, 1, this.options.inTransition, i)
        }

        function r(t, i) {
            o.call(this, t, void 0, void 0, this.options.finalTransform, this.options.finalOpacity, this.options.outTransition, i)
        }
        var a = t("famous/RenderNode"),
            h = t("famous/Matrix"),
            u = t("famous/Modifier");
        s.prototype.item = function(t) {
            var i = new a(new u(this.options.initTransform, this.options.initOpacity), !0);
            return this.nodes[t] = i, i
        }, s.prototype.select = function(t, i) {
            t != this.currIndex && (this.options.async ? r.call(this, this.currIndex, function() {
                n.call(this, this.currIndex, i)
            }.bind(this)) : (r.call(this, this.currIndex), n.call(this, t, i)), this.currIndex = t)
        }, s.prototype.setOptions = function(t) {
            for (var i in t) this.options[i] = t[i]
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.render = function() {
            var t = [];
            for (var i in this.nodes) t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }), define("famous-physics/constraints/Collision", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                restitution: .5
            }, t && this.setOpts(t), this.n = new n, this.vRel = new n, this.I = new n, this.disp = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i) {
            for (var e = i.p, s = i.r, o = i.v, n = this.n, r = this.I, a = this.vRel, h = this.disp, u = this.opts.restitution, c = 0; c < t.length; c++) {
                var p = t[c];
                if (i != p) {
                    var l = p.p,
                        d = p.r,
                        f = i.mInv;
                    h.set(e.sub(l));
                    var m = h.norm(),
                        g = s + d - m;
                    if (g > 0) {
                        var y = p.v,
                            _ = p.mInv;
                        n.set(h.normalize()), a.set(o.sub(y)), r.set(n.mult((1 + u) * a.dot(n) / (f + _))), o.sub(r.mult(f), o), e.add(n.mult(g / 2), e), y.add(r.mult(_), y), l.add(n.mult(-g / 2), l)
                    }
                }
            }
        }, e.exports = s
    }), define("famous-physics/constraints/CollisionJacobian", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                k: .5,
                restitution: .5
            }, t && this.setOpts(t), this.n = new n, this.pDiff = new n, this.vDiff = new n, this.impulse1 = new n, this.impulse2 = new n, this.slop = 0
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("famous-physics/math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.opts.k, o = this.n, n = this.pDiff, r = this.vDiff, a = this.impulse1, h = this.impulse2, u = i.v, c = i.p, p = i.mInv, l = i.r, d = i.restitution, f = 0; f < t.length; f++) {
                var m = t[f];
                if (m != i) {
                    var g = m.v,
                        y = m.p,
                        _ = m.mInv,
                        v = m.r,
                        b = m.restitution,
                        S = void 0 !== this.opts.restitution ? this.opts.restitution : Math.sqrt(d * b);
                    n.set(y.sub(c)), r.set(g.sub(u)), n.normalize(1, o);
                    var w = n.norm(),
                        x = w - (l + v),
                        T = 1 / (p + _),
                        z = 0;
                    if (0 > x) {
                        var M = x <= this.slop ? ((1 + S) * o.dot(r) + s / e * (x - this.slop)) / (z + e / T) : (1 + S) * o.dot(r) / (z + e / T);
                        o.mult(e * M).put(a), a.mult(-1).put(h), i.applyImpulse(a), m.applyImpulse(h), c.add(o.mult(x / 2), c), y.add(o.mult(-x / 2), y)
                    }
                }
            }
        }, e.exports = s
    }), define("famous-physics/constraints/Curve", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                f: function(t, i) {
                    return 100 * Math.sin(t / 100) - i
                },
                df: void 0,
                g: function(t, i, e) {
                    return e
                },
                dg: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.f, a = this.opts.df, h = this.opts.dg, u = 0, c = 0; c < t.length; c++) {
                var p = t[c],
                    l = p.v,
                    d = p.p,
                    f = p.m;
                if (0 == this.opts.period) var m = 0,
                    g = 1;
                else var y = 4 * f * Math.PI * this.opts.dampingRatio / this.opts.period,
                    _ = 4 * f * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                    m = 1 / (y + e * _),
                    g = e * _ / (y + e * _);
                if (void 0 === a) {
                    var v = 1e-7,
                        b = n(d.x, d.y, d.z),
                        S = (n(d.x + v, d.y, d.z) - b) / v,
                        w = (n(d.x, d.y + v, d.z) - b) / v,
                        x = (n(d.x, d.y, d.z + v) - b) / v,
                        T = r(d.x, d.y, d.z),
                        z = (r(d.x + v, d.y, d.z) - T) / v,
                        M = (r(d.x, d.y + v, d.z) - T) / v,
                        C = (r(d.x, d.y, d.z + v) - T) / v;
                    o.setXYZ(S + z, w + M, x + C)
                } else {
                    var P = a(d.x, d.y, d.z),
                        k = h(d.x, d.y, d.z);
                    o.setXYZ(P[0] + k[0], P[1] + k[1], P[2] + k[2])
                }
                var O = g / e * (n(d.x, d.y, d.z) + r(d.x, d.y, d.z)),
                    I = -(o.dot(l) + O) / (m + e * o.normSquared() / f);
                s.set(o.mult(e * I)), p.applyImpulse(s), u += Math.abs(I)
            }
            return u
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Distance", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.n,
                o = this.diffP,
                n = this.diffV,
                r = this.impulse;
            if (i) var a = i.p,
                h = i.mInv,
                u = i.v;
            else var a = this.opts.anchor,
                h = 0;
            for (var c = this.opts.length, p = 0, l = 0; l < t.length; l++) {
                var d = t[l],
                    f = d.v,
                    m = d.p,
                    g = d.mInv;
                o.set(m.sub(a)), s.set(o.normalize());
                var y = o.norm() - c;
                n.set(i ? f.sub(u) : f);
                var _ = 1 / (g + h);
                if (0 == this.opts.period) var v = 0,
                    b = 1;
                else var S = 4 * _ * Math.PI * this.opts.dampingRatio / this.opts.period,
                    w = 4 * _ * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                    v = 1 / (S + e * w),
                    b = e * w / (S + e * w);
                var x = b / e * y,
                    T = -(s.dot(n) + x) / (v + e / _);
                r.set(s.mult(e * T)), d.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), p += Math.abs(T)
            }
            return p
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Distance1D", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s, o, n = this.impulse;
            if (i) var r = i.p.x,
                a = i.mInv,
                h = i.v.x;
            else var r = this.opts.anchor,
                a = 0;
            for (var u = this.opts.length, c = this.opts.period, p = this.opts.dampingRatio, l = 0, d = 0; d < t.length; d++) {
                var f = t[d],
                    m = f.v.x,
                    g = f.p.x,
                    y = f.mInv;
                s = g - r;
                var _ = s - u;
                o = i ? m - h : m;
                var v = 1 / (y + a);
                if (0 == c) var b = 0,
                    S = 1;
                else var w = 4 * v * Math.PI * p / c,
                    x = 4 * v * Math.PI * Math.PI / (c * c),
                    b = 1 / (w + e * x),
                    S = e * x / (w + e * x);
                var T = S / e * _,
                    z = -(o + T) / (b + e / v);
                n.setXYZ(e * z, 0, 0), f.applyImpulse(n), i && i.applyImpulse(n.mult(-1)), l += Math.abs(z)
            }
            return l
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Rod", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                stiffness: 1
            }, t && this.setOpts(t), this.disp = new n, this.push = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.opts,
                o = this.disp,
                n = this.push,
                r = s.length,
                a = s.stiffness,
                h = s.anchor || i.p,
                u = t[0],
                c = u.p;
            o.set(c.sub(h));
            var p = o.norm(),
                l = (r - p) / p;
            Math.abs(l) > 0 && (o.mult(.5 * l * a, n), u.immunity || (c.add(n, c), u.v.add(n.div(e), u.v)), i && !i.immunity && (i.p.sub(n, i.p), i.v.sub(n.div(e), i.v)))
        }, e.exports = s
    }), define("famous-physics/constraints/Rope", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.n,
                o = this.diffP,
                n = this.diffV,
                r = this.impulse;
            if (i) var a = i.p,
                h = i.mInv,
                u = i.v;
            else var a = this.opts.anchor,
                h = 0;
            for (var c = this.opts.length, p = 0, l = 0; l < t.length; l++) {
                var d = t[l],
                    f = d.v,
                    m = d.p,
                    g = d.mInv;
                o.set(m.sub(a));
                var y = o.norm() - c;
                if (0 > y) return;
                s.set(o.normalize()), n.set(i ? f.sub(u) : f);
                var _ = 1 / (g + h);
                if (0 == this.opts.period) var v = 0,
                    b = 1;
                else var S = 4 * _ * Math.PI * this.opts.dampingRatio / this.opts.period,
                    w = 4 * _ * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                    v = 1 / (S + e * w),
                    b = e * w / (S + e * w);
                var x = b / e * y,
                    T = -(s.dot(n) + x) / (v + e / _);
                r.set(s.mult(e * T)), d.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), p += Math.abs(T)
            }
            return p
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Surface", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                f: void 0,
                df: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n, this.eps = 1e-7
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.df, a = 0, h = 0; h < t.length; h++) {
                var u = t[h],
                    c = u.v,
                    p = u.p,
                    l = u.m;
                if (0 == this.opts.period) var d = 0,
                    f = 1;
                else var m = 4 * l * Math.PI * this.opts.dampingRatio / this.opts.period,
                    g = 4 * l * Math.PI * Math.PI / (this.opts.period * this.opts.period),
                    d = 1 / (m + e * g),
                    f = e * g / (m + e * g);
                if (void 0 === r) {
                    var y = this.eps,
                        _ = n(p.x, p.y, p.z),
                        v = (n(p.x + y, p.y, p.z) - _) / y,
                        b = (n(p.x, p.y + y, p.z) - _) / y,
                        S = (n(p.x, p.y, p.z + y) - _) / y;
                    o.setXYZ(v, b, S)
                } else o.setXYZ.apply(o, r(p.x, p.y, p.z));
                var w = f / e * n(p.x, p.y, p.z),
                    x = -(o.dot(c) + w) / (d + e * o.normSquared() / l);
                s.set(o.mult(e * x)), u.applyImpulse(s), a += Math.abs(x)
            }
            return a
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Walls", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector", "famous-physics/constraints/Wall"], function(t, i, e) {
        function s(t) {
            this.opts = {
                sides: [s.SIDES.LEFT, s.SIDES.RIGHT, s.SIDES.TOP, s.SIDES.BOTTOM],
                size: [window.innerWidth, window.innerHeight, 0],
                origin: [.5, .5, .5],
                k: 0,
                restitution: .5,
                onContact: s.ON_CONTACT.REFLECT
            }, this.setSize(this.opts.size, this.opts.origin), this.setOptsForEach({
                restitution: this.opts.restitution,
                k: this.opts.k
            }), t && this.setOpts(t)
        }
        var o = t("famous-physics/constraints/Constraint"),
            n = t("famous-physics/math/Vector"),
            r = t("famous-physics/constraints/Wall");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.SIDES = {
            LEFT: new r({
                n: new n(1, 0, 0)
            }),
            RIGHT: new r({
                n: new n(-1, 0, 0)
            }),
            TOP: new r({
                n: new n(0, 1, 0)
            }),
            BOTTOM: new r({
                n: new n(0, -1, 0)
            }),
            FRONT: new r({
                n: new n(0, 0, 1)
            }),
            BACK: new r({
                n: new n(0, 0, -1)
            })
        }, s.ON_CONTACT = r.ON_CONTACT, s.prototype.setOpts = function(t) {
            var i = !1;
            void 0 !== t.restitution && this.setOptsForEach({
                restitution: t.restitution
            }), void 0 !== t.k && this.setOptsForEach({
                k: t.k
            }), void 0 !== t.size && (this.opts.size = t.size, i = !0), void 0 !== t.sides && (this.opts.sides = t.sides), void 0 !== t.onContact && (this.opts.onContact = t.onContact, this.setOnContact(t.onContact)), void 0 !== t.origin && (this.opts.origin = t.origin, i = !0), i && this.setSize(this.opts.size, this.opts.origin)
        }, s.prototype.setSize = function(t, i) {
            i = i || this.opts.origin, i.length < 3 && (i[2] = .5), s.SIDES.LEFT.setOpts({
                d: t[0] * i[0]
            }), s.SIDES.TOP.setOpts({
                d: t[1] * i[1]
            }), s.SIDES.FRONT.setOpts({
                d: t[2] * i[2]
            }), s.SIDES.RIGHT.setOpts({
                d: t[0] * (1 - i[0])
            }), s.SIDES.BOTTOM.setOpts({
                d: t[1] * (1 - i[1])
            }), s.SIDES.BACK.setOpts({
                d: t[2] * (1 - i[2])
            }), this.opts.size = t, this.opts.origin = i
        }, s.prototype.setOptsForEach = function(t) {
            this.forEachWall(function(i) {
                i.setOpts(t)
            });
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.setOnContact = function(t) {
            switch (this.forEachWall(function(i) {
                i.setOpts({
                    onContact: t
                })
            }), t) {
                case s.ON_CONTACT.REFLECT:
                    break;
                case s.ON_CONTACT.WRAP:
                    this.forEachWall(function(i) {
                        i.setOpts({
                            onContact: t
                        }), i.on("wrap", function(t) {
                            var e = t.particle,
                                o = i.opts.n,
                                n = i.opts.d;
                            switch (i) {
                                case s.SIDES.RIGHT:
                                    var r = s.SIDES.LEFT.opts.d;
                                    break;
                                case s.SIDES.LEFT:
                                    var r = s.SIDES.TOP.opts.d;
                                    break;
                                case s.SIDES.TOP:
                                    var r = s.SIDES.BOTTOM.opts.d;
                                    break;
                                case s.SIDES.BOTTOM:
                                    var r = s.SIDES.TOP.opts.d
                            }
                            e.p.add(o.mult(n + r), e.p)
                        })
                    });
                    break;
                case s.ON_CONTACT.ABSORB:
            }
        }, s.prototype.applyConstraint = function(t, i, e) {
            this.forEachWall(function(s) {
                s.applyConstraint(t, i, e)
            })
        }, s.prototype.forEachWall = function(t) {
            for (var i = 0; i < this.opts.sides.length; i++) t(this.opts.sides[i])
        }, s.prototype.rotateZ = function(t) {
            this.forEachWall(function(i) {
                var e = i.opts.n;
                e.rotateZ(t, e)
            })
        }, e.exports = s
    }), define("famous-physics/math/matrix", ["require", "exports", "module"], function(require, exports, module) {
        function Matrix(t, i, e, s) {
            this.nRows = t, this.nCols = i, this.values = e || [
                []
            ], s && this.loop(s)
        }
        Matrix.prototype = {
            loop: function(t) {
                for (var i = this.values, e = 0; e < this.nRows; e++) {
                    i[e] = [];
                    for (var s = 0; s < this.nCols; s++) i[e][s] = t(e, s)
                }
                return this
            },
            set: function(t) {
                return this.values = t, this
            },
            create: function(t) {
                return this.loop(t)
            },
            identity: function() {
                return this.loop(function(t, i) {
                    return t == i ? 1 : 0
                })
            },
            print: function() {
                for (var row = 0; row < this.nRows; row++) {
                    for (var str = "console.log(", col = 0; col < this.nCols; col++) str += "this.values[" + row + "][" + col + "].toFixed(1)", col < this.nCols - 1 && (str += ",");
                    str += ")", eval(str)
                }
            },
            rightMult: function(t, i) {
                t.nRows != this.nCols && console.warn("cant multiply");
                for (var e = this.values, s = t.values, o = this.nRows, n = t.nCols, r = [], a = 0; o > a; a++) {
                    r[a] = [];
                    for (var h = 0; n > h; h++) {
                        for (var u = 0, c = 0; c < this.nCols; c++) u += e[a][c] * s[c][h];
                        r[a][h] = u
                    }
                }
                return i ? i.set(r) : new Matrix(o, n).set(r)
            },
            vMult: function(t) {
                for (var i = t.length, e = [], s = 0; s < this.nRows; s++) {
                    for (var o = 0, n = 0; i > n; n++) o += this.values[s][n] * t[n];
                    e[s] = o
                }
                return e
            },
            diag: function(t) {
                var i = function(i, e) {
                    return i == e ? t[i] : 0
                };
                return this.loop(i)
            },
            transpose: function(t) {
                var i = function(t, i) {
                    return this.values[i][t]
                }.bind(this);
                return t ? t.loop(i) : new Matrix(this.nCols, this.nRows, [
                    []
                ], i)
            }
        }, module.exports = Matrix
    }), define("famous-physics/math/GaussSeidel", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            this.numIterations = t || 10, this.tolerance = i || 1e-7, this.prevX = [], this.x = []
        }

        function o() {
            for (var t = 0, i = this.x.length, e = 0; i > e; e++) t += Math.pow(this.prevX[e] - this.x[e], 2) / (this.x[e] * this.x[e]);
            return Math.sqrt(t)
        }
        s.prototype.solve = function(t, i) {
            for (var e, s = this.numIterations, n = i.length, r = this.x, a = this.prevX, h = 0; n > h; h++) this.x[h] = 0;
            for (var u = 0, c = 1 / 0; s > u && c > this.tolerance;) {
                for (var h = 0; n > h; h++) {
                    a[h] = r[h], e = 0;
                    for (var p = 0; n > p; p++) p != h && (e += t[h][p] * r[p]);
                    r[h] = (i[h] - e) / t[h][h]
                }
                c = o(), u++
            }
            return r
        }, e.exports = s
    }), define("famous-physics/constraints/joint", ["require", "exports", "module", "../math/matrix", "../math/GaussSeidel", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0
            }, t && this.setOpts(t);
            var i = 10,
                e = 1e-5;
            this.solver = new n(i, e)
        }
        var o = t("../math/matrix"),
            n = t("../math/GaussSeidel"),
            r = t("../math/vector");
        s.prototype.getPosition = function(t, i, e) {
            var s = 2,
                n = 1,
                a = [],
                h = [],
                u = [],
                c = [],
                p = [],
                l = t;
            a[0] = l.getVel(), h[0] = l.p, u[0] = l.mInv, c[0] = l.f, p[0] = l.m, a[1] = i.v, h[1] = i.p, u[1] = i.mInv, c[1] = i.f, p[1] = i.m;
            for (var d = [], f = 0; n > f; f++) {
                d[f] = [];
                for (var m = 0; s > m; m++) {
                    var g;
                    m == f ? g = h[f].sub(h[f + 1]) : m == f + 1 && (g = h[f + 1].sub(h[f])), d[f][3 * m + 0] = g.x, d[f][3 * m + 1] = g.y, d[f][3 * m + 2] = g.z
                }
            }
            var y = new o(n, 3 * s);
            y.set(d);
            for (var _ = [], f = 0; n > f; f++) {
                _[f] = [];
                for (var m = 0; s > m; m++) {
                    var g;
                    m == f ? g = a[f].sub(a[f + 1]) : m == f + 1 && (g = a[f + 1].sub(a[f])), _[f][3 * m + 0] = g.x, _[f][3 * m + 1] = g.y, _[f][3 * m + 2] = g.z
                }
            }
            for (var v = [], b = [], S = 0; s > S; S++) v[3 * S + 0] = u[S], v[3 * S + 1] = u[S], v[3 * S + 2] = u[S], b[3 * S + 0] = a[S].x, b[3 * S + 1] = a[S].y, b[3 * S + 2] = a[S].z;
            var w = new o(3 * s, 3 * s).diag(v),
                x = new o(n, n);
            y.rightMult(w).rightMult(y.transpose(), x);
            for (var T = y.vMult(b), z = 1, M = [], S = 0; n > S; S++) {
                var C = this.length,
                    P = h[S + 1].sub(h[S]).normSquared();
                M[S] = .5 * (P - C * C)
            }
            for (var k = [], O = 0; n > O; O++) k[O] = -T[O] - z / e * M[O];
            for (var I = this.solver.solve(x.values, k), E = y.transpose().vMult(I), N = [], S = 0; s > S; S++) N[S] = new r(E[3 * S + 0], E[3 * S + 1], E[3 * S + 2]);
            for (var S = 0; s > S; S++) {
                var b = a[S],
                    D = p[S],
                    A = N[S];
                (0 != S || 0 != l.id) && (1 == S && 0 == l.id ? b.add(A.sub(N[0]).div(D), b) : b.add(A.div(D), b))
            }
        }, s.prototype.getError = function() {}, e.exports = s
    }), define("famous-physics/forces/Repulsion", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: 1,
                anchor: void 0,
                radii: {
                    min: 0,
                    max: 1 / 0
                },
                cutoff: 0,
                cap: 1 / 0,
                decayFunction: s.DECAY_FUNCTIONS.GRAVITY
            }, t && this.setOpts(t), this.setOpts(t), this.disp = new n, o.call(this)
        }
        var o = t("famous-physics/forces/Force"),
            n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.DECAY_FUNCTIONS = {
            LINEAR: function(t, i) {
                return Math.max(1 - 1 / i * t, 0)
            },
            MORSE: function(t, i) {
                var e = 0 == i ? 100 : i,
                    s = t + e * (1 - Math.log(2));
                return Math.max(1 - Math.pow(1 - Math.exp(s / e - 1), 2), 0)
            },
            INVERSE: function(t, i) {
                return 1 / (1 - i + t)
            },
            GRAVITY: function(t, i) {
                return 1 / (1 - i + t * t)
            }
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyForce = function(t, i) {
            var e = this.opts,
                s = this.force,
                o = this.disp,
                n = e.strength,
                r = e.anchor || i.p,
                a = e.cap,
                h = e.cutoff,
                u = e.radii.max,
                c = e.radii.min,
                p = e.decayFunction;
            if (0 != n)
                for (var l in t) {
                    var d = t[l];
                    if (d != i) {
                        var f = d.m,
                            m = d.p;
                        o.set(m.sub(r));
                        var g = o.norm();
                        u > g && g > c && (o.normalize(n * f * p(g, h)).cap(a).put(s), d.applyForce(s))
                    }
                }
        }, e.exports = s
    }), define("famous-physics/forces/VectorField", ["require", "exports", "module", "famous-physics/forces/Force", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: 1,
                field: s.FIELDS.CONSTANT
            }, t && this.setOpts(t), this.setFieldOptions(this.opts.field), this.timeDependent = 3 == this.opts.field.length, this.tOrig = void 0, this.register = new n(0, 0, 0), o.call(this)
        }
        var o = t("famous-physics/forces/Force"),
            n = t("../math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FIELDS = {
            CONSTANT: function(t, i) {
                return t.set(i.direction)
            },
            LINEAR: function(t, i) {
                return t.mult(i.k, t)
            },
            RADIAL_GRAVITY: function(t) {
                return t.mult(-1, t)
            },
            SPHERE_ATTRACTOR: function(t, i) {
                return t.mult((i.radius - t.norm()) / t.norm(), t)
            },
            POINT_ATTRACTOR: function(t, i) {
                return t.set(i.p.sub(t))
            }
        }, s.prototype.setOpts = function(t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.evaluate = function(t, i) {
            return this.register.set(t), this.opts.field(this.register, this.opts, i)
        }, s.prototype.applyForce = function(t) {
            var i, e = this.force;
            this.timeDependent ? (this.tOrig && (this.tOrig = Date.now()), i = .001 * (Date.now() - this.tOrig)) : i = void 0;
            for (var s = 0; s < t.length; s++) {
                var o = t[s];
                e.set(this.evaluate(o.p, i).mult(o.m * this.opts.strength)), o.applyForce(e)
            }
        }, s.prototype.setFieldOptions = function(t) {
            var i = s.FIELDS;
            switch (t) {
                case i.CONSTANT:
                    this.opts.direction || (this.opts.direction = new n(0, 1, 0));
                    break;
                case i.POINT_ATTRACTOR:
                    this.opts.p || (this.opts.p = new n(0, 0, 0));
                    break;
                case i.SPHERE_ATTRACTOR:
                    this.opts.radius || (this.opts.radius = 1);
                    break;
                case i.LINEAR:
                    this.opts.k || (this.opts.k = 1)
            }
        }, e.exports = s
    }), define("famous-physics/integrator/verlet", ["require", "exports", "module", "../math/vector"], function(t, i, e) {
        function s(t) {
            t = t || {}, this.vCap = t.vCap || 1 / 0, this.aCap = t.aCap || 1 / 0, this.drag = t.drag || 1, this.diff = new o, this.pOldCopy = new o, this.dragVector = new o
        }
        var o = t("../math/vector");
        s.prototype.integrate = function(t, i, e) {
            var s = t.pOld,
                o = t.p,
                n = t.a;
            if (this.diff.set(o.sub(s)), e) {
                var r = t.v;
                t.hasImmunity("velocity") || r.add(n.mult(.5 * i), r), t.hasImmunity("position") || (s.set(o), o.add(r.mult(i), o))
            } else this.pOldCopy.set(s), t.hasImmunity("position") || (this.dragVector.set(this.diff.mult(this.drag)), s.set(o), o.add(n.mult(i * i), o), o.add(this.dragVector, o))
        }, s.prototype.integrateVelocity = function(t, i, e) {
            var s = t.p,
                o = t.a;
            if (e) {
                var n = t.v;
                n.add(o.mult(.5 * i), n), s.add(n.mult(i), s)
            } else s.add(o.mult(i * i), s)
        }, s.prototype.integratePosition = function(t) {
            var i = t.p,
                e = t.pOld,
                s = this.pOldCopy;
            s.set(e), e.set(i), i.add(i.sub(s).mult(this.drag), i)
        }, e.exports = s
    }), define("famous-physics/math/Random", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            return t + Math.random() * (i - t)
        }

        function o(t, i) {
            return Math.floor(t + Math.random() * (i - t + 1))
        }
        e.exports = {
            integer: function(t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var s = [], n = 0; e > n; n++) s.push(o(t, i));
                    return s
                }
                return o(t, i)
            },
            range: function(t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var o = [], n = 0; e > n; n++) o.push(s(t, i));
                    return o
                }
                return s(t, i)
            },
            sign: function(t) {
                return t = void 0 !== t ? t : .5, Math.random() < t ? 1 : -1
            },
            bool: function(t) {
                return t = void 0 !== t ? t : .5, Math.random() < t
            }
        }
    }), define("famous-physics/math/vectorArray", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return this.v = t instanceof Array ? t.splice(0) : t instanceof s ? t.v : [t || 0, i || 0, e || 0], this
        }
        s.prototype.add = function(t, i) {
            i = i || this.register;
            var e = this.v,
                s = t.v;
            return i.setXYZ(e[0] + s[0], e[1] + s[1], e[2] + s[2])
        }, s.prototype.sub = function(t, i) {
            i = i || this.register;
            var e = this.v,
                s = t.v;
            return i.setXYZ(e[0] - s[0], e[1] - s[1], e[2] - s[2])
        }, s.prototype.mult = function(t, i) {
            i = i || this.register;
            var e = this.v;
            return i.setXYZ(t * e[0], t * e[1], t * e[2])
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            var e = this.v,
                s = t.v;
            return i = i || this.register, i.setXYZ(e[1] * s[2] - e[2] * s[1], e[2] * s[0] - e[0] * s[2], e[0] * s[1] - e[1] * s[0])
        }, s.prototype.rotate = function(t, i, e, s) {
            return this.rotateX(t, s).rotateY(i, s).rotateZ(e, s)
        }, s.prototype.rotateX = function(t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(s, -n * a + o * r, n * r - o * a)
        }, s.prototype.rotateY = function(t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-n * a + s * r, o, n * r + s * a)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-o * a + s * r, o * r + s * a, n)
        }, s.prototype.dot = function(t) {
            var i = this.v,
                e = t.v;
            return i[0] * e[0] + i[1] * e[1] + i[2] * e[2]
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = t || 1, i = i || this.register;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this.v)
        }, s.prototype.isZero = function() {
            var t = this.v;
            return !t[0] && !t[1] && !t[2]
        }, s.prototype.get = function() {
            return this.v
        }, s.prototype.set = function(t) {
            var i = t.v,
                e = this.v;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], this != this.register && this.register.clear(), this
        }, s.prototype.setXYZ = function(t, i, e) {
            return this.register.clear(), this.v = [t, i, e], this
        }, s.prototype.clear = function() {
            this.v = [0, 0, 0]
        }, s.prototype.cap = function(t) {
            if (1 / 0 == t) return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, s.prototype.project = function(t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function(t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.register = new s(0, 0, 0), e.exports = s
    }), define("famous-physics/utils/PhysicsTransition2", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/forces/VectorField", "famous-physics/constraints/Wall", "famous-physics/math/Vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            t = t || 0, this.endState = t, this.prevState = void 0, this.direction = void 0, this.defaultDefinition = {
                transition: {
                    curve: {
                        v: 1,
                        thrust: 0
                    },
                    duration: 500
                },
                bounce: {
                    period: 0,
                    dampingRatio: 0
                },
                walls: !1
            }, this._anchor = new z(t, 0, 0), this.stageOneActive = !1, this.attachedSpring = void 0, this.attachedWall = void 0, this.attachedThrust = void 0, this.eventHandler = new M, this.eventHandler.on("initStageTwo", g.bind(this)), this.PE = new S, this.particle = this.PE.createBody({
                p: [t, 0, 0],
                v: [0, 0, 0]
            }), this.spring = new w({
                anchor: this._anchor
            }), this.thrust = new x({
                strength: 0,
                field: x.FIELDS.CONSTANT,
                direction: [1, 0, 0]
            }), this.wall = new T({
                restitution: .5,
                k: 0,
                n: new z(-1, 0, 0)
            })
        }

        function o() {
            return this.particle.p.x <= this.endState ? 1 : -1
        }

        function n(t) {
            this.direction = t
        }

        function r() {
            1 == this.stageOneActive && this.direction != o.call(this) && this.eventHandler.emit("initStageTwo")
        }

        function a(t) {
            var i, e, o = t.transition.duration,
                n = t.transition.curve;
            "string" == typeof n && (n = s.TRANSITIONS[n]), e = this.direction * n.v, i = this.direction * n.thrust;
            var r = this.endState - this.particle.p.x;
            if (0 == o) this.v = e || 0, this.a = 0;
            else {
                var a;
                0 == i ? a = r / (e * o) : (0 > e * e + 2 * i * r && console.warn("unphysical choices for (v,a), target cannot be reached"), a = r > 0 ? (-e + Math.sqrt(e * e + 2 * i * r)) / (i * o) : (-e - Math.sqrt(e * e + 2 * i * r)) / (i * o)), this.v = a * e, this.a = a * a * i
            }
            var h = t.bounce;
            "string" == typeof h && (h = s.BOUNCE[h]), this.spring.setOpts({
                period: h.period,
                dampingRatio: h.dampingRatio
            }), this.wallsActive = t.walls
        }

        function h(t) {
            this.prevState = this.endState, this.endState = t, n.call(this, o.call(this))
        }

        function u(t) {
            void 0 === this.attachedSpring && (this._anchor.x = t, this.attachedSpring = this.PE.attach(this.spring, this.particle))
        }

        function c() {
            void 0 !== this.attachedSpring && (this.PE.detach(this.attachedSpring, this.particle), this.attachedSpring = void 0)
        }

        function p(t, i) {
            this.wallsActive && (this.wall.setOpts({
                d: Math.abs(t),
                n: [-i, 0, 0]
            }), this.attachedWall = this.PE.attach(this.wall, this.particle))
        }

        function l() {
            void 0 !== this.attachedWall && (this.PE.detach(this.attachedWall, this.particle), this.attachedWall = void 0)
        }

        function d(t) {
            this.thrust.setOpts({
                strength: t
            }), this.attachedThrust = this.PE.attach(this.thrust, this.particle)
        }

        function f() {
            void 0 !== this.attachedThrust && (this.PE.detach(this.attachedThrust), this.attachedThrust = void 0)
        }

        function m() {
            this.stageOneActive = !0, c.call(this), f.call(this), l.call(this), d.call(this, this.a), y.call(this, this.v), C = Date.now()
        }

        function g() {
            console.log("Duration : ", Date.now() - C), this.stageOneActive = !1, f.call(this), _.call(this, this.endState), u.call(this, this.endState), p.call(this, this.endState, this.direction)
        }

        function y(t) {
            this.particle.v.x = t
        }

        function _(t) {
            this.particle.p.x = t
        }

        function v(t) {
            this.spring.setOpts({
                callback: t
            })
        }

        function b() {
            this.PE.step(), r.call(this)
        }
        var S = t("famous-physics/PhysicsEngine"),
            w = t("famous-physics/constraints/StiffSpring"),
            x = t("famous-physics/forces/VectorField"),
            T = t("famous-physics/constraints/Wall"),
            z = t("famous-physics/math/Vector"),
            M = t("famous/EventHandler");
        s.TRANSITIONS = {
            linear: {
                v: 1,
                thrust: 0
            },
            easeIn: {
                v: 0,
                thrust: 2
            },
            backIn: {
                v: -1,
                thrust: 2
            }
        }, s.BOUNCE = {
            none: {
                dampingRatio: 0,
                period: 0
            },
            low: {
                dampingRatio: .5,
                period: 300
            },
            medium: {
                dampingRatio: .3,
                period: 600
            },
            high: {
                dampingRatio: .1,
                period: 800
            }
        };
        var C;
        s.forceFunctions = w.forceFunctions, s.prototype.reset = function(t, i) {
            i = i || 0, t = t || 0, this.PE.detachAll(), _.call(this, t), y.call(this, i), v.call(this, void 0)
        }, s.prototype.set = function(t, i, e) {
            return i ? (h.call(this, t), a.call(this, i), v.call(this, e), void m.call(this)) : (this.reset(t), void(e && e()))
        }, s.prototype.get = function() {
            return b.call(this), this.particle.p.x
        }, s.prototype.getVelocity = function() {
            return b.call(this), this.particle.v.x
        }, s.prototype.getTarget = function() {
            return this.endState
        }, e.exports = s
    }), define("famous-physics/utils/SpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new f({
                anchor: this._anchor
            }), this.PE = new d, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                g > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), t.period < 150 && console.warn("period may be unstable, increase the period or use a stiff transition"), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * p.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function c() {
            return this.particle.p.x
        }

        function p() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }
        var d = t("famous-physics/PhysicsEngine"),
            f = t("famous-physics/forces/Spring"),
            m = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: .5,
            velocity: 0
        }, s.forceFunctions = f.forceFunctions;
        var g = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), void l.call(this, e)) : (this.reset(t), void(e && e()))
        }, e.exports = s
    }), define("famous-physics/utils/StiffSpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new f({
                anchor: this._anchor
            }), this.PE = new d, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                g > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * p.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function c() {
            return this.particle.p.x
        }

        function p() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }
        var d = t("famous-physics/PhysicsEngine"),
            f = t("famous-physics/constraints/StiffSpring"),
            m = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: .5,
            velocity: 0
        }, s.forceFunctions = f.forceFunctions;
        var g = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), void l.call(this, e)) : (this.reset(t), void(e && e()))
        }, e.exports = s
    }), define("famous-physics/utils/WallTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new g(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new f({
                anchor: this._anchor
            }), this.wall = new m, this.PE = new d, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle), this.PE.attach(this.wall, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                y > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), void 0 === t.restitution && (t.restitution = i.restitution), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), this.wall.setOpts({
                restitution: t.restitution
            }), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, this.wall.setOpts({
                d: Math.abs(t),
                n: [-i, 0, 0]
            }), u.call(this, i * p.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function c() {
            return this.particle.p.x
        }

        function p() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }
        var d = t("famous-physics/PhysicsEngine"),
            f = t("famous-physics/forces/Spring"),
            m = t("famous-physics/constraints/Wall"),
            g = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: 0,
            restitution: .4,
            velocity: 0
        }, s.forceFunctions = f.forceFunctions;
        var y = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), void l.call(this, e)) : (this.reset(t), void(e && e()))
        }, e.exports = s
    }), define("famous-scene/GLScene", ["require", "exports", "module", "famous/Engine", "famous/Surface", "famous/WebGLSurface", "famous/Matrix", "famous-utils/Utils", "./Scene"], function(t, i, e) {
        function s() {
            h.apply(this, arguments), this.gl = null, this.glReady = !1, this.glSurface = new n([this.width, this.height], {
                antialias: !0
            })
        }
        var o = t("famous/Engine"),
            n = (t("famous/Surface"), t("famous/WebGLSurface")),
            r = t("famous/Matrix"),
            a = t("famous-utils/Utils"),
            h = t("./Scene");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.prototype.bindEvents = function() {
            this.callbacks.prerender = this.__update.bind(this), this.callbacks.touchstart = this.touchstart.bind(this), this.callbacks.touchmove = this.touchmove.bind(this), this.callbacks.touchend = this.touchend.bind(this), this.callbacks.keypress = this.keypress.bind(this), this.callbacks.resize = this._resize.bind(this), this.callbacks.mousedown = this._mousedown.bind(this), this.callbacks.mousemove = this._mousemove.bind(this), this.callbacks.mouseover = this._mouseover.bind(this), this.callbacks.mouseup = this._mouseup.bind(this), this.callbacks.mouseout = this._mouseout.bind(this), this.callbacks.keydown = this.keydown.bind(this), this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++) o.on(t[i], this.callbacks[t[i]])
        }, s.prototype.setup = function() {}, s.prototype.__update = function() {
            this.initGL() && (o.unbind("prerender", this.callbacks.prerender), this.callbacks.prerender = this._update.bind(this), o.on("prerender", this.callbacks.prerender))
        }, s.prototype._update = function() {
            this.update(this.gl), this.draw(this.gl)
        }, s.prototype.update = function() {}, s.prototype.draw = function() {}, s.prototype.render = function() {
            return {
                transform: r.identity,
                opacity: 1,
                target: [this.glSurface.render(), this.node.render()]
            }
        }, s.prototype._resize = function(t) {
            var i = a.getDevicePixelRatio();
            this.width = a.getWidth(), this.height = a.getHeight(), this.glSurface.setSize([this.width, this.height]), this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i, this.resize(t)
        }, s.prototype.initGL = function() {
            var t = this.glSurface.getContext({
                antialias: !0
            });
            if (null != t) {
                this.gl = t;
                var i = a.getDevicePixelRatio();
                this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i, this.glReady = !0, this.setup(this.gl)
            }
            return this.glReady
        }, s.prototype.createShaderProgram = function(t, i) {
            var e = this.gl,
                s = this.initVertShader(t),
                o = this.initFragShader(i),
                n = e.createProgram();
            return e.attachShader(n, s), e.attachShader(n, o), e.linkProgram(n), e.getProgramParameter(n, e.LINK_STATUS) || alert("Could not initialise shaders"), n
        }, s.prototype.initFragShader = function(t) {
            var i = this.gl,
                e = i.createShader(i.FRAGMENT_SHADER);
            return i.shaderSource(e, t), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) ? e : (alert(i.getShaderInfoLog(e)), null)
        }, s.prototype.initVertShader = function(t) {
            var i = this.gl,
                e = i.createShader(i.VERTEX_SHADER);
            return i.shaderSource(e, t), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) ? e : (alert(i.getShaderInfoLog(e)), null)
        }, e.exports = s
    }), define("famous-sync/FastClick", ["require", "exports", "module"], function() {
        if (window.CustomEvent) {
            var t = 300,
                i = {};
            document.addEventListener("touchstart", function(t) {
                for (var e = Date.now(), s = 0; s < t.changedTouches.length; s++) {
                    var o = t.changedTouches[s];
                    i[o.identifier] = e
                }
            }), window.addEventListener("touchmove", function(t) {
                for (var e = 0; e < t.changedTouches.length; e++) {
                    var s = t.changedTouches[e];
                    delete i[s.identifier]
                }
            }), document.addEventListener("touchend", function(e) {
                for (var s = Date.now(), o = 0; o < e.changedTouches.length; o++) {
                    var n = e.changedTouches[o],
                        r = i[n.identifier];
                    if (r && t > s - r) {
                        e.preventDefault();
                        var a = new CustomEvent("click", {
                            bubbles: !0,
                            details: n
                        });
                        e.target.dispatchEvent(a)
                    }
                    delete i[n.identifier]
                }
            })
        }
    }), define("famous-sync/TwoFingerSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                scale: 1
            }, this.setOptions(i ? i : this.options), this.input = new o, this.output = new o, o.setInputHandler(this, this.input), o.setOutputHandler(this, this.output), this.touchAId = void 0, this.posA = void 0, this.timestampA = void 0, this.touchBId = void 0, this.posB = void 0, this.timestampB = void 0, this.input.on("touchstart", this.handleStart.bind(this)), this.input.on("touchmove", this.handleMove.bind(this)), this.input.on("touchend", this.handleEnd.bind(this)), this.input.on("touchcancel", this.handleEnd.bind(this))
        }
        var o = t("famous/EventHandler");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.handleStart = function(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i];
                this.touchAId ? this.touchBId || (this.touchBId = e.identifier, this.posB = [e.pageX, e.pageY], this.timestampB = Date.now(), this._startUpdate()) : (this.touchAId = e.identifier, this.posA = [e.pageX, e.pageY], this.timestampA = Date.now())
            }
        }, s.prototype.handleMove = function(t) {
            if (this.touchAId && this.touchBId) {
                for (var i, e = this.timestampA, s = this.timestampB, o = 0; o < t.changedTouches.length; o++) {
                    var n = t.changedTouches[o];
                    n.identifier == this.touchAId ? (this.posA = [n.pageX, n.pageY], this.timestampA = Date.now(), i = this.timestampA - e) : n.identifier == this.touchBId && (this.posB = [n.pageX, n.pageY], this.timestampB = Date.now(), i = this.timestampB - s)
                }
                i && this._moveUpdate(i)
            }
        }, s.prototype.handleEnd = function(t) {
            for (var i = this.targetGet(), e = this.options.scale, s = 0; s < t.changedTouches.length; s++) {
                var o = t.changedTouches[s];
                (o.identifier == this.touchAId || o.identifier == this.touchBId) && (this.touchAId && this.touchBId && this.output.emit("end", {
                    p: i,
                    v: e * this._vel,
                    touches: [this.touchAId, this.touchBId],
                    angle: this._angle
                }), this.touchAId = void 0, this.touchBId = void 0)
            }
        }, e.exports = s
    }), define("famous-sync/PinchSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            n.call(this, t, i), this._dist = void 0
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }
        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
            this._dist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._dist
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB),
                e = i - this._dist,
                s = e / t,
                n = this.targetGet(),
                r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._dist = i, this._vel = s
        }, e.exports = s
    }), define("famous-sync/RotateSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            n.call(this, t, i), this._angle = void 0
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.atan2(s, e)
        }
        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
            this._angle = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                angle: this._angle
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB),
                e = i - this._angle,
                s = e / t,
                n = this.targetGet(),
                r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                angle: i
            }), this._angle = i, this._vel = s
        }, e.exports = s
    }), define("famous-sync/ScaleSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            r.call(this, t, i), this._startDist = void 0, this._prevScale = void 0, this.input.on("pipe", n.bind(this))
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }

        function n() {
            this.touchAId = void 0, this.touchBId = void 0
        }
        var r = t("./TwoFingerSync");
        s.prototype = Object.create(r.prototype), s.prototype._startUpdate = function() {
            this._prevScale = 1, this._startDist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._startDist
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB),
                e = i / this._startDist,
                s = e - this._prevScale,
                n = s / t,
                r = this.targetGet(),
                a = this.options.scale;
            this.output.emit("update", {
                p: r + a * s,
                v: a * n,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._prevScale = e, this._vel = n
        }, e.exports = s
    }), define("famous-ui/Buttons/SpringButton", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous/View", "famous-physics/forces/Spring", "famous/Surface", "famous-physics/math/vector", "famous-utils/Utils"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.PE = new r, this.available = !0, this.anchor = this.PE.createParticle({
                p: this.options.pos,
                v: this.options.vel,
                immunity: !0
            }), this.particle = this.PE.createParticle({
                p: this.options.pos,
                v: this.options.vel
            }), this.spring = new h({
                period: this.options.springPeriod,
                dampingRatio: this.options.springDampingRatio,
                length: this.options.springLength,
                anchor: this.options.pos,
                callback: n.bind(this)
            }), this.PE.attach(this.spring, this.particle), this.surface = new u({
                size: this.options.size,
                content: this.options.content,
                classes: this.options.surfaceClasses,
                properties: this.options.surfaceProperties
            }), this.surface.pipe(this), this.on("click", o.bind(this))
        }

        function o() {
            this._addForce(this.options.clickForce)
        }

        function n() {
            this.options.limitTouches && (this.available = !0)
        }
        var r = t("famous-physics/PhysicsEngine"),
            a = t("famous/View"),
            h = t("famous-physics/forces/Spring"),
            u = t("famous/Surface"),
            c = (t("famous-physics/math/vector"), t("famous-utils/Utils"));
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: [200, 200],
            pos: [0, 0, 0],
            vel: [0, 0, 0],
            springPeriod: 200,
            springDampingRatio: .8,
            springLength: 0,
            content: "",
            surfaceProperties: {},
            surfaceClasses: [],
            limitTouches: !1,
            forceMult: [10, 10, 10],
            padding: 0,
            callbackTolerance: 1e-4,
            clickForce: [0, 0, -.005]
        }, s.prototype.setPeriod = function(t) {
            this.spring.setPeriod(t)
        }, s.prototype.setDamping = function(t) {
            this.spring.setDampingRatio(t)
        }, s.prototype.setCallbackTolerance = function(t) {
            this.spring.opts.callbackTolerance = t
        }, s.prototype.addForce = function(t) {
            var i = {
                x: 0,
                y: 0,
                z: 0
            };
            c.isArray(t) ? (i.x = t[0] * this.options.forceMult[0], i.y = t[1] * this.options.forceMult[1], i.z = t[2] * this.options.forceMult[2]) : (i.x = t.x * this.options.forceMult[0], i.y = t.y * this.options.forceMult[1], i.z = t.z * this.options.forceMult[2]), this.options.limitTouches ? this.available && (this.particle.applyForce(i), this.available = !1, this.emit("selection")) : (this.particle.applyForce(i), this.emit("selection"))
        }, s.prototype.render = function() {
            return this.PE.step(), {
                opacity: 1,
                transform: this.PE.getTransform(this.particle),
                target: this.surface.render()
            }
        }, e.exports = s
    }), define("famous-ui/Buttons/SpringButton.ui", ["require", "exports", "module", "./SpringButton"], function(t, i, e) {
        function s() {
            o.apply(this, arguments), this.autoUI = [{
                type: "label",
                uiOptions: {
                    content: "PHYSICS",
                    properties: {
                        "border-bottom": "1px solid #f2786f",
                        color: "#f2786f",
                        "font-size": "16px"
                    }
                }
            }, {
                option: "springPeriod",
                type: "slider",
                uiOptions: {
                    range: [100, 2e3],
                    name: "SPRING DURATION"
                }
            }, {
                option: "springPeriod",
                callback: this.setDamping,
                type: "slider",
                uiOptions: {
                    range: [.002, .8],
                    name: "SPRING DAMPING"
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "APPEARANCE",
                    properties: {
                        "border-bottom": "1px solid white",
                        color: "rgba( 255, 255, 255, 1 )",
                        "font-size": "16px"
                    }
                }
            }, {
                callback: this.setBackgroundColor,
                type: "colorPicker",
                uiOptions: {
                    name: "Background Color"
                }
            }, {
                callback: this.setBorderColor,
                type: "colorPicker",
                uiOptions: {
                    name: "Stroke Color"
                }
            }, {
                callback: this.setBorderRadius,
                type: "slider",
                uiOptions: {
                    range: [0, 100],
                    name: "BORDER RADIUS"
                }
            }]
        }
        var o = t("./SpringButton");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.setPeriod = function(t) {
            this.setOptions({
                period: t
            })
        }, s.prototype.setDamping = function(t) {
            this.setOptions({
                dampingRatio: t
            })
        }, s.prototype.setBackgroundColor = function(t) {
            this.surface.setProperties({
                "background-color": t.getCSSColor()
            })
        }, s.prototype.setBorderColor = function(t) {
            this.surface.setProperties({
                border: "1px solid " + t.getCSSColor()
            })
        }, s.prototype.setBorderRadius = function(t) {
            this.surface.setProperties({
                "border-radius": t + "px"
            })
        }, e.exports = s
    }), define("famous-utils/FormatTime", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            var e = t.toString().match(/(\d+)/g),
                s = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5], 0),
                r = new Date,
                a = .001 * (r.getTime() - s.getTime()),
                h = parseInt(a / 60, 10),
                u = parseInt(h / 60, 10),
                c = parseInt(u / 24, 10),
                p = o(s),
                l = 10,
                d = "";
            return 720 > h ? 60 > h ? 2 > h ? (d = "just now", l = 1, [d, l]) : 30 > h ? (d = h + " minutes ago", l = 2, [d, l]) : 40 > h ? (d = "about a half hour ago", l = 2, [d, l]) : 50 > h ? (d = "about 45 minutes ago", l = 3, [d, l]) : (d = "about an hour ago", l = 4, [d, l]) : (d = 1 == i ? p[6] + ":" + p[7] + p[8] : "earlier today at " + p[6] + ":" + p[7] + p[8], l = 5, [d, l]) : 1440 > h ? (d = "yesterday at " + p[6] + ":" + p[7] + p[8], l = 6, [d, l]) : c >= 1 && 2 >= c ? (d = "yesterday at " + p[6] + ":" + p[7] + p[8], l = 7, [d, l]) : 6 > c ? (d = p[0] + " at " + p[6] + ":" + p[7] + p[8], l = 8, [d, l]) : 30 > c ? (d = 1 == i ? p[3] + "/" + p[1] + " at " + p[6] + ":" + p[7] + p[8] : p[4] + " " + p[1] + p[2] + " around " + p[6] + p[8], l = 9, [d, l]) : (d = n(p, r), l = 10, [d, l])
        }

        function o(t) {
            var i = t.getDate(),
                e = t.getDay(),
                s = t.getMonth() + 1,
                o = t.getFullYear(),
                n = t.getHours(),
                r = t.getMinutes().toString(),
                a = 12 > n ? "am" : "pm";
            r.length < 2 && (r = "0" + r);
            var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                u = {
                    1: "st",
                    2: "nd",
                    3: "rd",
                    4: "th",
                    5: "th",
                    6: "th",
                    7: "th",
                    8: "th",
                    9: "th",
                    10: "th",
                    11: "th",
                    12: "th",
                    13: "th",
                    14: "th",
                    15: "th",
                    16: "th",
                    17: "th",
                    18: "th",
                    19: "th",
                    20: "th",
                    21: "st",
                    22: "nd",
                    23: "rd",
                    24: "th",
                    25: "th",
                    26: "th",
                    27: "th",
                    28: "th",
                    29: "th",
                    30: "th",
                    31: "st"
                },
                c = {
                    1: "Jan",
                    2: "Feb",
                    3: "Mar",
                    4: "April",
                    5: "May",
                    6: "June",
                    7: "July",
                    8: "Aug",
                    9: "Sep",
                    10: "Oct",
                    11: "Nov",
                    12: "Dec"
                };
            return 0 === n && (n = 12), n > 12 && (n -= 12), [h[e], i, u[i], s, c[s], o, n, r, a]
        }

        function n(t, i) {
            var e = (i ? i : new Date, i.getFullYear() === t[5] ? t[4] + " " + t[1] + t[2] : t[4] + " " + t[1] + t[2] + " " + t[5]);
            return e
        }
        e.exports = s
    }), define("famous-utils/NoiseImage", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            t || (t = [128, 128]), i || (i = 8), o.width = t[0], o.height = t[1];
            var s = i >> 1,
                r = o.width / i,
                a = i * i >> 1,
                h = 1 / s;
            u(e), n.fillRect(0, 0, t[0], t[1]), u(e);
            for (var c, p, l = 0; a > l; l++) Math.random() + .5 >> 0 && (p = l * h >> 0, c = l - s * p, n.fillRect(c * r, p * r, r, r), n.fillRect((i - (c + 1)) * r, p * r, r, r));
            var d = o.toDataURL("image/png");
            return d
        }
        var o = document.createElement("canvas"),
            n = o.getContext("2d"),
            r = function(t) {
                var i = 361 * Math.random() >> 0,
                    e = t ? 45 * t - (46 * Math.random() >> 0) : i;
                return e
            },
            a = function() {
                return 30 + 71 * Math.random() >> 0
            },
            h = function() {
                return 30 + 71 * Math.random() >> 0
            },
            u = function(t) {
                n.fillStyle = "hsl(" + r(t) + "," + a() + "%," + h() + "%)"
            };
        e.exports = {
            generate: s
        }
    }), define("famous-utils/TimeAgo", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            var i = Date.now(),
                e = i - t,
                s = 6e4,
                o = 60 * s,
                n = 24 * o;
            if (s > e) return "Just Now";
            if (o > e) {
                var r = ~~(e / s);
                return r + "m"
            }
            if (n > e) {
                var a = ~~(e / o);
                return a + "h"
            }
            var h = ~~(e / n);
            return h + "d"
        }
        e.exports = {
            parse: s
        }
    }), define("famous-views/Accordion", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/Modifier", "famous-animation/Easing"], function(t, i, e) {
        function s(t) {
            this.state = new n(0);
            var t = t || {};
            t.curve || (t.curve = r.inOutQuadNorm), t.duration || (t.duration = 500);
            var i = {
                curve: t.curve,
                duration: t.duration
            };
            this.options = {
                transition: i
            }, this.target = void 0, this._isOpen = !1
        }
        var o = t("famous/Matrix"),
            n = t("famous/Transitionable"),
            r = (t("famous/Modifier"), t("famous-animation/Easing"));
        s.prototype.render = function() {
            return this.state.get() ? {
                transform: o.translate(0, (this.state.get() - 1) * this.target.getSize()[1], 100 * (this.state.get() - 1)),
                target: this.target.render()
            } : void 0
        }, s.prototype.getSize = function() {
            var t = this.target.getSize();
            return [t[0], this.state.get() * t[1]]
        }, s.prototype.show = function(t) {
            this.target = t, this.open()
        }, s.prototype.setState = function(t, i, e) {
            this.state.halt(), this.state.set(t, i, e)
        }, s.prototype.open = function(t) {
            this._isOpen = !0, this.setState(1, this.options.transition, t)
        }, s.prototype.close = function(t) {
            this._isOpen = !1, this.setState(0, this.options.transition, t)
        }, s.prototype.toggle = function(t) {
            this._isOpen ? this.close(t) : this.open(t)
        }, e.exports = s
    }), define("famous-views/ControlSet", ["require", "exports", "module", "famous/EventHandler", "famous/Matrix"], function(t, i, e) {
        function s() {
            this.eventOutput = new o, o.setOutputHandler(this, this.eventOutput), this.controls = []
        }
        var o = t("famous/EventHandler"),
            n = t("famous/Matrix");
        s.prototype.include = function(t, i) {
            i.on("change", function(i) {
                this.eventOutput.emit(t, {
                    value: i.value
                })
            }.bind(this)), this.controls.push(i)
        }, s.prototype.render = function() {
            for (var t = [], i = 0, e = 0, s = 0; s < this.controls.length; s++) {
                var o = this.controls[s],
                    r = o.getSize();
                t.push({
                    transform: n.translate(0, i),
                    target: o.render()
                }), i += r[1], e = Math.max(e, r[0])
            }
            return {
                size: [e, i],
                target: t
            }
        }, e.exports = s
    }), define("famous-views/EnergyHelper", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            this.x = 0, this.v = 0, this.agents = [], this.featureSize = e ? e : .5, this.jitter = Math.min(1e-4, .1 * this.featureSize), this.minStepTime = 1, this.lastUpdateTime = Date.now(), this.atRest = !1, this.set(t, i)
        }
        s.drag = function(t) {
            return function(i, e, s) {
                return -t * e * e * s
            }
        }, s.friction = function(t) {
            return function(i, e, s) {
                return -t * Math.abs(e) * s
            }
        }, s.spring = function(t, i, e) {
            i || (i = 0), e || (e = 0);
            var s = 2 * e * Math.sqrt(i);
            return function(e, o, n) {
                var r = e - t,
                    a = r + o * n,
                    h = .5 * i * r * r,
                    u = .5 * i * a * a,
                    c = 0 > r / a ? h : u - h,
                    p = s * o * o * n;
                return -c - p
            }
        }, s.springFENE = function(t, i, e, o) {
            i || (i = 0), e || (e = 0), o || (o = 0);
            var n = 2 * e * Math.sqrt(i),
                r = s.spring(t, i, e),
                a = !1;
            return function(e, s, h) {
                var u = e - t,
                    c = u + s * h;
                if (Math.abs(s) < 1e-4 && Math.abs(c) < o && (a = !1), a || Math.abs(u) >= o || Math.abs(c) >= o) return a = !0, r(e, s, h);
                var p = -.5 * i * o * o * Math.log(o * o - u * u),
                    l = -.5 * i * o * o * Math.log(o * o - c * c),
                    d = 0 > u / c ? -p : l - p,
                    f = n * s * s * h;
                return -d - f
            }
        }, s.magnet = function(t, i) {
            var e = .5;
            return i || (i = 0),
                function(s, o, n) {
                    var r = s - t,
                        a = r + o * n;
                    if (Math.abs(r) < e && Math.abs(a) < e) return -.5 * o * o * n;
                    var h = -i / Math.max(Math.abs(r), e),
                        u = -i / Math.max(Math.abs(a), e),
                        c = u - h;
                    return -c
                }
        }, s.prototype = {
            _updateReset: function() {
                this.lastUpdateTime = Date.now(), this.atRest = !1
            },
            set: function(t, i) {
                "number" == typeof t && this.setPos(t), "number" == typeof i && this.setVelo(i)
            },
            setPos: function(t) {
                this.x = t, this._updateReset()
            },
            setVelo: function(t) {
                this.v = t, this._updateReset()
            },
            addAgent: function(t) {
                t instanceof Function || console.error("Invalid agent"), this.agents.indexOf(t) < 0 && (this.agents.push(t), this.atRest = !1)
            },
            removeAgent: function(t) {
                var i = this.agents.indexOf(t);
                i >= 0 && (this.agents.splice(i, 1), this.atRest = !1)
            },
            setAgents: function(t) {
                this.agents = t.slice(0), this.atRest = !1
            },
            getPos: function() {
                return this.update(), this.x
            },
            getVelo: function() {
                return this.update(), this.v
            },
            update: function(t) {
                for (t || (t = Date.now()); this.lastUpdateTime < t;) {
                    var i = t - this.lastUpdateTime;
                    this.v && (i = Math.min(i, this.featureSize / Math.abs(this.v))), i = Math.max(i, this.minStepTime), this._step(i)
                }
            },
            _step: function(t) {
                function i(t, i, s) {
                    for (var o = e.agents, n = 0, r = 0; r < o.length; r++) n += o[r](t, i, s);
                    return n
                }
                if (this.lastUpdateTime += t, !this.atRest) {
                    var e = this,
                        s = 0,
                        o = 0;
                    if (Math.abs(this.v) > this.jitter) s = i(this.x, this.v, t), o = this.v > 0 ? 1 : -1;
                    else {
                        var n = i(this.x, this.jitter, t),
                            r = i(this.x, -this.jitter, t);
                        s = Math.max(n, r), o = n > r ? 1 : -1, 0 >= n && 0 >= r && (this.atRest = !0)
                    }
                    var a = this.v,
                        h = .5 * a * a,
                        u = h + s;
                    if (0 > u) this.x += this.v * t * (u / s), this.v = 0;
                    else {
                        var c = o * Math.sqrt(2 * Math.abs(u));
                        this.x += this.v * t, this.v = c
                    }
                    this.atRest && (this.x = Math.round(this.x / this.featureSize) * this.featureSize, this.v = 0)
                }
            }
        }, e.exports = s
    }), define("famous-views/Flip", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/RenderNode"], function(t, i, e) {
        function s(t) {
            this.options = {
                transition: !0,
                cull: !0
            }, t && this.setOptions(t), this._side = 0, this.state = new n(0), this.frontNode = new r, this.backNode = new r
        }
        var o = t("famous/Matrix"),
            n = t("famous/Transitionable"),
            r = t("famous/RenderNode");
        s.prototype.setDefaultTransition = function(t) {
            this.transition = t
        }, s.prototype.flip = function(t, i) {
            void 0 === t && (t = 1 === this._side ? 0 : 1), this._side = t, this.state.set(t, this.options.transition, i)
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.cull && (this.options.cull = t.cull)
        }, s.prototype.linkFront = function(t) {
            return this.frontNode.link(t)
        }, s.prototype.linkBack = function(t) {
            return this.backNode.link(t)
        }, s.prototype.render = function(t) {
            var i = this.state.get();
            return void 0 !== t ? {
                transform: o.rotateY(Math.PI * i),
                target: t
            } : this.options.cull && !this.state.isActive() ? i ? this.backNode.render() : this.frontNode.render() : [{
                transform: o.rotateY(Math.PI * i),
                target: this.frontNode.render()
            }, {
                transform: o.rotateY(Math.PI * (i + 1)),
                target: this.backNode.render()
            }]
        }, e.exports = s
    }), define("famous-views/LightBox", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = {
                inTransform: o.scale(.001, .001, .001),
                inOpacity: 0,
                inOrigin: [.5, .5],
                outTransform: o.scale(.001, .001, .001),
                outOpacity: 0,
                outOrigin: [.5, .5],
                showTransform: o.identity,
                showOpacity: 1,
                showOrigin: [.5, .5],
                inTransition: !0,
                outTransition: !0,
                overlap: !1
            }, t && this.setOptions(t), this._showing = !1, this.nodes = [], this.transforms = []
        }
        var o = t("famous/Matrix"),
            n = t("famous/Modifier"),
            r = t("famous/RenderNode"),
            a = t("famous/Utility");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.inTransform && (this.options.inTransform = t.inTransform), void 0 !== t.inOpacity && (this.options.inOpacity = t.inOpacity), void 0 !== t.inOrigin && (this.options.inOrigin = t.inOrigin), void 0 !== t.outTransform && (this.options.outTransform = t.outTransform), void 0 !== t.outOpacity && (this.options.outOpacity = t.outOpacity), void 0 !== t.outOrigin && (this.options.outOrigin = t.outOrigin), void 0 !== t.showTransform && (this.options.showTransform = t.showTransform), void 0 !== t.showOpacity && (this.options.showOpacity = t.showOpacity), void 0 !== t.showOrigin && (this.options.showOrigin = t.showOrigin), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.overlap && (this.options.overlap = t.overlap)
        }, s.prototype.show = function(t, i, e) {
            if (!t) return this.hide(e);
            if (i instanceof Function && (e = i, i = void 0), this._showing) {
                if (!this.options.overlap) return void this.hide(this.show.bind(this, t, e));
                this.hide()
            }
            this._showing = !0;
            var s = new n({
                    transform: this.options.inTransform,
                    opacity: this.options.inOpacity,
                    origin: this.options.inOrigin
                }),
                o = new r;
            o.link(s).link(t), this.nodes.push(o), this.transforms.push(s);
            var h = e ? a.after(3, e) : void 0;
            i || (i = this.options.inTransition), s.setTransform(this.options.showTransform, i, h), s.setOpacity(this.options.showOpacity, i, h), s.setOrigin(this.options.showOrigin, i, h)
        }, s.prototype.hide = function(t, i) {
            if (this._showing) {
                this._showing = !1, t instanceof Function && (i = t, t = void 0);
                var e = this.nodes[this.nodes.length - 1],
                    s = this.transforms[this.transforms.length - 1],
                    o = a.after(3, function() {
                        this.nodes.splice(this.nodes.indexOf(e), 1), this.transforms.splice(this.transforms.indexOf(s), 1), i && i.call(this)
                    }.bind(this));
                t || (t = this.options.outTransition), s.setTransform(this.options.outTransform, t, o), s.setOpacity(this.options.outOpacity, t, o), s.setOrigin(this.options.outOrigin, t, o)
            }
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++) t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }), define("famous-views/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "./Scrollview", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }
        var o = t("famous/ContainerSurface"),
            n = t("famous/EventHandler"),
            r = t("./Scrollview"),
            a = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            look: void 0,
            feel: {
                direction: a.Direction.X
            }
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, s.prototype.sequenceFrom = function() {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, s.prototype.render = function() {
            return this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("famous-views/SequentialLayout", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/Modifier", "famous/RenderNode", "famous/ViewSequence", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.items = void 0, this._size = void 0, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t)
        }
        var o = t("famous/Matrix"),
            n = (t("famous/Transitionable"), t("famous/Modifier"), t("famous/RenderNode"), t("famous/ViewSequence")),
            r = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            direction: r.Direction.X,
            defaultItemSize: [50, 50],
            itemSpacing: 0
        }, s.prototype.getSize = function() {
            return this._size || this.render(), this._size
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new n(t)), this.items = t
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.transition && (this.options.transition = t.transition)
        }, s.prototype.render = function() {
            for (var t = 0, i = 0, e = this.options.direction == r.Direction.X ? 0 : 1, s = this.options.direction == r.Direction.X ? 1 : 0, n = this.items, a = []; n;) {
                var h = n.get();
                t && (t += this.options.itemSpacing);
                var u;
                h && h.getSize && (u = h.getSize()), u || (u = this.options.defaultItemSize), i && u[s] !== !0 && (i = Math.max(i, u[s]));
                var c = this.options.direction == r.Direction.X ? o.translate(t, 0) : o.translate(0, t);
                a.push({
                    transform: c,
                    target: h.render()
                }), u[e] && u[e] !== !0 && (t += u[e]), n = n.getNext()
            }
            return i || (i = void 0), this._size || (this._size = [0, 0]), this._size[e] = t, this._size[s] = i, {
                group: !0,
                target: a
            }
        }, e.exports = s
    }), define("famous-views/Shaper", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.nodes = [], this.transforms = [], this.defaultTransition = {
                duration: 1e3,
                curve: "easeInOut"
            };
            for (var i in t) this.side(i).from(t[i])
        }
        var o = t("famous/RenderNode"),
            n = t("famous/Matrix"),
            r = t("famous/Modifier"),
            a = t("famous/Utility");
        s.prototype.side = function(t) {
            return this.nodes[t] || (this.transforms[t] = new r, this.transforms[t].setDefaultTransition(this.defaultTransition), this.nodes[t] = new o(this.transforms[t])), this.nodes[t]
        }, s.prototype.halt = function(t) {
            this.transforms[t].halt()
        }, s.prototype.haltSet = function(t) {
            for (var i = 0; i < t.length; i++) this.halt(i)
        }, s.prototype.haltAll = function() {
            this.haltSet(this.all())
        }, s.prototype.set = function(t, i, e, s) {
            return this.transforms[t] ? void this.transforms[t].setTransform(i, e, s) : void(s && s())
        }, s.prototype.setShape = function(t, i, e, s) {
            for (var o = "function" == typeof i ? i : function(t) {
                    return i[t]
                }, n = s ? a.after(t.length, s) : void 0, r = 0; r < t.length; r++) this.set(t[r], o(r), e, n)
        }, s.prototype.setShapeAll = function(t, i, e) {
            this.setShape(this.all(), t, i, e)
        }, s.prototype.modify = function(t, i, e, s) {
            var o = n.multiply(this.transforms[t].getFinalTransform(), i);
            this.set(t, o, e, s)
        }, s.prototype.modifySet = function(t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.modify(t[n], i, e, o)
        }, s.prototype.modifyAll = function(t, i, e) {
            this.modify(this.all(), t, i, e)
        }, s.prototype.setOpacity = function(t, i, e, s) {
            this.transforms[t].setOpacity(i, e, s)
        }, s.prototype.setOpacitySet = function(t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.setOpacity(t[n], i, e, o)
        }, s.prototype.setOpacityAll = function(t, i, e) {
            this.setOpacitySet(this.all(), t, i, e)
        }, s.prototype.all = function() {
            var t = [];
            for (var i in this.nodes) t.push(i);
            return t
        }, s.prototype.getTransform = function(t) {
            return this.transforms[t].getTransform()
        }, s.prototype.getOpacity = function(t) {
            return this.transforms[t].getOpacity()
        }, s.prototype.isMoving = function(t) {
            return this.transforms[t].isMoving()
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++) t[i] = this.nodes[i].execute();
            return t
        }, e.exports = s
    }), define("famous-views/Swappable", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier"], function(t, i, e) {
        function s(t) {
            this.options = {
                initTransform: h.identity,
                initOpacity: 0,
                finalTransform: h.identity,
                finalOpacity: 0,
                inTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                outTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                async: !1
            }, this.nodes = {}, this.transforms = [], this.currIndex = -1, this.prevIndex = -1, this.setOptions(t)
        }

        function o(t, i, e, s, o, n, r) {
            if (t in this.nodes) {
                var a = this.nodes[t].modifiers[0];
                console.log(this.nodes[t]), a.isMoving && !a.isMoving() && (i && a.setTransform(i), void 0 !== e && a.setOpacity(e)), a.setTransform(s, n), a.setOpacity(o, n, r)
            }
        }

        function n(t, i) {
            o.call(this, t, this.options.initTransform, this.options.initOpacity, h.identity, 1, this.options.inTransition, i)
        }

        function r(t, i) {
            o.call(this, t, void 0, void 0, this.options.finalTransform, this.options.finalOpacity, this.options.outTransition, i)
        }
        var a = t("famous/RenderNode"),
            h = t("famous/Matrix"),
            u = t("famous/Modifier");
        s.prototype.item = function(t) {
            var i = new a(new u(this.options.initTransform, this.options.initOpacity), !0);
            return this.nodes[t] = i, i
        }, s.prototype.select = function(t, i) {
            t != this.currIndex && (this.options.async ? r.call(this, this.currIndex, function() {
                n.call(this, this.currIndex, i)
            }.bind(this)) : (r.call(this, this.currIndex), n.call(this, t, i)), this.currIndex = t)
        }, s.prototype.setOptions = function(t) {
            for (var i in t) this.options[i] = t[i]
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.render = function() {
            var t = [];
            for (var i in this.nodes) t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }), define("famous-widgets/FeedItem", ["require", "exports", "module", "famous/Surface", "famous/View", "famous-utils/TimeAgo"], function(t, i, e) {
        function s(t) {
            n.apply(this, arguments), this.surface = new o({
                size: this.options.size,
                classes: this.options.classes
            }), t && this.setOptions(t), this.surface.pipe(this.eventInput), this.optionsManager.on("change", function(t) {
                if ("content" == t.id) this.setContent(t.value);
                else {
                    var i = {};
                    i[t.id] = t.value, this.surface.setOptions(i)
                }
            }.bind(this)), this.node.link(this.surface)
        }
        var o = t("famous/Surface"),
            n = t("famous/View"),
            r = t("famous-utils/TimeAgo");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            classes: ["feedItem"],
            size: [void 0, 80],
            content: {
                icon: void 0,
                source: void 0,
                time: void 0,
                text: ""
            }
        }, s.prototype.setContent = function(t) {
            this.options.content = t;
            var i = .6 * this.options.size[1],
                e = '<img src="' + t.icon + '" class="icon" width="' + i + '" height="' + i + '" />',
                s = '<p class="source">' + t.source + "</p>",
                o = '<p class="time">' + r.parse(t.time) + "</p>",
                n = '<p class="text">' + t.text + "</p>";
            this.surface.setContent(e + o + s + n)
        }, e.exports = s
    }), define("famous-widgets/FeedStream", ["require", "exports", "module", "famous/EventHandler", "famous-views/Scrollview", "./FeedItem"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.scrollview = new n({
                direction: "y",
                margin: 0
            }), t && this.setOptions(t), this.eventInput = new o, o.setInputHandler(this, this.eventInput), this.eventInput.pipe(this.scrollview)
        }
        var o = t("famous/EventHandler"),
            n = t("famous-views/Scrollview"),
            r = t("./FeedItem");
        s.DEFAULT_OPTIONS = {
            widget: r,
            content: []
        }, s.prototype.setContent = function(t) {
            this.options.content = t;
            var i = this.options.widget;
            this.scrollview.sequenceFrom(t.map(function(t) {
                return new i({
                    content: t
                })
            }))
        }, s.prototype.getSize = function() {
            return this.scrollview.getSize()
        }, s.prototype.setSize = function(t) {
            this.scrollview.setOptions({
                clipSize: t[1]
            })
        }, s.prototype.setOptions = function(t) {
            t.widget && (this.options.widget = t.widget), t.content && this.setContent(t.content)
        }, s.prototype.render = function() {
            return this.scrollview.render()
        }, e.exports = s
    }), define("famous-widgets/IconBar", ["require", "exports", "module", "famous/Utility", "famous/Surface"], function(t, i, e) {
        var s = t("famous/Utility"),
            o = t("famous/Surface"),
            n = s.customizeComponent(o, {
                classes: ["iconBar"],
                icons: []
            });
        n.prototype.setOptions = function(t) {
            o.prototype.setOptions.call(this, t), t.icons && (this.options.icons = t.icons)
        }, n.prototype.setContent = function(t) {
            return "string" == typeof t && (t += '<span class="icon">' + this.options.icons.join("") + "</span>"), o.prototype.setContent.call(this, t)
        }, e.exports = n
    }), define("famous-widgets/InfoBox", ["require", "exports", "module", "famous/EventHandler", "famous/Surface"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new r(this.options.look), t && this.setOptions(t), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface, !0)
        }

        function o(t) {
            for (var i = "<ul>", e = 0; e < t.length; e++) {
                var s = t[e],
                    o = Object.keys(s)[0];
                i += '<li><span class="key">' + o + "</span> " + s[o] + "</li>"
            }
            return i += "</ul>"
        }
        var n = t("famous/EventHandler"),
            r = t("famous/Surface");
        s.DEFAULT_OPTIONS = {
            look: {
                classes: ["infoBox"],
                size: [void 0, !0]
            },
            content: []
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.content && (this.options.content = t.content, this.surface.setContent(o(this.options.content))), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.render = function() {
            return this.surface.render()
        }, e.exports = s
    }), define("famous-views/Fader", ["require", "exports", "module", "famous/Transitionable"], function(t, i, e) {
        function s(t, i) {
            this.options = {
                cull: !1,
                transition: !0,
                pulseInTransition: !0,
                pulseOutTransition: !0,
                visibilityThreshold: 0
            }, t && this.setOptions(t), i || (i = 0), this.transitionHelper = new o(i)
        }
        var o = t("famous/Transitionable");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.cull && (this.options.cull = t.cull), void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.pulseInTransition && (this.options.pulseInTransition = t.pulseInTransition), void 0 !== t.pulseOutTransition && (this.options.pulseOutTransition = t.pulseOutTransition), void 0 !== t.visibilityThreshold && (this.options.visibilityThreshold = t.visibilityThreshold)
        }, s.prototype.show = function(t) {
            this.set(1, this.options.transition, t)
        }, s.prototype.hide = function(t) {
            this.set(0, this.options.transition, t)
        }, s.prototype.pulse = function(t, i) {
            void 0 === t && (t = 1);
            var e = this.transitionHelper.get();
            this.transitionHelper.set(t, this.options.pulseInTransition), this.transitionHelper.set(e, this.options.pulseOutTransition, i)
        }, s.prototype.set = function(t, i, e) {
            this.transitionHelper.halt(), this.transitionHelper.set(t, i, e)
        }, s.prototype.render = function(t) {
            var i = this.transitionHelper.get();
            return this.options.cull && !i ? void 0 : {
                opacity: i,
                target: t
            }
        }, s.prototype.isVisible = function() {
            var t = this.options.visibilityThreshold;
            return t >= 1 ? 1 == this.transitionHelper.get() : this.transitionHelper.get() > t
        }, e.exports = s
    }), define("famous-views/ImageFader", ["require", "exports", "module", "famous/RenderNode", "./Fader", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.nodes = [], this.faders = [], this.mode = -1, t && this.setOptions(t)
        }
        var o = t("famous/RenderNode"),
            n = t("./Fader"),
            r = t("famous/Matrix");
        s.DEFAULT_OPTIONS = {
            crossfade: !1
        }, s.prototype.getMode = function() {
            return this.mode
        }, s.prototype.setMode = function(t, i, e) {
            if (this.mode = t, this.options.crossfade) {
                for (var s = 0; s < this.faders.length; s++) this.faders[s].set(0, i);
                this.faders[t].set(1, i, e)
            } else this.faders[t].set(1, i, function() {
                if (this.mode == t) {
                    for (var i = 0; i < this.faders.length; i++) i != t && this.faders[i].set(0);
                    e && e()
                }
            }.bind(this))
        }, s.prototype.forMode = function(t) {
            return this.nodes[t] || (this.nodes[t] = new o, this.faders[t] = new n(this.options)), this.nodes[t]
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.crossfade && (this.options.crossfade = t.crossfade)
        }, s.behindMatrix = r.translate(0, 0, -.01), s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++) {
                var e = this.faders[i].render(this.nodes[i].render());
                i != this.mode && (e = {
                    transform: s.behindMatrix,
                    target: e
                }), t[i] = e
            }
            return t
        }, e.exports = s
    }), define("famous-widgets/ToggleButton", ["require", "exports", "module", "famous/Surface", "famous/EventHandler", "famous-views/ImageFader"], function(t, i, e) {
        function s(t) {
            this.options = {
                content: "",
                offClasses: ["off"],
                onClasses: ["on"],
                size: void 0,
                outTransition: {
                    curve: "easeInOut",
                    duration: 300
                },
                inTransition: {
                    curve: "easeInOut",
                    duration: 300
                },
                toggleMode: s.TOGGLE,
                crossfade: !1
            }, this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this.offSurface = new o, this.offSurface.on("click", function() {
                this.options.toggleMode !== s.OFF && this.select()
            }.bind(this)), this.offSurface.pipe(this.eventOutput), this.onSurface = new o, this.onSurface.on("click", function() {
                this.options.toggleMode !== s.ON && this.deselect()
            }.bind(this)), this.onSurface.pipe(this.eventOutput), this.arbiter = new r({
                crossfade: this.options.crossfade
            }), this.arbiter.forMode(s.OFF).link(this.offSurface), this.arbiter.forMode(s.ON).link(this.onSurface), this.arbiter.setMode(s.OFF), this.selected = !1, t && this.setOptions(t)
        }
        var o = t("famous/Surface"),
            n = t("famous/EventHandler"),
            r = t("famous-views/ImageFader");
        s.OFF = 0, s.ON = 1, s.TOGGLE = 2, s.prototype.select = function() {
            this.selected = !0, this.arbiter.setMode(s.ON, this.options.inTransition), this.eventOutput.emit("select")
        }, s.prototype.deselect = function() {
            this.selected = !1, this.arbiter.setMode(s.OFF, this.options.outTransition), this.eventOutput.emit("deselect")
        }, s.prototype.isSelected = function() {
            return this.selected
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.content && (this.options.content = t.content, this.offSurface.setContent(this.options.content), this.onSurface.setContent(this.options.content)), t.offClasses && (this.options.offClasses = t.offClasses, this.offSurface.setClasses(this.options.offClasses)), t.onClasses && (this.options.onClasses = t.onClasses, this.onSurface.setClasses(this.options.onClasses)), void 0 !== t.size && (this.options.size = t.size, this.onSurface.setSize(this.options.size), this.offSurface.setSize(this.options.size)), void 0 !== t.toggleMode && (this.options.toggleMode = t.toggleMode), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.crossfade && (this.options.crossfade = t.crossfade, this.arbiter.setOptions({
                crossfade: this.options.crossfade
            }))
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.render = function() {
            return this.arbiter.render()
        }, e.exports = s
    }), define("famous-widgets/NavMenu", ["require", "exports", "module", "famous/Utility", "famous/EventHandler", "famous-views/Scrollview", "./ToggleButton", "famous/ContainerSurface"], function(t, i, e) {
        function s(t) {
            this.buttons = [], this._buttonIds = {}, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this.scrollview = new a({
                direction: this.options.look.direction,
                itemSpacing: this.options.look.itemSpacing
            }), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), r.setInputHandler(this, this.scrollview), this.scrollview.sequenceFrom(this.buttons), this.surface = new u(this.options.look), this.surface.link(this.scrollview), this.surface.pipe(this.scrollview)
        }

        function o(t) {
            var i = this.options.sections[t],
                e = this.options.widget,
                s = new e;
            if (this.options.feel && s.setOptions(this.options.feel), this.options.look) {
                var o = Object.create(this.options.look);
                o.size = this.options.look.itemSize, s.setOptions(o)
            }
            s.setOptions(i), s.on("select", this.select.bind(this, t));
            var n = this.buttons.length;
            this.buttons[n] = s, this._buttonIds[t] = n
        }
        var n = t("famous/Utility"),
            r = t("famous/EventHandler"),
            a = t("famous-views/Scrollview"),
            h = t("./ToggleButton"),
            u = t("famous/ContainerSurface");
        s.DEFAULT_OPTIONS = {
            sections: [],
            widget: h,
            look: {
                size: [200, void 0],
                direction: n.Direction.X,
                itemSize: [void 0, 50],
                itemSpacing: 10,
                crossfade: !0
            },
            feel: void 0
        }, s.prototype.select = function(t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++) e != i && this.buttons[e].deselect()
        }, s.prototype.setOptions = function(t) {
            if (void 0 !== t.widget && (this.options.widget = t.widget), void 0 !== t.look) {
                this.options.look = t.look, this.surface && this.surface.setOptions(this.options.look);
                var i = Object.create(this.options.look);
                i.size = this.options.look.itemSize;
                for (var e = 0; e < this.buttons.length; e++) this.buttons[e].setOptions(i)
            }
            if (void 0 !== t.feel) {
                this.options.feel = t.feel;
                for (var e = 0; e < this.buttons.length; e++) this.buttons[e].setOptions(this.options.feel)
            }
            if (void 0 !== t.sections) {
                this.options.sections = t.sections;
                for (var s in this.options.sections) s in this._buttonIds || o.call(this, s)
            }
        }, s.prototype.getSize = function() {
            return this.options.look.size
        }, s.prototype.render = function() {
            return this.buttons.length ? this.surface.render() : void 0
        }, e.exports = s
    }), define("famous-views/GridLayout", ["require", "exports", "module", "famous/Entity", "famous/RenderNode", "famous/Matrix", "famous/ViewSequence"], function(t, i, e) {
        function s(t) {
            this.options = {
                size: [1, 1]
            }, t && this.setOptions(t), this.id = o.register(this), this._targetPositionsCache = [], this._targetSizesCache = [], this._contextSizeCache = [0, 0], this._gridSizeCache = [0, 0]
        }
        var o = t("famous/Entity"),
            n = (t("famous/RenderNode"), t("famous/Matrix")),
            r = t("famous/ViewSequence");
        s.prototype.render = function() {
            return this.id
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.size && (this.options.size = t.size)
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new r(t)), this.sequence = t
        }, s.prototype.commit = function(t, i, e, s, o) {
            var r = this.options.size[1],
                a = this.options.size[0];
            if (o[0] != this._contextSizeCache[0] || o[1] !== this._contextSizeCache[1] || r !== this._gridSizeCache[0] || a !== this._gridSizeCache[1])
                for (var h = o[1] / r, u = o[0] / a, c = 0; r > c; c++)
                    for (var p = Math.round(h * c), l = 0; a > l; l++) {
                        var d = Math.round(u * l),
                            f = c * a + l;
                        this._targetPositionsCache[f] = n.translate(d, p), this._targetSizesCache[f] = [Math.round(u * (l + 1)) - d, Math.round(h * (c + 1)) - p]
                    }
            for (var m = this.sequence, g = [], f = 0; m && f < this._targetPositionsCache.length;) {
                var y = m.get();
                y && (g[f] = {
                    transform: this._targetPositionsCache[f],
                    size: this._targetSizesCache[f],
                    target: y.render()
                }), m = m.getNext(), f++
            }
            o && (i = n.move(i, [-o[0] * s[0], -o[1] * s[1], 0]));
            var _ = {
                transform: i,
                opacity: e,
                origin: s,
                size: o,
                target: g
            };
            return _
        }, e.exports = s
    }), define("famous-widgets/NavigationBar", ["require", "exports", "module", "famous/EventHandler", "famous/Utility", "famous/View", "famous-views/GridLayout", "./ToggleButton"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.layout = new h, this.buttons = [], this._buttonIds = {}, this._buttonCallbacks = {}, this.layout.sequenceFrom(this.buttons), this._link(this.layout), this.optionsManager.on("change", o.bind(this))
        }

        function o(t) {
            var i = t.id,
                e = t.value;
            if ("direction" === i) this.layout.setOptions({
                size: n.call(this.buttons.length, this.options.direction)
            });
            else if ("buttons" === i)
                for (var s in this.buttons) this.buttons[s].setOptions(e);
            else if ("sections" === i)
                for (var i in this.options.sections) this.defineSection(i, this.options.sections[i])
        }

        function n(t, i) {
            return i === r.Direction.X ? [t, 1] : [1, t]
        }
        var r = (t("famous/EventHandler"), t("famous/Utility")),
            a = t("famous/View"),
            h = t("famous-views/GridLayout"),
            u = t("./ToggleButton");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            sections: [],
            widget: u,
            size: [void 0, 50],
            direction: r.Direction.X,
            buttons: {
                toggleMode: u.ON
            }
        }, s.prototype.defineSection = function(t, i) {
            var e, s = this._buttonIds[t];
            if (void 0 === s) {
                s = this.buttons.length, this._buttonIds[t] = s;
                var o = this.options.widget;
                e = new o, this.buttons[s] = e, this.layout.setOptions({
                    size: n(this.buttons.length, this.options.direction)
                })
            } else e = this.buttons[s], e.unbind("select", this._buttonCallbacks[t]);
            this.options.buttons && e.setOptions(this.options.buttons), e.setOptions(i), this._buttonCallbacks[t] = this.select.bind(this, t), e.on("select", this._buttonCallbacks[t])
        }, s.prototype.select = function(t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++) e != i && this.buttons[e].deselect()
        }, e.exports = s
    }), define("famous-widgets/ShrinkContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "famous-views/SequentialLayout", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new n(this.options.look), this.layout = new a(this.options), t && this.setOptions(t), this.surface.link(this.layout), r.setInputHandler(this, this.surface), r.setOutputHandler(this, this.surface, !0)
        }

        function o() {
            var t = this.layout.getSize(),
                i = this.surface.getSize(),
                e = this.surface.context.getSize();
            if (t && i && e) {
                var s = [t[0] + (i[0] - e[0]), t[1] + (i[1] - e[1])];
                isNaN(s[0]) && (s[0] = void 0), isNaN(s[1]) && (s[1] = void 0), (s[0] != i[0] || s[1] != i[1]) && this.surface.setSize.call(this.surface, s)
            }
        } {
            var n = t("famous/ContainerSurface"),
                r = t("famous/EventHandler"),
                a = t("famous-views/SequentialLayout");
            t("famous/Utility")
        }
        s.DEFAULT_OPTIONS = {
            look: void 0
        }, s.prototype.getSize = function() {
            return this.surface.getSize()
        }, s.prototype.setOptions = function(t) {
            this.layout.setOptions(t), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.sequenceFrom = function() {
            return this.layout.sequenceFrom.apply(this.layout, arguments)
        }, s.prototype.mod = function() {
            return this.surface.mod.apply(this.surface, arguments)
        }, s.prototype.render = function() {
            return o.call(this), this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("famous-widgets/Slider", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous-sync/GenericSync", "famous/Matrix", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.options = {
                size: [200, 60],
                indicatorSize: [200, 30],
                labelSize: [200, 30],
                range: [0, 1],
                precision: 2,
                defaultValue: 0,
                label: "",
                fillColor: "rgba(170, 170, 170, 1)"
            }, t && this.setOptions(t), this.value = this.options.defaultValue, this.indicator = new r({
                size: this.options.indicatorSize
            }), this.indicator.addClass("slider-back"), this.label = new n({
                size: this.options.labelSize,
                content: this.options.label,
                classes: ["slider-label"]
            }), this.label.setProperties({
                "pointer-events": "none"
            }), this.eventOutput = new u, this.eventInput = new u, u.setInputHandler(this, this.eventInput), u.setOutputHandler(this, this.eventOutput), this.sync = new a(this.get.bind(this), {
                scale: (this.options.range[1] - this.options.range[0]) / this.options.indicatorSize[0],
                direction: a.DIRECTION_X
            }), this.eventInput.on("update", function(t) {
                this.set(t.p)
            }.bind(this)), this.indicator.pipe(this.sync).pipe(this.eventInput), this._drawPos = 0, o.call(this)
        }

        function o() {
            this.label.setContent(this.options.label + '<span style="float: right">' + this.get().toFixed(this.options.precision) + "</span>")
        }
        var n = t("famous/Surface"),
            r = t("famous/CanvasSurface"),
            a = t("famous-sync/GenericSync"),
            h = t("famous/Matrix"),
            u = t("famous/EventHandler");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.size && (this.options.size = t.size), void 0 !== t.indicatorSize && (this.options.indicatorSize = t.indicatorSize), void 0 !== t.labelSize && (this.options.labelSize = t.labelSize), void 0 !== t.range && (this.options.range = t.range), void 0 !== t.precision && (this.options.precision = t.precision), void 0 !== t.defaultValue && (this.options.defaultValue = t.defaultValue), void 0 !== t.label && (this.options.label = t.label), void 0 !== t.fillColor && (this.options.fillColor = t.fillColor)
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype.set = function(t) {
            this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), o.call(this), this.eventOutput.emit("change", {
                value: this.get(),
                range: this.options.range
            })
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.render = function() {
            var t = this.options.range,
                i = Math.floor((this.get() - t[0]) / (t[1] - t[0]) * this.options.indicatorSize[0]);
            if (i < this._drawPos) this.indicator.getContext("2d").clearRect(i, 0, this._drawPos - i + 1, this.options.indicatorSize[1]);
            else if (i > this._drawPos) {
                var e = this.indicator.getContext("2d");
                e.fillStyle = this.options.fillColor, e.fillRect(this._drawPos - 1, 0, i - this._drawPos + 1, this.options.indicatorSize[1])
            }
            return this._drawPos = i, {
                size: this.options.size,
                target: [{
                    origin: [.5, 0],
                    target: this.indicator.render()
                }, {
                    transform: h.translate(0, 0, 1),
                    origin: [.5, 1],
                    target: this.label.render()
                }]
            }
        }, e.exports = s
    }), define("famous-widgets/TitleBar", ["require", "exports", "module", "famous/Matrix", "famous/Surface", "famous-views/LightBox"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.lightbox = new r, this._surfaces = {}, t && this.setOptions(t)
        }
        var o = t("famous/Matrix"),
            n = t("famous/Surface"),
            r = t("famous-views/LightBox");
        s.DEFAULT_OPTIONS = {
            widget: n,
            inOrigin: [.5, 0],
            outOrigin: [.5, 0],
            showOrigin: [.5, 0],
            inTransition: !0,
            outTransition: !0,
            size: [void 0, 50],
            look: void 0
        }, s.prototype.show = function(t) {
            var i = this.options.widget;
            if (!(t in this._surfaces)) {
                var e = new i({
                    size: this.options.size
                });
                e.setOptions(this.options.look), e.setContent(t), this._surfaces[t] = e
            }
            this.lightbox.show(this._surfaces[t])
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.setOptions = function(t) {
            if (this.lightbox.setOptions(t), t.widget && (this.options.widget = t.widget, this._surfaces = {}), t.look && (this.options.look = t.look), t.size) {
                this.options.size = t.size;
                var i = o.translate(0, -this.options.size[1]);
                this.lightbox.setOptions({
                    inTransform: i,
                    outTransform: i
                })
            }
        }, s.prototype.render = function() {
            return this.lightbox.render()
        }, e.exports = s
    }), define("main", ["require", "exports", "module", "app/scenes/BlankLightbox", "app/scenes/EmptyScene", "app/scenes/LightboxScene", "app/scenes/TitleScene", "app/scenes/TitleScene2", "app/widgets/ArrayHelpers", "app/widgets/BackContent", "app/widgets/BackTile", "app/widgets/CloseButton", "app/widgets/EmptyClass", "app/widgets/FrontTile", "app/widgets/GridLayout_ui", "app/widgets/ImageButton", "app/widgets/InfoButton", "app/widgets/LayoutEngine", "app/widgets/Lightbox", "app/widgets/LightboxRenderableTile", "app/widgets/LightboxTile", "app/widgets/MakeDraggable", "app/widgets/ScrollbarScrollview", "app/widgets/SizingHelpers", "app/widgets/TorqueRenderable", "app/ID", "app/SceneController", "app/SceneTransitions", "app/data", "core/ExpandingSurface", "core/GA", "core/Interface", "core/InterfaceContainer", "core/NextButton", "core/Signup", "core/SignupContent", "core/SignupData", "core/SignupError", "core/Submit", "core/UI", "famous/CanvasSurface", "famous/ContainerSurface", "famous/Context", "famous/ElementAllocator", "famous/Engine", "famous/Entity", "famous/EventArbiter", "famous/EventHandler", "famous/Group", "famous/ImageSurface", "famous/Matrix", "famous/Modifier", "famous/MultipleTransition", "famous/OptionsManager", "famous/RenderNode", "famous/Scene", "famous/SceneCompiler", "famous/SpecParser", "famous/Surface", "famous/Timer", "famous/Transitionable", "famous/TweenTransition", "famous/Utility", "famous/VideoSurface", "famous/View", "famous/ViewSequence", "famous/WebGLSurface", "famous-animation/Animation", "famous-animation/AnimationEngine", "famous-animation/CubicBezier", "famous-animation/Easing", "famous-animation/GenericAnimation", "famous-animation/Idle", "famous-animation/PiecewiseCubicBezier", "famous-animation/RegisterEasing", "famous-animation/Sequence", "famous-animation/Timer", "famous-color/Color", "famous-color/ColorPalette", "famous-color/ColorPalettes", "famous-css/StyleManager", "famous-css/StyleSheet", "famous-generative/Axis", "famous-generative/Box", "famous-generative/DebugTriangle", "famous-generative/EasyCamera", "famous-generative/Integrator", "famous-generative/Line", "famous-generative/Particle", "famous-generative/SimplexNoise", "famous-generative/Touch", "famous-generative/TouchVisualizer", "famous-generative/Triangle", "famous-generative/Triangle3D", "famous-generative/Triangle3DOLD", "famous-math/Quaternion", "famous-math/Vector", "famous-modifiers/Camera", "famous-modifiers/Draggable", "famous-modifiers/Swappable", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Particle", "famous-physics/bodies/Rectangle", "famous-physics/constraints/Collision", "famous-physics/constraints/CollisionJacobian", "famous-physics/constraints/Constraint", "famous-physics/constraints/Curve", "famous-physics/constraints/Distance", "famous-physics/constraints/Distance1D", "famous-physics/constraints/Rod", "famous-physics/constraints/Rope", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Surface", "famous-physics/constraints/Wall", "famous-physics/constraints/Walls", "famous-physics/constraints/joint", "famous-physics/forces/Drag", "famous-physics/forces/Force", "famous-physics/forces/Repulsion", "famous-physics/forces/Spring", "famous-physics/forces/TorqueSpring", "famous-physics/forces/VectorField", "famous-physics/integrator/SymplecticEuler", "famous-physics/integrator/verlet", "famous-physics/math/GaussSeidel", "famous-physics/math/Quaternion", "famous-physics/math/Random", "famous-physics/math/Vector", "famous-physics/math/matrix", "famous-physics/math/vectorArray", "famous-physics/utils/PhysicsTransition", "famous-physics/utils/PhysicsTransition2", "famous-physics/utils/SpringTransition", "famous-physics/utils/StiffSpringTransition", "famous-physics/utils/WallTransition", "famous-physics/PhysicsEngine", "famous-scene/GLScene", "famous-scene/Scene", "famous-scene/SceneController", "famous-scene/SceneTransitions", "famous-scene/Transitions", "famous-sync/FastClick", "famous-sync/GenericSync", "famous-sync/MouseSync", "famous-sync/PinchSync", "famous-sync/RotateSync", "famous-sync/ScaleSync", "famous-sync/ScrollSync", "famous-sync/TouchSync", "famous-sync/TouchTracker", "famous-sync/TwoFingerSync", "famous-ui/Buttons/ButtonBase", "famous-ui/Buttons/RotateButton", "famous-ui/Buttons/SpringButton", "famous-ui/Buttons/SpringButton.ui", "famous-ui/ColorPicker/AlphaPicker", "famous-ui/ColorPicker/CanvasPicker", "famous-ui/ColorPicker/ColorButton", "famous-ui/ColorPicker/ColorPicker", "famous-ui/ColorPicker/GradientPicker", "famous-ui/ColorPicker/HuePicker", "famous-ui/Dropdown/Dropdown", "famous-ui/Dropdown/DropdownItem", "famous-ui/Easing/CanvasDrawer", "famous-ui/Easing/EasingBool", "famous-ui/Easing/EasingVisualizer", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Text/Label", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/AutoUI", "famous-ui/PanelScrollview", "famous-ui/Slider", "famous-utils/FormatTime", "famous-utils/KeyCodes", "famous-utils/NoiseImage", "famous-utils/Time", "famous-utils/TimeAgo", "famous-utils/Utils", "famous-views/Accordion", "famous-views/ControlSet", "famous-views/EnergyHelper", "famous-views/Flip", "famous-views/LightBox", "famous-views/ScrollContainer", "famous-views/Scrollview", "famous-views/SequentialLayout", "famous-views/Shaper", "famous-views/Swappable", "famous-widgets/FeedItem", "famous-widgets/FeedStream", "famous-widgets/IconBar", "famous-widgets/InfoBox", "famous-widgets/NavMenu", "famous-widgets/NavigationBar", "famous-widgets/ScrollContainer", "famous-widgets/ShrinkContainer", "famous-widgets/Slider", "famous-widgets/TitleBar", "famous-widgets/ToggleButton"], function(t, i, e) {
        var s = function(i) {
            i.call(this, t)
        };
        s.App = {}, s.App.Scenes_BlankLightbox = t("app/scenes/BlankLightbox"), s.App.Scenes_EmptyScene = t("app/scenes/EmptyScene"), s.App.Scenes_LightboxScene = t("app/scenes/LightboxScene"), s.App.Scenes_TitleScene = t("app/scenes/TitleScene"), s.App.Scenes_TitleScene2 = t("app/scenes/TitleScene2"), s.App.Widgets_ArrayHelpers = t("app/widgets/ArrayHelpers"), s.App.Widgets_BackContent = t("app/widgets/BackContent"), s.App.Widgets_BackTile = t("app/widgets/BackTile"), s.App.Widgets_CloseButton = t("app/widgets/CloseButton"), s.App.Widgets_EmptyClass = t("app/widgets/EmptyClass"), s.App.Widgets_FrontTile = t("app/widgets/FrontTile"), s.App.Widgets_GridLayout_ui = t("app/widgets/GridLayout_ui"), s.App.Widgets_ImageButton = t("app/widgets/ImageButton"), s.App.Widgets_InfoButton = t("app/widgets/InfoButton"), s.App.Widgets_LayoutEngine = t("app/widgets/LayoutEngine"), s.App.Widgets_Lightbox = t("app/widgets/Lightbox"), s.App.Widgets_LightboxRenderableTile = t("app/widgets/LightboxRenderableTile"), s.App.Widgets_LightboxTile = t("app/widgets/LightboxTile"), s.App.Widgets_MakeDraggable = t("app/widgets/MakeDraggable"), s.App.Widgets_ScrollbarScrollview = t("app/widgets/ScrollbarScrollview"), s.App.Widgets_SizingHelpers = t("app/widgets/SizingHelpers"), s.App.Widgets_TorqueRenderable = t("app/widgets/TorqueRenderable"), s.App.ID = t("app/ID"), s.App.SceneController = t("app/SceneController"), s.App.SceneTransitions = t("app/SceneTransitions"), s.App.Data = t("app/data"), s.Core = {}, s.Core.ExpandingSurface = t("core/ExpandingSurface"), s.Core.GA = t("core/GA"), s.Core.Interface = t("core/Interface"), s.Core.InterfaceContainer = t("core/InterfaceContainer"), s.Core.NextButton = t("core/NextButton"), s.Core.Signup = t("core/Signup"), s.Core.SignupContent = t("core/SignupContent"), s.Core.SignupData = t("core/SignupData"), s.Core.SignupError = t("core/SignupError"), s.Core.Submit = t("core/Submit"), s.Core.UI = t("core/UI"), s.Famous = {}, s.Famous.CanvasSurface = t("famous/CanvasSurface"), s.Famous.ContainerSurface = t("famous/ContainerSurface"), s.Famous.Context = t("famous/Context"), s.Famous.ElementAllocator = t("famous/ElementAllocator"), s.Famous.Engine = t("famous/Engine"), s.Famous.Entity = t("famous/Entity"), s.Famous.EventArbiter = t("famous/EventArbiter"), s.Famous.EventHandler = t("famous/EventHandler"), s.Famous.Group = t("famous/Group"), s.Famous.ImageSurface = t("famous/ImageSurface"), s.Famous.Matrix = t("famous/Matrix"), s.Famous.Modifier = t("famous/Modifier"), s.Famous.MultipleTransition = t("famous/MultipleTransition"), s.Famous.OptionsManager = t("famous/OptionsManager"), s.Famous.RenderNode = t("famous/RenderNode"), s.Famous.Scene = t("famous/Scene"), s.Famous.SceneCompiler = t("famous/SceneCompiler"), s.Famous.SpecParser = t("famous/SpecParser"), s.Famous.Surface = t("famous/Surface"), s.Famous.Timer = t("famous/Timer"), s.Famous.Transitionable = t("famous/Transitionable"), s.Famous.TweenTransition = t("famous/TweenTransition"), s.Famous.Utility = t("famous/Utility"), s.Famous.VideoSurface = t("famous/VideoSurface"), s.Famous.View = t("famous/View"), s.Famous.ViewSequence = t("famous/ViewSequence"), s.Famous.WebGLSurface = t("famous/WebGLSurface"), s.FamousAnimation = {}, s.FamousAnimation.Animation = t("famous-animation/Animation"), s.FamousAnimation.AnimationEngine = t("famous-animation/AnimationEngine"), s.FamousAnimation.CubicBezier = t("famous-animation/CubicBezier"), s.FamousAnimation.Easing = t("famous-animation/Easing"), s.FamousAnimation.GenericAnimation = t("famous-animation/GenericAnimation"), s.FamousAnimation.Idle = t("famous-animation/Idle"), s.FamousAnimation.PiecewiseCubicBezier = t("famous-animation/PiecewiseCubicBezier"), s.FamousAnimation.RegisterEasing = t("famous-animation/RegisterEasing"), s.FamousAnimation.Sequence = t("famous-animation/Sequence"), s.FamousAnimation.Timer = t("famous-animation/Timer"), s.FamousColor = {}, s.FamousColor.Color = t("famous-color/Color"), s.FamousColor.ColorPalette = t("famous-color/ColorPalette"), s.FamousColor.ColorPalettes = t("famous-color/ColorPalettes"), s.FamousCss = {}, s.FamousCss.StyleManager = t("famous-css/StyleManager"), s.FamousCss.StyleSheet = t("famous-css/StyleSheet"), s.FamousGenerative = {}, s.FamousGenerative.Axis = t("famous-generative/Axis"), s.FamousGenerative.Box = t("famous-generative/Box"), s.FamousGenerative.DebugTriangle = t("famous-generative/DebugTriangle"), s.FamousGenerative.EasyCamera = t("famous-generative/EasyCamera"), s.FamousGenerative.Integrator = t("famous-generative/Integrator"), s.FamousGenerative.Line = t("famous-generative/Line"), s.FamousGenerative.Particle = t("famous-generative/Particle"), s.FamousGenerative.SimplexNoise = t("famous-generative/SimplexNoise"), s.FamousGenerative.Touch = t("famous-generative/Touch"), s.FamousGenerative.TouchVisualizer = t("famous-generative/TouchVisualizer"), s.FamousGenerative.Triangle = t("famous-generative/Triangle"), s.FamousGenerative.Triangle3D = t("famous-generative/Triangle3D"), s.FamousGenerative.Triangle3DOLD = t("famous-generative/Triangle3DOLD"), s.FamousMath = {}, s.FamousMath.Quaternion = t("famous-math/Quaternion"), s.FamousMath.Vector = t("famous-math/Vector"), s.FamousModifiers = {}, s.FamousModifiers.Camera = t("famous-modifiers/Camera"), s.FamousModifiers.Draggable = t("famous-modifiers/Draggable"), s.FamousModifiers.Swappable = t("famous-modifiers/Swappable"), s.FamousPhysics = {}, s.FamousPhysics.Bodies_Body = t("famous-physics/bodies/Body"), s.FamousPhysics.Bodies_Circle = t("famous-physics/bodies/Circle"), s.FamousPhysics.Bodies_Particle = t("famous-physics/bodies/Particle"), s.FamousPhysics.Bodies_Rectangle = t("famous-physics/bodies/Rectangle"), s.FamousPhysics.Constraints_Collision = t("famous-physics/constraints/Collision"), s.FamousPhysics.Constraints_CollisionJacobian = t("famous-physics/constraints/CollisionJacobian"), s.FamousPhysics.Constraints_Constraint = t("famous-physics/constraints/Constraint"), s.FamousPhysics.Constraints_Curve = t("famous-physics/constraints/Curve"), s.FamousPhysics.Constraints_Distance = t("famous-physics/constraints/Distance"), s.FamousPhysics.Constraints_Distance1D = t("famous-physics/constraints/Distance1D"), s.FamousPhysics.Constraints_Rod = t("famous-physics/constraints/Rod"), s.FamousPhysics.Constraints_Rope = t("famous-physics/constraints/Rope"), s.FamousPhysics.Constraints_StiffSpring = t("famous-physics/constraints/StiffSpring"), s.FamousPhysics.Constraints_Surface = t("famous-physics/constraints/Surface"), s.FamousPhysics.Constraints_Wall = t("famous-physics/constraints/Wall"), s.FamousPhysics.Constraints_Walls = t("famous-physics/constraints/Walls"), s.FamousPhysics.Constraints_joint = t("famous-physics/constraints/joint"), s.FamousPhysics.Forces_Drag = t("famous-physics/forces/Drag"), s.FamousPhysics.Forces_Force = t("famous-physics/forces/Force"), s.FamousPhysics.Forces_Repulsion = t("famous-physics/forces/Repulsion"), s.FamousPhysics.Forces_Spring = t("famous-physics/forces/Spring"), s.FamousPhysics.Forces_TorqueSpring = t("famous-physics/forces/TorqueSpring"), s.FamousPhysics.Forces_VectorField = t("famous-physics/forces/VectorField"), s.FamousPhysics.Integrator_SymplecticEuler = t("famous-physics/integrator/SymplecticEuler"), s.FamousPhysics.Integrator_verlet = t("famous-physics/integrator/verlet"), s.FamousPhysics.Math_GaussSeidel = t("famous-physics/math/GaussSeidel"), s.FamousPhysics.Math_Quaternion = t("famous-physics/math/Quaternion"), s.FamousPhysics.Math_Random = t("famous-physics/math/Random"), s.FamousPhysics.Math_Vector = t("famous-physics/math/Vector"), s.FamousPhysics.Math_matrix = t("famous-physics/math/matrix"), s.FamousPhysics.Math_vectorArray = t("famous-physics/math/vectorArray"), s.FamousPhysics.Utils_PhysicsTransition = t("famous-physics/utils/PhysicsTransition"), s.FamousPhysics.Utils_PhysicsTransition2 = t("famous-physics/utils/PhysicsTransition2"), s.FamousPhysics.Utils_SpringTransition = t("famous-physics/utils/SpringTransition"), s.FamousPhysics.Utils_StiffSpringTransition = t("famous-physics/utils/StiffSpringTransition"), s.FamousPhysics.Utils_WallTransition = t("famous-physics/utils/WallTransition"), s.FamousPhysics.PhysicsEngine = t("famous-physics/PhysicsEngine"), s.FamousScene = {}, s.FamousScene.GLScene = t("famous-scene/GLScene"), s.FamousScene.Scene = t("famous-scene/Scene"), s.FamousScene.SceneController = t("famous-scene/SceneController"), s.FamousScene.SceneTransitions = t("famous-scene/SceneTransitions"), s.FamousScene.Transitions = t("famous-scene/Transitions"), s.FamousSync = {}, s.FamousSync.FastClick = t("famous-sync/FastClick"), s.FamousSync.GenericSync = t("famous-sync/GenericSync"), s.FamousSync.MouseSync = t("famous-sync/MouseSync"), s.FamousSync.PinchSync = t("famous-sync/PinchSync"), s.FamousSync.RotateSync = t("famous-sync/RotateSync"), s.FamousSync.ScaleSync = t("famous-sync/ScaleSync"), s.FamousSync.ScrollSync = t("famous-sync/ScrollSync"), s.FamousSync.TouchSync = t("famous-sync/TouchSync"), s.FamousSync.TouchTracker = t("famous-sync/TouchTracker"), s.FamousSync.TwoFingerSync = t("famous-sync/TwoFingerSync"), s.FamousUi = {}, s.FamousUi.Buttons_ButtonBase = t("famous-ui/Buttons/ButtonBase"), s.FamousUi.Buttons_RotateButton = t("famous-ui/Buttons/RotateButton"), s.FamousUi.Buttons_SpringButton = t("famous-ui/Buttons/SpringButton"), s.FamousUi.Buttons_SpringButton.ui = t("famous-ui/Buttons/SpringButton.ui"), s.FamousUi.ColorPicker_AlphaPicker = t("famous-ui/ColorPicker/AlphaPicker"), s.FamousUi.ColorPicker_CanvasPicker = t("famous-ui/ColorPicker/CanvasPicker"), s.FamousUi.ColorPicker_ColorButton = t("famous-ui/ColorPicker/ColorButton"), s.FamousUi.ColorPicker_ColorPicker = t("famous-ui/ColorPicker/ColorPicker"), s.FamousUi.ColorPicker_GradientPicker = t("famous-ui/ColorPicker/GradientPicker"), s.FamousUi.ColorPicker_HuePicker = t("famous-ui/ColorPicker/HuePicker"), s.FamousUi.Dropdown_Dropdown = t("famous-ui/Dropdown/Dropdown"), s.FamousUi.Dropdown_DropdownItem = t("famous-ui/Dropdown/DropdownItem"), s.FamousUi.Easing_CanvasDrawer = t("famous-ui/Easing/CanvasDrawer"), s.FamousUi.Easing_EasingBool = t("famous-ui/Easing/EasingBool"), s.FamousUi.Easing_EasingVisualizer = t("famous-ui/Easing/EasingVisualizer"), s.FamousUi.Easing_MultiEasingToggle = t("famous-ui/Easing/MultiEasingToggle"), s.FamousUi.Text_Label = t("famous-ui/Text/Label"), s.FamousUi.Toggles_BoolToggle = t("famous-ui/Toggles/BoolToggle"), s.FamousUi.Toggles_MultiBoolToggle = t("famous-ui/Toggles/MultiBoolToggle"), s.FamousUi.AutoUI = t("famous-ui/AutoUI"), s.FamousUi.PanelScrollview = t("famous-ui/PanelScrollview"), s.FamousUi.Slider = t("famous-ui/Slider"), s.FamousUtils = {}, s.FamousUtils.FormatTime = t("famous-utils/FormatTime"), s.FamousUtils.KeyCodes = t("famous-utils/KeyCodes"), s.FamousUtils.NoiseImage = t("famous-utils/NoiseImage"), s.FamousUtils.Time = t("famous-utils/Time"), s.FamousUtils.TimeAgo = t("famous-utils/TimeAgo"), s.FamousUtils.Utils = t("famous-utils/Utils"), s.FamousViews = {}, s.FamousViews.Accordion = t("famous-views/Accordion"), s.FamousViews.ControlSet = t("famous-views/ControlSet"), s.FamousViews.EnergyHelper = t("famous-views/EnergyHelper"), s.FamousViews.Flip = t("famous-views/Flip"), s.FamousViews.LightBox = t("famous-views/LightBox"), s.FamousViews.ScrollContainer = t("famous-views/ScrollContainer"), s.FamousViews.Scrollview = t("famous-views/Scrollview"), s.FamousViews.SequentialLayout = t("famous-views/SequentialLayout"), s.FamousViews.Shaper = t("famous-views/Shaper"), s.FamousViews.Swappable = t("famous-views/Swappable"), s.FamousWidgets = {}, s.FamousWidgets.FeedItem = t("famous-widgets/FeedItem"), s.FamousWidgets.FeedStream = t("famous-widgets/FeedStream"), s.FamousWidgets.IconBar = t("famous-widgets/IconBar"), s.FamousWidgets.InfoBox = t("famous-widgets/InfoBox"), s.FamousWidgets.NavMenu = t("famous-widgets/NavMenu"), s.FamousWidgets.NavigationBar = t("famous-widgets/NavigationBar"), s.FamousWidgets.ScrollContainer = t("famous-widgets/ScrollContainer"), s.FamousWidgets.ShrinkContainer = t("famous-widgets/ShrinkContainer"), s.FamousWidgets.Slider = t("famous-widgets/Slider"), s.FamousWidgets.TitleBar = t("famous-widgets/TitleBar"), s.FamousWidgets.ToggleButton = t("famous-widgets/ToggleButton"), e.exports = s
    }), require(["lib/classList", "lib/functionPrototypeBind", "lib/requestAnimationFrame", "main"]), require("main")
});
