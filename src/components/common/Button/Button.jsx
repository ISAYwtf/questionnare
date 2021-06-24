import React from "react"
import arrow from "../../../assets/img/arrow.svg"
import again from "../../../assets/img/return.svg"
import styles from "./Button.module.css"

const Button = ({targetPage, setTargetPage}) => {
    let title = "Начать новый опрос"
    let img = arrow
    let imgClassName = styles.btnArrow
    let spanTitle = styles.titleBase
    let nextPage = "process"

    if (targetPage === "start") {
        title = "Начать опрос"
    } else if (targetPage === "process") {
        title = "Следующий вопрос"
        spanTitle += ` ${styles.titleProcess}`
    } else if (targetPage === "finish") {
        img = again
        imgClassName = styles.btnReturn
        nextPage = "start"
    }

    const changePage = () => setTargetPage(nextPage)

    return <div className={styles.button}>
        <button onClick={changePage}>
            <span className={spanTitle}>{title}</span>
            <img src={img} className={`${styles.btnSvg} ${imgClassName}`}></img>
        </button>
    </div>
}

export default Button
