"use strict";

function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}

function requestInterval(e, t) {
    function a() {
        s.value = n(a);
        var i = (new Date).getTime(),
            o = i - r;
        o >= t && (e.call(), r = (new Date).getTime())
    }
    var n = function() {
            return window.requestAnimationFrame || function(e, t) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(),
        r = (new Date).getTime(),
        s = {};
    return s.value = n(a), s
}
$("pre.lang-html, pre[rel=HTML]").find("code").addClass("language-markup"), $("code.html, code.lang-html").removeClass().addClass("language-markup").parent().attr("rel", "HTML"), $("code.javascript").removeClass().addClass("language-javascript").attr("rel", "JavaScript"), $("pre[rel=JavaScript], pre.lang-js, pre.JavaScript").attr("rel", "JavaScript").find("code").removeClass().addClass("language-javascript"), $("pre[rel=jQuery]").find("code").removeClass().addClass("language-javascript"), $("pre[rel='CSS'], pre[rel='LESS']").find("code").removeClass().addClass("language-css"), $("code.css, code.lang-css").removeClass().addClass("language-css").parent().attr("rel", "CSS"), $("pre[rel='Sass'], pre[rel='SASS'], pre[rel='SCSS']").removeClass().addClass("language-scss"), $("pre[rel=PHP]").attr("rel", "PHP").find("code").removeClass().addClass("language-javascript"), $("code.php").removeClass().addClass("language-javascript").parent().attr("rel", "PHP");
var csstricks = {
    el: {
        videoWrappers: $("article, .photo-grid, .single-video-wrapper, .gallery-grid .grid-5-6"),
        body: $("body")
    },
    searchOpen: !1,
    init: function e() {
        csstricks.bindUIActions(), csstricks.makeVideosFluidWidth(), csstricks.resizeableEmbeds(), csstricks.wufooAd6(), csstricks.mtAd1(), csstricks.linkHeaders(), csstricks.mobilizeBrowserSupporTables(), csstricks.randomizeBackgrounds(), csstricks.setUpFigureClicking(), $("img.lazyload-gravatar").Lazy()
    },
    bindUIActions: function e() {
        $("#comments").on("click", ".comment.buried", csstricks.revealComment), $("#search-opener").on("click", csstricks.searchOpener), $("#mobile-menu-toggle").on("click", csstricks.mobileMenuToggle)
    },
    mobileMenuToggle: function e() {
        $("#main-nav").toggleClass("open")
    },
    setUpFigureClicking: function e() {
        window.outerWidth > 800 && ($("article").imagesLoaded(function() {
            $("figure img").each(function(e) {
                var t = $(this).attr("sizes"),
                    a = t.split(","),
                    n = a.pop().trim(),
                    r = parseInt(n, 10);
                r > this.width && $(this).closest("figure").addClass("can-be-enlarged").end().on("click", function(e) {
                    e.stopPropagation(), $(this).closest("figure").toggleClass("enlarge")
                })
            })
        }), $("body").on("click", "figure.can-be-enlarged.enlarge", function() {
            $(this).removeClass("enlarge")
        }))
    },
    searchOpener: function e(t) {
        csstricks.searchOpen = !csstricks.searchOpen, $("body").toggleClass("search-is-open"), csstricks.searchOpen && setTimeout(function() {
            $("#q").focus()
        }, 1)
    },
    generateRandomPoints: function e(t, a) {
        var n = {};
        return n.a = getRandomInt(800, 1e3) + "," + getRandomInt(t, a), n.b = getRandomInt(600, 800) + "," + getRandomInt(t, a), n.c = getRandomInt(400, 600) + "," + getRandomInt(t, a), n.d = getRandomInt(200, 400) + "," + getRandomInt(t, a), n.e = getRandomInt(0, 200) + "," + getRandomInt(t, a), n
    },
    randomizeHeader: function e() {
        var t = csstricks.generateRandomPoints(90, 190),
            a = "M-4,-4 L1004,-4 L1004,100 L" + t.a + " L" + t.b + " L" + t.c + " L" + t.d + " L" + t.e + " L-4,100 L-4,-4 Z";
        $("#jagged-top").attr("d", a)
    },
    randomizeArticleHeader: function e() {
        var t = csstricks.generateRandomPoints(80, 190),
            a = "M1004,100 L" + t.a + " L" + t.b + " L" + t.c + " L" + t.d + " L" + t.e + " L-4,100 L-4,200 L1004,200 L1004,100 Z";
        $("#jagged-top-of-article").attr("d", a)
    },
    randomizeFooters: function e() {
        var t = csstricks.generateRandomPoints(120, 190),
            a = "M1004,100 L" + t.a + " L" + t.b + " L" + t.c + " L" + t.d + " L" + t.e + " L-4,90 L-4,604 L1004,604 L1004,90 Z";
        $("#jagged-top-links, #jagged-top-links-shadow").attr("d", a), $("#jagged-top-newsletter").attr("d", a)
    },
    randomizeBackgrounds: function e() {
        requestInterval(function() {
            csstricks.randomizeHeader()
        }, 1e4), $(".site-header").on("click", function() {
            csstricks.randomizeHeader()
        }), csstricks.randomizeArticleHeader(), requestInterval(function() {
            csstricks.randomizeArticleHeader()
        }, 7e3), csstricks.randomizeFooters(), requestInterval(function() {
            csstricks.randomizeFooters()
        }, 3e3)
    },
    makeVideosFluidWidth: function e() {
        csstricks.el.videoWrappers.fitVids({
            customSelector: "video"
        })
    },
    revealComment: function e(t) {
        $(t.currentTarget).removeClass("buried")
    },
    resizeableEmbeds: function e() {
        $(window).on("load", function() {
            window.outerWidth > 800 && setTimeout(function() {
                $(".cp_embed_iframe").each(function() {
                    $(this).wrap("<div class='drag-wrap'></div>").parent().unwrap()
                });
                var e = 0;
                $(".drag-wrap").resizable({
                    minWidth: 320,
                    handles: "e",
                    resize: function t(a, n) {
                        0 === e && (e = n.originalSize.width);
                        var r = n.size.width - e;
                        r < 0 && (r = 0);
                        var s = -r / 2;
                        $(n.element).css({
                            transform: "translateX(" + s + "px)"
                        })
                    },
                    start: function e(t, a) {
                        a.element.append("<div class='cover'></div>")
                    },
                    stop: function e(t, a) {
                        a.element.find(".cover").remove()
                    }
                })
            }, 1e3)
        })
    },
    linkHeaders: function e() {
        var t = $("article > h3, article > h4");
        t.each(function(e) {
            var t = $(this);
            if (0 == t.has("a").length) {
                var a = "";
                void 0 === t.attr("id") ? (a = "article-header-id-" + e, t.attr("id", a)) : a = t.attr("id");
                var n = $("<a />", {
                    html: "#",
                    class: "article-headline-link",
                    href: "#" + a
                });
                t.addClass("has-header-link").prepend(n)
            }
        })
    },
    wufooAd6: function e() {
        var t = $(".wufoo-logo > path"),
            a = $("#dino"),
            n = $("#w"),
            r = $("#u"),
            s = $("#f"),
            i = $("#o-1"),
            o = $("#o-2"),
            l = new TimelineMax({
                repeat: -1,
                repeatDelay: .5,
                yoyo: !0,
                paused: !0
            });
        l.staggerFromTo(t, .7, {
            drawSVG: "0%"
        }, {
            drawSVG: "100%"
        }, .1).staggerFromTo(t, 1.5, {
            fill: "transparent"
        }, {
            fill: "#ce4927"
        }, .2, .4).staggerFromTo(t, 1.5, {
            stroke: "black"
        }, {
            stroke: "#ce4927"
        }, .2, .4).to(a, 1, {
            x: -13,
            rotation: -7
        }).to(o, .5, {
            x: -35,
            y: -5
        }, "-=0.5").to(i, .5, {
            x: -30,
            y: 8
        }, "-=0.4").to(s, .5, {
            x: -30,
            y: 8,
            rotation: -10
        }, "-=0.4").to(r, .5, {
            x: -30,
            y: 8,
            rotation: -20
        }, "-=0.4").to(n, .5, {
            x: -20,
            y: 8,
            rotation: -10
        }, "-=0.4"), l.seek(.3), $("#wufoo-ad-6").on("mouseenter", function() {
            l.play()
        })
    },
    mtAd1: function e() {
        var t = new TimelineMax({
            paused: !0
        });
        t.to("#logo-1", 1, {
            morphSVG: "#icon-ssds",
            ease: Power1.easeInOut
        }).to("#logo-2", 1, {
            morphSVG: "#icon-cdn",
            ease: Power1.easeInOut
        }, .25).to("#logo-3", 1, {
            morphSVG: "#icon-backups",
            ease: Power1.easeInOut
        }, .25).to("#logo-4", 1, {
            morphSVG: "#icon-autoscaling",
            ease: Power1.easeInOut
        }, .25).to("#all-backgrounds", 1, {
            css: {
                opacity: 1
            }
        }, .3).to("#all-text", 1, {
            css: {
                opacity: 1
            }
        }, .5), $("#media-temple-ad").on("mouseenter mouseleave", function() {
            0 === t.progress() ? t.play() : t.reversed(!t.reversed())
        })
    },
    mobilizeBrowserSupporTables: function e() {
        var t = [];
        $(".browser-support-table").each(function() {
            $(this).find("th").each(function() {
                t.push($(this).text())
            }).end().find("td").each(function(e, a) {
                $(a).attr("data-browser-name", t[e])
            })
        })
    }
};
csstricks.init();
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            a = _self.Prism = {
                util: {
                    encode: function e(t) {
                        return t instanceof n ? new n(t.type, a.util.encode(t.content), t.alias) : "Array" === a.util.type(t) ? t.map(a.util.encode) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function e(t) {
                        return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function e(a) {
                        return a.__id || Object.defineProperty(a, "__id", {
                            value: ++t
                        }), a.__id
                    },
                    clone: function e(t) {
                        var n = a.util.type(t);
                        switch (n) {
                            case "Object":
                                var e = {};
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = a.util.clone(t[r]));
                                return e;
                            case "Array":
                                return t.map && t.map(function(e) {
                                    return a.util.clone(e)
                                })
                        }
                        return t
                    }
                },
                languages: {
                    extend: function e(t, n) {
                        var r = a.util.clone(a.languages[t]);
                        for (var s in n) r[s] = n[s];
                        return r
                    },
                    insertBefore: function e(t, n, r, s) {
                        s = s || a.languages;
                        var i = s[t];
                        if (2 == arguments.length) {
                            r = arguments[1];
                            for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                            return i
                        }
                        var l = {};
                        for (var c in i)
                            if (i.hasOwnProperty(c)) {
                                if (c == n)
                                    for (var o in r) r.hasOwnProperty(o) && (l[o] = r[o]);
                                l[c] = i[c]
                            }
                        return a.languages.DFS(a.languages, function(e, a) {
                            a === s[t] && e != t && (this[e] = l)
                        }), s[t] = l
                    },
                    DFS: function e(t, n, r, s) {
                        s = s || {};
                        for (var i in t) t.hasOwnProperty(i) && (n.call(t, i, t[i], r || i), "Object" !== a.util.type(t[i]) || s[a.util.objId(t[i])] ? "Array" !== a.util.type(t[i]) || s[a.util.objId(t[i])] || (s[a.util.objId(t[i])] = !0, a.languages.DFS(t[i], n, i, s)) : (s[a.util.objId(t[i])] = !0, a.languages.DFS(t[i], n, null, s)))
                    }
                },
                plugins: {},
                highlightAll: function e(t, n) {
                    var r = {
                        callback: n,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r);
                    for (var s = r.elements || document.querySelectorAll(r.selector), i = 0, o; o = s[i++];) a.highlightElement(o, t === !0, r.callback)
                },
                highlightElement: function t(n, r, s) {
                    for (var i, o, l = n; l && !e.test(l.className);) l = l.parentNode;
                    l && (i = (l.className.match(e) || [, ""])[1], o = a.languages[i]), n.className = n.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i);
                    var c = n.textContent,
                        u = {
                            element: n,
                            language: i,
                            grammar: o,
                            code: c
                        };
                    if (!c || !o) return void a.hooks.run("complete", u);
                    if (a.hooks.run("before-highlight", u), r && _self.Worker) {
                        var d = new Worker(a.filename);
                        d.onmessage = function(e) {
                            u.highlightedCode = e.data, a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, s && s.call(u.element), a.hooks.run("after-highlight", u), a.hooks.run("complete", u)
                        }, d.postMessage(JSON.stringify({
                            language: u.language,
                            code: u.code,
                            immediateClose: !0
                        }))
                    } else u.highlightedCode = a.highlight(u.code, u.grammar, u.language), a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, s && s.call(n), a.hooks.run("after-highlight", u), a.hooks.run("complete", u)
                },
                highlight: function e(t, r, s) {
                    var i = a.tokenize(t, r);
                    return n.stringify(a.util.encode(i), s)
                },
                tokenize: function e(t, n, r) {
                    var s = a.Token,
                        i = [t],
                        o = n.rest;
                    if (o) {
                        for (var l in o) n[l] = o[l];
                        delete n.rest
                    }
                    e: for (var l in n)
                        if (n.hasOwnProperty(l) && n[l]) {
                            var c = n[l];
                            c = "Array" === a.util.type(c) ? c : [c];
                            for (var u = 0; u < c.length; ++u) {
                                var d = c[u],
                                    g = d.inside,
                                    p = !!d.lookbehind,
                                    m = !!d.greedy,
                                    f = 0,
                                    h = d.alias;
                                d = d.pattern || d;
                                for (var v = 0; v < i.length; v++) {
                                    var b = i[v];
                                    if (i.length > t.length) break e;
                                    if (!(b instanceof s)) {
                                        d.lastIndex = 0;
                                        var k = d.exec(b),
                                            y = 1;
                                        if (!k && m && v != i.length - 1) {
                                            var w = i[v + 1].matchedStr || i[v + 1],
                                                P = b + w;
                                            if (v < i.length - 2 && (P += i[v + 2].matchedStr || i[v + 2]), d.lastIndex = 0, k = d.exec(P), !k) continue;
                                            var C = k.index + (p ? k[1].length : 0);
                                            if (C >= b.length) continue;
                                            var S = k.index + k[0].length,
                                                x = b.length + w.length;
                                            if (y = 3, S <= x) {
                                                if (i[v + 1].greedy) continue;
                                                y = 2, P = P.slice(0, x)
                                            }
                                            b = P
                                        }
                                        if (k) {
                                            p && (f = k[1].length);
                                            var C = k.index + f,
                                                k = k[0].slice(f),
                                                S = C + k.length,
                                                j = b.slice(0, C),
                                                L = b.slice(S),
                                                A = [v, y];
                                            j && A.push(j);
                                            var I = new s(l, g ? a.tokenize(k, g) : k, h, k, m);
                                            A.push(I), L && A.push(L), Array.prototype.splice.apply(i, A)
                                        }
                                    }
                                }
                            }
                        }
                    return i
                },
                hooks: {
                    all: {},
                    add: function e(t, n) {
                        var r = a.hooks.all;
                        r[t] = r[t] || [], r[t].push(n)
                    },
                    run: function e(t, n) {
                        var r = a.hooks.all[t];
                        if (r && r.length)
                            for (var s = 0, i; i = r[s++];) i(n)
                    }
                }
            },
            n = a.Token = function(e, t, a, n, r) {
                this.type = e, this.content = t, this.alias = a, this.matchedStr = n || null, this.greedy = !!r
            };
        if (n.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === a.util.type(e)) return e.map(function(a) {
                    return n.stringify(a, t, e)
                }).join("");
                var s = {
                    type: e.type,
                    content: n.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == s.type && (s.attributes.spellcheck = "true"), e.alias) {
                    var i = "Array" === a.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(s.classes, i)
                }
                a.hooks.run("wrap", s);
                var o = "";
                for (var l in s.attributes) o += (o ? " " : "") + l + '="' + (s.attributes[l] || "") + '"';
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + o + ">" + s.content + "</" + s.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                n = t.language,
                r = t.code,
                s = t.immediateClose;
            _self.postMessage(a.highlight(r, a.languages[n], n)), s && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (a.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", a.highlightAll)), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\w\W]*?-->/,
        prolog: /<\?[\w\W]+?\?>/,
        doctype: /<!DOCTYPE[\w\W]+?>/,
        cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                    inside: {
                        punctuation: /[=>"']/
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
        comment: /\/\*[\w\W]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
        string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
        property: /(\b|\B)[\w-]+(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/
    }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: "language-css"
        }
    }), Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|').*?\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0
        }],
        string: {
            pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /(\.|\\)/
            }
        },
        keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
    }), Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0
        }
    }), Prism.languages.insertBefore("javascript", "class-name", {
        "template-string": {
            pattern: /`(?:\\\\|\\?[^\\])*?`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\$\{[^}]+\}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: "language-javascript"
        }
    }), Prism.languages.js = Prism.languages.javascript, Prism.languages.css.selector = {
        pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
        inside: {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:\.\w]+/,
            id: /#[-:\.\w]+/
        }
    }, Prism.languages.insertBefore("css", "function", {
        hexcode: /#[\da-f]{3,6}/i,
        entity: /\\[\da-f]{1,8}/i,
        number: /[\d%\.]+/
    }), Prism.languages.json = {
        property: /".*?"(?=\s*:)/gi,
        string: /"(?!:)(\\?[^"])*?"(?!:)/g,
        number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
        punctuation: /[{}[\]);,]/g,
        operator: /:/g,
        boolean: /\b(true|false)\b/gi,
        null: /\bnull\b/gi
    }, Prism.languages.jsonp = Prism.languages.json, Prism.languages.php = Prism.languages.extend("clike", {
        keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("php", "class-name", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), Prism.languages.insertBefore("php", "keyword", {
        delimiter: /\?>|<\?(?:php)?/i,
        variable: /\$\w+\b/i,
        package: {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }
    }), Prism.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
        "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
            return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
        }))
    }), Prism.hooks.add("before-insert", function(e) {
        "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), Prism.hooks.add("after-highlight", function(e) {
        if ("php" === e.language) {
            for (var t = 0, a; a = e.tokenStack[t]; t++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (t + 1) + "}}}", Prism.highlight(a, e.grammar, "php").replace(/\$/g, "$$$$"));
            e.element.innerHTML = e.highlightedCode
        }
    }), Prism.hooks.add("wrap", function(e) {
        "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
    }), Prism.languages.insertBefore("php", "comment", {
        markup: {
            pattern: /<[^?]\/?(.*?)>/,
            inside: Prism.languages.markup
        },
        php: /\{\{\{PHP[0-9]+\}\}\}/
    })),
    function(e) {
        var t = e.util.clone(e.languages.javascript);
        e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;
        var a = e.util.clone(e.languages.jsx);
        delete a.punctuation, a = e.languages.insertBefore("jsx", "operator", {
            punctuation: /=(?={)|[{}[\];(),.:]/
        }, {
            jsx: a
        }), e.languages.insertBefore("inside", "attr-value", {
            script: {
                pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                inside: a,
                alias: "language-javascript"
            }
        }, e.languages.jsx.tag)
    }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
            inside: {
                placeholder: /%[-_\w]+/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.insertBefore("scss", "property", {
        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-_\w]+/,
            alias: "selector"
        },
        statement: /\B!(?:default|optional)\b/i,
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss),
    function() {
        function e(e, t) {
            return Array.prototype.slice.call((t || document).querySelectorAll(e))
        }

        function t(e, t) {
            return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
        }

        function a(e, a, n) {
            for (var s = a.replace(/\s+/g, "").split(","), i = +e.getAttribute("data-line-offset") || 0, o = r() ? parseInt : parseFloat, l = o(getComputedStyle(e).lineHeight), c = 0, u; u = s[c++];) {
                u = u.split("-");
                var d = +u[0],
                    g = +u[1] || d,
                    p = document.createElement("div");
                p.textContent = Array(g - d + 2).join(" \n"), p.className = (n || "") + " line-highlight", t(e, "line-numbers") || (p.setAttribute("data-start", d), g > d && p.setAttribute("data-end", g)), p.style.top = (d - i - 1) * l + "px", t(e, "line-numbers") ? e.appendChild(p) : (e.querySelector("code") || e).appendChild(p)
            }
        }

        function n() {
            var t = location.hash.slice(1);
            e(".temporary.line-highlight").forEach(function(e) {
                e.parentNode.removeChild(e)
            });
            var n = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
            if (n && !document.getElementById(t)) {
                var r = t.slice(0, t.lastIndexOf(".")),
                    s = document.getElementById(r);
                s && (s.hasAttribute("data-line") || s.setAttribute("data-line", ""), a(s, n, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
            }
        }
        if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
            var r = function() {
                    var e;
                    return function() {
                        if ("undefined" == typeof e) {
                            var t = document.createElement("div");
                            t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t)
                        }
                        return e
                    }
                }(),
                s = 0;
            Prism.hooks.add("complete", function(t) {
                var r = t.element.parentNode,
                    i = r && r.getAttribute("data-line");
                r && i && /pre/i.test(r.nodeName) && (clearTimeout(s), e(".line-highlight", r).forEach(function(e) {
                    e.parentNode.removeChild(e)
                }), a(r, i), s = setTimeout(n, 1))
            }), window.addEventListener && window.addEventListener("hashchange", n)
        }
    }();