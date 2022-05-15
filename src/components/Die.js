import React from "react";

export default function Die(props) {
  function drawDots() {
    const dots = []
    for (var i=1; i<=props.value; i++) {
      dots.push(`dot dot-${i}`)
    }
    return dots
  }

  return (
    <div
      className={`die-face die-${props.value}${props.isHeld ? " die-hold" : ""}`}
      onClick={props.holdDice}
    >
      {drawDots().map(dot => <div className={dot}/>)}
    </div>
  )
}