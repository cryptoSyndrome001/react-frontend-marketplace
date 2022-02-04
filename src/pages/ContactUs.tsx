import React, {FC, useEffect} from "react";
import FaceBookIcon from "../components/icons/FaceBookIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import {renderSelect} from "../utils";

const ContactUs: FC = () => {
    useEffect(() => {
       renderSelect()
    }, []);

    return (
        <div className="contact-main-dark">
            <div className="container-fluid">
                <div className="wrapper">
                    <h2 className="heading heading-h2">Get in Touch</h2>
                </div>
                <span className="line"/>
                <div className="row row-contact">
                    <div className="col-lg-6 col-contact-box">
                        <div className="contact-box-inr">
                            <div className="box-address">
                                <h3 className="head heading-h3">We’d Love to Hear from You Guys!</h3>
                                <p className="desc body-m">Various versions have evolved over the years, sometimes by
                                    some accident sometimes on purpose (injected humour and the like).</p>
                                <div className="icon-otr">
                                    <div className="icon-inr">
                                        <div className="icon-inrr">
                                            <span className="circle"/>
                                            <svg className="icon" width="24" height="24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12.75a3 3 0 100-6 3 3 0 000 6z" stroke="#999"
                                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path
                                                    d="M19.5 9.75c0 6.75-7.5 12-7.5 12s-7.5-5.25-7.5-12a7.5 7.5 0 0115 0v0z"
                                                    stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h4 className="head-icon heading-h4">Address</h4>
                                    </div>
                                    <p className="text body-m">3102 Catherine Drive, Fargo, North Dakota</p>
                                </div>
                                <div className="icon-main">
                                    <div className="icon-otr-2">
                                        <div className="icon-inr">
                                            <div className="icon-inrr">
                                                <span className="circle"/>
                                                <svg className="icon" width="24" height="24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.67 11.701a7.908 7.908 0 003.66 3.645.742.742 0 00.735-.056l2.347-1.565a.75.75 0 01.711-.065l4.391 1.882a.748.748 0 01.45.778 4.501 4.501 0 01-4.464 3.93A12.75 12.75 0 013.75 7.5a4.5 4.5 0 013.93-4.464.747.747 0 01.778.45l1.884 4.394a.751.751 0 01-.062.706L8.72 10.97a.743.743 0 00-.05.731v0z"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <h4 className="head-icon heading-h4">Phone</h4>
                                        </div>
                                        <p className="text body-m">+58 701-232-1152</p>
                                    </div>
                                    <div className="icon-otr-2 icon-otr-3">
                                        <div className="icon-inr">
                                            <div className="icon-inrr">
                                                <span className="circle"/>
                                                <svg className="icon" width="24" height="24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3 5.25h18V18a.75.75 0 01-.75.75H3.75A.75.75 0 013 18V5.25z"
                                                        stroke="#999" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path d="M21 5.25l-9 8.25-9-8.25" stroke="#999" strokeWidth="2"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <h4 className="head-icon heading-h4">Email</h4>
                                        </div>
                                        <p className="text body-m">blah.worldwide@gmail.com</p>
                                    </div>
                                </div>
                                <div className="social-icon-otr">
                                    <h4 className="head-2 heading-h4">Follow BLAH on Social Media</h4>
                                    <ul className="icon-ul">
                                        <FaceBookIcon/>
                                        <DiscordIcon/>
                                        <InstagramIcon/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-message-otr">
                        <div className="col-message-inr">
                            <h3 className="head heading-h3">Drop Us a Message</h3>
                            <p className="desc body-m">Feel free to contact us anytime. We’re available here for
                                you.</p>
                            <form className="form-main" method="post">
                                <div className="input-otr">
                                    <input className="input" type="text" name="fname" placeholder="Your Full Name"
                                           required/>
                                </div>
                                <div className="input-otr">
                                    <input className="input" type="email" name="email" placeholder="Your Email Address"
                                           required/>
                                </div>
                                <div className="input-otr">
                                    <select id="year">
                                        <option className="linkk" value="hide">Select Subject</option>
                                        <option className="linkk" value="2010">UI Design</option>
                                        <option className="linkk" value="2011">UI/UX</option>
                                        <option className="linkk" value="2012">Web Development</option>
                                        <option className="linkk" value="2013">UI/UX</option>
                                    </select>
                                </div>
                                <div className="input-otr">
                                    <textarea className="textarea input" name="message" placeholder="Type your message" required/>
                                </div>
                                <div className="action-otr">
                                    <input className="button body-sb" type="submit" value="Send Message"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
