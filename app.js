$(document).ready(function() {
    var dimension = 150;
    $('#PopularPosts1,#PopularPosts2,#PopularPosts3').find('img').each(function(n, image) {
        var image = $(image);
        image.attr({
            src: image.attr('src').replace(/s72-c/, 's' + dimension)
        })
    })
});



var text_month = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var no_image_url = "http://2.bp.blogspot.com/-IO-XEI1LgEs/VmPNKFp0BhI/AAAAAAAACOg/_JrYHMBXV5w/s1600-r/nothumb.jpg";
var feat1_number = 3;
var related_number = 3;

// Plugin: Sticky jQuery ~ BY: http://stickyjs.com
(function(e) {
    var t = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: false,
            getWidthFrom: "",
            responsiveWidth: false
        },
        n = e(window),
        r = e(document),
        i = [],
        s = n.height(),
        o = function() {
            var t = n.scrollTop(),
                o = r.height(),
                u = o - s,
                a = t > u ? u - t : 0;
            for (var f = 0; f < i.length; f++) {
                var l = i[f],
                    c = l.stickyWrapper.offset().top,
                    h = c - l.topSpacing - a;
                if (t <= h) {
                    if (l.currentTop !== null) {
                        l.stickyElement.css("width", "").css("position", "").css("top", "");
                        l.stickyElement.trigger("sticky-end", [l]).parent().removeClass(l.className);
                        l.currentTop = null
                    }
                } else {
                    var p = o - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - t - a;
                    if (p < 0) {
                        p = p + l.topSpacing
                    } else {
                        p = l.topSpacing
                    }
                    if (l.currentTop != p) {
                        l.stickyElement.css("width", l.stickyElement.width()).css("position", "fixed").css("top", p);
                        if (typeof l.getWidthFrom !== "undefined") {
                            l.stickyElement.css("width", e(l.getWidthFrom).width())
                        }
                        l.stickyElement.trigger("sticky-start", [l]).parent().addClass(l.className);
                        l.currentTop = p
                    }
                }
            }
        },
        u = function() {
            s = n.height();
            for (var t = 0; t < i.length; t++) {
                var r = i[t];
                if (typeof r.getWidthFrom !== "undefined" && r.responsiveWidth === true) {
                    r.stickyElement.css("width", e(r.getWidthFrom).width())
                }
            }
        },
        a = {
            init: function(n) {
                var r = e.extend({}, t, n);
                return this.each(function() {
                    var n = e(this);
                    var s = n.attr("id");
                    var o = s ? s + "-" + t.wrapperClassName : t.wrapperClassName;
                    var u = e("<div></div>").attr("id", s + "-sticky-wrapper").addClass(r.wrapperClassName);
                    n.wrapAll(u);
                    if (r.center) {
                        n.parent().css({
                            width: n.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (n.css("float") == "right") {
                        n.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    var a = n.parent();
                    a.css("height", n.outerHeight());
                    i.push({
                        topSpacing: r.topSpacing,
                        bottomSpacing: r.bottomSpacing,
                        stickyElement: n,
                        currentTop: null,
                        stickyWrapper: a,
                        className: r.className,
                        getWidthFrom: r.getWidthFrom,
                        responsiveWidth: r.responsiveWidth
                    })
                })
            },
            update: o,
            unstick: function(t) {
                return this.each(function() {
                    var t = e(this);
                    var n = -1;
                    for (var r = 0; r < i.length; r++) {
                        if (i[r].stickyElement.get(0) == t.get(0)) {
                            n = r
                        }
                    }
                    if (n != -1) {
                        i.splice(n, 1);
                        t.unwrap();
                        t.removeAttr("style")
                    }
                })
            }
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", o, false);
        window.addEventListener("resize", u, false)
    } else if (window.attachEvent) {
        window.attachEvent("onscroll", o);
        window.attachEvent("onresize", u)
    }
    e.fn.sticky = function(t) {
        if (a[t]) {
            return a[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return a.init.apply(this, arguments)
        } else {
            e.error("Method " + t + " does not exist on jQuery.sticky")
        }
    };
    e.fn.unstick = function(t) {
        if (a[t]) {
            return a[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return a.unstick.apply(this, arguments)
        } else {
            e.error("Method " + t + " does not exist on jQuery.sticky")
        }
    };
    e(function() {
        setTimeout(o, 0)
    })
})(jQuery);






// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c) {
    c.fn.hoverTimeout = function(d, e, f, g) {
        return this.each(function() {
            var a = null,
                b = c(this);
            b.hover(function() {
                clearTimeout(a);
                a = setTimeout(function() {
                    e.call(b)
                }, d)
            }, function() {
                clearTimeout(a);
                a = setTimeout(function() {
                    g.call(b)
                }, f)
            })
        })
    }
})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e) {
    e.fn.replaceText = function(t, n, r) {
        return this.each(function() {
            var i = this.firstChild,
                s, o, u = [];
            if (i) {
                do {
                    if (i.nodeType === 3) {
                        s = i.nodeValue;
                        o = s.replace(t, n);
                        if (o !== s) {
                            if (!r && /</.test(o)) {
                                e(i).before(o);
                                u.push(i)
                            } else {
                                i.nodeValue = o
                            }
                        }
                    }
                } while (i = i.nextSibling)
            }
            u.length && e(u).remove()
        })
    }
})(jQuery);



// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav = function() {
    "use strict";
    var e = function(e, t) {
        function c(e) {
            var t;
            if (!e) e = window.event;
            if (e.target) t = e.target;
            else if (e.srcElement) t = e.srcElement;
            if (t.nodeType === 3) t = t.parentNode;
            if (t.value) window.location.href = t.value
        }

        function h(e) {
            var t = e.nodeName.toLowerCase();
            return t === "ul" || t === "ol"
        }

        function p(e) {
            for (var t = 1; document.getElementById("selectnav" + t); t++);
            return e ? "selectnav" + t : "selectnav" + (t - 1)
        }

        function d(e) {
            a++;
            var t = e.children.length,
                n = "",
                l = "",
                c = a - 1;
            if (!t) {
                return
            }
            if (c) {
                while (c--) {
                    l += o
                }
                l += " "
            }
            for (var v = 0; v < t; v++) {
                var m = e.children[v].children[0];
                if (typeof m !== "undefined") {
                    var g = m.innerText || m.textContent;
                    var y = "";
                    if (r) {
                        y = m.className.search(r) !== -1 || m.parentNode.className.search(r) !== -1 ? f : ""
                    }
                    if (i && !y) {
                        y = m.href === document.URL ? f : ""
                    }
                    n += '<option value="' + m.href + '" ' + y + ">" + l + g + "</option>";
                    if (s) {
                        var b = e.children[v].children[1];
                        if (b && h(b)) {
                            n += d(b)
                        }
                    }
                }
            }
            if (a === 1 && u) {
                n = '<option value="">' + u + "</option>" + n
            }
            if (a === 1) {
                n = '<select class="selectnav" id="' + p(true) + '">' + n + "</select>"
            }
            a--;
            return n
        }
        e = document.getElementById(e);
        if (!e) {
            return
        }
        if (!h(e)) {
            return
        }
        if (!("insertAdjacentHTML" in window.document.documentElement)) {
            return
        }
        document.documentElement.className += " js";
        var n = t || {},
            r = n.activeclass || "active",
            i = typeof n.autoselect === "boolean" ? n.autoselect : true,
            s = typeof n.nested === "boolean" ? n.nested : true,
            o = n.indent || "-",
            u = n.label || "Menu",
            a = 0,
            f = " selected ";
        e.insertAdjacentHTML("afterend", d(e));
        var l = document.getElementById(p());
        if (l.addEventListener) {
            l.addEventListener("change", c)
        }
        if (l.attachEvent) {
            l.attachEvent("onchange", c)
        }
        return l
    };
    return function(t, n) {
        e(t, n)
    }
}();

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($, window, undefined) {
    $.fn.tabslet = function(options) {
        var defaults = {
            mouseevent: "click",
            attribute: "href",
            animation: false,
            autorotate: false,
            pauseonhover: true,
            delay: 2000,
            active: 1,
            controls: {
                prev: ".prev",
                next: ".next"
            }
        };
        var options = $.extend(defaults, options);
        return this.each(function() {
            var $this = $(this);
            options.mouseevent = $this.data("mouseevent") || options.mouseevent;
            options.attribute = $this.data("attribute") || options.attribute;
            options.animation = $this.data("animation") || options.animation;
            options.autorotate = $this.data("autorotate") || options.autorotate;
            options.pauseonhover = $this.data("pauseonhover") || options.pauseonhover;
            options.delay = $this.data("delay") || options.delay;
            options.active = $this.data("active") || options.active;
            $this.find("> div").hide();
            $this.find("> div").eq(options.active - 1).show();
            $this.find("> ul li").eq(options.active - 1).addClass("active");
            var fn = eval(function() {
                $(this).trigger("_before");
                $this.find("> ul li").removeClass("active");
                $(this).addClass("active");
                $this.find("> div").hide();
                var currentTab = $(this).find("a").attr(options.attribute);
                if (options.animation) {
                    $this.find(currentTab).animate({
                        opacity: "show"
                    }, "slow", function() {
                        $(this).trigger("_after")
                    })
                } else {
                    $this.find(currentTab).show();
                    $(this).trigger("_after")
                }
                return false
            });
            var init = eval("$this.find('> ul li')." + options.mouseevent + "(fn)");
            init;
            var elements = $this.find("> ul li"),
                i = options.active - 1;

            function forward() {
                i = ++i % elements.length;
                options.mouseevent == "hover" ? elements.eq(i).trigger("mouseover") : elements.eq(i).click();
                var t = setTimeout(forward, options.delay);
                $this.mouseover(function() {
                    if (options.pauseonhover) {
                        clearTimeout(t)
                    }
                })
            }
            if (options.autorotate) {
                setTimeout(forward, 0);
                if (options.pauseonhover) {
                    $this.on("mouseleave", function() {
                        setTimeout(forward, 1000)
                    })
                }
            }

            function move(direction) {
                if (direction == "forward") {
                    i = ++i % elements.length
                }
                if (direction == "backward") {
                    i = --i % elements.length
                }
                elements.eq(i).click()
            }
            $this.find(options.controls.next).click(function() {
                move("forward")
            });
            $this.find(options.controls.prev).click(function() {
                move("backward")
            });
            $this.on("destroy", function() {
                $(this).removeData()
            })
        })
    };
    $(document).ready(function() {
        $('[data-toggle="tabslet"]').tabslet()
    })
})(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a) {
    a.fn.simplyTab = function(b) {
        b = jQuery.extend({
            active: 1,
            fx: null,
            showSpeed: 400,
            hideSpeed: 400,
            showEasing: null,
            hideEasing: null,
            show: function() {},
            hide: function() {},
            change: function() {}
        }, b);
        return this.each(function() {
            var e = a(this),
                c = e.children("[data-tab]"),
                d = b.active - 1;
            e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');
            c.addClass("content-tab").each(function() {
                a(this).hide();
                e.find(".wrap-tab").append('<li><a href="#">' + a(this).data("tab") + "</a></li>")
            }).eq(d).show();
            e.find(".wrap-tab a").on("click", function() {
                var f = a(this).parent().index();
                a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");
                a(this).addClass("activeTab");
                if (b.fx == "slide") {
                    if (c.eq(f).is(":hidden")) {
                        c.slideUp(b.hideSpeed, b.hideEasing, function() {
                            b.hide.call(e)
                        }).eq(f).slideDown(b.showSpeed, b.showEasing, function() {
                            b.show.call(e)
                        })
                    }
                } else {
                    if (b.fx == "fade") {
                        if (c.eq(f).is(":hidden")) {
                            c.hide().eq(f).fadeIn(b.showSpeed, b.showEasing, function() {
                                b.show.call(e)
                            })
                        }
                    } else {
                        if (b.fx == "fancyslide") {
                            if (c.eq(f).is(":hidden")) {
                                c.slideUp(b.hideSpeed, b.hideEasing, function() {
                                    b.hide.call(e)
                                }).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed, b.showEasing, function() {
                                    b.show.call(e)
                                })
                            }
                        } else {
                            if (c.eq(f).is(":hidden")) {
                                c.hide().eq(f).show()
                            }
                        }
                    }
                }
                b.change.call(e);
                return false
            }).eq(d).addClass("activeTab")
        })
    }
})(jQuery);

