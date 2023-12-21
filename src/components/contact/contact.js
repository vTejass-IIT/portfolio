import React, { useRef } from 'react'
import styles from "./contact.module.scss"
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import MyPhoto from "../../assets/My_profile.png"
import MyResume from "../../assets/TejassV_Resume.pdf"
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8v17lfo', 'template_1lkwoiy', form.current, 'SuwlDd4xMtmwZq1rH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 1 / 10,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            className={styles.contact}
        >
            <div className={`xl:mt-12 flex lg:flex-row  flex-col-reverse gap-10 overflow-hidden justify-around p-10 lg:p-16`}>
                <div className={`flex-[0.4] bg-black-100 p-8 rounded-2xl ` + styles.contact_body} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                    <h2 className="text-white font-black lg:text-[4rem] text-[3rem]">Contact Me.</h2>
                    <form ref={form} onSubmit={sendEmail} className="mt-12 flex flex-col lg:gap-8 gap-4">
                        <label className="flex flex-col lg:text-[1.2rem] text-[1rem]">
                            <span className="text-white font-bold lg:mb-4 mb-2">Your Name</span>
                            <input type="text" name="user_name" placeholder="What's your good name?" className={`lg:py-4 lg:px-6 py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold lg:text-[1.2rem] text-[1rem] ` + styles.bg_tertiary} />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-bold lg:mb-4 mb-2">Your email</span>
                            <input type="email" name="user_email" placeholder="What's your web address?" className={`lg:py-4 lg:px-6 py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` + styles.bg_tertiary} />
                        </label>
                        <label className="flex flex-col">
                            <span className={`text-white font-bold lg:mb-4 mb-2`}>Your Message</span>
                            <textarea rows="7" name="message" placeholder="What you want to say?" className={`lg:py-4 lg:px-6 py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` + styles.bg_tertiary}></textarea>
                        </label>
                        <button type="submit" className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ` + styles.bg_tertiary}>Send</button>
                    </form>
                </div>
                <div className={`flex-[0.4] bg-black-100 p-0 lg:p-8 rounded-2xl ` + styles.contact_body + ` ` + styles.contact_body_right} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <div className={styles.profile_card}>
                        <div className={styles.profile_card__image}>
                            <img src={MyPhoto} alt=""></img>
                        </div>
                        <div className={` mt-5 mb-5 justify-between lg:justify-evenly ` + styles.profile_card__connect}>
                            <div>
                                <h4>
                                    Tejass Vishwanath
                                </h4>
                                <h4>
                                    +13127744945
                                </h4>
                                <h4>
                                    vtejass3749@gmail.com
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    Connect with me.
                                </h4>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/tejass-vishwanath/" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/vTejass-IIT" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`text-center w-[100%]`}>
                            <a className={`icon_link inline-block`} href={MyResume} rel="noreferrer" target="_blank"> Download my resume from here <FileDownloadIcon /></a>
                            <span className='block'>Liked what you see?</span>
                            <a className={`icon_link inline-block`} href="https://github.com/vTejass-IIT/portfolio" rel="noreferrer" target="_blank">  Check out the code here: <InsertLinkIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;