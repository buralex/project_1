! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    (function(t) {
        "use strict";

        function e(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var r = n(13),
            i = e(r);
        n(23), n(22), n(21), n(24), n(17), n(18), n(19), n(20), Element.prototype.getElementsByClassName || (Element.prototype.getElementsByClassName = function(t) {
            var e, n, r, i = this,
                o = [];
            if (i.querySelectorAll) return i.querySelectorAll("." + t);
            if (i.evaluate)
                for (n = ".//*[contains(concat(' ', @class, ' '), ' " + t + " ')]", e = i.evaluate(n, i, null, 0, null); r = e.iterateNext();) o.push(r);
            else
                for (e = i.getElementsByTagName("*"), n = new RegExp("(^|\\s)" + t + "(\\s|$)"), r = 0; r < e.length; r++) n.test(e[r].className) && o.push(e[r]);
            return o
        }), t(function() {
            window.app = new i["default"], t.magnificPopup.open({
                items: {
                    src: window.popup2016
                },
                type: "image"
            }, 0)
        })
    }).call(e, n(1))
}, function(t, e, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v1.11.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-04-28T16:19Z
     */
    ! function(e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function a(t) {
            var e = "length" in t && t.length,
                n = lt.type(t);
            return "function" === n || lt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function s(t, e, n) {
            if (lt.isFunction(e)) return lt.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
            if (e.nodeType) return lt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (mt.test(e)) return lt.filter(e, t, n);
                e = lt.filter(e, t)
            }
            return lt.grep(t, function(t) {
                return lt.inArray(t, e) >= 0 !== n
            })
        }

        function l(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function u(t) {
            var e = Tt[t] = {};
            return lt.each(t.match(Ct) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function c() {
            yt.addEventListener ? (yt.removeEventListener("DOMContentLoaded", f, !1), n.removeEventListener("load", f, !1)) : (yt.detachEvent("onreadystatechange", f), n.detachEvent("onload", f))
        }

        function f() {
            (yt.addEventListener || "load" === event.type || "complete" === yt.readyState) && (c(), lt.ready())
        }

        function d(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var r = "data-" + e.replace(At, "-$1").toLowerCase();
                if (n = t.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Mt.test(n) ? lt.parseJSON(n) : n
                    } catch (i) {}
                    lt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function h(t) {
            var e;
            for (e in t)
                if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function p(t, e, n, r) {
            if (lt.acceptData(t)) {
                var i, o, a = lt.expando,
                    s = t.nodeType,
                    l = s ? lt.cache : t,
                    u = s ? t[a] : t[a] && a;
                if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = s ? t[a] = J.pop() || lt.guid++ : a), l[u] || (l[u] = s ? {} : {
                    toJSON: lt.noop
                }), "object" != typeof e && "function" != typeof e || (r ? l[u] = lt.extend(l[u], e) : l[u].data = lt.extend(l[u].data, e)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[lt.camelCase(e)] = n), "string" == typeof e ? (i = o[e], null == i && (i = o[lt.camelCase(e)])) : i = o, i
            }
        }

        function g(t, e, n) {
            if (lt.acceptData(t)) {
                var r, i, o = t.nodeType,
                    a = o ? lt.cache : t,
                    s = o ? t[lt.expando] : lt.expando;
                if (a[s]) {
                    if (e && (r = n ? a[s] : a[s].data)) {
                        lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in r ? e = [e] : (e = lt.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
                        for (; i--;) delete r[e[i]];
                        if (n ? !h(r) : !lt.isEmptyObject(r)) return
                    }(n || (delete a[s].data, h(a[s]))) && (o ? lt.cleanData([t], !0) : at.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function v() {
            return !1
        }

        function y() {
            try {
                return yt.activeElement
            } catch (t) {}
        }

        function b(t) {
            var e = qt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function x(t, e) {
            var n, r, i = 0,
                o = typeof t.getElementsByTagName !== Et ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Et ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || lt.nodeName(r, e) ? o.push(r) : lt.merge(o, x(r, e));
            return void 0 === e || e && lt.nodeName(t, e) ? lt.merge([t], o) : o
        }

        function w(t) {
            Ft.test(t.type) && (t.defaultChecked = t.checked)
        }

        function k(t, e) {
            return lt.nodeName(t, "table") && lt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function C(t) {
            return t.type = (null !== lt.find.attr(t, "type")) + "/" + t.type, t
        }

        function T(t) {
            var e = Kt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function S(t, e) {
            for (var n, r = 0; null != (n = t[r]); r++) lt._data(n, "globalEval", !e || lt._data(e[r], "globalEval"))
        }

        function _(t, e) {
            if (1 === e.nodeType && lt.hasData(t)) {
                var n, r, i, o = lt._data(t),
                    a = lt._data(e, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; i > r; r++) lt.event.add(e, n, s[n][r])
                }
                a.data && (a.data = lt.extend({}, a.data))
            }
        }

        function E(t, e) {
            var n, r, i;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !at.noCloneEvent && e[lt.expando]) {
                    i = lt._data(e);
                    for (r in i.events) lt.removeEvent(e, r, i.handle);
                    e.removeAttribute(lt.expando)
                }
                "script" === n && e.text !== t.text ? (C(e).text = t.text, T(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), at.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ft.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }

        function M(t, e) {
            var r, i = lt(e.createElement(t)).appendTo(e.body),
                o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : lt.css(i[0], "display");
            return i.detach(), o
        }

        function A(t) {
            var e = yt,
                n = re[t];
            return n || (n = M(t, e), "none" !== n && n || (ne = (ne || lt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ne[0].contentWindow || ne[0].contentDocument).document, e.write(), e.close(), n = M(t, e), ne.detach()), re[t] = n), n
        }

        function O(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function j(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = me.length; i--;)
                if (e = me[i] + n, e in t) return e;
            return r
        }

        function N(t, e) {
            for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = lt._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Nt(r) && (o[a] = lt._data(r, "olddisplay", A(r.nodeName)))) : (i = Nt(r), (n && "none" !== n || !i) && lt._data(r, "olddisplay", i ? n : lt.css(r, "display"))));
            for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function P(t, e, n) {
            var r = de.exec(e);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
        }

        function F(t, e, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += lt.css(t, n + jt[o], !0, i)), r ? ("content" === n && (a -= lt.css(t, "padding" + jt[o], !0, i)), "margin" !== n && (a -= lt.css(t, "border" + jt[o] + "Width", !0, i))) : (a += lt.css(t, "padding" + jt[o], !0, i), "padding" !== n && (a += lt.css(t, "border" + jt[o] + "Width", !0, i)));
            return a
        }

        function D(t, e, n) {
            var r = !0,
                i = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = ie(t),
                a = at.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = oe(t, e, o), (0 > i || null == i) && (i = t.style[e]), se.test(i)) return i;
                r = a && (at.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + F(t, e, n || (a ? "border" : "content"), r, o) + "px"
        }

        function L(t, e, n, r, i) {
            return new L.prototype.init(t, e, n, r, i)
        }

        function H() {
            return setTimeout(function() {
                ve = void 0
            }), ve = lt.now()
        }

        function $(t, e) {
            var n, r = {
                    height: t
                },
                i = 0;
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = jt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function I(t, e, n) {
            for (var r, i = (Ce[e] || []).concat(Ce["*"]), o = 0, a = i.length; a > o; o++)
                if (r = i[o].call(n, e, t)) return r
        }

        function q(t, e, n) {
            var r, i, o, a, s, l, u, c, f = this,
                d = {},
                h = t.style,
                p = t.nodeType && Nt(t),
                g = lt._data(t, "fxshow");
            n.queue || (s = lt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, lt.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = lt.css(t, "display"), c = "none" === u ? lt._data(t, "olddisplay") || A(t.nodeName) : u, "inline" === c && "none" === lt.css(t, "float") && (at.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", at.shrinkWrapBlocks() || f.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (r in e)
                if (i = e[r], be.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        p = !0
                    }
                    d[r] = g && g[r] || lt.style(t, r)
                } else u = void 0;
            if (lt.isEmptyObject(d)) "inline" === ("none" === u ? A(t.nodeName) : u) && (h.display = u);
            else {
                g ? "hidden" in g && (p = g.hidden) : g = lt._data(t, "fxshow", {}), o && (g.hidden = !p), p ? lt(t).show() : f.done(function() {
                    lt(t).hide()
                }), f.done(function() {
                    var e;
                    lt._removeData(t, "fxshow");
                    for (e in d) lt.style(t, e, d[e])
                });
                for (r in d) a = I(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function B(t, e) {
            var n, r, i, o, a;
            for (n in t)
                if (r = lt.camelCase(n), i = e[r], o = t[n], lt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = lt.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete t[r];
                    for (n in o) n in t || (t[n] = o[n], e[n] = i)
                } else e[r] = i
        }

        function z(t, e, n) {
            var r, i, o = 0,
                a = ke.length,
                s = lt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (i) return !1;
                    for (var e = ve || H(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(t, [u, o, n]), 1 > o && l ? n : (s.resolveWith(t, [u]), !1)
                },
                u = s.promise({
                    elem: t,
                    props: lt.extend({}, e),
                    opts: lt.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ve || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var r = lt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(e) {
                        var n = 0,
                            r = e ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) u.tweens[n].run(1);
                        return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (B(c, u.opts.specialEasing); a > o; o++)
                if (r = ke[o].call(u, t, c, u.opts)) return r;
            return lt.map(c, I, u), lt.isFunction(u.opts.start) && u.opts.start.call(t, u), lt.fx.timer(lt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function R(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0,
                    o = e.toLowerCase().match(Ct) || [];
                if (lt.isFunction(n))
                    for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function W(t, e, n, r) {
            function i(s) {
                var l;
                return o[s] = !0, lt.each(t[s] || [], function(t, s) {
                    var u = s(e, n, r);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
                }), l
            }
            var o = {},
                a = t === Ge;
            return i(e.dataTypes[0]) || !o["*"] && i("*")
        }

        function V(t, e) {
            var n, r, i = lt.ajaxSettings.flatOptions || {};
            for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
            return n && lt.extend(!0, t, n), t
        }

        function X(t, e, n) {
            for (var r, i, o, a, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (a in s)
                    if (s[a] && s[a].test(i)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function G(t, e, n, r) {
            var i, o, a, s, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)
                    for (i in u)
                        if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function Y(t, e, n, r) {
            var i;
            if (lt.isArray(e)) lt.each(e, function(e, i) {
                n || Ke.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
            });
            else if (n || "object" !== lt.type(e)) r(t, e);
            else
                for (i in e) Y(t + "[" + i + "]", e[i], n, r)
        }

        function U() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }

        function Z() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function K(t) {
            return lt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var J = [],
            Q = J.slice,
            tt = J.concat,
            et = J.push,
            nt = J.indexOf,
            rt = {},
            it = rt.toString,
            ot = rt.hasOwnProperty,
            at = {},
            st = "1.11.3",
            lt = function(t, e) {
                return new lt.fn.init(t, e)
            },
            ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ct = /^-ms-/,
            ft = /-([\da-z])/gi,
            dt = function(t, e) {
                return e.toUpperCase()
            };
        lt.fn = lt.prototype = {
            jquery: st,
            constructor: lt,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            },
            pushStack: function(t) {
                var e = lt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return lt.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(lt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: et,
            sort: J.sort,
            splice: J.splice
        }, lt.extend = lt.fn.extend = function() {
            var t, e, n, r, i, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || lt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (i = arguments[s]))
                    for (r in i) t = a[r], n = i[r], a !== n && (u && n && (lt.isPlainObject(n) || (e = lt.isArray(n))) ? (e ? (e = !1, o = t && lt.isArray(t) ? t : []) : o = t && lt.isPlainObject(t) ? t : {}, a[r] = lt.extend(u, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }, lt.extend({
            expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === lt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === lt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !lt.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ot.call(t, "constructor") && !ot.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (at.ownLast)
                    for (e in t) return ot.call(t, e);
                for (e in t);
                return void 0 === e || ot.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[it.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                t && lt.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(t) {
                return t.replace(ct, "ms-").replace(ft, dt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var r, i = 0,
                    o = t.length,
                    s = a(t);
                if (n) {
                    if (s)
                        for (; o > i && (r = e.apply(t[i], n), r !== !1); i++);
                    else
                        for (i in t)
                            if (r = e.apply(t[i], n), r === !1) break
                } else if (s)
                    for (; o > i && (r = e.call(t[i], i, t[i]), r !== !1); i++);
                else
                    for (i in t)
                        if (r = e.call(t[i], i, t[i]), r === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(ut, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (a(Object(t)) ? lt.merge(n, "string" == typeof t ? [t] : t) : et.call(n, t)), n
            },
            inArray: function(t, e, n) {
                var r;
                if (e) {
                    if (nt) return nt.call(e, t, n);
                    for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
                if (n !== n)
                    for (; void 0 !== e[r];) t[i++] = e[r++];
                return t.length = i, t
            },
            grep: function(t, e, n) {
                for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var r, i = 0,
                    o = t.length,
                    s = a(t),
                    l = [];
                if (s)
                    for (; o > i; i++) r = e(t[i], i, n), null != r && l.push(r);
                else
                    for (i in t) r = e(t[i], i, n), null != r && l.push(r);
                return tt.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, r, i;
                return "string" == typeof e && (i = t[e], e = t, t = i), lt.isFunction(t) ? (n = Q.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(Q.call(arguments)))
                }, r.guid = t.guid = t.guid || lt.guid++, r) : void 0
            },
            now: function() {
                return +new Date
            },
            support: at
        }), lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            rt["[object " + e + "]"] = e.toLowerCase()
        });
        var ht =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(t) {
                function e(t, e, n, r) {
                    var i, o, a, s, l, u, f, h, p, g;
                    if ((e ? e.ownerDocument || e : q) !== N && j(e), e = e || N, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && F) {
                        if (11 !== s && (i = yt.exec(t)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && $(e, o) && o.id === a) return n.push(o), n
                            } else {
                                if (i[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                                if ((a = i[3]) && w.getElementsByClassName) return J.apply(n, e.getElementsByClassName(a)), n
                            }
                        if (w.qsa && (!D || !D.test(t))) {
                            if (h = f = I, p = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                                for (u = S(t), (f = e.getAttribute("id")) ? h = f.replace(xt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + d(u[l]);
                                p = bt.test(t) && c(e.parentNode) || e, g = u.join(",")
                            }
                            if (g) try {
                                return J.apply(n, p.querySelectorAll(g)), n
                            } catch (m) {} finally {
                                f || e.removeAttribute("id")
                            }
                        }
                    }
                    return E(t.replace(lt, "$1"), e, n, r)
                }

                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                    var e = [];
                    return t
                }

                function r(t) {
                    return t[I] = !0, t
                }

                function i(t) {
                    var e = N.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), r = t.length; r--;) k.attrHandle[n[r]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function s(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function u(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function f() {}

                function d(t) {
                    for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
                    return r
                }

                function h(t, e, n) {
                    var r = e.dir,
                        i = n && "parentNode" === r,
                        o = z++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[r];)
                            if (1 === e.nodeType || i) return t(e, n, o)
                    } : function(e, n, a) {
                        var s, l, u = [B, o];
                        if (a) {
                            for (; e = e[r];)
                                if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                        } else
                            for (; e = e[r];)
                                if (1 === e.nodeType || i) {
                                    if (l = e[I] || (e[I] = {}), (s = l[r]) && s[0] === B && s[1] === o) return u[2] = s[2];
                                    if (l[r] = u, u[2] = t(e, n, a)) return !0
                                }
                    }
                }

                function p(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--;)
                            if (!t[i](e, n, r)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
                    return r
                }

                function m(t, e, n, r, i) {
                    for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
                    return a
                }

                function v(t, e, n, i, o, a) {
                    return i && !i[I] && (i = v(i)), o && !o[I] && (o = v(o, a)), r(function(r, a, s, l) {
                        var u, c, f, d = [],
                            h = [],
                            p = a.length,
                            v = r || g(e || "*", s.nodeType ? [s] : s, []),
                            y = !t || !r && e ? v : m(v, d, t, s, l),
                            b = n ? o || (r ? t : p || i) ? [] : a : y;
                        if (n && n(y, b, s, l), i)
                            for (u = m(b, h), i(u, [], s, l), c = u.length; c--;)(f = u[c]) && (b[h[c]] = !(y[h[c]] = f));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                                    o(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(f = b[c]) && (u = o ? tt(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f))
                            }
                        } else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
                    })
                }

                function y(t) {
                    for (var e, n, r, i = t.length, o = k.relative[t[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = h(function(t) {
                            return t === e
                        }, a, !0), u = h(function(t) {
                            return tt(e, t) > -1
                        }, a, !0), c = [function(t, n, r) {
                            var i = !o && (r || n !== M) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                            return e = null, i
                        }]; i > s; s++)
                        if (n = k.relative[t[s].type]) c = [h(p(c), n)];
                        else {
                            if (n = k.filter[t[s].type].apply(null, t[s].matches), n[I]) {
                                for (r = ++s; i > r && !k.relative[t[r].type]; r++);
                                return v(s > 1 && p(c), s > 1 && d(t.slice(0, s - 1).concat({
                                    value: " " === t[s - 2].type ? "*" : ""
                                })).replace(lt, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && d(t))
                            }
                            c.push(n)
                        }
                    return p(c)
                }

                function b(t, n) {
                    var i = n.length > 0,
                        o = t.length > 0,
                        a = function(r, a, s, l, u) {
                            var c, f, d, h = 0,
                                p = "0",
                                g = r && [],
                                v = [],
                                y = M,
                                b = r || o && k.find.TAG("*", u),
                                x = B += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (u && (M = a !== N && a); p !== w && null != (c = b[p]); p++) {
                                if (o && c) {
                                    for (f = 0; d = t[f++];)
                                        if (d(c, a, s)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (B = x)
                                }
                                i && ((c = !d && c) && h--, r && g.push(c))
                            }
                            if (h += p, i && p !== h) {
                                for (f = 0; d = n[f++];) d(g, v, a, s);
                                if (r) {
                                    if (h > 0)
                                        for (; p--;) g[p] || v[p] || (v[p] = Z.call(l));
                                    v = m(v)
                                }
                                J.apply(l, v), u && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                            }
                            return u && (B = x, M = y), g
                        };
                    return i ? r(a) : a
                }
                var x, w, k, C, T, S, _, E, M, A, O, j, N, P, F, D, L, H, $, I = "sizzle" + 1 * new Date,
                    q = t.document,
                    B = 0,
                    z = 0,
                    R = n(),
                    W = n(),
                    V = n(),
                    X = function(t, e) {
                        return t === e && (O = !0), 0
                    },
                    G = 1 << 31,
                    Y = {}.hasOwnProperty,
                    U = [],
                    Z = U.pop,
                    K = U.push,
                    J = U.push,
                    Q = U.slice,
                    tt = function(t, e) {
                        for (var n = 0, r = t.length; r > n; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    it = rt.replace("w", "w#"),
                    ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                    st = new RegExp(nt + "+", "g"),
                    lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    ut = new RegExp("^" + nt + "*," + nt + "*"),
                    ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    dt = new RegExp(at),
                    ht = new RegExp("^" + it + "$"),
                    pt = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ot),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    gt = /^(?:input|select|textarea|button)$/i,
                    mt = /^h\d$/i,
                    vt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    xt = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    kt = function(t, e, n) {
                        var r = "0x" + e - 65536;
                        return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    Ct = function() {
                        j()
                    };
                try {
                    J.apply(U = Q.call(q.childNodes), q.childNodes), U[q.childNodes.length].nodeType
                } catch (Tt) {
                    J = {
                        apply: U.length ? function(t, e) {
                            K.apply(t, Q.call(e))
                        } : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];);
                            t.length = n - 1
                        }
                    }
                }
                w = e.support = {}, T = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, j = e.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : q;
                    return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, P = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), F = !T(r), w.attributes = i(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = i(function(t) {
                        return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function(t) {
                        return P.appendChild(t).id = I, !r.getElementsByName || !r.getElementsByName(I).length
                    }), w.getById ? (k.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && F) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function(t) {
                        var e = t.replace(wt, kt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete k.find.ID, k.filter.ID = function(t) {
                        var e = t.replace(wt, kt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), k.find.TAG = w.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, k.find.CLASS = w.getElementsByClassName && function(t, e) {
                        return F ? e.getElementsByClassName(t) : void 0
                    }, L = [], D = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function(t) {
                        P.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + I + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || D.push(".#.+[+~]")
                    }), i(function(t) {
                        var e = r.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                    })), (w.matchesSelector = vt.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                        w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), L.push("!=", at)
                    }), D = D.length && new RegExp(D.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(P.compareDocumentPosition), $ = e || vt.test(P.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, X = e ? function(t, e) {
                        if (t === e) return O = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === q && $(q, t) ? -1 : e === r || e.ownerDocument === q && $(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return O = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            l = [t],
                            u = [e];
                        if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                        if (o === s) return a(t, e);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (; l[i] === u[i];) i++;
                        return i ? a(l[i], u[i]) : l[i] === q ? -1 : u[i] === q ? 1 : 0
                    }, r) : N
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== N && j(t), n = n.replace(ft, "='$1']"), w.matchesSelector && F && (!L || !L.test(n)) && (!D || !D.test(n))) try {
                        var r = H.call(t, n);
                        if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                    } catch (i) {}
                    return e(n, N, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== N && j(t), $(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== N && j(t);
                    var n = k.attrHandle[e.toLowerCase()],
                        r = n && Y.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !F) : void 0;
                    return void 0 !== r ? r : w.attributes || !F ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        i = 0;
                    if (O = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(X), O) {
                        for (; e = t[i++];) e === t[i] && (r = n.push(i));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return A = null, t
                }, C = e.getText = function(t) {
                    var e, n = "",
                        r = 0,
                        i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                        } else if (3 === i || 4 === i) return t.nodeValue
                    } else
                        for (; e = t[r++];) n += C(e);
                    return n
                }, k = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(wt, kt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(wt, kt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = R[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, r) {
                            return function(i) {
                                var o = e.attr(i, t);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                s = "of-type" === e;
                            return 1 === r && 0 === i ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = s && e.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (c = m[I] || (m[I] = {}), u = c[t] || [], h = u[0] === B && u[1], d = u[0] === B && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
                                            if (1 === f.nodeType && ++d && f === e) {
                                                c[t] = [B, h, d];
                                                break
                                            }
                                    } else if (y && (u = (e[I] || (e[I] = {}))[t]) && u[0] === B) d = u[1];
                                    else
                                        for (;
                                            (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[I] || (f[I] = {}))[t] = [B, d]), f !== e)););
                                    return d -= i, d === r || d % r === 0 && d / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var i, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[I] ? o(n) : o.length > 1 ? (i = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                                for (var r, i = o(t, n), a = i.length; a--;) r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                            }) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = [],
                                n = [],
                                i = _(t.replace(lt, "$1"));
                            return i[I] ? r(function(t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: r(function(t) {
                            return t = t.replace(wt, kt),
                                function(e) {
                                    return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                                }
                        }),
                        lang: r(function(t) {
                            return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, kt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === P
                        },
                        focus: function(t) {
                            return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !k.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return gt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(t, e) {
                            return [e - 1]
                        }),
                        eq: u(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: u(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: u(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: u(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                            return t
                        }),
                        gt: u(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                            return t
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[x] = s(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[x] = l(x);
                return f.prototype = k.filters = k.pseudos, k.setFilters = new f, S = e.tokenize = function(t, n) {
                    var r, i, o, a, s, l, u, c = W[t + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = t, l = [], u = k.preFilter; s;) {
                        r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(lt, " ")
                        }), s = s.slice(r.length));
                        for (a in k.filter) !(i = pt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? e.error(t) : W(t, l).slice(0)
                }, _ = e.compile = function(t, e) {
                    var n, r = [],
                        i = [],
                        o = V[t + " "];
                    if (!o) {
                        for (e || (e = S(t)), n = e.length; n--;) o = y(e[n]), o[I] ? r.push(o) : i.push(o);
                        o = V(t, b(i, r)), o.selector = t
                    }
                    return o
                }, E = e.select = function(t, e, n, r) {
                    var i, o, a, s, l, u = "function" == typeof t && t,
                        f = !r && S(t = u.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && F && k.relative[o[1].type]) {
                            if (e = (k.find.ID(a.matches[0].replace(wt, kt), e) || [])[0], !e) return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = pt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                            if ((l = k.find[s]) && (r = l(a.matches[0].replace(wt, kt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                                if (o.splice(i, 1), t = r.length && d(o), !t) return J.apply(n, r), n;
                                break
                            }
                    }
                    return (u || _(t, f))(r, e, !F, n, bt.test(t) && c(e.parentNode) || e), n
                }, w.sortStable = I.split("").sort(X).join("") === I, w.detectDuplicates = !!O, j(), w.sortDetached = i(function(t) {
                    return 1 & t.compareDocumentPosition(N.createElement("div"))
                }), i(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), i(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function(t, e, n) {
                    var r;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), e
            }(n);
        lt.find = ht, lt.expr = ht.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = ht.uniqueSort, lt.text = ht.getText, lt.isXMLDoc = ht.isXML, lt.contains = ht.contains;
        var pt = lt.expr.match.needsContext,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^.[^:#\[\.,]*$/;
        lt.filter = function(t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? lt.find.matchesSelector(r, t) ? [r] : [] : lt.find.matches(t, lt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, lt.fn.extend({
            find: function(t) {
                var e, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof t) return this.pushStack(lt(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (lt.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) lt.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? lt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(s(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(s(this, t || [], !0))
            },
            is: function(t) {
                return !!s(this, "string" == typeof t && pt.test(t) ? lt(t) : t || [], !1).length
            }
        });
        var vt, yt = n.document,
            bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            xt = lt.fn.init = function(t, e) {
                var n, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : bt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || vt).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof lt ? e[0] : e, lt.merge(this, lt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : yt, !0)), gt.test(n[1]) && lt.isPlainObject(e))
                            for (n in e) lt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (r = yt.getElementById(n[2]), r && r.parentNode) {
                        if (r.id !== n[2]) return vt.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = yt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? "undefined" != typeof vt.ready ? vt.ready(t) : t(lt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
            };
        xt.prototype = lt.fn, vt = lt(yt);
        var wt = /^(?:parents|prev(?:Until|All))/,
            kt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        lt.extend({
            dir: function(t, e, n) {
                for (var r = [], i = t[e]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !lt(i).is(n));) 1 === i.nodeType && r.push(i), i = i[e];
                return r
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), lt.fn.extend({
            has: function(t) {
                var e, n = lt(t, this),
                    r = n.length;
                return this.filter(function() {
                    for (e = 0; r > e; e++)
                        if (lt.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, r = 0, i = this.length, o = [], a = pt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? lt.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(lt.unique(lt.merge(this.get(), lt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), lt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return lt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return lt.dir(t, "parentNode", n)
            },
            next: function(t) {
                return l(t, "nextSibling")
            },
            prev: function(t) {
                return l(t, "previousSibling")
            },
            nextAll: function(t) {
                return lt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return lt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return lt.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return lt.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return lt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return lt.sibling(t.firstChild)
            },
            contents: function(t) {
                return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
            }
        }, function(t, e) {
            lt.fn[t] = function(n, r) {
                var i = lt.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = lt.filter(r, i)), this.length > 1 && (kt[t] || (i = lt.unique(i)), wt.test(t) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var Ct = /\S+/g,
            Tt = {};
        lt.Callbacks = function(t) {
            t = "string" == typeof t ? Tt[t] || u(t) : lt.extend({}, t);
            var e, n, r, i, o, a, s = [],
                l = !t.once && [],
                c = function(u) {
                    for (n = t.memory && u, r = !0, o = a || 0, a = 0, i = s.length, e = !0; s && i > o; o++)
                        if (s[o].apply(u[0], u[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, s && (l ? l.length && c(l.shift()) : n ? s = [] : f.disable())
                },
                f = {
                    add: function() {
                        if (s) {
                            var r = s.length;
                            ! function o(e) {
                                lt.each(e, function(e, n) {
                                    var r = lt.type(n);
                                    "function" === r ? t.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments), e ? i = s.length : n && (a = r, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && lt.each(arguments, function(t, n) {
                            for (var r;
                                (r = lt.inArray(n, s, r)) > -1;) s.splice(r, 1), e && (i >= r && i--, o >= r && o--)
                        }), this
                    },
                    has: function(t) {
                        return t ? lt.inArray(t, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], i = 0, this
                    },
                    disable: function() {
                        return s = l = n = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return l = void 0, n || f.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(t, n) {
                        return !s || r && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : c(n)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return f
        }, lt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", lt.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return lt.Deferred(function(n) {
                                lt.each(e, function(e, o) {
                                    var a = lt.isFunction(t[e]) && t[e];
                                    i[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && lt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? lt.extend(t, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, lt.each(e, function(t, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), t && t.call(i, i), i
            },
            when: function(t) {
                var e, n, r, i = 0,
                    o = Q.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && lt.isFunction(t.promise) ? a : 0,
                    l = 1 === s ? t : lt.Deferred(),
                    u = function(t, n, r) {
                        return function(i) {
                            n[t] = this, r[t] = arguments.length > 1 ? Q.call(arguments) : i, r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && lt.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --s;
                return s || l.resolveWith(r, o), l.promise()
            }
        });
        var St;
        lt.fn.ready = function(t) {
            return lt.ready.promise().done(t), this
        }, lt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? lt.readyWait++ : lt.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--lt.readyWait : !lt.isReady) {
                    if (!yt.body) return setTimeout(lt.ready);
                    lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (St.resolveWith(yt, [lt]), lt.fn.triggerHandler && (lt(yt).triggerHandler("ready"), lt(yt).off("ready")))
                }
            }
        }), lt.ready.promise = function(t) {
            if (!St)
                if (St = lt.Deferred(), "complete" === yt.readyState) setTimeout(lt.ready);
                else if (yt.addEventListener) yt.addEventListener("DOMContentLoaded", f, !1), n.addEventListener("load", f, !1);
            else {
                yt.attachEvent("onreadystatechange", f), n.attachEvent("onload", f);
                var e = !1;
                try {
                    e = null == n.frameElement && yt.documentElement
                } catch (r) {}
                e && e.doScroll && ! function i() {
                    if (!lt.isReady) {
                        try {
                            e.doScroll("left")
                        } catch (t) {
                            return setTimeout(i, 50)
                        }
                        c(), lt.ready()
                    }
                }()
            }
            return St.promise(t)
        };
        var _t, Et = "undefined";
        for (_t in lt(at)) break;
        at.ownLast = "0" !== _t, at.inlineBlockNeedsLayout = !1, lt(function() {
                var t, e, n, r;
                n = yt.getElementsByTagName("body")[0], n && n.style && (e = yt.createElement("div"), r = yt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Et && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", at.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
            }),
            function() {
                var t = yt.createElement("div");
                if (null == at.deleteExpando) {
                    at.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        at.deleteExpando = !1
                    }
                }
                t = null
            }(), lt.acceptData = function(t) {
                var e = lt.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            At = /([A-Z])/g;
        lt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando], !!t && !h(t)
            },
            data: function(t, e, n) {
                return p(t, e, n)
            },
            removeData: function(t, e) {
                return g(t, e)
            },
            _data: function(t, e, n) {
                return p(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return g(t, e, !0)
            }
        }), lt.fn.extend({
            data: function(t, e) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = lt.data(o), 1 === o.nodeType && !lt._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = lt.camelCase(r.slice(5)), d(o, r, i[r])));
                        lt._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function() {
                    lt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    lt.data(this, t, e)
                }) : o ? d(o, t, lt.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    lt.removeData(this, t)
                })
            }
        }), lt.extend({
            queue: function(t, e, n) {
                var r;
                return t ? (e = (e || "fx") + "queue", r = lt._data(t, e), n && (!r || lt.isArray(n) ? r = lt._data(t, e, lt.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = lt.queue(t, e),
                    r = n.length,
                    i = n.shift(),
                    o = lt._queueHooks(t, e),
                    a = function() {
                        lt.dequeue(t, e)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return lt._data(t, n) || lt._data(t, n, {
                    empty: lt.Callbacks("once memory").add(function() {
                        lt._removeData(t, e + "queue"), lt._removeData(t, n)
                    })
                })
            }
        }), lt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? lt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = lt.queue(this, t, e);
                    lt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && lt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    lt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, r = 1,
                    i = lt.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = lt._data(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(e)
            }
        });
        var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            jt = ["Top", "Right", "Bottom", "Left"],
            Nt = function(t, e) {
                return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
            },
            Pt = lt.access = function(t, e, n, r, i, o, a) {
                var s = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === lt.type(n)) {
                    i = !0;
                    for (s in n) lt.access(t, e, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, lt.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(lt(t), n)
                    })), e))
                    for (; l > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            Ft = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = yt.createElement("input"),
                e = yt.createElement("div"),
                n = yt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", at.leadingWhitespace = 3 === e.firstChild.nodeType, at.tbody = !e.getElementsByTagName("tbody").length, at.htmlSerialize = !!e.getElementsByTagName("link").length, at.html5Clone = "<:nav></:nav>" !== yt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), at.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, at.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    at.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete e.test
                } catch (r) {
                    at.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, e, r = yt.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) e = "on" + t, (at[t + "Bubbles"] = e in n) || (r.setAttribute(e, "t"), at[t + "Bubbles"] = r.attributes[e].expando === !1);
            r = null
        }();
        var Dt = /^(?:input|select|textarea)$/i,
            Lt = /^key/,
            Ht = /^(?:mouse|pointer|contextmenu)|click/,
            $t = /^(?:focusinfocus|focusoutblur)$/,
            It = /^([^.]*)(?:\.(.+)|)$/;
        lt.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, l, u, c, f, d, h, p, g, m = lt._data(t);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = lt.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                            return typeof lt === Et || t && lt.event.triggered === t.type ? void 0 : lt.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(Ct) || [""], s = e.length; s--;) o = It.exec(e[s]) || [], h = g = o[1], p = (o[2] || "").split(".").sort(), h && (u = lt.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = lt.event.special[h] || {}, f = lt.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && lt.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, l), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, u.setup && u.setup.call(t, r, p, c) !== !1 || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), lt.event.global[h] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, r, i) {
                var o, a, s, l, u, c, f, d, h, p, g, m = lt.hasData(t) && lt._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(Ct) || [""], u = e.length; u--;)
                        if (s = It.exec(e[u]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (f = lt.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                l = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(t, a));
                            l && !d.length && (f.teardown && f.teardown.call(t, p, m.handle) !== !1 || lt.removeEvent(t, h, m.handle), delete c[h])
                        } else
                            for (h in c) lt.event.remove(t, h + e[u], n, r, !0);
                    lt.isEmptyObject(c) && (delete m.handle, lt._removeData(t, "events"))
                }
            },
            trigger: function(t, e, r, i) {
                var o, a, s, l, u, c, f, d = [r || yt],
                    h = ot.call(t, "type") ? t.type : t,
                    p = ot.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = r = r || yt, 3 !== r.nodeType && 8 !== r.nodeType && !$t.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[lt.expando] ? t : new lt.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : lt.makeArray(e, [t]), u = lt.event.special[h] || {}, i || !u.trigger || u.trigger.apply(r, e) !== !1)) {
                    if (!i && !u.noBubble && !lt.isWindow(r)) {
                        for (l = u.delegateType || h, $t.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                        c === (r.ownerDocument || yt) && d.push(c.defaultView || c.parentWindow || n)
                    }
                    for (f = 0;
                        (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || h, o = (lt._data(s, "events") || {})[t.type] && lt._data(s, "handle"), o && o.apply(s, e), o = a && s[a], o && o.apply && lt.acceptData(s) && (t.result = o.apply(s, e), t.result === !1 && t.preventDefault());
                    if (t.type = h, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), e) === !1) && lt.acceptData(r) && a && r[h] && !lt.isWindow(r)) {
                        c = r[a], c && (r[a] = null), lt.event.triggered = h;
                        try {
                            r[h]()
                        } catch (g) {}
                        lt.event.triggered = void 0, c && (r[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(t) {
                t = lt.event.fix(t);
                var e, n, r, i, o, a = [],
                    s = Q.call(arguments),
                    l = (lt._data(this, "events") || {})[t.type] || [],
                    u = lt.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (a = lt.event.handlers.call(this, t, l), e = 0;
                        (i = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = i.elem, o = 0;
                            (r = i.handlers[o++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, r, i, o, a = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], o = 0; s > o; o++) r = e[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? lt(n, this).index(l) >= 0 : lt.find(n, this, null, [l]).length), i[n] && i.push(r);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            fix: function(t) {
                if (t[lt.expando]) return t;
                var e, n, r, i = t.type,
                    o = t,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Ht.test(i) ? this.mouseHooks : Lt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new lt.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || yt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, r, i, o = e.button,
                        a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || yt, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== y() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === y() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return lt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, r) {
                var i = lt.extend(new lt.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? lt.event.trigger(i, null, e) : lt.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, lt.removeEvent = yt.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var r = "on" + e;
            t.detachEvent && (typeof t[r] === Et && (t[r] = null), t.detachEvent(r, n))
        }, lt.Event = function(t, e) {
            return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? m : v) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), void(this[lt.expando] = !0)) : new lt.Event(t, e)
        }, lt.Event.prototype = {
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = m, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = m, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = m, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, lt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            lt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, r = this,
                        i = t.relatedTarget,
                        o = t.handleObj;
                    return i && (i === r || lt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), at.submitBubbles || (lt.event.special.submit = {
            setup: function() {
                return lt.nodeName(this, "form") ? !1 : void lt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = lt.nodeName(e, "input") || lt.nodeName(e, "button") ? e.form : void 0;
                    n && !lt._data(n, "submitBubbles") && (lt.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), lt._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return lt.nodeName(this, "form") ? !1 : void lt.event.remove(this, "._submit")
            }
        }), at.changeBubbles || (lt.event.special.change = {
            setup: function() {
                return Dt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (lt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), lt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
                })), !1) : void lt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Dt.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
                    }), lt._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return lt.event.remove(this, "._change"), !Dt.test(this.nodeName)
            }
        }), at.focusinBubbles || lt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                lt.event.simulate(e, t.target, lt.event.fix(t), !0)
            };
            lt.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = lt._data(r, e);
                    i || r.addEventListener(t, n, !0), lt._data(r, e, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = lt._data(r, e) - 1;
                    i ? lt._data(r, e, i) : (r.removeEventListener(t, n, !0), lt._removeData(r, e))
                }
            }
        }), lt.fn.extend({
            on: function(t, e, n, r, i) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (o in t) this.on(o, e, n, t[o], i);
                    return this
                }
                if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = v;
                else if (!r) return this;
                return 1 === i && (a = r, r = function(t) {
                    return lt().off(t), a.apply(this, arguments)
                }, r.guid = a.guid || (a.guid = lt.guid++)), this.each(function() {
                    lt.event.add(this, t, r, n, e)
                })
            },
            one: function(t, e, n, r) {
                return this.on(t, e, n, r, 1)
            },
            off: function(t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, lt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = v), this.each(function() {
                    lt.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    lt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? lt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Bt = / jQuery\d+="(?:null|\d+)"/g,
            zt = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
            Rt = /^\s+/,
            Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Vt = /<([\w:]+)/,
            Xt = /<tbody/i,
            Gt = /<|&#?\w+;/,
            Yt = /<(?:script|style|link)/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Zt = /^$|\/(?:java|ecma)script/i,
            Kt = /^true\/(.*)/,
            Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: at.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            te = b(yt),
            ee = te.appendChild(yt.createElement("div"));
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, lt.extend({
            clone: function(t, e, n) {
                var r, i, o, a, s, l = lt.contains(t.ownerDocument, t);
                if (at.html5Clone || lt.isXMLDoc(t) || !zt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML, ee.removeChild(o = ee.firstChild)), !(at.noCloneEvent && at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t)))
                    for (r = x(o), s = x(t), a = 0; null != (i = s[a]); ++a) r[a] && E(i, r[a]);
                if (e)
                    if (n)
                        for (s = s || x(t), r = r || x(o), a = 0; null != (i = s[a]); a++) _(i, r[a]);
                    else _(t, o);
                return r = x(o, "script"), r.length > 0 && S(r, !l && x(t, "script")), r = s = i = null, o
            },
            buildFragment: function(t, e, n, r) {
                for (var i, o, a, s, l, u, c, f = t.length, d = b(e), h = [], p = 0; f > p; p++)
                    if (o = t[p], o || 0 === o)
                        if ("object" === lt.type(o)) lt.merge(h, o.nodeType ? [o] : o);
                        else if (Gt.test(o)) {
                    for (s = s || d.appendChild(e.createElement("div")), l = (Vt.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, s.innerHTML = c[1] + o.replace(Wt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                    if (!at.leadingWhitespace && Rt.test(o) && h.push(e.createTextNode(Rt.exec(o)[0])), !at.tbody)
                        for (o = "table" !== l || Xt.test(o) ? "<table>" !== c[1] || Xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) lt.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (lt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild
                } else h.push(e.createTextNode(o));
                for (s && d.removeChild(s), at.appendChecked || lt.grep(x(h, "input"), w), p = 0; o = h[p++];)
                    if ((!r || -1 === lt.inArray(o, r)) && (a = lt.contains(o.ownerDocument, o), s = x(d.appendChild(o), "script"), a && S(s), n))
                        for (i = 0; o = s[i++];) Zt.test(o.type || "") && n.push(o);
                return s = null, d
            },
            cleanData: function(t, e) {
                for (var n, r, i, o, a = 0, s = lt.expando, l = lt.cache, u = at.deleteExpando, c = lt.event.special; null != (n = t[a]); a++)
                    if ((e || lt.acceptData(n)) && (i = n[s], o = i && l[i])) {
                        if (o.events)
                            for (r in o.events) c[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, o.handle);
                        l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Et ? n.removeAttribute(s) : n[s] = null, J.push(i))
                    }
            }
        }), lt.fn.extend({
            text: function(t) {
                return Pt(this, function(t) {
                    return void 0 === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || yt).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, r = t ? lt.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || lt.cleanData(x(n)), n.parentNode && (e && lt.contains(n.ownerDocument, n) && S(x(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && lt.cleanData(x(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && lt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return lt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Pt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Bt, "") : void 0;
                    if ("string" == typeof t && !Yt.test(t) && (at.htmlSerialize || !zt.test(t)) && (at.leadingWhitespace || !Rt.test(t)) && !Qt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Wt, "<$1></$2>");
                        try {
                            for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (lt.cleanData(x(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (i) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, lt.cleanData(x(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = tt.apply([], t);
                var n, r, i, o, a, s, l = 0,
                    u = this.length,
                    c = this,
                    f = u - 1,
                    d = t[0],
                    h = lt.isFunction(d);
                if (h || u > 1 && "string" == typeof d && !at.checkClone && Ut.test(d)) return this.each(function(n) {
                    var r = c.eq(n);
                    h && (t[0] = d.call(this, n, r.html())), r.domManip(t, e)
                });
                if (u && (s = lt.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = lt.map(x(s, "script"), C), i = o.length; u > l; l++) r = s, l !== f && (r = lt.clone(r, !0, !0), i && lt.merge(o, x(r, "script"))), e.call(this[l], r, l);
                    if (i)
                        for (a = o[o.length - 1].ownerDocument, lt.map(o, T), l = 0; i > l; l++) r = o[l], Zt.test(r.type || "") && !lt._data(r, "globalEval") && lt.contains(a, r) && (r.src ? lt._evalUrl && lt._evalUrl(r.src) : lt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                    s = n = null
                }
                return this
            }
        }), lt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            lt.fn[t] = function(t) {
                for (var n, r = 0, i = [], o = lt(t), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), lt(o[r])[e](n), et.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ne, re = {};
        ! function() {
            var t;
            at.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, r;
                return n = yt.getElementsByTagName("body")[0], n && n.style ? (e = yt.createElement("div"), r = yt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Et && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(yt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
            }
        }();
        var ie, oe, ae = /^margin/,
            se = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"),
            le = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (ie = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
            }, oe = function(t, e, n) {
                var r, i, o, a, s = t.style;
                return n = n || ie(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || lt.contains(t.ownerDocument, t) || (a = lt.style(t, e)), se.test(a) && ae.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : yt.documentElement.currentStyle && (ie = function(t) {
                return t.currentStyle
            }, oe = function(t, e, n) {
                var r, i, o, a, s = t.style;
                return n = n || ie(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), se.test(a) && !le.test(e) && (r = s.left, i = t.runtimeStyle, o = i && i.left, o && (i.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function t() {
                    var t, e, r, i;
                    e = yt.getElementsByTagName("body")[0], e && e.style && (t = yt.createElement("div"), r = yt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(t, null) || {}).top, a = "4px" === (n.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, i = t.appendChild(yt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), e.removeChild(r))
                }
                var e, r, i, o, a, s, l;
                e = yt.createElement("div"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", at.opacity = "0.5" === r.opacity, at.cssFloat = !!r.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === e.style.backgroundClip, at.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, lt.extend(at, {
                    reliableHiddenOffsets: function() {
                        return null == s && t(), s
                    },
                    boxSizingReliable: function() {
                        return null == a && t(), a
                    },
                    pixelPosition: function() {
                        return null == o && t(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && t(), l
                    }
                }))
            }(), lt.swap = function(t, e, n, r) {
                var i, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e) t.style[o] = a[o];
                return i
            };
        var ue = /alpha\([^)]*\)/i,
            ce = /opacity\s*=\s*([^)]*)/,
            fe = /^(none|table(?!-c[ea]).+)/,
            de = new RegExp("^(" + Ot + ")(.*)$", "i"),
            he = new RegExp("^([+-])=(" + Ot + ")", "i"),
            pe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ge = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            me = ["Webkit", "O", "Moz", "ms"];
        lt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = oe(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": at.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = lt.camelCase(e),
                        l = t.style;
                    if (e = lt.cssProps[s] || (lt.cssProps[s] = j(l, s)), a = lt.cssHooks[e] || lt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e];
                    if (o = typeof n, "string" === o && (i = he.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(lt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || lt.cssNumber[s] || (n += "px"), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, r))))) try {
                        l[e] = n
                    } catch (u) {}
                }
            },
            css: function(t, e, n, r) {
                var i, o, a, s = lt.camelCase(e);
                return e = lt.cssProps[s] || (lt.cssProps[s] = j(t.style, s)), a = lt.cssHooks[e] || lt.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = oe(t, e, r)), "normal" === o && e in ge && (o = ge[e]), "" === n || n ? (i = parseFloat(o), n === !0 || lt.isNumeric(i) ? i || 0 : o) : o
            }
        }), lt.each(["height", "width"], function(t, e) {
            lt.cssHooks[e] = {
                get: function(t, n, r) {
                    return n ? fe.test(lt.css(t, "display")) && 0 === t.offsetWidth ? lt.swap(t, pe, function() {
                        return D(t, e, r)
                    }) : D(t, e, r) : void 0
                },
                set: function(t, n, r) {
                    var i = r && ie(t);
                    return P(t, n, r ? F(t, e, r, at.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, i), i) : 0)
                }
            }
        }), at.opacity || (lt.cssHooks.opacity = {
            get: function(t, e) {
                return ce.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    r = t.currentStyle,
                    i = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(o.replace(ue, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ue.test(o) ? o.replace(ue, i) : o + " " + i)
            }
        }), lt.cssHooks.marginRight = O(at.reliableMarginRight, function(t, e) {
            return e ? lt.swap(t, {
                display: "inline-block"
            }, oe, [t, "marginRight"]) : void 0
        }), lt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            lt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + jt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, ae.test(t) || (lt.cssHooks[t + e].set = P)
        }), lt.fn.extend({
            css: function(t, e) {
                return Pt(this, function(t, e, n) {
                    var r, i, o = {},
                        a = 0;
                    if (lt.isArray(e)) {
                        for (r = ie(t), i = e.length; i > a; a++) o[e[a]] = lt.css(t, e[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? lt.style(t, e, n) : lt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Nt(this) ? lt(this).show() : lt(this).hide()
                })
            }
        }), lt.Tween = L, L.prototype = {
            constructor: L,
            init: function(t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (lt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, lt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, lt.fx = L.prototype.init, lt.fx.step = {};
        var ve, ye, be = /^(?:toggle|show|hide)$/,
            xe = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"),
            we = /queueHooks$/,
            ke = [q],
            Ce = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        r = n.cur(),
                        i = xe.exec(e),
                        o = i && i[3] || (lt.cssNumber[t] ? "" : "px"),
                        a = (lt.cssNumber[t] || "px" !== o && +r) && xe.exec(lt.css(n.elem, t)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, lt.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        lt.Animation = lt.extend(z, {
                tweener: function(t, e) {
                    lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, r = 0, i = t.length; i > r; r++) n = t[r], Ce[n] = Ce[n] || [], Ce[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ke.unshift(t) : ke.push(t)
                }
            }), lt.speed = function(t, e, n) {
                var r = t && "object" == typeof t ? lt.extend({}, t) : {
                    complete: n || !n && e || lt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !lt.isFunction(e) && e
                };
                return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    lt.isFunction(r.old) && r.old.call(this), r.queue && lt.dequeue(this, r.queue)
                }, r
            }, lt.fn.extend({
                fadeTo: function(t, e, n, r) {
                    return this.filter(Nt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, r)
                },
                animate: function(t, e, n, r) {
                    var i = lt.isEmptyObject(t),
                        o = lt.speed(e, n, r),
                        a = function() {
                            var e = z(this, lt.extend({}, t), o);
                            (i || lt._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, n) {
                    var r = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            i = null != t && t + "queueHooks",
                            o = lt.timers,
                            a = lt._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && we.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                        !e && n || lt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = lt._data(this),
                            r = n[t + "queue"],
                            i = n[t + "queueHooks"],
                            o = lt.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, lt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), lt.each(["toggle", "show", "hide"], function(t, e) {
                var n = lt.fn[e];
                lt.fn[e] = function(t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate($(e, !0), t, r, i)
                }
            }), lt.each({
                slideDown: $("show"),
                slideUp: $("hide"),
                slideToggle: $("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                lt.fn[t] = function(t, n, r) {
                    return this.animate(e, t, n, r)
                }
            }), lt.timers = [], lt.fx.tick = function() {
                var t, e = lt.timers,
                    n = 0;
                for (ve = lt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || lt.fx.stop(), ve = void 0
            }, lt.fx.timer = function(t) {
                lt.timers.push(t), t() ? lt.fx.start() : lt.timers.pop()
            }, lt.fx.interval = 13, lt.fx.start = function() {
                ye || (ye = setInterval(lt.fx.tick, lt.fx.interval))
            }, lt.fx.stop = function() {
                clearInterval(ye), ye = null
            }, lt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, lt.fn.delay = function(t, e) {
                return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var r = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var t, e, n, r, i;
                e = yt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = e.getElementsByTagName("a")[0], n = yt.createElement("select"), i = n.appendChild(yt.createElement("option")), t = e.getElementsByTagName("input")[0], r.style.cssText = "top:1px", at.getSetAttribute = "t" !== e.className, at.style = /top/.test(r.getAttribute("style")), at.hrefNormalized = "/a" === r.getAttribute("href"), at.checkOn = !!t.value, at.optSelected = i.selected, at.enctype = !!yt.createElement("form").enctype, n.disabled = !0, at.optDisabled = !i.disabled, t = yt.createElement("input"), t.setAttribute("value", ""), at.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), at.radioValue = "t" === t.value
            }();
        var Te = /\r/g;
        lt.fn.extend({
            val: function(t) {
                var e, n, r, i = this[0]; {
                    if (arguments.length) return r = lt.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, lt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : lt.isArray(i) && (i = lt.map(i, function(t) {
                            return null == t ? "" : t + ""
                        })), e = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return e = lt.valHooks[i.type] || lt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Te, "") : null == n ? "" : n)
                }
            }
        }), lt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = lt.find.attr(t, "value");
                        return null != e ? e : lt.trim(lt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                            if (n = r[l], (n.selected || l === i) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = lt(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, r, i = t.options, o = lt.makeArray(e), a = i.length; a--;)
                            if (r = i[a], lt.inArray(lt.valHooks.option.get(r), o) >= 0) try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return n || (t.selectedIndex = -1), i
                    }
                }
            }
        }), lt.each(["radio", "checkbox"], function() {
            lt.valHooks[this] = {
                set: function(t, e) {
                    return lt.isArray(e) ? t.checked = lt.inArray(lt(t).val(), e) >= 0 : void 0
                }
            }, at.checkOn || (lt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Se, _e, Ee = lt.expr.attrHandle,
            Me = /^(?:checked|selected)$/i,
            Ae = at.getSetAttribute,
            Oe = at.input;
        lt.fn.extend({
            attr: function(t, e) {
                return Pt(this, lt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    lt.removeAttr(this, t)
                })
            }
        }), lt.extend({
            attr: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Et ? lt.prop(t, e, n) : (1 === o && lt.isXMLDoc(t) || (e = e.toLowerCase(), r = lt.attrHooks[e] || (lt.expr.match.bool.test(e) ? _e : Se)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = lt.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void lt.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, r, i = 0,
                    o = e && e.match(Ct);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) r = lt.propFix[n] || n, lt.expr.match.bool.test(n) ? Oe && Ae || !Me.test(n) ? t[r] = !1 : t[lt.camelCase("default-" + n)] = t[r] = !1 : lt.attr(t, n, ""), t.removeAttribute(Ae ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!at.radioValue && "radio" === e && lt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), _e = {
            set: function(t, e, n) {
                return e === !1 ? lt.removeAttr(t, n) : Oe && Ae || !Me.test(n) ? t.setAttribute(!Ae && lt.propFix[n] || n, n) : t[lt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, lt.each(lt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Ee[e] || lt.find.attr;
            Ee[e] = Oe && Ae || !Me.test(e) ? function(t, e, r) {
                var i, o;
                return r || (o = Ee[e], Ee[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, Ee[e] = o), i
            } : function(t, e, n) {
                return n ? void 0 : t[lt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Oe && Ae || (lt.attrHooks.value = {
            set: function(t, e, n) {
                return lt.nodeName(t, "input") ? void(t.defaultValue = e) : Se && Se.set(t, e, n)
            }
        }), Ae || (Se = {
            set: function(t, e, n) {
                var r = t.getAttributeNode(n);
                return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Ee.id = Ee.name = Ee.coords = function(t, e, n) {
            var r;
            return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
        }, lt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: Se.set
        }, lt.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Se.set(t, "" === e ? !1 : e, n)
            }
        }, lt.each(["width", "height"], function(t, e) {
            lt.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), at.style || (lt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var je = /^(?:input|select|textarea|button|object)$/i,
            Ne = /^(?:a|area)$/i;
        lt.fn.extend({
            prop: function(t, e) {
                return Pt(this, lt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = lt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), lt.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var r, i, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !lt.isXMLDoc(t), o && (e = lt.propFix[e] || e, i = lt.propHooks[e]),
                    void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = lt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : je.test(t.nodeName) || Ne.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), at.hrefNormalized || lt.each(["href", "src"], function(t, e) {
            lt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), at.optSelected || (lt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            lt.propFix[this.toLowerCase()] = this
        }), at.enctype || (lt.propFix.enctype = "encoding");
        var Pe = /[\t\r\n\f]/g;
        lt.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (lt.isFunction(t)) return this.each(function(e) {
                    lt(this).addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(Ct) || []; l > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : " ")) {
                            for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a = lt.trim(r), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (lt.isFunction(t)) return this.each(function(e) {
                    lt(this).removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(Ct) || []; l > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : "")) {
                            for (o = 0; i = e[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            a = t ? lt.trim(r) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : lt.isFunction(t) ? this.each(function(n) {
                    lt(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, r = 0, i = lt(this), o = t.match(Ct) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else n !== Et && "boolean" !== n || (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pe, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            lt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), lt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, r) {
                return this.on(e, t, n, r)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Fe = lt.now(),
            De = /\?/,
            Le = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        lt.parseJSON = function(t) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
            var e, r = null,
                i = lt.trim(t + "");
            return i && !lt.trim(i.replace(Le, function(t, n, i, o) {
                return e && n && (r = 0), 0 === r ? t : (e = i || n, r += !o - !i, "")
            })) ? Function("return " + i)() : lt.error("Invalid JSON: " + t)
        }, lt.parseXML = function(t) {
            var e, r;
            if (!t || "string" != typeof t) return null;
            try {
                n.DOMParser ? (r = new DOMParser, e = r.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
            } catch (i) {
                e = void 0
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + t), e
        };
        var He, $e, Ie = /#.*$/,
            qe = /([?&])_=[^&]*/,
            Be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            ze = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Re = /^(?:GET|HEAD)$/,
            We = /^\/\//,
            Ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Xe = {},
            Ge = {},
            Ye = "*/".concat("*");
        try {
            $e = location.href
        } catch (Ue) {
            $e = yt.createElement("a"), $e.href = "", $e = $e.href
        }
        He = Ve.exec($e.toLowerCase()) || [], lt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $e,
                type: "GET",
                isLocal: ze.test(He[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ye,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": lt.parseJSON,
                    "text xml": lt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? V(V(t, lt.ajaxSettings), e) : V(lt.ajaxSettings, t)
            },
            ajaxPrefilter: R(Xe),
            ajaxTransport: R(Ge),
            ajax: function(t, e) {
                function n(t, e, n, r) {
                    var i, c, v, y, x, k = e;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, n && (y = X(f, w, n)), y = G(f, y, w, i), i ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (lt.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (lt.etag[o] = x)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, i = !v)) : (v = k, !t && k || (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", i ? p.resolveWith(d, [c, k, w]) : p.rejectWith(d, [w, k, v]), w.statusCode(m), m = void 0, l && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : v]), g.fireWith(d, [w, k]), l && (h.trigger("ajaxComplete", [w, f]), --lt.active || lt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, i, o, a, s, l, u, c, f = lt.ajaxSetup({}, e),
                    d = f.context || f,
                    h = f.context && (d.nodeType || d.jquery) ? lt(d) : lt.event,
                    p = lt.Deferred(),
                    g = lt.Callbacks("once memory"),
                    m = f.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; e = Be.exec(a);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return u && u.abort(e), n(0, e), this
                        }
                    };
                if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || $e) + "").replace(Ie, "").replace(We, He[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = lt.trim(f.dataType || "*").toLowerCase().match(Ct) || [""], null == f.crossDomain && (r = Ve.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === He[1] && r[2] === He[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (He[3] || ("http:" === He[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = lt.param(f.data, f.traditional)), W(Xe, f, e, w), 2 === b) return w;
                l = lt.event && f.global, l && 0 === lt.active++ && lt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Re.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (De.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = qe.test(o) ? o.replace(qe, "$1_=" + Fe++) : o + (De.test(o) ? "&" : "?") + "_=" + Fe++)), f.ifModified && (lt.lastModified[o] && w.setRequestHeader("If-Modified-Since", lt.lastModified[o]), lt.etag[o] && w.setRequestHeader("If-None-Match", lt.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : f.accepts["*"]);
                for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
                if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[i](f[i]);
                if (u = W(Ge, f, e, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, n) {
                return lt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return lt.get(t, void 0, e, "script")
            }
        }), lt.each(["get", "post"], function(t, e) {
            lt[e] = function(t, n, r, i) {
                return lt.isFunction(n) && (i = i || r, r = n, n = void 0), lt.ajax({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), lt._evalUrl = function(t) {
            return lt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, lt.fn.extend({
            wrapAll: function(t) {
                if (lt.isFunction(t)) return this.each(function(e) {
                    lt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return lt.isFunction(t) ? this.each(function(e) {
                    lt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = lt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = lt.isFunction(t);
                return this.each(function(n) {
                    lt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), lt.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !at.reliableHiddenOffsets() && "none" === (t.style && t.style.display || lt.css(t, "display"))
        }, lt.expr.filters.visible = function(t) {
            return !lt.expr.filters.hidden(t)
        };
        var Ze = /%20/g,
            Ke = /\[\]$/,
            Je = /\r?\n/g,
            Qe = /^(?:submit|button|image|reset|file)$/i,
            tn = /^(?:input|select|textarea|keygen)/i;
        lt.param = function(t, e) {
            var n, r = [],
                i = function(t, e) {
                    e = lt.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function() {
                i(this.name, this.value)
            });
            else
                for (n in t) Y(n, t[n], e, i);
            return r.join("&").replace(Ze, "+")
        }, lt.fn.extend({
            serialize: function() {
                return lt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = lt.prop(this, "elements");
                    return t ? lt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !lt(this).is(":disabled") && tn.test(this.nodeName) && !Qe.test(t) && (this.checked || !Ft.test(t))
                }).map(function(t, e) {
                    var n = lt(this).val();
                    return null == n ? null : lt.isArray(n) ? lt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Je, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Je, "\r\n")
                    }
                }).get()
            }
        }), lt.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Z()
        } : U;
        var en = 0,
            nn = {},
            rn = lt.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var t in nn) nn[t](void 0, !0)
        }), at.cors = !!rn && "withCredentials" in rn, rn = at.ajax = !!rn, rn && lt.ajaxTransport(function(t) {
            if (!t.crossDomain || at.cors) {
                var e;
                return {
                    send: function(n, r) {
                        var i, o = t.xhr(),
                            a = ++en;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (i in t.xhrFields) o[i] = t.xhrFields[i];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                        o.send(t.hasContent && t.data || null), e = function(n, i) {
                            var s, l, u;
                            if (e && (i || 4 === o.readyState))
                                if (delete nn[a], e = void 0, o.onreadystatechange = lt.noop, i) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                            u && r(s, l, u, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = nn[a] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), lt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return lt.globalEval(t), t
                }
            }
        }), lt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), lt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = yt.head || lt("head")[0] || yt.documentElement;
                return {
                    send: function(r, i) {
                        e = yt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var on = [],
            an = /(=)\?(?=&|$)|\?\?/;
        lt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = on.pop() || lt.expando + "_" + Fe++;
                return this[t] = !0, t
            }
        }), lt.ajaxPrefilter("json jsonp", function(t, e, r) {
            var i, o, a, s = t.jsonp !== !1 && (an.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = lt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(an, "$1" + i) : t.jsonp !== !1 && (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return a || lt.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = n[i], n[i] = function() {
                a = arguments
            }, r.always(function() {
                n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, on.push(i)), a && lt.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), lt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || yt;
            var r = gt.exec(t),
                i = !n && [];
            return r ? [e.createElement(r[1])] : (r = lt.buildFragment([t], e, i), i && i.length && lt(i).remove(), lt.merge([], r.childNodes))
        };
        var sn = lt.fn.load;
        lt.fn.load = function(t, e, n) {
            if ("string" != typeof t && sn) return sn.apply(this, arguments);
            var r, i, o, a = this,
                s = t.indexOf(" ");
            return s >= 0 && (r = lt.trim(t.slice(s, t.length)), t = t.slice(0, s)), lt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && lt.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                i = arguments, a.html(r ? lt("<div>").append(lt.parseHTML(t)).find(r) : t)
            }).complete(n && function(t, e) {
                a.each(n, i || [t.responseText, e, t])
            }), this
        }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            lt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), lt.expr.filters.animated = function(t) {
            return lt.grep(lt.timers, function(e) {
                return t === e.elem
            }).length
        };
        var ln = n.document.documentElement;
        lt.offset = {
            setOffset: function(t, e, n) {
                var r, i, o, a, s, l, u, c = lt.css(t, "position"),
                    f = lt(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), s = f.offset(), o = lt.css(t, "top"), l = lt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && lt.inArray("auto", [o, l]) > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), lt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + i), "using" in e ? e.using.call(t, d) : f.css(d)
            }
        }, lt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    lt.offset.setOffset(this, t, e)
                });
                var e, n, r = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    o = i && i.ownerDocument;
                if (o) return e = o.documentElement, lt.contains(e, i) ? (typeof i.getBoundingClientRect !== Et && (r = i.getBoundingClientRect()), n = K(o), {
                    top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === lt.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (n = t.offset()), n.top += lt.css(t[0], "borderTopWidth", !0), n.left += lt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - lt.css(r, "marginTop", !0),
                        left: e.left - n.left - lt.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || ln; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
                    return t || ln
                })
            }
        }), lt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            lt.fn[t] = function(r) {
                return Pt(this, function(t, r, i) {
                    var o = K(t);
                    return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? lt(o).scrollLeft() : i, n ? i : lt(o).scrollTop()) : t[r] = i)
                }, t, r, arguments.length, null)
            }
        }), lt.each(["top", "left"], function(t, e) {
            lt.cssHooks[e] = O(at.pixelPosition, function(t, n) {
                return n ? (n = oe(t, e), se.test(n) ? lt(t).position()[e] + "px" : n) : void 0
            })
        }), lt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            lt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, r) {
                lt.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Pt(this, function(e, n, r) {
                        var i;
                        return lt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? lt.css(e, n, a) : lt.style(e, n, r, a)
                    }, e, o ? r : void 0, o, null)
                }
            })
        }), lt.fn.size = function() {
            return this.length
        }, lt.fn.andSelf = lt.fn.addBack, r = [], i = function() {
            return lt
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
        var un = n.jQuery,
            cn = n.$;
        return lt.noConflict = function(t) {
            return n.$ === lt && (n.$ = cn), t && n.jQuery === lt && (n.jQuery = un), lt
        }, typeof o === Et && (n.jQuery = n.$ = lt), lt
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(1),
        s = r(a),
        l = n(28),
        u = r(l),
        c = /^(\S+)\s*(.*)$/,
        f = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this.tagName = "div", this._el = null, this.cid = (0, u["default"])(), Object.assign(this, e), this._ensureElement()
            }
            return o(t, [{
                key: "$",
                value: function(t) {
                    return this.$el.find(t)
                }
            }, {
                key: "render",
                value: function() {
                    return this
                }
            }, {
                key: "enter",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    return "function" == typeof t && t.call(this), this
                }
            }, {
                key: "leave",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    return "function" == typeof t && t.call(this), this
                }
            }, {
                key: "remove",
                value: function() {
                    return this.undelegateEvents(), this.$el.remove(), this
                }
            }, {
                key: "setElement",
                value: function(t) {
                    return this.undelegateEvents(), this.$el = t instanceof s["default"] ? t : (0, s["default"])(t), this._el = this.$el[0], this.delegateEvents(), this
                }
            }, {
                key: "_bind",
                value: function(t, e) {
                    return function() {
                        for (var n = arguments.length, r = Array(n), i = 0; n > i; i++) r[i] = arguments[i];
                        return t.apply(e, r)
                    }
                }
            }, {
                key: "delegateEvents",
                value: function(t) {
                    if (t || (t = this.events), !t) return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var n = t[e];
                        if ("function" != typeof n && (n = this[n]), n) {
                            var r = e.match(c);
                            this.delegate(r[1], r[2], n.bind(this))
                        }
                    }
                    return this
                }
            }, {
                key: "delegate",
                value: function(t, e, n) {
                    return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
                }
            }, {
                key: "undelegateEvents",
                value: function() {
                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                }
            }, {
                key: "undelegate",
                value: function(t, e, n) {
                    return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
                }
            }, {
                key: "_createElement",
                value: function(t) {
                    return document.createElement(t)
                }
            }, {
                key: "_ensureElement",
                value: function() {
                    if (this._el) this.setElement(this._el);
                    else {
                        var t = Object.assign({}, this.attributes);
                        this.id && (t.id = this.id), this.className && (t["class"] = this.className), this.setElement(this._createElement(this.tagName)), this._setAttributes(t)
                    }
                }
            }, {
                key: "_setAttributes",
                value: function(t) {
                    this.$el.attr(t)
                }
            }, {
                key: "el",
                get: function() {
                    return this._el
                },
                set: function(t) {
                    this._el = t, this._ensureElement()
                }
            }, {
                key: "events",
                set: function(t) {
                    this.delegateEvents(t)
                }
            }]), t
        }();
    e["default"] = f, t.exports = e["default"]
}, function(t, e, n) {
    var r;
    (function() {
        var i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, b, x, w, k, C, T, S, _, E, M, A, O, j, N, P, F, D, L, H, $, I, q, B, z, R, W, V, X, G, Y, U, Z, K, J, Q, tt, et, nt, rt, it, ot, at = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        N = function() {
            return "visible" === document.visibilityState || null != A.tests
        }, H = function() {
            var t;
            return t = [], "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function() {
                    var e, n, r, i;
                    for (i = [], n = 0, r = t.length; r > n; n++) e = t[n], i.push(e(N()));
                    return i
                }),
                function(e) {
                    return t.push(e)
                }
        }(), S = function(t) {
            var e, n, r;
            n = {};
            for (e in t) r = t[e], n[e] = r;
            return n
        }, C = function(t) {
            var e;
            return e = {},
                function() {
                    var n, r, i, o, a;
                    for (r = "", o = 0, a = arguments.length; a > o; o++) n = arguments[o], r += n.toString() + ",";
                    return i = e[r], i || (e[r] = i = t.apply(this, arguments)), i
                }
        }, L = function(t) {
            return function(e) {
                var n, r, i;
                return e instanceof Array || e instanceof NodeList || e instanceof HTMLCollection ? i = function() {
                    var i, o, a;
                    for (a = [], r = i = 0, o = e.length; o >= 0 ? o > i : i > o; r = o >= 0 ? ++i : --i) n = Array.prototype.slice.call(arguments, 1), n.splice(0, 0, e[r]), a.push(t.apply(this, n));
                    return a
                }.apply(this, arguments) : t.apply(this, arguments)
            }
        }, b = function(t, e) {
            var n, r, i;
            i = [];
            for (n in e) r = e[n], i.push(null != t[n] ? t[n] : t[n] = r);
            return i
        }, x = function(t, e) {
            var n, r, i;
            if (null != t.style) return w(t, e);
            i = [];
            for (n in e) r = e[n], i.push(t[n] = r.format());
            return i
        }, w = function(t, e) {
            var n, r, i, o, a;
            e = $(e), o = [], n = P(t);
            for (r in e) a = e[r], rt.contains(r) ? o.push([r, a]) : (a = null != a.format ? a.format() : "" + a + ot(r, a), n && J.contains(r) ? t.setAttribute(r, a) : t.style[q(r)] = a);
            return o.length > 0 ? n ? (i = new d, i.applyProperties(o), t.setAttribute("transform", i.decompose().format())) : (a = o.map(function(t) {
                return it(t[0], t[1])
            }).join(" "), t.style[q("transform")] = a) : void 0
        }, P = function(t) {
            var e, n;
            return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? t instanceof SVGElement && !(t instanceof SVGSVGElement) : null != (e = null != (n = A.tests) && "function" == typeof n.isSVG ? n.isSVG(t) : void 0) ? e : !1
        }, R = function(t, e) {
            var n;
            return n = Math.pow(10, e), Math.round(t * n) / n
        }, h = function() {
            function t(t) {
                var e, n, r;
                for (this.obj = {}, n = 0, r = t.length; r > n; n++) e = t[n], this.obj[e] = 1
            }
            return t.prototype.contains = function(t) {
                return 1 === this.obj[t]
            }, t
        }(), nt = function(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }, B = new h("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")), M = new h("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")), rt = new h("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")), J = new h("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")), ot = function(t, e) {
            return "number" != typeof e ? "" : B.contains(t) ? "px" : M.contains(t) ? "deg" : ""
        }, it = function(t, e) {
            var n, r;
            return n = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/), null != n ? (e = n[1], r = n[2]) : e = parseFloat(e), e = R(parseFloat(e), 10), null != r && "" !== r || (r = ot(t, e)), "" + t + "(" + e + r + ")"
        }, $ = function(t) {
            var e, n, r, i, o, a, s, l;
            r = {};
            for (i in t)
                if (o = t[i], rt.contains(i))
                    if (n = i.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/), n && n[2].length > 0) r[i] = o;
                    else
                        for (l = ["X", "Y", "Z"], a = 0, s = l.length; s > a; a++) e = l[a], r[n[1] + e] = o;
            else r[i] = o;
            return r
        }, E = function(t) {
            var e;
            return e = "opacity" === t ? 1 : 0, "" + e + ot(t, e)
        }, O = function(t, e) {
            var n, r, i, o, a, s, l, u, c, h, p;
            if (o = {}, n = P(t), null != t.style)
                for (a = window.getComputedStyle(t, null), l = 0, c = e.length; c > l; l++) r = e[l], rt.contains(r) ? null == o.transform && (i = n ? new d(null != (p = t.transform.baseVal.consolidate()) ? p.matrix : void 0) : f.fromTransform(a[q("transform")]), o.transform = i.decompose()) : (s = a[r], null == s && J.contains(r) && (s = t.getAttribute(r)), "" !== s && null != s || (s = E(r)), o[r] = _(s));
            else
                for (u = 0, h = e.length; h > u; u++) r = e[u], o[r] = _(t[r]);
            return o
        }, _ = function(t) {
            var e, n, r, i, o;
            for (r = [l, s, u, c], i = 0, o = r.length; o > i; i++)
                if (n = r[i], e = n.create(t), null != e) return e;
            return null
        }, u = function() {
            function t(t) {
                this.format = at(this.format, this), this.interpolate = at(this.interpolate, this), this.obj = t
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, o, a, s;
                a = this.obj, r = e.obj, o = {};
                for (i in a) s = a[i], null != s.interpolate ? o[i] = s.interpolate(r[i], n) : o[i] = s;
                return new t(o)
            }, t.prototype.format = function() {
                return this.obj
            }, t.create = function(e) {
                var n, r, i;
                if (e instanceof Object) {
                    r = {};
                    for (n in e) i = e[n], r[n] = _(i);
                    return new t(r)
                }
                return null
            }, t
        }(), c = function() {
            function t(t, e, n) {
                this.prefix = e, this.suffix = n, this.format = at(this.format, this), this.interpolate = at(this.interpolate, this), this.value = parseFloat(t)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i;
                return i = this.value, r = e.value, new t((r - i) * n + i, e.prefix || this.prefix, e.suffix || this.suffix)
            }, t.prototype.format = function() {
                return null == this.prefix && null == this.suffix ? R(this.value, 5) : this.prefix + R(this.value, 5) + this.suffix
            }, t.create = function(e) {
                var n;
                return "string" != typeof e ? new t(e) : (n = ("" + e).match("([^0-9.+-]*)([0-9.+-]+)([^0-9.+-]*)"), null != n ? new t(n[2], n[1], n[3]) : null)
            }, t
        }(), s = function() {
            function t(t, e) {
                this.values = t, this.sep = e, this.format = at(this.format, this), this.interpolate = at(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, o, a, s, l;
                for (a = this.values, r = e.values, o = [], i = s = 0, l = Math.min(a.length, r.length); l >= 0 ? l > s : s > l; i = l >= 0 ? ++s : --s) null != a[i].interpolate ? o.push(a[i].interpolate(r[i], n)) : o.push(a[i]);
                return new t(o, this.sep)
            }, t.prototype.format = function() {
                var t;
                return t = this.values.map(function(t) {
                    return null != t.format ? t.format() : t
                }), null != this.sep ? t.join(this.sep) : t
            }, t.createFromArray = function(e, n) {
                var r;
                return r = e.map(function(t) {
                    return _(t) || t
                }), r = r.filter(function(t) {
                    return null != t
                }), new t(r, n)
            }, t.create = function(e) {
                var n, r, i, o, a;
                if (e instanceof Array) return t.createFromArray(e, null);
                if ("string" == typeof e) {
                    for (i = [" ", ",", "|", ";", "/", ":"], o = 0, a = i.length; a > o; o++)
                        if (r = i[o], n = e.split(r), n.length > 1) return t.createFromArray(n, r);
                    return null
                }
            }, t
        }(), i = function() {
            function t(t, e) {
                this.rgb = null != t ? t : {}, this.format = e, this.toRgba = at(this.toRgba, this), this.toRgb = at(this.toRgb, this), this.toHex = at(this.toHex, this)
            }
            return t.fromHex = function(e) {
                var n, r;
                return n = e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i), null != n && (e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), r = e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i), null != r ? new t({
                    r: parseInt(r[1], 16),
                    g: parseInt(r[2], 16),
                    b: parseInt(r[3], 16),
                    a: 1
                }, "hex") : null
            }, t.fromRgb = function(e) {
                var n, r;
                return n = e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/), null != n ? new t({
                    r: parseFloat(n[1]),
                    g: parseFloat(n[2]),
                    b: parseFloat(n[3]),
                    a: parseFloat(null != (r = n[4]) ? r : 1)
                }, null != n[4] ? "rgba" : "rgb") : null
            }, t.componentToHex = function(t) {
                var e;
                return e = t.toString(16), 1 === e.length ? "0" + e : e
            }, t.prototype.toHex = function() {
                return "#" + t.componentToHex(this.rgb.r) + t.componentToHex(this.rgb.g) + t.componentToHex(this.rgb.b)
            }, t.prototype.toRgb = function() {
                return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
            }, t.prototype.toRgba = function() {
                return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
            }, t
        }(), l = function() {
            function t(t) {
                this.color = t, this.format = at(this.format, this), this.interpolate = at(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, o, a, s, l, u, c, f;
                for (s = this.color, r = e.color, a = {}, f = ["r", "g", "b"], u = 0, c = f.length; c > u; u++) o = f[u], l = Math.round((r.rgb[o] - s.rgb[o]) * n + s.rgb[o]), a[o] = Math.min(255, Math.max(0, l));
                return o = "a", l = R((r.rgb[o] - s.rgb[o]) * n + s.rgb[o], 5), a[o] = Math.min(1, Math.max(0, l)), new t(new i(a, r.format))
            }, t.prototype.format = function() {
                return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
            }, t.create = function(e) {
                var n;
                if ("string" == typeof e) return n = i.fromHex(e) || i.fromRgb(e), null != n ? new t(n) : null
            }, t
        }(), a = function() {
            function t(t) {
                this.props = t, this.applyRotateCenter = at(this.applyRotateCenter, this), this.format = at(this.format, this), this.interpolate = at(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, o, a, s, l, u, c, f, d, h, p;
                for (o = {}, d = ["translate", "scale", "rotate"], a = 0, c = d.length; c > a; a++)
                    for (i = d[a], o[i] = [], r = s = 0, h = this.props[i].length; h >= 0 ? h > s : s > h; r = h >= 0 ? ++s : --s) o[i][r] = (e.props[i][r] - this.props[i][r]) * n + this.props[i][r];
                for (r = l = 1; 2 >= l; r = ++l) o.rotate[r] = e.props.rotate[r];
                for (p = ["skew"], u = 0, f = p.length; f > u; u++) i = p[u], o[i] = (e.props[i] - this.props[i]) * n + this.props[i];
                return new t(o)
            }, t.prototype.format = function() {
                return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
            }, t.prototype.applyRotateCenter = function(t) {
                var e, n, r, i, o, a;
                for (n = k.createSVGMatrix(), n = n.translate(t[0], t[1]), n = n.rotate(this.props.rotate[0]), n = n.translate(-t[0], -t[1]), r = new d(n), i = r.decompose().props.translate, a = [], e = o = 0; 1 >= o; e = ++o) a.push(this.props.translate[e] -= i[e]);
                return a
            }, t
        }(), k = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0, d = function() {
            function t(t) {
                this.m = t, this.applyProperties = at(this.applyProperties, this), this.decompose = at(this.decompose, this), this.m || (this.m = k.createSVGMatrix())
            }
            return t.prototype.decompose = function() {
                var t, e, n, r, i;
                return r = new p([this.m.a, this.m.b]), i = new p([this.m.c, this.m.d]), t = r.length(), n = r.dot(i), r = r.normalize(), e = i.combine(r, 1, -n).length(), new a({
                    translate: [this.m.e, this.m.f],
                    rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
                    scale: [t, e],
                    skew: n / e * 180 / Math.PI
                })
            }, t.prototype.applyProperties = function(t) {
                var e, n, r, i, o, a, s, l;
                for (e = {}, o = 0, a = t.length; a > o; o++) r = t[o], e[r[0]] = r[1];
                for (n in e) i = e[n], "translateX" === n ? this.m = this.m.translate(i, 0) : "translateY" === n ? this.m = this.m.translate(0, i) : "scaleX" === n ? this.m = this.m.scale(i, 1) : "scaleY" === n ? this.m = this.m.scale(1, i) : "rotateZ" === n ? this.m = this.m.rotate(i) : "skewX" === n ? this.m = this.m.skewX(i) : "skewY" === n && (this.m = this.m.skewY(i));
                return this.rotateCX = null != (s = e.rotateCX) ? s : 0, this.rotateCY = null != (l = e.rotateCY) ? l : 0
            }, t
        }(), p = function() {
            function t(t) {
                this.els = t, this.combine = at(this.combine, this), this.normalize = at(this.normalize, this), this.length = at(this.length, this), this.cross = at(this.cross, this), this.dot = at(this.dot, this), this.e = at(this.e, this)
            }
            return t.prototype.e = function(t) {
                return 1 > t || t > this.els.length ? null : this.els[t - 1]
            }, t.prototype.dot = function(t) {
                var e, n, r;
                if (e = t.els || t, r = 0, n = this.els.length, n !== e.length) return null;
                for (n += 1; --n;) r += this.els[n - 1] * e[n - 1];
                return r
            }, t.prototype.cross = function(e) {
                var n, r;
                return r = e.els || e, 3 !== this.els.length || 3 !== r.length ? null : (n = this.els, new t([n[1] * r[2] - n[2] * r[1], n[2] * r[0] - n[0] * r[2], n[0] * r[1] - n[1] * r[0]]))
            }, t.prototype.length = function() {
                var t, e, n, r, i;
                for (t = 0, i = this.els, n = 0, r = i.length; r > n; n++) e = i[n], t += Math.pow(e, 2);
                return Math.sqrt(t)
            }, t.prototype.normalize = function() {
                var e, n, r, i, o;
                r = this.length(), i = [], o = this.els;
                for (n in o) e = o[n], i[n] = e / r;
                return new t(i)
            }, t.prototype.combine = function(e, n, r) {
                var i, o, a, s;
                for (o = [], i = a = 0, s = this.els.length; s >= 0 ? s > a : a > s; i = s >= 0 ? ++a : --a) o[i] = n * this.els[i] + r * e.els[i];
                return new t(o)
            }, t
        }(), o = function() {
            function t() {
                this.toMatrix = at(this.toMatrix, this), this.format = at(this.format, this), this.interpolate = at(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n, r) {
                var i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, b, x, w;
                for (null == r && (r = null), a = this, o = new t, x = ["translate", "scale", "skew", "perspective"], g = 0, b = x.length; b > g; g++)
                    for (c = x[g], o[c] = [], s = m = 0, w = a[c].length - 1; w >= 0 ? w >= m : m >= w; s = w >= 0 ? ++m : --m) null == r || r.indexOf(c) > -1 || r.indexOf("" + c + ["x", "y", "z"][s]) > -1 ? o[c][s] = (e[c][s] - a[c][s]) * n + a[c][s] : o[c][s] = a[c][s];
                if (null == r || -1 !== r.indexOf("rotate")) {
                    if (f = a.quaternion, d = e.quaternion, i = f[0] * d[0] + f[1] * d[1] + f[2] * d[2] + f[3] * d[3], 0 > i) {
                        for (s = v = 0; 3 >= v; s = ++v) f[s] = -f[s];
                        i = -i
                    }
                    for (i + 1 > .05 ? 1 - i >= .05 ? (p = Math.acos(i), u = 1 / Math.sin(p), h = Math.sin(p * (1 - n)) * u, l = Math.sin(p * n) * u) : (h = 1 - n, l = n) : (d[0] = -f[1], d[1] = f[0], d[2] = -f[3], d[3] = f[2], h = Math.sin(piDouble * (.5 - n)), l = Math.sin(piDouble * n)), o.quaternion = [], s = y = 0; 3 >= y; s = ++y) o.quaternion[s] = f[s] * h + d[s] * l
                } else o.quaternion = a.quaternion;
                return o
            }, t.prototype.format = function() {
                return this.toMatrix().toString()
            }, t.prototype.toMatrix = function() {
                var t, e, n, r, i, o, a, s, l, u, c, d, h, p, g, m;
                for (t = this, i = f.I(4), e = h = 0; 3 >= h; e = ++h) i.els[e][3] = t.perspective[e];
                for (o = t.quaternion, u = o[0], c = o[1], d = o[2], l = o[3], a = t.skew, r = [
                        [1, 0],
                        [2, 0],
                        [2, 1]
                    ], e = p = 2; p >= 0; e = --p) a[e] && (s = f.I(4), s.els[r[e][0]][r[e][1]] = a[e], i = i.multiply(s));
                for (i = i.multiply(new f([
                        [1 - 2 * (c * c + d * d), 2 * (u * c - d * l), 2 * (u * d + c * l), 0],
                        [2 * (u * c + d * l), 1 - 2 * (u * u + d * d), 2 * (c * d - u * l), 0],
                        [2 * (u * d - c * l), 2 * (c * d + u * l), 1 - 2 * (u * u + c * c), 0],
                        [0, 0, 0, 1]
                    ])), e = g = 0; 2 >= g; e = ++g) {
                    for (n = m = 0; 2 >= m; n = ++m) i.els[e][n] *= t.scale[e];
                    i.els[3][e] = t.translate[e]
                }
                return i
            }, t
        }(), f = function() {
            function t(t) {
                this.els = t, this.toString = at(this.toString, this), this.decompose = at(this.decompose, this), this.inverse = at(this.inverse, this), this.augment = at(this.augment, this), this.toRightTriangular = at(this.toRightTriangular, this), this.transpose = at(this.transpose, this), this.multiply = at(this.multiply, this), this.dup = at(this.dup, this), this.e = at(this.e, this)
            }
            return t.prototype.e = function(t, e) {
                return 1 > t || t > this.els.length || 1 > e || e > this.els[0].length ? null : this.els[t - 1][e - 1]
            }, t.prototype.dup = function() {
                return new t(this.els)
            }, t.prototype.multiply = function(e) {
                var n, r, i, o, a, s, l, u, c, f, d, h, p;
                for (h = !!e.modulus, n = e.els || e, "undefined" == typeof n[0][0] && (n = new t(n).els), f = this.els.length, l = f, u = n[0].length, i = this.els[0].length, o = [], f += 1; --f;)
                    for (a = l - f, o[a] = [], d = u, d += 1; --d;) {
                        for (s = u - d, p = 0, c = i, c += 1; --c;) r = i - c, p += this.els[a][r] * n[r][s];
                        o[a][s] = p
                    }
                return n = new t(o), h ? n.col(1) : n
            }, t.prototype.transpose = function() {
                var e, n, r, i, o, a, s;
                for (s = this.els.length, e = this.els[0].length, n = [], o = e, o += 1; --o;)
                    for (r = e - o, n[r] = [], a = s, a += 1; --a;) i = s - a, n[r][i] = this.els[i][r];
                return new t(n)
            }, t.prototype.toRightTriangular = function() {
                var t, e, n, r, i, o, a, s, l, u, c, f, d, h;
                for (t = this.dup(), s = this.els.length, i = s, o = this.els[0].length; --s;) {
                    if (n = i - s, 0 === t.els[n][n])
                        for (r = c = d = n + 1; i >= d ? i > c : c > i; r = i >= d ? ++c : --c)
                            if (0 !== t.els[r][n]) {
                                for (e = [], l = o, l += 1; --l;) u = o - l, e.push(t.els[n][u] + t.els[r][u]);
                                t.els[n] = e;
                                break
                            }
                    if (0 !== t.els[n][n])
                        for (r = f = h = n + 1; i >= h ? i > f : f > i; r = i >= h ? ++f : --f) {
                            for (a = t.els[r][n] / t.els[n][n], e = [], l = o, l += 1; --l;) u = o - l, e.push(n >= u ? 0 : t.els[r][u] - t.els[n][u] * a);
                            t.els[r] = e
                        }
                }
                return t
            }, t.prototype.augment = function(e) {
                var n, r, i, o, a, s, l, u, c;
                if (n = e.els || e, "undefined" == typeof n[0][0] && (n = new t(n).els), r = this.dup(), i = r.els[0].length, u = r.els.length, s = u, l = n[0].length, u !== n.length) return null;
                for (u += 1; --u;)
                    for (o = s - u, c = l, c += 1; --c;) a = l - c, r.els[o][i + a] = n[o][a];
                return r
            }, t.prototype.inverse = function() {
                var e, n, r, i, o, a, s, l, u, c, f, d, h;
                for (c = this.els.length, s = c, e = this.augment(t.I(c)).toRightTriangular(), l = e.els[0].length, o = [], c += 1; --c;) {
                    for (i = c - 1, r = [], f = l, o[i] = [], n = e.els[i][i], f += 1; --f;) d = l - f, u = e.els[i][d] / n, r.push(u), d >= s && o[i].push(u);
                    for (e.els[i] = r, a = h = 0; i >= 0 ? i > h : h > i; a = i >= 0 ? ++h : --h) {
                        for (r = [], f = l, f += 1; --f;) d = l - f, r.push(e.els[a][d] - e.els[i][d] * e.els[a][i]);
                        e.els[a] = r
                    }
                }
                return new t(o)
            }, t.I = function(e) {
                var n, r, i, o, a;
                for (n = [], o = e, e += 1; --e;)
                    for (r = o - e, n[r] = [], a = o, a += 1; --a;) i = o - a, n[r][i] = r === i ? 1 : 0;
                return new t(n)
            }, t.prototype.decompose = function() {
                var t, e, n, r, i, a, s, l, u, c, f, d, h, g, m, v, y, b, x, w, k, C, T, S, _, E, M, A, O, j, N, P, F, D, L, H, $, I;
                for (a = this, w = [], y = [], b = [], c = [], l = [], t = [], e = O = 0; 3 >= O; e = ++O)
                    for (t[e] = [], r = j = 0; 3 >= j; r = ++j) t[e][r] = a.els[e][r];
                if (0 === t[3][3]) return !1;
                for (e = N = 0; 3 >= N; e = ++N)
                    for (r = P = 0; 3 >= P; r = ++P) t[e][r] /= t[3][3];
                for (u = a.dup(), e = F = 0; 2 >= F; e = ++F) u.els[e][3] = 0;
                if (u.els[3][3] = 1, 0 !== t[0][3] || 0 !== t[1][3] || 0 !== t[2][3]) {
                    for (d = new p(t.slice(0, 4)[3]), n = u.inverse(), k = n.transpose(), l = k.multiply(d).els, e = D = 0; 2 >= D; e = ++D) t[e][3] = 0;
                    t[3][3] = 1
                } else l = [0, 0, 0, 1];
                for (e = L = 0; 2 >= L; e = ++L) w[e] = t[3][e], t[3][e] = 0;
                for (g = [], e = H = 0; 2 >= H; e = ++H) g[e] = new p(t[e].slice(0, 3));
                if (y[0] = g[0].length(), g[0] = g[0].normalize(), b[0] = g[0].dot(g[1]), g[1] = g[1].combine(g[0], 1, -b[0]), y[1] = g[1].length(), g[1] = g[1].normalize(), b[0] /= y[1], b[1] = g[0].dot(g[2]), g[2] = g[2].combine(g[0], 1, -b[1]), b[2] = g[1].dot(g[2]), g[2] = g[2].combine(g[1], 1, -b[2]), y[2] = g[2].length(), g[2] = g[2].normalize(), b[1] /= y[2], b[2] /= y[2], s = g[1].cross(g[2]), g[0].dot(s) < 0)
                    for (e = $ = 0; 2 >= $; e = ++$)
                        for (y[e] *= -1, r = I = 0; 2 >= I; r = ++I) g[e].els[r] *= -1;
                m = function(t, e) {
                    return g[t].els[e]
                }, h = [], h[1] = Math.asin(-m(0, 2)), 0 !== Math.cos(h[1]) ? (h[0] = Math.atan2(m(1, 2), m(2, 2)), h[2] = Math.atan2(m(0, 1), m(0, 0))) : (h[0] = Math.atan2(-m(2, 0), m(1, 1)), h[1] = 0), x = m(0, 0) + m(1, 1) + m(2, 2) + 1, x > 1e-4 ? (v = .5 / Math.sqrt(x), _ = .25 / v, E = (m(2, 1) - m(1, 2)) * v, M = (m(0, 2) - m(2, 0)) * v, A = (m(1, 0) - m(0, 1)) * v) : m(0, 0) > m(1, 1) && m(0, 0) > m(2, 2) ? (v = 2 * Math.sqrt(1 + m(0, 0) - m(1, 1) - m(2, 2)), E = .25 * v, M = (m(0, 1) + m(1, 0)) / v, A = (m(0, 2) + m(2, 0)) / v, _ = (m(2, 1) - m(1, 2)) / v) : m(1, 1) > m(2, 2) ? (v = 2 * Math.sqrt(1 + m(1, 1) - m(0, 0) - m(2, 2)), E = (m(0, 1) + m(1, 0)) / v, M = .25 * v, A = (m(1, 2) + m(2, 1)) / v, _ = (m(0, 2) - m(2, 0)) / v) : (v = 2 * Math.sqrt(1 + m(2, 2) - m(0, 0) - m(1, 1)), E = (m(0, 2) + m(2, 0)) / v, M = (m(1, 2) + m(2, 1)) / v, A = .25 * v, _ = (m(1, 0) - m(0, 1)) / v), c = [E, M, A, _], f = new o, f.translate = w, f.scale = y, f.skew = b, f.quaternion = c, f.perspective = l, f.rotate = h;
                for (T in f) {
                    C = f[T];
                    for (i in C) S = C[i], isNaN(S) && (C[i] = 0)
                }
                return f
            }, t.prototype.toString = function() {
                var t, e, n, r, i;
                for (n = "matrix3d(", t = r = 0; 3 >= r; t = ++r)
                    for (e = i = 0; 3 >= i; e = ++i) n += R(this.els[t][e], 10), 3 === t && 3 === e || (n += ",");
                return n += ")"
            }, t.matrixForTransform = C(function(t) {
                var e, n, r, i, o, a;
                return e = document.createElement("div"), e.style.position = "absolute", e.style.visibility = "hidden", e.style[q("transform")] = t, document.body.appendChild(e), r = window.getComputedStyle(e, null), n = null != (i = null != (o = r.transform) ? o : r[q("transform")]) ? i : null != (a = A.tests) ? a.matrixForTransform(t) : void 0, document.body.removeChild(e), n
            }), t.fromTransform = function(e) {
                var n, r, i, o, a, s;
                for (o = null != e ? e.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0, o ? (n = o[1].split(","), n = n.map(parseFloat), r = 6 === n.length ? [n[0], n[1], 0, 0, n[2], n[3], 0, 0, 0, 0, 1, 0, n[4], n[5], 0, 1] : n) : r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], a = [], i = s = 0; 3 >= s; i = ++s) a.push(r.slice(4 * i, 4 * i + 4));
                return new t(a)
            }, t
        }(), I = C(function(t) {
            var e, n, r, i, o, a, s, l, u, c;
            if (void 0 !== document.body.style[t]) return "";
            for (i = t.split("-"), o = "", a = 0, l = i.length; l > a; a++) r = i[a], o += r.substring(0, 1).toUpperCase() + r.substring(1);
            for (c = ["Webkit", "Moz", "ms"], s = 0, u = c.length; u > s; s++)
                if (n = c[s], e = n + o, void 0 !== document.body.style[e]) return n;
            return ""
        }), q = C(function(t) {
            var e;
            return e = I(t), "Moz" === e ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1)) : "" !== e ? "-" + e.toLowerCase() + "-" + nt(t) : nt(t)
        }), z = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0, v = [], y = [], Y = !1, U = 1, "undefined" != typeof window && null !== window && window.addEventListener("keyup", function(t) {
            return 68 === t.keyCode && t.shiftKey && t.ctrlKey ? A.toggleSlow() : void 0
        }), null == z && (F = 0, z = function(t) {
            var e, n, r;
            return e = Date.now(), r = Math.max(0, 16 - (e - F)), n = window.setTimeout(function() {
                return t(e + r)
            }, r), F = e + r, n
        }), V = !1, W = !1, K = function() {
            return V ? void 0 : (V = !0, z(X))
        }, X = function(t) {
            var e, n, r, i;
            if (W) return void z(X);
            for (n = [], r = 0, i = v.length; i > r; r++) e = v[r], m(t, e) || n.push(e);
            return v = v.filter(function(t) {
                return -1 === n.indexOf(t)
            }), 0 === v.length ? V = !1 : z(X)
        }, m = function(t, e) {
            var n, r, i, o, a, s, l, u;
            if (null == e.tStart && (e.tStart = t), o = (t - e.tStart) / e.options.duration, a = e.curve(o), r = {}, o >= 1) r = e.curve.initialForce ? e.properties.start : e.properties.end;
            else {
                u = e.properties.start;
                for (n in u) i = u[n], r[n] = j(i, e.properties.end[n], a)
            }
            return x(e.el, r), "function" == typeof(s = e.options).change && s.change(e.el), o >= 1 && "function" == typeof(l = e.options).complete && l.complete(e.el), 1 > o
        }, j = function(t, e, n) {
            return null != t && null != t.interpolate ? t.interpolate(e, n) : null
        }, Z = function(t, e, n, r) {
            var i, o, a, s, l, u, h, p;
            if (null != r && (y = y.filter(function(t) {
                    return t.id !== r
                })), A.stop(t, {
                    timeout: !1
                }), !n.animated) return A.css(t, e), void("function" == typeof n.complete && n.complete(this));
            e = $(e), l = O(t, Object.keys(e)), i = {}, u = [];
            for (a in e) h = e[a], rt.contains(a) ? u.push([a, h]) : (i[a] = _(h), i[a] instanceof c && null != t.style && (i[a].prefix = "", null == (p = i[a]).suffix && (p.suffix = ot(a, 0))));
            return u.length > 0 && (o = P(t), o ? (s = new d, s.applyProperties(u)) : (h = u.map(function(t) {
                return it(t[0], t[1])
            }).join(" "), s = f.fromTransform(f.matrixForTransform(h))), i.transform = s.decompose(), o && l.transform.applyRotateCenter([i.transform.props.rotate[1], i.transform.props.rotate[2]])), v.push({
                el: t,
                properties: {
                    start: l,
                    end: i
                },
                options: n,
                curve: n.type.call(n.type, n)
            }), K()
        }, et = [], tt = 0, G = function(t) {
            return N() ? t.realTimeoutId = setTimeout(function() {
                return t.fn(), T(t.id)
            }, t.delay) : void 0
        }, g = function(t, e) {
            var n;
            return tt += 1, n = {
                id: tt,
                tStart: Date.now(),
                fn: t,
                delay: e,
                originalDelay: e
            }, G(n), et.push(n), tt
        }, T = function(t) {
            return et = et.filter(function(e) {
                return e.id === t && clearTimeout(e.realTimeoutId), e.id !== t
            })
        }, D = function(t, e) {
            var n;
            return null != t ? (n = t - e.tStart, e.originalDelay - n) : e.originalDelay
        }, "undefined" != typeof window && null !== window && window.addEventListener("unload", function() {}), Q = null, H(function(t) {
            var e, n, r, i, o, a, s, l, u, c;
            if (W = !t, t) {
                if (V)
                    for (n = Date.now() - Q, o = 0, l = v.length; l > o; o++) e = v[o], null != e.tStart && (e.tStart += n);
                for (a = 0, u = et.length; u > a; a++) r = et[a], r.delay = D(Q, r), G(r);
                return Q = null
            }
            for (Q = Date.now(), c = [], i = 0, s = et.length; s > i; i++) r = et[i], c.push(clearTimeout(r.realTimeoutId));
            return c
        }), A = {}, A.linear = function() {
            return function(t) {
                return t
            }
        }, A.spring = function(t) {
            var e, n, r, i, o, a;
            return null == t && (t = {}), b(t, arguments.callee.defaults), i = Math.max(1, t.frequency / 20), o = Math.pow(20, t.friction / 100), a = t.anticipationSize / 1e3, r = Math.max(0, a), e = function(e) {
                    var n, r, i, o, s;
                    return n = .8, o = a / (1 - a), s = 0, i = (o - n * s) / (o - s), r = (n - i) / o, r * e * t.anticipationStrength / 100 + i
                }, n = function(t) {
                    return Math.pow(o / 10, -t) * (1 - t)
                },
                function(t) {
                    var r, o, s, l, u, c, f, d;
                    return c = t / (1 - a) - a / (1 - a), a > t ? (d = a / (1 - a) - a / (1 - a), f = 0 / (1 - a) - a / (1 - a), u = Math.acos(1 / e(d)), s = (Math.acos(1 / e(f)) - u) / (i * -a), r = e) : (r = n, u = 0, s = 1), o = r(c), l = i * (t - a) * s + u, 1 - o * Math.cos(l)
                }
        }, A.bounce = function(t) {
            var e, n, r, i;
            return null == t && (t = {}), b(t, arguments.callee.defaults), r = Math.max(1, t.frequency / 20), i = Math.pow(20, t.friction / 100), e = function(t) {
                return Math.pow(i / 10, -t) * (1 - t)
            }, n = function(t) {
                var n, i, o, a;
                return a = -1.57, i = 1, n = e(t), o = r * t * i + a, n * Math.cos(o)
            }, n.initialForce = !0, n
        }, A.gravity = function(t) {
            var e, n, r, i, o, a, s;
            return null == t && (t = {}), b(t, arguments.callee.defaults), n = Math.min(t.bounciness / 1250, .8), i = t.elasticity / 1e3, s = 100, r = [], e = function() {
                    var r, i;
                    for (r = Math.sqrt(2 / s), i = {
                            a: -r,
                            b: r,
                            H: 1
                        }, t.initialForce && (i.a = 0, i.b = 2 * i.b); i.H > .001;) e = i.b - i.a, i = {
                        a: i.b,
                        b: i.b + e * n,
                        H: i.H * n * n
                    };
                    return i.b
                }(), a = function(n, r, i, o) {
                    var a, s;
                    return e = r - n, s = 2 / e * o - 1 - 2 * n / e, a = s * s * i - i + 1, t.initialForce && (a = 1 - a), a
                },
                function() {
                    var o, a, l, u;
                    for (a = Math.sqrt(2 / (s * e * e)), l = {
                            a: -a,
                            b: a,
                            H: 1
                        }, t.initialForce && (l.a = 0, l.b = 2 * l.b), r.push(l), o = e, u = []; l.b < 1 && l.H > .001;) o = l.b - l.a, l = {
                        a: l.b,
                        b: l.b + o * n,
                        H: l.H * i
                    }, u.push(r.push(l));
                    return u
                }(), o = function(e) {
                    var n, i, o;
                    for (i = 0, n = r[i]; !(e >= n.a && e <= n.b) && (i += 1, n = r[i]););
                    return o = n ? a(n.a, n.b, n.H, e) : t.initialForce ? 0 : 1
                }, o.initialForce = t.initialForce, o
        }, A.forceWithGravity = function(t) {
            return null == t && (t = {}), b(t, arguments.callee.defaults), t.initialForce = !0, A.gravity(t)
        }, A.bezier = function() {
            var t, e, n;
            return e = function(t, e, n, r, i) {
                    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * n + 3 * (1 - t) * Math.pow(t, 2) * r + Math.pow(t, 3) * i
                }, t = function(t, n, r, i, o) {
                    return {
                        x: e(t, n.x, r.x, i.x, o.x),
                        y: e(t, n.y, r.y, i.y, o.y)
                    }
                }, n = function(t, e, n) {
                    var r, i, o, a, s, l, u, c, f, d;
                    for (r = null, f = 0, d = e.length; d > f && (i = e[f], t >= i(0).x && t <= i(1).x && (r = i), null === r); f++);
                    if (!r) return n ? 0 : 1;
                    for (c = 1e-4, a = 0, l = 1, s = (l + a) / 2, u = r(s).x, o = 0; Math.abs(t - u) > c && 100 > o;) t > u ? a = s : l = s, s = (l + a) / 2, u = r(s).x, o += 1;
                    return r(s).y
                },
                function(e) {
                    var r, i, o;
                    return null == e && (e = {}), i = e.points, o = !1, r = function() {
                            var e, n, o;
                            r = [], o = function(e, n) {
                                var i;
                                return i = function(r) {
                                    return t(r, e, e.cp[e.cp.length - 1], n.cp[0], n)
                                }, r.push(i)
                            };
                            for (e in i) {
                                if (n = parseInt(e), n >= i.length - 1) break;
                                o(i[n], i[n + 1])
                            }
                            return r
                        }(),
                        function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : n(t, r, o)
                        }
                }
        }(), A.easeInOut = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : arguments.callee.defaults.friction, A.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: .92 - e / 1e3,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: .08 + e / 1e3,
                        y: 1
                    }]
                }]
            })
        }, A.easeIn = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : arguments.callee.defaults.friction, A.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: .92 - e / 1e3,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: 1,
                        y: 1
                    }]
                }]
            })
        }, A.easeOut = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : arguments.callee.defaults.friction, A.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: 0,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: .08 + e / 1e3,
                        y: 1
                    }]
                }]
            })
        }, A.spring.defaults = {
            frequency: 300,
            friction: 200,
            anticipationSize: 0,
            anticipationStrength: 0
        }, A.bounce.defaults = {
            frequency: 300,
            friction: 200
        }, A.forceWithGravity.defaults = A.gravity.defaults = {
            bounciness: 400,
            elasticity: 200
        }, A.easeInOut.defaults = A.easeIn.defaults = A.easeOut.defaults = {
            friction: 500
        }, A.css = L(function(t, e) {
            return w(t, e, !0)
        }), A.animate = L(function(t, e, n) {
            var r;
            return null == n && (n = {}), n = S(n), b(n, {
                type: A.easeInOut,
                duration: 1e3,
                delay: 0,
                animated: !0
            }), n.duration = Math.max(0, n.duration * U), n.delay = Math.max(0, n.delay), 0 === n.delay ? Z(t, e, n) : (r = A.setTimeout(function() {
                return Z(t, e, n, r)
            }, n.delay), y.push({
                id: r,
                el: t
            }))
        }), A.stop = L(function(t, e) {
            return null == e && (e = {}), null == e.timeout && (e.timeout = !0), e.timeout && (y = y.filter(function(n) {
                return n.el !== t || null != e.filter && !e.filter(n) ? !1 : (A.clearTimeout(n.id), !0)
            })), v = v.filter(function(e) {
                return e.el !== t
            })
        }), A.setTimeout = function(t, e) {
            return g(t, e * U)
        }, A.clearTimeout = function(t) {
            return T(t)
        }, A.toggleSlow = function() {
            return Y = !Y, U = Y ? 3 : 1, "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("dynamics.js: slow animations " + (Y ? "enabled" : "disabled")) : void 0
        }, "object" == typeof t && "object" == typeof t.exports ? t.exports = A : (r = function() {
            return A
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
    }).call(this)
}, function(t, e, n) {
    function r(t, e, n) {
        var r = !0,
            s = !0;
        if ("function" != typeof t) throw new TypeError(a);
        return n === !1 ? r = !1 : i(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), o(t, e, {
            leading: r,
            maxWait: +e,
            trailing: s
        })
    }

    function i(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    var o = n(27),
        a = "Expected a function";
    t.exports = r
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        i = function() {
            function t() {
                n(this, t), this._maxListeners = 12, this._events = {}
            }
            return r(t, [{
                key: "on",
                value: function(t, e) {
                    if ("function" != typeof e) throw new TypeError;
                    var n = this._events[t] || (this._events[t] = []);
                    return n.push(e), n.length > this._maxListeners && console.error("Possible memory leak, added %i %s listeners, use EventEmitter#setMaxListeners(number) if you want to increase the limit (%i now)", n.length, t, this._maxListeners), this
                }
            }, {
                key: "once",
                value: function(t, e) {
                    function n() {
                        r.off(t, n), e.apply(null, arguments)
                    }
                    var r = this;
                    return this.on(t, n)
                }
            }, {
                key: "off",
                value: function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                    if (0 == n.length) return this._events[t] = null;
                    var i = n[0];
                    if ("function" != typeof i) throw new TypeError;
                    var o = this._events[t];
                    if (!o || !o.length) return this;
                    var a = o.indexOf(i);
                    return -1 == a ? this : (o.splice(a, 1), this)
                }
            }, {
                key: "trigger",
                value: function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                    var i = this._events[t],
                        o = this._events.all;
                    return i && i.length && i.forEach(function(t) {
                        return t.apply(null, n)
                    }), o && o.length && o.forEach(function(t) {
                        return t.apply(null, n)
                    }), this
                }
            }, {
                key: "setMaxListeners",
                value: function(t) {
                    if (parseInt(t) !== t) throw new TypeError;
                    return this._maxListeners = t
                }
            }]), t
        }();
    e["default"] = i, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(3),
        f = r(c),
        d = n(4),
        h = r(d),
        p = n(2),
        g = r(p),
        m = function(t) {
            function e(t) {
                var n = this;
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.events = {
                    "mousemove .fc-item": (0, h["default"])(function(t) {
                        n.onMouseMove(t)
                    }, 1e3 / 60),
                    "mouseleave .fc-item": "onMouseLeave"
                }, this.$item = (0, u["default"])("<div />").html(this.$el.html()).addClass("fc-item"), this.$shadow = this.$item.find(".events-list__item__shadow, .kikk-past-editions__item__shadow"), this.item = this.$item[0], this.shadow = this.$shadow[0], this.$el.html(this.item).addClass("fc-container"), this.elWidth = this.$item.width(), this.elHeight = this.$item.height(), this.shadowValue = {
                    width: 40,
                    angle: 45
                }, this.maxShadowWidth = 20, this.maxShadowAngle = 15, this.maxRotateX = 6, this.maxRotateY = 6
            }
            return o(e, t), a(e, [{
                key: "onMouseMove",
                value: function(t) {
                    var e = this.$el.offset(),
                        n = {
                            x: t.pageX - e.left | 0,
                            y: t.pageY - e.top | 0
                        };
                    this.move(n.x, n.y)
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    var t = this;
                    f["default"].stop(this.item), f["default"].animate(this.item, {
                        rotateX: 0,
                        rotateY: 0
                    }, {
                        type: f["default"].spring,
                        duration: 1500
                    }), f["default"].stop(this.shadowValue), f["default"].animate(this.shadowValue, {
                        width: 40,
                        angle: 45
                    }, {
                        type: f["default"].spring,
                        duration: 1500,
                        change: function(e) {
                            f["default"].css(t.shadow, {
                                backgroundImage: "linear-gradient(" + e.angle + "deg, rgba(96,58,58,0.8), transparent " + e.width + "%)"
                            })
                        }
                    })
                }
            }, {
                key: "move",
                value: function(t, e) {
                    var n = this.elHeight / 2,
                        r = this.elWidth / 2,
                        i = -1 * (r - t),
                        o = n - e,
                        a = o / n * this.maxRotateY,
                        s = i / r * this.maxRotateX,
                        l = o / n * this.maxShadowWidth,
                        u = i / r * this.maxShadowAngle;
                    f["default"].stop(this.item), f["default"].css(this.item, {
                        rotateX: a,
                        rotateY: s
                    }), this.shadowValue.width = 40 - l, this.shadowValue.angle = 45 + u, f["default"].stop(this.shadowValue), f["default"].css(this.shadow, {
                        backgroundImage: "linear-gradient(" + this.shadowValue.angle + "deg, rgba(96,58,58,0.8), transparent " + this.shadowValue.width + "%)"
                    })
                }
            }]), e
        }(g["default"]);
    e["default"] = m, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(4),
        f = r(c),
        d = n(2),
        h = r(d),
        p = function(t) {
            function e(t) {
                var n = this;
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.$parent = this.$el.parent(), this.ratio = this.el.height / this.el.width, this.$el.removeAttr("width").removeAttr("height"), (0, u["default"])(window).on("resize", (0, f["default"])(function() {
                    n.onResize()
                }, 1e3 / 60)), this.onResize()
            }
            return o(e, t), a(e, [{
                key: "onResize",
                value: function() {
                    var t = this.$parent.width(),
                        e = t * this.ratio | 0;
                    this.$el.width(t).height(e)
                }
            }]), e
        }(h["default"]);
    e["default"] = p, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(3),
        f = r(c),
        d = n(4),
        h = r(d),
        p = n(2),
        g = r(p),
        m = function(t) {
            function e(t) {
                var n = this;
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.events = {
                    mousemove: (0, h["default"])(function(t) {
                        n.onMouseMove(t)
                    }, 1e3 / 60),
                    mouseleave: "onMouseLeave",
                    "click .hero__pager--prev": "prevHero",
                    "click .hero__pager--next": "nextHero"
                }, this.elWidth = this.$el.width(), this.elHeight = this.$el.height(), this.$items = this.$(".h-item"), this.$parts = this.$(".hero__parts"), this.currentPart = 0, this.maxParts = this.$parts.length, this.maxRotateX = 7, this.maxRotateY = 5, this.isMobile = !0, u["default"].mediaquery("bind", "mq-key", "(max-width: 79.99em)", {
                    enter: function() {
                        n.isMobile = !0
                    },
                    leave: function() {
                        n.isMobile = !1
                    }
                })
            }
            return o(e, t), a(e, [{
                key: "onMouseMove",
                value: function(t) {
                    var e = this.$el.offset(),
                        n = {
                            x: t.pageX - e.left | 0,
                            y: t.pageY - e.top | 0
                        };
                    this.move(n.x, n.y)
                }
            }, {
                key: "onMouseLeave",
                value: function(t) {
                    return this.isMobile ? !1 : void this.$items.each(function(t, e) {
                        var n = (0, u["default"])(e);
                        (n.hasClass("background") || n.parent().hasClass("is-visible")) && (f["default"].stop(e), f["default"].animate(e, {
                            translateX: 0,
                            translateY: 0,
                            rotateX: 0,
                            rotateY: 0
                        }, {
                            type: f["default"].spring,
                            duration: 2e3,
                            frequency: 200,
                            friction: 150
                        }))
                    })
                }
            }, {
                key: "move",
                value: function(t, e) {
                    var n = this;
                    if (this.isMobile) return !1;
                    var r = -1 * (this.elWidth / 2 - t),
                        i = this.elHeight / 2 - e;
                    this.$items.each(function(t, e) {
                        var o = (0, u["default"])(e);
                        if (o.hasClass("background") || o.parent().hasClass("is-visible")) {
                            var a = r / (n.elWidth / 2) * o.data("max-translate-x"),
                                s = i / (n.elHeight / 2) * o.data("max-translate-y"),
                                l = i / (n.elHeight / 2) * o.data("max-rotate-x"),
                                c = r / (n.elWidth / 2) * o.data("max-rotate-y");
                            f["default"].stop(e), f["default"].css(e, {
                                translateX: a,
                                translateY: s,
                                rotateX: l,
                                rotateY: c
                            })
                        }
                    })
                }
            }, {
                key: "prevHero",
                value: function(t) {
                    t.preventDefault(), (0, u["default"])(t.currentTarget).blur(), this.currentPart--, this.currentPart < 0 && (this.currentPart = this.maxParts - 1), this.changeHero()
                }
            }, {
                key: "nextHero",
                value: function(t) {
                    t.preventDefault(), this.currentPart++, this.currentPart >= this.maxParts && (this.currentPart = 0), this.changeHero()
                }
            }, {
                key: "changeHero",
                value: function() {
                    var t = this;
                    console.log("changeHero"), this.$parts.removeClass("is-visible"), setTimeout(function() {
                        t.$items.each(function(t, e) {
                            var n = (0, u["default"])(e);
                            n.hasClass("background") === !1 && n.removeAttr("style")
                        }), t.$parts.eq(t.currentPart).addClass("is-visible")
                    }, 400)
                }
            }]), e
        }(g["default"]);
    e["default"] = m, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(5),
        f = r(c),
        d = "navigatestart",
        h = "navigateend",
        p = "navigateerror",
        g = null,
        m = /^[#\/]|\s+$/g,
        v = /^\/+|\/+$/g,
        y = /#.*$/,
        b = /^https?:\/\/[a-z\:0-9.]+/,
        x = function(t) {
            function e(t) {
                if (i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), g) return g;
                if (g = this, this.options = Object.assign({
                        root: "/",
                        cacheMaxAge: 3600,
                        hashChange: !1,
                        pushState: !1
                    }, t), this.root = this.options.root, this._ajaxRequest = null, this._cache = {}, this._cacheMaxAge = this.options.cacheMaxAge, this._wantsHashChange = this.options.hashChange, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = this.options.pushState, this._hasPushState = !(!window.history || !window.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.popstate = !1, this.replace = !1, this.root = ("/" + this.root + "/").replace(v, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var n = this.root.slice(0, -1) || "/";
                        return window.location.replace(n + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && console.log("TODO")
                }
                var r = window.addEventListener || function(t, e) {
                    return window.attachEvent("on" + t, e)
                };
                return this._usePushState ? r("popstate", this.checkUrl.bind(this), !1) : this._useHashChange && r("hashchange", this.checkUrl.bind(this), !1), g
            }
            return o(e, t), a(e, [{
                key: "atRoot",
                value: function() {
                    var t = window.location.pathname.replace(/[^\/]$/, "$&/");
                    return t === this.root && !this.getSearch()
                }
            }, {
                key: "removeBaseUrl",
                value: function(t) {
                    var e = "",
                        n = b.exec(t);
                    return n && (e = n[0]), e.length && (t = t.replace(e, "")), t
                }
            }, {
                key: "decodeFragment",
                value: function(t) {
                    return decodeURI(t.replace(/%25/g, "%2525"))
                }
            }, {
                key: "getSearch",
                value: function() {
                    var t = window.location.href.replace(/#.*/, "").match(/\?.+/);
                    return t ? t[0] : ""
                }
            }, {
                key: "getHash",
                value: function() {
                    var t = window.location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                }
            }, {
                key: "getPath",
                value: function() {
                    var t = this.decodeFragment(window.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === t.charAt(0) ? t.slice(1) : t
                }
            }, {
                key: "getFragment",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    return null === t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(m, "")
                }
            }, {
                key: "decodeHTML",
                value: function(t) {
                    var e = document.createElement("textarea");
                    return e.innerHTML = t, e.value
                }
            }, {
                key: "checkUrl",
                value: function() {
                    var t = this.getFragment();
                    return t === this.fragment ? !1 : void this.navigate(t, {
                        popstate: !0
                    })
                }
            }, {
                key: "cache",
                value: function(t) {
                    var e = Date.now() / 1e3 | 0;
                    this._cache[this.fragment] = {
                        createdAt: e,
                        content: t
                    }
                }
            }, {
                key: "fromCache",
                value: function(t) {
                    if (!(t in this._cache)) return !1;
                    var e = Date.now() / 1e3 | 0,
                        n = this._cache[t].createdAt,
                        r = e - n;
                    return r > this._cacheMaxAge ? (delete this._cache[t], !1) : !0
                }
            }, {
                key: "navigate",
                value: function(t) {
                    var n = this,
                        r = arguments.length <= 1 || void 0 === arguments[1] ? {
                            popstate: !1
                        } : arguments[1];
                    this.popstate = r.popstate, this.replace = r.replace, t = this.removeBaseUrl(t || ""), t = this.getFragment(t || "");
                    var i = this.root;
                    "" !== t && "?" !== t.charAt(0) || (i = i.slice(0, -1) || "/");
                    var o = i + t;
                    t = this.decodeFragment(t.replace(y, "")), this.fragment !== t && (this.fragment = t, this.trigger(e.NAVIGATE_START), this.fromCache(this.fragment) ? setTimeout(function() {
                        n.fetched(o)
                    }, 0) : this.fetch(o))
                }
            }, {
                key: "fetch",
                value: function(t) {
                    var n = this;
                    this._ajaxRequest && 4 !== this._ajaxRequest && this._ajaxRequest.abort(), this._ajaxRequest = u["default"].ajax({
                        url: t,
                        success: function(e) {
                            n.cache(e), n.fetched(t)
                        },
                        error: function(t, r, i) {
                            n.trigger(e.NAVIGATE_START, t.status, i)
                        }
                    })
                }
            }, {
                key: "fetched",
                value: function(t) {
                    var n = this._cache[this.fragment].content;
                    this._usePushState === !0 && this.popstate === !1 ? window.history[this.replace ? "replaceState" : "pushState"]({}, null, t) : this._wantsHashChange && this._updateHash(this.fragment, this.replace);
                    var r = this.decodeHTML(n.match(/<title>(.*?)<\/title>/)[1].trim());
                    document.title = r, this.trigger(e.NAVIGATE_END, n, r)
                }
            }, {
                key: "_updateHash",
                value: function(t, e) {
                    if (e) {
                        var n = window.location.href.replace(/(javascript:|#).*$/, "");
                        window.location.replace(n + "#" + t)
                    } else window.location.hash = "#" + t
                }
            }], [{
                key: "NAVIGATE_START",
                get: function() {
                    return d
                }
            }, {
                key: "NAVIGATE_END",
                get: function() {
                    return h
                }
            }, {
                key: "NAVIGATE_ERROR",
                get: function() {
                    return p
                }
            }]), e
        }(f["default"]);
    e["default"] = x, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        a = n(1),
        s = r(a),
        l = {
            lineHeight: 120,
            lineDuration: 1800
        },
        u = function() {
            function t(e, n, r) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? l : arguments[3];
                i(this, t), this.$container = (0, s["default"])(e), this.$hours = (0, s["default"])(n).children(), this.$events = (0, s["default"])(r), this.options = Object.assign(l, o), this._setContainerHeight(), this._arrangeHours(), this._arrangeEvents()
            }
            return o(t, [{
                key: "_setContainerHeight",
                value: function() {
                    var t = this.options.lineHeight,
                        e = this.$hours.length,
                        n = e * t;
                    this.$container.css({
                        height: n + "px"
                    })
                }
            }, {
                key: "_arrangeHours",
                value: function() {
                    var t = this.options.lineHeight;
                    s["default"].each(this.$hours, function(e, n) {
                        var r = (0, s["default"])(n),
                            i = r.height(),
                            o = e * t - i / 2;
                        r.css({
                            position: "absolute",
                            top: o + "px"
                        })
                    })
                }
            }, {
                key: "_arrangeEvents",
                value: function() {
                    var t = this,
                        e = this.options,
                        n = (e.dayStart, e.lineHeight),
                        r = e.lineDuration;
                    s["default"].each(this.$events, function(e, i) {
                        var o = (0, s["default"])(i),
                            a = t.$container.data("day-start"),
                            l = o.data("start"),
                            u = o.data("end"),
                            c = u - l,
                            f = c / r * n,
                            d = (l - a) / r * n;
                        o.css({
                            position: "absolute",
                            top: d + "px",
                            height: f + "px"
                        })
                    })
                }
            }, {
                key: "unsetStyles",
                value: function() {
                    this.$container.removeAttr("style"), this.$hours.removeAttr("style"), this.$events.removeAttr("style")
                }
            }]), t
        }();
    e["default"] = u, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(3),
        f = r(c),
        d = n(4),
        h = r(d),
        p = n(2),
        g = r(p),
        m = function(t) {
            function e(t) {
                var n = this;
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.$shadow = (0, u["default"])('<span class="shadow" aria-hidden="true"></span>').html(this.$el.html()), this.$el.append(this.$shadow), this.shadow = this.$shadow[0], this.elWidth = this.$el.width(), this.elHeight = this.$el.height(), this.maxRotateZ = .3, this.maxRotateY = 5, this.isMobile = !0, u["default"].mediaquery("bind", "mq-key", "(max-width: 46.24em)", {
                    enter: function() {
                        n.isMobile = !0
                    },
                    leave: function() {
                        n.isMobile = !1
                    }
                }), (0, u["default"])(window).on("mousemove", (0, h["default"])(function(t) {
                    n.isMobile || n.onMouseMove(t)
                }, 1e3 / 60)).mousemove()
            }
            return o(e, t), a(e, [{
                key: "onMouseMove",
                value: function(t) {
                    var e = this.$el.offset(),
                        n = {
                            x: t.pageX - e.left | 0,
                            y: t.pageY - e.top | 0
                        };
                    this.move(n.x, n.y)
                }
            }, {
                key: "move",
                value: function(t, e) {
                    var n = -1 * (this.elWidth / 2 - t),
                        r = this.elHeight / 2 - e,
                        i = n / (this.elWidth / 2) * this.maxRotateY,
                        o = r / (this.elHeight / 2) * this.maxRotateZ;
                    (0, u["default"])("body").hasClass("safari") && (i = Math.max(i, 0)), o = Math.max(o, -2.5), f["default"].css(this.shadow, {
                        rotateY: i,
                        rotateZ: o
                    })
                }
            }]), e
        }(g["default"]);
    e["default"] = m, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(5),
        f = r(c),
        d = {
            facebookAppID: null,
            facebookShareViaAPI: !1
        },
        h = "share:completed",
        p = [{
            name: "facebook",
            sdk_url: "//connect.facebook.net/en_US/all.js",
            share_url: "https://www.facebook.com/sharer/sharer.php?",
            params: [
                ["u", "url"]
            ]
        }, {
            name: "twitter",
            sdk_url: "https://platform.twitter.com/widgets.js",
            share_url: "https://twitter.com/intent/tweet?",
            params: [
                ["text", "text"],
                ["url", "url"]
            ]
        }, {
            name: "google-plus",
            share_url: "https://plus.google.com/share?",
            params: [
                ["url", "url"]
            ]
        }, {
            name: "pinterest",
            share_url: "http://pinterest.com/pin/create/button?",
            params: [
                ["description", "text"],
                ["url", "url"],
                ["media", "image"]
            ]
        }, {
            name: "linkedin",
            share_url: "http://www.linkedin.com/shareArticle?mini=true",
            params: [
                ["summary", "text"],
                ["url", "url"],
                ["title", "title"]
            ]
        }, {
            name: "reddit",
            share_url: "http://www.reddit.com/submit?",
            params: [
                ["url", "url"]
            ]
        }, {
            name: "tumblr",
            share_url: "http://www.tumblr.com/share?",
            params: [
                ["link", "url"],
                ["photo", "image"]
            ]
        }],
        g = function(t) {
            function e(t) {
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.settings = Object.assign({}, d, t), this.registerPlatforms()
            }
            return o(e, t), a(e, [{
                key: "registerPlatforms",
                value: function() {
                    var t = this;
                    p.forEach(function(e) {
                        return "facebook" === e.name && t.settings.facebookShareViaAPI ? void t.initFacebook() : void t.bindPlatform(e)
                    })
                }
            }, {
                key: "bindPlatform",
                value: function(t) {
                    var n = this;
                    (0, u["default"])(document).on("click", "[data-share-" + t.name + "]", function(r) {
                        r.preventDefault();
                        var i = (0, u["default"])(r.currentTarget),
                            o = t.share_url;
                        t.params.forEach(function(t) {
                            var e = i.attr("data-share-" + t[1]),
                                n = t[0];
                            o += "&" + n + "=" + encodeURIComponent(e)
                        }), n.trigger(e.COMPLETED, t.name), n.openWindowAndCenter(o, 800, 400)
                    })
                }
            }, {
                key: "openWindowAndCenter",
                value: function(t, e, n) {
                    var r = screen.width / 2 - e / 2,
                        i = screen.height / 2 - n / 2,
                        o = "share-%{Math.floor(Date.now()/1000)}";
                    window.open(t, o, "width=" + e + ",height=" + n + ",top=" + i + ",left=" + r)
                }
            }, {
                key: "initFacebook",
                value: function() {
                    var t = this;
                    0 === (0, u["default"])("#fb-root").length && (0, u["default"])("body").append('<div id="fb-root"></div>'), "undefined" != typeof FB && null !== FB ? this.bindFacebookAPIInteractions() : u["default"].getScript(this.platforms[0].sdk_url, function() {
                        window.fbAsyncInit = function() {
                            FB.init({
                                appId: t.settings.facebookAppID,
                                status: !0,
                                xfbml: !0
                            }), t.bindFacebookAPIInteractions()
                        }
                    })
                }
            }, {
                key: "bindFacebookAPIInteractions",
                value: function() {
                    (0, u["default"])(document).on("click", "[data-share-facebook]", function(t) {
                        t.preventDefault();
                        var n = (0, u["default"])(t.currentTarget),
                            r = n.data("share-image"),
                            i = n.data("share-text"),
                            o = n.data("share-url"),
                            a = n.data("share-title"),
                            s = n.data("share-caption"),
                            l = {
                                method: "feed",
                                link: o,
                                picture: r,
                                name: a,
                                caption: s,
                                description: i
                            };
                        return FB.ui(l, function(t) {
                            t && !t.error_code && this.trigger(e.COMPLETED, "facebook")
                        }), !1
                    })
                }
            }], [{
                key: "COMPLETED",
                get: function() {
                    return h
                }
            }]), e
        }(f["default"]);
    e["default"] = g, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(3),
        f = r(c),
        d = n(4),
        h = r(d),
        p = n(2),
        g = r(p),
        m = n(15),
        v = r(m),
        y = n(14),
        b = r(y),
        x = n(16),
        w = r(x),
        k = n(9),
        C = r(k),
        T = n(12),
        S = r(T),
        _ = function(t) {
            function e() {
                var t = this;
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.el = "body", this.$main = this.$("main"), this.$window = (0, u["default"])(window), this.$document = (0, u["default"])(document), this.$parallax = (0, u["default"])("[data-parallax]"), this.isAbout = !!(0, u["default"])(".content--about").length, this.isNavigating = !1, this.events = {
                    "click [data-internal-link]": "navigate",
                    "click [data-external-link]": "navigateExternal",
                    "click [data-scroll-top]": "scrollTop"
                }, this.$window.on("scroll", (0, h["default"])(function(e) {
                    t.onScroll(e)
                }, 1e3 / 60)), this.$window.on("mousemove", (0, h["default"])(function(e) {
                    t.onMouseMove(e)
                }, 1e3 / 60)), this.header = new b["default"], this.currentView = new v["default"]({
                    el: "[data-view-content]"
                }), this.currentView.enter(), this.pageTransitioner = new w["default"];
                var n = new S["default"];
                n.on(S["default"].COMPLETED, function(t) {
                    console.log("google event", "share click", t)
                }), this.Router = new C["default"]({
                    pushState: !0
                }), this.Router.on(C["default"].NAVIGATE_START, this.onNavigateStart.bind(this)), this.Router.on(C["default"].NAVIGATE_END, this.onNavigateEnd.bind(this)), this.$window.trigger("mousemove")
            }
            return o(e, t), a(e, [{
                key: "navigate",
                value: function(t) {
                    var e = (0, u["default"])(t.currentTarget),
                        n = e.attr("href");
                    return n || (n = e.data("href")), e.blur(), this.isNavigating ? !1 : (this.Router.navigate(n), !1)
                }
            }, {
                key: "navigateExternal",
                value: function(t) {
                    var e = (0, u["default"])(t.currentTarget),
                        n = e.attr("href");
                    return n || (n = e.data("href")), window.open(n, "_blank"), !1
                }
            }, {
                key: "scrollTop",
                value: function(t) {
                    return t.preventDefault(), this.scrollTo(0), !1
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = this,
                        n = {
                            top: this.$document.scrollTop()
                        };
                    f["default"].animate(n, {
                        top: t
                    }, {
                        type: f["default"].easeInOut,
                        duration: 2e3,
                        friction: 1,
                        change: function(t) {
                            e.$document.scrollTop(t.top)
                        }
                    })
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    var e = this.$window.width() / 2,
                        n = 25 * (e - t.pageX) / e | 0,
                        r = 0 - t.pageY,
                        i = this.$window.width() - t.pageX,
                        o = 180 * Math.atan2(r, i) / Math.PI / 2 | 0,
                        a = "\n      linear-gradient(" + (o - 120) + "deg, rgba(255, 223, 182, 1) 0, rgba(255, 223, 182, 0) 600px),\n      linear-gradient(-45deg, rgba(255, 223, 182, 1) 0%, rgba(255, 193, 193, 1) " + (49 + n) + "%, rgba(255, 208, 208, 1) " + (73 + n) + "%, rgba(255, 186, 198, 0) 100%)\n    ";
                    this.isAbout && (a = "\n        linear-gradient(" + (o - 120) + "deg, rgba(255, 223, 182, 1) 0, rgba(255, 223, 182, 0) 600px)\n      "), this.$main.css({
                        backgroundImage: a
                    })
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    var e = this.$window.scrollTop();
                    this.$parallax.each(function() {
                        var t = this,
                            n = (0, u["default"])(this),
                            r = parseFloat(n.data("parallax"));
                        if (0 === r) return void n.removeAttr("data-parallax");
                        var i = 0 - e * r | 0;
                        requestAnimationFrame(function() {
                            f["default"].css(t, {
                                translateY: i,
                                translateZ: 0
                            })
                        })
                    })
                }
            }, {
                key: "onNavigateStart",
                value: function() {
                    this.isNavigating = !0, this.$el.removeClass("is-navigation-open")
                }
            }, {
                key: "onNavigateEnd",
                value: function(t, e) {
                    var n = this,
                        r = (0, u["default"])(t).find(".navigation");
                    this.$(".navigation").html(r.html());
                    var i = (0, u["default"])(t).find(".kikk-sitemap");
                    this.$(".kikk-sitemap").replaceWith(i);
                    var o = (0, u["default"])(t).find(".kikk-newsletter");
                    this.$(".kikk-newsletter").replaceWith(o);
                    var a = (0, u["default"])(t).find(".kikk-partners");
                    this.$(".kikk-partners").replaceWith(a), this.currentView ? (this.pageTransitioner.out(), this.currentView.leave(function() {
                        var e = new v["default"]({
                            content: (0, u["default"])(t).find("[data-view-content]")
                        }).render();
                        n.currentView.remove(), n.currentView = e, n.$parallax = (0, u["default"])("[data-parallax]"), n.isAbout = !!(0, u["default"])(".content--about").length, n.$document.scrollTop(0), n.pageTransitioner["in"](), n.currentView.enter(function() {
                            var t = window.location.hash;
                            if (t.indexOf("#spot") > -1) {
                                var e = t.substring(String("#spot-").length);
                                n.scrollTo(n.$("#" + e).offset().top - 24)
                            }
                        }), n.isNavigating = !1, n.$(".has-dropdown.is-open").length ? (0, u["default"])("body").addClass("is-dropdown-open") : (0, u["default"])("body").removeClass("is-dropdown-open"), n.$window.trigger("mousemove")
                    })) : (this.currentView = new v["default"]({
                        content: (0, u["default"])(t).find("[data-view-content]")
                    }), this.currentView.enter())
                }
            }]), e
        }(g["default"]);
    e["default"] = _, t.exports = e["default"]
}, function(t, e, n) {
    (function(r) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = function(t, e, n) {
                for (var r = !0; r;) {
                    var i = t,
                        o = e,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a)
                    }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    t = u, e = o, n = a, r = !0, s = u = void 0
                }
            },
            u = n(3),
            c = (i(u), n(4)),
            f = i(c),
            d = n(2),
            h = i(d),
            p = function(t) {
                function e(t) {
                    var n = this;
                    o(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.el = "#site-header", this.$navigation = this.$("#navigation"), this.events = {
                        "click [data-toggle-dropdown]": "toggleDropdown",
                        "click [data-back-dropdown]": "clearDropdowns",
                        "click [data-navigation-trigger]": "toggleNavigation"
                    }, this.$body = r("body"), this.lastScrollTop = r(window).scrollTop(), this.$(".has-dropdown.is-open").length && this.$body.addClass("is-dropdown-open"), r(window).on("scroll", (0, f["default"])(function(t) {
                        n.onScroll(t)
                    }, 1e3 / 60))
                }
                return a(e, t), s(e, [{
                    key: "toggleDropdown",
                    value: function(t) {
                        var e = r(t.currentTarget),
                            n = e.parent(),
                            i = n.hasClass("is-open");
                        return this.clearDropdowns(), i || t.isDefaultPrevented() ? void 0 : (e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("is-open"), this.$body.toggleClass("is-dropdown-open"), !1)
                    }
                }, {
                    key: "toggleNavigation",
                    value: function(t) {
                        var e = this;
                        r(t.currentTarget);
                        return this.$body.hasClass("is-navigation-open") && this.$body.hasClass("is-dropdown-open") && setTimeout(function() {
                            e.$body.removeClass("is-dropdown-open"), e.$(".has-dropdown.is-open").length && e.$(".has-dropdown.is-open").removeClass("is-open")
                        }, 200), this.$body.toggleClass("is-navigation-open"), !1
                    }
                }, {
                    key: "clearDropdowns",
                    value: function(t) {
                        return this.$("[data-toggle-dropdown]").each(function() {
                            var e = r(this),
                                n = e.parent(),
                                i = n.hasClass("is-open");
                            !i || t && t.isDefaultPrevented() || (e.attr("aria-expanded", "false").blur(), n.removeClass("is-open"), r("body").removeClass("is-dropdown-open"))
                        }), !1
                    }
                }, {
                    key: "onScroll",
                    value: function(t) {
                        var e = r(window).scrollTop();
                        e > this.$el.height() && e > this.lastScrollTop ? e + r(window).height() == r(document).height() ? this.$el.removeClass("is-hidden") : this.$el.addClass("is-hidden") : this.$el.removeClass("is-hidden"), this.lastScrollTop = e
                    }
                }]), e
            }(h["default"]);
        e["default"] = p, t.exports = e["default"]
    }).call(e, n(1))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(3),
        f = r(c),
        d = n(2),
        h = r(d),
        p = n(8),
        g = r(p),
        m = n(11),
        v = r(m),
        y = n(6),
        b = r(y),
        x = n(7),
        w = r(x),
        k = n(10),
        C = r(k),
        T = function(t) {
            function e(t) {
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.content ? (this.$el.html(this.content.html()), this.$scheduler = this.$el.find(".js-scheduler"), 0 !== this.$scheduler.length && this._initScheduler()) : (this._initHero(), this._initShadow(), this._initFloatingCard(), this._initFluidVideo(), this._initDuotone(), this.$scheduler = this.$el.find(".js-scheduler"), 0 !== this.$scheduler.length && this._initScheduler()), this.$el.attr("data-view-content", ""), this.content = null
            }
            return o(e, t), a(e, [{
                key: "_initHero",
                value: function() {
                    this.$el.find("[data-hero]").each(function(t, e) {
                        new g["default"]({
                            el: e
                        })
                    })
                }
            }, {
                key: "_initShadow",
                value: function() {
                    this.$el.find("[data-shadow]").each(function(t, e) {
                        new v["default"]({
                            el: e
                        })
                    })
                }
            }, {
                key: "_initFloatingCard",
                value: function() {
                    this.$el.find("[data-floating-card]").each(function(t, e) {
                        new b["default"]({
                            el: e
                        })
                    })
                }
            }, {
                key: "_initFluidVideo",
                value: function() {
                    this.$el.find(".event__gallery iframe, .live-stream iframe").each(function(t, e) {
                        new w["default"]({
                            el: e
                        })
                    })
                }
            }, {
                key: "_initDuotone",
                value: function() {
                    this.$el.find("[data-duotone]").duotone({
                        gradientMap: "#854f51, #ffe9e7",
                        hdpi: !0
                    })
                }
            }, {
                key: "_initScheduler",
                value: function() {
                    var t = ".js-scheduler",
                        e = ".js-scheduler-hours",
                        n = ".js-scheduler-event";
                    this.Scheduler = new C["default"](t, e, n)
                }
            }, {
                key: "render",
                value: function() {
                    return f["default"].css(this.$el[0], {
                        translateX: 100
                    }), (0, u["default"])("main").append(this.$el), this._initHero(), this._initShadow(), this._initFloatingCard(), this._initFluidVideo(), this._initDuotone(), 0 !== this.$scheduler.length && this._initScheduler(), this
                }
            }, {
                key: "enter",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    return f["default"].animate(this.$el[0], {
                        translateX: 0
                    }, {
                        type: f["default"].easeOut,
                        friction: 1,
                        duration: 800,
                        delay: 200,
                        complete: function() {
                            t.$el.removeAttr("style"), t.$(".event__pager").addClass("is-visible"), "function" == typeof e && e.call(t)
                        }
                    }), this
                }
            }, {
                key: "leave",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    return this.$(".event__pager").removeClass("is-visible"), f["default"].animate(this.$el[0], {
                        translateX: -200
                    }, {
                        type: f["default"].easeIn,
                        friction: 400,
                        duration: 800,
                        delay: 100,
                        complete: function() {
                            "function" == typeof e && e.call(t)
                        }
                    }), this
                }
            }]), e
        }(h["default"]);
    e["default"] = T, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        s = function(t, e, n) {
            for (var r = !0; r;) {
                var i = t,
                    o = e,
                    a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(i);
                if (null === u) return;
                t = u, e = o, n = a, r = !0, s = u = void 0
            }
        },
        l = n(1),
        u = r(l),
        c = n(2),
        f = r(c),
        d = {
            className: "page-transitioner"
        },
        h = 300,
        p = 1e3 / 60 / h / 4,
        g = function(t) {
            function e() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? d : arguments[0];
                i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.events = {
                    "webkitTransitionEnd .page-transitioner__pane.in": "reset",
                    "transitionend .page-transitioner__pane.in": "reset"
                }, this.steps = ["M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z", "M1400,800H383L770.7,0.6c0.2-0.3,0.5-0.6,0.9-0.6H1400v294V800z", "M1400,800H0V0.6C0,0.4,0,0.3,0,0h1400v294V800z", "M351.4,800H0V0.6C0,0.4,0,0.3,0,0h149.6l75,312L351.4,800z", "M0,800h-2V0.6C-2,0.4-2,0.3-2,0h2v312V800z"], this.$el.append('<svg height=\'100%\' width="100%" preserveAspectRatio="none" viewBox="0 0 1400 800">\n        <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">\n          <stop stop-color="#ffdfb6" offset="0"/>\n          <stop stop-color="#ffbac5" offset="1"/>\n        </linearGradient>\n        <path id="' + this.className + '__path" d="M1402,800h-2V0.6c0-0.3,0-0.3,0-0.6h2v294V800z"/>\n      </svg>'), (0, u["default"])("body").append(this.$el), this.svgPath = Snap("#" + this.className + "__path")
            }
            return o(e, t), a(e, [{
                key: "_bezier",
                value: function(t, e, n, r, i) {
                    var o = function(e) {
                            var r = 1 - e;
                            return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e
                        },
                        a = function(t) {
                            var n = 1 - t;
                            return 3 * n * n * t * e + 3 * n * t * t * r + t * t * t
                        },
                        s = function(e) {
                            var r = 1 - e;
                            return 3 * (2 * (e - 1) * e + r * r) * t + 3 * (-e * e * e + 2 * r * e) * n
                        };
                    return function(t) {
                        var e = t,
                            n = void 0,
                            r = void 0,
                            l = void 0,
                            u = void 0,
                            c = void 0,
                            f = void 0;
                        for (l = e, f = 0; 8 > f; f++) {
                            if (u = o(l) - e, Math.abs(u) < i) return a(l);
                            if (c = s(l), Math.abs(c) < 1e-6) break;
                            l -= u / c
                        }
                        if (n = 0, r = 1, l = e, n > l) return a(n);
                        if (l > r) return a(r);
                        for (; r > n;) {
                            if (u = o(l), Math.abs(u - e) < i) return a(l);
                            e > u ? n = l : r = l, l = .5 * (r - n) + n
                        }
                        return a(l)
                    }
                }
            }, {
                key: "in",
                value: function() {
                    var t = this;
                    this.svgPath.animate({
                        d: this.steps[3]
                    }, h, this._bezier(.42, .03, .77, .63, p), function() {
                        t.svgPath.animate({
                            d: t.steps[4]
                        }, h, t._bezier(.27, .5, .6, .99, p), function() {
                            t.$el.removeClass("is-animating")
                        })
                    })
                }
            }, {
                key: "out",
                value: function() {
                    var t = this;
                    this.$el.addClass("is-animating"), this.svgPath.attr("d", this.steps[0]), this.svgPath.animate({
                        d: this.steps[1]
                    }, h, this._bezier(.42, .03, .77, .63, p), function() {
                        t.svgPath.animate({
                            d: t.steps[2]
                        }, h, t._bezier(.27, .5, .6, .99, p))
                    })
                }
            }]), e
        }(f["default"]);
    e["default"] = g, t.exports = e["default"]
}, function(t, e, n) {
    (function(t) {
        (function() {
            this.Formstone = function(t, e, n, r) {
                "use strict";

                function i(t) {
                    d.Plugins[t].initialized || (d.Plugins[t].methods._setup.call(n), d.Plugins[t].initialized = !0)
                }

                function o(t, e, n, r) {
                    var i, o = {
                        raw: {}
                    };
                    r = r || {};
                    for (i in r) r.hasOwnProperty(i) && ("classes" === t ? (o.raw[r[i]] = e + "-" + r[i], o[r[i]] = "." + e + "-" + r[i]) : (o.raw[i] = r[i], o[i] = r[i] + "." + e));
                    for (i in n) n.hasOwnProperty(i) && ("classes" === t ? (o.raw[i] = n[i].replace(/{ns}/g, e), o[i] = n[i].replace(/{ns}/g, "." + e)) : (o.raw[i] = n[i].replace(/.{ns}/g, ""), o[i] = n[i].replace(/{ns}/g, e)));
                    return o
                }

                function a() {
                    var t, e = {
                            transition: "transitionend",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        },
                        r = ["transition", "-webkit-transition"],
                        i = {
                            transform: "transform",
                            MozTransform: "-moz-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            webkitTransform: "-webkit-transform"
                        },
                        o = "transitionend",
                        a = "",
                        s = "",
                        l = n.createElement("div");
                    for (t in e)
                        if (e.hasOwnProperty(t) && t in l.style) {
                            o = e[t], d.support.transition = !0;
                            break
                        }
                    g.transitionEnd = o + ".{ns}";
                    for (t in r)
                        if (r.hasOwnProperty(t) && r[t] in l.style) {
                            a = r[t];
                            break
                        }
                    d.transition = a;
                    for (t in i)
                        if (i.hasOwnProperty(t) && i[t] in l.style) {
                            d.support.transform = !0, s = i[t];
                            break
                        }
                    d.transform = s
                }

                function s() {
                    d.windowWidth = d.$window.width(), d.windowHeight = d.$window.height(), m = f.startTimer(m, v, l)
                }

                function l() {
                    for (var t in d.ResizeHandlers) d.ResizeHandlers.hasOwnProperty(t) && d.ResizeHandlers[t].callback.call(e, d.windowWidth, d.windowHeight)
                }

                function u(t, e) {
                    return parseInt(t.priority) - parseInt(e.priority)
                }
                var c = function() {
                        this.Version = "@version", this.Plugins = {}, this.DontConflict = !1, this.Conflicts = {
                            fn: {}
                        }, this.ResizeHandlers = [], this.window = e, this.$window = t(e), this.document = n, this.$document = t(n), this.$body = null, this.windowWidth = 0, this.windowHeight = 0, this.userAgent = e.navigator.userAgent || e.navigator.vendor || e.opera, this.isFirefox = /Firefox/i.test(this.userAgent), this.isChrome = /Chrome/i.test(this.userAgent), this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent), this.isFirefoxMobile = this.isFirefox && this.isMobile, this.transform = null, this.transition = null, this.support = {
                            file: !!(e.File && e.FileList && e.FileReader),
                            history: !!(e.history && e.history.pushState && e.history.replaceState),
                            matchMedia: !(!e.matchMedia && !e.msMatchMedia),
                            raf: !(!e.requestAnimationFrame || !e.cancelAnimationFrame),
                            touch: !!("ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch),
                            transition: !1,
                            transform: !1
                        }
                    },
                    f = {
                        killEvent: function(t, e) {
                            try {
                                t.preventDefault(), t.stopPropagation(), e && t.stopImmediatePropagation()
                            } catch (n) {}
                        },
                        startTimer: function(t, e, n, r) {
                            return f.clearTimer(t), r ? setInterval(n, e) : setTimeout(n, e)
                        },
                        clearTimer: function(t, e) {
                            t && (e ? clearInterval(t) : clearTimeout(t), t = null)
                        },
                        sortAsc: function(t, e) {
                            return parseInt(e) - parseInt(t)
                        },
                        sortDesc: function(t, e) {
                            return parseInt(e) - parseInt(t)
                        }
                    },
                    d = new c,
                    h = t.Deferred(),
                    p = {
                        base: "{ns}",
                        element: "{ns}-element"
                    },
                    g = {
                        namespace: ".{ns}",
                        blur: "blur.{ns}",
                        change: "change.{ns}",
                        click: "click.{ns}",
                        dblClick: "dblclick.{ns}",
                        drag: "drag.{ns}",
                        dragEnd: "dragend.{ns}",
                        dragEnter: "dragenter.{ns}",
                        dragLeave: "dragleave.{ns}",
                        dragOver: "dragover.{ns}",
                        dragStart: "dragstart.{ns}",
                        drop: "drop.{ns}",
                        error: "error.{ns}",
                        focus: "focus.{ns}",
                        focusIn: "focusin.{ns}",
                        focusOut: "focusout.{ns}",
                        input: "input.{ns}",
                        keyDown: "keydown.{ns}",
                        keyPress: "keypress.{ns}",
                        keyUp: "keyup.{ns}",
                        load: "load.{ns}",
                        mouseDown: "mousedown.{ns}",
                        mouseEnter: "mouseenter.{ns}",
                        mouseLeave: "mouseleave.{ns}",
                        mouseMove: "mousemove.{ns}",
                        mouseOut: "mouseout.{ns}",
                        mouseOver: "mouseover.{ns}",
                        mouseUp: "mouseup.{ns}",
                        resize: "resize.{ns}",
                        scroll: "scroll.{ns}",
                        select: "select.{ns}",
                        touchCancel: "touchcancel.{ns}",
                        touchEnd: "touchend.{ns}",
                        touchLeave: "touchleave.{ns}",
                        touchMove: "touchmove.{ns}",
                        touchStart: "touchstart.{ns}"
                    };
                c.prototype.NoConflict = function() {
                    d.DontConflict = !0;
                    for (var e in d.Plugins) d.Plugins.hasOwnProperty(e) && (t[e] = d.Conflicts[e], t.fn[e] = d.Conflicts.fn[e])
                }, c.prototype.Plugin = function(n, r) {
                    return d.Plugins[n] = function(n, r) {
                        function i(e) {
                            var i = "object" === t.type(e);
                            e = t.extend(!0, {}, r.defaults || {}, i ? e : {});
                            for (var o = this, a = 0, l = o.length; l > a; a++) {
                                var u = o.eq(a);
                                if (!s(u)) {
                                    var c = "__" + r.guid++,
                                        f = r.classes.raw.base + c,
                                        d = u.data(n + "-options"),
                                        h = t.extend(!0, {
                                            $el: u,
                                            guid: c,
                                            rawGuid: f,
                                            dotGuid: "." + f
                                        }, e, "object" === t.type(d) ? d : {});
                                    u.addClass(r.classes.raw.element).data(y, h), r.methods._construct.apply(u, [h].concat(Array.prototype.slice.call(arguments, i ? 1 : 0)))
                                }
                            }
                            return o
                        }

                        function a(t) {
                            r.functions.iterate.apply(this, [r.methods._destruct].concat(Array.prototype.slice.call(arguments, 1))), this.removeClass(r.classes.raw.element).removeData(y)
                        }

                        function s(t) {
                            return t.data(y)
                        }

                        function l(e) {
                            if (this instanceof t) {
                                var n = r.methods[e];
                                return "object" !== t.type(e) && e ? n && 0 !== e.indexOf("_") ? r.functions.iterate.apply(this, [n].concat(Array.prototype.slice.call(arguments, 1))) : this : i.apply(this, arguments)
                            }
                        }

                        function c(n) {
                            var i = r.utilities[n] || r.utilities._initialize || !1;
                            return i ? i.apply(e, Array.prototype.slice.call(arguments, "object" === t.type(n) ? 0 : 1)) : void 0
                        }

                        function h(e) {
                            r.defaults = t.extend(!0, r.defaults, e || {})
                        }

                        function m(e) {
                            for (var n = this, r = 0, i = n.length; i > r; r++) {
                                var o = n.eq(r),
                                    a = s(o) || {};
                                "undefined" !== t.type(a.$el) && e.apply(o, [a].concat(Array.prototype.slice.call(arguments, 1)))
                            }
                            return n
                        }
                        var v = "fs-" + n,
                            y = "fs" + n.replace(/(^|\s)([a-z])/g, function(t, e, n) {
                                return e + n.toUpperCase()
                            });
                        return r.initialized = !1, r.priority = r.priority || 10, r.classes = o("classes", v, p, r.classes), r.events = o("events", n, g, r.events), r.functions = t.extend({
                            getData: s,
                            iterate: m
                        }, f, r.functions), r.methods = t.extend(!0, {
                            _setup: t.noop,
                            _construct: t.noop,
                            _destruct: t.noop,
                            _resize: !1,
                            destroy: a
                        }, r.methods), r.utilities = t.extend(!0, {
                            _initialize: !1,
                            _delegate: !1,
                            defaults: h
                        }, r.utilities), r.widget && (d.Conflicts.fn[n] = t.fn[n], t.fn[y] = l, d.DontConflict || (t.fn[n] = t.fn[y])), d.Conflicts[n] = t[n], t[y] = r.utilities._delegate || c, d.DontConflict || (t[n] = t[y]), r.namespace = n, r.namespaceClean = y, r.guid = 0, r.methods._resize && (d.ResizeHandlers.push({
                            namespace: n,
                            priority: r.priority,
                            callback: r.methods._resize
                        }), d.ResizeHandlers.sort(u)), r
                    }(n, r), h.then(function() {
                        i(n)
                    }), d.Plugins[n]
                };
                var m = null,
                    v = 20;
                return d.$window.on("resize.fs", s), s(), t(function() {
                    d.$body = t("body"), h.resolve()
                }), g.clickTouchStart = g.click + " " + g.touchStart, a(), d
            }(t, this, document)
        }).call(window)
    }).call(e, n(1))
}, function(t, e, n) {
    (function(t) {
        (function() {
            ! function(t, e, n) {
                "use strict";

                function r(e) {
                    e = e || {};
                    for (var n in x) x.hasOwnProperty(n) && (d[n] = e[n] ? t.merge(e[n], d[n]) : d[n]);
                    d = t.extend(d, e), d.minWidth.sort(m.sortDesc), d.maxWidth.sort(m.sortAsc), d.minHeight.sort(m.sortDesc), d.maxHeight.sort(m.sortAsc);
                    for (var r in x)
                        if (x.hasOwnProperty(r)) {
                            b[r] = {};
                            for (var i in d[r])
                                if (d[r].hasOwnProperty(i)) {
                                    var o = window.matchMedia("(" + x[r] + ": " + (d[r][i] === 1 / 0 ? 1e5 : d[r][i]) + d.unit + ")");
                                    o.addListener(s), b[r][d[r][i]] = o
                                }
                        }
                    s()
                }

                function i(t, e, n) {
                    var r = g.matchMedia(e),
                        i = u(r.media);
                    y[i] || (y[i] = {
                        mq: r,
                        active: !0,
                        enter: {},
                        leave: {}
                    }, y[i].mq.addListener(l));
                    for (var o in n) n.hasOwnProperty(o) && y[i].hasOwnProperty(o) && (y[i][o][t] = n[o]);
                    l(y[i].mq)
                }

                function o(t, e) {
                    if (t)
                        if (e) {
                            var n = u(e);
                            y[n] && (y[n].enter[t] && delete y[n].enter[t], y[n].leave[t] && delete y[n].leave[t])
                        } else
                            for (var r in y) y.hasOwnProperty(r) && (y[r].enter[t] && delete y[r].enter[t], y[r].leave[t] && delete y[r].leave[t])
                }

                function a() {
                    v = {
                        unit: d.unit
                    };
                    for (var t in x)
                        if (x.hasOwnProperty(t))
                            for (var e in b[t])
                                if (b[t].hasOwnProperty(e) && b[t][e].matches) {
                                    var n = "Infinity" === e ? 1 / 0 : parseInt(e, 10);
                                    t.indexOf("max") > -1 ? (!v[t] || n < v[t]) && (v[t] = n) : (!v[t] || n > v[t]) && (v[t] = n)
                                }
                }

                function s() {
                    a(), p.trigger(h.mqChange, [v])
                }

                function l(t) {
                    var e = u(t.media),
                        n = y[e],
                        r = t.matches ? h.enter : h.leave;
                    if (n && n.active || !n.active && t.matches) {
                        for (var i in n[r]) n[r].hasOwnProperty(i) && n[r][i].apply(n.mq);
                        n.active = !0
                    }
                }

                function u(t) {
                    return t.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "").replace(/^\s+|\s+$/g, "")
                }

                function c() {
                    return v
                }
                var f = e.Plugin("mediaquery", {
                        utilities: {
                            _initialize: r,
                            state: c,
                            bind: i,
                            unbind: o
                        },
                        events: {
                            mqChange: "mqchange"
                        }
                    }),
                    d = {
                        minWidth: [0],
                        maxWidth: [1 / 0],
                        minHeight: [0],
                        maxHeight: [1 / 0],
                        unit: "px"
                    },
                    h = t.extend(f.events, {
                        enter: "enter",
                        leave: "leave"
                    }),
                    p = e.$window,
                    g = p[0],
                    m = f.functions,
                    v = null,
                    y = [],
                    b = {},
                    x = {
                        minWidth: "min-width",
                        maxWidth: "max-width",
                        minHeight: "min-height",
                        maxHeight: "max-height"
                    }
            }(t, Formstone)
        }).call(window)
    }).call(e, n(1))
}, function(t, e, n) {
    (function(t) {
        (function() {
            function n(t) {
                return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
            }

            function r(t) {
                return 0 > t ? 0 : t > 1 ? 1 : t
            }

            function i(t) {
                return n("%" === t[t.length - 1] ? parseFloat(t) / 100 * 255 : parseInt(t))
            }

            function o(t) {
                return r("%" === t[t.length - 1] ? parseFloat(t) / 100 : parseFloat(t))
            }

            function a(t, e, n) {
                return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function s(t) {
                var e = t.replace(/ /g, "").toLowerCase();
                if (e in l) return l[e].slice();
                if ("#" === e[0]) {
                    if (4 === e.length) {
                        var r = parseInt(e.substr(1), 16);
                        return r >= 0 && 4095 >= r ? [(3840 & r) >> 4 | (3840 & r) >> 8, 240 & r | (240 & r) >> 4, 15 & r | (15 & r) << 4, 1] : null
                    }
                    if (7 === e.length) {
                        var r = parseInt(e.substr(1), 16);
                        return r >= 0 && 16777215 >= r ? [(16711680 & r) >> 16, (65280 & r) >> 8, 255 & r, 1] : null
                    }
                    return null
                }
                var s = e.indexOf("("),
                    u = e.indexOf(")");
                if (-1 !== s && u + 1 === e.length) {
                    var c = e.substr(0, s),
                        f = e.substr(s + 1, u - (s + 1)).split(","),
                        d = 1;
                    switch (c) {
                        case "rgba":
                            if (4 !== f.length) return null;
                            d = o(f.pop());
                            break;
                        case "rgb":
                            return 3 !== f.length ? null : [i(f[0]), i(f[1]), i(f[2]), d];
                        case "hsla":
                            if (4 !== f.length) return null;
                            d = o(f.pop());
                            break;
                        case "hsl":
                            if (3 !== f.length) return null;
                            var h = (parseFloat(f[0]) % 360 + 360) % 360 / 360,
                                p = o(f[1]),
                                g = o(f[2]),
                                m = .5 >= g ? g * (p + 1) : g + p - g * p,
                                v = 2 * g - m;
                            return [n(255 * a(v, m, h + 1 / 3)), n(255 * a(v, m, h)), n(255 * a(v, m, h - 1 / 3)), d];
                        default:
                            return null
                    }
                }
                return null
            }
            var l = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            };
            try {
                e.parseCSSColor = s
            } catch (u) {}
            var c = [].slice;
            ! function(t) {
                var e;
                return e = function() {
                    function e(e, r) {
                        var o, a;
                        a = this, this.$el = t(e), this.options = t.extend({}, this.settings, this.$el.data(), r), o = new Image, o.crossOrigin = "Anonymous", o.src = this.$el.attr("src"), o.onload = function() {
                            var t, e;
                            return a.$el.data("original", this), t = n(a.options.gradientMap), e = i.call(a, this, t), a.$el.attr("src", e).addClass("processed")
                        }, o.onerror = function() {
                            throw new Error("Can not load the image: `" + this.src + "`")
                        }
                    }
                    var n, r, i;
                    return e.prototype.settings = {
                        gradientMap: "black, white",
                        hdpi: !1
                    }, i = function(t, e) {
                        var n, i, o, a, s, l, u, c, f, d, h, p;
                        for (l = r(e), o = document.createElement("canvas"), a = o.getContext("2d"), o.width = this.options.hdpi ? t.width : this.$el.width(), o.height = this.options.hdpi ? t.height : this.$el.height(), a.drawImage(t, 0, 0, o.width, o.height), c = a.getImageData(0, 0, o.width, o.height), d = c.data, u = f = 0, p = d.length; p >= f; u = f += 4) h = d[u], s = d[u + 1], i = d[u + 2], n = .2126 * h + .7152 * s + .0722 * i | 0, d[u] = l[n][0], d[u + 1] = l[n][1], d[u + 2] = l[n][2];
                        return a.putImageData(c, 0, 0), o.toDataURL()
                    }, n = function(t) {
                        var e, n, r, i, a, l, u, c, f, d, h, p, g, m, v, y, b, x, w, k;
                        for (p = t.match(/(((rgb|hsl)a?\(\d{1,3}%?,\s*\d{1,3}%?,\s*\d{1,3}%?(?:,\s*0?\.?\d+)?\)|\w+|#[0-9a-fA-F]{1,6})(\s+(0?\.\d+|\d{1,3}%))?)/g), k = [], c = 0, d = p.length; d > c; c++) e = p[c], n = e.match(/(?:((rgb|hsl)a?\(\d{1,3}%?,\s*\d{1,3}%?,\s*\d{1,3}%?(?:,\s*0?\.?\d+)?\)|\w+|#[0-9a-fA-F]{1,6})(\s+(?:0?\.\d+|\d{1,3}%))?)/), n && n.length >= 4 && (m = n[3], k.push({
                            color: s(n[1]),
                            pos: m ? 100 * o(m) : null
                        }));
                        if (k.length <= 1) throw new Error("You must define at least 2 color stops");
                        for (w = k[0], w.pos ? w.pos = Math.min(100, Math.max(0, w.pos)) : w.pos = 0, r = w.pos, w = k[k.length - 1], w.pos ? w.pos = Math.min(100, Math.max(0, w.pos)) : w.pos = 100, l = f = 1, v = k.length - 1; v >= 1 ? v >= f : f >= v; l = v >= 1 ? ++f : --f) w = k[l], w.pos && w.pos < r && (w.pos = r), w.pos > 100 && (w.pos = 100), r = w.pos;
                        for (l = 1; l < k.length - 1;) {
                            if (!k[l].pos) {
                                for (u = h = y = l + 1, b = k.length;
                                    (b >= y ? b >= h : h >= b) && !k[u].pos; u = b >= y ? ++h : --h);
                                for (x = k[l - 1].pos, a = k[u].pos, g = u - 1 + 1, i = Math.round((a - x) / g); u > l;) k[l].pos = k[l - 1].pos + i, l++
                            }
                            l++
                        }
                        return 0 !== k[0].pos && k.unshift({
                            color: k[0].color,
                            pos: 0
                        }), 100 !== k[k.length - 1].pos && k.push({
                            color: k[k.length - 1].color,
                            pos: 100
                        }), k
                    }, r = function(t) {
                        var e, n, r, i, o, a, s, l, u, c, f, d, h, p, g, m;
                        for (n = document.createElement("canvas"), r = n.getContext("2d"), a = r.createLinearGradient(0, 0, 256, 0), u = 0, f = t.length; f > u; u++) m = t[u], p = m.color[0], i = m.color[1], e = m.color[2], d = m.pos / 100, a.addColorStop(d, "rgb(" + p + ", " + i + ", " + e + ")");
                        for (r.fillStyle = a, r.fillRect(0, 0, 256, 1), l = r.getImageData(0, 0, 256, 1), h = l.data, o = [], s = c = 0, g = h.length; g >= c; s = c += 4) p = h[s], i = h[s + 1], e = h[s + 2], o.push([p, i, e]);
                        return o
                    }, e.prototype.defaults = function(e) {
                        return this.options = t.extend(this.options, e), this.$el
                    }, e.prototype.reset = function() {
                        return this.$el.attr("src", this.$el.data("original").src).removeClass("processed")
                    }, e.prototype.process = function() {
                        var t, e;
                        return t = n(this.options.gradientMap), e = i.call(this, this.$el.data("original"), t), this.$el.attr("src", e).addClass("processed")
                    }, e
                }(), t.fn.extend({
                    duotone: function() {
                        var n, r;
                        return r = arguments[0], n = 2 <= arguments.length ? c.call(arguments, 1) : [], document.createElement("canvas").getContext ? this.each(function() {
                            var i, o;
                            return t(this).is("img") ? (i = t.data(this, "duotone"), i || t.data(this, "duotone", i = new e(this, r)), "string" == typeof r ? i[r].apply(i, n) : void 0) : (o = t(this).find("img")).duotone.apply(o, [r].concat(c.call(n)))
                        }) : void 0
                    }
                })
            }(t)
        }).call(window)
    }).call(e, n(1))
}, function(t, e, n) {
    var r, i, o;
    (function(a) {
        (function() {
            ! function(a) {
                i = [n(1)], r = a, o = "function" == typeof r ? r.apply(e, i) : r, !(void 0 !== o && (t.exports = o))
            }(function(t) {
                var e, n, r, i, o, s, l = "Close",
                    u = "BeforeClose",
                    c = "AfterClose",
                    f = "BeforeAppend",
                    d = "MarkupParse",
                    h = "Open",
                    p = "Change",
                    g = "mfp",
                    m = "." + g,
                    v = "mfp-ready",
                    y = "mfp-removing",
                    b = "mfp-prevent-close",
                    x = function() {},
                    w = !!a,
                    k = t(window),
                    C = function(t, n) {
                        e.ev.on(g + t + m, n)
                    },
                    T = function(e, n, r, i) {
                        var o = document.createElement("div");
                        return o.className = "mfp-" + e, r && (o.innerHTML = r), i ? n && n.appendChild(o) : (o = t(o), n && o.appendTo(n)), o
                    },
                    S = function(n, r) {
                        e.ev.triggerHandler(g + n, r), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(r) ? r : [r]))
                    },
                    _ = function(n) {
                        return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
                    },
                    E = function() {
                        t.magnificPopup.instance || (e = new x, e.init(), t.magnificPopup.instance = e)
                    },
                    M = function() {
                        var t = document.createElement("p").style,
                            e = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== t.transition) return !0;
                        for (; e.length;)
                            if (e.pop() + "Transition" in t) return !0;
                        return !1
                    };
                x.prototype = {
                    constructor: x,
                    init: function() {
                        var n = navigator.appVersion;
                        e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = M(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = t(document), e.popupsCache = {}
                    },
                    open: function(n) {
                        var i;
                        if (n.isObj === !1) {
                            e.items = n.items.toArray(), e.index = 0;
                            var a, s = n.items;
                            for (i = 0; i < s.length; i++)
                                if (a = s[i], a.parsed && (a = a.el[0]), a === n.el[0]) {
                                    e.index = i;
                                    break
                                }
                        } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
                        if (e.isOpen) return void e.updateItemHTML();
                        e.types = [], o = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = r, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = T("bg").on("click" + m, function() {
                            e.close()
                        }), e.wrap = T("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                            e._checkIfClose(t.target) && e.close()
                        }), e.container = T("container", e.wrap)), e.contentContainer = T("content"), e.st.preloader && (e.preloader = T("preloader", e.container, e.st.tLoading));
                        var l = t.magnificPopup.modules;
                        for (i = 0; i < l.length; i++) {
                            var u = l[i];
                            u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
                        }
                        S("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (C(d, function(t, e, n, r) {
                            n.close_replaceWith = _(r.type)
                        }), o += " mfp-close-btn-in") : e.wrap.append(_())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                            overflow: e.st.overflowY,
                            overflowX: "hidden",
                            overflowY: e.st.overflowY
                        }) : e.wrap.css({
                            top: k.scrollTop(),
                            position: "absolute"
                        }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                            height: r.height(),
                            position: "absolute"
                        }), e.st.enableEscapeKey && r.on("keyup" + m, function(t) {
                            27 === t.keyCode && e.close()
                        }), k.on("resize" + m, function() {
                            e.updateSize()
                        }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                        var c = e.wH = k.height(),
                            f = {};
                        if (e.fixedContentPos && e._hasScrollBar(c)) {
                            var p = e._getScrollbarSize();
                            p && (f.marginRight = p)
                        }
                        e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                        var g = e.st.mainClass;
                        return e.isIE7 && (g += " mfp-ie7"), g && e._addClassToMFP(g), e.updateItemHTML(), S("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                            e.content ? (e._addClassToMFP(v), e._setFocus()) : e.bgOverlay.addClass(v), r.on("focusin" + m, e._onFocusIn)
                        }, 16), e.isOpen = !0, e.updateSize(c), S(h), n
                    },
                    close: function() {
                        e.isOpen && (S(u), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() {
                            e._close()
                        }, e.st.removalDelay)) : e._close())
                    },
                    _close: function() {
                        S(l);
                        var n = y + " " + v + " ";
                        if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                            var i = {
                                marginRight: ""
                            };
                            e.isIE7 ? t("body, html").css("overflow", "") : i.overflow = "", t("html").css(i)
                        }
                        r.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, S(c)
                    },
                    updateSize: function(t) {
                        if (e.isIOS) {
                            var n = document.documentElement.clientWidth / window.innerWidth,
                                r = window.innerHeight * n;
                            e.wrap.css("height", r), e.wH = r
                        } else e.wH = t || k.height();
                        e.fixedContentPos || e.wrap.css("height", e.wH), S("Resize")
                    },
                    updateItemHTML: function() {
                        var n = e.items[e.index];
                        e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
                        var r = n.type;
                        if (S("BeforeChange", [e.currItem ? e.currItem.type : "", r]), e.currItem = n, !e.currTemplate[r]) {
                            var o = e.st[r] ? e.st[r].markup : !1;
                            S("FirstMarkupParse", o), o ? e.currTemplate[r] = t(o) : e.currTemplate[r] = !0
                        }
                        i && i !== n.type && e.container.removeClass("mfp-" + i + "-holder");
                        var a = e["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, e.currTemplate[r]);
                        e.appendContent(a, r), n.preloaded = !0, S(p, n), i = n.type, e.container.prepend(e.contentContainer), S("AfterChange")
                    },
                    appendContent: function(t, n) {
                        e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(_()) : e.content = t : e.content = "", S(f), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
                    },
                    parseEl: function(n) {
                        var r, i = e.items[n];
                        if (i.tagName ? i = {
                                el: t(i)
                            } : (r = i.type, i = {
                                data: i,
                                src: i.src
                            }), i.el) {
                            for (var o = e.types, a = 0; a < o.length; a++)
                                if (i.el.hasClass("mfp-" + o[a])) {
                                    r = o[a];
                                    break
                                }
                            i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
                        }
                        return i.type = r || e.st.type || "inline", i.index = n, i.parsed = !0, e.items[n] = i, S("ElementParse", i), e.items[n]
                    },
                    addGroup: function(t, n) {
                        var r = function(r) {
                            r.mfpEl = this, e._openClick(r, t, n)
                        };
                        n || (n = {});
                        var i = "click.magnificPopup";
                        n.mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, r) : (n.items = t, t.off(i).on(i, r)))
                    },
                    _openClick: function(n, r, i) {
                        var o = void 0 !== i.midClick ? i.midClick : t.magnificPopup.defaults.midClick;
                        if (o || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                            var a = void 0 !== i.disableOn ? i.disableOn : t.magnificPopup.defaults.disableOn;
                            if (a)
                                if (t.isFunction(a)) {
                                    if (!a.call(e)) return !0
                                } else if (k.width() < a) return !0;
                            n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), i.el = t(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), e.open(i)
                        }
                    },
                    updateStatus: function(t, r) {
                        if (e.preloader) {
                            n !== t && e.container.removeClass("mfp-s-" + n), r || "loading" !== t || (r = e.st.tLoading);
                            var i = {
                                status: t,
                                text: r
                            };
                            S("UpdateStatus", i), t = i.status, r = i.text, e.preloader.html(r), e.preloader.find("a").on("click", function(t) {
                                t.stopImmediatePropagation()
                            }), e.container.addClass("mfp-s-" + t), n = t
                        }
                    },
                    _checkIfClose: function(n) {
                        if (!t(n).hasClass(b)) {
                            var r = e.st.closeOnContentClick,
                                i = e.st.closeOnBgClick;
                            if (r && i) return !0;
                            if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                            if (n === e.content[0] || t.contains(e.content[0], n)) {
                                if (r) return !0
                            } else if (i && t.contains(document, n)) return !0;
                            return !1
                        }
                    },
                    _addClassToMFP: function(t) {
                        e.bgOverlay.addClass(t), e.wrap.addClass(t)
                    },
                    _removeClassFromMFP: function(t) {
                        this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
                    },
                    _hasScrollBar: function(t) {
                        return (e.isIE7 ? r.height() : document.body.scrollHeight) > (t || k.height())
                    },
                    _setFocus: function() {
                        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
                    },
                    _onFocusIn: function(n) {
                        return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
                    },
                    _parseMarkup: function(e, n, r) {
                        var i;
                        r.data && (n = t.extend(r.data, n)), S(d, [e, n, r]), t.each(n, function(n, r) {
                            if (void 0 === r || r === !1) return !0;
                            if (i = n.split("_"), i.length > 1) {
                                var o = e.find(m + "-" + i[0]);
                                if (o.length > 0) {
                                    var a = i[1];
                                    "replaceWith" === a ? o[0] !== r[0] && o.replaceWith(r) : "img" === a ? o.is("img") ? o.attr("src", r) : o.replaceWith(t("<img>").attr("src", r).attr("class", o.attr("class"))) : o.attr(i[1], r)
                                }
                            } else e.find(m + "-" + n).html(r)
                        })
                    },
                    _getScrollbarSize: function() {
                        if (void 0 === e.scrollbarSize) {
                            var t = document.createElement("div");
                            t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                        }
                        return e.scrollbarSize
                    }
                }, t.magnificPopup = {
                    instance: null,
                    proto: x.prototype,
                    modules: [],
                    open: function(e, n) {
                        return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = n || 0, this.instance.open(e)
                    },
                    close: function() {
                        return t.magnificPopup.instance && t.magnificPopup.instance.close()
                    },
                    registerModule: function(e, n) {
                        n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
                    },
                    defaults: {
                        disableOn: 0,
                        key: null,
                        midClick: !1,
                        mainClass: "",
                        preloader: !0,
                        focus: "",
                        closeOnContentClick: !1,
                        closeOnBgClick: !0,
                        closeBtnInside: !0,
                        showCloseBtn: !0,
                        enableEscapeKey: !0,
                        modal: !1,
                        alignTop: !1,
                        removalDelay: 0,
                        prependTo: null,
                        fixedContentPos: "auto",
                        fixedBgPos: "auto",
                        overflowY: "auto",
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                        tClose: "Close (Esc)",
                        tLoading: "Loading...",
                        autoFocusLast: !0
                    }
                }, t.fn.magnificPopup = function(n) {
                    E();
                    var r = t(this);
                    if ("string" == typeof n)
                        if ("open" === n) {
                            var i, o = w ? r.data("magnificPopup") : r[0].magnificPopup,
                                a = parseInt(arguments[1], 10) || 0;
                            o.items ? i = o.items[a] : (i = r, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), e._openClick({
                                mfpEl: i
                            }, r, o)
                        } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
                    else n = t.extend(!0, {}, n), w ? r.data("magnificPopup", n) : r[0].magnificPopup = n, e.addGroup(r, n);
                    return r
                };
                var A, O, j, N = "inline",
                    P = function() {
                        j && (O.after(j.addClass(A)).detach(), j = null)
                    };
                t.magnificPopup.registerModule(N, {
                    options: {
                        hiddenClass: "hide",
                        markup: "",
                        tNotFound: "Content not found"
                    },
                    proto: {
                        initInline: function() {
                            e.types.push(N), C(l + "." + N, function() {
                                P()
                            })
                        },
                        getInline: function(n, r) {
                            if (P(), n.src) {
                                var i = e.st.inline,
                                    o = t(n.src);
                                if (o.length) {
                                    var a = o[0].parentNode;
                                    a && a.tagName && (O || (A = i.hiddenClass, O = T(A), A = "mfp-" + A), j = o.after(O).detach().removeClass(A)), e.updateStatus("ready")
                                } else e.updateStatus("error", i.tNotFound), o = t("<div>");
                                return n.inlineElement = o, o
                            }
                            return e.updateStatus("ready"), e._parseMarkup(r, {}, n), r
                        }
                    }
                });
                var F, D = "ajax",
                    L = function() {
                        F && t(document.body).removeClass(F)
                    },
                    H = function() {
                        L(), e.req && e.req.abort()
                    };
                t.magnificPopup.registerModule(D, {
                    options: {
                        settings: null,
                        cursor: "mfp-ajax-cur",
                        tError: '<a href="%url%">The content</a> could not be loaded.'
                    },
                    proto: {
                        initAjax: function() {
                            e.types.push(D), F = e.st.ajax.cursor, C(l + "." + D, H), C("BeforeChange." + D, H)
                        },
                        getAjax: function(n) {
                            F && t(document.body).addClass(F), e.updateStatus("loading");
                            var r = t.extend({
                                url: n.src,
                                success: function(r, i, o) {
                                    var a = {
                                        data: r,
                                        xhr: o
                                    };
                                    S("ParseAjax", a), e.appendContent(t(a.data), D), n.finished = !0, L(), e._setFocus(), setTimeout(function() {
                                        e.wrap.addClass(v)
                                    }, 16), e.updateStatus("ready"), S("AjaxContentAdded")
                                },
                                error: function() {
                                    L(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                                }
                            }, e.st.ajax.settings);
                            return e.req = t.ajax(r), ""
                        }
                    }
                });
                var $, I = function(n) {
                    if (n.data && void 0 !== n.data.title) return n.data.title;
                    var r = e.st.image.titleSrc;
                    if (r) {
                        if (t.isFunction(r)) return r.call(e, n);
                        if (n.el) return n.el.attr(r) || ""
                    }
                    return ""
                };
                t.magnificPopup.registerModule("image", {
                    options: {
                        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                        cursor: "mfp-zoom-out-cur",
                        titleSrc: "title",
                        verticalFit: !0,
                        tError: '<a href="%url%">The image</a> could not be loaded.'
                    },
                    proto: {
                        initImage: function() {
                            var n = e.st.image,
                                r = ".image";
                            e.types.push("image"), C(h + r, function() {
                                "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                            }), C(l + r, function() {
                                n.cursor && t(document.body).removeClass(n.cursor), k.off("resize" + m)
                            }), C("Resize" + r, e.resizeImage), e.isLowIE && C("AfterChange", e.resizeImage)
                        },
                        resizeImage: function() {
                            var t = e.currItem;
                            if (t && t.img && e.st.image.verticalFit) {
                                var n = 0;
                                e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                            }
                        },
                        _onImageHasSize: function(t) {
                            t.img && (t.hasSize = !0, $ && clearInterval($), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                        },
                        findImageSize: function(t) {
                            var n = 0,
                                r = t.img[0],
                                i = function(o) {
                                    $ && clearInterval($), $ = setInterval(function() {
                                        return r.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval($), n++, void(3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                                    }, o)
                                };
                            i(1)
                        },
                        getImage: function(n, r) {
                            var i = 0,
                                o = function() {
                                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(o, 100) : a()))
                                },
                                a = function() {
                                    n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                                },
                                s = e.st.image,
                                l = r.find(".mfp-img");
                            if (l.length) {
                                var u = document.createElement("img");
                                u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = t(u).on("load.mfploader", o).on("error.mfploader", a), u.src = n.src, l.is("img") && (n.img = n.img.clone()), u = n.img[0], u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                            }
                            return e._parseMarkup(r, {
                                title: I(n),
                                img_replaceWith: n.img
                            }, n), e.resizeImage(), n.hasSize ? ($ && clearInterval($), n.loadError ? (r.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), e.updateStatus("ready")), r) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), e.findImageSize(n)), r)
                        }
                    }
                });
                var q, B = function() {
                    return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform), q
                };
                t.magnificPopup.registerModule("zoom", {
                    options: {
                        enabled: !1,
                        easing: "ease-in-out",
                        duration: 300,
                        opener: function(t) {
                            return t.is("img") ? t : t.find("img")
                        }
                    },
                    proto: {
                        initZoom: function() {
                            var t, n = e.st.zoom,
                                r = ".zoom";
                            if (n.enabled && e.supportsTransition) {
                                var i, o, a = n.duration,
                                    s = function(t) {
                                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                            r = "all " + n.duration / 1e3 + "s " + n.easing,
                                            i = {
                                                position: "fixed",
                                                zIndex: 9999,
                                                left: 0,
                                                top: 0,
                                                "-webkit-backface-visibility": "hidden"
                                            },
                                            o = "transition";
                                        return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = r, e.css(i), e
                                    },
                                    c = function() {
                                        e.content.css("visibility", "visible")
                                    };
                                C("BuildControls" + r, function() {
                                    if (e._allowZoom()) {
                                        if (clearTimeout(i), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void c();
                                        o = s(t), o.css(e._getOffset()), e.wrap.append(o), i = setTimeout(function() {
                                            o.css(e._getOffset(!0)), i = setTimeout(function() {
                                                c(), setTimeout(function() {
                                                    o.remove(), t = o = null, S("ZoomAnimationEnded")
                                                }, 16)
                                            }, a)
                                        }, 16)
                                    }
                                }), C(u + r, function() {
                                    if (e._allowZoom()) {
                                        if (clearTimeout(i), e.st.removalDelay = a, !t) {
                                            if (t = e._getItemToZoom(), !t) return;
                                            o = s(t)
                                        }
                                        o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() {
                                            o.css(e._getOffset())
                                        }, 16)
                                    }
                                }), C(l + r, function() {
                                    e._allowZoom() && (c(), o && o.remove(), t = null)
                                })
                            }
                        },
                        _allowZoom: function() {
                            return "image" === e.currItem.type
                        },
                        _getItemToZoom: function() {
                            return e.currItem.hasSize ? e.currItem.img : !1
                        },
                        _getOffset: function(n) {
                            var r;
                            r = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                            var i = r.offset(),
                                o = parseInt(r.css("padding-top"), 10),
                                a = parseInt(r.css("padding-bottom"), 10);
                            i.top -= t(window).scrollTop() - o;
                            var s = {
                                width: r.width(),
                                height: (w ? r.innerHeight() : r[0].offsetHeight) - a - o
                            };
                            return B() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
                        }
                    }
                });
                var z = "iframe",
                    R = "//about:blank",
                    W = function(t) {
                        if (e.currTemplate[z]) {
                            var n = e.currTemplate[z].find("iframe");
                            n.length && (t || (n[0].src = R), e.isIE8 && n.css("display", t ? "block" : "none"))
                        }
                    };
                t.magnificPopup.registerModule(z, {
                    options: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                        srcAction: "iframe_src",
                        patterns: {
                            youtube: {
                                index: "youtube.com",
                                id: "v=",
                                src: "//www.youtube.com/embed/%id%?autoplay=1"
                            },
                            vimeo: {
                                index: "vimeo.com/",
                                id: "/",
                                src: "//player.vimeo.com/video/%id%?autoplay=1"
                            },
                            gmaps: {
                                index: "//maps.google.",
                                src: "%id%&output=embed"
                            }
                        }
                    },
                    proto: {
                        initIframe: function() {
                            e.types.push(z), C("BeforeChange", function(t, e, n) {
                                e !== n && (e === z ? W() : n === z && W(!0))
                            }), C(l + "." + z, function() {
                                W()
                            })
                        },
                        getIframe: function(n, r) {
                            var i = n.src,
                                o = e.st.iframe;
                            t.each(o.patterns, function() {
                                return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                            });
                            var a = {};
                            return o.srcAction && (a[o.srcAction] = i), e._parseMarkup(r, a, n), e.updateStatus("ready"), r
                        }
                    }
                });
                var V = function(t) {
                        var n = e.items.length;
                        return t > n - 1 ? t - n : 0 > t ? n + t : t
                    },
                    X = function(t, e, n) {
                        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
                    };
                t.magnificPopup.registerModule("gallery", {
                    options: {
                        enabled: !1,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                        preload: [0, 2],
                        navigateByImgClick: !0,
                        arrows: !0,
                        tPrev: "Previous (Left arrow key)",
                        tNext: "Next (Right arrow key)",
                        tCounter: "%curr% of %total%"
                    },
                    proto: {
                        initGallery: function() {
                            var n = e.st.gallery,
                                i = ".mfp-gallery";
                            return e.direction = !0, n && n.enabled ? (o += " mfp-gallery", C(h + i, function() {
                                n.navigateByImgClick && e.wrap.on("click" + i, ".mfp-img", function() {
                                    return e.items.length > 1 ? (e.next(), !1) : void 0
                                }), r.on("keydown" + i, function(t) {
                                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                                })
                            }), C("UpdateStatus" + i, function(t, n) {
                                n.text && (n.text = X(n.text, e.currItem.index, e.items.length))
                            }), C(d + i, function(t, r, i, o) {
                                var a = e.items.length;
                                i.counter = a > 1 ? X(n.tCounter, o.index, a) : ""
                            }), C("BuildControls" + i, function() {
                                if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                                    var r = n.arrowMarkup,
                                        i = e.arrowLeft = t(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b),
                                        o = e.arrowRight = t(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b);
                                    i.click(function() {
                                        e.prev()
                                    }), o.click(function() {
                                        e.next()
                                    }), e.container.append(i.add(o))
                                }
                            }), C(p + i, function() {
                                e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                                    e.preloadNearbyImages(), e._preloadTimeout = null
                                }, 16)
                            }), void C(l + i, function() {
                                r.off(i), e.wrap.off("click" + i), e.arrowRight = e.arrowLeft = null
                            })) : !1
                        },
                        next: function() {
                            e.direction = !0, e.index = V(e.index + 1), e.updateItemHTML()
                        },
                        prev: function() {
                            e.direction = !1, e.index = V(e.index - 1), e.updateItemHTML()
                        },
                        goTo: function(t) {
                            e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                        },
                        preloadNearbyImages: function() {
                            var t, n = e.st.gallery.preload,
                                r = Math.min(n[0], e.items.length),
                                i = Math.min(n[1], e.items.length);
                            for (t = 1; t <= (e.direction ? i : r); t++) e._preloadItem(e.index + t);
                            for (t = 1; t <= (e.direction ? r : i); t++) e._preloadItem(e.index - t)
                        },
                        _preloadItem: function(n) {
                            if (n = V(n), !e.items[n].preloaded) {
                                var r = e.items[n];
                                r.parsed || (r = e.parseEl(n)), S("LazyLoad", r), "image" === r.type && (r.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                                    r.hasSize = !0
                                }).on("error.mfploader", function() {
                                    r.hasSize = !0, r.loadError = !0, S("LazyLoadError", r)
                                }).attr("src", r.src)), r.preloaded = !0
                            }
                        }
                    }
                });
                var G = "retina";
                t.magnificPopup.registerModule(G, {
                    options: {
                        replaceSrc: function(t) {
                            return t.src.replace(/\.\w+$/, function(t) {
                                return "@2x" + t
                            })
                        },
                        ratio: 1
                    },
                    proto: {
                        initRetina: function() {
                            if (window.devicePixelRatio > 1) {
                                var t = e.st.retina,
                                    n = t.ratio;
                                n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + G, function(t, e) {
                                    e.img.css({
                                        "max-width": e.img[0].naturalWidth / n,
                                        width: "100%"
                                    })
                                }), C("ElementParse." + G, function(e, r) {
                                    r.src = t.replaceSrc(r, n)
                                }))
                            }
                        }
                    }
                }), E()
            })
        }).call(window)
    }).call(e, n(1))
}, function(t, e) {
    (function() { /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
        ! function() {
            if (window.matchMedia && window.matchMedia("all").addListener) return !1;
            var t = window.matchMedia,
                e = t("only all").matches,
                n = !1,
                r = 0,
                i = [],
                o = function(e) {
                    clearTimeout(r), r = setTimeout(function() {
                        for (var e = 0, n = i.length; n > e; e++) {
                            var r = i[e].mql,
                                o = i[e].listeners || [],
                                a = t(r.media).matches;
                            if (a !== r.matches) {
                                r.matches = a;
                                for (var s = 0, l = o.length; l > s; s++) o[s].call(window, r)
                            }
                        }
                    }, 30)
                };
            window.matchMedia = function(r) {
                var a = t(r),
                    s = [],
                    l = 0;
                return a.addListener = function(t) {
                    e && (n || (n = !0, window.addEventListener("resize", o, !0)), 0 === l && (l = i.push({
                        mql: a,
                        listeners: s
                    })), s.push(t))
                }, a.removeListener = function(t) {
                    for (var e = 0, n = s.length; n > e; e++) s[e] === t && s.splice(e, 1)
                }, a
            }
        }()
    }).call(window)
}, function(t, e) {
    (function() { /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
        window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var t = window.styleMedia || window.media;
            if (!t) {
                var e = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    r = null;
                e.type = "text/css", e.id = "matchmediajs-test", n.parentNode.insertBefore(e, n), r = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                    matchMedium: function(t) {
                        var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                        return e.styleSheet ? e.styleSheet.cssText = n : e.textContent = n, "1px" === r.width
                    }
                }
            }
            return function(e) {
                return {
                    matches: t.matchMedium(e || "all"),
                    media: e || "all"
                }
            }
        }())
    }).call(window)
}, function(t, e) {
    (function() {
        "use strict";
        ! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
                var r = (new Date).getTime(),
                    i = Math.max(0, 16 - (r - t)),
                    o = window.setTimeout(function() {
                        e(r + i)
                    }, i);
                return t = r + i, o
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }()
    }).call(window)
}, function(t, e, n) {
    var r, i, r, o;
    (function() {
        t.exports = 0;
        ! function(n) {
            var o, a, s = "0.4.2",
                l = "hasOwnProperty",
                u = /[\.\/]/,
                c = /\s*,\s*/,
                f = "*",
                d = function(t, e) {
                    return t - e
                },
                h = {
                    n: {}
                },
                p = function() {
                    for (var t = 0, e = this.length; e > t; t++)
                        if ("undefined" != typeof this[t]) return this[t]
                },
                g = function() {
                    for (var t = this.length; --t;)
                        if ("undefined" != typeof this[t]) return this[t]
                },
                m = function(t, e) {
                    t = String(t);
                    var n, r = a,
                        i = Array.prototype.slice.call(arguments, 2),
                        s = m.listeners(t),
                        l = 0,
                        u = [],
                        c = {},
                        f = [],
                        h = o;
                    f.firstDefined = p, f.lastDefined = g, o = t, a = 0;
                    for (var v = 0, y = s.length; y > v; v++) "zIndex" in s[v] && (u.push(s[v].zIndex), s[v].zIndex < 0 && (c[s[v].zIndex] = s[v]));
                    for (u.sort(d); u[l] < 0;)
                        if (n = c[u[l++]], f.push(n.apply(e, i)), a) return a = r, f;
                    for (v = 0; y > v; v++)
                        if (n = s[v], "zIndex" in n)
                            if (n.zIndex == u[l]) {
                                if (f.push(n.apply(e, i)), a) break;
                                do
                                    if (l++, n = c[u[l]], n && f.push(n.apply(e, i)), a) break;
                                while (n)
                            } else c[n.zIndex] = n;
                    else if (f.push(n.apply(e, i)), a) break;
                    return a = r, o = h, f
                };
            m._events = h, m.listeners = function(t) {
                var e, n, r, i, o, a, s, l, c = t.split(u),
                    d = h,
                    p = [d],
                    g = [];
                for (i = 0, o = c.length; o > i; i++) {
                    for (l = [], a = 0, s = p.length; s > a; a++)
                        for (d = p[a].n, n = [d[c[i]], d[f]], r = 2; r--;) e = n[r], e && (l.push(e), g = g.concat(e.f || []));
                    p = l
                }
                return g
            }, m.on = function(t, e) {
                if (t = String(t), "function" != typeof e) return function() {};
                for (var n = t.split(c), r = 0, i = n.length; i > r; r++) ! function(t) {
                    for (var n, r = t.split(u), i = h, o = 0, a = r.length; a > o; o++) i = i.n, i = i.hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {
                        n: {}
                    });
                    for (i.f = i.f || [], o = 0, a = i.f.length; a > o; o++)
                        if (i.f[o] == e) {
                            n = !0;
                            break
                        }!n && i.f.push(e)
                }(n[r]);
                return function(t) {
                    +t == +t && (e.zIndex = +t)
                }
            }, m.f = function(t) {
                var e = [].slice.call(arguments, 1);
                return function() {
                    m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
                }
            }, m.stop = function() {
                a = 1
            }, m.nt = function(t) {
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(o) : o
            }, m.nts = function() {
                return o.split(u)
            }, m.off = m.unbind = function(t, e) {
                if (!t) return void(m._events = h = {
                    n: {}
                });
                var n = t.split(c);
                if (n.length > 1)
                    for (var r = 0, i = n.length; i > r; r++) m.off(n[r], e);
                else {
                    n = t.split(u);
                    var o, a, s, r, i, d, p, g = [h];
                    for (r = 0, i = n.length; i > r; r++)
                        for (d = 0; d < g.length; d += s.length - 2) {
                            if (s = [d, 1], o = g[d].n, n[r] != f) o[n[r]] && s.push(o[n[r]]);
                            else
                                for (a in o) o[l](a) && s.push(o[a]);
                            g.splice.apply(g, s)
                        }
                    for (r = 0, i = g.length; i > r; r++)
                        for (o = g[r]; o.n;) {
                            if (e) {
                                if (o.f) {
                                    for (d = 0, p = o.f.length; p > d; d++)
                                        if (o.f[d] == e) {
                                            o.f.splice(d, 1);
                                            break
                                        }!o.f.length && delete o.f
                                }
                                for (a in o.n)
                                    if (o.n[l](a) && o.n[a].f) {
                                        var v = o.n[a].f;
                                        for (d = 0, p = v.length; p > d; d++)
                                            if (v[d] == e) {
                                                v.splice(d, 1);
                                                break
                                            }!v.length && delete o.n[a].f
                                    }
                            } else {
                                delete o.f;
                                for (a in o.n) o.n[l](a) && o.n[a].f && delete o.n[a].f
                            }
                            o = o.n
                        }
                }
            }, m.once = function(t, e) {
                var n = function() {
                    return m.unbind(t, n), e.apply(this, arguments)
                };
                return m.on(t, n)
            }, m.version = s, m.toString = function() {
                return "You are running Eve " + s
            }, "undefined" != typeof t && t.exports ? t.exports = m : (r = [], !(i = function() {
                return m
            }.apply(e, r)))
        }(this),
        function(n, a) {
            r = [i], o = function(t) {
                return a(n, t)
            }.apply(e, r), !(void 0 !== o && (t.exports = o))
        }(window || this, function(t, e) {
            var n = function(e) {
                    var n = {},
                        r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                            setTimeout(t, 16)
                        },
                        i = Array.isArray || function(t) {
                            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                        },
                        o = 0,
                        a = "M" + (+new Date).toString(36),
                        s = function() {
                            return a + (o++).toString(36)
                        },
                        l = Date.now || function() {
                            return +new Date
                        },
                        u = function(t) {
                            var e = this;
                            if (null == t) return e.s;
                            var n = e.s - t;
                            e.b += e.dur * n, e.B += e.dur * n, e.s = t
                        },
                        c = function(t) {
                            var e = this;
                            return null == t ? e.spd : void(e.spd = t)
                        },
                        f = function(t) {
                            var e = this;
                            return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                        },
                        d = function() {
                            var t = this;
                            delete n[t.id], t.update(), e("mina.stop." + t.id, t)
                        },
                        h = function() {
                            var t = this;
                            t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                        },
                        p = function() {
                            var t = this;
                            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                        },
                        g = function() {
                            var t, e = this;
                            if (i(e.start)) {
                                t = [];
                                for (var n = 0, r = e.start.length; r > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                            } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                            e.set(t)
                        },
                        m = function() {
                            var t = 0;
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var o = n[i],
                                        a = o.get();
                                    t++, o.s = (a - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[i], o.s = 1, t--, function(t) {
                                        setTimeout(function() {
                                            e("mina.finish." + t.id, t)
                                        })
                                    }(o)), o.update()
                                }
                            t && r(m)
                        },
                        v = function(t, e, i, o, a, l, y) {
                            var b = {
                                id: s(),
                                start: t,
                                end: e,
                                b: i,
                                s: 0,
                                dur: o - i,
                                spd: 1,
                                get: a,
                                set: l,
                                easing: y || v.linear,
                                status: u,
                                speed: c,
                                duration: f,
                                stop: d,
                                pause: h,
                                resume: p,
                                update: g
                            };
                            n[b.id] = b;
                            var x, w = 0;
                            for (x in n)
                                if (n.hasOwnProperty(x) && (w++, 2 == w)) break;
                            return 1 == w && r(m), b
                        };
                    return v.time = l, v.getById = function(t) {
                        return n[t] || null
                    }, v.linear = function(t) {
                        return t
                    }, v.easeout = function(t) {
                        return Math.pow(t, 1.7)
                    }, v.easein = function(t) {
                        return Math.pow(t, .48)
                    }, v.easeinout = function(t) {
                        if (1 == t) return 1;
                        if (0 == t) return 0;
                        var e = .48 - t / 1.04,
                            n = Math.sqrt(.1734 + e * e),
                            r = n - e,
                            i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                            o = -n - e,
                            a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
                            s = i + a + .5;
                        return 3 * (1 - s) * s * s + s * s * s
                    }, v.backin = function(t) {
                        if (1 == t) return 1;
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    }, v.backout = function(t) {
                        if (0 == t) return 0;
                        t -= 1;
                        var e = 1.70158;
                        return t * t * ((e + 1) * t + e) + 1
                    }, v.elastic = function(t) {
                        return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                    }, v.bounce = function(t) {
                        var e, n = 7.5625,
                            r = 2.75;
                        return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
                    }, t.mina = v, v
                }("undefined" == typeof e ? function() {} : e),
                r = function(t) {
                    function n(t, e) {
                        if (t) {
                            if (t.nodeType) return k(t);
                            if (i(t, "array") && n.set) return n.set.apply(n, t);
                            if (t instanceof y) return t;
                            if (null == e) return t = T.doc.querySelector(String(t)), k(t)
                        }
                        return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new w(t, e)
                    }

                    function r(t, e) {
                        if (e) {
                            if ("#text" == t && (t = T.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = T.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = r(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(V, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(X, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                            if (1 == t.nodeType) {
                                for (var n in e)
                                    if (e[S](n)) {
                                        var i = _(e[n]);
                                        i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(V, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(X, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
                                    }
                            } else "text" in e && (t.nodeValue = e.text)
                        } else t = T.doc.createElementNS(X, t);
                        return t
                    }

                    function i(t, e) {
                        return e = _.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || D.call(t).slice(8, -1).toLowerCase() == e
                    }

                    function o(t) {
                        if ("function" == typeof t || Object(t) !== t) return t;
                        var e = new t.constructor;
                        for (var n in t) t[S](n) && (e[n] = o(t[n]));
                        return e
                    }

                    function a(t, e) {
                        for (var n = 0, r = t.length; r > n; n++)
                            if (t[n] === e) return t.push(t.splice(n, 1)[0])
                    }

                    function s(t, e, n) {
                        function r() {
                            var i = Array.prototype.slice.call(arguments, 0),
                                o = i.join("␀"),
                                s = r.cache = r.cache || {},
                                l = r.count = r.count || [];
                            return s[S](o) ? (a(l, o), n ? n(s[o]) : s[o]) : (l.length >= 1e3 && delete s[l.shift()], l.push(o), s[o] = t.apply(e, i), n ? n(s[o]) : s[o])
                        }
                        return r
                    }

                    function l(t, e, n, r, i, o) {
                        if (null == i) {
                            var a = t - n,
                                s = e - r;
                            return a || s ? (180 + 180 * A.atan2(-s, -a) / P + 360) % 360 : 0
                        }
                        return l(t, e, i, o) - l(n, r, i, o)
                    }

                    function u(t) {
                        return t % 360 * P / 180
                    }

                    function c(t) {
                        return 180 * t / P % 360
                    }

                    function f(t) {
                        var e = [];
                        return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, r) {
                            return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), "skewX" == n ? e.push(["m", 1, 0, A.tan(u(r[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, A.tan(u(r[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(r)), t
                        }), e
                    }

                    function d(t, e) {
                        var r = tt(t),
                            i = new n.Matrix;
                        if (r)
                            for (var o = 0, a = r.length; a > o; o++) {
                                var s, l, u, c, f, d = r[o],
                                    h = d.length,
                                    p = _(d[0]).toLowerCase(),
                                    g = d[0] != p,
                                    m = g ? i.invert() : 0;
                                "t" == p && 2 == h ? i.translate(d[1], 0) : "t" == p && 3 == h ? g ? (s = m.x(0, 0), l = m.y(0, 0), u = m.x(d[1], d[2]), c = m.y(d[1], d[2]), i.translate(u - s, c - l)) : i.translate(d[1], d[2]) : "r" == p ? 2 == h ? (f = f || e, i.rotate(d[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == h && (g ? (u = m.x(d[2], d[3]), c = m.y(d[2], d[3]), i.rotate(d[1], u, c)) : i.rotate(d[1], d[2], d[3])) : "s" == p ? 2 == h || 3 == h ? (f = f || e, i.scale(d[1], d[h - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == h ? g ? (u = m.x(d[2], d[3]), c = m.y(d[2], d[3]), i.scale(d[1], d[1], u, c)) : i.scale(d[1], d[1], d[2], d[3]) : 5 == h && (g ? (u = m.x(d[3], d[4]), c = m.y(d[3], d[4]), i.scale(d[1], d[2], u, c)) : i.scale(d[1], d[2], d[3], d[4])) : "m" == p && 7 == h && i.add(d[1], d[2], d[3], d[4], d[5], d[6])
                            }
                        return i
                    }

                    function h(t) {
                        var e = t.node.ownerSVGElement && k(t.node.ownerSVGElement) || t.node.parentNode && k(t.node.parentNode) || n.select("svg") || n(0, 0),
                            r = e.select("defs"),
                            i = null == r ? !1 : r.node;
                        return i || (i = x("defs", e.node).node), i
                    }

                    function p(t) {
                        return t.node.ownerSVGElement && k(t.node.ownerSVGElement) || n.select("svg")
                    }

                    function m(t, e, n) {
                        function i(t) {
                            if (null == t) return F;
                            if (t == +t) return t;
                            r(u, {
                                width: t
                            });
                            try {
                                return u.getBBox().width
                            } catch (e) {
                                return 0
                            }
                        }

                        function o(t) {
                            if (null == t) return F;
                            if (t == +t) return t;
                            r(u, {
                                height: t
                            });
                            try {
                                return u.getBBox().height
                            } catch (e) {
                                return 0
                            }
                        }

                        function a(r, i) {
                            null == e ? l[r] = i(t.attr(r) || 0) : r == e && (l = i(null == n ? t.attr(r) || 0 : n))
                        }
                        var s = p(t).node,
                            l = {},
                            u = s.querySelector(".svg---mgr");
                        switch (u || (u = r("rect"), r(u, {
                            x: -9e9,
                            y: -9e9,
                            width: 10,
                            height: 10,
                            "class": "svg---mgr",
                            fill: "none"
                        }), s.appendChild(u)), t.type) {
                            case "rect":
                                a("rx", i), a("ry", o);
                            case "image":
                                a("width", i), a("height", o);
                            case "text":
                                a("x", i), a("y", o);
                                break;
                            case "circle":
                                a("cx", i), a("cy", o), a("r", i);
                                break;
                            case "ellipse":
                                a("cx", i), a("cy", o), a("rx", i), a("ry", o);
                                break;
                            case "line":
                                a("x1", i), a("x2", i), a("y1", o), a("y2", o);
                                break;
                            case "marker":
                                a("refX", i), a("markerWidth", i), a("refY", o), a("markerHeight", o);
                                break;
                            case "radialGradient":
                                a("fx", i), a("fy", o);
                                break;
                            case "tspan":
                                a("dx", i), a("dy", o);
                                break;
                            default:
                                a(e, i)
                        }
                        return s.removeChild(u), l
                    }

                    function v(t) {
                        i(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                        for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                        for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                            r.appendChild(t.node)
                        }) : r.appendChild(t[e].node);
                        var o = r.childNodes;
                        for (e = 0; e < o.length; e++) this[n++] = k(o[e]);
                        return this
                    }

                    function y(t) {
                        if (t.snap in G) return G[t.snap];
                        var e;
                        try {
                            e = t.ownerSVGElement
                        } catch (n) {}
                        this.node = t, e && (this.paper = new w(e)), this.type = t.tagName || t.nodeName;
                        var r = this.id = W(this);
                        if (this.anims = {}, this._ = {
                                transform: []
                            }, t.snap = r, G[r] = this, "g" == this.type && (this.add = v), this.type in {
                                g: 1,
                                mask: 1,
                                pattern: 1,
                                symbol: 1
                            })
                            for (var i in w.prototype) w.prototype[S](i) && (this[i] = w.prototype[i])
                    }

                    function b(t) {
                        this.node = t
                    }

                    function x(t, e) {
                        var n = r(t);
                        e.appendChild(n);
                        var i = k(n);
                        return i
                    }

                    function w(t, e) {
                        var n, i, o, a = w.prototype;
                        if (t && "svg" == t.tagName) {
                            if (t.snap in G) return G[t.snap];
                            var s = t.ownerDocument;
                            n = new y(t), i = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], i || (i = r("desc"), i.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(i)), o || (o = r("defs"), n.node.appendChild(o)), n.defs = o;
                            for (var l in a) a[S](l) && (n[l] = a[l]);
                            n.paper = n.root = n
                        } else n = x("svg", T.doc.body), r(n.node, {
                            height: e,
                            version: 1.1,
                            width: t,
                            xmlns: X
                        });
                        return n
                    }

                    function k(t) {
                        return t ? t instanceof y || t instanceof b ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new w(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new w(t.contentDocument.getElementsByTagName("svg")[0]) : new y(t) : t
                    }

                    function C(t, e) {
                        for (var n = 0, r = t.length; r > n; n++) {
                            var i = {
                                    type: t[n].type,
                                    attr: t[n].attr()
                                },
                                o = t[n].children();
                            e.push(i), o.length && C(o, i.childNodes = [])
                        }
                    }
                    n.version = "0.4.0", n.toString = function() {
                        return "Snap v" + this.version
                    }, n._ = {};
                    var T = {
                        win: t.window,
                        doc: t.window.document
                    };
                    n._.glob = T;
                    var S = "hasOwnProperty",
                        _ = String,
                        E = parseFloat,
                        M = parseInt,
                        A = Math,
                        O = A.max,
                        j = A.min,
                        N = A.abs,
                        P = (A.pow, A.PI),
                        F = (A.round, ""),
                        D = Object.prototype.toString,
                        L = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                        H = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                        $ = {
                            hs: 1,
                            rg: 1
                        },
                        I = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        q = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        B = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
                        z = 0,
                        R = "S" + (+new Date).toString(36),
                        W = function(t) {
                            return (t && t.type ? t.type : F) + R + (z++).toString(36)
                        },
                        V = "http://www.w3.org/1999/xlink",
                        X = "http://www.w3.org/2000/svg",
                        G = {};
                    n.url = function(t) {
                        return "url('#" + t + "')"
                    };
                    n._.$ = r, n._.id = W, n.format = function() {
                        var t = /\{([^\}]+)\}/g,
                            e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                            n = function(t, n, r) {
                                var i = r;
                                return n.replace(e, function(t, e, n, r, o) {
                                    e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                                }), i = (null == i || i == r ? t : i) + ""
                            };
                        return function(e, r) {
                            return _(e).replace(t, function(t, e) {
                                return n(t, e, r)
                            })
                        }
                    }(), n._.clone = o, n._.cacher = s, n.rad = u, n.deg = c, n.sin = function(t) {
                        return A.sin(n.rad(t))
                    }, n.tan = function(t) {
                        return A.tan(n.rad(t))
                    }, n.cos = function(t) {
                        return A.cos(n.rad(t))
                    }, n.asin = function(t) {
                        return n.deg(A.asin(t))
                    }, n.acos = function(t) {
                        return n.deg(A.acos(t))
                    }, n.atan = function(t) {
                        return n.deg(A.atan(t))
                    }, n.atan2 = function(t) {
                        return n.deg(A.atan2(t))
                    }, n.angle = l, n.len = function(t, e, r, i) {
                        return Math.sqrt(n.len2(t, e, r, i))
                    }, n.len2 = function(t, e, n, r) {
                        return (t - n) * (t - n) + (e - r) * (e - r)
                    }, n.closestPoint = function(t, e, n) {
                        function r(t) {
                            var r = t.x - e,
                                i = t.y - n;
                            return r * r + i * i
                        }
                        for (var i, o, a, s, l = t.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, f = 1 / 0, d = 0; u >= d; d += c)(s = r(a = l.getPointAtLength(d))) < f && (i = a, o = d, f = s);
                        for (c *= .5; c > .5;) {
                            var h, p, g, m, v, y;
                            (g = o - c) >= 0 && (v = r(h = l.getPointAtLength(g))) < f ? (i = h, o = g, f = v) : (m = o + c) <= u && (y = r(p = l.getPointAtLength(m))) < f ? (i = p, o = m, f = y) : c *= .5
                        }
                        return i = {
                            x: i.x,
                            y: i.y,
                            length: o,
                            distance: Math.sqrt(f)
                        }
                    }, n.is = i, n.snapTo = function(t, e, n) {
                        if (n = i(n, "finite") ? n : 10, i(t, "array")) {
                            for (var r = t.length; r--;)
                                if (N(t[r] - e) <= n) return t[r]
                        } else {
                            t = +t;
                            var o = e % t;
                            if (n > o) return e - o;
                            if (o > t - n) return e - o + t
                        }
                        return e
                    }, n.getRGB = s(function(t) {
                        if (!t || (t = _(t)).indexOf("-") + 1) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: K
                        };
                        if ("none" == t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            toString: K
                        };
                        if (!($[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Y(t)), !t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: K
                        };
                        var e, r, o, a, s, l, u = t.match(L);
                        return u ? (u[2] && (o = M(u[2].substring(5), 16), r = M(u[2].substring(3, 5), 16), e = M(u[2].substring(1, 3), 16)), u[3] && (o = M((s = u[3].charAt(3)) + s, 16), r = M((s = u[3].charAt(2)) + s, 16), e = M((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4].split(H), e = E(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = E(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), o = E(l[2]), "%" == l[2].slice(-1) && (o *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5].split(H), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), r = E(l[1]), "%" == l[1].slice(-1) && (r /= 100), o = E(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), n.hsb2rgb(e, r, o, a)) : u[6] ? (l = u[6].split(H), e = E(l[0]), "%" == l[0].slice(-1) && (e /= 100), r = E(l[1]), "%" == l[1].slice(-1) && (r /= 100), o = E(l[2]), "%" == l[2].slice(-1) && (o /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = E(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), n.hsl2rgb(e, r, o, a)) : (e = j(A.round(e), 255), r = j(A.round(r), 255), o = j(A.round(o), 255), a = j(O(a, 0), 1), u = {
                            r: e,
                            g: r,
                            b: o,
                            toString: K
                        }, u.hex = "#" + (16777216 | o | r << 8 | e << 16).toString(16).slice(1), u.opacity = i(a, "finite") ? a : 1, u)) : {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: K
                        }
                    }, n), n.hsb = s(function(t, e, r) {
                        return n.hsb2rgb(t, e, r).hex
                    }), n.hsl = s(function(t, e, r) {
                        return n.hsl2rgb(t, e, r).hex
                    }), n.rgb = s(function(t, e, n, r) {
                        if (i(r, "finite")) {
                            var o = A.round;
                            return "rgba(" + [o(t), o(e), o(n), +r.toFixed(2)] + ")"
                        }
                        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                    });
                    var Y = function(t) {
                            var e = T.doc.getElementsByTagName("head")[0] || T.doc.getElementsByTagName("svg")[0],
                                n = "rgb(255, 0, 0)";
                            return (Y = s(function(t) {
                                if ("red" == t.toLowerCase()) return n;
                                e.style.color = n, e.style.color = t;
                                var r = T.doc.defaultView.getComputedStyle(e, F).getPropertyValue("color");
                                return r == n ? null : r
                            }))(t)
                        },
                        U = function() {
                            return "hsb(" + [this.h, this.s, this.b] + ")"
                        },
                        Z = function() {
                            return "hsl(" + [this.h, this.s, this.l] + ")"
                        },
                        K = function() {
                            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                        },
                        J = function(t, e, r) {
                            if (null == e && i(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && i(t, string)) {
                                var o = n.getRGB(t);
                                t = o.r, e = o.g, r = o.b
                            }
                            return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
                        },
                        Q = function(t, e, r, o) {
                            t = A.round(255 * t), e = A.round(255 * e), r = A.round(255 * r);
                            var a = {
                                r: t,
                                g: e,
                                b: r,
                                opacity: i(o, "finite") ? o : 1,
                                hex: n.rgb(t, e, r),
                                toString: K
                            };
                            return i(o, "finite") && (a.opacity = o), a
                        };
                    n.color = function(t) {
                        var e;
                        return i(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : i(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (i(t, "string") && (t = n.getRGB(t)), i(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
                            hex: "none"
                        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = K, t
                    }, n.hsb2rgb = function(t, e, n, r) {
                        i(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), t *= 360;
                        var o, a, s, l, u;
                        return t = t % 360 / 60, u = n * e, l = u * (1 - N(t % 2 - 1)), o = a = s = n - u, t = ~~t, o += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], Q(o, a, s, r)
                    }, n.hsl2rgb = function(t, e, n, r) {
                        i(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
                        var o, a, s, l, u;
                        return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), l = u * (1 - N(t % 2 - 1)), o = a = s = n - u / 2, t = ~~t, o += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], Q(o, a, s, r)
                    }, n.rgb2hsb = function(t, e, n) {
                        n = J(t, e, n), t = n[0], e = n[1], n = n[2];
                        var r, i, o, a;
                        return o = O(t, e, n), a = o - j(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                            h: r,
                            s: i,
                            b: o,
                            toString: U
                        }
                    }, n.rgb2hsl = function(t, e, n) {
                        n = J(t, e, n), t = n[0], e = n[1], n = n[2];
                        var r, i, o, a, s, l;
                        return a = O(t, e, n), s = j(t, e, n), l = a - s, r = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o), {
                            h: r,
                            s: i,
                            l: o,
                            toString: Z
                        }
                    }, n.parsePathString = function(t) {
                        if (!t) return null;
                        var e = n.path(t);
                        if (e.arr) return n.path.clone(e.arr);
                        var r = {
                                a: 7,
                                c: 6,
                                o: 2,
                                h: 1,
                                l: 2,
                                m: 2,
                                r: 4,
                                q: 4,
                                s: 4,
                                t: 2,
                                v: 1,
                                u: 3,
                                z: 0
                            },
                            o = [];
                        return i(t, "array") && i(t[0], "array") && (o = n.path.clone(t)), o.length || _(t).replace(I, function(t, e, n) {
                            var i = [],
                                a = e.toLowerCase();
                            if (n.replace(B, function(t, e) {
                                    e && i.push(+e)
                                }), "m" == a && i.length > 2 && (o.push([e].concat(i.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == i.length && o.push([e, i[0]]), "r" == a) o.push([e].concat(i));
                            else
                                for (; i.length >= r[a] && (o.push([e].concat(i.splice(0, r[a]))), r[a]););
                        }), o.toString = n.path.toString, e.arr = n.path.clone(o), o
                    };
                    var tt = n.parseTransformString = function(t) {
                        if (!t) return null;
                        var e = [];
                        return i(t, "array") && i(t[0], "array") && (e = n.path.clone(t)), e.length || _(t).replace(q, function(t, n, r) {
                            var i = [];
                            n.toLowerCase();
                            r.replace(B, function(t, e) {
                                e && i.push(+e)
                            }), e.push([n].concat(i))
                        }), e.toString = n.path.toString, e
                    };
                    n._.svgTransform2string = f, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = d, n._unit2px = m;
                    T.doc.contains || T.doc.compareDocumentPosition ? function(t, e) {
                        var n = 9 == t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                        return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function(t, e) {
                        if (e)
                            for (; e;)
                                if (e = e.parentNode, e == t) return !0;
                        return !1
                    };
                    n._.getSomeDefs = h, n._.getSomeSVG = p, n.select = function(t) {
                        return t = _(t).replace(/([^\\]):/g, "$1\\:"), k(T.doc.querySelector(t))
                    }, n.selectAll = function(t) {
                        for (var e = T.doc.querySelectorAll(t), r = (n.set || Array)(), i = 0; i < e.length; i++) r.push(k(e[i]));
                        return r
                    }, setInterval(function() {
                        for (var t in G)
                            if (G[S](t)) {
                                var e = G[t],
                                    n = e.node;
                                ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete G[t]
                            }
                    }, 1e4), y.prototype.attr = function(t, n) {
                        var r = this,
                            o = r.node;
                        if (!t) {
                            if (1 != o.nodeType) return {
                                text: o.nodeValue
                            };
                            for (var a = o.attributes, s = {}, l = 0, u = a.length; u > l; l++) s[a[l].nodeName] = a[l].nodeValue;
                            return s
                        }
                        if (i(t, "string")) {
                            if (!(arguments.length > 1)) return e("snap.util.getattr." + t, r).firstDefined();
                            var c = {};
                            c[t] = n, t = c
                        }
                        for (var f in t) t[S](f) && e("snap.util.attr." + f, r, t[f]);
                        return r
                    }, n.parse = function(t) {
                        var e = T.doc.createDocumentFragment(),
                            n = !0,
                            r = T.doc.createElement("div");
                        if (t = _(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])
                            if (n) e = t;
                            else
                                for (; t.firstChild;) e.appendChild(t.firstChild);
                        return new b(e)
                    }, n.fragment = function() {
                        for (var t = Array.prototype.slice.call(arguments, 0), e = T.doc.createDocumentFragment(), r = 0, i = t.length; i > r; r++) {
                            var o = t[r];
                            o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(n.parse(o).node)
                        }
                        return new b(e)
                    }, n._.make = x, n._.wrap = k, w.prototype.el = function(t, e) {
                        var n = x(t, this.node);
                        return e && n.attr(e), n
                    }, y.prototype.children = function() {
                        for (var t = [], e = this.node.childNodes, r = 0, i = e.length; i > r; r++) t[r] = n(e[r]);
                        return t
                    }, y.prototype.toJSON = function() {
                        var t = [];
                        return C([this], t), t[0]
                    }, e.on("snap.util.getattr", function() {
                        var t = e.nt();
                        t = t.substring(t.lastIndexOf(".") + 1);
                        var n = t.replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                        return et[S](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : r(this.node, t)
                    });
                    var et = {
                        "alignment-baseline": 0,
                        "baseline-shift": 0,
                        clip: 0,
                        "clip-path": 0,
                        "clip-rule": 0,
                        color: 0,
                        "color-interpolation": 0,
                        "color-interpolation-filters": 0,
                        "color-profile": 0,
                        "color-rendering": 0,
                        cursor: 0,
                        direction: 0,
                        display: 0,
                        "dominant-baseline": 0,
                        "enable-background": 0,
                        fill: 0,
                        "fill-opacity": 0,
                        "fill-rule": 0,
                        filter: 0,
                        "flood-color": 0,
                        "flood-opacity": 0,
                        font: 0,
                        "font-family": 0,
                        "font-size": 0,
                        "font-size-adjust": 0,
                        "font-stretch": 0,
                        "font-style": 0,
                        "font-variant": 0,
                        "font-weight": 0,
                        "glyph-orientation-horizontal": 0,
                        "glyph-orientation-vertical": 0,
                        "image-rendering": 0,
                        kerning: 0,
                        "letter-spacing": 0,
                        "lighting-color": 0,
                        marker: 0,
                        "marker-end": 0,
                        "marker-mid": 0,
                        "marker-start": 0,
                        mask: 0,
                        opacity: 0,
                        overflow: 0,
                        "pointer-events": 0,
                        "shape-rendering": 0,
                        "stop-color": 0,
                        "stop-opacity": 0,
                        stroke: 0,
                        "stroke-dasharray": 0,
                        "stroke-dashoffset": 0,
                        "stroke-linecap": 0,
                        "stroke-linejoin": 0,
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 0,
                        "stroke-width": 0,
                        "text-anchor": 0,
                        "text-decoration": 0,
                        "text-rendering": 0,
                        "unicode-bidi": 0,
                        visibility: 0,
                        "word-spacing": 0,
                        "writing-mode": 0
                    };
                    e.on("snap.util.attr", function(t) {
                            var n = e.nt(),
                                i = {};
                            n = n.substring(n.lastIndexOf(".") + 1), i[n] = t;
                            var o = n.replace(/-(\w)/gi, function(t, e) {
                                    return e.toUpperCase()
                                }),
                                a = n.replace(/[A-Z]/g, function(t) {
                                    return "-" + t.toLowerCase()
                                });
                            et[S](a) ? this.node.style[o] = null == t ? F : t : r(this.node, i)
                        }),
                        function(t) {}(w.prototype), n.ajax = function(t, n, r, o) {
                            var a = new XMLHttpRequest,
                                s = W();
                            if (a) {
                                if (i(n, "function")) o = r, r = n, n = null;
                                else if (i(n, "object")) {
                                    var l = [];
                                    for (var u in n) n.hasOwnProperty(u) && l.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                                    n = l.join("&")
                                }
                                return a.open(n ? "POST" : "GET", t, !0), n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function() {
                                    4 == a.readyState && e("snap.ajax." + s + "." + a.status, o, a)
                                }, 4 == a.readyState ? a : (a.send(n), a)
                            }
                        }, n.load = function(t, e, r) {
                            n.ajax(t, function(t) {
                                var i = n.parse(t.responseText);
                                r ? e.call(r, i) : e(i)
                            })
                        };
                    var nt = function(t) {
                        var e = t.getBoundingClientRect(),
                            n = t.ownerDocument,
                            r = n.body,
                            i = n.documentElement,
                            o = i.clientTop || r.clientTop || 0,
                            a = i.clientLeft || r.clientLeft || 0,
                            s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                            l = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
                        return {
                            y: s,
                            x: l
                        }
                    };
                    return n.getElementByPoint = function(t, e) {
                        var n = this,
                            r = (n.canvas, T.doc.elementFromPoint(t, e));
                        if (T.win.opera && "svg" == r.tagName) {
                            var i = nt(r),
                                o = r.createSVGRect();
                            o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
                            var a = r.getIntersectionList(o, null);
                            a.length && (r = a[a.length - 1])
                        }
                        return r ? k(r) : null
                    }, n.plugin = function(t) {
                        t(n, y, w, T, b)
                    }, T.win.Snap = n, n
                }(t || this);
            return r.plugin(function(r, i, o, a, s) {
                function l(t, e) {
                    if (null == e) {
                        var n = !0;
                        if (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"), !e) return new r.Matrix;
                        e = r._.svgTransform2string(e)
                    } else e = r._.rgTransform.test(e) ? p(e).replace(/\.{3}|\u2026/g, t._.transform || "") : r._.svgTransform2string(e), h(e, "array") && (e = r.path ? r.path.toString.call(e) : p(e)), t._.transform = e;
                    var i = r._.transform2matrix(e, t.getBBox(1));
                    return n ? i : void(t.matrix = i)
                }

                function u(t) {
                    function e(t, e) {
                        var n = m(t.node, e);
                        n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (s[n] = (s[n] || []).concat(function(n) {
                            var r = {};
                            r[e] = URL(n), m(t.node, r)
                        })))
                    }

                    function n(t) {
                        var e = m(t.node, "xlink:href");
                        e && "#" == e.charAt() && (e = e.substring(1), e && (s[e] = (s[e] || []).concat(function(e) {
                            t.attr("xlink:href", "#" + e)
                        })))
                    }
                    for (var r, i = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], s = {}, l = 0, u = i.length; u > l; l++) {
                        r = i[l], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                        var c = m(r.node, "id");
                        c && (m(r.node, {
                            id: r.id
                        }), a.push({
                            old: c,
                            id: r.id
                        }))
                    }
                    for (l = 0, u = a.length; u > l; l++) {
                        var f = s[a[l].old];
                        if (f)
                            for (var d = 0, h = f.length; h > d; d++) f[d](a[l].id)
                    }
                }

                function c(t, e, n) {
                    return function(r) {
                        var i = r.slice(t, e);
                        return 1 == i.length && (i = i[0]), n ? n(i) : i
                    }
                }

                function f(t) {
                    return function() {
                        var e = t ? "<" + this.type : "",
                            n = this.node.attributes,
                            r = this.node.childNodes;
                        if (t)
                            for (var i = 0, o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                        if (r.length) {
                            for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += x(r[i]).toString());
                            t && (e += "</" + this.type + ">")
                        } else t && (e += "/>");
                        return e
                    }
                }
                var d = i.prototype,
                    h = r.is,
                    p = String,
                    g = r._unit2px,
                    m = r._.$,
                    v = r._.make,
                    y = r._.getSomeDefs,
                    b = "hasOwnProperty",
                    x = r._.wrap;
                d.getBBox = function(t) {
                    if (!r.Matrix || !r.path) return this.node.getBBox();
                    var e = this,
                        n = new r.Matrix;
                    if (e.removed) return r._.box();
                    for (;
                        "use" == e.type;)
                        if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                        else {
                            var i = e.attr("xlink:href");
                            e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                        }
                    var o = e._,
                        a = r.path.get[e.type] || r.path.get.deflt;
                    try {
                        return t ? (o.bboxwt = a ? r.path.getBBox(e.realPath = a(e)) : r._.box(e.node.getBBox()), r._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))), r._.box(o.bbox))
                    } catch (s) {
                        return r._.box()
                    }
                };
                var w = function() {
                    return this.string
                };
                d.transform = function(t) {
                    var e = this._;
                    if (null == t) {
                        for (var n, i = this, o = new r.Matrix(this.node.getCTM()), a = l(this), s = [a], u = new r.Matrix, c = a.toTransformString(), f = p(a) == p(this.matrix) ? p(e.transform) : c;
                            "svg" != i.type && (i = i.parent());) s.push(l(i));
                        for (n = s.length; n--;) u.add(s[n]);
                        return {
                            string: f,
                            globalMatrix: o,
                            totalMatrix: u,
                            localMatrix: a,
                            diffMatrix: o.clone().add(a.invert()),
                            global: o.toTransformString(),
                            total: u.toTransformString(),
                            local: c,
                            toString: w
                        }
                    }
                    return t instanceof r.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : l(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? m(this.node, {
                        gradientTransform: this.matrix
                    }) : "pattern" == this.type ? m(this.node, {
                        patternTransform: this.matrix
                    }) : m(this.node, {
                        transform: this.matrix
                    })), this
                }, d.parent = function() {
                    return x(this.node.parentNode)
                }, d.append = d.add = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e = this;
                            return t.forEach(function(t) {
                                e.add(t)
                            }), this
                        }
                        t = x(t), this.node.appendChild(t.node), t.paper = this.paper
                    }
                    return this
                }, d.appendTo = function(t) {
                    return t && (t = x(t), t.append(this)), this
                }, d.prepend = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e, n = this;
                            return t.forEach(function(t) {
                                e ? e.after(t) : n.prepend(t), e = t
                            }), this
                        }
                        t = x(t);
                        var r = t.parent();
                        this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                    }
                    return this
                }, d.prependTo = function(t) {
                    return t = x(t), t.prepend(this), this
                }, d.before = function(t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function(t) {
                            var n = t.parent();
                            e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                        }), this.parent().add(), this
                    }
                    t = x(t);
                    var n = t.parent();
                    return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                }, d.after = function(t) {
                    t = x(t);
                    var e = t.parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                }, d.insertBefore = function(t) {
                    t = x(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, d.insertAfter = function(t) {
                    t = x(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, d.remove = function() {
                    var t = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                }, d.select = function(t) {
                    return x(this.node.querySelector(t))
                }, d.selectAll = function(t) {
                    for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(x(e[i]));
                    return n
                }, d.asPX = function(t, e) {
                    return null == e && (e = this.attr(t)), +g(this, t, e)
                }, d.use = function() {
                    var t, e = this.node.id;
                    return e || (e = this.id, m(this.node, {
                        id: e
                    })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? v(this.type, this.node.parentNode) : v("use", this.node.parentNode), m(t.node, {
                        "xlink:href": "#" + e
                    }), t.original = this, t
                }, d.clone = function() {
                    var t = x(this.node.cloneNode(!0));
                    return m(t.node, "id") && m(t.node, {
                        id: t.id
                    }), u(t), t.insertAfter(this), t
                }, d.toDefs = function() {
                    var t = y(this);
                    return t.appendChild(this.node), this
                }, d.pattern = d.toPattern = function(t, e, n, r) {
                    var i = v("pattern", y(this));
                    return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), m(i.node, {
                        x: t,
                        y: e,
                        width: n,
                        height: r,
                        patternUnits: "userSpaceOnUse",
                        id: i.id,
                        viewBox: [t, e, n, r].join(" ")
                    }), i.node.appendChild(this.node), i
                }, d.marker = function(t, e, n, r, i, o) {
                    var a = v("marker", y(this));
                    return null == t && (t = this.getBBox()), h(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, o = t.refY || t.cy, t = t.x), m(a.node, {
                        viewBox: [t, e, n, r].join(" "),
                        markerWidth: n,
                        markerHeight: r,
                        orient: "auto",
                        refX: i || 0,
                        refY: o || 0,
                        id: a.id
                    }), a.node.appendChild(this.node), a
                };
                var k = function(t, e, r, i) {
                    "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                };
                r._.Animation = k, r.animation = function(t, e, n, r) {
                    return new k(t, e, n, r)
                }, d.inAnim = function() {
                    var t = this,
                        e = [];
                    for (var n in t.anims) t.anims[b](n) && ! function(t) {
                        e.push({
                            anim: new k(t._attrs, t.dur, t.easing, t._callback),
                            mina: t,
                            curStatus: t.status(),
                            status: function(e) {
                                return t.status(e)
                            },
                            stop: function() {
                                t.stop()
                            }
                        })
                    }(t.anims[n]);
                    return e
                }, r.animate = function(t, r, i, o, a, s) {
                    "function" != typeof a || a.length || (s = a, a = n.linear);
                    var l = n.time(),
                        u = n(t, r, l, l + o, n.time, i, a);
                    return s && e.once("mina.finish." + u.id, s), u
                }, d.stop = function() {
                    for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
                    return this
                }, d.animate = function(t, r, i, o) {
                    "function" != typeof i || i.length || (o = i, i = n.linear), t instanceof k && (o = t.callback, i = t.easing, r = t.dur, t = t.attr);
                    var a, s, l, u, f = [],
                        d = [],
                        g = {},
                        m = this;
                    for (var v in t)
                        if (t[b](v)) {
                            m.equal ? (u = m.equal(v, p(t[v])), a = u.from, s = u.to, l = u.f) : (a = +m.attr(v), s = +t[v]);
                            var y = h(a, "array") ? a.length : 1;
                            g[v] = c(f.length, f.length + y, l), f = f.concat(a), d = d.concat(s)
                        }
                    var x = n.time(),
                        w = n(f, d, x, x + r, n.time, function(t) {
                            var e = {};
                            for (var n in g) g[b](n) && (e[n] = g[n](t));
                            m.attr(e)
                        }, i);
                    return m.anims[w.id] = w, w._attrs = t, w._callback = o, e("snap.animcreated." + m.id, w), e.once("mina.finish." + w.id, function() {
                        delete m.anims[w.id], o && o.call(m)
                    }), e.once("mina.stop." + w.id, function() {
                        delete m.anims[w.id]
                    }), m
                };
                var C = {};
                d.data = function(t, n) {
                    var i = C[this.id] = C[this.id] || {};
                    if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                    if (1 == arguments.length) {
                        if (r.is(t, "object")) {
                            for (var o in t) t[b](o) && this.data(o, t[o]);
                            return this
                        }
                        return e("snap.data.get." + this.id, this, i[t], t), i[t]
                    }
                    return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
                }, d.removeData = function(t) {
                    return null == t ? C[this.id] = {} : C[this.id] && delete C[this.id][t], this
                }, d.outerSVG = d.toString = f(1), d.innerSVG = f(), d.toDataURL = function() {
                    if (t && t.btoa) {
                        var e = this.getBBox(),
                            n = r.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                                x: +e.x.toFixed(3),
                                y: +e.y.toFixed(3),
                                width: +e.width.toFixed(3),
                                height: +e.height.toFixed(3),
                                contents: this.outerSVG()
                            });
                        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
                    }
                }, s.prototype.select = d.select, s.prototype.selectAll = d.selectAll
            }), r.plugin(function(t, e, n, r, i) {
                function o(t, e, n, r, i, o) {
                    return null == e && "[object SVGMatrix]" == a.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
                }
                var a = Object.prototype.toString,
                    s = String,
                    l = Math,
                    u = "";
                ! function(e) {
                    function n(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function r(t) {
                        var e = l.sqrt(n(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }
                    e.add = function(t, e, n, r, i, a) {
                        var s, l, u, c, f = [
                                [],
                                [],
                                []
                            ],
                            d = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            h = [
                                [t, n, i],
                                [e, r, a],
                                [0, 0, 1]
                            ];
                        for (t && t instanceof o && (h = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), s = 0; 3 > s; s++)
                            for (l = 0; 3 > l; l++) {
                                for (c = 0, u = 0; 3 > u; u++) c += d[s][u] * h[u][l];
                                f[s][l] = c
                            }
                        return this.a = f[0][0], this.b = f[1][0], this.c = f[0][1], this.d = f[1][1], this.e = f[0][2], this.f = f[1][2], this
                    }, e.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new o(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, e.clone = function() {
                        return new o(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, e.translate = function(t, e) {
                        return this.add(1, 0, 0, 1, t, e)
                    }, e.scale = function(t, e, n, r) {
                        return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                    }, e.rotate = function(e, n, r) {
                        e = t.rad(e), n = n || 0, r = r || 0;
                        var i = +l.cos(e).toFixed(9),
                            o = +l.sin(e).toFixed(9);
                        return this.add(i, o, -o, i, n, r), this.add(1, 0, 0, 1, -n, -r)
                    }, e.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, e.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, e.get = function(t) {
                        return +this[s.fromCharCode(97 + t)].toFixed(4)
                    }, e.toString = function() {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }, e.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, e.determinant = function() {
                        return this.a * this.d - this.b * this.c
                    }, e.split = function() {
                        var e = {};
                        e.dx = this.e, e.dy = this.f;
                        var i = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        e.scalex = l.sqrt(n(i[0])), r(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = l.sqrt(n(i[1])), r(i[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                        var o = -i[0][1],
                            a = i[1][1];
                        return 0 > a ? (e.rotate = t.deg(l.acos(a)), 0 > o && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(o)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                    }, e.toTransformString = function(t) {
                        var e = t || this.split();
                        return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : u) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : u) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : u))
                    }
                }(o.prototype), t.Matrix = o, t.matrix = function(t, e, n, r, i, a) {
                    return new o(t, e, n, r, i, a)
                }
            }), r.plugin(function(t, n, r, i, o) {
                function a(r) {
                    return function(i) {
                        if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, h(this).appendChild(i), i = f(i)), i instanceof n)
                            if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                                i.node.id || g(i.node, {
                                    id: i.id
                                });
                                var a = m(i.node.id)
                            } else a = i.attr(r);
                        else if (a = t.color(i), a.error) {
                            var s = t(h(this).ownerSVGElement).gradient(i);
                            s ? (s.node.id || g(s.node, {
                                id: s.id
                            }), a = m(s.node.id)) : a = i
                        } else a = v(a);
                        var l = {};
                        l[r] = a, g(this.node, l), this.node.style[r] = b
                    }
                }

                function s(t) {
                    e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
                }

                function l(t) {
                    for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                        var o = n[r];
                        3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? e.push(o.firstChild.nodeValue) : e.push(l(o)))
                    }
                    return e
                }

                function u() {
                    return e.stop(), this.node.style.fontSize
                }
                var c = t._.make,
                    f = t._.wrap,
                    d = t.is,
                    h = t._.getSomeDefs,
                    p = /^url\(#?([^)]+)\)$/,
                    g = t._.$,
                    m = t.url,
                    v = String,
                    y = t._.separator,
                    b = "";
                e.on("snap.util.attr.mask", function(t) {
                        if (t instanceof n || t instanceof o) {
                            if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, h(this).appendChild(t), t = f(t)), "mask" == t.type) var r = t;
                            else r = c("mask", h(this)), r.node.appendChild(t.node);
                            !r.node.id && g(r.node, {
                                id: r.id
                            }), g(this.node, {
                                mask: m(r.id)
                            })
                        }
                    }),
                    function(t) {
                        e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
                    }(function(t) {
                        if (t instanceof n || t instanceof o) {
                            if (e.stop(), "clipPath" == t.type) var r = t;
                            else r = c("clipPath", h(this)), r.node.appendChild(t.node), !r.node.id && g(r.node, {
                                id: r.id
                            });
                            g(this.node, {
                                "clip-path": m(r.node.id || r.id)
                            })
                        }
                    }), e.on("snap.util.attr.fill", a("fill")), e.on("snap.util.attr.stroke", a("stroke"));
                var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                e.on("snap.util.grad.parse", function(t) {
                        t = v(t);
                        var e = t.match(x);
                        if (!e) return null;
                        var n = e[1],
                            r = e[2],
                            i = e[3];
                        return r = r.split(/\s*,\s*/).map(function(t) {
                            return +t == t ? +t : t
                        }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function(t) {
                            t = t.split(":");
                            var e = {
                                color: t[0]
                            };
                            return t[1] && (e.offset = parseFloat(t[1])), e
                        }), {
                            type: n,
                            params: r,
                            stops: i
                        }
                    }), e.on("snap.util.attr.d", function(n) {
                        e.stop(), d(n, "array") && d(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {
                            d: n
                        })
                    })(-1), e.on("snap.util.attr.#text", function(t) {
                        e.stop(), t = v(t);
                        for (var n = i.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                        this.node.appendChild(n)
                    })(-1), e.on("snap.util.attr.path", function(t) {
                        e.stop(), this.attr({
                            d: t
                        })
                    })(-1), e.on("snap.util.attr.class", function(t) {
                        e.stop(), this.node.className.baseVal = t
                    })(-1), e.on("snap.util.attr.viewBox", function(t) {
                        var n;
                        n = d(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : d(t, "array") ? t.join(" ") : t, g(this.node, {
                            viewBox: n
                        }), e.stop()
                    })(-1), e.on("snap.util.attr.transform", function(t) {
                        this.transform(t), e.stop()
                    })(-1), e.on("snap.util.attr.r", function(t) {
                        "rect" == this.type && (e.stop(), g(this.node, {
                            rx: t,
                            ry: t
                        }))
                    })(-1), e.on("snap.util.attr.textpath", function(t) {
                        if (e.stop(), "text" == this.type) {
                            var r, i, o;
                            if (!t && this.textPath) {
                                for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                                return i.remove(), void delete this.textPath
                            }
                            if (d(t, "string")) {
                                var a = h(this),
                                    s = f(a.parentNode).path(t);
                                a.appendChild(s.node), r = s.id, s.attr({
                                    id: r
                                })
                            } else t = f(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({
                                id: r
                            })));
                            if (r)
                                if (i = this.textPath, o = this.node, i) i.attr({
                                    "xlink:href": "#" + r
                                });
                                else {
                                    for (i = g("textPath", {
                                            "xlink:href": "#" + r
                                        }); o.firstChild;) i.appendChild(o.firstChild);
                                    o.appendChild(i), this.textPath = f(i)
                                }
                        }
                    })(-1), e.on("snap.util.attr.text", function(t) {
                        if ("text" == this.type) {
                            for (var n = this.node, r = function(t) {
                                    var e = g("tspan");
                                    if (d(t, "array"))
                                        for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                                    else e.appendChild(i.doc.createTextNode(t));
                                    return e.normalize && e.normalize(), e
                                }; n.firstChild;) n.removeChild(n.firstChild);
                            for (var o = r(t); o.firstChild;) n.appendChild(o.firstChild)
                        }
                        e.stop()
                    })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function() {
                        return e.stop(), this.transform()
                    })(-1), e.on("snap.util.getattr.textpath", function() {
                        return e.stop(), this.textPath
                    })(-1),
                    function() {
                        function n(n) {
                            return function() {
                                e.stop();
                                var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                                return "none" == r ? r : t(i.doc.getElementById(r.match(p)[1]))
                            }
                        }

                        function r(t) {
                            return function(n) {
                                e.stop();
                                var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                                if ("" == n || !n) return void(this.node.style[r] = "none");
                                if ("marker" == n.type) {
                                    var i = n.node.id;
                                    return i || g(n.node, {
                                        id: n.id
                                    }), void(this.node.style[r] = m(i))
                                }
                            }
                        }
                        e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
                    }(), e.on("snap.util.getattr.r", function() {
                        return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
                    })(-1), e.on("snap.util.getattr.text", function() {
                        if ("text" == this.type || "tspan" == this.type) {
                            e.stop();
                            var t = l(this.node);
                            return 1 == t.length ? t[0] : t
                        }
                    })(-1), e.on("snap.util.getattr.#text", function() {
                        return this.node.textContent
                    })(-1), e.on("snap.util.getattr.viewBox", function() {
                        e.stop();
                        var n = g(this.node, "viewBox");
                        return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
                    })(-1), e.on("snap.util.getattr.points", function() {
                        var t = g(this.node, "points");
                        return e.stop(), t ? t.split(y) : void 0
                    })(-1), e.on("snap.util.getattr.path", function() {
                        var t = g(this.node, "d");
                        return e.stop(), t
                    })(-1), e.on("snap.util.getattr.class", function() {
                        return this.node.className.baseVal
                    })(-1), e.on("snap.util.getattr.fontSize", u)(-1), e.on("snap.util.getattr.font-size", u)(-1)
            }), r.plugin(function(t, e, n, r, i) {
                var o = /\S+/g,
                    a = String,
                    s = e.prototype;
                s.addClass = function(t) {
                    var e, n, r, i, s = a(t || "").match(o) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(o) || [];
                    if (s.length) {
                        for (e = 0; r = s[e++];) n = c.indexOf(r), ~n || c.push(r);
                        i = c.join(" "), u != i && (l.className.baseVal = i)
                    }
                    return this
                }, s.removeClass = function(t) {
                    var e, n, r, i, s = a(t || "").match(o) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(o) || [];
                    if (c.length) {
                        for (e = 0; r = s[e++];) n = c.indexOf(r), ~n && c.splice(n, 1);
                        i = c.join(" "), u != i && (l.className.baseVal = i)
                    }
                    return this
                }, s.hasClass = function(t) {
                    var e = this.node,
                        n = e.className.baseVal,
                        r = n.match(o) || [];
                    return !!~r.indexOf(t)
                }, s.toggleClass = function(t, e) {
                    if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                    var n, r, i, a, s = (t || "").match(o) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(o) || [];
                    for (n = 0; i = s[n++];) r = c.indexOf(i), ~r ? c.splice(r, 1) : c.push(i);
                    return a = c.join(" "), u != a && (l.className.baseVal = a), this
                }
            }), r.plugin(function(t, n, r, i, o) {
                function a(t) {
                    return t
                }

                function s(t) {
                    return function(e) {
                        return +e.toFixed(3) + t
                    }
                }
                var l = {
                        "+": function(t, e) {
                            return t + e
                        },
                        "-": function(t, e) {
                            return t - e
                        },
                        "/": function(t, e) {
                            return t / e
                        },
                        "*": function(t, e) {
                            return t * e
                        }
                    },
                    u = String,
                    c = /[a-z]+$/i,
                    f = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
                e.on("snap.util.attr", function(t) {
                    var n = u(t).match(f);
                    if (n) {
                        var r = e.nt(),
                            i = r.substring(r.lastIndexOf(".") + 1),
                            o = this.attr(i),
                            a = {};
                        e.stop();
                        var s = n[3] || "",
                            d = o.match(c),
                            h = l[n[1]];
                        if (d && d == s ? t = h(parseFloat(o), +n[2]) : (o = this.asPX(i), t = h(this.asPX(i), this.asPX(i, n[2] + s))), isNaN(o) || isNaN(t)) return;
                        a[i] = t, this.attr(a)
                    }
                })(-10), e.on("snap.util.equal", function(t, n) {
                    var r = u(this.attr(t) || ""),
                        i = u(n).match(f);
                    if (i) {
                        e.stop();
                        var o = i[3] || "",
                            d = r.match(c),
                            h = l[i[1]];
                        return d && d == o ? {
                            from: parseFloat(r),
                            to: h(parseFloat(r), +i[2]),
                            f: s(d)
                        } : (r = this.asPX(t), {
                            from: r,
                            to: h(r, this.asPX(t, i[2] + o)),
                            f: a
                        })
                    }
                })(-10)
            }), r.plugin(function(n, r, i, o, a) {
                var s = i.prototype,
                    l = n.is;
                s.rect = function(t, e, n, r, i, o) {
                    var a;
                    return null == o && (o = i), l(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
                        x: t,
                        y: e,
                        width: n,
                        height: r
                    }, null != i && (a.rx = i, a.ry = o)), this.el("rect", a)
                }, s.circle = function(t, e, n) {
                    var r;
                    return l(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                        cx: t,
                        cy: e,
                        r: n
                    }), this.el("circle", r)
                };
                var u = function() {
                    function t() {
                        this.parentNode.removeChild(this)
                    }
                    return function(e, n) {
                        var r = o.doc.createElement("img"),
                            i = o.doc.body;
                        r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                            n.call(r), r.onload = r.onerror = null, i.removeChild(r)
                        }, r.onerror = t, i.appendChild(r), r.src = e
                    }
                }();
                s.image = function(t, e, r, i, o) {
                        var a = this.el("image");
                        if (l(t, "object") && "src" in t) a.attr(t);
                        else if (null != t) {
                            var s = {
                                "xlink:href": t,
                                preserveAspectRatio: "none"
                            };
                            null != e && null != r && (s.x = e, s.y = r), null != i && null != o ? (s.width = i, s.height = o) : u(t, function() {
                                n._.$(a.node, {
                                    width: this.offsetWidth,
                                    height: this.offsetHeight
                                })
                            }), n._.$(a.node, s)
                        }
                        return a
                    }, s.ellipse = function(t, e, n, r) {
                        var i;
                        return l(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                            cx: t,
                            cy: e,
                            rx: n,
                            ry: r
                        }), this.el("ellipse", i)
                    }, s.path = function(t) {
                        var e;
                        return l(t, "object") && !l(t, "array") ? e = t : t && (e = {
                            d: t
                        }), this.el("path", e)
                    }, s.group = s.g = function(t) {
                        var e = this.el("g");
                        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                    }, s.svg = function(t, e, n, r, i, o, a, s) {
                        var u = {};
                        return l(t, "object") && null == e ? u = t : (null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != r && (u.height = r), null != i && null != o && null != a && null != s && (u.viewBox = [i, o, a, s])), this.el("svg", u)
                    }, s.mask = function(t) {
                        var e = this.el("mask");
                        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                    }, s.ptrn = function(t, e, n, r, i, o, a, s) {
                        if (l(t, "object")) var u = t;
                        else u = {
                            patternUnits: "userSpaceOnUse"
                        }, t && (u.x = t), e && (u.y = e), null != n && (u.width = n), null != r && (u.height = r), null != i && null != o && null != a && null != s ? u.viewBox = [i, o, a, s] : u.viewBox = [t || 0, e || 0, n || 0, r || 0];
                        return this.el("pattern", u)
                    }, s.use = function(t) {
                        return null != t ? (t instanceof r && (t.attr("id") || t.attr({
                            id: n._.id(t)
                        }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                            "xlink:href": "#" + t
                        })) : r.prototype.use.call(this)
                    }, s.symbol = function(t, e, n, r) {
                        var i = {};
                        return null != t && null != e && null != n && null != r && (i.viewBox = [t, e, n, r]), this.el("symbol", i)
                    }, s.text = function(t, e, n) {
                        var r = {};
                        return l(t, "object") ? r = t : null != t && (r = {
                            x: t,
                            y: e,
                            text: n || ""
                        }), this.el("text", r)
                    }, s.line = function(t, e, n, r) {
                        var i = {};
                        return l(t, "object") ? i = t : null != t && (i = {
                            x1: t,
                            x2: n,
                            y1: e,
                            y2: r
                        }), this.el("line", i)
                    }, s.polyline = function(t) {
                        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
                            points: t
                        }), this.el("polyline", e)
                    }, s.polygon = function(t) {
                        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
                            points: t
                        }), this.el("polygon", e)
                    },
                    function() {
                        function r() {
                            return this.selectAll("stop")
                        }

                        function i(t, e) {
                            var r = c("stop"),
                                i = {
                                    offset: +e + "%"
                                };
                            return t = n.color(t), i["stop-color"] = t.hex, t.opacity < 1 && (i["stop-opacity"] = t.opacity), c(r, i), this.node.appendChild(r), this
                        }

                        function o() {
                            if ("linearGradient" == this.type) {
                                var t = c(this.node, "x1") || 0,
                                    e = c(this.node, "x2") || 1,
                                    r = c(this.node, "y1") || 0,
                                    i = c(this.node, "y2") || 0;
                                return n._.box(t, r, math.abs(e - t), math.abs(i - r))
                            }
                            var o = this.node.cx || .5,
                                a = this.node.cy || .5,
                                s = this.node.r || 0;
                            return n._.box(o - s, a - s, 2 * s, 2 * s)
                        }

                        function a(t, n) {
                            function r(t, e) {
                                for (var n = (e - f) / (t - d), r = d; t > r; r++) a[r].offset = +(+f + n * (r - d)).toFixed(2);
                                d = t, f = e
                            }
                            var i, o = e("snap.util.grad.parse", null, n).firstDefined();
                            if (!o) return null;
                            o.params.unshift(t), i = "l" == o.type.toLowerCase() ? l.apply(0, o.params) : u.apply(0, o.params), o.type != o.type.toLowerCase() && c(i.node, {
                                gradientUnits: "userSpaceOnUse"
                            });
                            var a = o.stops,
                                s = a.length,
                                f = 0,
                                d = 0;
                            s--;
                            for (var h = 0; s > h; h++) "offset" in a[h] && r(h, a[h].offset);
                            for (a[s].offset = a[s].offset || 100, r(s, a[s].offset), h = 0; s >= h; h++) {
                                var p = a[h];
                                i.addStop(p.color, p.offset)
                            }
                            return i
                        }

                        function l(t, e, a, s, l) {
                            var u = n._.make("linearGradient", t);
                            return u.stops = r, u.addStop = i, u.getBBox = o, null != e && c(u.node, {
                                x1: e,
                                y1: a,
                                x2: s,
                                y2: l
                            }), u
                        }

                        function u(t, e, a, s, l, u) {
                            var f = n._.make("radialGradient", t);
                            return f.stops = r, f.addStop = i, f.getBBox = o, null != e && c(f.node, {
                                cx: e,
                                cy: a,
                                r: s
                            }), null != l && null != u && c(f.node, {
                                fx: l,
                                fy: u
                            }), f
                        }
                        var c = n._.$;
                        s.gradient = function(t) {
                            return a(this.defs, t)
                        }, s.gradientLinear = function(t, e, n, r) {
                            return l(this.defs, t, e, n, r)
                        }, s.gradientRadial = function(t, e, n, r, i) {
                            return u(this.defs, t, e, n, r, i)
                        }, s.toString = function() {
                            var t, e = this.node.ownerDocument,
                                r = e.createDocumentFragment(),
                                i = e.createElement("div"),
                                o = this.node.cloneNode(!0);
                            return r.appendChild(i), i.appendChild(o), n._.$(o, {
                                xmlns: "http://www.w3.org/2000/svg"
                            }), t = i.innerHTML, r.removeChild(r.firstChild), t
                        }, s.toDataURL = function() {
                            return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                        }, s.clear = function() {
                            for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({
                                node: e
                            }), e = t
                        }
                    }()
            }), r.plugin(function(t, e, n, r) {
                function i(t) {
                    var e = i.ps = i.ps || {};
                    return e[t] ? e[t].sleep = 100 : e[t] = {
                        sleep: 100
                    }, setTimeout(function() {
                        for (var n in e) e[$](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
                    }), e[t]
                }

                function o(t, e, n, r) {
                    return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                        x: t,
                        y: e,
                        width: n,
                        w: n,
                        height: r,
                        h: r,
                        x2: t + n,
                        y2: e + r,
                        cx: t + n / 2,
                        cy: e + r / 2,
                        r1: B.min(n, r) / 2,
                        r2: B.max(n, r) / 2,
                        r0: B.sqrt(n * n + r * r) / 2,
                        path: T(t, e, n, r),
                        vb: [t, e, n, r].join(" ")
                    }
                }

                function a() {
                    return this.join(",").replace(I, "$1")
                }

                function s(t) {
                    var e = H(t);
                    return e.toString = a, e
                }

                function l(t, e, n, r, i, o, a, s, l) {
                    return null == l ? g(t, e, n, r, i, o, a, s) : c(t, e, n, r, i, o, a, s, m(t, e, n, r, i, o, a, s, l))
                }

                function u(n, r) {
                    function i(t) {
                        return +(+t).toFixed(3)
                    }
                    return t._.cacher(function(t, o, a) {
                        t instanceof e && (t = t.attr("d")), t = N(t);
                        for (var s, u, f, d, h, p = "", g = {}, m = 0, v = 0, y = t.length; y > v; v++) {
                            if (f = t[v], "M" == f[0]) s = +f[1], u = +f[2];
                            else {
                                if (d = l(s, u, f[1], f[2], f[3], f[4], f[5], f[6]), m + d > o) {
                                    if (r && !g.start) {
                                        if (h = l(s, u, f[1], f[2], f[3], f[4], f[5], f[6], o - m), p += ["C" + i(h.start.x), i(h.start.y), i(h.m.x), i(h.m.y), i(h.x), i(h.y)], a) return p;
                                        g.start = p, p = ["M" + i(h.x), i(h.y) + "C" + i(h.n.x), i(h.n.y), i(h.end.x), i(h.end.y), i(f[5]), i(f[6])].join(), m += d, s = +f[5], u = +f[6];
                                        continue
                                    }
                                    if (!n && !r) return h = l(s, u, f[1], f[2], f[3], f[4], f[5], f[6], o - m)
                                }
                                m += d, s = +f[5], u = +f[6]
                            }
                            p += f.shift() + f
                        }
                        return g.end = p, h = n ? m : r ? g : c(s, u, f[0], f[1], f[2], f[3], f[4], f[5], 1)
                    }, null, t._.clone)
                }

                function c(t, e, n, r, i, o, a, s, l) {
                    var u = 1 - l,
                        c = V(u, 3),
                        f = V(u, 2),
                        d = l * l,
                        h = d * l,
                        p = c * t + 3 * f * l * n + 3 * u * l * l * i + h * a,
                        g = c * e + 3 * f * l * r + 3 * u * l * l * o + h * s,
                        m = t + 2 * l * (n - t) + d * (i - 2 * n + t),
                        v = e + 2 * l * (r - e) + d * (o - 2 * r + e),
                        y = n + 2 * l * (i - n) + d * (a - 2 * i + n),
                        b = r + 2 * l * (o - r) + d * (s - 2 * o + r),
                        x = u * t + l * n,
                        w = u * e + l * r,
                        k = u * i + l * a,
                        C = u * o + l * s,
                        T = 90 - 180 * B.atan2(m - y, v - b) / z;
                    return {
                        x: p,
                        y: g,
                        m: {
                            x: m,
                            y: v
                        },
                        n: {
                            x: y,
                            y: b
                        },
                        start: {
                            x: x,
                            y: w
                        },
                        end: {
                            x: k,
                            y: C
                        },
                        alpha: T
                    }
                }

                function f(e, n, r, i, a, s, l, u) {
                    t.is(e, "array") || (e = [e, n, r, i, a, s, l, u]);
                    var c = j.apply(null, e);
                    return o(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
                }

                function d(t, e, n) {
                    return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
                }

                function h(t, e) {
                    return t = o(t), e = o(e), d(e, t.x, t.y) || d(e, t.x2, t.y) || d(e, t.x, t.y2) || d(e, t.x2, t.y2) || d(t, e.x, e.y) || d(t, e.x2, e.y) || d(t, e.x, e.y2) || d(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
                }

                function p(t, e, n, r, i) {
                    var o = -3 * e + 9 * n - 9 * r + 3 * i,
                        a = t * o + 6 * e - 12 * n + 6 * r;
                    return t * a - 3 * e + 3 * n
                }

                function g(t, e, n, r, i, o, a, s, l) {
                    null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
                    for (var u = l / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, g = 0; c > g; g++) {
                        var m = u * f[g] + u,
                            v = p(m, t, n, i, a),
                            y = p(m, e, r, o, s),
                            b = v * v + y * y;
                        h += d[g] * B.sqrt(b)
                    }
                    return u * h
                }

                function m(t, e, n, r, i, o, a, s, l) {
                    if (!(0 > l || g(t, e, n, r, i, o, a, s) < l)) {
                        var u, c = 1,
                            f = c / 2,
                            d = c - f,
                            h = .01;
                        for (u = g(t, e, n, r, i, o, a, s, d); X(u - l) > h;) f /= 2, d += (l > u ? 1 : -1) * f, u = g(t, e, n, r, i, o, a, s, d);
                        return d
                    }
                }

                function v(t, e, n, r, i, o, a, s) {
                    if (!(W(t, n) < R(i, a) || R(t, n) > W(i, a) || W(e, r) < R(o, s) || R(e, r) > W(o, s))) {
                        var l = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
                            u = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
                            c = (t - n) * (o - s) - (e - r) * (i - a);
                        if (c) {
                            var f = l / c,
                                d = u / c,
                                h = +f.toFixed(2),
                                p = +d.toFixed(2);
                            if (!(h < +R(t, n).toFixed(2) || h > +W(t, n).toFixed(2) || h < +R(i, a).toFixed(2) || h > +W(i, a).toFixed(2) || p < +R(e, r).toFixed(2) || p > +W(e, r).toFixed(2) || p < +R(o, s).toFixed(2) || p > +W(o, s).toFixed(2))) return {
                                x: f,
                                y: d
                            }
                        }
                    }
                }

                function y(t, e, n) {
                    var r = f(t),
                        i = f(e);
                    if (!h(r, i)) return n ? 0 : [];
                    for (var o = g.apply(0, t), a = g.apply(0, e), s = ~~(o / 8), l = ~~(a / 8), u = [], d = [], p = {}, m = n ? 0 : [], y = 0; s + 1 > y; y++) {
                        var b = c.apply(0, t.concat(y / s));
                        u.push({
                            x: b.x,
                            y: b.y,
                            t: y / s
                        })
                    }
                    for (y = 0; l + 1 > y; y++) b = c.apply(0, e.concat(y / l)), d.push({
                        x: b.x,
                        y: b.y,
                        t: y / l
                    });
                    for (y = 0; s > y; y++)
                        for (var x = 0; l > x; x++) {
                            var w = u[y],
                                k = u[y + 1],
                                C = d[x],
                                T = d[x + 1],
                                S = X(k.x - w.x) < .001 ? "y" : "x",
                                _ = X(T.x - C.x) < .001 ? "y" : "x",
                                E = v(w.x, w.y, k.x, k.y, C.x, C.y, T.x, T.y);
                            if (E) {
                                if (p[E.x.toFixed(4)] == E.y.toFixed(4)) continue;
                                p[E.x.toFixed(4)] = E.y.toFixed(4);
                                var M = w.t + X((E[S] - w[S]) / (k[S] - w[S])) * (k.t - w.t),
                                    A = C.t + X((E[_] - C[_]) / (T[_] - C[_])) * (T.t - C.t);
                                M >= 0 && 1 >= M && A >= 0 && 1 >= A && (n ? m++ : m.push({
                                    x: E.x,
                                    y: E.y,
                                    t1: M,
                                    t2: A
                                }))
                            }
                        }
                    return m
                }

                function b(t, e) {
                    return w(t, e)
                }

                function x(t, e) {
                    return w(t, e, 1)
                }

                function w(t, e, n) {
                    t = N(t), e = N(e);
                    for (var r, i, o, a, s, l, u, c, f, d, h = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                        var m = t[p];
                        if ("M" == m[0]) r = s = m[1], i = l = m[2];
                        else {
                            "C" == m[0] ? (f = [r, i].concat(m.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, l, s, l], r = s, i = l);
                            for (var v = 0, b = e.length; b > v; v++) {
                                var x = e[v];
                                if ("M" == x[0]) o = u = x[1], a = c = x[2];
                                else {
                                    "C" == x[0] ? (d = [o, a].concat(x.slice(1)), o = d[6], a = d[7]) : (d = [o, a, o, a, u, c, u, c], o = u, a = c);
                                    var w = y(f, d, n);
                                    if (n) h += w;
                                    else {
                                        for (var k = 0, C = w.length; C > k; k++) w[k].segment1 = p, w[k].segment2 = v, w[k].bez1 = f, w[k].bez2 = d;
                                        h = h.concat(w)
                                    }
                                }
                            }
                        }
                    }
                    return h
                }

                function k(t, e, n) {
                    var r = C(t);
                    return d(r, e, n) && w(t, [
                        ["M", e, n],
                        ["H", r.x2 + 10]
                    ], 1) % 2 == 1
                }

                function C(t) {
                    var e = i(t);
                    if (e.bbox) return H(e.bbox);
                    if (!t) return o();
                    t = N(t);
                    for (var n, r = 0, a = 0, s = [], l = [], u = 0, c = t.length; c > u; u++)
                        if (n = t[u], "M" == n[0]) r = n[1], a = n[2], s.push(r), l.push(a);
                        else {
                            var f = j(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
                            s = s.concat(f.min.x, f.max.x), l = l.concat(f.min.y, f.max.y), r = n[5], a = n[6]
                        }
                    var d = R.apply(0, s),
                        h = R.apply(0, l),
                        p = W.apply(0, s),
                        g = W.apply(0, l),
                        m = o(d, h, p - d, g - h);
                    return e.bbox = H(m), m
                }

                function T(t, e, n, r, i) {
                    if (i) return [
                        ["M", +t + +i, e],
                        ["l", n - 2 * i, 0],
                        ["a", i, i, 0, 0, 1, i, i],
                        ["l", 0, r - 2 * i],
                        ["a", i, i, 0, 0, 1, -i, i],
                        ["l", 2 * i - n, 0],
                        ["a", i, i, 0, 0, 1, -i, -i],
                        ["l", 0, 2 * i - r],
                        ["a", i, i, 0, 0, 1, i, -i],
                        ["z"]
                    ];
                    var o = [
                        ["M", t, e],
                        ["l", n, 0],
                        ["l", 0, r],
                        ["l", -n, 0],
                        ["z"]
                    ];
                    return o.toString = a, o
                }

                function S(t, e, n, r, i) {
                    if (null == i && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != i) var o = Math.PI / 180,
                        s = t + n * Math.cos(-r * o),
                        l = t + n * Math.cos(-i * o),
                        u = e + n * Math.sin(-r * o),
                        c = e + n * Math.sin(-i * o),
                        f = [
                            ["M", s, u],
                            ["A", n, n, 0, +(i - r > 180), 0, l, c]
                        ];
                    else f = [
                        ["M", t, e],
                        ["m", 0, -r],
                        ["a", n, r, 0, 1, 1, 0, 2 * r],
                        ["a", n, r, 0, 1, 1, 0, -2 * r],
                        ["z"]
                    ];
                    return f.toString = a, f
                }

                function _(e) {
                    var n = i(e),
                        r = String.prototype.toLowerCase;
                    if (n.rel) return s(n.rel);
                    t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
                    var o = [],
                        l = 0,
                        u = 0,
                        c = 0,
                        f = 0,
                        d = 0;
                    "M" == e[0][0] && (l = e[0][1], u = e[0][2], c = l, f = u, d++, o.push(["M", l, u]));
                    for (var h = d, p = e.length; p > h; h++) {
                        var g = o[h] = [],
                            m = e[h];
                        if (m[0] != r.call(m[0])) switch (g[0] = r.call(m[0]), g[0]) {
                            case "a":
                                g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - l).toFixed(3), g[7] = +(m[7] - u).toFixed(3);
                                break;
                            case "v":
                                g[1] = +(m[1] - u).toFixed(3);
                                break;
                            case "m":
                                c = m[1], f = m[2];
                            default:
                                for (var v = 1, y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? l : u)).toFixed(3)
                        } else {
                            g = o[h] = [], "m" == m[0] && (c = m[1] + l, f = m[2] + u);
                            for (var b = 0, x = m.length; x > b; b++) o[h][b] = m[b]
                        }
                        var w = o[h].length;
                        switch (o[h][0]) {
                            case "z":
                                l = c, u = f;
                                break;
                            case "h":
                                l += +o[h][w - 1];
                                break;
                            case "v":
                                u += +o[h][w - 1];
                                break;
                            default:
                                l += +o[h][w - 2], u += +o[h][w - 1]
                        }
                    }
                    return o.toString = a, n.rel = s(o), o
                }

                function E(e) {
                    var n = i(e);
                    if (n.abs) return s(n.abs);
                    if (L(e, "array") && L(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                        ["M", 0, 0]
                    ];
                    var r, o = [],
                        l = 0,
                        u = 0,
                        c = 0,
                        f = 0,
                        d = 0;
                    "M" == e[0][0] && (l = +e[0][1], u = +e[0][2], c = l, f = u, d++, o[0] = ["M", l, u]);
                    for (var h, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = d, v = e.length; v > m; m++) {
                        if (o.push(h = []), p = e[m], r = p[0], r != r.toUpperCase()) switch (h[0] = r.toUpperCase(), h[0]) {
                                case "A":
                                    h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +p[6] + l, h[7] = +p[7] + u;
                                    break;
                                case "V":
                                    h[1] = +p[1] + u;
                                    break;
                                case "H":
                                    h[1] = +p[1] + l;
                                    break;
                                case "R":
                                    for (var y = [l, u].concat(p.slice(1)), b = 2, x = y.length; x > b; b++) y[b] = +y[b] + l, y[++b] = +y[b] + u;
                                    o.pop(), o = o.concat(F(y, g));
                                    break;
                                case "O":
                                    o.pop(), y = S(l, u, p[1], p[2]), y.push(y[0]), o = o.concat(y);
                                    break;
                                case "U":
                                    o.pop(), o = o.concat(S(l, u, p[1], p[2], p[3])), h = ["U"].concat(o[o.length - 1].slice(-2));
                                    break;
                                case "M":
                                    c = +p[1] + l, f = +p[2] + u;
                                default:
                                    for (b = 1, x = p.length; x > b; b++) h[b] = +p[b] + (b % 2 ? l : u)
                            } else if ("R" == r) y = [l, u].concat(p.slice(1)), o.pop(), o = o.concat(F(y, g)), h = ["R"].concat(p.slice(-2));
                            else if ("O" == r) o.pop(), y = S(l, u, p[1], p[2]), y.push(y[0]), o = o.concat(y);
                        else if ("U" == r) o.pop(), o = o.concat(S(l, u, p[1], p[2], p[3])), h = ["U"].concat(o[o.length - 1].slice(-2));
                        else
                            for (var w = 0, k = p.length; k > w; w++) h[w] = p[w];
                        if (r = r.toUpperCase(), "O" != r) switch (h[0]) {
                            case "Z":
                                l = +c, u = +f;
                                break;
                            case "H":
                                l = h[1];
                                break;
                            case "V":
                                u = h[1];
                                break;
                            case "M":
                                c = h[h.length - 2], f = h[h.length - 1];
                            default:
                                l = h[h.length - 2], u = h[h.length - 1]
                        }
                    }
                    return o.toString = a, n.abs = s(o), o
                }

                function M(t, e, n, r) {
                    return [t, e, n, r, n, r]
                }

                function A(t, e, n, r, i, o) {
                    var a = 1 / 3,
                        s = 2 / 3;
                    return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
                }

                function O(e, n, r, i, o, a, s, l, u, c) {
                    var f, d = 120 * z / 180,
                        h = z / 180 * (+o || 0),
                        p = [],
                        g = t._.cacher(function(t, e, n) {
                            var r = t * B.cos(n) - e * B.sin(n),
                                i = t * B.sin(n) + e * B.cos(n);
                            return {
                                x: r,
                                y: i
                            }
                        });
                    if (c) T = c[0], S = c[1], k = c[2], C = c[3];
                    else {
                        f = g(e, n, -h), e = f.x, n = f.y, f = g(l, u, -h), l = f.x, u = f.y;
                        var m = (B.cos(z / 180 * o), B.sin(z / 180 * o), (e - l) / 2),
                            v = (n - u) / 2,
                            y = m * m / (r * r) + v * v / (i * i);
                        y > 1 && (y = B.sqrt(y), r = y * r, i = y * i);
                        var b = r * r,
                            x = i * i,
                            w = (a == s ? -1 : 1) * B.sqrt(X((b * x - b * v * v - x * m * m) / (b * v * v + x * m * m))),
                            k = w * r * v / i + (e + l) / 2,
                            C = w * -i * m / r + (n + u) / 2,
                            T = B.asin(((n - C) / i).toFixed(9)),
                            S = B.asin(((u - C) / i).toFixed(9));
                        T = k > e ? z - T : T, S = k > l ? z - S : S, 0 > T && (T = 2 * z + T), 0 > S && (S = 2 * z + S), s && T > S && (T -= 2 * z), !s && S > T && (S -= 2 * z)
                    }
                    var _ = S - T;
                    if (X(_) > d) {
                        var E = S,
                            M = l,
                            A = u;
                        S = T + d * (s && S > T ? 1 : -1), l = k + r * B.cos(S), u = C + i * B.sin(S), p = O(l, u, r, i, o, 0, s, M, A, [S, E, k, C])
                    }
                    _ = S - T;
                    var j = B.cos(T),
                        N = B.sin(T),
                        P = B.cos(S),
                        F = B.sin(S),
                        D = B.tan(_ / 4),
                        L = 4 / 3 * r * D,
                        H = 4 / 3 * i * D,
                        $ = [e, n],
                        I = [e + L * N, n - H * j],
                        q = [l + L * F, u - H * P],
                        R = [l, u];
                    if (I[0] = 2 * $[0] - I[0], I[1] = 2 * $[1] - I[1], c) return [I, q, R].concat(p);
                    p = [I, q, R].concat(p).join().split(",");
                    for (var W = [], V = 0, G = p.length; G > V; V++) W[V] = V % 2 ? g(p[V - 1], p[V], h).y : g(p[V], p[V + 1], h).x;
                    return W
                }

                function j(t, e, n, r, i, o, a, s) {
                    for (var l, u, c, f, d, h, p, g, m = [], v = [
                            [],
                            []
                        ], y = 0; 2 > y; ++y)
                        if (0 == y ? (u = 6 * t - 12 * n + 6 * i, l = -3 * t + 9 * n - 9 * i + 3 * a, c = 3 * n - 3 * t) : (u = 6 * e - 12 * r + 6 * o, l = -3 * e + 9 * r - 9 * o + 3 * s, c = 3 * r - 3 * e), X(l) < 1e-12) {
                            if (X(u) < 1e-12) continue;
                            f = -c / u, f > 0 && 1 > f && m.push(f)
                        } else p = u * u - 4 * c * l, g = B.sqrt(p), 0 > p || (d = (-u + g) / (2 * l), d > 0 && 1 > d && m.push(d), h = (-u - g) / (2 * l), h > 0 && 1 > h && m.push(h));
                    for (var b, x = m.length, w = x; x--;) f = m[x], b = 1 - f, v[0][x] = b * b * b * t + 3 * b * b * f * n + 3 * b * f * f * i + f * f * f * a, v[1][x] = b * b * b * e + 3 * b * b * f * r + 3 * b * f * f * o + f * f * f * s;
                    return v[0][w] = t, v[1][w] = e, v[0][w + 1] = a, v[1][w + 1] = s, v[0].length = v[1].length = w + 2, {
                        min: {
                            x: R.apply(0, v[0]),
                            y: R.apply(0, v[1])
                        },
                        max: {
                            x: W.apply(0, v[0]),
                            y: W.apply(0, v[1])
                        }
                    }
                }

                function N(t, e) {
                    var n = !e && i(t);
                    if (!e && n.curve) return s(n.curve);
                    for (var r = E(t), o = e && E(e), a = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, l = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, u = (function(t, e, n) {
                            var r, i;
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (!(t[0] in {
                                T: 1,
                                Q: 1
                            }) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2];
                                    break;
                                case "A":
                                    t = ["C"].concat(O.apply(0, [e.x, e.y].concat(t.slice(1))));
                                    break;
                                case "S":
                                    "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                                    break;
                                case "T":
                                    "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(A(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                    break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"].concat(A(e.x, e.y, t[1], t[2], t[3], t[4]));
                                    break;
                                case "L":
                                    t = ["C"].concat(M(e.x, e.y, t[1], t[2]));
                                    break;
                                case "H":
                                    t = ["C"].concat(M(e.x, e.y, t[1], e.y));
                                    break;
                                case "V":
                                    t = ["C"].concat(M(e.x, e.y, e.x, t[1]));
                                    break;
                                case "Z":
                                    t = ["C"].concat(M(e.x, e.y, e.X, e.Y))
                            }
                            return t
                        }), c = function(t, e) {
                            if (t[e].length > 7) {
                                t[e].shift();
                                for (var n = t[e]; n.length;) d[e] = "A", o && (h[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                                t.splice(e, 1), v = W(r.length, o && o.length || 0)
                            }
                        }, f = function(t, e, n, i, a) {
                            t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], v = W(r.length, o && o.length || 0))
                        }, d = [], h = [], p = "", g = "", m = 0, v = W(r.length, o && o.length || 0); v > m; m++) {
                        r[m] && (p = r[m][0]), "C" != p && (d[m] = p, m && (g = d[m - 1])), r[m] = u(r[m], a, g), "A" != d[m] && "C" == p && (d[m] = "C"), c(r, m), o && (o[m] && (p = o[m][0]), "C" != p && (h[m] = p, m && (g = h[m - 1])), o[m] = u(o[m], l, g), "A" != h[m] && "C" == p && (h[m] = "C"), c(o, m)), f(r, o, a, l, m), f(o, r, l, a, m);
                        var y = r[m],
                            b = o && o[m],
                            x = y.length,
                            w = o && b.length;
                        a.x = y[x - 2], a.y = y[x - 1], a.bx = q(y[x - 4]) || a.x, a.by = q(y[x - 3]) || a.y, l.bx = o && (q(b[w - 4]) || l.x), l.by = o && (q(b[w - 3]) || l.y), l.x = o && b[w - 2], l.y = o && b[w - 1]
                    }
                    return o || (n.curve = s(r)), o ? [r, o] : r
                }

                function P(t, e) {
                    if (!e) return t;
                    var n, r, i, o, a, s, l;
                    for (t = N(t), i = 0, a = t.length; a > i; i++)
                        for (l = t[i], o = 1, s = l.length; s > o; o += 2) n = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
                    return t
                }

                function F(t, e) {
                    for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                        var o = [{
                            x: +t[r - 2],
                            y: +t[r - 1]
                        }, {
                            x: +t[r],
                            y: +t[r + 1]
                        }, {
                            x: +t[r + 2],
                            y: +t[r + 3]
                        }, {
                            x: +t[r + 4],
                            y: +t[r + 5]
                        }];
                        e ? r ? i - 4 == r ? o[3] = {
                            x: +t[0],
                            y: +t[1]
                        } : i - 2 == r && (o[2] = {
                            x: +t[0],
                            y: +t[1]
                        }, o[3] = {
                            x: +t[2],
                            y: +t[3]
                        }) : o[0] = {
                            x: +t[i - 2],
                            y: +t[i - 1]
                        } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                            x: +t[r],
                            y: +t[r + 1]
                        }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                    }
                    return n
                }
                var D = e.prototype,
                    L = t.is,
                    H = t._.clone,
                    $ = "hasOwnProperty",
                    I = /,?([a-z]),?/gi,
                    q = parseFloat,
                    B = Math,
                    z = B.PI,
                    R = B.min,
                    W = B.max,
                    V = B.pow,
                    X = B.abs,
                    G = u(1),
                    Y = u(),
                    U = u(0, 1),
                    Z = t._unit2px,
                    K = {
                        path: function(t) {
                            return t.attr("path")
                        },
                        circle: function(t) {
                            var e = Z(t);
                            return S(e.cx, e.cy, e.r)
                        },
                        ellipse: function(t) {
                            var e = Z(t);
                            return S(e.cx || 0, e.cy || 0, e.rx, e.ry)
                        },
                        rect: function(t) {
                            var e = Z(t);
                            return T(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                        },
                        image: function(t) {
                            var e = Z(t);
                            return T(e.x || 0, e.y || 0, e.width, e.height)
                        },
                        line: function(t) {
                            return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                        },
                        polyline: function(t) {
                            return "M" + t.attr("points")
                        },
                        polygon: function(t) {
                            return "M" + t.attr("points") + "z"
                        },
                        deflt: function(t) {
                            var e = t.node.getBBox();
                            return T(e.x, e.y, e.width, e.height)
                        }
                    };
                t.path = i, t.path.getTotalLength = G, t.path.getPointAtLength = Y, t.path.getSubpath = function(t, e, n) {
                    if (this.getTotalLength(t) - n < 1e-6) return U(t, e).end;
                    var r = U(t, n, 1);
                    return e ? U(r, e).end : r
                }, D.getTotalLength = function() {
                    return this.node.getTotalLength ? this.node.getTotalLength() : void 0
                }, D.getPointAtLength = function(t) {
                    return Y(this.attr("d"), t)
                }, D.getSubpath = function(e, n) {
                    return t.path.getSubpath(this.attr("d"), e, n)
                }, t._.box = o, t.path.findDotsAtSegment = c, t.path.bezierBBox = f, t.path.isPointInsideBBox = d, t.closest = function(e, n, r, i) {
                    for (var a = 100, s = o(e - a / 2, n - a / 2, a, a), l = [], u = r[0].hasOwnProperty("x") ? function(t) {
                            return {
                                x: r[t].x,
                                y: r[t].y
                            }
                        } : function(t) {
                            return {
                                x: r[t],
                                y: i[t]
                            }
                        }, c = 0; 1e6 >= a && !c;) {
                        for (var f = 0, h = r.length; h > f; f++) {
                            var p = u(f);
                            if (d(s, p.x, p.y)) {
                                c++, l.push(p);
                                break
                            }
                        }
                        c || (a *= 2, s = o(e - a / 2, n - a / 2, a, a))
                    }
                    if (1e6 != a) {
                        var g, m = 1 / 0;
                        for (f = 0, h = l.length; h > f; f++) {
                            var v = t.len(e, n, l[f].x, l[f].y);
                            m > v && (m = v, l[f].len = v, g = l[f])
                        }
                        return g
                    }
                }, t.path.isBBoxIntersect = h, t.path.intersection = b, t.path.intersectionNumber = x, t.path.isPointInside = k, t.path.getBBox = C, t.path.get = K, t.path.toRelative = _, t.path.toAbsolute = E, t.path.toCubic = N, t.path.map = P, t.path.toString = a, t.path.clone = s
            }), r.plugin(function(t, r, i, o) {
                var a = Math.max,
                    s = Math.min,
                    l = function(t) {
                        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                            for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                    },
                    u = l.prototype;
                u.push = function() {
                    for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
                    return this
                }, u.pop = function() {
                    return this.length && delete this[this.length--], this.items.pop()
                }, u.forEach = function(t, e) {
                    for (var n = 0, r = this.items.length; r > n; n++)
                        if (t.call(e, this.items[n], n) === !1) return this;
                    return this
                }, u.animate = function(r, i, o, a) {
                    "function" != typeof o || o.length || (a = o, o = n.linear), r instanceof t._.Animation && (a = r.callback, o = r.easing, i = o.dur, r = r.attr);
                    var s = arguments;
                    if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var l = !0;
                    var u, c = function() {
                            u ? this.b = u : u = this.b
                        },
                        f = 0,
                        d = this,
                        h = a && function() {
                            ++f == d.length && a.call(this)
                        };
                    return this.forEach(function(t, n) {
                        e.once("snap.animcreated." + t.id, c), l ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, h)
                    })
                }, u.remove = function() {
                    for (; this.length;) this.pop().remove();
                    return this
                }, u.bind = function(t, e, n) {
                    var r = {};
                    if ("function" == typeof e) this.bindings[t] = e;
                    else {
                        var i = n || t;
                        this.bindings[t] = function(t) {
                            r[i] = t, e.attr(r)
                        }
                    }
                    return this
                }, u.attr = function(t) {
                    var e = {};
                    for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
                    for (var r = 0, i = this.items.length; i > r; r++) this.items[r].attr(e);
                    return this
                }, u.clear = function() {
                    for (; this.length;) this.pop()
                }, u.splice = function(t, e, n) {
                    t = 0 > t ? a(this.length + t, 0) : t, e = a(0, s(this.length - t, e));
                    var r, i = [],
                        o = [],
                        u = [];
                    for (r = 2; r < arguments.length; r++) u.push(arguments[r]);
                    for (r = 0; e > r; r++) o.push(this[t + r]);
                    for (; r < this.length - t; r++) i.push(this[t + r]);
                    var c = u.length;
                    for (r = 0; r < c + i.length; r++) this.items[t + r] = this[t + r] = c > r ? u[r] : i[r - c];
                    for (r = this.items.length = this.length -= e - c; this[r];) delete this[r++];
                    return new l(o)
                }, u.exclude = function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] == t) return this.splice(e, 1), !0;
                    return !1
                }, u.insertAfter = function(t) {
                    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                    return this
                }, u.getBBox = function() {
                    for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
                        if (!this.items[i].removed) {
                            var o = this.items[i].getBBox();
                            t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
                        }
                    return t = s.apply(0, t), e = s.apply(0, e), n = a.apply(0, n), r = a.apply(0, r), {
                        x: t,
                        y: e,
                        x2: n,
                        y2: r,
                        width: n - t,
                        height: r - e,
                        cx: t + (n - t) / 2,
                        cy: e + (r - e) / 2
                    }
                }, u.clone = function(t) {
                    t = new l;
                    for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
                    return t
                }, u.toString = function() {
                    return "Snap‘s set"
                }, u.type = "set", t.Set = l, t.set = function() {
                    var t = new l;
                    return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
                }
            }), r.plugin(function(t, n, r, i) {
                function o(t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                    }
                }

                function a(e, n, r) {
                    n = v(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
                    for (var i, a, s, l, u = Math.max(e.length, n.length), c = [], h = [], p = 0; u > p; p++) {
                        if (s = e[p] || o(n[p]), l = n[p] || o(s), s[0] != l[0] || "r" == s[0].toLowerCase() && (s[2] != l[2] || s[3] != l[3]) || "s" == s[0].toLowerCase() && (s[3] != l[3] || s[4] != l[4])) {
                            e = t._.transform2matrix(e, r()), n = t._.transform2matrix(n, r()), c = [
                                ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                            ], h = [
                                ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                            ];
                            break
                        }
                        for (c[p] = [], h[p] = [], i = 0, a = Math.max(s.length, l.length); a > i; i++) i in s && (c[p][i] = s[i]), i in l && (h[p][i] = l[i])
                    }
                    return {
                        from: d(c),
                        to: d(h),
                        f: f(c)
                    }
                }

                function s(t) {
                    return t
                }

                function l(t) {
                    return function(e) {
                        return +e.toFixed(3) + t
                    }
                }

                function u(t) {
                    return t.join(" ")
                }

                function c(e) {
                    return t.rgb(e[0], e[1], e[2])
                }

                function f(t) {
                    var e, n, r, i, o, a, s = 0,
                        l = [];
                    for (e = 0, n = t.length; n > e; e++) {
                        for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s++ + "]";
                        o += a + "]", l[e] = o
                    }
                    return Function("val", "return Snap.path.toString.call([" + l + "])")
                }

                function d(t) {
                    for (var e = [], n = 0, r = t.length; r > n; n++)
                        for (var i = 1, o = t[n].length; o > i; i++) e.push(t[n][i]);
                    return e
                }

                function h(t) {
                    return isFinite(parseFloat(t))
                }

                function p(e, n) {
                    return t.is(e, "array") && t.is(n, "array") ? e.toString() == n.toString() : !1
                }
                var g = {},
                    m = /[a-z]+$/i,
                    v = String;
                g.stroke = g.fill = "colour", n.prototype.equal = function(t, n) {
                    return e("snap.util.equal", this, t, n).firstDefined()
                }, e.on("snap.util.equal", function(e, n) {
                    var r, i, o = v(this.attr(e) || ""),
                        y = this;
                    if (h(o) && h(n)) return {
                        from: parseFloat(o),
                        to: parseFloat(n),
                        f: s
                    };
                    if ("colour" == g[e]) return r = t.color(o), i = t.color(n), {
                        from: [r.r, r.g, r.b, r.opacity],
                        to: [i.r, i.g, i.b, i.opacity],
                        f: c
                    };
                    if ("viewBox" == e) return r = this.attr(e).vb.split(" ").map(Number), i = n.split(" ").map(Number), {
                        from: r,
                        to: i,
                        f: u
                    };
                    if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), a(o, n, function() {
                        return y.getBBox(1)
                    });
                    if ("d" == e || "path" == e) return r = t.path.toCubic(o, n), {
                        from: d(r[0]),
                        to: d(r[1]),
                        f: f(r[0])
                    };
                    if ("points" == e) return r = v(o).split(t._.separator), i = v(n).split(t._.separator), {
                        from: r,
                        to: i,
                        f: function(t) {
                            return t
                        }
                    };
                    var b = o.match(m),
                        x = v(n).match(m);
                    return b && p(b, x) ? {
                        from: parseFloat(o),
                        to: parseFloat(n),
                        f: l(b)
                    } : {
                        from: this.asPX(e),
                        to: this.asPX(e, n),
                        f: s
                    }
                })
            }), r.plugin(function(t, n, r, i) {
                for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                        mouseup: "touchend"
                    }, c = (function(t, e) {
                        var n = "y" == t ? "scrollTop" : "scrollLeft",
                            r = e && e.node ? e.node.ownerDocument : i.doc;
                        return r[n in r.documentElement ? "documentElement" : "body"][n]
                    }), f = function() {
                        return this.originalEvent.preventDefault()
                    }, d = function() {
                        return this.originalEvent.stopPropagation()
                    }, h = function(t, e, n, r) {
                        var i = s && u[e] ? u[e] : e,
                            o = function(i) {
                                var o = c("y", r),
                                    l = c("x", r);
                                if (s && u[a](e))
                                    for (var h = 0, p = i.targetTouches && i.targetTouches.length; p > h; h++)
                                        if (i.targetTouches[h].target == t || t.contains(i.targetTouches[h].target)) {
                                            var g = i;
                                            i = i.targetTouches[h], i.originalEvent = g, i.preventDefault = f, i.stopPropagation = d;
                                            break
                                        }
                                var m = i.clientX + l,
                                    v = i.clientY + o;
                                return n.call(r, i, m, v)
                            };
                        return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1),
                            function() {
                                return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                            }
                    }, p = [], g = function(t) {
                        for (var n, r = t.clientX, i = t.clientY, o = c("y"), a = c("x"), l = p.length; l--;) {
                            if (n = p[l], s) {
                                for (var u, f = t.touches && t.touches.length; f--;)
                                    if (u = t.touches[f], u.identifier == n.el._drag.id || n.el.node.contains(u.target)) {
                                        r = u.clientX, i = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                        break
                                    }
                            } else t.preventDefault();
                            var d = n.el.node;
                            d.nextSibling, d.parentNode, d.style.display;
                            r += a, i += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
                        }
                    }, m = function(n) {
                        t.unmousemove(g).unmouseup(m);
                        for (var r, i = p.length; i--;) r = p[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n), e.off("snap.drag.*." + r.el.id);
                        p = []
                    }, v = l.length; v--;) ! function(e) {
                    t[e] = o[e] = function(n, r) {
                        if (t.is(n, "function")) this.events = this.events || [], this.events.push({
                            name: e,
                            f: n,
                            unbind: h(this.node || document, e, n, r || this)
                        });
                        else
                            for (var i = 0, o = this.events.length; o > i; i++)
                                if (this.events[i].name == e) try {
                                    this.events[i].f.call(this)
                                } catch (a) {}
                                return this
                    }, t["un" + e] = o["un" + e] = function(t) {
                        for (var n = this.events || [], r = n.length; r--;)
                            if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                        return this
                    }
                }(l[v]);
                o.hover = function(t, e, n, r) {
                    return this.mouseover(t, n).mouseout(e, r || n)
                }, o.unhover = function(t, e) {
                    return this.unmouseover(t).unmouseout(e)
                };
                var y = [];
                o.drag = function(n, r, i, o, a, s) {
                    function l(l, u, f) {
                        (l.originalEvent || l).preventDefault(), c._drag.x = u, c._drag.y = f, c._drag.id = l.identifier, !p.length && t.mousemove(g).mouseup(m), p.push({
                            el: c,
                            move_scope: o,
                            start_scope: a,
                            end_scope: s
                        }), r && e.on("snap.drag.start." + c.id, r), n && e.on("snap.drag.move." + c.id, n), i && e.on("snap.drag.end." + c.id, i), e("snap.drag.start." + c.id, a || o || c, u, f, l)
                    }

                    function u(t, n, r) {
                        e("snap.draginit." + c.id, c, t, n, r)
                    }
                    var c = this;
                    if (!arguments.length) {
                        var f;
                        return c.drag(function(t, e) {
                            this.attr({
                                transform: f + (f ? "T" : "t") + [t, e]
                            })
                        }, function() {
                            f = this.transform().local
                        })
                    }
                    return e.on("snap.draginit." + c.id, l), c._drag = {}, y.push({
                        el: c,
                        start: l,
                        init: u
                    }), c.mousedown(u), c
                }, o.undrag = function() {
                    for (var n = y.length; n--;) y[n].el == this && (this.unmousedown(y[n].init), y.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
                    return !y.length && t.unmousemove(g).unmouseup(m), this
                }
            }), r.plugin(function(t, n, r, i) {
                var o = (n.prototype, r.prototype),
                    a = /^\s*url\((.+)\)/,
                    s = String,
                    l = t._.$;
                t.filter = {}, o.filter = function(e) {
                    var r = this;
                    "svg" != r.type && (r = r.paper);
                    var i = t.parse(s(e)),
                        o = t._.id(),
                        a = (r.node.offsetWidth, r.node.offsetHeight, l("filter"));
                    return l(a, {
                        id: o,
                        filterUnits: "userSpaceOnUse"
                    }), a.appendChild(i.node), r.defs.appendChild(a), new n(a)
                }, e.on("snap.util.getattr.filter", function() {
                    e.stop();
                    var n = l(this.node, "filter");
                    if (n) {
                        var r = s(n).match(a);
                        return r && t.select(r[1])
                    }
                }), e.on("snap.util.attr.filter", function(r) {
                    if (r instanceof n && "filter" == r.type) {
                        e.stop();
                        var i = r.node.id;
                        i || (l(r.node, {
                            id: r.id
                        }), i = r.id), l(this.node, {
                            filter: t.url(i)
                        })
                    }
                    r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
                }), t.filter.blur = function(e, n) {
                    null == e && (e = 2);
                    var r = null == n ? e : [e, n];
                    return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: r
                    })
                }, t.filter.blur.toString = function() {
                    return this()
                }, t.filter.shadow = function(e, n, r, i, o) {
                    return "string" == typeof r && (i = r, o = i, r = 4), "string" != typeof i && (o = i, i = "#000"), i = i || "#000", null == r && (r = 4), null == o && (o = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: i,
                        dx: e,
                        dy: n,
                        blur: r,
                        opacity: o
                    })
                }, t.filter.shadow.toString = function() {
                    return this()
                }, t.filter.grayscale = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: .2126 + .7874 * (1 - e),
                        b: .7152 - .7152 * (1 - e),
                        c: .0722 - .0722 * (1 - e),
                        d: .2126 - .2126 * (1 - e),
                        e: .7152 + .2848 * (1 - e),
                        f: .0722 - .0722 * (1 - e),
                        g: .2126 - .2126 * (1 - e),
                        h: .0722 + .9278 * (1 - e)
                    })
                }, t.filter.grayscale.toString = function() {
                    return this()
                }, t.filter.sepia = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: .393 + .607 * (1 - e),
                        b: .769 - .769 * (1 - e),
                        c: .189 - .189 * (1 - e),
                        d: .349 - .349 * (1 - e),
                        e: .686 + .314 * (1 - e),
                        f: .168 - .168 * (1 - e),
                        g: .272 - .272 * (1 - e),
                        h: .534 - .534 * (1 - e),
                        i: .131 + .869 * (1 - e)
                    })
                }, t.filter.sepia.toString = function() {
                    return this()
                }, t.filter.saturate = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - e
                    })
                }, t.filter.saturate.toString = function() {
                    return this()
                }, t.filter.hueRotate = function(e) {
                    return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: e
                    })
                }, t.filter.hueRotate.toString = function() {
                    return this()
                }, t.filter.invert = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: e,
                        amount2: 1 - e
                    })
                }, t.filter.invert.toString = function() {
                    return this()
                }, t.filter.brightness = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: e
                    })
                }, t.filter.brightness.toString = function() {
                    return this()
                }, t.filter.contrast = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                        amount: e,
                        amount2: .5 - e / 2
                    })
                }, t.filter.contrast.toString = function() {
                    return this()
                }
            }), r.plugin(function(t, e, n, r, i) {
                var o = t._.box,
                    a = t.is,
                    s = /^[^a-z]*([tbmlrc])/i,
                    l = function() {
                        return "T" + this.dx + "," + this.dy
                    };
                e.prototype.getAlign = function(t, e) {
                    null == e && a(t, "string") && (e = t, t = null), t = t || this.paper;
                    var n = t.getBBox ? t.getBBox() : o(t),
                        r = this.getBBox(),
                        i = {};
                    switch (e = e && e.match(s), e = e ? e[1].toLowerCase() : "c") {
                        case "t":
                            i.dx = 0, i.dy = n.y - r.y;
                            break;
                        case "b":
                            i.dx = 0, i.dy = n.y2 - r.y2;
                            break;
                        case "m":
                            i.dx = 0, i.dy = n.cy - r.cy;
                            break;
                        case "l":
                            i.dx = n.x - r.x, i.dy = 0;
                            break;
                        case "r":
                            i.dx = n.x2 - r.x2, i.dy = 0;
                            break;
                        default:
                            i.dx = n.cx - r.cx, i.dy = 0
                    }
                    return i.toString = l, i
                }, e.prototype.align = function(t, e) {
                    return this.transform("..." + this.getAlign(t, e))
                }
            }), r
        })
    }).call(window)
}, function(t, e) {
    function n(t) {
        return !!t && "object" == typeof t
    }

    function r(t, e) {
        var n = null == t ? void 0 : t[e];
        return a(n) ? n : void 0
    }

    function i(t) {
        return o(t) && d.call(t) == s
    }

    function o(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function a(t) {
        return null == t ? !1 : i(t) ? h.test(c.call(t)) : n(t) && l.test(t)
    }
    var s = "[object Function]",
        l = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        f = u.hasOwnProperty,
        d = u.toString,
        h = RegExp("^" + c.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function(t, e, n) {
    (function(t, n) {
        function r(t) {
            return t && t.Object === Object ? t : null
        }
        var i = {
                "function": !0,
                object: !0
            },
            o = i[typeof e] && e && !e.nodeType ? e : void 0,
            a = i[typeof t] && t && !t.nodeType ? t : void 0,
            s = r(o && a && "object" == typeof n && n),
            l = r(i[typeof self] && self),
            u = r(i[typeof window] && window),
            c = r(i[typeof this] && this),
            f = s || u !== (c && c.window) && u || l || c || Function("return this")();
        t.exports = f
    }).call(e, n(29)(t), function() {
        return this
    }())
}, function(t, e, n) {
    function r(t, e, n) {
        function r() {
            v && clearTimeout(v), h && clearTimeout(h), b = 0, h = v = y = void 0
        }

        function o(e, n) {
            n && clearTimeout(n), h = v = y = void 0, e && (b = u(), p = t.apply(m, d), v || h || (d = m = void 0))
        }

        function l() {
            var t = e - (u() - g);
            0 >= t || t > e ? o(y, h) : v = setTimeout(l, t)
        }

        function c() {
            o(w, v)
        }

        function f() {
            if (d = arguments, g = u(), m = this, y = w && (v || !k), x === !1) var n = k && !v;
            else {
                h || k || (b = g);
                var r = x - (g - b),
                    i = 0 >= r || r > x;
                i ? (h && (h = clearTimeout(h)), b = g, p = t.apply(m, d)) : h || (h = setTimeout(c, r))
            }
            return i && v ? v = clearTimeout(v) : v || e === x || (v = setTimeout(l, e)), n && (i = !0, p = t.apply(m, d)), !i || v || h || (d = m = void 0), p
        }
        var d, h, p, g, m, v, y, b = 0,
            x = !1,
            w = !0;
        if ("function" != typeof t) throw new TypeError(a);
        if (e = 0 > e ? 0 : +e || 0, n === !0) {
            var k = !0;
            w = !1
        } else i(n) && (k = !!n.leading, x = "maxWait" in n && s(+n.maxWait || 0, e), w = "trailing" in n ? !!n.trailing : w);
        return f.cancel = r, f
    }

    function i(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    var o = n(25),
        a = "Expected a function",
        s = Math.max,
        l = o(Date, "now"),
        u = l || function() {
            return (new Date).getTime()
        };
    t.exports = r
}, function(t, e, n) {
    function r(t) {
        return !!t && "object" == typeof t
    }

    function i(t) {
        return "symbol" == typeof t || r(t) && d.call(t) == u
    }

    function o(t) {
        if ("string" == typeof t) return t;
        if (null == t) return "";
        if (i(t)) return h ? g.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -l ? "-0" : e
    }

    function a(t) {
        var e = ++f;
        return o(t) + e
    }
    var s = n(26),
        l = 1 / 0,
        u = "[object Symbol]",
        c = Object.prototype,
        f = 0,
        d = c.toString,
        h = s.Symbol,
        p = h ? h.prototype : void 0,
        g = h ? p.toString : void 0;
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}]);