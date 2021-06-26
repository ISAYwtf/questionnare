import React from "react"
import arrow from "../../../assets/img/arrow.svg"
import again from "../../../assets/img/return.svg"
import styles from "./Button.module.css"
import {connect} from "react-redux";
import {getAppCurrentPage, getAppCurrentQuestion, getAppQuestionSize} from "../../../redux/app-reducer/app-selectors";
import {
    clearResult,
    fixAnswer,
    getQuestions,
    setCurrentPage,
    setCurrentQuestion
} from "../../../redux/app-reducer/app-reducer";

const Button = props => {
    const {
        currentPage,
        setCurrentPage,
        getQuestions,
        questionsSize,
        currentQuestion,
        setCurrentQuestion,
        fixAnswer,
        clearResult
    } = props

    let title = "Начать новый опрос"
    let img = arrow
    let imgClassName = styles.btnArrow
    let nextPage = props.nextPage ? props.nextPage : "finish"

    if (currentPage === "start") {
        title = "Начать опрос"
        nextPage = "process"
    } else if (currentPage === "process") {
        if (nextPage === "start") {
            title = "Начать новый опрос"
            img = again
            imgClassName = styles.btnReturn
        } else {
            title = "Следующий вопрос"
        }
    } else if (currentPage === "finish") {
        img = again
        imgClassName = styles.btnReturn
        nextPage = "start"
    }

    const changePage = () => {
        if (nextPage === "process" && currentPage === "start") {
            getQuestions(questionsSize)
        } else if (currentPage === "process" && nextPage !== "start" && currentQuestion < 9) {
            fixAnswer()
            setCurrentQuestion(currentQuestion + 1)
            return
        } else if (nextPage === "start") {
            clearResult()
        }

        setCurrentQuestion(0)

        return setCurrentPage(nextPage);
    }

    return <button onClick={changePage} data-page={currentPage}>
        <span className={styles.title}>{title}</span>
        <img src={img} className={`${styles.btnSvg} ${imgClassName}`}></img>
    </button>
}

const mapStateToProps = state => ({
    currentPage: getAppCurrentPage(state),
    questionsSize: getAppQuestionSize(state),
    currentQuestion: getAppCurrentQuestion(state),
})

const mapDispatchToProps = {
    setCurrentPage, getQuestions,
    setCurrentQuestion, fixAnswer, clearResult
}

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button)

export default ButtonContainer
