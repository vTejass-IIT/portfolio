import React from 'react'
import styles from './spiderman.module.scss'

const SpiderMan = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spiderman}>
                <div className={styles.head}>
                    <div className={styles.eye_left}></div>
                    <div className={styles.eye_right}></div>
                </div>
                <div className={styles.body}>
                    <div className={styles.spider}></div>
                    <div className={styles.arm_left}></div>
                    <div className={styles.arm_right}></div>
                </div>
                <div className={styles.legs}>
                    <div className={styles.boot_left}></div>
                    <div className={styles.boot_right}></div>
                </div>
            </div>
        </div>
    )
}

export default SpiderMan