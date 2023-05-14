import * as React from 'react'
import './stackedCarousel.scss'

const { useState, useRef, useEffect } = React
export default function ReactStackedPhotos ({
  children,
  width,
  height
}: {
  width?: number
  height?: number
  children: React.ReactElement
}): JSX.Element {
  const [isHovering, setIsHovering] = useState(false)
  const imagesRef = useRef<
  HTMLDivElement & { lastElementChild: HTMLElement | null }
  >(null)
  const timerRef1 = useRef<ReturnType<typeof setTimeout> | string>()
  const timerRef2 = useRef<ReturnType<typeof setTimeout> | string>()

  const [active, setActive] = useState(false)
  const [last, setLast] = useState<DOMTokenList | null | undefined>(null)

  const handleMouseOver = (): void => {
    setIsHovering((prev) => !prev)
  }

  useEffect(() => {
    setLast(
      imagesRef.current != null
        ? imagesRef.current.lastElementChild?.classList
        : null
    )
    return () => {
      clearTimeout(timerRef1.current)
      clearTimeout(timerRef2.current)
    }
  }, [])

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!active) {
      setActive(true)

      const clickTarget = imagesRef.current
      // What side of the element was clicked. Read more
      // https://stackoverflow.com/questions/15685708/determining-if-mouse-click-happened-in-left-or-right-half-of-div
      const clickTargetWidth = clickTarget?.offsetWidth
      const xCoordInClickTarget =
        event.clientX - Number(clickTarget?.offsetLeft)

      let sideClicked = ''
      if (Number(clickTargetWidth) / 2 > xCoordInClickTarget) {
        // clicked left
        sideClicked = 'slide-left'
        last?.add('slide-left')
      } else {
        // clicked right
        sideClicked = 'slide-right'
        last?.add('slide-right')
      }

      timerRef1.current = setTimeout(function () {
        last?.remove(sideClicked)
        last?.add('back')

        timerRef2.current = setTimeout(function () {
          imagesRef.current?.insertBefore(
            imagesRef.current?.lastElementChild as Node,
            imagesRef.current?.firstElementChild
          )
          last?.remove('back')
          setLast(imagesRef.current?.lastElementChild?.classList)
          setActive(false)
          console.log(last)
        }, 400)
      }, 500)
    }
  }
  return (
    <div
      className="_9123_imageWrapper"
      ref={imagesRef}
      onClick={handleOnClick}
      style={{ width, height }}
    >
      {React.Children.map(
        React.Children.toArray(children),
        (child: React.ReactElement, index) => {
          return (
            <div
              key={index}
              className={'img '}
              style={
                isHovering
                  ? { ...child.props.isHovering }
                  : { ...child.props.default }
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOver}
            >
              {child.props.children}
            </div>
          )
        }
      )}
    </div>
  )
}
