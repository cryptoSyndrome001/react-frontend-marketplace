import React, {FC} from "react";

const Copyright: FC = () => {
    return (
        <div className="copy-otr-dark">
            <div className="container-fluid">
                <div className="copy-inr">
                    <div className="language-selector">
                        <ul className="language-ul">
                            <li className="language-li">
                                <a className="language-a">
                                    <img className="flag-img" src="./img/flag-img1.png" alt="flag-img"/>
                                        <p className="body-sb language">English</p>
                                        <svg className="caret-down" width="12" height="8" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1.5l-5 5-5-5" stroke="#666" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </a>
                                <ul className="drop-ul">
                                    <li className="drop-li">
                                        <a href="" className="drop-a">
                                            <img className="flag-img" src="./img/flag-img1.png" alt="flag-img"/>
                                                <p className="body-sb language">English</p>
                                        </a>
                                    </li>
                                    <li className="drop-li">
                                        <a href="" className="drop-a">
                                            <img className="flag-img" src="./img/flag-img2.png" alt="flag-img"/>
                                                <p className="body-sb language">Pakistan</p>
                                        </a>
                                    </li>
                                    <li className="drop-li">
                                        <a href="" className="drop-a">
                                            <img className="flag-img" src="./img/flag-img3.png" alt="flag-img"/>
                                                <p className="body-sb language">UAE</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="copy-name body-s">
                        Copyright © 2021 by <a href="/" target="_blank"
                                               className="name body-sb">Princeps Polycap Productions.</a> All rights reserved.
                    </div>
                    <div className="privacy-link">
                        <a href="#" className="link body-sb">Privacy Policy</a>
                        <span className="dot">•</span>
                        <a href="#" className="link body-sb">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright
