import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import Category from '../../img/category.svg'

import './PickCategory.css'

const PickCategory = () => {
    const [ quizState, dispatch ] = useContext(QuizContext)

    const chooseCategoryAndReorder = (category) => {
        dispatch({ type: "START_GAME", payload: category}),
        dispatch({ type: "REORDER_QUESTIONS"})
    }

  return (
    <div id="category">
        <h2>Escolha uma categoria:</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        
        <div className="choices">
            {quizState.questions.map((question) => (
                <button 
                key={question.category}
                onClick={() => chooseCategoryAndReorder(question.category)}>
                    {question.category}
                </button>
            ))}
        </div>
        
        <img src={Category} alt="Categorias" />
    </div>
  )
}

export default PickCategory