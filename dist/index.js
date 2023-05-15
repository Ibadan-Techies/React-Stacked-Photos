"use client"


function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

___$insertStyle("._9123_imageWrapper {\n  width: 20rem;\n  height: 20rem;\n  box-sizing: border-box;\n  position: relative;\n  border: 10px solid rgba(147, 127, 127, 0.35);\n  transition: transform 0.3s ease-in-out;\n}\n._9123_imageWrapper .img {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  border: 5px solid white;\n  box-shadow: 0px 20px 50px rgba(23, 23, 34, 0.23);\n  z-index: 2;\n  transition: transform 0.3s ease-in-out;\n}\n\n._9123_imageWrapper .stackedCarousel-payload {\n  background-color: white;\n  border-bottom: 20px solid white;\n  display: flex;\n  flex-direction: column;\n  font-size: small;\n}\n\n._9123_imageWrapper .slide-right {\n  transform: rotate(45deg) translateX(150px) !important;\n}\n\n._9123_imageWrapper .slide-left {\n  transform: rotate(-45deg) translateX(-150px) !important;\n}\n\n._9123_imageWrapper .back {\n  z-index: 1 !important;\n}");

const { useState, useRef, useEffect, forwardRef } = React__namespace;
const ReactStackedPhotos = forwardRef(({ children, width, height }) => {
    const [isHovering, setIsHovering] = useState(false);
    const imagesRef = useRef(null);
    const timerRef1 = useRef();
    const timerRef2 = useRef();
    const [active, setActive] = useState(false);
    const [last, setLast] = useState(null);
    const handleMouseOver = () => {
        setIsHovering((prev) => !prev);
    };
    useEffect(() => {
        var _a;
        setLast(imagesRef.current != null
            ? (_a = imagesRef.current.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList
            : null);
        return () => {
            clearTimeout(timerRef1.current);
            clearTimeout(timerRef2.current);
        };
    }, []);
    const handleOnClick = (event) => {
        if (!active) {
            setActive(true);
            const clickTarget = imagesRef.current;
            // What side of the element was clicked. Read more
            // https://stackoverflow.com/questions/15685708/determining-if-mouse-click-happened-in-left-or-right-half-of-div
            const clickTargetWidth = clickTarget === null || clickTarget === void 0 ? void 0 : clickTarget.offsetWidth;
            const xCoordInClickTarget = (event === null || event === void 0 ? void 0 : event.clientX) - Number(clickTarget === null || clickTarget === void 0 ? void 0 : clickTarget.offsetLeft);
            let sideClicked = "";
            if (Number(clickTargetWidth) / 2 > xCoordInClickTarget) {
                // clicked left
                sideClicked = "slide-left";
                last === null || last === void 0 ? void 0 : last.add("slide-left");
            }
            else {
                // clicked right
                sideClicked = "slide-right";
                last === null || last === void 0 ? void 0 : last.add("slide-right");
            }
            timerRef1.current = setTimeout(function () {
                last === null || last === void 0 ? void 0 : last.remove(sideClicked);
                last === null || last === void 0 ? void 0 : last.add("back");
                timerRef2.current = setTimeout(function () {
                    var _a, _b, _c, _d, _e;
                    (_a = imagesRef.current) === null || _a === void 0 ? void 0 : _a.insertBefore((_b = imagesRef.current) === null || _b === void 0 ? void 0 : _b.lastElementChild, (_c = imagesRef.current) === null || _c === void 0 ? void 0 : _c.firstElementChild);
                    last === null || last === void 0 ? void 0 : last.remove("back");
                    setLast((_e = (_d = imagesRef.current) === null || _d === void 0 ? void 0 : _d.lastElementChild) === null || _e === void 0 ? void 0 : _e.classList);
                    setActive(false);
                }, 400);
            }, 500);
        }
    };
    return (React__namespace.createElement("div", { className: "_9123_imageWrapper", ref: imagesRef, onClick: handleOnClick, style: { width, height } }, React__namespace.Children.map(React__namespace.Children.toArray(children), (child, index) => {
        const _a = child.props, { isHoveringStyles, defaultStyles, style } = _a, rest = __rest(_a, ["isHoveringStyles", "defaultStyles", "style"]);
        console.log(rest);
        return (React__namespace.createElement("div", Object.assign({ key: index, className: "img " }, rest, { style: Object.assign(Object.assign({}, style), isHovering ? Object.assign({}, isHoveringStyles) : {}), onMouseOver: handleMouseOver, onMouseOut: handleMouseOver })));
    })));
});

exports["default"] = ReactStackedPhotos;
//# sourceMappingURL=index.js.map
