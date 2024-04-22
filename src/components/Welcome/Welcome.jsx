import { QuizContext } from '../../context/quiz'
import Quiz from '../../img/quiz.svg'
import { useContext } from 'react'
import './Welcome.css'

const Welcome = () => {
    const [ quizState, dispatch ] = useContext(QuizContext)
    

  return (
    <div id='welcome'>
        <h2>Vamos testar seus conhecimentos em front-end?</h2>
        <p>Clique no botão para iniciar</p>
        
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        
        <img src={Quiz} alt="Imagem de Inicio" />
    </div>
  )
}

export default Welcome