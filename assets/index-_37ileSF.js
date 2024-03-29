(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();
var mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function yr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function ah(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    }), n
}
var ig = {
        exports: {}
    },
    yu = {},
    og = {
        exports: {}
    },
    Be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa = Symbol.for("react.element"),
    x3 = Symbol.for("react.portal"),
    E3 = Symbol.for("react.fragment"),
    S3 = Symbol.for("react.strict_mode"),
    b3 = Symbol.for("react.profiler"),
    _3 = Symbol.for("react.provider"),
    k3 = Symbol.for("react.context"),
    C3 = Symbol.for("react.forward_ref"),
    A3 = Symbol.for("react.suspense"),
    I3 = Symbol.for("react.memo"),
    T3 = Symbol.for("react.lazy"),
    lp = Symbol.iterator;

function B3(t) {
    return t === null || typeof t != "object" ? null : (t = lp && t[lp] || t["@@iterator"], typeof t == "function" ? t : null)
}
var sg = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    ag = Object.assign,
    lg = {};

function us(t, e, n) {
    this.props = t, this.context = e, this.refs = lg, this.updater = n || sg
}
us.prototype.isReactComponent = {};
us.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
us.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function ug() {}
ug.prototype = us.prototype;

function lh(t, e, n) {
    this.props = t, this.context = e, this.refs = lg, this.updater = n || sg
}
var uh = lh.prototype = new ug;
uh.constructor = lh;
ag(uh, us.prototype);
uh.isPureReactComponent = !0;
var up = Array.isArray,
    cg = Object.prototype.hasOwnProperty,
    ch = {
        current: null
    },
    fg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function dg(t, e, n) {
    var r, i = {},
        o = null,
        s = null;
    if (e != null)
        for (r in e.ref !== void 0 && (s = e.ref), e.key !== void 0 && (o = "" + e.key), e) cg.call(e, r) && !fg.hasOwnProperty(r) && (i[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (t && t.defaultProps)
        for (r in a = t.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: wa,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: ch.current
    }
}

function R3(t, e) {
    return {
        $$typeof: wa,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function fh(t) {
    return typeof t == "object" && t !== null && t.$$typeof === wa
}

function M3(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var cp = /\/+/g;

function xc(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? M3("" + t.key) : e.toString(36)
}

function pl(t, e, n, r, i) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case wa:
                case x3:
                    s = !0
            }
    }
    if (s) return s = t, i = i(s), t = r === "" ? "." + xc(s, 0) : r, up(i) ? (n = "", t != null && (n = t.replace(cp, "%24%26/index.html") + "/"), pl(i, e, n, "", function(u) {
        return u
    })) : i != null && (fh(i) && (i = R3(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(cp, "%24%26/index.html") + "/") + t)), e.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", up(t))
        for (var a = 0; a < t.length; a++) {
            o = t[a];
            var l = r + xc(o, a);
            s += pl(o, e, n, l, i)
        } else if (l = B3(t), typeof l == "function")
            for (t = l.call(t), a = 0; !(o = t.next()).done;) o = o.value, l = r + xc(o, a++), s += pl(o, e, n, l, i);
        else if (o === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ja(t, e, n) {
    if (t == null) return t;
    var r = [],
        i = 0;
    return pl(t, r, "", "", function(o) {
        return e.call(n, o, i++)
    }), r
}

function L3(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var wn = {
        current: null
    },
    ml = {
        transition: null
    },
    N3 = {
        ReactCurrentDispatcher: wn,
        ReactCurrentBatchConfig: ml,
        ReactCurrentOwner: ch
    };
Be.Children = {
    map: ja,
    forEach: function(t, e, n) {
        ja(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return ja(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return ja(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!fh(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
Be.Component = us;
Be.Fragment = E3;
Be.Profiler = b3;
Be.PureComponent = lh;
Be.StrictMode = S3;
Be.Suspense = A3;
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N3;
Be.cloneElement = function(t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = ag({}, t.props),
        i = t.key,
        o = t.ref,
        s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref, s = ch.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps) var a = t.type.defaultProps;
        for (l in e) cg.call(e, l) && !fg.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: wa,
        type: t.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
Be.createContext = function(t) {
    return t = {
        $$typeof: k3,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: _3,
        _context: t
    }, t.Consumer = t
};
Be.createElement = dg;
Be.createFactory = function(t) {
    var e = dg.bind(null, t);
    return e.type = t, e
};
Be.createRef = function() {
    return {
        current: null
    }
};
Be.forwardRef = function(t) {
    return {
        $$typeof: C3,
        render: t
    }
};
Be.isValidElement = fh;
Be.lazy = function(t) {
    return {
        $$typeof: T3,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: L3
    }
};
Be.memo = function(t, e) {
    return {
        $$typeof: I3,
        type: t,
        compare: e === void 0 ? null : e
    }
};
Be.startTransition = function(t) {
    var e = ml.transition;
    ml.transition = {};
    try {
        t()
    } finally {
        ml.transition = e
    }
};
Be.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
Be.useCallback = function(t, e) {
    return wn.current.useCallback(t, e)
};
Be.useContext = function(t) {
    return wn.current.useContext(t)
};
Be.useDebugValue = function() {};
Be.useDeferredValue = function(t) {
    return wn.current.useDeferredValue(t)
};
Be.useEffect = function(t, e) {
    return wn.current.useEffect(t, e)
};
Be.useId = function() {
    return wn.current.useId()
};
Be.useImperativeHandle = function(t, e, n) {
    return wn.current.useImperativeHandle(t, e, n)
};
Be.useInsertionEffect = function(t, e) {
    return wn.current.useInsertionEffect(t, e)
};
Be.useLayoutEffect = function(t, e) {
    return wn.current.useLayoutEffect(t, e)
};
Be.useMemo = function(t, e) {
    return wn.current.useMemo(t, e)
};
Be.useReducer = function(t, e, n) {
    return wn.current.useReducer(t, e, n)
};
Be.useRef = function(t) {
    return wn.current.useRef(t)
};
Be.useState = function(t) {
    return wn.current.useState(t)
};
Be.useSyncExternalStore = function(t, e, n) {
    return wn.current.useSyncExternalStore(t, e, n)
};
Be.useTransition = function() {
    return wn.current.useTransition()
};
Be.version = "18.2.0";
og.exports = Be;
var F = og.exports;
const J = yr(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O3 = F,
    P3 = Symbol.for("react.element"),
    j3 = Symbol.for("react.fragment"),
    D3 = Object.prototype.hasOwnProperty,
    U3 = O3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    z3 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function hg(t, e, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (s = e.ref);
    for (r in e) D3.call(e, r) && !z3.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps, e) i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: P3,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: U3.current
    }
}
yu.Fragment = j3;
yu.jsx = hg;
yu.jsxs = hg;
ig.exports = yu;
var k = ig.exports,
    Wf = {},
    pg = {
        exports: {}
    },
    Wn = {},
    mg = {
        exports: {}
    },
    gg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(E, x) {
        var T = E.length;
        E.push(x);
        e: for (; 0 < T;) {
            var y = T - 1 >>> 1,
                f = E[y];
            if (0 < i(f, x)) E[y] = x, E[T] = f, T = y;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var x = E[0],
            T = E.pop();
        if (T !== x) {
            E[0] = T;
            e: for (var y = 0, f = E.length, M = f >>> 1; y < M;) {
                var q = 2 * (y + 1) - 1,
                    G = E[q],
                    Y = q + 1,
                    ie = E[Y];
                if (0 > i(G, T)) Y < f && 0 > i(ie, G) ? (E[y] = ie, E[Y] = T, y = Y) : (E[y] = G, E[q] = T, y = q);
                else if (Y < f && 0 > i(ie, T)) E[y] = ie, E[Y] = T, y = Y;
                else break e
            }
        }
        return x
    }

    function i(E, x) {
        var T = E.sortIndex - x.sortIndex;
        return T !== 0 ? T : E.id - x.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            a = s.now();
        t.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        h = 1,
        g = null,
        w = 3,
        C = !1,
        B = !1,
        I = !1,
        R = typeof setTimeout == "function" ? setTimeout : null,
        _ = typeof clearTimeout == "function" ? clearTimeout : null,
        b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(E) {
        for (var x = n(u); x !== null;) {
            if (x.callback === null) r(u);
            else if (x.startTime <= E) r(u), x.sortIndex = x.expirationTime, e(l, x);
            else break;
            x = n(u)
        }
    }

    function O(E) {
        if (I = !1, v(E), !B)
            if (n(l) !== null) B = !0, S(D);
            else {
                var x = n(u);
                x !== null && L(O, x.startTime - E)
            }
    }

    function D(E, x) {
        B = !1, I && (I = !1, _(z), z = -1), C = !0;
        var T = w;
        try {
            for (v(x), g = n(l); g !== null && (!(g.expirationTime > x) || E && !X());) {
                var y = g.callback;
                if (typeof y == "function") {
                    g.callback = null, w = g.priorityLevel;
                    var f = y(g.expirationTime <= x);
                    x = t.unstable_now(), typeof f == "function" ? g.callback = f : g === n(l) && r(l), v(x)
                } else r(l);
                g = n(l)
            }
            if (g !== null) var M = !0;
            else {
                var q = n(u);
                q !== null && L(O, q.startTime - x), M = !1
            }
            return M
        } finally {
            g = null, w = T, C = !1
        }
    }
    var N = !1,
        U = null,
        z = -1,
        Z = 5,
        Q = -1;

    function X() {
        return !(t.unstable_now() - Q < Z)
    }

    function ce() {
        if (U !== null) {
            var E = t.unstable_now();
            Q = E;
            var x = !0;
            try {
                x = U(!0, E)
            } finally {
                x ? j() : (N = !1, U = null)
            }
        } else N = !1
    }
    var j;
    if (typeof b == "function") j = function() {
        b(ce)
    };
    else if (typeof MessageChannel < "u") {
        var c = new MessageChannel,
            m = c.port2;
        c.port1.onmessage = ce, j = function() {
            m.postMessage(null)
        }
    } else j = function() {
        R(ce, 0)
    };

    function S(E) {
        U = E, N || (N = !0, j())
    }

    function L(E, x) {
        z = R(function() {
            E(t.unstable_now())
        }, x)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(E) {
        E.callback = null
    }, t.unstable_continueExecution = function() {
        B || C || (B = !0, S(D))
    }, t.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < E ? Math.floor(1e3 / E) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return w
    }, t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, t.unstable_next = function(E) {
        switch (w) {
            case 1:
            case 2:
            case 3:
                var x = 3;
                break;
            default:
                x = w
        }
        var T = w;
        w = x;
        try {
            return E()
        } finally {
            w = T
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(E, x) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var T = w;
        w = E;
        try {
            return x()
        } finally {
            w = T
        }
    }, t.unstable_scheduleCallback = function(E, x, T) {
        var y = t.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? y + T : y) : T = y, E) {
            case 1:
                var f = -1;
                break;
            case 2:
                f = 250;
                break;
            case 5:
                f = 1073741823;
                break;
            case 4:
                f = 1e4;
                break;
            default:
                f = 5e3
        }
        return f = T + f, E = {
            id: h++,
            callback: x,
            priorityLevel: E,
            startTime: T,
            expirationTime: f,
            sortIndex: -1
        }, T > y ? (E.sortIndex = T, e(u, E), n(l) === null && E === n(u) && (I ? (_(z), z = -1) : I = !0, L(O, T - y))) : (E.sortIndex = f, e(l, E), B || C || (B = !0, S(D))), E
    }, t.unstable_shouldYield = X, t.unstable_wrapCallback = function(E) {
        var x = w;
        return function() {
            var T = w;
            w = x;
            try {
                return E.apply(this, arguments)
            } finally {
                w = T
            }
        }
    }
})(gg);
mg.exports = gg;
var F3 = mg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg = F,
    Fn = F3;

function te(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var vg = new Set,
    Zs = {};

function co(t, e) {
    Qo(t, e), Qo(t + "Capture", e)
}

function Qo(t, e) {
    for (Zs[t] = e, t = 0; t < e.length; t++) vg.add(e[t])
}
var qr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Hf = Object.prototype.hasOwnProperty,
    W3 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    fp = {},
    dp = {};

function H3(t) {
    return Hf.call(dp, t) ? !0 : Hf.call(fp, t) ? !1 : W3.test(t) ? dp[t] = !0 : (fp[t] = !0, !1)
}

function $3(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function K3(t, e, n, r) {
    if (e === null || typeof e > "u" || $3(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function xn(t, e, n, r, i, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = s
}
var en = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    en[t] = new xn(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(t) {
    var e = t[0];
    en[e] = new xn(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    en[t] = new xn(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    en[t] = new xn(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    en[t] = new xn(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    en[t] = new xn(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function(t) {
    en[t] = new xn(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    en[t] = new xn(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function(t) {
    en[t] = new xn(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var dh = /[\-:]([a-z])/g;

function hh(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(dh, hh);
    en[e] = new xn(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(dh, hh);
    en[e] = new xn(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(dh, hh);
    en[e] = new xn(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    en[t] = new xn(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
en.xlinkHref = new xn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
    en[t] = new xn(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function ph(t, e, n, r) {
    var i = en.hasOwnProperty(e) ? en[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (K3(e, n, i, r) && (n = null), r || i === null ? H3(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Jr = yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Da = Symbol.for("react.element"),
    Co = Symbol.for("react.portal"),
    Ao = Symbol.for("react.fragment"),
    mh = Symbol.for("react.strict_mode"),
    $f = Symbol.for("react.profiler"),
    wg = Symbol.for("react.provider"),
    xg = Symbol.for("react.context"),
    gh = Symbol.for("react.forward_ref"),
    Kf = Symbol.for("react.suspense"),
    qf = Symbol.for("react.suspense_list"),
    yh = Symbol.for("react.memo"),
    ui = Symbol.for("react.lazy"),
    Eg = Symbol.for("react.offscreen"),
    hp = Symbol.iterator;

function vs(t) {
    return t === null || typeof t != "object" ? null : (t = hp && t[hp] || t["@@iterator"], typeof t == "function" ? t : null)
}
var ct = Object.assign,
    Ec;

function Bs(t) {
    if (Ec === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ec = e && e[1] || ""
    }
    return `
` + Ec + t
}
var Sc = !1;

function bc(t, e) {
    if (!t || Sc) return "";
    Sc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                    throw Error()
                }, Object.defineProperty(e.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
                            } while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Sc = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Bs(t) : ""
}

function q3(t) {
    switch (t.tag) {
        case 5:
            return Bs(t.type);
        case 16:
            return Bs("Lazy");
        case 13:
            return Bs("Suspense");
        case 19:
            return Bs("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = bc(t.type, !1), t;
        case 11:
            return t = bc(t.type.render, !1), t;
        case 1:
            return t = bc(t.type, !0), t;
        default:
            return ""
    }
}

function Vf(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case Ao:
            return "Fragment";
        case Co:
            return "Portal";
        case $f:
            return "Profiler";
        case mh:
            return "StrictMode";
        case Kf:
            return "Suspense";
        case qf:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case xg:
            return (t.displayName || "Context") + ".Consumer";
        case wg:
            return (t._context.displayName || "Context") + ".Provider";
        case gh:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case yh:
            return e = t.displayName || null, e !== null ? e : Vf(t.type) || "Memo";
        case ui:
            e = t._payload, t = t._init;
            try {
                return Vf(t(e))
            } catch {}
    }
    return null
}

function V3(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Vf(e);
        case 8:
            return e === mh ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function Ri(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function Sg(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function G3(t) {
    var e = Sg(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function Ua(t) {
    t._valueTracker || (t._valueTracker = G3(t))
}

function bg(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        r = "";
    return t && (r = Sg(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1
}

function Ml(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function Gf(t, e) {
    var n = e.checked;
    return ct({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}

function pp(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked;
    n = Ri(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function _g(t, e) {
    e = e.checked, e != null && ph(t, "checked", e, !1)
}

function Zf(t, e) {
    _g(t, e);
    var n = Ri(e.value),
        r = e.type;
    if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? Yf(t, e.type, n) : e.hasOwnProperty("defaultValue") && Yf(t, e.type, Ri(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function mp(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function Yf(t, e, n) {
    (e !== "number" || Ml(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Rs = Array.isArray;

function Wo(t, e, n, r) {
    if (t = t.options, e) {
        e = {};
        for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + Ri(n), e = null, i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0, r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}

function Qf(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(te(91));
    return ct({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function gp(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(te(92));
            if (Rs(n)) {
                if (1 < n.length) throw Error(te(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: Ri(n)
    }
}

function kg(t, e) {
    var n = Ri(e.value),
        r = Ri(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r)
}

function yp(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function Cg(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Xf(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Cg(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var za, Ag = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    } : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (za = za || document.createElement("div"), za.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = za.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function Ys(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Us = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Z3 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Us).forEach(function(t) {
    Z3.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), Us[e] = Us[t]
    })
});

function Ig(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Us.hasOwnProperty(t) && Us[t] ? ("" + e).trim() : e + "px"
}

function Tg(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Ig(n, e[n], r);
            n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
        }
}
var Y3 = ct({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Jf(t, e) {
    if (e) {
        if (Y3[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(te(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(te(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(te(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(te(62))
    }
}

function ed(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var td = null;

function vh(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var nd = null,
    Ho = null,
    $o = null;

function vp(t) {
    if (t = Sa(t)) {
        if (typeof nd != "function") throw Error(te(280));
        var e = t.stateNode;
        e && (e = Su(e), nd(t.stateNode, t.type, e))
    }
}

function Bg(t) {
    Ho ? $o ? $o.push(t) : $o = [t] : Ho = t
}

function Rg() {
    if (Ho) {
        var t = Ho,
            e = $o;
        if ($o = Ho = null, vp(t), e)
            for (t = 0; t < e.length; t++) vp(e[t])
    }
}

function Mg(t, e) {
    return t(e)
}

function Lg() {}
var _c = !1;

function Ng(t, e, n) {
    if (_c) return t(e, n);
    _c = !0;
    try {
        return Mg(t, e, n)
    } finally {
        _c = !1, (Ho !== null || $o !== null) && (Lg(), Rg())
    }
}

function Qs(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = Su(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(te(231, e, typeof n));
    return n
}
var rd = !1;
if (qr) try {
    var ws = {};
    Object.defineProperty(ws, "passive", {
        get: function() {
            rd = !0
        }
    }), window.addEventListener("test", ws, ws), window.removeEventListener("test", ws, ws)
} catch {
    rd = !1
}

function Q3(t, e, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (h) {
        this.onError(h)
    }
}
var zs = !1,
    Ll = null,
    Nl = !1,
    id = null,
    X3 = {
        onError: function(t) {
            zs = !0, Ll = t
        }
    };

function J3(t, e, n, r, i, o, s, a, l) {
    zs = !1, Ll = null, Q3.apply(X3, arguments)
}

function e4(t, e, n, r, i, o, s, a, l) {
    if (J3.apply(this, arguments), zs) {
        if (zs) {
            var u = Ll;
            zs = !1, Ll = null
        } else throw Error(te(198));
        Nl || (Nl = !0, id = u)
    }
}

function fo(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function Og(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function wp(t) {
    if (fo(t) !== t) throw Error(te(188))
}

function t4(t) {
    var e = t.alternate;
    if (!e) {
        if (e = fo(t), e === null) throw Error(te(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return wp(i), t;
                if (o === r) return wp(i), e;
                o = o.sibling
            }
            throw Error(te(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(te(189))
            }
        }
        if (n.alternate !== r) throw Error(te(190))
    }
    if (n.tag !== 3) throw Error(te(188));
    return n.stateNode.current === n ? t : e
}

function Pg(t) {
    return t = t4(t), t !== null ? jg(t) : null
}

function jg(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = jg(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var Dg = Fn.unstable_scheduleCallback,
    xp = Fn.unstable_cancelCallback,
    n4 = Fn.unstable_shouldYield,
    r4 = Fn.unstable_requestPaint,
    gt = Fn.unstable_now,
    i4 = Fn.unstable_getCurrentPriorityLevel,
    wh = Fn.unstable_ImmediatePriority,
    Ug = Fn.unstable_UserBlockingPriority,
    Ol = Fn.unstable_NormalPriority,
    o4 = Fn.unstable_LowPriority,
    zg = Fn.unstable_IdlePriority,
    vu = null,
    Cr = null;

function s4(t) {
    if (Cr && typeof Cr.onCommitFiberRoot == "function") try {
        Cr.onCommitFiberRoot(vu, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var dr = Math.clz32 ? Math.clz32 : u4,
    a4 = Math.log,
    l4 = Math.LN2;

function u4(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (a4(t) / l4 | 0) | 0
}
var Fa = 64,
    Wa = 4194304;

function Ms(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Pl(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = t.suspendedLanes,
        o = t.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Ms(a) : (o &= s, o !== 0 && (r = Ms(o)))
    } else s = n & ~i, s !== 0 ? r = Ms(s) : o !== 0 && (r = Ms(o));
    if (r === 0) return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r, o = e & -e, i >= o || i === 16 && (o & 4194240) !== 0)) return e;
    if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= r; 0 < e;) n = 31 - dr(e), i = 1 << n, r |= t[n], e &= ~i;
    return r
}

function c4(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function f4(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o;) {
        var s = 31 - dr(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = c4(a, e)) : l <= e && (t.expiredLanes |= a), o &= ~a
    }
}

function od(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function Fg() {
    var t = Fa;
    return Fa <<= 1, !(Fa & 4194240) && (Fa = 64), t
}

function kc(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function xa(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - dr(e), t[e] = n
}

function d4(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var i = 31 - dr(n),
            o = 1 << i;
        e[i] = 0, r[i] = -1, t[i] = -1, n &= ~o
    }
}

function xh(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var r = 31 - dr(n),
            i = 1 << r;
        i & e | t[r] & e && (t[r] |= e), n &= ~i
    }
}
var Ue = 0;

function Wg(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Hg, Eh, $g, Kg, qg, sd = !1,
    Ha = [],
    Si = null,
    bi = null,
    _i = null,
    Xs = new Map,
    Js = new Map,
    hi = [],
    h4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ep(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Si = null;
            break;
        case "dragenter":
        case "dragleave":
            bi = null;
            break;
        case "mouseover":
        case "mouseout":
            _i = null;
            break;
        case "pointerover":
        case "pointerout":
            Xs.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Js.delete(e.pointerId)
    }
}

function xs(t, e, n, r, i, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, e !== null && (e = Sa(e), e !== null && Eh(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t)
}

function p4(t, e, n, r, i) {
    switch (e) {
        case "focusin":
            return Si = xs(Si, t, e, n, r, i), !0;
        case "dragenter":
            return bi = xs(bi, t, e, n, r, i), !0;
        case "mouseover":
            return _i = xs(_i, t, e, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Xs.set(o, xs(Xs.get(o) || null, t, e, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Js.set(o, xs(Js.get(o) || null, t, e, n, r, i)), !0
    }
    return !1
}

function Vg(t) {
    var e = $i(t.target);
    if (e !== null) {
        var n = fo(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = Og(n), e !== null) {
                    t.blockedOn = e, qg(t.priority, function() {
                        $g(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function gl(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = ad(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            td = r, n.target.dispatchEvent(r), td = null
        } else return e = Sa(n), e !== null && Eh(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function Sp(t, e, n) {
    gl(t) && n.delete(e)
}

function m4() {
    sd = !1, Si !== null && gl(Si) && (Si = null), bi !== null && gl(bi) && (bi = null), _i !== null && gl(_i) && (_i = null), Xs.forEach(Sp), Js.forEach(Sp)
}

function Es(t, e) {
    t.blockedOn === e && (t.blockedOn = null, sd || (sd = !0, Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority, m4)))
}

function ea(t) {
    function e(i) {
        return Es(i, t)
    }
    if (0 < Ha.length) {
        Es(Ha[0], t);
        for (var n = 1; n < Ha.length; n++) {
            var r = Ha[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Si !== null && Es(Si, t), bi !== null && Es(bi, t), _i !== null && Es(_i, t), Xs.forEach(e), Js.forEach(e), n = 0; n < hi.length; n++) r = hi[n], r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < hi.length && (n = hi[0], n.blockedOn === null);) Vg(n), n.blockedOn === null && hi.shift()
}
var Ko = Jr.ReactCurrentBatchConfig,
    jl = !0;

function g4(t, e, n, r) {
    var i = Ue,
        o = Ko.transition;
    Ko.transition = null;
    try {
        Ue = 1, Sh(t, e, n, r)
    } finally {
        Ue = i, Ko.transition = o
    }
}

function y4(t, e, n, r) {
    var i = Ue,
        o = Ko.transition;
    Ko.transition = null;
    try {
        Ue = 4, Sh(t, e, n, r)
    } finally {
        Ue = i, Ko.transition = o
    }
}

function Sh(t, e, n, r) {
    if (jl) {
        var i = ad(t, e, n, r);
        if (i === null) Oc(t, e, r, Dl, n), Ep(t, r);
        else if (p4(i, t, e, n, r)) r.stopPropagation();
        else if (Ep(t, r), e & 4 && -1 < h4.indexOf(t)) {
            for (; i !== null;) {
                var o = Sa(i);
                if (o !== null && Hg(o), o = ad(t, e, n, r), o === null && Oc(t, e, r, Dl, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Oc(t, e, r, null, n)
    }
}
var Dl = null;

function ad(t, e, n, r) {
    if (Dl = null, t = vh(r), t = $i(t), t !== null)
        if (e = fo(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
        if (t = Og(e), t !== null) return t;
        t = null
    } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
    } else e !== t && (t = null);
    return Dl = t, null
}

function Gg(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (i4()) {
                case wh:
                    return 1;
                case Ug:
                    return 4;
                case Ol:
                case o4:
                    return 16;
                case zg:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var gi = null,
    bh = null,
    yl = null;

function Zg() {
    if (yl) return yl;
    var t, e = bh,
        n = e.length,
        r, i = "value" in gi ? gi.value : gi.textContent,
        o = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++);
    var s = n - t;
    for (r = 1; r <= s && e[n - r] === i[o - r]; r++);
    return yl = i.slice(t, 1 < r ? 1 - r : void 0)
}

function vl(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function $a() {
    return !0
}

function bp() {
    return !1
}

function Hn(t) {
    function e(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in t) t.hasOwnProperty(a) && (n = t[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? $a : bp, this.isPropagationStopped = bp, this
    }
    return ct(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $a)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $a)
        },
        persist: function() {},
        isPersistent: $a
    }), e
}
var cs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    _h = Hn(cs),
    Ea = ct({}, cs, {
        view: 0,
        detail: 0
    }),
    v4 = Hn(Ea),
    Cc, Ac, Ss, wu = ct({}, Ea, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: kh,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Ss && (Ss && t.type === "mousemove" ? (Cc = t.screenX - Ss.screenX, Ac = t.screenY - Ss.screenY) : Ac = Cc = 0, Ss = t), Cc)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : Ac
        }
    }),
    _p = Hn(wu),
    w4 = ct({}, wu, {
        dataTransfer: 0
    }),
    x4 = Hn(w4),
    E4 = ct({}, Ea, {
        relatedTarget: 0
    }),
    Ic = Hn(E4),
    S4 = ct({}, cs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    b4 = Hn(S4),
    _4 = ct({}, cs, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    k4 = Hn(_4),
    C4 = ct({}, cs, {
        data: 0
    }),
    kp = Hn(C4),
    A4 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    I4 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    T4 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function B4(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = T4[t]) ? !!e[t] : !1
}

function kh() {
    return B4
}
var R4 = ct({}, Ea, {
        key: function(t) {
            if (t.key) {
                var e = A4[t.key] || t.key;
                if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = vl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? I4[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: kh,
        charCode: function(t) {
            return t.type === "keypress" ? vl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? vl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    }),
    M4 = Hn(R4),
    L4 = ct({}, wu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Cp = Hn(L4),
    N4 = ct({}, Ea, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: kh
    }),
    O4 = Hn(N4),
    P4 = ct({}, cs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    j4 = Hn(P4),
    D4 = ct({}, wu, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    U4 = Hn(D4),
    z4 = [9, 13, 27, 32],
    Ch = qr && "CompositionEvent" in window,
    Fs = null;
qr && "documentMode" in document && (Fs = document.documentMode);
var F4 = qr && "TextEvent" in window && !Fs,
    Yg = qr && (!Ch || Fs && 8 < Fs && 11 >= Fs),
    Ap = " ",
    Ip = !1;

function Qg(t, e) {
    switch (t) {
        case "keyup":
            return z4.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Xg(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var Io = !1;

function W4(t, e) {
    switch (t) {
        case "compositionend":
            return Xg(e);
        case "keypress":
            return e.which !== 32 ? null : (Ip = !0, Ap);
        case "textInput":
            return t = e.data, t === Ap && Ip ? null : t;
        default:
            return null
    }
}

function H4(t, e) {
    if (Io) return t === "compositionend" || !Ch && Qg(t, e) ? (t = Zg(), yl = bh = gi = null, Io = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Yg && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var $4 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Tp(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$4[t.type] : e === "textarea"
}

function Jg(t, e, n, r) {
    Bg(r), e = Ul(e, "onChange"), 0 < e.length && (n = new _h("onChange", "change", null, n, r), t.push({
        event: n,
        listeners: e
    }))
}
var Ws = null,
    ta = null;

function K4(t) {
    cy(t, 0)
}

function xu(t) {
    var e = Ro(t);
    if (bg(e)) return t
}

function q4(t, e) {
    if (t === "change") return e
}
var ey = !1;
if (qr) {
    var Tc;
    if (qr) {
        var Bc = "oninput" in document;
        if (!Bc) {
            var Bp = document.createElement("div");
            Bp.setAttribute("oninput", "return;"), Bc = typeof Bp.oninput == "function"
        }
        Tc = Bc
    } else Tc = !1;
    ey = Tc && (!document.documentMode || 9 < document.documentMode)
}

function Rp() {
    Ws && (Ws.detachEvent("onpropertychange", ty), ta = Ws = null)
}

function ty(t) {
    if (t.propertyName === "value" && xu(ta)) {
        var e = [];
        Jg(e, ta, t, vh(t)), Ng(K4, e)
    }
}

function V4(t, e, n) {
    t === "focusin" ? (Rp(), Ws = e, ta = n, Ws.attachEvent("onpropertychange", ty)) : t === "focusout" && Rp()
}

function G4(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return xu(ta)
}

function Z4(t, e) {
    if (t === "click") return xu(e)
}

function Y4(t, e) {
    if (t === "input" || t === "change") return xu(e)
}

function Q4(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var mr = typeof Object.is == "function" ? Object.is : Q4;

function na(t, e) {
    if (mr(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Hf.call(e, i) || !mr(t[i], e[i])) return !1
    }
    return !0
}

function Mp(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function Lp(t, e) {
    var n = Mp(t);
    t = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length, t <= e && r >= e) return {
                node: n,
                offset: e - t
            };
            t = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Mp(n)
    }
}

function ny(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ny(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function ry() {
    for (var t = window, e = Ml(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = Ml(t.document)
    }
    return e
}

function Ah(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function X4(t) {
    var e = ry(),
        n = t.focusedElem,
        r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && ny(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ah(n)) {
            if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !t.extend && o > r && (i = r, r = o, o = i), i = Lp(n, o);
                var s = Lp(n, r);
                i && s && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), o > r ? (t.addRange(e), t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var J4 = qr && "documentMode" in document && 11 >= document.documentMode,
    To = null,
    ld = null,
    Hs = null,
    ud = !1;

function Np(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ud || To == null || To !== Ml(r) || (r = To, "selectionStart" in r && Ah(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Hs && na(Hs, r) || (Hs = r, r = Ul(ld, "onSelect"), 0 < r.length && (e = new _h("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: r
    }), e.target = To)))
}

function Ka(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var Bo = {
        animationend: Ka("Animation", "AnimationEnd"),
        animationiteration: Ka("Animation", "AnimationIteration"),
        animationstart: Ka("Animation", "AnimationStart"),
        transitionend: Ka("Transition", "TransitionEnd")
    },
    Rc = {},
    iy = {};
qr && (iy = document.createElement("div").style, "AnimationEvent" in window || (delete Bo.animationend.animation, delete Bo.animationiteration.animation, delete Bo.animationstart.animation), "TransitionEvent" in window || delete Bo.transitionend.transition);

function Eu(t) {
    if (Rc[t]) return Rc[t];
    if (!Bo[t]) return t;
    var e = Bo[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in iy) return Rc[t] = e[n];
    return t
}
var oy = Eu("animationend"),
    sy = Eu("animationiteration"),
    ay = Eu("animationstart"),
    ly = Eu("transitionend"),
    uy = new Map,
    Op = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Li(t, e) {
    uy.set(t, e), co(e, [t])
}
for (var Mc = 0; Mc < Op.length; Mc++) {
    var Lc = Op[Mc],
        e8 = Lc.toLowerCase(),
        t8 = Lc[0].toUpperCase() + Lc.slice(1);
    Li(e8, "on" + t8)
}
Li(oy, "onAnimationEnd");
Li(sy, "onAnimationIteration");
Li(ay, "onAnimationStart");
Li("dblclick", "onDoubleClick");
Li("focusin", "onFocus");
Li("focusout", "onBlur");
Li(ly, "onTransitionEnd");
Qo("onMouseEnter", ["mouseout", "mouseover"]);
Qo("onMouseLeave", ["mouseout", "mouseover"]);
Qo("onPointerEnter", ["pointerout", "pointerover"]);
Qo("onPointerLeave", ["pointerout", "pointerover"]);
co("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
co("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
co("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
co("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
co("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    n8 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));

function Pp(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n, e4(r, e, void 0, t), t.currentTarget = null
}

function cy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    Pp(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        Pp(i, a, u), o = l
                    }
        }
    }
    if (Nl) throw t = id, Nl = !1, id = null, t
}

function Ge(t, e) {
    var n = e[pd];
    n === void 0 && (n = e[pd] = new Set);
    var r = t + "__bubble";
    n.has(r) || (fy(e, t, 2, !1), n.add(r))
}

function Nc(t, e, n) {
    var r = 0;
    e && (r |= 4), fy(n, t, r, e)
}
var qa = "_reactListening" + Math.random().toString(36).slice(2);

function ra(t) {
    if (!t[qa]) {
        t[qa] = !0, vg.forEach(function(n) {
            n !== "selectionchange" && (n8.has(n) || Nc(n, !1, t), Nc(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[qa] || (e[qa] = !0, Nc("selectionchange", !1, e))
    }
}

function fy(t, e, n, r) {
    switch (Gg(e)) {
        case 1:
            var i = g4;
            break;
        case 4:
            i = y4;
            break;
        default:
            i = Sh
    }
    n = i.bind(null, e, n, t), i = void 0, !rd || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}

function Oc(t, e, n, r, i) {
    var o = r;
    if (!(e & 1) && !(e & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = $i(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Ng(function() {
        var u = o,
            h = vh(n),
            g = [];
        e: {
            var w = uy.get(t);
            if (w !== void 0) {
                var C = _h,
                    B = t;
                switch (t) {
                    case "keypress":
                        if (vl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        C = M4;
                        break;
                    case "focusin":
                        B = "focus", C = Ic;
                        break;
                    case "focusout":
                        B = "blur", C = Ic;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        C = Ic;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        C = _p;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        C = x4;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        C = O4;
                        break;
                    case oy:
                    case sy:
                    case ay:
                        C = b4;
                        break;
                    case ly:
                        C = j4;
                        break;
                    case "scroll":
                        C = v4;
                        break;
                    case "wheel":
                        C = U4;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        C = k4;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        C = Cp
                }
                var I = (e & 4) !== 0,
                    R = !I && t === "scroll",
                    _ = I ? w !== null ? w + "Capture" : null : w;
                I = [];
                for (var b = u, v; b !== null;) {
                    v = b;
                    var O = v.stateNode;
                    if (v.tag === 5 && O !== null && (v = O, _ !== null && (O = Qs(b, _), O != null && I.push(ia(b, O, v)))), R) break;
                    b = b.return
                }
                0 < I.length && (w = new C(w, B, null, n, h), g.push({
                    event: w,
                    listeners: I
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (w = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", w && n !== td && (B = n.relatedTarget || n.fromElement) && ($i(B) || B[Vr])) break e;
                if ((C || w) && (w = h.window === h ? h : (w = h.ownerDocument) ? w.defaultView || w.parentWindow : window, C ? (B = n.relatedTarget || n.toElement, C = u, B = B ? $i(B) : null, B !== null && (R = fo(B), B !== R || B.tag !== 5 && B.tag !== 6) && (B = null)) : (C = null, B = u), C !== B)) {
                    if (I = _p, O = "onMouseLeave", _ = "onMouseEnter", b = "mouse", (t === "pointerout" || t === "pointerover") && (I = Cp, O = "onPointerLeave", _ = "onPointerEnter", b = "pointer"), R = C == null ? w : Ro(C), v = B == null ? w : Ro(B), w = new I(O, b + "leave", C, n, h), w.target = R, w.relatedTarget = v, O = null, $i(h) === u && (I = new I(_, b + "enter", B, n, h), I.target = v, I.relatedTarget = R, O = I), R = O, C && B) t: {
                        for (I = C, _ = B, b = 0, v = I; v; v = vo(v)) b++;
                        for (v = 0, O = _; O; O = vo(O)) v++;
                        for (; 0 < b - v;) I = vo(I),
                        b--;
                        for (; 0 < v - b;) _ = vo(_),
                        v--;
                        for (; b--;) {
                            if (I === _ || _ !== null && I === _.alternate) break t;
                            I = vo(I), _ = vo(_)
                        }
                        I = null
                    }
                    else I = null;
                    C !== null && jp(g, w, C, I, !1), B !== null && R !== null && jp(g, R, B, I, !0)
                }
            }
            e: {
                if (w = u ? Ro(u) : window, C = w.nodeName && w.nodeName.toLowerCase(), C === "select" || C === "input" && w.type === "file") var D = q4;
                else if (Tp(w))
                    if (ey) D = Y4;
                    else {
                        D = G4;
                        var N = V4
                    }
                else(C = w.nodeName) && C.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (D = Z4);
                if (D && (D = D(t, u))) {
                    Jg(g, D, n, h);
                    break e
                }
                N && N(t, w, u),
                t === "focusout" && (N = w._wrapperState) && N.controlled && w.type === "number" && Yf(w, "number", w.value)
            }
            switch (N = u ? Ro(u) : window, t) {
                case "focusin":
                    (Tp(N) || N.contentEditable === "true") && (To = N, ld = u, Hs = null);
                    break;
                case "focusout":
                    Hs = ld = To = null;
                    break;
                case "mousedown":
                    ud = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ud = !1, Np(g, n, h);
                    break;
                case "selectionchange":
                    if (J4) break;
                case "keydown":
                case "keyup":
                    Np(g, n, h)
            }
            var U;
            if (Ch) e: {
                switch (t) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else Io ? Qg(t, n) && (z = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (Yg && n.locale !== "ko" && (Io || z !== "onCompositionStart" ? z === "onCompositionEnd" && Io && (U = Zg()) : (gi = h, bh = "value" in gi ? gi.value : gi.textContent, Io = !0)), N = Ul(u, z), 0 < N.length && (z = new kp(z, t, null, n, h), g.push({
                event: z,
                listeners: N
            }), U ? z.data = U : (U = Xg(n), U !== null && (z.data = U)))),
            (U = F4 ? W4(t, n) : H4(t, n)) && (u = Ul(u, "onBeforeInput"), 0 < u.length && (h = new kp("onBeforeInput", "beforeinput", null, n, h), g.push({
                event: h,
                listeners: u
            }), h.data = U))
        }
        cy(g, e)
    })
}

function ia(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function Ul(t, e) {
    for (var n = e + "Capture", r = []; t !== null;) {
        var i = t,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Qs(t, n), o != null && r.unshift(ia(t, o, i)), o = Qs(t, e), o != null && r.push(ia(t, o, i))), t = t.return
    }
    return r
}

function vo(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function jp(t, e, n, r, i) {
    for (var o = e._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Qs(n, o), l != null && s.unshift(ia(n, l, a))) : i || (l = Qs(n, o), l != null && s.push(ia(n, l, a)))), n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var r8 = /\r\n?/g,
    i8 = /\u0000|\uFFFD/g;

function Dp(t) {
    return (typeof t == "string" ? t : "" + t).replace(r8, `
`).replace(i8, "")
}

function Va(t, e, n) {
    if (e = Dp(e), Dp(t) !== e && n) throw Error(te(425))
}

function zl() {}
var cd = null,
    fd = null;

function dd(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var hd = typeof setTimeout == "function" ? setTimeout : void 0,
    o8 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Up = typeof Promise == "function" ? Promise : void 0,
    s8 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Up < "u" ? function(t) {
        return Up.resolve(null).then(t).catch(a8)
    } : hd;

function a8(t) {
    setTimeout(function() {
        throw t
    })
}

function Pc(t, e) {
    var n = e,
        r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    t.removeChild(i), ea(e);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ea(e)
}

function ki(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function zp(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var fs = Math.random().toString(36).slice(2),
    Sr = "__reactFiber$" + fs,
    oa = "__reactProps$" + fs,
    Vr = "__reactContainer$" + fs,
    pd = "__reactEvents$" + fs,
    l8 = "__reactListeners$" + fs,
    u8 = "__reactHandles$" + fs;

function $i(t) {
    var e = t[Sr];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Vr] || n[Sr]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = zp(t); t !== null;) {
                    if (n = t[Sr]) return n;
                    t = zp(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function Sa(t) {
    return t = t[Sr] || t[Vr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function Ro(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(te(33))
}

function Su(t) {
    return t[oa] || null
}
var md = [],
    Mo = -1;

function Ni(t) {
    return {
        current: t
    }
}

function Qe(t) {
    0 > Mo || (t.current = md[Mo], md[Mo] = null, Mo--)
}

function $e(t, e) {
    Mo++, md[Mo] = t.current, t.current = e
}
var Mi = {},
    dn = Ni(Mi),
    An = Ni(!1),
    ro = Mi;

function Xo(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Mi;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = e[o];
    return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i
}

function In(t) {
    return t = t.childContextTypes, t != null
}

function Fl() {
    Qe(An), Qe(dn)
}

function Fp(t, e, n) {
    if (dn.current !== Mi) throw Error(te(168));
    $e(dn, e), $e(An, n)
}

function dy(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e)) throw Error(te(108, V3(t) || "Unknown", i));
    return ct({}, n, r)
}

function Wl(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Mi, ro = dn.current, $e(dn, t), $e(An, An.current), !0
}

function Wp(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(te(169));
    n ? (t = dy(t, e, ro), r.__reactInternalMemoizedMergedChildContext = t, Qe(An), Qe(dn), $e(dn, t)) : Qe(An), $e(An, n)
}
var Pr = null,
    bu = !1,
    jc = !1;

function hy(t) {
    Pr === null ? Pr = [t] : Pr.push(t)
}

function c8(t) {
    bu = !0, hy(t)
}

function Oi() {
    if (!jc && Pr !== null) {
        jc = !0;
        var t = 0,
            e = Ue;
        try {
            var n = Pr;
            for (Ue = 1; t < n.length; t++) {
                var r = n[t];
                do r = r(!0); while (r !== null)
            }
            Pr = null, bu = !1
        } catch (i) {
            throw Pr !== null && (Pr = Pr.slice(t + 1)), Dg(wh, Oi), i
        } finally {
            Ue = e, jc = !1
        }
    }
    return null
}
var Lo = [],
    No = 0,
    Hl = null,
    $l = 0,
    Yn = [],
    Qn = 0,
    io = null,
    zr = 1,
    Fr = "";

function ji(t, e) {
    Lo[No++] = $l, Lo[No++] = Hl, Hl = t, $l = e
}

function py(t, e, n) {
    Yn[Qn++] = zr, Yn[Qn++] = Fr, Yn[Qn++] = io, io = t;
    var r = zr;
    t = Fr;
    var i = 32 - dr(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - dr(e) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, zr = 1 << 32 - dr(e) + i | n << i | r, Fr = o + t
    } else zr = 1 << o | n << i | r, Fr = t
}

function Ih(t) {
    t.return !== null && (ji(t, 1), py(t, 1, 0))
}

function Th(t) {
    for (; t === Hl;) Hl = Lo[--No], Lo[No] = null, $l = Lo[--No], Lo[No] = null;
    for (; t === io;) io = Yn[--Qn], Yn[Qn] = null, Fr = Yn[--Qn], Yn[Qn] = null, zr = Yn[--Qn], Yn[Qn] = null
}
var zn = null,
    Un = null,
    rt = !1,
    cr = null;

function my(t, e) {
    var n = Jn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function Hp(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, zn = t, Un = ki(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, zn = t, Un = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = io !== null ? {
                id: zr,
                overflow: Fr
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = Jn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, zn = t, Un = null, !0) : !1;
        default:
            return !1
    }
}

function gd(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function yd(t) {
    if (rt) {
        var e = Un;
        if (e) {
            var n = e;
            if (!Hp(t, e)) {
                if (gd(t)) throw Error(te(418));
                e = ki(n.nextSibling);
                var r = zn;
                e && Hp(t, e) ? my(r, n) : (t.flags = t.flags & -4097 | 2, rt = !1, zn = t)
            }
        } else {
            if (gd(t)) throw Error(te(418));
            t.flags = t.flags & -4097 | 2, rt = !1, zn = t
        }
    }
}

function $p(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    zn = t
}

function Ga(t) {
    if (t !== zn) return !1;
    if (!rt) return $p(t), rt = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !dd(t.type, t.memoizedProps)), e && (e = Un)) {
        if (gd(t)) throw gy(), Error(te(418));
        for (; e;) my(t, e), e = ki(e.nextSibling)
    }
    if ($p(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(te(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Un = ki(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Un = null
        }
    } else Un = zn ? ki(t.stateNode.nextSibling) : null;
    return !0
}

function gy() {
    for (var t = Un; t;) t = ki(t.nextSibling)
}

function Jo() {
    Un = zn = null, rt = !1
}

function Bh(t) {
    cr === null ? cr = [t] : cr.push(t)
}
var f8 = Jr.ReactCurrentBatchConfig;

function ar(t, e) {
    if (t && t.defaultProps) {
        e = ct({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
var Kl = Ni(null),
    ql = null,
    Oo = null,
    Rh = null;

function Mh() {
    Rh = Oo = ql = null
}

function Lh(t) {
    var e = Kl.current;
    Qe(Kl), t._currentValue = e
}

function vd(t, e, n) {
    for (; t !== null;) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
        t = t.return
    }
}

function qo(t, e) {
    ql = t, Rh = Oo = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (kn = !0), t.firstContext = null)
}

function nr(t) {
    var e = t._currentValue;
    if (Rh !== t)
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, Oo === null) {
            if (ql === null) throw Error(te(308));
            Oo = t, ql.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else Oo = Oo.next = t;
    return e
}
var Ki = null;

function Nh(t) {
    Ki === null ? Ki = [t] : Ki.push(t)
}

function yy(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n, Nh(e)) : (n.next = i.next, i.next = n), e.interleaved = n, Gr(t, r)
}

function Gr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var ci = !1;

function Oh(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function vy(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function Hr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Ci(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Le & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, Gr(t, n)
    }
    return i = r.interleaved, i === null ? (e.next = e, Nh(r)) : (e.next = i.next, i.next = e), r.interleaved = e, Gr(t, n)
}

function wl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, xh(t, n)
    }
}

function Kp(t, e) {
    var n = t.updateQueue,
        r = t.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = e : o = o.next = e
        } else i = o = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function Vl(t, e, n, r) {
    var i = t.updateQueue;
    ci = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var h = t.alternate;
        h !== null && (h = h.updateQueue, a = h.lastBaseUpdate, a !== s && (a === null ? h.firstBaseUpdate = u : a.next = u, h.lastBaseUpdate = l))
    }
    if (o !== null) {
        var g = i.baseState;
        s = 0, h = u = l = null, a = o;
        do {
            var w = a.lane,
                C = a.eventTime;
            if ((r & w) === w) {
                h !== null && (h = h.next = {
                    eventTime: C,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var B = t,
                        I = a;
                    switch (w = e, C = n, I.tag) {
                        case 1:
                            if (B = I.payload, typeof B == "function") {
                                g = B.call(C, g, w);
                                break e
                            }
                            g = B;
                            break e;
                        case 3:
                            B.flags = B.flags & -65537 | 128;
                        case 0:
                            if (B = I.payload, w = typeof B == "function" ? B.call(C, g, w) : B, w == null) break e;
                            g = ct({}, g, w);
                            break e;
                        case 2:
                            ci = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64, w = i.effects, w === null ? i.effects = [a] : w.push(a))
            } else C = {
                eventTime: C,
                lane: w,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, h === null ? (u = h = C, l = g) : h = h.next = C, s |= w;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                w = a, a = w.next, w.next = null, i.lastBaseUpdate = w, i.shared.pending = null
            }
        } while (!0);
        if (h === null && (l = g), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = h, e = i.shared.interleaved, e !== null) {
            i = e;
            do s |= i.lane, i = i.next; while (i !== e)
        } else o === null && (i.shared.lanes = 0);
        so |= s, t.lanes = s, t.memoizedState = g
    }
}

function qp(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(te(191, i));
                i.call(r)
            }
        }
}
var wy = new yg.Component().refs;

function wd(t, e, n, r) {
    e = t.memoizedState, n = n(r, e), n = n == null ? e : ct({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var _u = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? fo(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = yn(),
            i = Ii(t),
            o = Hr(r, i);
        o.payload = e, n != null && (o.callback = n), e = Ci(t, o, i), e !== null && (hr(e, t, i, r), wl(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = yn(),
            i = Ii(t),
            o = Hr(r, i);
        o.tag = 1, o.payload = e, n != null && (o.callback = n), e = Ci(t, o, i), e !== null && (hr(e, t, i, r), wl(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = yn(),
            r = Ii(t),
            i = Hr(n, r);
        i.tag = 2, e != null && (i.callback = e), e = Ci(t, i, r), e !== null && (hr(e, t, r, n), wl(e, t, r))
    }
};

function Vp(t, e, n, r, i, o, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, s) : e.prototype && e.prototype.isPureReactComponent ? !na(n, r) || !na(i, o) : !0
}

function xy(t, e, n) {
    var r = !1,
        i = Mi,
        o = e.contextType;
    return typeof o == "object" && o !== null ? o = nr(o) : (i = In(e) ? ro : dn.current, r = e.contextTypes, o = (r = r != null) ? Xo(t, i) : Mi), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = _u, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e
}

function Gp(t, e, n, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && _u.enqueueReplaceState(e, e.state, null)
}

function xd(t, e, n, r) {
    var i = t.stateNode;
    i.props = n, i.state = t.memoizedState, i.refs = wy, Oh(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? i.context = nr(o) : (o = In(e) ? ro : dn.current, i.context = Xo(t, o)), i.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (wd(t, e, o, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && _u.enqueueReplaceState(i, i.state, null), Vl(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}

function bs(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(te(309));
                var r = n.stateNode
            }
            if (!r) throw Error(te(147, t));
            var i = r,
                o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var a = i.refs;
                a === wy && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s
            }, e._stringRef = o, e)
        }
        if (typeof t != "string") throw Error(te(284));
        if (!n._owner) throw Error(te(290, t))
    }
    return t
}

function Za(t, e) {
    throw t = Object.prototype.toString.call(e), Error(te(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function Zp(t) {
    var e = t._init;
    return e(t._payload)
}

function Ey(t) {
    function e(_, b) {
        if (t) {
            var v = _.deletions;
            v === null ? (_.deletions = [b], _.flags |= 16) : v.push(b)
        }
    }

    function n(_, b) {
        if (!t) return null;
        for (; b !== null;) e(_, b), b = b.sibling;
        return null
    }

    function r(_, b) {
        for (_ = new Map; b !== null;) b.key !== null ? _.set(b.key, b) : _.set(b.index, b), b = b.sibling;
        return _
    }

    function i(_, b) {
        return _ = Ti(_, b), _.index = 0, _.sibling = null, _
    }

    function o(_, b, v) {
        return _.index = v, t ? (v = _.alternate, v !== null ? (v = v.index, v < b ? (_.flags |= 2, b) : v) : (_.flags |= 2, b)) : (_.flags |= 1048576, b)
    }

    function s(_) {
        return t && _.alternate === null && (_.flags |= 2), _
    }

    function a(_, b, v, O) {
        return b === null || b.tag !== 6 ? (b = $c(v, _.mode, O), b.return = _, b) : (b = i(b, v), b.return = _, b)
    }

    function l(_, b, v, O) {
        var D = v.type;
        return D === Ao ? h(_, b, v.props.children, O, v.key) : b !== null && (b.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ui && Zp(D) === b.type) ? (O = i(b, v.props), O.ref = bs(_, b, v), O.return = _, O) : (O = kl(v.type, v.key, v.props, null, _.mode, O), O.ref = bs(_, b, v), O.return = _, O)
    }

    function u(_, b, v, O) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== v.containerInfo || b.stateNode.implementation !== v.implementation ? (b = Kc(v, _.mode, O), b.return = _, b) : (b = i(b, v.children || []), b.return = _, b)
    }

    function h(_, b, v, O, D) {
        return b === null || b.tag !== 7 ? (b = Ji(v, _.mode, O, D), b.return = _, b) : (b = i(b, v), b.return = _, b)
    }

    function g(_, b, v) {
        if (typeof b == "string" && b !== "" || typeof b == "number") return b = $c("" + b, _.mode, v), b.return = _, b;
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Da:
                    return v = kl(b.type, b.key, b.props, null, _.mode, v), v.ref = bs(_, null, b), v.return = _, v;
                case Co:
                    return b = Kc(b, _.mode, v), b.return = _, b;
                case ui:
                    var O = b._init;
                    return g(_, O(b._payload), v)
            }
            if (Rs(b) || vs(b)) return b = Ji(b, _.mode, v, null), b.return = _, b;
            Za(_, b)
        }
        return null
    }

    function w(_, b, v, O) {
        var D = b !== null ? b.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return D !== null ? null : a(_, b, "" + v, O);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Da:
                    return v.key === D ? l(_, b, v, O) : null;
                case Co:
                    return v.key === D ? u(_, b, v, O) : null;
                case ui:
                    return D = v._init, w(_, b, D(v._payload), O)
            }
            if (Rs(v) || vs(v)) return D !== null ? null : h(_, b, v, O, null);
            Za(_, v)
        }
        return null
    }

    function C(_, b, v, O, D) {
        if (typeof O == "string" && O !== "" || typeof O == "number") return _ = _.get(v) || null, a(b, _, "" + O, D);
        if (typeof O == "object" && O !== null) {
            switch (O.$$typeof) {
                case Da:
                    return _ = _.get(O.key === null ? v : O.key) || null, l(b, _, O, D);
                case Co:
                    return _ = _.get(O.key === null ? v : O.key) || null, u(b, _, O, D);
                case ui:
                    var N = O._init;
                    return C(_, b, v, N(O._payload), D)
            }
            if (Rs(O) || vs(O)) return _ = _.get(v) || null, h(b, _, O, D, null);
            Za(b, O)
        }
        return null
    }

    function B(_, b, v, O) {
        for (var D = null, N = null, U = b, z = b = 0, Z = null; U !== null && z < v.length; z++) {
            U.index > z ? (Z = U, U = null) : Z = U.sibling;
            var Q = w(_, U, v[z], O);
            if (Q === null) {
                U === null && (U = Z);
                break
            }
            t && U && Q.alternate === null && e(_, U), b = o(Q, b, z), N === null ? D = Q : N.sibling = Q, N = Q, U = Z
        }
        if (z === v.length) return n(_, U), rt && ji(_, z), D;
        if (U === null) {
            for (; z < v.length; z++) U = g(_, v[z], O), U !== null && (b = o(U, b, z), N === null ? D = U : N.sibling = U, N = U);
            return rt && ji(_, z), D
        }
        for (U = r(_, U); z < v.length; z++) Z = C(U, _, z, v[z], O), Z !== null && (t && Z.alternate !== null && U.delete(Z.key === null ? z : Z.key), b = o(Z, b, z), N === null ? D = Z : N.sibling = Z, N = Z);
        return t && U.forEach(function(X) {
            return e(_, X)
        }), rt && ji(_, z), D
    }

    function I(_, b, v, O) {
        var D = vs(v);
        if (typeof D != "function") throw Error(te(150));
        if (v = D.call(v), v == null) throw Error(te(151));
        for (var N = D = null, U = b, z = b = 0, Z = null, Q = v.next(); U !== null && !Q.done; z++, Q = v.next()) {
            U.index > z ? (Z = U, U = null) : Z = U.sibling;
            var X = w(_, U, Q.value, O);
            if (X === null) {
                U === null && (U = Z);
                break
            }
            t && U && X.alternate === null && e(_, U), b = o(X, b, z), N === null ? D = X : N.sibling = X, N = X, U = Z
        }
        if (Q.done) return n(_, U), rt && ji(_, z), D;
        if (U === null) {
            for (; !Q.done; z++, Q = v.next()) Q = g(_, Q.value, O), Q !== null && (b = o(Q, b, z), N === null ? D = Q : N.sibling = Q, N = Q);
            return rt && ji(_, z), D
        }
        for (U = r(_, U); !Q.done; z++, Q = v.next()) Q = C(U, _, z, Q.value, O), Q !== null && (t && Q.alternate !== null && U.delete(Q.key === null ? z : Q.key), b = o(Q, b, z), N === null ? D = Q : N.sibling = Q, N = Q);
        return t && U.forEach(function(ce) {
            return e(_, ce)
        }), rt && ji(_, z), D
    }

    function R(_, b, v, O) {
        if (typeof v == "object" && v !== null && v.type === Ao && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Da:
                    e: {
                        for (var D = v.key, N = b; N !== null;) {
                            if (N.key === D) {
                                if (D = v.type, D === Ao) {
                                    if (N.tag === 7) {
                                        n(_, N.sibling), b = i(N, v.props.children), b.return = _, _ = b;
                                        break e
                                    }
                                } else if (N.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ui && Zp(D) === N.type) {
                                    n(_, N.sibling), b = i(N, v.props), b.ref = bs(_, N, v), b.return = _, _ = b;
                                    break e
                                }
                                n(_, N);
                                break
                            } else e(_, N);
                            N = N.sibling
                        }
                        v.type === Ao ? (b = Ji(v.props.children, _.mode, O, v.key), b.return = _, _ = b) : (O = kl(v.type, v.key, v.props, null, _.mode, O), O.ref = bs(_, b, v), O.return = _, _ = O)
                    }
                    return s(_);
                case Co:
                    e: {
                        for (N = v.key; b !== null;) {
                            if (b.key === N)
                                if (b.tag === 4 && b.stateNode.containerInfo === v.containerInfo && b.stateNode.implementation === v.implementation) {
                                    n(_, b.sibling), b = i(b, v.children || []), b.return = _, _ = b;
                                    break e
                                } else {
                                    n(_, b);
                                    break
                                }
                            else e(_, b);
                            b = b.sibling
                        }
                        b = Kc(v, _.mode, O),
                        b.return = _,
                        _ = b
                    }
                    return s(_);
                case ui:
                    return N = v._init, R(_, b, N(v._payload), O)
            }
            if (Rs(v)) return B(_, b, v, O);
            if (vs(v)) return I(_, b, v, O);
            Za(_, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, b !== null && b.tag === 6 ? (n(_, b.sibling), b = i(b, v), b.return = _, _ = b) : (n(_, b), b = $c(v, _.mode, O), b.return = _, _ = b), s(_)) : n(_, b)
    }
    return R
}
var es = Ey(!0),
    Sy = Ey(!1),
    ba = {},
    Ar = Ni(ba),
    sa = Ni(ba),
    aa = Ni(ba);

function qi(t) {
    if (t === ba) throw Error(te(174));
    return t
}

function Ph(t, e) {
    switch ($e(aa, e), $e(sa, t), $e(Ar, ba), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Xf(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Xf(e, t)
    }
    Qe(Ar), $e(Ar, e)
}

function ts() {
    Qe(Ar), Qe(sa), Qe(aa)
}

function by(t) {
    qi(aa.current);
    var e = qi(Ar.current),
        n = Xf(e, t.type);
    e !== n && ($e(sa, t), $e(Ar, n))
}

function jh(t) {
    sa.current === t && (Qe(Ar), Qe(sa))
}
var st = Ni(0);

function Gl(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var Dc = [];

function Dh() {
    for (var t = 0; t < Dc.length; t++) Dc[t]._workInProgressVersionPrimary = null;
    Dc.length = 0
}
var xl = Jr.ReactCurrentDispatcher,
    Uc = Jr.ReactCurrentBatchConfig,
    oo = 0,
    ut = null,
    jt = null,
    Ft = null,
    Zl = !1,
    $s = !1,
    la = 0,
    d8 = 0;

function rn() {
    throw Error(te(321))
}

function Uh(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!mr(t[n], e[n])) return !1;
    return !0
}

function zh(t, e, n, r, i, o) {
    if (oo = o, ut = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, xl.current = t === null || t.memoizedState === null ? g8 : y8, t = n(r, i), $s) {
        o = 0;
        do {
            if ($s = !1, la = 0, 25 <= o) throw Error(te(301));
            o += 1, Ft = jt = null, e.updateQueue = null, xl.current = v8, t = n(r, i)
        } while ($s)
    }
    if (xl.current = Yl, e = jt !== null && jt.next !== null, oo = 0, Ft = jt = ut = null, Zl = !1, e) throw Error(te(300));
    return t
}

function Fh() {
    var t = la !== 0;
    return la = 0, t
}

function xr() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ft === null ? ut.memoizedState = Ft = t : Ft = Ft.next = t, Ft
}

function rr() {
    if (jt === null) {
        var t = ut.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = jt.next;
    var e = Ft === null ? ut.memoizedState : Ft.next;
    if (e !== null) Ft = e, jt = t;
    else {
        if (t === null) throw Error(te(310));
        jt = t, t = {
            memoizedState: jt.memoizedState,
            baseState: jt.baseState,
            baseQueue: jt.baseQueue,
            queue: jt.queue,
            next: null
        }, Ft === null ? ut.memoizedState = Ft = t : Ft = Ft.next = t
    }
    return Ft
}

function ua(t, e) {
    return typeof e == "function" ? e(t) : e
}

function zc(t) {
    var e = rr(),
        n = e.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = t;
    var r = jt,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = o;
        do {
            var h = u.lane;
            if ((oo & h) === h) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var g = {
                    lane: h,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = g, s = r) : l = l.next = g, ut.lanes |= h, so |= h
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, mr(r, e.memoizedState) || (kn = !0), e.memoizedState = r, e.baseState = s, e.baseQueue = l, n.lastRenderedState = r
    }
    if (t = n.interleaved, t !== null) {
        i = t;
        do o = i.lane, ut.lanes |= o, so |= o, i = i.next; while (i !== t)
    } else i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function Fc(t) {
    var e = rr(),
        n = e.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
        i = n.pending,
        o = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = t(o, s.action), s = s.next; while (s !== i);
        mr(o, e.memoizedState) || (kn = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function _y() {}

function ky(t, e) {
    var n = ut,
        r = rr(),
        i = e(),
        o = !mr(r.memoizedState, i);
    if (o && (r.memoizedState = i, kn = !0), r = r.queue, Wh(Iy.bind(null, n, r, t), [t]), r.getSnapshot !== e || o || Ft !== null && Ft.memoizedState.tag & 1) {
        if (n.flags |= 2048, ca(9, Ay.bind(null, n, r, i, e), void 0, null), $t === null) throw Error(te(349));
        oo & 30 || Cy(n, e, i)
    }
    return i
}

function Cy(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = ut.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ut.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function Ay(t, e, n, r) {
    e.value = n, e.getSnapshot = r, Ty(e) && By(t)
}

function Iy(t, e, n) {
    return n(function() {
        Ty(e) && By(t)
    })
}

function Ty(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !mr(t, n)
    } catch {
        return !0
    }
}

function By(t) {
    var e = Gr(t, 1);
    e !== null && hr(e, t, 1, -1)
}

function Yp(t) {
    var e = xr();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = m8.bind(null, ut, t), [e.memoizedState, t]
}

function ca(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    }, e = ut.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ut.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t
}

function Ry() {
    return rr().memoizedState
}

function El(t, e, n, r) {
    var i = xr();
    ut.flags |= t, i.memoizedState = ca(1 | e, n, void 0, r === void 0 ? null : r)
}

function ku(t, e, n, r) {
    var i = rr();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (jt !== null) {
        var s = jt.memoizedState;
        if (o = s.destroy, r !== null && Uh(r, s.deps)) {
            i.memoizedState = ca(e, n, o, r);
            return
        }
    }
    ut.flags |= t, i.memoizedState = ca(1 | e, n, o, r)
}

function Qp(t, e) {
    return El(8390656, 8, t, e)
}

function Wh(t, e) {
    return ku(2048, 8, t, e)
}

function My(t, e) {
    return ku(4, 2, t, e)
}

function Ly(t, e) {
    return ku(4, 4, t, e)
}

function Ny(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function() {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function() {
            e.current = null
        }
}

function Oy(t, e, n) {
    return n = n != null ? n.concat([t]) : null, ku(4, 4, Ny.bind(null, e, t), n)
}

function Hh() {}

function Py(t, e) {
    var n = rr();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Uh(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
}

function jy(t, e) {
    var n = rr();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Uh(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
}

function Dy(t, e, n) {
    return oo & 21 ? (mr(n, e) || (n = Fg(), ut.lanes |= n, so |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, kn = !0), t.memoizedState = n)
}

function h8(t, e) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, t(!0);
    var r = Uc.transition;
    Uc.transition = {};
    try {
        t(!1), e()
    } finally {
        Ue = n, Uc.transition = r
    }
}

function Uy() {
    return rr().memoizedState
}

function p8(t, e, n) {
    var r = Ii(t);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, zy(t)) Fy(e, n);
    else if (n = yy(t, e, n, r), n !== null) {
        var i = yn();
        hr(n, t, r, i), Wy(n, e, r)
    }
}

function m8(t, e, n) {
    var r = Ii(t),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (zy(t)) Fy(e, i);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
            var s = e.lastRenderedState,
                a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, mr(a, s)) {
                var l = e.interleaved;
                l === null ? (i.next = i, Nh(e)) : (i.next = l.next, l.next = i), e.interleaved = i;
                return
            }
        } catch {} finally {}
        n = yy(t, e, i, r), n !== null && (i = yn(), hr(n, t, r, i), Wy(n, e, r))
    }
}

function zy(t) {
    var e = t.alternate;
    return t === ut || e !== null && e === ut
}

function Fy(t, e) {
    $s = Zl = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Wy(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, xh(t, n)
    }
}
var Yl = {
        readContext: nr,
        useCallback: rn,
        useContext: rn,
        useEffect: rn,
        useImperativeHandle: rn,
        useInsertionEffect: rn,
        useLayoutEffect: rn,
        useMemo: rn,
        useReducer: rn,
        useRef: rn,
        useState: rn,
        useDebugValue: rn,
        useDeferredValue: rn,
        useTransition: rn,
        useMutableSource: rn,
        useSyncExternalStore: rn,
        useId: rn,
        unstable_isNewReconciler: !1
    },
    g8 = {
        readContext: nr,
        useCallback: function(t, e) {
            return xr().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: nr,
        useEffect: Qp,
        useImperativeHandle: function(t, e, n) {
            return n = n != null ? n.concat([t]) : null, El(4194308, 4, Ny.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return El(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            return El(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = xr();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function(t, e, n) {
            var r = xr();
            return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, r.queue = t, t = t.dispatch = p8.bind(null, ut, t), [r.memoizedState, t]
        },
        useRef: function(t) {
            var e = xr();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: Yp,
        useDebugValue: Hh,
        useDeferredValue: function(t) {
            return xr().memoizedState = t
        },
        useTransition: function() {
            var t = Yp(!1),
                e = t[0];
            return t = h8.bind(null, t[1]), xr().memoizedState = t, [e, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, e, n) {
            var r = ut,
                i = xr();
            if (rt) {
                if (n === void 0) throw Error(te(407));
                n = n()
            } else {
                if (n = e(), $t === null) throw Error(te(349));
                oo & 30 || Cy(r, e, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: e
            };
            return i.queue = o, Qp(Iy.bind(null, r, o, t), [t]), r.flags |= 2048, ca(9, Ay.bind(null, r, o, n, e), void 0, null), n
        },
        useId: function() {
            var t = xr(),
                e = $t.identifierPrefix;
            if (rt) {
                var n = Fr,
                    r = zr;
                n = (r & ~(1 << 32 - dr(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = la++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = d8++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    y8 = {
        readContext: nr,
        useCallback: Py,
        useContext: nr,
        useEffect: Wh,
        useImperativeHandle: Oy,
        useInsertionEffect: My,
        useLayoutEffect: Ly,
        useMemo: jy,
        useReducer: zc,
        useRef: Ry,
        useState: function() {
            return zc(ua)
        },
        useDebugValue: Hh,
        useDeferredValue: function(t) {
            var e = rr();
            return Dy(e, jt.memoizedState, t)
        },
        useTransition: function() {
            var t = zc(ua)[0],
                e = rr().memoizedState;
            return [t, e]
        },
        useMutableSource: _y,
        useSyncExternalStore: ky,
        useId: Uy,
        unstable_isNewReconciler: !1
    },
    v8 = {
        readContext: nr,
        useCallback: Py,
        useContext: nr,
        useEffect: Wh,
        useImperativeHandle: Oy,
        useInsertionEffect: My,
        useLayoutEffect: Ly,
        useMemo: jy,
        useReducer: Fc,
        useRef: Ry,
        useState: function() {
            return Fc(ua)
        },
        useDebugValue: Hh,
        useDeferredValue: function(t) {
            var e = rr();
            return jt === null ? e.memoizedState = t : Dy(e, jt.memoizedState, t)
        },
        useTransition: function() {
            var t = Fc(ua)[0],
                e = rr().memoizedState;
            return [t, e]
        },
        useMutableSource: _y,
        useSyncExternalStore: ky,
        useId: Uy,
        unstable_isNewReconciler: !1
    };

function ns(t, e) {
    try {
        var n = "",
            r = e;
        do n += q3(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}

function Wc(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}

function Ed(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var w8 = typeof WeakMap == "function" ? WeakMap : Map;

function Hy(t, e, n) {
    n = Hr(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        Xl || (Xl = !0, Rd = r), Ed(t, e)
    }, n
}

function $y(t, e, n) {
    n = Hr(-1, n), n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Ed(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Ed(t, e), typeof r != "function" && (Ai === null ? Ai = new Set([this]) : Ai.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Xp(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new w8;
        var i = new Set;
        r.set(e, i)
    } else i = r.get(e), i === void 0 && (i = new Set, r.set(e, i));
    i.has(n) || (i.add(n), t = L8.bind(null, t, e, n), e.then(t, t))
}

function Jp(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function e1(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Hr(-1, 1), e.tag = 2, Ci(n, e, 1))), n.lanes |= 1), t)
}
var x8 = Jr.ReactCurrentOwner,
    kn = !1;

function pn(t, e, n, r) {
    e.child = t === null ? Sy(e, null, n, r) : es(e, t.child, n, r)
}

function t1(t, e, n, r, i) {
    n = n.render;
    var o = e.ref;
    return qo(e, i), r = zh(t, e, n, r, o, i), n = Fh(), t !== null && !kn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Zr(t, e, i)) : (rt && n && Ih(e), e.flags |= 1, pn(t, e, r, i), e.child)
}

function n1(t, e, n, r, i) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !Qh(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, Ky(t, e, o, r, i)) : (t = kl(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (o = t.child, !(t.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : na, n(s, r) && t.ref === e.ref) return Zr(t, e, i)
    }
    return e.flags |= 1, t = Ti(o, r), t.ref = e.ref, t.return = e, e.child = t
}

function Ky(t, e, n, r, i) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (na(o, r) && t.ref === e.ref)
            if (kn = !1, e.pendingProps = r = o, (t.lanes & i) !== 0) t.flags & 131072 && (kn = !0);
            else return e.lanes = t.lanes, Zr(t, e, i)
    }
    return Sd(t, e, n, r, i)
}

function qy(t, e, n) {
    var r = e.pendingProps,
        i = r.children,
        o = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $e(jo, Ln), Ln |= n;
        else {
            if (!(n & 1073741824)) return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, $e(jo, Ln), Ln |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, $e(jo, Ln), Ln |= r
        }
    else o !== null ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, $e(jo, Ln), Ln |= r;
    return pn(t, e, i, n), e.child
}

function Vy(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function Sd(t, e, n, r, i) {
    var o = In(n) ? ro : dn.current;
    return o = Xo(e, o), qo(e, i), n = zh(t, e, n, r, o, i), r = Fh(), t !== null && !kn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Zr(t, e, i)) : (rt && r && Ih(e), e.flags |= 1, pn(t, e, n, i), e.child)
}

function r1(t, e, n, r, i) {
    if (In(n)) {
        var o = !0;
        Wl(e)
    } else o = !1;
    if (qo(e, i), e.stateNode === null) Sl(t, e), xy(e, n, r), xd(e, n, r, i), r = !0;
    else if (t === null) {
        var s = e.stateNode,
            a = e.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = nr(u) : (u = In(n) ? ro : dn.current, u = Xo(e, u));
        var h = n.getDerivedStateFromProps,
            g = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Gp(e, s, r, u), ci = !1;
        var w = e.memoizedState;
        s.state = w, Vl(e, r, s, i), l = e.memoizedState, a !== r || w !== l || An.current || ci ? (typeof h == "function" && (wd(e, n, h, r), l = e.memoizedState), (a = ci || Vp(e, n, a, r, w, l, u)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), r = !1)
    } else {
        s = e.stateNode, vy(t, e), a = e.memoizedProps, u = e.type === e.elementType ? a : ar(e.type, a), s.props = u, g = e.pendingProps, w = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = nr(l) : (l = In(n) ? ro : dn.current, l = Xo(e, l));
        var C = n.getDerivedStateFromProps;
        (h = typeof C == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || w !== l) && Gp(e, s, r, l), ci = !1, w = e.memoizedState, s.state = w, Vl(e, r, s, i);
        var B = e.memoizedState;
        a !== g || w !== B || An.current || ci ? (typeof C == "function" && (wd(e, n, C, r), B = e.memoizedState), (u = ci || Vp(e, n, u, r, w, B, l) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, B, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, B, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = B), s.props = r, s.state = B, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === t.memoizedProps && w === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && w === t.memoizedState || (e.flags |= 1024), r = !1)
    }
    return bd(t, e, n, r, o, i)
}

function bd(t, e, n, r, i, o) {
    Vy(t, e);
    var s = (e.flags & 128) !== 0;
    if (!r && !s) return i && Wp(e, n, !1), Zr(t, e, o);
    r = e.stateNode, x8.current = e;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1, t !== null && s ? (e.child = es(e, t.child, null, o), e.child = es(e, null, a, o)) : pn(t, e, a, o), e.memoizedState = r.state, i && Wp(e, n, !0), e.child
}

function Gy(t) {
    var e = t.stateNode;
    e.pendingContext ? Fp(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Fp(t, e.context, !1), Ph(t, e.containerInfo)
}

function i1(t, e, n, r, i) {
    return Jo(), Bh(i), e.flags |= 256, pn(t, e, n, r), e.child
}
var _d = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function kd(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function Zy(t, e, n) {
    var r = e.pendingProps,
        i = st.current,
        o = !1,
        s = (e.flags & 128) !== 0,
        a;
    if ((a = s) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), $e(st, i & 1), t === null) return yd(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (s = r.children, t = r.fallback, o ? (r = e.mode, o = e.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Iu(s, r, 0, null), t = Ji(t, r, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = kd(n), e.memoizedState = _d, t) : $h(e, s));
    if (i = t.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return E8(t, e, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = e.mode, i = t.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = l, e.deletions = null) : (r = Ti(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Ti(a, o) : (o = Ji(o, s, n, null), o.flags |= 2), o.return = e, r.return = e, r.sibling = o, e.child = r, r = o, o = e.child, s = t.child.memoizedState, s = s === null ? kd(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = t.childLanes & ~n, e.memoizedState = _d, r
    }
    return o = t.child, t = o.sibling, r = Ti(o, {
        mode: "visible",
        children: r.children
    }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r
}

function $h(t, e) {
    return e = Iu({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function Ya(t, e, n, r) {
    return r !== null && Bh(r), es(e, t.child, null, n), t = $h(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function E8(t, e, n, r, i, o, s) {
    if (n) return e.flags & 256 ? (e.flags &= -257, r = Wc(Error(te(422))), Ya(t, e, s, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = r.fallback, i = e.mode, r = Iu({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Ji(o, i, s, null), o.flags |= 2, r.return = e, o.return = e, r.sibling = o, e.child = r, e.mode & 1 && es(e, t.child, null, s), e.child.memoizedState = kd(s), e.memoizedState = _d, o);
    if (!(e.mode & 1)) return Ya(t, e, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(te(419)), r = Wc(o, r, void 0), Ya(t, e, s, r)
    }
    if (a = (s & t.childLanes) !== 0, kn || a) {
        if (r = $t, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Gr(t, i), hr(r, t, i, -1))
        }
        return Yh(), r = Wc(Error(te(421))), Ya(t, e, s, r)
    }
    return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = N8.bind(null, t), i._reactRetry = e, null) : (t = o.treeContext, Un = ki(i.nextSibling), zn = e, rt = !0, cr = null, t !== null && (Yn[Qn++] = zr, Yn[Qn++] = Fr, Yn[Qn++] = io, zr = t.id, Fr = t.overflow, io = e), e = $h(e, r.children), e.flags |= 4096, e)
}

function o1(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), vd(t.return, e, n)
}

function Hc(t, e, n, r, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Yy(t, e, n) {
    var r = e.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (pn(t, e, r.children, n), r = st.current, r & 2) r = r & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && o1(t, n, e);
            else if (t.tag === 19) o1(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        r &= 1
    }
    if ($e(st, r), !(e.mode & 1)) e.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = e.child, i = null; n !== null;) t = n.alternate, t !== null && Gl(t) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Hc(e, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = e.child, e.child = null; i !== null;) {
                if (t = i.alternate, t !== null && Gl(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling, i.sibling = n, n = i, i = t
            }
            Hc(e, !0, n, null, o);
            break;
        case "together":
            Hc(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function Sl(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function Zr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), so |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(te(153));
    if (e.child !== null) {
        for (t = e.child, n = Ti(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = Ti(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function S8(t, e, n) {
    switch (e.tag) {
        case 3:
            Gy(e), Jo();
            break;
        case 5:
            by(e);
            break;
        case 1:
            In(e.type) && Wl(e);
            break;
        case 4:
            Ph(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context,
                i = e.memoizedProps.value;
            $e(Kl, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = e.memoizedState, r !== null) return r.dehydrated !== null ? ($e(st, st.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? Zy(t, e, n) : ($e(st, st.current & 1), t = Zr(t, e, n), t !== null ? t.sibling : null);
            $e(st, st.current & 1);
            break;
        case 19:
            if (r = (n & e.childLanes) !== 0, t.flags & 128) {
                if (r) return Yy(t, e, n);
                e.flags |= 128
            }
            if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $e(st, st.current), r) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, qy(t, e, n)
    }
    return Zr(t, e, n)
}
var Qy, Cd, Xy, Jy;
Qy = function(t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Cd = function() {};
Xy = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode, qi(Ar.current);
        var o = null;
        switch (n) {
            case "input":
                i = Gf(t, i), r = Gf(t, r), o = [];
                break;
            case "select":
                i = ct({}, i, {
                    value: void 0
                }), r = ct({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = Qf(t, i), r = Qf(t, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = zl)
        }
        Jf(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Zs.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Zs.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ge("scroll", t), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
};
Jy = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
};

function _s(t, e) {
    if (!rt) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
    }
}

function on(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0;
    if (e)
        for (var i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
    else
        for (i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= r, t.childLanes = n, e
}

function b8(t, e, n) {
    var r = e.pendingProps;
    switch (Th(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return on(e), null;
        case 1:
            return In(e.type) && Fl(), on(e), null;
        case 3:
            return r = e.stateNode, ts(), Qe(An), Qe(dn), Dh(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, cr !== null && (Nd(cr), cr = null))), Cd(t, e), on(e), null;
        case 5:
            jh(e);
            var i = qi(aa.current);
            if (n = e.type, t !== null && e.stateNode != null) Xy(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(te(166));
                    return on(e), null
                }
                if (t = qi(Ar.current), Ga(e)) {
                    r = e.stateNode, n = e.type;
                    var o = e.memoizedProps;
                    switch (r[Sr] = e, r[oa] = o, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            Ge("cancel", r), Ge("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ge("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Ls.length; i++) Ge(Ls[i], r);
                            break;
                        case "source":
                            Ge("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ge("error", r), Ge("load", r);
                            break;
                        case "details":
                            Ge("toggle", r);
                            break;
                        case "input":
                            pp(r, o), Ge("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, Ge("invalid", r);
                            break;
                        case "textarea":
                            gp(r, o), Ge("invalid", r)
                    }
                    Jf(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Va(r.textContent, a, t), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Va(r.textContent, a, t), i = ["children", "" + a]) : Zs.hasOwnProperty(s) && a != null && s === "onScroll" && Ge("scroll", r)
                        } switch (n) {
                        case "input":
                            Ua(r), mp(r, o, !0);
                            break;
                        case "textarea":
                            Ua(r), yp(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = zl)
                    }
                    r = i, e.updateQueue = r, r !== null && (e.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Cg(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = s.createElement(n, {
                        is: r.is
                    }) : (t = s.createElement(n), n === "select" && (s = t, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : t = s.createElementNS(t, n), t[Sr] = e, t[oa] = r, Qy(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (s = ed(n, r), n) {
                            case "dialog":
                                Ge("cancel", t), Ge("close", t), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ge("load", t), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Ls.length; i++) Ge(Ls[i], t);
                                i = r;
                                break;
                            case "source":
                                Ge("error", t), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ge("error", t), Ge("load", t), i = r;
                                break;
                            case "details":
                                Ge("toggle", t), i = r;
                                break;
                            case "input":
                                pp(t, r), i = Gf(t, r), Ge("invalid", t);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = ct({}, r, {
                                    value: void 0
                                }), Ge("invalid", t);
                                break;
                            case "textarea":
                                gp(t, r), i = Qf(t, r), Ge("invalid", t);
                                break;
                            default:
                                i = r
                        }
                        Jf(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? Tg(t, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ag(t, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ys(t, l) : typeof l == "number" && Ys(t, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Zs.hasOwnProperty(o) ? l != null && o === "onScroll" && Ge("scroll", t) : l != null && ph(t, o, l, s))
                            } switch (n) {
                            case "input":
                                Ua(t), mp(t, r, !1);
                                break;
                            case "textarea":
                                Ua(t), yp(t);
                                break;
                            case "option":
                                r.value != null && t.setAttribute("value", "" + Ri(r.value));
                                break;
                            case "select":
                                t.multiple = !!r.multiple, o = r.value, o != null ? Wo(t, !!r.multiple, o, !1) : r.defaultValue != null && Wo(t, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (t.onclick = zl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return on(e), null;
        case 6:
            if (t && e.stateNode != null) Jy(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null) throw Error(te(166));
                if (n = qi(aa.current), qi(Ar.current), Ga(e)) {
                    if (r = e.stateNode, n = e.memoizedProps, r[Sr] = e, (o = r.nodeValue !== n) && (t = zn, t !== null)) switch (t.tag) {
                        case 3:
                            Va(r.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && Va(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    o && (e.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Sr] = e, e.stateNode = r
            }
            return on(e), null;
        case 13:
            if (Qe(st), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (rt && Un !== null && e.mode & 1 && !(e.flags & 128)) gy(), Jo(), e.flags |= 98560, o = !1;
                else if (o = Ga(e), r !== null && r.dehydrated !== null) {
                    if (t === null) {
                        if (!o) throw Error(te(318));
                        if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(te(317));
                        o[Sr] = e
                    } else Jo(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    on(e), o = !1
                } else cr !== null && (Nd(cr), cr = null), o = !0;
                if (!o) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || st.current & 1 ? zt === 0 && (zt = 3) : Yh())), e.updateQueue !== null && (e.flags |= 4), on(e), null);
        case 4:
            return ts(), Cd(t, e), t === null && ra(e.stateNode.containerInfo), on(e), null;
        case 10:
            return Lh(e.type._context), on(e), null;
        case 17:
            return In(e.type) && Fl(), on(e), null;
        case 19:
            if (Qe(st), o = e.memoizedState, o === null) return on(e), null;
            if (r = (e.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) _s(o, !1);
                else {
                    if (zt !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (s = Gl(t), s !== null) {
                                for (e.flags |= 128, _s(o, !1), r = s.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null;) o = n, t = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, t = s.dependencies, o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return $e(st, st.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    o.tail !== null && gt() > rs && (e.flags |= 128, r = !0, _s(o, !1), e.lanes = 4194304)
                }
            else {
                if (!r)
                    if (t = Gl(s), t !== null) {
                        if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), _s(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !rt) return on(e), null
                    } else 2 * gt() - o.renderingStartTime > rs && n !== 1073741824 && (e.flags |= 128, r = !0, _s(o, !1), e.lanes = 4194304);
                o.isBackwards ? (s.sibling = e.child, e.child = s) : (n = o.last, n !== null ? n.sibling = s : e.child = s, o.last = s)
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = gt(), e.sibling = null, n = st.current, $e(st, r ? n & 1 | 2 : n & 1), e) : (on(e), null);
        case 22:
        case 23:
            return Zh(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? Ln & 1073741824 && (on(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : on(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(te(156, e.tag))
}

function _8(t, e) {
    switch (Th(e), e.tag) {
        case 1:
            return In(e.type) && Fl(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return ts(), Qe(An), Qe(dn), Dh(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return jh(e), null;
        case 13:
            if (Qe(st), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(te(340));
                Jo()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return Qe(st), null;
        case 4:
            return ts(), null;
        case 10:
            return Lh(e.type._context), null;
        case 22:
        case 23:
            return Zh(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Qa = !1,
    cn = !1,
    k8 = typeof WeakSet == "function" ? WeakSet : Set,
    ae = null;

function Po(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            mt(t, e, r)
        } else n.current = null
}

function Ad(t, e, n) {
    try {
        n()
    } catch (r) {
        mt(t, e, r)
    }
}
var s1 = !1;

function C8(t, e) {
    if (cd = jl, t = ry(), Ah(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    h = 0,
                    g = t,
                    w = null;
                t: for (;;) {
                    for (var C; g !== n || i !== 0 && g.nodeType !== 3 || (a = s + i), g !== o || r !== 0 && g.nodeType !== 3 || (l = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (C = g.firstChild) !== null;) w = g, g = C;
                    for (;;) {
                        if (g === t) break t;
                        if (w === n && ++u === i && (a = s), w === o && ++h === r && (l = s), (C = g.nextSibling) !== null) break;
                        g = w, w = g.parentNode
                    }
                    g = C
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (fd = {
            focusedElem: t,
            selectionRange: n
        }, jl = !1, ae = e; ae !== null;)
        if (e = ae, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ae = t;
        else
            for (; ae !== null;) {
                e = ae;
                try {
                    var B = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (B !== null) {
                                var I = B.memoizedProps,
                                    R = B.memoizedState,
                                    _ = e.stateNode,
                                    b = _.getSnapshotBeforeUpdate(e.elementType === e.type ? I : ar(e.type, I), R);
                                _.__reactInternalSnapshotBeforeUpdate = b
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(te(163))
                    }
                } catch (O) {
                    mt(e, e.return, O)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, ae = t;
                    break
                }
                ae = e.return
            }
    return B = s1, s1 = !1, B
}

function Ks(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Ad(e, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Cu(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}

function Id(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function ev(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ev(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Sr], delete e[oa], delete e[pd], delete e[l8], delete e[u8])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function tv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function a1(t) {
    e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || tv(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function Td(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = zl));
    else if (r !== 4 && (t = t.child, t !== null))
        for (Td(t, e, n), t = t.sibling; t !== null;) Td(t, e, n), t = t.sibling
}

function Bd(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child, t !== null))
        for (Bd(t, e, n), t = t.sibling; t !== null;) Bd(t, e, n), t = t.sibling
}
var Vt = null,
    ur = !1;

function ti(t, e, n) {
    for (n = n.child; n !== null;) nv(t, e, n), n = n.sibling
}

function nv(t, e, n) {
    if (Cr && typeof Cr.onCommitFiberUnmount == "function") try {
        Cr.onCommitFiberUnmount(vu, n)
    } catch {}
    switch (n.tag) {
        case 5:
            cn || Po(n, e);
        case 6:
            var r = Vt,
                i = ur;
            Vt = null, ti(t, e, n), Vt = r, ur = i, Vt !== null && (ur ? (t = Vt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Vt.removeChild(n.stateNode));
            break;
        case 18:
            Vt !== null && (ur ? (t = Vt, n = n.stateNode, t.nodeType === 8 ? Pc(t.parentNode, n) : t.nodeType === 1 && Pc(t, n), ea(t)) : Pc(Vt, n.stateNode));
            break;
        case 4:
            r = Vt, i = ur, Vt = n.stateNode.containerInfo, ur = !0, ti(t, e, n), Vt = r, ur = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!cn && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ad(n, e, s), i = i.next
                } while (i !== r)
            }
            ti(t, e, n);
            break;
        case 1:
            if (!cn && (Po(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                mt(n, e, a)
            }
            ti(t, e, n);
            break;
        case 21:
            ti(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (cn = (r = cn) || n.memoizedState !== null, ti(t, e, n), cn = r) : ti(t, e, n);
            break;
        default:
            ti(t, e, n)
    }
}

function l1(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new k8), e.forEach(function(r) {
            var i = O8.bind(null, t, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function ir(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = t,
                    s = e,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Vt = a.stateNode, ur = !1;
                            break e;
                        case 3:
                            Vt = a.stateNode.containerInfo, ur = !0;
                            break e;
                        case 4:
                            Vt = a.stateNode.containerInfo, ur = !0;
                            break e
                    }
                    a = a.return
                }
                if (Vt === null) throw Error(te(160));
                nv(o, s, i), Vt = null, ur = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                mt(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) rv(e, t), e = e.sibling
}

function rv(t, e) {
    var n = t.alternate,
        r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ir(e, t), vr(t), r & 4) {
                try {
                    Ks(3, t, t.return), Cu(3, t)
                } catch (I) {
                    mt(t, t.return, I)
                }
                try {
                    Ks(5, t, t.return)
                } catch (I) {
                    mt(t, t.return, I)
                }
            }
            break;
        case 1:
            ir(e, t), vr(t), r & 512 && n !== null && Po(n, n.return);
            break;
        case 5:
            if (ir(e, t), vr(t), r & 512 && n !== null && Po(n, n.return), t.flags & 32) {
                var i = t.stateNode;
                try {
                    Ys(i, "")
                } catch (I) {
                    mt(t, t.return, I)
                }
            }
            if (r & 4 && (i = t.stateNode, i != null)) {
                var o = t.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = t.type,
                    l = t.updateQueue;
                if (t.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && _g(i, o), ed(a, s);
                    var u = ed(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var h = l[s],
                            g = l[s + 1];
                        h === "style" ? Tg(i, g) : h === "dangerouslySetInnerHTML" ? Ag(i, g) : h === "children" ? Ys(i, g) : ph(i, h, g, u)
                    }
                    switch (a) {
                        case "input":
                            Zf(i, o);
                            break;
                        case "textarea":
                            kg(i, o);
                            break;
                        case "select":
                            var w = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var C = o.value;
                            C != null ? Wo(i, !!o.multiple, C, !1) : w !== !!o.multiple && (o.defaultValue != null ? Wo(i, !!o.multiple, o.defaultValue, !0) : Wo(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[oa] = o
                } catch (I) {
                    mt(t, t.return, I)
                }
            }
            break;
        case 6:
            if (ir(e, t), vr(t), r & 4) {
                if (t.stateNode === null) throw Error(te(162));
                i = t.stateNode, o = t.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (I) {
                    mt(t, t.return, I)
                }
            }
            break;
        case 3:
            if (ir(e, t), vr(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ea(e.containerInfo)
            } catch (I) {
                mt(t, t.return, I)
            }
            break;
        case 4:
            ir(e, t), vr(t);
            break;
        case 13:
            ir(e, t), vr(t), i = t.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Vh = gt())), r & 4 && l1(t);
            break;
        case 22:
            if (h = n !== null && n.memoizedState !== null, t.mode & 1 ? (cn = (u = cn) || h, ir(e, t), cn = u) : ir(e, t), vr(t), r & 8192) {
                if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !h && t.mode & 1)
                    for (ae = t, h = t.child; h !== null;) {
                        for (g = ae = h; ae !== null;) {
                            switch (w = ae, C = w.child, w.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ks(4, w, w.return);
                                    break;
                                case 1:
                                    Po(w, w.return);
                                    var B = w.stateNode;
                                    if (typeof B.componentWillUnmount == "function") {
                                        r = w, n = w.return;
                                        try {
                                            e = r, B.props = e.memoizedProps, B.state = e.memoizedState, B.componentWillUnmount()
                                        } catch (I) {
                                            mt(r, n, I)
                                        }
                                    }
                                    break;
                                case 5:
                                    Po(w, w.return);
                                    break;
                                case 22:
                                    if (w.memoizedState !== null) {
                                        c1(g);
                                        continue
                                    }
                            }
                            C !== null ? (C.return = w, ae = C) : c1(g)
                        }
                        h = h.sibling
                    }
                e: for (h = null, g = t;;) {
                    if (g.tag === 5) {
                        if (h === null) {
                            h = g;
                            try {
                                i = g.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = g.stateNode, l = g.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ig("display", s))
                            } catch (I) {
                                mt(t, t.return, I)
                            }
                        }
                    } else if (g.tag === 6) {
                        if (h === null) try {
                            g.stateNode.nodeValue = u ? "" : g.memoizedProps
                        } catch (I) {
                            mt(t, t.return, I)
                        }
                    } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === t) && g.child !== null) {
                        g.child.return = g, g = g.child;
                        continue
                    }
                    if (g === t) break e;
                    for (; g.sibling === null;) {
                        if (g.return === null || g.return === t) break e;
                        h === g && (h = null), g = g.return
                    }
                    h === g && (h = null), g.sibling.return = g.return, g = g.sibling
                }
            }
            break;
        case 19:
            ir(e, t), vr(t), r & 4 && l1(t);
            break;
        case 21:
            break;
        default:
            ir(e, t), vr(t)
    }
}

function vr(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (tv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(te(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Ys(i, ""), r.flags &= -33);
                    var o = a1(t);
                    Bd(t, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = a1(t);
                    Td(t, a, s);
                    break;
                default:
                    throw Error(te(161))
            }
        }
        catch (l) {
            mt(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function A8(t, e, n) {
    ae = t, iv(t)
}

function iv(t, e, n) {
    for (var r = (t.mode & 1) !== 0; ae !== null;) {
        var i = ae,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Qa;
            if (!s) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || cn;
                a = Qa;
                var u = cn;
                if (Qa = s, (cn = l) && !u)
                    for (ae = i; ae !== null;) s = ae, l = s.child, s.tag === 22 && s.memoizedState !== null ? f1(i) : l !== null ? (l.return = s, ae = l) : f1(i);
                for (; o !== null;) ae = o, iv(o), o = o.sibling;
                ae = i, Qa = a, cn = u
            }
            u1(t)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, ae = o) : u1(t)
    }
}

function u1(t) {
    for (; ae !== null;) {
        var e = ae;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        cn || Cu(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !cn)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : ar(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = e.updateQueue;
                        o !== null && qp(e, o, r);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            qp(e, s, n)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var h = u.memoizedState;
                                if (h !== null) {
                                    var g = h.dehydrated;
                                    g !== null && ea(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(te(163))
                }
                cn || e.flags & 512 && Id(e)
            } catch (w) {
                mt(e, e.return, w)
            }
        }
        if (e === t) {
            ae = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, ae = n;
            break
        }
        ae = e.return
    }
}

function c1(t) {
    for (; ae !== null;) {
        var e = ae;
        if (e === t) {
            ae = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, ae = n;
            break
        }
        ae = e.return
    }
}

function f1(t) {
    for (; ae !== null;) {
        var e = ae;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        Cu(4, e)
                    } catch (l) {
                        mt(e, n, l)
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = e.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            mt(e, i, l)
                        }
                    }
                    var o = e.return;
                    try {
                        Id(e)
                    } catch (l) {
                        mt(e, o, l)
                    }
                    break;
                case 5:
                    var s = e.return;
                    try {
                        Id(e)
                    } catch (l) {
                        mt(e, s, l)
                    }
            }
        } catch (l) {
            mt(e, e.return, l)
        }
        if (e === t) {
            ae = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return, ae = a;
            break
        }
        ae = e.return
    }
}
var I8 = Math.ceil,
    Ql = Jr.ReactCurrentDispatcher,
    Kh = Jr.ReactCurrentOwner,
    er = Jr.ReactCurrentBatchConfig,
    Le = 0,
    $t = null,
    Ot = null,
    Xt = 0,
    Ln = 0,
    jo = Ni(0),
    zt = 0,
    fa = null,
    so = 0,
    Au = 0,
    qh = 0,
    qs = null,
    bn = null,
    Vh = 0,
    rs = 1 / 0,
    Or = null,
    Xl = !1,
    Rd = null,
    Ai = null,
    Xa = !1,
    yi = null,
    Jl = 0,
    Vs = 0,
    Md = null,
    bl = -1,
    _l = 0;

function yn() {
    return Le & 6 ? gt() : bl !== -1 ? bl : bl = gt()
}

function Ii(t) {
    return t.mode & 1 ? Le & 2 && Xt !== 0 ? Xt & -Xt : f8.transition !== null ? (_l === 0 && (_l = Fg()), _l) : (t = Ue, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Gg(t.type)), t) : 1
}

function hr(t, e, n, r) {
    if (50 < Vs) throw Vs = 0, Md = null, Error(te(185));
    xa(t, n, r), (!(Le & 2) || t !== $t) && (t === $t && (!(Le & 2) && (Au |= n), zt === 4 && pi(t, Xt)), Tn(t, r), n === 1 && Le === 0 && !(e.mode & 1) && (rs = gt() + 500, bu && Oi()))
}

function Tn(t, e) {
    var n = t.callbackNode;
    f4(t, e);
    var r = Pl(t, t === $t ? Xt : 0);
    if (r === 0) n !== null && xp(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = r & -r, t.callbackPriority !== e) {
        if (n != null && xp(n), e === 1) t.tag === 0 ? c8(d1.bind(null, t)) : hy(d1.bind(null, t)), s8(function() {
            !(Le & 6) && Oi()
        }), n = null;
        else {
            switch (Wg(r)) {
                case 1:
                    n = wh;
                    break;
                case 4:
                    n = Ug;
                    break;
                case 16:
                    n = Ol;
                    break;
                case 536870912:
                    n = zg;
                    break;
                default:
                    n = Ol
            }
            n = dv(n, ov.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function ov(t, e) {
    if (bl = -1, _l = 0, Le & 6) throw Error(te(327));
    var n = t.callbackNode;
    if (Vo() && t.callbackNode !== n) return null;
    var r = Pl(t, t === $t ? Xt : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = eu(t, r);
    else {
        e = r;
        var i = Le;
        Le |= 2;
        var o = av();
        ($t !== t || Xt !== e) && (Or = null, rs = gt() + 500, Xi(t, e));
        do try {
            R8();
            break
        } catch (a) {
            sv(t, a)
        }
        while (!0);
        Mh(), Ql.current = o, Le = i, Ot !== null ? e = 0 : ($t = null, Xt = 0, e = zt)
    }
    if (e !== 0) {
        if (e === 2 && (i = od(t), i !== 0 && (r = i, e = Ld(t, i))), e === 1) throw n = fa, Xi(t, 0), pi(t, r), Tn(t, gt()), n;
        if (e === 6) pi(t, r);
        else {
            if (i = t.current.alternate, !(r & 30) && !T8(i) && (e = eu(t, r), e === 2 && (o = od(t), o !== 0 && (r = o, e = Ld(t, o))), e === 1)) throw n = fa, Xi(t, 0), pi(t, r), Tn(t, gt()), n;
            switch (t.finishedWork = i, t.finishedLanes = r, e) {
                case 0:
                case 1:
                    throw Error(te(345));
                case 2:
                    Di(t, bn, Or);
                    break;
                case 3:
                    if (pi(t, r), (r & 130023424) === r && (e = Vh + 500 - gt(), 10 < e)) {
                        if (Pl(t, 0) !== 0) break;
                        if (i = t.suspendedLanes, (i & r) !== r) {
                            yn(), t.pingedLanes |= t.suspendedLanes & i;
                            break
                        }
                        t.timeoutHandle = hd(Di.bind(null, t, bn, Or), e);
                        break
                    }
                    Di(t, bn, Or);
                    break;
                case 4:
                    if (pi(t, r), (r & 4194240) === r) break;
                    for (e = t.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - dr(r);
                        o = 1 << s, s = e[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = gt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * I8(r / 1960)) - r, 10 < r) {
                        t.timeoutHandle = hd(Di.bind(null, t, bn, Or), r);
                        break
                    }
                    Di(t, bn, Or);
                    break;
                case 5:
                    Di(t, bn, Or);
                    break;
                default:
                    throw Error(te(329))
            }
        }
    }
    return Tn(t, gt()), t.callbackNode === n ? ov.bind(null, t) : null
}

function Ld(t, e) {
    var n = qs;
    return t.current.memoizedState.isDehydrated && (Xi(t, e).flags |= 256), t = eu(t, e), t !== 2 && (e = bn, bn = n, e !== null && Nd(e)), t
}

function Nd(t) {
    bn === null ? bn = t : bn.push.apply(bn, t)
}

function T8(t) {
    for (var e = t;;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!mr(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function pi(t, e) {
    for (e &= ~qh, e &= ~Au, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - dr(e),
            r = 1 << n;
        t[n] = -1, e &= ~r
    }
}

function d1(t) {
    if (Le & 6) throw Error(te(327));
    Vo();
    var e = Pl(t, 0);
    if (!(e & 1)) return Tn(t, gt()), null;
    var n = eu(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = od(t);
        r !== 0 && (e = r, n = Ld(t, r))
    }
    if (n === 1) throw n = fa, Xi(t, 0), pi(t, e), Tn(t, gt()), n;
    if (n === 6) throw Error(te(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, Di(t, bn, Or), Tn(t, gt()), null
}

function Gh(t, e) {
    var n = Le;
    Le |= 1;
    try {
        return t(e)
    } finally {
        Le = n, Le === 0 && (rs = gt() + 500, bu && Oi())
    }
}

function ao(t) {
    yi !== null && yi.tag === 0 && !(Le & 6) && Vo();
    var e = Le;
    Le |= 1;
    var n = er.transition,
        r = Ue;
    try {
        if (er.transition = null, Ue = 1, t) return t()
    } finally {
        Ue = r, er.transition = n, Le = e, !(Le & 6) && Oi()
    }
}

function Zh() {
    Ln = jo.current, Qe(jo)
}

function Xi(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, o8(n)), Ot !== null)
        for (n = Ot.return; n !== null;) {
            var r = n;
            switch (Th(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Fl();
                    break;
                case 3:
                    ts(), Qe(An), Qe(dn), Dh();
                    break;
                case 5:
                    jh(r);
                    break;
                case 4:
                    ts();
                    break;
                case 13:
                    Qe(st);
                    break;
                case 19:
                    Qe(st);
                    break;
                case 10:
                    Lh(r.type._context);
                    break;
                case 22:
                case 23:
                    Zh()
            }
            n = n.return
        }
    if ($t = t, Ot = t = Ti(t.current, null), Xt = Ln = e, zt = 0, fa = null, qh = Au = so = 0, bn = qs = null, Ki !== null) {
        for (e = 0; e < Ki.length; e++)
            if (n = Ki[e], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            } Ki = null
    }
    return t
}

function sv(t, e) {
    do {
        var n = Ot;
        try {
            if (Mh(), xl.current = Yl, Zl) {
                for (var r = ut.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Zl = !1
            }
            if (oo = 0, Ft = jt = ut = null, $s = !1, la = 0, Kh.current = null, n === null || n.return === null) {
                zt = 1, fa = e, Ot = null;
                break
            }
            e: {
                var o = t,
                    s = n.return,
                    a = n,
                    l = e;
                if (e = Xt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        h = a,
                        g = h.tag;
                    if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var w = h.alternate;
                        w ? (h.updateQueue = w.updateQueue, h.memoizedState = w.memoizedState, h.lanes = w.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var C = Jp(s);
                    if (C !== null) {
                        C.flags &= -257, e1(C, s, a, o, e), C.mode & 1 && Xp(o, u, e), e = C, l = u;
                        var B = e.updateQueue;
                        if (B === null) {
                            var I = new Set;
                            I.add(l), e.updateQueue = I
                        } else B.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            Xp(o, u, e), Yh();
                            break e
                        }
                        l = Error(te(426))
                    }
                } else if (rt && a.mode & 1) {
                    var R = Jp(s);
                    if (R !== null) {
                        !(R.flags & 65536) && (R.flags |= 256), e1(R, s, a, o, e), Bh(ns(l, a));
                        break e
                    }
                }
                o = l = ns(l, a),
                zt !== 4 && (zt = 2),
                qs === null ? qs = [o] : qs.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, e &= -e, o.lanes |= e;
                            var _ = Hy(o, l, e);
                            Kp(o, _);
                            break e;
                        case 1:
                            a = l;
                            var b = o.type,
                                v = o.stateNode;
                            if (!(o.flags & 128) && (typeof b.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Ai === null || !Ai.has(v)))) {
                                o.flags |= 65536, e &= -e, o.lanes |= e;
                                var O = $y(o, a, e);
                                Kp(o, O);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            uv(n)
        } catch (D) {
            e = D, Ot === n && n !== null && (Ot = n = n.return);
            continue
        }
        break
    } while (!0)
}

function av() {
    var t = Ql.current;
    return Ql.current = Yl, t === null ? Yl : t
}

function Yh() {
    (zt === 0 || zt === 3 || zt === 2) && (zt = 4), $t === null || !(so & 268435455) && !(Au & 268435455) || pi($t, Xt)
}

function eu(t, e) {
    var n = Le;
    Le |= 2;
    var r = av();
    ($t !== t || Xt !== e) && (Or = null, Xi(t, e));
    do try {
        B8();
        break
    } catch (i) {
        sv(t, i)
    }
    while (!0);
    if (Mh(), Le = n, Ql.current = r, Ot !== null) throw Error(te(261));
    return $t = null, Xt = 0, zt
}

function B8() {
    for (; Ot !== null;) lv(Ot)
}

function R8() {
    for (; Ot !== null && !n4();) lv(Ot)
}

function lv(t) {
    var e = fv(t.alternate, t, Ln);
    t.memoizedProps = t.pendingProps, e === null ? uv(t) : Ot = e, Kh.current = null
}

function uv(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = _8(n, e), n !== null) {
                n.flags &= 32767, Ot = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                zt = 6, Ot = null;
                return
            }
        } else if (n = b8(n, e, Ln), n !== null) {
            Ot = n;
            return
        }
        if (e = e.sibling, e !== null) {
            Ot = e;
            return
        }
        Ot = e = t
    } while (e !== null);
    zt === 0 && (zt = 5)
}

function Di(t, e, n) {
    var r = Ue,
        i = er.transition;
    try {
        er.transition = null, Ue = 1, M8(t, e, n, r)
    } finally {
        er.transition = i, Ue = r
    }
    return null
}

function M8(t, e, n, r) {
    do Vo(); while (yi !== null);
    if (Le & 6) throw Error(te(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(te(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (d4(t, o), t === $t && (Ot = $t = null, Xt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xa || (Xa = !0, dv(Ol, function() {
            return Vo(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = er.transition, er.transition = null;
        var s = Ue;
        Ue = 1;
        var a = Le;
        Le |= 4, Kh.current = null, C8(t, n), rv(n, t), X4(fd), jl = !!cd, fd = cd = null, t.current = n, A8(n), r4(), Le = a, Ue = s, er.transition = o
    } else t.current = n;
    if (Xa && (Xa = !1, yi = t, Jl = i), o = t.pendingLanes, o === 0 && (Ai = null), s4(n.stateNode), Tn(t, gt()), e !== null)
        for (r = t.onRecoverableError, n = 0; n < e.length; n++) i = e[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Xl) throw Xl = !1, t = Rd, Rd = null, t;
    return Jl & 1 && t.tag !== 0 && Vo(), o = t.pendingLanes, o & 1 ? t === Md ? Vs++ : (Vs = 0, Md = t) : Vs = 0, Oi(), null
}

function Vo() {
    if (yi !== null) {
        var t = Wg(Jl),
            e = er.transition,
            n = Ue;
        try {
            if (er.transition = null, Ue = 16 > t ? 16 : t, yi === null) var r = !1;
            else {
                if (t = yi, yi = null, Jl = 0, Le & 6) throw Error(te(331));
                var i = Le;
                for (Le |= 4, ae = t.current; ae !== null;) {
                    var o = ae,
                        s = o.child;
                    if (ae.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (ae = u; ae !== null;) {
                                    var h = ae;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ks(8, h, o)
                                    }
                                    var g = h.child;
                                    if (g !== null) g.return = h, ae = g;
                                    else
                                        for (; ae !== null;) {
                                            h = ae;
                                            var w = h.sibling,
                                                C = h.return;
                                            if (ev(h), h === u) {
                                                ae = null;
                                                break
                                            }
                                            if (w !== null) {
                                                w.return = C, ae = w;
                                                break
                                            }
                                            ae = C
                                        }
                                }
                            }
                            var B = o.alternate;
                            if (B !== null) {
                                var I = B.child;
                                if (I !== null) {
                                    B.child = null;
                                    do {
                                        var R = I.sibling;
                                        I.sibling = null, I = R
                                    } while (I !== null)
                                }
                            }
                            ae = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, ae = s;
                    else e: for (; ae !== null;) {
                        if (o = ae, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ks(9, o, o.return)
                        }
                        var _ = o.sibling;
                        if (_ !== null) {
                            _.return = o.return, ae = _;
                            break e
                        }
                        ae = o.return
                    }
                }
                var b = t.current;
                for (ae = b; ae !== null;) {
                    s = ae;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null) v.return = s, ae = v;
                    else e: for (s = b; ae !== null;) {
                        if (a = ae, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cu(9, a)
                            }
                        } catch (D) {
                            mt(a, a.return, D)
                        }
                        if (a === s) {
                            ae = null;
                            break e
                        }
                        var O = a.sibling;
                        if (O !== null) {
                            O.return = a.return, ae = O;
                            break e
                        }
                        ae = a.return
                    }
                }
                if (Le = i, Oi(), Cr && typeof Cr.onPostCommitFiberRoot == "function") try {
                    Cr.onPostCommitFiberRoot(vu, t)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Ue = n, er.transition = e
        }
    }
    return !1
}

function h1(t, e, n) {
    e = ns(n, e), e = Hy(t, e, 1), t = Ci(t, e, 1), e = yn(), t !== null && (xa(t, 1, e), Tn(t, e))
}

function mt(t, e, n) {
    if (t.tag === 3) h1(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                h1(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ai === null || !Ai.has(r))) {
                    t = ns(n, t), t = $y(e, t, 1), e = Ci(e, t, 1), t = yn(), e !== null && (xa(e, 1, t), Tn(e, t));
                    break
                }
            }
            e = e.return
        }
}

function L8(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e), e = yn(), t.pingedLanes |= t.suspendedLanes & n, $t === t && (Xt & n) === n && (zt === 4 || zt === 3 && (Xt & 130023424) === Xt && 500 > gt() - Vh ? Xi(t, 0) : qh |= n), Tn(t, e)
}

function cv(t, e) {
    e === 0 && (t.mode & 1 ? (e = Wa, Wa <<= 1, !(Wa & 130023424) && (Wa = 4194304)) : e = 1);
    var n = yn();
    t = Gr(t, e), t !== null && (xa(t, e, n), Tn(t, n))
}

function N8(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), cv(t, n)
}

function O8(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                i = t.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(te(314))
    }
    r !== null && r.delete(e), cv(t, n)
}
var fv;
fv = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || An.current) kn = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return kn = !1, S8(t, e, n);
            kn = !!(t.flags & 131072)
        }
    else kn = !1, rt && e.flags & 1048576 && py(e, $l, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var r = e.type;
            Sl(t, e), t = e.pendingProps;
            var i = Xo(e, dn.current);
            qo(e, n), i = zh(null, e, r, t, i, n);
            var o = Fh();
            return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, In(r) ? (o = !0, Wl(e)) : o = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Oh(e), i.updater = _u, e.stateNode = i, i._reactInternals = e, xd(e, r, t, n), e = bd(null, e, r, !0, o, n)) : (e.tag = 0, rt && o && Ih(e), pn(null, e, i, n), e = e.child), e;
        case 16:
            r = e.elementType;
            e: {
                switch (Sl(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = j8(r), t = ar(r, t), i) {
                    case 0:
                        e = Sd(null, e, r, t, n);
                        break e;
                    case 1:
                        e = r1(null, e, r, t, n);
                        break e;
                    case 11:
                        e = t1(null, e, r, t, n);
                        break e;
                    case 14:
                        e = n1(null, e, r, ar(r.type, t), n);
                        break e
                }
                throw Error(te(306, r, ""))
            }
            return e;
        case 0:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : ar(r, i), Sd(t, e, r, i, n);
        case 1:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : ar(r, i), r1(t, e, r, i, n);
        case 3:
            e: {
                if (Gy(e), t === null) throw Error(te(387));r = e.pendingProps,
                o = e.memoizedState,
                i = o.element,
                vy(t, e),
                Vl(e, r, null, n);
                var s = e.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
                        i = ns(Error(te(423)), e), e = i1(t, e, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = ns(Error(te(424)), e), e = i1(t, e, r, n, i);
                    break e
                } else
                    for (Un = ki(e.stateNode.containerInfo.firstChild), zn = e, rt = !0, cr = null, n = Sy(e, null, r, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Jo(), r === i) {
                        e = Zr(t, e, n);
                        break e
                    }
                    pn(t, e, r, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return by(e), t === null && yd(e), r = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, s = i.children, dd(r, i) ? s = null : o !== null && dd(r, o) && (e.flags |= 32), Vy(t, e), pn(t, e, s, n), e.child;
        case 6:
            return t === null && yd(e), null;
        case 13:
            return Zy(t, e, n);
        case 4:
            return Ph(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = es(e, null, r, n) : pn(t, e, r, n), e.child;
        case 11:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : ar(r, i), t1(t, e, r, i, n);
        case 7:
            return pn(t, e, e.pendingProps, n), e.child;
        case 8:
            return pn(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return pn(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (r = e.type._context, i = e.pendingProps, o = e.memoizedProps, s = i.value, $e(Kl, r._currentValue), r._currentValue = s, o !== null)
                    if (mr(o.value, s)) {
                        if (o.children === i.children && !An.current) {
                            e = Zr(t, e, n);
                            break e
                        }
                    } else
                        for (o = e.child, o !== null && (o.return = e); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = Hr(-1, n & -n), l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var h = u.pending;
                                                h === null ? l.next = l : (l.next = h.next, h.next = l), u.pending = l
                                            }
                                        }
                                        o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), vd(o.return, n, e), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(te(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), vd(s, n, e), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === e) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                pn(t, e, i.children, n),
                e = e.child
            }
            return e;
        case 9:
            return i = e.type, r = e.pendingProps.children, qo(e, n), i = nr(i), r = r(i), e.flags |= 1, pn(t, e, r, n), e.child;
        case 14:
            return r = e.type, i = ar(r, e.pendingProps), i = ar(r.type, i), n1(t, e, r, i, n);
        case 15:
            return Ky(t, e, e.type, e.pendingProps, n);
        case 17:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : ar(r, i), Sl(t, e), e.tag = 1, In(r) ? (t = !0, Wl(e)) : t = !1, qo(e, n), xy(e, r, i), xd(e, r, i, n), bd(null, e, r, !0, t, n);
        case 19:
            return Yy(t, e, n);
        case 22:
            return qy(t, e, n)
    }
    throw Error(te(156, e.tag))
};

function dv(t, e) {
    return Dg(t, e)
}

function P8(t, e, n, r) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Jn(t, e, n, r) {
    return new P8(t, e, n, r)
}

function Qh(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function j8(t) {
    if (typeof t == "function") return Qh(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === gh) return 11;
        if (t === yh) return 14
    }
    return 2
}

function Ti(t, e) {
    var n = t.alternate;
    return n === null ? (n = Jn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function kl(t, e, n, r, i, o) {
    var s = 2;
    if (r = t, typeof t == "function") Qh(t) && (s = 1);
    else if (typeof t == "string") s = 5;
    else e: switch (t) {
        case Ao:
            return Ji(n.children, i, o, e);
        case mh:
            s = 8, i |= 8;
            break;
        case $f:
            return t = Jn(12, n, e, i | 2), t.elementType = $f, t.lanes = o, t;
        case Kf:
            return t = Jn(13, n, e, i), t.elementType = Kf, t.lanes = o, t;
        case qf:
            return t = Jn(19, n, e, i), t.elementType = qf, t.lanes = o, t;
        case Eg:
            return Iu(n, i, o, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case wg:
                    s = 10;
                    break e;
                case xg:
                    s = 9;
                    break e;
                case gh:
                    s = 11;
                    break e;
                case yh:
                    s = 14;
                    break e;
                case ui:
                    s = 16, r = null;
                    break e
            }
            throw Error(te(130, t == null ? t : typeof t, ""))
    }
    return e = Jn(s, n, e, i), e.elementType = t, e.type = r, e.lanes = o, e
}

function Ji(t, e, n, r) {
    return t = Jn(7, t, r, e), t.lanes = n, t
}

function Iu(t, e, n, r) {
    return t = Jn(22, t, r, e), t.elementType = Eg, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function $c(t, e, n) {
    return t = Jn(6, t, null, e), t.lanes = n, t
}

function Kc(t, e, n) {
    return e = Jn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function D8(t, e, n, r, i) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kc(0), this.expirationTimes = kc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kc(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Xh(t, e, n, r, i, o, s, a, l) {
    return t = new D8(t, e, n, a, l), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = Jn(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Oh(o), t
}

function U8(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Co,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function hv(t) {
    if (!t) return Mi;
    t = t._reactInternals;
    e: {
        if (fo(t) !== t || t.tag !== 1) throw Error(te(170));
        var e = t;do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (In(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(te(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (In(n)) return dy(t, n, e)
    }
    return e
}

function pv(t, e, n, r, i, o, s, a, l) {
    return t = Xh(n, r, !0, t, i, o, s, a, l), t.context = hv(null), n = t.current, r = yn(), i = Ii(n), o = Hr(r, i), o.callback = e ?? null, Ci(n, o, i), t.current.lanes = i, xa(t, i, r), Tn(t, r), t
}

function Tu(t, e, n, r) {
    var i = e.current,
        o = yn(),
        s = Ii(i);
    return n = hv(n), e.context === null ? e.context = n : e.pendingContext = n, e = Hr(o, s), e.payload = {
        element: t
    }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = Ci(i, e, s), t !== null && (hr(t, i, s, o), wl(t, i, s)), s
}

function tu(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function p1(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function Jh(t, e) {
    p1(t, e), (t = t.alternate) && p1(t, e)
}

function z8() {
    return null
}
var mv = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
};

function e0(t) {
    this._internalRoot = t
}
Bu.prototype.render = e0.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(te(409));
    Tu(t, e, null, null)
};
Bu.prototype.unmount = e0.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        ao(function() {
            Tu(null, t, null, null)
        }), e[Vr] = null
    }
};

function Bu(t) {
    this._internalRoot = t
}
Bu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Kg();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < hi.length && e !== 0 && e < hi[n].priority; n++);
        hi.splice(n, 0, t), n === 0 && Vg(t)
    }
};

function t0(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Ru(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function m1() {}

function F8(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = tu(s);
                o.call(u)
            }
        }
        var s = pv(e, r, t, 0, null, !1, !1, "", m1);
        return t._reactRootContainer = s, t[Vr] = s.current, ra(t.nodeType === 8 ? t.parentNode : t), ao(), s
    }
    for (; i = t.lastChild;) t.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = tu(l);
            a.call(u)
        }
    }
    var l = Xh(t, 0, !1, null, null, !1, !1, "", m1);
    return t._reactRootContainer = l, t[Vr] = l.current, ra(t.nodeType === 8 ? t.parentNode : t), ao(function() {
        Tu(e, l, n, r)
    }), l
}

function Mu(t, e, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = tu(s);
                a.call(l)
            }
        }
        Tu(e, s, t, i)
    } else s = F8(n, e, t, i, r);
    return tu(s)
}
Hg = function(t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = Ms(e.pendingLanes);
                n !== 0 && (xh(e, n | 1), Tn(e, gt()), !(Le & 6) && (rs = gt() + 500, Oi()))
            }
            break;
        case 13:
            ao(function() {
                var r = Gr(t, 1);
                if (r !== null) {
                    var i = yn();
                    hr(r, t, 1, i)
                }
            }), Jh(t, 1)
    }
};
Eh = function(t) {
    if (t.tag === 13) {
        var e = Gr(t, 134217728);
        if (e !== null) {
            var n = yn();
            hr(e, t, 134217728, n)
        }
        Jh(t, 134217728)
    }
};
$g = function(t) {
    if (t.tag === 13) {
        var e = Ii(t),
            n = Gr(t, e);
        if (n !== null) {
            var r = yn();
            hr(n, t, e, r)
        }
        Jh(t, e)
    }
};
Kg = function() {
    return Ue
};
qg = function(t, e) {
    var n = Ue;
    try {
        return Ue = t, e()
    } finally {
        Ue = n
    }
};
nd = function(t, e, n) {
    switch (e) {
        case "input":
            if (Zf(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var i = Su(r);
                        if (!i) throw Error(te(90));
                        bg(r), Zf(r, i)
                    }
                }
            }
            break;
        case "textarea":
            kg(t, n);
            break;
        case "select":
            e = n.value, e != null && Wo(t, !!n.multiple, e, !1)
    }
};
Mg = Gh;
Lg = ao;
var W8 = {
        usingClientEntryPoint: !1,
        Events: [Sa, Ro, Su, Bg, Rg, Gh]
    },
    ks = {
        findFiberByHostInstance: $i,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    H8 = {
        bundleType: ks.bundleType,
        version: ks.version,
        rendererPackageName: ks.rendererPackageName,
        rendererConfig: ks.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Jr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = Pg(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: ks.findFiberByHostInstance || z8,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ja = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ja.isDisabled && Ja.supportsFiber) try {
        vu = Ja.inject(H8), Cr = Ja
    } catch {}
}
Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W8;
Wn.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t0(e)) throw Error(te(200));
    return U8(t, e, null, n)
};
Wn.createRoot = function(t, e) {
    if (!t0(t)) throw Error(te(299));
    var n = !1,
        r = "",
        i = mv;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Xh(t, 1, !1, null, null, n, !1, r, i), t[Vr] = e.current, ra(t.nodeType === 8 ? t.parentNode : t), new e0(e)
};
Wn.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(te(188)) : (t = Object.keys(t).join(","), Error(te(268, t)));
    return t = Pg(e), t = t === null ? null : t.stateNode, t
};
Wn.flushSync = function(t) {
    return ao(t)
};
Wn.hydrate = function(t, e, n) {
    if (!Ru(e)) throw Error(te(200));
    return Mu(null, t, e, !0, n)
};
Wn.hydrateRoot = function(t, e, n) {
    if (!t0(t)) throw Error(te(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = mv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), e = pv(e, null, t, 1, n ?? null, i, !1, o, s), t[Vr] = e.current, ra(t), r)
        for (t = 0; t < r.length; t++) n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new Bu(e)
};
Wn.render = function(t, e, n) {
    if (!Ru(e)) throw Error(te(200));
    return Mu(null, t, e, !1, n)
};
Wn.unmountComponentAtNode = function(t) {
    if (!Ru(t)) throw Error(te(40));
    return t._reactRootContainer ? (ao(function() {
        Mu(null, null, t, !1, function() {
            t._reactRootContainer = null, t[Vr] = null
        })
    }), !0) : !1
};
Wn.unstable_batchedUpdates = Gh;
Wn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Ru(n)) throw Error(te(200));
    if (t == null || t._reactInternals === void 0) throw Error(te(38));
    return Mu(t, e, n, !1, r)
};
Wn.version = "18.2.0-next-9e3b772b8-20220608";

function gv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)
    } catch (t) {
        console.error(t)
    }
}
gv(), pg.exports = Wn;
var Lu = pg.exports;
const Do = yr(Lu);
var g1 = Lu;
Wf.createRoot = g1.createRoot, Wf.hydrateRoot = g1.hydrateRoot;
var yv = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
    (function() {
        var e = {}.hasOwnProperty;

        function n() {
            for (var o = "", s = 0; s < arguments.length; s++) {
                var a = arguments[s];
                a && (o = i(o, r(a)))
            }
            return o
        }

        function r(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var s = "";
            for (var a in o) e.call(o, a) && o[a] && (s = i(s, a));
            return s
        }

        function i(o, s) {
            return s ? o ? o + " " + s : o + s : o
        }
        t.exports ? (n.default = n, t.exports = n) : window.classNames = n
    })()
})(yv);
var $8 = yv.exports;
const ft = yr($8);

function Od() {
    return Od = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }, Od.apply(this, arguments)
}

function vv(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}

function y1(t) {
    return "default" + t.charAt(0).toUpperCase() + t.substr(1)
}

function K8(t) {
    var e = q8(t, "string");
    return typeof e == "symbol" ? e : String(e)
}

function q8(t, e) {
    if (typeof t != "object" || t === null) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(t, e || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function V8(t, e, n) {
    var r = F.useRef(t !== void 0),
        i = F.useState(e),
        o = i[0],
        s = i[1],
        a = t !== void 0,
        l = r.current;
    return r.current = a, !a && l && o !== e && s(e), [a ? t : o, F.useCallback(function(u) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), w = 1; w < h; w++) g[w - 1] = arguments[w];
        n && n.apply(void 0, [u].concat(g)), s(u)
    }, [n])]
}

function wv(t, e) {
    return Object.keys(e).reduce(function(n, r) {
        var i, o = n,
            s = o[y1(r)],
            a = o[r],
            l = vv(o, [y1(r), r].map(K8)),
            u = e[r],
            h = V8(a, s, t[u]),
            g = h[0],
            w = h[1];
        return Od({}, l, (i = {}, i[r] = g, i[u] = w, i))
    }, t)
}

function Pd(t, e) {
    return Pd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, Pd(t, e)
}

function G8(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Pd(t, e)
}
const Z8 = ["xxl", "xl", "lg", "md", "sm", "xs"],
    Y8 = "xs",
    n0 = F.createContext({
        prefixes: {},
        breakpoints: Z8,
        minBreakpoint: Y8
    });

function tn(t, e) {
    const {
        prefixes: n
    } = F.useContext(n0);
    return t || n[e] || e
}

function xv() {
    const {
        breakpoints: t
    } = F.useContext(n0);
    return t
}

function Ev() {
    const {
        minBreakpoint: t
    } = F.useContext(n0);
    return t
}

function r0(t) {
    return t && t.ownerDocument || document
}

function Q8(t) {
    var e = r0(t);
    return e && e.defaultView || window
}

function X8(t, e) {
    return Q8(t).getComputedStyle(t, e)
}
var J8 = /([A-Z])/g;

function ex(t) {
    return t.replace(J8, "-$1").toLowerCase()
}
var tx = /^ms-/;

function el(t) {
    return ex(t).replace(tx, "-ms-")
}
var nx = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function rx(t) {
    return !!(t && nx.test(t))
}

function $r(t, e) {
    var n = "",
        r = "";
    if (typeof e == "string") return t.style.getPropertyValue(el(e)) || X8(t).getPropertyValue(el(e));
    Object.keys(e).forEach(function(i) {
        var o = e[i];
        !o && o !== 0 ? t.style.removeProperty(el(i)) : rx(i) ? r += i + "(" + o + ") " : n += el(i) + ": " + o + ";"
    }), r && (n += "transform: " + r + ";"), t.style.cssText += ";" + n
}
var Sv = {
        exports: {}
    },
    ix = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    ox = ix,
    sx = ox;

function bv() {}

function _v() {}
_v.resetWarningCache = bv;
var ax = function() {
    function t(r, i, o, s, a, l) {
        if (l !== sx) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    t.isRequired = t;

    function e() {
        return t
    }
    var n = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: _v,
        resetWarningCache: bv
    };
    return n.PropTypes = n, n
};
Sv.exports = ax();
var _a = Sv.exports;
const qc = yr(_a),
    v1 = {
        disabled: !1
    },
    kv = J.createContext(null);
var lx = function(e) {
        return e.scrollTop
    },
    Ns = "unmounted",
    fi = "exited",
    fr = "entering",
    jr = "entered",
    da = "exiting",
    ei = function(t) {
        G8(e, t);

        function e(r, i) {
            var o;
            o = t.call(this, r, i) || this;
            var s = i,
                a = s && !s.isMounting ? r.enter : r.appear,
                l;
            return o.appearStatus = null, r.in ? a ? (l = fi, o.appearStatus = fr) : l = jr : r.unmountOnExit || r.mountOnEnter ? l = Ns : l = fi, o.state = {
                status: l
            }, o.nextCallback = null, o
        }
        e.getDerivedStateFromProps = function(i, o) {
            var s = i.in;
            return s && o.status === Ns ? {
                status: fi
            } : null
        };
        var n = e.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(i) {
            var o = null;
            if (i !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== fr && s !== jr && (o = fr) : (s === fr || s === jr) && (o = da)
            }
            this.updateStatus(!1, o)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var i = this.props.timeout,
                o, s, a;
            return o = s = a = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), {
                exit: o,
                enter: s,
                appear: a
            }
        }, n.updateStatus = function(i, o) {
            if (i === void 0 && (i = !1), o !== null)
                if (this.cancelNextCallback(), o === fr) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : Do.findDOMNode(this);
                        s && lx(s)
                    }
                    this.performEnter(i)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === fi && this.setState({
                status: Ns
            })
        }, n.performEnter = function(i) {
            var o = this,
                s = this.props.enter,
                a = this.context ? this.context.isMounting : i,
                l = this.props.nodeRef ? [a] : [Do.findDOMNode(this), a],
                u = l[0],
                h = l[1],
                g = this.getTimeouts(),
                w = a ? g.appear : g.enter;
            if (!i && !s || v1.disabled) {
                this.safeSetState({
                    status: jr
                }, function() {
                    o.props.onEntered(u)
                });
                return
            }
            this.props.onEnter(u, h), this.safeSetState({
                status: fr
            }, function() {
                o.props.onEntering(u, h), o.onTransitionEnd(w, function() {
                    o.safeSetState({
                        status: jr
                    }, function() {
                        o.props.onEntered(u, h)
                    })
                })
            })
        }, n.performExit = function() {
            var i = this,
                o = this.props.exit,
                s = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : Do.findDOMNode(this);
            if (!o || v1.disabled) {
                this.safeSetState({
                    status: fi
                }, function() {
                    i.props.onExited(a)
                });
                return
            }
            this.props.onExit(a), this.safeSetState({
                status: da
            }, function() {
                i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
                    i.safeSetState({
                        status: fi
                    }, function() {
                        i.props.onExited(a)
                    })
                })
            })
        }, n.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(i, o) {
            o = this.setNextCallback(o), this.setState(i, o)
        }, n.setNextCallback = function(i) {
            var o = this,
                s = !0;
            return this.nextCallback = function(a) {
                s && (s = !1, o.nextCallback = null, i(a))
            }, this.nextCallback.cancel = function() {
                s = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(i, o) {
            this.setNextCallback(o);
            var s = this.props.nodeRef ? this.props.nodeRef.current : Do.findDOMNode(this),
                a = i == null && !this.props.addEndListener;
            if (!s || a) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    u = l[0],
                    h = l[1];
                this.props.addEndListener(u, h)
            }
            i != null && setTimeout(this.nextCallback, i)
        }, n.render = function() {
            var i = this.state.status;
            if (i === Ns) return null;
            var o = this.props,
                s = o.children;
            o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
            var a = vv(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return J.createElement(kv.Provider, {
                value: null
            }, typeof s == "function" ? s(i, a) : J.cloneElement(J.Children.only(s), a))
        }, e
    }(J.Component);
ei.contextType = kv;
ei.propTypes = {};

function wo() {}
ei.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: wo,
    onEntering: wo,
    onEntered: wo,
    onExit: wo,
    onExiting: wo,
    onExited: wo
};
ei.UNMOUNTED = Ns;
ei.EXITED = fi;
ei.ENTERING = fr;
ei.ENTERED = jr;
ei.EXITING = da;
const ux = ei,
    Nu = !!(typeof window < "u" && window.document && window.document.createElement);
var jd = !1,
    Dd = !1;
try {
    var Vc = {
        get passive() {
            return jd = !0
        },
        get once() {
            return Dd = jd = !0
        }
    };
    Nu && (window.addEventListener("test", Vc, Vc), window.removeEventListener("test", Vc, !0))
} catch {}

function cx(t, e, n, r) {
    if (r && typeof r != "boolean" && !Dd) {
        var i = r.once,
            o = r.capture,
            s = n;
        !Dd && i && (s = n.__once || function a(l) {
            this.removeEventListener(e, a, o), n.call(this, l)
        }, n.__once = s), t.addEventListener(e, s, jd ? r : o)
    }
    t.addEventListener(e, n, r)
}

function fx(t, e, n, r) {
    var i = r && typeof r != "boolean" ? r.capture : r;
    t.removeEventListener(e, n, i), n.__once && t.removeEventListener(e, n.__once, i)
}

function nu(t, e, n, r) {
    return cx(t, e, n, r),
        function() {
            fx(t, e, n, r)
        }
}

function dx(t, e, n, r) {
    if (n === void 0 && (n = !1), r === void 0 && (r = !0), t) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(e, n, r), t.dispatchEvent(i)
    }
}

function hx(t) {
    var e = $r(t, "transitionDuration") || "",
        n = e.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(e) * n
}

function px(t, e, n) {
    n === void 0 && (n = 5);
    var r = !1,
        i = setTimeout(function() {
            r || dx(t, "transitionend", !0)
        }, e + n),
        o = nu(t, "transitionend", function() {
            r = !0
        }, {
            once: !0
        });
    return function() {
        clearTimeout(i), o()
    }
}

function mx(t, e, n, r) {
    n == null && (n = hx(t) || 0);
    var i = px(t, n, r),
        o = nu(t, "transitionend", e);
    return function() {
        i(), o()
    }
}

function w1(t, e) {
    const n = $r(t, e) || "",
        r = n.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(n) * r
}

function i0(t, e) {
    const n = w1(t, "transitionDuration"),
        r = w1(t, "transitionDelay"),
        i = mx(t, o => {
            o.target === t && (i(), e(o))
        }, n + r)
}

function Cs(...t) {
    return t.filter(e => e != null).reduce((e, n) => {
        if (typeof n != "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        return e === null ? n : function(...i) {
            e.apply(this, i), n.apply(this, i)
        }
    }, null)
}

function Cv(t) {
    t.offsetHeight
}
const x1 = t => !t || typeof t == "function" ? t : e => {
    t.current = e
};

function gx(t, e) {
    const n = x1(t),
        r = x1(e);
    return i => {
        n && n(i), r && r(i)
    }
}

function Ou(t, e) {
    return F.useMemo(() => gx(t, e), [t, e])
}

function yx(t) {
    return t && "setState" in t ? Do.findDOMNode(t) : t ?? null
}
const vx = J.forwardRef(({
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: r,
        onExiting: i,
        onExited: o,
        addEndListener: s,
        children: a,
        childRef: l,
        ...u
    }, h) => {
        const g = F.useRef(null),
            w = Ou(g, l),
            C = N => {
                w(yx(N))
            },
            B = N => U => {
                N && g.current && N(g.current, U)
            },
            I = F.useCallback(B(t), [t]),
            R = F.useCallback(B(e), [e]),
            _ = F.useCallback(B(n), [n]),
            b = F.useCallback(B(r), [r]),
            v = F.useCallback(B(i), [i]),
            O = F.useCallback(B(o), [o]),
            D = F.useCallback(B(s), [s]);
        return k.jsx(ux, {
            ref: h,
            ...u,
            onEnter: I,
            onEntered: _,
            onEntering: R,
            onExit: b,
            onExited: O,
            onExiting: v,
            addEndListener: D,
            nodeRef: g,
            children: typeof a == "function" ? (N, U) => a(N, {
                ...U,
                ref: C
            }) : J.cloneElement(a, {
                ref: C
            })
        })
    }),
    o0 = vx,
    wx = {
        height: ["marginTop", "marginBottom"],
        width: ["marginLeft", "marginRight"]
    };

function xx(t, e) {
    const n = `offset${t[0].toUpperCase()}${t.slice(1)}`,
        r = e[n],
        i = wx[t];
    return r + parseInt($r(e, i[0]), 10) + parseInt($r(e, i[1]), 10)
}
const Ex = {
        [fi]: "collapse",
        [da]: "collapsing",
        [fr]: "collapsing",
        [jr]: "collapse show"
    },
    Sx = J.forwardRef(({
        onEnter: t,
        onEntering: e,
        onEntered: n,
        onExit: r,
        onExiting: i,
        className: o,
        children: s,
        dimension: a = "height",
        in: l = !1,
        timeout: u = 300,
        mountOnEnter: h = !1,
        unmountOnExit: g = !1,
        appear: w = !1,
        getDimensionValue: C = xx,
        ...B
    }, I) => {
        const R = typeof a == "function" ? a() : a,
            _ = F.useMemo(() => Cs(N => {
                N.style[R] = "0"
            }, t), [R, t]),
            b = F.useMemo(() => Cs(N => {
                const U = `scroll${R[0].toUpperCase()}${R.slice(1)}`;
                N.style[R] = `${N[U]}px`
            }, e), [R, e]),
            v = F.useMemo(() => Cs(N => {
                N.style[R] = null
            }, n), [R, n]),
            O = F.useMemo(() => Cs(N => {
                N.style[R] = `${C(R,N)}px`, Cv(N)
            }, r), [r, C, R]),
            D = F.useMemo(() => Cs(N => {
                N.style[R] = null
            }, i), [R, i]);
        return k.jsx(o0, {
            ref: I,
            addEndListener: i0,
            ...B,
            "aria-expanded": B.role ? l : null,
            onEnter: _,
            onEntering: b,
            onEntered: v,
            onExit: O,
            onExiting: D,
            childRef: s.ref,
            in: l,
            timeout: u,
            mountOnEnter: h,
            unmountOnExit: g,
            appear: w,
            children: (N, U) => J.cloneElement(s, {
                ...U,
                className: ft(o, s.props.className, Ex[N], R === "width" && "collapse-horizontal")
            })
        })
    }),
    bx = Sx;

function _x(t) {
    const e = F.useRef(t);
    return F.useEffect(() => {
        e.current = t
    }, [t]), e
}

function Xn(t) {
    const e = _x(t);
    return F.useCallback(function(...n) {
        return e.current && e.current(...n)
    }, [e])
}
const kx = t => F.forwardRef((e, n) => k.jsx("div", {
    ...e,
    ref: n,
    className: ft(e.className, t)
}));

function Cx() {
    const t = F.useRef(!0),
        e = F.useRef(() => t.current);
    return F.useEffect(() => (t.current = !0, () => {
        t.current = !1
    }), []), e.current
}

function Ax(t) {
    const e = F.useRef(null);
    return F.useEffect(() => {
        e.current = t
    }), e.current
}
const Ix = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
    Tx = typeof document < "u",
    Ud = Tx || Ix ? F.useLayoutEffect : F.useEffect,
    Bx = ["as", "disabled"];

function Rx(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}

function Mx(t) {
    return !t || t.trim() === "#"
}

function Av({
    tagName: t,
    disabled: e,
    href: n,
    target: r,
    rel: i,
    role: o,
    onClick: s,
    tabIndex: a = 0,
    type: l
}) {
    t || (n != null || r != null || i != null ? t = "a" : t = "button");
    const u = {
        tagName: t
    };
    if (t === "button") return [{
        type: l || "button",
        disabled: e
    }, u];
    const h = w => {
            if ((e || t === "a" && Mx(n)) && w.preventDefault(), e) {
                w.stopPropagation();
                return
            }
            s == null || s(w)
        },
        g = w => {
            w.key === " " && (w.preventDefault(), h(w))
        };
    return t === "a" && (n || (n = "#"), e && (n = void 0)), [{
        role: o ?? "button",
        disabled: void 0,
        tabIndex: e ? void 0 : a,
        href: n,
        target: t === "a" ? r : void 0,
        "aria-disabled": e || void 0,
        rel: t === "a" ? i : void 0,
        onClick: h,
        onKeyDown: g
    }, u]
}
const Iv = F.forwardRef((t, e) => {
    let {
        as: n,
        disabled: r
    } = t, i = Rx(t, Bx);
    const [o, {
        tagName: s
    }] = Av(Object.assign({
        tagName: n,
        disabled: r
    }, i));
    return k.jsx(s, Object.assign({}, i, o, {
        ref: e
    }))
});
Iv.displayName = "Button";
const Lx = ["onKeyDown"];

function Nx(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}

function Ox(t) {
    return !t || t.trim() === "#"
}
const Tv = F.forwardRef((t, e) => {
    let {
        onKeyDown: n
    } = t, r = Nx(t, Lx);
    const [i] = Av(Object.assign({
        tagName: "a"
    }, r)), o = Xn(s => {
        i.onKeyDown(s), n == null || n(s)
    });
    return Ox(r.href) || r.role === "button" ? k.jsx("a", Object.assign({
        ref: e
    }, r, i, {
        onKeyDown: o
    })) : k.jsx("a", Object.assign({
        ref: e
    }, r, {
        onKeyDown: n
    }))
});
Tv.displayName = "Anchor";
const Px = Tv,
    jx = {
        [fr]: "show",
        [jr]: "show"
    },
    Bv = F.forwardRef(({
        className: t,
        children: e,
        transitionClasses: n = {},
        onEnter: r,
        ...i
    }, o) => {
        const s = {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                ...i
            },
            a = F.useCallback((l, u) => {
                Cv(l), r == null || r(l, u)
            }, [r]);
        return k.jsx(o0, {
            ref: o,
            addEndListener: i0,
            ...s,
            onEnter: a,
            childRef: e.ref,
            children: (l, u) => F.cloneElement(e, {
                ...u,
                className: ft("fade", t, e.props.className, jx[l], n[l])
            })
        })
    });
Bv.displayName = "Fade";
const Dx = Bv,
    Ux = {
        "aria-label": qc.string,
        onClick: qc.func,
        variant: qc.oneOf(["white"])
    },
    s0 = F.forwardRef(({
        className: t,
        variant: e,
        "aria-label": n = "Close",
        ...r
    }, i) => k.jsx("button", {
        ref: i,
        type: "button",
        className: ft("btn-close", e && `btn-close-${e}`, t),
        "aria-label": n,
        ...r
    }));
s0.displayName = "CloseButton";
s0.propTypes = Ux;
const zx = s0,
    Rv = F.createContext(null);
Rv.displayName = "CardHeaderContext";
const Fx = Rv;

function Wx(t) {
    const e = F.useRef(t);
    return e.current = t, e
}

function Hx(t) {
    const e = Wx(t);
    F.useEffect(() => () => e.current(), [])
}

function $x(t, e) {
    let n = 0;
    return F.Children.map(t, r => F.isValidElement(r) ? e(r, n++) : r)
}

function Kx({
    as: t,
    bsPrefix: e,
    className: n,
    ...r
}) {
    e = tn(e, "col");
    const i = xv(),
        o = Ev(),
        s = [],
        a = [];
    return i.forEach(l => {
        const u = r[l];
        delete r[l];
        let h, g, w;
        typeof u == "object" && u != null ? {
            span: h,
            offset: g,
            order: w
        } = u : h = u;
        const C = l !== o ? `-${l}` : "";
        h && s.push(h === !0 ? `${e}${C}` : `${e}${C}-${h}`), w != null && a.push(`order${C}-${w}`), g != null && a.push(`offset${C}-${g}`)
    }), [{
        ...r,
        className: ft(n, ...s, ...a)
    }, {
        as: t,
        bsPrefix: e,
        spans: s
    }]
}
const Mv = F.forwardRef((t, e) => {
    const [{
        className: n,
        ...r
    }, {
        as: i = "div",
        bsPrefix: o,
        spans: s
    }] = Kx(t);
    return k.jsx(i, {
        ...r,
        ref: e,
        className: ft(n, !s.length && o)
    })
});
Mv.displayName = "Col";
const Ye = Mv,
    Lv = F.forwardRef(({
        bsPrefix: t,
        fluid: e = !1,
        as: n = "div",
        className: r,
        ...i
    }, o) => {
        const s = tn(t, "container"),
            a = typeof e == "string" ? `-${e}` : "-fluid";
        return k.jsx(n, {
            ref: o,
            ...i,
            className: ft(r, e ? `${s}${a}` : s)
        })
    });
Lv.displayName = "Container";
const vn = Lv;
var qx = Function.prototype.bind.call(Function.prototype.call, [].slice);

function Ui(t, e) {
    return qx(t.querySelectorAll(e))
}

function Vx() {
    const [, t] = F.useReducer(e => !e, !1);
    return t
}

function E1(t, e) {
    if (t.contains) return t.contains(e);
    if (t.compareDocumentPosition) return t === e || !!(t.compareDocumentPosition(e) & 16)
}
const Gx = F.createContext(null),
    a0 = (t, e = null) => t != null ? String(t) : e || null,
    ru = Gx,
    Nv = F.createContext(null);
Nv.displayName = "NavContext";
const Ov = Nv,
    Zx = "data-rr-ui-",
    Yx = "rrUi";

function Pu(t) {
    return `${Zx}${t}`
}

function Qx(t) {
    return `${Yx}${t}`
}
const Pv = F.createContext(Nu ? window : void 0);
Pv.Provider;

function l0() {
    return F.useContext(Pv)
}
const jv = F.createContext(null);
jv.displayName = "NavbarContext";
const ds = jv,
    Xx = F.createContext(null),
    Dv = Xx,
    Jx = ["as", "active", "eventKey"];

function e5(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}

function Uv({
    key: t,
    onClick: e,
    active: n,
    id: r,
    role: i,
    disabled: o
}) {
    const s = F.useContext(ru),
        a = F.useContext(Ov),
        l = F.useContext(Dv);
    let u = n;
    const h = {
        role: i
    };
    if (a) {
        !i && a.role === "tablist" && (h.role = "tab");
        const g = a.getControllerId(t ?? null),
            w = a.getControlledId(t ?? null);
        h[Pu("event-key")] = t, h.id = g || r, u = n == null && t != null ? a.activeKey === t : n, (u || !(l != null && l.unmountOnExit) && !(l != null && l.mountOnEnter)) && (h["aria-controls"] = w)
    }
    return h.role === "tab" && (h["aria-selected"] = u, u || (h.tabIndex = -1), o && (h.tabIndex = -1, h["aria-disabled"] = !0)), h.onClick = Xn(g => {
        o || (e == null || e(g), t != null && s && !g.isPropagationStopped() && s(t, g))
    }), [h, {
        isActive: u
    }]
}
const zv = F.forwardRef((t, e) => {
    let {
        as: n = Iv,
        active: r,
        eventKey: i
    } = t, o = e5(t, Jx);
    const [s, a] = Uv(Object.assign({
        key: a0(i, o.href),
        active: r
    }, o));
    return s[Pu("active")] = a.isActive, k.jsx(n, Object.assign({}, o, s, {
        ref: e
    }))
});
zv.displayName = "NavItem";
const t5 = zv,
    n5 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function r5(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}
const S1 = () => {},
    b1 = Pu("event-key"),
    Fv = F.forwardRef((t, e) => {
        let {
            as: n = "div",
            onSelect: r,
            activeKey: i,
            role: o,
            onKeyDown: s
        } = t, a = r5(t, n5);
        const l = Vx(),
            u = F.useRef(!1),
            h = F.useContext(ru),
            g = F.useContext(Dv);
        let w, C;
        g && (o = o || "tablist", i = g.activeKey, w = g.getControlledId, C = g.getControllerId);
        const B = F.useRef(null),
            I = v => {
                const O = B.current;
                if (!O) return null;
                const D = Ui(O, `[${b1}]:not([aria-disabled=true])`),
                    N = O.querySelector("[aria-selected=true]");
                if (!N || N !== document.activeElement) return null;
                const U = D.indexOf(N);
                if (U === -1) return null;
                let z = U + v;
                return z >= D.length && (z = 0), z < 0 && (z = D.length - 1), D[z]
            },
            R = (v, O) => {
                v != null && (r == null || r(v, O), h == null || h(v, O))
            },
            _ = v => {
                if (s == null || s(v), !g) return;
                let O;
                switch (v.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        O = I(-1);
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        O = I(1);
                        break;
                    default:
                        return
                }
                O && (v.preventDefault(), R(O.dataset[Qx("EventKey")] || null, v), u.current = !0, l())
            };
        F.useEffect(() => {
            if (B.current && u.current) {
                const v = B.current.querySelector(`[${b1}][aria-selected=true]`);
                v == null || v.focus()
            }
            u.current = !1
        });
        const b = Ou(e, B);
        return k.jsx(ru.Provider, {
            value: R,
            children: k.jsx(Ov.Provider, {
                value: {
                    role: o,
                    activeKey: a0(i),
                    getControlledId: w || S1,
                    getControllerId: C || S1
                },
                children: k.jsx(n, Object.assign({}, a, {
                    onKeyDown: _,
                    ref: b,
                    role: o
                }))
            })
        })
    });
Fv.displayName = "Nav";
const i5 = Object.assign(Fv, {
    Item: t5
});

function Gc(t) {
    t === void 0 && (t = r0());
    try {
        var e = t.activeElement;
        return !e || !e.nodeName ? null : e
    } catch {
        return t.body
    }
}

function o5(t = document) {
    const e = t.defaultView;
    return Math.abs(e.innerWidth - t.documentElement.clientWidth)
}
const _1 = Pu("modal-open");
class s5 {
    constructor({
        ownerDocument: e,
        handleContainerOverflow: n = !0,
        isRTL: r = !1
    } = {}) {
        this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = e
    }
    getScrollbarWidth() {
        return o5(this.ownerDocument)
    }
    getElement() {
        return (this.ownerDocument || document).body
    }
    setModalAttributes(e) {}
    removeModalAttributes(e) {}
    setContainerStyle(e) {
        const n = {
                overflow: "hidden"
            },
            r = this.isRTL ? "paddingLeft" : "paddingRight",
            i = this.getElement();
        e.style = {
            overflow: i.style.overflow,
            [r]: i.style[r]
        }, e.scrollBarWidth && (n[r] = `${parseInt($r(i,r)||"0",10)+e.scrollBarWidth}px`), i.setAttribute(_1, ""), $r(i, n)
    }
    reset() {
        [...this.modals].forEach(e => this.remove(e))
    }
    removeContainerStyle(e) {
        const n = this.getElement();
        n.removeAttribute(_1), Object.assign(n.style, e.style)
    }
    add(e) {
        let n = this.modals.indexOf(e);
        return n !== -1 || (n = this.modals.length, this.modals.push(e), this.setModalAttributes(e), n !== 0) || (this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n
    }
    remove(e) {
        const n = this.modals.indexOf(e);
        n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(e))
    }
    isTopModal(e) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === e
    }
}
const u0 = s5,
    Zc = (t, e) => Nu ? t == null ? (e || r0()).body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), t && ("nodeType" in t || t.getBoundingClientRect) ? t : null) : null;

function a5(t, e) {
    const n = l0(),
        [r, i] = F.useState(() => Zc(t, n == null ? void 0 : n.document));
    if (!r) {
        const o = Zc(t);
        o && i(o)
    }
    return F.useEffect(() => {
        e && r && e(r)
    }, [e, r]), F.useEffect(() => {
        const o = Zc(t);
        o !== r && i(o)
    }, [t, r]), r
}

function l5({
    children: t,
    in: e,
    onExited: n,
    mountOnEnter: r,
    unmountOnExit: i
}) {
    const o = F.useRef(null),
        s = F.useRef(e),
        a = Xn(n);
    F.useEffect(() => {
        e ? s.current = !0 : a(o.current)
    }, [e, a]);
    const l = Ou(o, t.ref),
        u = F.cloneElement(t, {
            ref: l
        });
    return e ? u : i || !s.current && r ? null : u
}

function u5({
    in: t,
    onTransition: e
}) {
    const n = F.useRef(null),
        r = F.useRef(!0),
        i = Xn(e);
    return Ud(() => {
        if (!n.current) return;
        let o = !1;
        return i({
            in: t,
            element: n.current,
            initial: r.current,
            isStale: () => o
        }), () => {
            o = !0
        }
    }, [t, i]), Ud(() => (r.current = !1, () => {
        r.current = !0
    }), []), n
}

function c5({
    children: t,
    in: e,
    onExited: n,
    onEntered: r,
    transition: i
}) {
    const [o, s] = F.useState(!e);
    e && o && s(!1);
    const a = u5({
            in: !!e,
            onTransition: u => {
                const h = () => {
                    u.isStale() || (u.in ? r == null || r(u.element, u.initial) : (s(!0), n == null || n(u.element)))
                };
                Promise.resolve(i(u)).then(h, g => {
                    throw u.in || s(!0), g
                })
            }
        }),
        l = Ou(a, t.ref);
    return o && !e ? null : F.cloneElement(t, {
        ref: l
    })
}

function k1(t, e, n) {
    return t ? k.jsx(t, Object.assign({}, n)) : e ? k.jsx(c5, Object.assign({}, n, {
        transition: e
    })) : k.jsx(l5, Object.assign({}, n))
}

function f5(t) {
    return t.code === "Escape" || t.keyCode === 27
}
const d5 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function h5(t, e) {
    if (t == null) return {};
    var n = {},
        r = Object.keys(t),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}
let Yc;

function p5(t) {
    return Yc || (Yc = new u0({
        ownerDocument: t == null ? void 0 : t.document
    })), Yc
}

function m5(t) {
    const e = l0(),
        n = t || p5(e),
        r = F.useRef({
            dialog: null,
            backdrop: null
        });
    return Object.assign(r.current, {
        add: () => n.add(r.current),
        remove: () => n.remove(r.current),
        isTopModal: () => n.isTopModal(r.current),
        setDialogRef: F.useCallback(i => {
            r.current.dialog = i
        }, []),
        setBackdropRef: F.useCallback(i => {
            r.current.backdrop = i
        }, [])
    })
}
const Wv = F.forwardRef((t, e) => {
    let {
        show: n = !1,
        role: r = "dialog",
        className: i,
        style: o,
        children: s,
        backdrop: a = !0,
        keyboard: l = !0,
        onBackdropClick: u,
        onEscapeKeyDown: h,
        transition: g,
        runTransition: w,
        backdropTransition: C,
        runBackdropTransition: B,
        autoFocus: I = !0,
        enforceFocus: R = !0,
        restoreFocus: _ = !0,
        restoreFocusOptions: b,
        renderDialog: v,
        renderBackdrop: O = me => k.jsx("div", Object.assign({}, me)),
        manager: D,
        container: N,
        onShow: U,
        onHide: z = () => {},
        onExit: Z,
        onExited: Q,
        onExiting: X,
        onEnter: ce,
        onEntering: j,
        onEntered: c
    } = t, m = h5(t, d5);
    const S = l0(),
        L = a5(N),
        E = m5(D),
        x = Cx(),
        T = Ax(n),
        [y, f] = F.useState(!n),
        M = F.useRef(null);
    F.useImperativeHandle(e, () => E, [E]), Nu && !T && n && (M.current = Gc(S == null ? void 0 : S.document)), n && y && f(!1);
    const q = Xn(() => {
            if (E.add(), Re.current = nu(document, "keydown", le), ue.current = nu(document, "focus", () => setTimeout(Y), !0), U && U(), I) {
                var me, Rn;
                const je = Gc((me = (Rn = E.dialog) == null ? void 0 : Rn.ownerDocument) != null ? me : S == null ? void 0 : S.document);
                E.dialog && je && !E1(E.dialog, je) && (M.current = je, E.dialog.focus())
            }
        }),
        G = Xn(() => {
            if (E.remove(), Re.current == null || Re.current(), ue.current == null || ue.current(), _) {
                var me;
                (me = M.current) == null || me.focus == null || me.focus(b), M.current = null
            }
        });
    F.useEffect(() => {
        !n || !L || q()
    }, [n, L, q]), F.useEffect(() => {
        y && G()
    }, [y, G]), Hx(() => {
        G()
    });
    const Y = Xn(() => {
            if (!R || !x() || !E.isTopModal()) return;
            const me = Gc(S == null ? void 0 : S.document);
            E.dialog && me && !E1(E.dialog, me) && E.dialog.focus()
        }),
        ie = Xn(me => {
            me.target === me.currentTarget && (u == null || u(me), a === !0 && z())
        }),
        le = Xn(me => {
            l && f5(me) && E.isTopModal() && (h == null || h(me), me.defaultPrevented || z())
        }),
        ue = F.useRef(),
        Re = F.useRef(),
        be = (...me) => {
            f(!0), Q == null || Q(...me)
        };
    if (!L) return null;
    const _e = Object.assign({
        role: r,
        ref: E.setDialogRef,
        "aria-modal": r === "dialog" ? !0 : void 0
    }, m, {
        style: o,
        className: i,
        tabIndex: -1
    });
    let Me = v ? v(_e) : k.jsx("div", Object.assign({}, _e, {
        children: F.cloneElement(s, {
            role: "document"
        })
    }));
    Me = k1(g, w, {
        unmountOnExit: !0,
        mountOnEnter: !0,
        appear: !0,
        in: !!n,
        onExit: Z,
        onExiting: X,
        onExited: be,
        onEnter: ce,
        onEntering: j,
        onEntered: c,
        children: Me
    });
    let Ee = null;
    return a && (Ee = O({
        ref: E.setBackdropRef,
        onClick: ie
    }), Ee = k1(C, B, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Ee
    })), k.jsx(k.Fragment, {
        children: Do.createPortal(k.jsxs(k.Fragment, {
            children: [Ee, Me]
        }), L)
    })
});
Wv.displayName = "Modal";
const g5 = Object.assign(Wv, {
    Manager: u0
});

function y5(t, e) {
    return t.classList ? !!e && t.classList.contains(e) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ") !== -1
}

function v5(t, e) {
    t.classList ? t.classList.add(e) : y5(t, e) || (typeof t.className == "string" ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e))
}

function C1(t, e) {
    return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function w5(t, e) {
    t.classList ? t.classList.remove(e) : typeof t.className == "string" ? t.className = C1(t.className, e) : t.setAttribute("class", C1(t.className && t.className.baseVal || "", e))
}
const xo = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class Hv extends u0 {
    adjustAndStore(e, n, r) {
        const i = n.style[e];
        n.dataset[e] = i, $r(n, {
            [e]: `${parseFloat($r(n,e))+r}px`
        })
    }
    restore(e, n) {
        const r = n.dataset[e];
        r !== void 0 && (delete n.dataset[e], $r(n, {
            [e]: r
        }))
    }
    setContainerStyle(e) {
        super.setContainerStyle(e);
        const n = this.getElement();
        if (v5(n, "modal-open"), !e.scrollBarWidth) return;
        const r = this.isRTL ? "paddingLeft" : "paddingRight",
            i = this.isRTL ? "marginLeft" : "marginRight";
        Ui(n, xo.FIXED_CONTENT).forEach(o => this.adjustAndStore(r, o, e.scrollBarWidth)), Ui(n, xo.STICKY_CONTENT).forEach(o => this.adjustAndStore(i, o, -e.scrollBarWidth)), Ui(n, xo.NAVBAR_TOGGLER).forEach(o => this.adjustAndStore(i, o, e.scrollBarWidth))
    }
    removeContainerStyle(e) {
        super.removeContainerStyle(e);
        const n = this.getElement();
        w5(n, "modal-open");
        const r = this.isRTL ? "paddingLeft" : "paddingRight",
            i = this.isRTL ? "marginLeft" : "marginRight";
        Ui(n, xo.FIXED_CONTENT).forEach(o => this.restore(r, o)), Ui(n, xo.STICKY_CONTENT).forEach(o => this.restore(i, o)), Ui(n, xo.NAVBAR_TOGGLER).forEach(o => this.restore(i, o))
    }
}
let Qc;

function x5(t) {
    return Qc || (Qc = new Hv(t)), Qc
}
const E5 = F.createContext({
        onHide() {}
    }),
    $v = E5,
    S5 = F.forwardRef(({
        closeLabel: t = "Close",
        closeVariant: e,
        closeButton: n = !1,
        onHide: r,
        children: i,
        ...o
    }, s) => {
        const a = F.useContext($v),
            l = Xn(() => {
                a == null || a.onHide(), r == null || r()
            });
        return k.jsxs("div", {
            ref: s,
            ...o,
            children: [i, n && k.jsx(zx, {
                "aria-label": t,
                variant: e,
                onClick: l
            })]
        })
    }),
    b5 = S5;
var A1 = {
        exports: {}
    },
    zd = {
        exports: {}
    };
(function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n;

    function n(r) {
        function i(s, a, l, u, h, g) {
            var w = u || "<<anonymous>>",
                C = g || l;
            if (a[l] == null) return s ? new Error("Required " + h + " `" + C + "` was not specified " + ("in `" + w + "`.")) : null;
            for (var B = arguments.length, I = Array(B > 6 ? B - 6 : 0), R = 6; R < B; R++) I[R - 6] = arguments[R];
            return r.apply(void 0, [a, l, w, h, C].concat(I))
        }
        var o = i.bind(null, !1);
        return o.isRequired = i.bind(null, !0), o
    }
    t.exports = e.default
})(zd, zd.exports);
var _5 = zd.exports;
(function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var n = _5,
        r = i(n);

    function i(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }

    function o() {
        for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l];

        function u() {
            for (var h = arguments.length, g = Array(h), w = 0; w < h; w++) g[w] = arguments[w];
            var C = null;
            return a.forEach(function(B) {
                if (C == null) {
                    var I = B.apply(void 0, g);
                    I != null && (C = I)
                }
            }), C
        }
        return (0, r.default)(u)
    }
    t.exports = e.default
})(A1, A1.exports);
const Kv = F.forwardRef(({
    className: t,
    bsPrefix: e,
    as: n = "div",
    ...r
}, i) => (e = tn(e, "nav-item"), k.jsx(n, {
    ref: i,
    className: ft(t, e),
    ...r
})));
Kv.displayName = "NavItem";
const k5 = Kv,
    qv = F.forwardRef(({
        bsPrefix: t,
        className: e,
        as: n = Px,
        active: r,
        eventKey: i,
        disabled: o = !1,
        ...s
    }, a) => {
        t = tn(t, "nav-link");
        const [l, u] = Uv({
            key: a0(i, s.href),
            active: r,
            disabled: o,
            ...s
        });
        return k.jsx(n, {
            ...s,
            ...l,
            ref: a,
            disabled: o,
            className: ft(e, t, o && "disabled", u.isActive && "active")
        })
    });
qv.displayName = "NavLink";
const C5 = qv,
    Vv = F.forwardRef((t, e) => {
        const {
            as: n = "div",
            bsPrefix: r,
            variant: i,
            fill: o = !1,
            justify: s = !1,
            navbar: a,
            navbarScroll: l,
            className: u,
            activeKey: h,
            ...g
        } = wv(t, {
            activeKey: "onSelect"
        }), w = tn(r, "nav");
        let C, B, I = !1;
        const R = F.useContext(ds),
            _ = F.useContext(Fx);
        return R ? (C = R.bsPrefix, I = a ?? !0) : _ && ({
            cardHeaderBsPrefix: B
        } = _), k.jsx(i5, {
            as: n,
            ref: e,
            activeKey: h,
            className: ft(u, {
                [w]: !I,
                [`${C}-nav`]: I,
                [`${C}-nav-scroll`]: I && l,
                [`${B}-${i}`]: !!B,
                [`${w}-${i}`]: !!i,
                [`${w}-fill`]: o,
                [`${w}-justified`]: s
            }),
            ...g
        })
    });
Vv.displayName = "Nav";
const A5 = Object.assign(Vv, {
        Item: k5,
        Link: C5
    }),
    Gv = F.forwardRef(({
        bsPrefix: t,
        className: e,
        as: n,
        ...r
    }, i) => {
        t = tn(t, "navbar-brand");
        const o = n || (r.href ? "a" : "span");
        return k.jsx(o, {
            ...r,
            ref: i,
            className: ft(e, t)
        })
    });
Gv.displayName = "NavbarBrand";
const I5 = Gv,
    Zv = F.forwardRef(({
        children: t,
        bsPrefix: e,
        ...n
    }, r) => {
        e = tn(e, "navbar-collapse");
        const i = F.useContext(ds);
        return k.jsx(bx, {
            in: !!(i && i.expanded),
            ...n,
            children: k.jsx("div", {
                ref: r,
                className: e,
                children: t
            })
        })
    });
Zv.displayName = "NavbarCollapse";
const T5 = Zv,
    Yv = F.forwardRef(({
        bsPrefix: t,
        className: e,
        children: n,
        label: r = "Toggle navigation",
        as: i = "button",
        onClick: o,
        ...s
    }, a) => {
        t = tn(t, "navbar-toggler");
        const {
            onToggle: l,
            expanded: u
        } = F.useContext(ds) || {}, h = Xn(g => {
            o && o(g), l && l()
        });
        return i === "button" && (s.type = "button"), k.jsx(i, {
            ...s,
            ref: a,
            onClick: h,
            "aria-label": r,
            className: ft(e, t, !u && "collapsed"),
            children: n || k.jsx("span", {
                className: `${t}-icon`
            })
        })
    });
Yv.displayName = "NavbarToggle";
const B5 = Yv,
    Fd = new WeakMap,
    I1 = (t, e) => {
        if (!t || !e) return;
        const n = Fd.get(e) || new Map;
        Fd.set(e, n);
        let r = n.get(t);
        return r || (r = e.matchMedia(t), r.refCount = 0, n.set(r.media, r)), r
    };

function R5(t, e = typeof window > "u" ? void 0 : window) {
    const n = I1(t, e),
        [r, i] = F.useState(() => n ? n.matches : !1);
    return Ud(() => {
        let o = I1(t, e);
        if (!o) return i(!1);
        let s = Fd.get(e);
        const a = () => {
            i(o.matches)
        };
        return o.refCount++, o.addListener(a), a(), () => {
            o.removeListener(a), o.refCount--, o.refCount <= 0 && (s == null || s.delete(o.media)), o = void 0
        }
    }, [t]), r
}

function M5(t) {
    const e = Object.keys(t);

    function n(a, l) {
        return a === l ? l : a ? `${a} and ${l}` : l
    }

    function r(a) {
        return e[Math.min(e.indexOf(a) + 1, e.length - 1)]
    }

    function i(a) {
        const l = r(a);
        let u = t[l];
        return typeof u == "number" ? u = `${u-.2}px` : u = `calc(${u} - 0.2px)`, `(max-width: ${u})`
    }

    function o(a) {
        let l = t[a];
        return typeof l == "number" && (l = `${l}px`), `(min-width: ${l})`
    }

    function s(a, l, u) {
        let h;
        typeof a == "object" ? (h = a, u = l, l = !0) : (l = l || !0, h = {
            [a]: l
        });
        let g = F.useMemo(() => Object.entries(h).reduce((w, [C, B]) => ((B === "up" || B === !0) && (w = n(w, o(C))), (B === "down" || B === !0) && (w = n(w, i(C))), w), ""), [JSON.stringify(h)]);
        return R5(g, u)
    }
    return s
}
const L5 = M5({
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
    }),
    Qv = F.forwardRef(({
        className: t,
        bsPrefix: e,
        as: n = "div",
        ...r
    }, i) => (e = tn(e, "offcanvas-body"), k.jsx(n, {
        ref: i,
        className: ft(t, e),
        ...r
    })));
Qv.displayName = "OffcanvasBody";
const N5 = Qv,
    O5 = {
        [fr]: "show",
        [jr]: "show"
    },
    Xv = F.forwardRef(({
        bsPrefix: t,
        className: e,
        children: n,
        in: r = !1,
        mountOnEnter: i = !1,
        unmountOnExit: o = !1,
        appear: s = !1,
        ...a
    }, l) => (t = tn(t, "offcanvas"), k.jsx(o0, {
        ref: l,
        addEndListener: i0,
        in: r,
        mountOnEnter: i,
        unmountOnExit: o,
        appear: s,
        ...a,
        childRef: n.ref,
        children: (u, h) => F.cloneElement(n, {
            ...h,
            className: ft(e, n.props.className, (u === fr || u === da) && `${t}-toggling`, O5[u])
        })
    })));
Xv.displayName = "OffcanvasToggling";
const P5 = Xv,
    Jv = F.forwardRef(({
        bsPrefix: t,
        className: e,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...i
    }, o) => (t = tn(t, "offcanvas-header"), k.jsx(b5, {
        ref: o,
        ...i,
        className: ft(e, t),
        closeLabel: n,
        closeButton: r
    })));
Jv.displayName = "OffcanvasHeader";
const j5 = Jv,
    D5 = kx("h5"),
    ew = F.forwardRef(({
        className: t,
        bsPrefix: e,
        as: n = D5,
        ...r
    }, i) => (e = tn(e, "offcanvas-title"), k.jsx(n, {
        ref: i,
        className: ft(t, e),
        ...r
    })));
ew.displayName = "OffcanvasTitle";
const U5 = ew;

function z5(t) {
    return k.jsx(P5, {
        ...t
    })
}

function F5(t) {
    return k.jsx(Dx, {
        ...t
    })
}
const tw = F.forwardRef(({
    bsPrefix: t,
    className: e,
    children: n,
    "aria-labelledby": r,
    placement: i = "start",
    responsive: o,
    show: s = !1,
    backdrop: a = !0,
    keyboard: l = !0,
    scroll: u = !1,
    onEscapeKeyDown: h,
    onShow: g,
    onHide: w,
    container: C,
    autoFocus: B = !0,
    enforceFocus: I = !0,
    restoreFocus: R = !0,
    restoreFocusOptions: _,
    onEntered: b,
    onExit: v,
    onExiting: O,
    onEnter: D,
    onEntering: N,
    onExited: U,
    backdropClassName: z,
    manager: Z,
    renderStaticNode: Q = !1,
    ...X
}, ce) => {
    const j = F.useRef();
    t = tn(t, "offcanvas");
    const {
        onToggle: c
    } = F.useContext(ds) || {}, [m, S] = F.useState(!1), L = L5(o || "xs", "up");
    F.useEffect(() => {
        S(o ? s && !L : s)
    }, [s, o, L]);
    const E = Xn(() => {
            c == null || c(), w == null || w()
        }),
        x = F.useMemo(() => ({
            onHide: E
        }), [E]);

    function T() {
        return Z || (u ? (j.current || (j.current = new Hv({
            handleContainerOverflow: !1
        })), j.current) : x5())
    }
    const y = (G, ...Y) => {
            G && (G.style.visibility = "visible"), D == null || D(G, ...Y)
        },
        f = (G, ...Y) => {
            G && (G.style.visibility = ""), U == null || U(...Y)
        },
        M = F.useCallback(G => k.jsx("div", {
            ...G,
            className: ft(`${t}-backdrop`, z)
        }), [z, t]),
        q = G => k.jsx("div", {
            ...G,
            ...X,
            className: ft(e, o ? `${t}-${o}` : t, `${t}-${i}`),
            "aria-labelledby": r,
            children: n
        });
    return k.jsxs(k.Fragment, {
        children: [!m && (o || Q) && q({}), k.jsx($v.Provider, {
            value: x,
            children: k.jsx(g5, {
                show: m,
                ref: ce,
                backdrop: a,
                container: C,
                keyboard: l,
                autoFocus: B,
                enforceFocus: I && !u,
                restoreFocus: R,
                restoreFocusOptions: _,
                onEscapeKeyDown: h,
                onShow: g,
                onHide: E,
                onEnter: y,
                onEntering: N,
                onEntered: b,
                onExit: v,
                onExiting: O,
                onExited: f,
                manager: T(),
                transition: z5,
                backdropTransition: F5,
                renderBackdrop: M,
                renderDialog: q
            })
        })]
    })
});
tw.displayName = "Offcanvas";
const W5 = Object.assign(tw, {
        Body: N5,
        Header: j5,
        Title: U5
    }),
    nw = F.forwardRef((t, e) => {
        const n = F.useContext(ds);
        return k.jsx(W5, {
            ref: e,
            show: !!(n != null && n.expanded),
            ...t,
            renderStaticNode: !0
        })
    });
nw.displayName = "NavbarOffcanvas";
const H5 = nw,
    rw = F.forwardRef(({
        className: t,
        bsPrefix: e,
        as: n = "span",
        ...r
    }, i) => (e = tn(e, "navbar-text"), k.jsx(n, {
        ref: i,
        className: ft(t, e),
        ...r
    })));
rw.displayName = "NavbarText";
const $5 = rw,
    iw = F.forwardRef((t, e) => {
        const {
            bsPrefix: n,
            expand: r = !0,
            variant: i = "light",
            bg: o,
            fixed: s,
            sticky: a,
            className: l,
            as: u = "nav",
            expanded: h,
            onToggle: g,
            onSelect: w,
            collapseOnSelect: C = !1,
            ...B
        } = wv(t, {
            expanded: "onToggle"
        }), I = tn(n, "navbar"), R = F.useCallback((...v) => {
            w == null || w(...v), C && h && (g == null || g(!1))
        }, [w, C, h, g]);
        B.role === void 0 && u !== "nav" && (B.role = "navigation");
        let _ = `${I}-expand`;
        typeof r == "string" && (_ = `${_}-${r}`);
        const b = F.useMemo(() => ({
            onToggle: () => g == null ? void 0 : g(!h),
            bsPrefix: I,
            expanded: !!h,
            expand: r
        }), [I, h, r, g]);
        return k.jsx(ds.Provider, {
            value: b,
            children: k.jsx(ru.Provider, {
                value: R,
                children: k.jsx(u, {
                    ref: e,
                    ...B,
                    className: ft(l, I, r && _, i && `${I}-${i}`, o && `bg-${o}`, a && `sticky-${a}`, s && `fixed-${s}`)
                })
            })
        })
    });
iw.displayName = "Navbar";
const tl = Object.assign(iw, {
        Brand: I5,
        Collapse: T5,
        Offcanvas: H5,
        Text: $5,
        Toggle: B5
    }),
    T1 = 1e3;

function K5(t, e, n) {
    const r = (t - e) / (n - e) * 100;
    return Math.round(r * T1) / T1
}

function B1({
    min: t,
    now: e,
    max: n,
    label: r,
    visuallyHidden: i,
    striped: o,
    animated: s,
    className: a,
    style: l,
    variant: u,
    bsPrefix: h,
    ...g
}, w) {
    return k.jsx("div", {
        ref: w,
        ...g,
        role: "progressbar",
        className: ft(a, `${h}-bar`, {
            [`bg-${u}`]: u,
            [`${h}-bar-animated`]: s,
            [`${h}-bar-striped`]: s || o
        }),
        style: {
            width: `${K5(e,t,n)}%`,
            ...l
        },
        "aria-valuenow": e,
        "aria-valuemin": t,
        "aria-valuemax": n,
        children: i ? k.jsx("span", {
            className: "visually-hidden",
            children: r
        }) : r
    })
}
const ow = F.forwardRef(({
    isChild: t = !1,
    ...e
}, n) => {
    const r = {
        min: 0,
        max: 100,
        animated: !1,
        visuallyHidden: !1,
        striped: !1,
        ...e
    };
    if (r.bsPrefix = tn(r.bsPrefix, "progress"), t) return B1(r, n);
    const {
        min: i,
        now: o,
        max: s,
        label: a,
        visuallyHidden: l,
        striped: u,
        animated: h,
        bsPrefix: g,
        variant: w,
        className: C,
        children: B,
        ...I
    } = r;
    return k.jsx("div", {
        ref: n,
        ...I,
        className: ft(C, g),
        children: B ? $x(B, R => F.cloneElement(R, {
            isChild: !0
        })) : B1({
            min: i,
            now: o,
            max: s,
            label: a,
            visuallyHidden: l,
            striped: u,
            animated: h,
            bsPrefix: g,
            variant: w
        }, n)
    })
});
ow.displayName = "ProgressBar";
const q5 = ow,
    sw = F.forwardRef(({
        bsPrefix: t,
        className: e,
        as: n = "div",
        ...r
    }, i) => {
        const o = tn(t, "row"),
            s = xv(),
            a = Ev(),
            l = `${o}-cols`,
            u = [];
        return s.forEach(h => {
            const g = r[h];
            delete r[h];
            let w;
            g != null && typeof g == "object" ? {
                cols: w
            } = g : w = g;
            const C = h !== a ? `-${h}` : "";
            w != null && u.push(`${l}${C}-${w}`)
        }), k.jsx(n, {
            ref: i,
            ...r,
            className: ft(e, o, ...u)
        })
    });
sw.displayName = "Row";
const Jt = sw,
    aw = "assets/site-logo-pWmffSJa.svg";
var ht = {},
    c0 = {},
    ka = {},
    Ca = {},
    lw = "Expected a function",
    R1 = NaN,
    V5 = "[object Symbol]",
    G5 = /^\s+|\s+$/g,
    Z5 = /^[-+]0x[0-9a-f]+$/i,
    Y5 = /^0b[01]+$/i,
    Q5 = /^0o[0-7]+$/i,
    X5 = parseInt,
    J5 = typeof mn == "object" && mn && mn.Object === Object && mn,
    e6 = typeof self == "object" && self && self.Object === Object && self,
    t6 = J5 || e6 || Function("return this")(),
    n6 = Object.prototype,
    r6 = n6.toString,
    i6 = Math.max,
    o6 = Math.min,
    Xc = function() {
        return t6.Date.now()
    };

function s6(t, e, n) {
    var r, i, o, s, a, l, u = 0,
        h = !1,
        g = !1,
        w = !0;
    if (typeof t != "function") throw new TypeError(lw);
    e = M1(e) || 0, iu(n) && (h = !!n.leading, g = "maxWait" in n, o = g ? i6(M1(n.maxWait) || 0, e) : o, w = "trailing" in n ? !!n.trailing : w);

    function C(N) {
        var U = r,
            z = i;
        return r = i = void 0, u = N, s = t.apply(z, U), s
    }

    function B(N) {
        return u = N, a = setTimeout(_, e), h ? C(N) : s
    }

    function I(N) {
        var U = N - l,
            z = N - u,
            Z = e - U;
        return g ? o6(Z, o - z) : Z
    }

    function R(N) {
        var U = N - l,
            z = N - u;
        return l === void 0 || U >= e || U < 0 || g && z >= o
    }

    function _() {
        var N = Xc();
        if (R(N)) return b(N);
        a = setTimeout(_, I(N))
    }

    function b(N) {
        return a = void 0, w && r ? C(N) : (r = i = void 0, s)
    }

    function v() {
        a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0
    }

    function O() {
        return a === void 0 ? s : b(Xc())
    }

    function D() {
        var N = Xc(),
            U = R(N);
        if (r = arguments, i = this, l = N, U) {
            if (a === void 0) return B(l);
            if (g) return a = setTimeout(_, e), C(l)
        }
        return a === void 0 && (a = setTimeout(_, e)), s
    }
    return D.cancel = v, D.flush = O, D
}

function a6(t, e, n) {
    var r = !0,
        i = !0;
    if (typeof t != "function") throw new TypeError(lw);
    return iu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), s6(t, e, {
        leading: r,
        maxWait: e,
        trailing: i
    })
}

function iu(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function")
}

function l6(t) {
    return !!t && typeof t == "object"
}

function u6(t) {
    return typeof t == "symbol" || l6(t) && r6.call(t) == V5
}

function M1(t) {
    if (typeof t == "number") return t;
    if (u6(t)) return R1;
    if (iu(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = iu(e) ? e + "" : e
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = t.replace(G5, "");
    var n = Y5.test(t);
    return n || Q5.test(t) ? X5(t.slice(2), n ? 2 : 8) : Z5.test(t) ? R1 : +t
}
var c6 = a6,
    Aa = {};
Object.defineProperty(Aa, "__esModule", {
    value: !0
});
Aa.addPassiveEventListener = function(e, n, r) {
    var i = r.name;
    i || (i = n, console.warn("Listener must be a named function.")), Cl.has(n) || Cl.set(n, new Set);
    var o = Cl.get(n);
    if (!o.has(i)) {
        var s = function() {
            var a = !1;
            try {
                var l = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                window.addEventListener("test", null, l)
            } catch {}
            return a
        }();
        e.addEventListener(n, r, s ? {
            passive: !0
        } : !1), o.add(i)
    }
};
Aa.removePassiveEventListener = function(e, n, r) {
    e.removeEventListener(n, r), Cl.get(n).delete(r.name || n)
};
var Cl = new Map;
Object.defineProperty(Ca, "__esModule", {
    value: !0
});
var f6 = c6,
    d6 = p6(f6),
    h6 = Aa;

function p6(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var m6 = function(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0, d6.default)(e, n)
    },
    it = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(e, n) {
            if (e) {
                var r = m6(function(i) {
                    it.scrollHandler(e)
                }, n);
                it.scrollSpyContainers.push(e), (0, h6.addPassiveEventListener)(e, "scroll", r)
            }
        },
        isMounted: function(e) {
            return it.scrollSpyContainers.indexOf(e) !== -1
        },
        currentPositionX: function(e) {
            if (e === document) {
                var n = window.pageYOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else return e.scrollLeft
        },
        currentPositionY: function(e) {
            if (e === document) {
                var n = window.pageXOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
            } else return e.scrollTop
        },
        scrollHandler: function(e) {
            var n = it.scrollSpyContainers[it.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
            n.forEach(function(r) {
                return r(it.currentPositionX(e), it.currentPositionY(e))
            })
        },
        addStateHandler: function(e) {
            it.spySetState.push(e)
        },
        addSpyHandler: function(e, n) {
            var r = it.scrollSpyContainers[it.scrollSpyContainers.indexOf(n)];
            r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(e), e(it.currentPositionX(n), it.currentPositionY(n))
        },
        updateStates: function() {
            it.spySetState.forEach(function(e) {
                return e()
            })
        },
        unmount: function(e, n) {
            it.scrollSpyContainers.forEach(function(r) {
                return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
            }), it.spySetState && it.spySetState.length && it.spySetState.indexOf(e) > -1 && it.spySetState.splice(it.spySetState.indexOf(e), 1), document.removeEventListener("scroll", it.scrollHandler)
        },
        update: function() {
            return it.scrollSpyContainers.forEach(function(e) {
                return it.scrollHandler(e)
            })
        }
    };
Ca.default = it;
var hs = {},
    Ia = {};
Object.defineProperty(Ia, "__esModule", {
    value: !0
});
var g6 = function(e, n) {
        var r = e.indexOf("#") === 0 ? e.substring(1) : e,
            i = r ? "#" + r : "",
            o = window && window.location,
            s = i ? o.pathname + o.search + i : o.pathname + o.search;
        n ? history.pushState(history.state, "", s) : history.replaceState(history.state, "", s)
    },
    y6 = function() {
        return window.location.hash.replace(/^#/, "")
    },
    v6 = function(e) {
        return function(n) {
            return e.contains ? e != n && e.contains(n) : !!(e.compareDocumentPosition(n) & 16)
        }
    },
    w6 = function(e) {
        return getComputedStyle(e).position !== "static"
    },
    Jc = function(e, n) {
        for (var r = e.offsetTop, i = e.offsetParent; i && !n(i);) r += i.offsetTop, i = i.offsetParent;
        return {
            offsetTop: r,
            offsetParent: i
        }
    },
    x6 = function(e, n, r) {
        if (r) return e === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? n.offsetLeft : n.offsetLeft - e.offsetLeft;
        if (e === document) return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (w6(e)) {
            if (n.offsetParent !== e) {
                var i = function(h) {
                        return h === e || h === document
                    },
                    o = Jc(n, i),
                    s = o.offsetTop,
                    a = o.offsetParent;
                if (a !== e) throw new Error("Seems containerElement is not an ancestor of the Element");
                return s
            }
            return n.offsetTop
        }
        if (n.offsetParent === e.offsetParent) return n.offsetTop - e.offsetTop;
        var l = function(h) {
            return h === document
        };
        return Jc(n, l).offsetTop - Jc(e, l).offsetTop
    };
Ia.default = {
    updateHash: g6,
    getHash: y6,
    filterElementInContainer: v6,
    scrollOffset: x6
};
var ju = {},
    f0 = {};
Object.defineProperty(f0, "__esModule", {
    value: !0
});
f0.default = {
    defaultEasing: function(e) {
        return e < .5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2
    },
    linear: function(e) {
        return e
    },
    easeInQuad: function(e) {
        return e * e
    },
    easeOutQuad: function(e) {
        return e * (2 - e)
    },
    easeInOutQuad: function(e) {
        return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
    },
    easeInCubic: function(e) {
        return e * e * e
    },
    easeOutCubic: function(e) {
        return --e * e * e + 1
    },
    easeInOutCubic: function(e) {
        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
    },
    easeInQuart: function(e) {
        return e * e * e * e
    },
    easeOutQuart: function(e) {
        return 1 - --e * e * e * e
    },
    easeInOutQuart: function(e) {
        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
    },
    easeInQuint: function(e) {
        return e * e * e * e * e
    },
    easeOutQuint: function(e) {
        return 1 + --e * e * e * e * e
    },
    easeInOutQuint: function(e) {
        return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
    }
};
var d0 = {};
Object.defineProperty(d0, "__esModule", {
    value: !0
});
var E6 = Aa,
    S6 = ["mousedown", "mousewheel", "touchmove", "keydown"];
d0.default = {
    subscribe: function(e) {
        return typeof document < "u" && S6.forEach(function(n) {
            return (0, E6.addPassiveEventListener)(document, n, e)
        })
    }
};
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
    value: !0
});
var Wd = {
    registered: {},
    scrollEvent: {
        register: function(e, n) {
            Wd.registered[e] = n
        },
        remove: function(e) {
            Wd.registered[e] = null
        }
    }
};
Ta.default = Wd;
Object.defineProperty(ju, "__esModule", {
    value: !0
});
var b6 = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    _6 = Ia;
Du(_6);
var k6 = f0,
    L1 = Du(k6),
    C6 = d0,
    A6 = Du(C6),
    I6 = Ta,
    Er = Du(I6);

function Du(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var uw = function(e) {
        return L1.default[e.smooth] || L1.default.defaultEasing
    },
    T6 = function(e) {
        return typeof e == "function" ? e : function() {
            return e
        }
    },
    B6 = function() {
        if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    },
    Hd = function() {
        return B6() || function(t, e, n) {
            window.setTimeout(t, n || 1e3 / 60, new Date().getTime())
        }
    }(),
    cw = function() {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    },
    fw = function(e) {
        var n = e.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollLeft;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft
    },
    dw = function(e) {
        var n = e.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollTop;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop
    },
    R6 = function(e) {
        var n = e.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollWidth - n.offsetWidth;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
    },
    M6 = function(e) {
        var n = e.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollHeight - n.offsetHeight;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
    },
    L6 = function t(e, n, r) {
        var i = n.data;
        if (!n.ignoreCancelEvents && i.cancel) {
            Er.default.registered.end && Er.default.registered.end(i.to, i.target, i.currentPositionY);
            return
        }
        if (i.delta = Math.round(i.targetPosition - i.startPosition), i.start === null && (i.start = r), i.progress = r - i.start, i.percent = i.progress >= i.duration ? 1 : e(i.progress / i.duration), i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent), i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition), i.percent < 1) {
            var o = t.bind(null, e, n);
            Hd.call(window, o);
            return
        }
        Er.default.registered.end && Er.default.registered.end(i.to, i.target, i.currentPosition)
    },
    h0 = function(e) {
        e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null
    },
    Ba = function(e, n, r, i) {
        n.data = n.data || cw(), window.clearTimeout(n.data.delayTimeout);
        var o = function() {
            n.data.cancel = !0
        };
        if (A6.default.subscribe(o), h0(n), n.data.start = null, n.data.cancel = !1, n.data.startPosition = n.horizontal ? fw(n) : dw(n), n.data.targetPosition = n.absolute ? e : e + n.data.startPosition, n.data.startPosition === n.data.targetPosition) {
            Er.default.registered.end && Er.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
            return
        }
        n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition), n.data.duration = T6(n.duration)(n.data.delta), n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration), n.data.to = r, n.data.target = i;
        var s = uw(n),
            a = L6.bind(null, s, n);
        if (n && n.delay > 0) {
            n.data.delayTimeout = window.setTimeout(function() {
                Er.default.registered.begin && Er.default.registered.begin(n.data.to, n.data.target), Hd.call(window, a)
            }, n.delay);
            return
        }
        Er.default.registered.begin && Er.default.registered.begin(n.data.to, n.data.target), Hd.call(window, a)
    },
    Uu = function(e) {
        return e = b6({}, e), e.data = e.data || cw(), e.absolute = !0, e
    },
    N6 = function(e) {
        Ba(0, Uu(e))
    },
    O6 = function(e, n) {
        Ba(e, Uu(n))
    },
    P6 = function(e) {
        e = Uu(e), h0(e), Ba(e.horizontal ? R6(e) : M6(e), e)
    },
    j6 = function(e, n) {
        n = Uu(n), h0(n);
        var r = n.horizontal ? fw(n) : dw(n);
        Ba(e + r, n)
    };
ju.default = {
    animateTopScroll: Ba,
    getAnimationType: uw,
    scrollToTop: N6,
    scrollToBottom: P6,
    scrollTo: O6,
    scrollMore: j6
};
Object.defineProperty(hs, "__esModule", {
    value: !0
});
var D6 = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    U6 = Ia,
    z6 = p0(U6),
    F6 = ju,
    W6 = p0(F6),
    H6 = Ta,
    nl = p0(H6);

function p0(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var rl = {},
    N1 = void 0;
hs.default = {
    unmount: function() {
        rl = {}
    },
    register: function(e, n) {
        rl[e] = n
    },
    unregister: function(e) {
        delete rl[e]
    },
    get: function(e) {
        return rl[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0]
    },
    setActiveLink: function(e) {
        return N1 = e
    },
    getActiveLink: function() {
        return N1
    },
    scrollTo: function(e, n) {
        var r = this.get(e);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = D6({}, n, {
            absolute: !1
        });
        var i = n.containerId,
            o = n.container,
            s = void 0;
        i ? s = document.getElementById(i) : o && o.nodeType ? s = o : s = document, n.absolute = !0;
        var a = n.horizontal,
            l = z6.default.scrollOffset(s, r, a) + (n.offset || 0);
        if (!n.smooth) {
            nl.default.registered.begin && nl.default.registered.begin(e, r), s === document ? n.horizontal ? window.scrollTo(l, 0) : window.scrollTo(0, l) : s.scrollTop = l, nl.default.registered.end && nl.default.registered.end(e, r);
            return
        }
        W6.default.animateTopScroll(l, n, e, r)
    }
};
var zu = {};
Object.defineProperty(zu, "__esModule", {
    value: !0
});
var $6 = Ia,
    ef = K6($6);

function K6(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var q6 = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(e) {
        this.scroller = e, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0
    },
    mapContainer: function(e, n) {
        this.containers[e] = n
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var e = this,
            n = this.getHash();
        n ? window.setTimeout(function() {
            e.scrollTo(n, !0), e.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(e, n) {
        var r = this.scroller,
            i = r.get(e);
        if (i && (n || e !== r.getActiveLink())) {
            var o = this.containers[e] || document;
            r.scrollTo(e, {
                container: o
            })
        }
    },
    getHash: function() {
        return ef.default.getHash()
    },
    changeHash: function(e, n) {
        this.isInitialized() && ef.default.getHash() !== e && ef.default.updateHash(e, n)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange)
    }
};
zu.default = q6;
Object.defineProperty(ka, "__esModule", {
    value: !0
});
var il = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    V6 = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(),
    G6 = F,
    O1 = Ra(G6),
    Z6 = Ca,
    ol = Ra(Z6),
    Y6 = hs,
    Q6 = Ra(Y6),
    X6 = _a,
    Je = Ra(X6),
    J6 = zu,
    ni = Ra(J6);

function Ra(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function eE(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function tE(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function nE(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var P1 = {
    to: Je.default.string.isRequired,
    containerId: Je.default.string,
    container: Je.default.object,
    activeClass: Je.default.string,
    activeStyle: Je.default.object,
    spy: Je.default.bool,
    horizontal: Je.default.bool,
    smooth: Je.default.oneOfType([Je.default.bool, Je.default.string]),
    offset: Je.default.number,
    delay: Je.default.number,
    isDynamic: Je.default.bool,
    onClick: Je.default.func,
    duration: Je.default.oneOfType([Je.default.number, Je.default.func]),
    absolute: Je.default.bool,
    onSetActive: Je.default.func,
    onSetInactive: Je.default.func,
    ignoreCancelEvents: Je.default.bool,
    hashSpy: Je.default.bool,
    saveHashHistory: Je.default.bool,
    spyThrottle: Je.default.number
};
ka.default = function(t, e) {
    var n = e || Q6.default,
        r = function(o) {
            nE(s, o);

            function s(a) {
                eE(this, s);
                var l = tE(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, a));
                return i.call(l), l.state = {
                    active: !1
                }, l
            }
            return V6(s, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var l = this.props.containerId,
                        u = this.props.container;
                    return l && !u ? document.getElementById(l) : u && u.nodeType ? u : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var l = this.getScrollSpyContainer();
                        ol.default.isMounted(l) || ol.default.mount(l, this.props.spyThrottle), this.props.hashSpy && (ni.default.isMounted() || ni.default.mount(n), ni.default.mapContainer(this.props.to, l)), ol.default.addSpyHandler(this.spyHandler, l), this.setState({
                            container: l
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    ol.default.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var l = "";
                    this.state && this.state.active ? l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : l = this.props.className;
                    var u = {};
                    this.state && this.state.active ? u = il({}, this.props.style, this.props.activeStyle) : u = il({}, this.props.style);
                    var h = il({}, this.props);
                    for (var g in P1) h.hasOwnProperty(g) && delete h[g];
                    return h.className = l, h.style = u, h.onClick = this.handleClick, O1.default.createElement(t, h)
                }
            }]), s
        }(O1.default.PureComponent),
        i = function() {
            var s = this;
            this.scrollTo = function(a, l) {
                n.scrollTo(a, il({}, s.state, l))
            }, this.handleClick = function(a) {
                s.props.onClick && s.props.onClick(a), a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), s.scrollTo(s.props.to, s.props)
            }, this.spyHandler = function(a, l) {
                var u = s.getScrollSpyContainer();
                if (!(ni.default.isMounted() && !ni.default.isInitialized())) {
                    var h = s.props.horizontal,
                        g = s.props.to,
                        w = null,
                        C = void 0,
                        B = void 0;
                    if (h) {
                        var I = 0,
                            R = 0,
                            _ = 0;
                        if (u.getBoundingClientRect) {
                            var b = u.getBoundingClientRect();
                            _ = b.left
                        }
                        if (!w || s.props.isDynamic) {
                            if (w = n.get(g), !w) return;
                            var v = w.getBoundingClientRect();
                            I = v.left - _ + a, R = I + v.width
                        }
                        var O = a - s.props.offset;
                        C = O >= Math.floor(I) && O < Math.floor(R), B = O < Math.floor(I) || O >= Math.floor(R)
                    } else {
                        var D = 0,
                            N = 0,
                            U = 0;
                        if (u.getBoundingClientRect) {
                            var z = u.getBoundingClientRect();
                            U = z.top
                        }
                        if (!w || s.props.isDynamic) {
                            if (w = n.get(g), !w) return;
                            var Z = w.getBoundingClientRect();
                            D = Z.top - U + l, N = D + Z.height
                        }
                        var Q = l - s.props.offset;
                        C = Q >= Math.floor(D) && Q < Math.floor(N), B = Q < Math.floor(D) || Q >= Math.floor(N)
                    }
                    var X = n.getActiveLink();
                    if (B) {
                        if (g === X && n.setActiveLink(void 0), s.props.hashSpy && ni.default.getHash() === g) {
                            var ce = s.props.saveHashHistory,
                                j = ce === void 0 ? !1 : ce;
                            ni.default.changeHash("", j)
                        }
                        s.props.spy && s.state.active && (s.setState({
                            active: !1
                        }), s.props.onSetInactive && s.props.onSetInactive(g, w))
                    }
                    if (C && (X !== g || s.state.active === !1)) {
                        n.setActiveLink(g);
                        var c = s.props.saveHashHistory,
                            m = c === void 0 ? !1 : c;
                        s.props.hashSpy && ni.default.changeHash(g, m), s.props.spy && (s.setState({
                            active: !0
                        }), s.props.onSetActive && s.props.onSetActive(g, w))
                    }
                }
            }
        };
    return r.propTypes = P1, r.defaultProps = {
        offset: 0
    }, r
};
Object.defineProperty(c0, "__esModule", {
    value: !0
});
var rE = F,
    j1 = hw(rE),
    iE = ka,
    oE = hw(iE);

function hw(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function sE(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function D1(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function aE(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var lE = function(t) {
    aE(e, t);

    function e() {
        var n, r, i, o;
        sE(this, e);
        for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l];
        return o = (r = (i = D1(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(a))), i), i.render = function() {
            return j1.default.createElement("a", i.props, i.props.children)
        }, r), D1(i, o)
    }
    return e
}(j1.default.Component);
c0.default = (0, oE.default)(lE);
var m0 = {};
Object.defineProperty(m0, "__esModule", {
    value: !0
});
var uE = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(),
    cE = F,
    U1 = pw(cE),
    fE = ka,
    dE = pw(fE);

function pw(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function hE(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function pE(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function mE(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var gE = function(t) {
    mE(e, t);

    function e() {
        return hE(this, e), pE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return uE(e, [{
        key: "render",
        value: function() {
            return U1.default.createElement("button", this.props, this.props.children)
        }
    }]), e
}(U1.default.Component);
m0.default = (0, dE.default)(gE);
var g0 = {},
    Fu = {};
Object.defineProperty(Fu, "__esModule", {
    value: !0
});
var yE = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    vE = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(),
    wE = F,
    z1 = Wu(wE),
    xE = Lu;
Wu(xE);
var EE = hs,
    F1 = Wu(EE),
    SE = _a,
    W1 = Wu(SE);

function Wu(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function bE(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _E(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function kE(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
Fu.default = function(t) {
    var e = function(n) {
        kE(r, n);

        function r(i) {
            bE(this, r);
            var o = _E(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return o.childBindings = {
                domNode: null
            }, o
        }
        return vE(r, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(o) {
                this.props.name !== o.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u") return !1;
                F1.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(o) {
                F1.default.register(o, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return z1.default.createElement(t, yE({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]), r
    }(z1.default.Component);
    return e.propTypes = {
        name: W1.default.string,
        id: W1.default.string
    }, e
};
Object.defineProperty(g0, "__esModule", {
    value: !0
});
var H1 = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    CE = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(),
    AE = F,
    $1 = y0(AE),
    IE = Fu,
    TE = y0(IE),
    BE = _a,
    K1 = y0(BE);

function y0(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function RE(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function ME(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function LE(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var mw = function(t) {
    LE(e, t);

    function e() {
        return RE(this, e), ME(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return CE(e, [{
        key: "render",
        value: function() {
            var r = this,
                i = H1({}, this.props);
            return delete i.name, i.parentBindings && delete i.parentBindings, $1.default.createElement("div", H1({}, i, {
                ref: function(s) {
                    r.props.parentBindings.domNode = s
                }
            }), this.props.children)
        }
    }]), e
}($1.default.Component);
mw.propTypes = {
    name: K1.default.string,
    id: K1.default.string
};
g0.default = (0, TE.default)(mw);
var tf = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    },
    q1 = function() {
        function t(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }();

function V1(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function G1(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t
}

function Z1(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
var sl = F,
    Pi = Ca,
    nf = hs,
    ot = _a,
    ri = zu,
    Y1 = {
        to: ot.string.isRequired,
        containerId: ot.string,
        container: ot.object,
        activeClass: ot.string,
        spy: ot.bool,
        smooth: ot.oneOfType([ot.bool, ot.string]),
        offset: ot.number,
        delay: ot.number,
        isDynamic: ot.bool,
        onClick: ot.func,
        duration: ot.oneOfType([ot.number, ot.func]),
        absolute: ot.bool,
        onSetActive: ot.func,
        onSetInactive: ot.func,
        ignoreCancelEvents: ot.bool,
        hashSpy: ot.bool,
        spyThrottle: ot.number
    },
    NE = {
        Scroll: function(e, n) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var r = n || nf,
                i = function(s) {
                    Z1(a, s);

                    function a(l) {
                        V1(this, a);
                        var u = G1(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
                        return o.call(u), u.state = {
                            active: !1
                        }, u
                    }
                    return q1(a, [{
                        key: "getScrollSpyContainer",
                        value: function() {
                            var u = this.props.containerId,
                                h = this.props.container;
                            return u ? document.getElementById(u) : h && h.nodeType ? h : document
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (this.props.spy || this.props.hashSpy) {
                                var u = this.getScrollSpyContainer();
                                Pi.isMounted(u) || Pi.mount(u, this.props.spyThrottle), this.props.hashSpy && (ri.isMounted() || ri.mount(r), ri.mapContainer(this.props.to, u)), this.props.spy && Pi.addStateHandler(this.stateHandler), Pi.addSpyHandler(this.spyHandler, u), this.setState({
                                    container: u
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Pi.unmount(this.stateHandler, this.spyHandler)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var u = "";
                            this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                            var h = tf({}, this.props);
                            for (var g in Y1) h.hasOwnProperty(g) && delete h[g];
                            return h.className = u, h.onClick = this.handleClick, sl.createElement(e, h)
                        }
                    }]), a
                }(sl.Component),
                o = function() {
                    var a = this;
                    this.scrollTo = function(l, u) {
                        r.scrollTo(l, tf({}, a.state, u))
                    }, this.handleClick = function(l) {
                        a.props.onClick && a.props.onClick(l), l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault(), a.scrollTo(a.props.to, a.props)
                    }, this.stateHandler = function() {
                        r.getActiveLink() !== a.props.to && (a.state !== null && a.state.active && a.props.onSetInactive && a.props.onSetInactive(), a.setState({
                            active: !1
                        }))
                    }, this.spyHandler = function(l) {
                        var u = a.getScrollSpyContainer();
                        if (!(ri.isMounted() && !ri.isInitialized())) {
                            var h = a.props.to,
                                g = null,
                                w = 0,
                                C = 0,
                                B = 0;
                            if (u.getBoundingClientRect) {
                                var I = u.getBoundingClientRect();
                                B = I.top
                            }
                            if (!g || a.props.isDynamic) {
                                if (g = r.get(h), !g) return;
                                var R = g.getBoundingClientRect();
                                w = R.top - B + l, C = w + R.height
                            }
                            var _ = l - a.props.offset,
                                b = _ >= Math.floor(w) && _ < Math.floor(C),
                                v = _ < Math.floor(w) || _ >= Math.floor(C),
                                O = r.getActiveLink();
                            if (v) return h === O && r.setActiveLink(void 0), a.props.hashSpy && ri.getHash() === h && ri.changeHash(), a.props.spy && a.state.active && (a.setState({
                                active: !1
                            }), a.props.onSetInactive && a.props.onSetInactive()), Pi.updateStates();
                            if (b && O !== h) return r.setActiveLink(h), a.props.hashSpy && ri.changeHash(h), a.props.spy && (a.setState({
                                active: !0
                            }), a.props.onSetActive && a.props.onSetActive(h)), Pi.updateStates()
                        }
                    }
                };
            return i.propTypes = Y1, i.defaultProps = {
                offset: 0
            }, i
        },
        Element: function(e) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var n = function(r) {
                Z1(i, r);

                function i(o) {
                    V1(this, i);
                    var s = G1(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o));
                    return s.childBindings = {
                        domNode: null
                    }, s
                }
                return q1(i, [{
                    key: "componentDidMount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(s) {
                        this.props.name !== s.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        nf.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function(s) {
                        nf.register(s, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return sl.createElement(e, tf({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]), i
            }(sl.Component);
            return n.propTypes = {
                name: ot.string,
                id: ot.string
            }, n
        }
    },
    OE = NE;
Object.defineProperty(ht, "__esModule", {
    value: !0
});
ht.Helpers = ht.ScrollElement = ht.ScrollLink = ht.animateScroll = ht.scrollSpy = ht.Events = ht.scroller = ht.Element = ht.Button = bo = ht.Link = void 0;
var PE = c0,
    gw = Br(PE),
    jE = m0,
    yw = Br(jE),
    DE = g0,
    vw = Br(DE),
    UE = hs,
    ww = Br(UE),
    zE = Ta,
    xw = Br(zE),
    FE = Ca,
    Ew = Br(FE),
    WE = ju,
    Sw = Br(WE),
    HE = ka,
    bw = Br(HE),
    $E = Fu,
    _w = Br($E),
    KE = OE,
    kw = Br(KE);

function Br(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
var bo = ht.Link = gw.default;
ht.Button = yw.default;
ht.Element = vw.default;
ht.scroller = ww.default;
ht.Events = xw.default;
ht.scrollSpy = Ew.default;
ht.animateScroll = Sw.default;
ht.ScrollLink = bw.default;
ht.ScrollElement = _w.default;
ht.Helpers = kw.default;
ht.default = {
    Link: gw.default,
    Button: yw.default,
    Element: vw.default,
    scroller: ww.default,
    Events: xw.default,
    scrollSpy: Ew.default,
    animateScroll: Sw.default,
    ScrollLink: bw.default,
    ScrollElement: _w.default,
    Helpers: kw.default
};

function qE() {
    return k.jsx("header", {
        className: "heading",
        children: k.jsx(tl, {
            collapseOnSelect: !0,
            expand: "lg",
            children: k.jsxs(vn, {
                children: [k.jsx(tl.Brand, {
                    href: "/",
                    children: k.jsx("img", {
                        src: aw,
                        alt: ""
                    })
                }), k.jsx(tl.Toggle, {
                    "aria-controls": "responsive-navbar-nav"
                }), k.jsxs(tl.Collapse, {
                    id: "responsive-navbar-nav",
                    children: [k.jsxs(A5, {
                        className: "mx-auto",
                        children: [k.jsx(bo, {
                            to: "hero",
                            spy: !0,
                            smooth: !0,
                            offset: 50,
                            duration: 500,
                            children: "Home"
                        }), k.jsx(bo, {
                            to: "about",
                            spy: !0,
                            smooth: !0,
                            offset: -100,
                            duration: 500,
                            children: "About"
                        }), k.jsx(bo, {
                            to: "tokenomics",
                            spy: !0,
                            smooth: !0,
                            offset: -100,
                            duration: 500,
                            children: "Tokenomics"
                        }), k.jsx(bo, {
                            to: "howtobuy",
                            spy: !0,
                            smooth: !0,
                            offset: -100,
                            duration: 500,
                            children: "How to buy"
                        }), k.jsx(bo, {
                            to: "roadmap",
                            spy: !0,
                            smooth: !0,
                            offset: -100,
                            duration: 500,
                            children: "Roadmap"
                        })]
                    }), k.jsx("a", {
                        href: "#presale_coundDown_box",
                        className: "inline__btn",
                        children: "BUY NOW"
                    })]
                })]
            })
        })
    })
}
const VE = "data:image/svg+xml,%3csvg%20width='400'%20height='38'%20viewBox='0%200%20400%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2019.2939H399'%20stroke='%239AD2EB'%20stroke-width='2'%20stroke-linecap='round'/%3e%3ccircle%20cx='200'%20cy='18.7939'%20r='17.5'%20transform='rotate(90%20200%2018.7939)'%20fill='%2336A4D7'%20stroke='%239AD2EB'%20stroke-width='2'/%3e%3cpath%20d='M200.123%2012.6167C200.123%2012.9379%20200.384%2013.1986%20200.705%2013.1986C201.866%2013.1986%20202.847%2014.2199%20202.847%2015.4291V23.7699L201.777%2022.8266C201.536%2022.6143%20201.169%2022.6368%20200.956%2022.8779C200.858%2022.9879%20200.81%2023.1258%20200.81%2023.262C200.81%2023.423%20200.876%2023.5838%20201.007%2023.6984L203.044%2025.4954C203.263%2025.6892%20203.593%2025.6892%20203.813%2025.4954L205.85%2023.6984C206.091%2023.486%20206.114%2023.1177%20205.901%2022.8767C205.688%2022.636%20205.321%2022.6127%20205.08%2022.8255L204.01%2023.77V15.4285C204.01%2013.5885%20202.496%2012.0342%20200.705%2012.0342C200.384%2012.0348%20200.123%2012.2955%20200.123%2012.6167Z'%20fill='%23FED41D'/%3e%3cpath%20d='M199.861%2025.0587C199.861%2024.7375%20199.705%2024.4768%20199.384%2024.4768C198.223%2024.4768%20197.347%2023.4561%20197.347%2022.2468V13.9055L198.312%2014.8488C198.553%2015.0618%20198.869%2015.0385%20199.082%2014.7976C199.179%2014.687%20199.201%2014.5497%20199.201%2014.4129C199.201%2014.2517%20199.121%2014.0911%20198.991%2013.9759L196.948%2012.1795C196.728%2011.9857%20196.394%2011.9857%20196.174%2012.1795L194.136%2013.9759C193.894%2014.1889%20193.871%2014.5567%20194.083%2014.7976C194.297%2015.0385%20194.768%2015.0618%20195.009%2014.8488L196.184%2013.9055V22.2468C196.184%2024.0869%20197.594%2025.6412%20199.385%2025.6412C199.705%2025.6406%20199.861%2025.3811%20199.861%2025.0587Z'%20fill='%23FED41D'/%3e%3c/svg%3e",
    Q1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcUAAABlCAMAAAALdAjsAAABGlBMVEUAAAD///////////////////////////////////9Ytuf///////9Ym99eyu7///////////////9Yx+dYl99ZnOJcy+tey+5YneNanuJdy+5ZneJXneJamt9ZnN9dy+1YnuJYneBayupey+5Zn+JZnOJdyu3///9dy+5cuepdyuxczOxeyu1Ym+Feye3y+Pyi2e/o8vj///9ey+1bsOfs9Pr////H3u5ey+5ZneKs2e7O4vB40O653O74+/3V5vLx9/vq8/mf1+5dwOyF0+5btelar+drze5dx+3f7PXL4O+S1e5cuupaoeRlzO5aqOX7/f7n8Pjc6vR/0e6L0+7Z6PPj7vaz2u7A3e6l2O6Z1u5xzu7R5PHu9frw8ZhgAAAANnRSTlMA3yC/EO/Pn0BgEI9/QN9wMK9QICBwQO+/77/fkDBQoJ9gMM/Pr3Bvr+9gUJCAgO/Xz5CA37+kyChAAAAIc0lEQVR42uzcUXLjIAwGYAQCwcAMxpfoDXT/o2062Wm328bj2EknSPqe8paHf4QAy3YTwKX0SiNcDGolo3smXEr7+29UW8mLM+dg7pQi/y+GWrJ7PF/qAP4mjbZalsf4TsBbEpXlcf+21hB5QwwtO3MPLBR5jxjqiucLfgDvErrV5E7YA98lUfGHE7yW4H5QrSRPRLgNxt1J4loTHwHVO3Obb5GPAyoL7m+DfEKwgrzFE58Go/bNDSXmUinxaVCc2crwvBg+u5f3/uPnP9sYy/EJsEV+rEjZLytFvggl+9yAHyxYf/ziLfKUyHL8kAPPCroz77DyzMDK8WKddDH9VNEph4PnB8rv5TKwCM0p9sZSDL2r6tzbGtvkvENiSXTGiIlliQr3OOJCVBmjvBCZo7ZFVVZPVNobG8sEmg4chaUaTg0//dXpbXqecQi5dvuZlokcqU1RVWv0LFt1CqDo9VTLmirzpKjs1Ci7KV4l6a1RQ4jiY9QRouwYJ592s94oachG8SgOlnlHh4+BLqoe/dqrtgivQMQXAS75URJ89f0TSV93wKXXoD6/r1n2PNPOFXOVOI/xCDDKHM0yWwluSy8fJDaLcPbXHi1DATnO+kLwLkpy9DqPhMfBCz6HXFRdrwm9pCu2ms4/3CF3wPS5yL0QOW+T/jZ6nescLc9+/7B3BrsNwjAYLrSjICrR8RI7TruEQyQ7OSanJFJyou//GmvLtK3busIGTUD5bkhYkfhlxcZO/Inl1ZOjiAuQMYq4ABmjiP8l85//L7+99AoLatJJYwlqDB7q1TDiD5sg2a2GEH9/B8qgy+RiXBMqfmKcfaxhdMz4Bus6ajg+ydNtf4w1/RmwvVfLY76NGk7Iupg6ztnku9jhNj1ZWaeraUiL2GV6R5LHKh/XA/dF+ejVBeGgTUubIxQFI0NQzy/PQIbAtKHyuJRsrTsA8cm6rPLNOActEuITddRPNpegZqqXLRN4tm0N7ycHaPN1sRYFI/7ophPuN3/yvroqt1lCvKKAC2yu0ArOGIC6bu1QXhiYX4QEAMZPkv8MNZoB8cpDti53dZ72DWDCOCWjNDb9oBTRGvr+LFFozs0PiqDm3NlPb1pjkVLZcx0HJABuT5vcVAEk8ycXtLQJEYnCu1Me+XUCZO43hOmCGAxTv0strTsw4pesCG3YE3DtnLCymRUonHOcKeKJpAimPx+4wJmp95XWak9SJoXvSiEAd6ZtFoOfHXObTjPsCbRB+y07U6xL+yTtmLn7XYe+cU403TcfVUzYUfPPjxFXaUJGQjn82DQ4Z5xzdwrmw49YpkJSRCP0+Vvo962fGiBjUY08FAFeubvb1YRhKAzAYifzx2AfF9OENJlpKAQXCJ2JtEnp/d/GMCC44SSNpxD7XMAx+PKatlq7X2zF4O2gCrlZA94p0457lC+G8rOrYQpZgP2LN9+hLHXeKOKNxtqIDJOsQILcglSRZ/pJ2guJLxmH8nOo2/JOxbRd8ZEiRL2n+C8pUIaOY3mf9eqpTBcuWc+sc+LEEcJQPOKpxkF6joyR82v3aC4gx6yvq22ZquUH6Boy521zYiiVA6V0+JWFHpou5s23Gv9PRmyQvaISXwprkZTS5sQqR1CQx7HOc+K2GL75A9WH+kSg4laEKmaGbsitGTZuHdZ1KIC8lFemKBJSbMd9BVxBK/EEemDXhhBvBxxLGkWuhtBMW4oBLuXXMaGTxeqjjNTWnPMxdBAY0Xgqar0QJBDCq8ZIjRMMtLHqPMgJYc30MQpBq47fI+c8Ps736CfNjBWaQyelxI9Ny0GhWcT+uOAl4kxjxrP6XuFlMAzNoarLCJu3qFufPg+hNoTBRuisxovx06657KYNRGHY4LaQUUya+n4DzE1cozRpJYziTcwYSzadBUg05P3fo+PBERmEwbERaaR8C9hg8+t8Z8ZnENPH1Wmrs5oQj8fPkuyX+P/CpUKS5kKBZX/fLoNg+UAeJAv8HJlkOT85jrOaYOJrJ/sGGtl3Qwh7nudBGLr++BS4CHpwfApIOC8Otyfd9lc+ZxKxcpwM8hz8oA+m5IQ1w2UPbn+y7LfC1yQ/7NV3Zkv58hp/OOIby5ZKl1cX5WIxkhzD8w1JkvDLjSaTEW/190COAB+qHjAL8jajR4/nRbBejml7fi/steojixMEhhEEkxMV254j5MEwj0zfQ3Mbg7wwVydAj9xINyxTEAADBK4qGsoviGXS8RaPwZI+MM1mmzosNm/BGttN7PT1c1SNyrDfiKrd4HmwNVAslssXl3clln0RdX33AxvKyGDYbZLWe1gEKycimu/WATaWZVLpeWqrLlYFZhdONHSiAGZcln6I7Bfm0B1nvIkXNYKKIwJmB8BVDaWFMnTIH+x2GgSPT2TJYp6mC1K7Srd2A5hz0eh3K+MToHWwv2S4eiwB9VKZpItPM0fQzXgPxTpQWcCJXXmcH1m7lwBzdqRazvBah0qdVCPdJqDUm6sPkb2fuZe6GdxYoWrgPjvKoJavqeVmHzDvBWgMbrrNTLGJwnRYLdW2026ubhg7TPJ4fEX6LnxRqI9Sp5SyiZS1YV/imfcHDMjIQ6hsOJK89ubOM6uGvtGAoaYVaojc2Uf1usgB0zIUmwJ5+0dgF6I5xia0RZMKmUdkUnUq9/+Dv1fwPA9ot7wkdWqapjVfB5ebtU7G7R/U9a0IFUUTf+hifDfSh+Y2hRoJpLpAsWkQIkcG38XXhyGkOkBVzIwDQ2eoNccxcgXT1LRuZyDxtC9A6vURAbmDm2K7ZadAHYl7vskaKakuVgwuZ84Pq+h8CJzYVnQ7mRalkIJrH9LXauNR5rP8ZwRELlWbRtcVvJEe7gHLUBR915/eNiyB+eSdEEwuRnjbKhIELsb88MvvHzQ/v63ay5nnAAAAAElFTkSuQmCC",
    X1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAaCAMAAACzZpNGAAAA/FBMVEUAAAD///////9dyuz///////////////////////////////////////9Ynd////9dzO3///9amt+l2O5ZouRdyOxZm+FZn+BYnuD///9ao+NdvetZouReyu1Ym+Fgz+9Qn99dxO1dy+5XnOFsze1eye1ayurw9vvG3u560O5eyO3Q6fZdwexdvupaquXM6PV/0e52z+77/P5czOxcy+v////H3u5ey+6s2e653O7x9/vP4/HV5vLA3e73+v1btun7/f7a6fSz2u7s9PnL4O940O5dwexaqebj7vae1+5lzO5ZnuPn8Pjf7PWl2O6L0+5/0e5szu5asOeF0u7TEWLnAAAANXRSTlMA3+9gcI8gn2DPv38Qr2BQn0Aw38NwcFBAMCDv35CAEBDfv5CAgDDv7+/v39/f38/Pz79QQHSq054AAAISSURBVEjHrNJBCsQwCIXhKpq0JhKy7EHe/a82q4EyhaE1flsXPw/cnpnixMDhMvvPqU+pxODD29zSFGVcmI7yvQw1XFAtKcVeccdezSvjLqMqjHdIVpOK93Q1GVFXkg0xEk8WRJ3R5EmIohKZOMSwwtt4M7aLMTKw7Q/3DkYe2uO/GtcSkvlRRT79+zyf2spEN0EgCKDgUcE21HjX++59t4K7CKJSQBQB//9fOhBBIgRjmr4EwszO8nYgm70kv/8DkrqI1N1QaTpu3kxYqCqa+bGwEA5jSFXXKFZLp6ngyXt1naETJ3Qbfjl2wTwv8XA5IZYkN8JjlzuswjriSNAZylVSibDEbUdACC3WG4zH54D5zRoBgv+i8OahQlnEw0yMl+NYppP5KbuzWv424gAgj4SbCNcEmHMcN/WF3JZl2dVu4iecYaiaRqgldNQpcXgW0FoKC6eauWI9TIPjDG0r+wl5q4FMM/2EJWth71JaoMCfJlI03BMk+fFaKHBzT7TvDPoB4UP3uf7DHhORqT91nezOcNqeAJ50bhQKj1na/abZFBGk/TV4N2XLAo9Hr1SpEUC1/2IHLKKt67oiBnx2sZXvQGG+Wuod0itLlu/fBp9tIpZR0qE0bOZyzVKwtsYUG4oo1kVb0Yv9Sr7SauiKIgJKo1iuBSuTMDk3TLqMiD/SqTLlMsPk92G1wrTKDPR3Fr8UTX6NRjdvsAAAAABJRU5ErkJggg==",
    GE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAABPCAMAAAD7lcPKAAABUFBMVEUAAAD///////////////////////////////9cy+v///////9YnOL///////9YnuL///////9eye1anuP///9YneJamt9fyu5ZneFYneBax+lYmt9dyuxZnN9Qn99XnOFfzO5bsehZnOFdyu1byuxYm99ayupZneJdyu5ZnOL///9cs+deyO3///9areZdyO5dy+1ar+Vgz+/s9PpdwuxbsueJ0+5dxeyS1O1ey+1Zr+Z4zuxyz+70+PyL0u5csuharebx9flcv+u74+/////H3u5ey+5ZneLc6vTV5vK63O540O6F0+6f1+6s2e7Q4/Hq8/nn8Pj7/f73+v3x9/tdwOxbtunj7vbL4O9rze6z2u6L0+5aoeTt9frZ6POS1e5arefA3e6l2O6Z1u5eyO1xzu5dxe1lzO5aqOXf7PV/0e5apeRbsedcvOpcuurG6/fXV/ciAAAARHRSTlMA30AQ7yBgn79Aj3C/UDCff8+A76+AMN9wYCAgYFAQkO/vz59QQDDfv6+Av5Bv369wYBDv78/F16CAcGDv39+vr4CAQO3J4xYAAAfhSURBVHja7NtdisIwEMDxyeSThAQDPUVhbzH3P9MqlbW7dNVahUwmvycfxJc/zXTUgnS6oDtDtPBGtmTnXMaiYdjDujgpQzd1SqgPR8bk6+9PnXOB4SGNp2Bok3q9jMY0Kdpkwoww/E+nYOi+GrPdfdlVeiA4C8N2EXqO8q48GSR5RYvRZT+caJdzGIS7ivOGdvFjwKxhoBeoMM3Zbh1Ys6+KXhDGeFklOUB5BACM3s/LC0MH+HGIXehIRxn1U2gpMrIc82WoMcqBbBioQUr0xRKpUSeQylZqltSLBZubJmtK5N3xFzUugTgnap64wcKgibgqLJoIq5KJCUF7pG36vmvNiLkz1orYUFJ+ym92j98SQQRHrIhYIi2jw0vMAdbk98L3BOgeq4EiZKwwbNL7DmnZnV2L0O+6ok9slsa/lOtx3FtME9skF2ZK2E8Ym5OvrHvcGOCvuBg6yXEFvOns++rBPwrjmd5rFOupU8BWe396FB+F64LYcxRuXwJ/Poou2TnUj99S4Go0+WgUe3vW0oSYt8qU5Ovq4UENb1f6bvLNzrnsNgwCUVS2VRM5SpR8S9bdpdLMiqeEN3jv//+BQtJI5OXiJGDq9C6tEZJ1PAMeLoyDUm2uKvmWrNZ+gtxoc5Dy1UzmO8Uf9ZK/ApsyG7KsSXG3/fnPJA6Ussjj4NJq9kzCoTSZ2Muzd2yng1Jt87CXV39yT3GsQpnkYc7M+QBQcigkD29TOfOl8EmBdTwHb1Oex0ljKKlTmjxzp8p7VK6D0haNpnpwK6uZ/zrY0+9b3y8tGgUZawz4qMmbzCQhUKo6khPB3Ui2DuPRxPemSMMBrYDLgGjxqUTIoKcxldw/oKl2WhdDWKo03hTBgX55oh2TQ+Gmp4ew3gyAcUDai1HFfpym641v7hiF3L2O8aW0B8RTiwBac2aUkjvmxLWRlohCPwyZHUMyG+hkpFQuUANQD4gPRo9JmcmYXFMpmzSThzQuQ5KLAleBKTPlfkWT2pgiGXef8oRqsXOJN6jbUOpU68/FR5qWllAcOrQ4MlGLiEN5M23PryjjGlNOtSpT0Ttpc0mkTPybVtTrJ4wpQmltxNkTowGxA6eOZovDF0WEgxC749v4PJZNWCtDsh6gP8s+wXbqLITbCJegMaV+1p7Ya860zqpCfbd3Zs1pQlEAvplusbVDJwwqMdG4m4mTrfsyXSfSohBtK6lgBUHRuPX/v/VcSBVFFGIyjZ1+j8TDXT7OPYcxk1yeHydfzL7nkds+9Ou3cv10QjE+Hs++GHf7fF4H2fjSj3HLAfl5PUCP+q+Clay7TQ/Y7MtwWsdV7WqN1P9KToiqyGrFLseeXCuO35V8PauXv3//WSrjXFj+XMAtB+a8DK9lpc/10jJGzv6KEVZu5/9Q4E6uEfRgppGSx7Ohwamy6ini9Pzb5Wr72d+p3jwosVKVry9d0JpzAbXTYDEcp/Ks9SonmfPUrJ8VVY7jWaDhNPZp6ZtXI4+XLSSsyAMqB3PjtGLBoCjJ6twdbmhd08iUlsa8GE6Tit0CpqtxPB4QI7pRieyF3MmIVqzmx7Q4sQGSRE6yXi1oxrAsX7Ssol2QWCcvP90L+VmGmrYELF6AI05zZOVWte05SGpBjAOtLieezAWtW5Z9PmdFsKAlAIezH6uS2zKyXIrwBRfTL8hTa1Y1qbUwSNL4KTMcWFxEtTBHjPGrv/AH3B/A/yr69Hrr9YtnkirCmSOqOP0wRn7DKJXniY/JoyNqLzZo2saodHqCbr8q7L97dXT0Kpd9Aj/sSl18L0CS4QDEo/DcrwU2yp+BJdsMkZfy7mjD/Ey6LU8PYdUS2HYZI/O8kxQ7vlx2Jz9FMOdDfwjTcVKpjMU0B50ag+kJlXGELnQyVGoUtLl1kJ9i53nicPPu/AS5gqLOFvI3ltbs0w/NJu0zSG4AidyhD00RIOJkTekLQl8BIXFqO4IC2wTJ1HqKIAhKp5bxhyJokuPkRiIB99vymRwjzMM151cjfGSJ4jJGGiok+Q2mWuQbzlK8AxaoKEEQVCg1yqFtisJX6EAEuebW9Pcot9fW1tfv3bv/4cWzZ2+DwJtCUdbUxXKgNzQbK1nW8FrZqYqgV4ax/b29p/uKIgwg1b3T7Hc6wqUCnwwFJbaPR48Np4ZuSQ389GiyDFNXcYOGbgR3Ht41gMJ25xaysZnMGi2oxo/NgAC8+8VutepUH0ZKmkMh9pQIbYcjyCQQ2o0zZE8Z6nkP6B3GoOclCgZXajUmsxsKIJNIYDv0fi8mDPSRltZkvUCrQjq5YZiBXqEKHjywkwAdyEaEzuANVoSKq60d9HvMiF5/4CpfKv0YLrdxOMptBFLUQXD0ydWUYpDMBvPe2IEOxZEAvcsANWWRl2GHsdEZLjRSYwA/HUCO+BLBlZdykTIHLtUEX/rQAsJRwk9iL0IFmPX4PxGUcY6Qfr9Fy+wsa8KNBgJugMg4EU2hBfhywdWXYhaZDczWBYfQIk638cGDl2nXLUtmtM9CRdcv7qQPcG9ZG/uI0mGzwYlijyZkL9aHmAsdul4RRknlT7l+zg6zO6svxckVYDbz6WPkCaj8JGOhBjKskASNJqCJDDMZYI3HdT2MPHHsM0hvAug/f4iEU1TUz8wAv3PZoeOMHTIepVLQ5f3nSoHXL2LXb0IQUYqG1s2BcIqmopYPh+B8uwp+A3FK+du393oHAAAAAElFTkSuQmCC",
    ZE = "assets/sol-xcaZWdJn.svg",
    YE = "assets/bart_logo-cMvGX1qV.svg",
    J1 = "assets/hero-m-img-u8DEVD4-.png";
var xe = {},
    Hu = {};
Hu.byteLength = JE;
Hu.toByteArray = tS;
Hu.fromByteArray = iS;
var br = [],
    Vn = [],
    QE = typeof Uint8Array < "u" ? Uint8Array : Array,
    rf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2b/index.html";
for (var Eo = 0, XE = rf.length; Eo < XE; ++Eo) br[Eo] = rf[Eo], Vn[rf.charCodeAt(Eo)] = Eo;
Vn[45] = 62;
Vn[95] = 63;

function Cw(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("=");
    n === -1 && (n = e);
    var r = n === e ? 0 : 4 - n % 4;
    return [n, r]
}

function JE(t) {
    var e = Cw(t),
        n = e[0],
        r = e[1];
    return (n + r) * 3 / 4 - r
}

function eS(t, e, n) {
    return (e + n) * 3 / 4 - n
}

function tS(t) {
    var e, n = Cw(t),
        r = n[0],
        i = n[1],
        o = new QE(eS(t, r, i)),
        s = 0,
        a = i > 0 ? r - 4 : r,
        l;
    for (l = 0; l < a; l += 4) e = Vn[t.charCodeAt(l)] << 18 | Vn[t.charCodeAt(l + 1)] << 12 | Vn[t.charCodeAt(l + 2)] << 6 | Vn[t.charCodeAt(l + 3)], o[s++] = e >> 16 & 255, o[s++] = e >> 8 & 255, o[s++] = e & 255;
    return i === 2 && (e = Vn[t.charCodeAt(l)] << 2 | Vn[t.charCodeAt(l + 1)] >> 4, o[s++] = e & 255), i === 1 && (e = Vn[t.charCodeAt(l)] << 10 | Vn[t.charCodeAt(l + 1)] << 4 | Vn[t.charCodeAt(l + 2)] >> 2, o[s++] = e >> 8 & 255, o[s++] = e & 255), o
}

function nS(t) {
    return br[t >> 18 & 63] + br[t >> 12 & 63] + br[t >> 6 & 63] + br[t & 63]
}

function rS(t, e, n) {
    for (var r, i = [], o = e; o < n; o += 3) r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (t[o + 2] & 255), i.push(nS(r));
    return i.join("")
}

function iS(t) {
    for (var e, n = t.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o) i.push(rS(t, s, s + o > a ? a : s + o));
    return r === 1 ? (e = t[n - 1], i.push(br[e >> 2] + br[e << 4 & 63] + "==")) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], i.push(br[e >> 10] + br[e >> 4 & 63] + br[e << 2 & 63] + "=")), i.join("")
}
var v0 = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
v0.read = function(t, e, n, r, i) {
    var o, s, a = i * 8 - r - 1,
        l = (1 << a) - 1,
        u = l >> 1,
        h = -7,
        g = n ? i - 1 : 0,
        w = n ? -1 : 1,
        C = t[e + g];
    for (g += w, o = C & (1 << -h) - 1, C >>= -h, h += a; h > 0; o = o * 256 + t[e + g], g += w, h -= 8);
    for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = s * 256 + t[e + g], g += w, h -= 8);
    if (o === 0) o = 1 - u;
    else {
        if (o === l) return s ? NaN : (C ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, r), o = o - u
    }
    return (C ? -1 : 1) * s * Math.pow(2, o - r)
};
v0.write = function(t, e, n, r, i, o) {
    var s, a, l, u = o * 8 - i - 1,
        h = (1 << u) - 1,
        g = h >> 1,
        w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        C = r ? 0 : o - 1,
        B = r ? 1 : -1,
        I = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + g >= 1 ? e += w / l : e += w * Math.pow(2, 1 - g), e * l >= 2 && (s++, l /= 2), s + g >= h ? (a = 0, s = h) : s + g >= 1 ? (a = (e * l - 1) * Math.pow(2, i), s = s + g) : (a = e * Math.pow(2, g - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + C] = a & 255, C += B, a /= 256, i -= 8);
    for (s = s << i | a, u += i; u > 0; t[n + C] = s & 255, C += B, s /= 256, u -= 8);
    t[n + C - B] |= I * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
    const e = Hu,
        n = v0,
        r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = a, t.SlowBuffer = b, t.INSPECT_MAX_BYTES = 50;
    const i = 2147483647;
    t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function o() {
        try {
            const A = new Uint8Array(1),
                d = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(A, d), A.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(a.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this)) return this.byteOffset
        }
    });

    function s(A) {
        if (A > i) throw new RangeError('The value "' + A + '" is invalid for option "size"');
        const d = new Uint8Array(A);
        return Object.setPrototypeOf(d, a.prototype), d
    }

    function a(A, d, p) {
        if (typeof A == "number") {
            if (typeof d == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return g(A)
        }
        return l(A, d, p)
    }
    a.poolSize = 8192;

    function l(A, d, p) {
        if (typeof A == "string") return w(A, d);
        if (ArrayBuffer.isView(A)) return B(A);
        if (A == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
        if (nn(A, ArrayBuffer) || A && nn(A.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (nn(A, SharedArrayBuffer) || A && nn(A.buffer, SharedArrayBuffer))) return I(A, d, p);
        if (typeof A == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const P = A.valueOf && A.valueOf();
        if (P != null && P !== A) return a.from(P, d, p);
        const W = R(A);
        if (W) return W;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof A[Symbol.toPrimitive] == "function") return a.from(A[Symbol.toPrimitive]("string"), d, p);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A)
    }
    a.from = function(A, d, p) {
        return l(A, d, p)
    }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);

    function u(A) {
        if (typeof A != "number") throw new TypeError('"size" argument must be of type number');
        if (A < 0) throw new RangeError('The value "' + A + '" is invalid for option "size"')
    }

    function h(A, d, p) {
        return u(A), A <= 0 ? s(A) : d !== void 0 ? typeof p == "string" ? s(A).fill(d, p) : s(A).fill(d) : s(A)
    }
    a.alloc = function(A, d, p) {
        return h(A, d, p)
    };

    function g(A) {
        return u(A), s(A < 0 ? 0 : _(A) | 0)
    }
    a.allocUnsafe = function(A) {
        return g(A)
    }, a.allocUnsafeSlow = function(A) {
        return g(A)
    };

    function w(A, d) {
        if ((typeof d != "string" || d === "") && (d = "utf8"), !a.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
        const p = v(A, d) | 0;
        let P = s(p);
        const W = P.write(A, d);
        return W !== p && (P = P.slice(0, W)), P
    }

    function C(A) {
        const d = A.length < 0 ? 0 : _(A.length) | 0,
            p = s(d);
        for (let P = 0; P < d; P += 1) p[P] = A[P] & 255;
        return p
    }

    function B(A) {
        if (nn(A, Uint8Array)) {
            const d = new Uint8Array(A);
            return I(d.buffer, d.byteOffset, d.byteLength)
        }
        return C(A)
    }

    function I(A, d, p) {
        if (d < 0 || A.byteLength < d) throw new RangeError('"offset" is outside of buffer bounds');
        if (A.byteLength < d + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let P;
        return d === void 0 && p === void 0 ? P = new Uint8Array(A) : p === void 0 ? P = new Uint8Array(A, d) : P = new Uint8Array(A, d, p), Object.setPrototypeOf(P, a.prototype), P
    }

    function R(A) {
        if (a.isBuffer(A)) {
            const d = _(A.length) | 0,
                p = s(d);
            return p.length === 0 || A.copy(p, 0, 0, d), p
        }
        if (A.length !== void 0) return typeof A.length != "number" || We(A.length) ? s(0) : C(A);
        if (A.type === "Buffer" && Array.isArray(A.data)) return C(A.data)
    }

    function _(A) {
        if (A >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return A | 0
    }

    function b(A) {
        return +A != A && (A = 0), a.alloc(+A)
    }
    a.isBuffer = function(d) {
        return d != null && d._isBuffer === !0 && d !== a.prototype
    }, a.compare = function(d, p) {
        if (nn(d, Uint8Array) && (d = a.from(d, d.offset, d.byteLength)), nn(p, Uint8Array) && (p = a.from(p, p.offset, p.byteLength)), !a.isBuffer(d) || !a.isBuffer(p)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (d === p) return 0;
        let P = d.length,
            W = p.length;
        for (let H = 0, V = Math.min(P, W); H < V; ++H)
            if (d[H] !== p[H]) {
                P = d[H], W = p[H];
                break
            } return P < W ? -1 : W < P ? 1 : 0
    }, a.isEncoding = function(d) {
        switch (String(d).toLowerCase()) {
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
                return !1
        }
    }, a.concat = function(d, p) {
        if (!Array.isArray(d)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (d.length === 0) return a.alloc(0);
        let P;
        if (p === void 0)
            for (p = 0, P = 0; P < d.length; ++P) p += d[P].length;
        const W = a.allocUnsafe(p);
        let H = 0;
        for (P = 0; P < d.length; ++P) {
            let V = d[P];
            if (nn(V, Uint8Array)) H + V.length > W.length ? (a.isBuffer(V) || (V = a.from(V)), V.copy(W, H)) : Uint8Array.prototype.set.call(W, V, H);
            else if (a.isBuffer(V)) V.copy(W, H);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            H += V.length
        }
        return W
    };

    function v(A, d) {
        if (a.isBuffer(A)) return A.length;
        if (ArrayBuffer.isView(A) || nn(A, ArrayBuffer)) return A.byteLength;
        if (typeof A != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof A);
        const p = A.length,
            P = arguments.length > 2 && arguments[2] === !0;
        if (!P && p === 0) return 0;
        let W = !1;
        for (;;) switch (d) {
            case "ascii":
            case "latin1":
            case "binary":
                return p;
            case "utf8":
            case "utf-8":
                return je(A).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return p * 2;
            case "hex":
                return p >>> 1;
            case "base64":
                return Ke(A).length;
            default:
                if (W) return P ? -1 : je(A).length;
                d = ("" + d).toLowerCase(), W = !0
        }
    }
    a.byteLength = v;

    function O(A, d, p) {
        let P = !1;
        if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, d >>>= 0, p <= d)) return "";
        for (A || (A = "utf8");;) switch (A) {
            case "hex":
                return x(this, d, p);
            case "utf8":
            case "utf-8":
                return c(this, d, p);
            case "ascii":
                return L(this, d, p);
            case "latin1":
            case "binary":
                return E(this, d, p);
            case "base64":
                return j(this, d, p);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return T(this, d, p);
            default:
                if (P) throw new TypeError("Unknown encoding: " + A);
                A = (A + "").toLowerCase(), P = !0
        }
    }
    a.prototype._isBuffer = !0;

    function D(A, d, p) {
        const P = A[d];
        A[d] = A[p], A[p] = P
    }
    a.prototype.swap16 = function() {
        const d = this.length;
        if (d % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let p = 0; p < d; p += 2) D(this, p, p + 1);
        return this
    }, a.prototype.swap32 = function() {
        const d = this.length;
        if (d % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let p = 0; p < d; p += 4) D(this, p, p + 3), D(this, p + 1, p + 2);
        return this
    }, a.prototype.swap64 = function() {
        const d = this.length;
        if (d % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let p = 0; p < d; p += 8) D(this, p, p + 7), D(this, p + 1, p + 6), D(this, p + 2, p + 5), D(this, p + 3, p + 4);
        return this
    }, a.prototype.toString = function() {
        const d = this.length;
        return d === 0 ? "" : arguments.length === 0 ? c(this, 0, d) : O.apply(this, arguments)
    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(d) {
        if (!a.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
        return this === d ? !0 : a.compare(this, d) === 0
    }, a.prototype.inspect = function() {
        let d = "";
        const p = t.INSPECT_MAX_BYTES;
        return d = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (d += " ... "), "<Buffer " + d + ">"
    }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(d, p, P, W, H) {
        if (nn(d, Uint8Array) && (d = a.from(d, d.offset, d.byteLength)), !a.isBuffer(d)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d);
        if (p === void 0 && (p = 0), P === void 0 && (P = d ? d.length : 0), W === void 0 && (W = 0), H === void 0 && (H = this.length), p < 0 || P > d.length || W < 0 || H > this.length) throw new RangeError("out of range index");
        if (W >= H && p >= P) return 0;
        if (W >= H) return -1;
        if (p >= P) return 1;
        if (p >>>= 0, P >>>= 0, W >>>= 0, H >>>= 0, this === d) return 0;
        let V = H - W,
            ke = P - p;
        const Se = Math.min(V, ke),
            we = this.slice(W, H),
            Ve = d.slice(p, P);
        for (let ve = 0; ve < Se; ++ve)
            if (we[ve] !== Ve[ve]) {
                V = we[ve], ke = Ve[ve];
                break
            } return V < ke ? -1 : ke < V ? 1 : 0
    };

    function N(A, d, p, P, W) {
        if (A.length === 0) return -1;
        if (typeof p == "string" ? (P = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, We(p) && (p = W ? 0 : A.length - 1), p < 0 && (p = A.length + p), p >= A.length) {
            if (W) return -1;
            p = A.length - 1
        } else if (p < 0)
            if (W) p = 0;
            else return -1;
        if (typeof d == "string" && (d = a.from(d, P)), a.isBuffer(d)) return d.length === 0 ? -1 : U(A, d, p, P, W);
        if (typeof d == "number") return d = d & 255, typeof Uint8Array.prototype.indexOf == "function" ? W ? Uint8Array.prototype.indexOf.call(A, d, p) : Uint8Array.prototype.lastIndexOf.call(A, d, p) : U(A, [d], p, P, W);
        throw new TypeError("val must be string, number or Buffer")
    }

    function U(A, d, p, P, W) {
        let H = 1,
            V = A.length,
            ke = d.length;
        if (P !== void 0 && (P = String(P).toLowerCase(), P === "ucs2" || P === "ucs-2" || P === "utf16le" || P === "utf-16le")) {
            if (A.length < 2 || d.length < 2) return -1;
            H = 2, V /= 2, ke /= 2, p /= 2
        }

        function Se(Ve, ve) {
            return H === 1 ? Ve[ve] : Ve.readUInt16BE(ve * H)
        }
        let we;
        if (W) {
            let Ve = -1;
            for (we = p; we < V; we++)
                if (Se(A, we) === Se(d, Ve === -1 ? 0 : we - Ve)) {
                    if (Ve === -1 && (Ve = we), we - Ve + 1 === ke) return Ve * H
                } else Ve !== -1 && (we -= we - Ve), Ve = -1
        } else
            for (p + ke > V && (p = V - ke), we = p; we >= 0; we--) {
                let Ve = !0;
                for (let ve = 0; ve < ke; ve++)
                    if (Se(A, we + ve) !== Se(d, ve)) {
                        Ve = !1;
                        break
                    } if (Ve) return we
            }
        return -1
    }
    a.prototype.includes = function(d, p, P) {
        return this.indexOf(d, p, P) !== -1
    }, a.prototype.indexOf = function(d, p, P) {
        return N(this, d, p, P, !0)
    }, a.prototype.lastIndexOf = function(d, p, P) {
        return N(this, d, p, P, !1)
    };

    function z(A, d, p, P) {
        p = Number(p) || 0;
        const W = A.length - p;
        P ? (P = Number(P), P > W && (P = W)) : P = W;
        const H = d.length;
        P > H / 2 && (P = H / 2);
        let V;
        for (V = 0; V < P; ++V) {
            const ke = parseInt(d.substr(V * 2, 2), 16);
            if (We(ke)) return V;
            A[p + V] = ke
        }
        return V
    }

    function Z(A, d, p, P) {
        return Fe(je(d, A.length - p), A, p, P)
    }

    function Q(A, d, p, P) {
        return Fe(Xe(d), A, p, P)
    }

    function X(A, d, p, P) {
        return Fe(Ke(d), A, p, P)
    }

    function ce(A, d, p, P) {
        return Fe(yo(d, A.length - p), A, p, P)
    }
    a.prototype.write = function(d, p, P, W) {
        if (p === void 0) W = "utf8", P = this.length, p = 0;
        else if (P === void 0 && typeof p == "string") W = p, P = this.length, p = 0;
        else if (isFinite(p)) p = p >>> 0, isFinite(P) ? (P = P >>> 0, W === void 0 && (W = "utf8")) : (W = P, P = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const H = this.length - p;
        if ((P === void 0 || P > H) && (P = H), d.length > 0 && (P < 0 || p < 0) || p > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        W || (W = "utf8");
        let V = !1;
        for (;;) switch (W) {
            case "hex":
                return z(this, d, p, P);
            case "utf8":
            case "utf-8":
                return Z(this, d, p, P);
            case "ascii":
            case "latin1":
            case "binary":
                return Q(this, d, p, P);
            case "base64":
                return X(this, d, p, P);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return ce(this, d, p, P);
            default:
                if (V) throw new TypeError("Unknown encoding: " + W);
                W = ("" + W).toLowerCase(), V = !0
        }
    }, a.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function j(A, d, p) {
        return d === 0 && p === A.length ? e.fromByteArray(A) : e.fromByteArray(A.slice(d, p))
    }

    function c(A, d, p) {
        p = Math.min(A.length, p);
        const P = [];
        let W = d;
        for (; W < p;) {
            const H = A[W];
            let V = null,
                ke = H > 239 ? 4 : H > 223 ? 3 : H > 191 ? 2 : 1;
            if (W + ke <= p) {
                let Se, we, Ve, ve;
                switch (ke) {
                    case 1:
                        H < 128 && (V = H);
                        break;
                    case 2:
                        Se = A[W + 1], (Se & 192) === 128 && (ve = (H & 31) << 6 | Se & 63, ve > 127 && (V = ve));
                        break;
                    case 3:
                        Se = A[W + 1], we = A[W + 2], (Se & 192) === 128 && (we & 192) === 128 && (ve = (H & 15) << 12 | (Se & 63) << 6 | we & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (V = ve));
                        break;
                    case 4:
                        Se = A[W + 1], we = A[W + 2], Ve = A[W + 3], (Se & 192) === 128 && (we & 192) === 128 && (Ve & 192) === 128 && (ve = (H & 15) << 18 | (Se & 63) << 12 | (we & 63) << 6 | Ve & 63, ve > 65535 && ve < 1114112 && (V = ve))
                }
            }
            V === null ? (V = 65533, ke = 1) : V > 65535 && (V -= 65536, P.push(V >>> 10 & 1023 | 55296), V = 56320 | V & 1023), P.push(V), W += ke
        }
        return S(P)
    }
    const m = 4096;

    function S(A) {
        const d = A.length;
        if (d <= m) return String.fromCharCode.apply(String, A);
        let p = "",
            P = 0;
        for (; P < d;) p += String.fromCharCode.apply(String, A.slice(P, P += m));
        return p
    }

    function L(A, d, p) {
        let P = "";
        p = Math.min(A.length, p);
        for (let W = d; W < p; ++W) P += String.fromCharCode(A[W] & 127);
        return P
    }

    function E(A, d, p) {
        let P = "";
        p = Math.min(A.length, p);
        for (let W = d; W < p; ++W) P += String.fromCharCode(A[W]);
        return P
    }

    function x(A, d, p) {
        const P = A.length;
        (!d || d < 0) && (d = 0), (!p || p < 0 || p > P) && (p = P);
        let W = "";
        for (let H = d; H < p; ++H) W += He[A[H]];
        return W
    }

    function T(A, d, p) {
        const P = A.slice(d, p);
        let W = "";
        for (let H = 0; H < P.length - 1; H += 2) W += String.fromCharCode(P[H] + P[H + 1] * 256);
        return W
    }
    a.prototype.slice = function(d, p) {
        const P = this.length;
        d = ~~d, p = p === void 0 ? P : ~~p, d < 0 ? (d += P, d < 0 && (d = 0)) : d > P && (d = P), p < 0 ? (p += P, p < 0 && (p = 0)) : p > P && (p = P), p < d && (p = d);
        const W = this.subarray(d, p);
        return Object.setPrototypeOf(W, a.prototype), W
    };

    function y(A, d, p) {
        if (A % 1 !== 0 || A < 0) throw new RangeError("offset is not uint");
        if (A + d > p) throw new RangeError("Trying to access beyond buffer length")
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(d, p, P) {
        d = d >>> 0, p = p >>> 0, P || y(d, p, this.length);
        let W = this[d],
            H = 1,
            V = 0;
        for (; ++V < p && (H *= 256);) W += this[d + V] * H;
        return W
    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(d, p, P) {
        d = d >>> 0, p = p >>> 0, P || y(d, p, this.length);
        let W = this[d + --p],
            H = 1;
        for (; p > 0 && (H *= 256);) W += this[d + --p] * H;
        return W
    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(d, p) {
        return d = d >>> 0, p || y(d, 1, this.length), this[d]
    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(d, p) {
        return d = d >>> 0, p || y(d, 2, this.length), this[d] | this[d + 1] << 8
    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(d, p) {
        return d = d >>> 0, p || y(d, 2, this.length), this[d] << 8 | this[d + 1]
    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216
    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3])
    }, a.prototype.readBigUInt64LE = En(function(d) {
        d = d >>> 0, Me(d, "offset");
        const p = this[d],
            P = this[d + 7];
        (p === void 0 || P === void 0) && Ee(d, this.length - 8);
        const W = p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24,
            H = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + P * 2 ** 24;
        return BigInt(W) + (BigInt(H) << BigInt(32))
    }), a.prototype.readBigUInt64BE = En(function(d) {
        d = d >>> 0, Me(d, "offset");
        const p = this[d],
            P = this[d + 7];
        (p === void 0 || P === void 0) && Ee(d, this.length - 8);
        const W = p * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d],
            H = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + P;
        return (BigInt(W) << BigInt(32)) + BigInt(H)
    }), a.prototype.readIntLE = function(d, p, P) {
        d = d >>> 0, p = p >>> 0, P || y(d, p, this.length);
        let W = this[d],
            H = 1,
            V = 0;
        for (; ++V < p && (H *= 256);) W += this[d + V] * H;
        return H *= 128, W >= H && (W -= Math.pow(2, 8 * p)), W
    }, a.prototype.readIntBE = function(d, p, P) {
        d = d >>> 0, p = p >>> 0, P || y(d, p, this.length);
        let W = p,
            H = 1,
            V = this[d + --W];
        for (; W > 0 && (H *= 256);) V += this[d + --W] * H;
        return H *= 128, V >= H && (V -= Math.pow(2, 8 * p)), V
    }, a.prototype.readInt8 = function(d, p) {
        return d = d >>> 0, p || y(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d]
    }, a.prototype.readInt16LE = function(d, p) {
        d = d >>> 0, p || y(d, 2, this.length);
        const P = this[d] | this[d + 1] << 8;
        return P & 32768 ? P | 4294901760 : P
    }, a.prototype.readInt16BE = function(d, p) {
        d = d >>> 0, p || y(d, 2, this.length);
        const P = this[d + 1] | this[d] << 8;
        return P & 32768 ? P | 4294901760 : P
    }, a.prototype.readInt32LE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24
    }, a.prototype.readInt32BE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]
    }, a.prototype.readBigInt64LE = En(function(d) {
        d = d >>> 0, Me(d, "offset");
        const p = this[d],
            P = this[d + 7];
        (p === void 0 || P === void 0) && Ee(d, this.length - 8);
        const W = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (P << 24);
        return (BigInt(W) << BigInt(32)) + BigInt(p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24)
    }), a.prototype.readBigInt64BE = En(function(d) {
        d = d >>> 0, Me(d, "offset");
        const p = this[d],
            P = this[d + 7];
        (p === void 0 || P === void 0) && Ee(d, this.length - 8);
        const W = (p << 24) + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
        return (BigInt(W) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + P)
    }), a.prototype.readFloatLE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), n.read(this, d, !0, 23, 4)
    }, a.prototype.readFloatBE = function(d, p) {
        return d = d >>> 0, p || y(d, 4, this.length), n.read(this, d, !1, 23, 4)
    }, a.prototype.readDoubleLE = function(d, p) {
        return d = d >>> 0, p || y(d, 8, this.length), n.read(this, d, !0, 52, 8)
    }, a.prototype.readDoubleBE = function(d, p) {
        return d = d >>> 0, p || y(d, 8, this.length), n.read(this, d, !1, 52, 8)
    };

    function f(A, d, p, P, W, H) {
        if (!a.isBuffer(A)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (d > W || d < H) throw new RangeError('"value" argument is out of bounds');
        if (p + P > A.length) throw new RangeError("Index out of range")
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(d, p, P, W) {
        if (d = +d, p = p >>> 0, P = P >>> 0, !W) {
            const ke = Math.pow(2, 8 * P) - 1;
            f(this, d, p, P, ke, 0)
        }
        let H = 1,
            V = 0;
        for (this[p] = d & 255; ++V < P && (H *= 256);) this[p + V] = d / H & 255;
        return p + P
    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(d, p, P, W) {
        if (d = +d, p = p >>> 0, P = P >>> 0, !W) {
            const ke = Math.pow(2, 8 * P) - 1;
            f(this, d, p, P, ke, 0)
        }
        let H = P - 1,
            V = 1;
        for (this[p + H] = d & 255; --H >= 0 && (V *= 256);) this[p + H] = d / V & 255;
        return p + P
    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 1, 255, 0), this[p] = d & 255, p + 1
    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 2, 65535, 0), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2
    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 2, 65535, 0), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2
    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 4, 4294967295, 0), this[p + 3] = d >>> 24, this[p + 2] = d >>> 16, this[p + 1] = d >>> 8, this[p] = d & 255, p + 4
    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 4, 4294967295, 0), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4
    };

    function M(A, d, p, P, W) {
        _e(d, P, W, A, p, 7);
        let H = Number(d & BigInt(4294967295));
        A[p++] = H, H = H >> 8, A[p++] = H, H = H >> 8, A[p++] = H, H = H >> 8, A[p++] = H;
        let V = Number(d >> BigInt(32) & BigInt(4294967295));
        return A[p++] = V, V = V >> 8, A[p++] = V, V = V >> 8, A[p++] = V, V = V >> 8, A[p++] = V, p
    }

    function q(A, d, p, P, W) {
        _e(d, P, W, A, p, 7);
        let H = Number(d & BigInt(4294967295));
        A[p + 7] = H, H = H >> 8, A[p + 6] = H, H = H >> 8, A[p + 5] = H, H = H >> 8, A[p + 4] = H;
        let V = Number(d >> BigInt(32) & BigInt(4294967295));
        return A[p + 3] = V, V = V >> 8, A[p + 2] = V, V = V >> 8, A[p + 1] = V, V = V >> 8, A[p] = V, p + 8
    }
    a.prototype.writeBigUInt64LE = En(function(d, p = 0) {
        return M(this, d, p, BigInt(0), BigInt("0xffffffffffffffff"))
    }), a.prototype.writeBigUInt64BE = En(function(d, p = 0) {
        return q(this, d, p, BigInt(0), BigInt("0xffffffffffffffff"))
    }), a.prototype.writeIntLE = function(d, p, P, W) {
        if (d = +d, p = p >>> 0, !W) {
            const Se = Math.pow(2, 8 * P - 1);
            f(this, d, p, P, Se - 1, -Se)
        }
        let H = 0,
            V = 1,
            ke = 0;
        for (this[p] = d & 255; ++H < P && (V *= 256);) d < 0 && ke === 0 && this[p + H - 1] !== 0 && (ke = 1), this[p + H] = (d / V >> 0) - ke & 255;
        return p + P
    }, a.prototype.writeIntBE = function(d, p, P, W) {
        if (d = +d, p = p >>> 0, !W) {
            const Se = Math.pow(2, 8 * P - 1);
            f(this, d, p, P, Se - 1, -Se)
        }
        let H = P - 1,
            V = 1,
            ke = 0;
        for (this[p + H] = d & 255; --H >= 0 && (V *= 256);) d < 0 && ke === 0 && this[p + H + 1] !== 0 && (ke = 1), this[p + H] = (d / V >> 0) - ke & 255;
        return p + P
    }, a.prototype.writeInt8 = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[p] = d & 255, p + 1
    }, a.prototype.writeInt16LE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 2, 32767, -32768), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2
    }, a.prototype.writeInt16BE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 2, 32767, -32768), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2
    }, a.prototype.writeInt32LE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 4, 2147483647, -2147483648), this[p] = d & 255, this[p + 1] = d >>> 8, this[p + 2] = d >>> 16, this[p + 3] = d >>> 24, p + 4
    }, a.prototype.writeInt32BE = function(d, p, P) {
        return d = +d, p = p >>> 0, P || f(this, d, p, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4
    }, a.prototype.writeBigInt64LE = En(function(d, p = 0) {
        return M(this, d, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), a.prototype.writeBigInt64BE = En(function(d, p = 0) {
        return q(this, d, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function G(A, d, p, P, W, H) {
        if (p + P > A.length) throw new RangeError("Index out of range");
        if (p < 0) throw new RangeError("Index out of range")
    }

    function Y(A, d, p, P, W) {
        return d = +d, p = p >>> 0, W || G(A, d, p, 4), n.write(A, d, p, P, 23, 4), p + 4
    }
    a.prototype.writeFloatLE = function(d, p, P) {
        return Y(this, d, p, !0, P)
    }, a.prototype.writeFloatBE = function(d, p, P) {
        return Y(this, d, p, !1, P)
    };

    function ie(A, d, p, P, W) {
        return d = +d, p = p >>> 0, W || G(A, d, p, 8), n.write(A, d, p, P, 52, 8), p + 8
    }
    a.prototype.writeDoubleLE = function(d, p, P) {
        return ie(this, d, p, !0, P)
    }, a.prototype.writeDoubleBE = function(d, p, P) {
        return ie(this, d, p, !1, P)
    }, a.prototype.copy = function(d, p, P, W) {
        if (!a.isBuffer(d)) throw new TypeError("argument should be a Buffer");
        if (P || (P = 0), !W && W !== 0 && (W = this.length), p >= d.length && (p = d.length), p || (p = 0), W > 0 && W < P && (W = P), W === P || d.length === 0 || this.length === 0) return 0;
        if (p < 0) throw new RangeError("targetStart out of bounds");
        if (P < 0 || P >= this.length) throw new RangeError("Index out of range");
        if (W < 0) throw new RangeError("sourceEnd out of bounds");
        W > this.length && (W = this.length), d.length - p < W - P && (W = d.length - p + P);
        const H = W - P;
        return this === d && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(p, P, W) : Uint8Array.prototype.set.call(d, this.subarray(P, W), p), H
    }, a.prototype.fill = function(d, p, P, W) {
        if (typeof d == "string") {
            if (typeof p == "string" ? (W = p, p = 0, P = this.length) : typeof P == "string" && (W = P, P = this.length), W !== void 0 && typeof W != "string") throw new TypeError("encoding must be a string");
            if (typeof W == "string" && !a.isEncoding(W)) throw new TypeError("Unknown encoding: " + W);
            if (d.length === 1) {
                const V = d.charCodeAt(0);
                (W === "utf8" && V < 128 || W === "latin1") && (d = V)
            }
        } else typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
        if (p < 0 || this.length < p || this.length < P) throw new RangeError("Out of range index");
        if (P <= p) return this;
        p = p >>> 0, P = P === void 0 ? this.length : P >>> 0, d || (d = 0);
        let H;
        if (typeof d == "number")
            for (H = p; H < P; ++H) this[H] = d;
        else {
            const V = a.isBuffer(d) ? d : a.from(d, W),
                ke = V.length;
            if (ke === 0) throw new TypeError('The value "' + d + '" is invalid for argument "value"');
            for (H = 0; H < P - p; ++H) this[H + p] = V[H % ke]
        }
        return this
    };
    const le = {};

    function ue(A, d, p) {
        le[A] = class extends p {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: d.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${A}]`, this.stack, delete this.name
            }
            get code() {
                return A
            }
            set code(W) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: W,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${A}]: ${this.message}`
            }
        }
    }
    ue("ERR_BUFFER_OUT_OF_BOUNDS", function(A) {
        return A ? `${A} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), ue("ERR_INVALID_ARG_TYPE", function(A, d) {
        return `The "${A}" argument must be of type number. Received type ${typeof d}`
    }, TypeError), ue("ERR_OUT_OF_RANGE", function(A, d, p) {
        let P = `The value of "${A}" is out of range.`,
            W = p;
        return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? W = Re(String(p)) : typeof p == "bigint" && (W = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (W = Re(W)), W += "n"), P += ` It must be ${d}. Received ${W}`, P
    }, RangeError);

    function Re(A) {
        let d = "",
            p = A.length;
        const P = A[0] === "-" ? 1 : 0;
        for (; p >= P + 4; p -= 3) d = `_${A.slice(p-3,p)}${d}`;
        return `${A.slice(0,p)}${d}`
    }

    function be(A, d, p) {
        Me(d, "offset"), (A[d] === void 0 || A[d + p] === void 0) && Ee(d, A.length - (p + 1))
    }

    function _e(A, d, p, P, W, H) {
        if (A > p || A < d) {
            const V = typeof d == "bigint" ? "n" : "";
            let ke;
            throw H > 3 ? d === 0 || d === BigInt(0) ? ke = `>= 0${V} and < 2${V} ** ${(H+1)*8}${V}` : ke = `>= -(2${V} ** ${(H+1)*8-1}${V}) and < 2 ** ${(H+1)*8-1}${V}` : ke = `>= ${d}${V} and <= ${p}${V}`, new le.ERR_OUT_OF_RANGE("value", ke, A)
        }
        be(P, W, H)
    }

    function Me(A, d) {
        if (typeof A != "number") throw new le.ERR_INVALID_ARG_TYPE(d, "number", A)
    }

    function Ee(A, d, p) {
        throw Math.floor(A) !== A ? (Me(A, p), new le.ERR_OUT_OF_RANGE(p || "offset", "an integer", A)) : d < 0 ? new le.ERR_BUFFER_OUT_OF_BOUNDS : new le.ERR_OUT_OF_RANGE(p || "offset", `>= ${p?1:0} and <= ${d}`, A)
    }
    const me = /[^+/0-9A-Za-z-_]/g;

    function Rn(A) {
        if (A = A.split("=")[0], A = A.trim().replace(me, ""), A.length < 2) return "";
        for (; A.length % 4 !== 0;) A = A + "=";
        return A
    }

    function je(A, d) {
        d = d || 1 / 0;
        let p;
        const P = A.length;
        let W = null;
        const H = [];
        for (let V = 0; V < P; ++V) {
            if (p = A.charCodeAt(V), p > 55295 && p < 57344) {
                if (!W) {
                    if (p > 56319) {
                        (d -= 3) > -1 && H.push(239, 191, 189);
                        continue
                    } else if (V + 1 === P) {
                        (d -= 3) > -1 && H.push(239, 191, 189);
                        continue
                    }
                    W = p;
                    continue
                }
                if (p < 56320) {
                    (d -= 3) > -1 && H.push(239, 191, 189), W = p;
                    continue
                }
                p = (W - 55296 << 10 | p - 56320) + 65536
            } else W && (d -= 3) > -1 && H.push(239, 191, 189);
            if (W = null, p < 128) {
                if ((d -= 1) < 0) break;
                H.push(p)
            } else if (p < 2048) {
                if ((d -= 2) < 0) break;
                H.push(p >> 6 | 192, p & 63 | 128)
            } else if (p < 65536) {
                if ((d -= 3) < 0) break;
                H.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128)
            } else if (p < 1114112) {
                if ((d -= 4) < 0) break;
                H.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return H
    }

    function Xe(A) {
        const d = [];
        for (let p = 0; p < A.length; ++p) d.push(A.charCodeAt(p) & 255);
        return d
    }

    function yo(A, d) {
        let p, P, W;
        const H = [];
        for (let V = 0; V < A.length && !((d -= 2) < 0); ++V) p = A.charCodeAt(V), P = p >> 8, W = p % 256, H.push(W), H.push(P);
        return H
    }

    function Ke(A) {
        return e.toByteArray(Rn(A))
    }

    function Fe(A, d, p, P) {
        let W;
        for (W = 0; W < P && !(W + p >= d.length || W >= A.length); ++W) d[W + p] = A[W];
        return W
    }

    function nn(A, d) {
        return A instanceof d || A != null && A.constructor != null && A.constructor.name != null && A.constructor.name === d.name
    }

    function We(A) {
        return A !== A
    }
    const He = function() {
        const A = "0123456789abcdef",
            d = new Array(256);
        for (let p = 0; p < 16; ++p) {
            const P = p * 16;
            for (let W = 0; W < 16; ++W) d[P + W] = A[p] + A[W]
        }
        return d
    }();

    function En(A) {
        return typeof BigInt > "u" ? qe : A
    }

    function qe() {
        throw new Error("BigInt not supported")
    }
})(xe);

function em(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`)
}

function oS(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array"
}

function Aw(t, ...e) {
    if (!oS(t)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}

function sS(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    em(t.outputLen), em(t.blockLen)
}

function ou(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called")
}

function aS(t, e) {
    Aw(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const of = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Iw(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array"
}
const sf = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
    wr = (t, e) => t << 32 - e | t >>> e,
    lS = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!lS) throw new Error("Non little-endian hardware is not supported");

function Tw(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}

function w0(t) {
    if (typeof t == "string" && (t = Tw(t)), !Iw(t)) throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t
}

function Bw(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        if (!Iw(i)) throw new Error("Uint8Array expected");
        e += i.length
    }
    const n = new Uint8Array(e);
    for (let r = 0, i = 0; r < t.length; r++) {
        const o = t[r];
        n.set(o, i), i += o.length
    }
    return n
}
class Rw {
    clone() {
        return this._cloneInto()
    }
}

function Mw(t) {
    const e = r => t().update(w0(r)).digest(),
        n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e
}

function Lw(t = 32) {
    if (of && typeof of.getRandomValues == "function") return of.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined")
}

function uS(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const i = BigInt(32),
        o = BigInt(4294967295),
        s = Number(n >> i & o),
        a = Number(n & o),
        l = r ? 4 : 0,
        u = r ? 0 : 4;
    t.setUint32(e + l, s, r), t.setUint32(e + u, a, r)
}
class Nw extends Rw {
    constructor(e, n, r, i) {
        super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = sf(this.buffer)
    }
    update(e) {
        ou(this);
        const {
            view: n,
            buffer: r,
            blockLen: i
        } = this;
        e = w0(e);
        const o = e.length;
        for (let s = 0; s < o;) {
            const a = Math.min(i - this.pos, o - s);
            if (a === i) {
                const l = sf(e);
                for (; i <= o - s; s += i) this.process(l, s);
                continue
            }
            r.set(e.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(n, 0), this.pos = 0)
        }
        return this.length += e.length, this.roundClean(), this
    }
    digestInto(e) {
        ou(this), aS(e, this), this.finished = !0;
        const {
            buffer: n,
            view: r,
            blockLen: i,
            isLE: o
        } = this;
        let {
            pos: s
        } = this;
        n[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(r, 0), s = 0);
        for (let g = s; g < i; g++) n[g] = 0;
        uS(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
        const a = sf(e),
            l = this.outputLen;
        if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const u = l / 4,
            h = this.get();
        if (u > h.length) throw new Error("_sha2: outputLen bigger than state");
        for (let g = 0; g < u; g++) a.setUint32(4 * g, h[g], o)
    }
    digest() {
        const {
            buffer: e,
            outputLen: n
        } = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(), r
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const {
            blockLen: n,
            buffer: r,
            length: i,
            finished: o,
            destroyed: s,
            pos: a
        } = this;
        return e.length = i, e.pos = a, e.finished = o, e.destroyed = s, i % n && e.buffer.set(r), e
    }
}
const al = BigInt(2 ** 32 - 1),
    $d = BigInt(32);

function Ow(t, e = !1) {
    return e ? {
        h: Number(t & al),
        l: Number(t >> $d & al)
    } : {
        h: Number(t >> $d & al) | 0,
        l: Number(t & al) | 0
    }
}

function cS(t, e = !1) {
    let n = new Uint32Array(t.length),
        r = new Uint32Array(t.length);
    for (let i = 0; i < t.length; i++) {
        const {
            h: o,
            l: s
        } = Ow(t[i], e);
        [n[i], r[i]] = [o, s]
    }
    return [n, r]
}
const fS = (t, e) => BigInt(t >>> 0) << $d | BigInt(e >>> 0),
    dS = (t, e, n) => t >>> n,
    hS = (t, e, n) => t << 32 - n | e >>> n,
    pS = (t, e, n) => t >>> n | e << 32 - n,
    mS = (t, e, n) => t << 32 - n | e >>> n,
    gS = (t, e, n) => t << 64 - n | e >>> n - 32,
    yS = (t, e, n) => t >>> n - 32 | e << 64 - n,
    vS = (t, e) => e,
    wS = (t, e) => t,
    xS = (t, e, n) => t << n | e >>> 32 - n,
    ES = (t, e, n) => e << n | t >>> 32 - n,
    SS = (t, e, n) => e << n - 32 | t >>> 64 - n,
    bS = (t, e, n) => t << n - 32 | e >>> 64 - n;

function _S(t, e, n, r) {
    const i = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (i / 2 ** 32 | 0) | 0,
        l: i | 0
    }
}
const kS = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
    CS = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0,
    AS = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
    IS = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0,
    TS = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
    BS = (t, e, n, r, i, o) => e + n + r + i + o + (t / 2 ** 32 | 0) | 0,
    Ce = {
        fromBig: Ow,
        split: cS,
        toBig: fS,
        shrSH: dS,
        shrSL: hS,
        rotrSH: pS,
        rotrSL: mS,
        rotrBH: gS,
        rotrBL: yS,
        rotr32H: vS,
        rotr32L: wS,
        rotlSH: xS,
        rotlSL: ES,
        rotlBH: SS,
        rotlBL: bS,
        add: _S,
        add3L: kS,
        add3H: CS,
        add4L: AS,
        add4H: IS,
        add5H: BS,
        add5L: TS
    },
    [RS, MS] = Ce.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
    ii = new Uint32Array(80),
    oi = new Uint32Array(80);
class LS extends Nw {
    constructor() {
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
    }
    get() {
        const {
            Ah: e,
            Al: n,
            Bh: r,
            Bl: i,
            Ch: o,
            Cl: s,
            Dh: a,
            Dl: l,
            Eh: u,
            El: h,
            Fh: g,
            Fl: w,
            Gh: C,
            Gl: B,
            Hh: I,
            Hl: R
        } = this;
        return [e, n, r, i, o, s, a, l, u, h, g, w, C, B, I, R]
    }
    set(e, n, r, i, o, s, a, l, u, h, g, w, C, B, I, R) {
        this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = l | 0, this.Eh = u | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = w | 0, this.Gh = C | 0, this.Gl = B | 0, this.Hh = I | 0, this.Hl = R | 0
    }
    process(e, n) {
        for (let v = 0; v < 16; v++, n += 4) ii[v] = e.getUint32(n), oi[v] = e.getUint32(n += 4);
        for (let v = 16; v < 80; v++) {
            const O = ii[v - 15] | 0,
                D = oi[v - 15] | 0,
                N = Ce.rotrSH(O, D, 1) ^ Ce.rotrSH(O, D, 8) ^ Ce.shrSH(O, D, 7),
                U = Ce.rotrSL(O, D, 1) ^ Ce.rotrSL(O, D, 8) ^ Ce.shrSL(O, D, 7),
                z = ii[v - 2] | 0,
                Z = oi[v - 2] | 0,
                Q = Ce.rotrSH(z, Z, 19) ^ Ce.rotrBH(z, Z, 61) ^ Ce.shrSH(z, Z, 6),
                X = Ce.rotrSL(z, Z, 19) ^ Ce.rotrBL(z, Z, 61) ^ Ce.shrSL(z, Z, 6),
                ce = Ce.add4L(U, X, oi[v - 7], oi[v - 16]),
                j = Ce.add4H(ce, N, Q, ii[v - 7], ii[v - 16]);
            ii[v] = j | 0, oi[v] = ce | 0
        }
        let {
            Ah: r,
            Al: i,
            Bh: o,
            Bl: s,
            Ch: a,
            Cl: l,
            Dh: u,
            Dl: h,
            Eh: g,
            El: w,
            Fh: C,
            Fl: B,
            Gh: I,
            Gl: R,
            Hh: _,
            Hl: b
        } = this;
        for (let v = 0; v < 80; v++) {
            const O = Ce.rotrSH(g, w, 14) ^ Ce.rotrSH(g, w, 18) ^ Ce.rotrBH(g, w, 41),
                D = Ce.rotrSL(g, w, 14) ^ Ce.rotrSL(g, w, 18) ^ Ce.rotrBL(g, w, 41),
                N = g & C ^ ~g & I,
                U = w & B ^ ~w & R,
                z = Ce.add5L(b, D, U, MS[v], oi[v]),
                Z = Ce.add5H(z, _, O, N, RS[v], ii[v]),
                Q = z | 0,
                X = Ce.rotrSH(r, i, 28) ^ Ce.rotrBH(r, i, 34) ^ Ce.rotrBH(r, i, 39),
                ce = Ce.rotrSL(r, i, 28) ^ Ce.rotrBL(r, i, 34) ^ Ce.rotrBL(r, i, 39),
                j = r & o ^ r & a ^ o & a,
                c = i & s ^ i & l ^ s & l;
            _ = I | 0, b = R | 0, I = C | 0, R = B | 0, C = g | 0, B = w | 0, {
                h: g,
                l: w
            } = Ce.add(u | 0, h | 0, Z | 0, Q | 0), u = a | 0, h = l | 0, a = o | 0, l = s | 0, o = r | 0, s = i | 0;
            const m = Ce.add3L(Q, ce, c);
            r = Ce.add3H(m, Z, X, j), i = m | 0
        }({
            h: r,
            l: i
        } = Ce.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), {
            h: o,
            l: s
        } = Ce.add(this.Bh | 0, this.Bl | 0, o | 0, s | 0), {
            h: a,
            l
        } = Ce.add(this.Ch | 0, this.Cl | 0, a | 0, l | 0), {
            h: u,
            l: h
        } = Ce.add(this.Dh | 0, this.Dl | 0, u | 0, h | 0), {
            h: g,
            l: w
        } = Ce.add(this.Eh | 0, this.El | 0, g | 0, w | 0), {
            h: C,
            l: B
        } = Ce.add(this.Fh | 0, this.Fl | 0, C | 0, B | 0), {
            h: I,
            l: R
        } = Ce.add(this.Gh | 0, this.Gl | 0, I | 0, R | 0), {
            h: _,
            l: b
        } = Ce.add(this.Hh | 0, this.Hl | 0, _ | 0, b | 0), this.set(r, i, o, s, a, l, u, h, g, w, C, B, I, R, _, b)
    }
    roundClean() {
        ii.fill(0), oi.fill(0)
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
const Pw = Mw(() => new LS); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const jw = BigInt(0),
    $u = BigInt(1),
    NS = BigInt(2);

function Ir(t) {
    return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array"
}
const OS = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));

function lo(t) {
    if (!Ir(t)) throw new Error("Uint8Array expected");
    let e = "";
    for (let n = 0; n < t.length; n++) e += OS[t[n]];
    return e
}

function Dw(t) {
    const e = t.toString(16);
    return e.length & 1 ? `0${e}` : e
}

function x0(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return BigInt(t === "" ? "0" : `0x${t}`)
}
const Nr = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};

function tm(t) {
    if (t >= Nr._0 && t <= Nr._9) return t - Nr._0;
    if (t >= Nr._A && t <= Nr._F) return t - (Nr._A - 10);
    if (t >= Nr._a && t <= Nr._f) return t - (Nr._a - 10)
}

function is(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length,
        n = e / 2;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(n);
    for (let i = 0, o = 0; i < n; i++, o += 2) {
        const s = tm(t.charCodeAt(o)),
            a = tm(t.charCodeAt(o + 1));
        if (s === void 0 || a === void 0) {
            const l = t[o] + t[o + 1];
            throw new Error('hex string expected, got non-hex character "' + l + '" at index ' + o)
        }
        r[i] = s * 16 + a
    }
    return r
}

function eo(t) {
    return x0(lo(t))
}

function Go(t) {
    if (!Ir(t)) throw new Error("Uint8Array expected");
    return x0(lo(Uint8Array.from(t).reverse()))
}

function os(t, e) {
    return is(t.toString(16).padStart(e * 2, "0"))
}

function ha(t, e) {
    return os(t, e).reverse()
}

function PS(t) {
    return is(Dw(t))
}

function Dt(t, e, n) {
    let r;
    if (typeof e == "string") try {
            r = is(e)
        } catch (o) {
            throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`)
        } else if (Ir(e)) r = Uint8Array.from(e);
        else throw new Error(`${t} must be hex string or Uint8Array`);
    const i = r.length;
    if (typeof n == "number" && i !== n) throw new Error(`${t} expected ${n} bytes, got ${i}`);
    return r
}

function uo(...t) {
    let e = 0;
    for (let i = 0; i < t.length; i++) {
        const o = t[i];
        if (!Ir(o)) throw new Error("Uint8Array expected");
        e += o.length
    }
    let n = new Uint8Array(e),
        r = 0;
    for (let i = 0; i < t.length; i++) {
        const o = t[i];
        n.set(o, r), r += o.length
    }
    return n
}

function jS(t, e) {
    if (t.length !== e.length) return !1;
    let n = 0;
    for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
    return n === 0
}

function DS(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}

function US(t) {
    let e;
    for (e = 0; t > jw; t >>= $u, e += 1);
    return e
}

function zS(t, e) {
    return t >> BigInt(e) & $u
}
const FS = (t, e, n) => t | (n ? $u : jw) << BigInt(e),
    E0 = t => (NS << BigInt(t - 1)) - $u,
    af = t => new Uint8Array(t),
    nm = t => Uint8Array.from(t);

function Uw(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let r = af(t),
        i = af(t),
        o = 0;
    const s = () => {
            r.fill(1), i.fill(0), o = 0
        },
        a = (...g) => n(i, r, ...g),
        l = (g = af()) => {
            i = a(nm([0]), g), r = a(), g.length !== 0 && (i = a(nm([1]), g), r = a())
        },
        u = () => {
            if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let g = 0;
            const w = [];
            for (; g < e;) {
                r = a();
                const C = r.slice();
                w.push(C), g += r.length
            }
            return uo(...w)
        };
    return (g, w) => {
        s(), l(g);
        let C;
        for (; !(C = w(u()));) l();
        return s(), C
    }
}
const WS = {
    bigint: t => typeof t == "bigint",
    function: t => typeof t == "function",
    boolean: t => typeof t == "boolean",
    string: t => typeof t == "string",
    stringOrUint8Array: t => typeof t == "string" || Ir(t),
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};

function ps(t, e, n = {}) {
    const r = (i, o, s) => {
        const a = WS[o];
        if (typeof a != "function") throw new Error(`Invalid validator "${o}", expected function`);
        const l = t[i];
        if (!(s && l === void 0) && !a(l, t)) throw new Error(`Invalid param ${String(i)}=${l} (${typeof l}), expected ${o}`)
    };
    for (const [i, o] of Object.entries(e)) r(i, o, !1);
    for (const [i, o] of Object.entries(n)) r(i, o, !0);
    return t
}
const HS = Object.freeze(Object.defineProperty({
    __proto__: null,
    bitGet: zS,
    bitLen: US,
    bitMask: E0,
    bitSet: FS,
    bytesToHex: lo,
    bytesToNumberBE: eo,
    bytesToNumberLE: Go,
    concatBytes: uo,
    createHmacDrbg: Uw,
    ensureBytes: Dt,
    equalBytes: jS,
    hexToBytes: is,
    hexToNumber: x0,
    isBytes: Ir,
    numberToBytesBE: os,
    numberToBytesLE: ha,
    numberToHexUnpadded: Dw,
    numberToVarBytesBE: PS,
    utf8ToBytes: DS,
    validateObject: ps
}, Symbol.toStringTag, {
    value: "Module"
})); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ht = BigInt(0),
    lt = BigInt(1),
    Fi = BigInt(2),
    $S = BigInt(3),
    Kd = BigInt(4),
    rm = BigInt(5),
    im = BigInt(8);
BigInt(9);
BigInt(16);

function nt(t, e) {
    const n = t % e;
    return n >= Ht ? n : e + n
}

function KS(t, e, n) {
    if (n <= Ht || e < Ht) throw new Error("Expected power/modulo > 0");
    if (n === lt) return Ht;
    let r = lt;
    for (; e > Ht;) e & lt && (r = r * t % n), t = t * t % n, e >>= lt;
    return r
}

function dt(t, e, n) {
    let r = t;
    for (; e-- > Ht;) r *= r, r %= n;
    return r
}

function qd(t, e) {
    if (t === Ht || e <= Ht) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = nt(t, e),
        r = e,
        i = Ht,
        o = lt;
    for (; n !== Ht;) {
        const a = r / n,
            l = r % n,
            u = i - o * a;
        r = n, n = l, i = o, o = u
    }
    if (r !== lt) throw new Error("invert: does not exist");
    return nt(i, e)
}

function qS(t) {
    const e = (t - lt) / Fi;
    let n, r, i;
    for (n = t - lt, r = 0; n % Fi === Ht; n /= Fi, r++);
    for (i = Fi; i < t && KS(i, e, t) !== t - lt; i++);
    if (r === 1) {
        const s = (t + lt) / Kd;
        return function(l, u) {
            const h = l.pow(u, s);
            if (!l.eql(l.sqr(h), u)) throw new Error("Cannot find square root");
            return h
        }
    }
    const o = (n + lt) / Fi;
    return function(a, l) {
        if (a.pow(l, e) === a.neg(a.ONE)) throw new Error("Cannot find square root");
        let u = r,
            h = a.pow(a.mul(a.ONE, i), n),
            g = a.pow(l, o),
            w = a.pow(l, n);
        for (; !a.eql(w, a.ONE);) {
            if (a.eql(w, a.ZERO)) return a.ZERO;
            let C = 1;
            for (let I = a.sqr(w); C < u && !a.eql(I, a.ONE); C++) I = a.sqr(I);
            const B = a.pow(h, lt << BigInt(u - C - 1));
            h = a.sqr(B), g = a.mul(g, B), w = a.mul(w, h), u = C
        }
        return g
    }
}

function VS(t) {
    if (t % Kd === $S) {
        const e = (t + lt) / Kd;
        return function(r, i) {
            const o = r.pow(i, e);
            if (!r.eql(r.sqr(o), i)) throw new Error("Cannot find square root");
            return o
        }
    }
    if (t % im === rm) {
        const e = (t - rm) / im;
        return function(r, i) {
            const o = r.mul(i, Fi),
                s = r.pow(o, e),
                a = r.mul(i, s),
                l = r.mul(r.mul(a, Fi), s),
                u = r.mul(a, r.sub(l, r.ONE));
            if (!r.eql(r.sqr(u), i)) throw new Error("Cannot find square root");
            return u
        }
    }
    return qS(t)
}
const GS = (t, e) => (nt(t, e) & lt) === lt,
    ZS = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function YS(t) {
    const e = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger"
        },
        n = ZS.reduce((r, i) => (r[i] = "function", r), e);
    return ps(t, n)
}

function QS(t, e, n) {
    if (n < Ht) throw new Error("Expected power > 0");
    if (n === Ht) return t.ONE;
    if (n === lt) return e;
    let r = t.ONE,
        i = e;
    for (; n > Ht;) n & lt && (r = t.mul(r, i)), i = t.sqr(i), n >>= lt;
    return r
}

function XS(t, e) {
    const n = new Array(e.length),
        r = e.reduce((o, s, a) => t.is0(s) ? o : (n[a] = o, t.mul(o, s)), t.ONE),
        i = t.inv(r);
    return e.reduceRight((o, s, a) => t.is0(s) ? o : (n[a] = t.mul(o, n[a]), t.mul(o, s)), i), n
}

function zw(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length,
        r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    }
}

function Fw(t, e, n = !1, r = {}) {
    if (t <= Ht) throw new Error(`Expected Field ORDER > 0, got ${t}`);
    const {
        nBitLength: i,
        nByteLength: o
    } = zw(t, e);
    if (o > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const s = VS(t),
        a = Object.freeze({
            ORDER: t,
            BITS: i,
            BYTES: o,
            MASK: E0(i),
            ZERO: Ht,
            ONE: lt,
            create: l => nt(l, t),
            isValid: l => {
                if (typeof l != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);
                return Ht <= l && l < t
            },
            is0: l => l === Ht,
            isOdd: l => (l & lt) === lt,
            neg: l => nt(-l, t),
            eql: (l, u) => l === u,
            sqr: l => nt(l * l, t),
            add: (l, u) => nt(l + u, t),
            sub: (l, u) => nt(l - u, t),
            mul: (l, u) => nt(l * u, t),
            pow: (l, u) => QS(a, l, u),
            div: (l, u) => nt(l * qd(u, t), t),
            sqrN: l => l * l,
            addN: (l, u) => l + u,
            subN: (l, u) => l - u,
            mulN: (l, u) => l * u,
            inv: l => qd(l, t),
            sqrt: r.sqrt || (l => s(a, l)),
            invertBatch: l => XS(a, l),
            cmov: (l, u, h) => h ? u : l,
            toBytes: l => n ? ha(l, o) : os(l, o),
            fromBytes: l => {
                if (l.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${l.length}`);
                return n ? Go(l) : eo(l)
            }
        });
    return Object.freeze(a)
}

function JS(t, e) {
    if (!t.isOdd) throw new Error("Field doesn't have isOdd");
    const n = t.sqrt(e);
    return t.isOdd(n) ? t.neg(n) : n
}

function Ww(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8)
}

function Hw(t) {
    const e = Ww(t);
    return e + Math.ceil(e / 2)
}

function eb(t, e, n = !1) {
    const r = t.length,
        i = Ww(e),
        o = Hw(e);
    if (r < 16 || r < o || r > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
    const s = n ? eo(t) : Go(t),
        a = nt(s, e - lt) + lt;
    return n ? ha(a, i) : os(a, i)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const tb = BigInt(0),
    lf = BigInt(1);

function $w(t, e) {
    const n = (i, o) => {
            const s = o.negate();
            return i ? s : o
        },
        r = i => {
            const o = Math.ceil(e / i) + 1,
                s = 2 ** (i - 1);
            return {
                windows: o,
                windowSize: s
            }
        };
    return {
        constTimeNegate: n,
        unsafeLadder(i, o) {
            let s = t.ZERO,
                a = i;
            for (; o > tb;) o & lf && (s = s.add(a)), a = a.double(), o >>= lf;
            return s
        },
        precomputeWindow(i, o) {
            const {
                windows: s,
                windowSize: a
            } = r(o), l = [];
            let u = i,
                h = u;
            for (let g = 0; g < s; g++) {
                h = u, l.push(h);
                for (let w = 1; w < a; w++) h = h.add(u), l.push(h);
                u = h.double()
            }
            return l
        },
        wNAF(i, o, s) {
            const {
                windows: a,
                windowSize: l
            } = r(i);
            let u = t.ZERO,
                h = t.BASE;
            const g = BigInt(2 ** i - 1),
                w = 2 ** i,
                C = BigInt(i);
            for (let B = 0; B < a; B++) {
                const I = B * l;
                let R = Number(s & g);
                s >>= C, R > l && (R -= w, s += lf);
                const _ = I,
                    b = I + Math.abs(R) - 1,
                    v = B % 2 !== 0,
                    O = R < 0;
                R === 0 ? h = h.add(n(v, o[_])) : u = u.add(n(O, o[b]))
            }
            return {
                p: u,
                f: h
            }
        },
        wNAFCached(i, o, s, a) {
            const l = i._WINDOW_SIZE || 1;
            let u = o.get(i);
            return u || (u = this.precomputeWindow(i, l), l !== 1 && o.set(i, a(u))), this.wNAF(l, u, s)
        }
    }
}

function S0(t) {
    return YS(t.Fp), ps(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...zw(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const or = BigInt(0),
    Mn = BigInt(1),
    ll = BigInt(2),
    nb = BigInt(8),
    rb = {
        zip215: !0
    };

function ib(t) {
    const e = S0(t);
    return ps(t, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    }), Object.freeze({
        ...e
    })
}

function b0(t) {
    const e = ib(t),
        {
            Fp: n,
            n: r,
            prehash: i,
            hash: o,
            randomBytes: s,
            nByteLength: a,
            h: l
        } = e,
        u = ll << BigInt(a * 8) - Mn,
        h = n.create,
        g = e.uvRatio || ((E, x) => {
            try {
                return {
                    isValid: !0,
                    value: n.sqrt(E * n.inv(x))
                }
            } catch {
                return {
                    isValid: !1,
                    value: or
                }
            }
        }),
        w = e.adjustScalarBytes || (E => E),
        C = e.domain || ((E, x, T) => {
            if (x.length || T) throw new Error("Contexts/pre-hash are not supported");
            return E
        }),
        B = E => typeof E == "bigint" && or < E,
        I = (E, x) => B(E) && B(x) && E < x,
        R = E => E === or || I(E, u);

    function _(E, x) {
        if (I(E, x)) return E;
        throw new Error(`Expected valid scalar < ${x}, got ${typeof E} ${E}`)
    }

    function b(E) {
        return E === or ? E : _(E, r)
    }
    const v = new Map;

    function O(E) {
        if (!(E instanceof D)) throw new Error("ExtendedPoint expected")
    }
    class D {
        constructor(x, T, y, f) {
            if (this.ex = x, this.ey = T, this.ez = y, this.et = f, !R(x)) throw new Error("x required");
            if (!R(T)) throw new Error("y required");
            if (!R(y)) throw new Error("z required");
            if (!R(f)) throw new Error("t required")
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(x) {
            if (x instanceof D) throw new Error("extended point not allowed");
            const {
                x: T,
                y
            } = x || {};
            if (!R(T) || !R(y)) throw new Error("invalid affine point");
            return new D(T, y, Mn, h(T * y))
        }
        static normalizeZ(x) {
            const T = n.invertBatch(x.map(y => y.ez));
            return x.map((y, f) => y.toAffine(T[f])).map(D.fromAffine)
        }
        _setWindowSize(x) {
            this._WINDOW_SIZE = x, v.delete(this)
        }
        assertValidity() {
            const {
                a: x,
                d: T
            } = e;
            if (this.is0()) throw new Error("bad point: ZERO");
            const {
                ex: y,
                ey: f,
                ez: M,
                et: q
            } = this, G = h(y * y), Y = h(f * f), ie = h(M * M), le = h(ie * ie), ue = h(G * x), Re = h(ie * h(ue + Y)), be = h(le + h(T * h(G * Y)));
            if (Re !== be) throw new Error("bad point: equation left != right (1)");
            const _e = h(y * f),
                Me = h(M * q);
            if (_e !== Me) throw new Error("bad point: equation left != right (2)")
        }
        equals(x) {
            O(x);
            const {
                ex: T,
                ey: y,
                ez: f
            } = this, {
                ex: M,
                ey: q,
                ez: G
            } = x, Y = h(T * G), ie = h(M * f), le = h(y * G), ue = h(q * f);
            return Y === ie && le === ue
        }
        is0() {
            return this.equals(D.ZERO)
        }
        negate() {
            return new D(h(-this.ex), this.ey, this.ez, h(-this.et))
        }
        double() {
            const {
                a: x
            } = e, {
                ex: T,
                ey: y,
                ez: f
            } = this, M = h(T * T), q = h(y * y), G = h(ll * h(f * f)), Y = h(x * M), ie = T + y, le = h(h(ie * ie) - M - q), ue = Y + q, Re = ue - G, be = Y - q, _e = h(le * Re), Me = h(ue * be), Ee = h(le * be), me = h(Re * ue);
            return new D(_e, Me, me, Ee)
        }
        add(x) {
            O(x);
            const {
                a: T,
                d: y
            } = e, {
                ex: f,
                ey: M,
                ez: q,
                et: G
            } = this, {
                ex: Y,
                ey: ie,
                ez: le,
                et: ue
            } = x;
            if (T === BigInt(-1)) {
                const nn = h((M - f) * (ie + Y)),
                    We = h((M + f) * (ie - Y)),
                    He = h(We - nn);
                if (He === or) return this.double();
                const En = h(q * ll * ue),
                    qe = h(G * ll * le),
                    A = qe + En,
                    d = We + nn,
                    p = qe - En,
                    P = h(A * He),
                    W = h(d * p),
                    H = h(A * p),
                    V = h(He * d);
                return new D(P, W, V, H)
            }
            const Re = h(f * Y),
                be = h(M * ie),
                _e = h(G * y * ue),
                Me = h(q * le),
                Ee = h((f + M) * (Y + ie) - Re - be),
                me = Me - _e,
                Rn = Me + _e,
                je = h(be - T * Re),
                Xe = h(Ee * me),
                yo = h(Rn * je),
                Ke = h(Ee * je),
                Fe = h(me * Rn);
            return new D(Xe, yo, Fe, Ke)
        }
        subtract(x) {
            return this.add(x.negate())
        }
        wNAF(x) {
            return z.wNAFCached(this, v, x, D.normalizeZ)
        }
        multiply(x) {
            const {
                p: T,
                f: y
            } = this.wNAF(_(x, r));
            return D.normalizeZ([T, y])[0]
        }
        multiplyUnsafe(x) {
            let T = b(x);
            return T === or ? U : this.equals(U) || T === Mn ? this : this.equals(N) ? this.wNAF(T).p : z.unsafeLadder(this, T)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(l).is0()
        }
        isTorsionFree() {
            return z.unsafeLadder(this, r).is0()
        }
        toAffine(x) {
            const {
                ex: T,
                ey: y,
                ez: f
            } = this, M = this.is0();
            x == null && (x = M ? nb : n.inv(f));
            const q = h(T * x),
                G = h(y * x),
                Y = h(f * x);
            if (M) return {
                x: or,
                y: Mn
            };
            if (Y !== Mn) throw new Error("invZ was invalid");
            return {
                x: q,
                y: G
            }
        }
        clearCofactor() {
            const {
                h: x
            } = e;
            return x === Mn ? this : this.multiplyUnsafe(x)
        }
        static fromHex(x, T = !1) {
            const {
                d: y,
                a: f
            } = e, M = n.BYTES;
            x = Dt("pointHex", x, M);
            const q = x.slice(),
                G = x[M - 1];
            q[M - 1] = G & -129;
            const Y = Go(q);
            Y === or || (T ? _(Y, u) : _(Y, n.ORDER));
            const ie = h(Y * Y),
                le = h(ie - Mn),
                ue = h(y * ie - f);
            let {
                isValid: Re,
                value: be
            } = g(le, ue);
            if (!Re) throw new Error("Point.fromHex: invalid y coordinate");
            const _e = (be & Mn) === Mn,
                Me = (G & 128) !== 0;
            if (!T && be === or && Me) throw new Error("Point.fromHex: x=0 and x_0=1");
            return Me !== _e && (be = h(-be)), D.fromAffine({
                x: be,
                y: Y
            })
        }
        static fromPrivateKey(x) {
            return X(x).point
        }
        toRawBytes() {
            const {
                x,
                y: T
            } = this.toAffine(), y = ha(T, n.BYTES);
            return y[y.length - 1] |= x & Mn ? 128 : 0, y
        }
        toHex() {
            return lo(this.toRawBytes())
        }
    }
    D.BASE = new D(e.Gx, e.Gy, Mn, h(e.Gx * e.Gy)), D.ZERO = new D(or, Mn, Mn, or);
    const {
        BASE: N,
        ZERO: U
    } = D, z = $w(D, a * 8);

    function Z(E) {
        return nt(E, r)
    }

    function Q(E) {
        return Z(Go(E))
    }

    function X(E) {
        const x = a;
        E = Dt("private key", E, x);
        const T = Dt("hashed private key", o(E), 2 * x),
            y = w(T.slice(0, x)),
            f = T.slice(x, 2 * x),
            M = Q(y),
            q = N.multiply(M),
            G = q.toRawBytes();
        return {
            head: y,
            prefix: f,
            scalar: M,
            point: q,
            pointBytes: G
        }
    }

    function ce(E) {
        return X(E).pointBytes
    }

    function j(E = new Uint8Array, ...x) {
        const T = uo(...x);
        return Q(o(C(T, Dt("context", E), !!i)))
    }

    function c(E, x, T = {}) {
        E = Dt("message", E), i && (E = i(E));
        const {
            prefix: y,
            scalar: f,
            pointBytes: M
        } = X(x), q = j(T.context, y, E), G = N.multiply(q).toRawBytes(), Y = j(T.context, G, M, E), ie = Z(q + Y * f);
        b(ie);
        const le = uo(G, ha(ie, n.BYTES));
        return Dt("result", le, a * 2)
    }
    const m = rb;

    function S(E, x, T, y = m) {
        const {
            context: f,
            zip215: M
        } = y, q = n.BYTES;
        E = Dt("signature", E, 2 * q), x = Dt("message", x), i && (x = i(x));
        const G = Go(E.slice(q, 2 * q));
        let Y, ie, le;
        try {
            Y = D.fromHex(T, M), ie = D.fromHex(E.slice(0, q), M), le = N.multiplyUnsafe(G)
        } catch {
            return !1
        }
        if (!M && Y.isSmallOrder()) return !1;
        const ue = j(f, ie.toRawBytes(), Y.toRawBytes(), x);
        return ie.add(Y.multiplyUnsafe(ue)).subtract(le).clearCofactor().equals(D.ZERO)
    }
    return N._setWindowSize(8), {
        CURVE: e,
        getPublicKey: ce,
        sign: c,
        verify: S,
        ExtendedPoint: D,
        utils: {
            getExtendedPublicKey: X,
            randomPrivateKey: () => s(n.BYTES),
            precompute(E = 8, x = D.BASE) {
                return x._setWindowSize(E), x.multiply(BigInt(3)), x
            }
        }
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
    om = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const ob = BigInt(1),
    Vd = BigInt(2),
    sb = BigInt(5),
    sm = BigInt(10),
    ab = BigInt(20),
    lb = BigInt(40),
    am = BigInt(80);

function ub(t) {
    const e = _0,
        r = t * t % e * t % e,
        i = dt(r, Vd, e) * r % e,
        o = dt(i, ob, e) * t % e,
        s = dt(o, sb, e) * o % e,
        a = dt(s, sm, e) * s % e,
        l = dt(a, ab, e) * a % e,
        u = dt(l, lb, e) * l % e,
        h = dt(u, am, e) * u % e,
        g = dt(h, am, e) * u % e,
        w = dt(g, sm, e) * s % e;
    return {
        pow_p_5_8: dt(w, Vd, e) * t % e,
        b2: r
    }
}

function cb(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t
}

function fb(t, e) {
    const n = _0,
        r = nt(e * e * e, n),
        i = nt(r * r * e, n),
        o = ub(t * i).pow_p_5_8;
    let s = nt(t * r * o, n);
    const a = nt(e * s * s, n),
        l = s,
        u = nt(s * om, n),
        h = a === t,
        g = a === nt(-t, n),
        w = a === nt(-t * om, n);
    return h && (s = l), (g || w) && (s = u), GS(s, n) && (s = nt(-s, n)), {
        isValid: h || g,
        value: s
    }
}
const Kr = Fw(_0, void 0, !0),
    k0 = {
        a: BigInt(-1),
        d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
        Fp: Kr,
        n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
        h: BigInt(8),
        Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
        Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
        hash: Pw,
        randomBytes: Lw,
        adjustScalarBytes: cb,
        uvRatio: fb
    },
    C0 = b0(k0);

function Kw(t, e, n) {
    if (e.length > 255) throw new Error("Context is too big");
    return Bw(Tw("SigEd25519 no Ed25519 collisions"), new Uint8Array([n ? 1 : 0, e.length]), e, t)
}({
    ...k0
});
({
    ...k0
});
const db = (Kr.ORDER + BigInt(3)) / BigInt(8);
Kr.pow(Vd, db);
Kr.sqrt(Kr.neg(Kr.ONE));
(Kr.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
JS(Kr, Kr.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var A0 = {
    exports: {}
};
const hb = {},
    pb = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mb = ah(pb);
A0.exports;
(function(t) {
    (function(e, n) {
        function r(j, c) {
            if (!j) throw new Error(c || "Assertion failed")
        }

        function i(j, c) {
            j.super_ = c;
            var m = function() {};
            m.prototype = c.prototype, j.prototype = new m, j.prototype.constructor = j
        }

        function o(j, c, m) {
            if (o.isBN(j)) return j;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, j !== null && ((c === "le" || c === "be") && (m = c, c = 10), this._init(j || 0, c || 10, m || "be"))
        }
        typeof e == "object" ? e.exports = o : n.BN = o, o.BN = o, o.wordSize = 26;
        var s;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = mb.Buffer
        } catch {}
        o.isBN = function(c) {
            return c instanceof o ? !0 : c !== null && typeof c == "object" && c.constructor.wordSize === o.wordSize && Array.isArray(c.words)
        }, o.max = function(c, m) {
            return c.cmp(m) > 0 ? c : m
        }, o.min = function(c, m) {
            return c.cmp(m) < 0 ? c : m
        }, o.prototype._init = function(c, m, S) {
            if (typeof c == "number") return this._initNumber(c, m, S);
            if (typeof c == "object") return this._initArray(c, m, S);
            m === "hex" && (m = 16), r(m === (m | 0) && m >= 2 && m <= 36), c = c.toString().replace(/\s+/g, "");
            var L = 0;
            c[0] === "-" && (L++, this.negative = 1), L < c.length && (m === 16 ? this._parseHex(c, L, S) : (this._parseBase(c, m, L), S === "le" && this._initArray(this.toArray(), m, S)))
        }, o.prototype._initNumber = function(c, m, S) {
            c < 0 && (this.negative = 1, c = -c), c < 67108864 ? (this.words = [c & 67108863], this.length = 1) : c < 4503599627370496 ? (this.words = [c & 67108863, c / 67108864 & 67108863], this.length = 2) : (r(c < 9007199254740992), this.words = [c & 67108863, c / 67108864 & 67108863, 1], this.length = 3), S === "le" && this._initArray(this.toArray(), m, S)
        }, o.prototype._initArray = function(c, m, S) {
            if (r(typeof c.length == "number"), c.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(c.length / 3), this.words = new Array(this.length);
            for (var L = 0; L < this.length; L++) this.words[L] = 0;
            var E, x, T = 0;
            if (S === "be")
                for (L = c.length - 1, E = 0; L >= 0; L -= 3) x = c[L] | c[L - 1] << 8 | c[L - 2] << 16, this.words[E] |= x << T & 67108863, this.words[E + 1] = x >>> 26 - T & 67108863, T += 24, T >= 26 && (T -= 26, E++);
            else if (S === "le")
                for (L = 0, E = 0; L < c.length; L += 3) x = c[L] | c[L + 1] << 8 | c[L + 2] << 16, this.words[E] |= x << T & 67108863, this.words[E + 1] = x >>> 26 - T & 67108863, T += 24, T >= 26 && (T -= 26, E++);
            return this._strip()
        };

        function a(j, c) {
            var m = j.charCodeAt(c);
            if (m >= 48 && m <= 57) return m - 48;
            if (m >= 65 && m <= 70) return m - 55;
            if (m >= 97 && m <= 102) return m - 87;
            r(!1, "Invalid character in " + j)
        }

        function l(j, c, m) {
            var S = a(j, m);
            return m - 1 >= c && (S |= a(j, m - 1) << 4), S
        }
        o.prototype._parseHex = function(c, m, S) {
            this.length = Math.ceil((c.length - m) / 6), this.words = new Array(this.length);
            for (var L = 0; L < this.length; L++) this.words[L] = 0;
            var E = 0,
                x = 0,
                T;
            if (S === "be")
                for (L = c.length - 1; L >= m; L -= 2) T = l(c, m, L) << E, this.words[x] |= T & 67108863, E >= 18 ? (E -= 18, x += 1, this.words[x] |= T >>> 26) : E += 8;
            else {
                var y = c.length - m;
                for (L = y % 2 === 0 ? m + 1 : m; L < c.length; L += 2) T = l(c, m, L) << E, this.words[x] |= T & 67108863, E >= 18 ? (E -= 18, x += 1, this.words[x] |= T >>> 26) : E += 8
            }
            this._strip()
        };

        function u(j, c, m, S) {
            for (var L = 0, E = 0, x = Math.min(j.length, m), T = c; T < x; T++) {
                var y = j.charCodeAt(T) - 48;
                L *= S, y >= 49 ? E = y - 49 + 10 : y >= 17 ? E = y - 17 + 10 : E = y, r(y >= 0 && E < S, "Invalid character"), L += E
            }
            return L
        }
        o.prototype._parseBase = function(c, m, S) {
            this.words = [0], this.length = 1;
            for (var L = 0, E = 1; E <= 67108863; E *= m) L++;
            L--, E = E / m | 0;
            for (var x = c.length - S, T = x % L, y = Math.min(x, x - T) + S, f = 0, M = S; M < y; M += L) f = u(c, M, M + L, m), this.imuln(E), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
            if (T !== 0) {
                var q = 1;
                for (f = u(c, M, c.length, m), M = 0; M < T; M++) q *= m;
                this.imuln(q), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
            }
            this._strip()
        }, o.prototype.copy = function(c) {
            c.words = new Array(this.length);
            for (var m = 0; m < this.length; m++) c.words[m] = this.words[m];
            c.length = this.length, c.negative = this.negative, c.red = this.red
        };

        function h(j, c) {
            j.words = c.words, j.length = c.length, j.negative = c.negative, j.red = c.red
        }
        if (o.prototype._move = function(c) {
                h(c, this)
            }, o.prototype.clone = function() {
                var c = new o(null);
                return this.copy(c), c
            }, o.prototype._expand = function(c) {
                for (; this.length < c;) this.words[this.length++] = 0;
                return this
            }, o.prototype._strip = function() {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, o.prototype._normSign = function() {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = g
        } catch {
            o.prototype.inspect = g
        } else o.prototype.inspect = g;

        function g() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var w = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            C = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            B = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        o.prototype.toString = function(c, m) {
            c = c || 10, m = m | 0 || 1;
            var S;
            if (c === 16 || c === "hex") {
                S = "";
                for (var L = 0, E = 0, x = 0; x < this.length; x++) {
                    var T = this.words[x],
                        y = ((T << L | E) & 16777215).toString(16);
                    E = T >>> 24 - L & 16777215, L += 2, L >= 26 && (L -= 26, x--), E !== 0 || x !== this.length - 1 ? S = w[6 - y.length] + y + S : S = y + S
                }
                for (E !== 0 && (S = E.toString(16) + S); S.length % m !== 0;) S = "0" + S;
                return this.negative !== 0 && (S = "-" + S), S
            }
            if (c === (c | 0) && c >= 2 && c <= 36) {
                var f = C[c],
                    M = B[c];
                S = "";
                var q = this.clone();
                for (q.negative = 0; !q.isZero();) {
                    var G = q.modrn(M).toString(c);
                    q = q.idivn(M), q.isZero() ? S = G + S : S = w[f - G.length] + G + S
                }
                for (this.isZero() && (S = "0" + S); S.length % m !== 0;) S = "0" + S;
                return this.negative !== 0 && (S = "-" + S), S
            }
            r(!1, "Base should be between 2 and 36")
        }, o.prototype.toNumber = function() {
            var c = this.words[0];
            return this.length === 2 ? c += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? c += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -c : c
        }, o.prototype.toJSON = function() {
            return this.toString(16, 2)
        }, s && (o.prototype.toBuffer = function(c, m) {
            return this.toArrayLike(s, c, m)
        }), o.prototype.toArray = function(c, m) {
            return this.toArrayLike(Array, c, m)
        };
        var I = function(c, m) {
            return c.allocUnsafe ? c.allocUnsafe(m) : new c(m)
        };
        o.prototype.toArrayLike = function(c, m, S) {
            this._strip();
            var L = this.byteLength(),
                E = S || Math.max(1, L);
            r(L <= E, "byte array longer than desired length"), r(E > 0, "Requested array length <= 0");
            var x = I(c, E),
                T = m === "le" ? "LE" : "BE";
            return this["_toArrayLike" + T](x, L), x
        }, o.prototype._toArrayLikeLE = function(c, m) {
            for (var S = 0, L = 0, E = 0, x = 0; E < this.length; E++) {
                var T = this.words[E] << x | L;
                c[S++] = T & 255, S < c.length && (c[S++] = T >> 8 & 255), S < c.length && (c[S++] = T >> 16 & 255), x === 6 ? (S < c.length && (c[S++] = T >> 24 & 255), L = 0, x = 0) : (L = T >>> 24, x += 2)
            }
            if (S < c.length)
                for (c[S++] = L; S < c.length;) c[S++] = 0
        }, o.prototype._toArrayLikeBE = function(c, m) {
            for (var S = c.length - 1, L = 0, E = 0, x = 0; E < this.length; E++) {
                var T = this.words[E] << x | L;
                c[S--] = T & 255, S >= 0 && (c[S--] = T >> 8 & 255), S >= 0 && (c[S--] = T >> 16 & 255), x === 6 ? (S >= 0 && (c[S--] = T >> 24 & 255), L = 0, x = 0) : (L = T >>> 24, x += 2)
            }
            if (S >= 0)
                for (c[S--] = L; S >= 0;) c[S--] = 0
        }, Math.clz32 ? o.prototype._countBits = function(c) {
            return 32 - Math.clz32(c)
        } : o.prototype._countBits = function(c) {
            var m = c,
                S = 0;
            return m >= 4096 && (S += 13, m >>>= 13), m >= 64 && (S += 7, m >>>= 7), m >= 8 && (S += 4, m >>>= 4), m >= 2 && (S += 2, m >>>= 2), S + m
        }, o.prototype._zeroBits = function(c) {
            if (c === 0) return 26;
            var m = c,
                S = 0;
            return m & 8191 || (S += 13, m >>>= 13), m & 127 || (S += 7, m >>>= 7), m & 15 || (S += 4, m >>>= 4), m & 3 || (S += 2, m >>>= 2), m & 1 || S++, S
        }, o.prototype.bitLength = function() {
            var c = this.words[this.length - 1],
                m = this._countBits(c);
            return (this.length - 1) * 26 + m
        };

        function R(j) {
            for (var c = new Array(j.bitLength()), m = 0; m < c.length; m++) {
                var S = m / 26 | 0,
                    L = m % 26;
                c[m] = j.words[S] >>> L & 1
            }
            return c
        }
        o.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var c = 0, m = 0; m < this.length; m++) {
                var S = this._zeroBits(this.words[m]);
                if (c += S, S !== 26) break
            }
            return c
        }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, o.prototype.toTwos = function(c) {
            return this.negative !== 0 ? this.abs().inotn(c).iaddn(1) : this.clone()
        }, o.prototype.fromTwos = function(c) {
            return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone()
        }, o.prototype.isNeg = function() {
            return this.negative !== 0
        }, o.prototype.neg = function() {
            return this.clone().ineg()
        }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
        }, o.prototype.iuor = function(c) {
            for (; this.length < c.length;) this.words[this.length++] = 0;
            for (var m = 0; m < c.length; m++) this.words[m] = this.words[m] | c.words[m];
            return this._strip()
        }, o.prototype.ior = function(c) {
            return r((this.negative | c.negative) === 0), this.iuor(c)
        }, o.prototype.or = function(c) {
            return this.length > c.length ? this.clone().ior(c) : c.clone().ior(this)
        }, o.prototype.uor = function(c) {
            return this.length > c.length ? this.clone().iuor(c) : c.clone().iuor(this)
        }, o.prototype.iuand = function(c) {
            var m;
            this.length > c.length ? m = c : m = this;
            for (var S = 0; S < m.length; S++) this.words[S] = this.words[S] & c.words[S];
            return this.length = m.length, this._strip()
        }, o.prototype.iand = function(c) {
            return r((this.negative | c.negative) === 0), this.iuand(c)
        }, o.prototype.and = function(c) {
            return this.length > c.length ? this.clone().iand(c) : c.clone().iand(this)
        }, o.prototype.uand = function(c) {
            return this.length > c.length ? this.clone().iuand(c) : c.clone().iuand(this)
        }, o.prototype.iuxor = function(c) {
            var m, S;
            this.length > c.length ? (m = this, S = c) : (m = c, S = this);
            for (var L = 0; L < S.length; L++) this.words[L] = m.words[L] ^ S.words[L];
            if (this !== m)
                for (; L < m.length; L++) this.words[L] = m.words[L];
            return this.length = m.length, this._strip()
        }, o.prototype.ixor = function(c) {
            return r((this.negative | c.negative) === 0), this.iuxor(c)
        }, o.prototype.xor = function(c) {
            return this.length > c.length ? this.clone().ixor(c) : c.clone().ixor(this)
        }, o.prototype.uxor = function(c) {
            return this.length > c.length ? this.clone().iuxor(c) : c.clone().iuxor(this)
        }, o.prototype.inotn = function(c) {
            r(typeof c == "number" && c >= 0);
            var m = Math.ceil(c / 26) | 0,
                S = c % 26;
            this._expand(m), S > 0 && m--;
            for (var L = 0; L < m; L++) this.words[L] = ~this.words[L] & 67108863;
            return S > 0 && (this.words[L] = ~this.words[L] & 67108863 >> 26 - S), this._strip()
        }, o.prototype.notn = function(c) {
            return this.clone().inotn(c)
        }, o.prototype.setn = function(c, m) {
            r(typeof c == "number" && c >= 0);
            var S = c / 26 | 0,
                L = c % 26;
            return this._expand(S + 1), m ? this.words[S] = this.words[S] | 1 << L : this.words[S] = this.words[S] & ~(1 << L), this._strip()
        }, o.prototype.iadd = function(c) {
            var m;
            if (this.negative !== 0 && c.negative === 0) return this.negative = 0, m = this.isub(c), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && c.negative !== 0) return c.negative = 0, m = this.isub(c), c.negative = 1, m._normSign();
            var S, L;
            this.length > c.length ? (S = this, L = c) : (S = c, L = this);
            for (var E = 0, x = 0; x < L.length; x++) m = (S.words[x] | 0) + (L.words[x] | 0) + E, this.words[x] = m & 67108863, E = m >>> 26;
            for (; E !== 0 && x < S.length; x++) m = (S.words[x] | 0) + E, this.words[x] = m & 67108863, E = m >>> 26;
            if (this.length = S.length, E !== 0) this.words[this.length] = E, this.length++;
            else if (S !== this)
                for (; x < S.length; x++) this.words[x] = S.words[x];
            return this
        }, o.prototype.add = function(c) {
            var m;
            return c.negative !== 0 && this.negative === 0 ? (c.negative = 0, m = this.sub(c), c.negative ^= 1, m) : c.negative === 0 && this.negative !== 0 ? (this.negative = 0, m = c.sub(this), this.negative = 1, m) : this.length > c.length ? this.clone().iadd(c) : c.clone().iadd(this)
        }, o.prototype.isub = function(c) {
            if (c.negative !== 0) {
                c.negative = 0;
                var m = this.iadd(c);
                return c.negative = 1, m._normSign()
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(c), this.negative = 1, this._normSign();
            var S = this.cmp(c);
            if (S === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var L, E;
            S > 0 ? (L = this, E = c) : (L = c, E = this);
            for (var x = 0, T = 0; T < E.length; T++) m = (L.words[T] | 0) - (E.words[T] | 0) + x, x = m >> 26, this.words[T] = m & 67108863;
            for (; x !== 0 && T < L.length; T++) m = (L.words[T] | 0) + x, x = m >> 26, this.words[T] = m & 67108863;
            if (x === 0 && T < L.length && L !== this)
                for (; T < L.length; T++) this.words[T] = L.words[T];
            return this.length = Math.max(this.length, T), L !== this && (this.negative = 1), this._strip()
        }, o.prototype.sub = function(c) {
            return this.clone().isub(c)
        };

        function _(j, c, m) {
            m.negative = c.negative ^ j.negative;
            var S = j.length + c.length | 0;
            m.length = S, S = S - 1 | 0;
            var L = j.words[0] | 0,
                E = c.words[0] | 0,
                x = L * E,
                T = x & 67108863,
                y = x / 67108864 | 0;
            m.words[0] = T;
            for (var f = 1; f < S; f++) {
                for (var M = y >>> 26, q = y & 67108863, G = Math.min(f, c.length - 1), Y = Math.max(0, f - j.length + 1); Y <= G; Y++) {
                    var ie = f - Y | 0;
                    L = j.words[ie] | 0, E = c.words[Y] | 0, x = L * E + q, M += x / 67108864 | 0, q = x & 67108863
                }
                m.words[f] = q | 0, y = M | 0
            }
            return y !== 0 ? m.words[f] = y | 0 : m.length--, m._strip()
        }
        var b = function(c, m, S) {
            var L = c.words,
                E = m.words,
                x = S.words,
                T = 0,
                y, f, M, q = L[0] | 0,
                G = q & 8191,
                Y = q >>> 13,
                ie = L[1] | 0,
                le = ie & 8191,
                ue = ie >>> 13,
                Re = L[2] | 0,
                be = Re & 8191,
                _e = Re >>> 13,
                Me = L[3] | 0,
                Ee = Me & 8191,
                me = Me >>> 13,
                Rn = L[4] | 0,
                je = Rn & 8191,
                Xe = Rn >>> 13,
                yo = L[5] | 0,
                Ke = yo & 8191,
                Fe = yo >>> 13,
                nn = L[6] | 0,
                We = nn & 8191,
                He = nn >>> 13,
                En = L[7] | 0,
                qe = En & 8191,
                A = En >>> 13,
                d = L[8] | 0,
                p = d & 8191,
                P = d >>> 13,
                W = L[9] | 0,
                H = W & 8191,
                V = W >>> 13,
                ke = E[0] | 0,
                Se = ke & 8191,
                we = ke >>> 13,
                Ve = E[1] | 0,
                ve = Ve & 8191,
                yt = Ve >>> 13,
                ep = E[2] | 0,
                vt = ep & 8191,
                wt = ep >>> 13,
                tp = E[3] | 0,
                xt = tp & 8191,
                Et = tp >>> 13,
                np = E[4] | 0,
                St = np & 8191,
                bt = np >>> 13,
                rp = E[5] | 0,
                _t = rp & 8191,
                kt = rp >>> 13,
                ip = E[6] | 0,
                Ct = ip & 8191,
                At = ip >>> 13,
                op = E[7] | 0,
                It = op & 8191,
                Tt = op >>> 13,
                sp = E[8] | 0,
                Bt = sp & 8191,
                Rt = sp >>> 13,
                ap = E[9] | 0,
                Mt = ap & 8191,
                Lt = ap >>> 13;
            S.negative = c.negative ^ m.negative, S.length = 19, y = Math.imul(G, Se), f = Math.imul(G, we), f = f + Math.imul(Y, Se) | 0, M = Math.imul(Y, we);
            var tc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (tc >>> 26) | 0, tc &= 67108863, y = Math.imul(le, Se), f = Math.imul(le, we), f = f + Math.imul(ue, Se) | 0, M = Math.imul(ue, we), y = y + Math.imul(G, ve) | 0, f = f + Math.imul(G, yt) | 0, f = f + Math.imul(Y, ve) | 0, M = M + Math.imul(Y, yt) | 0;
            var nc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (nc >>> 26) | 0, nc &= 67108863, y = Math.imul(be, Se), f = Math.imul(be, we), f = f + Math.imul(_e, Se) | 0, M = Math.imul(_e, we), y = y + Math.imul(le, ve) | 0, f = f + Math.imul(le, yt) | 0, f = f + Math.imul(ue, ve) | 0, M = M + Math.imul(ue, yt) | 0, y = y + Math.imul(G, vt) | 0, f = f + Math.imul(G, wt) | 0, f = f + Math.imul(Y, vt) | 0, M = M + Math.imul(Y, wt) | 0;
            var rc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (rc >>> 26) | 0, rc &= 67108863, y = Math.imul(Ee, Se), f = Math.imul(Ee, we), f = f + Math.imul(me, Se) | 0, M = Math.imul(me, we), y = y + Math.imul(be, ve) | 0, f = f + Math.imul(be, yt) | 0, f = f + Math.imul(_e, ve) | 0, M = M + Math.imul(_e, yt) | 0, y = y + Math.imul(le, vt) | 0, f = f + Math.imul(le, wt) | 0, f = f + Math.imul(ue, vt) | 0, M = M + Math.imul(ue, wt) | 0, y = y + Math.imul(G, xt) | 0, f = f + Math.imul(G, Et) | 0, f = f + Math.imul(Y, xt) | 0, M = M + Math.imul(Y, Et) | 0;
            var ic = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (ic >>> 26) | 0, ic &= 67108863, y = Math.imul(je, Se), f = Math.imul(je, we), f = f + Math.imul(Xe, Se) | 0, M = Math.imul(Xe, we), y = y + Math.imul(Ee, ve) | 0, f = f + Math.imul(Ee, yt) | 0, f = f + Math.imul(me, ve) | 0, M = M + Math.imul(me, yt) | 0, y = y + Math.imul(be, vt) | 0, f = f + Math.imul(be, wt) | 0, f = f + Math.imul(_e, vt) | 0, M = M + Math.imul(_e, wt) | 0, y = y + Math.imul(le, xt) | 0, f = f + Math.imul(le, Et) | 0, f = f + Math.imul(ue, xt) | 0, M = M + Math.imul(ue, Et) | 0, y = y + Math.imul(G, St) | 0, f = f + Math.imul(G, bt) | 0, f = f + Math.imul(Y, St) | 0, M = M + Math.imul(Y, bt) | 0;
            var oc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (oc >>> 26) | 0, oc &= 67108863, y = Math.imul(Ke, Se), f = Math.imul(Ke, we), f = f + Math.imul(Fe, Se) | 0, M = Math.imul(Fe, we), y = y + Math.imul(je, ve) | 0, f = f + Math.imul(je, yt) | 0, f = f + Math.imul(Xe, ve) | 0, M = M + Math.imul(Xe, yt) | 0, y = y + Math.imul(Ee, vt) | 0, f = f + Math.imul(Ee, wt) | 0, f = f + Math.imul(me, vt) | 0, M = M + Math.imul(me, wt) | 0, y = y + Math.imul(be, xt) | 0, f = f + Math.imul(be, Et) | 0, f = f + Math.imul(_e, xt) | 0, M = M + Math.imul(_e, Et) | 0, y = y + Math.imul(le, St) | 0, f = f + Math.imul(le, bt) | 0, f = f + Math.imul(ue, St) | 0, M = M + Math.imul(ue, bt) | 0, y = y + Math.imul(G, _t) | 0, f = f + Math.imul(G, kt) | 0, f = f + Math.imul(Y, _t) | 0, M = M + Math.imul(Y, kt) | 0;
            var sc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (sc >>> 26) | 0, sc &= 67108863, y = Math.imul(We, Se), f = Math.imul(We, we), f = f + Math.imul(He, Se) | 0, M = Math.imul(He, we), y = y + Math.imul(Ke, ve) | 0, f = f + Math.imul(Ke, yt) | 0, f = f + Math.imul(Fe, ve) | 0, M = M + Math.imul(Fe, yt) | 0, y = y + Math.imul(je, vt) | 0, f = f + Math.imul(je, wt) | 0, f = f + Math.imul(Xe, vt) | 0, M = M + Math.imul(Xe, wt) | 0, y = y + Math.imul(Ee, xt) | 0, f = f + Math.imul(Ee, Et) | 0, f = f + Math.imul(me, xt) | 0, M = M + Math.imul(me, Et) | 0, y = y + Math.imul(be, St) | 0, f = f + Math.imul(be, bt) | 0, f = f + Math.imul(_e, St) | 0, M = M + Math.imul(_e, bt) | 0, y = y + Math.imul(le, _t) | 0, f = f + Math.imul(le, kt) | 0, f = f + Math.imul(ue, _t) | 0, M = M + Math.imul(ue, kt) | 0, y = y + Math.imul(G, Ct) | 0, f = f + Math.imul(G, At) | 0, f = f + Math.imul(Y, Ct) | 0, M = M + Math.imul(Y, At) | 0;
            var ac = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (ac >>> 26) | 0, ac &= 67108863, y = Math.imul(qe, Se), f = Math.imul(qe, we), f = f + Math.imul(A, Se) | 0, M = Math.imul(A, we), y = y + Math.imul(We, ve) | 0, f = f + Math.imul(We, yt) | 0, f = f + Math.imul(He, ve) | 0, M = M + Math.imul(He, yt) | 0, y = y + Math.imul(Ke, vt) | 0, f = f + Math.imul(Ke, wt) | 0, f = f + Math.imul(Fe, vt) | 0, M = M + Math.imul(Fe, wt) | 0, y = y + Math.imul(je, xt) | 0, f = f + Math.imul(je, Et) | 0, f = f + Math.imul(Xe, xt) | 0, M = M + Math.imul(Xe, Et) | 0, y = y + Math.imul(Ee, St) | 0, f = f + Math.imul(Ee, bt) | 0, f = f + Math.imul(me, St) | 0, M = M + Math.imul(me, bt) | 0, y = y + Math.imul(be, _t) | 0, f = f + Math.imul(be, kt) | 0, f = f + Math.imul(_e, _t) | 0, M = M + Math.imul(_e, kt) | 0, y = y + Math.imul(le, Ct) | 0, f = f + Math.imul(le, At) | 0, f = f + Math.imul(ue, Ct) | 0, M = M + Math.imul(ue, At) | 0, y = y + Math.imul(G, It) | 0, f = f + Math.imul(G, Tt) | 0, f = f + Math.imul(Y, It) | 0, M = M + Math.imul(Y, Tt) | 0;
            var lc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (lc >>> 26) | 0, lc &= 67108863, y = Math.imul(p, Se), f = Math.imul(p, we), f = f + Math.imul(P, Se) | 0, M = Math.imul(P, we), y = y + Math.imul(qe, ve) | 0, f = f + Math.imul(qe, yt) | 0, f = f + Math.imul(A, ve) | 0, M = M + Math.imul(A, yt) | 0, y = y + Math.imul(We, vt) | 0, f = f + Math.imul(We, wt) | 0, f = f + Math.imul(He, vt) | 0, M = M + Math.imul(He, wt) | 0, y = y + Math.imul(Ke, xt) | 0, f = f + Math.imul(Ke, Et) | 0, f = f + Math.imul(Fe, xt) | 0, M = M + Math.imul(Fe, Et) | 0, y = y + Math.imul(je, St) | 0, f = f + Math.imul(je, bt) | 0, f = f + Math.imul(Xe, St) | 0, M = M + Math.imul(Xe, bt) | 0, y = y + Math.imul(Ee, _t) | 0, f = f + Math.imul(Ee, kt) | 0, f = f + Math.imul(me, _t) | 0, M = M + Math.imul(me, kt) | 0, y = y + Math.imul(be, Ct) | 0, f = f + Math.imul(be, At) | 0, f = f + Math.imul(_e, Ct) | 0, M = M + Math.imul(_e, At) | 0, y = y + Math.imul(le, It) | 0, f = f + Math.imul(le, Tt) | 0, f = f + Math.imul(ue, It) | 0, M = M + Math.imul(ue, Tt) | 0, y = y + Math.imul(G, Bt) | 0, f = f + Math.imul(G, Rt) | 0, f = f + Math.imul(Y, Bt) | 0, M = M + Math.imul(Y, Rt) | 0;
            var uc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (uc >>> 26) | 0, uc &= 67108863, y = Math.imul(H, Se), f = Math.imul(H, we), f = f + Math.imul(V, Se) | 0, M = Math.imul(V, we), y = y + Math.imul(p, ve) | 0, f = f + Math.imul(p, yt) | 0, f = f + Math.imul(P, ve) | 0, M = M + Math.imul(P, yt) | 0, y = y + Math.imul(qe, vt) | 0, f = f + Math.imul(qe, wt) | 0, f = f + Math.imul(A, vt) | 0, M = M + Math.imul(A, wt) | 0, y = y + Math.imul(We, xt) | 0, f = f + Math.imul(We, Et) | 0, f = f + Math.imul(He, xt) | 0, M = M + Math.imul(He, Et) | 0, y = y + Math.imul(Ke, St) | 0, f = f + Math.imul(Ke, bt) | 0, f = f + Math.imul(Fe, St) | 0, M = M + Math.imul(Fe, bt) | 0, y = y + Math.imul(je, _t) | 0, f = f + Math.imul(je, kt) | 0, f = f + Math.imul(Xe, _t) | 0, M = M + Math.imul(Xe, kt) | 0, y = y + Math.imul(Ee, Ct) | 0, f = f + Math.imul(Ee, At) | 0, f = f + Math.imul(me, Ct) | 0, M = M + Math.imul(me, At) | 0, y = y + Math.imul(be, It) | 0, f = f + Math.imul(be, Tt) | 0, f = f + Math.imul(_e, It) | 0, M = M + Math.imul(_e, Tt) | 0, y = y + Math.imul(le, Bt) | 0, f = f + Math.imul(le, Rt) | 0, f = f + Math.imul(ue, Bt) | 0, M = M + Math.imul(ue, Rt) | 0, y = y + Math.imul(G, Mt) | 0, f = f + Math.imul(G, Lt) | 0, f = f + Math.imul(Y, Mt) | 0, M = M + Math.imul(Y, Lt) | 0;
            var cc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (cc >>> 26) | 0, cc &= 67108863, y = Math.imul(H, ve), f = Math.imul(H, yt), f = f + Math.imul(V, ve) | 0, M = Math.imul(V, yt), y = y + Math.imul(p, vt) | 0, f = f + Math.imul(p, wt) | 0, f = f + Math.imul(P, vt) | 0, M = M + Math.imul(P, wt) | 0, y = y + Math.imul(qe, xt) | 0, f = f + Math.imul(qe, Et) | 0, f = f + Math.imul(A, xt) | 0, M = M + Math.imul(A, Et) | 0, y = y + Math.imul(We, St) | 0, f = f + Math.imul(We, bt) | 0, f = f + Math.imul(He, St) | 0, M = M + Math.imul(He, bt) | 0, y = y + Math.imul(Ke, _t) | 0, f = f + Math.imul(Ke, kt) | 0, f = f + Math.imul(Fe, _t) | 0, M = M + Math.imul(Fe, kt) | 0, y = y + Math.imul(je, Ct) | 0, f = f + Math.imul(je, At) | 0, f = f + Math.imul(Xe, Ct) | 0, M = M + Math.imul(Xe, At) | 0, y = y + Math.imul(Ee, It) | 0, f = f + Math.imul(Ee, Tt) | 0, f = f + Math.imul(me, It) | 0, M = M + Math.imul(me, Tt) | 0, y = y + Math.imul(be, Bt) | 0, f = f + Math.imul(be, Rt) | 0, f = f + Math.imul(_e, Bt) | 0, M = M + Math.imul(_e, Rt) | 0, y = y + Math.imul(le, Mt) | 0, f = f + Math.imul(le, Lt) | 0, f = f + Math.imul(ue, Mt) | 0, M = M + Math.imul(ue, Lt) | 0;
            var fc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (fc >>> 26) | 0, fc &= 67108863, y = Math.imul(H, vt), f = Math.imul(H, wt), f = f + Math.imul(V, vt) | 0, M = Math.imul(V, wt), y = y + Math.imul(p, xt) | 0, f = f + Math.imul(p, Et) | 0, f = f + Math.imul(P, xt) | 0, M = M + Math.imul(P, Et) | 0, y = y + Math.imul(qe, St) | 0, f = f + Math.imul(qe, bt) | 0, f = f + Math.imul(A, St) | 0, M = M + Math.imul(A, bt) | 0, y = y + Math.imul(We, _t) | 0, f = f + Math.imul(We, kt) | 0, f = f + Math.imul(He, _t) | 0, M = M + Math.imul(He, kt) | 0, y = y + Math.imul(Ke, Ct) | 0, f = f + Math.imul(Ke, At) | 0, f = f + Math.imul(Fe, Ct) | 0, M = M + Math.imul(Fe, At) | 0, y = y + Math.imul(je, It) | 0, f = f + Math.imul(je, Tt) | 0, f = f + Math.imul(Xe, It) | 0, M = M + Math.imul(Xe, Tt) | 0, y = y + Math.imul(Ee, Bt) | 0, f = f + Math.imul(Ee, Rt) | 0, f = f + Math.imul(me, Bt) | 0, M = M + Math.imul(me, Rt) | 0, y = y + Math.imul(be, Mt) | 0, f = f + Math.imul(be, Lt) | 0, f = f + Math.imul(_e, Mt) | 0, M = M + Math.imul(_e, Lt) | 0;
            var dc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (dc >>> 26) | 0, dc &= 67108863, y = Math.imul(H, xt), f = Math.imul(H, Et), f = f + Math.imul(V, xt) | 0, M = Math.imul(V, Et), y = y + Math.imul(p, St) | 0, f = f + Math.imul(p, bt) | 0, f = f + Math.imul(P, St) | 0, M = M + Math.imul(P, bt) | 0, y = y + Math.imul(qe, _t) | 0, f = f + Math.imul(qe, kt) | 0, f = f + Math.imul(A, _t) | 0, M = M + Math.imul(A, kt) | 0, y = y + Math.imul(We, Ct) | 0, f = f + Math.imul(We, At) | 0, f = f + Math.imul(He, Ct) | 0, M = M + Math.imul(He, At) | 0, y = y + Math.imul(Ke, It) | 0, f = f + Math.imul(Ke, Tt) | 0, f = f + Math.imul(Fe, It) | 0, M = M + Math.imul(Fe, Tt) | 0, y = y + Math.imul(je, Bt) | 0, f = f + Math.imul(je, Rt) | 0, f = f + Math.imul(Xe, Bt) | 0, M = M + Math.imul(Xe, Rt) | 0, y = y + Math.imul(Ee, Mt) | 0, f = f + Math.imul(Ee, Lt) | 0, f = f + Math.imul(me, Mt) | 0, M = M + Math.imul(me, Lt) | 0;
            var hc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (hc >>> 26) | 0, hc &= 67108863, y = Math.imul(H, St), f = Math.imul(H, bt), f = f + Math.imul(V, St) | 0, M = Math.imul(V, bt), y = y + Math.imul(p, _t) | 0, f = f + Math.imul(p, kt) | 0, f = f + Math.imul(P, _t) | 0, M = M + Math.imul(P, kt) | 0, y = y + Math.imul(qe, Ct) | 0, f = f + Math.imul(qe, At) | 0, f = f + Math.imul(A, Ct) | 0, M = M + Math.imul(A, At) | 0, y = y + Math.imul(We, It) | 0, f = f + Math.imul(We, Tt) | 0, f = f + Math.imul(He, It) | 0, M = M + Math.imul(He, Tt) | 0, y = y + Math.imul(Ke, Bt) | 0, f = f + Math.imul(Ke, Rt) | 0, f = f + Math.imul(Fe, Bt) | 0, M = M + Math.imul(Fe, Rt) | 0, y = y + Math.imul(je, Mt) | 0, f = f + Math.imul(je, Lt) | 0, f = f + Math.imul(Xe, Mt) | 0, M = M + Math.imul(Xe, Lt) | 0;
            var pc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (pc >>> 26) | 0, pc &= 67108863, y = Math.imul(H, _t), f = Math.imul(H, kt), f = f + Math.imul(V, _t) | 0, M = Math.imul(V, kt), y = y + Math.imul(p, Ct) | 0, f = f + Math.imul(p, At) | 0, f = f + Math.imul(P, Ct) | 0, M = M + Math.imul(P, At) | 0, y = y + Math.imul(qe, It) | 0, f = f + Math.imul(qe, Tt) | 0, f = f + Math.imul(A, It) | 0, M = M + Math.imul(A, Tt) | 0, y = y + Math.imul(We, Bt) | 0, f = f + Math.imul(We, Rt) | 0, f = f + Math.imul(He, Bt) | 0, M = M + Math.imul(He, Rt) | 0, y = y + Math.imul(Ke, Mt) | 0, f = f + Math.imul(Ke, Lt) | 0, f = f + Math.imul(Fe, Mt) | 0, M = M + Math.imul(Fe, Lt) | 0;
            var mc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (mc >>> 26) | 0, mc &= 67108863, y = Math.imul(H, Ct), f = Math.imul(H, At), f = f + Math.imul(V, Ct) | 0, M = Math.imul(V, At), y = y + Math.imul(p, It) | 0, f = f + Math.imul(p, Tt) | 0, f = f + Math.imul(P, It) | 0, M = M + Math.imul(P, Tt) | 0, y = y + Math.imul(qe, Bt) | 0, f = f + Math.imul(qe, Rt) | 0, f = f + Math.imul(A, Bt) | 0, M = M + Math.imul(A, Rt) | 0, y = y + Math.imul(We, Mt) | 0, f = f + Math.imul(We, Lt) | 0, f = f + Math.imul(He, Mt) | 0, M = M + Math.imul(He, Lt) | 0;
            var gc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (gc >>> 26) | 0, gc &= 67108863, y = Math.imul(H, It), f = Math.imul(H, Tt), f = f + Math.imul(V, It) | 0, M = Math.imul(V, Tt), y = y + Math.imul(p, Bt) | 0, f = f + Math.imul(p, Rt) | 0, f = f + Math.imul(P, Bt) | 0, M = M + Math.imul(P, Rt) | 0, y = y + Math.imul(qe, Mt) | 0, f = f + Math.imul(qe, Lt) | 0, f = f + Math.imul(A, Mt) | 0, M = M + Math.imul(A, Lt) | 0;
            var yc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (yc >>> 26) | 0, yc &= 67108863, y = Math.imul(H, Bt), f = Math.imul(H, Rt), f = f + Math.imul(V, Bt) | 0, M = Math.imul(V, Rt), y = y + Math.imul(p, Mt) | 0, f = f + Math.imul(p, Lt) | 0, f = f + Math.imul(P, Mt) | 0, M = M + Math.imul(P, Lt) | 0;
            var vc = (T + y | 0) + ((f & 8191) << 13) | 0;
            T = (M + (f >>> 13) | 0) + (vc >>> 26) | 0, vc &= 67108863, y = Math.imul(H, Mt), f = Math.imul(H, Lt), f = f + Math.imul(V, Mt) | 0, M = Math.imul(V, Lt);
            var wc = (T + y | 0) + ((f & 8191) << 13) | 0;
            return T = (M + (f >>> 13) | 0) + (wc >>> 26) | 0, wc &= 67108863, x[0] = tc, x[1] = nc, x[2] = rc, x[3] = ic, x[4] = oc, x[5] = sc, x[6] = ac, x[7] = lc, x[8] = uc, x[9] = cc, x[10] = fc, x[11] = dc, x[12] = hc, x[13] = pc, x[14] = mc, x[15] = gc, x[16] = yc, x[17] = vc, x[18] = wc, T !== 0 && (x[19] = T, S.length++), S
        };
        Math.imul || (b = _);

        function v(j, c, m) {
            m.negative = c.negative ^ j.negative, m.length = j.length + c.length;
            for (var S = 0, L = 0, E = 0; E < m.length - 1; E++) {
                var x = L;
                L = 0;
                for (var T = S & 67108863, y = Math.min(E, c.length - 1), f = Math.max(0, E - j.length + 1); f <= y; f++) {
                    var M = E - f,
                        q = j.words[M] | 0,
                        G = c.words[f] | 0,
                        Y = q * G,
                        ie = Y & 67108863;
                    x = x + (Y / 67108864 | 0) | 0, ie = ie + T | 0, T = ie & 67108863, x = x + (ie >>> 26) | 0, L += x >>> 26, x &= 67108863
                }
                m.words[E] = T, S = x, x = L
            }
            return S !== 0 ? m.words[E] = S : m.length--, m._strip()
        }

        function O(j, c, m) {
            return v(j, c, m)
        }
        o.prototype.mulTo = function(c, m) {
            var S, L = this.length + c.length;
            return this.length === 10 && c.length === 10 ? S = b(this, c, m) : L < 63 ? S = _(this, c, m) : L < 1024 ? S = v(this, c, m) : S = O(this, c, m), S
        }, o.prototype.mul = function(c) {
            var m = new o(null);
            return m.words = new Array(this.length + c.length), this.mulTo(c, m)
        }, o.prototype.mulf = function(c) {
            var m = new o(null);
            return m.words = new Array(this.length + c.length), O(this, c, m)
        }, o.prototype.imul = function(c) {
            return this.clone().mulTo(c, this)
        }, o.prototype.imuln = function(c) {
            var m = c < 0;
            m && (c = -c), r(typeof c == "number"), r(c < 67108864);
            for (var S = 0, L = 0; L < this.length; L++) {
                var E = (this.words[L] | 0) * c,
                    x = (E & 67108863) + (S & 67108863);
                S >>= 26, S += E / 67108864 | 0, S += x >>> 26, this.words[L] = x & 67108863
            }
            return S !== 0 && (this.words[L] = S, this.length++), m ? this.ineg() : this
        }, o.prototype.muln = function(c) {
            return this.clone().imuln(c)
        }, o.prototype.sqr = function() {
            return this.mul(this)
        }, o.prototype.isqr = function() {
            return this.imul(this.clone())
        }, o.prototype.pow = function(c) {
            var m = R(c);
            if (m.length === 0) return new o(1);
            for (var S = this, L = 0; L < m.length && m[L] === 0; L++, S = S.sqr());
            if (++L < m.length)
                for (var E = S.sqr(); L < m.length; L++, E = E.sqr()) m[L] !== 0 && (S = S.mul(E));
            return S
        }, o.prototype.iushln = function(c) {
            r(typeof c == "number" && c >= 0);
            var m = c % 26,
                S = (c - m) / 26,
                L = 67108863 >>> 26 - m << 26 - m,
                E;
            if (m !== 0) {
                var x = 0;
                for (E = 0; E < this.length; E++) {
                    var T = this.words[E] & L,
                        y = (this.words[E] | 0) - T << m;
                    this.words[E] = y | x, x = T >>> 26 - m
                }
                x && (this.words[E] = x, this.length++)
            }
            if (S !== 0) {
                for (E = this.length - 1; E >= 0; E--) this.words[E + S] = this.words[E];
                for (E = 0; E < S; E++) this.words[E] = 0;
                this.length += S
            }
            return this._strip()
        }, o.prototype.ishln = function(c) {
            return r(this.negative === 0), this.iushln(c)
        }, o.prototype.iushrn = function(c, m, S) {
            r(typeof c == "number" && c >= 0);
            var L;
            m ? L = (m - m % 26) / 26 : L = 0;
            var E = c % 26,
                x = Math.min((c - E) / 26, this.length),
                T = 67108863 ^ 67108863 >>> E << E,
                y = S;
            if (L -= x, L = Math.max(0, L), y) {
                for (var f = 0; f < x; f++) y.words[f] = this.words[f];
                y.length = x
            }
            if (x !== 0)
                if (this.length > x)
                    for (this.length -= x, f = 0; f < this.length; f++) this.words[f] = this.words[f + x];
                else this.words[0] = 0, this.length = 1;
            var M = 0;
            for (f = this.length - 1; f >= 0 && (M !== 0 || f >= L); f--) {
                var q = this.words[f] | 0;
                this.words[f] = M << 26 - E | q >>> E, M = q & T
            }
            return y && M !== 0 && (y.words[y.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
        }, o.prototype.ishrn = function(c, m, S) {
            return r(this.negative === 0), this.iushrn(c, m, S)
        }, o.prototype.shln = function(c) {
            return this.clone().ishln(c)
        }, o.prototype.ushln = function(c) {
            return this.clone().iushln(c)
        }, o.prototype.shrn = function(c) {
            return this.clone().ishrn(c)
        }, o.prototype.ushrn = function(c) {
            return this.clone().iushrn(c)
        }, o.prototype.testn = function(c) {
            r(typeof c == "number" && c >= 0);
            var m = c % 26,
                S = (c - m) / 26,
                L = 1 << m;
            if (this.length <= S) return !1;
            var E = this.words[S];
            return !!(E & L)
        }, o.prototype.imaskn = function(c) {
            r(typeof c == "number" && c >= 0);
            var m = c % 26,
                S = (c - m) / 26;
            if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= S) return this;
            if (m !== 0 && S++, this.length = Math.min(S, this.length), m !== 0) {
                var L = 67108863 ^ 67108863 >>> m << m;
                this.words[this.length - 1] &= L
            }
            return this._strip()
        }, o.prototype.maskn = function(c) {
            return this.clone().imaskn(c)
        }, o.prototype.iaddn = function(c) {
            return r(typeof c == "number"), r(c < 67108864), c < 0 ? this.isubn(-c) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= c ? (this.words[0] = c - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(c), this.negative = 1, this) : this._iaddn(c)
        }, o.prototype._iaddn = function(c) {
            this.words[0] += c;
            for (var m = 0; m < this.length && this.words[m] >= 67108864; m++) this.words[m] -= 67108864, m === this.length - 1 ? this.words[m + 1] = 1 : this.words[m + 1]++;
            return this.length = Math.max(this.length, m + 1), this
        }, o.prototype.isubn = function(c) {
            if (r(typeof c == "number"), r(c < 67108864), c < 0) return this.iaddn(-c);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(c), this.negative = 1, this;
            if (this.words[0] -= c, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var m = 0; m < this.length && this.words[m] < 0; m++) this.words[m] += 67108864, this.words[m + 1] -= 1;
            return this._strip()
        }, o.prototype.addn = function(c) {
            return this.clone().iaddn(c)
        }, o.prototype.subn = function(c) {
            return this.clone().isubn(c)
        }, o.prototype.iabs = function() {
            return this.negative = 0, this
        }, o.prototype.abs = function() {
            return this.clone().iabs()
        }, o.prototype._ishlnsubmul = function(c, m, S) {
            var L = c.length + S,
                E;
            this._expand(L);
            var x, T = 0;
            for (E = 0; E < c.length; E++) {
                x = (this.words[E + S] | 0) + T;
                var y = (c.words[E] | 0) * m;
                x -= y & 67108863, T = (x >> 26) - (y / 67108864 | 0), this.words[E + S] = x & 67108863
            }
            for (; E < this.length - S; E++) x = (this.words[E + S] | 0) + T, T = x >> 26, this.words[E + S] = x & 67108863;
            if (T === 0) return this._strip();
            for (r(T === -1), T = 0, E = 0; E < this.length; E++) x = -(this.words[E] | 0) + T, T = x >> 26, this.words[E] = x & 67108863;
            return this.negative = 1, this._strip()
        }, o.prototype._wordDiv = function(c, m) {
            var S = this.length - c.length,
                L = this.clone(),
                E = c,
                x = E.words[E.length - 1] | 0,
                T = this._countBits(x);
            S = 26 - T, S !== 0 && (E = E.ushln(S), L.iushln(S), x = E.words[E.length - 1] | 0);
            var y = L.length - E.length,
                f;
            if (m !== "mod") {
                f = new o(null), f.length = y + 1, f.words = new Array(f.length);
                for (var M = 0; M < f.length; M++) f.words[M] = 0
            }
            var q = L.clone()._ishlnsubmul(E, 1, y);
            q.negative === 0 && (L = q, f && (f.words[y] = 1));
            for (var G = y - 1; G >= 0; G--) {
                var Y = (L.words[E.length + G] | 0) * 67108864 + (L.words[E.length + G - 1] | 0);
                for (Y = Math.min(Y / x | 0, 67108863), L._ishlnsubmul(E, Y, G); L.negative !== 0;) Y--, L.negative = 0, L._ishlnsubmul(E, 1, G), L.isZero() || (L.negative ^= 1);
                f && (f.words[G] = Y)
            }
            return f && f._strip(), L._strip(), m !== "div" && S !== 0 && L.iushrn(S), {
                div: f || null,
                mod: L
            }
        }, o.prototype.divmod = function(c, m, S) {
            if (r(!c.isZero()), this.isZero()) return {
                div: new o(0),
                mod: new o(0)
            };
            var L, E, x;
            return this.negative !== 0 && c.negative === 0 ? (x = this.neg().divmod(c, m), m !== "mod" && (L = x.div.neg()), m !== "div" && (E = x.mod.neg(), S && E.negative !== 0 && E.iadd(c)), {
                div: L,
                mod: E
            }) : this.negative === 0 && c.negative !== 0 ? (x = this.divmod(c.neg(), m), m !== "mod" && (L = x.div.neg()), {
                div: L,
                mod: x.mod
            }) : this.negative & c.negative ? (x = this.neg().divmod(c.neg(), m), m !== "div" && (E = x.mod.neg(), S && E.negative !== 0 && E.isub(c)), {
                div: x.div,
                mod: E
            }) : c.length > this.length || this.cmp(c) < 0 ? {
                div: new o(0),
                mod: this
            } : c.length === 1 ? m === "div" ? {
                div: this.divn(c.words[0]),
                mod: null
            } : m === "mod" ? {
                div: null,
                mod: new o(this.modrn(c.words[0]))
            } : {
                div: this.divn(c.words[0]),
                mod: new o(this.modrn(c.words[0]))
            } : this._wordDiv(c, m)
        }, o.prototype.div = function(c) {
            return this.divmod(c, "div", !1).div
        }, o.prototype.mod = function(c) {
            return this.divmod(c, "mod", !1).mod
        }, o.prototype.umod = function(c) {
            return this.divmod(c, "mod", !0).mod
        }, o.prototype.divRound = function(c) {
            var m = this.divmod(c);
            if (m.mod.isZero()) return m.div;
            var S = m.div.negative !== 0 ? m.mod.isub(c) : m.mod,
                L = c.ushrn(1),
                E = c.andln(1),
                x = S.cmp(L);
            return x < 0 || E === 1 && x === 0 ? m.div : m.div.negative !== 0 ? m.div.isubn(1) : m.div.iaddn(1)
        }, o.prototype.modrn = function(c) {
            var m = c < 0;
            m && (c = -c), r(c <= 67108863);
            for (var S = (1 << 26) % c, L = 0, E = this.length - 1; E >= 0; E--) L = (S * L + (this.words[E] | 0)) % c;
            return m ? -L : L
        }, o.prototype.modn = function(c) {
            return this.modrn(c)
        }, o.prototype.idivn = function(c) {
            var m = c < 0;
            m && (c = -c), r(c <= 67108863);
            for (var S = 0, L = this.length - 1; L >= 0; L--) {
                var E = (this.words[L] | 0) + S * 67108864;
                this.words[L] = E / c | 0, S = E % c
            }
            return this._strip(), m ? this.ineg() : this
        }, o.prototype.divn = function(c) {
            return this.clone().idivn(c)
        }, o.prototype.egcd = function(c) {
            r(c.negative === 0), r(!c.isZero());
            var m = this,
                S = c.clone();
            m.negative !== 0 ? m = m.umod(c) : m = m.clone();
            for (var L = new o(1), E = new o(0), x = new o(0), T = new o(1), y = 0; m.isEven() && S.isEven();) m.iushrn(1), S.iushrn(1), ++y;
            for (var f = S.clone(), M = m.clone(); !m.isZero();) {
                for (var q = 0, G = 1; !(m.words[0] & G) && q < 26; ++q, G <<= 1);
                if (q > 0)
                    for (m.iushrn(q); q-- > 0;)(L.isOdd() || E.isOdd()) && (L.iadd(f), E.isub(M)), L.iushrn(1), E.iushrn(1);
                for (var Y = 0, ie = 1; !(S.words[0] & ie) && Y < 26; ++Y, ie <<= 1);
                if (Y > 0)
                    for (S.iushrn(Y); Y-- > 0;)(x.isOdd() || T.isOdd()) && (x.iadd(f), T.isub(M)), x.iushrn(1), T.iushrn(1);
                m.cmp(S) >= 0 ? (m.isub(S), L.isub(x), E.isub(T)) : (S.isub(m), x.isub(L), T.isub(E))
            }
            return {
                a: x,
                b: T,
                gcd: S.iushln(y)
            }
        }, o.prototype._invmp = function(c) {
            r(c.negative === 0), r(!c.isZero());
            var m = this,
                S = c.clone();
            m.negative !== 0 ? m = m.umod(c) : m = m.clone();
            for (var L = new o(1), E = new o(0), x = S.clone(); m.cmpn(1) > 0 && S.cmpn(1) > 0;) {
                for (var T = 0, y = 1; !(m.words[0] & y) && T < 26; ++T, y <<= 1);
                if (T > 0)
                    for (m.iushrn(T); T-- > 0;) L.isOdd() && L.iadd(x), L.iushrn(1);
                for (var f = 0, M = 1; !(S.words[0] & M) && f < 26; ++f, M <<= 1);
                if (f > 0)
                    for (S.iushrn(f); f-- > 0;) E.isOdd() && E.iadd(x), E.iushrn(1);
                m.cmp(S) >= 0 ? (m.isub(S), L.isub(E)) : (S.isub(m), E.isub(L))
            }
            var q;
            return m.cmpn(1) === 0 ? q = L : q = E, q.cmpn(0) < 0 && q.iadd(c), q
        }, o.prototype.gcd = function(c) {
            if (this.isZero()) return c.abs();
            if (c.isZero()) return this.abs();
            var m = this.clone(),
                S = c.clone();
            m.negative = 0, S.negative = 0;
            for (var L = 0; m.isEven() && S.isEven(); L++) m.iushrn(1), S.iushrn(1);
            do {
                for (; m.isEven();) m.iushrn(1);
                for (; S.isEven();) S.iushrn(1);
                var E = m.cmp(S);
                if (E < 0) {
                    var x = m;
                    m = S, S = x
                } else if (E === 0 || S.cmpn(1) === 0) break;
                m.isub(S)
            } while (!0);
            return S.iushln(L)
        }, o.prototype.invm = function(c) {
            return this.egcd(c).a.umod(c)
        }, o.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }, o.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }, o.prototype.andln = function(c) {
            return this.words[0] & c
        }, o.prototype.bincn = function(c) {
            r(typeof c == "number");
            var m = c % 26,
                S = (c - m) / 26,
                L = 1 << m;
            if (this.length <= S) return this._expand(S + 1), this.words[S] |= L, this;
            for (var E = L, x = S; E !== 0 && x < this.length; x++) {
                var T = this.words[x] | 0;
                T += E, E = T >>> 26, T &= 67108863, this.words[x] = T
            }
            return E !== 0 && (this.words[x] = E, this.length++), this
        }, o.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }, o.prototype.cmpn = function(c) {
            var m = c < 0;
            if (this.negative !== 0 && !m) return -1;
            if (this.negative === 0 && m) return 1;
            this._strip();
            var S;
            if (this.length > 1) S = 1;
            else {
                m && (c = -c), r(c <= 67108863, "Number is too big");
                var L = this.words[0] | 0;
                S = L === c ? 0 : L < c ? -1 : 1
            }
            return this.negative !== 0 ? -S | 0 : S
        }, o.prototype.cmp = function(c) {
            if (this.negative !== 0 && c.negative === 0) return -1;
            if (this.negative === 0 && c.negative !== 0) return 1;
            var m = this.ucmp(c);
            return this.negative !== 0 ? -m | 0 : m
        }, o.prototype.ucmp = function(c) {
            if (this.length > c.length) return 1;
            if (this.length < c.length) return -1;
            for (var m = 0, S = this.length - 1; S >= 0; S--) {
                var L = this.words[S] | 0,
                    E = c.words[S] | 0;
                if (L !== E) {
                    L < E ? m = -1 : L > E && (m = 1);
                    break
                }
            }
            return m
        }, o.prototype.gtn = function(c) {
            return this.cmpn(c) === 1
        }, o.prototype.gt = function(c) {
            return this.cmp(c) === 1
        }, o.prototype.gten = function(c) {
            return this.cmpn(c) >= 0
        }, o.prototype.gte = function(c) {
            return this.cmp(c) >= 0
        }, o.prototype.ltn = function(c) {
            return this.cmpn(c) === -1
        }, o.prototype.lt = function(c) {
            return this.cmp(c) === -1
        }, o.prototype.lten = function(c) {
            return this.cmpn(c) <= 0
        }, o.prototype.lte = function(c) {
            return this.cmp(c) <= 0
        }, o.prototype.eqn = function(c) {
            return this.cmpn(c) === 0
        }, o.prototype.eq = function(c) {
            return this.cmp(c) === 0
        }, o.red = function(c) {
            return new X(c)
        }, o.prototype.toRed = function(c) {
            return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), c.convertTo(this)._forceRed(c)
        }, o.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, o.prototype._forceRed = function(c) {
            return this.red = c, this
        }, o.prototype.forceRed = function(c) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(c)
        }, o.prototype.redAdd = function(c) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, c)
        }, o.prototype.redIAdd = function(c) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, c)
        }, o.prototype.redSub = function(c) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, c)
        }, o.prototype.redISub = function(c) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, c)
        }, o.prototype.redShl = function(c) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, c)
        }, o.prototype.redMul = function(c) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.mul(this, c)
        }, o.prototype.redIMul = function(c) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.imul(this, c)
        }, o.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, o.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, o.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, o.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, o.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, o.prototype.redPow = function(c) {
            return r(this.red && !c.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, c)
        };
        var D = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function N(j, c) {
            this.name = j, this.p = new o(c, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }
        N.prototype._tmp = function() {
            var c = new o(null);
            return c.words = new Array(Math.ceil(this.n / 13)), c
        }, N.prototype.ireduce = function(c) {
            var m = c,
                S;
            do this.split(m, this.tmp), m = this.imulK(m), m = m.iadd(this.tmp), S = m.bitLength(); while (S > this.n);
            var L = S < this.n ? -1 : m.ucmp(this.p);
            return L === 0 ? (m.words[0] = 0, m.length = 1) : L > 0 ? m.isub(this.p) : m.strip !== void 0 ? m.strip() : m._strip(), m
        }, N.prototype.split = function(c, m) {
            c.iushrn(this.n, 0, m)
        }, N.prototype.imulK = function(c) {
            return c.imul(this.k)
        };

        function U() {
            N.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(U, N), U.prototype.split = function(c, m) {
            for (var S = 4194303, L = Math.min(c.length, 9), E = 0; E < L; E++) m.words[E] = c.words[E];
            if (m.length = L, c.length <= 9) {
                c.words[0] = 0, c.length = 1;
                return
            }
            var x = c.words[9];
            for (m.words[m.length++] = x & S, E = 10; E < c.length; E++) {
                var T = c.words[E] | 0;
                c.words[E - 10] = (T & S) << 4 | x >>> 22, x = T
            }
            x >>>= 22, c.words[E - 10] = x, x === 0 && c.length > 10 ? c.length -= 10 : c.length -= 9
        }, U.prototype.imulK = function(c) {
            c.words[c.length] = 0, c.words[c.length + 1] = 0, c.length += 2;
            for (var m = 0, S = 0; S < c.length; S++) {
                var L = c.words[S] | 0;
                m += L * 977, c.words[S] = m & 67108863, m = L * 64 + (m / 67108864 | 0)
            }
            return c.words[c.length - 1] === 0 && (c.length--, c.words[c.length - 1] === 0 && c.length--), c
        };

        function z() {
            N.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(z, N);

        function Z() {
            N.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(Z, N);

        function Q() {
            N.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(Q, N), Q.prototype.imulK = function(c) {
            for (var m = 0, S = 0; S < c.length; S++) {
                var L = (c.words[S] | 0) * 19 + m,
                    E = L & 67108863;
                L >>>= 26, c.words[S] = E, m = L
            }
            return m !== 0 && (c.words[c.length++] = m), c
        }, o._prime = function(c) {
            if (D[c]) return D[c];
            var m;
            if (c === "k256") m = new U;
            else if (c === "p224") m = new z;
            else if (c === "p192") m = new Z;
            else if (c === "p25519") m = new Q;
            else throw new Error("Unknown prime " + c);
            return D[c] = m, m
        };

        function X(j) {
            if (typeof j == "string") {
                var c = o._prime(j);
                this.m = c.p, this.prime = c
            } else r(j.gtn(1), "modulus must be greater than 1"), this.m = j, this.prime = null
        }
        X.prototype._verify1 = function(c) {
            r(c.negative === 0, "red works only with positives"), r(c.red, "red works only with red numbers")
        }, X.prototype._verify2 = function(c, m) {
            r((c.negative | m.negative) === 0, "red works only with positives"), r(c.red && c.red === m.red, "red works only with red numbers")
        }, X.prototype.imod = function(c) {
            return this.prime ? this.prime.ireduce(c)._forceRed(this) : (h(c, c.umod(this.m)._forceRed(this)), c)
        }, X.prototype.neg = function(c) {
            return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this)
        }, X.prototype.add = function(c, m) {
            this._verify2(c, m);
            var S = c.add(m);
            return S.cmp(this.m) >= 0 && S.isub(this.m), S._forceRed(this)
        }, X.prototype.iadd = function(c, m) {
            this._verify2(c, m);
            var S = c.iadd(m);
            return S.cmp(this.m) >= 0 && S.isub(this.m), S
        }, X.prototype.sub = function(c, m) {
            this._verify2(c, m);
            var S = c.sub(m);
            return S.cmpn(0) < 0 && S.iadd(this.m), S._forceRed(this)
        }, X.prototype.isub = function(c, m) {
            this._verify2(c, m);
            var S = c.isub(m);
            return S.cmpn(0) < 0 && S.iadd(this.m), S
        }, X.prototype.shl = function(c, m) {
            return this._verify1(c), this.imod(c.ushln(m))
        }, X.prototype.imul = function(c, m) {
            return this._verify2(c, m), this.imod(c.imul(m))
        }, X.prototype.mul = function(c, m) {
            return this._verify2(c, m), this.imod(c.mul(m))
        }, X.prototype.isqr = function(c) {
            return this.imul(c, c.clone())
        }, X.prototype.sqr = function(c) {
            return this.mul(c, c)
        }, X.prototype.sqrt = function(c) {
            if (c.isZero()) return c.clone();
            var m = this.m.andln(3);
            if (r(m % 2 === 1), m === 3) {
                var S = this.m.add(new o(1)).iushrn(2);
                return this.pow(c, S)
            }
            for (var L = this.m.subn(1), E = 0; !L.isZero() && L.andln(1) === 0;) E++, L.iushrn(1);
            r(!L.isZero());
            var x = new o(1).toRed(this),
                T = x.redNeg(),
                y = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
            for (f = new o(2 * f * f).toRed(this); this.pow(f, y).cmp(T) !== 0;) f.redIAdd(T);
            for (var M = this.pow(f, L), q = this.pow(c, L.addn(1).iushrn(1)), G = this.pow(c, L), Y = E; G.cmp(x) !== 0;) {
                for (var ie = G, le = 0; ie.cmp(x) !== 0; le++) ie = ie.redSqr();
                r(le < Y);
                var ue = this.pow(M, new o(1).iushln(Y - le - 1));
                q = q.redMul(ue), M = ue.redSqr(), G = G.redMul(M), Y = le
            }
            return q
        }, X.prototype.invm = function(c) {
            var m = c._invmp(this.m);
            return m.negative !== 0 ? (m.negative = 0, this.imod(m).redNeg()) : this.imod(m)
        }, X.prototype.pow = function(c, m) {
            if (m.isZero()) return new o(1).toRed(this);
            if (m.cmpn(1) === 0) return c.clone();
            var S = 4,
                L = new Array(1 << S);
            L[0] = new o(1).toRed(this), L[1] = c;
            for (var E = 2; E < L.length; E++) L[E] = this.mul(L[E - 1], c);
            var x = L[0],
                T = 0,
                y = 0,
                f = m.bitLength() % 26;
            for (f === 0 && (f = 26), E = m.length - 1; E >= 0; E--) {
                for (var M = m.words[E], q = f - 1; q >= 0; q--) {
                    var G = M >> q & 1;
                    if (x !== L[0] && (x = this.sqr(x)), G === 0 && T === 0) {
                        y = 0;
                        continue
                    }
                    T <<= 1, T |= G, y++, !(y !== S && (E !== 0 || q !== 0)) && (x = this.mul(x, L[T]), y = 0, T = 0)
                }
                f = 26
            }
            return x
        }, X.prototype.convertTo = function(c) {
            var m = c.umod(this.m);
            return m === c ? m.clone() : m
        }, X.prototype.convertFrom = function(c) {
            var m = c.clone();
            return m.red = null, m
        }, o.mont = function(c) {
            return new ce(c)
        };

        function ce(j) {
            X.call(this, j), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        i(ce, X), ce.prototype.convertTo = function(c) {
            return this.imod(c.ushln(this.shift))
        }, ce.prototype.convertFrom = function(c) {
            var m = this.imod(c.mul(this.rinv));
            return m.red = null, m
        }, ce.prototype.imul = function(c, m) {
            if (c.isZero() || m.isZero()) return c.words[0] = 0, c.length = 1, c;
            var S = c.imul(m),
                L = S.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                E = S.isub(L).iushrn(this.shift),
                x = E;
            return E.cmp(this.m) >= 0 ? x = E.isub(this.m) : E.cmpn(0) < 0 && (x = E.iadd(this.m)), x._forceRed(this)
        }, ce.prototype.mul = function(c, m) {
            if (c.isZero() || m.isZero()) return new o(0)._forceRed(this);
            var S = c.mul(m),
                L = S.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                E = S.isub(L).iushrn(this.shift),
                x = E;
            return E.cmp(this.m) >= 0 ? x = E.isub(this.m) : E.cmpn(0) < 0 && (x = E.iadd(this.m)), x._forceRed(this)
        }, ce.prototype.invm = function(c) {
            var m = this.imod(c._invmp(this.m).mul(this.r2));
            return m._forceRed(this)
        }
    })(t, mn)
})(A0);
var qw = A0.exports;
const lm = yr(qw);
var Gd = {
    exports: {}
}; /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(t, e) {
    var n = xe,
        r = n.Buffer;

    function i(s, a) {
        for (var l in s) a[l] = s[l]
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = n : (i(n, e), e.Buffer = o);

    function o(s, a, l) {
        return r(s, a, l)
    }
    o.prototype = Object.create(r.prototype), i(r, o), o.from = function(s, a, l) {
        if (typeof s == "number") throw new TypeError("Argument must not be a number");
        return r(s, a, l)
    }, o.alloc = function(s, a, l) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        var u = r(s);
        return a !== void 0 ? typeof l == "string" ? u.fill(a, l) : u.fill(a) : u.fill(0), u
    }, o.allocUnsafe = function(s) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        return r(s)
    }, o.allocUnsafeSlow = function(s) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        return n.SlowBuffer(s)
    }
})(Gd, Gd.exports);
var gb = Gd.exports,
    ul = gb.Buffer;

function yb(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
    for (var r = 0; r < t.length; r++) {
        var i = t.charAt(r),
            o = i.charCodeAt(0);
        if (e[o] !== 255) throw new TypeError(i + " is ambiguous");
        e[o] = r
    }
    var s = t.length,
        a = t.charAt(0),
        l = Math.log(s) / Math.log(256),
        u = Math.log(256) / Math.log(s);

    function h(C) {
        if ((Array.isArray(C) || C instanceof Uint8Array) && (C = ul.from(C)), !ul.isBuffer(C)) throw new TypeError("Expected Buffer");
        if (C.length === 0) return "";
        for (var B = 0, I = 0, R = 0, _ = C.length; R !== _ && C[R] === 0;) R++, B++;
        for (var b = (_ - R) * u + 1 >>> 0, v = new Uint8Array(b); R !== _;) {
            for (var O = C[R], D = 0, N = b - 1;
                (O !== 0 || D < I) && N !== -1; N--, D++) O += 256 * v[N] >>> 0, v[N] = O % s >>> 0, O = O / s >>> 0;
            if (O !== 0) throw new Error("Non-zero carry");
            I = D, R++
        }
        for (var U = b - I; U !== b && v[U] === 0;) U++;
        for (var z = a.repeat(B); U < b; ++U) z += t.charAt(v[U]);
        return z
    }

    function g(C) {
        if (typeof C != "string") throw new TypeError("Expected String");
        if (C.length === 0) return ul.alloc(0);
        for (var B = 0, I = 0, R = 0; C[B] === a;) I++, B++;
        for (var _ = (C.length - B) * l + 1 >>> 0, b = new Uint8Array(_); C[B];) {
            var v = e[C.charCodeAt(B)];
            if (v === 255) return;
            for (var O = 0, D = _ - 1;
                (v !== 0 || O < R) && D !== -1; D--, O++) v += s * b[D] >>> 0, b[D] = v % 256 >>> 0, v = v / 256 >>> 0;
            if (v !== 0) throw new Error("Non-zero carry");
            R = O, B++
        }
        for (var N = _ - R; N !== _ && b[N] === 0;) N++;
        var U = ul.allocUnsafe(I + (_ - N));
        U.fill(0, 0, I);
        for (var z = I; N !== _;) U[z++] = b[N++];
        return U
    }

    function w(C) {
        var B = g(C);
        if (B) return B;
        throw new Error("Non-base" + s + " character")
    }
    return {
        encode: h,
        decodeUnsafe: g,
        decode: w
    }
}
var vb = yb,
    wb = vb,
    xb = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    Vw = wb(xb);
const Wt = yr(Vw),
    Eb = (t, e, n) => t & e ^ ~t & n,
    Sb = (t, e, n) => t & e ^ t & n ^ e & n,
    bb = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    si = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    ai = new Uint32Array(64);
class _b extends Nw {
    constructor() {
        super(64, 32, 8, !1), this.A = si[0] | 0, this.B = si[1] | 0, this.C = si[2] | 0, this.D = si[3] | 0, this.E = si[4] | 0, this.F = si[5] | 0, this.G = si[6] | 0, this.H = si[7] | 0
    }
    get() {
        const {
            A: e,
            B: n,
            C: r,
            D: i,
            E: o,
            F: s,
            G: a,
            H: l
        } = this;
        return [e, n, r, i, o, s, a, l]
    }
    set(e, n, r, i, o, s, a, l) {
        this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = a | 0, this.H = l | 0
    }
    process(e, n) {
        for (let g = 0; g < 16; g++, n += 4) ai[g] = e.getUint32(n, !1);
        for (let g = 16; g < 64; g++) {
            const w = ai[g - 15],
                C = ai[g - 2],
                B = wr(w, 7) ^ wr(w, 18) ^ w >>> 3,
                I = wr(C, 17) ^ wr(C, 19) ^ C >>> 10;
            ai[g] = I + ai[g - 7] + B + ai[g - 16] | 0
        }
        let {
            A: r,
            B: i,
            C: o,
            D: s,
            E: a,
            F: l,
            G: u,
            H: h
        } = this;
        for (let g = 0; g < 64; g++) {
            const w = wr(a, 6) ^ wr(a, 11) ^ wr(a, 25),
                C = h + w + Eb(a, l, u) + bb[g] + ai[g] | 0,
                I = (wr(r, 2) ^ wr(r, 13) ^ wr(r, 22)) + Sb(r, i, o) | 0;
            h = u, u = l, l = a, a = s + C | 0, s = o, o = i, i = r, r = C + I | 0
        }
        r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, l = l + this.F | 0, u = u + this.G | 0, h = h + this.H | 0, this.set(r, i, o, s, a, l, u, h)
    }
    roundClean() {
        ai.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const Zd = Mw(() => new _b);
var Qt = {};

function Dr(t, e, n) {
    return e <= t && t <= n
}

function Ku(t) {
    if (t === void 0) return {};
    if (t === Object(t)) return t;
    throw TypeError("Could not convert argument to dictionary")
}

function kb(t) {
    for (var e = String(t), n = e.length, r = 0, i = []; r < n;) {
        var o = e.charCodeAt(r);
        if (o < 55296 || o > 57343) i.push(o);
        else if (56320 <= o && o <= 57343) i.push(65533);
        else if (55296 <= o && o <= 56319)
            if (r === n - 1) i.push(65533);
            else {
                var s = t.charCodeAt(r + 1);
                if (56320 <= s && s <= 57343) {
                    var a = o & 1023,
                        l = s & 1023;
                    i.push(65536 + (a << 10) + l), r += 1
                } else i.push(65533)
            } r += 1
    }
    return i
}

function Cb(t) {
    for (var e = "", n = 0; n < t.length; ++n) {
        var r = t[n];
        r <= 65535 ? e += String.fromCharCode(r) : (r -= 65536, e += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320))
    }
    return e
}
var su = -1;

function I0(t) {
    this.tokens = [].slice.call(t)
}
I0.prototype = {
    endOfStream: function() {
        return !this.tokens.length
    },
    read: function() {
        return this.tokens.length ? this.tokens.shift() : su
    },
    prepend: function(t) {
        if (Array.isArray(t))
            for (var e = t; e.length;) this.tokens.unshift(e.pop());
        else this.tokens.unshift(t)
    },
    push: function(t) {
        if (Array.isArray(t))
            for (var e = t; e.length;) this.tokens.push(e.shift());
        else this.tokens.push(t)
    }
};
var ss = -1;

function uf(t, e) {
    if (t) throw TypeError("Decoder error");
    return e || 65533
}
var au = "utf-8";

function lu(t, e) {
    if (!(this instanceof lu)) return new lu(t, e);
    if (t = t !== void 0 ? String(t).toLowerCase() : au, t !== au) throw new Error("Encoding not supported. Only utf-8 is supported");
    e = Ku(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!e.fatal, this._ignoreBOM = !!e.ignoreBOM, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }), Object.defineProperty(this, "fatal", {
        value: this._fatal
    }), Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
lu.prototype = {
    decode: function(e, n) {
        var r;
        typeof e == "object" && e instanceof ArrayBuffer ? r = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : r = new Uint8Array(0), n = Ku(n), this._streaming || (this._decoder = new Ab({
            fatal: this._fatal
        }), this._BOMseen = !1), this._streaming = !!n.stream;
        for (var i = new I0(r), o = [], s; !i.endOfStream() && (s = this._decoder.handler(i, i.read()), s !== ss);) s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
        if (!this._streaming) {
            do {
                if (s = this._decoder.handler(i, i.read()), s === ss) break;
                s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s))
            } while (!i.endOfStream());
            this._decoder = null
        }
        return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0), Cb(o)
    }
};

function uu(t, e) {
    if (!(this instanceof uu)) return new uu(t, e);
    if (t = t !== void 0 ? String(t).toLowerCase() : au, t !== au) throw new Error("Encoding not supported. Only utf-8 is supported");
    e = Ku(e), this._streaming = !1, this._encoder = null, this._options = {
        fatal: !!e.fatal
    }, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
uu.prototype = {
    encode: function(e, n) {
        e = e ? String(e) : "", n = Ku(n), this._streaming || (this._encoder = new Ib(this._options)), this._streaming = !!n.stream;
        for (var r = [], i = new I0(kb(e)), o; !i.endOfStream() && (o = this._encoder.handler(i, i.read()), o !== ss);) Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
        if (!this._streaming) {
            for (; o = this._encoder.handler(i, i.read()), o !== ss;) Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
            this._encoder = null
        }
        return new Uint8Array(r)
    }
};

function Ab(t) {
    var e = t.fatal,
        n = 0,
        r = 0,
        i = 0,
        o = 128,
        s = 191;
    this.handler = function(a, l) {
        if (l === su && i !== 0) return i = 0, uf(e);
        if (l === su) return ss;
        if (i === 0) {
            if (Dr(l, 0, 127)) return l;
            if (Dr(l, 194, 223)) i = 1, n = l - 192;
            else if (Dr(l, 224, 239)) l === 224 && (o = 160), l === 237 && (s = 159), i = 2, n = l - 224;
            else if (Dr(l, 240, 244)) l === 240 && (o = 144), l === 244 && (s = 143), i = 3, n = l - 240;
            else return uf(e);
            return n = n << 6 * i, null
        }
        if (!Dr(l, o, s)) return n = i = r = 0, o = 128, s = 191, a.prepend(l), uf(e);
        if (o = 128, s = 191, r += 1, n += l - 128 << 6 * (i - r), r !== i) return null;
        var u = n;
        return n = i = r = 0, u
    }
}

function Ib(t) {
    t.fatal, this.handler = function(e, n) {
        if (n === su) return ss;
        if (Dr(n, 0, 127)) return n;
        var r, i;
        Dr(n, 128, 2047) ? (r = 1, i = 192) : Dr(n, 2048, 65535) ? (r = 2, i = 224) : Dr(n, 65536, 1114111) && (r = 3, i = 240);
        for (var o = [(n >> 6 * r) + i]; r > 0;) {
            var s = n >> 6 * (r - 1);
            o.push(128 | s & 63), r -= 1
        }
        return o
    }
}
const Tb = Object.freeze(Object.defineProperty({
        __proto__: null,
        TextDecoder: lu,
        TextEncoder: uu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bb = ah(Tb);
var Rb = mn && mn.__createBinding || (Object.create ? function(t, e, n, r) {
        r === void 0 && (r = n), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    } : function(t, e, n, r) {
        r === void 0 && (r = n), t[r] = e[n]
    }),
    Mb = mn && mn.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    Rr = mn && mn.__decorate || function(t, e, n, r) {
        var i = arguments.length,
            o = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r,
            s;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(e, n, o) : s(e, n)) || o);
        return i > 3 && o && Object.defineProperty(e, n, o), o
    },
    Lb = mn && mn.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null)
            for (var n in t) n !== "default" && Object.hasOwnProperty.call(t, n) && Rb(e, t, n);
        return Mb(e, t), e
    },
    Gw = mn && mn.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
Object.defineProperty(Qt, "__esModule", {
    value: !0
});
var Zw = Qt.deserializeUnchecked = t2 = Qt.deserialize = e2 = Qt.serialize = Qt.BinaryReader = Qt.BinaryWriter = Qt.BorshError = Qt.baseDecode = Qt.baseEncode = void 0;
const vi = Gw(qw),
    Yw = Gw(Vw),
    Nb = Lb(Bb),
    Ob = typeof TextDecoder != "function" ? Nb.TextDecoder : TextDecoder,
    Pb = new Ob("utf-8", {
        fatal: !0
    });

function jb(t) {
    return typeof t == "string" && (t = Buffer.from(t, "utf8")), Yw.default.encode(Buffer.from(t))
}
Qt.baseEncode = jb;

function Db(t) {
    return Buffer.from(Yw.default.decode(t))
}
Qt.baseDecode = Db;
const cf = 1024;
class gn extends Error {
    constructor(e) {
        super(e), this.fieldPath = [], this.originalMessage = e
    }
    addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
    }
}
Qt.BorshError = gn;
class Qw {
    constructor() {
        this.buf = Buffer.alloc(cf), this.length = 0
    }
    maybeResize() {
        this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(cf)]))
    }
    writeU8(e) {
        this.maybeResize(), this.buf.writeUInt8(e, this.length), this.length += 1
    }
    writeU16(e) {
        this.maybeResize(), this.buf.writeUInt16LE(e, this.length), this.length += 2
    }
    writeU32(e) {
        this.maybeResize(), this.buf.writeUInt32LE(e, this.length), this.length += 4
    }
    writeU64(e) {
        this.maybeResize(), this.writeBuffer(Buffer.from(new vi.default(e).toArray("le", 8)))
    }
    writeU128(e) {
        this.maybeResize(), this.writeBuffer(Buffer.from(new vi.default(e).toArray("le", 16)))
    }
    writeU256(e) {
        this.maybeResize(), this.writeBuffer(Buffer.from(new vi.default(e).toArray("le", 32)))
    }
    writeU512(e) {
        this.maybeResize(), this.writeBuffer(Buffer.from(new vi.default(e).toArray("le", 64)))
    }
    writeBuffer(e) {
        this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), e, Buffer.alloc(cf)]), this.length += e.length
    }
    writeString(e) {
        this.maybeResize();
        const n = Buffer.from(e, "utf8");
        this.writeU32(n.length), this.writeBuffer(n)
    }
    writeFixedArray(e) {
        this.writeBuffer(Buffer.from(e))
    }
    writeArray(e, n) {
        this.maybeResize(), this.writeU32(e.length);
        for (const r of e) this.maybeResize(), n(r)
    }
    toArray() {
        return this.buf.subarray(0, this.length)
    }
}
Qt.BinaryWriter = Qw;

function Mr(t, e, n) {
    const r = n.value;
    n.value = function(...i) {
        try {
            return r.apply(this, i)
        } catch (o) {
            if (o instanceof RangeError) {
                const s = o.code;
                if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(s) >= 0) throw new gn("Reached the end of buffer when deserializing")
            }
            throw o
        }
    }
}
class $n {
    constructor(e) {
        this.buf = e, this.offset = 0
    }
    readU8() {
        const e = this.buf.readUInt8(this.offset);
        return this.offset += 1, e
    }
    readU16() {
        const e = this.buf.readUInt16LE(this.offset);
        return this.offset += 2, e
    }
    readU32() {
        const e = this.buf.readUInt32LE(this.offset);
        return this.offset += 4, e
    }
    readU64() {
        const e = this.readBuffer(8);
        return new vi.default(e, "le")
    }
    readU128() {
        const e = this.readBuffer(16);
        return new vi.default(e, "le")
    }
    readU256() {
        const e = this.readBuffer(32);
        return new vi.default(e, "le")
    }
    readU512() {
        const e = this.readBuffer(64);
        return new vi.default(e, "le")
    }
    readBuffer(e) {
        if (this.offset + e > this.buf.length) throw new gn(`Expected buffer length ${e} isn't within bounds`);
        const n = this.buf.slice(this.offset, this.offset + e);
        return this.offset += e, n
    }
    readString() {
        const e = this.readU32(),
            n = this.readBuffer(e);
        try {
            return Pb.decode(n)
        } catch (r) {
            throw new gn(`Error decoding UTF-8 string: ${r}`)
        }
    }
    readFixedArray(e) {
        return new Uint8Array(this.readBuffer(e))
    }
    readArray(e) {
        const n = this.readU32(),
            r = Array();
        for (let i = 0; i < n; ++i) r.push(e());
        return r
    }
}
Rr([Mr], $n.prototype, "readU8", null);
Rr([Mr], $n.prototype, "readU16", null);
Rr([Mr], $n.prototype, "readU32", null);
Rr([Mr], $n.prototype, "readU64", null);
Rr([Mr], $n.prototype, "readU128", null);
Rr([Mr], $n.prototype, "readU256", null);
Rr([Mr], $n.prototype, "readU512", null);
Rr([Mr], $n.prototype, "readString", null);
Rr([Mr], $n.prototype, "readFixedArray", null);
Rr([Mr], $n.prototype, "readArray", null);
Qt.BinaryReader = $n;

function Xw(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
}

function Wi(t, e, n, r, i) {
    try {
        if (typeof r == "string") i[`write${Xw(r)}`](n);
        else if (r instanceof Array)
            if (typeof r[0] == "number") {
                if (n.length !== r[0]) throw new gn(`Expecting byte array of length ${r[0]}, but got ${n.length} bytes`);
                i.writeFixedArray(n)
            } else if (r.length === 2 && typeof r[1] == "number") {
            if (n.length !== r[1]) throw new gn(`Expecting byte array of length ${r[1]}, but got ${n.length} bytes`);
            for (let o = 0; o < r[1]; o++) Wi(t, null, n[o], r[0], i)
        } else i.writeArray(n, o => {
            Wi(t, e, o, r[0], i)
        });
        else if (r.kind !== void 0) switch (r.kind) {
            case "option": {
                n == null ? i.writeU8(0) : (i.writeU8(1), Wi(t, e, n, r.type, i));
                break
            }
            case "map": {
                i.writeU32(n.size), n.forEach((o, s) => {
                    Wi(t, e, s, r.key, i), Wi(t, e, o, r.value, i)
                });
                break
            }
            default:
                throw new gn(`FieldType ${r} unrecognized`)
        } else Jw(t, n, i)
    } catch (o) {
        throw o instanceof gn && o.addToFieldPath(e), o
    }
}

function Jw(t, e, n) {
    if (typeof e.borshSerialize == "function") {
        e.borshSerialize(n);
        return
    }
    const r = t.get(e.constructor);
    if (!r) throw new gn(`Class ${e.constructor.name} is missing in schema`);
    if (r.kind === "struct") r.fields.map(([i, o]) => {
        Wi(t, i, e[i], o, n)
    });
    else if (r.kind === "enum") {
        const i = e[r.field];
        for (let o = 0; o < r.values.length; ++o) {
            const [s, a] = r.values[o];
            if (s === i) {
                n.writeU8(o), Wi(t, s, e[s], a, n);
                break
            }
        }
    } else throw new gn(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`)
}

function Ub(t, e, n = Qw) {
    const r = new n;
    return Jw(t, e, r), r.toArray()
}
var e2 = Qt.serialize = Ub;

function Hi(t, e, n, r) {
    try {
        if (typeof n == "string") return r[`read${Xw(n)}`]();
        if (n instanceof Array) {
            if (typeof n[0] == "number") return r.readFixedArray(n[0]);
            if (typeof n[1] == "number") {
                const i = [];
                for (let o = 0; o < n[1]; o++) i.push(Hi(t, null, n[0], r));
                return i
            } else return r.readArray(() => Hi(t, e, n[0], r))
        }
        if (n.kind === "option") return r.readU8() ? Hi(t, e, n.type, r) : void 0;
        if (n.kind === "map") {
            let i = new Map;
            const o = r.readU32();
            for (let s = 0; s < o; s++) {
                const a = Hi(t, e, n.key, r),
                    l = Hi(t, e, n.value, r);
                i.set(a, l)
            }
            return i
        }
        return T0(t, n, r)
    } catch (i) {
        throw i instanceof gn && i.addToFieldPath(e), i
    }
}

function T0(t, e, n) {
    if (typeof e.borshDeserialize == "function") return e.borshDeserialize(n);
    const r = t.get(e);
    if (!r) throw new gn(`Class ${e.name} is missing in schema`);
    if (r.kind === "struct") {
        const i = {};
        for (const [o, s] of t.get(e).fields) i[o] = Hi(t, o, s, n);
        return new e(i)
    }
    if (r.kind === "enum") {
        const i = n.readU8();
        if (i >= r.values.length) throw new gn(`Enum index: ${i} is out of range`);
        const [o, s] = r.values[i], a = Hi(t, o, s, n);
        return new e({
            [o]: a
        })
    }
    throw new gn(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`)
}

function zb(t, e, n, r = $n) {
    const i = new r(n),
        o = T0(t, e, i);
    if (i.offset < n.length) throw new gn(`Unexpected ${n.length-i.offset} bytes after deserialized data`);
    return o
}
var t2 = Qt.deserialize = zb;

function Fb(t, e, n, r = $n) {
    const i = new r(n);
    return T0(t, e, i)
}
Zw = Qt.deserializeUnchecked = Fb;
var K = {};
Object.defineProperty(K, "__esModule", {
    value: !0
});
K.s16 = K.s8 = K.nu64be = K.u48be = K.u40be = K.u32be = K.u24be = K.u16be = qt = K.nu64 = K.u48 = K.u40 = ge = K.u32 = K.u24 = Zn = K.u16 = De = K.u8 = to = K.offset = K.greedy = K.Constant = K.UTF8 = K.CString = K.Blob = K.Boolean = K.BitField = K.BitStructure = K.VariantLayout = K.Union = K.UnionLayoutDiscriminator = K.UnionDiscriminator = K.Structure = K.Sequence = K.DoubleBE = K.Double = K.FloatBE = K.Float = K.NearInt64BE = K.NearInt64 = K.NearUInt64BE = K.NearUInt64 = K.IntBE = K.Int = K.UIntBE = K.UInt = K.OffsetLayout = K.GreedyCount = K.ExternalLayout = K.bindConstructorLayout = K.nameWithProperty = K.Layout = K.uint8ArrayToBuffer = K.checkUint8Array = void 0;
K.constant = K.utf8 = K.cstr = Ze = K.blob = K.unionLayoutDiscriminator = K.union = fn = K.seq = K.bits = de = K.struct = K.f64be = K.f64 = K.f32be = K.f32 = K.ns64be = K.s48be = K.s40be = K.s32be = K.s24be = K.s16be = On = K.ns64 = K.s48 = K.s40 = K.s32 = K.s24 = void 0;
const B0 = xe;

function ms(t) {
    if (!(t instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
}
K.checkUint8Array = ms;

function Pe(t) {
    return ms(t), B0.Buffer.from(t.buffer, t.byteOffset, t.length)
}
K.uint8ArrayToBuffer = Pe;
class ze {
    constructor(e, n) {
        if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
        this.span = e, this.property = n
    }
    makeDestinationObject() {
        return {}
    }
    getSpan(e, n) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(e) {
        const n = Object.create(this.constructor.prototype);
        return Object.assign(n, this), n.property = e, n
    }
    fromArray(e) {}
}
K.Layout = ze;

function R0(t, e) {
    return e.property ? t + "[" + e.property + "]" : t
}
K.nameWithProperty = R0;

function Wb(t, e) {
    if (typeof t != "function") throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(t, "layout_")) throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof ze)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
    t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = () => new t, Object.defineProperty(t.prototype, "encode", {
        value(n, r) {
            return e.encode(this, n, r)
        },
        writable: !0
    }), Object.defineProperty(t, "decode", {
        value(n, r) {
            return e.decode(n, r)
        },
        writable: !0
    })
}
K.bindConstructorLayout = Wb;
class _n extends ze {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
}
K.ExternalLayout = _n;
class n2 extends _n {
    constructor(e = 1, n) {
        if (!Number.isInteger(e) || 0 >= e) throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, n), this.elementSpan = e
    }
    isCount() {
        return !0
    }
    decode(e, n = 0) {
        ms(e);
        const r = e.length - n;
        return Math.floor(r / this.elementSpan)
    }
    encode(e, n, r) {
        return 0
    }
}
K.GreedyCount = n2;
class M0 extends _n {
    constructor(e, n = 0, r) {
        if (!(e instanceof ze)) throw new TypeError("layout must be a Layout");
        if (!Number.isInteger(n)) throw new TypeError("offset must be integer or undefined");
        super(e.span, r || e.property), this.layout = e, this.offset = n
    }
    isCount() {
        return this.layout instanceof tr || this.layout instanceof pr
    }
    decode(e, n = 0) {
        return this.layout.decode(e, n + this.offset)
    }
    encode(e, n, r = 0) {
        return this.layout.encode(e, n, r + this.offset)
    }
}
K.OffsetLayout = M0;
class tr extends ze {
    constructor(e, n) {
        if (super(e, n), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, n = 0) {
        return Pe(e).readUIntLE(n, this.span)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeUIntLE(e, r, this.span), this.span
    }
}
K.UInt = tr;
class pr extends ze {
    constructor(e, n) {
        if (super(e, n), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, n = 0) {
        return Pe(e).readUIntBE(n, this.span)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeUIntBE(e, r, this.span), this.span
    }
}
K.UIntBE = pr;
class ho extends ze {
    constructor(e, n) {
        if (super(e, n), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, n = 0) {
        return Pe(e).readIntLE(n, this.span)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeIntLE(e, r, this.span), this.span
    }
}
K.Int = ho;
class gs extends ze {
    constructor(e, n) {
        if (super(e, n), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, n = 0) {
        return Pe(e).readIntBE(n, this.span)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeIntBE(e, r, this.span), this.span
    }
}
K.IntBE = gs;
const Yd = Math.pow(2, 32);

function qu(t) {
    const e = Math.floor(t / Yd),
        n = t - e * Yd;
    return {
        hi32: e,
        lo32: n
    }
}

function Vu(t, e) {
    return t * Yd + e
}
class r2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        const r = Pe(e),
            i = r.readUInt32LE(n),
            o = r.readUInt32LE(n + 4);
        return Vu(o, i)
    }
    encode(e, n, r = 0) {
        const i = qu(e),
            o = Pe(n);
        return o.writeUInt32LE(i.lo32, r), o.writeUInt32LE(i.hi32, r + 4), 8
    }
}
K.NearUInt64 = r2;
class i2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        const r = Pe(e),
            i = r.readUInt32BE(n),
            o = r.readUInt32BE(n + 4);
        return Vu(i, o)
    }
    encode(e, n, r = 0) {
        const i = qu(e),
            o = Pe(n);
        return o.writeUInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8
    }
}
K.NearUInt64BE = i2;
class o2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        const r = Pe(e),
            i = r.readUInt32LE(n),
            o = r.readInt32LE(n + 4);
        return Vu(o, i)
    }
    encode(e, n, r = 0) {
        const i = qu(e),
            o = Pe(n);
        return o.writeUInt32LE(i.lo32, r), o.writeInt32LE(i.hi32, r + 4), 8
    }
}
K.NearInt64 = o2;
class s2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        const r = Pe(e),
            i = r.readInt32BE(n),
            o = r.readUInt32BE(n + 4);
        return Vu(i, o)
    }
    encode(e, n, r = 0) {
        const i = qu(e),
            o = Pe(n);
        return o.writeInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8
    }
}
K.NearInt64BE = s2;
class a2 extends ze {
    constructor(e) {
        super(4, e)
    }
    decode(e, n = 0) {
        return Pe(e).readFloatLE(n)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeFloatLE(e, r), 4
    }
}
K.Float = a2;
class l2 extends ze {
    constructor(e) {
        super(4, e)
    }
    decode(e, n = 0) {
        return Pe(e).readFloatBE(n)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeFloatBE(e, r), 4
    }
}
K.FloatBE = l2;
class u2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        return Pe(e).readDoubleLE(n)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeDoubleLE(e, r), 8
    }
}
K.Double = u2;
class c2 extends ze {
    constructor(e) {
        super(8, e)
    }
    decode(e, n = 0) {
        return Pe(e).readDoubleBE(n)
    }
    encode(e, n, r = 0) {
        return Pe(n).writeDoubleBE(e, r), 8
    }
}
K.DoubleBE = c2;
class f2 extends ze {
    constructor(e, n, r) {
        if (!(e instanceof ze)) throw new TypeError("elementLayout must be a Layout");
        if (!(n instanceof _n && n.isCount() || Number.isInteger(n) && 0 <= n)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let i = -1;
        !(n instanceof _n) && 0 < e.span && (i = n * e.span), super(i, r), this.elementLayout = e, this.count = n
    }
    getSpan(e, n = 0) {
        if (0 <= this.span) return this.span;
        let r = 0,
            i = this.count;
        if (i instanceof _n && (i = i.decode(e, n)), 0 < this.elementLayout.span) r = i * this.elementLayout.span;
        else {
            let o = 0;
            for (; o < i;) r += this.elementLayout.getSpan(e, n + r), ++o
        }
        return r
    }
    decode(e, n = 0) {
        const r = [];
        let i = 0,
            o = this.count;
        for (o instanceof _n && (o = o.decode(e, n)); i < o;) r.push(this.elementLayout.decode(e, n)), n += this.elementLayout.getSpan(e, n), i += 1;
        return r
    }
    encode(e, n, r = 0) {
        const i = this.elementLayout,
            o = e.reduce((s, a) => s + i.encode(a, n, r + s), 0);
        return this.count instanceof _n && this.count.encode(e.length, n, r), o
    }
}
K.Sequence = f2;
class d2 extends ze {
    constructor(e, n, r) {
        if (!(Array.isArray(e) && e.reduce((o, s) => o && s instanceof ze, !0))) throw new TypeError("fields must be array of Layout instances");
        typeof n == "boolean" && r === void 0 && (r = n, n = void 0);
        for (const o of e)
            if (0 > o.span && o.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
        let i = -1;
        try {
            i = e.reduce((o, s) => o + s.getSpan(), 0)
        } catch {}
        super(i, n), this.fields = e, this.decodePrefixes = !!r
    }
    getSpan(e, n = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        try {
            r = this.fields.reduce((i, o) => {
                const s = o.getSpan(e, n);
                return n += s, i + s
            }, 0)
        } catch {
            throw new RangeError("indeterminate span")
        }
        return r
    }
    decode(e, n = 0) {
        ms(e);
        const r = this.makeDestinationObject();
        for (const i of this.fields)
            if (i.property !== void 0 && (r[i.property] = i.decode(e, n)), n += i.getSpan(e, n), this.decodePrefixes && e.length === n) break;
        return r
    }
    encode(e, n, r = 0) {
        const i = r;
        let o = 0,
            s = 0;
        for (const a of this.fields) {
            let l = a.span;
            if (s = 0 < l ? l : 0, a.property !== void 0) {
                const u = e[a.property];
                u !== void 0 && (s = a.encode(u, n, r), 0 > l && (l = a.getSpan(n, r)))
            }
            o = r, r += l
        }
        return o + s - i
    }
    fromArray(e) {
        const n = this.makeDestinationObject();
        for (const r of this.fields) r.property !== void 0 && 0 < e.length && (n[r.property] = e.shift());
        return n
    }
    layoutFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const n of this.fields)
            if (n.property === e) return n
    }
    offsetOf(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        let n = 0;
        for (const r of this.fields) {
            if (r.property === e) return n;
            0 > r.span ? n = -1 : 0 <= n && (n += r.span)
        }
    }
}
K.Structure = d2;
class L0 {
    constructor(e) {
        this.property = e
    }
    decode(e, n) {
        throw new Error("UnionDiscriminator is abstract")
    }
    encode(e, n, r) {
        throw new Error("UnionDiscriminator is abstract")
    }
}
K.UnionDiscriminator = L0;
class cu extends L0 {
    constructor(e, n) {
        if (!(e instanceof _n && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(n || e.property || "variant"), this.layout = e
    }
    decode(e, n) {
        return this.layout.decode(e, n)
    }
    encode(e, n, r) {
        return this.layout.encode(e, n, r)
    }
}
K.UnionLayoutDiscriminator = cu;
class N0 extends ze {
    constructor(e, n, r) {
        let i;
        if (e instanceof tr || e instanceof pr) i = new cu(new M0(e));
        else if (e instanceof _n && e.isCount()) i = new cu(e);
        else if (e instanceof L0) i = e;
        else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (n === void 0 && (n = null), !(n === null || n instanceof ze)) throw new TypeError("defaultLayout must be null or a Layout");
        if (n !== null) {
            if (0 > n.span) throw new Error("defaultLayout must have constant span");
            n.property === void 0 && (n = n.replicate("content"))
        }
        let o = -1;
        n && (o = n.span, 0 <= o && (e instanceof tr || e instanceof pr) && (o += i.layout.span)), super(o, r), this.discriminator = i, this.usesPrefixDiscriminator = e instanceof tr || e instanceof pr, this.defaultLayout = n, this.registry = {};
        let s = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(a) {
            return s(a)
        }, this.configGetSourceVariant = function(a) {
            s = a.bind(this)
        }
    }
    getSpan(e, n = 0) {
        if (0 <= this.span) return this.span;
        const r = this.getVariant(e, n);
        if (!r) throw new Error("unable to determine span for unrecognized variant");
        return r.getSpan(e, n)
    }
    defaultGetSourceVariant(e) {
        if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
            if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)) return;
            const n = this.registry[e[this.discriminator.property]];
            if (n && (!n.layout || n.property && Object.prototype.hasOwnProperty.call(e, n.property))) return n
        } else
            for (const n in this.registry) {
                const r = this.registry[n];
                if (r.property && Object.prototype.hasOwnProperty.call(e, r.property)) return r
            }
        throw new Error("unable to infer src variant")
    }
    decode(e, n = 0) {
        let r;
        const i = this.discriminator,
            o = i.decode(e, n),
            s = this.registry[o];
        if (s === void 0) {
            const a = this.defaultLayout;
            let l = 0;
            this.usesPrefixDiscriminator && (l = i.layout.span), r = this.makeDestinationObject(), r[i.property] = o, r[a.property] = a.decode(e, n + l)
        } else r = s.decode(e, n);
        return r
    }
    encode(e, n, r = 0) {
        const i = this.getSourceVariant(e);
        if (i === void 0) {
            const o = this.discriminator,
                s = this.defaultLayout;
            let a = 0;
            return this.usesPrefixDiscriminator && (a = o.layout.span), o.encode(e[o.property], n, r), a + s.encode(e[s.property], n, r + a)
        }
        return i.encode(e, n, r)
    }
    addVariant(e, n, r) {
        const i = new h2(this, e, n, r);
        return this.registry[e] = i, i
    }
    getVariant(e, n = 0) {
        let r;
        return e instanceof Uint8Array ? r = this.discriminator.decode(e, n) : r = e, this.registry[r]
    }
}
K.Union = N0;
class h2 extends ze {
    constructor(e, n, r, i) {
        if (!(e instanceof N0)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(n) || 0 > n) throw new TypeError("variant must be a (non-negative) integer");
        if (typeof r == "string" && i === void 0 && (i = r, r = null), r) {
            if (!(r instanceof ze)) throw new TypeError("layout must be a Layout");
            if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
            if (typeof i != "string") throw new TypeError("variant must have a String property")
        }
        let o = e.span;
        0 > e.span && (o = r ? r.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, i), this.union = e, this.variant = n, this.layout = r || null
    }
    getSpan(e, n = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
        let i = 0;
        return this.layout && (i = this.layout.getSpan(e, n + r)), r + i
    }
    decode(e, n = 0) {
        const r = this.makeDestinationObject();
        if (this !== this.union.getVariant(e, n)) throw new Error("variant mismatch");
        let i = 0;
        return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, n + i) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r
    }
    encode(e, n, r = 0) {
        let i = 0;
        if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(e, this.property)) throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, n, r);
        let o = i;
        if (this.layout && (this.layout.encode(e[this.property], n, r + i), o += this.layout.getSpan(n, r + i), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
        return o
    }
    fromArray(e) {
        if (this.layout) return this.layout.fromArray(e)
    }
}
K.VariantLayout = h2;

function _o(t) {
    return 0 > t && (t += 4294967296), t
}
class O0 extends ze {
    constructor(e, n, r) {
        if (!(e instanceof tr || e instanceof pr)) throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof n == "string" && r === void 0 && (r = n, n = !1), 4 < e.span) throw new RangeError("word cannot exceed 32 bits");
        super(e.span, r), this.word = e, this.msb = !!n, this.fields = [];
        let i = 0;
        this._packedSetValue = function(o) {
            return i = _o(o), this
        }, this._packedGetValue = function() {
            return i
        }
    }
    decode(e, n = 0) {
        const r = this.makeDestinationObject(),
            i = this.word.decode(e, n);
        this._packedSetValue(i);
        for (const o of this.fields) o.property !== void 0 && (r[o.property] = o.decode(e));
        return r
    }
    encode(e, n, r = 0) {
        const i = this.word.decode(n, r);
        this._packedSetValue(i);
        for (const o of this.fields)
            if (o.property !== void 0) {
                const s = e[o.property];
                s !== void 0 && o.encode(s)
            } return this.word.encode(this._packedGetValue(), n, r)
    }
    addField(e, n) {
        const r = new P0(this, e, n);
        return this.fields.push(r), r
    }
    addBoolean(e) {
        const n = new p2(this, e);
        return this.fields.push(n), n
    }
    fieldFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const n of this.fields)
            if (n.property === e) return n
    }
}
K.BitStructure = O0;
class P0 {
    constructor(e, n, r) {
        if (!(e instanceof O0)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(n) || 0 >= n) throw new TypeError("bits must be positive integer");
        const i = 8 * e.span,
            o = e.fields.reduce((s, a) => s + a.bits, 0);
        if (n + o > i) throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
        this.container = e, this.bits = n, this.valueMask = (1 << n) - 1, n === 32 && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = i - o - n), this.wordMask = _o(this.valueMask << this.start), this.property = r
    }
    decode(e, n) {
        const r = this.container._packedGetValue();
        return _o(r & this.wordMask) >>> this.start
    }
    encode(e) {
        if (typeof e != "number" || !Number.isInteger(e) || e !== _o(e & this.valueMask)) throw new TypeError(R0("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const n = this.container._packedGetValue(),
            r = _o(e << this.start);
        this.container._packedSetValue(_o(n & ~this.wordMask) | r)
    }
}
K.BitField = P0;
let p2 = class extends P0 {
    constructor(e, n) {
        super(e, 1, n)
    }
    decode(e, n) {
        return !!super.decode(e, n)
    }
    encode(e) {
        typeof e == "boolean" && (e = +e), super.encode(e)
    }
};
K.Boolean = p2;
class m2 extends ze {
    constructor(e, n) {
        if (!(e instanceof _n && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let r = -1;
        e instanceof _n || (r = e), super(r, n), this.length = e
    }
    getSpan(e, n) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, n)), r
    }
    decode(e, n = 0) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, n)), Pe(e).slice(n, n + r)
    }
    encode(e, n, r) {
        let i = this.length;
        if (this.length instanceof _n && (i = e.length), !(e instanceof Uint8Array && i === e.length)) throw new TypeError(R0("Blob.encode", this) + " requires (length " + i + ") Uint8Array as src");
        if (r + i > n.length) throw new RangeError("encoding overruns Uint8Array");
        const o = Pe(e);
        return Pe(n).write(o.toString("hex"), r, i, "hex"), this.length instanceof _n && this.length.encode(i, n, r), i
    }
}
K.Blob = m2;
class g2 extends ze {
    constructor(e) {
        super(-1, e)
    }
    getSpan(e, n = 0) {
        ms(e);
        let r = n;
        for (; r < e.length && e[r] !== 0;) r += 1;
        return 1 + r - n
    }
    decode(e, n = 0) {
        const r = this.getSpan(e, n);
        return Pe(e).slice(n, n + r - 1).toString("utf-8")
    }
    encode(e, n, r = 0) {
        typeof e != "string" && (e = String(e));
        const i = B0.Buffer.from(e, "utf8"),
            o = i.length;
        if (r + o > n.length) throw new RangeError("encoding overruns Buffer");
        const s = Pe(n);
        return i.copy(s, r), s[r + o] = 0, o + 1
    }
}
K.CString = g2;
class y2 extends ze {
    constructor(e, n) {
        if (typeof e == "string" && n === void 0 && (n = e, e = void 0), e === void 0) e = -1;
        else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer");
        super(-1, n), this.maxSpan = e
    }
    getSpan(e, n = 0) {
        return ms(e), e.length - n
    }
    decode(e, n = 0) {
        const r = this.getSpan(e, n);
        if (0 <= this.maxSpan && this.maxSpan < r) throw new RangeError("text length exceeds maxSpan");
        return Pe(e).slice(n, n + r).toString("utf-8")
    }
    encode(e, n, r = 0) {
        typeof e != "string" && (e = String(e));
        const i = B0.Buffer.from(e, "utf8"),
            o = i.length;
        if (0 <= this.maxSpan && this.maxSpan < o) throw new RangeError("text length exceeds maxSpan");
        if (r + o > n.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(Pe(n), r), o
    }
}
K.UTF8 = y2;
class v2 extends ze {
    constructor(e, n) {
        super(0, n), this.value = e
    }
    decode(e, n) {
        return this.value
    }
    encode(e, n, r) {
        return 0
    }
}
K.Constant = v2;
K.greedy = (t, e) => new n2(t, e);
var to = K.offset = (t, e, n) => new M0(t, e, n),
    De = K.u8 = t => new tr(1, t),
    Zn = K.u16 = t => new tr(2, t);
K.u24 = t => new tr(3, t);
var ge = K.u32 = t => new tr(4, t);
K.u40 = t => new tr(5, t);
K.u48 = t => new tr(6, t);
var qt = K.nu64 = t => new r2(t);
K.u16be = t => new pr(2, t);
K.u24be = t => new pr(3, t);
K.u32be = t => new pr(4, t);
K.u40be = t => new pr(5, t);
K.u48be = t => new pr(6, t);
K.nu64be = t => new i2(t);
K.s8 = t => new ho(1, t);
K.s16 = t => new ho(2, t);
K.s24 = t => new ho(3, t);
K.s32 = t => new ho(4, t);
K.s40 = t => new ho(5, t);
K.s48 = t => new ho(6, t);
var On = K.ns64 = t => new o2(t);
K.s16be = t => new gs(2, t);
K.s24be = t => new gs(3, t);
K.s32be = t => new gs(4, t);
K.s40be = t => new gs(5, t);
K.s48be = t => new gs(6, t);
K.ns64be = t => new s2(t);
K.f32 = t => new a2(t);
K.f32be = t => new l2(t);
K.f64 = t => new u2(t);
K.f64be = t => new c2(t);
var de = K.struct = (t, e, n) => new d2(t, e, n);
K.bits = (t, e, n) => new O0(t, e, n);
var fn = K.seq = (t, e, n) => new f2(t, e, n);
K.union = (t, e, n) => new N0(t, e, n);
K.unionLayoutDiscriminator = (t, e) => new cu(t, e);
var Ze = K.blob = (t, e) => new m2(t, e);
K.cstr = t => new g2(t);
K.utf8 = (t, e) => new y2(t, e);
K.constant = (t, e) => new v2(t, e);
var Ma = {};
Object.defineProperty(Ma, "__esModule", {
    value: !0
});

function Hb(t) {
    {
        const e = Buffer.from(t);
        e.reverse();
        const n = e.toString("hex");
        return n.length === 0 ? BigInt(0) : BigInt(`0x${n}`)
    }
}
var $b = Ma.toBigIntLE = Hb;

function Kb(t) {
    {
        const e = t.toString("hex");
        return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`)
    }
}
Ma.toBigIntBE = Kb;

function qb(t, e) {
    {
        const n = t.toString(16),
            r = Buffer.from(n.padStart(e * 2, "0").slice(0, e * 2), "hex");
        return r.reverse(), r
    }
}
var Vb = Ma.toBufferLE = qb;

function Gb(t, e) {
    {
        const n = t.toString(16);
        return Buffer.from(n.padStart(e * 2, "0").slice(0, e * 2), "hex")
    }
}
Ma.toBufferBE = Gb;
class Zb extends TypeError {
    constructor(e, n) {
        let r;
        const {
            message: i,
            ...o
        } = e, {
            path: s
        } = e, a = s.length === 0 ? i : "At path: " + s.join(".") + " -- " + i;
        super(a), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
            var l;
            return (l = r) != null ? l : r = [e, ...n()]
        }
    }
}

function Yb(t) {
    return Bi(t) && typeof t[Symbol.iterator] == "function"
}

function Bi(t) {
    return typeof t == "object" && t != null
}

function gr(t) {
    return typeof t == "string" ? JSON.stringify(t) : "" + t
}

function Qb(t) {
    const {
        done: e,
        value: n
    } = t.next();
    return e ? void 0 : n
}

function Xb(t, e, n, r) {
    if (t === !0) return;
    t === !1 ? t = {} : typeof t == "string" && (t = {
        message: t
    });
    const {
        path: i,
        branch: o
    } = e, {
        type: s
    } = n, {
        refinement: a,
        message: l = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + gr(r) + "`"
    } = t;
    return {
        value: r,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o,
        ...t,
        message: l
    }
}

function* um(t, e, n, r) {
    Yb(t) || (t = [t]);
    for (const i of t) {
        const o = Xb(i, e, n, r);
        o && (yield o)
    }
}

function* j0(t, e, n = {}) {
    const {
        path: r = [],
        branch: i = [t],
        coerce: o = !1,
        mask: s = !1
    } = n, a = {
        path: r,
        branch: i
    };
    if (o && (t = e.coercer(t, a), s && e.type !== "type" && Bi(e.schema) && Bi(t) && !Array.isArray(t)))
        for (const u in t) e.schema[u] === void 0 && delete t[u];
    let l = !0;
    for (const u of e.validator(t, a)) l = !1, yield [u, void 0];
    for (let [u, h, g] of e.entries(t, a)) {
        const w = j0(h, g, {
            path: u === void 0 ? r : [...r, u],
            branch: u === void 0 ? i : [...i, h],
            coerce: o,
            mask: s
        });
        for (const C of w) C[0] ? (l = !1, yield [C[0], void 0]) : o && (h = C[1], u === void 0 ? t = h : t instanceof Map ? t.set(u, h) : t instanceof Set ? t.add(h) : Bi(t) && (t[u] = h))
    }
    if (l)
        for (const u of e.refiner(t, a)) l = !1, yield [u, void 0];
    l && (yield [void 0, t])
}
let Lr = class {
    constructor(e) {
        const {
            type: n,
            schema: r,
            validator: i,
            refiner: o,
            coercer: s = l => l,
            entries: a = function*() {}
        } = e;
        this.type = n, this.schema = r, this.entries = a, this.coercer = s, i ? this.validator = (l, u) => {
            const h = i(l, u);
            return um(h, u, this, l)
        } : this.validator = () => [], o ? this.refiner = (l, u) => {
            const h = o(l, u);
            return um(h, u, this, l)
        } : this.refiner = () => []
    }
    assert(e) {
        return Jb(e, this)
    }
    create(e) {
        return re(e, this)
    }
    is(e) {
        return w2(e, this)
    }
    mask(e) {
        return e_(e, this)
    }
    validate(e, n = {}) {
        return La(e, this, n)
    }
};

function Jb(t, e) {
    const n = La(t, e);
    if (n[0]) throw n[0]
}

function re(t, e) {
    const n = La(t, e, {
        coerce: !0
    });
    if (n[0]) throw n[0];
    return n[1]
}

function e_(t, e) {
    const n = La(t, e, {
        coerce: !0,
        mask: !0
    });
    if (n[0]) throw n[0];
    return n[1]
}

function w2(t, e) {
    return !La(t, e)[0]
}

function La(t, e, n = {}) {
    const r = j0(t, e, n),
        i = Qb(r);
    return i[0] ? [new Zb(i[0], function*() {
        for (const s of r) s[0] && (yield s[0])
    }), void 0] : [void 0, i[1]]
}

function po(t, e) {
    return new Lr({
        type: t,
        schema: null,
        validator: e
    })
}

function t_() {
    return po("any", () => !0)
}

function se(t) {
    return new Lr({
        type: "array",
        schema: t,
        * entries(e) {
            if (t && Array.isArray(e))
                for (const [n, r] of e.entries()) yield [n, r, t]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || "Expected an array value, but received: " + gr(e)
        }
    })
}

function Tr() {
    return po("boolean", t => typeof t == "boolean")
}

function D0(t) {
    return po("instance", e => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + gr(e))
}

function at(t) {
    const e = gr(t),
        n = typeof t;
    return new Lr({
        type: "literal",
        schema: n === "string" || n === "number" || n === "boolean" ? t : null,
        validator(r) {
            return r === t || "Expected the literal `" + e + "`, but received: " + gr(r)
        }
    })
}

function n_() {
    return po("never", () => !1)
}

function oe(t) {
    return new Lr({
        ...t,
        validator: (e, n) => e === null || t.validator(e, n),
        refiner: (e, n) => e === null || t.refiner(e, n)
    })
}

function $() {
    return po("number", t => typeof t == "number" && !isNaN(t) || "Expected a number, but received: " + gr(t))
}

function ye(t) {
    return new Lr({
        ...t,
        validator: (e, n) => e === void 0 || t.validator(e, n),
        refiner: (e, n) => e === void 0 || t.refiner(e, n)
    })
}

function x2(t, e) {
    return new Lr({
        type: "record",
        schema: null,
        * entries(n) {
            if (Bi(n))
                for (const r in n) {
                    const i = n[r];
                    yield [r, r, t], yield [r, i, e]
                }
        },
        validator(n) {
            return Bi(n) || "Expected an object, but received: " + gr(n)
        }
    })
}

function ne() {
    return po("string", t => typeof t == "string" || "Expected a string, but received: " + gr(t))
}

function U0(t) {
    const e = n_();
    return new Lr({
        type: "tuple",
        schema: null,
        * entries(n) {
            if (Array.isArray(n)) {
                const r = Math.max(t.length, n.length);
                for (let i = 0; i < r; i++) yield [i, n[i], t[i] || e]
            }
        },
        validator(n) {
            return Array.isArray(n) || "Expected an array, but received: " + gr(n)
        }
    })
}

function ee(t) {
    const e = Object.keys(t);
    return new Lr({
        type: "type",
        schema: t,
        * entries(n) {
            if (Bi(n))
                for (const r of e) yield [r, n[r], t[r]]
        },
        validator(n) {
            return Bi(n) || "Expected an object, but received: " + gr(n)
        }
    })
}

function Bn(t) {
    const e = t.map(n => n.type).join(" | ");
    return new Lr({
        type: "union",
        schema: null,
        validator(n, r) {
            const i = [];
            for (const o of t) {
                const [...s] = j0(n, o, r), [a] = s;
                if (a[0])
                    for (const [l] of s) l && i.push(l);
                else return []
            }
            return ["Expected the value to satisfy a union of `" + e + "`, but received: " + gr(n), ...i]
        }
    })
}

function Na() {
    return po("unknown", () => !0)
}

function Oa(t, e, n) {
    return new Lr({
        ...t,
        coercer: (r, i) => w2(r, e) ? t.coercer(n(r, i), i) : t.coercer(r, i)
    })
}
var cl, r_ = new Uint8Array(16);

function E2() {
    if (!cl && (cl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !cl)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return cl(r_)
}
const i_ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Gu(t) {
    return typeof t == "string" && i_.test(t)
}
var Kt = [];
for (var ff = 0; ff < 256; ++ff) Kt.push((ff + 256).toString(16).substr(1));

function Zu(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        n = (Kt[t[e + 0]] + Kt[t[e + 1]] + Kt[t[e + 2]] + Kt[t[e + 3]] + "-" + Kt[t[e + 4]] + Kt[t[e + 5]] + "-" + Kt[t[e + 6]] + Kt[t[e + 7]] + "-" + Kt[t[e + 8]] + Kt[t[e + 9]] + "-" + Kt[t[e + 10]] + Kt[t[e + 11]] + Kt[t[e + 12]] + Kt[t[e + 13]] + Kt[t[e + 14]] + Kt[t[e + 15]]).toLowerCase();
    if (!Gu(n)) throw TypeError("Stringified UUID is invalid");
    return n
}
var cm, df, hf = 0,
    pf = 0;

function o_(t, e, n) {
    var r = e && n || 0,
        i = e || new Array(16);
    t = t || {};
    var o = t.node || cm,
        s = t.clockseq !== void 0 ? t.clockseq : df;
    if (o == null || s == null) {
        var a = t.random || (t.rng || E2)();
        o == null && (o = cm = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]), s == null && (s = df = (a[6] << 8 | a[7]) & 16383)
    }
    var l = t.msecs !== void 0 ? t.msecs : Date.now(),
        u = t.nsecs !== void 0 ? t.nsecs : pf + 1,
        h = l - hf + (u - pf) / 1e4;
    if (h < 0 && t.clockseq === void 0 && (s = s + 1 & 16383), (h < 0 || l > hf) && t.nsecs === void 0 && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    hf = l, pf = u, df = s, l += 122192928e5;
    var g = ((l & 268435455) * 1e4 + u) % 4294967296;
    i[r++] = g >>> 24 & 255, i[r++] = g >>> 16 & 255, i[r++] = g >>> 8 & 255, i[r++] = g & 255;
    var w = l / 4294967296 * 1e4 & 268435455;
    i[r++] = w >>> 8 & 255, i[r++] = w & 255, i[r++] = w >>> 24 & 15 | 16, i[r++] = w >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = s & 255;
    for (var C = 0; C < 6; ++C) i[r + C] = o[C];
    return e || Zu(i)
}

function S2(t) {
    if (!Gu(t)) throw TypeError("Invalid UUID");
    var e, n = new Uint8Array(16);
    return n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = e & 255, n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, n[5] = e & 255, n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, n[7] = e & 255, n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, n[9] = e & 255, n[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = e / 4294967296 & 255, n[12] = e >>> 24 & 255, n[13] = e >>> 16 & 255, n[14] = e >>> 8 & 255, n[15] = e & 255, n
}

function s_(t) {
    t = unescape(encodeURIComponent(t));
    for (var e = [], n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
    return e
}
var a_ = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    l_ = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

function b2(t, e, n) {
    function r(i, o, s, a) {
        if (typeof i == "string" && (i = s_(i)), typeof o == "string" && (o = S2(o)), o.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var l = new Uint8Array(16 + i.length);
        if (l.set(o), l.set(i, o.length), l = n(l), l[6] = l[6] & 15 | e, l[8] = l[8] & 63 | 128, s) {
            a = a || 0;
            for (var u = 0; u < 16; ++u) s[a + u] = l[u];
            return s
        }
        return Zu(l)
    }
    try {
        r.name = t
    } catch {}
    return r.DNS = a_, r.URL = l_, r
}

function u_(t) {
    if (typeof t == "string") {
        var e = unescape(encodeURIComponent(t));
        t = new Uint8Array(e.length);
        for (var n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n)
    }
    return c_(f_(d_(t), t.length * 8))
}

function c_(t) {
    for (var e = [], n = t.length * 32, r = "0123456789abcdef", i = 0; i < n; i += 8) {
        var o = t[i >> 5] >>> i % 32 & 255,
            s = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(o & 15), 16);
        e.push(s)
    }
    return e
}

function _2(t) {
    return (t + 64 >>> 9 << 4) + 14 + 1
}

function f_(t, e) {
    t[e >> 5] |= 128 << e % 32, t[_2(e) - 1] = e;
    for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
        var a = n,
            l = r,
            u = i,
            h = o;
        n = sn(n, r, i, o, t[s], 7, -680876936), o = sn(o, n, r, i, t[s + 1], 12, -389564586), i = sn(i, o, n, r, t[s + 2], 17, 606105819), r = sn(r, i, o, n, t[s + 3], 22, -1044525330), n = sn(n, r, i, o, t[s + 4], 7, -176418897), o = sn(o, n, r, i, t[s + 5], 12, 1200080426), i = sn(i, o, n, r, t[s + 6], 17, -1473231341), r = sn(r, i, o, n, t[s + 7], 22, -45705983), n = sn(n, r, i, o, t[s + 8], 7, 1770035416), o = sn(o, n, r, i, t[s + 9], 12, -1958414417), i = sn(i, o, n, r, t[s + 10], 17, -42063), r = sn(r, i, o, n, t[s + 11], 22, -1990404162), n = sn(n, r, i, o, t[s + 12], 7, 1804603682), o = sn(o, n, r, i, t[s + 13], 12, -40341101), i = sn(i, o, n, r, t[s + 14], 17, -1502002290), r = sn(r, i, o, n, t[s + 15], 22, 1236535329), n = an(n, r, i, o, t[s + 1], 5, -165796510), o = an(o, n, r, i, t[s + 6], 9, -1069501632), i = an(i, o, n, r, t[s + 11], 14, 643717713), r = an(r, i, o, n, t[s], 20, -373897302), n = an(n, r, i, o, t[s + 5], 5, -701558691), o = an(o, n, r, i, t[s + 10], 9, 38016083), i = an(i, o, n, r, t[s + 15], 14, -660478335), r = an(r, i, o, n, t[s + 4], 20, -405537848), n = an(n, r, i, o, t[s + 9], 5, 568446438), o = an(o, n, r, i, t[s + 14], 9, -1019803690), i = an(i, o, n, r, t[s + 3], 14, -187363961), r = an(r, i, o, n, t[s + 8], 20, 1163531501), n = an(n, r, i, o, t[s + 13], 5, -1444681467), o = an(o, n, r, i, t[s + 2], 9, -51403784), i = an(i, o, n, r, t[s + 7], 14, 1735328473), r = an(r, i, o, n, t[s + 12], 20, -1926607734), n = ln(n, r, i, o, t[s + 5], 4, -378558), o = ln(o, n, r, i, t[s + 8], 11, -2022574463), i = ln(i, o, n, r, t[s + 11], 16, 1839030562), r = ln(r, i, o, n, t[s + 14], 23, -35309556), n = ln(n, r, i, o, t[s + 1], 4, -1530992060), o = ln(o, n, r, i, t[s + 4], 11, 1272893353), i = ln(i, o, n, r, t[s + 7], 16, -155497632), r = ln(r, i, o, n, t[s + 10], 23, -1094730640), n = ln(n, r, i, o, t[s + 13], 4, 681279174), o = ln(o, n, r, i, t[s], 11, -358537222), i = ln(i, o, n, r, t[s + 3], 16, -722521979), r = ln(r, i, o, n, t[s + 6], 23, 76029189), n = ln(n, r, i, o, t[s + 9], 4, -640364487), o = ln(o, n, r, i, t[s + 12], 11, -421815835), i = ln(i, o, n, r, t[s + 15], 16, 530742520), r = ln(r, i, o, n, t[s + 2], 23, -995338651), n = un(n, r, i, o, t[s], 6, -198630844), o = un(o, n, r, i, t[s + 7], 10, 1126891415), i = un(i, o, n, r, t[s + 14], 15, -1416354905), r = un(r, i, o, n, t[s + 5], 21, -57434055), n = un(n, r, i, o, t[s + 12], 6, 1700485571), o = un(o, n, r, i, t[s + 3], 10, -1894986606), i = un(i, o, n, r, t[s + 10], 15, -1051523), r = un(r, i, o, n, t[s + 1], 21, -2054922799), n = un(n, r, i, o, t[s + 8], 6, 1873313359), o = un(o, n, r, i, t[s + 15], 10, -30611744), i = un(i, o, n, r, t[s + 6], 15, -1560198380), r = un(r, i, o, n, t[s + 13], 21, 1309151649), n = un(n, r, i, o, t[s + 4], 6, -145523070), o = un(o, n, r, i, t[s + 11], 10, -1120210379), i = un(i, o, n, r, t[s + 2], 15, 718787259), r = un(r, i, o, n, t[s + 9], 21, -343485551), n = wi(n, a), r = wi(r, l), i = wi(i, u), o = wi(o, h)
    }
    return [n, r, i, o]
}

function d_(t) {
    if (t.length === 0) return [];
    for (var e = t.length * 8, n = new Uint32Array(_2(e)), r = 0; r < e; r += 8) n[r >> 5] |= (t[r / 8] & 255) << r % 32;
    return n
}

function wi(t, e) {
    var n = (t & 65535) + (e & 65535),
        r = (t >> 16) + (e >> 16) + (n >> 16);
    return r << 16 | n & 65535
}

function h_(t, e) {
    return t << e | t >>> 32 - e
}

function Yu(t, e, n, r, i, o) {
    return wi(h_(wi(wi(e, t), wi(r, o)), i), n)
}

function sn(t, e, n, r, i, o, s) {
    return Yu(e & n | ~e & r, t, e, i, o, s)
}

function an(t, e, n, r, i, o, s) {
    return Yu(e & r | n & ~r, t, e, i, o, s)
}

function ln(t, e, n, r, i, o, s) {
    return Yu(e ^ n ^ r, t, e, i, o, s)
}

function un(t, e, n, r, i, o, s) {
    return Yu(n ^ (e | ~r), t, e, i, o, s)
}
var p_ = b2("v3", 48, u_);
const m_ = p_;

function g_(t, e, n) {
    t = t || {};
    var r = t.random || (t.rng || E2)();
    if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
        n = n || 0;
        for (var i = 0; i < 16; ++i) e[n + i] = r[i];
        return e
    }
    return Zu(r)
}

function y_(t, e, n, r) {
    switch (t) {
        case 0:
            return e & n ^ ~e & r;
        case 1:
            return e ^ n ^ r;
        case 2:
            return e & n ^ e & r ^ n & r;
        case 3:
            return e ^ n ^ r
    }
}

function mf(t, e) {
    return t << e | t >>> 32 - e
}

function v_(t) {
    var e = [1518500249, 1859775393, 2400959708, 3395469782],
        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof t == "string") {
        var r = unescape(encodeURIComponent(t));
        t = [];
        for (var i = 0; i < r.length; ++i) t.push(r.charCodeAt(i))
    } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
    t.push(128);
    for (var o = t.length / 4 + 2, s = Math.ceil(o / 16), a = new Array(s), l = 0; l < s; ++l) {
        for (var u = new Uint32Array(16), h = 0; h < 16; ++h) u[h] = t[l * 64 + h * 4] << 24 | t[l * 64 + h * 4 + 1] << 16 | t[l * 64 + h * 4 + 2] << 8 | t[l * 64 + h * 4 + 3];
        a[l] = u
    }
    a[s - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = (t.length - 1) * 8 & 4294967295;
    for (var g = 0; g < s; ++g) {
        for (var w = new Uint32Array(80), C = 0; C < 16; ++C) w[C] = a[g][C];
        for (var B = 16; B < 80; ++B) w[B] = mf(w[B - 3] ^ w[B - 8] ^ w[B - 14] ^ w[B - 16], 1);
        for (var I = n[0], R = n[1], _ = n[2], b = n[3], v = n[4], O = 0; O < 80; ++O) {
            var D = Math.floor(O / 20),
                N = mf(I, 5) + y_(D, R, _, b) + v + e[D] + w[O] >>> 0;
            v = b, b = _, _ = mf(R, 30) >>> 0, R = I, I = N
        }
        n[0] = n[0] + I >>> 0, n[1] = n[1] + R >>> 0, n[2] = n[2] + _ >>> 0, n[3] = n[3] + b >>> 0, n[4] = n[4] + v >>> 0
    }
    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, n[0] & 255, n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, n[1] & 255, n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, n[2] & 255, n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, n[3] & 255, n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, n[4] & 255]
}
var w_ = b2("v5", 80, v_);
const x_ = w_,
    E_ = "00000000-0000-0000-0000-000000000000";

function S_(t) {
    if (!Gu(t)) throw TypeError("Invalid UUID");
    return parseInt(t.substr(14, 1), 16)
}
const b_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        NIL: E_,
        parse: S2,
        stringify: Zu,
        v1: o_,
        v3: m_,
        v4: g_,
        v5: x_,
        validate: Gu,
        version: S_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    k2 = ah(b_),
    __ = k2.v4,
    k_ = function(t, e, n, r) {
        if (typeof t != "string") throw new TypeError(t + " must be a string");
        r = r || {};
        const i = typeof r.version == "number" ? r.version : 2;
        if (i !== 1 && i !== 2) throw new TypeError(i + " must be 1 or 2");
        const o = {
            method: t
        };
        if (i === 2 && (o.jsonrpc = "2.0"), e) {
            if (typeof e != "object" && !Array.isArray(e)) throw new TypeError(e + " must be an object, array or omitted");
            o.params = e
        }
        if (typeof n > "u") {
            const s = typeof r.generator == "function" ? r.generator : function() {
                return __()
            };
            o.id = s(o, r)
        } else i === 2 && n === null ? r.notificationIdNull && (o.id = null) : o.id = n;
        return o
    };
var C_ = k_;
const A_ = k2.v4,
    I_ = C_,
    pa = function(t, e) {
        if (!(this instanceof pa)) return new pa(t, e);
        e || (e = {}), this.options = {
            reviver: typeof e.reviver < "u" ? e.reviver : null,
            replacer: typeof e.replacer < "u" ? e.replacer : null,
            generator: typeof e.generator < "u" ? e.generator : function() {
                return A_()
            },
            version: typeof e.version < "u" ? e.version : 2,
            notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
        }, this.callServer = t
    };
var T_ = pa;
pa.prototype.request = function(t, e, n, r) {
    const i = this;
    let o = null;
    const s = Array.isArray(t) && typeof e == "function";
    if (this.options.version === 1 && s) throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (s || !s && t && typeof t == "object" && typeof e == "function") r = e, o = t;
    else {
        typeof n == "function" && (r = n, n = void 0);
        const u = typeof r == "function";
        try {
            o = I_(t, e, n, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull
            })
        } catch (h) {
            if (u) return r(h);
            throw h
        }
        if (!u) return o
    }
    let l;
    try {
        l = JSON.stringify(o, this.options.replacer)
    } catch (u) {
        return r(u)
    }
    return this.callServer(l, function(u, h) {
        i._parseResponse(u, h, r)
    }), o
};
pa.prototype._parseResponse = function(t, e, n) {
    if (t) {
        n(t);
        return
    }
    if (!e) return n();
    let r;
    try {
        r = JSON.parse(e, this.options.reviver)
    } catch (i) {
        return n(i)
    }
    if (n.length === 3)
        if (Array.isArray(r)) {
            const i = function(s) {
                    return typeof s.error < "u"
                },
                o = function(s) {
                    return !i(s)
                };
            return n(null, r.filter(i), r.filter(o))
        } else return n(null, r.error, r.result);
    n(null, r)
};
const B_ = yr(T_);
var C2 = {},
    A2 = {
        exports: {}
    };
(function(t) {
    function e(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
})(A2);
var z0 = A2.exports,
    gf = {
        exports: {}
    },
    yf = {
        exports: {}
    },
    fm;

function Pa() {
    return fm || (fm = 1, function(t) {
        function e(n) {
            "@babel/helpers - typeof";
            return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
                return typeof r
            } : function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(yf)), yf.exports
}
var dm;

function R_() {
    return dm || (dm = 1, function(t) {
        var e = Pa().default;

        function n() {
            t.exports = n = function() {
                return i
            }, t.exports.__esModule = !0, t.exports.default = t.exports;
            var r, i = {},
                o = Object.prototype,
                s = o.hasOwnProperty,
                a = Object.defineProperty || function(x, T, y) {
                    x[T] = y.value
                },
                l = typeof Symbol == "function" ? Symbol : {},
                u = l.iterator || "@@iterator",
                h = l.asyncIterator || "@@asyncIterator",
                g = l.toStringTag || "@@toStringTag";

            function w(x, T, y) {
                return Object.defineProperty(x, T, {
                    value: y,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), x[T]
            }
            try {
                w({}, "")
            } catch {
                w = function(y, f, M) {
                    return y[f] = M
                }
            }

            function C(x, T, y, f) {
                var M = T && T.prototype instanceof O ? T : O,
                    q = Object.create(M.prototype),
                    G = new L(f || []);
                return a(q, "_invoke", {
                    value: j(x, y, G)
                }), q
            }

            function B(x, T, y) {
                try {
                    return {
                        type: "normal",
                        arg: x.call(T, y)
                    }
                } catch (f) {
                    return {
                        type: "throw",
                        arg: f
                    }
                }
            }
            i.wrap = C;
            var I = "suspendedStart",
                R = "suspendedYield",
                _ = "executing",
                b = "completed",
                v = {};

            function O() {}

            function D() {}

            function N() {}
            var U = {};
            w(U, u, function() {
                return this
            });
            var z = Object.getPrototypeOf,
                Z = z && z(z(E([])));
            Z && Z !== o && s.call(Z, u) && (U = Z);
            var Q = N.prototype = O.prototype = Object.create(U);

            function X(x) {
                ["next", "throw", "return"].forEach(function(T) {
                    w(x, T, function(y) {
                        return this._invoke(T, y)
                    })
                })
            }

            function ce(x, T) {
                function y(M, q, G, Y) {
                    var ie = B(x[M], x, q);
                    if (ie.type !== "throw") {
                        var le = ie.arg,
                            ue = le.value;
                        return ue && e(ue) == "object" && s.call(ue, "__await") ? T.resolve(ue.__await).then(function(Re) {
                            y("next", Re, G, Y)
                        }, function(Re) {
                            y("throw", Re, G, Y)
                        }) : T.resolve(ue).then(function(Re) {
                            le.value = Re, G(le)
                        }, function(Re) {
                            return y("throw", Re, G, Y)
                        })
                    }
                    Y(ie.arg)
                }
                var f;
                a(this, "_invoke", {
                    value: function(q, G) {
                        function Y() {
                            return new T(function(ie, le) {
                                y(q, G, ie, le)
                            })
                        }
                        return f = f ? f.then(Y, Y) : Y()
                    }
                })
            }

            function j(x, T, y) {
                var f = I;
                return function(M, q) {
                    if (f === _) throw new Error("Generator is already running");
                    if (f === b) {
                        if (M === "throw") throw q;
                        return {
                            value: r,
                            done: !0
                        }
                    }
                    for (y.method = M, y.arg = q;;) {
                        var G = y.delegate;
                        if (G) {
                            var Y = c(G, y);
                            if (Y) {
                                if (Y === v) continue;
                                return Y
                            }
                        }
                        if (y.method === "next") y.sent = y._sent = y.arg;
                        else if (y.method === "throw") {
                            if (f === I) throw f = b, y.arg;
                            y.dispatchException(y.arg)
                        } else y.method === "return" && y.abrupt("return", y.arg);
                        f = _;
                        var ie = B(x, T, y);
                        if (ie.type === "normal") {
                            if (f = y.done ? b : R, ie.arg === v) continue;
                            return {
                                value: ie.arg,
                                done: y.done
                            }
                        }
                        ie.type === "throw" && (f = b, y.method = "throw", y.arg = ie.arg)
                    }
                }
            }

            function c(x, T) {
                var y = T.method,
                    f = x.iterator[y];
                if (f === r) return T.delegate = null, y === "throw" && x.iterator.return && (T.method = "return", T.arg = r, c(x, T), T.method === "throw") || y !== "return" && (T.method = "throw", T.arg = new TypeError("The iterator does not provide a '" + y + "' method")), v;
                var M = B(f, x.iterator, T.arg);
                if (M.type === "throw") return T.method = "throw", T.arg = M.arg, T.delegate = null, v;
                var q = M.arg;
                return q ? q.done ? (T[x.resultName] = q.value, T.next = x.nextLoc, T.method !== "return" && (T.method = "next", T.arg = r), T.delegate = null, v) : q : (T.method = "throw", T.arg = new TypeError("iterator result is not an object"), T.delegate = null, v)
            }

            function m(x) {
                var T = {
                    tryLoc: x[0]
                };
                1 in x && (T.catchLoc = x[1]), 2 in x && (T.finallyLoc = x[2], T.afterLoc = x[3]), this.tryEntries.push(T)
            }

            function S(x) {
                var T = x.completion || {};
                T.type = "normal", delete T.arg, x.completion = T
            }

            function L(x) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], x.forEach(m, this), this.reset(!0)
            }

            function E(x) {
                if (x || x === "") {
                    var T = x[u];
                    if (T) return T.call(x);
                    if (typeof x.next == "function") return x;
                    if (!isNaN(x.length)) {
                        var y = -1,
                            f = function M() {
                                for (; ++y < x.length;)
                                    if (s.call(x, y)) return M.value = x[y], M.done = !1, M;
                                return M.value = r, M.done = !0, M
                            };
                        return f.next = f
                    }
                }
                throw new TypeError(e(x) + " is not iterable")
            }
            return D.prototype = N, a(Q, "constructor", {
                value: N,
                configurable: !0
            }), a(N, "constructor", {
                value: D,
                configurable: !0
            }), D.displayName = w(N, g, "GeneratorFunction"), i.isGeneratorFunction = function(x) {
                var T = typeof x == "function" && x.constructor;
                return !!T && (T === D || (T.displayName || T.name) === "GeneratorFunction")
            }, i.mark = function(x) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(x, N) : (x.__proto__ = N, w(x, g, "GeneratorFunction")), x.prototype = Object.create(Q), x
            }, i.awrap = function(x) {
                return {
                    __await: x
                }
            }, X(ce.prototype), w(ce.prototype, h, function() {
                return this
            }), i.AsyncIterator = ce, i.async = function(x, T, y, f, M) {
                M === void 0 && (M = Promise);
                var q = new ce(C(x, T, y, f), M);
                return i.isGeneratorFunction(T) ? q : q.next().then(function(G) {
                    return G.done ? G.value : q.next()
                })
            }, X(Q), w(Q, g, "Generator"), w(Q, u, function() {
                return this
            }), w(Q, "toString", function() {
                return "[object Generator]"
            }), i.keys = function(x) {
                var T = Object(x),
                    y = [];
                for (var f in T) y.push(f);
                return y.reverse(),
                    function M() {
                        for (; y.length;) {
                            var q = y.pop();
                            if (q in T) return M.value = q, M.done = !1, M
                        }
                        return M.done = !0, M
                    }
            }, i.values = E, L.prototype = {
                constructor: L,
                reset: function(T) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(S), !T)
                        for (var y in this) y.charAt(0) === "t" && s.call(this, y) && !isNaN(+y.slice(1)) && (this[y] = r)
                },
                stop: function() {
                    this.done = !0;
                    var T = this.tryEntries[0].completion;
                    if (T.type === "throw") throw T.arg;
                    return this.rval
                },
                dispatchException: function(T) {
                    if (this.done) throw T;
                    var y = this;

                    function f(le, ue) {
                        return G.type = "throw", G.arg = T, y.next = le, ue && (y.method = "next", y.arg = r), !!ue
                    }
                    for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                        var q = this.tryEntries[M],
                            G = q.completion;
                        if (q.tryLoc === "root") return f("end");
                        if (q.tryLoc <= this.prev) {
                            var Y = s.call(q, "catchLoc"),
                                ie = s.call(q, "finallyLoc");
                            if (Y && ie) {
                                if (this.prev < q.catchLoc) return f(q.catchLoc, !0);
                                if (this.prev < q.finallyLoc) return f(q.finallyLoc)
                            } else if (Y) {
                                if (this.prev < q.catchLoc) return f(q.catchLoc, !0)
                            } else {
                                if (!ie) throw new Error("try statement without catch or finally");
                                if (this.prev < q.finallyLoc) return f(q.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(T, y) {
                    for (var f = this.tryEntries.length - 1; f >= 0; --f) {
                        var M = this.tryEntries[f];
                        if (M.tryLoc <= this.prev && s.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
                            var q = M;
                            break
                        }
                    }
                    q && (T === "break" || T === "continue") && q.tryLoc <= y && y <= q.finallyLoc && (q = null);
                    var G = q ? q.completion : {};
                    return G.type = T, G.arg = y, q ? (this.method = "next", this.next = q.finallyLoc, v) : this.complete(G)
                },
                complete: function(T, y) {
                    if (T.type === "throw") throw T.arg;
                    return T.type === "break" || T.type === "continue" ? this.next = T.arg : T.type === "return" ? (this.rval = this.arg = T.arg, this.method = "return", this.next = "end") : T.type === "normal" && y && (this.next = y), v
                },
                finish: function(T) {
                    for (var y = this.tryEntries.length - 1; y >= 0; --y) {
                        var f = this.tryEntries[y];
                        if (f.finallyLoc === T) return this.complete(f.completion, f.afterLoc), S(f), v
                    }
                },
                catch: function(T) {
                    for (var y = this.tryEntries.length - 1; y >= 0; --y) {
                        var f = this.tryEntries[y];
                        if (f.tryLoc === T) {
                            var M = f.completion;
                            if (M.type === "throw") {
                                var q = M.arg;
                                S(f)
                            }
                            return q
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(T, y, f) {
                    return this.delegate = {
                        iterator: E(T),
                        resultName: y,
                        nextLoc: f
                    }, this.method === "next" && (this.arg = r), v
                }
            }, i
        }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    }(gf)), gf.exports
}
var vf, hm;

function M_() {
    if (hm) return vf;
    hm = 1;
    var t = R_()();
    vf = t;
    try {
        regeneratorRuntime = t
    } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
    }
    return vf
}
var wf = {
        exports: {}
    },
    pm;

function L_() {
    return pm || (pm = 1, function(t) {
        function e(r, i, o, s, a, l, u) {
            try {
                var h = r[l](u),
                    g = h.value
            } catch (w) {
                o(w);
                return
            }
            h.done ? i(g) : Promise.resolve(g).then(s, a)
        }

        function n(r) {
            return function() {
                var i = this,
                    o = arguments;
                return new Promise(function(s, a) {
                    var l = r.apply(i, o);

                    function u(g) {
                        e(l, s, a, u, h, "next", g)
                    }

                    function h(g) {
                        e(l, s, a, u, h, "throw", g)
                    }
                    u(void 0)
                })
            }
        }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    }(wf)), wf.exports
}
var xf = {
        exports: {}
    },
    mm;

function F0() {
    return mm || (mm = 1, function(t) {
        function e(n, r) {
            if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function")
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(xf)), xf.exports
}
var Ef = {
        exports: {}
    },
    Sf = {
        exports: {}
    },
    bf = {
        exports: {}
    },
    gm;

function N_() {
    return gm || (gm = 1, function(t) {
        var e = Pa().default;

        function n(r, i) {
            if (e(r) != "object" || !r) return r;
            var o = r[Symbol.toPrimitive];
            if (o !== void 0) {
                var s = o.call(r, i || "default");
                if (e(s) != "object") return s;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (i === "string" ? String : Number)(r)
        }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    }(bf)), bf.exports
}
var ym;

function O_() {
    return ym || (ym = 1, function(t) {
        var e = Pa().default,
            n = N_();

        function r(i) {
            var o = n(i, "string");
            return e(o) == "symbol" ? o : String(o)
        }
        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Sf)), Sf.exports
}
var vm;

function W0() {
    return vm || (vm = 1, function(t) {
        var e = O_();

        function n(i, o) {
            for (var s = 0; s < o.length; s++) {
                var a = o[s];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(i, e(a.key), a)
            }
        }

        function r(i, o, s) {
            return o && n(i.prototype, o), s && n(i, s), Object.defineProperty(i, "prototype", {
                writable: !1
            }), i
        }
        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Ef)), Ef.exports
}
var _f = {
        exports: {}
    },
    kf = {
        exports: {}
    },
    wm;

function P_() {
    return wm || (wm = 1, function(t) {
        function e(n, r) {
            return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
                return o.__proto__ = s, o
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n, r)
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(kf)), kf.exports
}
var xm;

function I2() {
    return xm || (xm = 1, function(t) {
        var e = P_();

        function n(r, i) {
            if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
            r.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: r,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(r, "prototype", {
                writable: !1
            }), i && e(r, i)
        }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    }(_f)), _f.exports
}
var Cf = {
        exports: {}
    },
    Af = {
        exports: {}
    },
    Em;

function j_() {
    return Em || (Em = 1, function(t) {
        function e(n) {
            if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Af)), Af.exports
}
var Sm;

function T2() {
    return Sm || (Sm = 1, function(t) {
        var e = Pa().default,
            n = j_();

        function r(i, o) {
            if (o && (e(o) === "object" || typeof o == "function")) return o;
            if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return n(i)
        }
        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    }(Cf)), Cf.exports
}
var If = {
        exports: {}
    },
    bm;

function B2() {
    return bm || (bm = 1, function(t) {
        function e(n) {
            return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
                return i.__proto__ || Object.getPrototypeOf(i)
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    }(If)), If.exports
}
var Tf = {
        exports: {}
    },
    _m;

function H0() {
    return _m || (_m = 1, function(t) {
        var e = Object.prototype.hasOwnProperty,
            n = "~";

        function r() {}
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));

        function i(l, u, h) {
            this.fn = l, this.context = u, this.once = h || !1
        }

        function o(l, u, h, g, w) {
            if (typeof h != "function") throw new TypeError("The listener must be a function");
            var C = new i(h, g || l, w),
                B = n ? n + u : u;
            return l._events[B] ? l._events[B].fn ? l._events[B] = [l._events[B], C] : l._events[B].push(C) : (l._events[B] = C, l._eventsCount++), l
        }

        function s(l, u) {
            --l._eventsCount === 0 ? l._events = new r : delete l._events[u]
        }

        function a() {
            this._events = new r, this._eventsCount = 0
        }
        a.prototype.eventNames = function() {
            var u = [],
                h, g;
            if (this._eventsCount === 0) return u;
            for (g in h = this._events) e.call(h, g) && u.push(n ? g.slice(1) : g);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(h)) : u
        }, a.prototype.listeners = function(u) {
            var h = n ? n + u : u,
                g = this._events[h];
            if (!g) return [];
            if (g.fn) return [g.fn];
            for (var w = 0, C = g.length, B = new Array(C); w < C; w++) B[w] = g[w].fn;
            return B
        }, a.prototype.listenerCount = function(u) {
            var h = n ? n + u : u,
                g = this._events[h];
            return g ? g.fn ? 1 : g.length : 0
        }, a.prototype.emit = function(u, h, g, w, C, B) {
            var I = n ? n + u : u;
            if (!this._events[I]) return !1;
            var R = this._events[I],
                _ = arguments.length,
                b, v;
            if (R.fn) {
                switch (R.once && this.removeListener(u, R.fn, void 0, !0), _) {
                    case 1:
                        return R.fn.call(R.context), !0;
                    case 2:
                        return R.fn.call(R.context, h), !0;
                    case 3:
                        return R.fn.call(R.context, h, g), !0;
                    case 4:
                        return R.fn.call(R.context, h, g, w), !0;
                    case 5:
                        return R.fn.call(R.context, h, g, w, C), !0;
                    case 6:
                        return R.fn.call(R.context, h, g, w, C, B), !0
                }
                for (v = 1, b = new Array(_ - 1); v < _; v++) b[v - 1] = arguments[v];
                R.fn.apply(R.context, b)
            } else {
                var O = R.length,
                    D;
                for (v = 0; v < O; v++) switch (R[v].once && this.removeListener(u, R[v].fn, void 0, !0), _) {
                    case 1:
                        R[v].fn.call(R[v].context);
                        break;
                    case 2:
                        R[v].fn.call(R[v].context, h);
                        break;
                    case 3:
                        R[v].fn.call(R[v].context, h, g);
                        break;
                    case 4:
                        R[v].fn.call(R[v].context, h, g, w);
                        break;
                    default:
                        if (!b)
                            for (D = 1, b = new Array(_ - 1); D < _; D++) b[D - 1] = arguments[D];
                        R[v].fn.apply(R[v].context, b)
                }
            }
            return !0
        }, a.prototype.on = function(u, h, g) {
            return o(this, u, h, g, !1)
        }, a.prototype.once = function(u, h, g) {
            return o(this, u, h, g, !0)
        }, a.prototype.removeListener = function(u, h, g, w) {
            var C = n ? n + u : u;
            if (!this._events[C]) return this;
            if (!h) return s(this, C), this;
            var B = this._events[C];
            if (B.fn) B.fn === h && (!w || B.once) && (!g || B.context === g) && s(this, C);
            else {
                for (var I = 0, R = [], _ = B.length; I < _; I++)(B[I].fn !== h || w && !B[I].once || g && B[I].context !== g) && R.push(B[I]);
                R.length ? this._events[C] = R.length === 1 ? R[0] : R : s(this, C)
            }
            return this
        }, a.prototype.removeAllListeners = function(u) {
            var h;
            return u ? (h = n ? n + u : u, this._events[h] && s(this, h)) : (this._events = new r, this._eventsCount = 0), this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, t.exports = a
    }(Tf)), Tf.exports
}
var So = {},
    km;

function D_() {
    if (km) return So;
    km = 1;
    var t = z0;
    Object.defineProperty(So, "__esModule", {
        value: !0
    }), So.DefaultDataPack = void 0, So.createError = o;
    var e = t(F0()),
        n = t(W0()),
        r = new Map([
            [-32e3, "Event not provided"],
            [-32600, "Invalid Request"],
            [-32601, "Method not found"],
            [-32602, "Invalid params"],
            [-32603, "Internal error"],
            [-32604, "Params not found"],
            [-32605, "Method forbidden"],
            [-32606, "Event forbidden"],
            [-32700, "Parse error"]
        ]),
        i = function() {
            function s() {
                (0, e.default)(this, s)
            }
            return (0, n.default)(s, [{
                key: "encode",
                value: function(l) {
                    return JSON.stringify(l)
                }
            }, {
                key: "decode",
                value: function(l) {
                    return JSON.parse(l)
                }
            }]), s
        }();
    So.DefaultDataPack = i;

    function o(s, a) {
        var l = {
            code: s,
            message: r.get(s) || "Internal Server Error"
        };
        return a && (l.data = a), l
    }
    return So
}(function(t) {
    var e = z0;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = e(M_()),
        r = e(L_()),
        i = e(Pa()),
        o = e(F0()),
        s = e(W0()),
        a = e(I2()),
        l = e(T2()),
        u = e(B2()),
        h = H0(),
        g = D_();

    function w(R) {
        var _ = C();
        return function() {
            var v = (0, u.default)(R),
                O;
            if (_) {
                var D = (0, u.default)(this).constructor;
                O = Reflect.construct(v, arguments, D)
            } else O = v.apply(this, arguments);
            return (0, l.default)(this, O)
        }
    }

    function C() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var B = function(R, _) {
            var b = {};
            for (var v in R) Object.prototype.hasOwnProperty.call(R, v) && _.indexOf(v) < 0 && (b[v] = R[v]);
            if (R != null && typeof Object.getOwnPropertySymbols == "function")
                for (var O = 0, v = Object.getOwnPropertySymbols(R); O < v.length; O++) _.indexOf(v[O]) < 0 && Object.prototype.propertyIsEnumerable.call(R, v[O]) && (b[v[O]] = R[v[O]]);
            return b
        },
        I = function(R) {
            (0, a.default)(b, R);
            var _ = w(b);

            function b(v) {
                var O, D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080",
                    N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    U = arguments.length > 3 ? arguments[3] : void 0,
                    z = arguments.length > 4 ? arguments[4] : void 0;
                (0, o.default)(this, b);
                var Z = N.autoconnect,
                    Q = Z === void 0 ? !0 : Z,
                    X = N.reconnect,
                    ce = X === void 0 ? !0 : X,
                    j = N.reconnect_interval,
                    c = j === void 0 ? 1e3 : j,
                    m = N.max_reconnects,
                    S = m === void 0 ? 5 : m,
                    L = B(N, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                return O = _.call(this), O.webSocketFactory = v, O.queue = {}, O.rpc_id = 0, O.address = D, O.autoconnect = Q, O.ready = !1, O.reconnect = ce, O.reconnect_timer_id = void 0, O.reconnect_interval = c, O.max_reconnects = S, O.rest_options = L, O.current_reconnects = 0, O.generate_request_id = U || function() {
                    return ++O.rpc_id
                }, z ? O.dataPack = z : O.dataPack = new g.DefaultDataPack, O.autoconnect && O._connect(O.address, Object.assign({
                    autoconnect: O.autoconnect,
                    reconnect: O.reconnect,
                    reconnect_interval: O.reconnect_interval,
                    max_reconnects: O.max_reconnects
                }, O.rest_options)), O
            }
            return (0, s.default)(b, [{
                key: "connect",
                value: function() {
                    this.socket || this._connect(this.address, Object.assign({
                        autoconnect: this.autoconnect,
                        reconnect: this.reconnect,
                        reconnect_interval: this.reconnect_interval,
                        max_reconnects: this.max_reconnects
                    }, this.rest_options))
                }
            }, {
                key: "call",
                value: function(O, D, N, U) {
                    var z = this;
                    return !U && (0, i.default)(N) === "object" && (U = N, N = null), new Promise(function(Z, Q) {
                        if (!z.ready) return Q(new Error("socket not ready"));
                        var X = z.generate_request_id(O, D),
                            ce = {
                                jsonrpc: "2.0",
                                method: O,
                                params: D || void 0,
                                id: X
                            };
                        z.socket.send(z.dataPack.encode(ce), U, function(j) {
                            if (j) return Q(j);
                            z.queue[X] = {
                                promise: [Z, Q]
                            }, N && (z.queue[X].timeout = setTimeout(function() {
                                delete z.queue[X], Q(new Error("reply timeout"))
                            }, N))
                        })
                    })
                }
            }, {
                key: "login",
                value: function() {
                    var v = (0, r.default)(n.default.mark(function D(N) {
                        var U;
                        return n.default.wrap(function(Z) {
                            for (;;) switch (Z.prev = Z.next) {
                                case 0:
                                    return Z.next = 2, this.call("rpc.login", N);
                                case 2:
                                    if (U = Z.sent, U) {
                                        Z.next = 5;
                                        break
                                    }
                                    throw new Error("authentication failed");
                                case 5:
                                    return Z.abrupt("return", U);
                                case 6:
                                case "end":
                                    return Z.stop()
                            }
                        }, D, this)
                    }));

                    function O(D) {
                        return v.apply(this, arguments)
                    }
                    return O
                }()
            }, {
                key: "listMethods",
                value: function() {
                    var v = (0, r.default)(n.default.mark(function D() {
                        return n.default.wrap(function(U) {
                            for (;;) switch (U.prev = U.next) {
                                case 0:
                                    return U.next = 2, this.call("__listMethods");
                                case 2:
                                    return U.abrupt("return", U.sent);
                                case 3:
                                case "end":
                                    return U.stop()
                            }
                        }, D, this)
                    }));

                    function O() {
                        return v.apply(this, arguments)
                    }
                    return O
                }()
            }, {
                key: "notify",
                value: function(O, D) {
                    var N = this;
                    return new Promise(function(U, z) {
                        if (!N.ready) return z(new Error("socket not ready"));
                        var Z = {
                            jsonrpc: "2.0",
                            method: O,
                            params: D
                        };
                        N.socket.send(N.dataPack.encode(Z), function(Q) {
                            if (Q) return z(Q);
                            U()
                        })
                    })
                }
            }, {
                key: "subscribe",
                value: function() {
                    var v = (0, r.default)(n.default.mark(function D(N) {
                        var U;
                        return n.default.wrap(function(Z) {
                            for (;;) switch (Z.prev = Z.next) {
                                case 0:
                                    return typeof N == "string" && (N = [N]), Z.next = 3, this.call("rpc.on", N);
                                case 3:
                                    if (U = Z.sent, !(typeof N == "string" && U[N] !== "ok")) {
                                        Z.next = 6;
                                        break
                                    }
                                    throw new Error("Failed subscribing to an event '" + N + "' with: " + U[N]);
                                case 6:
                                    return Z.abrupt("return", U);
                                case 7:
                                case "end":
                                    return Z.stop()
                            }
                        }, D, this)
                    }));

                    function O(D) {
                        return v.apply(this, arguments)
                    }
                    return O
                }()
            }, {
                key: "unsubscribe",
                value: function() {
                    var v = (0, r.default)(n.default.mark(function D(N) {
                        var U;
                        return n.default.wrap(function(Z) {
                            for (;;) switch (Z.prev = Z.next) {
                                case 0:
                                    return typeof N == "string" && (N = [N]), Z.next = 3, this.call("rpc.off", N);
                                case 3:
                                    if (U = Z.sent, !(typeof N == "string" && U[N] !== "ok")) {
                                        Z.next = 6;
                                        break
                                    }
                                    throw new Error("Failed unsubscribing from an event with: " + U);
                                case 6:
                                    return Z.abrupt("return", U);
                                case 7:
                                case "end":
                                    return Z.stop()
                            }
                        }, D, this)
                    }));

                    function O(D) {
                        return v.apply(this, arguments)
                    }
                    return O
                }()
            }, {
                key: "close",
                value: function(O, D) {
                    this.socket.close(O || 1e3, D)
                }
            }, {
                key: "_connect",
                value: function(O, D) {
                    var N = this;
                    clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(O, D), this.socket.addEventListener("open", function() {
                        N.ready = !0, N.emit("open"), N.current_reconnects = 0
                    }), this.socket.addEventListener("message", function(U) {
                        var z = U.data;
                        z instanceof ArrayBuffer && (z = Buffer.from(z).toString());
                        try {
                            z = N.dataPack.decode(z)
                        } catch {
                            return
                        }
                        if (z.notification && N.listeners(z.notification).length) {
                            if (!Object.keys(z.params).length) return N.emit(z.notification);
                            var Z = [z.notification];
                            if (z.params.constructor === Object) Z.push(z.params);
                            else
                                for (var Q = 0; Q < z.params.length; Q++) Z.push(z.params[Q]);
                            return Promise.resolve().then(function() {
                                N.emit.apply(N, Z)
                            })
                        }
                        if (!N.queue[z.id]) return z.method ? Promise.resolve().then(function() {
                            N.emit(z.method, z == null ? void 0 : z.params)
                        }) : void 0;
                        "error" in z == "result" in z && N.queue[z.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), N.queue[z.id].timeout && clearTimeout(N.queue[z.id].timeout), z.error ? N.queue[z.id].promise[1](z.error) : N.queue[z.id].promise[0](z.result), delete N.queue[z.id]
                    }), this.socket.addEventListener("error", function(U) {
                        return N.emit("error", U)
                    }), this.socket.addEventListener("close", function(U) {
                        var z = U.code,
                            Z = U.reason;
                        N.ready && setTimeout(function() {
                            return N.emit("close", z, Z)
                        }, 0), N.ready = !1, N.socket = void 0, z !== 1e3 && (N.current_reconnects++, N.reconnect && (N.max_reconnects > N.current_reconnects || N.max_reconnects === 0) && (N.reconnect_timer_id = setTimeout(function() {
                            return N._connect(O, D)
                        }, N.reconnect_interval)))
                    })
                }
            }]), b
        }(h.EventEmitter);
    t.default = I
})(C2);
const U_ = yr(C2);
var R2 = {};
(function(t) {
    var e = z0;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = g;
    var n = e(F0()),
        r = e(W0()),
        i = e(I2()),
        o = e(T2()),
        s = e(B2()),
        a = H0();

    function l(w) {
        var C = u();
        return function() {
            var I = (0, s.default)(w),
                R;
            if (C) {
                var _ = (0, s.default)(this).constructor;
                R = Reflect.construct(I, arguments, _)
            } else R = I.apply(this, arguments);
            return (0, o.default)(this, R)
        }
    }

    function u() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var h = function(w) {
        (0, i.default)(B, w);
        var C = l(B);

        function B(I, R, _) {
            var b;
            return (0, n.default)(this, B), b = C.call(this), b.socket = new window.WebSocket(I, _), b.socket.onopen = function() {
                return b.emit("open")
            }, b.socket.onmessage = function(v) {
                return b.emit("message", v.data)
            }, b.socket.onerror = function(v) {
                return b.emit("error", v)
            }, b.socket.onclose = function(v) {
                b.emit("close", v.code, v.reason)
            }, b
        }
        return (0, r.default)(B, [{
            key: "send",
            value: function(R, _, b) {
                var v = b || _;
                try {
                    this.socket.send(R), v()
                } catch (O) {
                    v(O)
                }
            }
        }, {
            key: "close",
            value: function(R, _) {
                this.socket.close(R, _)
            }
        }, {
            key: "addEventListener",
            value: function(R, _, b) {
                this.socket.addEventListener(R, _, b)
            }
        }]), B
    }(a.EventEmitter);

    function g(w, C) {
        return new h(w, C)
    }
})(R2);
const z_ = yr(R2); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function F_(t) {
    const e = S0(t);
    ps(e, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    const {
        endo: n,
        Fp: r,
        a: i
    } = e;
    if (n) {
        if (!r.eql(i, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
    }
    return Object.freeze({
        ...e
    })
}
const {
    bytesToNumberBE: W_,
    hexToBytes: H_
} = HS, Vi = {
    Err: class extends Error {
        constructor(e = "") {
            super(e)
        }
    },
    _parseInt(t) {
        const {
            Err: e
        } = Vi;
        if (t.length < 2 || t[0] !== 2) throw new e("Invalid signature integer tag");
        const n = t[1],
            r = t.subarray(2, n + 2);
        if (!n || r.length !== n) throw new e("Invalid signature integer: wrong length");
        if (r[0] & 128) throw new e("Invalid signature integer: negative");
        if (r[0] === 0 && !(r[1] & 128)) throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: W_(r),
            l: t.subarray(n + 2)
        }
    },
    toSig(t) {
        const {
            Err: e
        } = Vi, n = typeof t == "string" ? H_(t) : t;
        if (!Ir(n)) throw new Error("ui8a expected");
        let r = n.length;
        if (r < 2 || n[0] != 48) throw new e("Invalid signature tag");
        if (n[1] !== r - 2) throw new e("Invalid signature: incorrect length");
        const {
            d: i,
            l: o
        } = Vi._parseInt(n.subarray(2)), {
            d: s,
            l: a
        } = Vi._parseInt(o);
        if (a.length) throw new e("Invalid signature: left bytes after parsing");
        return {
            r: i,
            s
        }
    },
    hexFromSig(t) {
        const e = u => Number.parseInt(u[0], 16) & 8 ? "00" + u : u,
            n = u => {
                const h = u.toString(16);
                return h.length & 1 ? `0${h}` : h
            },
            r = e(n(t.s)),
            i = e(n(t.r)),
            o = r.length / 2,
            s = i.length / 2,
            a = n(o),
            l = n(s);
        return `30${n(s+o+4)}02${l}${i}02${a}${r}`
    }
}, Ur = BigInt(0), Gn = BigInt(1);
BigInt(2);
const Cm = BigInt(3);
BigInt(4);

function $_(t) {
    const e = F_(t),
        {
            Fp: n
        } = e,
        r = e.toBytes || ((B, I, R) => {
            const _ = I.toAffine();
            return uo(Uint8Array.from([4]), n.toBytes(_.x), n.toBytes(_.y))
        }),
        i = e.fromBytes || (B => {
            const I = B.subarray(1),
                R = n.fromBytes(I.subarray(0, n.BYTES)),
                _ = n.fromBytes(I.subarray(n.BYTES, 2 * n.BYTES));
            return {
                x: R,
                y: _
            }
        });

    function o(B) {
        const {
            a: I,
            b: R
        } = e, _ = n.sqr(B), b = n.mul(_, B);
        return n.add(n.add(b, n.mul(B, I)), R)
    }
    if (!n.eql(n.sqr(e.Gy), o(e.Gx))) throw new Error("bad generator point: equation left != right");

    function s(B) {
        return typeof B == "bigint" && Ur < B && B < e.n
    }

    function a(B) {
        if (!s(B)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }

    function l(B) {
        const {
            allowedPrivateKeyLengths: I,
            nByteLength: R,
            wrapPrivateKey: _,
            n: b
        } = e;
        if (I && typeof B != "bigint") {
            if (Ir(B) && (B = lo(B)), typeof B != "string" || !I.includes(B.length)) throw new Error("Invalid key");
            B = B.padStart(R * 2, "0")
        }
        let v;
        try {
            v = typeof B == "bigint" ? B : eo(Dt("private key", B, R))
        } catch {
            throw new Error(`private key must be ${R} bytes, hex or bigint, not ${typeof B}`)
        }
        return _ && (v = nt(v, b)), a(v), v
    }
    const u = new Map;

    function h(B) {
        if (!(B instanceof g)) throw new Error("ProjectivePoint expected")
    }
    class g {
        constructor(I, R, _) {
            if (this.px = I, this.py = R, this.pz = _, I == null || !n.isValid(I)) throw new Error("x required");
            if (R == null || !n.isValid(R)) throw new Error("y required");
            if (_ == null || !n.isValid(_)) throw new Error("z required")
        }
        static fromAffine(I) {
            const {
                x: R,
                y: _
            } = I || {};
            if (!I || !n.isValid(R) || !n.isValid(_)) throw new Error("invalid affine point");
            if (I instanceof g) throw new Error("projective point not allowed");
            const b = v => n.eql(v, n.ZERO);
            return b(R) && b(_) ? g.ZERO : new g(R, _, n.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(I) {
            const R = n.invertBatch(I.map(_ => _.pz));
            return I.map((_, b) => _.toAffine(R[b])).map(g.fromAffine)
        }
        static fromHex(I) {
            const R = g.fromAffine(i(Dt("pointHex", I)));
            return R.assertValidity(), R
        }
        static fromPrivateKey(I) {
            return g.BASE.multiply(l(I))
        }
        _setWindowSize(I) {
            this._WINDOW_SIZE = I, u.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint && !n.is0(this.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x: I,
                y: R
            } = this.toAffine();
            if (!n.isValid(I) || !n.isValid(R)) throw new Error("bad point: x or y not FE");
            const _ = n.sqr(R),
                b = o(I);
            if (!n.eql(_, b)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {
                y: I
            } = this.toAffine();
            if (n.isOdd) return !n.isOdd(I);
            throw new Error("Field doesn't support isOdd")
        }
        equals(I) {
            h(I);
            const {
                px: R,
                py: _,
                pz: b
            } = this, {
                px: v,
                py: O,
                pz: D
            } = I, N = n.eql(n.mul(R, D), n.mul(v, b)), U = n.eql(n.mul(_, D), n.mul(O, b));
            return N && U
        }
        negate() {
            return new g(this.px, n.neg(this.py), this.pz)
        }
        double() {
            const {
                a: I,
                b: R
            } = e, _ = n.mul(R, Cm), {
                px: b,
                py: v,
                pz: O
            } = this;
            let D = n.ZERO,
                N = n.ZERO,
                U = n.ZERO,
                z = n.mul(b, b),
                Z = n.mul(v, v),
                Q = n.mul(O, O),
                X = n.mul(b, v);
            return X = n.add(X, X), U = n.mul(b, O), U = n.add(U, U), D = n.mul(I, U), N = n.mul(_, Q), N = n.add(D, N), D = n.sub(Z, N), N = n.add(Z, N), N = n.mul(D, N), D = n.mul(X, D), U = n.mul(_, U), Q = n.mul(I, Q), X = n.sub(z, Q), X = n.mul(I, X), X = n.add(X, U), U = n.add(z, z), z = n.add(U, z), z = n.add(z, Q), z = n.mul(z, X), N = n.add(N, z), Q = n.mul(v, O), Q = n.add(Q, Q), z = n.mul(Q, X), D = n.sub(D, z), U = n.mul(Q, Z), U = n.add(U, U), U = n.add(U, U), new g(D, N, U)
        }
        add(I) {
            h(I);
            const {
                px: R,
                py: _,
                pz: b
            } = this, {
                px: v,
                py: O,
                pz: D
            } = I;
            let N = n.ZERO,
                U = n.ZERO,
                z = n.ZERO;
            const Z = e.a,
                Q = n.mul(e.b, Cm);
            let X = n.mul(R, v),
                ce = n.mul(_, O),
                j = n.mul(b, D),
                c = n.add(R, _),
                m = n.add(v, O);
            c = n.mul(c, m), m = n.add(X, ce), c = n.sub(c, m), m = n.add(R, b);
            let S = n.add(v, D);
            return m = n.mul(m, S), S = n.add(X, j), m = n.sub(m, S), S = n.add(_, b), N = n.add(O, D), S = n.mul(S, N), N = n.add(ce, j), S = n.sub(S, N), z = n.mul(Z, m), N = n.mul(Q, j), z = n.add(N, z), N = n.sub(ce, z), z = n.add(ce, z), U = n.mul(N, z), ce = n.add(X, X), ce = n.add(ce, X), j = n.mul(Z, j), m = n.mul(Q, m), ce = n.add(ce, j), j = n.sub(X, j), j = n.mul(Z, j), m = n.add(m, j), X = n.mul(ce, m), U = n.add(U, X), X = n.mul(S, m), N = n.mul(c, N), N = n.sub(N, X), X = n.mul(c, ce), z = n.mul(S, z), z = n.add(z, X), new g(N, U, z)
        }
        subtract(I) {
            return this.add(I.negate())
        }
        is0() {
            return this.equals(g.ZERO)
        }
        wNAF(I) {
            return C.wNAFCached(this, u, I, R => {
                const _ = n.invertBatch(R.map(b => b.pz));
                return R.map((b, v) => b.toAffine(_[v])).map(g.fromAffine)
            })
        }
        multiplyUnsafe(I) {
            const R = g.ZERO;
            if (I === Ur) return R;
            if (a(I), I === Gn) return this;
            const {
                endo: _
            } = e;
            if (!_) return C.unsafeLadder(this, I);
            let {
                k1neg: b,
                k1: v,
                k2neg: O,
                k2: D
            } = _.splitScalar(I), N = R, U = R, z = this;
            for (; v > Ur || D > Ur;) v & Gn && (N = N.add(z)), D & Gn && (U = U.add(z)), z = z.double(), v >>= Gn, D >>= Gn;
            return b && (N = N.negate()), O && (U = U.negate()), U = new g(n.mul(U.px, _.beta), U.py, U.pz), N.add(U)
        }
        multiply(I) {
            a(I);
            let R = I,
                _, b;
            const {
                endo: v
            } = e;
            if (v) {
                const {
                    k1neg: O,
                    k1: D,
                    k2neg: N,
                    k2: U
                } = v.splitScalar(R);
                let {
                    p: z,
                    f: Z
                } = this.wNAF(D), {
                    p: Q,
                    f: X
                } = this.wNAF(U);
                z = C.constTimeNegate(O, z), Q = C.constTimeNegate(N, Q), Q = new g(n.mul(Q.px, v.beta), Q.py, Q.pz), _ = z.add(Q), b = Z.add(X)
            } else {
                const {
                    p: O,
                    f: D
                } = this.wNAF(R);
                _ = O, b = D
            }
            return g.normalizeZ([_, b])[0]
        }
        multiplyAndAddUnsafe(I, R, _) {
            const b = g.BASE,
                v = (D, N) => N === Ur || N === Gn || !D.equals(b) ? D.multiplyUnsafe(N) : D.multiply(N),
                O = v(this, R).add(v(I, _));
            return O.is0() ? void 0 : O
        }
        toAffine(I) {
            const {
                px: R,
                py: _,
                pz: b
            } = this, v = this.is0();
            I == null && (I = v ? n.ONE : n.inv(b));
            const O = n.mul(R, I),
                D = n.mul(_, I),
                N = n.mul(b, I);
            if (v) return {
                x: n.ZERO,
                y: n.ZERO
            };
            if (!n.eql(N, n.ONE)) throw new Error("invZ was invalid");
            return {
                x: O,
                y: D
            }
        }
        isTorsionFree() {
            const {
                h: I,
                isTorsionFree: R
            } = e;
            if (I === Gn) return !0;
            if (R) return R(g, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {
                h: I,
                clearCofactor: R
            } = e;
            return I === Gn ? this : R ? R(g, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(I = !0) {
            return this.assertValidity(), r(g, this, I)
        }
        toHex(I = !0) {
            return lo(this.toRawBytes(I))
        }
    }
    g.BASE = new g(e.Gx, e.Gy, n.ONE), g.ZERO = new g(n.ZERO, n.ONE, n.ZERO);
    const w = e.nBitLength,
        C = $w(g, e.endo ? Math.ceil(w / 2) : w);
    return {
        CURVE: e,
        ProjectivePoint: g,
        normPrivateKeyToScalar: l,
        weierstrassEquation: o,
        isWithinCurveOrder: s
    }
}

function K_(t) {
    const e = S0(t);
    return ps(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze({
        lowS: !0,
        ...e
    })
}

function q_(t) {
    const e = K_(t),
        {
            Fp: n,
            n: r
        } = e,
        i = n.BYTES + 1,
        o = 2 * n.BYTES + 1;

    function s(m) {
        return Ur < m && m < n.ORDER
    }

    function a(m) {
        return nt(m, r)
    }

    function l(m) {
        return qd(m, r)
    }
    const {
        ProjectivePoint: u,
        normPrivateKeyToScalar: h,
        weierstrassEquation: g,
        isWithinCurveOrder: w
    } = $_({
        ...e,
        toBytes(m, S, L) {
            const E = S.toAffine(),
                x = n.toBytes(E.x),
                T = uo;
            return L ? T(Uint8Array.from([S.hasEvenY() ? 2 : 3]), x) : T(Uint8Array.from([4]), x, n.toBytes(E.y))
        },
        fromBytes(m) {
            const S = m.length,
                L = m[0],
                E = m.subarray(1);
            if (S === i && (L === 2 || L === 3)) {
                const x = eo(E);
                if (!s(x)) throw new Error("Point is not on curve");
                const T = g(x);
                let y = n.sqrt(T);
                const f = (y & Gn) === Gn;
                return (L & 1) === 1 !== f && (y = n.neg(y)), {
                    x,
                    y
                }
            } else if (S === o && L === 4) {
                const x = n.fromBytes(E.subarray(0, n.BYTES)),
                    T = n.fromBytes(E.subarray(n.BYTES, 2 * n.BYTES));
                return {
                    x,
                    y: T
                }
            } else throw new Error(`Point of length ${S} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
        }
    }), C = m => lo(os(m, e.nByteLength));

    function B(m) {
        const S = r >> Gn;
        return m > S
    }

    function I(m) {
        return B(m) ? a(-m) : m
    }
    const R = (m, S, L) => eo(m.slice(S, L));
    class _ {
        constructor(S, L, E) {
            this.r = S, this.s = L, this.recovery = E, this.assertValidity()
        }
        static fromCompact(S) {
            const L = e.nByteLength;
            return S = Dt("compactSignature", S, L * 2), new _(R(S, 0, L), R(S, L, 2 * L))
        }
        static fromDER(S) {
            const {
                r: L,
                s: E
            } = Vi.toSig(Dt("DER", S));
            return new _(L, E)
        }
        assertValidity() {
            if (!w(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!w(this.s)) throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(S) {
            return new _(this.r, this.s, S)
        }
        recoverPublicKey(S) {
            const {
                r: L,
                s: E,
                recovery: x
            } = this, T = U(Dt("msgHash", S));
            if (x == null || ![0, 1, 2, 3].includes(x)) throw new Error("recovery id invalid");
            const y = x === 2 || x === 3 ? L + e.n : L;
            if (y >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const f = x & 1 ? "03" : "02",
                M = u.fromHex(f + C(y)),
                q = l(y),
                G = a(-T * q),
                Y = a(E * q),
                ie = u.BASE.multiplyAndAddUnsafe(M, G, Y);
            if (!ie) throw new Error("point at infinify");
            return ie.assertValidity(), ie
        }
        hasHighS() {
            return B(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new _(this.r, a(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return is(this.toDERHex())
        }
        toDERHex() {
            return Vi.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return is(this.toCompactHex())
        }
        toCompactHex() {
            return C(this.r) + C(this.s)
        }
    }
    const b = {
        isValidPrivateKey(m) {
            try {
                return h(m), !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: h,
        randomPrivateKey: () => {
            const m = Hw(e.n);
            return eb(e.randomBytes(m), e.n)
        },
        precompute(m = 8, S = u.BASE) {
            return S._setWindowSize(m), S.multiply(BigInt(3)), S
        }
    };

    function v(m, S = !0) {
        return u.fromPrivateKey(m).toRawBytes(S)
    }

    function O(m) {
        const S = Ir(m),
            L = typeof m == "string",
            E = (S || L) && m.length;
        return S ? E === i || E === o : L ? E === 2 * i || E === 2 * o : m instanceof u
    }

    function D(m, S, L = !0) {
        if (O(m)) throw new Error("first arg must be private key");
        if (!O(S)) throw new Error("second arg must be public key");
        return u.fromHex(S).multiply(h(m)).toRawBytes(L)
    }
    const N = e.bits2int || function(m) {
            const S = eo(m),
                L = m.length * 8 - e.nBitLength;
            return L > 0 ? S >> BigInt(L) : S
        },
        U = e.bits2int_modN || function(m) {
            return a(N(m))
        },
        z = E0(e.nBitLength);

    function Z(m) {
        if (typeof m != "bigint") throw new Error("bigint expected");
        if (!(Ur <= m && m < z)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
        return os(m, e.nByteLength)
    }

    function Q(m, S, L = X) {
        if (["recovered", "canonical"].some(ue => ue in L)) throw new Error("sign() legacy options not supported");
        const {
            hash: E,
            randomBytes: x
        } = e;
        let {
            lowS: T,
            prehash: y,
            extraEntropy: f
        } = L;
        T == null && (T = !0), m = Dt("msgHash", m), y && (m = Dt("prehashed msgHash", E(m)));
        const M = U(m),
            q = h(S),
            G = [Z(q), Z(M)];
        if (f != null) {
            const ue = f === !0 ? x(n.BYTES) : f;
            G.push(Dt("extraEntropy", ue))
        }
        const Y = uo(...G),
            ie = M;

        function le(ue) {
            const Re = N(ue);
            if (!w(Re)) return;
            const be = l(Re),
                _e = u.BASE.multiply(Re).toAffine(),
                Me = a(_e.x);
            if (Me === Ur) return;
            const Ee = a(be * a(ie + Me * q));
            if (Ee === Ur) return;
            let me = (_e.x === Me ? 0 : 2) | Number(_e.y & Gn),
                Rn = Ee;
            return T && B(Ee) && (Rn = I(Ee), me ^= 1), new _(Me, Rn, me)
        }
        return {
            seed: Y,
            k2sig: le
        }
    }
    const X = {
            lowS: e.lowS,
            prehash: !1
        },
        ce = {
            lowS: e.lowS,
            prehash: !1
        };

    function j(m, S, L = X) {
        const {
            seed: E,
            k2sig: x
        } = Q(m, S, L), T = e;
        return Uw(T.hash.outputLen, T.nByteLength, T.hmac)(E, x)
    }
    u.BASE._setWindowSize(8);

    function c(m, S, L, E = ce) {
        var _e;
        const x = m;
        if (S = Dt("msgHash", S), L = Dt("publicKey", L), "strict" in E) throw new Error("options.strict was renamed to lowS");
        const {
            lowS: T,
            prehash: y
        } = E;
        let f, M;
        try {
            if (typeof x == "string" || Ir(x)) try {
                f = _.fromDER(x)
            } catch (Me) {
                if (!(Me instanceof Vi.Err)) throw Me;
                f = _.fromCompact(x)
            } else if (typeof x == "object" && typeof x.r == "bigint" && typeof x.s == "bigint") {
                const {
                    r: Me,
                    s: Ee
                } = x;
                f = new _(Me, Ee)
            } else throw new Error("PARSE");
            M = u.fromHex(L)
        } catch (Me) {
            if (Me.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1
        }
        if (T && f.hasHighS()) return !1;
        y && (S = e.hash(S));
        const {
            r: q,
            s: G
        } = f, Y = U(S), ie = l(G), le = a(Y * ie), ue = a(q * ie), Re = (_e = u.BASE.multiplyAndAddUnsafe(M, le, ue)) == null ? void 0 : _e.toAffine();
        return Re ? a(Re.x) === q : !1
    }
    return {
        CURVE: e,
        getPublicKey: v,
        getSharedSecret: D,
        sign: j,
        verify: c,
        ProjectivePoint: u,
        Signature: _,
        utils: b
    }
}
class M2 extends Rw {
    constructor(e, n) {
        super(), this.finished = !1, this.destroyed = !1, sS(e);
        const r = w0(n);
        if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const i = this.blockLen,
            o = new Uint8Array(i);
        o.set(r.length > i ? e.create().update(r).digest() : r);
        for (let s = 0; s < o.length; s++) o[s] ^= 54;
        this.iHash.update(o), this.oHash = e.create();
        for (let s = 0; s < o.length; s++) o[s] ^= 106;
        this.oHash.update(o), o.fill(0)
    }
    update(e) {
        return ou(this), this.iHash.update(e), this
    }
    digestInto(e) {
        ou(this), Aw(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: n,
            iHash: r,
            finished: i,
            destroyed: o,
            blockLen: s,
            outputLen: a
        } = this;
        return e = e, e.finished = i, e.destroyed = o, e.blockLen = s, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const L2 = (t, e, n) => new M2(t, e).update(n).digest();
L2.create = (t, e) => new M2(t, e); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function V_(t) {
    return {
        hash: t,
        hmac: (e, ...n) => L2(t, e, Bw(...n)),
        randomBytes: Lw
    }
}

function G_(t, e) {
    const n = r => q_({
        ...t,
        ...V_(r)
    });
    return Object.freeze({
        ...n(e),
        create: n
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const N2 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    Am = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    Z_ = BigInt(1),
    Qd = BigInt(2),
    Im = (t, e) => (t + e / Qd) / e;

function Y_(t) {
    const e = N2,
        n = BigInt(3),
        r = BigInt(6),
        i = BigInt(11),
        o = BigInt(22),
        s = BigInt(23),
        a = BigInt(44),
        l = BigInt(88),
        u = t * t * t % e,
        h = u * u * t % e,
        g = dt(h, n, e) * h % e,
        w = dt(g, n, e) * h % e,
        C = dt(w, Qd, e) * u % e,
        B = dt(C, i, e) * C % e,
        I = dt(B, o, e) * B % e,
        R = dt(I, a, e) * I % e,
        _ = dt(R, l, e) * R % e,
        b = dt(_, a, e) * I % e,
        v = dt(b, n, e) * h % e,
        O = dt(v, s, e) * B % e,
        D = dt(O, r, e) * u % e,
        N = dt(D, Qd, e);
    if (!Xd.eql(Xd.sqr(N), t)) throw new Error("Cannot find square root");
    return N
}
const Xd = Fw(N2, void 0, void 0, {
        sqrt: Y_
    }),
    $0 = G_({
        a: BigInt(0),
        b: BigInt(7),
        Fp: Xd,
        n: Am,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: t => {
                const e = Am,
                    n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    r = -Z_ * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    o = n,
                    s = BigInt("0x100000000000000000000000000000000"),
                    a = Im(o * t, e),
                    l = Im(-r * t, e);
                let u = nt(t - a * n - l * i, e),
                    h = nt(-a * r - l * o, e);
                const g = u > s,
                    w = h > s;
                if (g && (u = e - u), w && (h = e - h), u > s || h > s) throw new Error("splitScalar: Endomorphism failed, k=" + t);
                return {
                    k1neg: g,
                    k1: u,
                    k2neg: w,
                    k2: h
                }
            }
        }
    }, Zd);
BigInt(0);
$0.ProjectivePoint;

function Tm(t) {
    try {
        return C0.ExtendedPoint.fromHex(t), !0
    } catch {
        return !1
    }
}
const O2 = (t, e) => C0.sign(t, e.slice(0, 32)),
    Q_ = C0.verify,
    Gt = t => xe.Buffer.isBuffer(t) ? t : t instanceof Uint8Array ? xe.Buffer.from(t.buffer, t.byteOffset, t.byteLength) : xe.Buffer.from(t);
class X_ {
    constructor(e) {
        Object.assign(this, e)
    }
    encode() {
        return xe.Buffer.from(e2(Al, this))
    }
    static decode(e) {
        return t2(Al, this, e)
    }
    static decodeUnchecked(e) {
        return Zw(Al, this, e)
    }
}
const Al = new Map;
var P2;
let j2;
const J_ = 32,
    kr = 32;

function e9(t) {
    return t._bn !== void 0
}
let Bm = 1;
j2 = Symbol.toStringTag;
class pe extends X_ {
    constructor(e) {
        if (super({}), this._bn = void 0, e9(e)) this._bn = e._bn;
        else {
            if (typeof e == "string") {
                const n = Wt.decode(e);
                if (n.length != kr) throw new Error("Invalid public key input");
                this._bn = new lm(n)
            } else this._bn = new lm(e);
            if (this._bn.byteLength() > kr) throw new Error("Invalid public key input")
        }
    }
    static unique() {
        const e = new pe(Bm);
        return Bm += 1, new pe(e.toBuffer())
    }
    equals(e) {
        return this._bn.eq(e._bn)
    }
    toBase58() {
        return Wt.encode(this.toBytes())
    }
    toJSON() {
        return this.toBase58()
    }
    toBytes() {
        const e = this.toBuffer();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    }
    toBuffer() {
        const e = this._bn.toArrayLike(xe.Buffer);
        if (e.length === kr) return e;
        const n = xe.Buffer.alloc(32);
        return e.copy(n, 32 - e.length), n
    }
    get[j2]() {
        return `PublicKey(${this.toString()})`
    }
    toString() {
        return this.toBase58()
    }
    static async createWithSeed(e, n, r) {
        const i = xe.Buffer.concat([e.toBuffer(), xe.Buffer.from(n), r.toBuffer()]),
            o = Zd(i);
        return new pe(o)
    }
    static createProgramAddressSync(e, n) {
        let r = xe.Buffer.alloc(0);
        e.forEach(function(o) {
            if (o.length > J_) throw new TypeError("Max seed length exceeded");
            r = xe.Buffer.concat([r, Gt(o)])
        }), r = xe.Buffer.concat([r, n.toBuffer(), xe.Buffer.from("ProgramDerivedAddress")]);
        const i = Zd(r);
        if (Tm(i)) throw new Error("Invalid seeds, address must fall off the curve");
        return new pe(i)
    }
    static async createProgramAddress(e, n) {
        return this.createProgramAddressSync(e, n)
    }
    static findProgramAddressSync(e, n) {
        let r = 255,
            i;
        for (; r != 0;) {
            try {
                const o = e.concat(xe.Buffer.from([r]));
                i = this.createProgramAddressSync(o, n)
            } catch (o) {
                if (o instanceof TypeError) throw o;
                r--;
                continue
            }
            return [i, r]
        }
        throw new Error("Unable to find a viable program address nonce")
    }
    static async findProgramAddress(e, n) {
        return this.findProgramAddressSync(e, n)
    }
    static isOnCurve(e) {
        const n = new pe(e);
        return Tm(n.toBytes())
    }
}
P2 = pe;
pe.default = new P2("11111111111111111111111111111111");
Al.set(pe, {
    kind: "struct",
    fields: [
        ["_bn", "u256"]
    ]
});
new pe("BPFLoader1111111111111111111111111111111111");
const Zo = 1232,
    K0 = 127,
    as = 64;
class D2 extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(D2.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class U2 extends Error {
    constructor(e, n) {
        super(`Transaction was not confirmed in ${n.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(U2.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
class Os extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(Os.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
});
class fu {
    constructor(e, n) {
        this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = n
    }
    keySegments() {
        const e = [this.staticAccountKeys];
        return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e
    }
    get(e) {
        for (const n of this.keySegments()) {
            if (e < n.length) return n[e];
            e -= n.length
        }
    }
    get length() {
        return this.keySegments().flat().length
    }
    compileInstructions(e) {
        if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
        const r = new Map;
        this.keySegments().flat().forEach((o, s) => {
            r.set(o.toBase58(), s)
        });
        const i = o => {
            const s = r.get(o.toBase58());
            if (s === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
            return s
        };
        return e.map(o => ({
            programIdIndex: i(o.programId),
            accountKeyIndexes: o.keys.map(s => i(s.pubkey)),
            data: o.data
        }))
    }
}
const Ie = (t = "publicKey") => Ze(32, t),
    t9 = (t = "signature") => Ze(64, t),
    Uo = (t = "string") => {
        const e = de([ge("length"), ge("lengthPadding"), Ze(to(ge(), -8), "chars")], t),
            n = e.decode.bind(e),
            r = e.encode.bind(e),
            i = e;
        return i.decode = (o, s) => n(o, s).chars.toString(), i.encode = (o, s, a) => {
            const l = {
                chars: xe.Buffer.from(o, "utf8")
            };
            return r(l, s, a)
        }, i.alloc = o => ge().span + ge().span + xe.Buffer.from(o, "utf8").length, i
    },
    n9 = (t = "authorized") => de([Ie("staker"), Ie("withdrawer")], t),
    r9 = (t = "lockup") => de([On("unixTimestamp"), On("epoch"), Ie("custodian")], t),
    i9 = (t = "voteInit") => de([Ie("nodePubkey"), Ie("authorizedVoter"), Ie("authorizedWithdrawer"), De("commission")], t),
    o9 = (t = "voteAuthorizeWithSeedArgs") => de([ge("voteAuthorizationType"), Ie("currentAuthorityDerivedKeyOwnerPubkey"), Uo("currentAuthorityDerivedKeySeed"), Ie("newAuthorized")], t);

function z2(t, e) {
    const n = i => {
        if (i.span >= 0) return i.span;
        if (typeof i.alloc == "function") return i.alloc(e[i.property]);
        if ("count" in i && "elementLayout" in i) {
            const o = e[i.property];
            if (Array.isArray(o)) return o.length * n(i.elementLayout)
        } else if ("fields" in i) return z2({
            layout: i
        }, e[i.property]);
        return 0
    };
    let r = 0;
    return t.layout.fields.forEach(i => {
        r += n(i)
    }), r
}

function Pn(t) {
    let e = 0,
        n = 0;
    for (;;) {
        let r = t.shift();
        if (e |= (r & 127) << n * 7, n += 1, !(r & 128)) break
    }
    return e
}

function jn(t, e) {
    let n = e;
    for (;;) {
        let r = n & 127;
        if (n >>= 7, n == 0) {
            t.push(r);
            break
        } else r |= 128, t.push(r)
    }
}

function tt(t, e) {
    if (!t) throw new Error(e || "Assertion failed")
}
class Qu {
    constructor(e, n) {
        this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = n
    }
    static compile(e, n) {
        const r = new Map,
            i = s => {
                const a = s.toBase58();
                let l = r.get(a);
                return l === void 0 && (l = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                }, r.set(a, l)), l
            },
            o = i(n);
        o.isSigner = !0, o.isWritable = !0;
        for (const s of e) {
            i(s.programId).isInvoked = !0;
            for (const a of s.keys) {
                const l = i(a.pubkey);
                l.isSigner || (l.isSigner = a.isSigner), l.isWritable || (l.isWritable = a.isWritable)
            }
        }
        return new Qu(n, r)
    }
    getMessageComponents() {
        const e = [...this.keyMetaMap.entries()];
        tt(e.length <= 256, "Max static account keys length exceeded");
        const n = e.filter(([, l]) => l.isSigner && l.isWritable),
            r = e.filter(([, l]) => l.isSigner && !l.isWritable),
            i = e.filter(([, l]) => !l.isSigner && l.isWritable),
            o = e.filter(([, l]) => !l.isSigner && !l.isWritable),
            s = {
                numRequiredSignatures: n.length + r.length,
                numReadonlySignedAccounts: r.length,
                numReadonlyUnsignedAccounts: o.length
            };
        {
            tt(n.length > 0, "Expected at least one writable signer key");
            const [l] = n[0];
            tt(l === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
        }
        const a = [...n.map(([l]) => new pe(l)), ...r.map(([l]) => new pe(l)), ...i.map(([l]) => new pe(l)), ...o.map(([l]) => new pe(l))];
        return [s, a]
    }
    extractTableLookup(e) {
        const [n, r] = this.drainKeysFoundInLookupTable(e.state.addresses, s => !s.isSigner && !s.isInvoked && s.isWritable), [i, o] = this.drainKeysFoundInLookupTable(e.state.addresses, s => !s.isSigner && !s.isInvoked && !s.isWritable);
        if (!(n.length === 0 && i.length === 0)) return [{
            accountKey: e.key,
            writableIndexes: n,
            readonlyIndexes: i
        }, {
            writable: r,
            readonly: o
        }]
    }
    drainKeysFoundInLookupTable(e, n) {
        const r = new Array,
            i = new Array;
        for (const [o, s] of this.keyMetaMap.entries())
            if (n(s)) {
                const a = new pe(o),
                    l = e.findIndex(u => u.equals(a));
                l >= 0 && (tt(l < 256, "Max lookup table index exceeded"), r.push(l), i.push(a), this.keyMetaMap.delete(o))
            } return [r, i]
    }
}
class Yr {
    constructor(e) {
        this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = e.header, this.accountKeys = e.accountKeys.map(n => new pe(n)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach(n => this.indexToProgramIds.set(n.programIdIndex, this.accountKeys[n.programIdIndex]))
    }
    get version() {
        return "legacy"
    }
    get staticAccountKeys() {
        return this.accountKeys
    }
    get compiledInstructions() {
        return this.instructions.map(e => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: Wt.decode(e.data)
        }))
    }
    get addressTableLookups() {
        return []
    }
    getAccountKeys() {
        return new fu(this.staticAccountKeys)
    }
    static compile(e) {
        const n = Qu.compile(e.instructions, e.payerKey),
            [r, i] = n.getMessageComponents(),
            s = new fu(i).compileInstructions(e.instructions).map(a => ({
                programIdIndex: a.programIdIndex,
                accounts: a.accountKeyIndexes,
                data: Wt.encode(a.data)
            }));
        return new Yr({
            header: r,
            accountKeys: i,
            recentBlockhash: e.recentBlockhash,
            instructions: s
        })
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const n = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
            const r = e - n,
                o = this.accountKeys.length - n - this.header.numReadonlyUnsignedAccounts;
            return r < o
        } else {
            const r = n - this.header.numReadonlySignedAccounts;
            return e < r
        }
    }
    isProgramId(e) {
        return this.indexToProgramIds.has(e)
    }
    programIds() {
        return [...this.indexToProgramIds.values()]
    }
    nonProgramIds() {
        return this.accountKeys.filter((e, n) => !this.isProgramId(n))
    }
    serialize() {
        const e = this.accountKeys.length;
        let n = [];
        jn(n, e);
        const r = this.instructions.map(g => {
            const {
                accounts: w,
                programIdIndex: C
            } = g, B = Array.from(Wt.decode(g.data));
            let I = [];
            jn(I, w.length);
            let R = [];
            return jn(R, B.length), {
                programIdIndex: C,
                keyIndicesCount: xe.Buffer.from(I),
                keyIndices: w,
                dataLength: xe.Buffer.from(R),
                data: B
            }
        });
        let i = [];
        jn(i, r.length);
        let o = xe.Buffer.alloc(Zo);
        xe.Buffer.from(i).copy(o);
        let s = i.length;
        r.forEach(g => {
            const C = de([De("programIdIndex"), Ze(g.keyIndicesCount.length, "keyIndicesCount"), fn(De("keyIndex"), g.keyIndices.length, "keyIndices"), Ze(g.dataLength.length, "dataLength"), fn(De("userdatum"), g.data.length, "data")]).encode(g, o, s);
            s += C
        }), o = o.slice(0, s);
        const a = de([Ze(1, "numRequiredSignatures"), Ze(1, "numReadonlySignedAccounts"), Ze(1, "numReadonlyUnsignedAccounts"), Ze(n.length, "keyCount"), fn(Ie("key"), e, "keys"), Ie("recentBlockhash")]),
            l = {
                numRequiredSignatures: xe.Buffer.from([this.header.numRequiredSignatures]),
                numReadonlySignedAccounts: xe.Buffer.from([this.header.numReadonlySignedAccounts]),
                numReadonlyUnsignedAccounts: xe.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                keyCount: xe.Buffer.from(n),
                keys: this.accountKeys.map(g => Gt(g.toBytes())),
                recentBlockhash: Wt.decode(this.recentBlockhash)
            };
        let u = xe.Buffer.alloc(2048);
        const h = a.encode(l, u);
        return o.copy(u, h), u.slice(0, h + o.length)
    }
    static from(e) {
        let n = [...e];
        const r = n.shift();
        if (r !== (r & K0)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
        const i = n.shift(),
            o = n.shift(),
            s = Pn(n);
        let a = [];
        for (let w = 0; w < s; w++) {
            const C = n.slice(0, kr);
            n = n.slice(kr), a.push(new pe(xe.Buffer.from(C)))
        }
        const l = n.slice(0, kr);
        n = n.slice(kr);
        const u = Pn(n);
        let h = [];
        for (let w = 0; w < u; w++) {
            const C = n.shift(),
                B = Pn(n),
                I = n.slice(0, B);
            n = n.slice(B);
            const R = Pn(n),
                _ = n.slice(0, R),
                b = Wt.encode(xe.Buffer.from(_));
            n = n.slice(R), h.push({
                programIdIndex: C,
                accounts: I,
                data: b
            })
        }
        const g = {
            header: {
                numRequiredSignatures: r,
                numReadonlySignedAccounts: i,
                numReadonlyUnsignedAccounts: o
            },
            recentBlockhash: Wt.encode(xe.Buffer.from(l)),
            accountKeys: a,
            instructions: h
        };
        return new Yr(g)
    }
}
class ma {
    constructor(e) {
        this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups
    }
    get version() {
        return 0
    }
    get numAccountKeysFromLookups() {
        let e = 0;
        for (const n of this.addressTableLookups) e += n.readonlyIndexes.length + n.writableIndexes.length;
        return e
    }
    getAccountKeys(e) {
        let n;
        if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
            n = e.accountKeysFromLookups
        } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) n = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
        return new fu(this.staticAccountKeys, n)
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const n = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
        if (e >= r) {
            const i = e - r,
                o = this.addressTableLookups.reduce((s, a) => s + a.writableIndexes.length, 0);
            return i < o
        } else if (e >= this.header.numRequiredSignatures) {
            const i = e - n,
                s = r - n - this.header.numReadonlyUnsignedAccounts;
            return i < s
        } else {
            const i = n - this.header.numReadonlySignedAccounts;
            return e < i
        }
    }
    resolveAddressTableLookups(e) {
        const n = {
            writable: [],
            readonly: []
        };
        for (const r of this.addressTableLookups) {
            const i = e.find(o => o.key.equals(r.accountKey));
            if (!i) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
            for (const o of r.writableIndexes)
                if (o < i.state.addresses.length) n.writable.push(i.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
            for (const o of r.readonlyIndexes)
                if (o < i.state.addresses.length) n.readonly.push(i.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`)
        }
        return n
    }
    static compile(e) {
        const n = Qu.compile(e.instructions, e.payerKey),
            r = new Array,
            i = {
                writable: new Array,
                readonly: new Array
            },
            o = e.addressLookupTableAccounts || [];
        for (const h of o) {
            const g = n.extractTableLookup(h);
            if (g !== void 0) {
                const [w, {
                    writable: C,
                    readonly: B
                }] = g;
                r.push(w), i.writable.push(...C), i.readonly.push(...B)
            }
        }
        const [s, a] = n.getMessageComponents(), u = new fu(a, i).compileInstructions(e.instructions);
        return new ma({
            header: s,
            staticAccountKeys: a,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: u,
            addressTableLookups: r
        })
    }
    serialize() {
        const e = Array();
        jn(e, this.staticAccountKeys.length);
        const n = this.serializeInstructions(),
            r = Array();
        jn(r, this.compiledInstructions.length);
        const i = this.serializeAddressTableLookups(),
            o = Array();
        jn(o, this.addressTableLookups.length);
        const s = de([De("prefix"), de([De("numRequiredSignatures"), De("numReadonlySignedAccounts"), De("numReadonlyUnsignedAccounts")], "header"), Ze(e.length, "staticAccountKeysLength"), fn(Ie(), this.staticAccountKeys.length, "staticAccountKeys"), Ie("recentBlockhash"), Ze(r.length, "instructionsLength"), Ze(n.length, "serializedInstructions"), Ze(o.length, "addressTableLookupsLength"), Ze(i.length, "serializedAddressTableLookups")]),
            a = new Uint8Array(Zo),
            u = s.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map(h => h.toBytes()),
                recentBlockhash: Wt.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: n,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: i
            }, a);
        return a.slice(0, u)
    }
    serializeInstructions() {
        let e = 0;
        const n = new Uint8Array(Zo);
        for (const r of this.compiledInstructions) {
            const i = Array();
            jn(i, r.accountKeyIndexes.length);
            const o = Array();
            jn(o, r.data.length);
            const s = de([De("programIdIndex"), Ze(i.length, "encodedAccountKeyIndexesLength"), fn(De(), r.accountKeyIndexes.length, "accountKeyIndexes"), Ze(o.length, "encodedDataLength"), Ze(r.data.length, "data")]);
            e += s.encode({
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(i),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(o),
                data: r.data
            }, n, e)
        }
        return n.slice(0, e)
    }
    serializeAddressTableLookups() {
        let e = 0;
        const n = new Uint8Array(Zo);
        for (const r of this.addressTableLookups) {
            const i = Array();
            jn(i, r.writableIndexes.length);
            const o = Array();
            jn(o, r.readonlyIndexes.length);
            const s = de([Ie("accountKey"), Ze(i.length, "encodedWritableIndexesLength"), fn(De(), r.writableIndexes.length, "writableIndexes"), Ze(o.length, "encodedReadonlyIndexesLength"), fn(De(), r.readonlyIndexes.length, "readonlyIndexes")]);
            e += s.encode({
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(i),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(o),
                readonlyIndexes: r.readonlyIndexes
            }, n, e)
        }
        return n.slice(0, e)
    }
    static deserialize(e) {
        let n = [...e];
        const r = n.shift(),
            i = r & K0;
        tt(r !== i, "Expected versioned message but received legacy message");
        const o = i;
        tt(o === 0, `Expected versioned message with version 0 but found version ${o}`);
        const s = {
                numRequiredSignatures: n.shift(),
                numReadonlySignedAccounts: n.shift(),
                numReadonlyUnsignedAccounts: n.shift()
            },
            a = [],
            l = Pn(n);
        for (let B = 0; B < l; B++) a.push(new pe(n.splice(0, kr)));
        const u = Wt.encode(n.splice(0, kr)),
            h = Pn(n),
            g = [];
        for (let B = 0; B < h; B++) {
            const I = n.shift(),
                R = Pn(n),
                _ = n.splice(0, R),
                b = Pn(n),
                v = new Uint8Array(n.splice(0, b));
            g.push({
                programIdIndex: I,
                accountKeyIndexes: _,
                data: v
            })
        }
        const w = Pn(n),
            C = [];
        for (let B = 0; B < w; B++) {
            const I = new pe(n.splice(0, kr)),
                R = Pn(n),
                _ = n.splice(0, R),
                b = Pn(n),
                v = n.splice(0, b);
            C.push({
                accountKey: I,
                writableIndexes: _,
                readonlyIndexes: v
            })
        }
        return new ma({
            header: s,
            staticAccountKeys: a,
            recentBlockhash: u,
            compiledInstructions: g,
            addressTableLookups: C
        })
    }
}
const q0 = {
    deserializeMessageVersion(t) {
        const e = t[0],
            n = e & K0;
        return n === e ? "legacy" : n
    },
    deserialize: t => {
        const e = q0.deserializeMessageVersion(t);
        if (e === "legacy") return Yr.from(t);
        if (e === 0) return ma.deserialize(t);
        throw new Error(`Transaction message version ${e} deserialization is not supported`)
    }
};
let li = function(t) {
    return t[t.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", t[t.PROCESSED = 1] = "PROCESSED", t[t.TIMED_OUT = 2] = "TIMED_OUT", t[t.NONCE_INVALID = 3] = "NONCE_INVALID", t
}({});
const s9 = xe.Buffer.alloc(as).fill(0);
class sr {
    constructor(e) {
        this.keys = void 0, this.programId = void 0, this.data = xe.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
    }
    toJSON() {
        return {
            keys: this.keys.map(({
                pubkey: e,
                isSigner: n,
                isWritable: r
            }) => ({
                pubkey: e.toJSON(),
                isSigner: n,
                isWritable: r
            })),
            programId: this.programId.toJSON(),
            data: [...this.data]
        }
    }
}
class Dn {
    get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null
    }
    constructor(e) {
        if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e)
            if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                const {
                    minContextSlot: n,
                    nonceInfo: r
                } = e;
                this.minNonceContextSlot = n, this.nonceInfo = r
            } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
            const {
                blockhash: n,
                lastValidBlockHeight: r
            } = e;
            this.recentBlockhash = n, this.lastValidBlockHeight = r
        } else {
            const {
                recentBlockhash: n,
                nonceInfo: r
            } = e;
            r && (this.nonceInfo = r), this.recentBlockhash = n
        }
    }
    toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map(e => e.toJSON()),
            signers: this.signatures.map(({
                publicKey: e
            }) => e.toJSON())
        }
    }
    add(...e) {
        if (e.length === 0) throw new Error("No instructions");
        return e.forEach(n => {
            "instructions" in n ? this.instructions = this.instructions.concat(n.instructions) : "data" in n && "programId" in n && "keys" in n ? this.instructions.push(n) : this.instructions.push(new sr(n))
        }), this
    }
    compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
        let e, n;
        if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? n = [this.nonceInfo.nonceInstruction, ...this.instructions] : n = this.instructions) : (e = this.recentBlockhash, n = this.instructions), !e) throw new Error("Transaction recentBlockhash required");
        n.length < 1 && console.warn("No instructions provided");
        let r;
        if (this.feePayer) r = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
        else throw new Error("Transaction fee payer required");
        for (let I = 0; I < n.length; I++)
            if (n[I].programId === void 0) throw new Error(`Transaction instruction index ${I} has undefined program id`);
        const i = [],
            o = [];
        n.forEach(I => {
            I.keys.forEach(_ => {
                o.push({
                    ..._
                })
            });
            const R = I.programId.toString();
            i.includes(R) || i.push(R)
        }), i.forEach(I => {
            o.push({
                pubkey: new pe(I),
                isSigner: !1,
                isWritable: !1
            })
        });
        const s = [];
        o.forEach(I => {
            const R = I.pubkey.toString(),
                _ = s.findIndex(b => b.pubkey.toString() === R);
            _ > -1 ? (s[_].isWritable = s[_].isWritable || I.isWritable, s[_].isSigner = s[_].isSigner || I.isSigner) : s.push(I)
        }), s.sort(function(I, R) {
            if (I.isSigner !== R.isSigner) return I.isSigner ? -1 : 1;
            if (I.isWritable !== R.isWritable) return I.isWritable ? -1 : 1;
            const _ = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower"
            };
            return I.pubkey.toBase58().localeCompare(R.pubkey.toBase58(), "en", _)
        });
        const a = s.findIndex(I => I.pubkey.equals(r));
        if (a > -1) {
            const [I] = s.splice(a, 1);
            I.isSigner = !0, I.isWritable = !0, s.unshift(I)
        } else s.unshift({
            pubkey: r,
            isSigner: !0,
            isWritable: !0
        });
        for (const I of this.signatures) {
            const R = s.findIndex(_ => _.pubkey.equals(I.publicKey));
            if (R > -1) s[R].isSigner || (s[R].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
            else throw new Error(`unknown signer: ${I.publicKey.toString()}`)
        }
        let l = 0,
            u = 0,
            h = 0;
        const g = [],
            w = [];
        s.forEach(({
            pubkey: I,
            isSigner: R,
            isWritable: _
        }) => {
            R ? (g.push(I.toString()), l += 1, _ || (u += 1)) : (w.push(I.toString()), _ || (h += 1))
        });
        const C = g.concat(w),
            B = n.map(I => {
                const {
                    data: R,
                    programId: _
                } = I;
                return {
                    programIdIndex: C.indexOf(_.toString()),
                    accounts: I.keys.map(b => C.indexOf(b.pubkey.toString())),
                    data: Wt.encode(R)
                }
            });
        return B.forEach(I => {
            tt(I.programIdIndex >= 0), I.accounts.forEach(R => tt(R >= 0))
        }), new Yr({
            header: {
                numRequiredSignatures: l,
                numReadonlySignedAccounts: u,
                numReadonlyUnsignedAccounts: h
            },
            accountKeys: C,
            recentBlockhash: e,
            instructions: B
        })
    }
    _compile() {
        const e = this.compileMessage(),
            n = e.accountKeys.slice(0, e.header.numRequiredSignatures);
        return this.signatures.length === n.length && this.signatures.every((i, o) => n[o].equals(i.publicKey)) || (this.signatures = n.map(r => ({
            signature: null,
            publicKey: r
        }))), e
    }
    serializeMessage() {
        return this._compile().serialize()
    }
    async getEstimatedFee(e) {
        return (await e.getFeeForMessage(this.compileMessage())).value
    }
    setSigners(...e) {
        if (e.length === 0) throw new Error("No signers");
        const n = new Set;
        this.signatures = e.filter(r => {
            const i = r.toString();
            return n.has(i) ? !1 : (n.add(i), !0)
        }).map(r => ({
            signature: null,
            publicKey: r
        }))
    }
    sign(...e) {
        if (e.length === 0) throw new Error("No signers");
        const n = new Set,
            r = [];
        for (const o of e) {
            const s = o.publicKey.toString();
            n.has(s) || (n.add(s), r.push(o))
        }
        this.signatures = r.map(o => ({
            signature: null,
            publicKey: o.publicKey
        }));
        const i = this._compile();
        this._partialSign(i, ...r)
    }
    partialSign(...e) {
        if (e.length === 0) throw new Error("No signers");
        const n = new Set,
            r = [];
        for (const o of e) {
            const s = o.publicKey.toString();
            n.has(s) || (n.add(s), r.push(o))
        }
        const i = this._compile();
        this._partialSign(i, ...r)
    }
    _partialSign(e, ...n) {
        const r = e.serialize();
        n.forEach(i => {
            const o = O2(r, i.secretKey);
            this._addSignature(i.publicKey, Gt(o))
        })
    }
    addSignature(e, n) {
        this._compile(), this._addSignature(e, n)
    }
    _addSignature(e, n) {
        tt(n.length === 64);
        const r = this.signatures.findIndex(i => e.equals(i.publicKey));
        if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
        this.signatures[r].signature = xe.Buffer.from(n)
    }
    verifySignatures(e = !0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), e)
    }
    _getMessageSignednessErrors(e, n) {
        const r = {};
        for (const {
                signature: i,
                publicKey: o
            }
            of this.signatures) i === null ? n && (r.missing || (r.missing = [])).push(o) : Q_(i, e, o.toBytes()) || (r.invalid || (r.invalid = [])).push(o);
        return r.invalid || r.missing ? r : void 0
    }
    serialize(e) {
        const {
            requireAllSignatures: n,
            verifySignatures: r
        } = Object.assign({
            requireAllSignatures: !0,
            verifySignatures: !0
        }, e), i = this.serializeMessage();
        if (r) {
            const o = this._getMessageSignednessErrors(i, n);
            if (o) {
                let s = "Signature verification failed.";
                throw o.invalid && (s += `
Invalid signature for public key${o.invalid.length===1?"":"(s)"} [\`${o.invalid.map(a=>a.toBase58()).join("`, `")}\`].`), o.missing && (s += `
Missing signature for public key${o.missing.length===1?"":"(s)"} [\`${o.missing.map(a=>a.toBase58()).join("`, `")}\`].`), new Error(s)
            }
        }
        return this._serialize(i)
    }
    _serialize(e) {
        const {
            signatures: n
        } = this, r = [];
        jn(r, n.length);
        const i = r.length + n.length * 64 + e.length,
            o = xe.Buffer.alloc(i);
        return tt(n.length < 256), xe.Buffer.from(r).copy(o, 0), n.forEach(({
            signature: s
        }, a) => {
            s !== null && (tt(s.length === 64, "signature has invalid length"), xe.Buffer.from(s).copy(o, r.length + a * 64))
        }), e.copy(o, r.length + n.length * 64), tt(o.length <= Zo, `Transaction too large: ${o.length} > ${Zo}`), o
    }
    get keys() {
        return tt(this.instructions.length === 1), this.instructions[0].keys.map(e => e.pubkey)
    }
    get programId() {
        return tt(this.instructions.length === 1), this.instructions[0].programId
    }
    get data() {
        return tt(this.instructions.length === 1), this.instructions[0].data
    }
    static from(e) {
        let n = [...e];
        const r = Pn(n);
        let i = [];
        for (let o = 0; o < r; o++) {
            const s = n.slice(0, as);
            n = n.slice(as), i.push(Wt.encode(xe.Buffer.from(s)))
        }
        return Dn.populate(Yr.from(n), i)
    }
    static populate(e, n = []) {
        const r = new Dn;
        return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), n.forEach((i, o) => {
            const s = {
                signature: i == Wt.encode(s9) ? null : Wt.decode(i),
                publicKey: e.accountKeys[o]
            };
            r.signatures.push(s)
        }), e.instructions.forEach(i => {
            const o = i.accounts.map(s => {
                const a = e.accountKeys[s];
                return {
                    pubkey: a,
                    isSigner: r.signatures.some(l => l.publicKey.toString() === a.toString()) || e.isAccountSigner(s),
                    isWritable: e.isAccountWritable(s)
                }
            });
            r.instructions.push(new sr({
                keys: o,
                programId: e.accountKeys[i.programIdIndex],
                data: Wt.decode(i.data)
            }))
        }), r._message = e, r._json = r.toJSON(), r
    }
}
class ga {
    get version() {
        return this.message.version
    }
    constructor(e, n) {
        if (this.signatures = void 0, this.message = void 0, n !== void 0) tt(n.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = n;
        else {
            const r = [];
            for (let i = 0; i < e.header.numRequiredSignatures; i++) r.push(new Uint8Array(as));
            this.signatures = r
        }
        this.message = e
    }
    serialize() {
        const e = this.message.serialize(),
            n = Array();
        jn(n, this.signatures.length);
        const r = de([Ze(n.length, "encodedSignaturesLength"), fn(t9(), this.signatures.length, "signatures"), Ze(e.length, "serializedMessage")]),
            i = new Uint8Array(2048),
            o = r.encode({
                encodedSignaturesLength: new Uint8Array(n),
                signatures: this.signatures,
                serializedMessage: e
            }, i);
        return i.slice(0, o)
    }
    static deserialize(e) {
        let n = [...e];
        const r = [],
            i = Pn(n);
        for (let s = 0; s < i; s++) r.push(new Uint8Array(n.splice(0, as)));
        const o = q0.deserialize(new Uint8Array(n));
        return new ga(o, r)
    }
    sign(e) {
        const n = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        for (const i of e) {
            const o = r.findIndex(s => s.equals(i.publicKey));
            tt(o >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`), this.signatures[o] = O2(n, i.secretKey)
        }
    }
    addSignature(e, n) {
        tt(n.byteLength === 64, "Signature must be 64 bytes long");
        const i = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(o => o.equals(e));
        tt(i >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[i] = n
    }
}
const a9 = 160,
    l9 = 64,
    u9 = a9 / l9,
    c9 = 1e3 / u9;
new pe("SysvarC1ock11111111111111111111111111111111");
new pe("SysvarEpochSchedu1e111111111111111111111111");
new pe("Sysvar1nstructions1111111111111111111111111");
const Bf = new pe("SysvarRecentB1ockHashes11111111111111111111"),
    Rm = new pe("SysvarRent111111111111111111111111111111111");
new pe("SysvarRewards111111111111111111111111111111");
new pe("SysvarS1otHashes111111111111111111111111111");
new pe("SysvarS1otHistory11111111111111111111111111");
new pe("SysvarStakeHistory1111111111111111111111111");

function ko(t) {
    return new Promise(e => setTimeout(e, t))
}

function Kn(t, e) {
    const n = t.layout.span >= 0 ? t.layout.span : z2(t, e),
        r = xe.Buffer.alloc(n),
        i = Object.assign({
            instruction: t.index
        }, e);
    return t.layout.encode(i, r), r
}
const f9 = qt("lamportsPerSignature"),
    F2 = de([ge("version"), ge("state"), Ie("authorizedPubkey"), Ie("nonce"), de([f9], "feeCalculator")]),
    Mm = F2.span;
class V0 {
    constructor(e) {
        this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator
    }
    static fromAccountData(e) {
        const n = F2.decode(Gt(e), 0);
        return new V0({
            authorizedPubkey: new pe(n.authorizedPubkey),
            nonce: new pe(n.nonce).toString(),
            feeCalculator: n.feeCalculator
        })
    }
}
const d9 = t => {
        const e = t.decode.bind(t),
            n = t.encode.bind(t);
        return {
            decode: e,
            encode: n
        }
    },
    h9 = t => e => {
        const n = Ze(t, e),
            {
                encode: r,
                decode: i
            } = d9(n),
            o = n;
        return o.decode = (s, a) => {
            const l = i(s, a);
            return $b(xe.Buffer.from(l))
        }, o.encode = (s, a, l) => {
            const u = Vb(s, t);
            return r(u, a, l)
        }, o
    },
    ls = h9(8),
    qn = Object.freeze({
        Create: {
            index: 0,
            layout: de([ge("instruction"), On("lamports"), On("space"), Ie("programId")])
        },
        Assign: {
            index: 1,
            layout: de([ge("instruction"), Ie("programId")])
        },
        Transfer: {
            index: 2,
            layout: de([ge("instruction"), ls("lamports")])
        },
        CreateWithSeed: {
            index: 3,
            layout: de([ge("instruction"), Ie("base"), Uo("seed"), On("lamports"), On("space"), Ie("programId")])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: de([ge("instruction")])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: de([ge("instruction"), On("lamports")])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: de([ge("instruction"), Ie("authorized")])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: de([ge("instruction"), Ie("authorized")])
        },
        Allocate: {
            index: 8,
            layout: de([ge("instruction"), On("space")])
        },
        AllocateWithSeed: {
            index: 9,
            layout: de([ge("instruction"), Ie("base"), Uo("seed"), On("space"), Ie("programId")])
        },
        AssignWithSeed: {
            index: 10,
            layout: de([ge("instruction"), Ie("base"), Uo("seed"), Ie("programId")])
        },
        TransferWithSeed: {
            index: 11,
            layout: de([ge("instruction"), ls("lamports"), Uo("seed"), Ie("programId")])
        },
        UpgradeNonceAccount: {
            index: 12,
            layout: de([ge("instruction")])
        }
    });
class ya {
    constructor() {}
    static createAccount(e) {
        const n = qn.Create,
            r = Kn(n, {
                lamports: e.lamports,
                space: e.space,
                programId: Gt(e.programId.toBuffer())
            });
        return new sr({
            keys: [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.newAccountPubkey,
                isSigner: !0,
                isWritable: !0
            }],
            programId: this.programId,
            data: r
        })
    }
    static transfer(e) {
        let n, r;
        if ("basePubkey" in e) {
            const i = qn.TransferWithSeed;
            n = Kn(i, {
                lamports: BigInt(e.lamports),
                seed: e.seed,
                programId: Gt(e.programId.toBuffer())
            }), r = [{
                pubkey: e.fromPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        } else {
            const i = qn.Transfer;
            n = Kn(i, {
                lamports: BigInt(e.lamports)
            }), r = [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        }
        return new sr({
            keys: r,
            programId: this.programId,
            data: n
        })
    }
    static assign(e) {
        let n, r;
        if ("basePubkey" in e) {
            const i = qn.AssignWithSeed;
            n = Kn(i, {
                base: Gt(e.basePubkey.toBuffer()),
                seed: e.seed,
                programId: Gt(e.programId.toBuffer())
            }), r = [{
                pubkey: e.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const i = qn.Assign;
            n = Kn(i, {
                programId: Gt(e.programId.toBuffer())
            }), r = [{
                pubkey: e.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new sr({
            keys: r,
            programId: this.programId,
            data: n
        })
    }
    static createAccountWithSeed(e) {
        const n = qn.CreateWithSeed,
            r = Kn(n, {
                base: Gt(e.basePubkey.toBuffer()),
                seed: e.seed,
                lamports: e.lamports,
                space: e.space,
                programId: Gt(e.programId.toBuffer())
            });
        let i = [{
            pubkey: e.fromPubkey,
            isSigner: !0,
            isWritable: !0
        }, {
            pubkey: e.newAccountPubkey,
            isSigner: !1,
            isWritable: !0
        }];
        return e.basePubkey != e.fromPubkey && i.push({
            pubkey: e.basePubkey,
            isSigner: !0,
            isWritable: !1
        }), new sr({
            keys: i,
            programId: this.programId,
            data: r
        })
    }
    static createNonceAccount(e) {
        const n = new Dn;
        "basePubkey" in e && "seed" in e ? n.add(ya.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: Mm,
            programId: this.programId
        })) : n.add(ya.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            lamports: e.lamports,
            space: Mm,
            programId: this.programId
        }));
        const r = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey
        };
        return n.add(this.nonceInitialize(r)), n
    }
    static nonceInitialize(e) {
        const n = qn.InitializeNonceAccount,
            r = Kn(n, {
                authorized: Gt(e.authorizedPubkey.toBuffer())
            }),
            i = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Bf,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Rm,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: r
            };
        return new sr(i)
    }
    static nonceAdvance(e) {
        const n = qn.AdvanceNonceAccount,
            r = Kn(n),
            i = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Bf,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: r
            };
        return new sr(i)
    }
    static nonceWithdraw(e) {
        const n = qn.WithdrawNonceAccount,
            r = Kn(n, {
                lamports: e.lamports
            });
        return new sr({
            keys: [{
                pubkey: e.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Bf,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Rm,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: e.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: r
        })
    }
    static nonceAuthorize(e) {
        const n = qn.AuthorizeNonceAccount,
            r = Kn(n, {
                authorized: Gt(e.newAuthorizedPubkey.toBuffer())
            });
        return new sr({
            keys: [{
                pubkey: e.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: r
        })
    }
    static allocate(e) {
        let n, r;
        if ("basePubkey" in e) {
            const i = qn.AllocateWithSeed;
            n = Kn(i, {
                base: Gt(e.basePubkey.toBuffer()),
                seed: e.seed,
                space: e.space,
                programId: Gt(e.programId.toBuffer())
            }), r = [{
                pubkey: e.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const i = qn.Allocate;
            n = Kn(i, {
                space: e.space
            }), r = [{
                pubkey: e.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new sr({
            keys: r,
            programId: this.programId,
            data: n
        })
    }
}
ya.programId = new pe("11111111111111111111111111111111");
new pe("BPFLoader2111111111111111111111111111111111");

function p9(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var m9 = Object.prototype.toString,
    g9 = Object.keys || function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    };

function Ps(t, e) {
    var n, r, i, o, s, a, l;
    if (t === !0) return "true";
    if (t === !1) return "false";
    switch (typeof t) {
        case "object":
            if (t === null) return null;
            if (t.toJSON && typeof t.toJSON == "function") return Ps(t.toJSON(), e);
            if (l = m9.call(t), l === "[object Array]") {
                for (i = "[", r = t.length - 1, n = 0; n < r; n++) i += Ps(t[n], !0) + ",";
                return r > -1 && (i += Ps(t[n], !0)), i + "]"
            } else if (l === "[object Object]") {
                for (o = g9(t).sort(), r = o.length, i = "", n = 0; n < r;) s = o[n], a = Ps(t[s], !1), a !== void 0 && (i && (i += ","), i += JSON.stringify(s) + ":" + a), n++;
                return "{" + i + "}"
            } else return JSON.stringify(t);
        case "function":
        case "undefined":
            return e ? null : void 0;
        case "string":
            return JSON.stringify(t);
        default:
            return isFinite(t) ? t : null
    }
}
var y9 = function(t) {
        var e = Ps(t, !1);
        if (e !== void 0) return "" + e
    },
    Lm = p9(y9);
const As = 32;

function Rf(t) {
    let e = 0;
    for (; t > 1;) t /= 2, e++;
    return e
}

function v9(t) {
    return t === 0 ? 1 : (t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, t |= t >> 32, t + 1)
}
class w9 {
    constructor(e, n, r, i, o) {
        this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = n, this.warmup = r, this.firstNormalEpoch = i, this.firstNormalSlot = o
    }
    getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0]
    }
    getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
            const n = Rf(v9(e + As + 1)) - Rf(As) - 1,
                r = this.getSlotsInEpoch(n),
                i = e - (r - As);
            return [n, i]
        } else {
            const n = e - this.firstNormalSlot,
                r = Math.floor(n / this.slotsPerEpoch),
                i = this.firstNormalEpoch + r,
                o = n % this.slotsPerEpoch;
            return [i, o]
        }
    }
    getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * As : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
    }
    getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
    }
    getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch ? Math.pow(2, e + Rf(As)) : this.slotsPerEpoch
    }
}
class Nm extends Error {
    constructor(e, n) {
        super(e), this.logs = void 0, this.logs = n
    }
}
class he extends Error {
    constructor({
        code: e,
        message: n,
        data: r
    }, i) {
        super(i != null ? `${i}: ${n}` : n), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError"
    }
}
var x9 = globalThis.fetch;
class E9 extends U_ {
    constructor(e, n, r) {
        const i = o => {
            const s = z_(o, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...n
            });
            return "socket" in s ? this.underlyingSocket = s.socket : this.underlyingSocket = s, s
        };
        super(i, e, n, r), this.underlyingSocket = void 0
    }
    call(...e) {
        var r;
        const n = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return n === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + n + ")"))
    }
    notify(...e) {
        var r;
        const n = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return n === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + n + ")"))
    }
}

function S9(t, e) {
    let n;
    try {
        n = t.layout.decode(e)
    } catch (r) {
        throw new Error("invalid instruction; " + r)
    }
    if (n.typeIndex !== t.index) throw new Error(`invalid account data; account type mismatch ${n.typeIndex} != ${t.index}`);
    return n
}
const Om = 56;
class Pm {
    constructor(e) {
        this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state
    }
    isActive() {
        const e = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === e
    }
    static deserialize(e) {
        const n = S9(b9, e),
            r = e.length - Om;
        tt(r >= 0, "lookup table is invalid"), tt(r % 32 === 0, "lookup table is invalid");
        const i = r / 32,
            {
                addresses: o
            } = de([fn(Ie(), i, "addresses")]).decode(e.slice(Om));
        return {
            deactivationSlot: n.deactivationSlot,
            lastExtendedSlot: n.lastExtendedSlot,
            lastExtendedSlotStartIndex: n.lastExtendedStartIndex,
            authority: n.authority.length !== 0 ? new pe(n.authority[0]) : void 0,
            addresses: o.map(s => new pe(s))
        }
    }
}
const b9 = {
        index: 1,
        layout: de([ge("typeIndex"), ls("deactivationSlot"), qt("lastExtendedSlot"), De("lastExtendedStartIndex"), De(), fn(Ie(), to(De(), -1), "authority")])
    },
    _9 = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;

function k9(t) {
    const e = t.match(_9);
    if (e == null) throw TypeError(`Failed to validate endpoint URL \`${t}\``);
    const [n, r, i, o] = e, s = t.startsWith("index.html") ? "wss:" : "ws:", a = i == null ? null : parseInt(i.slice(1), 10), l = a == null ? "" : `:${a+1}`;
    return `${s}//${r}${l}${o}`
}
const Pt = Oa(D0(pe), ne(), t => new pe(t)),
    W2 = U0([ne(), at("base64")]),
    G0 = Oa(D0(xe.Buffer), W2, t => xe.Buffer.from(t[0], "base64")),
    C9 = 30 * 1e3;

function A9(t) {
    if (/^https?:/.test(t) === !1) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return t
}

function et(t) {
    let e, n;
    if (typeof t == "string") e = t;
    else if (t) {
        const {
            commitment: r,
            ...i
        } = t;
        e = r, n = i
    }
    return {
        commitment: e,
        config: n
    }
}

function H2(t) {
    return Bn([ee({
        jsonrpc: at("2.0"),
        id: ne(),
        result: t
    }), ee({
        jsonrpc: at("2.0"),
        id: ne(),
        error: ee({
            code: Na(),
            message: ne(),
            data: ye(t_())
        })
    })])
}
const I9 = H2(Na());

function Ae(t) {
    return Oa(H2(t), I9, e => "error" in e ? e : {
        ...e,
        result: re(e.result, t)
    })
}

function pt(t) {
    return Ae(ee({
        context: ee({
            slot: $()
        }),
        value: t
    }))
}

function Xu(t) {
    return ee({
        context: ee({
            slot: $()
        }),
        value: t
    })
}

function Mf(t, e) {
    return t === 0 ? new ma({
        header: e.header,
        staticAccountKeys: e.accountKeys.map(n => new pe(n)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map(n => ({
            programIdIndex: n.programIdIndex,
            accountKeyIndexes: n.accounts,
            data: Wt.decode(n.data)
        })),
        addressTableLookups: e.addressTableLookups
    }) : new Yr(e)
}
const T9 = ee({
        foundation: $(),
        foundationTerm: $(),
        initial: $(),
        taper: $(),
        terminal: $()
    }),
    B9 = Ae(se(oe(ee({
        epoch: $(),
        effectiveSlot: $(),
        amount: $(),
        postBalance: $(),
        commission: ye(oe($()))
    })))),
    R9 = se(ee({
        slot: $(),
        prioritizationFee: $()
    })),
    M9 = ee({
        total: $(),
        validator: $(),
        foundation: $(),
        epoch: $()
    }),
    L9 = ee({
        epoch: $(),
        slotIndex: $(),
        slotsInEpoch: $(),
        absoluteSlot: $(),
        blockHeight: ye($()),
        transactionCount: ye($())
    }),
    N9 = ee({
        slotsPerEpoch: $(),
        leaderScheduleSlotOffset: $(),
        warmup: Tr(),
        firstNormalEpoch: $(),
        firstNormalSlot: $()
    }),
    O9 = x2(ne(), se($())),
    mo = oe(Bn([ee({}), ne()])),
    P9 = ee({
        err: mo
    }),
    j9 = at("receivedSignature"),
    D9 = ee({
        "solana-core": ne(),
        "feature-set": ye($())
    }),
    jm = pt(ee({
        err: oe(Bn([ee({}), ne()])),
        logs: oe(se(ne())),
        accounts: ye(oe(se(oe(ee({
            executable: Tr(),
            owner: ne(),
            lamports: $(),
            data: se(ne()),
            rentEpoch: ye($())
        }))))),
        unitsConsumed: ye($()),
        returnData: ye(oe(ee({
            programId: ne(),
            data: U0([ne(), at("base64")])
        })))
    })),
    U9 = pt(ee({
        byIdentity: x2(ne(), se($())),
        range: ee({
            firstSlot: $(),
            lastSlot: $()
        })
    }));

function z9(t, e, n, r, i, o) {
    const s = n || x9;
    let a;
    o != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let l;
    return r && (l = async (h, g) => {
        const w = await new Promise((C, B) => {
            try {
                r(h, g, (I, R) => C([I, R]))
            } catch (I) {
                B(I)
            }
        });
        return await s(...w)
    }), new B_(async (h, g) => {
        const w = {
            method: "POST",
            body: h,
            agent: a,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, e || {}, F7)
        };
        try {
            let C = 5,
                B, I = 500;
            for (; l ? B = await l(t, w) : B = await s(t, w), !(B.status !== 429 || i === !0 || (C -= 1, C === 0));) console.error(`Server responded with ${B.status} ${B.statusText}.  Retrying after ${I}ms delay...`), await ko(I), I *= 2;
            const R = await B.text();
            B.ok ? g(null, R) : g(new Error(`${B.status} ${B.statusText}: ${R}`))
        } catch (C) {
            C instanceof Error && g(C)
        }
    }, {})
}

function F9(t) {
    return (e, n) => new Promise((r, i) => {
        t.request(e, n, (o, s) => {
            if (o) {
                i(o);
                return
            }
            r(s)
        })
    })
}

function W9(t) {
    return e => new Promise((n, r) => {
        e.length === 0 && n([]);
        const i = e.map(o => t.request(o.methodName, o.args));
        t.request(i, (o, s) => {
            if (o) {
                r(o);
                return
            }
            n(s)
        })
    })
}
const H9 = Ae(T9),
    $9 = Ae(M9),
    K9 = Ae(R9),
    q9 = Ae(L9),
    V9 = Ae(N9),
    G9 = Ae(O9),
    Z9 = Ae($()),
    Y9 = pt(ee({
        total: $(),
        circulating: $(),
        nonCirculating: $(),
        nonCirculatingAccounts: se(Pt)
    })),
    Jd = ee({
        amount: ne(),
        uiAmount: oe($()),
        decimals: $(),
        uiAmountString: ye(ne())
    }),
    Q9 = pt(se(ee({
        address: Pt,
        amount: ne(),
        uiAmount: oe($()),
        decimals: $(),
        uiAmountString: ye(ne())
    }))),
    X9 = pt(se(ee({
        pubkey: Pt,
        account: ee({
            executable: Tr(),
            owner: Pt,
            lamports: $(),
            data: G0,
            rentEpoch: $()
        })
    }))),
    eh = ee({
        program: ne(),
        parsed: Na(),
        space: $()
    }),
    J9 = pt(se(ee({
        pubkey: Pt,
        account: ee({
            executable: Tr(),
            owner: Pt,
            lamports: $(),
            data: eh,
            rentEpoch: $()
        })
    }))),
    e7 = pt(se(ee({
        lamports: $(),
        address: Pt
    }))),
    va = ee({
        executable: Tr(),
        owner: Pt,
        lamports: $(),
        data: G0,
        rentEpoch: $()
    }),
    t7 = ee({
        pubkey: Pt,
        account: va
    }),
    n7 = Oa(Bn([D0(xe.Buffer), eh]), Bn([W2, eh]), t => Array.isArray(t) ? re(t, G0) : t),
    th = ee({
        executable: Tr(),
        owner: Pt,
        lamports: $(),
        data: n7,
        rentEpoch: $()
    }),
    r7 = ee({
        pubkey: Pt,
        account: th
    }),
    i7 = ee({
        state: Bn([at("active"), at("inactive"), at("activating"), at("deactivating")]),
        active: $(),
        inactive: $()
    }),
    o7 = Ae(se(ee({
        signature: ne(),
        slot: $(),
        err: mo,
        memo: oe(ne()),
        blockTime: ye(oe($()))
    }))),
    s7 = Ae(se(ee({
        signature: ne(),
        slot: $(),
        err: mo,
        memo: oe(ne()),
        blockTime: ye(oe($()))
    }))),
    a7 = ee({
        subscription: $(),
        result: Xu(va)
    }),
    l7 = ee({
        pubkey: Pt,
        account: va
    }),
    u7 = ee({
        subscription: $(),
        result: Xu(l7)
    }),
    c7 = ee({
        parent: $(),
        slot: $(),
        root: $()
    }),
    f7 = ee({
        subscription: $(),
        result: c7
    }),
    d7 = Bn([ee({
        type: Bn([at("firstShredReceived"), at("completed"), at("optimisticConfirmation"), at("root")]),
        slot: $(),
        timestamp: $()
    }), ee({
        type: at("createdBank"),
        parent: $(),
        slot: $(),
        timestamp: $()
    }), ee({
        type: at("frozen"),
        slot: $(),
        timestamp: $(),
        stats: ee({
            numTransactionEntries: $(),
            numSuccessfulTransactions: $(),
            numFailedTransactions: $(),
            maxTransactionsPerEntry: $()
        })
    }), ee({
        type: at("dead"),
        slot: $(),
        timestamp: $(),
        err: ne()
    })]),
    h7 = ee({
        subscription: $(),
        result: d7
    }),
    p7 = ee({
        subscription: $(),
        result: Xu(Bn([P9, j9]))
    }),
    m7 = ee({
        subscription: $(),
        result: $()
    }),
    g7 = ee({
        pubkey: ne(),
        gossip: oe(ne()),
        tpu: oe(ne()),
        rpc: oe(ne()),
        version: oe(ne())
    }),
    Dm = ee({
        votePubkey: ne(),
        nodePubkey: ne(),
        activatedStake: $(),
        epochVoteAccount: Tr(),
        epochCredits: se(U0([$(), $(), $()])),
        commission: $(),
        lastVote: $(),
        rootSlot: oe($())
    }),
    y7 = Ae(ee({
        current: se(Dm),
        delinquent: se(Dm)
    })),
    v7 = Bn([at("processed"), at("confirmed"), at("finalized")]),
    w7 = ee({
        slot: $(),
        confirmations: oe($()),
        err: mo,
        confirmationStatus: ye(v7)
    }),
    x7 = pt(se(oe(w7))),
    E7 = Ae($()),
    $2 = ee({
        accountKey: Pt,
        writableIndexes: se($()),
        readonlyIndexes: se($())
    }),
    Z0 = ee({
        signatures: se(ne()),
        message: ee({
            accountKeys: se(ne()),
            header: ee({
                numRequiredSignatures: $(),
                numReadonlySignedAccounts: $(),
                numReadonlyUnsignedAccounts: $()
            }),
            instructions: se(ee({
                accounts: se($()),
                data: ne(),
                programIdIndex: $()
            })),
            recentBlockhash: ne(),
            addressTableLookups: ye(se($2))
        })
    }),
    K2 = ee({
        pubkey: Pt,
        signer: Tr(),
        writable: Tr(),
        source: ye(Bn([at("transaction"), at("lookupTable")]))
    }),
    q2 = ee({
        accountKeys: se(K2),
        signatures: se(ne())
    }),
    V2 = ee({
        parsed: Na(),
        program: ne(),
        programId: Pt
    }),
    G2 = ee({
        accounts: se(Pt),
        data: ne(),
        programId: Pt
    }),
    S7 = Bn([G2, V2]),
    b7 = Bn([ee({
        parsed: Na(),
        program: ne(),
        programId: ne()
    }), ee({
        accounts: se(ne()),
        data: ne(),
        programId: ne()
    })]),
    Z2 = Oa(S7, b7, t => "accounts" in t ? re(t, G2) : re(t, V2)),
    Y2 = ee({
        signatures: se(ne()),
        message: ee({
            accountKeys: se(K2),
            instructions: se(Z2),
            recentBlockhash: ne(),
            addressTableLookups: ye(oe(se($2)))
        })
    }),
    du = ee({
        accountIndex: $(),
        mint: ne(),
        owner: ye(ne()),
        uiTokenAmount: Jd
    }),
    Q2 = ee({
        writable: se(Pt),
        readonly: se(Pt)
    }),
    Ju = ee({
        err: mo,
        fee: $(),
        innerInstructions: ye(oe(se(ee({
            index: $(),
            instructions: se(ee({
                accounts: se($()),
                data: ne(),
                programIdIndex: $()
            }))
        })))),
        preBalances: se($()),
        postBalances: se($()),
        logMessages: ye(oe(se(ne()))),
        preTokenBalances: ye(oe(se(du))),
        postTokenBalances: ye(oe(se(du))),
        loadedAddresses: ye(Q2),
        computeUnitsConsumed: ye($())
    }),
    Y0 = ee({
        err: mo,
        fee: $(),
        innerInstructions: ye(oe(se(ee({
            index: $(),
            instructions: se(Z2)
        })))),
        preBalances: se($()),
        postBalances: se($()),
        logMessages: ye(oe(se(ne()))),
        preTokenBalances: ye(oe(se(du))),
        postTokenBalances: ye(oe(se(du))),
        loadedAddresses: ye(Q2),
        computeUnitsConsumed: ye($())
    }),
    ys = Bn([at(0), at("legacy")]),
    go = ee({
        pubkey: ne(),
        lamports: $(),
        postBalance: oe($()),
        rewardType: oe(ne()),
        commission: ye(oe($()))
    }),
    _7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        transactions: se(ee({
            transaction: Z0,
            meta: oe(Ju),
            version: ye(ys)
        })),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    k7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    C7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        transactions: se(ee({
            transaction: q2,
            meta: oe(Ju),
            version: ye(ys)
        })),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    A7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        transactions: se(ee({
            transaction: Y2,
            meta: oe(Y0),
            version: ye(ys)
        })),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    I7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        transactions: se(ee({
            transaction: q2,
            meta: oe(Y0),
            version: ye(ys)
        })),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    T7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        rewards: ye(se(go)),
        blockTime: oe($()),
        blockHeight: oe($())
    }))),
    B7 = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        transactions: se(ee({
            transaction: Z0,
            meta: oe(Ju)
        })),
        rewards: ye(se(go)),
        blockTime: oe($())
    }))),
    Um = Ae(oe(ee({
        blockhash: ne(),
        previousBlockhash: ne(),
        parentSlot: $(),
        signatures: se(ne()),
        blockTime: oe($())
    }))),
    Lf = Ae(oe(ee({
        slot: $(),
        meta: oe(Ju),
        blockTime: ye(oe($())),
        transaction: Z0,
        version: ye(ys)
    }))),
    fl = Ae(oe(ee({
        slot: $(),
        transaction: Y2,
        meta: oe(Y0),
        blockTime: ye(oe($())),
        version: ye(ys)
    }))),
    R7 = pt(ee({
        blockhash: ne(),
        feeCalculator: ee({
            lamportsPerSignature: $()
        })
    })),
    M7 = pt(ee({
        blockhash: ne(),
        lastValidBlockHeight: $()
    })),
    L7 = pt(Tr()),
    N7 = ee({
        slot: $(),
        numTransactions: $(),
        numSlots: $(),
        samplePeriodSecs: $()
    }),
    O7 = Ae(se(N7)),
    P7 = pt(oe(ee({
        feeCalculator: ee({
            lamportsPerSignature: $()
        })
    }))),
    j7 = Ae(ne()),
    D7 = Ae(ne()),
    U7 = ee({
        err: mo,
        logs: se(ne()),
        signature: ne()
    }),
    z7 = ee({
        result: Xu(U7),
        subscription: $()
    }),
    F7 = {
        "solana-client": "js/0.0.0-development"
    };
class W7 {
    constructor(e, n) {
        this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
            const u = {};
            return async h => {
                const {
                    commitment: g,
                    config: w
                } = et(h), C = this._buildArgs([], g, void 0, w), B = Lm(C);
                return u[B] = u[B] ?? (async () => {
                    try {
                        const I = await this._rpcRequest("getBlockHeight", C),
                            R = re(I, Ae($()));
                        if ("error" in R) throw new he(R.error, "failed to get block height information");
                        return R.result
                    } finally {
                        delete u[B]
                    }
                })(), await u[B]
            }
        })();
        let r, i, o, s, a, l;
        n && typeof n == "string" ? this._commitment = n : n && (this._commitment = n.commitment, this._confirmTransactionInitialTimeout = n.confirmTransactionInitialTimeout, r = n.wsEndpoint, i = n.httpHeaders, o = n.fetch, s = n.fetchMiddleware, a = n.disableRetryOnRateLimit, l = n.httpAgent), this._rpcEndpoint = A9(e), this._rpcWsEndpoint = r || k9(e), this._rpcClient = z9(e, i, o, s, a, l), this._rpcRequest = F9(this._rpcClient), this._rpcBatchRequest = W9(this._rpcClient), this._rpcWebSocket = new E9(this._rpcWsEndpoint, {
            autoconnect: !1,
            max_reconnects: 1 / 0
        }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
    }
    get commitment() {
        return this._commitment
    }
    get rpcEndpoint() {
        return this._rpcEndpoint
    }
    async getBalanceAndContext(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgs([e.toBase58()], r, void 0, i), s = await this._rpcRequest("getBalance", o), a = re(s, pt($()));
        if ("error" in a) throw new he(a.error, `failed to get balance for ${e.toBase58()}`);
        return a.result
    }
    async getBalance(e, n) {
        return await this.getBalanceAndContext(e, n).then(r => r.value).catch(r => {
            throw new Error("failed to get balance of account " + e.toBase58() + ": " + r)
        })
    }
    async getBlockTime(e) {
        const n = await this._rpcRequest("getBlockTime", [e]),
            r = re(n, Ae(oe($())));
        if ("error" in r) throw new he(r.error, `failed to get block time for slot ${e}`);
        return r.result
    }
    async getMinimumLedgerSlot() {
        const e = await this._rpcRequest("minimumLedgerSlot", []),
            n = re(e, Ae($()));
        if ("error" in n) throw new he(n.error, "failed to get minimum ledger slot");
        return n.result
    }
    async getFirstAvailableBlock() {
        const e = await this._rpcRequest("getFirstAvailableBlock", []),
            n = re(e, Z9);
        if ("error" in n) throw new he(n.error, "failed to get first available block");
        return n.result
    }
    async getSupply(e) {
        let n = {};
        typeof e == "string" ? n = {
            commitment: e
        } : e ? n = {
            ...e,
            commitment: e && e.commitment || this.commitment
        } : n = {
            commitment: this.commitment
        };
        const r = await this._rpcRequest("getSupply", [n]),
            i = re(r, Y9);
        if ("error" in i) throw new he(i.error, "failed to get supply");
        return i.result
    }
    async getTokenSupply(e, n) {
        const r = this._buildArgs([e.toBase58()], n),
            i = await this._rpcRequest("getTokenSupply", r),
            o = re(i, pt(Jd));
        if ("error" in o) throw new he(o.error, "failed to get token supply");
        return o.result
    }
    async getTokenAccountBalance(e, n) {
        const r = this._buildArgs([e.toBase58()], n),
            i = await this._rpcRequest("getTokenAccountBalance", r),
            o = re(i, pt(Jd));
        if ("error" in o) throw new he(o.error, "failed to get token account balance");
        return o.result
    }
    async getTokenAccountsByOwner(e, n, r) {
        const {
            commitment: i,
            config: o
        } = et(r);
        let s = [e.toBase58()];
        "mint" in n ? s.push({
            mint: n.mint.toBase58()
        }) : s.push({
            programId: n.programId.toBase58()
        });
        const a = this._buildArgs(s, i, "base64", o),
            l = await this._rpcRequest("getTokenAccountsByOwner", a),
            u = re(l, X9);
        if ("error" in u) throw new he(u.error, `failed to get token accounts owned by account ${e.toBase58()}`);
        return u.result
    }
    async getParsedTokenAccountsByOwner(e, n, r) {
        let i = [e.toBase58()];
        "mint" in n ? i.push({
            mint: n.mint.toBase58()
        }) : i.push({
            programId: n.programId.toBase58()
        });
        const o = this._buildArgs(i, r, "jsonParsed"),
            s = await this._rpcRequest("getTokenAccountsByOwner", o),
            a = re(s, J9);
        if ("error" in a) throw new he(a.error, `failed to get token accounts owned by account ${e.toBase58()}`);
        return a.result
    }
    async getLargestAccounts(e) {
        const n = {
                ...e,
                commitment: e && e.commitment || this.commitment
            },
            r = n.filter || n.commitment ? [n] : [],
            i = await this._rpcRequest("getLargestAccounts", r),
            o = re(i, e7);
        if ("error" in o) throw new he(o.error, "failed to get largest accounts");
        return o.result
    }
    async getTokenLargestAccounts(e, n) {
        const r = this._buildArgs([e.toBase58()], n),
            i = await this._rpcRequest("getTokenLargestAccounts", r),
            o = re(i, Q9);
        if ("error" in o) throw new he(o.error, "failed to get token largest accounts");
        return o.result
    }
    async getAccountInfoAndContext(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgs([e.toBase58()], r, "base64", i), s = await this._rpcRequest("getAccountInfo", o), a = re(s, pt(oe(va)));
        if ("error" in a) throw new he(a.error, `failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getParsedAccountInfo(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgs([e.toBase58()], r, "jsonParsed", i), s = await this._rpcRequest("getAccountInfo", o), a = re(s, pt(oe(th)));
        if ("error" in a) throw new he(a.error, `failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getAccountInfo(e, n) {
        try {
            return (await this.getAccountInfoAndContext(e, n)).value
        } catch (r) {
            throw new Error("failed to get info about account " + e.toBase58() + ": " + r)
        }
    }
    async getMultipleParsedAccounts(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = e.map(u => u.toBase58()), s = this._buildArgs([o], r, "jsonParsed", i), a = await this._rpcRequest("getMultipleAccounts", s), l = re(a, pt(se(oe(th))));
        if ("error" in l) throw new he(l.error, `failed to get info for accounts ${o}`);
        return l.result
    }
    async getMultipleAccountsInfoAndContext(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = e.map(u => u.toBase58()), s = this._buildArgs([o], r, "base64", i), a = await this._rpcRequest("getMultipleAccounts", s), l = re(a, pt(se(oe(va))));
        if ("error" in l) throw new he(l.error, `failed to get info for accounts ${o}`);
        return l.result
    }
    async getMultipleAccountsInfo(e, n) {
        return (await this.getMultipleAccountsInfoAndContext(e, n)).value
    }
    async getStakeActivation(e, n, r) {
        const {
            commitment: i,
            config: o
        } = et(n), s = this._buildArgs([e.toBase58()], i, void 0, {
            ...o,
            epoch: r ?? (o == null ? void 0 : o.epoch)
        }), a = await this._rpcRequest("getStakeActivation", s), l = re(a, Ae(i7));
        if ("error" in l) throw new he(l.error, `failed to get Stake Activation ${e.toBase58()}`);
        return l.result
    }
    async getProgramAccounts(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), {
            encoding: o,
            ...s
        } = i || {}, a = this._buildArgs([e.toBase58()], r, o || "base64", s), l = await this._rpcRequest("getProgramAccounts", a), u = se(t7), h = s.withContext === !0 ? re(l, pt(u)) : re(l, Ae(u));
        if ("error" in h) throw new he(h.error, `failed to get accounts owned by program ${e.toBase58()}`);
        return h.result
    }
    async getParsedProgramAccounts(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgs([e.toBase58()], r, "jsonParsed", i), s = await this._rpcRequest("getProgramAccounts", o), a = re(s, Ae(se(r7)));
        if ("error" in a) throw new he(a.error, `failed to get accounts owned by program ${e.toBase58()}`);
        return a.result
    }
    async confirmTransaction(e, n) {
        var o;
        let r;
        if (typeof e == "string") r = e;
        else {
            const s = e;
            if ((o = s.abortSignal) != null && o.aborted) return Promise.reject(s.abortSignal.reason);
            r = s.signature
        }
        let i;
        try {
            i = Wt.decode(r)
        } catch {
            throw new Error("signature must be base58 encoded: " + r)
        }
        return tt(i.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: n || this.commitment,
            signature: r
        }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: n || this.commitment,
            strategy: e
        }) : await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: n || this.commitment,
            strategy: e
        })
    }
    getCancellationPromise(e) {
        return new Promise((n, r) => {
            e != null && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                r(e.reason)
            }))
        })
    }
    getTransactionConfirmationPromise({
        commitment: e,
        signature: n
    }) {
        let r, i, o = !1;
        const s = new Promise((l, u) => {
            try {
                r = this.onSignature(n, (g, w) => {
                    r = void 0;
                    const C = {
                        context: w,
                        value: g
                    };
                    l({
                        __type: li.PROCESSED,
                        response: C
                    })
                }, e);
                const h = new Promise(g => {
                    r == null ? g() : i = this._onSubscriptionStateChange(r, w => {
                        w === "subscribed" && g()
                    })
                });
                (async () => {
                    if (await h, o) return;
                    const g = await this.getSignatureStatus(n);
                    if (o || g == null) return;
                    const {
                        context: w,
                        value: C
                    } = g;
                    if (C != null)
                        if (C != null && C.err) u(C.err);
                        else {
                            switch (e) {
                                case "confirmed":
                                case "single":
                                case "singleGossip": {
                                    if (C.confirmationStatus === "processed") return;
                                    break
                                }
                                case "finalized":
                                case "max":
                                case "root": {
                                    if (C.confirmationStatus === "processed" || C.confirmationStatus === "confirmed") return;
                                    break
                                }
                                case "processed":
                                case "recent":
                            }
                            o = !0, l({
                                __type: li.PROCESSED,
                                response: {
                                    context: w,
                                    value: C
                                }
                            })
                        }
                })()
            } catch (h) {
                u(h)
            }
        });
        return {
            abortConfirmation: () => {
                i && (i(), i = void 0), r != null && (this.removeSignatureListener(r), r = void 0)
            },
            confirmationPromise: s
        }
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: e,
        strategy: {
            abortSignal: n,
            lastValidBlockHeight: r,
            signature: i
        }
    }) {
        let o = !1;
        const s = new Promise(g => {
                const w = async () => {
                    try {
                        return await this.getBlockHeight(e)
                    } catch {
                        return -1
                    }
                };
                (async () => {
                    let C = await w();
                    if (!o) {
                        for (; C <= r;)
                            if (await ko(1e3), o || (C = await w(), o)) return;
                        g({
                            __type: li.BLOCKHEIGHT_EXCEEDED
                        })
                    }
                })()
            }),
            {
                abortConfirmation: a,
                confirmationPromise: l
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: i
            }),
            u = this.getCancellationPromise(n);
        let h;
        try {
            const g = await Promise.race([u, l, s]);
            if (g.__type === li.PROCESSED) h = g.response;
            else throw new D2(i)
        } finally {
            o = !0, a()
        }
        return h
    }
    async confirmTransactionUsingDurableNonceStrategy({
        commitment: e,
        strategy: {
            abortSignal: n,
            minContextSlot: r,
            nonceAccountPubkey: i,
            nonceValue: o,
            signature: s
        }
    }) {
        let a = !1;
        const l = new Promise(C => {
                let B = o,
                    I = null;
                const R = async () => {
                    try {
                        const {
                            context: _,
                            value: b
                        } = await this.getNonceAndContext(i, {
                            commitment: e,
                            minContextSlot: r
                        });
                        return I = _.slot, b == null ? void 0 : b.nonce
                    } catch {
                        return B
                    }
                };
                (async () => {
                    if (B = await R(), !a)
                        for (;;) {
                            if (o !== B) {
                                C({
                                    __type: li.NONCE_INVALID,
                                    slotInWhichNonceDidAdvance: I
                                });
                                return
                            }
                            if (await ko(2e3), a || (B = await R(), a)) return
                        }
                })()
            }),
            {
                abortConfirmation: u,
                confirmationPromise: h
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: s
            }),
            g = this.getCancellationPromise(n);
        let w;
        try {
            const C = await Promise.race([g, h, l]);
            if (C.__type === li.PROCESSED) w = C.response;
            else {
                let B;
                for (;;) {
                    const I = await this.getSignatureStatus(s);
                    if (I == null) break;
                    if (I.context.slot < (C.slotInWhichNonceDidAdvance ?? r)) {
                        await ko(400);
                        continue
                    }
                    B = I;
                    break
                }
                if (B != null && B.value) {
                    const I = e || "finalized",
                        {
                            confirmationStatus: R
                        } = B.value;
                    switch (I) {
                        case "processed":
                        case "recent":
                            if (R !== "processed" && R !== "confirmed" && R !== "finalized") throw new Os(s);
                            break;
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                            if (R !== "confirmed" && R !== "finalized") throw new Os(s);
                            break;
                        case "finalized":
                        case "max":
                        case "root":
                            if (R !== "finalized") throw new Os(s);
                            break;
                        default:
                    }
                    w = {
                        context: B.context,
                        value: {
                            err: B.value.err
                        }
                    }
                } else throw new Os(s)
            }
        } finally {
            a = !0, u()
        }
        return w
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: e,
        signature: n
    }) {
        let r;
        const i = new Promise(l => {
                let u = this._confirmTransactionInitialTimeout || 6e4;
                switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                        u = this._confirmTransactionInitialTimeout || 3e4;
                        break
                    }
                }
                r = setTimeout(() => l({
                    __type: li.TIMED_OUT,
                    timeoutMs: u
                }), u)
            }),
            {
                abortConfirmation: o,
                confirmationPromise: s
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: n
            });
        let a;
        try {
            const l = await Promise.race([s, i]);
            if (l.__type === li.PROCESSED) a = l.response;
            else throw new U2(n, l.timeoutMs / 1e3)
        } finally {
            clearTimeout(r), o()
        }
        return a
    }
    async getClusterNodes() {
        const e = await this._rpcRequest("getClusterNodes", []),
            n = re(e, Ae(se(g7)));
        if ("error" in n) throw new he(n.error, "failed to get cluster nodes");
        return n.result
    }
    async getVoteAccounts(e) {
        const n = this._buildArgs([], e),
            r = await this._rpcRequest("getVoteAccounts", n),
            i = re(r, y7);
        if ("error" in i) throw new he(i.error, "failed to get vote accounts");
        return i.result
    }
    async getSlot(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, void 0, r), o = await this._rpcRequest("getSlot", i), s = re(o, Ae($()));
        if ("error" in s) throw new he(s.error, "failed to get slot");
        return s.result
    }
    async getSlotLeader(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, void 0, r), o = await this._rpcRequest("getSlotLeader", i), s = re(o, Ae(ne()));
        if ("error" in s) throw new he(s.error, "failed to get slot leader");
        return s.result
    }
    async getSlotLeaders(e, n) {
        const r = [e, n],
            i = await this._rpcRequest("getSlotLeaders", r),
            o = re(i, Ae(se(Pt)));
        if ("error" in o) throw new he(o.error, "failed to get slot leaders");
        return o.result
    }
    async getSignatureStatus(e, n) {
        const {
            context: r,
            value: i
        } = await this.getSignatureStatuses([e], n);
        tt(i.length === 1);
        const o = i[0];
        return {
            context: r,
            value: o
        }
    }
    async getSignatureStatuses(e, n) {
        const r = [e];
        n && r.push(n);
        const i = await this._rpcRequest("getSignatureStatuses", r),
            o = re(i, x7);
        if ("error" in o) throw new he(o.error, "failed to get signature status");
        return o.result
    }
    async getTransactionCount(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, void 0, r), o = await this._rpcRequest("getTransactionCount", i), s = re(o, Ae($()));
        if ("error" in s) throw new he(s.error, "failed to get transaction count");
        return s.result
    }
    async getTotalSupply(e) {
        return (await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0
        })).value.total
    }
    async getInflationGovernor(e) {
        const n = this._buildArgs([], e),
            r = await this._rpcRequest("getInflationGovernor", n),
            i = re(r, H9);
        if ("error" in i) throw new he(i.error, "failed to get inflation");
        return i.result
    }
    async getInflationReward(e, n, r) {
        const {
            commitment: i,
            config: o
        } = et(r), s = this._buildArgs([e.map(u => u.toBase58())], i, void 0, {
            ...o,
            epoch: n ?? (o == null ? void 0 : o.epoch)
        }), a = await this._rpcRequest("getInflationReward", s), l = re(a, B9);
        if ("error" in l) throw new he(l.error, "failed to get inflation reward");
        return l.result
    }
    async getInflationRate() {
        const e = await this._rpcRequest("getInflationRate", []),
            n = re(e, $9);
        if ("error" in n) throw new he(n.error, "failed to get inflation rate");
        return n.result
    }
    async getEpochInfo(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, void 0, r), o = await this._rpcRequest("getEpochInfo", i), s = re(o, q9);
        if ("error" in s) throw new he(s.error, "failed to get epoch info");
        return s.result
    }
    async getEpochSchedule() {
        const e = await this._rpcRequest("getEpochSchedule", []),
            n = re(e, V9);
        if ("error" in n) throw new he(n.error, "failed to get epoch schedule");
        const r = n.result;
        return new w9(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
    }
    async getLeaderSchedule() {
        const e = await this._rpcRequest("getLeaderSchedule", []),
            n = re(e, G9);
        if ("error" in n) throw new he(n.error, "failed to get leader schedule");
        return n.result
    }
    async getMinimumBalanceForRentExemption(e, n) {
        const r = this._buildArgs([e], n),
            i = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
            o = re(i, E7);
        return "error" in o ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : o.result
    }
    async getRecentBlockhashAndContext(e) {
        const n = this._buildArgs([], e),
            r = await this._rpcRequest("getRecentBlockhash", n),
            i = re(r, R7);
        if ("error" in i) throw new he(i.error, "failed to get recent blockhash");
        return i.result
    }
    async getRecentPerformanceSamples(e) {
        const n = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
            r = re(n, O7);
        if ("error" in r) throw new he(r.error, "failed to get recent performance samples");
        return r.result
    }
    async getFeeCalculatorForBlockhash(e, n) {
        const r = this._buildArgs([e], n),
            i = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
            o = re(i, P7);
        if ("error" in o) throw new he(o.error, "failed to get fee calculator");
        const {
            context: s,
            value: a
        } = o.result;
        return {
            context: s,
            value: a !== null ? a.feeCalculator : null
        }
    }
    async getFeeForMessage(e, n) {
        const r = Gt(e.serialize()).toString("base64"),
            i = this._buildArgs([r], n),
            o = await this._rpcRequest("getFeeForMessage", i),
            s = re(o, pt(oe($())));
        if ("error" in s) throw new he(s.error, "failed to get fee for message");
        if (s.result === null) throw new Error("invalid blockhash");
        return s.result
    }
    async getRecentPrioritizationFees(e) {
        var s;
        const n = (s = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : s.map(a => a.toBase58()),
            r = n != null && n.length ? [n] : [],
            i = await this._rpcRequest("getRecentPrioritizationFees", r),
            o = re(i, K9);
        if ("error" in o) throw new he(o.error, "failed to get recent prioritization fees");
        return o.result
    }
    async getRecentBlockhash(e) {
        try {
            return (await this.getRecentBlockhashAndContext(e)).value
        } catch (n) {
            throw new Error("failed to get recent blockhash: " + n)
        }
    }
    async getLatestBlockhash(e) {
        try {
            return (await this.getLatestBlockhashAndContext(e)).value
        } catch (n) {
            throw new Error("failed to get recent blockhash: " + n)
        }
    }
    async getLatestBlockhashAndContext(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, void 0, r), o = await this._rpcRequest("getLatestBlockhash", i), s = re(o, M7);
        if ("error" in s) throw new he(s.error, "failed to get latest blockhash");
        return s.result
    }
    async isBlockhashValid(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgs([e], r, void 0, i), s = await this._rpcRequest("isBlockhashValid", o), a = re(s, L7);
        if ("error" in a) throw new he(a.error, "failed to determine if the blockhash `" + e + "`is valid");
        return a.result
    }
    async getVersion() {
        const e = await this._rpcRequest("getVersion", []),
            n = re(e, Ae(D9));
        if ("error" in n) throw new he(n.error, "failed to get version");
        return n.result
    }
    async getGenesisHash() {
        const e = await this._rpcRequest("getGenesisHash", []),
            n = re(e, Ae(ne()));
        if ("error" in n) throw new he(n.error, "failed to get genesis hash");
        return n.result
    }
    async getBlock(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgsAtLeastConfirmed([e], r, void 0, i), s = await this._rpcRequest("getBlock", o);
        try {
            switch (i == null ? void 0 : i.transactionDetails) {
                case "accounts": {
                    const a = re(s, C7);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                case "none": {
                    const a = re(s, k7);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                default: {
                    const a = re(s, _7);
                    if ("error" in a) throw a.error;
                    const {
                        result: l
                    } = a;
                    return l ? {
                        ...l,
                        transactions: l.transactions.map(({
                            transaction: u,
                            meta: h,
                            version: g
                        }) => ({
                            meta: h,
                            transaction: {
                                ...u,
                                message: Mf(g, u.message)
                            },
                            version: g
                        }))
                    } : null
                }
            }
        } catch (a) {
            throw new he(a, "failed to get confirmed block")
        }
    }
    async getParsedBlock(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), s = await this._rpcRequest("getBlock", o);
        try {
            switch (i == null ? void 0 : i.transactionDetails) {
                case "accounts": {
                    const a = re(s, I7);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                case "none": {
                    const a = re(s, T7);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                default: {
                    const a = re(s, A7);
                    if ("error" in a) throw a.error;
                    return a.result
                }
            }
        } catch (a) {
            throw new he(a, "failed to get block")
        }
    }
    async getBlockProduction(e) {
        let n, r;
        if (typeof e == "string") r = e;
        else if (e) {
            const {
                commitment: a,
                ...l
            } = e;
            r = a, n = l
        }
        const i = this._buildArgs([], r, "base64", n),
            o = await this._rpcRequest("getBlockProduction", i),
            s = re(o, U9);
        if ("error" in s) throw new he(s.error, "failed to get block production information");
        return s.result
    }
    async getTransaction(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgsAtLeastConfirmed([e], r, void 0, i), s = await this._rpcRequest("getTransaction", o), a = re(s, Lf);
        if ("error" in a) throw new he(a.error, "failed to get transaction");
        const l = a.result;
        return l && {
            ...l,
            transaction: {
                ...l.transaction,
                message: Mf(l.version, l.transaction.message)
            }
        }
    }
    async getParsedTransaction(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), s = await this._rpcRequest("getTransaction", o), a = re(s, fl);
        if ("error" in a) throw new he(a.error, "failed to get transaction");
        return a.result
    }
    async getParsedTransactions(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = e.map(l => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([l], r, "jsonParsed", i)
        }));
        return (await this._rpcBatchRequest(o)).map(l => {
            const u = re(l, fl);
            if ("error" in u) throw new he(u.error, "failed to get transactions");
            return u.result
        })
    }
    async getTransactions(e, n) {
        const {
            commitment: r,
            config: i
        } = et(n), o = e.map(l => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([l], r, void 0, i)
        }));
        return (await this._rpcBatchRequest(o)).map(l => {
            const u = re(l, Lf);
            if ("error" in u) throw new he(u.error, "failed to get transactions");
            const h = u.result;
            return h && {
                ...h,
                transaction: {
                    ...h.transaction,
                    message: Mf(h.version, h.transaction.message)
                }
            }
        })
    }
    async getConfirmedBlock(e, n) {
        const r = this._buildArgsAtLeastConfirmed([e], n),
            i = await this._rpcRequest("getConfirmedBlock", r),
            o = re(i, B7);
        if ("error" in o) throw new he(o.error, "failed to get confirmed block");
        const s = o.result;
        if (!s) throw new Error("Confirmed block " + e + " not found");
        const a = {
            ...s,
            transactions: s.transactions.map(({
                transaction: l,
                meta: u
            }) => {
                const h = new Yr(l.message);
                return {
                    meta: u,
                    transaction: {
                        ...l,
                        message: h
                    }
                }
            })
        };
        return {
            ...a,
            transactions: a.transactions.map(({
                transaction: l,
                meta: u
            }) => ({
                meta: u,
                transaction: Dn.populate(l.message, l.signatures)
            }))
        }
    }
    async getBlocks(e, n, r) {
        const i = this._buildArgsAtLeastConfirmed(n !== void 0 ? [e, n] : [e], r),
            o = await this._rpcRequest("getBlocks", i),
            s = re(o, Ae(se($())));
        if ("error" in s) throw new he(s.error, "failed to get blocks");
        return s.result
    }
    async getBlockSignatures(e, n) {
        const r = this._buildArgsAtLeastConfirmed([e], n, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            i = await this._rpcRequest("getBlock", r),
            o = re(i, Um);
        if ("error" in o) throw new he(o.error, "failed to get block");
        const s = o.result;
        if (!s) throw new Error("Block " + e + " not found");
        return s
    }
    async getConfirmedBlockSignatures(e, n) {
        const r = this._buildArgsAtLeastConfirmed([e], n, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            i = await this._rpcRequest("getConfirmedBlock", r),
            o = re(i, Um);
        if ("error" in o) throw new he(o.error, "failed to get confirmed block");
        const s = o.result;
        if (!s) throw new Error("Confirmed block " + e + " not found");
        return s
    }
    async getConfirmedTransaction(e, n) {
        const r = this._buildArgsAtLeastConfirmed([e], n),
            i = await this._rpcRequest("getConfirmedTransaction", r),
            o = re(i, Lf);
        if ("error" in o) throw new he(o.error, "failed to get transaction");
        const s = o.result;
        if (!s) return s;
        const a = new Yr(s.transaction.message),
            l = s.transaction.signatures;
        return {
            ...s,
            transaction: Dn.populate(a, l)
        }
    }
    async getParsedConfirmedTransaction(e, n) {
        const r = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed"),
            i = await this._rpcRequest("getConfirmedTransaction", r),
            o = re(i, fl);
        if ("error" in o) throw new he(o.error, "failed to get confirmed transaction");
        return o.result
    }
    async getParsedConfirmedTransactions(e, n) {
        const r = e.map(s => ({
            methodName: "getConfirmedTransaction",
            args: this._buildArgsAtLeastConfirmed([s], n, "jsonParsed")
        }));
        return (await this._rpcBatchRequest(r)).map(s => {
            const a = re(s, fl);
            if ("error" in a) throw new he(a.error, "failed to get confirmed transactions");
            return a.result
        })
    }
    async getConfirmedSignaturesForAddress(e, n, r) {
        let i = {},
            o = await this.getFirstAvailableBlock();
        for (; !("until" in i) && (n--, !(n <= 0 || n < o));) try {
            const l = await this.getConfirmedBlockSignatures(n, "finalized");
            l.signatures.length > 0 && (i.until = l.signatures[l.signatures.length - 1].toString())
        } catch (l) {
            if (l instanceof Error && l.message.includes("skipped")) continue;
            throw l
        }
        let s = await this.getSlot("finalized");
        for (; !("before" in i) && (r++, !(r > s));) try {
            const l = await this.getConfirmedBlockSignatures(r);
            l.signatures.length > 0 && (i.before = l.signatures[l.signatures.length - 1].toString())
        } catch (l) {
            if (l instanceof Error && l.message.includes("skipped")) continue;
            throw l
        }
        return (await this.getConfirmedSignaturesForAddress2(e, i)).map(l => l.signature)
    }
    async getConfirmedSignaturesForAddress2(e, n, r) {
        const i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, n),
            o = await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
            s = re(o, o7);
        if ("error" in s) throw new he(s.error, "failed to get confirmed signatures for address");
        return s.result
    }
    async getSignaturesForAddress(e, n, r) {
        const i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, n),
            o = await this._rpcRequest("getSignaturesForAddress", i),
            s = re(o, s7);
        if ("error" in s) throw new he(s.error, "failed to get signatures for address");
        return s.result
    }
    async getAddressLookupTable(e, n) {
        const {
            context: r,
            value: i
        } = await this.getAccountInfoAndContext(e, n);
        let o = null;
        return i !== null && (o = new Pm({
            key: e,
            state: Pm.deserialize(i.data)
        })), {
            context: r,
            value: o
        }
    }
    async getNonceAndContext(e, n) {
        const {
            context: r,
            value: i
        } = await this.getAccountInfoAndContext(e, n);
        let o = null;
        return i !== null && (o = V0.fromAccountData(i.data)), {
            context: r,
            value: o
        }
    }
    async getNonce(e, n) {
        return await this.getNonceAndContext(e, n).then(r => r.value).catch(r => {
            throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r)
        })
    }
    async requestAirdrop(e, n) {
        const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), n]),
            i = re(r, j7);
        if ("error" in i) throw new he(i.error, `airdrop to ${e.toBase58()} failed`);
        return i.result
    }
    async _blockhashWithExpiryBlockHeight(e) {
        if (!e) {
            for (; this._pollingBlockhash;) await ko(100);
            const r = Date.now() - this._blockhashInfo.lastFetch >= C9;
            if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash
        }
        return await this._pollNewBlockhash()
    }
    async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
            const e = Date.now(),
                n = this._blockhashInfo.latestBlockhash,
                r = n ? n.blockhash : null;
            for (let i = 0; i < 50; i++) {
                const o = await this.getLatestBlockhash("finalized");
                if (r !== o.blockhash) return this._blockhashInfo = {
                    latestBlockhash: o,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: []
                }, o;
                await ko(c9 / 2)
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)
        } finally {
            this._pollingBlockhash = !1
        }
    }
    async getStakeMinimumDelegation(e) {
        const {
            commitment: n,
            config: r
        } = et(e), i = this._buildArgs([], n, "base64", r), o = await this._rpcRequest("getStakeMinimumDelegation", i), s = re(o, pt($()));
        if ("error" in s) throw new he(s.error, "failed to get stake minimum delegation");
        return s.result
    }
    async simulateTransaction(e, n, r) {
        if ("message" in e) {
            const I = e.serialize(),
                R = xe.Buffer.from(I).toString("base64");
            if (Array.isArray(n) || r !== void 0) throw new Error("Invalid arguments");
            const _ = n || {};
            _.encoding = "base64", "commitment" in _ || (_.commitment = this.commitment);
            const b = [R, _],
                v = await this._rpcRequest("simulateTransaction", b),
                O = re(v, jm);
            if ("error" in O) throw new Error("failed to simulate transaction: " + O.error.message);
            return O.result
        }
        let i;
        if (e instanceof Dn) {
            let B = e;
            i = new Dn, i.feePayer = B.feePayer, i.instructions = e.instructions, i.nonceInfo = B.nonceInfo, i.signatures = B.signatures
        } else i = Dn.populate(e), i._message = i._json = void 0;
        if (n !== void 0 && !Array.isArray(n)) throw new Error("Invalid arguments");
        const o = n;
        if (i.nonceInfo && o) i.sign(...o);
        else {
            let B = this._disableBlockhashCaching;
            for (;;) {
                const I = await this._blockhashWithExpiryBlockHeight(B);
                if (i.lastValidBlockHeight = I.lastValidBlockHeight, i.recentBlockhash = I.blockhash, !o) break;
                if (i.sign(...o), !i.signature) throw new Error("!signature");
                const R = i.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(R) && !this._blockhashInfo.transactionSignatures.includes(R)) {
                    this._blockhashInfo.simulatedSignatures.push(R);
                    break
                } else B = !0
            }
        }
        const s = i._compile(),
            a = s.serialize(),
            u = i._serialize(a).toString("base64"),
            h = {
                encoding: "base64",
                commitment: this.commitment
            };
        if (r) {
            const B = (Array.isArray(r) ? r : s.nonProgramIds()).map(I => I.toBase58());
            h.accounts = {
                encoding: "base64",
                addresses: B
            }
        }
        o && (h.sigVerify = !0);
        const g = [u, h],
            w = await this._rpcRequest("simulateTransaction", g),
            C = re(w, jm);
        if ("error" in C) {
            let B;
            if ("data" in C.error && (B = C.error.data.logs, B && Array.isArray(B))) {
                const I = `
    `,
                    R = I + B.join(I);
                console.error(C.error.message, R)
            }
            throw new Nm("failed to simulate transaction: " + C.error.message, B)
        }
        return C.result
    }
    async sendTransaction(e, n, r) {
        if ("version" in e) {
            if (n && Array.isArray(n)) throw new Error("Invalid arguments");
            const s = e.serialize();
            return await this.sendRawTransaction(s, n)
        }
        if (n === void 0 || !Array.isArray(n)) throw new Error("Invalid arguments");
        const i = n;
        if (e.nonceInfo) e.sign(...i);
        else {
            let s = this._disableBlockhashCaching;
            for (;;) {
                const a = await this._blockhashWithExpiryBlockHeight(s);
                if (e.lastValidBlockHeight = a.lastValidBlockHeight, e.recentBlockhash = a.blockhash, e.sign(...i), !e.signature) throw new Error("!signature");
                const l = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(l)) s = !0;
                else {
                    this._blockhashInfo.transactionSignatures.push(l);
                    break
                }
            }
        }
        const o = e.serialize();
        return await this.sendRawTransaction(o, r)
    }
    async sendRawTransaction(e, n) {
        const r = Gt(e).toString("base64");
        return await this.sendEncodedTransaction(r, n)
    }
    async sendEncodedTransaction(e, n) {
        const r = {
                encoding: "base64"
            },
            i = n && n.skipPreflight,
            o = n && n.preflightCommitment || this.commitment;
        n && n.maxRetries != null && (r.maxRetries = n.maxRetries), n && n.minContextSlot != null && (r.minContextSlot = n.minContextSlot), i && (r.skipPreflight = i), o && (r.preflightCommitment = o);
        const s = [e, r],
            a = await this._rpcRequest("sendTransaction", s),
            l = re(a, D7);
        if ("error" in l) {
            let u;
            throw "data" in l.error && (u = l.error.data.logs), new Nm("failed to send transaction: " + l.error.message, u)
        }
        return l.result
    }
    _wsOnOpen() {
        this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
            (async () => {
                try {
                    await this._rpcWebSocket.notify("ping")
                } catch {}
            })()
        }, 5e3), this._updateSubscriptions()
    }
    _wsOnError(e) {
        this._rpcWebSocketConnected = !1, console.error("ws error:", e.message)
    }
    _wsOnClose(e) {
        if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
            this._updateSubscriptions();
            return
        }
        this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([n, r]) => {
            this._setSubscription(n, {
                ...r,
                state: "pending"
            })
        })
    }
    _setSubscription(e, n) {
        var i;
        const r = (i = this._subscriptionsByHash[e]) == null ? void 0 : i.state;
        if (this._subscriptionsByHash[e] = n, r !== n.state) {
            const o = this._subscriptionStateChangeCallbacksByHash[e];
            o && o.forEach(s => {
                try {
                    s(n.state)
                } catch {}
            })
        }
    }
    _onSubscriptionStateChange(e, n) {
        var o;
        const r = this._subscriptionHashByClientSubscriptionId[e];
        if (r == null) return () => {};
        const i = (o = this._subscriptionStateChangeCallbacksByHash)[r] || (o[r] = new Set);
        return i.add(n), () => {
            i.delete(n), i.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r]
        }
    }
    async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                    this._rpcWebSocket.close()
                } catch (r) {
                    r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`)
                }
            }, 500));
            return
        }
        if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return
        }
        const e = this._rpcWebSocketGeneration,
            n = () => e === this._rpcWebSocketGeneration;
        await Promise.all(Object.keys(this._subscriptionsByHash).map(async r => {
            const i = this._subscriptionsByHash[r];
            if (i !== void 0) switch (i.state) {
                case "pending":
                case "unsubscribed":
                    if (i.callbacks.size === 0) {
                        delete this._subscriptionsByHash[r], i.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[i.serverSubscriptionId], await this._updateSubscriptions();
                        return
                    }
                    await (async () => {
                        const {
                            args: o,
                            method: s
                        } = i;
                        try {
                            this._setSubscription(r, {
                                ...i,
                                state: "subscribing"
                            });
                            const a = await this._rpcWebSocket.call(s, o);
                            this._setSubscription(r, {
                                ...i,
                                serverSubscriptionId: a,
                                state: "subscribed"
                            }), this._subscriptionCallbacksByServerSubscriptionId[a] = i.callbacks, await this._updateSubscriptions()
                        } catch (a) {
                            if (a instanceof Error && console.error(`${s} error for argument`, o, a.message), !n()) return;
                            this._setSubscription(r, {
                                ...i,
                                state: "pending"
                            }), await this._updateSubscriptions()
                        }
                    })();
                    break;
                case "subscribed":
                    i.callbacks.size === 0 && await (async () => {
                        const {
                            serverSubscriptionId: o,
                            unsubscribeMethod: s
                        } = i;
                        if (this._subscriptionsAutoDisposedByRpc.has(o)) this._subscriptionsAutoDisposedByRpc.delete(o);
                        else {
                            this._setSubscription(r, {
                                ...i,
                                state: "unsubscribing"
                            }), this._setSubscription(r, {
                                ...i,
                                state: "unsubscribing"
                            });
                            try {
                                await this._rpcWebSocket.call(s, [o])
                            } catch (a) {
                                if (a instanceof Error && console.error(`${s} error:`, a.message), !n()) return;
                                this._setSubscription(r, {
                                    ...i,
                                    state: "subscribed"
                                }), await this._updateSubscriptions();
                                return
                            }
                        }
                        this._setSubscription(r, {
                            ...i,
                            state: "unsubscribed"
                        }), await this._updateSubscriptions()
                    })();
                    break
            }
        }))
    }
    _handleServerNotification(e, n) {
        const r = this._subscriptionCallbacksByServerSubscriptionId[e];
        r !== void 0 && r.forEach(i => {
            try {
                i(...n)
            } catch (o) {
                console.error(o)
            }
        })
    }
    _wsOnAccountNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, a7);
        this._handleServerNotification(r, [n.value, n.context])
    }
    _makeSubscription(e, n) {
        const r = this._nextClientSubscriptionId++,
            i = Lm([e.method, n], !0),
            o = this._subscriptionsByHash[i];
        return o === void 0 ? this._subscriptionsByHash[i] = {
            ...e,
            args: n,
            callbacks: new Set([e.callback]),
            state: "pending"
        } : o.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = i, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
            const s = this._subscriptionsByHash[i];
            tt(s !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), s.callbacks.delete(e.callback), await this._updateSubscriptions()
        }, this._updateSubscriptions(), r
    }
    onAccountChange(e, n, r) {
        const i = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64");
        return this._makeSubscription({
            callback: n,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, i)
    }
    async removeAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "account change")
    }
    _wsOnProgramAccountNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, u7);
        this._handleServerNotification(r, [{
            accountId: n.value.pubkey,
            accountInfo: n.value.account
        }, n.context])
    }
    onProgramAccountChange(e, n, r, i) {
        const o = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64", i ? {
            filters: i
        } : void 0);
        return this._makeSubscription({
            callback: n,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, o)
    }
    async removeProgramAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "program account change")
    }
    onLogs(e, n, r) {
        const i = this._buildArgs([typeof e == "object" ? {
            mentions: [e.toString()]
        } : e], r || this._commitment || "finalized");
        return this._makeSubscription({
            callback: n,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, i)
    }
    async removeOnLogsListener(e) {
        await this._unsubscribeClientSubscription(e, "logs")
    }
    _wsOnLogsNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, z7);
        this._handleServerNotification(r, [n.value, n.context])
    }
    _wsOnSlotNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, f7);
        this._handleServerNotification(r, [n])
    }
    onSlotChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, [])
    }
    async removeSlotChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "slot change")
    }
    _wsOnSlotUpdatesNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, h7);
        this._handleServerNotification(r, [n])
    }
    onSlotUpdate(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, [])
    }
    async removeSlotUpdateListener(e) {
        await this._unsubscribeClientSubscription(e, "slot update")
    }
    async _unsubscribeClientSubscription(e, n) {
        const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
        r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${n}' events could not be found.`)
    }
    _buildArgs(e, n, r, i) {
        const o = n || this._commitment;
        if (o || r || i) {
            let s = {};
            r && (s.encoding = r), o && (s.commitment = o), i && (s = Object.assign(s, i)), e.push(s)
        }
        return e
    }
    _buildArgsAtLeastConfirmed(e, n, r, i) {
        const o = n || this._commitment;
        if (o && !["confirmed", "finalized"].includes(o)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(e, n, r, i)
    }
    _wsOnSignatureNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, p7);
        n.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, n.value === "receivedSignature" ? [{
            type: "received"
        }, n.context] : [{
            type: "status",
            result: n.value
        }, n.context])
    }
    onSignature(e, n, r) {
        const i = this._buildArgs([e], r || this._commitment || "finalized"),
            o = this._makeSubscription({
                callback: (s, a) => {
                    if (s.type === "status") {
                        n(s.result, a);
                        try {
                            this.removeSignatureListener(o)
                        } catch {}
                    }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, i);
        return o
    }
    onSignatureWithOptions(e, n, r) {
        const {
            commitment: i,
            ...o
        } = {
            ...r,
            commitment: r && r.commitment || this._commitment || "finalized"
        }, s = this._buildArgs([e], i, void 0, o), a = this._makeSubscription({
            callback: (l, u) => {
                n(l, u);
                try {
                    this.removeSignatureListener(a)
                } catch {}
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, s);
        return a
    }
    async removeSignatureListener(e) {
        await this._unsubscribeClientSubscription(e, "signature result")
    }
    _wsOnRootNotification(e) {
        const {
            result: n,
            subscription: r
        } = re(e, m7);
        this._handleServerNotification(r, [n])
    }
    onRootChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, [])
    }
    async removeRootChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "root change")
    }
}
Object.freeze({
    CreateLookupTable: {
        index: 0,
        layout: de([ge("instruction"), ls("recentSlot"), De("bumpSeed")])
    },
    FreezeLookupTable: {
        index: 1,
        layout: de([ge("instruction")])
    },
    ExtendLookupTable: {
        index: 2,
        layout: de([ge("instruction"), ls(), fn(Ie(), to(ge(), -8), "addresses")])
    },
    DeactivateLookupTable: {
        index: 3,
        layout: de([ge("instruction")])
    },
    CloseLookupTable: {
        index: 4,
        layout: de([ge("instruction")])
    }
});
new pe("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
    RequestUnits: {
        index: 0,
        layout: de([De("instruction"), ge("units"), ge("additionalFee")])
    },
    RequestHeapFrame: {
        index: 1,
        layout: de([De("instruction"), ge("bytes")])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: de([De("instruction"), ge("units")])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: de([De("instruction"), ls("microLamports")])
    }
});
new pe("ComputeBudget111111111111111111111111111111");
de([De("numSignatures"), De("padding"), Zn("signatureOffset"), Zn("signatureInstructionIndex"), Zn("publicKeyOffset"), Zn("publicKeyInstructionIndex"), Zn("messageDataOffset"), Zn("messageDataSize"), Zn("messageInstructionIndex")]);
new pe("Ed25519SigVerify111111111111111111111111111");
$0.utils.isValidPrivateKey;
$0.getPublicKey;
de([De("numSignatures"), Zn("signatureOffset"), De("signatureInstructionIndex"), Zn("ethAddressOffset"), De("ethAddressInstructionIndex"), Zn("messageDataOffset"), Zn("messageDataSize"), De("messageInstructionIndex"), Ze(20, "ethAddress"), Ze(64, "signature"), De("recoveryId")]);
new pe("KeccakSecp256k11111111111111111111111111111");
var X2;
new pe("StakeConfig11111111111111111111111111111111");
class J2 {
    constructor(e, n, r) {
        this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = n, this.custodian = r
    }
}
X2 = J2;
J2.default = new X2(0, 0, pe.default);
Object.freeze({
    Initialize: {
        index: 0,
        layout: de([ge("instruction"), n9(), r9()])
    },
    Authorize: {
        index: 1,
        layout: de([ge("instruction"), Ie("newAuthorized"), ge("stakeAuthorizationType")])
    },
    Delegate: {
        index: 2,
        layout: de([ge("instruction")])
    },
    Split: {
        index: 3,
        layout: de([ge("instruction"), On("lamports")])
    },
    Withdraw: {
        index: 4,
        layout: de([ge("instruction"), On("lamports")])
    },
    Deactivate: {
        index: 5,
        layout: de([ge("instruction")])
    },
    Merge: {
        index: 7,
        layout: de([ge("instruction")])
    },
    AuthorizeWithSeed: {
        index: 8,
        layout: de([ge("instruction"), Ie("newAuthorized"), ge("stakeAuthorizationType"), Uo("authoritySeed"), Ie("authorityOwner")])
    }
});
new pe("Stake11111111111111111111111111111111111111");
Object.freeze({
    InitializeAccount: {
        index: 0,
        layout: de([ge("instruction"), i9()])
    },
    Authorize: {
        index: 1,
        layout: de([ge("instruction"), Ie("newAuthorized"), ge("voteAuthorizationType")])
    },
    Withdraw: {
        index: 3,
        layout: de([ge("instruction"), On("lamports")])
    },
    AuthorizeWithSeed: {
        index: 10,
        layout: de([ge("instruction"), o9()])
    }
});
new pe("Vote111111111111111111111111111111111111111");
new pe("Va1idator1nfo111111111111111111111111111111");
ee({
    name: ne(),
    website: ye(ne()),
    details: ye(ne()),
    keybaseUsername: ye(ne())
});
new pe("Vote111111111111111111111111111111111111111");
de([Ie("nodePubkey"), Ie("authorizedWithdrawer"), De("commission"), qt(), fn(de([qt("slot"), ge("confirmationCount")]), to(ge(), -8), "votes"), De("rootSlotValid"), qt("rootSlot"), qt(), fn(de([qt("epoch"), Ie("authorizedVoter")]), to(ge(), -8), "authorizedVoters"), de([fn(de([Ie("authorizedPubkey"), qt("epochOfLastAuthorizedSwitch"), qt("targetEpoch")]), 32, "buf"), qt("idx"), De("isEmpty")], "priorVoters"), qt(), fn(de([qt("epoch"), qt("credits"), qt("prevCredits")]), to(ge(), -8), "epochCredits"), de([qt("slot"), qt("timestamp")], "lastTimestamp")]);
const H7 = 1e9,
    e3 = F.createContext({});

function t3() {
    return F.useContext(e3)
}
const $7 = ({
    children: t,
    endpoint: e,
    config: n = {
        commitment: "confirmed"
    }
}) => {
    const r = F.useMemo(() => new W7(e, n), [e, n]);
    return J.createElement(e3.Provider, {
        value: {
            connection: r
        }
    }, t)
};
var K7 = H0();
const q7 = yr(K7);
class hn extends Error {
    constructor(e, n) {
        super(e), this.error = n
    }
}
class no extends hn {
    constructor() {
        super(...arguments), this.name = "WalletNotReadyError"
    }
}
class js extends hn {
    constructor() {
        super(...arguments), this.name = "WalletConfigError"
    }
}
class zo extends hn {
    constructor() {
        super(...arguments), this.name = "WalletConnectionError"
    }
}
class Q0 extends hn {
    constructor() {
        super(...arguments), this.name = "WalletDisconnectedError"
    }
}
class n3 extends hn {
    constructor() {
        super(...arguments), this.name = "WalletDisconnectionError"
    }
}
class Gi extends hn {
    constructor() {
        super(...arguments), this.name = "WalletAccountError"
    }
}
class hu extends hn {
    constructor() {
        super(...arguments), this.name = "WalletPublicKeyError"
    }
}
class Cn extends hn {
    constructor() {
        super(...arguments), this.name = "WalletNotConnectedError"
    }
}
class xi extends hn {
    constructor() {
        super(...arguments), this.name = "WalletSendTransactionError"
    }
}
class Wr extends hn {
    constructor() {
        super(...arguments), this.name = "WalletSignTransactionError"
    }
}
class X0 extends hn {
    constructor() {
        super(...arguments), this.name = "WalletSignMessageError"
    }
}
class zm extends hn {
    constructor() {
        super(...arguments), this.name = "WalletSignInError"
    }
}
var Te;
(function(t) {
    t.Installed = "Installed", t.NotDetected = "NotDetected", t.Loadable = "Loadable", t.Unsupported = "Unsupported"
})(Te || (Te = {}));
class r3 extends q7 {
    get connected() {
        return !!this.publicKey
    }
    async autoConnect() {
        await this.connect()
    }
    async prepareTransaction(e, n, r = {}) {
        const i = this.publicKey;
        if (!i) throw new Cn;
        return e.feePayer = e.feePayer || i, e.recentBlockhash = e.recentBlockhash || (await n.getLatestBlockhash({
            commitment: r.preflightCommitment,
            minContextSlot: r.minContextSlot
        })).blockhash, e
    }
}

function V7(t) {
    if (typeof window > "u" || typeof document > "u") return;
    const e = [];

    function n() {
        if (t())
            for (const o of e) o()
    }
    const r = setInterval(n, 1e3);
    e.push(() => clearInterval(r)), document.readyState === "loading" && (document.addEventListener("DOMContentLoaded", n, {
        once: !0
    }), e.push(() => document.removeEventListener("DOMContentLoaded", n))), document.readyState !== "complete" && (window.addEventListener("load", n, {
        once: !0
    }), e.push(() => window.removeEventListener("load", n))), n()
}

function G7() {
    if (!navigator) return !1;
    const t = navigator.userAgent.toLowerCase(),
        e = t.includes("iphone") || t.includes("ipad"),
        n = t.includes("safari");
    return e && n
}

function Ei(t) {
    return "version" in t
}
class Z7 extends r3 {
    async sendTransaction(e, n, r = {}) {
        let i = !0;
        try {
            if (Ei(e)) {
                if (!this.supportedTransactionVersions) throw new xi("Sending versioned transactions isn't supported by this wallet");
                if (!this.supportedTransactionVersions.has(e.version)) throw new xi(`Sending transaction version ${e.version} isn't supported by this wallet`);
                try {
                    e = await this.signTransaction(e);
                    const o = e.serialize();
                    return await n.sendRawTransaction(o, r)
                } catch (o) {
                    throw o instanceof Wr ? (i = !1, o) : new xi(o == null ? void 0 : o.message, o)
                }
            } else try {
                const {
                    signers: o,
                    ...s
                } = r;
                e = await this.prepareTransaction(e, n, s), o != null && o.length && e.partialSign(...o), e = await this.signTransaction(e);
                const a = e.serialize();
                return await n.sendRawTransaction(a, s)
            } catch (o) {
                throw o instanceof Wr ? (i = !1, o) : new xi(o == null ? void 0 : o.message, o)
            }
        } catch (o) {
            throw i && this.emit("error", o), o
        }
    }
    async signAllTransactions(e) {
        for (const r of e)
            if (Ei(r)) {
                if (!this.supportedTransactionVersions) throw new Wr("Signing versioned transactions isn't supported by this wallet");
                if (!this.supportedTransactionVersions.has(r.version)) throw new Wr(`Signing transaction version ${r.version} isn't supported by this wallet`)
            } const n = [];
        for (const r of e) n.push(await this.signTransaction(r));
        return n
    }
}
class i3 extends Z7 {}
class Y7 extends i3 {}
const mi = "solana:signAndSendTransaction",
    Nf = "solana:signIn",
    Is = "solana:signMessage",
    Zt = "solana:signTransaction",
    o3 = "standard:connect",
    Fm = "standard:disconnect",
    s3 = "standard:events";

function Q7(t) {
    return o3 in t.features && s3 in t.features && (mi in t.features || Zt in t.features)
}
class Wm extends hn {
    constructor() {
        super(...arguments), this.name = "WalletNotSelectedError"
    }
}
const X7 = [],
    ec = {
        autoConnect: !1,
        connecting: !1,
        connected: !1,
        disconnecting: !1,
        select() {
            lr("call", "select")
        },
        connect() {
            return Promise.reject(lr("call", "connect"))
        },
        disconnect() {
            return Promise.reject(lr("call", "disconnect"))
        },
        sendTransaction() {
            return Promise.reject(lr("call", "sendTransaction"))
        },
        signTransaction() {
            return Promise.reject(lr("call", "signTransaction"))
        },
        signAllTransactions() {
            return Promise.reject(lr("call", "signAllTransactions"))
        },
        signMessage() {
            return Promise.reject(lr("call", "signMessage"))
        },
        signIn() {
            return Promise.reject(lr("call", "signIn"))
        }
    };
Object.defineProperty(ec, "wallets", {
    get() {
        return lr("read", "wallets"), X7
    }
});
Object.defineProperty(ec, "wallet", {
    get() {
        return lr("read", "wallet"), null
    }
});
Object.defineProperty(ec, "publicKey", {
    get() {
        return lr("read", "publicKey"), null
    }
});

function lr(t, e) {
    const n = new Error(`You have tried to ${t} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
    return console.error(n), n
}
const a3 = F.createContext(ec);

function J0() {
    return F.useContext(a3)
}

function J7(t, e) {
    const n = F.useState(() => {
            try {
                const o = localStorage.getItem(t);
                if (o) return JSON.parse(o)
            } catch (o) {
                typeof window < "u" && console.error(o)
            }
            return e
        }),
        r = n[0],
        i = F.useRef(!0);
    return F.useEffect(() => {
        if (i.current) {
            i.current = !1;
            return
        }
        try {
            r === null ? localStorage.removeItem(t) : localStorage.setItem(t, JSON.stringify(r))
        } catch (o) {
            typeof window < "u" && console.error(o)
        }
    }, [r, t]), n
}

function Of(t) {
    switch (t) {
        case "processed":
        case "confirmed":
        case "finalized":
        case void 0:
            return t;
        case "recent":
            return "processed";
        case "single":
        case "singleGossip":
            return "confirmed";
        case "max":
        case "root":
            return "finalized";
        default:
            return
    }
}
const Hm = "solana:mainnet",
    ek = "solana:devnet",
    tk = "solana:testnet",
    nk = "solana:localnet",
    rk = "https://api.mainnet-beta.solana.com";

function ik(t) {
    return t.includes(rk) ? Hm : /\bdevnet\b/i.test(t) ? ek : /\btestnet\b/i.test(t) ? tk : /\blocalhost\b/i.test(t) || /\b127\.0\.0\.1\b/.test(t) ? nk : Hm
}

function ok(t) {
    let e = `${t.domain} wants you to sign in with your Solana account:
`;
    e += `${t.address}`, t.statement && (e += `

${t.statement}`);
    const n = [];
    if (t.uri && n.push(`URI: ${t.uri}`), t.version && n.push(`Version: ${t.version}`), t.chainId && n.push(`Chain ID: ${t.chainId}`), t.nonce && n.push(`Nonce: ${t.nonce}`), t.issuedAt && n.push(`Issued At: ${t.issuedAt}`), t.expirationTime && n.push(`Expiration Time: ${t.expirationTime}`), t.notBefore && n.push(`Not Before: ${t.notBefore}`), t.requestId && n.push(`Request ID: ${t.requestId}`), t.resources) {
        n.push("Resources:");
        for (const r of t.resources) n.push(`- ${r}`)
    }
    return n.length && (e += `

${n.join(`
`)}`), e
}
const Qr = {
    ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
    ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
    ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
    ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
    ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
    ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
    ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION"
};
class Xr extends Error {
    constructor(...e) {
        const [n, r, i] = e;
        super(r), this.code = n, this.data = i, this.name = "SolanaMobileWalletAdapterError"
    }
}
class l3 extends Error {
    constructor(...e) {
        const [n, r, i, o] = e;
        super(i), this.code = r, this.data = o, this.jsonRpcMessageId = n, this.name = "SolanaMobileWalletAdapterProtocolError"
    }
}

function Ut(t, e, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        })
    }
    return new(n || (n = Promise))(function(o, s) {
        function a(h) {
            try {
                u(r.next(h))
            } catch (g) {
                s(g)
            }
        }

        function l(h) {
            try {
                u(r.throw(h))
            } catch (g) {
                s(g)
            }
        }

        function u(h) {
            h.done ? o(h.value) : i(h.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    })
}

function sk(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = yield crypto.subtle.exportKey("raw", t), r = yield crypto.subtle.sign({
            hash: "SHA-256",
            name: "ECDSA"
        }, e, n), i = new Uint8Array(n.byteLength + r.byteLength);
        return i.set(new Uint8Array(n), 0), i.set(new Uint8Array(r), n.byteLength), i
    })
}

function ak(t) {
    return window.btoa(t)
}

function lk(t) {
    return ok(t)
}

function uk(t) {
    return ak(lk(t))
}
const ck = "solana:signTransactions",
    $m = "solana:cloneAuthorization";

function fk(t, e) {
    return new Proxy({}, {
        get(n, r) {
            return n[r] == null && (n[r] = function(i) {
                return Ut(this, void 0, void 0, function*() {
                    const {
                        method: o,
                        params: s
                    } = dk(r, i, t), a = yield e(o, s);
                    return o === "authorize" && s.sign_in_payload && !a.sign_in_result && (a.sign_in_result = yield pk(s.sign_in_payload, a, e)), hk(r, a, t)
                })
            }), n[r]
        },
        defineProperty() {
            return !1
        },
        deleteProperty() {
            return !1
        }
    })
}

function dk(t, e, n) {
    let r = e,
        i = t.toString().replace(/[A-Z]/g, o => `_${o.toLowerCase()}`).toLowerCase();
    switch (t) {
        case "authorize": {
            let {
                chain: o
            } = r;
            if (n === "legacy") {
                switch (o) {
                    case "solana:testnet": {
                        o = "testnet";
                        break
                    }
                    case "solana:devnet": {
                        o = "devnet";
                        break
                    }
                    case "solana:mainnet": {
                        o = "mainnet-beta";
                        break
                    }
                    default:
                        o = r.cluster
                }
                r.cluster = o
            } else {
                switch (o) {
                    case "testnet":
                    case "devnet": {
                        o = `solana:${o}`;
                        break
                    }
                    case "mainnet-beta": {
                        o = "solana:mainnet";
                        break
                    }
                }
                r.chain = o
            }
        }
        case "reauthorize": {
            const {
                auth_token: o,
                identity: s
            } = r;
            if (o) switch (n) {
                case "legacy": {
                    i = "reauthorize", r = {
                        auth_token: o,
                        identity: s
                    };
                    break
                }
                default: {
                    i = "authorize";
                    break
                }
            }
            break
        }
    }
    return {
        method: i,
        params: r
    }
}

function hk(t, e, n) {
    switch (t) {
        case "getCapabilities": {
            const r = e;
            switch (n) {
                case "legacy": {
                    const i = [ck];
                    return r.supports_clone_authorization === !0 && i.push($m), Object.assign(Object.assign({}, r), {
                        features: i
                    })
                }
                case "v1":
                    return Object.assign(Object.assign({}, r), {
                        supports_sign_and_send_transactions: !0,
                        supports_clone_authorization: r.features.includes($m)
                    })
            }
        }
    }
    return e
}

function pk(t, e, n) {
    var r;
    return Ut(this, void 0, void 0, function*() {
        const i = (r = t.domain) !== null && r !== void 0 ? r : window.location.host,
            o = e.accounts[0].address,
            s = uk(Object.assign(Object.assign({}, t), {
                domain: i,
                address: o
            })),
            a = yield n("sign_messages", {
                addresses: [o],
                payloads: [s]
            });
        return {
            address: o,
            signed_message: s,
            signature: a.signed_payloads[0].slice(s.length)
        }
    })
}
const Zi = 4;

function mk(t) {
    if (t >= 4294967296) throw new Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
    const e = new ArrayBuffer(Zi);
    return new DataView(e).setUint32(0, t, !1), new Uint8Array(e)
}
const nh = 12,
    u3 = 65;

function gk(t, e, n) {
    return Ut(this, void 0, void 0, function*() {
        const r = mk(e),
            i = new Uint8Array(nh);
        crypto.getRandomValues(i);
        const o = yield crypto.subtle.encrypt(f3(r, i), n, new TextEncoder().encode(t)), s = new Uint8Array(r.byteLength + i.byteLength + o.byteLength);
        return s.set(new Uint8Array(r), 0), s.set(new Uint8Array(i), r.byteLength), s.set(new Uint8Array(o), r.byteLength + i.byteLength), s
    })
}

function c3(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = t.slice(0, Zi),
            r = t.slice(Zi, Zi + nh),
            i = t.slice(Zi + nh),
            o = yield crypto.subtle.decrypt(f3(n, r), e, i);
        return yk().decode(o)
    })
}

function f3(t, e) {
    return {
        additionalData: t,
        iv: e,
        name: "AES-GCM",
        tagLength: 128
    }
}
let Pf;

function yk() {
    return Pf === void 0 && (Pf = new TextDecoder("utf-8")), Pf
}

function vk() {
    return Ut(this, void 0, void 0, function*() {
        return yield crypto.subtle.generateKey({
            name: "ECDSA",
            namedCurve: "P-256"
        }, !1, ["sign"])
    })
}

function wk() {
    return Ut(this, void 0, void 0, function*() {
        return yield crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: "P-256"
        }, !1, ["deriveKey", "deriveBits"])
    })
}

function xk(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = JSON.stringify(t),
            r = t.id;
        return gk(n, r, e)
    })
}

function Ek(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = yield c3(t, e), r = JSON.parse(n);
        if (Object.hasOwnProperty.call(r, "error")) throw new l3(r.id, r.error.code, r.error.message);
        return r
    })
}

function Sk(t, e, n) {
    return Ut(this, void 0, void 0, function*() {
        const [r, i] = yield Promise.all([crypto.subtle.exportKey("raw", e), crypto.subtle.importKey("raw", t.slice(0, u3), {
            name: "ECDH",
            namedCurve: "P-256"
        }, !1, [])]), o = yield crypto.subtle.deriveBits({
            name: "ECDH",
            public: i
        }, n, 256), s = yield crypto.subtle.importKey("raw", o, "HKDF", !1, ["deriveKey"]);
        return yield crypto.subtle.deriveKey({
            name: "HKDF",
            hash: "SHA-256",
            salt: new Uint8Array(r),
            info: new Uint8Array
        }, s, {
            name: "AES-GCM",
            length: 128
        }, !1, ["encrypt", "decrypt"])
    })
}

function bk(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = yield c3(t, e), r = JSON.parse(n);
        let i = "legacy";
        if (Object.hasOwnProperty.call(r, "v")) switch (r.v) {
            case 1:
            case "1":
            case "v1":
                i = "v1";
                break;
            case "legacy":
                i = "legacy";
                break;
            default:
                throw new Xr(Qr.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${r.v}`)
        }
        return {
            protocol_version: i
        }
    })
}

function _k() {
    return d3(49152 + Math.floor(Math.random() * 16384))
}

function d3(t) {
    if (t < 49152 || t > 65535) throw new Xr(Qr.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${t} given.`, {
        port: t
    });
    return t
}

function kk(t) {
    let e = "";
    const n = new Uint8Array(t),
        r = n.byteLength;
    for (let i = 0; i < r; i++) e += String.fromCharCode(n[i]);
    return window.btoa(e)
}

function Ck(t) {
    return t.replace(/[/+=]/g, e => ({
        "/": "_",
        "+": "-",
        "=": "."
    })[e])
}
const Ak = "solana-wallet";

function Km(t) {
    return t.replace(/(^\/+|\/+$)/g, "").split("index.html")
}

function Ik(t, e) {
    let n = null;
    if (e) {
        try {
            n = new URL(e.html)
        } catch {}
        if ((n == null ? void 0 : n.protocol) !== "index.html") throw new Xr(Qr.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
    }
    n || (n = new URL( % 60 % 24 % 7 bAk % 7 d_ / % 60. html));
    const r = t.startsWith("index.html") ? t : [...Km(n.pathname), ...Km(t)].join("index.html");
    return new URL(r % 2 cn.html)
}

function Tk(t, e, n, r = ["v1"]) {
    return Ut(this, void 0, void 0, function*() {
        const i = d3(e),
            o = yield crypto.subtle.exportKey("raw", t), s = kk(o), a = Ik("v1/associate/local", n);
        return a.searchParams.set("association", Ck(s)), a.searchParams.set("port", `${i}`), r.forEach(l => {
            a.searchParams.set("v", l)
        }), a
    })
}
const pu = {
    Firefox: 0,
    Other: 1
};

function Bk() {
    return navigator.userAgent.indexOf("Firefox/index.html") !== -1 ? pu.Firefox : pu.Other
}

function Rk() {
    return new Promise((t, e) => {
        function n() {
            clearTimeout(i), window.removeEventListener("blur", r)
        }

        function r() {
            n(), t()
        }
        window.addEventListener("blur", r);
        const i = setTimeout(() => {
            n(), e()
        }, 2e3)
    })
}
let Ts = null;

function Mk(t) {
    Ts == null && (Ts = document.createElement("iframe"), Ts.style.display = "none", document.body.appendChild(Ts)), Ts.contentWindow.location.href = t.toString()
}

function Lk(t, e) {
    return Ut(this, void 0, void 0, function*() {
        const n = _k(),
            r = yield Tk(t, n, e);
        if (r.protocol === "index.html") window.location.assign(r);
        else try {
            const i = Bk();
            switch (i) {
                case pu.Firefox:
                    Mk(r);
                    break;
                case pu.Other: {
                    const o = Rk();
                    window.location.assign(r), yield o;
                    break
                }
                default:
            }
        } catch {
            throw new Xr(Qr.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.")
        }
        return n
    })
}
const qm = {
        retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
        timeoutMs: 3e4
    },
    Nk = "com.solana.mobilewalletadapter.v1";

function Ok() {
    if (typeof window > "u" || window.isSecureContext !== !0) throw new Xr(Qr.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).")
}

function Pk(t) {
    let e;
    try {
        e = new URL(t.html)
    } catch {
        throw new Xr(Qr.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet")
    }
    if (e.protocol !== "index.html") throw new Xr(Qr.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs")
}

function Vm(t) {
    return new DataView(t).getUint32(0, !1)
}

function jk(t, e) {
    return Ut(this, void 0, void 0, function*() {
        Ok();
        const n = yield vk(), r = yield Lk(n.publicKey, e == null ? void 0 : e.baseUri), i = `ws://localhost:${r}/solana-wallet`;
        let o;
        const s = (() => {
            const h = [...qm.retryDelayScheduleMs];
            return () => h.length > 1 ? h.shift() : h[0]
        })();
        let a = 1,
            l = 0,
            u = {
                __type: "disconnected"
            };
        return new Promise((h, g) => {
            let w;
            const C = {},
                B = () => Ut(this, void 0, void 0, function*() {
                    if (u.__type !== "connecting") {
                        console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${u.__type}\`.`);
                        return
                    }
                    const {
                        associationKeypair: D
                    } = u;
                    w.removeEventListener("open", B);
                    const N = yield wk();
                    w.send(yield sk(N.publicKey, D.privateKey)), u = {
                        __type: "hello_req_sent",
                        associationPublicKey: D.publicKey,
                        ecdhPrivateKey: N.privateKey
                    }
                }),
                I = D => {
                    D.wasClean ? u = {
                        __type: "disconnected"
                    } : g(new Xr(Qr.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${D.code}: ${D.reason}).`, {
                        closeEvent: D
                    })), b()
                },
                R = D => Ut(this, void 0, void 0, function*() {
                    b(), Date.now() - o >= qm.timeoutMs ? g(new Xr(Qr.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket on port ${r}.`)) : (yield new Promise(N => {
                        const U = s();
                        v = window.setTimeout(N, U)
                    }), O())
                }),
                _ = D => Ut(this, void 0, void 0, function*() {
                    const N = yield D.data.arrayBuffer();
                    switch (u.__type) {
                        case "connected":
                            try {
                                const U = N.slice(0, Zi),
                                    z = Vm(U);
                                if (z !== l + 1) throw new Error("Encrypted message has invalid sequence number");
                                l = z;
                                const Z = yield Ek(N, u.sharedSecret), Q = C[Z.id];
                                delete C[Z.id], Q.resolve(Z.result)
                            } catch (U) {
                                if (U instanceof l3) {
                                    const z = C[U.jsonRpcMessageId];
                                    delete C[U.jsonRpcMessageId], z.reject(U)
                                } else throw U
                            }
                            break;
                        case "hello_req_sent": {
                            const U = yield Sk(N, u.associationPublicKey, u.ecdhPrivateKey), z = N.slice(u3), Z = z.byteLength !== 0 ? yield Ut(this, void 0, void 0, function*() {
                                const X = z.slice(0, Zi),
                                    ce = Vm(X);
                                if (ce !== l + 1) throw new Error("Encrypted message has invalid sequence number");
                                return l = ce, bk(z, U)
                            }): {
                                protocol_version: "legacy"
                            };
                            u = {
                                __type: "connected",
                                sharedSecret: U,
                                sessionProperties: Z
                            };
                            const Q = fk(Z.protocol_version, (X, ce) => Ut(this, void 0, void 0, function*() {
                                const j = a++;
                                return w.send(yield xk({
                                    id: j,
                                    jsonrpc: "2.0",
                                    method: X,
                                    params: ce ?? {}
                                }, U)), new Promise((c, m) => {
                                    C[j] = {
                                        resolve(S) {
                                            switch (X) {
                                                case "authorize":
                                                case "reauthorize": {
                                                    const {
                                                        wallet_uri_base: L
                                                    } = S;
                                                    if (L != null) try {
                                                        Pk(L)
                                                    } catch (E) {
                                                        m(E);
                                                        return
                                                    }
                                                    break
                                                }
                                            }
                                            c(S)
                                        },
                                        reject: m
                                    }
                                })
                            }));
                            try {
                                h(yield t(Q))
                            } catch (X) {
                                g(X)
                            } finally {
                                b(), w.close()
                            }
                            break
                        }
                    }
                });
            let b, v;
            const O = () => {
                b && b(), u = {
                    __type: "connecting",
                    associationKeypair: n
                }, o === void 0 && (o = Date.now()), w = new WebSocket(i, [Nk]), w.addEventListener("open", B), w.addEventListener("close", I), w.addEventListener("error", R), w.addEventListener("message", _), b = () => {
                    window.clearTimeout(v), w.removeEventListener("open", B), w.removeEventListener("close", I), w.removeEventListener("error", R), w.removeEventListener("message", _)
                }
            };
            O()
        })
    })
}

function Dk(t) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), n = 0; n < e.length; n++) e[n] = 255;
    for (var r = 0; r < t.length; r++) {
        var i = t.charAt(r),
            o = i.charCodeAt(0);
        if (e[o] !== 255) throw new TypeError(i + " is ambiguous");
        e[o] = r
    }
    var s = t.length,
        a = t.charAt(0),
        l = Math.log(s) / Math.log(256),
        u = Math.log(256) / Math.log(s);

    function h(C) {
        if (C instanceof Uint8Array || (ArrayBuffer.isView(C) ? C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength) : Array.isArray(C) && (C = Uint8Array.from(C))), !(C instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (C.length === 0) return "";
        for (var B = 0, I = 0, R = 0, _ = C.length; R !== _ && C[R] === 0;) R++, B++;
        for (var b = (_ - R) * u + 1 >>> 0, v = new Uint8Array(b); R !== _;) {
            for (var O = C[R], D = 0, N = b - 1;
                (O !== 0 || D < I) && N !== -1; N--, D++) O += 256 * v[N] >>> 0, v[N] = O % s >>> 0, O = O / s >>> 0;
            if (O !== 0) throw new Error("Non-zero carry");
            I = D, R++
        }
        for (var U = b - I; U !== b && v[U] === 0;) U++;
        for (var z = a.repeat(B); U < b; ++U) z += t.charAt(v[U]);
        return z
    }

    function g(C) {
        if (typeof C != "string") throw new TypeError("Expected String");
        if (C.length === 0) return new Uint8Array;
        for (var B = 0, I = 0, R = 0; C[B] === a;) I++, B++;
        for (var _ = (C.length - B) * l + 1 >>> 0, b = new Uint8Array(_); C[B];) {
            var v = e[C.charCodeAt(B)];
            if (v === 255) return;
            for (var O = 0, D = _ - 1;
                (v !== 0 || O < R) && D !== -1; D--, O++) v += s * b[D] >>> 0, b[D] = v % 256 >>> 0, v = v / 256 >>> 0;
            if (v !== 0) throw new Error("Non-zero carry");
            R = O, B++
        }
        for (var N = _ - R; N !== _ && b[N] === 0;) N++;
        for (var U = new Uint8Array(I + (_ - N)), z = I; N !== _;) U[z++] = b[N++];
        return U
    }

    function w(C) {
        var B = g(C);
        if (B) return B;
        throw new Error("Non-base" + s + " character")
    }
    return {
        encode: h,
        decodeUnsafe: g,
        decode: w
    }
}
var Uk = Dk;
const zk = Uk,
    Fk = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Wk = zk(Fk);
const Hk = yr(Wk);

function jf(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
    return n
}

function dl(t, e, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        })
    }
    return new(n || (n = Promise))(function(o, s) {
        function a(h) {
            try {
                u(r.next(h))
            } catch (g) {
                s(g)
            }
        }

        function l(h) {
            try {
                u(r.throw(h))
            } catch (g) {
                s(g)
            }
        }

        function u(h) {
            h.done ? o(h.value) : i(h.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    })
}

function h3(t) {
    return window.btoa(String.fromCharCode.call(null, ...t))
}

function Df(t) {
    return new Uint8Array(window.atob(t).split("").map(e => e.charCodeAt(0)))
}

function Gm(t) {
    const e = "version" in t ? t.serialize() : t.serialize({
        requireAllSignatures: !1,
        verifySignatures: !1
    });
    return h3(e)
}

function $k(t) {
    const n = t[0] * as + 1;
    return q0.deserializeMessageVersion(t.slice(n, t.length)) === "legacy" ? Dn.from(t) : ga.deserialize(t)
}

function Kk(t, e) {
    return dl(this, void 0, void 0, function*() {
        return yield jk(r => {
            const i = new Proxy({}, {
                get(o, s) {
                    if (o[s] == null) switch (s) {
                        case "signAndSendTransactions":
                            o[s] = function(a) {
                                var {
                                    minContextSlot: l,
                                    commitment: u,
                                    skipPreflight: h,
                                    maxRetries: g,
                                    waitForCommitmentToSendNextTransaction: w,
                                    transactions: C
                                } = a, B = jf(a, ["minContextSlot", "commitment", "skipPreflight", "maxRetries", "waitForCommitmentToSendNextTransaction", "transactions"]);
                                return dl(this, void 0, void 0, function*() {
                                    const I = C.map(Gm),
                                        R = {
                                            min_context_slot: l,
                                            commitment: u,
                                            skip_preflight: h,
                                            max_retries: g,
                                            wait_for_commitment_to_send_next_transaction: w
                                        },
                                        {
                                            signatures: _
                                        } = yield r.signAndSendTransactions(Object.assign(Object.assign(Object.assign({}, B), Object.values(R).some(v => v != null) ? {
                                            options: R
                                        } : null), {
                                            payloads: I
                                        }));
                                    return _.map(Df).map(Hk.encode)
                                })
                            };
                            break;
                        case "signMessages":
                            o[s] = function(a) {
                                var {
                                    payloads: l
                                } = a, u = jf(a, ["payloads"]);
                                return dl(this, void 0, void 0, function*() {
                                    const h = l.map(h3),
                                        {
                                            signed_payloads: g
                                        } = yield r.signMessages(Object.assign(Object.assign({}, u), {
                                            payloads: h
                                        }));
                                    return g.map(Df)
                                })
                            };
                            break;
                        case "signTransactions":
                            o[s] = function(a) {
                                var {
                                    transactions: l
                                } = a, u = jf(a, ["transactions"]);
                                return dl(this, void 0, void 0, function*() {
                                    const h = l.map(Gm),
                                        {
                                            signed_payloads: g
                                        } = yield r.signTransactions(Object.assign(Object.assign({}, u), {
                                            payloads: h
                                        }));
                                    return g.map(Df).map($k)
                                })
                            };
                            break;
                        default: {
                            o[s] = r[s];
                            break
                        }
                    }
                    return o[s]
                },
                defineProperty() {
                    return !1
                },
                deleteProperty() {
                    return !1
                }
            });
            return t(i)
        }, e)
    })
}

function Ne(t, e, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        })
    }
    return new(n || (n = Promise))(function(o, s) {
        function a(h) {
            try {
                u(r.next(h))
            } catch (g) {
                s(g)
            }
        }

        function l(h) {
            try {
                u(r.throw(h))
            } catch (g) {
                s(g)
            }
        }

        function u(h) {
            h.done ? o(h.value) : i(h.value).then(a, l)
        }
        u((r = r.apply(t, e || [])).next())
    })
}

function Il(t) {
    return new Uint8Array(window.atob(t).split("").map(e => e.charCodeAt(0)))
}

function qk() {
    return typeof window < "u" && window.isSecureContext && typeof document < "u" && /android/i.test(navigator.userAgent)
}
const di = "Mobile Wallet Adapter",
    Vk = 64;

function Gk(t) {
    const e = Il(t);
    return new pe(e)
}

function Zm(t) {
    return "version" in t
}
class Zk extends Y7 {
    constructor(e) {
        var n;
        super(), this.supportedTransactionVersions = new Set(["legacy", 0]), this.name = di, this.url = "https://solanamobile.com/wallets", this.icon = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg==", this._connecting = !1, this._connectionGeneration = 0, this._readyState = qk() ? Te.Loadable : Te.Unsupported, this._authorizationResultCache = e.authorizationResultCache, this._addressSelector = e.addressSelector, this._appIdentity = e.appIdentity, this._chain = (n = e.chain) !== null && n !== void 0 ? n : e.cluster, this._onWalletNotFound = e.onWalletNotFound, this._readyState !== Te.Unsupported && this._authorizationResultCache.get().then(r => {
            r && this.declareWalletAsInstalled()
        })
    }
    get publicKey() {
        if (this._publicKey == null && this._selectedAddress != null) try {
            this._publicKey = Gk(this._selectedAddress)
        } catch (e) {
            throw new hu(e instanceof Error && (e == null ? void 0 : e.message) || "Unknown error", e)
        }
        return this._publicKey ? this._publicKey : null
    }
    get connected() {
        return !!this._authorizationResult
    }
    get connecting() {
        return this._connecting
    }
    get readyState() {
        return this._readyState
    }
    declareWalletAsInstalled() {
        this._readyState !== Te.Installed && this.emit("readyStateChange", this._readyState = Te.Installed)
    }
    runWithGuard(e) {
        return Ne(this, void 0, void 0, function*() {
            try {
                return yield e()
            } catch (n) {
                throw this.emit("error", n), n
            }
        })
    }
    autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
        return Ne(this, void 0, void 0, function*() {
            return yield this.autoConnect()
        })
    }
    autoConnect() {
        return Ne(this, void 0, void 0, function*() {
            if (!(this.connecting || this.connected)) return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                if (this._readyState !== Te.Installed && this._readyState !== Te.Loadable) throw new no;
                this._connecting = !0;
                try {
                    const e = yield this._authorizationResultCache.get();
                    e && this.handleAuthorizationResult(e)
                } catch (e) {
                    throw new zo(e instanceof Error && e.message || "Unknown error", e)
                } finally {
                    this._connecting = !1
                }
            }))
        })
    }
    connect() {
        return Ne(this, void 0, void 0, function*() {
            if (!(this.connecting || this.connected)) return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                if (this._readyState !== Te.Installed && this._readyState !== Te.Loadable) throw new no;
                this._connecting = !0;
                try {
                    yield this.performAuthorization()
                } catch (e) {
                    throw new zo(e instanceof Error && e.message || "Unknown error", e)
                } finally {
                    this._connecting = !1
                }
            }))
        })
    }
    performAuthorization(e) {
        return Ne(this, void 0, void 0, function*() {
            try {
                const n = yield this._authorizationResultCache.get();
                return n ? (this.handleAuthorizationResult(n), n) : yield this.transact(r => Ne(this, void 0, void 0, function*() {
                    const i = yield r.authorize({
                        chain: this._chain,
                        identity: this._appIdentity,
                        sign_in_payload: e
                    });
                    return Promise.all([this._authorizationResultCache.set(i), this.handleAuthorizationResult(i)]), i
                }))
            } catch (n) {
                throw new zo(n instanceof Error && n.message || "Unknown error", n)
            }
        })
    }
    handleAuthorizationResult(e) {
        var n;
        return Ne(this, void 0, void 0, function*() {
            const r = this._authorizationResult == null || ((n = this._authorizationResult) === null || n === void 0 ? void 0 : n.accounts.length) !== e.accounts.length || this._authorizationResult.accounts.some((i, o) => i.address !== e.accounts[o].address);
            if (this._authorizationResult = e, this.declareWalletAsInstalled(), r) {
                const i = yield this._addressSelector.select(e.accounts.map(({
                    address: o
                }) => o));
                i !== this._selectedAddress && (this._selectedAddress = i, delete this._publicKey, this.emit("connect", this.publicKey))
            }
        })
    }
    performReauthorization(e, n) {
        return Ne(this, void 0, void 0, function*() {
            try {
                const r = yield e.authorize({
                    auth_token: n,
                    identity: this._appIdentity
                });
                Promise.all([this._authorizationResultCache.set(r), this.handleAuthorizationResult(r)])
            } catch (r) {
                throw this.disconnect(), new Q0(r instanceof Error && (r == null ? void 0 : r.message) || "Unknown error", r)
            }
        })
    }
    disconnect() {
        return Ne(this, void 0, void 0, function*() {
            this._authorizationResultCache.clear(), this._connecting = !1, this._connectionGeneration++, delete this._authorizationResult, delete this._publicKey, delete this._selectedAddress, this.emit("disconnect")
        })
    }
    transact(e) {
        var n;
        return Ne(this, void 0, void 0, function*() {
            const r = (n = this._authorizationResult) === null || n === void 0 ? void 0 : n.wallet_uri_base,
                i = r ? {
                    baseUri: r
                } : void 0,
                o = this._connectionGeneration;
            try {
                return yield Kk(e, i)
            } catch (s) {
                throw this._connectionGeneration !== o && (yield new Promise(() => {})), s instanceof Error && s.name === "SolanaMobileWalletAdapterError" && s.code === "ERROR_WALLET_NOT_FOUND" && (yield this._onWalletNotFound(this)), s
            }
        })
    }
    assertIsAuthorized() {
        if (!this._authorizationResult || !this._selectedAddress) throw new Cn;
        return {
            authToken: this._authorizationResult.auth_token,
            selectedAddress: this._selectedAddress
        }
    }
    performSignTransactions(e) {
        return Ne(this, void 0, void 0, function*() {
            const {
                authToken: n
            } = this.assertIsAuthorized();
            try {
                return yield this.transact(r => Ne(this, void 0, void 0, function*() {
                    return yield this.performReauthorization(r, n), yield r.signTransactions({
                        transactions: e
                    })
                }))
            } catch (r) {
                throw new Wr(r == null ? void 0 : r.message, r)
            }
        })
    }
    sendTransaction(e, n, r) {
        return Ne(this, void 0, void 0, function*() {
            return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                const {
                    authToken: i
                } = this.assertIsAuthorized(), o = r == null ? void 0 : r.minContextSlot;
                try {
                    return yield this.transact(s => Ne(this, void 0, void 0, function*() {
                        function a() {
                            let g;
                            switch (n.commitment) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                    g = n.commitment;
                                    break;
                                default:
                                    g = "finalized"
                            }
                            let w;
                            switch (r == null ? void 0 : r.preflightCommitment) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                    w = r.preflightCommitment;
                                    break;
                                case void 0:
                                    w = g;
                                    break;
                                default:
                                    w = "finalized"
                            }
                            return (w === "finalized" ? 2 : w === "confirmed" ? 1 : 0) < (g === "finalized" ? 2 : g === "confirmed" ? 1 : 0) ? w : g
                        }
                        const [l, u, h] = yield Promise.all([s.getCapabilities(), this.performReauthorization(s, i), Zm(e) ? null : Ne(this, void 0, void 0, function*() {
                            var g;
                            if (e.feePayer || (e.feePayer = (g = this.publicKey) !== null && g !== void 0 ? g : void 0), e.recentBlockhash == null) {
                                const {
                                    blockhash: w
                                } = yield n.getLatestBlockhash({
                                    commitment: a()
                                });
                                e.recentBlockhash = w
                            }
                        })]);
                        if (l.supports_sign_and_send_transactions) return (yield s.signAndSendTransactions({
                            minContextSlot: o,
                            transactions: [e]
                        }))[0];
                        {
                            const [g] = yield s.signTransactions({
                                transactions: [e]
                            });
                            if (Zm(g)) return yield n.sendTransaction(g);
                            {
                                const w = g.serialize();
                                return yield n.sendRawTransaction(w, Object.assign(Object.assign({}, r), {
                                    preflightCommitment: a()
                                }))
                            }
                        }
                    }))
                } catch (s) {
                    throw new xi(s == null ? void 0 : s.message, s)
                }
            }))
        })
    }
    signTransaction(e) {
        return Ne(this, void 0, void 0, function*() {
            return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                const [n] = yield this.performSignTransactions([e]);
                return n
            }))
        })
    }
    signAllTransactions(e) {
        return Ne(this, void 0, void 0, function*() {
            return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                return yield this.performSignTransactions(e)
            }))
        })
    }
    signMessage(e) {
        return Ne(this, void 0, void 0, function*() {
            return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                const {
                    authToken: n,
                    selectedAddress: r
                } = this.assertIsAuthorized();
                try {
                    return yield this.transact(i => Ne(this, void 0, void 0, function*() {
                        yield this.performReauthorization(i, n);
                        const [o] = yield i.signMessages({
                            addresses: [r],
                            payloads: [e]
                        });
                        return o.slice(-Vk)
                    }))
                } catch (i) {
                    throw new X0(i == null ? void 0 : i.message, i)
                }
            }))
        })
    }
    signIn(e) {
        return Ne(this, void 0, void 0, function*() {
            return yield this.runWithGuard(() => Ne(this, void 0, void 0, function*() {
                var n, r;
                if (this._readyState !== Te.Installed && this._readyState !== Te.Loadable) throw new no;
                this._connecting = !0;
                try {
                    const i = yield this.performAuthorization(Object.assign(Object.assign({}, e), {
                        domain: (n = e == null ? void 0 : e.domain) !== null && n !== void 0 ? n : window.location.host
                    }));
                    if (!i.sign_in_result) throw new Error("Sign in failed, no sign in result returned by wallet");
                    const o = i.sign_in_result.address;
                    return {
                        account: Object.assign(Object.assign({}, (r = i.accounts.find(a => a.address == o)) !== null && r !== void 0 ? r : {
                            address: o
                        }), {
                            publicKey: Il(o)
                        }),
                        signedMessage: Il(i.sign_in_result.signed_message),
                        signature: Il(i.sign_in_result.signature)
                    }
                } catch (i) {
                    throw new zo(i instanceof Error && i.message || "Unknown error", i)
                } finally {
                    this._connecting = !1
                }
            }))
        })
    }
}

function Yk() {
    return {
        select(t) {
            return Ne(this, void 0, void 0, function*() {
                return t[0]
            })
        }
    }
}
const Uf = "SolanaMobileWalletAdapterDefaultAuthorizationCache";

function Qk() {
    let t;
    try {
        t = window.localStorage
    } catch {}
    return {
        clear() {
            return Ne(this, void 0, void 0, function*() {
                if (t) try {
                    t.removeItem(Uf)
                } catch {}
            })
        },
        get() {
            return Ne(this, void 0, void 0, function*() {
                if (t) try {
                    return JSON.parse(t.getItem(Uf)) || void 0
                } catch {}
            })
        },
        set(e) {
            return Ne(this, void 0, void 0, function*() {
                if (t) try {
                    t.setItem(Uf, JSON.stringify(e))
                } catch {}
            })
        }
    }
}

function Xk(t) {
    return Ne(this, void 0, void 0, function*() {
        typeof window < "u" && window.location.assign(t.url)
    })
}

function Jk() {
    return Xk
}

function eC(t, e) {
    if (t === e) return !0;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
var Nt = function(t, e, n, r, i) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return r === "a" ? i.call(t, n) : i ? i.value = n : e.set(t, n), n
    },
    fe = function(t, e, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t)
    },
    Yt, Sn, Yi, Qi, zi, Ds, mu, Oe, gu, rh, Tl, ih, Gs, oh, Ym, Qm, Xm, Jm;
class tC extends r3 {
    constructor({
        wallet: e
    }) {
        super(), Yt.add(this), Sn.set(this, void 0), Yi.set(this, void 0), Qi.set(this, void 0), zi.set(this, void 0), Ds.set(this, void 0), mu.set(this, void 0), Oe.set(this, void 0), gu.set(this, typeof window > "u" || typeof document > "u" ? Te.Unsupported : Te.Installed), oh.set(this, n => {
            if ("accounts" in n) {
                const r = fe(this, Oe, "f").accounts[0];
                fe(this, Sn, "f") && !fe(this, zi, "f") && r !== fe(this, Sn, "f") && (r ? fe(this, Yt, "m", Tl).call(this, r) : (this.emit("error", new Q0), fe(this, Yt, "m", ih).call(this)))
            }
            "features" in n && fe(this, Yt, "m", Gs).call(this)
        }), Nt(this, Oe, e, "f"), Nt(this, Sn, null, "f"), Nt(this, Yi, null, "f"), Nt(this, Qi, !1, "f"), Nt(this, zi, !1, "f"), Nt(this, Ds, fe(this, Oe, "f").features[s3].on("change", fe(this, oh, "f")), "f"), fe(this, Yt, "m", Gs).call(this)
    }
    get name() {
        return fe(this, Oe, "f").name
    }
    get url() {
        return "https://github.com/solana-labs/wallet-standard"
    }
    get icon() {
        return fe(this, Oe, "f").icon
    }
    get readyState() {
        return fe(this, gu, "f")
    }
    get publicKey() {
        return fe(this, Yi, "f")
    }
    get connecting() {
        return fe(this, Qi, "f")
    }
    get supportedTransactionVersions() {
        return fe(this, mu, "f")
    }
    get wallet() {
        return fe(this, Oe, "f")
    }
    get standard() {
        return !0
    }
    destroy() {
        Nt(this, Sn, null, "f"), Nt(this, Yi, null, "f"), Nt(this, Qi, !1, "f"), Nt(this, zi, !1, "f");
        const e = fe(this, Ds, "f");
        e && (Nt(this, Ds, null, "f"), e())
    }
    async autoConnect() {
        return fe(this, Yt, "m", rh).call(this, {
            silent: !0
        })
    }
    async connect() {
        return fe(this, Yt, "m", rh).call(this)
    }
    async disconnect() {
        if (Fm in fe(this, Oe, "f").features) try {
            Nt(this, zi, !0, "f"), await fe(this, Oe, "f").features[Fm].disconnect()
        } catch (e) {
            this.emit("error", new n3(e == null ? void 0 : e.message, e))
        } finally {
            Nt(this, zi, !1, "f")
        }
        fe(this, Yt, "m", ih).call(this)
    }
    async sendTransaction(e, n, r = {}) {
        try {
            const i = fe(this, Sn, "f");
            if (!i) throw new Cn;
            let o;
            if (mi in fe(this, Oe, "f").features)
                if (i.features.includes(mi)) o = mi;
                else if (Zt in fe(this, Oe, "f").features && i.features.includes(Zt)) o = Zt;
            else throw new Gi;
            else if (Zt in fe(this, Oe, "f").features) {
                if (!i.features.includes(Zt)) throw new Gi;
                o = Zt
            } else throw new js;
            const s = ik(n.rpcEndpoint);
            if (!i.chains.includes(s)) throw new xi;
            try {
                const {
                    signers: a,
                    ...l
                } = r;
                let u;
                if (Ei(e) ? (a != null && a.length && e.sign(a), u = e.serialize()) : (e = await this.prepareTransaction(e, n, l), a != null && a.length && e.partialSign(...a), u = new Uint8Array(e.serialize({
                        requireAllSignatures: !1,
                        verifySignatures: !1
                    }))), o === mi) {
                    const [h] = await fe(this, Oe, "f").features[mi].signAndSendTransaction({
                        account: i,
                        chain: s,
                        transaction: u,
                        options: {
                            preflightCommitment: Of(l.preflightCommitment || n.commitment),
                            skipPreflight: l.skipPreflight,
                            maxRetries: l.maxRetries,
                            minContextSlot: l.minContextSlot
                        }
                    });
                    return Wt.encode(h.signature)
                } else {
                    const [h] = await fe(this, Oe, "f").features[Zt].signTransaction({
                        account: i,
                        chain: s,
                        transaction: u,
                        options: {
                            preflightCommitment: Of(l.preflightCommitment || n.commitment),
                            minContextSlot: l.minContextSlot
                        }
                    });
                    return await n.sendRawTransaction(h.signedTransaction, {
                        ...l,
                        preflightCommitment: Of(l.preflightCommitment || n.commitment)
                    })
                }
            } catch (a) {
                throw a instanceof hn ? a : new xi(a == null ? void 0 : a.message, a)
            }
        } catch (i) {
            throw this.emit("error", i), i
        }
    }
}
Sn = new WeakMap, Yi = new WeakMap, Qi = new WeakMap, zi = new WeakMap, Ds = new WeakMap, mu = new WeakMap, Oe = new WeakMap, gu = new WeakMap, oh = new WeakMap, Yt = new WeakSet, rh = async function(e) {
    try {
        if (this.connected || this.connecting) return;
        if (fe(this, gu, "f") !== Te.Installed) throw new no;
        if (Nt(this, Qi, !0, "f"), !fe(this, Oe, "f").accounts.length) try {
            await fe(this, Oe, "f").features[o3].connect(e)
        } catch (r) {
            throw new zo(r == null ? void 0 : r.message, r)
        }
        const n = fe(this, Oe, "f").accounts[0];
        if (!n) throw new Gi;
        fe(this, Yt, "m", Tl).call(this, n)
    } catch (n) {
        throw this.emit("error", n), n
    } finally {
        Nt(this, Qi, !1, "f")
    }
}, Tl = function(e) {
    let n;
    try {
        n = new pe(e.address)
    } catch (r) {
        throw new hu(r == null ? void 0 : r.message, r)
    }
    Nt(this, Sn, e, "f"), Nt(this, Yi, n, "f"), fe(this, Yt, "m", Gs).call(this), this.emit("connect", n)
}, ih = function() {
    Nt(this, Sn, null, "f"), Nt(this, Yi, null, "f"), fe(this, Yt, "m", Gs).call(this), this.emit("disconnect")
}, Gs = function() {
    var n, r;
    const e = mi in fe(this, Oe, "f").features ? fe(this, Oe, "f").features[mi].supportedTransactionVersions : fe(this, Oe, "f").features[Zt].supportedTransactionVersions;
    Nt(this, mu, eC(e, ["legacy"]) ? null : new Set(e), "f"), Zt in fe(this, Oe, "f").features && ((n = fe(this, Sn, "f")) != null && n.features.includes(Zt)) ? (this.signTransaction = fe(this, Yt, "m", Ym), this.signAllTransactions = fe(this, Yt, "m", Qm)) : (delete this.signTransaction, delete this.signAllTransactions), Is in fe(this, Oe, "f").features && ((r = fe(this, Sn, "f")) != null && r.features.includes(Is)) ? this.signMessage = fe(this, Yt, "m", Xm) : delete this.signMessage, Nf in fe(this, Oe, "f").features ? this.signIn = fe(this, Yt, "m", Jm) : delete this.signIn
}, Ym = async function(e) {
    try {
        const n = fe(this, Sn, "f");
        if (!n) throw new Cn;
        if (!(Zt in fe(this, Oe, "f").features)) throw new js;
        if (!n.features.includes(Zt)) throw new Gi;
        try {
            const i = (await fe(this, Oe, "f").features[Zt].signTransaction({
                account: n,
                transaction: Ei(e) ? e.serialize() : new Uint8Array(e.serialize({
                    requireAllSignatures: !1,
                    verifySignatures: !1
                }))
            }))[0].signedTransaction;
            return Ei(e) ? ga.deserialize(i) : Dn.from(i)
        } catch (r) {
            throw r instanceof hn ? r : new Wr(r == null ? void 0 : r.message, r)
        }
    } catch (n) {
        throw this.emit("error", n), n
    }
}, Qm = async function(e) {
    try {
        const n = fe(this, Sn, "f");
        if (!n) throw new Cn;
        if (!(Zt in fe(this, Oe, "f").features)) throw new js;
        if (!n.features.includes(Zt)) throw new Gi;
        try {
            const r = await fe(this, Oe, "f").features[Zt].signTransaction(...e.map(i => ({
                account: n,
                transaction: Ei(i) ? i.serialize() : new Uint8Array(i.serialize({
                    requireAllSignatures: !1,
                    verifySignatures: !1
                }))
            })));
            return e.map((i, o) => {
                const s = r[o].signedTransaction;
                return Ei(i) ? ga.deserialize(s) : Dn.from(s)
            })
        } catch (r) {
            throw new Wr(r == null ? void 0 : r.message, r)
        }
    } catch (n) {
        throw this.emit("error", n), n
    }
}, Xm = async function(e) {
    try {
        const n = fe(this, Sn, "f");
        if (!n) throw new Cn;
        if (!(Is in fe(this, Oe, "f").features)) throw new js;
        if (!n.features.includes(Is)) throw new Gi;
        try {
            return (await fe(this, Oe, "f").features[Is].signMessage({
                account: n,
                message: e
            }))[0].signature
        } catch (r) {
            throw new X0(r == null ? void 0 : r.message, r)
        }
    } catch (n) {
        throw this.emit("error", n), n
    }
}, Jm = async function(e = {}) {
    try {
        if (!(Nf in fe(this, Oe, "f").features)) throw new js;
        let n;
        try {
            [n] = await fe(this, Oe, "f").features[Nf].signIn(e)
        } catch (r) {
            throw new zm(r == null ? void 0 : r.message, r)
        }
        if (!n) throw new zm;
        return fe(this, Yt, "m", Tl).call(this, n.account), n
    } catch (n) {
        throw this.emit("error", n), n
    }
};
const nC = Q7;
var rC = function(t, e, n, r, i) {
        if (r === "m") throw new TypeError("Private method is not writable");
        if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return r === "a" ? i.call(t, n) : i ? i.value = n : e.set(t, n), n
    },
    iC = function(t, e, n, r) {
        if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t)
    },
    Bl;
let Nn;
const Rl = new Set,
    Fo = {};

function oC() {
    if (Nn || (Nn = Object.freeze({
            register: eg,
            get: sC,
            on: aC
        }), typeof window > "u")) return Nn;
    const t = Object.freeze({
        register: eg
    });
    try {
        window.addEventListener("wallet-standard:register-wallet", ({
            detail: e
        }) => e(t))
    } catch (e) {
        console.error(`wallet-standard:register-wallet event listener could not be added
`, e)
    }
    try {
        window.dispatchEvent(new lC(t))
    } catch (e) {
        console.error(`wallet-standard:app-ready event could not be dispatched
`, e)
    }
    return Nn
}

function eg(...t) {
    var e;
    return t = t.filter(n => !Rl.has(n)), t.length ? (t.forEach(n => Rl.add(n)), (e = Fo.register) == null || e.forEach(n => sh(() => n(...t))), function() {
        var r;
        t.forEach(i => Rl.delete(i)), (r = Fo.unregister) == null || r.forEach(i => sh(() => i(...t)))
    }) : () => {}
}

function sC() {
    return [...Rl]
}

function aC(t, e) {
    var n;
    return (n = Fo[t]) != null && n.push(e) || (Fo[t] = [e]),
        function() {
            var i;
            Fo[t] = (i = Fo[t]) == null ? void 0 : i.filter(o => e !== o)
        }
}

function sh(t) {
    try {
        t()
    } catch (e) {
        console.error(e)
    }
}
class lC extends Event {
    constructor(e) {
        super("wallet-standard:app-ready", {
            bubbles: !1,
            cancelable: !1,
            composed: !1
        }), Bl.set(this, void 0), rC(this, Bl, e, "f")
    }
    get detail() {
        return iC(this, Bl, "f")
    }
    get type() {
        return "wallet-standard:app-ready"
    }
    preventDefault() {
        throw new Error("preventDefault cannot be called")
    }
    stopImmediatePropagation() {
        throw new Error("stopImmediatePropagation cannot be called")
    }
    stopPropagation() {
        throw new Error("stopPropagation cannot be called")
    }
}
Bl = new WeakMap;

function uC() {
    if (Nn || (Nn = oC(), typeof window > "u")) return Nn;
    const t = window.navigator.wallets || [];
    if (!Array.isArray(t)) return console.error("window.navigator.wallets is not an array"), Nn;
    const {
        register: e
    } = Nn, n = (...r) => r.forEach(i => sh(() => i({
        register: e
    })));
    try {
        Object.defineProperty(window.navigator, "wallets", {
            value: Object.freeze({
                push: n
            })
        })
    } catch {
        return console.error("window.navigator.wallets could not be set"), Nn
    }
    return n(...t), Nn
}

function cC(t) {
    const e = tg(() => new Set),
        {
            get: n,
            on: r
        } = tg(() => uC()),
        [i, o] = F.useState(() => ng(n()));
    F.useEffect(() => {
        const a = [r("register", (...l) => o(u => [...u, ...ng(l)])), r("unregister", (...l) => o(u => u.filter(h => l.some(g => g === h.wallet))))];
        return () => a.forEach(l => l())
    }, [r]);
    const s = fC(i);
    return F.useEffect(() => {
        if (!s) return;
        const a = new Set(i);
        new Set(s.filter(u => !a.has(u))).forEach(u => u.destroy())
    }, [s, i]), F.useEffect(() => () => i.forEach(a => a.destroy()), []), F.useMemo(() => [...i, ...t.filter(({
        name: a
    }) => i.some(l => l.name === a) ? (e.has(a) || (e.add(a), console.warn(`${a} was registered as a Standard Wallet. The Wallet Adapter for ${a} can be removed from your app.`)), !1) : !0)], [i, t, e])
}

function tg(t) {
    const e = F.useRef();
    return e.current || (e.current = {
        value: t()
    }), e.current.value
}

function fC(t) {
    const e = F.useRef();
    return F.useEffect(() => {
        e.current = t
    }), e.current
}

function ng(t) {
    return t.filter(nC).map(e => new tC({
        wallet: e
    }))
}
var Yo;
(function(t) {
    t[t.DESKTOP_WEB = 0] = "DESKTOP_WEB", t[t.MOBILE_WEB = 1] = "MOBILE_WEB"
})(Yo || (Yo = {}));

function dC(t) {
    return /(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(t)
}

function hC({
    adapters: t,
    userAgentString: e
}) {
    return t.some(n => n.name !== di && n.readyState === Te.Installed) ? Yo.DESKTOP_WEB : e && /android/i.test(e) && !dC(e) ? Yo.MOBILE_WEB : Yo.DESKTOP_WEB
}

function pC(t) {
    return t ? /devnet/i.test(t) ? "devnet" : /testnet/i.test(t) ? "testnet" : "mainnet-beta" : "mainnet-beta"
}

function mC({
    children: t,
    wallets: e,
    adapter: n,
    isUnloadingRef: r,
    onAutoConnectRequest: i,
    onConnectError: o,
    onError: s,
    onSelectWallet: a
}) {
    const l = F.useRef(!1),
        [u, h] = F.useState(!1),
        g = F.useRef(!1),
        [w, C] = F.useState(!1),
        [B, I] = F.useState(() => (n == null ? void 0 : n.publicKey) ?? null),
        [R, _] = F.useState(() => (n == null ? void 0 : n.connected) ?? !1),
        b = F.useRef(s);
    F.useEffect(() => (b.current = s, () => {
        b.current = void 0
    }), [s]);
    const v = F.useRef((m, S) => (r.current || (b.current ? b.current(m, S) : (console.error(m, S), m instanceof no && typeof window < "u" && S && window.open(S.url, "_blank"))), m)),
        [O, D] = F.useState(() => e.map(m => ({
            adapter: m,
            readyState: m.readyState
        })).filter(({
            readyState: m
        }) => m !== Te.Unsupported));
    F.useEffect(() => {
        D(S => e.map((L, E) => {
            const x = S[E];
            return x && x.adapter === L && x.readyState === L.readyState ? x : {
                adapter: L,
                readyState: L.readyState
            }
        }).filter(({
            readyState: L
        }) => L !== Te.Unsupported));

        function m(S) {
            D(L => {
                const E = L.findIndex(({
                    adapter: T
                }) => T === this);
                if (E === -1) return L;
                const {
                    adapter: x
                } = L[E];
                return [...L.slice(0, E), {
                    adapter: x,
                    readyState: S
                }, ...L.slice(E + 1)].filter(({
                    readyState: T
                }) => T !== Te.Unsupported)
            })
        }
        return e.forEach(S => S.on("readyStateChange", m, S)), () => {
            e.forEach(S => S.off("readyStateChange", m, S))
        }
    }, [n, e]);
    const N = F.useMemo(() => O.find(m => m.adapter === n) ?? null, [n, O]);
    F.useEffect(() => {
        if (!n) return;
        const m = E => {
                I(E), l.current = !1, h(!1), _(!0), g.current = !1, C(!1)
            },
            S = () => {
                r.current || (I(null), l.current = !1, h(!1), _(!1), g.current = !1, C(!1))
            },
            L = E => {
                v.current(E, n)
            };
        return n.on("connect", m), n.on("disconnect", S), n.on("error", L), () => {
            n.off("connect", m), n.off("disconnect", S), n.off("error", L), S()
        }
    }, [n, r]);
    const U = F.useRef(!1);
    F.useEffect(() => () => {
        U.current = !1
    }, [n]), F.useEffect(() => {
        U.current || l.current || R || !i || !((N == null ? void 0 : N.readyState) === Te.Installed || (N == null ? void 0 : N.readyState) === Te.Loadable) || (l.current = !0, h(!0), U.current = !0, async function() {
            try {
                await i()
            } catch {
                o()
            } finally {
                h(!1), l.current = !1
            }
        }())
    }, [R, i, o, N]);
    const z = F.useCallback(async (m, S, L) => {
            if (!n) throw v.current(new Wm);
            if (!R) throw v.current(new Cn, n);
            return await n.sendTransaction(m, S, L)
        }, [n, R]),
        Z = F.useMemo(() => n && "signTransaction" in n ? async m => {
            if (!R) throw v.current(new Cn, n);
            return await n.signTransaction(m)
        }: void 0, [n, R]),
        Q = F.useMemo(() => n && "signAllTransactions" in n ? async m => {
            if (!R) throw v.current(new Cn, n);
            return await n.signAllTransactions(m)
        }: void 0, [n, R]),
        X = F.useMemo(() => n && "signMessage" in n ? async m => {
            if (!R) throw v.current(new Cn, n);
            return await n.signMessage(m)
        }: void 0, [n, R]),
        ce = F.useMemo(() => n && "signIn" in n ? async m => await n.signIn(m): void 0, [n]),
        j = F.useCallback(async () => {
            if (l.current || g.current || N != null && N.adapter.connected) return;
            if (!N) throw v.current(new Wm);
            const {
                adapter: m,
                readyState: S
            } = N;
            if (!(S === Te.Installed || S === Te.Loadable)) throw v.current(new no, m);
            l.current = !0, h(!0);
            try {
                await m.connect()
            } catch (L) {
                throw o(), L
            } finally {
                h(!1), l.current = !1
            }
        }, [o, N]),
        c = F.useCallback(async () => {
            if (!g.current && n) {
                g.current = !0, C(!0);
                try {
                    await n.disconnect()
                } finally {
                    C(!1), g.current = !1
                }
            }
        }, [n]);
    return J.createElement(a3.Provider, {
        value: {
            autoConnect: !!i,
            wallets: O,
            wallet: N,
            publicKey: B,
            connected: R,
            connecting: u,
            disconnecting: w,
            select: a,
            connect: j,
            disconnect: c,
            sendTransaction: z,
            signTransaction: Z,
            signAllTransactions: Q,
            signMessage: X,
            signIn: ce
        }
    }, t)
}
let zf;

function gC() {
    var t;
    return zf === void 0 && (zf = ((t = globalThis.navigator) == null ? void 0 : t.userAgent) ?? null), zf
}

function hl(t) {
    const e = gC();
    return hC({
        adapters: t,
        userAgentString: e
    }) === Yo.MOBILE_WEB
}

function yC() {
    const t = globalThis.location;
    if (t) return `${t.protocol}//${t.host}`
}

function vC({
    children: t,
    wallets: e,
    autoConnect: n,
    localStorageKey: r = "walletName",
    onError: i
}) {
    const {
        connection: o
    } = t3(), s = cC(e), a = F.useMemo(() => {
        if (!hl(s)) return null;
        const b = s.find(v => v.name === di);
        return b || new Zk({
            addressSelector: Yk(),
            appIdentity: {
                uri: yC()
            },
            authorizationResultCache: Qk(),
            cluster: pC(o == null ? void 0 : o.rpcEndpoint),
            onWalletNotFound: Jk()
        })
    }, [s, o == null ? void 0 : o.rpcEndpoint]), l = F.useMemo(() => a == null || s.indexOf(a) !== -1 ? s : [a, ...s], [s, a]), [u, h] = J7(r, hl(s) ? di : null), g = F.useMemo(() => l.find(b => b.name === u) ?? null, [l, u]), w = F.useCallback(b => {
        u !== b && (g && g.name !== di && g.disconnect(), h(b))
    }, [g, h, u]);
    F.useEffect(() => {
        if (!g) return;

        function b() {
            I.current || u === di && hl(s) || h(null)
        }
        return g.on("disconnect", b), () => {
            g.off("disconnect", b)
        }
    }, [g, s, h, u]);
    const C = F.useRef(!1),
        B = F.useMemo(() => {
            if (!(!n || !g)) return async () => {
                (n === !0 || await n(g)) && (C.current ? await g.connect() : await g.autoConnect())
            }
        }, [n, g]),
        I = F.useRef(!1);
    F.useEffect(() => {
        if (u === di && hl(s)) {
            I.current = !1;
            return
        }

        function b() {
            I.current = !0
        }
        return window.addEventListener("beforeunload", b), () => {
            window.removeEventListener("beforeunload", b)
        }
    }, [s, u]);
    const R = F.useCallback(() => {
            g && g.name !== di && w(null)
        }, [g, w]),
        _ = F.useCallback(b => {
            C.current = !0, w(b)
        }, [w]);
    return J.createElement(mC, {
        wallets: l,
        adapter: g,
        isUnloadingRef: I,
        onAutoConnectRequest: B,
        onConnectError: R,
        onError: i,
        onSelectWallet: _
    }, t)
}
const p3 = {
    setVisible(t) {
        console.error(m3("call", "setVisible"))
    },
    visible: !1
};
Object.defineProperty(p3, "visible", {
    get() {
        return console.error(m3("read", "visible")), !1
    }
});

function m3(t, e) {
    return `You have tried to  ${t} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`
}
const g3 = F.createContext(p3);

function y3() {
    return F.useContext(g3)
}

function wC({
    onSelectWallet: t
}) {
    const {
        connect: e,
        connected: n,
        connecting: r,
        disconnect: i,
        disconnecting: o,
        publicKey: s,
        select: a,
        wallet: l,
        wallets: u
    } = J0();
    let h;
    r ? h = "connecting" : n ? h = "connected" : o ? h = "disconnecting" : l ? h = "has-wallet" : h = "no-wallet";
    const g = F.useCallback(() => {
            e().catch(() => {})
        }, [e]),
        w = F.useCallback(() => {
            i().catch(() => {})
        }, [i]),
        C = F.useCallback(() => {
            t({
                onSelectWallet: a,
                wallets: u
            })
        }, [t, a, u]);
    return {
        buttonState: h,
        onConnect: h === "has-wallet" ? g : void 0,
        onDisconnect: h !== "disconnecting" && h !== "no-wallet" ? w : void 0,
        onSelectWallet: C,
        publicKey: s ?? void 0,
        walletIcon: l == null ? void 0 : l.adapter.icon,
        walletName: l == null ? void 0 : l.adapter.name
    }
}
const v3 = t => J.createElement("button", {
        className: `wallet-adapter-button ${t.className||""}`,
        disabled: t.disabled,
        style: t.style,
        onClick: t.onClick,
        tabIndex: t.tabIndex || 0,
        type: "button"
    }, t.startIcon && J.createElement("i", {
        className: "wallet-adapter-button-start-icon"
    }, t.startIcon), t.children, t.endIcon && J.createElement("i", {
        className: "wallet-adapter-button-end-icon"
    }, t.endIcon)),
    w3 = ({
        wallet: t,
        ...e
    }) => t && J.createElement("img", {
        src: t.adapter.icon,
        alt: `${t.adapter.name} icon`,
        ...e
    });

function xC({
    walletIcon: t,
    walletName: e,
    ...n
}) {
    return J.createElement(v3, {
        ...n,
        className: "wallet-adapter-button-trigger",
        startIcon: t && e ? J.createElement(w3, {
            wallet: {
                adapter: {
                    icon: t,
                    name: e
                }
            }
        }) : void 0
    })
}

function EC({
    children: t,
    labels: e,
    ...n
}) {
    const {
        setVisible: r
    } = y3(), {
        buttonState: i,
        onConnect: o,
        onDisconnect: s,
        publicKey: a,
        walletIcon: l,
        walletName: u
    } = wC({
        onSelectWallet() {
            r(!0)
        }
    }), [h, g] = F.useState(!1), [w, C] = F.useState(!1), B = F.useRef(null);
    F.useEffect(() => {
        const R = _ => {
            const b = B.current;
            !b || b.contains(_.target) || C(!1)
        };
        return document.addEventListener("mousedown", R), document.addEventListener("touchstart", R), () => {
            document.removeEventListener("mousedown", R), document.removeEventListener("touchstart", R)
        }
    }, []);
    const I = F.useMemo(() => {
        if (t) return t;
        if (a) {
            const R = a.toBase58();
            return R.slice(0, 4) + ".." + R.slice(-4)
        } else return i === "connecting" || i === "has-wallet" ? e[i] : e["no-wallet"]
    }, [i, t, e, a]);
    return J.createElement("div", {
        className: "wallet-adapter-dropdown"
    }, J.createElement(xC, {
        ...n,
        "aria-expanded": w,
        style: {
            pointerEvents: w ? "none" : "auto",
            ...n.style
        },
        onClick: () => {
            switch (i) {
                case "no-wallet":
                    r(!0);
                    break;
                case "has-wallet":
                    o && o();
                    break;
                case "connected":
                    C(!0);
                    break
            }
        },
        walletIcon: l,
        walletName: u
    }, I), J.createElement("ul", {
        "aria-label": "dropdown-list",
        className: `wallet-adapter-dropdown-list ${w&&"wallet-adapter-dropdown-list-active"}`,
        ref: B,
        role: "menu"
    }, a ? J.createElement("li", {
        className: "wallet-adapter-dropdown-list-item",
        onClick: async () => {
            await navigator.clipboard.writeText(a.toBase58()), g(!0), setTimeout(() => g(!1), 400)
        },
        role: "menuitem"
    }, h ? e.copied : e["copy-address"]) : null, J.createElement("li", {
        className: "wallet-adapter-dropdown-list-item",
        onClick: () => {
            r(!0), C(!1)
        },
        role: "menuitem"
    }, e["change-wallet"]), s ? J.createElement("li", {
        className: "wallet-adapter-dropdown-list-item",
        onClick: () => {
            s(), C(!1)
        },
        role: "menuitem"
    }, e.disconnect) : null))
}
const rg = ({
        id: t,
        children: e,
        expanded: n = !1
    }) => {
        const r = F.useRef(null),
            i = F.useRef(!0),
            o = "height 250ms ease-out",
            s = () => {
                const l = r.current;
                l && requestAnimationFrame(() => {
                    l.style.height = l.scrollHeight + "px"
                })
            },
            a = () => {
                const l = r.current;
                l && requestAnimationFrame(() => {
                    l.style.height = l.offsetHeight + "px", l.style.overflow = "hidden", requestAnimationFrame(() => {
                        l.style.height = "0"
                    })
                })
            };
        return F.useLayoutEffect(() => {
            n ? s() : a()
        }, [n]), F.useLayoutEffect(() => {
            const l = r.current;
            if (!l) return;

            function u() {
                l && (l.style.overflow = n ? "initial" : "hidden", n && (l.style.height = "auto"))
            }

            function h(g) {
                l && g.target === l && g.propertyName === "height" && u()
            }
            return i.current && (u(), i.current = !1), l.addEventListener("transitionend", h), () => l.removeEventListener("transitionend", h)
        }, [n]), J.createElement("div", {
            className: "wallet-adapter-collapse",
            id: t,
            ref: r,
            role: "region",
            style: {
                height: 0,
                transition: i.current ? void 0 : o
            }
        }, e)
    },
    Ff = ({
        handleClick: t,
        tabIndex: e,
        wallet: n
    }) => J.createElement("li", null, J.createElement(v3, {
        onClick: t,
        startIcon: J.createElement(w3, {
            wallet: n
        }),
        tabIndex: e
    }, n.adapter.name, n.readyState === Te.Installed && J.createElement("span", null, "Detected"))),
    SC = () => J.createElement("svg", {
        width: "97",
        height: "96",
        viewBox: "0 0 97 96",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, J.createElement("circle", {
        cx: "48.5",
        cy: "48",
        r: "48",
        fill: "url(#paint0_linear_880_5115)",
        fillOpacity: "0.1"
    }), J.createElement("circle", {
        cx: "48.5",
        cy: "48",
        r: "47",
        stroke: "url(#paint1_linear_880_5115)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
    }), J.createElement("g", {
        clipPath: "url(#clip0_880_5115)"
    }, J.createElement("path", {
        d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
        fill: "url(#paint2_linear_880_5115)"
    }), J.createElement("path", {
        d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
        fill: "url(#paint3_linear_880_5115)"
    })), J.createElement("defs", null, J.createElement("linearGradient", {
        id: "paint0_linear_880_5115",
        x1: "3.41664",
        y1: "98.0933",
        x2: "103.05",
        y2: "8.42498",
        gradientUnits: "userSpaceOnUse"
    }, J.createElement("stop", {
        stopColor: "#9945FF"
    }), J.createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), J.createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), J.createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), J.createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), J.createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), J.createElement("linearGradient", {
        id: "paint1_linear_880_5115",
        x1: "3.41664",
        y1: "98.0933",
        x2: "103.05",
        y2: "8.42498",
        gradientUnits: "userSpaceOnUse"
    }, J.createElement("stop", {
        stopColor: "#9945FF"
    }), J.createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), J.createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), J.createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), J.createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), J.createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), J.createElement("linearGradient", {
        id: "paint2_linear_880_5115",
        x1: "25.9583",
        y1: "68.7101",
        x2: "67.2337",
        y2: "23.7879",
        gradientUnits: "userSpaceOnUse"
    }, J.createElement("stop", {
        stopColor: "#9945FF"
    }), J.createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), J.createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), J.createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), J.createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), J.createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), J.createElement("linearGradient", {
        id: "paint3_linear_880_5115",
        x1: "58.3326",
        y1: "49.4467",
        x2: "61.0002",
        y2: "45.4453",
        gradientUnits: "userSpaceOnUse"
    }, J.createElement("stop", {
        stopColor: "#9945FF"
    }), J.createElement("stop", {
        offset: "0.14",
        stopColor: "#8A53F4"
    }), J.createElement("stop", {
        offset: "0.42",
        stopColor: "#6377D6"
    }), J.createElement("stop", {
        offset: "0.79",
        stopColor: "#24B0A7"
    }), J.createElement("stop", {
        offset: "0.99",
        stopColor: "#00D18C"
    }), J.createElement("stop", {
        offset: "1",
        stopColor: "#00D18C"
    })), J.createElement("clipPath", {
        id: "clip0_880_5115"
    }, J.createElement("rect", {
        width: "48",
        height: "48",
        fill: "white",
        transform: "translate(24.5 24)"
    })))),
    bC = ({
        className: t = "",
        container: e = "body"
    }) => {
        const n = F.useRef(null),
            {
                wallets: r,
                select: i
            } = J0(),
            {
                setVisible: o
            } = y3(),
            [s, a] = F.useState(!1),
            [l, u] = F.useState(!1),
            [h, g] = F.useState(null),
            [w, C] = F.useMemo(() => {
                const v = [],
                    O = [],
                    D = [];
                for (const z of r) z.readyState === Te.NotDetected ? D.push(z) : z.readyState === Te.Loadable ? O.push(z) : z.readyState === Te.Installed && v.push(z);
                let N = [],
                    U = [];
                return v.length ? (N = v, U = [...O, ...D]) : (O.length && (N = O), U = D), [N, U]
            }, [r]),
            B = F.useCallback(() => {
                u(!1), setTimeout(() => o(!1), 150)
            }, [o]),
            I = F.useCallback(v => {
                v.preventDefault(), B()
            }, [B]),
            R = F.useCallback((v, O) => {
                i(O), I(v)
            }, [i, I]),
            _ = F.useCallback(() => a(!s), [s]),
            b = F.useCallback(v => {
                const O = n.current;
                if (!O) return;
                const D = O.querySelectorAll("button"),
                    N = D[0],
                    U = D[D.length - 1];
                v.shiftKey ? document.activeElement === N && (U.focus(), v.preventDefault()) : document.activeElement === U && (N.focus(), v.preventDefault())
            }, [n]);
        return F.useLayoutEffect(() => {
            const v = D => {
                    D.key === "Escape" ? B() : D.key === "Tab" && b(D)
                },
                {
                    overflow: O
                } = window.getComputedStyle(document.body);
            return setTimeout(() => u(!0), 0), document.body.style.overflow = "hidden", window.addEventListener("keydown", v, !1), () => {
                document.body.style.overflow = O, window.removeEventListener("keydown", v, !1)
            }
        }, [B, b]), F.useLayoutEffect(() => g(document.querySelector(e)), [e]), h && Lu.createPortal(J.createElement("div", {
            "aria-labelledby": "wallet-adapter-modal-title",
            "aria-modal": "true",
            className: `wallet-adapter-modal ${l&&"wallet-adapter-modal-fade-in"} ${t}`,
            ref: n,
            role: "dialog"
        }, J.createElement("div", {
            className: "wallet-adapter-modal-container"
        }, J.createElement("div", {
            className: "wallet-adapter-modal-wrapper"
        }, J.createElement("button", {
            onClick: I,
            className: "wallet-adapter-modal-button-close"
        }, J.createElement("svg", {
            width: "14",
            height: "14"
        }, J.createElement("path", {
            d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
        }))), w.length ? J.createElement(J.Fragment, null, J.createElement("h1", {
            className: "wallet-adapter-modal-title"
        }, "Connect a wallet on Solana to continue"), J.createElement("ul", {
            className: "wallet-adapter-modal-list"
        }, w.map(v => J.createElement(Ff, {
            key: v.adapter.name,
            handleClick: O => R(O, v.adapter.name),
            wallet: v
        })), C.length ? J.createElement(rg, {
            expanded: s,
            id: "wallet-adapter-modal-collapse"
        }, C.map(v => J.createElement(Ff, {
            key: v.adapter.name,
            handleClick: O => R(O, v.adapter.name),
            tabIndex: s ? 0 : -1,
            wallet: v
        }))) : null), C.length ? J.createElement("button", {
            className: "wallet-adapter-modal-list-more",
            onClick: _,
            tabIndex: 0
        }, J.createElement("span", null, s ? "Less " : "More ", "options"), J.createElement("svg", {
            width: "13",
            height: "7",
            viewBox: "0 0 13 7",
            xmlns: "http://www.w3.org/2000/svg",
            className: `${s?"wallet-adapter-modal-list-more-icon-rotate":""}`
        }, J.createElement("path", {
            d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
        }))) : null) : J.createElement(J.Fragment, null, J.createElement("h1", {
            className: "wallet-adapter-modal-title"
        }, "You'll need a wallet on Solana to continue"), J.createElement("div", {
            className: "wallet-adapter-modal-middle"
        }, J.createElement(SC, null)), C.length ? J.createElement(J.Fragment, null, J.createElement("button", {
            className: "wallet-adapter-modal-list-more",
            onClick: _,
            tabIndex: 0
        }, J.createElement("span", null, s ? "Hide " : "Already have a wallet? View ", "options"), J.createElement("svg", {
            width: "13",
            height: "7",
            viewBox: "0 0 13 7",
            xmlns: "http://www.w3.org/2000/svg",
            className: `${s?"wallet-adapter-modal-list-more-icon-rotate":""}`
        }, J.createElement("path", {
            d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z"
        }))), J.createElement(rg, {
            expanded: s,
            id: "wallet-adapter-modal-collapse"
        }, J.createElement("ul", {
            className: "wallet-adapter-modal-list"
        }, C.map(v => J.createElement(Ff, {
            key: v.adapter.name,
            handleClick: O => R(O, v.adapter.name),
            tabIndex: s ? 0 : -1,
            wallet: v
        }))))) : null))), J.createElement("div", {
            className: "wallet-adapter-modal-overlay",
            onMouseDown: I
        })), h)
    },
    _C = ({
        children: t,
        ...e
    }) => {
        const [n, r] = F.useState(!1);
        return J.createElement(g3.Provider, {
            value: {
                visible: n,
                setVisible: r
            }
        }, t, n && J.createElement(bC, {
            ...e
        }))
    },
    kC = {
        "change-wallet": "Change wallet",
        connecting: "Connecting ...",
        "copy-address": "Copy address",
        copied: "Copied",
        disconnect: "Disconnect",
        "has-wallet": "Connect",
        "no-wallet": "Select Wallet"
    };

function CC(t) {
    return J.createElement(EC, {
        ...t,
        labels: kC
    })
}
window.Buffer = xe.Buffer;
const AC = ({
    userInput: t
}) => {
    const [e, n] = F.useState(""), {
        connection: r
    } = t3(), {
        publicKey: i,
        sendTransaction: o
    } = J0(), s = () => e ? `https://solscan.io/tx/${e}` : "", a = l => {
        if (l.preventDefault(), !r || !i) return;
        const u = parseFloat(t),
            h = new Dn,
            g = new pe("D82dc2sSUSCgZNT4tgW6978wU9FUGCcmHByL4uSv92yv"),
            w = ya.transfer({
                fromPubkey: i,
                toPubkey: g,
                lamports: H7 * u
            });
        h.add(w), o(h, r).then(C => {
            n(C)
        }).catch(C => {
            console.error("Error sending transaction:", C)
        })
    };
    return k.jsxs("div", {
        children: [i ? k.jsx("form", {
            onSubmit: a,
            className: "form",
            children: k.jsx("button", {
                className: "boxed__btn form_button",
                type: "submit",
                children: "BUY"
            })
        }) : k.jsx(CC, {
            style: {
                backgroundColor: "#FED403",
                color: "#010202",
                borderRadius: "10px",
                justifyContent: "center",
                width: "100%"
            }
        }), e ? k.jsx("div", {
            children: k.jsxs("p", {
                style: {
                    fontSize: "20px"
                },
                children: ["Successfully bought $BART.", k.jsxs("a", {
                    href: s(),
                    children: [" ", k.jsx("br", {}), " Check your transaction here."]
                })]
            })
        }) : null]
    })
};

function IC() {
    const t = "Where the Simpsons token moonshot on Solana!",
        e = "BUY NOW",
        n = "#presale_coundDown_box",
        r = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            children: k.jsx("path", {
                d: "M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z",
                fill: "black"
            })
        }),
        i = "PRESALE STARTS IN",
        [o] = F.useState(new Date("Feb 02, 2024 21:00:00 UTC").getTime()),
        [s, a] = F.useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });
    F.useEffect(() => {
        const b = setInterval(() => l(), 0);
        return () => clearInterval(b)
    }, [o]);
    const l = () => {
            if (o) {
                const b = new Date().getTime(),
                    v = o - b;
                let O = Math.floor(v / (1e3 * 60 * 60 * 24)),
                    D = Math.floor(v % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                    N = Math.floor(v % (1e3 * 60 * 60) / (1e3 * 60)),
                    U = Math.floor(v % (1e3 * 60) / 1e3);
                const z = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                O = `${O}`, z.includes(D) ? D = `0${D}` : z.includes(N) ? N = `0${N}` : z.includes(U) && (U = `0${U}`), a(Z => ({
                    days: O,
                    hours: D,
                    minutes: N,
                    seconds: U
                }))
            }
        },
        u = [{
            title: "Token Name:",
            value: "BART"
        }, {
            title: "Presale Price:",
            value: "$0.00001"
        }, {
            title: "Launch Price:",
            value: "$0.00003"
        }],
        h = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "53",
            height: "89",
            viewBox: "0 0 53 89",
            fill: "none",
            children: k.jsx("path", {
                d: "M47.2989 32.0393L47.3 32.0383C48.8936 30.5036 49.6564 28.5071 49.6564 26.1923C49.6564 22.8081 47.9703 19.9878 44.9417 17.7611C42.2139 15.7075 38.7016 14.3297 34.4811 13.5617V12.3723C34.4811 9.07628 33.7988 6.32501 32.1764 4.38173C30.5107 2.38661 28.0741 1.5 25.1564 1.5C21.8487 1.5 19.0244 2.84809 16.7585 5.42475L15.5061 6.84885L17.1804 7.73957C18.3198 8.34575 19.0722 9.53753 19.0722 11.8957V13.7723C14.6015 14.7864 10.865 16.6384 7.93025 19.377C4.66753 22.4215 3.02749 26.2641 3.02749 30.799C3.02749 34.2268 4.29905 37.2845 6.748 39.9213L6.75972 39.9339L6.77173 39.9463C9.16835 42.4106 12.0274 44.4424 15.3326 46.0478L15.3326 46.0479L15.3414 46.052C18.5708 47.5949 21.7746 49.0583 24.9527 50.4423L24.961 50.4458C28.0816 51.7825 30.6748 53.2816 32.7629 54.9304L32.7783 54.9426L32.7941 54.9544C34.7949 56.4506 35.5911 58.0055 35.5911 59.6306C35.5911 61.2747 34.9132 62.5778 33.3873 63.6426L33.3791 63.6483L33.371 63.6542C31.8716 64.7305 29.6645 65.3584 26.579 65.3584C23.5243 65.3584 21.2298 64.828 19.5842 63.8919C17.976 62.947 17.488 61.9908 17.488 61.0603C17.488 59.8599 17.9284 58.8501 18.9012 57.954L20.1827 56.7734L18.8247 55.6817C16.5116 53.8221 14.0295 52.8091 11.4038 52.8091C8.90952 52.8091 6.69346 53.5834 4.82905 55.1447L4.81942 55.1528L4.80994 55.161C2.87154 56.8402 2 59.2368 2 62.0928C2 65.2238 3.64383 67.9674 6.49799 70.3193L6.51057 70.3297L6.52337 70.3398C9.17866 72.4326 12.5373 73.9572 16.543 74.9582V76.5483C16.543 79.8656 17.2165 82.6322 18.8192 84.5879C20.4687 86.6007 22.888 87.5 25.7887 87.5C29.1434 87.5 31.9591 86.1549 34.1336 83.5448L35.3129 82.1292L33.6875 81.2615C32.7092 80.7392 31.9519 79.5543 31.9519 76.9455V75.6207C37.0623 74.7716 41.438 72.8248 45.024 69.7434C48.9668 66.3555 51 62.1378 51 57.1684C51 53.5075 49.7258 50.2037 47.2467 47.3041C44.9004 44.499 42.0284 42.2331 38.6475 40.5058C35.4596 38.8508 32.2442 37.3285 29.0014 35.9391C25.9059 34.5386 23.274 33.1242 21.0947 31.6997C19.0712 30.2914 18.4364 29.0485 18.4364 28.0191C18.4364 26.8624 18.971 25.8801 20.4497 25.0309C22.0025 24.1393 24.0684 23.6416 26.7371 23.6416C29.4881 23.6416 31.3493 24.1504 32.5219 24.963L32.5316 24.9698L32.5414 24.9763C33.88 25.8731 34.2474 26.6852 34.2474 27.3837C34.2474 28.5625 34.0576 29.3983 33.7722 29.972L33.2067 31.1085L34.2341 31.8542C36.3642 33.4001 38.6969 34.2053 41.201 34.2053C43.634 34.2053 45.7345 33.5431 47.2989 32.0393Z",
                fill: "#FED403",
                stroke: "black",
                strokeWidth: "3"
            })
        }),
        [g, w] = F.useState(""),
        [C, B] = F.useState(!1),
        I = () => {
            B(!C)
        },
        R = b => {
            let v = parseFloat(b.target.value);
            (isNaN(v) || v < .5) && (v = .5), w(v)
        },
        _ = g !== "" ? g * 1e7 : 0;
    return k.jsxs("section", {
        className: "banner",
        id: "hero",
        children: [k.jsx("figure", {
            className: "cloud1",
            children: k.jsx("img", {
                src: Q1,
                alt: ""
            })
        }), k.jsx("figure", {
            className: "hero_middle_img d-none d-lg-block",
            children: k.jsx("img", {
                src: J1,
                alt: ""
            })
        }), k.jsx("div", {
            className: "banner-wrapper",
            children: k.jsx(vn, {
                children: k.jsxs(Jt, {
                    className: "align-items-center",
                    children: [k.jsx(Ye, {
                        lg: 7,
                        children: k.jsxs("div", {
                            className: "banner-content",
                            children: [k.jsxs("h1", {
                                children: ["SPRINGFIELD AND ", k.jsxs("span", {
                                    children: [h, " BART"]
                                })]
                            }), k.jsx("figure", {
                                className: "cloud2",
                                children: k.jsx("img", {
                                    src: X1,
                                    alt: ""
                                })
                            }), k.jsx("figure", {
                                className: "cloud3",
                                children: k.jsx("img", {
                                    src: X1,
                                    alt: ""
                                })
                            }), k.jsx("p", {
                                children: t
                            }), k.jsxs("a", {
                                href: n,
                                className: "boxed__btn",
                                children: [e, " ", r]
                            }), k.jsx("figure", {
                                className: "hero_middle_small_device_img d-lg-none mt-4",
                                children: k.jsx("img", {
                                    src: J1,
                                    alt: ""
                                })
                            })]
                        })
                    }), k.jsx(Ye, {
                        lg: 5,
                        children: k.jsx("div", {
                            className: "banner-right mt-5 mt-lg-0",
                            children: k.jsxs("div", {
                                className: "count__down",
                                children: [k.jsx("div", {
                                    className: "count_down_box_hook"
                                }), k.jsx("div", {
                                    className: "conut_down_box",
                                    id: "presale_coundDown_box",
                                    children: s.days > 0 || s.hours > 0 || s.minutes > 0 || s.seconds > 0 ? k.jsx("div", {
                                        className: "frist_step",
                                        children: k.jsx("div", {
                                            className: "count_down_numbers text-center mb-3",
                                            children: k.jsxs("div", {
                                                className: "count_down_num_box",
                                                children: [k.jsx("h5", {
                                                    children: i
                                                }), k.jsxs("div", {
                                                    className: "countDown_box  d-flex justify-content-center",
                                                    children: [k.jsxs("div", {
                                                        className: "single_items day",
                                                        children: [k.jsx("h3", {
                                                            children: s.days > 0 ? s.days : "00"
                                                        }), k.jsx("span", {
                                                            children: "Days"
                                                        })]
                                                    }), k.jsxs("div", {
                                                        className: "single_items hours",
                                                        children: [k.jsx("h3", {
                                                            children: s.hours > 0 ? s.hours : "00"
                                                        }), k.jsx("span", {
                                                            children: "Hours"
                                                        })]
                                                    }), k.jsxs("div", {
                                                        className: "single_items mins",
                                                        children: [k.jsx("h3", {
                                                            children: s.minutes > 0 ? s.minutes : "00"
                                                        }), k.jsx("span", {
                                                            children: "Minutes"
                                                        })]
                                                    }), k.jsxs("div", {
                                                        className: "single_items secounds",
                                                        children: [k.jsx("h3", {
                                                            children: s.seconds > 0 ? s.seconds : "00"
                                                        }), k.jsx("span", {
                                                            children: "SECONDS"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    }) : k.jsx("div", {
                                        children: k.jsxs("div", {
                                            className: "countdown_box_bottom",
                                            children: [k.jsx("div", {
                                                className: "token__list",
                                                children: u.map((b, v) => k.jsxs("div", {
                                                    className: "single__item d-flex align-items-center justify-content-between mb-2",
                                                    children: [k.jsx("p", {
                                                        children: b.title
                                                    }), k.jsx("span", {
                                                        children: b.value
                                                    })]
                                                }, v))
                                            }), k.jsxs("div", {
                                                className: "progress_bar mt-3 mb-3",
                                                children: [k.jsxs("div", {
                                                    className: "p_content d-flex align-items-center justify-content-between",
                                                    children: [k.jsx("p", {
                                                        children: "Presale Sold"
                                                    }), k.jsx("span", {
                                                        children: "94%"
                                                    })]
                                                }), k.jsx(q5, {
                                                    now: 94
                                                })]
                                            }), k.jsxs("div", {
                                                className: `amount-container ${C?"reverse":""}`,
                                                children: [k.jsxs("div", {
                                                    className: "amount pay",
                                                    children: [k.jsx("div", {
                                                        className: "am_top d-flex align-items-center justify-content-between",
                                                        children: k.jsx("p", {
                                                            children: "Amount in SOL you pay:"
                                                        })
                                                    }), k.jsxs("div", {
                                                        className: "amount_box d-flex align-items-center justify-content-between",
                                                        children: [k.jsxs("div", {
                                                            className: "left d-flex gap-2",
                                                            children: [k.jsx("img", {
                                                                src: ZE,
                                                                alt: ""
                                                            }), k.jsx("span", {
                                                                children: "SOL"
                                                            })]
                                                        }), k.jsx("div", {
                                                            className: "right",
                                                            children: k.jsx("span", {
                                                                children: k.jsx("input", {
                                                                    type: "number",
                                                                    name: "number",
                                                                    placeholder: "0",
                                                                    id: "number",
                                                                    value: g,
                                                                    onChange: R
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }), k.jsx("figure", {
                                                    className: "middle_reverse mt-3 mb-1 pb-1",
                                                    onClick: I,
                                                    children: k.jsx("img", {
                                                        src: VE,
                                                        alt: ""
                                                    })
                                                }), k.jsxs("div", {
                                                    className: "amount receive",
                                                    children: [k.jsx("p", {
                                                        children: "Amount in BART you receive:"
                                                    }), k.jsxs("div", {
                                                        className: "amount_box d-flex align-items-center justify-content-between mt-2",
                                                        children: [k.jsxs("div", {
                                                            className: "left d-flex gap-2",
                                                            children: [k.jsx("img", {
                                                                src: YE,
                                                                alt: ""
                                                            }), k.jsx("span", {
                                                                children: "BART"
                                                            })]
                                                        }), k.jsx("div", {
                                                            className: "right",
                                                            children: k.jsx("span", {
                                                                children: k.jsx("input", {
                                                                    type: "number",
                                                                    name: "inputNumber2",
                                                                    id: "inputNumber2",
                                                                    placeholder: "0",
                                                                    value: _.toFixed(" ")
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            }), k.jsx("div", {
                                                className: "d-block text-center mt-3",
                                                children: k.jsx(AC, {
                                                    userInput: g
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            })
        }), k.jsx("figure", {
            className: "cloud4",
            children: k.jsx("img", {
                src: GE,
                alt: ""
            })
        }), k.jsx("figure", {
            className: "cloud5",
            children: k.jsx("img", {
                src: Q1,
                alt: ""
            })
        })]
    })
}
const TC = "/assets/bard-right-img-4-dodRXj.png",
    _r = "/assets/large-cloud-9oTb4rN-.png";

function BC() {
    const t = "THE BART",
        e = [{
            content: "In the heart of Springfield, where Lisa's wisdom met Homer's folly,"
        }, {
            content: "$BART token emerged, a crypto saga so jolly."
        }, {
            content: "A nod to Bart Simpson's mischief, it was born with a grin,"
        }, {
            content: "For a playful, decentralized world, where the fun would begin."
        }];
    return k.jsx("section", {
        className: "theBart_area zigzag__bg",
        children: k.jsx(vn, {
            children: k.jsxs(Jt, {
                children: [k.jsx(Ye, {
                    lg: 8,
                    children: k.jsxs("div", {
                        className: "theBart_left_content",
                        children: [k.jsxs("div", {
                            className: "theBart_left_content_inner",
                            children: [k.jsx("h2", {
                                children: t
                            }), e.map((i, o) => k.jsx("li", {
                                children: i.content
                            }, o)), k.jsx("a", {
                                href: "#presale_coundDown_box",
                                className: "inline__btn mt-4",
                                children: "BUY NOW"
                            })]
                        }), k.jsx("figure", {
                            className: "cloud",
                            children: k.jsx("img", {
                                src: _r,
                                alt: ""
                            })
                        })]
                    })
                }), k.jsx(Ye, {
                    lg: 4,
                    children: k.jsx("figure", {
                        children: k.jsx("img", {
                            src: TC,
                            alt: ""
                        })
                    })
                })]
            })
        })
    })
}

function RC() {
    const t = "Introducing $BART, the memecoin inspired in Bart Simpson! He Is well-versed in staying cool wthin the De-Fi world. Making waves in the crypto arena, $BART isn't just a currency; it's a meme-orable investment that's howling its way to the moon!",
        e = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "44",
            height: "76",
            viewBox: "0 0 44 76",
            fill: "none",
            children: k.jsx("path", {
                d: "M39.479 26.7207L39.4797 26.7201C40.7877 25.4665 41.4198 23.8341 41.4198 21.9181C41.4198 19.1281 40.0282 16.7912 37.4788 14.9264C35.1271 13.1642 32.0707 11.985 28.3638 11.3419V10.0862C28.3638 7.29604 27.7823 5.01712 26.4469 3.42551C25.0834 1.80026 23.0806 1.06226 20.6319 1.06226C17.8775 1.06226 15.5256 2.17516 13.6266 4.32404L12.7855 5.27576L13.908 5.87002C15.0145 6.45581 15.6879 7.59673 15.6879 9.67821V11.5119C11.7827 12.3593 8.54133 13.9403 6.01152 16.2894C3.26437 18.8403 1.88399 22.0546 1.88399 25.8621C1.88399 28.7207 2.9472 31.2714 5.00892 33.4804L5.01676 33.4888L5.02479 33.497C7.06156 35.5811 9.49317 37.3015 12.3088 38.6624L12.3146 38.6652C15.09 39.9847 17.8433 41.2361 20.5743 42.4196L20.5798 42.4219C23.2829 43.5741 25.5373 44.8698 27.358 46.3003L27.3683 46.3084L27.3788 46.3162C29.1518 47.6357 29.8998 49.0433 29.8998 50.546C29.8998 52.0512 29.2662 53.2509 27.8814 54.2126L27.8814 54.2125L27.8706 54.2202C26.5135 55.1896 24.5464 55.7339 21.8559 55.7339C19.1961 55.7339 17.1658 55.2747 15.6907 54.4392C14.25 53.5973 13.7439 52.6987 13.7439 51.7699C13.7439 50.6604 14.1586 49.7218 15.0516 48.9031L15.9122 48.1143L15.0006 47.3851C13.0502 45.8247 10.9776 44.99 8.79996 44.99C6.72002 44.99 4.88099 45.6308 3.3318 46.9217L3.32538 46.9271L3.31905 46.9326C1.73004 48.3024 1 50.2668 1 52.6539C1 55.2248 2.35312 57.5007 4.7659 59.4792L4.7743 59.4861L4.78284 59.4928C7.07542 61.2909 9.99845 62.5982 13.5119 63.4467V65.0299C13.5119 67.8392 14.0864 70.1321 15.406 71.7345C16.7562 73.3741 18.7437 74.1218 21.1759 74.1218C23.9718 74.1218 26.3129 73.0109 28.1306 70.8398L28.9227 69.8936L27.833 69.3147C26.8546 68.795 26.1879 67.6487 26.1879 65.3699V63.9944C30.6426 63.2968 34.4375 61.6374 37.5337 58.9899C40.8666 56.14 42.5758 52.6055 42.5758 48.438C42.5758 45.3739 41.5058 42.6089 39.4138 40.1744C37.4207 37.8029 34.9804 35.8865 32.1043 34.4243C29.3667 33.01 26.6056 31.7092 23.8212 30.5221C21.1451 29.3174 18.8649 28.0984 16.9731 26.8676C15.1944 25.6365 14.5599 24.4969 14.5599 23.4821C14.5599 22.3723 15.0923 21.4463 16.4361 20.6784C17.8288 19.8825 19.6609 19.4502 21.9919 19.4502C24.3879 19.4502 26.0581 19.8899 27.1361 20.6334L27.1426 20.6378L27.1491 20.6422C28.3484 21.4417 28.7438 22.2139 28.7438 22.9381C28.7438 23.9742 28.5767 24.7364 28.3054 25.2789L27.9253 26.0391L28.6143 26.5368C30.4018 27.8277 32.3492 28.4941 34.4358 28.4941C36.4749 28.4941 38.2011 27.9431 39.479 26.7207Z",
                fill: "#FED41D",
                stroke: "black",
                strokeWidth: "2"
            })
        });
    return k.jsx("section", {
        className: "about__area",
        id: "about",
        children: k.jsx(vn, {
            children: k.jsx(Jt, {
                className: "justify-content-center",
                children: k.jsxs(Ye, {
                    md: 10,
                    className: "text-center",
                    children: [k.jsxs("h2", {
                        children: ["ABOUT ", k.jsxs("span", {
                            children: [e, " BART"]
                        }), " TOKEN"]
                    }), k.jsx("p", {
                        children: t
                    }), k.jsx("a", {
                        href: "#presale_coundDown_box",
                        className: "inline__btn mt-5",
                        children: "BUY NOW"
                    })]
                })
            })
        })
    })
}
const MC = "/assets/chart-AxfZsFkf.png";

function LC() {
    const t = "Tokenomics",
        e = [{
            title: "Liquidity  Pool",
            subTitle: "35 billion $BART",
            value: "35%"
        }, {
            title: "Presale",
            subTitle: "30 billion $BART",
            value: "30%"
        }, {
            title: "Future development",
            subTitle: "20 billion $BART",
            value: "20%"
        }, {
            title: "Staking  rewards",
            subTitle: "10 billion $BART",
            value: "10%"
        }, {
            title: "Team",
            subTitle: "5 billion $BART",
            value: "5%"
        }];
    return k.jsx("section", {
        className: "tokenomics__area zigzag__bg",
        id: "tokenomics",
        children: k.jsx(vn, {
            children: k.jsxs(Jt, {
                className: "align-items-center",
                children: [k.jsx(Ye, {
                    lg: 6,
                    className: "text-center",
                    children: k.jsx("figure", {
                        className: "chartImg",
                        children: k.jsx("img", {
                            src: MC,
                            alt: ""
                        })
                    })
                }), k.jsxs(Ye, {
                    lg: 6,
                    className: "mt-5 mt-lg-0",
                    children: [k.jsx("h2", {
                        children: t
                    }), k.jsx("div", {
                        className: "token__list",
                        children: e.map((n, r) => k.jsxs("div", {
                            className: "single_item d-flex justify-content-between align-items-center mb-4",
                            children: [k.jsxs("div", {
                                className: "content",
                                children: [k.jsx("h5", {
                                    children: n.title
                                }), k.jsx("span", {
                                    children: n.subTitle
                                })]
                            }), k.jsx("div", {
                                className: "value",
                                children: k.jsx("span", {
                                    children: n.value
                                })
                            })]
                        }, r))
                    })]
                })]
            })
        })
    })
}
const NC = "/assets/token-img1-Tqs-z56u.png",
    OC = "/assets/token-img2-y-1ama7V.png",
    PC = "/assets/token-img3-xTQ_Xnxs.png",
    jC = "/assets/token-img4-gGe-vtVd.png";

function DC() {
    const t = [{
            img: NC,
            title: "Click on Buy Button",
            desc: "Ready to invest in the next big thing? Head to our buy section now and grab your share of the $BART coin revolution. Don't miss out on the moon ride!"
        }, {
            img: OC,
            title: "Connect your Phantom wallet",
            desc: "Connect your wallet to join the meme coin revolution! Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!"
        }, {
            img: PC,
            title: "Ch00se Amount to Buy",
            desc: "Choose the amount to buy and join the meme coin frenzy!"
        }, {
            img: jC,
            title: "Buy  BART token",
            desc: "Buy $BART token and join the meme revolution! Embrace the laughter, fun and potential gains. Secure your spot in the meme coin world. Hurry up!"
        }],
        e = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "44",
            height: "76",
            viewBox: "0 0 44 76",
            fill: "none",
            children: k.jsx("path", {
                d: "M39.479 26.7207L39.4797 26.7201C40.7877 25.4665 41.4198 23.8341 41.4198 21.9181C41.4198 19.1281 40.0282 16.7912 37.4788 14.9264C35.1271 13.1642 32.0707 11.985 28.3638 11.3419V10.0862C28.3638 7.29604 27.7823 5.01712 26.4469 3.42551C25.0834 1.80026 23.0806 1.06226 20.6319 1.06226C17.8775 1.06226 15.5256 2.17516 13.6266 4.32404L12.7855 5.27576L13.908 5.87002C15.0145 6.45581 15.6879 7.59673 15.6879 9.67821V11.5119C11.7827 12.3593 8.54133 13.9403 6.01152 16.2894C3.26437 18.8403 1.88399 22.0546 1.88399 25.8621C1.88399 28.7207 2.9472 31.2714 5.00892 33.4804L5.01676 33.4888L5.02479 33.497C7.06156 35.5811 9.49317 37.3015 12.3088 38.6624L12.3146 38.6652C15.09 39.9847 17.8433 41.2361 20.5743 42.4196L20.5798 42.4219C23.2829 43.5741 25.5373 44.8698 27.358 46.3003L27.3683 46.3084L27.3788 46.3162C29.1518 47.6357 29.8998 49.0433 29.8998 50.546C29.8998 52.0512 29.2662 53.2509 27.8814 54.2126L27.8814 54.2125L27.8706 54.2202C26.5135 55.1896 24.5464 55.7339 21.8559 55.7339C19.1961 55.7339 17.1658 55.2747 15.6907 54.4392C14.25 53.5973 13.7439 52.6987 13.7439 51.7699C13.7439 50.6604 14.1586 49.7218 15.0516 48.9031L15.9122 48.1143L15.0006 47.3851C13.0502 45.8247 10.9776 44.99 8.79996 44.99C6.72002 44.99 4.88099 45.6308 3.3318 46.9217L3.32538 46.9271L3.31905 46.9326C1.73004 48.3024 1 50.2668 1 52.6539C1 55.2248 2.35312 57.5007 4.7659 59.4792L4.7743 59.4861L4.78284 59.4928C7.07542 61.2909 9.99845 62.5982 13.5119 63.4467V65.0299C13.5119 67.8392 14.0864 70.1321 15.406 71.7345C16.7562 73.3741 18.7437 74.1218 21.1759 74.1218C23.9718 74.1218 26.3129 73.0109 28.1306 70.8398L28.9227 69.8936L27.833 69.3147C26.8546 68.795 26.1879 67.6487 26.1879 65.3699V63.9944C30.6426 63.2968 34.4375 61.6374 37.5337 58.9899C40.8666 56.14 42.5758 52.6055 42.5758 48.438C42.5758 45.3739 41.5058 42.6089 39.4138 40.1744C37.4207 37.8029 34.9804 35.8865 32.1043 34.4243C29.3667 33.01 26.6056 31.7092 23.8212 30.5221C21.1451 29.3174 18.8649 28.0984 16.9731 26.8676C15.1944 25.6365 14.5599 24.4969 14.5599 23.4821C14.5599 22.3723 15.0923 21.4463 16.4361 20.6784C17.8288 19.8825 19.6609 19.4502 21.9919 19.4502C24.3879 19.4502 26.0581 19.8899 27.1361 20.6334L27.1426 20.6378L27.1491 20.6422C28.3484 21.4417 28.7438 22.2139 28.7438 22.9381C28.7438 23.9742 28.5767 24.7364 28.3054 25.2789L27.9253 26.0391L28.6143 26.5368C30.4018 27.8277 32.3492 28.4941 34.4358 28.4941C36.4749 28.4941 38.2011 27.9431 39.479 26.7207Z",
                fill: "#FED41D",
                stroke: "black",
                strokeWidth: "2"
            })
        });
    return k.jsxs("section", {
        className: "howtobuy__area",
        id: "howtobuy",
        children: [k.jsx("figure", {
            className: "cloudleft",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        }), k.jsxs(vn, {
            children: [k.jsx(Jt, {
                children: k.jsx(Ye, {
                    children: k.jsxs("div", {
                        className: "section__title text-center mb-5 pb-2",
                        children: [k.jsxs("h2", {
                            children: ["How To Buy ", k.jsxs("span", {
                                children: [e, " BART"]
                            }), " Token"]
                        }), k.jsx("p", {
                            children: "Ready to join the meme token craze? Buying meme tokens ls simple! Head to our website and link your Phantom wallet and complete the purchase. Embrace the fun of $BART culture with ease!"
                        })]
                    })
                })
            }), k.jsx(Jt, {
                children: t.map((n, r) => k.jsx(Ye, {
                    md: 6,
                    className: "mb-4",
                    children: k.jsxs("div", {
                        className: "howtobuy_single_item text-center",
                        children: [k.jsx("figure", {
                            children: k.jsx("img", {
                                src: n.img,
                                alt: ""
                            })
                        }), k.jsx("h4", {
                            children: n.title
                        }), k.jsx("p", {
                            children: n.desc
                        })]
                    })
                }, r))
            })]
        }), k.jsx("figure", {
            className: "cloudright",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        })]
    })
}

function UC() {
    const t = [{
            phase: {
                tag: "PHASE 1"
            },
            items: ["Launch on Solana", "Website Landing Page", "Presale"]
        }, {
            phase: {
                tag: "PHASE 2"
            },
            items: ["Public Presale", "Dexscreener and Birdeye Update", "Build Community"]
        }, {
            phase: {
                tag: "PHASE 3"
            },
            items: ["Trending on X", "CG CMC Listing", "NFT Airdrop"]
        }],
        e = ({
            data: i
        }) => k.jsx("div", {
            className: "timeline-item",
            children: k.jsxs("div", {
                className: "timeline-item-content",
                children: [k.jsx("span", {
                    className: "tag",
                    children: i.phase.tag
                }), k.jsx("div", {
                    className: "roadmap_lists",
                    children: i.items.map((o, s) => k.jsx("li", {
                        children: o
                    }, s))
                }), k.jsx("span", {
                    className: "circle"
                })]
            })
        }),
        n = () => t.length > 0 && k.jsx("div", {
            className: "timeline-container",
            children: t.map((i, o) => k.jsx(e, {
                data: i
            }, o))
        });
    return k.jsxs("section", {
        className: "road__map__area zigzag__bg",
        id: "roadmap",
        children: [k.jsx("figure", {
            className: "cloud_r_Img1",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        }), k.jsx("figure", {
            className: "cloud_r_Img2",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        }), k.jsxs(vn, {
            children: [k.jsx(Jt, {
                children: k.jsx(Ye, {
                    children: k.jsx("div", {
                        className: "section__title text-center",
                        children: k.jsx("h2", {
                            children: "ROADMAP"
                        })
                    })
                })
            }), k.jsx(Jt, {
                className: "justify-content-center",
                children: k.jsx(Ye, {
                    lg: 10,
                    children: k.jsx("div", {
                        className: "road_map_inner",
                        children: k.jsx(n, {})
                    })
                })
            })]
        }), k.jsx("figure", {
            className: "cloud_r_Img3",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        }), k.jsx("figure", {
            className: "cloud_r_Img4",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        }), k.jsx("figure", {
            className: "cloud_r_Img5",
            children: k.jsx("img", {
                src: _r,
                alt: ""
            })
        })]
    })
}
const zC = "/assets/QR-CODE--FEEA-xB.png";

function FC() {
    const [t, e] = F.useState(!1), n = () => {
        const r = document.querySelector(".content p"),
            i = document.createRange();
        i.selectNode(r), window.getSelection().removeAllRanges(), window.getSelection().addRange(i), document.execCommand("copy"), window.getSelection().removeAllRanges(), e(!0), setTimeout(() => {
            e(!1)
        }, 2e3)
    };
    return k.jsx("section", {
        className: "another_way_area",
        id: "presale",
        children: k.jsx(vn, {
            children: k.jsx(Jt, {
                className: "justify-content-center",
                children: k.jsxs(Ye, {
                    sm: 10,
                    md: 9,
                    lg: 8,
                    className: "text-center",
                    children: [k.jsxs("div", {
                        className: "section__title",
                        children: [k.jsx("h2", {
                            children: "Another Way to Join the Presale"
                        }), k.jsx("p", {
                            children: "Having trouble with the DApp or want a simpler method? Participate in the $BART presale by sending your chosen SOL amount directly to the address:"
                        })]
                    }), k.jsxs("div", {
                        className: "qr_code_box mt-5",
                        children: [k.jsx("p", {
                            className: "min_max",
                            children: "(Minimum 0.5 SOL, Maximum 50 SOL)."
                        }), k.jsxs("div", {
                            className: "qr_box_inner d-flex align-items-center gap-5",
                            children: [k.jsx("figure", {
                                children: k.jsx("img", {
                                    src: zC,
                                    alt: ""
                                })
                            }), k.jsxs("div", {
                                className: "content",
                                children: [k.jsx("h5", {
                                    children: "Address"
                                }), k.jsx("p", {
                                    children: "bartcoin.sol"
                                }), k.jsx("button", {
                                    className: "boxed__btn",
                                    onClick: n,
                                    children: t ? "Copied!" : "Copy Address"
                                })]
                            })]
                        })]
                    })]
                })
            })
        })
    })
}
const WC = "/assets/why-choose-left-img-Pnw_S84z.png",
    HC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAMAAAC5kuvHAAAC91BMVEUAAADn5+f////m5ubOysrm5ubn5+fn5uTm5ubn5+fk5OTm5ubm5ubm5ubl5uXn5ufm5ubn5+fm5ubm5ubl5eXhxcDl5eXm5ubk5OTn5+fm5ubm5ubm5ubm5ubn5+fm5ubm5ubm5ubn5+fn5+fg4ODm5ubm5ubm5ubm5+bk5OTo6Ojo6ujn5ubm5ubm5ubm5ubm5ubn5+fl5eTn5ufn5+fl5eXmkIXn5+fm5ubn5+fm5ubm5ubvf3jo6Ojm5ubl5eXm5ubm5ubk5OT1b2Tm5ubyfnPugnnwlorn5+fl5eXvqp3zua/wb2L0eWzxb2fm2tl6enrcbF/n5+d3d3fxgnjs0Mzrk43olI3lfW1GRkbvg3xXV1fzubFgYGDLcGntn5nn5+fqnJfyn5npppvm5ubd3d3///+SkpL/YFCMjIzk5OTb29vn5+f9YVHn5uXi4uLQ0ND9/f39YE9ISEjl6ObV1dXGxsZPT0/Ozs7Dw8M/Pz9mZmVWVVVRUVFFRUVDQkLx8fHo5ufe3t6zs7Pl5+jj4+TZ2NjT09Ofn5/5X087Ozva2trY2NjLzMy6u7urq6ulpaWioqKJiYmGhoZ5enp2dnZzc3NwcHBsbGxbW1tYWFhNTU1KSkr29vbq6urS0tLIyMioqKiQkJCDg4N7e3toaWn6+vrX19fKysq9vb2xsLCcm5yVlJV/f399fX3zdGZiYmJUVFT/YE/lWEvhWEpNQ0JJOzlROTZFNTLo6OjU1NTs19PsxL63t7e1tbbuXk/rWUt9QTlmOzdONjP8/Pzf4OHq29vszcq5ubmtra33al76YlT0X03wW0zRV0raVEnHUkjAUkepT0agSkKcSD+JRT51QDo6NTTo09C/wMHsv7mZmZmWlpXyhnvyem/0bV9cXV7IVk2zTEVgOjc8ODVWNzU0MjLs7Ozq4+Pn4eDqyca/v7/ysazssKyXl5fzmI7wkonzX1GUSUOCQjtwPjhmPji6uLnpqqTroJvun5f3iXxWVFa8UEbtxVE3AAAAZHRSTlMA+wTyBPn0a3VvB3tiD4BzXED4xBkN7oP66+TZmYZ9bWZRTSgU586+jGksHtTKpp94NjK5lZE/JSL2797DsqxlVj07/ODYmm9LSEQo9Ono4tXGwry7s6qSkY+OgYB4a1VJMSgXy53EkQAACQJJREFUaN7tmVV0E0EUhpOmApRS2uJQoBR3d3d3d5mQxt3TpAY16u5AcXd3d3d3d7cHsptdspvZdHNOA0/8Dz3t7dkvM//ce2dmw/iv/3JEtWuXcgrHpV1AjbINbVjtPetWrlC1WY/i433qMoFZVUsTYqUqugNUzK7liomvWQlY5NvGGvQGgtAIS9iveCaVdAO4mCXxYH2w8/k1PNy8OPjmTGCVWztLsLVIdGftbQUW7e3lEKmcx5jGftX6k4M13ABRnqj3JYBI8O7k21A8WsuRHCk77Pba7yLA9OtJiJYg40ETs9euzQEAom+7vorwaBl6vGt90dG7r+4gj7hbh+PNBGTVqc1gVAcAKIB5dSPwaH16fhkmePZu7SuAqHIjfPS2eFDFy4yH5EGLr+EOFIpnR4BFbbDMqQSR/EqV6QAF3VrQee8PEEWIFPgoUTwTQCpTEcCq50rDLwsPCDUHlieA5d6fZmmrQ6QAc9W6AcfkW4Jm9BRT9mF4OopnetB4782CnqnQyJvpKN6TxpwyPACpaTeH8RVLlStXvqjuBSjUys1hvH8TFqtqs4b28B7AKWKWoZ5DcxZwkppSbQIlgPNUA8aXZjqRX8XVNnP8gVPVw7ZjAueqJBnv7Q4ckACwIzUaSewcAaATuU140nvPUx5PXpeTmyvPlctz1q1OkohBUepOxLdjFo0GgB+ljzGkvQnXSpRLC+bHJxVmxWQnFwh4wJ4Cifw2oGjtWWTKXCnJD8k7NBvTkhAQvsikTxDbcaouEV+qaPO1i40LNfl5Uulssg49TTSoEyw2xSUpSV2alD4NkZAIUA+FX2hcFPl0yWwqSUMWBOsLBECwfPNWPbCKRc4eH4EoFIBQBVXGxGelX88306XSvO1K7Z4Vx5aFheAuIdH8lTkLxVFbLl5ZzLfi0eot74LzAwGI2Pn6xi6KlV2pW8jLM4NCwtesj9EFZ2UZ5DFyPWee1SypxmA4+Ouy8cth8rFrWp/R5fHaraKIuHbiBMznrcrZvf2QVKpKizGsTlJJdijnzVNGxnMWG9ULQqQY/7juwLkHphWxAFcDFDri7dqp1vNp6Iu1d15D+NT12hDpkuV6A3dFAVvM+xMXSxIWqxfmS5FE4j76ePb8toVL//y3tMWX8WsHt8X5tSuEPt955IgtnpszP0S6PSM3WRsLFdOc8HVqlXR2fvq2S5vOHDSpl+HHh+a47W1nWFe4VgUAa4VpWYhUa8xcruRRJtZK3a25WVcvbtz7UBeeFsy2RKt7+dTygU/Q7esBVJ3+lIJApdsdsoRrirLfCOKyYx6f3/f+iimhIDZDjw6iDnq5YY70gQ4OPtVatWravUwlHB+bsyo/L2V9OGYsLIVImX3gzOmTl58kasLYynsLSVtkWeoN2NqIVq2bm5eiPjYX2NVL+f6zp4QXrq6O47PZ7GM6FSCow4CiLz9xam3eG3U82y5dnLT54qZo4fmrq1VmvFmrgvmkszt80fO24nlrUrdrTLtj7TZIEXfbg31BwjMHY1bOZaOaG7wSEFUauhkSurREt2x78C2lXbo41byyMuGmgykco4Zt0YL1JDPrFbW/p6UJ0tMlwJ7m//xktl649+EaDcjM5LMt0nOI063iQsIHEktAaXyplR+zm5jxm/efjQ4KOrVfP38OmG9UYfxE0gr0Jh8hmhEB4cHi1GQqdwQCAMSJmy9tjJYJoz+olyNNLT0Zm8CO4ES7/nhVIWIWrdLmqCjWlhcWfzx+9cEH+4TCDcILpuWxqFm5EmwChXqxvWtYOzdic8mOX522FC4oSdqjrQ+3Hjh3WiYMkp3bkrA0FM3U3MQwC/96TAHA1Ymcnw2JJIm6QLcCGr5oz+bL5zbt3bfpVFCQTHZ/6615PGy2GZhB89YnAUyVAhgkNfIl7udZC9Zr4HaD2i7bIAsy8zduTZHgI0hQ78AMSknlWTcBkso3IZBuZmakzoP4Gfs3Imih0Pwj+kpG3Bz8xq55FIeXwLowS/vxL+rWyCtMVSdCyRm57Ux0EKbo/feWzQG45hr3YHyNDh0Wy6N9QM0A8gK41iNU16IYOHt2H9iIDB3Vyc8cKx6EBSdh/DAT2uT8/JBade/SgrQCVocy0k1w7S74dBqjy4KEV5IVxHS7GYbxg3cTx1XZh1QC9Tui1+nGvhl6A1xc4QdOyyz8Debxk7p9ZjI2fr5OS5o3M4CcRN3aNKvoUxKkZ6+Dl1eybZNMiPH3bgsnnpaiDFiCrlDbzLsTfBOrDkChET8thUVGsgXKSHQHzr4kM5ctgpddNGiQdY3cIeZF7lgKxOoo9ANUak4sIKss1f395lWcnyKXF0py5LnIsl3fcl+IzkB2f0sC24zPksuPJ8jl93hAkpsZvkzL1aVAVVPNBu+DtFHN4iiML2bzD4PDfPQvUdSWC+/Nn7D3whYOWltiPp/H4/PZiHmpcqM8OyoOyyp7XW7ShOGq+VwuN2UNl0pZTx5//HB56xMD/O/kRZnpawqR36JAEpe7HOf7kfhTRnFUKk6RWsWhUSJvAYejxfmtbaoY6fD2JcK2APqLmiCCcn09gVO088aNa2h3alzur7yBOHr3xItQpBF1Z5DV0805/BN3d0FdGlGpxk7hH9l1dKcogupl1gCnTECkCFUokBMWrNbAGUKyp6QLFd+rBAtrrqBYYtl9kdjQvzGro1/1asXC23gPK8C3WPyyNHivqg6CfDtSRbu50PBrOeqDZ2UK7z1cad/Qww81c4dJlSqWplxaWnWFnipBkbnuDRgUaeDNoFdTYCMPRh2Y5MlgdLGN8aCycsSfmi61Ye9rUg7E1QG8S0tfkg/mKXtB5qBvYfxtvK/hAL782MnjWilsv4iqYDN6i83T4SnR8/tE921UhXwVtHW6Et57/Yj4GgxHNGvokM4ugU14mA+lsZJwJ5IQfL+JM82vFupAVUvr/sBBbc2zKFmVxaxUp1pDLEpMRTckxQf2ut0Z2ZPwUq9cmuQ9vUoFtmhZm/AF8p+iqIB2r7a9fnRGiOW867J8O1St35JRTHl5WJpB3RaWafbrOwibcGDLQFenfHddq7p/iZaujP/6r3+k3ycP2aSmSyMKAAAAAElFTkSuQmCC",
    $C = "/assets/why-choose-right-img2-k0ugJ_FI.png";

function KC() {
    const t = "Why Choose Bart",
        e = [{
            img: HC,
            title: "Solana's Speed",
            desc: "Take advantage of Solana's rapid transaction speed as $BART ensures swift and seamless transactions."
        }, {
            img: $C,
            title: "Community-Focused",
            desc: "More than a memecoin, $BART thrives on community engagement. Join us as we create a dynamic space for $BART enthusiasts."
        }];
    return k.jsx("section", {
        className: "why_choose_area zigzag__bg",
        children: k.jsx(vn, {
            children: k.jsxs(Jt, {
                children: [k.jsx(Ye, {
                    lg: 5,
                    children: k.jsx("figure", {
                        className: "choose_left_img",
                        children: k.jsx("img", {
                            src: WC,
                            alt: ""
                        })
                    })
                }), k.jsx(Ye, {
                    lg: 7,
                    children: k.jsxs("div", {
                        className: "why_choose_content",
                        children: [k.jsx("h3", {
                            children: t
                        }), e.map((n, r) => k.jsxs("div", {
                            className: "single_item d-flex align-items-center gap-4",
                            children: [k.jsx("figure", {
                                children: k.jsx("img", {
                                    src: n.img,
                                    alt: ""
                                })
                            }), k.jsxs("div", {
                                className: "content",
                                children: [k.jsx("h5", {
                                    children: n.title
                                }), k.jsx("p", {
                                    children: n.desc
                                })]
                            })]
                        }, r))]
                    })
                })]
            })
        })
    })
}
const qC = "/assets/bard-is-the-one-right-img-qpC00Ara.png";

function VC() {
    const t = "BUY NOW",
        e = "#presale_coundDown_box",
        n = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            children: k.jsx("path", {
                d: "M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z",
                fill: "black"
            })
        }),
        r = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "44",
            height: "76",
            viewBox: "0 0 44 76",
            fill: "none",
            children: k.jsx("path", {
                d: "M39.479 26.7207L39.4797 26.7201C40.7877 25.4665 41.4198 23.8341 41.4198 21.9181C41.4198 19.1281 40.0282 16.7912 37.4788 14.9264C35.1271 13.1642 32.0707 11.985 28.3638 11.3419V10.0862C28.3638 7.29604 27.7823 5.01712 26.4469 3.42551C25.0834 1.80026 23.0806 1.06226 20.6319 1.06226C17.8775 1.06226 15.5256 2.17516 13.6266 4.32404L12.7855 5.27576L13.908 5.87002C15.0145 6.45581 15.6879 7.59673 15.6879 9.67821V11.5119C11.7827 12.3593 8.54133 13.9403 6.01152 16.2894C3.26437 18.8403 1.88399 22.0546 1.88399 25.8621C1.88399 28.7207 2.9472 31.2714 5.00892 33.4804L5.01676 33.4888L5.02479 33.497C7.06156 35.5811 9.49317 37.3015 12.3088 38.6624L12.3146 38.6652C15.09 39.9847 17.8433 41.2361 20.5743 42.4196L20.5798 42.4219C23.2829 43.5741 25.5373 44.8698 27.358 46.3003L27.3683 46.3084L27.3788 46.3162C29.1518 47.6357 29.8998 49.0433 29.8998 50.546C29.8998 52.0512 29.2662 53.2509 27.8814 54.2126L27.8814 54.2125L27.8706 54.2202C26.5135 55.1896 24.5464 55.7339 21.8559 55.7339C19.1961 55.7339 17.1658 55.2747 15.6907 54.4392C14.25 53.5973 13.7439 52.6987 13.7439 51.7699C13.7439 50.6604 14.1586 49.7218 15.0516 48.9031L15.9122 48.1143L15.0006 47.3851C13.0502 45.8247 10.9776 44.99 8.79996 44.99C6.72002 44.99 4.88099 45.6308 3.3318 46.9217L3.32538 46.9271L3.31905 46.9326C1.73004 48.3024 1 50.2668 1 52.6539C1 55.2248 2.35312 57.5007 4.7659 59.4792L4.7743 59.4861L4.78284 59.4928C7.07542 61.2909 9.99845 62.5982 13.5119 63.4467V65.0299C13.5119 67.8392 14.0864 70.1321 15.406 71.7345C16.7562 73.3741 18.7437 74.1218 21.1759 74.1218C23.9718 74.1218 26.3129 73.0109 28.1306 70.8398L28.9227 69.8936L27.833 69.3147C26.8546 68.795 26.1879 67.6487 26.1879 65.3699V63.9944C30.6426 63.2968 34.4375 61.6374 37.5337 58.9899C40.8666 56.14 42.5758 52.6055 42.5758 48.438C42.5758 45.3739 41.5058 42.6089 39.4138 40.1744C37.4207 37.8029 34.9804 35.8865 32.1043 34.4243C29.3667 33.01 26.6056 31.7092 23.8212 30.5221C21.1451 29.3174 18.8649 28.0984 16.9731 26.8676C15.1944 25.6365 14.5599 24.4969 14.5599 23.4821C14.5599 22.3723 15.0923 21.4463 16.4361 20.6784C17.8288 19.8825 19.6609 19.4502 21.9919 19.4502C24.3879 19.4502 26.0581 19.8899 27.1361 20.6334L27.1426 20.6378L27.1491 20.6422C28.3484 21.4417 28.7438 22.2139 28.7438 22.9381C28.7438 23.9742 28.5767 24.7364 28.3054 25.2789L27.9253 26.0391L28.6143 26.5368C30.4018 27.8277 32.3492 28.4941 34.4358 28.4941C36.4749 28.4941 38.2011 27.9431 39.479 26.7207Z",
                fill: "#FED41D",
                stroke: "black",
                strokeWidth: "2"
            })
        });
    return k.jsx("section", {
        className: "bart_it_one_area",
        children: k.jsx(vn, {
            children: k.jsxs(Jt, {
                className: "align-items-center",
                children: [k.jsxs(Ye, {
                    md: 6,
                    lg: 8,
                    className: "order-2 order-md-1 text-center text-md-start mt-5 mt-md-0",
                    children: [k.jsxs("h2", {
                        children: [k.jsxs("span", {
                            children: [r, " BART"]
                        }), " IS THE ONE"]
                    }), k.jsxs("p", {
                        children: ["Don't have a cow, man! Get some ", k.jsx("a", {
                            href: "#",
                            children: "$BART."
                        })]
                    }), k.jsxs("a", {
                        href: e,
                        className: "boxed__btn mt-4 mt-md-5",
                        children: [t, " ", n]
                    })]
                }), k.jsx(Ye, {
                    md: 6,
                    lg: 4,
                    className: "order-1 order-md-2",
                    children: k.jsx("figure", {
                        className: "bartIsOne_img",
                        children: k.jsx("img", {
                            src: qC,
                            alt: ""
                        })
                    })
                })]
            })
        })
    })
}
const GC = "/assets/hodl-HkWB0Of1.png";

function ZC() {
    const t = "HOdl",
        e = "With $BART, the market is not just bullish; it's downright howlish. Forget traditional charts; we're trading in memes and laughs. Join us as we transform the financial landscape into a comic strip, and let's howl all.",
        n = "BUY NOW",
        r = "#presale_coundDown_box",
        i = k.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            children: k.jsx("path", {
                d: "M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z",
                fill: "black"
            })
        });
    return k.jsx("section", {
        className: "hodl_area zigzag__bg",
        children: k.jsx(vn, {
            children: k.jsxs(Jt, {
                className: "align-items-center",
                children: [k.jsx(Ye, {
                    md: 6,
                    lg: 5,
                    children: k.jsx("figure", {
                        children: k.jsx("img", {
                            src: GC,
                            alt: ""
                        })
                    })
                }), k.jsx(Ye, {
                    md: 6,
                    lg: {
                        span: 6,
                        offset: 1
                    },
                    children: k.jsxs("div", {
                        className: "hodl_box",
                        children: [k.jsx("h2", {
                            children: t
                        }), k.jsx("p", {
                            children: e
                        }), k.jsxs("a", {
                            href: r,
                            className: "boxed__btn",
                            children: [n, " ", i]
                        })]
                    })
                })]
            })
        })
    })
}

function YC() {
    const t = "beyond  memes  new  utilities  await",
        e = [{
            itemTitle: "BART Wear",
            itemDesc: "Effortlessly trade $BART tokens on our decentralized exchange."
        }, {
            itemTitle: "BART Raffle",
            itemDesc: "Engage in thrilling raffle events with your $BART tokens."
        }, {
            itemTitle: "Voting",
            itemDesc: "Shape the community's future by participating in important decisions using your $BART."
        }, {
            itemTitle: "Staking  Pool  Wear",
            itemDesc: "Multiply your holdings by staking $BART tokens and earning rewards."
        }, {
            itemTitle: "BART  Bridge",
            itemDesc: "Connect $BART with various blockchains for expanded possibilities."
        }, {
            itemTitle: "Mini  Games",
            itemDesc: "Enjoy entertaining mini-games while earning $BART rewards."
        }];
    return k.jsx("section", {
        className: "beyond_memes_area",
        children: k.jsxs(vn, {
            children: [k.jsx(Jt, {
                className: "justify-content-center",
                children: k.jsx(Ye, {
                    md: 8,
                    children: k.jsx("div", {
                        className: "section__title text-center",
                        children: k.jsx("h2", {
                            children: t
                        })
                    })
                })
            }), k.jsxs(Jt, {
                className: "beyond_inner",
                children: [k.jsx("figure", {
                    className: "cloudImg top",
                    children: k.jsx("img", {
                        src: _r,
                        alt: ""
                    })
                }), e.map((n, r) => k.jsx(Ye, {
                    sm: 6,
                    md: 4,
                    className: "mb-3",
                    children: k.jsxs("div", {
                        className: "single__beyond__item text-center",
                        children: [k.jsx("h5", {
                            children: n.itemTitle
                        }), k.jsx("p", {
                            children: n.itemDesc
                        })]
                    })
                }, r)), k.jsx("figure", {
                    className: "cloudImg bottom",
                    children: k.jsx("img", {
                        src: _r,
                        alt: ""
                    })
                })]
            })]
        })
    })
}
const QC = "/assets/Bartimage--j755QeN.svg";

function XC() {
    const [t, e] = F.useState(new Date().getFullYear());
    F.useEffect(() => {
        const o = setInterval(() => {
            e(new Date().getFullYear())
        }, 1e3);
        return () => clearInterval(o)
    }, []);
    const n = [{
            socialLink: "https://t.me/bartcoinsol",
            socialImg: k.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "25",
                viewBox: "0 0 24 25",
                fill: "none",
                children: k.jsx("path", {
                    d: "M22.0846 3.09663C21.9941 3.01851 21.8841 2.96657 21.7663 2.94641C21.6485 2.92626 21.5274 2.93865 21.4161 2.98226L2.41676 10.4176C2.18567 10.508 1.99015 10.671 1.85957 10.882C1.72899 11.093 1.67039 11.3407 1.69258 11.5878C1.71477 11.835 1.81655 12.0683 1.98263 12.2527C2.14871 12.437 2.37013 12.5626 2.61364 12.6104L7.68739 13.6069V19.2498C7.68749 19.5114 7.76577 19.767 7.91217 19.9838C8.05857 20.2006 8.26642 20.3687 8.50904 20.4665C8.75166 20.5643 9.01797 20.5874 9.27381 20.5328C9.52965 20.4782 9.76334 20.3484 9.94489 20.1601L12.4424 17.5698L16.3405 20.9869C16.5785 21.1975 16.8852 21.3139 17.203 21.3141C17.3418 21.3138 17.4797 21.292 17.6118 21.2494C17.8283 21.1809 18.0231 21.0568 18.1768 20.8895C18.3304 20.7222 18.4375 20.5176 18.4874 20.296L22.2955 3.7407C22.3223 3.62431 22.3168 3.50282 22.2796 3.38933C22.2424 3.27583 22.175 3.17463 22.0846 3.09663ZM2.81707 11.5032C2.81348 11.4935 2.81348 11.4829 2.81707 11.4732C2.82131 11.4699 2.82606 11.4674 2.83114 11.4657L17.8039 5.60445L8.11957 12.5419L2.83114 11.5069L2.81707 11.5032ZM9.13489 19.3782C9.10905 19.405 9.07581 19.4235 9.03941 19.4314C9.00301 19.4392 8.9651 19.4361 8.9305 19.4223C8.89591 19.4085 8.8662 19.3847 8.84517 19.354C8.82413 19.3233 8.81272 19.287 8.81239 19.2498V14.3851L11.5958 16.8226L9.13489 19.3782ZM17.3914 20.0419C17.3845 20.0736 17.3692 20.1029 17.3471 20.1267C17.325 20.1504 17.2969 20.1678 17.2658 20.1769C17.2341 20.1881 17.1999 20.1905 17.1669 20.1839C17.1339 20.1773 17.1033 20.1619 17.0783 20.1394L9.15364 13.1879L20.9061 4.76538L17.3914 20.0419Z",
                    fill: "white"
                })
            })
        }, {
            socialLink: "https://twitter.com/bartcoinsol",
            socialImg: k.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "25",
                viewBox: "0 0 24 25",
                fill: "none",
                children: k.jsx("path", {
                    d: "M18.901 1.65283H22.581L14.541 10.8428L24 23.3458H16.594L10.794 15.7618L4.156 23.3458H0.474L9.074 13.5158L0 1.65383H7.594L12.837 8.58583L18.901 1.65283ZM17.61 21.1438H19.649L6.486 3.73983H4.298L17.61 21.1438Z",
                    fill: "white"
                })
            })
        }],
        r = [{
            menuTxt: "home",
            menuLink: "#hero"
        }, {
            menuTxt: "ABOUT",
            menuLink: "#about"
        }, {
            menuTxt: "Tokenomics",
            menuLink: "#tokenomics"
        }, {
            menuTxt: "how to buy",
            menuLink: "#howtobuy"
        }, {
            menuTxt: "roadmap",
            menuLink: "#roadmap"
        }];
    return k.jsxs("footer", {
        className: "footer__area text-center",
        children: [k.jsx("div", {
            className: "footer__top",
            children: k.jsx(vn, {
                children: k.jsx(Jt, {
                    children: k.jsx(Ye, {
                        children: k.jsx("h2", {
                            children: "JOIN  BART AND LETS BARK  OUR  WAY TO  CRYPTO  STARDOM  TOGETHER!"
                        })
                    })
                })
            })
        }), k.jsxs("div", {
            className: "footer__middle_w_bottom",
            children: [k.jsx("figure", {
                className: "footerM_Img",
                children: k.jsx("img", {
                    src: QC,
                    alt: ""
                })
            }), k.jsx("div", {
                className: "footer__middle",
                children: k.jsx(vn, {
                    children: k.jsxs(Jt, {
                        className: "align-items-center",
                        children: [k.jsx(Ye, {
                            md: 3,
                            className: "text-center text-md-left",
                            children: k.jsx("a", {
                                href: "#hero",
                                className: "footer_logo",
                                children: k.jsx("figure", {
                                    children: k.jsx("img", {
                                        src: aw,
                                        alt: ""
                                    })
                                })
                            })
                        }), k.jsx(Ye, {
                            md: 6,
                            className: "text-center",
                            children: k.jsx("ul", {
                                className: "footer_menu",
                                children: r.map((o, s) => k.jsx("li", {
                                    children: k.jsx("a", {
                                        href: o.menuLink,
                                        children: o.menuTxt
                                    })
                                }, s))
                            })
                        }), k.jsx(Ye, {
                            md: 3,
                            children: k.jsx("ul", {
                                className: "social_items text-center text-md-end mt-4 mt-md-0",
                                children: n.map((o, s) => k.jsx("li", {
                                    children: k.jsx("a", {
                                        href: o.socialLink,
                                        children: o.socialImg
                                    })
                                }, s))
                            })
                        })]
                    })
                })
            })]
        }), k.jsx("div", {
            className: "footer_bottom",
            children: k.jsx(vn, {
                children: k.jsx(Jt, {
                    className: "align-items-center",
                    children: k.jsx(Ye, {
                        className: "text-center",
                        children: k.jsxs("p", {
                            children: ["©", t, " All Rights Reserved $BART Token"]
                        })
                    })
                })
            })
        })]
    })
}
const JC = "Phantom";
class eA extends i3 {
    constructor(e = {}) {
        super(), this.name = JC, this.url = "https://phantom.app", this.icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==", this.supportedTransactionVersions = new Set(["legacy", 0]), this._readyState = typeof window > "u" || typeof document > "u" ? Te.Unsupported : Te.NotDetected, this._disconnected = () => {
            const n = this._wallet;
            n && (n.off("disconnect", this._disconnected), n.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null, this.emit("error", new Q0), this.emit("disconnect"))
        }, this._accountChanged = n => {
            const r = this._publicKey;
            if (r) {
                try {
                    n = new pe(n.toBytes())
                } catch (i) {
                    this.emit("error", new hu(i == null ? void 0 : i.message, i));
                    return
                }
                r.equals(n) || (this._publicKey = n, this.emit("connect", n))
            }
        }, this._connecting = !1, this._wallet = null, this._publicKey = null, this._readyState !== Te.Unsupported && (G7() ? (this._readyState = Te.Loadable, this.emit("readyStateChange", this._readyState)) : V7(() => {
            var n, r, i;
            return (r = (n = window.phantom) == null ? void 0 : n.solana) != null && r.isPhantom || (i = window.solana) != null && i.isPhantom ? (this._readyState = Te.Installed, this.emit("readyStateChange", this._readyState), !0) : !1
        }))
    }
    get publicKey() {
        return this._publicKey
    }
    get connecting() {
        return this._connecting
    }
    get readyState() {
        return this._readyState
    }
    async autoConnect() {
        this.readyState === Te.Installed && await this.connect()
    }
    async connect() {
        var e;
        try {
            if (this.connected || this.connecting) return;
            if (this.readyState === Te.Loadable) {
                const i = encodeURIComponent(window.location.href),
                    o = encodeURIComponent(window.location.origin);
                window.location.href = `https://phantom.app/ul/browse/${i}?ref=${o}`;
                return
            }
            if (this.readyState !== Te.Installed) throw new no;
            this._connecting = !0;
            const n = ((e = window.phantom) == null ? void 0 : e.solana) || window.solana;
            if (!n.isConnected) try {
                await n.connect()
            } catch (i) {
                throw new zo(i == null ? void 0 : i.message, i)
            }
            if (!n.publicKey) throw new Gi;
            let r;
            try {
                r = new pe(n.publicKey.toBytes())
            } catch (i) {
                throw new hu(i == null ? void 0 : i.message, i)
            }
            n.on("disconnect", this._disconnected), n.on("accountChanged", this._accountChanged), this._wallet = n, this._publicKey = r, this.emit("connect", r)
        } catch (n) {
            throw this.emit("error", n), n
        } finally {
            this._connecting = !1
        }
    }
    async disconnect() {
        const e = this._wallet;
        if (e) {
            e.off("disconnect", this._disconnected), e.off("accountChanged", this._accountChanged), this._wallet = null, this._publicKey = null;
            try {
                await e.disconnect()
            } catch (n) {
                this.emit("error", new n3(n == null ? void 0 : n.message, n))
            }
        }
        this.emit("disconnect")
    }
    async sendTransaction(e, n, r = {}) {
        try {
            const i = this._wallet;
            if (!i) throw new Cn;
            try {
                const {
                    signers: o,
                    ...s
                } = r;
                Ei(e) ? o != null && o.length && e.sign(o) : (e = await this.prepareTransaction(e, n, s), o != null && o.length && e.partialSign(...o)), s.preflightCommitment = s.preflightCommitment || n.commitment;
                const {
                    signature: a
                } = await i.signAndSendTransaction(e, s);
                return a
            } catch (o) {
                throw o instanceof hn ? o : new xi(o == null ? void 0 : o.message, o)
            }
        } catch (i) {
            throw this.emit("error", i), i
        }
    }
    async signTransaction(e) {
        try {
            const n = this._wallet;
            if (!n) throw new Cn;
            try {
                return await n.signTransaction(e) || e
            } catch (r) {
                throw new Wr(r == null ? void 0 : r.message, r)
            }
        } catch (n) {
            throw this.emit("error", n), n
        }
    }
    async signAllTransactions(e) {
        try {
            const n = this._wallet;
            if (!n) throw new Cn;
            try {
                return await n.signAllTransactions(e) || e
            } catch (r) {
                throw new Wr(r == null ? void 0 : r.message, r)
            }
        } catch (n) {
            throw this.emit("error", n), n
        }
    }
    async signMessage(e) {
        try {
            const n = this._wallet;
            if (!n) throw new Cn;
            try {
                const {
                    signature: r
                } = await n.signMessage(e);
                return r
            } catch (r) {
                throw new X0(r == null ? void 0 : r.message, r)
            }
        } catch (n) {
            throw this.emit("error", n), n
        }
    }
}
const tA = ({
    children: t
}) => {
    const e = [new eA];
    return k.jsx($7, {
        endpoint: "https://mainnet.helius-rpc.com/?api-key=784f3bd9-ef80-4e1f-af80-3023467ee4bd",
        children: k.jsx(vC, {
            wallets: e,
            children: k.jsx(_C, {
                children: t
            })
        })
    })
};

function nA() {
    return k.jsxs(tA, {
        children: [k.jsx(qE, {}), k.jsx(IC, {}), k.jsx(BC, {}), k.jsx(RC, {}), k.jsx(LC, {}), k.jsx(DC, {}), k.jsx(UC, {}), k.jsx(FC, {}), k.jsx(KC, {}), k.jsx(VC, {}), k.jsx(ZC, {}), k.jsx(YC, {}), k.jsx(XC, {})]
    })
}
Wf.createRoot(document.getElementById("root")).render(k.jsx(J.StrictMode, {
    children: k.jsx(nA, {})
}));