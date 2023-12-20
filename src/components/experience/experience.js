import React from 'react'
import styles from "./experience.module.scss"

import GraduationIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    Timeline
} from "@mui/lab";


const Experience = () => {

    return (
        <section className={`p-20 rounded-2xl `+styles.experience}>
            <p className={`main_color`}>
                What I have done so far
            </p>
            <h2 className={`main_color`}>
                Experience.
            </h2>
            <Timeline position="alternate">
                <TimelineItem className={styles.timeline_item}>
                    <TimelineOppositeContent color="text.secondary">
                        <h6>
                            2022 - 2024
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <span className={styles.experience_icon}>
                            <GraduationIcon />
                        </span>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <section className={styles.experience_card}>
                            <h4>
                                Masters of Science in Computer Science
                            </h4>
                            <section>
                                <h5>Illinois Institute of Technology, Chicago</h5>
                                <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 ` + styles.experience_card__description}>
                                    <ul className={`flex-[1] rounded-2xl ` + styles.experience_list}>
                                        <li>
                                            Key coursework included Artificial Intelligence ,Machine Learning, Natural Language Processing, Big Data and Software Project Management.
                                        </li>
                                        <li>
                                            Proficiency gained in Machine Learning Algorithim ,Python, Amazon Web Services(AWS), Google Cloud Platform(GCP) and Project Management Tools(Microsoft Project).
                                        </li>
                                        <li>
                                            Served as a Graduate Teaching Assistant, for Introduction to Artificial Intelligence.
                                        </li>
                                        <li>
                                            Hands-on experience through projects like developing an ML-driven fraud detection and Classifying Clickbait headlines using Natural Language Processing techniques.
                                        </li>
                                        <li>
                                            Collaborative environment fostering teamwork, seminars, and networking opportunities with professionals.
                                        </li>
                                        <li>
                                            Skills acquired include Problem-Solving, Critical Thinking, and Project Management, alongside technical expertise.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </section>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timeline_item}>
                    <TimelineOppositeContent color="text.secondary">
                        <h6>
                            2021 - 2022
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <span className={styles.experience_icon}>
                            <WorkIcon />
                        </span>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <section className={styles.experience_card}>
                            <h4>
                                Senior Software Engineer
                            </h4>
                            <section>
                                <h5>Freshworks, Bangalore, India</h5>
                                <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 ` + styles.experience_card__description}>
                                    <ul className={`flex-[1] rounded-2xl ` + styles.experience_list}>
                                        <li>
                                            Led frontend development efforts as the Lead Frontend Developer, focusing on designing effective design patterns for web components.
                                        </li>
                                        <li>
                                            Leveraged ReactJS, Redux and NodeJs, resulting in an up to 30% reduction in page load times and a 15% increase in user engagement for the FreshBots team.
                                        </li>
                                        <li>
                                            Demonstrated expertise in utilizing testing and debugging tools including Jest, Cypress, and React Testing Library.
                                        </li>
                                        <li>
                                            Thrived in an Agile development environment, collaborating seamlessly with designers, product managers, and stakeholders to ensure the delivery of high-quality products.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </section>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timeline_item}>
                    <TimelineOppositeContent color="text.secondary">
                        <h6>
                            2018 - 2021
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <span className={styles.experience_icon}>
                            <WorkIcon />
                        </span>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <section className={styles.experience_card}>
                            <h4>
                                Experience Developer Frontend
                            </h4>
                            <section >
                                <h5>ICF Next, Bangalore, India</h5>
                                <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 ` + styles.experience_card__description}>
                                    <ul className={`flex-[1] rounded-2xl ` + styles.experience_list}>
                                        <li>
                                            Served as Lead Frontend Developer with responsibilities encompassing management and development of the AsianPaints website using AEM as the CMS platform.
                                        </li>
                                        <li>
                                            Spearheaded the development of the Tally Loyalty Product, employing Angular, NodeJS, and SQL technologies.
                                        </li>
                                        <li>
                                            Played a vital role in maintaining Accessibility, enhancing SEO and optimizing Web Performance, which resulted in reduced page load times by 25% and boosted organic traffic by close to 20%.
                                        </li>
                                        <li>
                                            Mentored junior developers, providing guidance and support in their professional growth.
                                        </li>
                                        <li>
                                            Utilized Handlebars and Fractals to craft and exhibit reusable components, presenting them effectively to stakeholders.
                                        </li>
                                        <li>
                                            Designed and built a variety of reusable components utilizing HTML, SCSS, Angular, Vue, and Javascript. These components found application across diverse projects, bolstering the AEM development framework.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </section>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={styles.timeline_item}>
                    <TimelineOppositeContent color="text.secondary">
                        <h6>
                            2016 - 2018
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <span className={styles.experience_icon}>
                            <WorkIcon />
                        </span>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <section className={styles.experience_card}>
                            <h4>
                                Programmer Analyst
                            </h4>
                            <section >
                                <h5>Cognizant Technology Solutions</h5>
                                <h5>Bangalore, India</h5>
                                <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 ` + styles.experience_card__description}>
                                    <ul className={`flex-[1] rounded-2xl ` + styles.experience_list}>
                                        <li>
                                            Solely designed and developed an internal employee and banking application using Angular and Charts.js, showcasing self-reliance and technical proficiency.
                                        </li>
                                        <li>
                                            Assumed the role of Lead Accessibility developer across various projects within the company.
                                        </li>
                                        <li>
                                            Actively contributed to knowledge sharing within the team, imparting insights and educating them on WCAG standards.
                                        </li>
                                        <li>
                                            Consistently delivered projects which had a rating of 8 and above for accessibility provided by Level Access (SSB Bart).
                                        </li>
                                        <li>
                                            Improved and expanded websites in alignment with W3C and WCAG standards, utilizing HTML, JS, and Angular.
                                        </li>
                                        <li>
                                            Chosen for the task of crafting a Proof of Concept (PoC) for the client TITAN, showcasing expertise in development.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </section>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
            {/* <TimelineContent>
            <Paper elevation={8} className={styles.paper}>
              <div className="content">
                <h6 variant="h6" component="h1">
                  Graduation
                </h6>
                <div>
                    Hooray!!

                </div>
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
            </Timeline> */}
        </section>
    )
}

export default Experience