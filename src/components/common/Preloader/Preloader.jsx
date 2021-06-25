import React from "react"
import styles from "./Preloader.module.css"

const Preloader = ({flag = true}) => {

    if (flag === false) return ""

    return <div className={styles.wrap}>
        <div className={styles.container}>
            <div className={styles.txt}>Loading...</div>
            <div className={styles.preloader}>
                <div className={styles.glare}></div>
                <div className={styles.glare}></div>
            </div>
        </div>
    </div>;
}

export default Preloader
