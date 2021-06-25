import React from "react"
import styles from "./Question.module.css"
import Preloader from "../common/Preloader";
import {encodeString} from "../../utils/encoder";

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

    // const levelOfQuestion = encodeString(props.questions[currentQuestion].level)
    const question = encodeString(props.questions[currentQuestion].question)
    const category = encodeString(props.questions[currentQuestion].category)
    const type = encodeString(props.questions[currentQuestion].type)
    const answers = questions[currentQuestion].answers
        .map(el => encodeString(el))
    const level = encodeString(questions[currentQuestion].level)
    // const correctAnswer = encodeString(questions[currentQuestion].correctAnswer)

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

export default Question