// Main Scripts 

$(document).ready(function() {
    var _0x7a97x2 = -1,
        _0x7a97x3 = '',
        _0x7a97x4 = '';
    $('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var _0x7a97x5 = $(this)['text'](), _0x7a97x6 = $(this)['find']('a')['attr']('href'), _0x7a97x7 = 0, _0x7a97x8 = 0; _0x7a97x8 < _0x7a97x5['length'] && (_0x7a97x7 = _0x7a97x5['indexOf']('_', _0x7a97x7), -1 != _0x7a97x7); _0x7a97x8++) {
            _0x7a97x7++
        };
        if (level = _0x7a97x8, level > _0x7a97x2 && (_0x7a97x3 += '<ul>', _0x7a97x4 += '<ul id=\'sub-menu\'>'), level < _0x7a97x2) {
            offset = _0x7a97x2 - level;
            for (var _0x7a97x8 = 0; _0x7a97x8 < offset; _0x7a97x8++) {
                _0x7a97x3 += '</ul></li>', _0x7a97x4 += '</ul></li>'
            }
        };
        _0x7a97x5 = _0x7a97x5['replace'](/_/gi, ''), _0x7a97x3 += '<li><a href=\'' + _0x7a97x6 + '\'>' + _0x7a97x5 + '</a>', _0x7a97x4 += '<li><a href=\'' + _0x7a97x6 + '\'>';
        for (var _0x7a97x8 = 0; _0x7a97x8 < level; _0x7a97x8++) {
            _0x7a97x4 += ''
        };
        _0x7a97x4 += _0x7a97x5 + '</a>', _0x7a97x2 = level
    });
    for (var _0x7a97x7 = 0; _0x7a97x2 >= _0x7a97x7; _0x7a97x7++) {
        _0x7a97x3 += '</ul>', _0x7a97x4 += '</ul>', 0 != _0x7a97x7 && (_0x7a97x3 += '</li>', _0x7a97x4 += '</li>')
    };
    $('#menu .LinkList')['html'](_0x7a97x4), $('#menu > .LinkList > ul')['attr']('id', 'nav'), selectnav('nav'), $('#menu ul > li > ul')['parent']('li')['addClass']('hasSub'), $('#menu .widget')['attr']('style', 'display:block!important;')
});

