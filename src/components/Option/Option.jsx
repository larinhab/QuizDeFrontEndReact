import { QuizContext } from "../../context/quiz"
import { useContext } from "react"
import './Option.css'

const Option = ({ option, answer, selectedOption, hide }) => {
    const [ quizState, dispatch ] = useContext(QuizContext)

  return (
    <div className={`option 
              ${quizState.answerSelected && option === answer ? 'corret' : ''}
              ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
              ${hide ? "hide" : ""}
              `}
         onClick={() => selectedOption()}>
        {option}
    </div>
  )
}

export default Option