import React from 'react'
import styles from "./experience.module.scss"

import GraduationIcon from "@material-ui/icons/School";

import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    Timeline
} from "@mui/lab";
import ExperienceCard from '../experience_card/experience_card';


const Experience = () => {
    const experienceData = [
        {
            timeline:"2022 - 2024",
            heading:"Masters of Science in Computer Science",
            location:"Illinois Institute of Technology, Chicago",
            summary:[
                "Key coursework included Artificial Intelligence ,Machine Learning, Natural Language Processing, Big Data and Software Project Management.",
                "Proficiency gained in Machine Learning Algorithim ,Python, Amazon Web Services(AWS), Google Cloud Platform(GCP) and Project Management Tools(Microsoft Project).",
                "Served as a Graduate Teaching Assistant, for Introduction to Artificial Intelligence.",
                "Hands-on experience through projects like developing an ML-driven fraud detection and Classifying Clickbait headlines using Natural Language Processing techniques.",
                "Collaborative environment fostering teamwork, seminars, and networking opportunities with professionals.",
                "Skills acquired include Problem-Solving, Critical Thinking, and Project Management, alongside technical expertise."
            ]
        },{
            timeline:"2021 - 2022",
            heading:"Senior Software Engineer",
            location:"Freshworks, Bangalore, India",
            summary:[
                "Led frontend development efforts as the Lead Frontend Developer, focusing on designing effective design patterns for web components.",
                "Leveraged ReactJS, Redux and NodeJs, resulting in an up to 30% reduction in page load times and a 15% increase in user engagement for the FreshBots team.",
                "Demonstrated expertise in utilizing testing and debugging tools including Jest, Cypress, and React Testing Library.",
                "Thrived in an Agile development environment, collaborating seamlessly with designers, product managers, and stakeholders to ensure the delivery of high-quality products.",
            ]
        },{
            timeline:"2018 - 2021",
            heading:"Experience Developer Frontend",
            location:"ICF Next, Bangalore, India",
            summary:[
                "Served as Lead Frontend Developer with responsibilities encompassing management and development of the AsianPaints website using AEM as the CMS platform.",
                "Spearheaded the development of the Tally Loyalty Product, employing Angular, NodeJS, and SQL technologies.",
                "Mentored junior developers, providing guidance and support in their professional growth.",
                "Utilized Handlebars and Fractals to craft and exhibit reusable components, presenting them effectively to stakeholders.",
                "Designed and built a variety of reusable components utilizing HTML, SCSS, Angular, Vue, and Javascript. These components found application across diverse projects, bolstering the AEM development framework."
            ]
        },{
            timeline:"2016 - 2018",
            heading:"Programmer Analyst",
            location:"Cognizant Technology Solutions, Bangalore, India",
            summary:[
                "Solely designed and developed an internal employee and banking application using Angular and Charts.js, showcasing self-reliance and technical proficiency.",
                "Assumed the role of Lead Accessibility developer across various projects within the company.",
                "Actively contributed to knowledge sharing within the team, imparting insights and educating them on WCAG standards.",
                "Consistently delivered projects which had a rating of 8 and above for accessibility provided by Level Access (SSB Bart).",
                "Improved and expanded websites in alignment with W3C and WCAG standards, utilizing HTML, JS, and Angular.",
                "Chosen for the task of crafting a Proof of Concept (PoC) for the client TITAN, showcasing expertise in development."
            ]
        }
    ]
    return (
        <section className={`p-20 rounded-2xl `+styles.experience}>
            <p className={`main_color`}>
                What I have done so far
            </p>
            <h2 className={`main_color`}>
                Experience.
            </h2>
            <Timeline position="alternate">
                {experienceData.map((item,index)=>{
                    return(
                        <TimelineItem className={styles.timeline_item}>
                            <TimelineOppositeContent color="text.secondary">
                                <h6>
                                    {item.timeline}
                                </h6>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <span className={styles.experience_icon}>
                                    <GraduationIcon />
                                </span>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <ExperienceCard experience={item} index={index}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </section>
    )
}

export default Experience