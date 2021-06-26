import React from "react"
import styles from "./Footer.module.css"
import {connect} from "react-redux"
import {getAppCurrentPage, getAppCurrentQuestion, getAppQuestionSize} from "../../redux/app-reducer/app-selectors"

const Footer = props => {
    const {currentPage, currentQuestion, questionSize} = props

    const size = currentPage === "finish" ? 100 : 100 * currentQuestion / questionSize

    return <div className={styles.footer}>
        <div className={styles.line}>
            <div style={{width: `${size}%`}} className={styles.point}></div>
        </div>
    </div>
}

const mapStateToProps = state => ({
    currentPage: getAppCurrentPage(state),
    currentQuestion: getAppCurrentQuestion(state),
    questionSize: getAppQuestionSize(state),
})

const FooterContainer = connect(mapStateToProps)(Footer)

export default FooterContainer