$(function() {
    selectnav('nav1');
    $('.post-body img')['parent']('a')['css']('margin', '0 auto!important')
});
$(document).ready(function() {
    $('.cmm-tabs')['simplyTab']({
        active: 1,
        fx: 'fade',
        showSpeed: 400,
        hideSpeed: 400
    });
    $('.blogger-tab')['append']($('#comments'));
    $('.cmm-tabs.simplyTab .wrap-tab')['wrap']('<div class=\'cmm-tabs-header\'/>');
    $('.cmm-tabs-header')['prepend']('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')
});
$(document).ready(function() {
    $('ul#sub-menu')['parent']('li')['addClass']('hasSub');
    (jQuery)
});
$(document).ready(function() {
    $('a[name="ads-post-in"]')['before']($('#ads-post10')['html']());
    $('#ads-post10')['html']('')
});
$(document).ready(function() {
    $('.sidebar-wrapper .widget h2')['wrap']('<div class=\'widget-title\'/>');
    $('.footer-sections .widget h2')['wrap']('<div class=\'widget-title\'/>');
    $('.index .post-outer,.archive .post-outer')['each'](function() {
        $(this)['find']('.block-image .thumb a')['attr']('style', function(_0x7a97x9, _0x7a97xa) {
            return _0x7a97xa['replace']('/default.jpg', '/mqdefault.jpg')
        })['attr']('style', function(_0x7a97x9, _0x7a97xa) {
            return _0x7a97xa['replace']('s72-c', 's1600')
        })
    });
    $(window)['scroll'](function() {
        if ($(this)['scrollTop']() > 200) {
            $('#back-to-top')['fadeIn']()
        } else {
            $('#back-to-top')['fadeOut']()
        }
    });
    $('#back-to-top')['hide']()['click'](function() {
        $('html, body')['animate']({
            scrollTop: 0
        }, 1000);
        return false
    });
    var _0x7a97xb = $('.search');
    _0x7a97xb['click'](function(_0x7a97x9) {
        _0x7a97x9['preventDefault']();
        if (_0x7a97xb['is']('.active') && $(_0x7a97x9['target'])['is'](_0x7a97xb)) {
            _0x7a97xb['removeClass']('active')
        } else {
            _0x7a97xb['addClass']('active');
            _0x7a97xb['find']('input')['focus']()
        }
    });
    $('body')['click'](function(_0x7a97x9) {
        if (_0x7a97xb['is']('.active') && !$(_0x7a97x9['target'])['is']('.search, .search form, .search input')) {
            _0x7a97xb['removeClass']('active')
        }
    });
    (function(_0x7a97x9) {
        var _0x7a97xa = _0x7a97x9('a.newer-link');
        var _0x7a97xc = _0x7a97x9('a.older-link');
        _0x7a97x9['get'](_0x7a97xa['attr']('href'), function(_0x7a97xc) {
            _0x7a97xa['html']('<strong>Next</strong><span>' + _0x7a97x9(_0x7a97xc)['find']('.post h1.post-title')['text']() + '</span>')
        }, 'html');
        _0x7a97x9['get'](_0x7a97xc['attr']('href'), function(_0x7a97xa) {
            _0x7a97xc['html']('<strong>Previous</strong><span>' + _0x7a97x9(_0x7a97xa)['find']('.post h1.post-title')['text']() + '</span>')
        }, 'html')
    })(jQuery)
});
$('#related-posts')['each'](function() {
    var _0x7a97xd = $(this)['html']();
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0x7a97xd + '?alt=json-in-script&max-results=' + related_number,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0x7a97xe) {
            var _0x7a97xf = '';
            var _0x7a97x10 = '<div class="related">';
            for (var _0x7a97x11 = 0; _0x7a97x11 < _0x7a97xe['feed']['entry']['length']; _0x7a97x11++) {
                for (var _0x7a97x12 = 0; _0x7a97x12 < _0x7a97xe['feed']['entry'][_0x7a97x11]['link']['length']; _0x7a97x12++) {
                    if (_0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['rel'] == 'alternate') {
                        _0x7a97xf = _0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['href'];
                        break
                    }
                };
                var _0x7a97x13 = _0x7a97xe['feed']['entry'][_0x7a97x11]['title']['$t'];
                var _0x7a97x14 = _0x7a97xe['feed']['entry'][_0x7a97x11]['content']['$t'];
                var _0x7a97x15 = $('<div>')['html'](_0x7a97x14);
                if (_0x7a97x14['indexOf']('http://www.youtube.com/embed/') > -1 || _0x7a97x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                    var _0x7a97x16 = _0x7a97xe['feed']['entry'][_0x7a97x11]['media$thumbnail']['url'];
                    var _0x7a97x17 = '<a class="related-img" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x16 + ') no-repeat center center;background-size: cover"/>'
                } else {
                    if (_0x7a97x14['indexOf']('<img') > -1) {
                        var _0x7a97x18 = _0x7a97x15['find']('img:first')['attr']('src');
                        var _0x7a97x17 = '<a class="related-img" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x18 + ') no-repeat center center;background-size: cover"/>'
                    } else {
                        var _0x7a97x17 = '<a class="related-img" href="' + _0x7a97xf + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                    }
                };
                _0x7a97x10 += '<li><div class="related-thumb">' + _0x7a97x17 + '</div><h3 class="related-title"><a href="' + _0x7a97xf + '">' + _0x7a97x13 + '</a></h3></li>'
            };
            _0x7a97x10 += '</div><div class="clear"/>';
            $('#related-posts')['html'](_0x7a97x10);
            $('.related-img')['each'](function() {
                $(this)['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                    return _0x7a97x18['replace']('/default.jpg', '/mqdefault.jpg')
                })['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                    return _0x7a97x18['replace']('s72-c', 's1600')
                })
            });
            $('p.trans')['each'](function() {
                var _0x7a97x9 = $(this)['text']();
                var _0x7a97xa = $(this)['attr']('data-tran');
                $('#pages-wrap *')['replaceText'](_0x7a97x9, _0x7a97xa)
            })
        }
    })
});
$('.feat-layout .HTML .widget-content')['each'](function() {
    var _0x7a97xa = $(this)['html'](),
        _0x7a97x2 = $(this)['prev']('h2')['text']();
    var _0x7a97x8 = _0x7a97xa['match'](/[^[\]]+(?=])/g);
    $(this)['html']('<span>' + _0x7a97x8[0] + '</span><span>' + _0x7a97x8[1] + '</span>');
    var _0x7a97x19 = $(this)['text']();
    var _0x7a97xd = $(this)['find']('span')['eq'](0)['text']();
    var _0x7a97x1a = $(this)['find']('span')['eq'](1)['text']();
    if (_0x7a97x1a['match']('feat1')) {
        $['ajax']({
            url: '/feeds/posts/default/-/' + _0x7a97xd + '?alt=json-in-script&max-results=' + feat1_number,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x7a97xe) {
                var _0x7a97xf = '';
                var _0x7a97x10 = '<ul>';
                for (var _0x7a97x11 = 0; _0x7a97x11 < _0x7a97xe['feed']['entry']['length']; _0x7a97x11++) {
                    for (var _0x7a97x12 = 0; _0x7a97x12 < _0x7a97xe['feed']['entry'][_0x7a97x11]['link']['length']; _0x7a97x12++) {
                        if (_0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['rel'] == 'alternate') {
                            _0x7a97xf = _0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['href'];
                            break
                        }
                    };
                    var _0x7a97x13 = _0x7a97xe['feed']['entry'][_0x7a97x11]['title']['$t'];
                    var _0x7a97x1b = _0x7a97xe['feed']['entry'][_0x7a97x11]['author'][0]['name']['$t'];
                    var _0x7a97x1c = _0x7a97xe['feed']['entry'][_0x7a97x11]['published']['$t'],
                        _0x7a97x1d = _0x7a97x1c['substring'](0, 4),
                        _0x7a97x1e = _0x7a97x1c['substring'](5, 7),
                        _0x7a97x1f = _0x7a97x1c['substring'](8, 10),
                        _0x7a97x20 = text_month[parseInt(_0x7a97x1e, 10)] + ' ' + _0x7a97x1f + ', ' + _0x7a97x1d;
                    var _0x7a97x14 = _0x7a97xe['feed']['entry'][_0x7a97x11]['content']['$t'];
                    var _0x7a97x15 = $('<div>')['html'](_0x7a97x14);
                    if (_0x7a97x11 == 0) {
                        var _0x7a97x21 = /<\S[^>]*>/g;
                        var _0x7a97x22 = _0x7a97x14['replace'](_0x7a97x21, '');
                        if (_0x7a97x22['length'] > 100) {
                            _0x7a97x22 = '' + _0x7a97x22['substring'](0, 130) + '...'
                        };
                        if (_0x7a97x14['indexOf']('http://www.youtube.com/embed/') > -1 || _0x7a97x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                            var _0x7a97x16 = _0x7a97xe['feed']['entry'][_0x7a97x11]['media$thumbnail']['url'];
                            var _0x7a97x17 = '<a class="primeiro-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x16 + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            if (_0x7a97x14['indexOf']('<img') > -1) {
                                var _0x7a97x18 = _0x7a97x15['find']('img:first')['attr']('src');
                                var _0x7a97x17 = '<a class="primeiro-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x18 + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var _0x7a97x17 = '<a class="primeiro-thumb" href="' + _0x7a97xf + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                        }
                    } else {
                        if (_0x7a97x14['indexOf']('http://www.youtube.com/embed/') > -1 || _0x7a97x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                            var _0x7a97x16 = _0x7a97xe['feed']['entry'][_0x7a97x11]['media$thumbnail']['url'];
                            var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x16 + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            if (_0x7a97x14['indexOf']('<img') > -1) {
                                var _0x7a97x18 = _0x7a97x15['find']('img:first')['attr']('src');
                                var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x18 + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                        }
                    };
                    if (_0x7a97x11 == 0) {
                        _0x7a97x10 += '<div class="primeiro"><div class="feat-thumb">' + _0x7a97x17 + '</div><div class="primeiro-content"><h3 class="feat-headline"><a href="' + _0x7a97xf + '">' + _0x7a97x13 + '</a></h3><p class="recent-des">' + _0x7a97x22 + '</p><span class="p-author">' + _0x7a97x1b + '</span><span class="p-date">' + _0x7a97x20 + '</span></div></div>'
                    } else {
                        _0x7a97x10 += '<li><div class="feat-thumb">' + _0x7a97x17 + '</div><div class="mag-content"><h3 class="feat-headline"><a href="' + _0x7a97xf + '">' + _0x7a97x13 + '</a></h3><span class="p-author">' + _0x7a97x1b + '</span></div><div class="clear"/></li></div>'
                    }
                };
                _0x7a97x10 += '</ul>';
                $('.feat-layout .HTML .widget-content')['each'](function() {
                    var _0x7a97x5 = $(this)['text']();
                    if (_0x7a97x5 == _0x7a97x19) {
                        $(this)['html'](_0x7a97x10);
                        $(this)['parent']()['addClass']('feat1');
                        $(this)['parent']()['addClass']('feat');
                        $(this)['prev']('h2')['html']('<a href="/search/label/' + _0x7a97xd + '">' + _0x7a97x2 + '</a>');
                        $(this)['prev']('h2')['wrap']('<div class="feat-title"></div>');
                        $(this)['removeClass']('widget-content')['addClass']('layout-content');
                        $(this)['find']('.mag-thumb')['each'](function() {
                            $(this)['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                return _0x7a97x18['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                return _0x7a97x18['replace']('s72-c', 's1600')
                            })
                        });
                        $('p.trans')['each'](function() {
                            var _0x7a97x9 = $(this)['text']();
                            var _0x7a97xa = $(this)['attr']('data-tran');
                            $('#pages-wrap *')['replaceText'](_0x7a97x9, _0x7a97xa)
                        })
                    }
                })
            }
        })
    }
});
$('.HTML .widget-content')['each'](function() {
    var _0x7a97x5 = $(this)['text']();
    if (_0x7a97x5['match']('randomposts')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x7a97x23) {
                console.log(1, _0x7a97x25);
                var _0x7a97x24 = _0x7a97x23['feed']['entry']['length'];
                var _0x7a97x25 = 0;
                var _0x7a97x26 = _0x7a97x24 - randomposts_number;
                var _0x7a97x27 = (Math['floor'](Math['random']() * (_0x7a97x26 - _0x7a97x25 + 1)) + _0x7a97x25);
                _0x7a97x27 = _0x7a97x27 > 0 ? _0x7a97x27 : 1;
                console.log(_0x7a97x27);
                $['ajax']({
                    url: '/feeds/posts/default?alt=json-in-script&start-index=' + _0x7a97x27 + '&max-results=' + randomposts_number,
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0x7a97xe) {
                        var _0x7a97xf = '';
                        var _0x7a97x10 = '<ul class="roma-widget">';
                        for (var _0x7a97x11 = 0; _0x7a97x11 < _0x7a97xe['feed']['entry']['length']; _0x7a97x11++) {
                            for (var _0x7a97x12 = 0; _0x7a97x12 < _0x7a97xe['feed']['entry'][_0x7a97x11]['link']['length']; _0x7a97x12++) {
                                if (_0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['rel'] == 'alternate') {
                                    _0x7a97xf = _0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['href'];
                                    break
                                }
                            };
                            var _0x7a97x13 = _0x7a97xe['feed']['entry'][_0x7a97x11]['title']['$t'];
                            var _0x7a97x28 = _0x7a97xe['feed']['entry'][_0x7a97x11]['category'][0]['term'];
                            var _0x7a97x14 = _0x7a97xe['feed']['entry'][_0x7a97x11]['content']['$t'];
                            var _0x7a97x15 = $('<div>')['html'](_0x7a97x14);
                            if (_0x7a97x14['indexOf']('http://www.youtube.com/embed/') > -1 || _0x7a97x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                                var _0x7a97x16 = _0x7a97xe['feed']['entry'][_0x7a97x11]['media$thumbnail']['url'];
                                var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x16 + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                if (_0x7a97x14['indexOf']('<img') > -1) {
                                    var _0x7a97x18 = _0x7a97x15['find']('img:first')['attr']('src');
                                    var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x18 + ') no-repeat center center;background-size: cover"/>'
                                } else {
                                    var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                                }
                            };
                            _0x7a97x10 += '<li><div class="wid-thumb">' + _0x7a97x17 + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + _0x7a97xf + '">' + _0x7a97x13 + '</a></h3></div></li>'
                        };
                        _0x7a97x10 += '</ul><div class="clear"/>';
                        $('.HTML .widget-content')['each'](function() {
                            if ($(this)['text']()['match']('randomposts')) {
                                $(this)['html'](_0x7a97x10);
                                $(this)['find']('.rcp-thumb')['each'](function() {
                                    $(this)['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                        return _0x7a97x18['replace']('/default.jpg', '/mqdefault.jpg')
                                    })['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                        return _0x7a97x18['replace']('s72-c', 's1600')
                                    })
                                });
                                $('p.trans')['each'](function() {
                                    var _0x7a97x9 = $(this)['text']();
                                    var _0x7a97xa = $(this)['attr']('data-tran');
                                    $('#pages-wrap *')['replaceText'](_0x7a97x9, _0x7a97xa)
                                })
                            }
                        })
                    }
                })
            }
        })
    };
    if (_0x7a97x5['match']('recentposts')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x7a97x23) {
                console.log('recentposts_number', recentposts_number);
                $['ajax']({
                    url: '/feeds/posts/default?alt=json-in-script&max-results=' + recentposts_number,
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0x7a97xe) {
                        var _0x7a97xf = '';
                        var _0x7a97x10 = '<ul class="roma-widget">';
                        for (var _0x7a97x11 = 0; _0x7a97x11 < _0x7a97xe['feed']['entry']['length']; _0x7a97x11++) {
                            for (var _0x7a97x12 = 0; _0x7a97x12 < _0x7a97xe['feed']['entry'][_0x7a97x11]['link']['length']; _0x7a97x12++) {
                                if (_0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['rel'] == 'alternate') {
                                    _0x7a97xf = _0x7a97xe['feed']['entry'][_0x7a97x11]['link'][_0x7a97x12]['href'];
                                    break
                                }
                            };
                            var _0x7a97x13 = _0x7a97xe['feed']['entry'][_0x7a97x11]['title']['$t'];
                            var _0x7a97x28 = _0x7a97xe['feed']['entry'][_0x7a97x11]['category'][0]['term'];
                            var _0x7a97x14 = _0x7a97xe['feed']['entry'][_0x7a97x11]['content']['$t'];
                            var _0x7a97x15 = $('<div>')['html'](_0x7a97x14);
                            if (_0x7a97x14['indexOf']('http://www.youtube.com/embed/') > -1 || _0x7a97x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                                var _0x7a97x16 = _0x7a97xe['feed']['entry'][_0x7a97x11]['media$thumbnail']['url'];
                                var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x16 + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                if (_0x7a97x14['indexOf']('<img') > -1) {
                                    var _0x7a97x18 = _0x7a97x15['find']('img:first')['attr']('src');
                                    var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + _0x7a97x18 + ') no-repeat center center;background-size: cover"/>'
                                } else {
                                    var _0x7a97x17 = '<a class="mag-thumb" href="' + _0x7a97xf + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                                }
                            };
                            _0x7a97x10 += '<li><div class="wid-thumb">' + _0x7a97x17 + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + _0x7a97xf + '">' + _0x7a97x13 + '</a></h3></div></li>'
                        };
                        _0x7a97x10 += '</ul><div class="clear"/>';
                        $('.HTML .widget-content')['each'](function() {
                            if ($(this)['text']()['match']('recentposts')) {
                                $(this)['html'](_0x7a97x10);
                                $(this)['find']('.rcp-thumb')['each'](function() {
                                    $(this)['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                        return _0x7a97x18['replace']('/default.jpg', '/mqdefault.jpg')
                                    })['attr']('style', function(_0x7a97x11, _0x7a97x18) {
                                        return _0x7a97x18['replace']('s72-c', 's1600')
                                    })
                                });
                                $('p.trans')['each'](function() {
                                    var _0x7a97x9 = $(this)['text']();
                                    var _0x7a97xa = $(this)['attr']('data-tran');
                                    $('#pages-wrap *')['replaceText'](_0x7a97x9, _0x7a97xa)
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});



$(window).bind("load", function() {
    $('.Label a,.postags a,.m-rec h2 a,.breadcrumbs span a,.label-head a,.feat-title h2 a').each(function() {
        var labelPage = $(this).attr('href');
        $(this).attr('href', labelPage + '?&max-results=7')
    })
});