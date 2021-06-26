import React from "react"
import styles from "./Body.module.css"
import StartContainer from "../Start"
import ResultContainer from "../Result"
import ButtonContainer from "../common/Button"
import QuestionContainer from "../Question"

const Body = ({currentPage}) => {
    const showPage = (currentPage = "start") => {
        switch (currentPage) {
            case "start":
                return <StartContainer/>
            case "process":
                return <QuestionContainer/>
            case "finish":
                return <ResultContainer/>
            default:
                return <StartContainer/>
        }
    }

    return <main className={styles.body}>
        {showPage(currentPage)}
        <div className={styles.button}>
            {currentPage === "process" ? <ButtonContainer nextPage={"start"}/> : ""}
            <ButtonContainer/>
        </div>
    </main>
}

export default Body
