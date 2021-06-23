import React from "react"
import styles from "./Start.module.css"
import Button from "../common/Button";

const Start = () =>
    <div className={styles.start}>
        <div className={styles.instruct}>
            <div className={styles.txt}>
                <p>Опрос состоит из <span>10</span> вопросов с тремя уровнями сложности.</p>
                <p>Вопросы могут относиться к <span>разным</span> категориям.</p>
                <p>В нижней части экрана можно увидеть строку <span>прогресса</span>.</p>
                <p>В конце будет выведен <span>результат</span>.</p>
                <p>Для <span>начала</span> опроса нажмите на кнопку ниже.</p>
            </div>
            <fieldset className={styles.levels}>
                <legend>Уровни сложности</legend>
                <p className={styles.levelsEasy}>Легкий - 0.5 балла</p>
                <p className={styles.levelsMiddle}>Средний - 1 балл</p>
                <p className={styles.levelsHard}>Сложный - 2 балла</p>
            </fieldset>
        </div>
        <Button/>
    </div>

export default Start
