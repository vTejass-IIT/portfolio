import React from 'react';
import Technologies from '../technologies/technologies';
import styles from "./overview.module.scss"

const Overview = () => {
    return (
        <section id="overview" className={` p-5 md:p-16 lg:p-20 ` +styles.overview}>
            <div className={` flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-5 rounded-2xl`}>
                    <p className={`main_color`}>
                        Introduction
                    </p>
                    <h2 className={`main_color`}>
                        Overview
                    </h2>
                    <div className={`text-lg`}>
                    I'm a skilled Full Stack software developer with around 7 years experience in TypeScript and JavaScript, 
                    and expertise in frameworks like React, Angular, Node.js, ASP.NET, MongoDB and Next.js. 
                    I'm a quick learner and collaborate closely with clients to create efficient, scalable, and 
                    user-friendly solutions that solve real-world problems.
                    Let's work together to bring your ideas to life!
                    </div>
                </div>
            </div>
            <Technologies />
        </section>
    )
}

export default Overview;