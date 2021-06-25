import React from "react"
import styles from "./Body.module.css"
import Start from "../Start";
import Question from "../Question";
import Result from "../Result";
import Button from "../common/Button";
// import Preloader from "../common/Preloader";

const Body = props => {

    const showPage = (currentPage = "start") => {
        switch (currentPage) {
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

        {/*<Preloader flag={props.isFetching} />*/}
        {showPage(props.currentPage)}
        <div className={styles.button}>
            {props.currentPage === "process" ? <Button nextPage={"start"} {...props}/> : ""}
            <Button {...props} />
        </div>
    </main>;
}

export default Body
