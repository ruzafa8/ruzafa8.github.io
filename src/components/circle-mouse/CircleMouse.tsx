import React from "react"
import "./CircleMouse.css"

const CustomCursor = () => {
  const secondaryCursor = React.useRef<any>(null)
  const mainCursor = React.useRef<any>(null)
  const positionRef = React.useRef({
    mouseX: 0, mouseY: 0, destinationX: 0, destinationY: 0,
    distanceX: 0, distanceY: 0, key: -1,
  })

  React.useEffect(() => {
    const updatePosition = (event) => {
      if (!mainCursor.current || !secondaryCursor.current) return
      const { clientX, clientY } = event

      positionRef.current.mouseX = clientX - secondaryCursor.current.clientWidth / 2
      positionRef.current.mouseY = clientY - secondaryCursor.current.clientHeight / 2
      mainCursor.current.style.transform = `translate3d(
        ${clientX - mainCursor.current.clientWidth / 2}px,
        ${clientY - mainCursor.current.clientHeight / 2}px,
        0)`
    }
    document.addEventListener("mousemove", updatePosition)
    return () => {
      document.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.style.cursor = "none"
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      if (!positionRef.current) {
        return
      }
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current
      const VELOCITY = 0.1
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * VELOCITY
        positionRef.current.distanceY = (mouseY - destinationY) * VELOCITY
        positionRef.current.destinationX += distanceX
        positionRef.current.destinationY += distanceY
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
    }
    followMouse()
  }, [])
  return (
    <div className={`cursor-wrapper`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
      
    </div>
  )
}

export default CustomCursor