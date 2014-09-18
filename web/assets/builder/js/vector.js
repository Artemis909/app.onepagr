(function (b, d) {
    function h(a) {
        var c = a.length,
            f = e.type(a);
        return e.isWindow(a) ? !1 : 1 === a.nodeType && c ? !0 : "array" === f || "function" !== f && (0 === c || "number" == typeof c && 0 < c && c - 1 in a)
    }

    function g(a) {
        var c = Na[a] = {};
        return e.each(a.match(U) || [], function (a, e) {
            c[e] = !0
        }), c
    }

    function l() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        });
        this.expando = e.expando + Math.random()
    }

    function n(a, c, f) {
        var e;
        if (f === d && 1 === a.nodeType)
            if (e = "data-" + c.replace(mb, "-$1").toLowerCase(), f = a.getAttribute(e), "string" == typeof f) {
                try {
                    f = "true" === f ? !0 : "false" === f ? !1 : "null" === f ? null : +f + "" === f ? +f : nb.test(f) ? JSON.parse(f) : f
                } catch (q) {}
                I.set(a, c, f)
            } else f = d;
        return f
    }

    function s() {
        return !0
    }

    function k() {
        return !1
    }

    function m() {
        try {
            return w.activeElement
        } catch (a) {}
    }

    function r(a, c) {
        for (;
            (a = a[c]) && 1 !== a.nodeType;);
        return a
    }

    function u(a, c, f) {
        if (e.isFunction(c)) return e.grep(a, function (a, e) {
            return !!c.call(a, e, a) !== f
        });
        if (c.nodeType) return e.grep(a, function (a) {
            return a === c !== f
        });
        if ("string" == typeof c) {
            if (ob.test(c)) return e.filter(c, a, f);
            c = e.filter(c, a)
        }
        return e.grep(a, function (a) {
            return 0 <= ka.call(c, a) !== f
        })
    }

    function E(a, c) {
        return e.nodeName(a, "table") && e.nodeName(1 === c.nodeType ? c : c.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function y(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function z(a) {
        var c = pb.exec(a.type);
        return c ? a.type = c[1] : a.removeAttribute("type"), a
    }

    function X(a, c) {
        for (var f = a.length, e = 0; f > e; e++) F.set(a[e], "globalEval", !c || F.get(c[e], "globalEval"))
    }

    function D(a, c) {
        var f, p, q, b, d, g;
        if (1 === c.nodeType) {
            if (F.hasData(a) && (f = F.access(a), p = F.set(c, f), g = f.events))
                for (q in delete p.handle, p.events = {}, g)
                    for (f = 0, p = g[q].length; p > f; f++) e.event.add(c, q, g[q][f]);
            I.hasData(a) && (b = I.access(a), d = e.extend({}, b), I.set(c, d))
        }
    }

    function B(a, c) {
        var f = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === d || c && e.nodeName(a, c) ? e.merge([a], f) : f
    }

    function G(a, c) {
        if (c in a) return c;
        for (var f = c.charAt(0).toUpperCase() +
            c.slice(1), e = c, q = Oa.length; q--;)
            if (c = Oa[q] + f, c in a) return c;
        return e
    }

    function H(a, c) {
        return a = c || a, "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
    }

    function J(a, c) {
        for (var f, p, q, b = [], d = 0, g = a.length; g > d; d++) p = a[d], p.style && (b[d] = F.get(p, "olddisplay"), f = p.style.display, c ? (b[d] || "none" !== f || (p.style.display = ""), "" === p.style.display && H(p) && (b[d] = F.access(p, "olddisplay", W(p.nodeName)))) : b[d] || (q = H(p), (f && "none" !== f || !q) && F.set(p, "olddisplay", q ? f : e.css(p, "display"))));
        for (d = 0; g > d; d++) p = a[d], p.style && (c && "none" !== p.style.display && "" !== p.style.display || (p.style.display = c ? b[d] || "" : "none"));
        return a
    }

    function R(a, c, f) {
        return (a = qb.exec(c)) ? Math.max(0, a[1] - (f || 0)) + (a[2] || "px") : c
    }

    function C(a, c, f, p, q) {
        c = f === (p ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var b = 0; 4 > c; c += 2) "margin" === f && (b += e.css(a, f + da[c], !0, q)), p ? ("content" === f && (b -= e.css(a, "padding" + da[c], !0, q)), "margin" !== f && (b -= e.css(a, "border" + da[c] + "Width", !0, q))) : (b += e.css(a, "padding" + da[c], !0, q), "padding" !== f && (b += e.css(a, "border" + da[c] + "Width", !0, q)));
        return b
    }

    function S(a, c, f) {
        var p = !0,
            q = "width" === c ? a.offsetWidth : a.offsetHeight,
            d = b.getComputedStyle(a, null),
            v = e.support.boxSizing && "border-box" === e.css(a, "boxSizing", !1, d);
        if (0 >= q || null == q) {
            if (q = ea(a, c, d), (0 > q || null == q) && (q = a.style[c]), Da.test(q)) return q;
            p = v && (e.support.boxSizingReliable || q === a.style[c]);
            q = parseFloat(q) || 0
        }
        return q + C(a, c, f || (v ? "border" : "content"), p, d) + "px"
    }

    function W(a) {
        var c = w,
            f = Pa[a];
        return f || (f = t(a, c), "none" !== f && f || (fa = (fa || e("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(c.documentElement), c = (fa[0].contentWindow || fa[0].contentDocument).document, c.write("<!doctype html><html><body>"), c.close(), f = t(a, c), fa.detach()), Pa[a] = f), f
    }

    function t(a, c) {
        var f = e(c.createElement(a)).appendTo(c.body),
            p = e.css(f[0], "display");
        return f.remove(), p
    }

    function M(a, c, f, p) {
        var q;
        if (e.isArray(c)) e.each(c, function (c, e) {
            f || rb.test(a) ? p(a, e) : M(a + "[" + ("object" == typeof e ? c : "") + "]", e, f, p)
        });
        else if (f || "object" !== e.type(c)) p(a, c);
        else
            for (q in c) M(a + "[" + q + "]", c[q], f, p)
    }

    function O(a) {
        return function (c, f) {
            "string" != typeof c && (f = c, c = "*");
            var p, q = 0,
                b = c.toLowerCase().match(U) || [];
            if (e.isFunction(f))
                for (; p = b[q++];) "+" === p[0] ? (p = p.slice(1) || "*", (a[p] = a[p] || []).unshift(f)) : (a[p] = a[p] || []).push(f)
        }
    }

    function N(a, c, f, p) {
        function q(g) {
            var k;
            return b[g] = !0, e.each(a[g] || [], function (a, e) {
                var g = e(c, f, p);
                return "string" != typeof g || v || b[g] ? v ? !(k = g) : d : (c.dataTypes.unshift(g), q(g), !1)
            }), k
        }
        var b = {}, v = a === Fa;
        return q(c.dataTypes[0]) || !b["*"] && q("*")
    }

    function Z(a, c) {
        var f, p, q = e.ajaxSettings.flatOptions || {};
        for (f in c) c[f] !== d && ((q[f] ? a : p || (p = {}))[f] = c[f]);
        return p && e.extend(!0, a, p), a
    }

    function za() {
        return setTimeout(function () {
            ga = d
        }), ga = e.now()
    }

    function ha(a, c, f) {
        for (var e, q = (aa[c] || []).concat(aa["*"]), b = 0, d = q.length; d > b; b++)
            if (e = q[b].call(f, c, a)) return e
    }

    function Aa(a, c, f) {
        var p, q = 0,
            b = ta.length,
            d = e.Deferred().always(function () {
                delete g.elem
            }),
            g = function () {
                if (p) return !1;
                for (var c = ga || za(), c = Math.max(0, k.startTime + k.duration - c), f = 1 - (c / k.duration || 0), e = 0, b = k.tweens.length; b > e; e++) k.tweens[e].run(f);
                return d.notifyWith(a, [k, f, c]), 1 > f && b ? c : (d.resolveWith(a, [k]), !1)
            }, k = d.promise({
                elem: a,
                props: e.extend({}, c),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, f),
                originalProperties: c,
                originalOptions: f,
                startTime: ga || za(),
                duration: f.duration,
                tweens: [],
                createTween: function (c, f) {
                    var p = e.Tween(a, k.opts, c, f, k.opts.specialEasing[c] || k.opts.easing);
                    return k.tweens.push(p), p
                },
                stop: function (c) {
                    var f = 0,
                        e = c ? k.tweens.length : 0;
                    if (p) return this;
                    for (p = !0; e > f; f++) k.tweens[f].run(1);
                    return c ? d.resolveWith(a, [k, c]) : d.rejectWith(a, [k, c]), this
                }
            });
        f = k.props;
        for (Ga(f, k.opts.specialEasing); b > q; q++)
            if (c = ta[q].call(k, a, f, k.opts)) return c;
        return e.map(f, ha, k), e.isFunction(k.opts.start) && k.opts.start.call(a, k), e.fx.timer(e.extend(g, {
            elem: a,
            anim: k,
            queue: k.opts.queue
        })), k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function Ga(a, c) {
        var f, p, b, d, k;
        for (f in a)
            if (p = e.camelCase(f), b = c[p], d = a[f], e.isArray(d) && (b = d[1], d = a[f] = d[0]), f !== p && (a[p] = d, delete a[f]), k = e.cssHooks[p], k && "expand" in k)
                for (f in d = k.expand(d), delete a[p], d) f in a || (a[f] = d[f], c[f] = b);
            else c[p] = b
    }

    function T(a, c, f, e, b) {
        return new T.prototype.init(a, c, f, e, b)
    }

    function ua(a, c) {
        var f, e = {
                height: a
            }, b = 0;
        for (c = c ? 1 : 0; 4 > b; b += 2 - c) f = da[b], e["margin" + f] = e["padding" + f] = a;
        return c && (e.opacity = e.width = a), e
    }

    function Qa(a) {
        return e.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Ra, ia, la = typeof d,
        sb = b.location,
        w = b.document,
        Sa = w.documentElement,
        tb = b.jQuery,
        ub = b.$,
        va = {}, wa = [],
        Ta = wa.concat,
        Ha = wa.push,
        ja = wa.slice,
        ka = wa.indexOf,
        vb = va.toString,
        Ia = va.hasOwnProperty,
        wb = "2.0.3".trim,
        e = function (a, c) {
            return new e.fn.init(a, c, Ra)
        }, xa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = /\S+/g,
        xb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ua = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        yb = /^-ms-/,
        zb = /-([\da-z])/gi,
        Ab = function (a, c) {
            return c.toUpperCase()
        }, ya = function () {
            w.removeEventListener("DOMContentLoaded", ya, !1);
            b.removeEventListener("load", ya, !1);
            e.ready()
        };
    e.fn = e.prototype = {
        jquery: "2.0.3",
        constructor: e,
        init: function (a, c, f) {
            var p, b;
            if (!a) return this;
            if ("string" == typeof a) {
                if (p = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : xb.exec(a), !p || !p[1] && c) return !c || c.jquery ? (c || f).find(a) : this.constructor(c).find(a);
                if (p[1]) {
                    if (c = c instanceof e ? c[0] : c, e.merge(this, e.parseHTML(p[1], c && c.nodeType ? c.ownerDocument || c : w, !0)), Ua.test(p[1]) && e.isPlainObject(c))
                        for (p in c) e.isFunction(this[p]) ? this[p](c[p]) : this.attr(p, c[p]);
                    return this
                }
                return b = w.getElementById(p[2]), b && b.parentNode && (this.length = 1, this[0] = b), this.context = w, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : e.isFunction(a) ? f.ready(a) : (a.selector !== d && (this.selector = a.selector, this.context = a.context), e.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return ja.call(this)
        },
        get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function (a) {
            a = e.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function (a, c) {
            return e.each(this, a, c)
        },
        ready: function (a) {
            return e.ready.promise().done(a), this
        },
        slice: function () {
            return this.pushStack(ja.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var c = this.length;
            a = +a + (0 > a ? c : 0);
            return this.pushStack(0 <= a && c > a ? [this[a]] : [])
        },
        map: function (a) {
            return this.pushStack(e.map(this, function (c, f) {
                return a.call(c, f, c)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Ha,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function () {
        var a, c, f, p, b, k, g = arguments[0] || {}, m = 1,
            h = arguments.length,
            r = !1;
        "boolean" == typeof g && (r = g, g = arguments[1] || {}, m = 2);
        "object" == typeof g || e.isFunction(g) || (g = {});
        for (h === m && (g = this, --m); h > m; m++)
            if (null != (a = arguments[m]))
                for (c in a) f = g[c], p = a[c], g !== p && (r && p && (e.isPlainObject(p) || (b = e.isArray(p))) ? (b ? (b = !1, k = f && e.isArray(f) ? f : []) : k = f && e.isPlainObject(f) ? f : {}, g[c] = e.extend(r, k, p)) : p !== d && (g[c] = p));
        return g
    };
    e.extend({
        expando: "jQuery" + ("2.0.3" + Math.random()).replace(/\D/g, ""),
        noConflict: function (a) {
            return b.$ === e && (b.$ = ub), a && b.jQuery === e && (b.jQuery = tb), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
        },
        ready: function (a) {
            (!0 === a ? --e.readyWait : e.isReady) || (e.isReady = !0, !0 !== a && 0 < --e.readyWait || (ia.resolveWith(w, [e]), e.fn.trigger && e(w).trigger("ready").off("ready")))
        },
        isFunction: function (a) {
            return "function" === e.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? va[vb.call(a)] || "object" : typeof a
        },
        isPlainObject: function (a) {
            if ("object" !== e.type(a) || a.nodeType || e.isWindow(a)) return !1;
            try {
                if (a.constructor && !Ia.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (a) {
            for (var c in a) return !1;
            return !0
        },
        error: function (a) {
            throw Error(a);
        },
        parseHTML: function (a, c, f) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof c && (f = c, c = !1);
            c = c || w;
            var p = Ua.exec(a);
            f = !f && [];
            return p ? [c.createElement(p[1])] : (p = e.buildFragment([a], c, f), f && e(f).remove(), e.merge([], p.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function (a) {
            var c, f;
            if (!a || "string" != typeof a) return null;
            try {
                f = new DOMParser, c = f.parseFromString(a, "text/xml")
            } catch (p) {
                c = d
            }
            return (!c || c.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + a), c
        },
        noop: function () {},
        globalEval: function (a) {
            var c, f = eval;
            (a = e.trim(a)) && (1 === a.indexOf("use strict") ? (c = w.createElement("script"), c.text = a, w.head.appendChild(c).parentNode.removeChild(c)) : f(a))
        },
        camelCase: function (a) {
            return a.replace(yb, "ms-").replace(zb, Ab)
        },
        nodeName: function (a, c) {
            return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function (a, c, f) {
            var e, b = 0,
                d = a.length,
                k = h(a);
            if (f)
                if (k)
                    for (; d > b && (e = c.apply(a[b], f), !1 !== e); b++);
                else
                    for (b in a) {
                        if (e = c.apply(a[b], f), !1 === e) break
                    } else if (k)
                        for (; d > b && (e = c.call(a[b], b, a[b]), !1 !== e); b++);
                    else
                        for (b in a)
                            if (e = c.call(a[b], b, a[b]), !1 === e) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : wb.call(a)
        },
        makeArray: function (a, c) {
            var f = c || [];
            return null != a && (h(Object(a)) ? e.merge(f, "string" == typeof a ? [a] : a) : Ha.call(f, a)), f
        },
        inArray: function (a, c, f) {
            return null == c ? -1 : ka.call(c, a, f)
        },
        merge: function (a, c) {
            var f = c.length,
                e = a.length,
                b = 0;
            if ("number" == typeof f)
                for (; f > b; b++) a[e++] = c[b];
            else
                for (; c[b] !== d;) a[e++] = c[b++];
            return a.length = e, a
        },
        grep: function (a, c, f) {
            var e, b = [],
                d = 0,
                k = a.length;
            for (f = !! f; k > d; d++) e = !! c(a[d], d), f !== e && b.push(a[d]);
            return b
        },
        map: function (a, c, f) {
            var e, b = 0,
                d = a.length,
                k = [];
            if (h(a))
                for (; d > b; b++) e = c(a[b], b, f), null != e && (k[k.length] = e);
            else
                for (b in a) e = c(a[b], b, f), null != e && (k[k.length] = e);
            return Ta.apply([], k)
        },
        guid: 1,
        proxy: function (a, c) {
            var f, b, q;
            return "string" == typeof c && (f = a[c], c = a, a = f), e.isFunction(a) ? (b = ja.call(arguments, 2), q = function () {
                return a.apply(c || this, b.concat(ja.call(arguments)))
            }, q.guid = a.guid = a.guid || e.guid++, q) : d
        },
        access: function (a, c, f, b, q, k, g) {
            var m = 0,
                h = a.length,
                r = null == f;
            if ("object" === e.type(f))
                for (m in q = !0, f) e.access(a, c, m, f[m], !0, k, g);
            else if (b !== d && (q = !0, e.isFunction(b) || (g = !0), r && (g ? (c.call(a, b), c = null) : (r = c, c = function (a, c, f) {
                return r.call(e(a), f)
            })), c))
                for (; h > m; m++) c(a[m], f, g ? b : b.call(a[m], m, c(a[m], f)));
            return q ? a : r ? c.call(a) : h ? c(a[0], f) : k
        },
        now: Date.now,
        swap: function (a, c, f, e) {
            var b, d = {};
            for (b in c) d[b] = a.style[b], a.style[b] = c[b];
            f = f.apply(a, e || []);
            for (b in c) a.style[b] = d[b];
            return f
        }
    });
    e.ready.promise = function (a) {
        return ia || (ia = e.Deferred(), "complete" === w.readyState ? setTimeout(e.ready) : (w.addEventListener("DOMContentLoaded", ya, !1), b.addEventListener("load", ya, !1))), ia.promise(a)
    };
    e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, c) {
        va["[object " + c + "]"] = c.toLowerCase()
    });
    Ra = e(w);
    (function (a, c) {
        function f(a, c, f, e) {
            var b, p, d, q, k;
            if ((c ? c.ownerDocument || c : J) !== B && O(c), c = c || B, f = f || [], !a || "string" != typeof a) return f;
            if (1 !== (q = c.nodeType) && 9 !== q) return [];
            if (G && !e) {
                if (b = va.exec(a))
                    if (d = b[1])
                        if (9 === q) {
                            if (p = c.getElementById(d), !p || !p.parentNode) return f;
                            if (p.id === d) return f.push(p), f
                        } else {
                            if (c.ownerDocument && (p = c.ownerDocument.getElementById(d)) && Ba(c, p) && p.id === d) return f.push(p), f
                        } else {
                            if (b[2]) return ma.apply(f, c.getElementsByTagName(a)), f;
                            if ((d = b[3]) && x.getElementsByClassName && c.getElementsByClassName) return ma.apply(f, c.getElementsByClassName(d)), f
                        }
                if (x.qsa && (!Y || !Y.test(a))) {
                    if (p = b = P, d = c, k = 9 === q && a, 1 === q && "object" !== c.nodeName.toLowerCase()) {
                        q = n(a);
                        (b = c.getAttribute("id")) ? p = b.replace(ya, "\\$&") : c.setAttribute("id", p);
                        p = "[id='" + p + "'] ";
                        for (d = q.length; d--;) q[d] = p + t(q[d]);
                        d = ka.test(a) && c.parentNode || c;
                        k = q.join(",")
                    }
                    if (k) try {
                        return ma.apply(f, d.querySelectorAll(k)), f
                    } catch (g) {} finally {
                        b || c.removeAttribute("id")
                    }
                }
            }
            var A;
            a: {
                a = a.replace(aa, "$1");
                var v, m;
                p = n(a);
                if (!e && 1 === p.length) {
                    if (A = p[0] = p[0].slice(0), 2 < A.length && "ID" === (v = A[0]).type && x.getById && 9 === c.nodeType && G && K.relative[A[1].type]) {
                        if (c = (K.find.ID(v.matches[0].replace(na, oa), c) || [])[0], !c) {
                            A = f;
                            break a
                        }
                        a = a.slice(A.shift().value.length)
                    }
                    for (q = ia.needsContext.test(a) ? 0 : A.length; q-- && (v = A[q], !K.relative[b = v.type]);)
                        if ((m = K.find[b]) && (e = m(v.matches[0].replace(na, oa), ka.test(A[0].type) && c.parentNode || c))) {
                            if (A.splice(q, 1), a = e.length && t(A), !a) {
                                A = (ma.apply(f, e), f);
                                break a
                            }
                            break
                        }
                }
                A = (M(a, p)(e, c, !G, f, ka.test(a)), f)
            }
            return A
        }

        function b() {
            function a(f, e) {
                return c.push(f += " ") > K.cacheLength && delete a[c.shift()], a[f] = e
            }
            var c = [];
            return a
        }

        function d(a) {
            return a[P] = !0, a
        }

        function k(a) {
            var c = B.createElement("div");
            try {
                return !!a(c)
            } catch (f) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        }

        function g(a, c) {
            for (var f = a.split("|"), e = a.length; e--;) K.attrHandle[f[e]] = c
        }

        function m(a, c) {
            var f = c && a,
                e = f && 1 === a.nodeType && 1 === c.nodeType && (~c.sourceIndex || Aa) - (~a.sourceIndex || Aa);
            if (e) return e;
            if (f)
                for (; f = f.nextSibling;)
                    if (f === c) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (c) {
                return "input" === c.nodeName.toLowerCase() && c.type === a
            }
        }

        function r(a) {
            return function (c) {
                var f = c.nodeName.toLowerCase();
                return ("input" === f || "button" === f) && c.type === a
            }
        }

        function l(a) {
            return d(function (c) {
                return c = +c, d(function (f, e) {
                    for (var b, p = a([], f.length, c), d = p.length; d--;) f[b = p[d]] && (f[b] = !(e[b] = f[b]))
                })
            })
        }

        function Q() {}

        function n(a, c) {
            var e, b, p, d, q, k, g;
            if (q = za[a + " "]) return c ? 0 : q.slice(0);
            q = a;
            k = [];
            for (g = K.preFilter; q;) {
                e && !(b = ra.exec(q)) || (b && (q = q.slice(b[0].length) || q), k.push(p = []));
                e = !1;
                (b = sa.exec(q)) && (e = b.shift(), p.push({
                    value: e,
                    type: b[0].replace(aa, " ")
                }), q = q.slice(e.length));
                for (d in K.filter)!(b = ia[d].exec(q)) || g[d] && !(b = g[d](b)) || (e = b.shift(), p.push({
                    value: e,
                    type: d,
                    matches: b
                }), q = q.slice(e.length));
                if (!e) break
            }
            return c ? q.length : q ? f.error(a) : za(a, k).slice(0)
        }

        function t(a) {
            for (var c = 0, f = a.length, e = ""; f > c; c++) e += a[c].value;
            return e
        }

        function u(a, c, f) {
            var e = c.dir,
                b = f && "parentNode" === e,
                p = Cb++;
            return c.first ? function (c, f, p) {
                for (; c = c[e];)
                    if (1 === c.nodeType || b) return a(c, f, p)
            } : function (c, f, d) {
                var q, k, g, A = I + " " + p;
                if (d)
                    for (; c = c[e];) {
                        if ((1 === c.nodeType || b) && a(c, f, d)) return !0
                    } else
                        for (; c = c[e];)
                            if (1 === c.nodeType || b)
                                if (g = c[P] || (c[P] = {}), (k = g[e]) && k[0] === A) {
                                    if (!0 === (q = k[1]) || q === y) return !0 === q
                                } else if (k = g[e] = [A], k[1] = a(c, f, d) || y, !0 === k[1]) return !0
            }
        }

        function C(a) {
            return 1 < a.length ? function (c, f, e) {
                for (var b = a.length; b--;)
                    if (!a[b](c, f, e)) return !1;
                return !0
            } : a[0]
        }

        function s(a, c, f, e, b) {
            for (var p, d = [], q = 0, k = a.length, g = null != c; k > q; q++)(p = a[q]) && (!f || f(p, e, b)) && (d.push(p), g && c.push(q));
            return d
        }

        function W(a, c, e, b, p, k) {
            return b && !b[P] && (b = W(b)), p && !p[P] && (p = W(p, k)), d(function (d, q, k, g) {
                var A, v, m = [],
                    h = [],
                    r = q.length,
                    L;
                if (!(L = d)) {
                    L = c || "*";
                    for (var l = k.nodeType ? [k] : k, Q = [], n = 0, Ea = l.length; Ea > n; n++) f(L, l[n], Q);
                    L = Q
                }
                L = !a || !d && c ? L : s(L, m, a, k, g);
                l = e ? p || (d ? a : r || b) ? [] : q : L;
                if (e && e(L, l, k, g), b)
                    for (A = s(l, h), b(A, [], k, g), k = A.length; k--;)(v = A[k]) && (l[h[k]] = !(L[h[k]] = v));
                if (d) {
                    if (p || a) {
                        if (p) {
                            A = [];
                            for (k = l.length; k--;)(v = l[k]) && A.push(L[k] = v);
                            p(null, l = [], A, g)
                        }
                        for (k = l.length; k--;)(v = l[k]) && -1 < (A = p ? qa.call(d, v) : m[k]) && (d[A] = !(q[A] = v))
                    }
                } else l = s(l === q ? l.splice(r, l.length) : l), p ? p(null, q, l, g) : ma.apply(q, l)
            })
        }

        function E(a) {
            var c, f, e, b = a.length,
                p = K.relative[a[0].type];
            f = p || K.relative[" "];
            for (var d = p ? 1 : 0, q = u(function (a) {
                    return a === c
                }, f, !0), k = u(function (a) {
                    return -1 < qa.call(c, a)
                }, f, !0), g = [
                    function (a, f, e) {
                        return !p && (e || f !== F) || ((c = f).nodeType ? q(a, f, e) : k(a, f, e))
                    }
                ]; b > d; d++)
                if (f = K.relative[a[d].type]) g = [u(C(g), f)];
                else {
                    if (f = K.filter[a[d].type].apply(null, a[d].matches), f[P]) {
                        for (e = ++d; b > e && !K.relative[a[e].type]; e++);
                        return W(1 < d && C(g), 1 < d && t(a.slice(0, d - 1).concat({
                            value: " " === a[d - 2].type ? "*" : ""
                        })).replace(aa, "$1"), f, e > d && E(a.slice(d, e)), b > e && E(a = a.slice(e)), b > e && t(a))
                    }
                    g.push(f)
                }
            return C(g)
        }

        function R(a, c) {
            var e = 0,
                b = 0 < c.length,
                p = 0 < a.length,
                k = function (d, q, k, g, A) {
                    var v, m, h = [],
                        L = 0,
                        r = "0",
                        l = d && [],
                        Q = null != A,
                        n = F,
                        Ea = d || p && K.find.TAG("*", A && q.parentNode || q),
                        t = I += null == n ? 1 : Math.random() || 0.1;
                    for (Q && (F = q !== B && q, y = e); null != (A = Ea[r]); r++) {
                        if (p && A) {
                            for (v = 0; m = a[v++];)
                                if (m(A, q, k)) {
                                    g.push(A);
                                    break
                                }
                            Q && (I = t, y = ++e)
                        }
                        b && ((A = !m && A) && L--, d && l.push(A))
                    }
                    if (L += r, b && r !== L) {
                        for (v = 0; m = c[v++];) m(l, h, q, k);
                        if (d) {
                            if (0 < L)
                                for (; r--;) l[r] || h[r] || (h[r] = da.call(g));
                            h = s(h)
                        }
                        ma.apply(g, h);
                        Q && !d && 0 < h.length && 1 < L + c.length && f.uniqueSort(g)
                    }
                    return Q && (I = t, F = n), l
                };
            return b ? d(k) : k
        }
        var S, x, y, K, z, D, M, F, N, O, B, w, G, Y, H, Z, Ba, P = "sizzle" + -new Date,
            J = a.document,
            I = 0,
            Cb = 0,
            X = b(),
            za = b(),
            T = b(),
            ha = !1,
            V = function (a, c) {
                return a === c ? (ha = !0, 0) : 0
            }, U = typeof c,
            Aa = -2147483648,
            ca = {}.hasOwnProperty,
            pa = [],
            da = pa.pop,
            ja = pa.push,
            ma = pa.push,
            ba = pa.slice,
            qa = pa.indexOf || function (a) {
                for (var c = 0, f = this.length; f > c; c++)
                    if (this[c] === a) return c;
                return -1
            }, ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            ga = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ea + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            fa = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)",
            aa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            ra = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ka = /[\x20\t\r\n\f]*[+~]/,
            ta = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            Ga = RegExp(fa),
            ua = RegExp("^" + ea + "$"),
            ia = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ga),
                PSEUDO: RegExp("^" + fa),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            }, la = /^[^{]+\{\s*\[native \w/,
            va = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wa = /^(?:input|select|textarea|button)$/i,
            xa = /^h\d$/i,
            ya = /'|\\/g,
            na = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            oa = function (a, c, f) {
                a = "0x" + c - 65536;
                return a !== a || f ? c : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
            };
        try {
            ma.apply(pa = ba.call(J.childNodes), J.childNodes), pa[J.childNodes.length].nodeType
        } catch (Ca) {
            ma = {
                apply: pa.length ? function (a, c) {
                    ja.apply(a, ba.call(c))
                } : function (a, c) {
                    for (var f = a.length, e = 0; a[f++] = c[e++];);
                    a.length = f - 1
                }
            }
        }
        D = f.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        x = f.support = {};
        O = f.setDocument = function (a) {
            var f = a ? a.ownerDocument || a : J;
            a = f.defaultView;
            return f !== B && 9 === f.nodeType && f.documentElement ? (B = f, w = f.documentElement, G = !D(f), a && a.attachEvent && a !== a.top && a.attachEvent("onbeforeunload", function () {
                O()
            }), x.attributes = k(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = k(function (a) {
                return a.appendChild(f.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = k(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = k(function (a) {
                return w.appendChild(a).id = P, !f.getElementsByName || !f.getElementsByName(P).length
            }), x.getById ? (K.find.ID = function (a, c) {
                if (typeof c.getElementById !== U && G) {
                    var f = c.getElementById(a);
                    return f && f.parentNode ? [f] : []
                }
            }, K.filter.ID = function (a) {
                var c = a.replace(na, oa);
                return function (a) {
                    return a.getAttribute("id") === c
                }
            }) : (delete K.find.ID, K.filter.ID = function (a) {
                var c = a.replace(na, oa);
                return function (a) {
                    return (a = typeof a.getAttributeNode !== U && a.getAttributeNode("id")) && a.value === c
                }
            }), K.find.TAG = x.getElementsByTagName ? function (a, f) {
                return typeof f.getElementsByTagName !== U ? f.getElementsByTagName(a) : c
            } : function (a, c) {
                var f, e = [],
                    b = 0,
                    p = c.getElementsByTagName(a);
                if ("*" === a) {
                    for (; f = p[b++];) 1 === f.nodeType && e.push(f);
                    return e
                }
                return p
            }, K.find.CLASS = x.getElementsByClassName && function (a, f) {
                return typeof f.getElementsByClassName !== U && G ? f.getElementsByClassName(a) : c
            }, H = [], Y = [], (x.qsa = la.test(f.querySelectorAll)) && (k(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || Y.push(":checked")
            }), k(function (a) {
                var c = f.createElement("input");
                c.setAttribute("type", "hidden");
                a.appendChild(c).setAttribute("t", "");
                a.querySelectorAll("[t^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                Y.push(",.*:")
            })), (x.matchesSelector = la.test(Z = w.webkitMatchesSelector || w.mozMatchesSelector || w.oMatchesSelector || w.msMatchesSelector)) && k(function (a) {
                x.disconnectedMatch = Z.call(a, "div");
                Z.call(a, "[s!='']:x");
                H.push("!=", fa)
            }), Y = Y.length && RegExp(Y.join("|")), H = H.length && RegExp(H.join("|")), Ba = la.test(w.contains) || w.compareDocumentPosition ? function (a, c) {
                var f = 9 === a.nodeType ? a.documentElement : a,
                    e = c && c.parentNode;
                return a === e || !(!e || 1 !== e.nodeType || !(f.contains ? f.contains(e) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(e)))
            } : function (a, c) {
                if (c)
                    for (; c = c.parentNode;)
                        if (c === a) return !0;
                return !1
            }, V = w.compareDocumentPosition ? function (a, c) {
                if (a === c) return ha = !0, 0;
                var e = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return e ? 1 & e || !x.sortDetached && c.compareDocumentPosition(a) === e ? a === f || Ba(J, a) ? -1 : c === f || Ba(J, c) ? 1 : N ? qa.call(N, a) - qa.call(N, c) : 0 : 4 & e ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function (a, c) {
                var e, b = 0;
                e = a.parentNode;
                var p = c.parentNode,
                    d = [a],
                    q = [c];
                if (a === c) return ha = !0, 0;
                if (!e || !p) return a === f ? -1 : c === f ? 1 : e ? -1 : p ? 1 : N ? qa.call(N, a) - qa.call(N, c) : 0;
                if (e === p) return m(a, c);
                for (e = a; e = e.parentNode;) d.unshift(e);
                for (e = c; e = e.parentNode;) q.unshift(e);
                for (; d[b] === q[b];) b++;
                return b ? m(d[b], q[b]) : d[b] === J ? -1 : q[b] === J ? 1 : 0
            }, f) : B
        };
        f.matches = function (a, c) {
            return f(a, null, null, c)
        };
        f.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== B && O(a), c = c.replace(ta, "='$1']"), x.matchesSelector && G && !(H && H.test(c) || Y && Y.test(c))) try {
                var e = Z.call(a, c);
                if (e || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return e
            } catch (b) {}
            return 0 < f(c, B, null, [a]).length
        };
        f.contains = function (a, c) {
            return (a.ownerDocument || a) !== B && O(a), Ba(a, c)
        };
        f.attr = function (a, f) {
            (a.ownerDocument || a) !== B && O(a);
            var e = K.attrHandle[f.toLowerCase()],
                e = e && ca.call(K.attrHandle, f.toLowerCase()) ? e(a, f, !G) : c;
            return e === c ? x.attributes || !G ? a.getAttribute(f) : (e = a.getAttributeNode(f)) && e.specified ? e.value : null : e
        };
        f.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        f.uniqueSort = function (a) {
            var c, f = [],
                e = 0,
                b = 0;
            if (ha = !x.detectDuplicates, N = !x.sortStable && a.slice(0), a.sort(V), ha) {
                for (; c = a[b++];) c === a[b] && (e = f.push(b));
                for (; e--;) a.splice(f[e], 1)
            }
            return a
        };
        z = f.getText = function (a) {
            var c, f = "",
                e = 0;
            if (c = a.nodeType)
                if (1 === c || 9 === c || 11 === c) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) f += z(a)
                } else {
                    if (3 === c || 4 === c) return a.nodeValue
                } else
                    for (; c = a[e]; e++) f += z(c);
            return f
        };
        K = f.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ia,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(na, oa), a[3] = (a[4] || a[5] || "").replace(na, oa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || f.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && f.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var f, e = !a[5] && a[2];
                    return ia.CHILD.test(a[0]) ? null : (a[3] && a[4] !== c ? a[2] = a[4] : e && Ga.test(e) && (f = n(e, !0)) && (f = e.indexOf(")", e.length - f) - e.length) && (a[0] = a[0].slice(0, f), a[2] = e.slice(0, f)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var c = a.replace(na, oa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function (a) {
                    var c = X[a + " "];
                    return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && X(a, function (a) {
                        return c.test("string" == typeof a.className && a.className || typeof a.getAttribute !== U && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, e) {
                    return function (b) {
                        b = f.attr(b, a);
                        return null == b ? "!=" === c : c ? (b += "", "=" === c ? b === e : "!=" === c ? b !== e : "^=" === c ? e && 0 === b.indexOf(e) : "*=" === c ? e && -1 < b.indexOf(e) : "$=" === c ? e && b.slice(-e.length) === e : "~=" === c ? -1 < (" " + b + " ").indexOf(e) : "|=" === c ? b === e || b.slice(0, e.length + 1) === e + "-" : !1) : !0
                    }
                },
                CHILD: function (a, c, f, e, b) {
                    var p = "nth" !== a.slice(0, 3),
                        d = "last" !== a.slice(-4),
                        q = "of-type" === c;
                    return 1 === e && 0 === b ? function (a) {
                        return !!a.parentNode
                    } : function (c, f, k) {
                        var g, A, v, m, h;
                        f = p !== d ? "nextSibling" : "previousSibling";
                        var L = c.parentNode,
                            r = q && c.nodeName.toLowerCase();
                        k = !k && !q;
                        if (L) {
                            if (p) {
                                for (; f;) {
                                    for (A = c; A = A[f];)
                                        if (q ? A.nodeName.toLowerCase() === r : 1 === A.nodeType) return !1;
                                    h = f = "only" === a && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [d ? L.firstChild : L.lastChild], d && k)
                                for (k = L[P] || (L[P] = {}), g = k[a] || [], m = g[0] === I && g[1], v = g[0] === I && g[2], A = m && L.childNodes[m]; A = ++m && A && A[f] || (v = m = 0) || h.pop();) {
                                    if (1 === A.nodeType && ++v && A === c) {
                                        k[a] = [I, m, v];
                                        break
                                    }
                                } else if (k && (g = (c[P] || (c[P] = {}))[a]) && g[0] === I) v = g[1];
                                else
                                    for (;
                                        (A = ++m && A && A[f] || (v = m = 0) || h.pop()) && ((q ? A.nodeName.toLowerCase() !== r : 1 !== A.nodeType) || !++v || (k && ((A[P] || (A[P] = {}))[a] = [I, v]), A !== c)););
                            return v -= b, v === e || 0 === v % e && 0 <= v / e
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, b = K.pseudos[a] || K.setFilters[a.toLowerCase()] || f.error("unsupported pseudo: " + a);
                    return b[P] ? b(c) : 1 < b.length ? (e = [a, a, "", c], K.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, f) {
                        for (var e, p = b(a, c), d = p.length; d--;) e = qa.call(a, p[d]), a[e] = !(f[e] = p[d])
                    }) : function (a) {
                        return b(a, 0, e)
                    }) : b
                }
            },
            pseudos: {
                not: d(function (a) {
                    var c = [],
                        f = [],
                        e = M(a.replace(aa, "$1"));
                    return e[P] ? d(function (a, c, f, b) {
                        var p;
                        f = e(a, null, b, []);
                        for (b = a.length; b--;)(p = f[b]) && (a[b] = !(c[b] = p))
                    }) : function (a, b, p) {
                        return c[0] = a, e(c, null, p, f), !f.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return 0 < f(a, c).length
                    }
                }),
                contains: d(function (a) {
                    return function (c) {
                        return -1 < (c.textContent || c.innerText || z(c)).indexOf(a)
                    }
                }),
                lang: d(function (a) {
                    return ua.test(a || "") || f.error("unsupported lang: " +
                        a), a = a.replace(na, oa).toLowerCase(),
                    function (c) {
                        var f;
                        do
                            if (f = G ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return f = f.toLowerCase(), f === a || 0 === f.indexOf(a + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
                }),
                target: function (c) {
                    var f = a.location && a.location.hash;
                    return f && f.slice(1) === c.id
                },
                root: function (a) {
                    return a === w
                },
                focus: function (a) {
                    return a === B.activeElement && (!B.hasFocus || B.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return !1 === a.disabled
                },
                disabled: function (a) {
                    return !0 === a.disabled
                },
                checked: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && !! a.checked || "option" === c && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function (a) {
                    return !K.pseudos.empty(a)
                },
                header: function (a) {
                    return xa.test(a.nodeName)
                },
                input: function (a) {
                    return wa.test(a.nodeName)
                },
                button: function (a) {
                    var c = a.nodeName.toLowerCase();
                    return "input" === c && "button" === a.type || "button" === c
                },
                text: function (a) {
                    var c;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (c = a.getAttribute("type")) || c.toLowerCase() === a.type)
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (a, c) {
                    return [c - 1]
                }),
                eq: l(function (a, c, f) {
                    return [0 > f ? f + c : f]
                }),
                even: l(function (a, c) {
                    for (var f = 0; c > f; f += 2) a.push(f);
                    return a
                }),
                odd: l(function (a, c) {
                    for (var f = 1; c > f; f += 2) a.push(f);
                    return a
                }),
                lt: l(function (a, c, f) {
                    for (c = 0 > f ? f + c : f; 0 <= --c;) a.push(c);
                    return a
                }),
                gt: l(function (a, c, f) {
                    for (f = 0 > f ? f + c : f; c > ++f;) a.push(f);
                    return a
                })
            }
        };
        K.pseudos.nth = K.pseudos.eq;
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) K.pseudos[S] = h(S);
        for (S in {
            submit: !0,
            reset: !0
        }) K.pseudos[S] = r(S);
        Q.prototype = K.filters = K.pseudos;
        K.setFilters = new Q;
        M = f.compile = function (a, c) {
            var f, e = [],
                b = [],
                p = T[a + " "];
            if (!p) {
                c || (c = n(a));
                for (f = c.length; f--;) p = E(c[f]), p[P] ? e.push(p) : b.push(p);
                p = T(a, R(b, e))
            }
            return p
        };
        x.sortStable = P.split("").sort(V).join("") === P;
        x.detectDuplicates = ha;
        O();
        x.sortDetached = k(function (a) {
            return 1 & a.compareDocumentPosition(B.createElement("div"))
        });
        k(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, f, e) {
            return e ? c : a.getAttribute(f, "type" === f.toLowerCase() ? 1 : 2)
        });
        x.attributes && k(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || g("value", function (a, f, e) {
            return e || "input" !== a.nodeName.toLowerCase() ? c : a.defaultValue
        });
        k(function (a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, f, e) {
            var b;
            return e ? c : (b = a.getAttributeNode(f)) && b.specified ? b.value : !0 === a[f] ? f.toLowerCase() : null
        });
        e.find = f;
        e.expr = f.selectors;
        e.expr[":"] = e.expr.pseudos;
        e.unique = f.uniqueSort;
        e.text = f.getText;
        e.isXMLDoc = f.isXML;
        e.contains = f.contains
    })(b);
    var Na = {};
    e.Callbacks = function (a) {
        a = "string" == typeof a ? Na[a] || g(a) : e.extend({}, a);
        var c, f, b, q, k, v, m = [],
            h = !a.once && [],
            r = function (e) {
                c = a.memory && e;
                f = !0;
                v = q || 0;
                q = 0;
                k = m.length;
                for (b = !0; m && k > v; v++)
                    if (!1 === m[v].apply(e[0], e[1]) && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1;
                m && (h ? h.length && r(h.shift()) : c ? m = [] : l.disable())
            }, l = {
                add: function () {
                    if (m) {
                        var f = m.length;
                        (function Bb(c) {
                            e.each(c, function (c, f) {
                                var b = e.type(f);
                                "function" === b ? a.unique && l.has(f) || m.push(f) : f && f.length && "string" !== b && Bb(f)
                            })
                        })(arguments);
                        b ? k = m.length : c && (q = f, r(c))
                    }
                    return this
                },
                remove: function () {
                    return m && e.each(arguments, function (a, c) {
                        for (var f; - 1 < (f = e.inArray(c, m, f));) m.splice(f, 1), b && (k >= f && k--, v >= f && v--)
                    }), this
                },
                has: function (a) {
                    return a ? -1 < e.inArray(a, m) : !(!m || !m.length)
                },
                empty: function () {
                    return m = [], k = 0, this
                },
                disable: function () {
                    return m = h = c = d, this
                },
                disabled: function () {
                    return !m
                },
                lock: function () {
                    return h = d, c || l.disable(), this
                },
                locked: function () {
                    return !h
                },
                fireWith: function (a, c) {
                    return !m || f && !h || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? h.push(c) : r(c)), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!f
                }
            };
        return l
    };
    e.extend({
        Deferred: function (a) {
            var c = [
                ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory")]
            ],
                f = "pending",
                b = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return d.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return e.Deferred(function (f) {
                            e.each(c, function (c, k) {
                                var g = k[0],
                                    m = e.isFunction(a[c]) && a[c];
                                d[k[1]](function () {
                                    var a = m && m.apply(this, arguments);
                                    a && e.isFunction(a.promise) ? a.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[g + "With"](this === b ? f.promise() : this, m ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? e.extend(a, b) : b
                    }
                }, d = {};
            return b.pipe = b.then, e.each(c, function (a, e) {
                var k = e[2],
                    g = e[3];
                b[e[1]] = k.add;
                g && k.add(function () {
                    f = g
                }, c[1 ^ a][2].disable, c[2][2].lock);
                d[e[0]] = function () {
                    return d[e[0] + "With"](this === d ? b : this, arguments), this
                };
                d[e[0] + "With"] = k.fireWith
            }), b.promise(d), a && a.call(d, d), d
        },
        when: function (a) {
            var c = 0,
                f = ja.call(arguments),
                b = f.length,
                d = 1 !== b || a && e.isFunction(a.promise) ? b : 0,
                k = 1 === d ? a : e.Deferred(),
                g = function (a, c, f) {
                    return function (e) {
                        c[a] = this;
                        f[a] = 1 < arguments.length ? ja.call(arguments) : e;
                        f === m ? k.notifyWith(c, f) : --d || k.resolveWith(c, f)
                    }
                }, m, h, r;
            if (1 < b)
                for (m = Array(b), h = Array(b), r = Array(b); b > c; c++) f[c] && e.isFunction(f[c].promise) ? f[c].promise().done(g(c, r, f)).fail(k.reject).progress(g(c, h, m)) : --d;
            return d || k.resolveWith(r, f), k.promise()
        }
    });
    e.support = function (a) {
        var c = w.createElement("input"),
            f = w.createDocumentFragment(),
            d = w.createElement("div"),
            q = w.createElement("select"),
            k = q.appendChild(w.createElement("option"));
        return c.type ? (c.type = "checkbox", a.checkOn = "" !== c.value, a.optSelected = k.selected, a.reliableMarginRight = !0, a.boxSizingReliable = !0, a.pixelPosition = !1, c.checked = !0, a.noCloneChecked = c.cloneNode(!0).checked, q.disabled = !0, a.optDisabled = !k.disabled, c = w.createElement("input"), c.value = "t", c.type = "radio", a.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), f.appendChild(c), a.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, a.focusinBubbles = "onfocusin" in b, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = "content-box" === d.style.backgroundClip, e(function () {
            var c, f, q = w.getElementsByTagName("body")[0];
            q && (c = w.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", q.appendChild(c).appendChild(d), d.innerHTML = "", d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.swap(q, null != q.style.zoom ? {
                zoom: 1
            } : {}, function () {
                a.boxSizing = 4 === d.offsetWidth
            }), b.getComputedStyle && (a.pixelPosition = "1%" !== (b.getComputedStyle(d, null) || {}).top, a.boxSizingReliable = "4px" === (b.getComputedStyle(d, null) || {
                width: "4px"
            }).width, f = d.appendChild(w.createElement("div")), f.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", f.style.marginRight = f.style.width = "0", d.style.width = "1px", a.reliableMarginRight = !parseFloat((b.getComputedStyle(f, null) || {}).marginRight)), q.removeChild(c))
        }), a) : a
    }({});
    var I, F, nb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mb = /([A-Z])/g;
    l.uid = 1;
    l.accepts = function (a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    };
    l.prototype = {
        key: function (a) {
            if (!l.accepts(a)) return 0;
            var c = {}, f = a[this.expando];
            if (!f) {
                f = l.uid++;
                try {
                    c[this.expando] = {
                        value: f
                    }, Object.defineProperties(a, c)
                } catch (b) {
                    c[this.expando] = f, e.extend(a, c)
                }
            }
            return this.cache[f] || (this.cache[f] = {}), f
        },
        set: function (a, c, f) {
            var b;
            a = this.key(a);
            var d = this.cache[a];
            if ("string" == typeof c) d[c] = f;
            else if (e.isEmptyObject(d)) e.extend(this.cache[a], c);
            else
                for (b in c) d[b] = c[b];
            return d
        },
        get: function (a, c) {
            var f = this.cache[this.key(a)];
            return c === d ? f : f[c]
        },
        access: function (a, c, f) {
            var b;
            return c === d || c && "string" == typeof c && f === d ? (b = this.get(a, c), b !== d ? b : this.get(a, e.camelCase(c))) : (this.set(a, c, f), f !== d ? f : c)
        },
        remove: function (a, c) {
            var f, b, q = this.key(a),
                k = this.cache[q];
            if (c === d) this.cache[q] = {};
            else
                for (e.isArray(c) ? b = c.concat(c.map(e.camelCase)) : (f = e.camelCase(c), c in k ? b = [c, f] : (b = f, b = b in k ? [b] : b.match(U) || [])), f = b.length; f--;) delete k[b[f]]
        },
        hasData: function (a) {
            return !e.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    I = new l;
    F = new l;
    e.extend({
        acceptData: l.accepts,
        hasData: function (a) {
            return I.hasData(a) || F.hasData(a)
        },
        data: function (a, c, f) {
            return I.access(a, c, f)
        },
        removeData: function (a, c) {
            I.remove(a, c)
        },
        _data: function (a, c, f) {
            return F.access(a, c, f)
        },
        _removeData: function (a, c) {
            F.remove(a, c)
        }
    });
    e.fn.extend({
        data: function (a, c) {
            var f, b, q = this[0],
                k = 0,
                g = null;
            if (a === d) {
                if (this.length && (g = I.get(q), 1 === q.nodeType && !F.get(q, "hasDataAttrs"))) {
                    for (f = q.attributes; f.length > k; k++) b = f[k].name, 0 === b.indexOf("data-") && (b = e.camelCase(b.slice(5)), n(q, b, g[b]));
                    F.set(q, "hasDataAttrs", !0)
                }
                return g
            }
            return "object" == typeof a ? this.each(function () {
                I.set(this, a)
            }) : e.access(this, function (c) {
                var f, b = e.camelCase(a);
                if (q && c === d) {
                    if ((f = I.get(q, a), f !== d) || (f = I.get(q, b), f !== d) || (f = n(q, b, d), f !== d)) return f
                } else this.each(function () {
                    var f = I.get(this, b);
                    I.set(this, b, c); - 1 !== a.indexOf("-") && f !== d && I.set(this, a, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                I.remove(this, a)
            })
        }
    });
    e.extend({
        queue: function (a, c, f) {
            var b;
            return a ? (c = (c || "fx") + "queue", b = F.get(a, c), f && (!b || e.isArray(f) ? b = F.access(a, c, e.makeArray(f)) : b.push(f)), b || []) : d
        },
        dequeue: function (a, c) {
            c = c || "fx";
            var f = e.queue(a, c),
                b = f.length,
                d = f.shift(),
                k = e._queueHooks(a, c),
                g = function () {
                    e.dequeue(a, c)
                };
            "inprogress" === d && (d = f.shift(), b--);
            d && ("fx" === c && f.unshift("inprogress"), delete k.stop, d.call(a, g, k));
            !b && k && k.empty.fire()
        },
        _queueHooks: function (a, c) {
            var f = c + "queueHooks";
            return F.get(a, f) || F.access(a, f, {
                empty: e.Callbacks("once memory").add(function () {
                    F.remove(a, [c + "queue", f])
                })
            })
        }
    });
    e.fn.extend({
        queue: function (a, c) {
            var f = 2;
            return "string" != typeof a && (c = a, a = "fx", f--), f > arguments.length ? e.queue(this[0], a) : c === d ? this : this.each(function () {
                var f = e.queue(this, a, c);
                e._queueHooks(this, a);
                "fx" === a && "inprogress" !== f[0] && e.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                e.dequeue(this, a)
            })
        },
        delay: function (a, c) {
            return a = e.fx ? e.fx.speeds[a] || a : a, c = c || "fx", this.queue(c, function (c, e) {
                var b = setTimeout(c, a);
                e.stop = function () {
                    clearTimeout(b)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var f, b = 1,
                q = e.Deferred(),
                k = this,
                g = this.length,
                m = function () {
                    --b || q.resolveWith(k, [k])
                };
            "string" != typeof a && (c = a, a = d);
            for (a = a || "fx"; g--;)(f = F.get(k[g], a + "queueHooks")) && f.empty && (b++, f.empty.add(m));
            return m(), q.promise(c)
        }
    });
    var Va, Ja = /[\t\r\n\f]/g,
        Db = /\r/g,
        Eb = /^(?:input|select|textarea|button)$/i;
    e.fn.extend({
        attr: function (a, c) {
            return e.access(this, e.attr, a, c, 1 < arguments.length)
        },
        removeAttr: function (a) {
            return this.each(function () {
                e.removeAttr(this, a)
            })
        },
        prop: function (a, c) {
            return e.access(this, e.prop, a, c, 1 < arguments.length)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[e.propFix[a] || a]
            })
        },
        addClass: function (a) {
            var c, f, b, d, k, g = 0,
                m = this.length;
            c = "string" == typeof a && a;
            if (e.isFunction(a)) return this.each(function (c) {
                e(this).addClass(a.call(this, c, this.className))
            });
            if (c)
                for (c = (a || "").match(U) || []; m > g; g++)
                    if (f = this[g], b = 1 === f.nodeType && (f.className ? (" " + f.className + " ").replace(Ja, " ") : " ")) {
                        for (k = 0; d = c[k++];) 0 > b.indexOf(" " + d + " ") && (b += d + " ");
                        f.className = e.trim(b)
                    }
            return this
        },
        removeClass: function (a) {
            var c, f, b, d, k, g = 0,
                m = this.length;
            c = 0 === arguments.length || "string" == typeof a && a;
            if (e.isFunction(a)) return this.each(function (c) {
                e(this).removeClass(a.call(this, c, this.className))
            });
            if (c)
                for (c = (a || "").match(U) || []; m > g; g++)
                    if (f = this[g], b = 1 === f.nodeType && (f.className ? (" " + f.className + " ").replace(Ja, " ") : "")) {
                        for (k = 0; d = c[k++];)
                            for (; 0 <= b.indexOf(" " + d + " ");) b = b.replace(" " + d + " ", " ");
                        f.className = a ? e.trim(b) : ""
                    }
            return this
        },
        toggleClass: function (a, c) {
            var f = typeof a;
            return "boolean" == typeof c && "string" === f ? c ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function (f) {
                e(this).toggleClass(a.call(this, f, this.className, c), c)
            }) : this.each(function () {
                if ("string" === f)
                    for (var c, b = 0, d = e(this), k = a.match(U) || []; c = k[b++];) d.hasClass(c) ? d.removeClass(c) : d.addClass(c);
                else(f === la || "boolean" === f) && (this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : F.get(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            a = " " + a + " ";
            for (var c = 0, f = this.length; f > c; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Ja, " ").indexOf(a)) return !0;
            return !1
        },
        val: function (a) {
            var c, f, b, k = this[0];
            if (arguments.length) return b = e.isFunction(a), this.each(function (f) {
                var k;
                1 === this.nodeType && (k = b ? a.call(this, f, e(this).val()) : a, null == k ? k = "" : "number" == typeof k ? k += "" : e.isArray(k) && (k = e.map(k, function (a) {
                    return null == a ? "" : a + ""
                })), c = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, k, "value") !== d || (this.value = k))
            });
            if (k) return c = e.valHooks[k.type] || e.valHooks[k.nodeName.toLowerCase()], c && "get" in c && (f = c.get(k, "value")) !== d ? f : (f = k.value, "string" == typeof f ? f.replace(Db, "") : null == f ? "" : f)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var c = a.attributes.value;
                    return !c || c.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var c, f = a.options, b = a.selectedIndex, d = "select-one" === a.type || 0 > b, k = d ? null : [], g = d ? b + 1 : f.length, m = 0 > b ? g : d ? b : 0; g > m; m++)
                        if (c = f[m], !(!c.selected && m !== b || (e.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && e.nodeName(c.parentNode, "optgroup"))) {
                            if (a = e(c).val(), d) return a;
                            k.push(a)
                        }
                    return k
                },
                set: function (a, c) {
                    for (var f, b, d = a.options, k = e.makeArray(c), g = d.length; g--;) b = d[g], (b.selected = 0 <= e.inArray(e(b).val(), k)) && (f = !0);
                    return f || (a.selectedIndex = -1), k
                }
            }
        },
        attr: function (a, c, f) {
            var b, k, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === la ? e.prop(a, c, f) : (1 === g && e.isXMLDoc(a) || (c = c.toLowerCase(), b = e.attrHooks[c] || (e.expr.match.bool.test(c) ? Va : void 0)), f === d ? b && "get" in b && null !== (k = b.get(a, c)) ? k : (k = e.find.attr(a, c), null == k ? d : k) : null !== f ? b && "set" in b && (k = b.set(a, f, c)) !== d ? k : (a.setAttribute(c, f + ""), f) : (e.removeAttr(a, c), d))
        },
        removeAttr: function (a, c) {
            var f, b, d = 0,
                k = c && c.match(U);
            if (k && 1 === a.nodeType)
                for (; f = k[d++];) b = e.propFix[f] || f, e.expr.match.bool.test(f) && (a[b] = !1), a.removeAttribute(f)
        },
        attrHooks: {
            type: {
                set: function (a, c) {
                    if (!e.support.radioValue && "radio" === c && e.nodeName(a, "input")) {
                        var f = a.value;
                        return a.setAttribute("type", c), f && (a.value = f), c
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, c, f) {
            var b, k, g, m = a.nodeType;
            if (a && 3 !== m && 8 !== m && 2 !== m) return g = 1 !== m || !e.isXMLDoc(a), g && (c = e.propFix[c] || c, k = e.propHooks[c]), f !== d ? k && "set" in k && (b = k.set(a, f, c)) !== d ? b : a[c] = f : k && "get" in k && null !== (b = k.get(a, c)) ? b : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || Eb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    Va = {
        set: function (a, c, f) {
            return !1 === c ? e.removeAttr(a, f) : a.setAttribute(f, f), f
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var f = e.expr.attrHandle[c] || e.find.attr;
        e.expr.attrHandle[c] = function (a, c, b) {
            var k = e.expr.attrHandle[c];
            a = b ? d : (e.expr.attrHandle[c] = d) != f(a, c, b) ? c.toLowerCase() : null;
            return e.expr.attrHandle[c] = k, a
        }
    });
    e.support.optSelected || (e.propHooks.selected = {
        get: function (a) {
            a = a.parentNode;
            return a && (a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        e.propFix[this.toLowerCase()] = this
    });
    e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = {
            set: function (a, c) {
                return e.isArray(c) ? a.checked = 0 <= e.inArray(e(a).val(), c) : d
            }
        };
        e.support.checkOn || (e.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Fb = /^key/,
        Gb = /^(?:mouse|contextmenu)|click/,
        Wa = /^(?:focusinfocus|focusoutblur)$/,
        Xa = /^([^.]*)(?:\.(.+)|)$/;
    e.event = {
        global: {},
        add: function (a, c, f, b, k) {
            var g, m, h, r, l, n, Q, t, u, C;
            if (l = F.get(a)) {
                f.handler && (g = f, f = g.handler, k = g.selector);
                f.guid || (f.guid = e.guid++);
                (r = l.events) || (r = l.events = {});
                (m = l.handle) || (m = l.handle = function (a) {
                    return typeof e === la || a && e.event.triggered === a.type ? d : e.event.dispatch.apply(m.elem, arguments)
                }, m.elem = a);
                c = (c || "").match(U) || [""];
                for (l = c.length; l--;) h = Xa.exec(c[l]) || [], u = C = h[1], h = (h[2] || "").split(".").sort(), u && (Q = e.event.special[u] || {}, u = (k ? Q.delegateType : Q.bindType) || u, Q = e.event.special[u] || {}, n = e.extend({
                    type: u,
                    origType: C,
                    data: b,
                    handler: f,
                    guid: f.guid,
                    selector: k,
                    needsContext: k && e.expr.match.needsContext.test(k),
                    namespace: h.join(".")
                }, g), (t = r[u]) || (t = r[u] = [], t.delegateCount = 0, Q.setup && !1 !== Q.setup.call(a, b, h, m) || a.addEventListener && a.addEventListener(u, m, !1)), Q.add && (Q.add.call(a, n), n.handler.guid || (n.handler.guid = f.guid)), k ? t.splice(t.delegateCount++, 0, n) : t.push(n), e.event.global[u] = !0);
                a = null
            }
        },
        remove: function (a, c, f, b, d) {
            var k, g, m, h, r, l, n, t, u, C, s, W = F.hasData(a) && F.get(a);
            if (W && (h = W.events)) {
                c = (c || "").match(U) || [""];
                for (r = c.length; r--;)
                    if (m = Xa.exec(c[r]) || [], u = s = m[1], C = (m[2] || "").split(".").sort(), u) {
                        n = e.event.special[u] || {};
                        u = (b ? n.delegateType : n.bindType) || u;
                        t = h[u] || [];
                        m = m[2] && RegExp("(^|\\.)" + C.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (g = k = t.length; k--;) l = t[k], !d && s !== l.origType || f && f.guid !== l.guid || m && !m.test(l.namespace) || b && b !== l.selector && ("**" !== b || !l.selector) || (t.splice(k, 1), l.selector && t.delegateCount--, n.remove && n.remove.call(a, l));
                        g && !t.length && (n.teardown && !1 !== n.teardown.call(a, C, W.handle) || e.removeEvent(a, u, W.handle), delete h[u])
                    } else
                        for (u in h) e.event.remove(a, u + c[r], f, b, !0);
                e.isEmptyObject(h) && (delete W.handle, F.remove(a, "events"))
            }
        },
        trigger: function (a, c, f, k) {
            var g, m, h, r, l, n, u, t = [f || w],
                C = Ia.call(a, "type") ? a.type : a;
            g = Ia.call(a, "namespace") ? a.namespace.split(".") : [];
            if (m = h = f = f || w, 3 !== f.nodeType && 8 !== f.nodeType && !Wa.test(C + e.event.triggered) && (0 <= C.indexOf(".") && (g = C.split("."), C = g.shift(), g.sort()), l = 0 > C.indexOf(":") && "on" + C, a = a[e.expando] ? a : new e.Event(C, "object" == typeof a && a), a.isTrigger = k ? 2 : 3, a.namespace = g.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = d, a.target || (a.target = f), c = null == c ? [a] : e.makeArray(c, [a]), u = e.event.special[C] || {}, k || !u.trigger || !1 !== u.trigger.apply(f, c))) {
                if (!k && !u.noBubble && !e.isWindow(f)) {
                    r = u.delegateType || C;
                    for (Wa.test(r + C) || (m = m.parentNode); m; m = m.parentNode) t.push(m), h = m;
                    h === (f.ownerDocument || w) && t.push(h.defaultView || h.parentWindow || b)
                }
                for (g = 0;
                    (m = t[g++]) && !a.isPropagationStopped();) a.type = 1 < g ? r : u.bindType || C, (n = (F.get(m, "events") || {})[a.type] && F.get(m, "handle")) && n.apply(m, c), (n = l && m[l]) && e.acceptData(m) && n.apply && !1 === n.apply(m, c) && a.preventDefault();
                return a.type = C, k || a.isDefaultPrevented() || u._default && !1 !== u._default.apply(t.pop(), c) || !e.acceptData(f) || l && e.isFunction(f[C]) && !e.isWindow(f) && (h = f[l], h && (f[l] = null), e.event.triggered = C, f[C](), e.event.triggered = d, h && (f[l] = h)), a.result
            }
        },
        dispatch: function (a) {
            a = e.event.fix(a);
            var c, f, b, k, g, m = [],
                h = ja.call(arguments);
            c = (F.get(this, "events") || {})[a.type] || [];
            var r = e.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !r.preDispatch || !1 !== r.preDispatch.call(this, a)) {
                m = e.event.handlers.call(this, a, c);
                for (c = 0;
                    (k = m[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = k.elem, f = 0;
                        (g = k.handlers[f++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(g.namespace) || (a.handleObj = g, a.data = g.data, b = ((e.event.special[g.origType] || {}).handle || g.handler).apply(k.elem, h), b === d || !1 !== (a.result = b) || (a.preventDefault(), a.stopPropagation()));
                return r.postDispatch && r.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, c) {
            var f, b, k, g, m = [],
                h = c.delegateCount,
                r = a.target;
            if (h && r.nodeType && (!a.button || "click" !== a.type))
                for (; r !== this; r = r.parentNode || this)
                    if (!0 !== r.disabled || "click" !== a.type) {
                        b = [];
                        for (f = 0; h > f; f++) g = c[f], k = g.selector + " ", b[k] === d && (b[k] = g.needsContext ? 0 <= e(k, this).index(r) : e.find(k, this, null, [r]).length), b[k] && b.push(g);
                        b.length && m.push({
                            elem: r,
                            handlers: b
                        })
                    }
            return c.length > h && m.push({
                elem: this,
                handlers: c.slice(h)
            }), m
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (a, c) {
                return null == a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var f, e, b, k = c.button;
                return null == a.pageX && null != c.clientX && (f = a.target.ownerDocument || w, e = f.documentElement, b = f.body, a.pageX = c.clientX + (e && e.scrollLeft || b && b.scrollLeft || 0) - (e && e.clientLeft || b && b.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || b && b.scrollTop || 0) - (e && e.clientTop || b && b.clientTop || 0)), a.which || k === d || (a.which = 1 & k ? 1 : 2 & k ? 3 : 4 & k ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[e.expando]) return a;
            var c, f, b;
            c = a.type;
            var d = a,
                k = this.fixHooks[c];
            k || (this.fixHooks[c] = k = Gb.test(c) ? this.mouseHooks : Fb.test(c) ? this.keyHooks : {});
            b = k.props ? this.props.concat(k.props) : this.props;
            a = new e.Event(d);
            for (c = b.length; c--;) f = b[c], a[f] = d[f];
            return a.target || (a.target = w), 3 === a.target.nodeType && (a.target = a.target.parentNode), k.filter ? k.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== m() && this.focus ? (this.focus(), !1) : d
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === m() && this.blur ? (this.blur(), !1) : d
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && e.nodeName(this, "input") ? (this.click(), !1) : d
                },
                _default: function (a) {
                    return e.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== d && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, c, f, b) {
            a = e.extend(new e.Event, f, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            b ? e.event.trigger(a, null, c) : e.event.dispatch.call(c, a);
            a.isDefaultPrevented() && f.preventDefault()
        }
    };
    e.removeEvent = function (a, c, f) {
        a.removeEventListener && a.removeEventListener(c, f, !1)
    };
    e.Event = function (a, c) {
        return this instanceof e.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? s : k) : this.type = a, c && e.extend(this, c), this.timeStamp = a && a.timeStamp || e.now(), this[e.expando] = !0, d) : new e.Event(a, c)
    };
    e.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = s;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = s;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = s;
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, c) {
        e.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function (a) {
                var b, d = a.relatedTarget,
                    k = a.handleObj;
                return (!d || d !== this && !e.contains(this, d)) && (a.type = k.origType, b = k.handler.apply(this, arguments), a.type = c), b
            }
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, c) {
        var f = 0,
            b = function (a) {
                e.event.simulate(c, a.target, e.event.fix(a), !0)
            };
        e.event.special[c] = {
            setup: function () {
                0 === f++ && w.addEventListener(a, b, !0)
            },
            teardown: function () {
                0 === --f && w.removeEventListener(a, b, !0)
            }
        }
    });
    e.fn.extend({
        on: function (a, c, f, b, g) {
            var m, h;
            if ("object" == typeof a) {
                "string" != typeof c && (f = f || c, c = d);
                for (h in a) this.on(h, c, f, a[h], g);
                return this
            }
            if (null == f && null == b ? (b = c, f = c = d) : null == b && ("string" == typeof c ? (b = f, f = d) : (b = f, f = c, c = d)), !1 === b) b = k;
            else if (!b) return this;
            return 1 === g && (m = b, b = function (a) {
                return e().off(a), m.apply(this, arguments)
            }, b.guid = m.guid || (m.guid = e.guid++)), this.each(function () {
                e.event.add(this, a, b, f, c)
            })
        },
        one: function (a, c, f, e) {
            return this.on(a, c, f, e, 1)
        },
        off: function (a, c, f) {
            var b, g;
            if (a && a.preventDefault && a.handleObj) return b = a.handleObj, e(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), this;
            if ("object" == typeof a) {
                for (g in a) this.off(g, c, a[g]);
                return this
            }
            return (!1 === c || "function" == typeof c) && (f = c, c = d), !1 === f && (f = k), this.each(function () {
                e.event.remove(this, a, f, c)
            })
        },
        trigger: function (a, c) {
            return this.each(function () {
                e.event.trigger(a, c, this)
            })
        },
        triggerHandler: function (a, c) {
            var f = this[0];
            return f ? e.event.trigger(a, c, f, !0) : d
        }
    });
    var ob = /^.[^:#\[\.,]*$/,
        Hb = /^(?:parents|prev(?:Until|All))/,
        Ya = e.expr.match.needsContext,
        Ib = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function (a) {
            var c, f = [],
                b = this,
                d = b.length;
            if ("string" != typeof a) return this.pushStack(e(a).filter(function () {
                for (c = 0; d > c; c++)
                    if (e.contains(b[c], this)) return !0
            }));
            for (c = 0; d > c; c++) e.find(a, b[c], f);
            return f = this.pushStack(1 < d ? e.unique(f) : f), f.selector = this.selector ? this.selector + " " + a : a, f
        },
        has: function (a) {
            var c = e(a, this),
                f = c.length;
            return this.filter(function () {
                for (var a = 0; f > a; a++)
                    if (e.contains(this, c[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(u(this, a || [], !0))
        },
        filter: function (a) {
            return this.pushStack(u(this, a || [], !1))
        },
        is: function (a) {
            return !!u(this, "string" == typeof a && Ya.test(a) ? e(a) : a || [], !1).length
        },
        closest: function (a, c) {
            for (var f, b = 0, d = this.length, k = [], g = Ya.test(a) || "string" != typeof a ? e(a, c || this.context) : 0; d > b; b++)
                for (f = this[b]; f && f !== c; f = f.parentNode)
                    if (11 > f.nodeType && (g ? -1 < g.index(f) : 1 === f.nodeType && e.find.matchesSelector(f, a))) {
                        k.push(f);
                        break
                    }
            return this.pushStack(1 < k.length ? e.unique(k) : k)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ka.call(e(a), this[0]) : ka.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, c) {
            var f = "string" == typeof a ? e(a, c) : e.makeArray(a && a.nodeType ? [a] : a),
                f = e.merge(this.get(), f);
            return this.pushStack(e.unique(f))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    e.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function (a) {
            return e.dir(a, "parentNode")
        },
        parentsUntil: function (a, c, f) {
            return e.dir(a, "parentNode", f)
        },
        next: function (a) {
            return r(a, "nextSibling")
        },
        prev: function (a) {
            return r(a, "previousSibling")
        },
        nextAll: function (a) {
            return e.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return e.dir(a, "previousSibling")
        },
        nextUntil: function (a, c, f) {
            return e.dir(a, "nextSibling", f)
        },
        prevUntil: function (a, c, f) {
            return e.dir(a, "previousSibling", f)
        },
        siblings: function (a) {
            return e.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return e.sibling(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || e.merge([], a.childNodes)
        }
    }, function (a, c) {
        e.fn[a] = function (f, b) {
            var d = e.map(this, c, f);
            return "Until" !== a.slice(-5) && (b = f), b && "string" == typeof b && (d = e.filter(b, d)), 1 < this.length && (Ib[a] || e.unique(d), Hb.test(a) && d.reverse()), this.pushStack(d)
        }
    });
    e.extend({
        filter: function (a, c, f) {
            var b = c[0];
            return f && (a = ":not(" + a + ")"), 1 === c.length && 1 === b.nodeType ? e.find.matchesSelector(b, a) ? [b] : [] : e.find.matches(a, e.grep(c, function (a) {
                return 1 === a.nodeType
            }))
        },
        dir: function (a, c, f) {
            for (var b = [], k = f !== d;
                (a = a[c]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (k && e(a).is(f)) break;
                    b.push(a)
                }
            return b
        },
        sibling: function (a, c) {
            for (var f = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && f.push(a);
            return f
        }
    });
    var Za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $a = /<([\w:]+)/,
        Jb = /<|&#?\w+;/,
        Kb = /<(?:script|style|link)/i,
        ab = /^(?:checkbox|radio)$/i,
        Lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bb = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        Mb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    e.fn.extend({
        text: function (a) {
            return e.access(this, function (a) {
                return a === d ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, a).appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = E(this, a);
                    c.insertBefore(a, c.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, c) {
            for (var f, b = a ? e.filter(a, this) : this, d = 0; null != (f = b[d]); d++) c || 1 !== f.nodeType || e.cleanData(B(f)), f.parentNode && (c && e.contains(f.ownerDocument, f) && X(B(f, "script")), f.parentNode.removeChild(f));
            return this
        },
        empty: function () {
            for (var a, c = 0; null != (a = this[c]); c++) 1 === a.nodeType && (e.cleanData(B(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, c) {
            return a = null == a ? !1 : a, c = null == c ? a : c, this.map(function () {
                return e.clone(this, a, c)
            })
        },
        html: function (a) {
            return e.access(this, function (a) {
                var f = this[0] || {}, b = 0,
                    k = this.length;
                if (a === d && 1 === f.nodeType) return f.innerHTML;
                if ("string" == typeof a && !Kb.test(a) && !V[($a.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Za, "<$1></$2>");
                    try {
                        for (; k > b; b++) f = this[b] || {}, 1 === f.nodeType && (e.cleanData(B(f, !1)), f.innerHTML = a);
                        f = 0
                    } catch (g) {}
                }
                f && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = e.map(this, function (a) {
                return [a.nextSibling, a.parentNode]
            }),
                c = 0;
            return this.domManip(arguments, function (f) {
                var b = a[c++],
                    d = a[c++];
                d && (b && b.parentNode !== d && (b = this.nextSibling), e(this).remove(), d.insertBefore(f, b))
            }, !0), c ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, f) {
            a = Ta.apply([], a);
            var b, d, k, g, m = 0,
                h = this.length,
                r = this,
                l = h - 1,
                n = a[0],
                u = e.isFunction(n);
            if (u || !(1 >= h || "string" != typeof n || e.support.checkClone) && Lb.test(n)) return this.each(function (b) {
                var e = r.eq(b);
                u && (a[0] = n.call(this, b, e.html()));
                e.domManip(a, c, f)
            });
            if (h && (b = e.buildFragment(a, this[0].ownerDocument, !1, !f && this), d = b.firstChild, 1 === b.childNodes.length && (b = d), d)) {
                d = e.map(B(b, "script"), y);
                for (k = d.length; h > m; m++) g = b, m !== l && (g = e.clone(g, !0, !0), k && e.merge(d, B(g, "script"))), c.call(this[m], g, m);
                if (k)
                    for (b = d[d.length - 1].ownerDocument, e.map(d, z), m = 0; k > m; m++) g = d[m], bb.test(g.type || "") && !F.access(g, "globalEval") && e.contains(b, g) && (g.src ? e._evalUrl(g.src) : e.globalEval(g.textContent.replace(Mb, "")))
            }
            return this
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, c) {
        e.fn[a] = function (a) {
            for (var b = [], d = e(a), k = d.length - 1, g = 0; k >= g; g++) a = g === k ? this : this.clone(!0), e(d[g])[c](a), Ha.apply(b, a.get());
            return this.pushStack(b)
        }
    });
    e.extend({
        clone: function (a, c, f) {
            var b, d, k, g, m = a.cloneNode(!0),
                h = e.contains(a.ownerDocument, a);
            if (!(e.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a)))
                for (g = B(m), k = B(a), b = 0, d = k.length; d > b; b++) {
                    var r = k[b],
                        l = g[b],
                        n = l.nodeName.toLowerCase();
                    "input" === n && ab.test(r.type) ? l.checked = r.checked : ("input" === n || "textarea" === n) && (l.defaultValue = r.defaultValue)
                }
            if (c)
                if (f)
                    for (k = k || B(a), g = g || B(m), b = 0, d = k.length; d > b; b++) D(k[b], g[b]);
                else D(a, m);
            return g = B(m, "script"), 0 < g.length && X(g, !h && B(a, "script")), m
        },
        buildFragment: function (a, c, f, b) {
            for (var d, k, g, m, h = 0, r = a.length, l = c.createDocumentFragment(), n = []; r > h; h++)
                if (d = a[h], d || 0 === d)
                    if ("object" === e.type(d)) e.merge(n, d.nodeType ? [d] : d);
                    else if (Jb.test(d)) {
                k = k || l.appendChild(c.createElement("div"));
                g = ($a.exec(d) || ["", ""])[1].toLowerCase();
                g = V[g] || V._default;
                k.innerHTML = g[1] + d.replace(Za, "<$1></$2>") + g[2];
                for (g = g[0]; g--;) k = k.lastChild;
                e.merge(n, k.childNodes);
                k = l.firstChild;
                k.textContent = ""
            } else n.push(c.createTextNode(d));
            l.textContent = "";
            for (h = 0; d = n[h++];)
                if ((!b || -1 === e.inArray(d, b)) && (m = e.contains(d.ownerDocument, d), k = B(l.appendChild(d), "script"), m && X(k), f))
                    for (g = 0; d = k[g++];) bb.test(d.type || "") && f.push(d);
            return l
        },
        cleanData: function (a) {
            for (var c, f, b, k, g, m, h = e.event.special, r = 0;
                (f = a[r]) !== d; r++) {
                if (l.accepts(f) && (g = f[F.expando], g && (c = F.cache[g]))) {
                    if (b = Object.keys(c.events || {}), b.length)
                        for (m = 0;
                            (k = b[m]) !== d; m++) h[k] ? e.event.remove(f, k) : e.removeEvent(f, k, c.handle);
                    F.cache[g] && delete F.cache[g]
                }
                delete I.cache[f[I.expando]]
            }
        },
        _evalUrl: function (a) {
            return e.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    });
    e.fn.extend({
        wrapAll: function (a) {
            var c;
            return e.isFunction(a) ? this.each(function (c) {
                e(this).wrapAll(a.call(this, c))
            }) : (this[0] && (c = e(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return e.isFunction(a) ? this.each(function (c) {
                e(this).wrapInner(a.call(this, c))
            }) : this.each(function () {
                var c = e(this),
                    b = c.contents();
                b.length ? b.wrapAll(a) : c.append(a)
            })
        },
        wrap: function (a) {
            var c = e.isFunction(a);
            return this.each(function (b) {
                e(this).wrapAll(c ? a.call(this, b) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ea, fa, Nb = /^(none|table(?!-c[ea]).+)/,
        cb = /^margin/,
        qb = RegExp("^(" + xa + ")(.*)$", "i"),
        Da = RegExp("^(" + xa + ")(?!px)[a-z%]+$", "i"),
        Ob = RegExp("^([+-])=(" + xa + ")", "i"),
        Pa = {
            BODY: "block"
        }, Pb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, db = {
            letterSpacing: 0,
            fontWeight: 400
        }, da = ["Top", "Right", "Bottom", "Left"],
        Oa = ["Webkit", "O", "Moz", "ms"];
    e.fn.extend({
        css: function (a, c) {
            return e.access(this, function (a, c, k) {
                var g, m = {}, h = 0;
                if (e.isArray(c)) {
                    k = b.getComputedStyle(a, null);
                    for (g = c.length; g > h; h++) m[c[h]] = e.css(a, c[h], !1, k);
                    return m
                }
                return k !== d ? e.style(a, c, k) : e.css(a, c)
            }, a, c, 1 < arguments.length)
        },
        show: function () {
            return J(this, !0)
        },
        hide: function () {
            return J(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                H(this) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function (a, c) {
                    if (c) {
                        var b = ea(a, "opacity");
                        return "" === b ? "1" : b
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
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
            "float": "cssFloat"
        },
        style: function (a, c, b, k) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var g, m, h, r = e.camelCase(c),
                    l = a.style;
                return c = e.cssProps[r] || (e.cssProps[r] = G(l, r)), h = e.cssHooks[c] || e.cssHooks[r], b === d ? h && "get" in h && (g = h.get(a, !1, k)) !== d ? g : l[c] : (m = typeof b, "string" === m && (g = Ob.exec(b)) && (b = (g[1] + 1) * g[2] + parseFloat(e.css(a, c)), m = "number"), null == b || "number" === m && isNaN(b) || ("number" !== m || e.cssNumber[r] || (b += "px"), e.support.clearCloneStyle || "" !== b || 0 !== c.indexOf("background") || (l[c] = "inherit"), h && "set" in h && (b = h.set(a, b, k)) === d || (l[c] = b)), d)
            }
        },
        css: function (a, c, b, k) {
            var g, m, h, r = e.camelCase(c);
            return c = e.cssProps[r] || (e.cssProps[r] = G(a.style, r)), h = e.cssHooks[c] || e.cssHooks[r], h && "get" in h && (g = h.get(a, !0, b)), g === d && (g = ea(a, c, k)), "normal" === g && c in db && (g = db[c]), "" === b || b ? (m = parseFloat(g), !0 === b || e.isNumeric(m) ? m || 0 : g) : g
        }
    });
    ea = function (a, c, f) {
        var k, g, m, h = (f = f || b.getComputedStyle(a, null)) ? f.getPropertyValue(c) || f[c] : d,
            r = a.style;
        return f && ("" !== h || e.contains(a.ownerDocument, a) || (h = e.style(a, c)), Da.test(h) && cb.test(c) && (k = r.width, g = r.minWidth, m = r.maxWidth, r.minWidth = r.maxWidth = r.width = h, h = f.width, r.width = k, r.minWidth = g, r.maxWidth = m)), h
    };
    e.each(["height", "width"], function (a, c) {
        e.cssHooks[c] = {
            get: function (a, b, k) {
                return b ? 0 === a.offsetWidth && Nb.test(e.css(a, "display")) ? e.swap(a, Pb, function () {
                    return S(a, c, k)
                }) : S(a, c, k) : d
            },
            set: function (a, d, k) {
                var g = k && b.getComputedStyle(a, null);
                return R(a, d, k ? C(a, c, k, e.support.boxSizing && "border-box" === e.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    e(function () {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function (a, c) {
                return c ? e.swap(a, {
                    display: "inline-block"
                }, ea, [a, "marginRight"]) : d
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function (a, c) {
            e.cssHooks[c] = {
                get: function (a, b) {
                    return b ? (b = ea(a, c), Da.test(b) ? e(a).position()[c] + "px" : b) : d
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    }, e.expr.filters.visible = function (a) {
        return !e.expr.filters.hidden(a)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, c) {
        e.cssHooks[a + c] = {
            expand: function (b) {
                var e = 0,
                    d = {};
                for (b = "string" == typeof b ? b.split(" ") : [b]; 4 > e; e++) d[a + da[e] + c] = b[e] || b[e - 2] || b[0];
                return d
            }
        };
        cb.test(a) || (e.cssHooks[a + c].set = R)
    });
    var Qb = /%20/g,
        rb = /\[\]$/,
        eb = /\r?\n/g,
        Rb = /^(?:submit|button|image|reset|file)$/i,
        Sb = /^(?:input|select|textarea|keygen)/i;
    e.fn.extend({
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = e.prop(this, "elements");
                return a ? e.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !e(this).is(":disabled") && Sb.test(this.nodeName) && !Rb.test(a) && (this.checked || !ab.test(a))
            }).map(function (a, c) {
                var b = e(this).val();
                return null == b ? null : e.isArray(b) ? e.map(b, function (a) {
                    return {
                        name: c.name,
                        value: a.replace(eb, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(eb, "\r\n")
                }
            }).get()
        }
    });
    e.param = function (a, c) {
        var b, k = [],
            g = function (a, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                k[k.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
            };
        if (c === d && (c = e.ajaxSettings && e.ajaxSettings.traditional), e.isArray(a) || a.jquery && !e.isPlainObject(a)) e.each(a, function () {
            g(this.name, this.value)
        });
        else
            for (b in a) M(b, a[b], c, g);
        return k.join("&").replace(Qb, "+")
    };
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, c) {
        e.fn[c] = function (a, b) {
            return 0 < arguments.length ? this.on(c, null, a, b) : this.trigger(c)
        }
    });
    e.fn.extend({
        hover: function (a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        },
        bind: function (a, c, b) {
            return this.on(a, null, c, b)
        },
        unbind: function (a, c) {
            return this.off(a, null, c)
        },
        delegate: function (a, c, b, e) {
            return this.on(c, a, b, e)
        },
        undelegate: function (a, c, b) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", b)
        }
    });
    var ba, ca, Ka = e.now(),
        La = /\?/,
        Tb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        Ub = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Vb = /^(?:GET|HEAD)$/,
        Wb = /^\/\//,
        gb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        hb = e.fn.load,
        ib = {}, Fa = {}, jb = "*/".concat("*");
    try {
        ca = sb.href
    } catch (ac) {
        ca = w.createElement("a"), ca.href = "", ca = ca.href
    }
    ba = gb.exec(ca.toLowerCase()) || [];
    e.fn.load = function (a, c, b) {
        if ("string" != typeof a && hb) return hb.apply(this, arguments);
        var k, g, m, h = this,
            r = a.indexOf(" ");
        return 0 <= r && (k = a.slice(r), a = a.slice(0, r)), e.isFunction(c) ? (b = c, c = d) : c && "object" == typeof c && (g = "POST"), 0 < h.length && e.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function (a) {
            m = arguments;
            h.html(k ? e("<div>").append(e.parseHTML(a)).find(k) : a)
        }).complete(b && function (a, c) {
            h.each(b, m || [a.responseText, c, a])
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, c) {
        e.fn[c] = function (a) {
            return this.on(c, a)
        }
    });
    e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ca,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ba[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jb,
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
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, c) {
            return c ? Z(Z(a, e.ajaxSettings), c) : Z(e.ajaxSettings, a)
        },
        ajaxPrefilter: O(ib),
        ajaxTransport: O(Fa),
        ajax: function (a, c) {
            function b(a, c, f, h) {
                var l, u, v, R, y = c;
                if (2 !== z) {
                    z = 2;
                    r && clearTimeout(r);
                    k = d;
                    m = h || "";
                    x.readyState = 0 < a ? 4 : 0;
                    h = 200 <= a && 300 > a || 304 === a;
                    if (f) {
                        v = t;
                        for (var B = x, M, D, N, w, F = v.contents, O = v.dataTypes;
                            "*" === O[0];) O.shift(), M === d && (M = v.mimeType || B.getResponseHeader("Content-Type"));
                        if (M)
                            for (D in F)
                                if (F[D] && F[D].test(M)) {
                                    O.unshift(D);
                                    break
                                }
                        if (O[0] in f) N = O[0];
                        else {
                            for (D in f) {
                                if (!O[0] || v.converters[D + " " + O[0]]) {
                                    N = D;
                                    break
                                }
                                w || (w = D)
                            }
                            N = N || w
                        }
                        v = N ? (N !== O[0] && O.unshift(N), f[N]) : d
                    }
                    var G;
                    a: {
                        f = t;
                        M = v;
                        D = x;
                        N = h;
                        var H, J, I;
                        v = {};
                        B = f.dataTypes.slice();
                        if (B[1])
                            for (H in f.converters) v[H.toLowerCase()] = f.converters[H];
                        for (w = B.shift(); w;)
                            if (f.responseFields[w] && (D[f.responseFields[w]] = M), !I && N && f.dataFilter && (M = f.dataFilter(M, f.dataType)), I = w, w = B.shift())
                                if ("*" === w) w = I;
                                else if ("*" !== I && I !== w) {
                            if (H = v[I + " " + w] || v["* " + w], !H)
                                for (G in v)
                                    if (J = G.split(" "), J[1] === w && (H = v[I + " " + J[0]] || v["* " + J[0]])) {
                                        !0 === H ? H = v[G] : !0 !== v[G] && (w = J[0], B.unshift(J[1]));
                                        break
                                    }
                            if (!0 !== H)
                                if (H && f["throws"]) M = H(M);
                                else try {
                                    M = H(M)
                                } catch (Z) {
                                    G = {
                                        state: "parsererror",
                                        error: H ? Z : "No conversion from " + I + " to " + w
                                    };
                                    break a
                                }
                        }
                        G = {
                            state: "success",
                            data: M
                        }
                    }
                    v = G;
                    h ? (t.ifModified && (R = x.getResponseHeader("Last-Modified"), R && (e.lastModified[g] = R), R = x.getResponseHeader("etag"), R && (e.etag[g] = R)), 204 === a || "HEAD" === t.type ? y = "nocontent" : 304 === a ? y = "notmodified" : (y = v.state, l = v.data, u = v.error, h = !u)) : (u = y, (a || !y) && (y = "error", 0 > a && (a = 0)));
                    x.status = a;
                    x.statusText = (c || y) + "";
                    h ? W.resolveWith(C, [l, y, x]) : W.rejectWith(C, [x, y, u]);
                    x.statusCode(S);
                    S = d;
                    n && s.trigger(h ? "ajaxSuccess" : "ajaxError", [x, t, h ? l : u]);
                    E.fireWith(C, [x, y]);
                    n && (s.trigger("ajaxComplete", [x, t]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = d);
            c = c || {};
            var k, g, m, h, r, l, n, u, t = e.ajaxSetup({}, c),
                C = t.context || t,
                s = t.context && (C.nodeType || C.jquery) ? e(C) : e.event,
                W = e.Deferred(),
                E = e.Callbacks("once memory"),
                S = t.statusCode || {}, R = {}, y = {}, z = 0,
                B = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var c;
                        if (2 === z) {
                            if (!h)
                                for (h = {}; c = Ub.exec(m);) h[c[1].toLowerCase()] = c[2];
                            c = h[a.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function () {
                        return 2 === z ? m : null
                    },
                    setRequestHeader: function (a, c) {
                        var b = a.toLowerCase();
                        return z || (a = y[b] = y[b] || a, R[a] = c), this
                    },
                    overrideMimeType: function (a) {
                        return z || (t.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var c;
                        if (a)
                            if (2 > z)
                                for (c in a) S[c] = [S[c], a[c]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function (a) {
                        a = a || B;
                        return k && k.abort(a), b(0, a), this
                    }
                };
            if (W.promise(x).complete = E.add, x.success = x.done, x.error = x.fail, t.url = ((a || t.url || ca) + "").replace(Tb, "").replace(Wb, ba[1] + "//"), t.type = c.method || c.type || t.method || t.type, t.dataTypes = e.trim(t.dataType || "*").toLowerCase().match(U) || [""], null == t.crossDomain && (l = gb.exec(t.url.toLowerCase()), t.crossDomain = !(!l || l[1] === ba[1] && l[2] === ba[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ba[3] || ("http:" === ba[1] ? "80" : "443")))), t.data && t.processData && "string" != typeof t.data && (t.data = e.param(t.data, t.traditional)), N(ib, t, c, x), 2 === z) return x;
            (n = t.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
            t.type = t.type.toUpperCase();
            t.hasContent = !Vb.test(t.type);
            g = t.url;
            t.hasContent || (t.data && (g = t.url += (La.test(g) ? "&" : "?") + t.data, delete t.data), !1 === t.cache && (t.url = fb.test(g) ? g.replace(fb, "$1_=" + Ka++) : g + (La.test(g) ? "&" : "?") + "_=" + Ka++));
            t.ifModified && (e.lastModified[g] && x.setRequestHeader("If-Modified-Since", e.lastModified[g]), e.etag[g] && x.setRequestHeader("If-None-Match", e.etag[g]));
            (t.data && t.hasContent && !1 !== t.contentType || c.contentType) && x.setRequestHeader("Content-Type", t.contentType);
            x.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + jb + "; q=0.01" : "") : t.accepts["*"]);
            for (u in t.headers) x.setRequestHeader(u, t.headers[u]);
            if (t.beforeSend && (!1 === t.beforeSend.call(C, x, t) || 2 === z)) return x.abort();
            B = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) x[u](t[u]);
            if (k = N(Fa, t, c, x)) {
                x.readyState = 1;
                n && s.trigger("ajaxSend", [x, t]);
                t.async && 0 < t.timeout && (r = setTimeout(function () {
                    x.abort("timeout")
                }, t.timeout));
                try {
                    z = 1, k.send(R, b)
                } catch (M) {
                    if (!(2 > z)) throw M;
                    b(-1, M)
                }
            } else b(-1, "No Transport");
            return x
        },
        getJSON: function (a, c, b) {
            return e.get(a, c, b, "json")
        },
        getScript: function (a, c) {
            return e.get(a, d, c, "script")
        }
    });
    e.each(["get", "post"], function (a, c) {
        e[c] = function (a, b, k, g) {
            return e.isFunction(b) && (g = g || k, k = b, b = d), e.ajax({
                url: a,
                type: c,
                dataType: g,
                data: b,
                success: k
            })
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return e.globalEval(a), a
            }
        }
    });
    e.ajaxPrefilter("script", function (a) {
        a.cache === d && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    e.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, b;
            return {
                send: function (d, k) {
                    c = e("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", b = function (a) {
                        c.remove();
                        b = null;
                        a && k("error" === a.type ? 404 : 200, a.type)
                    });
                    w.head.appendChild(c[0])
                },
                abort: function () {
                    b && b()
                }
            }
        }
    });
    var kb = [],
        Ma = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = kb.pop() || e.expando + "_" + Ka++;
            return this[a] = !0, a
        }
    });
    e.ajaxPrefilter("json jsonp", function (a, c, f) {
        var k, g, m, h = !1 !== a.jsonp && (Ma.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ma.test(a.data) && "data");
        return h || "jsonp" === a.dataTypes[0] ? (k = a.jsonpCallback = e.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Ma, "$1" + k) : !1 !== a.jsonp && (a.url += (La.test(a.url) ? "&" : "?") + a.jsonp + "=" + k), a.converters["script json"] = function () {
            return m || e.error(k + " was not called"), m[0]
        }, a.dataTypes[0] = "json", g = b[k], b[k] = function () {
            m = arguments
        }, f.always(function () {
            b[k] = g;
            a[k] && (a.jsonpCallback = c.jsonpCallback, kb.push(k));
            m && e.isFunction(g) && g(m[0]);
            m = g = d
        }), "script") : d
    });
    e.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var ra = e.ajaxSettings.xhr(),
        Xb = {
            0: 200,
            1223: 204
        }, Yb = 0,
        sa = {};
    b.ActiveXObject && e(b).on("unload", function () {
        for (var a in sa) sa[a]();
        sa = d
    });
    e.support.cors = !! ra && "withCredentials" in ra;
    e.support.ajax = ra = !! ra;
    e.ajaxTransport(function (a) {
        var c;
        return e.support.cors || ra && !a.crossDomain ? {
            send: function (b, e) {
                var k, g, m = a.xhr();
                if (m.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (k in a.xhrFields) m[k] = a.xhrFields[k];
                a.mimeType && m.overrideMimeType && m.overrideMimeType(a.mimeType);
                a.crossDomain || b["X-Requested-With"] || (b["X-Requested-With"] = "XMLHttpRequest");
                for (k in b) m.setRequestHeader(k, b[k]);
                c = function (a) {
                    return function () {
                        c && (delete sa[g], c = m.onload = m.onerror = null, "abort" === a ? m.abort() : "error" === a ? e(m.status || 404, m.statusText) : e(Xb[m.status] || m.status, m.statusText, "string" == typeof m.responseText ? {
                            text: m.responseText
                        } : d, m.getAllResponseHeaders()))
                    }
                };
                m.onload = c();
                m.onerror = c("error");
                c = sa[g = Yb++] = c("abort");
                m.send(a.hasContent && a.data || null)
            },
            abort: function () {
                c && c()
            }
        } : d
    });
    var ga, Ca, Zb = /^(?:toggle|show|hide)$/,
        lb = RegExp("^(?:([+-])=|)(" + xa + ")([a-z%]*)$", "i"),
        $b = /queueHooks$/,
        ta = [
            function (a, c, b) {
                var k, g, m, h, r, l = this,
                    t = {}, n = a.style,
                    u = a.nodeType && H(a),
                    C = F.get(a, "fxshow");
                b.queue || (h = e._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, r = h.empty.fire, h.empty.fire = function () {
                    h.unqueued || r()
                }), h.unqueued++, l.always(function () {
                    l.always(function () {
                        h.unqueued--;
                        e.queue(a, "fx").length || h.empty.fire()
                    })
                }));
                1 === a.nodeType && ("height" in c || "width" in c) && (b.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === e.css(a, "display") && "none" === e.css(a, "float") && (n.display = "inline-block"));
                b.overflow && (n.overflow = "hidden", l.always(function () {
                    n.overflow = b.overflow[0];
                    n.overflowX = b.overflow[1];
                    n.overflowY = b.overflow[2]
                }));
                for (k in c)
                    if (g = c[k], Zb.exec(g)) {
                        if (delete c[k], m = m || "toggle" === g, g === (u ? "hide" : "show")) {
                            if ("show" !== g || !C || C[k] === d) continue;
                            u = !0
                        }
                        t[k] = C && C[k] || e.style(a, k)
                    }
                if (!e.isEmptyObject(t))
                    for (k in C ? "hidden" in C && (u = C.hidden) : C = F.access(a, "fxshow", {}), m && (C.hidden = !u), u ? e(a).show() : l.done(function () {
                        e(a).hide()
                    }), l.done(function () {
                        var c;
                        F.remove(a, "fxshow");
                        for (c in t) e.style(a, c, t[c])
                    }), t) c = ha(u ? C[k] : 0, k, l), k in C || (C[k] = c.start, u && (c.end = c.start, c.start = "width" === k || "height" === k ? 1 : 0))
            }
        ],
        aa = {
            "*": [
                function (a, c) {
                    var b = this.createTween(a, c),
                        d = b.cur(),
                        k = lb.exec(c),
                        g = k && k[3] || (e.cssNumber[a] ? "" : "px"),
                        m = (e.cssNumber[a] || "px" !== g && +d) && lb.exec(e.css(b.elem, a)),
                        h = 1,
                        r = 20;
                    if (m && m[3] !== g) {
                        g = g || m[3];
                        k = k || [];
                        m = +d || 1;
                        do h = h || ".5", m /= h, e.style(b.elem, a, m + g); while (h !== (h = b.cur() / d) && 1 !== h && --r)
                    }
                    return k && (m = b.start = +m || +d || 0, b.unit = g, b.end = k[1] ? m + (k[1] + 1) * k[2] : +k[2]), b
                }
            ]
        };
    e.Animation = e.extend(Aa, {
        tweener: function (a, c) {
            e.isFunction(a) ? (c = a, a = ["*"]) : a = a.split(" ");
            for (var b, d = 0, k = a.length; k > d; d++) b = a[d], aa[b] = aa[b] || [], aa[b].unshift(c)
        },
        prefilter: function (a, c) {
            c ? ta.unshift(a) : ta.push(a)
        }
    });
    e.Tween = T;
    T.prototype = {
        constructor: T,
        init: function (a, c, b, d, k, g) {
            this.elem = a;
            this.prop = b;
            this.easing = k || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = g || (e.cssNumber[b] ? "" : "px")
        },
        cur: function () {
            var a = T.propHooks[this.prop];
            return a && a.get ? a.get(this) : T.propHooks._default.get(this)
        },
        run: function (a) {
            var c, b = T.propHooks[this.prop];
            return this.pos = c = this.options.duration ? e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), b && b.set ? b.set(this) : T.propHooks._default.set(this), this
        }
    };
    T.prototype.init.prototype = T.prototype;
    T.propHooks = {
        _default: {
            get: function (a) {
                var c;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (c = e.css(a.elem, a.prop, ""), c && "auto" !== c ? c : 0) : a.elem[a.prop]
            },
            set: function (a) {
                e.fx.step[a.prop] ? e.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[e.cssProps[a.prop]] || e.cssHooks[a.prop]) ? e.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    T.propHooks.scrollTop = T.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    e.each(["toggle", "show", "hide"], function (a, c) {
        var b = e.fn[c];
        e.fn[c] = function (a, e, d) {
            return null == a || "boolean" == typeof a ? b.apply(this, arguments) : this.animate(ua(c, !0), a, e, d)
        }
    });
    e.fn.extend({
        fadeTo: function (a, c, b, e) {
            return this.filter(H).css("opacity", 0).show().end().animate({
                opacity: c
            }, a, b, e)
        },
        animate: function (a, c, b, d) {
            var k = e.isEmptyObject(a),
                g = e.speed(c, b, d);
            c = function () {
                var c = Aa(this, e.extend({}, a), g);
                (k || F.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, k || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function (a, c, b) {
            var k = function (a) {
                var c = a.stop;
                delete a.stop;
                c(b)
            };
            return "string" != typeof a && (b = c, c = a, a = d), c && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var c = !0,
                    d = null != a && a + "queueHooks",
                    g = e.timers,
                    m = F.get(this);
                if (d) m[d] && m[d].stop && k(m[d]);
                else
                    for (d in m) m[d] && m[d].stop && $b.test(d) && k(m[d]);
                for (d = g.length; d--;) g[d].elem !== this || null != a && g[d].queue !== a || (g[d].anim.stop(b), c = !1, g.splice(d, 1));
                !c && b || e.dequeue(this, a)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var c, b = F.get(this),
                    d = b[a + "queue"];
                c = b[a + "queueHooks"];
                var k = e.timers,
                    g = d ? d.length : 0;
                b.finish = !0;
                e.queue(this, a, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = k.length; c--;) k[c].elem === this && k[c].queue === a && (k[c].anim.stop(!0), k.splice(c, 1));
                for (c = 0; g > c; c++) d[c] && d[c].finish && d[c].finish.call(this);
                delete b.finish
            })
        }
    });
    e.each({
        slideDown: ua("show"),
        slideUp: ua("hide"),
        slideToggle: ua("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, c) {
        e.fn[a] = function (a, b, e) {
            return this.animate(c, a, b, e)
        }
    });
    e.speed = function (a, c, b) {
        var d = a && "object" == typeof a ? e.extend({}, a) : {
            complete: b || !b && c || e.isFunction(a) && a,
            duration: a,
            easing: b && c || c && !e.isFunction(c) && c
        };
        return d.duration = e.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in e.fx.speeds ? e.fx.speeds[d.duration] : e.fx.speeds._default, (null == d.queue || !0 === d.queue) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            e.isFunction(d.old) && d.old.call(this);
            d.queue && e.dequeue(this, d.queue)
        }, d
    };
    e.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = T.prototype.init;
    e.fx.tick = function () {
        var a, c = e.timers,
            b = 0;
        for (ga = e.now(); c.length > b; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || e.fx.stop();
        ga = d
    };
    e.fx.timer = function (a) {
        a() && e.timers.push(a) && e.fx.start()
    };
    e.fx.interval = 13;
    e.fx.start = function () {
        Ca || (Ca = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.stop = function () {
        clearInterval(Ca);
        Ca = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function (a) {
        return e.grep(e.timers, function (c) {
            return a === c.elem
        }).length
    });
    e.fn.offset = function (a) {
        if (arguments.length) return a === d ? this : this.each(function (c) {
            e.offset.setOffset(this, a, c)
        });
        var c, b, k = this[0],
            g = {
                top: 0,
                left: 0
            }, m = k && k.ownerDocument;
        if (m) return c = m.documentElement, e.contains(c, k) ? (typeof k.getBoundingClientRect !== la && (g = k.getBoundingClientRect()), b = Qa(m), {
            top: g.top + b.pageYOffset - c.clientTop,
            left: g.left + b.pageXOffset - c.clientLeft
        }) : g
    };
    e.offset = {
        setOffset: function (a, c, b) {
            var d, k, g, m, h, r, l = e.css(a, "position"),
                t = e(a),
                n = {};
            "static" === l && (a.style.position = "relative");
            h = t.offset();
            g = e.css(a, "top");
            r = e.css(a, "left");
            ("absolute" === l || "fixed" === l) && -1 < (g + r).indexOf("auto") ? (d = t.position(), m = d.top, k = d.left) : (m = parseFloat(g) || 0, k = parseFloat(r) || 0);
            e.isFunction(c) && (c = c.call(a, b, h));
            null != c.top && (n.top = c.top - h.top + m);
            null != c.left && (n.left = c.left - h.left + k);
            "using" in c ? c.using.call(a, n) : t.css(n)
        }
    };
    e.fn.extend({
        position: function () {
            if (this[0]) {
                var a, c, b = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === e.css(b, "position") ? c = b.getBoundingClientRect() : (a = this.offsetParent(), c = this.offset(), e.nodeName(a[0], "html") || (d = a.offset()), d.top += e.css(a[0], "borderTopWidth", !0), d.left += e.css(a[0], "borderLeftWidth", !0)), {
                    top: c.top - d.top - e.css(b, "marginTop", !0),
                    left: c.left - d.left - e.css(b, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Sa; a && !e.nodeName(a, "html") && "static" === e.css(a, "position");) a = a.offsetParent;
                return a || Sa
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var f = "pageYOffset" === c;
        e.fn[a] = function (k) {
            return e.access(this, function (a, e, k) {
                var g = Qa(a);
                return k === d ? g ? g[c] : a[e] : (g ? g.scrollTo(f ? b.pageXOffset : k, f ? k : b.pageYOffset) : a[e] = k, d)
            }, a, k, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        e.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (b, k) {
            e.fn[k] = function (k, g) {
                var m = arguments.length && (b || "boolean" != typeof k),
                    h = b || (!0 === k || !0 === g ? "margin" : "border");
                return e.access(this, function (c, b, f) {
                    var k;
                    return e.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (k = c.documentElement, Math.max(c.body["scroll" + a], k["scroll" + a], c.body["offset" + a], k["offset" + a], k["client" + a])) : f === d ? e.css(c, b, h) : e.style(c, b, f, h)
                }, c, m ? k : d, m, null)
            }
        })
    });
    e.fn.size = function () {
        return this.length
    };
    e.fn.andSelf = e.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = e : "function" == typeof define && define.amd && define("jquery", [], function () {
        return e
    });
    "object" == typeof b && "object" == typeof b.document && (b.jQuery = b.$ = e)
})(window);
(function (b, d) {
    function h() {
        if (!g.READY) {
            g.event.determineEventTypes();
            for (var b in g.gestures) g.gestures.hasOwnProperty(b) && g.detection.register(g.gestures[b]);
            g.event.onTouch(g.DOCUMENT, g.EVENT_MOVE, g.detection.detect);
            g.event.onTouch(g.DOCUMENT, g.EVENT_END, g.detection.detect);
            g.READY = !0
        }
    }
    var g = function (b, d) {
        return new g.Instance(b, d || {})
    };
    g.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    g.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
    g.HAS_TOUCHEVENTS = "ontouchstart" in b;
    g.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    g.NO_MOUSEEVENTS = g.HAS_TOUCHEVENTS && navigator.userAgent.match(g.MOBILE_REGEX);
    g.EVENT_TYPES = {};
    g.DIRECTION_DOWN = "down";
    g.DIRECTION_LEFT = "left";
    g.DIRECTION_UP = "up";
    g.DIRECTION_RIGHT = "right";
    g.POINTER_MOUSE = "mouse";
    g.POINTER_TOUCH = "touch";
    g.POINTER_PEN = "pen";
    g.EVENT_START = "start";
    g.EVENT_MOVE = "move";
    g.EVENT_END = "end";
    g.DOCUMENT = document;
    g.plugins = {};
    g.READY = !1;
    g.Instance = function (b, d) {
        var r = this;
        return h(), this.element = b, this.enabled = !0, this.options = g.utils.extend(g.utils.extend({}, g.defaults), d || {}), this.options.stop_browser_behavior && g.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), g.event.onTouch(b, g.EVENT_START, function (b) {
            r.enabled && g.detection.startDetect(r, b)
        }), this
    };
    g.Instance.prototype = {
        on: function (b, d) {
            for (var g = b.split(" "), h = 0; g.length > h; h++) this.element.addEventListener(g[h], d, !1);
            return this
        },
        off: function (b, d) {
            for (var g = b.split(" "), h = 0; g.length > h; h++) this.element.removeEventListener(g[h], d, !1);
            return this
        },
        trigger: function (b, d) {
            var h = g.DOCUMENT.createEvent("Event");
            h.initEvent(b, !0, !0);
            h.gesture = d;
            var l = this.element;
            return g.utils.hasParent(d.target, l) && (l = d.target), l.dispatchEvent(h), this
        },
        enable: function (b) {
            return this.enabled = b, this
        }
    };
    var l = null,
        n = !1,
        s = !1;
    g.event = {
        bindDom: function (b, d, g) {
            d = d.split(" ");
            for (var h = 0; d.length > h; h++) b.addEventListener(d[h], g, !1)
        },
        onTouch: function (b, d, h) {
            var u = this;
            this.bindDom(b, g.EVENT_TYPES[d], function (E) {
                var y = E.type.toLowerCase();
                if (!y.match(/mouse/) || !s) {
                    (y.match(/touch/) || y.match(/pointerdown/) || y.match(/mouse/) && 1 === E.which) && (n = !0);
                    y.match(/touch|pointer/) && (s = !0);
                    var z = 0;
                    n && (g.HAS_POINTEREVENTS && d != g.EVENT_END ? z = g.PointerEvent.updatePointer(d, E) : y.match(/touch/) ? z = E.touches.length : s || (z = y.match(/up/) ? 0 : 1), 0 < z && d == g.EVENT_END ? d = g.EVENT_MOVE : z || (d = g.EVENT_END), z || null === l ? l = E : E = l, h.call(g.detection, u.collectEventData(b, d, E)), g.HAS_POINTEREVENTS && d == g.EVENT_END && (z = g.PointerEvent.updatePointer(d, E)));
                    z || (l = null, n = !1, s = !1, g.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function () {
            var b;
            b = g.HAS_POINTEREVENTS ? g.PointerEvent.getEvents() : g.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"];
            g.EVENT_TYPES[g.EVENT_START] = b[0];
            g.EVENT_TYPES[g.EVENT_MOVE] = b[1];
            g.EVENT_TYPES[g.EVENT_END] = b[2]
        },
        getTouchList: function (b) {
            return g.HAS_POINTEREVENTS ? g.PointerEvent.getTouchList() : b.touches ? b.touches : [{
                identifier: 1,
                pageX: b.pageX,
                pageY: b.pageY,
                target: b.target
            }]
        },
        collectEventData: function (b, d, h) {
            b = this.getTouchList(h, d);
            var l = g.POINTER_TOUCH;
            return (h.type.match(/mouse/) || g.PointerEvent.matchType(g.POINTER_MOUSE, h)) && (l = g.POINTER_MOUSE), {
                center: g.utils.getCenter(b),
                timeStamp: (new Date).getTime(),
                target: h.target,
                touches: b,
                eventType: d,
                pointerType: l,
                srcEvent: h,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation();
                    this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return g.detection.stopDetect()
                }
            }
        }
    };
    g.PointerEvent = {
        pointers: {},
        getTouchList: function () {
            var b = this,
                d = [];
            return Object.keys(b.pointers).sort().forEach(function (g) {
                d.push(b.pointers[g])
            }), d
        },
        updatePointer: function (b, d) {
            return b == g.EVENT_END ? this.pointers = {} : (d.identifier = d.pointerId, this.pointers[d.pointerId] = d), Object.keys(this.pointers).length
        },
        matchType: function (b, d) {
            if (!d.pointerType) return !1;
            var h = {};
            return h[g.POINTER_MOUSE] = d.pointerType == d.MSPOINTER_TYPE_MOUSE || d.pointerType == g.POINTER_MOUSE, h[g.POINTER_TOUCH] = d.pointerType == d.MSPOINTER_TYPE_TOUCH || d.pointerType == g.POINTER_TOUCH, h[g.POINTER_PEN] = d.pointerType == d.MSPOINTER_TYPE_PEN || d.pointerType == g.POINTER_PEN, h[b]
        },
        getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function () {
            this.pointers = {}
        }
    };
    g.utils = {
        extend: function (b, g, h) {
            for (var l in g) b[l] !== d && h || (b[l] = g[l]);
            return b
        },
        hasParent: function (b, d) {
            for (; b;) {
                if (b == d) return !0;
                b = b.parentNode
            }
            return !1
        },
        getCenter: function (b) {
            for (var d = [], g = [], h = 0, l = b.length; l > h; h++) d.push(b[h].pageX), g.push(b[h].pageY);
            return {
                pageX: (Math.min.apply(Math, d) + Math.max.apply(Math, d)) / 2,
                pageY: (Math.min.apply(Math, g) + Math.max.apply(Math, g)) / 2
            }
        },
        getVelocity: function (b, d, g) {
            return {
                x: Math.abs(d / b) || 0,
                y: Math.abs(g / b) || 0
            }
        },
        getAngle: function (b, d) {
            return 180 * Math.atan2(d.pageY - b.pageY, d.pageX - b.pageX) / Math.PI
        },
        getDirection: function (b, d) {
            var h = Math.abs(b.pageX - d.pageX),
                l = Math.abs(b.pageY - d.pageY);
            return h >= l ? 0 < b.pageX - d.pageX ? g.DIRECTION_LEFT : g.DIRECTION_RIGHT : 0 < b.pageY - d.pageY ? g.DIRECTION_UP : g.DIRECTION_DOWN
        },
        getDistance: function (b, d) {
            var g = d.pageX - b.pageX,
                h = d.pageY - b.pageY;
            return Math.sqrt(g * g + h * h)
        },
        getScale: function (b, d) {
            return 2 <= b.length && 2 <= d.length ? this.getDistance(d[0], d[1]) / this.getDistance(b[0], b[1]) : 1
        },
        getRotation: function (b, d) {
            return 2 <= b.length && 2 <= d.length ? this.getAngle(d[1], d[0]) - this.getAngle(b[1], b[0]) : 0
        },
        isVertical: function (b) {
            return b == g.DIRECTION_UP || b == g.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function (b, d) {
            var g, h = "webkit khtml moz ms o ".split(" ");
            if (d && b.style) {
                for (var l = 0; h.length > l; l++)
                    for (var n in d) d.hasOwnProperty(n) && (g = n, h[l] && (g = h[l] + g.substring(0, 1).toUpperCase() + g.substring(1)), b.style[g] = d[n]);
                "none" == d.userSelect && (b.onselectstart = function () {
                    return !1
                })
            }
        }
    };
    g.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function (b, d) {
            this.current || (this.stopped = !1, this.current = {
                inst: b,
                startEvent: g.utils.extend({}, d),
                lastEvent: !1,
                name: ""
            }, this.detect(d))
        },
        detect: function (b) {
            if (this.current && !this.stopped) {
                b = this.extendEventData(b);
                for (var d = this.current.inst.options, h = 0, l = this.gestures.length; l > h; h++) {
                    var n = this.gestures[h];
                    if (!this.stopped && !1 !== d[n.name] && !1 === n.handler.call(n, b, this.current.inst)) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = b), b.eventType == g.EVENT_END && !b.touches.length - 1 && this.stopDetect(), b
            }
        },
        stopDetect: function () {
            this.previous = g.utils.extend({}, this.current);
            this.current = null;
            this.stopped = !0
        },
        extendEventData: function (b) {
            var d = this.current.startEvent;
            if (d && (b.touches.length != d.touches.length || b.touches === d.touches)) {
                d.touches = [];
                for (var h = 0, l = b.touches.length; l > h; h++) d.touches.push(g.utils.extend({}, b.touches[h]))
            }
            var h = b.timeStamp - d.timeStamp,
                l = b.center.pageX - d.center.pageX,
                n = b.center.pageY - d.center.pageY,
                s = g.utils.getVelocity(h, l, n);
            return g.utils.extend(b, {
                deltaTime: h,
                deltaX: l,
                deltaY: n,
                velocityX: s.x,
                velocityY: s.y,
                distance: g.utils.getDistance(d.center, b.center),
                angle: g.utils.getAngle(d.center, b.center),
                direction: g.utils.getDirection(d.center, b.center),
                scale: g.utils.getScale(d.touches, b.touches),
                rotation: g.utils.getRotation(d.touches, b.touches),
                startEvent: d
            }), b
        },
        register: function (b) {
            var h = b.defaults || {};
            return h[b.name] === d && (h[b.name] = !0), g.utils.extend(g.defaults, h, !0), b.index = b.index || 1E3, this.gestures.push(b), this.gestures.sort(function (b, d) {
                return b.index < d.index ? -1 : b.index > d.index ? 1 : 0
            }), this.gestures
        }
    };
    g.gestures = g.gestures || {};
    g.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (b, d) {
            switch (b.eventType) {
            case g.EVENT_START:
                clearTimeout(this.timer);
                g.detection.current.name = this.name;
                this.timer = setTimeout(function () {
                    "hold" == g.detection.current.name && d.trigger("hold", b)
                }, d.options.hold_timeout);
                break;
            case g.EVENT_MOVE:
                b.distance > d.options.hold_threshold && clearTimeout(this.timer);
                break;
            case g.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    };
    g.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (b, d) {
            if (b.eventType == g.EVENT_END) {
                var h = g.detection.previous,
                    l = !1;
                b.deltaTime > d.options.tap_max_touchtime || b.distance > d.options.tap_max_distance || (h && "tap" == h.name && b.timeStamp - h.lastEvent.timeStamp < d.options.doubletap_interval && b.distance < d.options.doubletap_distance && (d.trigger("doubletap", b), l = !0), l && !d.options.tap_always || (g.detection.current.name = "tap", d.trigger(g.detection.current.name, b)))
            }
        }
    };
    g.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: 0.7
        },
        handler: function (b, d) {
            b.eventType != g.EVENT_END || 0 < d.options.swipe_max_touches && b.touches.length > d.options.swipe_max_touches || (b.velocityX > d.options.swipe_velocity || b.velocityY > d.options.swipe_velocity) && (d.trigger(this.name, b), d.trigger(this.name + b.direction, b))
        }
    };
    g.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (b, h) {
            if (g.detection.current.name != this.name && this.triggered) return h.trigger(this.name + "end", b), this.triggered = !1, d;
            if (!(0 < h.options.drag_max_touches && b.touches.length > h.options.drag_max_touches)) switch (b.eventType) {
            case g.EVENT_START:
                this.triggered = !1;
                break;
            case g.EVENT_MOVE:
                if (b.distance < h.options.drag_min_distance && g.detection.current.name != this.name) break;
                g.detection.current.name = this.name;
                (g.detection.current.lastEvent.drag_locked_to_axis || h.options.drag_lock_to_axis && h.options.drag_lock_min_distance <= b.distance) && (b.drag_locked_to_axis = !0);
                var l = g.detection.current.lastEvent.direction;
                b.drag_locked_to_axis && l !== b.direction && (b.direction = g.utils.isVertical(l) ? 0 > b.deltaY ? g.DIRECTION_UP : g.DIRECTION_DOWN : 0 > b.deltaX ? g.DIRECTION_LEFT : g.DIRECTION_RIGHT);
                this.triggered || (h.trigger(this.name + "start", b), this.triggered = !0);
                h.trigger(this.name, b);
                h.trigger(this.name + b.direction, b);
                (h.options.drag_block_vertical && g.utils.isVertical(b.direction) || h.options.drag_block_horizontal && !g.utils.isVertical(b.direction)) && b.preventDefault();
                break;
            case g.EVENT_END:
                this.triggered && h.trigger(this.name + "end", b), this.triggered = !1
            }
        }
    };
    g.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: 0.01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function (b, h) {
            if (g.detection.current.name != this.name && this.triggered) return h.trigger(this.name + "end", b), this.triggered = !1, d;
            if (!(2 > b.touches.length)) switch (h.options.transform_always_block && b.preventDefault(), b.eventType) {
            case g.EVENT_START:
                this.triggered = !1;
                break;
            case g.EVENT_MOVE:
                var l = Math.abs(1 - b.scale),
                    n = Math.abs(b.rotation);
                if (h.options.transform_min_scale > l && h.options.transform_min_rotation > n) break;
                g.detection.current.name = this.name;
                this.triggered || (h.trigger(this.name + "start", b), this.triggered = !0);
                h.trigger(this.name, b);
                n > h.options.transform_min_rotation && h.trigger("rotate", b);
                l > h.options.transform_min_scale && (h.trigger("pinch", b), h.trigger("pinch" + (1 > b.scale ? "in" : "out"), b));
                break;
            case g.EVENT_END:
                this.triggered && h.trigger(this.name + "end", b), this.triggered = !1
            }
        }
    };
    g.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (b, h) {
            return h.options.prevent_mouseevents && b.pointerType == g.POINTER_MOUSE ? (b.stopDetect(), d) : (h.options.prevent_default && b.preventDefault(), b.eventType == g.EVENT_START && h.trigger(this.name, b), d)
        }
    };
    g.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (b, d) {
            b.eventType == g.EVENT_END && d.trigger(this.name, b)
        }
    };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = g : (b.Hammer = g, "function" == typeof b.define && b.define.amd && b.define("hammer", [], function () {
        return g
    }))
})(this);
! function (b, d) {
    function h(b, h) {
        b.event.bindDom = function (b, g, k) {
            h(b).on(g, function (b) {
                var g = b.originalEvent || b;
                g.pageX === d && (g.pageX = b.pageX, g.pageY = b.pageY);
                g.target || (g.target = b.target);
                g.which === d && (g.which = g.button);
                g.preventDefault || (g.preventDefault = b.preventDefault);
                g.stopPropagation || (g.stopPropagation = b.stopPropagation);
                k.call(this, g)
            })
        };
        b.Instance.prototype.on = function (b, d) {
            return h(this.element).on(b, d)
        };
        b.Instance.prototype.off = function (b, d) {
            return h(this.element).off(b, d)
        };
        b.Instance.prototype.trigger = function (b, d) {
            var g = h(this.element);
            return g.has(d.target).length && (g = h(d.target)), g.trigger({
                type: b,
                gesture: d
            })
        };
        h.fn.hammer = function (d) {
            return this.each(function () {
                var s = h(this),
                    k = s.data("hammer");
                k ? k && d && b.utils.extend(k.options, d) : s.data("hammer", new b(this, d || {}))
            })
        }
    }
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(["hammer", "jquery"], h) : h(b.Hammer, b.jQuery || b.Zepto)
}(this);
(function (b) {
    function d(b) {
        return "object" == typeof b ? b : {
            top: b,
            left: b
        }
    }
    var h = b.scrollTo = function (d, h, n) {
        return b(window).scrollTo(d, h, n)
    };
    h.defaults = {
        axis: "xy",
        duration: 1.3 <= parseFloat(b.fn.jquery) ? 0 : 1,
        limit: !0
    };
    h.window = function (d) {
        return b(window)._scrollable()
    };
    b.fn._scrollable = function () {
        return this.map(function () {
            if (this.nodeName && -1 == b.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])) return this;
            var d = (this.contentWindow || this).document || this.ownerDocument || this;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
        })
    };
    b.fn.scrollTo = function (g, l, n) {
        "object" == typeof l && (n = l, l = 0);
        "function" == typeof n && (n = {
            onAfter: n
        });
        "max" == g && (g = 9E9);
        n = b.extend({}, h.defaults, n);
        l = l || n.duration;
        n.queue = n.queue && 1 < n.axis.length;
        n.queue && (l /= 2);
        n.offset = d(n.offset);
        n.over = d(n.over);
        return this._scrollable().each(function () {
            function s(b) {
                m.animate(E, l, n.easing, b && function () {
                    b.call(this, r, n)
                })
            }
            if (null != g) {
                var k = this,
                    m = b(k),
                    r = g,
                    u, E = {}, y = m.is("html,body");
                switch (typeof r) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(r)) {
                        r = d(r);
                        break
                    }
                    r = b(r, this);
                    if (!r.length) return;
                case "object":
                    if (r.is || r.style) u = (r = b(r)).offset()
                }
                b.each(n.axis.split(""), function (b, d) {
                    var g = "x" == d ? "Left" : "Top",
                        l = g.toLowerCase(),
                        G = "scroll" + g,
                        H = k[G],
                        J = h.max(k, d);
                    u ? (E[G] = u[l] + (y ? 0 : H - m.offset()[l]), n.margin && (E[G] -= parseInt(r.css("margin" + g)) || 0, E[G] -= parseInt(r.css("border" + g + "Width")) || 0), E[G] += n.offset[l] || 0, n.over[l] && (E[G] += r["x" == d ? "width" : "height"]() * n.over[l])) : (g = r[l], E[G] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * J : g);
                    n.limit && /^\d+$/.test(E[G]) && (E[G] = 0 >= E[G] ? 0 : Math.min(E[G], J));
                    !b && n.queue && (H != E[G] && s(n.onAfterFirst), delete E[G])
                });
                s(n.onAfter)
            }
        }).end()
    };
    h.max = function (d, h) {
        var n = "x" == h ? "Width" : "Height",
            s = "scroll" + n;
        if (!b(d).is("html,body")) return d[s] - b(d)[n.toLowerCase()]();
        var n = "client" + n,
            k = d.ownerDocument.documentElement,
            m = d.ownerDocument.body;
        return Math.max(k[s], m[s]) - Math.min(k[n], m[n])
    }
})(jQuery);
(function () {
    var b = [].indexOf || function (b) {
            for (var d = 0, l = this.length; d < l; d++)
                if (d in this && this[d] === b) return d;
            return -1
        }, d = [].slice;
    (function (b, d) {
        return "function" === typeof define && define.amd ? define("waypoints", ["jquery"], function (l) {
            return d(l, b)
        }) : d(b.jQuery, b)
    })(this, function (h, g) {
            var l, n, s, k, m, r, u, E, y, z, X, D, B, G, H, J;
            l = h(g);
            E = 0 <= b.call(g, "ontouchstart");
            k = {
                horizontal: {},
                vertical: {}
            };
            m = 1;
            u = {};
            r = "waypoints-context-id";
            X = "resize.waypoints";
            D = "scroll.waypoints";
            B = 1;
            G = "waypoints-waypoint-ids";
            H = "waypoint";
            J = "waypoints";
            n = function () {
                function b(d) {
                    var k = this;
                    this.$element = d;
                    this.element = d[0];
                    this.didScroll = this.didResize = !1;
                    this.id = "context" + m++;
                    this.oldScroll = {
                        x: d.scrollLeft(),
                        y: d.scrollTop()
                    };
                    this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    };
                    d.data(r, this.id);
                    u[this.id] = this;
                    d.bind(D, function () {
                        if (!k.didScroll && !E) return k.didScroll = !0, g.setTimeout(function () {
                            k.doScroll();
                            return k.didScroll = !1
                        }, h[J].settings.scrollThrottle)
                    });
                    d.bind(X, function () {
                        if (!k.didResize) return k.didResize = !0, g.setTimeout(function () {
                            h[J]("refresh");
                            return k.didResize = !1
                        }, h[J].settings.resizeThrottle)
                    })
                }
                b.prototype.doScroll = function () {
                    var b, d = this;
                    b = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    };
                    if (E && (!b.vertical.oldScroll || !b.vertical.newScroll)) h[J]("refresh");
                    h.each(b, function (b, g) {
                        var k, m, l;
                        l = [];
                        k = (m = g.newScroll > g.oldScroll) ? g.forward : g.backward;
                        h.each(d.waypoints[b], function (b, d) {
                            var k, h;
                            if (g.oldScroll < (k = d.offset) && k <= g.newScroll || g.newScroll < (h = d.offset) && h <= g.oldScroll) return l.push(d)
                        });
                        l.sort(function (b, d) {
                            return b.offset - d.offset
                        });
                        m || l.reverse();
                        return h.each(l, function (b, d) {
                            if (d.options.continuous || b === l.length - 1) return d.trigger([k])
                        })
                    });
                    return this.oldScroll = {
                        x: b.horizontal.newScroll,
                        y: b.vertical.newScroll
                    }
                };
                b.prototype.refresh = function () {
                    var b, d, g = this;
                    d = h.isWindow(this.element);
                    b = this.$element.offset();
                    this.doScroll();
                    b = {
                        horizontal: {
                            contextOffset: d ? 0 : b.left,
                            contextScroll: d ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: d ? 0 : b.top,
                            contextScroll: d ? 0 : this.oldScroll.y,
                            contextDimension: d ? h[J]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    };
                    return h.each(b, function (b, d) {
                        return h.each(g.waypoints[b], function (b, g) {
                            var k, m, l, t, n;
                            k = g.options.offset;
                            l = g.offset;
                            m = h.isWindow(g.element) ? 0 : g.$element.offset()[d.offsetProp];
                            h.isFunction(k) ? k = k.apply(g.element) : "string" === typeof k && (k = parseFloat(k), -1 < g.options.offset.indexOf("%") && (k = Math.ceil(d.contextDimension * k / 100)));
                            g.offset = m - d.contextOffset + d.contextScroll - k;
                            if ((!g.options.onlyOnScroll || null == l) && g.enabled) {
                                if (null !== l && l < (t = d.oldScroll) && t <= g.offset) return g.trigger([d.backward]);
                                if (null !== l && l > (n = d.oldScroll) && n >= g.offset || null === l && d.oldScroll >= g.offset) return g.trigger([d.forward])
                            }
                        })
                    })
                };
                b.prototype.checkEmpty = function () {
                    if (h.isEmptyObject(this.waypoints.horizontal) && h.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([X, D].join(" ")), delete u[this.id]
                };
                return b
            }();
            s = function () {
                function b(d, g, m) {
                    var l;
                    m = h.extend({}, h.fn[H].defaults, m);
                    "bottom-in-view" === m.offset && (m.offset = function () {
                        var b;
                        b = h[J]("viewportHeight");
                        h.isWindow(g.element) || (b = g.$element.height());
                        return b - h(this).outerHeight()
                    });
                    this.$element = d;
                    this.element = d[0];
                    this.axis = m.horizontal ? "horizontal" : "vertical";
                    this.callback = m.handler;
                    this.context = g;
                    this.enabled = m.enabled;
                    this.id = "waypoints" +
                        B++;
                    this.offset = null;
                    this.options = m;
                    g.waypoints[this.axis][this.id] = this;
                    k[this.axis][this.id] = this;
                    m = null != (l = d.data(G)) ? l : [];
                    m.push(this.id);
                    d.data(G, m)
                }
                b.prototype.trigger = function (b) {
                    if (this.enabled && (null != this.callback && this.callback.apply(this.element, b), this.options.triggerOnce)) return this.destroy()
                };
                b.prototype.disable = function () {
                    return this.enabled = !1
                };
                b.prototype.enable = function () {
                    this.context.refresh();
                    return this.enabled = !0
                };
                b.prototype.destroy = function () {
                    delete k[this.axis][this.id];
                    delete this.context.waypoints[this.axis][this.id];
                    return this.context.checkEmpty()
                };
                b.getWaypointsByElement = function (b) {
                    var d;
                    b = h(b).data(G);
                    if (!b) return [];
                    d = h.extend({}, k.horizontal, k.vertical);
                    return h.map(b, function (b) {
                        return d[b]
                    })
                };
                return b
            }();
            z = {
                init: function (b, d) {
                    null == d && (d = {});
                    null == d.handler && (d.handler = b);
                    this.each(function () {
                        var b, g, k;
                        b = h(this);
                        k = null != (g = d.context) ? g : h.fn[H].defaults.context;
                        h.isWindow(k) || (k = b.closest(k));
                        k = h(k);
                        (g = u[k.data(r)]) || (g = new n(k));
                        return new s(b, g, d)
                    });
                    h[J]("refresh");
                    return this
                },
                disable: function () {
                    return z._invoke(this, "disable")
                },
                enable: function () {
                    return z._invoke(this, "enable")
                },
                destroy: function () {
                    return z._invoke(this, "destroy")
                },
                prev: function (b, d) {
                    return z._traverse.call(this, b, d, function (b, d, g) {
                        if (0 < d) return b.push(g[d - 1])
                    })
                },
                next: function (b, d) {
                    return z._traverse.call(this, b, d, function (b, d, g) {
                        if (d < g.length - 1) return b.push(g[d + 1])
                    })
                },
                _traverse: function (b, d, k) {
                    var m, l;
                    null == b && (b = "vertical");
                    null == d && (d = g);
                    l = y.aggregate(d);
                    m = [];
                    this.each(function () {
                        var d;
                        d = h.inArray(this, l[b]);
                        return k(m, d, l[b])
                    });
                    return this.pushStack(m)
                },
                _invoke: function (b, d) {
                    b.each(function () {
                        var b;
                        b = s.getWaypointsByElement(this);
                        return h.each(b, function (b, g) {
                            g[d]();
                            return !0
                        })
                    });
                    return this
                }
            };
            h.fn[H] = function () {
                var b, g;
                g = arguments[0];
                b = 2 <= arguments.length ? d.call(arguments, 1) : [];
                return z[g] ? z[g].apply(this, b) : h.isFunction(g) ? z.init.apply(this, arguments) : h.isPlainObject(g) ? z.init.apply(this, [null, g]) : g ? h.error("The " + g + " method does not exist in jQuery Waypoints.") : h.error("jQuery Waypoints needs a callback function or handler option.")
            };
            h.fn[H].defaults = {
                context: g,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            };
            y = {
                refresh: function () {
                    return h.each(u, function (b, d) {
                        return d.refresh()
                    })
                },
                viewportHeight: function () {
                    var b;
                    return null != (b = g.innerHeight) ? b : l.height()
                },
                aggregate: function (b) {
                    var d, g, m;
                    d = k;
                    b && (d = null != (m = u[h(b).data(r)]) ? m.waypoints : void 0);
                    if (!d) return [];
                    g = {
                        horizontal: [],
                        vertical: []
                    };
                    h.each(g, function (b, k) {
                        h.each(d[b], function (b, d) {
                            return k.push(d)
                        });
                        k.sort(function (b, d) {
                            return b.offset - d.offset
                        });
                        g[b] = h.map(k, function (b) {
                            return b.element
                        });
                        return g[b] = h.unique(g[b])
                    });
                    return g
                },
                above: function (b) {
                    null == b && (b = g);
                    return y._filter(b, "vertical", function (b, d) {
                        return d.offset <= b.oldScroll.y
                    })
                },
                below: function (b) {
                    null == b && (b = g);
                    return y._filter(b, "vertical", function (b, d) {
                        return d.offset > b.oldScroll.y
                    })
                },
                left: function (b) {
                    null == b && (b = g);
                    return y._filter(b, "horizontal", function (b, d) {
                        return d.offset <= b.oldScroll.x
                    })
                },
                right: function (b) {
                    null == b && (b = g);
                    return y._filter(b, "horizontal", function (b, d) {
                        return d.offset > b.oldScroll.x
                    })
                },
                enable: function () {
                    return y._invoke("enable")
                },
                disable: function () {
                    return y._invoke("disable")
                },
                destroy: function () {
                    return y._invoke("destroy")
                },
                extendFn: function (b, d) {
                    return z[b] = d
                },
                _invoke: function (b) {
                    var d;
                    d = h.extend({}, k.vertical, k.horizontal);
                    return h.each(d, function (d, g) {
                        g[b]();
                        return !0
                    })
                },
                _filter: function (b, d, g) {
                    var k, m;
                    k = u[h(b).data(r)];
                    if (!k) return [];
                    m = [];
                    h.each(k.waypoints[d], function (b, d) {
                        if (g(k, d)) return m.push(d)
                    });
                    m.sort(function (b, d) {
                        return b.offset - d.offset
                    });
                    return h.map(m, function (b) {
                        return b.element
                    })
                }
            };
            h[J] = function () {
                var b, g;
                g = arguments[0];
                b = 2 <= arguments.length ? d.call(arguments, 1) : [];
                return y[g] ? y[g].apply(null, b) : y.aggregate.call(null, g)
            };
            h[J].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            };
            return l.load(function () {
                return h[J]("refresh")
            })
        })
}).call(this);
(function () {
    var b;
    b = function (b) {
        var h;
        return h = function (b) {
            return "" !== b && !isNaN(b) && Math.round(b) === b
        }, b.fn.stripClass = function (b, d) {
            var h;
            return h = RegExp((d ? "\\S+" : "\\b") + b + "\\S*", "g"), this.attr("class", function (b, d) {
                return d ? d.replace(h, "") : void 0
            }), this
        }, b.onepage_scroll = function (g, l) {
            var n, s;
            return this.settings = {}, this.$element = b(g), this.state = "", this.eventState = "", this.quietPeriod = 500, s = function () {
                var b, d;
                return b = document.body || document.documentElement, d = b.style, void 0 !== d.transitions || void 0 !== d.WebkitTransition
            }, n = function () {
                var b, d, g, h, l, n, s;
                if (d = ["Webkit", "Moz", "O", "ms"], g = "transform", l = document.body || document.documentElement, n = l.style, h = void 0 !== n[g], !h)
                    for (g = g.charAt(0).toUpperCase() + g.slice(1), l = 0, s = d.length; s > l; l++)
                        if (b = d[l], void 0 !== n[b + g]) return !0;
                return h
            }, this.transformPage = function (g, h) {
                var l, n = this;
                return h = "function" != typeof h ? b.noop : h, l = -100 * (g - 1), this.supportTransition && this.supportTransform ? (this.$element.css({
                    "-ms-transform": "translate(0, " + l + "%)",
                    "-ms-transition": "all " +
                        this.settings.animationTime + "ms " + this.settings.easing,
                    "-webkit-transform": "translate(0, " + l + "%)",
                    "-webkit-transition": "all " + this.settings.animationTime + "ms " + this.settings.easing,
                    transform: "translate(0, " + l + "%)",
                    transition: "all " + this.settings.animationTime + "ms " + this.settings.easing
                }), this.$element.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    return n.settings.afterMove(g), h(g)
                })) : this.$element.animate({
                    top: "" + l + "%"
                }, function () {
                    return n.settings.afterMove(g), h(g)
                }), this
            }, this.moveDown = function () {
                var g;
                return g = b("" + this.settings.sectionContainer + ".active").data("index"), this.moveTo(g + 1)
            }, this.moveUp = function () {
                var g;
                return g = b("" + this.settings.sectionContainer + ".active").data("index"), this.moveTo(g - 1)
            }, this.moveTo = function (g) {
                var m, l, n, s, y, z = this;
                if (m = b("" + this.settings.sectionContainer + ".active"), l = m.data("index"), !h(g))
                    if ((y = this.$element.find(g), 1 !== y.length) || (g = y.data("index"), !h(g))) return;
                if (g !== l) {
                    if (n = g, this.settings.smooth && 1 < Math.abs(l - g) && (n = g > l ? l + 1 : l - 1), 1 > n || n > this.total) {
                        if (!this.settings.loop) return;
                        n = 1 > n ? this.total : 1
                    }
                    return s = b("" + this.settings.sectionContainer + "[data-index='" + n + "']"), this.settings.beforeMove(m.data("index")), m.removeClass("active"), s.addClass("active"), this.settings.pagination && (b(".onepage-pagination li a.active").removeClass("active"), b(".onepage-pagination li a[data-index='" + n + "']").addClass("active")), b("body").removeClass("viewing-page-" + m.data("index")).addClass("viewing-page-" + s.data("index")), this.settings.updateURL && this.updateHistory(n), this.settings.smooth && g !== n ? this.transformPage(n, function () {
                        return z.moveTo(g)
                    }) : this.transformPage(n), this
                }
            }, this.updateHistory = function (b) {
                var d;
                return history.replaceState && (d = window.location.href.substr(0, "" + window.location.href.indexOf("#") + "#" + b), history.pushState({}, document.title, d)), this
            }, this.bindEvents = function () {
                return "binded" !== this.eventState && "created" === this.state ? (this.bindScrollEvents(), this.bindSwipeEvents(), this.settings.keyboard && this.bindKeyEvents(), this.eventState = "binded", this) : void 0
            }, this.unbindEvents = function () {
                return "binded" === this.eventState ? (this.unbindScrollEvents(), this.unbindSwipeEvents(), this.settings.keyboard && this.unbindKeyEvents(), this.eventState = "unbinded", this) : void 0
            }, this.bindScrollEvents = function () {
                var g = this;
                return b(document).bind("mousewheel.onepage DOMMouseScroll.onepage", function (b) {
                    var d;
                    return b.preventDefault(), d = b.originalEvent.wheelDelta || -b.originalEvent.detail, g.init_scroll(b, d)
                }), this
            }, this.unbindScrollEvents = function () {
                return b(document).unbind("mousewheel.onepage DOMMouseScroll.onepage"), this
            }, this.bindSwipeEvents = function () {
                var g = this;
                return this.$element.hammer(), this.$element.hammer().on("swipedown.onepage", function (b) {
                    return b.preventDefault(), b.gesture.preventDefault(), g.moveUp()
                }).on("swipeup.onepage", function (b) {
                    return b.preventDefault(), b.gesture.preventDefault(), g.moveDown()
                }), b(document).bind("touchmove.onepage", function (b) {
                    return b.preventDefault(), !1
                }), this
            }, this.unbindSwipeEvents = function () {
                var g;
                return g = this.$element.hammer(), g.off("swipedown.onepage"), g.off("swipeup.onepage"), b(document).unbind("touchmove.onepage"), this
            }, this.bindKeyEvents = function () {
                var g = this;
                return b(document).on("keydown.onepage", function (b) {
                    var d;
                    if (d = b.target.nodeName, "INPUT" !== d && "TEXTAREA" !== d) {
                        switch (b.which) {
                        case 33:
                        case 38:
                            g.moveUp();
                            break;
                        case 34:
                        case 40:
                            g.moveDown();
                            break;
                        case 36:
                            g.moveTo(1);
                            break;
                        case 35:
                            g.moveTo(g.total);
                            break;
                        default:
                            return
                        }
                        return b.preventDefault()
                    }
                }), this
            }, this.unbindKeyEvents = function () {
                return b(document).off("keydown.onepage"), this
            }, this.viewportTooSmall = function () {
                return !1 !== this.settings.responsiveFallbackWidth && b(window).width() < this.settings.responsiveFallbackWidth ? !0 : !1 !== this.settings.responsiveFallbackHeight && b(window).height() < this.settings.responsiveFallbackHeight ? !0 : !1
            }, this.watchResponsive = function () {
                return this.viewportTooSmall() ? "created" === this.state && this.destroy() : "created" !== this.state && this.create(), this
            }, this.init_scroll = function (b, d) {
                var g;
                return g = (new Date).getTime(), g - this.lastAnimation < this.quietPeriod + this.settings.animationTime ? (b.preventDefault(), void 0) : (0 > d ? this.moveDown() : this.moveUp(), this.lastAnimation = g, this)
            }, this.bindPagination = function () {
                var g = this;
                return b(".onepage-pagination").on("click.onepage", "li a", function (h) {
                    var l;
                    return l = b(h.currentTarget).data("index"), g.moveTo(l)
                }), this
            }, this.createSections = function () {
                var g, h = this;
                return g = 0, b.each(this.sections, function (l, n) {
                    return b(n).addClass("section").attr("data-index", l + 1).css({
                        position: "absolute",
                        top: "" + g + "%"
                    }), g += 100, h.settings.pagination ? h.paginationList += "<li><a data-index='" +
                        (l + 1) + "' href='#" + (l + 1) + "'></a></li>" : void 0
                }), this
            }, this.destroySections = function () {
                return this.sections.removeClass("section active").removeAttr("data-index style"), this
            }, this.destroy = function () {
                return "created" === this.state && (this.settings.beforeDestroy(this), b("html, body").removeClass("onepage-scroll-enabled"), b("body").stripClass("viewing-page-"), this.$element.removeClass("onepage-wrapper").removeAttr("style"), this.destroySections(), this.settings.pagination && (b("ul.onepage-pagination").off("click.onepage", "li a"), b("ul.onepage-pagination").remove()), this.unbindEvents(), this.state = "destroyed", this.settings.afterDestroy(this)), this
            }, this.create = function () {
                var g, h;
                if ("created" !== this.state) {
                    if (this.viewportTooSmall()) return;
                    this.settings.beforeCreate(this);
                    this.sections = b(this.settings.sectionContainer);
                    this.total = this.sections.length;
                    this.lastAnimation = 0;
                    this.paginationList = "";
                    b("html, body").addClass("onepage-scroll-enabled");
                    this.$element.addClass("onepage-wrapper").css("position", "relative");
                    this.createSections();
                    this.settings.pagination && (b("<ul class='onepage-pagination'>" + this.paginationList + "</ul>").prependTo("body"), h = b(".onepage-pagination").height() / 2 * -1, b(".onepage-pagination").css("margin-top", h), this.bindPagination());
                    this.reset();
                    this.settings.updateURL && "" !== window.location.hash && "#1" !== window.location.hash && (g = window.location.hash.replace("#", ""), this.moveTo(g));
                    this.state = "created";
                    this.bindEvents();
                    this.settings.afterCreate(this)
                }
                return this
            }, this.reset = function () {
                return b("" + this.settings.sectionContainer + "[data-index='1']").addClass("active"), b("body").addClass("viewing-page-1"), this.settings.pagination && b(".onepage-pagination li a[data-index='1']").addClass("active"), b(window).scrollTop(0)
            }, this.init = function () {
                var g = this;
                return this.settings = b.extend({}, this.defaults, l), this.supportTransition = s(), this.supportTransform = n(), (!1 !== this.settings.responsiveFallbackWidth || !1 !== this.settings.responsiveFallbackHeight) && b(window).on("resize.onepage", function () {
                    return g.watchResponsive()
                }), this.create(), this
            }, this.init(), this
        }, b.onepage_scroll.prototype.defaults = {
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1E3,
            pagination: !0,
            keyboard: !1,
            updateURL: !1,
            beforeMove: b.noop,
            afterMove: b.noop,
            loop: !1,
            responsiveFallbackWidth: !1,
            responsiveFallbackHeight: !1,
            smooth: !1,
            beforeCreate: b.noop,
            afterCreate: b.noop,
            beforeDestroy: b.noop,
            afterDestroy: b.noop
        }, b.fn.onepage_scroll = function (g) {
            return this.each(function () {
                var h;
                return void 0 === b(this).data("onepage_scroll") ? (h = new b.onepage_scroll(this, g), b(this).data("onepage_scroll", h)) : void 0
            }), 1 === this.length && void 0 !== b(this).data("onepage_scroll") ? b(this).data("onepage_scroll") : void 0
        }, b.fn.onepage_scroll
    };
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}).call(this);
var tangramClasses = [{
    divClass: "gru",
    u: 0
}, {
    divClass: "runner",
    u: 0
}, {
    divClass: "cup",
    u: 0
}, {
    divClass: "triangle",
    u: 0
}, {
    divClass: "barca",
    u: 0
}];
/firefox/i.test(navigator.userAgent) || tangramClasses.push({
    divClass: "cammello",
    u: 0
});
window.currentTangram = 0;
/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("body").addClass("mobile"); - 1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $("body").addClass("webkit-text-stroke");
$(".main").onepage_scroll({
    sectionContainer: "section.onescroll-page",
    easing: "ease",
    animationTime: 1E3,
    pagination: !0,
    updateURL: !0,
    keyboard: !0,
    beforeMove: function (b) {
        verticalCenter();
        0 == $("#mapstyle").length && $("head").append($("<style/>", {
            id: "mapstyle",
            html: ""
        }));
        $("#mapstyle").html("@media only screen and (min-width: 64.063em){.viewing-page-7 .main section.page7 .map-pin, .fallback-scroll-6 .main section.page7 .map-pin { background: url(//static.studioup.it/img/pinpoint.gif?p" + (new Date).getTime() + ") !important; background-repeat: no-repeat !important; }}")
    },
    afterMove: function (b) {},
    loop: !1,
    responsiveFallbackWidth: 1025
});
$("[data-menu-index]").on("click", function (b) {
    b.preventDefault();
    b = parseInt($(this).attr("data-menu-index"));
    1024 < $(window).width() ? $(".main").data("onepage_scroll").moveTo(b) : $(".main").scrollTo($(".onescroll-page:eq(" + (b - 1) + ")"), 1E3)
});

function verticalCenter() {
    $(".onepage-pagination a").each(function () {
        1 == $(this).attr("data-index") ? $(this).html('<span class="name">home</span>') : $(this).html('<span class="name">' + $(".menus .main-nav [data-menu-index=" + $(this).attr("data-index") + "]").text() + "</span>")
    });
    $("body").hasClass("onepage-scroll-enabled") ? ($("body").removeClass("fallback-scroll-6"), $("body").removeClass("fallback")) : ($("body").addClass("fallback"), $("body").addClass("fallback-scroll-0"));
    var b = $(".menus").height();
    $(".top-content").each(function () {
        $(this).parent().hasClass("page1") ? $(this).css("margin-top", 30) : $(this).css("margin-top", b + 30)
    });
    var d = 0;
    $(".page_container").each(function () {
        var h = $(this).height(),
            g = $(this).parent().height(),
            l;
        l = $(this).parent().hasClass("page1") ? 0 : $(this).parent().find(".top-content").height() + b + 30;
        l = null == l ? 0 : l + 30;
        h = (g - h) / 2;
        l > h ? ($(this).css("top", l), $(this).css("margin-bottom", l), $(this).parent().hasClass("page7") && $(this).parent().css("background-position", "center " + l + "px")) : ($(this).css("top", h), $(this).css("margin-bottom", h), $(this).parent().hasClass("page7") && $(this).parent().css("background-position", "center " + h + "px"));
        $(this).height() > d && (d = $(this).height())
    })
}

function fallbackclass(b) {
    b = $(".onescroll-page").index(b);
    for (i in $(".onescroll-page")) i != b && $("body").removeClass("fallback-scroll-" + i);
    $("body").addClass("fallback-scroll-" + b)
}
$(document).ready(function () {
    verticalCenter();
    $("body").fadeTo(200, 1);
    $(".onescroll-page").waypoint(function (b) {
        "down" == b && fallbackclass($(this))
    }, {
        offset: "40%",
        context: ".main"
    });
    $(".onescroll-page").waypoint(function (b) {
        "up" == b && fallbackclass($(this))
    }, {
        offset: "-40%",
        context: ".main"
    });
    $("[data-contact-link]").on("click", function (b) {
        $("[data-contact-link]").removeClass("active");
        $(this).addClass("active");
        b.preventDefault()
    });
    $("#boxbasic2").on("mouseover", function () {
        var b;
        tangramClasses[window.currentTangram +
            1] ? window.currentTangram++ : window.currentTangram = 0;
        for (b in tangramClasses) $(this).removeClass(tangramClasses[b].divClass);
        $(this).addClass(tangramClasses[window.currentTangram].divClass)
    });
    $("#boxbasic2").on("mouseleave", function () {
        for (var b in tangramClasses) $(this).removeClass(tangramClasses[b].divClass)
    })
});
$(window).resize(function () {
    verticalCenter()
});
$(".mobile-nav .mobile-up").on("click", function () {
    $(".main").data("onepage_scroll").moveUp()
});
$(".mobile-nav .mobile-down").on("click", function () {
    $(".main").data("onepage_scroll").moveDown()
});
$(".button-detail").on("click", function () {
    $(this).parent().addClass("answered");
    $(this).parent().find(".button-back").addClass("alert")
});
$(".button-back").on("click", function () {
    $(this).parent().removeClass("answered");
    $(this).removeClass("alert")
});
FSS = {
    FRONT: 0,
    BACK: 1,
    DOUBLE: 2,
    SVGNS: "http://www.w3.org/2000/svg"
};
FSS.Array = "function" === typeof Float32Array ? Float32Array : Array;
FSS.Utils = {
    isNumber: function (b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }
};
(function () {
    for (var b = 0, d = ["ms", "moz", "webkit", "o"], h = 0; h < d.length && !window.requestAnimationFrame; ++h) window.requestAnimationFrame = window[d[h] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d[h] + "CancelAnimationFrame"] || window[d[h] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (d, h) {
        var n = (new Date).getTime(),
            s = Math.max(0, 16 - (n - b)),
            k = window.setTimeout(function () {
                d(n + s)
            }, s);
        b = n + s;
        return k
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (b) {
        clearTimeout(b)
    })
})();
Math.PIM2 = 2 * Math.PI;
Math.PID2 = Math.PI / 2;
Math.randomInRange = function (b, d) {
    return b + (d - b) * Math.random()
};
Math.clamp = function (b, d, h) {
    b = Math.max(b, d);
    return b = Math.min(b, h)
};
FSS.Vector3 = {
    create: function (b, d, h) {
        var g = new FSS.Array(3);
        this.set(g, b, d, h);
        return g
    },
    clone: function (b) {
        var d = this.create();
        this.copy(d, b);
        return d
    },
    set: function (b, d, h, g) {
        b[0] = d || 0;
        b[1] = h || 0;
        b[2] = g || 0;
        return this
    },
    setX: function (b, d) {
        b[0] = d || 0;
        return this
    },
    setY: function (b, d) {
        b[1] = d || 0;
        return this
    },
    setZ: function (b, d) {
        b[2] = d || 0;
        return this
    },
    copy: function (b, d) {
        b[0] = d[0];
        b[1] = d[1];
        b[2] = d[2];
        return this
    },
    add: function (b, d) {
        b[0] += d[0];
        b[1] += d[1];
        b[2] += d[2];
        return this
    },
    addVectors: function (b, d, h) {
        b[0] = d[0] +
            h[0];
        b[1] = d[1] + h[1];
        b[2] = d[2] + h[2];
        return this
    },
    addScalar: function (b, d) {
        b[0] += d;
        b[1] += d;
        b[2] += d;
        return this
    },
    subtract: function (b, d) {
        b[0] -= d[0];
        b[1] -= d[1];
        b[2] -= d[2];
        return this
    },
    subtractVectors: function (b, d, h) {
        b[0] = d[0] - h[0];
        b[1] = d[1] - h[1];
        b[2] = d[2] - h[2];
        return this
    },
    subtractScalar: function (b, d) {
        b[0] -= d;
        b[1] -= d;
        b[2] -= d;
        return this
    },
    multiply: function (b, d) {
        b[0] *= d[0];
        b[1] *= d[1];
        b[2] *= d[2];
        return this
    },
    multiplyVectors: function (b, d, h) {
        b[0] = d[0] * h[0];
        b[1] = d[1] * h[1];
        b[2] = d[2] * h[2];
        return this
    },
    multiplyScalar: function (b, d) {
        b[0] *= d;
        b[1] *= d;
        b[2] *= d;
        return this
    },
    divide: function (b, d) {
        b[0] /= d[0];
        b[1] /= d[1];
        b[2] /= d[2];
        return this
    },
    divideVectors: function (b, d, h) {
        b[0] = d[0] / h[0];
        b[1] = d[1] / h[1];
        b[2] = d[2] / h[2];
        return this
    },
    divideScalar: function (b, d) {
        0 !== d ? (b[0] /= d, b[1] /= d, b[2] /= d) : (b[0] = 0, b[1] = 0, b[2] = 0);
        return this
    },
    cross: function (b, d) {
        var h = b[0],
            g = b[1],
            l = b[2];
        b[0] = g * d[2] - l * d[1];
        b[1] = l * d[0] - h * d[2];
        b[2] = h * d[1] - g * d[0];
        return this
    },
    crossVectors: function (b, d, h) {
        b[0] = d[1] * h[2] - d[2] * h[1];
        b[1] = d[2] * h[0] - d[0] * h[2];
        b[2] = d[0] * h[1] - d[1] * h[0];
        return this
    },
    min: function (b, d) {
        b[0] < d && (b[0] = d);
        b[1] < d && (b[1] = d);
        b[2] < d && (b[2] = d);
        return this
    },
    max: function (b, d) {
        b[0] > d && (b[0] = d);
        b[1] > d && (b[1] = d);
        b[2] > d && (b[2] = d);
        return this
    },
    clamp: function (b, d, h) {
        this.min(b, d);
        this.max(b, h);
        return this
    },
    limit: function (b, d, h) {
        var g = this.length(b);
        null !== d && g < d ? this.setLength(b, d) : null !== h && g > h && this.setLength(b, h);
        return this
    },
    dot: function (b, d) {
        return b[0] * d[0] + b[1] * d[1] + b[2] * d[2]
    },
    normalise: function (b) {
        return this.divideScalar(b, this.length(b))
    },
    negate: function (b) {
        return this.multiplyScalar(b, -1)
    },
    distanceSquared: function (b, d) {
        var h = b[0] - d[0],
            g = b[1] - d[1],
            l = b[2] - d[2];
        return h * h + g * g + l * l
    },
    distance: function (b, d) {
        return Math.sqrt(this.distanceSquared(b, d))
    },
    lengthSquared: function (b) {
        return b[0] * b[0] + b[1] * b[1] + b[2] * b[2]
    },
    length: function (b) {
        return Math.sqrt(this.lengthSquared(b))
    },
    setLength: function (b, d) {
        var h = this.length(b);
        0 !== h && d !== h && this.multiplyScalar(b, d / h);
        return this
    }
};
FSS.Vector4 = {
    create: function (b, d, h, g) {
        g = new FSS.Array(4);
        this.set(g, b, d, h);
        return g
    },
    set: function (b, d, h, g, l) {
        b[0] = d || 0;
        b[1] = h || 0;
        b[2] = g || 0;
        b[3] = l || 0;
        return this
    },
    setX: function (b, d) {
        b[0] = d || 0;
        return this
    },
    setY: function (b, d) {
        b[1] = d || 0;
        return this
    },
    setZ: function (b, d) {
        b[2] = d || 0;
        return this
    },
    setW: function (b, d) {
        b[3] = d || 0;
        return this
    },
    add: function (b, d) {
        b[0] += d[0];
        b[1] += d[1];
        b[2] += d[2];
        b[3] += d[3];
        return this
    },
    multiplyVectors: function (b, d, h) {
        b[0] = d[0] * h[0];
        b[1] = d[1] * h[1];
        b[2] = d[2] * h[2];
        b[3] = d[3] * h[3];
        return this
    },
    multiplyScalar: function (b, d) {
        b[0] *= d;
        b[1] *= d;
        b[2] *= d;
        b[3] *= d;
        return this
    },
    min: function (b, d) {
        b[0] < d && (b[0] = d);
        b[1] < d && (b[1] = d);
        b[2] < d && (b[2] = d);
        b[3] < d && (b[3] = d);
        return this
    },
    max: function (b, d) {
        b[0] > d && (b[0] = d);
        b[1] > d && (b[1] = d);
        b[2] > d && (b[2] = d);
        b[3] > d && (b[3] = d);
        return this
    },
    clamp: function (b, d, h) {
        this.min(b, d);
        this.max(b, h);
        return this
    }
};
FSS.Color = function (b, d) {
    this.rgba = FSS.Vector4.create();
    this.hex = b || "#000000";
    this.opacity = FSS.Utils.isNumber(d) ? d : 1;
    this.set(this.hex, this.opacity)
};
FSS.Color.prototype = {
    set: function (b, d) {
        b = b.replace("#", "");
        var h = b.length / 3;
        this.rgba[0] = parseInt(b.substring(0 * h, 1 * h), 16) / 255;
        this.rgba[1] = parseInt(b.substring(1 * h, 2 * h), 16) / 255;
        this.rgba[2] = parseInt(b.substring(2 * h, 3 * h), 16) / 255;
        this.rgba[3] = FSS.Utils.isNumber(d) ? d : this.rgba[3];
        return this
    },
    hexify: function (b) {
        b = Math.ceil(255 * b).toString(16);
        1 === b.length && (b = "0" + b);
        return b
    },
    format: function () {
        var b = this.hexify(this.rgba[0]),
            d = this.hexify(this.rgba[1]),
            h = this.hexify(this.rgba[2]);
        return this.hex = "#" +
            b + d + h
    }
};
FSS.Object = function () {
    this.position = FSS.Vector3.create()
};
FSS.Object.prototype = {
    setPosition: function (b, d, h) {
        FSS.Vector3.set(this.position, b, d, h);
        return this
    }
};
FSS.Light = function (b, d) {
    FSS.Object.call(this);
    this.ambient = new FSS.Color(b || "#FFFFFF");
    this.diffuse = new FSS.Color(d || "#FFFFFF");
    this.ray = FSS.Vector3.create()
};
FSS.Light.prototype = Object.create(FSS.Object.prototype);
FSS.Vertex = function (b, d, h) {
    this.position = FSS.Vector3.create(b, d, h)
};
FSS.Vertex.prototype = {
    setPosition: function (b, d, h) {
        FSS.Vector3.set(this.position, b, d, h);
        return this
    }
};
FSS.Triangle = function (b, d, h) {
    this.a = b || new FSS.Vertex;
    this.b = d || new FSS.Vertex;
    this.c = h || new FSS.Vertex;
    this.vertices = [this.a, this.b, this.c];
    this.u = FSS.Vector3.create();
    this.v = FSS.Vector3.create();
    this.centroid = FSS.Vector3.create();
    this.normal = FSS.Vector3.create();
    this.color = new FSS.Color;
    this.polygon = document.createElementNS(FSS.SVGNS, "polygon");
    this.polygon.setAttributeNS(null, "stroke-linejoin", "round");
    this.polygon.setAttributeNS(null, "stroke-miterlimit", "1");
    this.polygon.setAttributeNS(null, "stroke-width", "1");
    this.computeCentroid();
    this.computeNormal()
};
FSS.Triangle.prototype = {
    computeCentroid: function () {
        this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0];
        this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1];
        this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2];
        FSS.Vector3.divideScalar(this.centroid, 3);
        return this
    },
    computeNormal: function () {
        FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position);
        FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position);
        FSS.Vector3.crossVectors(this.normal, this.u, this.v);
        FSS.Vector3.normalise(this.normal);
        return this
    }
};
FSS.Geometry = function () {
    this.vertices = [];
    this.triangles = [];
    this.dirty = !1
};
FSS.Geometry.prototype = {
    update: function () {
        if (this.dirty) {
            var b, d;
            for (b = this.triangles.length - 1; 0 <= b; b--) d = this.triangles[b], d.computeCentroid(), d.computeNormal();
            this.dirty = !1
        }
        return this
    }
};
FSS.Plane = function (b, d, h, g) {
    FSS.Geometry.call(this);
    this.width = b || 100;
    this.height = d || 100;
    this.segments = h || 4;
    this.slices = g || 4;
    this.segmentWidth = this.width / this.segments;
    this.sliceHeight = this.height / this.slices;
    var l, n, s;
    h = [];
    l = -0.5 * this.width;
    n = 0.5 * this.height;
    for (b = 0; b <= this.segments; b++)
        for (h.push([]), d = 0; d <= this.slices; d++) g = new FSS.Vertex(l + b * this.segmentWidth, n - d * this.sliceHeight), h[b].push(g), this.vertices.push(g);
    for (b = 0; b < this.segments; b++)
        for (d = 0; d < this.slices; d++) g = h[b + 0][d + 0], l = h[b + 0][d +
            1
        ], n = h[b + 1][d + 0], s = h[b + 1][d + 1], t0 = new FSS.Triangle(g, l, n), t1 = new FSS.Triangle(n, l, s), this.triangles.push(t0, t1)
};
FSS.Plane.prototype = Object.create(FSS.Geometry.prototype);
FSS.Material = function (b, d) {
    this.ambient = new FSS.Color(b || "#444444");
    this.diffuse = new FSS.Color(d || "#FFFFFF");
    this.slave = new FSS.Color
};
FSS.Mesh = function (b, d) {
    FSS.Object.call(this);
    this.geometry = b || new FSS.Geometry;
    this.material = d || new FSS.Material;
    this.side = FSS.FRONT;
    this.visible = !0
};
FSS.Mesh.prototype = Object.create(FSS.Object.prototype);
FSS.Mesh.prototype.update = function (b, d) {
    var h, g, l, n, s;
    this.geometry.update();
    if (d)
        for (h = this.geometry.triangles.length - 1; 0 <= h; h--) {
            g = this.geometry.triangles[h];
            FSS.Vector4.set(g.color.rgba);
            for (l = b.length - 1; 0 <= l; l--) n = b[l], FSS.Vector3.subtractVectors(n.ray, n.position, g.centroid), FSS.Vector3.normalise(n.ray), s = FSS.Vector3.dot(g.normal, n.ray), this.side === FSS.FRONT ? s = Math.max(s, 0) : this.side === FSS.BACK ? s = Math.abs(Math.min(s, 0)) : this.side === FSS.DOUBLE && (s = Math.max(Math.abs(s), 0)), FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, n.ambient.rgba), FSS.Vector4.add(g.color.rgba, this.material.slave.rgba), FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, n.diffuse.rgba), FSS.Vector4.multiplyScalar(this.material.slave.rgba, s), FSS.Vector4.add(g.color.rgba, this.material.slave.rgba);
            FSS.Vector4.clamp(g.color.rgba, 0, 1)
        }
    return this
};
FSS.Scene = function () {
    this.meshes = [];
    this.lights = []
};
FSS.Scene.prototype = {
    add: function (b) {
        b instanceof FSS.Mesh && !~this.meshes.indexOf(b) ? this.meshes.push(b) : b instanceof FSS.Light && !~this.lights.indexOf(b) && this.lights.push(b);
        return this
    },
    remove: function (b) {
        b instanceof FSS.Mesh && ~this.meshes.indexOf(b) ? this.meshes.splice(this.meshes.indexOf(b), 1) : b instanceof FSS.Light && ~this.lights.indexOf(b) && this.lights.splice(this.lights.indexOf(b), 1);
        return this
    }
};
FSS.Renderer = function () {
    this.halfHeight = this.halfWidth = this.height = this.width = 0
};
FSS.Renderer.prototype = {
    setSize: function (b, d) {
        if (this.width !== b || this.height !== d) return this.width = b, this.height = d, this.halfWidth = 0.5 * this.width, this.halfHeight = 0.5 * this.height, this
    },
    clear: function () {
        return this
    },
    render: function (b) {
        return this
    }
};
FSS.CanvasRenderer = function () {
    FSS.Renderer.call(this);
    this.element = document.createElement("canvas");
    this.element.style.display = "block";
    this.context = this.element.getContext("2d");
    this.setSize(this.element.width, this.element.height)
};
FSS.CanvasRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.CanvasRenderer.prototype.setSize = function (b, d) {
    FSS.Renderer.prototype.setSize.call(this, b, d);
    this.element.width = b;
    this.element.height = d;
    this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
    return this
};
FSS.CanvasRenderer.prototype.clear = function () {
    FSS.Renderer.prototype.clear.call(this);
    this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
    return this
};
FSS.CanvasRenderer.prototype.render = function (b) {
    FSS.Renderer.prototype.render.call(this, b);
    var d, h, g, l, n;
    this.clear();
    this.context.lineJoin = "round";
    this.context.lineWidth = 1;
    for (d = b.meshes.length - 1; 0 <= d; d--)
        if (h = b.meshes[d], h.visible)
            for (h.update(b.lights, !0), g = h.geometry.triangles.length - 1; 0 <= g; g--) l = h.geometry.triangles[g], n = l.color.format(), this.context.beginPath(), this.context.moveTo(l.a.position[0], l.a.position[1]), this.context.lineTo(l.b.position[0], l.b.position[1]), this.context.lineTo(l.c.position[0], l.c.position[1]), this.context.closePath(), this.context.strokeStyle = n, this.context.fillStyle = n, this.context.stroke(), this.context.fill();
    return this
};
FSS.WebGLRenderer = function () {
    FSS.Renderer.call(this);
    this.element = document.createElement("canvas");
    this.element.style.display = "block";
    this.lights = this.vertices = null;
    this.gl = this.getContext(this.element, {
        preserveDrawingBuffer: !1,
        premultipliedAlpha: !0,
        antialias: !0,
        stencil: !0,
        alpha: !0
    });
    if (this.unsupported = !this.gl) return "WebGL is not supported by your browser.";
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.setSize(this.element.width, this.element.height)
};
FSS.WebGLRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.WebGLRenderer.prototype.getContext = function (b, d) {
    var h = !1;
    try {
        if (!(h = b.getContext("experimental-webgl", d))) throw "Error creating WebGL context.";
    } catch (g) {
        console.error(g)
    }
    return h
};
FSS.WebGLRenderer.prototype.setSize = function (b, d) {
    FSS.Renderer.prototype.setSize.call(this, b, d);
    if (!this.unsupported) return this.element.width = b, this.element.height = d, this.gl.viewport(0, 0, b, d), this
};
FSS.WebGLRenderer.prototype.clear = function () {
    FSS.Renderer.prototype.clear.call(this);
    if (!this.unsupported) return this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this
};
FSS.WebGLRenderer.prototype.render = function (b) {
    FSS.Renderer.prototype.render.call(this, b);
    if (!this.unsupported) {
        var d, h, g, l, n, s, k, m;
        s = !1;
        var r = b.lights.length,
            u, E, y, z = 0;
        this.clear();
        if (this.lights !== r)
            if (this.lights = r, 0 < this.lights) this.buildProgram(r);
            else return;
        if (this.program) {
            for (d = b.meshes.length - 1; 0 <= d; d--) h = b.meshes[d], h.geometry.dirty && (s = !0), h.update(b.lights, !1), z += 3 * h.geometry.triangles.length;
            if (s || this.vertices !== z)
                for (k in this.vertices = z, this.program.attributes) {
                    s = this.program.attributes[k];
                    s.data = new FSS.Array(z * s.size);
                    u = 0;
                    for (d = b.meshes.length - 1; 0 <= d; d--)
                        for (h = b.meshes[d], g = 0, l = h.geometry.triangles.length; g < l; g++)
                            for (n = h.geometry.triangles[g], E = 0, y = n.vertices.length; E < y; E++) {
                                vertex = n.vertices[E];
                                switch (k) {
                                case "side":
                                    this.setBufferData(u, s, h.side);
                                    break;
                                case "position":
                                    this.setBufferData(u, s, vertex.position);
                                    break;
                                case "centroid":
                                    this.setBufferData(u, s, n.centroid);
                                    break;
                                case "normal":
                                    this.setBufferData(u, s, n.normal);
                                    break;
                                case "ambient":
                                    this.setBufferData(u, s, h.material.ambient.rgba);
                                    break;
                                case "diffuse":
                                    this.setBufferData(u, s, h.material.diffuse.rgba)
                                }
                                u++
                            }
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, s.buffer);
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, s.data, this.gl.DYNAMIC_DRAW);
                    this.gl.enableVertexAttribArray(s.location);
                    this.gl.vertexAttribPointer(s.location, s.size, this.gl.FLOAT, !1, 0, 0)
                }
            this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]);
            for (s = r - 1; 0 <= s; s--) d = b.lights[s], this.setBufferData(s, this.program.uniforms.lightPosition, d.position), this.setBufferData(s, this.program.uniforms.lightAmbient, d.ambient.rgba), this.setBufferData(s, this.program.uniforms.lightDiffuse, d.diffuse.rgba);
            for (m in this.program.uniforms) switch (s = this.program.uniforms[m], d = s.location, b = s.data, s.structure) {
            case "3f":
                this.gl.uniform3f(d, b[0], b[1], b[2]);
                break;
            case "3fv":
                this.gl.uniform3fv(d, b);
                break;
            case "4fv":
                this.gl.uniform4fv(d, b)
            }
        }
        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices);
        return this
    }
};
FSS.WebGLRenderer.prototype.setBufferData = function (b, d, h) {
    if (FSS.Utils.isNumber(h)) d.data[b * d.size] = h;
    else
        for (var g = h.length - 1; 0 <= g; g--) d.data[b * d.size + g] = h[g]
};
FSS.WebGLRenderer.prototype.buildProgram = function (b) {
    if (!this.unsupported) {
        var d = FSS.WebGLRenderer.VS(b),
            h = FSS.WebGLRenderer.FS(b),
            g = d + h;
        if (!this.program || this.program.code !== g) {
            var l = this.gl.createProgram(),
                d = this.buildShader(this.gl.VERTEX_SHADER, d),
                h = this.buildShader(this.gl.FRAGMENT_SHADER, h);
            this.gl.attachShader(l, d);
            this.gl.attachShader(l, h);
            this.gl.linkProgram(l);
            if (!this.gl.getProgramParameter(l, this.gl.LINK_STATUS)) return b = this.gl.getError(), l = this.gl.getProgramParameter(l, this.gl.VALIDATE_STATUS), console.error("Could not initialise shader.\nVALIDATE_STATUS: " + l + "\nERROR: " + b), null;
            this.gl.deleteShader(h);
            this.gl.deleteShader(d);
            l.code = g;
            l.attributes = {
                side: this.buildBuffer(l, "attribute", "aSide", 1, "f"),
                position: this.buildBuffer(l, "attribute", "aPosition", 3, "v3"),
                centroid: this.buildBuffer(l, "attribute", "aCentroid", 3, "v3"),
                normal: this.buildBuffer(l, "attribute", "aNormal", 3, "v3"),
                ambient: this.buildBuffer(l, "attribute", "aAmbient", 4, "v4"),
                diffuse: this.buildBuffer(l, "attribute", "aDiffuse", 4, "v4")
            };
            l.uniforms = {
                resolution: this.buildBuffer(l, "uniform", "uResolution", 3, "3f", 1),
                lightPosition: this.buildBuffer(l, "uniform", "uLightPosition", 3, "3fv", b),
                lightAmbient: this.buildBuffer(l, "uniform", "uLightAmbient", 4, "4fv", b),
                lightDiffuse: this.buildBuffer(l, "uniform", "uLightDiffuse", 4, "4fv", b)
            };
            this.program = l;
            this.gl.useProgram(this.program);
            return l
        }
    }
};
FSS.WebGLRenderer.prototype.buildShader = function (b, d) {
    if (!this.unsupported) {
        var h = this.gl.createShader(b);
        this.gl.shaderSource(h, d);
        this.gl.compileShader(h);
        return this.gl.getShaderParameter(h, this.gl.COMPILE_STATUS) ? h : (console.error(this.gl.getShaderInfoLog(h)), null)
    }
};
FSS.WebGLRenderer.prototype.buildBuffer = function (b, d, h, g, l, n) {
    l = {
        buffer: this.gl.createBuffer(),
        size: g,
        structure: l,
        data: null
    };
    switch (d) {
    case "attribute":
        l.location = this.gl.getAttribLocation(b, h);
        break;
    case "uniform":
        l.location = this.gl.getUniformLocation(b, h)
    }
    n && (l.data = new FSS.Array(n * g));
    return l
};
FSS.WebGLRenderer.VS = function (b) {
    return ["precision mediump float;", "#define LIGHTS " + b, "attribute float aSide;\nattribute vec3 aPosition;\nattribute vec3 aCentroid;\nattribute vec3 aNormal;\nattribute vec4 aAmbient;\nattribute vec4 aDiffuse;\nuniform vec3 uResolution;\nuniform vec3 uLightPosition[LIGHTS];\nuniform vec4 uLightAmbient[LIGHTS];\nuniform vec4 uLightDiffuse[LIGHTS];\nvarying vec4 vColor;\nvoid main() {\nvColor = vec4(0.0);\nvec3 position = aPosition / uResolution * 2.0;\nfor (int i = 0; i < LIGHTS; i++) {\nvec3 lightPosition = uLightPosition[i];\nvec4 lightAmbient = uLightAmbient[i];\nvec4 lightDiffuse = uLightDiffuse[i];\nvec3 ray = normalize(lightPosition - aCentroid);\nfloat illuminance = dot(aNormal, ray);\nif (aSide == 0.0) {\nilluminance = max(illuminance, 0.0);\n} else if (aSide == 1.0) {\nilluminance = abs(min(illuminance, 0.0));\n} else if (aSide == 2.0) {\nilluminance = max(abs(illuminance), 0.0);\n}\nvColor += aAmbient * lightAmbient;\nvColor += aDiffuse * lightDiffuse * illuminance;\n}\nvColor = clamp(vColor, 0.0, 1.0);\ngl_Position = vec4(position, 1.0);\n}"].join("\n")
};
FSS.WebGLRenderer.FS = function (b) {
    return "precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}"
};
FSS.SVGRenderer = function () {
    FSS.Renderer.call(this);
    this.element = document.createElementNS(FSS.SVGNS, "svg");
    this.element.setAttribute("xmlns", FSS.SVGNS);
    this.element.setAttribute("version", "1.1");
    this.element.style.display = "block";
    this.setSize(300, 150)
};
FSS.SVGRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.SVGRenderer.prototype.setSize = function (b, d) {
    FSS.Renderer.prototype.setSize.call(this, b, d);
    this.element.setAttribute("width", b);
    this.element.setAttribute("height", d);
    return this
};
FSS.SVGRenderer.prototype.clear = function () {
    FSS.Renderer.prototype.clear.call(this);
    for (var b = this.element.childNodes.length - 1; 0 <= b; b--) this.element.removeChild(this.element.childNodes[b]);
    return this
};
FSS.SVGRenderer.prototype.render = function (b) {
    FSS.Renderer.prototype.render.call(this, b);
    var d, h, g, l, n, s;
    for (d = b.meshes.length - 1; 0 <= d; d--)
        if (h = b.meshes[d], h.visible)
            for (h.update(b.lights, !0), g = h.geometry.triangles.length - 1; 0 <= g; g--) l = h.geometry.triangles[g], l.polygon.parentNode !== this.element && this.element.appendChild(l.polygon), n = this.formatPoint(l.a) + " ", n += this.formatPoint(l.b) + " ", n += this.formatPoint(l.c), s = this.formatStyle(l.color.format()), l.polygon.setAttributeNS(null, "points", n), l.polygon.setAttributeNS(null, "style", s);
    return this
};
FSS.SVGRenderer.prototype.formatPoint = function (b) {
    return this.halfWidth + b.position[0] + "," + (this.halfHeight - b.position[1])
};
FSS.SVGRenderer.prototype.formatStyle = function (b) {
    return b = "fill:" + b + ";" + ("stroke:" + b + ";")
};
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || function () {
    function b() {
        B.remove(G);
        D.clear();
        H = new FSS.Plane(l.width * D.width, l.height * D.height, l.segments, l.slices);
        J = new FSS.Material(l.ambient, l.diffuse);
        G = new FSS.Mesh(H, J);
        B.add(G);
        var b, d;
        for (b = H.vertices.length - 1; 0 <= b; b--) d = H.vertices[b], d.anchor = FSS.Vector3.clone(d.position), d.step = FSS.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1)), d.time = Math.randomInRange(0, Math.PIM2)
    }

    function d(d, g) {
        D.setSize(d, g);
        FSS.Vector3.set(E, D.halfWidth, D.halfHeight);
        b()
    }

    function h() {
        r = Date.now() - u;
        var b, d, k, m, s, z = l.depth / 2;
        FSS.Vector3.copy(n.bounds, E);
        FSS.Vector3.multiplyScalar(n.bounds, n.xyScalar);
        FSS.Vector3.setZ(y, n.zOffset);
        n.autopilot && (b = Math.sin(n.step[0] * r * n.speed), d = Math.cos(n.step[1] * r * n.speed), FSS.Vector3.set(y, n.bounds[0] * b, n.bounds[1] * d, n.zOffset));
        for (b = B.lights.length - 1; 0 <= b; b--) d = B.lights[b], FSS.Vector3.setZ(d.position, n.zOffset), k = Math.clamp(FSS.Vector3.distanceSquared(d.position, y), n.minDistance, n.maxDistance), k = n.gravity * d.mass / k, FSS.Vector3.subtractVectors(d.force, y, d.position), FSS.Vector3.normalise(d.force), FSS.Vector3.multiplyScalar(d.force, k), FSS.Vector3.set(d.acceleration), FSS.Vector3.add(d.acceleration, d.force), FSS.Vector3.add(d.velocity, d.acceleration), FSS.Vector3.multiplyScalar(d.velocity, n.dampening), FSS.Vector3.limit(d.velocity, n.minLimit, n.maxLimit), FSS.Vector3.add(d.position, d.velocity);
        for (m = H.vertices.length - 1; 0 <= m; m--) s = H.vertices[m], b = Math.sin(s.time + s.step[0] * r * l.speed), d = Math.cos(s.time + s.step[1] * r * l.speed), k = Math.sin(s.time + s.step[2] * r * l.speed), FSS.Vector3.set(s.position, l.xRange * H.segmentWidth * b, l.yRange * H.sliceHeight * d, l.zRange * z * k - z), FSS.Vector3.add(s.position, s.anchor);
        H.dirty = !0;
        g();
        requestAnimationFrame(h)
    }

    function g() {
        D.render(B);
        if (n.draw) {
            var b, d, g, h;
            for (b = B.lights.length - 1; 0 <= b; b--) switch (h = B.lights[b], d = h.position[0], g = h.position[1], m.renderer) {
            case s:
                D.context.lineWidth = 0.5;
                D.context.beginPath();
                D.context.arc(d, g, 10, 0, Math.PIM2);
                D.context.strokeStyle = h.ambientHex;
                D.context.stroke();
                D.context.beginPath();
                D.context.arc(d, g, 4, 0, Math.PIM2);
                D.context.fillStyle = h.diffuseHex;
                D.context.fill();
                break;
            case k:
                d += D.halfWidth, g = D.halfHeight - g, h.core.setAttributeNS(null, "fill", h.diffuseHex), h.core.setAttributeNS(null, "cx", d), h.core.setAttributeNS(null, "cy", g), D.element.appendChild(h.core), h.ring.setAttributeNS(null, "stroke", h.ambientHex), h.ring.setAttributeNS(null, "cx", d), h.ring.setAttributeNS(null, "cy", g), D.element.appendChild(h.ring)
            }
        }
    }
    var l = {
        width: 1.8,
        height: 1.8,
        depth: 10,
        segments: 16,
        slices: 8,
        xRange: 0.8,
        yRange: 0.1,
        zRange: 1,
        ambient: "#010101",
        diffuse: "#ffffff",
        speed: 6E-4,
        opacity: 0.5
    }, n = {
            count: 2,
            xyScalar: 1,
            zOffset: 100,
            ambient: "#ffffff",
            diffuse: "#2d2d2d",
            speed: 0.001,
            gravity: 800,
            dampening: 0.95,
            minLimit: 10,
            maxLimit: null,
            minDistance: 20,
            maxDistance: 400,
            autopilot: !1,
            draw: !1,
            bounds: FSS.Vector3.create(),
            step: FSS.Vector3.create(Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1), Math.randomInRange(0.2, 1))
        }, s = "canvas",
        k = "svg",
        m = {
            renderer: s
        }, r, u = Date.now(),
        E = FSS.Vector3.create(),
        y = FSS.Vector3.create(),
        z = document.getElementById("container");
    document.getElementById("controls");
    var X = document.getElementById("output");
    document.getElementById("ui");
    var D, B, G, H, J, R, C, S;
    R = new FSS.WebGLRenderer;
    C = new FSS.CanvasRenderer;
    S = new FSS.SVGRenderer;
    (function (b) {
        D && X.removeChild(D.element);
        switch (b) {
        case "webgl":
            D = R;
            break;
        case s:
            D = C;
            break;
        case k:
            D = S
        }
        D.setSize(z.offsetWidth, z.offsetHeight);
        X.appendChild(D.element)
    })(m.renderer);
    B = new FSS.Scene;
    b();
    (function () {
        var b, d;
        for (b = B.lights.length -
            1; 0 <= b; b--) d = B.lights[b], B.remove(d);
        D.clear();
        for (b = 0; b < n.count; b++) d = new FSS.Light(n.ambient, n.diffuse), d.ambientHex = d.ambient.format(), d.diffuseHex = d.diffuse.format(), B.add(d), d.mass = Math.randomInRange(0.5, 1), d.velocity = FSS.Vector3.create(), d.acceleration = FSS.Vector3.create(), d.force = FSS.Vector3.create(), d.ring = document.createElementNS(FSS.SVGNS, "circle"), d.ring.setAttributeNS(null, "stroke", d.ambientHex), d.ring.setAttributeNS(null, "stroke-width", "0.5"), d.ring.setAttributeNS(null, "fill", "none"), d.ring.setAttributeNS(null, "r", "10"), d.core = document.createElementNS(FSS.SVGNS, "circle"), d.core.setAttributeNS(null, "fill", d.diffuseHex), d.core.setAttributeNS(null, "r", "4")
    })();
    window.addEventListener("resize", function (b) {
        d(z.offsetWidth, z.offsetHeight);
        g()
    });
    z.addEventListener("click", function (b) {
        FSS.Vector3.set(y, b.x, D.height - b.y);
        FSS.Vector3.subtract(y, E);
        n.autopilot = !n.autopilot;
        (void 0).updateDisplay()
    });
    z.addEventListener("mousemove", function (b) {
        FSS.Vector3.set(y, b.x, D.height - b.y);
        FSS.Vector3.subtract(y, E)
    });
    d(z.offsetWidth, z.offsetHeight);
    h()
}();