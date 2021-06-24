import React from "react"
import styles from "./Question.module.css"

const Question = props => {
    return <div className={styles.question}>
        <div className={styles.category}>Категория: {`Какая-то категория`}</div>
        <div className={styles.questionTitle}>
            1. Здесь должен быть какой-то вопрос?
        </div>
        <fieldset className={styles.variants}>
            <legend>Варианты ответа</legend>
            <ul>
                <li>
                    <input className={styles.checkbox} type="checkbox" id={`answerCheckbox1`}/>
                    <label htmlFor={`answerCheckbox1`}>Вариант 1</label>
                </li>
                <li>
                    <input className={styles.checkbox} type="checkbox" id={`answerCheckbox2`}/>
                    <label htmlFor={`answerCheckbox2`}>Вариант 2</label>
                </li>
                <li>
                    <input className={styles.checkbox} type="checkbox" id={`answerCheckbox3`}/>
                    <label htmlFor={`answerCheckbox3`}>Вариант 3</label>
                </li>
                <li>
                    <input className={styles.checkbox} type="checkbox" id={`answerCheckbox4`}/>
                    <label htmlFor={`answerCheckbox4`}>Вариант 4</label>
                </li>
            </ul>
        </fieldset>
    </div>;
}

export default Question
