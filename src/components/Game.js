import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function Game(props) {
  const [dice, setDice] = React.useState(allNewDice())
 
  React.useEffect(() => {
    if (
      dice.every(die => die.isHeld) &&
      dice.every(die => die.value === dice[0].value)
      )
    {
      props.setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = [...Array(10)].map(die => (
      generateNewDie())
    );
    return newDice;
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => (
      die.id === id ?
        {...die, isHeld: !die.isHeld } :
        die
    )))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => (
      die.isHeld ?
        die :
        generateNewDie()
    )))
    props.setRolls(oldRolls => oldRolls + 1)
  }

  function newGame() {
    setDice(allNewDice())
    props.setTenzies(false)
    props.setRolls(0)
    props.setTime(0)
  }

  return (
    <section className="game">
      <div className="intro">
        <h1 className="title">Tenzies</h1>
        <p className="rules">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="dice-container">
        {dice.map(die =>
          <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
          />
        )}
      </div>
      <button className="button" onClick={props.tenzies ? newGame : rollDice}>
        {props.tenzies ? "New Game": "Roll"}
      </button>
    </section>
  )
}