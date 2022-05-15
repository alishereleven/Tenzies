import React from "react"
import ScoreBoardItem from "./ScoreBoardItem"

export default function ScoreBoard(props) {
  return (
    <section className={`score-board ${props.class}`}>
      <ScoreBoardItem title={props.top} value={props.current}/>
      <ScoreBoardItem title={props.bottom} value={props.record}/>
    </section>
  )
}