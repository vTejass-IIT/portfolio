import React from 'react';
// import CreditCard from "../../assets/credit_card.png";
import Cards from '../cards/cards';

import styles from "./projects.module.scss"

const Projects = () => {

    const ProjectsData = [
        {
            heading: "Return Done",
            description: "Developed and maintained the Return Done website, employing React for frontend and C# for backend development. Implemented Azure for continuous integration and deployment, showcasing expertise in deployment strategies and infrastructure management.",
            technologies: ["ReactJS", "ASP.NET", "C#", "Azure"],
            repo: "https://github.com/vTejass-IIT/returnDone",
            link: "https://www.returndone.com/",
        },
        {
            heading: "AsianPaints",
            description: "Served as Lead Frontend Developer with responsibilities encompassing management and development of the AsianPaints website using AEM as the CMS platform.",
            technologies: ["VueJS", "Javascript", "AEM", "SEO"],
            link: "https://www.asianpaints.com/",
        },
        {
            heading: "Credit Card Fraud Detection Model",
            description: "Using dataset from Kaggle, performed various data preparation techniques and Feature Engineering techniques.",
            technologies: ["Python", "Machine Learning"],
            repo: "https://github.com/vTejass-IIT/cs584-creditCardFraudDetection",
        },
        {
            heading: "OpenAI Summary Model Dashboard",
            description: "Currently in process of leveraging OpenAI api's to create a web application, where the user can upload any content and get a summary the uploaded content.",
            technologies: ["ReactJS", "Axios"],
            repo: "https://github.com/vTejass-IIT/react_open_ai",
        },
        {
            heading: "SnowPark Python",
            description: "OpenSource contribution to Snowflake repository( *Inprogress)",
            technologies: ["Python"],
            repo: "https://github.com/vTejass-IIT/snowflake-connector-python/tree/SNOW-902662_Connector_changes_to_support_batch_size",
        }
    ]

    return (
        <section id="projects" className={styles.projects}>
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-10 md:p-16 lg:p-20 rounded-2xl`}>
                    <p className={`main_color`}>
                        My Work
                    </p>
                    <h2 className={`main_color`}>
                        Projects
                    </h2>
                    <div className={`text-lg`}>
                        Following are some projects and Websites i worked on that showcases my skills I gained throughout my Education and Professional experience.
                        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </div>
                </div>
            </div>
            <div className={` p-10 md:p-16 lg:p-20 md:pt-0 lg:pt-0 pt-0 `+styles.projects_container}>
                {ProjectsData.map((project, index) => {
                    return (
                        <Cards data={project} index={index} key={index} />
                    )
                })
                }
            </div>
        </section>
    )
}

export default Projects;