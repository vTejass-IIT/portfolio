import React from 'react'
import styles from "./introduction.module.scss"
import useTypewriter from "../../utils/hooks/useTypewritter.js"
import SpiderMan from '../spiderman/spiderman';

const Introduction = () => {
    const text = "Hello, I'm Tejass";
    const subText = "and this is my portfolio..."
    const displayText = useTypewriter(text, 100);
    const displaySubText = useTypewriter(subText, 100, 2000)
    return (
        <section className={` relative h-[100vh]`}>
            <SpiderMan />
            <section className={styles.intoduction}>
                <h1 className={` lg:text-[4rem] text-[2rem]`}>
                    {displayText}
                </h1>
                <p className={`text-lg md:text-xl`}>{displaySubText}<span className={styles.cursor}>|</span></p>
            </section>
            <div className={`absolute sm:bottom-20 bottom-10 w-full flex justify-center items-center z-[1]`}><a href="#overview"><div className={`w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2`}><div className="action-slider w-3 h-3 rounded-full bg-secondary mb-1 bg-white"></div></div></a></div>
        </section>
    )
}

export default Introduction;