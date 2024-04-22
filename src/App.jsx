import PickCategory from './components/PickCategory/PickCategory'
import Question from './components/Question/Question'
import Welcome from './components/Welcome/Welcome'
import GameOver from './components/GameOver/GameOver'

import { QuizContext } from './context/quiz'
import { useState, useContext, useEffect } from 'react'

import './App.css'

function App() {
  const [ quizState, dispatch ] = useContext(QuizContext)
  
  useEffect(() => {

  }, [])

  return (
    <>
    <div className='App'>
      <h1>QUIZ</h1>
      {
        quizState.gameStage === "Start" &&
        <Welcome/>  
      }
      {
        quizState.gameStage === "Category" &&
        <PickCategory/>  
      }
      {
        quizState.gameStage === "Playing" &&
        <Question/>  
      }
      {
        quizState.gameStage === "End" &&
        <GameOver/>
      }

    </div>
    </>
  )
}

export default App
