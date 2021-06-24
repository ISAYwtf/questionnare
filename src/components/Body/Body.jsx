import React from "react"
import styles from "./Body.module.css"
import Start from "../Start";
import Question from "../Question";
import Result from "../Result";
import Button from "../common/Button";

const Body = props => {
    const showPage = (targetPage = "start") => {
        switch (targetPage) {
            case "start":
                return <Start {...props} />
            case "process":
                return <Question {...props} />
            case "finish":
                return <Result {...props}/>
            default:
                return <Start {...props}/>
        }
    }

    return <main className={styles.body}>
        {showPage(props.targetPage)}
        <Button targetPage={props.targetPage} setTargetPage={props.setTargetPage}/>
    </main>;
}

export default Body
