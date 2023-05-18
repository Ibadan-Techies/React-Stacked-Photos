import * as React from "react";
import "./stackedCarousel.scss";

interface TReactStackedPhotos {
  width?: number;
  height?: number;
  children: React.ReactElement[];
  onClick?: () => void;
}

const { useState, useRef, useEffect, forwardRef } = React;
export const ReactStackedPhotos = forwardRef<
  HTMLDivElement,
  TReactStackedPhotos
>(({ children, width, height, onClick = () => {} }, ref): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  const imagesContainerRef = useRef<HTMLDivElement>(null);

  const stackedRef = (ref || imagesContainerRef) as React.MutableRefObject<
    HTMLDivElement & {
      lastElementChild: HTMLElement | null;
      swipeLeft: (e: any) => void;
      swipeRight: () => void;
    }
  >;

  const timerRef1 = useRef<ReturnType<typeof setTimeout> | string>();
  const timerRef2 = useRef<ReturnType<typeof setTimeout> | string>();

  const [active, setActive] = useState(false);
  const [, setLast] = useState<DOMTokenList | null | undefined>(null);

  const handleMouseOver = (): void => {
    setIsHovering((prev) => !prev);
  };

  useEffect(() => {
    setLast(
      stackedRef.current != null
        ? stackedRef.current.lastElementChild?.classList
        : null
    );
    stackedRef.current.swipeLeft = handleClick;
    stackedRef.current.swipeRight = swipeRight;
    return () => {
      clearTimeout(timerRef1.current);
      clearTimeout(timerRef2.current);
    };
  }, []);

  const swipe = (sideClicked: string): void => {
    let last = stackedRef.current.lastElementChild?.classList;
    timerRef1.current = setTimeout(function () {
      last?.remove(sideClicked);
      last?.add("back");

      timerRef2.current = setTimeout(function () {
        stackedRef.current?.insertBefore(
          stackedRef.current?.lastElementChild as Node,
          stackedRef.current?.firstElementChild
        );
        last?.remove("back");
        last = stackedRef.current?.lastElementChild?.classList;
        setActive(false);
      }, 400);
    }, 500);
  };

  const swipeLeft = (): void => {
    if (!active) {
      setActive(true);
      stackedRef.current.lastElementChild?.classList?.add("slide-left");
      swipe("slide-left");
      onClick();
    }
  };

  const swipeRight = (): void => {
    if (!active) {
      setActive(true);
      stackedRef.current.lastElementChild?.classList?.add("slide-right");
      swipe("slide-right");
      onClick();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!active) {
      setActive(true);

      const clickTarget = stackedRef.current;
      // What side of the element was clicked. Read more
      // https://stackoverflow.com/questions/15685708/determining-if-mouse-click-happened-in-left-or-right-half-of-div
      const clickTargetWidth = clickTarget?.offsetWidth;
      const xCoordInClickTarget =
        event?.clientX - Number(clickTarget?.offsetLeft);

      if (Number(clickTargetWidth) / 2 > xCoordInClickTarget) {
        // clicked left
        swipeLeft();
      } else {
        // clicked right
        swipeRight();
      }
    }
  };

  return (
    <div
      className="_9123_imageWrapper"
      ref={stackedRef}
      onClick={handleClick}
      style={{ width, height }}
    >
      {React.Children.map(children, (child, index) => {
        const mergedProps = {
          ...child.props,
          key: index,
          className: "img",
          style: {
            ...child.props.style,
            ...(isHovering ? child.props["data-ishovering"] : {}),
          },
        };
        return (
          <div
            {...mergedProps}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
          ></div>
        );
      })}
    </div>
  );
});

ReactStackedPhotos.displayName = "ReactStackedPhotos";
