import React from "react"
import styles from "./Footer.module.css"

const Footer = props => {
    const size = props.targetPage === "finish" ? 100 : 100 * props.currentQuestion / props.questionSize

    return <div className={styles.footer}>
        <div className={styles.line}>
            <div style={{width: `${size}%`}} className={styles.point}></div>
        </div>
    </div>;
}

export default Footer;
