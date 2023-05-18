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

___$insertStyle("._9123_imageWrapper {\n  width: 20rem;\n  height: 20rem;\n  box-sizing: border-box;\n  position: relative;\n  border: 10px solid rgba(147, 127, 127, 0.35);\n  transition: transform 0.3s ease-in-out;\n}\n._9123_imageWrapper .img {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  border: 5px solid white;\n  box-shadow: 0px 20px 50px rgba(23, 23, 34, 0.23);\n  z-index: 2;\n  transition: transform 0.3s ease-in-out;\n}\n\n._9123_imageWrapper .stackedCarousel-payload {\n  background-color: white;\n  border-bottom: 20px solid white;\n  display: flex;\n  flex-direction: column;\n  font-size: small;\n}\n\n._9123_imageWrapper .slide-right {\n  transform: rotate(45deg) translateX(150px) !important;\n}\n\n._9123_imageWrapper .slide-left {\n  transform: rotate(-45deg) translateX(-150px) !important;\n}\n\n._9123_imageWrapper .back {\n  z-index: 1 !important;\n}");

const { useState, useRef, useEffect, forwardRef } = React__namespace;
const ReactStackedPhotos = forwardRef(({ children, width, height, onClick = () => { } }, ref) => {
    const [isHovering, setIsHovering] = useState(false);
    const imagesContainerRef = useRef(null);
    const stackedRef = (ref || imagesContainerRef);
    const timerRef1 = useRef();
    const timerRef2 = useRef();
    const [active, setActive] = useState(false);
    const [, setLast] = useState(null);
    const handleMouseOver = () => {
        setIsHovering((prev) => !prev);
    };
    useEffect(() => {
        var _a;
        setLast(stackedRef.current != null
            ? (_a = stackedRef.current.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList
            : null);
        stackedRef.current.swipeLeft = handleClick;
        stackedRef.current.swipeRight = swipeRight;
        return () => {
            clearTimeout(timerRef1.current);
            clearTimeout(timerRef2.current);
        };
    }, []);
    const swipe = (sideClicked) => {
        var _a;
        let last = (_a = stackedRef.current.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList;
        timerRef1.current = setTimeout(function () {
            last === null || last === void 0 ? void 0 : last.remove(sideClicked);
            last === null || last === void 0 ? void 0 : last.add("back");
            timerRef2.current = setTimeout(function () {
                var _a, _b, _c, _d, _e;
                (_a = stackedRef.current) === null || _a === void 0 ? void 0 : _a.insertBefore((_b = stackedRef.current) === null || _b === void 0 ? void 0 : _b.lastElementChild, (_c = stackedRef.current) === null || _c === void 0 ? void 0 : _c.firstElementChild);
                last === null || last === void 0 ? void 0 : last.remove("back");
                last = (_e = (_d = stackedRef.current) === null || _d === void 0 ? void 0 : _d.lastElementChild) === null || _e === void 0 ? void 0 : _e.classList;
                setActive(false);
            }, 400);
        }, 500);
    };
    const swipeLeft = () => {
        var _a, _b;
        if (!active) {
            setActive(true);
            (_b = (_a = stackedRef.current.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add("slide-left");
            swipe("slide-left");
            onClick();
        }
    };
    const swipeRight = () => {
        var _a, _b;
        if (!active) {
            setActive(true);
            (_b = (_a = stackedRef.current.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add("slide-right");
            swipe("slide-right");
            onClick();
        }
    };
    const handleClick = (event) => {
        if (!active) {
            setActive(true);
            const clickTarget = stackedRef.current;
            // What side of the element was clicked. Read more
            // https://stackoverflow.com/questions/15685708/determining-if-mouse-click-happened-in-left-or-right-half-of-div
            const clickTargetWidth = clickTarget === null || clickTarget === void 0 ? void 0 : clickTarget.offsetWidth;
            const xCoordInClickTarget = (event === null || event === void 0 ? void 0 : event.clientX) - Number(clickTarget === null || clickTarget === void 0 ? void 0 : clickTarget.offsetLeft);
            if (Number(clickTargetWidth) / 2 > xCoordInClickTarget) {
                // clicked left
                swipeLeft();
            }
            else {
                // clicked right
                swipeRight();
            }
        }
    };
    return (React__namespace.createElement("div", { className: "_9123_imageWrapper", ref: stackedRef, onClick: handleClick, style: { width, height } }, React__namespace.Children.map(children, (child, index) => {
        const mergedProps = Object.assign(Object.assign({}, child.props), { key: index, className: "img", style: Object.assign(Object.assign({}, child.props.style), (isHovering ? child.props["data-ishovering"] : {})) });
        return (React__namespace.createElement("div", Object.assign({}, mergedProps, { onMouseOver: handleMouseOver, onMouseOut: handleMouseOver })));
    })));
});
ReactStackedPhotos.displayName = "ReactStackedPhotos";

exports["default"] = ReactStackedPhotos;
//# sourceMappingURL=index.js.map
