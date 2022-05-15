import React from "react"
import Game from "./components/Game"
import ScoreBoard from "./components/ScoreBoard"

export default function App() {
  const [rolls, setRolls] = React.useState(0)
  const [time, setTime] = React.useState(0)
  const [topScore, setTopScore] = React.useState(sessionStorage.getItem('Top Score') || 0)
  const [bestTime, setBestTime] = React.useState(sessionStorage.getItem('Best Time') || 0)
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    if (!tenzies) {
      const interval = setInterval(() => { 
        setTime(oldTime => oldTime + 1)
      }, 100)
      return () => clearInterval(interval)
    }
    else {
      if (topScore === 0 || topScore > rolls) {
        setTopScore(rolls)
        sessionStorage.setItem('Top Score', rolls)
      }

      if (bestTime === 0 || bestTime > time) {
        setBestTime(time)
        sessionStorage.setItem('Best Time', time)
      }
    }
  }, [tenzies])

  function stringify(time) {
    const seconds = time / 10
    return `${seconds.toFixed(2)}`
  }

  return (
    <main>
      <Game
        tenzies={tenzies}
        setRolls={setRolls}
        setTime={setTime}
        setTenzies={setTenzies}
      />
      <ScoreBoard
        top="Rolls"
        bottom="Top Score"
        current={rolls}
        record={topScore}
        class="rolls"
      />
      <ScoreBoard
        top="Time"
        bottom="Best Time"
        current={stringify(time)}
        record={stringify(bestTime)}
        class="time"
      />
    </main>
  )
}