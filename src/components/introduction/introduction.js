import React from 'react'
import styles from "./introduction.module.scss"
import useTypewriter from "../../utils/hooks/useTypewritter.js"

const Introduction = () => {
    const text = "Hello, I'm Tejass";
    const subText= "and this is my portfolio..."
    const displayText = useTypewriter(text, 100);
    const displaySubText = useTypewriter(subText,100,2000)
  return (
    <section className={styles.intoduction}>
        <h1>
            <span>{displayText}</span>
            <p className={`text-xl`}>{displaySubText}<span className={styles.cursor}>|</span></p>

            
            {/* Hello, <span>I'm Tejass </span> */}
        </h1>
    </section>
  )
}

export default Introduction;