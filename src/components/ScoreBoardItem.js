import React from "react"

export default function ScoreBoardItem(props) {
  return (
    <div className="score-board-item">
      <h2 className="score-board-item--title">{props.title}</h2>
      <p className="score-board-item--value">{props.value}</p>
    </div>
  )
}