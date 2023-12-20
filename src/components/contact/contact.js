import React from 'react'
import styles from "./contact.module.scss"

const Contact = () => {
    return (
        <section className={styles.contact}>
            {/* <h2 class=" text-size-xl">
                Connect with me
            </h2> */}
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-center overflow-hidden `}>
                <div className={`flex-[0.5] bg-black-100 p-8 rounded-2xl ` +styles.contact_body} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact Me.</h2>
                    <form className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-bold mb-4">Your Name</span>
                            <input type="text" name="name" placeholder="What's your good name?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` +styles.bg_tertiary}/>
                        </label>
                        <label class="flex flex-col">
                            <span className="text-white font-bold mb-4">Your email</span>
                            <input type="email" name="email" placeholder="What's your web address?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` +styles.bg_tertiary} value="" />
                        </label>
                        <label className="flex flex-col">
                            <span className={`text-white font-bold mb-4`}>Your Message</span>
                            <textarea rows="7" name="message" placeholder="What you want to say?" className={`py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-bold ` +styles.bg_tertiary}></textarea>
                        </label>
                        <button type="submit" className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ` + styles.bg_tertiary}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;