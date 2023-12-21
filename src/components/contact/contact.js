import React from 'react'
import styles from "./contact.module.scss"
import { motion } from "framer-motion";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyPhoto from "../../assets/My_profile.png"
import MyResume from "../../assets/TejassV_Resume.pdf"
const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay:  1 / 10,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            className={styles.contact}>
            {/* <h2 class=" text-size-xl">
                Connect with me
            </h2> */}
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-around`}>
                <div className={`flex-[0.4] bg-black-100 p-8 rounded-2xl ` + styles.contact_body} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact Me.</h2>
                    <form className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-bold mb-4">Your Name</span>
                            <input type="text" name="name" placeholder="What's your good name?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` + styles.bg_tertiary} />
                        </label>
                        <label class="flex flex-col">
                            <span className="text-white font-bold mb-4">Your email</span>
                            <input type="email" name="email" placeholder="What's your web address?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` + styles.bg_tertiary} value="" />
                        </label>
                        <label className="flex flex-col">
                            <span className={`text-white font-bold mb-4`}>Your Message</span>
                            <textarea rows="7" name="message" placeholder="What you want to say?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` + styles.bg_tertiary}></textarea>
                        </label>
                        <button type="submit" className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ` + styles.bg_tertiary}>Send</button>
                    </form>
                </div>
                <div className={`flex-[0.4] bg-black-100 p-8 rounded-2xl ` + styles.contact_body + styles.contact_body_right} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <div className={styles.profile_card}>
                        <div className={styles.profile_card__image}>
                            <img src={MyPhoto} alt=""></img>
                        </div>
                        <div className={styles.profile_card__connect}>
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
                                        <a href={MyResume} rel="noreferrer" target="_blank"><LinkedInIcon /></a>
                                    </li>
                                    <li>
                                        <a href={MyResume} rel="noreferrer" target="_blank"><GitHubIcon /></a>
                                    </li>
                                    <li>
                                        <a href={MyResume} rel="noreferrer" target="_blank"><InstagramIcon /></a>
                                    </li>
                                    <li>
                                        <a href={MyResume} rel="noreferrer" target="_blank"><InstagramIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>

                            <a className={`icon_link`} href={MyResume} rel="noreferrer" target="_blank"> Download my resume from here <FileDownloadIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;