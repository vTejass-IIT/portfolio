import React from 'react';
import styles from "./overview.module.scss"

const Overview = () => {
    return (
        <section id="overview" className={styles.overview}>
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-20 rounded-2xl`}>
                    <p className={`main_color`}>
                        Introduction
                    </p>
                    <h2 className={`main_color`}>
                        Overview
                    </h2>
                    <div className={`text-lg`}>
                    I'm a skilled Full Stack software developer with experience in TypeScript and JavaScript, 
                    and expertise in frameworks like React, Angular, Node.js, MongoDB and Next.js. 
                    I'm a quick learner and collaborate closely with clients to create efficient, scalable, and 
                    user-friendly solutions that solve real-world problems.
                    Let's work together to bring your ideas to life!
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;