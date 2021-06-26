import React from "react"
import styles from "./Result.module.css"
import {encodeString} from "../../utils/encoder";
import {getAppLevels, getAppQuestions, getAppQuestionSize, getAppScore} from "../../redux/app-reducer/app-selectors";
import {connect} from "react-redux";

const Result = props => {
    const {score, questions, questionSize, levels} = props

    const detailScore = score.easy + score.medium + score.hard

    const getLevelSize = level => questions.filter(el => encodeString(el.level) === level).length
    const easyQuestionSize = getLevelSize("easy")
    const mediumQuestionSize = getLevelSize("medium")
    const hardQuestionSize = getLevelSize("hard")

    const maxScore = (easyQuestionSize * levels.easy) + (mediumQuestionSize * levels.medium) + (hardQuestionSize * levels.hard)

    const mainScore = ((score.easy * levels.easy) + (score.medium * levels.medium) + (score.hard * levels.hard)) * 100 / maxScore

    return (
        <div className={styles.container}>
            <div className={styles.result}>
                <p>Результат:</p>
                <p><span className={styles.score}>{mainScore} %</span></p>
            </div>
            <div className={styles.details}>
                <div className={styles.levels}>
                    <p className={styles.levelsEasy}>Легкий - {score.easy} / {easyQuestionSize}</p>
                    <p className={styles.levelsMiddle}>Средний - {score.medium} / {mediumQuestionSize}</p>
                    <p className={styles.levelsHard}>Тяжелый - {score.hard} / {hardQuestionSize}</p>
                </div>
                <div className={styles.detailResult}>
                    <p>Всего правильных ответов: <span>{detailScore}</span> / {questionSize}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    score: getAppScore(state),
    questions: getAppQuestions(state),
    questionSize: getAppQuestionSize(state),
    levels: getAppLevels(state)
})

const ResultContainer = connect(mapStateToProps)(Result)

export default ResultContainer
