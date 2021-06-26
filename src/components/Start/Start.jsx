import React from "react"
import styles from "./Start.module.css"
import {connect} from "react-redux";
import {getAppLevels, getAppQuestionSize} from "../../redux/app-reducer/app-selectors";

const Start = props => {
    const {questionSize, levels} = props

    return <div className={styles.start}>
        <div className={styles.instruct}>
            <div className={styles.txt}>
                <p>Опрос состоит из <span>{questionSize}</span> вопросов с тремя уровнями сложности.</p>
                <p>Вопросы могут относиться к <span>разным</span> категориям.</p>
                <p>В нижней части экрана можно увидеть строку <span>прогресса</span>.</p>
                <p>В конце будет выведен <span>результат</span>.</p>
                <p>Для <span>начала</span> опроса нажмите на кнопку ниже.</p>
            </div>
            <fieldset className={styles.levels}>
                <legend>Уровни сложности</legend>
                <p className={styles.levelsEasy}>Легкий - {levels.easy} балла</p>
                <p className={styles.levelsMiddle}>Средний - {levels.medium} балл</p>
                <p className={styles.levelsHard}>Сложный - {levels.hard} балла</p>
            </fieldset>
        </div>
    </div>;
}

const mapStateToProps = state => ({
    questionSize: getAppQuestionSize(state),
    levels: getAppLevels(state)
})

const StartContainer = connect(mapStateToProps)(Start)

export default StartContainer
