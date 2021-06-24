import React from "react"
import styles from "./Result.module.css"

const Result = props => {
    const detailScore = props.score.easy + props.score.middle + props.score.hard

    return (
        <div className={styles.container}>
            <div className={styles.result}>
                <p>Результат:</p>
                <p><span className={styles.score}>{props.score.main}</span> / 10</p>
            </div>
            <div className={styles.details}>
                <div className={styles.levels}>
                    <p className={styles.levelsEasy}>Легкий - {props.score.easy} / 4</p>
                    <p className={styles.levelsMiddle}>Средний - {props.score.middle} / 4</p>
                    <p className={styles.levelsHard}>Тяжелый - {props.score.hard} / 2</p>
                </div>
                <div className={styles.detailResult}>
                    <p>Всего правильных ответов: <span>{detailScore}</span> / 10</p>
                </div>
            </div>
        </div>
    )
}

export default Result
