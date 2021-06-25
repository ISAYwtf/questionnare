import React from "react"
import styles from "./Start.module.css"

const Start = props => {
    return <div className={styles.start}>
        <div className={styles.instruct}>
            <div className={styles.txt}>
                <p>Опрос состоит из <span>{props.questionSize}</span> вопросов с тремя уровнями сложности.</p>
                <p>Вопросы могут относиться к <span>разным</span> категориям.</p>
                <p>В нижней части экрана можно увидеть строку <span>прогресса</span>.</p>
                <p>В конце будет выведен <span>результат</span>.</p>
                <p>Для <span>начала</span> опроса нажмите на кнопку ниже.</p>
            </div>
            <fieldset className={styles.levels}>
                <legend>Уровни сложности</legend>
                <p className={styles.levelsEasy}>Легкий - {props.levels.easy} балла</p>
                <p className={styles.levelsMiddle}>Средний - {props.levels.medium} балл</p>
                <p className={styles.levelsHard}>Сложный - {props.levels.hard} балла</p>
            </fieldset>
        </div>
    </div>;
}

export default Start
