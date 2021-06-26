import React from "react"
import styles from "./Question.module.css"
import Preloader from "../common/Preloader";
import {encodeString} from "../../utils/encoder";
import {getAppCurrentQuestion, getAppIsFetching, getAppQuestions} from "../../redux/app-reducer/app-selectors";
import {connect} from "react-redux";
import {setCurrentAnswer} from "../../redux/app-reducer/app-reducer";

const AnswerItem = props => {
    let answer = props.answer

    const {index, type, setAnswer} = props

    if (type !== "multiple") {
        if (props.answer === "True") {
            answer = "Yes"
        } else if (props.answer === "False") {
            answer = "No"
        }
    }

    const selectAnswer = e => {
        const selectedAnswer = e.target.defaultValue

        console.log("Selected answer:", selectedAnswer)

        setAnswer(selectedAnswer)
    }

    return <li>
        <input className={styles.checkbox} type="radio" id={`answerCheckbox-${index}`}
               name={"radio-answer"} checked onClick={selectAnswer} value={props.answer}/>
        <label htmlFor={`answerCheckbox-${index}`}>{answer}</label>
    </li>;
}

const Question = props => {
    const {isFetching, currentQuestion, questions, setCurrentAnswer} = props

    const question = encodeString(questions[currentQuestion].question)
    const category = encodeString(questions[currentQuestion].category)
    const type = encodeString(questions[currentQuestion].type)
    const answers = questions[currentQuestion].answers
        .map(el => encodeString(el))
    const level = encodeString(questions[currentQuestion].level)

    const answerElements = answers
        .map((el, i) => {
            const data = {
                answer: el, index: i,
                setAnswer: setCurrentAnswer,
                type,
            }

            return <AnswerItem {...data}/>;
        })

    return <div className={styles.question}>
        <Preloader flag={isFetching}/>
        <div className={styles.category}>Категория: {category}</div>
        <div className={styles.questionTitle}>
            {currentQuestion + 1}. {question}
        </div>
        <fieldset className={styles.variants} data-level={level}>
            <legend>Варианты ответа</legend>
            <ul>
                {answerElements}
            </ul>
        </fieldset>
    </div>;
}

const mapStateToProps = state => ({
    isFetching: getAppIsFetching(state),
    currentQuestion: getAppCurrentQuestion(state),
    questions: getAppQuestions(state)
})

const mapDispatchToProps = {
    setCurrentAnswer
}

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question)

export default QuestionContainer
